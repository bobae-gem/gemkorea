const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const now = new Date().toISOString().slice(0,19);

const raw = [
  {name:'수원 화성',category_main:'역사',category_sub:'성곽',period:'조선 후기 1796년 완공',period_category:'조선시대',region:'경기도',address:'경기도 수원시 장안구 연무동 190',location_marker_type:'entrance',lat:37.2888,lng:127.0136,short_description:'조선 정조가 아버지 사도세자의 묘를 옮기고 새 도시를 건설하며 쌓은 성곽. 총 5.74km, 거중기 등 근대 기계를 활용해 2년 9개월 만에 완공했으며 1997년 유네스코 세계유산으로 등재됐다.',source_urls:['https://ko.wikipedia.org/wiki/%EC%88%98%EC%9B%90%ED%99%94%EC%84%B1'],data_confidence:'high',tags:['조선후기','정조','사도세자','성곽','유네스코','정약용','수원']},
  {name:'강화도 고인돌유적',category_main:'역사',category_sub:'고인돌',period:'청동기시대 기원전 1000~300년경',period_category:'선사시대',region:'인천광역시',address:'인천광역시 강화군 하점면 부근리 317',location_marker_type:'exact',lat:37.7436,lng:126.4305,short_description:'세계 최대 규모의 고인돌 집중 분포 지역으로 강화도 전역에 157기가 남아 있다. 2000년 유네스코 세계유산으로 등재된 청동기시대 무덤군으로 부근리 탁자식 고인돌이 대표적이다.',source_urls:['https://ko.wikipedia.org/wiki/%EA%B0%95%ED%99%94_%EC%A7%80%EC%84%9D%EB%AC%98_%EC%9C%A0%EC%A0%81'],data_confidence:'high',tags:['청동기시대','고인돌','선사유적','유네스코','강화도','탁자식고인돌','인천']},
  {name:'설악산 백담사',category_main:'역사',category_sub:'사찰',period:'통일신라 647년 창건',period_category:'통일신라',region:'강원도',address:'강원특별자치도 인제군 북면 백담로 746',location_marker_type:'entrance',lat:38.1647,lng:128.3739,short_description:'647년 창건된 설악산 깊은 계곡의 사찰. 만해 한용운이 독립선언서 공약 3장을 초안한 유서 깊은 곳이며 백담계곡의 아름다운 경관으로 유명하다.',source_urls:['https://ko.wikipedia.org/wiki/%EB%B0%B1%EB%8B%B4%EC%82%AC'],data_confidence:'high',tags:['통일신라','사찰','인제','설악산','한용운','독립운동','백담계곡']},
  {name:'홍천 수타사',category_main:'역사',category_sub:'사찰',period:'통일신라 708년 원효대사 창건',period_category:'통일신라',region:'강원도',address:'강원특별자치도 홍천군 영귀미면 수타사로 473',location_marker_type:'entrance',lat:37.6986,lng:127.9589,short_description:'708년 원효대사가 창건한 공작산 기슭의 고찰. 보물 목조아미타여래삼존불좌상 등 귀중한 문화재를 보존하고 있으며 계곡과 어우러진 경관으로 유명하다.',source_urls:['https://ko.wikipedia.org/wiki/%ED%99%8D%EC%B2%9C_%EC%88%98%ED%83%80%EC%82%AC'],data_confidence:'high',tags:['통일신라','사찰','홍천','공작산','원효대사','보물','계곡']},
  {name:'인제 원대리 자작나무숲',category_main:'자연',category_sub:'자연명승',period:'',period_category:'',region:'강원도',address:'강원특별자치도 인제군 인제읍 원대리 산75-1',location_marker_type:'entrance',lat:38.0641,lng:128.1717,short_description:'해발 700m에 조성된 138ha 규모의 자작나무 순림. 하얀 수피와 곧게 뻗은 나무들이 만드는 설국 같은 풍경으로 사계절 내내 탐방객이 찾는 강원도 대표 힐링 숲이다.',source_urls:['https://www.inje.go.kr/'],data_confidence:'high',tags:['자작나무','숲','인제','강원','힐링','트레킹','사계절']},
  {name:'남해 독일마을',category_main:'자연',category_sub:'자연명승',period:'',period_category:'',region:'경상남도',address:'경상남도 남해군 삼동면 물건리 1074',location_marker_type:'exact',lat:34.7731,lng:128.0617,short_description:'1960~70년대 서독으로 파견된 한국인 광부·간호사들이 귀국 후 정착한 마을. 독일식 주택과 한국의 남해 바다가 어우러진 이국적인 풍광으로 유명한 문화 관광지다.',source_urls:['https://www.namhae.go.kr/'],data_confidence:'high',tags:['독일마을','남해','파독광부','이국적','바다뷰','힐링','경남']}
];

const subCatCode={'성곽':'SAN','고인돌':'GOI','사찰':'SAJ','자연명승':'SCN'};
const regionCode={'경기도':'GG','인천광역시':'IC','강원도':'GW','경상남도':'GN'};

const existing=JSON.parse(fs.readFileSync(base+'data/heritage_all.json','utf8'));
const existingNames=new Set(existing.map(d=>d.name));
const counters={};
existing.forEach(d=>{if(!d.place_id)return;const p=d.place_id.split('-');if(p.length<4)return;const k=p[1]+'-'+p[2];const n=parseInt(p[3]);if(!counters[k]||counters[k]<n)counters[k]=n;});

const newItems=raw.filter(d=>!existingNames.has(d.name)).map(d=>{
  const rc=regionCode[d.region]||'ETC';
  const cc=subCatCode[d.category_sub]||'ETC';
  const k=rc+'-'+cc;
  counters[k]=(counters[k]||0)+1;
  const placeId='GK-'+rc+'-'+cc+'-'+String(counters[k]).padStart(4,'0');
  return{...d,place_id:placeId,category_detail:d.short_description.split('.')[0],confidence:d.data_confidence==='high'?'high':'low',confidence_reason:'',needs_geocoding:false,
    status:{map_displayable:true,data_status:'complete',map_status:'published',content_status:'waiting',last_updated:now},
    content_link:{has_video:false,youtube_url:'',instagram_url:'',tiktok_url:'',xiaohongshu_url:'',video_status:'없음'}};
});

const merged=[...existing,...newItems];
fs.writeFileSync(base+'data/heritage_all.json',JSON.stringify(merged,null,2),'utf8');
const ready=merged.filter(d=>d.status?.map_displayable&&d.lat&&d.lng);
fs.writeFileSync(base+'map/markers_ready.json',JSON.stringify({total:ready.length,markers:ready},null,2),'utf8');
const log=JSON.parse(fs.readFileSync(base+'logs/automation_log.json','utf8'));
log.runs.push({time:now,mode:'B',new_collected:newItems.length,total:merged.length});
fs.writeFileSync(base+'logs/automation_log.json',JSON.stringify(log,null,2),'utf8');

console.log('추가: '+newItems.length+'개 / 누적: '+merged.length+'개 / 1000: '+(merged.length/1000*100).toFixed(1)+'%');
newItems.forEach(d=>console.log('  + ['+d.place_id+'] '+d.name));
