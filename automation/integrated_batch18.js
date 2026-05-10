const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const now = new Date().toISOString().slice(0,19);

const newExps = [
  {experience_id:'EX-GN-NAT-019',name:'고성 가야 역사 탐방',category_main:'문화/체험',category_sub:'역사 체험',region_main:'GN',region_sub:'경상남도 고성군',address:'경상남도 고성군 고성읍 성내리 고성박물관',lat:34.9750,lng:128.3228,price:'무료',duration:'1~2시간',reservation_required:false,target_user:['가족','개인'],nearby_places:[],related_heritage_ids:[],short_description:'소가야의 고장 경남 고성에서 가야 역사를 탐방하는 체험이다. 고성박물관에서 소가야 유물을 관람하고 인근 공룡 발자국 해안 탐방과 연계하면 역사+자연 하루 코스가 완성된다.',source_urls:['https://www.coseong.go.kr/'],data_confidence:'high',tags:['소가야','고성','경남','가야역사','공룡발자국','역사탐방','무료'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00 (월요일 휴관)',phone:'055-670-2727'},
  {experience_id:'EX-GW-NAT-022',name:'정선 화암동굴+고씨굴 투어',category_main:'문화/체험',category_sub:'자연체험',region_main:'GW',region_sub:'강원특별자치도 정선군',address:'강원특별자치도 정선군 화암면 화암리 66',lat:37.3800,lng:128.7628,price:'성인 9,000원',duration:'2~3시간',reservation_required:false,target_user:['가족','개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'정선 화암동굴과 영월 고씨굴을 하루에 탐방하는 강원도 동굴 투어 코스다. 테마파크형 화암동굴에서 모노레일과 황금 전시를 즐기고 자연 그대로의 고씨굴 지하 탐방까지 즐기는 이색 코스다.',source_urls:['https://www.jeongseon.go.kr/'],data_confidence:'high',tags:['화암동굴','고씨굴','정선','영월','강원','동굴투어','하루코스'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~17:00',phone:'033-560-3011'},
  {experience_id:'EX-JN-NAT-023',name:'담양 소쇄원 사계절 산책',category_main:'문화/체험',category_sub:'역사 체험',region_main:'JN',region_sub:'전라남도 담양군',address:'전라남도 담양군 남면 소쇄원길 17',lat:35.3006,lng:126.9589,price:'성인 2,000원',duration:'1시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'조선 시대 선비 정신이 담긴 전남 담양 소쇄원을 탐방하는 체험이다. 1530년 조성된 한국 최고(最古) 사립 원림으로 대나무·계류·정자가 어우러진 조선 시대 자연 정원 문화를 체험한다.',source_urls:['https://www.soswaewon.co.kr/'],data_confidence:'high',tags:['소쇄원','담양','전남','조선정원','선비문화','대나무','사계절'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00',phone:'061-381-0115'},
  {experience_id:'EX-GN-NAT-020',name:'양산 통도사 소나무 숲길',category_main:'문화/체험',category_sub:'자연체험',region_main:'GN',region_sub:'경상남도 양산시',address:'경상남도 양산시 하북면 통도사로 108',lat:35.4809,lng:129.0594,price:'성인 4,000원',duration:'1~2시간',reservation_required:false,target_user:['개인','커플','가족'],nearby_places:[],related_heritage_ids:[],short_description:'국내 3대 사찰 통도사 입구 무풍한송로 소나무 숲길을 걷는 체험이다. 300~400년 수령의 소나무들이 늘어선 1km 숲길이 한국에서 가장 아름다운 사찰 진입로 중 하나로 꼽힌다.',source_urls:['https://www.tongdosa.or.kr/'],data_confidence:'high',tags:['통도사소나무','양산','경남','무풍한송로','소나무','산책','3대사찰'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'07:30~18:00',phone:'055-382-7182'},
  {experience_id:'EX-GG-NAT-025',name:'가평 아침고요수목원 빛 축제',category_main:'문화/체험',category_sub:'야경/야간투어',region_main:'GG',region_sub:'경기도 가평군',address:'경기도 가평군 상면 수목원로 432',lat:37.8119,lng:127.4547,price:'성인 15,000원',duration:'2~3시간',reservation_required:false,target_user:['커플','가족','개인'],nearby_places:[],related_heritage_ids:[],short_description:'가평 아침고요수목원에서 겨울 야간에 진행되는 한국 10경 빛 축제를 감상하는 체험이다. 수목원 전체를 수십만 개의 조명으로 가득 채운 야간 조명 축제로 겨울 수도권 야경 명소다.',source_urls:['https://www.morningcalm.co.kr/'],data_confidence:'high',tags:['아침고요수목원빛축제','가평','경기','야경','겨울조명','빛축제','야간'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'seasonal',operating_hours:'12월~2월 빛 축제 시즌 (17:00~21:00)',phone:'1544-6703'},
  {experience_id:'EX-JN-NAT-024',name:'여수 향일암 동백꽃 투어',category_main:'문화/체험',category_sub:'자연체험',region_main:'JN',region_sub:'전라남도 여수시',address:'전라남도 여수시 돌산읍 향일암로 60',lat:34.6539,lng:127.7547,price:'성인 2,000원',duration:'1~2시간',reservation_required:false,target_user:['커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'여수 향일암 일출 명소를 2~3월 동백 시즌에 방문하는 체험이다. 바위 절벽에 매달린 천년 고찰 향일암 주변 동백 군락이 만개하는 시기에 동백꽃과 남해 다도해가 어우러지는 봄 명소다.',source_urls:['https://www.hyangiram.or.kr/'],data_confidence:'high',tags:['향일암동백','여수','전남','동백','남해','봄꽃','사찰'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'2~3월 동백 시즌',phone:'061-644-4742'},
  {experience_id:'EX-GG-NAT-026',name:'가평 청평호 보트 투어',category_main:'문화/체험',category_sub:'어드벤처/레포츠',region_main:'GG',region_sub:'경기도 가평군',address:'경기도 가평군 청평면 호명로 580 (청평호)',lat:37.7581,lng:127.4912,price:'1인 20,000원~',duration:'1시간',reservation_required:false,target_user:['가족','커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'청평호를 보트로 탐방하는 레저 체험이다. 다양한 종류의 보트를 직접 조종하거나 탑승해 북한강 상류 청평호의 절경을 감상하는 수도권 근교 여름 피서 코스다.',source_urls:['https://www.gapyeong.go.kr/'],data_confidence:'high',tags:['청평호','가평','경기','보트','북한강','레저','여름'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'seasonal',operating_hours:'5~10월',phone:'031-585-7401'},
  {experience_id:'EX-JJ-NAT-007',name:'제주 사려니 숲길 트레킹',category_main:'문화/체험',category_sub:'자연체험',region_main:'JJ',region_sub:'제주특별자치도 제주시',address:'제주특별자치도 제주시 조천읍 사려니숲길',lat:33.4200,lng:126.6700,price:'무료',duration:'2~3시간',reservation_required:false,target_user:['개인','커플','가족'],nearby_places:[],related_heritage_ids:[],short_description:'제주 중산간 사려니 숲길을 걷는 피톤치드 힐링 트레킹이다. 물참나무·서어나무·단풍나무 등이 이루는 원시림 숲길 15km 중 일부 구간을 걸으며 봄·여름·가을 계절별로 다른 아름다운 경관을 즐긴다.',source_urls:['https://www.visitjeju.net/'],data_confidence:'high',tags:['사려니숲길','제주','중산간','원시림','힐링','트레킹','피톤치드'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~13:00 (14:00 이후 입산 제한)',phone:'064-900-8822'},
  {experience_id:'EX-GW-NAT-023',name:'철원 한탄강 뗏목 체험',category_main:'문화/체험',category_sub:'어드벤처/레포츠',region_main:'GW',region_sub:'강원특별자치도 철원군',address:'강원특별자치도 철원군 갈말읍 한탄강 선착장',lat:38.1614,lng:127.2989,price:'1인 15,000원~',duration:'1~2시간',reservation_required:true,target_user:['가족','개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'한탄강 주상절리 협곡을 전통 뗏목을 타고 유람하는 체험이다. 50만 년 전 화산 지형 현무암 협곡 사이를 뗏목으로 천천히 내려가며 한탄강 절경을 즐기는 강원도 생태 하천 체험이다.',source_urls:['https://www.cwg.go.kr/'],data_confidence:'high',tags:['한탄강뗏목','철원','강원','뗏목','주상절리','협곡','생태체험'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'seasonal',operating_hours:'4~10월',phone:'033-450-5558'},
  {experience_id:'EX-GN-NAT-021',name:'남해 편백 산림욕 힐링 체험',category_main:'문화/체험',category_sub:'자연체험',region_main:'GN',region_sub:'경상남도 남해군',address:'경상남도 남해군 삼동면 보리암로 길 일원',lat:34.8344,lng:127.9222,price:'무료',duration:'2~3시간',reservation_required:false,target_user:['개인','커플','가족'],nearby_places:[],related_heritage_ids:[],short_description:'남해 금산 자락에 조성된 편백 군락지에서 피톤치드 삼림욕을 즐기는 힐링 체험이다. 보리암 사찰 탐방과 연계해 불교 문화와 남해 다도해 전망을 함께 즐기는 남해 최고 힐링 코스다.',source_urls:['https://www.namhae.go.kr/'],data_confidence:'high',tags:['남해편백','남해','경남','편백숲','피톤치드','힐링','보리암'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중',phone:'055-860-3671'},
  {experience_id:'EX-JB-NAT-007',name:'무주 적상산 천일폭포 트레킹',category_main:'문화/체험',category_sub:'자연체험',region_main:'JB',region_sub:'전라북도 무주군',address:'전라북도 무주군 적상면 적상산 일원',lat:35.9264,lng:127.6278,price:'무료',duration:'2~3시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'덕유산 인근 적상산 천일폭포까지 이어지는 산악 트레킹이다. 가을 단풍이 절정인 10월 적상산은 바위 절벽과 단풍이 어우러지는 전북 최고의 가을 산으로 꼽힌다.',source_urls:['https://www.muju.go.kr/'],data_confidence:'high',tags:['적상산','무주','전북','천일폭포','단풍','가을산','트레킹'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중',phone:'063-320-2062'},
  {experience_id:'EX-GN-NAT-022',name:'진해 창원 마창대교 야경 드라이브',category_main:'문화/체험',category_sub:'야경/야간투어',region_main:'GN',region_sub:'경상남도 창원시',address:'경상남도 창원시 마산합포구 마창대교',lat:35.2025,lng:128.5400,price:'무료 (통행료 별도)',duration:'1시간',reservation_required:false,target_user:['커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'마산만을 가로지르는 마창대교를 야간에 통과하며 야경을 즐기는 드라이브 체험이다. 교량 조명과 마산항 야경이 어우러지는 경남 대표 야간 드라이브 코스다.',source_urls:['https://www.changwon.go.kr/'],data_confidence:'high',tags:['마창대교','창원','마산','경남','야경드라이브','교량','밤운전'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (야경: 일몰~22:00)',phone:'055-225-3691'}
];

const newShorts = [
  {
    experience_id:'EX-JB-CUL-001', experience_name:'전주 조선 과거시험 체험', category_sub:'역사 체험', region:'전라북도',
    script_30s:'오늘은 전주 한옥마을에서 과거시험 체험을 했어요. 조선 시대 선비가 된 거예요. 근데 아무도 안 알려주는 게 있어요 — 한복 입고 붓으로 사자성어를 써서 장원급제 합격증을 받아요. 그 합격증이 진짜 도장 찍혀서 나와요. 너무 합격증이 생기는 그 순간이라서 좋았습니다.',
    script_60s:'오늘은 전북 전주 한옥마을에서 조선 과거시험 체험을 했어요. 한복을 입고 조선 시대 과거시험을 재현하는 체험이에요. 붓으로 사자성어를 쓰고 채점관 앞에서 낭독하면 장원급제 합격증을 받아요. 근데 아무도 안 알려주는 꿀팁 하나 — 과거시험 체험에서 합격증을 받는데 이게 단순한 기념품이 아니에요. 실제 도장이 찍힌 공식 서류 형식이에요. 이걸 집에 가져가서 액자에 넣으면 세상에 하나뿐인 나만의 조선 시대 합격증이 돼요. 외국인들이 이 체험을 정말 좋아해요. 한국에 왔다가 조선 과거시험 합격증을 받아가는 거니까요. 체험 시간이 30~40분 정도라 전주 한옥마을 구경 중 가볍게 끼워 넣을 수 있어요. 너무 합격증 한 장이 기억이 되는 체험이라서 좋았습니다.',
    secret_tip:'합격증 = 도장 찍힌 공식 형식 기념품 — 액자에 넣으면 세상 하나뿐인 조선 합격증. 외국인이 가장 좋아하는 체험. 30~40분 짧은 체험 가볍게 끼워 넣기 가능. 한복 대여와 세트',
    filming_guide:'붓으로 사자성어 쓰는 클로즈업. 채점관 앞 낭독 장면. 합격증 받는 순간 표정.',
    broll_ideas:['붓으로 사자성어 쓰는 클로즈업','채점관 앞 낭독 장면','합격증 받는 순간 표정','조선 시대 의관 입은 체험자','전주 한옥마을 배경 체험장'],
    hooks:['조선 과거시험 합격증 받아봤어요','도장 찍힌 공식 형식 합격증이에요','외국인이 제일 좋아하는 전주 체험','액자에 넣으면 세상 하나뿐인 합격증','30분짜리 가성비 최고 체험'],
    thumbnails:['붓 사자성어 클로즈업','채점관 앞 낭독','합격증 받는 순간','조선 의관 체험자','한옥마을 체험장'],
    captions:{youtube:'전주 과거시험 체험 — 합격증 진짜 도장 찍혀 나와요 📜\n\n세상 하나뿐인 조선 합격증!\n외국인이 제일 좋아하는 전주 체험\n\n📍 전북 전주시 한옥마을 과거시험 체험\n📜 30~40분 / 합격증 액자 추천\n\n#전주과거시험 #전주 #전북여행 #조선체험 #한옥마을',instagram:'전주 과거시험 합격증 도장 찍혀서 나왔어요 📜\n\n세상 하나뿐인 조선 합격증 ✨\n30분 짜리 가성비 최고 체험\n\n📍 전북 전주 한옥마을\n\n#전주과거시험 #전주여행 #전북 #조선체험 #GemKorea',tiktok:'전주 과거시험 꿀팁 📜 합격증이 도장 찍힌 공식 형식으로 나와요! 액자에 넣으면 세상 하나뿐인 조선 합격증 // 외국인이 제일 좋아하는 전주 체험 #전주과거시험 #전주여행 #조선체험'},
    hashtags:{korean:['#한국여행','#전북여행','#전주여행','#역사체험','#GemKorea'],place_specific:['#전주과거시험','#조선합격증','#한옥마을과거','#전주외국인체험']}
  },
  {
    experience_id:'EX-SE-CUL-001', experience_name:'서울 한국의 집 전통 공연·한식', category_sub:'문화예술', region:'서울특별시',
    script_30s:'오늘은 서울 한국의 집에서 전통 공연을 봤어요. 조선 시대 고택에서 가야금·탈춤·판소리가 한 무대예요. 근데 아무도 안 알려주는 게 있어요 — 공연 전후 전통 한정식이 포함돼요. 공연 + 밥이 세트예요. 외국인 데리고 가기 최고 코스예요. 너무 한 공간에 한국 전통 전부가 있어서 좋았습니다.',
    script_60s:'오늘은 서울 남산 자락 한국의 집에서 전통 공연과 한정식을 즐겼어요. 조선 시대 양식으로 복원된 고택에서 가야금·탈춤·사물놀이·판소리가 한 무대에 펼쳐지는 체험이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 한국의 집 체험은 공연만 보는 게 아니에요. 공연 전후로 전통 한정식이 포함되는 패키지가 있어요. 궁중 요리 스타일의 한정식 20여 가지 반찬과 함께 전통 공연을 관람하는 거예요. 외국인 손님 데리고 오기에 완벽한 코스예요. 가야금·탈춤·판소리·한식을 한 자리에서 경험하는 게 세계 어디서도 할 수 없는 한국 전통 체험이에요. 서울 남산 공원에서 이어지는 야간 산책까지 더하면 완벽한 저녁 코스가 돼요. 너무 한국 전통이 한 공간에 다 있어서 좋았습니다.',
    secret_tip:'공연+한정식 패키지 — 궁중 요리 스타일 20여 가지 반찬. 가야금·탈춤·판소리 한 무대. 외국인 손님 데리고 가기 최적. 17:30·19:30 2회 공연. 남산 공원 세트',
    filming_guide:'가야금 연주 클로즈업. 탈춤 화려한 의상 전체 광각. 전통 한정식 상차림 클로즈업.',
    broll_ideas:['가야금 연주 클로즈업','탈춤 화려한 의상 광각','전통 한정식 상차림','고택 야경 배경','공연 관람 외국인 반응'],
    hooks:['한국 전통이 한 공간에 다 있어요','공연+한정식 세트 패키지예요','외국인 데리고 가기 최적이에요','가야금 탈춤 판소리 한 무대','한국의 집 꿀팁 있어요'],
    thumbnails:['가야금 연주 클로즈업','탈춤 의상 광각','한정식 상차림','고택 야경','공연 외국인 반응'],
    captions:{youtube:'서울 한국의 집 — 공연+한정식 세트 패키지예요 🎭\n\n가야금·탈춤·판소리+궁중 한정식!\n외국인 손님 데리고 가기 최적\n\n📍 서울 중구 한국의 집\n🎭 17:30·19:30 2회 공연\n💡 공연+한정식 패키지 예약 추천\n\n#한국의집 #서울여행 #전통공연 #한정식 #외국인추천',instagram:'서울 한국의 집 공연+한정식 세트 패키지예요 🎭\n\n가야금 탈춤 판소리 궁중 한정식 한 자리 ✨\n외국인 손님 데리고 가기 최적\n\n📍 서울 중구 한국의 집\n\n#한국의집 #서울여행 #전통공연 #한정식 #GemKorea',tiktok:'한국의 집 꿀팁 🎭 공연+한정식 세트 패키지가 있어요! 가야금 탈춤 판소리 한 무대에 궁중 한정식까지 // 외국인 손님 데리고 가기 최적 #한국의집 #서울여행 #전통공연'},
    hashtags:{korean:['#한국여행','#서울여행','#전통공연','#한정식','#GemKorea'],place_specific:['#한국의집','#전통공연한정식','#가야금탈춤판소리','#외국인추천코스']}
  },
  {
    experience_id:'EX-GW-CYC-001', experience_name:'춘천 자전거길 의암호 투어', category_sub:'어드벤처/레포츠', region:'강원도',
    script_30s:'오늘은 춘천 의암호 자전거 투어를 했어요. 호수 옆으로 달리는 거예요. 근데 아무도 안 알려주는 게 있어요 — 아침 안개 낀 날 의암호 자전거가 진짜예요. 안개가 호수를 덮는 그 시간 달리면 드라마 속으로 들어가요. 너무 안개와 함께 달리는 게 좋았습니다.',
    script_60s:'오늘은 강원도 춘천 의암호 자전거 투어를 했어요. 춘천 도심을 감싸는 의암호 둘레를 자전거로 달리는 코스예요. 소양강 스카이워크·구봉산 전망대와 연계하면 완벽한 하루 코스가 돼요. 근데 아무도 안 알려주는 꿀팁 하나 — 의암호 자전거 최고의 타이밍이 있어요. 봄·가을 이른 아침 안개 낀 날이에요. 안개가 의암호 수면을 덮는 날 자전거를 타면 마치 구름 위를 달리는 것 같은 몽환적인 장면이 펼쳐져요. 드라마 속 장면처럼 아름다워요. 이 타이밍은 8~10시 사이인데, 그 전에 출발해서 안개 포인트에서 기다려야 해요. 춘천 닭갈비 아침 식사 후 자전거 타는 것도 인기 코스예요. 너무 안개 속 의암호 자전거가 달랐어서 좋았습니다.',
    secret_tip:'봄·가을 이른 아침 안개 낀 날 8~10시 — 의암호 수면 안개 덮이는 몽환적 순간. 드라마 배경 같은 분위기. 안개 포인트 사전 위치 파악. 닭갈비 아침+자전거 춘천 코스',
    filming_guide:'안개 낀 의암호 자전거 달리는 장면. 호수 수면 반사 광각. 스카이워크에서 내려다보는 의암호.',
    broll_ideas:['안개 낀 의암호 자전거 달리기','호수 수면 반사 광각','스카이워크 의암호 전경','춘천 닭갈비 아침 식사','자전거 대여소'],
    hooks:['안개 낀 날 의암호 자전거가 진짜예요','드라마 속으로 들어가는 그 느낌','8~10시 안개 타이밍이 황금이에요','닭갈비+자전거 춘천 완벽 코스','의암호 자전거 꿀팁 있어요'],
    thumbnails:['안개 낀 의암호 자전거','호수 수면 반사 광각','스카이워크 전경','닭갈비 아침 식사','자전거 대여소'],
    captions:{youtube:'춘천 의암호 자전거 — 안개 낀 날이 진짜예요 🚴\n\n8~10시 안개 타이밍이 황금!\n드라마 속으로 들어가는 그 느낌\n\n📍 강원도 춘천시 의암호 자전거길\n🚴 봄·가을 이른 아침 안개 타이밍 추천\n\n#춘천자전거 #의암호 #강원도여행 #안개자전거 #춘천',instagram:'춘천 의암호 안개 낀 날 자전거가 진짜예요 🚴\n\n드라마 속으로 들어가는 그 느낌 ✨\n8~10시 안개 타이밍이 황금\n\n📍 강원 춘천 의암호\n\n#춘천자전거 #의암호 #강원도여행 #GemKorea',tiktok:'춘천 의암호 자전거 꿀팁 🚴 안개 낀 날 8~10시에 타면 드라마 속이에요! 호수 수면 안개 덮이는 몽환적 순간 // 닭갈비+자전거 춘천 완벽 코스 #춘천자전거 #의암호 #강원도'},
    hashtags:{korean:['#한국여행','#강원도여행','#춘천여행','#자전거','#GemKorea'],place_specific:['#의암호자전거','#춘천안개자전거','#드라마배경','#춘천완벽코스']}
  },
  {
    experience_id:'EX-JJ-CYC-001', experience_name:'제주 올레길 트레킹 (7코스 외돌개)', category_sub:'자연체험', region:'제주특별자치도',
    script_30s:'오늘은 제주 올레길 7코스를 걸었어요. 외돌개부터 월평까지예요. 근데 아무도 안 알려주는 게 있어요 — 올레길 걷다 보면 올레 표시가 있어요. 파란 화살표 방향으로만 가면 돼요. 그 표시를 모르면 길을 잃어요. 너무 표시 시스템이 완벽하다는 게 좋았습니다.',
    script_60s:'오늘은 제주 올레길 7코스 외돌개에서 월평까지 트레킹을 했어요. 제주 올레길은 제주도 해안선을 따라 총 26개 코스로 구성된 제주 최고의 걷기 코스예요. 7코스는 기기묘묘한 바위와 쪽빛 바다가 연속으로 나오는 가장 인기 있는 구간이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 올레길을 처음 걷는 사람들이 자주 하는 실수가 길을 잃는 거예요. 올레길에는 파란색과 주황색 두 가지 화살표 표시가 있어요. 파란 화살표는 정방향, 주황색 화살표는 역방향이에요. 이 표시를 보고 방향을 따라가면 어디서도 길을 잃지 않아요. 바닥·벽·나무에 다 붙어있어요. 이 표시 시스템만 알면 지도 없이도 올레길 어떤 코스든 완주할 수 있어요. 너무 표시 하나가 길을 만들어준다는 게 좋았습니다.',
    secret_tip:'올레 표시 시스템 = 파란 화살표(정방향) + 주황 화살표(역방향) — 바닥·벽·나무에 모두 표시. 지도 없이 표시만 따라가면 완주 가능. 7코스 외돌개~월평 가장 인기 구간. 세이프하우스 도장 찍기',
    filming_guide:'올레 파란 화살표 클로즈업. 기기묘묘한 바위와 쪽빛 바다 광각. 세이프하우스 도장 찍는 장면.',
    broll_ideas:['올레 파란 화살표 클로즈업','기기묘묘 바위 쪽빛 바다 광각','세이프하우스 도장 찍기','외돌개 바위 해안','월평 도착 완주 표정'],
    hooks:['올레 파란 화살표 방향으로만 가면 돼요','이 표시 알면 길 못 잃어요','지도 없이 올레길 완주하는 법','7코스 외돌개~월평 가장 인기','제주 올레길 초보 꿀팁'],
    thumbnails:['올레 파란 화살표 클로즈업','기기묘묘 바위와 바다','세이프하우스 도장 찍기','외돌개 해안','완주 표정'],
    captions:{youtube:'제주 올레길 7코스 — 파란 화살표 방향으로만 가면 돼요 🚶\n\n이 표시 알면 지도 없이 완주!\n외돌개~월평 제주 올레 최고 인기 구간\n\n📍 제주 서귀포시 외돌개~월평 올레 7코스\n🚶 파란 화살표=정방향 / 주황=역방향\n\n#제주올레길 #올레7코스 #제주여행 #외돌개 #트레킹',instagram:'제주 올레길 7코스 파란 화살표 방향으로만 가면 돼요 🚶\n\n지도 없이 완주하는 법 ✨\n외돌개~월평 제주 최고 인기 구간\n\n📍 제주 외돌개~월평\n\n#제주올레길 #올레7코스 #제주여행 #GemKorea',tiktok:'제주 올레길 꿀팁 🚶 파란 화살표 방향으로만 가면 길 못 잃어요! 바닥·벽·나무에 다 표시됨 // 7코스 외돌개~월평 가장 인기 구간 #제주올레길 #올레7코스 #제주여행'},
    hashtags:{korean:['#한국여행','#제주여행','#올레길','#트레킹','#GemKorea'],place_specific:['#제주올레길7코스','#외돌개트레킹','#올레표시시스템','#지도없이완주']}
  },
  {
    experience_id:'EX-SE-WED-001', experience_name:'서울 전통 혼례 체험 (남산한옥마을)', category_sub:'문화예술', region:'서울특별시',
    script_30s:'오늘은 남산한옥마을에서 전통 혼례를 체험했어요. 사모관대+원삼 입는 거예요. 근데 아무도 안 알려주는 게 있어요 — 합근례가 있어요. 신랑신부가 표주박을 나눠 마시는 의식이에요. 그 표주박이 하나를 반으로 나눈 거예요. 두 사람이 하나가 된다는 뜻이에요. 너무 의식이 이렇게 깊은 줄 몰랐어서 좋았습니다.',
    script_60s:'오늘은 서울 남산한옥마을에서 전통 혼례 체험을 했어요. 사모관대 신랑 의복과 원삼 신부 의복을 입고 조선 시대 전통 혼례 절차를 재현하는 체험이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 전통 혼례 절차 중 합근례가 있어요. 표주박을 반으로 갈라 신랑과 신부가 각각 마시는 의식이에요. 하나의 표주박을 둘로 나누는 거예요. 그 두 쪽은 다시 합치면 하나가 되는데, 그게 두 사람이 하나가 된다는 의미예요. 이 의식의 의미를 알고 하면 단순한 코스프레가 아니라 진짜 결혼 의식의 철학을 느끼게 돼요. 외국인 커플들이 이 체험에서 가장 감동받는 순간이 합근례예요. 너무 의식 하나에 이런 깊은 뜻이 있다는 게 좋았습니다.',
    secret_tip:'합근례 = 하나 표주박을 반으로 나눠 마시기 — 두 사람이 하나 된다는 철학. 외국인 커플 가장 감동받는 순간. 이 의미 알고 하면 달라짐. 남산한옥마을 입장료 무료',
    filming_guide:'사모관대+원삼 맞절 전통미. 합근례 표주박 나눠 마시는 순간. 남산한옥마을 고택 배경 전경.',
    broll_ideas:['사모관대 원삼 맞절 전통미','합근례 표주박 나눠 마시기','남산한옥마을 고택 배경','신랑신부 전통 행렬','한복 의상 클로즈업'],
    hooks:['합근례가 표주박 나눠 마시는 거예요','하나를 둘로 — 두 사람이 하나 된다는 뜻','이 의미 알면 달라져요','외국인 커플 가장 감동받는 순간','남산한옥마을 전통 혼례 꿀팁'],
    thumbnails:['사모관대 원삼 맞절','합근례 표주박 나누기','남산한옥마을 고택','신랑신부 행렬','한복 의상 클로즈업'],
    captions:{youtube:'남산 전통 혼례 — 합근례 표주박 의미 알면 달라요 💒\n\n하나를 반으로 나눠 — 두 사람이 하나 된다는 뜻!\n외국인 커플 가장 감동받는 순간\n\n📍 서울 중구 남산한옥마을\n💒 입장 무료 / 토·일·공휴일 체험 운영\n\n#남산한옥마을전통혼례 #서울여행 #전통혼례 #합근례 #외국인커플',instagram:'남산한옥마을 전통 혼례 합근례 의미 알면 달라요 💒\n\n표주박 반으로 나눠 두 사람이 하나 ✨\n외국인 커플 가장 감동받는 순간\n\n📍 서울 남산한옥마을\n\n#남산한옥마을 #전통혼례 #합근례 #서울여행 #GemKorea',tiktok:'남산 전통 혼례 꿀팁 💒 합근례에서 표주박을 반으로 나눠 마셔요! 하나를 둘로 — 두 사람이 하나 된다는 뜻 // 이 의미 알면 체험이 달라져요 #남산전통혼례 #서울여행 #전통혼례'},
    hashtags:{korean:['#한국여행','#서울여행','#전통혼례','#남산한옥마을','#GemKorea'],place_specific:['#남산한옥마을전통혼례','#합근례표주박','#사모관대원삼','#외국인커플체험']}
  },
  {
    experience_id:'EX-GB-NIG-001', experience_name:'경주 동궁과 월지 야간 개장', category_sub:'야경/야간투어', region:'경상북도',
    script_30s:'오늘은 경주 동궁과 월지 야간에 왔어요. 신라 왕실 연못이에요. 근데 아무도 안 알려주는 게 있어요 — 월지 수면에 반사되는 건물이 거울처럼 보여요. 그 대칭 구도 사진이 경주 최고 야경 사진이에요. 어느 위치에서 찍어야 하는지가 핵심이에요. 너무 반사가 완벽한 곳이라서 좋았습니다.',
    script_60s:'오늘은 경북 경주 동궁과 월지(옛 안압지)에 야간 개장 시간에 왔어요. 신라 문무왕 때 조성된 왕실 연못으로 야간에 조명이 켜지면 수면에 전각이 완벽하게 반사돼요. 근데 아무도 안 알려주는 꿀팁 하나 — 동궁과 월지 야경 반사 사진을 찍는 최적 위치가 따로 있어요. 연못 남쪽 낚시하는 석상 근처 포인트에서 찍으면 전각 3채와 수면 반사가 완벽한 대칭 구도로 나와요. 이 포인트에서 찍으면 마치 공중에 뜬 것 같은 느낌의 야경 사진이 나와요. 이 포인트를 아는 사람과 모르는 사람의 사진이 완전히 달라요. 맑고 바람 없는 날 수면이 거울처럼 잔잔할 때 최고예요. 너무 반사가 완벽한 그 구도라서 좋았습니다.',
    secret_tip:'남쪽 낚시 석상 근처 = 전각 3채+수면 반사 완벽 대칭 포인트 — 경주 최고 야경 사진. 바람 없는 맑은 날 수면 거울같이 잔잔할 때. 이 포인트 아는 사람 사진이 달라짐',
    filming_guide:'낚시 석상 근처 전각 3채+수면 반사 대칭 광각. 야간 조명 전각 클로즈업. 연못 보드 위 반사 구도.',
    broll_ideas:['낚시 석상 근처 대칭 반사 광각','야간 조명 전각 클로즈업','연못 보드 위 반사 구도','동궁과 월지 전체 야경','신라 기와 처마 클로즈업'],
    hooks:['동궁과 월지 반사 포인트가 따로 있어요','낚시 석상 근처가 최적이에요','대칭 구도 경주 최고 야경 사진','바람 없는 날이 거울같이 잔잔해요','경주 야경 꿀팁 있어요'],
    thumbnails:['대칭 반사 광각 포인트','야간 조명 전각','보드 위 반사 구도','전체 야경','신라 기와 처마'],
    captions:{youtube:'경주 동궁과 월지 야경 — 반사 포인트가 따로 있어요 🌙\n\n낚시 석상 근처 전각 3채+수면 반사 완벽 대칭!\n이 포인트 아는 사람 사진이 달라요\n\n📍 경북 경주시 동궁과 월지\n🌙 22:00까지 야간 개장 / 바람 없는 날 = 거울 수면\n\n#동궁과월지야경 #경주 #경북여행 #경주야경 #반사포인트',instagram:'경주 동궁과 월지 반사 포인트 알아요? 🌙\n\n낚시 석상 근처에서 찍으면 대칭이 완벽해요 ✨\n이 포인트 아는 사람 사진이 달라요\n\n📍 경북 경주 동궁과 월지\n\n#동궁과월지 #경주야경 #경북여행 #야경포인트 #GemKorea',tiktok:'경주 동궁과 월지 꿀팁 🌙 낚시 석상 근처에서 찍으면 전각 반사 완벽 대칭이에요! 바람 없는 날 수면이 거울같아요 // 이 포인트 아는 사람 사진이 완전 달라요 #동궁과월지 #경주야경 #경북여행'},
    hashtags:{korean:['#한국여행','#경북여행','#경주여행','#야경','#GemKorea'],place_specific:['#동궁과월지야경','#수면반사포인트','#경주야경포인트','#낚시석상근처']}
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
