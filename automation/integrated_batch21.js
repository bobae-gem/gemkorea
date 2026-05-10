const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const now = new Date().toISOString().slice(0,19);

const newExps = [
  {experience_id:'EX-GN-NAT-027',name:'남해 설천 달래마을 매화',category_main:'문화/체험',category_sub:'자연체험',region_main:'GN',region_sub:'경상남도 남해군',address:'경상남도 남해군 설천면 달래마을',lat:34.9108,lng:127.8814,price:'무료',duration:'1~2시간',reservation_required:false,target_user:['커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'남해 설천면 달래마을에서 3월 매화꽃을 감상하는 체험이다. 섬진강 광양과 달리 남해 섬마을 분위기에서 매화꽃을 즐기는 숨은 봄 명소로 알려져 있다.',source_urls:['https://www.namhae.go.kr/'],data_confidence:'high',tags:['남해매화','남해','경남','달래마을','봄꽃','매화','숨은명소'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'3월 초~중순 매화 시즌',phone:'055-860-3671'},
  {experience_id:'EX-GW-NAT-030',name:'강원 평창 오대산 월정사 전나무 숲',category_main:'문화/체험',category_sub:'자연체험',region_main:'GW',region_sub:'강원특별자치도 평창군',address:'강원특별자치도 평창군 진부면 오대산로 374-8',lat:37.7122,lng:128.5697,price:'성인 4,000원',duration:'1~2시간',reservation_required:false,target_user:['개인','커플','가족'],nearby_places:[],related_heritage_ids:[],short_description:'오대산 월정사 입구 1km 전나무 숲길을 걷는 체험이다. 700년 이상 된 전나무들이 하늘을 가릴 만큼 빽빽이 들어선 숲길이 국내 최고 산책로 중 하나로 꼽히며 사계절 다른 아름다움을 선사한다.',source_urls:['https://www.woljeongsa.org/'],data_confidence:'high',tags:['월정사전나무숲','오대산','평창','강원','700년전나무','사찰','산책'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중',phone:'033-339-6800'},
  {experience_id:'EX-GG-NAT-033',name:'인천 강화 전등사 은행나무',category_main:'문화/체험',category_sub:'역사 체험',region_main:'GG',region_sub:'인천광역시 강화군',address:'인천광역시 강화군 길상면 전등사로 37-41',lat:37.6456,lng:126.4503,price:'성인 3,000원',duration:'1~2시간',reservation_required:false,target_user:['개인','커플','가족'],nearby_places:[],related_heritage_ids:[],short_description:'한국 최고(最古) 불교 사찰 전등사에서 가을 은행나무 단풍을 감상하는 체험이다. 2000년 역사를 가진 전등사의 은행나무 황금빛이 10~11월 경내를 물들이는 장관이 펼쳐진다.',source_urls:['https://www.jeondeungsa.org/'],data_confidence:'high',tags:['전등사','강화','인천','은행나무','가을단풍','최고사찰','강화도'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'08:30~18:30',phone:'032-937-0125'},
  {experience_id:'EX-JN-NAT-029',name:'영광 불갑사 상사화 축제',category_main:'문화/체험',category_sub:'축제',region_main:'JN',region_sub:'전라남도 영광군',address:'전라남도 영광군 불갑면 불갑사로 450',lat:35.2753,lng:126.6053,price:'무료',duration:'1~2시간',reservation_required:false,target_user:['커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'매년 9월 전남 영광 불갑사에서 열리는 상사화(꽃무릇) 축제다. 꽃이 피고 질 때 잎이 없는 상사화가 9월에 붉게 만개하면 사찰 경내 전체가 붉은 꽃 카펫으로 뒤덮이는 장관이 펼쳐진다.',source_urls:['https://www.yeonggwang.go.kr/'],data_confidence:'high',tags:['불갑사상사화','영광','전남','꽃무릇','9월','붉은꽃','축제'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'9월 상사화 시즌',phone:'061-350-5584'},
  {experience_id:'EX-GG-NAT-034',name:'안산 대부도 갯벌+낙조',category_main:'문화/체험',category_sub:'자연체험',region_main:'GG',region_sub:'경기도 안산시',address:'경기도 안산시 단원구 대부도동 대부도',lat:37.2856,lng:126.5222,price:'무료',duration:'2~3시간',reservation_required:false,target_user:['가족','커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'서울 근교 대부도 갯벌에서 조개·게 잡기 체험과 서해 낙조를 함께 즐기는 체험이다. 시화호 인근 대부도는 조개구이 식당가와 함께 수도권 가족 주말 나들이 코스로 인기가 높다.',source_urls:['https://www.ansan.go.kr/'],data_confidence:'high',tags:['대부도','안산','경기','갯벌','조개잡기','낙조','조개구이'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'조석표 확인 (무료)',phone:'031-481-3407'},
  {experience_id:'EX-JN-NAT-030',name:'곡성 섬진강 기차마을 봄꽃',category_main:'문화/체험',category_sub:'자연체험',region_main:'JN',region_sub:'전라남도 곡성군',address:'전라남도 곡성군 오곡면 기차마을로 232',lat:35.2783,lng:127.2878,price:'유료 (기차마을 입장)',duration:'1~2시간',reservation_required:false,target_user:['가족','커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'섬진강 기차마을에서 벚꽃·유채꽃이 만발하는 봄 풍경을 즐기는 체험이다. 증기기관차를 타고 섬진강 봄 꽃길을 달리는 경험이 전라남도 봄 여행 최고 코스 중 하나다.',source_urls:['https://www.gstrain.co.kr/'],data_confidence:'high',tags:['곡성기차마을봄꽃','곡성','전남','벚꽃','유채꽃','증기기관차','섬진강'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'3월 말~4월 초 봄꽃 시즌',phone:'061-363-9900'},
  {experience_id:'EX-GW-NAT-031',name:'강원 홍천 수타사 단풍 트레킹',category_main:'문화/체험',category_sub:'자연체험',region_main:'GW',region_sub:'강원특별자치도 홍천군',address:'강원특별자치도 홍천군 동면 수타사로 473',lat:37.8089,lng:128.1869,price:'무료',duration:'2~3시간',reservation_required:false,target_user:['개인','커플','가족'],nearby_places:[],related_heritage_ids:[],short_description:'강원도 대표 단풍 사찰 수타사에서 가을 단풍 트레킹을 즐기는 체험이다. 수타사 계곡을 따라 이어지는 단풍길이 강원도 단풍 명소 중 가장 색이 선명하고 아름답다고 알려져 있다.',source_urls:['https://www.hongcheon.go.kr/'],data_confidence:'high',tags:['수타사','홍천','강원','단풍','계곡','가을트레킹','선명한단풍'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'10~11월 단풍 시즌',phone:'033-435-1921'},
  {experience_id:'EX-JN-NAT-031',name:'고창 선운사 꽃무릇',category_main:'문화/체험',category_sub:'자연체험',region_main:'JN',region_sub:'전라북도 고창군',address:'전라북도 고창군 아산면 선운사로 250',lat:35.5028,lng:126.5936,price:'성인 3,000원',duration:'1~2시간',reservation_required:false,target_user:['커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'선운사 주변 9월 꽃무릇 군락이 만개하는 시기에 방문하는 가을 체험이다. 선운사 입구 숲길과 도솔암 주변에 빨간 꽃무릇이 빽빽이 피어 영광 불갑사와 함께 전국 꽃무릇 2대 명소로 꼽힌다.',source_urls:['https://www.gochang.go.kr/'],data_confidence:'high',tags:['선운사꽃무릇','선운사','고창','전북','꽃무릇','9월','붉은꽃'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'9월 꽃무릇 시즌',phone:'063-561-1422'},
  {experience_id:'EX-GG-NAT-035',name:'경기 연천 재인폭포 캐니어닝',category_main:'문화/체험',category_sub:'어드벤처/레포츠',region_main:'GG',region_sub:'경기도 연천군',address:'경기도 연천군 연천읍 고문리 재인폭포',lat:38.1056,lng:127.0811,price:'1인 50,000원~',duration:'2~3시간',reservation_required:true,target_user:['개인','청년','커플'],nearby_places:[],related_heritage_ids:[],short_description:'한탄강 현무암 협곡 재인폭포에서 캐니어닝(계곡 타기) 어드벤처를 즐기는 체험이다. 현무암 협곡을 타고 내려오면서 폭포 아래 풀장으로 뛰어드는 극한 어드벤처가 경기도 최고 스릴 체험이다.',source_urls:['https://www.yeoncheon.go.kr/'],data_confidence:'high',tags:['재인폭포캐니어닝','연천','경기','캐니어닝','한탄강','현무암','스릴'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'seasonal',operating_hours:'5~9월',phone:'031-839-2562'},
  {experience_id:'EX-JN-NAT-032',name:'보성 율포해변 갯벌+녹차 세트',category_main:'문화/체험',category_sub:'자연체험',region_main:'JN',region_sub:'전라남도 보성군',address:'전라남도 보성군 회천면 율포리 율포해변',lat:34.7536,lng:127.0747,price:'녹차 해수풀 5,000원~',duration:'2~3시간',reservation_required:false,target_user:['개인','커플','가족'],nearby_places:[],related_heritage_ids:[],short_description:'보성 율포해변 갯벌 체험과 천연 녹차 해수풀 족욕을 함께 즐기는 힐링 세트 체험이다. 전국 유일 녹차 성분 해수풀에서 피부 미용 족욕을 즐기고 갯벌에서 바지락을 캐는 색다른 보성 코스다.',source_urls:['https://www.boseong.go.kr/'],data_confidence:'high',tags:['율포해변','보성','전남','갯벌','녹차해수풀','족욕','힐링'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00',phone:'061-850-5210'},
  {experience_id:'EX-GN-NAT-028',name:'통영 충렬사+세병관 역사 투어',category_main:'문화/체험',category_sub:'역사 체험',region_main:'GN',region_sub:'경상남도 통영시',address:'경상남도 통영시 여황로 327 충렬사',lat:34.8545,lng:128.4341,price:'무료',duration:'1~2시간',reservation_required:false,target_user:['가족','개인'],nearby_places:[],related_heritage_ids:[],short_description:'이순신 장군을 모신 충렬사와 조선 시대 통제영 세병관을 탐방하는 역사 투어다. 세병관은 임진왜란 후 통제사 이경준이 세운 건물로 현존하는 지방 관아 건물 중 규모가 가장 크다.',source_urls:['https://www.tongyeong.go.kr/'],data_confidence:'high',tags:['충렬사','세병관','통영','이순신','경남','조선시대','임진왜란'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00 (무료)',phone:'055-650-4681'},
  {experience_id:'EX-GG-NAT-036',name:'포천 산정호수 걷기+단풍 코스',category_main:'문화/체험',category_sub:'자연체험',region_main:'GG',region_sub:'경기도 포천시',address:'경기도 포천시 영북면 산정호수로 395',lat:38.1069,lng:127.3414,price:'주차 별도 (무료 탐방)',duration:'2~3시간',reservation_required:false,target_user:['가족','커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'포천 산정호수 6.5km 둘레길을 걷는 체험이다. 명성산 자락 산정호수는 봄·여름 초록, 가을 단풍, 겨울 설경이 사계절 아름다우며 특히 10~11월 명성산 억새와 단풍이 국내 최고 가을 경관을 자랑한다.',source_urls:['https://www.pocheon.go.kr/'],data_confidence:'high',tags:['산정호수','포천','경기','억새','단풍','걷기','가을'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (무료)',phone:'031-532-6135'}
];

const newShorts = [
  {
    experience_id:'EX-SE-PHT-001', experience_name:'서울 야경 사진 투어 (N서울타워)', category_sub:'문화예술', region:'서울특별시',
    script_30s:'오늘은 N서울타워 야경 사진 투어를 했어요. 서울 360도 야경이에요. 근데 아무도 안 알려주는 게 있어요 — 야경 사진은 스마트폰 프로 모드가 핵심이에요. 셔터 속도 1~3초, ISO 100으로 설정하면 삼각대 없어도 야경 사진이 달라져요. 너무 설정 하나로 달라지는 게 좋았습니다.',
    script_60s:'오늘은 서울 남산 N서울타워 전망대에서 야경 사진 투어를 했어요. 360도 서울 야경이 펼쳐지는 최고 전망 포인트예요. 근데 아무도 안 알려주는 꿀팁 하나 — 스마트폰으로 야경 사진 잘 찍는 방법이 있어요. 스마트폰 카메라 프로 모드(수동 모드)에서 셔터 속도를 1~3초로 길게 설정하고 ISO를 100으로 낮추면 돼요. 빛이 오랫동안 들어오면서 서울 불빛들이 선명하게 찍혀요. 유리창에 폰을 붙이면 떨림도 방지할 수 있어요. 이 설정 하나로 같은 자리에서 찍어도 사진이 완전히 달라요. 자정 무렵 한강 다리 조명도 아름다우니 타이밍도 중요해요. 너무 설정 하나가 야경 사진을 바꾼다는 게 좋았습니다.',
    secret_tip:'스마트폰 프로모드 야경 설정 — 셔터속도 1~3초, ISO 100, 유리창에 붙여 떨림 방지. 자정 무렵 한강 조명 타이밍. 이 설정으로 삼각대 없이도 야경 사진 수준 상승',
    filming_guide:'프로모드 설정 화면 클로즈업. 유리창에 붙여 찍는 방법. 완성 야경 사진 비포어/애프터 비교.',
    broll_ideas:['프로모드 설정 화면 클로즈업','유리창에 붙여 찍기 방법','야경 비포어 애프터 비교','서울 360도 야경 파노라마','N서울타워 전망대 내부'],
    hooks:['스마트폰 야경 설정 알아요?','셔터속도 1~3초가 핵심이에요','유리창에 붙이면 떨림 방지','설정 하나로 사진이 달라져요','N서울타워 야경 꿀팁'],
    thumbnails:['프로모드 설정 화면','유리창 붙여 찍기','야경 비포어 애프터','서울 360도 파노라마','전망대 내부'],
    captions:{youtube:'N서울타워 야경 사진 꿀팁 — 스마트폰 프로모드가 핵심이에요 📸\n\n셔터속도 1~3초, ISO 100, 유리창 붙이기!\n설정 하나로 사진이 달라져요\n\n📍 서울 중구 남산 N서울타워\n📸 자정 무렵 한강 조명이 아름다움\n\n#N서울타워야경 #서울여행 #야경사진 #스마트폰야경 #남산',instagram:'N서울타워 야경 스마트폰 프로모드가 핵심이에요 📸\n\n셔터속도 1~3초, ISO 100으로 설정 ✨\n유리창에 붙이면 떨림 방지\n\n📍 서울 남산 N서울타워\n\n#N서울타워 #서울야경 #서울여행 #야경사진 #GemKorea',tiktok:'N서울타워 야경 꿀팁 📸 스마트폰 프로모드에서 셔터속도 1~3초, ISO 100으로 설정! 유리창에 붙이면 떨림 방지 // 설정 하나로 야경 사진이 달라져요 #N서울타워 #서울야경 #야경사진'},
    hashtags:{korean:['#한국여행','#서울여행','#야경','#스마트폰사진','#GemKorea'],place_specific:['#N서울타워야경','#스마트폰프로모드','#야경설정','#서울360도야경']}
  },
  {
    experience_id:'EX-BS-PHT-001', experience_name:'부산 감천문화마을 벽화 투어', category_sub:'문화예술', region:'부산광역시',
    script_30s:'오늘은 부산 감천문화마을 벽화 투어를 했어요. 6·25 피란민이 만든 마을이에요. 근데 아무도 안 알려주는 게 있어요 — 주민들이 실제로 살아요. 사진 찍을 때 프라이버시를 지켜야 해요. 집 안 찍으면 안 돼요. 너무 살아있는 예술 마을이라서 좋았습니다.',
    script_60s:'오늘은 부산 사하구 감천문화마을 벽화 투어를 했어요. 6·25 피란민이 정착해 만든 산동네가 지금은 세계적 예술 마을이 된 곳이에요. 좁은 골목마다 벽화와 조형물이 가득해요. 근데 아무도 안 알려주는 꿀팁 하나 — 감천문화마을은 실제 주민이 살고 있는 마을이에요. 관광지처럼 보이지만 이 동네 사람들의 집이에요. 사진 찍을 때 주민 분들의 프라이버시를 꼭 지켜야 해요. 집 안쪽이나 주민 분들을 허락 없이 찍으면 안 돼요. 그리고 이른 아침 8~9시에 가면 관광객이 없어서 벽화를 혼자 즐길 수 있어요. 스탬프 투어 지도를 받아서 돌면 마을 전체를 체계적으로 볼 수 있어요. 너무 살아있는 마을이 예술이 된 감동이라서 좋았습니다.',
    secret_tip:'이른 아침 8~9시 방문 — 관광객 없어 벽화 독점. 주민 프라이버시 지키기 필수. 스탬프 투어 지도 활용. 태극도 순례지 역사 알고 가면 더 감동',
    filming_guide:'이른 아침 관광객 없는 골목 벽화 전경. 벽화 인물과 실제 사람 어우러지는 구도. 마을 전체 부산 항구 배경 조망.',
    broll_ideas:['이른 아침 관광객 없는 골목','벽화 인물과 사람 어우러지는 구도','마을 전체 부산 항구 배경','스탬프 투어 지도','계단식 집들 전경'],
    hooks:['이른 아침이 감천문화마을 최고예요','관광객 없는 벽화 독점 타이밍','주민이 실제로 살아요','프라이버시 꼭 지켜야 해요','감천문화마을 꿀팁'],
    thumbnails:['이른 아침 관광객 없는 골목','벽화와 사람 어우러지기','부산 항구 배경 마을 조망','스탬프 투어 지도','계단식 집들'],
    captions:{youtube:'감천문화마을 이른 아침이 최고예요 📸\n\n8~9시에 가면 벽화 독점!\n실제 주민이 사는 마을이라 프라이버시 필수\n\n📍 부산 사하구 감천문화마을\n📸 스탬프 투어 지도 활용 추천\n\n#감천문화마을 #부산여행 #벽화투어 #이른아침 #6·25피란마을',instagram:'감천문화마을 이른 아침 8~9시에 가면 벽화 독점이에요 📸\n\n실제 주민이 살아요 프라이버시 지켜요 ✨\n스탬프 투어 지도 활용\n\n📍 부산 감천문화마을\n\n#감천문화마을 #부산여행 #벽화 #이른아침 #GemKorea',tiktok:'감천문화마을 꿀팁 📸 이른 아침 8~9시에 가면 관광객 없어서 벽화 독점이에요! 실제 주민이 사는 마을이라 프라이버시 꼭 지키세요 #감천문화마을 #부산여행 #벽화투어'},
    hashtags:{korean:['#한국여행','#부산여행','#감천문화마을','#벽화투어','#GemKorea'],place_specific:['#감천문화마을벽화','#이른아침감천','#주민프라이버시','#6·25피란마을']}
  },
  {
    experience_id:'EX-GG-FUD-001', experience_name:'수원 갈비 만들기 체험', category_sub:'발효/음식', region:'경기도',
    script_30s:'오늘은 수원 화성 인근에서 왕갈비 만들기 체험을 했어요. 정조대왕이 사랑했던 수원 갈비예요. 근데 아무도 안 알려주는 게 있어요 — 갈비 양념은 배즙이 핵심이에요. 배가 고기 섬유를 분해해서 연해져요. 그게 수원 갈비 부드러운 이유예요. 너무 배가 이렇게 쓰인다는 게 좋았습니다.',
    script_60s:'오늘은 경기도 수원 화성행궁 인근에서 전통 수원 왕갈비 만들기 체험을 했어요. 정조대왕이 사랑했다는 수원 갈비의 역사적 배경과 함께 직접 양념을 만들고 갈비를 재워 구워 먹는 체험이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 수원 갈비 양념의 핵심이 배예요. 배즙에 있는 단백질 분해 효소가 고기 섬유를 분해하면서 갈비가 연해지거든요. 시간이 지날수록 더 잘 스며들어서 최소 12시간 재워야 해요. 이 사실을 알면 갈비를 구울 때 왜 이렇게 부드러운지 이해가 돼요. 양념에 사용하는 배의 종류도 나주 배가 가장 달고 효과가 좋대요. 너무 배즙 하나가 요리 과학이라는 게 좋았습니다.',
    secret_tip:'수원 갈비 양념 핵심 = 배즙 단백질 분해 효소 — 최소 12시간 재우기. 나주 배가 가장 효과적. 이 원리 알면 집에서도 활용. 화성행궁 야경+갈비 수원 완벽 저녁 코스',
    filming_guide:'배즙 갈비 양념 재우는 과정. 갈비 구울 때 연기 피어오르는 장면. 정조대왕 초상화와 수원 갈비 역사 설명.',
    broll_ideas:['배즙 갈비 양념 재우기','갈비 굽는 연기 피어오르기','정조대왕 초상화와 역사 설명','수원 왕갈비 완성 클로즈업','화성행궁 배경'],
    hooks:['수원 갈비가 부드러운 이유 알아요?','배즙 단백질 분해 효소가 비결이에요','12시간 재워야 제대로예요','정조대왕이 사랑한 수원 갈비','수원 갈비 만들기 꿀팁'],
    thumbnails:['배즙 양념 재우기','갈비 굽는 연기','정조 역사 설명','완성 왕갈비 클로즈업','화성행궁 배경'],
    captions:{youtube:'수원 왕갈비 만들기 — 배즙이 핵심이에요 🥩\n\n단백질 분해 효소가 갈비를 연하게!\n최소 12시간 재우기\n\n📍 경기도 수원 화성행궁 인근\n🥩 정조대왕이 사랑한 수원 갈비\n\n#수원왕갈비 #수원 #경기여행 #갈비만들기 #정조대왕',instagram:'수원 왕갈비 배즙이 핵심이에요 🥩\n\n단백질 분해 효소가 갈비를 연하게 해요 ✨\n최소 12시간 재우기\n\n📍 경기 수원 화성행궁 인근\n\n#수원왕갈비 #수원여행 #경기 #갈비만들기 #GemKorea',tiktok:'수원 갈비 꿀팁 🥩 배즙이 핵심이에요! 단백질 분해 효소가 고기 섬유 분해해서 연해짐 // 최소 12시간 재워야 제대로예요 정조대왕 사랑한 수원 갈비 #수원왕갈비 #수원여행 #경기'},
    hashtags:{korean:['#한국여행','#경기여행','#수원여행','#갈비','#GemKorea'],place_specific:['#수원왕갈비','#배즙갈비비결','#정조대왕갈비','#수원갈비만들기']}
  },
  {
    experience_id:'EX-JB-FUD-002', experience_name:'전주 한과·다식 만들기 체험', category_sub:'발효/음식', region:'전라북도',
    script_30s:'오늘은 전주에서 한과와 다식을 만들었어요. 조선 왕실 전통 과자예요. 근데 아무도 안 알려주는 게 있어요 — 한과는 찹쌀+꿀만이에요. 방부제·색소 없이 수천 년 이어온 거예요. 그 단순함이 가장 정직한 과자예요. 너무 단순함이 최고라는 게 좋았습니다.',
    script_60s:'오늘은 전북 전주 한옥마을에서 전통 한과와 다식 만들기 체험을 했어요. 조선 시대 왕실 잔치상에 올라간 전통 과자예요. 찹쌀·꿀·참기름으로 만드는 한과와 콩가루·꿀·참기름으로 만드는 다식을 직접 만들어요. 근데 아무도 안 알려주는 꿀팁 하나 — 한과가 수천 년 이어온 이유가 있어요. 방부제도 색소도 전혀 없는데 오래 보관되는 이유가 꿀이에요. 꿀의 높은 당 농도가 세균이 자라지 못하는 환경을 만들어요. 그래서 고온다습한 한국 여름에도 오래 보관할 수 있었어요. 가장 단순한 재료로 만든 과자가 가장 오래 가는 역설이에요. 직접 만든 한과를 먹으면 마트 한과랑 맛이 완전히 달라요. 너무 단순함이 최고라는 걸 알게 돼서 좋았습니다.',
    secret_tip:'한과 오래 보관되는 이유 = 꿀 높은 당 농도가 세균 억제 — 방부제 없이 수천 년. 가장 단순한 재료의 역설. 직접 만든 것이 마트보다 맛있는 이유. 전주 한옥마을 합죽선+한과 세트',
    filming_guide:'찹쌀 반죽 늘려 한과 만드는 손. 다식판으로 찍어 모양 내는 순간. 완성 한과 다식 늘어놓은 전경.',
    broll_ideas:['찹쌀 반죽 늘리는 손','다식판으로 찍어 모양 내기','완성 한과 다식 전경','꿀과 재료 설명 클로즈업','전주 한옥마을 배경'],
    hooks:['한과 방부제 없이 왜 오래가요?','꿀이 세균 억제하는 이유예요','단순한 재료의 역설이에요','직접 만든 게 마트보다 맛있어요','전주 한과 다식 체험 꿀팁'],
    thumbnails:['찹쌀 반죽 늘리는 손','다식판 모양 내기','완성 한과 다식 전경','꿀 재료 클로즈업','전주 한옥마을 배경'],
    captions:{youtube:'전주 한과 다식 만들기 — 방부제 없이 왜 오래 가요? 🍯\n\n꿀의 높은 당도가 세균 억제!\n수천 년 이어온 단순함의 역설\n\n📍 전북 전주시 한옥마을 한과 다식 체험\n🍯 찹쌀·꿀·참기름만으로 만드는 전통 과자\n\n#전주한과다식 #전주 #전북여행 #한과만들기 #전통과자',instagram:'전주 한과 다식 방부제 없이 오래 가는 이유 알아요? 🍯\n\n꿀 당도가 세균 억제 수천 년 이어온 역설 ✨\n직접 만든 게 마트보다 맛있어요\n\n📍 전북 전주 한옥마을\n\n#전주한과다식 #전주여행 #전북 #한과 #GemKorea',tiktok:'전주 한과 꿀팁 🍯 방부제 없이 오래 가는 이유 = 꿀의 높은 당도가 세균 억제! 수천 년 이어온 단순함의 역설 // 직접 만든 게 마트보다 맛있어요 #전주한과다식 #전주여행 #전통과자'},
    hashtags:{korean:['#한국여행','#전북여행','#전주여행','#한과','#GemKorea'],place_specific:['#전주한과다식','#꿀세균억제','#단순함의역설','#왕실전통과자']}
  },
  {
    experience_id:'EX-IC-ISL-001', experience_name:'인천 강화도 갯벌 낙조 투어', category_sub:'자연체험', region:'인천광역시',
    script_30s:'오늘은 강화도 동막 갯벌에서 낙조를 봤어요. 서해 최고 일몰이에요. 근데 아무도 안 알려주는 게 있어요 — 갯벌 위 일몰이 물보다 갯벌에 더 선명하게 반사돼요. 흙이 빛을 머금는 거예요. 그 반사가 물 반사보다 더 따뜻해요. 너무 갯벌 반사가 이렇게 아름다울 줄 몰랐어서 좋았습니다.',
    script_60s:'오늘은 인천 강화도 화도면 동막 갯벌에서 서해 낙조 체험을 했어요. 썰물 때 드러나는 광활한 갯벌 위로 붉은 태양이 지는 장면이 강화 최고 일몰 포인트예요. 근데 아무도 안 알려주는 꿀팁 하나 — 갯벌 낙조 사진의 비밀이 있어요. 물 위 일몰 반사보다 갯벌 위 일몰 반사가 더 아름답게 나와요. 갯벌의 축축한 흙이 빛을 흡수하면서 더 따뜻하고 풍부한 색감으로 반사해요. 사진가들이 갯벌에 발 담그고 낮은 앵글로 찍는 이유예요. 황금빛 갯벌 위를 붉은 빛이 가득 채우는 그 5분을 포착하려면 일몰 30분 전에 도착해서 자리를 잡아야 해요. 너무 갯벌 반사 일몰이 이렇게 따뜻하다는 게 좋았습니다.',
    secret_tip:'갯벌 반사 = 물 반사보다 따뜻하고 풍부한 색감 — 축축한 흙이 빛 흡수해서 더 풍부하게 반사. 낮은 앵글로 갯벌에 발 담그고 찍기. 일몰 30분 전 도착 자리 선점 필수',
    filming_guide:'갯벌 위 일몰 반사 낮은 앵글 촬영. 황금빛 갯벌 전경 광각. 석양 하늘과 갯벌 대칭 구도.',
    broll_ideas:['갯벌 위 일몰 반사 낮은 앵글','황금빛 갯벌 전경 광각','석양 하늘 갯벌 대칭','갯벌 위 발자국 실루엣','석모도 방향 강화 낙조'],
    hooks:['갯벌 반사가 물 반사보다 따뜻해요','흙이 빛을 머금는 거예요','낮은 앵글이 갯벌 낙조 핵심이에요','30분 전 도착해서 자리 잡아야 해요','강화도 갯벌 낙조 꿀팁'],
    thumbnails:['갯벌 반사 낮은 앵글','황금빛 갯벌 광각','석양 하늘 대칭','갯벌 발자국 실루엣','강화 낙조'],
    captions:{youtube:'강화도 동막 갯벌 낙조 — 갯벌 반사가 더 따뜻해요 🌅\n\n물 반사보다 갯벌 반사가 색이 풍부!\n낮은 앵글+일몰 30분 전 도착이 핵심\n\n📍 인천 강화군 화도면 동막 갯벌\n🌅 낮은 앵글로 갯벌에 발 담그고 찍기\n\n#강화도낙조 #강화도 #인천여행 #갯벌낙조 #서해일몰',instagram:'강화도 동막 갯벌 낙조 갯벌 반사가 더 따뜻해요 🌅\n\n물보다 갯벌 반사가 색이 풍부 ✨\n낮은 앵글이 핵심이에요\n\n📍 인천 강화 동막 갯벌\n\n#강화도낙조 #강화도 #인천여행 #갯벌낙조 #GemKorea',tiktok:'강화도 갯벌 낙조 꿀팁 🌅 갯벌 반사가 물 반사보다 더 따뜻하고 풍부해요! 낮은 앵글로 발 담그고 찍기 // 30분 전 도착해서 자리 잡아야 해요 #강화도낙조 #강화도 #인천여행'},
    hashtags:{korean:['#한국여행','#인천여행','#강화도여행','#낙조','#GemKorea'],place_specific:['#강화도동막갯벌','#갯벌낙조반사','#서해일몰','#낮은앵글갯벌']}
  },
  {
    experience_id:'EX-JN-ISL-001', experience_name:'완도 청산도 슬로 사이클링', category_sub:'어드벤처/레포츠', region:'전라남도',
    script_30s:'오늘은 청산도에서 자전거를 탔어요. 아시아 최초 슬로시티의 자전거예요. 근데 아무도 안 알려주는 게 있어요 — 청산도 자전거는 슬로시티답게 천천히 타야 해요. 빠르게 타면 이 섬의 진짜 소리가 안 들려요. 돌담 너머 바다 파도 소리를 들어야 해요. 너무 느림이 여행이라는 게 좋았습니다.',
    script_60s:'오늘은 전남 완도 청산도에서 슬로 사이클링 체험을 했어요. 아시아 최초 슬로시티 청산도를 자전거로 천천히 달리는 체험이에요. 42km 슬로길 중 자전거 구간이 가장 아름다운 구간이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 청산도 자전거의 핵심이 속도예요. 슬로시티라는 이름 그대로 아주 천천히 달려야 해요. 빠르게 페달을 밟으면 청산도가 이 섬을 여행자에게 주는 선물들을 놓쳐요. 돌담길을 지날 때 바다 파도 소리, 봄에는 청보리밭 바람 소리, 마을 어르신들의 손인사 — 이 모든 것이 느리게 달릴 때만 들리고 보여요. 빠르게 달리면 그냥 자전거 여행이 되지만 천천히 달리면 청산도가 살아있게 느껴져요. 너무 느림이 여행의 핵심이라는 게 좋았습니다.',
    secret_tip:'청산도 슬로 자전거 = 최대한 천천히 달리기 — 돌담 파도 소리, 청보리 바람 소리, 어르신 손인사가 느리게 달릴 때만 들림. 빠르면 그냥 자전거 여행. 디지털 디톡스 선언',
    filming_guide:'청산도 돌담길 천천히 달리는 자전거 슬로우. 청보리밭과 바다 동시 구도. 어르신과 손인사 교환.',
    broll_ideas:['돌담길 천천히 달리는 자전거 슬로우','청보리밭과 바다 동시 구도','어르신과 손인사 교환','청산도 등대 배경 자전거','바다 내려다보는 돌담길'],
    hooks:['청산도 자전거는 느리게 타야 해요','빠르면 소리가 안 들려요','돌담 너머 파도 소리 들어봐요','슬로시티 여행의 진짜 의미','청산도 슬로 사이클링 꿀팁'],
    thumbnails:['돌담길 천천히 자전거 슬로우','청보리밭 바다 동시','어르신 손인사','등대 배경 자전거','돌담길 내려다보기'],
    captions:{youtube:'청산도 슬로 사이클링 — 천천히 달려야 해요 🚲\n\n빠르면 돌담 파도 소리가 안 들려요!\n아시아 최초 슬로시티 완도 청산도\n\n📍 전남 완도군 청산도\n🚲 완도항에서 배 50분 / 자전거 대여 현지\n\n#청산도사이클링 #완도 #전남여행 #슬로시티 #느린여행',instagram:'청산도 자전거 천천히 달려야 해요 🚲\n\n빠르면 돌담 파도 소리 놓쳐요 ✨\n슬로시티 여행의 진짜 의미\n\n📍 전남 완도 청산도\n\n#청산도사이클링 #완도여행 #전남 #슬로시티 #GemKorea',tiktok:'청산도 자전거 꿀팁 🚲 천천히 달려야 해요! 빠르게 타면 돌담 파도 소리, 청보리 바람 소리 놓쳐요 // 아시아 최초 슬로시티 느림이 여행의 핵심 #청산도사이클링 #완도여행 #슬로시티'},
    hashtags:{korean:['#한국여행','#전남여행','#완도여행','#슬로시티','#GemKorea'],place_specific:['#청산도슬로사이클링','#슬로시티자전거','#돌담파도소리','#느린여행청산도']}
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
