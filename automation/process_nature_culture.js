const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const now = new Date().toISOString().slice(0,19);

// ── 자연 + 역사 → heritage_all.json ──
const heritageNew = [
  // 자연
  {name:'설악산',category_main:'자연',category_sub:'산',category:'산',period:'',period_category:'',region:'강원도',address:'강원특별자치도 속초시 설악산로 1167',location_marker_type:'entrance',lat:38.1196,lng:128.4656,short_description:'대한민국 대표 명산으로 해발 1,708m 대청봉을 중심으로 공룡능선·울산바위·비선대 등 기암절벽과 계곡이 어우러진 국립공원. 사계절 절경이 뛰어나며 천연기념물과 희귀 식물이 서식한다.',source_urls:['https://www.knps.or.kr/'],data_confidence:'high',tags:['국립공원','설악산','대청봉','울산바위','공룡능선','단풍','강원','등산']},
  {name:'지리산',category_main:'자연',category_sub:'산',category:'산',period:'',period_category:'',region:'전라남도',address:'전라남도 구례군 마산면 화엄사로 539 일원',location_marker_type:'entrance',lat:35.3372,lng:127.7302,short_description:'해발 1,915m 천왕봉을 최고봉으로 하는 우리나라 최초의 국립공원. 3개 도·5개 시군에 걸친 광활한 면적에 노고단·반야봉·화엄사 등 명소와 반달가슴곰 서식지로 유명하다.',source_urls:['https://www.knps.or.kr/'],data_confidence:'high',tags:['국립공원','지리산','천왕봉','노고단','반달가슴곰','화엄사','둘레길','등산']},
  {name:'한라산',category_main:'자연',category_sub:'산',category:'산',period:'',period_category:'',region:'제주특별자치도',address:'제주특별자치도 제주시 아라동 산220',location_marker_type:'entrance',lat:33.3617,lng:126.5292,short_description:'해발 1,950m 대한민국 최고봉으로 제주도 중심의 순상화산. 유네스코 세계자연유산으로 등재되었으며 백록담 화구호와 고산 식물군락, 오름 군락이 장관을 이룬다.',source_urls:['https://www.knps.or.kr/'],data_confidence:'high',tags:['국립공원','한라산','백록담','유네스코','세계자연유산','제주','최고봉','등산']},
  {name:'오대산',category_main:'자연',category_sub:'산',category:'산',period:'',period_category:'',region:'강원도',address:'강원특별자치도 평창군 진부면 오대산로 374-8 일원',location_marker_type:'entrance',lat:37.7956,lng:128.5428,short_description:'해발 1,563m 비로봉을 중심으로 다섯 봉우리가 연꽃처럼 펼쳐진 강원 명산. 월정사와 상원사를 품은 불교 성지이며 울창한 전나무 숲길과 선재길이 사계절 탐방객을 맞이한다.',source_urls:['https://www.knps.or.kr/'],data_confidence:'high',tags:['국립공원','오대산','월정사','전나무숲','비로봉','선재길','강원','등산']},
  {name:'태백산',category_main:'자연',category_sub:'산',category:'산',period:'',period_category:'',region:'강원도',address:'강원특별자치도 태백시 소도동 산 1-1',location_marker_type:'entrance',lat:37.0958,lng:128.9167,short_description:'해발 1,567m로 한강·낙동강·오십천의 발원지인 민족의 영산. 국립공원으로 지정되어 있으며 천제단과 주목군락지가 유명하고 겨울철 설경과 눈꽃 축제로 많은 탐방객이 찾는다.',source_urls:['https://www.knps.or.kr/'],data_confidence:'high',tags:['국립공원','태백산','천제단','주목','눈꽃','설경','강원','등산']},
  {name:'정동진',category_main:'자연',category_sub:'일출/일몰 명소',category:'일출/일몰 명소',period:'',period_category:'',region:'강원도',address:'강원특별자치도 강릉시 강동면 정동진리 50-1',location_marker_type:'exact',lat:37.6860,lng:129.0600,short_description:'세계에서 바다와 가장 가까운 기차역으로 기네스북에 등재된 일출 명소. 매년 새해 해돋이 행사에 수만 명이 몰리며 드라마 모래시계 촬영지로도 유명해 연중 관광객의 발길이 끊이지 않는다.',source_urls:['https://korean.visitkorea.or.kr/'],data_confidence:'high',tags:['일출','기차역','강릉','강원','해돋이','새해','모래시계','동해']},
  {name:'간절곶',category_main:'자연',category_sub:'일출/일몰 명소',category:'일출/일몰 명소',period:'',period_category:'',region:'경상남도',address:'울산광역시 울주군 서생면 대송리 967-1',location_marker_type:'exact',lat:35.3611,lng:129.3817,short_description:'한반도 육지에서 새해 일출이 가장 먼저 보이는 최동단 해안 절경지. 정동진보다 1분 빠른 일출로 유명하며 대형 소망우체통과 아름다운 등대가 랜드마크로 자리잡고 있다.',source_urls:['https://korean.visitkorea.or.kr/'],data_confidence:'high',tags:['일출','최동단','한반도','울산','소망우체통','해돋이','동해']},
  {name:'호미곶',category_main:'자연',category_sub:'일출/일몰 명소',category:'일출/일몰 명소',period:'',period_category:'',region:'경상북도',address:'경상북도 포항시 남구 호미곶면 대보리 221',location_marker_type:'exact',lat:36.0775,lng:129.5681,short_description:'한반도 지형에서 호랑이 꼬리에 해당하는 동쪽 끝 해안 명소. 바다에서 솟아오르는 상생의 손 조형물과 국립등대박물관으로 유명하며 매년 1월 1일 해맞이 축제가 열린다.',source_urls:['https://korean.visitkorea.or.kr/'],data_confidence:'high',tags:['일출','포항','경북','상생의손','해맞이','등대박물관','호랑이꼬리','동해']},
  {name:'협재해변',category_main:'자연',category_sub:'바다/해변',category:'바다/해변',period:'',period_category:'',region:'제주특별자치도',address:'제주특별자치도 제주시 한림읍 협재리 2497-1',location_marker_type:'exact',lat:33.3942,lng:126.2392,short_description:'에메랄드빛 투명한 바다와 새하얀 백사장으로 제주에서 가장 아름다운 해변 중 하나. 앞바다에 떠 있는 비양도 풍경이 그림 같으며 해수욕과 스노클링을 즐기기에 최적인 서해안 명소다.',source_urls:['https://korean.visitkorea.or.kr/'],data_confidence:'high',tags:['해변','제주','협재','에메랄드','비양도','스노클링','백사장','한림']},
  {name:'해운대',category_main:'자연',category_sub:'바다/해변',category:'바다/해변',period:'',period_category:'',region:'부산광역시',address:'부산광역시 해운대구 해운대해변로 264',location_marker_type:'exact',lat:35.1587,lng:129.1603,short_description:'대한민국 최대 규모의 해수욕장으로 1.8km 백사장에 여름 성수기 100만 명 이상이 찾는 부산의 상징. 동백섬·달맞이고개·마린시티 야경과 어우러져 사계절 활기찬 해안 문화를 자랑한다.',source_urls:['https://korean.visitkorea.or.kr/'],data_confidence:'high',tags:['해변','부산','해운대','백사장','해수욕','동백섬','야경','마린시티']},
  {name:'경포해변',category_main:'자연',category_sub:'바다/해변',category:'바다/해변',period:'',period_category:'',region:'강원도',address:'강원특별자치도 강릉시 창해로 307',location_marker_type:'exact',lat:37.8050,lng:128.9100,short_description:'강릉을 대표하는 동해안 해변으로 약 6km의 백사장이 펼쳐진다. 인근 경포호와 아름다운 자연경관을 이루며 관동팔경의 하나인 경포대에서 조망하는 바다 풍경이 일품이다.',source_urls:['https://korean.visitkorea.or.kr/'],data_confidence:'high',tags:['해변','강릉','강원','경포호','경포대','동해','관동팔경','백사장']},
  {name:'정방폭포',category_main:'자연',category_sub:'폭포',category:'폭포',period:'',period_category:'',region:'제주특별자치도',address:'제주특별자치도 서귀포시 칠십리로214번길 37',location_marker_type:'exact',lat:33.2458,lng:126.5681,short_description:'아시아에서 유일하게 폭포수가 바다로 직접 떨어지는 해안 폭포. 높이 23m의 장대한 물줄기가 서귀포 앞바다로 쏟아지는 장관은 제주 3대 폭포 중 가장 장엄한 풍경으로 꼽힌다.',source_urls:['https://korean.visitkorea.or.kr/'],data_confidence:'high',tags:['폭포','제주','서귀포','해안폭포','바다폭포','3대폭포','아시아유일']},
  {name:'천지연폭포',category_main:'자연',category_sub:'폭포',category:'폭포',period:'',period_category:'',region:'제주특별자치도',address:'제주특별자치도 서귀포시 천지동 667-7',location_marker_type:'exact',lat:33.2486,lng:126.5581,short_description:'높이 22m의 폭포가 깊이 20m의 담소에 쏟아지는 서귀포 대표 명소. 천연기념물 천연보호구역으로 지정되어 있으며 무태장어가 서식하는 생태적으로도 귀중한 공간이다.',source_urls:['https://korean.visitkorea.or.kr/'],data_confidence:'high',tags:['폭포','제주','서귀포','천연기념물','무태장어','3대폭포','난대식물']},
  {name:'환선굴',category_main:'자연',category_sub:'동굴',category:'동굴',period:'',period_category:'',region:'강원도',address:'강원특별자치도 삼척시 신기면 환선로 800',location_marker_type:'entrance',lat:37.2061,lng:129.1017,short_description:'국내 최대 규모의 석회암 동굴로 총 길이 6.2km 중 1.6km가 공개되어 있다. 약 5억 년 전에 형성된 동굴로 석순·종유석·석주 등 다양한 동굴 생성물이 있는 천연기념물이다.',source_urls:['https://korean.visitkorea.or.kr/'],data_confidence:'high',tags:['동굴','삼척','강원','석회암','천연기념물','종유석','석순','국내최대']},
  {name:'고씨동굴',category_main:'자연',category_sub:'동굴',category:'동굴',period:'',period_category:'',region:'강원도',address:'강원특별자치도 영월군 김삿갓면 영월동로 1117',location_marker_type:'entrance',lat:37.1667,lng:128.5167,short_description:'임진왜란 당시 고씨 일가가 피난 생활을 했다는 전설이 깃든 석회암 동굴. 총 길이 3.5km 중 1.2km가 개방되어 있으며 동굴 내 지하 하천이 흐르는 신비로운 공간이다.',source_urls:['https://korean.visitkorea.or.kr/'],data_confidence:'high',tags:['동굴','영월','강원','석회암','천연기념물','지하하천','종유석']},
  {name:'순천만',category_main:'자연',category_sub:'자연명승',category:'자연명승',period:'',period_category:'',region:'전라남도',address:'전라남도 순천시 순천만길 513-25',location_marker_type:'exact',lat:34.8981,lng:127.5069,short_description:'동아시아 최대의 갈대 군락지와 드넓은 갯벌이 펼쳐진 국제 생태 보전 지역. 람사르협약 등록 습지로 흑두루미 등 희귀 철새 수만 마리가 도래하며 S자형 수로의 일몰 풍경이 장관이다.',source_urls:['https://korean.visitkorea.or.kr/'],data_confidence:'high',tags:['갯벌','순천','전남','람사르','갈대밭','흑두루미','철새','습지']},
  {name:'변산반도',category_main:'자연',category_sub:'자연명승',category:'자연명승',period:'',period_category:'',region:'전라북도',address:'전라북도 부안군 변산면 일원',location_marker_type:'entrance',lat:35.6544,lng:126.5400,short_description:'내륙 산지와 해안이 함께 있는 대한민국 유일의 반도형 국립공원. 내변산의 울창한 숲과 직소폭포, 외변산의 채석강·적벽강 해안 절경이 어우러진다.',source_urls:['https://www.knps.or.kr/'],data_confidence:'high',tags:['국립공원','부안','전북','채석강','직소폭포','해안절경','반도형','변산']},
  {name:'주왕산',category_main:'자연',category_sub:'자연명승',category:'자연명승',period:'',period_category:'',region:'경상북도',address:'경상북도 청송군 주왕산면 공원길 169-7',location_marker_type:'entrance',lat:36.3950,lng:129.1522,short_description:'기암괴석과 깊은 계곡이 만들어내는 신비로운 경관의 국립공원. 주왕이 숨었다는 전설이 깃든 기암절벽과 3개의 폭포로 유명하며 청송사과와 함께 경북 대표 관광지로 꼽힌다.',source_urls:['https://www.knps.or.kr/'],data_confidence:'high',tags:['국립공원','청송','경북','기암절벽','폭포','주왕전설','계곡']},
  {name:'월출산',category_main:'자연',category_sub:'자연명승',category:'자연명승',period:'',period_category:'',region:'전라남도',address:'전라남도 영암군 군서면 월출산길 200',location_marker_type:'entrance',lat:34.7742,lng:126.7056,short_description:'호남의 소금강으로 불리는 기암괴석의 명산으로 해발 809m. 천황봉에서 바라보는 남도 들판과 다도해 풍경이 장관이며 구름다리와 도갑사 등 문화유산이 자연과 조화를 이룬다.',source_urls:['https://www.knps.or.kr/'],data_confidence:'high',tags:['국립공원','영암','전남','기암괴석','구름다리','천황봉','호남소금강','등산']},
  {name:'청산도',category_main:'자연',category_sub:'섬',category:'섬',period:'',period_category:'',region:'전라남도',address:'전라남도 완도군 청산면 청산리',location_marker_type:'exact',lat:34.1781,lng:126.8803,short_description:'완도에서 남쪽으로 19.2km 떨어진 섬으로 아시아 최초 슬로시티에 선정된 느림의 섬. 구들장 논·청보리밭·범바위 등 수려한 자연과 전통 마을이 어우러진 드라마 봄의 왈츠 촬영지다.',source_urls:['https://korean.visitkorea.or.kr/'],data_confidence:'high',tags:['섬','완도','전남','슬로시티','청보리','구들장논','느림여행']},
  // 역사
  {name:'공주 석장리 구석기 유적',category_main:'역사',category_sub:'고인돌/선사유적',category:'생활유적',period:'선사시대 (약 30만~5만 년 전)',period_category:'선사',region:'충청남도',address:'충청남도 공주시 석장리동 석장리로 990',location_marker_type:'exact',lat:36.4606,lng:127.1122,short_description:'1964년 발굴된 한국 최초의 구석기 유적지로 한반도 구석기 문화 연구의 출발점. 금강변에 위치하며 뗀석기·동물 뼈 화석 등이 출토됐고 인근 석장리박물관에서 구석기 생활상을 전시한다.',source_urls:['https://heritage.go.kr/heri/cul/culSelectDetail.do?ccbaCpno=1333300150000'],data_confidence:'high',tags:['구석기','선사유적','공주','충남','금강','뗀석기','한국최초','석장리박물관']},
  {name:'김해 대성동 고분군',category_main:'역사',category_sub:'고인돌/선사유적',category:'고분',period:'삼국시대 금관가야 (1~5세기)',period_category:'삼국',region:'경상남도',address:'경상남도 김해시 대성동 317',location_marker_type:'exact',lat:35.2306,lng:128.8847,short_description:'금관가야 왕들의 무덤 군집으로 추정되는 사적지. 1990년 발굴에서 청동·철기 유물과 순장 흔적이 발견되어 가야 왕권의 실체를 증명했으며 인근 대성동고분박물관에서 출토 유물을 전시한다.',source_urls:['https://heritage.go.kr/heri/cul/culSelectDetail.do?ccbaCpno=1333101410000'],data_confidence:'high',tags:['가야','금관가야','고분','김해','경남','순장','철기','사적']}
];

