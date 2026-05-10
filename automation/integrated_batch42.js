const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const now = new Date().toISOString().slice(0,19);

const newExps = [
  {experience_id:'EX-GG-NAT-077',name:'파주 헤이리 예술마을',category_main:'문화/체험',category_sub:'문화투어',region_main:'GG',region_sub:'경기도 파주시',address:'경기도 파주시 탄현면 헤이리마을길 93-119',lat:37.7567,lng:126.7128,price:'무료 (갤러리 별도)',duration:'2~3시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'경기 파주에 조성된 예술가들의 마을 헤이리 예술마을을 탐방하는 문화 체험이다. 화가·조각가·건축가·음악가 등 380여 명 예술가가 함께 살며 작업하는 공동체 예술 마을로 독특한 건축과 갤러리가 가득하다.',source_urls:['https://www.heyri.net/'],data_confidence:'high',tags:['헤이리예술마을','파주','경기','예술마을','갤러리','건축여행','문화예술'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'10:00~18:00 (월 휴무)',phone:'031-946-8551'},
  {experience_id:'EX-JN-CUL-048',name:'강진 백련사 동백 숲',category_main:'문화/체험',category_sub:'자연체험',region_main:'JN',region_sub:'전라남도 강진군',address:'전라남도 강진군 도암면 백련사길 145',lat:34.6147,lng:126.7639,price:'무료',duration:'1~2시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'전남 강진 백련사 주변 동백 숲을 탐방하는 체험이다. 정약용이 유배 시절 혜장 스님과 차를 마시며 교류한 백련사 동백 숲은 봄 동백꽃이 아름다운 전남 대표 동백 명소다.',source_urls:['https://www.gangjin.go.kr/'],data_confidence:'high',tags:['강진백련사동백','강진','전남','백련사','동백꽃','정약용','혜장스님'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'2~4월 동백 시즌',phone:'061-433-3100'},
  {experience_id:'EX-GN-NAT-085',name:'하동 악양 매화 축제',category_main:'문화/체험',category_sub:'자연체험',region_main:'GN',region_sub:'경상남도 하동군',address:'경상남도 하동군 악양면 악양매화마을',lat:35.1094,lng:127.7014,price:'무료',duration:'2시간',reservation_required:false,target_user:['커플','개인','가족'],nearby_places:[],related_heritage_ids:[],short_description:'섬진강 옆 경남 하동 악양 매화마을에서 봄 매화를 감상하는 축제다. 2~3월 매화가 만개하면 하동 평사리 들판과 섬진강이 어우러지는 매화 전경이 전국 최고 매화 명소로 꼽힌다.',source_urls:['https://www.hadong.go.kr/'],data_confidence:'high',tags:['하동악양매화','하동','경남','매화','섬진강','봄꽃','최참판댁'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'2~3월 매화 시즌 (무료)',phone:'055-880-2952'},
  {experience_id:'EX-GG-CUL-077',name:'용인 한국민속촌',category_main:'문화/체험',category_sub:'역사 체험',region_main:'GG',region_sub:'경기도 용인시',address:'경기도 용인시 기흥구 민속촌로 90',lat:37.2417,lng:127.0964,price:'성인 20,000원',duration:'4~6시간',reservation_required:false,target_user:['가족','어린이','커플'],nearby_places:[],related_heritage_ids:[],short_description:'경기도 용인 한국민속촌에서 조선 시대 생활상을 체험하는 역사 테마파크다. 전국 각지에서 이전·복원한 270여 채 전통 가옥과 각종 전통 공연·민속놀이 체험을 즐길 수 있다.',source_urls:['https://www.koreanfolk.co.kr/'],data_confidence:'high',tags:['한국민속촌','용인','경기','조선시대','전통가옥','민속놀이','역사테마파크'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:30~18:00',phone:'031-288-0000'},
  {experience_id:'EX-JB-CUL-068',name:'임실 산수유 마을',category_main:'문화/체험',category_sub:'자연체험',region_main:'JB',region_sub:'전라북도 임실군',address:'전라북도 임실군 오수면 둔덕리 산수유마을',lat:35.5678,lng:127.3319,price:'무료',duration:'1~2시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'전북 임실 오수면 산수유마을에서 봄 산수유 꽃 감상 체험이다. 3월 산수유 꽃이 피면 마을 전체가 노랗게 물드는 전북 대표 봄꽃 명소로 가을 붉은 산수유 열매도 아름답다.',source_urls:['https://www.imsil.go.kr/'],data_confidence:'high',tags:['임실산수유마을','임실','전북','산수유','봄꽃','3월','가을열매'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'3월 봄꽃 시즌 / 10~11월 열매 시즌',phone:'063-640-2356'},
  {experience_id:'EX-GW-NAT-075',name:'화천 산천어 축제',category_main:'문화/체험',category_sub:'축제',region_main:'GW',region_sub:'강원특별자치도 화천군',address:'강원특별자치도 화천군 화천읍 산천어길 일대',lat:38.1067,lng:127.7100,price:'얼음낚시 12,000원~',duration:'4~8시간',reservation_required:false,target_user:['가족','어린이','커플'],nearby_places:[],related_heritage_ids:[],short_description:'매년 1~2월 강원도 화천에서 열리는 국내 최대 겨울 축제 산천어 축제다. 꽁꽁 언 화천천 위에서 얼음낚시로 산천어를 직접 낚고 맨손 잡기·빙상 썰매 등 다양한 겨울 체험이 있다.',source_urls:['https://www.narafestival.com/'],data_confidence:'high',tags:['화천산천어축제','화천','강원','산천어','얼음낚시','겨울축제','세계4대축제'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'1~2월 개최 (약 4주)',phone:'033-440-2575'},
  {experience_id:'EX-JN-NAT-092',name:'담양 대나무 숲 죽녹원',category_main:'문화/체험',category_sub:'자연체험',region_main:'JN',region_sub:'전라남도 담양군',address:'전라남도 담양군 담양읍 죽녹원로 119',lat:35.3267,lng:126.9878,price:'성인 3,000원',duration:'1~2시간',reservation_required:false,target_user:['개인','커플','가족'],nearby_places:[],related_heritage_ids:[],short_description:'전남 담양 죽녹원에서 대나무 숲 산책을 즐기는 체험이다. 16만 평 대나무 숲에 조성된 죽녹원은 대나무 향과 피톤치드가 가득한 힐링 공간으로 여름 대나무 숲 서늘함이 피서지로도 유명하다.',source_urls:['https://www.juknokwon.go.kr/'],data_confidence:'high',tags:['담양죽녹원','담양','전남','대나무숲','죽녹원','피톤치드','힐링'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~19:00',phone:'061-380-3180'},
  {experience_id:'EX-GN-CUL-073',name:'창원 진해 군항제 벚꽃',category_main:'문화/체험',category_sub:'축제',region_main:'GN',region_sub:'경상남도 창원시',address:'경상남도 창원시 진해구 여좌천 일대',lat:35.1528,lng:128.6669,price:'무료',duration:'2~3시간',reservation_required:false,target_user:['커플','개인','가족'],nearby_places:[],related_heritage_ids:[],short_description:'매년 4월 초 경남 창원 진해에서 열리는 국내 최대 벚꽃 축제 군항제다. 진해 군항 주변 여좌천과 장복산 일대 40만 그루 벚나무가 만개하며 해군 군함 공개와 불꽃놀이도 즐길 수 있다.',source_urls:['https://www.gunhangje.or.kr/'],data_confidence:'high',tags:['진해군항제','창원','경남','벚꽃','군항제','여좌천','4월벚꽃'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'4월 초 (약 10일)',phone:'055-548-1390'},
  {experience_id:'EX-GB-CUL-046',name:'안동 유교랜드 체험',category_main:'문화/체험',category_sub:'역사 체험',region_main:'GB',region_sub:'경상북도 안동시',address:'경상북도 안동시 성곡동 유교랜드',lat:36.5681,lng:128.7267,price:'성인 8,000원',duration:'2~3시간',reservation_required:false,target_user:['가족','어린이'],nearby_places:[],related_heritage_ids:[],short_description:'유교 문화의 본산 경북 안동에서 유교 역사와 생활을 체험하는 테마파크다. 조선 시대 유교 교육·생활·예법을 어린이 눈높이에서 체험하는 교육 테마파크로 안동 하회마을과 함께 방문하기 좋다.',source_urls:['https://www.andong.go.kr/'],data_confidence:'high',tags:['안동유교랜드','안동','경북','유교','유교체험','어린이교육','조선'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00',phone:'054-821-0005'},
  {experience_id:'EX-CB-NAT-046',name:'제천 청풍호 유람선',category_main:'문화/체험',category_sub:'자연체험',region_main:'CB',region_sub:'충청북도 제천시',address:'충청북도 제천시 청풍면 청풍호로 1 청풍나루',lat:37.0367,lng:128.2183,price:'성인 9,000원',duration:'1시간',reservation_required:false,target_user:['가족','커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'충북 제천 청풍호에서 유람선을 타고 충주호 절경을 감상하는 수상 체험이다. 충주댐 건설로 형성된 청풍호를 유람선으로 돌며 충북 월악산·금수산 등 아름다운 산봉우리를 감상한다.',source_urls:['https://www.jecheon.go.kr/'],data_confidence:'high',tags:['제천청풍호유람선','제천','충북','청풍호','유람선','충주호','월악산'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~17:00',phone:'043-647-4251'},
  {experience_id:'EX-GG-NAT-076',name:'수원 광교호수공원 산책',category_main:'문화/체험',category_sub:'자연체험',region_main:'GG',region_sub:'경기도 수원시',address:'경기도 수원시 영통구 광교호수공원로 180',lat:37.2989,lng:127.0628,price:'무료',duration:'1~2시간',reservation_required:false,target_user:['개인','커플','가족'],nearby_places:[],related_heritage_ids:[],short_description:'수도권 최대 규모 호수공원 경기 수원 광교호수공원을 산책하는 체험이다. 원천호수·신대호수 두 개 호수를 연결한 광교호수공원은 봄 벚꽃·여름 수국·가을 단풍·겨울 야경 사계절 모두 아름답다.',source_urls:['https://www.ggc.or.kr/'],data_confidence:'high',tags:['광교호수공원','수원','경기','호수공원','봄벚꽃','수국','야경'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (무료)',phone:'031-228-4678'},
  {experience_id:'EX-JN-NAT-093',name:'완도 청산도 슬로 걷기',category_main:'문화/체험',category_sub:'자연체험',region_main:'JN',region_sub:'전라남도 완도군',address:'전라남도 완도군 청산면 청산도 슬로길 일대',lat:34.1861,lng:126.8728,price:'배편 왕복 20,000원~',duration:'4~6시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'아시아 최초 슬로시티 완도 청산도에서 슬로 걷기 여행을 즐기는 체험이다. 영화 서편제 촬영지인 청산도 슬로길 11코스를 천천히 걸으며 청보리 밭·해안 절경·전통 초가를 감상한다.',source_urls:['https://www.wando.go.kr/'],data_confidence:'high',tags:['청산도슬로길','완도','전남','청산도','슬로시티','서편제촬영지','청보리밭'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중',phone:'061-550-5282'}
];

const newShorts = [
  {
    experience_id:'EX-GG-NAT-077', experience_name:'파주 헤이리 예술마을', category_sub:'문화투어', region:'경기도',
    script_30s:'오늘은 파주 헤이리 예술마을에 왔어요. 근데 아무도 안 알려주는 게 있어요 — 헤이리가 원래 DMZ 땅이었어요. 개발 제한 구역에 예술가들이 모여든 거예요. 제한이 오히려 독특한 예술 마을을 만든 아이러니예요. 너무 제한이 이렇게 예술을 낳는다는 게 좋았습니다.',
    script_60s:'오늘은 경기도 파주 헤이리 예술마을을 탐방했어요. 380여 명 예술가가 함께 사는 공동체 예술 마을이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 헤이리가 왜 이 자리에 생겼는지 아세요? 파주 탄현면 헤이리 부지는 원래 군사 시설 인근 개발 제한 구역이었어요. DMZ에 가까워서 일반 개발이 불가능했어요. 1990년대 예술가들이 이 땅에 주목했어요. 개발이 제한된 청정 공간에 예술 공동체를 만들자는 아이디어였어요. 1997년부터 예술가들이 모여 자신이 살 집과 작업실을 직접 설계하고 지었어요. 그 결과 개성 넘치는 건축물들이 모인 독특한 마을이 됐어요. 개발 제한이 오히려 비어있던 땅을 예술 공간으로 만든 역설이에요. 너무 제한이 이렇게 예술을 낳는다는 게 좋았습니다.',
    secret_tip:'헤이리 = 원래 DMZ 인근 군사 개발 제한 구역 — 개발 제한이 청정 공간 유지. 예술가들이 1997년부터 직접 집+작업실 설계 건축. 제한이 개성 넘치는 예술 마을 역설적으로 탄생',
    filming_guide:'헤이리 다양한 독특한 건축물 연속 샷. 갤러리 내부 작품 전시. DMZ 방향 파주 배경.',
    broll_ideas:['헤이리 독특한 건축물 연속','갤러리 내부 작품','DMZ 방향 파주 배경','예술가 작업실 창문','헤이리 골목길'],
    hooks:['헤이리가 원래 DMZ 개발 제한 구역이에요','개발 제한이 예술 마을을 만들었어요','예술가들이 직접 집을 설계했어요','제한이 오히려 독특함을 만들었어요','파주 헤이리 꿀팁'],
    thumbnails:['독특한 건축물 연속','갤러리 내부 작품','DMZ 방향 배경','작업실 창문','헤이리 골목'],
    captions:{youtube:'파주 헤이리 — 원래 DMZ 개발 제한 구역이에요 🎨\n\n개발 제한이 예술 마을을 만든 역설!\n예술가들이 직접 집을 설계했어요\n\n📍 경기도 파주시 탄현면 헤이리마을길\n🎨 380여 예술가 공동체 예술 마을\n\n#파주헤이리 #헤이리예술마을 #파주 #경기여행 #예술마을',instagram:'파주 헤이리 원래 DMZ 개발 제한 구역이에요 🎨\n\n개발 제한이 예술 마을을 만든 역설 ✨\n예술가들이 직접 집 설계 건축\n\n📍 경기 파주 헤이리\n\n#파주헤이리 #헤이리 #파주여행 #경기 #GemKorea',tiktok:'파주 헤이리 꿀팁 🎨 원래 DMZ 개발 제한 구역이에요! 개발 제한이 오히려 청정 공간 유지 // 예술가들이 직접 집 설계해서 이 독특한 마을 탄생 #파주헤이리 #헤이리 #파주여행'},
    hashtags:{korean:['#한국여행','#경기여행','#파주여행','#헤이리','#GemKorea'],place_specific:['#파주헤이리DMZ개발제한','#개발제한예술마을역설','#예술가직접집설계건축','#제한이독특함만듦']}
  },
  {
    experience_id:'EX-GW-NAT-075', experience_name:'화천 산천어 축제', category_sub:'축제', region:'강원특별자치도',
    script_30s:'오늘은 화천 산천어 축제에 왔어요. CNN이 선정한 세계 4대 겨울 축제예요. 근데 아무도 안 알려주는 게 있어요 — 화천 산천어가 왜 유독 맛있는지 아세요? 화천 북한강 물이 석회암 지대를 통과해서 미네랄이 풍부해요. 그게 산천어 살에 녹아들어요. 너무 물이 이렇게 맛을 만든다는 게 좋았습니다.',
    script_60s:'오늘은 강원도 화천 산천어 축제에서 얼음낚시를 즐겼어요. 미국 CNN이 선정한 세계 4대 겨울 축제예요. 근데 아무도 안 알려주는 꿀팁 하나 — 화천 산천어가 유독 맛있는 이유가 있어요. 화천 산천어는 북한강 청정 1급수에서 자라요. 화천 북한강의 물은 석회암 지대를 통과하면서 미네랄이 풍부해져요. 이 미네랄 풍부한 물에서 자란 산천어는 살이 탄력 있고 담백한 특유의 맛이 있어요. 그리고 겨울 차가운 물에서 자란 산천어는 여름 것보다 지방이 적고 단백질이 높아요. 회로 먹을 때 특히 차이가 느껴져요. 낚시 후 현장에서 회쳐 먹거나 튀겨 먹는 즉석 조리가 축제의 핵심이에요. 너무 물이 이렇게 맛을 만든다는 게 좋았습니다.',
    secret_tip:'화천 산천어 맛 이유 = 북한강 석회암 지대 통과 미네랄 풍부한 물 — 겨울 차가운 물에서 자라 지방 적고 단백질 높음. 낚시 직후 현장 즉석 회가 핵심. 낚시대 구멍 위 가루 미끼 기법',
    filming_guide:'화천천 위 얼음낚시 전경. 산천어 낚아 올리는 순간. 즉석 회 치는 장면.',
    broll_ideas:['얼음낚시 전경','산천어 낚아 올리기','즉석 회 치는 장면','화천천 꽁꽁 얼음','맨손 잡기 참가'],
    hooks:['CNN 세계 4대 겨울 축제예요','화천 산천어가 왜 맛있는지 알아요?','석회암 지대 미네랄이 맛을 만들어요','즉석 회가 축제의 핵심이에요','화천 산천어 축제 꿀팁'],
    thumbnails:['얼음낚시 전경','산천어 낚아 올리기','즉석 회 치기','얼음 위 텐트','맨손 잡기'],
    captions:{youtube:'화천 산천어 축제 — 석회암 미네랄이 맛을 만들어요 🐟\n\nCNN 세계 4대 겨울 축제!\n겨울 차가운 물에서 자라 탄력·담백\n\n📍 강원도 화천군 화천읍 산천어길\n🐟 1~2월 국내 최대 겨울 축제\n\n#화천산천어축제 #화천 #강원여행 #산천어축제 #CNN세계4대겨울축제',instagram:'화천 산천어 축제 석회암 미네랄이 맛을 만들어요 🐟\n\nCNN 세계 4대 겨울 축제 ✨\n겨울 차가운 물에서 자라 탄력 담백\n\n📍 강원 화천 산천어 축제\n\n#화천산천어축제 #화천여행 #강원 #겨울축제 #GemKorea',tiktok:'화천 산천어 꿀팁 🐟 CNN 세계 4대 겨울 축제예요! 화천 산천어가 맛있는 이유 — 북한강 석회암 미네랄 풍부한 물 // 즉석 회가 축제의 핵심이에요 #화천산천어축제 #화천여행 #강원'},
    hashtags:{korean:['#한국여행','#강원여행','#화천여행','#산천어축제','#GemKorea'],place_specific:['#화천산천어축제CNN세계4대','#석회암미네랄풍부산천어맛','#겨울차가운물탄력담백','#즉석회축제핵심']}
  },
  {
    experience_id:'EX-JN-NAT-092', experience_name:'담양 대나무 숲 죽녹원', category_sub:'자연체험', region:'전라남도',
    script_30s:'오늘은 담양 죽녹원 대나무 숲에 왔어요. 근데 아무도 안 알려주는 게 있어요 — 대나무가 하루에 1m씩 자라요. 한국 기록은 하루 1.2m예요. 그래서 대나무 아래서 자라는 소리가 들린다는 말이 있어요. 너무 식물이 이렇게 빠르다는 게 좋았습니다.',
    script_60s:'오늘은 전남 담양 죽녹원 대나무 숲을 산책했어요. 16만 평 대나무 숲이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 대나무 성장 속도의 비밀이 있어요. 대나무는 식물 중 가장 빠르게 자라는 식물이에요. 기후 조건에 따라 하루 최대 1m씩 자라요. 한국 기록으로 하루 1.2m까지 자란 기록이 있어요. 4~5월 죽순 시즌에 담양 죽녹원에서 돋아난 죽순이 눈에 보이게 자라요. 이른 아침 죽녹원에 오면 어젯밤보다 죽순이 눈에 띄게 더 자란 것을 느낄 수 있어요. 대나무 숲 안에서 귀를 기울이면 대나무 마디가 자라는 미세한 소리가 들린다는 말도 있어요. 그리고 죽녹원 여름 대나무 숲 안 온도는 바깥보다 3~4도 낮아요. 자연 에어컨이에요. 너무 식물이 이렇게 빠르다는 게 좋았습니다.',
    secret_tip:'대나무 성장 = 하루 최대 1m~1.2m (식물 중 최고 속도) — 4~5월 죽순 시즌 육안으로 성장 확인 가능. 여름 숲 안 바깥보다 3~4도 낮아 자연 에어컨. 죽순 요리 시식 세트',
    filming_guide:'대나무 숲 사이 빛 투과 장면. 죽순 돋아나는 클로즈업. 대나무 숲 산책로 전경.',
    broll_ideas:['대나무 숲 빛 투과','죽순 돋아나는 클로즈업','대나무 산책로 전경','대나무 마디 클로즈업','여름 서늘한 숲'],
    hooks:['대나무가 하루에 1m씩 자라요','한국 기록은 1.2m예요','4~5월에 눈에 보이게 자라요','여름에 3~4도 더 시원해요','담양 죽녹원 꿀팁'],
    thumbnails:['숲 빛 투과','죽순 클로즈업','산책로 전경','대나무 마디','서늘한 숲'],
    captions:{youtube:'담양 죽녹원 — 대나무가 하루 1m씩 자라요 🎋\n\n한국 기록 1.2m!\n여름 숲 안 바깥보다 3~4도 낮은 자연 에어컨\n\n📍 전남 담양군 담양읍 죽녹원로 119\n🎋 16만 평 대나무 숲\n\n#담양죽녹원 #죽녹원 #담양 #전남여행 #대나무숲',instagram:'담양 죽녹원 대나무가 하루 1m씩 자라요 🎋\n\n한국 기록 1.2m 식물 최고 속도 ✨\n여름 숲 안 자연 에어컨 3~4도 시원\n\n📍 전남 담양 죽녹원\n\n#담양죽녹원 #담양여행 #전남 #대나무 #GemKorea',tiktok:'담양 죽녹원 꿀팁 🎋 대나무가 하루 1m씩 자라요! 한국 기록 1.2m 식물 중 최고 속도 // 여름 숲 안 바깥보다 3~4도 낮아서 자연 에어컨이에요 #담양죽녹원 #담양여행 #전남'},
    hashtags:{korean:['#한국여행','#전남여행','#담양여행','#죽녹원','#GemKorea'],place_specific:['#담양죽녹원대나무하루1m','#한국기록1.2m식물최고속도','#여름숲자연에어컨3~4도','#죽순시즌육안성장확인']}
  },
  {
    experience_id:'EX-GN-CUL-073', experience_name:'창원 진해 군항제 벚꽃', category_sub:'축제', region:'경상남도',
    script_30s:'오늘은 진해 군항제에 왔어요. 근데 아무도 안 알려주는 게 있어요 — 진해 벚꽃이 일본이 심은 게 아니에요. 원래 한국 자생 벚나무예요. 일제가 심었다는 말은 사실이 아니에요. 너무 우리 꽃인데 몰랐다는 게 좋았습니다.',
    script_60s:'오늘은 경남 창원 진해 군항제에서 벚꽃을 즐겼어요. 국내 최대 벚꽃 축제로 40만 그루 벚꽃이 만개해요. 근데 아무도 안 알려주는 꿀팁 하나 — 진해 벚꽃의 진실이 있어요. 많은 사람이 진해 벚꽃을 일제강점기 일본이 심은 것으로 알고 있어요. 그런데 학술 연구 결과 진해 벚나무는 제주도 원산의 왕벚나무예요. 왕벚나무는 한국 제주도가 원산지로 세계에서 한국과 일본에만 자생해요. 일제가 진해를 군항으로 개발할 때 심은 것은 맞지만, 그 나무 자체는 한국 자생종인 왕벚나무예요. 일본 벚꽃과 한국 왕벚나무는 DNA 검사 결과 다른 종이에요. 2018년 학술 연구로 공식 확인됐어요. 우리 땅에서 자란 우리 꽃이에요. 너무 우리 꽃인데 몰랐다는 게 좋았습니다.',
    secret_tip:'진해 벚꽃 = 한국 자생 왕벚나무 (제주도 원산) — 일본 벚꽃과 DNA 다른 종. 2018년 학술 연구 확인. 일제가 심었지만 나무 자체는 한국 자생종. 군항제 여좌천+경화역이 최고 포인트',
    filming_guide:'진해 군항제 벚꽃 터널 전경. 여좌천 벚꽃 물 반사. 경화역 기차+벚꽃.',
    broll_ideas:['벚꽃 터널 전경','여좌천 물 반사','경화역 기차+벚꽃','40만 그루 군락','꽃잎 바람에 날리기'],
    hooks:['진해 벚꽃이 한국 자생종이에요','일본 벚꽃과 DNA가 달라요','제주도가 원산지예요','2018년 학술 연구로 확인됐어요','진해 군항제 꿀팁'],
    thumbnails:['벚꽃 터널 전경','여좌천 물 반사','경화역 기차 벚꽃','40만 그루 군락','꽃잎 날리기'],
    captions:{youtube:'진해 군항제 — 벚꽃이 한국 자생종이에요 🌸\n\n일본 벚꽃과 DNA가 달라요!\n제주도 원산 왕벚나무 2018년 확인\n\n📍 경남 창원시 진해구 여좌천 일대\n🌸 국내 최대 벚꽃 축제 40만 그루\n\n#진해군항제 #진해 #창원 #경남여행 #왕벚나무한국자생',instagram:'진해 군항제 벚꽃이 한국 자생종이에요 🌸\n\n일본 벚꽃과 DNA 달라요 ✨\n제주도 원산 왕벚나무 2018년 학술 확인\n\n📍 경남 창원 진해 군항제\n\n#진해군항제 #진해여행 #경남 #벚꽃 #GemKorea',tiktok:'진해 군항제 꿀팁 🌸 벚꽃이 한국 자생종이에요! 일본 벚꽃과 DNA 다른 종 // 제주도 원산 왕벚나무 2018년 학술 연구로 확인됐어요 #진해군항제 #진해여행 #경남'},
    hashtags:{korean:['#한국여행','#경남여행','#창원여행','#진해군항제','#GemKorea'],place_specific:['#진해군항제왕벚나무한국자생','#일본벚꽃DNA다른종','#제주도원산왕벚나무','#2018년학술연구확인']}
  },
  {
    experience_id:'EX-JN-NAT-093', experience_name:'완도 청산도 슬로 걷기', category_sub:'자연체험', region:'전라남도',
    script_30s:'오늘은 완도 청산도를 걸었어요. 아시아 최초 슬로시티예요. 근데 아무도 안 알려주는 게 있어요 — 청산도 밭이 돌담으로 되어있어요. 섬이라 흙이 부족해 돌로 밭 경계를 만든 거예요. 이 돌담 밭이 세계에서 유일한 독특한 구조예요. 너무 환경이 이렇게 문화를 만든다는 게 좋았습니다.',
    script_60s:'오늘은 전남 완도 청산도 슬로길을 천천히 걸었어요. 아시아 최초 슬로시티로 지정된 섬이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 청산도만의 독특한 돌담 밭 문화가 있어요. 청산도 밭은 돌담으로 경계를 지었어요. 일반 농촌은 흙으로 밭 경계를 나누는데 청산도는 돌담이에요. 청산도는 섬이라 경작할 수 있는 토양이 부족했어요. 그래서 바위를 쪼개고 돌을 모아 밭을 만들었어요. 돌담으로 경계를 지으면 바람을 막고 토양 유실을 방지할 수 있어요. 이 돌담 밭이 청산도 풍경의 핵심이에요. 슬로길을 걸으면 돌담 밭 사이로 보이는 바다가 청산도 특유의 경관이에요. 국제슬로시티연맹이 청산도를 지정할 때 이 돌담 밭 경관도 평가 요소였어요. 너무 환경이 이렇게 문화를 만든다는 게 좋았습니다.',
    secret_tip:'청산도 돌담 밭 = 섬에서 토양 부족으로 돌로 경계 만든 세계 유일 구조 — 바람 막고 토양 유실 방지. 슬로시티 지정 평가 요소. 영화 서편제 촬영지 봄 청보리밭 파란 배경 핵심',
    filming_guide:'청산도 돌담 밭 전경. 돌담 사이 바다 보이는 구도. 슬로길 걷는 여유로운 장면.',
    broll_ideas:['청산도 돌담 밭 전경','돌담 사이 바다','슬로길 걷기','청보리밭+돌담','서편제 촬영지'],
    hooks:['청산도 밭이 돌담으로 돼있어요','섬이라 토양이 부족해서예요','세계에서 유일한 구조예요','슬로시티 지정 요소였어요','완도 청산도 꿀팁'],
    thumbnails:['돌담 밭 전경','돌담 사이 바다','슬로길 걷기','청보리밭 돌담','서편제 촬영지'],
    captions:{youtube:'완도 청산도 — 돌담 밭이 세계 유일이에요 🚶\n\n섬에서 토양 부족으로 돌로 경계 만든 것!\n아시아 최초 슬로시티 지정 요소\n\n📍 전남 완도군 청산면 청산도 슬로길\n🚶 아시아 최초 슬로시티\n\n#완도청산도 #청산도슬로길 #완도 #전남여행 #돌담밭세계유일',instagram:'완도 청산도 돌담 밭이 세계 유일이에요 🚶\n\n섬에서 토양 부족으로 돌로 경계 ✨\n아시아 최초 슬로시티 지정 평가 요소\n\n📍 전남 완도 청산도\n\n#완도청산도 #청산도 #완도여행 #전남 #GemKorea',tiktok:'완도 청산도 꿀팁 🚶 돌담 밭이 세계 유일이에요! 섬에서 토양이 부족해 돌로 밭 경계를 만든 것 // 슬로시티 지정 요소가 됐어요 #완도청산도 #청산도슬로길 #전남'},
    hashtags:{korean:['#한국여행','#전남여행','#완도여행','#청산도','#GemKorea'],place_specific:['#완도청산도돌담밭세계유일','#섬토양부족돌경계','#슬로시티지정요소','#아시아최초슬로시티']}
  },
  {
    experience_id:'EX-CB-NAT-046', experience_name:'제천 청풍호 유람선', category_sub:'자연체험', region:'충청북도',
    script_30s:'오늘은 제천 청풍호 유람선을 탔어요. 근데 아무도 안 알려주는 게 있어요 — 청풍호 밑에 수몰된 마을이 있어요. 충주댐 건설로 7개 군 수백 개 마을이 물속에 잠겼어요. 수위 낮은 날 마을 흔적이 보여요. 너무 댐이 이렇게 역사를 덮었다는 게 좋았습니다.',
    script_60s:'오늘은 충북 제천 청풍호 유람선을 타고 충주호 절경을 감상했어요. 충주댐 건설로 형성된 인공 호수예요. 근데 아무도 안 알려주는 꿀팁 하나 — 청풍호 수면 아래의 역사가 있어요. 청풍호는 1985년 충주댐이 완공되면서 형성된 인공 호수예요. 댐 건설 당시 충북 제천·충주·단양·청원·음성과 경북·경기 지역까지 7개 군의 땅이 수몰됐어요. 물에 잠긴 마을이 수백 개예요. 이 마을 주민 7만여 명이 고향을 잃고 이주했어요. 수위가 낮은 가뭄 해에는 수면 위로 수몰 마을 담장과 집터 흔적이 드러나요. 유람선을 타고 창문 밖을 보면 아름다운 호수 풍경 아래 수몰된 역사가 있어요. 청풍문화재단지는 수몰 지역 유물을 옮겨 보존한 곳이에요. 너무 댐이 이렇게 역사를 물속에 덮었다는 게 좋았습니다.',
    secret_tip:'청풍호 수면 아래 = 7개 군 수백 개 수몰 마을 — 7만 명 이주. 가뭄 수위 낮을 때 담장·집터 드러남. 청풍문화재단지에 수몰 유물 보존. 월악산+청풍호 세트',
    filming_guide:'청풍호 유람선에서 수면 아래 바라보기. 월악산+청풍호 파노라마. 청풍문화재단지 전시.',
    broll_ideas:['청풍호 유람선 수면 조망','월악산+청풍호 파노라마','문화재단지 수몰 유물','저수위 때 집터 흔적','청풍호 일몰'],
    hooks:['청풍호 밑에 수몰 마을이 있어요','7개 군이 물에 잠겼어요','7만 명이 고향을 잃었어요','가뭄엔 마을 흔적이 보여요','제천 청풍호 꿀팁'],
    thumbnails:['유람선 수면 조망','월악산 파노라마','수몰 유물','집터 흔적','청풍호 일몰'],
    captions:{youtube:'제천 청풍호 유람선 — 수면 아래에 수몰 마을이 있어요 🚢\n\n7개 군 수백 마을이 물에 잠겼어요!\n7만 명이 고향을 잃은 역사\n\n📍 충북 제천시 청풍면 청풍나루\n🚢 충주댐 건설로 형성된 인공 호수\n\n#제천청풍호유람선 #청풍호 #제천 #충북여행 #수몰마을역사',instagram:'제천 청풍호 유람선 수면 아래 수몰 마을이 있어요 🚢\n\n7개 군 수백 마을이 물에 잠김 ✨\n7만 명이 고향 잃은 역사가 아름다운 호수 아래에\n\n📍 충북 제천 청풍호\n\n#제천청풍호 #청풍호 #제천여행 #충북 #GemKorea',tiktok:'제천 청풍호 꿀팁 🚢 수면 아래에 수몰 마을이 있어요! 7개 군 수백 마을이 물에 잠겼어요 // 7만 명이 고향을 잃은 역사 위를 유람선이 달려요 #제천청풍호 #제천여행 #충북'},
    hashtags:{korean:['#한국여행','#충북여행','#제천여행','#청풍호','#GemKorea'],place_specific:['#제천청풍호수몰마을역사','#7개군수백마을수몰','#7만명고향상실','#가뭄집터흔적드러남']}
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
