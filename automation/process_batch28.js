const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const now = new Date().toISOString().slice(0,19);

const raw = [
  {name:'김해 봉황동 유적',category_main:'역사',category_sub:'고인돌',period:'가야 1~5세기',period_category:'삼국시대',region:'경상남도',address:'경상남도 김해시 봉황동 253',location_marker_type:'entrance',lat:35.2271,lng:128.8821,short_description:'가야 금관가야 수도 김해의 대규모 패총·생활유적지. 서기 1~5세기 가야인의 주거지·무덤·창고 등이 발굴됐으며 봉황대 구릉 일대에 유적공원으로 조성되어 있다.',source_urls:['https://ko.wikipedia.org/wiki/%EC%A7%80%EC%82%B0%EB%8F%99_%EA%B3%A0%EB%B6%84%EA%B5%B0'],data_confidence:'high',tags:['가야','금관가야','패총','선사유적','김해','국가사적','봉황대']},
  {name:'광주 충장로',category_main:'역사',category_sub:'생활유적',period:'근현대',period_category:'현대',region:'광주광역시',address:'광주광역시 동구 충장로 1~5가',location_marker_type:'entrance',lat:35.1467,lng:126.9175,short_description:'광주 구도심의 대표 역사 상업거리로 임진왜란 의병장 김덕령의 충장 시호에서 이름이 유래했다. 5·18 민주화운동의 핵심 거점이었으며 일제강점기부터 이어진 상권과 문화 골목이 공존한다.',source_urls:['https://www.gwangju.go.kr/'],data_confidence:'high',tags:['5.18민주화운동','광주','충장로','김덕령','근현대','상업거리','역사거리']},
  {name:'광주 양림동 역사문화마을',category_main:'역사',category_sub:'생활유적',period:'근대 20세기 초',period_category:'근대',region:'광주광역시',address:'광주광역시 남구 양림동 58-1',location_marker_type:'entrance',lat:35.1387,lng:126.9076,short_description:'1904년 미국 선교사들이 정착하며 형성된 광주 최초의 근대화 마을. 오웬기념각과 선교사 사택 등 근대 건축물과 항일 유적이 공존하며 펭귄마을 등 문화예술 공간이 어우러진다.',source_urls:['https://www.gwangju.go.kr/'],data_confidence:'high',tags:['선교사','근대건축','광주','양림동','펭귄마을','독립운동','오웬기념각','역사문화마을']},
  {name:'경기 궁평항',category_main:'자연',category_sub:'일출/일몰 명소',period:'',period_category:'',region:'경기도',address:'경기도 화성시 서신면 궁평리 1097',location_marker_type:'exact',lat:37.1543,lng:126.6248,short_description:'경기도 화성시 서해안의 소박한 어항. 낙조 명소로 손꼽히며 해 질 녘 수평선으로 빠져드는 붉은 노을이 압권이다. 인근 궁평해수욕장과 연계한 드라이브 코스로 수도권 서해 여행의 핵심 기착지다.',source_urls:['https://www.hwaseong.go.kr/'],data_confidence:'high',tags:['낙조','서해','어항','화성','경기도','해산물','드라이브','궁평해수욕장']},
  {name:'보령 대천해수욕장',category_main:'자연',category_sub:'바다/해변',period:'',period_category:'',region:'충청남도',address:'충청남도 보령시 신흑동 945-4',location_marker_type:'exact',lat:36.3275,lng:126.5131,short_description:'충남 보령의 서해안 대표 해수욕장으로 길이 3.5km의 광활한 백사장을 자랑한다. 매년 7월 열리는 머드축제는 국내 최대 규모의 여름 축제로 세계적으로도 유명하다.',source_urls:['https://www.boryeong.go.kr/boryeong/mud/'],data_confidence:'high',tags:['머드축제','보령','대천','서해','충남','해수욕장','여름축제','백사장']}
];

const subCatCode={'고인돌':'GOI','생활유적':'SAE','일출/일몰 명소':'SUN','바다/해변':'SEA'};
const regionCode={'경상남도':'GN','광주광역시':'GJ','경기도':'GG','충청남도':'CN'};

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
