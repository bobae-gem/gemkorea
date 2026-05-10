const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const now = new Date().toISOString().slice(0,19);

const newExps = [
  {experience_id:'EX-GG-NAT-080',name:'화성 융릉·건릉 트레킹',category_main:'문화/체험',category_sub:'역사 체험',region_main:'GG',region_sub:'경기도 화성시',address:'경기도 화성시 안녕동 융릉로 일대',lat:37.2150,lng:127.0561,price:'성인 1,000원',duration:'1~2시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'정조의 아버지 사도세자(장조)가 묻힌 융릉과 정조의 건릉을 탐방하는 역사 체험이다. 정조가 매년 참배한 화성 융릉·건릉은 소나무 숲 속 아름다운 왕릉으로 유네스코 세계문화유산이다.',source_urls:['https://royaltombs.cha.go.kr/'],data_confidence:'high',tags:['융릉건릉','화성','경기','정조','사도세자','유네스코왕릉','소나무숲'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00',phone:'031-222-0797'},
  {experience_id:'EX-JN-CUL-051',name:'나주 나주읍성 역사 투어',category_main:'문화/체험',category_sub:'역사 체험',region_main:'JN',region_sub:'전라남도 나주시',address:'전라남도 나주시 과원동 나주읍성 일대',lat:35.0258,lng:126.7128,price:'무료',duration:'1~2시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'조선 시대 전라도의 중심 도시였던 나주의 읍성과 관아를 탐방하는 역사 체험이다. 고려·조선 시대 전남 도청 역할을 한 나주 읍성 복원 구역을 걸으며 나주목 역사를 체험한다.',source_urls:['https://www.naju.go.kr/'],data_confidence:'high',tags:['나주읍성','나주','전남','나주목','조선나주','읍성투어','전라감영'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (무료)',phone:'061-330-1261'},
  {experience_id:'EX-GN-CUL-076',name:'남해 독일마을 맥주 축제',category_main:'문화/체험',category_sub:'축제',region_main:'GN',region_sub:'경상남도 남해군',address:'경상남도 남해군 삼동면 독일마을 일대',lat:34.7889,lng:127.9119,price:'입장 무료 (음식·음료 별도)',duration:'4~6시간',reservation_required:false,target_user:['청년','개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'경남 남해 독일마을에서 매년 10월 열리는 맥주 축제 코리안 옥토버페스트다. 파독 광부·간호사들이 독일 문화를 가져온 남해 독일마을에서 독일 소시지·맥주와 함께 이국적 축제 분위기를 즐긴다.',source_urls:['https://www.namhae.go.kr/'],data_confidence:'high',tags:['남해독일마을맥주축제','남해','경남','옥토버페스트','독일맥주','파독간호사','10월'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'10월 축제 기간',phone:'055-863-8000'},
  {experience_id:'EX-GG-CUL-080',name:'의왕 왕송호수 철도 박물관',category_main:'문화/체험',category_sub:'역사 체험',region_main:'GG',region_sub:'경기도 의왕시',address:'경기도 의왕시 철도박물관로 142',lat:37.3556,lng:126.9864,price:'성인 2,000원',duration:'1~2시간',reservation_required:false,target_user:['가족','어린이'],nearby_places:[],related_heritage_ids:[],short_description:'한국 철도 역사를 한눈에 볼 수 있는 경기 의왕 철도박물관을 탐방하는 체험이다. 실제 증기기관차·전기기관차 실물과 한국 철도 100년 역사를 전시한 국내 유일 종합 철도 박물관이다.',source_urls:['https://www.railroadmuseum.co.kr/'],data_confidence:'high',tags:['의왕철도박물관','의왕','경기','철도박물관','증기기관차','철도역사','어린이'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00 (월 휴관)',phone:'031-461-3610'},
  {experience_id:'EX-JB-NAT-069',name:'진안 운일암반일암 계곡',category_main:'문화/체험',category_sub:'자연체험',region_main:'JB',region_sub:'전라북도 진안군',address:'전라북도 진안군 주천면 운장산로 일대',lat:35.8383,lng:127.3644,price:'무료',duration:'2~3시간',reservation_required:false,target_user:['가족','개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'전북 진안 주천면 운일암반일암 계곡을 탐방하는 자연 체험이다. 기암괴석과 맑은 계곡이 어우러지는 운일암반일암은 낮에도 하루 한 번 해가 뜨고 진다는 뜻으로 깊은 계곡 속 신비로운 경관이 있다.',source_urls:['https://www.jinan.go.kr/'],data_confidence:'high',tags:['운일암반일암','진안','전북','계곡','기암괴석','여름계곡','주천'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'seasonal',operating_hours:'연중 (여름 계곡 시즌 최적)',phone:'063-430-2513'},
  {experience_id:'EX-CB-NAT-047',name:'단양 사인암 트레킹',category_main:'문화/체험',category_sub:'자연체험',region_main:'CB',region_sub:'충청북도 단양군',address:'충청북도 단양군 대강면 사인암길 27',lat:36.9328,lng:128.2944,price:'무료',duration:'1시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'충북 단양 남한강변 기암절벽 사인암을 탐방하는 자연 체험이다. 단양8경 중 하나인 사인암은 남한강 물 위로 솟아오른 30m 수직 절벽으로 조선 시대 화가들의 그림 소재로 자주 등장한 단양 최고 비경이다.',source_urls:['https://www.danyang.go.kr/'],data_confidence:'high',tags:['단양사인암','단양','충북','사인암','단양8경','남한강절벽','기암괴석'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (무료)',phone:'043-422-1146'},
  {experience_id:'EX-GW-NAT-078',name:'인제 합강정 강수욕',category_main:'문화/체험',category_sub:'자연체험',region_main:'GW',region_sub:'강원특별자치도 인제군',address:'강원특별자치도 인제군 인제읍 합강리 합강정',lat:38.0656,lng:128.1681,price:'무료',duration:'2~3시간',reservation_required:false,target_user:['가족','개인'],nearby_places:[],related_heritage_ids:[],short_description:'강원 인제 내린천과 소양강이 합류하는 합강정에서 강수욕을 즐기는 여름 체험이다. 맑고 깨끗한 1급수 내린천에서 강수욕·래프팅·플라이낚시를 즐기는 강원 최고 여름 강수욕 명소다.',source_urls:['https://www.inje.go.kr/'],data_confidence:'high',tags:['인제합강정강수욕','인제','강원','내린천','강수욕','1급수','여름'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'seasonal',operating_hours:'여름 (6~8월)',phone:'033-460-2170'},
  {experience_id:'EX-JN-NAT-096',name:'광주 무등산 트레킹',category_main:'문화/체험',category_sub:'자연체험',region_main:'JN',region_sub:'광주광역시 동구',address:'광주광역시 동구 무등산 일원',lat:35.1303,lng:127.0133,price:'무료',duration:'4~5시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'광주의 진산 무등산 정상 천왕봉까지 트레킹하는 체험이다. 국립공원 무등산의 주상절리 서석대·입석대는 수천만 년 전 화산 활동으로 형성된 거대한 돌기둥으로 무등산 최고 비경이다.',source_urls:['https://modeungsan.knps.or.kr/'],data_confidence:'high',tags:['무등산트레킹','광주','전남','무등산','서석대','입석대','주상절리'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (무료)',phone:'062-227-1187'},
  {experience_id:'EX-GN-NAT-088',name:'거제 지세포 야경+해산물',category_main:'문화/체험',category_sub:'야경/야간투어',region_main:'GN',region_sub:'경상남도 거제시',address:'경상남도 거제시 일운면 지세포리',lat:34.8725,lng:128.7153,price:'해산물 별도',duration:'1~2시간',reservation_required:false,target_user:['커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'경남 거제 지세포 항구에서 야경과 함께 신선한 해산물을 즐기는 야간 체험이다. 거제도 항구 중 지세포가 밤 분위기가 아름답고 신선한 통영·거제 해산물을 저렴하게 즐길 수 있는 로컬 명소다.',source_urls:['https://www.geoje.go.kr/'],data_confidence:'high',tags:['거제지세포야경','거제','경남','지세포','해산물','항구야경','로컬명소'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'저녁 17:00~22:00',phone:'055-639-3000'},
  {experience_id:'EX-GB-NAT-046',name:'문경새재 트레킹',category_main:'문화/체험',category_sub:'역사 체험',region_main:'GB',region_sub:'경상북도 문경시',address:'경상북도 문경시 문경읍 새재로 932 문경새재',lat:36.7983,lng:128.0911,price:'성인 2,000원',duration:'2~3시간',reservation_required:false,target_user:['개인','커플','가족'],nearby_places:[],related_heritage_ids:[],short_description:'조선 시대 영남에서 한양으로 가는 가장 중요한 관문 경북 문경새재를 트레킹하는 역사 체험이다. 문경새재 옛길을 따라 주흘관·조곡관·조령관 3개 관문을 통과하며 조선 시대 역사를 체험한다.',source_urls:['https://www.mungyeongsaejae.com/'],data_confidence:'high',tags:['문경새재트레킹','문경','경북','문경새재','옛길','3관문','조선시대'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00',phone:'054-550-8361'},
  {experience_id:'EX-GG-NAT-081',name:'강화 마니산 트레킹',category_main:'문화/체험',category_sub:'역사 체험',region_main:'GG',region_sub:'인천광역시 강화군',address:'인천광역시 강화군 화도면 마니산로 661',lat:37.5753,lng:126.4517,price:'성인 2,000원',duration:'2~3시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'단군이 하늘에 제사를 지냈다는 인천 강화 마니산 정상 참성단까지 트레킹하는 역사 체험이다. 한라산과 백두산의 중간 높이에 위치한 마니산 정상에서 강화 바다 전경이 펼쳐지는 역사·자연 체험이다.',source_urls:['https://www.ganghwa.go.kr/'],data_confidence:'high',tags:['강화마니산','강화도','인천','마니산','참성단','단군','강화바다'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중',phone:'032-930-3114'},
  {experience_id:'EX-JN-CUL-052',name:'영광 백수해안도로 낙조',category_main:'문화/체험',category_sub:'자연체험',region_main:'JN',region_sub:'전라남도 영광군',address:'전라남도 영광군 백수읍 해안로 일대',lat:35.3608,lng:126.4889,price:'무료',duration:'1시간',reservation_required:false,target_user:['커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'전남 영광 백수해안도로에서 서해 낙조를 감상하는 체험이다. 16.8km 해안도로를 따라 드라이브하며 서해 낙조를 즐기는 코스로 죽도봉 낙조 전망대가 영광 최고 낙조 포인트다.',source_urls:['https://www.yeonggwang.go.kr/'],data_confidence:'high',tags:['영광백수해안도로','영광','전남','서해낙조','해안도로드라이브','죽도봉낙조','일몰'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'일몰 전 방문 (무료)',phone:'061-350-5422'}
];

const newShorts = [
  {
    experience_id:'EX-GG-NAT-080', experience_name:'화성 융릉·건릉 트레킹', category_sub:'역사 체험', region:'경기도',
    script_30s:'오늘은 화성 융릉에 왔어요. 사도세자 묘예요. 근데 아무도 안 알려주는 게 있어요 — 융릉이 원래 사도세자 묘가 아니었어요. 정조가 왕이 된 후 격상시켰어요. 아버지를 왕으로 추존해 왕릉 급으로 만든 거예요. 너무 아들의 효심이 이렇게 역사를 바꿨다는 게 좋았습니다.',
    script_60s:'오늘은 경기도 화성 융릉·건릉을 탐방했어요. 정조의 아버지 사도세자와 정조 자신이 묻힌 곳이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 융릉의 격상 역사가 있어요. 사도세자는 왕이 아니었어요. 영조에 의해 뒤주에 갇혀 죽은 세자였어요. 세자 신분으로 죽었기 때문에 원래 묘의 격이 왕릉이 아니었어요. 그런데 정조가 왕이 된 후 아버지를 장헌세자로 추존하고 묘를 수원 화산으로 이전했어요. 그 후 고종 때 아버지를 장조로 다시 추존하면서 묘가 왕릉 급 융릉이 됐어요. 정조가 수원 화성을 지은 것도, 매년 융릉을 참배한 것도 모두 아버지에 대한 효심이에요. 수원 화성·융릉·건릉은 모두 연결된 정조의 효심 프로젝트예요. 너무 아들의 효심이 이렇게 역사와 유산을 만들었다는 게 좋았습니다.',
    secret_tip:'융릉 = 원래 세자 신분 묘 → 정조 추존+고종 재추존으로 왕릉 격상 — 효심이 묘 격을 바꿈. 정조의 수원 화성+융릉+건릉이 연결된 효심 프로젝트. 소나무 숲 트레킹이 힐링',
    filming_guide:'융릉 홍살문 소나무 숲 배경. 건릉 능침 전경. 정자각 배경 가을 단풍.',
    broll_ideas:['융릉 홍살문 소나무 숲','건릉 능침 전경','정자각 배경 단풍','왕릉 소나무 산책로','정조 이야기 설명판'],
    hooks:['융릉이 원래 세자 묘였어요','정조가 왕릉으로 격상시켰어요','아버지 효심이 역사를 바꿨어요','화성·융릉·건릉이 연결돼요','화성 융릉 꿀팁'],
    thumbnails:['홍살문 소나무 숲','건릉 능침 전경','정자각 단풍','소나무 산책로','정조 설명판'],
    captions:{youtube:'화성 융릉 건릉 — 아들 효심이 역사를 바꿨어요 🌲\n\n사도세자 세자 묘를 정조가 왕릉으로 격상!\n화성·융릉·건릉 연결된 효심 프로젝트\n\n📍 경기도 화성시 안녕동 융릉로\n🌲 유네스코 세계문화유산 왕릉\n\n#화성융릉건릉 #융릉 #화성 #경기여행 #정조효심',instagram:'화성 융릉 건릉 아들 효심이 역사를 바꿨어요 🌲\n\n사도세자 세자 묘 → 정조 추존 왕릉 격상 ✨\n화성 건설도 연결된 효심 프로젝트\n\n📍 경기 화성 융릉 건릉\n\n#화성융릉건릉 #융릉 #화성여행 #경기 #GemKorea',tiktok:'화성 융릉 꿀팁 🌲 사도세자가 원래 세자 묘였는데 정조가 왕릉으로 격상시켰어요! 아들 효심이 역사를 바꿈 // 화성·융릉·건릉 연결된 효심 프로젝트예요 #화성융릉건릉 #화성여행 #경기'},
    hashtags:{korean:['#한국여행','#경기여행','#화성여행','#융릉건릉','#GemKorea'],place_specific:['#화성융릉건릉정조효심','#세자묘왕릉격상추존','#정조화성융릉건릉효심프로젝트','#소나무숲왕릉트레킹']}
  },
  {
    experience_id:'EX-GN-CUL-076', experience_name:'남해 독일마을 맥주 축제', category_sub:'축제', region:'경상남도',
    script_30s:'오늘은 남해 독일마을 맥주 축제에 왔어요. 근데 아무도 안 알려주는 게 있어요 — 이 맥주 축제를 만든 게 파독 간호사 할머니들이에요. 독일에서 배운 맥주 문화를 고향에 전한 거예요. 너무 할머니들이 이렇게 문화를 만들었다는 게 좋았습니다.',
    script_60s:'오늘은 경남 남해 독일마을 코리안 옥토버페스트를 즐겼어요. 매년 10월 열리는 독특한 문화 축제예요. 근데 아무도 안 알려주는 꿀팁 하나 — 이 맥주 축제의 진짜 의미가 있어요. 남해 독일마을 맥주 축제는 파독 광부·간호사들이 독일에서 배워온 맥주 문화를 한국에 전파한 데서 시작됐어요. 1960~70년대 독일에 파견된 분들이 독일 맥주 문화와 소시지 문화를 직접 경험했고 귀국 후 남해에 정착하면서 그 문화를 가져왔어요. 그 2세대들이 만든 축제가 코리안 옥토버페스트예요. 독일 정통 바이에른 맥주와 남해 특산 멸치회가 함께 나오는 독특한 퓨전이에요. 할머니들이 독일에서 버텨낸 세월이 지금의 이 축제로 피어난 거예요. 너무 할머니들의 삶이 이렇게 문화가 됐다는 게 좋았습니다.',
    secret_tip:'남해 독일마을 맥주 축제 = 파독 간호사·광부가 가져온 독일 문화 — 바이에른 맥주+남해 멸치회 퓨전. 2세대가 만든 축제. 할머니들의 삶이 문화로. 10월 2~3일간 개최',
    filming_guide:'맥주 축제 활기찬 분위기. 독일 소시지+남해 멸치회 퓨전 상차림. 남해 바다 배경 마을.',
    broll_ideas:['맥주 축제 활기찬 분위기','독일 소시지+멸치회 퓨전','남해 바다 배경','독일식 건물+한복 할머니','축제 레드카펫'],
    hooks:['파독 할머니들이 만든 축제예요','독일 맥주+남해 멸치회가 퓨전이에요','할머니들의 삶이 문화가 됐어요','2세대가 이어받은 축제예요','남해 독일마을 맥주 꿀팁'],
    thumbnails:['맥주 축제 분위기','독일 소시지+멸치회','남해 바다 배경','할머니+독일식 건물','축제 레드카펫'],
    captions:{youtube:'남해 독일마을 맥주 축제 — 할머니들이 만든 문화예요 🍺\n\n파독 간호사·광부의 독일 맥주 문화!\n바이에른 맥주+남해 멸치회 퓨전\n\n📍 경남 남해군 독일마을 10월 개최\n🍺 코리안 옥토버페스트\n\n#남해독일마을맥주축제 #남해 #경남여행 #코리안옥토버페스트 #파독간호사',instagram:'남해 독일마을 맥주 축제 할머니들이 만든 문화예요 🍺\n\n파독 간호사 광부가 가져온 독일 문화 ✨\n바이에른 맥주+남해 멸치회 퓨전\n\n📍 경남 남해 독일마을\n\n#남해독일마을맥주축제 #남해여행 #경남 #옥토버페스트 #GemKorea',tiktok:'남해 독일마을 맥주 축제 꿀팁 🍺 파독 할머니들이 독일에서 배워온 맥주 문화를 전파한 거예요! 바이에른 맥주+남해 멸치회 퓨전 // 할머니들의 삶이 문화가 됐어요 #남해독일마을 #남해여행 #경남'},
    hashtags:{korean:['#한국여행','#경남여행','#남해여행','#독일마을맥주축제','#GemKorea'],place_specific:['#남해독일마을맥주축제파독간호사','#바이에른맥주남해멸치회퓨전','#할머니삶이문화됨','#코리안옥토버페스트']}
  },
  {
    experience_id:'EX-JB-NAT-069', experience_name:'진안 운일암반일암 계곡', category_sub:'자연체험', region:'전라북도',
    script_30s:'오늘은 진안 운일암반일암 계곡에 왔어요. 근데 아무도 안 알려주는 게 있어요 — 이 계곡이 하루에 해가 1번만 뜨고 져요. 깊은 절벽 계곡이라 해가 잠깐 보이다 사라져요. 그래서 이름이 운일암반일암이에요. 너무 이름이 이렇게 정확하다는 게 좋았습니다.',
    script_60s:'오늘은 전북 진안 주천면 운일암반일암 계곡을 탐방했어요. 기암괴석과 맑은 계곡이 어우러진 절경이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 운일암반일암 이름의 뜻이 있어요. 한자로 풀면 運日岩半日岩이에요. 구름이 반나절 머물고 해가 반나절 비추는 바위라는 뜻이에요. 이 계곡이 얼마나 깊고 좁은지 알려주는 이름이에요. 양쪽 절벽이 높아서 태양이 정오 전후로만 계곡 바닥에 햇빛이 닿아요. 나머지 시간은 절벽 그늘 속이에요. 그래서 여름에도 계곡 안이 서늘해요. 자연 에어컨이에요. 맑은 1급수 계곡물에 발 담그고 여름 계곡 피서를 즐기기에 전북 최고 명소예요. 기암괴석 사이 좁은 협곡을 통과하는 탐방로가 짜릿해요. 너무 이름이 이렇게 지형을 정확히 말해준다는 게 좋았습니다.',
    secret_tip:'운일암반일암 이름 = 계곡이 깊어 해가 반나절만 들어옴 — 절벽 그늘로 여름에도 서늘한 자연 에어컨. 1급수 계곡 발 담그기 최적. 기암괴석 협곡 통과 탐방로 짜릿함',
    filming_guide:'운일암반일암 기암괴석 협곡 전경. 좁은 계곡 햇빛 투과 빛 줄기. 맑은 1급수 계곡 발 담그기.',
    broll_ideas:['기암괴석 협곡 전경','계곡 빛 줄기','맑은 계곡 발 담그기','좁은 협곡 통과','바위 절벽 전경'],
    hooks:['하루에 해가 1번만 뜨고 져요','절벽이 깊어서 해가 잠깐만 비춰요','여름에도 서늘한 자연 에어컨이에요','이름이 지형을 정확히 말해줘요','진안 운일암반일암 꿀팁'],
    thumbnails:['기암괴석 협곡','계곡 빛 줄기','맑은 계곡 발 담그기','좁은 협곡 통과','바위 절벽'],
    captions:{youtube:'진안 운일암반일암 — 하루에 해가 1번만 뜨고 져요 🏞️\n\n깊은 절벽 계곡이라 해가 잠깐만 비춰요!\n여름에도 서늘한 자연 에어컨\n\n📍 전북 진안군 주천면 운장산로\n🏞️ 기암괴석 1급수 계곡\n\n#진안운일암반일암 #운일암반일암 #진안 #전북여행 #여름계곡',instagram:'진안 운일암반일암 하루에 해가 1번만 뜨고 져요 🏞️\n\n절벽이 깊어 해가 잠깐만 비춤 ✨\n여름에도 서늘한 자연 에어컨 1급수 계곡\n\n📍 전북 진안 운일암반일암\n\n#진안운일암반일암 #진안여행 #전북 #계곡 #GemKorea',tiktok:'진안 운일암반일암 꿀팁 🏞️ 하루에 해가 1번만 뜨고 져요! 절벽이 깊어서 해가 반나절만 비춤 // 여름에도 서늘한 자연 에어컨 1급수 계곡이에요 #진안운일암반일암 #진안여행 #전북'},
    hashtags:{korean:['#한국여행','#전북여행','#진안여행','#운일암반일암','#GemKorea'],place_specific:['#진안운일암반일암해반나절','#절벽깊어해잠깐비춤','#여름서늘자연에어컨','#1급수기암괴석협곡']}
  },
  {
    experience_id:'EX-GW-NAT-078', experience_name:'인제 합강정 강수욕', category_sub:'자연체험', region:'강원특별자치도',
    script_30s:'오늘은 인제 내린천에서 강수욕을 했어요. 근데 아무도 안 알려주는 게 있어요 — 내린천이 한국에서 가장 깨끗한 강 중 하나예요. 강 바닥 돌이 이끼 없이 보여요. 1급수 기준이에요. 그 물에서 수영해요. 너무 맑음이 이렇게 느껴진다는 게 좋았습니다.',
    script_60s:'오늘은 강원도 인제 합강정 내린천에서 강수욕을 즐겼어요. 맑고 깨끗한 1급수 내린천이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 내린천이 왜 이렇게 맑은지 아세요? 내린천은 강원도 인제·양양의 산지에서 발원해요. 주변에 공장이 전혀 없고 인구 밀도가 극히 낮아요. 강 상류에서 하류까지 오염원이 거의 없어요. 강 바닥을 들여다보면 돌이 이끼 없이 맨들맨들하게 보여요. 이게 1급수 강의 특징이에요. 물이 너무 맑아 바닥이 완전히 보이고 1~1.5m 깊이의 강 안에 있는 물고기가 눈에 보여요. 내린천 어름치가 환경부 지정 천연기념물이에요. 어름치가 살 수 있는 수질이라는 의미예요. 합강정에서 내린천 물에 들어가면 물고기가 발을 건드려요. 너무 맑음이 이렇게 몸으로 느껴진다는 게 좋았습니다.',
    secret_tip:'내린천 1급수 근거 = 바닥 돌 이끼 없이 맨들맨들+어름치 천연기념물 서식 — 공장·오염원 없는 극저밀도 인구 지역. 물 속 물고기 눈에 보임. 합강정이 최고 강수욕 포인트',
    filming_guide:'내린천 맑은 바닥 수중 영상. 강수욕 하는 사람 배경 맑은 강물. 어름치 물고기 발 건드리기.',
    broll_ideas:['내린천 맑은 바닥 수중','강수욕 배경 맑은 강','어름치 발 건드리기','강바닥 이끼없는 돌 클로즈업','인제 합강정 전경'],
    hooks:['내린천이 한국 최청정 강이에요','강 바닥이 이끼 없이 맨들해요','1급수 기준이에요','물고기가 발을 건드려요','인제 내린천 꿀팁'],
    thumbnails:['맑은 바닥 수중','강수욕 배경','어름치 물고기','이끼없는 돌','합강정 전경'],
    captions:{youtube:'인제 내린천 강수욕 — 한국 최청정 1급수예요 🏊\n\n강 바닥이 이끼 없이 맨들맨들!\n물고기가 발을 건드려요\n\n📍 강원도 인제군 합강정 내린천\n🏊 어름치 천연기념물 서식 1급수\n\n#인제내린천강수욕 #합강정 #인제 #강원여행 #1급수강수욕',instagram:'인제 내린천 강수욕 한국 최청정 1급수예요 🏊\n\n강 바닥 이끼 없이 맨들맨들 ✨\n물고기가 발을 건드리는 청정 강\n\n📍 강원 인제 합강정 내린천\n\n#인제내린천 #합강정 #인제여행 #강원 #GemKorea',tiktok:'인제 내린천 꿀팁 🏊 한국 최청정 1급수예요! 강 바닥 이끼 없이 맨들맨들 // 물 속 물고기가 발을 건드려요 #인제내린천강수욕 #인제여행 #강원'},
    hashtags:{korean:['#한국여행','#강원여행','#인제여행','#내린천','#GemKorea'],place_specific:['#인제내린천1급수최청정','#강바닥이끼없이맨들맨들','#어름치천연기념물서식','#물고기발건드리는청정강']}
  },
  {
    experience_id:'EX-GB-NAT-046', experience_name:'문경새재 트레킹', category_sub:'역사 체험', region:'경상북도',
    script_30s:'오늘은 문경새재를 걸었어요. 조선 시대 과거길이에요. 근데 아무도 안 알려주는 게 있어요 — 새재가 한양으로 가는 가장 좋은 길이었어요. 영남 선비들이 과거 보러 이 길을 걸었어요. 발이 아프면 과거를 못 봐요. 신발이 제일 중요한 길이에요. 너무 신발이 이렇게 역사를 결정했다는 게 좋았습니다.',
    script_60s:'오늘은 경북 문경새재 옛길 3관문 코스를 트레킹했어요. 조선 시대 영남 선비들이 한양 과거 시험을 보러 걸었던 역사적 길이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 문경새재가 왜 주요 과거길이 됐는지 아세요? 조선 시대 한양으로 가는 영남 길이 여러 갈래 있었어요. 대구에서 추풍령을 넘는 길이 더 짧지만 고개가 험했어요. 죽령을 넘는 길도 있었는데 너무 멀었어요. 문경새재는 길이 완만하고 관리가 잘 됐어요. 게다가 과거 시험 가는 선비들 사이에서 추풍령은 이름에 秋風(가을 바람)이 있어 시험에 낙제한다는 미신이 있었어요. 죽령은 竹嶺(대나무 고개)으로 힘없이 미끄러진다는 말이 있었어요. 그래서 조선 선비들은 미신을 피해 문경새재를 택했어요. 너무 미신이 이렇게 역사의 길을 만든다는 게 좋았습니다.',
    secret_tip:'문경새재 = 과거길 선택 이유가 미신 — 추풍령(秋風 낙제 미신)+죽령(竹嶺 미끄러짐 미신) 피해 선택. 완만하고 관리 잘 된 길. 주흘관→조곡관→조령관 3관문 완주가 포인트',
    filming_guide:'문경새재 3관문 문루 전경. 옛길 흙길 걷는 장면. 주흘산 배경 새재 전경.',
    broll_ideas:['3관문 문루 전경','옛길 흙길 걷기','주흘산 배경 새재','관문 아치 통과','역사 안내판'],
    hooks:['선비들이 과거 보러 걷던 길이에요','미신 때문에 이 길을 선택했어요','추풍령은 낙제 미신이 있었어요','죽령은 미끄러짐 미신이었어요','문경새재 꿀팁'],
    thumbnails:['3관문 문루 전경','옛길 흙길 걷기','주흘산 배경','관문 아치 통과','역사 안내판'],
    captions:{youtube:'문경새재 트레킹 — 선비들이 미신 때문에 선택한 길이에요 👟\n\n추풍령 낙제 미신+죽령 미끄럼 미신 피해!\n미신이 역사의 길을 만들었어요\n\n📍 경북 문경시 문경읍 새재로 932\n👟 조선 시대 과거길 3관문 옛길\n\n#문경새재트레킹 #문경새재 #문경 #경북여행 #과거길미신',instagram:'문경새재 트레킹 선비들이 미신 때문에 선택한 길이에요 👟\n\n추풍령 낙제 미신+죽령 미끄럼 미신 피해 ✨\n미신이 역사의 길을 만든 거예요\n\n📍 경북 문경 문경새재\n\n#문경새재 #문경여행 #경북 #옛길트레킹 #GemKorea',tiktok:'문경새재 꿀팁 👟 선비들이 미신 때문에 이 길을 선택했어요! 추풍령 낙제 미신+죽령 미끄럼 미신 피해 // 미신이 조선 과거길 역사를 만들었어요 #문경새재 #문경여행 #경북'},
    hashtags:{korean:['#한국여행','#경북여행','#문경여행','#문경새재','#GemKorea'],place_specific:['#문경새재과거길미신선택','#추풍령낙제미신죽령미끄럼미신','#미신이역사길만듦','#조선선비과거3관문완주']}
  },
  {
    experience_id:'EX-GG-NAT-081', experience_name:'강화 마니산 트레킹', category_sub:'역사 체험', region:'인천광역시',
    script_30s:'오늘은 강화 마니산을 올랐어요. 단군이 제사 지낸 참성단이에요. 근데 아무도 안 알려주는 게 있어요 — 마니산 높이가 468m인데 한라산과 백두산의 정확히 중간 높이예요. 단군이 의도한 건지 모르지만 한반도 중심이에요. 너무 지리가 이렇게 신기하다는 게 좋았습니다.',
    script_60s:'오늘은 인천 강화도 마니산 참성단까지 트레킹을 했어요. 단군이 하늘에 제사를 지냈다는 역사적인 곳이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 마니산의 지리적 의미가 있어요. 마니산 높이는 해발 468m예요. 그런데 한라산(1,950m)과 백두산(2,744m)의 중간 높이가 수학적으로 2,347m인 게 아니에요. 마니산이 한라산과 백두산을 잇는 한반도 남북 중심축 위에 위치해 있다는 의미예요. 옛날부터 마니산이 한반도의 중심에 있다고 여겨왔어요. 참성단은 하늘에 더 가까이 닿기 위해 산 정상에 쌓은 돌 제단이에요. 현재 전국 체전 성화가 마니산 참성단에서 채화돼요. 강화도 섬 안에 있어서 주변 서해 조망이 아름다워요. 너무 지리가 이렇게 신기하다는 게 좋았습니다.',
    secret_tip:'마니산 = 한반도 남북 중심축 위치 — 한라산·백두산 중심축. 참성단에서 전국 체전 성화 채화. 강화도 섬이라 서해 조망 아름다움. 정상까지 약 2시간 트레킹',
    filming_guide:'마니산 참성단 정상 전경. 서해 조망 파노라마. 성화 채화 장면 자료.',
    broll_ideas:['참성단 정상 전경','서해 조망 파노라마','성화 채화 자료','마니산 등산로','강화도 배경'],
    hooks:['단군이 제사 지낸 참성단이에요','한반도 남북 중심축이에요','전국 체전 성화를 여기서 채화해요','서해 조망이 아름다워요','강화 마니산 꿀팁'],
    thumbnails:['참성단 정상','서해 조망 파노라마','성화 채화 자료','마니산 등산로','강화도 배경'],
    captions:{youtube:'강화 마니산 트레킹 — 한반도 남북 중심축이에요 ⛰️\n\n단군이 하늘에 제사 지낸 참성단!\n전국 체전 성화 채화 장소\n\n📍 인천 강화군 화도면 마니산로\n⛰️ 단군 참성단 전국 체전 성화 채화지\n\n#강화마니산 #마니산 #강화 #인천여행 #단군참성단',instagram:'강화 마니산 트레킹 한반도 남북 중심축이에요 ⛰️\n\n단군 제사 참성단 ✨\n전국 체전 성화 채화 장소예요\n\n📍 인천 강화도 마니산\n\n#강화마니산 #마니산 #강화여행 #인천 #GemKorea',tiktok:'강화 마니산 꿀팁 ⛰️ 한반도 남북 중심축 위에 있어요! 단군이 하늘에 제사 지낸 참성단 // 전국 체전 성화가 여기서 채화돼요 #강화마니산 #마니산 #강화여행'},
    hashtags:{korean:['#한국여행','#인천여행','#강화여행','#마니산','#GemKorea'],place_specific:['#강화마니산한반도중심축','#단군참성단하늘제사','#전국체전성화채화지','#서해조망파노라마']}
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
