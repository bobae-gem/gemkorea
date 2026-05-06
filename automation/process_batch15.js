const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const now = new Date().toISOString().slice(0,19);

const raw = [
  {name:'북한강',category_main:'자연',category_sub:'강/호수',period:'',period_category:'',region:'경기도',address:'경기도 가평군 북한강로 일대',location_marker_type:'exact',lat:37.7956,lng:127.5097,short_description:'한강의 제1지류로 강원도에서 발원하여 경기 가평·양평을 거쳐 흐르는 강. 청평호·의암호 등 수려한 호반 풍경과 수도권 근교 드라이브 코스로 사랑받는다.',source_urls:['https://ko.wikipedia.org/wiki/%EB%B6%81%ED%95%9C%EA%B0%95'],data_confidence:'high',tags:['북한강','한강지류','가평','드라이브','호반','경기']},
  {name:'임진강',category_main:'자연',category_sub:'강/호수',period:'',period_category:'',region:'경기도',address:'경기도 파주시 문산읍 임진강변',location_marker_type:'exact',lat:37.9028,lng:126.7736,short_description:'북한에서 발원해 경기 북부를 흐르는 강. 분단의 역사를 품은 자연 풍광으로 유명하며 율곡습지공원·임진나루 등 생태·역사 탐방지가 인접해 있다.',source_urls:['https://ko.wikipedia.org/wiki/%EC%9E%84%EC%A7%84%EA%B0%95'],data_confidence:'high',tags:['임진강','파주','분단','생태','습지','경기']},
  {name:'황강',category_main:'자연',category_sub:'강/호수',period:'',period_category:'',region:'경상남도',address:'경상남도 합천군 황강변',location_marker_type:'exact',lat:35.5667,lng:128.1647,short_description:'낙동강의 지류로 경남 거창·합천을 흐르는 강. 황강 래프팅과 수변 캠핑으로 유명하며 황강변 억새밭과 황매산으로 이어지는 드라이브 코스가 아름답다.',source_urls:['https://ko.wikipedia.org/wiki/%ED%99%A9%EA%B0%95'],data_confidence:'high',tags:['황강','합천','래프팅','낙동강지류','캠핑','경남']},
  {name:'쇠소깍',category_main:'자연',category_sub:'강/호수',period:'',period_category:'',region:'제주특별자치도',address:'제주특별자치도 서귀포시 쇠소깍로 104',location_marker_type:'exact',lat:33.2563,lng:126.6181,short_description:'효돈천 하류에 형성된 독특한 협곡 하구. 민물과 바닷물이 만나는 신비로운 풍경이 펼쳐지며 투명카약·테우 체험으로 제주 자연의 정수를 만끽할 수 있다.',source_urls:['https://www.visitjeju.net/'],data_confidence:'high',tags:['쇠소깍','제주','협곡','카약','하구','효돈천','서귀포']},
  {name:'제주 오름군락',category_main:'자연',category_sub:'자연명승',period:'',period_category:'',region:'제주특별자치도',address:'제주특별자치도 제주시 한라산 주변 일대',location_marker_type:'exact',lat:33.3617,lng:126.5292,short_description:'한라산 주변에 360여 개 이상 분포하는 소화산체 오름 군락. 새별오름·용눈이오름·다랑쉬오름 등이 대표적이며 일출·억새·트레킹 명소로 전국 여행자를 불러 모은다.',source_urls:['https://ko.wikipedia.org/wiki/%EC%98%A4%EB%A6%84'],data_confidence:'high',tags:['오름','제주','한라산','소화산','억새','트레킹','일출']},
  {name:'팔영산',category_main:'자연',category_sub:'자연명승',period:'',period_category:'',region:'전라남도',address:'전라남도 고흥군 점암면 성기리',location_marker_type:'entrance',lat:34.6103,lng:127.4283,short_description:'고흥반도에 솟은 해발 608m의 돌산. 여덟 개의 기암 봉우리가 일렬로 이어진 능선이 장관이며 국립공원 팔영산 지구로 지정된 전남 대표 자연명승이다.',source_urls:['https://www.knps.or.kr/'],data_confidence:'high',tags:['팔영산','고흥','기암','국립공원','능선','전남','돌산']},
  {name:'가거도',category_main:'자연',category_sub:'섬',period:'',period_category:'',region:'전라남도',address:'전라남도 신안군 흑산면 가거도리',location_marker_type:'exact',lat:34.0786,lng:125.1197,short_description:'국토 최서남단에 위치한 한국에서 가장 외딴 섬. 원시 자연림과 깎아지른 해안절벽이 보존돼 있으며 철새 이동 경로이자 낚시·트레킹 마니아의 성지다.',source_urls:['https://ko.wikipedia.org/wiki/%EA%B0%80%EA%B1%B0%EB%8F%84'],data_confidence:'high',tags:['가거도','신안','최서남단','절벽','철새','낚시','전남']},
  {name:'흑산도',category_main:'자연',category_sub:'섬',period:'',period_category:'',region:'전라남도',address:'전라남도 신안군 흑산면',location_marker_type:'exact',lat:34.6851,lng:125.4347,short_description:'전남 신안 다도해의 원시 자연을 간직한 섬. 검은 산과 투명한 바다가 어우러지며 다산 정약전이 유배 중 자산어보를 저술한 역사의 섬으로도 유명하다.',source_urls:['https://ko.wikipedia.org/wiki/%ED%9D%91%EC%82%B0%EB%8F%84'],data_confidence:'high',tags:['흑산도','신안','자산어보','정약전','다도해','낚시','전남']},
  {name:'홍도',category_main:'자연',category_sub:'섬',period:'',period_category:'',region:'전라남도',address:'전라남도 신안군 흑산면 홍도리',location_marker_type:'exact',lat:34.6876,lng:125.1872,short_description:'천연기념물 170호로 지정된 다도해 최고의 비경. 홍갈색 섬 전체가 기암괴석과 원시림으로 뒤덮여 있으며 유람선으로 33경을 감상하는 코스가 인기다.',source_urls:['https://ko.wikipedia.org/wiki/%ED%99%8D%EB%8F%84_(%EC%A0%84%EB%9D%BC%EB%82%A8%EB%8F%84)'],data_confidence:'high',tags:['홍도','신안','천연기념물','기암','다도해','유람선','전남']},
  {name:'주전해변',category_main:'자연',category_sub:'바다/해변',period:'',period_category:'',region:'경상남도',address:'울산광역시 동구 주전동',location_marker_type:'exact',lat:35.5723,lng:129.4521,short_description:'울산 동구 해안의 몽돌 해변. 검은 자갈이 파도와 부딪혀 내는 청아한 소리가 특징이며 봉대산 해안 드라이브와 함께 즐기기 좋은 동해의 숨은 명소다.',source_urls:['https://korean.visitkorea.or.kr/'],data_confidence:'high',tags:['주전해변','울산','몽돌','동해','드라이브','동구']},
  {name:'영일대해수욕장',category_main:'자연',category_sub:'바다/해변',period:'',period_category:'',region:'경상북도',address:'경상북도 포항시 북구 항구로 201',location_marker_type:'exact',lat:36.0588,lng:129.3656,short_description:'포항 시내에 인접한 동해 대표 해수욕장. 영일대 해상누각과 야경이 아름다우며 포항운하·죽도시장 등 주변 관광지와 연계해 즐길 수 있는 포항 관광의 거점이다.',source_urls:['https://korean.visitkorea.or.kr/'],data_confidence:'high',tags:['영일대','포항','해수욕장','동해','야경','해상누각','경북']},
  {name:'안목해변',category_main:'자연',category_sub:'바다/해변',period:'',period_category:'',region:'강원도',address:'강원특별자치도 강릉시 창해로 307',location_marker_type:'exact',lat:37.7828,lng:128.9481,short_description:'강릉 커피거리로 유명한 해변. 동해를 바라보며 커피를 즐길 수 있는 카페들이 늘어서 있으며 일출 명소로도 손꼽힌다. 한국 커피 문화의 상징적인 장소다.',source_urls:['https://korean.visitkorea.or.kr/'],data_confidence:'high',tags:['안목해변','강릉','커피거리','동해','일출','카페','강원']},
  {name:'송지호',category_main:'자연',category_sub:'강/호수',period:'',period_category:'',region:'강원도',address:'강원특별자치도 고성군 죽왕면 오봉리',location_marker_type:'exact',lat:38.2893,lng:128.5763,short_description:'강원 고성의 자연 석호. 동해 바다와 인접해 겨울 철새 도래지로 유명하며 둘레길 산책과 투명카누 체험이 인기다. 인근 송지호해변과 함께 사계절 여행지로 각광받는다.',source_urls:['https://ko.wikipedia.org/wiki/%EC%86%A1%EC%A7%80%ED%98%B8'],data_confidence:'high',tags:['송지호','고성','석호','철새','카누','강원','동해']},
  {name:'내린천',category_main:'자연',category_sub:'강/호수',period:'',period_category:'',region:'강원도',address:'강원특별자치도 인제군 인제읍 내린천로',location_marker_type:'exact',lat:38.0686,lng:128.1713,short_description:'강원 인제를 흐르는 북한강 상류의 지류. 급류와 여울이 발달해 래프팅 성지로 유명하며 수달·열목어 등 희귀 생물이 서식하는 생태보호구역이다.',source_urls:['https://ko.wikipedia.org/wiki/%EB%82%B4%EB%A6%B0%EC%B2%9C'],data_confidence:'high',tags:['내린천','인제','래프팅','강원','생태','북한강','수달']},
  // 역사
  {name:'밀양 영남루·아랑각',category_main:'역사',category_sub:'생활유적',period:'고려~조선 (국보 영남루)',period_category:'고려',region:'경상남도',address:'경상남도 밀양시 중앙로 324',location_marker_type:'exact',lat:35.4916,lng:128.7486,short_description:'밀양강 절벽 위의 조선시대 누각 영남루와 아랑 설화의 무대 아랑각. 밀양아리랑의 정서가 깃든 민속 문화의 중심지로 매년 아리랑 축제가 열린다.',source_urls:['https://www.miryang.go.kr/'],data_confidence:'high',tags:['밀양','영남루','아랑','아리랑','누각','민속','경남','국보']},
  {name:'경산 자인단오제',category_main:'역사',category_sub:'생활유적',period:'조선 전기 (한장군 전설)',period_category:'조선 전기',region:'경상북도',address:'경상북도 경산시 자인면 단북리',location_marker_type:'exact',lat:35.8094,lng:128.8046,short_description:'국가무형문화재로 지정된 자인단오제의 고장. 신라 화랑 한장군의 왜구 격퇴를 기리는 여원무·계정들놀이 등 전통 민속행사가 매년 단오에 재현된다.',source_urls:['https://ko.wikipedia.org/wiki/%EC%9E%90%EC%9D%B8%EB%8B%A8%EC%98%A4%EC%A0%9C'],data_confidence:'high',tags:['자인단오','경산','무형문화재','한장군','여원무','민속','경북']},
  {name:'만해 한용운 생가지',category_main:'역사',category_sub:'독립운동/근현대',period:'근대 (한용운 1879~1944)',period_category:'근대',region:'충청남도',address:'충청남도 홍성군 결성면 만해로 318',location_marker_type:'exact',lat:36.5038,lng:126.5876,short_description:'3·1운동 민족대표 33인이자 시인 한용운이 태어난 생가. 님의 침묵 등 저항 문학을 남긴 독립운동가의 정신을 기리는 기념관과 사당이 조성되어 있다.',source_urls:['https://ko.wikipedia.org/wiki/%ED%95%9C%EC%9A%A9%EC%9A%B4'],data_confidence:'high',tags:['한용운','홍성','독립운동','3.1운동','시인','생가','충남']},
  {name:'정읍 동학혁명기념관',category_main:'역사',category_sub:'독립운동/근현대',period:'근대 (1894년 동학농민혁명)',period_category:'근대',region:'전라북도',address:'전라북도 정읍시 덕천면 동학로 742',location_marker_type:'exact',lat:35.5651,lng:126.8437,short_description:'1894년 동학농민혁명의 발원지 황토현 전적지에 조성된 기념관. 농민군 최초 대승의 역사 현장으로 동학혁명 정신을 기리는 전시·체험 공간이 마련되어 있다.',source_urls:['https://www.jeongup.go.kr/'],data_confidence:'high',tags:['동학혁명','정읍','황토현','농민운동','전봉준','역사','전북']}
];

