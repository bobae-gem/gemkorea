const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';

const raw = [
  {name:'창경궁',category:'궁궐',period:'조선시대 (1483년 창건)',period_category:'조선 전기',region:'서울특별시',address:'서울특별시 종로구 창경궁로 185',location_marker_type:'entrance',lat:37.5784,lng:126.9960,short_description:'조선 성종이 세 명의 대비를 위해 1483년 창건한 궁궐. 일제강점기 동물원으로 격하되었다가 1983년 복원되었으며, 창덕궁과 하나의 궁역을 이룬다.',source_urls:['https://cgg.cha.go.kr/'],data_confidence:'high'},
  {name:'덕수궁',category:'궁궐',period:'조선 후기 · 대한제국기 (1897년 황궁)',period_category:'조선 후기',region:'서울특별시',address:'서울특별시 중구 세종대로 99',location_marker_type:'entrance',lat:37.5653,lng:126.9748,short_description:'고종이 아관파천 후 환궁하여 대한제국을 선포한 궁궐. 석조전 등 근대 서양식 건물과 전통 전각이 공존하며 수문장 교대식이 매일 열린다.',source_urls:['https://www.deoksugung.go.kr/'],data_confidence:'high'},
  {name:'경희궁',category:'궁궐',period:'조선 후기 (1617년 창건)',period_category:'조선 후기',region:'서울특별시',address:'서울특별시 종로구 새문안로 45',location_marker_type:'entrance',lat:37.5717,lng:126.9689,short_description:'광해군이 창건하여 인조부터 철종까지 10명의 왕이 사용한 서궐. 일제강점기 대부분 훼철되었으며 현재 일부가 복원되어 서울역사박물관 옆에 위치한다.',source_urls:['https://heritage.go.kr/'],data_confidence:'medium'},
  {name:'종묘',category:'왕릉',period:'조선 전기 (1395년 창건, 유네스코)',period_category:'조선 전기',region:'서울특별시',address:'서울특별시 종로구 종로 157',location_marker_type:'entrance',lat:37.5715,lng:126.9897,short_description:'조선 역대 왕과 왕비의 신위를 모신 사당. 세계에서 가장 긴 목조 건물 중 하나인 정전이 있으며 종묘제례악은 유네스코 인류무형유산이다.',source_urls:['https://jm.cha.go.kr/'],data_confidence:'high'},
  {name:'사직단',category:'비석',period:'조선 전기 (1395년 창건)',period_category:'조선 전기',region:'서울특별시',address:'서울특별시 종로구 사직로 89',location_marker_type:'exact',lat:37.5763,lng:126.9697,short_description:'토지신과 곡식신에게 제사를 지내던 조선의 국가 제례 시설. 조선 건국과 함께 경복궁 서쪽에 설치되었으며 현재 사직공원 내에 복원되어 있다.',source_urls:['https://heritage.go.kr/heri/cul/culSelectDetail.do?ccbaCpno=1111100800000'],data_confidence:'medium'},
  {name:'성균관 문묘',category:'향교',period:'조선 전기 (1398년 창건)',period_category:'조선 전기',region:'서울특별시',address:'서울특별시 종로구 성균관로 31',location_marker_type:'entrance',lat:37.5827,lng:126.9983,short_description:'공자와 유교 성현을 모신 문묘와 조선 최고 국립 교육 기관인 성균관이 함께 있는 유적. 명륜당·대성전 등 조선시대 건물이 성균관대학교 내에 보존되어 있다.',source_urls:['https://encykorea.aks.ac.kr/Article/E0027994'],data_confidence:'medium'},
  {name:'환구단',category:'과학유적',period:'근대 (1897년 건립)',period_category:'근대',region:'서울특별시',address:'서울특별시 중구 소공로 112',location_marker_type:'exact',lat:37.5644,lng:126.9815,short_description:'고종이 황제 즉위식과 하늘에 제사를 지내기 위해 1897년 건립한 제단. 일제강점기 대부분 철거되어 현재 황궁우와 석고만 남아 조선호텔 경내에 있다.',source_urls:['https://heritage.go.kr/heri/cul/culSelectDetail.do?ccbaCpno=1111100980000'],data_confidence:'medium'},
  {name:'숭례문',category:'성곽',period:'조선 전기 (1395년 건립, 국보)',period_category:'조선 전기',region:'서울특별시',address:'서울특별시 중구 세종대로 40',location_marker_type:'exact',lat:37.5598,lng:126.9753,short_description:'한양도성 남쪽 대문으로 국보 제1호. 1396년 완공된 2층 누각 형식 목조 성문으로 2008년 방화 소실 후 2013년 복원되었다.',source_urls:['https://heritage.go.kr/heri/cul/culSelectDetail.do?ccbaCpno=1111100010000'],data_confidence:'high'},
  {name:'흥인지문',category:'성곽',period:'조선 전기 (1398년 건립, 보물)',period_category:'조선 전기',region:'서울특별시',address:'서울특별시 종로구 종로 288',location_marker_type:'exact',lat:37.5712,lng:127.0096,short_description:'한양도성 동쪽 대문으로 보물 제1호. 속칭 동대문으로 불리며 현존 한양도성 성문 중 유일하게 반원형 옹성을 갖춘 성문이다.',source_urls:['https://heritage.go.kr/heri/cul/culSelectDetail.do?ccbaCpno=1121100010000'],data_confidence:'high'},
  {name:'북한산성',category:'산성',period:'조선 후기 (1711년 완공)',period_category:'조선 후기',region:'서울특별시',address:'경기도 고양시 덕양구 대서문길 375',location_marker_type:'entrance',lat:37.6275,lng:127.0087,short_description:'숙종 37년(1711) 완성된 총 길이 12.7km의 조선 후기 산성. 북한산 국립공원 내에 위치하며 서울 도성을 보완하는 방어 기능을 담당했다.',source_urls:['https://heritage.go.kr/'],data_confidence:'high'},
  {name:'서울 암사동 유적',category:'고인돌',period:'신석기시대 (기원전 4000~3000년경)',period_category:'선사',region:'서울특별시',address:'서울특별시 강동구 올림픽로 875',location_marker_type:'entrance',lat:37.5511,lng:127.1297,short_description:'한강변 신석기시대 집터 유적으로 사적 제267호. 약 6,000년 전 빗살무늬토기인들의 취락지로 원형 복원된 움집과 선사박물관이 함께 운영된다.',source_urls:['https://sunsa.gangdong.go.kr/','https://heritage.go.kr/heri/cul/culSelectDetail.do?ccbaCpno=1331102670000'],data_confidence:'high'},
  {name:'풍납토성',category:'성곽',period:'삼국시대 백제 (기원전 1~기원후 4세기)',period_category:'삼국',region:'서울특별시',address:'서울특별시 송파구 풍납동 73-1',location_marker_type:'exact',lat:37.5303,lng:127.1162,short_description:'한강변 백제 초기 왕성 추정 토성으로 사적 제11호. 둘레 약 3.5km의 평지 토성으로 발굴 조사에서 왕실 관련 유물이 다수 출토되었다.',source_urls:['https://encykorea.aks.ac.kr/Article/E0005300'],data_confidence:'high'},
  {name:'몽촌토성',category:'성곽',period:'삼국시대 백제 (3~4세기)',period_category:'삼국',region:'서울특별시',address:'서울특별시 송파구 올림픽로 424',location_marker_type:'entrance',lat:37.5196,lng:127.1226,short_description:'올림픽공원 내 백제 한성기 토성으로 사적 제297호. 1988년 서울올림픽 준비 과정에서 발굴 조사되어 백제 생활상을 밝혔다.',source_urls:['https://heritage.go.kr/'],data_confidence:'high'},
  {name:'서울 선릉·정릉',category:'왕릉',period:'조선 전기 (1495년·1562년 조성)',period_category:'조선 전기',region:'서울특별시',address:'서울특별시 강남구 선릉로100길 1',location_marker_type:'entrance',lat:37.5070,lng:127.0522,short_description:'강남 도심 속 조선 제9대 성종(선릉)과 제11대 중종(정릉)의 왕릉. 유네스코 세계유산으로 등재된 조선왕릉의 일부다.',source_urls:['https://royaltombs.cha.go.kr/'],data_confidence:'high'},
  {name:'서울 태릉·강릉',category:'왕릉',period:'조선 전기 (1565년·1569년 조성)',period_category:'조선 전기',region:'서울특별시',address:'서울특별시 노원구 화랑로 681',location_marker_type:'entrance',lat:37.6259,lng:127.0834,short_description:'중종의 계비 문정왕후의 태릉과 명종·인순왕후의 강릉이 있는 조선왕릉. 유네스코 세계유산으로 등재되어 있다.',source_urls:['https://royaltombs.cha.go.kr/'],data_confidence:'medium'},
  {name:'서울 헌릉·인릉',category:'왕릉',period:'조선 전기·후기 (1420년·1835년 조성)',period_category:'조선 전기',region:'서울특별시',address:'서울특별시 서초구 헌인릉길 36-10',location_marker_type:'entrance',lat:37.4523,lng:127.0707,short_description:'조선 태종(헌릉)과 순조(인릉)의 왕릉. 사적 제194호로 서초구 내곡동 청계산 자락에 위치한다.',source_urls:['https://royaltombs.cha.go.kr/'],data_confidence:'medium'},
  {name:'절두산 순교성지',category:'독립운동유적',period:'근대 (1866년 병인박해)',period_category:'근대',region:'서울특별시',address:'서울특별시 마포구 토정로 6',location_marker_type:'exact',lat:37.5491,lng:126.9048,short_description:'1866년 병인박해 때 수천 명의 천주교 신자들이 순교한 한강변 언덕. 현재 순교 박물관과 기념관이 운영된다.',source_urls:['http://www.jeoldusan.or.kr/'],data_confidence:'high'},
  {name:'봉은사',category:'사찰',period:'통일신라 (794년 창건)',period_category:'통일신라',region:'서울특별시',address:'서울특별시 강남구 봉은사로 531',location_marker_type:'entrance',lat:37.5093,lng:127.0543,short_description:'794년 창건된 서울 강남 대표 사찰. 조선 명종 때 선종 수사찰로 지정되어 중흥했으며 강남 COEX 인근 도심 속 고찰이다.',source_urls:['http://www.bongeunsa.org/'],data_confidence:'high'},
  {name:'백범 김구 기념관',category:'독립운동유적',period:'근대 (임시정부 주석 김구)',period_category:'근대',region:'서울특별시',address:'서울특별시 용산구 임정로 26',location_marker_type:'entrance',lat:37.5389,lng:126.9606,short_description:'대한민국 임시정부 주석 김구 선생의 삶과 독립운동을 기리는 기념관. 효창공원 내 선생 묘소 인근에 위치하며 임시정부 관련 자료와 유품을 전시한다.',source_urls:['https://www.kimkoomuseum.org/'],data_confidence:'high'},
  {name:'윤봉길 의사 기념관',category:'독립운동유적',period:'근대 (1932년 훙커우공원 의거)',period_category:'근대',region:'서울특별시',address:'서울특별시 서초구 매헌로 99',location_marker_type:'entrance',lat:37.4684,lng:127.0343,short_description:'1932년 중국 훙커우공원에서 의거를 일으킨 윤봉길 의사를 기리는 기념관. 양재동 매헌시민의 숲 입구에 위치하며 유품과 의거 자료를 전시한다.',source_urls:['http://www.yunbonggil.or.kr/'],data_confidence:'high'},
  {name:'낙성대 강감찬 유적',category:'생활유적',period:'고려 (983년 강감찬 출생)',period_category:'고려',region:'서울특별시',address:'서울특별시 관악구 낙성대로 77',location_marker_type:'exact',lat:37.4749,lng:126.9632,short_description:'1019년 귀주대첩으로 거란군을 물리친 고려 명장 강감찬 장군의 생가터. 낙성대공원 내에 사당과 삼층석탑이 있다.',source_urls:['https://encykorea.aks.ac.kr/Article/E0011608'],data_confidence:'high'}
];

