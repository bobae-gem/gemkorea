const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const now = new Date().toISOString().slice(0,19);

const updates = {
  "GK-SE-GUN-0004": ["https://ko.wikipedia.org/wiki/%EB%8D%95%EC%88%98%EA%B6%81","https://www.heritage.go.kr/heri/cul/culSelectDetail.do?ccbaCpno=1331101240000","https://encykorea.aks.ac.kr/Article/E0015361"],
  "GK-IC-GWA-0001": ["https://ko.wikipedia.org/wiki/%EA%B0%95%ED%99%94_%EC%B0%B8%EC%84%B1%EB%8B%A8","https://www.heritage.go.kr/heri/cul/culSelectDetail.do?ccbaCpno=1332303060000","https://encykorea.aks.ac.kr/Article/E0055281"],
  "GK-IC-JEN-0002": ["https://ko.wikipedia.org/wiki/%EA%B0%95%ED%99%94_%EA%B0%91%EA%B3%B6%EB%8F%88","https://www.heritage.go.kr/heri/cul/culSelectDetail.do?ccbaCpno=1332303060000","https://encykorea.aks.ac.kr/Article/E0000891"],
  "GK-IC-SAN-0001": ["https://ko.wikipedia.org/wiki/%EA%B0%95%ED%99%94%EC%82%B0%EC%84%B1","https://www.heritage.go.kr/heri/cul/culSelectDetail.do?ccbaCpno=1332301320000","https://encykorea.aks.ac.kr/Article/E0001518"],
  "GK-GG-GID-0001": ["https://ko.wikipedia.org/wiki/%EC%97%B0%EC%B2%9C_%EC%A0%84%EA%B3%A1%EB%A6%AC_%EC%9C%A0%EC%A0%81","https://www.heritage.go.kr/heri/cul/culSelectDetail.do?ccbaCpno=1333102680000","https://encykorea.aks.ac.kr/Article/E0049243"],
  "GK-GG-DOK-0001": ["https://ko.wikipedia.org/wiki/%ED%99%94%EC%84%B1_%EC%A0%9C%EC%95%94%EB%A6%AC_3%C2%B71%EC%9A%B4%EB%8F%99_%EC%88%9C%EA%B5%AD_%EC%9C%A0%EC%A0%81","https://www.heritage.go.kr/heri/cul/culSelectDetail.do?ccbaCpno=1333102990000","https://encykorea.aks.ac.kr/Article/E0051323"],
  "GK-GG-GUN-0001": ["https://ko.wikipedia.org/wiki/%EC%88%98%EC%9B%90_%ED%99%94%EC%84%B1%ED%96%89%EA%B6%81","https://www.heritage.go.kr/heri/cul/culSelectDetail.do?ccbaCpno=1333104780000","https://encykorea.aks.ac.kr/Article/E0064690"],
  "GK-GG-SAE-0003": ["https://ko.wikipedia.org/wiki/%ED%95%9C%EA%B5%AD%EB%AF%BC%EC%86%8D%EC%B4%8C","https://encykorea.aks.ac.kr/Article/E0061180"],
  "GK-JB-SAE-0001": ["https://ko.wikipedia.org/wiki/%EC%A0%84%EC%A3%BC_%EA%B2%BD%EA%B8%B0%EC%A0%84","https://www.heritage.go.kr/heri/cul/culSelectDetail.do?ccbaCpno=1333503390000","https://encykorea.aks.ac.kr/Article/E0069100"],
  "GK-JB-SAE-0003": ["https://ko.wikipedia.org/wiki/%EA%B4%91%ED%95%9C%EB%A3%A8%EC%9B%90","https://www.heritage.go.kr/heri/cul/culSelectDetail.do?ccbaCpno=1333500330000","https://encykorea.aks.ac.kr/Article/E0005333"],
  "GK-JB-DOK-0001": ["https://ko.wikipedia.org/wiki/%EC%A0%95%EC%9D%8D_%ED%99%A9%ED%86%A0%ED%98%84_%EC%A0%84%EC%A0%81","https://www.heritage.go.kr/heri/cul/culSelectDetail.do?ccbaCpno=1333502950000","https://encykorea.aks.ac.kr/Article/E0065370"],
  "GK-JB-SAN-0001": ["https://ko.wikipedia.org/wiki/%EB%AC%B4%EC%A3%BC_%EC%A0%81%EC%83%81%EC%82%B0%EC%84%B1","https://www.heritage.go.kr/heri/cul/culSelectDetail.do?ccbaCpno=1333501460000","https://encykorea.aks.ac.kr/Article/E0049159"],
  "GK-SE-SAE-0002": ["https://ko.wikipedia.org/wiki/%EB%8D%95%EC%88%98%EA%B6%81","https://ko.wikipedia.org/wiki/%EC%A0%95%EB%8F%99%EA%B8%B8_(%EC%84%9C%EC%9A%B8)"],
  "GK-GG-PLC-0001": ["https://ko.wikipedia.org/wiki/%EC%82%B0%EC%A0%95%ED%98%B8%EC%88%98","https://encykorea.aks.ac.kr/Article/E0026330"],
  "GK-GG-SAN-0001": ["https://ko.wikipedia.org/wiki/%EC%B2%98%EC%9D%B8%EC%84%B1","https://www.heritage.go.kr/heri/cul/culSelectDetail.do?ccbaCpno=2333100440000"],
  "GK-IC-SAN-0003": ["https://ko.wikipedia.org/wiki/%EA%B0%95%ED%99%94_%EA%B0%91%EA%B3%B6%EB%8F%88","https://www.heritage.go.kr/heri/cul/culSelectDetail.do?ccbaCpno=1332303060000","https://encykorea.aks.ac.kr/Article/E0000891"],
  "GK-IC-SAN-0004": ["https://ko.wikipedia.org/wiki/%EA%B0%95%ED%99%94_%EC%82%BC%EB%9E%91%EC%84%B1","https://www.heritage.go.kr/heri/cul/culSelectDetail.do?ccbaCpno=1332301300000","https://encykorea.aks.ac.kr/Article/E0026539"],
  "GK-IC-LKE-0001": ["https://ko.wikipedia.org/wiki/%EC%86%8C%EB%9E%98%EC%8A%B5%EC%A7%80%EC%83%9D%ED%83%9C%EA%B3%B5%EC%9B%90"],
  "GK-GG-SCN-0004": ["https://ko.wikipedia.org/wiki/%EC%B2%9C%EB%AC%B8%EB%8C%80","https://www.yangju.go.kr/tour/contents.do?key=836"],
  "GK-GG-LKE-0004": ["https://ko.wikipedia.org/wiki/%ED%8C%94%EB%8B%B9%ED%98%B8","https://encykorea.aks.ac.kr/Article/E0059715"]
};

