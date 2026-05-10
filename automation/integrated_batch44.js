const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const now = new Date().toISOString().slice(0,19);

const newExps = [
  {experience_id:'EX-GW-NAT-077',name:'철원 두루미 탐조 투어',category_main:'문화/체험',category_sub:'자연체험',region_main:'GW',region_sub:'강원특별자치도 철원군',address:'강원특별자치도 철원군 철원읍 탐조대',lat:38.1769,lng:127.3100,price:'무료',duration:'2~3시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'강원 철원 한탄강 일원에서 두루미·재두루미 탐조를 즐기는 겨울 체험이다. 겨울 철원 평야에 시베리아에서 날아온 두루미 수천 마리가 월동하는 장면을 관찰하는 국내 최고 두루미 탐조지다.',source_urls:['https://www.cwg.go.kr/'],data_confidence:'high',tags:['철원두루미탐조','철원','강원','두루미','재두루미','겨울탐조','DMZ'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'seasonal',operating_hours:'11~2월 겨울 월동 시즌',phone:'033-450-5559'},
  {experience_id:'EX-JN-CUL-050',name:'남원 춘향 테마파크',category_main:'문화/체험',category_sub:'문화투어',region_main:'JN',region_sub:'전라북도 남원시',address:'전라북도 남원시 요천로 1861-5 춘향테마파크',lat:35.4072,lng:127.3919,price:'성인 3,000원',duration:'2시간',reservation_required:false,target_user:['커플','가족'],nearby_places:[],related_heritage_ids:[],short_description:'판소리 춘향전의 배경지 전북 남원에 조성된 춘향 테마파크를 탐방하는 문화 체험이다. 광한루원 인접 테마파크에서 춘향과 이몽룡의 사랑 이야기를 입체적으로 체험하고 한옥 드레스 체험도 즐길 수 있다.',source_urls:['https://www.namwon.go.kr/'],data_confidence:'high',tags:['남원춘향테마파크','남원','전북','춘향전','광한루원','한옥드레스','사랑이야기'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00',phone:'063-620-6800'},
  {experience_id:'EX-GN-NAT-087',name:'합천 황매산 철쭉 트레킹',category_main:'문화/체험',category_sub:'자연체험',region_main:'GN',region_sub:'경상남도 합천군',address:'경상남도 합천군 가회면 황매산로 711-5',lat:35.5181,lng:128.0308,price:'무료',duration:'2~3시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'경남 합천 황매산에서 5월 철쭉 군락을 감상하는 트레킹이다. 국내 최대 규모 산상 철쭉 군락으로 황매산 정상 일대 5월 초 분홍빛 철쭉과 초록 초원이 어우러지는 장관이 경남 최고 봄 트레킹 코스다.',source_urls:['https://www.hapcheon.go.kr/'],data_confidence:'high',tags:['합천황매산철쭉','합천','경남','황매산','철쭉','5월봄꽃','산상초원'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'5월 철쭉 시즌 (무료)',phone:'055-930-3211'},
  {experience_id:'EX-GG-CUL-079',name:'오산 독산성 역사 트레킹',category_main:'문화/체험',category_sub:'역사 체험',region_main:'GG',region_sub:'경기도 오산시',address:'경기도 오산시 독산성로 112 독산성',lat:37.1514,lng:127.0547,price:'무료',duration:'1~2시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'경기 오산 독산성에서 역사 트레킹을 즐기는 체험이다. 임진왜란 때 권율 장군이 물 부족 위기를 쌀로 말을 씻어 적을 속인 작전이 성공한 역사적 전략지 독산성에서 성곽 걷기와 역사 체험을 즐긴다.',source_urls:['https://www.osan.go.kr/'],data_confidence:'high',tags:['독산성','오산','경기','임진왜란','권율','쌀말씻기','역사'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (무료)',phone:'031-374-6679'},
  {experience_id:'EX-JB-NAT-068',name:'부안 채석강 낙조',category_main:'문화/체험',category_sub:'자연체험',region_main:'JB',region_sub:'전라북도 부안군',address:'전라북도 부안군 변산면 채석강길 일대',lat:35.6786,lng:126.5167,price:'무료',duration:'1시간',reservation_required:false,target_user:['커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'전북 부안 변산반도의 채석강에서 서해 낙조를 감상하는 체험이다. 수만 개 퇴적암 지층이 만든 거대한 절벽 채석강에서 서해 일몰이 아름다운 전북 최고 낙조 명소로 간조 때 절벽 앞 걸을 수 있다.',source_urls:['https://www.buan.go.kr/'],data_confidence:'high',tags:['부안채석강낙조','부안','전북','채석강','서해낙조','변산반도','퇴적암절벽'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'일몰 전 방문 (썰물 시간 확인)',phone:'063-580-4534'},
  {experience_id:'EX-GW-CUL-070',name:'원주 치악산 상원사 트레킹',category_main:'문화/체험',category_sub:'역사 체험',region_main:'GW',region_sub:'강원특별자치도 원주시',address:'강원특별자치도 원주시 소초면 치악산로 1026',lat:37.3561,lng:128.0583,price:'성인 2,500원',duration:'3~4시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'강원 원주 치악산 국립공원에서 상원사까지 트레킹하는 체험이다. 꿩의 은혜 보은 설화의 배경지 치악산에서 국립공원 자연과 천년 고찰 상원사를 함께 탐방하는 역사·자연 트레킹 코스다.',source_urls:['https://www.knps.or.kr/'],data_confidence:'high',tags:['치악산상원사','원주','강원','치악산','상원사','꿩보은설화','국립공원'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중',phone:'033-730-9900'},
  {experience_id:'EX-JN-NAT-095',name:'여수 이순신 광장 야경',category_main:'문화/체험',category_sub:'야경/야간투어',region_main:'JN',region_sub:'전라남도 여수시',address:'전라남도 여수시 수정동 이순신광장 일대',lat:34.7386,lng:127.7467,price:'무료',duration:'1~2시간',reservation_required:false,target_user:['커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'여수 돌산대교와 이순신 광장에서 야경을 감상하는 체험이다. 여수의 밤바다 노래로 유명한 여수 이순신 광장 야경과 돌산대교 조명이 어우러지는 여수 대표 야경 코스다.',source_urls:['https://www.yeosu.go.kr/'],data_confidence:'high',tags:['여수이순신광장야경','여수','전남','돌산대교','야경','여수밤바다','이순신광장'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'일몰~23:00 (무료)',phone:'061-659-3986'},
  {experience_id:'EX-GN-CUL-075',name:'진주 촉석루 야경',category_main:'문화/체험',category_sub:'야경/야간투어',region_main:'GN',region_sub:'경상남도 진주시',address:'경상남도 진주시 본성동 촉석루',lat:35.1883,lng:128.1028,price:'무료',duration:'1시간',reservation_required:false,target_user:['커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'남강변 절벽 위 경남 진주 촉석루의 야경을 감상하는 체험이다. 임진왜란 논개의 순국지 진주성 촉석루가 남강 야경과 어우러지는 경남 최고 야경 명소로 개천예술제 기간 불꽃놀이도 있다.',source_urls:['https://www.jinju.go.kr/'],data_confidence:'high',tags:['진주촉석루야경','진주','경남','촉석루','남강','논개','야경'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'일몰~22:00 (무료)',phone:'055-749-2480'},
  {experience_id:'EX-GB-CUL-047',name:'경주 불국사 야경',category_main:'문화/체험',category_sub:'야경/야간투어',region_main:'GB',region_sub:'경상북도 경주시',address:'경상북도 경주시 불국로 385 불국사',lat:35.7888,lng:129.3319,price:'성인 6,000원 (야간 무료)',duration:'1~2시간',reservation_required:false,target_user:['커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'유네스코 세계문화유산 경북 경주 불국사에서 야경을 감상하는 체험이다. 특별 야간 개장 시즌에 조명이 켜진 불국사 경내가 몽환적 분위기를 자아내며 밤의 불국사는 낮과 전혀 다른 절경이다.',source_urls:['https://www.bulguksa.or.kr/'],data_confidence:'high',tags:['경주불국사야경','경주','경북','불국사','야경','유네스코','야간개장'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'seasonal',operating_hours:'야간 개장 시즌 (4~5월, 10~11월)',phone:'054-746-9913'},
  {experience_id:'EX-GG-NAT-079',name:'동두천 소요산 단풍 트레킹',category_main:'문화/체험',category_sub:'자연체험',region_main:'GG',region_sub:'경기도 동두천시',address:'경기도 동두천시 소요동 소요산',lat:38.0533,lng:127.1294,price:'무료',duration:'2~3시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'경기 동두천 소요산에서 10~11월 단풍 트레킹을 즐기는 체험이다. 신라 원효대사가 수행한 소요산이 경기 북부 대표 단풍 명소로 자재암·상백운대·하백운대 코스가 아름다운 단풍 속 트레킹이다.',source_urls:['https://www.ddc.go.kr/'],data_confidence:'high',tags:['소요산단풍','동두천','경기','소요산','단풍트레킹','원효대사','자재암'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'10~11월 단풍 시즌 (무료)',phone:'031-860-2882'},
  {experience_id:'EX-CB-CUL-072',name:'청풍 수몰마을 역사 투어',category_main:'문화/체험',category_sub:'역사 체험',region_main:'CB',region_sub:'충청북도 제천시',address:'충청북도 제천시 청풍면 청풍호로 3 청풍문화재단지',lat:37.0267,lng:128.2008,price:'성인 3,000원',duration:'1~2시간',reservation_required:false,target_user:['개인','커플','가족'],nearby_places:[],related_heritage_ids:[],short_description:'충주댐 건설로 수몰된 청풍 지역 문화재를 이전·보존한 제천 청풍문화재단지를 탐방하는 역사 체험이다. 수몰 지역에서 옮겨온 팔영루·금병헌 등 조선 시대 건축물과 수몰민 생활 유물을 관람한다.',source_urls:['https://www.jecheon.go.kr/'],data_confidence:'high',tags:['청풍문화재단지','제천','충북','수몰마을','청풍호','조선건축','이전문화재'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00',phone:'043-641-6731'},
  {experience_id:'EX-JB-CUL-069',name:'정읍 내장산 단풍 트레킹',category_main:'문화/체험',category_sub:'자연체험',region_main:'JB',region_sub:'전라북도 정읍시',address:'전라북도 정읍시 내장산로 936 내장산국립공원',lat:35.4819,lng:126.8897,price:'성인 3,000원',duration:'3~4시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'전북 정읍 내장산에서 10~11월 단풍 트레킹을 즐기는 체험이다. 단풍 12색이 아름다운 내장산이 한국 5대 단풍 명소로 내장사~전망대 코스의 터널 단풍이 국내 단풍 사진 최고 포인트다.',source_urls:['https://www.naejangsan.go.kr/'],data_confidence:'high',tags:['내장산단풍','정읍','전북','내장산','단풍12색','내장사','국립공원'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'10~11월 단풍 시즌',phone:'063-538-7875'}
];

const newShorts = [
  {
    experience_id:'EX-GW-NAT-077', experience_name:'철원 두루미 탐조 투어', category_sub:'자연체험', region:'강원특별자치도',
    script_30s:'오늘은 철원에서 두루미를 봤어요. 근데 아무도 안 알려주는 게 있어요 — 철원이 두루미 최대 월동지인 이유가 있어요. DMZ 비무장지대 안 농경지예요. 60년간 사람이 못 들어가 완벽한 생태계가 유지됐어요. 너무 전쟁이 이렇게 자연을 살렸다는 게 좋았습니다.',
    script_60s:'오늘은 강원도 철원 한탄강 일원에서 두루미·재두루미 탐조를 했어요. 겨울에 시베리아에서 날아온 두루미 수천 마리가 월동하는 국내 최고 탐조지예요. 근데 아무도 안 알려주는 꿀팁 하나 — 철원이 왜 두루미 최대 월동지인지 아세요? 철원 평야는 DMZ 비무장지대와 맞닿아 있어요. DMZ 안에 있는 농경지는 6.25 전쟁 이후 60년 이상 사람이 거의 들어가지 못했어요. 농약·비료·개발이 없는 완벽한 생태계가 만들어진 거예요. 두루미가 먹이를 찾는 논에 농약 흔적이 없고 사람에 의한 스트레스가 없어요. 그리고 DMZ 인근 민통선 지역 논에서 겨울 낙곡(추수 후 남은 알곡)이 두루미 먹이가 돼요. 전쟁의 비극이 역설적으로 자연을 지켜낸 거예요. 너무 전쟁이 이렇게 자연을 살렸다는 게 좋았습니다.',
    secret_tip:'철원 두루미 월동지 = DMZ 60년 무인 생태계 — 농약·개발 없는 완벽 생태계. 민통선 논 낙곡이 먹이. 전쟁의 비극이 자연 보전. 탐조 최적 시간 = 이른 새벽 취식 이동 시간대',
    filming_guide:'철원 평야 두루미 군무 비행. 두루미 낙식 클로즈업. 철원 DMZ 배경 탐조.',
    broll_ideas:['두루미 군무 비행','두루미 낙식 클로즈업','철원 평야 배경 탐조','DMZ 철조망 배경','두루미 근접 클로즈업'],
    hooks:['철원이 DMZ 덕에 최대 탐조지예요','60년간 사람이 못 들어갔어요','전쟁이 자연을 살린 역설이에요','이른 새벽이 최적 탐조 시간이에요','철원 두루미 꿀팁'],
    thumbnails:['두루미 군무 비행','두루미 낙식 클로즈업','철원 평야 탐조','DMZ 배경','두루미 근접'],
    captions:{youtube:'철원 두루미 탐조 — DMZ가 만든 최고 생태계예요 🦢\n\n60년간 무인 DMZ가 완벽 생태계 유지!\n전쟁의 비극이 자연을 살린 역설\n\n📍 강원도 철원군 한탄강 탐조대\n🦢 겨울 두루미·재두루미 수천 마리 월동\n\n#철원두루미탐조 #철원 #강원여행 #두루미 #DMZ생태계',instagram:'철원 두루미 탐조 DMZ가 만든 최고 생태계예요 🦢\n\n60년 무인 DMZ 완벽 생태계 ✨\n전쟁의 비극이 역설적으로 자연을 살린 것\n\n📍 강원 철원 두루미 탐조대\n\n#철원두루미탐조 #철원여행 #강원 #두루미 #GemKorea',tiktok:'철원 두루미 꿀팁 🦢 DMZ 60년 무인 생태계 덕분에 두루미 최대 월동지예요! 전쟁의 비극이 역설적으로 자연을 살린 것 // 이른 새벽이 최적 탐조 시간이에요 #철원두루미탐조 #철원여행 #강원'},
    hashtags:{korean:['#한국여행','#강원여행','#철원여행','#두루미탐조','#GemKorea'],place_specific:['#철원두루미DMZ60년생태계','#무인DMZ완벽생태계','#전쟁비극자연보전역설','#이른새벽최적탐조']}
  },
  {
    experience_id:'EX-GN-NAT-087', experience_name:'합천 황매산 철쭉 트레킹', category_sub:'자연체험', region:'경상남도',
    script_30s:'오늘은 합천 황매산에 왔어요. 철쭉이에요. 근데 아무도 안 알려주는 게 있어요 — 철쭉이 독이 있어요. 먹으면 안 돼요. 진달래는 먹을 수 있어요. 꽃 색이 비슷해서 헷갈려요. 입술에 끈적임 있으면 철쭉이에요. 너무 꽃이 이렇게 구별법이 있다는 게 좋았습니다.',
    script_60s:'오늘은 경남 합천 황매산 철쭉 트레킹을 즐겼어요. 국내 최대 산상 철쭉 군락이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 철쭉과 진달래 구별법이 있어요. 봄에 피는 분홍 꽃 철쭉과 진달래가 비슷하게 생겨서 헷갈려요. 결정적 차이가 있어요. 철쭉에는 독이 있어요. 먹으면 안 돼요. 반면 진달래는 먹을 수 있어요. 두견주 (진달래술)를 담그고 화전도 만들어요. 구별법은 이렇게 해요. 철쭉 꽃잎을 입술에 살짝 대면 끈적한 느낌이 나요. 꽃잎에 점액이 있어서예요. 진달래는 끈적임이 없어요. 그리고 철쭉은 잎이 먼저 나온 다음 꽃이 피어요. 진달래는 잎이 나오기 전 꽃이 먼저 피어요. 이 두 가지 구별법을 알면 봄꽃 산행이 훨씬 풍부해져요. 너무 꽃이 이렇게 구별법이 있다는 게 좋았습니다.',
    secret_tip:'철쭉 vs 진달래 구별 = 입술에 끈적임(철쭉 독)+잎 나온 후 꽃(철쭉) vs 끈적임 없음+꽃 먼저 피고 잎 나중(진달래). 철쭉 먹으면 안 됨. 진달래는 화전·두견주 가능. 황매산 5월 초가 최고',
    filming_guide:'황매산 철쭉 군락 정상 전경. 철쭉 꽃잎 끈적임 클로즈업. 분홍 철쭉 물결 드론.',
    broll_ideas:['황매산 철쭉 군락 전경','철쭉 꽃잎 클로즈업','분홍 철쭉 물결 드론','정상 초원 풍경','합천 배경'],
    hooks:['철쭉에 독이 있어요','진달래는 먹을 수 있어요','입술 끈적임이 구별법이에요','잎 나온 후 꽃이 철쭉이에요','합천 황매산 꿀팁'],
    thumbnails:['황매산 철쭉 전경','꽃잎 클로즈업','분홍 드론','정상 초원','합천 배경'],
    captions:{youtube:'합천 황매산 철쭉 — 철쭉에 독이 있어요 🌸\n\n진달래는 먹을 수 있어요!\n입술 끈적임이 구별법\n\n📍 경남 합천군 가회면 황매산\n🌸 국내 최대 산상 철쭉 군락 5월\n\n#합천황매산철쭉 #황매산 #합천 #경남여행 #철쭉진달래구별',instagram:'합천 황매산 철쭉 철쭉에 독이 있어요 🌸\n\n진달래는 먹을 수 있어요 ✨\n입술 끈적임이 구별법이에요\n\n📍 경남 합천 황매산\n\n#합천황매산철쭉 #황매산 #합천여행 #경남 #GemKorea',tiktok:'합천 황매산 꿀팁 🌸 철쭉에 독이 있어요! 진달래는 먹을 수 있고요 // 입술에 끈적임 있으면 철쭉 없으면 진달래 구별법이에요 #합천황매산철쭉 #황매산 #합천여행'},
    hashtags:{korean:['#한국여행','#경남여행','#합천여행','#황매산','#GemKorea'],place_specific:['#합천황매산철쭉독있음','#철쭉진달래구별입술끈적임','#잎나온후꽃철쭉','#진달래먹을수있음화전두견주']}
  },
  {
    experience_id:'EX-JB-NAT-068', experience_name:'부안 채석강 낙조', category_sub:'자연체험', region:'전라북도',
    script_30s:'오늘은 부안 채석강에서 낙조를 봤어요. 근데 아무도 안 알려주는 게 있어요 — 채석강이 강이 아니에요. 절벽이에요. 중국 채석강처럼 아름다워서 이름 붙인 거예요. 간조 때 절벽 앞을 걸을 수 있어요. 물때 확인 필수예요. 너무 이름이 이렇게 헷갈린다는 게 좋았습니다.',
    script_60s:'오늘은 전북 부안 채석강에서 서해 낙조를 감상했어요. 수만 개 퇴적암 지층이 만든 거대한 절벽이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 채석강 이름의 비밀이 있어요. 채석강은 강이 아니에요. 채석강이라는 이름은 중국 당나라 시인 이태백이 달그림자를 잡으려다 빠진 채석강에서 따온 거예요. 그만큼 아름답다는 의미예요. 퇴적암 지층이 7,000만 년에 걸쳐 쌓인 것으로 지층 하나하나가 지구 역사 책이에요. 그리고 채석강 절벽 앞 해변을 걸을 수 있는 건 간조 때만이에요. 물이 빠져야 절벽 앞 바위 위를 걸을 수 있어요. 밀물 때는 절벽이 바닷물에 잠겨요. 부안군청 홈페이지에서 당일 물때를 확인하고 간조 2~3시간 전에 도착해야 해요. 낙조와 간조 타이밍이 맞으면 절벽 앞에서 최고 사진이 나와요. 너무 이름이 이렇게 헷갈린다는 게 좋았습니다.',
    secret_tip:'채석강 = 강 아닌 절벽 — 이태백의 중국 채석강처럼 아름다워서 이름. 간조 때만 절벽 앞 해변 걷기 가능. 물때 확인 후 간조 2~3시간 전 도착. 낙조+간조 타이밍 맞추면 최고',
    filming_guide:'채석강 퇴적암 절벽 전경. 간조 때 절벽 앞 걷는 장면. 서해 낙조+절벽 조합.',
    broll_ideas:['퇴적암 절벽 전경','간조 때 절벽 앞 걷기','서해 낙조+절벽','지층 클로즈업','부안 변산반도 배경'],
    hooks:['채석강이 강이 아니에요','간조 때만 걸을 수 있어요','물때 확인이 필수예요','낙조+간조 타이밍이 완벽해요','부안 채석강 꿀팁'],
    thumbnails:['퇴적암 절벽 전경','간조 절벽 앞 걷기','서해 낙조 절벽','지층 클로즈업','변산반도 배경'],
    captions:{youtube:'부안 채석강 낙조 — 채석강이 강이 아니에요 🌅\n\n이태백의 중국 채석강처럼 아름다워서!\n간조 때만 절벽 앞을 걸을 수 있어요\n\n📍 전북 부안군 변산면 채석강길\n🌅 7,000만 년 퇴적암 절벽 서해 낙조\n\n#부안채석강낙조 #채석강 #부안 #전북여행 #서해낙조',instagram:'부안 채석강 낙조 채석강이 강이 아니에요 🌅\n\n이태백 채석강처럼 아름답다는 이름 ✨\n간조 때만 절벽 앞 해변 걷기 가능\n\n📍 전북 부안 채석강\n\n#부안채석강 #채석강 #부안여행 #전북 #GemKorea',tiktok:'부안 채석강 꿀팁 🌅 채석강이 강이 아니에요! 중국 이태백 채석강처럼 아름다워서 이름 // 간조 때만 절벽 앞 해변 걸을 수 있어요 물때 확인 필수 #부안채석강낙조 #부안여행 #전북'},
    hashtags:{korean:['#한국여행','#전북여행','#부안여행','#채석강','#GemKorea'],place_specific:['#부안채석강강아닌절벽','#이태백채석강이름유래','#간조때만절벽앞걷기','#낙조간조타이밍맞추기']}
  },
  {
    experience_id:'EX-JN-NAT-095', experience_name:'여수 이순신 광장 야경', category_sub:'야경/야간투어', region:'전라남도',
    script_30s:'오늘은 여수 이순신 광장에서 야경을 봤어요. 여수의 밤바다 노래 배경지예요. 근데 아무도 안 알려주는 게 있어요 — 여수 이순신 광장 야경 최고 포인트는 돌산대교 위예요. 다리 위에서 광장과 거북선 야경이 한눈에 보여요. 너무 포인트 하나가 이렇게 다르다는 게 좋았습니다.',
    script_60s:'오늘은 전남 여수 이순신 광장에서 야경을 즐겼어요. 가수 버스커버스커 여수 밤바다의 실제 배경지예요. 근데 아무도 안 알려주는 꿀팁 하나 — 여수 야경 최고 뷰포인트가 있어요. 이순신 광장에서 사진 찍는 사람이 많은데 실제 최고 뷰포인트는 돌산대교 위예요. 돌산대교 중간에 서면 한쪽으로 여수 항구 야경과 이순신 광장이, 다른 쪽으로 오동도 방향 야경이 360도로 펼쳐져요. 돌산대교에 조명 보행로가 있어서 걸으면서 야경을 즐길 수 있어요. 그리고 여수 국제박람회 장소인 엑스포 해양공원 야경도 함께 보여요. 이순신 광장에서 하멜 등대 방향으로 걸으면 또 다른 야경 포인트가 나와요. 하멜 등대에서 본 여수 항구 야경이 가장 아름다워요. 너무 포인트 하나가 이렇게 전혀 다른 경험이라는 게 좋았습니다.',
    secret_tip:'여수 야경 최고 뷰포인트 = 돌산대교 위 — 광장+항구+오동도 방향 360도 야경. 하멜 등대에서 여수 항구 야경이 가장 아름다움. 이순신 광장 혼자보다 대교+등대 세트 코스 권장',
    filming_guide:'돌산대교 위 360도 여수 야경. 이순신 광장 거북선 야경. 하멜 등대에서 항구 야경.',
    broll_ideas:['돌산대교 위 360도 야경','이순신 광장 거북선 야경','하멜 등대 항구 야경','여수 항구 야경 전경','돌산대교 조명 보행로'],
    hooks:['돌산대교 위가 최고 뷰포인트예요','광장+항구+오동도가 다 보여요','하멜 등대 야경이 가장 아름다워요','이순신 광장만 보면 반쪽이에요','여수 야경 꿀팁'],
    thumbnails:['돌산대교 위 360도','거북선 야경','하멜 등대 항구 야경','항구 야경 전경','조명 보행로'],
    captions:{youtube:'여수 이순신 광장 야경 — 돌산대교 위가 최고예요 🌃\n\n광장+항구+오동도 360도 야경!\n하멜 등대에서 보는 야경이 가장 아름다워요\n\n📍 전남 여수시 이순신광장 일대\n🌃 여수 밤바다 노래 배경지\n\n#여수이순신광장야경 #여수 #전남여행 #돌산대교야경 #여수밤바다',instagram:'여수 이순신 광장 야경 돌산대교 위가 최고예요 🌃\n\n광장+항구+오동도 360도 야경 ✨\n하멜 등대에서 보는 야경이 가장 아름다워요\n\n📍 전남 여수 이순신 광장\n\n#여수이순신광장 #여수여행 #전남 #여수야경 #GemKorea',tiktok:'여수 야경 꿀팁 🌃 돌산대교 위가 최고 뷰포인트예요! 광장+항구+오동도 방향 360도 야경 // 하멜 등대에서 보는 여수 항구 야경이 가장 아름다워요 #여수이순신광장 #여수여행 #전남'},
    hashtags:{korean:['#한국여행','#전남여행','#여수여행','#여수야경','#GemKorea'],place_specific:['#여수이순신광장야경','#돌산대교위360도야경','#하멜등대야경가장아름다움','#여수밤바다배경지']}
  },
  {
    experience_id:'EX-JB-CUL-069', experience_name:'정읍 내장산 단풍 트레킹', category_sub:'자연체험', region:'전라북도',
    script_30s:'오늘은 내장산 단풍 트레킹을 했어요. 근데 아무도 안 알려주는 게 있어요 — 내장산 단풍이 12가지 색이에요. 단색 단풍이 아니에요. 같은 산에서 12색 단풍이 한꺼번에 터져요. 그게 내장산 단풍이 최고인 이유예요. 너무 색이 이렇게 많다는 게 좋았습니다.',
    script_60s:'오늘은 전북 정읍 내장산 단풍 트레킹을 즐겼어요. 한국 5대 단풍 명소예요. 근데 아무도 안 알려주는 꿀팁 하나 — 내장산 단풍이 12색인 이유가 있어요. 내장산에 자라는 단풍나무 종류가 매우 다양해요. 단풍나무·당단풍·복장나무·신나무·고로쇠 등 12종류 이상 단풍나무가 함께 자라요. 각각 단풍 색이 달라요. 진빨강·주황·노랑·갈색·자주까지 한 산에서 동시에 터져요. 그리고 내장산 지형이 둥그런 칼데라 형태예요. 분지 형태라 단풍잎이 바람에 날아가지 않고 산 안에 오래 머물러요. 그래서 단풍 절정 시기가 2~3주 이상 지속돼요. 다른 명산보다 단풍 구경 기회가 길어요. 내장사에서 전망대까지 케이블카로 올라가면 분지 전체 12색 단풍을 내려다볼 수 있어요. 너무 색이 이렇게 다양하다는 게 좋았습니다.',
    secret_tip:'내장산 단풍 12색 이유 = 12종 이상 단풍나무 동시 서식 — 분지 칼데라 형태로 단풍 오래 지속 (2~3주). 케이블카 전망대에서 12색 내려다보기 최고. 내장사 정문 단풍 터널이 최고 포인트',
    filming_guide:'케이블카 전망대에서 12색 단풍 내려다보기. 내장사 단풍 터널. 분지 전체 드론 영상.',
    broll_ideas:['케이블카 전망대 12색 단풍','내장사 단풍 터널','분지 전체 드론','12색 비교 클로즈업','단풍잎 가득 땅'],
    hooks:['내장산 단풍이 12가지 색이에요','12종 단풍나무가 동시에 터져요','분지라서 단풍이 2~3주 지속돼요','케이블카 전망대에서 내려다봐요','내장산 단풍 꿀팁'],
    thumbnails:['케이블카 전망대 12색','내장사 단풍 터널','분지 전체 드론','12색 비교','단풍잎 가득'],
    captions:{youtube:'내장산 단풍 트레킹 — 12가지 색이에요 🍂\n\n12종 단풍나무가 동시에 터져요!\n분지라서 단풍 2~3주 지속\n\n📍 전북 정읍시 내장산로 936\n🍂 한국 5대 단풍 명소\n\n#내장산단풍 #정읍 #전북여행 #내장산 #12색단풍',instagram:'내장산 단풍 트레킹 12가지 색이에요 🍂\n\n12종 단풍나무 동시 터짐 ✨\n분지 지형으로 2~3주 지속\n\n📍 전북 정읍 내장산\n\n#내장산단풍 #내장산 #정읍여행 #전북 #GemKorea',tiktok:'내장산 단풍 꿀팁 🍂 12가지 색이에요! 12종 단풍나무가 동시에 터지는 내장산 // 분지 지형이라 단풍이 2~3주 지속돼요 #내장산단풍 #정읍여행 #전북'},
    hashtags:{korean:['#한국여행','#전북여행','#정읍여행','#내장산단풍','#GemKorea'],place_specific:['#내장산단풍12색12종단풍나무','#분지칼데라단풍2~3주지속','#케이블카전망대12색조망','#한국5대단풍명소']}
  },
  {
    experience_id:'EX-GB-CUL-047', experience_name:'경주 불국사 야경', category_sub:'야경/야간투어', region:'경상북도',
    script_30s:'오늘은 경주 불국사 야경을 봤어요. 근데 아무도 안 알려주는 게 있어요 — 불국사 다보탑이 10원짜리 동전 뒷면이에요. 다보탑을 만든 장인 이름을 몰라요. 기록이 없어요. 너무 무명 장인이 이렇게 위대했다는 게 좋았습니다.',
    script_60s:'오늘은 경북 경주 불국사 야간 개장을 즐겼어요. 유네스코 세계문화유산이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 불국사 다보탑의 비밀이 있어요. 다보탑은 10원짜리 동전 뒷면에 있는 탑이에요. 그런데 다보탑을 만든 석공의 이름이 기록에 남아있지 않아요. 불국사를 창건한 신라 재상 김대성의 이름은 알지만 실제로 탑을 만든 장인은 익명이에요. 신라 사회에서 공예 장인의 이름을 기록으로 남기는 게 당시에는 중요하지 않았어요. 그 무명 장인이 만든 다보탑이 1,200년이 넘어 지금도 완벽한 구조를 유지하고 있어요. 일제강점기에 일본이 다보탑을 해체해 보수했는데 그때 빠진 부품 일부가 일본에 있어요. 아직도 반환되지 않았어요. 야경으로 보는 다보탑이 더 신비로운 이유가 있어요. 너무 무명 장인이 이렇게 위대했다는 게 좋았습니다.',
    secret_tip:'불국사 다보탑 = 10원 동전 뒷면+만든 장인 이름 기록 없음 — 1,200년 완벽 구조 유지. 일제가 해체 보수 시 빠진 부품 일부 일본 소재 미반환. 야간 개장 4~5월+10~11월',
    filming_guide:'야간 조명 속 다보탑 야경. 10원 동전 vs 실제 다보탑 비교. 불국사 경내 야경 전경.',
    broll_ideas:['야간 조명 다보탑','10원 동전 vs 실제 비교','불국사 경내 야경','석가탑+다보탑 함께','야간 청운교 조명'],
    hooks:['다보탑이 10원 동전 뒷면이에요','만든 장인 이름이 없어요','1,200년 완벽 구조예요','부품 일부가 일본에 있어요','경주 불국사 꿀팁'],
    thumbnails:['야간 조명 다보탑','10원 동전 비교','불국사 경내 야경','석가탑+다보탑','청운교 조명'],
    captions:{youtube:'경주 불국사 야경 — 다보탑이 10원 동전 뒷면이에요 🏯\n\n만든 장인 이름 기록이 없어요!\n일부 부품은 아직 일본에 있어요\n\n📍 경북 경주시 불국로 385\n🏯 유네스코 세계문화유산 야간 개장\n\n#경주불국사야경 #불국사 #경주 #경북여행 #다보탑10원동전',instagram:'경주 불국사 야경 다보탑이 10원 동전 뒷면이에요 🏯\n\n만든 장인 이름 기록 없음 ✨\n1,200년 완벽 구조 무명 장인의 위대함\n\n📍 경북 경주 불국사\n\n#경주불국사야경 #불국사 #경주여행 #경북 #GemKorea',tiktok:'경주 불국사 꿀팁 🏯 다보탑이 10원 동전 뒷면이에요! 만든 장인 이름이 기록에 없어요 // 일제 보수 시 빠진 부품 일부가 아직 일본에 있어요 #경주불국사야경 #불국사 #경주여행'},
    hashtags:{korean:['#한국여행','#경북여행','#경주여행','#불국사야경','#GemKorea'],place_specific:['#경주불국사다보탑10원동전','#장인이름기록없음무명장인','#1200년완벽구조유지','#부품일부일본미반환']}
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
