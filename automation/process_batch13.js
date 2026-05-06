const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const now = new Date().toISOString().slice(0,19);

const raw = [
  {name:'토함산',category_main:'자연',category_sub:'산',period:'',period_category:'',region:'경상북도',address:'경상북도 경주시 양북면 불국로',location_marker_type:'exact',lat:35.7937,lng:129.3321,short_description:'경주국립공원 내 해발 745m의 산. 석굴암과 불국사를 품고 있으며 신라 시대부터 신성시된 동대산이다. 아침 해가 떠오르는 모습이 장관으로 경주 문화유산과 어우러진 산행 명소다.',source_urls:['https://en.wikipedia.org/wiki/Tohamsan'],data_confidence:'high',tags:['경주국립공원','석굴암','불국사','신라','동대산','경북']},
  {name:'성판악',category_main:'자연',category_sub:'산',period:'',period_category:'',region:'제주특별자치도',address:'제주특별자치도 제주시 조천읍 516로 1865',location_marker_type:'entrance',lat:33.3892,lng:126.5958,short_description:'한라산 정상 백록담으로 향하는 대표 탐방로 출발지. 해발 750m 지점에 위치하며 9.6km의 완만한 능선을 따라 정상까지 이어지는 한라산 대표 코스의 시작점이다.',source_urls:['https://visithalla.jeju.go.kr/'],data_confidence:'high',tags:['한라산','탐방로','백록담','제주','등산']},
  {name:'금정산',category_main:'자연',category_sub:'산',period:'',period_category:'',region:'부산광역시',address:'부산광역시 금정구 금성동',location_marker_type:'exact',lat:35.2801,lng:129.0506,short_description:'부산 최고봉 801.5m 고당봉을 품은 금정산. 국내 최대 규모 산성인 금정산성이 능선을 따라 펼쳐지고 천년 고찰 범어사가 자리한 부산 시민의 산이다.',source_urls:['https://en.wikipedia.org/wiki/Geumjeongsan'],data_confidence:'high',tags:['부산최고봉','801m','금정산성','범어사','국가지질공원','부산']},
  {name:'백운산',category_main:'자연',category_sub:'산',period:'',period_category:'',region:'전라남도',address:'전라남도 광양시 옥룡면',location_marker_type:'exact',lat:35.1062,lng:127.6214,short_description:'지리산과 인접한 전남 광양의 해발 1,218m 명산. 봄이면 동백과 산철쭉이 장관을 이루고 억불봉·상봉 등 웅장한 능선이 남해를 내려다본다. 섬진강과 광양만 전경이 아름답다.',source_urls:['https://ko.wikipedia.org/wiki/%EB%B0%B1%EC%9A%B4%EC%82%B0_(%EC%A0%84%EB%82%A8)'],data_confidence:'high',tags:['광양','1218m','지리산인접','섬진강','동백','전남']},
  {name:'세방낙조',category_main:'자연',category_sub:'일출/일몰 명소',period:'',period_category:'',region:'전라남도',address:'전라남도 진도군 지산면 세방낙조로 152',location_marker_type:'exact',lat:34.3347,lng:126.1489,short_description:'기상청이 한반도 제일의 낙조 전망지로 선정한 진도의 절경. 크고 작은 섬들이 점점이 박힌 다도해가 노을에 붉게 물드는 장관이 압권이다. 제1·2 전망대에서 서해 낙조와 다도해를 파노라마로 조망한다.',source_urls:['https://jindo.go.kr/','https://korean.visitkorea.or.kr/'],data_confidence:'high',tags:['낙조','다도해','진도','전망대','일몰명소','기상청선정','전남']},
  {name:'석모도',category_main:'자연',category_sub:'섬',period:'',period_category:'',region:'인천광역시',address:'인천광역시 강화군 삼산면',location_marker_type:'exact',lat:37.6667,lng:126.3333,short_description:'강화도 서쪽 1.5km 해상의 섬. 2017년 석모대교 개통으로 차로 접근 가능해졌다. 보문사 마애석불과 낙조전망대가 유명하며 서해 갯벌과 미네랄 온천으로 사계절 힐링 여행지로 사랑받는다.',source_urls:['https://encykorea.aks.ac.kr/Article/E0028412'],data_confidence:'high',tags:['강화군','보문사','낙조','온천','갯벌','석모대교','인천']},
  {name:'거제도',category_main:'자연',category_sub:'섬',period:'',period_category:'',region:'경상남도',address:'경상남도 거제시',location_marker_type:'exact',lat:34.8800,lng:128.6210,short_description:'우리나라 두 번째로 큰 섬으로 거가대교로 부산과 연결된다. 해금강·외도 보타니아·학동해변·바람의 언덕 등 절경이 집중된 경남 대표 관광지로 청정 남해 비경을 자랑한다.',source_urls:['https://www.geoje.go.kr/'],data_confidence:'high',tags:['경남','해금강','외도','거가대교','학동해변','바람의언덕']},
  {name:'안면도',category_main:'자연',category_sub:'섬',period:'',period_category:'',region:'충청남도',address:'충청남도 태안군 안면읍',location_marker_type:'exact',lat:36.5000,lng:126.4000,short_description:'충남 태안 앞바다의 국내 6번째 큰 섬. 안면도자연휴양림의 소나무 숲과 꽃지해변 할미·할아비바위 낙조가 명물이다. 매년 봄 튤립 축제로 전국 최고 꽃 여행지로 꼽힌다.',source_urls:['https://namu.wiki/w/%EC%95%88%EB%A9%B4%EB%8F%84'],data_confidence:'high',tags:['태안','충남','꽃지해변','안면도자연휴양림','소나무','튤립']},
  {name:'남해도',category_main:'자연',category_sub:'섬',period:'',period_category:'',region:'경상남도',address:'경상남도 남해군',location_marker_type:'exact',lat:34.8300,lng:127.9000,short_description:'경남 남해군의 중심 섬으로 남해대교·창선·삼천포대교로 육지와 이어진다. 다랭이마을 계단식 논밭·독일마을·보리암 등 이색 명소가 가득하고 청정 남해 바다가 아름답다.',source_urls:['https://en.wikipedia.org/wiki/Namhaedo'],data_confidence:'high',tags:['남해대교','다랭이마을','독일마을','보리암','경남','청정바다']},
  {name:'한탄강 주상절리길',category_main:'자연',category_sub:'자연명승',period:'',period_category:'',region:'강원도',address:'강원도 철원군 갈말읍 군탄리 산174-3',location_marker_type:'entrance',lat:38.1746,lng:127.3000,short_description:'유네스코 세계지질공원으로 지정된 한탄강의 현무암 주상절리 협곡을 따라 이어지는 3.6km 잔도. 수면에서 20~30m 절벽에 매달린 길에서 화산 용암이 빚은 기암 절벽과 에메랄드빛 강을 조망한다.',source_urls:['https://www.hantangeopark.kr/'],data_confidence:'high',tags:['유네스코','세계지질공원','주상절리','잔도','철원','현무암','협곡','강원']},
  {name:'동강',category_main:'자연',category_sub:'강/호수',period:'',period_category:'',region:'강원도',address:'강원도 영월군 영월읍 동강로',location_marker_type:'exact',lat:37.2100,lng:128.4500,short_description:'정선에서 발원해 영월까지 흐르는 51km의 비경 강. S자로 굽이치는 협곡과 기암절벽이 절경을 이루며 어라연 명승지가 유명하다. 래프팅과 트레킹으로 사랑받는 생태 보고다.',source_urls:['https://korean.visitkorea.or.kr/'],data_confidence:'medium',tags:['정선','영월','래프팅','어라연','협곡','생태하천','명승','강원']},
  {name:'섬진강',category_main:'자연',category_sub:'강/호수',period:'',period_category:'',region:'전라남도',address:'전라남도 하동군·광양시 일원',location_marker_type:'exact',lat:35.0800,lng:127.7600,short_description:'전북 진안에서 발원해 남해 광양만으로 흘러드는 212km의 강. 봄이면 매화와 벚꽃이 강변을 수놓아 꽃강으로 불린다. 전남·경남의 도계를 이루며 재첩과 은어로도 유명하다.',source_urls:['https://ko.wikipedia.org/wiki/%EC%84%AC%EC%A7%84%EA%B0%95'],data_confidence:'medium',tags:['매화','벚꽃','하동','광양','재첩','꽃강','전남']},
  {name:'우도',category_main:'자연',category_sub:'섬',period:'',period_category:'',region:'제주특별자치도',address:'제주특별자치도 제주시 우도면',location_marker_type:'exact',lat:33.5000,lng:126.9500,short_description:'성산항에서 배로 15분, 제주 최대 부속 섬. 에메랄드빛 홍조단괴 해빈(서빈백사)·검멀레 해변·우도봉 전망대 등 절경이 가득하다. 땅콩 아이스크림과 자전거 일주가 필수 코스다.',source_urls:['https://namu.wiki/w/%EC%9A%B0%EB%8F%84'],data_confidence:'high',tags:['성산항','홍조단괴','서빈백사','자전거','땅콩아이스크림','제주']},
  {name:'꽃지해변',category_main:'자연',category_sub:'바다/해변',period:'',period_category:'',region:'충청남도',address:'충청남도 태안군 안면읍 승언리 339-285',location_marker_type:'exact',lat:36.4460,lng:126.3700,short_description:'안면도 서해안의 너른 모래 해변. 할미바위·할아비바위 사이로 지는 낙조가 한국에서 가장 아름다운 서해 노을 명소 중 하나로 꼽힌다. 여름 피서와 가을 낙조로 사계절 여행객이 즐겨 찾는다.',source_urls:['https://korean.visitkorea.or.kr/'],data_confidence:'high',tags:['안면도','태안','낙조','할미바위','할아비바위','서해','충남']},
  {name:'금정산성',category_main:'역사',category_sub:'성곽/산성',period:'조선 후기 (1703년 축조)',period_category:'조선 후기',region:'부산광역시',address:'부산광역시 금정구 금성동 산96-1',location_marker_type:'entrance',lat:35.2542,lng:129.0250,short_description:'둘레 18.8km 국내 최대 규모의 조선시대 산성. 숙종 29년(1703) 왜구 방어를 위해 축조됐으며 사적 제215호. 낙동강 하구와 동래를 내려다보는 요충지에 동·서·남·북 4개 성문이 남아있다.',source_urls:['https://encykorea.aks.ac.kr/Article/E0007964'],data_confidence:'high',tags:['사적215호','조선후기','최대산성','숙종','왜구','부산','18.8km']},
  {name:'계족산성',category_main:'역사',category_sub:'성곽/산성',period:'삼국시대 (백제·신라 쟁패)',period_category:'삼국',region:'충청남도',address:'대전광역시 대덕구 장동 산84',location_marker_type:'entrance',lat:36.4210,lng:127.4550,short_description:'대전 계족산 정상부를 에워싼 삼국시대 테뫼식 석축 산성. 둘레 약 1km, 백제와 신라 쟁패의 흔적이 담긴 요충지 성곽이다. 계족산 황톳길 맨발 걷기로도 유명하다.',source_urls:['https://encykorea.aks.ac.kr/Article/E0014185'],data_confidence:'medium',tags:['삼국시대','백제','신라','테뫼식','황톳길','대전','맨발걷기']},
  {name:'위봉산성',category_main:'역사',category_sub:'성곽/산성',period:'조선 후기 (1675년 축조)',period_category:'조선 후기',region:'전라북도',address:'전라북도 완주군 소양면 대흥리',location_marker_type:'entrance',lat:35.8800,lng:127.2000,short_description:'숙종 원년(1675) 전란 대피를 위해 쌓은 조선 포곡식 산성으로 사적 제471호. 위봉폭포·위봉사와 함께 완주의 대표 역사 명소로 험준한 산세를 따라 이어지는 성벽이 위엄 있는 경관을 이룬다.',source_urls:['https://ko.wikipedia.org/wiki/%EC%99%84%EC%A3%BC_%EC%9C%84%EB%B4%89%EC%82%B0%EC%84%B1'],data_confidence:'medium',tags:['사적471호','조선후기','숙종','포곡식','위봉폭포','완주','전북']},
  {name:'고성공룡박물관',category_main:'역사',category_sub:'고인돌/선사유적',period:'선사시대 (약 1억 년 전)',period_category:'선사',region:'경상남도',address:'경상남도 고성군 하이면 자란만로 618',location_marker_type:'exact',lat:34.9480,lng:128.3130,short_description:'세계 3대 공룡 발자국 화석지 고성에 자리한 전문 공룡박물관. 중생대 공룡 화석과 복원 모형 등을 전시하며 야외에는 자란만 해안을 따라 실제 공룡 발자국 화석이 남아있다.',source_urls:['https://museum.goseong.go.kr/'],data_confidence:'high',tags:['공룡','화석','중생대','세계3대발자국','자란만','고성','경남']}
];

