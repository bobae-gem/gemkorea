const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const now = new Date().toISOString().slice(0,19);

const raw = [
  {name:'소양강',category_main:'자연',category_sub:'강/호수',period:'',period_category:'',region:'강원도',address:'강원특별자치도 춘천시 소양강변',location_marker_type:'exact',lat:37.8813,lng:127.7178,short_description:'춘천의 상징인 소양강은 북한강 지류로 소양강댐과 맞닿아 청록빛 강줄기가 아름답다. 소양강스카이워크와 소양강처녀상이 있어 춘천 여행의 필수 코스로 꼽히며 댐 주변 경관이 빼어나다.',source_urls:['https://www.chuncheon.go.kr'],data_confidence:'high',tags:['강','춘천','소양강스카이워크','소양강처녀상','북한강','강원','댐']},
  {name:'한강공원',category_main:'자연',category_sub:'강/호수',period:'',period_category:'',region:'서울특별시',address:'서울특별시 영등포구 여의도동 한강시민공원',location_marker_type:'exact',lat:37.5285,lng:126.9326,short_description:'서울 도심을 가로지르는 한강 변에 조성된 시민공원으로 여의도·반포·뚝섬 등 12개 지구로 구성된다. 자전거도로·캠핑장·수영장과 함께 야경 명소로 사시사철 많은 시민이 즐겨 찾는다.',source_urls:['https://hangang.seoul.go.kr'],data_confidence:'high',tags:['한강','공원','서울','여의도','야경','자전거','피크닉']},
  {name:'팔당호',category_main:'자연',category_sub:'강/호수',period:'',period_category:'',region:'경기도',address:'경기도 하남시 배알미동 팔당댐 일원',location_marker_type:'exact',lat:37.5278,lng:127.2947,short_description:'북한강과 남한강이 합류하는 지점에 팔당댐이 세워져 형성된 호수. 수도권 최대 식수원이자 아름다운 수변 경관으로 유명하며 주변 자전거길과 카페거리가 드라이브 명소로 사랑받는다.',source_urls:['https://www.hanam.go.kr'],data_confidence:'high',tags:['호수','팔당댐','북한강','남한강','경기','드라이브','수변']},
  {name:'충주호',category_main:'자연',category_sub:'강/호수',period:'',period_category:'',region:'충청북도',address:'충청북도 충주시 동량면 조동리 충주댐 일원',location_marker_type:'exact',lat:37.0092,lng:128.0203,short_description:'충주댐 건설로 생긴 내륙 최대 호수로 수면이 산줄기를 따라 구불구불 이어진다. 충주호 유람선과 단양 방향 수상 코스가 유명하며 월악산국립공원과 함께 절경을 이룬다.',source_urls:['https://www.chungju.go.kr'],data_confidence:'high',tags:['호수','충주댐','유람선','충북','월악산','내륙호수','단양']},
  {name:'상주 은모래비치',category_main:'자연',category_sub:'바다/해변',period:'',period_category:'',region:'경상남도',address:'경상남도 남해군 상주면 상주리 해수욕장',location_marker_type:'exact',lat:34.7024,lng:128.0232,short_description:'남해에서 가장 아름다운 해변으로 꼽히는 곳. 은빛 모래와 에메랄드빛 바다가 어우러지고 뒤로 소나무 숲이 펼쳐져 환상적인 경관을 자랑하는 남해 여름 대표 피서지다.',source_urls:['https://www.namhae.go.kr'],data_confidence:'high',tags:['해변','남해','은모래','경남','피서지','소나무숲','에메랄드바다']},
  {name:'격포해변',category_main:'자연',category_sub:'바다/해변',period:'',period_category:'',region:'전라북도',address:'전북특별자치도 부안군 변산면 격포리 해수욕장',location_marker_type:'exact',lat:35.6132,lng:126.5024,short_description:'채석강으로 유명한 격포 앞바다에 자리한 해변. 격포항과 연계해 싱싱한 해산물을 즐길 수 있으며 수억 년 지층이 쌓인 채석강 절벽이 웅장한 풍경을 선사한다.',source_urls:['https://www.buan.go.kr'],data_confidence:'high',tags:['해변','격포','채석강','전북','부안','변산반도','해산물']},
  {name:'강문해변',category_main:'자연',category_sub:'바다/해변',period:'',period_category:'',region:'강원도',address:'강원특별자치도 강릉시 강문동 해수욕장',location_marker_type:'exact',lat:37.7822,lng:128.9321,short_description:'경포호와 동해 바다 사이 아담한 해변. 강문 솟대다리와 강릉항이 가까워 독특한 분위기를 풍기며 파도가 좋아 서퍼들에게도 인기 있는 강릉의 숨은 서핑 명소다.',source_urls:['https://www.gangneung.go.kr'],data_confidence:'high',tags:['해변','강릉','강문','서핑','강원','경포','동해']},
  {name:'감포항',category_main:'자연',category_sub:'바다/해변',period:'',period_category:'',region:'경상북도',address:'경상북도 경주시 감포읍 감포리',location_marker_type:'exact',lat:35.8107,lng:129.5009,short_description:'경주 동쪽 해안의 감포항은 신라 문무왕 수중릉인 대왕암 인근에 위치한다. 아담한 어항과 맑은 동해 바다, 해돋이 명소로 유명하며 활어 직판장에서 싱싱한 회를 즐길 수 있다.',source_urls:['https://www.gyeongju.go.kr'],data_confidence:'high',tags:['항구','경주','감포','대왕암','해돋이','경북','동해','활어']},
  {name:'표선해변',category_main:'자연',category_sub:'바다/해변',period:'',period_category:'',region:'제주특별자치도',address:'제주특별자치도 서귀포시 표선면 표선리',location_marker_type:'exact',lat:33.3249,lng:126.8431,short_description:'썰물 때 360도로 넓은 백사장이 드러나는 독특한 원형 해변. 수심이 얕아 가족 피서지로 인기 높으며 맑고 투명한 물빛과 드넓은 백사장이 제주 동부의 대표 해변으로 손꼽힌다.',source_urls:['https://www.seogwipo.go.kr'],data_confidence:'high',tags:['해변','제주','표선','원형해변','백사장','서귀포','가족여행']},
  {name:'송정해수욕장',category_main:'자연',category_sub:'바다/해변',period:'',period_category:'',region:'부산광역시',address:'부산광역시 해운대구 송정동 해수욕장',location_marker_type:'exact',lat:35.1799,lng:129.2007,short_description:'해운대 옆에 위치하지만 조용하고 아담한 분위기로 서퍼와 현지인에게 더 사랑받는 해변. 울창한 소나무 숲이 해변을 감싸고 있으며 부산의 서핑 성지로 연중 파도를 즐길 수 있다.',source_urls:['https://www.haeundae.go.kr'],data_confidence:'high',tags:['해변','부산','송정','서핑','해운대','소나무','서퍼']},
  {name:'통영 달아공원',category_main:'자연',category_sub:'일출/일몰 명소',period:'',period_category:'',region:'경상남도',address:'경상남도 통영시 산양읍 달아리',location_marker_type:'exact',lat:34.8038,lng:128.3721,short_description:'통영 미륵도 남단에 위치한 일몰 명소. 한려해상국립공원의 크고 작은 섬들이 눈앞에 펼쳐지며 해질 무렵 노을이 섬들과 어우러져 경남 최고의 일몰 뷰포인트로 꼽힌다.',source_urls:['https://www.tongyeong.go.kr'],data_confidence:'high',tags:['일몰','통영','한려해상국립공원','경남','미륵도','섬','노을']},
  {name:'해남 땅끝마을',category_main:'자연',category_sub:'자연명승',period:'',period_category:'',region:'전라남도',address:'전라남도 해남군 송지면 송호리 땅끝마을',location_marker_type:'exact',lat:34.2878,lng:126.5303,short_description:'한반도 최남단 육지인 해남 땅끝마을. 땅끝탑에서 바라보는 다도해 풍경이 장엄하며 서울까지 이어지는 국토 종주 출발점으로도 유명하다. 땅끝전망대에서 일몰이 아름답다.',source_urls:['https://www.haenam.go.kr'],data_confidence:'high',tags:['땅끝','해남','전남','한반도최남단','다도해','전망대','국토종주']},
  {name:'남해 금산',category_main:'자연',category_sub:'자연명승',period:'',period_category:'',region:'경상남도',address:'경상남도 남해군 상주면 금산리 금산',location_marker_type:'entrance',lat:34.7351,lng:128.0445,short_description:'해발 705m의 금산은 기암괴석과 울창한 숲, 한려해상 조망이 어우러진 명산. 보리암은 낙산사·강화 보문사와 함께 3대 기도처로 유명하며 정상에서 남해 앞바다 풍경이 탁월하다.',source_urls:['https://www.namhae.go.kr'],data_confidence:'high',tags:['금산','남해','보리암','기암괴석','경남','한려해상','기도처']},
  {name:'울진 성류굴',category_main:'자연',category_sub:'동굴',period:'',period_category:'',region:'경상북도',address:'경상북도 울진군 근남면 수곡리 성류굴',location_marker_type:'exact',lat:36.9927,lng:129.3747,short_description:'천연기념물 제155호 석회암 동굴로 약 1억7천만 년 전 형성된 것으로 추정된다. 불영사계곡 인근에 위치하며 12개의 광장과 종유석·석순이 장관을 이루는 경북 대표 동굴 명소다.',source_urls:['https://www.uljin.go.kr'],data_confidence:'high',tags:['동굴','울진','천연기념물','석회암','종유석','경북','불영사계곡']},
  {name:'원주 강원감영',category_main:'역사',category_sub:'생활유적',period:'조선시대',period_category:'조선시대',region:'강원도',address:'강원특별자치도 원주시 일산동 강원감영로 1',location_marker_type:'exact',lat:37.3427,lng:127.9203,short_description:'조선시대 강원도 관찰사가 집무하던 감영. 선화당·포정루 등이 복원되어 조선 지방행정의 모습을 엿볼 수 있다. 2000년대 복원 공사를 거쳐 역사공원으로 개방된 원주의 역사 명소다.',source_urls:['https://www.wonju.go.kr'],data_confidence:'high',tags:['감영','원주','조선','관찰사','선화당','포정루','강원','역사공원']},
  {name:'대구 경상감영공원',category_main:'역사',category_sub:'생활유적',period:'조선시대',period_category:'조선시대',region:'대구광역시',address:'대구광역시 중구 경상감영길 99',location_marker_type:'exact',lat:35.8695,lng:128.5942,short_description:'조선시대 경상도 관찰사의 관청이었던 경상감영 자리에 조성된 공원. 선화당과 징청각이 원형을 간직하며 대구 근대골목투어와 연계해 조선 지방행정의 역사를 체험할 수 있다.',source_urls:['https://www.daegu.go.kr'],data_confidence:'high',tags:['감영','대구','조선','경상감영','선화당','근대골목','역사공원','중구']},
  {name:'전주 풍패지관',category_main:'역사',category_sub:'생활유적',period:'조선시대',period_category:'조선시대',region:'전라북도',address:'전북특별자치도 전주시 완산구 전주객사3길 2',location_marker_type:'exact',lat:35.8204,lng:127.1483,short_description:'전주 객사로도 불리는 풍패지관은 조선왕조 발상지 전주의 상징 건물. 태조 이성계의 어진을 봉안했던 곳으로 전패를 모시며 왕실의 안녕을 빌었다. 보물로 지정된 조선 관청 건축의 정수다.',source_urls:['https://www.jeonju.go.kr'],data_confidence:'high',tags:['객사','전주','풍패지관','조선','전북','이성계','보물','전주한옥마을']}
];

const subCatCode={'강/호수':'LKE','바다/해변':'SEA','일출/일몰 명소':'SUN','자연명승':'SCN','동굴':'CAV','생활유적':'SAE'};
const regionCode={'강원도':'GW','서울특별시':'SE','경기도':'GG','충청북도':'CB','경상남도':'GN','전라북도':'JB','경상북도':'GB','제주특별자치도':'JJ','부산광역시':'BS','전라남도':'JN','대구광역시':'DG'};

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
