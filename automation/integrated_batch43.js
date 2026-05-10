const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const now = new Date().toISOString().slice(0,19);

const newExps = [
  {experience_id:'EX-SE-NAT-076',name:'서울 청계천 야경 걷기',category_main:'문화/체험',category_sub:'야경/야간투어',region_main:'SE',region_sub:'서울특별시 종로구',address:'서울특별시 종로구 청계천로 일대',lat:37.5702,lng:126.9825,price:'무료',duration:'1~2시간',reservation_required:false,target_user:['커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'서울 도심 청계천에서 야경을 감상하며 걷는 체험이다. 2005년 복원된 청계천은 서울 도심을 관통하는 수변 산책로로 계절별 테마 조명과 야간 분수가 아름다운 서울 대표 무료 야경 코스다.',source_urls:['https://www.cheonggyecheon.or.kr/'],data_confidence:'high',tags:['청계천야경','서울','청계천','도심산책','야경','분수','무료'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (무료, 조명 점등 일몰~24:00)',phone:'02-2290-7111'},
  {experience_id:'EX-GG-NAT-078',name:'가평 자라섬 재즈 페스티벌',category_main:'문화/체험',category_sub:'축제',region_main:'GG',region_sub:'경기도 가평군',address:'경기도 가평군 가평읍 달전리 자라섬',lat:37.8314,lng:127.5064,price:'티켓 30,000원~',duration:'1일',reservation_required:true,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'매년 10월 경기 가평 자라섬에서 열리는 아시아 최대 재즈 페스티벌이다. 북한강 자라섬 야외 공연장에서 세계 유명 재즈 뮤지션들의 공연을 즐기며 가을 단풍과 캠핑을 함께 즐기는 체험이다.',source_urls:['https://www.jarasum.co.kr/'],data_confidence:'high',tags:['자라섬재즈페스티벌','가평','경기','재즈','자라섬','아시아최대재즈','10월'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'10월 (3~4일간)',phone:'031-581-2650'},
  {experience_id:'EX-JN-CUL-049',name:'광양 매화마을 봄 축제',category_main:'문화/체험',category_sub:'자연체험',region_main:'JN',region_sub:'전라남도 광양시',address:'전라남도 광양시 다압면 섬진강매화로 일대',lat:35.0678,lng:127.7308,price:'무료',duration:'2시간',reservation_required:false,target_user:['커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'섬진강변 전남 광양 다압면 매화마을에서 봄 매화 축제를 즐기는 체험이다. 3월 매화가 만개하면 섬진강과 매화꽃이 어우러지는 전국 최대 매화 군락지 광양 매화마을이 봄의 시작을 알린다.',source_urls:['https://www.gwangyang.go.kr/'],data_confidence:'high',tags:['광양매화마을','광양','전남','매화','봄꽃','섬진강','매화축제'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'3월 매화 시즌 (무료)',phone:'061-797-2657'},
  {experience_id:'EX-GN-NAT-086',name:'남해 가천 다랑논 트레킹',category_main:'문화/체험',category_sub:'자연체험',region_main:'GN',region_sub:'경상남도 남해군',address:'경상남도 남해군 남면 남면로 679 가천마을',lat:34.7742,lng:127.9211,price:'무료',duration:'1~2시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'경남 남해 가천마을의 다랑논(계단식 논)을 탐방하는 자연·역사 체험이다. 국가 명승 15호 남해 가천 다랑논은 가파른 해안 절벽에 조성된 계단식 논으로 봄 모내기·가을 황금빛 벼가 아름답다.',source_urls:['https://www.namhae.go.kr/'],data_confidence:'high',tags:['남해가천다랑논','남해','경남','다랑논','계단식논','국가명승','해안절벽'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (무료)',phone:'055-863-3427'},
  {experience_id:'EX-GG-CUL-078',name:'고양 서오릉 역사 트레킹',category_main:'문화/체험',category_sub:'역사 체험',region_main:'GG',region_sub:'경기도 고양시',address:'경기도 고양시 덕양구 서오릉로 334-32',lat:37.6225,lng:126.8886,price:'성인 1,000원',duration:'1~2시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'경기 고양에 위치한 조선 왕릉 서오릉에서 역사 트레킹을 즐기는 체험이다. 조선 5대 왕릉이 모인 서오릉에는 영조 정빈 이씨·숙종 등 조선 왕실 역사가 담긴 고요한 왕릉 숲이 있다.',source_urls:['https://royaltombs.cha.go.kr/'],data_confidence:'high',tags:['서오릉','고양','경기','조선왕릉','영조','숙종','왕릉트레킹'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00',phone:'02-359-0090'},
  {experience_id:'EX-JB-NAT-067',name:'장수 장안산 철쭉 트레킹',category_main:'문화/체험',category_sub:'자연체험',region_main:'JB',region_sub:'전라북도 장수군',address:'전라북도 장수군 장수읍 장안산군립공원',lat:35.6444,lng:127.6317,price:'무료',duration:'3~4시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'전북 장수 장안산에서 5~6월 철쭉이 만개하는 시즌 트레킹을 즐기는 체험이다. 장안산 군립공원 철쭉 군락지는 전북 최대 철쭉 군락으로 능선 전체가 분홍빛으로 물드는 장관이 펼쳐진다.',source_urls:['https://www.jangsu.go.kr/'],data_confidence:'high',tags:['장수장안산철쭉','장수','전북','장안산','철쭉','5월6월','군립공원'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'5~6월 철쭉 시즌 (무료)',phone:'063-350-2114'},
  {experience_id:'EX-CB-CUL-071',name:'청주 청남대 대통령 별장',category_main:'문화/체험',category_sub:'역사 체험',region_main:'CB',region_sub:'충청북도 청주시',address:'충청북도 청주시 상당구 대청댐로 618-8',lat:36.5292,lng:127.5481,price:'성인 5,000원',duration:'2~3시간',reservation_required:false,target_user:['개인','커플','가족'],nearby_places:[],related_heritage_ids:[],short_description:'전두환 대통령부터 노무현 대통령까지 역대 대통령이 이용한 충북 청주 청남대를 탐방하는 역사 체험이다. 2003년 일반에 개방된 청남대에서 대청호 절경과 대통령 별장의 역사를 체험한다.',source_urls:['https://www.chungnam.or.kr/'],data_confidence:'high',tags:['청남대','청주','충북','대통령별장','대청호','청남대개방','역대대통령'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00 (동절기 17:00)',phone:'043-257-5080'},
  {experience_id:'EX-GW-NAT-076',name:'설악산 흔들바위 트레킹',category_main:'문화/체험',category_sub:'자연체험',region_main:'GW',region_sub:'강원특별자치도 속초시',address:'강원특별자치도 속초시 설악산로 1091 권금성',lat:38.1236,lng:128.4744,price:'케이블카 성인 왕복 15,000원',duration:'2~3시간',reservation_required:false,target_user:['개인','커플','가족'],nearby_places:[],related_heritage_ids:[],short_description:'설악산 권금성 케이블카를 타고 올라가 흔들바위까지 트레킹하는 체험이다. 케이블카로 권금성에 오른 후 500m 걸으면 사람이 밀면 흔들리는 기암 흔들바위가 있어 짜릿한 자연 체험을 즐긴다.',source_urls:['https://www.knps.or.kr/'],data_confidence:'high',tags:['설악산흔들바위','설악산','속초','강원','흔들바위','권금성케이블카','국립공원'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~17:00',phone:'033-636-7700'},
  {experience_id:'EX-JN-NAT-094',name:'지리산 화개 십리 벚꽃',category_main:'문화/체험',category_sub:'자연체험',region_main:'JN',region_sub:'전라남도 구례군',address:'전라남도 구례군 화개면 화개장터~쌍계사 구간',lat:35.1178,lng:127.7211,price:'무료',duration:'1~2시간',reservation_required:false,target_user:['커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'전남 구례·경남 하동 경계 화개천변 십리 벚꽃 가도를 걷는 봄 체험이다. 쌍계사에서 화개장터까지 4km 벚꽃 터널 길이 연인들 사이에서 꽃길을 함께 걸으면 백년해로한다는 전설로 유명하다.',source_urls:['https://www.gurye.go.kr/'],data_confidence:'high',tags:['화개십리벚꽃','구례','전남','화개','벚꽃','쌍계사','백년해로'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'3~4월 벚꽃 시즌 (무료)',phone:'061-780-2951'},
  {experience_id:'EX-GN-CUL-074',name:'통영 동피랑 벽화 마을',category_main:'문화/체험',category_sub:'문화투어',region_main:'GN',region_sub:'경상남도 통영시',address:'경상남도 통영시 동피랑길 일대',lat:34.8492,lng:128.4339,price:'무료',duration:'1시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'통영 동쪽 언덕 동피랑 마을에서 벽화 골목을 탐방하는 문화 체험이다. 철거 위기에서 벽화 그리기로 재생된 동피랑 마을이 지금은 통영 1순위 여행지로 한려수도 바다 전망과 알록달록 벽화가 어우러진다.',source_urls:['https://www.tongyeong.go.kr/'],data_confidence:'high',tags:['통영동피랑','통영','경남','동피랑','벽화마을','한려수도전망','마을재생'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (무료)',phone:'055-645-3899'},
  {experience_id:'EX-GB-NAT-045',name:'포항 호미곶 해맞이',category_main:'문화/체험',category_sub:'자연체험',region_main:'GB',region_sub:'경상북도 포항시',address:'경상북도 포항시 남구 호미곶면 해맞이로 150',lat:36.0717,lng:129.5664,price:'무료',duration:'1시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'한반도 최동단 돌출부 경북 포항 호미곶에서 일출을 감상하는 체험이다. 상생의 손 조형물로 유명한 호미곶은 한국에서 해가 가장 먼저 뜨는 곳으로 새해 일출 전국 최대 인파가 모이는 성지다.',source_urls:['https://www.pohang.go.kr/'],data_confidence:'high',tags:['포항호미곶','포항','경북','호미곶','일출','상생의손','한반도최동단'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'새벽 04:30~ (무료)',phone:'054-284-8163'},
  {experience_id:'EX-SE-CUL-075',name:'서울 광장시장 먹거리 투어',category_main:'문화/체험',category_sub:'지역 먹거리',region_main:'SE',region_sub:'서울특별시 종로구',address:'서울특별시 종로구 종로 88 광장시장',lat:37.5702,lng:126.9997,price:'먹거리 별도',duration:'1~2시간',reservation_required:false,target_user:['개인','커플','가족'],nearby_places:[],related_heritage_ids:[],short_description:'서울 최대 전통 시장 종로 광장시장에서 빈대떡·마약김밥·육회비빔밥을 즐기는 먹거리 투어다. 1905년 개설된 100년 역사 광장시장은 넷플릭스 다큐멘터리에 소개되며 세계적 여행 명소가 됐다.',source_urls:['https://www.kwangjangmarket.co.kr/'],data_confidence:'high',tags:['광장시장','서울','종로','빈대떡','마약김밥','육회비빔밥','100년전통시장'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~23:00 (일 휴무)',phone:'02-2267-0291'}
];

const newShorts = [
  {
    experience_id:'EX-JN-CUL-049', experience_name:'광양 매화마을 봄 축제', category_sub:'자연체험', region:'전라남도',
    script_30s:'오늘은 광양 매화마을에 왔어요. 근데 아무도 안 알려주는 게 있어요 — 매화가 벚꽃보다 2~3주 먼저 피어요. 같은 날 광양 매화+진해 벚꽃을 동시에 볼 수는 없어요. 매화 먼저 보고 벚꽃 보러 가는 순서가 맞아요. 너무 꽃에도 순서가 있다는 게 좋았습니다.',
    script_60s:'오늘은 전남 광양 다압면 매화마을에서 봄 매화 축제를 즐겼어요. 섬진강변 최대 매화 군락지예요. 근데 아무도 안 알려주는 꿀팁 하나 — 광양 매화와 진해 벚꽃의 시차가 있어요. 매화는 벚꽃보다 2~3주 앞서 피어요. 광양 매화가 3월 초에 피면 진해 벚꽃은 3월 말~4월 초에 피어요. 그래서 같은 주에 광양 매화와 진해 벚꽃을 모두 보기는 힘들어요. 봄꽃 여행을 계획한다면 3월 초 광양 매화→4월 초 진해 벚꽃 순서로 방문하면 한 달 동안 봄꽃을 최대로 즐길 수 있어요. 매화의 향기는 벚꽃보다 훨씬 강해요. 눈을 감고 향기만 맡아도 매화 밭 한가운데 있는 느낌이에요. 매화 향은 이른 아침 기온이 낮을 때 가장 진하게 나요. 아침 일찍 방문하면 최고 향기를 즐길 수 있어요. 너무 꽃에도 순서가 있다는 게 좋았습니다.',
    secret_tip:'광양 매화 = 진해 벚꽃보다 2~3주 앞서 개화 — 3월 초 광양→4월 초 진해 순서로 봄꽃 한 달 즐기기. 이른 아침 기온 낮을 때 매화 향 가장 진함. 섬진강+매화 조합 사진 포인트',
    filming_guide:'섬진강+매화 조합 전경. 이른 아침 매화 향 맡는 장면. 매화꽃 클로즈업.',
    broll_ideas:['섬진강+매화 전경','이른 아침 매화 향 맡기','매화꽃 클로즈업','광양 매화 군락','섬진강변 매화 드론'],
    hooks:['매화가 벚꽃보다 2~3주 앞서요','광양 먼저 진해 나중 순서예요','이른 아침 향기가 가장 진해요','봄꽃 한 달 즐기는 방법이에요','광양 매화 꿀팁'],
    thumbnails:['섬진강+매화 전경','이른 아침 향 맡기','매화꽃 클로즈업','광양 군락','섬진강 드론'],
    captions:{youtube:'광양 매화마을 — 벚꽃보다 2~3주 앞서요 🌸\n\n3월 초 광양→4월 초 진해 순서로 한 달 봄꽃!\n이른 아침 향기가 가장 진해요\n\n📍 전남 광양시 다압면 섬진강매화로\n🌸 전국 최대 매화 군락지\n\n#광양매화마을 #광양 #전남여행 #매화축제 #봄꽃순서',instagram:'광양 매화마을 벚꽃보다 2~3주 앞서요 🌸\n\n3월 초 광양→4월 초 진해 봄꽃 한 달 ✨\n이른 아침 향기가 가장 진해요\n\n📍 전남 광양 매화마을\n\n#광양매화마을 #광양여행 #전남 #매화 #GemKorea',tiktok:'광양 매화 꿀팁 🌸 벚꽃보다 2~3주 앞서요! 3월 초 광양 매화→4월 초 진해 벚꽃 순서로 봄꽃 한 달 즐기기 // 이른 아침 향기가 가장 진해요 #광양매화마을 #광양여행 #전남'},
    hashtags:{korean:['#한국여행','#전남여행','#광양여행','#매화','#GemKorea'],place_specific:['#광양매화마을벚꽃2~3주앞섬','#3월광양4월진해봄꽃한달','#이른아침매화향진함','#섬진강매화조합포인트']}
  },
  {
    experience_id:'EX-GN-NAT-086', experience_name:'남해 가천 다랑논 트레킹', category_sub:'자연체험', region:'경상남도',
    script_30s:'오늘은 남해 가천 다랑논에 왔어요. 국가 명승이에요. 근데 아무도 안 알려주는 게 있어요 — 이 논을 만든 사람들이 600년 전 피난민이에요. 조선 초 왜구를 피해 이 가파른 절벽에 논을 만들었어요. 도망치며 만든 논이에요. 너무 생존이 이렇게 절경을 만든다는 게 좋았습니다.',
    script_60s:'오늘은 경남 남해 가천마을 다랑논을 탐방했어요. 국가 명승 15호로 지정된 계단식 논이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 가천 다랑논이 왜 이 가파른 절벽에 만들어졌는지 아세요? 가천마을 사람들의 조상이 600여 년 전 왜구를 피해 이곳에 정착했어요. 남해 섬 안쪽 가파른 절벽 지형이 오히려 왜구가 쉽게 올라오지 못하는 방어에 유리한 위치였어요. 하지만 피난처에서 살려면 식량을 직접 만들어야 했어요. 평지가 없으니 가파른 절벽을 일일이 계단 모양으로 깎아서 논을 만들었어요. 그 논이 108개 층 다랑논이 됐어요. 피난과 생존을 위한 선택이 지금은 국가 명승이 된 거예요. 절망에서 만들어진 절경이에요. 너무 생존이 이렇게 절경을 만든다는 게 좋았습니다.',
    secret_tip:'가천 다랑논 = 600년 전 왜구 피난민이 가파른 절벽에 만든 108개 층 논 — 평지 없어 절벽 계단 논 불가피. 방어 유리 위치 + 식량 자급. 절망이 낳은 절경. 봄 모내기+가을 황금빛이 최고',
    filming_guide:'가천 다랑논 108층 계단 드론 영상. 절벽 논 옆 남해 바다 배경. 봄 모내기 장면.',
    broll_ideas:['108층 계단 드론 영상','절벽 논+남해 바다','봄 모내기 장면','가을 황금빛 논','남해 섬 배경'],
    hooks:['600년 전 피난민이 만든 논이에요','왜구 피해 절벽에 만들었어요','108개 층이에요','절망이 낳은 국가 명승이에요','남해 가천 다랑논 꿀팁'],
    thumbnails:['108층 계단 드론','절벽 논+바다','봄 모내기','가을 황금빛','남해 배경'],
    captions:{youtube:'남해 가천 다랑논 — 600년 전 피난민이 만든 절경이에요 🌾\n\n왜구 피해 가파른 절벽에 만든 108층 논!\n절망이 낳은 국가 명승\n\n📍 경남 남해군 남면 남면로 679\n🌾 국가 명승 15호 계단식 논\n\n#남해가천다랑논 #가천다랑논 #남해 #경남여행 #국가명승',instagram:'남해 가천 다랑논 600년 전 피난민이 만든 절경이에요 🌾\n\n왜구 피해 가파른 절벽에 108층 논 ✨\n절망이 낳은 국가 명승\n\n📍 경남 남해 가천마을\n\n#남해가천다랑논 #남해여행 #경남 #다랑논 #GemKorea',tiktok:'남해 가천 다랑논 꿀팁 🌾 600년 전 왜구 피난민이 가파른 절벽에 만든 논이에요! 108층 계단 논이 됨 // 절망이 낳은 국가 명승 15호예요 #남해가천다랑논 #남해여행 #경남'},
    hashtags:{korean:['#한국여행','#경남여행','#남해여행','#다랑논','#GemKorea'],place_specific:['#남해가천다랑논600년피난민','#왜구피해절벽108층논','#절망낳은국가명승','#봄모내기가을황금빛최고']}
  },
  {
    experience_id:'EX-JN-NAT-094', experience_name:'지리산 화개 십리 벚꽃', category_sub:'자연체험', region:'전라남도',
    script_30s:'오늘은 화개 십리 벚꽃길을 걸었어요. 근데 아무도 안 알려주는 게 있어요 — 이 길을 연인과 함께 걸으면 백년해로한다는 전설이 있어요. 그래서 화개 벚꽃길 이름이 혼례길이에요. 너무 벚꽃길에 이런 전설이 있다는 게 좋았습니다.',
    script_60s:'오늘은 전남 구례 화개장터에서 쌍계사까지 십리 벚꽃 가도를 걸었어요. 연인과 함께 걸으면 백년해로한다는 전설 때문에 혼례길이라 불러요. 근데 아무도 안 알려주는 꿀팁 하나 — 화개 벚꽃 최고 포인트가 있어요. 화개장터에서 쌍계사까지 4km 벚꽃 길 중에 1.5~2.5km 구간이 가장 아름다워요. 화개천이 사행하는 구간으로 양쪽 벚꽃 가지가 위에서 맞닿아 완전한 꽃 터널을 만들어요. 그리고 화개천 물에 벚꽃이 떨어지는 꽃비 장면이 이 구간에서 가장 잘 포착돼요. 차 막히는 장터 쪽은 인파가 많아서 걷기 불편해요. 쌍계사 주차장에 먼저 주차하고 장터 방향으로 역방향으로 걸으면 인파 피해 여유롭게 즐길 수 있어요. 너무 벚꽃길에 이런 전략이 있다는 게 좋았습니다.',
    secret_tip:'화개 벚꽃 최고 포인트 = 1.5~2.5km 구간 꽃 터널 — 벚꽃 가지 위에서 맞닿는 완전 터널. 쌍계사 주차 후 역방향 걷기로 인파 피하기. 꽃비 장면 이 구간 최고',
    filming_guide:'화개천 위 벚꽃 완전 터널 구간. 화개천 꽃잎 떨어지는 꽃비. 혼례길 안내판 클로즈업.',
    broll_ideas:['벚꽃 완전 터널 구간','화개천 꽃비 장면','혼례길 안내판','화개장터 방향 전경','연인 손잡고 걷기'],
    hooks:['연인이 걸으면 백년해로한대요','그래서 혼례길이에요','1.5~2.5km가 최고 터널이에요','쌍계사에서 역방향이 여유로워요','화개 벚꽃 꿀팁'],
    thumbnails:['벚꽃 완전 터널','화개천 꽃비','혼례길 안내판','화개장터 전경','연인 걷기'],
    captions:{youtube:'화개 십리 벚꽃 — 걸으면 백년해로한다는 혼례길이에요 🌸\n\n1.5~2.5km 구간이 완전 꽃 터널!\n쌍계사에서 역방향으로 인파 피하기\n\n📍 전남 구례군 화개장터~쌍계사 구간\n🌸 연인 전설의 4km 벚꽃 혼례길\n\n#화개십리벚꽃 #화개장터 #구례 #전남여행 #혼례길',instagram:'화개 십리 벚꽃 걸으면 백년해로한다는 혼례길이에요 🌸\n\n1.5~2.5km 완전 꽃 터널 ✨\n쌍계사에서 역방향으로 여유롭게\n\n📍 전남 구례 화개장터\n\n#화개십리벚꽃 #화개벚꽃 #구례여행 #전남 #GemKorea',tiktok:'화개 십리 벚꽃 꿀팁 🌸 연인이 걸으면 백년해로한다는 혼례길이에요! 1.5~2.5km가 완전 꽃 터널 // 쌍계사에서 역방향으로 걸어야 인파 피해 여유롭게 즐겨요 #화개십리벚꽃 #화개장터 #전남'},
    hashtags:{korean:['#한국여행','#전남여행','#구례여행','#화개벚꽃','#GemKorea'],place_specific:['#화개십리벚꽃혼례길','#연인걸으면백년해로','#1.5~2.5km완전꽃터널','#쌍계사역방향인파피하기']}
  },
  {
    experience_id:'EX-GN-CUL-074', experience_name:'통영 동피랑 벽화 마을', category_sub:'문화투어', region:'경상남도',
    script_30s:'오늘은 통영 동피랑 벽화 마을에 왔어요. 근데 아무도 안 알려주는 게 있어요 — 이 마을이 철거 예정이었어요. 벽화 그리기로 살아난 마을이에요. 그래서 지금도 2~3년마다 새 벽화를 그려요. 너무 예술이 이렇게 마을을 구했다는 게 좋았습니다.',
    script_60s:'오늘은 경남 통영 동피랑 벽화 마을을 탐방했어요. 알록달록 벽화와 한려수도 조망이 어우러지는 통영 1순위 여행지예요. 근데 아무도 안 알려주는 꿀팁 하나 — 동피랑 마을이 어떻게 살아났는지 아세요? 동피랑은 2006년 철거 예정이었어요. 낡은 주거 지역을 허물고 공원을 만들 계획이었어요. 그런데 지역 NGO가 전국 미술 공모를 열어 마을 외벽에 벽화를 그리기 시작했어요. 알록달록 벽화가 생기자 여행자들이 몰려들었어요. 철거 계획이 취소됐어요. 지금은 매년 수십만 명이 찾는 통영 대표 관광지가 됐어요. 주민들도 계속 살면서 2~3년마다 새 벽화 공모를 해요. 예술이 마을 전체를 구한 이야기예요. 언덕 위에서 통영 항구 야경이 최고예요. 너무 예술이 이렇게 마을을 구했다는 게 좋았습니다.',
    secret_tip:'동피랑 = 2006년 철거 예정 → 벽화 NGO 공모로 살아남 — 2~3년마다 새 벽화 교체. 예술이 마을 구한 이야기. 언덕 정상 통영 항구 야경이 최고 뷰포인트. 통영 케이블카 세트',
    filming_guide:'동피랑 벽화 골목 걷는 장면. 언덕 정상 통영 항구 조망. 벽화 클로즈업.',
    broll_ideas:['동피랑 벽화 골목 걷기','언덕 정상 통영 항구 조망','벽화 클로즈업','야경 통영 항구','좁은 골목 벽화 연속'],
    hooks:['이 마을이 원래 철거 예정이었어요','벽화 그리기로 살아난 거예요','2~3년마다 새 벽화를 그려요','예술이 마을을 구한 이야기예요','통영 동피랑 꿀팁'],
    thumbnails:['벽화 골목 걷기','통영 항구 조망','벽화 클로즈업','야경 항구','좁은 골목 벽화'],
    captions:{youtube:'통영 동피랑 — 원래 철거 예정이었어요 🎨\n\n벽화 그리기로 살아난 마을!\n2~3년마다 새 벽화 교체\n\n📍 경남 통영시 동피랑길\n🎨 예술이 마을을 구한 이야기\n\n#통영동피랑 #동피랑 #통영 #경남여행 #벽화마을',instagram:'통영 동피랑 원래 철거 예정이었어요 🎨\n\n벽화 NGO 공모로 살아남 ✨\n2~3년마다 새 벽화 교체하는 살아있는 마을\n\n📍 경남 통영 동피랑\n\n#통영동피랑 #통영여행 #경남 #벽화마을 #GemKorea',tiktok:'통영 동피랑 꿀팁 🎨 원래 철거 예정이었어요! 벽화 그리기 NGO 공모로 살아남 // 2~3년마다 새 벽화 교체하는 살아있는 마을이에요 #통영동피랑 #통영여행 #경남'},
    hashtags:{korean:['#한국여행','#경남여행','#통영여행','#동피랑','#GemKorea'],place_specific:['#통영동피랑철거예정벽화구제','#2006년철거NGO벽화공모','#2~3년마다새벽화교체','#예술이마을구한이야기']}
  },
  {
    experience_id:'EX-GB-NAT-045', experience_name:'포항 호미곶 해맞이', category_sub:'자연체험', region:'경상북도',
    script_30s:'오늘은 포항 호미곶에 왔어요. 한국에서 해가 가장 먼저 뜨는 곳이에요. 근데 아무도 안 알려주는 게 있어요 — 호미곶이 한반도 지도에서 호랑이 꼬리 부분이에요. 그래서 이름이 호미(虎尾)예요. 너무 지명이 이렇게 지도와 연결된다는 게 좋았습니다.',
    script_60s:'오늘은 경북 포항 호미곶에서 일출을 감상했어요. 한반도에서 해가 가장 먼저 뜨는 최동단 돌출부예요. 근데 아무도 안 알려주는 꿀팁 하나 — 호미곶이라는 이름의 뜻이 있어요. 호미는 한자로 호랑이 꼬리 虎尾예요. 한반도를 호랑이 모양으로 보면 호미곶이 꼬리 끝에 해당해요. 조선 시대 지리서에도 한반도를 호랑이로 묘사했어요. 일본을 향해 앞발을 내민 호랑이 지도에서 꼬리 끝이 호미곶이에요. 상생의 손 조형물은 바다와 육지에 각각 하나씩 세워져 있어요. 새해 일출 때 두 손이 떠오르는 해를 받아내는 구도가 완성돼요. 이 구도를 잡으려면 왼쪽 포인트에 위치해야 해요. 해가 오른쪽에서 뜨기 때문에 왼쪽에 서야 두 손이 일출 배경에 들어가요. 너무 지명이 이렇게 지도와 연결된다는 게 좋았습니다.',
    secret_tip:'호미곶 = 한반도 호랑이 꼬리(虎尾) — 꼬리 끝이 한국에서 해 가장 먼저 뜨는 최동단. 상생의 손 일출 사진 = 왼쪽 포인트에서 두 손+해 구도. 새해 최대 인파 주의 전날 방문 권장',
    filming_guide:'상생의 손+일출 최적 각도 샷. 호미곶 전경 드론. 새벽 여명 수평선.',
    broll_ideas:['상생의 손+일출 구도','호미곶 전경 드론','새벽 여명 수평선','호미곶 등대','새해 해맞이 인파'],
    hooks:['호미곶이 호랑이 꼬리예요','한반도에서 해가 제일 먼저 떠요','상생의 손 사진은 왼쪽에서 찍어요','왼쪽에서 두 손+해 구도가 나와요','포항 호미곶 꿀팁'],
    thumbnails:['상생의 손+일출','호미곶 전경 드론','새벽 여명','호미곶 등대','새해 인파'],
    captions:{youtube:'포항 호미곶 — 호랑이 꼬리 이름의 비밀 🌅\n\n한반도 지도에서 꼬리 끝이 호미곶!\n상생의 손 일출 사진은 왼쪽에서\n\n📍 경북 포항시 남구 호미곶면 해맞이로\n🌅 한국에서 해가 가장 먼저 뜨는 곳\n\n#포항호미곶 #호미곶 #포항 #경북여행 #한반도최동단',instagram:'포항 호미곶 호랑이 꼬리 이름의 비밀 🌅\n\n한반도 지도에서 꼬리 끝이 호미곶 ✨\n상생의 손 일출 사진은 왼쪽 포인트에서\n\n📍 경북 포항 호미곶\n\n#포항호미곶 #호미곶 #포항여행 #경북 #GemKorea',tiktok:'포항 호미곶 꿀팁 🌅 이름이 호랑이 꼬리(虎尾)예요! 한반도 지도에서 호랑이 꼬리 끝 // 상생의 손 일출 사진은 왼쪽 포인트에서 두 손+해 구도 만들기 #포항호미곶 #포항여행 #경북'},
    hashtags:{korean:['#한국여행','#경북여행','#포항여행','#호미곶','#GemKorea'],place_specific:['#포항호미곶호랑이꼬리虎尾','#한반도최동단해가장먼저','#상생의손일출왼쪽포인트','#새해최대인파전날방문']}
  },
  {
    experience_id:'EX-SE-CUL-075', experience_name:'서울 광장시장 먹거리 투어', category_sub:'지역 먹거리', region:'서울특별시',
    script_30s:'오늘은 서울 광장시장에 왔어요. 근데 아무도 안 알려주는 게 있어요 — 광장시장 마약김밥 이름이 마약인 이유가 있어요. 한 번 먹으면 계속 먹게 돼서 마약이에요. 최초 마약김밥집이 어딘지는 아무도 정확히 몰라요. 너무 이름이 이렇게 맛을 설명한다는 게 좋았습니다.',
    script_60s:'오늘은 서울 종로 광장시장에서 빈대떡·마약김밥·육회비빔밥 먹거리 투어를 했어요. 1905년 개설된 100년 역사 전통 시장이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 광장시장 마약김밥의 맛 비결이 있어요. 광장시장 마약김밥이 일반 김밥과 다른 점이 있어요. 밥에 참기름 범벅이에요. 일반 김밥보다 참기름을 3~4배 더 넣어요. 그리고 겨자 소스를 찍어 먹어요. 겨자의 알싸함이 참기름 고소함과 만나면 중독성이 생겨요. 마약처럼 계속 먹게 된다고 해서 마약김밥이에요. 광장시장 마약김밥은 두께가 일반 김밥의 절반이에요. 한 줄이 3~4cm 두께예요. 한 줄에 4~5,000원 선이에요. 빈대떡은 광장시장 안쪽 화로 앞 좌석에 앉아 먹는 게 진짜 느낌이에요. 너무 이름이 이렇게 맛을 설명한다는 게 좋았습니다.',
    secret_tip:'광장시장 마약김밥 비결 = 참기름 일반 김밥 3~4배 + 겨자 소스 찍어먹기 — 두께 3~4cm 절반 크기. 겨자+참기름 조합 중독성. 화로 앞 빈대떡 좌석 진짜 느낌. 넷플릭스 다큐 소개 시장',
    filming_guide:'마약김밥 겨자 소스 찍어먹는 장면. 광장시장 빈대떡 화로 굽는 장면. 100년 시장 전경.',
    broll_ideas:['마약김밥 겨자 소스 찍기','빈대떡 화로 굽기','광장시장 100년 전경','육회비빔밥 클로즈업','시장 활기찬 분위기'],
    hooks:['마약김밥이 왜 마약인지 알아요?','참기름을 3~4배 더 넣어요','겨자 소스가 중독성 만들어요','두께가 절반이에요','서울 광장시장 꿀팁'],
    thumbnails:['마약김밥 겨자 소스','빈대떡 화로 굽기','광장시장 전경','육회비빔밥','시장 분위기'],
    captions:{youtube:'서울 광장시장 — 마약김밥이 마약인 이유 🍱\n\n참기름 3~4배 + 겨자 소스 중독성!\n1905년 개설 100년 역사 시장\n\n📍 서울 종로구 종로 88 광장시장\n🍱 넷플릭스 다큐에 소개된 세계적 시장\n\n#서울광장시장 #광장시장 #서울 #마약김밥 #빈대떡',instagram:'서울 광장시장 마약김밥이 마약인 이유 🍱\n\n참기름 3~4배+겨자 소스 중독성 ✨\n두께 절반 겨자 찍어먹기가 비결\n\n📍 서울 종로 광장시장\n\n#서울광장시장 #광장시장 #서울여행 #마약김밥 #GemKorea',tiktok:'서울 광장시장 꿀팁 🍱 마약김밥이 마약인 이유가 있어요! 참기름 3~4배+겨자 소스 중독성 // 두께는 절반이고 겨자 찍어먹기가 비결이에요 #서울광장시장 #광장시장 #서울여행'},
    hashtags:{korean:['#한국여행','#서울여행','#종로','#광장시장','#GemKorea'],place_specific:['#서울광장시장마약김밥비결','#참기름3~4배겨자소스중독','#두께절반겨자찍어먹기','#100년전통시장넷플릭스']}
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