const heritage = JSON.parse(fs.readFileSync(base+'data/heritage_all.json','utf8'));
let hCount = 0;
const hUpdated = heritage.map(h => {
  if (updates[h.place_id]) {
    const existing = (h.source_urls||[]).filter(u=>u&&u.startsWith('http'));
    const newUrls = [...new Set([...updates[h.place_id], ...existing])];
    hCount++;
    return {...h, source_urls: newUrls};
  }
  return h;
});
fs.writeFileSync(base+'data/heritage_all.json', JSON.stringify(hUpdated,null,2),'utf8');

const lib = JSON.parse(fs.readFileSync(base+'content/library.json','utf8'));
const hMap = {};
hUpdated.forEach(h => hMap[h.place_id]=h);
let lCount = 0;
lib.contents = lib.contents.map(c => {
  if (updates[c.place_id]) {
    const hUrls = hMap[c.place_id]?.source_urls || [];
    const newUrls = [...new Set([...updates[c.place_id], ...hUrls])].filter(u=>u&&u.startsWith('http'));
    lCount++;
    return {...c, source_urls: newUrls};
  }
  return c;
});
lib.last_updated = now;
fs.writeFileSync(base+'content/library.json', JSON.stringify(lib,null,2),'utf8');
console.log(`배치1 적용: heritage ${hCount}개, library ${lCount}개`);
