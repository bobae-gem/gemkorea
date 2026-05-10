const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const now = new Date().toISOString().slice(0,19);

const newExps = [
  {experience_id:'EX-SE-CUL-076',name:'서울 경복궁 수문장 교대식',category_main:'문화/체험',category_sub:'역사 체험',region_main:'SE',region_sub:'서울특별시 종로구',address:'서울특별시 종로구 사직로 161 경복궁',lat:37.5796,lng:126.9769,price:'무료 (경복궁 입장 성인 3,000원)',duration:'30분',reservation_required:false,target_user:['가족','개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'서울 경복궁 흥례문 앞에서 하루 두 번 진행하는 조선 시대 수문장 교대식을 관람하는 체험이다. 실제 전통 무복을 착용한 수문장들의 교대 의식을 무료로 관람할 수 있는 경복궁 대표 역사 체험이다.',source_urls:['https://www.royalpalace.go.kr/'],data_confidence:'high',tags:['경복궁수문장교대식','경복궁','서울','수문장교대','조선시대','무료관람','전통의식'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'10:00, 14:00 (화~일, 우천 중단)',phone:'02-3700-3900'},
  {experience_id:'EX-GG-NAT-082',name:'양평 용문산 은행나무',category_main:'문화/체험',category_sub:'자연체험',region_main:'GG',region_sub:'경기도 양평군',address:'경기도 양평군 용문면 용문산관광로 398',lat:37.5681,lng:127.6453,price:'성인 2,000원',duration:'1~2시간',reservation_required:false,target_user:['개인','커플','가족'],nearby_places:[],related_heritage_ids:[],short_description:'경기 양평 용문사 경내에 위치한 천연기념물 은행나무를 탐방하는 체험이다. 1,100년 수령의 용문사 은행나무는 높이 42m·둘레 14m로 국내 최대 은행나무로 10~11월 황금빛 단풍이 압도적이다.',source_urls:['https://www.yongmunsa.biz/'],data_confidence:'high',tags:['용문사은행나무','양평','경기','용문산','1100년은행나무','천연기념물','가을단풍'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00',phone:'031-773-3797'},
  {experience_id:'EX-JN-NAT-097',name:'고흥 우주발사체 테마파크',category_main:'문화/체험',category_sub:'역사 체험',region_main:'JN',region_sub:'전라남도 고흥군',address:'전라남도 고흥군 봉래면 우주발사대길 100 나로우주센터',lat:34.4317,lng:127.5344,price:'성인 3,000원',duration:'2~3시간',reservation_required:false,target_user:['가족','어린이','개인'],nearby_places:[],related_heritage_ids:[],short_description:'한국 최초 우주 발사 기지 전남 고흥 나로우주센터 우주과학관을 탐방하는 체험이다. 나로호·누리호 발사 역사와 우주 과학을 체험하는 공간으로 실제 발사체 모형을 직접 볼 수 있다.',source_urls:['https://www.kari.re.kr/'],data_confidence:'high',tags:['나로우주센터','고흥','전남','나로호','누리호','우주발사체','과학체험'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'10:00~17:30 (월 휴관)',phone:'061-830-8700'},
  {experience_id:'EX-GN-NAT-089',name:'남해 원예예술촌',category_main:'문화/체험',category_sub:'자연체험',region_main:'GN',region_sub:'경상남도 남해군',address:'경상남도 남해군 삼동면 예술길 129',lat:34.8033,lng:127.9067,price:'성인 7,000원',duration:'2~3시간',reservation_required:false,target_user:['커플','개인','가족'],nearby_places:[],related_heritage_ids:[],short_description:'경남 남해 앵강만이 내려다보이는 원예예술촌을 탐방하는 자연·예술 체험이다. 16개국 예술가들의 독특한 컨셉 정원과 테마 별장이 어우러진 복합 예술 공간으로 미나리꽃 시즌에 더욱 아름답다.',source_urls:['https://www.namhae.go.kr/'],data_confidence:'high',tags:['남해원예예술촌','남해','경남','원예예술촌','앵강만','16개국예술정원','미나리꽃'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00',phone:'055-867-4702'},
  {experience_id:'EX-CB-CUL-073',name:'충주 세계무술공원 체험',category_main:'문화/체험',category_sub:'어드벤처/레포츠',region_main:'CB',region_sub:'충청북도 충주시',address:'충청북도 충주시 탄금대로 2 세계무술공원',lat:36.9825,lng:127.9072,price:'성인 5,000원',duration:'2시간',reservation_required:false,target_user:['가족','개인'],nearby_places:[],related_heritage_ids:[],short_description:'충북 충주 탄금호 수변 세계무술공원에서 태권도·합기도·검도 등 한국 전통 무술을 체험하는 프로그램이다. 세계무술축제 상설 개최지 충주에서 다양한 무예 시연과 직접 체험을 즐길 수 있다.',source_urls:['https://www.wmmaf.or.kr/'],data_confidence:'high',tags:['충주세계무술공원','충주','충북','태권도체험','세계무술','전통무예','탄금호'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00',phone:'043-854-3011'},
  {experience_id:'EX-GW-NAT-079',name:'고성 DMZ 박물관',category_main:'문화/체험',category_sub:'역사 체험',region_main:'GW',region_sub:'강원특별자치도 고성군',address:'강원특별자치도 고성군 현내면 통일전망대로 369',lat:38.5578,lng:128.3572,price:'성인 3,000원',duration:'1~2시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'강원 고성 비무장지대 인접 DMZ 박물관을 탐방하는 역사 체험이다. 분단 역사와 DMZ 생태를 배우는 박물관 탐방 후 고성 통일전망대에서 금강산 비로봉을 볼 수 있는 분단 역사 체험 코스다.',source_urls:['https://www.dmzmuseum.com/'],data_confidence:'high',tags:['고성DMZ박물관','고성','강원','DMZ','분단역사','통일전망대','금강산'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00',phone:'033-681-0625'},
  {experience_id:'EX-JB-CUL-070',name:'익산 보석박물관',category_main:'문화/체험',category_sub:'문화투어',region_main:'JB',region_sub:'전라북도 익산시',address:'전라북도 익산시 왕궁면 호반로 8',lat:35.9494,lng:127.0144,price:'성인 5,000원',duration:'1~2시간',reservation_required:false,target_user:['개인','커플','가족'],nearby_places:[],related_heritage_ids:[],short_description:'한국 보석 산업의 중심 전북 익산의 보석박물관을 탐방하는 체험이다. 익산이 한국 귀금속·보석 산업의 50% 이상을 차지하는 보석도시임을 알 수 있는 박물관으로 희귀 보석·원석 3만여 점을 전시한다.',source_urls:['https://www.gemmuseum.go.kr/'],data_confidence:'high',tags:['익산보석박물관','익산','전북','보석박물관','귀금속','보석도시','원석'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'10:00~18:00 (월 휴관)',phone:'063-859-4641'},
  {experience_id:'EX-GN-CUL-077',name:'밀양 표충사 트레킹',category_main:'문화/체험',category_sub:'역사 체험',region_main:'GN',region_sub:'경상남도 밀양시',address:'경상남도 밀양시 단장면 표충로 1720',lat:35.4817,lng:128.9281,price:'성인 1,500원',duration:'2~3시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'임진왜란 승병 사명대사의 호국 정신이 담긴 경남 밀양 표충사를 탐방하는 역사 체험이다. 재약산 자락 표충사에는 전국에서 유일하게 유교식 사당과 불교 사찰이 공존하는 독특한 구조가 있다.',source_urls:['https://www.pyo-chungsa.org/'],data_confidence:'high',tags:['밀양표충사','밀양','경남','표충사','사명대사','유교불교공존','임진왜란'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'06:00~18:00',phone:'055-352-1150'},
  {experience_id:'EX-GG-CUL-081',name:'이천 설봉공원 봄 꽃길',category_main:'문화/체험',category_sub:'자연체험',region_main:'GG',region_sub:'경기도 이천시',address:'경기도 이천시 관고동 설봉공원로 185',lat:37.2769,lng:127.4456,price:'무료',duration:'1~2시간',reservation_required:false,target_user:['개인','커플','가족'],nearby_places:[],related_heritage_ids:[],short_description:'경기 이천 설봉호수 주변 설봉공원에서 봄 꽃을 즐기는 체험이다. 벚꽃·개나리·진달래가 동시에 피는 4월 설봉공원이 경기 동부 최고 봄꽃 산책지로 설봉호수와 꽃이 어우러지는 경치가 아름답다.',source_urls:['https://www.icheon.go.kr/'],data_confidence:'high',tags:['이천설봉공원봄꽃','이천','경기','설봉공원','설봉호수','봄꽃','벚꽃'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'4월 봄꽃 시즌 (무료)',phone:'031-644-2000'},
  {experience_id:'EX-JN-CUL-053',name:'해남 대흥사 두륜산 트레킹',category_main:'문화/체험',category_sub:'역사 체험',region_main:'JN',region_sub:'전라남도 해남군',address:'전라남도 해남군 삼산면 대흥사길 400',lat:34.5292,lng:126.6564,price:'성인 2,500원',duration:'3~4시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'유네스코 세계문화유산 산사 전남 해남 두륜산 대흥사를 탐방하는 역사 트레킹이다. 임진왜란 피해를 전혀 받지 않은 천년 고찰 대흥사에서 초의선사·추사 김정희의 인연을 따라 트레킹한다.',source_urls:['https://www.daeheungsa.co.kr/'],data_confidence:'high',tags:['해남대흥사','해남','전남','두륜산','대흥사','유네스코산사','초의선사'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'08:00~18:00',phone:'061-534-5502'},
  {experience_id:'EX-GW-CUL-071',name:'평창 월정사 전나무 숲',category_main:'문화/체험',category_sub:'자연체험',region_main:'GW',region_sub:'강원특별자치도 평창군',address:'강원특별자치도 평창군 진부면 오대산로 374-8',lat:37.7506,lng:128.5556,price:'성인 4,000원',duration:'1~2시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'강원 평창 오대산 월정사 일주문에서 금강교까지 약 1km 이어지는 아름다운 전나무 숲길을 산책하는 체험이다. 수령 100~200년 전나무들이 울창하게 늘어선 월정사 전나무 숲이 국내 최고 산림욕 코스다.',source_urls:['https://www.woljeongsa.org/'],data_confidence:'high',tags:['월정사전나무숲','평창','강원','월정사','전나무숲','오대산','삼림욕'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중',phone:'033-339-6800'},
  {experience_id:'EX-GB-NAT-047',name:'청송 주왕산 계곡 트레킹',category_main:'문화/체험',category_sub:'자연체험',region_main:'GB',region_sub:'경상북도 청송군',address:'경상북도 청송군 부동면 주왕산로 494',lat:36.3914,lng:129.1517,price:'성인 4,000원',duration:'3~4시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'경북 청송 주왕산 국립공원 기암 협곡과 폭포를 탐방하는 트레킹이다. 주산지·대전사·주왕굴을 거쳐 제1~3폭포까지 이어지는 계곡 트레킹이 청송 청정 자연 속 국내 최고 절벽 협곡 코스다.',source_urls:['https://juwangsan.knps.or.kr/'],data_confidence:'high',tags:['청송주왕산','청송','경북','주왕산','계곡트레킹','기암협곡','국립공원'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중',phone:'054-870-5300'}
];

const newShorts = [
  {
    experience_id:'EX-SE-CUL-076', experience_name:'서울 경복궁 수문장 교대식', category_sub:'역사 체험', region:'서울특별시',
    script_30s:'오늘은 경복궁 수문장 교대식을 봤어요. 근데 아무도 안 알려주는 게 있어요 — 수문장이 궁문을 지키는 게 아니에요. 궁문에 드나드는 사람을 검문해요. 조선 시대 궁문 통과는 패가 있어야 했어요. 너무 출입증이 이렇게 엄격했다는 게 좋았습니다.',
    script_60s:'오늘은 서울 경복궁 흥례문 앞 수문장 교대식을 관람했어요. 조선 시대 수문장의 역할을 재현한 역사 의식이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 수문장이 하는 일의 실제 의미가 있어요. 수문장은 단순히 궁문을 경비하는 게 아니에요. 궁궐에 출입하는 모든 사람을 검문하는 역할이에요. 조선 시대 경복궁에 들어가려면 신표라는 출입 패가 있어야 했어요. 출입 시간대도 엄격하게 제한했어요. 새벽 인정(밤 10시)이 되면 궁문이 닫히고 새벽 파루(새벽 4시)가 되어야 열었어요. 이 시간 사이에는 임금의 특명이 없으면 출입이 불가했어요. 수문장 교대식은 그 엄격한 검문 체계를 교대하는 의식이에요. 화려한 복장이지만 실제로는 엄격한 보안 교대예요. 너무 출입증이 이렇게 엄격하고 정교했다는 게 좋았습니다.',
    secret_tip:'경복궁 수문장 = 궁문 경비가 아닌 검문 담당 — 신표 출입패 필수. 인정~파루(밤 10시~새벽 4시) 궁문 폐쇄. 10:00·14:00 교대식 무료 관람. 교대식 직후 수문장 포토타임 가능',
    filming_guide:'수문장 교대식 전체 장면. 수문장 복장 클로즈업. 흥례문 배경 교대 의식.',
    broll_ideas:['수문장 교대식 전체','수문장 복장 클로즈업','흥례문 배경 의식','교대 수문장 포토타임','경복궁 흥례문'],
    hooks:['수문장이 검문을 담당해요','신표 출입패가 있어야 들어가요','밤 10시~새벽 4시 궁문 폐쇄예요','무료 관람 하루 두 번이에요','경복궁 수문장 꿀팁'],
    thumbnails:['수문장 교대식 전체','복장 클로즈업','흥례문 배경','포토타임','경복궁 흥례문'],
    captions:{youtube:'경복궁 수문장 교대식 — 검문 담당이에요 무료 관람 🏯\n\n신표 출입패 없으면 입장 불가!\n밤 10시~새벽 4시 궁문 완전 폐쇄\n\n📍 서울 종로구 사직로 161 경복궁 흥례문\n🏯 10:00·14:00 하루 2회 무료 관람\n\n#경복궁수문장교대식 #경복궁 #서울 #종로 #무료체험',instagram:'경복궁 수문장 교대식 검문 담당이에요 무료 관람 🏯\n\n신표 출입패 없으면 입장 불가 ✨\n밤 10시~새벽 4시 궁문 폐쇄\n\n📍 서울 경복궁 흥례문 앞\n\n#경복궁수문장 #경복궁 #서울여행 #종로 #GemKorea',tiktok:'경복궁 수문장 꿀팁 🏯 검문 담당이에요! 신표 출입패 없으면 입장 불가 // 밤 10시~새벽 4시 궁문 완전 폐쇄 엄격한 조선 보안 #경복궁수문장교대식 #경복궁 #서울여행'},
    hashtags:{korean:['#한국여행','#서울여행','#경복궁','#수문장교대식','#GemKorea'],place_specific:['#경복궁수문장검문담당','#신표출입패궁문출입','#인정파루밤10시새벽4시폐쇄','#무료관람하루2회']}
  },
  {
    experience_id:'EX-GG-NAT-082', experience_name:'양평 용문산 은행나무', category_sub:'자연체험', region:'경기도',
    script_30s:'오늘은 양평 용문사 은행나무를 봤어요. 1,100년 수령이에요. 근데 아무도 안 알려주는 게 있어요 — 이 나무가 3번의 전란을 살아남았어요. 나무에 수많은 역사가 새겨져 있어요. 과거에 벼락도 맞았는데 아직도 살아있어요. 너무 생명이 이렇게 강하다는 게 좋았습니다.',
    script_60s:'오늘은 경기 양평 용문사 1,100년 은행나무를 탐방했어요. 국내 최대·최고령 은행나무 천연기념물이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 용문사 은행나무의 역사가 있어요. 이 나무는 신라 경순왕 시대 심었다고 전해져요. 1,100년 동안 고려 건국·조선 건국·임진왜란·병자호란·일제강점기·한국전쟁을 모두 겪었어요. 일제강점기 때 이 나무를 베려 했는데 칼을 댄 순간 나무에서 피가 흘렀다는 전설이 있어요. 그래서 못 베었대요. 한국전쟁 때는 용문사가 전소됐는데 이 나무만 살아남았어요. 그리고 벼락을 맞은 흔적이 나무 줄기에 지금도 남아있어요. 그 흔적을 보면서 1,100년 역사를 느낄 수 있어요. 10~11월 황금빛 단풍이 절정이에요. 너무 생명이 이렇게 강하다는 게 좋았습니다.',
    secret_tip:'용문사 은행나무 = 1,100년 역사 3번 전란 생존 — 일제 베려다 피 흘렸다는 전설. 한국전쟁 용문사 전소 중 나무만 생존. 벼락 흔적 줄기에 현존. 10~11월 황금빛 단풍 절정',
    filming_guide:'용문사 은행나무 전체 스케일 샷. 황금빛 은행잎 클로즈업. 벼락 흔적 줄기 클로즈업.',
    broll_ideas:['은행나무 전체 스케일','황금빛 은행잎 클로즈업','벼락 흔적 줄기','용문사 배경','은행잎 낙엽 비'],
    hooks:['1,100년 수령이에요','3번의 전란을 살아남았어요','벼락 흔적이 줄기에 있어요','한국전쟁 때 나무만 살아남았어요','양평 용문사 꿀팁'],
    thumbnails:['은행나무 전체 스케일','황금빛 은행잎','벼락 흔적 줄기','용문사 배경','은행잎 낙엽비'],
    captions:{youtube:'양평 용문사 은행나무 — 1,100년 3번 전란을 살아남았어요 🌿\n\n벼락 흔적이 줄기에 현존!\n한국전쟁에도 나무만 살아남아\n\n📍 경기도 양평군 용문면 용문산관광로 398\n🌿 국내 최대 최고령 은행나무 천연기념물\n\n#양평용문사은행나무 #용문사 #양평 #경기여행 #1100년은행나무',instagram:'양평 용문사 은행나무 1,100년 3번 전란 살아남았어요 🌿\n\n벼락 흔적 줄기에 현존 ✨\n한국전쟁 용문사 전소 중 나무만 생존\n\n📍 경기 양평 용문사\n\n#양평용문사은행나무 #용문사 #양평여행 #경기 #GemKorea',tiktok:'양평 용문사 은행나무 꿀팁 🌿 1,100년 수령 3번의 전란을 살아남았어요! 벼락 흔적이 줄기에 지금도 있어요 // 한국전쟁 용문사 전소 중 나무만 생존 #양평용문사은행나무 #용문사 #양평여행'},
    hashtags:{korean:['#한국여행','#경기여행','#양평여행','#용문사은행나무','#GemKorea'],place_specific:['#양평용문사1100년은행나무','#3번전란생존벼락흔적','#한국전쟁전소중나무생존','#10~11월황금빛단풍절정']}
  },
  {
    experience_id:'EX-JN-NAT-097', experience_name:'고흥 우주발사체 테마파크', category_sub:'역사 체험', region:'전라남도',
    script_30s:'오늘은 고흥 나로우주센터에 왔어요. 근데 아무도 안 알려주는 게 있어요 — 나로우주센터가 세계에서 3번째로 우주 발사 능력을 갖춘 해양 발사 기지예요. 우리나라 독자 기술 누리호를 여기서 쐈어요. 너무 한국이 이렇게 우주에 간다는 게 좋았습니다.',
    script_60s:'오늘은 전남 고흥 나로우주센터 우주과학관을 탐방했어요. 한국 최초 우주 발사 기지예요. 근데 아무도 안 알려주는 꿀팁 하나 — 나로우주센터의 위상이 있어요. 나로우주센터는 세계에서 13번째로 건설된 우주 발사 기지예요. 그 중 해안가에 위치한 해양 발사 기지로는 세계 3번째예요. 한국이 2023년 독자 개발 누리호를 성공적으로 발사했어요. 누리호는 한국 기술로만 만든 첫 번째 우주 발사체예요. 외국의 부품이나 기술 없이 순수 국내 기술로 개발했어요. 이제 한국이 독자적으로 위성을 쏠 수 있는 나라가 됐어요. 현재 나로우주센터 인근에서 달 탐사선 발사도 준비 중이에요. 우주과학관에서 실제 누리호 실물 모형을 볼 수 있고 발사 체험 시뮬레이터도 있어요. 너무 한국이 이렇게 우주로 나아간다는 게 좋았습니다.',
    secret_tip:'나로우주센터 = 세계 13번째+해양 발사 기지 세계 3번째 — 2023년 순수 국내 기술 누리호 발사 성공. 독자 위성 발사 능력 보유 국가. 우주과학관에 누리호 실물 모형+발사 시뮬레이터',
    filming_guide:'누리호 실물 모형 전체 샷. 발사 시뮬레이터 체험. 나로우주센터 발사대 전경.',
    broll_ideas:['누리호 실물 모형 전체','발사 시뮬레이터 체험','나로우주센터 발사대','고흥 바다 배경','우주과학관 전시'],
    hooks:['세계 13번째 우주 발사 기지예요','해양 발사 기지 세계 3번째예요','순수 국내 기술 누리호예요','독자 위성 발사 능력이 생겼어요','고흥 나로우주센터 꿀팁'],
    thumbnails:['누리호 실물 모형','발사 시뮬레이터','나로우주센터 발사대','고흥 바다 배경','우주과학관 전시'],
    captions:{youtube:'고흥 나로우주센터 — 순수 국내 기술 누리호예요 🚀\n\n세계 13번째 우주 발사 기지!\n해양 발사 기지 세계 3번째\n\n📍 전남 고흥군 봉래면 나로우주센터\n🚀 2023년 누리호 독자 발사 성공\n\n#고흥나로우주센터 #나로우주센터 #고흥 #전남여행 #누리호',instagram:'고흥 나로우주센터 순수 국내 기술 누리호예요 🚀\n\n세계 13번째 우주 발사 기지 ✨\n2023년 독자 기술 누리호 발사 성공\n\n📍 전남 고흥 나로우주센터\n\n#고흥나로우주센터 #나로우주센터 #고흥여행 #전남 #GemKorea',tiktok:'고흥 나로우주센터 꿀팁 🚀 세계 13번째 우주 발사 기지예요! 해양 발사 기지 세계 3번째 // 2023년 순수 국내 기술 누리호 독자 발사 성공 #고흥나로우주센터 #고흥여행 #전남'},
    hashtags:{korean:['#한국여행','#전남여행','#고흥여행','#나로우주센터','#GemKorea'],place_specific:['#고흥나로우주센터세계13번째','#해양발사기지세계3번째','#순수국내기술누리호2023','#독자위성발사능력국가']}
  },
  {
    experience_id:'EX-GW-NAT-079', experience_name:'고성 DMZ 박물관', category_sub:'역사 체험', region:'강원특별자치도',
    script_30s:'오늘은 고성 DMZ 박물관에 왔어요. 금강산이 보여요. 근데 아무도 안 알려주는 게 있어요 — DMZ가 세계에서 생태 다양성이 가장 높은 곳 중 하나예요. 60년 인적 없는 결과예요. 전쟁이 만든 자연 보호구역이에요. 너무 역설이 이렇게 자연을 만든다는 게 좋았습니다.',
    script_60s:'오늘은 강원도 고성 DMZ 박물관에서 분단 역사를 배웠어요. 통일전망대에서 금강산 비로봉을 실제로 볼 수 있어요. 근데 아무도 안 알려주는 꿀팁 하나 — DMZ가 세계 최대 비의도적 생태 보호구역이에요. 한반도 비무장지대는 폭 4km, 길이 248km예요. 6.25 전쟁 이후 60년 이상 사람이 거의 들어가지 않았어요. 그 결과 DMZ가 세계에서 생태 다양성이 가장 높은 지역 중 하나가 됐어요. 멸종위기 야생동물 수십 종이 서식해요. 두루미·저어새·반달가슴곰 등 한반도에서 거의 사라진 동물들이 DMZ에 살아요. 미국 국립생태연구소가 DMZ를 세계 10대 생태 보고 중 하나로 선정했어요. 전쟁이 비의도적으로 만든 자연 보호구역이에요. 너무 역설이 이렇게 자연을 만든다는 게 좋았습니다.',
    secret_tip:'DMZ = 60년 무인 결과 세계 최대 비의도적 생태 보호구역 — 멸종위기 수십 종 서식. 미국 국립생태연구소 세계 10대 생태 보고 선정. 고성 통일전망대에서 금강산 비로봉 조망',
    filming_guide:'고성 통일전망대 금강산 조망. DMZ 철조망 너머 자연. 박물관 분단 전시.',
    broll_ideas:['통일전망대 금강산 조망','DMZ 철조망 너머 자연','박물관 분단 전시','두루미 서식 DMZ','고성 해안 배경'],
    hooks:['DMZ가 세계 최대 생태 보호구역이에요','60년 무인의 결과예요','멸종위기 동물이 여기 살아요','전쟁이 역설적으로 자연을 살렸어요','고성 DMZ 꿀팁'],
    thumbnails:['통일전망대 금강산 조망','DMZ 철조망 자연','박물관 전시','두루미 서식','고성 해안'],
    captions:{youtube:'고성 DMZ 박물관 — 전쟁이 만든 세계 최대 생태 보호구역 🌿\n\n60년 무인의 결과 멸종위기 동물 서식!\n미국 국립생태연구소 세계 10대 생태 보고\n\n📍 강원도 고성군 현내면 통일전망대로\n🌿 통일전망대에서 금강산 비로봉 조망\n\n#고성DMZ박물관 #DMZ생태보고 #고성 #강원여행 #통일전망대',instagram:'고성 DMZ 박물관 전쟁이 만든 세계 최대 생태 보호구역 🌿\n\n60년 무인 결과 멸종위기 동물 서식 ✨\n미국 국립생태연구소 세계 10대 선정\n\n📍 강원 고성 DMZ 박물관\n\n#고성DMZ박물관 #DMZ생태 #고성여행 #강원 #GemKorea',tiktok:'고성 DMZ 꿀팁 🌿 전쟁이 만든 세계 최대 생태 보호구역이에요! 60년 무인 결과 멸종위기 동물 서식 // 미국 국립생태연구소 세계 10대 생태 보고 선정 #고성DMZ박물관 #고성여행 #강원'},
    hashtags:{korean:['#한국여행','#강원여행','#고성여행','#DMZ박물관','#GemKorea'],place_specific:['#고성DMZ세계최대비의도적생태','#60년무인멸종위기동물서식','#미국국립생태연구소세계10대','#통일전망대금강산비로봉']}
  },
  {
    experience_id:'EX-GW-CUL-071', experience_name:'평창 월정사 전나무 숲', category_sub:'자연체험', region:'강원특별자치도',
    script_30s:'오늘은 평창 월정사 전나무 숲을 걸었어요. 근데 아무도 안 알려주는 게 있어요 — 전나무 숲이 자연적으로 자란 게 아니에요. 월정사 스님들이 수백 년간 관리한 인공 숲이에요. 그 관리가 지금 이 숲을 만들었어요. 너무 사람이 이렇게 자연을 만든다는 게 좋았습니다.',
    script_60s:'오늘은 강원도 평창 월정사 전나무 숲길을 산책했어요. 1km 전나무 숲이 국내 최고 산림욕 코스예요. 근데 아무도 안 알려주는 꿀팁 하나 — 월정사 전나무 숲의 특별한 내력이 있어요. 이 전나무 숲은 자연적으로 자란 게 아니에요. 수백 년간 월정사 스님들이 의도적으로 관리하고 조성한 인공 숲이에요. 스님들이 죽은 나무를 제거하고 새 나무를 심으며 숲을 유지해왔어요. 사찰 진입로를 신성하게 만들기 위해 전나무를 선택했어요. 전나무는 솔과 다른 독특한 향이 있고 사계절 푸르러요. 그리고 전나무 숲 안에서 측정한 음이온 농도가 국내 최고 수준이에요. 음이온이 많으면 스트레스 호르몬이 줄고 면역력이 올라요. 겨울 눈 쌓인 전나무 숲이 특히 아름다워요. 너무 사람이 이렇게 자연을 만든다는 게 좋았습니다.',
    secret_tip:'월정사 전나무 숲 = 수백 년 스님들이 관리한 인공 숲 — 음이온 농도 국내 최고 수준. 전나무 독특한 향+사계절 푸름. 겨울 눈 쌓인 전나무 숲이 최고 포인트. 오대산 주변 세트',
    filming_guide:'전나무 숲 1km 줄기 클로즈업. 겨울 눈 쌓인 전나무 숲 전경. 전나무 숲 빛 투과.',
    broll_ideas:['전나무 숲 줄기 클로즈업','겨울 눈 쌓인 전나무','전나무 숲 빛 투과','월정사 배경','전나무 향 맡기'],
    hooks:['자연이 아닌 스님들이 만든 숲이에요','수백 년 관리한 인공 숲이에요','음이온 농도가 국내 최고예요','겨울 눈 쌓인 게 가장 아름다워요','평창 월정사 꿀팁'],
    thumbnails:['전나무 숲 줄기','겨울 눈 전나무','빛 투과','월정사 배경','향 맡기'],
    captions:{youtube:'평창 월정사 전나무 숲 — 스님들이 수백 년 만든 숲이에요 🌲\n\n자연 숲이 아닌 인공 관리 숲!\n음이온 농도 국내 최고 수준\n\n📍 강원도 평창군 진부면 오대산로 374-8\n🌲 1km 전나무 숲길 국내 최고 산림욕\n\n#평창월정사전나무숲 #월정사 #평창 #강원여행 #전나무숲',instagram:'평창 월정사 전나무 숲 스님들이 수백 년 만든 숲이에요 🌲\n\n자연 아닌 인공 관리 숲 ✨\n음이온 농도 국내 최고 수준\n\n📍 강원 평창 월정사\n\n#평창월정사전나무숲 #월정사 #평창여행 #강원 #GemKorea',tiktok:'평창 월정사 전나무 꿀팁 🌲 자연 숲이 아니에요! 수백 년 스님들이 관리한 인공 숲 // 음이온 농도 국내 최고 수준이에요 #평창월정사전나무숲 #월정사 #평창여행'},
    hashtags:{korean:['#한국여행','#강원여행','#평창여행','#월정사','#GemKorea'],place_specific:['#평창월정사전나무숲인공관리','#수백년스님관리숲','#음이온농도국내최고','#겨울눈전나무숲최고']}
  },
  {
    experience_id:'EX-GB-NAT-047', experience_name:'청송 주왕산 계곡 트레킹', category_sub:'자연체험', region:'경상북도',
    script_30s:'오늘은 청송 주왕산 계곡을 트레킹했어요. 근데 아무도 안 알려주는 게 있어요 — 주왕산이 화산 폭발로 생긴 산이에요. 기암절벽이 전부 화산 응회암이에요. 불과 물이 만나 식으면서 생긴 절벽이에요. 너무 지구의 역사가 이렇게 절벽에 있다는 게 좋았습니다.',
    script_60s:'오늘은 경북 청송 주왕산 계곡 트레킹을 즐겼어요. 기암협곡과 폭포가 압도적인 국립공원이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 주왕산 기암절벽의 생성 비밀이 있어요. 주왕산의 거대한 기암절벽들은 약 7,000만 년 전 화산 폭발로 만들어진 화산 응회암이에요. 화산 폭발 때 나온 용암과 화산재가 쌓이고 식으면서 돌이 됐어요. 그 후 수천만 년 동안 물이 이 암석을 깎아 지금의 기암 협곡 형태가 됐어요. 화산이 만든 암석을 물이 조각한 거예요. 불과 물이 합작해서 만든 예술이에요. 청송군 전체가 유네스코 세계지질공원이에요. 주왕산 계곡 입구 주산지 아침 안개가 핵심 포토존이에요. 주산지 왕버들 나무가 물에 잠긴 새벽 안개 사진이 국내 최고 자연 사진 중 하나예요. 너무 지구의 역사가 이렇게 절벽에 담겼다는 게 좋았습니다.',
    secret_tip:'주왕산 기암절벽 = 7,000만 년 전 화산 응회암 → 물이 수천만 년 조각 — 불+물 합작 예술. 청송 유네스코 세계지질공원. 주산지 아침 안개+왕버들 = 국내 최고 자연 사진 포토존',
    filming_guide:'주산지 아침 안개 왕버들 명장면. 주왕산 기암 협곡 전경. 제1폭포 클로즈업.',
    broll_ideas:['주산지 아침 안개 왕버들','기암 협곡 전경','제1폭포 클로즈업','협곡 바닥 계곡','화산 응회암 절벽'],
    hooks:['화산 폭발로 생긴 절벽이에요','7,000만 년 전 응회암이에요','불과 물이 합작한 예술이에요','주산지 새벽 안개가 최고예요','청송 주왕산 꿀팁'],
    thumbnails:['주산지 아침 안개','기암 협곡 전경','제1폭포','협곡 계곡','응회암 절벽'],
    captions:{youtube:'청송 주왕산 — 화산이 만들고 물이 조각한 기암이에요 🏔️\n\n7,000만 년 전 화산 응회암!\n불+물 합작 예술\n\n📍 경북 청송군 주왕산로 494\n🏔️ 유네스코 세계지질공원 청송\n\n#청송주왕산트레킹 #주왕산 #청송 #경북여행 #화산응회암',instagram:'청송 주왕산 화산이 만들고 물이 조각한 기암이에요 🏔️\n\n7,000만 년 전 화산 응회암 ✨\n불+물 합작 예술\n\n📍 경북 청송 주왕산\n\n#청송주왕산 #주왕산 #청송여행 #경북 #GemKorea',tiktok:'청송 주왕산 꿀팁 🏔️ 화산 폭발로 생긴 절벽이에요! 7,000만 년 전 화산 응회암을 물이 수천만 년 조각 // 불+물 합작 예술이에요 #청송주왕산 #주왕산 #청송여행'},
    hashtags:{korean:['#한국여행','#경북여행','#청송여행','#주왕산','#GemKorea'],place_specific:['#청송주왕산화산응회암7천만년','#화산폭발물조각기암협곡','#불물합작예술청송세계지질공원','#주산지아침안개왕버들포토존']}
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
