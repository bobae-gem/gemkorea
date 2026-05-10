const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const now = new Date().toISOString().slice(0,19);

const newExps = [
  {experience_id:'EX-JB-NAT-062',name:'전주 한옥마을 한지 뜨기',category_main:'문화/체험',category_sub:'전통공예',region_main:'JB',region_sub:'전라북도 전주시',address:'전라북도 전주시 완산구 전통문화관길 35',lat:35.8152,lng:127.1538,price:'성인 8,000원~',duration:'1~2시간',reservation_required:true,target_user:['가족','개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'전주 한옥마을에서 전통 한지를 직접 뜨는 공예 체험이다. 전주는 조선 시대 최고급 한지 생산지로 한지 장인에게 배우며 닥나무 섬유로 한지를 만드는 과정을 체험할 수 있다.',source_urls:['https://www.jeonjuhanok.com/'],data_confidence:'high',tags:['한지뜨기','전주한옥마을','전주','전북','한지','전통공예','닥나무'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'10:00~18:00',phone:'063-281-2891'},
  {experience_id:'EX-JN-CUL-042',name:'목포 근대역사관 투어',category_main:'문화/체험',category_sub:'역사 체험',region_main:'JN',region_sub:'전라남도 목포시',address:'전라남도 목포시 영산로 29번길 6',lat:34.7933,lng:126.3919,price:'성인 2,000원',duration:'1~2시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'일제강점기 목포 일본 영사관 건물을 재활용한 목포 근대역사관을 탐방하는 체험이다. 목포 개항기 근대 건축물 군락이 살아있어 드라마·영화 촬영지로도 유명한 근대 역사 투어 명소다.',source_urls:['https://www.mokpo.go.kr/'],data_confidence:'high',tags:['목포근대역사관','목포','전남','근대건축','일제강점기','개항기','드라마촬영지'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00 (월 휴관)',phone:'061-242-0340'},
  {experience_id:'EX-GW-CUL-067',name:'춘천 인형극제 관람',category_main:'문화/체험',category_sub:'축제',region_main:'GW',region_sub:'강원특별자치도 춘천시',address:'강원특별자치도 춘천시 춘천인형극제 공원',lat:37.8822,lng:127.7339,price:'무료~유료 다양',duration:'4~8시간',reservation_required:false,target_user:['가족','어린이'],nearby_places:[],related_heritage_ids:[],short_description:'매년 5~6월 춘천에서 열리는 세계 수준 인형극 축제를 관람하는 체험이다. 40년 역사의 춘천 인형극제는 세계 30개국 이상 극단이 참가하는 아시아 최대 인형극 페스티벌이다.',source_urls:['https://www.cocofesta.kr/'],data_confidence:'high',tags:['춘천인형극제','춘천','강원','인형극','세계인형극','아시아최대','5월6월'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'5~6월 개최 (무료 야외공연 다수)',phone:'033-242-8871'},
  {experience_id:'EX-GG-CUL-070',name:'수원 화성행궁 무예 공연',category_main:'문화/체험',category_sub:'역사 체험',region_main:'GG',region_sub:'경기도 수원시',address:'경기도 수원시 팔달구 남창동 6-2 화성행궁',lat:37.2789,lng:127.0178,price:'공연 관람 무료',duration:'1시간',reservation_required:false,target_user:['가족','개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'수원 화성행궁 앞에서 진행되는 정조시대 무예 재현 공연을 관람하는 체험이다. 주말 정기 공연으로 조선 정조 시대 무예 24기를 재현한 공연이 화성행궁 광장에서 펼쳐진다.',source_urls:['https://www.swcf.or.kr/'],data_confidence:'high',tags:['화성행궁무예공연','수원화성행궁','수원','경기','정조','무예24기','유네스코'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'주말 11:00, 14:00, 16:00',phone:'031-228-4677'},
  {experience_id:'EX-JB-NAT-063',name:'완주 대둔산 케이블카+암릉',category_main:'문화/체험',category_sub:'어드벤처/레포츠',region_main:'JB',region_sub:'전라북도 완주군',address:'전라북도 완주군 운주면 대둔산공원길 55',lat:36.0197,lng:127.3039,price:'케이블카 성인 왕복 10,000원',duration:'3~4시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'전북 완주 대둔산에서 케이블카와 암릉 트레킹을 즐기는 어드벤처 체험이다. 대둔산 기암절벽과 케이블카를 타고 전망대에 올라 충남·전북 경계 명산의 절경을 즐기는 코스다.',source_urls:['https://www.wanju.go.kr/'],data_confidence:'high',tags:['대둔산케이블카','완주','전북','대둔산','케이블카','암릉','기암절벽'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~17:00',phone:'063-261-1411'},
  {experience_id:'EX-GN-CUL-068',name:'거제 포로수용소 역사 투어',category_main:'문화/체험',category_sub:'역사 체험',region_main:'GN',region_sub:'경상남도 거제시',address:'경상남도 거제시 계룡로 61 거제포로수용소',lat:34.8936,lng:128.6231,price:'성인 9,000원',duration:'2~3시간',reservation_required:false,target_user:['가족','개인'],nearby_places:[],related_heritage_ids:[],short_description:'한국전쟁 당시 가장 큰 포로수용소였던 거제 포로수용소 유적공원을 탐방하는 역사 체험이다. 6.25 전쟁 당시 17만 명 이상의 포로가 수용됐던 실제 장소로 전쟁 역사를 생생히 체험한다.',source_urls:['https://www.pow.or.kr/'],data_confidence:'high',tags:['거제포로수용소','거제','경남','한국전쟁','6.25','포로수용소','역사'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00 (연중)',phone:'055-639-8125'},
  {experience_id:'EX-CB-CUL-069',name:'단양 고수동굴 탐험',category_main:'문화/체험',category_sub:'자연체험',region_main:'CB',region_sub:'충청북도 단양군',address:'충청북도 단양군 단양읍 고수동굴길 8',lat:36.9925,lng:128.3672,price:'성인 11,000원',duration:'1시간',reservation_required:false,target_user:['가족','어린이','커플'],nearby_places:[],related_heritage_ids:[],short_description:'국내 최대 규모 석회암 동굴 단양 고수동굴을 탐험하는 자연 체험이다. 천연기념물로 지정된 고수동굴은 4억 년 전 형성된 석회암 동굴로 종유석·석순·석주 등 신비한 동굴 생태를 관찰할 수 있다.',source_urls:['https://www.gosudongkul.com/'],data_confidence:'high',tags:['고수동굴','단양','충북','석회암동굴','종유석','천연기념물','4억년'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00',phone:'043-422-3072'},
  {experience_id:'EX-JN-CUL-043',name:'보성 녹차밭 차 따기',category_main:'문화/체험',category_sub:'농촌 체험',region_main:'JN',region_sub:'전라남도 보성군',address:'전라남도 보성군 보성읍 녹차로 775',lat:34.7856,lng:127.0786,price:'체험 5,000원~',duration:'1~2시간',reservation_required:false,target_user:['개인','커플','가족'],nearby_places:[],related_heritage_ids:[],short_description:'한국 최대 녹차 산지 보성 녹차밭에서 직접 찻잎을 따는 체험이다. 드라마·영화 촬영지로 유명한 보성 대한다원에서 4~5월 햇녹차 따기 체험과 녹차 시음을 즐길 수 있다.',source_urls:['https://www.dhdawon.com/'],data_confidence:'high',tags:['보성녹차밭','보성','전남','녹차따기','보성다원','촬영지','차이'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'seasonal',operating_hours:'4~5월 햇녹차 시즌 09:00~18:00',phone:'061-852-4540'},
  {experience_id:'EX-GG-CUL-071',name:'파주 임진각 평화 누리',category_main:'문화/체험',category_sub:'역사 체험',region_main:'GG',region_sub:'경기도 파주시',address:'경기도 파주시 문산읍 임진각로 148-40',lat:37.8881,lng:126.7336,price:'무료',duration:'2~3시간',reservation_required:false,target_user:['개인','커플','가족'],nearby_places:[],related_heritage_ids:[],short_description:'한반도 분단의 현장 파주 임진각과 평화 누리 공원을 탐방하는 역사 체험이다. DMZ 비무장지대 인접 임진각에서 망배단·자유의 다리·평화 누리 바람 개비 공원까지 분단 역사를 생각하는 코스다.',source_urls:['https://www.paju.go.kr/'],data_confidence:'high',tags:['임진각','파주','경기','임진각평화누리','DMZ','자유의다리','분단역사'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 24시간 (무료)',phone:'031-953-4744'},
  {experience_id:'EX-GW-NAT-067',name:'원주 소금산 출렁다리',category_main:'문화/체험',category_sub:'어드벤처/레포츠',region_main:'GW',region_sub:'강원특별자치도 원주시',address:'강원특별자치도 원주시 지정면 소금산길 12',lat:37.4011,lng:127.9836,price:'성인 3,000원',duration:'2~3시간',reservation_required:false,target_user:['커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'국내 최장 산악 출렁다리 원주 소금산 출렁다리를 걷는 어드벤처 체험이다. 길이 200m 높이 100m 소금산 출렁다리에서 섬강 계곡의 절경을 내려다보며 짜릿함을 즐길 수 있다.',source_urls:['https://www.wonju.go.kr/'],data_confidence:'high',tags:['소금산출렁다리','원주','강원','출렁다리','섬강','계곡','어드벤처'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00',phone:'033-737-9900'},
  {experience_id:'EX-JB-CUL-064',name:'익산 백제 역사 지구 투어',category_main:'문화/체험',category_sub:'역사 체험',region_main:'JB',region_sub:'전라북도 익산시',address:'전라북도 익산시 금마면 미륵사지로 362 미륵사지',lat:35.9761,lng:126.9994,price:'성인 1,500원',duration:'2~3시간',reservation_required:false,target_user:['개인','커플','가족'],nearby_places:[],related_heritage_ids:[],short_description:'유네스코 세계유산 익산 백제역사유적지구를 탐방하는 역사 체험이다. 동양 최대 사찰 터 미륵사지, 백제 무왕의 왕궁 왕궁리 유적까지 서동 설화와 백제 역사를 체험한다.',source_urls:['https://www.mireuksaji.org/'],data_confidence:'high',tags:['익산미륵사지','익산','전북','유네스코','백제역사유적','미륵사지','서동설화'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00',phone:'063-830-0950'},
  {experience_id:'EX-GN-NAT-078',name:'하동 화개장터 벚꽃 드라이브',category_main:'문화/체험',category_sub:'자연체험',region_main:'GN',region_sub:'경상남도 하동군',address:'경상남도 하동군 화개면 화개장터',lat:35.1147,lng:127.7208,price:'무료',duration:'1~2시간',reservation_required:false,target_user:['커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'경남 하동 쌍계사 십리 벚꽃 가도를 드라이브하는 봄 체험이다. 섬진강변 화개장터에서 쌍계사까지 10리 4km 벚꽃 터널 드라이브는 매년 3~4월 한국 최고 벚꽃 드라이브 코스로 꼽힌다.',source_urls:['https://www.hadong.go.kr/'],data_confidence:'high',tags:['하동벚꽃','화개장터','하동','경남','벚꽃드라이브','쌍계사','섬진강'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'3~4월 벚꽃 시즌 (무료)',phone:'055-880-2952'}
];

const newShorts = [
  {
    experience_id:'EX-GN-AGR-002', experience_name:'산청 유기농 논 모내기 체험', category_sub:'농촌 체험', region:'경상남도',
    script_30s:'오늘은 산청 유기농 논에서 모내기를 했어요. 근데 아무도 안 알려주는 게 있어요 — 모를 꽂을 때 너무 깊이 심으면 안 돼요. 2~3cm가 적당해요. 깊이 심으면 줄기가 부패해요. 그 깊이가 비결이에요. 너무 깊이가 이렇게 벼의 운명이라는 게 좋았습니다.',
    script_60s:'오늘은 경남 산청 유기농 논에서 5~6월 모내기 체험을 했어요. 화학비료 없이 친환경으로 키운 논에서 모내기를 직접 하는 체험이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 모 꽂는 깊이의 비밀이 있어요. 처음 모내기를 하면 모를 꽉 박는 게 좋다고 생각해서 깊이 꽂는 경우가 많아요. 그런데 모는 2~3cm만 꽂으면 돼요. 깊이 꽂으면 줄기 아래 부분이 흙에 덮여 산소 공급이 안 되고 부패가 시작돼요. 얕게 꽂아야 뿌리가 땅에 고정되면서 새 뿌리가 옆으로 뻗어요. 이게 분얼이라는 과정으로 벼 줄기가 여러 개로 늘어나는 핵심 과정이에요. 깊이 꽂으면 분얼이 억제돼 벼 수확량이 줄어요. 너무 깊이 하나가 벼 한 포기의 운명을 결정한다는 게 좋았습니다.',
    secret_tip:'모 꽂는 깊이 = 2~3cm — 깊이 꽂으면 줄기 부패. 얕게 꽂아야 분얼(줄기 여러 개 발생)이 잘 됨. 깊이 = 수확량 직결. 산청 동의보감촌 세트 코스',
    filming_guide:'모 꽂는 손 깊이 2~3cm 클로즈업. 논바닥 맨발 촉감 표정. 산청 유기농 논 전경.',
    broll_ideas:['모 꽂는 깊이 2~3cm 클로즈업','논바닥 맨발 촉감','산청 유기농 논 전경','모내기 줄 맞추기','산청 지리산 배경'],
    hooks:['모내기 깊이 2~3cm만이에요','깊이 꽂으면 줄기 부패해요','얕게 꽂아야 분얼이 돼요','깊이가 수확량을 결정해요','산청 유기농 모내기 꿀팁'],
    thumbnails:['모 꽂는 깊이 클로즈업','논바닥 맨발','산청 논 전경','줄 맞추기','지리산 배경'],
    captions:{youtube:'산청 유기농 모내기 — 깊이 2~3cm만 꽂아요 🌾\n\n깊이 꽂으면 줄기 부패!\n얕게 꽂아야 분얼이 잘 돼요\n\n📍 경남 산청군 유기농 논\n🌾 5~6월 모내기 시즌\n\n#산청모내기 #산청 #경남여행 #모내기깊이 #농촌체험',instagram:'산청 유기농 모내기 깊이 2~3cm만 꽂아요 🌾\n\n깊이 꽂으면 줄기 부패 얕게 꽂아야 분얼 ✨\n깊이 하나가 수확량 결정해요\n\n📍 경남 산청 유기농 논\n\n#산청모내기 #산청여행 #경남 #모내기 #GemKorea',tiktok:'산청 유기농 모내기 꿀팁 🌾 모는 2~3cm만 꽂아요! 깊이 꽂으면 줄기 부패 // 얕게 꽂아야 분얼이 잘 되고 수확량이 늘어요 #산청모내기 #산청여행 #경남'},
    hashtags:{korean:['#한국여행','#경남여행','#산청여행','#모내기','#GemKorea'],place_specific:['#산청유기농모내기','#모내기깊이2~3cm','#모내기분얼','#깊이수확량결정']}
  },
  {
    experience_id:'EX-JN-FES-005', experience_name:'진도 강강술래 체험', category_sub:'전통공연', region:'전라남도',
    script_30s:'오늘은 진도에서 강강술래를 직접 해봤어요. 유네스코 문화유산이에요. 근데 아무도 안 알려주는 게 있어요 — 강강술래 원래 뜻이 왜구 감시 신호예요. 왜구가 온다는 경고 소리로 시작됐어요. 그게 노래가 됐어요. 너무 전쟁 신호가 문화유산이 됐다는 게 좋았습니다.',
    script_60s:'오늘은 전남 진도에서 유네스코 인류무형문화유산 강강술래를 직접 체험했어요. 추석날 밤 보름달 아래 여성들이 손잡고 원을 그리며 부르는 전통 민요 강강술래예요. 근데 아무도 안 알려주는 꿀팁 하나 — 강강술래의 진짜 기원이 있어요. 강강술래는 임진왜란 때 이순신 장군이 왜구를 혼란시키기 위해 고안한 작전이에요. 적에게 아군 병력이 많아 보이게 하려고 부녀자들을 군복 차림으로 산 위에서 강강술래를 추게 했어요. 왜군이 보기에 수많은 군사가 돌아다니는 것처럼 보이게 한 심리전이에요. 그 작전이 이후 민간에 전해지면서 추석 풍습이 됐어요. 전쟁 심리전이 문화유산이 된 거예요. 너무 전쟁 신호가 문화유산이 됐다는 게 좋았습니다.',
    secret_tip:'강강술래 기원 = 임진왜란 이순신 장군의 심리전 — 왜구에게 아군 많아 보이게 부녀자 군복 차림 원무. 전쟁 심리전이 유네스코 문화유산으로. 진도 운림산방 세트',
    filming_guide:'달빛 아래 강강술래 원 그리기 장면. 진도 전통 한복 클로즈업. 진도 바다 배경.',
    broll_ideas:['달빛 강강술래 원 장면','진도 한복 클로즈업','진도 바다 배경','손잡은 원 형성','보름달 하늘'],
    hooks:['강강술래 원래 왜구 감시 신호예요','이순신 장군의 심리전이에요','전쟁 작전이 문화유산이 됐어요','왜군 혼란시키기 위한 거였어요','진도 강강술래 진짜 기원'],
    thumbnails:['달빛 강강술래 원','진도 한복 클로즈업','진도 바다','손잡은 원 형성','보름달'],
    captions:{youtube:'진도 강강술래 — 원래 이순신 장군의 심리전이에요 🌕\n\n왜구 혼란시키기 위한 작전!\n전쟁 신호가 유네스코 문화유산으로\n\n📍 전남 진도군 진도아리랑관\n🌕 유네스코 인류무형문화유산\n\n#진도강강술래 #진도 #전남여행 #강강술래기원 #유네스코',instagram:'진도 강강술래 원래 이순신 장군의 심리전이에요 🌕\n\n왜군 혼란시키기 위한 작전이 유네스코 문화유산 ✨\n전쟁 신호가 문화유산이 됐어요\n\n📍 전남 진도\n\n#진도강강술래 #진도여행 #전남 #강강술래 #GemKorea',tiktok:'진도 강강술래 진짜 기원 🌕 임진왜란 이순신 장군의 심리전이에요! 부녀자들을 군복 차림으로 원무시켜 왜군 혼란 // 그게 유네스코 문화유산이 됐어요 #진도강강술래 #진도여행 #전남'},
    hashtags:{korean:['#한국여행','#전남여행','#진도여행','#강강술래','#GemKorea'],place_specific:['#진도강강술래기원','#이순신심리전','#전쟁신호문화유산','#유네스코강강술래']}
  },
  {
    experience_id:'EX-GN-FES-005', experience_name:'고성 공룡 엑스포 관람', category_sub:'축제', region:'경상남도',
    script_30s:'오늘은 고성 공룡 엑스포에 왔어요. 근데 아무도 안 알려주는 게 있어요 — 고성이 세계 3대 공룡 발자국 화석지예요. 미국·캐나다·한국 고성이에요. 7,000만 년 전 발자국이 아직 해안가에 그대로 있어요. 너무 한국이 이런 곳이라는 게 좋았습니다.',
    script_60s:'오늘은 경남 고성 공룡 엑스포를 관람했어요. 고성은 세계 3대 공룡 발자국 화석 산지예요. 미국 콜로라도·캐나다 브리티시컬럼비아·한국 고성이 세계 3대 공룡 발자국 화석 밀집 지역이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 고성 공룡 발자국의 특별함이 있어요. 고성 해안가 바위에는 7,000만 년 전 공룡 발자국이 그대로 남아있어요. 그런데 이 발자국들은 그냥 단순한 발자국이 아니에요. 발자국 방향과 패턴을 분석하면 당시 공룡이 어떻게 이동했는지 행동 패턴을 알 수 있어요. 고성 화석지는 공룡 생태 연구의 살아있는 교과서예요. 실제로 고성 발자국 연구 결과가 세계 공룡 학계 논문에 실렸어요. 너무 한국 바닷가에 세계급 화석이 있다는 게 좋았습니다.',
    secret_tip:'고성 = 세계 3대 공룡 발자국 화석지 (미국·캐나다·한국 고성) — 해안가 바위에 7,000만 년 전 발자국 그대로. 발자국으로 공룡 행동 패턴 분석 가능. 세계 학계 논문에 실림',
    filming_guide:'고성 해안가 실제 공룡 발자국 클로즈업. 엑스포 공룡 모형 스케일 비교. 남해 배경.',
    broll_ideas:['해안가 실제 공룡 발자국 클로즈업','엑스포 공룡 모형 스케일','남해 해안 배경','발자국 방향 패턴','공룡 크기 비교'],
    hooks:['고성이 세계 3대 공룡 화석지예요','미국 캐나다 그리고 한국 고성이에요','7천만 년 전 발자국이 아직 있어요','발자국으로 행동 패턴 분석해요','고성 공룡 꿀팁'],
    thumbnails:['실제 공룡 발자국 클로즈업','공룡 모형 스케일','남해 해안','발자국 패턴','공룡 크기 비교'],
    captions:{youtube:'고성 공룡 엑스포 — 세계 3대 공룡 화석지예요 🦕\n\n미국·캐나다·한국 고성!\n해안가에 7천만 년 전 발자국 그대로\n\n📍 경남 고성군 공룡엑스포공원\n🦕 세계 공룡학계 연구지\n\n#고성공룡엑스포 #고성 #경남여행 #세계3대공룡화석지 #공룡발자국',instagram:'고성 공룡 엑스포 세계 3대 공룡 화석지예요 🦕\n\n미국 캐나다 그리고 한국 고성 ✨\n7천만 년 전 발자국이 바닷가에 그대로\n\n📍 경남 고성 공룡엑스포공원\n\n#고성공룡엑스포 #고성여행 #경남 #공룡 #GemKorea',tiktok:'고성 공룡 꿀팁 🦕 고성이 세계 3대 공룡 발자국 화석지예요! 미국·캐나다·한국 고성 // 해안가 바위에 7천만 년 전 발자국이 그대로 있어요 #고성공룡엑스포 #고성여행 #경남'},
    hashtags:{korean:['#한국여행','#경남여행','#고성여행','#공룡화석','#GemKorea'],place_specific:['#고성공룡엑스포','#세계3대공룡화석지','#해안가공룡발자국','#7천만년전발자국']}
  },
  {
    experience_id:'EX-CB-CUL-002', experience_name:'청주 고인쇄박물관 체험', category_sub:'역사 체험', region:'충청북도',
    script_30s:'오늘은 청주 고인쇄박물관에 왔어요. 근데 아무도 안 알려주는 게 있어요 — 직지심체요절이 구텐베르크보다 78년 앞선 최초의 금속활자 인쇄물이에요. 지금 프랑스 국립도서관에 있어요. 너무 한국이 인쇄 역사를 바꿨다는 게 좋았습니다.',
    script_60s:'오늘은 충북 청주 고인쇄박물관에서 직지심체요절의 비밀을 알게 됐어요. 직지심체요절은 1377년 청주 흥덕사에서 금속활자로 인쇄된 책이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 직지의 진짜 의미가 있어요. 직지심체요절은 구텐베르크 성경보다 78년 앞선 세계 최초 금속활자 인쇄본이에요. 유네스코가 2001년 세계기록유산으로 등재했어요. 그런데 진품은 지금 프랑스 국립도서관에 있어요. 1886년 조선 개항기 프랑스 외교관 콜랭 드 플랑시가 가져간 것이에요. 청주에서는 반환 운동을 지속하고 있고 박물관에서는 직접 금속활자를 만드는 체험을 할 수 있어요. 너무 한국이 인쇄 역사를 바꿨는데 진품이 프랑스에 있다는 게 좋았습니다.',
    secret_tip:'직지심체요절 = 구텐베르크보다 78년 앞선 세계 최초 금속활자 인쇄본 — 진품은 프랑스 국립도서관. 1886년 프랑스 외교관이 가져감. 반환 운동 중. 청주서 금속활자 체험 가능',
    filming_guide:'금속활자 직접 집는 손 클로즈업. 직지 복원본 펼치는 장면. 청주 고인쇄박물관 외관.',
    broll_ideas:['금속활자 집는 손 클로즈업','직지 복원본 펼치기','청주 고인쇄박물관 외관','활자 인쇄 체험','구텐베르크 비교'],
    hooks:['직지가 구텐베르크보다 78년 앞서요','세계 최초 금속활자 인쇄본이에요','진품이 프랑스에 있어요','반환 운동이 계속되고 있어요','청주 직지 꿀팁'],
    thumbnails:['금속활자 집는 손','직지 복원본','박물관 외관','활자 인쇄 체험','구텐베르크 비교'],
    captions:{youtube:'청주 고인쇄박물관 — 직지가 구텐베르크보다 78년 앞서요 📜\n\n세계 최초 금속활자 인쇄본!\n진품은 지금 프랑스 국립도서관에\n\n📍 충북 청주시 흥덕구 직지대로 713\n📜 유네스코 세계기록유산\n\n#청주고인쇄박물관 #직지심체요절 #청주 #충북여행 #세계최초금속활자',instagram:'청주 고인쇄박물관 직지가 구텐베르크보다 78년 앞서요 📜\n\n세계 최초 금속활자 인쇄본 ✨\n진품은 지금 프랑스 국립도서관에 있어요\n\n📍 충북 청주 고인쇄박물관\n\n#청주직지 #청주여행 #충북 #직지심체요절 #GemKorea',tiktok:'청주 직지심체요절 꿀팁 📜 구텐베르크보다 78년 앞선 세계 최초 금속활자예요! 진품은 프랑스 국립도서관에 있음 // 반환 운동 중이에요 #청주고인쇄박물관 #직지 #청주여행'},
    hashtags:{korean:['#한국여행','#충북여행','#청주여행','#직지심체요절','#GemKorea'],place_specific:['#청주고인쇄박물관','#직지구텐베르크78년앞선','#세계최초금속활자','#진품프랑스반환운동']}
  },
  {
    experience_id:'EX-GG-CUL-005', experience_name:'여주 세종대왕 역사관', category_sub:'역사 체험', region:'경기도',
    script_30s:'오늘은 여주 세종대왕릉에 왔어요. 근데 아무도 안 알려주는 게 있어요 — 세종대왕이 한글 창제 당시 안질이 너무 심해서 눈이 거의 안 보였어요. 그 상태에서 훈민정음을 만들었어요. 너무 불굴의 의지라는 게 좋았습니다.',
    script_60s:'오늘은 경기도 여주 세종대왕릉 영릉에서 세종대왕의 역사를 배웠어요. 근데 아무도 안 알려주는 꿀팁 하나 — 세종대왕 한글 창제의 고통스러운 비화가 있어요. 세종대왕은 젊은 시절부터 눈이 좋지 않았어요. 훈민정음을 창제하던 40대에는 안질이 너무 심해서 눈이 거의 보이지 않는 상태였어요. 독서와 연구를 너무 많이 해서 눈이 망가진 거예요. 그 상태에서 온천 치료를 받으면서도 연구를 멈추지 않았어요. 한글 창제 당시 책을 직접 읽기 어려울 정도로 시력이 저하된 상태였어요. 그럼에도 세종은 수십 년 연구 끝에 한글을 완성했어요. 눈이 거의 안 보이는 왕이 문자를 만들었다는 이야기예요. 너무 불굴의 의지라는 게 좋았습니다.',
    secret_tip:'세종대왕 한글 창제 당시 안질로 눈이 거의 안 보인 상태 — 40대에 시력 심각하게 저하. 온천 치료 받으면서도 연구 지속. 눈 안 보이는 왕이 문자 창제. 여주 신륵사 세트',
    filming_guide:'세종대왕릉 영릉 전경. 세종대왕 동상 클로즈업. 훈민정음 기록 자료.',
    broll_ideas:['세종대왕릉 영릉 전경','세종대왕 동상 클로즈업','훈민정음 기록 자료','세종 업적 설명판','여주 경치'],
    hooks:['세종대왕 한글 만들 때 눈이 안 보였어요','안질로 시력이 거의 없었어요','그 상태에서 한글을 완성했어요','눈 안 보이는 왕이 문자 창제예요','여주 세종대왕 꿀팁'],
    thumbnails:['세종대왕릉 전경','세종 동상 클로즈업','훈민정음 자료','업적 설명판','여주 경치'],
    captions:{youtube:'여주 세종대왕릉 — 한글 만들 때 눈이 안 보였어요 👑\n\n안질로 시력 거의 없는 상태!\n그럼에도 훈민정음 완성\n\n📍 경기도 여주시 능서면 영릉로 269-50\n👑 유네스코 세계문화유산\n\n#여주세종대왕릉 #여주 #경기여행 #세종대왕안질 #훈민정음',instagram:'여주 세종대왕릉 한글 만들 때 눈이 안 보였어요 👑\n\n안질로 시력 거의 없는 상태에서 훈민정음 완성 ✨\n불굴의 의지예요\n\n📍 경기 여주 세종대왕릉 영릉\n\n#여주세종대왕릉 #여주여행 #경기 #세종대왕 #GemKorea',tiktok:'여주 세종대왕 꿀팁 👑 한글 만들 때 눈이 거의 안 보였어요! 안질로 시력 심각하게 저하된 상태에서 훈민정음 완성 // 불굴의 의지 #여주세종대왕릉 #여주여행 #경기'},
    hashtags:{korean:['#한국여행','#경기여행','#여주여행','#세종대왕','#GemKorea'],place_specific:['#여주세종대왕릉영릉','#세종한글창제당시안질','#눈안보이는왕문자창제','#세종불굴의의지']}
  },
  {
    experience_id:'EX-GW-CUL-006', experience_name:'강릉 오죽헌 신사임당 서예 체험', category_sub:'역사 체험', region:'강원특별자치도',
    script_30s:'오늘은 강릉 오죽헌에 왔어요. 신사임당·이이 율곡이 태어난 곳이에요. 근데 아무도 안 알려주는 게 있어요 — 신사임당이 서예·그림 뿐 아니라 수를 놓는 자수 명인이었어요. 조선 최고 여성 예술가예요. 너무 한 사람이 이렇게 다재다능했다는 게 좋았습니다.',
    script_60s:'오늘은 강원도 강릉 오죽헌에서 신사임당 서예 체험을 했어요. 오죽헌은 신사임당과 율곡 이이가 태어난 곳으로 검은 대나무 오죽으로 유명한 조선 시대 고택이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 신사임당의 진짜 재능의 범위가 있어요. 신사임당은 서예와 그림이 유명하지만 사실 조선 시대 최고 여성 예술가 중 한 명이에요. 서예·산수화·초충도·자수 등 다양한 예술 분야에서 모두 탁월했어요. 특히 자수 작품 초충도수병풍은 현재 국립중앙박물관에 소장되어 있고 곤충과 식물을 섬세하게 수놓은 작품이에요. 오죽헌 박물관에서 신사임당의 다양한 작품을 직접 볼 수 있어요. 서예 체험도 가능해요. 너무 한 사람이 이렇게 다재다능했다는 게 좋았습니다.',
    secret_tip:'신사임당 = 서예+그림+자수 등 조선 최고 여성 예술가 — 자수 초충도수병풍 국립중앙박물관 소장. 서예·산수화·초충도 모두 탁월. 오죽헌에서 직접 서예 체험 가능',
    filming_guide:'오죽헌 검은 대나무 클로즈업. 신사임당 서예 체험 붓질 장면. 오죽헌 고택 전경.',
    broll_ideas:['오죽헌 검은 대나무 클로즈업','신사임당 서예 체험 붓질','오죽헌 고택 전경','신사임당 작품 감상','강릉 바다 배경'],
    hooks:['신사임당이 서예·그림·자수 다 했어요','조선 최고 여성 예술가예요','자수 작품이 국립박물관에 있어요','한 사람이 이렇게 다재다능해요','강릉 오죽헌 꿀팁'],
    thumbnails:['오죽헌 검은 대나무','서예 체험 붓질','오죽헌 고택 전경','신사임당 작품 감상','강릉 바다'],
    captions:{youtube:'강릉 오죽헌 — 신사임당이 서예·그림·자수 다 했어요 🎨\n\n조선 최고 여성 예술가!\n자수 작품은 국립중앙박물관에\n\n📍 강원도 강릉시 율곡로 3139번길 24\n🎨 신사임당·율곡 이이 생가\n\n#강릉오죽헌 #신사임당 #강릉 #강원여행 #신사임당서예체험',instagram:'강릉 오죽헌 신사임당이 서예·그림·자수 다 했어요 🎨\n\n조선 최고 여성 예술가 ✨\n자수 초충도수병풍 국립중앙박물관 소장\n\n📍 강원 강릉 오죽헌\n\n#강릉오죽헌 #신사임당 #강릉여행 #강원 #GemKorea',tiktok:'강릉 오죽헌 꿀팁 🎨 신사임당이 서예·그림·자수 모두 탁월한 조선 최고 여성 예술가예요! 자수 초충도수병풍은 국립중앙박물관 소장 // 오죽헌에서 서예 체험 가능 #강릉오죽헌 #신사임당 #강릉여행'},
    hashtags:{korean:['#한국여행','#강원여행','#강릉여행','#신사임당','#GemKorea'],place_specific:['#강릉오죽헌','#신사임당서예그림자수','#조선최고여성예술가','#초충도수병풍']}
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
