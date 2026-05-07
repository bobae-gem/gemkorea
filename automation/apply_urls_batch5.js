const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const now = new Date().toISOString().slice(0,19);

const updates = {
  "GK-CN-SEA-0001": ["https://ko.wikipedia.org/wiki/%EA%BD%83%EC%A7%80%ED%95%B4%EC%88%98%EC%9A%95%EC%9E%A5","https://www.heritage.go.kr/heri/cul/culSelectDetail.do?ccbaCpno=1353400690000","https://encykorea.aks.ac.kr/Article/E0069841"],
  "GK-CN-LKE-0001": ["https://ko.wikipedia.org/wiki/%EC%82%BD%EA%B5%90%ED%98%B8","https://encykorea.aks.ac.kr/Article/E0026975"],
  "GK-CN-SCN-0001": ["https://ko.wikipedia.org/wiki/%ED%83%9C%EC%95%88_%EC%8B%A0%EB%91%90%EB%A6%AC_%ED%95%B4%EC%95%88%EC%82%AC%EA%B5%AC","https://www.heritage.go.kr/heri/cul/culSelectDetail.do?ccbaCpno=1363404310000","https://encykorea.aks.ac.kr/Article/E0067519"],
  "GK-GG-LKE-0003": ["https://ko.wikipedia.org/wiki/%EB%91%90%EB%AC%BC%EB%A8%B8%EB%A6%AC"],
  "GK-GG-LKE-0005": ["https://ko.wikipedia.org/wiki/%EB%82%A8%EC%96%91%EC%A3%BC%EC%8B%9C"],
  "GK-JB-LKE-0001": ["https://ko.wikipedia.org/wiki/%EC%A7%80%EB%A6%AC%EC%82%B0"],
  "GK-GW-LKE-0006": ["https://ko.wikipedia.org/wiki/%EC%86%8C%EC%96%91%EA%B0%95","https://encykorea.aks.ac.kr/Article/E0030189"],
  "GK-SE-LKE-0001": ["https://ko.wikipedia.org/wiki/%ED%95%9C%EA%B0%95%EA%B3%B5%EC%9B%90"],
  "GK-CB-LKE-0001": ["https://ko.wikipedia.org/wiki/%EC%B6%A9%EC%A3%BC%ED%98%B8","https://encykorea.aks.ac.kr/Article/E0058230"],
  "GK-GN-SUM-0001": ["https://ko.wikipedia.org/wiki/%ED%95%A8%EC%95%88%EA%B5%B0"],
  "GK-JN-SCN-0005": ["https://www.hpftf.or.kr/contentsView.do?pageId=www191"],
  "GK-GB-SAE-0013": ["https://ko.wikipedia.org/wiki/%EB%B4%89%ED%99%94_%EC%B2%AD%EC%95%94%EC%A0%95%EA%B3%BC_%EC%84%9D%EC%B2%9C%EA%B3%84%EA%B3%A1","https://encykorea.aks.ac.kr/Article/E0069835"],
  "GK-GN-SUN-0002": ["https://ko.wikipedia.org/wiki/%EC%B0%BD%EC%84%A0%C2%B7%EC%82%BC%EC%B2%9C%ED%8F%AC%EB%8C%80%EA%B5%90"],
  "GK-JN-SCN-0006": ["https://ko.wikipedia.org/wiki/%EC%88%9C%EC%B2%9C%EB%A7%8C%EA%B5%AD%EA%B0%80%EC%A0%95%EC%9B%90"],
  "GK-GW-SCN-0004": ["https://ko.wikipedia.org/wiki/%EC%9D%B8%EC%A0%9C%EA%B5%B0"],
  "GK-GN-SCN-0003": ["https://ko.wikipedia.org/wiki/%EB%82%A8%ED%95%B4%EB%8F%85%EC%9D%BC%EB%A7%88%EC%9D%84"],
  "GK-JN-GAD-0005": ["https://ko.wikipedia.org/wiki/%EC%82%B0%EB%8F%99%EB%A9%B4_(%EA%B5%AC%EB%A1%80%EA%B5%B0)"],
  "GK-JN-SCN-0008": ["https://ko.wikipedia.org/wiki/%EB%8B%B4%EC%96%91%EA%B5%B0"],
  "GK-GJ-SAE-0001": ["https://ko.wikipedia.org/wiki/%EC%B6%A9%EC%9E%A5%EB%A1%9C"],
  "GK-GJ-SAE-0002": ["https://ko.wikipedia.org/wiki/%EC%96%91%EB%A6%BC%EB%8F%99"],
  "GK-GG-SUN-0001": ["https://ko.wikipedia.org/wiki/%EA%B6%81%ED%8F%89%ED%95%AD"],
  "GK-CN-SEA-0002": ["https://ko.wikipedia.org/wiki/%EB%8C%80%EC%B2%9C%ED%95%B4%EC%88%98%EC%9A%95%EC%9E%A5","https://encykorea.aks.ac.kr/Article/E0014834"],
  "GK-GW-LKE-0009": ["https://ko.wikipedia.org/wiki/%EC%95%84%EC%9A%B0%EB%9D%BC%EC%A7%80","https://encykorea.aks.ac.kr/Article/E0077617"],
  "GK-GW-LKE-0010": ["https://ko.wikipedia.org/wiki/%EC%98%81%EC%9B%94_%EC%96%B4%EB%9D%BC%EC%97%B0","https://www.heritage.go.kr/heri/cul/culSelectDetail.do?ccbaCpno=1353200140000"],
  "GK-GW-LKE-0011": ["https://ko.wikipedia.org/wiki/%ED%99%8D%EC%B2%9C_%EC%88%98%ED%83%80%EC%82%AC","https://encykorea.aks.ac.kr/Article/E0031749"],
  "GK-JN-LKE-0002": ["https://ko.wikipedia.org/wiki/%EB%AC%B4%EC%95%88%EA%B5%B0"],
  "GK-JN-SAE-0013": ["https://ko.wikipedia.org/wiki/%EB%AA%A9%ED%8F%AC_%EA%B7%BC%EB%8C%80%EC%97%AD%EC%82%AC%EB%AC%B8%ED%99%94%EA%B3%B5%EA%B0%84","https://www.heritage.go.kr/heri/cul/culSelectDetail.do?VdkVgwKey=79,07180000,36"],
  "GK-JN-MTN-0005": ["https://ko.wikipedia.org/wiki/%EC%9C%A0%EB%8B%AC%EC%82%B0","https://encykorea.aks.ac.kr/Article/E0041328"],
  "GK-JN-SUN-0002": ["https://ko.wikipedia.org/wiki/%EC%98%81%EA%B4%91%EA%B5%B0_(%EC%A0%84%EB%9D%BC%EB%82%A8%EB%8F%84)"],
  "GK-JN-SUN-0003": ["https://ko.wikipedia.org/wiki/%EC%A7%84%EB%8F%84%EA%B5%B0"],
  "GK-DJ-SCN-0001": ["https://ko.wikipedia.org/wiki/%EC%9E%A5%ED%83%9C%EC%82%B0_%EC%9E%90%EC%97%B0%ED%9C%B4%EC%96%91%EB%A6%BC"],
  "GK-SJ-LKE-0001": ["https://ko.wikipedia.org/wiki/%EC%84%B8%EC%A2%85%ED%98%B8%EC%88%98%EA%B3%B5%EC%9B%90"],
  "GK-GW-GAD-0001": ["https://ko.wikipedia.org/wiki/%EC%96%BC%EC%9D%8C%EB%82%98%EB%9D%BC_%ED%99%94%EC%B2%9C_%EC%82%B0%EC%B2%9C%EC%96%B4_%EC%B6%95%EC%A0%9C"],
  "GK-GG-LKE-0006": ["https://ko.wikipedia.org/wiki/%EC%9E%90%EB%9D%BC%EC%84%AC"],
  "GK-GW-LKE-0008": ["https://ko.wikipedia.org/wiki/%EB%AC%BC%EB%A0%88%EA%B8%B8"],
  "GK-GN-GAD-0001": ["https://ko.wikipedia.org/wiki/%EC%8C%8D%EA%B3%84%EC%82%AC","https://encykorea.aks.ac.kr/Article/E0034076"],
  "GK-JN-GAD-0002": ["https://ko.wikipedia.org/wiki/%EB%8C%80%ED%95%9C%EB%8B%A4%EC%9B%90","https://encykorea.aks.ac.kr/Article/E0023408"],
  "GK-GN-MTN-0001": ["https://ko.wikipedia.org/wiki/%EB%AF%B8%EB%A5%B5%EC%82%B0_(%EA%B2%BD%EB%82%A8)"],
  "GK-GB-LKE-0001": ["https://ko.wikipedia.org/wiki/%ED%9A%8C%EB%A3%A1%ED%8F%AC","https://www.heritage.go.kr/heri/cul/culSelectDetail.do?ccbaCpno=1353700160000"],
  "GK-GB-SAE-0015": ["https://ko.wikipedia.org/wiki/%EC%98%88%EC%B2%9C_%EC%82%BC%EA%B0%95%EC%A3%BC%EB%A7%89","https://www.heritage.go.kr/heri/cul/culSelectDetail.do?ccbaCpno=2443701340000"],
  "GK-GB-SUN-0001": ["https://ko.wikipedia.org/wiki/%ED%98%B8%EB%AF%B8%EA%B3%B6","https://encykorea.aks.ac.kr/Article/E0048326"],
  "GK-GN-GAD-0002": ["https://ko.wikipedia.org/wiki/%EC%A7%84%ED%95%B4%EA%B5%B0%ED%95%AD%EC%A0%9C"],
  "GK-US-MTN-0001": ["https://ko.wikipedia.org/wiki/%EC%8B%A0%EB%B6%88%EC%82%B0"],
  "GK-US-SUN-0001": ["https://ko.wikipedia.org/wiki/%EA%B0%84%EC%A0%88%EA%B3%B6","https://encykorea.aks.ac.kr/Article/E0074993"],
  "GK-GN-SCN-0005": ["https://ko.wikipedia.org/wiki/%EB%82%A8%ED%95%B4_%EB%AC%BC%EA%B1%B4%EB%A6%AC_%EB%B0%A9%EC%A1%B0%EC%96%B4%EB%B6%80%EB%A6%BC","https://www.heritage.go.kr/heri/cul/culSelectDetail.do?ccbaCpno=1363801500000"],
  "GK-GN-MTN-0002": ["https://ko.wikipedia.org/wiki/%ED%99%A9%EB%A7%A4%EC%82%B0"],
  "GK-GN-SCN-0006": ["https://ko.wikipedia.org/wiki/%ED%95%A8%EC%96%91_%EC%83%81%EB%A6%BC","https://www.heritage.go.kr/heri/cul/culSelectDetail.do?ccbaCpno=1363801540000","https://encykorea.aks.ac.kr/Article/E0062194"]
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
  const hUrls = hMap[c.place_id]?.source_urls || [];
  const merged = [...new Set([...(updates[c.place_id]||[]), ...(c.source_urls||[]), ...hUrls])].filter(u=>u&&u.startsWith('http'));
  if (merged.length !== (c.source_urls||[]).length) lCount++;
  return {...c, source_urls: merged};
});
lib.last_updated = now;
fs.writeFileSync(base+'content/library.json', JSON.stringify(lib,null,2),'utf8');
console.log(`배치5 적용: heritage ${hCount}개, library ${lCount}개`);
