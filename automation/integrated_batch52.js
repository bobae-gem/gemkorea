const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const now = new Date().toISOString().slice(0,19);

const newExps = [
  {experience_id:'EX-SE-NAT-078',name:'서울 한강 자전거 투어',category_main:'문화/체험',category_sub:'어드벤처/레포츠',region_main:'SE',region_sub:'서울특별시',address:'서울특별시 영등포구 여의도동 한강공원',lat:37.5264,lng:126.9336,price:'자전거 대여 3,000원/시간',duration:'2~4시간',reservation_required:false,target_user:['개인','커플','가족'],nearby_places:[],related_heritage_ids:[],short_description:'서울 한강변 자전거도로를 따라 라이딩하는 체험이다. 여의도·반포·잠원 한강공원을 연결하는 자전거도로가 서울 대표 도심 라이딩 코스로 한강 노을과 야경을 즐기며 달리는 서울 최고 힐링 코스다.',source_urls:['https://hangang.seoul.go.kr/'],data_confidence:'high',tags:['한강자전거투어','한강','서울','자전거','한강공원','한강노을','도심라이딩'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (자전거 대여 06:00~22:00)',phone:'02-3780-0541'},
  {experience_id:'EX-GG-NAT-091',name:'광명 이케아 근처 철산 벚꽃',category_main:'문화/체험',category_sub:'자연체험',region_main:'GG',region_sub:'경기도 광명시',address:'경기도 광명시 철산동 철산천 벚꽃길',lat:37.4797,lng:126.8647,price:'무료',duration:'1시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'경기 광명 철산천변 벚꽃 터널을 산책하는 봄 체험이다. 수도권 숨은 벚꽃 명소 광명 철산천변 벚꽃 가로수 길은 4월 만개 시즌에 완전한 벚꽃 터널이 형성되며 인근 주민만 아는 로컬 명소다.',source_urls:['https://www.gm.go.kr/'],data_confidence:'high',tags:['광명철산벚꽃','광명','경기','철산천','벚꽃','봄꽃','로컬명소'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'4월 벚꽃 시즌 (무료)',phone:'02-2680-2114'},
  {experience_id:'EX-GN-NAT-094',name:'지리산 노고단 운무 트레킹',category_main:'문화/체험',category_sub:'자연체험',region_main:'GN',region_sub:'전라남도 구례군',address:'전라남도 구례군 산동면 노고단로 일대',lat:35.3067,lng:127.5733,price:'무료',duration:'3~4시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'지리산 노고단에서 운무(구름 바다)를 감상하는 트레킹이다. 해발 1,507m 노고단은 이른 아침 구름 바다가 펼쳐지는 국내 최고 운무 명소로 상사바위에서 보이는 운해가 압도적이다.',source_urls:['https://jirisan.knps.or.kr/'],data_confidence:'high',tags:['지리산노고단운무','지리산','노고단','구례','전남','운무','구름바다'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'일출 전 도착 권장',phone:'061-783-1507'},
  {experience_id:'EX-GG-NAT-092',name:'춘천 물레길 카누',category_main:'문화/체험',category_sub:'어드벤처/레포츠',region_main:'GG',region_sub:'강원특별자치도 춘천시',address:'강원특별자치도 춘천시 신북읍 물레길 일대',lat:37.9603,lng:127.7356,price:'2인 기준 30,000원~',duration:'2~3시간',reservation_required:true,target_user:['커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'강원 춘천 소양호와 의암호를 카누로 탐방하는 수상 체험이다. 물레길이라 불리는 춘천 수상 루트를 카누로 노를 저으며 주변 산과 호수가 어우러지는 춘천 최고 수상 체험이다.',source_urls:['https://www.chuncheon.go.kr/'],data_confidence:'high',tags:['춘천물레길카누','춘천','강원','물레길','카누','소양호','수상레저'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'seasonal',operating_hours:'4~10월 (예약 필수)',phone:'033-242-3630'},
  {experience_id:'EX-JN-NAT-103',name:'순천 낙안읍성 하룻밤',category_main:'문화/체험',category_sub:'역사 체험',region_main:'JN',region_sub:'전라남도 순천시',address:'전라남도 순천시 낙안면 충민길 30 낙안읍성',lat:34.9497,lng:127.3706,price:'숙박 60,000원~',duration:'1박2일',reservation_required:true,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'전남 순천 낙안읍성 전통 민속마을에서 하룻밤 숙박 체험이다. 조선 시대 읍성 안에 실제 주민이 거주하는 낙안읍성에서 초가집 숙박·전통 체험을 즐기는 국내 유일 읍성 숙박 체험이다.',source_urls:['https://www.suncheon.go.kr/'],data_confidence:'high',tags:['낙안읍성숙박','낙안읍성','순천','전남','초가집','전통숙박','조선읍성'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (예약 필수)',phone:'061-749-8831'},
  {experience_id:'EX-GN-CUL-082',name:'창원 마산 어시장 투어',category_main:'문화/체험',category_sub:'지역 먹거리',region_main:'GN',region_sub:'경상남도 창원시',address:'경상남도 창원시 마산합포구 오동동대로 일대',lat:35.2044,lng:128.5706,price:'먹거리 별도',duration:'1~2시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'경남 창원 마산 어시장과 오동동 문화의 거리에서 마산 특산 해산물과 문어를 즐기는 투어다. 마산 아귀찜·문어숙회 발상지 마산 어시장이 새벽부터 싱싱한 남해 해산물을 저렴하게 즐길 수 있는 로컬 명소다.',source_urls:['https://www.changwon.go.kr/'],data_confidence:'high',tags:['마산어시장투어','마산','창원','경남','아귀찜발상지','문어숙회','해산물'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'새벽 04:00~22:00',phone:'055-220-4731'},
  {experience_id:'EX-GG-CUL-086',name:'수원 통닭거리 투어',category_main:'문화/체험',category_sub:'지역 먹거리',region_main:'GG',region_sub:'경기도 수원시',address:'경기도 수원시 팔달구 지동 통닭거리',lat:37.2678,lng:127.0161,price:'1인 10,000원~',duration:'1시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'경기 수원 전통시장 통닭거리에서 수원 왕갈비 옆 수원 통닭을 즐기는 먹거리 체험이다. 수원 남문 시장 옆 통닭 골목이 40년 이상 된 수원 대표 로컬 통닭 명소로 수원 화성 관광 후 필수 코스다.',source_urls:['https://www.suwon.go.kr/'],data_confidence:'high',tags:['수원통닭거리','수원','경기','통닭','남문시장','로컬명소','수원화성'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'11:00~21:00',phone:'031-228-4677'},
  {experience_id:'EX-JB-NAT-074',name:'전주 한옥마을 야경 산책',category_main:'문화/체험',category_sub:'야경/야간투어',region_main:'JB',region_sub:'전라북도 전주시',address:'전라북도 전주시 완산구 풍남동 전주한옥마을',lat:35.8152,lng:127.1553,price:'무료',duration:'1~2시간',reservation_required:false,target_user:['커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'전북 전주 한옥마을 골목을 야간에 산책하는 체험이다. 600여 채 한옥에 조명이 켜지는 전주 한옥마을 야경이 낮과 전혀 다른 매력으로 경기전 앞 광장과 한옥 처마 조명이 특히 아름답다.',source_urls:['https://www.jeonjuhanok.com/'],data_confidence:'high',tags:['전주한옥마을야경','전주한옥마을','전주','전북','야경','한옥야경','경기전'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'일몰~23:00 (무료)',phone:'063-281-2891'},
  {experience_id:'EX-GW-NAT-084',name:'강릉 주문진 오징어 축제',category_main:'문화/체험',category_sub:'지역 먹거리',region_main:'GW',region_sub:'강원특별자치도 강릉시',address:'강원특별자치도 강릉시 주문진읍 주문진수산시장',lat:37.8953,lng:128.8214,price:'오징어 별도',duration:'1~2시간',reservation_required:false,target_user:['개인','커플','가족'],nearby_places:[],related_heritage_ids:[],short_description:'강원 강릉 주문진 수산시장에서 싱싱한 동해 오징어를 즐기는 먹거리 체험이다. 국내 최대 오징어 산지 주문진에서 배에서 갓 올린 신선한 오징어와 건오징어를 저렴하게 구매하는 강릉 로컬 어시장이다.',source_urls:['https://www.gn.go.kr/'],data_confidence:'high',tags:['주문진수산시장','주문진','강릉','강원','오징어','동해해산물','어시장'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'새벽 04:00~20:00',phone:'033-661-9143'},
  {experience_id:'EX-GN-NAT-095',name:'함양 지리산 천왕봉 트레킹',category_main:'문화/체험',category_sub:'자연체험',region_main:'GN',region_sub:'경상남도 함양군',address:'경상남도 함양군 마천면 지리산 중산리',lat:35.2869,lng:127.7006,price:'무료',duration:'8~10시간',reservation_required:false,target_user:['개인'],nearby_places:[],related_heritage_ids:[],short_description:'지리산 경남 중산리 코스로 천왕봉 1,915m까지 트레킹하는 체험이다. 지리산 최고봉 천왕봉 일출이 한반도 5대 일출 명소 중 하나로 정상에서 보이는 운해와 남해 조망이 압도적이다.',source_urls:['https://jirisan.knps.or.kr/'],data_confidence:'high',tags:['지리산천왕봉트레킹','지리산','천왕봉','함양','경남','천왕봉일출','운해'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'새벽 입산 (시즌 제한 확인)',phone:'055-972-7790'},
  {experience_id:'EX-GG-NAT-093',name:'하남 미사 한강 카약',category_main:'문화/체험',category_sub:'어드벤처/레포츠',region_main:'GG',region_sub:'경기도 하남시',address:'경기도 하남시 미사대로 미사한강공원',lat:37.5569,lng:127.2075,price:'1인 20,000원~',duration:'1~2시간',reservation_required:true,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'경기 하남 미사한강공원에서 한강 카약을 즐기는 수상 체험이다. 서울 동쪽 미사한강공원에서 한강 카야킹을 즐기는 수도권 한강 수상 레저 명소로 서울 스카이라인을 배경으로 카약을 즐긴다.',source_urls:['https://www.hanam.go.kr/'],data_confidence:'high',tags:['하남미사한강카약','하남','경기','미사한강','카약','한강수상레저','서울스카이라인'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'seasonal',operating_hours:'4~10월 (예약 필수)',phone:'031-790-5200'},
  {experience_id:'EX-JN-CUL-059',name:'목포 홍어 삼합 투어',category_main:'문화/체험',category_sub:'지역 먹거리',region_main:'JN',region_sub:'전라남도 목포시',address:'전라남도 목포시 자유시장 일대',lat:34.7947,lng:126.3942,price:'1인 20,000원~',duration:'1~2시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'전남 목포 자유시장에서 홍어삼합을 즐기는 먹거리 체험이다. 홍어·묵은지·수육을 함께 먹는 목포 홍어삼합은 삭힌 홍어 특유의 향이 로컬들이 즐기는 전남 대표 발효 음식 문화다.',source_urls:['https://www.mokpo.go.kr/'],data_confidence:'high',tags:['목포홍어삼합','목포','전남','홍어','홍어삼합','발효음식','자유시장'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'10:00~21:00',phone:'061-270-8430'}
];

const newShorts = [
  {
    experience_id:'EX-SE-NAT-078', experience_name:'서울 한강 자전거 투어', category_sub:'어드벤처/레포츠', region:'서울특별시',
    script_30s:'오늘은 한강 자전거 투어를 했어요. 근데 아무도 안 알려주는 게 있어요 — 한강 자전거길 총 길이가 80km예요. 서울에 이렇게 긴 자전거 전용도로가 있어요. 자전거 타고 부산 가는 거리 3분의 1이에요. 너무 한강이 이렇게 넓다는 게 좋았습니다.',
    script_60s:'오늘은 서울 한강 자전거도로를 달렸어요. 한강 양쪽을 따라 이어진 자전거 전용도로예요. 근데 아무도 안 알려주는 꿀팁 하나 — 한강 자전거길의 규모가 있어요. 한강 자전거길 총 길이가 80km예요. 서울 도심을 흐르는 한강 40km 양쪽을 따라 자전거 전용 도로가 이어져요. 강북 코스와 강남 코스가 있어요. 노들섬에서 자전거를 빌려 여의도→마포→합정→당인리 코스가 노을이 아름다운 황금 코스예요. 한강 자전거길은 차도와 완전 분리돼 안전해요. 서울에서 가장 빠른 이동 수단이기도 해요. 러시아워 자동차보다 자전거가 더 빨리 이동하는 구간이 있어요. 그리고 주말 오전 7~9시가 사람이 적고 한강 안개가 아름다운 최적 라이딩 타임이에요. 너무 한강이 이렇게 거대한 자전거 도시를 품었다는 게 좋았습니다.',
    secret_tip:'한강 자전거길 = 80km 전용 도로 — 강북+강남 코스. 여의도→마포→합정 노을 황금 코스. 주말 오전 7~9시 안개+여유로움 최적. 러시아워 자동차보다 자전거가 빠른 구간 존재',
    filming_guide:'한강 자전거길 달리며 노을 배경. 여의도 한강 자전거 전경. 한강 안개 새벽 라이딩.',
    broll_ideas:['한강 자전거길 노을 배경','여의도 한강 전경','새벽 안개 라이딩','한강교 위 자전거','한강 반영 달리기'],
    hooks:['한강 자전거길이 80km예요','서울 전체를 달릴 수 있어요','노을 코스가 황금이에요','주말 오전 7~9시가 최적이에요','한강 자전거 꿀팁'],
    thumbnails:['한강 노을 자전거길','여의도 한강 전경','새벽 안개 라이딩','한강교 위 자전거','한강 반영'],
    captions:{youtube:'서울 한강 자전거 투어 — 자전거길이 80km예요 🚲\n\n서울 도심 자전거 전용 80km!\n주말 오전 7~9시 안개 최적 라이딩\n\n📍 서울 한강 여의도~마포~합정 노을 코스\n🚲 한강 자전거 대여 06:00~22:00\n\n#한강자전거투어 #한강 #서울 #서울여행 #한강자전거',instagram:'서울 한강 자전거 투어 자전거길이 80km예요 🚲\n\n서울 도심 전용 80km ✨\n주말 오전 7~9시 안개 최적 라이딩\n\n📍 서울 한강\n\n#한강자전거투어 #한강 #서울여행 #자전거 #GemKorea',tiktok:'한강 자전거 꿀팁 🚲 자전거길이 80km예요! 서울 전체를 달릴 수 있어요 // 주말 오전 7~9시 안개+여유가 최적이에요 #한강자전거투어 #한강 #서울여행'},
    hashtags:{korean:['#한국여행','#서울여행','#한강','#자전거투어','#GemKorea'],place_specific:['#한강자전거길80km전용도로','#여의도마포합정노을황금코스','#주말오전7~9시안개최적','#강북강남코스80km']}
  },
  {
    experience_id:'EX-GN-NAT-094', experience_name:'지리산 노고단 운무 트레킹', category_sub:'자연체험', region:'전라남도',
    script_30s:'오늘은 지리산 노고단에서 운무를 봤어요. 구름 바다예요. 근데 아무도 안 알려주는 게 있어요 — 노고단 운무가 매일 있는 게 아니에요. 기온 차가 큰 날 새벽에 나타나요. 맑은 날 전날 비 오면 다음 날 아침이 최고예요. 너무 기상이 이렇게 절경을 만든다는 게 좋았습니다.',
    script_60s:'오늘은 지리산 노고단에서 운무 트레킹을 즐겼어요. 해발 1,507m에서 보이는 구름 바다가 압도적이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 노고단 운무를 볼 수 있는 기상 조건이 있어요. 운무는 기온 역전 현상으로 생겨요. 따뜻한 공기와 차가운 공기가 충돌할 때 안개가 피어올라요. 노고단 운무는 비가 온 다음 날 아침, 기온 차가 클 때 가장 잘 생겨요. 특히 여름~가을 장마가 끝난 직후 맑은 아침이 최고예요. 기상청 앱에서 전날 강수 확인+다음 날 맑음+일교차 크면 운무 확률이 높아요. 그리고 노고단 운무는 일출 후 1~2시간 이내에 빠르게 사라져요. 해가 뜨면 기온이 올라 안개가 소멸해요. 새벽 4~5시 도착 필수예요. 너무 기상이 이렇게 절경을 만든다는 게 좋았습니다.',
    secret_tip:'노고단 운무 최적 조건 = 비 온 다음 날+맑음+큰 일교차 — 여름~가을 장마 후 맑은 아침 최고. 일출 후 1~2시간 이내 소멸 새벽 4~5시 도착 필수. 기상청 앱 전날 강수+다음날 맑음 확인',
    filming_guide:'노고단 운무(구름 바다) 드론 영상. 일출+운무 조합. 운무 소멸 타임랩스.',
    broll_ideas:['노고단 운무 드론','일출+운무 조합','운무 소멸 타임랩스','지리산 능선 운해','새벽 노고단 올라가기'],
    hooks:['운무가 매일 있는 게 아니에요','비 온 다음 날 아침이에요','일출 후 1~2시간에 사라져요','새벽 4~5시 도착이 필수예요','노고단 운무 꿀팁'],
    thumbnails:['노고단 운무 드론','일출+운무','운무 소멸','지리산 운해','새벽 올라가기'],
    captions:{youtube:'지리산 노고단 운무 — 비 온 다음 날 새벽이에요 ☁️\n\n일출 후 1~2시간 이내 소멸!\n새벽 4~5시 도착 필수\n\n📍 전남 구례 지리산 노고단 1,507m\n☁️ 국내 최고 운무(구름 바다) 명소\n\n#지리산노고단운무 #노고단 #지리산 #구례 #전남여행',instagram:'지리산 노고단 운무 비 온 다음 날 새벽이에요 ☁️\n\n일출 후 1~2시간 이내 소멸 ✨\n새벽 4~5시 도착 필수예요\n\n📍 전남 구례 지리산 노고단\n\n#지리산노고단 #노고단운무 #구례여행 #전남 #GemKorea',tiktok:'지리산 노고단 운무 꿀팁 ☁️ 비 온 다음 날 맑고 일교차 큰 아침이에요! 일출 후 1~2시간 이내 소멸 // 새벽 4~5시 도착 필수예요 #지리산노고단운무 #지리산 #구례여행'},
    hashtags:{korean:['#한국여행','#전남여행','#구례여행','#노고단운무','#GemKorea'],place_specific:['#노고단운무비온다음날맑음','#기온역전현상운무생성','#일출후1~2시간소멸','#새벽4~5시도착필수']}
  },
  {
    experience_id:'EX-JN-NAT-103', experience_name:'순천 낙안읍성 하룻밤', category_sub:'역사 체험', region:'전라남도',
    script_30s:'오늘은 낙안읍성에서 하룻밤 잤어요. 근데 아무도 안 알려주는 게 있어요 — 낙안읍성이 아직도 주민이 살아요. 박물관이 아니에요. 사람 사는 실제 마을이에요. 한국에서 유일해요. 너무 역사와 삶이 이렇게 공존한다는 게 좋았습니다.',
    script_60s:'오늘은 전남 순천 낙안읍성 초가집에서 하룻밤 숙박 체험을 했어요. 조선 시대 읍성 안에서 자는 국내 유일 체험이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 낙안읍성의 특별함이 있어요. 낙안읍성은 박물관이나 재현 마을이 아니에요. 조선 시대 성벽 안에 지금도 실제 주민 90여 명이 살고 있어요. 민속 박물관 아니고 진짜 마을이에요. 일제강점기에도, 한국전쟁에도 마을이 유지됐어요. 주민들이 조선 시대 초가집에서 현대 생활을 하고 있어요. 성벽 안에 초등학교까지 있었어요. 낙안읍성 내 숙박 체험을 하면 새벽에 아무도 없는 성 안 골목을 혼자 걷는 체험이 가능해요. 새벽 4시 성벽 위에서 보는 읍성 전경이 고요하고 신비로워요. 너무 역사와 삶이 이렇게 공존한다는 게 좋았습니다.',
    secret_tip:'낙안읍성 = 조선 시대 읍성 안에 지금도 주민 90여 명 실거주 — 박물관 아닌 살아있는 마을. 새벽 4시 성벽 위 조용한 읍성 전경이 하이라이트. 숙박 예약 필수. 성벽 야경+새벽 세트',
    filming_guide:'낙안읍성 새벽 4시 성벽 위 고요한 전경. 초가집 지붕 달빛 조명. 읍성 성벽 야경.',
    broll_ideas:['새벽 4시 성벽 전경','초가집 달빛 조명','읍성 성벽 야경','낮 읍성 전경','주민 생활 장면'],
    hooks:['지금도 주민이 살아요','박물관이 아닌 진짜 마을이에요','새벽 4시 성벽이 하이라이트예요','한국에서 유일해요','낙안읍성 꿀팁'],
    thumbnails:['새벽 성벽 전경','초가집 달빛','읍성 야경','낮 읍성 전경','주민 생활'],
    captions:{youtube:'순천 낙안읍성 하룻밤 — 지금도 주민이 살아요 🏰\n\n박물관 아닌 살아있는 마을!\n새벽 4시 성벽 위가 하이라이트\n\n📍 전남 순천시 낙안면 충민길 30\n🏰 조선 시대 읍성 안 실거주 주민 90여 명\n\n#낙안읍성숙박 #낙안읍성 #순천 #전남여행 #조선읍성숙박',instagram:'순천 낙안읍성 하룻밤 지금도 주민이 살아요 🏰\n\n박물관 아닌 살아있는 마을 ✨\n새벽 4시 성벽 위가 하이라이트\n\n📍 전남 순천 낙안읍성\n\n#낙안읍성숙박 #낙안읍성 #순천여행 #전남 #GemKorea',tiktok:'낙안읍성 꿀팁 🏰 지금도 주민 90여 명이 살아요! 박물관 아닌 살아있는 조선 시대 마을 // 새벽 4시 성벽 위 고요한 전경이 하이라이트 #낙안읍성숙박 #순천여행 #전남'},
    hashtags:{korean:['#한국여행','#전남여행','#순천여행','#낙안읍성','#GemKorea'],place_specific:['#낙안읍성주민90여명실거주','#박물관아닌살아있는마을','#새벽4시성벽고요한전경','#한국유일조선읍성숙박']}
  },
  {
    experience_id:'EX-JB-NAT-074', experience_name:'전주 한옥마을 야경 산책', category_sub:'야경/야간투어', region:'전라북도',
    script_30s:'오늘은 전주 한옥마을 야경을 걸었어요. 근데 아무도 안 알려주는 게 있어요 — 전주 한옥마을이 전통 방식으로 지은 게 아니에요. 대부분 1930년대 일제 시대에 한국인이 지은 한옥이에요. 저항의 의미로 지은 거예요. 너무 한옥이 이렇게 독립운동이었다는 게 좋았습니다.',
    script_60s:'오늘은 전북 전주 한옥마을 야경을 감상했어요. 600여 채 한옥에 조명이 켜지는 야경이 낮과 다른 매력이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 전주 한옥마을이 생긴 역사적 이유가 있어요. 전주 한옥마을은 조선 시대부터 있던 게 아니에요. 1910년 일제강점기 이후 일본인들이 전주 성벽을 허물고 일본식 건물을 지으면서 전주 도심이 일본화됐어요. 이에 반발한 전주 양반들과 지역 유지들이 한국 전통 한옥을 지으며 일제에 저항했어요. 전주 교동·풍남동에 집중적으로 한옥을 지어 한국 문화 지키기 운동을 펼쳤어요. 그 결과 1930년대에 대규모 한옥 밀집 지역이 형성됐어요. 지금의 전주 한옥마을이에요. 일제 저항의 결과물이에요. 너무 한옥이 이렇게 독립운동이었다는 게 좋았습니다.',
    secret_tip:'전주 한옥마을 = 1930년대 일제 저항으로 집중 건립 — 일본 도심화에 맞서 한국 문화 수호. 조선 시대 아닌 1930년대 저항의 결과물. 야경 경기전 앞 광장+처마 조명 최고 포인트',
    filming_guide:'경기전 앞 야경 한옥 조명. 한옥 처마 조명 클로즈업. 한옥마을 골목 야경.',
    broll_ideas:['경기전 앞 야경 조명','한옥 처마 조명 클로즈업','한옥마을 골목 야경','전동성당+한옥 야경','한옥 기와 야경'],
    hooks:['전주 한옥마을이 1930년대에 지어졌어요','일제 저항으로 지은 거예요','독립운동이었어요','경기전 야경이 가장 아름다워요','전주 한옥마을 꿀팁'],
    thumbnails:['경기전 앞 야경','한옥 처마 조명','골목 야경','전동성당+한옥','기와 야경'],
    captions:{youtube:'전주 한옥마을 야경 — 일제 저항으로 지은 거예요 🏠\n\n1930년대 독립운동의 결과물!\n경기전 앞 야경이 가장 아름다워요\n\n📍 전북 전주시 완산구 풍남동 전주한옥마을\n🏠 일제 도시화 맞선 문화 수호 한옥 건립\n\n#전주한옥마을야경 #전주한옥마을 #전주 #전북여행 #야경',instagram:'전주 한옥마을 야경 일제 저항으로 지은 거예요 🏠\n\n1930년대 독립운동의 결과물 ✨\n경기전 앞 야경이 가장 아름다워요\n\n📍 전북 전주 한옥마을\n\n#전주한옥마을야경 #전주한옥마을 #전주여행 #전북 #GemKorea',tiktok:'전주 한옥마을 꿀팁 🏠 1930년대 일제 저항으로 지은 한옥이에요! 독립운동의 결과물 // 경기전 앞 야경이 가장 아름다워요 #전주한옥마을야경 #전주여행 #전북'},
    hashtags:{korean:['#한국여행','#전북여행','#전주여행','#한옥마을야경','#GemKorea'],place_specific:['#전주한옥마을1930년대일제저항','#독립운동결과물한옥건립','#경기전야경최고포인트','#조선시대아닌저항의결과']}
  },
  {
    experience_id:'EX-JN-CUL-059', experience_name:'목포 홍어 삼합 투어', category_sub:'지역 먹거리', region:'전라남도',
    script_30s:'오늘은 목포에서 홍어삼합을 먹었어요. 근데 아무도 안 알려주는 게 있어요 — 홍어가 삭는 이유가 있어요. 홍어는 암모니아 성분 때문에 스스로 발효돼요. 요리를 안 해도 발효돼요. 자연 발효예요. 너무 생선이 이렇게 스스로 발효된다는 게 좋았습니다.',
    script_60s:'오늘은 전남 목포 자유시장에서 홍어삼합을 즐겼어요. 홍어·묵은지·수육 세 가지를 함께 먹는 전남 대표 발효 음식이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 홍어가 삭는 과학적 이유가 있어요. 홍어 몸속에는 요소라는 성분이 풍부해요. 요소는 시간이 지나면 분해되면서 암모니아로 변해요. 이 암모니아가 홍어 살을 발효시키고 삭힌 홍어 특유의 독한 향과 맛이 나요. 다른 생선은 이 발효가 부패로 이어지는데 홍어는 암모니아 때문에 부패균이 살 수 없어요. 자연 방부 효과예요. 그래서 냉장고 없던 시대에 흑산도 홍어를 목포까지 배로 가져오는 동안 발효가 됐어요. 그게 삭힌 홍어의 기원이에요. 너무 과학이 이렇게 발효 음식을 만든다는 게 좋았습니다.',
    secret_tip:'홍어 삭는 이유 = 요소(요산)가 암모니아로 변해 자연 발효 — 암모니아가 부패균 억제 자연 방부. 흑산도→목포 배 이동 중 발효 기원. 삼합 순서 = 홍어→묵은지→수육 순서로 싸먹기',
    filming_guide:'홍어삼합 싸먹는 장면. 삭힌 홍어 클로즈업. 목포 자유시장 전경.',
    broll_ideas:['홍어삼합 싸먹는 장면','삭힌 홍어 클로즈업','목포 자유시장 전경','홍어 냄새 반응 표정','묵은지+수육 조합'],
    hooks:['홍어가 스스로 발효돼요','암모니아가 부패균을 막아요','냉장고 없던 시대 지혜예요','삼합은 싸먹는 방법이 있어요','목포 홍어삼합 꿀팁'],
    thumbnails:['홍어삼합 싸먹기','삭힌 홍어 클로즈업','자유시장 전경','냄새 반응 표정','묵은지+수육'],
    captions:{youtube:'목포 홍어삼합 — 홍어가 스스로 발효돼요 🐟\n\n요소→암모니아 자연 발효!\n흑산도→목포 배 이동 중 발효 기원\n\n📍 전남 목포시 자유시장 일대\n🐟 전남 대표 발효 음식 홍어 삼합\n\n#목포홍어삼합 #홍어삼합 #목포 #전남여행 #홍어발효이유',instagram:'목포 홍어삼합 홍어가 스스로 발효돼요 🐟\n\n요소→암모니아 자연 발효 ✨\n암모니아가 부패균 억제 자연 방부\n\n📍 전남 목포 자유시장\n\n#목포홍어삼합 #홍어삼합 #목포여행 #전남 #GemKorea',tiktok:'목포 홍어삼합 꿀팁 🐟 홍어가 스스로 발효돼요! 요소가 암모니아로 변해 자연 발효 // 암모니아가 부패균 막아서 자연 방부 #목포홍어삼합 #목포여행 #전남'},
    hashtags:{korean:['#한국여행','#전남여행','#목포여행','#홍어삼합','#GemKorea'],place_specific:['#목포홍어삼합요소암모니아자연발효','#암모니아부패균억제자연방부','#흑산도목포배이동발효기원','#삼합싸먹기순서']}
  },
  {
    experience_id:'EX-GG-CUL-086', experience_name:'수원 통닭거리 투어', category_sub:'지역 먹거리', region:'경기도',
    script_30s:'오늘은 수원 통닭거리에 왔어요. 근데 아무도 안 알려주는 게 있어요 — 수원이 전통 치킨의 발상지예요. 1950년대 수원에서 통닭 튀김이 시작됐어요. 프라이드치킨이 생기기 전이에요. 너무 수원이 이렇게 치킨 역사를 만들었다는 게 좋았습니다.',
    script_60s:'오늘은 경기도 수원 남문 통닭거리를 탐방했어요. 40년 이상 역사의 수원 로컬 통닭 골목이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 수원이 한국 치킨의 발상지라는 주장이 있어요. 1950년대 수원 팔달문 시장에서 통닭을 기름에 튀겨 파는 가게가 생겼어요. 당시 닭을 통째로 튀기는 방식이 수원 통닭이에요. 이것이 한국식 프라이드치킨의 원조라는 말이 있어요. 미국식 프라이드치킨이 들어오기 전에 이미 수원에서 통닭 튀김 문화가 있었던 거예요. 수원 통닭거리 가게들은 대부분 40~50년 이상 된 원조집들이에요. 화덕통닭·왕갈비 함께 수원 3대 먹거리 코스예요. 치킨무 대신 수원 통닭은 부추무침과 함께 나와요. 너무 수원이 이렇게 치킨 역사를 만들었다는 게 좋았습니다.',
    secret_tip:'수원 통닭 = 1950년대 팔달문 시장 한국 통닭 원조 주장 — 미국 프라이드치킨 이전 수원에서 이미 통닭 튀김 문화 존재. 부추무침이 치킨무 대신 나옴. 화덕통닭+왕갈비+통닭 3대 먹거리 세트',
    filming_guide:'수원 통닭거리 전경. 통닭 기름 튀기는 장면. 부추무침+통닭 조합.',
    broll_ideas:['통닭거리 전경','통닭 기름 튀기기','부추무침+통닭 조합','수원 남문 배경','통닭 찢어먹기'],
    hooks:['수원이 한국 치킨 발상지예요','1950년대에 통닭 튀김이 시작됐어요','프라이드치킨보다 먼저예요','부추무침이 같이 나와요','수원 통닭 꿀팁'],
    thumbnails:['통닭거리 전경','통닭 튀기기','부추무침+통닭','수원 남문 배경','통닭 찢어먹기'],
    captions:{youtube:'수원 통닭거리 — 한국 치킨 발상지예요 🍗\n\n1950년대 수원 팔달문 통닭 튀김 원조!\n미국 프라이드치킨보다 먼저예요\n\n📍 경기도 수원시 팔달구 지동 통닭거리\n🍗 40년 이상 역사 수원 로컬 통닭 골목\n\n#수원통닭거리 #수원통닭 #수원 #경기여행 #한국치킨발상지',instagram:'수원 통닭거리 한국 치킨 발상지예요 🍗\n\n1950년대 수원 팔달문 통닭 튀김 원조 ✨\n부추무침이 치킨무 대신 나와요\n\n📍 경기 수원 통닭거리\n\n#수원통닭거리 #수원통닭 #수원여행 #경기 #GemKorea',tiktok:'수원 통닭 꿀팁 🍗 한국 치킨 발상지예요! 1950년대 팔달문에서 통닭 튀김 시작 // 미국 프라이드치킨보다 먼저였어요 #수원통닭거리 #수원여행 #경기'},
    hashtags:{korean:['#한국여행','#경기여행','#수원여행','#통닭거리','#GemKorea'],place_specific:['#수원통닭거리한국치킨발상지','#1950년대팔달문통닭원조','#프라이드치킨이전수원통닭','#부추무침치킨무대신']}
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
