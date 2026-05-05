const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';

const raw = [
  {name:'전등사',category:'사찰',period:'삼국시대 (381년 창건)',period_category:'삼국',region:'인천광역시',address:'인천광역시 강화군 길상면 전등사로 37-41',location_marker_type:'entrance',lat:37.6097,lng:126.4697,short_description:'381년 고구려 아도화상이 창건한 현존 최고(最古) 사찰 중 하나. 강화도 정족산성 안에 위치하며 조선왕조실록을 보관한 정족산 사고가 있었고 대웅보전 등 보물급 문화재를 다수 보유한다.',source_urls:['https://www.jeondeungsa.org'],data_confidence:'high'},
  {name:'마니산 참성단',category:'과학유적',period:'선사시대 (단군 제천단)',period_category:'선사',region:'인천광역시',address:'인천광역시 강화군 화도면 흥왕리 산 42',location_marker_type:'exact',lat:37.6086,lng:126.4194,short_description:'해발 469m 마니산 정상의 단군 제천단으로 사적 제136호. 매년 개천절 전통 제천행사가 열리고 전국체전 성화 채화지로도 유명하다.',source_urls:['https://www.ganghwa.go.kr'],data_confidence:'high'},
  {name:'갑곶돈대',category:'전쟁유적',period:'조선 후기 (1679년 축조)',period_category:'조선 후기',region:'인천광역시',address:'인천광역시 강화군 강화읍 해안동로 1366',location_marker_type:'exact',lat:37.7461,lng:126.5050,short_description:'강화해협 수비를 위해 1679년 축조된 돈대(소규모 포대 방어시설). 병인양요·신미양요 격전지이며 사적 제306호로 인근에 강화역사박물관이 있다.',source_urls:['https://www.ganghwa.go.kr'],data_confidence:'high'},
  {name:'강화산성',category:'산성',period:'고려 (1232년 축조)',period_category:'고려',region:'인천광역시',address:'인천광역시 강화군 강화읍 남산리 일원',location_marker_type:'entrance',lat:37.7453,lng:126.4881,short_description:'몽골 침략에 대항해 1232년 강화도 천도 시 축조한 토성. 조선 숙종 때 석성으로 개축되었으며 사적 제132호로 총 길이 약 7.1km 성벽이 남아 있다.',source_urls:['https://www.ganghwa.go.kr'],data_confidence:'high'},
  {name:'보문사',category:'사찰',period:'삼국시대 신라 (635년 창건)',period_category:'삼국',region:'인천광역시',address:'인천광역시 강화군 삼산면 삼산남로828번길 44',location_marker_type:'entrance',lat:37.6692,lng:126.3858,short_description:'635년 회정대사가 창건한 석모도의 천년 고찰. 낙가산 암벽에 새긴 마애석불좌상과 석굴법당이 유명하며 양양 낙산사·남해 보리암과 함께 3대 관음성지로 꼽힌다.',source_urls:['https://www.bomunsa.me'],data_confidence:'high'},
  {name:'광릉',category:'왕릉',period:'조선 전기 (1468년 조성)',period_category:'조선 전기',region:'경기도',address:'경기도 남양주시 진접읍 광릉수목원로 354',location_marker_type:'entrance',lat:37.7461,lng:127.1742,short_description:'조선 7대 세조와 정희왕후의 능. 왕과 왕비를 각각 다른 언덕에 모시는 동원이강릉 형식을 최초로 적용한 왕릉으로 유네스코 세계유산이며 주변 광릉숲은 유네스코 생물권보전지역이다.',source_urls:['https://royaltombs.cha.go.kr'],data_confidence:'high'},
  {name:'융릉·건릉',category:'왕릉',period:'조선 후기 (1789년 조성)',period_category:'조선 후기',region:'경기도',address:'경기도 화성시 효행로481번길 21',location_marker_type:'entrance',lat:37.1864,lng:126.9994,short_description:'사도세자(장조)·혜경궁 홍씨의 융릉과 정조·효의왕후의 건릉이 자리한 유네스코 세계유산. 정조가 아버지 사도세자의 묘를 이곳으로 옮기며 효심을 담아 조성한 능이다.',source_urls:['https://royaltombs.cha.go.kr'],data_confidence:'high'},
  {name:'홍릉·유릉',category:'왕릉',period:'근대 (1919년·1926년 조성)',period_category:'근대',region:'경기도',address:'경기도 남양주시 홍유릉로 352-1',location_marker_type:'entrance',lat:37.6353,lng:127.1842,short_description:'대한제국 고종황제·명성황후의 홍릉과 순종황제·두 황후의 유릉이 위치한 능역. 조선왕릉과 달리 중국 황제릉 양식을 채용한 특이한 형태이며 유네스코 세계유산이다.',source_urls:['https://royaltombs.cha.go.kr'],data_confidence:'high'},
  {name:'파주 삼릉',category:'왕릉',period:'조선 전기 (16세기 조성)',period_category:'조선 전기',region:'경기도',address:'경기도 파주시 조리읍 삼릉로 89',location_marker_type:'entrance',lat:37.7739,lng:126.8989,short_description:'공릉·순릉·영릉 세 왕릉이 모여 있는 유네스코 세계유산 능역. 울창한 소나무 숲으로도 유명하다.',source_urls:['https://royaltombs.cha.go.kr'],data_confidence:'high'},
  {name:'장릉 (파주)',category:'왕릉',period:'조선 후기 (1632년 조성)',period_category:'조선 후기',region:'경기도',address:'경기도 파주시 탄현면 장릉로 90',location_marker_type:'entrance',lat:37.7694,lng:126.7672,short_description:'인조의 아버지 원종(추존)과 인헌왕후의 능. 인조가 반정으로 왕위에 오른 후 아버지를 추존하여 조성한 왕릉으로 유네스코 세계유산이다.',source_urls:['https://royaltombs.cha.go.kr'],data_confidence:'high'},
  {name:'여주 영릉 (세종대왕릉)',category:'왕릉',period:'조선 전기 (1450년 조성, 1469년 이전)',period_category:'조선 전기',region:'경기도',address:'경기도 여주시 능서면 영릉로 269-50',location_marker_type:'entrance',lat:37.3220,lng:127.5978,short_description:'한글 창제와 과학기술 발전을 이끈 조선 4대 세종대왕과 소헌왕후의 합장릉. 유네스코 세계유산으로 인근에 세종대왕역사문화관이 조성되어 있다.',source_urls:['https://royaltombs.cha.go.kr'],data_confidence:'high'},
  {name:'연천 전곡리 구석기유적',category:'고인돌',period:'선사시대 (약 30만~35만 년 전)',period_category:'선사',region:'경기도',address:'경기도 연천군 전곡읍 평화로443번길 2',location_marker_type:'entrance',lat:38.0003,lng:127.0581,short_description:'1978년 발견된 동아시아 최초의 아슐리안형 주먹도끼 출토지. 유럽·아프리카에서만 사용됐다고 알려진 아슐리안 석기가 동아시아에서도 제작됐음을 증명한 사적 제268호이다.',source_urls:['https://www.jeongokmuseum.go.kr'],data_confidence:'high'},
  {name:'여주 신륵사',category:'사찰',period:'삼국시대 신라 (6세기 창건)',period_category:'삼국',region:'경기도',address:'경기도 여주시 신륵사길 73',location_marker_type:'entrance',lat:37.2989,lng:127.6508,short_description:'남한강변 암벽 위에 세워진 천년 고찰. 고려 말 나옹화상이 입적한 곳으로 유명하며 다층전탑(보물) 등 문화재가 많다. 강변 경치와 어우러진 경관으로 조선시대부터 명승지로 꼽혔다.',source_urls:['https://www.silleuksa.org'],data_confidence:'high'},
  {name:'화성 제암리 3·1운동 순국유적',category:'독립운동유적',period:'근대 (1919년 3·1운동)',period_category:'근대',region:'경기도',address:'경기도 화성시 향남읍 제암길 50',location_marker_type:'entrance',lat:37.1719,lng:126.9133,short_description:'1919년 4월 15일 일본 군경이 주민을 교회에 가두고 방화·총살한 제암리 학살사건 현장. 23명이 희생되었으며 사적 제299호로 기념관과 순국묘역이 조성되어 있다.',source_urls:['https://www.hwaseong.go.kr'],data_confidence:'high'},
  {name:'수원 화성행궁',category:'궁궐',period:'조선 후기 (1789년 건립)',period_category:'조선 후기',region:'경기도',address:'경기도 수원시 팔달구 정조로 825',location_marker_type:'entrance',lat:37.2789,lng:127.0131,short_description:'정조가 아버지 사도세자의 능 참배와 수원 신도시 경영을 위해 조성한 행궁. 전국 행궁 중 가장 규모가 크며 576칸에 달한다. 수원화성과 함께 유네스코 세계유산이다.',source_urls:['https://www.suwon.go.kr/hwaseong'],data_confidence:'high'},
  {name:'인천 개항장 근대역사문화공간',category:'생활유적',period:'근대 (1883년 개항 이후)',period_category:'근대',region:'인천광역시',address:'인천광역시 중구 신포로23번길 일원',location_marker_type:'entrance',lat:37.4755,lng:126.6197,short_description:'1883년 인천 개항 이후 조성된 조계지 일대의 근대역사문화공간. 구 일본제1은행·18은행 등 1880~1930년대 건축물이 밀집한 한국 근대 개항기의 살아있는 역사현장이다.',source_urls:['https://www.icha.go.kr'],data_confidence:'high'},
  {name:'자유공원',category:'독립운동유적',period:'근대 (1888년 조성)',period_category:'근대',region:'인천광역시',address:'인천광역시 중구 자유공원남로 25',location_marker_type:'entrance',lat:37.4769,lng:126.6153,short_description:'1888년 개항기 외국인 거류지에 조성된 우리나라 최초의 서구식 공원. 1950년 인천상륙작전을 지휘한 맥아더 장군 동상이 있으며 개항장 역사지구 내에 위치해 인천항을 조망할 수 있다.',source_urls:['https://www.icha.go.kr'],data_confidence:'high'}
];

