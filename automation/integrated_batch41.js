const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const now = new Date().toISOString().slice(0,19);

const newExps = [
  {experience_id:'EX-SE-CUL-074',name:'서울 북촌 한옥마을 투어',category_main:'문화/체험',category_sub:'역사 체험',region_main:'SE',region_sub:'서울특별시 종로구',address:'서울특별시 종로구 계동길 37',lat:37.5804,lng:126.9838,price:'무료',duration:'1~2시간',reservation_required:false,target_user:['개인','커플','가족'],nearby_places:[],related_heritage_ids:[],short_description:'서울 종로구 북촌 한옥마을의 골목길을 산책하며 조선 시대 양반 가옥 문화를 체험하는 코스다. 600년 역사 서울 도심 한가운데 남아있는 한옥 밀집 지구로 경복궁·창덕궁 사이에 위치한다.',source_urls:['https://www.jongno.go.kr/'],data_confidence:'high',tags:['북촌한옥마을','서울','종로','한옥','조선양반','골목투어','경복궁'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (무료, 10:00~17:00 주민 배려)',phone:'02-731-0448'},
  {experience_id:'EX-JN-NAT-090',name:'여수 향일암 일출 트레킹',category_main:'문화/체험',category_sub:'자연체험',region_main:'JN',region_sub:'전라남도 여수시',address:'전라남도 여수시 돌산읍 향일암로 60',lat:34.6358,lng:127.8428,price:'성인 2,000원',duration:'1~2시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'남해 최고의 일출 명소 전남 여수 향일암에서 새벽 트레킹으로 일출을 감상하는 체험이다. 바위 절벽 위 암자 향일암에서 보는 남해 일출이 한국 4대 기도처이자 새해 일출 명소다.',source_urls:['https://www.hyangiram.or.kr/'],data_confidence:'high',tags:['향일암일출','여수','전남','일출','향일암','새벽트레킹','한국4대기도처'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'새벽 04:00~ (일출 전)',phone:'061-644-4742'},
  {experience_id:'EX-GN-NAT-084',name:'통영 케이블카 미륵산 전망',category_main:'문화/체험',category_sub:'자연체험',region_main:'GN',region_sub:'경상남도 통영시',address:'경상남도 통영시 발개로 205 통영케이블카',lat:34.8503,lng:128.4344,price:'성인 왕복 16,000원',duration:'2시간',reservation_required:false,target_user:['커플','가족','개인'],nearby_places:[],related_heritage_ids:[],short_description:'한국 최초 자동순환식 케이블카 통영 케이블카를 타고 미륵산 정상에서 한려수도 다도해 전망을 즐기는 체험이다. 정상에서 한려해상국립공원 섬들이 펼쳐지는 경치가 국내 최고 해상 조망이다.',source_urls:['https://www.ttdc.kr/cable/'],data_confidence:'high',tags:['통영케이블카','통영','경남','미륵산','한려수도','다도해','한려해상국립공원'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:30~18:00',phone:'1544-3303'},
  {experience_id:'EX-GG-CUL-076',name:'양평 두물머리 일출 사진',category_main:'문화/체험',category_sub:'자연체험',region_main:'GG',region_sub:'경기도 양평군',address:'경기도 양평군 양서면 두물머리길 일대',lat:37.5261,lng:127.3017,price:'무료',duration:'1시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'남한강과 북한강이 합류하는 양평 두물머리에서 새벽 물안개와 일출을 촬영하는 사진 체험이다. 400년 된 느티나무와 안개 낀 두물머리 일출이 국내 사진 명소 1순위로 꼽히는 풍경이다.',source_urls:['https://www.yangpyeong.go.kr/'],data_confidence:'high',tags:['두물머리일출','양평','경기','두물머리','물안개','남한강북한강','사진명소'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'새벽 05:00~ (일출 시간)',phone:'031-773-2261'},
  {experience_id:'EX-JB-NAT-066',name:'진안 마이산 탑사 트레킹',category_main:'문화/체험',category_sub:'역사 체험',region_main:'JB',region_sub:'전라북도 진안군',address:'전라북도 진안군 마령면 마이산남로 318 탑사',lat:35.7736,lng:127.4292,price:'성인 3,000원',duration:'2시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'두 봉우리가 말의 귀 모양인 전북 진안 마이산에서 탑사까지 트레킹하는 체험이다. 마이산 자락 탑사에는 80여 개 돌탑이 수백 년간 자연 적층된 신비로운 석탑군이 있어 독특한 경관을 자랑한다.',source_urls:['https://www.jinan.go.kr/'],data_confidence:'high',tags:['마이산탑사','진안','전북','마이산','돌탑','탑사','자연석탑'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00',phone:'063-433-3313'},
  {experience_id:'EX-CB-CUL-070',name:'충주 탄금대 역사 트레킹',category_main:'문화/체험',category_sub:'역사 체험',region_main:'CB',region_sub:'충청북도 충주시',address:'충청북도 충주시 칠금동 탄금대',lat:36.9878,lng:127.9047,price:'무료',duration:'1시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'신라 시대 가야금 명인 우륵이 가야금을 연주했다는 충북 충주 탄금대를 탐방하는 역사 체험이다. 임진왜란 신립 장군 배수진 전투지이기도 하며 남한강 절벽 위 탄금대의 경치가 아름답다.',source_urls:['https://www.chungju.go.kr/'],data_confidence:'high',tags:['충주탄금대','충주','충북','우륵','가야금','신립장군','임진왜란'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (무료)',phone:'043-850-6821'},
  {experience_id:'EX-GW-NAT-074',name:'속초 영금정 일출',category_main:'문화/체험',category_sub:'자연체험',region_main:'GW',region_sub:'강원특별자치도 속초시',address:'강원특별자치도 속초시 영금정로 일대',lat:38.2036,lng:128.5931,price:'무료',duration:'1시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'속초 동해 바다에서 직접 솟아오르는 일출을 감상하는 체험이다. 영금정 바위에서 보는 일출과 설악산 울산바위가 함께 보이는 경치가 속초 대표 일출 명소로 새해 일출 성지다.',source_urls:['https://www.sokcho.go.kr/'],data_confidence:'high',tags:['속초영금정일출','속초','강원','일출','설악산','동해','영금정'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'새벽 04:30~ (일출 전)',phone:'033-639-2691'},
  {experience_id:'EX-JN-NAT-091',name:'고흥 팔영산 트레킹',category_main:'문화/체험',category_sub:'자연체험',region_main:'JN',region_sub:'전라남도 고흥군',address:'전라남도 고흥군 점암면 팔영산로 632',lat:34.6158,lng:127.3681,price:'무료',duration:'4~5시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'고흥 남해 바다를 바라보며 8개 봉우리를 연결하는 전남 고흥 팔영산 종주 트레킹이다. 다도해 국립공원 내 팔영산은 남해 섬들이 발아래 펼쳐지는 360도 해상 파노라마 전망이 압도적이다.',source_urls:['https://www.goheung.go.kr/'],data_confidence:'high',tags:['고흥팔영산','고흥','전남','팔영산','다도해국립공원','해상파노라마','종주트레킹'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (무료)',phone:'061-835-4000'},
  {experience_id:'EX-GN-CUL-072',name:'마산 어시장 투어',category_main:'문화/체험',category_sub:'지역 먹거리',region_main:'GN',region_sub:'경상남도 창원시',address:'경상남도 창원시 마산합포구 어시장 일대',lat:35.2017,lng:128.5672,price:'먹거리 별도',duration:'1~2시간',reservation_required:false,target_user:['개인','커플','가족'],nearby_places:[],related_heritage_ids:[],short_description:'경남 마산 어시장을 탐방하며 신선한 회와 아귀찜 등 경남 해산물 먹거리를 즐기는 투어다. 마산 아귀찜 발상지인 마산 어시장이 전국 최대 어시장 중 하나로 새벽부터 회를 즐기는 로컬 문화가 있다.',source_urls:['https://www.changwon.go.kr/'],data_confidence:'high',tags:['마산어시장','마산','창원','경남','아귀찜','어시장투어','해산물'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'새벽 05:00~22:00',phone:'055-220-4731'},
  {experience_id:'EX-GG-NAT-075',name:'남한산성 트레킹+역사',category_main:'문화/체험',category_sub:'역사 체험',region_main:'GG',region_sub:'경기도 광주시',address:'경기도 광주시 남한산성면 산성리 남한산성',lat:37.4800,lng:127.1786,price:'무료',duration:'2~3시간',reservation_required:false,target_user:['개인','커플','가족'],nearby_places:[],related_heritage_ids:[],short_description:'유네스코 세계문화유산 경기 남한산성을 트레킹하며 병자호란 역사를 배우는 체험이다. 병자호란 당시 인조가 47일간 항전한 역사 현장을 걸으며 서울 전경을 조망한다.',source_urls:['https://www.namhansansung.or.kr/'],data_confidence:'high',tags:['남한산성','광주','경기','병자호란','유네스코','성곽트레킹','인조'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (무료)',phone:'031-743-6610'},
  {experience_id:'EX-JB-CUL-067',name:'군산 근대 역사 투어',category_main:'문화/체험',category_sub:'역사 체험',region_main:'JB',region_sub:'전라북도 군산시',address:'전라북도 군산시 장미동 군산근대역사박물관',lat:35.9828,lng:126.7161,price:'성인 3,000원',duration:'2~3시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'일제강점기 수탈의 역사를 담은 전북 군산 근대 역사 지구를 탐방하는 투어다. 군산세관·히로쓰 가옥·동국사 등 일제강점기 건축물들이 밀집해 드라마 야인시대·8일의 밤 등 촬영지로 유명하다.',source_urls:['https://www.gunsan.go.kr/'],data_confidence:'high',tags:['군산근대역사','군산','전북','일제강점기','군산세관','히로쓰가옥','근대건축'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00',phone:'063-454-7870'},
  {experience_id:'EX-GB-NAT-044',name:'영주 부석사 은행나무 단풍',category_main:'문화/체험',category_sub:'자연체험',region_main:'GB',region_sub:'경상북도 영주시',address:'경상북도 영주시 부석면 북지리 부석사',lat:36.9772,lng:128.6567,price:'성인 1,500원',duration:'1~2시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'유네스코 산사 세계문화유산 경북 영주 부석사에서 가을 은행나무 단풍을 감상하는 체험이다. 부석사 진입로 은행나무 가로수가 10~11월 황금빛으로 물드는 장관이 국내 단풍 사진 명소로 꼽힌다.',source_urls:['https://www.pusoksa.org/'],data_confidence:'high',tags:['부석사은행나무','영주','경북','부석사','은행나무단풍','유네스코산사','가을단풍'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'10~11월 단풍 시즌',phone:'054-633-3464'}
];

const newShorts = [
  {
    experience_id:'EX-SE-CUL-074', experience_name:'서울 북촌 한옥마을 투어', category_sub:'역사 체험', region:'서울특별시',
    script_30s:'오늘은 북촌 한옥마을을 산책했어요. 근데 아무도 안 알려주는 게 있어요 — 북촌이 조선 시대 왕실과 가장 가까운 양반 동네였어요. 임금 눈에 보이는 집은 지붕 높이를 맞춰야 했어요. 그게 북촌 한옥이 낮은 이유예요. 너무 왕이 집 높이를 결정했다는 게 좋았습니다.',
    script_60s:'오늘은 서울 북촌 한옥마을 골목길을 산책했어요. 경복궁과 창덕궁 사이 600년 역사의 한옥 밀집 지구예요. 근데 아무도 안 알려주는 꿀팁 하나 — 북촌 한옥 지붕이 낮은 이유가 있어요. 북촌은 조선 시대 왕실에서 가장 가까운 양반 동네였어요. 경복궁에서 내려다보면 북촌 집들이 보여요. 조선 시대 법도에 따르면 임금이 머무는 궁궐의 지붕보다 낮게 집을 지어야 했어요. 특히 경복궁 임금의 시선에 들어오는 집들은 더욱 낮게 지을 수밖에 없었어요. 그래서 북촌 한옥들이 다른 지역 양반 가옥보다 낮고 겸손한 형태를 갖추게 됐어요. 임금을 배려한 지붕 높이가 지금까지 이어진 거예요. 너무 왕이 집 높이를 결정했다는 게 좋았습니다.',
    secret_tip:'북촌 한옥 지붕 낮은 이유 = 경복궁 임금 시선에 들어오는 집은 궁보다 낮아야 하는 법도 — 임금을 배려한 겸손한 지붕 높이. 이 규칙이 지금 북촌 스카이라인 만듦. 8경 포인트 각 위치 확인',
    filming_guide:'북촌 8경 뷰포인트에서 한옥 지붕 라인 원경. 좁은 골목 한옥 처마 클로즈업. 경복궁 방향 배경.',
    broll_ideas:['한옥 지붕 라인 원경','좁은 골목 처마 클로즈업','경복궁 방향 배경','북촌 전경 부감 샷','전통 문양 대문'],
    hooks:['북촌 한옥이 낮은 이유가 있어요','임금 시선에 보이는 집이라서요','궁보다 낮아야 하는 법도였어요','임금이 집 높이를 결정했어요','북촌 한옥 꿀팁'],
    thumbnails:['한옥 지붕 라인','골목 처마 클로즈업','경복궁 방향','북촌 전경','전통 대문'],
    captions:{youtube:'서울 북촌 한옥 — 지붕이 낮은 이유가 있어요 🏠\n\n임금 시선에 보이는 집은 궁보다 낮아야!\n600년 된 규칙이 지금도 스카이라인에\n\n📍 서울 종로구 계동길 37\n🏠 조선 시대 왕실 인근 양반 동네\n\n#북촌한옥마을 #서울 #종로 #북촌 #한옥투어',instagram:'서울 북촌 한옥 지붕이 낮은 이유가 있어요 🏠\n\n임금 시선에 보이는 집은 궁보다 낮아야 ✨\n600년 된 규칙이 지금도 스카이라인에\n\n📍 서울 종로구 북촌\n\n#북촌한옥마을 #서울여행 #종로 #한옥 #GemKorea',tiktok:'북촌 한옥 꿀팁 🏠 지붕이 낮은 이유가 있어요! 경복궁 임금 시선에 보이는 집은 궁보다 낮아야 하는 법도 // 600년 된 규칙이 지금 스카이라인 만들었어요 #북촌한옥마을 #서울여행'},
    hashtags:{korean:['#한국여행','#서울여행','#종로','#한옥','#GemKorea'],place_specific:['#북촌한옥마을지붕낮은이유','#임금시선집높이법도','#경복궁배려겸손한옥','#600년규칙스카이라인']}
  },
  {
    experience_id:'EX-JN-NAT-090', experience_name:'여수 향일암 일출 트레킹', category_sub:'자연체험', region:'전라남도',
    script_30s:'오늘은 여수 향일암에서 일출을 봤어요. 근데 아무도 안 알려주는 게 있어요 — 향일암이 바위 절벽 틈 사이를 통과하는 코스예요. 성인이 옆으로 가야 겨우 통과하는 구간이 있어요. 그 좁은 틈이 기도처의 관문이에요. 너무 틈이 이렇게 의미있다는 게 좋았습니다.',
    script_60s:'오늘은 전남 여수 향일암에서 새벽 일출 트레킹을 했어요. 남해 최고의 일출 명소이자 한국 4대 기도처 중 하나예요. 근데 아무도 안 알려주는 꿀팁 하나 — 향일암 올라가는 코스의 비밀이 있어요. 향일암 오르는 길에 바위 절벽 사이 좁은 틈을 여러 번 통과해야 해요. 어른이 옆으로 돌아서야 겨우 통과할 정도로 좁아요. 이 좁은 틈을 통과하는 것이 단순한 코스가 아니에요. 불교에서 좁은 문을 통과하는 것은 속세의 욕심을 버리고 순수하게 들어간다는 상징이에요. 욕심이 많을수록 몸이 무거워 통과하기 어렵다는 말이 있어요. 실제로 좁은 틈을 숨을 참고 옆으로 통과하면서 묘한 해방감이 느껴져요. 그 감각을 느끼러 많은 사람이 새벽에 향일암을 찾아요. 너무 틈이 이렇게 의미있다는 게 좋았습니다.',
    secret_tip:'향일암 바위 틈 통과 = 속세 욕심 버리는 상징 — 성인 옆으로 겨우 통과하는 좁은 틈. 불교 좁은 문 의미. 새벽 4시~5시 방문이 인파 적고 일출 최적. 주차 미리 확인 필수',
    filming_guide:'향일암 바위 틈 통과하는 순간. 바위 사이로 보이는 남해 일출. 향일암 전경.',
    broll_ideas:['바위 틈 통과 순간','틈 사이 남해 일출','향일암 전경','새벽 기도 분위기','남해 수평선 일출'],
    hooks:['향일암에 바위 틈을 통과해요','옆으로 가야 겨우 통과해요','욕심 버리는 상징이에요','새벽 4시에 가는 게 최적이에요','여수 향일암 일출 꿀팁'],
    thumbnails:['바위 틈 통과','틈 사이 일출','향일암 전경','새벽 기도','남해 일출'],
    captions:{youtube:'여수 향일암 일출 — 바위 틈을 통과해야 해요 🌅\n\n옆으로 가야 겨우 통과!\n욕심 버리는 불교 상징\n\n📍 전남 여수시 돌산읍 향일암로 60\n🌅 한국 4대 기도처 남해 최고 일출\n\n#여수향일암일출 #향일암 #여수 #전남여행 #한국4대기도처',instagram:'여수 향일암 일출 바위 틈을 통과해야 해요 🌅\n\n옆으로 가야 겨우 통과 욕심 버리는 상징 ✨\n새벽 4시가 인파 없고 일출 최적\n\n📍 전남 여수 향일암\n\n#여수향일암 #여수여행 #전남 #일출 #GemKorea',tiktok:'여수 향일암 꿀팁 🌅 바위 틈을 통과해야 해요! 성인이 옆으로 가야 겨우 통과하는 좁은 틈 // 욕심 버리는 불교 상징이에요 #여수향일암일출 #여수여행 #전남'},
    hashtags:{korean:['#한국여행','#전남여행','#여수여행','#향일암','#GemKorea'],place_specific:['#여수향일암일출바위틈','#옆으로통과욕심버림','#불교좁은문상징','#새벽4시최적']}
  },
  {
    experience_id:'EX-GN-NAT-084', experience_name:'통영 케이블카 미륵산 전망', category_sub:'자연체험', region:'경상남도',
    script_30s:'오늘은 통영 케이블카를 탔어요. 근데 아무도 안 알려주는 게 있어요 — 통영 앞바다에 섬이 570개예요. 미륵산 정상에서 그게 다 보여요. 근데 이 섬이 모두 유인도가 아니에요. 대부분 무인도예요. 너무 보이는 것이 이렇게 거대하다는 게 좋았습니다.',
    script_60s:'오늘은 경남 통영 케이블카를 타고 미륵산 정상 정상에서 한려수도를 내려다봤어요. 한국 최초 자동순환식 케이블카예요. 근데 아무도 안 알려주는 꿀팁 하나 — 통영 앞바다 섬 숫자의 비밀이 있어요. 통영 앞바다에 크고 작은 섬이 570여 개가 있어요. 미륵산 정상에서 맑은 날 이 섬들이 파노라마로 펼쳐져요. 그런데 이 570개 섬 중 사람이 사는 유인도는 40여 개밖에 안 돼요. 나머지 530여 개는 무인도예요. 그 무인도들은 국가 소유이거나 특정 어촌 계에서 해산물 채취권을 갖고 있어요. 사람 손이 안 닿은 무인도들이 청정 생태계를 유지하기 때문에 통영 해산물이 맛있는 거예요. 보이는 섬 하나하나가 청정 생태계 보고예요. 너무 보이는 것이 이렇게 거대한 이야기라는 게 좋았습니다.',
    secret_tip:'통영 앞바다 570개 섬 중 유인도 40개 나머지 530개 무인도 — 무인도 청정 생태계가 통영 해산물 맛 이유. 미륵산 정상에서 맑은 날 전부 조망 가능. 하산 길 동피랑 세트',
    filming_guide:'미륵산 정상 파노라마 360도 영상. 한려수도 섬 군락 조망. 케이블카 탑승 중 바다 배경.',
    broll_ideas:['미륵산 정상 파노라마 360도','한려수도 섬 군락','케이블카 탑승 바다 배경','통영 항구 전경','섬 수평선'],
    hooks:['통영 앞바다에 섬이 570개예요','유인도는 40개뿐이에요','530개가 무인도예요','그래서 통영 해산물이 맛있어요','통영 케이블카 꿀팁'],
    thumbnails:['미륵산 정상 파노라마','한려수도 섬 군락','케이블카 바다 배경','통영 항구','섬 수평선'],
    captions:{youtube:'통영 케이블카 — 앞바다 섬이 570개예요 🏝️\n\n유인도는 40개 나머지 530개 무인도!\n무인도 청정 생태계가 통영 해산물 맛 이유\n\n📍 경남 통영시 발개로 205\n🏝️ 한국 최초 자동순환식 케이블카\n\n#통영케이블카 #통영 #경남여행 #한려수도 #미륵산',instagram:'통영 케이블카 앞바다 섬이 570개예요 🏝️\n\n유인도 40개 나머지 530개 무인도 ✨\n무인도가 청정 생태계 지켜줘서 해산물 맛있음\n\n📍 경남 통영 케이블카\n\n#통영케이블카 #통영여행 #경남 #한려수도 #GemKorea',tiktok:'통영 케이블카 꿀팁 🏝️ 앞바다에 섬이 570개예요! 유인도는 40개 나머지 530개가 무인도 // 무인도 청정 생태계가 통영 해산물 맛의 이유예요 #통영케이블카 #통영여행 #경남'},
    hashtags:{korean:['#한국여행','#경남여행','#통영여행','#케이블카','#GemKorea'],place_specific:['#통영케이블카570개섬','#유인도40개무인도530개','#무인도청정생태계해산물','#미륵산한려수도파노라마']}
  },
  {
    experience_id:'EX-GG-CUL-076', experience_name:'양평 두물머리 일출 사진', category_sub:'자연체험', region:'경기도',
    script_30s:'오늘은 양평 두물머리에서 일출 사진을 찍었어요. 근데 아무도 안 알려주는 게 있어요 — 두물머리 사진이 잘 나오는 조건이 있어요. 바람 없는 날 새벽 물안개가 핵심이에요. 기온 차가 클수록 안개가 짙어요. 너무 조건이 이렇게 사진을 만든다는 게 좋았습니다.',
    script_60s:'오늘은 경기도 양평 두물머리에서 새벽 일출 사진을 촬영했어요. 남한강과 북한강이 만나는 합류 지점으로 국내 사진 명소 1순위예요. 근데 아무도 안 알려주는 꿀팁 하나 — 두물머리 사진 잘 나오는 조건이 있어요. 두물머리 물안개는 강과 대기 온도 차이가 클 때 생겨요. 봄·가을 새벽에 기온이 10도 이하로 내려가면 강 수면에서 안개가 피어올라요. 이 물안개가 새벽 일출과 만나면 몽환적인 사진이 돼요. 그런데 바람이 불면 안개가 빠르게 사라져요. 바람 없는 맑은 날 새벽 5시에 도착하는 게 최적이에요. 기상청 앱에서 그날 아침 풍속 2m/s 이하 확인 후 방문하면 돼요. 400년 된 느티나무를 배경에 넣으면 더 완성도 높은 사진이에요. 너무 조건 하나가 이렇게 사진을 만든다는 게 좋았습니다.',
    secret_tip:'두물머리 최고 사진 조건 = 바람 없는 날 봄·가을 새벽 기온 10도 이하 — 풍속 2m/s 이하 확인 후 방문. 물안개+일출 조합이 핵심. 느티나무 400년 나무 배경 포함. 새벽 5시 도착 권장',
    filming_guide:'물안개 피어오르는 두물머리 새벽. 400년 느티나무 배경 일출. 남한강+북한강 합류 지점 위에서.',
    broll_ideas:['물안개 두물머리 새벽','400년 느티나무 일출 배경','강 합류 지점 항공뷰','새벽 물안개 피어오름','일출 수면 반사'],
    hooks:['물안개 있는 날이 최고예요','바람 없는 날 새벽이에요','풍속 2m/s 이하 확인 필수예요','400년 느티나무 배경이 완성이에요','양평 두물머리 꿀팁'],
    thumbnails:['물안개 두물머리 새벽','느티나무 일출 배경','강 합류 항공뷰','새벽 안개','수면 반사 일출'],
    captions:{youtube:'양평 두물머리 일출 — 물안개 있는 날이 최고예요 📸\n\n풍속 2m/s 이하+기온 10도 이하 조건!\n400년 느티나무 배경이 완성이에요\n\n📍 경기도 양평군 양서면 두물머리길\n📸 국내 사진 명소 1순위\n\n#양평두물머리 #두물머리일출 #양평 #경기여행 #물안개',instagram:'양평 두물머리 일출 물안개 있는 날이 최고예요 📸\n\n풍속 2m/s 이하 새벽 5시 도착 ✨\n400년 느티나무 배경이 완성이에요\n\n📍 경기 양평 두물머리\n\n#양평두물머리 #두물머리 #양평여행 #경기 #GemKorea',tiktok:'양평 두물머리 꿀팁 📸 물안개 있는 날이 최고예요! 풍속 2m/s 이하 기온 10도 이하 확인 후 방문 // 400년 느티나무 배경 포함하면 완성 #양평두물머리 #두물머리일출 #양평여행'},
    hashtags:{korean:['#한국여행','#경기여행','#양평여행','#두물머리','#GemKorea'],place_specific:['#양평두물머리물안개일출','#풍속2ms이하최적','#기온10도이하물안개','#400년느티나무배경']}
  },
  {
    experience_id:'EX-JB-NAT-066', experience_name:'진안 마이산 탑사 트레킹', category_sub:'역사 체험', region:'전라북도',
    script_30s:'오늘은 진안 마이산 탑사에 왔어요. 80개 돌탑이 있어요. 근데 아무도 안 알려주는 게 있어요 — 이 돌탑들이 접착제 없이 쌓여서 수백 년간 무너지지 않았어요. 태풍도 버텼어요. 과학자들도 왜 안 무너지는지 설명을 못 해요. 너무 신비가 이렇게 과학을 이긴다는 게 좋았습니다.',
    script_60s:'오늘은 전북 진안 마이산 탑사를 탐방했어요. 80여 개 돌탑이 수백 년간 서 있는 신비로운 공간이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 탑사 돌탑의 미스터리가 있어요. 탑사 돌탑은 조선 시대 이갑용이라는 처사가 홀로 쌓았어요. 접착제나 시멘트 없이 순수하게 돌을 올려서 만든 탑이에요. 그런데 수백 년이 지나도 무너지지 않아요. 거대한 태풍에도 끄떡없이 서 있어요. 지금까지 무너진 탑은 거의 없어요. 과학자들이 분석했는데 돌과 돌 사이 마찰력과 균형이 절묘하게 맞아 오히려 흔들림에 강한 구조라고 해요. 그런데 정확히 어떻게 그 균형을 잡았는지 아직 완전히 설명하지 못한다고 해요. 이갑용 처사가 어떤 원리로 쌓았는지가 지금도 미스터리예요. 너무 신비가 이렇게 과학을 이긴다는 게 좋았습니다.',
    secret_tip:'탑사 돌탑 = 접착제 없이 수백 년 무너지지 않은 미스터리 — 태풍도 버팀. 이갑용 처사 홀로 축조. 마찰력+균형 분석으로도 완전 설명 불가. 마이산 봄 벚꽃+탑 조합이 포인트',
    filming_guide:'80개 돌탑 군락 전체 샷. 탑 위에 새로 놓인 작은 돌 클로즈업. 마이산 두 봉우리 배경.',
    broll_ideas:['80개 돌탑 군락 전체','탑 위 작은 돌 클로즈업','마이산 두 봉우리 배경','돌탑 사이 좁은 통로','탑 균형 클로즈업'],
    hooks:['접착제 없이 수백 년 안 무너져요','태풍도 버텼어요','과학으로 설명을 못 해요','한 사람이 혼자 쌓은 거예요','진안 마이산 탑사 꿀팁'],
    thumbnails:['돌탑 군락 전체','작은 돌 클로즈업','마이산 배경','탑 사이 통로','탑 균형'],
    captions:{youtube:'진안 마이산 탑사 — 접착제 없이 수백 년 안 무너져요 🗼\n\n태풍도 버텼어요!\n과학자도 완전히 설명 못 하는 미스터리\n\n📍 전북 진안군 마령면 마이산남로 318\n🗼 조선 시대 이갑용 처사 홀로 축조\n\n#진안마이산탑사 #마이산 #진안 #전북여행 #돌탑미스터리',instagram:'진안 마이산 탑사 접착제 없이 수백 년 안 무너져요 🗼\n\n태풍도 버팀 과학자도 설명 못 하는 미스터리 ✨\n이갑용 처사 혼자 쌓은 80개 돌탑\n\n📍 전북 진안 마이산 탑사\n\n#진안마이산탑사 #마이산 #진안여행 #전북 #GemKorea',tiktok:'진안 마이산 탑사 꿀팁 🗼 접착제 없이 수백 년 안 무너져요! 태풍도 버팀 // 과학자도 완전히 설명 못 하는 미스터리예요 #진안마이산탑사 #마이산 #진안여행'},
    hashtags:{korean:['#한국여행','#전북여행','#진안여행','#마이산','#GemKorea'],place_specific:['#진안마이산탑사돌탑미스터리','#접착제없이수백년안무너짐','#태풍도버팀과학설명불가','#이갑용처사홀로80개탑']}
  },
  {
    experience_id:'EX-GB-NAT-044', experience_name:'영주 부석사 은행나무 단풍', category_sub:'자연체험', region:'경상북도',
    script_30s:'오늘은 영주 부석사에 왔어요. 은행나무 단풍이에요. 근데 아무도 안 알려주는 게 있어요 — 부석사 무량수전이 한국에서 두 번째로 오래된 목조 건물이에요. 고려 시대 건물이에요. 배흘림 기둥 안에 1300년 세월이 있어요. 너무 나무가 이렇게 오래됐다는 게 좋았습니다.',
    script_60s:'오늘은 경북 영주 부석사 은행나무 단풍길을 걸었어요. 유네스코 산사 세계문화유산이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 부석사 무량수전의 역사가 있어요. 부석사 무량수전은 한국에서 두 번째로 오래된 목조 건물이에요. 고려 시대 1376년에 지어진 건물이 지금까지 서 있어요. 무량수전의 배흘림 기둥이 특유의 아름다운 비례를 만드는데 이 형태가 그리스 파르테논 신전의 배흘림 기둥과 같은 원리예요. 동서양에서 독립적으로 같은 아름다움을 발견한 거예요. 무량수전 안에 앉아서 배흘림 기둥 사이로 보이는 소백산 전경이 절경이에요. 은행나무 단풍과 함께 이 역사를 알면 훨씬 깊은 여행이에요. 너무 나무가 이렇게 1300년 세월을 담는다는 게 좋았습니다.',
    secret_tip:'부석사 무량수전 = 한국 두 번째 오래된 목조 건물 고려 1376년 — 배흘림 기둥이 그리스 파르테논 신전과 동일 원리. 동서양 독립적 발견. 기둥 사이 소백산 전경이 절경. 10~11월 은행나무 최고',
    filming_guide:'무량수전 배흘림 기둥 클로즈업. 기둥 사이 소백산 전경. 부석사 은행나무 황금빛 단풍 전경.',
    broll_ideas:['무량수전 배흘림 기둥 클로즈업','기둥 사이 소백산 전경','은행나무 황금빛 단풍','부석사 전경','은행잎 낙엽'],
    hooks:['무량수전이 고려 1376년 건물이에요','한국 두 번째 오래된 목조예요','배흘림 기둥이 파르테논이랑 같아요','기둥 사이 소백산이 절경이에요','영주 부석사 꿀팁'],
    thumbnails:['배흘림 기둥 클로즈업','기둥 사이 소백산','은행나무 황금빛','부석사 전경','은행잎 낙엽'],
    captions:{youtube:'영주 부석사 — 무량수전이 고려 시대 목조 건물이에요 🍂\n\n배흘림 기둥이 파르테논과 같은 원리!\n10~11월 은행나무 황금빛 단풍\n\n📍 경북 영주시 부석면 북지리 부석사\n🍂 유네스코 세계문화유산 산사\n\n#영주부석사 #부석사 #영주 #경북여행 #은행나무단풍',instagram:'영주 부석사 무량수전이 고려 시대 목조 건물이에요 🍂\n\n배흘림 기둥이 파르테논과 같은 원리 ✨\n기둥 사이 소백산 전경이 절경\n\n📍 경북 영주 부석사\n\n#영주부석사 #부석사 #영주여행 #경북 #GemKorea',tiktok:'영주 부석사 꿀팁 🍂 무량수전이 고려 1376년 목조 건물이에요! 배흘림 기둥이 그리스 파르테논 신전과 같은 원리 // 기둥 사이 소백산 전경이 절경이에요 #영주부석사 #부석사 #영주여행'},
    hashtags:{korean:['#한국여행','#경북여행','#영주여행','#부석사','#GemKorea'],place_specific:['#영주부석사무량수전고려목조','#배흘림기둥파르테논동일원리','#기둥사이소백산전경','#은행나무황금빛단풍']}
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