// ── 문화/체험 → experiences.json ──
const experienceNew = [
  {name:'속초 아바이마을 순대골목',category_sub:'지역 먹거리',region_sub:'강원도',region_main:'GW',address:'강원특별자치도 속초시 청호동 일원',lat:38.2072,lng:128.5925,price:'무료 입장 (음식 별도)',duration:'1~2시간',reservation_required:false,target_user:['모든연령','미식여행'],short_description:'한국전쟁 이후 함경도 피란민이 정착하며 형성된 실향민 마을. 갯배를 타고 건너가야 하는 독특한 접근 방식과 함경도식 오징어순대·아바이순대가 유명하며 드라마 가을동화 촬영지다.',source_urls:['https://korean.visitkorea.or.kr/'],data_confidence:'high',related_heritage_ids:[],tags:['속초','강원','실향민','아바이순대','오징어순대','갯배','함경도']},
  {name:'부산 영도다리',category_sub:'로컬 여행 코스',region_sub:'부산광역시',region_main:'BS',address:'부산광역시 중구 대교동 1가~영도구 대교동 1가',lat:35.0975,lng:129.0361,price:'무료',duration:'1시간',reservation_required:false,target_user:['모든연령','역사여행'],short_description:'1934년 개통된 한국 최초의 도개교로 한국전쟁 피란민의 애환이 깃든 역사의 현장. 영도다리에서 만나자는 말이 생겨날 만큼 이산가족 상봉의 상징이며 2013년 복원 후 하루 한 번 다리를 든다.',source_urls:['https://korean.visitkorea.or.kr/'],data_confidence:'high',related_heritage_ids:[],tags:['부산','도개교','근대역사','피란민','영도','한국전쟁']},
  {name:'인사동 쌈지길',category_sub:'로컬 여행 코스',region_sub:'서울특별시',region_main:'SE',address:'서울특별시 종로구 인사동길 44',lat:37.5741,lng:126.9859,price:'무료 입장',duration:'1~2시간',reservation_required:false,target_user:['모든연령','외국인','커플'],short_description:'인사동 문화 거리 한복판에 자리한 나선형 쇼핑 공간. 전통 찻집·갤러리·공방 등 200여 개의 개성 있는 상점이 독특한 구조물 속에 들어서 서울 대표 문화 명소가 됐다.',source_urls:['https://korean.visitkorea.or.kr/'],data_confidence:'high',related_heritage_ids:['GK-SE-DOK-0010'],tags:['인사동','서울','종로','공예','전통문화','갤러리','쇼핑']}
];

