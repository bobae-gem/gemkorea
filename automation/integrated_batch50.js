const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const now = new Date().toISOString().slice(0,19);

const newExps = [
  {experience_id:'EX-GG-NAT-089',name:'연천 재인폭포 트레킹',category_main:'문화/체험',category_sub:'자연체험',region_main:'GG',region_sub:'경기도 연천군',address:'경기도 연천군 연천읍 부곡리 재인폭포',lat:38.0964,lng:127.0733,price:'무료',duration:'1시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'경기 연천 한탄강 지질공원 내 재인폭포를 탐방하는 자연 체험이다. 18m 현무암 절벽 위에서 쏟아지는 재인폭포가 화산 지형과 어우러지는 절경으로 유네스코 세계지질공원 핵심 명소다.',source_urls:['https://www.yeoncheon.go.kr/'],data_confidence:'high',tags:['연천재인폭포','연천','경기','재인폭포','한탄강','현무암','유네스코세계지질공원'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (무료)',phone:'031-839-2061'},
  {experience_id:'EX-JN-NAT-102',name:'곡성 섬진강 기차마을',category_main:'문화/체험',category_sub:'역사 체험',region_main:'JN',region_sub:'전라북도 곡성군',address:'전라북도 곡성군 오곡면 기차마을로 232',lat:35.2956,lng:127.3131,price:'증기기관차 성인 6,000원',duration:'2~3시간',reservation_required:false,target_user:['가족','커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'전남 곡성 섬진강변 기차마을에서 실제 증기기관차를 타는 체험이다. 폐철도 구간을 복원한 곡성 기차마을에서 1920년대 증기기관차를 타고 섬진강 절경을 즐기는 레트로 기차 여행이다.',source_urls:['https://www.gokseong.go.kr/'],data_confidence:'high',tags:['곡성기차마을','곡성','전남','증기기관차','섬진강','레트로기차','기차마을'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'10:00~17:00',phone:'061-363-9900'},
  {experience_id:'EX-GN-NAT-093',name:'사천 삼천포 대교 야경',category_main:'문화/체험',category_sub:'야경/야간투어',region_main:'GN',region_sub:'경상남도 사천시',address:'경상남도 사천시 대방동 삼천포대교 일대',lat:34.9497,lng:128.0894,price:'무료',duration:'1시간',reservation_required:false,target_user:['커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'사천과 남해를 연결하는 경남 삼천포대교 야경을 감상하는 체험이다. 해지개길을 따라 삼천포대교 5개 교량 조명이 켜진 야경이 한려수도 섬들과 어우러지는 경남 최고 다리 야경 명소다.',source_urls:['https://www.sacheon.go.kr/'],data_confidence:'high',tags:['삼천포대교야경','사천','경남','삼천포대교','한려수도','다리야경','해지개길'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'일몰~23:00 (무료)',phone:'055-831-2114'},
  {experience_id:'EX-GG-CUL-085',name:'가평 아침고요 야간 조명',category_main:'문화/체험',category_sub:'야경/야간투어',region_main:'GG',region_sub:'경기도 가평군',address:'경기도 가평군 상면 수목원로 432 아침고요수목원',lat:37.7806,lng:127.5347,price:'성인 14,000원 (야간)',duration:'2시간',reservation_required:false,target_user:['커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'경기 가평 아침고요수목원 겨울 야간 조명 축제 오색별빛정원전을 즐기는 체험이다. 겨울 12월~2월 수목원 전체에 수십만 개 조명이 켜져 몽환적 겨울 야경을 만드는 수도권 최고 겨울 야경 축제다.',source_urls:['https://www.morningcalm.co.kr/'],data_confidence:'high',tags:['아침고요수목원야간조명','가평','경기','오색별빛정원전','겨울야경','조명축제','수목원'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'seasonal',operating_hours:'12~2월 17:00~21:00',phone:'1544-6703'},
  {experience_id:'EX-JB-NAT-073',name:'무주 덕유산 향적봉 설경',category_main:'문화/체험',category_sub:'자연체험',region_main:'JB',region_sub:'전라북도 무주군',address:'전라북도 무주군 설천면 무주구천동로 구천동',lat:35.8919,lng:127.7019,price:'케이블카 왕복 성인 16,000원',duration:'3~4시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'전북 무주 덕유산 향적봉에서 겨울 설경 트레킹을 즐기는 체험이다. 덕유산 케이블카로 오르는 향적봉 1,614m 정상에서 눈꽃·설경이 아름다운 겨울 트레킹이 전북 최고 겨울 산행 코스다.',source_urls:['https://www.deogyusan.or.kr/'],data_confidence:'high',tags:['무주덕유산향적봉설경','무주','전북','덕유산','향적봉','겨울설경','눈꽃'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'seasonal',operating_hours:'겨울 설경 시즌 (케이블카 09:00~16:00)',phone:'063-322-9400'},
  {experience_id:'EX-CB-NAT-049',name:'단양 도담삼봉 유람선',category_main:'문화/체험',category_sub:'자연체험',region_main:'CB',region_sub:'충청북도 단양군',address:'충청북도 단양군 단양읍 도담리 도담삼봉',lat:37.0108,lng:128.2731,price:'성인 유람선 5,000원',duration:'1시간',reservation_required:false,target_user:['개인','커플','가족'],nearby_places:[],related_heritage_ids:[],short_description:'충북 단양 남한강 한가운데 3개 봉우리 섬 도담삼봉을 유람선으로 탐방하는 체험이다. 단양8경 중 제1경으로 남한강에서 솟아오른 3개 석회암 봉우리 도담삼봉의 사계절 절경을 유람선에서 즐긴다.',source_urls:['https://www.danyang.go.kr/'],data_confidence:'high',tags:['단양도담삼봉유람선','단양','충북','도담삼봉','단양8경','남한강','유람선'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~17:00',phone:'043-422-1146'},
  {experience_id:'EX-GW-NAT-083',name:'강원 가리왕산 조망 트레킹',category_main:'문화/체험',category_sub:'자연체험',region_main:'GW',region_sub:'강원특별자치도 정선군',address:'강원특별자치도 정선군 북면 방아다리로 일대',lat:37.5408,lng:128.5872,price:'무료',duration:'4~5시간',reservation_required:false,target_user:['개인'],nearby_places:[],related_heritage_ids:[],short_description:'강원 정선 가리왕산 국립공원에서 조망 트레킹을 즐기는 체험이다. 2018 평창동계올림픽 알파인스키 경기장이 있던 가리왕산은 1,561m 정상에서 동해·오대산·태백산 조망이 압도적인 강원 비경이다.',source_urls:['https://www.inje.go.kr/'],data_confidence:'high',tags:['정선가리왕산트레킹','정선','강원','가리왕산','평창올림픽','조망트레킹','국립공원'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (무료)',phone:'033-560-2811'},
  {experience_id:'EX-JN-CUL-057',name:'전주 막걸리 골목 투어',category_main:'문화/체험',category_sub:'지역 먹거리',region_main:'JN',region_sub:'전라북도 전주시',address:'전라북도 전주시 완산구 삼천동 막걸리 골목',lat:35.8211,lng:127.1269,price:'막걸리 안주 별도',duration:'1~2시간',reservation_required:false,target_user:['청년','개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'전북 전주 삼천동 막걸리 골목에서 전주 막걸리와 안주를 즐기는 로컬 문화 체험이다. 전주 3대 음식 문화 중 하나인 막걸리 골목은 막걸리 한 잔에 안주가 자동으로 계속 나오는 전주만의 독특한 술 문화다.',source_urls:['https://www.jeonju.go.kr/'],data_confidence:'high',tags:['전주막걸리골목','전주','전북','막걸리','삼천동','전주음식문화','로컬'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'저녁 16:00~23:00',phone:'063-281-2891'},
  {experience_id:'EX-GN-CUL-081',name:'거제 바람의 언덕',category_main:'문화/체험',category_sub:'자연체험',region_main:'GN',region_sub:'경상남도 거제시',address:'경상남도 거제시 남부면 해금강로 일대',lat:34.7844,lng:128.6278,price:'무료',duration:'1시간',reservation_required:false,target_user:['커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'경남 거제 남단 바람의 언덕에서 한려수도 남해 전경을 감상하는 체험이다. 드라마·영화 촬영지로 유명한 거제 바람의 언덕에서 풍차와 억새가 어우러지는 경치가 거제 최고 뷰포인트로 꼽힌다.',source_urls:['https://www.geoje.go.kr/'],data_confidence:'high',tags:['거제바람의언덕','거제','경남','바람의언덕','풍차','드라마촬영지','한려수도'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (무료)',phone:'055-639-3000'},
  {experience_id:'EX-GB-CUL-050',name:'김천 직지사 역사 투어',category_main:'문화/체험',category_sub:'역사 체험',region_main:'GB',region_sub:'경상북도 김천시',address:'경상북도 김천시 대항면 직지사로 직지사',lat:36.0694,lng:128.0478,price:'성인 3,000원',duration:'1~2시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'신라 418년 아도화상이 창건한 경북 김천 직지사를 탐방하는 역사 체험이다. 한국 불교 조계종 8교구 본사 직지사는 임진왜란 승병 사명대사의 사찰로 황악산 자락 천년 고찰이다.',source_urls:['https://www.jikjisa.or.kr/'],data_confidence:'high',tags:['김천직지사','김천','경북','직지사','사명대사','황악산','신라'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'07:00~18:00',phone:'054-429-1700'},
  {experience_id:'EX-GG-NAT-090',name:'인천 소래포구 해산물',category_main:'문화/체험',category_sub:'지역 먹거리',region_main:'GG',region_sub:'인천광역시 남동구',address:'인천광역시 남동구 포구로 83 소래포구',lat:37.4389,lng:126.7367,price:'먹거리 별도',duration:'1~2시간',reservation_required:false,target_user:['개인','커플','가족'],nearby_places:[],related_heritage_ids:[],short_description:'인천 소래포구에서 활어회와 각종 해산물을 즐기는 먹거리 체험이다. 수도권 최대 어시장 소래포구에서 꽃게·새우·활어 등 신선한 서해 해산물을 저렴하게 즐기는 수도권 로컬 먹거리 명소다.',source_urls:['https://www.namdong.go.kr/'],data_confidence:'high',tags:['인천소래포구','인천','소래포구','꽃게','활어','수도권어시장','해산물'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'07:00~22:00',phone:'032-466-8986'},
  {experience_id:'EX-JN-CUL-058',name:'제주 올레길 7코스',category_main:'문화/체험',category_sub:'자연체험',region_main:'JJ',region_sub:'제주특별자치도 서귀포시',address:'제주특별자치도 서귀포시 월평동 올레길 7코스 일대',lat:33.2422,lng:126.4233,price:'무료',duration:'4~5시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'제주 올레길 7코스 외돌개~월평 구간을 걷는 체험이다. 외돌개 기암과 범섬·문섬 해상 전망, 자연 해안 절벽을 따라 걷는 7코스가 21개 올레길 코스 중 경치 최고로 꼽히는 대표 제주 트레킹이다.',source_urls:['https://www.jejuolle.org/'],data_confidence:'high',tags:['제주올레길7코스','제주','서귀포','외돌개','올레길','자연해안절벽','범섬'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (무료)',phone:'064-762-2190'}
];

const newShorts = [
  {
    experience_id:'EX-GG-NAT-089', experience_name:'연천 재인폭포 트레킹', category_sub:'자연체험', region:'경기도',
    script_30s:'오늘은 연천 재인폭포에 왔어요. 현무암 위에서 쏟아져요. 근데 아무도 안 알려주는 게 있어요 — 재인폭포가 화산 용암이 굳어 만든 절벽에서 떨어져요. 불과 물이 만드는 폭포예요. 유네스코 세계지질공원이에요. 너무 지질이 이렇게 폭포를 만든다는 게 좋았습니다.',
    script_60s:'오늘은 경기도 연천 한탄강 지질공원 안 재인폭포를 탐방했어요. 18m 현무암 절벽 위에서 쏟아지는 폭포예요. 근데 아무도 안 알려주는 꿀팁 하나 — 재인폭포 절벽의 탄생 스토리가 있어요. 재인폭포 절벽은 화산 용암이 굳어 만들어진 현무암 절벽이에요. 약 27만 년 전 한반도 내륙에서 화산이 폭발했어요. 그 용암이 한탄강을 따라 흘러내려가며 굳었어요. 용암이 굳으면 현무암이 돼요. 현무암은 수축하면서 규칙적인 육각형 기둥 모양으로 깨지는데 이게 주상절리예요. 재인폭포 절벽이 바로 이 주상절리 현무암이에요. 그리고 재인폭포 상단 절벽 위에 조선 시대 재인(才人, 광대)이 줄타기를 하다 죽었다는 전설이 있어요. 그 재인의 이름을 따서 재인폭포가 됐어요. 너무 지질과 전설이 함께 폭포를 만든다는 게 좋았습니다.',
    secret_tip:'재인폭포 = 27만 년 전 화산 용암→현무암 주상절리 절벽 위 폭포 — 불+물 합작. 조선 시대 재인(광대) 줄타기 추락 전설에서 이름 유래. 유네스코 세계지질공원 한탄강 코스',
    filming_guide:'재인폭포 현무암 주상절리 절벽+폭포 전경. 폭포 물보라 클로즈업. 한탄강 현무암 협곡.',
    broll_ideas:['주상절리 절벽+폭포 전경','폭포 물보라 클로즈업','한탄강 현무암 협곡','폭포 아래 연못','지질 설명판'],
    hooks:['화산 용암이 굳어 만든 절벽이에요','27만 년 전 화산 폭발이에요','불과 물이 만든 폭포예요','재인 광대 전설에서 이름이 왔어요','연천 재인폭포 꿀팁'],
    thumbnails:['주상절리 절벽+폭포','폭포 물보라','한탄강 현무암 협곡','폭포 아래 연못','지질 설명판'],
    captions:{youtube:'연천 재인폭포 — 화산 용암이 만든 절벽에서 떨어져요 💧\n\n27만 년 전 화산 폭발 현무암 주상절리!\n불과 물이 만든 폭포\n\n📍 경기도 연천군 연천읍 재인폭포\n💧 유네스코 세계지질공원 한탄강\n\n#연천재인폭포 #재인폭포 #연천 #경기여행 #한탄강지질공원',instagram:'연천 재인폭포 화산 용암이 만든 절벽에서 떨어져요 💧\n\n27만 년 전 화산 폭발 현무암 주상절리 ✨\n불과 물이 만든 폭포\n\n📍 경기 연천 재인폭포\n\n#연천재인폭포 #재인폭포 #연천여행 #경기 #GemKorea',tiktok:'연천 재인폭포 꿀팁 💧 화산 용암이 굳어 만든 절벽에서 폭포가 떨어져요! 27만 년 전 화산 폭발 현무암 주상절리 // 재인 광대 전설에서 이름이 왔어요 #연천재인폭포 #연천여행 #경기'},
    hashtags:{korean:['#한국여행','#경기여행','#연천여행','#재인폭포','#GemKorea'],place_specific:['#연천재인폭포27만년화산용암현무암','#주상절리절벽위폭포','#재인광대전설이름유래','#유네스코세계지질공원한탄강']}
  },
  {
    experience_id:'EX-JN-NAT-102', experience_name:'곡성 섬진강 기차마을', category_sub:'역사 체험', region:'전라남도',
    script_30s:'오늘은 곡성 기차마을에서 증기기관차를 탔어요. 근데 아무도 안 알려주는 게 있어요 — 이 기차가 1933년 제조된 실제 증기기관차예요. 90년 된 기차가 지금도 달려요. 관리의 비결이에요. 너무 기차가 이렇게 오래 산다는 게 좋았습니다.',
    script_60s:'오늘은 전남 곡성 섬진강 기차마을에서 증기기관차 체험을 했어요. 폐철도를 복원한 섬진강 관광 기차예요. 근데 아무도 안 알려주는 꿀팁 하나 — 기차마을 증기기관차의 역사가 있어요. 곡성 기차마을에서 운행하는 증기기관차는 1933년에 제조된 실제 일제 시대 기관차예요. 90년 이상 된 기관차가 지금도 운행해요. 일제강점기 물자 운반에 쓰였던 기관차가 폐선 이후 보존됐다가 기차마을 개장 때 복원됐어요. 섬진강변 5.4km 구간을 달리면 창밖으로 섬진강 절경이 펼쳐져요. 기차마을 안에는 구 곡성역 건물도 그대로 보존돼 있어요. 1933년 건물이 원형 그대로예요. 드라마·영화 촬영지로도 자주 쓰여요. 벚꽃 시즌 3~4월에 섬진강 벚꽃과 기차가 함께하는 장면이 절경이에요. 너무 기차가 이렇게 오래 살아있다는 게 좋았습니다.',
    secret_tip:'곡성 기차마을 증기기관차 = 1933년 일제 제조 90년 이상 운행 중 — 폐선 후 복원. 구 곡성역 1933년 건물 원형 보존. 벚꽃 시즌 3~4월 섬진강 벚꽃+기차 절경. 레일바이크 세트',
    filming_guide:'1933년 증기기관차 연기+전진 장면. 섬진강 배경 기차 달리기. 구 곡성역 1933 건물.',
    broll_ideas:['증기기관차 연기+전진','섬진강 배경 기차','구 곡성역 건물','벚꽃+기차 조합','기차 내부 클로즈업'],
    hooks:['1933년 제조된 기관차예요','90년 이상 된 기차가 달려요','일제 시대 물자 운반 기차예요','벚꽃 시즌이 최고예요','곡성 기차마을 꿀팁'],
    thumbnails:['증기기관차 연기','섬진강 배경 기차','구 곡성역 건물','벚꽃+기차','기차 내부'],
    captions:{youtube:'곡성 섬진강 기차마을 — 1933년 제조 기관차가 달려요 🚂\n\n90년 이상 된 일제 시대 기관차!\n섬진강 벚꽃 시즌이 절경\n\n📍 전남 곡성군 오곡면 기차마을로 232\n🚂 1933년 구 곡성역 건물 원형 보존\n\n#곡성기차마을 #기차마을 #곡성 #전남여행 #증기기관차',instagram:'곡성 섬진강 기차마을 1933년 제조 기관차가 달려요 🚂\n\n90년 이상 일제 시대 기관차 ✨\n섬진강 벚꽃 시즌에 절경\n\n📍 전남 곡성 기차마을\n\n#곡성기차마을 #기차마을 #곡성여행 #전남 #GemKorea',tiktok:'곡성 기차마을 꿀팁 🚂 1933년 일제 제조 기관차가 지금도 달려요! 90년 이상 된 기관차 // 섬진강 벚꽃 시즌 3~4월이 절경이에요 #곡성기차마을 #곡성여행 #전남'},
    hashtags:{korean:['#한국여행','#전남여행','#곡성여행','#기차마을','#GemKorea'],place_specific:['#곡성기차마을1933년일제기관차','#90년이상운행중폐선복원','#구곡성역1933건물원형보존','#섬진강벚꽃시즌기차절경']}
  },
  {
    experience_id:'EX-JN-CUL-057', experience_name:'전주 막걸리 골목 투어', category_sub:'지역 먹거리', region:'전라북도',
    script_30s:'오늘은 전주 막걸리 골목에 왔어요. 근데 아무도 안 알려주는 게 있어요 — 여기서 막걸리 시키면 안주가 자동으로 나와요. 공짜예요. 시키지 않아도 계속 나와요. 한국에서 여기밖에 없는 문화예요. 너무 무한 안주가 이렇게 신기하다는 게 좋았습니다.',
    script_60s:'오늘은 전북 전주 삼천동 막걸리 골목에서 로컬 문화 체험을 했어요. 전주 3대 음식 문화 중 하나예요. 근데 아무도 안 알려주는 꿀팁 하나 — 전주 막걸리 골목의 독특한 규칙이 있어요. 막걸리를 주문하면 안주를 따로 시키지 않아도 무료로 안주가 나와요. 그리고 막걸리를 계속 시키면 안주도 계속 바뀌어 나와요. 한 번에 대여섯 가지 안주가 계속 나오는 경우도 있어요. 이게 전주 막걸리 골목만의 독특한 문화예요. 한국 어디서도 이렇게 안주가 자동으로 계속 나오는 곳은 없어요. 이 문화가 생긴 이유가 있어요. 원래 전주 시장 상인들이 막걸리를 마시면서 간단한 밥 반찬을 곁들여 먹던 데서 시작됐어요. 지금은 안주 종류가 30~50가지에 이르는 가게도 있어요. 너무 무한 안주가 이렇게 신기하다는 게 좋았습니다.',
    secret_tip:'전주 막걸리 골목 = 막걸리 주문하면 안주 무한 무료 자동 제공 — 막걸리 시킬수록 안주 계속 바뀜. 한국 어디서도 없는 유일한 문화. 시장 상인 문화에서 유래. 삼천동 전주 로컬 골목',
    filming_guide:'막걸리 골목 안주 가득 차려지는 장면. 막걸리 따르기. 골목 전경.',
    broll_ideas:['안주 가득 차려지는 장면','막걸리 따르기','골목 전경','안주 종류 다양','전주 삼천동 골목'],
    hooks:['막걸리 시키면 안주가 자동으로 나와요','공짜예요 무한으로요','한국에서 여기밖에 없어요','막걸리 시킬수록 안주가 바뀌어요','전주 막걸리 꿀팁'],
    thumbnails:['안주 가득 차려지기','막걸리 따르기','골목 전경','다양한 안주','삼천동 골목'],
    captions:{youtube:'전주 막걸리 골목 — 안주가 자동으로 무한 무료예요 🍺\n\n막걸리 시킬수록 안주가 계속 바뀌어요!\n한국에서 여기밖에 없는 문화\n\n📍 전북 전주시 완산구 삼천동 막걸리 골목\n🍺 시장 상인 문화에서 유래한 독특한 술 문화\n\n#전주막걸리골목 #전주 #전북여행 #막걸리무한안주 #삼천동',instagram:'전주 막걸리 골목 안주가 자동으로 무한 무료예요 🍺\n\n막걸리 시킬수록 안주 계속 바뀜 ✨\n한국에서 여기밖에 없는 독특한 문화\n\n📍 전북 전주 삼천동 막걸리 골목\n\n#전주막걸리골목 #전주여행 #전북 #막걸리 #GemKorea',tiktok:'전주 막걸리 꿀팁 🍺 막걸리 시키면 안주가 자동으로 무한 무료예요! 막걸리 시킬수록 안주가 계속 바뀌어요 // 한국에서 여기밖에 없는 유일한 문화 #전주막걸리골목 #전주여행 #전북'},
    hashtags:{korean:['#한국여행','#전북여행','#전주여행','#막걸리골목','#GemKorea'],place_specific:['#전주막걸리골목무한무료안주','#막걸리시킬수록안주바뀜','#한국유일독특문화','#시장상인문화유래삼천동']}
  },
  {
    experience_id:'EX-GN-CUL-081', experience_name:'거제 바람의 언덕', category_sub:'자연체험', region:'경상남도',
    script_30s:'오늘은 거제 바람의 언덕에 왔어요. 드라마 촬영지예요. 근데 아무도 안 알려주는 게 있어요 — 바람의 언덕 이름이 공식 지명이 아니에요. 관광객이 붙인 이름이에요. 공식 지명은 신선대예요. 너무 사람들이 이렇게 지명을 만든다는 게 좋았습니다.',
    script_60s:'오늘은 경남 거제 바람의 언덕을 방문했어요. 드라마·영화 촬영지로 유명한 한려수도 조망 명소예요. 근데 아무도 안 알려주는 꿀팁 하나 — 바람의 언덕 이름의 비밀이 있어요. 바람의 언덕은 공식 지명이 아니에요. 진짜 공식 지명은 신선대예요. 2000년대 초 이 언덕이 드라마 촬영지가 되면서 관광객들이 바람이 많이 부는 언덕이라 바람의 언덕이라고 부르기 시작했어요. 그 이름이 입소문을 타서 지금은 바람의 언덕이 공식 이름보다 더 유명해졌어요. 지도에도 바람의 언덕으로 표시됐어요. 비슷한 사례로 제주 비자림·서울 북악 스카이웨이도 본래 다른 이름이 있어요. 사람들이 부르는 이름이 공식 이름보다 강해지는 경우예요. 언덕 정상 풍차가 거제 바람의 언덕을 상징하는 포토존이에요. 너무 사람들이 이렇게 지명을 만든다는 게 좋았습니다.',
    secret_tip:'바람의 언덕 = 공식 지명 신선대 — 관광객이 붙인 이름이 공식보다 유명해짐. 지도에도 바람의 언덕 표시. 풍차가 포토존. 도장포 해수욕장 세트 코스. 일몰 시간 조망 최고',
    filming_guide:'바람의 언덕 풍차+한려수도 전경. 거제 한려수도 조망. 언덕 억새+바람.',
    broll_ideas:['풍차+한려수도 전경','거제 한려수도 조망','언덕 억새+바람','일몰 거제 바다','풍차 클로즈업'],
    hooks:['공식 지명은 신선대예요','관광객이 붙인 이름이에요','사람들이 지명을 만든 경우예요','풍차가 포토존이에요','거제 바람의 언덕 꿀팁'],
    thumbnails:['풍차+한려수도','거제 한려수도 조망','언덕 억새 바람','일몰 거제 바다','풍차 클로즈업'],
    captions:{youtube:'거제 바람의 언덕 — 공식 지명이 아니에요 🌬️\n\n진짜 이름은 신선대!\n관광객이 붙인 이름이 더 유명해졌어요\n\n📍 경남 거제시 남부면 해금강로 바람의 언덕\n🌬️ 드라마 촬영지 한려수도 조망\n\n#거제바람의언덕 #바람의언덕 #거제 #경남여행 #한려수도',instagram:'거제 바람의 언덕 공식 지명이 아니에요 🌬️\n\n진짜 이름은 신선대 ✨\n관광객이 붙인 이름이 공식보다 유명해짐\n\n📍 경남 거제 바람의 언덕(신선대)\n\n#거제바람의언덕 #바람의언덕 #거제여행 #경남 #GemKorea',tiktok:'거제 바람의 언덕 꿀팁 🌬️ 공식 지명이 아니에요! 진짜 이름은 신선대 // 관광객이 붙인 바람의 언덕이 공식 이름보다 유명해진 경우 #거제바람의언덕 #거제여행 #경남'},
    hashtags:{korean:['#한국여행','#경남여행','#거제여행','#바람의언덕','#GemKorea'],place_specific:['#거제바람의언덕공식지명신선대','#관광객붙인이름공식보다유명','#풍차포토존한려수도조망','#드라마촬영지신선대']}
  },
  {
    experience_id:'EX-CB-NAT-049', experience_name:'단양 도담삼봉 유람선', category_sub:'자연체험', region:'충청북도',
    script_30s:'오늘은 단양 도담삼봉 유람선을 탔어요. 근데 아무도 안 알려주는 게 있어요 — 도담삼봉이 원래 강원도 정선 땅이었어요. 홍수에 떠내려와 여기 박혔대요. 지금도 단양이 정선에 세금을 내는 전설이 있어요. 너무 섬이 이렇게 역사가 있다는 게 좋았습니다.',
    script_60s:'오늘은 충북 단양 도담삼봉 유람선을 탔어요. 단양8경 제1경 남한강 돌봉우리 3개가 솟아있는 절경이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 도담삼봉의 전설이 있어요. 도담삼봉이 원래 강원도 정선 땅 소유라는 전설이에요. 먼 옛날 정선의 큰 홍수가 났을 때 정선의 돌이 남한강을 타고 떠내려와 지금 자리에 박혔대요. 그래서 단양이 정선에게 세금을 내야 한다는 이야기가 있었어요. 단양 사람들이 골머리를 썩다가 한 선비가 해결책을 냈어요. 필요 없는 돌이면 가져가라고 했더니 정선이 가져갈 방법이 없어 포기했대요. 그 후로 세금을 안 냈다는 이야기예요. 이 전설 속 선비가 조선 시대 삼봉 정도전이에요. 정도전이 유배 중에 도담삼봉을 보고 호를 삼봉으로 지었다는 이야기도 있어요. 너무 섬 하나에 이렇게 역사가 있다는 게 좋았습니다.',
    secret_tip:'도담삼봉 전설 = 원래 정선 땅 홍수에 떠내려옴 — 단양이 정선에 세금 내다 선비 재치로 해결. 전설 속 선비가 삼봉 정도전. 정도전 유배 중 도담삼봉 보고 호 삼봉 지음. 사인암 세트',
    filming_guide:'도담삼봉 3봉우리 유람선 조망. 남한강 위 도담삼봉 전경. 전설 안내판.',
    broll_ideas:['도담삼봉 유람선 조망','남한강 위 전경','전설 안내판','도담삼봉 봄 안개','단양 남한강 배경'],
    hooks:['원래 정선 땅이었대요','홍수에 떠내려왔대요','선비 재치로 세금 안 냈대요','삼봉 정도전 이야기예요','단양 도담삼봉 꿀팁'],
    thumbnails:['도담삼봉 유람선 조망','남한강 위 전경','전설 안내판','봄 안개 도담삼봉','단양 배경'],
    captions:{youtube:'단양 도담삼봉 — 원래 정선 땅이었대요 🏔️\n\n홍수에 떠내려와서 세금 내다 재치로 해결!\n전설 속 선비가 삼봉 정도전\n\n📍 충북 단양군 단양읍 도담리 도담삼봉\n🏔️ 단양8경 제1경 남한강 3봉 절경\n\n#단양도담삼봉 #도담삼봉 #단양 #충북여행 #삼봉정도전',instagram:'단양 도담삼봉 원래 정선 땅이었대요 🏔️\n\n홍수에 떠내려와 세금 내다 재치로 해결 ✨\n전설 속 선비가 삼봉 정도전\n\n📍 충북 단양 도담삼봉\n\n#단양도담삼봉 #도담삼봉 #단양여행 #충북 #GemKorea',tiktok:'단양 도담삼봉 꿀팁 🏔️ 원래 정선 땅이었대요! 홍수에 떠내려와 단양이 정선에 세금 내다 선비 재치로 해결 // 전설 속 선비가 삼봉 정도전이에요 #단양도담삼봉 #단양여행 #충북'},
    hashtags:{korean:['#한국여행','#충북여행','#단양여행','#도담삼봉','#GemKorea'],place_specific:['#단양도담삼봉정선땅홍수떠내려옴','#선비재치세금해결','#전설속선비삼봉정도전','#단양8경제1경남한강3봉']}
  },
  {
    experience_id:'EX-GG-NAT-090', experience_name:'인천 소래포구 해산물', category_sub:'지역 먹거리', region:'인천광역시',
    script_30s:'오늘은 인천 소래포구에서 꽃게를 먹었어요. 근데 아무도 안 알려주는 게 있어요 — 꽃게가 왜 꽃게인지 아세요? 등에 꽃 무늬가 있어요. 그게 꽃게 이름의 이유예요. 너무 이름이 이렇게 단순한 이유라는 게 좋았습니다.',
    script_60s:'오늘은 인천 소래포구에서 신선한 꽃게·새우를 즐겼어요. 수도권 최대 어시장이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 소래포구에서 꽃게를 잘 고르는 방법이 있어요. 먼저 꽃게 이름의 뜻부터 알아요. 꽃게 등에 꽃 모양 무늬가 있어서 꽃게예요. 그리고 신선한 꽃게 고르는 비법이 있어요. 첫째 살아있는 꽃게를 고르되 집으면 발이 힘차게 움직여야 해요. 발이 느릿느릿하면 스트레스 받았거나 오래됐어요. 둘째 꽃게 배딱지를 보세요. 수게는 배딱지가 좁고 긴 삼각형이에요. 암게는 둥글고 넓어요. 9~11월 암게 배딱지 안에 알이 꽉 차 있는 것이 가장 맛있어요. 셋째 껍데기를 눌러보세요. 꽉 찬 느낌이 나야 살이 들어있어요. 이 방법으로 골라야 맛있는 꽃게를 살 수 있어요. 너무 이름이 이렇게 단순하고 고르는 방법이 이렇게 과학적이라는 게 좋았습니다.',
    secret_tip:'꽃게 이름 = 등의 꽃 무늬에서 유래 — 신선 고르기: 발 힘차게 움직임+배딱지 암수 구분+껍데기 꽉 찬 느낌. 9~11월 암게 알 꽉 찬 것 최고. 소래포구 이른 아침 경매 시간 최저가',
    filming_guide:'소래포구 활기찬 어시장 전경. 신선 꽃게 고르는 방법 클로즈업. 꽃게 찜 요리.',
    broll_ideas:['소래포구 어시장 전경','꽃게 고르기 클로즈업','꽃게 찜 요리','신선 새우','인천 갈대밭 배경'],
    hooks:['꽃게 이름이 등의 꽃 무늬에서 왔어요','발 힘차게 움직여야 신선해요','암게 배딱지가 둥글고 넓어요','9~11월 알 꽉 찬 암게가 최고예요','인천 소래포구 꿀팁'],
    thumbnails:['소래포구 어시장','꽃게 고르기','꽃게 찜 요리','신선 새우','갈대밭 배경'],
    captions:{youtube:'인천 소래포구 꽃게 — 이름이 등의 꽃 무늬에서 왔어요 🦀\n\n발 힘차게 움직임+배딱지+껍데기 고르기!\n9~11월 암게 알 꽉 찬 것이 최고\n\n📍 인천 남동구 포구로 83 소래포구\n🦀 수도권 최대 어시장\n\n#인천소래포구 #소래포구 #인천 #꽃게 #꽃게고르기',instagram:'인천 소래포구 꽃게 이름이 등의 꽃 무늬에서 왔어요 🦀\n\n발 힘차게+배딱지+껍데기 신선 고르기 ✨\n9~11월 암게 알 꽉 찬 것 최고\n\n📍 인천 소래포구\n\n#인천소래포구 #소래포구 #인천여행 #꽃게 #GemKorea',tiktok:'인천 소래포구 꿀팁 🦀 꽃게 이름이 등의 꽃 무늬에서 왔어요! 신선 고르기: 발 힘차게+배딱지 암수 구분+껍데기 꽉 찬 느낌 // 9~11월 암게 알 꽉 찬 것 최고 #인천소래포구 #소래포구 #인천여행'},
    hashtags:{korean:['#한국여행','#인천여행','#소래포구','#꽃게','#GemKorea'],place_specific:['#인천소래포구꽃게이름꽃무늬','#꽃게신선고르기발힘차게','#암게배딱지둥글넓음','#9~11월알꽉찬암게최고']}
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