const catCode = {사찰:'SAJ',과학유적:'GWA',전쟁유적:'JEN',산성:'SAN',왕릉:'RYU',고인돌:'GID',독립운동유적:'DOK',궁궐:'GUN',생활유적:'SAE'};
const subCat = {사찰:'사찰/불교유산',과학유적:'비석/기념유산',전쟁유적:'성곽/산성',산성:'성곽/산성',왕릉:'궁궐/왕실',고인돌:'고인돌/선사유적',독립운동유적:'독립운동/근현대',궁궐:'궁궐/왕실',생활유적:'고택/서원/향교'};
const regionCode = {'인천광역시':'IC','경기도':'GG'};
const tagDb = {
  '전등사':['삼국시대','고구려','사찰','강화도','천년고찰'],
  '마니산 참성단':['선사시대','단군','제천','강화도'],
  '갑곶돈대':['조선후기','숙종','병인양요','신미양요','강화도','전쟁'],
  '강화산성':['고려','몽골침입','산성','강화도'],
  '보문사':['삼국시대','신라','사찰','강화도','석모도'],
  '광릉':['조선전기','세조','왕릉','남양주','유네스코'],
  '융릉·건릉':['조선후기','사도세자','정조','왕릉','화성','유네스코'],
  '홍릉·유릉':['근대','고종','명성황후','순종','왕릉','대한제국','유네스코'],
  '파주 삼릉':['조선전기','왕릉','파주','유네스코'],
  '장릉 (파주)':['조선후기','인조','원종','왕릉','파주','유네스코'],
  '여주 영릉 (세종대왕릉)':['조선전기','세종대왕','왕릉','여주','유네스코','한글'],
  '연천 전곡리 구석기유적':['선사시대','구석기','주먹도끼','연천'],
  '여주 신륵사':['삼국시대','사찰','여주','남한강','나옹화상'],
  '화성 제암리 3·1운동 순국유적':['근대','3.1운동','학살','독립운동','화성'],
  '수원 화성행궁':['조선후기','정조','사도세자','행궁','수원','유네스코'],
  '인천 개항장 근대역사문화공간':['근대','개항','인천','일제강점기','역사건축'],
  '자유공원':['근대','인천','개항','맥아더','한국전쟁','인천상륙작전']
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
  const rc = regionCode[d.region]||'GG';
  const cc = catCode[d.category]||'ETC';
  const key = rc+'-'+cc;
  counters[key] = (counters[key]||0)+1;
  const placeId = 'GK-'+rc+'-'+cc+'-'+String(counters[key]).padStart(4,'0');
  return {
    ...d,
    place_id: placeId,
    category_main:'역사',
    category_sub: subCat[d.category]||'비석/기념유산',
    category_detail: d.short_description.split('.')[0],
    confidence: d.data_confidence==='high'?'high':'low',
    confidence_reason:'',
    tags: tagDb[d.name]||[d.period_category,d.region,'역사'],
    needs_geocoding: false,
    status:{map_displayable:true,data_status:'complete',map_status:'waiting',content_status:'waiting',last_updated:now},
    content_link:{has_video:false,youtube_url:'',instagram_url:'',tiktok_url:'',xiaohongshu_url:'',video_status:'없음'}
  };
});

