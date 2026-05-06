const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const now = new Date().toISOString().slice(0,19);

const raw = [
  {name:'고성 당항포 관광지',category_main:'역사',category_sub:'생활유적',period:'조선 임진왜란',period_category:'조선시대',region:'경상남도',address:'경상남도 고성군 회화면 당항만로 1116',location_marker_type:'entrance',lat:35.0167,lng:128.3392,short_description:'임진왜란 당시 이순신 장군이 두 차례(1592·1594년) 왜선을 격멸한 해전 현장. 당항포대첩을 기념하여 거북선 복원모형과 이순신영상관을 갖춘 관광지로 조성됐다.',source_urls:['https://www.goseong.go.kr/tour/'],data_confidence:'high',tags:['이순신','임진왜란','당항포대첩','거북선','고성','경남','해전유적']},
  {name:'울산 신불산',category_main:'자연',category_sub:'산',period:'',period_category:'',region:'울산광역시',address:'울산광역시 울주군 삼남읍 신불산길 일원',location_marker_type:'entrance',lat:35.4833,lng:129.0333,short_description:'해발 1,159m 영남알프스 8봉 중 하나로 정상 일대에 광활한 억새 평원이 펼쳐지는 가을 명산이다. 파래소 폭포와 홍류폭포를 품은 계곡과 함께 간월산·영축산으로 이어지는 종주 코스가 유명하다.',source_urls:['https://ko.wikipedia.org/wiki/%EC%8B%A0%EB%B6%88%EC%82%B0'],data_confidence:'high',tags:['신불산','영남알프스','억새평원','울산','가을단풍','등산','파래소폭포']},
  {name:'울산 간절곶',category_main:'자연',category_sub:'일출/일몰 명소',period:'',period_category:'',region:'울산광역시',address:'울산광역시 울주군 서생면 간절곶길 39',location_marker_type:'exact',lat:35.3592,lng:129.3811,short_description:'한반도 동쪽 육지에서 일출을 가장 먼저 볼 수 있는 최동단 해안 절벽. 등대와 소망우체통이 명물이며 새해 첫날 전국에서 수만 명이 일출을 맞이하러 몰려드는 대표적인 해돋이 성지다.',source_urls:['https://ko.wikipedia.org/wiki/%EA%B0%84%EC%A0%88%EA%B3%B6'],data_confidence:'high',tags:['간절곶','한국최동단일출','새해일출','울산','동해','등대','소망우체통']},
  {name:'안동 도산서원',category_main:'역사',category_sub:'서원',period:'조선 1574년 창건',period_category:'조선시대',region:'경상북도',address:'경상북도 안동시 도산면 도산서원길 154',location_marker_type:'exact',lat:36.7308,lng:128.9236,short_description:'퇴계 이황이 학문 연구하고 후진 양성하던 도산서당을 바탕으로 1574년 건립된 서원. 2019년 유네스코 세계유산 한국의 서원 9곳 중 하나로 등재됐으며 낙동강 상류 절경 속에 자리한다.',source_urls:['https://www.dosanseowon.com'],data_confidence:'high',tags:['도산서원','퇴계이황','유네스코세계유산','조선서원','안동','경북','선비문화','낙동강']},
  {name:'안동 이육사문학관',category_main:'역사',category_sub:'생활유적',period:'일제강점기 1904~1944',period_category:'근대',region:'경상북도',address:'경상북도 안동시 도산면 백운로 525',location_marker_type:'exact',lat:36.7197,lng:128.9141,short_description:'저항 시인 이육사의 생가 터 인근에 세워진 문학관으로 그의 생애와 독립운동·시 문학을 종합 조명한다. 청포도·광야·절정 등 대표 시의 육필 원고와 항일 활동 자료가 전시되어 있다.',source_urls:['https://www.264.or.kr'],data_confidence:'high',tags:['이육사','독립운동','항일시인','안동','문학관','청포도','광야','경북']},
  {name:'영주 소백산 비로봉',category_main:'자연',category_sub:'산',period:'',period_category:'',region:'경상북도',address:'경상북도 영주시 풍기읍 소백산 비로봉 일원',location_marker_type:'entrance',lat:36.9644,lng:128.4736,short_description:'소백산 최고봉(해발 1,439m)으로 초여름 철쭉 군락과 가을 억새, 겨울 설경으로 사계절 탐방객이 찾는 국립공원 명봉이다. 정상 일대 고산 초원에 노란 산철쭉이 융단처럼 피는 5~6월이 절정이다.',source_urls:['https://sobaeksan.knps.or.kr'],data_confidence:'high',tags:['소백산','비로봉','철쭉','국립공원','영주','경북','고산초원','능선트레킹']},
  {name:'예천 삼강주막',category_main:'역사',category_sub:'생활유적',period:'조선시대 말 1900년대 초',period_category:'근대',region:'경상북도',address:'경상북도 예천군 풍양면 삼강리길 53',location_marker_type:'exact',lat:36.5625,lng:128.4319,short_description:'낙동강·내성천·금천 세 물줄기가 만나는 삼강나루에 세워진 현존하는 한국 마지막 전통 주막. 1900년대 초 건립된 초가 건물로 보부상·여행객이 쉬어가던 실제 주막 문화를 체험할 수 있다.',source_urls:['https://www.ycg.kr/tour'],data_confidence:'high',tags:['삼강주막','전통주막','예천','낙동강','나루터','민속문화재','황포돛배','경북']},
  {name:'포항 호미곶',category_main:'자연',category_sub:'일출/일몰 명소',period:'',period_category:'',region:'경상북도',address:'경상북도 포항시 남구 호미곶면 해맞이로 150',location_marker_type:'exact',lat:36.0772,lng:129.5706,short_description:'한반도 호랑이 꼬리 끝 최동단 돌출부로 새해 일출 명소로 전국에서 가장 유명한 곳이다. 바다 위에 솟은 상생의 손 조형물이 포항 랜드마크이며 매년 수십만 명이 해맞이 광장에 모인다.',source_urls:['https://ko.wikipedia.org/wiki/%ED%98%B8%EB%AF%B8%EA%B3%B6'],data_confidence:'high',tags:['호미곶','새해일출','상생의손','포항','동해일출','한반도호랑이꼬리','등대박물관','해맞이']},
  {name:'창원 진해 군항제',category_main:'자연',category_sub:'계절 명소',period:'',period_category:'',region:'경상남도',address:'경상남도 창원시 진해구 여좌동 일원',location_marker_type:'entrance',lat:35.1399,lng:128.6975,short_description:'매년 3~4월 진해 전역을 뒤덮는 벚꽃 축제로 60년 이상의 역사를 자랑하는 대한민국 최대 규모의 봄 축제다. 여좌천 로망스다리·경화역·안민도로 등에서 36만 그루 왕벚나무가 한꺼번에 피어난다.',source_urls:['https://ko.wikipedia.org/wiki/%EC%A7%84%ED%95%B4%EA%B5%B0%ED%95%AD%EC%A0%9C'],data_confidence:'high',tags:['벚꽃축제','군항제','진해','봄여행','여좌천','경화역','대표봄축제','창원']}
];

const subCatCode={'생활유적':'SAE','산':'MTN','일출/일몰 명소':'SUN','서원':'SWO','계절 명소':'GAD'};
const regionCode={'경상남도':'GN','울산광역시':'US','경상북도':'GB'};

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
