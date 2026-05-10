const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const now = new Date().toISOString().slice(0,19);

const newExps = [
  {experience_id:'EX-GW-NAT-060',name:'속초 청초호 카약+영금정',category_main:'문화/체험',category_sub:'어드벤처/레포츠',region_main:'GW',region_sub:'강원특별자치도 속초시',address:'강원특별자치도 속초시 청초호 일원',lat:38.2022,lng:128.5872,price:'카약 1인 20,000원~',duration:'2~3시간',reservation_required:true,target_user:['커플','개인','가족'],nearby_places:[],related_heritage_ids:[],short_description:'속초 청초호에서 카약을 타고 영금정 바위 해안까지 이동하는 해양 레저 체험이다. 잔잔한 청초호에서 카약을 배우고 동해 바다로 나가 설악산을 배경으로 패들링하는 특별한 경험이다.',source_urls:['https://www.sokcho.go.kr/'],data_confidence:'high',tags:['청초호카약','영금정','속초','강원','카약','해양레저','설악산배경'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'seasonal',operating_hours:'5~10월',phone:'033-639-2690'},
  {experience_id:'EX-JN-NAT-070',name:'구례 화엄사 가을 단풍',category_main:'문화/체험',category_sub:'자연체험',region_main:'JN',region_sub:'전라남도 구례군',address:'전라남도 구례군 마산면 화엄사로 539',lat:35.2156,lng:127.5053,price:'성인 4,000원',duration:'2~3시간',reservation_required:false,target_user:['가족','커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'지리산 자락 화엄사에서 10~11월 가을 단풍을 감상하는 체험이다. 화엄사 각황전과 계곡 단풍이 어우러지는 전남 최고 단풍 사찰로 구례 산수유 마을과 함께 구례 가을 완벽 코스다.',source_urls:['https://www.hwaeomsa.org/'],data_confidence:'high',tags:['화엄사단풍','구례','전남','지리산','각황전','가을트레킹','단풍'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'10~11월 단풍 시즌',phone:'061-782-7600'},
  {experience_id:'EX-GN-NAT-068',name:'밀양 임천서원+영남루 투어',category_main:'문화/체험',category_sub:'역사 체험',region_main:'GN',region_sub:'경상남도 밀양시',address:'경상남도 밀양시 중앙로 324 영남루',lat:35.4939,lng:128.7436,price:'무료',duration:'1~2시간',reservation_required:false,target_user:['개인','가족','커플'],nearby_places:[],related_heritage_ids:[],short_description:'관동팔경 버금가는 영남루와 밀양 임천서원을 탐방하는 역사 체험이다. 영남루는 밀양강이 내려다보이는 조선 시대 누각으로 한국 3대 누각 중 하나이며 얼음골·표충사와 함께 밀양 완벽 역사 코스다.',source_urls:['https://www.miryang.go.kr/'],data_confidence:'high',tags:['영남루','밀양','경남','조선3대누각','밀양강','임천서원','역사'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (무료)',phone:'055-359-5638'},
  {experience_id:'EX-GG-NAT-063',name:'고양 행주산성+한강변 봄꽃',category_main:'문화/체험',category_sub:'자연체험',region_main:'GG',region_sub:'경기도 고양시',address:'경기도 고양시 덕양구 행주로 15번길 89',lat:37.6089,lng:126.8366,price:'행주산성 성인 1,000원',duration:'2~3시간',reservation_required:false,target_user:['가족','커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'행주산성 역사 탐방 후 한강변 봄꽃을 즐기는 고양 봄 코스다. 임진왜란 행주대첩 현장에서 역사를 이해하고 한강변 유채꽃·벚꽃이 피는 봄 시즌에 방문하면 역사+자연의 완벽한 봄 여행이 된다.',source_urls:['https://www.goyang.go.kr/'],data_confidence:'high',tags:['행주산성봄꽃','고양','경기','행주대첩','한강변','봄꽃','역사+자연'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'3~4월 봄꽃 시즌',phone:'031-924-9520'},
  {experience_id:'EX-JN-NAT-071',name:'광양 망덕산 편백 숲길',category_main:'문화/체험',category_sub:'자연체험',region_main:'JN',region_sub:'전라남도 광양시',address:'전라남도 광양시 봉강면 망덕산 편백 숲',lat:34.9878,lng:127.6350,price:'무료',duration:'2~3시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'광양 망덕산 편백 숲길을 걷는 피톤치드 힐링 트레킹이다. 광양 섬진강 인근에 위치해 매화꽃 시즌에 편백 숲 트레킹과 매화 꽃밭을 동시에 즐기는 광양 봄 완벽 힐링 코스다.',source_urls:['https://www.gwangyang.go.kr/'],data_confidence:'high',tags:['망덕산편백숲','광양','전남','편백','피톤치드','매화꽃','봄힐링'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (무료)',phone:'061-797-2657'},
  {experience_id:'EX-GN-NAT-069',name:'양산 천성산 습지 트레킹',category_main:'문화/체험',category_sub:'자연체험',region_main:'GN',region_sub:'경상남도 양산시',address:'경상남도 양산시 하북면 내원사길 천성산',lat:35.3411,lng:129.0097,price:'무료',duration:'3~4시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'경남 양산 천성산 정상부 고산 습지 화엄늪을 탐방하는 트레킹이다. 해발 800m 고산에 형성된 희귀 습지 생태계를 탐방하며 경남 최고 고산 습지 경관을 즐기는 코스다.',source_urls:['https://www.yangsan.go.kr/'],data_confidence:'high',tags:['천성산습지','화엄늪','양산','경남','고산습지','트레킹','희귀생태'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중',phone:'055-370-2114'},
  {experience_id:'EX-GW-NAT-061',name:'속초 아이들과 설악수련관',category_main:'문화/체험',category_sub:'캠핑/글램핑',region_main:'GW',region_sub:'강원특별자치도 속초시',address:'강원특별자치도 속초시 설악산로 830',lat:38.1186,lng:128.4639,price:'1박 30,000원~',duration:'1박 2일',reservation_required:true,target_user:['가족','어린이'],nearby_places:[],related_heritage_ids:[],short_description:'설악산 입구에 위치한 설악 수련관에서 어린이와 함께하는 숙박 체험이다. 설악산 국립공원 탐방과 야외 모닥불·별 관측을 결합한 가족 캠핑 체험으로 어린이에게 특별한 자연 체험을 선물한다.',source_urls:['https://seorak.knps.or.kr/'],data_confidence:'high',tags:['설악수련관','속초','강원','설악산','어린이캠핑','가족','야외'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'seasonal',operating_hours:'5~10월 (예약 필수)',phone:'033-636-7700'},
  {experience_id:'EX-JN-NAT-072',name:'담양 한옥마을 대나무 악기 체험',category_main:'문화/체험',category_sub:'문화예술',region_main:'JN',region_sub:'전라남도 담양군',address:'전라남도 담양군 담양읍 추성로 일원',lat:35.3179,lng:126.9817,price:'1인 20,000원',duration:'1~2시간',reservation_required:true,target_user:['가족','개인','외국인'],nearby_places:[],related_heritage_ids:[],short_description:'담양 대나무를 이용해 전통 대나무 악기(단소·퉁소·소금)를 만들고 연주하는 체험이다. 대나무의 고장 담양에서 대나무가 악기가 되는 전통 공예 문화를 직접 체험한다.',source_urls:['https://www.damyang.go.kr/'],data_confidence:'high',tags:['담양대나무악기','담양','전남','단소','퉁소','전통악기','대나무공예'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'10:00~17:00',phone:'061-380-2910'},
  {experience_id:'EX-GG-NAT-064',name:'가평 잣나무 숲길 피톤치드',category_main:'문화/체험',category_sub:'자연체험',region_main:'GG',region_sub:'경기도 가평군',address:'경기도 가평군 가평읍 잣나무로 일원',lat:37.8583,lng:127.5097,price:'무료',duration:'1~2시간',reservation_required:false,target_user:['개인','커플','가족'],nearby_places:[],related_heritage_ids:[],short_description:'잣의 고장 가평에서 잣나무 숲길을 걷는 피톤치드 힐링 체험이다. 잣나무 특유의 향기가 가득한 숲길을 산책하며 자연 치유를 즐기고 가을에는 잣나무에서 잣이 떨어지는 장면을 볼 수 있다.',source_urls:['https://www.gapyeong.go.kr/'],data_confidence:'high',tags:['가평잣나무숲','가평','경기','잣나무','피톤치드','삼림욕','힐링'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (무료)',phone:'031-580-2726'},
  {experience_id:'EX-GN-NAT-070',name:'거제 흑진주 몽돌해변 석양',category_main:'문화/체험',category_sub:'자연체험',region_main:'GN',region_sub:'경상남도 거제시',address:'경상남도 거제시 동부면 학동리 몽돌해변',lat:34.8128,lng:128.6897,price:'무료',duration:'1~2시간',reservation_required:false,target_user:['커플','개인','가족'],nearby_places:[],related_heritage_ids:[],short_description:'거제 학동 흑진주 몽돌해변에서 일몰을 감상하는 체험이다. 검은 몽돌 해변 위로 붉은 석양이 지는 장면과 파도 소리가 몽돌에 부딪히는 소리가 어우러지는 거제 최고의 저녁 명소다.',source_urls:['https://www.geoje.go.kr/'],data_confidence:'high',tags:['학동몽돌해변','거제','경남','흑진주','일몰','몽돌','파도소리'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (무료)',phone:'055-639-4172'},
  {experience_id:'EX-GW-NAT-062',name:'평창 봉평 메밀꽃밭 사진 투어',category_main:'문화/체험',category_sub:'자연체험',region_main:'GW',region_sub:'강원특별자치도 평창군',address:'강원특별자치도 평창군 봉평면 메밀꽃밭',lat:37.5658,lng:128.4906,price:'무료',duration:'1~2시간',reservation_required:false,target_user:['커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'평창 봉평 메밀꽃밭에서 8~9월 하얀 메밀꽃을 배경으로 사진을 찍는 체험이다. 이효석 소설 메밀꽃 필 무렵의 배경지 봉평 들판이 하얗게 물드는 장관을 카메라에 담는 사진 여행이다.',source_urls:['https://www.hyoseok.com/'],data_confidence:'high',tags:['봉평메밀꽃밭','평창','강원','메밀꽃','사진투어','이효석','봄'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'8~9월 메밀꽃 시즌',phone:'033-330-2700'},
  {experience_id:'EX-JN-NAT-073',name:'구례 지리산 노고단 일출',category_main:'문화/체험',category_sub:'자연체험',region_main:'JN',region_sub:'전라남도 구례군',address:'전라남도 구례군 마산면 산동로 지리산 노고단',lat:35.3444,lng:127.4614,price:'탐방 신청 필수',duration:'4~5시간',reservation_required:true,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'지리산 노고단에서 새벽 일출을 감상하는 트레킹 체험이다. 해발 1,507m 노고단에서 바라보는 섬진강·남해·구름 바다가 어우러지는 일출이 한국 국립공원 최고 일출 명소 중 하나다.',source_urls:['https://jiri.knps.or.kr/'],data_confidence:'high',tags:['노고단일출','지리산','구례','전남','섬진강','구름바다','새벽트레킹'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'일출 전 탐방 신청',phone:'061-780-7700'}
];

const newShorts = [
  {
    experience_id:'EX-JJ-FES-002', experience_name:'제주 들불축제', category_sub:'축제', region:'제주특별자치도',
    script_30s:'오늘은 제주 새별오름 들불축제에 왔어요. 오름 전체가 불길에 휩싸여요. 근데 아무도 안 알려주는 게 있어요 — 불이 오름 꼭대기 방향으로 올라가요. 바람 방향이 달라서 그래요. 불의 방향이 바람 방향이에요. 너무 불이 자연의 지도를 따른다는 게 좋았습니다.',
    script_60s:'오늘은 제주 애월읍 새별오름에서 정월대보름 들불축제를 봤어요. 오름 전체가 불길에 휩싸이는 장관이 펼쳐지는 제주 전통 방목지 불 놓기 행사예요. 근데 아무도 안 알려주는 꿀팁 하나 — 들불을 볼 때 불이 어떻게 움직이는지 관찰하면 자연의 원리가 보여요. 불은 항상 바람 방향으로 번져요. 그래서 들불 방향이 그날의 실제 바람 방향을 그대로 보여줘요. 날씨 앱이 없어도 불의 방향을 보면 제주 당일 바람 방향을 알 수 있어요. 그리고 불이 오름을 타고 올라가는 속도가 내려오는 속도보다 훨씬 빨라요. 이게 상승 기류 때문이에요. 불이 올라가면서 오름 위쪽 공기를 데워 더 빠르게 올라가요. 너무 불이 자연의 법칙을 그대로 따른다는 게 좋았습니다.',
    secret_tip:'들불 방향 = 실시간 바람 방향 — 날씨 앱 없이 바람 방향 확인 가능. 불이 올라가는 속도가 내려오는 것보다 빠른 이유 = 상승 기류. 이 원리 알면 불 관찰이 달라짐',
    filming_guide:'들불 방향이 바람 방향인 것 설명. 오름 불길 번지는 전체 광각. 소원 풍등 밤하늘 올라가는 장면.',
    broll_ideas:['들불 방향 바람 방향 설명','오름 불길 번지는 광각','소원 풍등 밤하늘','새별오름 불길 전체 실루엣','정월대보름 달과 불'],
    hooks:['들불 방향이 바람 방향이에요','불 보면 오늘 바람 방향 알아요','상승 기류로 올라가는 속도 더 빨라요','자연의 법칙이 불에 담겼어요','제주 들불축제 꿀팁'],
    thumbnails:['들불 방향 바람 설명','오름 불길 광각','소원 풍등 밤하늘','새별오름 실루엣','달과 불'],
    captions:{youtube:'제주 들불축제 — 불 방향이 바람 방향이에요 🔥\n\n날씨 앱 없이 바람 방향 알 수 있어요!\n상승 기류로 올라가는 속도 빠른 이유\n\n📍 제주 애월읍 새별오름 (매년 2~3월)\n🔥 소원 풍등+오름 들불 세트\n\n#제주들불축제 #새별오름 #제주여행 #정월대보름 #들불방향',instagram:'제주 들불축제 불 방향이 바람 방향이에요 🔥\n\n자연의 법칙이 불에 담겼어요 ✨\n날씨 앱 없이 바람 방향 확인 가능\n\n📍 제주 새별오름\n\n#제주들불축제 #새별오름 #제주여행 #들불자연원리 #GemKorea',tiktok:'제주 들불축제 꿀팁 🔥 들불 방향이 바람 방향이에요! 날씨 앱 없이 바람 방향 알 수 있음 // 올라가는 속도 빠른 이유 상승 기류 자연 원리 #제주들불축제 #새별오름 #제주여행'},
    hashtags:{korean:['#한국여행','#제주여행','#들불축제','#정월대보름','#GemKorea'],place_specific:['#제주들불축제','#새별오름들불','#들불방향바람','#상승기류들불']}
  },
  {
    experience_id:'EX-GG-SPT-002', experience_name:'인천 SSG랜더스필드 야구 관람', category_sub:'스포츠 체험', region:'인천광역시',
    script_30s:'오늘은 인천 SSG랜더스필드에서 야구를 봤어요. 근데 아무도 안 알려주는 게 있어요 — 한국 야구장 응원봉이 빛이 나요. LED 응원봉이에요. 전 관중이 같은 색으로 빛나는 그 장면이 다른 나라 야구에선 없어요. 너무 한국 야구만의 장면이라서 좋았습니다.',
    script_60s:'오늘은 인천 SSG랜더스필드에서 SSG 랜더스 홈경기를 관람했어요. 한국 프로야구를 직접 경험하는 특별한 체험이에요. 치킨·맥주·핫도그와 함께 응원 문화를 즐겨요. 근데 아무도 안 알려주는 꿀팁 하나 — 한국 야구장의 가장 독특한 문화가 LED 응원봉이에요. 구단별로 다른 색의 응원봉을 흔들면 응원봉 끝 LED가 빛나요. 전 관중이 같은 타이밍에 흔들면 관중석 전체가 하나의 색으로 빛나요. 이게 한국 프로야구만의 독특한 문화예요. 미국·일본·유럽 야구에도 이런 응원 방식은 없어요. 선수가 타석에 들어서면 선수 별명 전용 응원가가 나오고 전 관중이 함께 노래하고 응원봉이 일제히 빛나는 그 순간이 K-야구의 최고 매력이에요. 너무 LED 응원봉이 한국만의 야구 문화라는 게 좋았습니다.',
    secret_tip:'LED 응원봉 전 관중 일제히 빛나는 장면 = 한국 야구만의 문화 — 미국·일본 없는 K-야구 고유 문화. 선수 전용 응원가+응원봉 세트가 야구장 최고 순간. 인천공항 30분 거리',
    filming_guide:'전 관중 LED 응원봉 빛나는 장노출. 선수 타석 응원가+응원봉 동시 장면. 인천 야구장 야경 전체 광각.',
    broll_ideas:['전 관중 LED 응원봉 빛나는 장노출','선수 응원가+응원봉 동시','인천 야구장 야경 전체','치킨 맥주 야구 세트','응원단 퍼포먼스'],
    hooks:['한국 야구장 LED 응원봉이 세계 유일이에요','전 관중 같은 색으로 빛나요','미국 일본엔 없는 K-야구 문화','선수 전용 응원가랑 세트예요','인천 야구 관람 꿀팁'],
    thumbnails:['LED 응원봉 빛나는 장노출','응원가+응원봉 세트','야구장 야경 전체','치킨 맥주','응원단'],
    captions:{youtube:'인천 SSG랜더스필드 — LED 응원봉이 세계 유일이에요 ⚾\n\n전 관중 같은 색으로 빛나는 K-야구 문화!\n미국·일본에는 없어요\n\n📍 인천광역시 미추홀구 SSG랜더스필드\n⚾ 인천공항 30분 거리\n\n#인천야구 #SSG랜더스 #인천여행 #LED응원봉 #K야구문화',instagram:'인천 SSG랜더스 LED 응원봉이 세계 유일이에요 ⚾\n\n전 관중 같은 색으로 빛나는 K-야구 문화 ✨\n미국 일본엔 없는 한국만의 문화\n\n📍 인천 SSG랜더스필드\n\n#인천야구 #SSG랜더스 #인천여행 #LED응원봉 #GemKorea',tiktok:'인천 야구 꿀팁 ⚾ LED 응원봉이 K-야구만의 세계 유일 문화예요! 전 관중 같은 색으로 빛나는 그 장면 // 선수 전용 응원가+응원봉 세트가 최고 #인천야구 #SSG랜더스 #인천여행'},
    hashtags:{korean:['#한국여행','#인천여행','#야구','#K야구','#GemKorea'],place_specific:['#인천SSG랜더스','#LED응원봉세계유일','#K야구응원봉문화','#인천야구장']}
  },
  {
    experience_id:'EX-JN-AGR-002', experience_name:'장흥 표고버섯 따기 체험', category_sub:'농촌 체험', region:'전라남도',
    script_30s:'오늘은 장흥 표고버섯 농장에 왔어요. 전국 표고 30% 여기서 나요. 근데 아무도 안 알려주는 게 있어요 — 표고버섯은 갓이 70% 정도 펴진 게 최고예요. 완전히 피면 향이 날아가요. 그 타이밍이 비결이에요. 너무 70%가 완벽이라는 게 좋았습니다.',
    script_60s:'오늘은 전남 장흥 표고버섯 농장에서 표고버섯 따기 체험을 했어요. 장흥은 전국 표고버섯 생산의 30%를 담당하는 최대 산지예요. 원목에서 자라는 참나무 원목 표고버섯을 직접 따는 체험이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 표고버섯 따는 최적 타이밍이 있어요. 버섯 갓이 70% 정도 펴진 상태가 가장 맛있어요. 갓이 완전히 펴지면 포자를 날리기 시작해서 향기와 맛이 떨어져요. 그리고 갓이 너무 덜 핀 것은 아직 덜 자란 거예요. 70% 정도 펴진 버섯이 향이 가장 풍부해요. 이 사실을 알고 버섯을 고르면 마트에서 버섯 살 때도 달라요. 너무 70%가 완벽이라는 게 좋았습니다.',
    secret_tip:'표고버섯 갓 70% 개방 = 최고 향기·맛 — 완전 개방하면 포자 날리며 향미 저하. 이 사실 알면 마트 표고 선택도 달라짐. 장흥 편백 우드랜드 세트 코스',
    filming_guide:'갓 70% 펴진 표고 클로즈업. 원목에서 따는 손 동작. 갓 크기별 비교 (덜 핀/70%/완전 핀).',
    broll_ideas:['갓 70% 표고 클로즈업','원목에서 따는 손','갓 크기별 비교','장흥 표고 원목 농장','즉석 구이 먹기'],
    hooks:['표고버섯 갓 70%가 최고예요','완전히 피면 향이 날아가요','마트 버섯 고를 때도 써요','70%가 완벽한 타이밍이에요','장흥 표고 따기 꿀팁'],
    thumbnails:['갓 70% 표고 클로즈업','원목 따는 손','갓 크기별 비교','장흥 원목 농장','즉석 구이'],
    captions:{youtube:'장흥 표고버섯 따기 — 갓 70%가 최고예요 🍄\n\n완전히 피면 향이 날아가요!\n마트 버섯 고를 때도 활용\n\n📍 전남 장흥군 표고버섯 농장\n🍄 전국 표고 30% 생산 최대 산지\n\n#장흥표고버섯 #장흥 #전남여행 #표고버섯70% #원목표고',instagram:'장흥 표고버섯 따기 갓 70%가 최고예요 🍄\n\n완전히 피면 포자 날리며 향 날아가요 ✨\n이 사실 알면 마트 버섯 고르기도 달라져요\n\n📍 전남 장흥 표고버섯 농장\n\n#장흥표고버섯 #장흥여행 #전남 #표고버섯 #GemKorea',tiktok:'장흥 표고 따기 꿀팁 🍄 갓 70%가 최고예요! 완전히 피면 포자 날리며 향미 줄어듬 // 이 사실 알면 마트 표고버섯 선택도 달라져요 #장흥표고버섯 #장흥여행 #전남'},
    hashtags:{korean:['#한국여행','#전남여행','#장흥여행','#표고버섯','#GemKorea'],place_specific:['#장흥표고버섯따기','#표고갓70%','#원목표고','#표고버섯최고타이밍']}
  },
  {
    experience_id:'EX-GN-SPT-001', experience_name:'부산 세계 수영 선수권 아쿠아틱센터', category_sub:'스포츠 체험', region:'부산광역시',
    script_30s:'오늘은 부산 아쿠아틱센터에서 수영을 했어요. 세계 수영 선수권 경기장이에요. 근데 아무도 안 알려주는 게 있어요 — 50m 레인이 있어요. 일반 수영장은 25m예요. 50m 레인을 처음 헤엄치면 다 왔는데 아직 절반이에요. 너무 거리감이 달라서 좋았습니다.',
    script_60s:'오늘은 부산 사상구 아쿠아틱센터에서 수영을 했어요. 2023 세계수영선수권대회가 열렸던 국제 규격 경기장이에요. 일반 시민도 이용할 수 있어요. 근데 아무도 안 알려주는 꿀팁 하나 — 이 수영장이 일반 수영장과 다른 점이 있어요. 국제 규격 50m 레인이에요. 보통 동네 수영장은 25m인데 여기는 두 배 길어요. 처음 50m 레인을 헤엄치면 다 왔다 싶은 지점이 아직 절반이에요. 그 당혹감이 신기해요. 그리고 수심도 더 깊어요. 국제 규격이라 수영 퍼포먼스가 달라진다는 느낌을 받아요. 세계 선수권 선수들이 헤엄친 그 레인에서 수영하는 경험도 특별해요. 너무 거리감이 달라서 50m가 새로운 도전이 된다는 게 좋았습니다.',
    secret_tip:'50m 국제 규격 레인 = 일반 25m의 두 배 — 처음 헤엄치면 거리감 당혹. 세계 선수권 선수들 레인 직접 체험. 성인 5,000원 입장료. 부산시 관내 최신 수영장',
    filming_guide:'50m 레인 끝까지 보이는 광각 (길이 전달). 세계 선수권 사진 전시와 레인 비교. 수영 중 수중 촬영.',
    broll_ideas:['50m 레인 끝까지 광각','세계 선수권 사진 전시','수영 중 수중 촬영','아쿠아틱센터 외경','다이빙 풀 전경'],
    hooks:['50m 레인이 25m 두 배예요','헤엄치면 거리감이 당혹스러워요','세계 선수권 선수 레인 체험이에요','일반 수영장이랑 다른 느낌','부산 아쿠아틱센터 꿀팁'],
    thumbnails:['50m 레인 광각','세계 선수권 사진','수중 촬영','아쿠아틱센터 외경','다이빙 풀'],
    captions:{youtube:'부산 아쿠아틱센터 — 50m 레인이 25m 두 배예요 🏊\n\n처음 헤엄치면 거리감이 당혹!\n세계 선수권 선수 레인 체험\n\n📍 부산 사상구 아쿠아틱센터\n🏊 성인 5,000원 / 세계수영선수권 경기장\n\n#부산아쿠아틱센터 #부산여행 #50m레인 #세계수영선수권 #수영',instagram:'부산 아쿠아틱센터 50m 레인 두 배 길어요 🏊\n\n처음 헤엄치면 거리감 당혹스러움 ✨\n세계 선수권 선수들 레인 체험\n\n📍 부산 사상구 아쿠아틱센터\n\n#부산아쿠아틱센터 #부산여행 #50m레인 #GemKorea',tiktok:'부산 아쿠아틱센터 꿀팁 🏊 50m 레인이 25m 두 배예요! 처음 헤엄치면 다 왔는데 절반인 당혹감 // 세계 수영 선수권 선수들 레인 직접 체험 5,000원 #부산아쿠아틱센터 #부산여행 #50m레인'},
    hashtags:{korean:['#한국여행','#부산여행','#수영','#50m레인','#GemKorea'],place_specific:['#부산아쿠아틱센터','#50m국제규격레인','#세계수영선수권경기장','#부산수영장']}
  },
  {
    experience_id:'EX-GG-SPT-003', experience_name:'수원 KT위즈파크 야구 관람', category_sub:'스포츠 체험', region:'경기도',
    script_30s:'오늘은 수원 KT위즈파크에서 야구를 봤어요. 화성행궁 옆이에요. 근데 아무도 안 알려주는 게 있어요 — 야구장 3루 쪽 외야에서 화성 성벽이 보여요. 야구장 뒤로 유네스코 성벽이에요. 그 구도가 수원만의 야구 풍경이에요. 너무 역사랑 야구가 공존하는 게 좋았습니다.',
    script_60s:'오늘은 경기도 수원 KT위즈파크에서 KT위즈 홈경기를 관람했어요. 수원화성 바로 옆에 위치한 프로야구 경기장이에요. 근데 아무도 안 알려주는 꿀팁 하나 — KT위즈파크는 유일하게 야구장에서 유네스코 세계유산을 볼 수 있는 구장이에요. 3루 쪽 외야 관중석에서 바라보면 경기장 뒤로 수원화성 성벽이 보여요. 불빛을 받은 화성 성벽과 야구 경기가 동시에 보이는 그 풍경이 전 세계 야구장 중 유일해요. 야구 경기 관람 후 수원화성 야경까지 즐기면 완벽한 수원 저녁 코스가 돼요. 너무 역사와 야구가 공존하는 수원만의 풍경이라서 좋았습니다.',
    secret_tip:'3루 외야석 = 수원화성 성벽 배경 야구 뷰 — 세계 유일 유네스코 세계유산+야구장 동시 조망. 야구 후 화성 야경 세트. 서울 1시간 접근성',
    filming_guide:'3루 외야석에서 화성 성벽+야구 동시 구도. 수원화성 배경 KT위즈파크 야경. 응원봉+성벽 실루엣.',
    broll_ideas:['3루 외야석 화성 성벽+야구 구도','수원화성 배경 야경','응원봉+성벽 실루엣','KT위즈파크 전체 광각','치킨 맥주 야구 세트'],
    hooks:['수원 야구장 뒤로 유네스코 성벽이에요','3루 외야석에서 화성 성벽 보여요','세계 유일 역사+야구 동시 조망','야구 후 화성 야경 세트 코스','수원 KT위즈파크 꿀팁'],
    thumbnails:['화성 성벽+야구 구도','수원화성 배경 야경','응원봉+성벽 실루엣','KT위즈파크 광각','치킨 맥주 세트'],
    captions:{youtube:'수원 KT위즈파크 — 유네스코 성벽이 야구장 뒤에 있어요 ⚾\n\n3루 외야석에서 화성 성벽+야구 동시 조망!\n세계 유일 역사+야구 동시\n\n📍 경기도 수원시 KT위즈파크\n⚾ 3루 외야석 = 화성 성벽 뷰 포인트\n\n#수원KT위즈 #수원야구 #수원화성 #경기여행 #유네스코야구',instagram:'수원 KT위즈파크 유네스코 성벽이 야구장 뒤에 있어요 ⚾\n\n3루 외야석 화성 성벽+야구 세계 유일 ✨\n야구 후 화성 야경 세트 코스\n\n📍 경기 수원 KT위즈파크\n\n#수원KT위즈 #수원야구 #수원화성 #경기 #GemKorea',tiktok:'수원 야구 꿀팁 ⚾ 3루 외야석에서 바라보면 수원화성 성벽이 야구장 뒤로 보여요! 세계 유일 유네스코+야구장 동시 조망 // 야구 후 화성 야경 세트 #수원KT위즈 #수원야구 #수원화성'},
    hashtags:{korean:['#한국여행','#경기여행','#수원여행','#야구','#GemKorea'],place_specific:['#수원KT위즈파크','#화성성벽야구장','#세계유일역사야구','#3루외야석화성뷰']}
  },
  {
    experience_id:'EX-GW-SPT-001', experience_name:'강원 원주 치악산 국립공원 트레킹', category_sub:'자연체험', region:'강원도',
    script_30s:'오늘은 치악산 트레킹을 했어요. 은혜 갚은 꿩 전설이 있는 산이에요. 근데 아무도 안 알려주는 게 있어요 — 치악산 이름이 꿩 치(雉)야이에요. 꿩이 이름을 준 산이에요. 그 전설을 알고 등산하면 달라요. 너무 전설이 지명이 된 게 좋았습니다.',
    script_60s:'오늘은 강원도 원주 치악산 국립공원에서 트레킹을 했어요. 해발 1,288m 비로봉이 주봉인 국립공원이에요. 구룡사 계곡이 아름다운 여름 피서지이자 가을 단풍 명소예요. 근데 아무도 안 알려주는 꿀팁 하나 — 치악산 이름의 뜻이 있어요. 치악(雉岳)의 치(雉)는 꿩이에요. 산 이름에 꿩이 들어간 거예요. 전설에 따르면 치악산에서 한 사냥꾼이 꿩을 구해줬는데 나중에 그 꿩이 은혜를 갚았다는 이야기가 있어요. 그 전설에서 꿩 치 자가 이름이 된 거예요. 이 사실을 알고 치악산에 오르면 꿩을 실제로 보게 될 수도 있어요. 치악산에 야생 꿩이 서식하거든요. 너무 전설이 지명이 됐다는 게 좋았습니다.',
    secret_tip:'치악 = 꿩 치(雉)+산 악(岳) — 은혜 갚은 꿩 전설에서 유래. 야생 꿩 실제 서식. 전설 알고 등산하면 꿩 발견 더 기대됨. 구룡사 계곡 코스가 가장 아름다움',
    filming_guide:'치악산 이름 뜻 설명판 클로즈업. 구룡사 계곡 트레킹 전경. 야생 꿩 (있다면) 포착.',
    broll_ideas:['치악산 이름 설명판','구룡사 계곡 트레킹','야생 꿩 포착 기대','치악산 비로봉 전망','가을 단풍 계곡'],
    hooks:['치악산 이름이 꿩에서 왔어요','은혜 갚은 꿩 전설이에요','야생 꿩이 실제 서식해요','전설 알면 등산이 달라요','원주 치악산 꿀팁'],
    thumbnails:['치악산 이름 설명판','구룡사 계곡 트레킹','야생 꿩 기대','비로봉 전망','가을 단풍'],
    captions:{youtube:'원주 치악산 — 이름이 꿩에서 왔어요 🦚\n\n은혜 갚은 꿩 전설이 지명이 됐어요!\n야생 꿩이 실제 서식해요\n\n📍 강원도 원주시 치악산 국립공원\n🦚 구룡사 계곡 코스가 가장 아름다움\n\n#치악산 #원주 #강원도여행 #꿩전설 #치악산트레킹',instagram:'원주 치악산 이름이 꿩에서 왔어요 🦚\n\n은혜 갚은 꿩 전설이 지명이 된 역사 ✨\n야생 꿩 실제 서식해요\n\n📍 강원 원주 치악산\n\n#치악산 #원주여행 #강원도 #꿩전설 #GemKorea',tiktok:'원주 치악산 꿀팁 🦚 치악산 이름이 꿩 치 자예요! 은혜 갚은 꿩 전설에서 이름이 유래 // 야생 꿩 실제 서식하니 등산 중 발견 기대 #치악산 #원주여행 #강원도'},
    hashtags:{korean:['#한국여행','#강원도여행','#원주여행','#치악산','#GemKorea'],place_specific:['#치악산','#꿩전설지명','#은혜갚은꿩','#구룡사계곡트레킹']}
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