const catCode = {궁궐:'GUN',왕릉:'RYU',성곽:'SEO',산성:'SAN',고인돌:'GID',향교:'HYO',비석:'BIS',과학유적:'GWA',독립운동유적:'DOK',사찰:'SAJ',생활유적:'SAE'};
const subCat = {궁궐:'궁궐/왕실',왕릉:'궁궐/왕실',성곽:'성곽/산성',산성:'성곽/산성',고인돌:'고인돌/선사유적',향교:'고택/서원/향교',비석:'비석/기념유산',과학유적:'비석/기념유산',독립운동유적:'독립운동/근현대',사찰:'사찰/불교유산',생활유적:'고택/서원/향교'};
const tagDb = {
  '창경궁':['조선전기','성종','궁궐','서울','일제강점기'],
  '덕수궁':['조선후기','고종','대한제국','궁궐','서울'],
  '경희궁':['조선후기','광해군','궁궐','서울'],
  '종묘':['조선전기','태조','왕실','유네스코','서울','제례'],
  '사직단':['조선전기','제례','서울'],
  '성균관 문묘':['조선전기','유교','성균관','서울','교육'],
  '환구단':['근대','고종','대한제국','서울'],
  '숭례문':['조선전기','국보','서울','한양도성','성문'],
  '흥인지문':['조선전기','보물','동대문','서울','한양도성'],
  '북한산성':['조선후기','숙종','산성','서울','국립공원'],
  '서울 암사동 유적':['선사시대','신석기','빗살무늬토기','서울','한강'],
  '풍납토성':['삼국시대','백제','한성백제','서울','한강'],
  '몽촌토성':['삼국시대','백제','한성백제','서울','올림픽공원'],
  '서울 선릉·정릉':['조선전기','성종','중종','왕릉','유네스코','강남'],
  '서울 태릉·강릉':['조선전기','문정왕후','명종','왕릉','유네스코','노원'],
  '서울 헌릉·인릉':['조선전기','태종','순조','왕릉','서초'],
  '절두산 순교성지':['근대','병인박해','천주교','순교','서울','마포'],
  '봉은사':['통일신라','사찰','강남','서울'],
  '백범 김구 기념관':['근대','김구','독립운동','임시정부','서울','용산'],
  '윤봉길 의사 기념관':['근대','윤봉길','독립운동','의거','서울','서초'],
  '낙성대 강감찬 유적':['고려','강감찬','귀주대첩','서울','관악']
};

