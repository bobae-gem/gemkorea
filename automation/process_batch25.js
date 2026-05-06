const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const now = new Date().toISOString().slice(0,19);

const raw = [
  {name:'강화 덕진진',category_main:'역사',category_sub:'성곽',period:'조선 후기 신미양요 1871년 격전지',period_category:'조선시대',region:'인천광역시',address:'인천광역시 강화군 불은면 덕진리 833',location_marker_type:'exact',lat:37.6843,lng:126.4293,short_description:'강화해협을 방어하는 조선시대 수군 진지로 1871년 신미양요 때 미국 함대와 치열한 전투가 벌어진 곳이다. 덕진돈대와 남장포대가 현존하며 국가사적 제226호로 지정되어 있다.',source_urls:['https://ko.wikipedia.org/wiki/%EB%8D%95%EC%A7%84%EC%A7%84'],data_confidence:'high',tags:['신미양요','병인양요','수군진','강화도','조선후기','국가사적','덕진돈대']},
  {name:'파주 임진각',category_main:'역사',category_sub:'생활유적',period:'현대 1972년 개관',period_category:'현대',region:'경기도',address:'경기도 파주시 문산읍 임진각로 148-40',location_marker_type:'exact',lat:37.8881,lng:126.7364,short_description:'민간인이 접근할 수 있는 최북단 지점에 위치한 안보 관광지로 1972년 개관하였다. 6.25 전쟁 당시 폭파된 자유의 다리, 망배단, 평화의 종 등이 있으며 이산가족 상봉 장소로도 사용되었다.',source_urls:['https://www.imjingak.co.kr'],data_confidence:'high',tags:['분단','6.25','이산가족','자유의다리','파주','안보관광','DMZ']},
  {name:'헤이리 예술마을',category_main:'자연',category_sub:'자연명승',period:'',period_category:'',region:'경기도',address:'경기도 파주시 탄현면 헤이리마을길 93-119',location_marker_type:'entrance',lat:37.7672,lng:126.6872,short_description:'예술가·작가·건축가 약 380여 명이 거주하며 조성한 복합 문화예술 마을로 2003년부터 방문객에게 개방되었다. 독창적 건축물과 갤러리·박물관·카페 등이 어우러져 있으며 출판도시와 인접해 있다.',source_urls:['https://www.heyri.net'],data_confidence:'high',tags:['예술마을','갤러리','건축','파주','문화예술','출판도시','체험']},
  {name:'가평 자라섬',category_main:'자연',category_sub:'강/호수',period:'',period_category:'',region:'경기도',address:'경기도 가평군 가평읍 자라섬로 60',location_marker_type:'entrance',lat:37.8294,lng:127.5136,short_description:'북한강 상류에 위치한 4개의 섬으로 이루어진 수변 생태공원. 매년 가을 개최되는 자라섬 국제재즈페스티벌로 세계적으로 알려졌으며 캠핑·자전거·수상레저를 즐길 수 있다.',source_urls:['https://www.jarasumjazz.com'],data_confidence:'high',tags:['자라섬','북한강','재즈페스티벌','캠핑','가평','수변공원','계절명소']},
  {name:'춘천 물레길',category_main:'자연',category_sub:'강/호수',period:'',period_category:'',region:'강원도',address:'강원특별자치도 춘천시 스무숲로 12',location_marker_type:'entrance',lat:37.8727,lng:127.7069,short_description:'의암호 수면 위를 카약·카누로 탐방하는 약 8km 생태 수상 탐방로. 2011년 개장 이후 국내 대표 수상 레저 코스로 자리 잡았으며 소양강과 의암호가 만나는 경관을 수면에서 감상할 수 있다.',source_urls:['https://www.mullegil.org'],data_confidence:'high',tags:['카약','카누','의암호','춘천','수상레저','생태탐방','소양강']},
  {name:'화천 산천어축제',category_main:'자연',category_sub:'계절 명소',period:'',period_category:'',region:'강원도',address:'강원특별자치도 화천군 화천읍 산천어길 137',location_marker_type:'entrance',lat:38.1062,lng:127.7082,short_description:'매년 1월 화천천 일원에서 개최되는 겨울 축제로 CNN이 선정한 겨울 7대 불가사의에 포함되었다. 얼음낚시, 눈썰매, 맨손 산천어 잡기 등 다양한 체험 프로그램이 운영된다.',source_urls:['https://www.narafestival.com'],data_confidence:'high',tags:['산천어축제','겨울축제','얼음낚시','화천','CNN선정','체험','계절명소']}
];

const subCatCode={'성곽':'SAN','생활유적':'SAE','자연명승':'SCN','강/호수':'LKE','계절 명소':'GAD'};
const regionCode={'인천광역시':'IC','경기도':'GG','강원도':'GW'};

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
