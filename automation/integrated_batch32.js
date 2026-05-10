const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const now = new Date().toISOString().slice(0,19);

const newExps = [
  {experience_id:'EX-GW-NAT-057',name:'강원 횡성 안흥 레일파크',category_main:'문화/체험',category_sub:'어드벤처/레포츠',region_main:'GW',region_sub:'강원특별자치도 횡성군',address:'강원특별자치도 횡성군 안흥면 안흥찐빵마을',lat:37.4378,lng:128.0453,price:'레일바이크 2인 15,000원~',duration:'1~2시간',reservation_required:true,target_user:['커플','가족','개인'],nearby_places:[],related_heritage_ids:[],short_description:'횡성 안흥면에서 찐빵을 먹고 레일바이크를 즐기는 코스다. 안흥 찐빵 골목에서 전통 가마솥 찐빵을 맛보고 인근 레일파크에서 레일바이크를 타는 강원도 먹거리+레저 코스다.',source_urls:['https://www.hsg.go.kr/'],data_confidence:'high',tags:['안흥찐빵레일파크','횡성','강원','레일바이크','찐빵','전통먹거리','커플'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'레일파크 09:00~17:00',phone:'033-340-2604'},
  {experience_id:'EX-JN-NAT-066',name:'무안 황토 색갯벌 체험',category_main:'문화/체험',category_sub:'자연체험',region_main:'JN',region_sub:'전라남도 무안군',address:'전라남도 무안군 해제면 황토갯벌체험마을',lat:34.9658,lng:126.3689,price:'1인 10,000원~',duration:'2~3시간',reservation_required:true,target_user:['가족','개인'],nearby_places:[],related_heritage_ids:[],short_description:'무안 황토 갯벌에서 황토 성분 피부 마사지와 조개 잡기를 즐기는 체험이다. 무안 갯벌은 일반 갯벌과 달리 황토 성분이 풍부해 피부 미용에 효과적이라고 알려져 있다.',source_urls:['https://www.muan.go.kr/'],data_confidence:'high',tags:['무안황토갯벌','무안','전남','황토','갯벌마사지','조개잡기','힐링'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'seasonal',operating_hours:'5~9월 (썰물 시간)',phone:'061-450-5260'},
  {experience_id:'EX-GN-NAT-065',name:'진해 벚꽃 기차 여행',category_main:'문화/체험',category_sub:'축제',region_main:'GN',region_sub:'경상남도 창원시',address:'경상남도 창원시 진해구 진해역',lat:35.1328,lng:128.6483,price:'기차 편도 5,000원~',duration:'3~4시간',reservation_required:true,target_user:['커플','개인','가족'],nearby_places:[],related_heritage_ids:[],short_description:'진해 군항제 기간 운행하는 벚꽃 기차를 타고 진해 벚꽃 명소를 탐방하는 체험이다. 경화역 벚꽃 철로와 여좌천 로망스다리 등 진해 대표 벚꽃 명소를 기차로 편리하게 연결하는 봄 특별 체험이다.',source_urls:['https://www.changwon.go.kr/'],data_confidence:'high',tags:['진해벚꽃기차','진해','창원','경남','군항제','벚꽃','기차여행'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'매년 3~4월 군항제 기간',phone:'055-225-3691'},
  {experience_id:'EX-GG-NAT-061',name:'서울 북한산 등산+천년사찰',category_main:'문화/체험',category_sub:'자연체험',region_main:'GG',region_sub:'서울특별시 강북구',address:'서울특별시 강북구 우이동 북한산 국립공원',lat:37.6586,lng:127.0108,price:'무료',duration:'3~5시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'서울 도심에서 가장 가까운 북한산 국립공원에서 등산하며 진관사·도선사 등 천년 사찰을 탐방하는 체험이다. 서울에서 지하철로 접근 가능한 국립공원으로 연간 수백만 명이 방문하는 수도권 최고 등산지다.',source_urls:['https://bukhansan.knps.or.kr/'],data_confidence:'high',tags:['북한산','서울','강북구','국립공원','진관사','도선사','등산'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (무료)',phone:'02-909-0497'},
  {experience_id:'EX-JN-NAT-067',name:'순창 강천산 폭포 코스',category_main:'문화/체험',category_sub:'자연체험',region_main:'JN',region_sub:'전라북도 순창군',address:'전라북도 순창군 팔덕면 강천산길 7',lat:35.4325,lng:127.1150,price:'성인 3,000원',duration:'2~3시간',reservation_required:false,target_user:['가족','개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'전북 순창 강천산 군립공원에서 현수교와 폭포를 연계한 트레킹 코스를 즐기는 체험이다. 강천사 경내와 폭포·계곡·현수교가 어우러지는 코스가 사계절 아름다우며 가을 단풍이 특히 유명하다.',source_urls:['https://www.sunchang.go.kr/'],data_confidence:'high',tags:['강천산폭포','순창','전북','현수교','강천사','계곡','사계절'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~17:00',phone:'063-650-1672'},
  {experience_id:'EX-GN-NAT-066',name:'거제 신선대 공원+학동해변',category_main:'문화/체험',category_sub:'자연체험',region_main:'GN',region_sub:'경상남도 거제시',address:'경상남도 거제시 남부면 학동리 학동해변',lat:34.8128,lng:128.6897,price:'무료',duration:'2~3시간',reservation_required:false,target_user:['가족','커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'거제 신선대 공원과 학동 흑진주 몽돌 해변을 함께 즐기는 코스다. 신선대 기암절벽 전망과 검은 몽돌이 깔린 학동 해변이 어우러지는 거제 남부 최고 자연 코스다.',source_urls:['https://www.geoje.go.kr/'],data_confidence:'high',tags:['신선대공원','학동해변','거제','경남','몽돌해변','기암절벽','거제남부'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (무료)',phone:'055-639-4172'},
  {experience_id:'EX-GW-NAT-058',name:'강원 동해 추암 촛대바위',category_main:'문화/체험',category_sub:'자연체험',region_main:'GW',region_sub:'강원특별자치도 동해시',address:'강원특별자치도 동해시 추암동 촛대바위',lat:37.4486,lng:129.1628,price:'무료',duration:'1시간',reservation_required:false,target_user:['커플','개인','가족'],nearby_places:[],related_heritage_ids:[],short_description:'동해 추암해수욕장 앞 해돋이 명소 추암 촛대바위를 탐방하는 체험이다. 바다 위에 솟은 기암절벽 군락이 새해 일출 명소로 유명하며 고성 공룡 발자국과 함께 삼척 여행 코스다.',source_urls:['https://www.donghae.go.kr/'],data_confidence:'high',tags:['추암촛대바위','동해','강원','해돋이','기암절벽','삼척','일출'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (무료)',phone:'033-530-2231'},
  {experience_id:'EX-JN-NAT-068',name:'광주 충장로+광주천 야간 산책',category_main:'문화/체험',category_sub:'야경/야간투어',region_main:'JN',region_sub:'광주광역시 동구',address:'광주광역시 동구 충장로 일원',lat:35.1486,lng:126.9181,price:'무료',duration:'1~2시간',reservation_required:false,target_user:['커플','개인','청년'],nearby_places:[],related_heritage_ids:[],short_description:'광주 충장로 패션 거리와 광주천을 야간 산책하는 체험이다. 광주 최대 번화가 충장로의 야경과 광주천 수변 LED 조명이 어우러지는 광주 야경 코스로 대학생·청년들이 즐겨 찾는다.',source_urls:['https://www.gwangju.go.kr/'],data_confidence:'high',tags:['충장로야경','광주천','광주','야간산책','광주야경','번화가','젊음의거리'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (야경: 일몰~23:00, 무료)',phone:'062-226-3434'},
  {experience_id:'EX-GG-NAT-062',name:'수원 영통 광교 호수 공원',category_main:'문화/체험',category_sub:'자연체험',region_main:'GG',region_sub:'경기도 수원시',address:'경기도 수원시 영통구 광교중앙로 광교 호수공원',lat:37.3119,lng:127.0542,price:'무료',duration:'1~2시간',reservation_required:false,target_user:['가족','커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'수원 광교신도시 광교 호수공원에서 봄꽃과 호수 경관을 즐기는 체험이다. 원천저수지와 신대저수지를 연결한 광교 호수는 봄 벚꽃·여름 수련·가을 억새·겨울 설경이 사계절 아름다운 수원 근교 자연 명소다.',source_urls:['https://www.suwon.go.kr/'],data_confidence:'high',tags:['광교호수공원','수원','경기','광교신도시','봄꽃','사계절','호수'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (무료)',phone:'031-228-4700'},
  {experience_id:'EX-JN-NAT-069',name:'고흥 팔영산 케이블카',category_main:'문화/체험',category_sub:'자연체험',region_main:'JN',region_sub:'전라남도 고흥군',address:'전라남도 고흥군 점암면 팔영산 케이블카 정류장',lat:34.5908,lng:127.4472,price:'케이블카 왕복 성인 13,000원',duration:'1~2시간',reservation_required:false,target_user:['가족','개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'팔영산 케이블카를 타고 8개 암봉에서 고흥 다도해를 조망하는 체험이다. 케이블카로 쉽게 올라가면 등산 없이도 팔영산 정상부에서 고흥·나로도·영남·여수 등 남해안 절경을 즐길 수 있다.',source_urls:['https://www.goheung.go.kr/'],data_confidence:'high',tags:['팔영산케이블카','고흥','전남','다도해','8봉','남해안절경','비등산코스'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~17:00',phone:'061-830-8700'},
  {experience_id:'EX-GN-NAT-067',name:'진주 촉석루+진양호 유람선',category_main:'문화/체험',category_sub:'역사 체험',region_main:'GN',region_sub:'경상남도 진주시',address:'경상남도 진주시 남강변 촉석루',lat:35.1894,lng:128.1058,price:'진양호 유람선 성인 8,000원~',duration:'2~3시간',reservation_required:false,target_user:['가족','개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'논개의 역사가 깃든 촉석루와 진양호 유람선을 하루에 즐기는 진주 역사+자연 코스다. 임진왜란 논개 의기를 기리는 촉석루에서 남강 역사를 이해하고 진양호 유람선으로 진주 전경을 감상한다.',source_urls:['https://www.jinju.go.kr/'],data_confidence:'high',tags:['촉석루진양호','진주','경남','논개','촉석루','진양호','유람선'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중',phone:'055-749-2696'},
  {experience_id:'EX-GW-NAT-059',name:'영월 선암마을 한반도 지형+단종유배지',category_main:'문화/체험',category_sub:'역사 체험',region_main:'GW',region_sub:'강원특별자치도 영월군',address:'강원특별자치도 영월군 한반도면 선암마을',lat:37.2097,lng:128.4592,price:'무료',duration:'2~3시간',reservation_required:false,target_user:['개인','가족','커플'],nearby_places:[],related_heritage_ids:[],short_description:'한반도 모양의 특이한 자연 지형과 단종 유배지 청령포를 하루에 탐방하는 영월 역사+자연 코스다. 조선 단종의 슬픈 유배 역사와 세계 유일 한반도 지형을 함께 이해하는 영월 완벽 여행이다.',source_urls:['https://www.yw.go.kr/'],data_confidence:'high',tags:['한반도지형단종유배','영월','강원','선암마을','청령포','단종','역사자연'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중',phone:'033-372-8445'}
];

const newShorts = [
  {
    experience_id:'EX-GN-FES-003', experience_name:'밀양 아리랑 대축제', category_sub:'축제', region:'경상남도',
    script_30s:'오늘은 밀양 아리랑 대축제에 왔어요. 3대 아리랑 중 하나예요. 근데 아무도 안 알려주는 게 있어요 — 밀양 아리랑이 다른 아리랑보다 빠르고 경쾌해요. 경남 사람들의 기질이 담겼대요. 가락이 지역 성격이라는 게 좋았습니다.',
    script_60s:'오늘은 경남 밀양에서 열리는 밀양 아리랑 대축제에 왔어요. 정선·진도 아리랑과 함께 한국 3대 아리랑으로 꼽히는 밀양 아리랑 축제예요. 매년 5월 밀양강변에서 열려요. 근데 아무도 안 알려주는 꿀팁 하나 — 밀양 아리랑이 다른 아리랑과 구분되는 특징이 있어요. 정선 아리랑은 느리고 구슬프고, 진도 아리랑은 흥겨운데, 밀양 아리랑은 가장 빠르고 경쾌해요. 그 이유가 경남 사람들의 기질과 연관됐어요. 화끈하고 직선적인 경남 기질이 음악에 담겼다는 설이 있어요. 밀양 아리랑 가사도 직접적이고 솔직해요. 축제에서 아리랑 세 가지를 비교해서 들으면 지역마다 다른 민족의 감성을 느낄 수 있어요. 너무 가락이 지역 성격을 담는다는 게 좋았습니다.',
    secret_tip:'밀양 아리랑 = 3대 아리랑 중 가장 빠르고 경쾌 — 경남 화끈한 기질 반영. 정선·진도·밀양 3가지 비교 감상이 최고 체험. 매년 5월 밀양강변 개최',
    filming_guide:'밀양 아리랑 춤과 노래 공연 전체 광각. 관객들 함께 따라 부르는 장면. 밀양강변 축제 야경.',
    broll_ideas:['밀양 아리랑 공연 광각','관객 함께 부르는 장면','밀양강변 축제 야경','전통 의상 공연자 클로즈업','세 가지 아리랑 비교 설명'],
    hooks:['밀양 아리랑이 제일 빠르고 경쾌해요','경남 기질이 음악에 담겼어요','3대 아리랑 비교 감상이 최고예요','가락이 지역 성격을 담아요','밀양 아리랑 대축제 꿀팁'],
    thumbnails:['밀양 아리랑 공연','관객 함께 부르기','밀양강변 야경','전통 의상 공연자','아리랑 비교 설명'],
    captions:{youtube:'밀양 아리랑 대축제 — 3대 아리랑 중 제일 빠르고 경쾌해요 🎵\n\n경남 화끈한 기질이 가락에 담겼어요!\n정선·진도·밀양 비교 감상이 최고\n\n📍 경남 밀양시 밀양강변 (매년 5월)\n🎵 한국 3대 아리랑 밀양 아리랑 대축제\n\n#밀양아리랑 #밀양 #경남여행 #3대아리랑 #밀양대축제',instagram:'밀양 아리랑 대축제 3대 아리랑 중 제일 빠르고 경쾌해요 🎵\n\n경남 기질이 음악에 담긴 가락 ✨\n정선 진도 밀양 비교 감상 최고\n\n📍 경남 밀양 밀양강변\n\n#밀양아리랑 #밀양여행 #경남 #아리랑 #GemKorea',tiktok:'밀양 아리랑 꿀팁 🎵 3대 아리랑 중 제일 빠르고 경쾌해요! 경남 화끈한 기질이 가락에 담긴 거 // 정선·진도·밀양 비교하면 지역 기질 차이가 느껴져요 #밀양아리랑 #밀양여행 #경남'},
    hashtags:{korean:['#한국여행','#경남여행','#밀양여행','#아리랑','#GemKorea'],place_specific:['#밀양아리랑대축제','#경쾌한밀양아리랑','#경남기질아리랑','#3대아리랑비교']}
  },
  {
    experience_id:'EX-JB-FES-002', experience_name:'전주 국제 영화제 체험', category_sub:'문화예술', region:'전라북도',
    script_30s:'오늘은 전주 국제 영화제에 왔어요. 독립영화 성지예요. 근데 아무도 안 알려주는 게 있어요 — 전주 영화제는 감독과의 대화 시간이 있어요. 영화 보고 감독을 바로 만나요. 그 시간이 영화제 최고 체험이에요. 너무 만드는 사람을 만나는 게 좋았습니다.',
    script_60s:'오늘은 전북 전주에서 열리는 전주 국제 영화제를 방문했어요. 매년 4~5월 전주 한옥마을 인근 영화관들에서 전 세계 독립영화와 예술 영화를 상영하는 영화제예요. 상업 영화와 달리 독특하고 실험적인 작품들을 볼 수 있어요. 근데 아무도 안 알려주는 꿀팁 하나 — 전주 영화제의 가장 특별한 프로그램이 감독과의 대화예요. 영화 상영 직후 감독이나 배우가 직접 관객과 이야기를 나눠요. 왜 이 영화를 만들었는지, 가장 어려운 장면이 뭐였는지, 관객의 질문에 직접 답해요. 이 시간이 전주 영화제에서 영화를 보는 것보다 더 특별한 체험이에요. 영화를 만든 사람의 마음을 직접 듣는 경험이에요. 너무 만드는 사람을 만나는 체험이라서 좋았습니다.',
    secret_tip:'감독과의 대화 프로그램 = 전주 영화제 최고 체험 — 상영 직후 감독·배우 직접 대화. 사전 프로그램 확인 필수. 영화제 공식 앱에서 시간표+감독과의 대화 일정 확인',
    filming_guide:'감독과의 대화 실제 현장 장면. 관객 질문하는 손 클로즈업. 영화제 상영관 분위기.',
    broll_ideas:['감독과의 대화 현장 장면','관객 질문하는 손','상영관 분위기','전주 영화제 홍보물','한옥마을 배경 영화 티켓'],
    hooks:['전주 영화제 감독과의 대화가 최고예요','영화 보고 바로 감독을 만나요','만드는 사람의 마음을 직접 들어요','상업 영화에서 절대 못 하는 경험','전주 국제 영화제 꿀팁'],
    thumbnails:['감독과의 대화 현장','관객 질문하는 손','상영관 분위기','영화제 홍보물','한옥마을 배경 티켓'],
    captions:{youtube:'전주 국제 영화제 — 감독과의 대화가 최고예요 🎬\n\n상영 직후 감독·배우 직접 만남!\n만드는 사람의 마음을 직접 듣는 경험\n\n📍 전북 전주시 국제 영화제 (매년 4~5월)\n🎬 감독과의 대화 일정 사전 확인 필수\n\n#전주국제영화제 #전주 #전북여행 #감독과의대화 #독립영화',instagram:'전주 국제 영화제 감독과의 대화가 최고예요 🎬\n\n상영 직후 감독 직접 만남 ✨\n만드는 사람의 마음 직접 듣는 경험\n\n📍 전북 전주 국제 영화제\n\n#전주영화제 #전주여행 #전북 #감독과의대화 #GemKorea',tiktok:'전주 영화제 꿀팁 🎬 감독과의 대화 프로그램이 최고예요! 상영 직후 감독·배우 직접 대화 // 상업 영화에서 절대 못 하는 경험 #전주국제영화제 #전주여행 #독립영화'},
    hashtags:{korean:['#한국여행','#전북여행','#전주여행','#영화제','#GemKorea'],place_specific:['#전주국제영화제','#감독과의대화','#독립영화성지','#영화감독만남']}
  },
  {
    experience_id:'EX-GG-FES-002', experience_name:'안성 국제 남사당 보부상 축제', category_sub:'축제', region:'경기도',
    script_30s:'오늘은 안성 남사당 축제에 왔어요. 유네스코 무형유산이에요. 근데 아무도 안 알려주는 게 있어요 — 남사당에서 버나(접시돌리기)가 가장 어렵대요. 접시를 돌리는 막대 끝에 올려놓는 그 균형이 10년은 배워야 한대요. 너무 10년이 담긴 기술이라는 게 좋았습니다.',
    script_60s:'오늘은 경기도 안성 남사당 축제에 왔어요. 유네스코 인류무형문화유산 남사당 풍물놀이의 본고장이에요. 풍물·버나·매·살판·어름·덜미 6가지 공연이 한자리에서 펼쳐져요. 근데 아무도 안 알려주는 꿀팁 하나 — 6가지 공연 중 버나(접시돌리기)가 가장 고난도 기술이에요. 막대 끝에서 접시를 돌리는 것인데, 단순히 접시를 돌리는 게 아니에요. 속도·각도·균형을 초 단위로 조절해야 해요. 이 기술을 습득하는 데 최소 10년이 필요하다고 해요. 공연 중 버나 장면에서 접시가 흔들리다 안정되는 그 순간이 10년 훈련의 결정이에요. 그 사실을 알고 버나를 보면 완전히 다른 감동이 와요. 너무 10년이 담긴 기술이라는 게 좋았습니다.',
    secret_tip:'버나(접시돌리기) = 남사당 최고 난도 기술 — 습득에 최소 10년. 접시가 흔들리다 안정되는 그 순간이 10년 훈련의 결정체. 이 사실 알면 버나 보는 시각 달라짐',
    filming_guide:'버나 접시돌리기 막대 끝 균형 클로즈업 슬로우. 풍물놀이 전체 사물 합주 광각. 살판 곡예 공중 장면.',
    broll_ideas:['버나 접시 막대 끝 균형 슬로우','풍물 사물 합주 광각','살판 곡예 공중 장면','어름 줄타기 클로즈업','6가지 공연 전체'],
    hooks:['버나가 남사당 최고 난도 기술이에요','10년을 배워야 해요','접시 흔들다 안정되는 그 순간','10년이 담긴 기술을 보는 눈이 달라요','안성 남사당 꿀팁'],
    thumbnails:['버나 접시 균형 슬로우','풍물 사물 합주','살판 곡예','어름 줄타기','6가지 공연 전체'],
    captions:{youtube:'안성 남사당 — 버나가 10년짜리 기술이에요 🎪\n\n접시돌리기 막대 끝 균형이 최고 난도!\n그 순간이 10년 훈련의 결정체\n\n📍 경기도 안성시 남사당 축제 (매년 9~10월)\n🎪 유네스코 인류무형문화유산\n\n#안성남사당 #남사당축제 #안성 #경기여행 #유네스코',instagram:'안성 남사당 버나가 10년짜리 기술이에요 🎪\n\n접시 막대 끝 균형 그 순간이 10년 훈련의 결정체 ✨\n유네스코 무형문화유산\n\n📍 경기 안성 남사당 축제\n\n#안성남사당 #남사당 #안성여행 #경기 #GemKorea',tiktok:'안성 남사당 꿀팁 🎪 버나(접시돌리기)가 남사당 최고 난도 기술이에요! 최소 10년 배워야 // 접시가 안정되는 그 순간이 10년 훈련의 결정체 #안성남사당 #남사당 #안성여행'},
    hashtags:{korean:['#한국여행','#경기여행','#안성여행','#남사당','#GemKorea'],place_specific:['#안성남사당축제','#버나10년기술','#남사당6가지공연','#유네스코남사당']}
  },
  {
    experience_id:'EX-GW-FES-003', experience_name:'인제 빙어 송어 축제', category_sub:'낚시/어촌 체험', region:'강원도',
    script_30s:'오늘은 인제 빙어 축제에 왔어요. 맨손으로 빙어 잡기예요. 근데 아무도 안 알려주는 게 있어요 — 빙어를 맨손으로 잡으려면 물이 아닌 빙어를 봐야 해요. 빛 굴절 때문에 물 속 위치가 보이는 것과 달라요. 그 보정이 비결이에요. 너무 눈이 속인다는 게 좋았습니다.',
    script_60s:'오늘은 강원도 인제 빙어 송어 축제에 왔어요. 매년 1월 소양강 상류가 꽁꽁 얼면 얼음 위에서 빙어낚시와 맨손잡기를 즐기는 축제예요. 맨손으로 빙어를 잡는 체험이 특히 인기예요. 근데 아무도 안 알려주는 꿀팁 하나 — 맨손 빙어잡기에 비밀이 있어요. 물 속에 있는 빙어를 잡으려 할 때 보이는 위치와 실제 위치가 달라요. 물의 굴절률 때문에 빙어가 실제보다 위쪽에 있는 것처럼 보여요. 그래서 보이는 곳을 잡으면 항상 놓쳐요. 실제 빙어는 보이는 것보다 아래쪽에 있어요. 이 굴절 보정을 하면 맨손잡기 성공률이 높아져요. 물리 시간에 배운 광학 굴절이 실제로 쓰이는 순간이에요. 너무 눈이 속이고 물리가 답인 체험이라서 좋았습니다.',
    secret_tip:'물 굴절률 때문에 빙어 보이는 위치 != 실제 위치 — 실제는 보이는 것보다 아래. 굴절 보정하면 맨손잡기 성공률 상승. 광학 굴절 실생활 체험. 화천 산천어 세트',
    filming_guide:'맨손 빙어잡기 굴절 보정 순간 클로즈업. 얼음 위 빙어낚시 전체 전경. 빙어 즉석 튀김 먹기.',
    broll_ideas:['맨손 빙어잡기 굴절 보정 순간','얼음 위 낚시 전체 전경','빙어 즉석 튀김 먹기','얼음 구멍 낚싯줄 드리우기','설원 축제 분위기'],
    hooks:['빙어 잡으려면 굴절 보정해야 해요','보이는 위치랑 실제 위치가 달라요','물 굴절률이 눈을 속여요','이걸 알면 맨손잡기 성공률 올라가요','인제 빙어 축제 꿀팁'],
    thumbnails:['맨손 잡기 굴절 보정','얼음 위 낚시 전경','즉석 튀김 먹기','얼음 구멍 낚싯줄','설원 축제'],
    captions:{youtube:'인제 빙어 축제 — 굴절 보정해야 잡아요 🐟\n\n보이는 위치랑 실제 위치가 달라요!\n물 굴절률이 눈을 속이는 물리\n\n📍 강원도 인제군 소양강 (매년 1월)\n🐟 굴절 보정 = 보이는 것보다 아래 잡기\n\n#인제빙어축제 #인제 #강원도여행 #빙어맨손잡기 #굴절보정',instagram:'인제 빙어 축제 굴절 보정해야 잡아요 🐟\n\n물 굴절률이 눈을 속여요 보이는 곳이 아님 ✨\n이 사실 알면 맨손잡기 성공률 올라요\n\n📍 강원 인제 소양강\n\n#인제빙어축제 #인제여행 #강원도 #빙어잡기 #GemKorea',tiktok:'인제 빙어 축제 꿀팁 🐟 맨손 잡기는 보이는 위치 아래를 잡아야 해요! 물 굴절률이 눈을 속여서 실제는 아래에 있음 // 이걸 알면 성공률 올라가요 #인제빙어축제 #인제여행 #강원도'},
    hashtags:{korean:['#한국여행','#강원도여행','#인제여행','#빙어축제','#GemKorea'],place_specific:['#인제빙어축제','#빙어굴절보정','#맨손잡기비결','#광학굴절실생활']}
  },
  {
    experience_id:'EX-JN-FES-004', experience_name:'보성 다향제 녹차 축제', category_sub:'축제', region:'전라남도',
    script_30s:'오늘은 보성 다향제 녹차 축제에 왔어요. 5월이면 찻잎이 제일 좋아요. 근데 아무도 안 알려주는 게 있어요 — 녹차 1등급 잎은 가장 어린 잎이에요. 두 잎 한 새싹만 딴대요. 그게 어떤 맛인지 체험에서 바로 마셔봐요. 너무 어린 잎이 최고라는 게 좋았습니다.',
    script_60s:'오늘은 전남 보성 대한다원에서 열리는 다향제 녹차 축제를 방문했어요. 매년 5월 보성 녹차 새잎 첫 수확 시기에 찻잎 따기·덖기·시음 등 다양한 프로그램이 진행돼요. 근데 아무도 안 알려주는 꿀팁 하나 — 녹차 품질 등급의 비밀이 있어요. 가장 좋은 녹차 1등급은 가장 어린 찻잎으로 만들어요. 새싹이 딱 두 잎 나왔을 때 그 두 잎과 새싹만 따는 게 최고급 녹차예요. 이걸 일창이기(一槍二旗)라고 해요. 창같이 뾰족한 새싹 하나에 깃발 같은 잎 두 장이에요. 이 어린 잎으로 만든 차가 가장 부드럽고 달아요. 체험에서 직접 이 어린 잎을 골라 따보면 왜 고급차가 비싼지 알게 돼요. 너무 어린 잎이 최고라는 게 좋았습니다.',
    secret_tip:'녹차 1등급 = 일창이기(새싹 하나+잎 두 장) — 가장 어린 잎이 최고급. 체험 시 직접 고르면 고급차 가격 이유 이해. 5월 첫 물 차 시즌이 최고',
    filming_guide:'일창이기 새싹+두잎 따기 클로즈업. 보성 초록 차밭 전경. 갓 딴 첫 물 녹차 시음.',
    broll_ideas:['일창이기 새싹 두잎 따기','보성 초록 차밭 전경','갓 딴 첫 물 녹차 시음','차밭 사이 걷기','다향제 현장 전경'],
    hooks:['녹차 1등급이 제일 어린 잎이에요','새싹 하나 잎 두 장이 최고예요','일창이기 비밀이에요','어린 잎이 최고인 이유 알았어요','보성 다향제 녹차 꿀팁'],
    thumbnails:['일창이기 따기 클로즈업','보성 차밭 전경','첫 물 녹차 시음','차밭 사이 걷기','다향제 현장'],
    captions:{youtube:'보성 다향제 — 녹차 1등급이 제일 어린 잎이에요 🍵\n\n새싹 하나+잎 두 장 일창이기가 최고급!\n직접 따보면 가격 이유 이해\n\n📍 전남 보성군 대한다원 (매년 5월)\n🍵 5월 첫 물 차 시즌 방문 추천\n\n#보성다향제 #보성 #전남여행 #일창이기 #녹차1등급',instagram:'보성 다향제 녹차 1등급 제일 어린 잎이에요 🍵\n\n새싹 하나 잎 두 장 일창이기가 최고급 ✨\n어린 잎이 최고인 이유 알았어요\n\n📍 전남 보성 대한다원\n\n#보성다향제 #보성여행 #전남 #일창이기 #GemKorea',tiktok:'보성 다향제 꿀팁 🍵 녹차 1등급이 제일 어린 잎이에요! 새싹 하나+잎 두 장 일창이기가 최고급 // 체험에서 직접 따보면 고급차 가격 이유 알게 됨 #보성다향제 #보성여행 #전남'},
    hashtags:{korean:['#한국여행','#전남여행','#보성여행','#녹차','#GemKorea'],place_specific:['#보성다향제','#일창이기','#녹차1등급최고급','#첫물차시즌']}
  },
  {
    experience_id:'EX-GN-FES-004', experience_name:'남해 보물섬 마늘 축제', category_sub:'농촌 체험', region:'경상남도',
    script_30s:'오늘은 남해 마늘 축제에 왔어요. 남해 마늘이 특산품이에요. 근데 아무도 안 알려주는 게 있어요 — 남해 마늘이 매운 게 섬 기후 때문이에요. 바닷바람을 맞으면 마늘이 더 강해져요. 환경이 맛을 만드는 거예요. 너무 자연이 요리사라는 게 좋았습니다.',
    script_60s:'오늘은 경남 남해 보물섬 마늘 축제에 왔어요. 매년 6월 남해군에서 열리는 지역 특산 마늘 축제예요. 마늘 캐기·마늘 요리·마늘 건강 강연이 함께 열려요. 근데 아무도 안 알려주는 꿀팁 하나 — 남해 마늘이 다른 지역 마늘보다 매운 이유가 있어요. 남해는 바다로 둘러싸인 섬이에요. 사방에서 해풍이 불어와요. 이 바닷바람을 맞으면서 자란 마늘은 스트레스 반응으로 알리신 함량이 높아져요. 알리신이 마늘의 매운 성분이에요. 그래서 바닷바람이 많은 지역 마늘이 더 매운 경향이 있어요. 남해·제주 마늘이 육지 마늘보다 매운 이유예요. 자연 환경이 마늘의 맛을 결정하는 거예요. 너무 자연이 요리사라는 게 좋았습니다.',
    secret_tip:'남해 마늘 매운 이유 = 해풍 스트레스로 알리신 함량 높아짐 — 바닷바람=더 강한 마늘. 제주 마늘도 같은 원리. 자연 환경이 식재료 맛 결정. 독일마을 세트',
    filming_guide:'마늘 캐기 체험 손 클로즈업. 남해 바다 배경 마늘밭 전경. 마늘 요리 시식 장면.',
    broll_ideas:['마늘 캐기 손 클로즈업','남해 바다 배경 마늘밭','마늘 요리 시식','마늘 건강 설명','남해 독일마을 세트'],
    hooks:['남해 마늘이 매운 이유 알아요?','해풍 스트레스로 알리신 높아져요','바닷바람이 마늘을 더 강하게 해요','자연이 요리사예요','남해 마늘 축제 꿀팁'],
    thumbnails:['마늘 캐기 클로즈업','남해 마늘밭 전경','마늘 요리 시식','마늘 건강 설명','독일마을 세트'],
    captions:{youtube:'남해 마늘 축제 — 남해 마늘이 매운 이유 있어요 🧄\n\n해풍 스트레스로 알리신 함량 높아짐!\n바닷바람이 마늘을 더 강하게 만들어요\n\n📍 경남 남해군 (매년 6월)\n🧄 마늘 캐기+요리+건강 강연 세트\n\n#남해마늘축제 #남해 #경남여행 #마늘매운이유 #해풍알리신',instagram:'남해 마늘 축제 남해 마늘이 매운 이유 있어요 🧄\n\n해풍 스트레스 알리신 함량 높아지는 원리 ✨\n바닷바람이 마늘을 강하게 만들어요\n\n📍 경남 남해 마늘 축제\n\n#남해마늘축제 #남해여행 #경남 #마늘 #GemKorea',tiktok:'남해 마늘 축제 꿀팁 🧄 남해 마늘이 매운 이유가 해풍이에요! 바닷바람 스트레스로 알리신 함량이 높아짐 // 자연이 요리사인 거예요 #남해마늘축제 #남해여행 #경남'},
    hashtags:{korean:['#한국여행','#경남여행','#남해여행','#마늘축제','#GemKorea'],place_specific:['#남해마늘축제','#해풍알리신','#바닷바람마늘','#자연이요리사']}
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
