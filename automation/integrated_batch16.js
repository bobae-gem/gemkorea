const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const now = new Date().toISOString().slice(0,19);

const newExps = [
  {experience_id:'EX-GG-NAT-019',name:'파주 장단콩 두부 만들기 체험',category_main:'문화/체험',category_sub:'발효/음식',region_main:'GG',region_sub:'경기도 파주시',address:'경기도 파주시 적성면 장단콩마을',lat:37.9236,lng:126.8789,price:'1인 15,000원',duration:'2시간',reservation_required:true,target_user:['가족','개인'],nearby_places:[],related_heritage_ids:[],short_description:'파주 장단콩 마을에서 직접 두부를 만드는 농촌 체험이다. 파주 특산품 장단콩을 갈아 간수를 넣어 두부를 만드는 전통 방식을 배우며 갓 만든 두부를 즉석에서 맛볼 수 있다.',source_urls:['https://www.paju.go.kr/'],data_confidence:'high',tags:['장단콩두부','파주','경기','두부만들기','장단콩','전통음식','농촌체험'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'10:00~17:00',phone:'031-940-4523'},
  {experience_id:'EX-JN-NAT-017',name:'고창 복분자 따기 체험',category_main:'문화/체험',category_sub:'농촌 체험',region_main:'JN',region_sub:'전라북도 고창군',address:'전라북도 고창군 심원면 복분자마을',lat:35.4200,lng:126.5867,price:'1인 12,000원',duration:'1~2시간',reservation_required:true,target_user:['가족','어린이','커플'],nearby_places:[],related_heritage_ids:[],short_description:'전국 복분자 생산 1위 고창에서 6~7월 복분자를 직접 따는 농촌 체험이다. 갓 딴 복분자를 현장에서 먹고 복분자 잼·와인 만들기 체험도 함께 즐길 수 있다.',source_urls:['https://www.gochang.go.kr/'],data_confidence:'high',tags:['복분자따기','고창','전북','복분자','여름체험','농촌','가족체험'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'seasonal',operating_hours:'6~7월 복분자 시즌',phone:'063-560-2979'},
  {experience_id:'EX-GN-NAT-014',name:'함안 악어 등 수상 레포츠',category_main:'문화/체험',category_sub:'어드벤처/레포츠',region_main:'GN',region_sub:'경상남도 함안군',address:'경상남도 함안군 칠원읍 함안댐 수변공원',lat:35.2500,lng:128.3894,price:'1인 30,000원~',duration:'1~2시간',reservation_required:true,target_user:['개인','청년','커플'],nearby_places:[],related_heritage_ids:[],short_description:'함안댐 수변에서 카약·SUP·수상스키 등 다양한 수상 레포츠를 즐기는 체험이다. 산으로 둘러싸인 호수에서 즐기는 수상 레포츠가 여름 경남 최고 피서 코스 중 하나다.',source_urls:['https://www.haman.go.kr/'],data_confidence:'high',tags:['함안수상레포츠','함안','경남','카약','SUP','수상스키','여름여행'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'seasonal',operating_hours:'5~10월',phone:'055-580-2481'},
  {experience_id:'EX-JN-NAT-018',name:'진도 신비의 바닷길 체험',category_main:'문화/체험',category_sub:'자연체험',region_main:'JN',region_sub:'전라남도 진도군',address:'전라남도 진도군 고군면 회동리 신비의 바닷길',lat:34.4833,lng:126.3111,price:'무료',duration:'1~2시간',reservation_required:false,target_user:['가족','개인','외국인'],nearby_places:[],related_heritage_ids:[],short_description:'매년 음력 2~3월 사리 때 진도와 모도 사이 2.8km 바다가 갈라지는 신비의 바닷길이 열리는 자연 현상을 체험한다. 국제적으로 한국의 모세의 기적으로 알려진 자연 현상이다.',source_urls:['https://www.jindo.go.kr/'],data_confidence:'high',tags:['신비의바닷길','진도','전남','바다갈라짐','모세의기적','자연현상','음력23월'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'매년 음력 2~3월 사리 때',phone:'061-540-6431'},
  {experience_id:'EX-GW-NAT-018',name:'강화도 마니산 등산',category_main:'문화/체험',category_sub:'자연체험',region_main:'GW',region_sub:'인천광역시 강화군',address:'인천광역시 강화군 화도면 마니산로 585',lat:37.5941,lng:126.4353,price:'성인 1,000원',duration:'2~3시간',reservation_required:false,target_user:['개인','커플','가족'],nearby_places:[],related_heritage_ids:[],short_description:'단군이 천제를 올렸다는 강화도 마니산(472m) 참성단까지 등산하는 체험이다. 정상에서 바라보는 서해와 강화도 전경이 아름다우며 매년 개천절에 단군제가 열린다.',source_urls:['https://www.ganghwa.go.kr/'],data_confidence:'high',tags:['마니산','강화도','참성단','단군','인천','등산','개천절'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중',phone:'032-930-4020'},
  {experience_id:'EX-JB-NAT-005',name:'남원 광한루 춘향 체험',category_main:'문화/체험',category_sub:'역사 체험',region_main:'JB',region_sub:'전라북도 남원시',address:'전라북도 남원시 요천로 1447 광한루원',lat:35.4180,lng:127.3908,price:'성인 3,000원',duration:'1~2시간',reservation_required:false,target_user:['커플','개인','외국인'],nearby_places:[],related_heritage_ids:[],short_description:'춘향전의 배경지 남원 광한루원에서 판소리 춘향가와 관련된 역사 문화를 체험하는 투어다. 이몽룡과 성춘향이 그네를 타던 완월정·춘향사당·춘향제 기간 다양한 전통 공연이 펼쳐진다.',source_urls:['https://www.gwanghallu.or.kr/'],data_confidence:'high',tags:['광한루','남원','춘향전','전북','춘향','이몽룡','판소리'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'08:00~21:00',phone:'063-620-6655'},
  {experience_id:'EX-GN-NAT-015',name:'거제 공곶이 수선화 투어',category_main:'문화/체험',category_sub:'자연체험',region_main:'GN',region_sub:'경상남도 거제시',address:'경상남도 거제시 일운면 지세포리 공곶이',lat:34.8611,lng:128.7333,price:'무료',duration:'1~2시간',reservation_required:false,target_user:['커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'거제 동쪽 해안 공곶이에서 3~4월 수선화와 동백이 만발하는 봄 풍경을 감상하는 체험이다. 부부가 30년간 가꾼 개인 정원이 천국의 정원이라 불리는 봄 명소로 알려져 있다.',source_urls:['https://www.geoje.go.kr/'],data_confidence:'high',tags:['공곶이','거제','경남','수선화','동백','봄꽃','비밀정원'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'3~4월 수선화 시즌',phone:'055-639-3000'},
  {experience_id:'EX-GG-NAT-020',name:'성남 모란 민속 5일장 투어',category_main:'문화/체험',category_sub:'전통시장',region_main:'GG',region_sub:'경기도 성남시',address:'경기도 성남시 중원구 모란로 일원',lat:37.4344,lng:127.1278,price:'무료 입장',duration:'1~2시간',reservation_required:false,target_user:['가족','개인'],nearby_places:[],related_heritage_ids:[],short_description:'수도권 최대 규모 전통 5일장 성남 모란 장을 탐방하는 체험이다. 매월 4·9·14·19·24·29일에 열리며 전국 각지 농산물·수산물·의류·먹거리가 모이는 전통 장터 문화를 체험할 수 있다.',source_urls:['https://www.seongnam.go.kr/'],data_confidence:'high',tags:['모란시장','성남','경기','5일장','전통시장','수도권','재래시장'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'4·9·14·19·24·29일 (07:00~17:00)',phone:'031-729-3114'},
  {experience_id:'EX-GW-NAT-019',name:'인제 빙벽 등반 체험',category_main:'문화/체험',category_sub:'어드벤처/레포츠',region_main:'GW',region_sub:'강원특별자치도 인제군',address:'강원특별자치도 인제군 북면 한계령로 빙벽',lat:38.1678,lng:128.1519,price:'1인 40,000원~',duration:'2~3시간',reservation_required:true,target_user:['개인','청년','커플'],nearby_places:[],related_heritage_ids:[],short_description:'겨울 인제 설악산 인근에서 자연 빙벽을 도구를 이용해 등반하는 극한 어드벤처 체험이다. 얼음 도끼와 아이젠을 착용하고 수직 빙벽을 오르는 짜릿한 겨울 스포츠를 초보자도 강사와 함께 즐길 수 있다.',source_urls:['https://www.inje.go.kr/tour/'],data_confidence:'high',tags:['빙벽등반','인제','강원','겨울어드벤처','빙벽','아이스클라이밍','극한체험'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'seasonal',operating_hours:'1~2월 빙벽 시즌',phone:'033-461-4296'},
  {experience_id:'EX-JN-NAT-019',name:'무안 황토 갯벌 체험',category_main:'문화/체험',category_sub:'자연체험',region_main:'JN',region_sub:'전라남도 무안군',address:'전라남도 무안군 해제면 황토갯벌 체험마을',lat:34.9658,lng:126.3689,price:'1인 10,000원~',duration:'2~3시간',reservation_required:true,target_user:['가족','개인'],nearby_places:[],related_heritage_ids:[],short_description:'전남 무안 황토 갯벌에서 맨발로 걷고 황토 피부 마사지를 즐기는 특별한 체험이다. 황토 성분이 풍부한 무안 갯벌은 피부 미용에 효과적이며 게·낙지·조개를 직접 잡는 갯벌 생태 체험도 함께한다.',source_urls:['https://www.muan.go.kr/'],data_confidence:'high',tags:['무안황토갯벌','무안','전남','황토','갯벌','피부','낙지잡기'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'seasonal',operating_hours:'5~9월 갯벌 시즌',phone:'061-450-5260'},
  {experience_id:'EX-GN-NAT-016',name:'창원 안민도로 자전거 투어',category_main:'문화/체험',category_sub:'어드벤처/레포츠',region_main:'GN',region_sub:'경상남도 창원시',address:'경상남도 창원시 진해구 안민도로',lat:35.1439,lng:128.6975,price:'무료 (자전거 대여 별도)',duration:'2~3시간',reservation_required:false,target_user:['커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'벚꽃 명소로 유명한 창원 진해 안민도로를 자전거로 달리는 체험이다. 3~4월 벚꽃 시즌에 8km 벚꽃 터널을 자전거로 통과하는 코스로 군항제 기간 가장 아름답다.',source_urls:['https://www.changwon.go.kr/'],data_confidence:'high',tags:['안민도로','창원','진해','경남','벚꽃','자전거','군항제'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'3~4월 벚꽃 시즌',phone:'055-225-3691'},
  {experience_id:'EX-JB-NAT-006',name:'부안 변산반도 바지락 캐기',category_main:'문화/체험',category_sub:'해양체험',region_main:'JB',region_sub:'전라북도 부안군',address:'전라북도 부안군 진서면 변산해변 일원',lat:35.6581,lng:126.5194,price:'1인 10,000원~',duration:'1~2시간',reservation_required:false,target_user:['가족','어린이'],nearby_places:[],related_heritage_ids:[],short_description:'변산반도 서해 갯벌에서 바지락과 동죽을 직접 캐는 어촌 체험이다. 썰물 때 드러나는 변산 갯벌에서 갈퀴로 바지락을 캐고 즉석에서 바지락 칼국수를 즐기는 코스다.',source_urls:['https://www.buan.go.kr/'],data_confidence:'high',tags:['바지락캐기','변산반도','부안','전북','갯벌','바지락칼국수','어촌체험'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'seasonal',operating_hours:'썰물 시간 (4~10월)',phone:'063-580-4434'}
];

const newShorts = [
  {
    experience_id:'EX-DG-ART-001', experience_name:'대구 근대 골목 투어', category_sub:'역사 체험', region:'대구광역시',
    script_30s:'오늘은 대구 근대 골목 투어를 했어요. 100년 전 대구가 그대로 있는 곳이에요. 근데 아무도 안 알려주는 게 있어요 — 이상화 시인이 봄은 고양이로다를 쓴 집이 여기 있어요. 그 집 앞에서 시를 읽으면 시가 살아나요. 너무 시인의 집을 직접 가는 게 좋았습니다.',
    script_60s:'오늘은 대구 중구 근대 골목 투어를 했어요. 일제강점기 대구의 모습이 그대로 보존된 계산동·약전골목·3·1만세운동길을 걷는 역사 투어예요. 근데 아무도 안 알려주는 꿀팁 하나 — 근대 골목에 이상화 시인의 고택이 있어요. 빼앗긴 들에도 봄은 오는가를 쓴 시인이에요. 그 집 앞에 시비가 세워져 있는데, 그 앞에서 시를 소리 내어 읽으면 100년 전 일제강점기 대구에서 저항하던 시인의 마음이 직접 전달되는 느낌이 나요. 단순히 집을 보는 게 아니라 그 공간에서 시를 소리 내어 읽는 그 체험이 다른 역사 탐방과 달라요. 인근 서상돈 고택까지 함께 돌면 대구 독립운동 역사를 온몸으로 느낄 수 있어요. 너무 시인의 집 앞에서 저항시를 읽는 그 감각이라서 좋았습니다.',
    secret_tip:'이상화 시인 고택 앞 시비 — 소리 내어 시 읽으면 저항의 감각. 단순 역사 탐방과 다른 문학 체험. 서상돈 고택 세트. 화~일 해설 투어 10시·14시 무료',
    filming_guide:'이상화 시비 앞에서 시 낭독 장면. 근대 건축물과 현재 대구 도시 대비. 약전골목 한약재 약재상 클로즈업.',
    broll_ideas:['이상화 시비 앞 시 낭독 장면','근대 건축물과 현재 대구 대비','약전골목 약재상 클로즈업','계산성당 외관','3·1만세운동길 역사 표지'],
    hooks:['이상화 시인 집이 대구 근대 골목에 있어요','시비 앞에서 시 읽으면 달라요','100년 전 대구가 그대로 있어요','저항시를 그 장소에서 읽는 느낌','대구 근대 골목 투어 꿀팁'],
    thumbnails:['이상화 시비 앞 낭독','근대 건축물 현재 대비','약전골목 약재상','계산성당','3·1 표지'],
    captions:{youtube:'대구 근대 골목 — 이상화 시인 고택에서 저항시 읽었어요 📜\n\n시비 앞에서 소리 내어 읽으면 100년 전이 살아나요!\n해설 투어 화~일 10시·14시 무료\n\n📍 대구 중구 근대 골목\n📜 이상화 고택+서상돈 고택 세트 코스\n\n#대구근대골목 #대구여행 #이상화 #근대역사 #항일',instagram:'대구 근대 골목 이상화 시인 고택 앞에서 저항시 읽었어요 📜\n\n시비 앞 낭독이 다른 역사 체험이에요 ✨\n100년 전 대구가 그대로\n\n📍 대구 중구 근대 골목\n\n#대구근대골목 #대구여행 #이상화 #GemKorea',tiktok:'대구 근대 골목 꿀팁 📜 이상화 시인 고택 앞 시비에서 시 소리 내어 읽어보세요! 100년 전 저항의 감각이 전달돼요 // 해설 투어 무료 #대구근대골목 #대구여행 #이상화'},
    hashtags:{korean:['#한국여행','#대구여행','#역사여행','#항일문학','#GemKorea'],place_specific:['#대구근대골목','#이상화고택','#저항시낭독','#약전골목']}
  },
  {
    experience_id:'EX-JJ-CRF-001', experience_name:'제주 옹기 항아리 만들기 체험', category_sub:'전통공예', region:'제주특별자치도',
    script_30s:'오늘은 제주 저지리 공방에서 옹기를 만들었어요. 제주 특유 흑토로 만드는 거예요. 근데 아무도 안 알려주는 게 있어요 — 제주 흑토는 철분이 많아서 구우면 검정이 돼요. 육지 옹기랑 색이 달라요. 그 이유를 알면 제주 옹기가 달리 보여요. 너무 흙이 다르면 결과가 다르다는 게 좋았습니다.',
    script_60s:'오늘은 제주 한경면 저지리 예술인마을 공방에서 제주 옹기 만들기 체험을 했어요. 제주 전통 옹기는 흑토를 사용하는데 육지 옹기와 색깔이 다르게 나와요. 근데 아무도 안 알려주는 꿀팁 하나 — 제주 흑토에는 철분이 많이 함유되어 있어요. 그래서 불에 구우면 철분이 산화되면서 검정에 가까운 짙은 색이 나와요. 육지 옹기는 대부분 갈색이나 적갈색인데 제주 옹기는 검고 무거운 질감이에요. 같은 방식으로 만들어도 흙이 다르면 결과가 완전히 달라지는 거예요. 제주 허벅(제주 전통 물 항아리)이 독특한 이유가 바로 이 흑토 때문이에요. 체험에서 완성한 후 소성하면 나중에 택배로 받는데 결과물 색이 기대와 다를 수 있다는 사실도 미리 알아두면 좋아요. 너무 흙이 이렇게 달라서 결과가 다르다는 게 좋았습니다.',
    secret_tip:'제주 흑토 철분 많아 구우면 검정 — 육지 옹기와 색 다름 이유. 제주 허벅 독특함의 비밀. 체험 후 소성→택배 수령. 저지리 예술인마을 갤러리 세트 탐방',
    filming_guide:'흑토 반죽하는 손 질감 클로즈업. 완성 옹기와 육지 옹기 색 비교. 저지리 예술인마을 외경.',
    broll_ideas:['흑토 반죽하는 손 질감 클로즈업','완성 옹기 육지 옹기 색 비교','물레 성형 흑토 올라가는 장면','제주 허벅 실물 전시','저지리 예술인마을 외경'],
    hooks:['제주 옹기 색이 검정인 이유 알아요?','흑토 철분이 색을 만드는 거예요','육지 옹기랑 왜 다른지 알았어요','제주 허벅 독특함의 비밀','저지리 옹기 체험 꿀팁'],
    thumbnails:['흑토 반죽하는 손','완성 옹기 색 비교','물레 흑토 성형','제주 허벅 실물','저지리 마을 외경'],
    captions:{youtube:'제주 옹기 — 흑토 철분이 검정 색을 만들어요 🏺\n\n육지 옹기랑 색이 다른 이유!\n제주 허벅 독특함의 비밀\n\n📍 제주 한경면 저지리 예술인마을 공방\n🏺 소성 후 택배 수령 / 저지리 갤러리 세트\n\n#제주옹기 #저지리 #제주여행 #흑토 #전통공예',instagram:'제주 옹기 흑토 철분이 검정 색 만들어요 🏺\n\n육지 옹기랑 다른 이유 알게 됐어요 ✨\n제주 허벅 독특함의 비밀\n\n📍 제주 저지리 예술인마을\n\n#제주옹기 #저지리 #제주여행 #흑토 #GemKorea',tiktok:'제주 옹기 꿀팁 🏺 제주 흑토에 철분이 많아서 구우면 검정이 돼요! 육지 옹기랑 색이 다른 이유 // 제주 허벅 독특함의 비밀 #제주옹기 #저지리 #제주여행'},
    hashtags:{korean:['#한국여행','#제주여행','#저지리','#전통공예','#GemKorea'],place_specific:['#제주옹기','#흑토철분','#제주허벅','#저지리예술인마을']}
  },
  {
    experience_id:'EX-JJ-HST-001', experience_name:'제주 4·3 역사 탐방 투어', category_sub:'역사 체험', region:'제주특별자치도',
    script_30s:'오늘은 제주 4·3 평화공원에 왔어요. 1948년 제주 민주화의 비극 현장이에요. 근데 아무도 안 알려주는 게 있어요 — 공원 안 비석에 희생자 이름이 새겨져 있어요. 그 이름을 손으로 만지는 순간이 가장 조용하고 무거운 순간이에요. 너무 역사가 이름이 된다는 게 좋았습니다.',
    script_60s:'오늘은 제주 4·3 평화공원에 왔어요. 1948년 제주에서 일어난 4·3 사건은 남한 단독 정부 수립에 반대한 민중 봉기가 국가 폭력으로 진압되면서 2만 5천~3만 명이 희생된 비극이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 4·3 평화공원 안에 희생자 각명비가 있어요. 돌에 희생자 이름이 하나하나 새겨져 있는데, 그 이름들을 손으로 만져보면 그게 단순한 숫자가 아니라 실제 살았던 사람들이라는 게 실감나요. 어린 나이에 희생된 이름들 앞에서 오래 머물게 돼요. 무언가를 알고 간다기보다 느끼고 가는 공간이에요. 제주 여행에서 이 공간을 빠뜨리면 제주의 절반을 놓치는 거예요. 너무 역사가 이름이 되는 순간이라서 좋았습니다.',
    secret_tip:'희생자 각명비 손으로 만지기 — 이름 하나하나가 살았던 사람. 숫자 아닌 사람으로 역사 실감. 무료 해설 투어 사전 신청. 북촌 너분숭이 학살 현장도 필수 방문',
    filming_guide:'각명비 이름 손으로 만지는 조용한 클로즈업. 평화공원 전체 조용한 분위기 광각. 4·3 기념관 전시 내부.',
    broll_ideas:['각명비 이름 손으로 만지는 클로즈업','평화공원 전체 조용한 광각','4·3 기념관 전시 내부','북촌 너분숭이 표지석','하얀 국화 헌화 장면'],
    hooks:['희생자 이름을 손으로 만지는 그 순간','숫자가 이름이 되는 순간이에요','제주 4·3 이 공간 빠뜨리면 절반 놓쳐요','역사가 이름이 되는 순간 느꼈어요','제주 4·3 역사 탐방 꿀팁'],
    thumbnails:['각명비 이름 만지는 클로즈업','평화공원 전체 광각','기념관 전시 내부','너분숭이 표지석','국화 헌화'],
    captions:{youtube:'제주 4·3 평화공원 — 이름을 손으로 만지는 그 순간 🕊️\n\n숫자가 아닌 사람의 이름으로 역사 실감!\n제주 여행에서 빠뜨리면 절반 놓쳐요\n\n📍 제주 북구 국립4·3평화공원\n🕊️ 무료 해설 투어 사전 신청\n\n#제주4·3 #평화공원 #제주여행 #역사탐방 #희생자',instagram:'제주 4·3 각명비 이름을 손으로 만졌어요 🕊️\n\n숫자가 아닌 살았던 사람의 이름 ✨\n제주 여행 이 공간 빠뜨리면 절반 놓쳐요\n\n📍 제주 국립4·3평화공원\n\n#제주4·3 #평화공원 #제주여행 #역사 #GemKorea',tiktok:'제주 4·3 꿀팁 🕊️ 희생자 각명비 이름을 손으로 만져보세요. 숫자가 아닌 사람으로 역사 실감되는 순간 // 제주 여행에서 이 공간 빠뜨리면 절반 놓쳐요 #제주4·3 #평화공원 #제주여행'},
    hashtags:{korean:['#한국여행','#제주여행','#역사여행','#제주4·3','#GemKorea'],place_specific:['#제주4·3평화공원','#희생자각명비','#북촌너분숭이','#역사탐방']}
  },
  {
    experience_id:'EX-GN-VIL-003', experience_name:'거제 포로수용소 역사 투어', category_sub:'역사 체험', region:'경상남도',
    script_30s:'오늘은 거제 포로수용소 역사관에 왔어요. 6·25 전쟁 포로 역사예요. 근데 아무도 안 알려주는 게 있어요 — 포로들이 수용소 안에서 직접 만든 물건들이 있어요. 국제법상 보장된 권리로 공예품을 만들 수 있었대요. 너무 전쟁 속 인간의 창의성이라서 좋았습니다.',
    script_60s:'오늘은 경남 거제 포로수용소 유적공원에 왔어요. 6·25 전쟁 당시 UN군이 운영하던 포로수용소로 최대 17만 명의 포로가 수용됐어요. 1952년 포로 반란 사건이 일어난 현장이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 포로수용소 전시관에 포로들이 수용소 안에서 직접 만든 공예품들이 있어요. 제네바 협약에 따라 전쟁 포로들도 일정한 권리가 보장됐는데, 그 중에 공예 활동의 자유가 있었어요. 포로들이 남은 재료들로 만든 작은 배·그림·조각품이 전시되어 있어요. 전쟁 포로라는 극한 상황에서도 인간의 창의성이 꽃피었다는 게 놀라워요. 그 작품들을 보면서 전쟁이 인간에게 무엇을 남기는지 생각하게 돼요. 너무 극한 속 인간 창의성이라서 좋았습니다.',
    secret_tip:'포로들이 수용소에서 만든 공예품 전시 — 제네바 협약 포로 권리. 극한 속 인간 창의성. 1952년 포로 반란 사건 재현 시설. 거제도 외도 보타니아 세트 코스',
    filming_guide:'포로 공예품 클로즈업 (배·조각). 포로 반란 사건 재현 시설. 수용소 막사 복원 전경.',
    broll_ideas:['포로 공예품 클로즈업','포로 반란 재현 시설','수용소 막사 복원 전경','포로 생활 재현 마네킹','거제 포로수용소 전체 전경'],
    hooks:['포로들이 수용소에서 공예품 만들었어요','전쟁 포로에게도 창작의 자유가 있었어요','극한 속 인간 창의성이 감동이에요','1952년 포로 반란 현장이에요','거제 포로수용소 꿀팁 있어요'],
    thumbnails:['포로 공예품 클로즈업','포로 반란 재현 시설','수용소 막사 복원','포로 생활 마네킹','수용소 전체 전경'],
    captions:{youtube:'거제 포로수용소 — 포로들이 수용소에서 공예품 만들었어요 ⚔️\n\n전쟁 속 극한의 창의성!\n제네바 협약 포로 권리\n\n📍 경남 거제시 포로수용소 유적공원\n⚔️ 1952년 포로 반란 현장\n\n#거제포로수용소 #거제 #경남여행 #6·25전쟁 #포로역사',instagram:'거제 포로수용소 포로들이 공예품 만들었어요 ⚔️\n\n극한 속 인간 창의성이 감동 ✨\n제네바 협약 포로 권리\n\n📍 경남 거제 포로수용소\n\n#거제포로수용소 #거제여행 #경남 #6·25 #GemKorea',tiktok:'거제 포로수용소 꿀팁 ⚔️ 포로들이 수용소에서 공예품 만들었어요! 극한 속 인간 창의성 감동 // 제네바 협약 포로 권리로 창작 가능했대요 #거제포로수용소 #거제여행 #경남'},
    hashtags:{korean:['#한국여행','#경남여행','#거제여행','#역사','#GemKorea'],place_specific:['#거제포로수용소','#포로공예품','#6·25역사','#포로수용소유적']}
  },
  {
    experience_id:'EX-JN-VIL-001', experience_name:'여수 돌산도 갓김치 담그기', category_sub:'발효/음식', region:'전라남도',
    script_30s:'오늘은 여수 돌산도에서 갓김치를 담갔어요. 세상에서 제일 매운 김치예요. 근데 아무도 안 알려주는 게 있어요 — 갓김치 매운 맛은 겨자씨 성분이에요. 배추 김치 고추 매운 맛이랑 달라요. 코를 찌르는 그 매운 향이 갓 고유의 성분이에요. 너무 매운 맛이 이렇게 달라질 수 있다는 게 좋았습니다.',
    script_60s:'오늘은 전남 여수 돌산도 갓마을에서 돌산갓김치 담그기 체험을 했어요. 돌산갓은 여수 돌산도 특산품으로 매운 향이 강한 특수 갓 품종이에요. 갓김치는 배추김치와는 전혀 다른 김치예요. 근데 아무도 안 알려주는 꿀팁 하나 — 갓김치 매운 맛의 비밀이 있어요. 배추김치는 고추의 캡사이신이 매운 맛을 내는데, 갓김치는 갓 자체에 있는 시니그린이라는 성분이 매운 맛을 내요. 이 성분이 물과 반응하면 겨자씨 향기처럼 코를 찌르는 매운 향이 나와요. 코가 얼얼한 그 향이 갓김치 고유의 맛이에요. 이 사실 알고 먹으면 갓김치 향이 왜 배추김치랑 다른지 이해가 돼요. 너무 매운 맛에 이렇게 다른 성분이 있다는 게 좋았습니다.',
    secret_tip:'갓김치 시니그린 성분 — 배추 캡사이신이 아닌 갓 고유 물질. 물과 반응해 겨자씨 향기 계열 매운 향. 이 사실 알면 갓김치 향 이해됨. 돌산갓 수확 계절 11~2월이 최고',
    filming_guide:'갓 잎 자르는 아삭한 소리 클로즈업. 갓김치 양념 버무리는 빨간 손. 완성 갓김치 들고 있는 장면.',
    broll_ideas:['갓 잎 자르는 아삭한 소리','갓김치 양념 버무리는 빨간 손','완성 갓김치 들기','돌산도 갓밭 전경','갓김치 한 입 먹는 표정'],
    hooks:['갓김치 매운 맛이 배추랑 달라요','시니그린이 겨자 계열 매운 향이에요','코를 찌르는 그 향의 비밀','돌산갓이 특별한 이유 알았어요','여수 갓김치 담그기 꿀팁'],
    thumbnails:['갓 잎 자르는 소리','갓김치 버무리는 손','완성 갓김치 들기','돌산도 갓밭 전경','갓김치 한 입 표정'],
    captions:{youtube:'여수 돌산 갓김치 — 매운 맛이 배추 고추랑 달라요 🌿\n\n시니그린 성분이 겨자 계열 매운 향!\n이 사실 알면 갓김치 향 이해돼요\n\n📍 전남 여수시 돌산읍 돌산갓 마을\n🌿 11~2월 돌산갓 수확 시즌이 최고\n\n#돌산갓김치 #여수 #전남여행 #갓김치 #발효음식',instagram:'여수 돌산 갓김치 매운 맛이 배추랑 달라요 🌿\n\n시니그린 겨자 계열 매운 향 ✨\n이 사실 알면 갓김치 향 달리 느껴요\n\n📍 전남 여수 돌산도\n\n#돌산갓김치 #여수여행 #전남 #갓김치 #GemKorea',tiktok:'돌산 갓김치 꿀팁 🌿 갓김치 매운 맛이 고추 캡사이신이 아니에요! 시니그린이 겨자 계열 매운 향 만들어요 // 코 찌르는 그 향의 비밀 #돌산갓김치 #여수여행 #전남'},
    hashtags:{korean:['#한국여행','#전남여행','#여수여행','#김치','#GemKorea'],place_specific:['#돌산갓김치','#시니그린','#갓김치비밀','#돌산도갓밭']}
  },
  {
    experience_id:'EX-GG-EQU-001', experience_name:'제주 승마 체험 (성읍민속마을)', category_sub:'승마/레포츠', region:'경기도',
    script_30s:'오늘은 제주 성읍 조랑말을 탔어요. 제주 재래종 천연기념물이에요. 근데 아무도 안 알려주는 게 있어요 — 제주 조랑말이 작아 보이는데 힘이 엄청 세요. 몸무게 350kg인데 1,000kg을 끌어요. 그 비율이 다른 말보다 더 세요. 너무 작은 것이 강할 수 있다는 게 좋았습니다.',
    script_60s:'오늘은 제주 성읍민속마을 인근 승마 목장에서 제주 조랑말 승마 체험을 했어요. 제주 조랑말은 키 1.2m, 몸무게 350kg 정도의 작은 말인데 천연기념물로 지정된 제주 재래종이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 제주 조랑말이 작아 보이지만 체중 대비 힘이 일반 말보다 훨씬 세요. 일반 말은 체중의 2배 정도를 끌 수 있는데 조랑말은 체중의 3배 이상도 끌 수 있어요. 그 이유가 제주도의 험한 지형에 적응하면서 강한 근력이 발달했기 때문이에요. 말을 타면서 그 작은 몸에서 느껴지는 힘이 의외로 강하다는 게 느껴져요. 한라산을 배경으로 오름 사이 초지를 말을 타고 달리는 경험이 제주에서만 할 수 있는 특별한 체험이에요. 너무 작은 것이 강할 수 있다는 걸 말에게 배워서 좋았습니다.',
    secret_tip:'제주 조랑말 체중 대비 힘이 일반 말보다 강함 — 험한 지형 적응으로 강한 근력 발달. 승마 시 힘 차이 실감. 한라산+오름 배경 초지 코스. 성읍민속마을 세트 탐방',
    filming_guide:'조랑말과 한라산 오름 배경 구도. 조랑말 근육 클로즈업. 초지 달리는 승마 장면.',
    broll_ideas:['조랑말+한라산 오름 배경','조랑말 근육 클로즈업','초지 달리는 승마 장면','조랑말 먹이 주기','성읍민속마을 세트'],
    hooks:['제주 조랑말이 작지만 힘이 세요','체중 대비 힘이 일반 말보다 강해요','험한 지형 적응으로 강한 근력','한라산 배경 오름 사이 말 타기','제주 승마 체험 꿀팁'],
    thumbnails:['조랑말+한라산 오름 배경','조랑말 근육 클로즈업','초지 달리는 승마','먹이 주기','성읍민속마을'],
    captions:{youtube:'제주 조랑말 승마 — 작지만 힘이 세요 🐎\n\n체중 대비 힘이 일반 말보다 강한 이유!\n제주 험한 지형 적응 근력\n\n📍 제주 서귀포시 성읍민속마을 승마 목장\n🐎 한라산+오름 배경 초지 코스\n\n#제주조랑말 #제주여행 #성읍민속마을 #승마 #천연기념물',instagram:'제주 조랑말 작지만 힘이 세요 🐎\n\n체중 대비 힘이 일반 말보다 강한 이유 ✨\n한라산 오름 배경 제주 승마\n\n📍 제주 성읍민속마을 승마\n\n#제주조랑말 #제주여행 #승마 #GemKorea',tiktok:'제주 조랑말 꿀팁 🐎 작아 보이는데 체중 대비 힘이 일반 말보다 강해요! 제주 험한 지형 적응 근력 // 한라산+오름 배경 초지 말 타기 #제주조랑말 #제주여행 #승마'},
    hashtags:{korean:['#한국여행','#제주여행','#승마','#제주조랑말','#GemKorea'],place_specific:['#제주조랑말승마','#성읍민속마을','#조랑말힘','#한라산배경승마']}
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
