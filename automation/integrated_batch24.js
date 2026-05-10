const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const now = new Date().toISOString().slice(0,19);

const newExps = [
  {experience_id:'EX-GN-NAT-036',name:'남해 보리암+금산 트레킹',category_main:'문화/체험',category_sub:'자연체험',region_main:'GN',region_sub:'경상남도 남해군',address:'경상남도 남해군 상주면 보리암로 665',lat:34.8344,lng:127.9222,price:'성인 1,000원',duration:'2~3시간',reservation_required:false,target_user:['개인','커플','가족'],nearby_places:[],related_heritage_ids:[],short_description:'금산 꼭대기 절벽에 매달린 한국 3대 기도 명소 보리암을 트레킹하는 체험이다. 보리암에서 내려다보는 남해 다도해 전경이 압도적이며 해수관음상과 함께 태양빛이 들어오는 새벽 체험이 특히 아름답다.',source_urls:['https://www.namhae.go.kr/'],data_confidence:'high',tags:['보리암','금산','남해','경남','3대기도명소','다도해전경','트레킹'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'04:00~19:00',phone:'055-862-6115'},
  {experience_id:'EX-GW-NAT-036',name:'강화 마니산+함허동천 계곡',category_main:'문화/체험',category_sub:'자연체험',region_main:'GW',region_sub:'인천광역시 강화군',address:'인천광역시 강화군 화도면 마니산 일원',lat:37.5941,lng:126.4353,price:'성인 1,000원',duration:'3~4시간',reservation_required:false,target_user:['개인','커플','가족'],nearby_places:[],related_heritage_ids:[],short_description:'강화 마니산 등산 후 함허동천 계곡에서 여름 물놀이를 즐기는 코스다. 단군 천제 참성단과 계곡을 하루에 즐기는 강화도 최고 여름 코스로 인천에서 1시간 거리다.',source_urls:['https://www.ganghwa.go.kr/'],data_confidence:'high',tags:['마니산','함허동천','강화','인천','계곡','여름','단군'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'seasonal',operating_hours:'연중 (계곡: 6~9월)',phone:'032-930-4020'},
  {experience_id:'EX-JN-NAT-039',name:'고흥 팔영산 8봉 일출 등산',category_main:'문화/체험',category_sub:'자연체험',region_main:'JN',region_sub:'전라남도 고흥군',address:'전라남도 고흥군 점암면 팔영산 일원',lat:34.5908,lng:127.4472,price:'성인 1,000원',duration:'4~5시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'8개의 암봉이 연속으로 솟은 팔영산 1봉~8봉을 일출 시간에 등산하는 체험이다. 이른 새벽 1봉에 올라 동해 방향 일출을 보고 각 봉우리에서 다른 다도해 파노라마를 즐기는 전남 최고 암봉 등산 코스다.',source_urls:['https://www.goheung.go.kr/'],data_confidence:'high',tags:['팔영산','고흥','전남','8봉','일출등산','암봉','다도해'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'일출 전 입산 가능',phone:'061-830-8700'},
  {experience_id:'EX-GG-NAT-042',name:'양평 세미원 수련꽃 투어',category_main:'문화/체험',category_sub:'자연체험',region_main:'GG',region_sub:'경기도 양평군',address:'경기도 양평군 양서면 양수리 세미원',lat:37.5350,lng:127.4681,price:'성인 5,000원',duration:'1~2시간',reservation_required:false,target_user:['커플','가족','개인'],nearby_places:[],related_heritage_ids:[],short_description:'두물머리 북한강변 세미원에서 여름 연꽃·수련을 감상하는 체험이다. 7~8월 수만 송이 연꽃과 수련이 가득 피어나는 수도권 최고 여름 꽃 명소로 연꽃 교육 프로그램도 운영된다.',source_urls:['https://www.semiwon.or.kr/'],data_confidence:'high',tags:['세미원','양평','경기','연꽃','수련','여름꽃','두물머리'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'seasonal',operating_hours:'09:00~18:00 (7~8월 연꽃 시즌)',phone:'031-775-1835'},
  {experience_id:'EX-JN-NAT-040',name:'장성 남창계곡 여름 물놀이',category_main:'문화/체험',category_sub:'자연체험',region_main:'JN',region_sub:'전라남도 장성군',address:'전라남도 장성군 북이면 남창계곡',lat:35.3708,lng:126.8500,price:'무료',duration:'3~5시간',reservation_required:false,target_user:['가족','어린이'],nearby_places:[],related_heritage_ids:[],short_description:'전남 장성 남창계곡에서 여름 물놀이와 계곡 트레킹을 즐기는 체험이다. 맑고 시원한 계곡물과 주변 자연이 어우러지는 남도 대표 피서지로 전남에서 가장 깨끗한 계곡 중 하나다.',source_urls:['https://www.jangseong.go.kr/'],data_confidence:'high',tags:['남창계곡','장성','전남','계곡','물놀이','피서','여름'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'seasonal',operating_hours:'6~9월 (무료)',phone:'061-390-7211'},
  {experience_id:'EX-GN-NAT-037',name:'창원 주남저수지 철새 탐조',category_main:'문화/체험',category_sub:'자연체험',region_main:'GN',region_sub:'경상남도 창원시',address:'경상남도 창원시 의창구 동읍 주남로 126',lat:35.3025,lng:128.6708,price:'무료',duration:'2~3시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'창원 주남저수지에서 겨울 철새를 탐조하는 체험이다. 해마다 수십만 마리의 가창오리·재두루미·청둥오리 등이 월동하는 동아시아 최대 내륙 철새 도래지 중 하나로 망원경 탐조가 특별하다.',source_urls:['https://www.changwon.go.kr/'],data_confidence:'high',tags:['주남저수지','창원','경남','철새탐조','가창오리','겨울탐조','철새'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'seasonal',operating_hours:'11~3월 철새 시즌 (무료)',phone:'055-225-3691'},
  {experience_id:'EX-GG-NAT-043',name:'남양주 한음저수지 낚시',category_main:'문화/체험',category_sub:'낚시/어촌 체험',region_main:'GG',region_sub:'경기도 남양주시',address:'경기도 남양주시 진접읍 한음저수지',lat:37.7097,lng:127.2142,price:'1인 10,000원~',duration:'3~5시간',reservation_required:false,target_user:['개인','가족'],nearby_places:[],related_heritage_ids:[],short_description:'경기도 남양주 한음저수지에서 잉어·붕어 낚시를 즐기는 체험이다. 경관이 아름다운 저수지에서 초보자도 즐길 수 있는 낚시 체험으로 서울 근교 당일치기 낚시 코스로 인기다.',source_urls:['https://www.nyj.go.kr/'],data_confidence:'high',tags:['한음저수지낚시','남양주','경기','잉어낚시','붕어','서울근교','당일치기'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'seasonal',operating_hours:'4~11월 낚시 시즌',phone:'031-590-8305'},
  {experience_id:'EX-JN-NAT-041',name:'여수 오동도 모노레일+동백',category_main:'문화/체험',category_sub:'자연체험',region_main:'JN',region_sub:'전라남도 여수시',address:'전라남도 여수시 수정동 오동도 일원',lat:34.7390,lng:127.7381,price:'모노레일 성인 3,000원',duration:'1~2시간',reservation_required:false,target_user:['가족','커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'여수 오동도를 모노레일로 탐방하는 체험이다. 섬 전체를 모노레일로 둘러볼 수 있으며 2~3월 동백 시즌에는 붉은 동백꽃이 모노레일 창밖으로 펼쳐지는 특별한 경험을 할 수 있다.',source_urls:['https://www.yeosu.go.kr/'],data_confidence:'high',tags:['오동도모노레일','여수','전남','동백','모노레일','봄꽃','남해'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~22:00',phone:'061-659-1819'},
  {experience_id:'EX-GG-NAT-044',name:'포천 허브아일랜드 허브 체험',category_main:'문화/체험',category_sub:'농촌 체험',region_main:'GG',region_sub:'경기도 포천시',address:'경기도 포천시 신북면 청신로947번길 35',lat:38.0152,lng:127.2152,price:'성인 12,000원',duration:'2~3시간',reservation_required:false,target_user:['커플','가족','개인'],nearby_places:[],related_heritage_ids:[],short_description:'포천 허브아일랜드에서 라벤더·로즈마리·민트 등 허브를 수확하고 허브 오일·허브차·허브 비누를 직접 만드는 체험이다. 허브 향기 가득한 정원을 산책하고 허브 레스토랑에서 식사도 즐길 수 있다.',source_urls:['https://www.herbisland.co.kr/'],data_confidence:'high',tags:['허브아일랜드','포천','경기','라벤더','허브체험','향수만들기','커플'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~22:00',phone:'031-535-6494'},
  {experience_id:'EX-GN-NAT-038',name:'고성 당항포 이순신 해전 체험',category_main:'문화/체험',category_sub:'역사 체험',region_main:'GN',region_sub:'경상남도 고성군',address:'경상남도 고성군 회화면 당항만로 1116',lat:35.0167,lng:128.3392,price:'성인 3,000원',duration:'1~2시간',reservation_required:false,target_user:['가족','개인'],nearby_places:[],related_heritage_ids:[],short_description:'임진왜란 이순신 장군 당항포대첩 현장을 탐방하는 역사 체험이다. 1592년·1594년 두 차례 왜선을 격멸한 당항포에서 거북선 복원 모형과 이순신 영상관을 통해 해전 역사를 이해한다.',source_urls:['https://www.goseong.go.kr/'],data_confidence:'high',tags:['당항포','고성','이순신','경남','임진왜란','당항포대첩','거북선'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00',phone:'055-670-4168'},
  {experience_id:'EX-GW-NAT-037',name:'강원 정선 화암 8경 트레킹',category_main:'문화/체험',category_sub:'자연체험',region_main:'GW',region_sub:'강원특별자치도 정선군',address:'강원특별자치도 정선군 화암면 화암리 일원',lat:37.3800,lng:128.7628,price:'무료',duration:'3~5시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'정선 화암 8경(화암약수·화암동굴·용마폭포·소금강 등)을 하루에 탐방하는 트레킹 코스다. 정선 5일장과 아리랑 문화 중심지이기도 한 화암에서 자연과 역사를 동시에 즐기는 코스다.',source_urls:['https://www.jeongseon.go.kr/'],data_confidence:'high',tags:['화암8경','정선','강원','화암약수','용마폭포','정선아리랑','트레킹'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (무료)',phone:'033-560-2660'},
  {experience_id:'EX-JN-NAT-042',name:'곡성 섬진강 기차마을 레일바이크',category_main:'문화/체험',category_sub:'어드벤처/레포츠',region_main:'JN',region_sub:'전라남도 곡성군',address:'전라남도 곡성군 오곡면 기차마을로 232',lat:35.2783,lng:127.2878,price:'레일바이크 2인 15,000원~',duration:'1~2시간',reservation_required:true,target_user:['커플','가족','개인'],nearby_places:[],related_heritage_ids:[],short_description:'섬진강 변 폐기찻길을 레일바이크로 달리는 체험이다. 곡성 기차마을에서 출발해 섬진강 절경 구간을 달리며 드라마·CF 촬영지로 유명한 섬진강 봄 경관을 즐길 수 있다.',source_urls:['https://www.gstrain.co.kr/'],data_confidence:'high',tags:['곡성레일바이크','곡성','전남','섬진강','레일바이크','기차마을','봄꽃'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~17:00',phone:'061-363-9900'}
];

const newShorts = [
  {
    experience_id:'EX-DG-FUD-001', experience_name:'대구 막창 골목 투어', category_sub:'지역 먹거리', region:'대구광역시',
    script_30s:'오늘은 대구 안지랑 막창 골목에 왔어요. 대구 대표 야식이에요. 근데 아무도 안 알려주는 게 있어요 — 막창은 연탄불이 핵심이에요. 가스불로 구우면 달라요. 연탄 불향이 막창과 섞이는 그 맛이에요. 너무 불이 맛을 만든다는 게 좋았습니다.',
    script_60s:'오늘은 대구 중구 안지랑 막창 골목에 왔어요. 30여 개 막창집이 몰려있는 대구 대표 먹거리 골목이에요. 소막창과 돼지막창이 있고 연탄불에 구워 먹는 게 정통이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 막창집 선택할 때 연탄불 집을 골라야 해요. 안지랑 막창 골목에서 가스불을 쓰는 집과 연탄불을 쓰는 집이 섞여있어요. 연탄불로 굽는 막창은 불향이 막창 기름과 섞이면서 특유의 향이 나요. 가스불로는 절대 낼 수 없는 맛이에요. 연탄 열기로 서서히 구워지면서 겉은 바삭하고 속은 쫄깃한 질감도 달라요. 가게 앞에서 연탄 연기가 피어오르는 집을 선택하면 돼요. 너무 불이 맛을 완성한다는 게 좋았습니다.',
    secret_tip:'연탄불 집 선택 = 막창 핵심 — 가스불과 연탄불 불향이 완전히 다름. 가게 앞 연탄 연기 피어오르는 곳 선택. 안지랑 골목 저녁 17시~22시 운영. 대구 근대 골목 세트 코스',
    filming_guide:'연탄불 위 막창 굽는 장면 클로즈업. 연탄 연기 피어오르는 골목 전경. 막창 한 입 먹는 표정.',
    broll_ideas:['연탄불 막창 굽는 클로즈업','연탄 연기 피어오르는 골목','막창 한 입 먹는 표정','안지랑 막창 골목 야경','소막창 돼지막창 비교'],
    hooks:['막창은 연탄불이 핵심이에요','가스불이랑 맛이 달라요','연탄 연기 피어오르는 집 선택','불향이 막창을 완성해요','대구 안지랑 막창 꿀팁'],
    thumbnails:['연탄불 막창 굽기','연탄 연기 골목','막창 먹는 표정','막창 골목 야경','소막창 돼지막창'],
    captions:{youtube:'대구 안지랑 막창 — 연탄불 집을 골라야 해요 🔥\n\n가스불이랑 불향이 완전히 달라요!\n연탄 연기 피어오르는 집 선택\n\n📍 대구 중구 안지랑 막창 골목\n🔥 17:00~22:00 운영\n\n#대구막창 #안지랑막창 #대구여행 #막창골목 #연탄불',instagram:'대구 막창 연탄불 집을 골라야 해요 🔥\n\n연탄 불향이 막창을 완성해요 ✨\n가스불이랑 맛이 달라요\n\n📍 대구 안지랑 막창 골목\n\n#대구막창 #안지랑막창 #대구여행 #막창 #GemKorea',tiktok:'대구 막창 꿀팁 🔥 연탄불 집을 골라야 해요! 가스불이랑 불향이 완전히 달라요 // 가게 앞 연탄 연기 피어오르는 곳 선택하세요 #대구막창 #안지랑막창 #대구여행'},
    hashtags:{korean:['#한국여행','#대구여행','#막창','#로컬먹거리','#GemKorea'],place_specific:['#대구안지랑막창','#연탄불막창','#막창골목','#대구야식']}
  },
  {
    experience_id:'EX-GG-FUD-002', experience_name:'수원 통닭골목 치킨 투어', category_sub:'지역 먹거리', region:'경기도',
    script_30s:'오늘은 수원 영동시장 통닭 골목에 왔어요. 수원 통닭의 원조예요. 근데 아무도 안 알려주는 게 있어요 — 통닭 뼈 사이에 기름이 있어요. 뼈를 빨면 국물이 나와요. 그게 통닭 진짜 맛이에요. 살만 먹으면 반만 먹는 거예요. 너무 뼈 사이 맛이 진짜라는 게 좋았습니다.',
    script_60s:'오늘은 경기도 수원 영동시장 통닭 골목에 왔어요. 수십 년 역사의 원조 통닭 골목이에요. 기름에 튀긴 전통 방식 통닭과 함께 맥주 한 잔이 수원 여행 완성이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 통닭을 먹을 때 살만 먹지 말고 뼈도 빨아봐야 해요. 수원 통닭 전통 방식으로 튀기면 뼈 사이에 기름과 육즙이 배어있어요. 뼈를 입에 물고 살짝 힘을 주어 빨면 진한 국물이 나와요. 그게 통닭의 진짜 맛이에요. 살코기 맛보다 뼈에서 나오는 육즙이 더 진하고 맛있어요. 오래된 통닭집들이 이 방식으로 튀기는 이유가 뼈 사이 맛이 살아있기 때문이에요. 너무 뼈 사이 맛이 진짜라는 걸 알아서 좋았습니다.',
    secret_tip:'통닭 뼈 빨기 = 진짜 맛 — 뼈 사이 육즙이 살코기보다 더 진함. 전통 방식 튀김으로 뼈에 육즙 배어있음. 수원 화성 야경 투어+통닭 황금 저녁 코스',
    filming_guide:'통닭 뼈 빨아서 국물 나오는 클로즈업. 황금빛 통닭 잘라 육즙 보이는 장면. 수원 통닭 골목 야경.',
    broll_ideas:['통닭 뼈 빨기 클로즈업','황금빛 통닭 육즙','수원 통닭 골목 야경','맥주와 통닭 세트','통닭집 전통 튀김 과정'],
    hooks:['통닭 뼈를 빨아야 진짜 맛이에요','살만 먹으면 반만 먹는 거예요','뼈 사이 육즙이 더 진해요','수원 원조 통닭 골목이에요','수원 통닭 꿀팁 있어요'],
    thumbnails:['통닭 뼈 빨기','황금빛 통닭 육즙','수원 골목 야경','맥주와 통닭','통닭 튀김 과정'],
    captions:{youtube:'수원 통닭골목 — 뼈를 빨아야 진짜 맛이에요 🍗\n\n뼈 사이 육즙이 살코기보다 진해요!\n수원 원조 통닭 전통 방식\n\n📍 경기도 수원시 영동시장 통닭골목\n🍗 수원화성 야경+통닭 황금 저녁 코스\n\n#수원통닭 #영동시장통닭 #수원여행 #경기여행 #통닭골목',instagram:'수원 통닭 뼈를 빨아야 진짜 맛이에요 🍗\n\n뼈 사이 육즙이 더 진함 ✨\n살만 먹으면 반만 먹는 거예요\n\n📍 경기 수원 영동시장 통닭골목\n\n#수원통닭 #영동시장 #수원여행 #경기 #GemKorea',tiktok:'수원 통닭 꿀팁 🍗 뼈를 빨아야 진짜 맛이에요! 뼈 사이 육즙이 살코기보다 더 진함 // 살만 먹으면 반만 먹는 거예요 #수원통닭 #영동시장 #수원여행'},
    hashtags:{korean:['#한국여행','#경기여행','#수원여행','#통닭','#GemKorea'],place_specific:['#수원영동통닭골목','#통닭뼈빨기','#원조통닭','#수원통닭전통']}
  },
  {
    experience_id:'EX-JN-PHT-001', experience_name:'순천 낙안읍성 민속마을', category_sub:'역사 체험', region:'전라남도',
    script_30s:'오늘은 순천 낙안읍성에 왔어요. 조선 시대 원형 그대로 주민이 사는 마을이에요. 근데 아무도 안 알려주는 게 있어요 — 이른 아침 연기가 피어오를 때 와야 해요. 주민들이 아침 밥 짓는 연기가 초가집 굴뚝에서 나오는 그 장면이 진짜 조선 시대예요. 너무 연기가 역사라는 게 좋았습니다.',
    script_60s:'오늘은 전남 순천 낙안읍성 민속 마을에 왔어요. 조선 시대 읍성 원형이 그대로 보존된 곳으로 실제 주민이 거주하는 살아있는 민속 마을이에요. 성벽·동헌·객사·초가집이 500년 전 그대로예요. 근데 아무도 안 알려주는 꿀팁 하나 — 낙안읍성의 가장 아름다운 시간은 이른 아침 7~8시예요. 주민들이 아침밥을 짓기 시작하면 초가집 굴뚝마다 연기가 피어올라요. 이 연기가 성벽 안을 가득 채우는 장면이 마치 조선 시대로 시간 여행을 온 것 같은 느낌이에요. 관광객이 아직 들어오지 않은 그 시간에 혼자 성벽 위를 걸으면서 연기 피어오르는 마을을 내려다보는 경험이 낙안읍성 최고의 순간이에요. 너무 연기 하나가 역사를 불러오는 것 같아서 좋았습니다.',
    secret_tip:'이른 아침 7~8시 = 굴뚝 연기 피어오르는 시간 — 주민 아침 밥 짓는 연기가 성벽 안 가득. 관광객 없는 성벽 위에서 연기 내려다보기. 조선 시대 시간 여행 느낌',
    filming_guide:'굴뚝 연기 피어오르는 이른 아침 전경. 성벽 위에서 마을 내려다보는 장면. 초가집 지붕과 연기 클로즈업.',
    broll_ideas:['굴뚝 연기 이른 아침 전경','성벽 위 마을 내려다보기','초가집 지붕 연기 클로즈업','낙안읍성 성벽 전체 광각','이른 아침 관광객 없는 골목'],
    hooks:['굴뚝 연기 피어오를 때 와야 해요','이른 아침 7~8시가 최고예요','조선 시대 시간 여행 느낌이에요','연기 하나가 역사를 불러와요','낙안읍성 꿀팁 있어요'],
    thumbnails:['굴뚝 연기 이른 아침','성벽 위 내려다보기','초가집 연기 클로즈업','성벽 전체 광각','이른 아침 골목'],
    captions:{youtube:'순천 낙안읍성 — 이른 아침 굴뚝 연기가 진짜예요 🏘️\n\n7~8시 주민 아침밥 연기가 성벽 가득!\n관광객 없는 그 시간 성벽 걷기\n\n📍 전남 순천시 낙안읍성 민속마을\n🏘️ 이른 아침 7~8시 방문 추천\n\n#낙안읍성 #순천 #전남여행 #이른아침 #조선시대',instagram:'순천 낙안읍성 이른 아침 굴뚝 연기가 진짜예요 🏘️\n\n7~8시 성벽 안 연기 가득 조선 시대 느낌 ✨\n관광객 없는 그 시간이 최고\n\n📍 전남 순천 낙안읍성\n\n#낙안읍성 #순천여행 #전남 #이른아침 #GemKorea',tiktok:'낙안읍성 꿀팁 🏘️ 이른 아침 7~8시에 가세요! 주민 아침밥 굴뚝 연기 성벽 가득 조선 시대 시간 여행 느낌 // 관광객 없는 성벽 위에서 내려다보기 #낙안읍성 #순천여행 #전남'},
    hashtags:{korean:['#한국여행','#전남여행','#순천여행','#역사마을','#GemKorea'],place_specific:['#낙안읍성민속마을','#굴뚝연기아침','#살아있는조선마을','#이른아침낙안']}
  },
  {
    experience_id:'EX-SE-MED-001', experience_name:'서울 한방 첩약 체험 (한의원)', category_sub:'한방 체험', region:'서울특별시',
    script_30s:'오늘은 인사동 한의원에서 한방 체험을 했어요. 맥진으로 체질을 봐요. 근데 아무도 안 알려주는 게 있어요 — 맥진 받을 때 긴장하면 맥이 빨라져요. 편하게 있어야 정확한 진단이 나와요. 그래서 한의사가 먼저 말을 걸어요. 긴장을 푸는 거예요. 너무 그 배려가 의학이라는 게 좋았습니다.',
    script_60s:'오늘은 서울 종로구 인사동 한의원에서 한방 체험을 했어요. 맥진으로 체질 진단을 받고 한방차와 첩약을 처방받는 체험이에요. 외국인도 영어 통역으로 체험이 가능해요. 근데 아무도 안 알려주는 꿀팁 하나 — 맥진 받기 전 자신의 몸 상태를 한의사에게 솔직하게 말해야 해요. 한의학에서 맥진은 맥박 속도·강도·깊이·리듬으로 몸 상태를 판단하는데, 진료 직전 긴장하거나 커피를 마셨으면 맥이 빨라져서 정확한 진단이 어려워요. 한의사가 먼저 가볍게 말을 걸고 안정시키는 이유가 바로 정확한 맥진을 위해서예요. 긴장을 풀고 편안한 상태에서 받아야 해요. 그 배려 자체가 한의학의 일부예요. 너무 그 세심한 배려가 의학이라는 게 좋았습니다.',
    secret_tip:'맥진 전 긴장 풀기 = 정확한 진단 핵심 — 긴장하면 맥 빨라져 부정확. 커피 음주 운동 후 피하기. 한의사가 먼저 말 거는 이유가 이것. 인사동 경복궁 세트 코스',
    filming_guide:'맥진 손목 짚는 한의사 클로즈업. 편안한 상태로 진단받는 체험자. 인사동 한의원 외경.',
    broll_ideas:['맥진 손목 짚는 클로즈업','편안한 상태 진단받기','한방차 달이는 과정','인사동 한의원 외경','첩약 처방전 클로즈업'],
    hooks:['맥진 받을 때 긴장하면 안 돼요','한의사가 먼저 말 거는 이유 알아요?','긴장을 풀어야 정확한 진단이에요','그 배려가 의학이에요','서울 한방 체험 꿀팁'],
    thumbnails:['맥진 손목 짚기','편안한 상태 진단','한방차 달이기','인사동 한의원','첩약 처방전'],
    captions:{youtube:'인사동 한방 체험 — 긴장하면 맥진 부정확해요 🌿\n\n한의사가 먼저 말 거는 이유가 이것!\n그 배려가 한의학이에요\n\n📍 서울 종로구 인사동 한의원\n🌿 외국인 영어 통역 체험 가능\n\n#인사동한방체험 #서울여행 #한의원 #맥진 #체질진단',instagram:'인사동 한방 맥진 긴장하면 안 돼요 🌿\n\n한의사가 먼저 말 거는 이유가 정확한 진단 위해서 ✨\n그 배려가 한의학\n\n📍 서울 인사동 한의원\n\n#인사동한방 #서울여행 #한의원 #맥진 #GemKorea',tiktok:'인사동 한방 꿀팁 🌿 맥진 받을 때 긴장하면 맥이 빨라져서 부정확해요! 한의사가 먼저 말 거는 이유가 이것 // 긴장 풀어야 정확한 체질 진단 #인사동한방 #서울여행 #맥진'},
    hashtags:{korean:['#한국여행','#서울여행','#인사동','#한방체험','#GemKorea'],place_specific:['#인사동한방체험','#맥진긴장금물','#체질진단','#외국인한의원']}
  },
  {
    experience_id:'EX-GG-FAM-003', experience_name:'에버랜드 T-EXPRESS 탑승', category_sub:'테마파크', region:'경기도',
    script_30s:'오늘은 에버랜드 T-EXPRESS를 탔어요. 아시아 최고 목조 롤러코스터예요. 근데 아무도 안 알려주는 게 있어요 — 앞 칸보다 뒤 칸이 더 무서워요. 앞 칸은 보이기 때문에 준비하는데 뒤 칸은 갑자기 내려가요. 그 차이가 완전히 달라요. 너무 칸 선택이 다 다르다는 게 좋았습니다.',
    script_60s:'오늘은 경기도 용인 에버랜드 T-EXPRESS를 탔어요. 아시아 최고 인기 목조 롤러코스터예요. 최고 경사 77도, 최고 속도 104km/h로 아시아에서 가장 무섭다는 롤러코스터예요. 근데 아무도 안 알려주는 꿀팁 하나 — T-EXPRESS 칸마다 체감 다름이에요. 앞 칸은 눈앞에 내려가는 게 보여서 무섭지만 준비할 수 있어요. 그런데 뒤 칸은 갑자기 앞이 빠져나가면서 끌려가는 느낌이에요. 뒤 칸이 훨씬 더 무서워요. 스릴을 최대화하려면 뒤 칸을 선택해야 해요. 반대로 스릴을 줄이려면 앞 칸이 더 나아요. 본인의 공포 내성에 맞게 칸을 선택하면 같은 롤러코스터에서 완전히 다른 경험을 할 수 있어요. 너무 칸 하나가 경험을 결정한다는 게 좋았습니다.',
    secret_tip:'T-EXPRESS 뒤 칸이 더 무서움 — 앞이 보여 준비 가능한 앞 칸 vs 갑자기 끌려가는 뒤 칸. 스릴 최대화 = 맨 뒤, 스릴 줄이기 = 맨 앞. 칸 선택이 경험 결정. 평일 오전이 대기 짧음',
    filming_guide:'T-EXPRESS 맨 뒤 칸 탑승 표정 (공포+쾌감). 77도 경사 내려가는 순간 슬로우. 에버랜드 T-EXPRESS 외관 전경.',
    broll_ideas:['뒤 칸 탑승 공포+쾌감 표정','77도 경사 내려가는 슬로우','T-EXPRESS 외관 전경','탑승 전 줄 서는 장면','내려오는 순간 환호'],
    hooks:['T-EXPRESS 뒤 칸이 더 무서워요','앞 칸은 보여서 준비 가능해요','뒤 칸은 갑자기 끌려가요','칸 선택이 경험을 결정해요','에버랜드 T-EXPRESS 꿀팁'],
    thumbnails:['뒤 칸 공포+쾌감 표정','77도 경사 슬로우','T-EXPRESS 외관','탑승 전 줄 서기','내려오는 환호'],
    captions:{youtube:'에버랜드 T-EXPRESS — 뒤 칸이 더 무서워요 🎢\n\n앞 칸은 보여서 준비 가능, 뒤 칸은 갑자기 끌려가요!\n칸 선택이 경험을 결정해요\n\n📍 경기도 용인시 에버랜드\n🎢 스릴 최대 = 맨 뒤 / 스릴 줄이기 = 맨 앞\n\n#에버랜드T-EXPRESS #에버랜드 #용인 #경기여행 #롤러코스터',instagram:'에버랜드 T-EXPRESS 뒤 칸이 더 무서워요 🎢\n\n갑자기 끌려가는 느낌 차원이 달라요 ✨\n칸 선택이 경험 결정\n\n📍 경기 용인 에버랜드\n\n#에버랜드T-EXPRESS #에버랜드 #용인 #롤러코스터 #GemKorea',tiktok:'에버랜드 T-EXPRESS 꿀팁 🎢 뒤 칸이 앞 칸보다 훨씬 더 무서워요! 갑자기 끌려가는 느낌 // 스릴 최대화 맨 뒤 스릴 줄이기 맨 앞 칸 선택 #에버랜드T-Express #용인 #경기여행'},
    hashtags:{korean:['#한국여행','#경기여행','#용인여행','#에버랜드','#GemKorea'],place_specific:['#에버랜드T-Express','#뒤칸더무서움','#목조롤러코스터','#아시아최고롤러코스터']}
  },
  {
    experience_id:'EX-SE-NIG-001', experience_name:'서울 야간 한강 유람선', category_sub:'야경/야간투어', region:'서울특별시',
    script_30s:'오늘은 서울 한강 유람선을 탔어요. 63빌딩·마포대교 야경이에요. 근데 아무도 안 알려주는 게 있어요 — 유람선 선수(앞쪽)보다 선미(뒤쪽)에 앉아야 야경이 오래 보여요. 앞에서 보면 지나가지만 뒤에서 보면 멀어지는 게 보여요. 너무 방향이 이렇게 중요하다는 게 좋았습니다.',
    script_60s:'오늘은 서울 여의도 한강 유람선을 탔어요. 반포대교 달빛무지개분수·63빌딩·마포대교 야경을 1시간 동안 감상하는 크루즈예요. 근데 아무도 안 알려주는 꿀팁 하나 — 유람선 자리 선택이 야경 감상의 핵심이에요. 유람선이 여의도에서 한남 방향으로 가는데 이때 선미(뒤쪽) 자리에 앉으면 63빌딩·마포대교 야경이 멀어지면서 점점 작아지는 파노라마 뷰를 볼 수 있어요. 선수(앞쪽) 자리는 반포대교·한남대교 방향 야경을 먼저 보는데 지나치면 끝이에요. 선미에서 보는 야경이 더 오래 감상할 수 있어요. 그리고 배가 돌아올 때는 반대 방향이 되니까 이쪽도 놓치지 마세요. 너무 방향 하나가 야경 감상을 결정한다는 게 좋았습니다.',
    secret_tip:'유람선 선미(뒤쪽) 자리 = 야경 오래 감상 — 63빌딩·마포대교 점점 멀어지는 파노라마. 선수는 지나치면 끝. 돌아올 때 반대 방향도 확인. 반포대교 달빛무지개분수 구간 최고',
    filming_guide:'선미에서 63빌딩 멀어지는 야경 파노라마. 반포대교 달빛무지개분수 지나치는 장면. 한강 수면 반사 야경 장노출.',
    broll_ideas:['선미 63빌딩 멀어지는 야경','반포대교 분수 지나치기','한강 수면 반사 장노출','마포대교 야경 파노라마','유람선 내부 한강 감상'],
    hooks:['유람선 선미 자리가 야경 더 오래 봐요','앞쪽은 지나치면 끝이에요','뒤쪽에서 보면 멀어지는 파노라마','방향 하나가 야경 감상 결정','서울 한강 유람선 꿀팁'],
    thumbnails:['선미 63빌딩 멀어지는 야경','반포대교 분수 지나치기','한강 수면 장노출','마포대교 파노라마','유람선 내부'],
    captions:{youtube:'서울 한강 유람선 — 선미 자리가 야경 더 오래 봐요 🌉\n\n63빌딩 멀어지는 파노라마 선미가 최고!\n선수는 지나치면 끝이에요\n\n📍 서울 영등포구 여의도 한강 유람선\n🌉 반포대교 달빛무지개분수 구간 최고\n\n#한강유람선 #서울야경 #서울여행 #여의도 #한강',instagram:'서울 한강 유람선 선미 자리가 야경 오래 봐요 🌉\n\n63빌딩 점점 멀어지는 파노라마 ✨\n선수는 지나치면 끝이에요\n\n📍 서울 여의도 한강 유람선\n\n#한강유람선 #서울야경 #서울여행 #한강 #GemKorea',tiktok:'한강 유람선 꿀팁 🌉 선미(뒤쪽)에 앉아야 해요! 63빌딩이 점점 멀어지는 파노라마 야경 // 선수(앞쪽)는 지나치면 끝이에요 #한강유람선 #서울야경 #서울여행'},
    hashtags:{korean:['#한국여행','#서울여행','#한강','#야경','#GemKorea'],place_specific:['#한강유람선','#선미자리야경','#63빌딩파노라마','#반포달빛무지개분수']}
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
