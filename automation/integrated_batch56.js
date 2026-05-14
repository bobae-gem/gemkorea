const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const now = new Date().toISOString().slice(0,19);

const newExps = [
  {experience_id:'EX-GG-NAT-103',name:'광주 남한산성 설경 트레킹',category_main:'문화/체험',category_sub:'자연체험',region_main:'GG',region_sub:'경기도 광주시',address:'경기도 광주시 남한산성면 남한산성로 일대',lat:37.4800,lng:127.1786,price:'무료',duration:'2~3시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'경기 광주 남한산성에서 겨울 설경 트레킹을 즐기는 체험이다. 유네스코 세계문화유산 남한산성의 눈 쌓인 성벽 트레킹이 서울·수도권 최고 겨울 설경 코스로 병자호란 역사와 함께 즐기는 체험이다.',source_urls:['https://www.namhansansung.or.kr/'],data_confidence:'high',tags:['남한산성설경트레킹','남한산성','광주','경기','겨울설경','유네스코','병자호란'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'seasonal',operating_hours:'겨울 설경 시즌 (무료)',phone:'031-743-6610'},
  {experience_id:'EX-GN-NAT-100',name:'남해 앵강만 가을 드라이브',category_main:'문화/체험',category_sub:'자연체험',region_main:'GN',region_sub:'경상남도 남해군',address:'경상남도 남해군 남면 앵강만로 일대',lat:34.8258,lng:127.9019,price:'무료',duration:'1~2시간',reservation_required:false,target_user:['커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'경남 남해 앵강만 해안도로를 따라 드라이브하는 가을 체험이다. 남해 섬 내 앵강만을 굽어보며 달리는 해안 드라이브 코스가 억새와 남해 다도해가 어우러지는 10~11월 가을 드라이브 명소다.',source_urls:['https://www.namhae.go.kr/'],data_confidence:'high',tags:['남해앵강만드라이브','남해','경남','앵강만','가을드라이브','억새','다도해'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'10~11월 가을 시즌 (무료)',phone:'055-863-3427'},
  {experience_id:'EX-JN-NAT-109',name:'강진 전남도청 옛터 역사',category_main:'문화/체험',category_sub:'역사 체험',region_main:'JN',region_sub:'전라남도 강진군',address:'전라남도 강진군 강진읍 탐진로 일대',lat:34.6428,lng:126.7686,price:'무료',duration:'1시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'전남 강진에서 조선 시대 전라병영성과 전남 지역 역사를 탐방하는 역사 체험이다. 조선 시대 전라도 군사 중심지 전라병영성이 강진에 있었으며 정약용 유배지 사의재와 연계된 역사 코스다.',source_urls:['https://www.gangjin.go.kr/'],data_confidence:'high',tags:['강진전라병영성역사','강진','전남','전라병영성','조선군사','사의재','정약용'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (무료)',phone:'061-430-3783'},
  {experience_id:'EX-GG-CUL-090',name:'화성 봉담 딸기 따기',category_main:'문화/체험',category_sub:'농촌 체험',region_main:'GG',region_sub:'경기도 화성시',address:'경기도 화성시 봉담읍 일대 딸기 체험 농장',lat:37.2153,lng:126.9906,price:'체험 12,000원~',duration:'1~2시간',reservation_required:true,target_user:['가족','어린이','커플'],nearby_places:[],related_heritage_ids:[],short_description:'경기 화성 봉담 딸기 농장에서 딸기를 직접 따는 농촌 체험이다. 수도권 딸기 산지 화성 봉담에서 1~3월 딸기 수확 시즌에 직접 딸기를 따고 먹는 가족 체험으로 서울에서 40분 거리 수도권 최대 딸기 체험 지구다.',source_urls:['https://www.hwaseong.go.kr/'],data_confidence:'high',tags:['화성봉담딸기따기','화성','경기','봉담','딸기체험','1~3월','겨울딸기'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'seasonal',operating_hours:'1~3월 딸기 시즌 (예약 필수)',phone:'031-369-3001'},
  {experience_id:'EX-JB-NAT-076',name:'군산 새만금 드라이브',category_main:'문화/체험',category_sub:'자연체험',region_main:'JB',region_sub:'전라북도 군산시',address:'전라북도 군산시 새만금 방조제 일대',lat:35.8897,lng:126.5553,price:'무료',duration:'1~2시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'세계 최장 방조제 전북 군산 새만금 방조제 드라이브 체험이다. 33km 새만금 방조제 위를 달리며 서해 낙조를 감상하는 체험으로 방조제 한가운데서 보이는 서해 수평선이 압도적이다.',source_urls:['https://www.saemangeum.go.kr/'],data_confidence:'high',tags:['새만금방조제드라이브','새만금','군산','전북','세계최장방조제','서해낙조','드라이브'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (무료)',phone:'063-460-8114'},
  {experience_id:'EX-GW-NAT-089',name:'영월 선암마을 한반도지형',category_main:'문화/체험',category_sub:'자연체험',region_main:'GW',region_sub:'강원특별자치도 영월군',address:'강원특별자치도 영월군 한반도면 한반도로 24-7',lat:37.1819,lng:128.4192,price:'무료',duration:'1시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'강원 영월 선암마을에서 한반도 지형을 조망하는 체험이다. 강물이 S자로 굽이쳐 만든 지형이 하늘에서 보면 한반도 모양이어서 한반도지형이라 불리는 영월 절경 조망 명소다.',source_urls:['https://www.yw.go.kr/'],data_confidence:'high',tags:['영월한반도지형','영월','강원','한반도지형','선암마을','절벽조망','영월강'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (무료)',phone:'033-370-2924'},
  {experience_id:'EX-CB-NAT-051',name:'태안 꽃지해변 낙조',category_main:'문화/체험',category_sub:'자연체험',region_main:'CB',region_sub:'충청남도 태안군',address:'충청남도 태안군 안면읍 꽃지해안로 꽃지해수욕장',lat:36.4436,lng:126.4167,price:'무료',duration:'1시간',reservation_required:false,target_user:['커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'충남 태안 꽃지해변에서 할미바위·할아비바위와 서해 낙조를 감상하는 체험이다. 꽃지해수욕장 앞바다에 우뚝 선 두 바위 사이로 해가 지는 장관이 한국 최고 서해 낙조 포인트로 꼽힌다.',source_urls:['https://www.taean.go.kr/'],data_confidence:'high',tags:['태안꽃지해변낙조','태안','충남','꽃지해변','할미바위','서해낙조','일몰'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'일몰 전 방문 (무료)',phone:'041-670-2647'},
  {experience_id:'EX-GN-NAT-101',name:'마산 미더덕 제철 체험',category_main:'문화/체험',category_sub:'지역 먹거리',region_main:'GN',region_sub:'경상남도 창원시',address:'경상남도 창원시 마산합포구 어시장 일대',lat:35.2017,lng:128.5672,price:'먹거리 별도',duration:'1시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'경남 마산 어시장에서 마산 특산 미더덕을 즐기는 먹거리 체험이다. 3~5월 미더덕 제철에 마산에서 미더덕찜·미더덕 밥 등 마산 특유의 미더덕 요리를 즐기는 마산 대표 봄 먹거리 체험이다.',source_urls:['https://www.changwon.go.kr/'],data_confidence:'high',tags:['마산미더덕체험','마산','창원','경남','미더덕','봄제철해산물','마산특산'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'seasonal',operating_hours:'3~5월 미더덕 제철',phone:'055-220-4731'},
  {experience_id:'EX-GG-NAT-104',name:'이천 도드람산 진달래',category_main:'문화/체험',category_sub:'자연체험',region_main:'GG',region_sub:'경기도 이천시',address:'경기도 이천시 호법면 도드람산 일대',lat:37.2244,lng:127.5286,price:'무료',duration:'2시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'경기 이천 도드람산에서 4월 진달래 트레킹을 즐기는 체험이다. 이천 남부 도드람산 등산로 전체가 진달래꽃으로 물드는 경기 남부 숨은 진달래 명산으로 산 아래 이천 도예촌과 함께 코스를 즐길 수 있다.',source_urls:['https://www.icheon.go.kr/'],data_confidence:'high',tags:['이천도드람산진달래','이천','경기','도드람산','진달래','봄꽃산행','도예촌'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'4월 진달래 시즌 (무료)',phone:'031-644-2000'},
  {experience_id:'EX-JN-CUL-062',name:'순창 고추장 마을 체험',category_main:'문화/체험',category_sub:'지역 먹거리',region_main:'JN',region_sub:'전라북도 순창군',address:'전라북도 순창군 순창읍 순창고추장마을로 1가길 일대',lat:35.3711,lng:127.1378,price:'체험 10,000원~',duration:'1~2시간',reservation_required:true,target_user:['가족','개인'],nearby_places:[],related_heritage_ids:[],short_description:'전북 순창 전통 고추장 마을에서 순창 고추장을 직접 담그는 체험이다. 한국 고추장 최대 산지 순창에서 조선 시대 임금 진상품이었던 순창 고추장을 직접 담그고 장독 체험을 하는 발효 음식 체험이다.',source_urls:['https://www.sunchang.go.kr/'],data_confidence:'high',tags:['순창고추장마을체험','순창','전북','고추장','전통발효','진상품','장독체험'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'10:00~17:00 (예약 필수)',phone:'063-650-1678'},
  {experience_id:'EX-GB-NAT-052',name:'문경 오미자 농장 체험',category_main:'문화/체험',category_sub:'농촌 체험',region_main:'GB',region_sub:'경상북도 문경시',address:'경상북도 문경시 동로면 오미자로 일대 오미자 농장',lat:36.6581,lng:128.2994,price:'체험 10,000원~',duration:'1~2시간',reservation_required:true,target_user:['가족','개인'],nearby_places:[],related_heritage_ids:[],short_description:'경북 문경 오미자 농장에서 오미자를 따고 오미자 차를 만드는 농촌 체험이다. 전국 오미자 1위 생산지 문경에서 8~9월 빨간 오미자를 직접 따고 오미자 청·차 만들기를 체험하는 가을 농촌 체험이다.',source_urls:['https://www.gbmg.go.kr/'],data_confidence:'high',tags:['문경오미자농장체험','문경','경북','오미자','오미자청','농촌체험','8~9월수확'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'seasonal',operating_hours:'8~9월 수확 시즌 (예약 필수)',phone:'054-550-6421'},
  {experience_id:'EX-GW-NAT-090',name:'횡성 한우 불고기 투어',category_main:'문화/체험',category_sub:'지역 먹거리',region_main:'GW',region_sub:'강원특별자치도 횡성군',address:'강원특별자치도 횡성군 횡성읍 횡성한우길 일대',lat:37.4917,lng:127.9839,price:'2인 기준 60,000원~',duration:'1~2시간',reservation_required:false,target_user:['개인','커플','가족'],nearby_places:[],related_heritage_ids:[],short_description:'강원 횡성 한우 거리에서 횡성 한우 불고기를 즐기는 먹거리 체험이다. 청정 강원 횡성 한우가 전국 최고 품질로 유명한데 횡성 읍내 한우 식당 거리에서 신선한 횡성 한우 불고기·구이를 즐긴다.',source_urls:['https://www.hsg.go.kr/'],data_confidence:'high',tags:['횡성한우불고기투어','횡성','강원','횡성한우','한우불고기','청정강원','1++한우'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'11:00~21:00',phone:'033-340-2114'}
];

const newShorts = [
  {
    experience_id:'EX-JN-CUL-062', experience_name:'순창 고추장 마을 체험', category_sub:'지역 먹거리', region:'전라북도',
    script_30s:'오늘은 순창 고추장 마을에서 고추장을 담갔어요. 근데 아무도 안 알려주는 게 있어요 — 순창 고추장이 조선 임금 진상품이었어요. 조선 전기에 이미 전국 최고였어요. 그 이유가 있어요. 순창 물 때문이에요. 너무 물이 이렇게 장을 만든다는 게 좋았습니다.',
    script_60s:'오늘은 전북 순창 전통 고추장 마을에서 직접 고추장을 담갔어요. 조선 임금 진상품이었던 순창 고추장이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 순창 고추장이 조선 시대부터 전국 1위인 이유가 있어요. 순창의 지형이 분지예요. 섬진강 지류가 합류하는 분지 안에 아침 안개가 자주 끼어요. 이 안개 덕분에 습도가 높고 미생물이 풍부해요. 그 미생물이 메주 발효를 돕고 고추장 맛을 만들어요. 순창 고추장 독특한 단맛의 비결이 순창의 기후와 물이에요. 그리고 조선 태조 이성계가 스승 무학대사를 만나러 가다 순창 고추장을 맛보고 반했다는 전설도 있어요. 순창 고추장 마을에 직접 가면 수십 년 된 장독들이 줄지어 있어요. 너무 물이 이렇게 장을 만든다는 게 좋았습니다.',
    secret_tip:'순창 고추장 = 분지 안개 습도+미생물 풍부 = 발효 최적 — 섬진강 지류 분지 안개 자주 낌. 태조 이성계 맛보고 반한 전설. 조선 전기부터 진상품. 장독 수십 년 된 마을 직접 방문',
    filming_guide:'순창 고추장 마을 장독 줄지어 선 전경. 고추장 담그는 체험 손. 순창 분지 배경.',
    broll_ideas:['장독 줄지어 선 전경','고추장 담그는 손','순창 분지 배경','완성된 고추장 클로즈업','고추장 담그기 체험'],
    hooks:['조선 임금 진상품이었어요','순창 물과 분지 안개가 비결이에요','태조 이성계도 반한 맛이에요','미생물이 발효를 도와요','순창 고추장 꿀팁'],
    thumbnails:['장독 줄지어 선 전경','고추장 담그는 손','순창 분지 배경','완성된 고추장','고추장 체험'],
    captions:{youtube:'순창 고추장 마을 — 조선 임금 진상품이었어요 🌶️\n\n분지 안개 미생물이 발효 비결!\n태조 이성계도 반한 맛\n\n📍 전북 순창군 순창고추장마을로\n🌶️ 조선 임금 진상품 전국 고추장 1위\n\n#순창고추장마을체험 #순창고추장 #순창 #전북여행 #조선진상품',instagram:'순창 고추장 마을 조선 임금 진상품이었어요 🌶️\n\n분지 안개 미생물이 발효 비결 ✨\n태조 이성계도 반한 맛\n\n📍 전북 순창 고추장 마을\n\n#순창고추장마을 #순창고추장 #순창여행 #전북 #GemKorea',tiktok:'순창 고추장 꿀팁 🌶️ 조선 임금 진상품이었어요! 분지 안개+미생물이 발효 비결 // 태조 이성계도 반한 맛이에요 #순창고추장마을 #순창여행 #전북'},
    hashtags:{korean:['#한국여행','#전북여행','#순창여행','#순창고추장','#GemKorea'],place_specific:['#순창고추장분지안개미생물발효','#섬진강지류분지안개자주낌','#태조이성계반한전설','#조선전기진상품전국1위']}
  },
  {
    experience_id:'EX-GW-NAT-089', experience_name:'영월 선암마을 한반도지형', category_sub:'자연체험', region:'강원특별자치도',
    script_30s:'오늘은 영월 한반도지형을 봤어요. 강물이 한반도 모양이에요. 근데 아무도 안 알려주는 게 있어요 — 하늘에서 보면 백두산·제주도까지 표현돼 있어요. 강물이 이렇게 정교하게 한반도를 만들었어요. 너무 자연이 이렇게 지도를 그린다는 게 좋았습니다.',
    script_60s:'오늘은 강원도 영월 선암마을 한반도지형 전망대를 탐방했어요. 강물이 만든 한반도 모양 지형이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 한반도지형의 지질학적 비밀이 있어요. 한반도지형은 평창강이 S자로 굽이쳐 만든 지형이에요. 강물이 굽이치는 곳에서는 안쪽 퇴적·바깥쪽 침식이 일어나요. 수십만 년에 걸쳐 이 과정이 반복되면서 한반도 모양이 만들어졌어요. 조선반도 남단 호두봉 절벽에서 내려다보면 강물이 반도 모양으로 섬처럼 분리된 지형이 보여요. 하늘에서 보면 한반도 북단에는 백두산 모양 봉우리가, 남쪽에는 제주도 모양 둥근 섬이 있어요. 자연이 만든 우연의 일치예요. 전망대까지 오르는 계단이 가파르지만 정상에서 보이는 풍경이 압도적이에요. 너무 자연이 이렇게 지도를 그린다는 게 좋았습니다.',
    secret_tip:'영월 한반도지형 = 평창강 S자 굽이 수십만 년 퇴적·침식이 만든 한반도 모양 — 하늘에서 보면 백두산+제주도 모양도 있음. 조선반도 남단 절벽 전망대에서 최고 조망. 영월 별마로 세트',
    filming_guide:'한반도지형 드론 항공 영상. 전망대에서 내려다보는 강물. 한반도 모양 강 전체 샷.',
    broll_ideas:['한반도지형 드론 항공','전망대 내려다보기','한반도 강물 전체 샷','S자 굽이 클로즈업','영월 산 배경'],
    hooks:['강물이 한반도 모양이에요','수십만 년에 걸쳐 만들어졌어요','하늘에서 보면 백두산도 있어요','전망대 오르면 압도적이에요','영월 한반도지형 꿀팁'],
    thumbnails:['한반도지형 드론','전망대 내려다보기','한반도 강물','S자 굽이','영월 산 배경'],
    captions:{youtube:'영월 한반도지형 — 강물이 한반도 모양이에요 🗺️\n\n수십만 년 퇴적·침식이 만든 자연 지도!\n하늘에서 보면 백두산+제주도도 있어요\n\n📍 강원도 영월군 한반도면 선암마을\n🗺️ 평창강이 만든 한반도 모양 지형\n\n#영월한반도지형 #한반도지형 #영월 #강원여행 #강물한반도',instagram:'영월 한반도지형 강물이 한반도 모양이에요 🗺️\n\n수십만 년 퇴적·침식이 만든 자연 지도 ✨\n하늘에서 보면 백두산+제주도도\n\n📍 강원 영월 한반도지형\n\n#영월한반도지형 #한반도지형 #영월여행 #강원 #GemKorea',tiktok:'영월 한반도지형 꿀팁 🗺️ 강물이 한반도 모양이에요! 수십만 년 퇴적·침식이 만든 자연 지도 // 하늘에서 보면 백두산+제주도 모양도 있어요 #영월한반도지형 #영월여행 #강원'},
    hashtags:{korean:['#한국여행','#강원여행','#영월여행','#한반도지형','#GemKorea'],place_specific:['#영월한반도지형수십만년퇴적침식','#평창강S자굽이한반도','#하늘에서백두산제주도모양','#조선반도남단절벽전망대']}
  },
  {
    experience_id:'EX-CB-NAT-051', experience_name:'태안 꽃지해변 낙조', category_sub:'자연체험', region:'충청남도',
    script_30s:'오늘은 태안 꽃지해변에서 낙조를 봤어요. 할미바위·할아비바위 사이로 해가 져요. 근데 아무도 안 알려주는 게 있어요 — 두 바위가 부부 전설이에요. 헤어진 부부가 바위가 됐어요. 그 사이로 해가 지는 낙조가 슬프고 아름다워요. 너무 전설이 이렇게 낙조를 만든다는 게 좋았습니다.',
    script_60s:'오늘은 충남 태안 꽃지해수욕장에서 할미·할아비바위 낙조를 감상했어요. 서해 최고 낙조 명소예요. 근데 아무도 안 알려주는 꿀팁 하나 — 두 바위의 전설이 있어요. 꽃지해변 앞바다의 할미바위와 할아비바위는 부부 전설을 담고 있어요. 옛날 어부와 아내가 있었어요. 어부가 바다로 나간 후 돌아오지 않았어요. 아내가 매일 해변에서 남편을 기다리다 그 자리에서 바위가 됐어요. 남편은 먼바다 다른 섬에서 바위가 됐어요. 두 바위가 서로 바라보며 영원히 기다리는 모습이에요. 그 두 바위 사이로 해가 지는 낙조가 한국에서 가장 아름다운 서해 낙조예요. 낙조 사진 촬영하려면 일몰 30분 전에 도착해야 해요. 너무 전설이 이렇게 낙조를 만든다는 게 좋았습니다.',
    secret_tip:'태안 꽃지 할미·할아비바위 = 기다리는 부부 전설 — 헤어진 부부가 서로 바라보며 바위가 됨. 두 바위 사이 낙조가 한국 최고 서해 낙조. 일몰 30분 전 도착 권장. 안면도 세트',
    filming_guide:'할미·할아비바위 사이 서해 낙조. 바위 실루엣+낙조 조합. 꽃지해변 전경.',
    broll_ideas:['바위 사이 서해 낙조','바위 실루엣+낙조','꽃지해변 전경','일몰 직전 황금빛','태안 해안 배경'],
    hooks:['두 바위가 부부 전설이에요','기다리다 바위가 됐어요','그 사이로 해가 져요','한국 최고 서해 낙조예요','태안 꽃지 꿀팁'],
    thumbnails:['바위 사이 낙조','바위 실루엣+낙조','꽃지해변 전경','황금빛 일몰','태안 해안'],
    captions:{youtube:'태안 꽃지해변 낙조 — 두 바위가 부부 전설이에요 🌅\n\n기다리다 바위가 된 부부!\n두 바위 사이 서해 낙조 한국 최고\n\n📍 충남 태안군 안면읍 꽃지해안로\n🌅 한국 최고 서해 낙조 명소\n\n#태안꽃지해변낙조 #꽃지해변 #태안 #충남여행 #서해낙조',instagram:'태안 꽃지해변 낙조 두 바위가 부부 전설이에요 🌅\n\n기다리다 바위가 된 부부 ✨\n두 바위 사이 서해 낙조 한국 최고\n\n📍 충남 태안 꽃지해변\n\n#태안꽃지해변 #꽃지낙조 #태안여행 #충남 #GemKorea',tiktok:'태안 꽃지해변 낙조 꿀팁 🌅 두 바위가 기다리다 바위가 된 부부 전설이에요! 그 두 바위 사이로 해가 지는 낙조 // 한국 최고 서해 낙조예요 #태안꽃지해변낙조 #꽃지해변 #태안여행'},
    hashtags:{korean:['#한국여행','#충남여행','#태안여행','#꽃지해변낙조','#GemKorea'],place_specific:['#태안꽃지할미할아비바위부부전설','#기다리다바위된부부','#두바위사이서해낙조한국최고','#일몰30분전도착권장']}
  },
  {
    experience_id:'EX-GG-CUL-090', experience_name:'화성 봉담 딸기 따기', category_sub:'농촌 체험', region:'경기도',
    script_30s:'오늘은 화성 봉담 딸기 농장에서 딸기를 땄어요. 근데 아무도 안 알려주는 게 있어요 — 딸기가 실제로 과일이 아니에요. 식물학적으로 채소예요. 장미과 식물이에요. 너무 딸기가 이렇게 채소라는 게 좋았습니다.',
    script_60s:'오늘은 경기도 화성 봉담 딸기 농장에서 딸기 따기 체험을 했어요. 1~3월 겨울 딸기 시즌이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 딸기에 대한 오해가 있어요. 딸기는 과일처럼 보이지만 식물학적으로는 채소예요. 장미과 식물이에요. 채소와 과일의 분류는 나무에서 나면 과일, 한해살이 풀에서 나면 채소예요. 딸기는 다년생이지만 풀에서 나는 채소예요. 그런데 우리가 먹는 빨간 부분이 실제로 딸기 열매가 아니에요. 딸기의 진짜 열매는 겉에 박힌 작은 씨앗들이에요. 우리가 먹는 빨간 부분은 꽃턱이 비대해진 부분이에요. 딸기 농장에서 잘 익은 딸기 고르는 법이 있어요. 꼭지 아래 흰 부분이 없고 전체가 빨간 것이 완숙이에요. 너무 딸기가 이렇게 채소라는 게 좋았습니다.',
    secret_tip:'딸기 = 식물학적 채소 (장미과 풀에서 나는 것) — 우리가 먹는 빨간 부분은 꽃턱 비대화. 진짜 열매는 겉의 작은 씨앗들. 완숙 고르기 = 꼭지 아래 흰 부분 없이 전체 빨강. 화성 봉담 1~3월 시즌',
    filming_guide:'딸기 따는 손 클로즈업. 완숙 딸기 빨간 전체 클로즈업. 봉담 딸기 농장 전경.',
    broll_ideas:['딸기 따는 손 클로즈업','완숙 딸기 전체 빨강','봉담 딸기 농장 전경','딸기 씨앗 클로즈업','딸기 현장 먹기'],
    hooks:['딸기가 식물학적 채소예요','장미과 풀에서 나요','빨간 부분이 꽃턱이에요','진짜 열매는 씨앗이에요','화성 딸기 따기 꿀팁'],
    thumbnails:['딸기 따는 손','완숙 딸기 빨강','봉담 농장 전경','딸기 씨앗','딸기 현장 먹기'],
    captions:{youtube:'화성 봉담 딸기 따기 — 딸기가 식물학적 채소예요 🍓\n\n빨간 부분은 꽃턱 진짜 열매는 씨앗!\n완숙 고르기 꼭지 아래 흰 부분 없이\n\n📍 경기도 화성시 봉담읍 딸기 체험 농장\n🍓 1~3월 겨울 딸기 수확 시즌\n\n#화성봉담딸기따기 #봉담딸기 #화성 #경기여행 #겨울딸기체험',instagram:'화성 봉담 딸기 따기 딸기가 식물학적 채소예요 🍓\n\n빨간 부분 꽃턱 진짜 열매 씨앗 ✨\n완숙 고르기 꼭지 아래 흰 부분 없이\n\n📍 경기 화성 봉담 딸기 농장\n\n#화성봉담딸기따기 #봉담딸기 #화성여행 #경기 #GemKorea',tiktok:'화성 봉담 딸기 꿀팁 🍓 딸기가 식물학적 채소예요! 빨간 부분이 꽃턱 진짜 열매는 씨앗 // 완숙 고르기: 꼭지 아래 흰 부분 없이 전체 빨강 #화성봉담딸기 #화성여행 #경기'},
    hashtags:{korean:['#한국여행','#경기여행','#화성여행','#봉담딸기따기','#GemKorea'],place_specific:['#화성봉담딸기식물학적채소','#빨간부분꽃턱진짜열매씨앗','#완숙고르기꼭지아래흰부분없음','#1~3월겨울딸기수확시즌']}
  },
  {
    experience_id:'EX-GW-NAT-090', experience_name:'횡성 한우 불고기 투어', category_sub:'지역 먹거리', region:'강원특별자치도',
    script_30s:'오늘은 횡성 한우를 먹었어요. 근데 아무도 안 알려주는 게 있어요 — 횡성 한우가 맛있는 이유가 있어요. 강원 청정 공기와 치악산 지하수가 비결이에요. 스트레스가 없는 소가 맛있어요. 너무 행복한 소가 이렇게 맛있다는 게 좋았습니다.',
    script_60s:'오늘은 강원도 횡성 한우 거리에서 횡성 한우를 즐겼어요. 전국 한우 최고 브랜드 중 하나예요. 근데 아무도 안 알려주는 꿀팁 하나 — 횡성 한우가 유독 맛있는 이유가 있어요. 첫째 횡성은 강원도 내륙 분지로 공기가 청정해요. 한우 축사 주변 공기 질이 스트레스 지수에 영향을 줘요. 스트레스 없는 소가 고기 맛이 좋아요. 둘째 치악산 계곡에서 흘러내려오는 지하수가 횡성 우물물이에요. 미네랄 풍부한 물을 마신 소가 육질이 좋아요. 셋째 강원 고원 서늘한 기후로 소가 자연스럽게 지방을 잘 축적해요. 이 세 가지가 횡성 한우 1++등급 비율이 높은 이유예요. 횡성읍 한우 거리에서 도축 당일 고기를 판매하는 식당도 있어요. 너무 행복한 소가 이렇게 맛있다는 게 좋았습니다.',
    secret_tip:'횡성 한우 맛있는 이유 3가지 = 청정 공기(스트레스 없음)+치악산 미네랄 지하수+서늘한 기후 지방 축적 — 1++ 등급 비율 높음. 횡성읍 한우 거리 도축 당일 고기 식당. 치악산 세트',
    filming_guide:'횡성 한우 불고기 굽는 장면. 횡성 한우 마블링 육색 클로즈업. 치악산 배경 횡성 들판.',
    broll_ideas:['횡성 한우 불고기 굽기','마블링 육색 클로즈업','치악산 배경 들판','횡성 한우 거리 전경','한우 시식'],
    hooks:['청정 공기가 스트레스 없게 해요','치악산 지하수가 비결이에요','서늘한 기후가 지방 축적을 도와요','1++ 등급 비율이 높아요','횡성 한우 꿀팁'],
    thumbnails:['횡성 한우 불고기','마블링 육색 클로즈업','치악산 배경','한우 거리 전경','시식'],
    captions:{youtube:'횡성 한우 — 청정 공기+치악산 지하수+서늘 기후 비결이에요 🥩\n\n스트레스 없는 소가 맛있어요!\n1++ 등급 비율이 높은 이유\n\n📍 강원도 횡성군 횡성읍 횡성한우길\n🥩 강원 청정 전국 한우 최고 브랜드\n\n#횡성한우불고기투어 #횡성한우 #횡성 #강원여행 #한우맛있는이유',instagram:'횡성 한우 청정 공기+치악산 지하수+서늘 기후 비결이에요 🥩\n\n스트레스 없는 소가 맛있는 이유 ✨\n1++ 등급 비율 높음\n\n📍 강원 횡성 한우 거리\n\n#횡성한우 #횡성여행 #강원 #한우 #GemKorea',tiktok:'횡성 한우 꿀팁 🥩 청정 공기+치악산 지하수+서늘 기후가 비결이에요! 스트레스 없는 소가 맛있어요 // 1++ 등급 비율이 높은 이유예요 #횡성한우불고기 #횡성여행 #강원'},
    hashtags:{korean:['#한국여행','#강원여행','#횡성여행','#횡성한우','#GemKorea'],place_specific:['#횡성한우청정공기치악산지하수','#스트레스없는소가맛있음','#서늘기후지방축적1++등급높음','#도축당일고기식당']}
  },
  {
    experience_id:'EX-JB-NAT-076', experience_name:'군산 새만금 드라이브', category_sub:'자연체험', region:'전라북도',
    script_30s:'오늘은 새만금 방조제를 드라이브했어요. 세계 최장 33km예요. 근데 아무도 안 알려주는 게 있어요 — 새만금이 새로운 금만경이에요. 금강+만경강이 만나는 곳이에요. 그 이름이에요. 너무 이름이 이렇게 지리를 담는다는 게 좋았습니다.',
    script_60s:'오늘은 전북 군산 새만금 방조제 33km를 드라이브했어요. 세계에서 가장 긴 방조제예요. 근데 아무도 안 알려주는 꿀팁 하나 — 새만금이라는 이름의 뜻이 있어요. 새만금은 새로운 금만경 평야라는 뜻이에요. 금강과 만경강이 만나는 지역이 금만경이에요. 금강+만경을 합쳐 금만경이에요. 그 앞에 새롭다는 새가 붙어 새만금이에요. 새만금 방조제 공사는 1991년 시작해서 2006년 완공됐어요. 15년간 공사했어요. 방조제 안쪽이 간척지로 새로운 땅이 만들어지고 있어요. 그 넓이가 서울시 3분의 2 규모예요. 방조제 위에서 보는 서해 수평선과 낙조가 압도적이에요. 방조제 한가운데 새만금 공원도 있어요. 너무 이름이 이렇게 지리를 담는다는 게 좋았습니다.',
    secret_tip:'새만금 = 새로운 금만경(금강+만경강) — 1991~2006년 15년 공사. 방조제 안쪽 서울 3분의 2 규모 간척지 생성 중. 방조제 위 서해 수평선+낙조 압도적. 방조제 한가운데 새만금 공원',
    filming_guide:'새만금 방조제 33km 드라이브 전경. 방조제 위 서해 수평선. 새만금 낙조.',
    broll_ideas:['방조제 33km 드라이브','방조제 위 서해 수평선','새만금 낙조','새만금 공원 전경','간척지 개발 전경'],
    hooks:['세계 최장 33km 방조제예요','금강+만경강이 합쳐진 이름이에요','서울 3분의 2 크기 새 땅이 생겨요','낙조가 압도적이에요','새만금 드라이브 꿀팁'],
    thumbnails:['방조제 드라이브 전경','서해 수평선','새만금 낙조','새만금 공원','간척지 개발'],
    captions:{youtube:'군산 새만금 드라이브 — 세계 최장 33km 방조제예요 🌊\n\n금강+만경강=새만금 이름 뜻!\n서울 3분의 2 크기 새 땅 생성 중\n\n📍 전북 군산시 새만금 방조제 33km\n🌊 세계 최장 방조제 1991~2006년 15년 공사\n\n#군산새만금드라이브 #새만금방조제 #군산 #전북여행 #세계최장방조제',instagram:'군산 새만금 드라이브 세계 최장 33km 방조제예요 🌊\n\n금강+만경강=새만금 이름 뜻 ✨\n서울 3분의 2 크기 새 땅 생성 중\n\n📍 전북 군산 새만금 방조제\n\n#군산새만금 #새만금방조제 #군산여행 #전북 #GemKorea',tiktok:'새만금 드라이브 꿀팁 🌊 세계 최장 33km 방조제예요! 금강+만경강=새만금 이름 뜻 // 서울 3분의 2 크기 새 땅이 생성 중이에요 #군산새만금드라이브 #군산여행 #전북'},
    hashtags:{korean:['#한국여행','#전북여행','#군산여행','#새만금방조제','#GemKorea'],place_specific:['#군산새만금세계최장33km','#금강만경강새만금이름뜻','#1991~2006년15년공사','#서울3분의2크기간척지']}
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
