const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const now = new Date().toISOString().slice(0,19);

const newExps = [
  {experience_id:'EX-GN-NAT-029',name:'하동 화개 쌍계사 벚꽃+십리길',category_main:'문화/체험',category_sub:'자연체험',region_main:'GN',region_sub:'경상남도 하동군',address:'경상남도 하동군 화개면 쌍계사 십리벚꽃길',lat:35.0834,lng:127.6842,price:'무료',duration:'2~3시간',reservation_required:false,target_user:['커플','개인','가족'],nearby_places:[],related_heritage_ids:[],short_description:'하동 화개장터에서 쌍계사까지 4km 십리벚꽃길을 걸으며 천 년 사찰 쌍계사를 방문하는 봄 체험이다. 수령 100년 이상 왕벚나무 꽃터널과 사찰 경내 봄 꽃이 어우러지는 한국 최고 봄 트레킹 코스다.',source_urls:['https://www.hadong.go.kr/'],data_confidence:'high',tags:['쌍계사벚꽃','하동','십리벚꽃길','경남','봄여행','사찰','화개장터'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'3월 말~4월 초 벚꽃 시즌',phone:'055-880-2960'},
  {experience_id:'EX-GW-NAT-032',name:'강릉 정동진 모래시계+일출',category_main:'문화/체험',category_sub:'자연체험',region_main:'GW',region_sub:'강원특별자치도 강릉시',address:'강원특별자치도 강릉시 강동면 헌화로 950-39',lat:37.6788,lng:129.0286,price:'무료',duration:'1~2시간',reservation_required:false,target_user:['커플','개인','가족'],nearby_places:[],related_heritage_ids:[],short_description:'세계에서 가장 바다에 가까운 기차역 정동진에서 일출을 감상하는 체험이다. 드라마 모래시계 촬영지이며 매년 새해 수십만 명이 일출을 맞이하는 동해 최고 일출 명소다.',source_urls:['https://www.gn.go.kr/'],data_confidence:'high',tags:['정동진일출','정동진','강릉','강원','동해일출','모래시계','기차역'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중',phone:'033-640-4533'},
  {experience_id:'EX-JN-NAT-033',name:'완도 해조류 체험마을',category_main:'문화/체험',category_sub:'해양체험',region_main:'JN',region_sub:'전라남도 완도군',address:'전라남도 완도군 완도읍 개포리 일원',lat:34.3176,lng:126.7557,price:'1인 20,000원~',duration:'2~3시간',reservation_required:true,target_user:['가족','개인'],nearby_places:[],related_heritage_ids:[],short_description:'해조류 왕국 완도에서 미역·다시마·톳 채취와 해조류 요리를 즐기는 어촌 체험이다. 청정 완도 앞바다 수하식 양식장에서 해조류를 직접 채취하고 해조류를 활용한 건강 요리를 만든다.',source_urls:['https://www.wando.go.kr/'],data_confidence:'high',tags:['완도해조류','완도','전남','미역','다시마','어촌체험','해조류요리'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~17:00',phone:'061-550-5114'},
  {experience_id:'EX-GN-NAT-030',name:'창원 진해 해군사관학교 투어',category_main:'문화/체험',category_sub:'역사 체험',region_main:'GN',region_sub:'경상남도 창원시',address:'경상남도 창원시 진해구 중원로 1 해군사관학교',lat:35.1600,lng:128.6747,price:'무료 (사전 신청)',duration:'2~3시간',reservation_required:true,target_user:['가족','개인'],nearby_places:[],related_heritage_ids:[],short_description:'대한민국 해군 장교를 양성하는 해군사관학교를 탐방하는 역사 교육 체험이다. 이순신 장군 동상·해군 함정 전시·사관학교 교정을 견학하며 한국 해군 역사를 이해한다.',source_urls:['https://www.navy.mil.kr/'],data_confidence:'high',tags:['해군사관학교','진해','창원','경남','이순신','해군역사','교육'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'평일 사전 신청 (주말 제한)',phone:'055-549-0114'},
  {experience_id:'EX-JB-NAT-010',name:'임실 치즈 테마파크',category_main:'문화/체험',category_sub:'어린이 체험',region_main:'JB',region_sub:'전라북도 임실군',address:'전라북도 임실군 임실읍 치즈마을로 2',lat:35.6163,lng:127.2794,price:'성인 5,000원',duration:'2~3시간',reservation_required:false,target_user:['가족','어린이'],nearby_places:[],related_heritage_ids:[],short_description:'국내 최초 치즈 제조지 임실의 치즈 테마파크를 탐방하는 체험이다. 치즈 마을 전체를 테마파크로 꾸며 치즈 만들기·피자 만들기·소 먹이 주기·양몰이 등 다양한 체험 프로그램을 운영한다.',source_urls:['https://www.cheesemaul.com/'],data_confidence:'high',tags:['임실치즈테마파크','임실','전북','치즈','어린이체험','피자만들기','가족'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00',phone:'063-643-3700'},
  {experience_id:'EX-GW-NAT-033',name:'원주 간현 관광지 래프팅',category_main:'문화/체험',category_sub:'어드벤처/레포츠',region_main:'GW',region_sub:'강원특별자치도 원주시',address:'강원특별자치도 원주시 지정면 간현리 섬강',lat:37.4050,lng:127.9322,price:'1인 30,000원~',duration:'2시간',reservation_required:true,target_user:['개인','커플','청년'],nearby_places:[],related_heritage_ids:[],short_description:'원주 섬강에서 래프팅을 즐기는 체험이다. 섬강의 급류와 협곡을 고무보트로 내려오며 뮤지엄 산 방문과 연계하면 원주 완벽 하루 코스가 완성된다.',source_urls:['https://www.wonju.go.kr/'],data_confidence:'high',tags:['간현래프팅','원주','강원','래프팅','섬강','급류','여름'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'seasonal',operating_hours:'5~10월',phone:'033-732-8800'},
  {experience_id:'EX-GG-NAT-037',name:'인천 차이나타운 짜장면+만두 투어',category_main:'문화/체험',category_sub:'지역 먹거리',region_main:'GG',region_sub:'인천광역시 중구',address:'인천광역시 중구 차이나타운로 56',lat:37.4758,lng:126.6168,price:'먹거리 별도',duration:'1~2시간',reservation_required:false,target_user:['가족','개인','외국인'],nearby_places:[],related_heritage_ids:[],short_description:'한국 짜장면의 발원지 인천 차이나타운에서 짜장면·짬뽕·만두를 먹는 먹거리 투어다. 1905년 공화춘에서 처음 선보인 한국식 짜장면의 역사를 직접 경험하는 코스다.',source_urls:['https://www.icjgss.or.kr/chinatown/'],data_confidence:'high',tags:['차이나타운짜장면','인천','중구','짜장면','공화춘','한국최초','먹거리'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'11:00~21:00',phone:'032-773-9988'},
  {experience_id:'EX-GN-NAT-031',name:'진주 남강 벚꽃 워킹',category_main:'문화/체험',category_sub:'자연체험',region_main:'GN',region_sub:'경상남도 진주시',address:'경상남도 진주시 남강변 벚꽃길',lat:35.1894,lng:128.1058,price:'무료',duration:'1~2시간',reservation_required:false,target_user:['커플','개인','가족'],nearby_places:[],related_heritage_ids:[],short_description:'진주 남강변 3km 벚꽃 길을 걷는 봄 체험이다. 진주성·촉석루를 배경으로 남강 양쪽 제방에 핀 벚꽃이 봄 진주 최고 경관을 만들며 봄 진주 남강 유등축제와 연계하면 최고의 진주 봄 코스다.',source_urls:['https://www.jinju.go.kr/'],data_confidence:'high',tags:['진주남강벚꽃','진주','경남','벚꽃','남강','진주성','봄'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'3월 말~4월 초 벚꽃 시즌',phone:'055-749-2696'},
  {experience_id:'EX-JN-NAT-034',name:'고흥 거금도 바다 낚시',category_main:'문화/체험',category_sub:'낚시/어촌 체험',region_main:'JN',region_sub:'전라남도 고흥군',address:'전라남도 고흥군 금산면 거금도 방파제',lat:34.5119,lng:127.1089,price:'1인 20,000원~',duration:'3~4시간',reservation_required:true,target_user:['개인','가족'],nearby_places:[],related_heritage_ids:[],short_description:'고흥 거금도에서 방파제 낚시와 선상 낚시를 즐기는 체험이다. 남해 청정 해역 거금도에서 우럭·농어·볼락 등 다양한 어종을 낚시하고 직접 잡은 물고기로 회를 즐기는 어촌 체험이다.',source_urls:['https://www.goh.go.kr/'],data_confidence:'high',tags:['거금도낚시','고흥','전남','방파제낚시','선상낚시','우럭','남해'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중',phone:'061-830-8777'},
  {experience_id:'EX-GG-NAT-038',name:'경기 이천 쌀 수확 체험',category_main:'문화/체험',category_sub:'농촌 체험',region_main:'GG',region_sub:'경기도 이천시',address:'경기도 이천시 부발읍 임금님표쌀농장',lat:37.2641,lng:127.4731,price:'1인 15,000원~',duration:'2~3시간',reservation_required:true,target_user:['가족','어린이'],nearby_places:[],related_heritage_ids:[],short_description:'이천 임금님표 쌀 농장에서 9~10월 벼 수확 체험을 즐기는 농촌 체험이다. 조선 왕실에 진상했던 이천 쌀 낫으로 직접 베기·탈곡·도정 과정을 체험하고 갓 지은 이천 쌀밥을 맛볼 수 있다.',source_urls:['https://www.icheon.go.kr/'],data_confidence:'high',tags:['이천쌀수확','이천','경기','벼베기','임금님표쌀','탈곡','가을체험'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'seasonal',operating_hours:'9~10월 벼 수확 시즌',phone:'031-644-2538'},
  {experience_id:'EX-CB-NAT-007',name:'보은 법주사 연등 법회',category_main:'문화/체험',category_sub:'사찰 체험',region_main:'CB',region_sub:'충청북도 보은군',address:'충청북도 보은군 속리산면 법주사로 379',lat:36.5439,lng:127.8492,price:'성인 5,000원',duration:'2~3시간',reservation_required:false,target_user:['개인','가족','커플'],nearby_places:[],related_heritage_ids:[],short_description:'국보 팔상전이 있는 속리산 법주사에서 봄 연등 법회와 경내 탐방을 즐기는 체험이다. 석가탄신일 전후 화려한 연등이 경내를 가득 채우는 장관과 조선 유일 목탑 팔상전을 함께 관람한다.',source_urls:['https://www.beopjusa.org/'],data_confidence:'high',tags:['법주사연등','보은','충북','속리산','팔상전','목탑','연등법회'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'석가탄신일 전후 (음력 4월)',phone:'043-543-3615'},
  {experience_id:'EX-GN-NAT-032',name:'하동 지리산 화개재 철쭉 트레킹',category_main:'문화/체험',category_sub:'자연체험',region_main:'GN',region_sub:'경상남도 하동군',address:'경상남도 하동군 화개면 지리산 화개재',lat:35.1639,lng:127.7236,price:'무료',duration:'3~5시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'지리산 화개재 능선에서 5월 철쭉이 만개하는 시기에 트레킹하는 체험이다. 섬진강 하동에서 출발해 지리산 능선에 오르면 붉은 철쭉 군락과 전남·경남이 한눈에 보이는 전경이 펼쳐진다.',source_urls:['https://www.hadong.go.kr/'],data_confidence:'high',tags:['화개재철쭉','하동','지리산','경남','철쭉','트레킹','5월'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'5월 철쭉 시즌',phone:'055-880-2960'}
];

const newShorts = [
  {
    experience_id:'EX-GW-SPA-001', experience_name:'평창 해피700 산림 치유 프로그램', category_sub:'자연체험', region:'강원도',
    script_30s:'오늘은 평창 해피700 산림 치유 프로그램을 했어요. 해발 700m 소나무 숲 명상이에요. 근데 아무도 안 알려주는 게 있어요 — 피톤치드는 구름 낄 때 더 많이 나와요. 맑은 날보다 흐린 날 삼림욕이 더 효과적이에요. 너무 날씨가 이렇게 달라질 줄 몰랐어서 좋았습니다.',
    script_60s:'오늘은 강원도 평창 대관령 해발 700m 해피700 산림 치유 센터에서 산림 명상 프로그램에 참가했어요. 피톤치드 가득한 소나무 숲에서 명상·숲 요가·허브 족욕을 체험해요. 근데 아무도 안 알려주는 꿀팁 하나 — 삼림욕의 효과가 가장 높은 날씨가 있어요. 맑은 날보다 구름 끼거나 비 온 직후가 피톤치드 농도가 더 높아요. 나무는 습도가 높을 때 피톤치드를 더 많이 방출하거든요. 그래서 맑은 날 삼림욕보다 흐린 날 삼림욕이 더 치유 효과가 있어요. 비 온 직후 젖은 소나무 숲에서 숨을 깊게 들이마시는 그 순간이 진짜 삼림욕의 절정이에요. 날씨 좋은 날만 산림욕하러 가려는 사람들에게 알려주고 싶은 역설이에요. 너무 구름 낀 날 삼림욕이 더 좋다는 게 좋았습니다.',
    secret_tip:'구름 낄 때 또는 비 온 직후 = 피톤치드 농도 최고 — 나무가 습도 높을 때 더 많이 방출. 맑은 날보다 흐린 날 삼림욕 효과 높음. 이 사실 알면 날씨 선택이 달라짐',
    filming_guide:'구름 낀 날 소나무 숲 명상 장면. 비 온 후 젖은 소나무 피톤치드 냄새 맡는 표정. 족욕+숲 배경 힐링 장면.',
    broll_ideas:['구름 낀 소나무 숲 명상','비 온 후 젖은 소나무 냄새 맡기','족욕+숲 배경 힐링','해발 700m 평창 대관령 전경','산림 치유 프로그램 스트레칭'],
    hooks:['피톤치드는 흐린 날 더 많아요','맑은 날보다 구름 낄 때 효과적','비 온 직후가 삼림욕 절정이에요','날씨 선택이 삼림욕 효과를 결정','평창 산림 치유 꿀팁'],
    thumbnails:['구름 낀 소나무 숲 명상','젖은 소나무 냄새 맡기','족욕+숲 힐링','700m 평창 전경','산림 치유 스트레칭'],
    captions:{youtube:'평창 해피700 산림 치유 — 흐린 날이 더 효과적이에요 🌲\n\n피톤치드는 습도 높을 때 더 많이 나와요!\n비 온 직후가 삼림욕 절정\n\n📍 강원도 평창군 대관령 해피700\n🌲 구름 낀 날 또는 비 온 직후 방문 추천\n\n#평창산림치유 #해피700 #강원도여행 #피톤치드 #삼림욕',instagram:'평창 해피700 산림 치유 흐린 날이 더 효과적이에요 🌲\n\n피톤치드 습도 높을 때 더 많이 나와요 ✨\n비 온 직후가 삼림욕 절정\n\n📍 강원 평창 대관령\n\n#평창산림치유 #해피700 #강원도 #피톤치드 #GemKorea',tiktok:'평창 해피700 꿀팁 🌲 흐린 날이 삼림욕 더 효과적이에요! 피톤치드는 습도 높을 때 더 많이 나와요 // 비 온 직후가 삼림욕 절정 맑은 날만 가려는 것 바꿔요 #평창산림치유 #강원도여행 #피톤치드'},
    hashtags:{korean:['#한국여행','#강원도여행','#평창여행','#삼림욕','#GemKorea'],place_specific:['#해피700산림치유','#피톤치드최고날씨','#흐린날삼림욕','#비온후소나무숲']}
  },
  {
    experience_id:'EX-JJ-SPA-001', experience_name:'제주 올레 명상 트레킹', category_sub:'자연체험', region:'제주특별자치도',
    script_30s:'오늘은 제주 올레길을 명상하며 걸었어요. 성산일출봉 바라보며 걷는 1코스예요. 근데 아무도 안 알려주는 게 있어요 — 걸으면서 발바닥에 집중해야 해요. 발이 땅에 닿는 그 감각만 느끼면 생각이 멈춰요. 그게 마음챙김 걷기예요. 너무 생각이 멈추는 순간이 좋았습니다.',
    script_60s:'오늘은 제주 올레길 1코스 성산 시흥초등학교에서 광치기 해변까지 명상하며 걷는 체험을 했어요. 성산일출봉을 바라보며 바닷바람을 맞으며 걷는 코스예요. 근데 아무도 안 알려주는 꿀팁 하나 — 올레길 명상 트레킹의 핵심이 있어요. 보통 걸으면서 생각을 많이 하는데, 명상 걷기는 발바닥에 집중해요. 발이 땅에 닿는 순간, 발뒤꿈치·발바닥·발끝 순서로 접촉하는 그 감각에만 주의를 두면 다른 생각들이 자연스럽게 멈춰요. 이게 마음챙김(마인드풀니스) 걷기예요. 10분만 이렇게 걸어도 평소와 완전히 다른 제주가 보여요. 파도 소리가 더 선명하게 들리고 바람이 더 뚜렷하게 느껴져요. 스마트폰 없이 발에만 집중하는 그 걷기가 진짜 제주 힐링이에요. 너무 생각이 멈추는 그 순간이 좋았습니다.',
    secret_tip:'발바닥 감각 집중 = 마음챙김 걷기 — 발뒤꿈치·발바닥·발끝 순서 접촉 감각. 10분이면 생각 자연스럽게 멈춤. 스마트폰 없이 진행. 성산일출봉 배경 최적 구간',
    filming_guide:'발이 땅에 닿는 순간 발바닥 클로즈업. 성산일출봉 배경 조용한 걷기 장면. 바닷바람 맞으며 명상 표정.',
    broll_ideas:['발바닥 땅에 닿는 클로즈업','성산일출봉 배경 조용한 걷기','바닷바람 맞으며 명상 표정','올레길 제주 바다 전경','스마트폰 없이 걷는 장면'],
    hooks:['올레길 명상 걷기 발바닥이 핵심이에요','발 감각에 집중하면 생각이 멈춰요','마음챙김 걷기 10분이면 충분해요','스마트폰 없이 걷는 그 체험','제주 올레 명상 트레킹 꿀팁'],
    thumbnails:['발바닥 땅에 닿는 클로즈업','성산일출봉 배경 걷기','명상 표정','올레길 제주 바다','스마트폰 없이 걷기'],
    captions:{youtube:'제주 올레 명상 트레킹 — 발바닥에 집중하면 생각이 멈춰요 🧘\n\n마음챙김 걷기 10분이면 충분!\n성산일출봉 배경 제주 힐링\n\n📍 제주 성산 올레길 1코스\n🧘 스마트폰 없이 발바닥 감각에만 집중\n\n#제주올레명상 #제주여행 #마음챙김걷기 #올레길 #제주힐링',instagram:'제주 올레 명상 트레킹 발에 집중하면 생각 멈춰요 🧘\n\n마음챙김 걷기 10분이면 충분 ✨\n성산일출봉 배경 제주 힐링\n\n📍 제주 성산 올레길 1코스\n\n#제주올레명상 #제주여행 #마음챙김 #GemKorea',tiktok:'제주 올레 명상 꿀팁 🧘 발바닥이 땅에 닿는 감각에만 집중! 10분이면 생각이 자연스럽게 멈춰요 // 스마트폰 없이 제주 올레길 마음챙김 걷기 #제주올레명상 #제주여행 #마음챙김걷기'},
    hashtags:{korean:['#한국여행','#제주여행','#명상','#올레길','#GemKorea'],place_specific:['#제주올레명상트레킹','#마음챙김걷기','#발바닥집중','#성산일출봉배경']}
  },
  {
    experience_id:'EX-CN-CRF-002', experience_name:'서산 한지 연등 만들기', category_sub:'전통공예', region:'충청남도',
    script_30s:'오늘은 서산에서 한지 연등을 만들었어요. 부처님 오신날 전통 등이에요. 근데 아무도 안 알려주는 게 있어요 — 한지를 두 겹으로 붙이면 빛이 반투명해져요. 한 겹은 너무 비치고 두 겹은 은은해요. 그 투명도가 연등의 아름다움이에요. 너무 겹 수 하나가 다르다는 게 좋았습니다.',
    script_60s:'오늘은 충남 서산 마애삼존불 인근 공방에서 한지 연등 만들기 체험을 했어요. 천 년 전통 전주 한지로 대나무 틀에 감아 연등을 완성하는 체험이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 연등 만들 때 한지 겹 수가 핵심이에요. 한지를 한 겹만 붙이면 촛불 빛이 너무 직접 비쳐 조잡해 보여요. 두 겹을 붙이면 빛이 한지를 통과하면서 은은하고 따뜻하게 번져요. 이 은은함이 연등의 아름다움이에요. 장인들은 한지의 특성을 이용해 빛의 확산을 조절해요. 내가 만든 연등에 불을 밝혔을 때 두 겹 한지 사이로 은은한 빛이 나오는 그 순간이 체험의 하이라이트예요. 너무 겹 수 하나가 이렇게 다른 빛을 만든다는 게 좋았습니다.',
    secret_tip:'한지 두 겹 = 은은한 반투명 빛 — 한 겹은 너무 직접 비침, 두 겹이 최적. 빛 확산 조절이 연등 아름다움 핵심. 불 밝히는 순간이 하이라이트. 서산 마애삼존불 세트 탐방',
    filming_guide:'한지 두 겹 붙이는 손 과정. 완성 연등 불 밝히는 순간 빛 번짐. 마애삼존불 배경 연등 탐방.',
    broll_ideas:['한지 두 겹 붙이는 손 과정','완성 연등 불 밝히는 빛 번짐','마애삼존불 배경 연등','연등 대나무 틀 만들기','한지 연등들 늘어선 전경'],
    hooks:['한지 두 겹이 은은한 빛을 만들어요','겹 수 하나가 빛이 달라요','불 밝히는 순간이 하이라이트','연등 아름다움의 비밀이에요','서산 한지 연등 체험 꿀팁'],
    thumbnails:['한지 두 겹 붙이기','연등 불 밝히는 빛 번짐','마애삼존불 배경','대나무 틀 만들기','연등들 늘어선 전경'],
    captions:{youtube:'서산 한지 연등 만들기 — 두 겹이 은은한 빛이에요 🏮\n\n한 겹은 직접 비침, 두 겹이 최적!\n빛 확산 조절이 연등 비밀\n\n📍 충남 서산 마애삼존불 인근 공방\n🏮 서산 마애삼존불 세트 코스 추천\n\n#서산연등만들기 #서산 #충남여행 #한지연등 #전통공예',instagram:'서산 한지 연등 두 겹이 은은한 빛이에요 🏮\n\n한 겹은 직접 비침 두 겹이 최적 ✨\n불 밝히는 순간이 하이라이트\n\n📍 충남 서산 마애삼존불 인근\n\n#서산연등 #서산여행 #충남 #한지연등 #GemKorea',tiktok:'서산 한지 연등 꿀팁 🏮 두 겹이 은은한 빛이에요! 한 겹은 너무 직접 비쳐요 두 겹이 최적 // 불 밝히는 순간 은은한 빛 번짐이 하이라이트 #서산연등 #서산여행 #한지연등'},
    hashtags:{korean:['#한국여행','#충남여행','#서산여행','#전통공예','#GemKorea'],place_specific:['#서산한지연등','#연등두겹비밀','#빛확산조절','#마애삼존불세트']}
  },
  {
    experience_id:'EX-JJ-SCU-001', experience_name:'제주 스쿠버다이빙 체험', category_sub:'해양 레포츠', region:'제주특별자치도',
    script_30s:'오늘은 제주 서귀포 앞바다 스쿠버다이빙을 했어요. 수심 8m 바닷속이에요. 근데 아무도 안 알려주는 게 있어요 — 물속에서 귀가 아프면 코를 막고 살짝 압력을 주면 돼요. 그 방법이 평압이에요. 그걸 모르면 내려갈 수 없어요. 너무 그 기술 하나가 다이빙의 전부라서 좋았습니다.',
    script_60s:'오늘은 제주 서귀포 앞바다에서 강사 동반 체험 다이빙을 했어요. 자격증 없이도 강사와 함께 수심 5~8m 바닷속을 탐험하는 체험이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 다이빙 입문자들이 가장 많이 하는 실수가 이퀄라이제이션을 모르는 거예요. 물속으로 내려가면 수압이 높아지면서 귀가 아파요. 이때 코를 살짝 막고 코로 압력을 주면 귀가 뻥 뚫려요. 이걸 이퀄라이제이션 또는 평압이라고 해요. 이 기술을 모르면 통증 때문에 더 내려가지 못해요. 강사가 물속에서 이 동작을 가르쳐주는데 한 번만 배우면 영원히 기억나요. 이 기술 하나가 다이빙의 전부예요. 너무 코를 막는 그 동작 하나가 바닷속 세계를 열어줘서 좋았습니다.',
    secret_tip:'이퀄라이제이션(평압) = 코 막고 살짝 압력 주기 — 귀 통증 해소, 더 깊이 내려갈 수 있음. 이 기술 모르면 5m 이상 못 내려감. 강사 지도 시 집중. 제주 서귀포 산호초+열대어',
    filming_guide:'수중에서 이퀄라이제이션 동작 클로즈업. 산호초와 열대어 수중 파노라마. 수면으로 올라오는 버블 장면.',
    broll_ideas:['이퀄라이제이션 동작 클로즈업','산호초와 열대어 수중 파노라마','수면으로 올라오는 버블','제주 서귀포 바다 배경','체험 다이빙 강사 지도'],
    hooks:['스쿠버 귀 아프면 코 막고 압력 줘요','이퀄라이제이션이 다이빙 핵심이에요','이 기술 모르면 못 내려가요','코 막는 동작 하나가 바닷속 열어줘요','제주 체험 다이빙 꿀팁'],
    thumbnails:['이퀄라이제이션 동작 클로즈업','산호초 열대어 수중 파노라마','수면 버블 장면','서귀포 바다 배경','강사 지도'],
    captions:{youtube:'제주 체험 다이빙 — 귀 아프면 코 막고 압력 줘요 🤿\n\n이퀄라이제이션! 이 기술이 다이빙 핵심\n코 막는 동작 하나가 바닷속 열어줘요\n\n📍 제주 서귀포 체험 다이빙\n🤿 자격증 없이 강사 동반 가능\n\n#제주스쿠버다이빙 #제주여행 #서귀포 #체험다이빙 #이퀄라이제이션',instagram:'제주 스쿠버다이빙 귀 아프면 코 막고 압력 줘요 🤿\n\n이퀄라이제이션이 다이빙 핵심 ✨\n코 막는 동작 하나가 바닷속 세계 열어줘요\n\n📍 제주 서귀포\n\n#제주스쿠버 #제주여행 #서귀포 #체험다이빙 #GemKorea',tiktok:'제주 스쿠버 꿀팁 🤿 귀 아프면 코 막고 살짝 압력 주면 돼요! 이퀄라이제이션 이 기술 모르면 못 내려가요 // 코 막는 동작 하나가 바닷속 열어주는 마법 #제주스쿠버 #제주여행 #체험다이빙'},
    hashtags:{korean:['#한국여행','#제주여행','#서귀포','#스쿠버다이빙','#GemKorea'],place_specific:['#제주체험다이빙','#이퀄라이제이션','#귀통증해소','#산호초열대어']}
  },
  {
    experience_id:'EX-JN-OCN-003', experience_name:'통영 카약 다도해 투어', category_sub:'해양 레포츠', region:'전라남도',
    script_30s:'오늘은 여수 향일암 앞바다에서 카약을 탔어요. 다도해 섬 사이를 카약으로 가는 거예요. 근데 아무도 안 알려주는 게 있어요 — 카약은 팔이 아니라 허리 회전이에요. 팔로 젓는 게 아니라 몸통을 회전시켜야 해요. 그 감각이 오면 카약이 달라요. 너무 허리가 핵심이라는 게 좋았습니다.',
    script_60s:'오늘은 전남 여수 향일암 앞바다에서 카약으로 다도해 섬 사이를 탐험했어요. 향일암에서 출발해 남해 섬들 사이 좁은 해협을 카약으로 지나가는 체험이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 카약을 효율적으로 젓는 방법이 있어요. 대부분 초보자들이 팔 힘으로만 노를 젓는데 이렇게 하면 금방 지쳐요. 카약의 핵심 동기력은 허리 회전이에요. 왼쪽 노를 저을 때 오른쪽 허리를 앞으로 비틀고, 오른쪽 노를 저을 때 왼쪽 허리를 비틀면 팔이 아닌 몸통으로 추진력을 만들 수 있어요. 이 방법을 쓰면 팔이 아파지지 않고 훨씬 빠르게 나아가요. 강사가 이걸 가르쳐주는데 처음 이 감각이 오는 순간 카약이 완전히 달라져요. 너무 허리 회전이 이렇게 중요하다는 게 좋았습니다.',
    secret_tip:'카약 추진력 = 팔 아닌 허리 회전 — 반대쪽 허리 비틀기로 몸통 추진력. 이 방법이면 팔 안 아프고 빠름. 처음 감각 오는 순간 카약이 달라짐. 향일암 일출 카약 투어가 최고',
    filming_guide:'허리 회전 카약 노젓기 측면 클로즈업. 다도해 섬 사이 카약 파노라마. 향일암 배경 바다 위 카약.',
    broll_ideas:['허리 회전 노젓기 측면 클로즈업','다도해 섬 사이 카약 파노라마','향일암 배경 카약','좁은 해협 카약 통과','바다 위 카약과 일출'],
    hooks:['카약은 팔이 아니라 허리예요','허리 회전이 추진력이에요','이 감각 오면 카약이 달라요','팔 안 아프게 카약 타는 법','여수 다도해 카약 꿀팁'],
    thumbnails:['허리 회전 노젓기 클로즈업','다도해 카약 파노라마','향일암 배경 카약','좁은 해협 통과','카약과 일출'],
    captions:{youtube:'여수 다도해 카약 — 허리 회전이 핵심이에요 🚣\n\n팔 아닌 몸통 허리로 추진력!\n이 감각 오면 카약이 달라져요\n\n📍 전남 여수시 향일암 앞바다\n🚣 향일암 일출 카약 투어 추천\n\n#여수카약 #다도해카약 #여수여행 #전남여행 #향일암',instagram:'여수 다도해 카약 허리 회전이 핵심이에요 🚣\n\n팔 아닌 몸통으로 추진력 ✨\n이 감각 오면 카약이 달라져요\n\n📍 전남 여수 향일암 앞바다\n\n#여수카약 #다도해카약 #여수여행 #전남 #GemKorea',tiktok:'여수 다도해 카약 꿀팁 🚣 팔이 아니라 허리 회전이 핵심이에요! 반대쪽 허리 비틀면 팔 안 아프고 빠름 // 이 감각 오면 카약이 달라져요 #여수카약 #다도해카약 #여수여행'},
    hashtags:{korean:['#한국여행','#전남여행','#여수여행','#카약','#GemKorea'],place_specific:['#여수다도해카약','#카약허리회전','#향일암카약','#다도해섬사이']}
  },
  {
    experience_id:'EX-GJ-FUD-001', experience_name:'광주 무등산 약초 비빔밥 체험', category_sub:'발효/음식', region:'광주광역시',
    script_30s:'오늘은 광주 무등산 자락에서 약초 비빔밥을 만들었어요. 무등산에서 직접 뜯은 나물이에요. 근데 아무도 안 알려주는 게 있어요 — 산나물은 쓴맛이 약이에요. 쓴맛을 줄이려고 데치면 약성도 줄어요. 조금 쓴 게 더 몸에 좋아요. 너무 쓴맛이 가치가 있다는 게 좋았습니다.',
    script_60s:'오늘은 광주 무등산 자락에서 직접 채취한 약초와 산나물로 약선 비빔밥을 만들었어요. 도라지·취나물·고사리 등 무등산 산나물을 손질하고 조리해서 비빔밥을 완성하는 체험이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 산나물의 쓴맛이 사실 약성이에요. 도라지·더덕·참취 등 산나물이 쓴 이유가 식물이 생존을 위해 만드는 피토케미컬 성분 때문이에요. 이 성분이 인체에 들어오면 항산화·항염 효과를 내요. 그래서 산나물은 쓴맛을 완전히 없애려고 오래 데치면 안 돼요. 약간의 쓴맛이 남아있는 상태에서 먹어야 약선 효과가 있어요. 요리할 때 이 사실을 알고 조리하면 나물 하나하나의 쓴맛이 거부감이 아니라 약이라는 인식으로 바뀌어요. 너무 쓴맛이 가치 있는 것이라는 걸 알게 돼서 좋았습니다.',
    secret_tip:'산나물 쓴맛 = 피토케미컬 약성 — 오래 데치면 약성 줄어. 살짝 쓴맛 남겨야 항산화·항염 효과. 이 사실 알면 산나물 쓴맛 달리 느껴짐. 무등산 트레킹+약초 비빔밥 코스',
    filming_guide:'산나물 쓴맛 살짝 데치기 과정. 무등산 배경 약초 채취 장면. 완성 약선 비빔밥 클로즈업.',
    broll_ideas:['산나물 살짝 데치기 과정','무등산 배경 약초 채취','완성 약선 비빔밥 클로즈업','도라지 취나물 고사리 재료','무등산 자락 경관'],
    hooks:['산나물 쓴맛이 약이에요','오래 데치면 약성이 줄어요','쓴맛 남겨야 몸에 좋아요','피토케미컬 성분이 항산화예요','광주 무등산 약초 비빔밥 꿀팁'],
    thumbnails:['살짝 데치기 과정','무등산 약초 채취','약선 비빔밥 클로즈업','도라지 취나물 재료','무등산 경관'],
    captions:{youtube:'광주 무등산 약초 비빔밥 — 쓴맛이 약이에요 🌿\n\n오래 데치면 약성이 줄어요!\n피토케미컬 항산화 성분\n\n📍 광주광역시 무등산 자락 약선 체험\n🌿 무등산 트레킹+약초 비빔밥 코스\n\n#광주약초비빔밥 #무등산 #광주여행 #약선요리 #산나물쓴맛',instagram:'광주 약초 비빔밥 쓴맛이 약이에요 🌿\n\n오래 데치면 약성 줄어요 살짝 쓴게 최고 ✨\n피토케미컬 항산화 성분이에요\n\n📍 광주 무등산 자락\n\n#광주약초비빔밥 #무등산 #광주여행 #약선 #GemKorea',tiktok:'광주 약초 비빔밥 꿀팁 🌿 산나물 쓴맛이 약이에요! 오래 데치면 피토케미컬 약성이 줄어요 // 살짝 쓴게 항산화 항염 효과 있어요 #광주약초비빔밥 #무등산 #광주여행'},
    hashtags:{korean:['#한국여행','#광주여행','#무등산','#약선요리','#GemKorea'],place_specific:['#광주약초비빔밥','#산나물쓴맛약성','#피토케미컬','#무등산약초']}
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
