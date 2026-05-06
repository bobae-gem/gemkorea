const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const now = new Date().toISOString().slice(0,19);

const raw = [
  {name:'내장산',category_main:'자연',category_sub:'산',period:'',period_category:'',region:'전라북도',address:'전북특별자치도 정읍시 내장산로 936',location_marker_type:'entrance',lat:35.4897,lng:126.8892,short_description:'한국의 단풍 명산으로 손꼽히는 내장산은 아홉 개의 봉우리가 말발굽 모양으로 둘러싼 분지형 지형이 특징이다. 11월이면 내장사 일주문에서 사찰까지 이어지는 단풍터널이 장관을 이루며 국립공원으로 지정되어 사계절 내내 다양한 자연경관을 자랑한다.',source_urls:['https://ko.wikipedia.org/wiki/%EB%82%B4%EC%9E%A5%EC%82%B0'],data_confidence:'high',tags:['단풍명산','국립공원','내장사','케이블카','가을여행','단풍터널','정읍']},
  {name:'선운산',category_main:'자연',category_sub:'산',period:'',period_category:'',region:'전라북도',address:'전북특별자치도 고창군 아산면 선운사로 250',location_marker_type:'entrance',lat:35.4762,lng:126.5895,short_description:'호남의 내금강이라 불릴 만큼 뛰어난 경관의 도립공원으로 백제 시대 창건된 선운사를 품고 있다. 봄에는 동백꽃, 가을에는 꽃무릇으로 유명하며 특히 선운사 뒤편 동백나무 숲은 천연기념물로 지정되어 있다.',source_urls:['https://ko.wikipedia.org/wiki/%EC%84%A0%EC%9A%B4%EC%82%B0'],data_confidence:'high',tags:['도립공원','선운사','동백꽃','꽃무릇','고창','봄여행','호남내금강']},
  {name:'방장산',category_main:'자연',category_sub:'산',period:'',period_category:'',region:'전라북도',address:'전북특별자치도 고창군 고수면 방장산로 480',location_marker_type:'entrance',lat:35.4153,lng:126.7278,short_description:'호남 5대 명산 중 하나로 전북 고창과 전남 장성의 경계에 위치한다. 해발 743m 정상에서 서해와 내륙의 드넓은 평야를 조망할 수 있으며 자연휴양림과 오토캠핑장이 조성돼 가족 여행객에게 인기다.',source_urls:['https://ko.wikipedia.org/wiki/%EB%B0%A9%EC%9E%A5%EC%82%B0'],data_confidence:'medium',tags:['호남명산','자연휴양림','고창','장성','철쭉','조망명산','캠핑']},
  {name:'덕유산',category_main:'자연',category_sub:'산',period:'',period_category:'',region:'전라북도',address:'전북특별자치도 무주군 설천면 무설로 1843',location_marker_type:'entrance',lat:35.8302,lng:127.7317,short_description:'소백산맥에 위치한 국립공원으로 향적봉(1,614m)이 주봉이며 무주리조트 곤돌라를 이용해 정상 근처까지 오를 수 있다. 겨울에는 설원과 눈꽃, 여름에는 구천동 계곡의 시원한 물소리가 일품이다.',source_urls:['https://ko.wikipedia.org/wiki/%EB%8D%95%EC%9C%A0%EC%82%B0'],data_confidence:'high',tags:['국립공원','향적봉','구천동계곡','무주리조트','설경','겨울산행','무주']},
  {name:'지리산 노고단',category_main:'자연',category_sub:'산',period:'',period_category:'',region:'전라남도',address:'전라남도 구례군 산동면 노고단길 218',location_marker_type:'entrance',lat:35.3067,lng:127.5125,short_description:'지리산 서쪽 주요 봉우리(1,507m)로 운해와 일출 명소로 전국적으로 유명하다. 성삼재 주차장에서 탐방로를 따라 오르면 드넓은 초원과 돌탑이 맞이하며 정상에서는 지리산 주능선이 한눈에 들어온다.',source_urls:['https://ko.wikipedia.org/wiki/%EB%85%B8%EA%B3%A0%EB%8B%A8'],data_confidence:'high',tags:['지리산','국립공원','운해','일출명소','구례','성삼재','노고단초원']},
  {name:'오대산 월정사 전나무숲',category_main:'자연',category_sub:'자연명승',period:'',period_category:'',region:'강원도',address:'강원도 평창군 진부면 오대산로 374-8',location_marker_type:'entrance',lat:37.6957,lng:128.5414,short_description:'월정사 일주문에서 사찰까지 약 1km에 걸쳐 수령 100년 이상의 전나무 1,700여 그루가 하늘을 덮는 숲길이 펼쳐진다. 피톤치드가 가득한 사계절 힐링 명소이며 특히 설경이 내려앉은 겨울 풍경이 신비롭다.',source_urls:['https://www.woljeongsa.org'],data_confidence:'high',tags:['전나무숲','월정사','오대산','평창','힐링숲길','피톤치드','겨울설경']},
  {name:'설악산 울산바위',category_main:'자연',category_sub:'자연명승',period:'',period_category:'',region:'강원도',address:'강원도 속초시 설악산로 1091',location_marker_type:'entrance',lat:38.1284,lng:128.5458,short_description:'6개의 봉우리가 연결된 거대한 화강암 암봉으로 둘레 약 4km, 높이 873m다. 신흥사에서 출발해 흔들바위를 거쳐 정상에 오르면 동해와 설악산 전경이 한눈에 펼쳐지는 설악산 최고 조망 명소다.',source_urls:['https://ko.wikipedia.org/wiki/%EC%9A%B8%EC%82%B0%EB%B0%94%EC%9C%84'],data_confidence:'high',tags:['설악산','국립공원','화강암','속초','신흥사','흔들바위','동해조망']},
  {name:'월출산',category_main:'자연',category_sub:'산',period:'',period_category:'',region:'전라남도',address:'전라남도 영암군 영암읍 천황사로 280',location_marker_type:'entrance',lat:34.7613,lng:126.6909,short_description:'호남의 소금강이라 불리는 국립공원으로 기암괴석과 수직 절벽이 어우러진 역동적인 산세가 특징이다. 구름다리·도갑사·바람폭포 등 볼거리가 풍부하고 일출 때 바위 사이로 달이 떠오르는 풍경이 장관이다.',source_urls:['https://ko.wikipedia.org/wiki/%EC%9B%94%EC%B6%9C%EC%82%B0'],data_confidence:'high',tags:['국립공원','호남소금강','기암괴석','영암','구름다리','도갑사','일출명소']},
  {name:'무등산',category_main:'자연',category_sub:'산',period:'',period_category:'',region:'광주광역시',address:'광주광역시 동구 무등산로 180',location_marker_type:'entrance',lat:35.1225,lng:126.9886,short_description:'광주와 전남의 상징적 산으로 2013년 국립공원으로 승격됐다. 주상절리대인 서석대(1,100m)와 입석대는 천연기념물로 지정된 독특한 지질 경관이며 증심사·원효사 등 고찰을 함께 즐길 수 있다.',source_urls:['https://ko.wikipedia.org/wiki/%EB%AC%B4%EB%93%B1%EC%82%B0'],data_confidence:'high',tags:['국립공원','주상절리','서석대','입석대','광주','천연기념물','증심사']},
  {name:'한라산 성판악코스',category_main:'자연',category_sub:'산',period:'',period_category:'',region:'제주특별자치도',address:'제주특별자치도 제주시 조천읍 516로 1865',location_marker_type:'entrance',lat:33.3823,lng:126.6416,short_description:'한라산 백록담 정상(1,950m)에 오를 수 있는 대표 코스로 왕복 약 19.2km의 가장 긴 탐방로다. 사라오름·진달래밭 대피소를 거치며 유네스코 세계자연유산으로 지정된 한라산의 다양한 화산 지형을 경험할 수 있다.',source_urls:['https://hallasan.go.kr'],data_confidence:'high',tags:['한라산','백록담','유네스코세계자연유산','제주','성판악','사라오름','화산지형']},
  {name:'논산 관촉사',category_main:'역사',category_sub:'사찰',period:'고려 968년 창건',period_category:'고려시대',region:'충청남도',address:'충청남도 논산시 관촉로1번길 25',location_marker_type:'exact',lat:36.1726,lng:127.0868,short_description:'968년 고려 광종 때 창건된 사찰. 높이 18.12m의 국보 석조미륵보살입상(은진미륵)이 있으며 고려 최대의 석불이다. 커다란 원통형 보관과 독특한 비례가 고려 불교 조각의 개성을 잘 보여준다.',source_urls:['https://ko.wikipedia.org/wiki/%EA%B4%80%EC%B4%89%EC%82%AC'],data_confidence:'high',tags:['국보','고려시대','논산','은진미륵','석불','사찰','고려석조예술']}
];

const subCatCode={'산':'MTN','자연명승':'SCN','사찰':'SAJ'};
const regionCode={'전라북도':'JB','전라남도':'JN','강원도':'GW','광주광역시':'GJ','제주특별자치도':'JJ','충청남도':'CN'};

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
