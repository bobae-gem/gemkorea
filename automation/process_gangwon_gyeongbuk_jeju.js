const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';

const raw = [
  {name:'오죽헌',category:'생활유적',period:'조선 전기 (보물 제165호)',period_category:'조선 전기',region:'강원도',address:'강원특별자치도 강릉시 율곡로3139번길 24',location_marker_type:'exact',lat:37.7724,lng:128.8762,short_description:'신사임당과 율곡 이이가 태어난 조선 중기 목조 건물로 보물 제165호. 5만원권·5천원권 지폐에 등장하는 강릉의 대표 역사유산이다.',source_urls:['https://encykorea.aks.ac.kr/Article/E0001111'],data_confidence:'high',tags:['조선전기','신사임당','율곡이이','강릉','보물']},
  {name:'강릉 선교장',category:'생활유적',period:'조선 후기',period_category:'조선 후기',region:'강원도',address:'강원특별자치도 강릉시 운정길 63',location_marker_type:'exact',lat:37.7866,lng:128.8851,short_description:'조선 후기 사대부가의 전형적인 한옥 고택으로 국가민속문화재 제5호. 안채·사랑채·행랑채 등이 원형에 가깝게 보존된 강릉 최대 규모의 전통 가옥이다.',source_urls:['https://heritage.go.kr/heri/cul/culSelectDetail.do?ccbaCpno=1483200050000'],data_confidence:'high',tags:['조선후기','고택','강릉','전통건축']},
  {name:'강릉 경포대',category:'생활유적',period:'고려 (관동팔경 제1경)',period_category:'고려',region:'강원도',address:'강원특별자치도 강릉시 경포로 365',location_marker_type:'exact',lat:37.7977,lng:128.8912,short_description:'관동팔경 중 하나로 고려 말에 창건된 누각. 경포호를 내려다보는 절경으로 유명하며 조선 시대 수많은 시인 묵객이 찾았던 강원도 대표 정자 문화유산이다.',source_urls:['https://heritage.go.kr/heri/cul/culSelectDetail.do?ccbaCpno=1113200570000'],data_confidence:'high',tags:['고려','관동팔경','강릉','누각','경포호']},
  {name:'설악산 신흥사',category:'사찰',period:'삼국시대 신라 (652년 창건)',period_category:'삼국',region:'강원도',address:'강원특별자치도 속초시 설악산로 1137',location_marker_type:'entrance',lat:38.1759,lng:128.4842,short_description:'652년 자장율사가 창건한 설악산 국립공원 내 고찰. 통일대불과 천연기념물 향나무로 유명하며 울산바위 등산로 입구에 자리한다.',source_urls:['https://en.wikipedia.org/wiki/Sinheungsa'],data_confidence:'high',tags:['삼국시대','신라','사찰','설악산','속초']},
  {name:'고성 건봉사',category:'사찰',period:'삼국시대 (520년 창건)',period_category:'삼국',region:'강원도',address:'강원특별자치도 고성군 거진읍 건봉사로 723',location_marker_type:'entrance',lat:38.4312,lng:128.4167,short_description:'520년 창건된 강원도 최북단 고찰로 부처님 진신치아사리를 봉안한 사찰. 한국전쟁으로 소실된 후 복원되었으며 능파교(보물)가 남아있다.',source_urls:['https://en.wikipedia.org/wiki/Geonbongsa'],data_confidence:'medium',tags:['삼국시대','사찰','고성','DMZ','치아사리']},
  {name:'평창 월정사',category:'사찰',period:'삼국시대 신라 (643년 창건)',period_category:'삼국',region:'강원도',address:'강원특별자치도 평창군 진부면 오대산로 374-8',location_marker_type:'entrance',lat:37.8305,lng:128.5543,short_description:'643년 자장율사가 오대산에 창건한 고찰. 국보 팔각구층석탑과 수령 600년 이상 전나무 숲길이 유명하며 오대산 국립공원의 핵심 불교 성지다.',source_urls:['https://en.wikipedia.org/wiki/Woljeongsa'],data_confidence:'high',tags:['삼국시대','신라','사찰','오대산','국보','평창']},
  {name:'춘천 소양강댐',category:'생활유적',period:'현대 (1973년 완공)',period_category:'현대',region:'강원도',address:'강원특별자치도 춘천시 동면 소양강댐길 388',location_marker_type:'exact',lat:37.9488,lng:127.8151,short_description:'1973년 완공된 동양 최대 사력댐으로 소양호를 형성한 근현대 토목 유산. 배를 타고 청평사 등으로 이동하는 호수 여행의 출발점이다.',source_urls:['https://en.wikipedia.org/wiki/Soyang_Dam'],data_confidence:'high',tags:['현대','댐','춘천','소양호','근현대']},
  {name:'철원 노동당사',category:'전쟁유적',period:'현대 (1946년 건립, 한국전쟁 유적)',period_category:'현대',region:'강원도',address:'강원특별자치도 철원군 철원읍 금강산로 265',location_marker_type:'exact',lat:38.1543,lng:127.3065,short_description:'1946년 북한이 건립한 3층 철근콘크리트 건물로 한국전쟁 당시 포탄 흔적이 그대로 남아있는 근현대 전쟁유적. 분단과 전쟁의 역사를 증언하는 철원 DMZ 일대의 핵심 사적이다.',source_urls:['https://en.wikipedia.org/wiki/Korean_Workers%27_Party_Headquarters,_Cheorwon'],data_confidence:'high',tags:['현대','한국전쟁','분단','DMZ','철원','근현대']},
  {name:'삼척 죽서루',category:'생활유적',period:'고려 (관동팔경 제1경, 국보)',period_category:'고려',region:'강원도',address:'강원특별자치도 삼척시 죽서루길 37',location_marker_type:'exact',lat:37.4453,lng:129.1654,short_description:'관동팔경 중 제1경으로 꼽히는 고려 시대 누각으로 국보. 오십천 절벽 위에 자연 암반을 기둥 삼아 지은 독특한 건축 기법과 역대 문인들의 시문이 새겨진 현판이 유명하다.',source_urls:['https://heritage.go.kr/heri/cul/culSelectDetail.do?ccbaCpno=1115103430000'],data_confidence:'high',tags:['고려','관동팔경','국보','삼척','누각']},
  {name:'안동 봉정사',category:'사찰',period:'삼국시대 신라 (672년 창건, 유네스코)',period_category:'삼국',region:'경상북도',address:'경상북도 안동시 서후면 봉정사길 222',location_marker_type:'entrance',lat:36.6533,lng:128.6620,short_description:'672년 의상대사의 제자 능인이 창건한 사찰로 한국에서 가장 오래된 목조 건물인 극락전(국보)을 보유하고 있다. 2018년 유네스코 세계유산 한국의 산사로 등재되었다.',source_urls:['https://en.wikipedia.org/wiki/Bongjeongsa'],data_confidence:'high',tags:['삼국시대','신라','사찰','유네스코','극락전','국보','안동']},
  {name:'안동 하회마을',category:'생활유적',period:'조선 전기 (유네스코)',period_category:'조선 전기',region:'경상북도',address:'경상북도 안동시 풍천면 하회종가길 2-1',location_marker_type:'entrance',lat:36.5387,lng:128.5193,short_description:'낙동강이 마을을 감싸 흐르는 풍산 류씨 집성촌. 조선 시대 양반 주거 문화와 유교 전통이 잘 보존되어 있으며 2010년 경주 양동마을과 함께 유네스코 세계문화유산으로 등재되었다.',source_urls:['https://en.wikipedia.org/wiki/Hahoe_Village'],data_confidence:'high',tags:['조선전기','전통마을','유네스코','류성룡','안동']},
  {name:'영주 부석사',category:'사찰',period:'통일신라 (676년 창건, 유네스코)',period_category:'통일신라',region:'경상북도',address:'경상북도 영주시 부석면 부석사로 345',location_marker_type:'entrance',lat:36.9942,lng:128.6585,short_description:'676년 의상대사가 창건한 화엄종 사찰로 국보 무량수전과 봉황산 중턱의 웅장한 석축이 유명하다. 2018년 유네스코 세계유산 한국의 산사에 등재된 신라 불교 건축의 정수다.',source_urls:['https://en.wikipedia.org/wiki/Buseoksa'],data_confidence:'high',tags:['통일신라','의상대사','사찰','유네스코','무량수전','국보','영주']},
  {name:'경산 팔공산 갓바위',category:'비석',period:'통일신라 (석조여래좌상, 보물)',period_category:'통일신라',region:'경상북도',address:'경상북도 경산시 와촌면 갓바위로 81-17',location_marker_type:'exact',lat:35.9983,lng:128.7357,short_description:'팔공산 관봉(해발 850m) 정상의 통일신라 석조 여래 좌상(보물). 머리에 납작한 갓을 쓴 독특한 형태로 소원을 이뤄준다는 전설로 수험생과 참배객의 발길이 끊이지 않는다.',source_urls:['https://encykorea.aks.ac.kr/Article/E0004853'],data_confidence:'high',tags:['통일신라','석불','보물','팔공산','경산']},
  {name:'경주 남산',category:'고분',period:'삼국~통일신라 (노천 박물관)',period_category:'통일신라',region:'경상북도',address:'경상북도 경주시 배반동 산20-1',location_marker_type:'entrance',lat:35.7981,lng:129.2085,short_description:'노천 박물관으로 불리는 신라 불교 문화의 집산지. 산 전체에 석불·마애불·탑·성터 등 200여 점의 문화재가 분포하며 포석정·삼릉 등 신라 왕실 유적도 산재한다.',source_urls:['https://en.wikipedia.org/wiki/Namsan_(Gyeongju)'],data_confidence:'high',tags:['통일신라','신라','불교','경주','마애불','국립공원']},
  {name:'포항 보경사',category:'사찰',period:'삼국시대 (602년 창건)',period_category:'삼국',region:'경상북도',address:'경상북도 포항시 북구 송라면 보경로 523',location_marker_type:'entrance',lat:36.1714,lng:129.3382,short_description:'602년 창건된 내연산 자락의 고찰로 12폭포를 품은 내연계곡을 끼고 있다. 적광전(보물)을 비롯한 문화재와 함께 계곡 트레킹의 시작점으로 유명하다.',source_urls:['https://english.visitkorea.or.kr/svc/whereToGo/locIntrdn/rgnContentsView.do?vcontsId=94537'],data_confidence:'high',tags:['삼국시대','사찰','포항','내연산','폭포']},
  {name:'제주 관덕정',category:'생활유적',period:'조선 전기 (1448년 건립, 보물)',period_category:'조선 전기',region:'제주특별자치도',address:'제주특별자치도 제주시 관덕로 19',location_marker_type:'exact',lat:33.5120,lng:126.5217,short_description:'1448년 제주 병사들의 훈련장으로 건립된 제주에서 가장 오래된 건물(보물 제322호). 제주목의 중심 공공 건축물로 내부 벽화와 현판이 보존되어 있다.',source_urls:['https://heritage.go.kr/heri/cul/culSelectDetail.do?ccbaCpno=1123501410000'],data_confidence:'high',tags:['조선전기','보물','제주','관덕정','제주목']},
  {name:'성산일출봉',category:'고인돌',period:'선사시대 (약 5천 년 전 화산 형성, 유네스코)',period_category:'선사',region:'제주특별자치도',address:'제주특별자치도 서귀포시 성산읍 일출로 284-12',location_marker_type:'entrance',lat:33.4581,lng:126.9425,short_description:'약 5천 년 전 수중 화산활동으로 형성된 높이 182m의 분화구 봉우리. 제주의 새해 일출 명소로 유명하며 2007년 유네스코 세계자연유산의 일부로 등재되었다.',source_urls:['https://en.wikipedia.org/wiki/Seongsan_Ilchulbong'],data_confidence:'high',tags:['선사시대','화산','유네스코','제주','일출']},
  {name:'제주 삼성혈',category:'생활유적',period:'선사시대 (탐라국 건국 신화)',period_category:'선사',region:'제주특별자치도',address:'제주특별자치도 제주시 삼성로 22',location_marker_type:'exact',lat:33.5050,lng:126.5292,short_description:'탐라국의 건국 신화가 깃든 성지로 고·양·부 세 신인이 솟아났다는 세 구멍이 보존되어 있다. 사적 제134호로 지정된 제주 고유 문화와 탐라 왕국 기원의 성지다.',source_urls:['https://en.wikipedia.org/wiki/Samseonghyeol'],data_confidence:'high',tags:['선사시대','탐라','건국신화','제주','사적']},
  {name:'창녕 우포늪',category:'생활유적',period:'선사시대 (약 1억 4천만 년 전)',period_category:'선사',region:'경상남도',address:'경상남도 창녕군 유어면 우포늪길 220',location_marker_type:'entrance',lat:35.5539,lng:128.4161,short_description:'약 1억 4천만 년 전 형성된 우리나라 최대 자연 내륙 습지(2.31㎢). 람사르 습지로 등록된 생태 보고로 선사 시대부터 이어진 자연환경과 희귀 동식물의 서식지다.',source_urls:['https://en.wikipedia.org/wiki/Upo_Wetland'],data_confidence:'high',tags:['선사시대','습지','람사르','창녕','자연유산']},
  {name:'함양 남계서원',category:'서원',period:'조선 전기 (1552년 건립, 유네스코)',period_category:'조선 전기',region:'경상남도',address:'경상남도 함양군 수동면 남계서원길 11',location_marker_type:'exact',lat:35.5824,lng:127.8012,short_description:'1552년 설립된 한국 두 번째 서원으로 정여창을 배향한다. 전학후묘 배치로 조선 서원 건축 양식을 확립했으며 2019년 유네스코 세계문화유산으로 등재되었다.',source_urls:['https://en.wikipedia.org/wiki/Namgye_Seowon'],data_confidence:'high',tags:['조선전기','서원','유네스코','정여창','함양']},
  {name:'거창 수승대',category:'생활유적',period:'조선 전기',period_category:'조선 전기',region:'경상남도',address:'경상남도 거창군 위천면 은하리 675',location_marker_type:'exact',lat:35.7543,lng:127.9412,short_description:'위천 계곡의 넓은 바위 일대로 이루어진 명승 제53호. 퇴계 이황이 이름을 바꿔준 일화가 전해지는 선비 문화의 유서 깊은 승경지다.',source_urls:['https://heritage.go.kr/heri/cul/culSelectDetail.do?ccbaCpno=1353800530000'],data_confidence:'medium',tags:['조선전기','이황','퇴계','거창','명승']}
];

