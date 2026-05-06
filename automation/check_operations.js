/**
 * 겜코리아 체험 운영 확인 스크립트
 * operation_check_mode = ON 일 때만 실행
 *
 * 실행: node automation/check_operations.js
 * 또는 자동화 사이클에서 호출
 */
const fs = require('fs');
const https = require('https');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';

/* ── 모드 확인 ── */
function getMode() {
  const config = JSON.parse(fs.readFileSync(base+'automation/config.json','utf8'));
  return config.operation_check?.mode || 'OFF';
}

function setMode(mode) {
  const config = JSON.parse(fs.readFileSync(base+'automation/config.json','utf8'));
  config.operation_check.mode = mode;
  config.operation_check.mode_updated = new Date().toISOString().slice(0,19);
  fs.writeFileSync(base+'automation/config.json', JSON.stringify(config,null,2),'utf8');
  console.log(`[운영 확인] 모드 변경: ${mode}`);
}

/* ── 우선순위 정렬 ── */
function sortByPriority(experiences) {
  const statusOrder = { 'needs_check':0, 'unknown':1, '':2, 'active':3 };
  return experiences
    .filter(e => ['candidate','approved'].includes(e.tour_status))
    .sort((a,b) => {
      // 1순위: needs_check/unknown 먼저
      const sa = statusOrder[a.operation_status||''] ?? 2;
      const sb = statusOrder[b.operation_status||''] ?? 2;
      if (sa !== sb) return sa - sb;
      // 2순위: last_verified 오래된 것
      const da = a.last_verified ? new Date(a.last_verified) : new Date(0);
      const db = b.last_verified ? new Date(b.last_verified) : new Date(0);
      return da - db;
    });
}

/* ── 키워드 기반 운영 상태 추정 ── */
function estimateStatus(htmlText, name) {
  if (!htmlText) return 'unknown';
  const text = htmlText.toLowerCase();

  const closedKeywords = ['휴무','임시 중단','임시휴무','공사중','공사','리뉴얼','리모델링','temporarily closed','closed'];
  const endedKeywords = ['서비스 종료','폐업','운영 종료','영업 종료','영구 폐쇄','permanently closed'];
  const activeKeywords = ['운영시간','이용안내','예약','open','영업시간','입장시간','관람시간'];

  if (endedKeywords.some(k => text.includes(k))) return 'ended';
  if (closedKeywords.some(k => text.includes(k))) return 'temporarily_closed';
  if (activeKeywords.some(k => text.includes(k))) return 'active';
  return 'needs_check';
}

/* ── 가격 추출 ── */
function extractPrice(htmlText) {
  if (!htmlText) return '';
  const patterns = [
    /(\d{1,3}[,，]?\d{3})\s*원/g,
    /무료/g,
    /free/gi
  ];
  const prices = [];
  for (const pat of patterns) {
    const matches = htmlText.match(pat);
    if (matches) prices.push(...matches.slice(0,2));
  }
  return prices.slice(0,2).join(' / ');
}

/* ── URL 페치 (간단한 HTTP GET) ── */
function fetchPage(url, timeout=8000) {
  return new Promise((resolve) => {
    try {
      const req = https.get(url, { timeout }, (res) => {
        let data = '';
        res.on('data', chunk => { data += chunk; if(data.length > 50000) req.destroy(); });
        res.on('end', () => resolve(data));
      });
      req.on('error', () => resolve(''));
      req.on('timeout', () => { req.destroy(); resolve(''); });
    } catch(e) { resolve(''); }
  });
}

