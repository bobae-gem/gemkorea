const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const now = new Date().toISOString().slice(0,19);

const newExps = [
  {experience_id:'EX-GN-NAT-024',name:'거제 해금강 유람선 투어',category_main:'문화/체험',category_sub:'자연체험',region_main:'GN',region_sub:'경상남도 거제시',address:'경상남도 거제시 남부면 갈곶리 해금강 선착장',lat:34.7511,lng:128.7339,price:'유람선 성인 14,000원~',duration:'1~2시간',reservation_required:false,target_user:['가족','커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'거제도 최남단 해금강 기암절벽을 유람선으로 탐방하는 체험이다. 한국의 금강이라 불리는 해금강 절벽·동굴·기암이 어우러지는 남해 절경을 뱃길로 감상하며 학동 흑진주 해변도 함께 방문한다.',source_urls:['https://www.geoje.go.kr/'],data_confidence:'high',tags:['해금강유람선','거제','경남','해금강','기암절벽','동굴','남해절경'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~17:00',phone:'055-632-5186'},
  {experience_id:'EX-GW-NAT-027',name:'춘천 소양강 스카이워크',category_main:'문화/체험',category_sub:'어드벤처/레포츠',region_main:'GW',region_sub:'강원특별자치도 춘천시',address:'강원특별자치도 춘천시 영서로 2663',lat:37.8845,lng:127.7352,price:'무료',duration:'30분~1시간',reservation_required:false,target_user:['커플','개인','가족'],nearby_places:[],related_heritage_ids:[],short_description:'소양강 위로 174m 뻗어나간 유리 바닥 스카이워크를 걷는 체험이다. 투명 유리 바닥 아래로 소양강이 흐르는 아찔한 체험과 함께 의암호와 강촌 전경을 감상할 수 있는 춘천 인기 명소다.',source_urls:['https://www.chuncheon.go.kr/'],data_confidence:'high',tags:['소양강스카이워크','춘천','강원','유리바닥','스카이워크','소양강','무료'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00 (무료)',phone:'033-250-4312'},
  {experience_id:'EX-JN-NAT-027',name:'담양 소쇄원+식영정 선비 투어',category_main:'문화/체험',category_sub:'역사 체험',region_main:'JN',region_sub:'전라남도 담양군',address:'전라남도 담양군 남면 소쇄원길 17',lat:35.3006,lng:126.9589,price:'소쇄원 성인 2,000원',duration:'2~3시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'소쇄원·식영정·가사문학관을 연결하는 담양 선비 문화 투어다. 가사 문학의 발원지 담양에서 정철의 관동별곡·사미인곡 배경지를 직접 걸으며 조선 시대 선비 정신을 이해한다.',source_urls:['https://www.damyang.go.kr/'],data_confidence:'high',tags:['소쇄원','담양','선비투어','식영정','가사문학','관동별곡','전남'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00',phone:'061-380-2679'},
  {experience_id:'EX-GG-NAT-030',name:'양평 들꽃수목원 사계절',category_main:'문화/체험',category_sub:'자연체험',region_main:'GG',region_sub:'경기도 양평군',address:'경기도 양평군 양평읍 두물머리로 160',lat:37.5214,lng:127.4842,price:'성인 8,000원',duration:'1~2시간',reservation_required:false,target_user:['커플','가족','개인'],nearby_places:[],related_heritage_ids:[],short_description:'두물머리 인근 양평 들꽃수목원에서 사계절 야생화를 감상하는 체험이다. 북한강변에 위치해 계절마다 다른 야생화와 강 전망이 아름다우며 봄 수선화·여름 수국·가을 국화가 특히 유명하다.',source_urls:['https://www.wildflower.or.kr/'],data_confidence:'high',tags:['들꽃수목원','양평','경기','야생화','수선화','수국','두물머리'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00',phone:'031-772-1800'},
  {experience_id:'EX-GN-NAT-025',name:'창녕 우포늪 조류 탐조',category_main:'문화/체험',category_sub:'자연체험',region_main:'GN',region_sub:'경상남도 창녕군',address:'경상남도 창녕군 유어면 우포길 220',lat:35.5556,lng:128.4258,price:'무료',duration:'2~3시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'국내 최대 자연 내륙 습지 우포늪에서 천연기념물 조류를 탐조하는 체험이다. 람사르 보호 습지로 황새·저어새·재두루미·가창오리 등 희귀 조류 수만 마리가 찾아오는 겨울철 탐조 명소다.',source_urls:['https://www.upo.or.kr/'],data_confidence:'high',tags:['우포늪탐조','창녕','경남','황새','저어새','람사르','겨울탐조'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00 (무료)',phone:'055-532-1403'},
  {experience_id:'EX-JB-NAT-009',name:'진안 마이산 탑사 벚꽃',category_main:'문화/체험',category_sub:'자연체험',region_main:'JB',region_sub:'전라북도 진안군',address:'전라북도 진안군 마령면 마이산로 240',lat:35.7478,lng:127.4181,price:'성인 3,000원',duration:'1~2시간',reservation_required:false,target_user:['가족','커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'전북 명산 마이산(686m) 탑사 800년 된 돌탑군과 4월 벚꽃을 함께 감상하는 체험이다. 마이산은 말귀 모양 두 봉우리와 탑사 돌탑 100여 기가 어우러지는 신비로운 경관으로 전북 최고 기경 중 하나다.',source_urls:['https://www.jinan.go.kr/'],data_confidence:'high',tags:['마이산','진안','전북','탑사','돌탑','벚꽃','말귀모양'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00',phone:'063-432-1330'},
  {experience_id:'EX-GW-NAT-028',name:'강릉 경포 일출+오죽헌 아침 코스',category_main:'문화/체험',category_sub:'역사 체험',region_main:'GW',region_sub:'강원특별자치도 강릉시',address:'강원특별자치도 강릉시 경포동 경포해변',lat:37.7752,lng:128.8912,price:'무료',duration:'3~4시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'경포해변 새해 일출 감상 후 오죽헌 아침 고요 탐방으로 이어지는 강릉 아침 코스다. 일출 직후 관광객이 빠진 경포호 산책과 문을 열기 직전 오죽헌을 먼저 둘러보는 강릉 얼리버드 코스다.',source_urls:['https://www.gn.go.kr/'],data_confidence:'high',tags:['경포일출','강릉','경포해변','오죽헌','새벽코스','강원','아침여행'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'새벽 4~9시',phone:'033-640-4533'},
  {experience_id:'EX-GN-NAT-026',name:'밀양 표충사 사명대사 역사 탐방',category_main:'문화/체험',category_sub:'역사 체험',region_main:'GN',region_sub:'경상남도 밀양시',address:'경상남도 밀양시 단장면 표충로 1338',lat:35.4697,lng:128.9161,price:'성인 2,000원',duration:'1~2시간',reservation_required:false,target_user:['개인','가족'],nearby_places:[],related_heritage_ids:[],short_description:'임진왜란 승병 사명대사의 영정이 봉안된 표충사를 탐방하는 역사 체험이다. 표충비각에서 국가 위기 때 눈물처럼 물이 흘러내린다는 이야기의 사명대사 표충비를 직접 보고 역사를 이해한다.',source_urls:['https://www.miryang.go.kr/'],data_confidence:'high',tags:['표충사','밀양','사명대사','경남','임진왜란','승병','역사탐방'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'06:00~18:00',phone:'055-354-1185'},
  {experience_id:'EX-GG-NAT-031',name:'화성 제부도 모세의 기적 체험',category_main:'문화/체험',category_sub:'자연체험',region_main:'GG',region_sub:'경기도 화성시',address:'경기도 화성시 서신면 제부리 제부도',lat:37.2133,lng:126.6503,price:'무료',duration:'2~3시간',reservation_required:false,target_user:['가족','커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'하루 두 번 썰물 때 바닷길이 열리는 경기도 제부도에서 모세의 기적 현상을 체험하는 투어다. 2.3km 바닷길이 열리는 시간에 걸어서 섬에 들어갈 수 있으며 서해 갯벌 생태 체험도 즐긴다.',source_urls:['https://www.hwaseong.go.kr/'],data_confidence:'high',tags:['제부도','화성','경기','모세의기적','바닷길','갯벌','서해'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'썰물 시간 (조석표 확인)',phone:'031-357-3557'},
  {experience_id:'EX-JN-NAT-028',name:'신안 천사의 섬 도초도 자전거',category_main:'문화/체험',category_sub:'어드벤처/레포츠',region_main:'JN',region_sub:'전라남도 신안군',address:'전라남도 신안군 도초면 도초도',lat:34.7208,lng:125.9044,price:'배 왕복+자전거 대여',duration:'1박 2일',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'신안 천사의 섬 도초도에서 자전거를 타고 섬 일주를 즐기는 체험이다. 아름다운 해안선과 천일염 염전·비금도 연도교를 자전거로 달리며 신안 섬 특유의 느린 여행을 즐긴다.',source_urls:['https://www.sinan.go.kr/'],data_confidence:'high',tags:['도초도자전거','신안','전남','섬자전거','천사의섬','비금도','느린여행'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중',phone:'061-240-8556'},
  {experience_id:'EX-GG-NAT-032',name:'남양주 조안면 생태 탐방',category_main:'문화/체험',category_sub:'자연체험',region_main:'GG',region_sub:'경기도 남양주시',address:'경기도 남양주시 조안면 다산길',lat:37.6358,lng:127.3764,price:'무료',duration:'2~3시간',reservation_required:false,target_user:['가족','개인'],nearby_places:[],related_heritage_ids:[],short_description:'남양주 다산 정약용 유적지와 조안면 북한강 생태 탐방로를 걷는 체험이다. 실학의 거장 정약용이 태어난 마재 마을과 북한강이 만나는 두물머리 수변 생태를 함께 탐방하는 코스다.',source_urls:['https://www.nyj.go.kr/'],data_confidence:'high',tags:['다산정약용','남양주','경기','조안면','북한강','실학','생태탐방'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (무료)',phone:'031-590-8305'},
  {experience_id:'EX-GW-NAT-029',name:'태백 함백산 야생화 트레킹',category_main:'문화/체험',category_sub:'자연체험',region_main:'GW',region_sub:'강원특별자치도 태백시',address:'강원특별자치도 태백시 함백산 일원',lat:37.1614,lng:128.8933,price:'무료',duration:'3~5시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'해발 1,573m 함백산 정상부 고산 초원에서 피는 야생화 트레킹이다. 6~7월 금강초롱꽃·동자꽃·범꼬리 등 고산 야생화가 만발하는 시기에 트레킹하면 다른 곳에서 볼 수 없는 희귀 야생화를 만날 수 있다.',source_urls:['https://www.taebaek.go.kr/'],data_confidence:'high',tags:['함백산','태백','강원','야생화','고산초원','금강초롱','6~7월'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'seasonal',operating_hours:'6~7월 야생화 시즌',phone:'033-550-2082'}
];

const newShorts = [
  {
    experience_id:'EX-SE-SPT-001', experience_name:'서울 전통 씨름 체험 (국기원)', category_sub:'문화예술', region:'서울특별시',
    script_30s:'오늘은 서울 국기원에서 태권도 체험을 했어요. 세계 8,000만 수련자의 성지예요. 근데 아무도 안 알려주는 게 있어요 — 겨루기보다 품새가 먼저예요. 품새가 태권도의 언어예요. 그 동작들이 공격과 방어가 조합된 완전한 시나리오예요. 너무 태권도가 예술이라는 게 좋았습니다.',
    script_60s:'오늘은 서울 강남 국기원에서 태권도 체험을 했어요. 전 세계 208개국 8,000만 명이 수련하는 무술의 총본산이에요. 시범단 공연 관람과 기본 품새 체험을 할 수 있어요. 근데 아무도 안 알려주는 꿀팁 하나 — 태권도 품새가 사실 무술 시나리오예요. 품새 동작 하나하나가 특정 방향에서 오는 공격에 대한 방어와 반격의 조합이에요. 예를 들어 태극 1장은 동서남북 8방향에서 오는 공격을 상상하며 대응하는 동작이에요. 이 사실을 알고 품새를 배우면 단순한 체조가 아니라 무술 시나리오를 연기하는 느낌이에요. 교관이 "이 동작은 왼쪽에서 오는 주먹을 막는 거예요"라고 설명해줄 때 그게 훨씬 감동적이에요. 너무 태권도가 예술이자 시나리오라는 걸 알게 돼서 좋았습니다.',
    secret_tip:'품새 = 무술 시나리오 — 각 동작이 방향별 공격 방어·반격 조합. 태극 1장이 8방향 공격 대응. 이 사실 알고 배우면 품새가 달리 느껴짐. 시범단 공연 직후 체험 연계',
    filming_guide:'품새 동작 설명하는 교관 클로즈업. 체험자 첫 발차기 연습 슬로우. 시범단 격파 공연 장면.',
    broll_ideas:['품새 동작 교관 설명 클로즈업','체험자 발차기 연습 슬로우','시범단 격파 공연','국기원 건물 외경','태권도복 입은 체험자'],
    hooks:['품새가 무술 시나리오예요','각 동작에 방향별 공격이 있어요','이걸 알면 태권도가 달리 느껴져요','세계 8,000만 수련자 성지 국기원','태권도 체험 꿀팁'],
    thumbnails:['품새 동작 교관 설명','발차기 연습 슬로우','시범단 격파 공연','국기원 건물','태권도복 체험자'],
    captions:{youtube:'국기원 태권도 체험 — 품새가 무술 시나리오예요 🥋\n\n각 동작에 방향별 공격 방어가 있어요!\n세계 8,000만 수련자 성지\n\n📍 서울 강남구 국기원\n🥋 시범단 공연 관람+품새 체험 패키지\n\n#국기원태권도 #태권도체험 #서울여행 #품새 #무술시나리오',instagram:'국기원 태권도 품새가 무술 시나리오예요 🥋\n\n각 동작에 방향별 공격 방어 있어요 ✨\n이걸 알면 태권도가 달리 느껴져요\n\n📍 서울 강남 국기원\n\n#국기원 #태권도체험 #서울여행 #품새 #GemKorea',tiktok:'국기원 태권도 꿀팁 🥋 품새가 무술 시나리오예요! 각 동작에 방향별 공격 방어가 있어요 // 이걸 알고 배우면 태권도가 예술로 느껴짐 #국기원 #태권도체험 #서울여행'},
    hashtags:{korean:['#한국여행','#서울여행','#태권도','#무술','#GemKorea'],place_specific:['#국기원태권도','#품새무술시나리오','#태권도성지','#세계8000만']}
  },
  {
    experience_id:'EX-JN-OCN-002', experience_name:'신안 증도 갯벌 체험', category_sub:'자연체험', region:'전라남도',
    script_30s:'오늘은 신안 증도 갯벌을 맨발로 걸었어요. 유네스코 생물권 보전지역이에요. 근데 아무도 안 알려주는 게 있어요 — 갯벌을 맨발로 걸으면 발이 빨려 들어가요. 그 감각이 스트레스 해소예요. 흙이 발을 잡아당기는 그 촉감이 힐링이에요. 너무 갯벌 촉감이 달라서 좋았습니다.',
    script_60s:'오늘은 전남 신안군 증도 갯벌에 왔어요. 유네스코 생물권 보전지역이자 람사르 습지로 지정된 세계 최고 등급 갯벌이에요. 맨발로 갯벌을 걸으며 바지락·갯지렁이·칠게를 채취하는 체험이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 갯벌을 맨발로 처음 걷는 사람들의 반응이 항상 똑같아요. 발이 진흙 속으로 빨려 들어가는 그 감각에 깜짝 놀라요. 그 감각이 사실 엄청난 지압이에요. 발바닥 전체를 부드러운 진흙이 감싸면서 자극하는 게 천연 발 마사지예요. 20~30분만 걸으면 발이 가벼워지는 느낌이 와요. 이게 갯벌 힐링의 비밀이에요. 슬로시티 증도에서 천일염 생산 과정 견학까지 함께하면 증도 완벽 힐링 코스예요. 너무 갯벌 촉감이 천연 마사지라서 좋았습니다.',
    secret_tip:'갯벌 맨발 = 천연 발 지압 마사지 — 진흙이 발바닥 감싸 자극. 20~30분이면 발 가벼워지는 힐링. 이 사실 알면 갯벌이 달리 느껴짐. 증도 천일염 생산 견학 세트 코스',
    filming_guide:'발이 갯벌에 빨려 들어가는 클로즈업 슬로우. 갯벌 맨발 걷는 발바닥 아래 촬영. 바지락 캐는 손 클로즈업.',
    broll_ideas:['발이 갯벌에 빨려 들어가는 슬로우','갯벌 맨발 걷는 발 아래 촬영','바지락 캐는 손 클로즈업','증도 갯벌 전체 광각','천일염 염전 배경'],
    hooks:['갯벌 맨발 걸음이 천연 마사지예요','발이 빨려 들어가는 그 감각이 힐링','20~30분 걸으면 발이 가벼워져요','유네스코 세계 최고 등급 갯벌','증도 갯벌 꿀팁'],
    thumbnails:['발이 갯벌 빨려 들어가는 슬로우','맨발 갯벌 발 아래 촬영','바지락 캐는 손','증도 갯벌 전체','천일염 염전 배경'],
    captions:{youtube:'신안 증도 갯벌 — 맨발 걸음이 천연 마사지예요 🦶\n\n발 빨려 들어가는 그 감각이 힐링!\n20~30분이면 발이 가벼워져요\n\n📍 전남 신안군 증도 갯벌\n🦶 유네스코 생물권 보전+람사르 습지\n\n#증도갯벌 #신안 #전남여행 #갯벌힐링 #천연마사지',instagram:'증도 갯벌 맨발 걸음이 천연 마사지예요 🦶\n\n발 빨려 들어가는 감각이 힐링 ✨\n유네스코 세계 최고 등급 갯벌\n\n📍 전남 신안 증도\n\n#증도갯벌 #신안여행 #전남 #갯벌힐링 #GemKorea',tiktok:'증도 갯벌 꿀팁 🦶 맨발로 걸으면 발이 갯벌에 빨려 들어가는데 그게 천연 마사지예요! 20~30분이면 발 가벼워짐 // 유네스코 최고 등급 갯벌 #증도갯벌 #신안여행 #전남'},
    hashtags:{korean:['#한국여행','#전남여행','#신안여행','#갯벌','#GemKorea'],place_specific:['#증도갯벌','#갯벌천연마사지','#람사르습지','#슬로시티증도']}
  },
  {
    experience_id:'EX-GG-CRF-004', experience_name:'수원 화성 전통 활쏘기 체험', category_sub:'역사 체험', region:'경기도',
    script_30s:'오늘은 수원화성 연무대에서 활쏘기를 했어요. 조선 군사 훈련 현장이에요. 근데 아무도 안 알려주는 게 있어요 — 활은 쏘고 나서 팔꿈치를 뒤로 빼야 해요. 당기는 게 아니라 놓는 순간 몸을 열어야 해요. 그 감각이 활쏘기의 전부예요. 너무 놓는 것이 기술이라는 게 좋았습니다.',
    script_60s:'오늘은 경기도 수원화성 연무대에서 전통 국궁 활쏘기 체험을 했어요. 조선 시대 군사 훈련 장소였던 연무대에서 전통 각궁으로 활을 쏘는 체험이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 활쏘기의 핵심이 당기는 게 아니라 놓는 거예요. 활을 당겨 과녁을 겨냥하고 놓는 순간 팔꿈치를 뒤로 빼면서 몸을 열어야 해요. 이게 "개방"이라는 기술인데 처음엔 놓으면서 본능적으로 앞으로 밀게 돼요. 그러면 화살이 빗나가요. 놓는 순간 팔꿈치를 자연스럽게 뒤로 빼는 그 감각이 국궁 전통 기술이에요. 이 감각을 교관에게 배우는 시간이 체험의 핵심이에요. 너무 놓는 것이 기술이라는 역설이 좋았습니다.',
    secret_tip:'개방 기술 — 화살 놓는 순간 팔꿈치 뒤로 빼며 몸 열기. 앞으로 밀면 빗나감. 이 감각이 전통 국궁의 핵심. 연무대 3,000원 3발 체험. 수원화성 야경 세트',
    filming_guide:'활 겨냥 후 놓는 순간 팔꿈치 뒤로 개방 클로즈업. 화살 과녁 적중 순간. 연무대 배경 조선 시대 분위기.',
    broll_ideas:['활 놓는 순간 팔꿈치 개방 클로즈업','화살 과녁 적중 순간','연무대 배경 조선 분위기','수원화성 성벽 배경 활쏘기','전통 각궁 클로즈업'],
    hooks:['활쏘기는 당기는 게 아닌 놓는 거예요','팔꿈치 뒤로 빼는 개방이 핵심이에요','놓는 것이 기술이라는 역설','수원화성 연무대 3,000원 체험','전통 국궁 꿀팁 있어요'],
    thumbnails:['활 놓는 순간 팔꿈치 개방','화살 과녁 적중','연무대 배경','화성 성벽 배경 활쏘기','전통 각궁'],
    captions:{youtube:'수원화성 연무대 활쏘기 — 놓는 게 기술이에요 🏹\n\n팔꿈치 뒤로 빼는 개방이 핵심!\n조선 군사 훈련 현장\n\n📍 경기도 수원 화성 연무대\n🏹 3,000원 3발 체험\n\n#수원활쏘기 #연무대 #수원화성 #국궁 #전통무예',instagram:'수원화성 연무대 활쏘기 놓는 게 기술이에요 🏹\n\n팔꿈치 뒤로 빼는 개방이 핵심 ✨\n조선 군사 훈련 현장\n\n📍 경기 수원 연무대\n\n#수원활쏘기 #연무대 #수원화성 #국궁 #GemKorea',tiktok:'수원화성 연무대 활쏘기 꿀팁 🏹 놓는 순간 팔꿈치를 뒤로 빼야 해요! 앞으로 밀면 빗나가요 // 놓는 것이 기술이라는 역설 조선 국궁 #수원활쏘기 #연무대 #수원화성'},
    hashtags:{korean:['#한국여행','#경기여행','#수원여행','#활쏘기','#GemKorea'],place_specific:['#수원연무대활쏘기','#전통국궁','#개방기술','#화성연무대']}
  },
  {
    experience_id:'EX-GN-HAN-001', experience_name:'산청 동의보감 한방 체험관', category_sub:'한방 체험', region:'경상남도',
    script_30s:'오늘은 산청 동의보감 한방 체험관에 왔어요. 허준의 고장이에요. 근데 아무도 안 알려주는 게 있어요 — 족욕할 때 물 온도가 42~45도가 최적이에요. 너무 뜨거우면 혈관이 수축해요. 그 온도 범위 안에서 20분이 최고 효과예요. 너무 온도가 이렇게 중요하다는 게 좋았습니다.',
    script_60s:'오늘은 경남 산청 동의보감 한방테마파크 체험관에 왔어요. 허준이 동의보감을 집필한 지리산 자락 산청에서 한방 체험을 하는 곳이에요. 맥진·한방차·족욕이 포함돼요. 근데 아무도 안 알려주는 꿀팁 하나 — 족욕 온도가 핵심이에요. 많은 사람이 뜨거울수록 좋다고 생각하는데, 족욕 최적 온도는 42~45도예요. 이 온도에서 혈관이 확장되면서 혈액 순환이 가장 잘 돼요. 너무 뜨거우면 오히려 혈관이 수축해서 역효과가 나요. 체험관에서 온도를 조절할 수 있는데 42~45도 사이로 맞추고 20분이 가장 효과적이에요. 한방 전문가에게 이 사실을 배우는 게 체험의 진짜 가치예요. 너무 온도 범위가 이렇게 중요하다는 게 좋았습니다.',
    secret_tip:'족욕 최적 온도 42~45도 — 혈관 확장 최대 혈액 순환. 너무 뜨거우면 혈관 수축 역효과. 20분 유지가 최적. 이 사실 알면 집에서도 활용. 한방 체험+맥진 세트',
    filming_guide:'족욕 온도계 클로즈업 (42~45도). 한방 맥진 손목 클로즈업. 허준 동의보감 전시관 내부.',
    broll_ideas:['족욕 온도계 클로즈업','한방 맥진 손목','허준 동의보감 전시관','한방차 달이는 과정','지리산 약초밭 배경'],
    hooks:['족욕 온도 42~45도가 최적이에요','너무 뜨거우면 역효과 알아요?','이 온도 범위가 핵심이에요','허준 동의보감 고장에서 배웠어요','산청 한방 체험 꿀팁'],
    thumbnails:['족욕 온도계 클로즈업','한방 맥진 손목','동의보감 전시관','한방차 달이기','지리산 약초밭'],
    captions:{youtube:'산청 한방 체험 — 족욕 최적 온도 42~45도예요 🌿\n\n너무 뜨거우면 역효과!\n20분 유지가 최적\n\n📍 경남 산청군 동의보감 한방테마파크\n🌿 허준 동의보감 고장 지리산 자락\n\n#산청한방체험 #동의보감 #산청 #경남여행 #족욕온도',instagram:'산청 한방 족욕 42~45도가 최적이에요 🌿\n\n너무 뜨거우면 역효과 알아요? ✨\n허준 동의보감 고장에서 배웠어요\n\n📍 경남 산청 동의보감 한방테마파크\n\n#산청한방 #동의보감 #산청여행 #경남 #GemKorea',tiktok:'산청 한방 꿀팁 🌿 족욕 온도 42~45도가 최적이에요! 너무 뜨거우면 혈관 수축 역효과 // 허준 동의보감 고장에서 배운 한방 지식 #산청한방 #동의보감 #경남여행'},
    hashtags:{korean:['#한국여행','#경남여행','#산청여행','#한방','#GemKorea'],place_specific:['#산청한방체험','#족욕최적온도','#동의보감한방','#허준지리산']}
  },
  {
    experience_id:'EX-GG-TEM-001', experience_name:'양주 천보산 사찰 음식 체험', category_sub:'사찰 체험', region:'경기도',
    script_30s:'오늘은 양주 회암사에서 사찰 음식을 만들었어요. 오신채 없는 채식이에요. 근데 아무도 안 알려주는 게 있어요 — 오신채를 왜 안 쓰냐고요? 파·마늘·달래·부추·흥거가 흥분을 유발한다고 불교에서 봤어요. 그 대신 버섯·다시마로 맛을 내요. 너무 재료에 철학이 있다는 게 좋았습니다.',
    script_60s:'오늘은 경기도 양주 회암사 인근 공방에서 사찰 음식 만들기 체험을 했어요. 오신채(파·마늘·달래·부추·흥거) 없이 자연 재료만으로 만드는 불교 음식이에요. 나물 비빔밥·두부조림·된장국을 만들어요. 근데 아무도 안 알려주는 꿀팁 하나 — 사찰 음식에서 오신채를 쓰지 않는 이유가 있어요. 불교에서 오신채 다섯 가지가 먹는 방식에 따라 흥분이나 음란한 마음을 유발한다고 봤어요. 수행을 방해한다는 거죠. 그래서 대신 버섯·다시마·참기름으로 깊은 맛을 내요. 이 철학을 알고 요리하면 재료 하나하나가 다르게 느껴져요. 오신채 없는데도 어떻게 이렇게 맛있는지 의문이 풀려요. 너무 재료에 불교 철학이 담겨있다는 게 좋았습니다.',
    secret_tip:'오신채 금지 이유 = 흥분 유발로 수행 방해 — 대신 버섯·다시마·참기름으로 깊은 맛. 철학 알면 재료 달리 느껴짐. 양주 회암사+사찰음식 세트 코스. 정선 아리랑 세트',
    filming_guide:'오신채 없는 재료들 클로즈업. 나물 손질하는 손 동작. 완성 사찰 비빔밥 클로즈업.',
    broll_ideas:['오신채 없는 재료 클로즈업','나물 손질하는 손','완성 사찰 비빔밥','회암사 사찰 외경','버섯·다시마 육수 끓이기'],
    hooks:['오신채를 왜 안 쓰는지 알아요?','파·마늘이 수행을 방해한다고 해요','버섯·다시마로 깊은 맛을 내요','철학이 담긴 재료 선택이에요','양주 사찰 음식 체험 꿀팁'],
    thumbnails:['오신채 없는 재료','나물 손질하는 손','완성 사찰 비빔밥','회암사 사찰 외경','육수 끓이기'],
    captions:{youtube:'양주 사찰 음식 — 오신채 없는 이유 알아요? 🌿\n\n파·마늘이 수행 방해한다는 불교 철학!\n버섯·다시마로 깊은 맛 내는 비결\n\n📍 경기도 양주시 회암사 인근 사찰음식 공방\n🌿 오신채 없이 만드는 채식 불교 음식\n\n#양주사찰음식 #사찰음식 #경기여행 #오신채 #불교음식',instagram:'양주 사찰 음식 오신채 없는 이유 있어요 🌿\n\n수행 방해 불교 철학으로 금지 ✨\n버섯·다시마로 깊은 맛 비결\n\n📍 경기 양주 회암사 사찰음식\n\n#사찰음식 #양주여행 #경기 #오신채 #GemKorea',tiktok:'양주 사찰음식 꿀팁 🌿 오신채(파·마늘·달래·부추·흥거) 안 쓰는 이유 있어요! 수행 방해한다는 불교 철학 // 버섯·다시마로 대신 깊은 맛 내요 #양주사찰음식 #사찰음식 #경기도'},
    hashtags:{korean:['#한국여행','#경기여행','#양주여행','#사찰음식','#GemKorea'],place_specific:['#양주사찰음식','#오신채금지철학','#회암사사찰음식','#불교채식']}
  },
  {
    experience_id:'EX-JN-CRF-003', experience_name:'강진 청자 도요지 체험', category_sub:'전통공예', region:'전라남도',
    script_30s:'오늘은 강진 청자 도요지에서 청자를 만들었어요. 900년 전 고려 장인들이 구워낸 곳이에요. 근데 아무도 안 알려주는 게 있어요 — 청자 빛깔이 비색이에요. 비 온 뒤 맑은 하늘 색이에요. 그 색을 내는 게 화학 반응이에요. 산소 적게 넣으면 그 색이 나요. 너무 색이 과학이라는 게 좋았습니다.',
    script_60s:'오늘은 전남 강진 청자 도요지 체험관에 왔어요. 고려 시대 최고급 청자를 구워냈던 강진 대구면 가마터에서 직접 청자 물레 성형과 문양 새기기를 체험하는 곳이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 청자 특유의 비색(翡色)이 어떻게 나오는지 알아요? 비색은 비 온 뒤 맑은 하늘빛 같은 청록색이에요. 이 색이 가마 안 환원 소성이라는 기술에서 나와요. 불을 피울 때 산소를 적게 공급하는 환원 환경을 만들면 철분이 환원되면서 청록색으로 변해요. 산소가 많으면 갈색이 나오고 적으면 청록색이 나오는 거예요. 900년 전 고려 장인들이 이 원리를 발견한 거예요. 체험관에서 이 설명을 들으면 전시된 청자가 완전히 다르게 보여요. 너무 색이 화학 반응이라는 게 좋았습니다.',
    secret_tip:'비색 = 환원 소성으로 철분이 청록색으로 변함 — 산소 적게 = 청록, 많으면 갈색. 900년 전 고려 장인의 발견. 이 원리 알면 청자 전시가 달리 보임. 강진 다산초당 세트',
    filming_guide:'청자 물레 성형 손 클로즈업. 청자 비색 조명 아래 색깔 촬영. 가마터 유적 외경.',
    broll_ideas:['청자 물레 성형 손 클로즈업','청자 비색 조명 아래 색깔','가마터 유적 외경','청자 문양 새기는 도구','강진 청자 전시 박물관'],
    hooks:['청자 비색이 어떻게 나오는지 알아요?','산소 적게 넣으면 청록색이 나와요','900년 전 고려 장인의 발견이에요','색이 화학 반응이라는 게 신기해요','강진 청자 체험 꿀팁'],
    thumbnails:['청자 물레 성형 손','비색 조명 아래 색깔','가마터 유적 외경','문양 새기는 도구','청자 전시 박물관'],
    captions:{youtube:'강진 청자 체험 — 비색이 어떻게 나오는지 알아요? 🏺\n\n산소 적게 = 청록색 환원 소성!\n900년 전 고려 장인의 발견\n\n📍 전남 강진군 청자 도요지 체험관\n🏺 고려 청자 가마터에서 직접 체험\n\n#강진청자 #강진 #전남여행 #청자비색 #고려청자',instagram:'강진 청자 비색이 어떻게 나오는지 알았어요 🏺\n\n산소 적게 넣으면 청록색 환원 반응 ✨\n900년 전 고려 장인의 발견\n\n📍 전남 강진 청자 도요지\n\n#강진청자 #강진여행 #전남 #청자비색 #GemKorea',tiktok:'강진 청자 꿀팁 🏺 비색이 환원 소성으로 나와요! 산소 적게 넣으면 청록색 많으면 갈색 // 900년 전 고려 장인이 발견한 원리 #강진청자 #강진여행 #전남'},
    hashtags:{korean:['#한국여행','#전남여행','#강진여행','#청자','#GemKorea'],place_specific:['#강진청자도요지','#청자비색','#환원소성','#고려청자발견']}
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
