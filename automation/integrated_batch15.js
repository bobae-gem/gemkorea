const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const now = new Date().toISOString().slice(0,19);

const newExps = [
  {experience_id:'EX-JN-NAT-014',name:'순천 낙안읍성 돌담 산책',category_main:'문화/체험',category_sub:'역사 체험',region_main:'JN',region_sub:'전라남도 순천시',address:'전라남도 순천시 낙안면 상촌리 낙안읍성',lat:34.9825,lng:127.3875,price:'성인 4,000원',duration:'1~2시간',reservation_required:false,target_user:['커플','개인','가족'],nearby_places:[],related_heritage_ids:[],short_description:'조선 시대 원형 보존 낙안읍성 안 실제 주민이 거주하는 살아있는 민속 마을을 탐방하는 체험이다. 돌담길·초가집·동헌·객사가 500년 시간 그대로 보존된 곳으로 사계절 아름다운 경관이 펼쳐진다.',source_urls:['https://www.nagan.or.kr/'],data_confidence:'high',tags:['낙안읍성','순천','전남','돌담','초가집','살아있는민속마을','조선시대'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00',phone:'061-749-8831'},
  {experience_id:'EX-CB-NAT-005',name:'충주 활옥 동굴 체험',category_main:'문화/체험',category_sub:'자연체험',region_main:'CB',region_sub:'충청북도 충주시',address:'충청북도 충주시 목벌동 7 활옥동굴',lat:36.9744,lng:127.8950,price:'성인 13,000원',duration:'1~2시간',reservation_required:false,target_user:['가족','커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'일제강점기 금·은·동을 채굴하던 활옥 광산이 테마파크형 동굴로 변신했다. 자전거를 타고 동굴 안을 탐험하는 자전거 동굴 체험과 보트 체험이 특색 있으며 연중 13도를 유지한다.',source_urls:['https://www.hwalokcave.com/'],data_confidence:'high',tags:['활옥동굴','충주','충북','자전거동굴','광산','보트','여름피서'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00',phone:'043-842-7700'},
  {experience_id:'EX-GN-NAT-012',name:'거제 맹종죽 숲 힐링 체험',category_main:'문화/체험',category_sub:'자연체험',region_main:'GN',region_sub:'경상남도 거제시',address:'경상남도 거제시 하청면 유계리 맹종죽테마파크',lat:34.9403,lng:128.5931,price:'성인 3,000원',duration:'1~2시간',reservation_required:false,target_user:['가족','커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'국내 최대 맹종죽(왕대나무) 군락지 거제 맹종죽 테마파크에서 대나무 숲 힐링 체험을 즐기는 프로그램이다. 높이 20m 왕대나무들이 만들어내는 녹색 터널과 대나무 바람 소리가 특별한 힐링 공간이다.',source_urls:['https://www.geoje.go.kr/'],data_confidence:'high',tags:['맹종죽','거제','경남','왕대나무','힐링','대나무숲','피톤치드'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00',phone:'055-639-6615'},
  {experience_id:'EX-GW-NAT-016',name:'강화도 석모도 민머루 해변',category_main:'문화/체험',category_sub:'자연체험',region_main:'GW',region_sub:'인천광역시 강화군',address:'인천광역시 강화군 삼산면 매음리 민머루해변',lat:37.5683,lng:126.3958,price:'무료',duration:'2~3시간',reservation_required:false,target_user:['가족','커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'석모도 서쪽 해안 민머루 해변에서 서해 낙조를 감상하는 체험이다. 넓은 갯벌과 함께 펼쳐지는 붉은 서해 석양이 강화 최고의 일몰 포인트로 알려져 있으며 모래찜질로도 유명하다.',source_urls:['https://www.ganghwa.go.kr/'],data_confidence:'high',tags:['민머루해변','석모도','강화','인천','서해낙조','갯벌','모래찜질'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (무료)',phone:'032-932-5464'},
  {experience_id:'EX-JN-NAT-015',name:'구례 산수유 마을 봄 투어',category_main:'문화/체험',category_sub:'축제',region_main:'JN',region_sub:'전라남도 구례군',address:'전라남도 구례군 산동면 현천리 산수유마을',lat:35.2158,lng:127.5453,price:'무료',duration:'1~2시간',reservation_required:false,target_user:['커플','개인','가족'],nearby_places:[],related_heritage_ids:[],short_description:'매년 3월 초순 전남 구례 산동면 산수유 마을에서 노란 산수유꽃이 만개하는 봄 풍경을 감상하는 체험이다. 한국에서 가장 이른 봄꽃 중 하나인 산수유가 마을 전체를 노랗게 물들이는 장관이 펼쳐진다.',source_urls:['https://www.gurye.go.kr/'],data_confidence:'high',tags:['구례산수유','구례','전남','산수유꽃','봄꽃','이른봄','노란꽃'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'3월 초순 산수유 시즌',phone:'061-780-2555'},
  {experience_id:'EX-GG-NAT-016',name:'연천 전곡리 구석기 테마파크',category_main:'문화/체험',category_sub:'역사 체험',region_main:'GG',region_sub:'경기도 연천군',address:'경기도 연천군 전곡읍 평화로 443번길 34',lat:38.1028,lng:127.1231,price:'성인 3,000원',duration:'1~2시간',reservation_required:false,target_user:['가족','어린이'],nearby_places:[],related_heritage_ids:[],short_description:'한국에서 최초로 아슐리안형 구석기 유물이 발견된 전곡리 선사유적지에 조성된 테마파크를 탐방하는 체험이다. 어린이가 직접 구석기 시대 체험을 할 수 있는 실물 크기 유적지 모형과 체험관이 있다.',source_urls:['https://www.yeoncheon.go.kr/'],data_confidence:'high',tags:['전곡리구석기','연천','경기','선사시대','아슐리안','어린이체험','구석기'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:30~17:30 (월요일 휴관)',phone:'031-839-2561'},
  {experience_id:'EX-GN-NAT-013',name:'함양 상림공원 연꽃 투어',category_main:'문화/체험',category_sub:'자연체험',region_main:'GN',region_sub:'경상남도 함양군',address:'경상남도 함양군 함양읍 상림리 상림공원',lat:35.5253,lng:127.7197,price:'무료',duration:'1~2시간',reservation_required:false,target_user:['개인','커플','가족'],nearby_places:[],related_heritage_ids:[],short_description:'신라 최치원이 홍수를 막기 위해 조성한 1,100년 역사 인공 숲 함양 상림공원에서 여름 연꽃을 감상하는 체험이다. 국내 최고령 인공 숲에서 7~8월 피는 연꽃이 천 년 역사와 어우러지는 특별한 풍경이다.',source_urls:['https://www.hamyang.go.kr/'],data_confidence:'high',tags:['함양상림공원','함양','경남','최치원','인공숲','연꽃','1100년'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (무료)',phone:'055-960-5510'},
  {experience_id:'EX-JJ-NAT-005',name:'제주 에코랜드 증기기관차 투어',category_main:'문화/체험',category_sub:'자연체험',region_main:'JJ',region_sub:'제주특별자치도 제주시',address:'제주특별자치도 제주시 조천읍 번영로 1278-169',lat:33.4992,lng:126.6739,price:'성인 17,000원',duration:'2~3시간',reservation_required:false,target_user:['가족','어린이','커플'],nearby_places:[],related_heritage_ids:[],short_description:'제주 비자림 곶자왈 생태 숲을 1800년대 영국 증기기관차 스타일 열차를 타고 탐방하는 체험이다. 4개 테마 호수와 에코 숲을 순환하며 제주 자연을 체험하는 힐링 코스다.',source_urls:['https://www.ecolandjeju.co.kr/'],data_confidence:'high',tags:['제주에코랜드','제주','증기기관차','곶자왈','비자림','생태숲','어린이'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'08:30~18:00',phone:'064-802-8000'},
  {experience_id:'EX-GG-NAT-017',name:'인천 을왕리 썰물 갯벌 투어',category_main:'문화/체험',category_sub:'자연체험',region_main:'GG',region_sub:'인천광역시 중구',address:'인천광역시 중구 을왕동 을왕리해수욕장',lat:37.4758,lng:126.5868,price:'무료',duration:'2~3시간',reservation_required:false,target_user:['가족','어린이'],nearby_places:[],related_heritage_ids:[],short_description:'을왕리해수욕장 썰물 때 드러나는 갯벌에서 조개·게·낙지를 잡는 체험이다. 인천공항 15분 거리로 접근성이 좋고 어린이 갯벌 체험학습 코스로 인기가 높다.',source_urls:['https://www.icjgss.or.kr/'],data_confidence:'high',tags:['을왕리갯벌','인천','을왕리','갯벌체험','조개잡기','인천공항근처','어린이'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'seasonal',operating_hours:'썰물 시간 (조석표 확인)',phone:'032-752-4141'},
  {experience_id:'EX-JN-NAT-016',name:'고창 고인돌 공원+람사르 갯벌',category_main:'문화/체험',category_sub:'역사 체험',region_main:'JN',region_sub:'전라북도 고창군',address:'전라북도 고창군 죽림리 매산마을 고인돌공원',lat:35.4394,lng:126.6358,price:'고인돌공원 성인 3,000원',duration:'2~3시간',reservation_required:false,target_user:['가족','개인'],nearby_places:[],related_heritage_ids:[],short_description:'유네스코 세계유산 고창 고인돌 공원과 람사르 습지 고창 갯벌을 하루에 탐방하는 이색 코스다. 청동기 시대 무덤 고인돌 447기와 서해 생태 갯벌을 함께 경험하는 전북 대표 역사+자연 코스다.',source_urls:['https://www.gochang.go.kr/'],data_confidence:'high',tags:['고창고인돌','고창','전북','유네스코','람사르갯벌','청동기','세계유산'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00',phone:'063-560-2979'},
  {experience_id:'EX-GW-NAT-017',name:'영월 고씨동굴+선암마을 코스',category_main:'문화/체험',category_sub:'자연체험',region_main:'GW',region_sub:'강원특별자치도 영월군',address:'강원특별자치도 영월군 김삿갓면 고씨굴길 1',lat:37.1858,lng:128.4697,price:'동굴 성인 5,000원',duration:'3~5시간',reservation_required:false,target_user:['가족','개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'임진왜란 피란처 고씨동굴 탐방 후 김삿갓 유적지와 선암마을을 돌아보는 영월 하루 코스다. 영월은 단종 유배지이자 한국 지질 유산이 집중된 곳으로 역사와 자연을 함께 즐길 수 있다.',source_urls:['https://www.yw.go.kr/'],data_confidence:'high',tags:['고씨동굴','영월','강원','김삿갓','단종','하루코스','지질공원'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~17:00',phone:'033-372-8445'},
  {experience_id:'EX-GG-NAT-018',name:'수원 화성 행궁 판타지 미디어아트',category_main:'문화/체험',category_sub:'야경/야간투어',region_main:'GG',region_sub:'경기도 수원시',address:'경기도 수원시 팔달구 행궁로 11',lat:37.2791,lng:126.9930,price:'성인 10,000원',duration:'1~2시간',reservation_required:false,target_user:['커플','가족','외국인'],nearby_places:[],related_heritage_ids:[],short_description:'수원화성행궁에서 진행되는 야간 미디어아트 체험이다. 조선 시대 정조대왕의 일대기와 화성 건설 역사를 최첨단 미디어아트로 표현한 몰입형 야간 전시로 화성행궁 건물 전체가 스크린이 된다.',source_urls:['https://www.swcf.or.kr/'],data_confidence:'high',tags:['화성행궁미디어아트','수원화성','행궁','야간','미디어아트','정조대왕','경기'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'seasonal',operating_hours:'야간 운영 (행사 시즌)',phone:'031-290-3600'}
];

const newShorts = [
  {
    experience_id:'EX-GG-HST-001', experience_name:'수원 화성 성곽 야경 투어', category_sub:'역사 체험', region:'경기도',
    script_30s:'오늘은 수원화성 야간 성곽 투어를 했어요. 유네스코 성곽이에요. 근데 아무도 안 알려주는 게 있어요 — 성곽 야경 사진 찍기 최고 포인트가 따로 있어요. 서장대에서 야경이 제일 예쁘게 나와요. 너무 성곽이 조명을 받으면 달라진다는 게 좋았습니다.',
    script_60s:'오늘은 경기도 수원 화성 야간 성곽 투어를 했어요. 유네스코 세계문화유산 수원화성 5.7km 성곽을 야간에 걷는 투어예요. 조명이 켜지면 낮과 완전히 다른 화성을 만나요. 근데 아무도 안 알려주는 꿀팁 하나 — 수원화성 야경 사진의 최고 포인트가 따로 있어요. 서장대에서 동쪽 성벽 방향을 바라보면 봉돈·동북공심돈·창룡문이 일직선으로 조명을 받아 빛나는 구도가 나와요. 그 구도가 수원화성 야경 대표 사진이에요. 대부분 관광객이 화홍문·방화수류정만 보고 가는데, 서장대까지 올라가서 보는 야경이 훨씬 압도적이에요. 4~10월 금·토요일에 야간 성곽 개방 투어가 있고 해설사와 함께해요. 너무 유네스코 성곽이 밤에 이렇게 달라져서 좋았습니다.',
    secret_tip:'서장대에서 동쪽 성벽 방향 — 봉돈·동북공심돈·창룡문 일직선 야경 구도. 수원화성 대표 야경 사진 포인트. 4~10월 금·토 야간 성곽 개방 해설 투어. 화성행궁 야간 세트',
    filming_guide:'서장대에서 동쪽 성벽 야경 일직선 구도. 봉돈 조명 클로즈업. 성벽 위 걷는 실루엣 야경 배경.',
    broll_ideas:['서장대 동쪽 성벽 일직선 야경','봉돈 조명 클로즈업','성벽 위 걷는 실루엣','화홍문 야경','방화수류정 조명'],
    hooks:['수원화성 야경 서장대가 포인트예요','봉돈·동북공심돈·창룡문 일직선 구도','대부분 이 포인트 모르고 가요','유네스코 성곽 야경 최고 각도','4~10월 금토 야간 해설 투어 있어요'],
    thumbnails:['서장대 동쪽 성벽 야경','봉돈 조명 클로즈업','성벽 위 실루엣','화홍문 야경','방화수류정 조명'],
    captions:{youtube:'수원화성 야경 — 서장대가 최고 포인트예요 🏯\n\n봉돈·동북공심돈·창룡문 일직선 구도!\n대부분 모르고 화홍문만 봐요\n\n📍 경기도 수원 화성 서장대\n🏯 4~10월 금·토 야간 성곽 개방 투어\n\n#수원화성야경 #수원 #경기여행 #유네스코 #성곽야경',instagram:'수원화성 야경 서장대가 포인트예요 🏯\n\n봉돈·동북공심돈·창룡문 일직선 구도 ✨\n대부분 화홍문에서 끝나요\n\n📍 경기 수원 서장대\n\n#수원화성야경 #수원여행 #경기 #유네스코 #GemKorea',tiktok:'수원화성 야경 꿀팁 🏯 서장대에서 동쪽 성벽 보면 일직선 야경 구도 나와요! 대부분 화홍문만 보고 가는데 서장대까지 올라가야 해요 #수원화성야경 #수원여행 #경기'},
    hashtags:{korean:['#한국여행','#경기여행','#수원여행','#야경','#GemKorea'],place_specific:['#수원화성야경','#서장대야경','#봉돈일직선','#유네스코성곽']}
  },
  {
    experience_id:'EX-CB-HST-001', experience_name:'공주 무령왕릉 VR 체험', category_sub:'역사 체험', region:'충청남도',
    script_30s:'오늘은 공주 무령왕릉 VR 체험을 했어요. 백제 왕릉에 VR로 들어가는 거예요. 근데 아무도 안 알려주는 게 있어요 — 실제 무령왕릉 내부는 봉쇄됐어요. VR이 유일한 방법이에요. 4,600점 유물이 완전 보존 발굴된 유일한 왕릉 안을 VR로 볼 수 있어요. 너무 닫힌 공간을 열어주는 기술이라서 좋았습니다.',
    script_60s:'오늘은 충남 공주 국립공주박물관에서 무령왕릉 VR 체험을 했어요. 백제 25대 왕 무령왕이 잠든 왕릉인데 1971년 발굴 당시 4,600점 유물이 완전한 상태로 발견된 전무후무한 왕릉이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 실제 무령왕릉 내부는 현재 봉쇄되어 일반인이 들어갈 수 없어요. 유물이 훼손될 수 있어서요. VR 체험이 무령왕릉 내부를 볼 수 있는 유일한 방법이에요. VR로 왕릉 내부에 들어가면 4,600점 유물이 발굴 당시 모습 그대로 재현되어 있어요. 왕과 왕비의 지석·금제관식·청동거울이 배치된 공간을 직접 걸어다니는 느낌이에요. 현실에서 영원히 닫힌 공간에 VR로 들어가는 그 경험이에요. 너무 기술이 역사를 열어주는 순간이라서 좋았습니다.',
    secret_tip:'무령왕릉 내부 봉쇄됨 — VR이 유일한 내부 관람 방법. 4,600점 발굴 당시 배치 그대로 재현. 입장료 500원의 VR 체험 = 닫힌 왕릉 유일 접근. 공주 석장리 유적 세트 코스',
    filming_guide:'VR 체험 중 표정 (왕릉 내부 반응). 실제 무령왕릉 외관 봉분 클로즈업. 국립공주박물관 금제관식 실물.',
    broll_ideas:['VR 체험 중 반응 표정','무령왕릉 봉분 외관','금제관식 실물 클로즈업','발굴 당시 사진 전시물','공주 박물관 외경'],
    hooks:['무령왕릉 실제 내부 봉쇄됐어요','VR이 유일한 내부 관람 방법이에요','4,600점 유물 완전 발굴 왕릉','500원 VR로 닫힌 왕릉 들어가요','기술이 역사를 열어주는 순간'],
    thumbnails:['VR 체험 반응 표정','무령왕릉 봉분 외관','금제관식 클로즈업','발굴 사진 전시물','공주 박물관 외경'],
    captions:{youtube:'공주 무령왕릉 VR — 실제 내부는 봉쇄됐어요 🏛️\n\nVR이 유일한 내부 관람 방법!\n4,600점 완전 발굴 백제 왕릉\n\n📍 충남 공주시 국립공주박물관\n🏛️ VR 체험 500원 / 금제관식 실물 전시\n\n#무령왕릉VR #공주 #충남여행 #백제 #역사VR',instagram:'공주 무령왕릉 내부 봉쇄된 곳을 VR로 들어갔어요 🏛️\n\n4,600점 완전 발굴 유물 그대로 재현 ✨\nVR이 유일한 내부 관람 방법\n\n📍 충남 공주 국립공주박물관\n\n#무령왕릉VR #공주여행 #충남 #백제 #GemKorea',tiktok:'공주 무령왕릉 꿀팁 🏛️ 실제 내부는 봉쇄됐어요! VR 500원이 유일한 내부 관람 방법 // 4,600점 완전 발굴 백제 왕릉 내부를 걸어다니는 느낌 #무령왕릉VR #공주여행 #충남'},
    hashtags:{korean:['#한국여행','#충남여행','#공주여행','#역사','#GemKorea'],place_specific:['#무령왕릉VR','#공주무령왕릉','#백제왕릉','#닫힌공간VR']}
  },
  {
    experience_id:'EX-GW-HST-001', experience_name:'철원 DMZ 비무장지대 탐방', category_sub:'역사 체험', region:'강원도',
    script_30s:'오늘은 철원 DMZ 탐방을 했어요. 분단의 현장이에요. 근데 아무도 안 알려주는 게 있어요 — 철원 평야에 겨울에 수천 마리 두루미가 내려와요. 전쟁이 역설적으로 자연을 지킨 거예요. 너무 평화가 이런 아이러니였다는 게 좋았습니다.',
    script_60s:'오늘은 강원도 철원 DMZ 비무장지대 탐방을 했어요. 한국 전쟁 격전지이자 세계 유일의 분단 현장이에요. 노동당사·백마고지 전적지·제2땅굴을 방문하는 코스예요. 근데 아무도 안 알려주는 꿀팁 하나 — 철원 DMZ는 생태계 보고예요. 60년 이상 인간의 발이 닿지 않은 DMZ와 철원 평야에 겨울마다 수천 마리 두루미와 재두루미가 월동해요. 전쟁이 만든 분단이 역설적으로 자연을 지킨 거예요. 12월~2월에 철원을 방문하면 탐조 투어와 DMZ 역사 탐방을 같이 할 수 있어요. 두루미가 군무를 펼치는 설원 위에서 분단의 역사를 생각하는 그 모순된 감정이 철원에서만 경험할 수 있는 거예요. 너무 분단이 만든 아이러니한 자연 낙원이라서 좋았습니다.',
    secret_tip:'12~2월 두루미 탐조+DMZ 역사 동시 체험 — 전쟁 분단이 만든 자연 보고. 수천 마리 두루미 군무 설원 위 역사적 감상. 탐조+역사 세트 코스. 여권 지참 필수',
    filming_guide:'두루미 군무 철원 설원 광각. 노동당사 외관 역사감 있는 구도. 탐방 중 철조망과 자연의 대비.',
    broll_ideas:['두루미 군무 철원 설원 광각','노동당사 외관 역사 구도','철조망과 자연의 대비','제2땅굴 내부','두루미 망원경 탐조'],
    hooks:['철원 DMZ에 두루미 수천 마리가 와요','전쟁 분단이 자연을 지킨 역설','역사+탐조 동시에 할 수 있어요','두루미 설원 위 분단 현장','철원 DMZ 꿀팁 있어요'],
    thumbnails:['두루미 군무 설원 광각','노동당사 역사 구도','철조망과 자연 대비','제2땅굴 내부','두루미 탐조'],
    captions:{youtube:'철원 DMZ — 두루미 수천 마리가 와요 🦢\n\n전쟁 분단이 역설적으로 자연을 지킨 현장!\n역사+탐조 세트 체험\n\n📍 강원도 철원군 DMZ 탐방\n🦢 12~2월 두루미 월동 시즌\n⚠️ 여권 지참 필수\n\n#철원DMZ #두루미 #강원도여행 #분단역설 #자연보고',instagram:'철원 DMZ에 두루미가 수천 마리 와요 🦢\n\n전쟁 분단이 역설적으로 자연을 지킨 아이러니 ✨\n역사+탐조 동시 체험\n\n📍 강원 철원 DMZ\n\n#철원DMZ #두루미 #강원도여행 #분단 #GemKorea',tiktok:'철원 DMZ 꿀팁 🦢 12~2월 두루미 수천 마리가 설원에 내려와요! 전쟁 분단이 자연을 지킨 역설 // 역사+탐조 세트 강원도 체험 #철원DMZ #두루미 #강원도여행'},
    hashtags:{korean:['#한국여행','#강원도여행','#철원여행','#두루미','#GemKorea'],place_specific:['#철원DMZ','#두루미탐조','#분단자연역설','#DMZ역사탐방']}
  },
  {
    experience_id:'EX-SE-CRF-002', experience_name:'성수동 가죽 공방 체험', category_sub:'도예/공방 체험', region:'서울특별시',
    script_30s:'오늘은 성수동 가죽 공방에 왔어요. 한국 가죽 공예 발상지예요. 근데 아무도 안 알려주는 게 있어요 — 바느질할 때 두 바늘을 동시에 쓰는 새들 스티치가 있어요. 한쪽만 써서 꿰매면 끊어지는데 양쪽을 교차하면 절대 안 풀려요. 너무 가죽 바느질에 이런 기술이 있다는 게 좋았습니다.',
    script_60s:'오늘은 서울 성수동 가죽 공방에서 지갑 만들기 체험을 했어요. 성수동은 1960년대부터 이어온 한국 가죽 공예의 발상지예요. 직접 가죽을 재단하고 구멍을 뚫고 바느질해서 지갑·카드지갑을 만드는 체험이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 가죽 바느질에서 새들 스티치라는 기법이 있어요. 바늘 두 개를 동시에 사용해서 양쪽에서 교차로 꿰매는 방법이에요. 일반 바느질처럼 한쪽 실이 끊어지면 바로 풀리는 게 아니라, 두 실이 교차되어 있어서 한쪽이 끊어져도 절대 풀리지 않아요. 가죽 제품이 오래 가는 비밀이 이 바느질 방법이에요. 이 기법을 배우는 시간이 가죽 체험의 핵심이에요. 너무 바느질 하나에 이런 비밀이 있다는 게 좋았습니다.',
    secret_tip:'새들 스티치 — 바늘 2개 교차 바느질. 한쪽 끊어져도 안 풀리는 구조. 가죽 제품 내구성 비밀. 레이저 각인 이름 새기기 연계. 성수동 카페 투어와 세트 코스',
    filming_guide:'새들 스티치 두 바늘 교차 동작 클로즈업. 완성 지갑 레이저 각인 장면. 성수동 가죽 공방 골목 외경.',
    broll_ideas:['새들 스티치 두 바늘 교차 클로즈업','레이저 각인 장면','완성 가죽 지갑 클로즈업','성수동 가죽 공방 골목','가죽 재단하는 칼 작업'],
    hooks:['가죽 바느질에 특별한 기법이 있어요','바늘 두 개 교차하면 절대 안 풀려요','새들 스티치가 가죽 내구성 비밀이에요','성수동 가죽 공방 체험 꿀팁','가죽 바느질이 왜 특별한지 알았어요'],
    thumbnails:['새들 스티치 두 바늘 교차','레이저 각인 장면','완성 가죽 지갑','성수동 공방 골목','가죽 재단'],
    captions:{youtube:'성수동 가죽 체험 — 새들 스티치가 핵심이에요 👜\n\n바늘 두 개 교차로 절대 안 풀리는 구조!\n가죽 내구성 비밀\n\n📍 서울 성동구 성수동 가죽 공방\n👜 레이저 각인 이름 새기기 연계\n\n#성수동가죽공방 #성수동 #서울여행 #가죽체험 #새들스티치',instagram:'성수동 가죽 체험 새들 스티치 배웠어요 👜\n\n바늘 두 개 교차로 절대 안 풀리는 구조 ✨\n가죽 내구성 비밀이 여기 있었어요\n\n📍 서울 성수동 가죽 공방\n\n#성수동가죽 #성수동 #서울여행 #가죽체험 #GemKorea',tiktok:'성수동 가죽 꿀팁 👜 새들 스티치 - 바늘 두 개 교차로 꿰매면 절대 안 풀려요! 가죽 내구성 비밀이에요 // 레이저 각인까지 세상 하나뿐인 지갑 #성수동가죽 #성수동 #서울여행'},
    hashtags:{korean:['#한국여행','#서울여행','#성수동','#공방체험','#GemKorea'],place_specific:['#성수동가죽공방','#새들스티치','#가죽지갑만들기','#성수동공방']}
  },
  {
    experience_id:'EX-GG-CRF-003', experience_name:'파주 캔들·비누 공방 체험', category_sub:'도예/공방 체험', region:'경기도',
    script_30s:'오늘은 파주 헤이리 공방에서 캔들을 만들었어요. 근데 아무도 안 알려주는 게 있어요 — 향 배합이 캔들의 80%예요. 단일 향보다 2~3가지 섞으면 입체적인 향이 나요. 그 배합 비율이 나만의 향수 같은 거예요. 너무 향이 이렇게 레이어가 있다는 게 좋았습니다.',
    script_60s:'오늘은 경기도 파주 헤이리 예술마을 공방에서 소이 캔들 만들기 체험을 했어요. 직접 향 오일을 선택하고 왁스에 섞어 나만의 캔들을 만드는 체험이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 캔들에서 가장 중요한 건 향 배합이에요. 단일 향 하나만 쓰면 단조롭고 2~3가지를 섞으면 입체적인 향이 나요. 보통 탑·미들·베이스 노트로 나눠서 배합해요. 시트러스 계열은 탑 노트로 처음에 강하게 나오다 사라지고, 플로럴이 미들 노트로 오래 남고, 머스크가 베이스 노트로 마지막까지 남아요. 이 레이어 개념을 알고 향을 선택하면 일반 캔들 가게에서 고르는 것과 완전히 달라요. 너무 향이 이렇게 레이어가 있다는 게 좋았습니다.',
    secret_tip:'탑·미들·베이스 노트 향 레이어 배합 — 시트러스(탑)+플로럴(미들)+머스크(베이스) 조합으로 입체적 향. 이 개념 알면 캔들 선택이 달라짐. 헤이리 갤러리+공방 세트 코스',
    filming_guide:'향 오일 배합 선택 과정 클로즈업. 완성 캔들 점화 순간 불꽃. 헤이리 예술마을 배경 공방 외경.',
    broll_ideas:['향 오일 배합 선택 과정','완성 캔들 점화 불꽃 클로즈업','탑미들베이스 노트 설명','헤이리 배경 공방 외경','여러 색 캔들 완성품들'],
    hooks:['캔들 향 배합이 80%예요','탑미들베이스 노트 알면 달라요','2~3가지 섞으면 입체적 향이 나요','파주 헤이리 캔들 공방 체험 꿀팁','나만의 향수 같은 캔들 만들기'],
    thumbnails:['향 오일 배합 선택','완성 캔들 점화 불꽃','탑미들베이스 노트','헤이리 배경 공방','여러 색 완성 캔들들'],
    captions:{youtube:'파주 캔들 공방 — 탑·미들·베이스 노트 배합이 핵심이에요 🕯️\n\n단일 향보다 2~3가지 섞으면 입체적!\n나만의 향수 같은 캔들\n\n📍 경기도 파주시 헤이리 예술마을 공방\n🕯️ 헤이리 갤러리+공방 세트 코스\n\n#파주캔들공방 #파주 #경기여행 #캔들체험 #헤이리',instagram:'파주 캔들 공방 향 배합 배웠어요 🕯️\n\n탑미들베이스 노트 레이어 알면 달라요 ✨\n2~3가지 섞으면 입체적인 향\n\n📍 경기 파주 헤이리 공방\n\n#파주캔들 #파주여행 #경기 #캔들체험 #GemKorea',tiktok:'파주 캔들 꿀팁 🕯️ 탑미들베이스 노트 레이어 개념 알면 향 배합이 달라요! 2~3가지 섞으면 입체적인 향 // 나만의 향수 같은 캔들 만들기 #파주캔들 #파주여행 #경기'},
    hashtags:{korean:['#한국여행','#경기여행','#파주여행','#공방체험','#GemKorea'],place_specific:['#파주캔들공방','#헤이리공방','#탑미들베이스노트','#향배합캔들']}
  },
  {
    experience_id:'EX-SE-ART-004', experience_name:'인사동 전통 풍물놀이 체험', category_sub:'문화예술', region:'서울특별시',
    script_30s:'오늘은 인사동에서 풍물놀이를 배웠어요. 꽹과리·장구·북·징 네 악기예요. 근데 아무도 안 알려주는 게 있어요 — 풍물놀이에서 꽹과리가 지휘자예요. 꽹과리 소리에 따라 빠르게·느리게·멈추고가 결정돼요. 너무 악기 하나가 지휘한다는 게 신기해서 좋았습니다.',
    script_60s:'오늘은 서울 인사동 전통 문화 체험관에서 풍물놀이 체험을 했어요. 꽹과리·장구·북·징 네 악기로 구성된 사물놀이·농악 체험이에요. 기본 장단부터 자진모리까지 팀으로 배워요. 근데 아무도 안 알려주는 꿀팁 하나 — 풍물놀이에서 꽹과리가 지휘자예요. 꽹과리 소리의 패턴에 따라 전체 연주가 빠르게·느리게·멈추고·시작하는 신호가 다 결정돼요. 꽹과리 연주자가 소리로 지시를 내리면 다른 악기들이 따르는 거예요. 악기는 소리를 내는데 꽹과리는 지시를 내리는 악기예요. 그 사실을 알고 꽹과리 소리를 들으면 완전히 다르게 들려요. 합주할 때 꽹과리 소리에 귀를 기울이면 언제 빠르게 쳐야 하는지 자연스럽게 알게 돼요. 너무 악기 하나가 음악을 이끄는 지휘자라는 게 좋았습니다.',
    secret_tip:'꽹과리 = 풍물놀이 지휘자 — 소리 패턴으로 빠름·느림·멈춤·시작 결정. 꽹과리 소리 집중하면 합주 타이밍 자연스럽게 이해. 외국인 대상 영어 해설 있음',
    filming_guide:'꽹과리 치는 손 박자 클로즈업. 네 악기 동시 합주 전체 광각. 꽹과리 신호에 맞춰 장단 바뀌는 장면.',
    broll_ideas:['꽹과리 박자 손 클로즈업','네 악기 동시 합주 전체','꽹과리 신호에 장단 바뀌기','외국인 참여자 표정','인사동 전통 문화관 외경'],
    hooks:['꽹과리가 풍물놀이 지휘자예요','꽹과리 소리가 빠름 느림 신호예요','이걸 알면 합주가 달라져요','외국인이 제일 신기해하는 악기','인사동 풍물놀이 체험 꿀팁'],
    thumbnails:['꽹과리 박자 손 클로즈업','네 악기 합주 전체','신호에 장단 바뀌기','외국인 참여 표정','문화관 외경'],
    captions:{youtube:'인사동 풍물놀이 — 꽹과리가 지휘자예요 🥁\n\n소리 패턴으로 빠름·느림·멈춤 결정!\n이 사실 알면 합주가 달라져요\n\n📍 서울 종로구 인사동 전통 풍물놀이 체험\n🥁 외국인 영어 해설 있음\n\n#인사동풍물놀이 #인사동 #서울여행 #꽹과리 #사물놀이',instagram:'인사동 풍물놀이 꽹과리가 지휘자예요 🥁\n\n소리 패턴으로 빠름 느림 결정하는 악기 ✨\n이걸 알면 합주 타이밍 자연스럽게 알아요\n\n📍 서울 종로 인사동 풍물놀이\n\n#인사동풍물놀이 #인사동 #서울여행 #GemKorea',tiktok:'인사동 풍물놀이 꿀팁 🥁 꽹과리가 풍물놀이 지휘자예요! 소리 패턴으로 빠름·느림·멈춤 다 결정해요 // 이걸 알면 합주 타이밍 자연스럽게 알게 됨 #인사동풍물놀이 #인사동 #서울여행'},
    hashtags:{korean:['#한국여행','#서울여행','#인사동','#풍물놀이','#GemKorea'],place_specific:['#인사동풍물놀이','#꽹과리지휘자','#사물놀이체험','#전통악기']}
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
