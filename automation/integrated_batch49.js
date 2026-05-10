const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const now = new Date().toISOString().slice(0,19);

const newExps = [
  {experience_id:'EX-SE-NAT-077',name:'서울 남산 봉수대 야경',category_main:'문화/체험',category_sub:'야경/야간투어',region_main:'SE',region_sub:'서울특별시 중구',address:'서울특별시 중구 삼일대로 231 남산 봉수대',lat:37.5512,lng:126.9882,price:'무료 (케이블카 왕복 10,500원)',duration:'1~2시간',reservation_required:false,target_user:['커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'서울 남산 봉수대에서 서울 야경을 감상하는 체험이다. 조선 시대 봉화 신호를 보내던 남산 봉수대에서 내려다보는 서울 야경이 서울타워와 함께 360도 파노라마로 펼쳐지는 서울 대표 야경 명소다.',source_urls:['https://www.doorseoulsouth.go.kr/'],data_confidence:'high',tags:['남산봉수대야경','서울','중구','남산','봉수대','서울야경','남산타워'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (무료, 케이블카 10:00~23:00)',phone:'02-3783-5900'},
  {experience_id:'EX-GG-NAT-087',name:'안성 팜랜드 농장 체험',category_main:'문화/체험',category_sub:'농촌 체험',region_main:'GG',region_sub:'경기도 안성시',address:'경기도 안성시 공도읍 대신두길 28 안성팜랜드',lat:37.0978,lng:127.2047,price:'성인 15,000원',duration:'3~4시간',reservation_required:false,target_user:['가족','어린이','커플'],nearby_places:[],related_heritage_ids:[],short_description:'경기 안성 안성팜랜드에서 양치기·동물 먹이 주기·목장 체험을 즐기는 농장 체험이다. 한국마사회가 운영하는 대형 목장형 테마파크로 말·소·양·닭 등 다양한 동물과 교감하는 가족 체험이다.',source_urls:['https://www.anseongfarm.co.kr/'],data_confidence:'high',tags:['안성팜랜드','안성','경기','목장체험','양치기','동물먹이','가족체험'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'10:00~17:30',phone:'031-678-2200'},
  {experience_id:'EX-JN-NAT-101',name:'장흥 우드랜드 편백 힐링',category_main:'문화/체험',category_sub:'자연체험',region_main:'JN',region_sub:'전라남도 장흥군',address:'전라남도 장흥군 장흥읍 우드랜드길 180',lat:34.6819,lng:126.9233,price:'성인 3,000원',duration:'2~3시간',reservation_required:false,target_user:['개인','커플','가족'],nearby_places:[],related_heritage_ids:[],short_description:'전남 장흥 우드랜드에서 100ha 편백 숲 힐링 체험을 즐기는 프로그램이다. 국내 최대 편백 휴양림 장흥 우드랜드에서 편백 족욕·아로마 체험·숲 명상을 즐기는 전남 대표 숲 치유 체험이다.',source_urls:['https://www.jangheung.go.kr/'],data_confidence:'high',tags:['장흥우드랜드편백','장흥','전남','편백힐링','우드랜드','숲치유','피톤치드'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00',phone:'061-864-0063'},
  {experience_id:'EX-GN-NAT-092',name:'남해 보리암 일출',category_main:'문화/체험',category_sub:'자연체험',region_main:'GN',region_sub:'경상남도 남해군',address:'경상남도 남해군 상주면 보리암로 941',lat:34.7819,lng:127.9344,price:'성인 1,000원',duration:'1~2시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'한국 4대 기도처 경남 남해 금산 보리암에서 새벽 일출을 감상하는 체험이다. 해발 681m 금산 정상 보리암에서 남해 다도해 일출이 구름 위 섬들과 어우러지는 장관이 한국 최고 기도처 일출 명소다.',source_urls:['https://www.boriam.org/'],data_confidence:'high',tags:['남해보리암일출','남해','경남','보리암','한국4대기도처','금산','남해일출'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'새벽 04:00~ (일출 전)',phone:'055-862-6115'},
  {experience_id:'EX-GG-CUL-084',name:'광명 광명동굴 탐험',category_main:'문화/체험',category_sub:'역사 체험',region_main:'GG',region_sub:'경기도 광명시',address:'경기도 광명시 가학동 광명동굴',lat:37.4408,lng:126.8647,price:'성인 8,000원',duration:'1~2시간',reservation_required:false,target_user:['가족','개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'경기 광명 폐금광을 활용해 조성한 광명동굴을 탐방하는 체험이다. 1912년 일제강점기 개설된 금광이 1972년 폐광된 후 문화 공간으로 재생돼 와인 동굴·황금폭포·동굴 아쿠아 등 이색 체험을 즐길 수 있다.',source_urls:['https://www.gmcave.go.kr/'],data_confidence:'high',tags:['광명동굴','광명','경기','폐광','와인동굴','일제강점기금광','동굴재생'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00 (월 휴관)',phone:'02-2680-6900'},
  {experience_id:'EX-JB-NAT-072',name:'순창 강천산 단풍 트레킹',category_main:'문화/체험',category_sub:'자연체험',region_main:'JB',region_sub:'전라북도 순창군',address:'전라북도 순창군 팔덕면 강천사길 27',lat:35.4889,lng:126.9278,price:'성인 3,000원',duration:'2~3시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'전북 순창 강천산에서 10~11월 단풍 트레킹을 즐기는 체험이다. 전북 최고 단풍 명소 강천산에서 강천사·비룡폭포·구장군폭포를 거쳐 구름다리까지 이어지는 단풍 속 계곡 트레킹이 압도적이다.',source_urls:['https://www.sunchang.go.kr/'],data_confidence:'high',tags:['순창강천산단풍','순창','전북','강천산','단풍트레킹','강천사','계곡'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'10~11월 단풍 시즌',phone:'063-650-1683'},
  {experience_id:'EX-CB-CUL-075',name:'공주 공산성 역사 투어',category_main:'문화/체험',category_sub:'역사 체험',region_main:'CB',region_sub:'충청남도 공주시',address:'충청남도 공주시 웅진로 280 공산성',lat:36.4631,lng:127.1236,price:'성인 3,000원',duration:'1~2시간',reservation_required:false,target_user:['개인','커플','가족'],nearby_places:[],related_heritage_ids:[],short_description:'유네스코 세계문화유산 백제역사유적지구 충남 공주 공산성을 탐방하는 역사 체험이다. 475~538년 백제 웅진 도읍기 왕성이었던 공산성에서 금강 절경과 백제 역사를 함께 체험한다.',source_urls:['https://www.gongsan.go.kr/'],data_confidence:'high',tags:['공주공산성','공주','충남','백제역사','유네스코','공산성','금강'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00',phone:'041-856-7700'},
  {experience_id:'EX-GW-NAT-082',name:'양양 서피비치 서핑',category_main:'문화/체험',category_sub:'어드벤처/레포츠',region_main:'GW',region_sub:'강원특별자치도 양양군',address:'강원특별자치도 양양군 현남면 하조대해안로 10',lat:38.0581,lng:128.6036,price:'강습 포함 80,000원~',duration:'2시간',reservation_required:true,target_user:['청년','개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'한국 서핑의 성지 강원 양양 서피비치에서 서핑을 즐기는 어드벤처 체험이다. 한국에서 서핑 조건이 가장 좋은 양양 서피비치에서 초보자 강습부터 프리서핑까지 즐기는 강원 대표 여름 레저다.',source_urls:['https://www.surfyy.com/'],data_confidence:'high',tags:['양양서피비치서핑','양양','강원','서핑','서피비치','동해','여름레저'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'seasonal',operating_hours:'5~10월 (예약 필수)',phone:'033-672-5466'},
  {experience_id:'EX-JN-CUL-056',name:'해남 두륜산 케이블카',category_main:'문화/체험',category_sub:'자연체험',region_main:'JN',region_sub:'전라남도 해남군',address:'전라남도 해남군 삼산면 두륜산공원길 일대',lat:34.5272,lng:126.6419,price:'성인 왕복 10,000원',duration:'2시간',reservation_required:false,target_user:['개인','커플','가족'],nearby_places:[],related_heritage_ids:[],short_description:'전남 해남 두륜산 케이블카를 타고 정상 전망대에서 완도·진도 방향 남해 다도해 전망을 즐기는 체험이다. 두륜산 정상에서 맑은 날 제주도 한라산까지 보이는 전망이 압도적인 전남 최고 조망 명소다.',source_urls:['https://www.haenam.go.kr/'],data_confidence:'high',tags:['해남두륜산케이블카','해남','전남','두륜산','다도해전망','케이블카','한라산'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~17:30',phone:'061-534-8992'},
  {experience_id:'EX-GN-CUL-080',name:'진주 남강 유등 축제',category_main:'문화/체험',category_sub:'축제',region_main:'GN',region_sub:'경상남도 진주시',address:'경상남도 진주시 남강로 일대',lat:35.1906,lng:128.1086,price:'무료~성인 5,000원',duration:'2~3시간',reservation_required:false,target_user:['커플','개인','가족'],nearby_places:[],related_heritage_ids:[],short_description:'매년 10월 경남 진주 남강에서 열리는 한국 최대 유등 축제다. 임진왜란 진주성 전투에서 군인과 가족의 통신 수단으로 쓰인 유등이 지금은 수만 개 화려한 등불로 남강을 수놓는 세계적 축제다.',source_urls:['https://www.jinju.go.kr/'],data_confidence:'high',tags:['진주유등축제','진주','경남','남강','유등','10월','임진왜란'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'10월 개최 (약 2주)',phone:'055-749-2480'},
  {experience_id:'EX-GB-CUL-049',name:'성주 독용산성 가야 역사',category_main:'문화/체험',category_sub:'역사 체험',region_main:'GB',region_sub:'경상북도 성주군',address:'경상북도 성주군 금수면 독용산성로 일대',lat:35.8667,lng:128.1833,price:'무료',duration:'2~3시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'경북 성주 독용산성에서 가야 역사 트레킹을 즐기는 체험이다. 삼국 시대 대가야 방어성인 성주 독용산성은 가야산·성주 일대를 조망하는 뛰어난 전망으로 가야 역사와 자연을 함께 즐기는 코스다.',source_urls:['https://www.seongju.go.kr/'],data_confidence:'high',tags:['성주독용산성','성주','경북','가야역사','대가야','산성','성주참외'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (무료)',phone:'054-930-6114'},
  {experience_id:'EX-GG-NAT-088',name:'광주 곤지암 리조트 스키',category_main:'문화/체험',category_sub:'어드벤처/레포츠',region_main:'GG',region_sub:'경기도 광주시',address:'경기도 광주시 도척면 도척윗로 278 곤지암리조트',lat:37.3344,lng:127.5006,price:'리프트 평일 55,000원~',duration:'4~6시간',reservation_required:false,target_user:['가족','청년','커플'],nearby_places:[],related_heritage_ids:[],short_description:'수도권 최고 스키장 경기 광주 곤지암 리조트에서 스키·보드를 즐기는 겨울 체험이다. 서울에서 1시간 거리 최고급 시설의 곤지암 리조트는 수도권 스키어들의 성지로 슬로프 14개를 갖춘 대형 리조트다.',source_urls:['https://www.konjiamresort.co.kr/'],data_confidence:'high',tags:['곤지암리조트스키','광주','경기','스키','보드','수도권스키장','겨울레저'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'seasonal',operating_hours:'12~3월 (주중~주말 다름)',phone:'031-610-6000'}
];

const newShorts = [
  {
    experience_id:'EX-SE-NAT-077', experience_name:'서울 남산 봉수대 야경', category_sub:'야경/야간투어', region:'서울특별시',
    script_30s:'오늘은 남산 봉수대에서 서울 야경을 봤어요. 근데 아무도 안 알려주는 게 있어요 — 봉수대가 옛날 카카오톡이에요. 봉화 신호로 북쪽 위험을 3~4시간 만에 한양에 전달했어요. 연기 횟수가 코드예요. 너무 연기가 이렇게 정보통신이었다는 게 좋았습니다.',
    script_60s:'오늘은 서울 남산 봉수대에서 360도 서울 야경을 감상했어요. 조선 시대 봉화 신호를 보내던 역사적인 장소예요. 근데 아무도 안 알려주는 꿀팁 하나 — 봉수대가 어떻게 통신했는지 아세요? 남산 봉수대는 조선 시대 전국 통신망의 최종 도착지예요. 전국 600개 이상 봉수대를 연결하는 통신 네트워크의 중심이에요. 봉화 연기 횟수로 메시지를 전달했어요. 평안하면 연기 1개, 적 발견 2개, 적 접근 3개, 전투 시작 4개, 적 침입 5개예요. 이 코드 체계가 지금의 디지털 통신과 같은 원리예요. 그리고 북쪽 국경에서 출발한 봉화 신호가 남산까지 오는 시간이 약 3~4시간이에요. 조선 시대 최고속 통신이었어요. 지금 스마트폰이 3~4시간이면 한국 어디서나 소식이 오니 큰 차이가 없어요. 너무 연기가 이렇게 정보통신이었다는 게 좋았습니다.',
    secret_tip:'남산 봉수대 = 조선 전국 통신망 최종 도착지 600개 봉수대 연결 — 연기 횟수 코드(1개 평안~5개 침입). 북쪽 국경→남산 3~4시간 전달. 케이블카 왕복+야경+봉수대 세트',
    filming_guide:'남산 봉수대 야경 전경. 봉화 연기 횟수 코드 설명 그래픽. 남산 360도 서울 야경.',
    broll_ideas:['봉수대 야경 전경','봉화 코드 설명','360도 서울 야경','남산타워 배경','서울 도심 불빛'],
    hooks:['봉수대가 조선 카카오톡이에요','연기 횟수가 코드예요','북쪽에서 3~4시간에 도착해요','600개 봉수대 연결이에요','남산 봉수대 꿀팁'],
    thumbnails:['봉수대 야경','봉화 코드 설명','360도 서울 야경','남산타워 배경','서울 불빛'],
    captions:{youtube:'서울 남산 봉수대 — 조선 시대 카카오톡이에요 🔥\n\n연기 횟수가 코드!\n북쪽 국경→남산 3~4시간 전달\n\n📍 서울 중구 삼일대로 231 남산 봉수대\n🔥 조선 전국 통신망 최종 도착지\n\n#남산봉수대야경 #남산 #서울 #봉수대 #조선통신망',instagram:'서울 남산 봉수대 조선 시대 카카오톡이에요 🔥\n\n연기 횟수가 코드 ✨\n북쪽 국경에서 남산까지 3~4시간\n\n📍 서울 중구 남산 봉수대\n\n#남산봉수대야경 #남산 #서울여행 #봉수대 #GemKorea',tiktok:'남산 봉수대 꿀팁 🔥 조선 시대 카카오톡이에요! 연기 횟수가 코드 (1개 평안~5개 침입) // 북쪽 국경에서 남산까지 3~4시간 조선 최고속 통신 #남산봉수대야경 #남산 #서울여행'},
    hashtags:{korean:['#한국여행','#서울여행','#남산','#봉수대야경','#GemKorea'],place_specific:['#남산봉수대조선카카오톡','#연기횟수코드1개~5개','#북쪽국경남산3~4시간전달','#600개봉수대연결전국통신망']}
  },
  {
    experience_id:'EX-JN-NAT-101', experience_name:'장흥 우드랜드 편백 힐링', category_sub:'자연체험', region:'전라남도',
    script_30s:'오늘은 장흥 우드랜드에서 편백 힐링을 했어요. 국내 최대 편백 휴양림이에요. 근데 아무도 안 알려주는 게 있어요 — 편백 피톤치드가 항균 성분이에요. 실제로 결핵균을 억제해요. 연구 논문이 있어요. 너무 나무가 이렇게 의학적이라는 게 좋았습니다.',
    script_60s:'오늘은 전남 장흥 우드랜드 편백 숲에서 힐링 체험을 즐겼어요. 100ha 국내 최대 편백 휴양림이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 편백 피톤치드의 의학적 효능이 있어요. 편백이 분비하는 피톤치드는 단순한 향기 물질이 아니에요. 편백 피톤치드의 주요 성분인 세스퀴테르펜이 결핵균·대장균·황색포도상구균 등에 항균 효과가 있어요. 실제 의학 논문에서 편백 피톤치드가 결핵균 성장을 억제한다고 보고됐어요. 편백 피톤치드를 호흡하면 혈압과 맥박이 낮아지고 면역 세포 NK세포(자연 살해 세포) 활성이 높아진다는 연구도 있어요. 그래서 일부 결핵 요양소가 편백 숲 근처에 위치해 있어요. 장흥 우드랜드 편백 족욕·아로마 체험이 단순한 힐링이 아닌 의학적 효능이 있어요. 너무 나무가 이렇게 의학적이라는 게 좋았습니다.',
    secret_tip:'편백 피톤치드 = 결핵균·대장균·황색포도상구균 항균 효과 — 세스퀴테르펜 성분. 혈압+맥박 저하+NK세포 활성 연구. 오전 9~11시가 피톤치드 최고 농도. 족욕+아로마 세트',
    filming_guide:'장흥 우드랜드 편백 숲 전경. 편백 족욕 체험 장면. 아침 빛 투과 편백 숲.',
    broll_ideas:['우드랜드 편백 숲 전경','편백 족욕 체험','아침 빛 투과','편백 나무껍질 클로즈업','아로마 체험'],
    hooks:['편백이 결핵균을 억제해요','의학 논문이 있는 항균 효과예요','NK세포 활성도 높여요','오전 9~11시가 피톤치드 최고예요','장흥 우드랜드 꿀팁'],
    thumbnails:['편백 숲 전경','족욕 체험','아침 빛 투과','나무껍질 클로즈업','아로마 체험'],
    captions:{youtube:'장흥 우드랜드 — 편백이 결핵균을 억제해요 🌲\n\n의학 논문이 있는 항균 효과!\nNK세포 활성도 높아져요\n\n📍 전남 장흥군 장흥읍 우드랜드길 180\n🌲 국내 최대 100ha 편백 휴양림\n\n#장흥우드랜드편백 #장흥 #전남여행 #편백힐링 #피톤치드항균',instagram:'장흥 우드랜드 편백이 결핵균을 억제해요 🌲\n\n의학 논문 있는 항균 효과 ✨\nNK세포 활성도 높아요\n\n📍 전남 장흥 우드랜드\n\n#장흥우드랜드편백 #장흥여행 #전남 #편백힐링 #GemKorea',tiktok:'장흥 우드랜드 꿀팁 🌲 편백이 결핵균을 억제해요! 의학 논문이 있는 항균 효과 // NK세포 활성도 높이는 피톤치드 #장흥우드랜드편백 #장흥여행 #전남'},
    hashtags:{korean:['#한국여행','#전남여행','#장흥여행','#우드랜드편백','#GemKorea'],place_specific:['#장흥우드랜드편백결핵균억제','#세스퀴테르펜항균효과','#NK세포활성도향상','#오전9~11시피톤치드최고']}
  },
  {
    experience_id:'EX-GN-NAT-092', experience_name:'남해 보리암 일출', category_sub:'자연체험', region:'경상남도',
    script_30s:'오늘은 남해 보리암에서 일출을 봤어요. 근데 아무도 안 알려주는 게 있어요 — 보리암이 683m 산 위에 있는데 계단이 1,400개예요. 새벽에 이걸 걸어 올라가야 해요. 힘들어서 더 소원이 이뤄진다는 말이 있어요. 너무 힘듦이 이렇게 기도를 만든다는 게 좋았습니다.',
    script_60s:'오늘은 경남 남해 보리암에서 새벽 일출 체험을 했어요. 한국 4대 기도처 중 하나예요. 근데 아무도 안 알려주는 꿀팁 하나 — 보리암 오르는 법이 있어요. 보리암은 해발 683m 금산 정상에 위치해요. 주차장에서 보리암까지 1,400여 개 계단을 올라야 해요. 새벽 일출을 보려면 일출 1시간 전에 출발해야 해요. 그런데 꿀팁이 있어요. 일반 계단 코스 말고 모노레일이 있어요. 하지만 일출 시간 전에는 운행 안 해요. 그래서 결국 새벽 일출 보려면 계단을 걸어야 해요. 1,400개 계단을 오르면서 숨이 가빠지면 자연스럽게 기도하게 돼요. 힘들수록 더 간절해지는 거예요. 한국 4대 기도처 중 보리암이 영험하다고 소문난 이유가 이 힘든 과정 때문이라고도 해요. 정상에서 남해 다도해 일출이 구름 위 섬들과 함께 보이면 그 아름다움에 자연스럽게 감사하게 돼요. 너무 힘듦이 이렇게 기도를 만든다는 게 좋았습니다.',
    secret_tip:'보리암 일출 = 1,400개 계단 새벽 1시간 전 출발 — 일출 전 모노레일 운행 안 해 계단 필수. 힘들수록 간절해지는 기도. 한국 4대 기도처 영험 이유. 남해 다도해 구름 위 섬 일출',
    filming_guide:'보리암 새벽 계단 오르는 장면. 정상 남해 다도해 일출. 보리암 암자 전경.',
    broll_ideas:['새벽 계단 오르기','정상 남해 다도해 일출','보리암 암자 전경','구름 위 섬 일출','1400개 계단 클로즈업'],
    hooks:['1,400개 계단을 올라야 해요','새벽 1시간 전 출발이에요','모노레일이 새벽엔 안 떠요','힘들수록 더 간절해져요','남해 보리암 꿀팁'],
    thumbnails:['새벽 계단 오르기','남해 다도해 일출','보리암 암자','구름 위 섬 일출','1400개 계단'],
    captions:{youtube:'남해 보리암 일출 — 1,400개 계단을 올라야 해요 🌅\n\n새벽에 모노레일 운행 안 해요!\n힘들수록 더 간절해지는 기도처\n\n📍 경남 남해군 상주면 보리암로 941\n🌅 한국 4대 기도처 해발 683m\n\n#남해보리암일출 #보리암 #남해 #경남여행 #한국4대기도처',instagram:'남해 보리암 일출 1,400개 계단을 올라야 해요 🌅\n\n새벽 모노레일 운행 안 함 계단 필수 ✨\n힘들수록 더 간절해지는 기도\n\n📍 경남 남해 보리암\n\n#남해보리암 #보리암 #남해여행 #경남 #GemKorea',tiktok:'남해 보리암 꿀팁 🌅 1,400개 계단을 새벽에 걸어 올라야 해요! 일출 전 모노레일 운행 안 해요 // 힘들수록 더 간절해지는 기도처 #남해보리암일출 #남해여행 #경남'},
    hashtags:{korean:['#한국여행','#경남여행','#남해여행','#보리암','#GemKorea'],place_specific:['#남해보리암1400개계단','#새벽모노레일운행안함','#힘들수록간절해지는기도','#한국4대기도처683m']}
  },
  {
    experience_id:'EX-CB-CUL-075', experience_name:'공주 공산성 역사 투어', category_sub:'역사 체험', region:'충청남도',
    script_30s:'오늘은 공주 공산성에 왔어요. 백제 왕성이에요. 근데 아무도 안 알려주는 게 있어요 — 공주가 원래 이름이 웅진이에요. 웅(熊)이 곰이에요. 곰 고을이에요. 그래서 공주 마스코트가 곰이에요. 너무 지명이 이렇게 동물과 연결됐다는 게 좋았습니다.',
    script_60s:'오늘은 충남 공주 공산성을 탐방했어요. 유네스코 세계문화유산 백제역사유적지구예요. 근데 아무도 안 알려주는 꿀팁 하나 — 공주라는 이름의 비밀이 있어요. 공주의 옛 이름은 웅진이에요. 웅진 한자가 熊津이에요. 웅(熊)이 곰이고 진(津)이 나루터예요. 곰이 있는 나루터라는 뜻이에요. 삼국 시대 이 지역에 곰 설화가 많았어요. 고구려 장수왕의 남침으로 위기에 빠진 백제 문주왕이 475년 수도를 한강에서 웅진으로 옮겼어요. 63년간 백제의 수도였어요. 나중에 신라 통일 이후 공주로 이름이 바뀌었어요. 그런데 공주 시청 마스코트가 곰이에요. 웅진의 웅, 곰의 유전자가 도시 이름과 마스코트로 살아있는 거예요. 공주 무령왕릉에서 발굴된 유물이 한국 삼국 시대 최고 수준이에요. 너무 지명이 이렇게 역사를 담았다는 게 좋았습니다.',
    secret_tip:'공주 원래 이름 = 웅진(熊津 곰 나루터) — 공주 마스코트가 곰인 이유. 475~538년 백제 수도. 공산성+무령왕릉 세트 코스. 연미산 금강 전망이 최고 포인트',
    filming_guide:'공산성 성벽+금강 전경. 웅진 백제 역사 설명판. 연미산 금강 조망.',
    broll_ideas:['공산성 성벽+금강 전경','웅진 역사 설명판','연미산 금강 조망','공주 마스코트 곰','백제 유물 자료'],
    hooks:['공주 원래 이름이 웅진이에요','웅이 곰이에요','그래서 마스코트가 곰이에요','백제 수도였던 곳이에요','공주 공산성 꿀팁'],
    thumbnails:['공산성 성벽+금강','웅진 역사 설명판','연미산 금강 조망','공주 마스코트 곰','백제 유물'],
    captions:{youtube:'공주 공산성 — 공주 원래 이름이 웅진(곰 나루터)이에요 🐻\n\n그래서 공주 마스코트가 곰!\n475~538년 백제 수도\n\n📍 충남 공주시 웅진로 280 공산성\n🐻 유네스코 세계문화유산 백제역사유적\n\n#공주공산성 #공산성 #공주 #충남여행 #백제역사웅진',instagram:'공주 공산성 원래 이름이 웅진(곰 나루터)이에요 🐻\n\n그래서 공주 마스코트가 곰 ✨\n475~538년 백제 수도였던 곳\n\n📍 충남 공주 공산성\n\n#공주공산성 #공산성 #공주여행 #충남 #GemKorea',tiktok:'공주 공산성 꿀팁 🐻 공주 원래 이름이 웅진(熊津)이에요! 웅이 곰이라 공주 마스코트가 곰 // 475~538년 백제 수도였던 역사 현장 #공주공산성 #공주여행 #충남'},
    hashtags:{korean:['#한국여행','#충남여행','#공주여행','#공산성','#GemKorea'],place_specific:['#공주공산성웅진곰나루터','#웅진熊津공주마스코트곰','#475년백제수도63년','#유네스코백제역사유적']}
  },
  {
    experience_id:'EX-GN-CUL-080', experience_name:'진주 남강 유등 축제', category_sub:'축제', region:'경상남도',
    script_30s:'오늘은 진주 유등 축제에 왔어요. 근데 아무도 안 알려주는 게 있어요 — 유등이 원래 군사 통신이었어요. 임진왜란 때 강 건너 가족에게 전쟁 상황을 알리는 신호였어요. 그게 지금 화려한 축제가 됐어요. 너무 전쟁 신호가 이렇게 아름다워졌다는 게 좋았습니다.',
    script_60s:'오늘은 경남 진주 남강 유등 축제를 즐겼어요. 매년 10월 한국 최대 유등 축제예요. 근데 아무도 안 알려주는 꿀팁 하나 — 유등의 진짜 기원이 있어요. 유등은 임진왜란 1592년 진주성 전투에서 시작됐어요. 진주성 군인들이 강 건너 가족에게 자신이 살아있다는 신호와 왜군 동태를 알리기 위해 남강에 등을 띄웠어요. 그리고 성 안에 군량이 있다는 것을 알리기 위해 성벽에서 강 건너로 등을 띄우는 작전도 있었어요. 전쟁 중 통신 수단으로 시작된 유등이 지금은 수만 개 화려한 등불로 남강을 수놓는 세계적 축제가 됐어요. 유등 축제 기간 촉석루에서 논개 의암바위까지 강변을 따라 걸으면 화려한 야경을 즐길 수 있어요. 너무 전쟁 신호가 이렇게 아름다운 문화유산이 됐다는 게 좋았습니다.',
    secret_tip:'진주 유등 = 임진왜란 1592년 진주성 전투 군인→가족 통신 신호 — 전쟁 중 생존 신호가 세계 축제로. 유등 축제 기간 촉석루→논개 의암바위 강변 코스 최고. 10월 2주간 개최',
    filming_guide:'남강 유등 화려한 밤 전경. 유등 띄우는 체험 장면. 촉석루+유등 야경 조합.',
    broll_ideas:['남강 유등 밤 전경','유등 띄우기 체험','촉석루+유등 야경','진주성 야경','유등 클로즈업'],
    hooks:['유등이 원래 전쟁 신호였어요','임진왜란 군인이 가족에게 알린 거예요','전쟁 신호가 세계 축제가 됐어요','촉석루 코스가 최고예요','진주 유등 축제 꿀팁'],
    thumbnails:['남강 유등 밤 전경','유등 띄우기','촉석루+유등','진주성 야경','유등 클로즈업'],
    captions:{youtube:'진주 남강 유등 축제 — 전쟁 통신이 세계 축제가 됐어요 🏮\n\n임진왜란 1592년 군인→가족 생존 신호!\n전쟁 신호가 아름다운 문화유산으로\n\n📍 경남 진주시 남강로 유등 축제\n🏮 10월 한국 최대 유등 축제\n\n#진주유등축제 #남강유등축제 #진주 #경남여행 #유등',instagram:'진주 남강 유등 축제 전쟁 통신이 세계 축제가 됐어요 🏮\n\n임진왜란 1592년 군인→가족 생존 신호 ✨\n전쟁 신호가 문화유산으로\n\n📍 경남 진주 남강 유등 축제\n\n#진주유등축제 #남강유등 #진주여행 #경남 #GemKorea',tiktok:'진주 유등 축제 꿀팁 🏮 유등이 원래 전쟁 통신이었어요! 임진왜란 1592년 군인이 가족에게 생존 신호 // 전쟁 신호가 세계 축제가 됐어요 #진주유등축제 #진주여행 #경남'},
    hashtags:{korean:['#한국여행','#경남여행','#진주여행','#진주유등축제','#GemKorea'],place_specific:['#진주유등축제전쟁통신기원','#임진왜란1592진주성군인가족신호','#전쟁신호세계축제변신','#남강촉석루논개의암코스']}
  },
  {
    experience_id:'EX-GW-NAT-082', experience_name:'양양 서피비치 서핑', category_sub:'어드벤처/레포츠', region:'강원특별자치도',
    script_30s:'오늘은 양양 서피비치에서 서핑을 했어요. 근데 아무도 안 알려주는 게 있어요 — 양양 파도가 좋은 이유가 있어요. 동해 대륙붕이 얕아서 파도가 규칙적이에요. 서핑 초보에게 최적이에요. 너무 지형이 이렇게 파도를 만든다는 게 좋았습니다.',
    script_60s:'오늘은 강원도 양양 서피비치에서 서핑을 즐겼어요. 한국 서핑의 성지예요. 근데 아무도 안 알려주는 꿀팁 하나 — 양양 파도가 좋은 지형적 이유가 있어요. 동해는 서해보다 수심이 깊어요. 그런데 양양 앞바다 특정 구간은 대륙붕이 비교적 얕게 이어지는 지형이에요. 수심이 적당히 얕으면 먼 바다에서 온 파도가 해안에 가까이 올수록 규칙적으로 높아지는 좋은 파도 조건이 만들어져요. 불규칙하고 높은 파도는 서핑이 어렵고 위험해요. 양양 서피비치 파도는 규칙적이고 크기가 적당해서 초보자도 배우기 좋아요. 그리고 양양은 대부분의 태풍이 지나가는 코스가 아니라 1년에 서핑 시즌이 넉넉하게 유지돼요. 5~10월이 시즌이에요. 처음 서핑 도전한다면 양양 서피비치가 최적이에요. 너무 지형이 이렇게 파도를 만든다는 게 좋았습니다.',
    secret_tip:'양양 서피비치 파도 좋은 이유 = 대륙붕 적당한 수심으로 규칙적 파도 형성 — 초보자 최적 조건. 5~10월 서핑 시즌. 오전 9~11시 바람 약해 파도 최적. 서핑 강습 포함 패키지 추천',
    filming_guide:'양양 서피비치 서핑 드론 영상. 서핑 파도 타는 순간 클로즈업. 서피비치 전경.',
    broll_ideas:['서핑 드론 영상','파도 타는 순간','서피비치 전경','서핑 강습 장면','양양 동해 배경'],
    hooks:['양양 파도가 좋은 이유가 있어요','대륙붕 수심이 적당해서예요','초보자한테 최적 조건이에요','오전 9~11시가 파도 최적이에요','양양 서핑 꿀팁'],
    thumbnails:['서핑 드론 영상','파도 타는 순간','서피비치 전경','강습 장면','양양 동해 배경'],
    captions:{youtube:'양양 서피비치 서핑 — 파도 좋은 지형적 이유가 있어요 🏄\n\n대륙붕 적당한 수심으로 규칙적 파도!\n초보자 최적 조건\n\n📍 강원도 양양군 현남면 서피비치\n🏄 한국 서핑의 성지 5~10월\n\n#양양서피비치서핑 #서피비치 #양양 #강원여행 #서핑',instagram:'양양 서피비치 서핑 파도 좋은 이유가 있어요 🏄\n\n대륙붕 수심으로 규칙적 파도 ✨\n초보자 최적 조건 오전 9~11시 최고\n\n📍 강원 양양 서피비치\n\n#양양서피비치 #서핑 #양양여행 #강원 #GemKorea',tiktok:'양양 서핑 꿀팁 🏄 파도 좋은 지형적 이유가 있어요! 대륙붕 적당한 수심으로 규칙적 파도 // 초보자한테 최적 조건이에요 #양양서피비치서핑 #서핑 #양양여행'},
    hashtags:{korean:['#한국여행','#강원여행','#양양여행','#서피비치서핑','#GemKorea'],place_specific:['#양양서피비치대륙붕규칙적파도','#초보자최적서핑조건','#오전9~11시파도최적','#5~10월한국서핑성지']}
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
