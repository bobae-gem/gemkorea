const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const now = new Date().toISOString().slice(0,19);

const newExps = [
  {experience_id:'EX-SE-CUL-077',name:'서울 창덕궁 후원 비밀 정원',category_main:'문화/체험',category_sub:'역사 체험',region_main:'SE',region_sub:'서울특별시 종로구',address:'서울특별시 종로구 율곡로 99 창덕궁',lat:37.5792,lng:126.9914,price:'후원 포함 성인 8,000원',duration:'2~3시간',reservation_required:true,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'서울 창덕궁 후원(비원)을 특별 탐방하는 역사 체험이다. 유네스코 세계문화유산 창덕궁 후원은 조선 왕이 산책하던 비밀 정원으로 사전 예약제 운영으로 인원 제한해 고즈넉하게 즐길 수 있다.',source_urls:['https://www.cdg.go.kr/'],data_confidence:'high',tags:['창덕궁후원','창덕궁','서울','비원','조선왕정원','유네스코','비밀정원'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'예약제 가이드 투어 10:00~14:30',phone:'02-3668-2300'},
  {experience_id:'EX-GG-NAT-085',name:'양평 산음 자연휴양림',category_main:'문화/체험',category_sub:'자연체험',region_main:'GG',region_sub:'경기도 양평군',address:'경기도 양평군 단월면 산음리로 200 산음자연휴양림',lat:37.6269,lng:127.6822,price:'성인 1,000원',duration:'1일',reservation_required:true,target_user:['가족','개인'],nearby_places:[],related_heritage_ids:[],short_description:'경기 양평 산음자연휴양림에서 숲 속 하룻밤 캠핑과 삼림욕을 즐기는 체험이다. 서울에서 1시간 거리 국립 자연휴양림으로 수목원 산책·숲 치유 프로그램·야영장 이용이 가능한 수도권 최고 국립 숲 체험지다.',source_urls:['https://www.huyang.go.kr/'],data_confidence:'high',tags:['양평산음자연휴양림','양평','경기','자연휴양림','삼림욕','캠핑','국립'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (예약 필수)',phone:'031-775-5461'},
  {experience_id:'EX-JN-NAT-100',name:'여수 오동도 동백 투어',category_main:'문화/체험',category_sub:'자연체험',region_main:'JN',region_sub:'전라남도 여수시',address:'전라남도 여수시 오동도로 222 오동도',lat:34.7436,lng:127.7636,price:'무료 (여객선 왕복 3,000원)',duration:'1~2시간',reservation_required:false,target_user:['커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'전남 여수 오동도 동백나무 숲을 탐방하는 체험이다. 겨울 동백꽃이 피는 2~3월 오동도 전체가 붉은 동백으로 물드는 장관이 여수 최고 겨울 명소로 동백 향기와 바다가 어우러지는 코스다.',source_urls:['https://www.yeosu.go.kr/'],data_confidence:'high',tags:['여수오동도동백','여수','전남','오동도','동백','겨울꽃','동백터널'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'2~3월 동백 시즌',phone:'061-659-1819'},
  {experience_id:'EX-GN-NAT-091',name:'고성 공룡박물관 투어',category_main:'문화/체험',category_sub:'역사 체험',region_main:'GN',region_sub:'경상남도 고성군',address:'경상남도 고성군 회화면 공룡로 618 공룡박물관',lat:34.9867,lng:128.3167,price:'성인 5,000원',duration:'2~3시간',reservation_required:false,target_user:['가족','어린이'],nearby_places:[],related_heritage_ids:[],short_description:'세계 3대 공룡 화석 산지 경남 고성에 위치한 공룡박물관을 탐방하는 체험이다. 실제 공룡 화석과 공룡 골격 표본이 전시된 박물관에서 7,000만 년 전 공룡 세계를 체험한다.',source_urls:['https://museum.goseong.go.kr/'],data_confidence:'high',tags:['고성공룡박물관','고성','경남','공룡박물관','공룡화석','어린이체험','백악기'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00 (월 휴관)',phone:'055-670-4451'},
  {experience_id:'EX-GG-CUL-083',name:'하남 미사리 카페 거리',category_main:'문화/체험',category_sub:'지역 먹거리',region_main:'GG',region_sub:'경기도 하남시',address:'경기도 하남시 미사대로 한강변 카페 거리',lat:37.5569,lng:127.2075,price:'카페 별도',duration:'1~2시간',reservation_required:false,target_user:['커플','청년'],nearby_places:[],related_heritage_ids:[],short_description:'경기 하남 미사한강공원변 카페 거리에서 한강 뷰를 즐기며 카페를 탐방하는 체험이다. 한강을 바라보며 커피를 즐기는 루프탑 카페들이 밀집한 미사리 카페 거리가 수도권 커플 데이트 코스 1순위다.',source_urls:['https://www.hanam.go.kr/'],data_confidence:'high',tags:['하남미사리카페거리','하남','경기','미사리','한강뷰카페','루프탑카페','데이트'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'10:00~22:00',phone:'031-790-5200'},
  {experience_id:'EX-JB-NAT-071',name:'완주 고산자연휴양림',category_main:'문화/체험',category_sub:'자연체험',region_main:'JB',region_sub:'전라북도 완주군',address:'전라북도 완주군 고산면 오산리 고산자연휴양림',lat:35.9317,lng:127.2478,price:'성인 1,000원',duration:'1일',reservation_required:true,target_user:['가족','개인'],nearby_places:[],related_heritage_ids:[],short_description:'전북 완주 고산자연휴양림에서 국립 숲 속 하룻밤 캠핑 체험이다. 아름다운 계곡과 울창한 숲이 어우러진 고산자연휴양림에서 삼림욕·야영·계곡 수영을 즐기는 전북 대표 가족 힐링 체험이다.',source_urls:['https://www.huyang.go.kr/'],data_confidence:'high',tags:['완주고산자연휴양림','완주','전북','자연휴양림','국립','계곡','캠핑'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'seasonal',operating_hours:'연중 (여름 성수기 예약 필수)',phone:'063-262-7067'},
  {experience_id:'EX-CB-NAT-048',name:'제천 의림지 역사 산책',category_main:'문화/체험',category_sub:'역사 체험',region_main:'CB',region_sub:'충청북도 제천시',address:'충청북도 제천시 모산동 의림지',lat:37.1469,lng:128.1858,price:'무료',duration:'1시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'충북 제천 의림지를 산책하며 삼국 시대 역사를 배우는 체험이다. 삼한 시대 조성된 의림지는 우리나라에서 가장 오래된 저수지로 1,800년 역사의 저수지 제방을 따라 산책하는 역사 체험이다.',source_urls:['https://www.jecheon.go.kr/'],data_confidence:'high',tags:['제천의림지','제천','충북','의림지','삼한시대저수지','역사산책','1800년'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (무료)',phone:'043-641-5720'},
  {experience_id:'EX-GW-NAT-081',name:'춘천 소양강 스카이워크',category_main:'문화/체험',category_sub:'어드벤처/레포츠',region_main:'GW',region_sub:'강원특별자치도 춘천시',address:'강원특별자치도 춘천시 근화동 소양강 스카이워크',lat:37.8875,lng:127.7219,price:'성인 2,000원',duration:'30분',reservation_required:false,target_user:['커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'강원 춘천 소양강 위에 만들어진 투명 바닥 스카이워크를 걷는 어드벤처 체험이다. 소양강 수면 위 60m 높이 155m 길이 투명 유리 스카이워크에서 소양강 전경을 내려다보며 아찔함을 즐긴다.',source_urls:['https://www.chuncheon.go.kr/'],data_confidence:'high',tags:['춘천소양강스카이워크','춘천','강원','소양강','스카이워크','투명바닥','어드벤처'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'10:00~20:00',phone:'033-250-3354'},
  {experience_id:'EX-JN-CUL-055',name:'영광 불갑사 상사화',category_main:'문화/체험',category_sub:'자연체험',region_main:'JN',region_sub:'전라남도 영광군',address:'전라남도 영광군 불갑면 불갑사로 450',lat:35.2258,lng:126.6500,price:'성인 1,000원',duration:'1~2시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'전남 영광 불갑사 주변 상사화 군락을 감상하는 9월 체험이다. 전국 최대 상사화 군락지 불갑사에서 9월 초 붉은 상사화(꽃무릇)가 일제히 피는 장관이 전남 가을 꽃 명소 1순위다.',source_urls:['https://www.yeonggwang.go.kr/'],data_confidence:'high',tags:['영광불갑사상사화','영광','전남','불갑사','상사화','꽃무릇','9월'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'9월 초 상사화 시즌',phone:'061-350-5323'},
  {experience_id:'EX-GN-CUL-079',name:'함안 아라가야 유물 체험',category_main:'문화/체험',category_sub:'역사 체험',region_main:'GN',region_sub:'경상남도 함안군',address:'경상남도 함안군 가야읍 가야로 19 함안박물관',lat:35.2678,lng:128.3978,price:'무료',duration:'1~2시간',reservation_required:false,target_user:['가족','개인'],nearby_places:[],related_heritage_ids:[],short_description:'경남 함안에서 가야 고분군 아라가야 역사를 체험하는 유적 탐방이다. 유네스코 세계문화유산 등재된 함안 말이산 고분군 일대를 탐방하고 박물관에서 가야 토기·철기 유물을 관람한다.',source_urls:['https://www.haman.go.kr/'],data_confidence:'high',tags:['함안아라가야','함안','경남','아라가야','말이산고분군','유네스코가야','가야토기'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00',phone:'055-580-2650'},
  {experience_id:'EX-GB-CUL-048',name:'경주 천마총 금관 투어',category_main:'문화/체험',category_sub:'역사 체험',region_main:'GB',region_sub:'경상북도 경주시',address:'경상북도 경주시 황남동 90 대릉원 천마총',lat:35.8342,lng:129.2200,price:'성인 3,000원',duration:'1~2시간',reservation_required:false,target_user:['개인','커플','가족'],nearby_places:[],related_heritage_ids:[],short_description:'신라 왕릉 대릉원 안 천마총 내부를 탐방하는 역사 체험이다. 1973년 발굴된 천마총에서 신라 금관·금제 허리띠·천마도 등 화려한 신라 황금 문화재가 발굴됐으며 내부 입장이 가능한 유일한 신라 왕릉이다.',source_urls:['https://www.gyeongju.go.kr/'],data_confidence:'high',tags:['경주천마총','경주','경북','천마총','신라금관','대릉원','신라황금'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~22:00',phone:'054-779-6100'},
  {experience_id:'EX-GG-NAT-086',name:'양주 나리공원 양귀비',category_main:'문화/체험',category_sub:'자연체험',region_main:'GG',region_sub:'경기도 양주시',address:'경기도 양주시 광사동 나리공원 일대',lat:37.7883,lng:127.0692,price:'무료',duration:'1시간',reservation_required:false,target_user:['커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'경기 양주 나리공원에서 5~6월 양귀비 꽃밭을 감상하는 체험이다. 50만 평 나리공원에 심어진 30만 그루 양귀비꽃이 5~6월 붉은빛으로 물드는 경기 북부 최대 봄꽃 명소다.',source_urls:['https://www.yangju.go.kr/'],data_confidence:'high',tags:['양주나리공원양귀비','양주','경기','나리공원','양귀비','봄꽃','5월6월'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'5~6월 양귀비 시즌 (무료)',phone:'031-8082-6114'}
];

const newShorts = [
  {
    experience_id:'EX-SE-CUL-077', experience_name:'서울 창덕궁 후원 비밀 정원', category_sub:'역사 체험', region:'서울특별시',
    script_30s:'오늘은 창덕궁 후원을 탐방했어요. 조선 왕의 비밀 정원이에요. 근데 아무도 안 알려주는 게 있어요 — 후원이 비원이라는 이름으로 유명한데 실제 이름은 후원이에요. 비원은 일제가 붙인 이름이에요. 너무 이름 하나에 이렇게 역사가 있다는 게 좋았습니다.',
    script_60s:'오늘은 서울 창덕궁 후원을 예약 탐방했어요. 조선 왕이 산책하던 비밀 정원이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 후원 이름의 역사가 있어요. 창덕궁 후원은 오랫동안 비원이라는 이름으로 알려져 있었어요. 그런데 비원은 일제강점기 일본이 붙인 이름이에요. 원래 이름은 후원 또는 금원이에요. 조선 시대 왕이 거니는 금지된 정원이라는 의미예요. 1963년 이후 한국 정부가 공식 명칭을 다시 후원으로 바꿨어요. 그래서 지금은 비원이 아닌 후원이 맞는 이름이에요. 후원 안 부용지 연못과 주합루가 특히 아름다워요. 주합루는 정조가 도서관으로 사용한 건물로 조선 최고 개혁 군주 정조의 역사가 담겨있어요. 후원은 사전 예약 인원 제한으로 고즈넉하게 즐길 수 있어요. 너무 이름 하나에 이렇게 역사가 담겼다는 게 좋았습니다.',
    secret_tip:'창덕궁 후원 원래 이름 = 후원 (비원은 일제가 붙인 이름) — 1963년 이후 공식 명칭 후원으로 환원. 부용지+주합루 정조 도서관이 최고 포인트. 예약 필수 인원 제한',
    filming_guide:'부용지 연못+주합루 반영. 후원 단풍 숲 산책. 애련지 정자 전경.',
    broll_ideas:['부용지+주합루 반영','후원 단풍 숲 산책','애련지 정자','옥류천 계곡','후원 전경'],
    hooks:['비원이 아닌 후원이 맞는 이름이에요','비원은 일제가 붙인 이름이에요','1963년에 후원으로 환원했어요','부용지 연못이 가장 아름다워요','창덕궁 후원 꿀팁'],
    thumbnails:['부용지+주합루 반영','후원 단풍 숲','애련지 정자','옥류천 계곡','후원 전경'],
    captions:{youtube:'창덕궁 후원 — 비원이 아닌 후원이 맞는 이름이에요 🌿\n\n비원은 일제가 붙인 이름!\n1963년 공식 후원으로 환원\n\n📍 서울 종로구 율곡로 99 창덕궁\n🌿 유네스코 세계문화유산 조선 왕 비밀 정원\n\n#창덕궁후원 #후원 #창덕궁 #서울 #비원일제이름',instagram:'창덕궁 후원 비원이 아닌 후원이 맞는 이름이에요 🌿\n\n비원은 일제가 붙인 이름 ✨\n1963년 이후 공식 후원으로 환원됨\n\n📍 서울 종로구 창덕궁\n\n#창덕궁후원 #창덕궁 #서울여행 #종로 #GemKorea',tiktok:'창덕궁 후원 꿀팁 🌿 비원이 아닌 후원이 맞는 이름이에요! 비원은 일제강점기 일본이 붙인 이름 // 1963년 이후 공식 명칭 후원으로 환원됐어요 #창덕궁후원 #창덕궁 #서울여행'},
    hashtags:{korean:['#한국여행','#서울여행','#창덕궁','#후원','#GemKorea'],place_specific:['#창덕궁후원비원아닌후원','#비원일제가붙인이름','#1963년후원공식환원','#부용지주합루정조도서관']}
  },
  {
    experience_id:'EX-JN-NAT-100', experience_name:'여수 오동도 동백 투어', category_sub:'자연체험', region:'전라남도',
    script_30s:'오늘은 여수 오동도 동백을 봤어요. 근데 아무도 안 알려주는 게 있어요 — 동백꽃이 떨어질 때 꽃잎이 하나씩 안 떨어져요. 꽃이 통째로 툭 떨어져요. 그래서 사무라이가 싫어하는 꽃이에요. 목이 떨어지는 것 같아서요. 너무 꽃이 이렇게 역사와 연결됐다는 게 좋았습니다.',
    script_60s:'오늘은 전남 여수 오동도에서 동백꽃 투어를 즐겼어요. 겨울 2~3월 동백꽃이 섬 전체를 붉게 물들여요. 근데 아무도 안 알려주는 꿀팁 하나 — 동백꽃이 지는 방식의 비밀이 있어요. 대부분의 꽃은 꽃잎이 하나씩 떨어져요. 그런데 동백꽃은 다르게 져요. 동백꽃은 꽃잎이 하나씩 떨어지지 않고 꽃 전체가 통째로 뚝 떨어져요. 이 모습이 사람 목이 떨어지는 것 같다고 해서 일본 사무라이들이 동백꽃을 불길한 꽃으로 여겼어요. 일본 사무라이 문화에서 동백꽃은 금기였어요. 조선 시대에는 반대로 동백 열매 기름을 부녀자들이 머리카락에 바르는 귀한 기름으로 사용했어요. 같은 꽃이 문화에 따라 이렇게 달리 해석됐어요. 동백꽃 아래 붉게 떨어진 꽃 카펫이 오동도 최고 사진 포인트예요. 너무 꽃이 이렇게 다르게 연결됐다는 게 좋았습니다.',
    secret_tip:'동백꽃 = 꽃잎 아닌 꽃 통째로 뚝 떨어짐 — 일본 사무라이 불길한 꽃 금기(목 떨어짐 연상). 조선 부녀자 머리카락 동백유 사용. 오동도 떨어진 붉은 꽃 카펫이 최고 포인트',
    filming_guide:'동백꽃 통째로 뚝 떨어지는 순간. 붉은 동백 꽃 카펫 전경. 오동도 바다+동백 배경.',
    broll_ideas:['동백꽃 뚝 떨어지는 순간','붉은 꽃 카펫 전경','오동도 바다+동백','동백꽃 클로즈업','동백 터널 산책'],
    hooks:['동백꽃이 통째로 뚝 떨어져요','사무라이가 싫어하는 꽃이에요','목이 떨어지는 것 같다고요','떨어진 꽃 카펫이 최고예요','여수 오동도 꿀팁'],
    thumbnails:['동백꽃 뚝 떨어지기','붉은 꽃 카펫','오동도 바다+동백','동백꽃 클로즈업','동백 터널'],
    captions:{youtube:'여수 오동도 동백 — 통째로 뚝 떨어지는 꽃이에요 🌺\n\n사무라이가 불길하다 한 꽃!\n떨어진 붉은 꽃 카펫이 최고 포인트\n\n📍 전남 여수시 오동도로 222 오동도\n🌺 2~3월 동백꽃 절정\n\n#여수오동도동백 #오동도 #여수 #전남여행 #동백꽃',instagram:'여수 오동도 동백 통째로 뚝 떨어지는 꽃이에요 🌺\n\n사무라이 불길한 꽃 금기 ✨\n떨어진 붉은 꽃 카펫이 최고 포인트\n\n📍 전남 여수 오동도\n\n#여수오동도동백 #오동도 #여수여행 #전남 #GemKorea',tiktok:'여수 오동도 동백 꿀팁 🌺 통째로 뚝 떨어지는 꽃이에요! 사무라이가 목 떨어지는 것 같다며 불길하다 했어요 // 떨어진 붉은 꽃 카펫이 최고 포인트 #여수오동도동백 #오동도 #여수여행'},
    hashtags:{korean:['#한국여행','#전남여행','#여수여행','#오동도동백','#GemKorea'],place_specific:['#여수오동도동백통째뚝떨어짐','#사무라이불길꽃금기목연상','#조선부녀자동백유머리','#붉은꽃카펫최고포인트']}
  },
  {
    experience_id:'EX-CB-NAT-048', experience_name:'제천 의림지 역사 산책', category_sub:'역사 체험', region:'충청북도',
    script_30s:'오늘은 제천 의림지를 걸었어요. 1,800년 된 저수지예요. 근데 아무도 안 알려주는 게 있어요 — 의림지가 삼국 시대 우리 조상이 만든 저수지예요. 그 당시 기술로 1,800년 버틴 제방이에요. 현대 기술보다 오래 간다는 게 놀라워요. 너무 조상의 기술이 이렇게 강하다는 게 좋았습니다.',
    script_60s:'오늘은 충북 제천 의림지를 산책했어요. 삼한 시대 조성된 국내 최고령 저수지예요. 근데 아무도 안 알려주는 꿀팁 하나 — 의림지가 얼마나 오래됐는지 아세요? 의림지는 삼한 시대에 만들어진 저수지예요. 정확한 연대는 논란이 있지만 1,500~1,800년 전으로 추정해요. 그 당시 쇠·콘크리트·기계 없이 흙과 돌로 쌓은 제방이 지금까지 물을 가두고 있어요. 현대에도 의림지는 실제 농업용 저수지로 사용하고 있어요. 단순한 유적이 아니라 살아있는 시설이에요. 저수지 둘레 약 2km 산책로를 걸으면 제방·정자·호수가 어우러진 아름다운 경치를 즐길 수 있어요. 봄에는 벚꽃, 가을에는 단풍이 아름다운 사계절 명소예요. 너무 조상의 기술이 1,800년을 버텼다는 게 좋았습니다.',
    secret_tip:'의림지 = 삼한 시대 흙+돌로 만든 1,500~1,800년 된 저수지 — 지금도 실제 농업용 사용 중. 단순 유적 아닌 살아있는 시설. 봄 벚꽃+가을 단풍 사계절 명소. 청풍호 유람선 세트',
    filming_guide:'의림지 제방+저수지 전경. 봄 벚꽃 제방 길 산책. 제천 의림지 정자 반영.',
    broll_ideas:['의림지 제방+저수지 전경','봄 벚꽃 제방 길','정자 반영','1800년 제방 클로즈업','제천 배경'],
    hooks:['1,800년 된 저수지예요','흙과 돌로만 만들었어요','지금도 실제 저수지로 쓰여요','봄 벚꽃 가을 단풍이 아름다워요','제천 의림지 꿀팁'],
    thumbnails:['의림지 제방+저수지','봄 벚꽃 제방','정자 반영','1800년 제방','제천 배경'],
    captions:{youtube:'제천 의림지 — 1,800년 된 삼한 시대 저수지예요 🌊\n\n흙과 돌로만 만든 저수지가 지금도 사용 중!\n단순 유적이 아닌 살아있는 시설\n\n📍 충북 제천시 모산동 의림지\n🌊 국내 최고령 1,500~1,800년 전 저수지\n\n#제천의림지 #의림지 #제천 #충북여행 #1800년저수지',instagram:'제천 의림지 1,800년 된 삼한 시대 저수지예요 🌊\n\n흙+돌로만 만든 저수지 지금도 사용 중 ✨\n단순 유적 아닌 살아있는 시설\n\n📍 충북 제천 의림지\n\n#제천의림지 #의림지 #제천여행 #충북 #GemKorea',tiktok:'제천 의림지 꿀팁 🌊 1,800년 된 삼한 시대 저수지예요! 흙+돌로만 만든 제방이 지금도 실제 농업용으로 사용 중 // 단순 유적이 아닌 살아있는 시설이에요 #제천의림지 #제천여행 #충북'},
    hashtags:{korean:['#한국여행','#충북여행','#제천여행','#의림지','#GemKorea'],place_specific:['#제천의림지삼한시대1800년저수지','#흙돌만든제방현재사용중','#단순유적아닌살아있는시설','#봄벚꽃가을단풍사계절']}
  },
  {
    experience_id:'EX-GB-CUL-048', experience_name:'경주 천마총 금관 투어', category_sub:'역사 체험', region:'경상북도',
    script_30s:'오늘은 경주 천마총에 들어갔어요. 내부 입장 되는 유일한 신라 왕릉이에요. 근데 아무도 안 알려주는 게 있어요 — 천마총 이름이 천마도에서 왔어요. 천마도는 말이에요. 죽은 왕을 하늘로 태워가는 하늘 말 그림이에요. 너무 이름이 이렇게 의미있다는 게 좋았습니다.',
    script_60s:'오늘은 경북 경주 대릉원 안 천마총 내부를 탐방했어요. 신라 왕릉 중 유일하게 내부 입장이 가능한 왕릉이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 천마총이라는 이름의 비밀이 있어요. 천마총은 1973년 발굴 당시 이름이 없는 왕릉이었어요. 발굴 과정에서 말 안장에 그려진 그림이 발견됐어요. 흰 말이 하늘을 나는 그림이었어요. 이 그림이 천마도예요. 하늘 말 그림이라 천마(天馬)도라고 이름 붙였고 그 천마도 때문에 왕릉 이름이 천마총이 됐어요. 천마도는 백화 나무 껍질에 그린 그림으로 그 정교함이 신라 미술의 최고 수준이에요. 발굴된 유물 중 신라 금관이 가장 화려하고 섬세해요. 금관 무게가 260g이라 실제 쓰는 용도가 아닌 장례 의식용이에요. 너무 이름이 이렇게 유물에서 나왔다는 게 좋았습니다.',
    secret_tip:'천마총 이름 = 천마도(하늘 나는 말 그림)에서 유래 — 백화나무 껍질에 그린 정교한 그림. 금관 260g 장례 의식용. 유일한 내부 입장 가능 신라 왕릉. 경주 국립박물관 금관 세트',
    filming_guide:'천마총 내부 왕릉 구조 전경. 천마도 그림 자료 클로즈업. 신라 금관 클로즈업.',
    broll_ideas:['천마총 내부 구조','천마도 그림 자료 클로즈업','신라 금관 클로즈업','대릉원 전경','경주 왕릉 야경'],
    hooks:['내부 입장 가능한 유일한 신라 왕릉이에요','천마도 그림 때문에 이름이 생겼어요','하늘 나는 말 그림이에요','금관이 260g 장례용이에요','경주 천마총 꿀팁'],
    thumbnails:['천마총 내부 구조','천마도 그림 클로즈업','신라 금관','대릉원 전경','왕릉 야경'],
    captions:{youtube:'경주 천마총 — 천마도 그림 때문에 이름이 생겼어요 👑\n\n하늘 나는 말 그림 천마도!\n260g 금관은 장례 의식용\n\n📍 경북 경주시 황남동 90 대릉원\n👑 유일한 내부 입장 가능 신라 왕릉\n\n#경주천마총 #천마총 #경주 #경북여행 #신라금관',instagram:'경주 천마총 천마도 그림 때문에 이름이 생겼어요 👑\n\n하늘 나는 말 그림 천마도 ✨\n260g 금관은 장례 의식용이에요\n\n📍 경북 경주 대릉원 천마총\n\n#경주천마총 #천마총 #경주여행 #경북 #GemKorea',tiktok:'경주 천마총 꿀팁 👑 천마도(하늘 나는 말 그림) 때문에 이름이 생겼어요! 260g 금관은 실제 착용 아닌 장례 의식용 // 내부 입장 가능한 유일한 신라 왕릉 #경주천마총 #경주여행 #경북'},
    hashtags:{korean:['#한국여행','#경북여행','#경주여행','#천마총','#GemKorea'],place_specific:['#경주천마총천마도이름유래','#하늘나는말천마도백화나무껍질','#신라금관260g장례의식용','#유일한내부입장신라왕릉']}
  },
  {
    experience_id:'EX-GW-NAT-081', experience_name:'춘천 소양강 스카이워크', category_sub:'어드벤처/레포츠', region:'강원특별자치도',
    script_30s:'오늘은 춘천 소양강 스카이워크를 걸었어요. 투명 바닥이에요. 근데 아무도 안 알려주는 게 있어요 — 스카이워크 아래 소양강이 보여요. 그런데 이 소양강이 실제 북한 방향에서 흘러와요. 소양강이 북한과 연결된 강이에요. 너무 강이 이렇게 분단을 넘는다는 게 좋았습니다.',
    script_60s:'오늘은 강원도 춘천 소양강 위 스카이워크를 걸었어요. 투명 유리 바닥으로 60m 높이 소양강을 내려다보는 체험이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 소양강의 지리적 비밀이 있어요. 소양강은 강원도 인제에서 발원해요. 그런데 소양강 상류는 북한 금강산 방향과 연결되는 물길이에요. 철원·인제·양구 일대에서 흘러내려오는 소양강 물은 한국전쟁 이전 통일된 땅을 흐르던 강이에요. 지금은 DMZ 철조망으로 나뉘어진 땅을 물만 자유롭게 흘러내려와요. 스카이워크에서 내려다보는 소양강 물이 북한 방향에서 넘어온 물이라는 사실이 분단 역사를 생각하게 해요. 춘천은 소양강·북한강이 합류하는 도시예요. 스카이워크 주변 소양강변 카페 거리도 춘천의 명소예요. 너무 강이 이렇게 분단을 넘어 흐른다는 게 좋았습니다.',
    secret_tip:'소양강 = DMZ 너머 북한 방향에서 흘러오는 강 — 한국전쟁 전 통일 땅 흐르던 강. 물만 자유롭게 분단 넘어 흐름. 스카이워크 아래 내려다보는 감회. 소양강변 카페 거리 세트',
    filming_guide:'스카이워크 투명 바닥 아래 소양강 내려다보기. 스카이워크 위에서 춘천 전경. 소양강 수면 반영.',
    broll_ideas:['투명 바닥 소양강 내려다보기','스카이워크 위 춘천 전경','소양강 수면 반영','스카이워크 걷기','춘천 소양강 배경'],
    hooks:['소양강이 북한 방향에서 흘러와요','DMZ 넘어 물이 자유로워요','분단 역사를 생각하게 해요','투명 바닥이 아찔해요','춘천 스카이워크 꿀팁'],
    thumbnails:['투명 바닥 소양강','스카이워크 춘천 전경','소양강 반영','스카이워크 걷기','춘천 배경'],
    captions:{youtube:'춘천 소양강 스카이워크 — 소양강이 북한 방향에서 흘러와요 🌊\n\nDMZ 넘어 물만 자유롭게!\n분단 역사를 생각하게 하는 강\n\n📍 강원도 춘천시 근화동 소양강 스카이워크\n🌊 투명 유리 바닥 60m 높이 155m 길이\n\n#춘천소양강스카이워크 #소양강스카이워크 #춘천 #강원여행 #스카이워크',instagram:'춘천 소양강 스카이워크 소양강이 북한 방향에서 흘러와요 🌊\n\nDMZ 넘어 물만 자유롭게 ✨\n분단 역사 생각하게 하는 강\n\n📍 강원 춘천 소양강 스카이워크\n\n#춘천스카이워크 #소양강 #춘천여행 #강원 #GemKorea',tiktok:'춘천 소양강 꿀팁 🌊 소양강이 북한 방향에서 DMZ 넘어 흘러오는 강이에요! 물만 자유롭게 분단 넘어 흐름 // 스카이워크에서 내려다보며 분단 역사 생각 #춘천소양강스카이워크 #춘천여행 #강원'},
    hashtags:{korean:['#한국여행','#강원여행','#춘천여행','#소양강스카이워크','#GemKorea'],place_specific:['#춘천소양강북한방향흘러옴','#DMZ넘어물만자유롭게','#한국전쟁전통일땅흐르던강','#분단역사생각하게하는강']}
  },
  {
    experience_id:'EX-GN-CUL-079', experience_name:'함안 아라가야 유물 체험', category_sub:'역사 체험', region:'경상남도',
    script_30s:'오늘은 함안 아라가야 유물을 봤어요. 근데 아무도 안 알려주는 게 있어요 — 아라가야가 일본 야마토 왕권과 교류했어요. 아라가야 토기 문양이 일본 고분에서 나와요. 가야와 일본의 연결이에요. 너무 역사가 이렇게 바다를 넘는다는 게 좋았습니다.',
    script_60s:'오늘은 경남 함안 아라가야 유적을 탐방했어요. 유네스코 세계문화유산 가야 고분군의 하나예요. 근데 아무도 안 알려주는 꿀팁 하나 — 아라가야와 일본의 관계가 있어요. 아라가야는 4~6세기 경남 함안을 중심으로 번성한 가야의 소국이에요. 그런데 아라가야의 특징적인 토기 문양이 일본 고분에서 발견돼요. 이는 아라가야와 일본 야마토 왕권이 직접 교류했다는 증거예요. 아라가야 철기 기술·토기 제작 기술이 일본에 전파됐어요. 일본에서 도래인(渡來人)이라 부르는 한반도 이주민이 가야인이었을 가능성이 높아요. 함안 말이산 고분군 45호분에서 발굴된 봉황 장식 금동관이 현재 국립김해박물관에 있어요. 아라가야가 가야 소국 중 가장 이른 시기에 국력을 갖춘 나라예요. 너무 역사가 이렇게 바다를 넘어 연결됐다는 게 좋았습니다.',
    secret_tip:'아라가야 = 일본 야마토 왕권과 직접 교류 — 아라가야 토기 문양 일본 고분 발견. 철기+토기 기술 일본 전파. 도래인이 가야인 가능성. 말이산 고분군 45호분 봉황 금동관',
    filming_guide:'아라가야 말이산 고분군 전경. 아라가야 토기 유물 클로즈업. 함안 배경 고분군 야경.',
    broll_ideas:['말이산 고분군 전경','아라가야 토기 클로즈업','함안 고분군 야경','봉황 금동관 자료','아라가야 지도'],
    hooks:['아라가야가 일본과 교류했어요','토기 문양이 일본 고분에서 나와요','가야 기술이 일본에 전파됐어요','도래인이 가야인 가능성이 높아요','함안 아라가야 꿀팁'],
    thumbnails:['말이산 고분군','아라가야 토기 클로즈업','고분군 야경','봉황 금동관','아라가야 지도'],
    captions:{youtube:'함안 아라가야 — 일본 야마토와 교류했어요 ⚔️\n\n아라가야 토기 문양이 일본 고분에!\n도래인이 가야인일 가능성\n\n📍 경남 함안군 가야읍 말이산 고분군\n⚔️ 유네스코 세계문화유산 가야 고분군\n\n#함안아라가야 #아라가야 #함안 #경남여행 #유네스코가야고분군',instagram:'함안 아라가야 일본 야마토와 교류했어요 ⚔️\n\n아라가야 토기 문양 일본 고분 발견 ✨\n도래인이 가야인일 가능성\n\n📍 경남 함안 아라가야\n\n#함안아라가야 #아라가야 #함안여행 #경남 #GemKorea',tiktok:'함안 아라가야 꿀팁 ⚔️ 일본 야마토 왕권과 직접 교류했어요! 아라가야 토기 문양이 일본 고분에서 발견됨 // 도래인이 가야인일 가능성이 높아요 #함안아라가야 #함안여행 #경남'},
    hashtags:{korean:['#한국여행','#경남여행','#함안여행','#아라가야','#GemKorea'],place_specific:['#함안아라가야일본야마토교류','#아라가야토기문양일본고분','#가야기술일본전파도래인','#말이산고분군유네스코']}
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
