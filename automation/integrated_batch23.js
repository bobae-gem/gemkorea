const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const now = new Date().toISOString().slice(0,19);

const newExps = [
  {experience_id:'EX-JN-NAT-035',name:'담양 메타세쿼이아 가로수길',category_main:'문화/체험',category_sub:'자연체험',region_main:'JN',region_sub:'전라남도 담양군',address:'전라남도 담양군 담양읍 메타세쿼이아로 20',lat:35.3422,lng:126.9878,price:'성인 2,000원',duration:'1시간',reservation_required:false,target_user:['커플','개인','가족'],nearby_places:[],related_heritage_ids:[],short_description:'담양 읍내에서 국도변 메타세쿼이아 나무 수백 그루가 2km 가로수 터널을 이루는 체험이다. 봄 초록·가을 단풍·겨울 설경이 각각 다른 아름다움을 보여주며 드라이브와 도보 산책 모두 즐길 수 있다.',source_urls:['https://www.damyang.go.kr/'],data_confidence:'high',tags:['메타세쿼이아','담양','전남','가로수길','사계절','드라이브','산책'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중',phone:'061-380-2910'},
  {experience_id:'EX-GW-NAT-034',name:'고성 공룡 발자국+공룡박물관',category_main:'문화/체험',category_sub:'역사 체험',region_main:'GW',region_sub:'경상남도 고성군',address:'경상남도 고성군 하이면 공룡로 618',lat:35.0167,lng:128.3392,price:'성인 9,000원',duration:'2~3시간',reservation_required:false,target_user:['가족','어린이'],nearby_places:[],related_heritage_ids:[],short_description:'세계 3대 공룡 화석지 경남 고성에서 공룡 발자국 화석과 박물관을 탐방하는 체험이다. 1억 년 전 공룡이 걸어간 실제 발자국이 해안 암반에 남아있으며 직접 밟아볼 수 있다.',source_urls:['https://www.coseong.go.kr/'],data_confidence:'high',tags:['고성공룡발자국','고성','경남','공룡','화석','1억년전','어린이'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00',phone:'055-670-4161'},
  {experience_id:'EX-GG-NAT-039',name:'광명 동굴 와인+아쿠아리움',category_main:'문화/체험',category_sub:'자연체험',region_main:'GG',region_sub:'경기도 광명시',address:'경기도 광명시 가학로85번길 142',lat:37.4362,lng:126.8697,price:'성인 8,000원',duration:'2~3시간',reservation_required:false,target_user:['커플','가족','개인'],nearby_places:[],related_heritage_ids:[],short_description:'일제강점기 금광이었던 광명 동굴에서 와인 동굴·황금 폭포·동굴 아쿠아리움을 탐방하는 체험이다. 연중 10도를 유지하는 동굴 안에서 열대어를 보고 와인을 시음하는 색다른 경험이다.',source_urls:['https://www.gm.go.kr/cave/'],data_confidence:'high',tags:['광명동굴','광명','경기','와인동굴','아쿠아리움','황금폭포','폐광'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00 (월요일 휴관)',phone:'02-2680-6448'},
  {experience_id:'EX-JN-NAT-036',name:'진안 구봉산 구름다리',category_main:'문화/체험',category_sub:'어드벤처/레포츠',region_main:'JN',region_sub:'전라북도 진안군',address:'전라북도 진안군 진안읍 구봉로 산 정상',lat:35.8217,lng:127.4358,price:'성인 3,000원',duration:'2~3시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'진안 구봉산 정상부 9개 봉우리 사이를 연결하는 구름다리를 건너는 어드벤처 체험이다. 산 정상부 구름다리 아래로 아찔하게 내려다보이는 전북 진안고원 전경이 압도적이다.',source_urls:['https://www.jinan.go.kr/'],data_confidence:'high',tags:['구봉산구름다리','진안','전북','구름다리','어드벤처','진안고원','아찔'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~17:00',phone:'063-430-2400'},
  {experience_id:'EX-GN-NAT-033',name:'합천 영암사지 단풍 탐방',category_main:'문화/체험',category_sub:'역사 체험',region_main:'GN',region_sub:'경상남도 합천군',address:'경상남도 합천군 가회면 황매산 아래 영암사지',lat:35.5014,lng:127.9478,price:'무료',duration:'1~2시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'황매산 자락 합천 영암사지에서 가을 단풍을 감상하는 체험이다. 통일 신라 시대 폐사지에 남은 탑과 석조 유물 주변으로 단풍이 물드는 경관이 합천에서 가장 아름다운 가을 명소다.',source_urls:['https://www.hc.go.kr/'],data_confidence:'high',tags:['영암사지','합천','경남','단풍','폐사지','석탑','가을'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'10~11월 단풍 시즌 (무료)',phone:'055-930-3400'},
  {experience_id:'EX-GW-NAT-035',name:'원주 치악산 황장사 코스',category_main:'문화/체험',category_sub:'자연체험',region_main:'GW',region_sub:'강원특별자치도 원주시',address:'강원특별자치도 원주시 신림면 치악로 1739',lat:37.3528,lng:128.0922,price:'무료',duration:'3~4시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'치악산 국립공원 황장사 코스를 트레킹하는 체험이다. 은혜 갚은 꿩 전설이 있는 황장사 방향 코스가 가장 아름다운 계곡 코스로 여름 피서지이자 가을 단풍 명소다.',source_urls:['https://chiaksan.knps.or.kr/'],data_confidence:'high',tags:['치악산황장사','원주','강원','계곡','국립공원','가을단풍','꿩전설'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중',phone:'033-740-9900'},
  {experience_id:'EX-JN-NAT-037',name:'광양 금호동 매화꽃 길',category_main:'문화/체험',category_sub:'자연체험',region_main:'JN',region_sub:'전라남도 광양시',address:'전라남도 광양시 다압면 금호동 매화길',lat:35.0586,lng:127.7094,price:'무료',duration:'1시간',reservation_required:false,target_user:['커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'광양 다압면 금호동 매화 마을에서 3월 매화꽃을 감상하는 봄 체험이다. 청매실 농원 대형 매화밭과 달리 소박한 마을 골목 담장 너머 매화꽃이 더 자연스럽고 아름다운 숨은 봄 명소다.',source_urls:['https://www.gwangyang.go.kr/'],data_confidence:'high',tags:['광양매화','금호동','광양','전남','매화','봄꽃','숨은명소'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'3월 매화 시즌',phone:'061-797-2657'},
  {experience_id:'EX-GN-NAT-034',name:'사천 가산어촌 체험마을',category_main:'문화/체험',category_sub:'해양체험',region_main:'GN',region_sub:'경상남도 사천시',address:'경상남도 사천시 사남면 가산어촌체험마을',lat:35.0700,lng:128.0700,price:'1인 12,000원~',duration:'2시간',reservation_required:true,target_user:['가족','어린이'],nearby_places:[],related_heritage_ids:[],short_description:'사천 남해안에서 조개·낙지·바지락을 잡는 갯벌 어촌 체험이다. 맨발로 갯벌을 걷고 해산물을 잡은 후 즉석에서 구워 먹는 어촌 체험으로 어린이 체험학습 코스로 인기다.',source_urls:['https://www.sacheon.go.kr/'],data_confidence:'high',tags:['가산어촌체험','사천','경남','갯벌','조개잡기','바지락','어촌체험'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'seasonal',operating_hours:'5~10월 (썰물 시간)',phone:'055-831-2114'},
  {experience_id:'EX-GG-NAT-040',name:'여주 세종대왕릉 야간 개방',category_main:'문화/체험',category_sub:'역사 체험',region_main:'GG',region_sub:'경기도 여주시',address:'경기도 여주시 능서면 왕대리 세종대왕릉',lat:37.2921,lng:127.5583,price:'성인 500원',duration:'1~2시간',reservation_required:false,target_user:['커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'여주 세종대왕릉이 특정 시기 야간 개방될 때 달빛 아래 왕릉을 탐방하는 체험이다. 조선 왕릉의 소나무 숲이 밤에 더 신비롭게 보이며 달빛 왕릉 야경이 아름다운 특별한 체험이다.',source_urls:['https://royaltombs.cha.go.kr/'],data_confidence:'high',tags:['세종대왕릉야간','여주','경기','야간개방','달빛왕릉','소나무숲','조선왕릉'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'seasonal',operating_hours:'특정 시기 야간 개방 (홈페이지 확인)',phone:'031-884-9191'},
  {experience_id:'EX-JN-NAT-038',name:'보성 태백산맥 문학 투어',category_main:'문화/체험',category_sub:'역사 체험',region_main:'JN',region_sub:'전라남도 보성군',address:'전라남도 보성군 벌교읍 태백산맥길 일원',lat:34.8289,lng:127.3428,price:'무료',duration:'1~2시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'조정래 소설 태백산맥의 배경지 벌교에서 소설 속 공간을 직접 걷는 문학 투어다. 벌교 홍교·현부자 음식점·소화 다리 등 소설 속 공간이 실제로 남아있어 문학과 역사를 동시에 체험한다.',source_urls:['https://www.boseong.go.kr/'],data_confidence:'high',tags:['태백산맥문학','벌교','보성','전남','조정래','문학투어','한국전쟁'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (무료)',phone:'061-850-5210'},
  {experience_id:'EX-GG-NAT-041',name:'인천 자유공원+개항장 야경',category_main:'문화/체험',category_sub:'야경/야간투어',region_main:'GG',region_sub:'인천광역시 중구',address:'인천광역시 중구 자유공원로 19 자유공원',lat:37.4769,lng:126.6214,price:'무료',duration:'1~2시간',reservation_required:false,target_user:['커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'인천 자유공원 정상에서 인천항·차이나타운·개항장 야경을 감상하는 체험이다. 1888년 조성된 한국 최초 서양식 공원에서 맥아더 동상과 함께 인천 항구 전체 야경이 한눈에 들어온다.',source_urls:['https://www.icjgss.or.kr/'],data_confidence:'high',tags:['인천자유공원','인천','야경','개항장','맥아더','차이나타운','한국최초'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (무료)',phone:'032-760-6470'},
  {experience_id:'EX-GN-NAT-035',name:'밀양 만어사 중생대 바위',category_main:'문화/체험',category_sub:'역사 체험',region_main:'GN',region_sub:'경상남도 밀양시',address:'경상남도 밀양시 삼랑진읍 만어로 776',lat:35.5125,lng:128.9789,price:'성인 2,000원',duration:'1~2시간',reservation_required:false,target_user:['개인','가족'],nearby_places:[],related_heritage_ids:[],short_description:'중생대 경상계 지층이 그대로 노출된 밀양 만어사 암괴류를 탐방하는 체험이다. 만어사 마당 가득 어류 형태를 한 물고기 바위(어산불영)가 종(쇠 두드리면 소리남)처럼 소리가 나는 신비한 자연 현상이다.',source_urls:['https://www.miryang.go.kr/'],data_confidence:'high',tags:['만어사','밀양','경남','어산불영','물고기바위','소리나는돌','신비'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00',phone:'055-359-5638'}
];

const newShorts = [
  {
    experience_id:'EX-SE-TRD-001', experience_name:'홍대 K-POP 댄스 체험', category_sub:'문화예술', region:'서울특별시',
    script_30s:'오늘은 홍대 K-POP 댄스 체험을 했어요. 외국인이 제일 좋아하는 한국 체험이에요. 근데 아무도 안 알려주는 게 있어요 — K-POP 안무를 배울 때 리듬이 아니라 카운트로 배워야 해요. 1·2·3·4 박자에 맞춰야 해요. 리듬으로 배우면 잊어버려요. 너무 숫자가 안무를 기억시킨다는 게 좋았습니다.',
    script_60s:'오늘은 서울 마포구 홍대 K-POP 댄스 스튜디오에서 K-POP 안무 체험을 했어요. 전문 강사에게 BTS·블랙핑크·뉴진스 등 최신 K-POP 안무를 1시간 안에 배우는 체험이에요. 근데 아무도 안 알려주는 꿀팁 하나 — K-POP 안무를 빠르게 익히는 방법이 있어요. 음악 리듬으로 배우지 말고 카운트(숫자)로 배워야 해요. 1·2·3·4 박자에 각 동작을 배치하면 음악 없이도 안무를 기억할 수 있어요. 음악 리듬으로만 배우면 음악이 없을 때 다 잊어버려요. 강사들이 "원 투 스리 포" 카운트를 외치면서 가르치는 이유예요. 집에서 연습할 때도 음악 없이 카운트로 먼저 연습하면 훨씬 빨리 익혀요. 너무 숫자가 안무의 뼈대라는 게 좋았습니다.',
    secret_tip:'K-POP 안무 암기 핵심 = 카운트(1·2·3·4)로 배우기 — 음악 없이도 기억 가능. 리듬으로만 배우면 음악 없을 때 잊어버림. 카운트 먼저 익힌 후 음악에 맞추기',
    filming_guide:'카운트 외치며 안무 배우는 강사 장면. K-POP 안무 처음 따라하는 체험자 표정. 완성 1분 안무 영상.',
    broll_ideas:['카운트 외치며 안무 지도하는 강사','처음 따라하는 체험자 표정','완성 1분 안무 영상','홍대 K-POP 스튜디오 외경','외국인 참여자 반응'],
    hooks:['K-POP 안무는 카운트로 배워야 해요','1234 박자가 안무의 뼈대예요','리듬으로만 배우면 잊어버려요','음악 없이도 기억하는 방법','홍대 K-POP 댄스 꿀팁'],
    thumbnails:['카운트 지도하는 강사','처음 따라하는 체험자','완성 안무 영상','스튜디오 외경','외국인 반응'],
    captions:{youtube:'홍대 K-POP 댄스 체험 — 카운트로 배워야 해요 💃\n\n1·2·3·4 박자가 안무의 뼈대!\n리듬으로만 배우면 잊어버려요\n\n📍 서울 마포구 홍대 K-POP 댄스 스튜디오\n💃 1시간 최신 K-POP 안무 체험\n\n#홍대KPOPdance #K팝댄스체험 #서울여행 #홍대 #한류체험',instagram:'홍대 K-POP 댄스 카운트로 배워야 해요 💃\n\n1234 박자가 안무 뼈대 ✨\n리듬으로만 배우면 잊어버려요\n\n📍 서울 홍대 K-POP 댄스 스튜디오\n\n#홍대Kpop댄스 #K팝댄스 #서울여행 #홍대 #GemKorea',tiktok:'홍대 K-POP 댄스 꿀팁 💃 카운트로 배워야 해요! 1234 박자에 동작 배치하면 음악 없이도 기억 가능 // 리듬으로만 배우면 잊어버려요 #홍대Kpop댄스 #K팝댄스 #서울여행'},
    hashtags:{korean:['#한국여행','#서울여행','#홍대','#K팝댄스','#GemKorea'],place_specific:['#홍대Kpop댄스체험','#K팝안무카운트','#홍대한류체험','#외국인추천K팝']}
  },
  {
    experience_id:'EX-SE-TRD-002', experience_name:'서울 한복 대여 + 경복궁 투어', category_sub:'역사 체험', region:'서울특별시',
    script_30s:'오늘은 한복 입고 경복궁을 걸었어요. 한복 입으면 입장 무료예요. 근데 아무도 안 알려주는 게 있어요 — 한복 빌릴 때 계절 색상이 있어요. 봄에는 연한 색, 여름에는 밝은 색이 사진이 더 예뻐요. 계절 맞는 색이 인생 사진 비결이에요. 너무 색 선택이 이렇게 중요하다는 게 좋았습니다.',
    script_60s:'오늘은 서울 경복궁 인근에서 한복을 빌려 입고 경복궁·북촌·인사동을 거니는 한복 투어를 했어요. 한복을 입으면 경복궁 입장이 무료예요. 근데 아무도 안 알려주는 꿀팁 하나 — 한복 색상 선택이 사진에 엄청난 영향을 줘요. 계절마다 사진이 잘 나오는 색이 달라요. 봄에는 연두·연분홍 등 파스텔 계열이 꽃 배경과 어울려요. 여름에는 밝고 선명한 색이 초록 배경에 눈에 띄어요. 가을에는 주황·갈색 계열이 단풍과 어울리고 겨울에는 빨강·남색 진한 색이 설경 배경에 잘 나와요. 한복 대여점에서 고를 때 이 계절 색상 법칙을 알면 사진이 완전히 달라져요. 너무 색 선택 하나가 인생 사진을 만든다는 게 좋았습니다.',
    secret_tip:'계절별 한복 색 선택 = 인생 사진 비결 — 봄 파스텔·여름 선명·가을 주황갈색·겨울 진한 빨강남색. 한복 대여 시 계절 맞는 색 고르기. 경복궁 입장 무료. 이른 아침 관광객 적은 시간',
    filming_guide:'한복 경복궁 광화문 배경 전신 촬영. 계절별 색상 비교 사진. 근정전 배경 한복 실루엣.',
    broll_ideas:['한복 경복궁 광화문 배경 전신','계절별 색상 비교 사진','근정전 배경 한복 실루엣','경복궁 내부 한복 거닐기','한복 치마 펼치는 슬로우'],
    hooks:['한복 색상이 사진을 결정해요','계절별 맞는 색이 따로 있어요','봄에는 파스텔 가을에는 주황','경복궁 한복 입장 무료예요','서울 한복 투어 꿀팁'],
    thumbnails:['한복 광화문 전신 촬영','계절별 색상 비교','근정전 배경 실루엣','경복궁 내부 한복','한복 치마 슬로우'],
    captions:{youtube:'서울 한복 경복궁 투어 — 계절별 색이 인생 사진 비결이에요 👘\n\n봄 파스텔·여름 선명·가을 주황·겨울 진한 색!\n한복 입으면 경복궁 입장 무료\n\n📍 서울 종로구 경복궁 인근 한복 대여점\n👘 이른 아침 관광객 없는 경복궁 추천\n\n#서울한복경복궁 #한복 #서울여행 #경복궁 #인생사진',instagram:'서울 한복 계절별 색이 인생 사진 비결이에요 👘\n\n봄 파스텔 가을 주황 색 선택이 핵심 ✨\n경복궁 한복 입장 무료\n\n📍 서울 종로 경복궁 한복 대여\n\n#서울한복 #경복궁 #서울여행 #한복 #GemKorea',tiktok:'서울 한복 경복궁 꿀팁 👘 계절별 색상이 인생 사진 비결! 봄 파스텔·여름 선명·가을 주황·겨울 진한 색 // 경복궁 한복 입장 무료예요 #서울한복 #경복궁 #서울여행'},
    hashtags:{korean:['#한국여행','#서울여행','#경복궁','#한복','#GemKorea'],place_specific:['#서울한복경복궁','#계절별한복색','#경복궁한복무료','#인생사진한복']}
  },
  {
    experience_id:'EX-GG-MAK-001', experience_name:'파주 활판 인쇄 체험 (출판도시)', category_sub:'전통공예', region:'경기도',
    script_30s:'오늘은 파주 출판도시에서 활판 인쇄를 했어요. 구텐베르크 방식이에요. 근데 아무도 안 알려주는 게 있어요 — 활자를 조판할 때 글자가 거울처럼 반전돼요. 종이에 찍히면 바로 읽혀요. 장인이 반전된 글자를 읽는 게 훈련된 특수 능력이에요. 너무 장인의 눈이 신기해서 좋았습니다.',
    script_60s:'오늘은 경기도 파주 출판도시에서 전통 활판 인쇄 체험을 했어요. 납 활자를 하나씩 골라 조판하고 잉크를 묻혀 종이에 찍는 구텐베르크 방식 인쇄예요. 근데 아무도 안 알려주는 꿀팁 하나 — 활판 인쇄에서 가장 신기한 점이 활자가 모두 거울 반전이에요. 조판 과정에서 보이는 글자들이 다 좌우가 바뀐 거예요. 장인들은 이 반전된 글자를 직접 읽을 수 있어요. 수십 년 경력이 만들어낸 특수한 능력이에요. 체험에서 실제 납 활자를 보면 알파벳이나 한글이 거울처럼 반전된 것을 보게 되는데, 그걸 읽는 장인이 얼마나 숙련됐는지 실감나요. 종이에 찍어서 정상 글자가 나오는 그 순간이 체험의 하이라이트예요. 너무 반전이 정상이 되는 그 마법이 좋았습니다.',
    secret_tip:'활자 반전 = 장인의 특수 능력 — 좌우 거울 반전 활자를 직접 읽는 수십 년 훈련. 체험 시 반전 글자 관찰이 핵심. 파주 지혜의 숲+활판 인쇄 세트 코스',
    filming_guide:'납 활자 반전 모습 클로즈업. 종이에 찍히는 순간 글자 완성. 장인이 반전 글자 읽는 장면.',
    broll_ideas:['납 활자 반전 모습 클로즈업','종이에 찍히는 글자 완성','장인 반전 글자 읽기','활판 조판 과정','완성 인쇄물 들어올리기'],
    hooks:['활자가 다 거울처럼 반전이에요','장인이 반전 글자를 읽어요','종이에 찍히면 바로 읽혀요','수십 년 훈련의 특수 능력','파주 활판 인쇄 체험 꿀팁'],
    thumbnails:['납 활자 반전 클로즈업','종이 인쇄 완성','장인 반전 글자 읽기','활판 조판 과정','완성 인쇄물'],
    captions:{youtube:'파주 활판 인쇄 체험 — 활자가 다 거울 반전이에요 📰\n\n장인이 반전 글자 읽는 특수 능력!\n종이에 찍히면 바로 읽혀요\n\n📍 경기도 파주시 출판도시 활판 인쇄 공방\n📰 파주 지혜의 숲 세트 코스 추천\n\n#파주활판인쇄 #파주 #경기여행 #활판인쇄 #전통인쇄',instagram:'파주 활판 인쇄 납 활자가 다 거울 반전이에요 📰\n\n장인이 반전 글자 읽는 특수 능력 ✨\n종이 찍히는 순간이 하이라이트\n\n📍 경기 파주 출판도시\n\n#파주활판인쇄 #파주여행 #경기 #활판인쇄 #GemKorea',tiktok:'파주 활판 인쇄 꿀팁 📰 활자가 다 거울처럼 반전이에요! 장인이 이걸 읽는 특수 능력 수십 년 훈련 // 종이에 찍히면 바로 읽히는 그 마법 #파주활판인쇄 #파주여행 #경기'},
    hashtags:{korean:['#한국여행','#경기여행','#파주여행','#활판인쇄','#GemKorea'],place_specific:['#파주활판인쇄','#납활자반전','#장인특수능력','#파주출판도시']}
  },
  {
    experience_id:'EX-GG-MAK-002', experience_name:'수원 화성 전통 부채 만들기', category_sub:'전통공예', region:'경기도',
    script_30s:'오늘은 수원화성에서 합죽선을 만들었어요. 대나무 부채예요. 근데 아무도 안 알려주는 게 있어요 — 합죽선을 펼칠 때 45도 각도가 최적이에요. 완전히 펴면 바람이 약하고 45도가 가장 강한 바람이 나와요. 너무 각도가 과학이라는 게 좋았습니다.',
    script_60s:'오늘은 경기도 수원화성 인근 공방에서 전통 합죽선 만들기 체험을 했어요. 대나무 살을 고르고 한지를 붙여 전통 접이식 부채를 완성하는 체험이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 합죽선을 부칠 때 각도가 중요해요. 완전히 펼친 180도보다 45~60도 각도로 빠르게 움직일 때 가장 강한 바람이 나와요. 이건 유체역학 원리예요. 부채를 완전히 펴면 공기 저항이 줄어 바람이 약해요. 45도 각도에서 움직이면 공기를 최대로 모아 강한 바람을 만들어요. 조선 시대 선비들이 부채를 45도로 부치는 모습을 그림에서 많이 볼 수 있는데 그게 바로 최적 각도예요. 직접 만든 합죽선으로 이 각도를 실험해보면 과학이 실감나요. 너무 각도가 바람을 만드는 과학이라는 게 좋았습니다.',
    secret_tip:'합죽선 최적 각도 = 45~60도 — 완전히 펴면 바람 약함, 45도에서 공기 최대 모음. 유체역학 원리. 조선 시대 그림 속 선비들이 45도로 부채 부침. 수원화성 야경 세트',
    filming_guide:'합죽선 45도 각도 부치는 모습 슬로우. 완성 합죽선 처음 펴는 순간. 수원화성 성곽 배경 부채.',
    broll_ideas:['합죽선 45도 각도 부치기 슬로우','완성 합죽선 처음 펴기','수원화성 배경 부채','대나무 살 합죽선 만들기 과정','한지 붙이는 세밀한 작업'],
    hooks:['합죽선 45도가 최적이에요','완전히 펴면 바람이 약해요','유체역학 원리가 부채에 있어요','조선 선비들이 알던 과학이에요','수원화성 합죽선 체험 꿀팁'],
    thumbnails:['합죽선 45도 부치기 슬로우','완성 합죽선 처음 펴기','수원화성 배경 부채','만들기 과정','한지 붙이는 작업'],
    captions:{youtube:'수원 화성 합죽선 — 45도 각도가 최적이에요 🪭\n\n완전히 펴면 바람 약해요!\n유체역학이 조선 시대 부채에 있어요\n\n📍 경기도 수원 화성행궁 인근 공방\n🪭 합죽선+화성 야경 수원 완벽 코스\n\n#수원합죽선 #수원화성 #경기여행 #전통부채 #유체역학',instagram:'수원 화성 합죽선 45도가 최적이에요 🪭\n\n유체역학 원리가 조선 시대 부채에 있어요 ✨\n완전히 펴면 바람 약해요\n\n📍 경기 수원 화성 공방\n\n#수원합죽선 #수원화성 #경기 #전통부채 #GemKorea',tiktok:'수원 합죽선 꿀팁 🪭 45도 각도로 부치면 바람이 가장 강해요! 완전히 펴면 바람 약해짐 유체역학 원리 // 조선 시대 선비들이 알던 과학 #수원합죽선 #수원화성 #경기'},
    hashtags:{korean:['#한국여행','#경기여행','#수원여행','#합죽선','#GemKorea'],place_specific:['#수원합죽선만들기','#합죽선45도','#유체역학부채','#수원화성공방']}
  },
  {
    experience_id:'EX-GW-ECO-001', experience_name:'설악산 생태 탐방 해설', category_sub:'자연체험', region:'강원도',
    script_30s:'오늘은 설악산 생태 탐방 해설에 참가했어요. 국립공원 해설사랑 걷는 거예요. 근데 아무도 안 알려주는 게 있어요 — 해설사가 가리키는 게 동물 흔적이에요. 나도 못 보고 지나쳤을 반달곰 발자국이 바로 옆에 있었어요. 너무 전문가의 눈이 다르다는 게 좋았습니다.',
    script_60s:'오늘은 강원도 속초 설악산 국립공원에서 생태 해설사와 함께하는 탐방 체험을 했어요. 반달곰·산양·담비가 서식하는 설악산을 해설사와 함께 걸으며 생태 이야기를 듣는 프로그램이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 생태 해설사가 주목하는 것들이 일반 등산객이 보지 못하는 것들이에요. 나무껍질 긁힌 자국이 반달곰이 영역을 표시한 거고, 바위 위 작은 발자국이 산양이 지나간 흔적이고, 나무 구멍이 딱따구리가 먹이를 찾은 곳이에요. 해설사 없이 걸으면 그냥 보통 등산인데, 해설사와 걸으면 설악산이 살아있는 생태계로 보여요. 혼자 등산하는 것보다 이 프로그램 2시간이 훨씬 더 설악산을 이해하는 시간이에요. 너무 전문가의 눈으로 본 설악산이 달랐어서 좋았습니다.',
    secret_tip:'생태 해설사의 눈 = 동물 흔적 해독 — 나무 긁힌 자국(반달곰), 발자국(산양), 구멍(딱따구리). 혼자 등산과 완전히 다른 경험. 예약 필수. 탐방 구간별 해설 신청',
    filming_guide:'해설사가 동물 흔적 가리키는 장면. 반달곰 나무 긁힌 자국 클로즈업. 설악산 원시림 속 탐방 팀.',
    broll_ideas:['해설사 동물 흔적 가리키기','반달곰 나무 긁힌 자국 클로즈업','설악산 원시림 탐방 팀','산양 발자국 바위 위','설악산 능선 생태 전경'],
    hooks:['해설사가 보는 것이 달라요','반달곰 흔적이 바로 옆에 있었어요','나무 긁힌 자국이 곰 영역 표시예요','혼자 등산이랑 완전 다른 경험','설악산 생태 탐방 꿀팁'],
    thumbnails:['해설사 흔적 가리키기','반달곰 나무 긁힌 자국','설악산 원시림 탐방','산양 발자국 바위','설악 능선 전경'],
    captions:{youtube:'설악산 생태 탐방 — 해설사 눈이 달라요 🌲\n\n반달곰 흔적·산양 발자국 바로 옆에!\n혼자 등산이랑 완전히 다른 경험\n\n📍 강원도 속초시 설악산 국립공원\n🌲 생태 해설 탐방 사전 예약 필수\n\n#설악산생태탐방 #속초 #강원도여행 #반달곰 #생태해설',instagram:'설악산 생태 탐방 해설사 눈이 달라요 🌲\n\n반달곰 흔적 산양 발자국 바로 옆에 있었어요 ✨\n혼자 등산이랑 완전히 다른 경험\n\n📍 강원 속초 설악산\n\n#설악산생태탐방 #속초여행 #강원도 #반달곰 #GemKorea',tiktok:'설악산 생태 탐방 꿀팁 🌲 해설사가 보는 것이 달라요! 나무 긁힌 자국이 반달곰 영역 표시 // 혼자 등산과 완전 다른 경험 생태 해설 예약하세요 #설악산생태탐방 #속초여행 #강원도'},
    hashtags:{korean:['#한국여행','#강원도여행','#속초여행','#생태탐방','#GemKorea'],place_specific:['#설악산생태탐방','#반달곰흔적','#생태해설사','#설악산원시림']}
  },
  {
    experience_id:'EX-JN-ECO-001', experience_name:'담양 대나무숲 죽녹원 탐방', category_sub:'자연체험', region:'전라남도',
    script_30s:'오늘은 담양 죽녹원 대나무숲에 왔어요. 31만㎡ 대나무 숲이에요. 근데 아무도 안 알려주는 게 있어요 — 비 올 때 대나무숲이 진짜예요. 대나무 잎에 빗소리가 층층이 쌓이는 소리가 다른 소리예요. 너무 비 오는 대나무숲 소리가 치유가 되어서 좋았습니다.',
    script_60s:'오늘은 전남 담양 죽녹원 대나무숲에 왔어요. 31만㎡ 빽빽한 대나무 숲에서 자연 치유를 즐기는 체험이에요. 대나무 잎이 바람에 스치는 소리·대나무 사이 빛·피톤치드가 가득한 공간이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 죽녹원의 진짜 매력이 비 올 때 나타나요. 비가 내리면 대나무 잎에 빗방울이 닿는 소리가 층층이 쌓이면서 완전히 다른 소리가 나요. 우산을 쓰지 말고 방수 재킷을 입고 비를 맞으면서 걸으면 대나무 위에서 아래로 내려오는 빗소리가 자연 소리 치유예요. 맑은 날보다 비 오는 날 죽녹원이 훨씬 더 특별해요. 관광객도 줄어서 훨씬 조용하게 즐길 수 있어요. 너무 비 소리가 치유가 된다는 게 좋았습니다.',
    secret_tip:'비 올 때 죽녹원 = 층층이 빗소리 자연 치유 — 대나무 잎에 빗방울 소리가 층층이 쌓임. 우산 대신 방수 재킷으로 비 맞으면서 걷기. 관광객 적어 조용. 맑은 날보다 특별',
    filming_guide:'빗소리 쌓이는 대나무 잎 슬로우 촬영. 비 맞으며 걷는 죽녹원 장면. 대나무 사이 빛 굴절 클로즈업.',
    broll_ideas:['빗소리 대나무 잎 슬로우','비 맞으며 걷는 죽녹원','대나무 사이 빛 굴절 클로즈업','죽녹원 전체 광각','대나무 높이 하늘 올려다보기'],
    hooks:['비 올 때 죽녹원이 진짜예요','대나무 빗소리가 층층이 쌓여요','우산 대신 방수 재킷이 핵심','맑은 날보다 비 오는 날이 특별','담양 죽녹원 꿀팁'],
    thumbnails:['빗소리 대나무 잎 슬로우','비 맞으며 걷기','대나무 사이 빛 굴절','죽녹원 전체 광각','하늘 올려다보기'],
    captions:{youtube:'담양 죽녹원 — 비 올 때가 진짜예요 🎋\n\n대나무 빗소리가 층층이 쌓여요!\n우산 대신 방수 재킷으로 비 맞으며 걷기\n\n📍 전남 담양군 죽녹원\n🎋 비 오는 날 = 자연 소리 치유\n\n#담양죽녹원 #담양 #전남여행 #대나무숲 #빗소리치유',instagram:'담양 죽녹원 비 올 때가 진짜예요 🎋\n\n대나무 빗소리 층층이 쌓이는 소리 치유 ✨\n우산 대신 방수 재킷으로\n\n📍 전남 담양 죽녹원\n\n#담양죽녹원 #담양여행 #전남 #대나무숲 #GemKorea',tiktok:'담양 죽녹원 꿀팁 🎋 비 올 때 가세요! 대나무 잎에 빗소리 층층이 쌓이는 소리가 자연 치유예요 // 우산 대신 방수 재킷으로 비 맞으면서 걸어야 해요 #담양죽녹원 #담양여행 #전남'},
    hashtags:{korean:['#한국여행','#전남여행','#담양여행','#대나무숲','#GemKorea'],place_specific:['#담양죽녹원','#비오는죽녹원','#대나무빗소리','#자연소리치유']}
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
