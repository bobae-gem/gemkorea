const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const now = new Date().toISOString().slice(0,19);

const newExps = [
  {experience_id:'EX-GW-NAT-049',name:'강원 삼척 초당굴+환선굴 코스',category_main:'문화/체험',category_sub:'자연체험',region_main:'GW',region_sub:'강원특별자치도 삼척시',address:'강원특별자치도 삼척시 환선굴길 226',lat:37.3456,lng:129.1194,price:'환선굴 성인 5,000원~',duration:'3~5시간',reservation_required:false,target_user:['가족','개인'],nearby_places:[],related_heritage_ids:[],short_description:'국내 최대 석회암 동굴 환선굴과 추암 촛대바위를 하루에 탐방하는 삼척 동굴 코스다. 환선굴의 신비로운 지하 세계와 동해 해안 절경이 어우러지는 강원도 대표 자연 체험 코스다.',source_urls:['https://www.samcheok.go.kr/'],data_confidence:'high',tags:['환선굴','삼척','강원','추암촛대바위','석회암동굴','지하세계','동해해안'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~17:00',phone:'033-541-9266'},
  {experience_id:'EX-JN-NAT-055',name:'광주 무등산 서석대 일출',category_main:'문화/체험',category_sub:'자연체험',region_main:'JN',region_sub:'광주광역시 동구',address:'광주광역시 동구 무등로 무등산 국립공원',lat:35.1353,lng:127.0026,price:'무료',duration:'4~5시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'광주 무등산 서석대에서 새벽 일출을 감상하는 체험이다. 서석대의 주상절리 기암절벽이 일출 빛에 물드는 장면이 무등산 최고의 새벽 경관으로 꼽히며 광주 시내 전체가 발아래 보인다.',source_urls:['https://mudeungsan.knps.or.kr/'],data_confidence:'high',tags:['서석대일출','무등산','광주','주상절리','새벽','일출','광주시내전경'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'일출 전 입산 가능',phone:'062-227-1187'},
  {experience_id:'EX-GN-NAT-054',name:'거제 바람의 언덕 파노라마',category_main:'문화/체험',category_sub:'자연체험',region_main:'GN',region_sub:'경상남도 거제시',address:'경상남도 거제시 남부면 바람의 언덕',lat:34.7869,lng:128.6533,price:'무료',duration:'1~2시간',reservation_required:false,target_user:['커플','개인','가족'],nearby_places:[],related_heritage_ids:[],short_description:'거제도 남쪽 바람의 언덕에서 한려해상 다도해 파노라마를 감상하는 체험이다. 풍차와 초지가 어우러진 제주도 같은 풍경으로 드라마·CF 촬영지이며 신선대·공곶이와 연계하면 거제 최고 여행 코스가 된다.',source_urls:['https://www.geoje.go.kr/'],data_confidence:'high',tags:['바람의언덕','거제','경남','다도해','풍차','파노라마','드라마촬영지'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (무료)',phone:'055-639-4172'},
  {experience_id:'EX-GG-NAT-055',name:'파주 DMZ 생태 탐조 투어',category_main:'문화/체험',category_sub:'자연체험',region_main:'GG',region_sub:'경기도 파주시',address:'경기도 파주시 군내면 통일로 일원',lat:37.9286,lng:126.7653,price:'탐조 투어 1인 20,000원~',duration:'3~4시간',reservation_required:true,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'파주 임진강 DMZ 접경 지역에서 두루미·재두루미·독수리 등 겨울 철새를 탐조하는 체험이다. 분단이 아이러니하게 만들어낸 생태 낙원 DMZ에서 수천 마리 철새 군무를 관찰하는 특별한 투어다.',source_urls:['https://www.paju.go.kr/'],data_confidence:'high',tags:['DMZ탐조','파주','경기','두루미','겨울철새','임진강','분단역설'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'seasonal',operating_hours:'12~2월 철새 시즌 (예약 필수)',phone:'031-953-4744'},
  {experience_id:'EX-GN-NAT-055',name:'합천 해인사 가을 단풍 탐방',category_main:'문화/체험',category_sub:'자연체험',region_main:'GN',region_sub:'경상남도 합천군',address:'경상남도 합천군 가야면 해인사길 122',lat:35.7900,lng:128.0992,price:'성인 3,000원',duration:'2~3시간',reservation_required:false,target_user:['가족','커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'팔만대장경이 있는 해인사 경내와 홍류동 계곡의 가을 단풍을 감상하는 체험이다. 10월 홍류동 계곡 단풍이 절정일 때 경남 최고의 단풍 명소로 꼽히며 가야산 능선 단풍과 사찰이 어우러지는 경관이 아름답다.',source_urls:['https://www.haeinsa.or.kr/'],data_confidence:'high',tags:['해인사단풍','합천','경남','홍류동','가을단풍','가야산','사찰'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'10월 단풍 시즌',phone:'055-934-3000'},
  {experience_id:'EX-JN-NAT-056',name:'순천만 국가정원 체험',category_main:'문화/체험',category_sub:'자연체험',region_main:'JN',region_sub:'전라남도 순천시',address:'전라남도 순천시 국가정원1호길 47',lat:34.8922,lng:127.4936,price:'성인 8,000원',duration:'3~4시간',reservation_required:false,target_user:['가족','커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'국내 1호 국가정원 순천만 국가정원을 탐방하는 체험이다. 세계 12개국 정원과 한국 전통 정원이 함께 조성된 40만 평 규모의 정원으로 계절마다 다른 꽃과 경관이 펼쳐진다.',source_urls:['https://www.suncheonbay.go.kr/'],data_confidence:'high',tags:['순천만국가정원','순천','전남','국가정원','세계정원','사계절꽃','40만평'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~19:00',phone:'1577-2013'},
  {experience_id:'EX-GW-NAT-050',name:'춘천 레고랜드+위도 보트',category_main:'문화/체험',category_sub:'어린이 체험',region_main:'GW',region_sub:'강원특별자치도 춘천시',address:'강원특별자치도 춘천시 스프링시티로 35',lat:37.8733,lng:127.7561,price:'성인 59,000원~',duration:'5~8시간',reservation_required:false,target_user:['가족','어린이'],nearby_places:[],related_heritage_ids:[],short_description:'춘천 의암호 위도에 조성된 레고랜드코리아와 레고 테마 체험을 즐기는 어린이 가족 체험이다. 레고를 테마로 한 40여 개 놀이기구와 레고 빌딩 체험이 어린이에게 최고의 기억을 선물한다.',source_urls:['https://www.legoland.kr/'],data_confidence:'high',tags:['레고랜드','춘천','강원','레고','어린이','가족','테마파크'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'10:00~18:00',phone:'033-815-0000'},
  {experience_id:'EX-GN-NAT-056',name:'함안 국화 향기 가을 축제',category_main:'문화/체험',category_sub:'축제',region_main:'GN',region_sub:'경상남도 함안군',address:'경상남도 함안군 함안읍 대사리 함안 아라가야 테마파크',lat:35.2731,lng:128.3975,price:'무료',duration:'2~3시간',reservation_required:false,target_user:['가족','커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'매년 10~11월 함안에서 열리는 국화 향기 축제를 방문하는 체험이다. 수십만 송이 국화가 만발하는 함안의 가을 대표 축제로 국화 조형물·국화 터널·국화 향기 가득한 경관을 즐길 수 있다.',source_urls:['https://www.haman.go.kr/'],data_confidence:'high',tags:['함안국화축제','함안','경남','국화꽃','가을축제','10~11월','국화향'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'매년 10~11월 (2주간)',phone:'055-580-2481'},
  {experience_id:'EX-GG-NAT-056',name:'용인 캐리비안베이 파도풀 피서',category_main:'문화/체험',category_sub:'워터파크',region_main:'GG',region_sub:'경기도 용인시',address:'경기도 용인시 처인구 포곡읍 에버랜드로 199',lat:37.2918,lng:127.2003,price:'성인 55,000원~',duration:'4~8시간',reservation_required:false,target_user:['가족','청년','커플'],nearby_places:[],related_heritage_ids:[],short_description:'에버랜드 옆 캐리비안베이 워터파크에서 아시아 최대 파도풀 피서를 즐기는 체험이다. 여름 성수기 최고 37,000명이 몰리는 최대 워터파크로 파도풀·워터슬라이드·실내 스파가 갖춰져 있다.',source_urls:['https://www.everland.com/caribbean/'],data_confidence:'high',tags:['캐리비안베이','용인','경기','파도풀','워터파크','에버랜드','여름피서'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'seasonal',operating_hours:'하계 10:00~20:00 (실내관 연중)',phone:'031-320-5000'},
  {experience_id:'EX-JN-NAT-057',name:'완도 신지도 명사십리 해변',category_main:'문화/체험',category_sub:'자연체험',region_main:'JN',region_sub:'전라남도 완도군',address:'전라남도 완도군 신지면 명사십리해변로 11',lat:34.3317,lng:126.8086,price:'무료',duration:'2~3시간',reservation_required:false,target_user:['가족','커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'완도 신지도 명사십리 해변에서 여름 해수욕과 갯벌 체험을 즐기는 체험이다. 4km 백사장과 소나무 숲이 어우러지는 전남 최고 해수욕장으로 완도 청산도와 함께 묶으면 완벽한 남도 섬 여행이 된다.',source_urls:['https://www.wando.go.kr/'],data_confidence:'high',tags:['명사십리해변','완도','전남','신지도','백사장','소나무숲','해수욕'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'seasonal',operating_hours:'6~8월 성수기 (무료)',phone:'061-550-5114'},
  {experience_id:'EX-GW-NAT-051',name:'고성 DMZ 박물관+화진포',category_main:'문화/체험',category_sub:'역사 체험',region_main:'GW',region_sub:'강원특별자치도 고성군',address:'강원특별자치도 고성군 현내면 통일전망대로 369',lat:38.3719,lng:128.4583,price:'DMZ 박물관 성인 3,000원',duration:'3~4시간',reservation_required:false,target_user:['가족','개인'],nearby_places:[],related_heritage_ids:[],short_description:'강원도 고성 DMZ 박물관과 화진포를 하루에 탐방하는 코스다. 한국에서 가장 북쪽에 위치한 DMZ 박물관에서 분단 역사를 이해하고 천혜의 자연 화진포 호수에서 힐링을 즐기는 코스다.',source_urls:['https://www.goseong.org/'],data_confidence:'high',tags:['고성DMZ박물관','화진포','고성','강원','분단역사','한국최북단','DMZ'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~17:00',phone:'033-681-0625'},
  {experience_id:'EX-GN-NAT-057',name:'창원 마창대교+귀산 해안',category_main:'문화/체험',category_sub:'자연체험',region_main:'GN',region_sub:'경상남도 창원시',address:'경상남도 창원시 마산합포구 귀산동 해안',lat:35.1586,lng:128.5611,price:'무료',duration:'1~2시간',reservation_required:false,target_user:['커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'창원 마창대교와 귀산 해안 산책로를 드라이브·산책하는 체험이다. 마산만을 가로지르는 마창대교 야경과 귀산 해안가에서 바라보는 진해만 전경이 창원 최고의 드라이브·산책 코스다.',source_urls:['https://www.changwon.go.kr/'],data_confidence:'high',tags:['귀산해안','창원','경남','마창대교','해안산책','마산만','드라이브'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (무료)',phone:'055-225-3691'}
];

const newShorts = [
  {
    experience_id:'EX-SE-ART-006', experience_name:'서울 DDP 디자인플라자 야경', category_sub:'야경/야간투어', region:'서울특별시',
    script_30s:'오늘은 DDP 야경을 봤어요. 자하 하디드 설계 비정형 건물이에요. 근데 아무도 안 알려주는 게 있어요 — DDP에 직선이 하나도 없어요. 모든 게 곡선이에요. 그래서 그림자도 이상해요. 너무 직선이 없는 세계가 이렇게 아름답다는 게 좋았습니다.',
    script_60s:'오늘은 서울 동대문 DDP 동대문디자인플라자 야경을 봤어요. 세계적 건축가 자하 하디드가 설계한 비정형 건물이에요. 낮에도 특이한데 야간에 조명이 켜지면 완전히 다른 세계예요. 근데 아무도 안 알려주는 꿀팁 하나 — DDP에 직선이 하나도 없어요. 외벽 패널 수만 개가 다 서로 다른 각도의 곡면으로 이루어져 있어요. 창문도 곡선, 기둥도 없이 전체가 하나의 흐르는 형태예요. 그래서 야간 조명을 받으면 그림자가 일반 건물처럼 직선으로 생기지 않고 물처럼 흘러요. 이 사실을 알고 보면 DDP 야경이 단순한 건물 조명이 아니라 살아있는 유기체 같아요. 사진 찍을 때 어느 각도에서도 다른 모양이 나와요. 너무 직선이 없는 세계가 이렇게 아름답다는 게 좋았습니다.',
    secret_tip:'DDP 직선 0개 = 모든 패널이 다른 각도 곡면 — 야간 그림자가 물처럼 흐름. 어느 각도서도 다른 모양. 뒤쪽 비밀 광장에서 찍는 야경이 더 다이내믹. 동대문 야시장 세트',
    filming_guide:'DDP 야간 곡면 조명 흐르는 장면. 뒤쪽 비밀 광장에서 전체 광각. 창문 없는 곡선 외벽 클로즈업.',
    broll_ideas:['DDP 야간 곡면 조명 흐르기','뒤쪽 광장에서 전체 광각','창문 없는 곡선 외벽 클로즈업','패션쇼 런웨이 DDP 내부','동대문 야시장과 DDP 배경'],
    hooks:['DDP에 직선이 하나도 없어요','모든 게 곡선이라 그림자도 달라요','야간에 살아있는 유기체 같아요','어느 각도서도 다른 모양','서울 DDP 야경 꿀팁'],
    thumbnails:['DDP 야간 곡면 조명','비밀 광장 전체 광각','곡선 외벽 클로즈업','DDP 내부','동대문과 DDP'],
    captions:{youtube:'서울 DDP 야경 — 직선이 하나도 없어요 🌙\n\n모든 패널이 다른 각도 곡면!\n야간에 살아있는 유기체 같아요\n\n📍 서울 중구 DDP 동대문디자인플라자\n🌙 자하 하디드 설계 / 비정형 건물\n\n#DDP야경 #동대문디자인플라자 #서울여행 #자하하디드 #서울야경',instagram:'서울 DDP 야경 직선이 하나도 없어요 🌙\n\n모든 곡선 그림자가 물처럼 흘러요 ✨\n야간에 살아있는 유기체 같아요\n\n📍 서울 동대문 DDP\n\n#DDP야경 #서울여행 #동대문 #자하하디드 #GemKorea',tiktok:'DDP 야경 꿀팁 🌙 직선이 하나도 없어요! 모든 패널이 다른 각도 곡면이라 야간 그림자가 물처럼 흘러요 // 어느 각도서도 다른 모양 #DDP야경 #서울여행 #동대문'},
    hashtags:{korean:['#한국여행','#서울여행','#DDP','#야경','#GemKorea'],place_specific:['#DDP야경','#직선제로건물','#자하하디드','#동대문디자인플라자']}
  },
  {
    experience_id:'EX-CN-OCN-002', experience_name:'보령 천북 굴 구이 체험', category_sub:'발효/음식', region:'충청남도',
    script_30s:'오늘은 보령 천북에서 굴 구이를 했어요. 서해안 굴의 고장이에요. 근데 아무도 안 알려주는 게 있어요 — 굴 구이할 때 뚜껑이 열리면 바로 먹어야 해요. 열리자마자 10초 안에 먹는 게 가장 맛있어요. 식으면 달라요. 너무 10초가 핵심이라는 게 좋았습니다.',
    script_60s:'오늘은 충남 보령 천북면 굴 구이 거리에 왔어요. 50년 전통의 굴 구이 마을이에요. 드럼통에 연탄불을 피우고 그 위에 굴을 얹어 굽는 전통 방식이에요. 11월부터 3월까지 서해안 굴이 제철이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 굴 구이 먹는 타이밍이 있어요. 굴이 열리는 순간 바로 먹어야 최고예요. 10초 이내가 이상적이에요. 굴이 열리면 안에 굴물이 가득 고여있는데, 그 순간 먹으면 굴물과 굴살이 한 번에 입안을 채워요. 10초만 지나도 굴물이 흘러 빠지고 식기 시작해요. 굴 구이에서 "뚜껑 열리면 바로 먹어!"라고 하는 이유가 이거예요. 너무 10초가 굴 구이의 전부라는 게 좋았습니다.',
    secret_tip:'굴 뚜껑 열리는 10초 안에 먹기 = 굴물+굴살 최고 맛. 10초 지나면 굴물 빠지고 식어서 달라짐. 11~3월 서해 굴 제철. 천북 드럼통 연탄 방식이 원조',
    filming_guide:'굴 뚜껑 열리는 순간 클로즈업. 10초 안에 먹는 타이밍 장면. 천북 굴 구이 드럼통 연탄 전경.',
    broll_ideas:['굴 뚜껑 열리는 순간 클로즈업','10초 안에 먹는 타이밍','드럼통 연탄 굴 구이 전경','굴물 가득 열린 굴 클로즈업','천북 굴 구이 거리'],
    hooks:['굴 뚜껑 열리면 10초 안에 먹어요','10초 지나면 달라져요','굴물이 빠지고 식어요','그 10초가 굴 구이의 전부예요','보령 천북 굴 구이 꿀팁'],
    thumbnails:['굴 뚜껑 열리는 순간','10초 타이밍 먹기','드럼통 연탄 전경','굴물 가득 열린 굴','천북 굴 구이 거리'],
    captions:{youtube:'보령 천북 굴 구이 — 뚜껑 열리면 10초 안에 먹어요 🦪\n\n굴물+굴살 한 번에 최고 맛!\n10초 지나면 굴물 빠져요\n\n📍 충남 보령시 천북면 굴 구이 거리\n🦪 11~3월 서해 굴 제철\n\n#천북굴구이 #보령 #충남여행 #굴구이10초 #서해굴',instagram:'보령 천북 굴 구이 뚜껑 열리면 10초 안에 먹어요 🦪\n\n굴물 빠지기 전 그 10초가 핵심 ✨\n50년 전통 드럼통 연탄 방식\n\n📍 충남 보령 천북 굴 구이 거리\n\n#천북굴구이 #보령여행 #충남 #굴구이 #GemKorea',tiktok:'보령 천북 굴 구이 꿀팁 🦪 뚜껑 열리면 10초 안에 먹어야 해요! 그 순간 굴물이 가득한 최고 맛 // 10초 지나면 굴물 빠지고 식어서 달라요 #천북굴구이 #보령여행 #충남'},
    hashtags:{korean:['#한국여행','#충남여행','#보령여행','#굴구이','#GemKorea'],place_specific:['#천북굴구이','#굴10초타이밍','#드럼통연탄굴','#서해제철굴']}
  },
  {
    experience_id:'EX-GN-OCN-001', experience_name:'남해 미조항 멸치 액젓 담그기', category_sub:'발효/음식', region:'경상남도',
    script_30s:'오늘은 남해 미조항 멸치 체험을 했어요. 봄 멸치 성지예요. 근데 아무도 안 알려주는 게 있어요 — 멸치 젓갈은 소금 비율이 3:1이에요. 멸치 3에 소금 1이에요. 그 비율이 어긋나면 발효가 안 돼요. 너무 비율이 과학이라는 게 좋았습니다.',
    script_60s:'오늘은 경남 남해 미조항에서 봄철 멸치잡이를 견학하고 멸치액젓을 직접 담그는 체험을 했어요. 미조항은 봄 멸치의 고장이에요. 4~6월 멸치 조업 시기에 어선들이 가득 차요. 근데 아무도 안 알려주는 꿀팁 하나 — 멸치액젓을 담글 때 소금 비율이 핵심이에요. 멸치 무게 대비 소금을 약 25~30% 넣어야 해요. 이 비율이 어긋나면 발효가 제대로 일어나지 않거나 부패해요. 소금이 너무 적으면 부패, 너무 많으면 발효가 느리게 진행돼요. 이 정밀한 비율이 어머니들이 손으로 잡아온 발효 과학이에요. 체험에서 이 비율을 배우면 집에서도 멸치액젓을 담글 수 있어요. 너무 비율 하나에 발효 과학이 담겨있다는 게 좋았습니다.',
    secret_tip:'멸치액젓 소금 25~30% 비율 = 발효 성공 — 적으면 부패, 많으면 발효 느림. 이 비율이 어머니들의 손발효 과학. 집에서도 담글 수 있는 비율 기억. 4~6월 미조항 멸치 시즌',
    filming_guide:'멸치와 소금 비율 맞추는 손 클로즈업. 미조항 봄 멸치잡이 어선. 멸치액젓 완성 옹기 담기.',
    broll_ideas:['멸치 소금 비율 맞추는 손','미조항 멸치잡이 어선','액젓 완성 옹기 담기','봄 멸치 선도 클로즈업','미조항 항구 전경'],
    hooks:['멸치액젓 소금 비율 25~30%예요','비율이 어긋나면 발효 안 돼요','이 비율이 발효 과학이에요','집에서 담글 수 있는 비율','남해 미조항 멸치 꿀팁'],
    thumbnails:['멸치 소금 비율 맞추기','미조항 멸치 어선','액젓 옹기 담기','봄 멸치 선도','미조항 항구'],
    captions:{youtube:'남해 미조항 멸치액젓 — 소금 비율 25~30%가 핵심이에요 🐟\n\n비율 어긋나면 발효 안 돼요!\n어머니들의 손발효 과학\n\n📍 경남 남해군 미조면 미조항\n🐟 4~6월 봄 멸치 시즌\n\n#미조항멸치 #남해 #경남여행 #멸치액젓 #발효과학',instagram:'남해 미조항 멸치액젓 소금 25~30%가 핵심이에요 🐟\n\n비율이 발효 과학이에요 ✨\n어머니들의 손으로 잡아온 지식\n\n📍 경남 남해 미조항\n\n#미조항멸치 #남해여행 #경남 #멸치액젓 #GemKorea',tiktok:'남해 미조항 멸치액젓 꿀팁 🐟 소금 비율 25~30%가 핵심이에요! 적으면 부패 많으면 발효 느림 // 이 비율이 어머니들의 발효 과학 집에서도 담가봐요 #미조항멸치 #남해여행 #경남'},
    hashtags:{korean:['#한국여행','#경남여행','#남해여행','#멸치액젓','#GemKorea'],place_specific:['#미조항멸치','#액젓소금비율','#봄멸치시즌','#발효과학비율']}
  },
  {
    experience_id:'EX-CB-HST-002', experience_name:'충주 탄금대 열두대 투어', category_sub:'역사 체험', region:'충청북도',
    script_30s:'오늘은 충주 탄금대에 왔어요. 가야금을 만든 우륵이 연주하던 곳이에요. 근데 아무도 안 알려주는 게 있어요 — 탄금대 이름이 가야금 탄+거문고 금이에요. 우륵이 탄금대에서 가야금을 연주했어요. 음악이 지명이 됐어요. 너무 음악이 역사가 된 장소라서 좋았습니다.',
    script_60s:'오늘은 충북 충주 탄금대 열두대에 왔어요. 가야금을 만든 악사 우륵이 가야금을 연주했다는 역사 유적지이자 임진왜란 신립 장군 전투지예요. 남한강이 내려다보이는 절벽 위에 있어요. 근데 아무도 안 알려주는 꿀팁 하나 — 탄금대라는 이름의 뜻이 있어요. 탄금(彈琴)은 거문고·가야금을 탄다는 뜻이에요. 신라 시대 가야국 악사 우륵이 이 절벽 위에서 가야금을 연주했다는 전설에서 이름이 붙었어요. 음악 소리가 남한강을 따라 멀리까지 퍼졌대요. 지금도 강바람이 강하게 불어오는 날 탄금대 절벽에 서면 마치 우륵의 가야금 소리가 들릴 것 같은 느낌이에요. 임진왜란 신립 장군 전투지이기도 한 이 두 역사가 공존하는 곳이에요. 너무 음악이 지명이 된 역사가 좋았습니다.',
    secret_tip:'탄금대 = 탄금 즉 가야금을 탄다는 뜻 — 우륵 가야금 연주 전설에서 지명. 강바람 강한 날 절벽에 서면 가야금 소리 들릴 것 같은 느낌. 신립 장군 임진왜란 전투지와 공존',
    filming_guide:'남한강 절벽 위 탄금대 전경. 강바람에 흩날리는 머리카락 (바람 표현). 탄금대 이름 설명판 클로즈업.',
    broll_ideas:['남한강 절벽 탄금대 전경','강바람 흩날리는 머리카락','탄금대 이름 설명판','남한강 전체 파노라마','신립 장군 전투지 표지'],
    hooks:['탄금대 이름이 가야금에서 왔어요','우륵이 여기서 가야금 연주했어요','음악이 지명이 된 역사예요','강바람 강한 날 가야금 소리 들릴 것 같아요','충주 탄금대 꿀팁'],
    thumbnails:['남한강 절벽 전경','강바람 머리카락','이름 설명판','남한강 파노라마','신립 장군 표지'],
    captions:{youtube:'충주 탄금대 — 가야금 연주에서 지명이 됐어요 🎵\n\n우륵이 여기서 가야금 연주!\n음악이 역사가 된 장소\n\n📍 충북 충주시 탄금대\n🎵 가야금 악사 우륵+임진왜란 신립 장군 공존\n\n#탄금대 #충주 #충북여행 #우륵 #가야금역사',instagram:'충주 탄금대 가야금 연주에서 지명이 됐어요 🎵\n\n음악이 역사가 된 장소 ✨\n우륵 가야금 소리가 들릴 것 같아요\n\n📍 충북 충주 탄금대\n\n#탄금대 #충주여행 #충북 #우륵 #GemKorea',tiktok:'충주 탄금대 꿀팁 🎵 탄금대가 가야금 연주에서 온 이름이에요! 우륵이 여기서 연주 // 강바람 강한 날 서면 가야금 소리 들릴 것 같아요 #탄금대 #충주여행 #충북'},
    hashtags:{korean:['#한국여행','#충북여행','#충주여행','#가야금역사','#GemKorea'],place_specific:['#탄금대','#우륵가야금연주','#음악이지명이됨','#임진왜란신립']}
  },
  {
    experience_id:'EX-GG-HST-002', experience_name:'행주산성 역사 탐방', category_sub:'역사 체험', region:'경기도',
    script_30s:'오늘은 고양 행주산성에 왔어요. 임진왜란 3대 대첩이에요. 근데 아무도 안 알려주는 게 있어요 — 행주대첩에서 부녀자들이 치마로 돌을 날랐어요. 그게 행주치마 어원이에요. 치마가 역사가 됐어요. 너무 옷이 역사가 된다는 게 좋았습니다.',
    script_60s:'오늘은 경기도 고양 행주산성에 왔어요. 임진왜란 3대 대첩 중 하나인 행주대첩이 열린 현장이에요. 1593년 권율 장군이 왜군 3만 명을 격퇴한 전투지예요. 근데 아무도 안 알려주는 꿀팁 하나 — 행주치마의 어원이 여기예요. 행주대첩 당시 성 안의 부녀자들이 치마로 돌을 날라 군사들에게 공급했어요. 치마를 두른 채 돌을 모아 날랐던 행위가 역사에 남은 거예요. 행주치마가 행주산성의 그 치마에서 왔다는 설이 있어요. 앞치마처럼 두르고 일하는 그 치마가 전쟁에서도 무기가 된 거예요. 이 사실을 알고 성벽 위에서 한강 전경을 바라보면 완전히 다른 감동이 와요. 너무 치마가 역사가 됐다는 게 좋았습니다.',
    secret_tip:'행주치마 어원 = 행주대첩 부녀자 치마로 돌 나르기 — 치마가 전쟁 무기가 된 역사. 이 사실 알면 성벽 위 감동 달라짐. 한강 전망이 아름다운 성벽 위 산책',
    filming_guide:'행주산성 성벽 위 한강 전망. 행주치마 어원 설명판 클로즈업. 권율 장군 동상.',
    broll_ideas:['성벽 위 한강 전망','행주치마 어원 설명판','권율 장군 동상','행주산성 성벽 전체','한강과 산성 파노라마'],
    hooks:['행주치마 어원이 여기예요','부녀자들이 치마로 돌 날랐어요','치마가 역사가 된 곳이에요','이 사실 알면 성벽 감동이 달라요','고양 행주산성 꿀팁'],
    thumbnails:['성벽 위 한강 전망','행주치마 설명판','권율 장군 동상','행주산성 성벽','한강 파노라마'],
    captions:{youtube:'행주산성 — 행주치마 어원이 여기예요 ⚔️\n\n부녀자들이 치마로 돌 날랐어요!\n치마가 역사가 된 장소\n\n📍 경기도 고양시 행주산성\n⚔️ 임진왜란 3대 대첩 행주대첩 현장\n\n#행주산성 #고양 #경기여행 #행주치마어원 #임진왜란',instagram:'행주산성 행주치마 어원이 여기예요 ⚔️\n\n부녀자 치마로 돌 나른 전쟁 ✨\n치마가 역사가 된 장소\n\n📍 경기 고양 행주산성\n\n#행주산성 #고양여행 #경기 #행주치마 #GemKorea',tiktok:'행주산성 꿀팁 ⚔️ 행주치마 어원이 여기예요! 부녀자들이 치마로 돌 날라 군사 지원 // 치마가 역사가 된 그 전쟁터 임진왜란 3대 대첩 #행주산성 #고양여행 #경기'},
    hashtags:{korean:['#한국여행','#경기여행','#고양여행','#임진왜란','#GemKorea'],place_specific:['#행주산성','#행주치마어원','#부녀자돌나르기','#임진왜란3대대첩']}
  },
  {
    experience_id:'EX-JB-FUD-003', experience_name:'남원 추어탕 골목 투어', category_sub:'지역 먹거리', region:'전라북도',
    script_30s:'오늘은 남원 추어탕 골목에 왔어요. 전국 추어탕 원조예요. 근데 아무도 안 알려주는 게 있어요 — 남원 추어탕은 미꾸라지를 통째로 갈아요. 살만 쓰는 게 아니에요. 뼈째 갈아서 영양이 다 들어가요. 그게 달라요. 너무 통째가 더 맛있다는 게 좋았습니다.',
    script_60s:'오늘은 전북 남원 추어탕 골목에 왔어요. 전국 추어탕의 원조이자 전통을 지키는 골목이에요. 30년 이상 된 노포들이 이 골목에 모여있어요. 근데 아무도 안 알려주는 꿀팁 하나 — 남원 추어탕의 비밀이 갈아 만드는 방식이에요. 다른 지역 추어탕은 미꾸라지 살만 사용하거나 통째로 넣기도 하는데, 남원 추어탕은 미꾸라지를 뼈째 통째로 갈아서 국물에 녹여요. 그래서 국물이 뿌옇고 진해요. 미꾸라지 뼈의 칼슘과 모든 영양이 국물 속에 녹아있어요. 그 국물 맛이 다른 지역 추어탕과 완전히 달라요. 들깨·된장·수제비가 더해져서 구수한 풍미가 깊어요. 너무 통째 갈아 넣는 방식이 남원 추어탕을 원조로 만든 비밀이라서 좋았습니다.',
    secret_tip:'남원 추어탕 = 미꾸라지 뼈째 통째 갈기 — 뼈 칼슘+모든 영양이 국물에 녹음. 국물이 뿌옇고 진한 이유. 다른 지역과 완전히 다른 맛. 남원 광한루원 세트 코스',
    filming_guide:'추어탕 뿌연 진한 국물 클로즈업. 미꾸라지 통째 갈기 과정 설명. 남원 추어탕 골목 노포들.',
    broll_ideas:['추어탕 뿌연 진한 국물','미꾸라지 통째 갈기 설명','남원 추어탕 골목 노포','추어탕 들깨 수제비 클로즈업','광한루원 배경'],
    hooks:['남원 추어탕은 뼈째 통째 갈아요','그래서 국물이 이렇게 진해요','뼈 칼슘이 다 국물에 녹아있어요','다른 지역 추어탕이랑 달라요','남원 추어탕 꿀팁'],
    thumbnails:['추어탕 진한 국물','통째 갈기 설명','골목 노포들','들깨 수제비 클로즈업','광한루원 배경'],
    captions:{youtube:'남원 추어탕 — 미꾸라지를 뼈째 통째 갈아요 🍲\n\n뼈 칼슘이 국물에 다 녹아있어요!\n국물이 뿌옇고 진한 이유\n\n📍 전북 남원시 추어탕 골목\n🍲 30년 이상 노포들 밀집 골목\n\n#남원추어탕 #남원 #전북여행 #추어탕원조 #통째갈기',instagram:'남원 추어탕 뼈째 통째 갈아요 🍲\n\n뼈 칼슘이 국물에 다 녹아있어요 ✨\n다른 지역 추어탕이랑 완전 달라요\n\n📍 전북 남원 추어탕 골목\n\n#남원추어탕 #남원여행 #전북 #추어탕 #GemKorea',tiktok:'남원 추어탕 꿀팁 🍲 미꾸라지를 뼈째 통째 갈아요! 뼈 칼슘이 국물에 다 녹아서 이렇게 진해요 // 다른 지역 추어탕이랑 완전 다른 맛 #남원추어탕 #남원여행 #전북'},
    hashtags:{korean:['#한국여행','#전북여행','#남원여행','#추어탕','#GemKorea'],place_specific:['#남원추어탕','#뼈째통째갈기','#추어탕원조','#뿌연진한국물']}
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
