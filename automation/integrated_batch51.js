const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const now = new Date().toISOString().slice(0,19);

const newExps = [
  {experience_id:'EX-JJ-NAT-001',name:'제주 성산일출봉 일출',category_main:'문화/체험',category_sub:'자연체험',region_main:'JJ',region_sub:'제주특별자치도 서귀포시',address:'제주특별자치도 서귀포시 성산읍 일출로 284-12',lat:33.4589,lng:126.9422,price:'성인 5,000원',duration:'1~2시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'유네스코 세계자연유산 제주 성산일출봉에서 일출을 감상하는 체험이다. 10만 년 전 수중 화산 폭발로 생긴 성산일출봉 분화구에서 보는 일출이 제주 10경 제1경으로 꼽히는 장관이다.',source_urls:['https://www.jeju.go.kr/'],data_confidence:'high',tags:['성산일출봉일출','성산일출봉','제주','유네스코','일출','화산분화구','제주10경'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'일출 전~19:00',phone:'064-783-0959'},
  {experience_id:'EX-JJ-NAT-002',name:'제주 한라산 백록담 트레킹',category_main:'문화/체험',category_sub:'자연체험',region_main:'JJ',region_sub:'제주특별자치도 제주시',address:'제주특별자치도 제주시 해안동 한라산 성판악 탐방로',lat:33.3617,lng:126.5292,price:'무료',duration:'8~10시간',reservation_required:false,target_user:['개인'],nearby_places:[],related_heritage_ids:[],short_description:'제주 한라산 성판악 코스로 백록담 분화구 정상까지 트레킹하는 체험이다. 유네스코 세계자연유산·생물권보전지역·세계지질공원 3관왕 한라산은 한국 최고봉 1,950m 제주 트레킹의 정수다.',source_urls:['https://www.hallasan.go.kr/'],data_confidence:'high',tags:['한라산백록담','한라산','제주','백록담','성판악','유네스코세계자연유산','한국최고봉'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'05:30 입산 (시즌별 다름)',phone:'064-713-9950'},
  {experience_id:'EX-JJ-NAT-003',name:'제주 우도 자전거 투어',category_main:'문화/체험',category_sub:'어드벤처/레포츠',region_main:'JJ',region_sub:'제주특별자치도 제주시',address:'제주특별자치도 제주시 우도면 우도',lat:33.5028,lng:126.9511,price:'자전거 대여 1시간 3,000원~',duration:'4~6시간',reservation_required:false,target_user:['개인','커플','가족'],nearby_places:[],related_heritage_ids:[],short_description:'제주도 동쪽 소섬 우도에서 자전거로 섬 한 바퀴를 도는 체험이다. 에메랄드빛 산호해수욕장·우도 땅콩아이스크림·검은모래해변·돌담 풍경이 어우러지는 우도는 제주 인기 당일 섬 여행지다.',source_urls:['https://www.udo.go.kr/'],data_confidence:'high',tags:['우도자전거투어','우도','제주','제주우도','산호해수욕장','자전거','섬여행'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'배편 첫배~막배 시간 확인',phone:'064-728-7923'},
  {experience_id:'EX-JJ-NAT-004',name:'제주 협재·금능 해변 스노클링',category_main:'문화/체험',category_sub:'어드벤처/레포츠',region_main:'JJ',region_sub:'제주특별자치도 제주시',address:'제주특별자치도 제주시 한림읍 협재리 협재해수욕장',lat:33.3944,lng:126.2394,price:'무료~장비 대여 15,000원~',duration:'2~3시간',reservation_required:false,target_user:['개인','커플','가족'],nearby_places:[],related_heritage_ids:[],short_description:'제주 서부 협재·금능 해변에서 스노클링을 즐기는 체험이다. 에메랄드빛 투명한 수질과 비양도가 보이는 협재해수욕장에서 물고기와 산호초를 직접 볼 수 있는 제주 최고 스노클링 명소다.',source_urls:['https://www.jeju.go.kr/'],data_confidence:'high',tags:['협재해변스노클링','협재','제주','금능','스노클링','에메랄드바다','비양도'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'seasonal',operating_hours:'6~9월 스노클링 시즌',phone:'064-728-4043'},
  {experience_id:'EX-JJ-CUL-001',name:'제주 오메기떡 만들기',category_main:'문화/체험',category_sub:'지역 먹거리',region_main:'JJ',region_sub:'제주특별자치도 제주시',address:'제주특별자치도 제주시 일대 체험 공방',lat:33.4996,lng:126.5312,price:'체험 15,000원~',duration:'1~2시간',reservation_required:true,target_user:['가족','개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'제주 전통 향토 음식 오메기떡을 직접 만드는 체험이다. 차조로 만든 제주 전통 떡 오메기떡에 팥고물을 묻혀 만드는 과정을 체험하며 제주 향토 음식 문화를 배우는 가족 체험이다.',source_urls:['https://www.jeju.go.kr/'],data_confidence:'high',tags:['오메기떡만들기','제주','오메기떡','차조','향토음식','제주전통떡','체험'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'10:00~17:00 (예약 필수)',phone:'064-728-2001'},
  {experience_id:'EX-JJ-NAT-005',name:'제주 비자림 숲 산책',category_main:'문화/체험',category_sub:'자연체험',region_main:'JJ',region_sub:'제주특별자치도 제주시',address:'제주특별자치도 제주시 구좌읍 비자숲길 55',lat:33.4844,lng:126.8039,price:'성인 3,000원',duration:'1~2시간',reservation_required:false,target_user:['개인','커플','가족'],nearby_places:[],related_heritage_ids:[],short_description:'제주 구좌읍 비자림 숲에서 천년 비자나무 숲길을 산책하는 체험이다. 448년~1,000년 수령 비자나무 2,800그루가 자생하는 국내 최대 비자나무 군락으로 진초록 이끼와 비자나무가 어우러지는 신비로운 숲이다.',source_urls:['https://www.jeju.go.kr/'],data_confidence:'high',tags:['제주비자림','비자림','제주','구좌','비자나무','천년숲','이끼'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00',phone:'064-783-3857'},
  {experience_id:'EX-JJ-NAT-006',name:'제주 천지연 폭포',category_main:'문화/체험',category_sub:'자연체험',region_main:'JJ',region_sub:'제주특별자치도 서귀포시',address:'제주특별자치도 서귀포시 천지동 667-7',lat:33.2453,lng:126.5594,price:'성인 2,000원',duration:'1시간',reservation_required:false,target_user:['개인','커플','가족'],nearby_places:[],related_heritage_ids:[],short_description:'제주 서귀포 천지연 폭포를 탐방하는 자연 체험이다. 높이 22m 폭포가 쏟아지는 천지연은 천연기념물 무태장어 서식지이며 폭포 상류 계곡이 아열대 식물이 자생하는 신비로운 자연 보호 구역이다.',source_urls:['https://www.jeju.go.kr/'],data_confidence:'high',tags:['천지연폭포','서귀포','제주','천지연','폭포','무태장어','아열대식물'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~22:00',phone:'064-760-6304'},
  {experience_id:'EX-JJ-CUL-002',name:'제주 흑돼지 구이 체험',category_main:'문화/체험',category_sub:'지역 먹거리',region_main:'JJ',region_sub:'제주특별자치도 제주시',address:'제주특별자치도 제주시 연동 흑돼지거리 일대',lat:33.4894,lng:126.4986,price:'2인 기준 40,000원~',duration:'1~2시간',reservation_required:false,target_user:['개인','커플','가족'],nearby_places:[],related_heritage_ids:[],short_description:'제주 흑돼지 특산물을 연탄불에 직접 구워 먹는 먹거리 체험이다. 제주 연동 흑돼지거리에서 제주 토종 흑돼지 오겹살을 연탄불에 구워 성게젓·멜젓·갈치젓과 함께 먹는 제주 대표 먹거리 체험이다.',source_urls:['https://www.jeju.go.kr/'],data_confidence:'high',tags:['제주흑돼지구이','제주흑돼지','제주','연동','오겹살','연탄불','성게젓'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'11:00~22:00',phone:'064-744-0077'},
  {experience_id:'EX-JJ-NAT-007',name:'제주 만장굴 탐험',category_main:'문화/체험',category_sub:'자연체험',region_main:'JJ',region_sub:'제주특별자치도 제주시',address:'제주특별자치도 제주시 구좌읍 만장굴길 182',lat:33.5269,lng:126.7706,price:'성인 4,000원',duration:'1시간',reservation_required:false,target_user:['가족','개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'유네스코 세계자연유산 제주 만장굴을 탐험하는 체험이다. 세계 최대급 용암동굴 만장굴의 1km 구간 탐방로를 걸으며 높이 7.6m 거대한 용암석주와 세계 최대 용암 석주를 직접 보는 체험이다.',source_urls:['https://www.jeju.go.kr/'],data_confidence:'high',tags:['만장굴','제주','구좌','용암동굴','유네스코세계자연유산','용암석주','세계최대'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00 (화 휴관)',phone:'064-710-7903'},
  {experience_id:'EX-JJ-NAT-008',name:'제주 섭지코지 일출',category_main:'문화/체험',category_sub:'자연체험',region_main:'JJ',region_sub:'제주특별자치도 서귀포시',address:'제주특별자치도 서귀포시 성산읍 섭지코지로 107',lat:33.4303,lng:126.9281,price:'무료',duration:'1시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'제주 동쪽 끝 섭지코지에서 성산일출봉과 함께하는 일출을 감상하는 체험이다. 섭지코지 해안 절벽에서 성산일출봉이 정면에 보이는 뷰가 제주 최고 인생샷 포인트로 드라마·영화 촬영지로도 유명하다.',source_urls:['https://www.jeju.go.kr/'],data_confidence:'high',tags:['섭지코지일출','섭지코지','제주','성산','성산일출봉','일출','드라마촬영지'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'새벽 04:00~ (무료)',phone:'064-782-2810'},
  {experience_id:'EX-JJ-NAT-009',name:'제주 오름 트레킹 — 다랑쉬',category_main:'문화/체험',category_sub:'자연체험',region_main:'JJ',region_sub:'제주특별자치도 제주시',address:'제주특별자치도 제주시 구좌읍 세화리 다랑쉬오름',lat:33.4833,lng:126.8264,price:'무료',duration:'1~2시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'제주 오름의 왕 구좌읍 다랑쉬오름을 트레킹하는 체험이다. 오름 중 가장 아름다운 형태를 가진 다랑쉬오름 정상에서 제주 동부 오름 군락과 성산일출봉이 한눈에 내려다보이는 360도 파노라마 전망이다.',source_urls:['https://www.jeju.go.kr/'],data_confidence:'high',tags:['다랑쉬오름','다랑쉬','제주','구좌','오름트레킹','오름의왕','제주오름'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (무료)',phone:'064-728-3012'},
  {experience_id:'EX-JJ-CUL-003',name:'제주 해녀 체험',category_main:'문화/체험',category_sub:'역사 체험',region_main:'JJ',region_sub:'제주특별자치도 제주시',address:'제주특별자치도 제주시 구좌읍 해녀박물관길 26',lat:33.5494,lng:126.8156,price:'박물관 성인 1,100원',duration:'1~2시간',reservation_required:false,target_user:['개인','커플','가족'],nearby_places:[],related_heritage_ids:[],short_description:'유네스코 인류무형문화유산 제주 해녀 문화를 체험하는 코스다. 해녀박물관에서 제주 해녀의 역사와 문화를 배우고 해녀 물질 시연을 관람하며 제주 해녀의 강인한 삶을 체험한다.',source_urls:['https://www.haenyeo.go.kr/'],data_confidence:'high',tags:['제주해녀체험','해녀박물관','제주','구좌','해녀','유네스코','물질'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00 (월 휴관)',phone:'064-782-9898'}
];

const newShorts = [
  {
    experience_id:'EX-JJ-NAT-001', experience_name:'제주 성산일출봉 일출', category_sub:'자연체험', region:'제주특별자치도',
    script_30s:'오늘은 성산일출봉에서 일출을 봤어요. 유네스코 세계자연유산이에요. 근데 아무도 안 알려주는 게 있어요 — 성산일출봉이 수중에서 폭발한 화산이에요. 그래서 분화구 바닥이 평평해요. 육지 화산과 달리 수중 폭발이라 분화구 형태가 달라요. 너무 폭발 위치가 이렇게 모양을 만든다는 게 좋았습니다.',
    script_60s:'오늘은 제주 성산일출봉에서 일출을 감상했어요. 제주 10경 제1경이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 성산일출봉이 왜 이런 독특한 형태인지 아세요? 성산일출봉은 10만 년 전 바닷속에서 화산이 폭발해 생긴 수성화산이에요. 육지 화산은 용암이 흘러나오면서 원뿔 모양이 되지만 수중 화산은 물이 폭발을 막아 분화구가 평평하고 넓은 사발 모양이 돼요. 그게 성산일출봉 분화구예요. 분화구 바닥이 평평한 초지로 이루어져 있어요. 그리고 성산이라는 이름은 성(城, 성벽)처럼 생긴 산이라는 뜻이에요. 주변에서 보면 성벽같이 가파른 절벽이 사방을 둘러싸고 있어요. 일출 때 황금빛 해가 분화구 옆으로 솟아오르는 장면이 제주 대표 일출이에요. 새벽 5시 도착 필수예요. 너무 폭발 위치가 이렇게 독특한 모양을 만든다는 게 좋았습니다.',
    secret_tip:'성산일출봉 = 10만 년 전 수중 화산 폭발 수성화산 — 수중 폭발이라 분화구 평평한 사발 모양. 성(城)처럼 가파른 절벽. 새벽 5시 도착 필수. 일출 전 입장권 미리 구매 권장',
    filming_guide:'성산일출봉 분화구 위에서 일출 장면. 수중 화산 형태 절벽 클로즈업. 일출봉 전체 원거리.',
    broll_ideas:['일출봉 위 황금빛 일출','수중 화산 절벽 클로즈업','일출봉 전체 원거리','분화구 초지 전경','새벽 일출봉 실루엣'],
    hooks:['수중에서 폭발한 화산이에요','그래서 분화구가 평평해요','육지 화산이랑 모양이 달라요','새벽 5시 도착이 필수예요','성산일출봉 꿀팁'],
    thumbnails:['황금빛 일출','수중 화산 절벽','일출봉 전체','분화구 초지','새벽 실루엣'],
    captions:{youtube:'성산일출봉 일출 — 수중에서 폭발한 화산이에요 🌋\n\n분화구가 평평한 사발 모양인 이유!\n새벽 5시 도착 필수\n\n📍 제주 서귀포시 성산읍 일출로 284-12\n🌋 유네스코 세계자연유산\n\n#성산일출봉일출 #성산일출봉 #제주 #제주여행 #유네스코세계자연유산',instagram:'성산일출봉 일출 수중에서 폭발한 화산이에요 🌋\n\n수중 폭발이라 분화구 평평한 사발 모양 ✨\n새벽 5시 도착 필수예요\n\n📍 제주 성산일출봉\n\n#성산일출봉 #제주여행 #서귀포 #일출 #GemKorea',tiktok:'성산일출봉 꿀팁 🌋 수중에서 폭발한 화산이에요! 그래서 분화구가 평평한 사발 모양 // 새벽 5시 도착이 필수예요 #성산일출봉일출 #제주여행'},
    hashtags:{korean:['#한국여행','#제주여행','#서귀포','#성산일출봉','#GemKorea'],place_specific:['#성산일출봉수중화산수성화산','#분화구평평사발모양이유','#성城처럼가파른절벽','#새벽5시도착필수']}
  },
  {
    experience_id:'EX-JJ-NAT-002', experience_name:'제주 한라산 백록담 트레킹', category_sub:'자연체험', region:'제주특별자치도',
    script_30s:'오늘은 한라산 백록담에 올랐어요. 근데 아무도 안 알려주는 게 있어요 — 백록담이 화구호예요. 화산 분화구에 물이 고인 거예요. 그런데 화구호가 있으려면 물이 새면 안 돼요. 한라산 지질이 물을 가뒀어요. 너무 지질이 이렇게 호수를 만든다는 게 좋았습니다.',
    script_60s:'오늘은 제주 한라산 성판악 코스로 백록담까지 트레킹을 완주했어요. 한국 최고봉 1,950m예요. 근데 아무도 안 알려주는 꿀팁 하나 — 백록담이 왜 물이 고이는지 아세요? 백록담은 화산 분화구에 물이 고인 화구호예요. 그런데 화산암은 구멍이 많아 물이 잘 새는데 왜 백록담은 물이 고일까요? 백록담 분화구 바닥이 조면암이라는 특수한 화산암으로 이루어져 있어요. 조면암은 다른 화산암보다 치밀해서 물이 잘 새지 않아요. 그 지질 조건 덕분에 분화구에 물이 고여 호수가 된 거예요. 그리고 백록담의 백록(白鹿)은 흰 사슴이에요. 신선이 흰 사슴을 타고 내려와 물을 마셨다는 전설에서 이름이 왔어요. 성판악 코스 왕복 19.2km로 하루 계획해야 해요. 너무 지질이 이렇게 호수를 만든다는 게 좋았습니다.',
    secret_tip:'백록담 = 조면암 치밀한 화산암이 물 새지 않게 해 화구호 형성 — 백록(白鹿)=신선의 흰 사슴 전설. 성판악 코스 왕복 19.2km 하루 일정. 입산 마감 12시 엄수. 예약제 탐방',
    filming_guide:'백록담 분화구 호수 전경. 한라산 정상 1950m 표지석. 성판악 코스 단풍 숲.',
    broll_ideas:['백록담 분화구 호수 전경','정상 1950m 표지석','단풍 성판악 숲','구름 위 한라산 정상','백록담 반영'],
    hooks:['백록담이 화구호예요','조면암이 물을 가뒀어요','흰 사슴 전설에서 이름이 왔어요','성판악 왕복 19.2km예요','한라산 꿀팁'],
    thumbnails:['백록담 분화구 호수','정상 표지석','단풍 성판악','구름 위 정상','백록담 반영'],
    captions:{youtube:'한라산 백록담 — 조면암이 물을 가두는 화구호예요 🏔️\n\n화산암이 물 새지 않게 해서 호수 형성!\n백록(白鹿) 흰 사슴 전설\n\n📍 제주 한라산 성판악 코스 왕복 19.2km\n🏔️ 유네스코 세계자연유산 한국 최고봉\n\n#한라산백록담 #한라산 #제주 #제주여행 #한국최고봉',instagram:'한라산 백록담 조면암이 물을 가두는 화구호예요 🏔️\n\n화산암 치밀해서 물 안 새 화구호 형성 ✨\n백록(白鹿) 흰 사슴 신선 전설\n\n📍 제주 한라산\n\n#한라산백록담 #한라산 #제주여행 #유네스코 #GemKorea',tiktok:'한라산 꿀팁 🏔️ 백록담이 화구호예요! 조면암이 물이 안 새게 해서 분화구에 호수 형성 // 백록(白鹿)은 신선의 흰 사슴 전설이에요 #한라산백록담 #제주여행'},
    hashtags:{korean:['#한국여행','#제주여행','#한라산','#백록담','#GemKorea'],place_specific:['#한라산백록담조면암화구호','#화산암치밀물안새화구호','#백록白鹿흰사슴신선전설','#성판악왕복19.2km입산마감12시']}
  },
  {
    experience_id:'EX-JJ-NAT-003', experience_name:'제주 우도 자전거 투어', category_sub:'어드벤처/레포츠', region:'제주특별자치도',
    script_30s:'오늘은 제주 우도에서 자전거를 탔어요. 소섬이에요. 근데 아무도 안 알려주는 게 있어요 — 우도 땅콩아이스크림이 우도에서만 먹어야 맛있어요. 여기 땅콩이 우도 현무암 토양에서 자라요. 육지 거 아니에요. 너무 땅이 이렇게 맛을 만든다는 게 좋았습니다.',
    script_60s:'오늘은 제주도 동쪽 소섬 우도에서 자전거로 섬 한 바퀴를 돌았어요. 우도는 제주 가장 인기 있는 당일 섬 여행지예요. 근데 아무도 안 알려주는 꿀팁 하나 — 우도 땅콩아이스크림의 진짜 비밀이 있어요. 우도 땅콩아이스크림이 유명한데 우도 현지 땅콩이 들어간 것과 그냥 땅콩 가루만 쓴 것이 있어요. 진짜 우도 땅콩이 들어간 가게는 가격이 좀 더 비싸요. 우도 현무암 토양은 배수가 좋고 미네랄이 풍부해서 땅콩 맛이 더 고소해요. 그리고 우도 서쪽 하고수동해수욕장은 에메랄드빛 바다가 제주 최고 수준이에요. 동쪽 산호해수욕장은 검은 모래 해변이에요. 자전거로 한 바퀴 돌면 두 해변의 전혀 다른 풍경을 같은 날 볼 수 있어요. 섬 한 바퀴 17km이에요. 너무 땅이 이렇게 맛을 만든다는 게 좋았습니다.',
    secret_tip:'우도 땅콩아이스크림 = 우도 현무암 토양 재배 땅콩이 고소한 이유 — 진짜 우도 땅콩 vs 가루만 구분 필수. 하고수동 에메랄드+산호(검은 모래) 전혀 다른 두 해변 자전거 세트. 섬 한 바퀴 17km',
    filming_guide:'우도 하고수동 에메랄드 바다 드론. 자전거 타며 바다 배경. 땅콩아이스크림 클로즈업.',
    broll_ideas:['하고수동 에메랄드 바다 드론','자전거 타며 바다 배경','땅콩아이스크림 클로즈업','산호(검은 모래) 해변','우도 전경'],
    hooks:['우도 현무암 토양 땅콩이 고소한 이유예요','진짜 우도 땅콩 구분이 필요해요','에메랄드+검은 모래 두 해변이에요','섬 한 바퀴 17km예요','우도 자전거 꿀팁'],
    thumbnails:['하고수동 에메랄드','자전거 타며 바다','땅콩아이스크림','검은 모래 해변','우도 전경'],
    captions:{youtube:'제주 우도 자전거 투어 — 땅콩아이스크림이 여기서 더 맛있는 이유 🚲\n\n현무암 토양이 땅콩을 고소하게!\n에메랄드+검은 모래 두 해변 자전거\n\n📍 제주 제주시 우도면 우도 (17km)\n🚲 제주 최인기 당일 섬 여행지\n\n#우도자전거투어 #우도 #제주 #제주여행 #우도땅콩아이스크림',instagram:'제주 우도 자전거 투어 땅콩이 여기서 더 맛있는 이유 🚲\n\n현무암 토양이 땅콩 고소하게 ✨\n에메랄드+검은 모래 두 해변 세트\n\n📍 제주 우도\n\n#우도자전거투어 #우도 #제주여행 #땅콩아이스크림 #GemKorea',tiktok:'우도 자전거 꿀팁 🚲 땅콩아이스크림이 더 맛있는 이유가 있어요! 우도 현무암 토양 땅콩이 고소함 // 에메랄드+검은 모래 두 해변 자전거로 세트 #우도자전거 #우도 #제주여행'},
    hashtags:{korean:['#한국여행','#제주여행','#우도','#자전거투어','#GemKorea'],place_specific:['#우도자전거투어현무암토양땅콩','#진짜우도땅콩아이스크림','#하고수동에메랄드산호검은모래','#섬한바퀴17km']}
  },
  {
    experience_id:'EX-JJ-NAT-007', experience_name:'제주 만장굴 탐험', category_sub:'자연체험', region:'제주특별자치도',
    script_30s:'오늘은 만장굴을 탐험했어요. 세계 최대 용암동굴이에요. 근데 아무도 안 알려주는 게 있어요 — 만장굴 안이 여름에 더 시원해요. 13~14도예요. 한여름 피서지예요. 외부보다 20도 차이나요. 너무 동굴이 이렇게 자연 에어컨이라는 게 좋았습니다.',
    script_60s:'오늘은 제주 만장굴을 탐험했어요. 유네스코 세계자연유산이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 만장굴의 자연 에어컨 효과가 있어요. 만장굴은 7,416m 길이로 세계 최대 용암동굴이에요. 관람 구간은 1km예요. 이 동굴 안 온도가 연중 13~14도로 일정해요. 한여름 제주 기온이 35도까지 오를 때 만장굴 안에 들어가면 20도 이상 차이가 나요. 자연 에어컨이에요. 반대로 겨울에는 외부보다 따뜻해요. 이 온도 안정성 때문에 동굴 생물이 살 수 있어요. 그리고 만장굴 끝에 있는 높이 7.6m 용암석주는 세계에서 가장 큰 단일 용암석주예요. 화산 용암이 굳어 만든 천연 기둥이에요. 반드시 끝까지 가서 이 석주를 봐야 해요. 너무 동굴이 이렇게 자연 에어컨이라는 게 좋았습니다.',
    secret_tip:'만장굴 연중 13~14도 = 여름 한낮 20도 차이 자연 에어컨 — 겨울엔 반대로 따뜻. 세계 최대 단일 용암석주 7.6m 반드시 끝까지 관람. 화요일 휴관 확인. 비자림 세트 코스',
    filming_guide:'만장굴 용암석주 7.6m 전체 샷. 동굴 내부 조명. 관람 구간 1km 전경.',
    broll_ideas:['용암석주 7.6m 전체 샷','동굴 내부 조명','관람 구간 1km 전경','동굴 천장 용암 흔적','입구 여름 서늘함'],
    hooks:['만장굴이 여름에 20도 시원해요','자연 에어컨이에요','세계 최대 용암석주가 있어요','끝까지 가야 해요','만장굴 꿀팁'],
    thumbnails:['용암석주 7.6m','동굴 내부 조명','관람 1km 전경','천장 용암 흔적','여름 입구 서늘함'],
    captions:{youtube:'제주 만장굴 — 여름에 자연 에어컨이에요 🦕\n\n연중 13~14도 여름 20도 차이!\n세계 최대 7.6m 용암석주 반드시 끝까지\n\n📍 제주 제주시 구좌읍 만장굴길 182\n🦕 유네스코 세계자연유산 세계 최대 용암동굴\n\n#제주만장굴 #만장굴 #제주 #제주여행 #유네스코세계자연유산',instagram:'제주 만장굴 여름에 자연 에어컨이에요 🦕\n\n연중 13~14도 여름 20도 차이 ✨\n세계 최대 단일 용암석주 7.6m 반드시 끝까지\n\n📍 제주 만장굴\n\n#제주만장굴 #만장굴 #제주여행 #유네스코 #GemKorea',tiktok:'만장굴 꿀팁 🦕 여름에 자연 에어컨이에요! 연중 13~14도 한여름 20도 차이 // 세계 최대 7.6m 용암석주 반드시 끝까지 가야 해요 #제주만장굴 #만장굴 #제주여행'},
    hashtags:{korean:['#한국여행','#제주여행','#만장굴','#용암동굴','#GemKorea'],place_specific:['#만장굴연중13~14도자연에어컨','#여름20도차이한여름피서지','#세계최대단일용암석주7.6m','#화요일휴관']}
  },
  {
    experience_id:'EX-JJ-CUL-002', experience_name:'제주 흑돼지 구이 체험', category_sub:'지역 먹거리', region:'제주특별자치도',
    script_30s:'오늘은 제주 흑돼지 오겹살을 먹었어요. 근데 아무도 안 알려주는 게 있어요 — 제주 흑돼지가 일반 돼지보다 지방이 적고 단백질이 높아요. 방목해서 운동량이 많아요. 너무 운동이 이렇게 고기를 만든다는 게 좋았습니다.',
    script_60s:'오늘은 제주 연동 흑돼지거리에서 연탄불 오겹살을 즐겼어요. 제주 대표 먹거리예요. 근데 아무도 안 알려주는 꿀팁 하나 — 제주 흑돼지가 왜 더 맛있는지 아세요? 제주 흑돼지는 천연기념물 제주 재래흑돼지예요. 일반 돼지보다 지방이 적고 단백질과 불포화지방산이 높아요. 이유가 있어요. 제주 흑돼지는 반방목 형태로 키워요. 넓은 공간을 뛰어다니며 운동량이 많아서 근육질 체형이에요. 그래서 고기가 탄탄하고 씹는 맛이 있어요. 그리고 제주 흑돼지는 독특하게 성게젓·멜젓(멸치젓)·갈치젓과 함께 먹어요. 이 짭조름한 제주 젓갈이 흑돼지의 담백한 맛을 극대화해요. 연탄불이 핵심이에요. 연탄불 특유의 원적외선이 고기 안쪽까지 균일하게 익혀요. 너무 운동이 이렇게 고기 맛을 만든다는 게 좋았습니다.',
    secret_tip:'제주 흑돼지 = 천연기념물 재래흑돼지 반방목 운동량 많아 근육질 — 지방 적고 단백질 높음. 성게젓+멜젓+갈치젓과 조합이 핵심. 연탄불 원적외선 균일하게 익힘. 연동 흑돼지거리 1인 12,000원~',
    filming_guide:'연탄불 위 흑돼지 오겹살 굽는 장면. 성게젓·멜젓 조합 클로즈업. 흑돼지 육색 클로즈업.',
    broll_ideas:['연탄불 흑돼지 굽기','성게젓 멜젓 조합 클로즈업','흑돼지 육색 클로즈업','연동 흑돼지거리 전경','먹는 표정'],
    hooks:['방목해서 운동량이 많아요','지방이 적고 단백질이 높아요','성게젓과 함께 먹어야 해요','연탄불이 핵심이에요','제주 흑돼지 꿀팁'],
    thumbnails:['연탄불 굽기','성게젓 조합','흑돼지 육색','흑돼지거리 전경','먹는 표정'],
    captions:{youtube:'제주 흑돼지 — 방목해서 지방 적고 단백질 높아요 🐷\n\n운동량이 많아 근육질 탄탄한 고기!\n성게젓+멜젓 조합이 핵심\n\n📍 제주 제주시 연동 흑돼지거리\n🐷 천연기념물 제주 재래흑돼지 연탄불\n\n#제주흑돼지구이 #제주흑돼지 #제주 #제주여행 #흑돼지거리',instagram:'제주 흑돼지 방목해서 지방 적고 단백질 높아요 🐷\n\n운동량 많아 근육질 탄탄한 고기 ✨\n성게젓+멜젓 조합이 핵심\n\n📍 제주 연동 흑돼지거리\n\n#제주흑돼지 #흑돼지거리 #제주여행 #흑돼지 #GemKorea',tiktok:'제주 흑돼지 꿀팁 🐷 방목 운동량이 많아서 지방 적고 단백질 높아요! 성게젓+멜젓 조합이 핵심 // 연탄불 원적외선이 균일하게 익혀요 #제주흑돼지구이 #제주여행'},
    hashtags:{korean:['#한국여행','#제주여행','#제주흑돼지','#흑돼지거리','#GemKorea'],place_specific:['#제주흑돼지천연기념물반방목','#운동량많아지방적고단백질높음','#성게젓멜젓갈치젓조합핵심','#연탄불원적외선균일']}
  },
  {
    experience_id:'EX-JJ-CUL-003', experience_name:'제주 해녀 체험', category_sub:'역사 체험', region:'제주특별자치도',
    script_30s:'오늘은 제주 해녀박물관에 왔어요. 유네스코 문화유산이에요. 근데 아무도 안 알려주는 게 있어요 — 해녀가 숨비소리를 내요. 잠수 후 물 밖으로 나오며 내쉬는 소리예요. 그 소리가 건강 상태를 알 수 있어요. 너무 소리가 이렇게 의미있다는 게 좋았습니다.',
    script_60s:'오늘은 제주 해녀박물관에서 해녀 문화를 체험했어요. 유네스코 인류무형문화유산이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 해녀의 숨비소리 비밀이 있어요. 해녀가 잠수했다가 수면 위로 올라올 때 특유의 소리를 내요. 이 소리를 숨비소리라고 해요. 휘~익 하는 고음의 소리예요. 이건 단순한 숨쉬기가 아니에요. 해녀들은 잠수할 때 폐에 공기를 가득 채우고 내려가요. 잠수 중 혈중 이산화탄소가 쌓여요. 수면 위로 올라와 입을 작게 오므리고 이산화탄소를 먼저 내보내고 산소를 빠르게 교환하는 특수 호흡법이에요. 이 과정에서 숨비소리가 나요. 경험 있는 해녀는 숨비소리만 들어도 상대방의 건강 상태를 알 수 있어요. 소리가 약하면 무리하고 있다는 신호예요. 너무 소리가 이렇게 의미있다는 게 좋았습니다.',
    secret_tip:'해녀 숨비소리 = 잠수 후 이산화탄소 배출+산소 교환 특수 호흡법 — 휘~익 고음. 숨비소리로 건강 상태 파악 가능. 소리 약하면 무리 신호. 유네스코 인류무형문화유산. 해녀물질 시연 관람 가능',
    filming_guide:'해녀 숨비소리 내는 순간 클로즈업. 해녀 물질 잠수 장면. 해녀박물관 전시.',
    broll_ideas:['숨비소리 내는 순간 클로즈업','해녀 물질 잠수 장면','해녀박물관 전시','테왁망사리 도구 클로즈업','해녀 복장 자료'],
    hooks:['숨비소리가 해녀 호흡법이에요','이산화탄소 배출이 목적이에요','소리로 건강 상태를 알아요','소리 약하면 무리 신호예요','제주 해녀 꿀팁'],
    thumbnails:['숨비소리 클로즈업','해녀 물질 잠수','해녀박물관 전시','테왁망사리 도구','해녀 복장'],
    captions:{youtube:'제주 해녀 — 숨비소리가 특수 호흡법이에요 🌊\n\n이산화탄소 배출+산소 교환 호흡!\n소리로 건강 상태를 파악해요\n\n📍 제주 제주시 구좌읍 해녀박물관길 26\n🌊 유네스코 인류무형문화유산\n\n#제주해녀체험 #해녀박물관 #제주 #제주여행 #유네스코해녀',instagram:'제주 해녀 숨비소리가 특수 호흡법이에요 🌊\n\n이산화탄소 배출+산소 교환 ✨\n소리로 건강 상태 파악 가능\n\n📍 제주 해녀박물관\n\n#제주해녀 #해녀박물관 #제주여행 #유네스코 #GemKorea',tiktok:'제주 해녀 꿀팁 🌊 숨비소리가 특수 호흡법이에요! 이산화탄소 배출+산소 교환 // 소리 약하면 무리하는 신호예요 #제주해녀체험 #해녀박물관 #제주여행'},
    hashtags:{korean:['#한국여행','#제주여행','#해녀박물관','#제주해녀','#GemKorea'],place_specific:['#제주해녀숨비소리특수호흡법','#이산화탄소배출산소교환','#소리로건강상태파악','#유네스코인류무형문화유산']}
  }
];

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
  newShortList.push({id, experience_id:s.experience_id, experience_name:s.experience_name, content_type:'experience', category_sub:s.category_sub, region:s.region, generated_at:now, content_status:'review_pending', script_30s:s.script_30s, script_60s:s.script_60s, secret_tip:s.secret_tip, filming_guide:s.filming_guide, broll_ideas:s.broll_ideas, hooks:s.hooks, thumbnails:s.thumbnails, captions:s.captions, hashtags:s.hashtags});
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
