const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const now = new Date().toISOString().slice(0,19);

const newExps = [
  {experience_id:'EX-GW-AGR-003',name:'고성 딸기·토마토 스마트팜 체험',category_main:'문화/체험',category_sub:'농촌 체험',region_main:'GW',region_sub:'강원특별자치도 고성군',address:'강원특별자치도 고성군 간성읍 스마트팜단지',lat:38.3792,lng:128.4781,price:'1인 12,000원',duration:'1~2시간',reservation_required:true,target_user:['가족','어린이'],nearby_places:[],related_heritage_ids:[],short_description:'강원도 고성 스마트팜 단지에서 첨단 농업 기술과 전통 딸기·토마토 수확을 동시에 체험하는 미래 농업 투어다. IT 기술로 온도·습도를 자동 제어하는 스마트팜 시스템을 배우고 직접 수확한 과일을 먹을 수 있다.',source_urls:['https://www.goseong.org/'],data_confidence:'high',tags:['스마트팜','고성','강원','미래농업','딸기','토마토','어린이체험'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~17:00',phone:'033-680-3380'},
  {experience_id:'EX-JN-AGR-005',name:'강진 청자 도요지 발굴 체험',category_main:'문화/체험',category_sub:'역사 체험',region_main:'JN',region_sub:'전라남도 강진군',address:'전라남도 강진군 대구면 청자촌길 33',lat:34.5747,lng:126.7342,price:'1인 12,000원',duration:'1~2시간',reservation_required:true,target_user:['가족','개인'],nearby_places:[],related_heritage_ids:[],short_description:'고려청자 최대 생산지 강진에서 도요지 발굴 체험과 청자 물레 성형을 함께 즐기는 체험이다. 900년 전 청자를 구워낸 도요지 가마터를 직접 발굴하고 청자 파편을 모아 복원하는 역사 탐구 체험이다.',source_urls:['https://www.gangjin.go.kr/'],data_confidence:'high',tags:['강진청자','도요지발굴','강진','전남','고려청자','가마터','역사체험'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00',phone:'061-430-3524'},
  {experience_id:'EX-GN-AGR-003',name:'거제 멍게·해삼 해상 채취 체험',category_main:'문화/체험',category_sub:'해양체험',region_main:'GN',region_sub:'경상남도 거제시',address:'경상남도 거제시 동부면 학동리 어촌 선착장',lat:34.8462,lng:128.7089,price:'1인 35,000원',duration:'2~3시간',reservation_required:true,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'거제 앞바다 양식장에서 배를 타고 멍게·해삼을 직접 채취하는 해양 체험이다. 어부 아저씨에게 수하식 멍게 양식 과정을 배우고 방금 채취한 멍게를 현장에서 잘라 먹는 특별한 경험이다.',source_urls:['https://www.geoje.go.kr/'],data_confidence:'high',tags:['멍게채취','거제','경남','해상체험','어부','양식장','현장먹거리'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'seasonal',operating_hours:'4~7월 멍게 시즌',phone:'055-639-6615'},
  {experience_id:'EX-GJ-AGR-002',name:'광주 전통 시장 요리 투어',category_main:'문화/체험',category_sub:'지역 먹거리',region_main:'GJ',region_sub:'광주광역시 동구',address:'광주광역시 동구 충장로 양동시장 일원',lat:35.1534,lng:126.9074,price:'1만원~',duration:'2~3시간',reservation_required:false,target_user:['개인','커플','가족'],nearby_places:[],related_heritage_ids:[],short_description:'광주 대표 전통 시장인 양동시장·대인시장을 탐방하며 광주 5미(김치·홍어삼합·돼지국밥·떡갈비·보리밥)를 맛보는 먹거리 투어다. 광주 예술의 거리와 연계해 예술+음식 하루 코스로 즐길 수 있다.',source_urls:['https://www.gwangju.go.kr/tour/'],data_confidence:'high',tags:['광주양동시장','광주','광주5미','홍어삼합','떡갈비','보리밥','먹거리투어'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~20:00',phone:'062-226-3434'},
  {experience_id:'EX-CB-AGR-003',name:'단양 마늘 흑마늘 만들기 체험',category_main:'문화/체험',category_sub:'발효/음식',region_main:'CB',region_sub:'충청북도 단양군',address:'충청북도 단양군 단양읍 단양마늘 체험장',lat:36.9845,lng:128.3659,price:'1인 15,000원',duration:'1~2시간',reservation_required:true,target_user:['개인','가족'],nearby_places:[],related_heritage_ids:[],short_description:'단양 특산 마늘로 흑마늘을 직접 만드는 체험이다. 흑마늘이 어떻게 만들어지는지 열처리·발효 과정을 배우고 흑마늘 요리를 함께 즐기며 건강한 발효 식품 문화를 체험한다.',source_urls:['https://www.dyfarm.kr/'],data_confidence:'high',tags:['흑마늘','단양','충북','흑마늘만들기','마늘','발효','건강체험'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'10:00~17:00',phone:'043-421-0001'},
  {experience_id:'EX-GW-AGR-004',name:'횡성 한우 목장 체험',category_main:'문화/체험',category_sub:'농촌 체험',region_main:'GW',region_sub:'강원특별자치도 횡성군',address:'강원특별자치도 횡성군 횡성읍 한우마을 일원',lat:37.4912,lng:127.9877,price:'체험 1인 15,000원',duration:'2시간',reservation_required:true,target_user:['가족','어린이'],nearby_places:[],related_heritage_ids:[],short_description:'횡성 한우 목장에서 소 먹이 주기·그루밍·한우 브랜드 역사를 배우는 농촌 체험이다. 체험 후 횡성 한우 구이를 정상 가격보다 저렴하게 먹을 수 있는 목장 식당도 운영된다.',source_urls:['https://www.hsg.go.kr/'],data_confidence:'high',tags:['횡성한우','횡성','강원','한우목장','먹이주기','소체험','가족여행'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~17:00',phone:'033-340-2480'},
  {experience_id:'EX-JB-CUL-006',name:'남원 춘향제 체험',category_main:'문화/체험',category_sub:'축제',region_main:'JB',region_sub:'전라북도 남원시',address:'전라북도 남원시 광한루원 일원',lat:35.4162,lng:127.3897,price:'무료 (일부 유료)',duration:'3~5시간',reservation_required:false,target_user:['가족','커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'매년 5월 판소리 춘향전의 배경지 남원 광한루원에서 열리는 춘향제 축제다. 춘향 선발대회·그네뛰기·사또 행차 재현·판소리 공연이 열리며 남원 춘향테마파크와 함께 즐기기 좋다.',source_urls:['https://www.chunhyang.or.kr/'],data_confidence:'high',tags:['춘향제','남원','전북','춘향전','광한루원','판소리','봄축제'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'매년 5월 (5일간)',phone:'063-620-6655'},
  {experience_id:'EX-GG-CUL-007',name:'파주 DMZ 지뢰 평화 아트 센터',category_main:'문화/체험',category_sub:'역사 체험',region_main:'GG',region_sub:'경기도 파주시',address:'경기도 파주시 탄현면 헤이리마을길 일원',lat:37.7374,lng:126.7224,price:'성인 8,000원',duration:'1~2시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'DMZ와 분단 상황을 아트로 표현한 파주 헤이리 예술마을 내 갤러리를 탐방하는 체험이다. 분단과 평화를 주제로 한 설치미술·회화·사진 전시를 통해 한반도 분단을 예술적 시각으로 이해한다.',source_urls:['https://www.heyri.net/'],data_confidence:'high',tags:['DMZ아트','파주','헤이리','분단아트','평화미술관','경기','현대미술'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'10:00~18:00',phone:'031-946-8551'},
  {experience_id:'EX-JN-CUL-003',name:'보성 녹차 아이스크림 만들기',category_main:'문화/체험',category_sub:'발효/음식',region_main:'JN',region_sub:'전라남도 보성군',address:'전라남도 보성군 보성읍 녹차로 763 (대한다원)',lat:34.7718,lng:127.0792,price:'1인 10,000원',duration:'1시간',reservation_required:false,target_user:['가족','어린이','커플'],nearby_places:[],related_heritage_ids:[],short_description:'보성 대한다원에서 직접 딴 녹차 잎으로 녹차 아이스크림을 만드는 체험이다. 녹차 가루를 넣고 아이스크림을 직접 만들면서 보성 녹차의 맛과 향을 즐기는 달콤한 체험이다.',source_urls:['https://www.daehandawon.com/'],data_confidence:'high',tags:['보성녹차','녹차아이스크림','보성','전남','녹차만들기','달콤체험','어린이'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00',phone:'061-852-4005'},
  {experience_id:'EX-GG-CUL-008',name:'이천 쌀막걸리 빚기 체험',category_main:'문화/체험',category_sub:'발효/음식',region_main:'GG',region_sub:'경기도 이천시',address:'경기도 이천시 부발읍 경충대로 일원',lat:37.2641,lng:127.4731,price:'1인 25,000원',duration:'2시간',reservation_required:true,target_user:['성인','개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'이천 임금님표 쌀을 사용해 전통 방식으로 막걸리를 빚는 체험이다. 쌀 찌기·누룩 섞기·발효 과정을 배우고 완성된 막걸리를 시음하며 한국 전통 주조 문화를 이해하는 프로그램이다.',source_urls:['https://www.icheon.go.kr/'],data_confidence:'high',tags:['이천막걸리','이천','경기','쌀막걸리','막걸리빚기','전통주','발효'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'11:00~17:00',phone:'031-644-2538'},
  {experience_id:'EX-GW-SPT-002',name:'양양 서핑+카페 투어',category_main:'문화/체험',category_sub:'해양 레포츠',region_main:'GW',region_sub:'강원특별자치도 양양군',address:'강원특별자치도 양양군 현남면 인구리 해변',lat:38.0783,lng:128.7112,price:'서핑 강습 1인 50,000원~',duration:'3~4시간',reservation_required:true,target_user:['청년','커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'양양 인구해변에서 서핑 강습을 받고 해변 카페 거리를 투어하는 코스다. 파도 위에서 균형 잡는 서핑의 쾌감과 함께 감성 카페 문화를 즐기는 청년 여행의 대표 코스다.',source_urls:['https://www.yangyang.go.kr/tour/'],data_confidence:'high',tags:['양양서핑','양양','강원','인구해변','서핑카페','청년여행','여름'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'seasonal',operating_hours:'4~10월 서핑 시즌',phone:'033-670-2520'},
  {experience_id:'EX-JJ-SPT-001',name:'제주 UTV 오프로드 체험',category_main:'문화/체험',category_sub:'어드벤처/레포츠',region_main:'JJ',region_sub:'제주특별자치도 제주시',address:'제주특별자치도 제주시 애월읍 오프로드 파크',lat:33.4619,lng:126.3456,price:'2인 80,000원~',duration:'1시간',reservation_required:true,target_user:['커플','개인','청년'],nearby_places:[],related_heritage_ids:[],short_description:'제주 오프로드 파크에서 UTV(2인승 사륜 오프로드 차량)를 타고 제주 중산간 비포장 코스를 질주하는 어드벤처 체험이다. 한라산이 보이는 제주 중산간 오프로드를 UTV로 달리며 스릴을 즐긴다.',source_urls:['https://www.visitjeju.net/'],data_confidence:'high',tags:['UTV오프로드','제주','오프로드','어드벤처','중산간','스릴','커플'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00',phone:'064-799-0002'}
];

const newShorts = [
  {
    experience_id:'EX-JN-OCN-001', experience_name:'완도 전복·굴 따기 해상체험', category_sub:'해양체험', region:'전라남도',
    script_30s:'오늘은 완도 앞바다 전복 양식장에서 전복을 직접 땄어요. 한국 전복 70%가 완도에서 나요. 근데 아무도 안 알려주는 게 있어요 — 방금 딴 전복을 바닷물에 씻어 바로 먹으면 달아요. 전복이 이렇게 달 수 있는지 몰랐어요. 너무 갓 채취 전복이 별미라서 좋았습니다.',
    script_60s:'오늘은 전남 완도 앞바다 전복 양식장에 왔어요. 완도는 국내 전복 생산량의 70% 이상을 담당하는 전복의 고장이에요. 배를 타고 수하식 양식장으로 나가서 직접 전복을 채취하는 체험이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 양식장에서 방금 딴 전복을 바닷물에 한 번 씻어 바로 먹으면 전혀 다른 맛이에요. 내장을 포함해 바로 먹으면 바다 향과 단맛이 동시에 나요. 마트에서 파는 전복회와는 완전히 다른 맛이에요. 전복이 이렇게 달 수 있다는 게 처음에 믿기지 않아요. 함께 채취한 굴도 마찬가지예요. 방금 딴 굴을 껍데기째 들고 즉석에서 먹는 그 신선함이 진짜 해상 체험의 하이라이트예요. 너무 갓 채취 해산물이 별미라서 좋았습니다.',
    secret_tip:'방금 채취한 전복 바닷물 씻어 즉석 시식 — 마트 전복회와 완전히 다른 단맛. 내장 포함해서 먹는 게 포인트. 굴도 마찬가지로 즉석 시식 가능. 완도 완도타워 세트 코스',
    filming_guide:'배 위에서 수하식 줄에서 전복 따는 장면. 방금 딴 전복 즉석 시식 표정 클로즈업. 전복 껍데기와 내장 보여주는 클로즈업.',
    broll_ideas:['수하식 줄에서 전복 따는 장면','방금 딴 전복 즉석 시식 표정','전복 껍데기+내장 클로즈업','완도 앞바다 전복 양식장 전경','굴 껍데기째 즉석 먹기'],
    hooks:['방금 딴 전복 즉석에서 먹으면 달아요','전복이 이렇게 달 수 있어요?','완도 앞바다 전복 70% 여기서 나요','마트 전복이랑 완전 다른 맛','해상 전복 채취 꿀팁 있어요'],
    thumbnails:['수하식에서 전복 따기','즉석 전복 시식 표정','전복 내장 클로즈업','양식장 전경','굴 즉석 먹기'],
    captions:{youtube:'완도 전복 해상 체험 — 방금 딴 전복이 이렇게 달아요 🦪\n\n마트 전복이랑 완전 다른 맛!\n한국 전복 70% 생산지 완도\n\n📍 전남 완도군 전복 양식장\n🦪 방금 딴 전복 즉석 시식이 하이라이트\n\n#완도전복 #전복체험 #전남여행 #해상체험 #갓채취',instagram:'완도 앞바다 전복 방금 딴 즉석 먹었어요 🦪\n\n마트 전복이랑 맛이 완전 달라요 ✨\n이렇게 달 수 있는지 몰랐어요\n\n📍 전남 완도 전복 양식장\n\n#완도전복 #해상체험 #전남여행 #GemKorea',tiktok:'완도 전복 꿀팁 🦪 방금 딴 전복 바닷물로 씻어 즉석에서 먹으면 달아요! 마트 전복이랑 완전 다른 맛 // 한국 전복 70% 완도에서 #완도전복 #전남여행 #해상체험'},
    hashtags:{korean:['#한국여행','#전남여행','#완도여행','#해산물','#GemKorea'],place_specific:['#완도전복','#전복해상채취','#수하식양식장','#갓채취전복']}
  },
  {
    experience_id:'EX-GW-FRM-001', experience_name:'강화도 갯벌 새우젓 담그기', category_sub:'발효/음식', region:'인천광역시',
    script_30s:'오늘은 강화도 갯벌에서 새우를 잡고 새우젓을 담갔어요. 근데 아무도 안 알려주는 게 있어요 — 새우젓은 새우가 작을수록 맛있어요. 가장 작은 새우를 골라 담가야 해요. 그 비법을 현지 어르신한테 배웠어요. 너무 새우젓 담그는 것 자체가 발효 과학이라서 좋았습니다.',
    script_60s:'오늘은 인천 강화도 화도면 갯벌에서 새우젓 담그기 체험을 했어요. 강화 갯벌은 서해안 최고의 새우 산지예요. 조수 웅덩이에서 직접 새우를 잡고 천일염과 켜켜이 쌓아 새우젓을 담그는 전통 발효 체험이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 새우젓 담글 때 새우 크기가 중요해요. 가장 작은 새우일수록 육질이 연하고 발효가 잘 돼서 새우젓 맛이 더 진해요. 현지 어르신들은 새우를 잡을 때부터 크기별로 골라요. 큰 새우는 즉석에서 먹고 작은 새우를 새우젓용으로 따로 담아요. 이 비법을 알고 담그면 완성된 새우젓 맛이 달라요. 천일염 양도 새우 무게의 30%가 맞는 비율이에요. 너무 새우젓 담그는 게 발효 과학이라서 좋았습니다.',
    secret_tip:'새우젓 담글 때 작은 새우가 맛있음 — 육질 연하고 발효 잘 됨. 천일염 비율 새우 무게의 30%. 큰 새우 즉석 먹기+작은 새우 새우젓용 분류. 강화 마니산 세트 코스',
    filming_guide:'갯벌에서 새우 잡는 손. 새우 크기별 분류하는 장면. 옹기에 새우+천일염 켜켜이 담기.',
    broll_ideas:['갯벌에서 새우 잡는 손','새우 크기별 분류 장면','옹기에 켜켜이 담기','강화 갯벌 전경','완성 새우젓 옹기 봉하기'],
    hooks:['새우젓은 작은 새우가 맛있어요','새우 크기별 분류 비법 있어요','강화 갯벌 새우젓 담그는 법','천일염 30% 비율 꿀팁','강화도 새우젓 직접 담가봤어요'],
    thumbnails:['갯벌 새우 잡는 손','새우 크기별 분류','옹기에 켜켜이 담기','강화 갯벌 전경','완성 새우젓 옹기'],
    captions:{youtube:'강화도 새우젓 담그기 — 작은 새우가 맛있어요 🦐\n\n크기별 분류 비법 현지 어르신에게 배웠어요!\n천일염 30% 비율 꿀팁\n\n📍 인천 강화군 화도면 갯벌\n🦐 작은 새우 = 더 진한 새우젓\n\n#강화도새우젓 #강화도 #인천여행 #발효 #갯벌체험',instagram:'강화도 새우젓 담그기 작은 새우가 맛있는 이유 🦐\n\n현지 어르신한테 크기별 분류 비법 배웠어요 ✨\n천일염 30% 비율이 핵심\n\n📍 인천 강화도 갯벌\n\n#강화도새우젓 #강화도 #인천여행 #GemKorea',tiktok:'강화도 새우젓 꿀팁 🦐 작은 새우가 더 맛있어요! 크기별 분류해서 담가야 해요 // 천일염 30% 비율이 핵심 현지 어르신 비법 #강화도새우젓 #강화도 #인천여행'},
    hashtags:{korean:['#한국여행','#인천여행','#강화도여행','#발효','#GemKorea'],place_specific:['#강화도새우젓','#갯벌새우','#새우젓담그기','#천일염30%']}
  },
  {
    experience_id:'EX-JJ-NAT-001', experience_name:'제주 허브 따기·아로마 오일 만들기', category_sub:'자연체험', region:'제주특별자치도',
    script_30s:'오늘은 제주 협재 허브 농장에서 허브를 따고 아로마 오일을 만들었어요. 근데 아무도 안 알려주는 게 있어요 — 제주 허브는 바닷바람을 맞아서 향이 더 진해요. 같은 종류인데 제주 허브가 달라요. 너무 자연 환경이 향을 만든다는 걸 알게 돼서 좋았습니다.',
    script_60s:'오늘은 제주 협재 해안가 허브 농장에 왔어요. 제주 서쪽 협재 해안가에 위치한 농장에서 라벤더·로즈마리·민트 등 허브를 직접 수확하고 아로마 오일을 만드는 체험이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 제주 허브가 특별한 이유가 있어요. 같은 허브 종류인데 제주 해안에서 자란 것이 향이 더 진해요. 바닷바람을 맞으면서 자라면 식물 스트레스 반응으로 방향물질을 더 많이 생성해요. 그래서 제주 허브를 손으로 잡는 순간부터 향이 강렬하게 올라와요. 수확한 허브로 직접 아로마 오일을 증류하는 과정도 배울 수 있어요. 완성된 아로마 오일 한 병을 가져가는 게 이 체험의 최종 선물이에요. 너무 바닷바람이 허브를 더 향기롭게 만든다는 자연 원리가 좋았습니다.',
    secret_tip:'제주 해안 허브는 바닷바람 스트레스로 방향물질 더 많이 생성 — 같은 종류인데 향이 더 진함. 협재 해안가 농장이 최고. 수확한 허브로 아로마 오일 직접 증류',
    filming_guide:'제주 허브 손에 잡는 순간 강렬한 향 맡는 표정. 아로마 오일 증류 과정 클로즈업. 완성 오일 향 맡으며 협재 해변 배경.',
    broll_ideas:['제주 허브 향 맡는 표정 클로즈업','아로마 오일 증류 과정','완성 오일 협재 해변 배경','허브 농장 전체 전경','라벤더 밭 사이 수확'],
    hooks:['제주 허브가 육지보다 향이 진한 이유','바닷바람이 허브를 더 향기롭게 만들어요','협재 허브 농장 체험 꿀팁','제주 아로마 오일 직접 만들었어요','같은 허브인데 제주가 달라요'],
    thumbnails:['제주 허브 향 맡는 표정','아로마 오일 증류 과정','완성 오일 협재 배경','허브 농장 전경','라벤더 수확'],
    captions:{youtube:'제주 허브 농장 — 바닷바람 맞은 허브가 향이 달라요 🌿\n\n같은 종류인데 제주 허브가 더 진해요!\n협재 해안가 허브+아로마 오일 만들기\n\n📍 제주 협재 해안가 허브 농장\n🌿 바닷바람 스트레스 = 방향물질 더 많이 생성\n\n#제주허브 #아로마오일 #협재 #제주여행 #허브체험',instagram:'제주 협재 허브 바닷바람 맞아서 향이 달라요 🌿\n\n같은 허브인데 제주가 더 진해요 ✨\n아로마 오일 직접 만들어 가져왔어요\n\n📍 제주 협재 허브 농장\n\n#제주허브 #아로마오일 #협재 #제주여행 #GemKorea',tiktok:'제주 허브 꿀팁 🌿 바닷바람 맞은 허브가 향이 더 진해요! 같은 종류인데 제주가 달라 // 협재 해안가 허브 수확+아로마 오일 직접 만들기 #제주허브 #협재 #제주여행'},
    hashtags:{korean:['#한국여행','#제주여행','#협재','#허브체험','#GemKorea'],place_specific:['#제주허브농장','#협재허브','#아로마오일만들기','#바닷바람허브']}
  },
  {
    experience_id:'EX-JB-ART-001', experience_name:'전주 판소리 체험', category_sub:'문화예술', region:'전라북도',
    script_30s:'오늘은 전주 한옥마을에서 판소리를 배웠어요. 유네스코 판소리 본고장이에요. 근데 아무도 안 알려주는 게 있어요 — 판소리 발성은 배에서 나와요. 그냥 소리치는 게 아니에요. 배에서 소리 내는 그 감각이 오는 순간 판소리가 달리 들려요. 너무 소리가 이렇게 나오는구나 싶어서 좋았습니다.',
    script_60s:'오늘은 전북 전주 한옥마을 판소리 체험에 왔어요. 유네스코 인류무형문화유산 판소리의 본고장 전주예요. 춘향가·심청가·흥부가 중 한 대목을 소리꾼에게 배우는 체험이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 판소리 발성의 핵심이 있어요. 목에서 소리를 내는 게 아니라 배에서 소리가 올라와야 해요. 복식 호흡으로 배에서 소리를 끌어올릴 때 판소리 특유의 울림이 생겨요. 소리꾼 선생님이 배에 손을 대고 그 진동을 느끼게 해주는 시간이 있어요. 그 순간 판소리가 단순한 노래가 아니라 몸 전체로 하는 소리라는 걸 이해해요. 한 소절이라도 배 소리로 내본 사람은 판소리를 완전히 달리 듣게 돼요. 너무 소리가 몸 전체에서 나온다는 걸 알게 돼서 좋았습니다.',
    secret_tip:'판소리 발성 핵심 = 배에서 소리 끌어올리기 — 복식 호흡으로 배 진동 확인. 소리꾼이 배에 손 대고 진동 느끼게 함. 이 감각이 오면 판소리가 달리 들림. 북 반주와 함께 실습',
    filming_guide:'배에 손 대고 판소리 발성 진동 확인하는 장면. 소리꾼 창 부르는 표정 (감정 실린 순간). 완성된 한 소절 부르는 체험자.',
    broll_ideas:['배 진동 확인하는 발성 연습 장면','소리꾼 창 부르는 감정 담긴 표정','북 반주와 함께 한 소절 부르기','전주 한옥마을 배경 판소리 공방','판소리 악보와 장단 설명'],
    hooks:['판소리는 배에서 소리가 나와요','배 진동 느끼는 그 순간 달리 들려요','유네스코 본고장 전주에서 판소리 배웠어요','한 소절 배우면 판소리가 달라요','목이 아닌 배로 내는 소리 체험'],
    thumbnails:['배 진동 확인 발성 연습','소리꾼 감정 담긴 창','북 반주 한 소절 부르기','전주 한옥마을 판소리 공방','판소리 악보와 장단'],
    captions:{youtube:'전주 판소리 체험 — 배에서 소리가 나와요 목이 아니에요 🎵\n\n배 진동 느끼는 그 순간 판소리가 달리 들려요!\n유네스코 본고장 전주 한옥마을\n\n📍 전북 전주 한옥마을 판소리 체험\n🎵 춘향가·심청가·흥부가 중 선택\n\n#전주판소리 #전주 #전북여행 #유네스코 #판소리체험',instagram:'전주 판소리 체험 배에서 소리가 나와요 🎵\n\n배 진동 느끼는 그 순간 판소리 달리 들려요 ✨\n유네스코 본고장에서 직접 배웠어요\n\n📍 전북 전주 한옥마을\n\n#전주판소리 #전주여행 #전북 #유네스코 #GemKorea',tiktok:'전주 판소리 꿀팁 🎵 배에서 소리가 나와야 해요! 복식 호흡으로 배 진동 느끼는 순간 판소리가 달리 들려요 // 유네스코 본고장 전주 한옥마을 #전주판소리 #전주여행 #전북'},
    hashtags:{korean:['#한국여행','#전북여행','#전주여행','#판소리','#GemKorea'],place_specific:['#전주판소리체험','#판소리배에서소리','#유네스코판소리','#전주한옥마을']}
  },
  {
    experience_id:'EX-SE-ART-003', experience_name:'인사동 전통 서예·민화 체험', category_sub:'문화예술', region:'서울특별시',
    script_30s:'오늘은 인사동에서 전통 서예와 민화를 배웠어요. 근데 아무도 안 알려주는 게 있어요 — 붓을 잡는 법이 따로 있어요. 엄지와 검지가 아니라 세 손가락으로 세우듯 잡아야 해요. 그 순간 먹이 종이에 살아있게 번져요. 너무 그 감각이 달라서 좋았습니다.',
    script_60s:'오늘은 서울 인사동에서 전통 서예와 민화 체험을 했어요. 한지·먹·붓을 사용해 한자 서예를 쓰거나 모란·호랑이 등 전통 민화 도안을 채색하는 체험이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 붓을 잡는 법이 핵심이에요. 연필처럼 엄지·검지로 잡으면 안 되고 세 손가락(엄지·검지·중지)으로 세워서 수직으로 잡아야 해요. 붓을 수직으로 세우면 먹이 종이에 자연스럽게 스며들면서 선이 살아있게 표현돼요. 이 잡는 법만 교정하면 같은 사람이 쓴 글씨가 완전히 달라 보여요. 선생님이 손을 잡고 직접 고쳐주는 시간이 있는데 그 순간이 서예 체험의 진짜 하이라이트예요. 너무 붓 한 자루의 잡는 법이 이렇게 중요한 줄 몰랐어서 좋았습니다.',
    secret_tip:'붓 잡는 법 핵심 — 세 손가락으로 수직으로 세워 잡기. 연필식으로 잡으면 선이 죽음. 이 교정이 서예 체험 하이라이트. 민화 채색은 안쪽에서 바깥으로 칠하는 법 있음',
    filming_guide:'붓 잡는 법 비교 클로즈업 (틀린 방법 vs 맞는 방법). 먹이 한지에 스며드는 슬로우. 민화 채색 완성 순간.',
    broll_ideas:['붓 잡는 법 틀린 vs 맞는 비교 클로즈업','먹이 한지에 스며드는 슬로우','민화 채색 완성 순간','인사동 서예 공방 내부','완성 작품 들어올리는 장면'],
    hooks:['붓 잡는 법이 따로 있어요','세 손가락으로 세워서 잡아야 해요','연필처럼 잡으면 선이 죽어요','이 교정만으로 글씨가 달라져요','인사동 서예 체험 꿀팁'],
    thumbnails:['붓 잡는 법 비교','먹 한지 스며드는 슬로우','민화 채색 완성','서예 공방 내부','완성 작품 들어올리기'],
    captions:{youtube:'인사동 서예 체험 — 붓 잡는 법이 핵심이에요 🖌️\n\n세 손가락으로 수직으로 세워 잡기!\n이것만 교정하면 글씨가 달라져요\n\n📍 서울 종로구 인사동 서예·민화 체험\n🖌️ 붓 수직으로 세워 잡기 = 살아있는 선\n\n#인사동서예 #인사동 #서울여행 #민화체험 #전통문화',instagram:'인사동 서예 붓 잡는 법 꿀팁 🖌️\n\n세 손가락으로 수직으로! 연필처럼 잡으면 선이 죽어요 ✨\n이 교정 순간이 서예 체험 하이라이트\n\n📍 서울 종로 인사동\n\n#인사동서예 #인사동 #서울여행 #붓잡는법 #GemKorea',tiktok:'인사동 서예 꿀팁 🖌️ 붓은 세 손가락으로 수직으로 세워야 해요! 연필처럼 잡으면 선이 죽어요 // 이 교정만 하면 글씨가 달라지는 마법 #인사동서예 #인사동 #서울여행'},
    hashtags:{korean:['#한국여행','#서울여행','#인사동','#서예체험','#GemKorea'],place_specific:['#인사동서예','#민화체험','#붓잡는법','#한지서예']}
  },
  {
    experience_id:'EX-JN-FRM-002', experience_name:'보성 녹차 덖음 체험 (대한다원)', category_sub:'발효/음식', region:'전라남도',
    script_30s:'오늘은 보성 대한다원에서 찻잎을 덖었어요. 직접 손으로 솥에 볶는 거예요. 근데 아무도 안 알려주는 게 있어요 — 덖을 때 손이 뜨거워야 해요. 맨손으로 200도 솥에서 찻잎을 볶아야 해요. 그 순간 장인 정신이 뭔지 알게 돼요. 너무 녹차 한 잔이 다르게 보여서 좋았습니다.',
    script_60s:'오늘은 전남 보성 대한다원에서 녹차 덖음 체험을 했어요. 찻잎을 직접 따고 솥에 덖어 말리는 전통 녹차 제조 과정 전체를 체험하는 프로그램이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 덖음 작업이 생각보다 힘들어요. 200도 가까운 솥에서 찻잎을 맨손으로 빠르게 뒤집고 비벼야 해요. 솥이 워낙 뜨거워서 손이 데지 않으려면 리듬감 있게 빠르게 움직여야 해요. 그 작업을 10분만 해봐도 손이 뜨거워요. 보성 장인들은 이 작업을 하루에 수십 킬로씩 해요. 그 순간 내가 마시는 녹차 한 잔 뒤에 얼마나 많은 수고가 있는지 실감해요. 완성된 내 녹차를 우려 마시는 그 순간이 감동적이에요. 너무 녹차 한 잔이 달리 보이는 체험이라서 좋았습니다.',
    secret_tip:'덖음 솥 200도 맨손 작업 — 10분만 해봐도 장인 하루 노동 실감. 완성 내 녹차 우리는 감동 체험. 봄 새잎(4~5월 초) 시즌 방문이 최상품 찻잎 덖음 경험',
    filming_guide:'200도 솥에서 맨손으로 찻잎 빠르게 뒤집는 장면. 완성된 녹차 우리는 연두빛 첫 물. 차밭 풍경 속 솥 피어오르는 증기.',
    broll_ideas:['솥에서 맨손 찻잎 뒤집는 장면','완성 녹차 연두빛 첫 물 우리기','차밭 솥 증기 피어오르기','찻잎 비비는 손 클로즈업','보성 차밭 전경'],
    hooks:['녹차 덖을 때 맨손으로 200도 솥이에요','10분이면 장인 노동 실감해요','내가 만든 녹차 첫 잔 마시는 감동','보성 장인 정신이 뭔지 알게 돼요','녹차 한 잔이 달리 보이는 순간'],
    thumbnails:['솥에서 맨손 찻잎 뒤집기','완성 녹차 연두빛 우리기','차밭 솥 증기','찻잎 비비는 손','보성 차밭 전경'],
    captions:{youtube:'보성 녹차 덖음 체험 — 맨손으로 200도 솥이에요 🍵\n\n10분이면 장인 하루 노동 실감!\n완성 내 녹차 첫 잔 감동\n\n📍 전남 보성군 대한다원\n🍵 봄 새잎 시즌 4~5월 초 최상품\n\n#보성녹차 #덖음체험 #전남여행 #차체험 #장인정신',instagram:'보성 대한다원 녹차 덖음 맨손 200도 솥이에요 🍵\n\n10분이면 장인 정신 뭔지 알게 돼요 ✨\n내가 만든 녹차 첫 잔 마시는 감동\n\n📍 전남 보성 대한다원\n\n#보성녹차 #덖음체험 #전남여행 #GemKorea',tiktok:'보성 녹차 덖음 꿀팁 🍵 맨손으로 200도 솥에서 찻잎 뒤집어야 해요! 10분이면 장인 노동 실감 // 내가 만든 녹차 첫 잔 마시는 감동 #보성녹차 #덖음체험 #전남여행'},
    hashtags:{korean:['#한국여행','#전남여행','#보성여행','#차문화','#GemKorea'],place_specific:['#보성녹차덖음','#대한다원','#맨손덖음','#보성장인']}
  },
  {
    experience_id:'EX-GB-ART-002', experience_name:'안동 하회탈춤 배우기', category_sub:'탈춤/풍물 체험', region:'경상북도',
    script_30s:'오늘은 안동 하회마을에서 탈춤을 배웠어요. 유네스코 무형문화유산이에요. 근데 아무도 안 알려주는 게 있어요 — 탈춤 동작이 마치 조롱하듯 과장되어 있어요. 그게 의도예요. 양반을 조롱하는 동작이에요. 그 의도를 알고 추면 흥이 달라요. 너무 춤이 저항이었다는 게 좋았습니다.',
    script_60s:'오늘은 경북 안동 하회마을 전수관에서 하회별신굿탈놀이 기본 동작을 배웠어요. 유네스코 인류무형문화유산인 하회탈춤이에요. 양반·선비·각시·이매·초랭이 탈을 쓰고 풍자와 해학으로 무대를 여는 탈춤이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 하회탈춤 동작들이 왜 이렇게 과장되고 우스꽝스러운지 이유가 있어요. 조선 시대 서민들이 탈을 쓰면 익명이 보장됐어요. 그 상황에서 양반을 풍자하고 조롱하는 동작을 만든 거예요. 각시탈의 순진한 척 행동, 초랭이탈의 약자처럼 행동하다 갑자기 양반을 골리는 반전 — 이게 다 사회 풍자예요. 그 의도를 알고 동작을 배우면 흥이 올라오는 속도가 달라요. 탈춤이 웃음 뒤에 저항과 해방을 담은 예술이에요. 너무 춤이 저항이었다는 걸 알고 추는 게 달라서 좋았습니다.',
    secret_tip:'탈춤 동작의 사회 풍자 의도 — 익명 보장된 탈 뒤에 양반 조롱·저항. 초랭이 약자→반전 골리기 이해하면 흥 올라오는 속도 달라짐. 공연 후 탈 쓰고 직접 추는 포토타임',
    filming_guide:'탈춤 동작 중 과장된 풍자 동작 클로즈업. 초랭이 반전 골리기 동작. 탈 쓰고 추는 체험자와 전수자 나란히.',
    broll_ideas:['과장된 풍자 탈춤 동작 클로즈업','초랭이 반전 골리기 동작','탈 쓰고 체험자+전수자 나란히','하회마을 배경 전수관 외경','탈춤 마지막 집체 장면'],
    hooks:['탈춤이 왜 이렇게 과장됐는지 알아요?','양반 조롱이 탈춤 동작의 핵심이에요','탈춤 의도 알면 흥이 달리 올라요','초랭이 반전이 저항이에요','춤이 저항이었다는 게 감동이에요'],
    thumbnails:['과장된 풍자 동작 클로즈업','초랭이 반전 골리기','탈 쓰고 나란히 추기','전수관 외경','탈춤 집체 장면'],
    captions:{youtube:'안동 하회탈춤 배우기 — 탈춤 동작이 양반 조롱이에요 😄\n\n의도 알고 추면 흥이 달리 올라요!\n유네스코 탈춤 본고장 하회마을\n\n📍 경북 안동 하회마을 전수관\n😄 공연 후 탈 쓰고 직접 추는 포토타임\n\n#하회탈춤 #안동 #경북여행 #유네스코 #탈춤체험',instagram:'안동 하회탈춤 배우기 탈춤이 저항이었어요 😄\n\n양반 조롱 의도 알고 추면 흥이 달라요 ✨\n유네스코 탈춤 본고장\n\n📍 경북 안동 하회마을\n\n#하회탈춤 #안동여행 #경북 #유네스코 #GemKorea',tiktok:'하회탈춤 꿀팁 😄 탈춤 동작이 다 양반 조롱이에요! 의도 알고 추면 흥 올라오는 속도가 달라요 // 유네스코 탈춤 본고장 안동 하회마을 #하회탈춤 #안동여행 #경북'},
    hashtags:{korean:['#한국여행','#경북여행','#안동여행','#탈춤','#GemKorea'],place_specific:['#하회탈춤배우기','#하회마을전수관','#유네스코탈춤','#양반조롱춤']}
  },
  {
    experience_id:'EX-GG-FAM-002', experience_name:'에버랜드', category_sub:'테마파크', region:'경기도',
    script_30s:'오늘은 에버랜드에 왔어요. 국내 최대 테마파크예요. 근데 아무도 안 알려주는 게 있어요 — T-EXPRESS는 목요일 오전 10시가 대기 줄이 제일 짧아요. 주말 90분 대기가 10분으로 줄어요. 에버랜드 꿀팁 중 최고예요. 너무 어트랙션을 다 탈 수 있어서 좋았습니다.',
    script_60s:'오늘은 경기도 용인 에버랜드에 왔어요. 국내 최대 면적의 복합 테마파크예요. T-EXPRESS·아마존 익스프레스·로스트밸리 사파리 등 다양한 어트랙션과 계절 꽃 축제까지 있어요. 근데 아무도 안 알려주는 꿀팁 하나 — 에버랜드 인기 어트랙션 T-EXPRESS 대기를 최소화하려면 평일 목요일 오전 10시 개장 직후가 최고예요. 주말에는 T-EXPRESS 대기가 90분 이상인데 목요일 오전엔 10~20분이에요. 그리고 개장 직후 T-Express 먼저 타고 역방향으로 이동하면서 다른 어트랙션을 타면 하루에 8~10개 어트랙션을 대기 없이 탈 수 있어요. 에버랜드 앱에서 어트랙션 실시간 대기 시간을 볼 수 있어요. 너무 이 꿀팁으로 하루 어트랙션을 다 탈 수 있어서 좋았습니다.',
    secret_tip:'목요일 오전 10시 개장 직후 = T-EXPRESS 10~20분 대기. 주말 90분 대기와 비교 불가. 개장 직후 T-Express → 역방향 이동 순서로 하루 8~10개 어트랙션 가능. 앱 실시간 대기 확인',
    filming_guide:'T-EXPRESS 탑승 순간 표정 (공포+쾌감). 개장 직후 텅 빈 에버랜드 광장. 계절 꽃 축제 전경.',
    broll_ideas:['T-EXPRESS 탑승 공포+쾌감 표정','개장 직후 텅 빈 광장','계절 꽃 축제 전경','사파리 동물들 클로즈업','에버랜드 야경 조명'],
    hooks:['에버랜드 T-Express 대기 10분으로 줄이는 법','목요일 오전 10시가 황금 타이밍이에요','주말 90분 대기가 10분 돼요','개장 직후 순서가 핵심이에요','에버랜드 꿀팁 중 최고예요'],
    thumbnails:['T-Express 탑승 표정','개장 직후 텅 빈 광장','계절 꽃 축제','사파리 동물들','에버랜드 야경'],
    captions:{youtube:'에버랜드 T-Express 대기 10분으로 줄이는 법 🎡\n\n목요일 오전 10시 개장 직후!\n주말 90분 대기가 10분 됩니다\n\n📍 경기도 용인시 에버랜드\n🎡 에버랜드 앱 실시간 대기 확인 필수\n💡 개장 직후 T-Express → 역방향 이동 순서\n\n#에버랜드 #용인 #경기여행 #T-Express #테마파크꿀팁',instagram:'에버랜드 T-Express 대기 줄이는 꿀팁 🎡\n\n목요일 오전 10시 개장 직후 = 10분 대기 ✨\n주말 90분이랑 완전 달라요\n\n📍 경기 용인 에버랜드\n\n#에버랜드 #용인 #경기여행 #T-Express #GemKorea',tiktok:'에버랜드 꿀팁 🎡 목요일 오전 10시에 가면 T-Express 10분 대기예요! 주말 90분이랑 비교 불가 // 개장 직후 T-Express 먼저 타고 역방향으로 #에버랜드 #용인 #경기여행'},
    hashtags:{korean:['#한국여행','#경기여행','#용인여행','#테마파크','#GemKorea'],place_specific:['#에버랜드','#T-Express','#에버랜드꿀팁','#평일테마파크']}
  },
  {
    experience_id:'EX-GB-ART-001', experience_name:'안동 가야금 국악 체험', category_sub:'문화예술', region:'경상북도',
    script_30s:'오늘은 안동에서 가야금을 배웠어요. 삼국 시대부터 이어온 악기예요. 근데 아무도 안 알려주는 게 있어요 — 가야금 소리는 손 떼는 순간에 나요. 현을 튕기고 나서 손을 뗄 때의 여운이에요. 그 여운을 듣는 법을 배우면 가야금이 달리 들려요. 너무 소리가 끝나는 순간이 시작이라는 게 좋았습니다.',
    script_60s:'오늘은 경북 안동에서 가야금 체험을 했어요. 삼국 시대 가야국의 악사 우륵이 만든 가야금은 2,000년 역사를 가진 한국 대표 현악기예요. 12줄 현을 손가락으로 튕기거나 눌러서 소리를 내요. 근데 아무도 안 알려주는 꿀팁 하나 — 가야금은 현을 튕기는 순간보다 손을 뗀 후의 여운이 핵심이에요. 튕긴 현이 공기를 진동시키며 사라지는 그 여운 소리가 가야금의 생명이에요. 처음엔 소리를 내는 것만 집중하는데, 국악 선생님이 눈을 감고 손 떼고 나서 소리가 사라지는 걸 들으라고 해요. 그 순간 가야금 소리가 완전히 다르게 들려요. 소리가 끝나는 곳에서 음악이 시작되는 역설이에요. 너무 소리의 여운을 듣는 법을 배워서 좋았습니다.',
    secret_tip:'가야금 여운 듣기 — 현 튕긴 후 손 떼고 소리 사라지는 것 듣기. 이 여운이 가야금의 생명. 눈 감고 여운 집중 교습이 체험 하이라이트. 아기장군·소정방·항장 기본 선율 배우기',
    filming_guide:'가야금 현 튕기고 손 떼는 순간 클로즈업 (여운 연출). 눈 감고 여운 듣는 체험자 표정. 12줄 가야금 전체 광각.',
    broll_ideas:['가야금 현 튕기고 손 떼는 클로즈업','눈 감고 여운 듣는 표정','12줄 가야금 전체 광각','국악 선생님 시범 연주','안동 국악 체험장 내부'],
    hooks:['가야금 소리는 손 떼는 순간에 있어요','여운을 듣는 법을 배웠어요','소리 끝나는 곳에서 음악이 시작돼요','2000년 역사 가야금 직접 배웠어요','눈 감고 소리 사라지는 것 들어봐요'],
    thumbnails:['가야금 현 튕기고 손 떼기','눈 감고 여운 듣는 표정','12줄 가야금 광각','선생님 시범 연주','안동 국악 체험장'],
    captions:{youtube:'안동 가야금 체험 — 소리는 손 떼는 순간에 있어요 🎵\n\n여운을 듣는 법을 배웠어요!\n소리 끝나는 곳에서 음악이 시작되는 역설\n\n📍 경북 안동시 가야금 국악 체험\n🎵 2,000년 역사 가야금 12줄 체험\n\n#안동가야금 #안동 #경북여행 #국악체험 #가야금',instagram:'안동 가야금 여운을 듣는 법 배웠어요 🎵\n\n소리 끝나는 곳에서 음악이 시작돼요 ✨\n손 떼는 순간의 여운이 가야금의 생명\n\n📍 경북 안동 가야금 체험\n\n#안동가야금 #안동여행 #경북 #국악 #GemKorea',tiktok:'안동 가야금 꿀팁 🎵 소리는 손 떼는 순간에 있어요! 눈 감고 여운 사라지는 것 듣는 법 배우면 가야금이 달라짐 // 2000년 역사 가야금 #안동가야금 #안동여행 #국악체험'},
    hashtags:{korean:['#한국여행','#경북여행','#안동여행','#국악','#GemKorea'],place_specific:['#안동가야금','#가야금체험','#소리여운','#2000년국악']}
  }
];

// 실행
const exp = JSON.parse(fs.readFileSync(base+'data/experiences.json','utf8'));
const existingExpIds = new Set(exp.experiences.map(e=>e.experience_id));
const toAddExp = newExps.filter(e=>!existingExpIds.has(e.experience_id));
exp.experiences.push(...toAddExp);
exp.total = exp.experiences.length;
exp._updated = now;

const elibObj = JSON.parse(fs.readFileSync(base+'content/experience_library.json','utf8'));
const elib = elibObj.contents;
const existingElibIds = new Set(elib.map(c=>c.experience_id));
const lastNum = elib.reduce((max,c)=>{const n=parseInt(c.id.replace('EC-',''));return n>max?n:max;},0);

let counter = lastNum;
const newShortList = [];

newShorts.forEach(s=>{
  if(existingElibIds.has(s.experience_id)){console.log('이미 있음:', s.experience_id); return;}
  const expItem = exp.experiences.find(e=>e.experience_id===s.experience_id);
  if(!expItem){console.log('장소 없음:', s.experience_id); return;}
  counter++;
  const id = 'EC-'+String(counter).padStart(3,'0');
  if(expItem.shorts_status !== undefined) expItem.shorts_status = 'review_pending';
  newShortList.push({
    id, experience_id:s.experience_id, experience_name:s.experience_name,
    content_type:'experience', category_sub:s.category_sub, region:s.region,
    generated_at:now, content_status:'review_pending',
    script_30s:s.script_30s, script_60s:s.script_60s, secret_tip:s.secret_tip,
    filming_guide:s.filming_guide, broll_ideas:s.broll_ideas,
    hooks:s.hooks, thumbnails:s.thumbnails, captions:s.captions, hashtags:s.hashtags
  });
});

fs.writeFileSync(base+'data/experiences.json', JSON.stringify(exp,null,2),'utf8');
elib.push(...newShortList);
elibObj.contents = elib;
elibObj.total = elib.length;
elibObj.last_updated = now;
fs.writeFileSync(base+'content/experience_library.json', JSON.stringify(elibObj,null,2),'utf8');

const log = JSON.parse(fs.readFileSync(base+'logs/automation_log.json','utf8'));
log.runs.push({time:now, mode:'B+C (통합)', type:'체험학습+체험숏츠', new_collected:toAddExp.length, content_generated:newShortList.length, total_experiences:exp.total, total_experience_shorts:elibObj.total});
fs.writeFileSync(base+'logs/automation_log.json', JSON.stringify(log,null,2),'utf8');

console.log('[B파트] 체험 추가:', toAddExp.length+'개 / 총', exp.total+'개');
console.log('[C파트] 체험 숏츠 생성:', newShortList.length+'개 / 총', elibObj.total+'개');
newShortList.forEach(c=>console.log('  + ['+c.id+']', c.experience_name));