const natCatCode={'산':'MTN','바다/해변':'SEA','강/호수':'LKE','숲/공원':'FOR','자연명승':'SCN','섬':'ISL','계절 명소':'CSN','일출/일몰 명소':'SNS','성곽/산성':'SAN','고인돌/선사유적':'GID'};
const regionCode={'경상북도':'GB','제주특별자치도':'JJ','부산광역시':'BS','전라남도':'JN','경상남도':'GN','인천광역시':'IC','충청남도':'CN','강원도':'GW','충청북도':'CB','전라북도':'JB'};
const subCatMap={'산':'고택/서원/향교','바다/해변':'고택/서원/향교','강/호수':'고택/서원/향교','숲/공원':'고택/서원/향교','자연명승':'고택/서원/향교','섬':'고택/서원/향교','계절 명소':'고택/서원/향교','일출/일몰 명소':'고택/서원/향교','성곽/산성':'성곽/산성','고인돌/선사유적':'고인돌/선사유적'};

const existing=JSON.parse(fs.readFileSync(base+'data/heritage_all.json','utf8'));
const existingNames=new Set(existing.map(d=>d.name));
const counters={};
existing.forEach(d=>{const p=d.place_id.split('-');const k=p[1]+'-'+p[2];const n=parseInt(p[3]);if(!counters[k]||counters[k]<n)counters[k]=n;});

