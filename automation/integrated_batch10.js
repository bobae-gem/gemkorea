const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const now = new Date().toISOString().slice(0,19);

const newExps = [
  {experience_id:'EX-GW-NAT-005',name:'원주 소금산 출렁다리',category_main:'문화/체험',category_sub:'어드벤처/레포츠',region_main:'GW',region_sub:'강원특별자치도 원주시',address:'강원특별자치도 원주시 지정면 소금산길 12',lat:37.4608,lng:127.9419,price:'성인 3,000원',duration:'2~3시간',reservation_required:false,target_user:['커플','개인','가족'],nearby_places:[],related_heritage_ids:[],short_description:'섬강 협곡 100m 높이에 설치된 길이 200m 출렁다리를 건너는 어드벤처 체험이다. 투명 바닥 출렁다리를 걸으면 발아래로 섬강과 기암절벽이 내려다보이며 짜릿한 스릴을 느낄 수 있다.',source_urls:['https://www.wonju.go.kr/'],data_confidence:'high',tags:['소금산출렁다리','원주','강원','출렁다리','섬강','협곡','어드벤처'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00 (월요일 휴관)',phone:'033-737-3011'},
  {experience_id:'EX-GN-NAT-004',name:'남해 보물섬 이순신 순국 공원',category_main:'문화/체험',category_sub:'역사 체험',region_main:'GN',region_sub:'경상남도 남해군',address:'경상남도 남해군 고현면 관음포리 이순신공원',lat:34.8450,lng:127.9236,price:'무료',duration:'1~2시간',reservation_required:false,target_user:['가족','개인'],nearby_places:[],related_heritage_ids:[],short_description:'노량해전에서 이순신 장군이 전사한 현장 관음포 앞바다를 내려다보며 이충무공 순국 공원을 탐방한다. 이순신의 마지막 전투와 최후를 기억하는 추모 공간으로 남해 바다가 한눈에 펼쳐진다.',source_urls:['https://www.namhae.go.kr/'],data_confidence:'high',tags:['이순신순국공원','남해','노량해전','이순신','경남','임진왜란','순국'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (무료)',phone:'055-860-3710'},
  {experience_id:'EX-CB-NAT-002',name:'충주 수안보 온천 체험',category_main:'문화/체험',category_sub:'자연체험',region_main:'CB',region_sub:'충청북도 충주시',address:'충청북도 충주시 수안보면 수안보로 일원',lat:36.8403,lng:127.9631,price:'입욕 성인 8,000원~',duration:'1~2시간',reservation_required:false,target_user:['가족','커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'한국 최초의 온천 휴양지 수안보에서 탄산수소나트륨 성분의 천연 온천을 즐기는 체험이다. 고려 시대부터 왕실에서 사용했다는 기록이 있는 수안보 온천은 피부 미용에 탁월하다.',source_urls:['https://www.suanbo.or.kr/'],data_confidence:'high',tags:['수안보온천','충주','충북','온천','탄산온천','역사온천','피부미용'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'06:00~22:00',phone:'043-846-0500'},
  {experience_id:'EX-GG-NAT-005',name:'양평 두물머리 아침 사진 투어',category_main:'문화/체험',category_sub:'자연체험',region_main:'GG',region_sub:'경기도 양평군',address:'경기도 양평군 양서면 양수리 두물머리 일원',lat:37.5334,lng:127.4772,price:'무료',duration:'1~2시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'남한강과 북한강이 만나는 두물머리에서 이른 아침 물안개와 느티나무를 배경으로 사진을 찍는 투어다. 새벽 6시 안개가 강을 덮을 때 400년 된 느티나무 실루엣이 연출하는 풍경이 사진 명소다.',source_urls:['https://www.yangpyeong.go.kr/'],data_confidence:'high',tags:['두물머리','양평','경기','물안개','느티나무','사진명소','새벽'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (새벽 5~9시 추천)',phone:'031-771-2068'},
  {experience_id:'EX-JN-NAT-004',name:'화순 운주사 천불천탑 탐방',category_main:'문화/체험',category_sub:'역사 체험',region_main:'JN',region_sub:'전라남도 화순군',address:'전라남도 화순군 도암면 천불로 780',lat:34.9453,lng:126.9317,price:'성인 2,000원',duration:'1~2시간',reservation_required:false,target_user:['개인','가족'],nearby_places:[],related_heritage_ids:[],short_description:'화순 운주사에는 천 개의 석불과 천 개의 석탑이 가득 들어찬 신비로운 사찰이다. 누워있는 와불 2구를 포함한 특이한 형태의 불상들이 계곡을 가득 채우고 있어 다른 곳에서 볼 수 없는 독특한 분위기를 자아낸다.',source_urls:['https://www.hwasun.go.kr/'],data_confidence:'high',tags:['운주사','화순','전남','천불천탑','와불','신비','석불'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'08:30~17:30',phone:'061-374-0660'},
  {experience_id:'EX-GG-NAT-006',name:'용인 호암미술관·에버랜드 세트',category_main:'문화/체험',category_sub:'미술관',region_main:'GG',region_sub:'경기도 용인시',address:'경기도 용인시 처인구 포곡읍 에버랜드로 562번길 38',lat:37.2832,lng:127.1873,price:'성인 10,000원',duration:'2~3시간',reservation_required:false,target_user:['커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'삼성 이병철 회장이 설립한 한국 미술 전문 미술관으로 수준 높은 한국 고미술과 현대 미술을 전시한다. 에버랜드와 인접해 있어 미술관 관람 후 에버랜드로 이동하는 문화+놀이 세트 코스가 가능하다.',source_urls:['https://hoammuseum.com/'],data_confidence:'high',tags:['호암미술관','용인','경기','한국미술','삼성','에버랜드','미술관'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'10:00~18:00 (월요일 휴관)',phone:'031-320-1801'},
  {experience_id:'EX-GW-NAT-006',name:'강릉 하슬라아트월드 야경',category_main:'문화/체험',category_sub:'야경/야간투어',region_main:'GW',region_sub:'강원특별자치도 강릉시',address:'강원특별자치도 강릉시 강동면 율곡로 1441',lat:37.7020,lng:129.0544,price:'성인 12,000원',duration:'2~3시간',reservation_required:false,target_user:['커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'강릉 동해 바다가 내려다보이는 절벽 위에 조성된 복합 예술 공간 하슬라아트월드를 야간에 탐방한다. 야외 조각 공원과 미디어아트 전시가 동해 바다 야경과 어우러지는 강릉 대표 문화 야경 명소다.',source_urls:['https://www.haslla.kr/'],data_confidence:'high',tags:['하슬라아트월드','강릉','강원','야경','동해','조각공원','미디어아트'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'10:00~21:00',phone:'033-644-9411'},
  {experience_id:'EX-JN-NAT-005',name:'여수 향일암 일출 탐방',category_main:'문화/체험',category_sub:'역사 체험',region_main:'JN',region_sub:'전라남도 여수시',address:'전라남도 여수시 돌산읍 향일암로 60',lat:34.6539,lng:127.7547,price:'성인 2,000원',duration:'1~2시간',reservation_required:false,target_user:['커플','개인','가족'],nearby_places:[],related_heritage_ids:[],short_description:'바위 절벽에 매달린 천년 고찰 향일암에서 해가 뜨는 일출을 감상하는 탐방이다. 향일암은 해를 향한다는 뜻으로 남해 다도해를 배경으로 한 일출이 한국 4대 일출 명소 중 하나다.',source_urls:['https://www.hyangiram.or.kr/'],data_confidence:'high',tags:['향일암','여수','전남','일출','4대일출','남해','다도해'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'04:30~20:00',phone:'061-644-4742'},
  {experience_id:'EX-GG-NAT-007',name:'포천 산정호수 자전거 투어',category_main:'문화/체험',category_sub:'어드벤처/레포츠',region_main:'GG',region_sub:'경기도 포천시',address:'경기도 포천시 영북면 산정호수로 395',lat:38.1069,lng:127.3414,price:'자전거 대여 1시간 5,000원~',duration:'2~3시간',reservation_required:false,target_user:['가족','커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'명성산 자락에 위치한 산정호수 주변을 자전거로 라이딩하는 체험이다. 6.5km 호수 둘레길을 자전거로 돌며 명성산과 호수가 어우러지는 경관을 즐기고 가을 억새 시즌에 특히 아름답다.',source_urls:['https://www.pocheon.go.kr/'],data_confidence:'high',tags:['산정호수','포천','경기','자전거','명성산','억새','가을'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'자전거 대여 09:00~18:00',phone:'031-532-6135'},
  {experience_id:'EX-GW-NAT-007',name:'인제 방태산 자연휴양림',category_main:'문화/체험',category_sub:'자연체험',region_main:'GW',region_sub:'강원특별자치도 인제군',address:'강원특별자치도 인제군 기린면 방태산휴양로 160',lat:38.0572,lng:128.2828,price:'성인 1,000원',duration:'2~5시간',reservation_required:false,target_user:['가족','개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'강원도 오지 방태산의 원시림 속 자연휴양림에서 트레킹과 계곡 물놀이를 즐기는 체험이다. 인적이 드문 청정 자연 속에서 여름 계곡 수영과 가을 단풍을 즐길 수 있다.',source_urls:['https://www.huyang.go.kr/'],data_confidence:'high',tags:['방태산휴양림','인제','강원','원시림','계곡','자연','힐링'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중',phone:'033-463-2590'},
  {experience_id:'EX-JN-NAT-006',name:'완도 청산도 걷기 여행',category_main:'문화/체험',category_sub:'자연체험',region_main:'JN',region_sub:'전라남도 완도군',address:'전라남도 완도군 청산면 청산리 청산도 일원',lat:34.1958,lng:126.8681,price:'배 왕복 10,000원 (자전거 대여 별도)',duration:'1박 2일',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'아시아 최초 슬로시티 완도 청산도에서 섬 둘레 42km 슬로길을 천천히 걷는 힐링 여행이다. 청보리밭·돌담길·당리 해변을 따라 걷는 코스로 완주하면 청산도 슬로걷기 인증서를 받을 수 있다.',source_urls:['https://www.wando.go.kr/'],data_confidence:'high',tags:['청산도','완도','전남','슬로길','걷기여행','청보리','슬로시티'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중',phone:'061-554-1501'},
  {experience_id:'EX-GG-NAT-008',name:'가평 아침고요수목원 사계절',category_main:'문화/체험',category_sub:'자연체험',region_main:'GG',region_sub:'경기도 가평군',address:'경기도 가평군 상면 수목원로 432',lat:37.8119,lng:127.4547,price:'성인 13,000원',duration:'2~3시간',reservation_required:false,target_user:['가족','커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'가평 아침고요수목원은 한반도 지형 정원·일출 정원·하경 정원·분재 정원 등 특색 있는 테마 정원으로 꾸며진 사계절 식물원이다. 겨울 빛 축제·봄 튤립·가을 단풍·여름 수국이 시즌별로 유명하다.',source_urls:['https://www.morningcalm.co.kr/'],data_confidence:'high',tags:['아침고요수목원','가평','경기','수목원','사계절','빛축제','튤립'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'08:30~20:00 (계절별 상이)',phone:'1544-6703'}
];

const newShorts = [
  {
    experience_id:'EX-JB-SKI-001', experience_name:'무주리조트 스키장', category_sub:'스키/겨울 레포츠', region:'전라북도',
    script_30s:'오늘은 무주리조트 스키장에 왔어요. 덕유산 국립공원 안 남부 최대 스키장이에요. 근데 아무도 안 알려주는 게 있어요 — 스키 안 타도 곤돌라 타면 덕유산 향적봉 1600m 설경이 나와요. 그 설경이 스키 타는 것보다 더 감동이에요. 너무 곤돌라만 타도 값어치라서 좋았습니다.',
    script_60s:'오늘은 전북 무주 무주리조트 스키장에 왔어요. 덕유산 국립공원 자락 남부 최대 스키장으로 해발 1,520m까지 곤돌라가 운행돼요. 22개 슬로프와 야간 스키도 있어요. 근데 아무도 안 알려주는 꿀팁 하나 — 스키를 못 타도 곤돌라 타면 덕유산 향적봉 근처까지 올라갈 수 있어요. 1월 말 상고대 시즌에 곤돌라를 타면 구름 위로 올라가면서 하얀 얼음꽃으로 뒤덮인 설경이 나타나요. 스키 안 타고 곤돌라+향적봉 산책만 해도 완전히 다른 겨울 체험이에요. 리프트권보다 곤돌라권이 훨씬 저렴하고 시간도 절약돼요. 남부에서 1월 상고대 보기 가장 좋은 곳이 덕유산이에요. 너무 곤돌라로 구름 위 설경 보는 게 진짜라서 좋았습니다.',
    secret_tip:'스키 없이 곤돌라+향적봉 상고대 코스 — 1월 상고대 시즌 곤돌라로 구름 위 얼음꽃 설경. 리프트권보다 저렴. 남부 최고 상고대 명소. 스키+무주 반딧불축제 여름 세트 리조트',
    filming_guide:'곤돌라에서 창밖 상고대 설경 클로즈업. 향적봉 부근 얼음꽃 나무 슬로우. 구름 위로 올라가는 곤돌라 시선.',
    broll_ideas:['곤돌라 창밖 상고대 설경 클로즈업','향적봉 얼음꽃 나무 슬로우','구름 위로 올라가는 곤돌라 시선','덕유산 향적봉 설원 파노라마','스키 슬로프 야간 조명'],
    hooks:['무주리조트 스키 안 타도 이게 있어요','곤돌라 타면 구름 위 설경 나타나요','1월 상고대 시즌 덕유산이 최고예요','리프트권보다 곤돌라권이 저렴해요','남부 최고 겨울 설경 체험'],
    thumbnails:['곤돌라 창밖 상고대 설경','향적봉 얼음꽃 나무 슬로우','구름 위 곤돌라 시선','덕유산 설원 파노라마','스키 야간 조명'],
    captions:{youtube:'무주리조트 꿀팁 — 스키 없이 곤돌라만 타도 돼요 ⛷️\n\n1월 상고대 시즌 구름 위 얼음꽃 설경!\n남부 최고 겨울 체험\n\n📍 전북 무주군 무주리조트\n⛷️ 1월 상고대 시즌 + 곤돌라+향적봉 코스\n\n#무주리조트 #무주 #전북여행 #상고대 #겨울여행',instagram:'무주리조트 스키 안 타도 곤돌라만 타면 돼요 ⛷️\n\n구름 위 상고대 설경이 진짜 감동 ✨\n1월 시즌 남부 최고 겨울 체험\n\n📍 전북 무주 무주리조트\n\n#무주리조트 #무주여행 #전북 #상고대 #GemKorea',tiktok:'무주리조트 꿀팁 ⛷️ 스키 없이 곤돌라 타면 1월에 구름 위 상고대 설경 나와요! 리프트권보다 저렴하고 더 감동적 // 남부 최고 겨울 설경 #무주리조트 #무주여행 #상고대'},
    hashtags:{korean:['#한국여행','#전북여행','#무주여행','#겨울여행','#GemKorea'],place_specific:['#무주리조트','#덕유산상고대','#곤돌라설경','#스키없이설경']}
  },
  {
    experience_id:'EX-GW-SRF-001', experience_name:'양양 서핑 체험', category_sub:'해양 레포츠', region:'강원도',
    script_30s:'오늘은 양양 인구해변에서 서핑을 배웠어요. 한국 서핑 성지예요. 근데 아무도 안 알려주는 게 있어요 — 서핑은 파도가 아니라 파도 타이밍이에요. 파도가 어깨 위로 오기 직전 패들링 시작해야 해요. 그 타이밍이 서핑의 80%예요. 너무 파도를 읽는 법을 배워서 좋았습니다.',
    script_60s:'오늘은 강원도 양양 인구해변에서 서핑 입문 강습을 받았어요. 양양은 한국 서핑의 메카예요. 연간 100만 명 이상이 찾는 서핑 성지인데 서울에서 2시간이라 접근성도 좋아요. 파도·모래·카페까지 있어서 서핑 문화 자체를 즐기는 청년들이 많아요. 근데 아무도 안 알려주는 꿀팁 하나 — 서핑 초보가 가장 많이 하는 실수가 파도가 닥쳐왔을 때 패들링하는 거예요. 이미 늦어요. 파도가 어깨 높이로 오기 직전, 파도가 밀려오는 느낌이 등에 닿을 때 패들링을 시작해야 해요. 그 타이밍이 맞으면 파도가 자연스럽게 보드를 밀어줘요. 강사가 이 타이밍을 알려주는 시간이 핵심이에요. 너무 파도를 읽는 법을 배우는 게 서핑의 매력이라서 좋았습니다.',
    secret_tip:'패들링 타이밍 핵심 — 파도가 등에 닿는 느낌이 올 때 시작. 파도 오고 나서 하면 늦음. 이 타이밍 강사에게 배우는 것이 입문 강습 핵심. 4~5월·9~10월이 파도+날씨 최적',
    filming_guide:'패들링 후 보드 위에 서는 순간 슬로우. 파도 위에서 서서 균형 잡는 장면. 서핑+카페 양양 인구해변 전경.',
    broll_ideas:['패들링 후 보드 위에 서는 슬로우','파도 위 균형 잡는 장면','서핑+카페 인구해변 전경','강사 파도 타이밍 지도 장면','서핑 마친 후 해변 카페 세트'],
    hooks:['서핑은 파도 타이밍이에요 파도가 아니에요','패들링 언제 시작할지가 서핑 80%','양양 인구해변 서핑 입문 꿀팁','파도가 등에 닿을 때 패들링 시작','한국 서핑 성지 양양 여행 방법'],
    thumbnails:['보드 위에 서는 순간 슬로우','파도 위 균형 잡기','서핑+카페 인구해변','강사 지도 장면','서핑 후 카페 세트'],
    captions:{youtube:'양양 서핑 꿀팁 — 타이밍이 서핑 80%예요 🏄\n\n파도가 등에 닿을 때 패들링 시작!\n한국 서핑 성지 인구해변\n\n📍 강원도 양양군 현남면 인구해변\n🏄 4~5월·9~10월 파도+날씨 최적\n\n#양양서핑 #양양 #강원도여행 #서핑입문 #인구해변',instagram:'양양 서핑 패들링 타이밍이 핵심이에요 🏄\n\n파도 등에 닿을 때 시작! 늦으면 안 돼요 ✨\n한국 서핑 성지 인구해변\n\n📍 강원 양양 인구해변\n\n#양양서핑 #양양여행 #강원도 #서핑 #GemKorea',tiktok:'양양 서핑 꿀팁 🏄 패들링 타이밍이 서핑 80%예요! 파도가 등에 닿는 느낌이 올 때 시작 // 늦으면 파도 놓쳐요 한국 서핑 성지 양양 #양양서핑 #양양여행 #강원도'},
    hashtags:{korean:['#한국여행','#강원도여행','#양양여행','#서핑','#GemKorea'],place_specific:['#양양서핑','#인구해변','#서핑타이밍','#패들링꿀팁']}
  },
  {
    experience_id:'EX-JJ-OCN-002', experience_name:'서귀포 잠수함 체험', category_sub:'해양체험', region:'제주특별자치도',
    script_30s:'오늘은 서귀포 잠수함을 탔어요. 제주 바다 40m 아래로 들어가요. 근데 아무도 안 알려주는 게 있어요 — 잠수함 안에서 창밖으로 지나가는 열대어와 눈이 마주치는 순간이 있어요. 그 눈빛이 진짜예요. 너무 눈 마주침이 신기해서 좋았습니다.',
    script_60s:'오늘은 제주 서귀포 잠수함 체험을 했어요. 서귀포항에서 출발해 바닷속 40m까지 내려가는 유리창 잠수함이에요. 별도 수영 기술 없이 탑승 가능하고 운항 시간은 약 45분이에요. 수심 40m 바닷속에서 제주 산호초와 열대어를 유리창 너머로 관찰할 수 있어요. 근데 아무도 안 알려주는 꿀팁 하나 — 잠수함이 특정 구간을 지날 때 열대어 떼가 유리창 바로 옆으로 지나가요. 그 순간 유리창 너머 열대어와 눈이 마주치는 경험을 할 수 있어요. 그 물고기가 잠수함을 신기해하는 것처럼 가까이 다가와요. 어린이들이 가장 좋아하는 순간이에요. 탑승 전 선상에서 잠수 지점까지 이동할 때 제주 앞바다 투명도도 놀라워요. 너무 물고기와 눈 마주치는 그 순간이 특별해서 좋았습니다.',
    secret_tip:'특정 구간 열대어 떼가 유리창 바로 옆으로 — 물고기와 눈 마주치는 순간. 어린이가 가장 좋아하는 구간. 성수기 예약 필수. 선상 이동 중 제주 해상 뷰도 인상적',
    filming_guide:'유리창 너머 열대어와 눈 마주치는 순간. 잠수함 창밖 산호초와 물고기 파노라마. 수면 아래로 내려가는 잠수 장면.',
    broll_ideas:['유리창 너머 열대어 눈 마주침','잠수함 창밖 산호초+물고기 파노라마','수면 아래 잠수 장면','서귀포 바다 선상 이동','어린이 유리창 앞 신기한 표정'],
    hooks:['잠수함에서 물고기와 눈 마주쳤어요','제주 바다 40m 아래 유리창 체험','수영 못해도 탈 수 있는 잠수함','열대어가 창밖 바로 옆으로 지나가요','서귀포 잠수함 꿀팁 있어요'],
    thumbnails:['열대어 눈 마주침','산호초+물고기 파노라마','잠수 장면','선상 서귀포 바다','어린이 신기한 표정'],
    captions:{youtube:'서귀포 잠수함 체험 — 물고기와 눈 마주쳤어요 🐠\n\n40m 바닷속 유리창 너머 열대어!\n수영 못해도 OK\n\n📍 제주 서귀포시 서귀포 잠수함\n🐠 성수기 예약 필수 / 운항 45분\n\n#서귀포잠수함 #제주여행 #서귀포 #열대어 #해양체험',instagram:'서귀포 잠수함에서 열대어랑 눈 마주쳤어요 🐠\n\n40m 바닷속 유리창 너머 산호초+열대어 ✨\n수영 못해도 탈 수 있어요\n\n📍 제주 서귀포 잠수함\n\n#서귀포잠수함 #제주여행 #서귀포 #GemKorea',tiktok:'서귀포 잠수함 꿀팁 🐠 유리창 너머로 열대어랑 눈 마주쳐요! 특정 구간에서 물고기 떼가 창 바로 옆으로 // 수영 못해도 40m 제주 바닷속 체험 #서귀포잠수함 #제주여행'},
    hashtags:{korean:['#한국여행','#제주여행','#서귀포','#해양체험','#GemKorea'],place_specific:['#서귀포잠수함','#열대어눈마주침','#40m바닷속','#제주해양체험']}
  },
  {
    experience_id:'EX-DJ-MUS-001', experience_name:'국립중앙과학관', category_sub:'과학관', region:'대전광역시',
    script_30s:'오늘은 대전 국립중앙과학관에 왔어요. 국내 최대 과학 체험관이에요. 근데 아무도 안 알려주는 게 있어요 — 천체투영관에서 낮에도 밤하늘 별을 볼 수 있어요. 돔 안에서 정밀 별자리 영상을 보는 게 진짜 천문대보다 선명해요. 너무 낮에 별을 볼 수 있어서 좋았습니다.',
    script_60s:'오늘은 대전 국립중앙과학관에 왔어요. 국내 최대 규모 과학 전시·체험 기관이에요. 자연사관·우주관·첨단기술관·어린이 탐구체험관이 모여있고 무료 또는 저렴하게 이용할 수 있어요. 근데 아무도 안 알려주는 꿀팁 하나 — 국립중앙과학관 안에 천체투영관이 있어요. 돔 모양 천장에 실제 별자리를 그대로 투영하는 곳인데, 낮에 와도 완전한 밤하늘 별자리를 볼 수 있어요. 실제 천문대보다 해상도가 높고 날씨 상관없이 볼 수 있어요. 특히 은하수를 처음으로 제대로 볼 수 있는 곳이기도 해요. 성인·어린이 모두 별자리 해설을 들으면서 우주를 배울 수 있는 알찬 체험이에요. 너무 낮에 은하수를 볼 수 있다는 게 좋았습니다.',
    secret_tip:'천체투영관 — 낮에도 완전한 밤하늘 별자리+은하수 관람. 실제 천문대보다 해상도 높고 날씨 무관. 사전 예약 추천. 가장 정밀한 별자리 체험. KTX 대전역에서 버스 20분',
    filming_guide:'돔 천장에 투영된 별자리 광각. 어린이가 별을 가리키는 장면. 공룡 화석 실물 크기 전시 클로즈업.',
    broll_ideas:['돔 천장 별자리 투영 광각','어린이가 별 가리키는 장면','공룡 화석 실물 크기','첨단기술관 인터랙티브 전시','과학관 외경과 어린이 입장'],
    hooks:['낮에도 은하수 볼 수 있는 곳이에요','천체투영관이 실제 천문대보다 선명해요','국내 최대 과학 체험관 대전','KTX 대전 들르면 꼭 가야 해요','어린이+어른 모두 좋아하는 과학관'],
    thumbnails:['돔 별자리 투영 광각','별 가리키는 어린이','공룡 화석 실물','첨단기술관 인터랙티브','과학관 외경'],
    captions:{youtube:'대전 국립중앙과학관 꿀팁 — 낮에 은하수 봤어요 🌌\n\n천체투영관에서 낮에도 완전한 밤하늘!\n실제 천문대보다 선명해요\n\n📍 대전광역시 유성구 국립중앙과학관\n🌌 천체투영관 사전 예약 추천\n💡 KTX 대전역에서 버스 20분\n\n#국립중앙과학관 #대전여행 #천체투영관 #과학관 #은하수',instagram:'대전 국립중앙과학관 낮에 은하수 봤어요 🌌\n\n천체투영관에서 낮에도 완전한 밤하늘 ✨\n실제 천문대보다 선명함\n\n📍 대전 유성구 국립중앙과학관\n\n#국립중앙과학관 #대전여행 #천체투영관 #GemKorea',tiktok:'대전 국립중앙과학관 꿀팁 🌌 천체투영관에서 낮에 은하수 봐요! 실제 천문대보다 선명하고 날씨 상관없음 // KTX 대전 경유하면 꼭 들러야 해요 #국립중앙과학관 #대전여행 #천체투영관'},
    hashtags:{korean:['#한국여행','#대전여행','#과학관','#어린이','#GemKorea'],place_specific:['#국립중앙과학관','#천체투영관','#낮에은하수','#대전과학관']}
  },
  {
    experience_id:'EX-BS-MUS-002', experience_name:'국립해양박물관', category_sub:'박물관', region:'부산광역시',
    script_30s:'오늘은 부산 영도 국립해양박물관에 왔어요. 해양 전문 박물관이에요. 근데 아무도 안 알려주는 게 있어요 — 옥상에 올라가면 부산항 전체가 파노라마로 보여요. 무료예요. 부산 항구 뷰 최고 포인트 중 하나예요. 너무 해양박물관 옥상이 뷰포인트인 걸 모르는 사람이 많아서 좋았습니다.',
    script_60s:'오늘은 부산 영도 국립해양박물관에 왔어요. 한국 유일 국립 해양 전문 박물관이에요. 해양 역사·문화·과학·산업을 아우르는 전시가 펼쳐져요. 옥포해전 모형·수족관·해양 탐험 체험관이 특색 있어요. 근데 아무도 안 알려주는 꿀팁 하나 — 박물관 옥상 테라스가 있어요. 거기서 보이는 부산항 뷰가 영도에서 가장 아름다운 전망 포인트예요. 부산항 컨테이너 터미널·남항대교·북항 개발 지역이 한눈에 들어와요. 박물관 관람 후 올라가는 사람이 거의 없어서 항상 한산해요. 무료로 볼 수 있는 부산항 파노라마예요. 부산시립미술관 옥상과 함께 부산 무료 전망 포인트 투톱이에요. 너무 이 뷰가 무료라는 게 좋았습니다.',
    secret_tip:'국립해양박물관 옥상 테라스 — 부산항+남항대교+북항 무료 파노라마. 관람 후 올라가는 사람 적어 항상 한산. 부산시립미술관 옥상과 함께 무료 전망 투톱',
    filming_guide:'옥상 테라스 부산항 파노라마 광각. 컨테이너선 지나가는 순간 포착. 수족관 내부 다양한 해양생물.',
    broll_ideas:['옥상 테라스 부산항 파노라마','컨테이너선 지나가는 순간','수족관 해양생물 전시','옥포해전 모형 클로즈업','영도 국립해양박물관 외경'],
    hooks:['해양박물관 옥상이 부산항 파노라마예요','무료로 부산항 뷰 보는 법','올라가는 사람이 없어서 항상 한산해요','부산 무료 전망 포인트 추천','국립해양박물관 꿀팁 있어요'],
    thumbnails:['옥상 부산항 파노라마','컨테이너선 지나가기','수족관 해양생물','옥포해전 모형','박물관 외경'],
    captions:{youtube:'국립해양박물관 꿀팁 — 옥상이 부산항 파노라마예요 🚢\n\n무료로 보는 부산항 뷰!\n올라가는 사람이 없어서 항상 한산\n\n📍 부산 영도구 국립해양박물관\n🚢 옥상 테라스 무료 / 관람 후 꼭 올라가기\n\n#국립해양박물관 #부산여행 #영도 #부산항뷰 #무료전망',instagram:'국립해양박물관 옥상이 부산항 파노라마예요 🚢\n\n무료로 부산항 다 보여요 ✨\n올라가는 사람이 없어서 항상 조용해요\n\n📍 부산 영도 국립해양박물관\n\n#국립해양박물관 #부산여행 #영도 #무료뷰 #GemKorea',tiktok:'국립해양박물관 꿀팁 🚢 옥상 테라스에서 부산항 파노라마 무료예요! 올라가는 사람이 없어서 항상 한산 // 관람 후 꼭 옥상 올라가세요 #국립해양박물관 #부산여행 #영도'},
    hashtags:{korean:['#한국여행','#부산여행','#영도','#무료명소','#GemKorea'],place_specific:['#국립해양박물관','#부산항파노라마','#영도무료뷰','#해양박물관옥상']}
  },
  {
    experience_id:'EX-GG-MUS-002', experience_name:'국립과천과학관', category_sub:'과학관', region:'경기도',
    script_30s:'오늘은 과천과학관에 왔어요. 서울 근교 가족 나들이 명소예요. 근데 아무도 안 알려주는 게 있어요 — 야외 천체관측소에서 낮에 태양 흑점을 볼 수 있어요. 맨눈으로 볼 수 없는 태양 표면이에요. 너무 낮에 태양 표면을 보는 경험이라서 좋았습니다.',
    script_60s:'오늘은 경기도 과천 국립과천과학관에 왔어요. 서울 근교 과천에 위치해 서울대공원·국립현대미술관과 함께 과천 삼각 코스를 이루는 과학 체험관이에요. 공룡 로봇·우주 체험·자연사 전시가 있고 입장료가 4,000원으로 저렴해요. 근데 아무도 안 알려주는 꿀팁 하나 — 야외에 천체관측소가 있어요. 주중 낮에도 태양 망원경으로 태양 흑점·홍염을 관측할 수 있어요. 맨눈으로는 절대 볼 수 없는 태양 표면이에요. 어린이들이 처음 태양 흑점을 보는 순간 "우와" 하는 반응이 진짜예요. 담당 해설사가 있어서 설명도 들을 수 있어요. 낮에 태양을 망원경으로 관측하는 경험은 여기서 아니면 하기 어려워요. 너무 낮에 태양 표면을 관측하는 게 좋았습니다.',
    secret_tip:'야외 천체관측소 낮 태양 관측 — 흑점·홍염 태양 표면 망원경 관측. 해설사 상시 대기. 맨눈으로 절대 못 보는 경험. 어린이가 가장 놀라는 구간. 국립현대미술관·서울대공원 세트',
    filming_guide:'태양 망원경 들여다보는 어린이 표정. 천체관측소 외경. 공룡 로봇 실물 크기와 어린이 스케일 비교.',
    broll_ideas:['태양 망원경 들여다보는 어린이 표정','천체관측소 외경','공룡 로봇 스케일 비교','우주 체험관 시뮬레이터','과천과학관 외경'],
    hooks:['낮에 태양 흑점 볼 수 있는 곳이에요','망원경으로 태양 표면 본 적 있어요?','과천과학관 야외 천체관측소 꿀팁','4,000원에 이 퀄리티 가성비예요','과천 삼각 코스 마지막 퍼즐'],
    thumbnails:['태양 망원경 들여다보는 표정','천체관측소 외경','공룡 로봇 스케일','우주 체험 시뮬레이터','과천과학관 외경'],
    captions:{youtube:'과천과학관 꿀팁 — 낮에 태양 흑점 볼 수 있어요 🔭\n\n야외 천체관측소 태양 망원경!\n맨눈으로 절대 못 보는 태양 표면\n\n📍 경기도 과천시 국립과천과학관\n🔭 야외 천체관측소 낮 태양 관측\n💡 미술관+서울대공원+과학관 과천 삼각 코스\n\n#국립과천과학관 #과천 #경기여행 #태양관측 #어린이',instagram:'과천과학관 낮에 태양 흑점 봤어요 🔭\n\n맨눈으로 절대 못 보는 태양 표면 ✨\n야외 천체관측소에서\n\n📍 경기 과천 국립과천과학관\n\n#국립과천과학관 #과천여행 #경기 #태양관측 #GemKorea',tiktok:'과천과학관 꿀팁 🔭 야외 천체관측소에서 낮에 태양 흑점 봐요! 맨눈으로 절대 못 보는 태양 표면 // 4,000원에 이 퀄리티 과천 삼각 코스 #과천과학관 #과천 #경기여행'},
    hashtags:{korean:['#한국여행','#경기여행','#과천여행','#과학관','#GemKorea'],place_specific:['#국립과천과학관','#야외천체관측소','#태양흑점관측','#과천삼각코스']}
  },
  {
    experience_id:'EX-GW-ADV-001', experience_name:'인제 합강 래프팅', category_sub:'어드벤처/레포츠', region:'강원도',
    script_30s:'오늘은 인제 내린천 래프팅을 했어요. 강원도 대표 급류 래프팅이에요. 근데 아무도 안 알려주는 게 있어요 — 래프팅 중 가장 무서운 구간은 소리가 없어요. 물 소리가 갑자기 크게 들리기 시작하면 급류가 시작이에요. 그 순간이에요. 너무 자연이 주는 경고 신호를 배워서 좋았습니다.',
    script_60s:'오늘은 강원도 인제 내린천 급류 래프팅을 했어요. 내린천은 강원도 대표 래프팅 코스로 협곡과 급류가 이어지는 코스예요. 초급부터 상급까지 코스를 선택할 수 있어요. 근데 아무도 안 알려주는 꿀팁 하나 — 래프팅 중 가장 무서운 급류 구간이 오기 직전에 신호가 있어요. 잔잔한 수면이 갑자기 빨라지고 물 소리가 커지기 시작해요. 그 신호가 "지금 급류가 시작된다"는 자연의 경고예요. 이 신호를 알면 몸을 낮추고 패들을 잡고 준비할 수 있어요. 모르면 갑자기 빠져서 놀라요. 가이드가 이 신호를 알려주는데 자연 속에서 귀를 열고 듣는 법을 배우는 게 래프팅의 또 다른 매력이에요. 너무 자연 신호를 읽는 법을 배워서 좋았습니다.',
    secret_tip:'급류 직전 수면 빨라지고 물 소리 커지는 자연 신호 — 이 신호에 몸 낮추고 패들 잡기. 가이드 설명 집중이 핵심. 비 온 다음 날 급류가 더 강해 스릴 배가. 5~10월 운영',
    filming_guide:'급류 돌파하는 순간 슬로우 (물보라+표정). 잔잔 구간에서 협곡 자연 감상. 래프팅 마친 후 환호 장면.',
    broll_ideas:['급류 돌파 순간 슬로우','잔잔 구간 협곡 자연 감상','래프팅 마친 후 환호','내린천 협곡 드론뷰','출발 전 안전 교육 장면'],
    hooks:['래프팅 급류 신호가 따로 있어요','물 소리가 커지면 급류 시작이에요','자연 경고 신호 읽는 법 배웠어요','인제 내린천 래프팅 꿀팁','비 온 다음 날이 더 스릴 있어요'],
    thumbnails:['급류 돌파 슬로우','협곡 자연 감상','마친 후 환호','내린천 드론뷰','안전 교육 장면'],
    captions:{youtube:'인제 래프팅 꿀팁 — 급류 신호가 따로 있어요 🚣\n\n물 소리 커지면 급류 시작 신호!\n자연 경고 신호 읽는 법\n\n📍 강원도 인제군 내린천\n🚣 5~10월 운영 / 비 온 다음 날 급류 더 강함\n\n#인제래프팅 #인제 #강원도여행 #내린천 #래프팅꿀팁',instagram:'인제 래프팅 급류 신호가 따로 있어요 🚣\n\n물 소리 커지면 몸 낮추고 패들 잡기 ✨\n자연이 주는 경고 신호\n\n📍 강원 인제 내린천\n\n#인제래프팅 #인제여행 #강원도 #래프팅 #GemKorea',tiktok:'인제 래프팅 꿀팁 🚣 급류 직전 물 소리가 갑자기 커져요! 그게 자연의 경고 신호 그때 몸 낮추고 준비 // 비 온 다음 날 급류 더 강해 스릴 배가 #인제래프팅 #인제여행 #강원도'},
    hashtags:{korean:['#한국여행','#강원도여행','#인제여행','#래프팅','#GemKorea'],place_specific:['#인제래프팅','#내린천','#급류신호','#자연경고신호']}
  },
  {
    experience_id:'EX-GW-ADV-002', experience_name:'평창 짚와이어 체험 (알펜시아)', category_sub:'어드벤처/레포츠', region:'강원도',
    script_30s:'오늘은 알펜시아 짚와이어를 탔어요. 시속 100km로 대관령을 가르는 거예요. 근데 아무도 안 알려주는 게 있어요 — 출발 전 대관령 전체가 내려다보이는 순간이 있어요. 그 5초가 짚와이어에서 가장 무서운 순간이에요. 그리고 뛰어내리는 거예요. 너무 그 5초를 버티는 게 전부라서 좋았습니다.',
    script_60s:'오늘은 강원도 평창 알펜시아에서 짚와이어 체험을 했어요. 최고 시속 100km로 대관령 고원을 가로질러 활강하는 어드벤처예요. 2018 평창올림픽 시설이 내려다보이는 구간을 날아가요. 근데 아무도 안 알려주는 꿀팁 하나 — 짚와이어 출발 전 플랫폼에 서면 대관령 전체 풍경이 발아래로 펼쳐져요. 그 순간이 실제 짚와이어보다 더 무서울 수 있어요. 발 아래 아무것도 없고 저 멀리 착지 지점이 보이는 그 5초를 버티고 뛰어내리는 게 짚와이어의 핵심이에요. 뛰어내리고 나면 바람과 속도에 취해서 무서운 게 사라져요. 그 역설이 짚와이어 체험의 매력이에요. 겨울 설경 속 짚와이어가 특히 아름다워요. 너무 그 5초 이후의 자유가 진짜라서 좋았습니다.',
    secret_tip:'출발 플랫폼 5초 — 대관령 전체 발아래 펼쳐지는 그 순간이 가장 무서움. 뛰어내리면 바람+속도에 무서움 사라짐. 역설이 매력. 겨울 설경 속 짚와이어가 더 아름다움',
    filming_guide:'출발 플랫폼에서 발아래 내려다보는 시선 (공포 전달). 짚와이어 중간 대관령 전경 속 날아가는 장면. 착지 순간 환호.',
    broll_ideas:['출발 플랫폼 발아래 내려다보는 시선','짚와이어 중간 대관령 전경 속 날기','착지 순간 환호','대관령 설원 배경 짚와이어','플랫폼에서 뛰어내리는 순간'],
    hooks:['짚와이어 출발 5초가 가장 무서워요','발아래 대관령 전체가 보이는 그 순간','뛰어내리면 오히려 무서움이 사라져요','알펜시아 짚와이어 꿀팁','시속 100km 대관령 활강 체험'],
    thumbnails:['출발 플랫폼 발아래 시선','대관령 속 날아가는 장면','착지 순간 환호','대관령 설원 배경','뛰어내리는 순간'],
    captions:{youtube:'알펜시아 짚와이어 꿀팁 — 출발 5초가 가장 무서워요 🪂\n\n발아래 대관령 전체가 펼쳐지는 그 순간!\n뛰어내리면 바람에 무서움 사라져요\n\n📍 강원도 평창 알펜시아 짚와이어\n🪂 시속 100km / 겨울 설경 속이 더 아름다움\n\n#알펜시아짚와이어 #평창 #강원도여행 #어드벤처 #짚와이어',instagram:'알펜시아 짚와이어 출발 5초가 가장 무서워요 🪂\n\n발아래 대관령 전체 그 역설 ✨\n뛰어내리면 오히려 자유로움\n\n📍 강원 평창 알펜시아\n\n#알펜시아짚와이어 #평창여행 #강원도 #짚와이어 #GemKorea',tiktok:'알펜시아 짚와이어 꿀팁 🪂 출발 5초가 진짜 무서워요! 발아래 대관령 전체가 보이는 그 순간 // 뛰어내리면 바람에 취해서 무서움 사라짐 역설 #알펜시아짚와이어 #평창여행 #강원도'},
    hashtags:{korean:['#한국여행','#강원도여행','#평창여행','#어드벤처','#GemKorea'],place_specific:['#알펜시아짚와이어','#대관령짚와이어','#출발5초','#시속100km']}
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