const natCatCode={'강/호수':'LKE','자연명승':'SCN','섬':'ISL','바다/해변':'SEA','생활유적':'SAE','독립운동/근현대':'DOK'};
const regionCode={'경기도':'GG','경상남도':'GN','제주특별자치도':'JJ','전라남도':'JN','경상북도':'GB','강원도':'GW','충청남도':'CN','전라북도':'JB'};

const existing=JSON.parse(fs.readFileSync(base+'data/heritage_all.json','utf8'));
const existingNames=new Set(existing.map(d=>d.name));
const counters={};
existing.forEach(d=>{if(!d.place_id)return;const p=d.place_id.split('-');if(p.length<4)return;const k=p[1]+'-'+p[2];const n=parseInt(p[3]);if(!counters[k]||counters[k]<n)counters[k]=n;});

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
const ready=merged.filter(d=>d.status?.map_displayable&&d.lat&&d.lng);
fs.writeFileSync(base+'map/markers_ready.json',JSON.stringify({total:ready.length,markers:ready},null,2),'utf8');
const log=JSON.parse(fs.readFileSync(base+'logs/automation_log.json','utf8'));
log.runs.push({time:now,mode:'B',new_collected:newItems.length,total:merged.length});
fs.writeFileSync(base+'logs/automation_log.json',JSON.stringify(log,null,2),'utf8');

const nat=newItems.filter(d=>d.category_main==='자연');
const hist=newItems.filter(d=>d.category_main==='역사');
console.log('추가: '+newItems.length+'개 (자연'+nat.length+' 역사'+hist.length+')');
console.log('누적: '+merged.length+'개 / 1000: '+(merged.length/1000*100).toFixed(1)+'%');
newItems.forEach(d=>console.log('  + ['+d.place_id+'] '+d.name));
