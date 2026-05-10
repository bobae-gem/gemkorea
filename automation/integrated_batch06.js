const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const now = new Date().toISOString().slice(0,19);

const newExps = [
  {experience_id:'EX-GW-NIG-002',name:'강원 태백산 눈꽃 트레킹',category_main:'문화/체험',category_sub:'자연체험',region_main:'GW',region_sub:'강원특별자치도 태백시',address:'강원특별자치도 태백시 태백산로 1210',lat:37.0858,lng:128.9178,price:'성인 2,000원',duration:'3~5시간',reservation_required:false,target_user:['개인','커플','가족'],nearby_places:[],related_heritage_ids:[],short_description:'해발 1,567m 태백산 천제단까지 이어지는 눈꽃 트레킹이다. 겨울 능선에 눈이 쌓이면 주목 군락이 온통 하얀 눈꽃으로 뒤덮여 동화 속 풍경이 펼쳐진다. 한국에서 가장 일찍 눈꽃을 볼 수 있는 명산이다.',source_urls:['https://taebaeksan.knps.or.kr/'],data_confidence:'high',tags:['태백산','눈꽃트레킹','태백','강원','주목군락','겨울등산','천제단'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'seasonal',operating_hours:'일출~일몰 (겨울 시즌)',phone:'033-552-0552'},
  {experience_id:'EX-GG-NIG-003',name:'서울 한강 야간 자전거 투어',category_main:'문화/체험',category_sub:'어드벤처/레포츠',region_main:'GG',region_sub:'서울특별시 영등포구',address:'서울특별시 영등포구 여의도한강공원 자전거 대여소',lat:37.5283,lng:126.9315,price:'자전거 대여 1시간 3,000원~',duration:'2~3시간',reservation_required:false,target_user:['커플','개인','청년'],nearby_places:[],related_heritage_ids:[],short_description:'서울 한강 자전거 도로를 야간에 달리는 투어다. 여의도에서 반포대교 달빛무지개분수·63빌딩·마포대교 야경을 자전거로 달리며 즐기는 서울 야경 최고의 코스다.',source_urls:['https://hangang.seoul.go.kr/'],data_confidence:'high',tags:['한강자전거','서울','야경','여의도','반포대교','한강공원','야간투어'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'seasonal',operating_hours:'자전거 대여 06:00~22:00',phone:'02-3780-0570'},
  {experience_id:'EX-JJ-AGR-002',name:'제주 천혜향 귤 따기 체험',category_main:'문화/체험',category_sub:'농촌 체험',region_main:'JJ',region_sub:'제주특별자치도 서귀포시',address:'제주특별자치도 서귀포시 남원읍 일원',lat:33.2853,lng:126.6875,price:'1인 12,000원~',duration:'1~2시간',reservation_required:true,target_user:['가족','어린이','커플'],nearby_places:[],related_heritage_ids:[],short_description:'제주 서귀포 농장에서 천혜향·한라봉·레드향 등 제주 프리미엄 감귤을 직접 따는 농촌 체험이다. 일반 귤보다 크고 당도가 높은 천혜향을 농장에서 바로 따 먹는 달콤한 경험이다.',source_urls:['https://www.visitjeju.net/'],data_confidence:'high',tags:['천혜향따기','제주','서귀포','감귤농장','농촌체험','한라봉','가족체험'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'seasonal',operating_hours:'12~2월 천혜향 시즌',phone:'064-730-3500'},
  {experience_id:'EX-GG-NIG-004',name:'인천 월미도 문화의 거리 야경',category_main:'문화/체험',category_sub:'야경/야간투어',region_main:'GG',region_sub:'인천광역시 중구',address:'인천광역시 중구 월미로 일원',lat:37.4758,lng:126.5868,price:'무료',duration:'1~2시간',reservation_required:false,target_user:['커플','가족','개인'],nearby_places:[],related_heritage_ids:[],short_description:'인천 월미도 해안을 따라 놀이공원·횟집·카페·유람선이 펼쳐지는 월미도 문화의 거리를 야간에 탐방하는 투어다. 서울과 가까운 인천 대표 야경 명소로 디스코 팡팡·바이킹 등 놀이기구도 즐길 수 있다.',source_urls:['https://www.icjgss.or.kr/'],data_confidence:'high',tags:['월미도','인천','야경','놀이공원','바이킹','유람선','가족'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'10:00~23:00',phone:'032-765-4860'},
  {experience_id:'EX-JN-AGR-003',name:'담양 죽순 수확 체험',category_main:'문화/체험',category_sub:'농촌 체험',region_main:'JN',region_sub:'전라남도 담양군',address:'전라남도 담양군 담양읍 죽녹원 인근',lat:35.3220,lng:126.9877,price:'1인 12,000원',duration:'1~2시간',reservation_required:true,target_user:['가족','개인'],nearby_places:[],related_heritage_ids:[],short_description:'대나무의 고장 담양에서 봄철 죽순을 직접 캐는 체험이다. 4~5월 죽순 시즌에 대나무 숲에서 갓 솟아오른 죽순을 직접 수확하고 죽순 요리를 함께 체험한다.',source_urls:['https://www.damyang.go.kr/'],data_confidence:'high',tags:['죽순수확','담양','전남','대나무','죽순','봄농사','가족체험'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'seasonal',operating_hours:'4~5월 죽순 시즌',phone:'061-380-3151'},
  {experience_id:'EX-GW-ECO-003',name:'양구 생태식물원 방문',category_main:'문화/체험',category_sub:'자연체험',region_main:'GW',region_sub:'강원특별자치도 양구군',address:'강원특별자치도 양구군 양구읍 박수근로 265',lat:38.1044,lng:127.9855,price:'성인 3,000원',duration:'2~3시간',reservation_required:false,target_user:['가족','개인'],nearby_places:[],related_heritage_ids:[],short_description:'DMZ 인접 양구에 위치한 생태식물원으로 희귀 고산 식물과 습지 생태계를 탐방한다. 민통선 근처의 청정 자연 환경에서 자라는 특별한 식물들을 관찰하고 자연 생태 교육 프로그램에 참여할 수 있다.',source_urls:['https://www.yanggu.go.kr/'],data_confidence:'high',tags:['생태식물원','양구','강원','DMZ','고산식물','습지생태','자연체험'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00 (동절기 17:00)',phone:'033-480-2594'},
  {experience_id:'EX-GG-CUL-004',name:'의정부 부대찌개 골목 투어',category_main:'문화/체험',category_sub:'지역 먹거리',region_main:'GG',region_sub:'경기도 의정부시',address:'경기도 의정부시 의정부동 부대찌개 거리 일원',lat:37.7381,lng:127.0436,price:'1만원~',duration:'1~2시간',reservation_required:false,target_user:['개인','커플','가족'],nearby_places:[],related_heritage_ids:[],short_description:'한국 부대찌개의 발원지 의정부 부대찌개 거리를 탐방하는 먹거리 투어다. 6·25 전쟁 후 미군 부대 음식으로 시작한 부대찌개의 역사와 함께 30년 이상 된 원조 노포들을 방문한다.',source_urls:['https://www.ui4u.go.kr/'],data_confidence:'high',tags:['부대찌개','의정부','경기','부대찌개거리','원조','한국음식역사','먹거리'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'11:00~22:00',phone:'031-828-2114'},
  {experience_id:'EX-GW-AGR-001',name:'철원 두루미 탐조 투어',category_main:'문화/체험',category_sub:'자연체험',region_main:'GW',region_sub:'강원특별자치도 철원군',address:'강원특별자치도 철원군 동송읍 이평리 일원',lat:38.2714,lng:127.3146,price:'탐조 투어 1인 15,000원',duration:'3~4시간',reservation_required:true,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'겨울 철원평야에 수천 마리의 천연기념물 두루미와 재두루미가 월동하는 장관을 탐조하는 투어다. 망원경으로 두루미 군무를 관찰하고 DMZ 비무장지대 자연 보전의 아이러니를 이해하는 특별한 체험이다.',source_urls:['https://www.cwg.go.kr/tour/'],data_confidence:'high',tags:['두루미탐조','철원','강원','DMZ','두루미','재두루미','겨울탐조'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'seasonal',operating_hours:'12~2월 두루미 월동 시즌',phone:'033-450-5558'},
  {experience_id:'EX-GJ-AGR-001',name:'광주 무등산 수박 따기 체험',category_main:'문화/체험',category_sub:'농촌 체험',region_main:'GJ',region_sub:'광주광역시 북구',address:'광주광역시 북구 무등로 일원',lat:35.1353,lng:127.0026,price:'1인 15,000원',duration:'1~2시간',reservation_required:true,target_user:['가족','어린이'],nearby_places:[],related_heritage_ids:[],short_description:'무등산 자락 고랭지에서 재배되는 광주 특산 수박 수확 체험이다. 여름 수박 시즌에 포전에서 직접 수박을 고르고 따며 현장에서 잘라 먹는 체험으로 어린이 농촌 교육 프로그램이 풍부하다.',source_urls:['https://www.gwangju.go.kr/tour/'],data_confidence:'high',tags:['수박따기','광주','무등산','농촌체험','수박','여름체험','어린이'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'seasonal',operating_hours:'7~8월 수박 시즌',phone:'062-226-3434'},
  {experience_id:'EX-CB-AGR-002',name:'단양 마늘 수확 체험',category_main:'문화/체험',category_sub:'농촌 체험',region_main:'CB',region_sub:'충청북도 단양군',address:'충청북도 단양군 단양읍 마늘농장 일원',lat:36.9845,lng:128.3659,price:'1인 10,000원',duration:'1~2시간',reservation_required:true,target_user:['가족','개인'],nearby_places:[],related_heritage_ids:[],short_description:'단양 특산품 단양 마늘을 직접 수확하는 농촌 체험이다. 6~7월 수확 시즌에 운영하며 마늘을 캐고 묶고 건조하는 전 과정을 체험한다. 단양 마늘을 한 망 가져갈 수 있다.',source_urls:['https://www.dyfarm.kr/'],data_confidence:'high',tags:['마늘수확','단양','충북','마늘','농촌체험','가족','여름체험'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'seasonal',operating_hours:'6~7월 마늘 시즌',phone:'043-421-0001'},
  {experience_id:'EX-JN-AGR-004',name:'해남 고구마 캐기 체험',category_main:'문화/체험',category_sub:'농촌 체험',region_main:'JN',region_sub:'전라남도 해남군',address:'전라남도 해남군 해남읍 고구마농장 일원',lat:34.5735,lng:126.5993,price:'1인 12,000원',duration:'1~2시간',reservation_required:true,target_user:['가족','어린이'],nearby_places:[],related_heritage_ids:[],short_description:'전국 최대 고구마 산지 해남에서 직접 고구마를 캐는 농촌 체험이다. 9~11월 수확 시즌에 운영하며 땅속에서 고구마를 직접 캐내는 체험과 함께 군고구마·고구마 줄기 요리도 즐길 수 있다.',source_urls:['https://www.haenam.go.kr/'],data_confidence:'high',tags:['고구마캐기','해남','전남','농촌체험','가을체험','어린이','가족'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'seasonal',operating_hours:'9~11월 수확 시즌',phone:'061-530-5114'},
  {experience_id:'EX-GG-AGR-003',name:'포천 허브 농장 체험',category_main:'문화/체험',category_sub:'자연체험',region_main:'GG',region_sub:'경기도 포천시',address:'경기도 포천시 신북면 청신로947번길 35 (허브아일랜드)',lat:38.0152,lng:127.2152,price:'성인 12,000원~',duration:'2~3시간',reservation_required:false,target_user:['커플','가족','개인'],nearby_places:[],related_heritage_ids:[],short_description:'포천 허브아일랜드에서 라벤더·로즈마리·바질 등 허브를 직접 수확하고 허브차·허브 오일·향수를 만드는 체험이다. 수십만 개의 조명이 켜지는 야간 정원도 함께 즐길 수 있다.',source_urls:['https://www.herbisland.co.kr/'],data_confidence:'high',tags:['허브체험','포천','경기','라벤더','허브농장','향수만들기','야경'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~22:00',phone:'031-535-6494'}
];

const newShorts = [
  {
    experience_id:'EX-JN-FRM-001', experience_name:'고흥 유자농장 체험', category_sub:'농촌 체험', region:'전라남도',
    script_30s:'오늘은 고흥 유자 농장에 왔어요. 전국 유자의 50%가 고흥에서 나요. 근데 아무도 안 알려주는 게 있어요 — 유자를 손으로 따면 향이 손에 배어요. 그 향이 마트 유자랑 완전 달라요. 너무 유자 향기가 이렇게 강렬한 줄 몰랐어서 좋았습니다.',
    script_60s:'오늘은 전남 고흥 유자 농장에 왔어요. 고흥은 전국 유자 생산량의 50% 이상을 담당하는 유자의 고장이에요. 11~12월 수확 시즌에 노란 유자가 주렁주렁 열린 농장이 정말 예뻐요. 직접 유자를 따는 체험을 할 수 있어요. 근데 아무도 안 알려주는 꿀팁 하나 — 유자를 손으로 딸 때 껍질에서 나오는 향이 정말 강렬해요. 마트에서 파는 유자청의 달콤한 향과는 완전 다른, 신선하고 상큼한 원향이에요. 손에 유자 향이 배는데 그게 천연 아로마 효과예요. 직접 딴 유자로 즉석에서 유자청을 담그는 프로그램도 있어요. 고흥 나로도 우주센터와 함께 코스로 묶으면 완벽한 고흥 하루 여행이에요. 너무 유자 향기가 손에 남는 그 경험이라서 좋았습니다.',
    secret_tip:'유자 수확 시 껍질 향이 손에 배는 천연 아로마 — 마트 유자청 향과 완전 다른 원향 체험. 직접 딴 유자로 즉석 유자청 담그기 연계. 나로도 우주센터와 세트 코스',
    filming_guide:'노란 유자 주렁주렁 열린 농장 전경. 유자 딸 때 껍질 향 맡는 표정. 즉석 유자청 담그는 손 클로즈업.',
    broll_ideas:['노란 유자 주렁주렁 농장 전경','유자 껍질 향 맡는 표정 클로즈업','즉석 유자청 담그는 손','고흥 바다 배경 유자 농장','유자 단면 클로즈업 하얀 과육'],
    hooks:['전국 유자 50% 고흥에서 나요','유자 손으로 따면 향이 손에 배요','마트 유자청 향이랑 원향이 달라요','고흥 유자 농장 11~12월 꿀타이밍','노란 유자 주렁주렁 농장 풍경'],
    thumbnails:['유자 주렁주렁 농장 전경','유자 향 맡는 표정','즉석 유자청 담그기','고흥 바다 배경 농장','유자 단면 클로즈업'],
    captions:{youtube:'고흥 유자 따기 — 손에 향이 배는 천연 아로마 🍋\n\n마트 유자청이랑 원향이 완전 달라요!\n전국 유자 50% 나오는 고흥 11~12월 시즌\n\n📍 전남 고흥군 유자 농장\n🍋 시즌: 11~12월 / 즉석 유자청 담그기 연계\n\n#고흥유자 #유자따기 #전남여행 #농촌체험 #유자청',instagram:'고흥 유자 직접 따면 손에 향이 배요 🍋\n\n마트 유자청이랑 완전 다른 원향 ✨\n11~12월 노란 유자 주렁주렁 농장\n\n📍 전남 고흥 유자 농장\n\n#고흥유자 #유자따기 #전남여행 #GemKorea',tiktok:'고흥 유자 꿀팁 🍋 손으로 따면 껍질 향이 손에 배요! 마트 유자청이랑 완전 다른 원향 // 전국 유자 50% 고흥 11~12월 시즌 #고흥유자 #유자따기 #전남여행'},
    hashtags:{korean:['#한국여행','#전남여행','#고흥여행','#농촌체험','#GemKorea'],place_specific:['#고흥유자','#유자따기','#유자원향','#유자청담그기']}
  },
  {
    experience_id:'EX-GB-FES-001', experience_name:'안동 국제탈춤페스티벌', category_sub:'축제', region:'경상북도',
    script_30s:'오늘은 안동 국제탈춤페스티벌에 왔어요. 전 세계 탈춤이 안동에 모여요. 근데 아무도 안 알려주는 게 있어요 — 탈춤 공연 후 탈을 쓰고 함께 춰볼 수 있어요. 탈 쓰는 순간 다른 사람이 되는 느낌이에요. 너무 탈이 해방감을 주는 이유를 알게 돼서 좋았습니다.',
    script_60s:'오늘은 경북 안동에서 열리는 국제탈춤페스티벌에 왔어요. 매년 9월 말~10월 초 안동에서 전 세계 20여 개국의 탈춤 공연단이 한자리에 모여요. 한국 하회별신굿탈놀이부터 인도·아프리카·유럽 탈춤까지 세계 탈춤 문화를 한 번에 볼 수 있어요. 근데 아무도 안 알려주는 꿀팁 하나 — 페스티벌 기간 중 탈 체험 코너에서 직접 탈을 쓰고 공연을 따라 하는 시간이 있어요. 탈을 쓰는 순간 얼굴이 가려지면서 해방감이 생겨요. 조선 시대 서민들이 탈을 쓰고 양반을 풍자할 수 있었던 이유가 이거예요. 탈이 주는 해방감은 직접 써봐야만 알아요. 하회마을 방문과 세트로 묶으면 완벽한 안동 가을 여행이에요. 너무 탈이 가면이자 해방이라는 걸 몸으로 알게 돼서 좋았습니다.',
    secret_tip:'탈 체험 코너 직접 착용 — 탈 쓰는 순간 해방감 체험. 조선 서민 풍자의 근원. 전 세계 20개국 탈춤 한자리. 하회마을과 세트 안동 가을 코스. 매년 9월 말~10월 초',
    filming_guide:'탈 쓰는 순간 표정 변화 연속 촬영. 전 세계 다양한 탈 공연 병치 편집. 공연 중 관객들이 함께 춤추는 장면.',
    broll_ideas:['탈 쓰는 순간 표정 변화 연속','전 세계 다양한 탈 공연 병치','공연 중 관객 함께 춤추는 장면','안동 국제탈춤 무대 전경','하회탈 클로즈업 각도별 표정 변화'],
    hooks:['탈 쓰는 순간 해방감이 생겨요','전 세계 탈춤이 안동에 모여요','조선 서민 풍자의 비밀 알았어요','탈춤 후 직접 탈 쓰고 춰봤어요','국제탈춤페스티벌 직접 참여법'],
    thumbnails:['탈 쓰는 순간 표정 변화','전 세계 탈 공연 병치','관객 함께 춤추는 장면','안동 무대 전경','하회탈 각도별 표정'],
    captions:{youtube:'안동 국제탈춤페스티벌 — 탈 쓰면 해방감 생겨요 😄\n\n전 세계 20개국 탈춤 한자리!\n탈 체험 코너에서 직접 착용 가능\n\n📍 경북 안동 국제탈춤페스티벌 (매년 9월 말~10월 초)\n😄 하회마을 세트 안동 가을 코스\n\n#안동탈춤페스티벌 #안동 #경북여행 #탈춤 #축제',instagram:'안동 국제탈춤페스티벌 탈 쓰면 해방감 생겨요 😄\n\n전 세계 20개국 탈춤 한자리 ✨\n직접 탈 쓰고 춰볼 수 있어요\n\n📍 경북 안동 매년 9월 말~10월 초\n\n#안동탈춤 #안동여행 #경북 #축제 #GemKorea',tiktok:'안동 탈춤 꿀팁 😄 탈 체험 코너에서 직접 쓰면 해방감 생겨요! 조선 서민이 탈로 양반 풍자할 수 있었던 이유 // 전 세계 탈춤 한자리 안동 국제페스티벌 #안동탈춤 #안동여행 #경북'},
    hashtags:{korean:['#한국여행','#경북여행','#안동여행','#축제','#GemKorea'],place_specific:['#안동국제탈춤페스티벌','#하회탈','#탈춤체험','#안동가을']}
  },
  {
    experience_id:'EX-SE-KID-001', experience_name:'서울 어린이대공원', category_sub:'어린이 체험', region:'서울특별시',
    script_30s:'오늘은 서울 어린이대공원에 왔어요. 입장 무료 서울 최고 어린이 공원이에요. 근데 아무도 안 알려주는 게 있어요 — 동물원도 무료예요. 입장 무료에 동물원까지 무료인 공원은 서울에서 여기뿐이에요. 너무 이 사실을 모르는 가족이 많아서 좋았습니다.',
    script_60s:'오늘은 서울 어린이대공원에 왔어요. 1973년 개원한 어린이대공원은 서울 동쪽 광진구에 위치한 53만㎡ 규모의 공원이에요. 동물원·식물원·놀이동산·문화마당이 한 곳에 모여있어요. 근데 아무도 안 알려주는 꿀팁 하나 — 어린이대공원 입장이 무료예요. 그리고 동물원도 무료예요. 코끼리·기린·하마·수달·플라밍고 등 다양한 동물을 볼 수 있는 동물원이 공원 안에 있는데 별도 입장료가 없어요. 서울 시내에서 동물원+식물원+공원을 완전 무료로 즐길 수 있는 곳은 어린이대공원밖에 없어요. 놀이기구는 별도 이용료가 있지만 동물원만 봐도 반나절이 꽉 차요. 너무 이 사실을 모르는 서울 가족들이 많아서 좋았습니다.',
    secret_tip:'어린이대공원 입장+동물원 완전 무료 — 서울 시내 무료 동물원 유일. 코끼리·기린·하마·플라밍고. 주말 피크 시간 11~14시 피하고 개장 직후 10시 방문 추천',
    filming_guide:'동물원 코끼리·기린 등 아이들 반응 포착. 어린이대공원 전체 봄 꽃밭 광각. 무료 동물원 안내판 클로즈업 (강조).',
    broll_ideas:['코끼리·기린 앞 아이들 반응 포착','어린이대공원 봄 꽃밭 광각','무료 동물원 안내판 클로즈업','수달 수영 모습 클로즈업','공원 전체 가족 나들이 풍경'],
    hooks:['서울 어린이대공원 동물원도 무료예요','입장+동물원 완전 무료 서울 유일','코끼리 기린 하마 플라밍고 다 있어요','어린이대공원 꿀팁 아는 부모님?','서울 무료 어린이 명소 1위'],
    thumbnails:['코끼리 앞 아이들 반응','어린이대공원 봄 꽃밭 광각','무료 동물원 안내판','수달 수영','가족 나들이 풍경'],
    captions:{youtube:'서울 어린이대공원 — 입장+동물원 완전 무료예요 🦒\n\n코끼리·기린·하마·플라밍고 다 있어요!\n서울 시내 무료 동물원 유일\n\n📍 서울 광진구 어린이대공원\n🦒 입장 무료 + 동물원 무료\n💡 주말 10시 개장 직후 방문 추천\n\n#어린이대공원 #서울여행 #무료 #어린이 #동물원',instagram:'서울 어린이대공원 동물원도 무료예요 🦒\n\n입장+동물원 완전 무료 서울 유일 ✨\n코끼리·기린·하마·플라밍고 다 있어요\n\n📍 서울 광진구 어린이대공원\n\n#어린이대공원 #서울 #무료동물원 #가족여행 #GemKorea',tiktok:'어린이대공원 꿀팁 🦒 입장이랑 동물원 완전 무료예요! 코끼리 기린 하마 다 볼 수 있어요 // 서울 시내 무료 동물원 유일 #어린이대공원 #서울여행 #무료 #어린이'},
    hashtags:{korean:['#한국여행','#서울여행','#무료명소','#어린이','#GemKorea'],place_specific:['#어린이대공원','#서울무료동물원','#광진구','#가족나들이']}
  },
  {
    experience_id:'EX-GG-FAM-001', experience_name:'과천 서울랜드', category_sub:'가족 체험', region:'경기도',
    script_30s:'오늘은 과천 서울랜드에 왔어요. 국립현대미술관 옆 놀이공원이에요. 근데 아무도 안 알려주는 게 있어요 — 서울랜드가 벚꽃 명소예요. 봄에 놀이기구보다 벚꽃길이 더 예뻐요. 입장권 값이 벚꽃길값이에요. 너무 놀이공원이 꽃밭이 되는 봄이라서 좋았습니다.',
    script_60s:'오늘은 경기도 과천 서울랜드에 왔어요. 국립현대미술관·서울대공원 바로 옆에 있는 놀이공원이에요. 과천 관광 삼각 코스의 마지막 퍼즐이에요. 롤러코스터·바이킹·회전목마 등 다양한 어트랙션이 있어요. 근데 아무도 안 알려주는 꿀팁 하나 — 서울랜드 봄 시즌이 최고예요. 공원 안이 벚꽃과 튤립으로 가득 채워지는 4월이면 놀이기구보다 꽃밭이 더 아름다워요. 벚꽃 아래서 회전목마 타는 장면이 인스타그램 명소가 됐어요. 이 시기에 입장권 값이 꽃밭 관람 값이라고 생각하면 충분히 가치 있어요. 에버랜드보다 규모는 작지만 접근성이 뛰어나고 대기 시간이 짧아서 어린이 동반 가족에게 더 효율적이에요. 너무 봄 서울랜드가 꽃밭이라서 좋았습니다.',
    secret_tip:'4월 봄 서울랜드 벚꽃 시즌 — 회전목마+벚꽃 조합이 인스타 명소. 에버랜드보다 대기 짧고 접근성 좋아 어린이 동반 효율적. 미술관+서울대공원+서울랜드 과천 삼각 코스',
    filming_guide:'벚꽃 아래 회전목마 타는 장면 (봄 시즌). 공원 전체 벚꽃+튤립 광각. 아이들 롤러코스터 타는 순간 표정.',
    broll_ideas:['벚꽃 아래 회전목마 봄 시즌 장면','공원 전체 벚꽃+튤립 광각','아이들 롤러코스터 표정','바이킹 탑승 순간','서울랜드 입구 벚꽃 길'],
    hooks:['서울랜드가 봄에 꽃밭이 돼요','벚꽃+회전목마 조합이 인스타 명소','에버랜드보다 대기 짧은 이유','과천 삼각 코스 마지막 퍼즐','4월 서울랜드 진짜 예뻐요'],
    thumbnails:['벚꽃 아래 회전목마 봄 장면','공원 벚꽃+튤립 광각','아이들 롤러코스터 표정','바이킹 탑승 순간','서울랜드 입구 벚꽃길'],
    captions:{youtube:'과천 서울랜드 봄 — 벚꽃+회전목마 인스타 명소예요 🌸\n\n4월에 공원 전체가 꽃밭으로 변해요!\n미술관+서울대공원+서울랜드 과천 삼각 코스\n\n📍 경기도 과천시 서울랜드\n🌸 봄 시즌: 4월 벚꽃+튤립\n💡 에버랜드보다 대기 짧아 어린이 동반 효율적\n\n#서울랜드 #과천 #경기여행 #봄벚꽃 #가족여행',instagram:'과천 서울랜드 봄에 꽃밭이 돼요 🌸\n\n벚꽃+회전목마 인스타 명소 ✨\n에버랜드보다 대기 짧아서 어린이 동반 추천\n\n📍 경기 과천 서울랜드\n\n#서울랜드 #과천여행 #경기도 #봄벚꽃 #GemKorea',tiktok:'서울랜드 꿀팁 🌸 4월에 오면 공원 전체가 벚꽃이에요! 회전목마+벚꽃 조합 인스타 명소 // 에버랜드보다 대기 짧아 어린이 동반 추천 #서울랜드 #과천여행 #봄벚꽃 #경기'},
    hashtags:{korean:['#한국여행','#경기여행','#과천여행','#봄여행','#GemKorea'],place_specific:['#서울랜드','#과천봄벚꽃','#서울랜드회전목마','#과천삼각코스']}
  },
  {
    experience_id:'EX-GG-VIL-001', experience_name:'용인 한국민속촌', category_sub:'체험마을', region:'경기도',
    script_30s:'오늘은 용인 한국민속촌에 왔어요. 조선 시대 생활을 재현한 테마파크예요. 근데 아무도 안 알려주는 게 있어요 — 진짜 장인들이 실제로 작업하는 걸 볼 수 있어요. 놀이기구 타는 게 아니라 장인 작업을 구경하는 게 더 재밌어요. 너무 살아있는 조선 시대 같아서 좋았습니다.',
    script_60s:'오늘은 경기도 용인 한국민속촌에 왔어요. 조선 시대 민속 생활을 재현한 야외 박물관형 테마파크예요. 900여 채 전통 가옥이 실제로 지어져 있고 배우들이 상주하면서 전통 의복을 입고 생활을 재현해요. 근데 아무도 안 알려주는 꿀팁 하나 — 민속촌 안에 실제 전통 장인들이 작업하는 공방이 있어요. 대장간에서 쇠를 두드리고, 도예 공방에서 흙을 빚고, 한지 공방에서 종이를 만드는 진짜 장인들의 작업을 옆에서 구경할 수 있어요. 전통 혼례와 줄타기 공연도 하루에 여러 번 있어요. 단순히 구경만 하는 게 아니라 장인 옆에서 직접 배워볼 수 있는 체험 코너도 있어요. 너무 조선 시대 가장 가까이서 볼 수 있는 공간이라서 좋았습니다.',
    secret_tip:'실제 전통 장인 작업 공방 — 대장간·도예·한지 장인이 실제 작업. 옆에서 구경하고 직접 배우기 가능. 전통 줄타기·혼례 공연 시간표 확인 후 방문. 입장료 가성비 최고',
    filming_guide:'대장간 불꽃과 쇠 두드리는 장인 클로즈업. 전통 혼례 행렬 전체 광각. 줄타기 공연 아슬아슬한 순간.',
    broll_ideas:['대장간 불꽃+쇠 두드리는 장인','전통 혼례 행렬 전체 광각','줄타기 아슬아슬한 순간','도예 공방 흙 빚는 장인 손','900채 전통 가옥 봄 전경'],
    hooks:['진짜 장인들이 작업하는 걸 볼 수 있어요','조선 시대 대장간 불꽃 보셨어요?','한국민속촌 놀이기구보다 이게 더 재밌어요','줄타기·혼례 공연 시간표 꿀팁','900채 전통 가옥 조선 시대 그대로'],
    thumbnails:['대장간 불꽃 장인 클로즈업','전통 혼례 행렬 광각','줄타기 아슬아슬 순간','도예 공방 장인 손','900채 가옥 봄 전경'],
    captions:{youtube:'한국민속촌 — 진짜 장인들이 작업해요 🔨\n\n대장간·도예·한지 장인 옆에서 구경+체험!\n줄타기·혼례 공연도 하루 여러 번\n\n📍 경기도 용인시 한국민속촌\n🔨 공방 장인 작업 옆 구경 가능\n💡 줄타기·혼례 공연 시간표 확인 필수\n\n#한국민속촌 #용인 #경기여행 #조선시대 #전통문화',instagram:'한국민속촌 장인들이 진짜 작업해요 🔨\n\n대장간 불꽃 옆에서 직접 봤어요 ✨\n조선 시대 가장 가까이서 볼 수 있는 곳\n\n📍 경기 용인 한국민속촌\n\n#한국민속촌 #용인여행 #경기도 #조선시대 #GemKorea',tiktok:'한국민속촌 꿀팁 🔨 진짜 장인들이 대장간·도예 실제 작업해요! 놀이기구보다 이게 더 재밌어요 // 줄타기·혼례 공연 시간표 확인하고 가세요 #한국민속촌 #용인여행 #조선시대'},
    hashtags:{korean:['#한국여행','#경기여행','#용인여행','#조선시대','#GemKorea'],place_specific:['#한국민속촌','#용인','#대장간체험','#줄타기공연']}
  },
  {
    experience_id:'EX-JN-CRF-001', experience_name:'전주 한지문화산업센터 한지 만들기', category_sub:'전통공예', region:'전라북도',
    script_30s:'오늘은 전주 한지 공방에 왔어요. 천 년 역사 전주 한지를 직접 만들어요. 근데 아무도 안 알려주는 게 있어요 — 한지 위에 빛을 비추면 반투명하게 빛나요. 내가 만든 종이가 빛을 머금는 그 순간이 감동이에요. 너무 종이가 이렇게 아름다울 수 있다는 게 좋았습니다.',
    script_60s:'오늘은 전주 한지문화산업센터에 왔어요. 전주 한지는 조선 시대 왕실 진상품이었고 현재 루브르 박물관 문화재 복원에도 사용되는 세계 최고 품질 종이예요. 닥나무 껍질로 만드는 전통 방식 그대로 체험할 수 있어요. 근데 아무도 안 알려주는 꿀팁 하나 — 한지 뜨기 과정에서 체에 물과 닥나무 섬유를 올린 후 빛에 비춰보면 섬유가 반투명하게 빛나요. 그 순간 내가 지금 만드는 게 단순한 종이가 아니라 예술이라는 걸 알게 돼요. 완성된 한지를 창문에 붙여 빛에 비춰보면 아름다운 패턴이 나타나요. 루브르가 왜 전주 한지를 선택했는지 이해가 가요. 너무 종이가 이렇게 예술이 될 수 있다는 게 좋았습니다.',
    secret_tip:'한지 뜨기 과정 빛에 비춰보기 — 섬유가 반투명 빛나는 순간 예술임을 실감. 완성 한지 창문에 붙여 빛 투과 패턴 확인. 루브르 문화재 복원 사용 스토리 알고 가면 감동 배가',
    filming_guide:'한지 뜨기 체에 올린 섬유 빛에 비추는 반투명 클로즈업. 완성 한지 창문 빛 투과 패턴. 닥나무 섬유 물에 푸는 장면.',
    broll_ideas:['한지 섬유 빛에 비추는 반투명 클로즈업','완성 한지 창문 빛 투과 패턴','닥나무 섬유 물에 푸는 장면','한지 뜨기 체 들어올리는 순간','루브르 한지 사용 안내판'],
    hooks:['루브르 박물관이 전주 한지 씁니다','한지를 빛에 비추면 반투명하게 빛나요','천 년 전주 한지 직접 만들어봤어요','내가 만든 종이가 빛을 머금는 순간','조선 왕실 진상품 한지 체험'],
    thumbnails:['한지 섬유 빛 반투명 클로즈업','완성 한지 창문 빛 투과','닥나무 섬유 물에 풀기','한지 체 들어올리기','루브르 한지 안내판'],
    captions:{youtube:'전주 한지 만들기 — 루브르가 왜 선택했는지 알았어요 📜\n\n한지 빛에 비추면 반투명 빛나요!\n천 년 조선 왕실 진상품 직접 만들기\n\n📍 전북 전주시 한지문화산업센터\n📜 루브르 박물관 문화재 복원에 사용되는 전주 한지\n\n#전주한지 #한지체험 #전북여행 #루브르 #전통공예',instagram:'전주 한지 빛에 비추면 반투명하게 빛나요 📜\n\n루브르 문화재 복원에 쓰이는 전주 한지 직접 만들었어요 ✨\n내가 만든 종이가 예술이 되는 순간\n\n📍 전북 전주 한지문화산업센터\n\n#전주한지 #한지체험 #전북여행 #GemKorea',tiktok:'전주 한지 꿀팁 📜 만든 한지를 빛에 비추면 반투명하게 빛나요! 루브르 문화재 복원에 쓰이는 전주 한지 직접 만들기 // 천 년 조선 왕실 진상품 #전주한지 #한지체험 #전북여행'},
    hashtags:{korean:['#한국여행','#전북여행','#전주여행','#전통공예','#GemKorea'],place_specific:['#전주한지','#한지체험','#루브르한지','#전통종이']}
  },
  {
    experience_id:'EX-GB-CRF-001', experience_name:'안동 하회탈 만들기 체험', category_sub:'전통공예', region:'경상북도',
    script_30s:'오늘은 안동 하회탈 공방에 왔어요. 국보 하회탈을 직접 만들어요. 근데 아무도 안 알려주는 게 있어요 — 하회탈 각 탈마다 표정이 달라요. 각시탈·양반탈·이매탈 — 같은 탈인데 각도에 따라 웃는 것 같기도 하고 화난 것 같기도 해요. 그 비밀이 있어요. 너무 탈 장인의 설계가 대단해서 좋았습니다.',
    script_60s:'오늘은 경북 안동 하회마을 목공방에서 하회탈 만들기 체험을 했어요. 하회탈은 국보 121호로 고려 시대부터 800년 역사를 가진 한국 최고의 전통 탈이에요. 목공방에서 직접 오리나무를 깎고 채색해 하회탈을 만드는 체험이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 하회탈의 특이한 비밀이 있어요. 양반탈·이매탈을 정면에서 보면 표정이 하나인데, 위아래로 각도를 바꾸면 표정이 달라져요. 위에서 내려다보면 웃는 것 같고, 아래서 올려다보면 화난 것 같아요. 이게 우연이 아니라 장인이 의도적으로 설계한 거예요. 춤을 추면서 탈을 움직일 때 각도에 따라 표정이 바뀌는 효과를 낸 거예요. 탈을 만들면서 이 비밀을 알게 되는 순간 진짜 감동이에요. 너무 800년 전 장인의 설계가 천재적이라서 좋았습니다.',
    secret_tip:'하회탈 각도에 따른 표정 변화 — 위에서 내려다보면 웃음, 아래서 올려다보면 화남. 의도적 설계. 체험 시 완성 탈로 직접 확인. 각시·양반·이매·초랭이·부네 중 선택',
    filming_guide:'하회탈 위아래 각도 변화에 따른 표정 변화 클로즈업. 오리나무 깎는 끌 작업 소리 포함. 채색 완성 후 탈 쓰는 마지막 장면.',
    broll_ideas:['탈 각도에 따른 표정 변화 비교','오리나무 깎는 끌 작업 클로즈업','채색 완성 후 탈 쓰는 장면','하회탈 국보 전시와 직접 만든 것 비교','하회마을 배경 완성 탈'],
    hooks:['하회탈 각도에 따라 표정이 달라요','800년 전 장인의 천재적 설계','위에서 웃고 아래서 화나는 탈','국보 하회탈 직접 만들어봤어요','각도 바꾸면 표정 바뀌는 탈 비밀'],
    thumbnails:['탈 각도별 표정 변화 비교','오리나무 깎기 클로즈업','채색 후 탈 쓰기','국보와 직접 만든 탈 비교','하회마을 배경 완성 탈'],
    captions:{youtube:'하회탈 — 각도에 따라 표정이 달라지는 비밀 있어요 😄\n\n위에서 내려다보면 웃음, 아래서 올려다보면 화남!\n800년 전 장인의 의도적 설계\n\n📍 경북 안동 하회마을 목공방\n😄 탈 종류: 각시·양반·이매·초랭이·부네 중 선택\n\n#하회탈만들기 #안동 #경북여행 #하회마을 #전통공예',instagram:'하회탈 각도에 따라 표정이 달라요 😄\n\n800년 전 장인의 의도적 설계 진짜 천재 ✨\n위에서 웃고 아래서 화나는 탈\n\n📍 경북 안동 하회마을\n\n#하회탈만들기 #안동여행 #경북 #전통공예 #GemKorea',tiktok:'하회탈 꿀팁 😄 각도에 따라 표정이 달라요! 위에서 내려다보면 웃음, 아래서 올려다보면 화남 // 800년 전 장인 의도적 설계 진짜 천재 #하회탈만들기 #안동여행 #경북'},
    hashtags:{korean:['#한국여행','#경북여행','#안동여행','#전통공예','#GemKorea'],place_specific:['#하회탈만들기','#안동하회마을','#국보하회탈','#탈표정비밀']}
  },
  {
    experience_id:'EX-GG-CRF-001', experience_name:'이천 도자기 물레 성형 체험', category_sub:'전통공예', region:'경기도',
    script_30s:'오늘은 이천 도자기 공방에 왔어요. 조선 왕실 도자기 산지에서 직접 물레를 돌려요. 근데 아무도 안 알려주는 게 있어요 — 물레는 양손보다 손목 힘이 중요해요. 처음엔 힘으로 하다가 나중엔 손목 감각으로 하게 돼요. 그 순간 도자기가 올라와요. 너무 흙이 손에서 살아있는 것 같아서 좋았습니다.',
    script_60s:'오늘은 경기도 이천 도자기 공방에 왔어요. 이천은 조선 시대 왕실 분청사기·백자를 만들던 도자기의 고장이에요. 지금도 전국 최고 도예가들이 모여있는 도자 예술의 성지예요. 도자기 물레 체험을 하러 왔는데 처음엔 엄청 어려워요. 근데 아무도 안 알려주는 꿀팁 하나 — 물레 성형은 팔 힘이 아니라 손목 힘이에요. 처음에 힘으로 흙을 잡으면 흙이 울퉁불퉁해져요. 손목 힘을 빼고 손 전체로 감싸듯 부드럽게 누르면 흙이 자연스럽게 올라와요. 교관이 이 감각을 알려주는 시간이 있는데 그 순간 갑자기 흙이 손에서 살아있는 것처럼 올라와요. 그 순간이 도자기 체험의 하이라이트예요. 소성 후 완성품은 택배로 받을 수 있어요. 너무 흙이 살아있는 것 같은 그 감각이라서 좋았습니다.',
    secret_tip:'물레 성형 핵심 — 팔 힘 아닌 손목 힘. 손 전체로 감싸듯 부드럽게 누르면 흙이 올라옴. 이 감각 오는 순간이 하이라이트. 소성 후 완성품 택배 수령. 이천 쌀밥 세트 코스',
    filming_guide:'흙이 손 사이에서 올라오는 순간 슬로우 촬영. 물레 회전하는 흙의 원심력 클로즈업. 완성품 들어올리는 마지막 장면.',
    broll_ideas:['흙이 손 사이 올라오는 슬로우','물레 회전 흙의 원심력 클로즈업','완성 그릇 들어올리는 장면','이천 도자기 전시관 백자·분청사기','도예가 교관 시범 손 동작'],
    hooks:['물레는 손목 힘이에요 팔 힘 아니에요','흙이 손에서 올라오는 그 순간 알아요?','이천 도자기 왕실 산지에서 직접 만들었어요','도자기 물레 체험 핵심 감각 알려드려요','소성 후 완성품 택배로 받아요'],
    thumbnails:['흙 손 사이 올라오는 슬로우','물레 원심력 클로즈업','완성 그릇 들어올리기','이천 백자·분청사기 전시','교관 시범 손 동작'],
    captions:{youtube:'이천 도자기 물레 — 손목 힘이에요 팔 힘 아니에요 🏺\n\n흙이 손에서 올라오는 그 순간이 하이라이트!\n조선 왕실 도자기 산지에서 직접 만들기\n\n📍 경기도 이천시 도자기 공방\n🏺 소성 후 완성품 택배 수령 가능\n\n#이천도자기 #물레체험 #경기여행 #도예 #전통공예',instagram:'이천 도자기 물레 핵심 알려드려요 🏺\n\n손목 힘! 팔 힘 아니에요 ✨\n흙이 올라오는 그 순간 진짜 신기해요\n\n📍 경기 이천 도자기 공방\n\n#이천도자기 #물레체험 #경기여행 #GemKorea',tiktok:'이천 도자기 꿀팁 🏺 물레는 팔 힘 아니고 손목 힘이에요! 그 감각이 오는 순간 흙이 올라와요 // 조선 왕실 도자기 산지 이천 #이천도자기 #물레체험 #경기여행'},
    hashtags:{korean:['#한국여행','#경기여행','#이천여행','#도예','#GemKorea'],place_specific:['#이천도자기','#물레체험','#도자기공방','#조선왕실도자기']}
  },
  {
    experience_id:'EX-CN-FRM-001', experience_name:'안동 전통 막걸리 빚기 체험', category_sub:'발효/음식', region:'충청남도',
    script_30s:'오늘은 안동 막걸리 공방에서 직접 막걸리를 빚었어요. 조선 3대 명주 안동 소주의 고장이에요. 근데 아무도 안 알려주는 게 있어요 — 누룩 냄새가 발효의 향이에요. 그 냄새가 처음엔 거부감이 오는데 익숙해지면 고소해요. 그 변화가 발효를 이해하는 순간이에요. 너무 발효가 이렇게 감각적인 줄 몰랐어서 좋았습니다.',
    script_60s:'오늘은 경북 안동 막걸리 공방에 왔어요. 안동은 조선 3대 명주인 안동 소주의 고장이자 막걸리 전통이 깊은 곳이에요. 직접 막걸리를 빚는 체험인데 생각보다 과학적인 과정이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 막걸리 빚기 체험 중 누룩 냄새를 맡는 순간이 있어요. 처음에는 거부감이 느껴지는 독특한 냄새인데, 발효의 원리를 배우고 나서 다시 맡으면 고소하고 구수한 향으로 바뀌어요. 누룩은 쌀을 발효시키는 곰팡이균인데, 그 향이 바로 발효의 냄새예요. 이 냄새가 된장·청국장·치즈 발효의 원리와 같다는 걸 알게 되면 갑자기 고소하게 느껴져요. 지식이 감각을 바꾸는 그 순간이 막걸리 체험의 진짜 하이라이트예요. 너무 발효가 이렇게 감각으로 이해되는 체험이라서 좋았습니다.',
    secret_tip:'누룩 냄새 변화 체험 — 발효 원리 배운 후 다시 맡으면 거부감→고소함으로 변화. 지식이 감각을 바꾸는 순간. 완성된 막걸리 2~3일 후 발효 완성. 안동 도산서원 세트 코스',
    filming_guide:'누룩과 쌀 섞는 손 동작 클로즈업. 발효 중인 막걸리 거품 올라오는 장면. 완성 막걸리 따르는 장면.',
    broll_ideas:['누룩과 쌀 섞는 손 동작','발효 중 거품 올라오는 클로즈업','완성 막걸리 따르는 장면','전통 누룩 틀과 재료들','안동 막걸리 항아리들'],
    hooks:['누룩 냄새가 처음엔 거부감이에요','발효 원리 알면 냄새가 고소해져요','지식이 감각을 바꾸는 그 순간','안동 막걸리 직접 빚었어요','조선 3대 명주 고장에서 전통 발효'],
    thumbnails:['누룩과 쌀 섞는 손','발효 거품 올라오는 클로즈업','완성 막걸리 따르기','전통 누룩 틀과 재료','안동 막걸리 항아리'],
    captions:{youtube:'안동 막걸리 빚기 — 누룩 냄새가 바뀌는 그 순간 😲\n\n발효 원리 알면 거부감→고소함으로!\n지식이 감각을 바꾸는 체험\n\n📍 경북 안동시 막걸리 공방\n😲 조선 3대 명주 안동 소주 고장 발효 문화\n\n#안동막걸리 #막걸리빚기 #경북여행 #발효 #전통주',instagram:'안동 막걸리 빚기 누룩 냄새가 바뀌어요 😲\n\n발효 원리 알면 거부감이 고소함으로 ✨\n지식이 감각을 바꾸는 순간\n\n📍 경북 안동 막걸리 공방\n\n#안동막걸리 #막걸리빚기 #경북여행 #GemKorea',tiktok:'안동 막걸리 꿀팁 😲 누룩 냄새가 처음엔 거부감인데 발효 원리 알면 고소함으로 바뀌어요! 지식이 감각을 바꾸는 그 순간 // 조선 3대 명주 안동 #안동막걸리 #막걸리빚기 #경북여행'},
    hashtags:{korean:['#한국여행','#경북여행','#안동여행','#발효','#GemKorea'],place_specific:['#안동막걸리','#막걸리빚기','#전통주','#발효체험']}
  },
  {
    experience_id:'EX-GW-NIG-002', experience_name:'강원 태백산 눈꽃 트레킹', category_sub:'자연체험', region:'강원도',
    script_30s:'오늘은 태백산 눈꽃 트레킹을 했어요. 하얀 눈꽃 피운 주목 나무들이 가득이에요. 근데 아무도 안 알려주는 게 있어요 — 오전 9~10시 능선에서 역광이 들어오면 눈꽃이 보석처럼 빛나요. 그 1시간이 태백산 최고의 시간이에요. 너무 눈꽃이 빛을 받는 그 순간이라서 좋았습니다.',
    script_60s:'오늘은 강원도 태백산 눈꽃 트레킹을 했어요. 해발 1,567m 태백산은 한국에서 가장 일찍 눈꽃을 볼 수 있는 명산이에요. 12~2월이면 능선의 주목 나무들이 온통 눈꽃으로 뒤덮여요. 주목은 수령이 1,000년 이상인 것도 있어서 늙은 고목에 눈꽃이 피면 진짜 신비로워요. 근데 아무도 안 알려주는 꿀팁 하나 — 태백산 눈꽃 사진은 오전 9~10시가 황금 시간대예요. 능선에 오르면 동쪽에서 역광이 들어오는데 그 빛이 눈꽃에 투과되면 눈꽃이 반짝이는 보석처럼 빛나요. 그 타이밍을 잡으려면 이른 아침 출발해야 해요. 천제단까지 올라가면 태백 시내와 낙동강·한강의 분수령이 내려다보여요. 너무 눈꽃에 빛이 투과되는 그 장면이라서 좋았습니다.',
    secret_tip:'오전 9~10시 능선 역광 타임 — 동쪽 빛이 눈꽃 투과해 보석처럼 반짝임. 이른 아침 출발 필수. 천제단 정상에서 낙동강·한강 분수령 조망. 12~2월 눈꽃 시즌',
    filming_guide:'역광에서 눈꽃 투과되는 반짝임 슬로우 촬영. 주목 고목과 눈꽃 조합 광각. 천제단에서 내려다보는 태백 시내.',
    broll_ideas:['역광에서 눈꽃 반짝이는 슬로우','주목 고목과 눈꽃 조합 광각','천제단 정상 태백 시내 조망','능선 눈꽃 터널 걷는 장면','새벽 이른 아침 산행 시작'],
    hooks:['태백산 눈꽃 역광 타임이 있어요','오전 9~10시가 황금 시간대예요','눈꽃이 보석처럼 빛나는 그 순간','주목 고목에 눈꽃 피면 진짜 신비','태백산 눈꽃 트레킹 꿀팁'],
    thumbnails:['역광 눈꽃 반짝이는 슬로우','주목 고목 눈꽃 광각','천제단 태백 시내 조망','능선 눈꽃 터널 걷기','새벽 산행 시작'],
    captions:{youtube:'태백산 눈꽃 오전 9~10시가 황금 타임이에요 ❄️\n\n역광이 눈꽃 투과하면 보석처럼 반짝여요!\n12~2월 한국 최고 눈꽃 명산\n\n📍 강원도 태백시 태백산 국립공원\n❄️ 황금 타임: 오전 9~10시 능선 역광\n\n#태백산 #눈꽃트레킹 #강원도여행 #겨울등산 #주목',instagram:'태백산 눈꽃 역광이 들어오면 보석이에요 ❄️\n\n오전 9~10시 황금 타임 ✨\n주목 고목에 눈꽃 피는 신비로운 장면\n\n📍 강원 태백 태백산\n\n#태백산 #눈꽃트레킹 #강원도 #겨울 #GemKorea',tiktok:'태백산 꿀팁 ❄️ 오전 9~10시에 능선에 있으면 역광이 눈꽃을 투과해서 보석처럼 빛나요! 이 타임 위해 이른 아침 출발 필수 // 12~2월 한국 최고 눈꽃 #태백산 #눈꽃트레킹 #강원도'},
    hashtags:{korean:['#한국여행','#강원도여행','#태백여행','#겨울트레킹','#GemKorea'],place_specific:['#태백산','#눈꽃트레킹','#주목군락','#역광눈꽃']}
  },
  {
    experience_id:'EX-GG-NIG-003', experience_name:'서울 한강 야간 자전거 투어', category_sub:'어드벤처/레포츠', region:'서울특별시',
    script_30s:'오늘은 서울 한강 야간 자전거 투어를 했어요. 반포대교 달빛무지개분수를 자전거로 달리면서 봐요. 근데 아무도 안 알려주는 게 있어요 — 자전거로 지나칠 때 분수에서 미스트가 얼굴에 닿아요. 그 시원함이 서울 야경을 더 특별하게 만들어요. 너무 도심 속 이 느낌이라서 좋았습니다.',
    script_60s:'오늘은 서울 한강 자전거 길을 야간에 달렸어요. 여의도 자전거 대여소에서 출발해서 반포대교·한남대교 방향 코스예요. 낮의 한강 자전거와 야간 자전거는 완전히 다른 경험이에요. 도시 야경이 한강에 반사되고 자전거 바람이 더해지면서 영화 속 장면 같아요. 근데 아무도 안 알려주는 꿀팁 하나 — 반포대교 달빛무지개분수 구간을 자전거로 통과할 때 분수 미스트가 자전거 탄 사람에게 살짝 닿아요. 무지개빛 분수 조명 아래서 시원한 물안개를 얼굴에 맞으면서 달리는 그 감각이 진짜예요. 날씨 좋은 여름밤 저녁 8~10시 사이가 최고예요. 63빌딩·마포대교·반포대교 야경을 자전거로 달리며 보는 서울이 도보 야경과 완전히 다른 차원이에요. 너무 서울이 이렇게 낭만적인 도시구나 싶어서 좋았습니다.',
    secret_tip:'반포대교 달빛무지개분수 통과 시 미스트가 얼굴에 닿음 — 여름밤 야간 자전거 최고 구간. 여의도 출발 8~10시 야경 시간대 추천. 자전거 1시간 3,000원 한강공원',
    filming_guide:'반포대교 분수 미스트 맞으며 달리는 장면 (저속셔터 빛 흔적). 한강 야경 반사 수면 광각. 자전거 바퀴와 야경 동시 구도.',
    broll_ideas:['반포대교 분수 미스트 야간 달리기','한강 야경 반사 수면 광각','자전거 바퀴와 야경 동시 구도','63빌딩 배경 한강 야간 자전거','여의도 출발 자전거 대여소'],
    hooks:['반포대교 분수 미스트가 얼굴에 닿아요','한강 야간 자전거가 낮이랑 달라요','서울 야경을 자전거로 달리는 그 느낌','여름밤 한강 자전거 꿀팁 있어요','도심 속 이런 낭만이 있어요'],
    thumbnails:['반포대교 분수 미스트 달리기','한강 야경 반사 수면 광각','자전거 바퀴와 야경 구도','63빌딩 배경 야간 자전거','여의도 자전거 대여소'],
    captions:{youtube:'서울 한강 야간 자전거 — 반포대교 분수 미스트가 얼굴에 닿아요 🚴\n\n낮 한강이랑 야간이 완전 달라요!\n여름밤 8~10시가 최고\n\n📍 서울 여의도 한강공원 자전거 대여소\n🚴 자전거 1시간 3,000원\n💡 반포대교 달빛무지개분수 구간 = 핵심\n\n#한강자전거 #서울야경 #반포대교 #야간자전거 #서울여행',instagram:'한강 야간 자전거 반포대교 분수 미스트 맞으며 달렸어요 🚴\n\n여름밤 8~10시 한강 야경 자전거 ✨\n낮이랑 완전 다른 경험\n\n📍 서울 여의도 한강공원\n\n#한강자전거 #서울야경 #반포대교 #GemKorea',tiktok:'한강 야간 자전거 꿀팁 🚴 반포대교 달빛무지개분수 구간에서 미스트가 얼굴에 닿아요! 여름밤 8~10시 최고 // 서울 야경을 자전거로 달리는 그 느낌 #한강자전거 #서울야경 #여름밤'},
    hashtags:{korean:['#한국여행','#서울여행','#야경','#한강','#GemKorea'],place_specific:['#한강야간자전거','#반포대교','#달빛무지개분수','#한강공원']}
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
