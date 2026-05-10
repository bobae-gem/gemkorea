const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const now = new Date().toISOString().slice(0,19);

const newExps = [
  {experience_id:'EX-GG-NAT-083',name:'파주 출판도시 책문화 투어',category_main:'문화/체험',category_sub:'문화투어',region_main:'GG',region_sub:'경기도 파주시',address:'경기도 파주시 문발동 출판도시 일대',lat:37.7606,lng:126.7156,price:'무료~상이',duration:'2~3시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'경기 파주에 조성된 국내 최대 출판 도시 파주출판도시를 탐방하는 문화 체험이다. 400여 개 출판사·디자인사가 모인 출판도시에서 독립 서점·갤러리·전시관을 탐방하는 인문학 여행 코스다.',source_urls:['https://www.pajubookcity.org/'],data_confidence:'high',tags:['파주출판도시','파주','경기','출판도시','독립서점','책','인문학'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'10:00~18:00 (일부 월 휴무)',phone:'031-955-0082'},
  {experience_id:'EX-JN-NAT-098',name:'진도 운림산방 투어',category_main:'문화/체험',category_sub:'역사 체험',region_main:'JN',region_sub:'전라남도 진도군',address:'전라남도 진도군 의신면 운림산방로 315',lat:34.5031,lng:126.3308,price:'성인 2,000원',duration:'1~2시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'조선 후기 남종화의 대가 소치 허련이 살았던 전남 진도 운림산방을 탐방하는 예술·역사 체험이다. 연못과 추사 영향을 받은 그림들이 전시된 운림산방은 한국 남종화의 성지로 진도 대표 명소다.',source_urls:['https://www.jindo.go.kr/'],data_confidence:'high',tags:['진도운림산방','진도','전남','소치허련','남종화','추사김정희','운림산방'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00',phone:'061-540-6068'},
  {experience_id:'EX-GN-NAT-090',name:'사천 항공 레포츠 체험',category_main:'문화/체험',category_sub:'어드벤처/레포츠',region_main:'GN',region_sub:'경상남도 사천시',address:'경상남도 사천시 정동면 사천대로 12 항공레포츠',lat:35.0744,lng:128.1483,price:'패러글라이딩 80,000원~',duration:'1~2시간',reservation_required:true,target_user:['청년','개인'],nearby_places:[],related_heritage_ids:[],short_description:'한국 항공 산업의 중심 경남 사천에서 패러글라이딩·경비행기 체험 등 항공 레포츠를 즐기는 프로그램이다. 사천 비행장 인근 항공레포츠 특구에서 남해 다도해와 사천만을 조망하며 비행을 즐긴다.',source_urls:['https://www.sacheon.go.kr/'],data_confidence:'high',tags:['사천항공레포츠','사천','경남','패러글라이딩','경비행기','항공레포츠','남해'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'날씨 양호 시 (예약 필수)',phone:'055-832-3963'},
  {experience_id:'EX-GG-CUL-082',name:'성남 한국잡월드',category_main:'문화/체험',category_sub:'역사 체험',region_main:'GG',region_sub:'경기도 성남시',address:'경기도 성남시 분당구 분당수서로 501',lat:37.3928,lng:127.1125,price:'어린이 5,000원~',duration:'3~4시간',reservation_required:true,target_user:['가족','어린이'],nearby_places:[],related_heritage_ids:[],short_description:'경기 성남 한국잡월드에서 어린이·청소년이 다양한 직업을 직접 체험하는 진로 탐색 프로그램이다. 40여 가지 직업 체험 시설을 갖춘 국내 최대 직업 체험관으로 소방관·의사·방송작가 등을 체험한다.',source_urls:['https://www.koreajobworld.or.kr/'],data_confidence:'high',tags:['한국잡월드','성남','경기','직업체험','어린이체험','진로탐색','분당'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'10:00~17:00 (월 휴관, 예약 필수)',phone:'1588-8253'},
  {experience_id:'EX-JB-NAT-070',name:'정읍 구절초 꽃단지',category_main:'문화/체험',category_sub:'자연체험',region_main:'JB',region_sub:'전라북도 정읍시',address:'전라북도 정읍시 산내면 구절초지방정원로 428',lat:35.5261,lng:127.1161,price:'성인 4,000원',duration:'1~2시간',reservation_required:false,target_user:['커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'전북 정읍 구절초 꽃단지에서 9~10월 구절초 축제를 즐기는 체험이다. 30만 평 구절초 꽃밭이 가을에 흰 꽃으로 덮이는 전북 최대 가을 꽃 명소로 구절초 향기와 함께하는 가을 산책이다.',source_urls:['https://www.jeongeup.go.kr/'],data_confidence:'high',tags:['정읍구절초꽃단지','정읍','전북','구절초','가을꽃','9월10월','꽃단지'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'9~10월 시즌',phone:'063-535-0484'},
  {experience_id:'EX-CB-CUL-074',name:'괴산 산막이 옛길 트레킹',category_main:'문화/체험',category_sub:'자연체험',region_main:'CB',region_sub:'충청북도 괴산군',address:'충청북도 괴산군 칠성면 산막이로 352',lat:36.8364,lng:127.8589,price:'무료',duration:'2~3시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'충북 괴산 달천변 산막이 옛길을 트레킹하는 자연 체험이다. 100년 전 사람들이 걸었던 산막이 마을 옛길을 따라 괴산호 절경과 기암괴석을 감상하는 충북 대표 올레길 코스다.',source_urls:['https://www.goesan.go.kr/'],data_confidence:'high',tags:['괴산산막이옛길','괴산','충북','산막이옛길','괴산호','트레킹','올레길'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (무료)',phone:'043-830-3542'},
  {experience_id:'EX-GW-NAT-080',name:'강릉 경포 스카이 바이크',category_main:'문화/체험',category_sub:'어드벤처/레포츠',region_main:'GW',region_sub:'강원특별자치도 강릉시',address:'강원특별자치도 강릉시 경포로 365',lat:37.7847,lng:128.8989,price:'2인 기준 13,000원~',duration:'30분',reservation_required:false,target_user:['커플','가족'],nearby_places:[],related_heritage_ids:[],short_description:'강릉 경포호수 위 레일 위를 달리는 스카이 바이크 체험이다. 경포호 수면 위 4m 높이 레일을 페달을 밟아 달리며 경포호와 동해 바다를 동시에 감상하는 강릉 대표 레저 체험이다.',source_urls:['https://www.gangneung.go.kr/'],data_confidence:'high',tags:['강릉경포스카이바이크','강릉','강원','경포호','스카이바이크','동해바다','레저'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00',phone:'033-641-9620'},
  {experience_id:'EX-JN-CUL-054',name:'무안 회산백련지 연꽃',category_main:'문화/체험',category_sub:'자연체험',region_main:'JN',region_sub:'전라남도 무안군',address:'전라남도 무안군 일로읍 회산백련지길 180',lat:35.0244,lng:126.6431,price:'성인 2,000원',duration:'1시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'전남 무안 회산백련지에서 7~8월 백련꽃이 만개하는 계절 체험이다. 33만 평 수면을 덮는 백련이 피는 동양 최대 백련 자생지로 7~8월 무안 회산백련지가 연꽃 체험의 성지다.',source_urls:['https://www.muan.go.kr/'],data_confidence:'high',tags:['무안회산백련지','무안','전남','백련꽃','연꽃','7월8월','동양최대백련'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'7~8월 연꽃 시즌',phone:'061-450-5360'},
  {experience_id:'EX-GN-CUL-078',name:'창녕 우포생태관 체험',category_main:'문화/체험',category_sub:'자연체험',region_main:'GN',region_sub:'경상남도 창녕군',address:'경상남도 창녕군 유어면 세진리 우포생태관',lat:35.5567,lng:128.5175,price:'성인 1,000원',duration:'1~2시간',reservation_required:false,target_user:['가족','어린이','개인'],nearby_places:[],related_heritage_ids:[],short_description:'경남 창녕 우포늪 인근 우포생태관에서 우포늪 생태를 체험하는 자연 교육 프로그램이다. 1억 4천만 년 전 형성된 우포늪 생태계를 배우고 갈대·수생식물·철새 관찰을 즐기는 생태 교육 체험이다.',source_urls:['https://www.upo.or.kr/'],data_confidence:'high',tags:['창녕우포생태관','창녕','경남','우포늪','생태체험','철새','자연교육'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00',phone:'055-530-1570'},
  {experience_id:'EX-GB-NAT-048',name:'의성 산운 생태공원',category_main:'문화/체험',category_sub:'자연체험',region_main:'GB',region_sub:'경상북도 의성군',address:'경상북도 의성군 금성면 산운리 산운생태공원',lat:36.3728,lng:128.6994,price:'무료',duration:'1~2시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'경북 의성 금성산 아래 산운마을 옛 전통 가옥과 생태공원을 탐방하는 자연·역사 체험이다. 안동 소씨 집성촌 산운마을에 조선 시대 가옥이 잘 보존돼 있으며 봄 유채꽃 노란 물결이 아름답다.',source_urls:['https://www.uiseong.go.kr/'],data_confidence:'high',tags:['의성산운생태공원','의성','경북','산운마을','유채꽃','전통가옥','봄꽃'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'연중 (무료, 봄 유채꽃 4~5월 최고)',phone:'054-830-6114'},
  {experience_id:'EX-GG-NAT-084',name:'이천 테르메덴 온천',category_main:'문화/체험',category_sub:'웰니스',region_main:'GG',region_sub:'경기도 이천시',address:'경기도 이천시 모가면 테르메로 12',lat:37.3264,lng:127.5233,price:'성인 30,000원~',duration:'3~4시간',reservation_required:false,target_user:['가족','커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'경기도 이천 자연 온천수를 활용한 독일식 스파 테르메덴을 즐기는 웰니스 체험이다. 지하 200m 온천수를 활용한 탄산온천·소금온천·찜질방 시설을 갖춘 국내 대표 온천 스파다.',source_urls:['https://www.termeden.com/'],data_confidence:'high',tags:['이천테르메덴온천','이천','경기','테르메덴','온천스파','탄산온천','웰니스'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'10:00~21:00',phone:'031-645-2000'},
  {experience_id:'EX-JN-NAT-099',name:'신안 퍼플섬 (박지도)',category_main:'문화/체험',category_sub:'자연체험',region_main:'JN',region_sub:'전라남도 신안군',address:'전라남도 신안군 안좌면 박지도 일대',lat:34.7514,lng:126.0336,price:'무료 (배편 별도)',duration:'2~3시간',reservation_required:false,target_user:['커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'전남 신안 안좌면 박지도·반월도 퍼플섬에서 보라색 꽃과 마을을 감상하는 이색 체험이다. 섬 전체를 보라색으로 꾸민 퍼플섬이 세계 최초 자연+인공 보라 마을로 전 세계 미디어에 소개됐다.',source_urls:['https://www.shinan.go.kr/'],data_confidence:'high',tags:['신안퍼플섬','신안','전남','박지도','퍼플섬','보라색섬','세계최초'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중',phone:'061-240-8312'}
];

const newShorts = [
  {
    experience_id:'EX-GG-NAT-083', experience_name:'파주 출판도시 책문화 투어', category_sub:'문화투어', region:'경기도',
    script_30s:'오늘은 파주 출판도시에 왔어요. 근데 아무도 안 알려주는 게 있어요 — 파주 출판도시가 헤이리와 함께 원래 군사 구역이었어요. 개발 제한 때문에 비어있던 땅이 지금 한국 문화의 중심이 됐어요. 너무 제한이 이렇게 문화를 만든다는 게 좋았습니다.',
    script_60s:'오늘은 경기도 파주 출판도시를 탐방했어요. 400여 개 출판사·디자인사가 모인 국내 최대 출판 도시예요. 근데 아무도 안 알려주는 꿀팁 하나 — 파주 출판도시가 생긴 배경이 있어요. 1990년대 서울 출판사들이 책 창고 부지를 찾다가 파주를 선택했어요. 파주는 DMZ 인근 군사 개발 제한 구역이었지만 땅값이 저렴했어요. 출판사들이 단순히 창고가 아닌 창의적 출판 단지를 만들자고 뜻을 모았어요. 세계적 건축가 승효상을 중심으로 출판 도시 마스터플랜을 세웠어요. 그 결과 세계 최초 민간 주도 계획 출판 도시가 탄생했어요. 독립 서점·갤러리·영화관·카페가 공존하는 문화 단지예요. 책 살 생각 없이 그냥 건축과 공간을 즐기러 오는 사람도 많아요. 너무 제한이 이렇게 문화의 중심이 됐다는 게 좋았습니다.',
    secret_tip:'파주 출판도시 = 군사 개발 제한 구역 → 세계 최초 민간 주도 계획 출판 도시 — 저렴한 땅값+승효상 마스터플랜. 독립 서점+갤러리+건축 공간 투어 핵심. 봄·가을 산책 추천',
    filming_guide:'파주 출판도시 독특한 건축물 연속. 독립 서점 내부 분위기. 출판도시 산책로 전경.',
    broll_ideas:['독특한 건축물 연속','독립 서점 내부','출판도시 산책로','갤러리 전시','책 카페 분위기'],
    hooks:['군사 구역이 책 문화 도시가 됐어요','개발 제한이 문화를 만들었어요','세계 최초 민간 출판 도시예요','건축 구경만으로도 충분해요','파주 출판도시 꿀팁'],
    thumbnails:['독특한 건축물','독립 서점 내부','산책로 전경','갤러리 전시','책 카페'],
    captions:{youtube:'파주 출판도시 — 군사 구역이 문화 도시가 됐어요 📚\n\n세계 최초 민간 주도 계획 출판 도시!\n개발 제한이 역설적으로 문화를 만든 것\n\n📍 경기도 파주시 문발동 출판도시\n📚 400여 출판사 독립 서점 갤러리 카페\n\n#파주출판도시 #파주 #경기여행 #독립서점 #책문화투어',instagram:'파주 출판도시 군사 구역이 문화 도시가 됐어요 📚\n\n세계 최초 민간 주도 출판 도시 ✨\n개발 제한이 역설적으로 문화를 만듦\n\n📍 경기 파주 출판도시\n\n#파주출판도시 #파주여행 #경기 #독립서점 #GemKorea',tiktok:'파주 출판도시 꿀팁 📚 군사 개발 제한 구역이 세계 최초 민간 주도 출판 도시가 됐어요! 개발 제한이 역설적으로 문화를 만든 것 // 건축 구경만으로도 충분해요 #파주출판도시 #파주여행 #경기'},
    hashtags:{korean:['#한국여행','#경기여행','#파주여행','#파주출판도시','#GemKorea'],place_specific:['#파주출판도시군사구역문화도시','#세계최초민간주도출판도시','#승효상마스터플랜','#독립서점갤러리건축투어']}
  },
  {
    experience_id:'EX-JN-NAT-098', experience_name:'진도 운림산방 투어', category_sub:'역사 체험', region:'전라남도',
    script_30s:'오늘은 진도 운림산방에 왔어요. 소치 허련의 화실이에요. 근데 아무도 안 알려주는 게 있어요 — 소치 허련이 추사 김정희 제자였어요. 추사가 귀양 가 있을 때 제주까지 배 타고 가서 그림을 배웠어요. 너무 배움을 위한 열정이 이렇게 강하다는 게 좋았습니다.',
    script_60s:'오늘은 전남 진도 운림산방을 탐방했어요. 소치 허련 화백의 화실로 한국 남종화의 성지예요. 근데 아무도 안 알려주는 꿀팁 하나 — 소치 허련과 추사 김정희의 인연이 있어요. 소치 허련은 진도 출신 천재 화가예요. 추사 김정희의 명성을 듣고 직접 찾아가 가르침을 청했어요. 추사가 귀양 간 후에도 소치는 제주도까지 배를 타고 건너가서 계속 배웠어요. 추사가 소치의 그림을 보고 압록강 동쪽 제일의 산수화라고 극찬했어요. 그 극찬이 소치를 조선 최고 화가 반열에 올렸어요. 운림산방은 소치가 말년에 진도로 돌아와 화실을 만든 곳이에요. 운림산방이라는 이름도 구름 속 숲 화실이라는 의미예요. 연못과 소나무가 어우러진 화실 풍경 자체가 한 폭의 그림이에요. 너무 배움을 향한 열정이 이렇게 역사를 만든다는 게 좋았습니다.',
    secret_tip:'소치 허련 = 추사 김정희 제자 — 귀양 간 제주도까지 배 타고 찾아가 배움. 추사 압록강 동쪽 제일 산수화 극찬. 운림산방 연못+소나무 자체가 그림. 진도 강강술래 세트',
    filming_guide:'운림산방 연못+소나무 반영. 소치 허련 그림 자료. 운림산방 화실 전경.',
    broll_ideas:['연못+소나무 반영','소치 그림 자료','화실 전경','진도 배경','연꽃 피는 연못'],
    hooks:['소치 허련이 추사의 제자예요','귀양 간 제주도까지 배 타고 갔어요','추사가 압록강 동쪽 제일이라 했어요','연못 반영이 그림처럼 아름다워요','진도 운림산방 꿀팁'],
    thumbnails:['연못+소나무 반영','소치 그림 자료','화실 전경','진도 배경','연꽃 연못'],
    captions:{youtube:'진도 운림산방 — 추사 김정희 제자 소치의 화실이에요 🎨\n\n귀양 간 제주도까지 배 타고 배우러 간 열정!\n추사 압록강 동쪽 제일 극찬\n\n📍 전남 진도군 의신면 운림산방로 315\n🎨 한국 남종화의 성지\n\n#진도운림산방 #운림산방 #진도 #전남여행 #소치허련',instagram:'진도 운림산방 추사 김정희 제자 소치의 화실이에요 🎨\n\n귀양 간 제주도까지 배 타고 배우러 간 열정 ✨\n추사 압록강 동쪽 제일 극찬\n\n📍 전남 진도 운림산방\n\n#진도운림산방 #운림산방 #진도여행 #전남 #GemKorea',tiktok:'진도 운림산방 꿀팁 🎨 소치 허련이 추사 제자예요! 귀양 간 제주도까지 배 타고 배우러 간 열정 // 추사가 압록강 동쪽 제일이라 극찬 #진도운림산방 #진도여행 #전남'},
    hashtags:{korean:['#한국여행','#전남여행','#진도여행','#운림산방','#GemKorea'],place_specific:['#진도운림산방소치허련추사제자','#제주귀양지까지배타고배움','#추사압록강동쪽제일극찬','#남종화성지연못소나무반영']}
  },
  {
    experience_id:'EX-JB-NAT-070', experience_name:'정읍 구절초 꽃단지', category_sub:'자연체험', region:'전라북도',
    script_30s:'오늘은 정읍 구절초 꽃단지에 왔어요. 근데 아무도 안 알려주는 게 있어요 — 구절초가 9마디가 되면 꽃이 피어요. 그래서 이름이 구절초예요. 9번째 마디에서 꽃이 핀다는 의미예요. 너무 이름이 이렇게 식물 생태를 설명한다는 게 좋았습니다.',
    script_60s:'오늘은 전북 정읍 구절초 꽃단지에서 가을 꽃 체험을 했어요. 30만 평 구절초 꽃밭이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 구절초 이름의 비밀이 있어요. 구절초 한자 이름은 九折草예요. 구(九)는 9, 절(折)은 마디예요. 구절초 줄기에 마디가 9개 생길 때 꽃이 핀다는 의미예요. 그래서 음력 9월 9일 중양절에 피는 꽃이라는 의미도 있어요. 구절초는 한방에서 여성 질환 치료제로 사용해왔어요. 냉증·생리불순·불임 등에 효능이 있다고 알려져 부인초라고도 불러요. 그래서 정읍 구절초 꽃단지 주변에 구절초 차와 관련 건강 제품 체험이 함께 있어요. 가을 이른 아침에 구절초 꽃이 가장 선명하고 향기가 진해요. 연분홍·흰 구절초가 함께 피어 풍경이 아름다워요. 너무 이름이 이렇게 식물 생태를 정확히 설명한다는 게 좋았습니다.',
    secret_tip:'구절초 = 줄기 마디 9개 되면 꽃 핌(九折草) — 음력 9월 9일 중양절 개화. 한방 여성 질환 치료 부인초. 이른 아침 향기+선명도 최고. 구절초 차 체험 세트',
    filming_guide:'30만 평 구절초 꽃밭 드론. 구절초 꽃 9마디 줄기 클로즈업. 이른 아침 구절초 향 맡기.',
    broll_ideas:['30만 평 꽃밭 드론','구절초 9마디 줄기 클로즈업','이른 아침 향 맡기','연분홍+흰 구절초 함께','구절초 차 시음'],
    hooks:['구절초가 9마디 되면 꽃이 피어요','그래서 이름이 구절초예요','여성 질환 치료 부인초예요','이른 아침에 향기가 가장 진해요','정읍 구절초 꿀팁'],
    thumbnails:['30만 평 드론','9마디 줄기 클로즈업','이른 아침 향 맡기','연분홍+흰 함께','구절초 차 시음'],
    captions:{youtube:'정읍 구절초 꽃단지 — 9마디 되면 꽃이 피어요 🌸\n\n한자 이름 九折草 줄기 9마디!\n이른 아침 향기가 가장 진해요\n\n📍 전북 정읍시 산내면 구절초지방정원로\n🌸 30만 평 구절초 꽃밭 9~10월\n\n#정읍구절초꽃단지 #구절초 #정읍 #전북여행 #가을꽃',instagram:'정읍 구절초 꽃단지 9마디 되면 꽃이 피어요 🌸\n\n한자 이름 九折草 9마디 개화 ✨\n여성 질환 치료 부인초이기도 해요\n\n📍 전북 정읍 구절초 꽃단지\n\n#정읍구절초 #구절초꽃단지 #정읍여행 #전북 #GemKorea',tiktok:'정읍 구절초 꿀팁 🌸 줄기 마디가 9개 되면 꽃이 피어요! 그래서 구절초(九折草)예요 // 한방에서 여성 질환 치료 부인초라고도 해요 #정읍구절초꽃단지 #정읍여행 #전북'},
    hashtags:{korean:['#한국여행','#전북여행','#정읍여행','#구절초','#GemKorea'],place_specific:['#정읍구절초꽃단지9마디개화','#구절초한자九折草','#음력9월9일중양절개화','#여성질환치료부인초이른아침']}
  },
  {
    experience_id:'EX-JN-NAT-099', experience_name:'신안 퍼플섬 (박지도)', category_sub:'자연체험', region:'전라남도',
    script_30s:'오늘은 신안 퍼플섬에 왔어요. 세계 최초 보라색 섬이에요. 근데 아무도 안 알려주는 게 있어요 — 섬 주민 할머니들이 보라색 옷을 입어야 들어올 수 있어요. 보라색 옷이 없으면 가게에서 빌려줘요. 규칙이 있는 섬이에요. 너무 규칙이 이렇게 경관을 만든다는 게 좋았습니다.',
    script_60s:'오늘은 전남 신안 박지도·반월도 퍼플섬을 방문했어요. 세계 최초 보라색 자연+인공 섬이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 퍼플섬만의 독특한 입장 규칙이 있어요. 퍼플섬에 입장하려면 반드시 보라색 옷이나 소품을 착용해야 해요. 보라색 옷이 없으면 선착장에서 보라색 망토를 2,000원에 빌릴 수 있어요. 이 규칙은 마을 주민들이 직접 만들었어요. 섬 전체가 보라색 콘셉트이기 때문에 방문자도 보라색이어야 섬 경관과 조화를 이룬다는 아이디어예요. SNS 사진을 올리면 이 규칙 덕분에 모든 사람이 보라색 옷을 입어 통일감 있는 사진이 나와요. 신안군이 처음에는 작은 프로젝트로 시작했는데 SNS 바이럴로 전 세계 미디어에 보도됐어요. CNN·BBC가 소개한 한국의 명소예요. 너무 규칙이 이렇게 경관을 완성한다는 게 좋았습니다.',
    secret_tip:'퍼플섬 입장 규칙 = 보라색 옷 착용 필수 — 없으면 선착장 보라 망토 2,000원 대여. 주민 자체 규칙. SNS 통일감 있는 사진 효과. CNN·BBC 소개 신안 퍼플섬. 보라 꽃 시즌 4~5월',
    filming_guide:'퍼플섬 보라색 경관 전체 샷. 보라색 옷 입고 섬 산책. 보라색 다리 클로즈업.',
    broll_ideas:['퍼플섬 전체 보라 경관','보라색 옷 착용 산책','보라색 다리 클로즈업','보라 꽃+바다 배경','망토 착용 포토타임'],
    hooks:['보라색 옷이 있어야 들어가요','없으면 망토를 빌려줘요','주민들이 만든 규칙이에요','CNN·BBC가 소개한 섬이에요','신안 퍼플섬 꿀팁'],
    thumbnails:['전체 보라 경관','보라 옷 산책','보라 다리','꽃+바다 배경','망토 포토타임'],
    captions:{youtube:'신안 퍼플섬 — 보라색 옷이 있어야 들어가요 💜\n\n없으면 선착장에서 망토 대여!\n CNN·BBC가 소개한 세계 최초 보라색 섬\n\n📍 전남 신안군 안좌면 박지도\n💜 세계 최초 자연+인공 보라 섬\n\n#신안퍼플섬 #퍼플섬 #신안 #전남여행 #보라색섬',instagram:'신안 퍼플섬 보라색 옷이 있어야 들어가요 💜\n\n없으면 선착장 망토 대여 ✨\nCNN·BBC 소개 세계 최초 보라색 섬\n\n📍 전남 신안 박지도 퍼플섬\n\n#신안퍼플섬 #퍼플섬 #신안여행 #전남 #GemKorea',tiktok:'신안 퍼플섬 꿀팁 💜 보라색 옷이 있어야 들어가요! 없으면 망토 대여 2,000원 // CNN·BBC가 소개한 세계 최초 보라색 섬이에요 #신안퍼플섬 #퍼플섬 #신안여행'},
    hashtags:{korean:['#한국여행','#전남여행','#신안여행','#퍼플섬','#GemKorea'],place_specific:['#신안퍼플섬보라색옷필수','#선착장망토대여2천원','#주민만든입장규칙','#CNN·BBC소개세계최초보라섬']}
  },
  {
    experience_id:'EX-CB-CUL-074', experience_name:'괴산 산막이 옛길 트레킹', category_sub:'자연체험', region:'충청북도',
    script_30s:'오늘은 괴산 산막이 옛길을 걸었어요. 100년 전 사람들이 걷던 길이에요. 근데 아무도 안 알려주는 게 있어요 — 이 길이 원래 생존을 위한 길이었어요. 산막이 마을 주민들이 식량을 구하러 산을 넘던 길이에요. 너무 생존의 길이 이렇게 아름다운 관광로가 됐다는 게 좋았습니다.',
    script_60s:'오늘은 충북 괴산 달천변 산막이 옛길을 트레킹했어요. 100년 전 산막이 마을 사람들이 걷던 실제 옛길이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 산막이 옛길이 생긴 이유가 있어요. 산막이 마을은 1970년대까지 차도가 없었어요. 마을 사람들이 장을 보거나 일을 보러 괴산 읍내까지 가려면 달천 강변을 따라 절벽 옆 좁은 길을 걸어야 했어요. 이 좁은 절벽 길이 지금의 산막이 옛길이에요. 당시에는 생존을 위한 힘든 길이었는데 지금은 수십만 명이 걷는 관광 명소가 됐어요. 트레킹 코스 안에 고양이 솔길·꽃바위·하늘 전망대 등 포인트마다 이름이 붙어있어요. 달천 강변을 보며 걷는 5km 편도 코스가 충북 올레길 최고 코스예요. 너무 생존의 길이 이렇게 아름다운 명소가 됐다는 게 좋았습니다.',
    secret_tip:'산막이 옛길 = 1970년대까지 차도 없는 마을 장보기 생존 길 → 지금은 관광 명소 — 달천 강변 절벽 좁은 길. 5km 편도 코스. 고양이솔길+하늘전망대 포인트 포함 전구간 완주 권장',
    filming_guide:'달천 강변 절벽 좁은 길 트레킹. 하늘 전망대에서 괴산호 조망. 고양이 솔길 전경.',
    broll_ideas:['절벽 좁은 길 트레킹','하늘 전망대 괴산호 조망','고양이 솔길','달천 강변 반영','꽃바위 전경'],
    hooks:['100년 전 장보기 생존 길이에요','생존 길이 관광 명소가 됐어요','달천 강변 절벽 길이에요','하늘 전망대 조망이 최고예요','괴산 산막이 옛길 꿀팁'],
    thumbnails:['절벽 좁은 길','하늘 전망대 괴산호','고양이 솔길','달천 강변 반영','꽃바위'],
    captions:{youtube:'괴산 산막이 옛길 — 장보기 생존 길이 관광 명소가 됐어요 🌿\n\n100년 전 절벽 좁은 길!\n달천 강변 5km 충북 최고 올레길\n\n📍 충북 괴산군 칠성면 산막이로 352\n🌿 100년 전 실제 생존 옛길\n\n#괴산산막이옛길 #산막이옛길 #괴산 #충북여행 #올레길',instagram:'괴산 산막이 옛길 장보기 생존 길이 관광 명소가 됐어요 🌿\n\n100년 전 절벽 좁은 생존 길 ✨\n달천 강변 5km 충북 최고 올레길\n\n📍 충북 괴산 산막이 옛길\n\n#괴산산막이옛길 #산막이 #괴산여행 #충북 #GemKorea',tiktok:'괴산 산막이 옛길 꿀팁 🌿 100년 전 장보기 생존 길이에요! 차도 없던 마을 절벽 좁은 길이 지금은 관광 명소 // 달천 강변 5km 충북 최고 올레길이에요 #괴산산막이옛길 #괴산여행 #충북'},
    hashtags:{korean:['#한국여행','#충북여행','#괴산여행','#산막이옛길','#GemKorea'],place_specific:['#괴산산막이옛길100년전생존길','#차도없던마을장보기절벽길','#생존길관광명소변신','#달천강변5km충북최고올레길']}
  },
  {
    experience_id:'EX-JN-CUL-054', experience_name:'무안 회산백련지 연꽃', category_sub:'자연체험', region:'전라남도',
    script_30s:'오늘은 무안 회산백련지에 왔어요. 동양 최대 백련 자생지예요. 근데 아무도 안 알려주는 게 있어요 — 연꽃이 진흙에서 피어 더럽지 않아요. 연잎이 물을 구슬처럼 튕겨내요. 이걸 연꽃 효과라고 해요. 과학 기술에 활용되는 자연 현상이에요. 너무 꽃이 이렇게 과학을 낳는다는 게 좋았습니다.',
    script_60s:'오늘은 전남 무안 회산백련지에서 동양 최대 백련 꽃밭을 감상했어요. 7~8월 33만 평이 백련으로 뒤덮여요. 근데 아무도 안 알려주는 꿀팁 하나 — 연꽃의 과학적 비밀이 있어요. 연꽃은 진흙 속에서 자라지만 꽃과 잎이 전혀 더럽지 않아요. 그 비밀이 연잎의 표면 구조예요. 연잎 표면은 나노미터 크기의 아주 작은 돌기가 덮여 있어요. 물방울이 이 돌기에 닿으면 구슬처럼 굴러다니며 먼지를 함께 가져가요. 스스로 청소하는 구조예요. 이를 연꽃 효과라고 하는데 과학자들이 이 원리를 응용해 방수 옷·유리 코팅·선박 외장재에 활용해요. 자동차 유리 발수 코팅도 이 원리예요. 아침 일찍 연잎 위 물방울이 구슬처럼 굴러다니는 것을 직접 볼 수 있어요. 너무 꽃이 이렇게 과학 기술을 낳는다는 게 좋았습니다.',
    secret_tip:'연꽃 효과(Lotus Effect) = 나노 돌기로 물이 구슬처럼 굴러 자기 정화 — 방수 옷·유리 코팅·선박 외장 응용. 아침 이슬이 구슬처럼 굴러다니는 장면 무안 회산백련지에서 직접 관찰 가능',
    filming_guide:'연잎 위 물방울 구슬처럼 굴러다니는 클로즈업. 33만 평 백련 드론 전경. 백련 꽃 클로즈업.',
    broll_ideas:['연잎 물방울 구슬 클로즈업','33만 평 백련 드론','백련 꽃 클로즈업','아침 이슬 연잎','연꽃 진흙 배경'],
    hooks:['연잎이 물을 구슬처럼 튕겨내요','연꽃 효과라고 해요','방수 옷에 이 원리가 쓰여요','아침에 가면 이슬이 구슬처럼 굴러요','무안 백련지 꿀팁'],
    thumbnails:['물방울 구슬 클로즈업','33만 평 드론','백련 꽃 클로즈업','아침 이슬 연잎','연꽃 진흙'],
    captions:{youtube:'무안 회산백련지 — 연잎이 물을 구슬처럼 튕겨요 🌸\n\n연꽃 효과(Lotus Effect)!\n방수 옷·유리 코팅에 이 원리 쓰여요\n\n📍 전남 무안군 일로읍 회산백련지길 180\n🌸 동양 최대 백련 자생지 7~8월\n\n#무안회산백련지 #회산백련지 #무안 #전남여행 #연꽃효과',instagram:'무안 회산백련지 연잎이 물을 구슬처럼 튕겨요 🌸\n\n연꽃 효과(Lotus Effect) ✨\n방수 옷·자동차 유리 코팅에 이 원리\n\n📍 전남 무안 회산백련지\n\n#무안회산백련지 #백련지 #무안여행 #전남 #GemKorea',tiktok:'무안 회산백련지 꿀팁 🌸 연잎이 물을 구슬처럼 튕겨내요! 연꽃 효과(Lotus Effect) // 방수 옷·자동차 유리 코팅에 이 원리가 쓰여요 #무안회산백련지 #무안여행 #전남'},
    hashtags:{korean:['#한국여행','#전남여행','#무안여행','#회산백련지','#GemKorea'],place_specific:['#무안회산백련지연꽃효과LotusEffect','#나노돌기물구슬자기정화','#방수옷유리코팅선박외장응용','#아침이슬구슬관찰']}
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
