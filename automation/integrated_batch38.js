const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const now = new Date().toISOString().slice(0,19);

const newExps = [
  {experience_id:'EX-GG-NAT-071',name:'여주 도예 체험 — 고려청자',category_main:'문화/체험',category_sub:'전통공예',region_main:'GG',region_sub:'경기도 여주시',address:'경기도 여주시 신지리 도예촌 일대',lat:37.3319,lng:127.6397,price:'체험 15,000원~',duration:'2~3시간',reservation_required:true,target_user:['개인','커플','가족'],nearby_places:[],related_heritage_ids:[],short_description:'경기도 여주 도예촌에서 고려청자 스타일 도자기를 직접 빚는 체험이다. 여주는 양질의 백토가 나는 지역으로 조선 시대 왕실 도자기 분원이 있던 도예 역사의 고장이다.',source_urls:['https://www.yeoju.go.kr/'],data_confidence:'high',tags:['여주도예체험','여주','경기','도자기','청자','분원','전통공예'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'10:00~17:00',phone:'031-880-4611'},
  {experience_id:'EX-JN-CUL-045',name:'강진 청자박물관 도예 체험',category_main:'문화/체험',category_sub:'전통공예',region_main:'JN',region_sub:'전라남도 강진군',address:'전라남도 강진군 대구면 청자촌길 33',lat:34.6478,lng:126.7139,price:'체험 8,000원~',duration:'1~2시간',reservation_required:false,target_user:['개인','커플','가족'],nearby_places:[],related_heritage_ids:[],short_description:'고려 청자의 본산 강진 청자박물관에서 청자 도예를 직접 체험하는 프로그램이다. 고려 시대 전국 청자 생산량의 60%를 책임진 강진 가마터에서 청자 역사를 배우고 직접 만드는 체험이다.',source_urls:['https://www.gangjin.go.kr/'],data_confidence:'high',tags:['강진청자박물관','강진','전남','고려청자','도예체험','가마터','청자'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00',phone:'061-430-3755'},
  {experience_id:'EX-GN-NAT-080',name:'양산 통도사 산사 체험',category_main:'문화/체험',category_sub:'역사 체험',region_main:'GN',region_sub:'경상남도 양산시',address:'경상남도 양산시 하북면 통도사로 108',lat:35.4903,lng:129.0575,price:'무료 (산사 체험 상이)',duration:'2~3시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'삼보사찰 중 불보사찰 경남 양산 통도사를 탐방하고 산사 체험을 하는 코스다. 한국 3대 사찰 통도사에서 부처님 사리를 모신 적멸보궁을 참배하고 사찰 음식 체험을 즐긴다.',source_urls:['https://www.tongdosa.or.kr/'],data_confidence:'high',tags:['통도사','양산','경남','삼보사찰','불보사찰','적멸보궁','사찰음식'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'08:00~18:00',phone:'055-382-7182'},
  {experience_id:'EX-GW-NAT-070',name:'강릉 커피 거리 바리스타 체험',category_main:'문화/체험',category_sub:'지역 먹거리',region_main:'GW',region_sub:'강원특별자치도 강릉시',address:'강원특별자치도 강릉시 강문동 커피 거리 일대',lat:37.7803,lng:128.9481,price:'체험 10,000원~',duration:'1~2시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'국내 커피 문화의 발상지 강릉에서 바리스타 체험을 즐기는 프로그램이다. 한국 최초 바리스타 박이추가 강릉에 정착하면서 형성된 강릉 커피 거리에서 커피 원두 선별·로스팅·추출 체험을 즐긴다.',source_urls:['https://www.gn.go.kr/'],data_confidence:'high',tags:['강릉커피거리','강릉','강원','커피','바리스타체험','박이추','로스팅'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'10:00~20:00',phone:'033-640-4533'},
  {experience_id:'EX-CB-NAT-044',name:'충주 수안보 온천 족욕',category_main:'문화/체험',category_sub:'웰니스',region_main:'CB',region_sub:'충청북도 충주시',address:'충청북도 충주시 수안보면 온천리 수안보 온천',lat:36.8119,lng:128.0903,price:'무료~성인 8,000원',duration:'1시간',reservation_required:false,target_user:['개인','커플','가족'],nearby_places:[],related_heritage_ids:[],short_description:'한국에서 가장 오래된 자연 온천 충주 수안보 온천에서 족욕을 즐기는 웰니스 체험이다. 고려 시대부터 기록이 남아있는 역사 깊은 수안보 온천에서 알칼리성 탄산수소나트륨 성분 온천수를 즐긴다.',source_urls:['https://www.suanbo.or.kr/'],data_confidence:'high',tags:['수안보온천','충주','충북','온천','족욕','고려시대온천','탄산수소나트륨'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중',phone:'043-845-1011'},
  {experience_id:'EX-JN-NAT-084',name:'함평 나비 대축제',category_main:'문화/체험',category_sub:'축제',region_main:'JN',region_sub:'전라남도 함평군',address:'전라남도 함평군 함평읍 기각리 함평엑스포공원',lat:35.0639,lng:126.5169,price:'성인 5,000원~',duration:'4~6시간',reservation_required:false,target_user:['가족','어린이','커플'],nearby_places:[],related_heritage_ids:[],short_description:'매년 4~5월 전남 함평에서 열리는 나비 대축제다. 살아있는 나비·곤충 체험, 나비 날리기, 수십 종 희귀 나비 관찰 등 아이들에게 최고의 자연 교육 축제로 함평 대표 봄 축제다.',source_urls:['https://www.hampyeong.go.kr/'],data_confidence:'high',tags:['함평나비축제','함평','전남','나비축제','곤충체험','봄축제','가족'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'4~5월 축제 기간',phone:'061-320-2114'},
  {experience_id:'EX-GG-CUL-072',name:'고양 행주산성 역사 체험',category_main:'문화/체험',category_sub:'역사 체험',region_main:'GG',region_sub:'경기도 고양시',address:'경기도 고양시 덕양구 행주내동 574 행주산성',lat:37.6244,lng:126.8192,price:'무료',duration:'1~2시간',reservation_required:false,target_user:['개인','커플','가족'],nearby_places:[],related_heritage_ids:[],short_description:'임진왜란 행주대첩의 현장 경기 고양 행주산성을 탐방하는 역사 체험이다. 권율 장군이 2,300명으로 3만 왜군을 물리친 행주대첩 현장에서 역사 재현 행사와 성곽 걷기를 즐긴다.',source_urls:['https://www.goyang.go.kr/'],data_confidence:'high',tags:['행주산성','고양','경기','행주대첩','임진왜란','권율','한강'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00 (무료)',phone:'031-978-9820'},
  {experience_id:'EX-JB-NAT-064',name:'남원 춘향제 체험',category_main:'문화/체험',category_sub:'축제',region_main:'JB',region_sub:'전라북도 남원시',address:'전라북도 남원시 향단길 33 광한루원',lat:35.4053,lng:127.3897,price:'광한루원 성인 3,000원',duration:'2~3시간',reservation_required:false,target_user:['커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'판소리 춘향전의 배경지 전북 남원에서 매년 5월 춘향제를 즐기는 체험이다. 광한루원에서 춘향과 이몽룡의 사랑 이야기를 배경으로 다양한 전통 공연과 체험 행사가 열린다.',source_urls:['https://www.namwon.go.kr/'],data_confidence:'high',tags:['남원춘향제','남원','전북','광한루원','춘향전','판소리','봄축제'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'5월 연례 개최',phone:'063-620-6614'},
  {experience_id:'EX-GN-CUL-070',name:'밀양 얼음골 피서 체험',category_main:'문화/체험',category_sub:'자연체험',region_main:'GN',region_sub:'경상남도 밀양시',address:'경상남도 밀양시 산내면 얼음골로 100',lat:35.5089,lng:128.8381,price:'무료',duration:'1~2시간',reservation_required:false,target_user:['가족','개인'],nearby_places:[],related_heritage_ids:[],short_description:'여름에도 얼음이 어는 신비로운 천연기념물 밀양 얼음골을 탐방하는 체험이다. 여름 한낮에도 바위틈에서 찬 공기가 나오고 얼음이 얼어있는 역전 현상을 직접 체험하는 자연 체험이다.',source_urls:['https://www.miryang.go.kr/'],data_confidence:'high',tags:['밀양얼음골','밀양','경남','얼음골','천연기념물','역전현상','여름얼음'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'seasonal',operating_hours:'여름 (6~8월)',phone:'055-359-5757'},
  {experience_id:'EX-GW-NAT-071',name:'인제 자작나무 숲 트레킹',category_main:'문화/체험',category_sub:'자연체험',region_main:'GW',region_sub:'강원특별자치도 인제군',address:'강원특별자치도 인제군 인제읍 원대리 자작나무숲',lat:38.0833,lng:128.1219,price:'무료',duration:'2~3시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'국내 최대 자작나무 숲 강원 인제 원대리 자작나무 숲에서 트레킹을 즐기는 체험이다. 흰 자작나무 700만 그루가 뻗은 숲에서 눈 쌓인 겨울 또는 신록 여름 트레킹이 가능한 비경이다.',source_urls:['https://www.inje.go.kr/'],data_confidence:'high',tags:['인제자작나무숲','인제','강원','자작나무','원대리','숲트레킹','겨울설경'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~16:30 (동절기 10:00)',phone:'033-460-8036'},
  {experience_id:'EX-JN-NAT-085',name:'나주 배 따기 체험',category_main:'문화/체험',category_sub:'농촌 체험',region_main:'JN',region_sub:'전라남도 나주시',address:'전라남도 나주시 왕곡면 나주배 산지 일대',lat:35.0172,lng:126.7847,price:'체험 10,000원~',duration:'1~2시간',reservation_required:true,target_user:['가족','개인'],nearby_places:[],related_heritage_ids:[],short_description:'전국 최대 배 산지 전남 나주에서 배 따기 체험을 즐기는 프로그램이다. 8~10월 나주 배 수확 시즌에 직접 배를 따고 현장에서 먹는 체험으로 나주 배가 달고 큰 이유를 배울 수 있다.',source_urls:['https://www.naju.go.kr/'],data_confidence:'high',tags:['나주배따기','나주','전남','나주배','배따기체험','영산강','배산지'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'seasonal',operating_hours:'8~10월 수확 시즌',phone:'061-330-1261'},
  {experience_id:'EX-GB-CUL-043',name:'문경 도자기 체험',category_main:'문화/체험',category_sub:'전통공예',region_main:'GB',region_sub:'경상북도 문경시',address:'경상북도 문경시 문경읍 새재로 1391',lat:36.7394,lng:128.1494,price:'체험 15,000원~',duration:'2시간',reservation_required:true,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'경북 문경에서 전통 도자기를 직접 빚는 체험이다. 문경은 조선 시대 왕실 도자기를 공급하던 사옹원 분원이 설치됐던 전통 도예의 고장으로 백토 질이 좋아 지금도 도예촌이 활발하다.',source_urls:['https://www.gbmg.go.kr/'],data_confidence:'high',tags:['문경도자기체험','문경','경북','도자기','사옹원분원','조선도자기','도예'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'10:00~17:00',phone:'054-550-6421'}
];

const newShorts = [
  {
    experience_id:'EX-GG-NAT-068', experience_name:'가평 청평 유원지 수상 레저', category_sub:'어드벤처/레포츠', region:'경기도',
    script_30s:'오늘은 가평 청평호에서 수상 레저를 즐겼어요. 근데 아무도 안 알려주는 게 있어요 — 청평호 수상 레저를 평일 오전에 가면 주말 절반 가격이에요. 바람도 덜 불어 웨이크보드 입문에 최적이에요. 너무 타이밍이 이렇게 가격을 만든다는 게 좋았습니다.',
    script_60s:'오늘은 경기도 가평 청평호에서 웨이크보드·카약 수상 레저를 즐겼어요. 서울에서 1시간 30분 거리 북한강 청평호가 수도권 최대 수상 레저 성지예요. 근데 아무도 안 알려주는 꿀팁 하나 — 청평 수상 레저 최적 타이밍이 있어요. 주말 낮에 가면 가격도 비싸고 사람도 많고 대기 줄도 길어요. 평일 오전 9~11시에 가면 가격이 주말 대비 30~50% 저렴해요. 그리고 오전엔 바람이 약해서 수면이 잔잔해요. 잔잔한 수면이 웨이크보드 입문자에게 최적 조건이에요. 오후가 되면 바람이 강해지고 물결이 올라와요. 거기다 성수기 주말에는 보트 예약이 3~4시간 전에 마감돼요. 평일 오전이 가격·조건·여유 모두 완벽해요. 너무 타이밍이 이렇게 완전히 다른 경험을 만든다는 게 좋았습니다.',
    secret_tip:'청평 수상 레저 최적 = 평일 오전 9~11시 — 주말 대비 30~50% 저렴, 바람 약해 수면 잔잔, 입문자 최적. 주말 낮은 대기+비쌈+물결. 평일 오전이 가격·조건·여유 모두 완벽',
    filming_guide:'웨이크보드 타는 장면 드론 영상. 청평호 수면 잔잔한 아침. 보트 달리며 물보라 클로즈업.',
    broll_ideas:['웨이크보드 드론 영상','청평호 잔잔한 아침','물보라 클로즈업','북한강 전경','카약 패들링'],
    hooks:['평일 오전이 30~50% 저렴해요','오전엔 수면이 잔잔해요','입문자한테 최적 조건이에요','주말엔 대기가 길어요','청평 수상 레저 꿀팁'],
    thumbnails:['웨이크보드 드론 영상','청평호 아침','물보라 클로즈업','북한강 전경','카약 패들링'],
    captions:{youtube:'가평 청평 수상 레저 — 평일 오전이 최고예요 🏄\n\n주말 대비 30~50% 저렴!\n오전 잔잔한 수면 입문자 최적\n\n📍 경기도 가평군 청평면 북한강 청평호\n🏄 수도권 최대 수상 레저 성지\n\n#청평수상레저 #가평청평 #가평 #경기여행 #웨이크보드',instagram:'가평 청평 수상 레저 평일 오전이 최고예요 🏄\n\n주말 대비 30~50% 저렴 오전 수면 잔잔 ✨\n입문자한테 최적 조건이에요\n\n📍 경기 가평 청평호\n\n#청평수상레저 #가평여행 #경기 #웨이크보드 #GemKorea',tiktok:'가평 청평 꿀팁 🏄 평일 오전 9~11시가 최적이에요! 주말 대비 30~50% 저렴하고 수면 잔잔해서 웨이크보드 입문 최적 // 주말 낮엔 대기도 길고 비싸요 #청평수상레저 #가평여행 #경기'},
    hashtags:{korean:['#한국여행','#경기여행','#가평여행','#수상레저','#GemKorea'],place_specific:['#청평수상레저평일오전','#웨이크보드가평청평','#평일오전30%저렴','#잔잔수면입문자최적']}
  },
  {
    experience_id:'EX-JN-NAT-079', experience_name:'광양 구봉산 편백 명상', category_sub:'자연체험', region:'전라남도',
    script_30s:'오늘은 광양 구봉산 편백 숲에 왔어요. 피톤치드 가득해요. 근데 아무도 안 알려주는 게 있어요 — 피톤치드 효과가 오전 10시에 가장 강해요. 편백이 광합성 시작하며 피톤치드를 내뿜어요. 아침이 숲 치유의 황금 시간이에요. 너무 시간이 이렇게 효과를 바꾼다는 게 좋았습니다.',
    script_60s:'오늘은 전남 광양 구봉산 편백 숲에서 명상 체험을 했어요. 시내에서 차로 10분이면 도착하는 도심 근교 편백 숲이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 피톤치드를 가장 많이 흡수하는 최적 시간이 있어요. 피톤치드는 식물이 분비하는 항균 물질이에요. 편백은 피톤치드 분비량이 식물 중 가장 높은 나무예요. 이 피톤치드는 아침 9~11시 사이에 가장 활발하게 분비돼요. 햇빛이 완전히 뜨기 시작한 후 편백이 광합성을 하면서 동시에 피톤치드를 대량 내뿜어요. 오후에는 기온이 오르면서 피톤치드가 분산돼 농도가 낮아져요. 그래서 삼림욕 효과를 극대화하려면 오전에 숲에 가야 해요. 심호흡하며 15분 이상 숲에 있으면 혈압 낮추고 면역력 높이는 효과가 시작돼요. 너무 시간이 이렇게 효과를 바꾼다는 게 좋았습니다.',
    secret_tip:'피톤치드 최고 농도 = 오전 9~11시 — 광합성 시작하며 대량 분비. 오후는 기온 상승으로 분산 희석. 15분 이상 심호흡이 혈압+면역력 효과 시작. 광양 백운산+구봉산 세트',
    filming_guide:'편백 숲 오전 햇빛 투과 장면. 깊은 심호흡 명상 자세. 편백 나무껍질 피톤치드 클로즈업.',
    broll_ideas:['오전 햇빛 편백 숲 투과','심호흡 명상 자세','편백 나무껍질 클로즈업','광양 구봉산 전경','이슬 맺힌 편백 잎'],
    hooks:['피톤치드가 오전 9~11시가 최고예요','광합성 시작하며 대량 분비해요','오후엔 농도가 낮아져요','15분 이상 있어야 효과 시작이에요','광양 편백 명상 꿀팁'],
    thumbnails:['오전 햇빛 편백 투과','심호흡 명상','편백 나무껍질','광양 구봉산 전경','이슬 맺힌 잎'],
    captions:{youtube:'광양 구봉산 편백 숲 — 오전 9~11시가 피톤치드 최고예요 🌲\n\n광합성 시작하며 대량 분비!\n오후엔 농도 낮아져요\n\n📍 전남 광양시 광양읍 구봉산 편백 숲\n🌲 도심 10분 거리 치유 편백 숲\n\n#광양구봉산편백 #광양 #전남여행 #피톤치드최고시간 #편백명상',instagram:'광양 구봉산 편백 숲 오전 9~11시가 피톤치드 최고예요 🌲\n\n광합성 시작하며 대량 분비 오후엔 희석 ✨\n15분 이상 있어야 혈압+면역력 효과\n\n📍 전남 광양 구봉산 편백 숲\n\n#광양편백숲 #광양여행 #전남 #피톤치드 #GemKorea',tiktok:'광양 편백 꿀팁 🌲 피톤치드 최고 농도는 오전 9~11시예요! 광합성 시작하며 대량 분비 // 오후엔 기온 상승으로 분산 희석돼요 #광양구봉산편백 #광양여행 #전남'},
    hashtags:{korean:['#한국여행','#전남여행','#광양여행','#편백숲','#GemKorea'],place_specific:['#광양구봉산편백명상','#피톤치드오전9~11시','#광합성피톤치드대량','#편백오전삼림욕']}
  },
  {
    experience_id:'EX-GN-NAT-076', experience_name:'고성 왕곡마을 전통 가옥', category_sub:'역사 체험', region:'경상남도',
    script_30s:'오늘은 고성 왕곡마을에 왔어요. 조선 시대 그대로 남아있어요. 근데 아무도 안 알려주는 게 있어요 — 이 마을이 한국 전쟁 때 폭격을 안 받았어요. 낮은 산에 숨어있어 미군 지도에 나오지 않았어요. 그래서 원형이 살아있어요. 너무 전쟁이 이렇게 역사를 보존했다는 게 좋았습니다.',
    script_60s:'오늘은 경남 고성 왕곡마을을 탐방했어요. 조선 후기 양반 가옥들이 원형 그대로 보존된 전통 마을이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 왕곡마을이 왜 이렇게 완벽하게 보존됐는지 아세요? 대부분의 한국 전통 마을은 한국 전쟁 때 폭격으로 파괴됐어요. 그런데 왕곡마을은 낮은 야산에 둘러싸여 외부에서 보이지 않는 위치에 있어요. 미군 항공 지도에 마을이 잘 포착되지 않았고 전략적 가치가 없다고 판단돼 폭격을 피했어요. 마을 어르신들 말씀으로 전쟁 중에도 마을 자체는 거의 피해를 받지 않았다고 해요. 이 역사적 우연이 조선 후기 건축을 원형 그대로 지금까지 보존한 거예요. 지형이 역사를 지킨 셈이에요. 너무 지형이 이렇게 역사를 보존한다는 게 좋았습니다.',
    secret_tip:'고성 왕곡마을 원형 보존 이유 = 한국전쟁 폭격 피함 — 낮은 야산에 숨겨져 미군 항공 지도에 안 잡힘. 전략 가치 없다 판단. 지형이 역사를 지킨 우연. 고성 공룡 화석 세트',
    filming_guide:'왕곡마을 전통 가옥 처마 클로즈업. 마을 골목 한옥 연속 샷. 주변 낮은 산으로 둘러싸인 마을 항공뷰.',
    broll_ideas:['전통 가옥 처마 클로즈업','마을 골목 한옥 연속','산으로 둘러싸인 마을 항공뷰','조선 후기 대문 클로즈업','마을 어르신 인터뷰'],
    hooks:['한국전쟁 폭격을 피한 마을이에요','낮은 야산에 숨겨져 있었어요','미군 지도에 안 잡혔어요','지형이 역사를 지켰어요','고성 왕곡마을 꿀팁'],
    thumbnails:['전통 가옥 처마 클로즈업','마을 골목 한옥','항공뷰 마을 전경','대문 클로즈업','어르신 인터뷰'],
    captions:{youtube:'고성 왕곡마을 — 한국전쟁 폭격을 피한 마을이에요 🏠\n\n낮은 산에 숨겨져 미군 지도에 안 잡혔어요!\n지형이 조선 후기 건축을 지켜냈어요\n\n📍 경남 고성군 시천면 왕곡리\n🏠 조선 후기 원형 보존 전통 마을\n\n#고성왕곡마을 #고성 #경남여행 #전통가옥 #한국전쟁',instagram:'고성 왕곡마을 한국전쟁 폭격을 피한 마을이에요 🏠\n\n낮은 야산에 숨겨져 미군 지도에 안 잡힘 ✨\n지형이 역사를 지킨 거예요\n\n📍 경남 고성 왕곡마을\n\n#고성왕곡마을 #고성여행 #경남 #전통가옥 #GemKorea',tiktok:'고성 왕곡마을 꿀팁 🏠 한국전쟁 폭격을 피한 이유가 있어요! 낮은 야산에 숨겨져 미군 항공 지도에 안 잡혀서 폭격 피함 // 지형이 조선 후기 건축을 지켜낸 거예요 #고성왕곡마을 #고성여행 #경남'},
    hashtags:{korean:['#한국여행','#경남여행','#고성여행','#전통가옥','#GemKorea'],place_specific:['#고성왕곡마을한국전쟁폭격피함','#낮은야산미군지도안잡힘','#지형이역사지킴','#조선후기원형보존']}
  },
  {
    experience_id:'EX-GW-NAT-065', experience_name:'영월 동강 뗏목+래프팅', category_sub:'어드벤처/레포츠', region:'강원특별자치도',
    script_30s:'오늘은 영월 동강에서 래프팅을 했어요. 근데 아무도 안 알려주는 게 있어요 — 동강 래프팅에서 가장 짜릿한 구간이 어라연 협곡이에요. 공룡이 나올 것 같은 S자 협곡이에요. 많은 업체가 이 구간을 건너뛰어요. 어라연 포함 코스를 반드시 물어봐야 해요. 너무 코스 하나가 이렇게 차이를 만든다는 게 좋았습니다.',
    script_60s:'오늘은 강원도 영월 동강에서 래프팅을 했어요. 석회암 협곡이 S자로 굽이치는 동강 래프팅이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 동강 래프팅의 숨은 보석 구간이 있어요. 어라연 협곡이에요. 동강에서 가장 경치가 아름다운 S자 협곡으로 공룡이 나올 것 같은 원시 자연 풍경이에요. 절벽이 양쪽으로 100m 이상 솟아있고 그 사이로 래프팅이 지나가요. 그런데 많은 래프팅 업체가 시간과 비용 때문에 이 구간을 우회해요. 예약할 때 어라연 협곡 포함 코스인지 반드시 확인해야 해요. 추가 요금이 있더라도 어라연 구간이 동강 래프팅의 핵심이에요. 이 구간 없이는 동강 래프팅 반만 한 거예요. 너무 코스 하나가 경험 전체를 결정한다는 게 좋았습니다.',
    secret_tip:'동강 래프팅 핵심 = 어라연 협곡 포함 코스 확인 — 많은 업체가 시간+비용 이유로 우회. 예약 시 반드시 어라연 포함 여부 확인. 어라연 없으면 동강 래프팅 반만 한 것',
    filming_guide:'어라연 협곡 S자 절벽 드론 영상. 협곡 통과 래프팅 보트 클로즈업. 동강 S자 굽이 전경.',
    broll_ideas:['어라연 협곡 드론 영상','협곡 통과 래프팅','동강 S자 굽이 전경','절벽 100m 클로즈업','영월 동강 일몰'],
    hooks:['어라연 협곡이 동강의 핵심이에요','많은 업체가 이걸 건너뛰어요','예약할 때 반드시 확인해야 해요','어라연 없으면 반만 한 거예요','영월 동강 래프팅 꿀팁'],
    thumbnails:['어라연 협곡 드론','협곡 통과 래프팅','동강 S자 전경','절벽 클로즈업','동강 일몰'],
    captions:{youtube:'영월 동강 래프팅 — 어라연 협곡 포함 여부 확인하세요 🚣\n\n많은 업체가 우회해요!\n어라연 없으면 동강 반만 한 거예요\n\n📍 강원도 영월군 동강 일원\n🚣 석회암 협곡 S자 래프팅\n\n#영월동강래프팅 #영월 #강원여행 #어라연협곡 #동강',instagram:'영월 동강 래프팅 어라연 협곡 포함 여부 꼭 확인하세요 🚣\n\n많은 업체가 우회 어라연 없으면 반만 한 것 ✨\n예약 시 반드시 확인\n\n📍 강원 영월 동강\n\n#영월동강래프팅 #영월여행 #강원 #래프팅 #GemKorea',tiktok:'영월 동강 래프팅 꿀팁 🚣 어라연 협곡 포함 코스인지 예약 전에 확인하세요! 많은 업체가 시간+비용 이유로 우회함 // 어라연 없으면 동강 래프팅 반만 한 거예요 #영월동강래프팅 #영월여행 #강원'},
    hashtags:{korean:['#한국여행','#강원여행','#영월여행','#동강래프팅','#GemKorea'],place_specific:['#영월동강어라연협곡','#어라연포함코스확인','#많은업체우회확인필수','#동강S자협곡핵심']}
  },
  {
    experience_id:'EX-GW-NAT-066', experience_name:'강릉 남항진 해변+물회', category_sub:'지역 먹거리', region:'강원특별자치도',
    script_30s:'오늘은 강릉 남항진 해변에서 물회를 먹었어요. 근데 아무도 안 알려주는 게 있어요 — 남항진이 강릉 로컬들이 가는 해변이에요. 경포·강문보다 덜 알려진 대신 신선한 물회 맛집이 줄지어 있어요. 너무 로컬이 가는 데가 진짜라는 게 좋았습니다.',
    script_60s:'오늘은 강원도 강릉 남항진 해변에서 물회를 즐겼어요. 경포해변보다 훨씬 덜 알려진 로컬 해변이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 물회를 맛있게 먹는 방법이 있어요. 물회에 얼음을 넣지 않는 가게가 진짜 물회집이에요. 얼음을 넣으면 육수가 희석되고 회 맛이 떨어져요. 차갑게 유지하기 위해 얼음 대신 차갑게 준비된 육수를 사용해야 해요. 그리고 참기름·깨가 많이 들어간 물회가 더 고소하고 맛있어요. 물회 주문할 때 고추장 양을 조절해달라고 하면 자기 입맛에 맞게 먹을 수 있어요. 아침 일찍 문 여는 가게가 전날 손질한 회를 쓰지 않고 당일 새벽 경매 회를 쓰는 경우가 많아요. 그리고 남항진은 경포 대비 반값에 물회를 즐길 수 있어요. 너무 로컬이 가는 곳이 진짜라는 게 좋았습니다.',
    secret_tip:'남항진 물회 꿀팁 = 얼음 안 넣는 집이 진짜 — 얼음 넣으면 육수 희석. 아침 일찍 여는 집이 당일 새벽 경매 회 사용. 경포 대비 반값. 고추장 양 조절 요청 가능',
    filming_guide:'남항진 해변 물회 그릇 클로즈업. 물회 재료 신선도 확인. 남항진 바다 배경 먹기.',
    broll_ideas:['물회 그릇 클로즈업','신선 회 재료 확인','남항진 바다 배경 식사','이른 아침 남항진 해변','동해 파도 소리'],
    hooks:['얼음 안 넣는 집이 진짜 물회예요','아침 일찍 여는 집이 당일 회예요','경포 대비 반값이에요','남항진이 로컬들이 가는 곳이에요','강릉 물회 꿀팁'],
    thumbnails:['물회 그릇 클로즈업','신선 회 재료','남항진 바다 배경 식사','이른 아침 해변','동해 파도'],
    captions:{youtube:'강릉 남항진 물회 — 얼음 안 넣는 집이 진짜예요 🍜\n\n아침 일찍 여는 집이 당일 새벽 경매 회!\n경포 대비 반값 로컬 해변\n\n📍 강원도 강릉시 남항진동 남항진 해변\n🍜 강릉 로컬들이 가는 진짜 물회\n\n#강릉남항진물회 #남항진 #강릉 #강원여행 #강릉물회',instagram:'강릉 남항진 물회 얼음 안 넣는 집이 진짜예요 🍜\n\n아침 일찍 여는 집이 당일 새벽 경매 회 ✨\n경포 대비 반값 로컬 물회 해변\n\n📍 강원 강릉 남항진 해변\n\n#강릉남항진 #강릉물회 #강릉여행 #강원 #GemKorea',tiktok:'강릉 물회 꿀팁 🍜 얼음 안 넣는 집이 진짜 물회예요! 아침 일찍 여는 집이 당일 새벽 경매 회 // 경포 대비 반값 로컬 해변 남항진 #강릉남항진물회 #강릉여행 #강원'},
    hashtags:{korean:['#한국여행','#강원여행','#강릉여행','#강릉물회','#GemKorea'],place_specific:['#강릉남항진물회','#얼음안넣는집진짜','#아침새벽경매회','#경포반값로컬']}
  },
  {
    experience_id:'EX-GG-NAT-069', experience_name:'화성 공룡알 화석+시화호', category_sub:'역사 체험', region:'경기도',
    script_30s:'오늘은 화성 공룡알 화석지에 왔어요. 천연기념물이에요. 근데 아무도 안 알려주는 게 있어요 — 이곳에 공룡알이 8천만 년 전에 집단 서식지였어요. 해안 썰물 때만 볼 수 있어요. 밀물 때 가면 잠겨있어요. 물때 확인이 필수예요. 너무 자연이 이렇게 변한다는 게 좋았습니다.',
    script_60s:'오늘은 경기도 화성 시화호 옆 공룡알 화석 산지를 탐방했어요. 천연기념물 414호로 지정된 공룡알 화석지예요. 근데 아무도 안 알려주는 꿀팁 하나 — 이 공룡알 화석지의 특별한 조건이 있어요. 이곳은 8,000만 년 전 중생대 백악기에 공룡이 집단으로 알을 낳던 서식지예요. 전 세계에서 이렇게 집단 산란지가 발견된 곳이 드물어요. 그런데 이 화석이 조간대에 있어요. 조간대는 밀물과 썰물이 교차하는 구간이에요. 밀물 때 가면 화석이 바닷물에 잠겨있어서 볼 수 없어요. 반드시 썰물 시간에 맞춰 방문해야 공룡알 화석을 실제로 볼 수 있어요. 물때표를 검색해서 화성 시화호 썰물 시간을 확인하고 가야 해요. 너무 8천만 년 전 화석을 보는 조건이 이렇게 까다롭다는 게 좋았습니다.',
    secret_tip:'화성 공룡알 화석 관람 = 썰물 시간 필수 확인 — 밀물 때 화석 바닷물에 잠김. 조간대 위치. 물때표 검색 후 방문. 8천만 년 전 집단 산란지. 시화호 갈대밭 세트',
    filming_guide:'썰물 때 드러난 공룡알 화석 클로즈업. 발로 걸어다니며 화석 규모 비교. 시화호 갈대밭 배경.',
    broll_ideas:['썰물 드러난 공룡알 화석 클로즈업','발로 걸어다니며 규모 비교','시화호 갈대밭 배경','화석 밀집 구역 전경','썰물 시간 변화'],
    hooks:['썰물 때만 화석을 볼 수 있어요','밀물 때 가면 잠겨있어요','물때 확인이 필수예요','8천만 년 전 집단 산란지예요','화성 공룡알 화석 꿀팁'],
    thumbnails:['썰물 공룡알 화석 클로즈업','규모 비교','시화호 갈대밭','화석 밀집 구역','썰물 변화'],
    captions:{youtube:'화성 공룡알 화석 — 썰물 때만 볼 수 있어요 🦕\n\n밀물 때 가면 잠겨있어요!\n물때표 확인 후 방문 필수\n\n📍 경기도 화성시 송산면 시화호 공룡알 화석지\n🦕 천연기념물 414호\n\n#화성공룡알화석 #화성 #경기여행 #시화호 #공룡알화석',instagram:'화성 공룡알 화석 썰물 때만 볼 수 있어요 🦕\n\n밀물 때 가면 바닷물에 잠겨있음 ✨\n물때표 확인 후 방문 필수예요\n\n📍 경기 화성 공룡알 화석지\n\n#화성공룡알화석 #화성여행 #경기 #공룡알 #GemKorea',tiktok:'화성 공룡알 꿀팁 🦕 썰물 때만 화석을 볼 수 있어요! 밀물 때 가면 바닷물에 잠겨있어요 // 물때표 반드시 확인 후 방문하세요 #화성공룡알화석 #화성여행 #경기'},
    hashtags:{korean:['#한국여행','#경기여행','#화성여행','#공룡알화석','#GemKorea'],place_specific:['#화성공룡알화석산지','#썰물때만관람가능','#물때표확인필수','#8천만년집단산란지']}
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
