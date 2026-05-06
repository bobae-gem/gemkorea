const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';

// 경험 데이터 (기존 수집된 30개 + 새 스키마 적용)
const rawCulture = [
  {name:'서울 광장시장',category_sub:'전통시장',region:'서울특별시',address:'서울특별시 종로구 창경궁로 88',lat:37.5699,lng:126.9993,short_description:'1905년 개설된 대한민국 최초의 상설시장. 마약김밥·빈대떡·육회 등 먹거리가 유명하며 종로5가역 인근에 위치해 종묘·창덕궁과 함께 둘러볼 수 있는 서울 대표 전통시장이다.',source_urls:['https://korean.visitkorea.or.kr/'],data_confidence:'high',tags:['전통시장','먹거리','마약김밥','빈대떡','종로','서울'],price:'무료 입장 (먹거리 별도)',duration:'1~3시간',reservation_required:false,target_user:['모든연령','가족','외국인'],nearby_heritage:['GK-SE-RYU-0001','GK-SE-GUN-0002','GK-SE-DOK-0001']},
  {name:'부산 자갈치시장',category_sub:'전통시장',region:'부산광역시',address:'부산광역시 중구 자갈치해안로 52',lat:35.0972,lng:129.0297,short_description:'한국 최대 어시장으로 싱싱한 활어회와 해산물을 저렴하게 즐길 수 있는 부산의 상징적 시장.',source_urls:['https://korean.visitkorea.or.kr/'],data_confidence:'high',tags:['어시장','활어회','해산물','부산','자갈치'],price:'무료 입장 (먹거리 별도)',duration:'1~2시간',reservation_required:false,target_user:['모든연령','미식여행'],nearby_heritage:[]},
  {name:'전주 남부시장 야시장',category_sub:'전통시장',region:'전라북도',address:'전라북도 전주시 완산구 풍남문1길 19-3',lat:35.8136,lng:127.1488,short_description:'매주 금·토요일 오후 5시~밤 11시 운영. 전주 먹거리와 예술 상품이 가득하며 한옥마을과 인접.',source_urls:['https://korean.visitkorea.or.kr/'],data_confidence:'high',tags:['야시장','전주','한옥마을','먹거리','금토운영'],price:'무료 입장 (먹거리 별도)',duration:'1~3시간',reservation_required:false,target_user:['모든연령','커플','가족'],nearby_heritage:['GK-JB-SAE-0001','GK-JB-HYO-0001']},
  {name:'통영 중앙전통시장',category_sub:'전통시장',region:'경상남도',address:'경상남도 통영시 중앙시장1길 14-16',lat:34.8544,lng:128.4337,short_description:'통영항 인근 대표 해산물 시장. 충무김밥·꿀빵 거리와 인접해 동피랑 마을과 함께 여행하기 좋다.',source_urls:['https://korean.visitkorea.or.kr/'],data_confidence:'high',tags:['어시장','해산물','통영','충무김밥','동피랑'],price:'무료 입장',duration:'1~2시간',reservation_required:false,target_user:['모든연령','미식여행'],nearby_heritage:[]},
  {name:'강릉 중앙시장',category_sub:'전통시장',region:'강원도',address:'강원특별자치도 강릉시 금성로 21',lat:37.7521,lng:128.8764,short_description:'강릉 도심 전통시장. 오징어순대·물회·닭강정 등 강릉 특산 먹거리와 해산물을 저렴하게 즐길 수 있다.',source_urls:['https://korean.visitkorea.or.kr/'],data_confidence:'high',tags:['전통시장','강릉','오징어순대','닭강정','강원'],price:'무료 입장',duration:'1~2시간',reservation_required:false,target_user:['모든연령'],nearby_heritage:['GK-GW-SAE-0001','GK-GW-SAE-0003']},
  {name:'국립중앙박물관',category_sub:'박물관',region:'서울특별시',address:'서울특별시 용산구 서빙고로 137',lat:37.5237,lng:126.9808,short_description:'한국 최대 규모의 국립박물관으로 선사시대부터 근현대까지 약 40만 점의 유물 소장. 무료 관람.',source_urls:['https://www.museum.go.kr/'],data_confidence:'high',tags:['박물관','무료관람','용산','서울'],price:'무료 (특별전 유료)',duration:'2~4시간',reservation_required:false,target_user:['모든연령','가족','학생'],nearby_heritage:['GK-SE-DOK-0002']},
  {name:'국립민속박물관',category_sub:'박물관',region:'서울특별시',address:'서울특별시 종로구 삼청로 37',lat:37.5796,lng:126.9784,short_description:'경복궁 내 한국 민속 전문 박물관. 의식주·세시풍속 등 한국인의 전통 생활문화 전시. 무료.',source_urls:['https://www.nfm.go.kr/'],data_confidence:'high',tags:['박물관','민속','경복궁','무료관람','전통문화'],price:'무료',duration:'1~2시간',reservation_required:false,target_user:['모든연령','가족','학생'],nearby_heritage:['GK-SE-GUN-0001','GK-SE-GUN-0002']},
  {name:'리움미술관',category_sub:'미술관',region:'서울특별시',address:'서울특별시 용산구 이태원로55길 60-16',lat:37.5383,lng:126.9983,short_description:'삼성문화재단의 세계적 사립미술관. 한국 고미술과 현대미술 컬렉션, 스타 건축가 3인의 건물이 명물.',source_urls:['https://www.leeumhoam.org/'],data_confidence:'high',tags:['미술관','현대미술','고미술','용산','이태원'],price:'유료 (성인 10,000원 내외)',duration:'1~2시간',reservation_required:true,target_user:['성인','커플','예술애호가'],nearby_heritage:[]},
  {name:'국립현대미술관 과천',category_sub:'미술관',region:'경기도',address:'경기도 과천시 광명로 313',lat:37.4274,lng:126.9840,short_description:'서울대공원 내 국립현대미술관 본관. 조각공원과 어우러진 자연 속에서 현대미술 감상.',source_urls:['https://www.mmca.go.kr/'],data_confidence:'high',tags:['미술관','현대미술','과천','서울대공원'],price:'유료 (성인 4,000원 내외)',duration:'2~3시간',reservation_required:false,target_user:['모든연령','가족'],nearby_heritage:[]},
  {name:'부산시립미술관',category_sub:'미술관',region:'부산광역시',address:'부산광역시 해운대구 APEC로 58',lat:35.1693,lng:129.1317,short_description:'BEXCO 인근 부산 대표 시립미술관. 현대미술 기획전과 이우환 전용 공간 운영.',source_urls:['https://art.busan.go.kr/'],data_confidence:'high',tags:['미술관','현대미술','부산','해운대','이우환'],price:'무료~유료 (기획전 별도)',duration:'1~2시간',reservation_required:false,target_user:['성인','커플'],nearby_heritage:[]},
  {name:'서울 인사동 전통문화거리',category_sub:'전통음식 체험',region:'서울특별시',address:'서울특별시 종로구 인사동길 일대',lat:37.5742,lng:126.9856,short_description:'한국 제1호 문화지구. 화랑·공예품점·전통찻집 밀집. 주말 차 없는 거리 운영.',source_urls:['https://korean.visitkorea.or.kr/'],data_confidence:'high',tags:['인사동','전통문화','공예','화랑','찻집','종로'],price:'무료 (쇼핑·체험 별도)',duration:'1~3시간',reservation_required:false,target_user:['모든연령','외국인','커플'],nearby_heritage:['GK-SE-GUN-0001','GK-SE-DOK-0003']},
  {name:'전주 한옥마을 한복체험',category_sub:'한복 체험',region:'전라북도',address:'전라북도 전주시 완산구 은행로 일대',lat:35.8153,lng:127.1530,short_description:'160여 곳 한복대여점에서 전통·개량한복을 빌려 한옥 골목을 거닐 수 있다.',source_urls:['https://hanok.jeonju.go.kr/'],data_confidence:'high',tags:['한복체험','한복대여','전주','한옥마을'],price:'유료 (한복 대여 10,000~30,000원)',duration:'2~4시간',reservation_required:false,target_user:['모든연령','커플','외국인'],nearby_heritage:['GK-JB-HYO-0001','GK-JB-SAE-0001']},
  {name:'경주 교촌마을 한복체험',category_sub:'한복 체험',region:'경상북도',address:'경상북도 경주시 교촌길 39-2',lat:35.8363,lng:129.2113,short_description:'황리단길 일대에서 신라 복식·한복을 빌려 월정교·첨성대 등 신라 유산을 배경으로 체험.',source_urls:['https://korean.visitkorea.or.kr/'],data_confidence:'high',tags:['한복체험','경주','교촌마을','황리단길','신라'],price:'유료 (한복 대여 10,000~25,000원)',duration:'2~4시간',reservation_required:false,target_user:['모든연령','커플','외국인'],nearby_heritage:['GK-GB-SAE-0007','GK-GB-GOB-0001','GK-GB-GWA-0001']},
  {name:'안동 하회마을 탈춤체험',category_sub:'탈춤/풍물 체험',region:'경상북도',address:'경상북도 안동시 풍천면 전서로 186',lat:36.5388,lng:128.5202,short_description:'하회별신굿탈놀이 상설 공연. 매주 화~일 오후 2시 무료 관람. 탈 만들기 체험 가능.',source_urls:['http://www.hahoe.or.kr/'],data_confidence:'high',tags:['탈춤','하회마을','안동','유네스코'],price:'입장료 별도 (탈춤 공연 무료)',duration:'2~4시간',reservation_required:false,target_user:['모든연령','가족','외국인'],nearby_heritage:['GK-GB-SAE-0004']},
  {name:'서울 북촌 공방거리',category_sub:'도예/공방 체험',region:'서울특별시',address:'서울특별시 종로구 원서동 일대',lat:37.5819,lng:126.9843,short_description:'원서동 전통 공예 장인·공방 밀집 거리. 도예·한지·금속공예·자수 등 체험 가능.',source_urls:['https://hanok.seoul.go.kr/'],data_confidence:'medium',tags:['공방','공예체험','북촌','도예','종로'],price:'유료 (체험 10,000~50,000원)',duration:'1~2시간',reservation_required:true,target_user:['성인','커플','가족'],nearby_heritage:['GK-SE-GUN-0001','GK-SE-GUN-0002']},
  {name:'해남 대흥사 템플스테이',category_sub:'사찰 체험',region:'전라남도',address:'전라남도 해남군 삼산면 대흥사길 400',lat:34.5414,lng:126.6088,short_description:'두륜산 대흥사 템플스테이. 예불·명상·울력 체험. 휴식형·체험형 프로그램 운영.',source_urls:['http://www.daeheungsa.co.kr/','https://www.templestay.com/'],data_confidence:'high',tags:['템플스테이','사찰체험','해남','대흥사'],price:'유료 (1박 50,000~70,000원)',duration:'1박 2일',reservation_required:true,target_user:['성인','가족','힐링여행'],nearby_heritage:['GK-JN-SAJ-0002']},
  {name:'부산 범어사 템플스테이',category_sub:'사찰 체험',region:'부산광역시',address:'부산광역시 금정구 범어사로 250',lat:35.2952,lng:129.0556,short_description:'영남 3대 사찰 범어사 선명상 중심 템플스테이. 예불·공양·사찰 탐방 프로그램.',source_urls:['https://www.beomeo.kr/','https://www.templestay.com/'],data_confidence:'high',tags:['템플스테이','사찰체험','범어사','부산','선명상'],price:'유료 (1박 50,000~70,000원)',duration:'1박 2일',reservation_required:true,target_user:['성인','힐링여행'],nearby_heritage:[]},
  {name:'경주 불국사 템플스테이',category_sub:'사찰 체험',region:'경상북도',address:'경상북도 경주시 불국로 385',lat:35.7901,lng:129.3317,short_description:'유네스코 불국사 템플스테이. 석가탑·다보탑 야경 속 108배·예불 체험.',source_urls:['https://bulguksa.templestay.com/'],data_confidence:'high',tags:['템플스테이','불국사','경주','유네스코','신라'],price:'유료 (1박 50,000~80,000원)',duration:'1박 2일',reservation_required:true,target_user:['성인','가족','외국인'],nearby_heritage:['GK-GB-SAJ-0001','GK-GB-SAJ-0002']},
  {name:'전주 한옥마을 한옥숙박',category_sub:'한옥 숙박',region:'전라북도',address:'전라북도 전주시 완산구 교동·풍남동 일대',lat:35.8148,lng:127.1527,short_description:'160여 곳 한옥 숙박 시설에서 전통 온돌방 체험. 주요 명소와 도보 거리.',source_urls:['https://hanok.jeonju.go.kr/'],data_confidence:'high',tags:['한옥숙박','한옥체험','전주','한옥마을','온돌'],price:'유료 (1박 50,000~200,000원)',duration:'1박 2일',reservation_required:true,target_user:['모든연령','커플','가족','외국인'],nearby_heritage:['GK-JB-HYO-0001','GK-JB-SAE-0001']},
  {name:'보성 녹차밭 체험',category_sub:'차 체험',region:'전라남도',address:'전라남도 보성군 보성읍 녹차로 775',lat:34.7729,lng:127.0823,short_description:'대한다원·한국차박물관에서 녹차 따기·덖기·녹차 화장품 만들기 등 차 문화 체험.',source_urls:['https://bstea.kr/'],data_confidence:'high',tags:['녹차밭','차체험','보성','대한다원'],price:'무료 입장 (체험 별도 유료)',duration:'1~3시간',reservation_required:false,target_user:['모든연령','커플','가족'],nearby_heritage:[]},
  {name:'고흥 유자농장 체험',category_sub:'농촌 체험',region:'전라남도',address:'전라남도 고흥군 풍양면 일대',lat:34.6058,lng:127.2833,short_description:'전국 최대 유자 산지에서 유자 수확과 가공 체험. 매년 11월 유자축제.',source_urls:['https://korean.visitkorea.or.kr/'],data_confidence:'medium',tags:['유자체험','농촌체험','고흥','유자'],price:'유료 (체험별 상이)',duration:'2~4시간',reservation_required:true,target_user:['가족','어린이'],nearby_heritage:[]},
  {name:'통영 한려수도 어촌체험',category_sub:'어촌 체험',region:'경상남도',address:'경상남도 통영시 한려해상국립공원 일원',lat:34.8533,lng:128.4319,short_description:'한려해상국립공원 어촌마을에서 조개잡기·낚시·굴 수확 등 체험.',source_urls:['https://korean.visitkorea.or.kr/'],data_confidence:'medium',tags:['어촌체험','통영','한려수도','낚시','굴수확'],price:'유료 (체험별 상이)',duration:'2~4시간',reservation_required:true,target_user:['가족','어린이'],nearby_heritage:[]},
  {name:'남해 독일마을',category_sub:'체험마을',region:'경상남도',address:'경상남도 남해군 삼동면 독일로 89-7',lat:34.8083,lng:127.9539,short_description:'파독 광부·간호사 정착 독일식 이색 마을. 독일식 건축과 남해 바다 풍경 어우러짐.',source_urls:['https://german-village.kr/'],data_confidence:'high',tags:['독일마을','파독','남해','이색마을'],price:'무료 입장',duration:'1~3시간',reservation_required:false,target_user:['모든연령','커플','가족'],nearby_heritage:[]},
  {name:'안동 국제탈춤페스티벌',category_sub:'축제',region:'경상북도',address:'경상북도 안동시 축제장길 200',lat:36.5690,lng:128.7296,short_description:'매년 10월 국내외 탈춤 공연단 참가. 탈 만들기·탈춤 체험 운영. 안동 하회마을 연계.',source_urls:['https://www.maskdance.com/'],data_confidence:'high',tags:['탈춤','축제','안동','10월'],price:'무료~유료 (일부 공연 유료)',duration:'1일~기간 중 방문',reservation_required:false,target_user:['모든연령','외국인'],nearby_heritage:['GK-GB-SAE-0004']},
  {name:'진주 남강유등축제',category_sub:'축제',region:'경상남도',address:'경상남도 진주시 남강 및 진주성 일대',lat:35.1896,lng:128.0792,short_description:'매년 10월 진주 남강 수천 개 유등 빛의 축제. 임진왜란 기원. 진주성 연계.',source_urls:['https://yudeung.com/'],data_confidence:'high',tags:['유등축제','진주','남강','10월'],price:'무료~유료',duration:'야간 2~4시간',reservation_required:false,target_user:['모든연령','커플'],nearby_heritage:['GK-GN-SEO-0001']},
  {name:'보령 머드축제',category_sub:'축제',region:'충청남도',address:'충청남도 보령시 해수욕장1길 10',lat:36.3187,lng:126.5009,short_description:'매년 7월 대천해수욕장 세계적 머드 체험 축제. 수십만 명 방문 한국 대표 여름 축제.',source_urls:['https://www.mudfestival.or.kr/'],data_confidence:'high',tags:['머드축제','보령','대천','7월','여름'],price:'무료~유료',duration:'반일~1일',reservation_required:false,target_user:['성인','외국인'],nearby_heritage:[]},
  {name:'화천 산천어축제',category_sub:'축제',region:'강원도',address:'강원특별자치도 화천군 화천읍 산천어길 137',lat:38.1065,lng:127.7083,short_description:'매년 1월 얼음낚시 축제. CNN 세계 7대 불가사의 겨울 축제. 100만 명 이상 방문.',source_urls:['https://www.narafestival.com/'],data_confidence:'high',tags:['산천어축제','얼음낚시','화천','겨울','1월'],price:'유료 (낚시 체험 별도)',duration:'반일~1일',reservation_required:false,target_user:['모든연령','가족'],nearby_heritage:[]},
  {name:'함평 나비축제',category_sub:'축제',region:'전라남도',address:'전라남도 함평군 함평읍 곤재로 27',lat:35.0656,lng:126.5186,short_description:'매년 4~5월 함평엑스포공원 나비 생태 축제. 20만 마리 나비·50만 봄꽃 어우러짐.',source_urls:['https://www.hpftf.or.kr/'],data_confidence:'high',tags:['나비축제','함평','봄','4월','생태'],price:'유료 (성인 3,000~5,000원)',duration:'반일~1일',reservation_required:false,target_user:['모든연령','가족','어린이'],nearby_heritage:[]},
  {name:'서울 어린이대공원',category_sub:'어린이 체험',region:'서울특별시',address:'서울특별시 광진구 능동로 216',lat:37.5479,lng:127.0745,short_description:'53만㎡ 시립 가족 공원. 동물원·식물원·놀이동산·공연장 집약. 무료 입장.',source_urls:['https://www.sisul.or.kr/'],data_confidence:'high',tags:['어린이대공원','동물원','놀이동산','가족','광진구'],price:'무료 (놀이기구 별도)',duration:'반일~1일',reservation_required:false,target_user:['가족','어린이'],nearby_heritage:[]},
  {name:'과천 서울랜드',category_sub:'가족 체험',region:'경기도',address:'경기도 과천시 광명로 181',lat:37.4327,lng:126.9873,short_description:'서울대공원 내 테마파크. 어트랙션·퍼레이드. 국립현대미술관·동물원과 함께 가족 코스.',source_urls:['https://grandpark.seoul.go.kr/'],data_confidence:'high',tags:['놀이공원','테마파크','과천','가족','경기'],price:'유료 (입장+이용권 40,000~60,000원)',duration:'반일~1일',reservation_required:false,target_user:['가족','어린이','커플'],nearby_heritage:[]},
  {name:'용인 한국민속촌',category_sub:'체험마을',region:'경기도',address:'경기도 용인시 기흥구 민속촌로 90',lat:37.2399,lng:127.1086,short_description:'조선시대 생활 재현 270여 채 전통 가옥·공방 민속 테마파크. 공예 체험·민속 공연.',source_urls:['https://www.koreanfolk.co.kr'],data_confidence:'high',tags:['민속촌','조선시대','용인','전통체험','가족'],price:'유료 (성인 20,000~25,000원)',duration:'반일~1일',reservation_required:false,target_user:['모든연령','가족','외국인'],nearby_heritage:[]}
];

