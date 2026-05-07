// 에이전트들이 반환한 URL 업데이트를 heritage_all.json과 library.json에 적용
const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';

// 에이전트 결과를 여기에 입력 (place_id: [url1, url2] 형식)
const updates = {};

function apply(updates) {
  if (!Object.keys(updates).length) { console.log('업데이트 없음'); return; }

  // heritage_all.json 업데이트
  const heritage = JSON.parse(fs.readFileSync(base+'data/heritage_all.json','utf8'));
  const now = new Date().toISOString().slice(0,19);
  let hCount = 0;
  const hUpdated = heritage.map(h => {
    if (updates[h.place_id]) {
      const existing = h.source_urls || [];
      const newUrls = [...new Set([...updates[h.place_id], ...existing])].filter(u=>u&&u.startsWith('http'));
      hCount++;
      return { ...h, source_urls: newUrls };
    }
    return h;
  });
  fs.writeFileSync(base+'data/heritage_all.json', JSON.stringify(hUpdated, null, 2), 'utf8');

  // library.json 업데이트
  const lib = JSON.parse(fs.readFileSync(base+'content/library.json','utf8'));
  const hMap = {};
  hUpdated.forEach(h => hMap[h.place_id] = h);
  let lCount = 0;
  lib.contents = lib.contents.map(c => {
    if (updates[c.place_id] || (hMap[c.place_id] && hMap[c.place_id].source_urls)) {
      const hUrls = hMap[c.place_id]?.source_urls || [];
      const newUrls = [...new Set([...(updates[c.place_id]||[]), ...hUrls])].filter(u=>u&&u.startsWith('http'));
      lCount++;
      return { ...c, source_urls: newUrls };
    }
    return c;
  });
  lib.last_updated = now;
  fs.writeFileSync(base+'content/library.json', JSON.stringify(lib, null, 2), 'utf8');

  console.log(`heritage_all.json: ${hCount}개 업데이트`);
  console.log(`library.json: ${lCount}개 업데이트`);
}

apply(updates);