// ── 자연 category_sub → color/icon 매핑 (기존 index.html 호환) ──
const subCatMap = {
  '산':'고택/서원/향교','바다/해변':'고택/서원/향교','폭포':'고택/서원/향교',
  '동굴':'고택/서원/향교','섬':'고택/서원/향교','자연명승':'고택/서원/향교',
  '일출/일몰 명소':'고택/서원/향교','계절 명소':'고택/서원/향교',
  '고인돌/선사유적':'고인돌/선사유적'
};

// heritage_all.json 업데이트
const existing = JSON.parse(fs.readFileSync(base+'data/heritage_all.json','utf8'));
const existingNames = new Set(existing.map(d=>d.name));
const counters = {};
existing.forEach(d=>{const p=d.place_id.split('-');const k=p[1]+'-'+p[2];const n=parseInt(p[3]);if(!counters[k]||counters[k]<n)counters[k]=n;});

const regionCode={'강원도':'GW','전라남도':'JN','제주특별자치도':'JJ','경상남도':'GN','경상북도':'GB','부산광역시':'BS','전라북도':'JB','충청남도':'CN'};
const natCatCode={'산':'MTN','바다/해변':'SEA','일출/일몰 명소':'SNS','폭포':'WAT','동굴':'CAV','자연명승':'SCN','섬':'ISL','고인돌/선사유적':'GID','고분':'GOB'};