// experience_id 생성
const regionCode={'서울특별시':'SE','부산광역시':'BS','경기도':'GG','전라북도':'JB','경상남도':'GN','경상북도':'GB','전라남도':'JN','강원도':'GW','충청남도':'CN'};
const catCode={'전통시장':'MKT','박물관':'MUS','미술관':'ART','한복 체험':'HAN','전통음식 체험':'FUD','도예/공방 체험':'CRF','탈춤/풍물 체험':'TRD','사찰 체험':'TEM','한옥 숙박':'HAO','차 체험':'TEA','농촌 체험':'FRM','어촌 체험':'FSH','체험마을':'VIL','축제':'FES','어린이 체험':'KID','가족 체험':'FAM','미술관':'ART'};
const counters={};
const now=new Date().toISOString().slice(0,19);

const experiences=rawCulture.map(d=>{
  const rc=regionCode[d.region]||'ETC';
  const cc=catCode[d.category_sub]||'EXP';
  const k=rc+'-'+cc;
  counters[k]=(counters[k]||0)+1;
  const expId='EX-'+rc+'-'+cc+'-'+String(counters[k]).padStart(3,'0');

  // 주변 역사유산 IDs (지정된 것 + 빈 배열)
  const nearbyHeritage=d.nearby_heritage||[];

  return {
    experience_id: expId,
    name: d.name,
    category_main: '문화/체험',
    category_sub: d.category_sub,
    category_detail: d.short_description.split('.')[0],
    region_main: regionCode[d.region]||'ETC',
    region_sub: d.region,
    address: d.address,
    lat: d.lat,
    lng: d.lng,
    price: d.price,
    duration: d.duration,
    reservation_required: d.reservation_required,
    target_user: d.target_user,
    nearby_places: [],
    related_heritage_ids: nearbyHeritage,
    short_description: d.short_description,
    source_urls: d.source_urls,
    data_confidence: d.data_confidence,
    tags: d.tags,
    tour_status: 'candidate',
    shorts_status: 'waiting',
    created_at: now
  };
});

const library={
  '_comment':'겜코리아 체험 데이터 — 역사/자연 마커와 분리. 삭제 금지. 젬투어 상품 후보.',
  '_version':'1.0',
  '_updated':now,
  total:experiences.length,
  experiences
};

fs.writeFileSync('C:/Users/user/Desktop/클로드/gemkorea/data/experiences.json', JSON.stringify(library,null,2),'utf8');
console.log('✅ data/experiences.json 생성: '+experiences.length+'개');
experiences.forEach(e=>console.log('  ['+e.experience_id+'] '+e.name+' ('+e.category_sub+')'));
