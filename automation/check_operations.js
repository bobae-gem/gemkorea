/**
 * 겜코리아 체험 운영 확인 스크립트 (Node 18+ fetch 사용)
 * 실행: node automation/check_operations.js [on|off|run]
 */
const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';

function getConfig() {
  return JSON.parse(fs.readFileSync(base+'automation/config.json','utf8'));
}
function getMode() { return getConfig().operation_check?.mode || 'OFF'; }

function setMode(mode) {
  const config = getConfig();
  config.operation_check.mode = mode;
  config.operation_check.mode_updated = new Date().toISOString().slice(0,19);
  fs.writeFileSync(base+'automation/config.json', JSON.stringify(config,null,2),'utf8');
  console.log(`✅ operation_check_mode → ${mode}`);
}

/* 우선순위 정렬 */
function sortByPriority(exps) {
  const order = { needs_check:0, unknown:1, '':2, active:3 };
  return exps
    .filter(e => ['candidate','approved'].includes(e.tour_status))
    .sort((a,b) => {
      const sa = order[a.operation_status||''] ?? 2;
      const sb = order[b.operation_status||''] ?? 2;
      if (sa !== sb) return sa-sb;
      const da = a.last_verified ? new Date(a.last_verified) : new Date(0);
      const db = b.last_verified ? new Date(b.last_verified) : new Date(0);
      return da-db;
    });
}

/* URL 페치 — 내장 fetch + AbortController 타임아웃 */
async function fetchPage(url) {
  if (!url || !url.startsWith('http')) return '';
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 8000);
  try {
    const res = await fetch(url, {
      signal: controller.signal,
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; GemKorea-Bot/1.0)' },
      redirect: 'follow'
    });
    clearTimeout(timer);
    if (!res.ok) return '';
    const text = await res.text();
    return text.substring(0, 60000);
  } catch(e) {
    clearTimeout(timer);
    return '';
  }
}

/* 키워드 기반 운영 상태 추정 */
function estimateStatus(html) {
  if (!html) return 'unknown';
  const t = html.toLowerCase();
  const ended   = ['서비스 종료','폐업','운영 종료','영업 종료','영구 폐쇄','permanently closed'];
  const closed  = ['휴무','임시 중단','임시휴무','공사중','리뉴얼','리모델링','temporarily closed'];
  const active  = ['운영시간','이용안내','예약','open','영업시간','입장시간','관람시간','운영 중','이용 가능'];
  if (ended.some(k  => t.includes(k))) return 'ended';
  if (closed.some(k => t.includes(k))) return 'temporarily_closed';
  if (active.some(k => t.includes(k))) return 'active';
  return 'needs_check';
}

/* 가격 추출 */
function extractPrice(html) {
  if (!html) return '';
  const matches = html.match(/[\d,]+\s*원/g) || [];
  const prices = [...new Set(matches)].slice(0,3);
  if (html.toLowerCase().includes('무료')) prices.unshift('무료');
  return prices.slice(0,2).join(' / ');
}

/* 전화번호 추출 */
function extractPhone(html) {
  if (!html) return '';
  const m = html.match(/0\d{1,2}[-.\s]\d{3,4}[-.\s]\d{4}/);
  return m ? m[0] : '';
}