const catCode={생활유적:'SAE',사찰:'SAJ',전쟁유적:'JEN',고분:'GOB',비석:'BIS',서원:'SWO',고인돌:'GID'};
const subCat={생활유적:'고택/서원/향교',사찰:'사찰/불교유산',전쟁유적:'독립운동/근현대',고분:'고인돌/선사유적',비석:'비석/기념유산',서원:'고택/서원/향교',고인돌:'고인돌/선사유적'};
const regionCode={'강원도':'GW','경상북도':'GB','제주특별자치도':'JJ','경상남도':'GN'};

const existing=JSON.parse(fs.readFileSync(base+'data/heritage_all.json','utf8'));
const existingNames=new Set(existing.map(d=>d.name));
const counters={};
existing.forEach(d=>{
  const p=d.place_id.split('-');
  const k=p[1]+'-'+p[2];
  const n=parseInt(p[3]);
  if(!counters[k]||counters[k]<n)counters[k]=n;
});

const now=new Date().toISOString().slice(0,19);
const newItems=raw.filter(d=>!existingNames.has(d.name)).map(d=>{
  const rc=regionCode[d.region]||'ETC';
  const cc=catCode[d.category]||'ETC';
  const k=rc+'-'+cc;
  counters[k]=(counters[k]||0)+1;
  const placeId='GK-'+rc+'-'+cc+'-'+String(counters[k]).padStart(4,'0');
  return {
    ...d,
    place_id:placeId,
    category_main:'역사',
    category_sub:subCat[d.category]||'비석/기념유산',
    category_detail:d.short_description.split('.')[0],
    confidence:d.data_confidence==='high'?'high':'low',
    confidence_reason:'',
    needs_geocoding:false,
    status:{map_displayable:true,data_status:'complete',map_status:'waiting',content_status:'waiting',last_updated:now},
    content_link:{has_video:false,youtube_url:'',instagram_url:'',tiktok_url:'',xiaohongshu_url:'',video_status:'없음'}
  };
});