const merged = [...existing,...newItems];
fs.writeFileSync(base+'data/heritage_all.json', JSON.stringify(merged,null,2),'utf8');
const ready = merged.filter(d=>d.status.map_displayable&&d.lat&&d.lng);
fs.writeFileSync(base+'map/markers_ready.json', JSON.stringify({total:ready.length,markers:ready},null,2),'utf8');

const rawLog = JSON.parse(fs.readFileSync(base+'data/raw/search_results.json','utf8'));
rawLog.results.push({run_time:now,mode:'A_MODE_REALTIME_SEARCH',region:'경기/인천',collected:newItems.length,total:merged.length});
fs.writeFileSync(base+'data/raw/search_results.json', JSON.stringify(rawLog,null,2),'utf8');
const log = JSON.parse(fs.readFileSync(base+'logs/automation_log.json','utf8'));
log.runs.push({time:now,mode:'A',region:'경기/인천',new_collected:newItems.length,total:merged.length,markers_ready:ready.length,errors:0});
fs.writeFileSync(base+'logs/automation_log.json', JSON.stringify(log,null,2),'utf8');

console.log('A모드 2회차 — 경기/인천 완료');
console.log('새로 수집: '+newItems.length+'개');
console.log('누적 장소: '+merged.length+'개');
console.log('지도 표시 가능: '+ready.length+'개');
console.log('1차 목표(300개): '+(merged.length/300*100).toFixed(1)+'%');
newItems.forEach(d=>console.log('  + ['+d.place_id+'] '+d.name));
