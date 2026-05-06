/**
 * 겜코리아 콘텐츠 라이브러리 저장 유틸리티
 * C모드 숏츠 생성 후 호출하여 library.json에 저장한다.
 */
const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';

function saveToLibrary(scripts) {
  const libraryPath = base+'content/library.json';
  const heritagePath = base+'data/heritage_all.json';

  // 기존 라이브러리 로드
  let library = { '_comment':'겜코리아 콘텐츠 라이브러리 — 삭제 금지', total:0, last_updated:'', contents:[] };
  try { library = JSON.parse(fs.readFileSync(libraryPath,'utf8')); }
  catch(e) { console.log('신규 라이브러리 생성'); }

  // 헤리티지 데이터 맵
  const heritage = JSON.parse(fs.readFileSync(heritagePath,'utf8'));
  const heritageMap = {};
  heritage.forEach(d => heritageMap[d.place_id] = d);

  const existingIds = new Set(library.contents.map(c=>c.place_id));
  const now = new Date().toISOString().slice(0,19);

  let nextNum = library.contents.length + 1;
  let added = 0;

  scripts.forEach(s => {
    if (existingIds.has(s.place_id)) {
      // 기존 항목 업데이트 (상태만)
      const idx = library.contents.findIndex(c=>c.place_id===s.place_id);
      if (idx >= 0) library.contents[idx].content_status = s.content_status || 'review_pending';
      return;
    }

    const h = heritageMap[s.place_id] || {};
    const newContent = {
      id: 'CL-'+String(nextNum++).padStart(3,'0'),
      place_id: s.place_id,
      place_name: s.place_name,
      category_main: h.category_main || '역사',
      category_sub: h.category_sub || '',
      period_category: h.period_category || '',
      region: h.region || '',
      generated_at: now,
      content_status: s.content_status || 'review_pending',
      script_30s: s.script_30s?.text || s.script_30s || '',
      script_60s: s.script_60s?.text || s.script_60s || '',
      emotion_keywords: [...new Set([
        ...(s.script_30s?.emotion_keywords_used||[]),
        ...(s.script_60s?.emotion_keywords_used||[])
      ])],
      hooks: s.hooks || [],
      thumbnails: s.thumbnails || [],
      video_description: s.video_description || '',
      captions: s.captions || {},
      hashtags: s.hashtags || {},
      map_card_intro: s.map_card_intro || '',
      filming_ideas: s.filming_ideas || []
    };

    library.contents.push(newContent);
    existingIds.add(s.place_id);
    added++;
  });

  library.total = library.contents.length;
  library.last_updated = now;

  fs.writeFileSync(libraryPath, JSON.stringify(library, null, 2), 'utf8');
  console.log('[라이브러리] 저장 완료 — 신규: '+added+'개 / 전체: '+library.total+'개');
  return { added, total: library.total };
}

module.exports = { saveToLibrary };

// 직접 실행 시 테스트
if (require.main === module) {
  const lib = JSON.parse(fs.readFileSync(base+'content/library.json','utf8'));
  console.log('현재 라이브러리: '+lib.total+'개');
  lib.contents.forEach(c => console.log('  ['+c.id+'] '+c.place_name+' ('+c.content_status+')'));
}