/* 메인 실행 */
async function run() {
  if (getMode() !== 'ON') {
    console.log('[운영 확인] 모드 OFF — 실행 안 함');
    console.log('→ "체험 운영 체크 시작" 또는 node check_operations.js on 으로 켜세요.');
    return;
  }

  console.log('[운영 확인] 시작 (모드 ON)');
  const lib = JSON.parse(fs.readFileSync(base+'data/experiences.json','utf8'));
  const exps = lib.experiences;
  const now  = new Date().toISOString().slice(0,10);
  const cutoff = new Date(Date.now()-30*24*60*60*1000).toISOString().slice(0,10);

  const targets = sortByPriority(exps)
    .filter(e => !e.last_verified || e.last_verified < cutoff)
    .slice(0, 20);

  if (!targets.length) {
    console.log('[운영 확인] 확인할 항목 없음 (모두 30일 이내 확인됨)');
    return;
  }

  const total = exps.filter(e => ['candidate','approved'].includes(e.tour_status)).length;
  console.log(`확인 대상: ${targets.length}개 / 전체 후보 ${total}개`);

  const report = { active:[], temporarily_closed:[], ended:[], needs_check:[], unknown:[], price_changed:[], changes:[] };

  for (let i=0; i<targets.length; i++) {
    const exp = targets[i];
    const url = exp.website || exp.source_urls?.[0] || '';
    process.stdout.write(`  [${i+1}/${targets.length}] ${exp.name} ... `);

    const html = await fetchPage(url);
    const newStatus = estimateStatus(html);
    const newPrice  = extractPrice(html);
    const newPhone  = extractPhone(html);

    const prevStatus = exp.operation_status || 'needs_check';
    const prevPrice  = exp.price_confirmed || '';

    const changes = [];
    if (prevStatus !== newStatus) {
      changes.push({ date:now, field:'operation_status', before:prevStatus, after:newStatus, source:url });
      report.changes.push({ name:exp.name, field:'operation_status', before:prevStatus, after:newStatus });
    }
    if (newPrice && newPrice !== prevPrice) {
      changes.push({ date:now, field:'price', before:prevPrice, after:newPrice, source:url });
      report.price_changed.push(exp.name);
    }

    const idx = exps.findIndex(e => e.experience_id === exp.experience_id);
    if (idx >= 0) {
      exps[idx] = {
        ...exps[idx],
        operation_status: newStatus,
        phone: newPhone || exps[idx].phone,
        price_confirmed: newPrice || exps[idx].price_confirmed,
        price_last_checked: newPrice ? now : exps[idx].price_last_checked,
        last_verified: now,
        change_log: [...(exps[idx].change_log||[]), ...changes]
      };
      if (['needs_check','unknown','ended'].includes(newStatus) && exps[idx].tour_status==='approved') {
        exps[idx].tour_status = 'candidate';
        report.changes.push({ name:exp.name, field:'tour_status', before:'approved', after:'candidate', reason:'운영 상태 불확실' });
      }
    }
    report[newStatus].push(exp.name);
    console.log(newStatus);
  }

  lib.experiences = exps;
  lib.last_updated = new Date().toISOString().slice(0,19);
  fs.writeFileSync(base+'data/experiences.json', JSON.stringify(lib,null,2),'utf8');

  const logPath = base+'logs/operation_check_log.json';
  let logs = { runs:[] };
  try { logs = JSON.parse(fs.readFileSync(logPath,'utf8')); } catch(e) {}
  logs.runs.push({
    date: now,
    checked: targets.length,
    result: {
      active: report.active.length,
      temporarily_closed: report.temporarily_closed.length,
      ended: report.ended.length,
      needs_check: report.needs_check.length,
      unknown: report.unknown.length
    },
    price_changed: report.price_changed.length,
    changes: report.changes
  });
  fs.writeFileSync(logPath, JSON.stringify(logs,null,2),'utf8');

  const config = getConfig();
  config.operation_check.last_run = now;
  fs.writeFileSync(base+'automation/config.json', JSON.stringify(config,null,2),'utf8');

  console.log('\n─────────────────────────────────');
  console.log('[체험 운영 확인 보고] '+now);
  console.log('확인: '+targets.length+'개');
  console.log('✅ 운영 중: '+report.active.length+'개  '+report.active.join(', '));
  console.log('⚠️  임시휴무: '+report.temporarily_closed.length+'개  '+report.temporarily_closed.join(', '));
  console.log('❌ 종료 의심: '+report.ended.length+'개  '+report.ended.join(', '));
  console.log('🔍 확인 필요: '+report.needs_check.length+'개');
  console.log('❓ 정보 없음: '+report.unknown.length+'개');
  console.log('💰 가격 변동: '+report.price_changed.length+'개  '+report.price_changed.join(', '));
  if (report.changes.length) {
    console.log('\n[변경 사항]');
    report.changes.forEach(c => console.log('  '+c.name+' '+c.field+': '+c.before+' → '+c.after));
  }
  console.log('\n✅ logs/operation_check_log.json 저장 완료');
}

module.exports = { run, setMode, getMode };

if (require.main === module) {
  const arg = process.argv[2];
  if      (arg === 'on')  setMode('ON');
  else if (arg === 'off') setMode('OFF');
  else run().catch(e => { console.error('오류:', e.message); });
}
