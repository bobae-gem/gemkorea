const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const now = new Date().toISOString().slice(0,19);

const newExps = [
  {experience_id:'EX-GN-NAT-050',name:'통영 스카이라인 루지',category_main:'문화/체험',category_sub:'어드벤처/레포츠',region_main:'GN',region_sub:'경상남도 통영시',address:'경상남도 통영시 발개로 205',lat:34.8555,lng:128.4241,price:'1인 10,000원~',duration:'1~2시간',reservation_required:false,target_user:['가족','커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'통영 미륵산 케이블카와 연계해 언덕에서 카트를 타고 내려오는 루지 체험이다. 중력을 이용해 트랙을 내려오는 스카이라인 루지는 속도 조절이 가능해 어린이부터 성인까지 즐길 수 있다.',source_urls:['https://www.tongyeong.go.kr/'],data_confidence:'high',tags:['통영루지','통영','경남','루지','어드벤처','케이블카','가족'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:30~17:30',phone:'055-649-3804'},
  {experience_id:'EX-GW-NAT-047',name:'원주 소금산 출렁다리 세트',category_main:'문화/체험',category_sub:'어드벤처/레포츠',region_main:'GW',region_sub:'강원특별자치도 원주시',address:'강원특별자치도 원주시 지정면 소금산길 12',lat:37.4608,lng:127.9419,price:'성인 3,000원',duration:'2~3시간',reservation_required:false,target_user:['커플','개인','가족'],nearby_places:[],related_heritage_ids:[],short_description:'섬강 협곡 100m 높이 출렁다리와 뮤지엄 산을 하루에 즐기는 원주 최고 어드벤처+예술 코스다. 투명 바닥 출렁다리에서 짜릿함을 즐기고 안도 타다오의 뮤지엄 산에서 건축·예술을 감상하는 완벽 코스다.',source_urls:['https://www.wonju.go.kr/'],data_confidence:'high',tags:['소금산출렁다리','뮤지엄산','원주','강원','출렁다리','안도타다오','어드벤처+예술'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00',phone:'033-737-3011'},
  {experience_id:'EX-GN-NAT-051',name:'울산 장생포 고래투어',category_main:'문화/체험',category_sub:'해양체험',region_main:'GN',region_sub:'울산광역시 남구',address:'울산광역시 남구 장생포고래로 244',lat:35.4692,lng:129.3781,price:'고래투어 성인 20,000원~',duration:'2시간',reservation_required:true,target_user:['가족','개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'과거 고래잡이 항구였던 울산 장생포에서 고래 관찰 유람선을 타는 체험이다. 동해 고래 서식 해역으로 나가 밍크고래·돌고래를 바다에서 직접 관찰하는 특별한 해양 생태 체험이다.',source_urls:['https://www.whalecity.go.kr/'],data_confidence:'high',tags:['고래투어','울산','장생포','고래관찰','밍크고래','돌고래','해양생태'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'seasonal',operating_hours:'5~10월 (예약 필수)',phone:'052-226-0980'},
  {experience_id:'EX-JN-NAT-052',name:'여수 돌산 갓밭 가을 경관',category_main:'문화/체험',category_sub:'자연체험',region_main:'JN',region_sub:'전라남도 여수시',address:'전라남도 여수시 돌산읍 갓밭 일원',lat:34.6882,lng:127.7325,price:'무료',duration:'1시간',reservation_required:false,target_user:['커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'여수 돌산도 특산 갓이 재배되는 갓밭에서 11~12월 초록빛 갓밭 경관을 감상하는 체험이다. 돌산 해안과 갓밭이 어우러지는 경관이 아름다우며 갓김치 담그기 체험과 함께하는 여수 가을 코스다.',source_urls:['https://www.yeosu.go.kr/'],data_confidence:'high',tags:['돌산갓밭','여수','전남','갓밭','가을경관','돌산도','갓김치'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'seasonal',operating_hours:'11~12월 갓 시즌 (무료)',phone:'061-659-3745'},
  {experience_id:'EX-GG-NAT-052',name:'서울 근교 전곡 선사 유적 투어',category_main:'문화/체험',category_sub:'역사 체험',region_main:'GG',region_sub:'경기도 연천군',address:'경기도 연천군 전곡읍 평화로443번길 34',lat:38.1028,lng:127.1231,price:'성인 3,000원',duration:'2~3시간',reservation_required:false,target_user:['가족','어린이','개인'],nearby_places:[],related_heritage_ids:[],short_description:'경기도 연천 전곡리 구석기 유적지에 조성된 체험형 테마파크와 선사박물관을 탐방하는 체험이다. 70만 년 전 전기 구석기 문화를 어린이들이 직접 체험하며 배우는 역사 교육 체험이다.',source_urls:['https://www.yeoncheon.go.kr/'],data_confidence:'high',tags:['전곡선사유적','연천','경기','구석기','70만년전','어린이체험','역사교육'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:30~17:30 (월요일 휴관)',phone:'031-839-2561'},
  {experience_id:'EX-GN-NAT-052',name:'남해 창선·삼천포 대교 드라이브',category_main:'문화/체험',category_sub:'자연체험',region_main:'GN',region_sub:'경상남도 남해군',address:'경상남도 남해군 창선면 창선대교 일원',lat:34.9306,lng:128.0181,price:'무료',duration:'1시간',reservation_required:false,target_user:['커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'남해 창선도·삼천포를 연결하는 다섯 개 다리를 드라이브하는 체험이다. 섬과 섬 사이 바다 위를 달리는 5개 연속 교량 드라이브 코스가 독특하며 일몰 시간 드라이브가 특히 아름답다.',source_urls:['https://www.namhae.go.kr/'],data_confidence:'high',tags:['창선삼천포대교','남해','경남','드라이브','5개다리','일몰드라이브','섬'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (무료)',phone:'055-860-3671'},
  {experience_id:'EX-GG-NAT-053',name:'가평 청평 아침호수 카누',category_main:'문화/체험',category_sub:'어드벤처/레포츠',region_main:'GG',region_sub:'경기도 가평군',address:'경기도 가평군 청평면 청평리 청평호',lat:37.7703,lng:127.4867,price:'1인 20,000원~',duration:'1~2시간',reservation_required:true,target_user:['커플','개인','가족'],nearby_places:[],related_heritage_ids:[],short_description:'경기도 가평 청평호에서 카누를 타며 이른 아침 물안개 호수를 즐기는 체험이다. 이른 아침 잔잔한 청평호 수면에 물안개가 피어오를 때 카누를 타면 동화 같은 분위기를 즐길 수 있다.',source_urls:['https://www.gapyeong.go.kr/'],data_confidence:'high',tags:['청평호카누','가평','경기','카누','물안개','이른아침','청평호'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'seasonal',operating_hours:'5~10월',phone:'031-585-7401'},
  {experience_id:'EX-JN-NAT-053',name:'광주 5·18 민주광장 투어',category_main:'문화/체험',category_sub:'역사 체험',region_main:'JN',region_sub:'광주광역시 동구',address:'광주광역시 동구 금남로 1가 5·18민주광장',lat:35.1486,lng:126.9161,price:'무료',duration:'1~2시간',reservation_required:false,target_user:['개인','청년','외국인'],nearby_places:[],related_heritage_ids:[],short_description:'1980년 5·18 민주화운동의 중심 광장이었던 광주 구 전남도청과 5·18민주광장을 탐방하는 역사 체험이다. 국립아시아문화전당으로 변신한 공간에서 5·18 역사와 현재 문화 예술이 공존하는 현장을 이해한다.',source_urls:['https://www.gwangju.go.kr/'],data_confidence:'high',tags:['5·18민주광장','광주','전남도청','민주화운동','역사탐방','아시아문화전당','무료'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (무료)',phone:'062-380-8888'},
  {experience_id:'EX-GW-NAT-048',name:'속초 외옹치 바다향기 산책로',category_main:'문화/체험',category_sub:'자연체험',region_main:'GW',region_sub:'강원특별자치도 속초시',address:'강원특별자치도 속초시 외옹치 해안가',lat:38.2044,lng:128.5917,price:'무료',duration:'1~2시간',reservation_required:false,target_user:['커플','개인','가족'],nearby_places:[],related_heritage_ids:[],short_description:'속초 외옹치 해안 절벽에 조성된 바다향기 산책로를 걷는 체험이다. 2.2km 해안 산책로 중 일부 구간이 유리 바닥으로 되어있어 발아래 동해 바다가 보이는 스릴 있는 트레킹 코스다.',source_urls:['https://www.sokcho.go.kr/'],data_confidence:'high',tags:['외옹치','속초','강원','바다향기산책로','해안산책로','유리바닥','동해'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (무료)',phone:'033-639-2690'},
  {experience_id:'EX-GN-NAT-053',name:'진해 불모산 철쭉 트레킹',category_main:'문화/체험',category_sub:'자연체험',region_main:'GN',region_sub:'경상남도 창원시',address:'경상남도 창원시 성산구 불모산',lat:35.1758,lng:128.7419,price:'무료',duration:'3~4시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'창원 진해 불모산에서 5월 철쭉이 만개하는 시기에 트레킹하는 체험이다. 군항제 벚꽃 시즌과 연이어 철쭉이 피는 불모산은 진해의 봄을 두 번 즐기는 코스로 경남 봄 트레킹 명소다.',source_urls:['https://www.changwon.go.kr/'],data_confidence:'high',tags:['불모산철쭉','진해','창원','경남','철쭉','5월','봄트레킹'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'5월 철쭉 시즌 (무료)',phone:'055-225-3691'},
  {experience_id:'EX-JN-NAT-054',name:'화순 세량지 벚꽃 반영',category_main:'문화/체험',category_sub:'자연체험',region_main:'JN',region_sub:'전라남도 화순군',address:'전라남도 화순군 이양면 증리 세량지',lat:34.9781,lng:127.1367,price:'무료',duration:'1시간',reservation_required:false,target_user:['커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'전남 화순 세량지에서 봄 벚꽃이 저수지 수면에 반영되는 아름다운 장면을 감상하는 체험이다. 새벽 수면이 잔잔할 때 벚꽃 반영이 완벽한 대칭을 이루는 장면이 전국 사진가들이 찾는 봄 포토 명소다.',source_urls:['https://www.hwasun.go.kr/'],data_confidence:'high',tags:['세량지벚꽃','화순','전남','벚꽃반영','새벽','봄꽃','사진명소'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'3월 말~4월 초 벚꽃 시즌 (무료)',phone:'061-379-3886'},
  {experience_id:'EX-GG-NAT-054',name:'동두천 자유시장 로데오거리',category_main:'문화/체험',category_sub:'역사 체험',region_main:'GG',region_sub:'경기도 동두천시',address:'경기도 동두천시 생연동 자유시장 일원',lat:37.9044,lng:127.0667,price:'무료',duration:'1~2시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'동두천 미군 기지 인근 자유시장과 로데오거리를 탐방하는 역사 문화 체험이다. 한국 록과 힙합 문화의 발상지 동두천에서 한국 대중음악 역사와 다문화 혼합 문화를 이해하는 독특한 여행 체험이다.',source_urls:['https://www.ddc.go.kr/'],data_confidence:'high',tags:['동두천자유시장','동두천','경기','로데오거리','미군기지','록문화','다문화'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중',phone:'031-860-2022'}
];

const newShorts = [
  {
    experience_id:'EX-GB-HAN-002', experience_name:'안동 하회마을 무형문화재 탈춤 관람', category_sub:'탈춤/풍물 체험', region:'경상북도',
    script_30s:'오늘은 안동 하회마을 탈춤 공연을 봤어요. 800년 역사예요. 근데 아무도 안 알려주는 게 있어요 — 탈춤에서 각시탈이 말을 못 해요. 벙어리 각시예요. 대신 몸으로만 표현해요. 그 침묵의 표현이 말보다 강해요. 너무 침묵이 연기가 된다는 게 좋았습니다.',
    script_60s:'오늘은 경북 안동 하회마을에서 하회별신굿탈놀이 공연을 봤어요. 유네스코 인류무형문화유산으로 800년 역사를 가진 탈춤이에요. 매주 토·일요일 오후에 상설 공연이 열려요. 근데 아무도 안 알려주는 꿀팁 하나 — 탈춤 속 각시탈의 비밀이 있어요. 각시탈을 쓴 배우는 공연 내내 말을 하지 않아요. 각시는 벙어리 설정이에요. 대신 몸짓·눈짓·손짓만으로 모든 감정을 표현해요. 초랭이탈이 각시를 희롱해도 각시는 말 한마디 못 하고 몸으로만 저항해요. 그 침묵의 저항이 말로 하는 저항보다 더 강하게 느껴져요. 사회적 약자가 침묵 속에서도 존엄을 유지하는 메시지예요. 이 사실을 알고 각시탈을 보면 완전히 다르게 느껴져요. 너무 침묵이 가장 강한 연기가 되는 순간이라서 좋았습니다.',
    secret_tip:'각시탈 = 벙어리 설정 — 공연 내내 말 없이 몸짓만. 침묵의 저항이 말보다 강한 메시지. 이 사실 알면 각시탈 보는 시각이 달라짐. 공연 후 탈 쓰고 포토타임',
    filming_guide:'각시탈 벙어리 몸짓 연기 클로즈업. 초랭이와 각시 탈춤 대결 장면. 하회마을 배경 탈춤 전체 광각.',
    broll_ideas:['각시탈 벙어리 몸짓 연기','초랭이와 각시 대결 장면','하회마을 배경 탈춤 광각','탈춤 후 탈 쓰고 포토','하회탈 클로즈업'],
    hooks:['각시탈이 벙어리 설정이에요','공연 내내 말 한마디 없어요','침묵의 저항이 말보다 강해요','이 사실 알면 각시탈이 달리 보여요','안동 하회탈춤 꿀팁'],
    thumbnails:['각시탈 몸짓 연기','초랭이 각시 대결','하회마을 탈춤 광각','탈 쓰고 포토','하회탈 클로즈업'],
    captions:{youtube:'안동 하회탈춤 — 각시탈이 벙어리 설정이에요 😶\n\n공연 내내 말 없이 몸짓만!\n침묵의 저항이 가장 강한 메시지\n\n📍 경북 안동 하회마을 탈춤 공연장\n😶 매주 토·일 오후 상설 공연\n\n#안동하회탈춤 #안동 #경북여행 #각시탈 #유네스코',instagram:'안동 하회탈춤 각시탈이 벙어리 설정이에요 😶\n\n말 한마디 없이 몸짓만 침묵의 저항 ✨\n이 사실 알면 각시탈이 달리 보여요\n\n📍 경북 안동 하회마을\n\n#안동하회탈춤 #안동여행 #경북 #각시탈 #GemKorea',tiktok:'안동 하회탈춤 꿀팁 😶 각시탈이 벙어리 설정이에요! 공연 내내 말 한마디 없이 몸짓만 // 침묵의 저항이 말보다 강한 메시지 알고 보면 달라져요 #안동하회탈춤 #안동여행 #경북'},
    hashtags:{korean:['#한국여행','#경북여행','#안동여행','#탈춤','#GemKorea'],place_specific:['#안동하회탈춤','#각시탈벙어리','#침묵의저항','#유네스코탈춤']}
  },
  {
    experience_id:'EX-CN-AGR-001', experience_name:'아산 세계꽃식물원', category_sub:'자연체험', region:'충청남도',
    script_30s:'오늘은 아산 세계꽃식물원에 왔어요. 4,000종 꽃이 있어요. 근데 아무도 안 알려주는 게 있어요 — 식물원 안에 열대 식물관이 있어요. 겨울에 들어가면 더운 바나나 열대 우림이에요. 겨울에 한국에서 열대를 경험하는 거예요. 너무 계절이 순간 바뀌는 게 좋았습니다.',
    script_60s:'오늘은 충남 아산 세계꽃식물원에 왔어요. 4,000여 종 식물을 전시하는 국내 최대 규모 민간 식물원이에요. 계절마다 다른 테마 전시가 열려요. 근데 아무도 안 알려주는 꿀팁 하나 — 아산 세계꽃식물원에 열대 식물관이 있어요. 겨울에 이 식물관에 들어가면 갑자기 열대 온실이에요. 바나나·야자수·열대 꽃들이 가득하고 온도도 훨씬 따뜻해요. 겨울 추위 속에서 이 문을 열고 들어가는 순간 마치 동남아에 온 것 같은 착각을 해요. 이 계절 역전 경험이 식물원 방문의 가장 특별한 순간이에요. 봄·여름 꽃 시즌보다 겨울에 오히려 더 특별한 체험이 될 수 있어요. 너무 겨울에 열대를 만나는 그 순간이 좋았습니다.',
    secret_tip:'겨울 열대 식물관 = 계절 역전 체험 — 겨울 추위에서 문 하나 열면 열대 바나나 온실. 봄여름보다 겨울이 더 특별한 체험. 아산 도고온천+식물원 세트',
    filming_guide:'겨울 추위 → 열대 온실 문 열기 순간 전환. 바나나·야자수 열대 식물 클로즈업. 계절별 꽃 전시 비교.',
    broll_ideas:['겨울→열대 온실 문 열기 순간','바나나 야자수 열대 식물 클로즈업','계절별 꽃 전시 비교','아산 식물원 외경','4000종 식물 전시 전경'],
    hooks:['겨울에 열대 식물관 들어가봤어요','문 하나 열면 동남아예요','겨울이 오히려 더 특별해요','계절이 순간 바뀌는 그 경험','아산 세계꽃식물원 꿀팁'],
    thumbnails:['겨울→열대 문 열기','바나나 야자수 클로즈업','계절별 꽃 비교','식물원 외경','4000종 전시'],
    captions:{youtube:'아산 세계꽃식물원 — 겨울에 열대 온실 들어가봐요 🌺\n\n문 하나 열면 동남아!\n겨울이 오히려 더 특별한 체험\n\n📍 충남 아산시 세계꽃식물원\n🌺 겨울 열대 식물관이 하이라이트\n\n#아산식물원 #아산 #충남여행 #세계꽃식물원 #열대식물관',instagram:'아산 세계꽃식물원 겨울에 열대 온실 들어가봐요 🌺\n\n문 하나 열면 동남아 계절 역전 ✨\n겨울이 오히려 더 특별한 체험\n\n📍 충남 아산 세계꽃식물원\n\n#아산식물원 #아산여행 #충남 #열대식물관 #GemKorea',tiktok:'아산 식물원 꿀팁 🌺 겨울에 열대 식물관 들어가세요! 문 하나 열면 바나나 야자수 동남아 온실 // 겨울이 오히려 더 특별한 체험 계절 역전 #아산식물원 #아산여행 #충남'},
    hashtags:{korean:['#한국여행','#충남여행','#아산여행','#식물원','#GemKorea'],place_specific:['#아산세계꽃식물원','#겨울열대식물관','#계절역전체험','#겨울에동남아']}
  },
  {
    experience_id:'EX-SE-ART-005', experience_name:'서울 국립중앙박물관 야간개장', category_sub:'박물관', region:'서울특별시',
    script_30s:'오늘은 국립중앙박물관 야간 개장에 왔어요. 수·토 21시까지예요. 근데 아무도 안 알려주는 게 있어요 — 야간에 사유의 방 반가사유상이 달라요. 조명이 달라서 표정이 낮과 다르게 보여요. 더 명상적이에요. 너무 같은 불상이 밤에 달라 보인다는 게 좋았습니다.',
    script_60s:'오늘은 서울 용산 국립중앙박물관 야간 개장에 왔어요. 매주 수요일·토요일 21시까지 야간 개방해요. 근데 아무도 안 알려주는 꿀팁 하나 — 야간 개장에서 사유의 방이 가장 달라요. 사유의 방은 국보 반가사유상을 특별 조명으로 전시하는 독립 공간이에요. 낮에는 자연광이 섞여 들어오는데 야간에는 순수하게 설계된 조명만 남아요. 그 조명이 반가사유상의 미소를 더 신비롭고 깊게 보이게 해요. 낮에 보는 미소와 밤에 보는 미소가 달라요. 더 명상적이에요. 사유의 방을 낮과 밤에 각각 방문해서 비교해보는 게 이 박물관의 숨겨진 체험이에요. 너무 같은 불상이 밤에 달라 보인다는 게 좋았습니다.',
    secret_tip:'야간 사유의 방 반가사유상 = 설계 조명만 남아 더 신비로운 미소 — 낮 자연광과 다른 깊이. 낮과 밤 비교 방문이 가장 좋은 체험. 수·토 21:00까지 무료',
    filming_guide:'야간 사유의 방 조명 반가사유상 클로즈업. 낮과 밤 미소 비교. 박물관 야외 연못 야경.',
    broll_ideas:['야간 반가사유상 조명 클로즈업','낮과 밤 미소 비교','박물관 야외 연못 야경','경천사지 석탑 야간','전시 관람객 집중 표정'],
    hooks:['야간 사유의 방 반가사유상이 달라요','조명이 달라서 미소가 달리 보여요','낮과 밤 비교 방문이 최고','수토 21시까지 무료예요','국립중앙박물관 야간 꿀팁'],
    thumbnails:['야간 반가사유상 조명','낮밤 미소 비교','박물관 연못 야경','경천사지 야간','관람객 집중 표정'],
    captions:{youtube:'국립중앙박물관 야간 — 사유의 방이 달라요 🏛️\n\n야간 조명에서 반가사유상 미소가 더 신비로워요!\n낮과 밤 비교 방문이 최고 체험\n\n📍 서울 용산구 국립중앙박물관\n🏛️ 수·토 21:00까지 야간 무료\n\n#국립중앙박물관야간 #서울여행 #반가사유상 #사유의방 #야간박물관',instagram:'국립중앙박물관 야간 사유의 방이 달라요 🏛️\n\n야간 조명에서 반가사유상 미소 더 신비롭고 깊어요 ✨\n낮과 밤 비교 방문 추천\n\n📍 서울 용산 국립중앙박물관\n\n#국립중앙박물관 #서울여행 #반가사유상 #야간 #GemKorea',tiktok:'국립중앙박물관 야간 꿀팁 🏛️ 사유의 방 반가사유상이 낮이랑 달라요! 야간 조명에서 미소가 더 신비롭고 깊어요 // 낮과 밤 비교 방문이 최고 무료 #국립중앙박물관 #서울여행 #반가사유상'},
    hashtags:{korean:['#한국여행','#서울여행','#박물관','#야간개장','#GemKorea'],place_specific:['#국립중앙박물관야간','#사유의방야간','#반가사유상조명','#낮밤미소비교']}
  },
  {
    experience_id:'EX-IC-CUL-001', experience_name:'인천 차이나타운 + 자장면박물관', category_sub:'역사 체험', region:'인천광역시',
    script_30s:'오늘은 인천 차이나타운에서 자장면 원조를 먹었어요. 1905년 공화춘이 원조예요. 근데 아무도 안 알려주는 게 있어요 — 원조 자장면은 지금과 달라요. 쓴맛이 나요. 지금 자장면은 한국화 됐어요. 그 변화가 100년 역사예요. 너무 음식이 역사가 되는 게 좋았습니다.',
    script_60s:'오늘은 인천 중구 차이나타운에서 자장면박물관 탐방과 원조 자장면 시식을 했어요. 1883년 인천 개항과 함께 청나라 노동자들이 이 지역에 정착했고 그들의 음식이 한국에서 진화한 것이 지금의 자장면이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 중국의 원조 자장면과 한국의 자장면이 완전히 달라요. 중국 자장면은 짠 된장 소스에 야채를 섞어 면 위에 올리는 건데 쓴맛이 강해요. 한국 자장면은 달고 부드러운 맛이에요. 1905년 공화춘에서 처음 팔기 시작할 때부터 이미 한국인 입맛에 맞게 변했어요. 100년 동안 점점 더 달고 부드럽게 변한 거예요. 자장면이 한국화된 역사가 한국 음식 문화의 특성을 보여줘요. 너무 음식이 문화 적응의 역사라는 게 좋았습니다.',
    secret_tip:'원조 중국 자장면 vs 한국 자장면 = 100년 한국화 역사 — 쓴맛 짠맛에서 달고 부드럽게 변화. 1905년 공화춘 첫 판매부터 이미 변화 시작. 짜장면박물관 입장료 500원',
    filming_guide:'자장면박물관 1905년 원조 사진 전시. 현재 자장면과 중국 원조 비교. 차이나타운 홍등 골목.',
    broll_ideas:['1905년 원조 자장면 사진 전시','현재와 중국 원조 비교','차이나타운 홍등 골목','공화춘 건물 외관 현재','자장면박물관 내부'],
    hooks:['원조 중국 자장면은 쓴맛이에요','한국 자장면은 100년 동안 달아졌어요','음식이 문화 적응의 역사예요','1905년부터 이미 한국화 시작','인천 차이나타운 꿀팁'],
    thumbnails:['1905년 원조 사진','한국 중국 비교','차이나타운 홍등','공화춘 현재 외관','박물관 내부'],
    captions:{youtube:'인천 차이나타운 자장면 — 원조는 쓴맛이에요 🍜\n\n100년 동안 한국화로 달아진 역사!\n음식이 문화 적응의 역사\n\n📍 인천 중구 차이나타운·자장면박물관\n🍜 자장면박물관 입장료 500원\n\n#인천차이나타운 #자장면역사 #인천여행 #공화춘 #한국화자장면',instagram:'인천 차이나타운 원조 자장면은 쓴맛이에요 🍜\n\n100년 동안 달아진 한국화 역사 ✨\n음식이 문화 적응의 역사예요\n\n📍 인천 중구 차이나타운\n\n#인천차이나타운 #자장면역사 #인천여행 #GemKorea',tiktok:'인천 차이나타운 꿀팁 🍜 원조 자장면은 쓴맛이에요! 100년 동안 한국화로 달아진 역사 // 음식이 문화 적응의 역사를 보여줘요 #인천차이나타운 #자장면역사 #인천여행'},
    hashtags:{korean:['#한국여행','#인천여행','#차이나타운','#자장면역사','#GemKorea'],place_specific:['#인천차이나타운','#자장면100년한국화','#공화춘원조','#자장면박물관']}
  },
  {
    experience_id:'EX-GG-FAM-004', experience_name:'롯데월드 어드벤처 자이로스윙', category_sub:'테마파크', region:'서울특별시',
    script_30s:'오늘은 롯데월드 자이로스윙을 탔어요. 18m 높이에서 360도 회전이에요. 근데 아무도 안 알려주는 게 있어요 — 자이로스윙은 거꾸로 매달리는 순간이 딱 2초예요. 그 2초가 모든 것이에요. 그 2초를 위해 탑승하는 거예요. 너무 2초가 다 이라는 게 좋았습니다.',
    script_60s:'오늘은 서울 잠실 롯데월드 어드벤처 자이로스윙을 탔어요. 18m 높이에서 360도 회전하며 거꾸로 뒤집어지는 롯데월드 대표 어트랙션이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 자이로스윙 탑승의 핵심이 360도 중에서 거꾸로 뒤집어지는 순간이에요. 그 순간이 딱 2초 정도예요. 하늘과 땅이 바뀌면서 혈액이 머리로 쏠리는 그 2초가 자이로스윙이 주는 모든 체험이에요. 그 2초를 위해 대기 줄을 서고 탑승하는 거예요. 그 2초 전 두근거림과 2초 후 해방감까지 합치면 완전한 경험이에요. 비오는 날 롯데월드가 실내라 한산한 것처럼 자이로스윙도 비오는 날 대기가 짧은 편이에요. 너무 2초가 모든 것이라는 역설이 좋았습니다.',
    secret_tip:'자이로스윙 거꾸로 뒤집히는 순간 = 딱 2초 — 하늘과 땅 바뀌는 혈액 쏠림 2초가 전부. 그 2초 전 두근거림+2초 후 해방감까지 완전한 경험. 비오는 날 대기 짧음',
    filming_guide:'거꾸로 뒤집히는 2초 슬로우 촬영. 탑승 전 두근거리는 표정. 탑승 후 환호+해방감 표정.',
    broll_ideas:['거꾸로 뒤집히는 2초 슬로우','탑승 전 두근거리는 표정','탑승 후 환호 해방감','롯데월드 자이로스윙 외관','석촌호수 배경 롯데월드'],
    hooks:['자이로스윙 거꾸로 뒤집히는 게 2초예요','그 2초가 자이로스윙의 전부예요','하늘과 땅이 바뀌는 그 순간','2초를 위해 줄 서는 어트랙션','롯데월드 자이로스윙 꿀팁'],
    thumbnails:['거꾸로 뒤집히는 슬로우','탑승 전 두근거리는 표정','탑승 후 환호 해방감','자이로스윙 외관','석촌호수 배경'],
    captions:{youtube:'롯데월드 자이로스윙 — 거꾸로 뒤집히는 게 딱 2초예요 🎢\n\n그 2초가 자이로스윙의 전부!\n하늘과 땅이 바뀌는 그 순간\n\n📍 서울 송파구 롯데월드 어드벤처\n🎢 비오는 날 대기 짧아요\n\n#롯데월드자이로스윙 #롯데월드 #잠실 #서울여행 #어트랙션',instagram:'롯데월드 자이로스윙 거꾸로 뒤집히는 게 2초예요 🎢\n\n그 2초가 전부 하늘과 땅이 바뀌는 순간 ✨\n2초를 위해 줄 서는 어트랙션\n\n📍 서울 잠실 롯데월드\n\n#자이로스윙 #롯데월드 #잠실 #서울여행 #GemKorea',tiktok:'롯데월드 자이로스윙 꿀팁 🎢 거꾸로 뒤집히는 순간이 딱 2초예요! 그 2초가 자이로스윙의 전부 // 하늘과 땅이 바뀌는 2초를 위해 줄 서는 어트랙션 #자이로스윙 #롯데월드 #잠실'},
    hashtags:{korean:['#한국여행','#서울여행','#롯데월드','#어트랙션','#GemKorea'],place_specific:['#롯데월드자이로스윙','#거꾸로2초','#하늘땅바뀌기','#롯데월드어드벤처']}
  },
  {
    experience_id:'EX-GG-ART-003', experience_name:'양주 장욱진미술관', category_sub:'미술관', region:'경기도',
    script_30s:'오늘은 양주 장욱진미술관에 왔어요. 소우주를 그린 화가예요. 근데 아무도 안 알려주는 게 있어요 — 장욱진 그림은 작아요. 엽서 크기예요. 그 작은 크기가 의도예요. 크게 그리면 정서가 없다고 했어요. 너무 작음이 철학이라는 게 좋았습니다.',
    script_60s:'오늘은 경기도 양주 장흥 장욱진 미술관에 왔어요. 한국 근현대 화가 장욱진의 작품을 전시하는 전문 미술관이에요. 자연 속에 아담하게 자리한 미술관이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 장욱진 그림이 대부분 매우 작아요. 엽서 크기 정도예요. 이게 우연이 아니에요. 그는 의도적으로 작은 캔버스를 썼어요. "그림은 크면 정서가 없어진다"고 했어요. 작은 그림 속에 집·나무·사람·새가 가득한 소우주가 담겨있어요. 가까이 들여다봐야 보이는 디테일이 있어요. 전시실에서 그림 앞에 오래 머물수록 더 많은 것이 보여요. 서두르지 않고 작은 그림 하나하나를 가까이서 들여다보는 것이 장욱진 미술관 관람법이에요. 너무 작음이 깊이라는 철학이 좋았습니다.',
    secret_tip:'장욱진 그림 = 엽서 크기의 의도 — "크면 정서 없다"는 철학. 가까이 들여다봐야 소우주 디테일 보임. 서두르지 않는 관람이 핵심. 에버랜드+호암미술관 용인 세트',
    filming_guide:'작은 장욱진 그림 가까이 들여다보기. 집·나무·새 소우주 디테일 클로즈업. 자연 속 미술관 외경.',
    broll_ideas:['작은 그림 가까이 들여다보기','집 나무 새 소우주 클로즈업','자연 속 미술관 외경','장욱진 작품 작은 크기 비교','관람객 오래 머무는 장면'],
    hooks:['장욱진 그림이 엽서 크기예요','크면 정서가 없다는 철학이에요','작음이 깊이를 만드는 역설','가까이 들여다봐야 소우주 보여요','양주 장욱진 미술관 꿀팁'],
    thumbnails:['작은 그림 들여다보기','소우주 클로즈업','자연 속 미술관','크기 비교','오래 머무는 관람'],
    captions:{youtube:'양주 장욱진 미술관 — 그림이 엽서 크기예요 🎨\n\n크면 정서가 없다는 철학!\n작은 그림 속 소우주를 들여다보기\n\n📍 경기도 양주시 장흥 장욱진 미술관\n🎨 자연 속 미술관 / 서두르지 않는 관람\n\n#장욱진미술관 #양주 #경기여행 #장욱진 #소우주',instagram:'양주 장욱진 미술관 그림이 엽서 크기예요 🎨\n\n크면 정서 없다는 철학 작음이 깊이 역설 ✨\n가까이 들여다봐야 소우주 보여요\n\n📍 경기 양주 장욱진 미술관\n\n#장욱진미술관 #양주여행 #경기 #장욱진 #GemKorea',tiktok:'장욱진 미술관 꿀팁 🎨 그림이 엽서 크기인데 의도예요! 크면 정서가 없다는 장욱진의 철학 // 가까이 들여다봐야 소우주 디테일 보여요 #장욱진미술관 #양주여행 #경기'},
    hashtags:{korean:['#한국여행','#경기여행','#양주여행','#미술관','#GemKorea'],place_specific:['#장욱진미술관','#엽서크기그림','#크면정서없다','#소우주들여다보기']}
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
