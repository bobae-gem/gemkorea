const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const now = new Date().toISOString().slice(0,19);

const newExps = [
  {experience_id:'EX-GG-NAT-097',name:'양평 두물머리 카누',category_main:'문화/체험',category_sub:'어드벤처/레포츠',region_main:'GG',region_sub:'경기도 양평군',address:'경기도 양평군 양서면 두물머리 카누 체험장',lat:37.5281,lng:127.3031,price:'2인 20,000원~',duration:'1~2시간',reservation_required:true,target_user:['커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'경기 양평 두물머리 남한강·북한강 합류 지점에서 카누를 타는 수상 체험이다. 두물머리 물안개 명소에서 카누로 수면을 가로지르며 400년 느티나무와 경관을 즐기는 색다른 두물머리 체험이다.',source_urls:['https://www.yangpyeong.go.kr/'],data_confidence:'high',tags:['양평두물머리카누','양평','경기','두물머리','카누','남한강','수상체험'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'seasonal',operating_hours:'4~10월 (예약 필수)',phone:'031-773-8577'},
  {experience_id:'EX-JN-NAT-106',name:'강진 청자촌 도예 체험',category_main:'문화/체험',category_sub:'전통공예',region_main:'JN',region_sub:'전라남도 강진군',address:'전라남도 강진군 대구면 청자촌길 33 청자박물관',lat:34.6478,lng:126.7139,price:'성인 8,000원~',duration:'2시간',reservation_required:false,target_user:['가족','개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'고려 청자의 본산 전남 강진 청자촌에서 청자 물레 체험을 즐기는 공예 체험이다. 800년 전 고려 최고 청자를 구웠던 가마터 위에서 직접 청자를 빚고 굽는 전통 공예 체험이다.',source_urls:['https://www.gangjin.go.kr/'],data_confidence:'high',tags:['강진청자도예체험','강진','전남','청자','물레체험','고려청자','가마터'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00',phone:'061-430-3755'},
  {experience_id:'EX-GB-NAT-050',name:'경주 첨성대 별 관측',category_main:'문화/체험',category_sub:'역사 체험',region_main:'GB',region_sub:'경상북도 경주시',address:'경상북도 경주시 인왕동 839-1 첨성대',lat:35.8347,lng:129.2194,price:'무료',duration:'1시간',reservation_required:false,target_user:['개인','커플','가족'],nearby_places:[],related_heritage_ids:[],short_description:'국보 신라 첨성대에서 야경을 감상하고 동양 최고(最古) 천문대 역사를 배우는 체험이다. 7세기 신라 선덕여왕 때 세운 동양에서 가장 오래된 천문 관측대 첨성대는 야간 조명이 켜지면 더욱 아름답다.',source_urls:['https://www.gyeongju.go.kr/'],data_confidence:'high',tags:['경주첨성대야경','첨성대','경주','경북','동양최고천문대','신라','국보'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (무료, 야경 일몰~22:00)',phone:'054-779-6100'},
  {experience_id:'EX-GN-NAT-097',name:'창녕 부곡온천 족욕',category_main:'문화/체험',category_sub:'웰니스',region_main:'GN',region_sub:'경상남도 창녕군',address:'경상남도 창녕군 부곡면 온천단지길 20',lat:35.4072,lng:128.7069,price:'무료~성인 8,000원',duration:'1시간',reservation_required:false,target_user:['가족','개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'한국 최고 온천 중 하나인 경남 창녕 부곡온천에서 족욕을 즐기는 웰니스 체험이다. 국내에서 수온이 가장 높은 78도 온천수로 유명한 부곡온천에서 유황 성분 족욕으로 피부 건강을 즐기는 체험이다.',source_urls:['https://www.changnyeong.go.kr/'],data_confidence:'high',tags:['창녕부곡온천족욕','부곡온천','창녕','경남','최고수온78도','유황온천','웰니스'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중',phone:'055-521-5551'},
  {experience_id:'EX-GG-NAT-098',name:'강화 전등사 은행나무',category_main:'문화/체험',category_sub:'역사 체험',region_main:'GG',region_sub:'인천광역시 강화군',address:'인천광역시 강화군 길상면 전등사로 37-41',lat:37.6053,lng:126.4353,price:'성인 3,000원',duration:'1~2시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'인천 강화 전등사를 탐방하고 은행나무와 조각보 도량을 즐기는 체험이다. 381년 창건된 한국에서 가장 오래된 사찰 전등사에서 도금당 나녀상과 독특한 불교 예술을 감상한다.',source_urls:['https://www.jeondeungsa.org/'],data_confidence:'high',tags:['강화전등사','전등사','강화','인천','한국최고사찰','381년','나녀상'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00',phone:'032-937-0125'},
  {experience_id:'EX-JB-NAT-075',name:'진안 운장산 야생화 트레킹',category_main:'문화/체험',category_sub:'자연체험',region_main:'JB',region_sub:'전라북도 진안군',address:'전라북도 진안군 정천면 운장산로 일대',lat:35.8578,lng:127.3586,price:'무료',duration:'4~5시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'전북 진안 운장산에서 야생화 트레킹을 즐기는 체험이다. 해발 1,126m 운장산은 5~6월 철쭉·6~8월 원추리·9~10월 구절초 등 사계절 야생화가 풍성한 전북 최고 야생화 트레킹 명소다.',source_urls:['https://www.jinan.go.kr/'],data_confidence:'high',tags:['진안운장산야생화','진안','전북','운장산','야생화트레킹','원추리','구절초'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (무료)',phone:'063-430-2513'},
  {experience_id:'EX-CB-CUL-077',name:'아산 현충사 이순신 투어',category_main:'문화/체험',category_sub:'역사 체험',region_main:'CB',region_sub:'충청남도 아산시',address:'충청남도 아산시 염치읍 현충사길 126',lat:36.8211,lng:127.1208,price:'무료',duration:'1~2시간',reservation_required:false,target_user:['가족','개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'충남 아산 현충사에서 이순신 장군의 생가와 유품을 탐방하는 역사 체험이다. 이순신 장군 탄신지이자 생가가 있는 현충사에서 거북선·장검·난중일기 등 이순신 유물을 관람한다.',source_urls:['https://www.hyunchungsa.go.kr/'],data_confidence:'high',tags:['아산현충사이순신','현충사','아산','충남','이순신','거북선','난중일기'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00 (무료)',phone:'041-539-4600'},
  {experience_id:'EX-GW-NAT-087',name:'평창 알펜시아 스키',category_main:'문화/체험',category_sub:'어드벤처/레포츠',region_main:'GW',region_sub:'강원특별자치도 평창군',address:'강원특별자치도 평창군 대관령면 올림픽로 715',lat:37.6553,lng:128.6828,price:'리프트 성인 46,000원~',duration:'4~8시간',reservation_required:false,target_user:['가족','청년','커플'],nearby_places:[],related_heritage_ids:[],short_description:'2018 평창동계올림픽 무대 강원 평창 알펜시아 리조트에서 스키·보드를 즐기는 겨울 체험이다. 올림픽 경기장과 함께 위치한 알펜시아에서 동계 올림픽 분위기를 느끼며 스키를 즐기는 특별한 체험이다.',source_urls:['https://www.alpensia.com/'],data_confidence:'high',tags:['평창알펜시아스키','평창','강원','알펜시아','스키','2018평창올림픽','동계스포츠'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'seasonal',operating_hours:'12~3월 (주중~주말 다름)',phone:'033-339-0000'},
  {experience_id:'EX-JN-CUL-060',name:'고흥 녹동항 해산물',category_main:'문화/체험',category_sub:'지역 먹거리',region_main:'JN',region_sub:'전라남도 고흥군',address:'전라남도 고흥군 도양읍 녹동항 해산물 시장',lat:34.5019,lng:127.3711,price:'먹거리 별도',duration:'1~2시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'전남 고흥 녹동항 어시장에서 전남 해산물을 즐기는 먹거리 체험이다. 나로우주센터와 가까운 고흥 녹동항이 전남에서 가장 신선한 남해 해산물 집산지로 소라·전복·낙지·꼼장어를 저렴하게 즐길 수 있다.',source_urls:['https://www.goheung.go.kr/'],data_confidence:'high',tags:['고흥녹동항해산물','고흥','전남','녹동항','전복','소라','남해해산물'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'새벽 04:00~20:00',phone:'061-830-5114'},
  {experience_id:'EX-GG-CUL-088',name:'부천 판타스틱스튜디오',category_main:'문화/체험',category_sub:'문화투어',region_main:'GG',region_sub:'경기도 부천시',address:'경기도 부천시 오정구 삼작로 53 부천아트벙커',lat:37.5217,lng:126.7783,price:'무료~성인 5,000원',duration:'2시간',reservation_required:false,target_user:['개인','커플','가족'],nearby_places:[],related_heritage_ids:[],short_description:'경기 부천 아트벙커에서 쓰레기소각장을 재생한 복합 문화 공간을 탐방하는 체험이다. 폐소각장을 예술 공간으로 재생한 부천아트벙커B39에서 전시·공연·문화 체험을 즐기는 도시 재생 문화 공간이다.',source_urls:['https://www.bucheon.go.kr/'],data_confidence:'high',tags:['부천아트벙커','부천','경기','도시재생','폐소각장','문화공간','전시'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'10:00~18:00 (월 휴관)',phone:'032-321-3901'},
  {experience_id:'EX-GN-NAT-098',name:'의령 의병 역사 투어',category_main:'문화/체험',category_sub:'역사 체험',region_main:'GN',region_sub:'경상남도 의령군',address:'경상남도 의령군 의령읍 의병로 2 의병박물관',lat:35.3244,lng:128.2614,price:'무료',duration:'1~2시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'임진왜란 최초 의병 곽재우 장군의 고장 경남 의령에서 의병 역사를 배우는 체험이다. 홍의장군 곽재우가 의령에서 최초로 의병을 일으킨 역사를 의병박물관에서 체험하고 솥바위도 탐방한다.',source_urls:['https://www.uiryeong.go.kr/'],data_confidence:'high',tags:['의령의병역사투어','의령','경남','곽재우','홍의장군','임진왜란의병','최초의병'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00 (무료)',phone:'055-570-2500'},
  {experience_id:'EX-GG-NAT-099',name:'수원 광교산 트레킹',category_main:'문화/체험',category_sub:'자연체험',region_main:'GG',region_sub:'경기도 수원시',address:'경기도 수원시 장안구 광교산로 일대',lat:37.3306,lng:127.0153,price:'무료',duration:'2~3시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'경기 수원·의왕에 걸친 광교산에서 시민들이 즐기는 도심 근교 트레킹이다. 수원 시내에서 버스로 30분 거리 광교산은 수원·화성을 조망하는 뷰포인트와 청명한 수계가 있는 수도권 대표 도시 근교 산이다.',source_urls:['https://www.suwon.go.kr/'],data_confidence:'high',tags:['수원광교산트레킹','광교산','수원','경기','도심근교트레킹','수원화성조망','자연'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (무료)',phone:'031-228-4677'}
];

const newShorts = [
  {
    experience_id:'EX-GB-NAT-050', experience_name:'경주 첨성대 별 관측', category_sub:'역사 체험', region:'경상북도',
    script_30s:'오늘은 경주 첨성대에서 야경을 봤어요. 동양 최고 천문대예요. 근데 아무도 안 알려주는 게 있어요 — 첨성대 돌이 365개예요. 1년 날짜랑 같아요. 우연이 아니에요. 신라 천문학의 비밀이에요. 너무 숫자가 이렇게 의미있다는 게 좋았습니다.',
    script_60s:'오늘은 경북 경주 첨성대에서 야경을 감상했어요. 7세기 신라 선덕여왕 때 만든 동양에서 가장 오래된 천문대예요. 근데 아무도 안 알려주는 꿀팁 하나 — 첨성대 구조에 숨겨진 숫자의 비밀이 있어요. 첨성대는 돌을 쌓아 만들었는데 돌의 수가 365개예요. 1년 일수와 같아요. 그리고 첨성대를 12단씩 3구간으로 나누면 24절기가 나와요. 창문 중간을 기준으로 위아래가 12단씩이에요. 또 맨 아래 기단부터 창문 아래까지가 음력 한 달 30일을 나타낸다는 분석도 있어요. 신라 사람들이 돌을 쌓으면서 달력 숫자를 담은 거예요. 첨성대 이름 첨성(瞻星)은 별을 보는 곳이라는 뜻이에요. 야경으로 조명이 켜진 첨성대가 낮보다 훨씬 신비롭고 아름다워요. 너무 숫자가 이렇게 역사에 담겨있다는 게 좋았습니다.',
    secret_tip:'첨성대 돌 365개 = 1년 일수 — 12단×3구간=24절기. 첨성(瞻星)=별 보는 곳. 야경 조명이 낮보다 신비로움. 대릉원+석빙고+첨성대 경주 역사지구 도보 세트 코스',
    filming_guide:'야간 조명 첨성대 전경. 돌 층수 365 설명. 경주 역사지구 야경 전경.',
    broll_ideas:['야간 조명 첨성대','돌 층수 365 설명','경주 역사지구 야경','별빛 첨성대','대릉원 배경'],
    hooks:['첨성대 돌이 365개예요','1년 날짜랑 같아요','12단씩 24절기예요','야경이 낮보다 신비로워요','경주 첨성대 꿀팁'],
    thumbnails:['야간 조명 첨성대','돌 365 설명','경주 역사지구 야경','별빛 첨성대','대릉원 배경'],
    captions:{youtube:'경주 첨성대 야경 — 돌이 365개예요 ⭐\n\n1년 일수+24절기가 숨겨진 구조!\n야경이 낮보다 신비로워요\n\n📍 경북 경주시 인왕동 839-1 첨성대\n⭐ 국보 동양 최고(最古) 천문대\n\n#경주첨성대야경 #첨성대 #경주 #경북여행 #동양최고천문대',instagram:'경주 첨성대 야경 돌이 365개예요 ⭐\n\n1년 일수+24절기 숨겨진 구조 ✨\n야경이 낮보다 신비로워요\n\n📍 경북 경주 첨성대\n\n#경주첨성대야경 #첨성대 #경주여행 #경북 #GemKorea',tiktok:'경주 첨성대 꿀팁 ⭐ 돌이 365개예요! 1년 일수와 같아요 // 12단×3구간=24절기 신라 천문학의 비밀 #경주첨성대야경 #첨성대 #경주여행'},
    hashtags:{korean:['#한국여행','#경북여행','#경주여행','#첨성대','#GemKorea'],place_specific:['#경주첨성대돌365개1년일수','#12단3구간24절기','#동양최고천문대국보','#야경낮보다신비로움']}
  },
  {
    experience_id:'EX-GN-NAT-097', experience_name:'창녕 부곡온천 족욕', category_sub:'웰니스', region:'경상남도',
    script_30s:'오늘은 창녕 부곡온천 족욕을 했어요. 한국에서 가장 뜨거운 온천이에요. 근데 아무도 안 알려주는 게 있어요 — 부곡온천이 78도예요. 계란을 삶을 수 있어요. 그래서 온천 달걀이 명물이에요. 너무 온천이 이렇게 뜨겁다는 게 좋았습니다.',
    script_60s:'오늘은 경남 창녕 부곡온천에서 족욕을 즐겼어요. 한국에서 수온이 가장 높은 온천이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 부곡온천 수온이 왜 이렇게 높은지 아세요? 부곡온천 수온은 78도예요. 한국 온천 평균 수온이 40~50도인데 부곡은 그보다 훨씬 높아요. 이 높은 수온의 비결은 지하 500m에서 올라오는 고온 지하수예요. 창녕 부곡 지역 지하에 화산 활동과 관련된 지열이 높은 지층이 있어요. 그 열원에서 올라오는 물이 78도예요. 그래서 실제로 부곡온천에서 계란을 삶을 수 있어요. 온천 달걀이 부곡온천 명물이에요. 온천 성분은 유황 성분이 풍부해서 피부·관절에 효과가 있어요. 78도 원수를 희석해서 40~45도 족욕 온도로 조절해요. 너무 온천이 이렇게 뜨겁다는 게 좋았습니다.',
    secret_tip:'부곡온천 수온 78도 = 한국 최고 — 지하 500m 고온 지열 지층. 계란 삶을 수 있어 온천 달걀 명물. 유황 성분 피부·관절 효과. 78도 원수 희석 40~45도 족욕. 우포늪 세트',
    filming_guide:'78도 온천 원수 끓는 모습. 온천 달걀 삶기. 부곡온천 족욕 체험.',
    broll_ideas:['78도 온천 끓는 모습','온천 달걀 삶기','족욕 체험','부곡온천 전경','유황 성분 온천 수증기'],
    hooks:['부곡온천이 78도예요','한국에서 가장 뜨거워요','계란을 삶을 수 있어요','온천 달걀이 명물이에요','창녕 부곡온천 꿀팁'],
    thumbnails:['78도 온천 끓기','온천 달걀 삶기','족욕 체험','부곡온천 전경','유황 수증기'],
    captions:{youtube:'창녕 부곡온천 — 78도 한국에서 가장 뜨거워요 ♨️\n\n계란 삶을 수 있어서 온천 달걀 명물!\n지하 500m 고온 지열\n\n📍 경남 창녕군 부곡면 온천단지길\n♨️ 한국 최고 수온 78도 유황 온천\n\n#창녕부곡온천족욕 #부곡온천 #창녕 #경남여행 #한국최고수온온천',instagram:'창녕 부곡온천 78도 한국에서 가장 뜨거워요 ♨️\n\n계란 삶을 수 있어 온천 달걀 명물 ✨\n지하 500m 고온 지열\n\n📍 경남 창녕 부곡온천\n\n#창녕부곡온천 #부곡온천 #창녕여행 #경남 #GemKorea',tiktok:'부곡온천 꿀팁 ♨️ 78도 한국에서 가장 뜨거운 온천이에요! 계란을 삶을 수 있어서 온천 달걀 명물 // 지하 500m 고온 지열 #창녕부곡온천 #부곡온천 #창녕여행'},
    hashtags:{korean:['#한국여행','#경남여행','#창녕여행','#부곡온천','#GemKorea'],place_specific:['#창녕부곡온천78도한국최고','#지하500m고온지열','#계란삶는온천달걀명물','#유황성분피부관절효과']}
  },
  {
    experience_id:'EX-CB-CUL-077', experience_name:'아산 현충사 이순신 투어', category_sub:'역사 체험', region:'충청남도',
    script_30s:'오늘은 아산 현충사에 왔어요. 이순신 장군 생가예요. 근데 아무도 안 알려주는 게 있어요 — 이순신이 서울 출신이에요. 아산은 외가예요. 서울 건천동에서 태어났어요. 그런데 현충사가 아산에 있는 이유는 외가에서 자랐기 때문이에요. 너무 역사가 이렇게 오해받는다는 게 좋았습니다.',
    script_60s:'오늘은 충남 아산 현충사에서 이순신 장군의 역사를 배웠어요. 이순신 장군 생가와 유품이 있는 성지예요. 근데 아무도 안 알려주는 꿀팁 하나 — 이순신 장군의 출신지에 대한 오해가 있어요. 많은 사람이 이순신 장군이 아산 출신이라고 알지만 사실 이순신은 서울 출신이에요. 서울 건천동(지금의 중구 인현동)에서 태어났어요. 그런데 어린 시절 어머니 외가인 충남 아산에서 자랐어요. 그래서 아산에 생가와 현충사가 있는 거예요. 현충사 현판은 숙종이 직접 써서 하사했어요. 이순신 장군 장검이 현충사 보물로 있는데 길이가 197cm예요. 실제로 이 검을 쓰려면 키가 매우 커야 해요. 이순신이 당대에도 신장이 크고 체격이 좋았다는 기록이 있어요. 너무 역사가 이렇게 오해받는다는 게 좋았습니다.',
    secret_tip:'이순신 출신 = 서울 건천동(중구 인현동) — 어린 시절 외가 아산에서 성장. 현충사 현판 숙종 직접 하사. 이순신 장검 197cm 보물. 당대 기록에도 신장 크고 체격 좋음 기록',
    filming_guide:'현충사 본전 이순신 영정. 197cm 장검 클로즈업. 현충사 은행나무 전경.',
    broll_ideas:['현충사 이순신 영정','197cm 장검 클로즈업','현충사 은행나무','생가 초가집','유물 전시관'],
    hooks:['이순신이 서울 출신이에요','아산은 외가예요','장검이 197cm예요','현판을 숙종이 직접 썼어요','아산 현충사 꿀팁'],
    thumbnails:['이순신 영정','197cm 장검','은행나무 전경','생가 초가집','유물 전시관'],
    captions:{youtube:'아산 현충사 이순신 — 이순신이 서울 출신이에요 ⚔️\n\n아산은 외가 어린 시절 성장지!\n장검 197cm 숙종 현판 직접 하사\n\n📍 충남 아산시 염치읍 현충사길 126\n⚔️ 이순신 장군 생가 유품 성지\n\n#아산현충사이순신 #현충사 #아산 #충남여행 #이순신',instagram:'아산 현충사 이순신이 서울 출신이에요 ⚔️\n\n아산은 외가 어린 시절 성장지 ✨\n장검 197cm 숙종 현판 직접 하사\n\n📍 충남 아산 현충사\n\n#아산현충사 #현충사 #아산여행 #충남 #GemKorea',tiktok:'아산 현충사 꿀팁 ⚔️ 이순신이 서울 출신이에요! 아산은 외가 어린 시절 성장지 // 장검이 197cm이고 숙종이 직접 현판을 썼어요 #아산현충사 #이순신 #아산여행'},
    hashtags:{korean:['#한국여행','#충남여행','#아산여행','#현충사','#GemKorea'],place_specific:['#아산현충사이순신서울건천동출신','#아산은외가어린시절성장','#이순신장검197cm보물','#현충사현판숙종직접하사']}
  },
  {
    experience_id:'EX-GN-NAT-098', experience_name:'의령 의병 역사 투어', category_sub:'역사 체험', region:'경상남도',
    script_30s:'오늘은 의령 의병박물관에 왔어요. 임진왜란 최초 의병이에요. 근데 아무도 안 알려주는 게 있어요 — 곽재우 장군이 의병을 자기 돈으로 일으켰어요. 나라가 안 도와줬어요. 사재를 털어서 병사를 모았어요. 너무 개인이 이렇게 나라를 구했다는 게 좋았습니다.',
    script_60s:'오늘은 경남 의령 의병박물관에서 임진왜란 최초 의병 곽재우 장군의 역사를 배웠어요. 홍의장군이라고 불리는 곽재우예요. 근데 아무도 안 알려주는 꿀팁 하나 — 곽재우 의병의 특별한 점이 있어요. 1592년 임진왜란이 일어났을 때 조정이 속수무책이었어요. 이때 경남 의령의 곽재우가 사재를 털어 직접 병사를 모으고 무기를 사서 최초 의병을 일으켰어요. 나라 지원 없이 개인 자금으로 군사를 조직한 거예요. 곽재우 장군이 붉은 옷을 입고 싸워서 홍의장군이라 불렸어요. 왜군은 붉은 옷 장군이 나타나면 도망쳤어요. 곽재우 의병이 임진왜란에서 왜군을 최초로 격파한 전투가 기강 전투예요. 의령 정암진 전투에서도 대승을 거뒀어요. 나중에 조정에서 벼슬을 받았지만 여러 번 사양하고 낙향해서 살았어요. 너무 개인이 이렇게 역사를 만든다는 게 좋았습니다.',
    secret_tip:'곽재우 의병 = 1592년 사재 털어 최초 의병 조직 — 나라 지원 없이 개인 자금 군사 조직. 붉은 옷=홍의장군(왜군이 도망). 기강 전투·정암진 전투 왜군 최초 격파. 의령 솥바위 전설 세트',
    filming_guide:'의병박물관 전시 홍의장군 곽재우. 정암진 전투 의병 자료. 의령 남강 배경.',
    broll_ideas:['홍의장군 곽재우 전시','정암진 전투 자료','의령 남강 배경','의병박물관 전경','의령 솥바위'],
    hooks:['사재를 털어 의병을 일으켰어요','나라 지원이 없었어요','붉은 옷 때문에 홍의장군이에요','왜군이 붉은 옷 보면 도망갔어요','의령 의병 꿀팁'],
    thumbnails:['홍의장군 곽재우','정암진 전투 자료','의령 남강 배경','의병박물관','의령 솥바위'],
    captions:{youtube:'의령 의병 역사 — 사재를 털어 최초 의병을 일으켰어요 🔴\n\n나라 지원 없이 개인 자금 군사 조직!\n붉은 옷 홍의장군 왜군 도망\n\n📍 경남 의령군 의령읍 의병로 2\n🔴 1592년 임진왜란 최초 의병 곽재우\n\n#의령의병역사투어 #의령 #경남여행 #곽재우 #홍의장군',instagram:'의령 의병 역사 사재를 털어 최초 의병을 일으켰어요 🔴\n\n나라 지원 없이 개인 자금 군사 조직 ✨\n붉은 옷 홍의장군 왜군 도망\n\n📍 경남 의령 의병박물관\n\n#의령의병박물관 #의령 #경남여행 #곽재우 #GemKorea',tiktok:'의령 의병 꿀팁 🔴 사재를 털어 최초 의병을 일으켰어요! 나라 지원 없이 개인 자금 군사 조직 // 붉은 옷 홍의장군 왜군이 도망갔어요 #의령의병역사 #의령여행 #경남'},
    hashtags:{korean:['#한국여행','#경남여행','#의령여행','#곽재우의병','#GemKorea'],place_specific:['#의령의병사재최초의병조직','#나라지원없이개인자금군사','#붉은옷홍의장군왜군도망','#기강전투정암진전투최초격파']}
  },
  {
    experience_id:'EX-GG-NAT-098', experience_name:'강화 전등사 은행나무', category_sub:'역사 체험', region:'인천광역시',
    script_30s:'오늘은 강화 전등사에 왔어요. 한국에서 가장 오래된 사찰이에요. 근데 아무도 안 알려주는 게 있어요 — 대웅전 기둥에 벌거벗은 여인 조각이 있어요. 절에 나체 조각이 있어요. 배신한 주모를 혼내주는 이야기예요. 너무 절에 이런 이야기가 있다는 게 좋았습니다.',
    script_60s:'오늘은 인천 강화 전등사를 탐방했어요. 381년 창건된 한국에서 가장 오래된 사찰이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 전등사 대웅전의 특별한 나녀상 비밀이 있어요. 전등사 대웅전 처마 모서리 기둥을 받치는 부분에 벌거벗은 여인 조각 4개가 있어요. 나녀상이라고 해요. 절에 왜 나체 여인 조각이 있을까요? 전설이 있어요. 조선 시대 전등사를 중수할 때 목수가 근처 주막 주모와 사랑에 빠져 돈을 다 썼는데 주모가 그 돈만 챙기고 도망갔어요. 배신당한 목수가 주모의 모습을 조각해 지붕 가장 무거운 부분을 영원히 이고 있게 했어요. 속된 욕심이 결국 무거운 짐을 지게 된다는 교훈이에요. 이 나녀상을 찾는 게 전등사 참배의 묘미예요. 너무 절에 이런 이야기가 있다는 게 좋았습니다.',
    secret_tip:'전등사 대웅전 나녀상 = 배신한 주모 복수 조각 — 목수가 돈 챙기고 도망간 주모 모습 처마 기둥에 조각. 가장 무거운 부분 영원히 이는 교훈. 한국 최고 사찰 381년 창건. 4개 나녀상 찾기',
    filming_guide:'전등사 대웅전 처마 나녀상 클로즈업. 전등사 전경. 삼랑성 성벽.',
    broll_ideas:['나녀상 클로즈업','전등사 전경','삼랑성 성벽','전등사 은행나무','대웅전 처마'],
    hooks:['대웅전에 나체 여인 조각이 있어요','배신한 주모에게 복수한 조각이에요','무거운 지붕을 영원히 이고 있어요','4개를 찾는 게 묘미예요','강화 전등사 꿀팁'],
    thumbnails:['나녀상 클로즈업','전등사 전경','삼랑성 성벽','은행나무','대웅전 처마'],
    captions:{youtube:'강화 전등사 — 대웅전에 나체 여인 조각이 있어요 🏛️\n\n배신한 주모에게 복수한 나녀상!\n무거운 지붕 영원히 이고 있어요\n\n📍 인천 강화군 길상면 전등사로 37-41\n🏛️ 한국 최고 사찰 381년 창건\n\n#강화전등사 #전등사 #강화 #인천여행 #나녀상',instagram:'강화 전등사 대웅전에 나체 여인 조각이 있어요 🏛️\n\n배신한 주모 복수 나녀상 ✨\n무거운 지붕 영원히 이는 교훈\n\n📍 인천 강화 전등사\n\n#강화전등사 #전등사 #강화여행 #인천 #GemKorea',tiktok:'강화 전등사 꿀팁 🏛️ 대웅전에 나체 여인 조각 나녀상이 있어요! 배신한 주모에게 복수한 조각 // 무거운 지붕 영원히 이고 있는 교훈이에요 #강화전등사 #전등사 #강화여행'},
    hashtags:{korean:['#한국여행','#인천여행','#강화여행','#전등사','#GemKorea'],place_specific:['#강화전등사나녀상배신주모복수','#목수조각대웅전처마기둥','#무거운지붕영원히이는교훈','#한국최고사찰381년']}
  },
  {
    experience_id:'EX-GG-NAT-097', experience_name:'양평 두물머리 카누', category_sub:'어드벤처/레포츠', region:'경기도',
    script_30s:'오늘은 두물머리에서 카누를 탔어요. 근데 아무도 안 알려주는 게 있어요 — 두물머리가 한강이 아니에요. 아직 한강이 아니에요. 남한강과 북한강이 여기서 합쳐져 비로소 한강이 돼요. 두물머리가 한강의 시작이에요. 너무 이름이 이렇게 정확하다는 게 좋았습니다.',
    script_60s:'오늘은 경기도 양평 두물머리에서 카누를 탔어요. 남한강과 북한강이 만나는 합류 지점이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 두물머리의 지리적 의미가 있어요. 두물머리는 두 물의 머리, 즉 두 강이 합쳐지는 곳이라는 뜻이에요. 한자로 양수리(兩水里)예요. 남한강은 강원도 태백에서, 북한강은 강원도 금강산 방향에서 흘러내려와 이 지점에서 합쳐져요. 여기서 합쳐진 물이 비로소 한강이 돼요. 두물머리 상류는 한강이 아니에요. 두물머리 아래가 한강이에요. 카누를 타고 강 한가운데에 있으면 한편은 남한강 물, 다른 편은 북한강 물이에요. 두 강이 다른 색을 띠기도 해요. 카누로 두 강의 합류를 몸으로 느끼는 체험이에요. 너무 이름이 이렇게 지리를 정확히 담았다는 게 좋았습니다.',
    secret_tip:'두물머리 = 두 물(남한강+북한강)의 머리 합류 지점 — 여기서 비로소 한강 시작. 카누 타면 두 강 경계에 위치. 새벽 안개 물안개 카누가 최고. 400년 느티나무 배경 카누 사진 포인트',
    filming_guide:'카누 타며 남한강+북한강 합류 지점. 두물머리 물안개 카누. 400년 느티나무 배경 카누.',
    broll_ideas:['카누 합류 지점 위','물안개 카누','400년 느티나무 배경','카누 패들링','두물머리 전경'],
    hooks:['두물머리가 한강의 시작이에요','두 강이 여기서 합쳐져요','카누로 경계에 있을 수 있어요','물안개 새벽이 최고예요','양평 두물머리 카누 꿀팁'],
    thumbnails:['카누 합류 지점','물안개 카누','느티나무 배경','카누 패들링','두물머리 전경'],
    captions:{youtube:'양평 두물머리 카누 — 한강의 시작점이에요 🛶\n\n남한강+북한강이 여기서 만나 한강 시작!\n두 강의 경계에서 카누 타기\n\n📍 경기도 양평군 양서면 두물머리\n🛶 두물머리=두 물의 머리 합류 지점\n\n#양평두물머리카누 #두물머리 #양평 #경기여행 #카누',instagram:'양평 두물머리 카누 한강의 시작점이에요 🛶\n\n남한강+북한강이 여기서 만나 한강 시작 ✨\n두 강의 경계에서 카누 타기\n\n📍 경기 양평 두물머리\n\n#양평두물머리카누 #두물머리 #양평여행 #경기 #GemKorea',tiktok:'양평 두물머리 카누 꿀팁 🛶 한강의 시작점이에요! 남한강+북한강이 여기서 합쳐져 비로소 한강 // 카누 타면 두 강의 경계에 있을 수 있어요 #양평두물머리카누 #두물머리 #양평여행'},
    hashtags:{korean:['#한국여행','#경기여행','#양평여행','#두물머리카누','#GemKorea'],place_specific:['#양평두물머리두물머리한강시작','#남한강북한강합류지점','#카누두강경계','#물안개새벽카누최고']}
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