const newHeritage = heritageNew.filter(d=>!existingNames.has(d.name)).map(d=>{
  const rc = regionCode[d.region]||'ETC';
  const cc = natCatCode[d.category_sub]||natCatCode[d.category]||'ETC';
  const k = rc+'-'+cc;
  counters[k]=(counters[k]||0)+1;
  const placeId='GK-'+rc+'-'+cc+'-'+String(counters[k]).padStart(4,'0');
  return {
    ...d, place_id:placeId,
    category_detail:d.short_description.split('.')[0],
    confidence:d.data_confidence==='high'?'high':'low',
    confidence_reason:'',
    needs_geocoding:false,
    status:{map_displayable:true,data_status:'complete',map_status:'published',content_status:'waiting',last_updated:now},
    content_link:{has_video:false,youtube_url:'',instagram_url:'',tiktok_url:'',xiaohongshu_url:'',video_status:'없음'}
  };
});

const merged = [...existing,...newHeritage];
fs.writeFileSync(base+'data/heritage_all.json',JSON.stringify(merged,null,2),'utf8');
const ready = merged.filter(d=>d.status.map_displayable&&d.lat&&d.lng);
fs.writeFileSync(base+'map/markers_ready.json',JSON.stringify({total:ready.length,markers:ready},null,2),'utf8');

