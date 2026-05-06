const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const now = new Date().toISOString().slice(0,19);

const raw = [
  {name:'양산 통도사',category_main:'역사',category_sub:'사찰',period:'신라 646년 자장율사 창건',period_category:'삼국시대',region:'경상남도',address:'경상남도 양산시 하북면 통도사로 108',location_marker_type:'entrance',lat:35.4896,lng:129.0586,short_description:'신라 선덕여왕 15년 자장율사가 창건한 불보 사찰. 부처의 진신사리와 가사를 봉안한 금강계단이 국보로 지정되어 있으며 2018년 유네스코 세계유산 산사, 한국의 산지 승원에 등재되었다.',source_urls:['https://ko.wikipedia.org/wiki/%ED%86%B5%EB%8F%84%EC%82%AC'],data_confidence:'high',tags:['통도사','신라','자장율사','불보사찰','유네스코','금강계단','진신사리']},
  {name:'김해 수로왕릉',category_main:'역사',category_sub:'왕릉',period:'가야 42년~199년',period_category:'삼국시대',region:'경상남도',address:'경상남도 김해시 가락로93번길 26',location_marker_type:'exact',lat:35.2393,lng:128.8796,short_description:'금관가야의 시조 수로왕의 능. 사적 제73호로 구지봉 설화와 연관된 가야 건국 신화의 핵심 유적이다. 능역 내에는 조선시대 제향 건물이 보존되어 있다.',source_urls:['https://ko.wikipedia.org/wiki/%EC%88%98%EB%A1%9C%EC%99%95%EB%A6%89'],data_confidence:'high',tags:['수로왕','금관가야','삼국','고분','가야','김해','건국신화']},
  {name:'함안 말이산고분군',category_main:'역사',category_sub:'고분군',period:'가야 4~6세기',period_category:'삼국시대',region:'경상남도',address:'경상남도 함안군 가야읍 도항리 78',location_marker_type:'entrance',lat:35.2685,lng:128.4063,short_description:'아라가야의 왕족 고분군으로 구릉지에 130여 기의 대형 봉토분이 남아 있다. 2023년 유네스코 세계유산 가야고분군으로 등재되었으며 별자리를 새긴 천문도 덮개돌이 출토되었다.',source_urls:['https://ko.wikipedia.org/wiki/%ED%95%A8%EC%95%88_%EB%A7%90%EC%9D%B4%EC%82%B0_%EA%B3%A0%EB%B6%84%EA%B5%B0'],data_confidence:'high',tags:['말이산고분군','아라가야','가야고분군','유네스코','함안','천문도','순장']},
  {name:'고성 송학동고분군',category_main:'역사',category_sub:'고분군',period:'가야 5~6세기',period_category:'삼국시대',region:'경상남도',address:'경상남도 고성군 고성읍 송학리 470',location_marker_type:'entrance',lat:34.9724,lng:128.3236,short_description:'소가야의 지배층 무덤으로 추정되는 봉토분군. 2023년 유네스코 세계유산 가야고분군에 포함되었다. 구릉 정상부에 대형 봉토분 14기가 열상 배치되어 소가야의 위계 구조를 보여준다.',source_urls:['https://ko.wikipedia.org/wiki/%EA%B3%A0%EC%84%B1_%EC%86%A1%ED%95%99%EB%8F%99_%EA%B3%A0%EB%B6%84%EA%B5%B0'],data_confidence:'high',tags:['송학동고분군','소가야','가야고분군','유네스코','삼국','고성','봉토분']},
  {name:'진주성',category_main:'역사',category_sub:'성곽',period:'고려~조선 960년 초축',period_category:'조선시대',region:'경상남도',address:'경상남도 진주시 남강로 626',location_marker_type:'entrance',lat:35.1882,lng:128.0787,short_description:'남강 절벽 위에 축조된 석성으로 임진왜란 진주대첩과 2차 진주성 전투의 역사 현장이다. 사적 제118호로 성내에 국립진주박물관·촉석루·논개사당이 위치해 있다.',source_urls:['https://ko.wikipedia.org/wiki/%EC%A7%84%EC%A3%BC%EC%84%B1'],data_confidence:'high',tags:['진주성','임진왜란','진주대첩','논개','성곽','촉석루','경남']},
  {name:'지리산 피아골',category_main:'자연',category_sub:'계절 명소',period:'',period_category:'',region:'전라남도',address:'전라남도 구례군 토지면 피아골로 322',location_marker_type:'entrance',lat:35.2782,lng:127.5434,short_description:'지리산 국립공원 내 연곡사에서 직전마을까지 이어지는 계곡. 가을 단풍이 특히 유명하며 계곡미와 단풍이 어우러지는 대표적 트레킹 코스다.',source_urls:['https://jiri.knps.or.kr'],data_confidence:'high',tags:['피아골','지리산','단풍','계곡','국립공원','전남','트레킹']},
  {name:'제주 비자림',category_main:'자연',category_sub:'자연명승',period:'',period_category:'',region:'제주특별자치도',address:'제주특별자치도 제주시 구좌읍 비자숲길 55',location_marker_type:'entrance',lat:33.5285,lng:126.8049,short_description:'수령 500~800년의 비자나무 2,800여 그루가 단일 군락을 이루는 세계 최대 규모의 비자나무 군락지. 천연기념물 제374호로 피톤치드가 풍부한 산림욕 명소다.',source_urls:['https://ko.wikipedia.org/wiki/%EB%B9%84%EC%9E%90%EB%A6%BC'],data_confidence:'high',tags:['비자림','비자나무','천연기념물','제주','산림욕','숲길','자연명승']},
  {name:'제주 사려니숲길',category_main:'자연',category_sub:'자연명승',period:'',period_category:'',region:'제주특별자치도',address:'제주특별자치도 제주시 조천읍 교래리 산137-1',location_marker_type:'entrance',lat:33.4312,lng:126.7128,short_description:'해발 500~600m의 한라산 중턱에 조성된 15km 구간의 숲길. 삼나무·졸참나무 등이 우거진 원시림 속 트레킹 코스로 국가산림문화자산으로 지정되어 있다.',source_urls:['https://www.visitjeju.net'],data_confidence:'high',tags:['사려니숲길','한라산','제주','삼나무','숲길','트레킹','생태탐방']},
  {name:'제주 협재해변',category_main:'자연',category_sub:'바다/해변',period:'',period_category:'',region:'제주특별자치도',address:'제주특별자치도 제주시 한림읍 협재리 2497-1',location_marker_type:'exact',lat:33.3941,lng:126.2393,short_description:'에메랄드빛 바다와 새하얀 모래사장으로 유명한 제주 서쪽 대표 해변. 수심이 얕고 파도가 잔잔해 가족 단위 방문객이 많으며 앞바다 비양도가 수평선을 장식한다.',source_urls:['https://www.visitjeju.net'],data_confidence:'high',tags:['협재해변','제주','해변','에메랄드바다','비양도','서제주','가족여행']}
];

const subCatCode={'사찰':'SAJ','왕릉':'RYU','고분군':'GOB','성곽':'SAN','계절 명소':'GAD','자연명승':'SCN','바다/해변':'SEA'};
const regionCode={'경상남도':'GN','전라남도':'JN','제주특별자치도':'JJ'};

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