const merged=[...existing,...newItems];
fs.writeFileSync(base+'data/heritage_all.json',JSON.stringify(merged,null,2),'utf8');
const ready=merged.filter(d=>d.status.map_displayable&&d.lat&&d.lng);
fs.writeFileSync(base+'map/markers_ready.json',JSON.stringify({total:ready.length,markers:ready},null,2),'utf8');

const rawLog=JSON.parse(fs.readFileSync(base+'data/raw/search_results.json','utf8'));
rawLog.results.push({run_time:now,mode:'A_MODE_FAST_SEARCH',region:'강원·경북·제주·경남',collected:newItems.length,total:merged.length});
fs.writeFileSync(base+'data/raw/search_results.json',JSON.stringify(rawLog,null,2),'utf8');
const log=JSON.parse(fs.readFileSync(base+'logs/automation_log.json','utf8'));
log.runs.push({time:now,mode:'A',region:'강원·경북·제주·경남',new_collected:newItems.length,total:merged.length,markers_ready:ready.length,errors:0});
fs.writeFileSync(base+'logs/automation_log.json',JSON.stringify(log,null,2),'utf8');

// high 신뢰도 자동 승인
let approved=0;
const approved_data=merged.map(d=>{
  if(d.data_confidence==='high'&&d.status.map_status==='waiting'){
    approved++;
    return {...d,status:{...d.status,map_status:'published',last_updated:now}};
  }
  return d;
});
fs.writeFileSync(base+'data/heritage_all.json',JSON.stringify(approved_data,null,2),'utf8');
const readyFinal=approved_data.filter(d=>d.status.map_displayable&&d.lat&&d.lng);
fs.writeFileSync(base+'map/markers_ready.json',JSON.stringify({total:readyFinal.length,markers:readyFinal},null,2),'utf8');

console.log('A모드 5회차 — 강원·경북·제주·경남 완료');
console.log('새로 수집: '+newItems.length+'개');
console.log('high 신뢰도 자동 승인: '+approved+'개');
console.log('누적 장소: '+approved_data.length+'개');
console.log('지도 게시됨: '+approved_data.filter(d=>d.status.map_status==='published').length+'개');
console.log('1차 목표(300개): '+(approved_data.length/300*100).toFixed(1)+'%');
newItems.forEach(d=>console.log('  + ['+d.place_id+'] '+d.name));