/* ── 메인 실행 ── */
async function run() {
  const mode = getMode();
  if (mode !== 'ON') {
    console.log('[운영 확인] 모드 OFF — 실행 안 함. "체험 운영 체크 켜줘" 명령으로 ON 전환.');
    return;
  }

  console.log('[운영 확인] 모드 ON — 시작합니다.');

  const lib = JSON.parse(fs.readFileSync(base+'data/experiences.json','utf8'));
  const experiences = lib.experiences;
  const now = new Date().toISOString().slice(0,10);
  const thirtyDaysAgo = new Date(Date.now() - 30*24*60*60*1000).toISOString().slice(0,10);

  // 우선순위 정렬 후 최대 20개
  const targets = sortByPriority(experiences)
    .filter(e => !e.last_verified || e.last_verified < thirtyDaysAgo)
    .slice(0, 20);

  if (targets.length === 0) {
    console.log('[운영 확인] 확인할 항목 없음 (모두 최근 30일 이내 확인됨)');
    return;
  }

  console.log(`[운영 확인] 확인 대상: ${targets.length}개 (전체 후보 ${experiences.filter(e=>['candidate','approved'].includes(e.tour_status)).length}개 중)`);

  const report = {
    active: [], temporarily_closed: [], ended: [], needs_check: [], unknown: [],
    price_changed: [], reservation_changed: [], changes: []
  };

  for (const exp of targets) {
    console.log(`  확인 중: [${exp.experience_id}] ${exp.name}`);
    const url = exp.website || (exp.source_urls?.[0]) || '';
    let html = '';
    if (url && url.startsWith('http')) {
      html = await fetchPage(url);
    }

    const prevStatus = exp.operation_status || 'needs_check';
    const newStatus = estimateStatus(html, exp.name);
    const newPrice = html ? extractPrice(html) : '';

    // 변경 감지
    if (prevStatus !== newStatus) {
      report.changes.push({ name:exp.name, field:'operation_status', before:prevStatus, after:newStatus });
    }
    if (newPrice && exp.price_confirmed && newPrice !== exp.price_confirmed) {
      report.changes.push({ name:exp.name, field:'price', before:exp.price_confirmed, after:newPrice });
      report.price_changed.push(exp.name);
    }

    // 데이터 업데이트
    const idx = experiences.findIndex(e => e.experience_id === exp.experience_id);
    if (idx >= 0) {
      const prev = { ...experiences[idx] };
      experiences[idx] = {
        ...experiences[idx],
        operation_status: newStatus,
        price_confirmed: newPrice || experiences[idx].price_confirmed,
        price_last_checked: newPrice ? now : experiences[idx].price_last_checked,
        last_verified: now,
        change_log: [
          ...(experiences[idx].change_log || []),
          ...(prevStatus !== newStatus ? [{ date:now, field:'operation_status', before:prevStatus, after:newStatus, source:url||'direct_check' }] : []),
          ...(newPrice && newPrice !== prev.price_confirmed ? [{ date:now, field:'price', before:prev.price_confirmed, after:newPrice, source:url }] : [])
        ]
      };

      // 젬투어 후보 확정 불가 처리
      if (['needs_check','unknown','temporarily_closed','ended'].includes(newStatus)) {
        if (experiences[idx].tour_status === 'approved') {
          experiences[idx].tour_status = 'candidate';
          report.changes.push({ name:exp.name, field:'tour_status', before:'approved', after:'candidate', reason:'운영 상태 불확실' });
        }
      }
    }

    report[newStatus].push(exp.name);
    await new Promise(r => setTimeout(r, 500)); // 요청 간격
  }

  // 저장
  lib.experiences = experiences;
  lib.last_updated = new Date().toISOString().slice(0,19);
  fs.writeFileSync(base+'data/experiences.json', JSON.stringify(lib,null,2),'utf8');

  // 로그 저장
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

  // 보고 출력
  console.log('\n[체험 운영 확인 보고]');
  console.log('확인 날짜: '+now);
  console.log('확인한 체험: '+targets.length+'개');
  console.log('');
  console.log('[결과 요약]');
  console.log('운영 중 확인: '+report.active.length+'개  '+report.active.join(', '));
  console.log('임시휴무 의심: '+report.temporarily_closed.length+'개  '+report.temporarily_closed.join(', '));
  console.log('종료 의심: '+report.ended.length+'개  '+report.ended.join(', '));
  console.log('가격 변경 감지: '+report.price_changed.length+'개');
  console.log('needs_check (불확실): '+report.needs_check.length+'개  '+report.needs_check.join(', '));
  if (report.changes.length > 0) {
    console.log('\n[변경 사항]');
    report.changes.forEach(c => console.log(`  - [${c.name}] ${c.field}: ${c.before} → ${c.after}`));
  }

  // config 업데이트
  const config = JSON.parse(fs.readFileSync(base+'automation/config.json','utf8'));
  config.operation_check.last_run = now;
  fs.writeFileSync(base+'automation/config.json', JSON.stringify(config,null,2),'utf8');

  console.log('\n✅ 운영 확인 완료 — logs/operation_check_log.json 저장됨');
}

// ON/OFF 전환 함수 (외부 호출용)
function turnOn()  { setMode('ON');  console.log('✅ 체험 운영 확인 모드 ON'); }
function turnOff() { setMode('OFF'); console.log('✅ 체험 운영 확인 모드 OFF'); }

module.exports = { run, turnOn, turnOff, getMode };

if (require.main === module) {
  const arg = process.argv[2];
  if (arg === 'on')  { turnOn();  }
  else if (arg === 'off') { turnOff(); }
  else { run().catch(console.error); }
}
