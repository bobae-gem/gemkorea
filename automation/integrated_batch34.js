const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const now = new Date().toISOString().slice(0,19);

const newExps = [
  {experience_id:'EX-GW-NAT-063',name:'고성 화진포 호수+이승만 별장',category_main:'문화/체험',category_sub:'역사 체험',region_main:'GW',region_sub:'강원특별자치도 고성군',address:'강원특별자치도 고성군 현내면 화진포길 280',lat:38.3972,lng:128.4808,price:'성인 3,000원',duration:'2~3시간',reservation_required:false,target_user:['가족','개인'],nearby_places:[],related_heritage_ids:[],short_description:'고성 화진포 석호에서 이승만·이기붕·김일성의 별장을 탐방하는 역사 체험이다. 남북 최고 지도자들이 동시에 사용했던 별장들이 한 호수 주변에 모여있는 독특한 역사 현장을 방문한다.',source_urls:['https://www.goseong.org/'],data_confidence:'high',tags:['화진포별장','고성','강원','이승만','화진포','남북별장','한반도역사'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~17:00',phone:'033-680-3677'},
  {experience_id:'EX-JN-NAT-074',name:'순천 낙안읍성 전통 체험',category_main:'문화/체험',category_sub:'역사 체험',region_main:'JN',region_sub:'전라남도 순천시',address:'전라남도 순천시 낙안면 낙안읍성',lat:34.9825,lng:127.3875,price:'성인 4,000원',duration:'2~3시간',reservation_required:false,target_user:['가족','개인','외국인'],nearby_places:[],related_heritage_ids:[],short_description:'낙안읍성 민속마을에서 전통 체험을 즐기는 코스다. 줄다리기·팽이치기·윷놀이·전통 의상 착용 등 조선 시대 서민 생활 체험을 즐기며 실제 주민이 거주하는 살아있는 민속 마을 문화를 이해한다.',source_urls:['https://www.nagan.or.kr/'],data_confidence:'high',tags:['낙안읍성체험','순천','전남','전통체험','줄다리기','살아있는민속','윷놀이'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00',phone:'061-749-8831'},
  {experience_id:'EX-GN-NAT-071',name:'통영 달아 일몰 전망대',category_main:'문화/체험',category_sub:'자연체험',region_main:'GN',region_sub:'경상남도 통영시',address:'경상남도 통영시 산양읍 달아길 165',lat:34.8256,lng:128.3933,price:'무료',duration:'1~2시간',reservation_required:false,target_user:['커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'통영 달아 공원 전망대에서 한려해상국립공원 다도해 일몰을 감상하는 체험이다. 150여 개 섬이 파노라마로 펼쳐지는 경남 최고 일몰 전망대로 붉게 물드는 다도해 석양이 압도적이다.',source_urls:['https://www.tongyeong.go.kr/'],data_confidence:'high',tags:['달아전망대','통영','경남','다도해일몰','한려해상','섬파노라마','석양'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (무료)',phone:'055-650-4681'},
  {experience_id:'EX-GG-NAT-065',name:'양주 회암사지+북한산 한북정맥',category_main:'문화/체험',category_sub:'역사 체험',region_main:'GG',region_sub:'경기도 양주시',address:'경기도 양주시 회천읍 회암사길 281',lat:37.8492,lng:127.0647,price:'회암사지 무료',duration:'2~3시간',reservation_required:false,target_user:['개인','가족'],nearby_places:[],related_heritage_ids:[],short_description:'고려 말 최대 사찰 회암사지와 주변 한북정맥 트레킹을 즐기는 역사+자연 코스다. 무학대사·이성계가 주석했던 회암사 터를 탐방하고 북한강 조망이 아름다운 한북정맥 능선을 걷는다.',source_urls:['https://www.yangju.go.kr/'],data_confidence:'high',tags:['회암사지','양주','경기','무학대사','이성계','역사탐방','한북정맥'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (무료)',phone:'031-8082-4245'},
  {experience_id:'EX-JN-NAT-075',name:'여수 향일암 새벽 일출',category_main:'문화/체험',category_sub:'역사 체험',region_main:'JN',region_sub:'전라남도 여수시',address:'전라남도 여수시 돌산읍 향일암로 60',lat:34.6539,lng:127.7547,price:'성인 2,000원',duration:'2~3시간',reservation_required:false,target_user:['커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'한국 4대 기도 명소 여수 향일암에서 새벽 일출을 감상하는 특별 체험이다. 절벽 위 사찰에서 바라보는 남해 다도해 일출이 압도적이며 새벽 예불 소리와 함께 맞이하는 일출이 특히 감동적이다.',source_urls:['https://www.hyangiram.or.kr/'],data_confidence:'high',tags:['향일암일출','여수','전남','한국4대기도','다도해일출','새벽예불','절벽사찰'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'04:30~20:00',phone:'061-644-4742'},
  {experience_id:'EX-GN-NAT-072',name:'합천 해인사 홍류동+단풍',category_main:'문화/체험',category_sub:'자연체험',region_main:'GN',region_sub:'경상남도 합천군',address:'경상남도 합천군 가야면 홍류동 계곡',lat:35.7900,lng:128.0992,price:'무료',duration:'2~3시간',reservation_required:false,target_user:['가족','커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'합천 해인사 가는 길 홍류동 계곡에서 가을 단풍을 감상하는 트레킹 체험이다. 붉게 물든 단풍이 계곡물과 함께 흐르는 홍류동 구간이 합천 최고 단풍 명소로 10월 중순 절정이 된다.',source_urls:['https://www.hc.go.kr/'],data_confidence:'high',tags:['홍류동단풍','해인사','합천','경남','계곡단풍','가야산','가을명소'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'10월 단풍 시즌 (무료)',phone:'055-930-3400'},
  {experience_id:'EX-GG-NAT-066',name:'연천 고대산 한탄강 코스',category_main:'문화/체험',category_sub:'자연체험',region_main:'GG',region_sub:'경기도 연천군',address:'경기도 연천군 고대산 입구',lat:38.0917,lng:127.2222,price:'무료',duration:'3~4시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'연천 고대산 등산과 한탄강 주상절리 트레일을 하루에 즐기는 연천 완벽 코스다. 고대산 정상에서 내려다보는 한탄강 협곡 전경과 하산 후 한탄강 트레일을 걷는 경기도 최고 자연 여행이다.',source_urls:['https://www.yeoncheon.go.kr/'],data_confidence:'high',tags:['고대산한탄강','연천','경기','고대산','한탄강주상절리','코스여행','협곡'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'연중 (무료)',phone:'031-839-2562'},
  {experience_id:'EX-JN-NAT-076',name:'고창 내장산 우화정 단풍',category_main:'문화/체험',category_sub:'자연체험',region_main:'JN',region_sub:'전라북도 고창군',address:'전라북도 정읍시 내장동 내장산 우화정',lat:35.4869,lng:126.8836,price:'국립공원 무료',duration:'1~2시간',reservation_required:false,target_user:['커플','개인','가족'],nearby_places:[],related_heritage_ids:[],short_description:'내장산 우화정 연못에서 가을 단풍이 수면에 반영되는 절경을 감상하는 체험이다. 내장사 입구부터 우화정까지 이어지는 단풍 터널과 연못 반영이 어우러지는 장면이 내장산 단풍 하이라이트다.',source_urls:['https://naejang.knps.or.kr/'],data_confidence:'high',tags:['우화정단풍','내장산','정읍','전북','단풍반영','연못','한국단풍1번지'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'10~11월 단풍 시즌 (무료)',phone:'063-538-7875'},
  {experience_id:'EX-GN-NAT-073',name:'밀양 위양지 이팝나무 봄',category_main:'문화/체험',category_sub:'자연체험',region_main:'GN',region_sub:'경상남도 밀양시',address:'경상남도 밀양시 부북면 위양리 위양못',lat:35.4886,lng:128.7861,price:'무료',duration:'1시간',reservation_required:false,target_user:['커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'밀양 위양지 연못 주변 이팝나무가 5월에 하얀 꽃을 피우는 봄 명소를 탐방하는 체험이다. 300년 된 이팝나무 다섯 그루가 연못가에 하얀 꽃을 피워 반영이 이루어지는 경남 최고의 봄 포토존이다.',source_urls:['https://www.miryang.go.kr/'],data_confidence:'high',tags:['위양지이팝나무','밀양','경남','이팝꽃','연못반영','5월꽃','포토존'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'5월 이팝나무 개화 시즌 (무료)',phone:'055-359-5638'},
  {experience_id:'EX-GG-NAT-067',name:'인천 소래포구 새우젓+어시장',category_main:'문화/체험',category_sub:'지역 먹거리',region_main:'GG',region_sub:'인천광역시 남동구',address:'인천광역시 남동구 논현동 소래포구',lat:37.3983,lng:126.7244,price:'무료 입장',duration:'1~2시간',reservation_required:false,target_user:['가족','개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'인천 소래포구 어시장에서 새우젓·꽃게·낙지 등 서해 해산물을 구경하고 맛보는 먹거리 투어다. 서울 근교 30분 거리 서해안 어시장으로 수도권 최대 규모 수산물 직판 시장이다.',source_urls:['https://www.namdong.go.kr/'],data_confidence:'high',tags:['소래포구','인천','서해해산물','새우젓','꽃게','수산물직판','서울근교'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'06:00~21:00',phone:'032-441-6266'},
  {experience_id:'EX-JN-NAT-077',name:'담양 창평 전통 마을 투어',category_main:'문화/체험',category_sub:'역사 체험',region_main:'JN',region_sub:'전라남도 담양군',address:'전라남도 담양군 창평면 창평리',lat:35.2267,lng:126.9950,price:'무료',duration:'1~2시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'슬로시티 1호로 지정된 담양 창평 한옥 마을을 탐방하는 역사 문화 체험이다. 조선 시대 유학자 가문들이 형성한 전통 한옥 마을에서 창평 한과·막걸리·쌀엿 전통 먹거리도 함께 즐긴다.',source_urls:['https://www.damyang.go.kr/'],data_confidence:'high',tags:['창평슬로시티','담양','전남','전통마을','한옥','창평한과','슬로시티'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (무료)',phone:'061-380-3000'},
  {experience_id:'EX-GN-NAT-074',name:'경주 황룡사지+국립경주박물관',category_main:'문화/체험',category_sub:'역사 체험',region_main:'GB',region_sub:'경상북도 경주시',address:'경상북도 경주시 구황동 황룡사지',lat:35.8406,lng:129.2256,price:'박물관 무료',duration:'2~3시간',reservation_required:false,target_user:['가족','개인','외국인'],nearby_places:[],related_heritage_ids:[],short_description:'신라 최대 사찰 황룡사지와 국립경주박물관을 연계하는 역사 탐방이다. 6세기에 지어진 대형 사찰 황룡사 터에서 신라 불교 문화를 이해하고 박물관에서 출토 유물을 관람하는 경주 필수 역사 코스다.',source_urls:['https://gyeongju.museum.go.kr/'],data_confidence:'high',tags:['황룡사지','국립경주박물관','경주','경북','신라','황룡사','무료'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'박물관 09:00~18:00 (무료)',phone:'054-740-7500'}
];

const newShorts = [
  {
    experience_id:'EX-JJ-AGR-002', experience_name:'제주 천혜향 귤 따기 체험', category_sub:'농촌 체험', region:'제주특별자치도',
    script_30s:'오늘은 제주 천혜향 농장에서 귤을 땄어요. 천혜향은 한라봉·온주밀감·청견의 교배종이에요. 근데 아무도 안 알려주는 게 있어요 — 천혜향은 껍질이 얇아요. 그래서 쉽게 상해요. 직접 딴 것이 당일에 먹어야 해요. 너무 신선함이 이렇게 귀하다는 게 좋았습니다.',
    script_60s:'오늘은 제주 서귀포 남원읍 천혜향 농장에서 귤 따기 체험을 했어요. 천혜향은 12~2월 수확하는 프리미엄 감귤이에요. 마트에서 비싸게 팔리는 이유가 있어요. 근데 아무도 안 알려주는 꿀팁 하나 — 천혜향의 비밀이 껍질에 있어요. 천혜향은 껍질이 일반 귤보다 훨씬 얇아요. 그래서 상처가 쉽게 나고 빨리 상해요. 이것이 마트에서 비싼 이유이기도 해요. 운반·보관이 까다롭거든요. 반면 직접 농장에서 딴 것을 당일에 먹으면 껍질이 상하기 전 가장 신선한 상태예요. 겉껍질이 얇으니 쉽게 벗겨지고 안의 과육이 꽉 차있어요. 농장 현장에서 방금 딴 것을 먹는 그 신선함이 마트 천혜향과 완전히 달라요. 너무 신선함이 이렇게 귀하다는 게 좋았습니다.',
    secret_tip:'천혜향 껍질이 얇아 당일 섭취 최선 — 껍질 얇아서 상처 쉽고 빨리 상함. 마트에서 비싼 이유가 이것. 현장 당일 신선함이 완전히 다름. 12~2월 천혜향 시즌',
    filming_guide:'천혜향 얇은 껍질 클로즈업. 방금 딴 천혜향 즉석 먹기 표정. 서귀포 귤 농장 전경.',
    broll_ideas:['천혜향 얇은 껍질 클로즈업','방금 딴 즉석 먹기 표정','서귀포 귤 농장 전경','천혜향 꼭지 가위질','농장에서 당일 먹기'],
    hooks:['천혜향 껍질이 이렇게 얇아요','당일에 먹어야 최고예요','마트에서 비싼 이유가 이거예요','신선함이 얼마나 귀한지 알았어요','제주 천혜향 따기 꿀팁'],
    thumbnails:['천혜향 얇은 껍질','즉석 먹기 표정','서귀포 농장 전경','천혜향 꼭지 가위','당일 먹기'],
    captions:{youtube:'제주 천혜향 따기 — 껍질이 이렇게 얇아요 🍊\n\n당일 먹어야 최고 신선함!\n마트에서 비싼 이유가 이거예요\n\n📍 제주 서귀포시 남원읍 천혜향 농장\n🍊 12~2월 천혜향 시즌\n\n#제주천혜향 #서귀포 #제주여행 #천혜향따기 #당일신선',instagram:'제주 천혜향 따기 껍질이 이렇게 얇아요 🍊\n\n당일 먹어야 최고 신선함 ✨\n마트에서 비싼 이유가 껍질 얇아서\n\n📍 제주 서귀포 천혜향 농장\n\n#제주천혜향 #서귀포 #제주여행 #천혜향 #GemKorea',tiktok:'제주 천혜향 꿀팁 🍊 껍질이 얇아서 당일 먹어야 해요! 마트에서 비싼 이유가 껍질 얇아 상처 쉽고 운반 까다롭기 때문 // 농장 방금 딴 것이 마트랑 완전 달라요 #제주천혜향 #서귀포 #제주여행'},
    hashtags:{korean:['#한국여행','#제주여행','#서귀포','#천혜향','#GemKorea'],place_specific:['#제주천혜향따기','#천혜향껍질얇은이유','#당일신선함','#마트비싼이유']}
  },
  {
    experience_id:'EX-GG-NIG-004', experience_name:'인천 월미도 문화의 거리 야경', category_sub:'야경/야간투어', region:'인천광역시',
    script_30s:'오늘은 인천 월미도 야경을 봤어요. 근데 아무도 안 알려주는 게 있어요 — 월미도 디스코 팡팡이 한국 최초 어트랙션이에요. 1980년대부터 있었어요. 그 시절 아이들의 추억이에요. 너무 어트랙션이 역사가 됐다는 게 좋았습니다.',
    script_60s:'오늘은 인천 월미도 문화의 거리 야경을 즐겼어요. 인천항 바로 옆 월미도 해안을 따라 놀이공원·횟집·카페·유람선이 모여있는 인천 대표 야경 명소예요. 근데 아무도 안 알려주는 꿀팁 하나 — 월미도의 역사적 사실이 있어요. 월미도 디스코 팡팡 어트랙션이 한국 최초의 회전형 놀이기구 중 하나예요. 1980년대부터 운영되어 온 유서 깊은 어트랙션이에요. 지금의 30~40대 어른들이 어렸을 때 부모님 손 잡고 처음 탔던 어트랙션이에요. 이 사실을 알면 단순한 놀이기구가 아니라 세대를 이어온 추억의 역사예요. 저녁에 월미도 조명이 켜지면 바이킹·관람차·유람선 조명이 어우러져 인천 최고의 야경이 펼쳐져요. 너무 어트랙션이 역사가 된 장소라서 좋았습니다.',
    secret_tip:'월미도 디스코 팡팡 = 1980년대부터 한국 최초 회전 어트랙션 중 하나 — 30~40대 어른들의 어린 시절 추억. 어트랙션이 역사가 된 곳. 야경 최고: 조명 켜진 후 저녁 19~21시',
    filming_guide:'월미도 야경 조명 바이킹+관람차 전체 광각. 디스코 팡팡 어트랙션 역사적 의미 설명. 인천항 배경 야경.',
    broll_ideas:['월미도 야경 바이킹+관람차 광각','디스코 팡팡 역사 설명','인천항 배경 야경','유람선 조명','해안 야시장 분위기'],
    hooks:['월미도 디스코 팡팡이 40년 역사예요','한국 최초 어트랙션 중 하나예요','30~40대 어른들 어릴 때 추억이에요','어트랙션이 역사가 된 곳이에요','인천 월미도 야경 꿀팁'],
    thumbnails:['야경 바이킹+관람차 광각','디스코 팡팡 역사','인천항 배경 야경','유람선 조명','야시장 분위기'],
    captions:{youtube:'인천 월미도 야경 — 디스코 팡팡이 40년 역사예요 🎡\n\n한국 최초 회전 어트랙션!\n30~40대 어른들의 어릴 때 추억\n\n📍 인천광역시 중구 월미도 문화의 거리\n🎡 야경 최고: 조명 켜진 19~21시\n\n#인천월미도야경 #인천여행 #월미도 #디스코팡팡역사 #야경',instagram:'인천 월미도 야경 디스코 팡팡이 40년 역사예요 🎡\n\n한국 최초 어트랙션 중 하나 ✨\n30~40대 어린 시절 추억의 장소\n\n📍 인천 월미도 문화의 거리\n\n#인천월미도 #인천여행 #월미도야경 #디스코팡팡 #GemKorea',tiktok:'인천 월미도 야경 꿀팁 🎡 디스코 팡팡이 1980년대부터 한국 최초 어트랙션이에요! 30~40대 어른들 어릴 때 추억 // 어트랙션이 역사가 된 월미도 야경 #인천월미도 #인천여행 #야경'},
    hashtags:{korean:['#한국여행','#인천여행','#월미도','#야경','#GemKorea'],place_specific:['#인천월미도야경','#디스코팡팡40년역사','#한국최초어트랙션','#추억의월미도']}
  },
  {
    experience_id:'EX-JN-AGR-003', experience_name:'담양 죽순 수확 체험', category_sub:'농촌 체험', region:'전라남도',
    script_30s:'오늘은 담양에서 죽순을 캤어요. 대나무에서 나오는 새싹이에요. 근데 아무도 안 알려주는 게 있어요 — 죽순은 하루에 30cm씩 자라요. 그래서 아침에 캐야 해요. 오후엔 이미 30cm 더 자라요. 너무 시간이 이렇게 중요하다는 게 좋았습니다.',
    script_60s:'오늘은 전남 담양 대나무 숲에서 죽순 캐기 체험을 했어요. 4~5월 봄철에 대나무 뿌리에서 솟아나는 새싹이 죽순이에요. 직접 캐서 즉석 요리로 먹는 체험이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 죽순 채취 타이밍이 있어요. 죽순은 하루에 20~30cm씩 자라요. 대나무가 세상에서 가장 빨리 자라는 식물이니까요. 오전에 죽순을 캐야 하는 이유가 이거예요. 죽순이 땅 위로 막 올라온 초기 상태가 가장 부드럽고 맛있어요. 오후가 되면 이미 많이 자라서 식감이 질겨져요. 그래서 현지 농가들은 새벽부터 죽순을 캐요. 오전 9시 이전이 가장 좋은 죽순을 채취할 수 있는 시간이에요. 너무 시간이 이렇게 맛을 결정한다는 게 좋았습니다.',
    secret_tip:'죽순 하루 20~30cm 성장 — 오전 9시 전이 가장 부드럽고 맛있는 죽순. 오후에는 질겨짐. 새벽부터 채취하는 현지 농가 비결. 담양 죽녹원+죽순 채취 세트',
    filming_guide:'죽순 막 솟아오르는 클로즈업. 이른 아침 죽순 채취 손 동작. 즉석 죽순 요리 시식.',
    broll_ideas:['죽순 막 솟아오르는 클로즈업','이른 아침 채취 손 동작','즉석 죽순 요리 시식','대나무 숲 죽순 밭 전경','죽순 크기별 비교'],
    hooks:['죽순은 하루에 30cm 자라요','오전이 가장 부드럽고 맛있어요','오후엔 질겨져요','시간이 맛을 결정해요','담양 죽순 체험 꿀팁'],
    thumbnails:['죽순 솟아오르는 클로즈업','이른 아침 채취','즉석 요리 시식','대나무 숲 전경','크기별 비교'],
    captions:{youtube:'담양 죽순 체험 — 오전이 가장 부드럽고 맛있어요 🎋\n\n하루에 30cm 자라니까 오전이 핵심!\n오후엔 질겨져요\n\n📍 전남 담양군 대나무 죽순 농장\n🎋 4~5월 봄 죽순 시즌\n\n#담양죽순 #담양 #전남여행 #죽순채취 #오전채취핵심',instagram:'담양 죽순 체험 오전이 부드럽고 맛있어요 🎋\n\n하루 30cm 자라서 오전 채취가 핵심 ✨\n오후엔 질겨져요\n\n📍 전남 담양 죽순 농장\n\n#담양죽순 #담양여행 #전남 #죽순 #GemKorea',tiktok:'담양 죽순 꿀팁 🎋 죽순이 하루에 30cm 자라요! 오전 9시 전이 가장 부드럽고 맛있음 // 오후엔 이미 자라서 질겨져요 시간이 맛을 결정해요 #담양죽순 #담양여행 #전남'},
    hashtags:{korean:['#한국여행','#전남여행','#담양여행','#죽순','#GemKorea'],place_specific:['#담양죽순채취','#죽순오전채취','#하루30cm성장','#오전9시전최고']}
  },
  {
    experience_id:'EX-GW-ECO-003', experience_name:'양구 생태식물원 방문', category_sub:'자연체험', region:'강원도',
    script_30s:'오늘은 양구 생태식물원에 왔어요. DMZ 인접 청정 지역이에요. 근데 아무도 안 알려주는 게 있어요 — 양구 식물원에 희귀 고산 식물이 있어요. 서울에선 절대 못 보는 식물들이에요. 민통선 덕분에 살아남은 것들이에요. 너무 분단이 식물을 지켰다는 게 좋았습니다.',
    script_60s:'오늘은 강원도 양구 생태식물원에 왔어요. DMZ 인접 지역에 위치한 자연 생태 식물원이에요. 청정 자연 환경에서 자라는 희귀 식물들을 관찰할 수 있어요. 근데 아무도 안 알려주는 꿀팁 하나 — 양구 생태식물원에 특별한 점이 있어요. 여기는 한국에서 다른 곳에서 보기 힘든 고산 희귀 식물들이 자라고 있어요. 이 식물들이 살아있는 이유가 DMZ 때문이에요. 민통선으로 인간의 접근이 오랫동안 제한됐던 지역이라 희귀 생태계가 보전됐어요. 분단이 아이러니하게 자연을 지킨 거예요. 전쟁과 분단이 만든 아이러니한 생태 보고예요. 해설사와 함께 탐방하면 이 희귀 식물들의 이야기를 더 자세히 들을 수 있어요. 너무 분단이 식물을 지켰다는 아이러니가 좋았습니다.',
    secret_tip:'양구 희귀 식물 = DMZ 분단이 지킨 생태계 — 민통선 접근 제한으로 보전. 분단의 아이러니한 생태 보고. 해설사 동반 탐방 추천. 두타연과 세트 코스',
    filming_guide:'희귀 고산 식물 클로즈업. 해설사 식물 설명 장면. 양구 식물원 전경.',
    broll_ideas:['희귀 고산 식물 클로즈업','해설사 식물 설명','식물원 전경','민통선 DMZ 배경','분단이 지킨 생태 설명'],
    hooks:['DMZ가 희귀 식물을 지켰어요','민통선 덕분에 살아남은 식물들이에요','분단의 아이러니한 생태 보고예요','서울에선 절대 못 보는 식물들','양구 생태식물원 꿀팁'],
    thumbnails:['희귀 고산 식물 클로즈업','해설사 설명','식물원 전경','민통선 배경','분단 생태 설명'],
    captions:{youtube:'양구 생태식물원 — DMZ가 희귀 식물을 지켰어요 🌿\n\n민통선 덕분에 살아남은 식물들!\n분단의 아이러니한 생태 보고\n\n📍 강원도 양구군 생태식물원\n🌿 해설사 동반 탐방 추천\n\n#양구생태식물원 #양구 #강원도여행 #DMZ희귀식물 #분단생태보고',instagram:'양구 생태식물원 DMZ가 희귀 식물 지켰어요 🌿\n\n민통선 덕분에 살아남은 식물들 ✨\n분단의 아이러니한 생태 보고\n\n📍 강원 양구 생태식물원\n\n#양구생태식물원 #양구여행 #강원도 #DMZ식물 #GemKorea',tiktok:'양구 생태식물원 꿀팁 🌿 DMZ 분단이 희귀 식물을 지켰어요! 민통선으로 접근 제한된 덕분에 보전 // 서울에서 절대 못 보는 식물들 #양구생태식물원 #양구여행 #강원도'},
    hashtags:{korean:['#한국여행','#강원도여행','#양구여행','#식물원','#GemKorea'],place_specific:['#양구생태식물원','#DMZ희귀식물','#분단생태보고','#민통선자연보전']}
  },
  {
    experience_id:'EX-GG-CUL-004', experience_name:'의정부 부대찌개 골목 투어', category_sub:'지역 먹거리', region:'경기도',
    script_30s:'오늘은 의정부 부대찌개 거리에 왔어요. 부대찌개 발원지예요. 근데 아무도 안 알려주는 게 있어요 — 의정부 부대찌개와 요즘 부대찌개는 달라요. 의정부 원조는 야채가 더 많아요. 소시지 비율이 낮아요. 역사가 맛을 결정했어요. 너무 원조가 이렇게 다르다는 게 좋았습니다.',
    script_60s:'오늘은 경기도 의정부 부대찌개 거리에 왔어요. 6·25 전쟁 후 미군 부대 음식으로 시작한 부대찌개의 원조 거리예요. 50년 이상 된 노포들이 즐비해요. 근데 아무도 안 알려주는 꿀팁 하나 — 의정부 원조 부대찌개와 요즘 프랜차이즈 부대찌개가 달라요. 의정부 원조 집들은 야채·김치 비율이 높고 소시지·햄 비율이 지금보다 낮았어요. 미군 부대 식품을 구하기 어려웠던 시절 야채와 김치로 양을 늘렸던 역사가 있어요. 지금 프랜차이즈는 소시지·햄을 많이 넣는 방향으로 진화했어요. 의정부 오래된 노포들은 아직 원조 비율을 지키는 집들이 있어요. 그 맛이 달라요. 너무 역사가 맛을 결정한다는 게 좋았습니다.',
    secret_tip:'의정부 원조 부대찌개 = 야채·김치 비율 높고 소시지 적음 — 미군 식품 구하기 어렵던 시절의 역사. 오래된 노포에서 원조 비율 유지. 역사가 맛을 결정. 50년+ 노포 선택',
    filming_guide:'의정부 원조 부대찌개 야채 많은 구성 클로즈업. 오래된 노포 간판 외경. 역사 설명판.',
    broll_ideas:['원조 부대찌개 야채 많은 구성','오래된 노포 간판 외경','역사 설명판','부대찌개 국물 클로즈업','의정부 부대찌개 거리'],
    hooks:['의정부 원조가 지금이랑 달라요','야채가 더 많고 소시지가 적어요','역사가 맛을 결정한 거예요','오래된 노포에서 원조 맛 보세요','의정부 부대찌개 꿀팁'],
    thumbnails:['원조 야채 많은 구성','오래된 노포 간판','역사 설명판','국물 클로즈업','부대찌개 거리'],
    captions:{youtube:'의정부 부대찌개 원조 — 지금이랑 달라요 🍲\n\n야채 많고 소시지 적은 원조 비율!\n역사가 맛을 결정한 거예요\n\n📍 경기도 의정부시 부대찌개 거리\n🍲 50년+ 노포 선택 = 원조 맛\n\n#의정부부대찌개 #의정부 #경기여행 #부대찌개원조 #역사가맛결정',instagram:'의정부 부대찌개 원조가 지금이랑 달라요 🍲\n\n야채 많고 소시지 적은 원조 비율 ✨\n역사가 맛을 결정한 거예요\n\n📍 경기 의정부 부대찌개 거리\n\n#의정부부대찌개 #의정부여행 #경기 #부대찌개 #GemKorea',tiktok:'의정부 부대찌개 꿀팁 🍲 원조가 요즘이랑 달라요! 야채 많고 소시지 적은 비율이 원조 // 역사가 맛을 결정한 거예요 50년+ 노포 선택 #의정부부대찌개 #의정부여행 #경기'},
    hashtags:{korean:['#한국여행','#경기여행','#의정부여행','#부대찌개','#GemKorea'],place_specific:['#의정부부대찌개원조','#원조야채비율','#역사가맛결정','#50년노포']}
  },
  {
    experience_id:'EX-GW-AGR-001', experience_name:'철원 두루미 탐조 투어', category_sub:'자연체험', region:'강원도',
    script_30s:'오늘은 철원 두루미 탐조를 했어요. 수천 마리가 월동해요. 근데 아무도 안 알려주는 게 있어요 — 두루미는 짝을 평생 지켜요. 날아가도 항상 같이 날아요. 그게 두루미 군무의 비밀이에요. 너무 충절이 조류에도 있다는 게 좋았습니다.',
    script_60s:'오늘은 강원도 철원 평야에서 겨울 두루미 탐조를 했어요. 매년 12월~2월 수천 마리의 두루미와 재두루미가 철원에 월동해요. 망원경으로 군무를 관찰하는 특별한 체험이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 두루미에 대해 알면 군무를 보는 시각이 달라져요. 두루미는 평생 같은 짝과 살아가요. 짝을 잃으면 혼자 지내다 서서히 죽는다고 해요. 두루미 군무가 아름다운 이유가 이거예요. 함께 나는 두루미 한 쌍은 반드시 짝이에요. 수천 마리 군무 속에서 각자의 짝과 함께 날아가는 거예요. 이 사실을 알고 두루미 군무를 보면 단순한 새들의 비행이 아니라 수천 쌍의 충절이 보여요. 너무 충절이 조류에도 있다는 게 좋았습니다.',
    secret_tip:'두루미 = 평생 일부일처제 — 짝을 잃으면 홀로 서서히 죽음. 군무 속 각 두루미가 짝과 함께 나는 것. 수천 쌍의 충절이 군무. 이 사실 알면 군무가 달리 보임',
    filming_guide:'두루미 쌍이 함께 날아가는 슬로우. 수천 마리 군무 전체 광각. 짝짓기 춤 클로즈업.',
    broll_ideas:['두루미 쌍이 함께 나는 슬로우','수천 마리 군무 광각','짝짓기 춤 클로즈업','철원 평야 겨울 전경','망원경 탐조 장면'],
    hooks:['두루미가 평생 짝을 지켜요','군무가 수천 쌍의 충절이에요','짝과 항상 함께 날아요','이 사실 알면 군무가 달라 보여요','철원 두루미 탐조 꿀팁'],
    thumbnails:['두루미 쌍이 함께 나는 슬로우','군무 전체 광각','짝짓기 춤','철원 평야 겨울','망원경 탐조'],
    captions:{youtube:'철원 두루미 탐조 — 두루미가 평생 짝을 지켜요 🦢\n\n군무가 수천 쌍의 충절이에요!\n이 사실 알면 군무가 달리 보여요\n\n📍 강원도 철원군 철원 평야\n🦢 12~2월 두루미 월동 시즌\n\n#철원두루미 #철원 #강원도여행 #두루미탐조 #수천쌍충절',instagram:'철원 두루미 군무 평생 짝을 지켜요 🦢\n\n군무가 수천 쌍의 충절이에요 ✨\n이 사실 알면 군무가 달리 보여요\n\n📍 강원 철원 평야\n\n#철원두루미 #철원여행 #강원도 #두루미탐조 #GemKorea',tiktok:'철원 두루미 꿀팁 🦢 두루미가 평생 짝을 지켜요! 군무가 수천 쌍이 함께 날아가는 충절 // 이 사실 알면 군무가 단순한 새 비행이 아니라 충절이 보여요 #철원두루미 #철원여행 #강원도'},
    hashtags:{korean:['#한국여행','#강원도여행','#철원여행','#두루미','#GemKorea'],place_specific:['#철원두루미탐조','#두루미평생일부일처','#군무수천쌍충절','#겨울두루미월동']}
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
