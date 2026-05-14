const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const now = new Date().toISOString().slice(0,19);

const newExps = [
  {experience_id:'EX-GG-NAT-100',name:'파주 장단 콩 축제',category_main:'문화/체험',category_sub:'축제',region_main:'GG',region_sub:'경기도 파주시',address:'경기도 파주시 적성면 DMZ 인근 장단 콩 재배지',lat:37.8833,lng:126.8781,price:'무료~체험비 상이',duration:'2~4시간',reservation_required:false,target_user:['가족','개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'경기 파주 DMZ 인근 장단 콩 재배지에서 콩 수확 체험과 두부 만들기를 즐기는 농촌 체험이다. 한국 최고 명품 콩으로 알려진 파주 장단콩은 DMZ 청정 토양에서 재배되며 장단콩 축제가 매년 10~11월 열린다.',source_urls:['https://www.paju.go.kr/'],data_confidence:'high',tags:['파주장단콩축제','파주','경기','장단콩','DMZ','콩수확체험','두부만들기'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'10~11월 축제 기간',phone:'031-954-4430'},
  {experience_id:'EX-GN-NAT-099',name:'함양 심진강 래프팅',category_main:'문화/체험',category_sub:'어드벤처/레포츠',region_main:'GN',region_sub:'경상남도 함양군',address:'경상남도 함양군 함양읍 심진강 래프팅 출발지',lat:35.5106,lng:127.7214,price:'1인 25,000원~',duration:'2시간',reservation_required:true,target_user:['가족','개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'경남 함양 심진강에서 래프팅을 즐기는 어드벤처 체험이다. 지리산 자락에서 흘러내려오는 함양 심진강의 맑은 1급수 물에서 래프팅을 즐기며 지리산 주변 자연 속 청정 계곡 래프팅이다.',source_urls:['https://www.hamyang.go.kr/'],data_confidence:'high',tags:['함양심진강래프팅','함양','경남','심진강','래프팅','지리산','1급수'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'seasonal',operating_hours:'5~9월 (예약 필수)',phone:'055-960-5553'},
  {experience_id:'EX-JN-NAT-107',name:'여수 소안도 트레킹',category_main:'문화/체험',category_sub:'자연체험',region_main:'JN',region_sub:'전라남도 완도군',address:'전라남도 완도군 소안면 소안도',lat:34.2161,lng:126.8317,price:'배편 왕복 15,000원~',duration:'4~5시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'전남 완도 소안도에서 항일 독립운동 역사와 해안 트레킹을 즐기는 체험이다. 소안도는 일제강점기 가장 강력한 항일 독립운동의 섬으로 전국에서 독립유공자 비율이 가장 높은 섬이다.',source_urls:['https://www.wando.go.kr/'],data_confidence:'high',tags:['소안도트레킹','소안도','완도','전남','항일독립운동','독립유공자','섬여행'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'배편 시간 확인 필수',phone:'061-550-5282'},
  {experience_id:'EX-GB-CUL-051',name:'의성 마늘 박물관 투어',category_main:'문화/체험',category_sub:'지역 먹거리',region_main:'GB',region_sub:'경상북도 의성군',address:'경상북도 의성군 단북면 의성마늘길 50 마늘박물관',lat:36.3747,lng:128.7503,price:'무료',duration:'1시간',reservation_required:false,target_user:['개인','커플','가족'],nearby_places:[],related_heritage_ids:[],short_description:'경북 의성 마늘박물관에서 한국 마늘 문화를 체험하는 투어다. 전국 마늘 생산량 1위 경북 의성에서 마늘의 역사·재배·효능을 배우고 마늘 수확 체험과 마늘 요리를 즐기는 먹거리 체험이다.',source_urls:['https://www.uiseong.go.kr/'],data_confidence:'high',tags:['의성마늘박물관','의성','경북','의성마늘','마늘박물관','마늘수확','마늘1위'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00 (월 휴관)',phone:'054-830-6000'},
  {experience_id:'EX-GG-CUL-089',name:'남양주 다산 생태공원',category_main:'문화/체험',category_sub:'자연체험',region_main:'GG',region_sub:'경기도 남양주시',address:'경기도 남양주시 조안면 다산생태공원 일대',lat:37.5592,lng:127.3153,price:'무료',duration:'1~2시간',reservation_required:false,target_user:['개인','커플','가족'],nearby_places:[],related_heritage_ids:[],short_description:'경기 남양주 한강변 다산 생태공원을 산책하는 자연 체험이다. 정약용 기념관 인접 한강변에 조성된 생태공원으로 봄 유채꽃·벚꽃과 한강 풍경이 어우러지는 수도권 봄꽃 명소다.',source_urls:['https://www.nyj.go.kr/'],data_confidence:'high',tags:['남양주다산생태공원','남양주','경기','다산생태공원','봄꽃','유채꽃','한강변'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'연중 (무료, 봄 4~5월 최고)',phone:'031-590-2837'},
  {experience_id:'EX-CB-NAT-050',name:'청양 칠갑산 천장호 출렁다리',category_main:'문화/체험',category_sub:'어드벤처/레포츠',region_main:'CB',region_sub:'충청남도 청양군',address:'충청남도 청양군 정산면 천장리 천장호 출렁다리',lat:36.4344,lng:126.8244,price:'성인 2,000원',duration:'1시간',reservation_required:false,target_user:['커플','개인','가족'],nearby_places:[],related_heritage_ids:[],short_description:'충남 청양 천장호 위를 걷는 출렁다리를 체험하는 체험이다. 207m 길이 천장호 출렁다리에서 칠갑산과 호수가 어우러진 충남 최고 조망을 즐기며 짜릿한 출렁다리 체험을 즐긴다.',source_urls:['https://www.cheongyang.go.kr/'],data_confidence:'high',tags:['청양천장호출렁다리','청양','충남','천장호','출렁다리','칠갑산','어드벤처'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00',phone:'041-940-2535'},
  {experience_id:'EX-GW-NAT-088',name:'정선 레일바이크',category_main:'문화/체험',category_sub:'어드벤처/레포츠',region_main:'GW',region_sub:'강원특별자치도 정선군',address:'강원특별자치도 정선군 여량면 레일바이크길 155',lat:37.4536,lng:128.7567,price:'2인 기준 28,000원~',duration:'1~2시간',reservation_required:true,target_user:['커플','가족'],nearby_places:[],related_heritage_ids:[],short_description:'강원 정선 구절리역에서 아우라지역까지 탄광 폐철도를 달리는 레일바이크 체험이다. 정선 아리랑 발상지 아우라지 강변을 달리며 탄광 역사와 정선 협곡 절경을 즐기는 강원 대표 레일바이크다.',source_urls:['https://www.railpark.co.kr/'],data_confidence:'high',tags:['정선레일바이크','정선','강원','레일바이크','아우라지','탄광역사','정선아리랑'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~17:30 (예약 필수)',phone:'033-563-8787'},
  {experience_id:'EX-JN-CUL-061',name:'순천 낙안읍성 민속 공연',category_main:'문화/체험',category_sub:'전통공연',region_main:'JN',region_sub:'전라남도 순천시',address:'전라남도 순천시 낙안면 충민길 30 낙안읍성',lat:34.9497,lng:127.3706,price:'성인 4,000원',duration:'2시간',reservation_required:false,target_user:['가족','개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'전남 순천 낙안읍성에서 전통 민속 공연과 각종 전통 체험을 즐기는 프로그램이다. 조선 시대 읍성 안에서 강강술래·탈춤·풍물 놀이를 관람하고 참여하는 전통 공연 체험이다.',source_urls:['https://www.suncheon.go.kr/'],data_confidence:'high',tags:['낙안읍성민속공연','낙안읍성','순천','전남','강강술래','탈춤','민속공연'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'10:00~17:00 (공연 일정 확인)',phone:'061-749-8831'},
  {experience_id:'EX-GB-NAT-051',name:'영덕 대게 해산물 투어',category_main:'문화/체험',category_sub:'지역 먹거리',region_main:'GB',region_sub:'경상북도 영덕군',address:'경상북도 영덕군 강구면 영덕대게로 일대',lat:36.4244,lng:129.3672,price:'대게 1마리 30,000원~',duration:'1~2시간',reservation_required:false,target_user:['개인','커플','가족'],nearby_places:[],related_heritage_ids:[],short_description:'경북 영덕 강구항에서 신선한 영덕 대게를 즐기는 먹거리 체험이다. 국내 대게 최대 산지 영덕 강구항에서 직접 잡아 올린 대게를 맛보는 체험으로 매년 봄 영덕 대게 축제도 열린다.',source_urls:['https://www.yd.go.kr/'],data_confidence:'high',tags:['영덕대게투어','영덕','경북','대게','강구항','영덕대게축제','동해'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (대게 성수기 11~5월)',phone:'054-730-6553'},
  {experience_id:'EX-GG-NAT-101',name:'가평 자라섬 캠핑',category_main:'문화/체험',category_sub:'자연체험',region_main:'GG',region_sub:'경기도 가평군',address:'경기도 가평군 가평읍 달전리 자라섬 캠핑장',lat:37.8339,lng:127.5081,price:'성인 캠핑 25,000원~',duration:'1박2일',reservation_required:true,target_user:['가족','개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'경기 가평 자라섬에서 북한강 강변 캠핑을 즐기는 체험이다. 수도권 최인기 캠핑 명소 가평 자라섬 캠핑장에서 북한강 물소리 들으며 하룻밤 캠핑을 즐기고 10월 자라섬 재즈 페스티벌도 함께 즐길 수 있다.',source_urls:['https://www.gapyeong.go.kr/'],data_confidence:'high',tags:['가평자라섬캠핑','가평','경기','자라섬','캠핑','북한강','재즈페스티벌'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (예약 필수)',phone:'031-580-2068'},
  {experience_id:'EX-JN-NAT-108',name:'완도 수목원 봄꽃',category_main:'문화/체험',category_sub:'자연체험',region_main:'JN',region_sub:'전라남도 완도군',address:'전라남도 완도군 군외면 완도수목원길 156',lat:34.2831,lng:126.7994,price:'성인 3,000원',duration:'2시간',reservation_required:false,target_user:['개인','커플','가족'],nearby_places:[],related_heritage_ids:[],short_description:'전남 완도 국립 완도수목원에서 봄꽃을 감상하는 자연 체험이다. 난대 식물 전문 완도수목원은 따뜻한 기후 덕분에 동백·왕벚꽃·수선화 등 봄꽃이 1~2주 빨리 피는 전남 최고 봄꽃 수목원이다.',source_urls:['https://wando.knps.or.kr/'],data_confidence:'high',tags:['완도수목원봄꽃','완도','전남','수목원','동백','난대식물','봄꽃'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'09:00~18:00 (봄 시즌 최고)',phone:'061-552-1544'},
  {experience_id:'EX-GG-NAT-102',name:'성남 화랑공원 봄 나들이',category_main:'문화/체험',category_sub:'자연체험',region_main:'GG',region_sub:'경기도 성남시',address:'경기도 성남시 수정구 화랑로 369 화랑공원',lat:37.4319,lng:127.1606,price:'무료',duration:'1~2시간',reservation_required:false,target_user:['가족','개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'경기 성남 화랑공원에서 봄 벚꽃 나들이를 즐기는 체험이다. 분당 주민들이 즐기는 성남 화랑공원 벚꽃이 4월 만개하면 수정구 중심 공원 전체가 벚꽃으로 뒤덮이는 숨은 벚꽃 명소다.',source_urls:['https://www.seongnam.go.kr/'],data_confidence:'high',tags:['성남화랑공원봄나들이','성남','경기','화랑공원','봄벚꽃','분당','무료'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'4월 봄꽃 시즌 (무료)',phone:'031-729-3411'}
];

const newShorts = [
  {
    experience_id:'EX-GG-NAT-100', experience_name:'파주 장단 콩 축제', category_sub:'축제', region:'경기도',
    script_30s:'오늘은 파주 장단콩 축제에 왔어요. 근데 아무도 안 알려주는 게 있어요 — 장단콩이 왜 맛있는지 아세요? DMZ 땅이에요. 60년간 농약 없이 자랐어요. 그 맛이 달라요. 너무 땅이 이렇게 콩을 만든다는 게 좋았습니다.',
    script_60s:'오늘은 경기도 파주 장단콩 축제를 즐겼어요. 한국 최고 명품 콩 장단콩의 고장이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 장단콩이 왜 특별한지 아세요? 파주 장단 지역은 DMZ 비무장지대와 맞닿아 있어요. 이 지역 농토가 수십 년간 일반 농약 사용이 제한돼 있어요. 그 결과 토양 속 미생물이 풍부하게 살아있어요. 미생물이 풍부한 토양에서 자란 콩은 영양분 흡수가 달라요. 단백질·이소플라본 함량이 일반 콩보다 높다는 분석이 있어요. 그래서 장단콩 된장·두부가 다른 지역 제품과 맛이 확연히 달라요. 그리고 장단콩은 고려 때부터 진상품이었어요. 조선 시대에도 왕실에 바치던 콩이에요. 너무 땅이 이렇게 콩을 특별하게 만든다는 게 좋았습니다.',
    secret_tip:'장단콩 = DMZ 제한 토양 미생물 풍부 — 농약 제한 수십 년 결과. 단백질·이소플라본 높음. 고려 시대부터 왕실 진상품. 두부 만들기 체험 세트. 10~11월 축제 기간',
    filming_guide:'장단콩 수확 체험 밭 전경. 직접 만든 두부 시식. 파주 DMZ 배경 콩밭.',
    broll_ideas:['장단콩 수확 체험','두부 만들기 시식','파주 DMZ 배경 콩밭','콩 선별','장단콩 된장'],
    hooks:['DMZ 땅에서 자란 콩이에요','60년 농약 제한 토양이에요','미생물이 풍부한 맛이 달라요','고려 시대 왕실 진상품이에요','파주 장단콩 꿀팁'],
    thumbnails:['장단콩 수확 체험','두부 시식','DMZ 배경 콩밭','콩 선별','장단콩 된장'],
    captions:{youtube:'파주 장단콩 축제 — DMZ 땅에서 자란 명품 콩이에요 🫘\n\n60년 농약 제한 미생물 풍부 토양!\n고려 시대 왕실 진상품\n\n📍 경기도 파주시 적성면 DMZ 인근 장단 콩 재배지\n🫘 한국 최고 명품 콩 10~11월 축제\n\n#파주장단콩축제 #장단콩 #파주 #경기여행 #DMZ명품콩',instagram:'파주 장단콩 축제 DMZ 땅에서 자란 명품 콩이에요 🫘\n\n60년 농약 제한 미생물 풍부 토양 ✨\n고려 시대 왕실 진상품\n\n📍 경기 파주 장단콩 축제\n\n#파주장단콩축제 #장단콩 #파주여행 #경기 #GemKorea',tiktok:'파주 장단콩 꿀팁 🫘 DMZ 땅에서 자란 명품 콩이에요! 60년 농약 제한 미생물 풍부 토양 // 고려 시대 왕실 진상품이에요 #파주장단콩축제 #장단콩 #파주여행'},
    hashtags:{korean:['#한국여행','#경기여행','#파주여행','#장단콩축제','#GemKorea'],place_specific:['#파주장단콩DMZ제한토양','#60년농약제한미생물풍부','#고려시대왕실진상품','#단백질이소플라본높은명품콩']}
  },
  {
    experience_id:'EX-JN-NAT-107', experience_name:'여수 소안도 트레킹', category_sub:'자연체험', region:'전라남도',
    script_30s:'오늘은 소안도에 왔어요. 항일운동의 섬이에요. 근데 아무도 안 알려주는 게 있어요 — 소안도가 전국에서 독립유공자 비율이 가장 높아요. 작은 섬에서 이렇게 많이 싸웠어요. 섬 전체가 독립 의지예요. 너무 섬이 이렇게 역사라는 게 좋았습니다.',
    script_60s:'오늘은 전남 완도 소안도 트레킹을 즐겼어요. 항일 독립운동의 섬으로 유명해요. 근데 아무도 안 알려주는 꿀팁 하나 — 소안도의 독립운동 역사가 있어요. 소안도는 인구 대비 독립유공자 비율이 전국에서 가장 높은 섬이에요. 일제강점기 소안도에 소안학교가 세워지면서 애국 교육이 강렬하게 이루어졌어요. 소안학교 교사들이 학생들에게 독립 사상을 가르쳤어요. 일제가 소안학교를 폐교시키려 하자 주민들이 저항했어요. 결국 소안도에서 수십 명의 독립운동가가 나왔어요. 인구 2,000~3,000명 섬에서 독립유공자가 수십 명이에요. 지금도 소안도 곳곳에 독립운동 기념비가 있어요. 소안항일운동기념탑이 세워져 있어요. 섬 트레킹을 하면서 이 역사를 만날 수 있어요. 너무 섬이 이렇게 역사라는 게 좋았습니다.',
    secret_tip:'소안도 = 전국 최고 인구 대비 독립유공자 비율 — 소안학교 애국 교육이 배경. 일제 폐교 저항. 소안항일운동기념탑 현존. 섬 트레킹 중 독립 기념비 만나기. 배편 완도→소안도',
    filming_guide:'소안항일운동기념탑 전경. 소안도 해안 트레킹. 독립 기념비 클로즈업.',
    broll_ideas:['소안항일운동기념탑','소안도 해안 트레킹','독립 기념비 클로즈업','소안 해안 절경','완도 배편 출발'],
    hooks:['독립유공자 비율이 전국 1위예요','작은 섬에서 수십 명이 나왔어요','소안학교가 독립 교육을 했어요','섬 전체가 독립 의지예요','소안도 꿀팁'],
    thumbnails:['항일운동기념탑','해안 트레킹','독립 기념비','소안 해안 절경','완도 배편'],
    captions:{youtube:'완도 소안도 — 독립유공자 비율 전국 1위 섬이에요 🇰🇷\n\n소안학교 애국 교육이 배경!\n작은 섬에서 수십 명 독립운동가\n\n📍 전남 완도군 소안면 소안도\n🇰🇷 항일 독립운동의 섬 소안항일운동기념탑\n\n#소안도트레킹 #소안도 #완도 #전남여행 #항일독립운동의섬',instagram:'완도 소안도 독립유공자 비율 전국 1위 섬이에요 🇰🇷\n\n소안학교 애국 교육이 배경 ✨\n작은 섬에서 수십 명 독립운동가\n\n📍 전남 완도 소안도\n\n#소안도 #소안도트레킹 #완도여행 #전남 #GemKorea',tiktok:'소안도 꿀팁 🇰🇷 독립유공자 비율 전국 1위 섬이에요! 소안학교 애국 교육 배경 // 작은 섬에서 수십 명의 독립운동가가 나왔어요 #소안도트레킹 #소안도 #완도여행'},
    hashtags:{korean:['#한국여행','#전남여행','#완도여행','#소안도','#GemKorea'],place_specific:['#소안도독립유공자전국1위','#소안학교애국교육일제폐교저항','#소안항일운동기념탑','#섬트레킹독립기념비']}
  },
  {
    experience_id:'EX-GB-NAT-051', experience_name:'영덕 대게 해산물 투어', category_sub:'지역 먹거리', region:'경상북도',
    script_30s:'오늘은 영덕 강구항에서 대게를 먹었어요. 근데 아무도 안 알려주는 게 있어요 — 대게 이름이 다리가 대나무처럼 길어서예요. 크다 대(大)가 아니에요. 대나무 대(竹)가 어원이에요. 너무 이름이 이렇게 다리에서 나온다는 게 좋았습니다.',
    script_60s:'오늘은 경북 영덕 강구항에서 신선한 대게를 즐겼어요. 국내 대게 최대 산지예요. 근데 아무도 안 알려주는 꿀팁 하나 — 대게 이름의 뜻이 있어요. 대게 이름이 크다는 大가 아니에요. 대나무 竹에서 온 이름이에요. 게의 다리가 대나무처럼 길고 마디가 있어요. 대나무처럼 긴 다리를 가진 게라서 대(竹)게라고 불렀어요. 그리고 대게 암수 구분법이 있어요. 게 배딱지를 보면 돼요. 수게는 좁고 뾰족한 삼각형, 암게는 넓고 둥근 반원이에요. 알이 꽉 찬 암게가 맛있어요. 그런데 영덕 현지에서는 수게가 살이 더 꽉 차 있다고 해요. 11~5월이 대게 성수기예요. 살이 가득 차 있는 시기예요. 강구항 수산시장에서 직접 고르면 현장에서 쪄줘요. 너무 이름이 이렇게 다리에서 나온다는 게 좋았습니다.',
    secret_tip:'대게 이름 = 크다 大 아닌 대나무 竹 — 다리가 대나무처럼 길어서. 암수 구분: 수게 좁은 삼각형 vs 암게 넓은 반원. 영덕 현지에서 수게 살 더 꽉 참. 11~5월 성수기. 강구항 현장 조리',
    filming_guide:'영덕 대게 다리 대나무 비교 클로즈업. 강구항 수산시장 전경. 대게 찜 현장 조리.',
    broll_ideas:['대게 다리 대나무 비교','강구항 수산시장 전경','대게 찜 현장 조리','대게 암수 배딱지 비교','영덕 동해 배경'],
    hooks:['대게 이름이 대나무에서 왔어요','다리가 대나무처럼 길어서예요','크다 大가 아니에요','11~5월이 성수기예요','영덕 대게 꿀팁'],
    thumbnails:['대게 다리 대나무 비교','강구항 수산시장','대게 찜 조리','암수 배딱지 비교','영덕 동해'],
    captions:{youtube:'영덕 대게 — 이름이 대나무에서 왔어요 🦀\n\n다리가 대나무처럼 길어서 竹게!\n크다 大가 아니에요\n\n📍 경북 영덕군 강구면 강구항 수산시장\n🦀 국내 대게 최대 산지 11~5월 성수기\n\n#영덕대게투어 #영덕대게 #영덕 #경북여행 #대게이름뜻',instagram:'영덕 대게 이름이 대나무에서 왔어요 🦀\n\n다리가 대나무처럼 길어서 竹게 ✨\n크다 大가 아니에요\n\n📍 경북 영덕 강구항\n\n#영덕대게 #영덕여행 #경북 #대게 #GemKorea',tiktok:'영덕 대게 꿀팁 🦀 이름이 대나무에서 왔어요! 다리가 대나무처럼 길어서 竹게 // 크다 大가 아니에요 #영덕대게투어 #영덕여행 #경북'},
    hashtags:{korean:['#한국여행','#경북여행','#영덕여행','#영덕대게','#GemKorea'],place_specific:['#영덕대게이름대나무竹','#다리대나무처럼길어서','#크다大아닌대나무竹','#11~5월성수기강구항현장조리']}
  },
  {
    experience_id:'EX-GW-NAT-088', experience_name:'정선 레일바이크', category_sub:'어드벤처/레포츠', region:'강원특별자치도',
    script_30s:'오늘은 정선 레일바이크를 탔어요. 근데 아무도 안 알려주는 게 있어요 — 이 철로가 태백 탄광 석탄 나르던 산업 철도예요. 정선아리랑이 바로 이 탄광 노동자들 노래예요. 너무 아리랑이 이렇게 탄광에서 나왔다는 게 좋았습니다.',
    script_60s:'오늘은 강원도 정선 레일바이크를 즐겼어요. 구절리역에서 아우라지역까지 달리는 폐철도 레일바이크예요. 근데 아무도 안 알려주는 꿀팁 하나 — 정선 레일바이크 철로와 정선아리랑의 연결이 있어요. 정선아리랑은 한국에서 가장 슬프고 한이 담긴 아리랑으로 유명해요. 가장 구슬픈 아리랑이에요. 그런데 정선아리랑이 생긴 배경이 탄광이에요. 1960~80년대 정선·태백·삼척 일대는 한국 최대 탄광 지대였어요. 탄광 노동자들이 캄캄한 갱도에서 일하면서 고향과 가족을 그리워하며 부른 노래가 정선아리랑이에요. 그 탄광 시절 석탄을 나르던 철로가 지금의 레일바이크 코스예요. 레일바이크를 타면서 정선아리랑을 들으면 그 역사가 온몸으로 느껴져요. 너무 아리랑이 이렇게 탄광에서 나왔다는 게 좋았습니다.',
    secret_tip:'정선 레일바이크 철로 = 탄광 석탄 운반 산업 철도 — 정선아리랑이 탄광 노동자 갱도 그리움의 노래. 레일바이크 타며 정선아리랑 듣기 세트. 아우라지 두 강 합류 지점도 포인트',
    filming_guide:'정선 레일바이크 달리며 협곡 절경. 아우라지 두 강 합류 지점. 정선아리랑 가사 자료.',
    broll_ideas:['레일바이크 협곡 달리기','아우라지 합류 지점','정선아리랑 가사 자료','구절리역 전경','탄광 역사 안내판'],
    hooks:['탄광 석탄 나르던 철로예요','정선아리랑이 탄광 노래예요','갱도 노동자들이 부른 노래예요','레일바이크 타며 아리랑 들어요','정선 레일바이크 꿀팁'],
    thumbnails:['레일바이크 협곡','아우라지 합류','정선아리랑 가사','구절리역','탄광 역사'],
    captions:{youtube:'정선 레일바이크 — 탄광 철로에서 정선아리랑이 나왔어요 🎵\n\n갱도 노동자들의 그리움에서 탄생!\n레일바이크 타며 아리랑 들어요\n\n📍 강원도 정선군 여량면 레일바이크길 155\n🎵 탄광 폐철도 아우라지 협곡 레일바이크\n\n#정선레일바이크 #정선아리랑 #정선 #강원여행 #탄광역사',instagram:'정선 레일바이크 탄광 철로에서 정선아리랑이 나왔어요 🎵\n\n갱도 노동자 그리움의 노래 ✨\n레일바이크 타며 아리랑 듣기\n\n📍 강원 정선 레일바이크\n\n#정선레일바이크 #정선아리랑 #정선여행 #강원 #GemKorea',tiktok:'정선 레일바이크 꿀팁 🎵 탄광 석탄 나르던 철로예요! 정선아리랑이 갱도 노동자들의 그리움 노래 // 레일바이크 타며 정선아리랑 듣는 세트 #정선레일바이크 #정선아리랑 #정선여행'},
    hashtags:{korean:['#한국여행','#강원여행','#정선여행','#정선레일바이크','#GemKorea'],place_specific:['#정선레일바이크탄광철로','#정선아리랑탄광노동자갱도','#레일바이크타며아리랑듣기','#아우라지두강합류포인트']}
  },
  {
    experience_id:'EX-CB-NAT-050', experience_name:'청양 칠갑산 천장호 출렁다리', category_sub:'어드벤처/레포츠', region:'충청남도',
    script_30s:'오늘은 청양 천장호 출렁다리를 걸었어요. 207m 길이예요. 근데 아무도 안 알려주는 게 있어요 — 청양이 구기자 특산지예요. 출렁다리 건너면 구기자 밭이에요. 구기자가 눈에 좋아요. 너무 다리 건너 밭이 이렇게 특산이라는 게 좋았습니다.',
    script_60s:'오늘은 충남 청양 칠갑산 천장호 출렁다리를 걸었어요. 207m 호수 위 출렁다리예요. 근데 아무도 안 알려주는 꿀팁 하나 — 청양 출렁다리와 구기자의 연결이 있어요. 청양은 고추·구기자의 산지예요. 전국 구기자 생산량 70% 이상이 청양에서 나와요. 출렁다리를 건너면 구기자 재배 지역이 펼쳐져요. 구기자는 한방에서 눈 건강·항산화·간 기능에 효과가 있다고 알려진 약재예요. 붉은 열매가 9~10월에 익어요. 구기자차·구기자주·구기자 비빔밥 등 청양 구기자 요리 체험도 있어요. 그리고 출렁다리에서 보이는 칠갑산과 천장호 조화가 충남에서 가장 아름다운 산+호수 조망이에요. 출렁다리 중간이 가장 많이 흔들려요. 너무 다리 건너면 이렇게 특산 밭이 있다는 게 좋았습니다.',
    secret_tip:'청양 출렁다리+구기자 = 전국 구기자 70% 생산지 — 출렁다리 건너면 구기자 밭. 9~10월 붉은 구기자 열매 수확. 구기자차·구기자주 체험. 칠갑산+천장호 조망이 충남 최고',
    filming_guide:'천장호 출렁다리 전경. 출렁다리 중간 흔들림 장면. 구기자 밭 붉은 열매.',
    broll_ideas:['천장호 출렁다리 전경','출렁다리 중간 흔들림','구기자 붉은 열매','칠갑산+천장호 조망','구기자차 시음'],
    hooks:['207m 출렁다리예요','중간이 가장 많이 흔들려요','건너면 구기자 밭이에요','전국 구기자 70%가 청양이에요','청양 출렁다리 꿀팁'],
    thumbnails:['출렁다리 전경','중간 흔들림','구기자 열매','칠갑산 조망','구기자차 시음'],
    captions:{youtube:'청양 천장호 출렁다리 — 건너면 전국 구기자 70% 산지예요 🌉\n\n207m 출렁다리 중간이 가장 흔들려!\n칠갑산+천장호 충남 최고 조망\n\n📍 충남 청양군 정산면 천장리 천장호 출렁다리\n🌉 207m 호수 위 출렁다리\n\n#청양천장호출렁다리 #천장호출렁다리 #청양 #충남여행 #구기자산지',instagram:'청양 천장호 출렁다리 건너면 전국 구기자 70% 산지예요 🌉\n\n207m 출렁다리 중간 가장 흔들림 ✨\n칠갑산+천장호 충남 최고 조망\n\n📍 충남 청양 천장호 출렁다리\n\n#청양출렁다리 #천장호출렁다리 #청양여행 #충남 #GemKorea',tiktok:'청양 천장호 출렁다리 꿀팁 🌉 207m 출렁다리 중간이 가장 흔들려요! 건너면 전국 구기자 70% 생산지 // 칠갑산+천장호 충남 최고 조망이에요 #청양천장호출렁다리 #청양여행 #충남'},
    hashtags:{korean:['#한국여행','#충남여행','#청양여행','#천장호출렁다리','#GemKorea'],place_specific:['#청양출렁다리전국구기자70%','#207m출렁다리중간흔들림','#구기자9~10월붉은열매수확','#칠갑산천장호충남최고조망']}
  },
  {
    experience_id:'EX-GB-CUL-051', experience_name:'의성 마늘 박물관 투어', category_sub:'지역 먹거리', region:'경상북도',
    script_30s:'오늘은 의성 마늘박물관에 왔어요. 근데 아무도 안 알려주는 게 있어요 — 마늘이 한국 음식에 안 들어가는 음식이 없어요. 된장·간장에도 마늘이 들어가요. 한국인이 하루에 먹는 마늘이 세계 1위예요. 너무 마늘이 이렇게 한국인이라는 게 좋았습니다.',
    script_60s:'오늘은 경북 의성 마늘박물관에서 마늘 문화를 배웠어요. 전국 마늘 생산 1위 의성이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 한국인과 마늘의 관계가 있어요. 한국인의 마늘 소비량이 세계 1위예요. 한국인은 하루 평균 8~10g의 마늘을 먹어요. 전 세계 평균의 7배예요. 그런데 한국 음식 중 마늘이 안 들어가는 요리가 거의 없어요. 김치·된장·고추장 기본 양념에 마늘이 들어가요. 볶음·국·찌개에 마늘이 들어가요. 마늘은 한국 식문화의 기본이에요. 단군신화에도 곰이 쑥과 마늘을 먹고 사람이 됐어요. 마늘이 한국의 신화부터 일상까지 녹아있어요. 의성 마늘은 화산 토양에서 자라 맵고 향이 강해요. 최고급 마늘이에요. 너무 마늘이 이렇게 한국인 정체성이라는 게 좋았습니다.',
    secret_tip:'한국인 마늘 소비 세계 1위 하루 8~10g 세계 평균의 7배 — 단군신화부터 마늘. 김치·된장·고추장·볶음·국 모두 마늘. 의성 마늘=화산 토양 맵고 향 강한 최고급. 마늘 캐기 체험 6월',
    filming_guide:'의성 마늘박물관 전시. 마늘 수확 체험. 의성 마늘밭 전경.',
    broll_ideas:['마늘박물관 전시','마늘 수확 체험','의성 마늘밭 전경','마늘 요리 다양한 음식','단군신화 마늘 자료'],
    hooks:['한국인 마늘 소비 세계 1위예요','하루 8~10g 세계 평균 7배예요','마늘 없는 한국 요리가 없어요','단군신화부터 마늘이에요','의성 마늘 꿀팁'],
    thumbnails:['마늘박물관 전시','마늘 수확 체험','의성 마늘밭','마늘 요리 다양','단군신화 마늘'],
    captions:{youtube:'의성 마늘박물관 — 한국인 마늘 소비 세계 1위예요 🧄\n\n하루 8~10g 세계 평균의 7배!\n단군신화부터 마늘이 한국 정체성\n\n📍 경북 의성군 단북면 의성마늘길 50\n🧄 전국 마늘 생산 1위 의성\n\n#의성마늘박물관 #의성마늘 #의성 #경북여행 #한국마늘문화',instagram:'의성 마늘박물관 한국인 마늘 소비 세계 1위예요 🧄\n\n하루 8~10g 세계 평균 7배 ✨\n단군신화부터 마늘이 한국 정체성\n\n📍 경북 의성 마늘박물관\n\n#의성마늘박물관 #의성마늘 #의성여행 #경북 #GemKorea',tiktok:'의성 마늘 꿀팁 🧄 한국인 마늘 소비 세계 1위예요! 하루 8~10g 세계 평균의 7배 // 단군신화부터 마늘이 한국 정체성 #의성마늘박물관 #의성여행 #경북'},
    hashtags:{korean:['#한국여행','#경북여행','#의성여행','#마늘박물관','#GemKorea'],place_specific:['#의성마늘박물관한국마늘세계1위','#하루8~10g세계평균7배','#단군신화부터마늘한국정체성','#의성화산토양최고급마늘']}
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
