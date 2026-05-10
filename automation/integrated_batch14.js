const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const now = new Date().toISOString().slice(0,19);

const newExps = [
  {experience_id:'EX-JN-NAT-011',name:'해남 땅끝 마을 투어',category_main:'문화/체험',category_sub:'자연체험',region_main:'JN',region_sub:'전라남도 해남군',address:'전라남도 해남군 송지면 땅끝마을길 97',lat:34.2839,lng:126.5358,price:'케이블카 왕복 6,000원',duration:'1~2시간',reservation_required:false,target_user:['가족','개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'한반도 최남단 땅끝마을을 탐방하는 체험이다. 한반도 지도에서 가장 남쪽 끄트머리에 해당하는 사자봉까지 모노레일을 타고 올라가면 남해 다도해가 파노라마로 펼쳐진다.',source_urls:['https://www.haenam.go.kr/'],data_confidence:'high',tags:['땅끝마을','해남','전남','한반도최남단','사자봉','다도해','모노레일'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00',phone:'061-534-8989'},
  {experience_id:'EX-GN-NAT-010',name:'사천 비토섬 갯벌+일몰',category_main:'문화/체험',category_sub:'자연체험',region_main:'GN',region_sub:'경상남도 사천시',address:'경상남도 사천시 서포면 비토리 비토섬',lat:34.9558,lng:128.0358,price:'무료',duration:'2~3시간',reservation_required:false,target_user:['가족','커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'남해 다도해에 숨겨진 비토섬에서 갯벌 체험과 서해 일몰을 함께 즐기는 체험이다. 토끼와 거북이 이야기 전설이 깃든 섬으로 썰물 때 갯벌이 드러나면 바지락·게를 잡을 수 있다.',source_urls:['https://www.sacheon.go.kr/'],data_confidence:'high',tags:['비토섬','사천','경남','갯벌','일몰','다도해','토끼거북이'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (조석표 확인)',phone:'055-831-2114'},
  {experience_id:'EX-JB-NAT-004',name:'부안 격포 채석강 석양 투어',category_main:'문화/체험',category_sub:'자연체험',region_main:'JB',region_sub:'전라북도 부안군',address:'전라북도 부안군 변산면 격포리 채석강',lat:35.6044,lng:126.4917,price:'무료',duration:'1~2시간',reservation_required:false,target_user:['커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'변산반도 격포 채석강에서 저녁 석양을 감상하는 체험이다. 7천만 년 전 퇴적암 절벽이 일몰 빛에 황금빛으로 물드는 장면이 1시간 중 5분간 펼쳐지는 서해 일몰 명소다.',source_urls:['https://www.buan.go.kr/'],data_confidence:'high',tags:['채석강','격포','부안','전북','석양','서해일몰','퇴적암'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중',phone:'063-580-4434'},
  {experience_id:'EX-GN-NAT-011',name:'하동 지리산 쌍계사 벚꽃 투어',category_main:'문화/체험',category_sub:'자연체험',region_main:'GN',region_sub:'경상남도 하동군',address:'경상남도 하동군 화개면 쌍계사 앞 십리벚꽃길',lat:35.0834,lng:127.6842,price:'무료',duration:'2~3시간',reservation_required:false,target_user:['커플','개인','가족'],nearby_places:[],related_heritage_ids:[],short_description:'섬진강 화개장터에서 쌍계사까지 이어지는 4km 십리벚꽃길을 걷는 봄 체험이다. 수령 100년 이상 왕벚나무들이 만드는 벚꽃 터널은 한국에서 가장 긴 직선 벚꽃 터널로 꼽힌다.',source_urls:['https://www.hadong.go.kr/'],data_confidence:'high',tags:['쌍계사벚꽃','화개','하동','경남','십리벚꽃길','섬진강','봄여행'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'3월 말~4월 초 벚꽃 시즌',phone:'055-880-2960'},
  {experience_id:'EX-GW-NAT-013',name:'인제 아이들 캠핑 체험',category_main:'문화/체험',category_sub:'캠핑/글램핑',region_main:'GW',region_sub:'강원특별자치도 인제군',address:'강원특별자치도 인제군 인제읍 인제로 176',lat:38.0628,lng:128.1711,price:'1박 60,000원~',duration:'1박 2일',reservation_required:true,target_user:['가족','어린이'],nearby_places:[],related_heritage_ids:[],short_description:'강원도 인제 계곡 옆 어린이 전용 체험 캠핑장에서 텐트 치기·모닥불·별 관측·계곡 물놀이를 즐기는 가족 캠핑 체험이다. 어린이 자연 생태 교육 프로그램이 함께 운영된다.',source_urls:['https://www.inje.go.kr/tour/'],data_confidence:'high',tags:['인제캠핑','인제','강원','가족캠핑','어린이','모닥불','계곡'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'seasonal',operating_hours:'5~10월 캠핑 시즌',phone:'033-460-8036'},
  {experience_id:'EX-JN-NAT-012',name:'신안 퍼플 섬 (반월도) 체험',category_main:'문화/체험',category_sub:'자연체험',region_main:'JN',region_sub:'전라남도 신안군',address:'전라남도 신안군 안좌면 반월도',lat:34.9117,lng:126.3489,price:'배 왕복 6,000원',duration:'2~3시간',reservation_required:false,target_user:['커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'섬 전체가 보라색으로 꾸며진 신안 반월도를 방문하는 체험이다. 보라색 꽃·건물·다리·자전거가 섬 전체를 물들인 인스타그램 명소로 퍼플 브릿지가 걸쳐진 두 섬을 자전거로 이동할 수 있다.',source_urls:['https://www.sinan.go.kr/'],data_confidence:'high',tags:['퍼플섬','반월도','신안','전남','보라색섬','인스타명소','퍼플브릿지'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중',phone:'061-240-8555'},
  {experience_id:'EX-GG-NAT-014',name:'가평 자라섬 캠핑 체험',category_main:'문화/체험',category_sub:'캠핑/글램핑',region_main:'GG',region_sub:'경기도 가평군',address:'경기도 가평군 가평읍 자라섬로 60',lat:37.8350,lng:127.5106,price:'1박 50,000원~',duration:'1박 2일',reservation_required:true,target_user:['커플','가족','개인'],nearby_places:[],related_heritage_ids:[],short_description:'서울에서 1시간 30분 거리 북한강 자라섬에서 즐기는 캠핑 체험이다. 봄 유채꽃·가을 재즈 페스티벌 시즌에 캠핑하면 꽃과 음악이 더해져 특별한 경험이 된다.',source_urls:['https://www.gapyeong.go.kr/'],data_confidence:'high',tags:['자라섬캠핑','가평','경기','북한강','재즈','유채꽃','봄가을캠핑'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중',phone:'031-580-2726'},
  {experience_id:'EX-JJ-NAT-004',name:'제주 협재·금릉 에메랄드 해수욕',category_main:'문화/체험',category_sub:'자연체험',region_main:'JJ',region_sub:'제주특별자치도 제주시',address:'제주특별자치도 제주시 한림읍 협재리',lat:33.3949,lng:126.2395,price:'무료',duration:'2~4시간',reservation_required:false,target_user:['가족','커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'제주 서쪽 협재해수욕장과 금릉 해수욕장에서 에메랄드빛 바다를 즐기는 체험이다. 비양도를 배경으로 한 얕은 수심과 투명한 바닷물이 스노클링·튜브·모래놀이를 즐기기에 완벽하다.',source_urls:['https://www.visitjeju.net/'],data_confidence:'high',tags:['협재해수욕장','금릉','제주','에메랄드','비양도','해수욕','스노클링'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'seasonal',operating_hours:'6~8월 성수기',phone:'064-728-3988'},
  {experience_id:'EX-GW-NAT-014',name:'태백 고원 여름 배추밭 풍경',category_main:'문화/체험',category_sub:'자연체험',region_main:'GW',region_sub:'강원특별자치도 태백시',address:'강원특별자치도 태백시 매봉산 고랭지 채소밭',lat:37.1439,lng:129.0069,price:'무료',duration:'1~2시간',reservation_required:false,target_user:['커플','개인','가족'],nearby_places:[],related_heritage_ids:[],short_description:'해발 1,100m 태백 고원 매봉산 고랭지 배추밭 풍경을 감상하는 체험이다. 8월이면 층층이 펼쳐진 초록 배추밭이 구름 위에 떠있는 것처럼 보이며 매봉산 풍력발전소와 함께 장관을 이룬다.',source_urls:['https://www.taebaek.go.kr/'],data_confidence:'high',tags:['태백고원배추밭','태백','강원','매봉산','고랭지','풍력발전소','여름'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'seasonal',operating_hours:'8~9월 배추 시즌',phone:'033-550-2082'},
  {experience_id:'EX-GG-NAT-015',name:'가을 용인 한택식물원',category_main:'문화/체험',category_sub:'자연체험',region_main:'GG',region_sub:'경기도 용인시',address:'경기도 용인시 처인구 백암면 한택로 2',lat:37.2000,lng:127.3722,price:'성인 12,000원',duration:'2~3시간',reservation_required:false,target_user:['가족','커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'국내 최대 사립 식물원 용인 한택식물원에서 사계절 식물을 탐방하는 체험이다. 5,300여 종 6만 여 본의 식물이 자라며 봄 튤립·여름 연꽃·가을 국화·겨울 설경이 각각 아름답다.',source_urls:['https://www.hantaek.co.kr/'],data_confidence:'high',tags:['한택식물원','용인','경기','식물원','튤립','연꽃','국화'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00',phone:'031-333-3558'},
  {experience_id:'EX-JN-NAT-013',name:'화순 세량지 봄 벚꽃 투어',category_main:'문화/체험',category_sub:'자연체험',region_main:'JN',region_sub:'전라남도 화순군',address:'전라남도 화순군 이양면 증리 세량지',lat:34.9781,lng:127.1367,price:'무료',duration:'1시간',reservation_required:false,target_user:['커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'전남 화순의 작은 저수지 세량지에서 봄 벚꽃과 수면 반사를 감상하는 체험이다. 저수지 주변 벚나무 꽃이 수면에 반사되는 구도가 국내 봄 사진 명소 중 하나로 알려져 있다.',source_urls:['https://www.hwasun.go.kr/'],data_confidence:'high',tags:['세량지','화순','전남','벚꽃','수면반사','봄꽃','사진명소'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'3월 말~4월 초 벚꽃 시즌',phone:'061-379-3886'},
  {experience_id:'EX-GW-NAT-015',name:'강릉 정동진 모래시계 공원',category_main:'문화/체험',category_sub:'역사 체험',region_main:'GW',region_sub:'강원특별자치도 강릉시',address:'강원특별자치도 강릉시 강동면 헌화로 950',lat:37.6788,lng:129.0286,price:'모래시계 공원 무료',duration:'1~2시간',reservation_required:false,target_user:['가족','커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'세계에서 바다와 가장 가까운 기차역 정동진에서 드라마 모래시계 촬영지와 초대형 모래시계 공원을 탐방하는 체험이다. 매년 새해 수만 명이 일출을 맞이하는 강원도 대표 일출 명소다.',source_urls:['https://www.gangneung.go.kr/'],data_confidence:'high',tags:['정동진모래시계','정동진','강릉','강원','드라마모래시계','일출','기차역'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중',phone:'033-640-4533'}
];

const newShorts = [
  {
    experience_id:'EX-GG-KID-002', experience_name:'과천 서울대공원', category_sub:'어린이 체험', region:'경기도',
    script_30s:'오늘은 과천 서울대공원에 왔어요. 국내 최대 동물원이에요. 근데 아무도 안 알려주는 게 있어요 — 코끼리 기르는 기린 먹이 주기 시간이 있어요. 기린 목에서 먹이가 내려가는 게 눈으로 보여요. 그 구경이 진짜 신기해요. 너무 기린이 이렇게 가까이 있어서 좋았습니다.',
    script_60s:'오늘은 경기도 과천 서울대공원에 왔어요. 국내 최대 규모 동물원으로 300여 종 3,700여 마리 동물이 있어요. 입장료 5,000원으로 가성비 최고예요. 근데 아무도 안 알려주는 꿀팁 하나 — 서울대공원 기린 먹이 주기 체험이 있어요. 기다란 기린 목을 직접 만지면서 먹이를 주면 기린이 긴 혀로 받아 먹는데 그 혀가 정말 길어요. 그리고 기린이 먹이를 삼킬 때 목에서 먹이가 내려가는 게 눈으로 보여요. 기린은 되새김질 동물이라 먹이가 위아래로 움직이는 게 목으로 보이는 거예요. 그 장면이 아이들이 가장 좋아하는 순간이에요. 체험 시간은 홈페이지에서 미리 확인해야 해요. 너무 기린이 이렇게 가까이서 볼 수 있어서 좋았습니다.',
    secret_tip:'기린 먹이 주기 체험 — 기린 목에서 먹이 오가는 되새김질 눈으로 관찰. 아이들이 가장 좋아하는 장면. 홈페이지에서 체험 시간 사전 확인. 국립현대미술관+과학관 세트 과천 삼각',
    filming_guide:'기린 긴 혀로 먹이 받는 순간 클로즈업. 기린 목에서 먹이 내려가는 장면. 아이들이 기린 목 만지는 표정.',
    broll_ideas:['기린 긴 혀 먹이 받는 클로즈업','기린 목 먹이 내려가는 장면','아이들 기린 목 만지는 표정','코끼리 구역 거대한 크기','서울대공원 전체 파노라마'],
    hooks:['기린 먹이 주면 목에서 내려가는 게 보여요','기린 혀가 이렇게 긴지 몰랐어요','서울대공원 기린 먹이 체험 꿀팁','기린 되새김질 목으로 눈에 보여요','국내 최대 동물원 5,000원 가성비'],
    thumbnails:['기린 혀 먹이 받기 클로즈업','기린 목 먹이 내려가기','아이들 표정','코끼리 거대한 크기','서울대공원 파노라마'],
    captions:{youtube:'서울대공원 기린 먹이 주기 — 목에서 내려가는 게 보여요 🦒\n\n되새김질 동물 기린 먹이 이동이 눈으로!\n국내 최대 동물원 5,000원\n\n📍 경기도 과천시 서울대공원\n🦒 기린 먹이 체험 시간: 홈페이지 사전 확인\n\n#서울대공원 #과천 #경기여행 #기린먹이 #동물원',instagram:'서울대공원 기린 먹이 주기 목에서 내려가는 게 보여요 🦒\n\n되새김질 목으로 관찰하는 그 장면 신기해요 ✨\n5,000원 국내 최대 동물원\n\n📍 경기 과천 서울대공원\n\n#서울대공원 #과천여행 #경기 #기린먹이 #GemKorea',tiktok:'서울대공원 꿀팁 🦒 기린 먹이 주기 하면 목에서 먹이 내려가는 되새김질 눈으로 봐요! 기린 혀가 진짜 길어요 // 5,000원 국내 최대 동물원 #서울대공원 #과천 #기린먹이'},
    hashtags:{korean:['#한국여행','#경기여행','#과천여행','#어린이','#GemKorea'],place_specific:['#서울대공원','#기린먹이체험','#되새김질관찰','#과천동물원']}
  },
  {
    experience_id:'EX-GW-FUD-002', experience_name:'강릉 커피 로스팅 체험', category_sub:'발효/음식', region:'강원도',
    script_30s:'오늘은 강릉 안목 커피거리에서 로스팅 체험을 했어요. 한국 커피 문화의 시작점이에요. 근데 아무도 안 알려주는 게 있어요 — 생두를 볶으면 두 번 소리가 나요. 1차 크랙·2차 크랙이에요. 그 소리가 로스팅 단계의 신호예요. 너무 커피가 소리로 만들어진다는 게 좋았습니다.',
    script_60s:'오늘은 강원도 강릉 안목 커피거리에서 커피 로스팅 체험을 했어요. 강릉은 1980년대 자판기 커피에서 시작해 지금은 한국 스페셜티 커피 문화의 중심이 된 도시예요. 직접 커피 생두를 골라 로스팅하고 블렌딩해서 나만의 원두를 만드는 체험이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 커피 로스팅 중에 "팝" 소리가 두 번 나요. 1차 크랙과 2차 크랙이에요. 1차 크랙은 생두 안의 수분이 증발하면서 나는 소리고, 2차 크랙은 원두 조직이 열에 의해 팽창하면서 나는 소리예요. 1차 크랙 직후에 볶으면 라이트 로스트, 2차 크랙 시작 때 멈추면 미디엄 로스트, 2차 크랙 이후까지 가면 다크 로스트가 돼요. 이 소리를 듣는 법을 배우면 커피가 완전히 달리 들려요. 너무 커피가 소리로 만들어진다는 게 좋았습니다.',
    secret_tip:'1차·2차 크랙 소리 = 로스팅 단계 신호 — 소리로 로스팅 정도 판단. 1차 후=라이트, 2차 시작=미디엄, 2차 이후=다크. 이 소리 배우면 커피가 달리 들림. 안목 커피거리 산책 세트',
    filming_guide:'로스팅 기계에서 생두 볶이는 소리 포함 촬영. 1차 크랙 소리 나는 순간 집중 표정. 완성 원두 색깔 비교 클로즈업.',
    broll_ideas:['로스팅 기계 생두 볶이는 장면','1차 크랙 집중하는 표정','완성 원두 색깔 비교','안목 커피거리 카페 전경','커피 원두 갈아 핸드드립'],
    hooks:['커피 볶을 때 소리가 두 번 나요','1차·2차 크랙 소리가 신호예요','강릉 커피 로스팅 체험 꿀팁','소리로 로스팅 단계 아는 법','강릉이 커피 도시가 된 이유'],
    thumbnails:['로스팅 기계 생두 볶이기','1차 크랙 집중 표정','원두 색깔 비교','안목 커피거리','핸드드립'],
    captions:{youtube:'강릉 커피 로스팅 체험 — 소리가 두 번 나요 ☕\n\n1차·2차 크랙 소리가 로스팅 단계 신호!\n강릉 안목 커피거리\n\n📍 강원도 강릉시 안목 커피거리\n☕ 1차 크랙=라이트 / 2차 크랙=미디엄 / 이후=다크\n\n#강릉커피로스팅 #강릉 #강원도여행 #커피체험 #안목커피거리',instagram:'강릉 커피 로스팅 볶을 때 소리가 두 번 나요 ☕\n\n1차·2차 크랙 소리가 로스팅 단계 신호 ✨\n소리로 커피가 만들어지는 경험\n\n📍 강원 강릉 안목 커피거리\n\n#강릉커피 #커피로스팅 #강릉여행 #GemKorea',tiktok:'강릉 커피 로스팅 꿀팁 ☕ 생두 볶을 때 팝 소리가 두 번 나요! 1차 크랙 2차 크랙이 로스팅 단계 신호 // 이 소리 배우면 커피가 달리 들려요 #강릉커피 #커피로스팅 #강릉여행'},
    hashtags:{korean:['#한국여행','#강원도여행','#강릉여행','#커피','#GemKorea'],place_specific:['#강릉커피로스팅','#안목커피거리','#1차2차크랙','#강릉커피문화']}
  },
  {
    experience_id:'EX-JB-FUD-001', experience_name:'전주 전통 비빔밥 만들기 체험', category_sub:'발효/음식', region:'전라북도',
    script_30s:'오늘은 전주 한옥마을에서 비빔밥을 직접 만들었어요. 조선 왕실 음식이에요. 근데 아무도 안 알려주는 게 있어요 — 비빔밥 핵심은 나물 30가지예요. 양보다 종류가 많아야 해요. 그 다양성이 전주 비빔밥의 비밀이에요. 너무 비빔밥이 이렇게 복잡한 음식인 줄 몰랐어서 좋았습니다.',
    script_60s:'오늘은 전북 전주 한옥마을에서 전통 비빔밥 만들기 체험을 했어요. 전주 비빔밥은 조선 시대 왕실에 올린 음식으로 화반이라고 불렸어요. 지금도 30가지 이상 나물이 들어가요. 근데 아무도 안 알려주는 꿀팁 하나 — 전주 비빔밥의 핵심이 고추장이나 참기름이 아니에요. 나물의 종류 수예요. 도라지·콩나물·시금치·호박·당근·버섯·취나물·고사리 등 30가지 이상이 각각 다른 방식으로 조리되어야 해요. 각 나물의 맛이 살아있으면서 섞였을 때 조화를 이루는 게 전주 비빔밥 철학이에요. 체험에서 나물 하나하나를 손질하고 볶는 과정을 배우면 집에서 먹는 비빔밥이 완전히 달리 보여요. 너무 비빔밥이 이렇게 정교한 음식인 줄 몰랐어서 좋았습니다.',
    secret_tip:'비빔밥 핵심 = 나물 30가지 종류. 각 나물을 다른 방식으로 조리해야 함. 나물 조화가 전주 비빔밥 철학. 체험에서 나물 손질+볶기 과정 배우기. 조선 왕실 화반 레시피 스토리',
    filming_guide:'30가지 나물 펼쳐진 전경 클로즈업. 나물 손질하는 손 동작. 완성 비빔밥 비비는 순간.',
    broll_ideas:['30가지 나물 펼쳐진 전경','나물 손질하는 손 동작','완성 비빔밥 비비는 순간','전주 비빔밥 재료 설명판','한옥마을 배경 완성 비빔밥'],
    hooks:['비빔밥 핵심은 나물 30가지예요','고추장이 아닌 나물 수가 핵심이에요','전주 비빔밥이 왕실 음식인 이유','각 나물 다 다르게 요리해야 해요','전주 비빔밥 직접 만들기 체험'],
    thumbnails:['30가지 나물 전경','나물 손질 손 동작','비빔밥 비비는 순간','재료 설명판','한옥마을 배경 완성'],
    captions:{youtube:'전주 비빔밥 만들기 — 나물 30가지가 핵심이에요 🥗\n\n고추장이 아닌 나물 종류 수가 비밀!\n조선 왕실 화반 레시피\n\n📍 전북 전주시 한옥마을 비빔밥 체험\n🥗 나물 30가지 각각 다른 조리법\n\n#전주비빔밥만들기 #전주 #전북여행 #비빔밥 #한옥마을',instagram:'전주 비빔밥 나물 30가지가 핵심이에요 🥗\n\n고추장 아닌 나물 종류 수가 전주 비빔밥 비밀 ✨\n조선 왕실 화반 직접 만들었어요\n\n📍 전북 전주 한옥마을\n\n#전주비빔밥 #전주여행 #전북 #비빔밥만들기 #GemKorea',tiktok:'전주 비빔밥 꿀팁 🥗 핵심은 나물 30가지예요! 고추장이 아닌 나물 종류 수가 비밀 // 각 나물 다르게 요리해서 조화 이루는 게 전주 비빔밥 철학 #전주비빔밥 #전주여행 #전북'},
    hashtags:{korean:['#한국여행','#전북여행','#전주여행','#비빔밥','#GemKorea'],place_specific:['#전주비빔밥만들기','#나물30가지','#조선왕실화반','#전주한옥마을']}
  },
  {
    experience_id:'EX-GN-FUD-001', experience_name:'통영 굴 까기 체험', category_sub:'발효/음식', region:'경상남도',
    script_30s:'오늘은 통영 굴 까기 체험을 했어요. 한국 굴 생산 80% 통영이에요. 근데 아무도 안 알려주는 게 있어요 — 굴을 까는 방향이 있어요. 경첩 쪽이 아니라 뾰족한 쪽으로 칼을 넣어야 해요. 그 방향이 맞으면 굴이 쉽게 열려요. 너무 방향 하나로 달라진다는 게 좋았습니다.',
    script_60s:'오늘은 경남 통영에서 굴 까기 체험을 했어요. 통영은 한국 굴 생산량의 80%를 담당하는 굴의 수도예요. 매년 11월부터 4월까지 굴 시즌이에요. 갓 수확한 굴을 직접 까서 먹는 체험이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 굴 까는 방향이 따로 있어요. 대부분 굴 경첩이 있는 납작한 쪽으로 칼을 넣으려고 하는데 그건 어렵고 굴이 상해요. 뾰족한 끝 쪽으로 굴 까는 칼을 넣고 비틀면 훨씬 쉽게 열려요. 그리고 납작한 뚜껑 면을 위로 하고 까면 굴물이 안 쏟아져요. 이 두 가지만 알면 처음 굴 까는 사람도 빠르게 할 수 있어요. 까자마자 먹는 생굴의 신선함이 진짜예요. 너무 방향 하나가 이렇게 중요하다는 게 좋았습니다.',
    secret_tip:'굴 까기 핵심 — 뾰족한 끝 쪽으로 칼 넣어 비틀기 + 납작한 뚜껑 위로 하면 굴물 안 쏟아짐. 이 두 가지로 초보도 빠르게 가능. 11~4월 굴 시즌 방문 필수',
    filming_guide:'굴 까는 방향 칼 삽입 클로즈업 (뾰족한 쪽). 굴물 안 쏟아지게 까는 방법. 갓 딴 생굴 먹는 신선한 표정.',
    broll_ideas:['뾰족한 쪽 칼 삽입 클로즈업','굴물 안 쏟아지게 까기','갓 딴 생굴 먹는 표정','통영 굴 양식장 전경','굴 껍데기 산 클로즈업'],
    hooks:['굴 까는 방향이 따로 있어요','뾰족한 쪽으로 칼 넣어야 해요','납작한 면 위로 해야 굴물 안 쏟아져요','이 두 가지로 초보도 빠르게 가능','통영 굴 까기 체험 꿀팁'],
    thumbnails:['뾰족한 쪽 칼 삽입','굴물 안 쏟아지게 까기','생굴 먹는 표정','통영 양식장','굴 껍데기 산'],
    captions:{youtube:'통영 굴 까기 — 뾰족한 쪽으로 칼 넣어야 해요 🦪\n\n납작한 면 위로 해야 굴물 안 쏟아져요!\n한국 굴 80% 생산지 통영\n\n📍 경남 통영시 굴 까기 체험\n🦪 시즌: 11~4월\n\n#통영굴까기 #통영 #경남여행 #굴체험 #생굴',instagram:'통영 굴 까는 방향이 따로 있어요 🦪\n\n뾰족한 쪽으로 칼 넣어 비틀기가 핵심 ✨\n갓 딴 생굴 신선함이 진짜예요\n\n📍 경남 통영 굴 까기 체험\n\n#통영굴까기 #통영여행 #경남 #생굴 #GemKorea',tiktok:'통영 굴 까기 꿀팁 🦪 뾰족한 쪽으로 칼 넣어야 해요! 납작한 면 위로 하면 굴물 안 쏟아져요 // 이 두 가지로 초보도 굴 쉽게 깔 수 있어요 #통영굴까기 #통영여행 #경남'},
    hashtags:{korean:['#한국여행','#경남여행','#통영여행','#굴','#GemKorea'],place_specific:['#통영굴까기','#굴까는방향','#뾰족한쪽칼','#통영생굴']}
  },
  {
    experience_id:'EX-BS-FUD-001', experience_name:'부산 기장 미역·다시마 채취 체험', category_sub:'해양체험', region:'부산광역시',
    script_30s:'오늘은 부산 기장 바다에서 미역을 땄어요. 동해 청정 해역이에요. 근데 아무도 안 알려주는 게 있어요 — 미역은 물속에서 초록색이에요. 꺼내서 공기에 닿으면 갈색이 돼요. 그 색 변화가 미역의 산화 반응이에요. 너무 미역이 살아있다는 게 좋았습니다.',
    script_60s:'오늘은 부산 기장 동해 청정 해역에서 미역과 다시마를 직접 채취하는 어촌 체험을 했어요. 기장은 동해안 미역·다시마 최고 산지예요. 4~5월 봄 미역 채취 시즌에 어민과 함께 배를 타고 나가 직접 미역을 뜯는 체험이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 바다 속에서 미역을 보면 초록색이에요. 그런데 물 밖으로 꺼내서 공기에 5분쯤 노출되면 갈색으로 변해요. 이게 산화 반응이에요. 마트에서 파는 갈색 미역이 원래는 초록색이었다는 사실이 놀라워요. 그리고 바다에서 방금 딴 생미역을 씻어 먹으면 마트 미역과 완전히 다른 식감이에요. 쫄깃하고 싱싱한 맛이에요. 너무 미역이 살아있다는 게 색으로 보여서 좋았습니다.',
    secret_tip:'미역 수중=초록색, 공기 노출=갈색 산화 반응 — 바다 속 초록 미역이 갈색 마트 미역이 되는 과정 직접 관찰. 생미역 즉석 시식이 하이라이트. 4~5월 봄 시즌',
    filming_guide:'바다 속 초록 미역 수중 촬영. 공기 접촉 후 갈색으로 변하는 과정 타임랩스. 생미역 씻어 먹는 신선한 표정.',
    broll_ideas:['바다 속 초록 미역 수중 촬영','공기 접촉 갈색 변화 타임랩스','생미역 먹는 신선한 표정','기장 바다 미역 채취 전경','어민과 함께 배 탑승'],
    hooks:['미역이 바닷속에서 초록색이에요','꺼내면 갈색으로 변하는 산화 반응','생미역이 마트 미역이랑 완전 달라요','미역이 살아있다는 게 색으로 보여요','기장 봄 미역 채취 체험 꿀팁'],
    thumbnails:['바다 속 초록 미역 수중','갈색 변화 타임랩스','생미역 먹는 표정','기장 미역 채취 전경','어민과 배 탑승'],
    captions:{youtube:'기장 미역 채취 — 바닷속에선 초록색이에요 🌿\n\n공기 닿으면 갈색 산화 반응!\n생미역 즉석 시식이 진짜 맛있어요\n\n📍 부산 기장군 동해 청정 해역\n🌿 4~5월 봄 미역 채취 시즌\n\n#기장미역채취 #부산여행 #기장 #미역 #어촌체험',instagram:'기장 미역 바닷속에서 초록색이에요 🌿\n\n공기에 닿으면 갈색으로 변하는 산화 반응 ✨\n생미역 먹어보면 마트랑 완전 달라요\n\n📍 부산 기장 동해 해역\n\n#기장미역 #부산여행 #기장 #어촌체험 #GemKorea',tiktok:'기장 미역 꿀팁 🌿 바닷속에서 초록색이에요! 꺼내면 갈색으로 변하는 산화 반응 // 생미역 즉석으로 먹으면 마트랑 완전 다른 맛 #기장미역채취 #부산여행 #기장'},
    hashtags:{korean:['#한국여행','#부산여행','#기장여행','#미역','#GemKorea'],place_specific:['#기장미역채취','#미역산화반응','#초록미역갈색','#생미역시식']}
  },
  {
    experience_id:'EX-GW-FRM-002', experience_name:'홍천 곤드레 나물 채취 체험', category_sub:'농촌 체험', region:'강원도',
    script_30s:'오늘은 강원도 홍천에서 곤드레 나물을 캤어요. 강원도 산나물의 왕이에요. 근데 아무도 안 알려주는 게 있어요 — 곤드레는 어린 잎만 따야 해요. 큰 잎은 질겨서 못 먹어요. 엄지손가락 두 마디 크기의 어린 것만 골라야 해요. 너무 자연이 먹을 것을 고르는 법이 있다는 게 좋았습니다.',
    script_60s:'오늘은 강원도 홍천 산에서 곤드레 나물 채취 체험을 했어요. 곤드레는 강원도 대표 산나물로 곤드레밥으로 유명해요. 5~6월 채취 시즌에만 즐길 수 있어요. 근데 아무도 안 알려주는 꿀팁 하나 — 곤드레는 어린 잎과 줄기만 채취해야 해요. 엄지손가락 두 마디 크기의 아주 어린 것만 부드럽고 맛있어요. 큰 잎은 질기고 쓴맛이 강해요. 산에서 눈에 보이는 곤드레라고 다 따면 안 되고 작고 어린 것만 골라야 해요. 이 선별 방법을 알면 채취한 곤드레의 품질이 완전히 달라요. 현지 어르신들은 손으로 잡아보지도 않고 눈으로만 보고 골라요. 그 안목을 배우는 게 채취 체험의 진짜 교육이에요. 너무 자연에서 먹을 것 고르는 법을 배워서 좋았습니다.',
    secret_tip:'곤드레 어린 잎+줄기만 채취 — 엄지 두 마디 크기 이하. 큰 잎 질기고 쓴맛. 이 선별법이 채취 체험 진짜 교육. 채취 후 현지 곤드레밥 즉석 요리까지 세트',
    filming_guide:'어린 곤드레 잎 선별하는 손 클로즈업. 산에서 곤드레 군락 전경. 채취 후 곤드레밥 짓는 과정.',
    broll_ideas:['어린 곤드레 선별하는 손 클로즈업','산 곤드레 군락 전경','채취 후 곤드레밥 짓기','어르신 곤드레 채취 비교','홍천 산 풍경'],
    hooks:['곤드레는 어린 것만 따야 해요','엄지 두 마디 크기가 기준이에요','큰 잎은 따면 안 되는 이유','현지 어르신 눈대중 선별법','자연에서 먹을 것 고르는 법'],
    thumbnails:['어린 곤드레 선별하는 손','곤드레 군락 전경','곤드레밥 짓기','어르신 비교','홍천 산 풍경'],
    captions:{youtube:'홍천 곤드레 채취 — 어린 것만 따야 해요 🌿\n\n엄지 두 마디 크기가 기준!\n큰 잎은 질기고 쓴맛\n\n📍 강원도 홍천군 곤드레 채취 체험\n🌿 5~6월 채취 시즌\n\n#홍천곤드레 #홍천 #강원도여행 #산나물채취 #곤드레밥',instagram:'홍천 곤드레 어린 것만 따야 해요 🌿\n\n엄지 두 마디 크기가 기준 ✨\n큰 잎은 질기고 쓴맛이 나요\n\n📍 강원 홍천 곤드레 채취\n\n#홍천곤드레 #홍천여행 #강원도 #산나물 #GemKorea',tiktok:'홍천 곤드레 꿀팁 🌿 어린 것만 따야 해요! 엄지 두 마디 크기 기준 // 큰 잎 따면 질기고 쓴맛이에요 자연에서 먹을 것 고르는 법 #홍천곤드레 #홍천여행 #강원도'},
    hashtags:{korean:['#한국여행','#강원도여행','#홍천여행','#산나물','#GemKorea'],place_specific:['#홍천곤드레','#곤드레채취','#어린잎선별','#강원도산나물']}
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
