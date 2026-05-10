const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const now = new Date().toISOString().slice(0,19);

const newExps = [
  {experience_id:'EX-GW-NAT-003',name:'속초 설악산 케이블카 단풍 투어',category_main:'문화/체험',category_sub:'자연체험',region_main:'GW',region_sub:'강원특별자치도 속초시',address:'강원특별자치도 속초시 설악산로 833',lat:38.1192,lng:128.4668,price:'케이블카 왕복 성인 14,000원',duration:'2~3시간',reservation_required:false,target_user:['가족','커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'설악산 권금성 케이블카를 타고 가을 단풍 절정 시즌에 방문하는 투어다. 10월 중순 울산바위·공룡능선 단풍이 절정일 때 케이블카로 올라가면 단풍 물든 설악산을 공중에서 감상할 수 있다.',source_urls:['https://www.sorakcablecar.co.kr/'],data_confidence:'high',tags:['설악산케이블카','속초','강원','단풍','울산바위','권금성','가을'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'08:30~17:00',phone:'033-636-4300'},
  {experience_id:'EX-JN-NAT-001',name:'고흥 나로도 우주 센터 투어',category_main:'문화/체험',category_sub:'역사 체험',region_main:'JN',region_sub:'전라남도 고흥군',address:'전라남도 고흥군 봉래면 나로우주센터로 490',lat:34.4319,lng:127.5344,price:'성인 3,000원',duration:'2~3시간',reservation_required:false,target_user:['가족','어린이','개인'],nearby_places:[],related_heritage_ids:[],short_description:'한국 최초 우주 발사체 나로호가 발사된 나로우주센터 우주과학관을 탐방하는 체험이다. 실물 크기 로켓 모형·발사 시뮬레이션·우주 체험 전시관을 통해 한국 우주 개발 역사를 이해한다.',source_urls:['https://www.kari.re.kr/narospacecenter/'],data_confidence:'high',tags:['나로우주센터','고흥','전남','우주','나로호','발사체','어린이체험'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:30~17:30 (월요일 휴관)',phone:'061-830-8700'},
  {experience_id:'EX-GG-NAT-003',name:'연천 재인폭포·한탄강 트레킹',category_main:'문화/체험',category_sub:'자연체험',region_main:'GG',region_sub:'경기도 연천군',address:'경기도 연천군 연천읍 고문리 일원',lat:38.1056,lng:127.0811,price:'무료',duration:'2~3시간',reservation_required:false,target_user:['개인','커플','가족'],nearby_places:[],related_heritage_ids:[],short_description:'유네스코 세계지질공원 한탄강 구간에서 재인폭포와 화산 지형 트레킹을 즐기는 체험이다. 높이 18m 재인폭포와 현무암 절벽으로 이어지는 한탄강 트레킹 코스가 아름다우며 무료로 즐길 수 있다.',source_urls:['https://www.yeoncheon.go.kr/'],data_confidence:'high',tags:['재인폭포','연천','경기','한탄강','화산지형','트레킹','무료'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중',phone:'031-839-2562'},
  {experience_id:'EX-JJ-NAT-002',name:'제주 성산일출봉 일출 탐방',category_main:'문화/체험',category_sub:'자연체험',region_main:'JJ',region_sub:'제주특별자치도 서귀포시',address:'제주특별자치도 서귀포시 성산읍 일출로 284-12',lat:33.4591,lng:126.9428,price:'성인 5,000원',duration:'1~2시간',reservation_required:false,target_user:['가족','커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'유네스코 세계자연유산 성산일출봉에서 동해 일출을 감상하는 탐방이다. 해발 182m 분화구를 가진 수성화산체로 일출 무렵 동해에서 해가 뜨는 장관이 제주 최고의 일출 명소다.',source_urls:['https://www.visitjeju.net/'],data_confidence:'high',tags:['성산일출봉','제주','서귀포','일출','유네스코','분화구','세계자연유산'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'07:00~20:00 (일출 전 입장)',phone:'064-783-0959'},
  {experience_id:'EX-GW-NAT-004',name:'강릉 경포 자전거 라이딩',category_main:'문화/체험',category_sub:'어드벤처/레포츠',region_main:'GW',region_sub:'강원특별자치도 강릉시',address:'강원특별자치도 강릉시 경포로 일원',lat:37.7752,lng:128.8912,price:'자전거 대여 2시간 5,000원~',duration:'2~3시간',reservation_required:false,target_user:['가족','커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'강릉 경포호 둘레길과 경포해변을 연결하는 자전거 라이딩 코스다. 소나무 숲길·경포호·경포해변을 자전거로 이어가며 강릉 최고의 자연 경관을 즐기는 힐링 코스다.',source_urls:['https://www.gn.go.kr/'],data_confidence:'high',tags:['경포자전거','강릉','강원','경포호','경포해변','소나무숲','힐링'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'자전거 대여: 09:00~18:00',phone:'033-660-3689'},
  {experience_id:'EX-JN-NAT-002',name:'순천 선암사 승선교 탐방',category_main:'문화/체험',category_sub:'역사 체험',region_main:'JN',region_sub:'전라남도 순천시',address:'전라남도 순천시 승주읍 선암사길 450',lat:34.9725,lng:127.2861,price:'성인 3,000원',duration:'1~2시간',reservation_required:false,target_user:['커플','개인','가족'],nearby_places:[],related_heritage_ids:[],short_description:'1,400년 역사 선암사와 보물 승선교를 탐방하는 체험이다. 승선교는 현존하는 한국 최고(最古)의 홍예교로 봄 매화와 어우러지는 풍경이 국내 최고의 사찰 풍경 중 하나로 꼽힌다.',source_urls:['https://www.seonamsa.net/'],data_confidence:'high',tags:['선암사','승선교','순천','전남','홍예교','보물','사찰'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'07:00~19:00',phone:'061-754-5247'},
  {experience_id:'EX-GG-NAT-004',name:'광릉 국립수목원 체험',category_main:'문화/체험',category_sub:'자연체험',region_main:'GG',region_sub:'경기도 포천시',address:'경기도 포천시 소홀읍 광릉수목원로 415',lat:37.7500,lng:127.1611,price:'성인 1,000원',duration:'2~4시간',reservation_required:true,target_user:['가족','개인'],nearby_places:[],related_heritage_ids:[],short_description:'세조 왕릉 광릉의 500년 왕실 보호림에서 조성된 국립수목원이다. 사전 예약제로 운영하는 특별한 수목원으로 500년 된 전나무·잣나무 숲이 장관이며 산림박물관·특수식물원을 함께 관람할 수 있다.',source_urls:['https://www.kna.go.kr/'],data_confidence:'high',tags:['국립수목원','광릉','포천','경기','500년숲','예약제','희귀식물'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00 (월·화 휴관, 예약 필수)',phone:'031-540-2000'},
  {experience_id:'EX-JB-NAT-001',name:'부안 내소사 전나무 숲길',category_main:'문화/체험',category_sub:'자연체험',region_main:'JB',region_sub:'전라북도 부안군',address:'전라북도 부안군 진서면 내소사로 243',lat:35.6581,lng:126.6908,price:'성인 3,000원',duration:'1~2시간',reservation_required:false,target_user:['개인','커플','가족'],nearby_places:[],related_heritage_ids:[],short_description:'600년 수령 전나무 숲길을 걸어 신라 시대 내소사에 이르는 탐방이다. 내소사 가는 전나무 숲 500m 구간이 한국 100대 명품 숲으로 선정됐으며 가을 전나무 향이 특히 진하다.',source_urls:['https://www.buan.go.kr/'],data_confidence:'high',tags:['내소사','부안','전북','전나무숲','600년수령','사찰','가을향기'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'07:00~18:00',phone:'063-583-7281'},
  {experience_id:'EX-GN-NAT-002',name:'사천 선진리성 벚꽃 투어',category_main:'문화/체험',category_sub:'축제',region_main:'GN',region_sub:'경상남도 사천시',address:'경상남도 사천시 용현면 선진리 일원',lat:35.0167,lng:128.1178,price:'무료',duration:'1~2시간',reservation_required:false,target_user:['커플','가족','개인'],nearby_places:[],related_heritage_ids:[],short_description:'임진왜란 격전지 사천 선진리성에서 봄 벚꽃을 감상하는 투어다. 임진왜란 이순신 장군 사천해전 현장 위에 피어난 벚꽃이 역사와 자연이 공존하는 특별한 풍경을 만들어낸다.',source_urls:['https://www.sacheon.go.kr/'],data_confidence:'high',tags:['선진리성','사천','경남','벚꽃','이순신','임진왜란','봄'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'3월 말~4월 초 벚꽃 시즌',phone:'055-831-2114'},
  {experience_id:'EX-CB-NAT-001',name:'단양 도담삼봉 유람선 투어',category_main:'문화/체험',category_sub:'자연체험',region_main:'CB',region_sub:'충청북도 단양군',address:'충청북도 단양군 단양읍 도담삼봉길 일원',lat:36.9845,lng:128.3659,price:'유람선 성인 6,000원',duration:'1시간',reservation_required:false,target_user:['가족','커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'충주호 남한강 위에 솟은 도담삼봉을 유람선을 타고 가까이서 감상하는 투어다. 조선 시대부터 유명한 절경으로 정도전이 사랑했던 곳이며 사시사철 다른 경관으로 유명하다.',source_urls:['https://www.danyang.go.kr/'],data_confidence:'high',tags:['도담삼봉','단양','충북','유람선','남한강','충주호','정도전'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~17:00',phone:'043-421-0001'},
  {experience_id:'EX-GN-NAT-003',name:'밀양 얼음골 여름 체험',category_main:'문화/체험',category_sub:'자연체험',region_main:'GN',region_sub:'경상남도 밀양시',address:'경상남도 밀양시 산내면 얼음골로 70',lat:35.5036,lng:128.9711,price:'무료',duration:'1~2시간',reservation_required:false,target_user:['가족','개인'],nearby_places:[],related_heritage_ids:[],short_description:'여름에 얼음이 어는 신비로운 자연 현상 밀양 얼음골을 탐방하는 체험이다. 7~8월 폭염 때 기암절벽 사이에서 차가운 공기와 얼음이 나오는 천연기념물 지형을 직접 체험한다.',source_urls:['https://www.miryang.go.kr/'],data_confidence:'high',tags:['밀양얼음골','밀양','경남','여름체험','천연기념물','얼음','신비현상'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'seasonal',operating_hours:'7~8월 여름 (자연 발생)',phone:'055-359-5638'},
  {experience_id:'EX-JN-NAT-003',name:'신안 천일염 생산 체험',category_main:'문화/체험',category_sub:'농촌 체험',region_main:'JN',region_sub:'전라남도 신안군',address:'전라남도 신안군 증도면 증도해변로 일원',lat:34.9672,lng:126.1881,price:'1인 15,000원',duration:'2~3시간',reservation_required:true,target_user:['가족','개인'],nearby_places:[],related_heritage_ids:[],short_description:'유네스코 생물권 보전지역 증도에서 천일염 생산 전 과정을 체험하는 프로그램이다. 염전에서 직접 소금을 긁어모으고 간수 빼는 과정을 배우며 신안 천일염이 왜 세계 최고 품질인지 이해한다.',source_urls:['https://www.sinan.go.kr/'],data_confidence:'high',tags:['천일염','신안','전남','증도','염전체험','소금만들기','유네스코'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'seasonal',operating_hours:'5~9월 소금 생산 시즌',phone:'061-240-8556'}
];

const newShorts = [
  {
    experience_id:'EX-SE-FAM-001', experience_name:'롯데월드 어드벤처', category_sub:'테마파크', region:'서울특별시',
    script_30s:'오늘은 잠실 롯데월드에 왔어요. 세계 최대 실내 테마파크예요. 근데 아무도 안 알려주는 게 있어요 — 날씨 관계없이 언제나 OK인 이유가 실내이기 때문이에요. 비 오는 날 롯데월드가 제일 한산해요. 그날 가면 대기 줄이 없어요. 너무 비가 오길 기다려야 하는 테마파크라서 좋았습니다.',
    script_60s:'오늘은 서울 잠실 롯데월드 어드벤처에 왔어요. 기네스북 세계 최대 실내 테마파크예요. 아이스링크·어트랙션·퍼레이드·공연이 실내에 모여있어요. 근데 아무도 안 알려주는 꿀팁 하나 — 롯데월드 어드벤처는 비 오는 날이 가장 한산해요. 야외 테마파크인 에버랜드는 비 오면 사람이 줄지만 롯데월드는 실내라 날씨 상관없이 즐길 수 있거든요. 그런데 다른 야외 명소 가려던 사람들이 롯데월드로 몰릴 것 같지만 실제로는 반대예요. 비 오는 날 방문객이 오히려 줄어요. 맑은 날 자이로스윙 50분 대기가 비 오는 날엔 10분이에요. 롯데월드 앱에서 실시간 대기 확인하고 비 오는 주중 방문이 최고예요. 너무 비가 오길 기다려야 하는 테마파크라서 좋았습니다.',
    secret_tip:'비 오는 날 롯데월드가 최고 — 실내 테마파크라 날씨 상관없는데 방문객 오히려 줄어 50분→10분 대기. 주중+비 오는 날 조합이 황금. 롯데월드 앱 실시간 대기 확인',
    filming_guide:'롯데월드 실내 거대 돔 전체 광각. 자이로스윙 텅 빈 대기 줄 (비 오는 날). 퍼레이드 전체 동선.',
    broll_ideas:['실내 거대 돔 전체 광각','텅 빈 자이로스윙 대기 줄','퍼레이드 동선 전체','석촌호수 야경 배경 매직아일랜드','롯데월드 내부 크리스마스 장식'],
    hooks:['비 오는 날 롯데월드가 최고예요','실내 테마파크라 날씨 상관없어요','50분 대기가 10분 되는 날','롯데월드 꿀팁 중 최고예요','세계 최대 실내 테마파크 즐기는 법'],
    thumbnails:['실내 돔 전체 광각','텅 빈 대기 줄','퍼레이드 동선','석촌호수 야경 매직아일랜드','크리스마스 장식'],
    captions:{youtube:'롯데월드 꿀팁 — 비 오는 날이 최고예요 🎡\n\n50분 대기가 10분 됩니다!\n세계 최대 실내 테마파크 완전 공략\n\n📍 서울 송파구 롯데월드 어드벤처\n🎡 비 오는 날 + 주중 = 황금 조합\n💡 롯데월드 앱 실시간 대기 확인\n\n#롯데월드 #잠실 #서울여행 #테마파크꿀팁 #비오는날',instagram:'롯데월드 비 오는 날이 꿀이에요 🎡\n\n50분 대기가 10분 됩니다 ✨\n세계 최대 실내 테마파크라 날씨 상관없음\n\n📍 서울 송파 롯데월드\n\n#롯데월드 #잠실 #서울여행 #비오는날꿀 #GemKorea',tiktok:'롯데월드 꿀팁 🎡 비 오는 날 가면 50분 대기가 10분이에요! 실내라 날씨 상관없는데 오히려 한산함 // 세계 최대 실내 테마파크 비오는날 전략 #롯데월드 #잠실 #서울여행'},
    hashtags:{korean:['#한국여행','#서울여행','#잠실','#테마파크','#GemKorea'],place_specific:['#롯데월드','#비오는날꿀','#세계최대실내테마파크','#자이로스윙']}
  },
  {
    experience_id:'EX-GB-FAM-001', experience_name:'경주월드', category_sub:'테마파크', region:'경상북도',
    script_30s:'오늘은 경주 보문단지 경주월드에 왔어요. 신라 천 년 고도 옆 테마파크예요. 근데 아무도 안 알려주는 게 있어요 — 경주월드는 여름 워터파크 캘리포니아비치와 세트 티켓이 저렴해요. 그리고 불국사가 차로 10분이에요. 이 조합이 경주 여행 최고 가성비예요. 너무 역사+놀이가 한 곳에 있어서 좋았습니다.',
    script_60s:'오늘은 경북 경주 보문관광단지 경주월드에 왔어요. 유네스코 세계유산 경주 바로 옆에 위치한 테마파크예요. 어트랙션·워터파크·공연이 모여있고 규모는 에버랜드보다 작지만 대기가 훨씬 짧아요. 근데 아무도 안 알려주는 꿀팁 하나 — 경주월드는 세계문화유산 탐방과 조합이 가장 강력한 테마파크예요. 불국사가 차로 10분, 석굴암·첨성대·동궁과 월지가 15~20분 거리예요. 오전에 불국사·석굴암 탐방하고 오후에 경주월드에서 놀고 저녁에 동궁과 월지 야경으로 마무리하는 하루 코스가 경주 완벽 여행이에요. 그리고 여름에는 캘리포니아비치 워터파크와 통합권을 사면 훨씬 저렴해요. 너무 역사+테마파크+야경이 한 도시에 다 있어서 좋았습니다.',
    secret_tip:'오전 불국사→오후 경주월드→저녁 동궁과 월지 야경 코스 — 경주 완벽 하루. 여름 캘리포니아비치 통합권이 저렴. 에버랜드 대비 대기 짧아 효율적',
    filming_guide:'경주월드 어트랙션과 멀리 경주 시가지 동시 구도. 캘리포니아비치 파도풀 전경. 저녁 동궁과 월지 야경 연계 장면.',
    broll_ideas:['경주월드 어트랙션과 경주 시가지 구도','캘리포니아비치 파도풀 전경','동궁과 월지 야경 연계','불국사→경주월드 코스 지도','경주월드 공연 퍼레이드'],
    hooks:['경주월드가 불국사 10분 거리예요','역사+테마파크 조합이 경주죠','오전 불국사 오후 경주월드 완벽','여름 통합권이 가성비 최고예요','에버랜드보다 대기 짧아요'],
    thumbnails:['경주월드와 경주 시가지 구도','캘리포니아비치 파도풀','동궁과 월지 야경 연계','코스 지도','경주월드 퍼레이드'],
    captions:{youtube:'경주월드 꿀팁 — 불국사 10분 거리예요 🏰\n\n오전 불국사→오후 경주월드→저녁 동궁 야경!\n경주 완벽 하루 코스\n\n📍 경북 경주시 보문관광단지 경주월드\n🏰 여름 캘리포니아비치 통합권 저렴\n\n#경주월드 #경주여행 #경북여행 #불국사 #역사+테마파크',instagram:'경주월드 불국사 10분 거리예요 🏰\n\n오전 불국사→오후 경주월드→저녁 동궁 야경 ✨\n경주 완벽 하루 코스\n\n📍 경북 경주 보문단지\n\n#경주월드 #경주여행 #경북 #불국사 #GemKorea',tiktok:'경주월드 꿀팁 🏰 불국사가 10분 거리예요! 오전 불국사→오후 경주월드→저녁 동궁야경 // 역사+테마파크 한 도시에 다 있는 경주 #경주월드 #경주여행 #경북'},
    hashtags:{korean:['#한국여행','#경북여행','#경주여행','#테마파크','#GemKorea'],place_specific:['#경주월드','#불국사10분','#경주완벽코스','#캘리포니아비치']}
  },
  {
    experience_id:'EX-JJ-FAM-001', experience_name:'제주 신화테마파크', category_sub:'테마파크', region:'제주특별자치도',
    script_30s:'오늘은 제주 신화테마파크에 왔어요. 2017년 개장한 제주 최대 리조트 테마파크예요. 근데 아무도 안 알려주는 게 있어요 — 테마파크 입장권에 한라산 신화를 테마로 한 야외 공연이 포함돼요. 그 공연이 다른 곳에서 못 보는 제주 신화 콘텐츠예요. 너무 제주 신화를 이렇게 체험할 수 있어서 좋았습니다.',
    script_60s:'오늘은 제주 서귀포 신화테마파크에 왔어요. 2017년 개장한 제주 최대 복합 리조트로 5성급 호텔·카지노·워터파크·테마파크가 한 단지에 있어요. 근데 아무도 안 알려주는 꿀팁 하나 — 신화테마파크 어트랙션들이 한국·중국·서양 신화를 테마로 구성되어 있어요. 이 중 제주 신화를 테마로 한 어트랙션과 공연이 있는데, 제주 창세 신화 속 설문대할망·자청비·강림도령 이야기를 체험할 수 있어요. 이 콘텐츠는 신화테마파크에서만 볼 수 있어요. 저녁 야외 공연이 특히 아름다운데 호텔 패키지로 오면 포함돼요. 워터파크와 세트로 하루 종일 즐기면 제주 여행 최고의 효율이에요. 너무 제주 신화가 이렇게 살아있는 공간이라서 좋았습니다.',
    secret_tip:'제주 창세 신화 테마 어트랙션+야외 공연 — 설문대할망·자청비·강림도령 이야기 체험. 신화테마파크에서만 볼 수 있는 독점 콘텐츠. 저녁 야외 공연이 하이라이트. 워터파크 세트 코스',
    filming_guide:'제주 신화 테마 어트랙션 내부 장면. 야외 공연 설문대할망 대형 조형물. 워터파크와 한라산 배경 동시 구도.',
    broll_ideas:['제주 신화 테마 어트랙션 내부','설문대할망 야외 공연 대형 조형물','워터파크+한라산 배경 구도','신화테마파크 야경 전경','야외 공연 불꽃 퍼포먼스'],
    hooks:['제주 신화를 체험할 수 있는 테마파크','설문대할망 공연이 여기 있어요','제주 신화 콘텐츠 독점 아는 사람?','워터파크+신화공연 세트가 최고','제주 최대 리조트 테마파크 꿀팁'],
    thumbnails:['신화 테마 어트랙션 내부','설문대할망 야외 공연','워터파크+한라산 구도','신화테마파크 야경','불꽃 퍼포먼스'],
    captions:{youtube:'제주 신화테마파크 — 제주 신화 체험이 여기 있어요 🌋\n\n설문대할망·자청비 제주 창세 신화 어트랙션!\n야외 공연이 하이라이트\n\n📍 제주 서귀포시 신화테마파크\n🌋 워터파크+신화공연 세트 코스 추천\n\n#신화테마파크 #제주여행 #서귀포 #제주신화 #테마파크',instagram:'제주 신화테마파크 설문대할망 공연 봤어요 🌋\n\n제주 창세 신화 체험 여기서만 가능 ✨\n워터파크+신화 공연 세트가 최고\n\n📍 제주 서귀포 신화테마파크\n\n#신화테마파크 #제주여행 #설문대할망 #GemKorea',tiktok:'신화테마파크 꿀팁 🌋 제주 창세 신화 설문대할망 체험이 여기 있어요! 야외 공연이 진짜 볼만함 // 워터파크+신화공연 세트 코스 #신화테마파크 #제주여행 #제주신화'},
    hashtags:{korean:['#한국여행','#제주여행','#서귀포','#테마파크','#GemKorea'],place_specific:['#신화테마파크','#제주신화','#설문대할망','#신화테마야외공연']}
  },
  {
    experience_id:'EX-GN-FAM-001', experience_name:'통도환타지아', category_sub:'테마파크', region:'경상남도',
    script_30s:'오늘은 경남 양산 통도환타지아에 왔어요. 40년 영남권 대표 테마파크예요. 근데 아무도 안 알려주는 게 있어요 — 통도환타지아 바로 옆이 통도사예요. 아침에 통도사 소나무 숲길 걷고 오후에 테마파크 타면 완벽해요. 너무 사찰+테마파크 조합이 이 곳 뿐이라서 좋았습니다.',
    script_60s:'오늘은 경남 양산 통도환타지아에 왔어요. 1984년 개장해서 40년 역사를 자랑하는 영남권 대표 테마파크예요. 롤러코스터·바이킹·자이로드롭 등 30여 가지 어트랙션이 있어요. 근데 아무도 안 알려주는 꿀팁 하나 — 통도환타지아 바로 옆이 통도사예요. 한국 3대 사찰 통도사가 차로 5분 거리예요. 오전에 통도사 무풍한송로 소나무 숲길을 걸으면서 템플스테이 분위기를 느끼고, 오후에 통도환타지아에서 어트랙션을 타면 영남권 완벽한 하루 코스가 돼요. 7~8월에 통도사 연꽃과 환타지아 어트랙션을 같은 날에 즐기는 게 가장 알찬 양산 여행이에요. 너무 사찰과 테마파크가 차로 5분 거리라는 조합이 세계에서 여기뿐인 것 같아서 좋았습니다.',
    secret_tip:'통도환타지아 옆 통도사 5분 — 오전 통도사 소나무 숲길+오후 테마파크 영남 완벽 코스. 7~8월 통도사 연꽃 시즌 최고. 에버랜드 대비 대기 적어 어린이 동반 추천',
    filming_guide:'통도환타지아 어트랙션과 멀리 통도사 소나무 숲 동시 구도. 롤러코스터 탑승 표정. 통도사 무풍한송로 소나무 숲길.',
    broll_ideas:['어트랙션+통도사 소나무 숲 동시 구도','롤러코스터 탑승 표정','통도사 소나무 숲길 무풍한송로','바이킹 탑승 순간','통도환타지아 야경 전경'],
    hooks:['통도환타지아 옆이 통도사예요','사찰+테마파크 5분 거리 여기뿐이에요','오전 통도사 오후 테마파크 코스','영남권 40년 전통 테마파크 꿀팁','에버랜드보다 대기 적어요'],
    thumbnails:['어트랙션+통도사 동시 구도','롤러코스터 탑승 표정','통도사 소나무 숲길','바이킹 순간','야경 전경'],
    captions:{youtube:'통도환타지아 꿀팁 — 옆에 통도사 있어요 5분 거리 🎡\n\n오전 사찰+오후 테마파크 영남 완벽 코스!\n사찰+테마파크 조합 세계에서 여기뿐\n\n📍 경남 양산시 통도환타지아\n🎡 통도사: 차로 5분 / 7~8월 연꽃 시즌 추천\n\n#통도환타지아 #양산 #경남여행 #통도사 #테마파크',instagram:'통도환타지아 통도사가 5분 거리예요 🎡\n\n오전 통도사+오후 테마파크 영남 완벽 코스 ✨\n사찰+테마파크 조합 여기뿐이에요\n\n📍 경남 양산 통도환타지아\n\n#통도환타지아 #양산여행 #경남 #통도사 #GemKorea',tiktok:'통도환타지아 꿀팁 🎡 바로 옆이 통도사예요! 오전 사찰 소나무 숲 걷고 오후에 테마파크 // 사찰+테마파크 5분 거리 조합 세계에서 여기뿐 #통도환타지아 #양산여행 #경남'},
    hashtags:{korean:['#한국여행','#경남여행','#양산여행','#테마파크','#GemKorea'],place_specific:['#통도환타지아','#통도사5분','#영남완벽코스','#사찰+테마파크']}
  },
  {
    experience_id:'EX-GG-WAT-001', experience_name:'캐리비안베이 워터파크', category_sub:'워터파크', region:'경기도',
    script_30s:'오늘은 캐리비안베이에 왔어요. 아시아 최대 규모 워터파크예요. 근데 아무도 안 알려주는 게 있어요 — 오픈 첫날 또는 개장 직후 30분이 모든 슬라이드 대기가 0분이에요. 그 골든 타임에 무서운 슬라이드부터 타야 해요. 너무 타이밍이 워터파크의 핵심이라서 좋았습니다.',
    script_60s:'오늘은 경기도 용인 에버랜드 옆 캐리비안베이에 왔어요. 아시아 최대 규모의 워터파크예요. 파도풀·워터슬라이드·유수풀·실내 스파까지 다 있어요. 여름엔 대기 줄이 길어서 전략이 중요해요. 근데 아무도 안 알려주는 꿀팁 하나 — 캐리비안베이 개장 직후 30~40분이 모든 슬라이드 대기가 가장 짧아요. 10시 개장이면 10시~10시 30분 사이에 가장 무서운 슬라이드·인기 슬라이드를 먼저 타야 해요. 그 이후에는 대기가 급격히 늘어요. 그리고 오후 2~3시에 한 번 더 대기가 줄어드는 시간이 있어요. 점심 먹으러 나가는 사람들이 많아서예요. 이 두 타임을 잘 이용하면 하루에 15개 이상 슬라이드를 탈 수 있어요. 너무 타이밍이 워터파크의 절반이라는 걸 알게 돼서 좋았습니다.',
    secret_tip:'개장 직후 10~10시 30분 골든 타임 — 모든 슬라이드 대기 가장 짧음. 오후 2~3시 2차 골든 타임 (점심 이탈자). 이 두 타임에 인기 슬라이드 집중. 캐리비안베이 앱 대기 실시간 확인',
    filming_guide:'개장 직후 텅 빈 슬라이드 대기 줄. 파도풀 파도 오는 순간 슬로우. 가장 높은 슬라이드 탑승 표정.',
    broll_ideas:['개장 직후 텅 빈 슬라이드 대기줄','파도풀 파도 오는 순간 슬로우','최고 슬라이드 탑승 표정','캐리비안베이 전체 파노라마','유수풀 여유롭게 흘러가기'],
    hooks:['캐리비안베이 개장 직후 30분이 황금이에요','모든 슬라이드 대기 0분 타임 있어요','타이밍이 워터파크의 절반이에요','오후 2~3시 2차 골든 타임도 있어요','아시아 최대 워터파크 전략 공개'],
    thumbnails:['텅 빈 슬라이드 대기줄','파도풀 슬로우','슬라이드 탑승 표정','전체 파노라마','유수풀 흘러가기'],
    captions:{youtube:'캐리비안베이 꿀팁 — 개장 직후 30분이 황금이에요 💧\n\n모든 슬라이드 대기 최소화!\n오후 2~3시 2차 골든 타임도 있어요\n\n📍 경기도 용인시 캐리비안베이\n💧 개장 직후 10~10:30 + 오후 2~3시 골든 타임\n\n#캐리비안베이 #용인 #워터파크 #경기여행 #여름여행',instagram:'캐리비안베이 개장 직후 30분이 황금이에요 💧\n\n모든 슬라이드 대기 최소 시간 ✨\n타이밍이 워터파크 절반이에요\n\n📍 경기 용인 캐리비안베이\n\n#캐리비안베이 #용인 #워터파크 #GemKorea',tiktok:'캐리비안베이 꿀팁 💧 개장 직후 30분이 골든 타임! 모든 슬라이드 대기 0분 // 오후 2~3시 2차 골든 타임까지 알면 완벽 전략 #캐리비안베이 #용인 #워터파크 #여름'},
    hashtags:{korean:['#한국여행','#경기여행','#용인','#워터파크','#GemKorea'],place_specific:['#캐리비안베이','#개장직후골든타임','#아시아최대워터파크','#워터파크전략']}
  },
  {
    experience_id:'EX-GW-WAT-001', experience_name:'오션월드 워터파크', category_sub:'워터파크', region:'강원도',
    script_30s:'오늘은 홍천 오션월드에 왔어요. 강원도 대표 워터파크예요. 근데 아무도 안 알려주는 게 있어요 — 오션월드 인공 파도풀이 아시아 최대예요. 파도가 실제 해변 파도처럼 세요. 그 파도에 몸을 맡기는 게 동해 서핑이랑 느낌이 비슷해요. 너무 실내에서 서핑 비슷한 경험을 할 수 있어서 좋았습니다.',
    script_60s:'오늘은 강원도 홍천 피닉스파크 오션월드에 왔어요. 강원도 대표 워터파크로 아시아 최대 인공 파도풀이 있어요. 서울에서 1시간 30분이고 강원도 자연 속에서 즐기는 워터파크라 경치도 좋아요. 근데 아무도 안 알려주는 꿀팁 하나 — 오션월드 인공 파도풀이 진짜 파도를 만들어요. 보통 워터파크 파도풀이 잔잔한 파도인데 오션월드는 시간에 따라 파도 크기가 달라져요. 매 정시에 가장 큰 파도가 나오는 타임이 있어요. 그 순간 파도풀 한가운데에 있으면 몸이 공중에 뜨는 느낌이 나요. 동해 서핑 입문이랑 비슷한 감각이에요. 이 파도 타임을 미리 확인하고 파도풀 중앙에 있으면 워터파크 최고 체험이에요. 너무 인공 파도가 이렇게 셀 수 있다는 게 좋았습니다.',
    secret_tip:'매 정시 최대 파도 타임 — 파도풀 중앙에서 가장 큰 파도 체험. 몸이 뜨는 느낌 동해 서핑 입문이랑 비슷. 오션월드 파도 타임 안내판 확인 후 5분 전 중앙 위치 선점',
    filming_guide:'최대 파도 타임 파도풀 파도 슬로우. 몸이 파도에 들리는 순간. 강원도 산 배경 오션월드 전경.',
    broll_ideas:['최대 파도 슬로우 촬영','몸이 파도에 들리는 순간','강원도 산 배경 오션월드 전경','아시아 최대 파도풀 파노라마','워터슬라이드 탑승 표정'],
    hooks:['오션월드 파도풀이 아시아 최대예요','매 정시 파도 크기가 달라요','파도에 몸이 뜨는 그 순간','동해 서핑이랑 비슷한 느낌이에요','강원도 자연 속 워터파크 꿀팁'],
    thumbnails:['최대 파도 슬로우','몸이 파도에 들리는 순간','강원도 산 배경 전경','아시아 최대 파도풀','워터슬라이드 표정'],
    captions:{youtube:'오션월드 꿀팁 — 매 정시 최대 파도 타임 있어요 🌊\n\n파도풀 중앙에서 몸이 뜨는 느낌!\n동해 서핑 입문이랑 비슷한 감각\n\n📍 강원도 홍천군 피닉스파크 오션월드\n🌊 파도 타임: 매 정시 최대 파도 (안내판 확인)\n\n#오션월드 #홍천 #강원도여행 #워터파크 #파도풀',instagram:'오션월드 매 정시 최대 파도 타임 있어요 🌊\n\n파도풀 중앙에서 몸이 뜨는 느낌 ✨\n동해 서핑 입문이랑 비슷해요\n\n📍 강원 홍천 오션월드\n\n#오션월드 #홍천여행 #강원도 #워터파크 #GemKorea',tiktok:'오션월드 꿀팁 🌊 매 정시에 파도가 가장 세요! 파도풀 중앙에서 몸이 뜨는 느낌 // 아시아 최대 인공 파도풀 동해 서핑 비슷한 감각 #오션월드 #홍천여행 #강원도'},
    hashtags:{korean:['#한국여행','#강원도여행','#홍천여행','#워터파크','#GemKorea'],place_specific:['#오션월드','#아시아최대파도풀','#매정시최대파도','#강원도워터파크']}
  },
  {
    experience_id:'EX-GW-SKI-001', experience_name:'용평리조트 스키장', category_sub:'스키/겨울 레포츠', region:'강원도',
    script_30s:'오늘은 용평리조트 스키장에 왔어요. 2018 평창올림픽 경기장이에요. 근데 아무도 안 알려주는 게 있어요 — 올림픽 슬로프 드래곤픽을 일반인도 탈 수 있어요. 올림픽 선수들이 내려온 그 슬로프 위에 서면 느낌이 달라요. 너무 올림픽 현장에 서있는 기분이라서 좋았습니다.',
    script_60s:'오늘은 강원도 평창 용평리조트 스키장에 왔어요. 1975년 개장한 국내 최초 대규모 스키장으로 2018 평창동계올림픽 알파인스키 경기장이에요. 31개 슬로프와 15개 리프트가 있어요. 근데 아무도 안 알려주는 꿀팁 하나 — 용평에는 올림픽 알파인스키 경기가 열렸던 드래곤픽 슬로프가 있어요. 이 슬로프는 올림픽 때 금메달리스트들이 내려온 코스예요. 일반 스키어들도 이 슬로프를 탈 수 있어요. 올림픽 선수들이 내려온 그 경사를 내 스키로 내려가는 순간 느낌이 완전히 달라요. 중급 이상 실력이면 도전할 수 있어요. 리조트 안에 올림픽 선수들의 기록과 메달이 전시된 올림픽 홀도 있어요. 너무 올림픽 슬로프를 직접 타는 경험이라서 좋았습니다.',
    secret_tip:'드래곤픽 슬로프 — 2018 올림픽 알파인스키 금메달 코스. 일반인도 탑승 가능 (중급 이상). 올림픽 홀 메달·기록 전시 관람 포함. 야간 스키 추천 (조명+오색 조명 슬로프)',
    filming_guide:'드래곤픽 슬로프 상단에서 내려다보는 경사 (올림픽 시선). 야간 스키 슬로프 조명 광각. 올림픽 홀 메달 전시 클로즈업.',
    broll_ideas:['드래곤픽 슬로프 상단 경사 시선','야간 스키 조명 슬로프 광각','올림픽 홀 메달 전시','설원 위 리프트 파노라마','스키 탑승 속도감 장면'],
    hooks:['올림픽 선수들이 내려온 슬로프 탔어요','드래곤픽이 2018 금메달 코스예요','일반인도 올림픽 슬로프 도전 가능','그 경사 위에 서는 순간이 달라요','야간 스키 슬로프 조명이 예뻐요'],
    thumbnails:['드래곤픽 슬로프 상단 시선','야간 스키 조명 슬로프','올림픽 홀 메달 전시','리프트 설원 파노라마','스키 속도감'],
    captions:{youtube:'용평 스키장 꿀팁 — 올림픽 금메달 슬로프 탔어요 ⛷️\n\n드래곤픽 = 2018 평창올림픽 알파인스키 경기 코스!\n일반인도 탑승 가능 (중급 이상)\n\n📍 강원도 평창 용평리조트\n⛷️ 드래곤픽+올림픽 홀 코스 추천\n\n#용평리조트 #평창 #강원도여행 #스키 #2018올림픽',instagram:'용평 드래곤픽 슬로프 2018 올림픽 코스 탔어요 ⛷️\n\n금메달리스트들이 내려온 그 경사 ✨\n일반인도 탈 수 있어요\n\n📍 강원 평창 용평리조트\n\n#용평리조트 #평창여행 #강원도 #스키 #GemKorea',tiktok:'용평리조트 꿀팁 ⛷️ 드래곤픽 슬로프가 2018 올림픽 금메달 코스예요! 일반인도 탑승 가능 중급 이상 // 그 경사 위에 서는 순간 느낌 달라요 #용평리조트 #평창여행 #강원도'},
    hashtags:{korean:['#한국여행','#강원도여행','#평창여행','#스키','#GemKorea'],place_specific:['#용평리조트','#드래곤픽','#2018올림픽슬로프','#야간스키']}
  },
  {
    experience_id:'EX-GW-SKI-002', experience_name:'하이원리조트 스키장', category_sub:'스키/겨울 레포츠', region:'강원도',
    script_30s:'오늘은 하이원리조트 스키장에 왔어요. 해발 1340m 강원도 최고 고지대 스키장이에요. 근데 아무도 안 알려주는 게 있어요 — 하이원에서 인접한 정선 5일장 당일치기가 가능해요. 스키 타고 5일장에서 곤드레밥 먹는 조합이 진짜예요. 너무 스키+전통시장이 한 지역에 있어서 좋았습니다.',
    script_60s:'오늘은 강원도 정선 하이원리조트 스키장에 왔어요. 해발 1,340m로 한국 스키장 중 가장 높은 곳에 위치해 적설량이 많고 설질이 좋아요. 27개 코스와 최장 5.8km 슬로프가 있어요. 근데 아무도 안 알려주는 꿀팁 하나 — 하이원은 강원도 정선에 있어요. 정선은 아리랑의 고장이자 정선 5일장으로 유명한 곳이에요. 하이원에서 스키 타고 나서 정선 5일장(매월 2·7·12·17·22·27일)에 들르면 막국수·곤드레밥·황기삼계탕을 먹을 수 있어요. 오전 스키+오후 5일장 먹거리 투어가 강원도 겨울 완벽 코스예요. 전국에서 스키장과 전통 5일장이 이렇게 가까운 곳은 하이원뿐이에요. 너무 스키+전통시장 조합이 여기뿐이라서 좋았습니다.',
    secret_tip:'하이원 스키 후 정선 5일장 당일치기 — 막국수·곤드레밥·황기삼계탕 정선 먹거리. 5일장 날짜: 2·7·12·17·22·27일. 전국 유일 스키장+전통시장 당일치기 조합',
    filming_guide:'1340m 설원 파노라마 (가장 고지대 느낌). 최장 슬로프 5.8km 하강 영상. 정선 5일장 막국수 클로즈업.',
    broll_ideas:['1340m 설원 파노라마','최장 5.8km 슬로프 하강','정선 5일장 막국수 클로즈업','하이원 곤돌라에서 조망','야간 스키 조명'],
    hooks:['하이원에서 정선 5일장 당일치기 돼요','스키+전통시장 조합 전국 유일이에요','해발 1340m 강원도 최고 고지대','곤드레밥 먹으러 정선 들른 후기','하이원 5일장 날짜 꿀팁'],
    thumbnails:['1340m 설원 파노라마','5.8km 하강 영상','정선 5일장 막국수','곤돌라 조망','야간 스키 조명'],
    captions:{youtube:'하이원리조트 꿀팁 — 정선 5일장 당일치기 돼요 ⛷️\n\n스키+전통시장 조합 전국 유일!\n막국수·곤드레밥이 기다려요\n\n📍 강원도 정선군 하이원리조트\n⛷️ 5일장 날짜: 2·7·12·17·22·27일\n\n#하이원리조트 #정선 #강원도여행 #스키 #정선5일장',instagram:'하이원리조트 스키 후 정선 5일장 당일치기 했어요 ⛷️\n\n스키+전통시장 조합 전국 유일 ✨\n곤드레밥 진짜 맛있어요\n\n📍 강원 정선 하이원리조트\n\n#하이원리조트 #정선여행 #강원도 #스키 #GemKorea',tiktok:'하이원리조트 꿀팁 ⛷️ 스키 타고 정선 5일장 당일치기 돼요! 막국수·곤드레밥 먹으러 가면 완벽한 강원 겨울 // 전국 유일 스키장+전통시장 조합 #하이원리조트 #정선여행 #강원도'},
    hashtags:{korean:['#한국여행','#강원도여행','#정선여행','#스키','#GemKorea'],place_specific:['#하이원리조트','#정선5일장','#스키장+전통시장','#해발1340m']}
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
