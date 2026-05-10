const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const now = new Date().toISOString().slice(0,19);

const newExps = [
  {experience_id:'EX-GW-NAT-064',name:'평창 봉평 효석문화마을',category_main:'문화/체험',category_sub:'역사 체험',region_main:'GW',region_sub:'강원특별자치도 평창군',address:'강원특별자치도 평창군 봉평면 이효석길 33-39',lat:37.5658,lng:128.4906,price:'박물관 성인 2,000원',duration:'2~3시간',reservation_required:false,target_user:['커플','개인','가족'],nearby_places:[],related_heritage_ids:[],short_description:'메밀꽃 필 무렵 소설 배경지 평창 봉평에서 이효석 문학 체험을 즐기는 코스다. 이효석 생가·문학관·실레 마을 산책로를 탐방하며 소설 속 공간을 직접 걷는 문학 여행이다.',source_urls:['https://www.hyoseok.com/'],data_confidence:'high',tags:['효석문화마을','봉평','평창','강원','이효석','메밀꽃필무렵','문학체험'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00',phone:'033-330-2700'},
  {experience_id:'EX-JN-NAT-078',name:'장성 백암산 갈대 억새 투어',category_main:'문화/체험',category_sub:'자연체험',region_main:'JN',region_sub:'전라남도 장성군',address:'전라남도 장성군 북일면 약수리 백암산',lat:35.4214,lng:126.8869,price:'무료',duration:'2~3시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'전남 장성 백암산에서 10~11월 가을 갈대와 억새가 황금빛으로 물드는 장관을 감상하는 트레킹이다. 백암산 계곡과 능선을 따라 갈대·억새가 어우러지는 경관이 전남에서 손꼽히는 가을 트레킹 코스다.',source_urls:['https://www.jangseong.go.kr/'],data_confidence:'high',tags:['백암산억새','장성','전남','갈대','억새','가을단풍','트레킹'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'10~11월 시즌 (무료)',phone:'061-390-7211'},
  {experience_id:'EX-GN-NAT-075',name:'창원 북면 벚꽃 가도',category_main:'문화/체험',category_sub:'자연체험',region_main:'GN',region_sub:'경상남도 창원시',address:'경상남도 창원시 북면 화천리 벚꽃 가도',lat:35.3558,lng:128.5678,price:'무료',duration:'1시간',reservation_required:false,target_user:['커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'창원 북면 화천리 벚꽃 가도를 드라이브하는 봄 체험이다. 3~4월 벚꽃이 만개하면 도로 양쪽 벚나무가 꽃 터널을 형성해 진해 군항제보다 덜 알려진 숨은 벚꽃 명소로 꼽힌다.',source_urls:['https://www.changwon.go.kr/'],data_confidence:'high',tags:['창원북면벚꽃','창원','경남','벚꽃드라이브','숨은명소','봄','꽃터널'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'3~4월 벚꽃 시즌 (무료)',phone:'055-225-3691'},
  {experience_id:'EX-GG-NAT-068',name:'가평 청평 유원지 수상 레저',category_main:'문화/체험',category_sub:'어드벤처/레포츠',region_main:'GG',region_sub:'경기도 가평군',address:'경기도 가평군 청평면 청평리 청평호',lat:37.7703,lng:127.4867,price:'1인 20,000원~',duration:'2~3시간',reservation_required:false,target_user:['가족','청년','커플'],nearby_places:[],related_heritage_ids:[],short_description:'가평 청평호에서 수상스키·웨이크보드·카약 등 다양한 수상 레저를 즐기는 체험이다. 서울에서 1시간 30분 거리 북한강 청평호가 여름 수상 레저의 성지로 수도권 최대 레저 밀집 지역이다.',source_urls:['https://www.gapyeong.go.kr/'],data_confidence:'high',tags:['청평유원지','가평','경기','수상레저','웨이크보드','카약','여름'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'seasonal',operating_hours:'5~10월',phone:'031-585-7401'},
  {experience_id:'EX-JN-NAT-079',name:'광양 구봉산 편백 명상',category_main:'문화/체험',category_sub:'자연체험',region_main:'JN',region_sub:'전라남도 광양시',address:'전라남도 광양시 광양읍 구봉산 편백 숲',lat:34.9697,lng:127.6067,price:'무료',duration:'2~3시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'광양 구봉산에 조성된 편백 숲에서 명상과 삼림욕을 즐기는 체험이다. 광양 시내 바로 옆에 위치한 자연 치유 공간으로 피톤치드 가득한 편백 숲에서 도심 힐링 체험을 즐길 수 있다.',source_urls:['https://www.gwangyang.go.kr/'],data_confidence:'high',tags:['구봉산편백숲','광양','전남','편백','명상','피톤치드','시내근교힐링'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (무료)',phone:'061-797-2657'},
  {experience_id:'EX-GN-NAT-076',name:'고성 왕곡마을 전통 가옥',category_main:'문화/체험',category_sub:'역사 체험',region_main:'GN',region_sub:'경상남도 고성군',address:'경상남도 고성군 시천면 왕곡리',lat:34.9800,lng:128.2500,price:'무료',duration:'1~2시간',reservation_required:false,target_user:['개인','커플','가족'],nearby_places:[],related_heritage_ids:[],short_description:'조선 시대 원형이 잘 보존된 경남 고성 왕곡마을을 탐방하는 체험이다. 조선 후기 양반 가옥들이 지형에 맞게 자연스럽게 배치된 전통 마을로 낙안읍성과 함께 경상도 대표 전통 가옥 마을이다.',source_urls:['https://www.goseong.go.kr/'],data_confidence:'high',tags:['왕곡마을','고성','경남','조선가옥','전통마을','양반','원형보존'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (무료)',phone:'055-670-4161'},
  {experience_id:'EX-GW-NAT-065',name:'영월 동강 뗏목+래프팅',category_main:'문화/체험',category_sub:'어드벤처/레포츠',region_main:'GW',region_sub:'강원특별자치도 영월군',address:'강원특별자치도 영월군 동강 일원',lat:37.2097,lng:128.4653,price:'1인 20,000원~',duration:'2시간',reservation_required:true,target_user:['개인','커플','가족'],nearby_places:[],related_heritage_ids:[],short_description:'동강에서 래프팅 또는 전통 뗏목을 타고 협곡 절경을 감상하는 어드벤처 체험이다. 영월 동강은 석회암 협곡이 아름다운 강으로 S자 굽이마다 절경이 펼쳐지며 동강할미꽃 자생지이기도 하다.',source_urls:['https://www.yw.go.kr/'],data_confidence:'high',tags:['동강래프팅','영월','강원','뗏목','협곡','동강','동강할미꽃'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'seasonal',operating_hours:'4~10월',phone:'033-372-8445'},
  {experience_id:'EX-JN-NAT-080',name:'광주 사직공원 야경',category_main:'문화/체험',category_sub:'야경/야간투어',region_main:'JN',region_sub:'광주광역시 북구',address:'광주광역시 북구 사직동 사직공원',lat:35.1794,lng:126.9064,price:'무료',duration:'1시간',reservation_required:false,target_user:['커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'광주 시내 전경이 한눈에 보이는 사직공원 전망대에서 야경을 감상하는 체험이다. 광주 중심부에 위치한 공원으로 광주천·무등산 방향 야경이 아름답고 봄에는 벚꽃 명소로도 유명하다.',source_urls:['https://www.gwangju.go.kr/'],data_confidence:'high',tags:['사직공원야경','광주','광주야경','전망대','무등산','봄벚꽃','무료'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (무료, 야경: 일몰~22:00)',phone:'062-226-3434'},
  {experience_id:'EX-GG-NAT-069',name:'화성 공룡알 화석+시화호',category_main:'문화/체험',category_sub:'역사 체험',region_main:'GG',region_sub:'경기도 화성시',address:'경기도 화성시 송산면 시화호 공룡알 화석지',lat:37.1822,lng:126.7086,price:'무료',duration:'2~3시간',reservation_required:false,target_user:['가족','어린이'],nearby_places:[],related_heritage_ids:[],short_description:'천연기념물 화성 공룡알 화석 산지와 시화호 생태 공원을 함께 탐방하는 코스다. 8,000만 년 전 공룡알 화석을 직접 밟아보고 시화호 갈대밭·철새 탐조까지 역사+자연 교육 코스다.',source_urls:['https://www.hwaseong.go.kr/'],data_confidence:'high',tags:['공룡알화석','시화호','화성','경기','공룡','어린이','천연기념물'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (무료)',phone:'031-369-6003'},
  {experience_id:'EX-JN-NAT-081',name:'순천 송광사 겨울 설경',category_main:'문화/체험',category_sub:'역사 체험',region_main:'JN',region_sub:'전라남도 순천시',address:'전라남도 순천시 송광면 송광사안길 100',lat:34.9767,lng:127.2825,price:'성인 3,000원',duration:'1~2시간',reservation_required:false,target_user:['커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'한국 3대 사찰 순천 송광사에서 겨울 설경을 감상하는 특별 체험이다. 천년 고찰 경내에 눈이 쌓이면 기와지붕과 설경이 어우러지는 아름다운 겨울 사찰 풍경이 전남 최고의 겨울 명소다.',source_urls:['https://www.songgwangsa.org/'],data_confidence:'high',tags:['송광사설경','순천','전남','겨울설경','천년사찰','기와지붕','한국3대사찰'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'seasonal',operating_hours:'겨울 설경 시즌',phone:'061-755-0107'},
  {experience_id:'EX-GN-NAT-077',name:'통영 욕지도 고구마 캐기',category_main:'문화/체험',category_sub:'농촌 체험',region_main:'GN',region_sub:'경상남도 통영시',address:'경상남도 통영시 욕지면 욕지도',lat:34.6778,lng:128.3219,price:'체험 포함 배편 20,000원~',duration:'3~5시간',reservation_required:true,target_user:['가족','개인'],nearby_places:[],related_heritage_ids:[],short_description:'통영 욕지도에서 섬 특산 고구마를 직접 캐는 농촌 체험이다. 배를 타고 욕지도에 들어가 9~11월 수확 시즌에 섬 고구마를 직접 캐고 욕지도 해산물과 함께 먹는 특별한 섬 체험이다.',source_urls:['https://www.tongyeong.go.kr/'],data_confidence:'high',tags:['욕지도고구마','통영','경남','섬고구마','욕지도','농촌체험','가을'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'seasonal',operating_hours:'9~11월 수확 시즌',phone:'055-650-4681'},
  {experience_id:'EX-GW-NAT-066',name:'강릉 남항진 해변+물회',category_main:'문화/체험',category_sub:'지역 먹거리',region_main:'GW',region_sub:'강원특별자치도 강릉시',address:'강원특별자치도 강릉시 남항진동 남항진 해변',lat:37.7533,lng:128.9147,price:'물회 먹거리 별도',duration:'1~2시간',reservation_required:false,target_user:['개인','커플','가족'],nearby_places:[],related_heritage_ids:[],short_description:'강릉 남항진 해변에서 동해 물회를 즐기는 먹거리 체험이다. 강릉 커피 거리와 경포해변보다 덜 알려진 남항진 해변이 로컬들이 즐기는 진짜 동해 해변이며 신선한 물회 맛집들이 모여있다.',source_urls:['https://www.gn.go.kr/'],data_confidence:'high',tags:['남항진해변','강릉','강원','물회','동해','로컬해변','신선물회'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중',phone:'033-640-4533'}
];

const newShorts = [
  {
    experience_id:'EX-GJ-AGR-001', experience_name:'광주 무등산 수박 따기 체험', category_sub:'농촌 체험', region:'광주광역시',
    script_30s:'오늘은 광주 무등산 자락 수박 농장에 왔어요. 근데 아무도 안 알려주는 게 있어요 — 수박 익었는지 확인하는 법이 있어요. 배꼽 부분을 누르면 돼요. 단단하고 꽉 찬 느낌이 있으면 잘 익은 거예요. 너무 손 감각이 수박을 안다는 게 좋았습니다.',
    script_60s:'오늘은 광주 무등산 자락 수박 농장에서 수박 따기 체험을 했어요. 7~8월 수박 수확 시즌에 직접 수박을 따고 현장에서 먹는 체험이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 수박이 익었는지 확인하는 방법이 있어요. 수박 배꼽 부분을 손가락으로 살짝 눌러보면 돼요. 잘 익은 수박은 배꼽 주변이 약간 들어가 있고 눌렀을 때 탄탄한 느낌이 나요. 덜 익은 수박은 배꼽이 너무 단단하거나 납작해요. 그리고 줄기 가까이 있는 수박이 더 달고, 끝부분 수박이 덜 달아요. 마트에서도 이 방법을 활용할 수 있어요. 너무 손 감각이 수박의 상태를 안다는 게 좋았습니다.',
    secret_tip:'수박 익음 확인 = 배꼽 부분 누르기 — 탄탄하고 꽉 찬 느낌이 잘 익은 것. 줄기 가까이 수박이 더 달음. 마트에서도 활용 가능. 무등산 트레킹 세트 코스',
    filming_guide:'수박 배꼽 부분 누르는 손 클로즈업. 수박 밭 전체 전경. 방금 딴 수박 현장 먹기.',
    broll_ideas:['수박 배꼽 누르는 손 클로즈업','수박 밭 전체 전경','방금 딴 수박 먹기','수박 익음 단계 비교','광주 무등산 배경'],
    hooks:['수박 배꼽을 누르면 익음을 알아요','탄탄하고 꽉 찬 게 잘 익은 거예요','마트에서도 쓸 수 있는 방법이에요','줄기 가까이 수박이 더 달아요','광주 수박 따기 꿀팁'],
    thumbnails:['배꼽 누르는 손 클로즈업','수박 밭 전경','방금 딴 수박 먹기','익음 단계 비교','무등산 배경'],
    captions:{youtube:'광주 무등산 수박 따기 — 배꼽 누르면 익음 알아요 🍉\n\n탄탄하고 꽉 찬 느낌이 잘 익은 것!\n마트에서도 활용 가능\n\n📍 광주 무등산 자락 수박 농장\n🍉 7~8월 여름 수확 시즌\n\n#광주수박따기 #무등산 #광주여행 #수박익음확인 #농촌체험',instagram:'광주 무등산 수박 따기 배꼽 누르면 익음 알아요 🍉\n\n탄탄하고 꽉 찬 느낌이 잘 익은 것 ✨\n마트에서도 쓸 수 있어요\n\n📍 광주 무등산 수박 농장\n\n#광주수박따기 #무등산 #광주여행 #수박체험 #GemKorea',tiktok:'광주 수박 따기 꿀팁 🍉 배꼽 부분을 누르면 익음을 알아요! 탄탄하고 꽉 찬 느낌이 잘 익은 것 // 마트에서도 쓸 수 있는 방법 #광주수박따기 #무등산 #광주여행'},
    hashtags:{korean:['#한국여행','#광주여행','#무등산','#농촌체험','#GemKorea'],place_specific:['#광주수박따기','#수박배꼽확인','#수박익음판단','#무등산수박']}
  },
  {
    experience_id:'EX-CB-AGR-002', experience_name:'단양 마늘 수확 체험', category_sub:'농촌 체험', region:'충청북도',
    script_30s:'오늘은 단양에서 마늘을 수확했어요. 단양 마늘이 특산품이에요. 근데 아무도 안 알려주는 게 있어요 — 마늘은 잎이 반쯤 말랐을 때 캐야 해요. 완전히 말리면 마늘이 땅에서 분리되어 버려요. 그 타이밍이 비결이에요. 너무 타이밍이 수확의 과학이라는 게 좋았습니다.',
    script_60s:'오늘은 충북 단양 마늘 농장에서 마늘 수확 체험을 했어요. 6~7월 마늘 수확 시즌에 갈퀴로 직접 마늘을 캐는 체험이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 마늘 수확 타이밍의 비밀이 있어요. 마늘 잎이 반 정도 말라서 노랗게 변했을 때가 수확 적기예요. 잎이 완전히 말라서 쓰러지면 이미 늦어요. 그때는 마늘 대가 끊어져서 캐기 어렵고 마늘 상품성도 떨어져요. 반대로 잎이 너무 푸르면 아직 성숙이 덜 된 거예요. 잎 반절 노란 그 순간이 마늘 맛도 가장 좋은 때예요. 현지 농부들은 이 변화를 매일 관찰해요. 너무 타이밍이 수확의 과학이라는 게 좋았습니다.',
    secret_tip:'마늘 수확 적기 = 잎이 반절 노랗게 말랐을 때 — 완전히 말리면 늦음, 너무 푸르면 이름. 잎 반절 노랗게 = 상품성·맛 최고. 이 타이밍이 농부의 눈. 단양 도담삼봉 세트',
    filming_guide:'마늘 잎 반절 노란 상태 클로즈업. 갈퀴로 마늘 캐는 손 동작. 단양 마늘 밭 전경.',
    broll_ideas:['마늘 잎 반절 노란 클로즈업','갈퀴로 마늘 캐는 손','단양 마늘 밭 전경','마늘 잎 완전 말림 비교','단양 마늘 한 망 들기'],
    hooks:['마늘 잎 반절 노랄 때 캐야 해요','완전히 말리면 늦어요','이 타이밍이 농부의 눈이에요','마늘 맛도 이때가 최고예요','단양 마늘 수확 꿀팁'],
    thumbnails:['마늘 잎 반절 노란 클로즈업','갈퀴로 캐는 손','단양 마늘 밭','잎 상태 비교','마늘 한 망'],
    captions:{youtube:'단양 마늘 수확 — 잎 반절 노랄 때 캐야 해요 🧄\n\n완전히 말리면 늦어요!\n타이밍이 수확의 과학\n\n📍 충북 단양군 마늘 농장\n🧄 6~7월 마늘 수확 시즌\n\n#단양마늘수확 #단양 #충북여행 #마늘수확타이밍 #농촌체험',instagram:'단양 마늘 수확 잎 반절 노랄 때가 적기예요 🧄\n\n완전히 말리면 늦어요 ✨\n타이밍이 수확의 과학이에요\n\n📍 충북 단양 마늘 농장\n\n#단양마늘수확 #단양여행 #충북 #마늘 #GemKorea',tiktok:'단양 마늘 수확 꿀팁 🧄 잎이 반절 노랗게 말랐을 때 캐야 해요! 완전히 말리면 늦고 너무 푸르면 이름 // 이 타이밍이 농부의 눈이에요 #단양마늘수확 #단양여행 #충북'},
    hashtags:{korean:['#한국여행','#충북여행','#단양여행','#마늘','#GemKorea'],place_specific:['#단양마늘수확','#마늘수확타이밍','#잎반절노란적기','#농부의눈']}
  },
  {
    experience_id:'EX-JN-AGR-004', experience_name:'해남 고구마 캐기 체험', category_sub:'농촌 체험', region:'전라남도',
    script_30s:'오늘은 해남 고구마 농장에 왔어요. 전국 최대 고구마 산지예요. 근데 아무도 안 알려주는 게 있어요 — 고구마를 캘 때 줄기를 잡아당기면 안 돼요. 줄기가 끊어져요. 괭이로 옆에서 흙을 파야 해요. 그 방법이 비결이에요. 너무 방법이 이렇게 중요하다는 게 좋았습니다.',
    script_60s:'오늘은 전남 해남 고구마 농장에서 고구마 캐기 체험을 했어요. 해남은 전국 최대 고구마 생산지예요. 9~11월 수확 시즌에 직접 고구마를 캐는 체험이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 고구마 캐기 방법이 있어요. 많은 사람이 고구마 줄기를 잡고 잡아당기려 해요. 그러면 줄기만 끊어지고 고구마는 땅속에 남아요. 고구마는 줄기가 아니라 괭이나 호미로 줄기에서 30cm 이상 떨어진 곳에서 옆으로 흙을 파야 해요. 흙을 느슨하게 만들면 고구마가 자연스럽게 뽑혀요. 이 방법을 모르면 계속 줄기만 끊어져 답답해요. 너무 방법 하나가 이렇게 달라진다는 게 좋았습니다.',
    secret_tip:'고구마 캐기 = 줄기 잡아당기기 아닌 30cm 떨어진 곳에서 괭이로 옆에서 파기 — 줄기 당기면 끊어짐. 흙 느슨하게 만들면 자연스럽게 뽑힘. 해남 땅끝마을 세트',
    filming_guide:'줄기 30cm 떨어진 곳 괭이로 파는 손 클로즈업. 고구마 뽑히는 순간. 해남 고구마 밭 전경.',
    broll_ideas:['괭이로 옆에서 파는 손','고구마 뽑히는 순간','해남 고구마 밭 전경','고구마 크기 비교','즉석 군고구마 먹기'],
    hooks:['고구마 줄기 잡아당기면 안 돼요','30cm 떨어진 곳 파야 해요','흙을 느슨하게 만들면 돼요','방법이 이렇게 달라요','해남 고구마 캐기 꿀팁'],
    thumbnails:['괭이로 옆에서 파기','고구마 뽑히는 순간','해남 고구마 밭','크기 비교','즉석 군고구마'],
    captions:{youtube:'해남 고구마 캐기 — 줄기 잡아당기면 안 돼요 🍠\n\n30cm 떨어진 곳에서 옆으로 파야 해요!\n흙 느슨하게 만들면 뽑혀요\n\n📍 전남 해남군 고구마 농장\n🍠 9~11월 수확 시즌\n\n#해남고구마캐기 #해남 #전남여행 #고구마캐기방법 #농촌체험',instagram:'해남 고구마 캐기 줄기 잡아당기면 안 돼요 🍠\n\n30cm 떨어진 곳 괭이로 옆에서 파기 ✨\n흙 느슨하게 만들면 자연스럽게 뽑혀요\n\n📍 전남 해남 고구마 농장\n\n#해남고구마 #해남여행 #전남 #고구마체험 #GemKorea',tiktok:'해남 고구마 캐기 꿀팁 🍠 줄기 잡아당기면 끊어져요! 30cm 떨어진 곳에서 괭이로 옆에서 파야 해요 // 흙 느슨하게 만들면 자연스럽게 뽑혀요 #해남고구마캐기 #해남여행 #전남'},
    hashtags:{korean:['#한국여행','#전남여행','#해남여행','#고구마','#GemKorea'],place_specific:['#해남고구마캐기','#고구마캐기방법','#괭이로옆에서파기','#줄기당기면안됨']}
  },
  {
    experience_id:'EX-GG-AGR-003', experience_name:'포천 허브 농장 체험', category_sub:'농촌 체험', region:'경기도',
    script_30s:'오늘은 포천 허브 농장에 왔어요. 라벤더·로즈마리·민트가 있어요. 근데 아무도 안 알려주는 게 있어요 — 허브를 수확할 때 잎이 아니라 줄기째 잘라야 해요. 그래야 다시 자라요. 잎만 따면 식물이 스트레스를 받아요. 너무 자르는 방법이 식물의 미래라는 게 좋았습니다.',
    script_60s:'오늘은 경기도 포천 허브아일랜드 농장에서 라벤더·로즈마리·민트 허브를 수확하고 아로마 오일·허브차를 만드는 체험을 했어요. 근데 아무도 안 알려주는 꿀팁 하나 — 허브를 제대로 수확하는 방법이 있어요. 허브 잎을 하나씩 뜯으면 안 돼요. 줄기째 잘라야 해요. 줄기를 잘라내면 그 부위 아래에서 새로운 가지가 두 개 자라요. 이렇게 하면 허브가 오히려 더 풍성해져요. 잎만 뜯으면 식물이 스트레스를 받고 성장이 저해돼요. 로즈마리·민트·라벤더 모두 이 방법이 적용돼요. 그리고 꽃이 피기 직전이 향이 가장 진한 시기예요. 그때 수확하면 아로마 효과가 배가 돼요. 너무 자르는 방법이 식물의 미래를 결정한다는 게 좋았습니다.',
    secret_tip:'허브 수확 = 잎 뜯기 아닌 줄기째 자르기 — 자르면 두 가지 재생. 잎만 뜯으면 식물 스트레스. 꽃 피기 직전이 향 가장 진함. 포천 야경+허브 낮+밤 이중 체험',
    filming_guide:'허브 줄기째 자르는 올바른 방법 클로즈업. 꽃 피기 직전 허브 향 맡는 표정. 포천 허브 정원 전경.',
    broll_ideas:['줄기째 자르는 올바른 방법','꽃 직전 허브 향 맡기','포천 허브 정원 전경','아로마 오일 만들기','허브차 시음'],
    hooks:['허브는 줄기째 자르야 해요','잎만 뜯으면 식물 스트레스예요','자르면 두 가지 재생돼요','꽃 피기 직전이 향이 진해요','포천 허브 체험 꿀팁'],
    thumbnails:['줄기째 자르기 올바른 방법','꽃 직전 향 맡기','허브 정원 전경','아로마 오일','허브차 시음'],
    captions:{youtube:'포천 허브 농장 체험 — 줄기째 자르야 해요 🌿\n\n잎만 뜯으면 식물 스트레스!\n줄기 자르면 두 가지 재생\n\n📍 경기도 포천시 허브아일랜드\n🌿 꽃 피기 직전이 향 가장 진함\n\n#포천허브체험 #포천허브아일랜드 #포천 #경기여행 #허브수확방법',instagram:'포천 허브 농장 줄기째 자르야 해요 🌿\n\n잎만 뜯으면 식물 스트레스 줄기 자르면 두 가지 재생 ✨\n꽃 피기 직전이 향 가장 진해요\n\n📍 경기 포천 허브아일랜드\n\n#포천허브 #포천여행 #경기 #허브체험 #GemKorea',tiktok:'포천 허브 체험 꿀팁 🌿 허브는 줄기째 잘라야 해요! 잎만 뜯으면 식물 스트레스 // 줄기 자르면 두 가지 재생돼서 오히려 풍성해짐 #포천허브 #포천여행 #경기'},
    hashtags:{korean:['#한국여행','#경기여행','#포천여행','#허브체험','#GemKorea'],place_specific:['#포천허브아일랜드','#허브줄기자르기','#잎뜯으면스트레스','#꽃직전향진함']}
  },
  {
    experience_id:'EX-GW-AGR-002', experience_name:'양평 블루베리 따기 체험', category_sub:'농촌 체험', region:'경기도',
    script_30s:'오늘은 양평 블루베리 농장에 왔어요. 근데 아무도 안 알려주는 게 있어요 — 블루베리는 완전 파랗기 전에 먹으면 떫어요. 완전 파란+약간 분홍빛 없어진 게 완숙이에요. 그 색 판단이 비결이에요. 너무 색이 이렇게 맛을 말해준다는 게 좋았습니다.',
    script_60s:'오늘은 경기도 양평 블루베리 농장에서 블루베리 따기 체험을 했어요. 6~8월 여름 수확 시즌에 직접 따서 먹는 체험이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 블루베리 숙성 판단법이 있어요. 블루베리가 파랗게 보여도 덜 익은 경우가 많아요. 완전히 익은 블루베리는 표면이 완전히 파란 색이면서 은빛 분가루 같은 것이 표면에 있어요. 이걸 블룸이라고 해요. 블룸이 있으면 신선하고 완숙된 상태예요. 반대로 아직 붉은 기가 조금이라도 남아있으면 아직 덜 익은 거예요. 그런 것을 따면 신 맛이 강해요. 이 색 차이만 알면 달고 신선한 블루베리만 골라 딸 수 있어요. 너무 색이 이렇게 맛을 말해준다는 게 좋았습니다.',
    secret_tip:'블루베리 완숙 판단 = 완전 파란+은빛 블룸(분가루) 있음 — 붉은 기 남은 것은 덜 익음. 블룸 있는 것이 신선하고 달음. 이 차이 알면 달고 신선한 것만 골라 딸 수 있음',
    filming_guide:'블룸 있는 블루베리 vs 없는 것 비교 클로즈업. 완숙 블루베리 입에 넣는 순간. 양평 블루베리 밭 전경.',
    broll_ideas:['블룸 있는 블루베리 비교 클로즈업','완숙 블루베리 먹기','양평 블루베리 밭 전경','바구니 가득 블루베리','블루베리 잼 만들기'],
    hooks:['블루베리 블룸이 뭔지 알아요?','은빛 분가루가 완숙 신선 신호예요','붉은 기 남으면 덜 익은 거예요','이걸 알면 달고 신선한 것만 따요','양평 블루베리 따기 꿀팁'],
    thumbnails:['블룸 있는 블루베리 비교','완숙 블루베리 먹기','양평 밭 전경','바구니 가득','블루베리 잼'],
    captions:{youtube:'양평 블루베리 따기 — 블룸이 완숙 신호예요 🫐\n\n은빛 분가루 블룸이 있으면 달고 신선!\n붉은 기 남으면 덜 익은 거예요\n\n📍 경기도 양평군 블루베리 농장\n🫐 6~8월 여름 수확 시즌\n\n#양평블루베리따기 #양평 #경기여행 #블루베리블룸 #농촌체험',instagram:'양평 블루베리 따기 블룸이 완숙 신호예요 🫐\n\n은빛 분가루 있으면 달고 신선 ✨\n붉은 기 남으면 덜 익은 것\n\n📍 경기 양평 블루베리 농장\n\n#양평블루베리 #양평여행 #경기 #블루베리 #GemKorea',tiktok:'양평 블루베리 꿀팁 🫐 블룸(은빛 분가루)이 있는 게 완숙이에요! 붉은 기 남으면 덜 익음 // 이걸 알면 달고 신선한 블루베리만 골라 딸 수 있어요 #양평블루베리 #양평여행 #경기'},
    hashtags:{korean:['#한국여행','#경기여행','#양평여행','#블루베리','#GemKorea'],place_specific:['#양평블루베리따기','#블루베리블룸완숙','#은빛분가루신선','#붉은기덜익음']}
  },
  {
    experience_id:'EX-GG-AGR-004', experience_name:'강화도 인삼 캐기 체험', category_sub:'농촌 체험', region:'인천광역시',
    script_30s:'오늘은 강화도 인삼 농장에 왔어요. 근데 아무도 안 알려주는 게 있어요 — 강화 인삼이 강하게 쓴 이유가 있어요. 강화 갯벌 미네랄이 인삼에 흡수돼요. 그게 더 강한 약성이에요. 너무 땅이 약을 만든다는 게 좋았습니다.',
    script_60s:'오늘은 인천 강화도 인삼 농장에서 9~10월 인삼 수확 체험을 했어요. 강화 인삼은 전국 인삼 중에서도 약성이 강한 것으로 유명해요. 직접 캐서 수삼 주스를 마시는 체험이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 강화 인삼이 다른 지역 인삼보다 더 강하게 쓴 이유가 있어요. 강화도는 서해 갯벌로 둘러싸인 섬이에요. 그 갯벌의 미네랄·유기물이 강화도 토양에 풍부하게 스며있어요. 인삼이 이 미네랄을 흡수하면서 사포닌 함량이 높아져요. 사포닌이 인삼 약효의 핵심 성분이에요. 그래서 강화 인삼이 더 쓰고 약성이 강한 거예요. 쓴맛이 강할수록 좋은 인삼이에요. 너무 땅이 약을 만든다는 게 좋았습니다.',
    secret_tip:'강화 인삼 더 쓴 이유 = 갯벌 미네랄이 사포닌 함량 높임 — 쓴맛 강할수록 좋은 인삼. 이 사실 알면 강화 인삼 가격 이해됨. 9~10월 수확 시즌. 마니산 세트',
    filming_guide:'강화 인삼 캐기 흙 파는 손. 인삼 뿌리 모양 클로즈업. 수삼 주스 즉석 시음.',
    broll_ideas:['인삼 캐기 흙 파는 손','인삼 뿌리 모양 클로즈업','수삼 주스 즉석 시음','강화 인삼 밭 전경','갯벌 미네랄 설명'],
    hooks:['강화 인삼이 더 쓴 이유 알아요?','갯벌 미네랄이 사포닌을 높여요','쓴맛 강할수록 좋은 인삼이에요','땅이 약을 만든다는 게 신기해요','강화 인삼 캐기 꿀팁'],
    thumbnails:['인삼 캐기 흙 파기','인삼 뿌리 클로즈업','수삼 주스 시음','강화 인삼 밭','갯벌 미네랄 설명'],
    captions:{youtube:'강화도 인삼 캐기 — 갯벌 미네랄이 인삼을 강하게 해요 🌱\n\n쓴맛 강할수록 좋은 인삼!\n땅이 약을 만드는 원리\n\n📍 인천 강화군 인삼 농장\n🌱 9~10월 수확 시즌\n\n#강화인삼캐기 #강화도 #인천여행 #인삼사포닌 #농촌체험',instagram:'강화도 인삼 더 쓴 이유가 갯벌 미네랄이에요 🌱\n\n사포닌 함량 높아서 쓴맛 강함 ✨\n쓴맛 강할수록 좋은 인삼이에요\n\n📍 인천 강화도 인삼 농장\n\n#강화인삼캐기 #강화도 #인천여행 #인삼 #GemKorea',tiktok:'강화도 인삼 꿀팁 🌱 갯벌 미네랄이 사포닌 함량 높여서 더 쓰고 약성 강해요! 쓴맛 강할수록 좋은 인삼 // 땅이 약을 만드는 원리 #강화인삼캐기 #강화도 #인천여행'},
    hashtags:{korean:['#한국여행','#인천여행','#강화도여행','#인삼','#GemKorea'],place_specific:['#강화인삼캐기','#갯벌미네랄인삼','#인삼사포닌','#쓴맛강한좋은인삼']}
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