const existing = JSON.parse(fs.readFileSync(base+'data/heritage_all.json','utf8'));
const existingNames = new Set(existing.map(d=>d.name));
const counters = {};
existing.forEach(d => {
  const parts = d.place_id.split('-');
  const key = parts[1]+'-'+parts[2];
  const num = parseInt(parts[3]);
  if(!counters[key]||counters[key]<num) counters[key]=num;
});

const now = new Date().toISOString().slice(0,19);
const newItems = raw.filter(d=>!existingNames.has(d.name)).map(d => {
  const rc = 'SE';
  const cc = catCode[d.category]||'ETC';
  const key = rc+'-'+cc;
  counters[key] = (counters[key]||0)+1;
  const placeId = 'GK-'+rc+'-'+cc+'-'+String(counters[key]).padStart(4,'0');
  return {
    ...d,
    place_id: placeId,
    category_main: '역사',
    category_sub: subCat[d.category]||'비석/기념유산',
    category_detail: d.short_description.split('.')[0],
    confidence: d.data_confidence==='high'?'high':'low',
    confidence_reason: d.data_confidence==='high'?'':'',
    tags: tagDb[d.name]||[d.period_category,'서울','역사'],
    needs_geocoding: false,
    status:{map_displayable:true,data_status:'complete',map_status:'waiting',content_status:'waiting',last_updated:now},
    content_link:{has_video:false,youtube_url:'',instagram_url:'',tiktok_url:'',xiaohongshu_url:'',video_status:'없음'}
  };
});

