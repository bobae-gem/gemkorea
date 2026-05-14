const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const now = new Date().toISOString().slice(0,19);

const newExps = [
  {experience_id:'EX-GG-NAT-094',name:'포천 비둘기낭 폭포',category_main:'문화/체험',category_sub:'자연체험',region_main:'GG',region_sub:'경기도 포천시',address:'경기도 포천시 영북면 대회산리 비둘기낭폭포',lat:38.0553,lng:127.2314,price:'무료',duration:'1시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'경기 포천 한탄강 현무암 협곡 안에 숨겨진 비둘기낭 폭포를 탐방하는 자연 체험이다. 주상절리 현무암 절벽 사이에 숨겨진 비둘기낭 폭포는 드라마 선덕여왕·주몽 촬영지로 신비로운 협곡 폭포다.',source_urls:['https://www.pocheon.go.kr/'],data_confidence:'high',tags:['포천비둘기낭폭포','포천','경기','비둘기낭','한탄강','주상절리','드라마촬영지'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00 (무료)',phone:'031-538-3030'},
  {experience_id:'EX-GW-NAT-085',name:'인제 원대리 자작나무 사진 투어',category_main:'문화/체험',category_sub:'자연체험',region_main:'GW',region_sub:'강원특별자치도 인제군',address:'강원특별자치도 인제군 인제읍 원대리 자작나무숲',lat:38.0833,lng:128.1219,price:'무료',duration:'2시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'국내 최대 자작나무 숲 강원 인제 원대리에서 사진 촬영 투어를 즐기는 체험이다. 흰 자작나무가 빼곡히 늘어선 숲에서 계절별 다른 풍경을 담는 사진 투어로 눈 내린 겨울과 신록의 여름이 특히 아름답다.',source_urls:['https://www.inje.go.kr/'],data_confidence:'high',tags:['인제자작나무사진투어','인제','강원','자작나무숲','겨울설경','사진투어','원대리'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~16:30',phone:'033-460-8036'},
  {experience_id:'EX-JN-NAT-104',name:'영암 월출산 트레킹',category_main:'문화/체험',category_sub:'자연체험',region_main:'JN',region_sub:'전라남도 영암군',address:'전라남도 영암군 영암읍 천황사로 280',lat:34.7519,lng:126.7083,price:'성인 1,500원',duration:'4~5시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'전남 영암 월출산 국립공원에서 기암절벽 트레킹을 즐기는 체험이다. 호남의 소금강으로 불리는 영암 월출산은 기암절벽과 봉우리가 많아 한국에서 가장 험준한 산 중 하나로 꼽힌다.',source_urls:['https://wolchulsan.knps.or.kr/'],data_confidence:'high',tags:['영암월출산트레킹','영암','전남','월출산','기암절벽','호남소금강','국립공원'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중',phone:'061-473-5210'},
  {experience_id:'EX-GB-NAT-049',name:'울릉도 독도 여행',category_main:'문화/체험',category_sub:'역사 체험',region_main:'GB',region_sub:'경상북도 울릉군',address:'경상북도 울릉군 울릉읍 독도리 독도',lat:37.2426,lng:131.8652,price:'배편 왕복 70,000원~',duration:'1일',reservation_required:true,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'대한민국 최동단 영토 독도에 직접 상륙하는 역사 체험이다. 울릉도에서 쾌속선으로 독도까지 이동해 동도·서도를 탐방하는 체험으로 기상 조건 때문에 상륙 성공률이 30~40%인 특별한 여행이다.',source_urls:['https://www.dokdo.go.kr/'],data_confidence:'high',tags:['독도상륙','독도','울릉도','경북','대한민국최동단','독도상륙체험','역사'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'기상 조건 양호 시 (예약 필수)',phone:'054-790-6454'},
  {experience_id:'EX-GN-NAT-096',name:'통영 연화도 트레킹',category_main:'문화/체험',category_sub:'자연체험',region_main:'GN',region_sub:'경상남도 통영시',address:'경상남도 통영시 욕지면 연화도',lat:34.7333,lng:128.2583,price:'배편 왕복 20,000원~',duration:'3~5시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'경남 통영 남해 연화도에서 연꽃 모양 섬을 트레킹하는 체험이다. 통영 남쪽 섬 연화도가 위에서 보면 연꽃 모양이라 연화도인데 섬 전체 트레킹이 가능하며 한려수도 다도해 절경이 아름답다.',source_urls:['https://www.tongyeong.go.kr/'],data_confidence:'high',tags:['통영연화도트레킹','통영','경남','연화도','섬트레킹','한려수도','연꽃섬'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'배편 시간 확인 필수',phone:'055-650-4681'},
  {experience_id:'EX-GG-CUL-087',name:'성남 판교 테크노밸리 투어',category_main:'문화/체험',category_sub:'문화투어',region_main:'GG',region_sub:'경기도 성남시',address:'경기도 성남시 분당구 판교역로 판교테크노밸리',lat:37.3942,lng:127.1106,price:'무료',duration:'1~2시간',reservation_required:false,target_user:['개인','청년'],nearby_places:[],related_heritage_ids:[],short_description:'경기 성남 판교 테크노밸리를 탐방하는 IT 문화 투어다. 카카오·네이버·크래프톤 등 한국 대표 IT 기업들이 모인 판교 테크노밸리를 걸으며 한국 디지털 혁신의 현장을 체험하는 IT 투어다.',source_urls:['https://www.pangyo.or.kr/'],data_confidence:'high',tags:['판교테크노밸리투어','판교','성남','경기','카카오','네이버','IT투어'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'평일 (주말 인파 없음)',phone:'031-8016-6100'},
  {experience_id:'EX-GW-NAT-086',name:'속초 아바이마을 갯배 체험',category_main:'문화/체험',category_sub:'역사 체험',region_main:'GW',region_sub:'강원특별자치도 속초시',address:'강원특별자치도 속초시 청호동 아바이마을',lat:38.1989,lng:128.5942,price:'갯배 200원',duration:'1~2시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'강원 속초 아바이마을에서 손으로 당기는 갯배를 타는 체험이다. 6.25 전쟁 때 북에서 내려온 실향민들이 정착한 아바이마을에서 드라마 가을동화 배경지 갯배와 오징어순대·아바이순대를 즐기는 코스다.',source_urls:['https://www.sokcho.go.kr/'],data_confidence:'high',tags:['속초아바이마을갯배','속초','강원','아바이마을','갯배','가을동화촬영지','실향민'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'07:00~22:00 (갯배 200원)',phone:'033-639-2690'},
  {experience_id:'EX-JN-NAT-105',name:'여수 금오도 비렁길 트레킹',category_main:'문화/체험',category_sub:'자연체험',region_main:'JN',region_sub:'전라남도 여수시',address:'전라남도 여수시 남면 금오도 비렁길',lat:34.6356,lng:127.8056,price:'배편 왕복 15,000원~',duration:'4~6시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'전남 여수 금오도 해안 절벽 비렁길을 트레킹하는 체험이다. 금오도 비렁길은 해발 200m 절벽 위 길을 5코스로 걸을 수 있는 남해 최고 절경 트레킹으로 절벽 아래 에메랄드 바다가 압도적이다.',source_urls:['https://www.yeosu.go.kr/'],data_confidence:'high',tags:['금오도비렁길','금오도','여수','전남','해안절벽','비렁길','섬트레킹'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중',phone:'061-659-3986'},
  {experience_id:'EX-GG-NAT-095',name:'양주 장흥 공방예술촌',category_main:'문화/체험',category_sub:'전통공예',region_main:'GG',region_sub:'경기도 양주시',address:'경기도 양주시 장흥면 일영로 152-11 공방예술촌',lat:37.7078,lng:126.9319,price:'체험별 상이',duration:'2~3시간',reservation_required:false,target_user:['가족','개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'경기 양주 장흥 공방예술촌에서 도예·목공·천연 염색·유리공예 등 다양한 체험을 즐기는 공예 복합 체험이다. 청정 자연 속에 예술가들이 모인 공방촌으로 수도권에서 가장 큰 공방 클러스터다.',source_urls:['https://www.yangju.go.kr/'],data_confidence:'high',tags:['양주장흥공방예술촌','양주','경기','장흥','공방','도예','전통공예'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'10:00~18:00',phone:'031-8082-6114'},
  {experience_id:'EX-CB-CUL-076',name:'공주 마곡사 봄꽃 트레킹',category_main:'문화/체험',category_sub:'역사 체험',region_main:'CB',region_sub:'충청남도 공주시',address:'충청남도 공주시 사곡면 마곡사로 966',lat:36.5406,lng:127.0297,price:'성인 2,000원',duration:'1~2시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'유네스코 세계문화유산 산사 충남 공주 마곡사를 탐방하는 봄꽃 트레킹이다. 마곡사 진입로 봄꽃과 태화산 자락 천년 고찰이 어우러지는 코스로 백범 김구 선생이 출가했던 사찰이기도 하다.',source_urls:['https://www.magoksa.or.kr/'],data_confidence:'high',tags:['공주마곡사봄꽃','공주','충남','마곡사','유네스코산사','봄꽃','김구선생'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'봄꽃 시즌 / 연중',phone:'041-841-6220'},
  {experience_id:'EX-GN-CUL-083',name:'김해 가야테마파크',category_main:'문화/체험',category_sub:'역사 체험',region_main:'GN',region_sub:'경상남도 김해시',address:'경상남도 김해시 가야테마길 111 가야테마파크',lat:35.2547,lng:128.8814,price:'성인 12,000원',duration:'3~4시간',reservation_required:false,target_user:['가족','어린이'],nearby_places:[],related_heritage_ids:[],short_description:'가야 역사를 체험하는 경남 김해 가야테마파크를 탐방하는 체험이다. 가야 건국 설화·철기 문화·복식 등을 어린이 눈높이에서 체험하는 가야 역사 교육 테마파크로 구지봉과 연계된 코스다.',source_urls:['https://www.gimhae.go.kr/'],data_confidence:'high',tags:['김해가야테마파크','김해','경남','가야','가야역사','철기문화','어린이체험'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00 (월 휴관)',phone:'055-340-7900'},
  {experience_id:'EX-GG-NAT-096',name:'용인 에버랜드 튤립 축제',category_main:'문화/체험',category_sub:'자연체험',region_main:'GG',region_sub:'경기도 용인시',address:'경기도 용인시 처인구 에버랜드로 199 에버랜드',lat:37.2939,lng:127.2031,price:'성인 56,000원~',duration:'4~8시간',reservation_required:false,target_user:['가족','커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'경기 용인 에버랜드에서 봄 튤립 축제를 즐기는 체험이다. 300만 송이 이상 튤립이 만개하는 4~5월 에버랜드 튤립 축제는 아시아 최대 규모 튤립 정원으로 화려한 봄꽃 풍경이 펼쳐진다.',source_urls:['https://www.everland.com/'],data_confidence:'high',tags:['에버랜드튤립축제','에버랜드','용인','경기','튤립','봄꽃','아시아최대튤립'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'4~5월 튤립 시즌 10:00~22:00',phone:'031-320-5000'}
];

const newShorts = [
  {
    experience_id:'EX-GG-NAT-094', experience_name:'포천 비둘기낭 폭포', category_sub:'자연체험', region:'경기도',
    script_30s:'오늘은 포천 비둘기낭 폭포에 왔어요. 드라마 촬영지예요. 근데 아무도 안 알려주는 게 있어요 — 비둘기낭이 비둘기 둥지라는 뜻이에요. 현무암 절벽 구멍에 비둘기가 집을 지었어요. 그게 이름이 됐어요. 너무 이름이 이렇게 자연에서 나온다는 게 좋았습니다.',
    script_60s:'오늘은 경기 포천 한탄강 유네스코 세계지질공원 안 비둘기낭 폭포를 탐방했어요. 현무암 협곡 안에 숨겨진 신비로운 폭포예요. 근데 아무도 안 알려주는 꿀팁 하나 — 비둘기낭 이름의 뜻이 있어요. 비둘기낭은 비둘기 둥지라는 의미예요. 현무암 주상절리 절벽에 빈 구멍이 많은데 그 구멍에 비둘기가 집을 짓고 살았어요. 그 모습을 보고 비둘기 낭(巢, 둥지)이라고 불렀어요. 폭포 협곡이 워낙 좁고 깊어서 낮에도 햇빛이 잘 들지 않아요. 그 그늘진 협곡 분위기가 드라마 선덕여왕·주몽·뿌리깊은 나무 등 수십 편의 사극 촬영지가 된 이유예요. 폭포 아래 연못이 에메랄드빛이에요. 비둘기낭 탐방은 협곡 전망대에서 내려다보는 방법과 협곡 아래까지 내려가는 방법이 있어요. 아래까지 내려가야 진짜 절경이에요. 너무 이름이 이렇게 자연에서 나온다는 게 좋았습니다.',
    secret_tip:'비둘기낭 = 현무암 절벽 구멍에 비둘기 집 지어 이름 — 협곡 좁고 어두워 사극 수십 편 촬영지. 협곡 아래까지 내려가야 에메랄드 연못+폭포 진짜 절경. 한탄강 세계지질공원 연계 코스',
    filming_guide:'비둘기낭 협곡 아래 에메랄드 연못+폭포. 현무암 절벽 구멍 클로즈업. 협곡 전망대 조망.',
    broll_ideas:['에메랄드 연못+폭포','현무암 절벽 구멍 클로즈업','협곡 전망대 조망','협곡 내려가는 길','드라마 촬영지 느낌'],
    hooks:['비둘기 둥지라는 뜻이에요','절벽 구멍에 비둘기가 살았어요','드라마 수십 편 촬영지예요','아래까지 내려가야 절경이에요','포천 비둘기낭 꿀팁'],
    thumbnails:['에메랄드 연못+폭포','현무암 절벽 구멍','전망대 조망','내려가는 길','드라마 촬영지'],
    captions:{youtube:'포천 비둘기낭 폭포 — 비둘기 둥지라는 뜻이에요 💧\n\n현무암 절벽 구멍에 비둘기가 살았어요!\n사극 드라마 수십 편 촬영지\n\n📍 경기도 포천시 영북면 대회산리\n💧 유네스코 세계지질공원 한탄강\n\n#포천비둘기낭폭포 #비둘기낭폭포 #포천 #경기여행 #한탄강',instagram:'포천 비둘기낭 폭포 비둘기 둥지라는 뜻이에요 💧\n\n현무암 절벽 구멍에 비둘기 살아서 이름 ✨\n사극 드라마 수십 편 촬영지\n\n📍 경기 포천 비둘기낭\n\n#포천비둘기낭폭포 #포천여행 #경기 #폭포 #GemKorea',tiktok:'포천 비둘기낭 폭포 꿀팁 💧 비둘기 둥지라는 뜻이에요! 현무암 절벽 구멍에 비둘기가 살아서 이름 // 사극 드라마 수십 편 촬영지예요 #포천비둘기낭폭포 #포천여행 #경기'},
    hashtags:{korean:['#한국여행','#경기여행','#포천여행','#비둘기낭폭포','#GemKorea'],place_specific:['#포천비둘기낭비둘기둥지뜻','#현무암절벽구멍비둘기집','#사극드라마수십편촬영지','#협곡아래에메랄드연못폭포']}
  },
  {
    experience_id:'EX-GB-NAT-049', experience_name:'울릉도 독도 여행', category_sub:'역사 체험', region:'경상북도',
    script_30s:'오늘은 독도에 상륙했어요. 근데 아무도 안 알려주는 게 있어요 — 독도에 사람이 살아요. 독도경비대 40여 명과 어업인 2~3명이에요. 대한민국 주민등록이 된 유일한 섬이에요. 너무 사람이 이렇게 영토를 지킨다는 게 좋았습니다.',
    script_60s:'오늘은 울릉도에서 쾌속선을 타고 독도에 상륙했어요. 기상 조건 때문에 상륙 성공률 30~40%인 특별한 체험이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 독도에 사람이 살고 있어요. 독도경비대 경찰관 40여 명이 24시간 독도를 지키고 있어요. 그리고 실제 주민등록 주소를 독도로 둔 어업인 가족 2~3명이 거주해요. 대한민국에서 가장 동쪽에 있는 사람이 사는 섬이에요. 독도에 주민등록 이전이 가능해요. 실제로 수천 명이 독도 주소로 주민등록을 옮겼어요. 독도 상륙 시간은 약 20~30분이에요. 파도 조건에 따라 상륙 불가 시 배 위에서 독도를 멀리서 보는 경우도 있어요. 울릉도 숙박 후 새벽 6시 출발 배를 타야 해요. 너무 사람이 이렇게 영토를 지킨다는 게 좋았습니다.',
    secret_tip:'독도 거주자 = 경찰 독도경비대 40여 명+어업인 가족 2~3명 — 실거주 주민 있음. 독도 주소 주민등록 이전 가능 수천 명 이전. 상륙 성공률 30~40% 기상 불확실. 새벽 6시 배 필수',
    filming_guide:'독도 동도 선착장 상륙 장면. 독도 동도·서도 전경. 독도경비대 건물.',
    broll_ideas:['독도 선착장 상륙','동도·서도 전경','독도경비대 건물','독도 표지석','울릉도 배 타기'],
    hooks:['독도에 사람이 살아요','경찰 40여 명이 지켜요','주민등록 이전이 가능해요','상륙 성공률 30~40%예요','독도 여행 꿀팁'],
    thumbnails:['독도 선착장 상륙','동도·서도 전경','독도경비대','독도 표지석','울릉도 배'],
    captions:{youtube:'독도 여행 — 사람이 살고 있어요 🏝️\n\n독도경비대 40여 명+어업인 거주!\n주민등록 이전도 가능해요\n\n📍 경북 울릉군 울릉읍 독도리 독도\n🏝️ 대한민국 최동단 영토 상륙 체험\n\n#독도여행 #독도 #울릉도 #경북여행 #대한민국최동단',instagram:'독도 여행 사람이 살고 있어요 🏝️\n\n경찰 독도경비대 40여 명+어업인 거주 ✨\n주민등록 이전도 가능해요\n\n📍 경북 울릉도→독도\n\n#독도여행 #독도 #울릉도 #경북 #GemKorea',tiktok:'독도 여행 꿀팁 🏝️ 사람이 살고 있어요! 독도경비대 40여 명+어업인 가족 2~3명 // 독도 주소로 주민등록 이전도 가능해요 #독도여행 #독도 #울릉도여행'},
    hashtags:{korean:['#한국여행','#경북여행','#울릉도여행','#독도','#GemKorea'],place_specific:['#독도경비대40여명어업인거주','#독도주민등록이전가능','#상륙성공률30~40%기상','#대한민국최동단사람사는섬']}
  },
  {
    experience_id:'EX-GW-NAT-086', experience_name:'속초 아바이마을 갯배 체험', category_sub:'역사 체험', region:'강원특별자치도',
    script_30s:'오늘은 속초 아바이마을 갯배를 탔어요. 200원이에요. 근데 아무도 안 알려주는 게 있어요 — 아바이마을 주민이 6.25 실향민이에요. 북한으로 돌아가려고 바다 옆에 정착했어요. 50~70년 됐어요. 아직도 안 돌아갔어요. 너무 그리움이 이렇게 마을을 만든다는 게 좋았습니다.',
    script_60s:'오늘은 강원도 속초 아바이마을에서 갯배를 200원 내고 탔어요. 드라마 가을동화 배경지로 유명한 실향민 마을이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 아바이마을의 역사가 있어요. 아바이마을은 6.25 전쟁 때 북한 함경도·강원도에서 피난 내려온 실향민들이 정착한 마을이에요. 피난민들이 북한에 돌아갈 수 있다는 희망을 품고 남한에서 가장 북쪽에 가까운 곳 속초 청호동 갯벌 위에 정착했어요. 임시로 살다가 돌아가자고 생각했는데 50~70년이 됐어요. 아바이는 함경도 사투리로 아버지예요. 실향민 어른들을 부르는 말이 마을 이름이 됐어요. 지금은 2~3세 후손들이 살고 있어요. 마을 안 오징어순대·아바이순대가 실향 음식 문화예요. 너무 그리움이 이렇게 마을을 만든다는 게 좋았습니다.',
    secret_tip:'아바이마을 = 6.25 함경도 피난민 북한 돌아갈 희망으로 속초 최북단 정착 — 임시 정착이 50~70년. 아바이는 함경도 사투리 아버지. 갯배 200원. 오징어순대+아바이순대 실향 음식',
    filming_guide:'갯배 손으로 당기는 체험 장면. 아바이마을 골목 전경. 오징어순대 먹기.',
    broll_ideas:['갯배 손으로 당기기','아바이마을 골목','오징어순대 먹기','청호동 갯벌 전경','속초 설악산 배경'],
    hooks:['갯배가 200원이에요','6.25 실향민이 만든 마을이에요','북한 돌아가려고 여기 정착했어요','아바이가 함경도 아버지예요','속초 아바이마을 꿀팁'],
    thumbnails:['갯배 당기기','아바이마을 골목','오징어순대 먹기','청호동 갯벌','설악산 배경'],
    captions:{youtube:'속초 아바이마을 갯배 — 6.25 실향민이 만든 마을이에요 🚤\n\n북에 돌아가려고 최북단에 정착!\n임시 정착이 50~70년이 됐어요\n\n📍 강원도 속초시 청호동 아바이마을\n🚤 갯배 200원 실향민 마을 체험\n\n#속초아바이마을갯배 #아바이마을 #속초 #강원여행 #실향민마을',instagram:'속초 아바이마을 갯배 6.25 실향민이 만든 마을이에요 🚤\n\n북 돌아가려고 속초 최북단 정착 ✨\n임시가 50~70년이 됐어요\n\n📍 강원 속초 아바이마을\n\n#속초아바이마을 #아바이마을 #속초여행 #강원 #GemKorea',tiktok:'속초 아바이마을 꿀팁 🚤 6.25 실향민이 북에 돌아가려고 최북단 속초에 정착했어요! 임시 정착이 50~70년이 됨 // 아바이는 함경도 사투리 아버지예요 #속초아바이마을갯배 #속초여행 #강원'},
    hashtags:{korean:['#한국여행','#강원여행','#속초여행','#아바이마을','#GemKorea'],place_specific:['#속초아바이마을6.25실향민','#북돌아갈희망최북단정착','#임시정착50~70년','#아바이함경도사투리아버지']}
  },
  {
    experience_id:'EX-JN-NAT-105', experience_name:'여수 금오도 비렁길 트레킹', category_sub:'자연체험', region:'전라남도',
    script_30s:'오늘은 여수 금오도 비렁길을 걸었어요. 근데 아무도 안 알려주는 게 있어요 — 비렁이 벼랑이에요. 전라도 사투리예요. 벼랑 위를 걷는 길이 비렁길이에요. 너무 사투리가 이렇게 길 이름이 됐다는 게 좋았습니다.',
    script_60s:'오늘은 전남 여수 금오도 비렁길 트레킹을 즐겼어요. 남해 절경 해안 절벽 위를 걷는 코스예요. 근데 아무도 안 알려주는 꿀팁 하나 — 비렁길 이름의 뜻이 있어요. 비렁은 전라도 사투리로 벼랑이에요. 비렁길은 벼랑 위를 걷는 길이라는 뜻이에요. 금오도 해안 절벽이 해발 200m에 이르러요. 그 절벽 위 좁은 길을 걷는 게 비렁길이에요. 절벽 아래 에메랄드빛 남해 바다가 내려다보여요. 전체 5코스 18.2km예요. 전 코스 완주하면 1~2박 필요해요. 당일 코스로는 1코스(5.2km·함구미~굴등전망대)가 가장 절경이에요. 금오도는 여수 돌산도에서 배로 30분 거리예요. 섬 자체가 아직 관광화가 덜 됐어요. 여수 시내보다 훨씬 조용한 진짜 남해 섬이에요. 너무 사투리가 이렇게 아름다운 길 이름이 됐다는 게 좋았습니다.',
    secret_tip:'비렁=전라도 사투리 벼랑 — 비렁길=벼랑 위 걷는 길. 5코스 18.2km 당일은 1코스(5.2km)가 최고 절경. 절벽 아래 에메랄드 남해. 여수 돌산도에서 배 30분. 관광화 덜 된 진짜 남해 섬',
    filming_guide:'비렁길 절벽 위 걷는 장면. 절벽 아래 에메랄드 바다 조망. 금오도 섬 전경.',
    broll_ideas:['절벽 위 비렁길 걷기','절벽 아래 에메랄드 바다','금오도 섬 전경','굴등 전망대 조망','진짜 남해 바다'],
    hooks:['비렁이 벼랑 전라도 사투리예요','벼랑 위를 걷는 길이에요','절벽 아래 에메랄드예요','당일은 1코스가 최고예요','금오도 비렁길 꿀팁'],
    thumbnails:['절벽 위 비렁길','절벽 아래 에메랄드','금오도 섬 전경','굴등 전망대','남해 바다'],
    captions:{youtube:'여수 금오도 비렁길 — 비렁이 벼랑 사투리예요 🌊\n\n벼랑 위를 걷는 길!\n절벽 아래 에메랄드 남해 바다\n\n📍 전남 여수시 남면 금오도 비렁길\n🌊 5코스 18.2km 당일 1코스 추천\n\n#여수금오도비렁길 #비렁길 #금오도 #여수 #전남여행',instagram:'여수 금오도 비렁길 비렁이 벼랑 사투리예요 🌊\n\n벼랑 위를 걷는 길 ✨\n절벽 아래 에메랄드 남해 바다\n\n📍 전남 여수 금오도\n\n#여수금오도비렁길 #비렁길 #금오도 #여수여행 #전남 #GemKorea',tiktok:'금오도 비렁길 꿀팁 🌊 비렁이 벼랑 전라도 사투리예요! 벼랑 위를 걷는 길 // 절벽 아래 에메랄드 남해 바다가 압도적이에요 #여수금오도비렁길 #금오도 #여수여행'},
    hashtags:{korean:['#한국여행','#전남여행','#여수여행','#금오도비렁길','#GemKorea'],place_specific:['#금오도비렁길비렁전라도사투리벼랑','#벼랑위걷는길','#절벽아래에메랄드남해','#5코스18.2km당일1코스최고']}
  },
  {
    experience_id:'EX-CB-CUL-076', experience_name:'공주 마곡사 봄꽃 트레킹', category_sub:'역사 체험', region:'충청남도',
    script_30s:'오늘은 공주 마곡사에 왔어요. 유네스코 세계문화유산이에요. 근데 아무도 안 알려주는 게 있어요 — 백범 김구 선생이 여기서 출가했어요. 명성황후 시해 복수로 일본인을 죽이고 피신해서요. 너무 역사가 이렇게 사찰에 있다는 게 좋았습니다.',
    script_60s:'오늘은 충남 공주 마곡사를 탐방했어요. 유네스코 세계문화유산 산사예요. 근데 아무도 안 알려주는 꿀팁 하나 — 마곡사와 백범 김구의 특별한 인연이 있어요. 독립운동가 백범 김구 선생이 이 마곡사에서 출가한 역사가 있어요. 1896년 명성황후 시해에 분노한 김구 선생이 일본인 장교를 살해하고 탈옥한 후 피신처로 마곡사에 들어와 스님이 됐어요. 1년 정도 수행 후 다시 속세로 나와 독립운동을 이어갔어요. 마곡사 경내에 백범 김구 선생이 심었다는 향나무가 있어요. 1946년 광복 후 마곡사를 다시 찾은 김구 선생이 심은 나무예요. 그 향나무가 지금도 자라고 있어요. 너무 역사가 이렇게 사찰 한가운데 있다는 게 좋았습니다.',
    secret_tip:'마곡사 = 백범 김구 선생 출가지 — 1896년 명성황후 시해 복수로 일본인 살해 후 탈옥 피신. 1년 수행 후 속세 복귀 독립운동 재개. 1946년 광복 후 다시 찾아 심은 향나무 현존',
    filming_guide:'마곡사 백범 김구 향나무 클로즈업. 마곡사 봄꽃 전경. 태화산 마곡사 전경.',
    broll_ideas:['백범 향나무 클로즈업','마곡사 봄꽃 전경','태화산 마곡사 전경','김구 선생 자료 사진','마곡사 계곡'],
    hooks:['백범 김구 선생이 여기서 출가했어요','명성황후 복수 후 피신 온 거예요','향나무가 지금도 있어요','광복 후 다시 찾아 심었어요','공주 마곡사 꿀팁'],
    thumbnails:['백범 향나무','마곡사 봄꽃','태화산 전경','김구 선생 자료','마곡사 계곡'],
    captions:{youtube:'공주 마곡사 — 백범 김구 선생이 출가한 사찰이에요 🌸\n\n명성황후 복수 탈옥 후 피신!\n1946년 심은 향나무 지금도 자라요\n\n📍 충남 공주시 사곡면 마곡사로 966\n🌸 유네스코 세계문화유산 산사\n\n#공주마곡사봄꽃 #마곡사 #공주 #충남여행 #백범김구출가지',instagram:'공주 마곡사 백범 김구 선생이 출가한 사찰이에요 🌸\n\n명성황후 복수 탈옥 피신 출가 ✨\n1946년 광복 후 다시 찾아 심은 향나무 현존\n\n📍 충남 공주 마곡사\n\n#공주마곡사 #마곡사 #공주여행 #충남 #GemKorea',tiktok:'공주 마곡사 꿀팁 🌸 백범 김구 선생이 여기서 출가했어요! 명성황후 복수 탈옥 후 피신처 // 1946년 광복 후 다시 찾아 심은 향나무가 지금도 있어요 #공주마곡사 #마곡사 #공주여행'},
    hashtags:{korean:['#한국여행','#충남여행','#공주여행','#마곡사','#GemKorea'],place_specific:['#공주마곡사백범김구출가지','#명성황후복수탈옥피신1896년','#1946년광복후향나무현존','#유네스코산사백범역사']}
  },
  {
    experience_id:'EX-GN-CUL-083', experience_name:'김해 가야테마파크', category_sub:'역사 체험', region:'경상남도',
    script_30s:'오늘은 김해 가야테마파크에 왔어요. 근데 아무도 안 알려주는 게 있어요 — 가야 왕 수로왕의 왕비가 인도 공주예요. 배를 타고 왔대요. 2천 년 전 국제 결혼이에요. 너무 역사가 이렇게 세계적이라는 게 좋았습니다.',
    script_60s:'오늘은 경남 김해 가야테마파크를 탐방했어요. 가야 역사를 체험하는 테마파크예요. 근데 아무도 안 알려주는 꿀팁 하나 — 가야 수로왕과 인도 공주의 국제결혼 이야기가 있어요. 가야를 건국한 수로왕의 왕비 허황옥이 인도 아유타국에서 왔다는 전설이 있어요. 삼국유사에 기록된 이야기예요. 허황옥이 인도에서 배를 타고 가야에 와서 수로왕과 결혼했어요. 2천 년 전 국제결혼이에요. 놀랍게도 김해 허씨 문중은 지금도 인도 아요디아시와 자매도시 협정을 맺고 있어요. 인도 아요디아시에는 허황옥 기념비도 있어요. 유전자 분석 연구에서 김해 허씨 일부에서 인도계 유전자가 발견됐다는 논문도 있어요. 전설이 사실일 수도 있어요. 너무 역사가 이렇게 세계적이라는 게 좋았습니다.',
    secret_tip:'가야 수로왕 왕비 허황옥 = 인도 아유타국 출신 전설 — 삼국유사 기록. 김해 허씨↔인도 아요디아 자매도시 협정. 인도 아요디아에 허황옥 기념비. 유전자 분석에서 인도계 유전자 일부 발견',
    filming_guide:'가야테마파크 가야 건국 전시 전경. 수로왕+허황옥 인도 결혼 설명. 김해 구지봉.',
    broll_ideas:['가야 건국 전시','수로왕 허황옥 설명','김해 구지봉','가야 토기 유물','가야 복식 체험'],
    hooks:['가야 왕비가 인도 공주예요','2천 년 전 국제결혼이에요','인도에 기념비가 있어요','유전자 분석에서 인도계도 나왔어요','김해 가야 꿀팁'],
    thumbnails:['가야 건국 전시','수로왕 허황옥 설명','구지봉','가야 토기 유물','복식 체험'],
    captions:{youtube:'김해 가야테마파크 — 가야 왕비가 인도 공주예요 👑\n\n2천 년 전 국제결혼!\n인도 아요디아에 허황옥 기념비 현존\n\n📍 경남 김해시 가야테마길 111\n👑 가야 역사 체험 테마파크\n\n#김해가야테마파크 #가야테마파크 #김해 #경남여행 #수로왕허황옥',instagram:'김해 가야테마파크 가야 왕비가 인도 공주예요 👑\n\n2천 년 전 국제결혼 ✨\n인도 아요디아에 허황옥 기념비 현존\n\n📍 경남 김해 가야테마파크\n\n#김해가야테마파크 #가야 #김해여행 #경남 #GemKorea',tiktok:'김해 가야 꿀팁 👑 가야 왕비 허황옥이 인도 공주예요! 2천 년 전 국제결혼 // 인도 아요디아에 허황옥 기념비가 지금도 있어요 #김해가야테마파크 #김해여행 #경남'},
    hashtags:{korean:['#한국여행','#경남여행','#김해여행','#가야테마파크','#GemKorea'],place_specific:['#김해가야수로왕허황옥인도공주','#2천년전국제결혼삼국유사','#인도아요디아허황옥기념비','#유전자분석인도계가야']}
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
