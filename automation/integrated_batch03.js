const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const now = new Date().toISOString().slice(0,19);

const newExps = [
  {experience_id:'EX-GW-CUL-003',name:'춘천 김유정 문학촌 체험',category_main:'문화/체험',category_sub:'역사 체험',region_main:'GW',region_sub:'강원특별자치도 춘천시',address:'강원특별자치도 춘천시 신동면 김유정로 1430-14',lat:37.7603,lng:127.6442,price:'성인 2,000원',duration:'1~2시간',reservation_required:false,target_user:['개인','가족','외국인'],nearby_places:[],related_heritage_ids:[],short_description:'봄봄·동백꽃 등 한국 단편 소설의 거장 김유정의 생가와 문학관을 탐방하는 체험이다. 춘천 금병산 자락에 복원된 1930년대 실레 마을에서 김유정 소설 속 배경을 직접 걸어볼 수 있다.',source_urls:['https://www.kimyujeong.org/'],data_confidence:'high',tags:['김유정문학촌','춘천','강원','봄봄','동백꽃','문학체험','실레마을'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00 (월요일 휴관)',phone:'033-261-4650'},
  {experience_id:'EX-GB-CUL-002',name:'안동 독립운동 기념관 체험',category_main:'문화/체험',category_sub:'역사 체험',region_main:'GB',region_sub:'경상북도 안동시',address:'경상북도 안동시 경동로 695',lat:36.5730,lng:128.7294,price:'무료',duration:'1~2시간',reservation_required:false,target_user:['가족','개인'],nearby_places:[],related_heritage_ids:[],short_description:'독립운동의 성지 안동에서 이육사·류인식·김동삼 등 안동 출신 독립운동가들의 항일 투쟁 역사를 체험형 전시로 이해하는 기념관이다. 안동이 왜 독립운동가를 가장 많이 배출한 고장인지 알게 된다.',source_urls:['https://www.andong.go.kr/'],data_confidence:'high',tags:['안동독립운동','안동','경북','이육사','항일','무료','독립운동가'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00 (월요일 휴관)',phone:'054-821-0649'},
  {experience_id:'EX-JN-CUL-002',name:'목포 근대 역사 문화 거리 투어',category_main:'문화/체험',category_sub:'역사 체험',region_main:'JN',region_sub:'전라남도 목포시',address:'전라남도 목포시 영산로29번길 6',lat:34.7942,lng:126.3872,price:'무료 (해설 5,000원)',duration:'2~3시간',reservation_required:false,target_user:['커플','개인','외국인'],nearby_places:[],related_heritage_ids:[],short_description:'1897년 개항 이후 일제강점기 목포의 근대 건축물이 밀집한 역사 문화 거리를 탐방한다. 구 일본 영사관·동양척식주식회사·적산가옥 등 80여 개 근대 건축물이 보존된 목포 근대 거리에서 역사를 걷는다.',source_urls:['https://www.mokpo.go.kr/'],data_confidence:'high',tags:['목포근대거리','목포','전남','개항역사','일제강점기','근대건축','적산가옥'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (해설 투어: 화~일)',phone:'061-270-8432'},
  {experience_id:'EX-IC-CUL-002',name:'인천 개항장 문화 지구 투어',category_main:'문화/체험',category_sub:'역사 체험',region_main:'IC',region_sub:'인천광역시 중구',address:'인천광역시 중구 신포로23번길 일원',lat:37.4752,lng:126.6167,price:'무료',duration:'2~3시간',reservation_required:false,target_user:['커플','개인','외국인'],nearby_places:[],related_heritage_ids:[],short_description:'1883년 개항한 인천 중구 개항장 일대를 걷는 역사 투어다. 구 일본 제1은행·인천부청·대불호텔 터·자유공원까지 한국 근대 개항 역사를 그대로 간직한 건물들이 밀집한 거리를 탐방한다.',source_urls:['https://www.icjgss.or.kr/'],data_confidence:'high',tags:['인천개항장','인천','중구','개항역사','근대건축','1883년','자유공원'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중',phone:'032-760-6470'},
  {experience_id:'EX-DJ-CUL-001',name:'대전 성심당 빵 투어',category_main:'문화/체험',category_sub:'지역 먹거리',region_main:'DJ',region_sub:'대전광역시 중구',address:'대전광역시 중구 대종로480번길 15',lat:36.3278,lng:127.4264,price:'빵 가격 별도',duration:'1~2시간',reservation_required:false,target_user:['개인','가족','커플'],nearby_places:[],related_heritage_ids:[],short_description:'1956년 창업해 70년 역사를 가진 대전 대표 빵집 성심당 본점 방문 체험이다. 튀김소보로·판타롱부추빵·망고시루 등 성심당만의 인기 메뉴를 맛보고 대전 빵 문화의 상징을 직접 경험한다.',source_urls:['https://www.sungsimdang.co.kr/'],data_confidence:'high',tags:['성심당','대전','빵','튀김소보로','70년역사','대전빵','부추빵'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'08:00~23:00 (연중)',phone:'042-253-9811'},
  {experience_id:'EX-US-CUL-001',name:'울산 고래 생태 체험관',category_main:'문화/체험',category_sub:'자연체험',region_main:'US',region_sub:'울산광역시 남구',address:'울산광역시 남구 장생포고래로 244',lat:35.4692,lng:129.3781,price:'성인 5,000원',duration:'1~2시간',reservation_required:false,target_user:['가족','어린이','개인'],nearby_places:[],related_heritage_ids:[],short_description:'과거 국내 최대 고래잡이 항구였던 장생포에서 고래 생태와 포경 역사를 이해하는 체험 박물관이다. 실제 고래 뼈대 전시·고래 관찰 유람선 탑승·고래 고기 시식 코스를 함께 즐길 수 있다.',source_urls:['https://www.whalecity.go.kr/'],data_confidence:'high',tags:['고래체험관','울산','장생포','고래','포경역사','가족체험','울주군'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00 (월요일 휴관)',phone:'052-226-0980'},
  {experience_id:'EX-GW-CUL-004',name:'원주 뮤지엄 산 건축 투어',category_main:'문화/체험',category_sub:'문화예술',region_main:'GW',region_sub:'강원특별자치도 원주시',address:'강원특별자치도 원주시 지정면 오크밸리2길 260',lat:37.4048,lng:128.0631,price:'성인 25,000원',duration:'3~4시간',reservation_required:false,target_user:['커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'세계적 건축가 안도 타다오가 설계한 뮤지엄 산을 탐방한다. 자연 속에 노출 콘크리트로 지어진 건물 자체가 예술이며 제임스 터렐의 빛 체험관과 야외 조각 공원이 어우러진다.',source_urls:['https://www.museumsan.org/'],data_confidence:'high',tags:['뮤지엄산','원주','안도타다오','건축','제임스터렐','강원','자연속미술관'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'10:00~18:00 (월요일 휴관)',phone:'033-730-9000'},
  {experience_id:'EX-GG-CUL-003',name:'광명 동굴 체험',category_main:'문화/체험',category_sub:'자연체험',region_main:'GG',region_sub:'경기도 광명시',address:'경기도 광명시 가학로85번길 142',lat:37.4362,lng:126.8697,price:'성인 8,000원',duration:'1~2시간',reservation_required:false,target_user:['가족','개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'일제강점기 금·은을 채굴하던 폐광이 문화 예술 공간으로 탈바꿈한 광명 동굴이다. 황금 폭포·와인 동굴·동굴 아쿠아리움·미디어아트 공간이 조성되어 있으며 연중 10~15도를 유지한다.',source_urls:['https://www.gm.go.kr/cave/'],data_confidence:'high',tags:['광명동굴','광명','경기','폐광','황금폭포','와인동굴','미디어아트'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00 (월요일 휴관)',phone:'02-2680-6448'},
  {experience_id:'EX-JB-CUL-004',name:'군산 근대 역사 벽화 투어',category_main:'문화/체험',category_sub:'역사 체험',region_main:'JB',region_sub:'전라북도 군산시',address:'전라북도 군산시 구영1길 일원',lat:35.9736,lng:126.7166,price:'무료',duration:'2~3시간',reservation_required:false,target_user:['커플','개인','외국인'],nearby_places:[],related_heritage_ids:[],short_description:'영화 8월의 크리스마스·건축학개론 촬영지 군산 구도심을 걷는 근대 역사 투어다. 일제강점기 쌀 수탈 현장인 군산 근대 건축물과 벽화 마을을 탐방하며 군산의 역사와 영화 속 장면들을 직접 만난다.',source_urls:['https://www.gunsan.go.kr/'],data_confidence:'high',tags:['군산근대역사','군산','전북','8월의크리스마스','건축학개론','일제강점기','벽화마을'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중',phone:'063-454-3304'},
  {experience_id:'EX-CN-CUL-002',name:'공주 황새 생태 탐방',category_main:'문화/체험',category_sub:'자연체험',region_main:'CN',region_sub:'충청남도 예산군',address:'충청남도 예산군 광시면 광시리 황새공원',lat:36.6572,lng:126.8011,price:'성인 3,000원',duration:'1~2시간',reservation_required:false,target_user:['가족','어린이','개인'],nearby_places:[],related_heritage_ids:[],short_description:'한국에서 멸종됐다가 복원된 천연기념물 황새를 가까이서 관찰하는 생태 탐방 체험이다. 예산 황새공원에서 황새 번식·먹이 주기 체험과 습지 생태 교육 프로그램을 운영한다.',source_urls:['https://www.yesan.go.kr/'],data_confidence:'high',tags:['황새공원','예산','충남','황새','천연기념물','생태체험','복원종'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00',phone:'041-339-8053'},
  {experience_id:'EX-GN-CUL-002',name:'합천 해인사 팔만대장경 탐방',category_main:'문화/체험',category_sub:'역사 체험',region_main:'GN',region_sub:'경상남도 합천군',address:'경상남도 합천군 가야면 해인사길 122',lat:35.7900,lng:128.0992,price:'성인 3,000원',duration:'2~3시간',reservation_required:false,target_user:['가족','개인','외국인'],nearby_places:[],related_heritage_ids:[],short_description:'유네스코 세계유산 팔만대장경이 봉안된 해인사를 탐방한다. 780년 동안 변형 없이 보존된 나무 경판 8만여 장의 비밀과 장경판전의 과학적 환기 시스템을 직접 보고 이해하는 역사 체험이다.',source_urls:['https://www.haeinsa.or.kr/'],data_confidence:'high',tags:['해인사','팔만대장경','합천','유네스코','경남','불교문화','장경판전'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'08:30~18:00',phone:'055-934-3000'},
  {experience_id:'EX-GW-CUL-005',name:'강원 삼척 해양 레일바이크',category_main:'문화/체험',category_sub:'어드벤처/레포츠',region_main:'GW',region_sub:'강원특별자치도 삼척시',address:'강원특별자치도 삼척시 근덕면 공양왕길 2',lat:37.3369,lng:129.2136,price:'2인 35,000원',duration:'1~2시간',reservation_required:true,target_user:['커플','가족','개인'],nearby_places:[],related_heritage_ids:[],short_description:'동해 해안선을 따라 달리는 삼척 해양 레일바이크다. 파란 동해 바다와 기암절벽을 옆에 두고 레일 위를 달리는 코스로 정선 레일바이크와 달리 바다 위를 달리는 느낌이 특별하다.',source_urls:['https://www.samcheok.go.kr/'],data_confidence:'high',tags:['해양레일바이크','삼척','강원','동해','해안선','레일바이크','기암절벽'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~17:00',phone:'033-576-0656'}
];

const newShorts = [
  {
    experience_id:'EX-GW-CUL-003', experience_name:'춘천 김유정 문학촌 체험', category_sub:'역사 체험', region:'강원도',
    script_30s:'오늘은 춘천 김유정 문학촌에 왔어요. 봄봄·동백꽃의 작가 생가예요. 근데 아무도 안 알려주는 게 있어요 — 실레 마을 전체가 소설 배경이에요. 마을을 걸으면 소설 속 인물들이 살던 공간이 나와요. 너무 소설이 걸어다니는 마을이라서 좋았습니다.',
    script_60s:'오늘은 강원도 춘천 김유정 문학촌에 왔어요. 봄봄·동백꽃·금 따는 콩밭 등 한국 단편 소설의 거장 김유정이 태어나고 자란 실레 마을이에요. 금병산 자락에 1930년대 모습 그대로 복원된 마을과 생가가 있어요. 근데 아무도 안 알려주는 꿀팁 하나 — 김유정 소설을 읽고 오면 마을이 완전히 달라 보여요. 봄봄의 봉필이네 집, 동백꽃의 점순이가 닭싸움하던 마당이 실제로 있거든요. 소설 속 배경과 현실이 겹쳐 보이는 경험이에요. 입장 전에 스마트폰으로 봄봄 줄거리만 읽고 오면 1시간짜리 문학 여행이 완전히 달라져요. 너무 소설 배경을 직접 걸어서 좋았습니다.',
    secret_tip:'방문 전 봄봄·동백꽃 줄거리만 읽고 오면 마을이 완전히 달라 보임 — 소설 속 공간과 현실이 겹치는 문학 여행 경험. 경춘선 김유정역에서 도보 10분',
    filming_guide:'1930년대 복원 초가집 처마와 현재 하늘 대비. 소설 속 장면 설명판 앞에서 소설 읽는 척 연출. 금병산 자락 실레 마을 전체 조망.',
    broll_ideas:['1930년대 복원 초가집 처마와 봄 풍경','소설 속 장면 설명판 클로즈업','금병산 자락 실레 마을 전체 조망','김유정 생가 내부 전시물','경춘선 김유정역 간판과 마을 방향'],
    hooks:['봄봄 배경 마을이 실제로 있어요','소설 읽고 오면 마을이 달라 보여요','김유정 생가에서 봄봄 배경 걸었어요','경춘선 타고 가는 문학 여행','소설 속 인물들 살던 공간 직접 봤어요'],
    thumbnails:['복원 초가집 처마와 봄 풍경','소설 설명판 앞 방문자','금병산 실레 마을 전체 조망','김유정 생가 내부','경춘선 김유정역 간판'],
    captions:{youtube:'봄봄·동백꽃 배경 마을 — 춘천 김유정 문학촌 📖\n\n소설 읽고 오면 마을이 완전히 달라 보여요!\n경춘선 김유정역에서 도보 10분\n\n📍 강원도 춘천시 신동면 김유정 문학촌\n💡 방문 전 봄봄 줄거리만 읽어도 OK\n\n#김유정문학촌 #춘천여행 #봄봄 #강원도 #문학여행',instagram:'봄봄 배경 마을이 실제로 있어요 📖\n\n춘천 김유정 문학촌 — 소설 읽고 오면 달라요 ✨\n경춘선 타고 가는 문학 여행\n\n📍 강원 춘천 김유정 문학촌\n\n#김유정문학촌 #춘천여행 #봄봄 #GemKorea',tiktok:'김유정 문학촌 꿀팁 📖 방문 전에 봄봄 줄거리만 읽고 오면 마을이 완전 달라 보여요! 소설 배경이 실제 마을이에요 // 경춘선 김유정역 도보 10분 #김유정 #춘천여행 #봄봄 #강원도'},
    hashtags:{korean:['#한국여행','#강원도여행','#문학여행','#춘천','#GemKorea'],place_specific:['#김유정문학촌','#봄봄','#실레마을','#춘천문학']}
  },
  {
    experience_id:'EX-DJ-CUL-001', experience_name:'대전 성심당 빵 투어', category_sub:'지역 먹거리', region:'대전광역시',
    script_30s:'오늘은 대전 성심당에 왔어요. 70년 역사 대전 1등 빵집이에요. 근데 아무도 안 알려주는 게 있어요 — 오전 11시에 튀김소보로가 나오는데 그 시간에 줄 서면 갓 나온 걸 먹어요. 식은 것과 차원이 달라요. 너무 갓 나온 빵 향기가 진짜라서 좋았습니다.',
    script_60s:'오늘은 대전 성심당 본점에 왔어요. 1956년 창업해서 70년 역사를 가진 대전의 상징이에요. 튀김소보로·판타롱부추빵·망고시루가 대표 메뉴인데, 전국에서 성심당 빵 먹으러 대전 원정 오는 사람들도 있어요. 근데 아무도 안 알려주는 꿀팁 하나 — 튀김소보로는 오전 11시와 오후 2시쯤 갓 나오는 시간대가 있어요. 그 타이밍에 줄 서면 막 튀겨낸 따뜻한 튀김소보로를 먹을 수 있어요. 바삭한 튀김 옷이 살아있는 갓 나온 것과 식은 것이 완전히 달라요. 성심당 인스타그램에 당일 빵 출시 시간을 올려주는 경우가 있으니 확인하고 가면 더 좋아요. 너무 갓 나온 빵이 이렇게 다를 수 있나 싶어서 좋았습니다.',
    secret_tip:'튀김소보로 갓 나오는 시간 오전 11시·오후 2시경 — 성심당 SNS에 당일 출시 시간 공지. 갓 튀긴 바삭함이 식은 것과 차원 다름. KTX 대전역에서 도보 5분',
    filming_guide:'갓 나온 튀김소보로 집어드는 손 클로즈업. 빵을 반으로 갈랐을 때 속 결 촬영. 성심당 본점 건물 외경과 줄 선 사람들.',
    broll_ideas:['갓 나온 튀김소보로 집어드는 손','빵 반으로 갈랐을 때 속 결 클로즈업','성심당 본점 외경과 줄 선 풍경','다양한 빵들 진열된 쇼케이스','대전역 방향 성심당 간판'],
    hooks:['튀김소보로 갓 나오는 시간 있어요','성심당 줄 서는 타이밍 꿀팁 알려드려요','70년 대전 1등 빵집 원정 가치 있어요','갓 나온 튀김소보로 식은 것과 달라요','대전역 도보 5분 성심당 본점'],
    thumbnails:['갓 나온 튀김소보로 손으로 집기','빵 속 결 클로즈업','성심당 본점 외경 줄 서는 풍경','쇼케이스 다양한 빵들','대전역 성심당 간판'],
    captions:{youtube:'성심당 갓 나온 튀김소보로 타이밍 있어요 🍞\n\n오전 11시·오후 2시 출시 시간 노리세요!\n70년 역사 대전 1등 빵집 KTX 역 도보 5분\n\n📍 대전 중구 성심당 본점\n🍞 성심당 SNS에 당일 출시 시간 공지\n\n#성심당 #대전여행 #튀김소보로 #대전빵 #빵지순례',instagram:'성심당 갓 나온 튀김소보로 타이밍 알아요? 🍞\n\n오전 11시·오후 2시가 갓 나오는 시간 ✨\n식은 것이랑 차원이 달라요\n\n📍 대전 성심당 본점\n\n#성심당 #대전여행 #튀김소보로 #GemKorea',tiktok:'성심당 꿀팁 🍞 오전 11시·오후 2시에 튀김소보로 갓 나와요! 그 시간 줄 서면 막 튀긴 거 먹을 수 있어요 // 70년 대전 1등 빵집 KTX 도보 5분 #성심당 #대전여행 #튀김소보로'},
    hashtags:{korean:['#한국여행','#대전여행','#빵지순례','#맛집','#GemKorea'],place_specific:['#성심당','#튀김소보로','#대전빵','#성심당본점']}
  },
  {
    experience_id:'EX-GW-CUL-004', experience_name:'원주 뮤지엄 산 건축 투어', category_sub:'문화예술', region:'강원도',
    script_30s:'오늘은 원주 뮤지엄 산에 왔어요. 안도 타다오가 설계한 미술관이에요. 근데 아무도 안 알려주는 게 있어요 — 제임스 터렐 빛 체험관이 있어요. 완전 어두운 방에서 천장 구멍으로 하늘만 보이는 그 체험이 마인드 블로잉이에요. 너무 빛이 예술이 되는 순간이라서 좋았습니다.',
    script_60s:'오늘은 강원도 원주 오크밸리 뮤지엄 산에 왔어요. 세계적 건축가 안도 타다오가 설계한 노출 콘크리트 미술관이에요. 산속 자연 속에 콘크리트와 물과 빛만으로 만들어진 공간들이 연결되어 있어요. 건물 자체가 예술이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 뮤지엄 산 안에 제임스 터렐의 빛 작품 체험관이 있어요. 완전히 어두운 방에 들어가면 천장에 작은 구멍이 뚫려 있고 거기서 하늘만 보여요. 처음엔 그냥 원이 그려진 것 같아 보이다가 시간이 지나면 실제 하늘이 3D로 돌출된 것처럼 보이는 착시가 생겨요. 그 순간 빛이 공간을 바꾸는 경험을 해요. 아무것도 없는데 빛으로 예술이 되는 그 순간이 진짜 마인드 블로잉이에요. 너무 빛 하나가 이런 체험을 만들어서 좋았습니다.',
    secret_tip:'제임스 터렐 빛 체험관 — 완전 어두운 방 천장 구멍에서 하늘이 3D로 돌출 보이는 착시. 5~10분 적응 시간 필요. 미술관 입장 시 별도 예약 필수. 안도 타다오 건축 자체가 포토존',
    filming_guide:'제임스 터렐 체험관은 촬영 금지이므로 밖에서 체험 전후 표정 촬영. 안도 타다오 노출 콘크리트 질감 클로즈업. 물 위 반사되는 산과 하늘.',
    broll_ideas:['안도 타다오 노출 콘크리트 질감 클로즈업','물 위에 반사된 산과 하늘','뮤지엄 산 입구 긴 복도와 원근감','야외 조각 공원과 산 배경','체험관 나온 후 감동 받은 표정'],
    hooks:['안도 타다오 설계 미술관이 강원도에 있어요','제임스 터렐 빛 체험 마인드 블로잉이에요','하늘이 3D로 돌출되어 보이는 착시 체험','빛 하나로 예술이 되는 그 순간','강원도 산속 세계적 건축 미술관'],
    thumbnails:['안도 타다오 노출 콘크리트 질감','물 반사 산과 하늘','뮤지엄 산 긴 입구 복도','야외 조각 공원 산 배경','체험 후 감동 표정'],
    captions:{youtube:'원주 뮤지엄 산 — 제임스 터렐 빛 체험 마인드 블로잉이에요 💡\n\n안도 타다오 설계 + 빛 착시 체험\n하늘이 3D로 돌출되어 보이는 그 순간\n\n📍 강원도 원주시 오크밸리 뮤지엄 산\n💡 제임스 터렐 체험관 별도 예약 필수\n\n#뮤지엄산 #원주 #안도타다오 #강원도여행 #제임스터렐',instagram:'원주 뮤지엄 산 제임스 터렐 빛 체험 — 마인드 블로잉이에요 💡\n\n하늘이 3D로 돌출되어 보이는 착시 ✨\n안도 타다오 건축도 예술\n\n📍 강원 원주 뮤지엄 산\n\n#뮤지엄산 #원주여행 #안도타다오 #GemKorea',tiktok:'뮤지엄 산 꿀팁 💡 제임스 터렐 빛 체험관에서 하늘이 3D로 돌출되어 보이는 착시가 생겨요! 빛 하나로 예술이 되는 순간 // 안도 타다오 설계 강원도 미술관 #뮤지엄산 #원주여행 #안도타다오'},
    hashtags:{korean:['#한국여행','#강원도여행','#문화예술','#원주','#GemKorea'],place_specific:['#뮤지엄산','#안도타다오','#제임스터렐','#원주미술관']}
  },
  {
    experience_id:'EX-GG-CUL-003', experience_name:'광명 동굴 체험', category_sub:'자연체험', region:'경기도',
    script_30s:'오늘은 경기도 광명 동굴에 왔어요. 일제 폐광이 문화 공간이 됐어요. 근데 아무도 안 알려주는 게 있어요 — 동굴 안에 와인 저장고가 있어요. 연중 10도라서 최적 와인 숙성 환경이에요. 와인 시음도 해요. 너무 폐광에서 와인을 마시는 경험이라서 좋았습니다.',
    script_60s:'오늘은 경기도 광명 동굴에 왔어요. 1912년 일제가 금·은을 캐던 폐광이 2011년 문화 예술 공간으로 재탄생한 곳이에요. 연중 온도 10~15도를 유지하는 동굴 안에 황금 폭포·아쿠아리움·미디어아트·와인 동굴이 조성되어 있어요. 근데 아무도 안 알려주는 꿀팁 하나 — 광명 동굴 안에 실제 와인 저장 동굴이 있어요. 연중 10도의 일정 온도와 습도가 와인 최적 숙성 조건이라 와인 700여 병이 보관되어 있어요. 시음 코스를 신청하면 동굴 안에서 와인을 마실 수 있어요. 폐광 안에서 와인을 마시는 그 경험이 세계 어디에도 없는 광명만의 체험이에요. 여름 폭염에 동굴 안이 시원한 것도 덤이에요. 너무 폐광이 이렇게 낭만적인 곳이 됐어서 좋았습니다.',
    secret_tip:'와인 동굴 시음 코스 — 연중 10도 폐광 안에서 와인 마시기. 세계에서 유일한 폐광 와인 동굴 체험. 입장권 구매 후 별도 신청. 여름에 폭염 피하는 천연 에어컨 동굴',
    filming_guide:'동굴 입구 들어가는 순간 밝음→어두움 전환. 황금 폭포 황금빛 조명 반사. 와인 동굴 병 진열된 구간 클로즈업.',
    broll_ideas:['황금 폭포 황금빛 조명 반사','와인 동굴 병 진열된 구간 클로즈업','동굴 입구 밝음→어두움 전환','미디어아트 동굴 내부','아쿠아리움 구간 물고기'],
    hooks:['폐광 안에서 와인 마시는 체험 있어요','광명 동굴 와인 동굴 시음 꿀팁','일제 폐광이 문화 공간이 된 이야기','여름 폭염에 연중 10도 천연 에어컨','황금 폭포·와인·미디어아트 한 곳에'],
    thumbnails:['와인 동굴 병 진열 클로즈업','황금 폭포 황금빛 조명','동굴 입구 밝음→어두움','미디어아트 동굴 내부','아쿠아리움 물고기'],
    captions:{youtube:'광명 동굴 와인 시음 — 폐광 안에서 와인 마셔봤어요 🍷\n\n연중 10도 최적 숙성 환경 와인 동굴!\n일제 폐광이 문화 예술 공간으로\n\n📍 경기도 광명시 광명 동굴\n🍷 와인 동굴 시음 코스: 별도 신청\n💡 여름 폭염엔 천연 에어컨 동굴\n\n#광명동굴 #와인동굴 #경기여행 #폐광 #여름피서',instagram:'폐광 안에서 와인 마시는 체험 있어요 🍷\n\n광명 동굴 와인 동굴 — 연중 10도 최적 환경 ✨\n황금 폭포·미디어아트까지 한 곳에\n\n📍 경기 광명 동굴\n\n#광명동굴 #와인동굴 #경기여행 #GemKorea',tiktok:'광명 동굴 꿀팁 🍷 폐광 안에 와인 동굴이 있어요! 연중 10도 최적 숙성 환경에서 시음까지 // 여름 폭염에 천연 에어컨 동굴 #광명동굴 #와인동굴 #경기여행'},
    hashtags:{korean:['#한국여행','#경기여행','#광명','#동굴체험','#GemKorea'],place_specific:['#광명동굴','#와인동굴','#황금폭포','#폐광문화공간']}
  },
  {
    experience_id:'EX-JB-CUL-004', experience_name:'군산 근대 역사 벽화 투어', category_sub:'역사 체험', region:'전라북도',
    script_30s:'오늘은 군산 근대 역사 거리에 왔어요. 8월의 크리스마스·건축학개론 촬영지예요. 근데 아무도 안 알려주는 게 있어요 — 영화 장면 그대로인 골목이 있어요. 거기 서면 영화 속 주인공이 된 것 같아요. 너무 영화 세트장 같은 현실이라서 좋았습니다.',
    script_60s:'오늘은 전북 군산 원도심에 왔어요. 1897년 개항 이후 일제가 전북 쌀을 수탈하는 거점으로 개발한 도시예요. 그 흔적이 지금도 구도심에 고스란히 남아있어요. 영화 8월의 크리스마스의 초원사진관, 건축학개론의 골목길이 실제로 있어요. 근데 아무도 안 알려주는 꿀팁 하나 — 군산 원도심 구석구석에 벽화가 그려져 있는데, 근대 역사와 영화 장면이 섞여 있어요. 초원사진관 골목 근처 영화 포스터 벽화 앞에 서면 영화 속 주인공이 된 것 같은 인생 사진이 나와요. 군산 여행을 잘 모르는 외국인들이 발견하면 정말 좋아해요. 일제강점기 역사와 한국 영화 문화를 동시에 경험하는 유일한 거리예요. 너무 역사와 영화가 공존하는 거리라서 좋았습니다.',
    secret_tip:'초원사진관 골목 근처 영화 포스터 벽화 — 8월의 크리스마스 포스터 앞 인생 사진 포인트. 군산 근대 역사 박물관 + 벽화 거리 + 동국사 하루 코스. 이른 아침 관광객 없는 골목이 더 아름다움',
    filming_guide:'초원사진관 외경 입간판과 골목 촬영. 영화 포스터 벽화 앞 인물 배치. 일제 강점기 건축물과 현재 모습 대비.',
    broll_ideas:['초원사진관 외경 입간판과 골목','영화 포스터 벽화 앞 인물 배치','일제 강점기 적산 가옥 건축물','군산 구도심 아침 골목 풍경','동국사 일본식 사찰 외경'],
    hooks:['8월의 크리스마스 촬영지 그대로 있어요','초원사진관 골목 인생 사진 포인트','군산 영화 포스터 벽화 찾아봤어요','일제강점기 역사를 영화로 이해했어요','건축학개론 배경 골목 직접 걸었어요'],
    thumbnails:['초원사진관 외경 골목','영화 포스터 벽화 앞 인물','적산 가옥 건축물','군산 아침 골목 풍경','동국사 일본식 사찰'],
    captions:{youtube:'군산 초원사진관 — 8월의 크리스마스 그대로예요 🎬\n\n영화 포스터 벽화 앞 인생 사진 포인트!\n일제강점기 역사 + 한국 영화 문화 공존\n\n📍 전북 군산시 원도심 구영동 일원\n🎬 이른 아침 방문 = 관광객 없는 골목\n\n#군산근대역사 #초원사진관 #전북여행 #8월의크리스마스 #건축학개론',instagram:'군산 초원사진관 골목 — 8월의 크리스마스 그대로예요 🎬\n\n영화 포스터 벽화 앞 인생 사진 ✨\n역사와 영화가 공존하는 거리\n\n📍 전북 군산 원도심\n\n#군산 #초원사진관 #전북여행 #8월의크리스마스 #GemKorea',tiktok:'군산 꿀팁 🎬 초원사진관 골목 근처 영화 포스터 벽화 앞이 인생 사진 포인트예요! 8월의 크리스마스 그대로 // 일제강점기 역사+영화 공존 군산 원도심 #군산 #초원사진관 #전북여행'},
    hashtags:{korean:['#한국여행','#전북여행','#군산여행','#영화촬영지','#GemKorea'],place_specific:['#군산근대역사','#초원사진관','#8월의크리스마스','#군산벽화']}
  },
  {
    experience_id:'EX-GN-CUL-002', experience_name:'합천 해인사 팔만대장경 탐방', category_sub:'역사 체험', region:'경상남도',
    script_30s:'오늘은 합천 해인사에 왔어요. 팔만대장경이 있는 유네스코 세계유산이에요. 근데 아무도 안 알려주는 게 있어요 — 장경판전 창문 크기가 앞뒤가 달라요. 자연 환기를 위한 선조의 과학이에요. 그걸 알고 보면 완전 달라 보여요. 너무 780년 전 과학이 지금도 완벽해서 좋았습니다.',
    script_60s:'오늘은 경남 합천 해인사에 왔어요. 팔만대장경이 보관된 장경판전이 유네스코 세계유산이에요. 고려 시대 1236~1251년에 몽골 침략을 불력으로 극복하고자 만든 나무 경판 8만여 장이 780년 동안 보존되어 있어요. 경판이 썩지 않은 게 신기한데 이유가 있어요. 근데 아무도 안 알려주는 꿀팁 하나 — 장경판전을 자세히 보면 창문 크기가 앞뒤가 달라요. 앞면 창문이 작고 뒷면 창문이 더 커요. 이게 의도적인 설계예요. 바람이 들어와서 습기를 조절하는 자연 환기 시스템인데, 앞뒤 창문 크기 차이로 공기 흐름을 만든 거예요. 에어컨도 제습기도 없던 시대에 이 설계 하나로 780년을 지킨 거예요. 그 사실 알고 장경판전 창문을 다시 보면 선조의 과학이 얼마나 대단한지 실감나요. 너무 780년 된 자연 에어컨이 완벽히 작동 중이라서 좋았습니다.',
    secret_tip:'장경판전 앞뒤 창문 크기 다름 — 앞 작고 뒤 크게 설계. 자연 환기로 습도 조절하는 780년 작동 중인 선조의 과학. 이 사실 알고 보면 창문 비교 관찰이 체험의 핵심',
    filming_guide:'장경판전 앞뒤 창문 크기 비교 촬영. 경판 빽빽하게 꽂힌 장경판전 내부. 해인사 가는 소나무 숲길 탐방로.',
    broll_ideas:['장경판전 앞면 작은 창문과 뒷면 큰 창문 비교','경판 빽빽하게 꽂힌 장경판전 내부','해인사 가는 소나무 숲길','팔만대장경 경판 글자 클로즈업','해인사 대웅전과 가을 단풍'],
    hooks:['780년 자연 에어컨이 아직도 작동 중이에요','장경판전 창문이 앞뒤 크기 다른 이유','팔만대장경 안 썩는 비밀 알려드려요','고려 선조의 자연 환기 과학','유네스코 해인사 장경판전 꿀팁'],
    thumbnails:['장경판전 앞뒤 창문 크기 비교','경판 꽂힌 장경판전 내부','해인사 소나무 숲길','팔만대장경 경판 글자 클로즈업','해인사 대웅전 단풍'],
    captions:{youtube:'해인사 장경판전 — 780년 자연 에어컨이 작동 중이에요 🌿\n\n앞뒤 창문 크기 다른 것이 자연 환기 비밀!\n팔만대장경 780년 보존의 과학\n\n📍 경남 합천군 가야면 해인사\n🌿 창문 크기 비교 관찰이 핵심 체험\n\n#해인사 #팔만대장경 #합천 #유네스코 #경남여행',instagram:'해인사 장경판전 창문이 앞뒤 크기 다른 거 알아요? 🌿\n\n780년 자연 에어컨 시스템이에요 ✨\n팔만대장경 안 썩는 비밀이 여기\n\n📍 경남 합천 해인사\n\n#해인사 #팔만대장경 #합천여행 #유네스코 #GemKorea',tiktok:'해인사 꿀팁 🌿 장경판전 앞뒤 창문 크기가 달라요! 자연 환기로 780년 팔만대장경 보존하는 선조의 과학 // 에어컨 없이 780년 작동 중 #해인사 #팔만대장경 #합천여행 #유네스코'},
    hashtags:{korean:['#한국여행','#경남여행','#합천여행','#유네스코','#GemKorea'],place_specific:['#해인사','#팔만대장경','#장경판전','#780년보존']}
  },
  {
    experience_id:'EX-GW-CUL-005', experience_name:'강원 삼척 해양 레일바이크', category_sub:'어드벤처/레포츠', region:'강원도',
    script_30s:'오늘은 삼척 해양 레일바이크를 탔어요. 동해 바다 옆으로 달리는 레일바이크예요. 근데 아무도 안 알려주는 게 있어요 — 터널 끝에서 갑자기 동해가 열리는 그 장면이 있어요. 어두운 터널 끝에 파란 바다가 쨍하고 나타나요. 너무 극적인 전환이라서 좋았습니다.',
    script_60s:'오늘은 강원도 삼척 해양 레일바이크를 탔어요. 동해 해안선을 따라 기암절벽과 파란 바다를 옆에 두고 달리는 레일바이크예요. 정선 레일바이크와 달리 바다 위를 달리는 느낌이 완전히 달라요. 파도 소리를 들으면서 동해 풍경을 즐길 수 있어요. 근데 아무도 안 알려주는 꿀팁 하나 — 코스 중간에 해안 터널을 통과하는 구간이 있어요. 완전히 어두운 터널을 통과하다가 터널 끝에서 갑자기 탁 트인 파란 동해가 쨍하게 열리는 장면이 나와요. 그 극적인 전환이 삼척 레일바이크의 하이라이트예요. 어두움에서 빛으로, 좁은 터널에서 광활한 바다로 — 그 순간 탄성이 저절로 나와요. 너무 동해가 이렇게 등장할 수 있나 싶어서 좋았습니다.',
    secret_tip:'해안 터널 끝 동해 등장 순간 — 어두운 터널에서 파란 동해가 쨍하게 열리는 극적 전환이 하이라이트. 카메라 셔터 준비하고 터널 진입 필수. 오전 탑승 시 역광 없이 바다 빛깔 최고',
    filming_guide:'터널 진입 순간부터 카메라 준비 — 끝에서 동해 열리는 순간 촬영. 해안선 따라 달리는 와이드샷. 파도와 레일바이크가 함께 담기는 구도.',
    broll_ideas:['터널 끝 동해가 쨍하게 열리는 순간','기암절벽 옆 레일바이크 달리는 장면','동해 파도와 레일바이크 구도','삼척 해안선 드론뷰','레일바이크 앞바퀴와 파도 클로즈업'],
    hooks:['터널 끝에서 동해가 쨍하고 열려요','삼척 레일바이크 하이라이트 순간','어두움에서 파란 바다로 극적 전환','정선 레일바이크와 완전 다른 이유','동해 바다 옆으로 달리는 레일바이크'],
    thumbnails:['터널 끝 동해 열리는 순간','기암절벽 옆 레일바이크','동해 파도와 레일바이크','삼척 해안선 드론뷰','레일바이크 앞바퀴 파도'],
    captions:{youtube:'삼척 해양 레일바이크 — 터널 끝에서 동해가 열려요 🌊\n\n어두운 터널 → 파란 동해 극적 전환이 하이라이트!\n정선 레일바이크와 완전 다른 동해 바다 레일바이크\n\n📍 강원도 삼척시 근덕면 해양 레일바이크\n🌊 오전 탑승 = 역광 없이 바다 빛깔 최고\n\n#삼척레일바이크 #삼척 #강원도여행 #동해 #레일바이크',instagram:'삼척 레일바이크 터널 끝에서 동해가 열려요 🌊\n\n어두움→파란 바다 극적 전환 진짜 탄성 나와요 ✨\n정선이랑 완전 다른 바다 레일바이크\n\n📍 강원 삼척 해양 레일바이크\n\n#삼척레일바이크 #삼척여행 #강원도 #동해 #GemKorea',tiktok:'삼척 해양 레일바이크 꿀팁 🌊 터널 통과하다가 끝에서 동해가 쨍하고 열려요! 카메라 미리 준비하세요 // 정선이랑 다른 바다 레일바이크 #삼척레일바이크 #삼척여행 #강원도'},
    hashtags:{korean:['#한국여행','#강원도여행','#삼척여행','#레포츠','#GemKorea'],place_specific:['#삼척레일바이크','#해양레일바이크','#동해','#삼척해안']}
  },
  // 기존 waiting 체험
  {
    experience_id:'EX-GB-TEM-001', experience_name:'경주 불국사 템플스테이', category_sub:'사찰 체험', region:'경상북도',
    script_30s:'오늘은 경주 불국사 템플스테이를 했어요. 신라 천 년 사찰에서 하룻밤이에요. 근데 아무도 안 알려주는 게 있어요 — 새벽 4시 타종 소리가 불국사 전체에 울려 퍼져요. 그 소리가 진짜 1,300년 신라 소리예요. 너무 역사 속 소리를 들은 것 같아서 좋았습니다.',
    script_60s:'오늘은 경주 불국사 템플스테이를 했어요. 신라 경덕왕 때 김대성이 창건한 유네스코 세계유산이에요. 불국사는 낮에는 관광객으로 가득하지만 템플스테이를 하면 관광객이 다 빠진 새벽 불국사를 혼자 걸을 수 있어요. 근데 아무도 안 알려주는 꿀팁 하나 — 새벽 4시 예불 시작 전 타종 시간이 있어요. 범종에서 울리는 종소리가 불국사 전체 경내를 가득 채울 때 그 소리의 울림이 달라요. 그리고 예불이 끝나고 새벽빛이 다보탑·석가탑에 비치기 시작하는 그 순간 — 1,300년의 시간이 그대로 느껴져요. 낮에 보는 불국사와 완전히 다른 경험이에요. 너무 새벽 불국사가 이렇게 다를 수 있어서 좋았습니다.',
    secret_tip:'새벽 4시 타종과 예불 후 불국사 다보탑·석가탑에 새벽빛이 비치는 순간 — 관광객 없는 고요한 신라 사찰. 낮과 완전히 다른 경험. 템플스테이 예약 www.templestay.com',
    filming_guide:'새벽빛이 다보탑·석가탑에 스며드는 순간 촬영 (황금빛 대비). 범종 타종 소리 음성 포함. 관광객 없는 새벽 경내 광각 촬영.',
    broll_ideas:['새벽빛 비치는 다보탑·석가탑','범종 타종 순간','관광객 없는 새벽 불국사 경내','스님 예불 장면','불국사 청운교·백운교 계단 새벽빛'],
    hooks:['새벽 4시 불국사를 혼자 걷는 경험','1,300년 범종 소리가 경내에 울릴 때','관광객 없는 새벽 불국사 진짜예요','불국사 템플스테이 새벽의 비밀','낮 불국사와 완전 다른 그 새벽'],
    thumbnails:['새벽빛 비치는 다보탑 석가탑','범종 타종 순간','새벽 관광객 없는 경내','스님 예불 장면','청운교 백운교 새벽빛'],
    captions:{youtube:'경주 불국사 새벽 — 관광객 없는 그 시간이 진짜예요 🛕\n\n새벽 4시 범종 소리 + 다보탑에 새벽빛\n템플스테이로만 경험 가능\n\n📍 경북 경주시 불국사 (템플스테이: templestay.com)\n🛕 새벽 4시 타종 + 예불 + 새벽빛 = 1,300년 시간\n\n#불국사템플스테이 #경주여행 #불국사 #경북 #템플스테이',instagram:'불국사 새벽 4시 — 이 시간이 진짜 불국사예요 🛕\n\n범종 소리가 경내를 가득 채울 때 1,300년 느껴져요 ✨\n관광객 없는 새벽 불국사\n\n📍 경북 경주 불국사\n\n#불국사템플스테이 #경주여행 #불국사 #GemKorea',tiktok:'불국사 템플스테이 꿀팁 🛕 새벽 4시 범종 타종 소리가 경내 가득 채울 때 소름이에요! 관광객 없는 새벽 불국사 혼자 걸을 수 있어요 // 낮이랑 완전 달라요 #불국사템플스테이 #경주여행 #불국사'},
    hashtags:{korean:['#한국여행','#경북여행','#경주여행','#템플스테이','#GemKorea'],place_specific:['#불국사템플스테이','#불국사새벽','#다보탑','#범종타종']}
  },
  {
    experience_id:'EX-JB-HAO-001', experience_name:'전주 한옥마을 한옥숙박', category_sub:'한옥 숙박', region:'전라북도',
    script_30s:'오늘은 전주 한옥마을에서 한옥에 하룻밤 묵었어요. 기와지붕 아래 마당이 있는 숙소예요. 근데 아무도 안 알려주는 게 있어요 — 새벽에 한옥 마당에 나오면 700채 한옥 기와지붕이 새벽빛에 물들어요. 그 뷰가 투숙객만 볼 수 있어요. 너무 한옥 마당의 새벽이 달라서 좋았습니다.',
    script_60s:'오늘은 전주 한옥마을 한옥 게스트하우스에서 하룻밤을 묵었어요. 700채 한옥이 모여있는 마을에서 진짜 한옥 안에 자는 경험이에요. 온돌 바닥의 따뜻함, 마당에서 바라보는 기와지붕, 아침 창문으로 들어오는 햇빛이 완전히 달라요. 근데 아무도 안 알려주는 꿀팁 하나 — 새벽 6시쯤 한옥 마당에 나오면 아직 관광객이 없는 한옥마을이에요. 이른 아침 안개가 낮게 깔리는 날엔 기와지붕들이 안개 위로 떠있는 것처럼 보여요. 그 장면은 투숙객만 볼 수 있어요. 하룻밤 숙박 비용이 한옥마을 새벽 독점 뷰값이에요. 고택 마당에서 혼자 커피 한 잔 마시는 그 시간이 진짜 전주 한옥마을 경험이에요. 너무 새벽 한옥마을이 완전 달라서 좋았습니다.',
    secret_tip:'새벽 6시 한옥 마당 — 관광객 없는 700채 기와지붕 새벽 독점 뷰. 안개 낀 날 기와지붕이 안개 위 떠있는 장면은 투숙객만 경험 가능. 한옥숙박 2~3만원대부터 가능',
    filming_guide:'새벽 기와지붕과 안개 어우러지는 골목 광각. 온돌 바닥 위 이부자리 아침 햇빛 클로즈업. 마당에서 바라보는 기와지붕 하늘.',
    broll_ideas:['새벽 안개 낀 기와지붕 골목 광각','온돌 바닥 이부자리 아침 햇빛','마당에서 바라보는 기와지붕 하늘','아침 마당 혼자 커피 마시는 장면','한옥 창문으로 들어오는 아침 햇빛'],
    hooks:['한옥 마당 새벽 기와지붕 안개 뷰','투숙객만 볼 수 있는 전주 새벽','온돌 따뜻한 바닥에서 자봤어요','전주 한옥숙박 진짜 가치가 이거예요','새벽 한옥마을 관광객 없는 그 시간'],
    thumbnails:['새벽 안개 기와지붕 골목','온돌 바닥 아침 햇빛','마당에서 기와지붕 하늘','혼자 커피 마당 장면','한옥 창문 아침 햇빛'],
    captions:{youtube:'전주 한옥마을 새벽 — 투숙객만 볼 수 있는 기와지붕 뷰 🏯\n\n새벽 6시 관광객 없는 안개 낀 기와지붕이 진짜예요!\n온돌 바닥 하룻밤의 가치\n\n📍 전북 전주시 한옥마을 한옥 숙박\n🏯 새벽 6시 마당 = 투숙객 독점 뷰\n\n#전주한옥숙박 #전주한옥마을 #전북여행 #한옥 #새벽뷰',instagram:'전주 한옥 새벽 6시 마당에서 기와지붕 안개 뷰 봤어요 🏯\n\n투숙객만 볼 수 있는 뷰예요 ✨\n온돌 바닥 따뜻함도 다르고\n\n📍 전북 전주 한옥마을\n\n#전주한옥숙박 #전주한옥마을 #전북여행 #GemKorea',tiktok:'전주 한옥숙박 꿀팁 🏯 새벽 6시에 마당 나오면 안개 낀 기와지붕 뷰 혼자 다 가져요! 투숙객만 볼 수 있는 장면 // 온돌 바닥 따뜻한 경험도 #전주한옥숙박 #전주한옥마을 #전북여행'},
    hashtags:{korean:['#한국여행','#전북여행','#전주여행','#한옥숙박','#GemKorea'],place_specific:['#전주한옥숙박','#전주한옥마을','#기와지붕새벽','#온돌체험']}
  },
  {
    experience_id:'EX-IC-CUL-002', experience_name:'인천 개항장 문화 지구 투어', category_sub:'역사 체험', region:'인천광역시',
    script_30s:'오늘은 인천 개항장 거리에 왔어요. 1883년 개항 흔적이 그대로 있어요. 근데 아무도 안 알려주는 게 있어요 — 짜장면박물관이 여기에 있어요. 한국 짜장면 발원지가 인천 차이나타운이에요. 너무 짜장면이 한국 음식이 된 역사가 재밌어서 좋았습니다.',
    script_60s:'오늘은 인천 중구 개항장 문화 지구를 걸었어요. 1883년 개항과 함께 형성된 근대 역사 지구예요. 구 일본 제1은행·인천부청·대불호텔 터·자유공원이 모두 도보 거리에 있어요. 한국 근대 개항 역사를 걸어서 이해하는 최고의 코스예요. 근데 아무도 안 알려주는 꿀팁 하나 — 인천 개항장 차이나타운에 짜장면박물관이 있어요. 한국 짜장면은 청나라 노동자들이 인천 차이나타운에서 처음 만들어 먹던 음식이에요. 공화춘이라는 중국 음식점에서 1905년 처음 팔기 시작했어요. 그 공화춘 건물이 지금 짜장면박물관으로 운영되고 있어요. 짜장면이 어떻게 한국 대표 배달 음식이 됐는지 역사를 알고 짜장면 먹으면 완전히 다른 맛이에요. 너무 짜장면에 이런 역사가 있다는 게 재밌어서 좋았습니다.',
    secret_tip:'짜장면박물관 (구 공화춘) — 1905년 한국 최초 짜장면 발원지. 입장료 500원. 인천 개항장+차이나타운+짜장면박물관 세트 코스. 짜장면 역사 알고 먹으면 맛이 달라짐',
    filming_guide:'1883년 개항 당시 건축물과 현재 공존하는 거리 대비. 짜장면박물관 내부 1900년대 주방 재현. 차이나타운 홍등과 개항장 건물 어우러지는 구도.',
    broll_ideas:['1883년 개항 시대 건축물 외경','짜장면박물관 내부 1900년대 주방 재현','차이나타운 홍등과 개항장 건물 구도','구 일본 제1은행 건물 클로즈업','자유공원 맥아더 동상'],
    hooks:['짜장면 발원지가 인천이에요','짜장면박물관 입장료 500원 가성비 최고','1883년 개항 흔적이 그대로 있어요','공화춘이 짜장면 처음 판 곳이에요','한국 근대 역사를 걷는 인천 개항장'],
    thumbnails:['1883년 개항 시대 건축물','짜장면박물관 주방 재현','차이나타운 홍등과 개항장','구 일본 제1은행 건물','자유공원 맥아더 동상'],
    captions:{youtube:'짜장면 발원지 인천 개항장 — 짜장면박물관 500원이에요 🍜\n\n1905년 공화춘에서 처음 팔기 시작한 짜장면!\n1883년 개항 역사 걸어서 이해하는 코스\n\n📍 인천 중구 개항장 문화 지구\n🍜 짜장면박물관 입장료 500원\n\n#인천개항장 #짜장면박물관 #인천여행 #차이나타운 #개항역사',instagram:'짜장면 발원지가 인천이에요 🍜\n\n짜장면박물관 500원에 역사 다 알아요 ✨\n1883년 개항 흔적 그대로 인천 개항장\n\n📍 인천 중구 개항장\n\n#인천개항장 #짜장면박물관 #인천여행 #GemKorea',tiktok:'인천 개항장 꿀팁 🍜 짜장면박물관이 여기 있어요! 1905년 한국 최초 짜장면 발원지 입장료 500원 // 1883년 개항 역사도 같이 걸어서 보는 코스 #인천개항장 #짜장면박물관 #인천여행'},
    hashtags:{korean:['#한국여행','#인천여행','#역사여행','#짜장면','#GemKorea'],place_specific:['#인천개항장','#짜장면박물관','#차이나타운','#개항역사']}
  },
  {
    experience_id:'EX-JN-CUL-002', experience_name:'목포 근대 역사 문화 거리 투어', category_sub:'역사 체험', region:'전라남도',
    script_30s:'오늘은 목포 근대 역사 거리에 왔어요. 일제강점기 건물 80개가 그대로예요. 근데 아무도 안 알려주는 게 있어요 — 구 일본 영사관이 현재 목포 근대 역사관이에요. 그 건물 안에 들어가면 역사가 몸으로 느껴져요. 너무 건물이 살아있는 역사 교과서라서 좋았습니다.',
    script_60s:'오늘은 전남 목포 원도심 근대 역사 문화 거리에 왔어요. 1897년 개항 이후 목포는 일제가 전남 면화·쌀을 수탈하는 거점 항구였어요. 그 흔적이 지금도 80여 개의 근대 건축물로 남아있어요. 구 일본 영사관·동양척식주식회사·적산가옥들이 원형 그대로 보존되어 있어요. 근데 아무도 안 알려주는 꿀팁 하나 — 구 일본 영사관 건물이 현재 목포 근대 역사관 1관으로 운영되어 있어요. 일제강점기 목포 수탈 역사를 전시하는데, 그 수탈 현장인 영사관 건물 안에서 그 역사를 보는 경험이 교과서와 완전히 달라요. 건물 지하에 발굴된 비밀 지하도도 볼 수 있어요. 드라마 호텔 델루나·1988 목포는 항구다 촬영지이기도 해요. 너무 건물 자체가 역사 교과서라서 좋았습니다.',
    secret_tip:'구 일본 영사관 건물 = 현재 목포 근대역사관 1관 — 수탈 현장 건물 안에서 수탈 역사 관람. 지하 비밀 지하도 발굴. 드라마 촬영지 겸용. 이른 아침 골목 탐방이 더 아름다움',
    filming_guide:'일제 시대 건축물 외관과 현재 목포 도시 대비. 비밀 지하도 내부 좁은 통로. 적산가옥 골목 이른 아침 탐방.',
    broll_ideas:['구 일본 영사관 건물 외관 클로즈업','비밀 지하도 좁은 통로 내부','적산가옥 골목 이른 아침 탐방','동양척식주식회사 건물 외경','목포 근대 역사관 전시 내부'],
    hooks:['일제 영사관 건물 안에서 수탈 역사 봤어요','목포 근대 건물 80개가 그대로예요','비밀 지하도가 발굴됐어요','드라마 호텔 델루나 촬영지예요','건물이 살아있는 역사 교과서'],
    thumbnails:['구 일본 영사관 건물 외관','비밀 지하도 내부 좁은 통로','적산가옥 골목 아침 탐방','동양척식주식회사 건물','목포 근대역사관 전시'],
    captions:{youtube:'목포 근대 역사 거리 — 수탈 현장 건물에서 역사 봤어요 🏛️\n\n구 일본 영사관이 현재 역사관!\n비밀 지하도까지 발굴된 살아있는 역사 교과서\n\n📍 전남 목포시 원도심 근대 역사 문화 거리\n🏛️ 드라마 호텔 델루나 촬영지\n\n#목포근대역사 #목포여행 #전남여행 #일제강점기 #드라마촬영지',instagram:'목포 구 일본 영사관에서 수탈 역사 봤어요 🏛️\n\n수탈 현장 건물 안에서 그 역사 보는 경험 ✨\n비밀 지하도까지 있어요\n\n📍 전남 목포 근대 역사 문화 거리\n\n#목포근대역사 #목포여행 #전남 #GemKorea',tiktok:'목포 꿀팁 🏛️ 구 일본 영사관 건물이 지금 역사관이에요! 수탈 현장에서 수탈 역사 보는 경험 // 비밀 지하도도 발굴됨 드라마 호텔 델루나 촬영지 #목포근대역사 #목포여행 #전남여행'},
    hashtags:{korean:['#한국여행','#전남여행','#목포여행','#역사여행','#GemKorea'],place_specific:['#목포근대역사','#구일본영사관','#적산가옥','#비밀지하도']}
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
