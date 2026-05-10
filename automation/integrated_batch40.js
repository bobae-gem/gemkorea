const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const now = new Date().toISOString().slice(0,19);

const newExps = [
  {experience_id:'EX-GG-NAT-073',name:'연천 한탄강 지질 트레킹',category_main:'문화/체험',category_sub:'자연체험',region_main:'GG',region_sub:'경기도 연천군',address:'경기도 연천군 전곡읍 한탄강로 일대',lat:38.0047,lng:127.0608,price:'무료',duration:'2~3시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'유네스코 세계지질공원 한탄강에서 주상절리·현무암 협곡을 탐방하는 지질 트레킹이다. 한탄강 지질 트레일을 따라 화산 용암이 굳어 형성된 주상절리 협곡과 폭포를 직접 걸으며 탐방한다.',source_urls:['https://www.hantangeopark.kr/'],data_confidence:'high',tags:['한탄강지질트레킹','연천','경기','주상절리','현무암협곡','유네스코세계지질공원','화산지형'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (무료)',phone:'031-839-2061'},
  {experience_id:'EX-JN-CUL-047',name:'나주 금성관 역사 투어',category_main:'문화/체험',category_sub:'역사 체험',region_main:'JN',region_sub:'전라남도 나주시',address:'전라남도 나주시 금성관길 8 나주목 관아',lat:35.0264,lng:126.7111,price:'무료',duration:'1~2시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'조선 시대 전라남도 도청 역할을 한 나주목 관아와 금성관을 탐방하는 역사 체험이다. 광주보다 나주가 더 큰 도시였던 조선 시대 역사를 배우는 체험으로 나주 읍성 곳곳에 관아 유적이 남아있다.',source_urls:['https://www.naju.go.kr/'],data_confidence:'high',tags:['나주금성관','나주','전남','나주목관아','조선나주','읍성','전남도청조선'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00 (무료)',phone:'061-330-1261'},
  {experience_id:'EX-GN-CUL-071',name:'합천 해인사 팔만대장경 참배',category_main:'문화/체험',category_sub:'역사 체험',region_main:'GN',region_sub:'경상남도 합천군',address:'경상남도 합천군 가야면 해인사길 122',lat:35.7978,lng:128.0025,price:'성인 3,000원',duration:'2~3시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'팔만대장경이 보관된 경남 합천 해인사를 참배하는 역사 체험이다. 세계 최대 목판 인쇄물 팔만대장경이 800년 동안 보존된 해인사 장경판전이 유네스코 세계문화유산으로 등재된 성지다.',source_urls:['https://www.haeinsa.or.kr/'],data_confidence:'high',tags:['해인사팔만대장경','합천','경남','팔만대장경','해인사','장경판전','유네스코'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'08:30~18:00',phone:'055-934-3000'},
  {experience_id:'EX-GW-NAT-073',name:'강릉 솔향수목원 힐링',category_main:'문화/체험',category_sub:'자연체험',region_main:'GW',region_sub:'강원특별자치도 강릉시',address:'강원특별자치도 강릉시 구정면 수목원길 156',lat:37.6583,lng:128.9256,price:'무료',duration:'1~2시간',reservation_required:false,target_user:['개인','커플','가족'],nearby_places:[],related_heritage_ids:[],short_description:'강원도 강릉 솔향수목원에서 소나무 숲 힐링 트레킹을 즐기는 자연 체험이다. 강릉 소나무(금강송)의 명산지 강릉에 조성된 수목원으로 금강송·곰솔·해송 등 다양한 소나무 숲을 무료로 즐길 수 있다.',source_urls:['https://www.solhyang.go.kr/'],data_confidence:'high',tags:['강릉솔향수목원','강릉','강원','소나무','금강송','수목원','힐링'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00 (무료)',phone:'033-660-2322'},
  {experience_id:'EX-JB-CUL-066',name:'고창 선운산 도솔암 트레킹',category_main:'문화/체험',category_sub:'역사 체험',region_main:'JB',region_sub:'전라북도 고창군',address:'전라북도 고창군 아산면 선운사로 250 선운산 도솔암',lat:35.5069,lng:126.6072,price:'성인 3,000원',duration:'2~3시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'전북 고창 선운산 도솔암까지 트레킹하는 역사·자연 체험이다. 절벽 위에 위치한 도솔암에는 국내 최대 마애불 중 하나인 도솔암 마애불이 새겨져 있어 트레킹과 역사 체험을 동시에 즐긴다.',source_urls:['https://www.seonunsa.org/'],data_confidence:'high',tags:['선운산도솔암','고창','전북','선운산','도솔암','마애불','트레킹'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중',phone:'063-561-1422'},
  {experience_id:'EX-GG-NAT-074',name:'가평 아침고요 수목원',category_main:'문화/체험',category_sub:'자연체험',region_main:'GG',region_sub:'경기도 가평군',address:'경기도 가평군 상면 수목원로 432',lat:37.7806,lng:127.5347,price:'성인 11,000원',duration:'2~3시간',reservation_required:false,target_user:['커플','가족','개인'],nearby_places:[],related_heritage_ids:[],short_description:'한국 정원 미학을 담은 경기 가평 아침고요수목원을 탐방하는 체험이다. 사계절 테마 정원과 야간 조명 축제인 오색별빛정원전이 유명하며 한국 최초 개인 수목원으로 꽃과 자연을 즐기는 명소다.',source_urls:['https://www.morningcalm.co.kr/'],data_confidence:'high',tags:['아침고요수목원','가평','경기','한국정원','야간조명','계절정원','오색별빛'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'08:30~20:00 (시즌 상이)',phone:'1544-6703'},
  {experience_id:'EX-JN-NAT-088',name:'무안 황토 갯벌 체험',category_main:'문화/체험',category_sub:'자연체험',region_main:'JN',region_sub:'전라남도 무안군',address:'전라남도 무안군 현경면 황토갯벌로 일대',lat:34.9361,lng:126.4644,price:'무료~체험비 상이',duration:'2시간',reservation_required:false,target_user:['가족','어린이'],nearby_places:[],related_heritage_ids:[],short_description:'전남 무안 황토 갯벌에서 맨손 조개잡이와 갯벌 생태 체험을 즐기는 프로그램이다. 무안 황토 갯벌은 영양분이 풍부한 황토가 섞인 갯벌로 낙지·조개 등 해산물이 풍부한 갯벌 체험지다.',source_urls:['https://www.muan.go.kr/'],data_confidence:'high',tags:['무안황토갯벌','무안','전남','갯벌체험','황토갯벌','낙지','조개잡이'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'seasonal',operating_hours:'봄~가을 썰물 시간',phone:'061-450-5116'},
  {experience_id:'EX-GN-NAT-083',name:'창녕 우포늪 탐조',category_main:'문화/체험',category_sub:'자연체험',region_main:'GN',region_sub:'경상남도 창녕군',address:'경상남도 창녕군 유어면 우포늪길 220',lat:35.5508,lng:128.5008,price:'무료',duration:'2~3시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'국내 최대 자연 내륙 습지 경남 창녕 우포늪에서 탐조 체험을 즐기는 프로그램이다. 1억 4천만 년 전 형성된 우포늪에서 저어새·노랑부리저어새·흰꼬리수리 등 희귀 조류를 관찰하는 생태 체험이다.',source_urls:['https://www.upo.or.kr/'],data_confidence:'high',tags:['우포늪탐조','창녕','경남','우포늪','자연습지','탐조','저어새'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (무료)',phone:'055-530-1583'},
  {experience_id:'EX-CB-NAT-045',name:'보은 속리산 법주사 참배',category_main:'문화/체험',category_sub:'역사 체험',region_main:'CB',region_sub:'충청북도 보은군',address:'충청북도 보은군 속리산면 법주사로 84',lat:36.5394,lng:127.8003,price:'성인 5,000원',duration:'2~3시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'유네스코 세계문화유산 산사 충북 속리산 법주사를 참배하는 역사 체험이다. 553년 창건된 천년 고찰로 한국 최대 금동미륵대불과 팔상전(국보)이 있는 법주사에서 산사의 고요함을 즐긴다.',source_urls:['https://www.beopjusa.org/'],data_confidence:'high',tags:['법주사','보은','충북','속리산','금동미륵대불','팔상전','유네스코산사'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'06:00~18:00',phone:'043-543-3615'},
  {experience_id:'EX-GW-CUL-069',name:'원주 뮤지엄 산 건축 투어',category_main:'문화/체험',category_sub:'문화투어',region_main:'GW',region_sub:'강원특별자치도 원주시',address:'강원특별자치도 원주시 지정면 오크밸리2길 260',lat:37.4019,lng:127.9650,price:'성인 22,000원',duration:'2~3시간',reservation_required:false,target_user:['커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'세계적 건축가 안도 다다오가 설계한 원주 뮤지엄 산(Museum SAN)을 탐방하는 건축·예술 체험이다. 자연과 건축이 어우러진 노출 콘크리트 건물과 제임스 터렐의 빛 설치 작품을 감상한다.',source_urls:['https://www.museumsan.org/'],data_confidence:'high',tags:['뮤지엄산','원주','강원','안도다다오','노출콘크리트','제임스터렐','건축여행'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'10:00~18:00 (월 휴관)',phone:'033-730-9000'},
  {experience_id:'EX-JN-NAT-089',name:'곡성 섬진강 레일바이크',category_main:'문화/체험',category_sub:'어드벤처/레포츠',region_main:'JN',region_sub:'전라북도 곡성군',address:'전라북도 곡성군 오곡면 기차마을로 232',lat:35.2942,lng:127.3092,price:'2인 기준 20,000원',duration:'1시간',reservation_required:true,target_user:['커플','가족'],nearby_places:[],related_heritage_ids:[],short_description:'전북 곡성 섬진강변을 달리는 레일바이크를 타는 어드벤처 체험이다. 폐철도 구간을 활용한 곡성 레일바이크는 섬진강을 옆에 끼고 달리며 매화꽃·벚꽃 시즌에 특히 아름다운 봄 코스다.',source_urls:['https://www.gokseong.go.kr/'],data_confidence:'high',tags:['곡성레일바이크','곡성','전북','섬진강','레일바이크','매화','벚꽃'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~17:00 (예약 필수)',phone:'061-363-9900'},
  {experience_id:'EX-GG-CUL-075',name:'포천 산정호수 드라이브',category_main:'문화/체험',category_sub:'자연체험',region_main:'GG',region_sub:'경기도 포천시',address:'경기도 포천시 영북면 산정리 산정호수',lat:38.0744,lng:127.2408,price:'무료',duration:'1~2시간',reservation_required:false,target_user:['커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'경기도 포천 산정호수를 둘러싸고 달리는 드라이브 코스 체험이다. 수도권에서 1시간 30분 거리 포천 산정호수는 명성산 자락에 위치한 산악 호수로 가을 억새 시즌과 겨울 설경이 아름답다.',source_urls:['https://www.pocheon.go.kr/'],data_confidence:'high',tags:['포천산정호수','포천','경기','산정호수','드라이브','명성산억새','가을'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (무료)',phone:'031-538-3030'}
];

const newShorts = [
  {
    experience_id:'EX-JB-NAT-062', experience_name:'전주 한옥마을 한지 뜨기', category_sub:'전통공예', region:'전라북도',
    script_30s:'오늘은 전주 한옥마을에서 한지 뜨기를 했어요. 근데 아무도 안 알려주는 게 있어요 — 한지가 닥나무 껍질로 만드는데 한 번 만들면 천 년이 가요. 유럽 종이는 수백 년이면 산화되지만 한지는 천 년을 버텨요. 너무 종이가 이렇게 다를 수 있다는 게 좋았습니다.',
    script_60s:'오늘은 전주 한옥마을에서 전통 한지 뜨기 체험을 했어요. 전주는 조선 시대 최고급 한지 산지로 임금에게 올리는 진상품이 전주 한지였어요. 근데 아무도 안 알려주는 꿀팁 하나 — 한지가 얼마나 오래가는지 알아요? 한지는 닥나무 섬유로 만들어요. 닥나무 섬유가 굉장히 질겨서 천 년 이상 보존이 가능해요. 실제로 통일신라시대 한지가 지금도 남아있어요. 반면 유럽 종이는 산성 성질 때문에 수백 년이면 산화되고 바스러져요. 그래서 유럽 박물관에서 오래된 한국 문서 복원할 때 한지를 사용해요. 루브르 박물관도 소장품 복원에 한지를 써요. 한지가 세계 최고 복원 재료예요. 너무 종이가 이렇게 다를 수 있다는 게 좋았습니다.',
    secret_tip:'한지 = 천 년 이상 보존 가능 — 닥나무 섬유 질겨서 유럽 종이와 차원 달라. 통일신라 한지 현존. 루브르 박물관 소장품 복원에 한지 사용. 세계 최고 복원 재료',
    filming_guide:'닥나무 섬유 물에 풀기 클로즈업. 한지 뜨기 발틀 올리는 손. 완성된 한지 투명하게 비치는 장면.',
    broll_ideas:['닥나무 섬유 물에 풀기 클로즈업','한지 뜨기 발틀 올리기','완성된 한지 투명하게 비침','전주 한옥마을 배경','한지 작품 완성'],
    hooks:['한지가 천 년이 가요','루브르 박물관도 한지 써요','유럽 종이는 산화돼요','통일신라 한지가 아직 있어요','전주 한지 뜨기 꿀팁'],
    thumbnails:['닥나무 섬유 클로즈업','발틀 올리기','완성 한지 투명','한옥마을 배경','한지 작품'],
    captions:{youtube:'전주 한지 뜨기 — 천 년이 가는 종이예요 📜\n\n루브르 박물관도 한지로 복원!\n유럽 종이는 수백 년이면 산화\n\n📍 전북 전주시 완산구 전통문화관길 35\n📜 조선 최고급 진상 한지 산지\n\n#전주한지뜨기 #전주한옥마을 #전주 #전북여행 #한지천년보존',instagram:'전주 한지 뜨기 천 년이 가는 종이예요 📜\n\n루브르 박물관도 복원에 한지 써요 ✨\n유럽 종이는 수백 년이면 산화\n\n📍 전북 전주 한옥마을\n\n#전주한지뜨기 #전주한옥마을 #전주여행 #전북 #GemKorea',tiktok:'전주 한지 뜨기 꿀팁 📜 한지가 천 년 이상 가요! 루브르 박물관도 소장품 복원에 한지 사용 // 유럽 종이는 수백 년이면 산화돼요 #전주한지뜨기 #전주한옥마을 #전주여행'},
    hashtags:{korean:['#한국여행','#전북여행','#전주여행','#한지체험','#GemKorea'],place_specific:['#전주한지뜨기','#한지천년보존','#루브르한지복원','#닥나무섬유']}
  },
  {
    experience_id:'EX-GN-NAT-080', experience_name:'양산 통도사 산사 체험', category_sub:'역사 체험', region:'경상남도',
    script_30s:'오늘은 양산 통도사에 왔어요. 불보사찰이에요. 근데 아무도 안 알려주는 게 있어요 — 통도사가 대웅전에 불상이 없어요. 불상 대신 빈 법단에 창문이 있고 창문 너머로 적멸보궁이 보여요. 부처님 사리가 있어서 불상이 필요 없대요. 너무 사리가 불상 역할이라는 게 좋았습니다.',
    script_60s:'오늘은 경남 양산 통도사를 참배했어요. 한국 3대 사찰이자 불보사찰이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 통도사 대웅전의 특별한 비밀이 있어요. 한국 모든 사찰 대웅전에는 불상이 있어요. 그런데 통도사 대웅전에는 불상이 없어요. 법단이 비어있어요. 대신 법단 뒤 창문이 열려있고 창문 너머로 적멸보궁이 보여요. 왜일까요? 통도사 뒤 금강계단에 신라 자장율사가 당나라에서 모셔온 석가모니 진신사리가 모셔져 있어요. 부처님 사리 자체가 부처님이기 때문에 불상이 필요 없는 거예요. 창문을 통해 사리탑을 바라보는 것이 곧 부처님을 뵙는 것이에요. 이것이 통도사를 불보사찰이라고 부르는 이유예요. 너무 사리가 불상 역할을 한다는 게 좋았습니다.',
    secret_tip:'통도사 대웅전 = 불상 없음 — 석가모니 진신사리가 금강계단에 모셔져 있어 불상 불필요. 법단 창문 너머 적멸보궁 바라봄이 곧 부처님 뵙는 것. 불보사찰의 이유',
    filming_guide:'통도사 대웅전 빈 법단 클로즈업. 법단 창문 너머 적멸보궁. 통도사 전경.',
    broll_ideas:['대웅전 빈 법단 클로즈업','창문 너머 적멸보궁','통도사 전경','금강계단 사리탑','가을 단풍 통도사'],
    hooks:['통도사 대웅전에 불상이 없어요','창문 너머 적멸보궁이 보여요','사리가 불상 역할을 해요','불보사찰의 이유가 여기 있어요','양산 통도사 꿀팁'],
    thumbnails:['대웅전 빈 법단','창문 너머 적멸보궁','통도사 전경','금강계단','단풍 통도사'],
    captions:{youtube:'양산 통도사 — 대웅전에 불상이 없어요 🏛️\n\n석가모니 진신사리가 불상 대신!\n창문 너머 적멸보궁이 보여요\n\n📍 경남 양산시 하북면 통도사로 108\n🏛️ 한국 3대 사찰 불보사찰\n\n#양산통도사 #통도사 #경남여행 #불보사찰 #진신사리',instagram:'양산 통도사 대웅전에 불상이 없어요 🏛️\n\n석가모니 진신사리가 불상 역할 ✨\n창문 너머 적멸보궁 바라봄이 곧 부처님 뵙는 것\n\n📍 경남 양산 통도사\n\n#양산통도사 #통도사 #경남여행 #불보사찰 #GemKorea',tiktok:'양산 통도사 꿀팁 🏛️ 대웅전에 불상이 없어요! 석가모니 진신사리가 금강계단에 있어서 불상 불필요 // 창문 너머 적멸보궁이 곧 부처님이에요 #양산통도사 #통도사여행 #경남'},
    hashtags:{korean:['#한국여행','#경남여행','#양산여행','#통도사','#GemKorea'],place_specific:['#양산통도사대웅전불상없음','#진신사리불보사찰','#법단창문적멸보궁','#통도사불보사찰이유']}
  },
  {
    experience_id:'EX-GN-CUL-071', experience_name:'합천 해인사 팔만대장경 참배', category_sub:'역사 체험', region:'경상남도',
    script_30s:'오늘은 합천 해인사에 왔어요. 팔만대장경이 있어요. 근데 아무도 안 알려주는 게 있어요 — 팔만대장경 나무가 800년 동안 썩지 않은 비밀이 있어요. 바닷물에 3년 담갔다가 소금에 절였다가 그늘에 말리는 3단계 처리예요. 그 처리법이 비결이에요. 너무 800년 전 기술이 이렇게 과학적이라는 게 좋았습니다.',
    script_60s:'오늘은 경남 합천 해인사에서 팔만대장경을 참배했어요. 1236년부터 16년간 제작된 세계 최대 목판 인쇄물이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 팔만대장경 나무가 800년 넘게 썩지 않은 과학적 이유가 있어요. 고려 시대 기술자들이 경판 나무를 처리하는 특별한 방법을 썼어요. 1단계는 바닷물에 3년을 담가두는 거예요. 소금물이 나무 속 세균과 곤충을 죽여요. 2단계는 소금물에서 꺼낸 나무를 소금에 절여 다시 보관해요. 3단계는 그늘에서 여러 해 말려 수분을 완전히 제거해요. 이 3단계 처리로 목판이 썩거나 갈라지거나 벌레 먹지 않게 된 거예요. 현대 과학으로 분석해도 이 처리 방법이 목재 보존의 최고 수준이에요. 너무 800년 전 기술이 이렇게 과학적이라는 게 좋았습니다.',
    secret_tip:'팔만대장경 목판 불부패 비결 = 3단계 처리 — 1)바닷물 3년 담금(세균 살균) 2)소금 절임 3)그늘 건조. 현대 과학으로도 최고 목재 보존법. 해인사 장경판전 자연 통풍 설계도 핵심',
    filming_guide:'해인사 장경판전 목판 클로즈업. 장경판전 창문 통풍 구조 설명. 해인사 전경.',
    broll_ideas:['장경판전 목판 클로즈업','창문 통풍 구조','해인사 전경','팔만대장경 자료 사진','가야산 배경'],
    hooks:['목판이 800년 동안 썩지 않아요','바닷물 3년 담금이 비결이에요','소금 절임+그늘 건조 3단계예요','현대 과학도 인정하는 기술이에요','합천 해인사 팔만대장경 꿀팁'],
    thumbnails:['장경판전 목판 클로즈업','창문 통풍 구조','해인사 전경','팔만대장경 자료','가야산 배경'],
    captions:{youtube:'합천 해인사 팔만대장경 — 800년 넘게 썩지 않는 비결 📚\n\n바닷물 3년+소금 절임+그늘 건조!\n3단계 처리가 현대 과학도 인정해요\n\n📍 경남 합천군 가야면 해인사길 122\n📚 유네스코 세계문화유산 장경판전\n\n#합천해인사 #팔만대장경 #합천 #경남여행 #장경판전',instagram:'합천 해인사 팔만대장경 800년 썩지 않는 비결 📚\n\n바닷물 3년+소금 절임+그늘 건조 3단계 ✨\n현대 과학도 인정하는 목재 보존법\n\n📍 경남 합천 해인사\n\n#합천해인사 #팔만대장경 #합천여행 #경남 #GemKorea',tiktok:'합천 해인사 팔만대장경 꿀팁 📚 800년 넘게 썩지 않는 이유가 있어요! 바닷물 3년+소금 절임+그늘 건조 3단계 // 현대 과학도 인정하는 최고 목재 보존법 #합천해인사 #팔만대장경 #합천여행'},
    hashtags:{korean:['#한국여행','#경남여행','#합천여행','#팔만대장경','#GemKorea'],place_specific:['#합천해인사팔만대장경','#목판불부패3단계','#바닷물3년소금절임그늘건조','#현대과학인정목재보존법']}
  },
  {
    experience_id:'EX-GW-NAT-071', experience_name:'인제 자작나무 숲 트레킹', category_sub:'자연체험', region:'강원특별자치도',
    script_30s:'오늘은 인제 자작나무 숲에 왔어요. 근데 아무도 안 알려주는 게 있어요 — 자작나무 껍질이 불쏘시개예요. 기름 성분이 있어서 젖어도 불이 붙어요. 북유럽 바이킹도 자작나무로 배를 만들었어요. 너무 나무 껍질이 이렇게 실용적이라는 게 좋았습니다.',
    script_60s:'오늘은 강원도 인제 원대리 자작나무 숲에서 트레킹을 했어요. 700만 그루 자작나무가 뻗은 국내 최대 자작나무 숲이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 자작나무의 신기한 특징이 있어요. 자작나무 껍질은 기름 성분이 풍부해서 젖어 있어도 불이 잘 붙어요. 그래서 산골 사람들이 예부터 자작나무 껍질을 불쏘시개로 써왔어요. 자작나무 껍질 이름 자작자작이 불 붙는 소리에서 왔다는 설도 있어요. 그리고 자작나무 껍질에는 방수 성분이 있어서 수천 년 전 사람들이 이걸로 그릇·바구니·편지를 썼어요. 북유럽 바이킹은 자작나무로 배를 만들었어요. 백두산 지역 고대 유물에서 자작나무 껍질에 쓴 편지가 발견되기도 했어요. 자작나무가 단순한 나무가 아니라 문명의 재료예요. 너무 나무 껍질이 이렇게 실용적이라는 게 좋았습니다.',
    secret_tip:'자작나무 껍질 = 기름 성분 풍부 — 젖어도 불이 붙어 불쏘시개로 활용. 방수 성분 있어 그릇·편지 재료. 바이킹 배 재료. 백두산 유물에서 자작나무 편지 발견. 자작자작 이름 기원',
    filming_guide:'자작나무 흰 껍질 클로즈업. 겨울 설경 자작나무 숲. 껍질 벗겨지는 층 클로즈업.',
    broll_ideas:['자작나무 흰 껍질 클로즈업','겨울 설경 자작나무 숲','껍질 층 클로즈업','700만 그루 숲 전경','눈 쌓인 자작나무'],
    hooks:['자작나무 껍질이 불쏘시개예요','젖어도 불이 붙어요','바이킹이 이걸로 배를 만들었어요','자작자작 이름이 여기서 왔대요','인제 자작나무 숲 꿀팁'],
    thumbnails:['자작나무 흰 껍질 클로즈업','겨울 설경 숲','껍질 층 클로즈업','700만 그루 전경','눈 쌓인 자작'],
    captions:{youtube:'인제 자작나무 숲 — 껍질이 불쏘시개예요 🌲\n\n기름 성분이라 젖어도 불이 붙어요!\n바이킹도 이걸로 배를 만들었어요\n\n📍 강원도 인제군 인제읍 원대리 자작나무 숲\n🌲 국내 최대 700만 그루 자작나무 숲\n\n#인제자작나무숲 #인제 #강원여행 #자작나무껍질 #불쏘시개',instagram:'인제 자작나무 숲 껍질이 불쏘시개예요 🌲\n\n기름 성분이라 젖어도 불이 붙어요 ✨\n바이킹이 이걸로 배를 만들었어요\n\n📍 강원 인제 원대리 자작나무 숲\n\n#인제자작나무숲 #인제여행 #강원 #자작나무 #GemKorea',tiktok:'인제 자작나무 꿀팁 🌲 껍질이 기름 성분이라 젖어도 불이 붙어요! 바이킹도 이걸로 배를 만들었어요 // 자작자작 이름도 불 붙는 소리에서 왔대요 #인제자작나무숲 #인제여행 #강원'},
    hashtags:{korean:['#한국여행','#강원여행','#인제여행','#자작나무','#GemKorea'],place_specific:['#인제자작나무숲껍질불쏘시개','#자작나무기름성분','#바이킹자작나무배','#자작자작이름기원']}
  },
  {
    experience_id:'EX-GW-CUL-069', experience_name:'원주 뮤지엄 산 건축 투어', category_sub:'문화투어', region:'강원특별자치도',
    script_30s:'오늘은 원주 뮤지엄 산에 왔어요. 안도 다다오 건축이에요. 근데 아무도 안 알려주는 게 있어요 — 안도 다다오가 노출 콘크리트를 고집하는 이유가 있어요. 재료를 숨기지 않아서 건축이 솔직하대요. 너무 솔직함이 이렇게 아름답다는 게 좋았습니다.',
    script_60s:'오늘은 강원도 원주 뮤지엄 산을 탐방했어요. 세계적 건축가 안도 다다오가 설계한 자연+건축+예술 공간이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 안도 다다오 건축의 철학이 있어요. 안도 다다오는 노출 콘크리트로 유명한 건축가예요. 노출 콘크리트란 콘크리트에 타일이나 페인트를 칠하지 않고 콘크리트 자체를 그대로 드러내는 방식이에요. 안도 다다오는 재료를 숨기지 않는 것이 건축의 솔직함이라고 말해요. 그리고 자연광과 콘크리트의 관계를 극도로 중시해요. 뮤지엄 산에서 오전과 오후 자연광이 노출 콘크리트 벽에 다르게 반사되는 것을 보면 이 철학이 이해돼요. 제임스 터렐의 빛 설치 작품도 이 맥락에서 보면 더 깊이 이해할 수 있어요. 오후 2~4시 방문이 빛과 건축이 가장 아름다운 시간이에요. 너무 솔직함이 이렇게 아름다울 수 있다는 게 좋았습니다.',
    secret_tip:'뮤지엄 산 최적 방문 = 오후 2~4시 — 자연광과 노출 콘크리트 조화 최고. 안도 다다오 철학: 재료 숨기지 않는 솔직함. 제임스 터렐 빛 작품은 이 철학 연장선. 오전보다 오후 방문 추천',
    filming_guide:'노출 콘크리트 벽에 자연광 반사 장면. 제임스 터렐 빛 설치 작품. 뮤지엄 산 외관 전경.',
    broll_ideas:['콘크리트 벽 자연광 반사','제임스 터렐 빛 작품','뮤지엄 산 외관 전경','오후 빛과 건축 조화','건물 내부 좁은 통로'],
    hooks:['안도 다다오가 콘크리트를 고집하는 이유가 있어요','재료를 숨기지 않는 솔직함이에요','오후 2~4시가 빛이 최고예요','제임스 터렐 작품도 같은 철학이에요','원주 뮤지엄 산 꿀팁'],
    thumbnails:['콘크리트 자연광 반사','터렐 빛 작품','뮤지엄 산 외관','오후 빛 조화','건물 내부 통로'],
    captions:{youtube:'원주 뮤지엄 산 — 안도 다다오가 콘크리트를 고집하는 이유 🏛️\n\n재료를 숨기지 않는 솔직함!\n오후 2~4시 자연광이 최고예요\n\n📍 강원도 원주시 지정면 오크밸리2길 260\n🏛️ 안도 다다오+제임스 터렐 건축·예술\n\n#원주뮤지엄산 #뮤지엄산 #원주 #강원여행 #안도다다오',instagram:'원주 뮤지엄 산 안도 다다오가 콘크리트를 고집하는 이유 🏛️\n\n재료를 숨기지 않는 솔직함 ✨\n오후 2~4시 빛과 건축 조화 최고\n\n📍 강원 원주 뮤지엄 산\n\n#원주뮤지엄산 #뮤지엄산 #원주여행 #강원 #GemKorea',tiktok:'원주 뮤지엄 산 꿀팁 🏛️ 안도 다다오가 노출 콘크리트를 고집하는 이유가 있어요! 재료를 숨기지 않는 솔직함 // 오후 2~4시 자연광이 가장 아름다워요 #원주뮤지엄산 #뮤지엄산 #원주여행'},
    hashtags:{korean:['#한국여행','#강원여행','#원주여행','#뮤지엄산','#GemKorea'],place_specific:['#원주뮤지엄산안도다다오','#노출콘크리트솔직함','#오후2-4시자연광최고','#제임스터렐빛작품']}
  },
  {
    experience_id:'EX-CB-NAT-045', experience_name:'보은 속리산 법주사 참배', category_sub:'역사 체험', region:'충청북도',
    script_30s:'오늘은 속리산 법주사에 왔어요. 유네스코 세계문화유산이에요. 근데 아무도 안 알려주는 게 있어요 — 법주사 금동미륵대불이 한국 최대 금동 불상이에요. 무게가 160톤이에요. 160톤짜리 금동이 야외에 서 있어요. 너무 규모가 이렇게 압도적이라는 게 좋았습니다.',
    script_60s:'오늘은 충북 보은 속리산 법주사를 참배했어요. 유네스코 세계문화유산 산사로 553년 창건된 천년 고찰이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 법주사 금동미륵대불의 규모가 있어요. 법주사 금동미륵대불은 높이 33m, 무게 160톤이에요. 한국에서 가장 큰 금동 불상이에요. 160톤짜리 금동 구조물이 야외에 세워져 있다는 게 놀랍죠. 이 불상이 현재 모습은 1990년에 완성됐어요. 원래 신라 시대에 청동 미륵대불이 있었는데 임진왜란 때 왜군이 청동을 무기로 녹여 없어졌어요. 그 자리에 조선 말기 흙으로 만든 불상이 있다가 1990년 지금의 금동 불상이 완성됐어요. 33m 높이에서 아래를 내려다보는 미륵불의 시선이 압도적이에요. 법주사에서 가장 먼저 만나는 존재예요. 너무 규모가 이렇게 압도적이라는 게 좋았습니다.',
    secret_tip:'법주사 금동미륵대불 = 한국 최대 금동 불상 33m·160톤 — 원래 신라 청동 불상이 임진왜란 때 왜군에 무기로 녹여짐. 조선말 흙 불상 거쳐 1990년 지금 금동 불상 완성. 역사의 재건',
    filming_guide:'금동미륵대불 하이앵글 전체 샷. 33m 규모 사람 비교 클로즈업. 속리산 법주사 전경.',
    broll_ideas:['금동미륵대불 하이앵글','사람과 규모 비교','속리산 법주사 전경','팔상전 국보 건물','속리산 단풍 배경'],
    hooks:['한국 최대 금동 불상이에요','33m에 160톤이에요','임진왜란 때 녹여서 없어졌어요','1990년에 재건된 거예요','속리산 법주사 꿀팁'],
    thumbnails:['금동미륵대불 하이앵글','사람과 규모 비교','법주사 전경','팔상전 국보','속리산 단풍'],
    captions:{youtube:'속리산 법주사 — 한국 최대 금동 불상 33m·160톤 🏯\n\n임진왜란 때 왜군이 무기로 녹여 없어졌어요!\n1990년 재건된 금동미륵대불\n\n📍 충북 보은군 속리산면 법주사로 84\n🏯 유네스코 세계문화유산 산사\n\n#속리산법주사 #법주사 #보은 #충북여행 #금동미륵대불',instagram:'속리산 법주사 한국 최대 금동 불상 33m·160톤 🏯\n\n임진왜란 때 왜군이 무기로 녹여 없어짐 ✨\n1990년 재건한 금동미륵대불\n\n📍 충북 보은 속리산 법주사\n\n#속리산법주사 #법주사 #보은여행 #충북 #GemKorea',tiktok:'속리산 법주사 꿀팁 🏯 한국 최대 금동 불상 33m·160톤이에요! 임진왜란 때 왜군이 청동 무기로 녹여 없어짐 // 1990년에 재건된 금동미륵대불 #속리산법주사 #법주사 #보은여행'},
    hashtags:{korean:['#한국여행','#충북여행','#보은여행','#법주사','#GemKorea'],place_specific:['#속리산법주사금동미륵대불','#한국최대금동불상33m160톤','#임진왜란무기녹임','#1990년재건']}
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
