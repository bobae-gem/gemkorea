const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const now = new Date().toISOString().slice(0,19);

const newExps = [
  {experience_id:'EX-SE-CUL-073',name:'서울 인사동 전통 공예 투어',category_main:'문화/체험',category_sub:'전통공예',region_main:'SE',region_sub:'서울특별시 종로구',address:'서울특별시 종로구 인사동길 일대',lat:37.5726,lng:126.9856,price:'체험별 상이',duration:'2~3시간',reservation_required:false,target_user:['개인','커플','가족'],nearby_places:[],related_heritage_ids:[],short_description:'서울 인사동에서 한국화·한지공예·도자기·목공예 등 전통 공예 체험을 즐기는 투어다. 인사동 공방 밀집 골목을 따라 다양한 전통 공예 체험이 집약된 서울 대표 공예 체험 거리다.',source_urls:['https://www.jongno.go.kr/'],data_confidence:'high',tags:['인사동공예투어','인사동','서울','전통공예','한지공예','도자기','종로'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'10:00~21:00',phone:'02-734-0222'},
  {experience_id:'EX-JB-CUL-065',name:'전주 가맥집 투어',category_main:'문화/체험',category_sub:'지역 먹거리',region_main:'JB',region_sub:'전라북도 전주시',address:'전라북도 전주시 완산구 가맥거리 일대',lat:35.8144,lng:127.1497,price:'1인 10,000원~',duration:'1~2시간',reservation_required:false,target_user:['청년','개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'전주 특유의 가맥집 문화를 체험하는 투어다. 가맥이란 가게에서 맥주를 파는 전주만의 독특한 음주 문화로 일반 가게·편의점에서 두부·마른안주와 함께 저렴하게 맥주를 즐기는 전주 로컬 문화다.',source_urls:['https://www.jeonjufood.or.kr/'],data_confidence:'high',tags:['전주가맥','전주','전북','가맥집','전주맥주','로컬문화','한국음주문화'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'저녁 16:00~22:00',phone:'063-220-5831'},
  {experience_id:'EX-GN-NAT-079',name:'남해 독일마을 이국적 산책',category_main:'문화/체험',category_sub:'문화투어',region_main:'GN',region_sub:'경상남도 남해군',address:'경상남도 남해군 삼동면 독일로 92',lat:34.7889,lng:127.9119,price:'입장 무료',duration:'1~2시간',reservation_required:false,target_user:['커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'한국 남해에 조성된 독일 스타일 마을 독일마을을 산책하는 이색 체험이다. 1960~70년대 독일 파견 광부·간호사 출신 교포들이 정착해 만든 독일식 건축 마을로 남해 바다 배경이 이국적이다.',source_urls:['https://www.namhae.go.kr/'],data_confidence:'high',tags:['남해독일마을','남해','경남','독일마을','이국적','교포정착','파독광부'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (무료)',phone:'055-863-3427'},
  {experience_id:'EX-GW-NAT-068',name:'삼척 해양레일바이크',category_main:'문화/체험',category_sub:'어드벤처/레포츠',region_main:'GW',region_sub:'강원특별자치도 삼척시',address:'강원특별자치도 삼척시 근덕면 공양왕길 2',lat:37.4267,lng:129.2267,price:'2인 이상 기준 28,000원~',duration:'1시간',reservation_required:true,target_user:['커플','가족'],nearby_places:[],related_heritage_ids:[],short_description:'삼척 바다 위를 달리는 해양 레일바이크를 타는 어드벤처 체험이다. 폐철로를 활용한 삼척 해양레일바이크는 동해 바다 절경을 바라보며 5.4km 코스를 달리는 강원도 대표 레저 체험이다.',source_urls:['https://www.samcheok.go.kr/'],data_confidence:'high',tags:['삼척레일바이크','삼척','강원','해양레일바이크','동해바다','폐철로','레저'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00',phone:'033-576-0656'},
  {experience_id:'EX-JN-NAT-082',name:'순천만 일몰 갈대밭',category_main:'문화/체험',category_sub:'자연체험',region_main:'JN',region_sub:'전라남도 순천시',address:'전라남도 순천시 순천만길 513-25',lat:34.9025,lng:127.4850,price:'성인 8,000원',duration:'2~3시간',reservation_required:false,target_user:['커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'유네스코 세계자연유산 순천만 갈대밭에서 일몰을 감상하는 체험이다. 10~11월 황금빛 갈대가 물드는 시즌에 용산 전망대에서 S자 수로와 일몰이 어우러지는 순천만의 절경을 즐긴다.',source_urls:['https://www.suncheonbay.go.kr/'],data_confidence:'high',tags:['순천만갈대밭','순천만','전남','갈대밭','일몰','유네스코','흑두루미'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00',phone:'061-749-6054'},
  {experience_id:'EX-GW-NAT-069',name:'정선 아리랑 공연 체험',category_main:'문화/체험',category_sub:'전통공연',region_main:'GW',region_sub:'강원특별자치도 정선군',address:'강원특별자치도 정선군 정선읍 봉양리 아리랑공연장',lat:37.3808,lng:128.6594,price:'무료~',duration:'1~2시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'유네스코 인류무형문화유산 정선 아리랑을 직접 공연·체험하는 프로그램이다. 강원 정선의 산골 정서가 담긴 정선 아리랑은 한 맺힌 메나리조 선율이 특징으로 국내 아리랑 중 가장 슬프고 독특하다.',source_urls:['https://www.jeongseonarrang.or.kr/'],data_confidence:'high',tags:['정선아리랑','정선','강원','유네스코아리랑','전통공연','메나리조','아리랑'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'공연 일정 확인 후 방문',phone:'033-562-1000'},
  {experience_id:'EX-GJ-CUL-012',name:'광주 1913 송정역 시장',category_main:'문화/체험',category_sub:'지역 먹거리',region_main:'GJ',region_sub:'광주광역시 광산구',address:'광주광역시 광산구 송정로 8번길 13',lat:35.1372,lng:126.7939,price:'먹거리 별도',duration:'1~2시간',reservation_required:false,target_user:['개인','커플','가족'],nearby_places:[],related_heritage_ids:[],short_description:'1913년 개설된 송정 전통 시장이 2016년 리뉴얼돼 청년 상인·레트로 감성이 어우러진 1913 송정역 시장으로 재탄생했다. KTX 광주송정역 옆에 위치해 여행자 방문이 많은 광주 대표 먹거리 시장이다.',source_urls:['https://www.1913songjungstation.com/'],data_confidence:'high',tags:['1913송정역시장','광주','광주광산구','전통시장','청년상인','레트로','먹거리'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'10:00~21:00 (화 휴무)',phone:'062-941-1913'},
  {experience_id:'EX-GG-NAT-070',name:'안산 대부도 바지락 조개잡이',category_main:'문화/체험',category_sub:'농촌 체험',region_main:'GG',region_sub:'경기도 안산시',address:'경기도 안산시 단원구 대부도 갯벌 일대',lat:37.2133,lng:126.5658,price:'1인 5,000원~',duration:'2시간',reservation_required:false,target_user:['가족','어린이'],nearby_places:[],related_heritage_ids:[],short_description:'경기도 안산 대부도 갯벌에서 바지락·조개를 직접 잡는 갯벌 체험이다. 서울에서 1시간 거리 대부도 갯벌이 수도권 최대 갯벌 체험지로 물빠진 갯벌에서 맨손으로 바지락을 잡는 인기 가족 체험이다.',source_urls:['https://www.ansan.go.kr/'],data_confidence:'high',tags:['대부도갯벌체험','대부도','안산','경기','바지락잡기','조개잡이','갯벌'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'seasonal',operating_hours:'썰물 시간 확인 필수 (봄~가을)',phone:'031-481-2580'},
  {experience_id:'EX-JN-CUL-044',name:'고창 선운사 꽃무릇 트레킹',category_main:'문화/체험',category_sub:'자연체험',region_main:'JN',region_sub:'전라북도 고창군',address:'전라북도 고창군 아산면 선운사로 250',lat:35.5061,lng:126.6086,price:'성인 3,000원',duration:'1~2시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'전북 고창 선운사 일원에서 9월 하순~10월 초 꽃무릇이 붉게 물드는 시즌에 트레킹을 즐기는 체험이다. 고창 선운사 꽃무릇 군락이 전국 최대 규모로 선운사 계곡과 어우러지는 붉은 꽃무릇 절경이다.',source_urls:['https://www.seonunsa.org/'],data_confidence:'high',tags:['선운사꽃무릇','고창','전북','꽃무릇','상사화','선운사','9월'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'9월 하순~10월 초 시즌',phone:'063-561-1422'},
  {experience_id:'EX-GN-CUL-069',name:'사천 항공우주박물관 체험',category_main:'문화/체험',category_sub:'역사 체험',region_main:'GN',region_sub:'경상남도 사천시',address:'경상남도 사천시 사남면 공단1로 78',lat:35.0281,lng:128.1164,price:'성인 9,000원',duration:'2~3시간',reservation_required:false,target_user:['가족','어린이'],nearby_places:[],related_heritage_ids:[],short_description:'대한민국 항공우주 역사와 산업을 체험하는 사천 항공우주박물관 투어다. T-50 고등훈련기·KF-21 모형 등 한국 항공기 실물을 관람하고 비행 시뮬레이터를 직접 조종하는 과학 체험이다.',source_urls:['https://www.aerospacemuseum.or.kr/'],data_confidence:'high',tags:['사천항공우주박물관','사천','경남','항공우주','T-50','KF-21','비행시뮬레이터'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:30~17:30 (월 휴관)',phone:'055-851-6565'},
  {experience_id:'EX-JN-NAT-083',name:'임실 치즈마을 피자 만들기',category_main:'문화/체험',category_sub:'농촌 체험',region_main:'JN',region_sub:'전라북도 임실군',address:'전라북도 임실군 임실읍 치즈마을 5길 12',lat:35.6178,lng:127.2889,price:'체험 18,000원~',duration:'1~2시간',reservation_required:true,target_user:['가족','어린이','커플'],nearby_places:[],related_heritage_ids:[],short_description:'한국 치즈의 발상지 전북 임실 치즈마을에서 직접 치즈와 피자를 만드는 체험이다. 벨기에 신부 지정환에 의해 시작된 임실 치즈 역사를 배우고 직접 피자를 만들어 먹는 가족 체험이다.',source_urls:['https://www.imsil-cheese.com/'],data_confidence:'high',tags:['임실치즈마을','임실','전북','치즈만들기','피자만들기','지정환신부','치즈발상지'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'10:00~17:00 (예약 필수)',phone:'063-643-3700'},
  {experience_id:'EX-CB-NAT-043',name:'충주 활 체험 국궁장',category_main:'문화/체험',category_sub:'어드벤처/레포츠',region_main:'CB',region_sub:'충청북도 충주시',address:'충청북도 충주시 충의로 50 충주국궁장',lat:36.9908,lng:127.9261,price:'성인 3,000원~',duration:'1시간',reservation_required:false,target_user:['개인','커플','가족'],nearby_places:[],related_heritage_ids:[],short_description:'충북 충주 국궁장에서 전통 활 국궁을 직접 쏘는 체험이다. 충주는 조선 시대 훈련 지역으로 전통 국궁 체험이 잘 보존된 곳으로 40~145m 표적 사거리에서 화살을 쏘는 정통 국궁 체험을 즐길 수 있다.',source_urls:['https://www.chungju.go.kr/'],data_confidence:'high',tags:['충주국궁체험','충주','충북','국궁','활','전통무예','조선'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00',phone:'043-850-6821'}
];

const newShorts = [
  {
    experience_id:'EX-JB-NAT-062', experience_name:'전주 한옥마을 한지 뜨기', category_sub:'전통공예', region:'전라북도',
    script_30s:'오늘은 전주 한옥마을에서 한지 뜨기를 했어요. 근데 아무도 안 알려주는 게 있어요 — 한지가 닥나무 껍질로 만드는데 한 번 만들면 천 년이 가요. 유럽 종이는 수백 년이면 산화되지만 한지는 천 년을 버텨요. 너무 종이가 이렇게 다를 수 있다는 게 좋았습니다.',
    script_60s:'오늘은 전주 한옥마을에서 전통 한지 뜨기 체험을 했어요. 전주는 조선 시대 최고급 한지 산지로 임금에게 올리는 진상품이 전주 한지였어요. 근데 아무도 안 알려주는 꿀팁 하나 — 한지가 얼마나 오래가는지 알아요? 한지는 닥나무 섬유로 만들어요. 닥나무 섬유가 굉장히 질겨서 천 년 이상 보존이 가능해요. 실제로 통일신라시대 한지가 지금도 남아있어요. 반면 유럽 종이는 산성 성질 때문에 수백 년이면 산화되고 바스러져요. 그래서 유럽 박물관에서 오래된 한국 문서 복원할 때 한지를 사용해요. 루브르 박물관도 소장품 복원에 한지를 써요. 한지가 세계 최고 복원 재료예요. 너무 종이가 이렇게 다를 수 있다는 게 좋았습니다.',
    secret_tip:'한지 = 천 년 이상 보존 가능 — 닥나무 섬유 질겨서 유럽 종이와 차원 달라. 통일신라 한지 현존. 루브르 박물관 소장품 복원에 한지 사용. 세계 최고 복원 재료',
    filming_guide:'닥나무 섬유 물에 풀기 클로즈업. 한지 뜨기 발틀 올리는 손. 완성된 한지 투명하게 비치는 장면.',
    broll_ideas:['닥나무 섬유 물에 풀기 클로즈업','한지 뜨기 발틀 올리기','완성된 한지 투명하게 비침','전주 한옥마을 배경','한지 작품 완성'],
    hooks:['한지가 천 년이 가요','루브르 박물관도 한지 써요','유럽 종이는 산화돼요','통일신라 한지가 아직 있어요','전주 한지 뜨기 꿀팁'],
    thumbnails:['닥나무 섬유 클로즈업','발틀 올리기','완성 한지 투명','한옥마을 배경','한지 작품'],
    captions:{youtube:'전주 한지 뜨기 — 천 년이 가는 종이예요 📜\n\n루브르 박물관도 한지로 복원!\n유럽 종이는 수백 년이면 산화\n\n📍 전북 전주시 완산구 전통문화관길 35\n📜 조선 최고급 진상 한지 산지\n\n#전주한지뜨기 #전주한옥마을 #전주 #전북여행 #한지천년보존',instagram:'전주 한지 뜨기 천 년이 가는 종이예요 📜\n\n루브르 박물관도 복원에 한지 써요 ✨\n유럽 종이는 수백 년이면 산화\n\n📍 전북 전주 한옥마을\n\n#전주한지뜨기 #전주한옥마을 #전주여행 #전북 #GemKorea',tiktok:'전주 한지 뜨기 꿀팁 📜 한지가 천 년 이상 가요! 루브르 박물관도 소장품 복원에 한지 사용 // 유럽 종이는 수백 년이면 산화돼요 #전주한지뜨기 #전주한옥마을 #전주여행'},
    hashtags:{korean:['#한국여행','#전북여행','#전주여행','#한지체험','#GemKorea'],place_specific:['#전주한지뜨기','#한지천년보존','#루브르한지복원','#닥나무섬유']}
  },
  {
    experience_id:'EX-JN-CUL-042', experience_name:'목포 근대역사관 투어', category_sub:'역사 체험', region:'전라남도',
    script_30s:'오늘은 목포 근대역사관에 왔어요. 일제 영사관 건물이에요. 근데 아무도 안 알려주는 게 있어요 — 목포는 전국에서 근대 건축물이 가장 많이 남아있는 도시예요. 한 번에 걷는 근대 투어가 가능한 유일한 도시예요. 너무 목포가 이런 곳이라는 게 좋았습니다.',
    script_60s:'오늘은 전남 목포 근대역사관을 탐방했어요. 일제강점기 일본 영사관 건물을 재활용한 박물관으로 1900년대 초 개항기 목포를 기록한 역사 공간이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 목포가 왜 근대 투어의 성지인지 알아요? 목포는 전국에서 일제강점기 근대 건축물이 가장 밀집하게 보존된 도시예요. 목포 구시가지 반경 1km 안에 근대 건축물이 100여 채 이상 있어요. 옛 동양척식회사 목포지점, 일본 영사관, 호남은행 목포지점 등 개항기 건물들이 그대로 남아있어요. 드라마 호텔 델루나·검은 태양·스물다섯 스물하나 등 수십 편의 촬영지가 여기예요. 목포를 알면 한국 근대사 전체가 보여요. 너무 목포가 이런 살아있는 근대 박물관이라는 게 좋았습니다.',
    secret_tip:'목포 = 전국 최다 근대 건축물 밀집 도시 — 반경 1km 안에 100여 채. 드라마 수십 편 촬영지. 동양척식회사·일본 영사관·호남은행 등 개항기 건물 보존. 도보 1시간 근대 투어 가능',
    filming_guide:'근대역사관 붉은 벽돌 건물 클로즈업. 목포 골목 근대 건물 연속 샷. 목포 유달산 배경.',
    broll_ideas:['근대역사관 붉은 벽돌 클로즈업','목포 골목 근대 건물 연속','목포 유달산 배경','개항기 사진 자료','드라마 촬영 흔적'],
    hooks:['목포가 전국 최다 근대 건물이에요','반경 1km 안에 100채 이상이에요','드라마 수십 편을 여기서 찍었어요','개항기 건물이 그대로 남아있어요','목포 근대 투어 꿀팁'],
    thumbnails:['붉은 벽돌 건물 클로즈업','목포 근대 골목','유달산 배경','개항기 사진','드라마 촬영지'],
    captions:{youtube:'목포 근대역사관 — 전국 최다 근대 건물이 있어요 🏛️\n\n반경 1km에 100채 이상!\n드라마 수십 편 촬영지\n\n📍 전남 목포시 영산로29번길 6\n🏛️ 일제강점기 개항기 건물 군락\n\n#목포근대역사관 #목포 #전남여행 #목포근대건축 #목포드라마촬영지',instagram:'목포 근대역사관 전국 최다 근대 건물이 있어요 🏛️\n\n반경 1km에 100채 이상 드라마 수십 편 촬영지 ✨\n목포 알면 한국 근대사 다 보여요\n\n📍 전남 목포 근대역사관\n\n#목포근대역사관 #목포여행 #전남 #근대건축 #GemKorea',tiktok:'목포 꿀팁 🏛️ 전국에서 근대 건축물이 가장 많이 남아있어요! 반경 1km 안에 100여 채 // 드라마 수십 편 촬영지예요 #목포근대역사관 #목포여행 #전남'},
    hashtags:{korean:['#한국여행','#전남여행','#목포여행','#근대건축','#GemKorea'],place_specific:['#목포근대역사관','#전국최다근대건물','#개항기건물보존','#목포드라마촬영지']}
  },
  {
    experience_id:'EX-GW-NAT-068', experience_name:'삼척 해양레일바이크', category_sub:'어드벤처/레포츠', region:'강원특별자치도',
    script_30s:'오늘은 삼척 해양레일바이크를 탔어요. 바다 위를 달려요. 근데 아무도 안 알려주는 게 있어요 — 이 레일이 원래 삼척 탄광 석탄 운반하던 철로예요. 폐광 이후 레저로 바꿨어요. 그 역사가 재미있어요. 너무 탄광 철로가 레저가 됐다는 게 좋았습니다.',
    script_60s:'오늘은 강원도 삼척 해양레일바이크를 탔어요. 동해 바다를 바라보며 5.4km 레일을 달리는 체험이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 삼척 레일바이크 철로의 역사가 있어요. 이 레일은 원래 삼척 탄광에서 석탄을 운반하던 산업 철도였어요. 삼척·정선·태백 일대는 1960~80년대 한국 산업화를 이끈 탄광 지대예요. 그 시절 이 철도로 석탄이 실려 나갔어요. 폐광 이후 버려진 철로를 2010년대에 관광 레일바이크로 전환했어요. 지금은 연간 수십만 명이 찾는 강원도 대표 레저가 됐어요. 달리면서 보이는 동해 바다와 기암절벽이 일품이에요. 너무 산업 유산이 레저로 변신한다는 게 좋았습니다.',
    secret_tip:'삼척 레일바이크 철로 = 옛 탄광 석탄 운반 산업 철도 — 폐광 후 2010년대 레저 전환. 삼척·정선·태백 탄광 지대 역사. 달리면서 동해 기암절벽 조망이 핵심',
    filming_guide:'레일바이크 달리며 동해 바다 배경 영상. 기암절벽 구간 클로즈업. 옛 철도 레일 클로즈업.',
    broll_ideas:['레일바이크 달리며 동해 배경','기암절벽 구간 클로즈업','옛 탄광 철도 레일','삼척 동해 바다 전경','연인 함께 레일바이크'],
    hooks:['이 철로가 탄광 석탄 운반 철도예요','폐광 이후 레저로 바꿨어요','달리면서 동해가 보여요','산업 유산이 레저가 됐어요','삼척 레일바이크 꿀팁'],
    thumbnails:['레일바이크 동해 배경','기암절벽 구간','옛 탄광 레일','동해 전경','연인 레일바이크'],
    captions:{youtube:'삼척 해양레일바이크 — 탄광 철도가 레저가 됐어요 🚃\n\n동해 바다를 달리며 절경 감상!\n옛 석탄 운반 철도가 관광지로\n\n📍 강원도 삼척시 근덕면 공양왕길 2\n🚃 5.4km 해양 레일바이크\n\n#삼척레일바이크 #삼척 #강원여행 #해양레일바이크 #탄광역사',instagram:'삼척 해양레일바이크 탄광 철도가 레저가 됐어요 🚃\n\n옛 석탄 운반 철도에서 동해 달리기 ✨\n산업 유산이 레저로 변신\n\n📍 강원 삼척 해양레일바이크\n\n#삼척레일바이크 #삼척여행 #강원 #레일바이크 #GemKorea',tiktok:'삼척 레일바이크 꿀팁 🚃 이 철로가 원래 탄광 석탄 운반 산업 철도예요! 폐광 이후 레저로 전환 // 달리면서 동해 기암절벽 조망이 일품이에요 #삼척레일바이크 #삼척여행 #강원'},
    hashtags:{korean:['#한국여행','#강원여행','#삼척여행','#레일바이크','#GemKorea'],place_specific:['#삼척해양레일바이크','#탄광철도레저전환','#동해기암절벽조망','#산업유산레저']}
  },
  {
    experience_id:'EX-JN-NAT-082', experience_name:'순천만 일몰 갈대밭', category_sub:'자연체험', region:'전라남도',
    script_30s:'오늘은 순천만 갈대밭에 왔어요. 유네스코 세계자연유산이에요. 근데 아무도 안 알려주는 게 있어요 — 순천만 갈대밭에 흑두루미가 겨울에 와요. 시베리아에서 날아오는 희귀 철새예요. 10~11월에 오면 갈대밭에서 두루미를 볼 수 있어요. 너무 희귀새가 이렇게 가까이라는 게 좋았습니다.',
    script_60s:'오늘은 전남 순천만 갈대밭을 방문했어요. 유네스코 세계자연유산으로 S자 수로와 갈대밭이 아름다운 곳이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 순천만 최고의 비밀이 있어요. 순천만에는 매년 10월~3월 겨울에 흑두루미가 날아와요. 시베리아에서 일본 이즈미로 이동하는 경로에 순천만에 들러요. 전 세계 흑두루미가 약 1만 3,000마리인데 그 중 수천 마리가 순천만에 들러요. 흑두루미는 천연기념물 228호이고 멸종위기 야생생물 2급이에요. 갈대밭 사이를 유유히 걷는 두루미를 눈앞에서 볼 수 있어요. 용산 전망대에서 갈대밭과 두루미를 함께 담으면 최고의 사진이 돼요. 너무 이런 희귀새가 이렇게 가까이 볼 수 있다는 게 좋았습니다.',
    secret_tip:'순천만 = 매년 겨울 흑두루미 수천 마리 도래지 — 시베리아→일본 이동 경로. 전 세계 1만3천 마리 중 수천 마리가 이곳에. 10월~3월 방문 시 천연기념물 바로 앞에서 관찰 가능',
    filming_guide:'갈대밭 사이 흑두루미 클로즈업. 용산 전망대에서 S자 수로+갈대밭 전경. 일몰 갈대밭 황금빛.',
    broll_ideas:['갈대밭 흑두루미 클로즈업','S자 수로+갈대밭 전경','일몰 갈대밭 황금빛','흑두루미 비행 장면','순천만 일출'],
    hooks:['순천만에 흑두루미가 와요','시베리아에서 날아오는 희귀새예요','전세계 1만3천 마리 중 수천 마리가 여기예요','천연기념물을 바로 앞에서 봐요','순천만 갈대밭 꿀팁'],
    thumbnails:['갈대밭 흑두루미 클로즈업','S자 수로 전경','일몰 황금빛','흑두루미 비행','순천만 일출'],
    captions:{youtube:'순천만 갈대밭 — 겨울에 흑두루미가 와요 🌾\n\n시베리아에서 날아오는 천연기념물!\n전세계 1만3천 마리 중 수천 마리\n\n📍 전남 순천시 순천만길 513-25\n🌾 유네스코 세계자연유산\n\n#순천만갈대밭 #순천만 #전남여행 #흑두루미 #유네스코',instagram:'순천만 갈대밭 겨울에 흑두루미가 와요 🌾\n\n시베리아에서 날아오는 천연기념물 ✨\n전세계 1만3천 마리 중 수천 마리가 순천만에\n\n📍 전남 순천 순천만\n\n#순천만갈대밭 #순천만여행 #전남 #흑두루미 #GemKorea',tiktok:'순천만 갈대밭 꿀팁 🌾 겨울에 흑두루미가 수천 마리 날아와요! 시베리아에서 일본 가는 경로에 순천만 들름 // 천연기념물 228호를 바로 앞에서 볼 수 있어요 #순천만갈대밭 #순천만 #전남'},
    hashtags:{korean:['#한국여행','#전남여행','#순천여행','#순천만','#GemKorea'],place_specific:['#순천만갈대밭흑두루미','#흑두루미겨울도래지','#천연기념물228호','#순천만유네스코']}
  },
  {
    experience_id:'EX-GN-NAT-079', experience_name:'남해 독일마을 이국적 산책', category_sub:'문화투어', region:'경상남도',
    script_30s:'오늘은 남해 독일마을에 왔어요. 근데 아무도 안 알려주는 게 있어요 — 이 마을 주민들이 1960년대 독일에 파견된 광부·간호사 출신이에요. 외화를 벌기 위해 떠난 분들이에요. 그 역사가 담긴 마을이에요. 너무 한국 근대사가 이 마을에 있다는 게 좋았습니다.',
    script_60s:'오늘은 경남 남해 독일마을을 산책했어요. 독일식 건축물과 남해 바다가 어우러지는 이국적 공간이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 독일마을의 진짜 역사가 있어요. 1960~70년대 한국은 경제 개발을 위해 외화가 절실했어요. 독일에 광부와 간호사를 파견해 외화를 벌어오게 했어요. 1963년부터 약 20년간 약 8,000명의 광부와 1만 명의 간호사가 독일로 떠났어요. 그분들이 은퇴 후 고향 한국으로 돌아와 정착한 곳이 남해예요. 독일 생활 방식에 익숙해진 분들이 독일식 가옥을 짓고 모여 살았어요. 그게 독일마을이에요. 그 시절 파독 광부·간호사들이 보낸 외화가 한국 산업화의 종잣돈이에요. 너무 한국 근대사의 눈물과 희생이 이 아름다운 마을에 담겨있다는 게 좋았습니다.',
    secret_tip:'남해 독일마을 = 1960~70년대 독일 파견 광부·간호사 귀국 정착지 — 약 8천 광부+1만 간호사. 그들이 보낸 외화가 한국 산업화 종잣돈. 눈물의 역사가 담긴 아름다운 마을',
    filming_guide:'독일식 건물+남해 바다 배경 조합. 마을 할머니 인터뷰 (파독 간호사 이야기). 독일 국기 클로즈업.',
    broll_ideas:['독일식 건물+남해 바다 배경','독일 국기 클로즈업','마을 전경','파독 광부 사진 자료','남해 바다 일몰'],
    hooks:['이 마을 주민이 파독 광부·간호사 출신이에요','1960년대 독일에 파견됐어요','그들의 외화가 한국 산업화 종잣돈이에요','눈물의 역사가 담긴 마을이에요','남해 독일마을 꿀팁'],
    thumbnails:['독일식 건물+남해 배경','독일 국기','마을 전경','파독 사진 자료','남해 일몰'],
    captions:{youtube:'남해 독일마을 — 파독 광부·간호사의 귀국 정착지예요 🇩🇪\n\n그들의 외화가 한국 산업화 종잣돈!\n눈물의 역사가 담긴 아름다운 마을\n\n📍 경남 남해군 삼동면 독일로 92\n🇩🇪 1960년대 파독 광부·간호사 역사\n\n#남해독일마을 #남해 #경남여행 #파독광부간호사 #한국근대역사',instagram:'남해 독일마을 파독 광부·간호사의 귀국 정착지예요 🇩🇪\n\n그들의 외화가 한국 산업화 종잣돈 ✨\n눈물의 역사가 담긴 아름다운 마을\n\n📍 경남 남해 독일마을\n\n#남해독일마을 #남해여행 #경남 #파독광부간호사 #GemKorea',tiktok:'남해 독일마을 꿀팁 🇩🇪 이 마을 주민이 1960년대 독일 파견 광부·간호사 출신이에요! 그들이 보낸 외화가 한국 산업화 종잣돈 // 눈물의 역사가 담긴 아름다운 마을 #남해독일마을 #남해여행 #경남'},
    hashtags:{korean:['#한국여행','#경남여행','#남해여행','#독일마을','#GemKorea'],place_specific:['#남해독일마을파독','#파독광부간호사귀국정착','#한국산업화종잣돈','#눈물의역사아름다운마을']}
  },
  {
    experience_id:'EX-GG-NAT-070', experience_name:'안산 대부도 바지락 조개잡이', category_sub:'농촌 체험', region:'경기도',
    script_30s:'오늘은 대부도 갯벌에서 바지락을 잡았어요. 근데 아무도 안 알려주는 게 있어요 — 바지락은 모래가 아니라 갯벌 10cm 안에 있어요. 긁개를 10cm 깊이로 긁으면 돼요. 너무 얕은 데 있다는 게 좋았습니다.',
    script_60s:'오늘은 경기도 안산 대부도 갯벌에서 바지락 조개잡이 체험을 했어요. 물이 빠진 갯벌에서 호미·갈퀴로 직접 바지락을 잡는 체험이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 바지락을 잘 잡는 비법이 있어요. 많은 사람이 모래 위를 긁는데 바지락은 갯벌 표면이 아니라 5~10cm 깊이에 있어요. 긁개나 갈퀴를 갯벌에 꽂고 10cm 깊이로 긁어야 해요. 그리고 바지락은 밀물이 들어오는 방향 쪽 갯벌에 더 많아요. 바지락이 먹이를 먹으려고 밀물 방향을 선호하기 때문이에요. 그리고 기포가 올라오는 곳을 찾으면 거기에 바지락이 있는 신호예요. 기포 올라오는 곳 바로 밑을 파면 바지락이 있어요. 너무 생물이 이렇게 자기 힌트를 주고 있다는 게 좋았습니다.',
    secret_tip:'바지락 잡기 = 갯벌 5~10cm 깊이 긁기 — 표면에 없음. 밀물 방향 갯벌에 더 많음. 기포 올라오는 곳 바로 밑 파면 있음. 대부도 갈대밭 세트 코스',
    filming_guide:'갯벌 10cm 깊이 긁는 손 클로즈업. 기포 올라오는 갯벌 표면. 바지락 가득 바구니.',
    broll_ideas:['갯벌 10cm 깊이 긁기 클로즈업','기포 올라오는 갯벌 표면','바지락 가득 바구니','대부도 갯벌 전경','즉석 바지락 시식'],
    hooks:['바지락은 10cm 깊이에 있어요','표면 긁으면 못 잡아요','기포 올라오는 곳 파면 있어요','밀물 방향에 더 많아요','대부도 바지락 잡기 꿀팁'],
    thumbnails:['갯벌 10cm 긁기','기포 올라오는 표면','바지락 가득 바구니','갯벌 전경','즉석 시식'],
    captions:{youtube:'대부도 바지락 잡기 — 10cm 깊이에 있어요 🐚\n\n기포 올라오는 곳 바로 밑!\n밀물 방향 갯벌에 더 많아요\n\n📍 경기도 안산시 단원구 대부도 갯벌\n🐚 수도권 최대 갯벌 체험지\n\n#대부도바지락잡기 #대부도 #안산 #경기여행 #갯벌체험',instagram:'대부도 바지락 잡기 10cm 깊이에 있어요 🐚\n\n기포 올라오는 곳 바로 밑 파기 ✨\n밀물 방향 갯벌에 더 많아요\n\n📍 경기 안산 대부도 갯벌\n\n#대부도바지락 #대부도여행 #안산 #경기 #GemKorea',tiktok:'대부도 바지락 꿀팁 🐚 바지락은 갯벌 10cm 깊이에 있어요! 기포 올라오는 곳 바로 밑 파면 있음 // 밀물 방향 갯벌에 더 많아요 #대부도바지락잡기 #대부도 #안산여행'},
    hashtags:{korean:['#한국여행','#경기여행','#안산여행','#대부도','#GemKorea'],place_specific:['#대부도바지락잡기','#갯벌10cm깊이','#기포올라오는곳파기','#밀물방향바지락많음']}
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