const newItems=raw.filter(d=>!existingNames.has(d.name)).map(d=>{
  const rc=regionCode[d.region]||'ETC';
  const cc=natCatCode[d.category_sub]||'ETC';
  const k=rc+'-'+cc;
  counters[k]=(counters[k]||0)+1;
  const placeId='GK-'+rc+'-'+cc+'-'+String(counters[k]).padStart(4,'0');
  return {...d,place_id:placeId,category_detail:d.short_description.split('.')[0],confidence:d.data_confidence==='high'?'high':'low',confidence_reason:'',needs_geocoding:false,
    status:{map_displayable:true,data_status:'complete',map_status:'published',content_status:'waiting',last_updated:now},
    content_link:{has_video:false,youtube_url:'',instagram_url:'',tiktok_url:'',xiaohongshu_url:'',video_status:'없음'}};
});

const merged=[...existing,...newItems];
fs.writeFileSync(base+'data/heritage_all.json',JSON.stringify(merged,null,2),'utf8');
const ready=merged.filter(d=>d.status.map_displayable&&d.lat&&d.lng);
fs.writeFileSync(base+'map/markers_ready.json',JSON.stringify({total:ready.length,markers:ready},null,2),'utf8');
const log=JSON.parse(fs.readFileSync(base+'logs/automation_log.json','utf8'));
log.runs.push({time:now,mode:'B',new_collected:newItems.length,total:merged.length});
fs.writeFileSync(base+'logs/automation_log.json',JSON.stringify(log,null,2),'utf8');

console.log('추가: '+newItems.length+'개 / 누적: '+merged.length+'개 / 게시: '+merged.filter(d=>d.status.map_status==='published').length+'개');
console.log('1차 목표: '+(merged.length/300*100).toFixed(1)+'% / 1000: '+(merged.length/1000*100).toFixed(1)+'%');
newItems.forEach(d=>console.log('  + ['+d.place_id+'] '+d.name));
