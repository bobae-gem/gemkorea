const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const now = new Date().toISOString().slice(0,19);

const newExps = [
  {experience_id:'EX-GW-NAT-056',name:'원주 섬강 래프팅+뮤지엄 산',category_main:'문화/체험',category_sub:'어드벤처/레포츠',region_main:'GW',region_sub:'강원특별자치도 원주시',address:'강원특별자치도 원주시 지정면 간현 섬강',lat:37.4050,lng:127.9322,price:'1인 30,000원~',duration:'2시간',reservation_required:true,target_user:['개인','커플','가족'],nearby_places:[],related_heritage_ids:[],short_description:'원주 섬강에서 래프팅을 즐기고 세계적 건축가 안도 타다오의 뮤지엄 산을 탐방하는 원주 완벽 하루 코스다. 급류 래프팅의 스릴과 예술·건축의 감동을 하루에 즐기는 독특한 조합이다.',source_urls:['https://www.wonju.go.kr/'],data_confidence:'high',tags:['원주래프팅','뮤지엄산','원주','강원','섬강','안도타다오','하루코스'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'seasonal',operating_hours:'5~10월',phone:'033-732-8800'},
  {experience_id:'EX-JN-NAT-062',name:'신안 박지도+반월도 퍼플 투어',category_main:'문화/체험',category_sub:'자연체험',region_main:'JN',region_sub:'전라남도 신안군',address:'전라남도 신안군 안좌면 반월도',lat:34.9117,lng:126.3489,price:'배 왕복 6,000원',duration:'2~3시간',reservation_required:false,target_user:['커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'신안 박지도와 반월도를 연결하는 보라색 퍼플 브릿지와 섬 전체 보라색 인테리어를 탐방하는 체험이다. 퍼플 브릿지 위에서 바라보는 다도해와 보라색 꽃밭이 국내 최고 인스타 명소 중 하나다.',source_urls:['https://www.sinan.go.kr/'],data_confidence:'high',tags:['퍼플브릿지','박지도','반월도','신안','전남','보라색','인스타명소'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중',phone:'061-240-8555'},
  {experience_id:'EX-GN-NAT-061',name:'거제 외도·해금강 섬 투어',category_main:'문화/체험',category_sub:'자연체험',region_main:'GN',region_sub:'경상남도 거제시',address:'경상남도 거제시 남부면 외도해상농원',lat:34.7869,lng:128.7361,price:'외도 성인 14,000원~',duration:'3~4시간',reservation_required:false,target_user:['가족','커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'거제 외도 보타니아 섬 정원과 해금강 기암절벽을 유람선으로 탐방하는 코스다. 부부가 30년 가꾼 지중해 스타일 섬 정원 외도와 한국의 금강이라는 해금강의 절경을 뱃길로 동시에 즐긴다.',source_urls:['https://www.oedobotania.com/'],data_confidence:'high',tags:['외도보타니아','해금강','거제','경남','섬정원','기암절벽','유람선'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~17:00',phone:'055-632-5258'},
  {experience_id:'EX-GG-NAT-058',name:'연천 임진강 두루미 탐조',category_main:'문화/체험',category_sub:'자연체험',region_main:'GG',region_sub:'경기도 연천군',address:'경기도 연천군 임진강 탐조 지점',lat:38.0500,lng:127.0500,price:'탐조 투어 1인 15,000원~',duration:'2~3시간',reservation_required:true,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'연천 임진강에서 겨울 두루미와 재두루미를 탐조하는 체험이다. 수천 마리 두루미가 월동하는 임진강 접경 지역에서 두루미 군무를 망원경으로 관찰하는 특별한 생태 탐조 체험이다.',source_urls:['https://www.yeoncheon.go.kr/'],data_confidence:'high',tags:['임진강두루미','연천','경기','두루미탐조','겨울철새','임진강','접경'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'seasonal',operating_hours:'12~2월 (예약 필수)',phone:'031-839-2562'},
  {experience_id:'EX-GN-NAT-062',name:'고성 통일전망대 북한 조망',category_main:'문화/체험',category_sub:'역사 체험',region_main:'GN',region_sub:'강원특별자치도 고성군',address:'강원특별자치도 고성군 현내면 통일전망대로 369',lat:38.3719,lng:128.4583,price:'성인 3,000원',duration:'1~2시간',reservation_required:false,target_user:['가족','개인'],nearby_places:[],related_heritage_ids:[],short_description:'한국 최북단에서 북한 해금강을 조망하는 고성 통일전망대 체험이다. 맑은 날 망원경으로 북한 금강산·해금강·고성항이 보이며 한국에서 가장 북쪽에서 분단 현장을 체험하는 역사 교육 투어다.',source_urls:['https://www.goseong.org/'],data_confidence:'high',tags:['통일전망대','고성','강원','북한조망','금강산','한국최북단','분단역사'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~16:00',phone:'033-681-0625'},
  {experience_id:'EX-JN-NAT-063',name:'완도 강진만 갯벌+다산초당',category_main:'문화/체험',category_sub:'역사 체험',region_main:'JN',region_sub:'전라남도 강진군',address:'전라남도 강진군 도암면 만덕리 다산초당',lat:34.6142,lng:126.7897,price:'다산초당 무료',duration:'2~3시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'정약용이 유배 생활을 하며 동의보감과 목민심서를 집필한 강진 다산초당을 탐방하는 역사 체험이다. 강진만 갯벌 생태 탐방과 함께하면 완벽한 강진 역사+자연 하루 코스가 된다.',source_urls:['https://www.gangjin.go.kr/'],data_confidence:'high',tags:['다산초당','강진','전남','정약용','유배지','목민심서','강진만'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (무료)',phone:'061-430-3312'},
  {experience_id:'EX-GG-NAT-059',name:'가평 아이스클라이밍 실내',category_main:'문화/체험',category_sub:'어드벤처/레포츠',region_main:'GG',region_sub:'경기도 가평군',address:'경기도 가평군 가평읍 일원',lat:37.8583,lng:127.5097,price:'1인 30,000원~',duration:'1~2시간',reservation_required:true,target_user:['개인','청년','커플'],nearby_places:[],related_heritage_ids:[],short_description:'가평 실내 아이스클라이밍 센터에서 겨울 빙벽 등반을 즐기는 어드벤처 체험이다. 실내 인공 빙벽을 도끼와 아이젠을 착용하고 오르는 체험으로 초보자도 교관의 지도 아래 안전하게 즐길 수 있다.',source_urls:['https://www.gapyeong.go.kr/'],data_confidence:'high',tags:['아이스클라이밍','가평','경기','빙벽등반','실내어드벤처','겨울레저','스릴'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'seasonal',operating_hours:'11~3월 겨울 시즌',phone:'031-585-7401'},
  {experience_id:'EX-GN-NAT-063',name:'경남 하동 섬진강 래프팅',category_main:'문화/체험',category_sub:'어드벤처/레포츠',region_main:'GN',region_sub:'경상남도 하동군',address:'경상남도 하동군 화개면 섬진강 일원',lat:35.0614,lng:127.6661,price:'1인 35,000원~',duration:'2시간',reservation_required:true,target_user:['개인','커플','가족'],nearby_places:[],related_heritage_ids:[],short_description:'섬진강에서 고무보트를 타고 급류를 즐기는 래프팅 체험이다. 벚꽃·매화·새파란 섬진강이 어우러지는 하동 섬진강 래프팅은 봄 시즌에 특히 아름다운 경남 대표 래프팅 코스다.',source_urls:['https://www.hadong.go.kr/'],data_confidence:'high',tags:['섬진강래프팅','하동','경남','래프팅','벚꽃','섬진강','급류'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'seasonal',operating_hours:'4~10월',phone:'055-880-2960'},
  {experience_id:'EX-JN-NAT-064',name:'강진 청자마을 가마터 탐방',category_main:'문화/체험',category_sub:'역사 체험',region_main:'JN',region_sub:'전라남도 강진군',address:'전라남도 강진군 대구면 청자촌길 33',lat:34.5747,lng:126.7342,price:'성인 3,000원',duration:'1~2시간',reservation_required:false,target_user:['가족','개인'],nearby_places:[],related_heritage_ids:[],short_description:'고려청자 최대 생산지 강진 대구면 청자마을에서 가마터와 도요지를 직접 탐방하는 역사 체험이다. 고려 시대 청자를 구워낸 가마터 위를 걸으며 900년 도자기 역사를 이해한다.',source_urls:['https://www.gangjin.go.kr/'],data_confidence:'high',tags:['강진청자마을','청자가마터','강진','전남','고려청자','도요지','900년'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00',phone:'061-430-3524'},
  {experience_id:'EX-GN-NAT-064',name:'밀양 얼음골·만년빙 체험',category_main:'문화/체험',category_sub:'자연체험',region_main:'GN',region_sub:'경상남도 밀양시',address:'경상남도 밀양시 산내면 얼음골로 70',lat:35.5036,lng:128.9711,price:'무료',duration:'1~2시간',reservation_required:false,target_user:['가족','개인'],nearby_places:[],related_heritage_ids:[],short_description:'한여름에 얼음이 어는 신비로운 자연 현상 밀양 얼음골에서 만년빙을 직접 체험하는 자연 탐방이다. 7~8월 폭염 때 기암절벽 사이에서 차가운 공기와 얼음 조각이 실제로 나오는 천연기념물 현장이다.',source_urls:['https://www.miryang.go.kr/'],data_confidence:'high',tags:['밀양얼음골','만년빙','밀양','경남','천연기념물','여름얼음','신비현상'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'seasonal',operating_hours:'7~8월 여름 시즌 (무료)',phone:'055-359-5638'},
  {experience_id:'EX-GG-NAT-060',name:'파주 율곡습지공원 철새',category_main:'문화/체험',category_sub:'자연체험',region_main:'GG',region_sub:'경기도 파주시',address:'경기도 파주시 파평면 율곡습지공원',lat:37.9019,lng:126.8261,price:'무료',duration:'1~2시간',reservation_required:false,target_user:['가족','개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'파주 임진강 율곡습지공원에서 계절 철새와 습지 식물을 탐방하는 생태 체험이다. 봄에는 수달·봄꽃, 겨울에는 재두루미·흰뺨검둥오리가 서식하는 접경 지역 자연 습지 탐방 코스다.',source_urls:['https://www.paju.go.kr/'],data_confidence:'high',tags:['율곡습지공원','파주','경기','철새','수달','임진강','생태탐방'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (무료)',phone:'031-953-4744'},
  {experience_id:'EX-JN-NAT-065',name:'해남 두륜산 대흥사+케이블카',category_main:'문화/체험',category_sub:'역사 체험',region_main:'JN',region_sub:'전라남도 해남군',address:'전라남도 해남군 삼산면 대흥사길 400',lat:34.4667,lng:126.5875,price:'사찰 성인 2,000원+케이블카',duration:'3~4시간',reservation_required:false,target_user:['가족','개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'유네스코 세계유산 대흥사 탐방과 두륜산 케이블카를 함께 즐기는 해남 완벽 코스다. 서산대사·사명대사가 주석했던 대흥사와 케이블카에서 남해 다도해를 조망하는 해남 최고 투어다.',source_urls:['https://www.daeheungsa.co.kr/'],data_confidence:'high',tags:['대흥사케이블카','두륜산','해남','전남','유네스코','서산대사','남해다도해'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'08:30~17:00',phone:'061-534-5502'}
];

const newShorts = [
  {
    experience_id:'EX-JN-CRF-006', experience_name:'나주 천연 쪽염색 심화 체험', category_sub:'전통공예', region:'전라남도',
    script_30s:'오늘은 나주에서 쪽염색 심화 체험을 했어요. 홀치기·매듭·발염 기법이에요. 근데 아무도 안 알려주는 게 있어요 — 홀치기는 묶음을 풀기 전이 제일 긴장돼요. 어떤 무늬가 나왔는지 모르거든요. 그 설레임이 체험의 하이라이트예요. 너무 결과가 예측 불가능한 게 예술이라서 좋았습니다.',
    script_60s:'오늘은 전남 나주 쪽빛 염색 공방에서 홀치기·매듭·발염 심화 기법을 체험했어요. 기본 염색이 아니라 다양한 기법으로 복잡한 패턴을 만드는 심화 과정이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 쪽염색에서 홀치기 기법의 하이라이트가 있어요. 천을 다양하게 묶거나 집어서 염색한 후 묶음을 풀기 전까지는 어떤 무늬가 나올지 아무도 몰라요. 심지어 장인도 정확히 예측하기 어려워요. 그 설레임과 두근거림 속에서 묶음을 하나씩 풀어가는 순간이 체험의 최고 하이라이트예요. 예상보다 훨씬 아름다운 무늬가 나올 때의 감동이 있어요. 예측 불가능함이 오히려 예술이 되는 거예요. 너무 결과가 예측 불가능한 것이 예술이라는 걸 알게 돼서 좋았습니다.',
    secret_tip:'홀치기 묶음 풀기 = 설레임의 하이라이트 — 어떤 무늬 나올지 아무도 모름. 장인도 예측 불가. 예측 불가능함이 예술이 되는 순간. 나주 청자마을 세트 코스',
    filming_guide:'홀치기 묶음 푸는 순간 표정 클로즈업. 예상치 못한 무늬 드러나는 장면. 완성 스카프 펼치는 장면.',
    broll_ideas:['홀치기 묶음 푸는 순간 표정','예상치 못한 무늬 드러나기','완성 스카프 펼치기','매듭 다양한 기법 작업','나주 쪽빛 공방 외경'],
    hooks:['홀치기 풀기 전까지 무늬 몰라요','설레임이 체험 하이라이트예요','장인도 예측 못 하는 예술','예측 불가능함이 예술이 돼요','나주 쪽염색 심화 꿀팁'],
    thumbnails:['홀치기 풀기 표정','무늬 드러나기','완성 스카프 펼치기','매듭 기법 작업','나주 공방 외경'],
    captions:{youtube:'나주 쪽염색 홀치기 — 풀기 전까지 무늬 몰라요 🔵\n\n예측 불가능함이 예술이 되는 순간!\n설레임이 체험의 하이라이트\n\n📍 전남 나주시 쪽빛 염색 공방\n🔵 홀치기·매듭·발염 심화 기법\n\n#나주쪽염색심화 #나주 #전남여행 #홀치기 #예측불가예술',instagram:'나주 쪽염색 홀치기 풀기 전까지 무늬 몰라요 🔵\n\n예측 불가능함이 예술이 되는 순간 ✨\n설레임이 최고 하이라이트\n\n📍 전남 나주 쪽빛 공방\n\n#나주쪽염색 #나주여행 #전남 #홀치기 #GemKorea',tiktok:'나주 쪽염색 심화 꿀팁 🔵 홀치기 묶음 풀기 전까지 무늬 아무도 몰라요! 예측 불가능함이 예술 // 풀어가는 그 설레임이 체험 하이라이트 #나주쪽염색 #나주여행 #전남'},
    hashtags:{korean:['#한국여행','#전남여행','#나주여행','#천연염색','#GemKorea'],place_specific:['#나주쪽염색심화','#홀치기설레임','#예측불가예술','#홀치기무늬']}
  },
  {
    experience_id:'EX-SE-CUL-003', experience_name:'서울 국립극장 전통 공연', category_sub:'문화예술', region:'서울특별시',
    script_30s:'오늘은 서울 국립극장 전통 공연을 봤어요. 남산 자락이에요. 근데 아무도 안 알려주는 게 있어요 — 국립극장 공연 전 마당에서 무료 사전 공연이 있어요. 본 공연 30분 전이에요. 그걸 모르는 사람이 많아요. 너무 마당이 공연장이 된다는 게 좋았습니다.',
    script_60s:'오늘은 서울 남산 국립극장에서 판소리·무용·국악 공연을 감상했어요. 한국 전통 공연 예술을 현대적 무대에서 즐기는 최고의 체험이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 국립극장 공연 관람 시 본 공연 시작 30분 전에 야외 마당에서 무료 사전 공연이 열려요. 하늘 아래 열린 야외 공간에서 전통 음악과 무용 공연을 무료로 즐길 수 있어요. 이 사전 마당 공연을 모르고 늦게 도착하는 사람들이 많아요. 30분 일찍 도착해서 야외 공연 즐기고 실내 본 공연을 보면 완벽한 공연 경험이에요. 남산 배경의 야외 마당에서 전통 공연을 보는 그 환경 자체가 특별해요. 너무 마당이 공연장이 되는 그 순간이 좋았습니다.',
    secret_tip:'본 공연 30분 전 야외 마당 무료 사전 공연 — 하늘 아래 전통 공연. 대부분 모르고 늦게 도착. 30분 일찍 도착+마당 공연+본 공연 완벽 패키지. 남산 배경 특별',
    filming_guide:'야외 마당 사전 공연 하늘 배경. 국립극장 본 공연 무대 광각. 남산 자락 국립극장 외경.',
    broll_ideas:['야외 마당 사전 공연 하늘 배경','국립극장 본 공연 무대 광각','남산 자락 국립극장 외경','판소리 소리꾼 클로즈업','관객 집중 장면'],
    hooks:['국립극장 야외 사전 공연이 있어요','본 공연 30분 전에 시작해요','무료예요 아무도 몰라요','30분 일찍 가야 하는 이유','서울 국립극장 꿀팁'],
    thumbnails:['야외 마당 사전 공연','본 공연 무대 광각','남산 국립극장 외경','판소리 소리꾼','관객 집중'],
    captions:{youtube:'서울 국립극장 — 야외 마당 무료 사전 공연 있어요 🎭\n\n본 공연 30분 전 하늘 아래 전통 공연!\n대부분 이걸 모르고 늦게 와요\n\n📍 서울 중구 남산 국립극장\n🎭 본 공연 30분 전 야외 마당 무료 공연\n\n#국립극장 #서울여행 #전통공연 #야외마당공연 #남산',instagram:'서울 국립극장 야외 마당 무료 사전 공연 있어요 🎭\n\n본 공연 30분 전 하늘 아래 ✨\n대부분 모르고 늦게 와요\n\n📍 서울 남산 국립극장\n\n#국립극장 #서울여행 #전통공연 #야외공연 #GemKorea',tiktok:'서울 국립극장 꿀팁 🎭 본 공연 30분 전 야외 마당에서 무료 사전 공연 있어요! 대부분 몰라요 // 30분 일찍 도착해서 하늘 아래 전통 공연 즐기세요 #국립극장 #서울여행 #전통공연'},
    hashtags:{korean:['#한국여행','#서울여행','#국립극장','#전통공연','#GemKorea'],place_specific:['#국립극장야외마당','#무료사전공연','#30분전도착','#남산전통공연']}
  },
  {
    experience_id:'EX-CB-CUL-001', experience_name:'제천 의림지 국악 소풍', category_sub:'문화예술', region:'충청북도',
    script_30s:'오늘은 제천 의림지에서 국악 소풍을 즐겼어요. 삼한 시대 저수지예요. 근데 아무도 안 알려주는 게 있어요 — 의림지 제방에 서면 맞은편 소나무 숲과 물이 가득 찬 저수지 뷰가 대칭이에요. 그 구도가 3,000년 전부터 한국인이 만든 풍경이에요. 너무 역사가 이렇게 아름답다는 게 좋았습니다.',
    script_60s:'오늘은 충북 제천 의림지에서 야외 국악 공연 소풍을 즐겼어요. 삼한 시대에 만들어진 한국 최고(最古) 저수지 의림지를 배경으로 가야금·해금 연주를 감상하는 체험이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 의림지 제방 위에 서서 저수지를 바라보는 구도가 특별해요. 맞은편에 소나무 숲이 물에 반사되는 구도가 3,000년 전 이 저수지를 만든 사람들이 설계한 경관이에요. 물·소나무·하늘이 대칭을 이루는 그 구도가 한국 전통 조경의 원형이에요. 이 사실을 알고 제방에 서면 2,000년 전 한국인의 미적 감각이 지금도 살아있다는 게 느껴져요. 국악 소풍은 이 역사적 공간에서 음악이 더해지는 완벽한 체험이에요. 너무 역사가 이렇게 아름다운 경관을 만들었다는 게 좋았습니다.',
    secret_tip:'의림지 제방 위 = 소나무 숲+물 대칭 3,000년 전 설계 경관 — 한국 전통 조경 원형. 이 사실 알면 제방 위에서 다른 감동. 봄·가을 국악 소풍 행사 확인 필수',
    filming_guide:'의림지 제방에서 소나무 반영 대칭 광각. 야외 국악 연주 소나무 배경. 의림지 전체 역사적 전경.',
    broll_ideas:['제방 위 소나무 반영 대칭 광각','야외 국악 연주 소나무 배경','의림지 전체 역사 전경','가야금 해금 클로즈업','소풍 피크닉 분위기'],
    hooks:['의림지 제방에서 보면 대칭이에요','3,000년 전 설계된 경관이에요','한국 전통 조경의 원형이에요','이 사실 알면 다른 감동이 와요','제천 의림지 꿀팁'],
    thumbnails:['제방 소나무 반영 대칭','야외 국악 연주','의림지 전체 전경','가야금 해금','소풍 분위기'],
    captions:{youtube:'제천 의림지 — 제방에서 보면 3,000년 전 설계 경관이에요 🎵\n\n소나무 숲+물 대칭이 한국 조경 원형!\n야외 국악 소풍\n\n📍 충북 제천시 의림지\n🎵 봄·가을 국악 소풍 행사 확인\n\n#제천의림지 #제천 #충북여행 #국악소풍 #3000년조경',instagram:'제천 의림지 제방에서 3,000년 전 설계 경관이에요 🎵\n\n소나무+물 대칭 한국 전통 조경 원형 ✨\n야외 국악 소풍\n\n📍 충북 제천 의림지\n\n#제천의림지 #제천여행 #충북 #국악소풍 #GemKorea',tiktok:'제천 의림지 꿀팁 🎵 제방 위에서 보면 소나무 숲과 물이 대칭이에요! 3,000년 전 설계된 경관 한국 전통 조경 원형 // 이 사실 알면 다른 감동이 와요 #제천의림지 #제천여행 #충북'},
    hashtags:{korean:['#한국여행','#충북여행','#제천여행','#의림지','#GemKorea'],place_specific:['#제천의림지','#3000년설계경관','#전통조경원형','#국악소풍']}
  },
  {
    experience_id:'EX-GB-CUL-002', experience_name:'안동 독립운동 기념관 체험', category_sub:'역사 체험', region:'경상북도',
    script_30s:'오늘은 안동 독립운동 기념관에 왔어요. 독립운동가를 가장 많이 배출한 곳이에요. 근데 아무도 안 알려주는 게 있어요 — 안동 독립운동가들은 대부분 유학자예요. 선비들이 독립운동을 한 거예요. 그 이유가 절의 때문이에요. 너무 유교가 저항이 됐다는 게 좋았습니다.',
    script_60s:'오늘은 경북 안동 독립운동 기념관에 왔어요. 안동은 전국에서 독립운동가를 가장 많이 배출한 고장이에요. 이육사·류인석·김동삼 등 수백 명의 독립운동가가 안동 출신이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 안동 독립운동가들이 특별한 이유가 있어요. 이분들이 대부분 유학을 공부한 선비 집안 사람들이에요. 이게 역설처럼 보이는데 사실 당연한 거예요. 유교의 핵심 가치인 절의(節義)가 "옳지 않은 것에 굴복하지 않는 마음"이거든요. 일제 침략에 절의를 지키는 것이 독립운동이 된 거예요. 그래서 양반 선비 집안들이 독립운동에 앞장선 거예요. 이 사실을 알고 독립운동가들의 이야기를 들으면 완전히 다르게 느껴져요. 너무 유교가 저항이 된 역사가 좋았습니다.',
    secret_tip:'안동 독립운동가 대부분 유학 선비 — 유교 절의(옳지 않은 것에 굴복 안 함)가 독립운동으로. 이 맥락 알면 독립운동가 이야기 다르게 들림. 하회마을 세트 코스',
    filming_guide:'독립운동가 사진 전시 클로즈업. 이육사 시비 앞 방문자. 안동 독립운동 기념관 외경.',
    broll_ideas:['독립운동가 사진 전시 클로즈업','이육사 시비 앞 방문자','안동 기념관 외경','절의 유교 설명 전시','안동 독립운동가 이름 목록'],
    hooks:['안동 독립운동가들이 선비예요','유교 절의가 독립운동이 됐어요','이 맥락 알면 이야기가 달라요','선비들이 항일의 선봉이었어요','안동 독립운동 기념관 꿀팁'],
    thumbnails:['독립운동가 사진 전시','이육사 시비 방문자','기념관 외경','절의 설명 전시','독립운동가 목록'],
    captions:{youtube:'안동 독립운동 기념관 — 선비들이 독립운동 했어요 ⚔️\n\n유교 절의가 항일저항이 된 역사!\n이 맥락 알면 완전히 다르게 느껴져요\n\n📍 경북 안동시 독립운동 기념관\n⚔️ 하회마을 세트 코스\n\n#안동독립운동기념관 #안동 #경북여행 #선비독립운동 #절의',instagram:'안동 독립운동 기념관 선비들이 항일했어요 ⚔️\n\n유교 절의가 독립운동이 된 역사 ✨\n이 맥락 알면 다르게 느껴져요\n\n📍 경북 안동 독립운동 기념관\n\n#안동독립운동 #안동여행 #경북 #선비독립 #GemKorea',tiktok:'안동 독립운동 꿀팁 ⚔️ 독립운동가들이 대부분 유학 선비예요! 유교 절의가 일제 저항이 된 역사 // 이 맥락 알면 독립운동가 이야기 완전히 달라져요 #안동독립운동 #안동여행 #경북'},
    hashtags:{korean:['#한국여행','#경북여행','#안동여행','#독립운동','#GemKorea'],place_specific:['#안동독립운동기념관','#선비독립운동','#유교절의항일','#안동독립운동가']}
  },
  {
    experience_id:'EX-US-CUL-001', experience_name:'울산 고래 생태 체험관', category_sub:'박물관', region:'울산광역시',
    script_30s:'오늘은 울산 장생포 고래 체험관에 왔어요. 과거 한국 최대 포경 항구예요. 근데 아무도 안 알려주는 게 있어요 — 장생포 포경이 1986년에 금지됐어요. 불과 40년 전이에요. 지금 고래 전시관 건물이 포경 작업장이었어요. 너무 역사가 이렇게 가까이 있다는 게 좋았습니다.',
    script_60s:'오늘은 울산 남구 장생포 고래 생태 체험관에 왔어요. 과거 한국 최대 포경 항구였던 장생포에 조성된 고래 전문 박물관이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 장생포 포경이 1986년에 국제포경위원회 결정으로 금지됐어요. 불과 40년 전이에요. 지금 체험관 일부가 실제 포경 작업장이 있던 곳이에요. 지금 고래를 보호하는 박물관이 된 그 공간이 40년 전에는 고래를 잡던 곳이었다는 아이러니예요. 박물관 내 1970~80년대 포경 사진과 도구 전시를 보면 그 역사가 생생하게 다가와요. 고래가 멸종 위기가 됐다가 보호 대상이 된 40년 역사가 이 한 건물에 다 담겨있어요. 너무 역사가 이렇게 가까이 있다는 게 좋았습니다.',
    secret_tip:'1986년 포경 금지 = 불과 40년 전 — 박물관 건물이 포경 작업장이었음. 고래잡던 곳이 고래 보호하는 곳이 된 아이러니. 1970~80년대 포경 사진 전시 필수 관람',
    filming_guide:'1970~80년대 포경 사진 전시 클로즈업. 고래 뼈대 실물 전시. 장생포 항구와 박물관 외경.',
    broll_ideas:['1970~80년대 포경 사진 전시','고래 뼈대 실물','장생포 항구 박물관 외경','포경 도구 전시','수족관 고래 관찰'],
    hooks:['포경 금지가 불과 40년 전이에요','이 건물이 포경 작업장이었어요','고래잡던 곳이 보호하는 곳이 됐어요','아이러니가 역사예요','울산 장생포 꿀팁'],
    thumbnails:['포경 사진 전시','고래 뼈대 실물','장생포 항구 외경','포경 도구 전시','수족관 고래'],
    captions:{youtube:'울산 장생포 고래 체험관 — 포경 금지가 40년 전이에요 🐋\n\n이 건물이 포경 작업장이었어요!\n고래잡던 곳이 보호하는 곳이 된 아이러니\n\n📍 울산 남구 장생포 고래 생태 체험관\n🐋 1986년 포경 금지 역사\n\n#장생포고래체험관 #울산여행 #고래박물관 #포경금지40년 #아이러니역사',instagram:'울산 장생포 포경 금지가 40년 전이에요 🐋\n\n이 건물이 포경 작업장이었다는 아이러니 ✨\n고래잡던 곳이 보호하는 곳이 됨\n\n📍 울산 장생포 고래 체험관\n\n#장생포고래 #울산여행 #포경역사 #고래보호 #GemKorea',tiktok:'울산 장생포 꿀팁 🐋 포경 금지가 불과 40년 전이에요! 이 박물관 건물이 포경 작업장이었음 // 고래잡던 곳이 고래 보호하는 아이러니 #장생포고래 #울산여행 #포경역사'},
    hashtags:{korean:['#한국여행','#울산여행','#장생포','#고래박물관','#GemKorea'],place_specific:['#장생포고래체험관','#포경금지40년','#고래잡던곳보호','#역사아이러니']}
  },
  {
    experience_id:'EX-CN-CUL-002', experience_name:'공주 황새 생태 탐방', category_sub:'자연체험', region:'충청남도',
    script_30s:'오늘은 예산 황새 공원에 왔어요. 한국에서 멸종됐다가 복원된 황새예요. 근데 아무도 안 알려주는 게 있어요 — 황새가 먹이 먹는 방법이 특이해요. 두 발로 물을 탁 치면서 물고기를 몬대요. 그 방법이 천 년 전통 조업이에요. 너무 새가 기술을 쓴다는 게 좋았습니다.',
    script_60s:'오늘은 충남 예산군 황새 공원에 왔어요. 1994년 한국에서 마지막 황새 한 마리가 죽고 멸종됐다가 1996년부터 복원 사업이 시작됐어요. 현재 수십 쌍의 황새가 이 공원에서 번식하고 있어요. 근데 아무도 안 알려주는 꿀팁 하나 — 황새가 먹이를 잡는 방법이 독특해요. 황새는 얕은 물가에서 두 발로 물을 탁탁 치면서 물고기를 몰아서 잡아요. 이를 발 몰이 사냥 방법이라고 해요. 이 방법이 황새 특유의 진화된 사냥 기술이에요. 황새 먹이 주기 시간에 이 사냥 방법을 관찰할 수 있어요. 새가 발을 이용해 먹이를 사냥하는 기술을 가지고 있다는 게 신기해요. 너무 새가 기술을 쓴다는 게 좋았습니다.',
    secret_tip:'황새 발 몰이 사냥 = 두 발로 물 탁탁 쳐서 물고기 몰기 — 황새 특유 진화 사냥 기술. 먹이 주기 시간에 관찰 가능. 1994년 멸종→복원 성공 감동 스토리',
    filming_guide:'황새 발 몰이 사냥 슬로우 촬영. 번식 중인 황새 둥지 클로즈업. 예산 황새 공원 전경.',
    broll_ideas:['황새 발 몰이 사냥 슬로우','번식 중인 황새 둥지','예산 황새 공원 전경','황새 먹이 주기 장면','황새 복원 역사 전시'],
    hooks:['황새가 두 발로 물고기 몰아요','발 몰이 사냥 기술이 있어요','새가 기술을 쓴다는 게 신기해요','1994년 멸종에서 복원 성공','예산 황새 공원 꿀팁'],
    thumbnails:['황새 발 몰이 슬로우','번식 황새 둥지','황새 공원 전경','먹이 주기 장면','복원 역사 전시'],
    captions:{youtube:'예산 황새 공원 — 황새가 발로 물고기 몰아요 🦢\n\n두 발로 물 탁탁 쳐서 몰기 사냥 기술!\n새가 기술을 쓰는 진화\n\n📍 충남 예산군 황새 공원\n🦢 1994년 멸종→복원 성공 감동 스토리\n\n#예산황새공원 #황새 #충남여행 #발몰이사냥 #황새복원',instagram:'예산 황새 공원 황새가 발로 물고기 몰아요 🦢\n\n두 발로 물 탁탁 쳐서 몰기 사냥 기술 ✨\n1994년 멸종에서 복원 성공\n\n📍 충남 예산 황새 공원\n\n#예산황새공원 #황새 #충남여행 #황새복원 #GemKorea',tiktok:'예산 황새 공원 꿀팁 🦢 황새가 발로 물 탁탁 쳐서 물고기 몰아요! 발 몰이 사냥 기술 // 1994년 멸종에서 복원 성공한 감동 스토리 #예산황새공원 #황새 #충남여행'},
    hashtags:{korean:['#한국여행','#충남여행','#예산여행','#황새','#GemKorea'],place_specific:['#예산황새공원','#황새발몰이사냥','#황새복원성공','#1994년멸종황새']}
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
