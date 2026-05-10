const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const now = new Date().toISOString().slice(0,19);

const newExps = [
  {experience_id:'EX-GN-NAT-017',name:'사천 항공우주박물관 체험',category_main:'문화/체험',category_sub:'박물관',region_main:'GN',region_sub:'경상남도 사천시',address:'경상남도 사천시 사남면 공단1로 200',lat:35.0833,lng:128.1583,price:'성인 6,000원',duration:'2~3시간',reservation_required:false,target_user:['가족','어린이','개인'],nearby_places:[],related_heritage_ids:[],short_description:'한국 항공 산업의 성지 사천에 위치한 항공우주박물관이다. 실물 전투기·헬기·우주 로켓 모형과 함께 비행 시뮬레이터 체험이 가능하며 KAI(한국항공우주산업) 공장 인근이다.',source_urls:['https://www.aerospacemuseum.or.kr/'],data_confidence:'high',tags:['항공우주박물관','사천','경남','전투기','헬기','비행시뮬레이터','어린이'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00 (월요일 휴관)',phone:'055-851-6565'},
  {experience_id:'EX-GW-NAT-020',name:'속초 아바이마을+영금정 투어',category_main:'문화/체험',category_sub:'역사 체험',region_main:'GW',region_sub:'강원특별자치도 속초시',address:'강원특별자치도 속초시 영금정로 43',lat:38.2146,lng:128.5878,price:'무료',duration:'1~2시간',reservation_required:false,target_user:['커플','개인','외국인'],nearby_places:[],related_heritage_ids:[],short_description:'속초 영금정 바위에서 동해 파도와 함께 일출을 감상하는 체험이다. 영금정은 파도가 바위에 부딪힐 때 거문고 소리처럼 들린다는 뜻으로 속초 도심 최고의 일출 명소다.',source_urls:['https://www.sokcho.go.kr/'],data_confidence:'high',tags:['영금정','속초','강원','동해일출','파도소리','설악산뷰','아바이마을'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (무료)',phone:'033-639-2690'},
  {experience_id:'EX-JN-NAT-020',name:'강진 월출산 천황사 코스',category_main:'문화/체험',category_sub:'자연체험',region_main:'JN',region_sub:'전라남도 강진군',address:'전라남도 강진군 성전면 월하리 천황사 입구',lat:34.7442,lng:126.7753,price:'성인 1,000원',duration:'3~4시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'월출산 국립공원 천황사 입구에서 구름다리까지 이어지는 바위 협곡 탐방 코스다. 가파른 화강암 바위를 오르는 난이도 있는 코스로 구름다리에서 전남 남도 전체가 내려다보이는 전망이 장관이다.',source_urls:['https://woulchulsan.knps.or.kr/'],data_confidence:'high',tags:['월출산','강진','전남','천황사','구름다리','바위협곡','남도전망'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'일출~16:00',phone:'061-473-5211'},
  {experience_id:'EX-GG-NAT-021',name:'파주 장릉+율곡수목원 코스',category_main:'문화/체험',category_sub:'역사 체험',region_main:'GG',region_sub:'경기도 파주시',address:'경기도 파주시 탄현면 장릉로 90',lat:37.7514,lng:126.7278,price:'성인 1,000원',duration:'2~3시간',reservation_required:false,target_user:['가족','개인'],nearby_places:[],related_heritage_ids:[],short_description:'인조대왕 장릉과 율곡수목원을 함께 탐방하는 파주 역사+자연 하루 코스다. 유네스코 세계유산 조선 왕릉 장릉에서 인조 역사를 배우고 인근 율곡수목원의 계절 꽃을 감상한다.',source_urls:['https://royaltombs.cha.go.kr/'],data_confidence:'high',tags:['장릉','파주','경기','인조','조선왕릉','유네스코','율곡수목원'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00 (월요일 휴관)',phone:'031-945-9242'},
  {experience_id:'EX-GG-NAT-022',name:'인천 송도 해돋이 공원 야경',category_main:'문화/체험',category_sub:'야경/야간투어',region_main:'GG',region_sub:'인천광역시 연수구',address:'인천광역시 연수구 컨벤시아대로 160 (센트럴파크)',lat:37.3906,lng:126.6463,price:'무료',duration:'1~2시간',reservation_required:false,target_user:['커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'인천 송도 국제도시 센트럴파크에서 야경을 감상하는 체험이다. 인천 스카이라인과 센트럴파크 수변이 어우러지는 야경이 아름다우며 야간 보트 투어도 운영된다.',source_urls:['https://www.incheon.go.kr/'],data_confidence:'high',tags:['송도센트럴파크','인천','송도','야경','야간보트','국제도시','수변'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (무료)',phone:'032-260-4630'},
  {experience_id:'EX-JN-NAT-021',name:'광양 섬진강 재첩국 투어',category_main:'문화/체험',category_sub:'지역 먹거리',region_main:'JN',region_sub:'전라남도 광양시',address:'전라남도 광양시 광양읍 섬진강변 재첩국 거리',lat:34.9878,lng:127.6278,price:'1만원~',duration:'1~2시간',reservation_required:false,target_user:['개인','커플','가족'],nearby_places:[],related_heritage_ids:[],short_description:'섬진강 명물 재첩국 골목에서 아침 재첩국을 즐기는 먹거리 투어다. 새벽부터 갓 잡은 재첩으로 끓인 맑은 재첩국이 섬진강 여행의 완벽한 마무리를 장식한다.',source_urls:['https://www.gwangyang.go.kr/'],data_confidence:'high',tags:['재첩국','광양','전남','섬진강','재첩국거리','아침식사','조개국'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'06:00~15:00',phone:'061-797-3721'},
  {experience_id:'EX-GG-NAT-023',name:'용인 에버랜드 로스트밸리 사파리',category_main:'문화/체험',category_sub:'테마파크',region_main:'GG',region_sub:'경기도 용인시',address:'경기도 용인시 처인구 포곡읍 에버랜드로 199',lat:37.2928,lng:127.2014,price:'에버랜드 입장 포함',duration:'1시간',reservation_required:false,target_user:['가족','어린이'],nearby_places:[],related_heritage_ids:[],short_description:'에버랜드 안 로스트밸리 사파리에서 코끼리·기린·하마·악어 등 동물들과 트램을 타고 가까이서 만나는 체험이다. 동물이 트램 위로 먹이를 먹으러 오는 순간이 하이라이트다.',source_urls:['https://www.everland.com/'],data_confidence:'high',tags:['로스트밸리','에버랜드','용인','경기','사파리','기린','코끼리'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'에버랜드 운영 시간 동일',phone:'031-320-5000'},
  {experience_id:'EX-GW-NAT-021',name:'강릉 강문 솟대다리 야경',category_main:'문화/체험',category_sub:'야경/야간투어',region_main:'GW',region_sub:'강원특별자치도 강릉시',address:'강원특별자치도 강릉시 강문동 솟대다리',lat:37.7800,lng:128.9453,price:'무료',duration:'1시간',reservation_required:false,target_user:['커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'강릉 경포해변과 경포호를 연결하는 솟대다리에서 야경을 감상하는 체험이다. 솟대 조형물들이 조명을 받아 빛나고 양쪽으로 경포해변 동해와 경포호가 동시에 보이는 강릉 야경 명소다.',source_urls:['https://www.gn.go.kr/'],data_confidence:'high',tags:['솟대다리','강릉','강원','야경','경포호','경포해변','무료'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (야경: 일몰~22:00)',phone:'033-640-4533'},
  {experience_id:'EX-JN-NAT-022',name:'무주 반딧불 축제 체험',category_main:'문화/체험',category_sub:'축제',region_main:'JN',region_sub:'전라북도 무주군',address:'전라북도 무주군 설천면 무주리조트 일원',lat:35.9064,lng:127.6289,price:'성인 10,000원~',duration:'2~3시간',reservation_required:true,target_user:['가족','커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'매년 8~9월 무주에서 열리는 반딧불 축제에서 청정 자연 지표종 반딧불이를 관찰하는 체험이다. 무주 남대천에서 반딧불이가 날아다니는 장관을 야간에 관찰하고 반딧불이 생태 교육을 받는다.',source_urls:['https://www.firefly.or.kr/'],data_confidence:'high',tags:['무주반딧불축제','무주','전북','반딧불이','야간자연','생태관찰','청정자연'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'매년 8~9월 (1주일간)',phone:'063-320-2062'},
  {experience_id:'EX-GN-NAT-018',name:'거제 이수도 스노클링 체험',category_main:'문화/체험',category_sub:'해양 레포츠',region_main:'GN',region_sub:'경상남도 거제시',address:'경상남도 거제시 남부면 이수도',lat:34.8242,lng:128.6686,price:'1인 40,000원~',duration:'2~3시간',reservation_required:true,target_user:['개인','커플','청년'],nearby_places:[],related_heritage_ids:[],short_description:'거제도 남쪽 이수도 앞바다에서 스노클링을 즐기는 해양 레포츠 체험이다. 남해안 최고의 투명도를 자랑하는 이수도 해역에서 산호초와 열대어를 관찰하며 서해와는 다른 남해 바닷속 세계를 탐험한다.',source_urls:['https://www.geoje.go.kr/'],data_confidence:'high',tags:['이수도스노클링','거제','경남','스노클링','산호초','남해','해양레포츠'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'seasonal',operating_hours:'6~9월 (예약 필수)',phone:'055-639-3003'},
  {experience_id:'EX-JJ-NAT-006',name:'제주 수월봉 지질 트레킹',category_main:'문화/체험',category_sub:'자연체험',region_main:'JJ',region_sub:'제주특별자치도 제주시',address:'제주특별자치도 제주시 한경면 고산리 수월봉',lat:33.2981,lng:126.1639,price:'무료',duration:'1~2시간',reservation_required:false,target_user:['개인','커플','가족'],nearby_places:[],related_heritage_ids:[],short_description:'유네스코 세계지질공원 수월봉 화산 응회환을 탐방하는 지질 트레킹이다. 2만 5천 년 전 화산 폭발로 형성된 절벽 단면이 지질학 교과서 같은 구조를 보여주며 차귀도와 서해 낙조가 함께 보인다.',source_urls:['https://www.visitjeju.net/'],data_confidence:'high',tags:['수월봉','제주','유네스코','화산응회환','차귀도','서해낙조','지질공원'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (무료)',phone:'064-728-3988'},
  {experience_id:'EX-GG-NAT-024',name:'양주 장흥 아트파크 자연+예술',category_main:'문화/체험',category_sub:'미술관',region_main:'GG',region_sub:'경기도 양주시',address:'경기도 양주시 장흥면 권율로 117',lat:37.8093,lng:126.9872,price:'성인 5,000원',duration:'2~3시간',reservation_required:false,target_user:['커플','개인','가족'],nearby_places:[],related_heritage_ids:[],short_description:'경기도 양주 자연 속에 조성된 장흥 아트파크에서 야외 조각 작품을 감상하는 체험이다. 넓은 자연 공원에 한국 대표 조각가들의 작품이 설치되어 있으며 계절마다 다른 자연과 예술의 조화를 즐길 수 있다.',source_urls:['https://www.jangheungartpark.org/'],data_confidence:'high',tags:['장흥아트파크','양주','경기','야외조각','자연미술관','조각공원','드라이브'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'10:00~18:00 (월요일 휴관)',phone:'031-855-0048'}
];

const newShorts = [
  {
    experience_id:'EX-GW-EQU-001', experience_name:'홍천 승마 체험 (홍천강 승마클럽)', category_sub:'승마/레포츠', region:'강원도',
    script_30s:'오늘은 강원도 홍천강 변에서 승마를 했어요. 강변 풍경이 배경이에요. 근데 아무도 안 알려주는 게 있어요 — 말은 눈이 측면에 달려 있어요. 앞이 아니라 거의 360도로 봐요. 그래서 갑자기 움직이면 놀라요. 그 사실을 알면 말과 소통하는 법이 달라져요. 너무 동물과 소통하는 법을 배워서 좋았습니다.',
    script_60s:'오늘은 강원도 홍천 홍천강 변 승마장에서 승마 체험을 했어요. 홍천강을 배경으로 말을 타는 경험이에요. 전문 교관이 기초 탑승·방향 조절·속보까지 가르쳐줘요. 근데 아무도 안 알려주는 꿀팁 하나 — 말을 처음 타는 사람들이 가장 많이 하는 실수가 말 앞에서 갑자기 움직이는 거예요. 말은 눈이 옆에 달려있어서 정면이 사각지대예요. 갑자기 정면에서 나타나면 말이 깜짝 놀라요. 말에게 가까이 다가갈 때는 옆쪽에서 천천히 목소리를 내면서 접근해야 해요. 이걸 알면 말이 놀라는 일 없이 자연스럽게 교감할 수 있어요. 홍천강 수변 배경으로 달리는 승마 체험이 강원도에서 가장 아름다운 코스 중 하나예요. 너무 말의 시각 구조를 알게 되어서 좋았습니다.',
    secret_tip:'말 사각지대 = 정면 — 갑자기 정면 접근 금지. 옆에서 천천히 목소리와 함께 접근. 이 방법이 말과 교감 핵심. 홍천강 배경 수변 코스가 강원 최고 경관 승마',
    filming_guide:'홍천강 배경 승마 전경 광각. 말 눈 클로즈업 (측면 위치). 교관 말 접근법 시범 장면.',
    broll_ideas:['홍천강 배경 승마 전경','말 눈 측면 위치 클로즈업','교관 접근법 시범','승마 중 홍천강 경치','말 갈기 클로즈업'],
    hooks:['말 정면이 사각지대예요','갑자기 앞에서 다가가면 안 돼요','옆에서 목소리와 함께 접근해야 해요','이걸 알면 말과 교감이 달라져요','홍천강 배경 강원도 최고 승마 코스'],
    thumbnails:['홍천강 배경 승마','말 눈 측면 클로즈업','교관 접근법 시범','홍천강 승마 경치','말 갈기 클로즈업'],
    captions:{youtube:'홍천 승마 체험 — 말 정면이 사각지대예요 🐎\n\n갑자기 앞에서 다가가면 안 돼요!\n옆에서 목소리와 함께 접근이 핵심\n\n📍 강원도 홍천군 홍천강 승마클럽\n🐎 홍천강 수변 배경 코스 최고\n\n#홍천승마 #홍천 #강원도여행 #승마체험 #말소통',instagram:'홍천강 승마 말 정면이 사각지대예요 🐎\n\n갑자기 앞에서 다가가면 놀라요 ✨\n옆에서 천천히 접근이 핵심\n\n📍 강원 홍천 홍천강 승마\n\n#홍천승마 #홍천여행 #강원도 #승마 #GemKorea',tiktok:'홍천 승마 꿀팁 🐎 말 정면이 사각지대예요! 갑자기 앞에서 다가가면 놀라서 위험해요 // 옆에서 목소리와 함께 접근하면 자연스럽게 교감 가능 #홍천승마 #홍천여행 #강원도'},
    hashtags:{korean:['#한국여행','#강원도여행','#홍천여행','#승마','#GemKorea'],place_specific:['#홍천승마','#말사각지대','#홍천강수변승마','#말교감법']}
  },
  {
    experience_id:'EX-GG-CAM-001', experience_name:'가평 글램핑 (북한강변)', category_sub:'캠핑/글램핑', region:'경기도',
    script_30s:'오늘은 가평 북한강 글램핑을 했어요. 텐트 안에 침대·에어컨까지 있어요. 근데 아무도 안 알려주는 게 있어요 — 글램핑 위치마다 뷰가 달라요. 강변 정면이 아닌 숲쪽 텐트가 새벽에 새소리가 들려요. 그 위치가 더 힐링이에요. 너무 위치 선택이 글램핑의 전부라서 좋았습니다.',
    script_60s:'오늘은 경기도 가평 북한강변 글램핑에 왔어요. 서울에서 1시간 30분, 북한강이 바로 앞에 펼쳐지는 글램핑이에요. 텐트 안에 침대·에어컨·조명이 갖춰져 있어서 캠핑 장비 없이도 즐길 수 있어요. 근데 아무도 안 알려주는 꿀팁 하나 — 글램핑 위치 선택이 핵심이에요. 같은 글램핑장이어도 텐트 위치마다 뷰가 완전히 달라요. 강변 정면 텐트는 경치가 좋지만 새벽에 강 소음이 들릴 수 있어요. 반면 숲쪽 텐트는 강이 덜 보이지만 새벽에 새소리만 들리고 완전히 조용해요. 어느 것이 좋은지는 개인 취향이지만, 진짜 힐링을 원한다면 숲쪽 텐트가 더 좋아요. 예약할 때 텐트 위치를 물어보거나 선택할 수 있는 곳을 고르면 좋아요. 너무 위치 선택 하나가 경험을 바꾼다는 게 좋았습니다.',
    secret_tip:'텐트 위치 선택 = 경험 결정 — 강변 정면(경치좋음, 강소음) vs 숲쪽(새소리, 조용). 예약 시 텐트 위치 선택 가능한 곳 선호. 가평 아침고요수목원+자라섬 세트 코스',
    filming_guide:'북한강 배경 글램핑 텐트 전경. 새벽 안개 낀 북한강 침대에서 바라보는 뷰. 모닥불과 북한강 야경.',
    broll_ideas:['북한강 배경 글램핑 텐트 전경','새벽 안개 낀 북한강 침대에서 뷰','모닥불과 북한강 야경','글램핑 내부 편의시설','가평 자전거 세트 코스'],
    hooks:['글램핑 위치 선택이 경험 결정해요','숲쪽 텐트가 진짜 힐링이에요','강변 텐트와 숲쪽 텐트 차이','새벽 새소리만 들리는 그 힐링','가평 글램핑 꿀팁 있어요'],
    thumbnails:['북한강 배경 글램핑 텐트','새벽 안개 침대 뷰','모닥불 야경','글램핑 내부 편의시설','가평 자전거 코스'],
    captions:{youtube:'가평 북한강 글램핑 — 텐트 위치 선택이 핵심이에요 🏕️\n\n숲쪽 텐트가 진짜 힐링!\n새벽 새소리만 들리는 그 고요함\n\n📍 경기도 가평군 북한강변 글램핑\n🏕️ 예약 시 텐트 위치 선택 가능한 곳 추천\n\n#가평글램핑 #가평 #경기여행 #글램핑 #북한강',instagram:'가평 글램핑 텐트 위치가 경험 결정해요 🏕️\n\n숲쪽 텐트 새벽 새소리만 들리는 진짜 힐링 ✨\n서울 1시간 30분 북한강\n\n📍 경기 가평 북한강 글램핑\n\n#가평글램핑 #가평여행 #경기 #글램핑 #GemKorea',tiktok:'가평 글램핑 꿀팁 🏕️ 숲쪽 텐트 선택하면 새벽에 새소리만 들려요! 강변 텐트는 경치 좋지만 소음 있을 수 있어요 // 예약 시 위치 선택 가능한 곳 고르세요 #가평글램핑 #가평여행 #경기'},
    hashtags:{korean:['#한국여행','#경기여행','#가평여행','#글램핑','#GemKorea'],place_specific:['#가평글램핑','#북한강글램핑','#텐트위치선택','#숲쪽텐트']}
  },
  {
    experience_id:'EX-GW-CAM-001', experience_name:'양양 서핑 글램핑', category_sub:'캠핑/글램핑', region:'강원도',
    script_30s:'오늘은 양양 인구해변 서핑 글램핑을 했어요. 파도 소리 들으며 잠드는 거예요. 근데 아무도 안 알려주는 게 있어요 — 이른 아침 아무도 없는 해변에서 커피 한 잔이 글램핑 최고의 순간이에요. 파도 소리+새벽 동해+커피 조합이에요. 너무 그 아침이 진짜라서 좋았습니다.',
    script_60s:'오늘은 강원도 양양 인구해변 서핑 글램핑에 왔어요. 해변 바로 옆 글램핑에서 파도 소리를 들으며 자는 경험이에요. 서울에서 2시간, 서핑+글램핑 세트로 즐기는 동해안 최고의 청년 여행 코스예요. 근데 아무도 안 알려주는 꿀팁 하나 — 글램핑 최고의 순간이 이른 아침이에요. 아직 다른 서퍼들이 바다에 나오기 전 새벽 6~7시에 해변에 나가면 아무도 없는 동해가 눈앞에 펼쳐져요. 그 시간 텐트 앞 의자에 앉아 커피 한 잔 마시면서 파도 소리를 듣는 경험이 서핑 글램핑의 진짜 핵심이에요. 낮에 서핑 강습을 받고 저녁에 모닥불·맥주, 그리고 새벽 아무도 없는 해변 — 이 흐름이 완벽한 양양 서핑 글램핑 코스예요. 너무 아무도 없는 동해 새벽이 진짜라서 좋았습니다.',
    secret_tip:'새벽 6~7시 아무도 없는 해변+커피 — 서핑 글램핑 진짜 핵심 순간. 서퍼들 나오기 전 조용한 동해 독점. 서핑 강습+글램핑 패키지가 가장 효율적',
    filming_guide:'새벽 아무도 없는 해변 커피 마시는 장면. 파도 소리 배경 글램핑 텐트 내부. 서핑 후 해변 글램핑 복귀 장면.',
    broll_ideas:['새벽 아무도 없는 해변 커피','파도 소리 글램핑 텐트 내부','서핑 후 해변 글램핑 복귀','양양 인구해변 서핑 전경','모닥불과 맥주 저녁'],
    hooks:['새벽 아무도 없는 해변이 진짜예요','파도 소리+커피+동해 새벽 조합','서핑 글램핑 진짜 순간이 이거예요','서핑 강습+글램핑 패키지 추천','양양 서핑 글램핑 꿀팁'],
    thumbnails:['새벽 해변 커피 장면','글램핑 텐트 내부','서핑 후 해변 복귀','양양 인구해변 전경','모닥불 저녁'],
    captions:{youtube:'양양 서핑 글램핑 — 새벽 아무도 없는 해변이 진짜예요 🏄\n\n파도 소리+커피+동해 새벽 조합!\n서핑 강습+글램핑 패키지 추천\n\n📍 강원도 양양군 인구해변 서핑 글램핑\n🏄 새벽 6~7시 아무도 없는 해변 독점\n\n#양양글램핑 #양양서핑 #강원도여행 #서핑글램핑 #동해',instagram:'양양 서핑 글램핑 새벽 아무도 없는 해변이 진짜 핵심이에요 🏄\n\n파도 소리+커피+동해 새벽 조합 ✨\n서핑 강습+글램핑 패키지 추천\n\n📍 강원 양양 인구해변\n\n#양양글램핑 #양양서핑 #강원도 #동해 #GemKorea',tiktok:'양양 서핑 글램핑 꿀팁 🏄 새벽 6~7시 아무도 없는 해변에서 커피 마시는 게 진짜 핵심이에요! 파도 소리+동해 새벽+커피 조합 // 서핑 강습+글램핑 패키지 #양양글램핑 #양양서핑 #강원도'},
    hashtags:{korean:['#한국여행','#강원도여행','#양양여행','#글램핑','#GemKorea'],place_specific:['#양양서핑글램핑','#인구해변글램핑','#새벽해변커피','#서퍼글램핑']}
  },
  {
    experience_id:'EX-GW-STR-001', experience_name:'영월 별마로 천문대', category_sub:'과학체험', region:'강원도',
    script_30s:'오늘은 영월 별마로 천문대에 왔어요. 해발 799m 봉래산 국내 최대 공공 천문대예요. 근데 아무도 안 알려주는 게 있어요 — 맑은 날 육안으로 은하수가 보여요. 별이 쏟아진다는 표현이 과장이 아니에요. 너무 도시에서 못 보던 밤하늘이라서 좋았습니다.',
    script_60s:'오늘은 강원도 영월 별마로 천문대에 왔어요. 해발 799m 봉래산 정상에 위치한 국내 최대 규모 공공 천문대예요. 80cm 주망원경으로 행성·성운·은하를 직접 관측할 수 있어요. 근데 아무도 안 알려주는 꿀팁 하나 — 별마로 천문대의 진짜 매력은 망원경이 아니라 맨눈 은하수예요. 영월은 수도권에서 가장 빛 공해가 적은 지역 중 하나예요. 달이 없는 맑은 날 밤에 천문대 옥상에 올라가면 도시에서 절대 볼 수 없는 은하수가 맨눈으로 보여요. 별이 쏟아진다는 표현이 과장이 아니에요. 망원경 관측 시간 외에 옥상에서 맨눈으로 밤하늘을 올려다보는 시간이 더 감동적이에요. 음력 그믐 전후 방문이 달 없이 가장 선명한 은하수를 볼 수 있어요. 너무 도시에서 평생 보지 못한 밤하늘이라서 좋았습니다.',
    secret_tip:'달 없는 맑은 날 옥상 맨눈 은하수 — 음력 그믐 전후 방문이 최적. 망원경보다 맨눈 은하수가 더 감동적. 별마로 홈페이지 날씨·달 위상 확인 필수. 단종 유배지 영월 세트',
    filming_guide:'맑은 밤 별 쏟아지는 은하수 장노출 촬영. 천문대 돔과 별 배경. 망원경으로 행성 관측하는 표정.',
    broll_ideas:['은하수 장노출 별 쏟아지는 촬영','천문대 돔과 별 배경','망원경 행성 관측 표정','봉래산 정상 일몰 전경','영월 시내 야경'],
    hooks:['영월에서 맨눈으로 은하수 봤어요','달 없는 날 가면 진짜예요','망원경보다 맨눈 은하수가 더 감동','별이 쏟아진다는 게 과장 아니에요','영월 별마로 천문대 꿀팁'],
    thumbnails:['은하수 장노출 별 쏟아짐','천문대 돔과 별 배경','망원경 관측 표정','봉래산 정상 일몰','영월 시내 야경'],
    captions:{youtube:'영월 별마로 천문대 — 맨눈으로 은하수 봤어요 🌌\n\n달 없는 날 별이 진짜 쏟아져요!\n망원경보다 맨눈 은하수가 더 감동\n\n📍 강원도 영월군 봉래산 별마로 천문대\n🌌 음력 그믐 전후 방문이 최적\n💡 홈페이지 날씨·달 위상 확인 필수\n\n#별마로천문대 #영월 #강원도여행 #은하수 #별관측',instagram:'영월 별마로 천문대에서 맨눈 은하수 봤어요 🌌\n\n별이 쏟아진다는 게 과장 아니에요 ✨\n달 없는 날이 최고\n\n📍 강원 영월 별마로 천문대\n\n#별마로천문대 #영월여행 #강원도 #은하수 #GemKorea',tiktok:'별마로 천문대 꿀팁 🌌 달 없는 날 가면 맨눈으로 은하수 봐요! 별이 쏟아진다는 게 진짜예요 // 음력 그믐 전후 방문이 최적 #별마로천문대 #영월여행 #은하수'},
    hashtags:{korean:['#한국여행','#강원도여행','#영월여행','#별관측','#GemKorea'],place_specific:['#별마로천문대','#영월은하수','#맨눈은하수','#공공천문대']}
  },
  {
    experience_id:'EX-GN-STR-001', experience_name:'합천 국제천문대', category_sub:'과학체험', region:'경상남도',
    script_30s:'오늘은 합천 황매산 천문대에 왔어요. 남부 최고 별 관측지예요. 근데 아무도 안 알려주는 게 있어요 — 봄에 오면 철쭉 위로 별이 떠요. 꽃과 별을 동시에 보는 경험은 여기뿐이에요. 너무 그 조합이 세상에서 가장 아름다운 것 같아서 좋았습니다.',
    script_60s:'오늘은 경남 합천 황매산 국제천문대에 왔어요. 황매산 해발 600m에 위치한 남부 지역 대표 별 관측 천문대예요. 도심 빛 공해가 거의 없는 청정 환경이라 남부에서 가장 선명한 별을 볼 수 있어요. 근데 아무도 안 알려주는 꿀팁 하나 — 봄 철쭉 시즌인 4~5월에 천문대를 방문하면 특별한 경험을 할 수 있어요. 황매산 철쭉이 만개하는 시기에 밤하늘 별 관측을 하면 철쭉 꽃밭 위로 은하수가 펼쳐지는 경험을 해요. 꽃과 별을 동시에 경험하는 건 황매산에서만 가능해요. 천문대 입장 전 황매산 산책로를 걷다가 철쭉 향기를 맡고, 어두워지면 천문대에서 별을 보는 코스가 완벽해요. 너무 꽃과 별이 동시에 오는 그 순간이라서 좋았습니다.',
    secret_tip:'봄 4~5월 철쭉+별 동시 체험 — 황매산 철쭉 위로 은하수 펼쳐지는 경험. 세계 유일 꽃+별 조합. 철쭉 시즌 예약 폭주 사전 예약 필수. 황매산 낮 철쭉+밤 별 세트 코스',
    filming_guide:'철쭉 배경 별 장노출 촬영 (꽃+별 동시). 천문대 망원경 관측 장면. 황매산 철쭉밭 일몰.',
    broll_ideas:['철쭉 배경 별 장노출','천문대 망원경 관측','황매산 철쭉밭 일몰','천문대 돔 야간 전경','합천 야경 파노라마'],
    hooks:['봄에 오면 철쭉 위로 별이 떠요','꽃과 별 동시 경험은 여기뿐이에요','황매산 철쭉+천문대 세트 코스','남부 최고 별 관측지예요','합천 국제천문대 꿀팁'],
    thumbnails:['철쭉 배경 별 장노출','천문대 망원경 관측','황매산 철쭉 일몰','천문대 돔 야간','합천 야경'],
    captions:{youtube:'합천 황매산 천문대 — 봄엔 철쭉 위로 별이 떠요 🌸🌌\n\n꽃+별 동시 경험은 황매산에서만!\n남부 최고 별 관측지\n\n📍 경남 합천군 황매산 국제천문대\n🌸 4~5월 철쭉 시즌 예약 필수 (사전 폭주)\n\n#합천천문대 #황매산 #경남여행 #철쭉별관측 #봄별',instagram:'합천 황매산 천문대 봄엔 철쭉 위로 별이 떠요 🌸🌌\n\n꽃+별 동시 경험 황매산에서만 가능 ✨\n남부 최고 별 관측지\n\n📍 경남 합천 황매산 천문대\n\n#합천천문대 #황매산 #경남여행 #철쭉별 #GemKorea',tiktok:'합천 천문대 꿀팁 🌸🌌 봄에 가면 철쭉 위로 별이 떠요! 꽃과 별 동시 경험 황매산에서만 가능 // 4~5월 철쭉 시즌 예약 폭주 사전 필수 #합천천문대 #황매산 #경남여행'},
    hashtags:{korean:['#한국여행','#경남여행','#합천여행','#별관측','#GemKorea'],place_specific:['#합천국제천문대','#황매산철쭉별','#꽃별동시','#남부최고별관측']}
  },
  {
    experience_id:'EX-IC-OCN-001', experience_name:'강화도 야간 해루질 체험', category_sub:'해양체험', region:'인천광역시',
    script_30s:'오늘은 강화도 갯벌에서 야간 해루질을 했어요. 밤에 낙지를 잡는 거예요. 근데 아무도 안 알려주는 게 있어요 — 낙지는 헤드랜턴 빛이 눈에 닿으면 멈춰요. 그 순간 손으로 잡으면 돼요. 그 비결이 해루질의 전부예요. 너무 빛이 무기가 되는 체험이라서 좋았습니다.',
    script_60s:'오늘은 인천 강화도 동막리 갯벌에서 야간 해루질 체험을 했어요. 해루질은 밤에 갯벌에서 헤드랜턴을 쓰고 낙지·꽃게·바지락을 손으로 직접 잡는 거예요. 낮 갯벌 체험과 전혀 다른 경험이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 낙지 잡는 방법이 따로 있어요. 낙지는 빛에 일시적으로 반응해서 헤드랜턴 빛이 눈에 닿으면 몇 초간 움직임을 멈춰요. 그 순간이 잡을 찬스예요. 그냥 보이는 낙지를 잡으려 하면 도망가는데, 빛을 먼저 눈에 비추고 멈추는 순간 손을 뻗으면 잡을 수 있어요. 이 방법을 알면 해루질 성공률이 완전히 달라져요. 서해 강화 갯벌의 야간 생태계를 직접 만지는 경험이에요. 너무 빛이 무기가 되는 그 순간이라서 좋았습니다.',
    secret_tip:'낙지 잡기 핵심 = 헤드랜턴 빛이 눈에 닿으면 멈추는 그 순간 잡기. 빛→멈춤→손. 이 방법 알면 성공률 완전히 달라짐. 썰물 시간 사전 확인. 방수 장화 필수',
    filming_guide:'헤드랜턴 비추는 손과 멈추는 낙지 클로즈업. 야간 갯벌 헤드랜턴 불빛들 전경. 낙지 잡아 올리는 순간.',
    broll_ideas:['헤드랜턴 낙지 멈추는 클로즈업','야간 갯벌 헤드랜턴 불빛들','낙지 잡아 올리는 순간','꽃게 발견하는 장면','강화 동막 갯벌 새벽 분위기'],
    hooks:['낙지는 빛이 닿으면 잠깐 멈춰요','그 순간 잡으면 돼요','해루질 성공률이 달라지는 비결','야간 갯벌 체험이 낮이랑 달라요','강화도 해루질 꿀팁 있어요'],
    thumbnails:['헤드랜턴 낙지 멈추는 클로즈업','야간 갯벌 헤드랜턴들','낙지 잡아 올리기','꽃게 발견','강화 갯벌 새벽'],
    captions:{youtube:'강화도 야간 해루질 — 낙지 잡는 비결 있어요 🦑\n\n빛이 눈에 닿으면 잠깐 멈춰요!\n그 순간 잡으면 성공률 달라져요\n\n📍 인천 강화군 동막리 갯벌\n🦑 썰물 시간 사전 확인 + 방수 장화 필수\n\n#강화도해루질 #강화도 #인천여행 #야간갯벌 #낙지잡기',instagram:'강화도 야간 해루질 낙지 잡는 비결 알아요 🦑\n\n빛이 눈에 닿으면 멈추는 그 순간 잡기 ✨\n이 방법 알면 성공률 달라져요\n\n📍 인천 강화 동막리 갯벌\n\n#강화도해루질 #강화도 #인천여행 #야간갯벌 #GemKorea',tiktok:'강화도 해루질 꿀팁 🦑 낙지에 헤드랜턴 빛이 닿으면 잠깐 멈춰요! 그 순간 잡으면 돼요 // 이 방법 알면 해루질 성공률 완전히 달라짐 #강화도해루질 #강화도 #인천여행'},
    hashtags:{korean:['#한국여행','#인천여행','#강화도여행','#야간갯벌','#GemKorea'],place_specific:['#강화도해루질','#낙지잡기비결','#헤드랜턴낙지','#야간갯벌체험']}
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
