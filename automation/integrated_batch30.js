const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const now = new Date().toISOString().slice(0,19);

const newExps = [
  {experience_id:'EX-GW-NAT-052',name:'강화 석모도 보문사+민머루',category_main:'문화/체험',category_sub:'역사 체험',region_main:'GW',region_sub:'인천광역시 강화군',address:'인천광역시 강화군 삼산면 석모도',lat:37.5683,lng:126.3957,price:'보문사 성인 2,000원',duration:'3~4시간',reservation_required:false,target_user:['커플','개인','가족'],nearby_places:[],related_heritage_ids:[],short_description:'석모도 보문사 마애석불과 민머루 서해 낙조를 하루에 즐기는 강화도 최고 코스다. 돌계단 400개를 올라가면 절벽 마애석불과 황해 전경이 펼쳐지고 민머루 갯벌에서 서해 일몰을 감상한다.',source_urls:['https://www.ganghwa.go.kr/'],data_confidence:'high',tags:['보문사','민머루','석모도','강화','인천','마애석불','서해낙조'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중',phone:'032-932-5464'},
  {experience_id:'EX-JN-NAT-058',name:'고창 선운사 동백꽃+꽃무릇 코스',category_main:'문화/체험',category_sub:'자연체험',region_main:'JN',region_sub:'전라북도 고창군',address:'전라북도 고창군 아산면 선운사로 250',lat:35.5028,lng:126.5936,price:'성인 3,000원',duration:'2~3시간',reservation_required:false,target_user:['커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'선운사에서 봄 동백꽃(3~4월)과 가을 꽃무릇(9월) 두 시즌 모두 아름다운 꽃 탐방 코스다. 봄에는 절벽 군락 동백꽃이, 가을에는 빨간 꽃무릇이 사찰을 물드는 전북 최고의 계절 꽃 명소다.',source_urls:['https://www.gochang.go.kr/'],data_confidence:'high',tags:['선운사동백꽃무릇','선운사','고창','전북','동백꽃','꽃무릇','계절꽃'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'봄 3~4월 동백 / 가을 9월 꽃무릇',phone:'063-561-1422'},
  {experience_id:'EX-GN-NAT-058',name:'경주 황리단길 야간 투어',category_main:'문화/체험',category_sub:'야경/야간투어',region_main:'GB',region_sub:'경상북도 경주시',address:'경상북도 경주시 황남동 황리단길',lat:35.8347,lng:129.2194,price:'무료',duration:'1~2시간',reservation_required:false,target_user:['커플','청년','개인'],nearby_places:[],related_heritage_ids:[],short_description:'경주 황남동 황리단길을 야간에 탐방하는 체험이다. 한옥·근대 건물 사이에 카페·식당·공방이 어우러진 경주 최고 트렌디 거리로 밤에는 조명과 함께 독특한 분위기를 연출한다.',source_urls:['https://www.gyeongju.go.kr/'],data_confidence:'high',tags:['황리단길야간','경주','경북','야경','카페','한옥','트렌디거리'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (야경: 17:00~23:00)',phone:'054-779-6100'},
  {experience_id:'EX-GW-NAT-053',name:'가평 남이섬+청평호 당일 코스',category_main:'문화/체험',category_sub:'자연체험',region_main:'GG',region_sub:'경기도 가평군',address:'경기도 가평군 가평읍 가평로 150',lat:37.8350,lng:127.5106,price:'남이섬 16,000원~',duration:'5~7시간',reservation_required:false,target_user:['커플','가족','개인'],nearby_places:[],related_heritage_ids:[],short_description:'남이섬·자라섬·청평호를 하루에 즐기는 가평 완벽 당일 코스다. 서울에서 1시간 30분 거리 가평에서 메타세쿼이아·자전거·보트·카누를 차례로 즐기는 수도권 최고 당일치기 코스다.',source_urls:['https://www.gapyeong.go.kr/'],data_confidence:'high',tags:['남이섬청평호','가평','경기','당일코스','메타세쿼이아','자전거','보트'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중',phone:'031-580-2726'},
  {experience_id:'EX-JN-NAT-059',name:'진도 소포만 일몰+갯벌',category_main:'문화/체험',category_sub:'자연체험',region_main:'JN',region_sub:'전라남도 진도군',address:'전라남도 진도군 임회면 소포리 소포만',lat:34.4000,lng:126.3000,price:'무료',duration:'1~2시간',reservation_required:false,target_user:['커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'진도 소포만에서 서해 일몰과 갯벌을 함께 즐기는 체험이다. 진도 신비의 바닷길과 함께 방문하면 완벽한 진도 하루 코스가 되며 특히 붉게 물드는 소포만 일몰이 진도 최고 낙조 명소다.',source_urls:['https://www.jindo.go.kr/'],data_confidence:'high',tags:['소포만일몰','진도','전남','서해일몰','갯벌','신비의바닷길','낙조'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (무료)',phone:'061-540-6431'},
  {experience_id:'EX-GN-NAT-059',name:'창녕 우포늪 철새 트레킹',category_main:'문화/체험',category_sub:'자연체험',region_main:'GN',region_sub:'경상남도 창녕군',address:'경상남도 창녕군 유어면 우포길 220',lat:35.5556,lng:128.4258,price:'무료',duration:'2~3시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'우포늪 둘레 8km를 걸으며 습지 생태계와 철새를 관찰하는 트레킹 체험이다. 겨울 철새 시즌이 아닌 봄·여름에도 수달·가창오리·백로가 서식하는 국내 최대 자연 내륙 습지를 탐방한다.',source_urls:['https://www.upo.or.kr/'],data_confidence:'high',tags:['우포늪트레킹','창녕','경남','습지트레킹','수달','철새','8km'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (무료)',phone:'055-532-1403'},
  {experience_id:'EX-GW-NAT-054',name:'속초 외옹치 언덕+속초 영랑호',category_main:'문화/체험',category_sub:'자연체험',region_main:'GW',region_sub:'강원특별자치도 속초시',address:'강원특별자치도 속초시 영랑호변로 일원',lat:38.2167,lng:128.5850,price:'무료',duration:'2~3시간',reservation_required:false,target_user:['커플','개인','가족'],nearby_places:[],related_heritage_ids:[],short_description:'속초 영랑호 둘레길 5km를 걸으며 설악산 반영을 감상하는 체험이다. 봄 벚꽃·여름 수련·가을 갈대·겨울 설경이 사계절 아름다운 속초 시내 호수 산책 코스로 맑은 날 설악산이 호수에 완벽히 반영된다.',source_urls:['https://www.sokcho.go.kr/'],data_confidence:'high',tags:['영랑호','속초','강원','설악산반영','호수산책','사계절','수련'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (무료)',phone:'033-639-2690'},
  {experience_id:'EX-JN-NAT-060',name:'장흥 토요시장+탁리 음식',category_main:'문화/체험',category_sub:'전통시장',region_main:'JN',region_sub:'전라남도 장흥군',address:'전라남도 장흥군 장흥읍 토요시장',lat:34.6817,lng:126.9072,price:'무료 입장',duration:'1~2시간',reservation_required:false,target_user:['가족','개인'],nearby_places:[],related_heritage_ids:[],short_description:'장흥 토요시장에서 장흥 특산 한우·표고버섯·유자·키조개를 맛보는 먹거리 체험이다. 매주 토요일 열리는 장흥 오일장은 지역민들이 직접 재배한 농산물을 파는 진짜 오일장 문화를 체험할 수 있다.',source_urls:['https://www.jangheung.go.kr/'],data_confidence:'high',tags:['장흥토요시장','장흥','전남','장흥한우','표고버섯','키조개','오일장'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'매주 토요일 08:00~18:00',phone:'061-860-0614'},
  {experience_id:'EX-GG-NAT-057',name:'양주 천보산 산행+보물 찾기',category_main:'문화/체험',category_sub:'자연체험',region_main:'GG',region_sub:'경기도 양주시',address:'경기도 양주시 백석읍 기산로 305',lat:37.8367,lng:127.0619,price:'무료',duration:'3~4시간',reservation_required:false,target_user:['가족','어린이','개인'],nearby_places:[],related_heritage_ids:[],short_description:'경기도 양주 천보산 등산과 보물 찾기 형식의 어린이 자연 탐방 프로그램이다. 국립회암사지박물관과 연계하면 역사+자연 양주 완벽 코스가 된다.',source_urls:['https://www.yangju.go.kr/'],data_confidence:'high',tags:['천보산','양주','경기','산행','어린이자연탐방','회암사지','가족'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (무료)',phone:'031-8082-4245'},
  {experience_id:'EX-GN-NAT-060',name:'남해 화방사+창선교 야경',category_main:'문화/체험',category_sub:'야경/야간투어',region_main:'GN',region_sub:'경상남도 남해군',address:'경상남도 남해군 창선면 창선대교',lat:34.9306,lng:128.0181,price:'무료',duration:'1~2시간',reservation_required:false,target_user:['커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'남해 창선교 야경을 드라이브하며 감상하는 체험이다. 섬과 섬을 이어주는 창선교 5개 연속 교량에 야간 조명이 켜지면 다도해 위 불빛이 아름답고 화방사 가을 단풍과 세트 코스로 즐기기 좋다.',source_urls:['https://www.namhae.go.kr/'],data_confidence:'high',tags:['창선교야경','남해','경남','야경드라이브','다도해','교량','불빛'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (무료)',phone:'055-860-3671'},
  {experience_id:'EX-GW-NAT-055',name:'철원 한탄강 지질 트레일',category_main:'문화/체험',category_sub:'자연체험',region_main:'GW',region_sub:'강원특별자치도 철원군',address:'강원특별자치도 철원군 갈말읍 한탄강 일원',lat:38.1614,lng:127.2989,price:'무료',duration:'2~3시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'유네스코 세계지질공원 한탄강 트레일을 탐방하는 체험이다. 50만 년 전 화산 현무암 협곡을 따라 걷는 코스로 주상절리·현무암 절벽·재인폭포를 연계한 지질 교육 체험 코스다.',source_urls:['https://www.cwg.go.kr/'],data_confidence:'high',tags:['한탄강지질트레일','철원','강원','유네스코','화산현무암','주상절리','지질공원'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (무료)',phone:'033-450-5558'},
  {experience_id:'EX-JN-NAT-061',name:'고창 갯벌+고인돌 세계유산 코스',category_main:'문화/체험',category_sub:'역사 체험',region_main:'JN',region_sub:'전라북도 고창군',address:'전라북도 고창군 심원면 람사르고창갯벌',lat:35.4394,lng:126.6358,price:'고인돌 성인 3,000원',duration:'3~5시간',reservation_required:false,target_user:['가족','개인'],nearby_places:[],related_heritage_ids:[],short_description:'유네스코 람사르 습지 고창 갯벌과 유네스코 세계문화유산 고인돌을 하루에 방문하는 이중 유산 코스다. 한 지역에 두 개 유네스코 유산이 있는 드문 코스로 역사+자연 교육 체험이다.',source_urls:['https://www.gochang.go.kr/'],data_confidence:'high',tags:['고창갯벌고인돌','고창','전북','유네스코이중유산','람사르갯벌','세계문화유산','이중유산'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중',phone:'063-560-2979'}
];

const newShorts = [
  {
    experience_id:'EX-GG-FUD-003', experience_name:'이천 도자기 축제 + 쌀밥 투어', category_sub:'지역 먹거리', region:'경기도',
    script_30s:'오늘은 이천 도자기 마을에서 쌀밥 정식을 먹었어요. 임금님표 쌀의 고장이에요. 근데 아무도 안 알려주는 게 있어요 — 이천 쌀이 특별한 이유가 토양이에요. 이천 땅에 미네랄이 많아요. 그 미네랄이 쌀 맛을 만들어요. 너무 땅이 맛을 만든다는 게 좋았습니다.',
    script_60s:'오늘은 경기도 이천 도예마을과 쌀밥 정식을 즐겼어요. 이천은 조선 왕실 도자기 산지이자 임금님표 쌀의 고장이에요. 50여 개 도예 공방이 모여있고 이천 쌀밥 정식 식당들도 인접해요. 근데 아무도 안 알려주는 꿀팁 하나 — 이천 쌀이 다른 쌀과 다른 이유가 있어요. 이천 지역 토양에 게르마늄·셀레늄 등 미네랄 성분이 풍부해요. 이 미네랄을 흡수하면서 자란 쌀이 특유의 달고 찰진 맛을 가지게 돼요. 그래서 이천 쌀밥은 단순히 잘 지은 밥이 아니라 땅 자체의 맛이에요. 이 사실을 알고 이천 쌀밥을 먹으면 완전히 다른 감동이 와요. 도예 공방에서 물레 체험 후 쌀밥 정식으로 마무리하는 이천 완벽 코스예요. 너무 땅이 맛을 만든다는 게 좋았습니다.',
    secret_tip:'이천 쌀 맛의 비밀 = 게르마늄·셀레늄 미네랄 풍부 토양 — 땅 자체의 맛. 도예 공방 물레 체험+쌀밥 정식 이천 완벽 코스. 쌀밥 정식 고봉밥 리필 무제한 식당 선택',
    filming_guide:'이천 쌀밥 하얀 고봉밥 클로즈업. 도예 공방 물레 체험 연계. 이천 도자기 마을 전경.',
    broll_ideas:['이천 쌀밥 고봉밥 클로즈업','도예 공방 물레 체험','이천 도자기 마을 전경','쌀밥 정식 상차림','이천 논밭 미네랄 설명'],
    hooks:['이천 쌀이 특별한 이유 알아요?','게르마늄 미네랄 풍부 토양이에요','땅 자체의 맛이 이천 쌀밥이에요','도예+쌀밥 이천 완벽 코스','이천 쌀밥 꿀팁'],
    thumbnails:['이천 쌀밥 고봉밥','물레 체험 연계','도자기 마을 전경','쌀밥 정식 상차림','논밭 미네랄 설명'],
    captions:{youtube:'이천 도자기+쌀밥 코스 — 땅이 맛을 만들어요 🍚\n\n게르마늄·셀레늄 미네랄 풍부 토양!\n도예 공방 물레+이천 쌀밥 완벽 코스\n\n📍 경기도 이천시 도예마을\n🍚 쌀밥 정식 고봉밥 리필 무제한 식당\n\n#이천쌀밥 #이천도자기 #이천 #경기여행 #임금님표쌀',instagram:'이천 쌀밥 땅이 맛을 만들어요 🍚\n\n게르마늄 미네랄 풍부 토양 달고 찰진 맛 ✨\n도예+쌀밥 이천 완벽 코스\n\n📍 경기 이천 도예마을\n\n#이천쌀밥 #이천도자기 #이천여행 #경기 #GemKorea',tiktok:'이천 쌀밥 꿀팁 🍚 이천 쌀이 특별한 이유가 게르마늄 미네랄 풍부한 토양이에요! 땅 자체의 맛 // 도예 물레 체험+쌀밥 정식 이천 완벽 코스 #이천쌀밥 #이천도자기 #경기여행'},
    hashtags:{korean:['#한국여행','#경기여행','#이천여행','#쌀밥','#GemKorea'],place_specific:['#이천쌀밥','#게르마늄미네랄토양','#임금님표쌀','#이천도자기+쌀밥']}
  },
  {
    experience_id:'EX-GN-NAT-001', experience_name:'창녕 우포늪 생태 탐방', category_sub:'자연체험', region:'경상남도',
    script_30s:'오늘은 창녕 우포늪에 왔어요. 1억 4천만 년 전부터 있는 습지예요. 근데 아무도 안 알려주는 게 있어요 — 우포늪 물이 갈색이에요. 탁해서 오염된 게 아니에요. 늪 특성상 부식질이 많아서예요. 그게 건강한 습지의 증거예요. 너무 갈색이 건강이라는 역설이 좋았습니다.',
    script_60s:'오늘은 경남 창녕 우포늪에 왔어요. 공룡 시대부터 존재했다는 1억 4천만 년 역사의 우리나라 최대 자연 내륙 습지예요. 람사르 협약 보호 습지예요. 근데 아무도 안 알려주는 꿀팁 하나 — 우포늪 물이 갈색이에요. 처음 보면 오염됐나 싶지만 아니에요. 늪 특성상 바닥에 부식질 유기물이 쌓이면서 자연스럽게 갈색 빛이 나는 거예요. 이 부식질이 오히려 수달·황새·가창오리 등 생물들의 먹이 사슬 기반이에요. 갈색 물이 건강한 생태계의 증거예요. 그리고 갈색 탁한 물 속에 물고기가 엄청 많아요. 낚시꾼들이 이 사실을 알고 있어요. 너무 갈색이 건강이라는 역설이 좋았습니다.',
    secret_tip:'우포늪 갈색 물 = 부식질 유기물 건강한 증거 — 오염 아님. 갈색 물이 황새·수달 먹이 사슬 기반. 갈색 물 속에 물고기 엄청 많음. 낙안읍성 세트 코스',
    filming_guide:'우포늪 갈색 물 클로즈업. 황새·백로 날아가는 장면. 수변 갈대와 습지 전경.',
    broll_ideas:['우포늪 갈색 물 클로즈업','황새 백로 날아가는 장면','수변 갈대와 습지 전경','탐방로 걷는 사람들','창녕 우포늪 드론뷰'],
    hooks:['우포늪 물이 갈색인 이유 알아요?','오염이 아니라 건강한 습지예요','부식질이 생태계 기반이에요','갈색이 건강의 증거예요','창녕 우포늪 꿀팁'],
    thumbnails:['갈색 물 클로즈업','황새 백로 날기','갈대 습지 전경','탐방로 산책','우포늪 드론뷰'],
    captions:{youtube:'창녕 우포늪 — 물이 갈색인 이유 알아요? 🌿\n\n오염이 아니라 건강한 습지의 증거!\n부식질이 생태계 기반\n\n📍 경남 창녕군 우포늪\n🌿 람사르 보호 습지 / 1억 4천만 년 역사\n\n#우포늪 #창녕 #경남여행 #갈색물비밀 #람사르습지',instagram:'창녕 우포늪 갈색 물이 건강한 증거예요 🌿\n\n오염 아닌 부식질 유기물 ✨\n황새 수달 먹이 사슬 기반\n\n📍 경남 창녕 우포늪\n\n#우포늪 #창녕여행 #경남 #람사르습지 #GemKorea',tiktok:'창녕 우포늪 꿀팁 🌿 물이 갈색인데 오염이 아니에요! 부식질 유기물이 건강한 습지의 증거 // 황새 수달 먹이 사슬 기반이에요 갈색=건강 역설 #우포늪 #창녕여행 #경남'},
    hashtags:{korean:['#한국여행','#경남여행','#창녕여행','#우포늪','#GemKorea'],place_specific:['#우포늪','#갈색물건강증거','#부식질유기물','#람사르습지']}
  },
  {
    experience_id:'EX-GG-NAT-002', experience_name:'포천 허브아일랜드 야경', category_sub:'야경/야간투어', region:'경기도',
    script_30s:'오늘은 포천 허브아일랜드 야경에 왔어요. 수십만 개 조명이에요. 근데 아무도 안 알려주는 게 있어요 — 크리스마스 시즌 야경이 달라요. 11월부터 조명 수가 두 배로 늘어요. 그 기간이 연중 최고예요. 너무 크리스마스가 야경을 두 배로 만든다는 게 좋았습니다.',
    script_60s:'오늘은 경기도 포천 허브아일랜드 야간 조명 축제에 왔어요. 허브 정원 전체를 수십만 개의 조명으로 가득 채운 야간 테마파크예요. 서울에서 1시간 거리예요. 근데 아무도 안 알려주는 꿀팁 하나 — 허브아일랜드 야경의 최고 시즌이 11월~1월이에요. 이 시기에 크리스마스·연말 테마 조명이 추가되면서 평소보다 훨씬 많은 조명이 설치돼요. 그리고 이 시기에 허브아일랜드 온실 안은 따뜻한데 밖은 추워요. 그 온도 대비가 더 아늑하고 특별한 분위기를 만들어요. 커플들이 크리스마스 시즌에 특히 많이 찾는 이유예요. 평소 낮 시간에는 허브 향기와 체험, 야간에는 조명으로 완전히 다른 두 가지 체험이 가능해요. 너무 크리스마스 시즌 야경이 두 배 예쁘다는 게 좋았습니다.',
    secret_tip:'11월~1월 크리스마스 시즌 = 평소보다 2배 조명 추가 — 연중 최고 야경 시즌. 온실 따뜻함 vs 야외 추위 온도 대비 아늑함. 허브 체험+야경 낮+밤 이중 체험',
    filming_guide:'크리스마스 시즌 2배 조명 야경 광각. 온실 따뜻한 분위기와 야외 추운 대비. 허브 향기 식물원 낮 전경.',
    broll_ideas:['크리스마스 2배 조명 야경 광각','온실 따뜻한 분위기','야외 추위 대비 장면','허브 향기 낮 전경','커플 야경 감상'],
    hooks:['크리스마스 시즌 조명이 두 배예요','11~1월이 연중 최고 야경 시즌','온실 따뜻함이 더 아늑해요','낮 허브 체험+밤 야경 이중 체험','포천 허브아일랜드 꿀팁'],
    thumbnails:['크리스마스 2배 조명 광각','온실 따뜻한 분위기','야외 추위 대비','낮 허브 전경','커플 야경 감상'],
    captions:{youtube:'포천 허브아일랜드 야경 — 크리스마스 시즌이 두 배예요 🎄\n\n11~1월 조명이 평소 2배 추가!\n연중 최고 야경 시즌\n\n📍 경기도 포천시 허브아일랜드\n🎄 11~1월 크리스마스 테마 시즌 추천\n\n#포천허브아일랜드 #포천 #경기여행 #야경 #크리스마스야경',instagram:'포천 허브아일랜드 크리스마스 시즌 조명 두 배예요 🎄\n\n11~1월 연중 최고 야경 ✨\n온실 따뜻함+야외 추위 아늑한 대비\n\n📍 경기 포천 허브아일랜드\n\n#포천허브아일랜드 #포천여행 #경기 #야경 #GemKorea',tiktok:'포천 허브아일랜드 야경 꿀팁 🎄 크리스마스 시즌 11~1월에 조명이 두 배로 늘어요! 연중 최고 야경 시즌 // 온실 따뜻함+야외 추위 대비가 아늑해요 #포천허브아일랜드 #포천여행 #야경'},
    hashtags:{korean:['#한국여행','#경기여행','#포천여행','#야경','#GemKorea'],place_specific:['#포천허브아일랜드','#크리스마스조명두배','#11~1월최고야경','#허브야경']}
  },
  {
    experience_id:'EX-GG-MUS-005', experience_name:'수원 수원박물관 역사 체험', category_sub:'박물관', region:'경기도',
    script_30s:'오늘은 수원박물관에 왔어요. 정조대왕과 화성 역사예요. 근데 아무도 안 알려주는 게 있어요 — 수원박물관이 무료예요. 화성에서 가장 가까운 무료 박물관이에요. 그리고 어린이 체험관이 있어요. 너무 무료인데 이 퀄리티라서 좋았습니다.',
    script_60s:'오늘은 경기도 수원 수원박물관에 왔어요. 수원화성과 정조대왕의 역사를 이해하는 체험형 박물관이에요. 무료예요. 근데 아무도 안 알려주는 꿀팁 하나 — 수원박물관에 어린이 역사 체험관이 있어요. 어린이들이 직접 정조대왕 어가 행렬 의복을 입어보고 화성 건설 과정을 체험형 게임으로 이해하는 공간이에요. 어린이에게 역사를 재미있게 가르쳐주는 최고의 공간이에요. 어른들도 이 체험관을 즐길 수 있어요. 수원화성 탐방 전에 이 박물관에서 미리 역사를 이해하고 가면 화성이 완전히 달리 보여요. 화성에서 바로 도보 15분 거리이기도 해요. 너무 무료인데 이 퀄리티가 가성비 최고라서 좋았습니다.',
    secret_tip:'수원박물관 어린이 역사 체험관 = 정조 어가 의복 착용+화성 건설 게임 체험 — 무료. 화성 탐방 전 방문하면 달리 보임. 도보 15분 거리. 교육 가성비 최고',
    filming_guide:'어린이 정조 의복 착용 체험 장면. 화성 건설 과정 전시 클로즈업. 수원박물관 외경.',
    broll_ideas:['어린이 정조 의복 착용 체험','화성 건설 과정 전시','수원박물관 외경','어린이 체험관 내부','수원화성 모형 전시'],
    hooks:['수원박물관이 무료예요','어린이 역사 체험관이 있어요','화성 탐방 전에 여기 먼저 들러요','정조 의복 입어볼 수 있어요','수원박물관 꿀팁'],
    thumbnails:['어린이 의복 착용 체험','화성 건설 전시','박물관 외경','어린이 체험관','화성 모형'],
    captions:{youtube:'수원박물관 — 무료인데 어린이 역사 체험관 있어요 🏛️\n\n정조 의복 입기+화성 건설 게임!\n화성 탐방 전 방문하면 달리 보여요\n\n📍 경기도 수원시 수원박물관\n🏛️ 무료 / 화성에서 도보 15분\n\n#수원박물관 #수원 #경기여행 #무료박물관 #정조역사',instagram:'수원박물관 무료인데 어린이 체험관 있어요 🏛️\n\n정조 의복 착용+화성 건설 게임 ✨\n화성 탐방 전 방문하면 달리 보여요\n\n📍 경기 수원 수원박물관\n\n#수원박물관 #수원여행 #경기 #무료 #GemKorea',tiktok:'수원박물관 꿀팁 🏛️ 무료인데 어린이 역사 체험관 있어요! 정조 의복 입고 화성 건설 게임 // 화성 탐방 전에 여기 먼저 들르면 달리 보여요 #수원박물관 #수원여행 #경기'},
    hashtags:{korean:['#한국여행','#경기여행','#수원여행','#박물관','#GemKorea'],place_specific:['#수원박물관','#어린이정조체험','#무료역사박물관','#화성탐방전방문']}
  },
  {
    experience_id:'EX-GW-MUS-001', experience_name:'강릉 오죽헌·시립박물관', category_sub:'박물관', region:'강원도',
    script_30s:'오늘은 강릉 오죽헌에 왔어요. 5000원권 지폐 인물들이 태어난 곳이에요. 근데 아무도 안 알려주는 게 있어요 — 오죽이 검은 대나무예요. 그 검은색이 오죽의 이름이에요. 검은 대나무 숲이 뒷마당에 있어요. 너무 검은 대나무가 실제 있다는 게 좋았습니다.',
    script_60s:'오늘은 강원도 강릉 오죽헌에 왔어요. 5000원권 신사임당과 율곡 이이가 태어난 고택이에요. 국내에서 가장 오래된 주거 건물 중 하나예요. 근데 아무도 안 알려주는 꿀팁 하나 — 오죽헌이라는 이름이 특별한 이유가 있어요. 오죽(烏竹)은 검은 대나무를 뜻해요. 이 집 뒷마당에 검은 대나무 숲이 실제로 있어요. 일반 대나무는 초록인데 오죽은 자라면서 검게 변해요. 그 검은 대나무 숲이 이 집의 특징이어서 오죽헌이라는 이름이 붙었어요. 검은 대나무 자체가 희귀한 식물이에요. 경내 산책할 때 오죽 대나무 숲을 놓치는 사람이 많아요. 너무 검은 대나무 실제로 있다는 게 좋았습니다.',
    secret_tip:'오죽 = 검은 대나무 — 뒷마당 검은 대나무 숲 실제 존재. 일반 대나무 초록, 오죽은 자라면서 검어짐. 희귀 식물. 경내 산책 시 오죽 숲 꼭 확인. 경포해변 세트 코스',
    filming_guide:'오죽 검은 대나무 숲 클로즈업. 초록 대나무와 검은 오죽 비교. 오죽헌 고택 외경.',
    broll_ideas:['오죽 검은 대나무 숲 클로즈업','초록 대나무와 검은 오죽 비교','오죽헌 고택 외경','신사임당 율곡이이 전시','오죽헌 앞마당'],
    hooks:['오죽헌 이름이 검은 대나무에서 왔어요','뒷마당에 진짜 검은 대나무 있어요','일반 대나무랑 색이 달라요','희귀 식물인 검은 대나무예요','강릉 오죽헌 꿀팁'],
    thumbnails:['오죽 검은 대나무 숲','초록 오죽 비교','오죽헌 고택','신사임당 전시','앞마당'],
    captions:{youtube:'강릉 오죽헌 — 검은 대나무가 진짜 있어요 🎋\n\n오죽 = 검은 대나무!\n뒷마당 희귀 검은 대나무 숲\n\n📍 강원도 강릉시 오죽헌\n🎋 경내 오죽 대나무 숲 꼭 확인\n\n#강릉오죽헌 #강릉 #강원도여행 #검은대나무 #신사임당',instagram:'강릉 오죽헌 검은 대나무가 진짜 있어요 🎋\n\n오죽 = 검은 대나무 희귀 식물 ✨\n경내 뒷마당 꼭 확인하세요\n\n📍 강원 강릉 오죽헌\n\n#강릉오죽헌 #강릉여행 #강원도 #검은대나무 #GemKorea',tiktok:'강릉 오죽헌 꿀팁 🎋 오죽이 검은 대나무예요! 뒷마당에 진짜 검은 대나무 숲이 있어요 // 일반 대나무랑 색이 달라요 희귀 식물 #강릉오죽헌 #강릉여행 #강원도'},
    hashtags:{korean:['#한국여행','#강원도여행','#강릉여행','#오죽헌','#GemKorea'],place_specific:['#강릉오죽헌','#검은대나무오죽','#희귀식물오죽','#신사임당율곡이이']}
  },
  {
    experience_id:'EX-GG-NIG-002', experience_name:'수원 화성 미디어 파사드 야경', category_sub:'야경/야간투어', region:'경기도',
    script_30s:'오늘은 수원화성 미디어 파사드를 봤어요. 유네스코 성벽에 영상을 투영해요. 근데 아무도 안 알려주는 게 있어요 — 공연이 성벽 돌 사이 틈까지 정확하게 맞춰 투영돼요. 돌 질감을 살려 영상을 만들었어요. 너무 기술이 역사를 살린다는 게 좋았습니다.',
    script_60s:'오늘은 경기도 수원화성 야간 미디어 파사드 공연을 봤어요. 유네스코 세계유산 수원화성 성벽에 정조대왕 역사를 미디어아트로 투영하는 야간 공연이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 이 미디어 파사드의 특별한 점이 있어요. 투영 영상이 단순히 성벽에 쏘는 게 아니라 성벽의 돌 질감·틈새·곡선에 맞춰 정밀하게 맵핑되어 있어요. 그래서 영상 속 물이 돌 사이 틈으로 흐르고, 불꽃이 성벽 굴곡을 따라 번져요. 이걸 3D 매핑이라고 해요. 돌 질감을 살린 영상이 마치 성벽 자체가 살아나는 것 같아요. 이 기술적 정밀함을 알고 보면 미디어 파사드가 단순한 야경이 아니라 역사와 기술의 융합이라는 게 느껴져요. 너무 기술이 역사를 살려내는 순간이라서 좋았습니다.',
    secret_tip:'3D 매핑 기술 = 성벽 돌 틈·곡선에 정밀 맵핑 — 물이 틈으로 흐르고 불꽃이 성벽 굴곡 따라 번짐. 기술이 역사를 살려내는 융합. 공연 날짜 수원문화재단 홈페이지 확인',
    filming_guide:'성벽 돌 틈 따라 흐르는 영상 클로즈업. 3D 매핑 기술 성벽 굴곡 따라 영상. 수원화성 전체 미디어아트 광각.',
    broll_ideas:['성벽 돌 틈 따라 흐르는 영상','3D 매핑 굴곡 따라 영상','전체 미디어아트 광각','수원화성 야간 성벽','관중들의 탄성 반응'],
    hooks:['성벽 돌 틈에 맞춰 영상이 흘러요','3D 매핑 기술이 있어요','물이 돌 사이로 흘러가요','기술이 역사를 살려내요','수원화성 미디어 파사드 꿀팁'],
    thumbnails:['돌 틈 따라 흐르는 영상','3D 매핑 굴곡 영상','전체 미디어아트 광각','수원화성 야간','관중 탄성 반응'],
    captions:{youtube:'수원화성 미디어 파사드 — 성벽 돌 틈에 맞춰 영상이 흘러요 🏯\n\n3D 매핑 기술로 돌 질감 살린 영상!\n기술이 역사를 살려내는 융합\n\n📍 경기도 수원 수원화성 야간 공연\n🏯 공연 날짜 수원문화재단 홈페이지 확인\n\n#수원화성미디어파사드 #수원화성 #수원 #경기여행 #3D매핑',instagram:'수원화성 미디어 파사드 돌 틈에 맞춰 영상이 흘러요 🏯\n\n3D 매핑 기술 돌 질감 살린 정밀함 ✨\n기술이 역사를 살려내는 순간\n\n📍 경기 수원 수원화성\n\n#수원화성미디어파사드 #수원여행 #경기 #3D매핑 #GemKorea',tiktok:'수원화성 미디어 파사드 꿀팁 🏯 성벽 돌 틈에 맞춰 영상이 흘러요! 3D 매핑으로 돌 질감 살린 정밀함 // 물이 돌 사이로 흐르고 불꽃이 굴곡 따라 번져요 #수원화성미디어파사드 #수원여행'},
    hashtags:{korean:['#한국여행','#경기여행','#수원여행','#수원화성','#GemKorea'],place_specific:['#수원화성미디어파사드','#3D매핑기술','#성벽돌틈영상','#유네스코미디어아트']}
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