// experiences.json 업데이트
const lib = JSON.parse(fs.readFileSync(base+'data/experiences.json','utf8'));
const expNames = new Set(lib.experiences.map(e=>e.name));
const expCounters = {};
lib.experiences.forEach(e=>{const parts=e.experience_id.split('-');const k=parts[1]+'-'+parts[2];const n=parseInt(parts[3]);if(!expCounters[k]||expCounters[k]<n)expCounters[k]=n;});
const expCatCode={'지역 먹거리':'FUD','로컬 여행 코스':'LCL'};

const newExp = experienceNew.filter(d=>!expNames.has(d.name)).map(d=>{
  const rc = d.region_main||'ETC';
  const cc = expCatCode[d.category_sub]||'EXP';
  const k = rc+'-'+cc;
  expCounters[k]=(expCounters[k]||0)+1;
  const expId='EX-'+rc+'-'+cc+'-'+String(expCounters[k]).padStart(3,'0');
  return {
    experience_id:expId,name:d.name,category_main:'문화/체험',category_sub:d.category_sub,
    category_detail:d.short_description.split('.')[0],region_main:rc,region_sub:d.region_sub,
    address:d.address,lat:d.lat,lng:d.lng,price:d.price,duration:d.duration,
    reservation_required:d.reservation_required,target_user:d.target_user,
    nearby_places:[],related_heritage_ids:d.related_heritage_ids||[],
    short_description:d.short_description,source_urls:d.source_urls,
    data_confidence:d.data_confidence,tags:d.tags,
    tour_status:'candidate',shorts_status:'waiting',
    operation_status:'needs_check',operating_hours:'',phone:'',
    website:d.source_urls?.[0]||'',reservation_link:'',
    price_confirmed:d.price,price_last_checked:'',last_verified:'',change_log:[],
    created_at:now
  };
});
lib.experiences.push(...newExp);
lib.total=lib.experiences.length;
lib.last_updated=now;
fs.writeFileSync(base+'data/experiences.json',JSON.stringify(lib,null,2),'utf8');

console.log('=== 처리 완료 ===');
console.log('[자연+역사] heritage_all.json 추가: '+newHeritage.length+'개');
const nat = newHeritage.filter(d=>d.category_main==='자연');
const hist = newHeritage.filter(d=>d.category_main==='역사');
console.log('  자연: '+nat.length+'개');
console.log('  역사: '+hist.length+'개');
console.log('[문화/체험] experiences.json 추가: '+newExp.length+'개');
console.log('');
console.log('누적 heritage: '+merged.length+'개 / 지도 게시: '+merged.filter(d=>d.status.map_status==='published').length+'개');
console.log('누적 experiences: '+lib.total+'개');
console.log('');
console.log('[자연 마커 목록]');
nat.forEach(d=>console.log('  ['+d.place_id+'] '+d.name+' ('+d.category_sub+')'));
console.log('[역사 추가]');
hist.forEach(d=>console.log('  ['+d.place_id+'] '+d.name));
console.log('[체험 추가]');
newExp.forEach(d=>console.log('  ['+d.experience_id+'] '+d.name));
