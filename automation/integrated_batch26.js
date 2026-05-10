const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const now = new Date().toISOString().slice(0,19);

const newExps = [
  {experience_id:'EX-GW-NAT-041',name:'영월 한반도 지형 전망대',category_main:'문화/체험',category_sub:'자연체험',region_main:'GW',region_sub:'강원특별자치도 영월군',address:'강원특별자치도 영월군 한반도면 옹정리',lat:37.2097,lng:128.4592,price:'무료',duration:'1시간',reservation_required:false,target_user:['가족','커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'강원도 영월 서강이 한반도 모양으로 휘어 흐르는 특이한 지형을 전망대에서 내려다보는 체험이다. 하늘에서 내려다본 것 같은 한반도 지형이 실제로 존재하는 자연 지형으로 전 세계에서 유일하다.',source_urls:['https://www.yw.go.kr/'],data_confidence:'high',tags:['한반도지형','영월','강원','서강','전망대','자연지형','특이지형'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (무료)',phone:'033-372-8445'},
  {experience_id:'EX-JN-NAT-046',name:'순천 낙안읍성 봄꽃 투어',category_main:'문화/체험',category_sub:'자연체험',region_main:'JN',region_sub:'전라남도 순천시',address:'전라남도 순천시 낙안면 낙안읍성',lat:34.9825,lng:127.3875,price:'성인 4,000원',duration:'1~2시간',reservation_required:false,target_user:['개인','커플','가족'],nearby_places:[],related_heritage_ids:[],short_description:'낙안읍성 민속마을에서 봄꽃이 만발하는 시기를 즐기는 체험이다. 4~5월 초가집 담장 너머 매화·벚꽃·유채꽃이 조선 시대 성벽과 어우러지는 아름다운 풍경이 전남 봄 여행 최고 명소 중 하나다.',source_urls:['https://www.nagan.or.kr/'],data_confidence:'high',tags:['낙안읍성봄꽃','낙안','순천','전남','봄꽃','초가집','성벽'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'4~5월 봄꽃 시즌',phone:'061-749-8831'},
  {experience_id:'EX-GW-NAT-042',name:'강원 평창 두타연+방태산 계곡',category_main:'문화/체험',category_sub:'자연체험',region_main:'GW',region_sub:'강원특별자치도 인제군',address:'강원특별자치도 인제군 기린면 방태산휴양로 160',lat:38.0572,lng:128.2828,price:'무료 (입산 신청 필요)',duration:'2~3시간',reservation_required:true,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'민통선 인근 청정 두타연 폭포와 방태산 계곡을 탐방하는 체험이다. 민간인 출입 통제 덕분에 원시 자연이 보존된 계곡으로 1급수 열목어가 서식하며 여름 피서지로 최고의 환경을 갖추고 있다.',source_urls:['https://www.yanggu.go.kr/'],data_confidence:'high',tags:['두타연','방태산','인제','강원','열목어','민통선','청정계곡'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'사전 입산 신청 (5~10월)',phone:'033-463-2590'},
  {experience_id:'EX-GN-NAT-043',name:'거제 저도 비경 유람선 투어',category_main:'문화/체험',category_sub:'자연체험',region_main:'GN',region_sub:'경상남도 거제시',address:'경상남도 거제시 동부면 저도 선착장',lat:34.8728,lng:128.7483,price:'유람선 성인 12,000원~',duration:'1~2시간',reservation_required:false,target_user:['가족','커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'청정 바다 거제 저도를 유람선으로 탐방하는 체험이다. 청와대 대통령 별장이 있어 오랫동안 출입이 제한됐다가 최근 개방된 저도의 에메랄드빛 바다와 원시 자연 경관을 유람선으로 감상한다.',source_urls:['https://www.geoje.go.kr/'],data_confidence:'high',tags:['저도유람선','거제','경남','청와대별장섬','에메랄드바다','원시자연','개방'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~17:00',phone:'055-639-4172'},
  {experience_id:'EX-GG-NAT-047',name:'과천 서울대공원 캠핑+동물원',category_main:'문화/체험',category_sub:'캠핑/글램핑',region_main:'GG',region_sub:'경기도 과천시',address:'경기도 과천시 막계동 서울대공원 캠핑장',lat:37.4261,lng:126.9840,price:'캠핑 1박 50,000원~',duration:'1박 2일',reservation_required:true,target_user:['가족','어린이'],nearby_places:[],related_heritage_ids:[],short_description:'서울대공원 내 캠핑장에서 동물원과 함께 즐기는 가족 캠핑 체험이다. 캠핑 후 이른 아침 문 열기 전 동물원을 먼저 입장하는 특별 체험도 있으며 어린이에게 최고의 기억이 된다.',source_urls:['https://grandpark.seoul.go.kr/'],data_confidence:'high',tags:['서울대공원캠핑','과천','경기','동물원캠핑','가족캠핑','어린이체험','서울근교'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (예약 필수)',phone:'02-500-7335'},
  {experience_id:'EX-JN-NAT-047',name:'함평 엑스포공원 봄 나비 투어',category_main:'문화/체험',category_sub:'축제',region_main:'JN',region_sub:'전라남도 함평군',address:'전라남도 함평군 함평읍 엑스포공원길 6',lat:35.0667,lng:126.5167,price:'성인 5,000원',duration:'2~3시간',reservation_required:false,target_user:['가족','어린이'],nearby_places:[],related_heritage_ids:[],short_description:'매년 4~5월 전남 함평 나비대축제 기간에 엑스포 공원을 방문하는 체험이다. 수십만 마리의 나비가 방생되는 봄 축제로 나비 생태 관찰·나비 날리기·곤충 체험 등을 즐길 수 있다.',source_urls:['https://www.hampyeong.go.kr/'],data_confidence:'high',tags:['함평나비축제','함평','전남','나비','봄꽃','어린이체험','나비방생'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'매년 4~5월 (2주간)',phone:'061-320-2400'},
  {experience_id:'EX-GN-NAT-044',name:'합천 해인사 팔만대장경 산책',category_main:'문화/체험',category_sub:'역사 체험',region_main:'GN',region_sub:'경상남도 합천군',address:'경상남도 합천군 가야면 해인사길 122',lat:35.7900,lng:128.0992,price:'성인 3,000원',duration:'2~3시간',reservation_required:false,target_user:['가족','개인','외국인'],nearby_places:[],related_heritage_ids:[],short_description:'팔만대장경을 봉안한 해인사를 천천히 산책하며 경내 사계절 경관을 감상하는 체험이다. 가야산 계곡을 따라 오르는 홍류동 산책로와 해인사 경내가 어우러지는 자연+역사 힐링 코스다.',source_urls:['https://www.haeinsa.or.kr/'],data_confidence:'high',tags:['해인사','합천','경남','팔만대장경','가야산','홍류동','산책'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'08:30~18:00',phone:'055-934-3000'},
  {experience_id:'EX-GW-NAT-043',name:'횡성 안흥 가마솥 찐빵 투어',category_main:'문화/체험',category_sub:'지역 먹거리',region_main:'GW',region_sub:'강원특별자치도 횡성군',address:'강원특별자치도 횡성군 안흥면 안흥찐빵마을',lat:37.4378,lng:128.0453,price:'먹거리 별도',duration:'1시간',reservation_required:false,target_user:['가족','개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'강원도 횡성 안흥면 찐빵 마을에서 가마솥으로 찐 전통 찐빵을 맛보는 먹거리 체험이다. 70년 이상 가마솥 찜 방식을 유지하는 안흥 찐빵은 강원도 대표 향토 음식으로 서울~강릉 고속도로 인근 위치로 접근성도 좋다.',source_urls:['https://www.hsg.go.kr/'],data_confidence:'high',tags:['안흥찐빵','횡성','강원','가마솥찐빵','전통찐빵','향토음식','70년'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'07:00~21:00',phone:'033-340-2604'},
  {experience_id:'EX-GG-NAT-048',name:'인천 차이나타운 공화춘 탐방',category_main:'문화/체험',category_sub:'역사 체험',region_main:'GG',region_sub:'인천광역시 중구',address:'인천광역시 중구 차이나타운로 56',lat:37.4758,lng:126.6168,price:'무료',duration:'1~2시간',reservation_required:false,target_user:['가족','개인','외국인'],nearby_places:[],related_heritage_ids:[],short_description:'한국 짜장면의 발원지 인천 차이나타운 공화춘 자리에 세워진 짜장면 박물관을 탐방하는 역사 체험이다. 1905년 중국인 주방장이 처음 만든 한국식 짜장면의 역사부터 현재까지를 체험형 전시로 이해한다.',source_urls:['https://www.icjgss.or.kr/'],data_confidence:'high',tags:['공화춘','인천차이나타운','짜장면박물관','인천','중구','짜장면역사','1905년'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00 (월요일 휴관)',phone:'032-773-9988'},
  {experience_id:'EX-JN-NAT-048',name:'광주 이강주 전통 양조 체험',category_main:'문화/체험',category_sub:'발효/음식',region_main:'JN',region_sub:'전라남도 나주시',address:'전라남도 나주시 이강주 양조장',lat:35.0181,lng:126.7181,price:'1인 25,000원',duration:'2시간',reservation_required:true,target_user:['성인','개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'조선 시대 진상주 이강주를 직접 만드는 전통 양조 체험이다. 조선 시대 3대 명주 이강주는 배·생강·계피·꿀이 들어가는 전통 리큐르로 그 제조 과정을 배우고 시음하는 체험이다.',source_urls:['https://www.legangjoo.com/'],data_confidence:'high',tags:['이강주','나주','전남','전통술','조선3대명주','양조체험','리큐르'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'10:00~17:00 (예약 필수)',phone:'061-334-4641'},
  {experience_id:'EX-GN-NAT-045',name:'밀양 트리파크 짚트랙',category_main:'문화/체험',category_sub:'어드벤처/레포츠',region_main:'GN',region_sub:'경상남도 밀양시',address:'경상남도 밀양시 산내면 경전 숲 밀양트리파크',lat:35.4672,lng:128.9697,price:'1인 40,000원~',duration:'2~3시간',reservation_required:true,target_user:['개인','커플','청년'],nearby_places:[],related_heritage_ids:[],short_description:'밀양 얼음골 인근 트리파크에서 짚트랙·스카이워크·어드벤처 코스를 즐기는 체험이다. 울창한 소나무 숲 사이를 짚트랙으로 날아가며 밀양 얼음골·영남알프스 전경을 즐기는 짜릿한 어드벤처다.',source_urls:['https://www.miryang.go.kr/'],data_confidence:'high',tags:['밀양트리파크','밀양','경남','짚트랙','어드벤처','얼음골','영남알프스'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00',phone:'055-356-3388'},
  {experience_id:'EX-GW-NAT-044',name:'강원 홍천 은행나무 숲',category_main:'문화/체험',category_sub:'자연체험',region_main:'GW',region_sub:'강원특별자치도 홍천군',address:'강원특별자치도 홍천군 내촌면 와야리 은행나무숲',lat:37.7875,lng:128.1744,price:'무료',duration:'1시간',reservation_required:false,target_user:['커플','개인','가족'],nearby_places:[],related_heritage_ids:[],short_description:'강원도 홍천 내촌면에 은행나무 수천 그루가 황금빛으로 물드는 10월 절경을 감상하는 체험이다. 30년 전 한 개인이 심기 시작한 은행나무 숲이 이제 국내 최대 규모 은행나무 숲이 됐다.',source_urls:['https://www.hongcheon.go.kr/'],data_confidence:'high',tags:['홍천은행나무숲','홍천','강원','황금은행','가을단풍','10월','사유지'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'10월 황금 시즌 (연중 무료)',phone:'033-430-2704'}
];

const newShorts = [
  {
    experience_id:'EX-JN-MAK-001', experience_name:'담양 대나무 공예 체험', category_sub:'전통공예', region:'전라남도',
    script_30s:'오늘은 담양에서 대나무 공예를 했어요. 대나무의 고장이에요. 근데 아무도 안 알려주는 게 있어요 — 대나무는 자라는 속도가 하루에 최대 1m예요. 세상에서 가장 빨리 자라는 식물이에요. 그 빠른 성장이 대나무를 강하게 만들어요. 너무 빠름이 강함이라는 게 좋았습니다.',
    script_60s:'오늘은 전남 담양 죽물박물관 공방에서 대나무 공예 체험을 했어요. 대나무를 깎고 엮어 소쿠리·젓가락·소품을 만드는 체험이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 대나무에 대한 놀라운 사실이 있어요. 대나무는 하루에 최대 1m까지 자라는 세상에서 가장 빨리 자라는 식물이에요. 빠르게 자라기 때문에 내부에 실리카(규소) 성분이 빽빽하게 압축돼서 쌓여요. 이 압축 구조가 대나무를 강철보다 단위 강도가 높게 만들어요. 빠르게 자라는 게 오히려 강도를 높이는 역설이에요. 체험에서 대나무를 직접 깎아보면 칼날이 금방 무뎌질 정도로 단단한 걸 알게 돼요. 너무 빠름이 강함을 만드는 자연의 원리라서 좋았습니다.',
    secret_tip:'대나무 성장 속도 1일 최대 1m = 압축 실리카 구조 강도 높음 — 빠른 성장이 강도 만드는 역설. 체험 시 칼날 금방 무뎌짐으로 실감. 죽녹원+죽물박물관+대나무공예 담양 세트',
    filming_guide:'대나무 깎는 손 칼날 마찰 클로즈업. 완성 대나무 젓가락 광택. 담양 죽녹원 배경 공방 외경.',
    broll_ideas:['대나무 깎는 손 칼날 마찰','완성 젓가락 광택 클로즈업','담양 죽녹원 배경','대나무 재료 준비 장면','완성 소쿠리 들어올리기'],
    hooks:['대나무가 하루에 최대 1m 자라요','빠른 성장이 강도를 높이는 역설','강철보다 단위 강도가 높아요','대나무 공예 칼이 금방 무뎌져요','담양 대나무 공예 꿀팁'],
    thumbnails:['대나무 깎는 손 칼날','완성 젓가락 광택','죽녹원 배경 공방','재료 준비','완성 소쿠리'],
    captions:{youtube:'담양 대나무 공예 — 1일 최대 1m 자라는 식물이에요 🎋\n\n빠른 성장이 오히려 강도를 높여요!\n강철보다 단위 강도가 높은 대나무\n\n📍 전남 담양군 죽물박물관 공방\n🎋 죽녹원+죽물박물관+공예 담양 세트\n\n#담양대나무공예 #담양 #전남여행 #대나무 #전통공예',instagram:'담양 대나무 공예 하루 최대 1m 자라는 식물이에요 🎋\n\n빠른 성장이 강도 높이는 역설 ✨\n강철보다 단위 강도 높아요\n\n📍 전남 담양 죽물박물관\n\n#담양대나무 #담양여행 #전남 #대나무공예 #GemKorea',tiktok:'담양 대나무 공예 꿀팁 🎋 대나무가 하루 최대 1m 자라요! 빠른 성장이 압축 실리카 만들어 강철보다 강도 높은 역설 // 체험하다 칼 금방 무뎌짐으로 실감 #담양대나무 #담양여행 #전남'},
    hashtags:{korean:['#한국여행','#전남여행','#담양여행','#대나무','#GemKorea'],place_specific:['#담양대나무공예','#하루1m성장','#강철보다강한대나무','#죽물박물관']}
  },
  {
    experience_id:'EX-IC-ISL-002', experience_name:'인천 무의도 하나개해수욕장', category_sub:'자연체험', region:'인천광역시',
    script_30s:'오늘은 인천 무의도 하나개해수욕장에 왔어요. 인천공항 옆 한적한 해변이에요. 근데 아무도 안 알려주는 게 있어요 — 무의도는 페리가 아니라 연도교로 연결됐어요. 차로 바로 들어가요. 그 접근성이 달라진 게 얼마 안 됐어요. 너무 아직 알려지지 않은 곳이라서 좋았습니다.',
    script_60s:'오늘은 인천 중구 무의도 하나개해수욕장에 왔어요. 인천공항에서 차로 30분 거리예요. 2019년 무의연도교가 완공되면서 배 없이 차로 들어갈 수 있게 됐어요. 근데 아무도 안 알려주는 꿀팁 하나 — 무의도 하나개 해수욕장이 아직 많이 알려지지 않은 이유가 연도교 개통이 최근이기 때문이에요. 2019년 이전엔 배를 타야 해서 접근이 불편했어요. 지금은 차로 들어갈 수 있는데 아직 관광객이 많지 않아서 한적하게 즐길 수 있어요. 수도권에서 가장 조용한 넓은 모래 해변이에요. 인천공항 이용할 때 일찍 도착해서 하나개 해변에서 시간 보내다가 공항 가는 코스도 추천이에요. 너무 아직 알려지지 않은 보석 같은 해변이라서 좋았습니다.',
    secret_tip:'무의연도교 2019년 개통 — 배 없이 차로 접근 가능. 아직 알려지지 않아 한적. 수도권 가장 조용한 해변. 인천공항 이용 전후 들르기 완벽 위치',
    filming_guide:'한적한 하나개 넓은 모래해변 광각. 무의연도교 배경 차 진입. 인천공항 이착륙 배경 해변.',
    broll_ideas:['한적한 하나개 해변 광각','무의연도교 차 진입','인천공항 이착륙 배경','서해 일몰 하나개 해변','해변 산책로'],
    hooks:['무의도 2019년부터 차로 들어가요','아직 알려지지 않은 한적한 해변','인천공항 30분 거리예요','공항 가기 전 들르기 완벽','무의도 하나개해수욕장 꿀팁'],
    thumbnails:['한적한 하나개 해변 광각','무의연도교 차 진입','인천공항 배경','서해 일몰','해변 산책로'],
    captions:{youtube:'무의도 하나개해수욕장 — 2019년부터 차로 들어가요 🏖️\n\n아직 알려지지 않아 한적!\n인천공항 30분 거리 조용한 해변\n\n📍 인천 중구 무의도 하나개해수욕장\n🏖️ 무의연도교 개통으로 배 없이 차 진입\n\n#무의도 #하나개해수욕장 #인천여행 #인천공항근처 #한적한해변',instagram:'무의도 하나개해수욕장 2019년부터 차로 들어가요 🏖️\n\n아직 알려지지 않아 한적한 해변 ✨\n인천공항 30분 수도권 최고 조용한 해변\n\n📍 인천 무의도\n\n#무의도 #하나개 #인천여행 #한적한해변 #GemKorea',tiktok:'무의도 하나개 꿀팁 🏖️ 2019년부터 차로 들어갈 수 있어요! 아직 알려지지 않아 한적 // 인천공항 30분 거리 공항 가기 전 들르기 완벽 #무의도 #하나개 #인천여행'},
    hashtags:{korean:['#한국여행','#인천여행','#무의도','#해수욕장','#GemKorea'],place_specific:['#무의도하나개','#무의연도교2019','#한적한해변','#인천공항30분']}
  },
  {
    experience_id:'EX-GG-RIT-001', experience_name:'수원 향교 전통 제례 체험', category_sub:'역사 체험', region:'경기도',
    script_30s:'오늘은 수원 향교에서 전통 제례를 체험했어요. 조선 시대 공자에게 올리는 의식이에요. 근데 아무도 안 알려주는 게 있어요 — 절하는 방향이 남자랑 여자가 달라요. 남자는 왼손이 위, 여자는 오른손이 위예요. 그게 음양 원리예요. 너무 손 하나에 우주 원리가 있다는 게 좋았습니다.',
    script_60s:'오늘은 경기도 수원 향교에서 전통 제례 복장 착용과 제례 체험 프로그램에 참가했어요. 유교 전통 제례 예법을 배우고 실제 제례 절차를 체험하는 역사 문화 교육이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 제례에서 절하는 방법이 남녀가 달라요. 남성은 왼손을 오른손 위에 포개서 절을 하고 여성은 오른손을 왼손 위에 포개서 절을 해요. 이게 음양 원리예요. 유교에서 남성은 양(+), 여성은 음(-)으로 보는데 양기가 강한 왼쪽을 위로 하면 남성, 음기가 강한 오른쪽을 위로 하면 여성이에요. 이 사실을 알면 단순한 예절이 아니라 우주 원리를 담은 의식이라는 게 느껴져요. 너무 손 하나에 음양 원리가 담겼다는 게 좋았습니다.',
    secret_tip:'제례 절하기 남녀 차이 = 음양 원리 — 남자 왼손 위, 여자 오른손 위. 음양 원리 담긴 유교 예절. 이 사실 알면 제례가 달리 느껴짐. 수원화성+향교 역사 코스',
    filming_guide:'남녀 손 포개기 차이 비교 클로즈업. 제례 복장 착용 전체 장면. 향교 경내 공자 신위 앞 절하는 모습.',
    broll_ideas:['남녀 손 포개기 비교 클로즈업','제례 복장 착용 장면','공자 신위 앞 절하기','향교 경내 전경','제례 음식 차림'],
    hooks:['제례 절하는 방향이 남녀 달라요','왼손 위 오른손 위 음양 원리','손 하나에 우주 원리가 담겼어요','제례가 예절이 아닌 음양 원리','수원 향교 체험 꿀팁'],
    thumbnails:['남녀 손 포개기 비교','제례 복장 착용','공자 신위 앞 절하기','향교 경내 전경','제례 음식 차림'],
    captions:{youtube:'수원 향교 전통 제례 — 절하는 방향이 남녀 달라요 🙏\n\n왼손 위 vs 오른손 위 음양 원리!\n손 하나에 우주 원리가 담겼어요\n\n📍 경기도 수원시 수원 향교\n🙏 제례 복장+절차 체험 프로그램\n\n#수원향교 #전통제례 #수원여행 #경기여행 #음양원리',instagram:'수원 향교 제례 절하는 방향이 남녀 달라요 🙏\n\n왼손 위 오른손 위 음양 원리 ✨\n손 하나에 우주 원리가 담겼어요\n\n📍 경기 수원 향교\n\n#수원향교 #전통제례 #수원여행 #음양원리 #GemKorea',tiktok:'수원 향교 제례 꿀팁 🙏 절할 때 남자는 왼손 위, 여자는 오른손 위예요! 음양 원리 담긴 유교 예절 // 손 하나에 우주 원리 담긴 거예요 #수원향교 #전통제례 #수원여행'},
    hashtags:{korean:['#한국여행','#경기여행','#수원여행','#전통제례','#GemKorea'],place_specific:['#수원향교','#제례남녀차이','#음양원리절','#유교전통예절']}
  },
  {
    experience_id:'EX-GW-MIL-001', experience_name:'인제 서화 육군 부대 극기 체험', category_sub:'어드벤처/레포츠', region:'강원도',
    script_30s:'오늘은 인제 군 부대 극기 체험을 했어요. 실제 훈련을 해봐요. 근데 아무도 안 알려주는 게 있어요 — 군대 행군 페이스가 따로 있어요. 분당 116보예요. 이 리듬을 유지하면 몇 시간도 걸어요. 너무 리듬이 지구력이라는 게 좋았습니다.',
    script_60s:'오늘은 강원도 인제 군부대에서 운영하는 극기 체험 캠프에 참가했어요. 행군·사격 체험·구급법·팀 미션을 1박 2일로 진행하는 프로그램이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 군대 행군 페이스의 비밀이 있어요. 군인들이 먼 거리를 걸을 수 있는 이유가 분당 116보라는 일정 리듬을 유지하기 때문이에요. 이 리듬은 심장 박동과 맞춰 최소한의 에너지로 최대 거리를 이동하는 군사 과학이에요. 행군할 때 이 리듬에 맞추면 마음대로 걷는 것보다 훨씬 덜 지쳐요. 극기 체험에서 교관이 이 리듬을 알려주는데 그 순간 걷기가 완전히 달라져요. 너무 리듬이 지구력을 만드는 과학이라서 좋았습니다.',
    secret_tip:'군 행군 페이스 = 분당 116보 — 심장 박동과 맞춰 최소 에너지 최대 거리. 이 리듬 유지하면 수십 km도 가능. 극기 체험 교관 지도 시 핵심. 사전 예약 필수',
    filming_guide:'분당 116보 행군 리듬 클로즈업. 군부대 장비 체험 사격 장면. 팀 미션 협동 장면.',
    broll_ideas:['116보 행군 리듬 클로즈업','군부대 사격 체험','팀 미션 협동 장면','극기 훈련 장애물 코스','군복 착용 집합 장면'],
    hooks:['군 행군 분당 116보 리듬이에요','이 리듬 유지하면 수십 km도 가능','심장 박동과 맞춘 군사 과학','리듬이 지구력을 만들어요','인제 극기 체험 꿀팁'],
    thumbnails:['116보 행군 리듬','군부대 사격 체험','팀 미션 협동','장애물 코스','군복 착용 집합'],
    captions:{youtube:'인제 극기 체험 — 행군은 분당 116보예요 🪖\n\n심장 박동과 맞춘 군사 과학!\n이 리듬 유지하면 수십 km도 가능\n\n📍 강원도 인제군 군부대 극기 체험\n🪖 1박 2일 / 사전 예약 필수\n\n#인제극기체험 #인제 #강원도여행 #군부대체험 #행군리듬',instagram:'인제 극기 체험 행군 분당 116보가 비밀이에요 🪖\n\n심장 박동과 맞춘 군사 과학 ✨\n이 리듬 유지하면 멀리 가도 덜 지쳐요\n\n📍 강원 인제 군부대 극기 체험\n\n#인제극기체험 #인제여행 #강원도 #행군리듬 #GemKorea',tiktok:'인제 극기 체험 꿀팁 🪖 행군할 때 분당 116보 리듬이 핵심이에요! 심장 박동과 맞춰 최소 에너지 최대 거리 // 이 리듬 유지하면 수십 km도 가능 #인제극기체험 #인제여행 #강원도'},
    hashtags:{korean:['#한국여행','#강원도여행','#인제여행','#극기체험','#GemKorea'],place_specific:['#인제극기체험','#행군116보','#군사과학리듬','#군부대체험']}
  },
  {
    experience_id:'EX-GG-DRM-001', experience_name:'파주 헤이리 드라마 촬영지 투어', category_sub:'문화예술', region:'경기도',
    script_30s:'오늘은 파주 헤이리 예술마을을 탐방했어요. 수십 편 드라마 촬영지예요. 근데 아무도 안 알려주는 게 있어요 — 헤이리는 건물 하나하나가 다른 건축가 작품이에요. 나란히 있어도 스타일이 달라요. 한 골목이 건축 갤러리예요. 너무 골목이 박물관이라는 게 좋았습니다.',
    script_60s:'오늘은 경기도 파주 헤이리 예술마을을 탐방했어요. 드라마 별에서 온 그대·태양의 후예 등 수십 편 드라마·영화 촬영지예요. 예술가들이 직접 설계한 공간들이 모여있는 독특한 마을이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 헤이리 건물들이 각각 다른 건축가가 설계했어요. 나란히 붙어있어도 건물마다 완전히 다른 스타일이에요. 모더니즘·미니멀리즘·자연주의·전통 한국 건축이 한 골목에 공존해요. 건물들을 보면서 "저건 왜 저렇게 생겼을까?"를 생각하며 걸으면 한 골목이 건축 갤러리예요. 갤러리와 카페마다 들어가서 보는 것도 대부분 무료예요. 드라마 촬영지 스탬프 투어 지도를 받아서 돌면 더 체계적으로 볼 수 있어요. 너무 골목이 건축 박물관이라는 게 좋았습니다.',
    secret_tip:'건물마다 다른 건축가 설계 = 골목이 건축 갤러리 — 모더니즘·미니멀리즘·자연주의 공존. 갤러리 대부분 무료 입장. 스탬프 투어 지도 활용. 지혜의 숲 세트',
    filming_guide:'같은 골목 다른 건축 스타일 비교 촬영. 드라마 촬영지 포토 포인트. 헤이리 야경.',
    broll_ideas:['골목 다른 건축 스타일 비교','드라마 촬영지 포토 포인트','헤이리 야경 전체','카페 내부 독특한 인테리어','스탬프 투어 지도'],
    hooks:['헤이리 건물마다 다른 건축가예요','한 골목이 건축 갤러리예요','모더니즘 미니멀리즘 자연주의 공존','갤러리 대부분 무료입장이에요','파주 헤이리 꿀팁'],
    thumbnails:['골목 다른 건축 비교','드라마 촬영지 포토','헤이리 야경','카페 독특한 인테리어','스탬프 투어 지도'],
    captions:{youtube:'파주 헤이리 드라마 촬영지 — 골목이 건축 갤러리예요 🎨\n\n건물마다 다른 건축가 설계!\n모더니즘·미니멀리즘·자연주의 공존\n\n📍 경기도 파주시 헤이리 예술마을\n🎨 갤러리 대부분 무료 / 스탬프 투어 지도 활용\n\n#파주헤이리 #파주 #경기여행 #드라마촬영지 #건축갤러리',instagram:'파주 헤이리 골목이 건축 갤러리예요 🎨\n\n건물마다 다른 건축가 스타일 ✨\n드라마 촬영지+건축 탐방 세트\n\n📍 경기 파주 헤이리 예술마을\n\n#파주헤이리 #파주여행 #경기 #드라마촬영지 #GemKorea',tiktok:'파주 헤이리 꿀팁 🎨 건물마다 다른 건축가가 설계했어요! 한 골목이 건축 갤러리 // 모더니즘 미니멀리즘 자연주의 나란히 공존 갤러리 무료 #파주헤이리 #파주여행 #드라마촬영지'},
    hashtags:{korean:['#한국여행','#경기여행','#파주여행','#헤이리','#GemKorea'],place_specific:['#파주헤이리','#건축갤러리골목','#드라마촬영지','#건물마다다른건축가']}
  },
  {
    experience_id:'EX-GG-DRM-002', experience_name:'남이섬 드라마 겨울연가 투어', category_sub:'역사 체험', region:'경기도',
    script_30s:'오늘은 남이섬 겨울연가 투어를 했어요. 한류 드라마 성지예요. 근데 아무도 안 알려주는 게 있어요 — 남이섬 외국인 관광객 중 일본인이 줄고 중국·동남아가 늘었어요. 겨울연가보다 이제 다른 한류가 왔어요. 그 변화가 시대의 흐름이에요. 너무 한류 세대가 바뀐다는 게 좋았습니다.',
    script_60s:'오늘은 경기도 가평 남이섬 한류 드라마 투어를 했어요. 2002년 드라마 겨울연가 촬영지로 전 세계 한류 팬들이 순례하는 명소예요. 배를 타고 들어가는 남이섬은 메타세쿼이아 길·자전거 길·카페가 아름다워요. 근데 아무도 안 알려주는 꿀팁 하나 — 남이섬을 방문하면 외국인 관광객이 정말 많은데 그 국적이 변하고 있어요. 2000년대엔 일본인이 많았는데 이제 동남아·중국·서양 관광객이 더 많아요. 겨울연가 세대에서 BTS·블랙핑크·넷플릭스 한류 세대로 바뀐 거예요. 각국 관광객들과 어울리다 보면 한류가 세계 문화가 된 걸 피부로 느껴요. 남이섬에서 외국인 관광객과 얘기 나눠보는 것도 특별한 경험이에요. 너무 남이섬이 한류 변화의 거울이라서 좋았습니다.',
    secret_tip:'남이섬 외국인 국적 변화 = 한류 세대 변화 — 일본(겨울연가 세대)→동남아·중국(BTS·K드라마 세대). 외국인 관광객과 대화가 한류 실감 체험. 메타세쿼이아 길+자전거 필수',
    filming_guide:'겨울연가 촬영지 표지와 드라마 사진 클로즈업. 외국인 관광객 다양한 국적 장면. 메타세쿼이아 길 자전거.',
    broll_ideas:['겨울연가 촬영지 표지','외국인 다양한 국적 장면','메타세쿼이아 길 자전거','남이섬 배 탑승','카페 한강 뷰'],
    hooks:['남이섬 외국인 국적이 바뀌었어요','겨울연가 세대에서 BTS 세대로','한류 세대 변화를 여기서 봐요','외국인 관광객과 대화가 특별해요','남이섬 겨울연가 투어 꿀팁'],
    thumbnails:['겨울연가 촬영지 표지','외국인 다양한 국적','메타세쿼이아 자전거','남이섬 배 탑승','카페 한강 뷰'],
    captions:{youtube:'남이섬 겨울연가 투어 — 외국인 국적이 바뀌었어요 🎬\n\n일본 세대 → 동남아·중국 한류 세대!\n한류 변화의 거울 남이섬\n\n📍 경기도 가평군 남이섬\n🎬 메타세쿼이아 길+자전거 필수\n\n#남이섬 #겨울연가 #가평 #경기여행 #한류변화',instagram:'남이섬 겨울연가 촬영지 외국인 국적이 바뀌었어요 🎬\n\n겨울연가 세대에서 BTS 세대로 ✨\n한류 변화가 남이섬에서 보여요\n\n📍 경기 가평 남이섬\n\n#남이섬 #겨울연가 #가평여행 #경기 #GemKorea',tiktok:'남이섬 꿀팁 🎬 외국인 국적이 바뀌었어요! 2000년대 일본에서 이제 동남아·중국 BTS 세대로 // 한류 변화의 거울 메타세쿼이아 길 자전거 필수 #남이섬 #겨울연가 #가평여행'},
    hashtags:{korean:['#한국여행','#경기여행','#가평여행','#남이섬','#GemKorea'],place_specific:['#남이섬겨울연가','#한류세대변화','#메타세쿼이아길','#겨울연가촬영지']}
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
