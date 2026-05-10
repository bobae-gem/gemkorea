const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const now = new Date().toISOString().slice(0,19);

const newExps = [
  {experience_id:'EX-GW-NAT-011',name:'평창 이효석 문학관·메밀꽃 투어',category_main:'문화/체험',category_sub:'역사 체험',region_main:'GW',region_sub:'강원특별자치도 평창군',address:'강원특별자치도 평창군 봉평면 이효석길 33',lat:37.5658,lng:128.4906,price:'성인 2,000원',duration:'2~3시간',reservation_required:false,target_user:['개인','커플','가족'],nearby_places:[],related_heritage_ids:[],short_description:'메밀꽃 필 무렵의 작가 이효석 생가와 문학관을 탐방하고 봉평 메밀꽃밭을 걷는 체험이다. 매년 8~9월 소설 속 배경이 그대로 재현된 봉평 메밀꽃밭이 하얗게 물드는 장관을 감상할 수 있다.',source_urls:['https://www.hyoseok.com/'],data_confidence:'high',tags:['이효석문학관','봉평','메밀꽃','평창','강원','문학여행','메밀꽃필무렵'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00',phone:'033-330-2700'},
  {experience_id:'EX-JN-NAT-009',name:'고흥 나로우주센터+유자농장 코스',category_main:'문화/체험',category_sub:'역사 체험',region_main:'JN',region_sub:'전라남도 고흥군',address:'전라남도 고흥군 봉래면 나로우주센터로 490',lat:34.4319,lng:127.5344,price:'우주과학관 성인 3,000원',duration:'3~5시간',reservation_required:false,target_user:['가족','개인'],nearby_places:[],related_heritage_ids:[],short_description:'나로우주센터 우주과학관 탐방 후 고흥 유자농장 체험을 묶은 하루 코스다. 한국 우주 개발의 상징 나로호 발사대와 우주 체험관을 탐방하고 고흥 특산 유자를 직접 따는 이색 조합 체험이다.',source_urls:['https://www.kari.re.kr/narospacecenter/'],data_confidence:'high',tags:['나로우주센터','고흥','우주','유자농장','코스여행','전남','이색조합'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:30~17:30 (월요일 휴관)',phone:'061-830-8700'},
  {experience_id:'EX-GN-NAT-007',name:'함안 아라가야 고분군 트레킹',category_main:'문화/체험',category_sub:'역사 체험',region_main:'GN',region_sub:'경상남도 함안군',address:'경상남도 함안군 가야읍 가야리 말이산 고분군',lat:35.2733,lng:128.4072,price:'무료',duration:'1~2시간',reservation_required:false,target_user:['개인','가족'],nearby_places:[],related_heritage_ids:[],short_description:'유네스코 등재 추진 중인 아라가야 말이산 고분군을 탐방하는 역사 트레킹이다. 하늘에서 내려다보면 별자리 모양인 1~6세기 가야 왕릉급 고분 13기가 능선을 따라 줄지어 있다.',source_urls:['https://www.haman.go.kr/'],data_confidence:'high',tags:['말이산고분군','함안','아라가야','경남','가야역사','고분','별자리모양'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (무료)',phone:'055-580-2481'},
  {experience_id:'EX-JN-NAT-010',name:'장흥 우드랜드 편백 숲 힐링',category_main:'문화/체험',category_sub:'자연체험',region_main:'JN',region_sub:'전라남도 장흥군',address:'전라남도 장흥군 장흥읍 우드랜드길 180',lat:34.6736,lng:126.9131,price:'성인 3,000원',duration:'2~3시간',reservation_required:false,target_user:['개인','커플','가족'],nearby_places:[],related_heritage_ids:[],short_description:'장흥 편백 나무 숲 1,000ha에서 피톤치드 가득한 삼림욕을 즐기는 힐링 체험이다. 국내 최대 편백 군락지 중 하나로 가족 단위 힐링 코스로 인기가 높으며 편백 온천도 운영한다.',source_urls:['https://www.jhwoodland.co.kr/'],data_confidence:'high',tags:['장흥우드랜드','장흥','전남','편백숲','피톤치드','삼림욕','편백온천'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00',phone:'061-864-0063'},
  {experience_id:'EX-GG-NAT-012',name:'파주 임진각 평화 누리 투어',category_main:'문화/체험',category_sub:'역사 체험',region_main:'GG',region_sub:'경기도 파주시',address:'경기도 파주시 문산읍 임진각로 148',lat:37.8839,lng:126.7728,price:'무료 (일부 유료)',duration:'2~3시간',reservation_required:false,target_user:['가족','개인','외국인'],nearby_places:[],related_heritage_ids:[],short_description:'임진강 남쪽 임진각 평화 누리 공원에서 분단 현장을 탐방하는 체험이다. 망배단·임진각·자유의 다리·평화의 종·바람의 언덕 등을 걸으며 6·25 전쟁과 분단의 역사를 이해한다.',source_urls:['https://www.ggtour.or.kr/'],data_confidence:'high',tags:['임진각','파주','경기','분단','자유의다리','6·25','평화공원'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (무료)',phone:'031-953-4744'},
  {experience_id:'EX-CB-NAT-004',name:'영동 와인 코리아 포도 따기',category_main:'문화/체험',category_sub:'농촌 체험',region_main:'CB',region_sub:'충청북도 영동군',address:'충청북도 영동군 영동읍 와인코리아로 77',lat:36.1750,lng:127.7798,price:'1인 15,000원~',duration:'1~2시간',reservation_required:true,target_user:['개인','커플','가족'],nearby_places:[],related_heritage_ids:[],short_description:'한국 와인의 고장 영동에서 직접 포도를 따고 와인 시음을 즐기는 체험이다. 9~10월 포도 수확 시즌에 와인 코리아 포도밭에서 청포도·적포도를 직접 수확하고 영동 와이너리를 탐방한다.',source_urls:['https://www.ydwine.com/'],data_confidence:'high',tags:['영동와인','영동','충북','포도따기','와인시음','한국와인','와이너리'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'seasonal',operating_hours:'9~10월 포도 시즌',phone:'043-740-3625'},
  {experience_id:'EX-JB-NAT-003',name:'순창 강천산 단풍 트레킹',category_main:'문화/체험',category_sub:'자연체험',region_main:'JB',region_sub:'전라북도 순창군',address:'전라북도 순창군 팔덕면 강천산길 7',lat:35.4325,lng:127.1150,price:'성인 3,000원',duration:'2~3시간',reservation_required:false,target_user:['가족','개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'전북 단풍 1번지 순창 강천산 군립공원에서 가을 단풍 트레킹을 즐기는 체험이다. 현수교·계곡·폭포와 함께 붉게 물든 단풍이 어우러지는 10~11월 절경이 전북에서 가장 아름다운 단풍 명소다.',source_urls:['https://www.sunchang.go.kr/'],data_confidence:'high',tags:['강천산','순창','전북','단풍','현수교','계곡','가을트레킹'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (09:00~17:00)',phone:'063-650-1672'},
  {experience_id:'EX-GN-NAT-008',name:'남해 다랭이 논 트레킹',category_main:'문화/체험',category_sub:'자연체험',region_main:'GN',region_sub:'경상남도 남해군',address:'경상남도 남해군 남면 홍현리 다랭이마을',lat:34.7978,lng:127.8781,price:'무료',duration:'1~2시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'한국의 계단식 논 절경 남해 가천 다랭이마을을 탐방하는 체험이다. 바다가 보이는 가파른 경사에 45단 계단식 논이 층층이 쌓인 풍경이 국내 최고의 농촌 경관으로 꼽히며 사계절 모두 아름답다.',source_urls:['https://www.namhae.go.kr/'],data_confidence:'high',tags:['다랭이마을','남해','경남','계단식논','가천마을','농촌경관','바다뷰'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (무료)',phone:'055-860-3671'},
  {experience_id:'EX-IC-NAT-001',name:'인천 실미도 갯벌 체험',category_main:'문화/체험',category_sub:'자연체험',region_main:'IC',region_sub:'인천광역시 중구',address:'인천광역시 중구 무의동 실미도',lat:37.3975,lng:126.5411,price:'무료',duration:'2~3시간',reservation_required:false,target_user:['가족','어린이'],nearby_places:[],related_heritage_ids:[],short_description:'무의도 실미도에서 바지락·조개·게를 직접 잡는 갯벌 체험이다. 썰물 때 드러나는 실미도 갯벌에서 맨발로 갯벌을 걷고 해산물을 잡는 자연 체험으로 어린이 체험학습 코스로 인기가 높다.',source_urls:['https://www.icjgss.or.kr/'],data_confidence:'high',tags:['실미도갯벌','무의도','인천','갯벌체험','조개잡기','어린이체험','바지락'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'seasonal',operating_hours:'썰물 시간 (조석표 확인)',phone:'032-752-4141'},
  {experience_id:'EX-GW-NAT-012',name:'화천 파로호 얼음 낚시 체험',category_main:'문화/체험',category_sub:'낚시/어촌 체험',region_main:'GW',region_sub:'강원특별자치도 화천군',address:'강원특별자치도 화천군 화천읍 파로호 일원',lat:38.1064,lng:127.7082,price:'1인 20,000원~',duration:'3~5시간',reservation_required:false,target_user:['가족','어린이','개인'],nearby_places:[],related_heritage_ids:[],short_description:'화천 파로호에서 겨울 얼음낚시를 즐기는 체험이다. 화천 산천어축제 외 시간에도 파로호에서 빙어·피라미·잉어를 낚는 얼음낚시를 즐길 수 있으며 잡은 물고기를 즉석에서 구워 먹을 수 있다.',source_urls:['https://www.hwacheon.go.kr/'],data_confidence:'high',tags:['파로호얼음낚시','화천','강원','얼음낚시','빙어','겨울체험','가족'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'seasonal',operating_hours:'1~2월 결빙 기간',phone:'033-440-2732'},
  {experience_id:'EX-GN-NAT-009',name:'울산 태화강 국가 정원',category_main:'문화/체험',category_sub:'자연체험',region_main:'GN',region_sub:'울산광역시 중구',address:'울산광역시 중구 태화로 일원',lat:35.5439,lng:129.3019,price:'무료',duration:'1~2시간',reservation_required:false,target_user:['가족','커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'전국 2번째 국가 정원으로 지정된 울산 태화강 국가 정원을 탐방하는 체험이다. 봄 유채꽃·청보리, 여름 해바라기, 가을 국화, 겨울 철새가 이어지는 사계절 정원이며 십리 대나무 숲이 명물이다.',source_urls:['https://www.ulsan.go.kr/'],data_confidence:'high',tags:['태화강국가정원','울산','국가정원','십리대나무','유채꽃','사계절','무료'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (무료)',phone:'052-229-3800'},
  {experience_id:'EX-GG-NAT-013',name:'포천 비둘기낭 폭포 협곡 트레킹',category_main:'문화/체험',category_sub:'자연체험',region_main:'GG',region_sub:'경기도 포천시',address:'경기도 포천시 영북면 대회산리 비둘기낭',lat:38.0167,lng:127.2153,price:'무료',duration:'1시간',reservation_required:false,target_user:['개인','커플','가족'],nearby_places:[],related_heritage_ids:[],short_description:'한탄강 주상절리 구간에 숨겨진 폭포 비둘기낭을 탐방하는 체험이다. 현무암 절벽 사이에 숨어있는 폭포로 KBS 드라마 선덕여왕·응답하라 1988 촬영지이며 주상절리 지형과 어우러지는 신비로운 분위기가 특징이다.',source_urls:['https://www.pocheon.go.kr/'],data_confidence:'high',tags:['비둘기낭폭포','포천','경기','한탄강','주상절리','폭포','드라마촬영지'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (무료)',phone:'031-538-3363'}
];

const newShorts = [
  {
    experience_id:'EX-GG-CRF-002', experience_name:'양평 유리공예 체험', category_sub:'도예/공방 체험', region:'경기도',
    script_30s:'오늘은 양평 유리공예 공방에 왔어요. 북한강 뷰 앞에서 유리를 불어요. 근데 아무도 안 알려주는 게 있어요 — 유리 블로잉은 숨을 길게 부는 게 아니에요. 짧고 강하게 순간적으로 불어야 해요. 그 순간 유리가 팽창해요. 너무 숨 하나가 예술이 되는 순간이라서 좋았습니다.',
    script_60s:'오늘은 경기도 양평 북한강 뷰 앞 유리공예 공방에 왔어요. 1,200도 가마에서 녹인 유리를 파이프로 불어 컵·화병·소품을 만드는 체험이에요. 처음엔 뜨거운 유리 근처에 서는 것도 낯설어요. 근데 아무도 안 알려주는 꿀팁 하나 — 유리 블로잉에서 가장 중요한 것이 호흡 방법이에요. 길게 부는 게 아니라 배에서 짧고 강하게 "훅" 하고 순간적으로 불어야 해요. 길게 불면 유리가 고르게 팽창하지 않아요. 짧고 강한 순간 호흡이 유리를 정확하게 둥글게 만들어요. 그 순간이 성공하면 파이프 끝에서 유리 방울이 완벽하게 부풀어 오르는 게 보여요. 숨 하나가 예술을 만드는 그 순간이 진짜 유리공예의 매력이에요. 너무 그 짧은 숨 하나가 예술이 된다는 게 좋았습니다.',
    secret_tip:'유리 블로잉 핵심 = 짧고 강하게 순간 호흡 — 길게 불면 고르지 않음. 배에서 "훅" 순간 발사. 이 호흡이 맞으면 유리 방울 완벽하게 팽창. 북한강 뷰와 세트 공방',
    filming_guide:'유리 블로잉 순간 유리 방울 팽창하는 슬로우. 1,200도 가마에서 유리 꺼내는 장면. 완성 유리 작품 빛에 투영되는 클로즈업.',
    broll_ideas:['유리 방울 팽창하는 슬로우','가마에서 유리 꺼내는 장면','완성 유리 빛 투영 클로즈업','북한강 뷰 배경 공방 외경','유리 냉각 과정'],
    hooks:['유리 블로잉 숨 방법이 따로 있어요','짧고 강하게 훅 하고 불어야 해요','길게 불면 실패하는 이유','숨 하나가 예술이 되는 그 순간','북한강 뷰 앞 유리공예 체험'],
    thumbnails:['유리 방울 팽창 슬로우','가마 유리 꺼내기','완성 유리 빛 투영','북한강 배경 공방','유리 냉각 과정'],
    captions:{youtube:'양평 유리공예 체험 — 짧고 강하게 불어야 해요 💨\n\n길게 불면 실패! 배에서 순간 호흡!\n북한강 뷰 앞 유리 블로잉\n\n📍 경기도 양평 북한강 유리공예 공방\n💨 유리 블로잉 핵심: 짧고 강한 순간 호흡\n\n#양평유리공예 #양평 #경기여행 #유리공예 #공방체험',instagram:'양평 유리공예 짧고 강하게 불어야 해요 💨\n\n배에서 훅 순간 호흡이 핵심 ✨\n숨 하나가 예술이 되는 순간\n\n📍 경기 양평 북한강 유리공예\n\n#양평유리공예 #양평여행 #경기 #유리블로잉 #GemKorea',tiktok:'양평 유리공예 꿀팁 💨 길게 불면 안 되고 짧고 강하게 훅 해야 해요! 그 순간 유리 방울이 팽창해요 // 북한강 뷰 앞 유리 블로잉 체험 #양평유리공예 #양평여행 #경기'},
    hashtags:{korean:['#한국여행','#경기여행','#양평여행','#공방체험','#GemKorea'],place_specific:['#양평유리공예','#유리블로잉','#짧고강한호흡','#북한강뷰공방']}
  },
  {
    experience_id:'EX-JN-CRF-002', experience_name:'광양 매화마을 천연 향수 만들기', category_sub:'전통공예', region:'전라남도',
    script_30s:'오늘은 광양 매화마을에서 천연 향수를 만들었어요. 3월이면 산이 하얗게 변하는 곳이에요. 근데 아무도 안 알려주는 게 있어요 — 매화 꽃잎에서 증류한 향이 일반 향수랑 달라요. 화학향이 아닌 자연 향이에요. 피부에 닿으면 사라지지 않아요. 너무 꽃이 향수가 되는 과정이라서 좋았습니다.',
    script_60s:'오늘은 전남 광양 다압면 매화마을에서 천연 향수 만들기 체험을 했어요. 매년 3월 70만 그루 매화가 일제히 피어나는 곳이에요. 그 매화꽃을 직접 따서 천연 향수를 만드는 체험이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 매화 꽃잎을 증류해 추출한 천연 향이 화학 향수와 완전히 달라요. 화학 향수는 시간이 지나면 휘발되는데 천연 향은 다르게 변해가요. 아침에 뿌린 향이 오후에 체온과 섞여서 더 깊고 따뜻한 향이 돼요. 그 변화가 천연 향수의 매력이에요. 광양 매화 시즌인 3월에만 만들 수 있는 세상에서 하나뿐인 향수예요. 완성하고 손목에 뿌리면 남은 하루 내내 광양 매화 향이 함께해요. 너무 매화가 향수가 되는 과정이 시라서 좋았습니다.',
    secret_tip:'천연 매화 향 = 체온에 따라 시간이 지날수록 변해감. 화학 향수와 다른 살아있는 향. 3월 매화 시즌에만 가능한 시즌 체험. 광양 매화 낙화 시기와 세트 방문 추천',
    filming_guide:'매화 꽃잎 증류 과정 클로즈업. 완성 향수 손목에 뿌리는 장면. 3월 하얀 매화밭 전경.',
    broll_ideas:['매화 꽃잎 증류 과정 클로즈업','완성 향수 손목에 뿌리기','3월 하얀 매화밭 전경','매화꽃 채취하는 손','향수 병에 담는 과정'],
    hooks:['천연 향수는 시간이 지날수록 달라져요','화학 향수랑 완전히 달라요','3월만 만들 수 있는 광양 매화 향수','체온에 섞이면서 더 깊어지는 향','꽃이 향수가 되는 그 과정'],
    thumbnails:['매화 증류 클로즈업','향수 손목에 뿌리기','3월 매화밭 전경','매화꽃 채취하는 손','향수 병에 담기'],
    captions:{youtube:'광양 매화 천연 향수 만들기 — 체온에 섞이면 달라져요 🌸\n\n화학 향수와 완전히 다른 살아있는 향!\n3월만 만들 수 있는 광양 매화 향수\n\n📍 전남 광양시 다압면 매화마을\n🌸 3월 매화 시즌 한정 체험\n\n#광양매화향수 #광양 #전남여행 #천연향수 #매화체험',instagram:'광양 매화 천연 향수 체온에 섞이면 달라져요 🌸\n\n화학 향수랑 완전히 다른 살아있는 향 ✨\n3월만 만들 수 있어요\n\n📍 전남 광양 매화마을\n\n#광양매화향수 #광양여행 #전남 #천연향수 #GemKorea',tiktok:'광양 매화 향수 꿀팁 🌸 체온에 섞이면 시간이 지날수록 달라져요! 화학 향수랑 완전히 다른 살아있는 향 // 3월 매화 시즌 한정 광양 천연 향수 #광양매화향수 #광양여행 #전남'},
    hashtags:{korean:['#한국여행','#전남여행','#광양여행','#천연향수','#GemKorea'],place_specific:['#광양매화향수','#매화마을','#3월한정','#체온향수']}
  },
  {
    experience_id:'EX-GB-FES-002', experience_name:'경주 신라 문화제', category_sub:'축제', region:'경상북도',
    script_30s:'오늘은 경주 신라 문화제에 왔어요. 신라 천 년 역사 재현 축제예요. 근데 아무도 안 알려주는 게 있어요 — 신라대왕 행렬이 지나갈 때 손을 흔들면 행렬 배우들이 응답해요. 1,000년 전 신라 백성이 된 순간이에요. 너무 역사 속에 들어간 기분이라서 좋았습니다.',
    script_60s:'오늘은 경북 경주 신라 문화제에 왔어요. 매년 10월 신라 천 년의 역사를 재현하는 경주 대표 가을 역사 축제예요. 신라대왕 행렬·화랑 퍼레이드·전통 혼례 재현·한지등 행렬이 첨성대·동궁과 월지 일원에서 펼쳐져요. 근데 아무도 안 알려주는 꿀팁 하나 — 신라대왕 행렬이 지나갈 때 관객들이 손을 흔들고 절을 하면 행렬 배우들이 반응해줘요. 단순히 보는 관람이 아니라 참여하는 체험이에요. 1,300년 전 신라 백성이 왕의 행렬을 맞이하는 그 감각이에요. 야간에는 첨성대·동궁과 월지 야경과 어우러진 한지등 행렬이 펼쳐지는데 그 장면이 가장 아름다워요. 너무 역사 속으로 들어가는 기분이라서 좋았습니다.',
    secret_tip:'신라대왕 행렬에 손 흔들면 배우들이 응답 — 적극 참여해야 1,300년 전 신라 백성 체험. 야간 첨성대+한지등 행렬이 하이라이트. 매년 10월 5~7일간. 경주 전체가 축제 무대',
    filming_guide:'신라대왕 행렬 전체 광각 (웅장함). 야간 한지등 행렬 빛과 어둠 대비. 첨성대 배경 화랑 퍼레이드.',
    broll_ideas:['신라대왕 행렬 전체 광각','야간 한지등 행렬 빛과 어둠','첨성대 배경 화랑 퍼레이드','전통 혼례 재현 장면','관객이 행렬에 절하는 장면'],
    hooks:['신라대왕 행렬에 절하면 응답해줘요','야간 한지등 행렬이 진짜 아름다워요','1,300년 전 신라 백성 기분 체험','경주 10월이 가장 아름다운 이유','신라 문화제 적극 참여법 있어요'],
    thumbnails:['신라대왕 행렬 광각','야간 한지등 행렬','첨성대 배경 화랑','전통 혼례 재현','관객 절하는 장면'],
    captions:{youtube:'경주 신라 문화제 — 행렬에 절하면 응답해줘요 👑\n\n1,300년 전 신라 백성 체험!\n야간 한지등 행렬이 하이라이트\n\n📍 경북 경주 첨성대·동궁과월지 일원\n👑 매년 10월 (5~7일간)\n💡 야간 한지등 행렬 = 최고 하이라이트\n\n#신라문화제 #경주 #경북여행 #신라역사 #축제',instagram:'경주 신라 문화제 신라대왕 행렬에 절했더니 응답했어요 👑\n\n1,300년 전 신라 백성 기분 ✨\n야간 한지등 행렬이 진짜 아름다워요\n\n📍 경북 경주 매년 10월\n\n#신라문화제 #경주여행 #경북 #신라역사 #GemKorea',tiktok:'경주 신라 문화제 꿀팁 👑 신라대왕 행렬에 절하면 배우들이 응답해요! 1,300년 전 신라 백성 체험 // 야간 한지등 행렬이 가장 아름다워요 #신라문화제 #경주여행 #경북'},
    hashtags:{korean:['#한국여행','#경북여행','#경주여행','#역사축제','#GemKorea'],place_specific:['#신라문화제','#신라대왕행렬','#야간한지등','#경주10월']}
  },
  {
    experience_id:'EX-CB-FES-001', experience_name:'충주 세계 무술 축제', category_sub:'축제', region:'충청북도',
    script_30s:'오늘은 충주 세계 무술 축제에 왔어요. 70개국 무술인이 한자리에 모여요. 근데 아무도 안 알려주는 게 있어요 — 세계 각국 무술 중 처음 보는 무술이 가장 신기해요. 브라질 카포에이라·인도 칼라리파야트 같은 거요. 너무 무술이 이렇게 다양하다는 게 좋았습니다.',
    script_60s:'오늘은 충북 충주 세계 무술 축제에 왔어요. 매년 9~10월 세계 70여 개국 무술인들이 충주에 모이는 국제 무술 축제예요. 태권도·택견·씨름 등 한국 전통 무술과 세계 각국의 무술 시범이 동시에 펼쳐져요. 근데 아무도 안 알려주는 꿀팁 하나 — 세계 각국 무술 중 처음 보는 무술들이 있어요. 브라질 카포에이라는 댄스처럼 보이는데 실제 격투술이고, 인도 칼라리파야트는 세계에서 가장 오래된 무술 중 하나예요. 한국 태권도와 전혀 다른 무술 철학과 움직임이 신기해요. 이 다양한 무술들을 하루에 다 볼 수 있는 기회가 세계 무술 축제밖에 없어요. 직접 체험 코너에서 여러 무술을 배워볼 수도 있어요. 너무 무술이 문화라는 게 실감나서 좋았습니다.',
    secret_tip:'카포에이라·칼라리파야트 등 생소한 세계 무술 직접 관람 — 태권도와 다른 무술 철학+움직임. 직접 체험 코너에서 여러 무술 배우기 가능. 매년 9~10월 충주 탄금대 공원',
    filming_guide:'카포에이라 곡예 격투 장면 슬로우. 세계 무술인들 한자리 파노라마. 택견 시범 우아한 발동작 클로즈업.',
    broll_ideas:['카포에이라 곡예 격투 슬로우','세계 무술인들 한자리 파노라마','택견 발동작 클로즈업','태권도 격파 시범','무술 체험 코너 참여자'],
    hooks:['카포에이라가 격투술인지 몰랐어요','세계 70개국 무술 한자리에 있어요','처음 보는 무술들이 제일 신기해요','무술이 문화라는 걸 알게 됐어요','충주 세계 무술 축제 꿀팁'],
    thumbnails:['카포에이라 곡예 슬로우','세계 무술인들 파노라마','택견 발동작','태권도 격파 시범','무술 체험 코너'],
    captions:{youtube:'충주 세계 무술 축제 — 카포에이라가 격투술이에요 🥋\n\n70개국 무술 한자리!\n처음 보는 무술들이 제일 신기해요\n\n📍 충북 충주시 탄금대공원\n🥋 매년 9~10월 (10일간)\n\n#세계무술축제 #충주 #충북여행 #카포에이라 #태권도',instagram:'충주 세계 무술 축제 카포에이라가 격투술이에요 🥋\n\n70개국 무술 한자리 처음 보는 게 제일 신기 ✨\n무술이 문화라는 거 알게 됐어요\n\n📍 충북 충주 매년 9~10월\n\n#세계무술축제 #충주여행 #충북 #카포에이라 #GemKorea',tiktok:'충주 세계 무술 축제 꿀팁 🥋 카포에이라가 댄스처럼 보이는데 격투술이에요! 70개국 무술 중 처음 보는 게 제일 신기함 // 인도 칼라리파야트도 있어요 #세계무술축제 #충주여행 #충북'},
    hashtags:{korean:['#한국여행','#충북여행','#충주여행','#축제','#GemKorea'],place_specific:['#세계무술축제','#충주무술','#카포에이라','#70개국무술']}
  },
  {
    experience_id:'EX-JN-FES-002', experience_name:'여수 밤바다 낭만 포차 축제', category_sub:'축제', region:'전라남도',
    script_30s:'오늘은 여수 밤바다 포차 축제에 왔어요. 여수 밤바다 노래 배경이 되는 그 바다예요. 근데 아무도 안 알려주는 게 있어요 — 포차 자리 중 돌산대교가 가장 잘 보이는 자리가 있어요. 그 자리에서 갓김치 먹으면 여수 밤바다 노래가 저절로 나와요. 너무 노래가 풍경이 되는 곳이라서 좋았습니다.',
    script_60s:'오늘은 전남 여수 밤바다 포차 축제에 왔어요. 매년 8월 여수 돌산도 방죽포 해변에서 열리는 낭만 포차 축제예요. 여수 밤바다 노래의 배경이 된 여수 앞바다를 보며 갓김치·서대회·돌게장 등 여수 특산 먹거리를 즐기는 축제예요. 근데 아무도 안 알려주는 꿀팁 하나 — 포차마다 자리 위치가 달라요. 돌산대교 조명이 가장 잘 보이는 자리는 포차 거리 끝쪽이에요. 그 자리를 잡고 갓김치 안주에 막걸리 한 잔 들고 돌산대교 야경을 보면 여수 밤바다 노래가 저절로 입에서 나와요. 불꽃놀이 시간에 그 자리에 있으면 불꽃+야경+음악이 동시에요. 너무 노래 배경이 된 바다에서 그 노래가 흘러나오는 기분이라서 좋았습니다.',
    secret_tip:'포차 거리 끝쪽 = 돌산대교 야경 최고 자리 — 갓김치+막걸리+돌산대교 조합. 불꽃놀이 시간 그 자리에서 불꽃+야경 동시. 매년 8월 방죽포 해변. 여수 밤바다 노래 흘러나오는 그 순간',
    filming_guide:'돌산대교 야경과 포차 조명 어우러진 구도. 갓김치+여수 먹거리 클로즈업. 불꽃놀이+야경 동시 촬영.',
    broll_ideas:['돌산대교 야경+포차 조명 구도','갓김치+여수 먹거리 클로즈업','불꽃놀이+야경 동시 촬영','포차 거리 전체 파노라마','여수 밤바다 배경지 조망'],
    hooks:['여수 밤바다 노래 배경이 여기예요','돌산대교 야경 잘 보이는 자리 있어요','포차 끝쪽 자리가 뷰 최고예요','갓김치+막걸리+돌산대교 조합','불꽃놀이 그 자리에서 보는 법'],
    thumbnails:['돌산대교+포차 조명 구도','갓김치 먹거리 클로즈업','불꽃놀이+야경 동시','포차 거리 파노라마','여수 밤바다 조망'],
    captions:{youtube:'여수 밤바다 포차 축제 — 돌산대교 야경 최고 자리 있어요 🎆\n\n포차 거리 끝쪽 = 뷰 최고!\n갓김치+막걸리+불꽃놀이 조합\n\n📍 전남 여수시 돌산읍 방죽포 해변\n🎆 매년 8월 (2주간)\n💡 포차 거리 끝쪽 = 돌산대교 야경 최고 자리\n\n#여수밤바다포차 #여수 #전남여행 #돌산대교 #축제',instagram:'여수 포차 축제 돌산대교 야경 최고 자리 알아요? 🎆\n\n포차 거리 끝쪽이 뷰 최고예요 ✨\n갓김치+막걸리+불꽃놀이 조합\n\n📍 전남 여수 방죽포 해변\n\n#여수밤바다 #여수여행 #전남 #돌산대교 #GemKorea',tiktok:'여수 포차 축제 꿀팁 🎆 포차 거리 끝쪽이 돌산대교 야경 최고 자리예요! 불꽃놀이까지 그 자리에서 보면 완벽 // 갓김치+막걸리+돌산대교 조합 #여수밤바다포차 #여수여행 #전남'},
    hashtags:{korean:['#한국여행','#전남여행','#여수여행','#야경축제','#GemKorea'],place_specific:['#여수밤바다포차','#돌산대교야경','#방죽포해변','#여수밤바다노래']}
  },
  {
    experience_id:'EX-GG-KID-001', experience_name:'용인 한국민속촌 전통 혼례', category_sub:'어린이 체험', region:'경기도',
    script_30s:'오늘은 한국민속촌에서 전통 혼례를 봤어요. 진짜 조선 시대 방식이에요. 근데 아무도 안 알려주는 게 있어요 — 전통 혼례 관람 후 직접 신랑 신부 체험을 할 수 있어요. 한복 입고 혼례 장면을 재현하는 거예요. 너무 내가 조선 신랑이 된 기분이라서 좋았습니다.',
    script_60s:'오늘은 경기도 용인 한국민속촌에서 전통 혼례 공연을 봤어요. 조선 시대 방식 그대로 재현하는 전통 혼례예요. 사모관대 신랑과 원삼 신부가 초례청에서 맞절하는 장면이 진짜 아름다워요. 근데 아무도 안 알려주는 꿀팁 하나 — 전통 혼례 공연 후 관람객들이 직접 신랑·신부 체험을 할 수 있는 코너가 있어요. 사모관대·원삼을 입고 혼례 장면을 직접 재현하는 포토 체험이에요. 특히 외국인 커플들이 이 체험을 정말 좋아해요. 조선 시대 결혼식을 직접 해보는 유일한 기회예요. 미리 공연 시간을 확인하고 공연 후 바로 줄 서야 해요. 너무 조선 혼례를 직접 해보는 경험이라서 좋았습니다.',
    secret_tip:'전통 혼례 공연 후 신랑·신부 체험 코너 — 사모관대+원삼 입고 조선 혼례 재현 포토 체험. 외국인 커플 가장 인기. 공연 시간 사전 확인 후 공연 직후 바로 줄 서기',
    filming_guide:'사모관대 신랑+원삼 신부 맞절 장면 전통미. 체험 후 신랑신부 복장 기념 사진. 혼례 행렬 전체 광각.',
    broll_ideas:['사모관대+원삼 신부 맞절 장면','신랑신부 체험 복장 기념 사진','전통 혼례 행렬 전체 광각','초례청 혼례 소품 클로즈업','관람객 줄서기 장면'],
    hooks:['전통 혼례 공연 후 직접 체험 있어요','조선 신랑이 될 수 있어요','사모관대 입어봤어요','외국인 커플이 제일 좋아하는 체험','조선 혼례 직접 해보는 유일한 곳'],
    thumbnails:['맞절 장면 전통미','신랑신부 체험 기념 사진','혼례 행렬 광각','초례청 소품','관람객 줄서기'],
    captions:{youtube:'한국민속촌 전통 혼례 — 공연 후 직접 체험 있어요 💒\n\n사모관대+원삼 입고 조선 결혼식!\n외국인 커플이 제일 좋아하는 체험\n\n📍 경기도 용인시 한국민속촌\n💒 혼례 공연 시간 확인 후 직후 줄 서기\n\n#한국민속촌전통혼례 #용인 #경기여행 #전통혼례 #조선혼례',instagram:'한국민속촌 전통 혼례 공연 후 직접 체험했어요 💒\n\n사모관대 입고 조선 결혼식 재현 ✨\n조선 신랑신부 되는 유일한 곳\n\n📍 경기 용인 한국민속촌\n\n#한국민속촌 #전통혼례 #용인여행 #경기 #GemKorea',tiktok:'한국민속촌 꿀팁 💒 전통 혼례 공연 후 직접 신랑신부 체험 코너 있어요! 사모관대+원삼 입고 조선 혼례 재현 // 공연 직후 바로 줄 서야 해요 #한국민속촌 #전통혼례 #용인여행'},
    hashtags:{korean:['#한국여행','#경기여행','#용인여행','#전통혼례','#GemKorea'],place_specific:['#한국민속촌전통혼례','#사모관대','#조선혼례체험','#신랑신부체험']}
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
