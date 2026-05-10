const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const now = new Date().toISOString().slice(0,19);

const newExps = [
  {experience_id:'EX-GW-NAT-010',name:'원주 뮤지엄 산 야간 개장',category_main:'문화/체험',category_sub:'야경/야간투어',region_main:'GW',region_sub:'강원특별자치도 원주시',address:'강원특별자치도 원주시 지정면 오크밸리2길 260',lat:37.4048,lng:128.0631,price:'성인 25,000원',duration:'2~3시간',reservation_required:false,target_user:['커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'안도 타다오 설계 뮤지엄 산의 야간 개장 시즌에 방문하는 체험이다. 노출 콘크리트 건물과 야외 수공원이 야간 조명으로 완전히 다른 분위기를 연출하며 제임스 터렐 빛 체험관도 야간에 더욱 몽환적이다.',source_urls:['https://www.museumsan.org/'],data_confidence:'high',tags:['뮤지엄산야간','원주','강원','안도타다오','야경','제임스터렐','야간개장'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'seasonal',operating_hours:'야간 시즌 운영 (홈페이지 확인)',phone:'033-730-9000'},
  {experience_id:'EX-GG-CUL-009',name:'인천 영종도 을왕리 낙조 포차',category_main:'문화/체험',category_sub:'지역 먹거리',region_main:'GG',region_sub:'인천광역시 중구',address:'인천광역시 중구 을왕동 을왕리해수욕장 포차거리',lat:37.4758,lng:126.5411,price:'먹거리 별도',duration:'2~3시간',reservation_required:false,target_user:['커플','개인','청년'],nearby_places:[],related_heritage_ids:[],short_description:'인천공항 옆 영종도 을왕리 포차 거리에서 서해 낙조를 감상하며 해산물과 조개구이를 즐기는 체험이다. 서울에서 1시간, 인천공항 15분 거리의 서해 일몰 포차 명소다.',source_urls:['https://www.icjgss.or.kr/'],data_confidence:'high',tags:['을왕리포차','영종도','인천','서해낙조','조개구이','포차','인천공항근처'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'16:00~23:00',phone:'032-752-4141'},
  {experience_id:'EX-GW-CUL-007',name:'속초 중앙시장 닭강정·오징어 투어',category_main:'문화/체험',category_sub:'지역 먹거리',region_main:'GW',region_sub:'강원특별자치도 속초시',address:'강원특별자치도 속초시 중앙로147번길 12',lat:38.2067,lng:128.5919,price:'먹거리 별도',duration:'1~2시간',reservation_required:false,target_user:['개인','가족','커플'],nearby_places:[],related_heritage_ids:[],short_description:'속초 중앙시장에서 명물 닭강정·오징어순대·아바이순대를 맛보는 로컬 먹거리 투어다. 설악산 등산 후 마무리 코스로 가장 알려진 속초 대표 먹거리 골목이다.',source_urls:['https://www.sokcho.go.kr/'],data_confidence:'high',tags:['속초중앙시장','속초','닭강정','오징어순대','강원','먹거리투어','설악산후'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~21:00',phone:'033-635-3406'},
  {experience_id:'EX-GG-CUL-010',name:'춘천 닭갈비 골목 투어',category_main:'문화/체험',category_sub:'지역 먹거리',region_main:'GG',region_sub:'강원특별자치도 춘천시',address:'강원특별자치도 춘천시 낙원길 일원',lat:37.8813,lng:127.7274,price:'1인 10,000원~',duration:'1~2시간',reservation_required:false,target_user:['개인','커플','가족'],nearby_places:[],related_heritage_ids:[],short_description:'춘천 닭갈비의 원조 춘천 명동 닭갈비 골목에서 철판 닭갈비를 즐기는 먹거리 투어다. 기름 없이 철판에 고추장 양념 닭고기를 볶아 먹는 춘천 닭갈비는 전국 닭갈비의 원조다.',source_urls:['https://www.chuncheon.go.kr/'],data_confidence:'high',tags:['춘천닭갈비','춘천','강원','닭갈비골목','철판닭갈비','원조','먹거리'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'11:00~21:00',phone:'033-251-5572'},
  {experience_id:'EX-JN-CUL-004',name:'전주 초코파이 마을 투어',category_main:'문화/체험',category_sub:'지역 먹거리',region_main:'JN',region_sub:'전라북도 전주시',address:'전라북도 전주시 완산구 한옥마을 초코파이 거리',lat:35.8152,lng:127.1532,price:'먹거리 별도',duration:'1~2시간',reservation_required:false,target_user:['가족','개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'전주 한옥마을 인근 초코파이 거리를 탐방하는 체험이다. 전통 한과 팥앙금에 초코파이를 접목한 전주 한옥마을 대표 먹거리로 원조 집에서 갓 구운 초코파이를 맛볼 수 있다.',source_urls:['https://www.jeonju.go.kr/'],data_confidence:'high',tags:['전주초코파이','전주','전북','한옥마을','초코파이거리','전통간식','맛집'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'10:00~21:00',phone:'063-282-1330'},
  {experience_id:'EX-GG-CUL-011',name:'화성 궁평항 새우젓+낙지 투어',category_main:'문화/체험',category_sub:'지역 먹거리',region_main:'GG',region_sub:'경기도 화성시',address:'경기도 화성시 서신면 궁평항로 1069-13',lat:37.1539,lng:126.6622,price:'먹거리 별도',duration:'2~3시간',reservation_required:false,target_user:['가족','개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'서해 궁평항에서 낙지전골·꽃게찜·새우젓을 맛보는 로컬 해산물 먹거리 투어다. 서울에서 1시간 거리의 서해 어항으로 수도권 가성비 해산물 명소로 알려져 있다.',source_urls:['https://www.hwaseong.go.kr/'],data_confidence:'high',tags:['궁평항','화성','경기','낙지','꽃게','새우젓','서해해산물'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~21:00',phone:'031-357-5074'},
  {experience_id:'EX-GN-CUL-004',name:'통영 이순신공원 야간 야경',category_main:'문화/체험',category_sub:'야경/야간투어',region_main:'GN',region_sub:'경상남도 통영시',address:'경상남도 통영시 여황로 211 (통영 이순신공원)',lat:34.8435,lng:128.4311,price:'무료',duration:'1~2시간',reservation_required:false,target_user:['커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'통영 남쪽 언덕 이순신공원에서 한려해상국립공원 다도해 야경을 감상하는 체험이다. 이순신 장군 동상이 있는 언덕에서 내려다보는 통영항과 강구안 야경이 통영 최고의 야경 뷰포인트다.',source_urls:['https://www.tongyeong.go.kr/'],data_confidence:'high',tags:['통영이순신공원','통영','경남','야경','다도해','한려해상','이순신'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (야경: 일몰~22:00)',phone:'055-650-4681'},
  {experience_id:'EX-JN-CUL-005',name:'목포 꽃게무침 골목 투어',category_main:'문화/체험',category_sub:'지역 먹거리',region_main:'JN',region_sub:'전라남도 목포시',address:'전라남도 목포시 항동 꽃게무침 거리',lat:34.7942,lng:126.3872,price:'2인 40,000원~',duration:'1~2시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'목포 항동 꽃게무침 골목에서 목포식 꽃게무침을 맛보는 먹거리 투어다. 목포 앞바다에서 잡은 꽃게를 고추장·마늘·참기름으로 무친 목포 대표 향토음식으로 밥 한 그릇을 비우게 하는 맛이다.',source_urls:['https://www.mokpo.go.kr/'],data_confidence:'high',tags:['꽃게무침','목포','전남','목포먹거리','향토음식','꽃게','먹거리골목'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'11:00~21:00',phone:'061-270-8432'},
  {experience_id:'EX-GG-CUL-012',name:'이천 도자기 축제+도예 마을 투어',category_main:'문화/체험',category_sub:'역사 체험',region_main:'GG',region_sub:'경기도 이천시',address:'경기도 이천시 사음동 도예마을 일원',lat:37.2707,lng:127.4445,price:'입장 무료 (체험 별도)',duration:'3~5시간',reservation_required:false,target_user:['가족','개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'이천 도예마을 50여 개 도예 공방을 탐방하는 투어다. 고려·조선 왕실 도자기 산지 이천에서 현대 도예가들의 공방을 방문하고 물레 체험을 즐기며 이천 쌀밥 정식으로 마무리하는 코스다.',source_urls:['https://www.icheon.go.kr/'],data_confidence:'high',tags:['이천도예마을','이천','경기','도예공방','왕실도자기','이천쌀밥','물레체험'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00',phone:'031-644-2538'},
  {experience_id:'EX-GW-CUL-008',name:'강릉 커피 거리+순두부 투어',category_main:'문화/체험',category_sub:'지역 먹거리',region_main:'GW',region_sub:'강원특별자치도 강릉시',address:'강원특별자치도 강릉시 안목항 커피거리 일원',lat:37.7695,lng:128.9469,price:'먹거리 별도',duration:'2~3시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'강릉 안목 커피거리에서 강릉 커피 문화를 체험하고 초당동 순두부찌개로 마무리하는 투어다. 강릉은 한국 커피 문화의 발상지로 1986년부터 시작된 안목 커피자판기 문화에서 특화 카페 문화가 시작됐다.',source_urls:['https://www.gn.go.kr/'],data_confidence:'high',tags:['강릉커피거리','강릉','강원','안목커피','초당순두부','커피문화','바리스타'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'10:00~21:00',phone:'033-660-3689'},
  {experience_id:'EX-JB-CUL-007',name:'전주 막걸리 골목 투어',category_main:'문화/체험',category_sub:'지역 먹거리',region_main:'JB',region_sub:'전라북도 전주시',address:'전라북도 전주시 완산구 삼천동 막걸리 골목',lat:35.8044,lng:127.1381,price:'1만원~',duration:'2~3시간',reservation_required:false,target_user:['성인','개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'전주 막걸리 골목에서 전통 방식 막걸리와 안주를 즐기는 체험이다. 막걸리를 주문하면 전통 안주가 계속 나오는 전주만의 문화로 두부김치·빈대떡·파전 등이 막걸리와 함께 제공된다.',source_urls:['https://www.jeonju.go.kr/'],data_confidence:'high',tags:['전주막걸리골목','전주','전북','막걸리','전통안주','파전','빈대떡'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'17:00~23:00',phone:'063-282-1330'},
  {experience_id:'EX-GN-CUL-005',name:'부산 자갈치 시장 새벽 경매 투어',category_main:'문화/체험',category_sub:'역사 체험',region_main:'GN',region_sub:'부산광역시 서구',address:'부산광역시 서구 자갈치해안로 52',lat:35.0969,lng:129.0272,price:'무료 관람',duration:'1~2시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'부산 자갈치시장에서 새벽 5~7시 진행되는 수산물 경매를 관람하는 체험이다. 배에서 막 내린 신선한 해산물이 빠른 속도로 경매되는 장면이 부산 로컬 문화의 가장 생생한 현장이다.',source_urls:['https://www.jagalchi.co.kr/'],data_confidence:'high',tags:['자갈치경매','부산','새벽경매','자갈치시장','수산물','로컬','생생현장'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'새벽 05:00~07:00 (경매)',phone:'051-245-2594'}
];

const newShorts = [
  {
    experience_id:'EX-CB-MUS-001', experience_name:'청주 국립청주박물관', category_sub:'박물관', region:'충청북도',
    script_30s:'오늘은 청주 국립청주박물관에 왔어요. 세계 최초 금속활자 직지심체요절의 고장이에요. 근데 아무도 안 알려주는 게 있어요 — 구텐베르크보다 78년 먼저 금속활자를 만들었는데 원본이 프랑스 국립도서관에 있어요. 그 사실이 전시관에 자세히 나와요. 너무 우리 문화재가 해외에 있다는 게 좋았습니다.',
    script_60s:'오늘은 충북 청주 국립청주박물관에 왔어요. 세계 최초 금속활자본 직지심체요절이 인쇄된 흥덕사 터에 세워진 박물관이에요. 고려 시대 청주 출신 장인들이 만든 금속활자가 구텐베르크보다 78년 앞선 1377년에 만들어진 거예요. 근데 아무도 안 알려주는 꿀팁 하나 — 직지심체요절 원본이 지금 프랑스 국립도서관에 있어요. 1900년 프랑스 외교관 꼴랭 드 쁠랑시가 수집해 가져간 거예요. 한국에는 복제본만 있어요. 박물관 전시관에 그 역사가 자세히 전시되어 있는데, 세계 최초 금속활자본이 해외에 있다는 사실과 반환 운동 역사까지 볼 수 있어요. 너무 우리 문화재가 프랑스 도서관에 있다는 아이러니가 인상 깊어서 좋았습니다.',
    secret_tip:'직지심체요절 원본 프랑스 국립도서관 보관 — 반환 운동 역사 포함 전시. 박물관이 직지 인쇄 현장인 흥덕사 터 위에 세워짐. 활판 인쇄 체험 코너 있음. 수원 화성과 세트 코스',
    filming_guide:'직지심체요절 복제본 활자 클로즈업. 금속활자 제작 과정 재현 전시. 흥덕사 터 박물관 외경.',
    broll_ideas:['직지 복제본 활자 클로즈업','금속활자 제작 과정 재현','흥덕사 터 박물관 외경','활판 인쇄 체험 코너','프랑스 국립도서관 보관 안내'],
    hooks:['구텐베르크보다 78년 먼저 금속활자 만들었어요','직지 원본이 프랑스에 있어요','세계 최초인데 해외에 있는 아이러니','청주가 세계 인쇄 문화의 발원지','직지심체요절 인쇄 현장이 박물관이에요'],
    thumbnails:['직지 복제본 활자 클로즈업','금속활자 제작 재현','박물관 외경','활판 인쇄 체험','프랑스 보관 안내'],
    captions:{youtube:'청주 직지심체요절 — 구텐베르크보다 78년 먼저예요 📖\n\n원본은 프랑스 국립도서관에 있어요!\n세계 최초 금속활자본의 아이러니\n\n📍 충북 청주시 국립청주박물관 (흥덕사 터)\n📖 활판 인쇄 체험 코너 있음\n\n#국립청주박물관 #직지심체요절 #청주 #충북여행 #금속활자',instagram:'청주 직지 — 구텐베르크보다 78년 먼저인데 원본은 프랑스에 📖\n\n세계 최초 금속활자본의 아이러니 ✨\n흥덕사 터에 세워진 박물관\n\n📍 충북 청주 국립청주박물관\n\n#직지심체요절 #청주여행 #충북 #금속활자 #GemKorea',tiktok:'청주 국립청주박물관 꿀팁 📖 구텐베르크보다 78년 먼저 금속활자 만들었는데 원본이 프랑스 국립도서관에 있어요! 우리 문화재 해외 보관의 아이러니 #직지심체요절 #청주여행 #충북'},
    hashtags:{korean:['#한국여행','#충북여행','#청주여행','#역사','#GemKorea'],place_specific:['#국립청주박물관','#직지심체요절','#세계최초금속활자','#흥덕사터']}
  },
  {
    experience_id:'EX-JN-MUS-001', experience_name:'목포 국립해양유물전시관', category_sub:'박물관', region:'전라남도',
    script_30s:'오늘은 목포 국립해양유물전시관에 왔어요. 바다 속에서 건져낸 고려청자가 가득이에요. 근데 아무도 안 알려주는 게 있어요 — 신안 앞바다에서 건진 고려청자 2만여 점이 여기 있어요. 바다 속 700년 잠수한 도자기예요. 너무 바다가 이렇게 지켜줬다는 게 좋았습니다.',
    script_60s:'오늘은 전남 목포 국립해양유물전시관에 왔어요. 신안 앞바다에서 1970~80년대 인양된 원·고려 시대 도자기 2만여 점과 조선 시대 난파선 실물이 전시된 해양 유물 전문 박물관이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 신안 앞바다에서 발견된 고려청자 유물들이 700년 동안 바다 속에 있었어요. 1323년 무역선이 침몰하면서 함께 가라앉은 도자기들이에요. 바다 속 진흙이 도자기를 완벽하게 보존해서 700년 후 꺼내도 빛깔이 살아있어요. 도자기를 육지에서 보관했다면 오히려 남아있지 않았을 거라는 역설이에요. 바다가 보존한 고려청자를 직접 보는 그 순간 700년의 시간이 실감나요. 너무 바다가 최고의 보존 창고였다는 역설이 좋았습니다.',
    secret_tip:'신안 앞바다 1323년 침몰 무역선 — 바다 진흙이 700년 보존. 2만여 점 고려청자 빛깔 살아있음. 바다가 최고 보존 창고라는 역설. 목포 근대역사 거리 세트 코스',
    filming_guide:'700년 바다 속 고려청자 빛깔 클로즈업. 조선 시대 난파선 실물 전체 광각. 해양 유물 발굴 과정 재현 전시.',
    broll_ideas:['700년 고려청자 빛깔 클로즈업','조선 난파선 실물 전체 광각','해양 유물 발굴 재현','신안 앞바다 침몰 지점 지도','목포 해유관 외경'],
    hooks:['700년 바다 속 고려청자 빛깔 살아있어요','바다가 최고 보존 창고라는 역설','1323년 침몰 무역선 유물 여기 있어요','신안 앞바다 고려청자 2만점','바다가 이렇게 지켜준 도자기들'],
    thumbnails:['700년 고려청자 빛깔','조선 난파선 실물','발굴 과정 재현','침몰 지도','목포 해유관 외경'],
    captions:{youtube:'목포 국립해양유물전시관 — 700년 바다 속 고려청자 빛깔 살아있어요 🏺\n\n바다가 최고의 보존 창고라는 역설!\n1323년 신안 앞바다 침몰 무역선 유물\n\n📍 전남 목포시 국립해양유물전시관\n🏺 신안 앞바다 침몰 고려청자 2만여 점\n\n#목포해양유물전시관 #목포 #전남여행 #고려청자 #신안',instagram:'목포 해양유물전시관 700년 바다 속 고려청자 빛깔 살아있어요 🏺\n\n바다가 도자기를 지킨 역설 ✨\n1323년 침몰 무역선 유물\n\n📍 전남 목포 국립해양유물전시관\n\n#목포해양유물 #목포여행 #전남 #고려청자 #GemKorea',tiktok:'목포 해양유물 꿀팁 🏺 700년 바다 속 고려청자가 빛깔 살아있어요! 바다 진흙이 최고의 보존 창고였던 역설 // 1323년 침몰 신안 무역선 유물 2만점 #목포해양유물 #목포여행 #고려청자'},
    hashtags:{korean:['#한국여행','#전남여행','#목포여행','#박물관','#GemKorea'],place_specific:['#목포해양유물전시관','#700년고려청자','#신안침몰무역선','#바다보존역설']}
  },
  {
    experience_id:'EX-DG-MUS-001', experience_name:'대구 국립대구박물관', category_sub:'박물관', region:'대구광역시',
    script_30s:'오늘은 대구 국립대구박물관에 왔어요. 가야·신라 유물이 가득이에요. 근데 아무도 안 알려주는 게 있어요 — 가야 유물이 신라 유물보다 더 화려한 경우가 있어요. 교과서에 묻힌 가야가 사실 대단했어요. 너무 교과서 밖 역사를 알게 돼서 좋았습니다.',
    script_60s:'오늘은 대구 수성구 국립대구박물관에 왔어요. 영남 지역 삼국 시대 유물과 가야·신라 출토품을 전시하는 국립 박물관이에요. 무료예요. 근데 아무도 안 알려주는 꿀팁 하나 — 박물관에 가야 철기 유물이 상당히 많아요. 그런데 가야 유물들이 신라 유물보다 오히려 더 정교하고 화려한 것들이 있어요. 교과서에서 가야는 신라에 흡수된 작은 나라로만 나오는데, 실제 유물을 보면 가야가 400년 동안 한반도 남부를 지배한 독자적인 문명이었음을 알게 돼요. 특히 가야 갑옷과 철제 무기는 당시 동아시아 최고 수준이에요. 교과서 밖의 가야를 만나는 경험이에요. 너무 교과서에서 못 배운 가야의 위대함을 알게 돼서 좋았습니다.',
    secret_tip:'가야 철기 유물 — 신라 유물보다 더 화려하고 정교한 것들 있음. 교과서 밖 400년 가야 문명 실물 확인. 가야 갑옷·철제 무기 동아시아 최고 수준. 무료 입장',
    filming_guide:'가야 갑옷 실물 전체 광각. 가야 철기 유물 세밀한 클로즈업. 가야·신라 유물 비교 전시 구간.',
    broll_ideas:['가야 갑옷 실물 전체 광각','가야 철기 유물 세밀 클로즈업','가야·신라 유물 비교 전시','대구 박물관 야외 전경','가야 문명 지도 설명'],
    hooks:['가야 유물이 신라보다 화려한 게 있어요','교과서 밖 가야 문명 만났어요','400년 가야 왕국이 이렇게 대단해요','가야 갑옷이 동아시아 최고 수준이에요','무료인데 이렇게 볼 게 많아요'],
    thumbnails:['가야 갑옷 광각','가야 철기 클로즈업','가야 신라 비교 전시','박물관 야외 전경','가야 문명 지도'],
    captions:{youtube:'대구 국립박물관 — 가야 유물이 신라보다 화려해요 ⚔️\n\n교과서 밖 400년 가야 문명!\n가야 갑옷 동아시아 최고 수준 무료\n\n📍 대구 수성구 국립대구박물관\n⚔️ 무료 입장 / 가야 철기 집중 관람 추천\n\n#국립대구박물관 #대구여행 #가야역사 #가야문명 #무료박물관',instagram:'대구 국립박물관 가야 유물 신라보다 화려한 거 있어요 ⚔️\n\n교과서 밖 400년 가야 문명 실물 ✨\n가야 갑옷 동아시아 최고\n\n📍 대구 국립대구박물관\n\n#국립대구박물관 #대구여행 #가야역사 #GemKorea',tiktok:'대구 국립박물관 꿀팁 ⚔️ 가야 유물이 신라보다 더 화려한 게 있어요! 교과서에서 못 배운 400년 가야 문명 // 가야 갑옷이 동아시아 최고 수준 무료 #국립대구박물관 #대구여행 #가야역사'},
    hashtags:{korean:['#한국여행','#대구여행','#역사','#가야문명','#GemKorea'],place_specific:['#국립대구박물관','#가야유물','#가야갑옷','#교과서밖가야']}
  },
  {
    experience_id:'EX-US-MUS-001', experience_name:'울산 암각화박물관', category_sub:'박물관', region:'울산광역시',
    script_30s:'오늘은 울산 반구대 암각화 박물관에 왔어요. 7,000년 전 사람들이 바위에 그림을 새긴 곳이에요. 근데 아무도 안 알려주는 게 있어요 — 암각화에 고래잡이 장면이 있어요. 7,000년 전 이미 포경했어요. 인류 최초 포경 기록이에요. 너무 역사가 이렇게 가까이 있어서 좋았습니다.',
    script_60s:'오늘은 울산 울주군 반구대 암각화박물관에 왔어요. 국보 반구대 암각화는 약 7,000년 전 신석기·청동기 시대 사람들이 바위에 새긴 그림이에요. 고래·호랑이·사슴·사람 등 300여 개 형상이 새겨져 있어요. 근데 아무도 안 알려주는 꿀팁 하나 — 반구대 암각화에 고래잡이 장면이 있어요. 배를 타고 작살로 고래를 잡는 모습이 7,000년 전에 이미 새겨져 있어요. 이게 인류 역사에서 가장 오래된 포경 기록이에요. 고래를 잡는 기술이 7,000년 전에 있었다는 게 놀라운데, 현재 울산이 고래 도시인 것도 이 역사와 연결돼요. 박물관에서 실물 크기 복제본으로 가까이 볼 수 있어요. 너무 7,000년 전 사람들의 일상이 바위에 살아있어서 좋았습니다.',
    secret_tip:'반구대 암각화 고래잡이 장면 = 인류 최초 포경 기록 — 7,000년 전 작살 고래잡이. 울산이 고래 도시인 역사적 배경. 박물관 실물 크기 복제본으로 상세 관찰 가능. 무료 입장',
    filming_guide:'암각화 복제본 고래잡이 장면 클로즈업. 7,000년 전 선사인 생활 재현 전시. 태화강 반구대 배경 박물관 외경.',
    broll_ideas:['암각화 복제본 고래잡이 장면 클로즈업','7,000년 전 생활 재현 전시','태화강 반구대 배경','암각화 전체 형상 파노라마','인류 최초 포경 기록 안내판'],
    hooks:['인류 최초 포경 기록이 울산에 있어요','7,000년 전 고래잡이 장면이 바위에','울산이 고래 도시인 이유가 여기 있어요','반구대 암각화 꿀팁 있어요','7,000년 전 사람들 일상이 바위에'],
    thumbnails:['암각화 고래잡이 클로즈업','7,000년 전 생활 재현','태화강 반구대','암각화 전체 파노라마','포경 기록 안내판'],
    captions:{youtube:'울산 반구대 암각화 — 인류 최초 포경 기록이에요 🐳\n\n7,000년 전 고래잡이 장면이 바위에!\n울산이 고래 도시인 이유\n\n📍 울산광역시 울주군 반구대 암각화박물관\n🐳 무료 입장 / 실물 크기 복제본 상세 관찰\n\n#반구대암각화 #울산여행 #인류최초포경 #선사시대 #암각화',instagram:'울산 반구대 암각화 7,000년 전 인류 최초 포경 기록이에요 🐳\n\n바위에 고래잡이 장면이 살아있어요 ✨\n울산 고래 도시의 역사적 배경\n\n📍 울산 울주군 반구대 암각화\n\n#반구대암각화 #울산여행 #고래포경 #선사시대 #GemKorea',tiktok:'울산 반구대 꿀팁 🐳 7,000년 전 고래잡이 장면이 바위에 새겨져 있어요! 인류 최초 포경 기록 // 울산이 고래 도시인 7,000년 역사 #반구대암각화 #울산여행 #인류최초포경'},
    hashtags:{korean:['#한국여행','#울산여행','#선사시대','#역사','#GemKorea'],place_specific:['#반구대암각화','#인류최초포경기록','#7000년전','#울산고래도시']}
  },
  {
    experience_id:'EX-JJ-OCN-003', experience_name:'제주 카약·패들보드 체험 (함덕)', category_sub:'해양 레포츠', region:'제주특별자치도',
    script_30s:'오늘은 제주 함덕 해변에서 패들보드를 탔어요. 에메랄드빛 바다 위예요. 근데 아무도 안 알려주는 게 있어요 — 패들보드 위에서 바닥이 다 보여요. 투명 바다 위에 서있는 기분이에요. 너무 하늘이랑 바다 사이에 있는 느낌이라서 좋았습니다.',
    script_60s:'오늘은 제주 함덕 서우봉 해변에서 카약과 스탠드업 패들보드(SUP)를 탔어요. 함덕 해변 에메랄드빛 바다가 수심 1~2m에서 완전히 투명해요. 근데 아무도 안 알려주는 꿀팁 하나 — 패들보드 위에 서면 발아래 바다가 완전히 보여요. 하얀 모래 바닥이 투명하게 보이는 바다 위에 서있는 거예요. 그 느낌이 마치 공중에 떠있는 것 같아요. 특히 아침 일찍 바람이 없을 때 바다 수면이 거울처럼 잔잔해서 패들보드 위에서 하늘과 바다가 구분이 안 되는 순간이 있어요. 그 순간이 제주 패들보드 최고의 경험이에요. 초보자도 강습 30분이면 혼자 설 수 있어요. 너무 하늘과 바다 사이에 서있는 그 감각이라서 좋았습니다.',
    secret_tip:'이른 아침 바람 없을 때 — 수면 거울같이 잔잔해 하늘과 바다 구분 안 되는 순간. 패들보드 위 투명 바닥 공중 부양 느낌. 초보 30분 강습 후 혼자 탑승 가능. 함덕 서우봉 일출과 세트',
    filming_guide:'패들보드 위에서 투명 바닥 내려다보는 시선. 잔잔한 수면에 하늘이 반사되는 구도. SUP 위에서 선 전신 광각.',
    broll_ideas:['패들보드 위 투명 바닥 내려다보기','잔잔한 수면 하늘 반사 구도','SUP 위에서 선 전신 광각','함덕 에메랄드 바다 전경','초보 강습 넘어지는 장면'],
    hooks:['패들보드 위에서 바닥이 다 보여요','공중에 떠있는 것 같은 그 느낌','하늘과 바다 구분 안 되는 순간','함덕 투명 바다 위 패들보드 체험','이른 아침이 제주 패들보드 최고예요'],
    thumbnails:['패들보드 위 투명 바닥 시선','잔잔한 수면 하늘 반사','SUP 전신 광각','함덕 에메랄드 전경','초보 강습 넘어지기'],
    captions:{youtube:'제주 함덕 패들보드 — 발아래 바닥이 다 보여요 🌊\n\n하늘과 바다 구분 안 되는 순간!\n이른 아침 잔잔한 수면이 최고\n\n📍 제주 함덕 서우봉 해변\n🌊 이른 아침 잔잔할 때 = 거울 수면 최고\n\n#제주패들보드 #함덕해변 #제주여행 #SUP #에메랄드바다',instagram:'제주 함덕 패들보드 위에서 바닥 다 보여요 🌊\n\n하늘이랑 바다 구분 안 되는 순간 ✨\n이른 아침 잔잔할 때가 최고\n\n📍 제주 함덕 서우봉 해변\n\n#제주패들보드 #함덕 #제주여행 #SUP #GemKorea',tiktok:'제주 함덕 패들보드 꿀팁 🌊 이른 아침 잔잔할 때 수면이 거울같아요! 하늘이랑 바다 구분 안 되는 그 순간 // 발아래 투명 바닥 보이는 공중 부양 느낌 #제주패들보드 #함덕 #제주여행'},
    hashtags:{korean:['#한국여행','#제주여행','#함덕','#해양레포츠','#GemKorea'],place_specific:['#제주패들보드','#함덕서우봉','#투명바다SUP','#이른아침잔잔']}
  },
  {
    experience_id:'EX-JJ-FES-001', experience_name:'제주 정월대보름 들불축제', category_sub:'축제', region:'제주특별자치도',
    script_30s:'오늘은 제주 들불축제에 왔어요. 새별오름 전체가 불길에 휩싸여요. 근데 아무도 안 알려주는 게 있어요 — 불이 오름을 타고 올라갈 때 기류가 바뀌어요. 뜨거운 공기가 얼굴에 와요. 그 순간이 가장 생생한 체험이에요. 너무 불이 살아있는 것 같아서 좋았습니다.',
    script_60s:'오늘은 제주 애월 새별오름 들불축제에 왔어요. 매년 음력 정월대보름에 열리는 제주 전통 불 놓기 행사예요. 오름 전체에 불을 놓아 잡초와 해충을 태우는 제주 방목지 전통 의례인데, 이제 문화 축제로 발전했어요. 근데 아무도 안 알려주는 꿀팁 하나 — 들불 행사가 시작되면 새별오름 아래쪽에서 보는 게 가장 좋아요. 불이 오름을 타고 올라갈 때 뜨거운 기류가 아래로 흘러와요. 그 열기가 얼굴에 닿는 순간 진짜 불이 살아있다는 게 실감나요. 그리고 불빛이 하늘을 물들이는 장면을 촬영하려면 오름 뒤쪽에서 역광으로 찍으면 불꽃 실루엣이 나와요. 들불 시작 전 소원 풍등 날리기도 꼭 해야 해요. 너무 불의 에너지가 직접 전달되는 체험이라서 좋았습니다.',
    secret_tip:'새별오름 아래쪽 위치 = 불 기류 열기 직접 체험. 오름 뒤쪽 역광 = 불꽃 실루엣 사진. 들불 시작 전 소원 풍등 날리기 필수. 매년 2~3월 정월대보름 전후',
    filming_guide:'오름 전체 불길 파노라마 광각. 불 기류 열기 느끼는 표정 클로즈업. 소원 풍등이 밤하늘로 올라가는 장면.',
    broll_ideas:['오름 전체 불길 파노라마','불 기류 열기 표정 클로즈업','소원 풍등 밤하늘 올라가기','들불 시작 전 점화 장면','새별오름 전체 실루엣'],
    hooks:['오름 전체가 불길에 휩싸여요','불 열기가 얼굴에 닿는 그 순간','소원 풍등 꼭 날려야 해요','제주 정월대보름 들불축제 꿀팁','불꽃 실루엣 사진 찍는 법'],
    thumbnails:['오름 전체 불길 파노라마','열기 표정 클로즈업','소원 풍등 밤하늘','들불 점화 장면','새별오름 실루엣'],
    captions:{youtube:'제주 들불축제 — 오름이 불길에 휩싸여요 🔥\n\n불 열기가 얼굴에 닿는 그 순간!\n소원 풍등+들불 제주 정월대보름 축제\n\n📍 제주 애월읍 새별오름\n🔥 매년 2~3월 정월대보름 전후\n💡 오름 아래쪽 = 불 기류 열기 직접 체험\n\n#제주들불축제 #새별오름 #제주여행 #정월대보름 #들불',instagram:'제주 들불축제 오름이 불길에 휩싸여요 🔥\n\n불 열기가 얼굴에 닿는 순간 진짜예요 ✨\n소원 풍등까지\n\n📍 제주 새별오름\n\n#제주들불축제 #새별오름 #제주여행 #정월대보름 #GemKorea',tiktok:'제주 들불축제 꿀팁 🔥 오름 아래쪽에 있으면 불 기류 열기가 얼굴에 닿아요! 오름 전체가 불에 타는 그 장관 // 소원 풍등도 꼭 날리세요 #제주들불축제 #새별오름 #제주여행'},
    hashtags:{korean:['#한국여행','#제주여행','#축제','#정월대보름','#GemKorea'],place_specific:['#제주들불축제','#새별오름','#소원풍등','#제주방목지전통']}
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