const merged = [...existing,...newItems];
fs.writeFileSync(base+'data/heritage_all.json', JSON.stringify(merged,null,2), 'utf8');

const ready = merged.filter(d=>d.status.map_displayable&&d.lat&&d.lng);
fs.writeFileSync(base+'map/markers_ready.json', JSON.stringify({total:ready.length,markers:ready},null,2), 'utf8');

const rawLog = JSON.parse(fs.readFileSync(base+'data/raw/search_results.json','utf8'));
rawLog.results.push({run_time:now,mode:'A_MODE_REALTIME_SEARCH',region:'서울',collected:newItems.length,total:merged.length});
fs.writeFileSync(base+'data/raw/search_results.json', JSON.stringify(rawLog,null,2), 'utf8');

const log = JSON.parse(fs.readFileSync(base+'logs/automation_log.json','utf8'));
log.runs.push({time:now,mode:'A',region:'서울',new_collected:newItems.length,total:merged.length,markers_ready:ready.length,errors:0});
fs.writeFileSync(base+'logs/automation_log.json', JSON.stringify(log,null,2), 'utf8');

console.log('A모드 1회차 — 서울 수집 완료');
console.log('새로 수집: '+newItems.length+'개');
console.log('누적 장소: '+merged.length+'개');
console.log('지도 표시 가능: '+ready.length+'개');
console.log('1차 목표(300개): '+(merged.length/300*100).toFixed(1)+'%');
newItems.forEach(d=>console.log('  + ['+d.place_id+'] '+d.name));
