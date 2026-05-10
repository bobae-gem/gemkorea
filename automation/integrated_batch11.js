const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const now = new Date().toISOString().slice(0,19);

const newExps = [
  {experience_id:'EX-GW-NAT-008',name:'설악산 울산바위 트레킹',category_main:'문화/체험',category_sub:'자연체험',region_main:'GW',region_sub:'강원특별자치도 속초시',address:'강원특별자치도 속초시 설악동 설악산 국립공원',lat:38.1192,lng:128.4668,price:'국립공원 입장 무료',duration:'3~4시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'설악산의 상징 울산바위(해발 873m)까지 등산로를 따라 트레킹하는 체험이다. 왕복 약 4km 코스로 능선 위에서 동해와 설악산 전경이 한눈에 펼쳐지는 장관을 감상할 수 있다.',source_urls:['https://seorak.knps.or.kr/'],data_confidence:'high',tags:['울산바위','설악산','속초','강원','트레킹','동해전망','암봉'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'일출~16:00 (동절기 15:00)',phone:'033-801-0900'},
  {experience_id:'EX-JB-NAT-002',name:'전주 한옥마을 한지등 만들기',category_main:'문화/체험',category_sub:'전통공예',region_main:'JB',region_sub:'전라북도 전주시',address:'전라북도 전주시 완산구 한옥마을 일원',lat:35.8147,lng:127.1524,price:'1인 15,000원',duration:'1~2시간',reservation_required:true,target_user:['개인','커플','가족'],nearby_places:[],related_heritage_ids:[],short_description:'전주 한옥마을에서 천년 역사 전주 한지로 연등과 조명등을 만드는 공예 체험이다. 한지 등 안에 촛불을 켜면 은은하게 빛나는 한지의 아름다움을 즐길 수 있다.',source_urls:['https://hanok.jeonju.go.kr/'],data_confidence:'high',tags:['한지등','전주','전북','한옥마을','연등','한지공예','전통조명'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'10:00~17:00',phone:'063-281-2514'},
  {experience_id:'EX-GG-NAT-009',name:'남양주 물의정원 계절 꽃 체험',category_main:'문화/체험',category_sub:'자연체험',region_main:'GG',region_sub:'경기도 남양주시',address:'경기도 남양주시 조안면 북한강로 398',lat:37.6414,lng:127.4019,price:'무료',duration:'1~2시간',reservation_required:false,target_user:['커플','가족','개인'],nearby_places:[],related_heritage_ids:[],short_description:'북한강 물가에 조성된 남양주 물의정원에서 계절 꽃을 즐기는 체험이다. 봄 유채꽃·수선화·봄 튤립, 여름 수국·코스모스, 가을 핑크뮬리가 차례로 피어나는 수도권 대표 꽃 명소다.',source_urls:['https://www.ggnmj.com/'],data_confidence:'high',tags:['물의정원','남양주','경기','꽃','유채꽃','핑크뮬리','북한강'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (일출~일몰)',phone:'031-590-8305'},
  {experience_id:'EX-GN-NAT-005',name:'진해 군항제 벚꽃 투어',category_main:'문화/체험',category_sub:'축제',region_main:'GN',region_sub:'경상남도 창원시',address:'경상남도 창원시 진해구 여좌천 일원',lat:35.1399,lng:128.6975,price:'무료',duration:'3~5시간',reservation_required:false,target_user:['가족','커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'매년 3~4월 한국 최대 규모 벚꽃 축제가 열리는 경남 창원 진해에서 36만 그루 왕벚나무 터널을 걷는 봄 체험이다. 여좌천 로망스다리·경화역·안민도로 등 진해 전역의 벚꽃을 감상한다.',source_urls:['https://www.changwon.go.kr/'],data_confidence:'high',tags:['군항제','진해','창원','경남','벚꽃','봄축제','여좌천'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'매년 3~4월 (10일간)',phone:'055-225-3691'},
  {experience_id:'EX-JN-NAT-007',name:'장성 백양사 단풍 트레킹',category_main:'문화/체험',category_sub:'자연체험',region_main:'JN',region_sub:'전라남도 장성군',address:'전라남도 장성군 북하면 백양로 1239',lat:35.4714,lng:126.8933,price:'성인 3,000원',duration:'2~3시간',reservation_required:false,target_user:['가족','개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'백양산 계곡을 따라 걸으며 백양사의 단풍과 쌍계루 반영을 감상하는 가을 트레킹이다. 10~11월 백양사 쌍계루와 계곡 수면이 단풍으로 물드는 반영 풍경이 전남 최고의 가을 명소다.',source_urls:['https://www.baekyangsa.org/'],data_confidence:'high',tags:['백양사','장성','전남','단풍','쌍계루','반영','가을트레킹'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'06:00~18:00',phone:'061-392-7502'},
  {experience_id:'EX-GG-NAT-010',name:'강화도 마니산 단군 천제 투어',category_main:'문화/체험',category_sub:'역사 체험',region_main:'GG',region_sub:'인천광역시 강화군',address:'인천광역시 강화군 화도면 마니산로 585',lat:37.5941,lng:126.4353,price:'성인 1,000원',duration:'2~3시간',reservation_required:false,target_user:['개인','가족'],nearby_places:[],related_heritage_ids:[],short_description:'단군 할아버지가 하늘에 제사를 지냈다는 마니산(해발 472m) 참성단까지 트레킹하는 체험이다. 정상 참성단에서 서해와 강화 평야가 내려다보이며 매년 개천절에 단군 천제 행사가 열린다.',source_urls:['https://www.ganghwa.go.kr/'],data_confidence:'high',tags:['마니산','강화도','참성단','단군','인천','트레킹','개천절'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중',phone:'032-930-4020'},
  {experience_id:'EX-GW-NAT-009',name:'정선 화암동굴 판타지 체험',category_main:'문화/체험',category_sub:'자연체험',region_main:'GW',region_sub:'강원특별자치도 정선군',address:'강원특별자치도 정선군 화암면 화암리 66',lat:37.3800,lng:128.7628,price:'성인 9,000원',duration:'1~2시간',reservation_required:false,target_user:['가족','개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'과거 금광으로 쓰이던 화암동굴이 테마파크 형식의 체험 동굴로 변신했다. 황금의 나라·동굴의 신비·지하 광장 등 테마별로 꾸며진 공간을 모노레일을 타고 탐방하는 판타지 체험이다.',source_urls:['https://www.jeongseon.go.kr/'],data_confidence:'high',tags:['화암동굴','정선','강원','테마동굴','금광','모노레일','판타지'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~17:00',phone:'033-560-3011'},
  {experience_id:'EX-JJ-NAT-003',name:'제주 만장굴 탐방',category_main:'문화/체험',category_sub:'자연체험',region_main:'JJ',region_sub:'제주특별자치도 제주시',address:'제주특별자치도 제주시 구좌읍 만장굴길 182',lat:33.5281,lng:126.7713,price:'성인 4,000원',duration:'1시간',reservation_required:false,target_user:['가족','개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'유네스코 세계자연유산 제주 만장굴은 길이 7.4km로 세계 최대 용암동굴 중 하나다. 개방 구간 1km를 걸으며 높이 7m의 거대 용암 석주와 화산 지형을 직접 탐방할 수 있다.',source_urls:['https://www.visitjeju.net/'],data_confidence:'high',tags:['만장굴','제주','구좌읍','용암동굴','유네스코','세계자연유산','화산지형'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00 (화요일 휴관)',phone:'064-710-7903'},
  {experience_id:'EX-CB-NAT-003',name:'충주호 유람선 투어',category_main:'문화/체험',category_sub:'자연체험',region_main:'CB',region_sub:'충청북도 충주시',address:'충청북도 충주시 동량면 충주호 선착장',lat:36.9845,lng:128.1234,price:'성인 17,000원~',duration:'1~2시간',reservation_required:false,target_user:['가족','개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'충주댐이 만들어낸 충주호를 유람선을 타고 탐방하는 체험이다. 청풍·단양 구간 단애 절벽과 호수가 어우러지는 한국의 장가계로 불리는 절경을 뱃길로 감상할 수 있다.',source_urls:['https://www.chungjuho.com/'],data_confidence:'high',tags:['충주호유람선','충주호','충주','충북','단양','청풍','유람선'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~17:00',phone:'043-851-5771'},
  {experience_id:'EX-GN-NAT-006',name:'밀양 위양지 이팝나무 축제',category_main:'문화/체험',category_sub:'축제',region_main:'GN',region_sub:'경상남도 밀양시',address:'경상남도 밀양시 부북면 위양리 위양못',lat:35.4886,lng:128.7861,price:'무료',duration:'1~2시간',reservation_required:false,target_user:['커플','개인','가족'],nearby_places:[],related_heritage_ids:[],short_description:'매년 5월 위양지 연못 주변 이팝나무가 하얀 꽃을 피울 때 방문하는 봄꽃 명소다. 300년 이상 된 이팝나무들이 연못가에 늘어서며 하얀 꽃이 수면에 반사되는 풍경이 경남 최고의 5월 포토존이다.',source_urls:['https://www.miryang.go.kr/'],data_confidence:'high',tags:['위양지','밀양','이팝나무','경남','봄꽃','연못반영','5월명소'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'5월 이팝나무 개화 시즌',phone:'055-359-5638'},
  {experience_id:'EX-GG-NAT-011',name:'화성 공룡알 화석 산지 체험',category_main:'문화/체험',category_sub:'역사 체험',region_main:'GG',region_sub:'경기도 화성시',address:'경기도 화성시 송산면 고정리 공룡알화석산지',lat:37.1822,lng:126.7086,price:'무료 (박물관 성인 3,000원)',duration:'2~3시간',reservation_required:false,target_user:['가족','어린이'],nearby_places:[],related_heritage_ids:[],short_description:'천연기념물 414호인 화성 시화호 공룡알 화석 산지를 탐방하는 체험이다. 8,000만 년 전 공룡알 화석이 집단으로 발견된 현장을 걸으며 공룡 화석 박물관에서 공룡의 실제 생태를 배운다.',source_urls:['https://www.hwaseong.go.kr/'],data_confidence:'high',tags:['공룡알화석','화성','경기','공룡알','천연기념물','어린이','시화호'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00 (월요일 휴관)',phone:'031-369-6003'},
  {experience_id:'EX-JN-NAT-008',name:'보성 봇재 대나무숲 소리길',category_main:'문화/체험',category_sub:'자연체험',region_main:'JN',region_sub:'전라남도 보성군',address:'전라남도 보성군 웅치면 용반리 봇재 대나무길',lat:34.7718,lng:127.0792,price:'무료',duration:'1~2시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'보성 녹차밭 인근 봇재에 위치한 대나무 숲길을 걸으며 대나무 바람 소리를 듣는 힐링 체험이다. 촘촘한 대나무들이 바람에 흔들리며 내는 청아한 소리가 가득한 200m 소리길이 명상 코스로 유명하다.',source_urls:['https://www.boseong.go.kr/'],data_confidence:'high',tags:['봇재대나무','보성','전남','대나무소리','힐링','명상','청아'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중',phone:'061-850-5210'}
];

const newShorts = [
  {
    experience_id:'EX-GN-VIL-002', experience_name:'산청 지리산 한방 약초 체험', category_sub:'농촌 체험', region:'경상남도',
    script_30s:'오늘은 산청 동의보감 테마파크에 왔어요. 허준의 동의보감 고장이에요. 근데 아무도 안 알려주는 게 있어요 — 한방 체험관에서 직접 맥을 짚어봐요. 내 맥박이 한의학에서 어떤 의미인지 알게 돼요. 너무 내 몸이 처음 언어가 생기는 느낌이라서 좋았습니다.',
    script_60s:'오늘은 경남 산청 동의보감 한방테마파크에 왔어요. 조선 시대 허준이 동의보감을 집필한 지리산 자락이에요. 직접 한방 약초를 채취하고 한방차를 만드는 체험이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 한방 체험관에서 한의사에게 맥진을 받는 코너가 있어요. 손목 맥박을 짚어서 내 체질이 태양인·태음인·소양인·소음인 중 어느 것인지 알 수 있어요. 그리고 내 체질에 맞는 약초와 음식도 알려줘요. 평소에 왜 특정 음식을 좋아하고 싫어하는지 한의학으로 설명되는 순간이 신기해요. 내 몸에 처음으로 언어가 생기는 느낌이에요. 너무 내 체질을 처음 알게 되는 체험이라서 좋았습니다.',
    secret_tip:'맥진 체질 진단 코너 — 태양·태음·소양·소음 체질 판정. 체질별 맞는 약초+음식 안내. 내 몸이 처음 설명되는 신기한 순간. 지리산 야생 약초 채취 별도 연계 가능',
    filming_guide:'맥진 손목 짚는 장면 클로즈업. 지리산 약초밭 채취 장면. 완성 한방차 색깔 클로즈업.',
    broll_ideas:['맥진 손목 짚는 클로즈업','지리산 약초밭 채취 장면','완성 한방차 색깔','동의보감 허준 전시관','산청 지리산 배경 테마파크'],
    hooks:['내 체질이 뭔지 맥진으로 알았어요','동의보감 고장에서 한의학 체험했어요','내 몸이 처음 언어를 얻는 순간','허준이 약초 연구하던 지리산 자락','산청 한방 체험 꿀팁 있어요'],
    thumbnails:['맥진 손목 짚기','약초밭 채취','한방차 색깔','허준 전시관','지리산 배경 테마파크'],
    captions:{youtube:'산청 한방 체험 — 맥진으로 내 체질 처음 알았어요 🌿\n\n내 몸이 처음 설명되는 그 순간!\n동의보감 고장 지리산 자락\n\n📍 경남 산청군 동의보감 한방테마파크\n🌿 맥진 체질 진단+야생 약초 채취 연계\n\n#산청한방체험 #동의보감 #산청 #경남여행 #한방',instagram:'산청 한방 테마파크 맥진으로 내 체질 알았어요 🌿\n\n내 몸이 처음 설명되는 그 순간 신기해요 ✨\n허준 동의보감 고장\n\n📍 경남 산청 동의보감 테마파크\n\n#산청한방 #동의보감 #산청여행 #경남 #GemKorea',tiktok:'산청 한방 체험 꿀팁 🌿 맥진으로 내 체질 진단받으면 왜 내가 그 음식 좋아하는지 설명돼요! 내 몸이 처음 언어를 얻는 순간 // 동의보감 고장 산청 #산청한방 #동의보감 #경남여행'},
    hashtags:{korean:['#한국여행','#경남여행','#산청여행','#한방체험','#GemKorea'],place_specific:['#산청한방체험','#동의보감테마파크','#맥진체질','#허준지리산']}
  },
  {
    experience_id:'EX-IC-VIL-001', experience_name:'강화 고려 역사 체험마을', category_sub:'체험마을', region:'인천광역시',
    script_30s:'오늘은 강화도 고려 역사 체험마을에 왔어요. 고려 대몽항쟁 수도였던 곳이에요. 근데 아무도 안 알려주는 게 있어요 — 강화 고려궁지에서 보면 몽골군이 왜 못 건넜는지 알아요. 강화해협 물살이 그 이유예요. 너무 지형이 역사를 만든다는 게 실감나서 좋았습니다.',
    script_60s:'오늘은 인천 강화도 고려 역사 체험마을에 왔어요. 고려 시대 몽골 침략에 맞서 40년간 항전한 대몽항쟁의 수도가 강화도였어요. 고려궁지·고인돌·역사 체험관이 모여있어요. 근데 아무도 안 알려주는 꿀팁 하나 — 강화 고려궁지에 올라가면 강화해협이 내려다보여요. 그 해협의 물살이 놀라울 정도로 빠른데, 이게 바로 몽골군이 40년 동안 강화도를 건너지 못한 이유예요. 육전 최강이었던 몽골군이 해협 물살 때문에 배를 띄울 수 없었어요. 지형이 역사를 바꾼 거예요. 그 사실을 알고 해협을 내려다보면 강화도가 완전히 달리 보여요. 너무 지형이 역사를 만든다는 게 발로 느껴져서 좋았습니다.',
    secret_tip:'강화궁지에서 강화해협 물살 관찰 — 빠른 물살이 40년 대몽항쟁 가능했던 이유. 지형이 역사를 만든 현장. 고인돌·마니산·전등사 세트 강화도 하루 역사 코스',
    filming_guide:'강화궁지에서 내려다보는 강화해협 물살. 고려 갑옷 체험 착용 장면. 고인돌 배경 역사 설명.',
    broll_ideas:['강화궁지에서 강화해협 물살 관찰','고려 갑옷 체험 착용','고인돌 배경 역사 설명','대몽항쟁 기록 전시관','강화도 전등사 외경'],
    hooks:['몽골이 왜 강화도를 못 건넜는지 알아요?','강화해협 물살이 역사를 바꿨어요','고려 대몽항쟁 수도가 강화도예요','지형이 역사를 만든 현장 직접 봤어요','강화도 역사 꿀팁 있어요'],
    thumbnails:['강화해협 물살 관찰','고려 갑옷 착용','고인돌 역사 설명','대몽항쟁 전시관','전등사 외경'],
    captions:{youtube:'강화도 역사 체험 — 몽골이 왜 못 건넜는지 알았어요 ⚔️\n\n강화해협 물살이 40년 항전의 비밀!\n지형이 역사를 만든 현장\n\n📍 인천 강화군 고려궁지·역사 체험마을\n⚔️ 고인돌·마니산·전등사 세트 강화 하루 코스\n\n#강화도역사 #대몽항쟁 #고려역사 #인천여행 #강화도',instagram:'강화도 고려궁지에서 몽골이 왜 못 건넜는지 알았어요 ⚔️\n\n강화해협 물살이 이유예요 지형이 역사를 만든 거예요 ✨\n\n📍 인천 강화 고려 역사 체험마을\n\n#강화도역사 #대몽항쟁 #고려 #인천여행 #GemKorea',tiktok:'강화도 꿀팁 ⚔️ 고려궁지에서 강화해협 물살 보면 몽골이 왜 40년 동안 못 건넜는지 알아요! 지형이 역사를 만든 현장 // 고려 대몽항쟁 수도 #강화도역사 #대몽항쟁 #인천여행'},
    hashtags:{korean:['#한국여행','#인천여행','#강화도여행','#역사여행','#GemKorea'],place_specific:['#강화도역사체험','#대몽항쟁','#강화해협','#고려궁지']}
  },
  {
    experience_id:'EX-GJ-ADV-001', experience_name:'광주 무등산 패러글라이딩', category_sub:'어드벤처/레포츠', region:'광주광역시',
    script_30s:'오늘은 광주 무등산 패러글라이딩을 했어요. 무등산에서 광주 시내가 발아래예요. 근데 아무도 안 알려주는 게 있어요 — 패러글라이딩 중 교관이 클러치를 놓는 순간이 있어요. 그 순간 진짜 하늘을 혼자 나는 느낌이에요. 너무 그 10초가 패러글라이딩 전부라서 좋았습니다.',
    script_60s:'오늘은 광주 무등산 정상 부근에서 탠덤 패러글라이딩 체험을 했어요. 무등산 상단에서 이륙해 광주 시내와 영산강 평야를 내려다보며 하강하는 코스예요. 전문 교관과 2인 탑승이라 초보도 안전하게 즐길 수 있어요. 근데 아무도 안 알려주는 꿀팁 하나 — 패러글라이딩 비행 중 교관이 "이제 내가 손 놓을게요"라고 하는 순간이 있어요. 그 순간 진짜 혼자 하늘에 떠있는 느낌이 나요. 교관이 조종하고 있지만 그 순간 내가 새가 된 것 같은 감각이에요. 10초도 안 되는 그 순간이 패러글라이딩 전체 중 가장 특별해요. 교관에게 미리 그 순간을 요청하면 더 길게 해줘요. 너무 새가 된 그 10초가 전부라서 좋았습니다.',
    secret_tip:'탑승 중 교관 클러치 해제 순간 요청 — 진짜 혼자 날아가는 느낌. 교관에게 미리 요청하면 더 길게 해줌. 날씨 좋은 날 광주+영산강 전경이 선명하게 보임. 맑은 날 전화 예약 추천',
    filming_guide:'이륙 순간 발이 땅에서 떨어지는 클로즈업. 공중에서 광주 시내 발아래 파노라마. 착지 순간 환호.',
    broll_ideas:['이륙 순간 발 땅에서 떨어지기','공중 광주 시내 발아래 파노라마','착지 순간 환호','무등산 이륙 지점 전경','패러글라이딩 옆에서 본 전경'],
    hooks:['교관이 손 놓는 그 10초가 전부예요','새가 된 느낌을 알게 됐어요','광주 무등산 패러글라이딩 꿀팁','발아래 광주 시내가 보여요','탠덤이라 혼자도 안전하게 탈 수 있어요'],
    thumbnails:['이륙 순간 발 떨어지기','광주 시내 발아래 파노라마','착지 환호','무등산 이륙 지점','옆에서 본 전경'],
    captions:{youtube:'광주 무등산 패러글라이딩 — 교관 손 놓는 그 10초가 전부예요 🪂\n\n새가 된 느낌!\n광주 시내 발아래 파노라마\n\n📍 광주광역시 동구 무등산 패러글라이딩\n🪂 탠덤 탑승 (초보 OK) / 맑은 날 전화 예약\n\n#무등산패러글라이딩 #광주여행 #패러글라이딩 #어드벤처',instagram:'광주 무등산 패러글라이딩 교관 손 놓는 순간이 전부예요 🪂\n\n새가 된 그 10초 느낌 ✨\n광주 시내가 발아래로\n\n📍 광주 무등산 패러글라이딩\n\n#무등산패러글라이딩 #광주여행 #패러글라이딩 #GemKorea',tiktok:'광주 패러글라이딩 꿀팁 🪂 교관한테 미리 손 놓아달라고 요청하세요! 그 순간 진짜 새가 된 느낌 // 광주 시내 발아래 파노라마 무등산 탠덤 패러글라이딩 #광주패러글라이딩 #광주여행'},
    hashtags:{korean:['#한국여행','#광주여행','#어드벤처','#패러글라이딩','#GemKorea'],place_specific:['#무등산패러글라이딩','#광주패러글라이딩','#탠덤패러글라이딩','#교관클러치해제']}
  },
  {
    experience_id:'EX-GG-HAO-001', experience_name:'수원 화성행궁 한옥 스테이', category_sub:'한옥 숙박', region:'경기도',
    script_30s:'오늘은 수원화성 한옥 스테이를 했어요. 유네스코 성곽 바로 옆이에요. 근데 아무도 안 알려주는 게 있어요 — 새벽에 성곽 조명이 켜진 수원화성을 혼자 걸어요. 투숙객 전용 시간이에요. 너무 유네스코 성곽을 새벽에 혼자 걷는 게 다른 경험이라서 좋았습니다.',
    script_60s:'오늘은 경기도 수원 화성행궁 인근 한옥에서 하룻밤을 묵었어요. 유네스코 세계유산 수원화성이 걸어서 5분 거리예요. 정조대왕의 효심이 담긴 화성은 낮에도 아름답지만 야간 조명이 켜지면 완전히 달라요. 근데 아무도 안 알려주는 꿀팁 하나 — 한옥 스테이를 하면 새벽에 수원화성 성곽을 자유롭게 걸을 수 있어요. 일반 관광객이 다 빠진 새벽 5~6시에 성곽 위를 걸으면 조명이 켜진 성벽과 아침 안개가 어우러지는 풍경이 진짜 조선 시대 같아요. 낮에 수십만 명이 찾는 화성을 새벽에 혼자 걷는 경험은 투숙객만 할 수 있어요. 너무 유네스코 성곽 새벽이 이렇게 다른 줄 몰랐어서 좋았습니다.',
    secret_tip:'한옥 스테이 후 새벽 5~6시 수원화성 성곽 혼자 걷기 — 조명+안개 어우러지는 조선 시대 같은 분위기. 낮 수십만 명 vs 새벽 혼자. 성곽 야간 투어 별도 신청 가능',
    filming_guide:'새벽 조명 켜진 성곽 걷는 실루엣. 한옥 마당에서 바라보는 화성 방향. 화성 서장대에서 수원 시내 새벽 파노라마.',
    broll_ideas:['새벽 성곽 걷는 실루엣','한옥 마당에서 화성 방향','서장대 새벽 수원 파노라마','화성 야간 조명 장면','한옥 온돌방 아침 햇빛'],
    hooks:['수원화성 새벽을 혼자 걸었어요','투숙객만 즐기는 화성 새벽 성곽','유네스코 성곽 새벽이 완전 달라요','낮 수십만 명 새벽 나 혼자','수원화성 한옥 스테이 꿀팁'],
    thumbnails:['새벽 성곽 걷는 실루엣','한옥 마당에서 화성 방향','서장대 새벽 파노라마','화성 야간 조명','한옥 온돌방 아침'],
    captions:{youtube:'수원화성 한옥 스테이 — 새벽 성곽 혼자 걸었어요 🏯\n\n투숙객만 즐기는 유네스코 성곽 새벽!\n낮 수십만 명이 찾는 곳을 새벽에 혼자\n\n📍 경기도 수원 화성행궁 인근 한옥 스테이\n🏯 새벽 5~6시 성곽 자유 산책\n\n#수원화성한옥스테이 #수원 #경기여행 #유네스코 #한옥숙박',instagram:'수원화성 한옥 스테이 새벽 성곽 혼자 걸었어요 🏯\n\n투숙객만의 유네스코 새벽 ✨\n조명+안개 완전 조선 시대 같아요\n\n📍 경기 수원 화성행궁 인근 한옥\n\n#수원화성한옥 #수원여행 #경기 #유네스코 #GemKorea',tiktok:'수원화성 한옥 스테이 꿀팁 🏯 새벽 5~6시 성곽 혼자 걸어요! 낮에 수십만 명이 찾는 유네스코 성곽 새벽에 나 혼자 // 조명+안개 조선 시대 분위기 #수원화성한옥 #수원여행 #유네스코'},
    hashtags:{korean:['#한국여행','#경기여행','#수원여행','#한옥숙박','#GemKorea'],place_specific:['#수원화성한옥스테이','#수원화성새벽','#유네스코성곽','#화성성곽걷기']}
  },
  {
    experience_id:'EX-GN-HAO-001', experience_name:'하동 악양 최참판댁 고택 체험', category_sub:'한옥 숙박', region:'경상남도',
    script_30s:'오늘은 하동 최참판댁 고택에서 하룻밤 묵었어요. 소설 토지의 배경이에요. 근데 아무도 안 알려주는 게 있어요 — 마당에서 섬진강이 보여요. 토지 속 최씨 집안이 이 강을 바라봤던 거예요. 소설과 현실이 겹치는 순간이에요. 너무 소설 배경이 실제가 되는 경험이라서 좋았습니다.',
    script_60s:'오늘은 경남 하동 악양 최참판댁 고택에서 하룻밤을 묵었어요. 박경리 소설 토지의 배경지 평사리에 복원된 최씨 집안 고택이에요. 드라마 토지 촬영지이기도 해요. 근데 아무도 안 알려주는 꿀팁 하나 — 최참판댁 사랑채 마루에 앉으면 악양 들판 너머로 섬진강이 보여요. 소설 속 최씨 집안 사람들이 이 마루에 앉아서 이 강을 바라봤던 거예요. 그 사실을 알고 마루에 앉아 섬진강을 바라보면 소설과 현실이 겹치는 기묘한 감각이 생겨요. 봄에는 매화꽃이 피고 여름에는 섬진강 물소리가 들려요. 박경리 토지 문학관이 도보 5분 거리라 문학 여행으로 묶을 수 있어요. 너무 소설 속 공간이 실제가 되는 경험이라서 좋았습니다.',
    secret_tip:'최참판댁 사랑채 마루 — 악양 들판+섬진강 보이는 소설 속 공간. 소설과 현실 겹치는 기묘한 감각. 박경리 토지 문학관 도보 5분. 봄 매화 시즌 방문이 가장 아름다움',
    filming_guide:'사랑채 마루에서 섬진강 바라보는 장면. 고택 마당과 악양 들판 배경. 봄 매화꽃 고택 전경.',
    broll_ideas:['사랑채 마루에서 섬진강 바라보기','고택 마당과 악양 들판 배경','봄 매화꽃 최참판댁 전경','토지 문학관 외경','고택 온돌방 아침 햇빛'],
    hooks:['토지 속 최씨 집안 마루에 앉았어요','소설과 현실이 겹치는 순간 느꼈어요','최참판댁 마루에서 섬진강이 보여요','박경리 토지 배경지 고택 숙박','하동 평사리 소설 속 공간'],
    thumbnails:['사랑채 마루에서 섬진강 바라보기','고택 마당 악양 들판','봄 매화 전경','토지 문학관','고택 온돌방 아침'],
    captions:{youtube:'하동 최참판댁 고택 — 사랑채에서 소설과 현실이 겹쳐요 📚\n\n마루에 앉으면 섬진강 보여요!\n박경리 토지 배경지 직접 체험\n\n📍 경남 하동군 악양면 최참판댁\n📚 박경리 토지 문학관 도보 5분\n💡 봄 매화 시즌이 가장 아름다움\n\n#최참판댁 #하동 #경남여행 #박경리토지 #고택숙박',instagram:'하동 최참판댁 사랑채 마루에서 소설 속이 됐어요 📚\n\n악양 들판 너머 섬진강 — 소설과 현실이 겹치는 순간 ✨\n\n📍 경남 하동 최참판댁\n\n#최참판댁 #하동여행 #경남 #박경리토지 #GemKorea',tiktok:'최참판댁 꿀팁 📚 사랑채 마루에 앉으면 악양 들판이랑 섬진강 보여요! 소설 속 최씨 집안이 바라본 그 강 // 소설과 현실이 겹치는 기묘한 순간 #최참판댁 #하동여행 #경남'},
    hashtags:{korean:['#한국여행','#경남여행','#하동여행','#고택숙박','#GemKorea'],place_specific:['#최참판댁','#박경리토지','#섬진강뷰','#하동고택']}
  },
  {
    experience_id:'EX-GG-MUS-003', experience_name:'파주 출판도시 지혜의 숲', category_sub:'박물관', region:'경기도',
    script_30s:'오늘은 파주 지혜의 숲에 왔어요. 천장까지 책이 가득한 200m 도서관이에요. 근데 아무도 안 알려주는 게 있어요 — 맨 안쪽 끝까지 걸어가면 완전히 책에 둘러싸이는 순간이 있어요. 그 구도가 진짜예요. 너무 책이 공간이 된 것 같아서 좋았습니다.',
    script_60s:'오늘은 경기도 파주 출판도시 지혜의 숲에 왔어요. 50만 권의 책이 천장까지 가득 쌓인 200m 거대 도서 창고형 도서관이에요. 출판사·학자·작가들이 기증한 책들로 채워져 있어요. 입장료가 없고 24시간 운영이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 지혜의 숲 1관에서 3관까지 이어진 복도를 끝까지 걷다가 특정 지점에서 뒤를 돌아보면 200m 책의 터널이 펼쳐져요. 그 구도에서 사진을 찍으면 책이 양쪽에서 하늘까지 쭉 올라가는 압도적인 사진이 나와요. 그 포인트를 찾는 게 지혜의 숲 핵심이에요. 카페에서 커피 한 잔 사서 책 향기 속에서 마시는 것도 추천해요. 너무 책이 공간이 된 그 압도적 분위기라서 좋았습니다.',
    secret_tip:'1관~3관 복도 중간에서 뒤 돌아보기 — 200m 책 터널 압도적 사진 포인트. 포인트 찾는 것이 핵심. 24시간 무료 운영. 카페 커피+책 향기 조합. 헤이리 예술마을 세트 코스',
    filming_guide:'복도 끝에서 뒤 돌아본 200m 책 터널 구도. 천장까지 가득 찬 책 클로즈업. 책 향기 속 커피 마시는 장면.',
    broll_ideas:['복도 끝에서 뒤 돌아본 200m 책 터널','천장까지 가득 찬 책 클로즈업','책 향기 속 커피 마시는 장면','지혜의 숲 입구 전경','책 기증자 이름 라벨 클로즈업'],
    hooks:['200m 책 터널이 진짜 있어요','천장까지 책이 가득한 도서관','파주 지혜의 숲 사진 포인트 알려드려요','무료 24시간 책 도서관이에요','책 향기 속 커피 마시는 그 느낌'],
    thumbnails:['200m 책 터널 구도','천장까지 책 클로즈업','책 향기 커피','지혜의 숲 입구','책 라벨 클로즈업'],
    captions:{youtube:'파주 지혜의 숲 — 200m 책 터널 포인트 있어요 📚\n\n복도 끝에서 뒤 돌아보면 압도적인 구도!\n무료 24시간 운영\n\n📍 경기도 파주시 출판도시 지혜의 숲\n📚 무료 / 24시간 / 1관~3관 이어진 복도\n\n#지혜의숲 #파주 #경기여행 #책 #도서관',instagram:'파주 지혜의 숲 200m 책 터널 구도 찾았어요 📚\n\n복도 끝에서 뒤 돌아보면 이 사진 나와요 ✨\n무료 24시간 책 도서관\n\n📍 경기 파주 출판도시\n\n#지혜의숲 #파주여행 #경기도 #책 #GemKorea',tiktok:'지혜의 숲 꿀팁 📚 복도 중간에서 뒤 돌아보면 200m 책 터널이 나와요! 그 구도가 압도적인 사진 // 무료 24시간 운영 헤이리 세트 코스 #지혜의숲 #파주여행 #경기'},
    hashtags:{korean:['#한국여행','#경기여행','#파주여행','#도서관','#GemKorea'],place_specific:['#지혜의숲','#200m책터널','#파주출판도시','#무료24시간']}
  },
  {
    experience_id:'EX-GG-MUS-004', experience_name:'수원 국립농업박물관', category_sub:'박물관', region:'경기도',
    script_30s:'오늘은 수원 국립농업박물관에 왔어요. 2022년 개관 아시아 최대 농업 박물관이에요. 근데 아무도 안 알려주는 게 있어요 — 씨앗 도서관이 있어요. 멸종위기 씨앗들을 보관하는 곳이에요. 씨앗 하나가 문명이라는 걸 알게 돼요. 너무 씨앗이 이렇게 귀하다는 게 좋았습니다.',
    script_60s:'오늘은 경기도 수원 국립농업박물관에 왔어요. 2022년 개관한 아시아 최대 규모 농업 전문 박물관이에요. 선사 시대 농업부터 현대 스마트팜까지 전 과정을 체험할 수 있어요. 무료예요. 근데 아무도 안 알려주는 꿀팁 하나 — 박물관 안에 씨앗 도서관이 있어요. 멸종위기에 처한 씨앗들을 수집·보존하는 공간인데, 씨앗 하나하나에 이름과 발견 지역이 적혀있어요. 인류 역사상 가장 중요한 발명이 씨앗 재배라는 사실과 함께 지금 멸종되고 있는 씨앗들을 보면서 씨앗 하나가 얼마나 귀한 존재인지 실감해요. 그 씨앗들이 사라지면 우리가 먹는 음식도 사라진다는 것이요. 너무 씨앗 하나가 문명이라는 게 처음으로 실감나서 좋았습니다.',
    secret_tip:'씨앗 도서관 — 멸종위기 씨앗 수집 보존 공간. 씨앗 하나=문명 실감. 무료 입장. 어린이 스마트팜 체험과 씨앗 도서관 세트 코스. 수원화성+국립농업박물관 하루 코스',
    filming_guide:'씨앗 도서관 수천 개 씨앗 보관 캐비닛. 선사 시대 농업 도구 전시. 어린이 스마트팜 체험 인터랙티브.',
    broll_ideas:['씨앗 도서관 캐비닛 클로즈업','멸종위기 씨앗 이름 라벨','선사 시대 농업 도구 전시','어린이 스마트팜 체험','국립농업박물관 외경'],
    hooks:['씨앗 도서관이 여기 있어요','멸종위기 씨앗들을 보관하는 곳','씨앗 하나가 문명이라는 게 실감났어요','아시아 최대 농업박물관이 무료예요','씨앗이 이렇게 귀하다는 걸 알았어요'],
    thumbnails:['씨앗 도서관 캐비닛','멸종위기 씨앗 라벨','농업 도구 전시','어린이 스마트팜','국립농업박물관 외경'],
    captions:{youtube:'수원 국립농업박물관 — 씨앗 도서관이 있어요 🌱\n\n멸종위기 씨앗 보관 공간!\n씨앗 하나가 문명이라는 게 실감나요\n\n📍 경기도 수원시 국립농업박물관\n🌱 무료 입장 / 씨앗 도서관+스마트팜 체험\n\n#국립농업박물관 #수원 #경기여행 #씨앗도서관 #무료박물관',instagram:'수원 국립농업박물관 씨앗 도서관 봤어요 🌱\n\n멸종위기 씨앗 보관 — 씨앗 하나가 문명이에요 ✨\n아시아 최대 농업박물관 무료\n\n📍 경기 수원 국립농업박물관\n\n#국립농업박물관 #수원여행 #경기 #씨앗도서관 #GemKorea',tiktok:'수원 국립농업박물관 꿀팁 🌱 씨앗 도서관이 있어요! 멸종위기 씨앗들 보관하는 곳 // 씨앗 하나가 문명이라는 게 처음으로 실감되는 체험 무료예요 #국립농업박물관 #수원여행 #씨앗도서관'},
    hashtags:{korean:['#한국여행','#경기여행','#수원여행','#박물관','#GemKorea'],place_specific:['#국립농업박물관','#씨앗도서관','#멸종위기씨앗','#아시아최대농업박물관']}
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
