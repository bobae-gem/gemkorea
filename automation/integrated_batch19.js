const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const now = new Date().toISOString().slice(0,19);

const newExps = [
  {experience_id:'EX-GN-NAT-023',name:'진주 남강 유람선+촉석루 투어',category_main:'문화/체험',category_sub:'역사 체험',region_main:'GN',region_sub:'경상남도 진주시',address:'경상남도 진주시 남강변 선착장',lat:35.1894,lng:128.1058,price:'유람선 성인 8,000원~',duration:'1~2시간',reservation_required:false,target_user:['커플','개인','가족'],nearby_places:[],related_heritage_ids:[],short_description:'남강을 유람선으로 오가며 논개의 역사가 깃든 촉석루와 진주성을 감상하는 체험이다. 유등축제 기간에는 수천 개 등불이 강에 떠있는 장관을 뱃길로 감상할 수 있다.',source_urls:['https://www.jinju.go.kr/'],data_confidence:'high',tags:['진주유람선','촉석루','진주','경남','남강','논개','유등축제'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~20:00',phone:'055-749-2696'},
  {experience_id:'EX-JN-NAT-025',name:'장성 홍길동테마파크',category_main:'문화/체험',category_sub:'어린이 체험',region_main:'JN',region_sub:'전라남도 장성군',address:'전라남도 장성군 황룡면 홍길동로 431',lat:35.3639,lng:126.7831,price:'성인 5,000원',duration:'2~3시간',reservation_required:false,target_user:['가족','어린이'],nearby_places:[],related_heritage_ids:[],short_description:'의적 홍길동의 고향 장성에 조성된 테마파크다. 홍길동 소설 배경과 전통 무예 체험·활쏘기·전통 의상 착용을 즐기며 조선 시대 서민 의적 문화를 어린이들이 재미있게 체험한다.',source_urls:['https://www.jangseong.go.kr/'],data_confidence:'high',tags:['홍길동테마파크','장성','전남','홍길동','의적','어린이체험','전통무예'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00 (월요일 휴관)',phone:'061-394-7242'},
  {experience_id:'EX-GW-NAT-024',name:'속초 청초호 수상 레저 투어',category_main:'문화/체험',category_sub:'어드벤처/레포츠',region_main:'GW',region_sub:'강원특별자치도 속초시',address:'강원특별자치도 속초시 청초호 선착장',lat:38.2022,lng:128.5872,price:'1인 15,000원~',duration:'1시간',reservation_required:false,target_user:['가족','개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'속초 청초호에서 수상 자전거·모터보트·카약 등 수상 레저를 즐기는 체험이다. 설악산과 속초 시내가 보이는 청초호에서 여름철 피서와 레저를 한 번에 즐길 수 있는 코스다.',source_urls:['https://www.sokcho.go.kr/'],data_confidence:'high',tags:['청초호','속초','강원','수상레저','모터보트','카약','여름'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'seasonal',operating_hours:'5~10월',phone:'033-639-2690'},
  {experience_id:'EX-GG-NAT-027',name:'광주(경기) 남한산성 전통 먹거리',category_main:'문화/체험',category_sub:'지역 먹거리',region_main:'GG',region_sub:'경기도 광주시',address:'경기도 광주시 남한산성면 남한산성로 784',lat:37.4803,lng:127.1754,price:'먹거리 별도',duration:'1~2시간',reservation_required:false,target_user:['개인','가족','커플'],nearby_places:[],related_heritage_ids:[],short_description:'남한산성 산성마을에서 두부전골·도토리묵·산채 비빔밥 등 전통 먹거리를 즐기는 체험이다. 유네스코 세계유산 탐방 후 산성 마을 음식점에서 먹는 두부전골이 등산 마무리 코스로 인기다.',source_urls:['https://www.namhansansung.or.kr/'],data_confidence:'high',tags:['남한산성먹거리','광주','경기','두부전골','도토리묵','산채비빔밥','등산후'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'10:00~20:00',phone:'031-743-6610'},
  {experience_id:'EX-JB-NAT-008',name:'고창 청보리밭 봄 투어',category_main:'문화/체험',category_sub:'자연체험',region_main:'JB',region_sub:'전라북도 고창군',address:'전라북도 고창군 공음면 학원농장 청보리밭',lat:35.3797,lng:126.5992,price:'무료 (주차 별도)',duration:'1~2시간',reservation_required:false,target_user:['커플','개인','가족'],nearby_places:[],related_heritage_ids:[],short_description:'매년 4~5월 전북 고창 학원농장 청보리밭이 초록 물결로 가득 차는 봄 풍경을 감상하는 체험이다. 30만 평 청보리밭 사이를 걷는 코스가 전북 봄 최고 명소로 꼽힌다.',source_urls:['https://www.gochang.go.kr/'],data_confidence:'high',tags:['고창청보리','고창','전북','청보리밭','봄여행','학원농장','초록물결'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'4~5월 청보리 시즌',phone:'063-560-2979'},
  {experience_id:'EX-GW-NAT-025',name:'강원 평창 대관령 삼양목장 체험',category_main:'문화/체험',category_sub:'농촌 체험',region_main:'GW',region_sub:'강원특별자치도 평창군',address:'강원특별자치도 평창군 대관령면 꽃밭양지길 708-9',lat:37.6731,lng:128.7128,price:'성인 12,000원',duration:'2~3시간',reservation_required:false,target_user:['가족','커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'해발 1,000m 대관령 삼양목장에서 소·양·말 먹이 주기와 양 몰이 체험을 즐기는 목장 체험이다. 광활한 초원 위에서 동물 체험과 함께 드라마·CF 촬영지 초원 뷰를 감상할 수 있다.',source_urls:['https://www.samyangfarm.co.kr/'],data_confidence:'high',tags:['삼양목장','평창','대관령','강원','양몰이','목장체험','초원'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'08:30~17:30',phone:'033-335-5044'},
  {experience_id:'EX-JN-NAT-026',name:'곡성 기차마을 섬진강 드레지나',category_main:'문화/체험',category_sub:'어드벤처/레포츠',region_main:'JN',region_sub:'전라남도 곡성군',address:'전라남도 곡성군 오곡면 기차마을로 232',lat:35.2783,lng:127.2878,price:'레일바이크 2인 15,000원~',duration:'1~2시간',reservation_required:true,target_user:['가족','커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'섬진강 변 기찻길을 레일바이크로 달리고 증기기관차를 타는 체험이다. 드라마·CF 촬영지로 유명한 섬진강변 봄 벚꽃 시즌에 레일바이크를 타면 꽃과 강의 완벽한 조합을 즐길 수 있다.',source_urls:['https://www.gstrain.co.kr/'],data_confidence:'high',tags:['곡성기차마을','곡성','전남','레일바이크','섬진강','드라마촬영지','봄'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~17:00',phone:'061-363-9900'},
  {experience_id:'EX-GG-NAT-028',name:'의왕 레일파크 왕송호수',category_main:'문화/체험',category_sub:'자연체험',region_main:'GG',region_sub:'경기도 의왕시',address:'경기도 의왕시 철도박물관로 142 (왕송호수)',lat:37.3431,lng:126.9692,price:'성인 8,000원~',duration:'2~3시간',reservation_required:false,target_user:['가족','커플','어린이'],nearby_places:[],related_heritage_ids:[],short_description:'경기도 의왕 왕송호수에서 레일바이크와 수변 산책을 즐기는 체험이다. 철도박물관과 연계해 기차·레일바이크·호수가 어우러지는 수도권 근교 가족 나들이 코스다.',source_urls:['https://www.uiwang.go.kr/'],data_confidence:'high',tags:['의왕레일파크','의왕','경기','왕송호수','레일바이크','철도박물관','가족'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'10:00~18:00',phone:'031-458-5765'},
  {experience_id:'EX-JJ-NAT-008',name:'제주 승마 공원 해변 승마',category_main:'문화/체험',category_sub:'승마/레포츠',region_main:'JJ',region_sub:'제주특별자치도 제주시',address:'제주특별자치도 제주시 애월읍 해안도로 일원',lat:33.4556,lng:126.3108,price:'1인 30,000원~',duration:'1시간',reservation_required:true,target_user:['커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'제주 애월 해안도로에서 한라산과 에메랄드 바다를 배경으로 말을 타는 해변 승마 체험이다. 제주 바다를 바라보며 말을 타는 경험이 제주 승마 중 가장 아름다운 코스로 꼽힌다.',source_urls:['https://www.visitjeju.net/'],data_confidence:'high',tags:['제주해변승마','애월','제주','해변','한라산','에메랄드바다','커플'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~17:00',phone:'064-799-0003'},
  {experience_id:'EX-GG-NAT-029',name:'서울 한강 자전거+피크닉',category_main:'문화/체험',category_sub:'어드벤처/레포츠',region_main:'GG',region_sub:'서울특별시 마포구',address:'서울특별시 마포구 여의도 한강공원',lat:37.5283,lng:126.9315,price:'자전거 대여 1시간 3,000원',duration:'3~4시간',reservation_required:false,target_user:['커플','가족','개인'],nearby_places:[],related_heritage_ids:[],short_description:'한강 자전거길과 피크닉을 결합한 서울 도심 여행 체험이다. 여의도~반포~한남 구간을 자전거로 달리고 공원 잔디에서 피크닉을 즐기는 서울 시민과 여행자 모두에게 인기 있는 코스다.',source_urls:['https://hangang.seoul.go.kr/'],data_confidence:'high',tags:['한강자전거','서울','여의도','피크닉','반포','한강공원','힐링'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'자전거 대여 06:00~22:00',phone:'02-3780-0570'},
  {experience_id:'EX-CB-NAT-006',name:'제천 의림지+청풍호 유람선',category_main:'문화/체험',category_sub:'자연체험',region_main:'CB',region_sub:'충청북도 제천시',address:'충청북도 제천시 청풍면 청풍호로 1457',lat:37.0267,lng:128.1844,price:'유람선 성인 13,000원~',duration:'1~2시간',reservation_required:false,target_user:['가족','커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'충주호 상류 청풍호를 유람선으로 탐방하는 체험이다. 한국의 장가계라 불리는 청풍호 단애 절벽과 능강계곡이 어우러지는 절경을 뱃길로 감상하는 충북 대표 레저 코스다.',source_urls:['https://www.jecheon.go.kr/'],data_confidence:'high',tags:['청풍호유람선','제천','충북','청풍호','단애절벽','능강계곡','유람선'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~17:00',phone:'043-647-6979'},
  {experience_id:'EX-GW-NAT-026',name:'강릉 오죽헌+경포대 역사 코스',category_main:'문화/체험',category_sub:'역사 체험',region_main:'GW',region_sub:'강원특별자치도 강릉시',address:'강원특별자치도 강릉시 율곡로3139번길 24',lat:37.7704,lng:128.8978,price:'오죽헌 성인 3,000원',duration:'2~3시간',reservation_required:false,target_user:['가족','개인','외국인'],nearby_places:[],related_heritage_ids:[],short_description:'5000원권 신사임당과 5000원권 율곡 이이가 태어난 오죽헌과 관동팔경 경포대를 함께 탐방하는 강릉 역사 코스다. 조선 시대 예술·학문의 성지를 걸으며 강릉 역사를 이해한다.',source_urls:['https://ojukheon.or.kr/'],data_confidence:'high',tags:['오죽헌','경포대','강릉','신사임당','율곡이이','관동팔경','5000원'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00',phone:'033-660-3301'}
];

const newShorts = [
  {
    experience_id:'EX-GW-FSH-001', experience_name:'인제 빙어낚시 체험', category_sub:'낚시/어촌 체험', region:'강원도',
    script_30s:'오늘은 인제에서 빙어낚시를 했어요. 꽁꽁 얼어붙은 강 위에서요. 근데 아무도 안 알려주는 게 있어요 — 빙어는 낮보다 이른 아침에 잘 잡혀요. 해 뜨기 전 수온이 낮을 때 활동이 많아요. 그 타이밍이 핵심이에요. 너무 물고기도 이른 아침이 다르다는 게 좋았습니다.',
    script_60s:'오늘은 강원도 인제 소양강 상류에서 빙어낚시 체험을 했어요. 꽁꽁 언 강 위에 구멍을 뚫고 낚싯줄을 드리우는 겨울 낚시예요. 근데 아무도 안 알려주는 꿀팁 하나 — 빙어낚시는 타이밍이 중요해요. 빙어는 수온이 낮을수록 활동이 활발해요. 오전 8~10시 이전 해가 뜨기 전이 수온이 가장 낮아서 빙어가 가장 잘 잡혀요. 해가 뜨면 얼음 아래 수온이 조금씩 올라가면서 빙어 활동이 줄어요. 그래서 빙어낚시는 이른 아침에 시작해야 해요. 낚시 선생님들이 새벽부터 나오는 이유예요. 잡은 빙어를 즉석에서 튀겨 먹으면 고소하고 바삭해요. 너무 추운 날씨에서 낚시하는 그 경험이 겨울 여행의 진수라서 좋았습니다.',
    secret_tip:'이른 아침 8~10시 전 = 수온 낮아 빙어 활동 최다. 해 뜨면 활동 줄어 조황 나빠짐. 새벽부터 시작이 핵심. 잡은 빙어 즉석 튀김이 하이라이트. 화천 산천어축제 세트 코스',
    filming_guide:'얼음 구멍 낚싯줄 드리우는 클로즈업. 빙어 잡히는 순간 감어올리기. 즉석 빙어 튀김 먹는 장면.',
    broll_ideas:['얼음 구멍 낚싯줄 드리우기','빙어 잡히는 감어올리기','즉석 빙어 튀김 먹기','설원 위 빙어낚시 전경','빙어 바구니 가득'],
    hooks:['빙어낚시 이른 아침이 핵심이에요','해 뜨기 전 수온이 낮아야 잡혀요','이 타이밍 알면 빙어 잘 잡아요','즉석 빙어 튀김이 하이라이트','인제 빙어낚시 꿀팁'],
    thumbnails:['얼음 구멍 낚싯줄','빙어 감어올리기','즉석 튀김 먹기','설원 빙어낚시 전경','빙어 바구니'],
    captions:{youtube:'인제 빙어낚시 — 이른 아침이 핵심이에요 🎣\n\n해 뜨기 전 수온 낮을 때 빙어 최다!\n즉석 빙어 튀김이 하이라이트\n\n📍 강원도 인제군 소양강 빙어낚시\n🎣 1~2월 / 이른 아침 8~10시 전 타이밍\n\n#인제빙어낚시 #인제 #강원도여행 #빙어 #겨울낚시',instagram:'인제 빙어낚시 이른 아침이 핵심이에요 🎣\n\n해 뜨기 전 수온 낮을 때 빙어 잘 잡혀요 ✨\n즉석 튀김까지 하이라이트\n\n📍 강원 인제 빙어낚시\n\n#인제빙어낚시 #인제여행 #강원도 #빙어 #GemKorea',tiktok:'인제 빙어낚시 꿀팁 🎣 이른 아침 8~10시 전이 핵심이에요! 해 뜨기 전 수온 낮을 때 빙어 활동 최다 // 즉석 빙어 튀김 고소하고 바삭 #인제빙어낚시 #인제여행 #강원도'},
    hashtags:{korean:['#한국여행','#강원도여행','#인제여행','#겨울낚시','#GemKorea'],place_specific:['#인제빙어낚시','#빙어이른아침','#즉석빙어튀김','#겨울여행강원']}
  },
  {
    experience_id:'EX-GW-FSH-002', experience_name:'화천 산천어축제 얼음낚시', category_sub:'낚시/어촌 체험', region:'강원도',
    script_30s:'오늘은 화천 산천어 축제에 왔어요. CNN 세계 7대 불가사의 겨울 축제예요. 근데 아무도 안 알려주는 게 있어요 — 맨손으로 산천어 잡기 코너가 있어요. 얼음 아래 차가운 물에 맨손을 넣어 잡는 거예요. 그 순간 손이 마비될 것 같아요. 너무 손 감각이 사라지는 체험이라서 좋았습니다.',
    script_60s:'오늘은 강원도 화천 산천어 축제에 왔어요. CNN이 세계 7대 불가사의 겨울 축제로 선정한 곳이에요. 매년 1월 화천천 결빙 구간에서 산천어 낚시와 맨손 잡기를 즐기는 축제예요. 근데 아무도 안 알려주는 꿀팁 하나 — 산천어 맨손 잡기 코너가 있는데 이게 진짜 스릴이에요. 얼음 위에 설치된 수조에 산천어를 풀어놓고 맨손으로 잡는 건데, 물 온도가 거의 0도에 가까워요. 손을 물에 넣는 순간 극도의 차가움이 와서 1~2분이면 손이 마비될 것 같아요. 그 상태에서 미끄러운 산천어를 잡으려면 집중력이 필요해요. 성인도 못 잡는 경우가 많아요. 그 순간이 축제 최고 스릴이에요. 잡으면 즉석에서 구워 먹을 수 있어요. 너무 손 감각이 사라지는 극한 체험이라서 좋았습니다.',
    secret_tip:'산천어 맨손 잡기 코너 = 0도 물에 맨손. 1~2분이면 손 마비 직전. 미끄러운 산천어 잡기 극한 집중력. 잡으면 즉석 구이. 얼음 낚시 타이밍은 오전 이른 시간 추천',
    filming_guide:'맨손 잡기 0도 물에 손 넣는 표정 클로즈업. 산천어 잡는 순간 환호. CNN 선정 세계 축제 현장 광각.',
    broll_ideas:['맨손 잡기 물에 손 넣는 표정','산천어 잡는 순간 환호','CNN 세계 축제 현장 광각','얼음 위 낚시 전경','즉석 산천어 구이'],
    hooks:['맨손 잡기 코너가 진짜 스릴이에요','0도 물에 손 넣으면 마비될 것 같아요','산천어 잡는 극한 집중력','CNN 세계 7대 겨울 축제 왔어요','화천 산천어 꿀팁'],
    thumbnails:['맨손 잡기 물에 손 넣기','산천어 잡는 환호','CNN 세계 축제 현장','얼음 낚시 전경','즉석 산천어 구이'],
    captions:{youtube:'화천 산천어 축제 — 맨손 잡기가 진짜 스릴이에요 🐟\n\n0도 물에 손 넣으면 1분이면 마비 직전!\nCNN 세계 7대 불가사의 겨울 축제\n\n📍 강원도 화천군 화천천 산천어 축제\n🐟 매년 1월 / 맨손 잡기 코너 필수\n\n#화천산천어축제 #화천 #강원도여행 #산천어 #겨울축제',instagram:'화천 산천어 맨손 잡기가 진짜 스릴이에요 🐟\n\n0도 물에 손 넣으면 마비 직전 그 상태에서 잡기 ✨\nCNN 세계 7대 겨울 축제\n\n📍 강원 화천 산천어 축제\n\n#화천산천어축제 #화천여행 #강원도 #산천어 #GemKorea',tiktok:'화천 산천어 꿀팁 🐟 맨손 잡기 코너에서 0도 물에 손 넣어야 해요! 1~2분이면 손이 마비될 것 같아요 // CNN 세계 7대 겨울 축제 화천 산천어 #화천산천어 #화천여행 #강원도'},
    hashtags:{korean:['#한국여행','#강원도여행','#화천여행','#산천어','#GemKorea'],place_specific:['#화천산천어축제','#맨손잡기','#CNN세계7대겨울축제','#0도물잡기']}
  },
  {
    experience_id:'EX-GW-WAT-002', experience_name:'춘천 수상스키·웨이크보드', category_sub:'해양 레포츠', region:'강원도',
    script_30s:'오늘은 춘천 소양강에서 수상스키를 탔어요. 호수 위를 달리는 거예요. 근데 아무도 안 알려주는 게 있어요 — 수상스키 처음 탈 때 팔이 아니라 다리로 버텨야 해요. 팔로 잡아당기면 바로 넘어져요. 그 감각이 서핑이랑 달라요. 너무 신체 다른 부분을 써야 하는 게 신기해서 좋았습니다.',
    script_60s:'오늘은 강원도 춘천 소양강 의암호에서 수상스키 체험을 했어요. 보트가 당기면 물 위에 서서 달리는 레저예요. 근데 아무도 안 알려주는 꿀팁 하나 — 수상스키 초보가 가장 많이 하는 실수가 팔로 당기는 거예요. 보트가 출발하면 스키를 신은 채 앉은 상태에서 팔이 팽팽해지는 걸 느끼는데, 그때 팔을 당기거나 버티려고 하면 바로 넘어져요. 수상스키는 팔이 아니라 다리로 버텨야 해요. 쭈그린 자세를 유지하면서 다리 힘으로 서서히 일어나야 해요. 팔은 그냥 밧줄을 잡고만 있으면 돼요. 이 감각을 교관이 알려줄 때 집중하면 첫 번째 시도에 성공할 수 있어요. 너무 다리 힘이 이렇게 중요할 줄 몰랐어서 좋았습니다.',
    secret_tip:'수상스키 핵심 = 다리로 버티기, 팔로 당기지 않기 — 쭈그린 자세 유지하면서 다리 힘으로 서서히 일어나기. 팔은 밧줄 잡기만. 교관 지도 집중이 성공 핵심. 춘천 닭갈비 세트',
    filming_guide:'수상스키 처음 서는 순간 슬로우. 보트 뒤 물보라와 스키어 전경. 넘어지는 장면 (유머).',
    broll_ideas:['수상스키 처음 서는 순간 슬로우','보트 뒤 물보라와 스키어 전경','넘어지는 장면 유머','의암호 배경 수상스키','교관 자세 지도 장면'],
    hooks:['수상스키 팔이 아니라 다리예요','팔로 당기면 바로 넘어져요','다리 힘으로 서서히 일어나야 해요','첫 시도 성공 비결 알려드려요','춘천 수상스키 꿀팁'],
    thumbnails:['처음 서는 순간 슬로우','물보라와 스키어 전경','넘어지는 유머','의암호 수상스키','교관 지도'],
    captions:{youtube:'춘천 수상스키 — 팔이 아니라 다리예요 🎿\n\n팔로 당기면 바로 넘어져요!\n다리 힘으로 서서히 일어나기가 핵심\n\n📍 강원도 춘천시 의암호 수상스키\n🎿 5~10월 / 교관 지도 집중이 성공 핵심\n\n#춘천수상스키 #춘천 #강원도여행 #수상스키 #의암호',instagram:'춘천 수상스키 팔이 아니라 다리예요 🎿\n\n팔로 당기면 바로 넘어져요 ✨\n다리 힘 집중이 핵심\n\n📍 강원 춘천 의암호\n\n#춘천수상스키 #춘천여행 #강원도 #수상스키 #GemKorea',tiktok:'춘천 수상스키 꿀팁 🎿 팔로 당기면 바로 넘어져요! 다리로 버텨야 해요 // 쭈그린 자세 유지하면서 다리 힘으로 서서히 일어나기 #춘천수상스키 #춘천여행 #강원도'},
    hashtags:{korean:['#한국여행','#강원도여행','#춘천여행','#수상스키','#GemKorea'],place_specific:['#춘천수상스키','#의암호수상스키','#수상스키다리힘','#팔당기지마']}
  },
  {
    experience_id:'EX-GN-CAB-001', experience_name:'통영 한려수도 케이블카', category_sub:'어드벤처/레포츠', region:'경상남도',
    script_30s:'오늘은 통영 한려수도 케이블카를 탔어요. 140개 섬이 보여요. 근데 아무도 안 알려주는 게 있어요 — 내려올 때 탑승 방향이 달라요. 올라갈 때 보지 못한 반대쪽 섬들이 보여요. 그래서 올라갈 때와 내려올 때 뷰가 완전히 달라요. 너무 다른 방향이 새로운 세계라서 좋았습니다.',
    script_60s:'오늘은 경남 통영 미륵산 한려수도 케이블카를 탔어요. 해발 461m까지 올라가면 한려해상국립공원의 140여 개 섬과 다도해가 파노라마로 펼쳐지는 경남 최고 절경 포인트예요. 근데 아무도 안 알려주는 꿀팁 하나 — 케이블카 탈 때 방향을 신경 써야 해요. 올라갈 때와 내려올 때 케이블카가 반대 방향으로 가거든요. 올라갈 때 오른쪽에 앉으면 내려올 때 왼쪽에 앉아야 항상 최고 뷰를 볼 수 있어요. 양쪽 뷰가 다른 풍경이에요. 대부분 같은 쪽만 보는데 내려올 때 반대편으로 가면 올라갈 때 못 봤던 섬들이 보여요. 맑은 날에는 대마도까지 보인대요. 너무 반대편이 새로운 세계라서 좋았습니다.',
    secret_tip:'케이블카 올라갈 때/내려올 때 반대편 뷰 — 올라갈 때 못 본 섬들을 내려올 때 반대편 창에서 관찰. 맑은 날 대마도까지 조망. 일몰 시간 탑승이 가장 아름다움',
    filming_guide:'케이블카에서 140개 섬 파노라마 광각. 맑은 날 대마도 방향 망원 촬영. 일몰 시간 탑승 황금빛 다도해.',
    broll_ideas:['140개 섬 파노라마 광각','대마도 방향 망원','일몰 황금빛 다도해','케이블카 탑승 장면','미륵산 정상 통영 조망'],
    hooks:['올라갈 때 내려올 때 뷰가 달라요','반대편 창 보면 새로운 섬들 나와요','맑은 날 대마도까지 보여요','일몰 시간 케이블카가 최고예요','통영 케이블카 꿀팁'],
    thumbnails:['140개 섬 파노라마','대마도 방향 망원','일몰 황금 다도해','케이블카 탑승','미륵산 정상'],
    captions:{youtube:'통영 한려수도 케이블카 — 올라갈 때 내려올 때 뷰가 달라요 🚡\n\n반대편 창 보면 새로운 섬들!\n맑은 날 대마도까지 조망\n\n📍 경남 통영시 미륵산 한려수도 케이블카\n🚡 일몰 시간 탑승이 가장 아름다움\n\n#통영케이블카 #통영 #경남여행 #한려수도 #다도해',instagram:'통영 한려수도 케이블카 올라갈 때 내려올 때 뷰가 달라요 🚡\n\n반대편 창 보면 새 섬들 나와요 ✨\n맑은 날 대마도까지\n\n📍 경남 통영 미륵산 케이블카\n\n#통영케이블카 #통영여행 #경남 #다도해 #GemKorea',tiktok:'통영 케이블카 꿀팁 🚡 올라갈 때 내려올 때 반대편 창 보면 다른 섬들 나와요! 맑은 날 대마도까지 보여요 // 일몰 시간 탑승이 가장 아름다워요 #통영케이블카 #통영여행 #경남'},
    hashtags:{korean:['#한국여행','#경남여행','#통영여행','#케이블카','#GemKorea'],place_specific:['#통영한려수도케이블카','#반대편창뷰','#대마도조망','#일몰케이블카']}
  },
  {
    experience_id:'EX-GW-CAB-001', experience_name:'설악산 권금성 케이블카', category_sub:'어드벤처/레포츠', region:'강원도',
    script_30s:'오늘은 설악산 권금성 케이블카를 탔어요. 862m 올라가면 울산바위가 눈앞이에요. 근데 아무도 안 알려주는 게 있어요 — 케이블카 내려서 계단 조금 올라가면 울산바위 위에서 동해가 보여요. 그 뷰가 케이블카보다 더 좋아요. 너무 조금 더 걷는 것이 다르다는 게 좋았습니다.',
    script_60s:'오늘은 강원도 속초 설악산 권금성 케이블카를 탔어요. 해발 862m까지 올라가는 케이블카로 설악산 기암괴석 울산바위가 코앞에 보여요. 근데 아무도 안 알려주는 꿀팁 하나 — 케이블카 정류장에서 내린 후 5~10분만 더 계단을 올라가면 권금성 성벽 위에 올라설 수 있어요. 거기서 보이는 뷰가 케이블카 정류장보다 훨씬 넓어요. 울산바위·공룡능선·동해 바다가 한눈에 들어와요. 대부분 케이블카에서 내려서 정류장 주변만 보고 내려오는데, 계단을 5~10분만 더 올라가면 설악산 최고 전망대에 오른 것 같은 뷰가 나와요. 이 사실을 모르는 사람이 너무 많아요. 너무 조금 더 올라가는 것이 완전히 다른 세계라서 좋았습니다.',
    secret_tip:'케이블카 정류장에서 5~10분 계단 추가 — 권금성 성벽 위 울산바위+공룡능선+동해 한눈에. 정류장만 보고 내려오면 절반 놓치는 것. 대부분 모름. 이른 아침 탑승 대기 적음',
    filming_guide:'권금성 성벽 위 울산바위+동해 파노라마. 케이블카 탑승 기암절벽 전경. 이른 아침 구름 위 설악 조망.',
    broll_ideas:['권금성 성벽 위 파노라마','케이블카 기암절벽 전경','이른 아침 구름 위 설악','울산바위 클로즈업 앵글','동해와 설악산 동시'],
    hooks:['케이블카에서 내려 5분 더 올라가야 해요','권금성 성벽 위 뷰가 진짜예요','대부분 정류장에서만 보고 내려와요','울산바위+동해 한눈에 보여요','설악산 케이블카 꿀팁'],
    thumbnails:['권금성 성벽 위 파노라마','케이블카 기암절벽','이른 아침 구름 설악','울산바위 클로즈업','동해와 설악 동시'],
    captions:{youtube:'설악산 케이블카 — 내려서 5분 더 올라가야 해요 🏔️\n\n권금성 성벽 위 = 울산바위+동해 한눈에!\n대부분 정류장만 보고 내려와요\n\n📍 강원도 속초시 설악산 권금성 케이블카\n🏔️ 케이블카 정류장에서 계단 5~10분 추가\n\n#설악산케이블카 #속초 #강원도여행 #설악산 #울산바위',instagram:'설악산 케이블카 내려서 5분 더 올라가야 해요 🏔️\n\n권금성 성벽 위 울산바위+동해 한눈에 ✨\n대부분 이걸 모르고 내려와요\n\n📍 강원 속초 설악산 케이블카\n\n#설악산케이블카 #속초여행 #강원도 #울산바위 #GemKorea',tiktok:'설악산 케이블카 꿀팁 🏔️ 정류장에서 내려 계단 5분 더 올라가면 뷰가 완전 달라요! 울산바위+공룡능선+동해 한눈에 // 대부분 정류장만 보고 내려와 아까워요 #설악산케이블카 #속초여행 #강원도'},
    hashtags:{korean:['#한국여행','#강원도여행','#속초여행','#설악산','#GemKorea'],place_specific:['#설악산케이블카','#권금성성벽','#울산바위동해동시','#5분추가계단']}
  },
  {
    experience_id:'EX-GG-ADV-001', experience_name:'가평 번지점프', category_sub:'어드벤처/레포츠', region:'경기도',
    script_30s:'오늘은 가평 청평호에서 번지점프를 했어요. 63m 높이에서 뛰는 거예요. 근데 아무도 안 알려주는 게 있어요 — 뛰기 직전 3초가 번지점프의 전부예요. 발판에 서는 순간 뛰고 싶지 않아요. 그 3초를 버티고 뛰는 게 번지점프예요. 너무 그 3초 이후의 자유가 달랐어서 좋았습니다.',
    script_60s:'오늘은 경기도 가평 청평호 번지점프를 했어요. 63m 높이 다리 위에서 아래로 뛰어내리는 어드벤처 체험이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 번지점프를 한 사람들이 모두 하는 말이 있어요. "발판에 서면 뛰고 싶지 않아진다." 실제로 발판 끝에 서는 순간 모든 본능이 뒤로 물러서라고 신호를 보내요. 그 3초가 번지점프의 본질이에요. 어떻게든 그 3초를 버티고 뛰어내리면 그 다음은 완전한 자유예요. 바람이 귀를 찢을 것 같은 속도와 짜릿함이 오죠. 그 3초를 버티는 방법은 생각하지 않고 5·4·3·2·1 숫자만 세면서 뛰는 거예요. 너무 3초 이후의 자유가 달랐어서 좋았습니다.',
    secret_tip:'발판 3초 = 번지점프의 전부 — 발판에 서면 뛰고 싶지 않아지는 본능. 생각하지 않고 5·4·3·2·1 카운트만 세고 뛰는 것이 비결. 3초 이후 완전한 자유. 청평호 배경',
    filming_guide:'발판 끝에 서는 긴장 표정 클로즈업. 뛰어내리는 순간 슬로우. 반동하며 올라오는 장면.',
    broll_ideas:['발판 끝 긴장 표정 클로즈업','뛰어내리는 순간 슬로우','반동하며 올라오는 장면','청평호 배경 번지점프','도전 후 환호'],
    hooks:['발판 3초가 번지점프의 전부예요','뛰고 싶지 않아지는 그 순간','5·4·3·2·1 카운트가 비결이에요','3초 이후 완전한 자유가 와요','가평 번지점프 꿀팁'],
    thumbnails:['발판 끝 긴장 표정','뛰어내리는 슬로우','반동하며 올라오기','청평호 배경','도전 후 환호'],
    captions:{youtube:'가평 번지점프 — 발판 3초가 전부예요 🪂\n\n뛰고 싶지 않아지는 그 본능!\n5·4·3·2·1 카운트가 비결\n\n📍 경기도 가평군 청평호 번지점프\n🪂 63m / 3초 이후 완전한 자유\n\n#가평번지점프 #가평 #경기여행 #번지점프 #어드벤처',instagram:'가평 번지점프 발판 3초가 전부예요 🪂\n\n뛰고 싶지 않아지는 본능 그걸 버텨야 해요 ✨\n5·4·3·2·1 이후 완전한 자유\n\n📍 경기 가평 청평호\n\n#가평번지점프 #가평여행 #경기 #번지점프 #GemKorea',tiktok:'가평 번지점프 꿀팁 🪂 발판에 서면 뛰고 싶지 않아져요! 5·4·3·2·1 카운트만 세고 뛰세요 // 3초 이후 완전한 자유가 와요 #가평번지점프 #가평여행 #경기도'},
    hashtags:{korean:['#한국여행','#경기여행','#가평여행','#번지점프','#GemKorea'],place_specific:['#가평번지점프','#발판3초','#청평호번지점프','#5·4·3·2·1카운트']}
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
