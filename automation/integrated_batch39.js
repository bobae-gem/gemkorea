const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const now = new Date().toISOString().slice(0,19);

const newExps = [
  {experience_id:'EX-JN-NAT-086',name:'여수 돌산 갓김치 담그기',category_main:'문화/체험',category_sub:'지역 먹거리',region_main:'JN',region_sub:'전라남도 여수시',address:'전라남도 여수시 돌산읍 돌산로 일대',lat:34.6958,lng:127.8053,price:'체험 15,000원~',duration:'2시간',reservation_required:true,target_user:['가족','개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'여수 돌산도 특산물 갓으로 갓김치를 직접 담그는 발효 체험이다. 돌산갓은 해풍을 맞아 자란 갓으로 알싸한 향이 강하고 빛깔이 아름다워 여수 갓김치의 원료로 쓰이는 명품 재료다.',source_urls:['https://www.yeosu.go.kr/'],data_confidence:'high',tags:['돌산갓김치','여수','전남','갓김치담그기','돌산갓','발효체험','여수특산'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'10:00~16:00 (예약 필수)',phone:'061-659-3986'},
  {experience_id:'EX-GG-CUL-073',name:'이천 도자기 체험 — 설봉공원',category_main:'문화/체험',category_sub:'전통공예',region_main:'GG',region_sub:'경기도 이천시',address:'경기도 이천시 설봉공원로 99 이천도자예술마을',lat:37.2742,lng:127.4419,price:'체험 10,000원~',duration:'1~2시간',reservation_required:false,target_user:['가족','개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'대한민국 최고의 도자기 도시 경기 이천에서 물레 도자기를 직접 빚는 체험이다. 이천은 조선 시대 왕실 사기를 굽던 분원이 있던 곳으로 지금도 전국 최고 품질의 도자기를 생산하는 곳이다.',source_urls:['https://www.icheon.go.kr/'],data_confidence:'high',tags:['이천도자기체험','이천','경기','도자기','물레','설봉공원','분원'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'10:00~18:00',phone:'031-632-0902'},
  {experience_id:'EX-GN-NAT-081',name:'거제 외도 보타니아',category_main:'문화/체험',category_sub:'자연체험',region_main:'GN',region_sub:'경상남도 거제시',address:'경상남도 거제시 일운면 외도길 17 외도 선착장',lat:34.7922,lng:128.5194,price:'성인 11,000원 (배편 별도)',duration:'3~4시간',reservation_required:false,target_user:['커플','개인','가족'],nearby_places:[],related_heritage_ids:[],short_description:'남해 거제 앞바다 외도에 조성된 아름다운 정원 외도 보타니아를 탐방하는 체험이다. 개인이 30년에 걸쳐 가꾼 섬 전체 정원으로 야자나무·선인장·아열대 식물이 가득한 이국적 섬 정원이다.',source_urls:['https://www.oedobotania.com/'],data_confidence:'high',tags:['외도보타니아','거제','경남','외도','섬정원','아열대식물','야자나무'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'08:30~17:00 (계절 상이)',phone:'055-681-4541'},
  {experience_id:'EX-GG-CUL-074',name:'남양주 다산 정약용 유적지',category_main:'문화/체험',category_sub:'역사 체험',region_main:'GG',region_sub:'경기도 남양주시',address:'경기도 남양주시 조안면 다산로 747번길 11',lat:37.5511,lng:127.2833,price:'성인 2,000원',duration:'1~2시간',reservation_required:false,target_user:['개인','커플','가족'],nearby_places:[],related_heritage_ids:[],short_description:'조선 최고 실학자 정약용의 생가 여유당과 다산 기념관을 탐방하는 역사 체험이다. 한강변 아름다운 경치 속에 다산의 사상·저술·유배 생활을 배우는 역사 교육 체험이다.',source_urls:['https://www.dasan.go.kr/'],data_confidence:'high',tags:['다산정약용','남양주','경기','여유당','정약용','실학','조선'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00 (월 휴관)',phone:'031-590-2837'},
  {experience_id:'EX-JB-NAT-065',name:'무주 반딧불이 축제',category_main:'문화/체험',category_sub:'축제',region_main:'JB',region_sub:'전라북도 무주군',address:'전라북도 무주군 설천면 무주구천동로 일대',lat:35.9419,lng:127.6619,price:'무료~성인 10,000원',duration:'4~6시간',reservation_required:false,target_user:['커플','가족'],nearby_places:[],related_heritage_ids:[],short_description:'전북 무주에서 매년 8~9월 열리는 반딧불이 생태 축제다. 청정 무주 계곡에서 반딧불이 군무를 감상하는 체험으로 오염되지 않은 1급수 계곡에서만 사는 반딧불이의 빛 향연을 야간에 감상한다.',source_urls:['https://www.muju.go.kr/'],data_confidence:'high',tags:['무주반딧불이축제','무주','전북','반딧불이','생태축제','여름밤','1급수'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'8~9월 야간 개최',phone:'063-324-0301'},
  {experience_id:'EX-GW-CUL-068',name:'영월 별마로 천문대 별 관측',category_main:'문화/체험',category_sub:'자연체험',region_main:'GW',region_sub:'강원특별자치도 영월군',address:'강원특별자치도 영월군 영월읍 천문대길 397',lat:37.1722,lng:128.4558,price:'성인 10,000원',duration:'2~3시간',reservation_required:true,target_user:['커플','개인','가족'],nearby_places:[],related_heritage_ids:[],short_description:'해발 799m 봉래산 정상 영월 별마로 천문대에서 별 관측을 즐기는 체험이다. 강원도 영월의 청정 하늘에서 망원경으로 은하·성단·행성을 관찰하는 국내 최고 수준 천문 체험이다.',source_urls:['https://www.ywobs.co.kr/'],data_confidence:'high',tags:['영월별마로천문대','영월','강원','천문대','별관측','봉래산','은하'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'14:00~22:00 (예약 필수)',phone:'033-372-8445'},
  {experience_id:'EX-JN-NAT-087',name:'강진 다산초당 차밭 트레킹',category_main:'문화/체험',category_sub:'역사 체험',region_main:'JN',region_sub:'전라남도 강진군',address:'전라남도 강진군 도암면 다산초당길 68-35',lat:34.5917,lng:126.7781,price:'무료',duration:'1~2시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'다산 정약용이 18년 유배 생활 중 목민심서를 집필한 강진 다산초당과 주변 차밭을 트레킹하는 역사 체험이다. 다산이 직접 차를 재배하고 제다(製茶)를 즐긴 역사적인 차밭길을 걸을 수 있다.',source_urls:['https://www.gangjin.go.kr/'],data_confidence:'high',tags:['강진다산초당','강진','전남','정약용유배지','목민심서','차밭트레킹','다산'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00 (무료)',phone:'061-430-3783'},
  {experience_id:'EX-GG-NAT-072',name:'광명 기아 EVO 센터 체험',category_main:'문화/체험',category_sub:'어드벤처/레포츠',region_main:'GG',region_sub:'경기도 광명시',address:'경기도 광명시 일직동 기아 오토랜드 광명',lat:37.4347,lng:126.8536,price:'무료~30,000원',duration:'1~2시간',reservation_required:true,target_user:['청년','개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'기아 자동차 광명 공장에 설치된 EVO 드라이빙 체험 센터에서 전기차 체험을 즐기는 프로그램이다. EV6·EV9 등 기아 전기차를 직접 시승하고 공장 견학까지 즐기는 무료 체험이다.',source_urls:['https://www.kia.com/'],data_confidence:'high',tags:['기아EVO센터','광명','경기','전기차체험','EV6','기아자동차','공장견학'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'10:00~17:00 (예약 필수)',phone:'02-3484-7702'},
  {experience_id:'EX-GN-NAT-082',name:'함양 상림공원 숲 산책',category_main:'문화/체험',category_sub:'자연체험',region_main:'GN',region_sub:'경상남도 함양군',address:'경상남도 함양군 함양읍 필봉산길 49',lat:35.5219,lng:127.7100,price:'무료',duration:'1시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'한국에서 가장 오래된 인공 숲 경남 함양 상림을 산책하는 자연 체험이다. 신라 시대 최치원이 조성한 1,100년 역사의 천연기념물 상림공원에서 역사와 자연을 동시에 즐기는 코스다.',source_urls:['https://www.hamyang.go.kr/'],data_confidence:'high',tags:['함양상림','함양','경남','상림공원','최치원','천연기념물','천년숲'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (무료)',phone:'055-960-5553'},
  {experience_id:'EX-GW-NAT-072',name:'태백 고원 하이킹 — 함백산',category_main:'문화/체험',category_sub:'자연체험',region_main:'GW',region_sub:'강원특별자치도 태백시',address:'강원특별자치도 태백시 백병산로 일대',lat:37.1483,lng:128.9658,price:'무료',duration:'3~4시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'해발 1,573m 함백산에서 고원 하이킹을 즐기는 체험이다. 만항재에서 출발해 함백산 정상까지 운탄고도 1330 코스를 걸으며 강원 고원의 설경·야생화·만항재 철쭉 절경을 즐기는 트레킹이다.',source_urls:['https://www.taebaek.go.kr/'],data_confidence:'high',tags:['함백산하이킹','태백','강원','함백산','운탄고도','만항재','고원트레킹'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (무료)',phone:'033-550-2085'},
  {experience_id:'EX-JN-CUL-046',name:'전주 비빔밥 만들기 체험',category_main:'문화/체험',category_sub:'지역 먹거리',region_main:'JN',region_sub:'전라북도 전주시',address:'전라북도 전주시 완산구 전통문화관길 일대',lat:35.8173,lng:127.1539,price:'체험 12,000원~',duration:'1~2시간',reservation_required:true,target_user:['가족','개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'전주 한옥마을에서 전주비빔밥을 직접 만드는 쿠킹 체험이다. 전주비빔밥 30가지 이상 재료를 직접 준비하고 황포묵·육회·비빔장 등 전주 특유의 재료를 넣어 만드는 정통 전주비빔밥 체험이다.',source_urls:['https://www.jeonjufood.or.kr/'],data_confidence:'high',tags:['전주비빔밥만들기','전주한옥마을','전주','전북','전주비빔밥','쿠킹체험','한국음식'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'10:00~17:00 (예약 필수)',phone:'063-281-2891'},
  {experience_id:'EX-GB-CUL-044',name:'봉화 닭실마을 조선 양반 체험',category_main:'문화/체험',category_sub:'역사 체험',region_main:'GB',region_sub:'경상북도 봉화군',address:'경상북도 봉화군 봉화읍 해저리 닭실마을',lat:36.9331,lng:128.6806,price:'무료~체험 상이',duration:'2~3시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'조선 시대 안동 권씨 집성촌 경북 봉화 닭실마을에서 조선 양반 생활을 체험하는 프로그램이다. 청암정·석천정사 등 조선 정자 문화가 아름답게 보존된 곳으로 한국 최고 정자 마을 체험이다.',source_urls:['https://www.bonghwa.go.kr/'],data_confidence:'high',tags:['봉화닭실마을','봉화','경북','조선양반체험','청암정','안동권씨','집성촌'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (무료)',phone:'054-679-6111'}
];

const newShorts = [
  {
    experience_id:'EX-JN-FES-005', experience_name:'진도 강강술래 체험', category_sub:'전통공연', region:'전라남도',
    script_30s:'오늘은 진도에서 강강술래를 직접 해봤어요. 유네스코 문화유산이에요. 근데 아무도 안 알려주는 게 있어요 — 강강술래 원래 뜻이 왜구 감시 신호예요. 왜구가 온다는 경고 소리로 시작됐어요. 그게 노래가 됐어요. 너무 전쟁 신호가 문화유산이 됐다는 게 좋았습니다.',
    script_60s:'오늘은 전남 진도에서 유네스코 인류무형문화유산 강강술래를 직접 체험했어요. 추석날 밤 보름달 아래 여성들이 손잡고 원을 그리며 부르는 전통 민요 강강술래예요. 근데 아무도 안 알려주는 꿀팁 하나 — 강강술래의 진짜 기원이 있어요. 강강술래는 임진왜란 때 이순신 장군이 왜구를 혼란시키기 위해 고안한 작전이에요. 적에게 아군 병력이 많아 보이게 하려고 부녀자들을 군복 차림으로 산 위에서 강강술래를 추게 했어요. 왜군이 보기에 수많은 군사가 돌아다니는 것처럼 보이게 한 심리전이에요. 그 작전이 이후 민간에 전해지면서 추석 풍습이 됐어요. 전쟁 심리전이 문화유산이 된 거예요. 너무 전쟁 신호가 문화유산이 됐다는 게 좋았습니다.',
    secret_tip:'강강술래 기원 = 임진왜란 이순신 장군의 심리전 — 왜구에게 아군 많아 보이게 부녀자 군복 차림 원무. 전쟁 심리전이 유네스코 문화유산으로. 진도 운림산방 세트',
    filming_guide:'달빛 아래 강강술래 원 그리기 장면. 진도 전통 한복 클로즈업. 진도 바다 배경.',
    broll_ideas:['달빛 강강술래 원 장면','진도 한복 클로즈업','진도 바다 배경','손잡은 원 형성','보름달 하늘'],
    hooks:['강강술래 원래 왜구 감시 신호예요','이순신 장군의 심리전이에요','전쟁 작전이 문화유산이 됐어요','왜군 혼란시키기 위한 거였어요','진도 강강술래 진짜 기원'],
    thumbnails:['달빛 강강술래 원','진도 한복 클로즈업','진도 바다','손잡은 원 형성','보름달'],
    captions:{youtube:'진도 강강술래 — 원래 이순신 장군의 심리전이에요 🌕\n\n왜구 혼란시키기 위한 작전!\n전쟁 신호가 유네스코 문화유산으로\n\n📍 전남 진도군 진도아리랑관\n🌕 유네스코 인류무형문화유산\n\n#진도강강술래 #진도 #전남여행 #강강술래기원 #유네스코',instagram:'진도 강강술래 원래 이순신 장군의 심리전이에요 🌕\n\n왜군 혼란시키기 위한 작전이 유네스코 문화유산 ✨\n전쟁 신호가 문화유산이 됐어요\n\n📍 전남 진도\n\n#진도강강술래 #진도여행 #전남 #강강술래 #GemKorea',tiktok:'진도 강강술래 진짜 기원 🌕 임진왜란 이순신 장군의 심리전이에요! 부녀자들을 군복 차림으로 원무시켜 왜군 혼란 // 그게 유네스코 문화유산이 됐어요 #진도강강술래 #진도여행 #전남'},
    hashtags:{korean:['#한국여행','#전남여행','#진도여행','#강강술래','#GemKorea'],place_specific:['#진도강강술래기원','#이순신심리전','#전쟁신호문화유산','#유네스코강강술래']}
  },
  {
    experience_id:'EX-GW-CUL-067', experience_name:'춘천 인형극제 관람', category_sub:'축제', region:'강원특별자치도',
    script_30s:'오늘은 춘천 인형극제에 왔어요. 아시아 최대 인형극 축제예요. 근데 아무도 안 알려주는 게 있어요 — 춘천 인형극제 야외공연이 무료예요. 표 없이도 볼 수 있어요. 세계 30개국 이상 극단이 거리 공연을 해요. 너무 무료로 세계 공연을 본다는 게 좋았습니다.',
    script_60s:'오늘은 강원도 춘천 인형극제에 왔어요. 40년 역사의 세계 수준 인형극 축제예요. 근데 아무도 안 알려주는 꿀팁 하나 — 춘천 인형극제 무료 관람 방법이 있어요. 인형극제는 유료 공연과 무료 야외 거리 공연으로 나뉘어요. 유료 공연은 사전 예매가 필요하지만 야외 거리 공연은 완전 무료예요. 세계 30개국 이상 인형극단이 춘천 공원·광장·거리 곳곳에서 거리 공연을 해요. 춘천 시내 지도를 받아서 거리 공연 일정을 확인하면 돼요. 특히 저녁 야간 거리 공연이 조명과 어우러져 가장 아름다워요. 낮에 도착해 거리를 돌아다니며 무료 공연을 즐기고 저녁 야간 공연으로 마무리하면 완벽한 인형극제 하루를 즐길 수 있어요. 너무 무료로 세계 최고 수준 공연을 본다는 게 좋았습니다.',
    secret_tip:'춘천 인형극제 무료 = 야외 거리 공연 활용 — 세계 30개국 거리 공연 완전 무료. 사전 예매 없이 가능. 저녁 야간 야외 공연이 조명+분위기 최고. 지도 받아 거리 공연 일정 확인',
    filming_guide:'야외 거리 인형극 공연 장면. 야간 조명 어우러진 야외 공연. 인형 클로즈업.',
    broll_ideas:['야외 거리 인형극 공연','야간 조명 야외 공연','인형 클로즈업','관객 반응','춘천 공원 배경'],
    hooks:['야외 공연이 완전 무료예요','세계 30개국 거리 공연이에요','사전 예매 없이 볼 수 있어요','저녁 야간 공연이 최고예요','춘천 인형극제 꿀팁'],
    thumbnails:['야외 거리 인형극','야간 조명 공연','인형 클로즈업','관객 반응','춘천 공원'],
    captions:{youtube:'춘천 인형극제 — 야외 공연이 완전 무료예요 🎭\n\n세계 30개국 거리 공연!\n사전 예매 없이 저녁 야간 공연 즐겨요\n\n📍 강원도 춘천시 인형극제 공원\n🎭 아시아 최대 인형극 페스티벌\n\n#춘천인형극제 #춘천 #강원여행 #인형극제야외무료 #세계인형극',instagram:'춘천 인형극제 야외 공연이 완전 무료예요 🎭\n\n세계 30개국 거리 공연 무료 ✨\n저녁 야간 공연이 조명+분위기 최고\n\n📍 강원 춘천 인형극제\n\n#춘천인형극제 #춘천여행 #강원 #인형극 #GemKorea',tiktok:'춘천 인형극제 꿀팁 🎭 야외 거리 공연이 완전 무료예요! 세계 30개국 거리 공연 사전 예매 없이 가능 // 저녁 야간 공연이 조명과 어우러져 최고예요 #춘천인형극제 #춘천여행 #강원'},
    hashtags:{korean:['#한국여행','#강원여행','#춘천여행','#인형극제','#GemKorea'],place_specific:['#춘천인형극제야외무료','#세계30개국거리공연','#사전예매없이무료관람','#야간야외공연최고']}
  },
  {
    experience_id:'EX-GG-CUL-070', experience_name:'수원 화성행궁 무예 공연', category_sub:'역사 체험', region:'경기도',
    script_30s:'오늘은 수원 화성행궁 앞에서 무예 공연을 봤어요. 근데 아무도 안 알려주는 게 있어요 — 정조가 화성행궁을 지은 이유가 아버지 사도세자 묘 참배예요. 정치적 목적이 아니라 효심으로 지은 거예요. 너무 효심이 유네스코 유산을 만들었다는 게 좋았습니다.',
    script_60s:'오늘은 경기도 수원 화성행궁 앞에서 정조 시대 무예 24기를 재현한 공연을 관람했어요. 주말 정기 공연으로 무료 관람이 가능해요. 근데 아무도 안 알려주는 꿀팁 하나 — 화성행궁이 왜 지어졌는지 아세요? 화성행궁은 정조가 아버지 사도세자의 묘 현륭원(지금의 융릉)을 참배할 때 머물기 위한 행궁이에요. 당파 정치에 희생된 아버지를 그리워한 정조가 매년 수원을 방문하면서 화성 건설을 추진했어요. 즉 유네스코 세계문화유산 화성은 정치적 프로젝트가 아니라 아들의 효심이 낳은 건축이에요. 그래서 화성 설계 곳곳에 아버지를 향한 정조의 마음이 담겨있어요. 무예 공연을 보면서 이 역사를 알면 훨씬 감동적이에요. 너무 효심이 이렇게 역사 유산을 만든다는 게 좋았습니다.',
    secret_tip:'수원 화성 건설 이유 = 아버지 사도세자 묘 참배를 위한 효심 — 현륭원(융릉) 참배용 행궁. 정치가 아닌 효심이 유네스코 유산 만듦. 무예 공연 주말 11:00·14:00·16:00 무료',
    filming_guide:'무예 24기 공연 역동적인 장면. 화성행궁 건물 배경 무예. 수원 화성 성곽 전경.',
    broll_ideas:['무예 24기 공연 역동적','화성행궁 배경 무예','수원 화성 성곽 전경','정조 초상화 자료','현륭원 배경'],
    hooks:['화성이 효심으로 지어진 거예요','아버지 사도세자 묘 참배용이에요','정치가 아닌 효심이 만든 유산이에요','무예 공연이 주말 무료예요','수원 화성 꿀팁'],
    thumbnails:['무예 24기 공연','화성행궁 배경','수원 화성 성곽','정조 초상화','현륭원'],
    captions:{youtube:'수원 화성행궁 무예 공연 — 화성이 효심으로 지어진 거예요 ⚔️\n\n아버지 사도세자 묘 참배용 행궁!\n정치가 아닌 효심이 유네스코 유산 만듦\n\n📍 경기도 수원시 팔달구 남창동 화성행궁\n⚔️ 주말 무예 공연 무료 11:00·14:00·16:00\n\n#수원화성행궁무예공연 #수원화성행궁 #수원 #경기여행 #정조효심',instagram:'수원 화성행궁 화성이 효심으로 지어진 거예요 ⚔️\n\n아버지 사도세자 참배용 행궁 ✨\n정치가 아닌 효심이 유네스코 유산 만듦\n\n📍 경기 수원 화성행궁\n\n#수원화성행궁 #수원여행 #경기 #무예공연 #GemKorea',tiktok:'수원 화성 꿀팁 ⚔️ 화성이 효심으로 지어진 거예요! 아버지 사도세자 묘 참배를 위한 행궁 // 정치가 아닌 효심이 유네스코 유산 만든 거예요 #수원화성행궁 #수원여행 #경기'},
    hashtags:{korean:['#한국여행','#경기여행','#수원여행','#화성행궁','#GemKorea'],place_specific:['#수원화성행궁효심','#사도세자묘참배행궁','#정치아닌효심유산','#무예공연주말무료']}
  },
  {
    experience_id:'EX-JB-NAT-063', experience_name:'완주 대둔산 케이블카+암릉', category_sub:'어드벤처/레포츠', region:'전라북도',
    script_30s:'오늘은 완주 대둔산 케이블카를 탔어요. 근데 아무도 안 알려주는 게 있어요 — 대둔산 케이블카 상부에서 암릉 계단이 있어요. 계단 위 구름다리를 건너면 대둔산 최고 전망이에요. 많은 사람이 케이블카만 타고 가요. 다리까지 가야 해요. 너무 10분이 이렇게 다른 경험이라는 게 좋았습니다.',
    script_60s:'오늘은 전북 완주 대둔산에서 케이블카를 타고 암릉 트레킹을 즐겼어요. 대둔산은 기암절벽이 아름다운 전북 명산이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 대둔산 케이블카 탑승 후 이어지는 코스가 있어요. 케이블카를 타고 상부 역에 내리면 대부분의 사람이 전망대에서 사진 찍고 돌아가요. 그런데 상부 역에서 10분만 더 걸으면 삼선 계단이 있어요. 경사 51도 128개 계단을 오르면 대둔산 금강 구름다리가 있어요. 구름다리에서 바라보는 대둔산 기암절벽 전망이 케이블카 상부보다 훨씬 압도적이에요. 구름다리는 스릴도 있어요. 대둔산의 진짜 절경은 구름다리에 있어요. 케이블카만 타고 내려오면 반만 본 거예요. 너무 10분이 이렇게 다른 경험을 만든다는 게 좋았습니다.',
    secret_tip:'대둔산 케이블카 후 삼선 계단+금강 구름다리 필수 — 상부 역에서 10분 거리. 경사 51도 128계단 오르면 구름다리. 거기서 전망이 케이블카 상부보다 압도적. 많은 사람이 여기서 안 감',
    filming_guide:'대둔산 금강 구름다리 걷는 장면. 삼선 계단 51도 경사 클로즈업. 대둔산 기암절벽 드론 영상.',
    broll_ideas:['금강 구름다리 걷는 장면','삼선 계단 51도 경사','대둔산 기암절벽 드론','케이블카 상부 전망','완주 대둔산 전경'],
    hooks:['케이블카 타고 더 가야 해요','삼선 계단 오르면 구름다리예요','거기 전망이 훨씬 압도적이에요','많은 사람이 여기서 안 가요','완주 대둔산 꿀팁'],
    thumbnails:['금강 구름다리 걷기','삼선 계단 경사','기암절벽 드론','케이블카 상부','대둔산 전경'],
    captions:{youtube:'완주 대둔산 — 케이블카 타고 구름다리까지 가야 해요 🏔️\n\n삼선 계단+금강 구름다리가 진짜 절경!\n많은 사람이 여기서 안 가요\n\n📍 전북 완주군 운주면 대둔산공원길 55\n🏔️ 케이블카 상부에서 10분 더\n\n#완주대둔산 #대둔산케이블카 #완주 #전북여행 #금강구름다리',instagram:'완주 대둔산 케이블카 타고 구름다리까지 가야 해요 🏔️\n\n삼선 계단+금강 구름다리가 진짜 절경 ✨\n많은 사람이 케이블카만 타고 와요\n\n📍 전북 완주 대둔산\n\n#완주대둔산 #대둔산여행 #완주여행 #전북 #GemKorea',tiktok:'완주 대둔산 꿀팁 🏔️ 케이블카 타고 끝내면 안 돼요! 10분만 더 걸으면 삼선 계단+금강 구름다리 // 거기서 전망이 케이블카 상부보다 훨씬 압도적이에요 #완주대둔산 #대둔산여행 #전북'},
    hashtags:{korean:['#한국여행','#전북여행','#완주여행','#대둔산','#GemKorea'],place_specific:['#완주대둔산케이블카구름다리','#삼선계단51도128계단','#금강구름다리전망','#케이블카후10분더']}
  },
  {
    experience_id:'EX-GN-CUL-068', experience_name:'거제 포로수용소 역사 투어', category_sub:'역사 체험', region:'경상남도',
    script_30s:'오늘은 거제 포로수용소에 왔어요. 근데 아무도 안 알려주는 게 있어요 — 1952년 여기서 포로 폭동이 일어나 미군 사령관이 납치됐어요. 6.25 전쟁 역사를 바꾼 사건이에요. 그 현장이 바로 여기예요. 너무 역사가 이렇게 가까이 있다는 게 좋았습니다.',
    script_60s:'오늘은 경남 거제 포로수용소 유적공원을 탐방했어요. 6.25 한국전쟁 당시 가장 큰 포로수용소로 17만 명이 수용됐던 곳이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 거제 포로수용소에서 일어난 역사적 사건이 있어요. 1952년 5월, 수용소 포로들이 집단 폭동을 일으켰어요. 그 폭동에서 수용소 사령관 도드 준장이 포로들에게 납치됐어요. 이를 도드 사건이라고 해요. 미군 사령관이 포로에게 납치된 전례 없는 사건이에요. 이 사건은 국제 사회에 큰 파장을 일으켰고 한국전쟁 휴전 협상에도 영향을 줬어요. 거제도 포로수용소가 단순한 수용 시설이 아니라 6.25 전쟁의 핵심 역사 현장이에요. 전시관에서 도드 사건 관련 자료를 직접 볼 수 있어요. 너무 역사가 이렇게 가까이 있다는 게 좋았습니다.',
    secret_tip:'거제 포로수용소 = 1952년 도드 사건 현장 — 포로 폭동으로 미군 사령관 도드 준장 납치. 전례 없는 사건으로 휴전 협상에 영향. 전시관에서 도드 사건 자료 직접 관람 가능',
    filming_guide:'포로수용소 복원 구조물 전경. 도드 사건 관련 전시 자료. 거제도 배경.',
    broll_ideas:['포로수용소 복원 구조물','도드 사건 전시 자료','거제도 배경','6.25 사진 자료','포로 생활 재현'],
    hooks:['1952년 미군 사령관이 포로에게 납치됐어요','도드 사건이 여기서 일어났어요','전례 없는 역사적 사건이에요','휴전 협상에도 영향을 줬어요','거제 포로수용소 꿀팁'],
    thumbnails:['포로수용소 복원 구조물','도드 사건 전시 자료','거제도 배경','6.25 사진','포로 생활 재현'],
    captions:{youtube:'거제 포로수용소 — 1952년 미군 사령관이 납치됐어요 🏚️\n\n도드 사건이 여기서 일어났어요!\n6.25 휴전 협상에도 영향 준 역사\n\n📍 경남 거제시 계룡로 61 포로수용소\n🏚️ 17만 포로 수용 한국전쟁 최대 수용소\n\n#거제포로수용소 #거제 #경남여행 #도드사건 #6.25역사',instagram:'거제 포로수용소 1952년 미군 사령관이 포로에게 납치됐어요 🏚️\n\n도드 사건이 여기서 일어남 ✨\n6.25 휴전 협상에도 영향을 줬어요\n\n📍 경남 거제 포로수용소\n\n#거제포로수용소 #거제여행 #경남 #6.25역사 #GemKorea',tiktok:'거제 포로수용소 꿀팁 🏚️ 1952년 미군 사령관이 포로에게 납치된 도드 사건이 여기서 일어났어요! 전례 없는 역사적 사건 // 6.25 휴전 협상에도 영향을 줬어요 #거제포로수용소 #거제여행 #경남'},
    hashtags:{korean:['#한국여행','#경남여행','#거제여행','#포로수용소','#GemKorea'],place_specific:['#거제포로수용소도드사건','#1952년미군사령관납치','#도드사건한국전쟁','#6.25역사현장']}
  },
  {
    experience_id:'EX-CB-CUL-069', experience_name:'단양 고수동굴 탐험', category_sub:'자연체험', region:'충청북도',
    script_30s:'오늘은 단양 고수동굴 탐험을 했어요. 4억 년 전 동굴이에요. 근데 아무도 안 알려주는 게 있어요 — 이 동굴에 박쥐가 살아요. 박쥐가 동굴 생태계 지킴이예요. 박쥐 배설물이 동굴 식물 영양분이에요. 연결된 생태계예요. 너무 박쥐가 이렇게 중요하다는 게 좋았습니다.',
    script_60s:'오늘은 충북 단양 고수동굴을 탐험했어요. 천연기념물로 지정된 4억 년 전 석회암 동굴이에요. 종유석·석순·석주가 가득한 신비로운 동굴이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 고수동굴 생태계의 비밀이 있어요. 이 동굴에는 관박쥐가 수천 마리 살아요. 관박쥐는 멸종위기 야생생물로 지금은 탐방객에게 잘 안 보이게 보호 구역에 있어요. 그런데 이 박쥐가 동굴 생태계의 핵심이에요. 박쥐 배설물인 구아노가 동굴 내 특수 미생물과 곤충의 영양원이에요. 이 미생물이 동굴 암반을 분해하고 석회암 용해를 도와 종유석·석순이 자라는 속도에 영향을 줘요. 박쥐가 없으면 동굴 생태계 전체가 달라져요. 4억 년 동굴에서 박쥐가 생태 엔진 역할을 하는 거예요. 너무 박쥐가 이렇게 동굴 전체를 살린다는 게 좋았습니다.',
    secret_tip:'고수동굴 박쥐 = 동굴 생태계 핵심 — 관박쥐 배설물(구아노)이 동굴 미생물·곤충 영양원. 미생물이 암반 분해해 종유석 성장에 영향. 박쥐 없으면 동굴 생태계 달라짐',
    filming_guide:'종유석 물방울 떨어지는 클로즈업. 동굴 내 어두운 석순 군락 조명. 고수동굴 입구 전경.',
    broll_ideas:['종유석 물방울 클로즈업','석순 군락 조명','고수동굴 입구 전경','석주 전체 샷','동굴 좁은 통로'],
    hooks:['4억 년 동굴에 박쥐가 살아요','박쥐 배설물이 영양원이에요','박쥐 없으면 동굴 생태계 달라져요','4억 년 동굴 생태 엔진이에요','단양 고수동굴 꿀팁'],
    thumbnails:['종유석 물방울 클로즈업','석순 군락 조명','고수동굴 입구','석주 전체','동굴 통로'],
    captions:{youtube:'단양 고수동굴 — 박쥐가 동굴 생태계 엔진이에요 🦇\n\n배설물이 동굴 미생물 영양원!\n박쥐 없으면 종유석 성장도 달라져요\n\n📍 충북 단양군 단양읍 고수동굴길 8\n🦇 천연기념물 4억 년 석회암 동굴\n\n#단양고수동굴 #단양 #충북여행 #동굴박쥐생태 #천연기념물',instagram:'단양 고수동굴 박쥐가 동굴 생태계 엔진이에요 🦇\n\n배설물이 동굴 미생물 영양원 ✨\n박쥐 없으면 종유석 성장도 달라져요\n\n📍 충북 단양 고수동굴\n\n#단양고수동굴 #단양여행 #충북 #동굴탐험 #GemKorea',tiktok:'단양 고수동굴 꿀팁 🦇 박쥐가 동굴 생태계 엔진이에요! 배설물이 동굴 미생물 영양원 // 박쥐 없으면 종유석 성장도 달라져요 #단양고수동굴 #단양여행 #충북'},
    hashtags:{korean:['#한국여행','#충북여행','#단양여행','#동굴탐험','#GemKorea'],place_specific:['#단양고수동굴박쥐생태','#관박쥐구아노영양원','#동굴생태계핵심','#4억년동굴박쥐엔진']}
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
