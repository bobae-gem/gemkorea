const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const now = new Date().toISOString().slice(0,19);

const raw = [
  {name:'장성 입암산성',category_main:'역사',category_sub:'성곽',period:'조선시대',period_category:'조선시대',region:'전라남도',address:'전라남도 장성군 북하면 약수리 산190-1',location_marker_type:'entrance',lat:35.4172,lng:126.8163,short_description:'입암산 정상부의 험준한 지형을 활용한 포곡식 산성으로 전라도 내륙 방어의 요충지였다. 임진왜란·정유재란 당시 의병과 관군이 항전한 역사적 현장으로 성벽 둘레 약 4km가 비교적 잘 보존되어 있다.',source_urls:['https://ko.wikipedia.org/wiki/%EC%9E%85%EC%95%94%EC%82%B0%EC%84%B1'],data_confidence:'high',tags:['산성','임진왜란','의병','입암산','포곡식','전라도','조선']},
  {name:'무안 회산백련지',category_main:'자연',category_sub:'강/호수',period:'',period_category:'',region:'전라남도',address:'전라남도 무안군 일로읍 백련로 339',location_marker_type:'entrance',lat:34.9703,lng:126.4722,short_description:'국내 최대 규모의 백련 자생지로 약 100ha의 넓은 호수에 매년 7~8월 백련꽃이 장관을 이룬다. 생태 탐방로와 수상 데크가 조성되어 있으며 연꽃 축제 기간 전국에서 관광객이 찾는 남도 대표 여름 명소다.',source_urls:['https://www.muan.go.kr/tour'],data_confidence:'high',tags:['백련','연꽃','생태습지','여름명소','연꽃축제','수상데크','무안']},
  {name:'목포 근대역사문화공간',category_main:'역사',category_sub:'생활유적',period:'일제강점기',period_category:'근대',region:'전라남도',address:'전라남도 목포시 번화로 18 일원',location_marker_type:'entrance',lat:34.7928,lng:126.3876,short_description:'1897년 개항 이후 형성된 일제강점기 건축물과 골목이 밀집한 근대 역사지구로 2018년 국가등록문화재 지정됐다. 구 일본영사관·동양척식주식회사 등 근대 수탈의 역사를 담은 건축물들이 박물관으로 활용되고 있다.',source_urls:['https://www.mokpo.go.kr/tour/modern'],data_confidence:'high',tags:['근대역사','일제강점기','개항장','등록문화재','목포','도시재생','수탈역사']},
  {name:'목포 유달산',category_main:'자연',category_sub:'산',period:'',period_category:'',region:'전라남도',address:'전라남도 목포시 유달산로 135',location_marker_type:'entrance',lat:34.7957,lng:126.3692,short_description:'해발 228m의 목포 상징 산으로 서해와 다도해 섬들을 한눈에 조망한다. 임진왜란 때 이순신 장군이 군량미 쌓아 적을 교란했다는 노적봉 전설이 전해지며 조각공원과 전망대가 있다.',source_urls:['https://www.mokpo.go.kr/tour/nature/yudalsan'],data_confidence:'high',tags:['목포','다도해전망','노적봉','이순신','도심산행','조각공원','서해']},
  {name:'해남 달마산 미황사',category_main:'역사',category_sub:'사찰',period:'통일신라 749년 창건',period_category:'통일신라',region:'전라남도',address:'전라남도 해남군 송지면 미황사길 164',location_marker_type:'entrance',lat:34.3752,lng:126.6348,short_description:'749년 창건된 한반도 최남단 사찰로 달마산 기암괴석이 병풍처럼 둘러싼 절경 속에 자리한다. 보물 대웅전과 응진당이 남아 있으며 황금빛 배에서 소를 타고 온 인도 승려가 창건했다는 신비로운 설화로 유명하다.',source_urls:['https://www.mihwangsa.com'],data_confidence:'high',tags:['달마산','최남단사찰','통일신라','보물','땅끝마을','기암괴석','창건설화']},
  {name:'담양 관방제림',category_main:'자연',category_sub:'자연명승',period:'',period_category:'',region:'전라남도',address:'전라남도 담양군 담양읍 객사리 107-4 일원',location_marker_type:'entrance',lat:35.3197,lng:126.9882,short_description:'1648년 홍수 피해를 막기 위해 제방에 조성한 인공 숲으로 천연기념물 제366호다. 2km에 걸쳐 느티나무·팽나무 등 수령 100~300년 고목 185그루가 울창한 그늘을 드리워 사계절 걷기 여행지로 손꼽힌다.',source_urls:['https://ko.wikipedia.org/wiki/%EB%8B%B4%EC%96%91_%EA%B4%80%EB%B0%A9%EC%A0%9C%EB%A6%BC'],data_confidence:'high',tags:['천연기념물','노거수','숲길','조선','제방림','담양','가로수길']},
  {name:'영광 백수해안도로',category_main:'자연',category_sub:'일출/일몰 명소',period:'',period_category:'',region:'전라남도',address:'전라남도 영광군 백수읍 해안로 일원',location_marker_type:'entrance',lat:35.3551,lng:126.4132,short_description:'영광 백수읍 해안선을 따라 약 16.8km 이어지는 드라이브 코스로 낙조전망대에서 바라보는 서해 낙조가 국내 최고 낙조 명소로 손꼽힌다. 굽이치는 절벽과 기암, 서해 수평선이 어우러져 걷기 여행과 드라이브 모두 즐길 수 있다.',source_urls:['https://www.yeonggwang.go.kr/tour'],data_confidence:'high',tags:['낙조','해안드라이브','서해','낙조전망대','해안절벽','영광','걷기여행']},
  {name:'진도 세방낙조',category_main:'자연',category_sub:'일출/일몰 명소',period:'',period_category:'',region:'전라남도',address:'전라남도 진도군 지산면 세방리 산151-1',location_marker_type:'exact',lat:34.4046,lng:126.1498,short_description:'다도해해상국립공원 내 진도 서쪽 끝자락의 전망대로 크고 작은 섬들 사이로 붉게 물드는 일몰이 한국 대표 낙조 명소다. 조도 군도를 비롯한 300여 개의 섬이 점점이 펼쳐지는 다도해의 절경을 감상할 수 있다.',source_urls:['https://www.jindo.go.kr/tour'],data_confidence:'high',tags:['낙조','다도해','국립공원','전망대','섬','진도','일몰명소']}
];

const subCatCode={'성곽':'SAN','강/호수':'LKE','생활유적':'SAE','산':'MTN','사찰':'SAJ','자연명승':'SCN','일출/일몰 명소':'SUN'};
const regionCode={'전라남도':'JN'};

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
