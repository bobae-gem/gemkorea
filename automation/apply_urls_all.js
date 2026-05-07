const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const now = new Date().toISOString().slice(0,19);

// 배치1~4 결과 통합
const updates = {
  // 배치1
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
  "GK-GG-LKE-0004": ["https://ko.wikipedia.org/wiki/%ED%8C%94%EB%8B%B9%ED%98%B8","https://encykorea.aks.ac.kr/Article/E0059715"],
  // 배치2
  "GK-JN-JEN-0002": ["https://ko.wikipedia.org/wiki/%EC%97%AC%EC%88%98%EC%8B%9C","https://ko.wikipedia.org/wiki/%EC%97%AC%EC%88%98_%EC%A7%84%EB%82%A8%EA%B4%80"],
  "GK-JN-SAE-0002": ["https://ko.wikipedia.org/wiki/%EC%86%8C%EC%87%84%EC%9B%90","https://www.heritage.go.kr/heri/cul/culSelectDetail.do?ccbaCpno=1353600400000","https://encykorea.aks.ac.kr/Article/E0013811"],
  "GK-JN-DOK-0001": ["https://ko.wikipedia.org/wiki/5%C2%B718_%EA%B4%91%EC%A3%BC_%EB%AF%BC%EC%A3%BC%ED%99%94_%EC%9A%B4%EB%8F%99","https://encykorea.aks.ac.kr/Article/E0038496"],
  "GK-GN-JEN-0001": ["https://ko.wikipedia.org/wiki/%ED%86%B5%EC%98%81_%ED%95%9C%EC%82%B0%EB%8F%84_%EC%9D%B4%EC%B6%A9%EB%AC%B4%EA%B3%B5_%EC%9C%A0%EC%A0%81","https://www.heritage.go.kr/heri/cul/culSelectDetail.do?ccbaCpno=1333801130000","https://encykorea.aks.ac.kr/Article/E0051314"],
  "GK-GN-SAE-0001": ["https://ko.wikipedia.org/wiki/%EA%B3%A0%EC%84%B1_%EB%8D%95%EB%AA%85%EB%A6%AC_%EA%B3%B5%EB%A3%A1%EA%B3%BC_%EC%83%88%EB%B0%9C%EC%9E%90%EA%B5%AD_%ED%99%94%EC%84%9D%EC%82%B0%EC%A7%80","https://www.heritage.go.kr/heri/cul/culSelectDetail.do?ccbaCpno=1363804110000","https://encykorea.aks.ac.kr/Article/E0003709"],
  "GK-GN-JEN-0002": ["https://www.heritage.go.kr/heri/cul/culSelectDetail.do?ccbaCpno=1333802330000","https://encykorea.aks.ac.kr/Article/E0012300"],
  "GK-GB-SAJ-0007": ["https://ko.wikipedia.org/wiki/%EB%B3%B4%EA%B2%BD%EC%82%AC","https://www.heritage.go.kr/heri/cul/culSelectDetail.do?ccbaCpno=1123718680000","https://encykorea.aks.ac.kr/Article/E0023204"],
  "GK-GB-SAE-0008": ["https://ko.wikipedia.org/wiki/%EA%B2%BD%EC%B2%9C%EB%8C%80"],
  "GK-GB-SAJ-0013": ["https://ko.wikipedia.org/wiki/%EC%9D%80%ED%95%B4%EC%82%AC","https://encykorea.aks.ac.kr/Article/E0042914"],
  "GK-GN-SAJ-0005": ["https://ko.wikipedia.org/wiki/%ED%95%B4%EC%9D%B8%EC%82%AC","https://www.heritage.go.kr/heri/cul/culSelectDetail.do?ccbaCpno=1333805040000"],
  "GK-JB-DOK-0002": ["https://ko.wikipedia.org/wiki/%EA%B5%B0%EC%82%B0%EA%B7%BC%EB%8C%80%EC%97%AD%EC%82%AC%EB%B0%95%EB%AC%BC%EA%B4%80","https://ko.wikipedia.org/wiki/%EA%B5%B0%EC%82%B0_%EB%82%B4%ED%95%AD_%EC%97%AD%EC%82%AC%EB%AC%B8%ED%99%94%EA%B3%B5%EA%B0%84"],
  "GK-JN-SAE-0008": ["https://ko.wikipedia.org/wiki/%ED%83%9C%EB%B0%B1%EC%82%B0%EB%A7%A5%EB%AC%B8%ED%95%99%EA%B4%80","https://ko.wikipedia.org/wiki/%ED%83%9C%EB%B0%B1%EC%82%B0%EB%A7%A5_(%EC%86%8C%EC%84%A4)"],
  "GK-GN-GEN-0001": ["https://ko.wikipedia.org/wiki/%EC%82%B0%EC%B2%AD%EA%B5%B0","https://encykorea.aks.ac.kr/Article/E0026351"],
  "GK-GN-SUN-0001": ["https://ko.wikipedia.org/wiki/%ED%86%B5%EC%98%81%EC%8B%9C"],
  "GK-JN-SCN-0004": ["https://ko.wikipedia.org/wiki/%EB%95%85%EB%81%9D%EB%A7%88%EC%9D%84","https://encykorea.aks.ac.kr/Article/E0017185"],
  "GK-GN-SCN-0002": ["https://ko.wikipedia.org/wiki/%EA%B8%88%EC%82%B0_(%EA%B2%BD%EB%82%A8)","https://www.heritage.go.kr/heri/cul/culSelectDetail.do?ccbaCpno=1353800390000","https://encykorea.aks.ac.kr/Article/E0012274"],
  "GK-GB-CAV-0001": ["https://ko.wikipedia.org/wiki/%EC%84%B1%EB%A5%98%EA%B5%B4","https://www.heritage.go.kr/heri/cul/culSelectDetail.do?ccbaCpno=1363701550000","https://encykorea.aks.ac.kr/Article/E0040516"],
  "GK-GW-SAE-0007": ["https://ko.wikipedia.org/wiki/%EA%B0%95%EC%9B%90%EA%B0%90%EC%98%81","https://www.heritage.go.kr/heri/cul/culSelectDetail.do?ccbaCpno=1333204390000","https://encykorea.aks.ac.kr/Article/E0067289"],
  "GK-DG-SAE-0001": ["https://ko.wikipedia.org/wiki/%EB%8C%80%EA%B5%AC_%EA%B2%BD%EC%83%81%EA%B0%90%EC%98%81%EA%B3%B5%EC%9B%90","https://www.heritage.go.kr/heri/cul/culSelectDetail.do?ccbaCpno=1332205380000","https://encykorea.aks.ac.kr/Article/E0077035"],
  "GK-JB-SAE-0004": ["https://ko.wikipedia.org/wiki/%EC%A0%84%EC%A3%BC_%ED%92%8D%ED%8C%A8%EC%A7%80%EA%B4%80","https://www.heritage.go.kr/heri/cul/culSelectDetail.do?ccbaCpno=1123505830000","https://encykorea.aks.ac.kr/Article/E0049646"],
  // 배치3
  "GK-JJ-MTN-0004": ["https://ko.wikipedia.org/wiki/%ED%95%9C%EB%9D%BC%EC%82%B0","https://encykorea.aks.ac.kr/Article/E0061564"],
  "GK-JJ-SAE-0003": ["https://ko.wikipedia.org/wiki/%EC%84%9C%EA%B7%80%ED%8F%AC_%EA%B9%80%EC%A0%95%ED%9D%AC_%EC%9C%A0%EB%B0%B0%EC%A7%80","https://encykorea.aks.ac.kr/Article/E0010433"],
  "GK-JJ-SCN-0006": ["https://ko.wikipedia.org/wiki/%EC%82%AC%EB%A0%A4%EB%8B%88%EC%88%B2%EA%B8%B8"],
  "GK-JJ-SEA-0003": ["https://encykorea.aks.ac.kr/Article/E0063508"],
  "GK-JJ-SCN-0007": ["https://www.heritage.go.kr/heri/cul/culSelectDetail.do?ccbaCpno=1363905130000","https://encykorea.aks.ac.kr/Article/E0074960"],
  "GK-GB-SCN-0003": ["https://ko.wikipedia.org/wiki/%EC%9A%B8%EB%A6%89%EB%8F%84","https://encykorea.aks.ac.kr/Article/E0040443"],
  "GK-GB-WAT-0001": ["https://ko.wikipedia.org/wiki/%EB%B4%89%EB%9E%98%ED%8F%AD%ED%8F%AC"],
  "GK-GB-SCN-0004": ["https://ko.wikipedia.org/wiki/%EB%82%98%EB%A6%AC%EB%B6%84%EC%A7%80","https://encykorea.aks.ac.kr/Article/E0011334"],
  "GK-GW-SNS-0001": ["https://ko.wikipedia.org/wiki/%EC%A0%95%EB%8F%99%EC%A7%84","https://www.heritage.go.kr/heri/cul/culSelectDetail.do?ccbaCpno=1363204370000","https://encykorea.aks.ac.kr/Article/E0068834"],
  "GK-GW-SEA-0001": ["https://ko.wikipedia.org/wiki/%EA%B2%BD%ED%8F%AC%ED%95%B4%EC%88%98%EC%9A%95%EC%9E%A5","https://encykorea.aks.ac.kr/Article/E0002982"],
  "GK-GW-SEA-0002": ["https://ko.wikipedia.org/wiki/%EC%95%88%EB%AA%A9%ED%95%B4%EB%B3%80"],
  "GK-GW-SEA-0003": ["https://ko.wikipedia.org/wiki/%EA%B0%95%EB%A6%89%EC%8B%9C"],
  "GK-GW-SEA-0004": ["https://ko.wikipedia.org/wiki/%EA%B0%95%EB%AC%B8%ED%95%B4%EB%B3%80"],
  "GK-GW-LKE-0001": ["https://ko.wikipedia.org/wiki/%EA%B2%BD%ED%8F%AC%ED%98%B8","https://encykorea.aks.ac.kr/Article/E0002983"],
  "GK-GW-LKE-0002": ["https://ko.wikipedia.org/wiki/%EC%9D%98%EC%95%94%ED%98%B8","https://encykorea.aks.ac.kr/Article/E0043326"],
  "GK-GW-LKE-0003": ["https://ko.wikipedia.org/wiki/%EB%8F%99%EA%B0%95"],
  "GK-GW-CAV-0001": ["https://ko.wikipedia.org/wiki/%EC%82%BC%EC%B2%99_%EB%8C%80%EC%9D%B4%EB%A6%AC_%EB%8F%99%EA%B5%B4%EC%A7%80%EB%8C%80","https://www.heritage.go.kr/heri/cul/culSelectDetail.do?ccbaCpno=1363201780000","https://encykorea.aks.ac.kr/Article/E0064989"],
  "GK-GW-CAV-0002": ["https://ko.wikipedia.org/wiki/%EC%98%81%EC%9B%94_%EA%B3%A0%EC%94%A8%EA%B5%B4","https://www.heritage.go.kr/heri/cul/culSelectDetail.do?ccbaCpno=1363202190000","https://encykorea.aks.ac.kr/Article/E0037592"],
  "GK-IC-SEA-0001": ["https://ko.wikipedia.org/wiki/%EC%9D%84%EC%99%95%EB%A6%AC%ED%95%B4%EC%88%98%EC%9A%95%EC%9E%A5","https://encykorea.aks.ac.kr/Article/E0042961"],
  "GK-GN-SNS-0001": ["https://ko.wikipedia.org/wiki/%EA%B0%84%EC%A0%88%EA%B3%B6","https://encykorea.aks.ac.kr/Article/E0074993"],
  // 배치4
  "GK-GB-SNS-0001": ["https://ko.wikipedia.org/wiki/%ED%98%B8%EB%AF%B8%EA%B3%B6","https://encykorea.aks.ac.kr/Article/E0048326"],
  "GK-BS-SEA-0001": ["https://ko.wikipedia.org/wiki/%ED%95%B4%EC%9A%B4%EB%8C%80%ED%95%B4%EC%88%98%EC%9A%95%EC%9E%A5","https://encykorea.aks.ac.kr/Article/E0062678"],
  "GK-BS-SEA-0002": ["https://ko.wikipedia.org/wiki/%EC%86%A1%EC%A0%95%ED%95%B4%EC%88%98%EC%9A%95%EC%9E%A5_(%EB%B6%80%EC%82%B0)","https://encykorea.aks.ac.kr/Article/E0031047"],
  "GK-GN-SEA-0001": ["https://ulsan.grandculture.net/Contents/Index?local=ulsan&gcode=03&contents_id=GC80030111"],
  "GK-GB-SEA-0001": ["https://ko.wikipedia.org/wiki/%EC%98%81%EC%9D%BC%EB%8C%80%ED%95%B4%EC%88%98%EC%9A%95%EC%9E%A5"],
  "GK-GN-SEA-0002": ["https://ko.wikipedia.org/wiki/%EC%83%81%EC%A3%BC%EC%9D%80%EB%AA%A8%EB%9E%98%EB%B9%84%EC%B9%98%ED%95%B4%EB%B3%80","https://encykorea.aks.ac.kr/Article/E0027336"],
  "GK-JB-SEA-0001": ["https://ko.wikipedia.org/wiki/%EB%B6%80%EC%95%88_%EC%B1%84%EC%84%9D%EA%B0%95%C2%B7%EC%A0%81%EB%B2%BD%EA%B0%95_%EC%9D%BC%EC%9B%90","https://encykorea.aks.ac.kr/Article/E0055605","https://www.heritage.go.kr/heri/cul/culSelectDetail.do?ccbaCpno=1353500130000"],
  "GK-GB-SEA-0002": ["https://ko.wikipedia.org/wiki/%EA%B0%90%ED%8F%AC%ED%95%AD"],
  "GK-JJ-SEA-0002": ["https://www.visitjeju.net/kr/detail/view?contentsid=CNTS_000000000001196"],
  "GK-JN-SCN-0001": ["https://ko.wikipedia.org/wiki/%EC%88%9C%EC%B2%9C%EB%A7%8C","https://encykorea.aks.ac.kr/Article/E0031976"],
  "GK-JN-ISL-0001": ["https://ko.wikipedia.org/wiki/%EC%B2%AD%EC%82%B0%EB%8F%84","https://encykorea.aks.ac.kr/Article/E0056467"],
  "GK-JN-ISL-0002": ["https://ko.wikipedia.org/wiki/%EC%98%A4%EB%8F%99%EB%8F%84","https://encykorea.aks.ac.kr/Article/E0038176"],
  "GK-JN-SEA-0001": ["https://ko.wikipedia.org/wiki/%EB%B3%B4%EC%84%B1%EA%B5%B0","https://encykorea.aks.ac.kr/Article/E0023405"],
  "GK-GB-ISL-0001": ["https://ko.wikipedia.org/wiki/%EC%9A%B8%EB%A6%89%EB%8F%84","https://encykorea.aks.ac.kr/Article/E0040443"],
  "GK-GB-ISL-0002": ["https://ko.wikipedia.org/wiki/%EB%8F%85%EB%8F%84","https://www.heritage.go.kr/heri/cul/culSelectDetail.do?ccbaCpno=1363703360000"],
  "GK-GN-ISL-0001": ["https://ko.wikipedia.org/wiki/%EA%B1%B0%EC%A0%9C%EB%8F%84","https://encykorea.aks.ac.kr/Article/E0001872"],
  "GK-GN-SCN-0001": ["https://ko.wikipedia.org/wiki/%EB%8C%80%EC%99%95%EC%95%94%EA%B3%B5%EC%9B%90"],
  "GK-JJ-FOR-0001": ["https://ko.wikipedia.org/wiki/%EC%A0%9C%EC%A3%BC_%ED%8F%89%EB%8C%80%EB%A6%AC_%EB%B9%84%EC%9E%90%EB%82%98%EB%AC%B4_%EC%88%B2","https://encykorea.aks.ac.kr/Article/E0051468","https://www.heritage.go.kr/heri/cul/culSelectDetail.do?ccbaCpno=1363903740000"],
  "GK-JJ-SCN-0001": ["https://ko.wikipedia.org/wiki/%EC%9A%A9%EB%91%90%EC%95%94","https://encykorea.aks.ac.kr/Article/E0074975","https://www.visitjeju.net/kr/detail/view?contentsid=CONT_000000000500469"],
  "GK-JJ-LKE-0001": ["https://ko.wikipedia.org/wiki/%EC%87%A0%EC%86%8C%EA%B9%8D","https://encykorea.aks.ac.kr/Article/E0070028","https://www.visitjeju.net/kr/detail/view?contentsid=CONT_000000000500384"]
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
console.log(`적용 완료: heritage ${hCount}개, library ${lCount}개 갱신`);
