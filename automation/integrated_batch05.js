const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const now = new Date().toISOString().slice(0,19);

const newExps = [
  {experience_id:'EX-GW-SKI-003',name:'강원 알펜시아 스키점프대 견학',category_main:'문화/체험',category_sub:'역사 체험',region_main:'GW',region_sub:'강원특별자치도 평창군',address:'강원특별자치도 평창군 대관령면 올림픽로 715',lat:37.6637,lng:128.6935,price:'성인 5,000원',duration:'1시간',reservation_required:false,target_user:['가족','개인'],nearby_places:[],related_heritage_ids:[],short_description:'2018 평창동계올림픽 스키점프 경기장을 견학하는 체험이다. 엘리베이터로 스키점프대 정상에 올라가면 선수들이 도약하는 시점에서 내려다보는 뷰가 아찔하다. 올림픽 성화대도 함께 볼 수 있다.',source_urls:['https://www.alpensia.com/'],data_confidence:'high',tags:['스키점프대','알펜시아','평창','2018올림픽','강원','스키','올림픽유산'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~17:00',phone:'033-339-0000'},
  {experience_id:'EX-GG-SPT-002',name:'인천 SSG랜더스필드 야구 관람',category_main:'문화/체험',category_sub:'스포츠 체험',region_main:'IC',region_sub:'인천광역시 미추홀구',address:'인천광역시 미추홀구 매소홀로 618',lat:37.4370,lng:126.6931,price:'1만원~',duration:'3~4시간',reservation_required:true,target_user:['가족','개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'SSG랜더스 홈 구장 SSG랜더스필드에서 한국 프로야구를 직접 관람하는 체험이다. 치킨·맥주·핫도그와 함께 응원 문화를 즐기는 한국만의 야구 문화를 체험할 수 있다.',source_urls:['https://www.ssglanders.com/'],data_confidence:'high',tags:['야구관람','인천','SSG랜더스','프로야구','스포츠','치킨맥주','응원'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'seasonal',operating_hours:'시즌 경기 일정 확인 (3~10월)',phone:'032-422-3003'},
  {experience_id:'EX-SE-SPT-002',name:'서울 LG트윈스 잠실 야구 관람',category_main:'문화/체험',category_sub:'스포츠 체험',region_main:'SE',region_sub:'서울특별시 송파구',address:'서울특별시 송파구 올림픽로 25 잠실야구장',lat:37.5121,lng:127.0726,price:'1만원~',duration:'3~4시간',reservation_required:true,target_user:['가족','커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'잠실 야구장에서 LG트윈스·두산 베어스 홈경기를 관람하는 체험이다. 응원봉·치어리더·떡볶이·핫도그와 함께하는 한국 야구 응원 문화는 외국인들이 가장 좋아하는 한국 체험 중 하나다.',source_urls:['https://www.lgtwins.com/'],data_confidence:'high',tags:['잠실야구장','서울','LG트윈스','두산베어스','프로야구','응원문화','외국인체험'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'seasonal',operating_hours:'시즌 경기 일정 (3~10월)',phone:'02-2240-1700'},
  {experience_id:'EX-JN-AGR-002',name:'장흥 표고버섯 따기 체험',category_main:'문화/체험',category_sub:'농촌 체험',region_main:'JN',region_sub:'전라남도 장흥군',address:'전라남도 장흥군 장흥읍 평화리 버섯농장 일원',lat:34.6811,lng:126.9075,price:'1인 12,000원~',duration:'1~2시간',reservation_required:true,target_user:['가족','어린이','개인'],nearby_places:[],related_heritage_ids:[],short_description:'전국 표고버섯 생산의 30%를 담당하는 장흥에서 참나무 원목 표고버섯을 직접 따는 체험이다. 갓 딴 표고버섯을 즉석 구이로 먹으며 표고버섯의 향이 도심 마트 버섯과 얼마나 다른지 알게 된다.',source_urls:['https://www.jangheung.go.kr/'],data_confidence:'high',tags:['표고버섯','장흥','전남','버섯따기','농촌체험','원목표고','가족체험'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~17:00',phone:'061-860-0614'},
  {experience_id:'EX-GN-AGR-001',name:'하동 야생차 채다 체험',category_main:'문화/체험',category_sub:'농촌 체험',region_main:'GN',region_sub:'경상남도 하동군',address:'경상남도 하동군 화개면 화개로 일원',lat:35.0834,lng:127.6842,price:'1인 20,000원',duration:'2~3시간',reservation_required:true,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'한국 최초 차 재배지 하동 화개에서 1,200년 된 야생 차나무에서 직접 찻잎을 따는 체험이다. 지리산 자락 화개천 변의 야생 차밭을 걸으며 찻잎을 따고 직접 덖어 나만의 녹차를 만들어 간다.',source_urls:['https://www.hadong.go.kr/'],data_confidence:'high',tags:['야생차','하동','경남','채다','화개','지리산','1200년차나무'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'seasonal',operating_hours:'4~5월 봄 차 시즌',phone:'055-880-2960'},
  {experience_id:'EX-GG-AGR-002',name:'파주 딸기 따기 체험',category_main:'문화/체험',category_sub:'농촌 체험',region_main:'GG',region_sub:'경기도 파주시',address:'경기도 파주시 파평면 일원',lat:37.9050,lng:126.8833,price:'1인 15,000원~',duration:'1~2시간',reservation_required:true,target_user:['가족','어린이','커플'],nearby_places:[],related_heritage_ids:[],short_description:'파주 딸기 농장에서 직접 딸기를 따는 농촌 체험이다. 12~5월 딸기 시즌에 운영하며 비닐하우스 안에서 빨갛게 익은 딸기를 바로 따 먹을 수 있다. 직접 딴 딸기를 바구니에 담아 가져갈 수 있다.',source_urls:['https://www.paju.go.kr/'],data_confidence:'high',tags:['딸기따기','파주','경기','딸기농장','농촌체험','가족','어린이'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'seasonal',operating_hours:'12~5월 딸기 시즌',phone:'031-940-4523'},
  {experience_id:'EX-GN-SPT-001',name:'부산 세계 수영 선수권 아쿠아틱센터',category_main:'문화/체험',category_sub:'스포츠 체험',region_main:'GN',region_sub:'부산광역시 사상구',address:'부산광역시 사상구 삼락동 아쿠아틱센터로 22',lat:35.1763,lng:128.9912,price:'성인 5,000원',duration:'1~2시간',reservation_required:false,target_user:['가족','개인'],nearby_places:[],related_heritage_ids:[],short_description:'2023 세계수영선수권대회가 열린 아쿠아틱센터에서 수영·다이빙을 즐기는 스포츠 체험이다. 국제 규격 50m 수영장과 다이빙 풀을 일반에 개방하며 세계 선수권 성화와 기념 전시도 관람할 수 있다.',source_urls:['https://www.bsaquatics.kr/'],data_confidence:'high',tags:['아쿠아틱센터','부산','수영','다이빙','2023세계수영','스포츠','수영장'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'06:00~21:00 (월요일 휴관)',phone:'051-320-3000'},
  {experience_id:'EX-GG-SPT-003',name:'수원 KT위즈파크 야구 관람',category_main:'문화/체험',category_sub:'스포츠 체험',region_main:'GG',region_sub:'경기도 수원시',address:'경기도 수원시 장안구 경수대로 893',lat:37.2995,lng:126.9730,price:'1만원~',duration:'3~4시간',reservation_required:true,target_user:['가족','커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'KT위즈 홈 구장 수원 KT위즈파크에서 한국 프로야구를 직접 관람하는 체험이다. 수원화성 인근에 위치해 야구 관람 후 화성행궁·야경 투어와 연계할 수 있는 수원만의 스포츠+역사 코스다.',source_urls:['https://www.ktwiz.co.kr/'],data_confidence:'high',tags:['KT위즈','수원야구','수원','프로야구','스포츠','야구관람','수원화성연계'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'seasonal',operating_hours:'시즌 경기 일정 (3~10월)',phone:'031-251-2255'},
  {experience_id:'EX-GW-SPT-001',name:'강원 원주 치악산 국립공원 트레킹',category_main:'문화/체험',category_sub:'자연체험',region_main:'GW',region_sub:'강원특별자치도 원주시',address:'강원특별자치도 원주시 소초면 치악로 일원',lat:37.3681,lng:128.0992,price:'무료',duration:'3~5시간',reservation_required:false,target_user:['개인','커플','가족'],nearby_places:[],related_heritage_ids:[],short_description:'은혜 갚은 꿩 전설이 있는 치악산 국립공원을 트레킹하는 체험이다. 구룡사 계곡 코스가 가장 유명하며 가을 단풍 시즌에 계곡과 단풍이 어우러지는 경관이 강원도 최고 수준이다.',source_urls:['https://chiaksan.knps.or.kr/'],data_confidence:'high',tags:['치악산','원주','강원','국립공원','트레킹','구룡사','단풍'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중',phone:'033-740-9900'},
  {experience_id:'EX-GB-SPT-001',name:'경주 양동마을 고택 하룻밤',category_main:'문화/체험',category_sub:'한옥 숙박',region_main:'GB',region_sub:'경상북도 경주시',address:'경상북도 경주시 강동면 양동마을길 93',lat:35.9040,lng:129.2425,price:'1박 60,000원~',duration:'1박 2일',reservation_required:true,target_user:['커플','개인','외국인'],nearby_places:[],related_heritage_ids:[],short_description:'유네스코 세계유산 양동마을 500년 된 고택에서 하룻밤 묵는 체험이다. 500년 이상 유지된 한국 최고(最古) 씨족 마을에서 전통 온돌 생활을 체험하며 양반 문화의 진수를 느낄 수 있다.',source_urls:['https://yangdong.go.kr/'],data_confidence:'high',tags:['양동마을','경주','경북','유네스코','고택숙박','한옥','500년마을'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (예약 필수)',phone:'054-762-6080'},
  {experience_id:'EX-JN-SPT-001',name:'여수 엑스포 해양 공원 야경',category_main:'문화/체험',category_sub:'야경/야간투어',region_main:'JN',region_sub:'전라남도 여수시',address:'전라남도 여수시 박람회길 1 (엑스포 공원)',lat:34.7590,lng:127.6775,price:'무료',duration:'1~2시간',reservation_required:false,target_user:['커플','가족','개인'],nearby_places:[],related_heritage_ids:[],short_description:'2012 여수 세계 박람회 이후 해양 공원으로 탈바꿈한 엑스포 공원의 야경 투어다. 케이블카 야간 탑승과 함께 여수 돌산도·오동도·거문도가 펼쳐지는 남해 야경을 무료로 감상할 수 있다.',source_urls:['https://www.expo2012yeosu.com/'],data_confidence:'high',tags:['여수엑스포','여수','전남','야경','해양공원','케이블카','무료야경'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'10:00~22:00',phone:'061-659-2012'},
  {experience_id:'EX-GJ-CUL-002',name:'광주 518 민주화운동 역사 탐방',category_main:'문화/체험',category_sub:'역사 체험',region_main:'GJ',region_sub:'광주광역시 북구',address:'광주광역시 북구 민주로 200 (5·18 민주묘지)',lat:35.1840,lng:126.9003,price:'무료',duration:'2~3시간',reservation_required:false,target_user:['개인','청년','외국인'],nearby_places:[],related_heritage_ids:[],short_description:'1980년 5·18 민주화운동의 현장을 탐방하는 역사 투어다. 국립5·18민주묘지·5·18 기념공원·전남도청 앞 광장을 걸으며 한국 민주화 역사의 가장 중요한 순간을 직접 체험한다.',source_urls:['https://www.518.org/'],data_confidence:'high',tags:['5·18민주화운동','광주','민주화','역사탐방','국립묘지','전남도청','민주주의'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00 (월요일 휴관)',phone:'062-376-5197'}
];

const newShorts = [
  {
    experience_id:'EX-GW-SKI-003', experience_name:'강원 알펜시아 스키점프대 견학', category_sub:'역사 체험', region:'강원도',
    script_30s:'오늘은 평창 알펜시아 스키점프대 정상에 올라왔어요. 2018 올림픽 선수들이 뛰어내린 곳이에요. 근데 아무도 안 알려주는 게 있어요 — 정상에서 착지 구간까지 내려다보면 아찔해서 다리가 저려요. 선수들이 얼마나 대단한지 알게 돼요. 너무 올림픽 현장이 이렇게 개방되어 있다는 게 좋았습니다.',
    script_60s:'오늘은 강원도 평창 알펜시아 스키점프대 정상에 올라왔어요. 2018 평창동계올림픽 스키점프 경기장이에요. 엘리베이터를 타고 98m 높이 정상에 오르면 선수들이 실제로 뛰어내리던 도약대가 발아래 펼쳐져요. 근데 아무도 안 알려주는 꿀팁 하나 — 정상에 올라가면 도약대 끝에서 착지 구간을 내려다볼 수 있어요. 그 순간 다리가 저릴 정도로 아찔해요. 선수들은 저 높이에서 뛰어내려 시속 90km로 날아가는 건데, 그 각도를 눈으로 보는 순간 올림픽 선수들이 얼마나 대단한지 몸으로 알게 돼요. 뮤지엄 산과 알펜시아를 하루 코스로 묶으면 완벽한 원주·평창 드라이브 코스가 돼요. 너무 올림픽 유산을 직접 서있어서 좋았습니다.',
    secret_tip:'정상 도약대 끝에서 착지 구간 내려다보기 — 다리 저릴 정도로 아찔한 각도 체험. 선수들 도전의 위대함 몸으로 실감. 뮤지엄 산과 세트 코스 추천',
    filming_guide:'도약대 끝에서 착지 구간 내려다보는 시선 (공포 전달). 정상에서 대관령 평원 전체 파노라마. 올림픽 성화대 클로즈업.',
    broll_ideas:['도약대 끝에서 착지 구간 내려다보는 시선','정상 대관령 평원 파노라마','올림픽 성화대 클로즈업','스키점프대 외관 전경','엘리베이터 올라가는 장면'],
    hooks:['스키점프대 정상에서 보면 다리 저려요','올림픽 선수들 얼마나 대단한지 알았어요','2018 평창올림픽 현장이 개방됐어요','98m 높이 도약대 정상 올라갔어요','올림픽 유산 직접 서있는 체험'],
    thumbnails:['도약대 끝 착지 구간 내려다보기','정상 대관령 파노라마','올림픽 성화대 클로즈업','스키점프대 전경','엘리베이터 상승'],
    captions:{youtube:'2018 평창올림픽 스키점프대 정상 — 다리 저려요 ⛷️\n\n도약대 끝에서 착지 구간 내려다보면 선수들 위대함 실감!\n올림픽 현장이 이렇게 개방되어 있어요\n\n📍 강원도 평창 알펜시아 스키점프대\n⛷️ 뮤지엄 산과 세트 드라이브 코스\n\n#알펜시아 #스키점프대 #평창 #2018올림픽 #강원도여행',instagram:'2018 평창올림픽 스키점프대 정상 올라갔어요 ⛷️\n\n도약대 끝에서 내려다보면 다리 저려요 ✨\n선수들이 얼마나 대단한지 알게 돼요\n\n📍 강원 평창 알펜시아\n\n#알펜시아 #스키점프대 #평창 #올림픽 #GemKorea',tiktok:'알펜시아 스키점프대 꿀팁 ⛷️ 정상에서 착지 구간 내려다보면 진짜 다리 저려요! 올림픽 선수들이 얼마나 대단한지 알게 됨 // 2018 평창올림픽 현장 개방 #알펜시아 #스키점프대 #평창여행'},
    hashtags:{korean:['#한국여행','#강원도여행','#평창','#올림픽유산','#GemKorea'],place_specific:['#알펜시아','#스키점프대','#2018평창올림픽','#대관령']}
  },
  {
    experience_id:'EX-SE-SPT-002', experience_name:'서울 LG트윈스 잠실 야구 관람', category_sub:'스포츠 체험', region:'서울특별시',
    script_30s:'오늘은 잠실 야구장에서 프로야구를 봤어요. 한국 야구 응원이 진짜 독특해요. 근데 아무도 안 알려주는 게 있어요 — 응원봉 흔들고 응원가 따라 부르면 외국인도 20분 만에 팬이 돼요. 그 분위기가 스포츠 체험 최고예요. 너무 한국 야구장 응원이 콘서트 같아서 좋았습니다.',
    script_60s:'오늘은 서울 잠실 야구장에서 LG트윈스 홈경기를 봤어요. 한국 프로야구 최고 인기 구장 중 하나예요. 야구 경기 자체도 재밌지만 한국 야구장의 응원 문화가 정말 독특해요. 근데 아무도 안 알려주는 꿀팁 하나 — 야구를 전혀 몰라도 괜찮아요. 응원봉을 사서 옆 사람 따라 흔들고 응원가를 따라 부르면 20분 만에 자연스럽게 팬이 돼요. 치어리더가 이끄는 전 관중 합창, 선수 타석 때마다 나오는 전용 응원가, 홈런 때 터지는 불꽃놀이 — 야구 경기라기보다 콘서트 같아요. 외국인들이 한국에서 가장 좋아하는 체험 중 하나예요. 치킨·맥주·핫도그까지 더하면 완벽해요. 너무 한국 야구장 분위기가 세계 최고라서 좋았습니다.',
    secret_tip:'야구 몰라도 OK — 응원봉 구매 후 옆 사람 따라 흔들면 20분 만에 팬. 치어리더 응원가 QR코드로 가사 볼 수 있음. 외야 응원석이 분위기 가장 뜨거움',
    filming_guide:'전 관중 응원봉 흔드는 파노라마 (야경 포함). 선수 홈런 순간 관중 환호 포착. 치어리더 응원 클로즈업.',
    broll_ideas:['전 관중 응원봉 흔드는 야경 파노라마','홈런 순간 관중 환호','치어리더 응원 클로즈업','치킨과 맥주 먹으며 경기 보는 장면','잠실 야구장 전경 야경'],
    hooks:['야구 몰라도 20분 만에 팬 돼요','한국 야구장이 콘서트 같은 이유','잠실 야구장 응원 문화 진짜 독특해요','치킨+맥주+야구 한국만의 체험','외국인들이 제일 좋아하는 한국 체험'],
    thumbnails:['전 관중 응원봉 야경 파노라마','홈런 순간 환호','치어리더 클로즈업','치킨 맥주 경기 보기','잠실 야구장 야경'],
    captions:{youtube:'잠실 야구장 — 야구 몰라도 20분이면 팬 돼요 ⚾\n\n응원봉+치어리더+응원가 = 한국만의 야구 콘서트!\n외국인들 제일 좋아하는 한국 체험\n\n📍 서울 송파구 잠실 야구장\n⚾ 외야 응원석 분위기 가장 뜨거움\n\n#잠실야구장 #LG트윈스 #서울여행 #야구문화 #응원',instagram:'잠실 야구장 응원봉 흔들었더니 20분 만에 팬 됐어요 ⚾\n\n한국 야구장이 콘서트 같아요 ✨\n치킨+맥주+응원봉\n\n📍 서울 송파 잠실 야구장\n\n#잠실야구장 #LG트윈스 #서울여행 #야구 #GemKorea',tiktok:'잠실 야구장 꿀팁 ⚾ 야구 몰라도 응원봉 사서 옆 사람 따라 흔들면 20분 만에 팬 돼요! 콘서트 같은 응원 문화 // 외국인들 제일 좋아하는 한국 체험 #잠실야구장 #LG트윈스 #서울여행'},
    hashtags:{korean:['#한국여행','#서울여행','#야구문화','#스포츠','#GemKorea'],place_specific:['#잠실야구장','#LG트윈스','#두산베어스','#한국프로야구']}
  },
  {
    experience_id:'EX-GN-AGR-001', experience_name:'하동 야생차 채다 체험', category_sub:'농촌 체험', region:'경상남도',
    script_30s:'오늘은 하동 화개에서 야생차를 따왔어요. 1,200년 된 차나무가 진짜 있어요. 근데 아무도 안 알려주는 게 있어요 — 야생 차나무 잎은 향이 달라요. 농장 차와 야생 차의 향이 완전히 달라요. 너무 1,200년 차나무 잎을 손으로 따는 경험이라서 좋았습니다.',
    script_60s:'오늘은 경남 하동 화개천 변 야생 차밭에 왔어요. 하동은 한국 차의 발원지예요. 828년 신라 흥덕왕 때 당나라에서 가져온 씨앗을 지리산 자락에 심었다는 기록이 있어요. 그 차나무 후손들이 지금도 화개천 변에서 자라고 있어요. 근데 아무도 안 알려주는 꿀팁 하나 — 야생 차나무는 재배 차나무와 향이 완전히 달라요. 비료와 농약 없이 1,000년 넘게 지리산 자연에서 자란 야생 차잎을 따면 그 향이 코를 찌를 정도로 강하고 진해요. 직접 딴 야생 찻잎으로 덖어 우린 차 한 잔의 향이 마트에서 파는 녹차 티백과 비교가 안 돼요. 4~5월 봄 첫 물 차 시즌에 방문하면 가장 좋아요. 너무 1,200년 역사 차나무 잎을 손으로 따는 경험이라서 좋았습니다.',
    secret_tip:'봄 첫 물 차 4~5월 시즌 — 야생 차나무 향이 가장 진하고 강한 시기. 직접 딴 야생 찻잎 덖어 우린 차 향은 마트 녹차와 비교 불가. 섬진강+하동 십리벚꽃길 세트 코스',
    filming_guide:'손으로 찻잎 따는 섬세한 동작 클로즈업. 화개천 변 야생 차밭 전경. 갓 딴 찻잎 향 맡는 표정.',
    broll_ideas:['손으로 찻잎 따는 섬세한 동작 클로즈업','화개천 변 야생 차밭 전경','갓 딴 찻잎 향 맡는 표정','1,200년 수령 야생 차나무 줄기','직접 만든 차 한 잔 색깔 클로즈업'],
    hooks:['1,200년 된 차나무 잎 직접 따봤어요','야생 차와 재배 차 향이 완전 달라요','한국 차의 발원지 하동 화개','봄 4~5월 하동 야생차 꿀타이밍','828년 신라 때 심은 차 후손 잎'],
    thumbnails:['찻잎 따는 손 클로즈업','화개천 변 야생 차밭','갓 딴 찻잎 향 맡는 표정','야생 차나무 줄기','직접 만든 차 색깔'],
    captions:{youtube:'하동 야생차 — 1,200년 차나무 잎 직접 따봤어요 🍵\n\n야생 차와 재배 차 향이 완전히 달라요!\n한국 차 발원지 828년 신라 시대부터\n\n📍 경남 하동군 화개면 야생 차밭\n🍵 4~5월 봄 첫 물 차 시즌이 최고\n\n#하동야생차 #하동 #경남여행 #채다체험 #1200년차나무',instagram:'1,200년 차나무 잎 직접 땄어요 🍵\n\n야생 차향이 재배 차랑 완전 달라요 ✨\n한국 차 발원지 하동 화개\n\n📍 경남 하동 화개 야생 차밭\n\n#하동야생차 #하동여행 #경남 #채다 #GemKorea',tiktok:'하동 야생차 꿀팁 🍵 1,200년 된 차나무 잎 직접 따면 향이 완전 달라요! 마트 녹차랑 비교 불가 // 봄 4~5월 하동 화개 야생 차밭 #하동야생차 #하동여행 #경남여행'},
    hashtags:{korean:['#한국여행','#경남여행','#하동여행','#차문화','#GemKorea'],place_specific:['#하동야생차','#화개','#채다체험','#1200년차나무']}
  },
  {
    experience_id:'EX-GG-AGR-002', experience_name:'파주 딸기 따기 체험', category_sub:'농촌 체험', region:'경기도',
    script_30s:'오늘은 파주 딸기 농장에 왔어요. 비닐하우스 안에서 빨간 딸기를 직접 따요. 근데 아무도 안 알려주는 게 있어요 — 딸기는 꼭지 방향으로 비틀어 따야 해요. 잡아당기면 딸기가 터져요. 그리고 빨간 쪽보다 전체가 빨간 게 더 달아요. 너무 방금 딴 딸기 당도가 다른 차원이라서 좋았습니다.',
    script_60s:'오늘은 경기도 파주 딸기 농장에 왔어요. 12~5월 딸기 시즌에 비닐하우스 안에서 직접 딸기를 따는 체험이에요. 농장에 들어가면 달콤한 딸기 향이 코를 채워요. 빨갛게 잘 익은 딸기를 직접 따서 바로 먹는 그 당도가 마트 딸기와 완전히 달라요. 근데 아무도 안 알려주는 꿀팁 하나 — 딸기 따는 방법이 있어요. 꼭지 방향으로 비틀면서 따야 해요. 그냥 잡아당기면 딸기가 찌그러지거나 터져요. 그리고 딸기 색 고르는 방법도 있어요. 끝부분만 빨간 게 아니라 전체가 균일하게 빨갛고 꼭지 주변까지 색이 들어간 게 당도가 더 높아요. 이 두 가지만 알고 가면 최고의 딸기를 골라 딸 수 있어요. 너무 비닐하우스 안 딸기 향이 진짜라서 좋았습니다.',
    secret_tip:'딸기 고르는 법 — 전체 균일하게 빨갛고 꼭지 주변까지 색 들어간 것이 당도 최고. 따는 법 — 꼭지 방향 비틀기 (잡아당기면 터짐). 이 두 가지로 최고 딸기 수확',
    filming_guide:'비닐하우스 빨간 딸기 가득 전경 광각. 꼭지 방향 비틀어 따는 손 동작 클로즈업. 방금 딴 딸기 한 입 베어무는 순간.',
    broll_ideas:['비닐하우스 빨간 딸기 가득 전경','꼭지 방향 비틀어 따는 손 클로즈업','방금 딴 딸기 한 입 베어무는 순간','아이들 딸기 바구니 들고 표정','딸기 전체 균일 빨간 색 선택법'],
    hooks:['딸기 따는 방법이 따로 있어요','전체 빨간 딸기가 더 단 이유','파주 비닐하우스 딸기 향 진짜 달라요','방금 딴 딸기 당도 마트랑 비교 안 돼','딸기 고르는 꿀팁 알려드려요'],
    thumbnails:['비닐하우스 딸기 전경','꼭지 방향 비틀어 따기','딸기 한 입 베어무는 순간','아이들 바구니 표정','균일 빨간 딸기 선택'],
    captions:{youtube:'파주 딸기 따기 — 따는 방법이랑 고르는 법 있어요 🍓\n\n꼭지 방향 비틀기 + 전체 균일 빨간 것 선택!\n비닐하우스 안 딸기 당도가 마트랑 달라요\n\n📍 경기도 파주시 딸기 농장\n🍓 시즌: 12~5월\n\n#파주딸기 #딸기따기 #경기여행 #농촌체험 #가족체험',instagram:'파주 딸기 따기 — 방법이 있어요 🍓\n\n꼭지 방향 비틀기 + 전체 균일 빨간 것 선택 ✨\n비닐하우스 안 딸기 향 진짜 달라요\n\n📍 경기 파주 딸기 농장\n\n#파주딸기 #딸기따기 #경기여행 #GemKorea',tiktok:'파주 딸기 꿀팁 🍓 꼭지 방향으로 비틀어야 해요 잡아당기면 터져요! 전체 균일하게 빨간 게 더 달아요 // 방금 딴 딸기 당도 마트랑 비교 불가 #파주딸기 #딸기따기 #경기여행'},
    hashtags:{korean:['#한국여행','#경기여행','#파주여행','#농촌체험','#GemKorea'],place_specific:['#파주딸기','#딸기따기','#딸기농장','#딸기고르는법']}
  },
  {
    experience_id:'EX-GB-SPT-001', experience_name:'경주 양동마을 고택 하룻밤', category_sub:'한옥 숙박', region:'경상북도',
    script_30s:'오늘은 경주 양동마을 500년 고택에서 하룻밤 묵었어요. 유네스코 세계유산 마을이에요. 근데 아무도 안 알려주는 게 있어요 — 새벽에 마을 전체를 혼자 걸을 수 있어요. 500년 동안 바뀌지 않은 풍경이 새벽빛에 물드는 그 순간이에요. 너무 시간이 멈춘 마을 같아서 좋았습니다.',
    script_60s:'오늘은 경북 경주 양동마을 고택에서 하룻밤을 묵었어요. 유네스코 세계유산 양동마을은 조선 시대부터 500년 이상 씨족 마을이 유지된 한국 최고(最古)의 양반 마을이에요. 월성 손씨와 여강 이씨가 지금도 살고 있어요. 고택 숙박은 실제 후손 가족이 운영하는 경우도 있어요. 근데 아무도 안 알려주는 꿀팁 하나 — 관광객들이 다 돌아간 저녁부터 다음 날 아침까지 마을 전체가 투숙객만의 공간이 돼요. 새벽 6시 마을을 혼자 걸으면 500년 전 그대로인 기와집들이 아침빛에 물들어요. 닭 우는 소리, 기와지붕 위 이슬이 반짝이는 그 모습이 진짜 조선 시대 양반 마을 같아요. 낮에 오는 관광객들이 절대 볼 수 없는 그 새벽이에요. 너무 500년이 그대로인 마을 새벽이라서 좋았습니다.',
    secret_tip:'저녁~아침 투숙객 전용 마을 — 새벽 6시 기와지붕 이슬+아침빛이 500년 양반 마을 그대로. 낮 관광객이 볼 수 없는 장면. 월성 손씨·여강 이씨 후손 가족 운영 고택 추천',
    filming_guide:'새벽 기와지붕 이슬 반짝이는 클로즈업. 혼자 걷는 마을 골목 조용한 새벽 광각. 고택 마당 아침빛.',
    broll_ideas:['새벽 기와지붕 이슬 반짝이는 클로즈업','혼자 걷는 마을 골목 새벽 광각','고택 마당 아침빛 온돌방','500년 된 기와집 질감 클로즈업','양동마을 전체 조망 새벽 안개'],
    hooks:['500년 된 양반 마을 새벽을 혼자 걸었어요','유네스코 마을 고택에서 하룻밤','낮 관광객이 절대 못 보는 그 새벽','기와지붕 이슬이 반짝이는 그 순간','조선 시대 그대로인 마을 새벽'],
    thumbnails:['새벽 기와지붕 이슬 반짝이기','혼자 걷는 골목 새벽','고택 마당 아침빛','500년 기와집 질감','양동마을 새벽 안개 조망'],
    captions:{youtube:'경주 양동마을 고택 새벽 — 500년이 그대로예요 🏯\n\n새벽 혼자 걷는 유네스코 양반 마을!\n낮 관광객이 절대 못 보는 그 시간\n\n📍 경북 경주시 강동면 양동마을\n🏯 고택 숙박으로 새벽 마을 독점\n\n#양동마을 #경주고택 #경북여행 #유네스코 #한옥숙박',instagram:'경주 양동마을 새벽 6시 혼자 걸었어요 🏯\n\n500년 기와지붕 이슬이 반짝이는 그 순간 ✨\n낮 관광객이 볼 수 없는 유네스코 마을 새벽\n\n📍 경북 경주 양동마을\n\n#양동마을 #경주고택 #경북여행 #유네스코 #GemKorea',tiktok:'양동마을 꿀팁 🏯 고택 숙박하면 새벽 마을 혼자 다 가져요! 500년 기와지붕 이슬 반짝이는 그 새벽 // 낮 관광객 절대 못 보는 장면 #양동마을 #경주여행 #고택숙박 #유네스코'},
    hashtags:{korean:['#한국여행','#경북여행','#경주여행','#한옥숙박','#GemKorea'],place_specific:['#양동마을','#경주고택','#유네스코양반마을','#500년마을']}
  },
  {
    experience_id:'EX-JN-SPT-001', experience_name:'여수 엑스포 해양 공원 야경', category_sub:'야경/야간투어', region:'전라남도',
    script_30s:'오늘은 여수 엑스포 공원 야경을 봤어요. 2012 세계박람회 이후 해양 공원이 됐어요. 근데 아무도 안 알려주는 게 있어요 — 빅오 수상 공연 분수가 무료예요. 물 위에 영상이 투영되는 쇼인데 진짜 볼만해요. 너무 무료로 이 퀄리티라서 좋았습니다.',
    script_60s:'오늘은 전남 여수 엑스포 해양 공원 야경을 봤어요. 2012 여수 세계박람회 이후 공원으로 탈바꿈한 곳이에요. 여수 해안을 따라 야경이 펼쳐지는데 돌산도·오동도·남해 다도해가 한눈에 들어와요. 근데 아무도 안 알려주는 꿀팁 하나 — 엑스포 공원 안에 빅오 수상 공연이 있어요. 바다 위 원형 무대에 물·불·영상이 투영되는 미디어아트 공연인데 일정 시간에 무료로 운영돼요. 그리고 해양케이블카를 타면 여수 앞바다와 돌산도를 거미줄처럼 연결된 투명 바닥 케이블카로 건너갈 수 있어요. 밤에는 케이블카 안에서 여수 야경이 발아래 펼쳐져요. 여수 밤바다 노래가 생각나는 그 풍경이에요. 너무 무료 빅오 공연 퀄리티가 기대 이상이라서 좋았습니다.',
    secret_tip:'빅오 수상 공연 무료 운영 — 바다 위 물·불·영상 미디어아트 쇼. 운영 시간 엑스포 공원 홈페이지 확인. 해양케이블카 야간 탑승 = 발아래 여수 야경. 여수 밤바다 노래 배경지',
    filming_guide:'빅오 수상 공연 물과 불 미디어아트 촬영. 해양케이블카 투명 바닥 아래 바다 촬영. 여수 다도해 야경 파노라마.',
    broll_ideas:['빅오 수상 공연 물·불·영상 미디어아트','해양케이블카 투명 바닥 아래 여수 야경','돌산도·오동도 여수 다도해 파노라마','엑스포 공원 야경 전체 광각','여수 밤바다 노래 배경지 조망'],
    hooks:['여수 엑스포 빅오 공연 무료예요','바다 위 미디어아트 쇼 아는 사람?','케이블카 투명 바닥 아래 여수 야경','여수 밤바다 노래 배경지 야경','2012 박람회 이후 무료 야경 공원'],
    thumbnails:['빅오 수상 공연 미디어아트','케이블카 투명 바닥 아래 야경','여수 다도해 야경 파노라마','엑스포 공원 야경 전체','여수 밤바다 배경지'],
    captions:{youtube:'여수 엑스포 공원 빅오 수상 공연 무료예요 🌊\n\n바다 위 물·불·영상 미디어아트 쇼!\n해양케이블카 야경까지 여수 야경 완성\n\n📍 전남 여수시 엑스포 해양 공원\n🌊 빅오 공연 무료 (시간표 홈페이지 확인)\n\n#여수엑스포 #여수야경 #빅오공연 #전남여행 #여수밤바다',instagram:'여수 엑스포 빅오 수상 공연 무료예요 🌊\n\n바다 위 물·불·영상 미디어아트 진짜 볼만해요 ✨\n케이블카 야경까지\n\n📍 전남 여수 엑스포 공원\n\n#여수엑스포 #빅오공연 #여수야경 #GemKorea',tiktok:'여수 엑스포 꿀팁 🌊 빅오 수상 공연이 무료예요! 바다 위 물·불·영상 쇼인데 퀄리티 미침 // 해양케이블카 야경까지 여수 야경 완성 #여수엑스포 #빅오공연 #여수야경 #전남여행'},
    hashtags:{korean:['#한국여행','#전남여행','#여수여행','#야경명소','#GemKorea'],place_specific:['#여수엑스포','#빅오공연','#여수야경','#해양케이블카']}
  },
  {
    experience_id:'EX-GJ-CUL-002', experience_name:'광주 518 민주화운동 역사 탐방', category_sub:'역사 체험', region:'광주광역시',
    script_30s:'오늘은 광주 5·18 민주묘지에 왔어요. 1980년 민주화운동 현장이에요. 근데 아무도 안 알려주는 게 있어요 — 묘비 하나하나에 이름과 나이가 적혀있어요. 20살 이름을 보는 그 순간 역사가 숫자가 아닌 사람이 돼요. 너무 역사를 몸으로 느낀 순간이라서 좋았습니다.',
    script_60s:'오늘은 광주 국립5·18민주묘지에 왔어요. 1980년 5월 18일부터 27일까지 광주에서 일어난 민주화운동의 현장이에요. 군부 독재에 맞서 싸운 시민들이 잠든 곳이에요. 탑비에 새겨진 역사 기록과 함께 묘지를 천천히 걸어보면 교과서로 배운 역사와 완전히 달라요. 근데 아무도 안 알려주는 꿀팁 하나 — 묘비를 하나씩 읽어보면 이름과 사망 당시 나이가 적혀있어요. 19살·20살·22살 이름들을 하나씩 보는 그 순간 역사가 통계나 숫자가 아니라 실제 살았던 사람이 돼요. 그 순간이 가장 마음에 남아요. 전남도청 앞 광장도 꼭 가봐야 해요. 지금도 그 자리에 서있으면 1980년 5월의 공기가 느껴지는 것 같아요. 너무 역사가 살아있는 장소가 이런 것이구나 싶어서 좋았습니다.',
    secret_tip:'묘비 이름과 나이 하나씩 읽기 — 19살·20살 이름 볼 때 역사가 사람이 되는 순간. 전남도청 앞 광장도 필수. 역사 해설 프로그램 신청 시 더 깊은 이해 가능',
    filming_guide:'묘비 이름과 나이 클로즈업 (조심스럽게). 전남도청 앞 광장 광각. 5·18 기념공원 탑비 전체 촬영.',
    broll_ideas:['묘비 이름과 나이 클로즈업 (조심)','전남도청 앞 광장 광각','5·18 기념공원 탑비 전체','국립5·18민주묘지 전경','역사관 내부 1980년 5월 사진자료'],
    hooks:['묘비 20살 이름을 보는 그 순간','역사가 사람이 되는 그 순간 알아요?','1980년 5월 광주를 직접 걸었어요','교과서랑 완전 다른 현장 역사 탐방','전남도청 앞 광장에 서면 느껴지는 것'],
    thumbnails:['묘비 이름과 나이 클로즈업','전남도청 앞 광장 광각','5·18 탑비 전체','국립묘지 전경','역사관 1980년 사진자료'],
    captions:{youtube:'광주 5·18 — 묘비 20살 이름 보는 그 순간 역사가 사람이 돼요 🕊️\n\n교과서랑 완전 다른 현장 역사 탐방\n전남도청 앞 광장도 필수\n\n📍 광주 북구 국립5·18민주묘지\n🕊️ 역사 해설 프로그램 신청 가능\n\n#5·18민주화운동 #광주여행 #역사탐방 #민주화 #광주',instagram:'광주 5·18 묘비 20살 이름을 봤어요 🕊️\n\n역사가 숫자가 아닌 사람이 되는 그 순간 ✨\n현장에서 느끼는 게 교과서랑 달라요\n\n📍 광주 국립5·18민주묘지\n\n#5·18민주화운동 #광주여행 #역사 #GemKorea',tiktok:'광주 5·18 꿀팁 🕊️ 묘비 이름과 나이를 하나씩 읽어보세요. 20살 이름 보는 순간 역사가 사람이 돼요 // 교과서랑 완전 다른 현장 역사 체험 #5·18 #광주여행 #역사탐방'},
    hashtags:{korean:['#한국여행','#광주여행','#역사여행','#민주화','#GemKorea'],place_specific:['#5·18민주화운동','#국립5·18민주묘지','#전남도청','#광주민주화']}
  },
  // 기존 waiting
  {
    experience_id:'EX-GN-VIL-001', experience_name:'남해 독일마을', category_sub:'체험마을', region:'경상남도',
    script_30s:'오늘은 남해 독일마을에 왔어요. 1960~70년대 서독 파견 광부·간호사들이 만든 마을이에요. 근데 아무도 안 알려주는 게 있어요 — 마을 위에서 내려다보는 남해 다도해 뷰가 독일보다 예뻐요. 독일 건물에서 남해 바다가 보이는 그 조합이 세계에서 여기뿐이에요. 너무 한국 현대사가 담긴 마을이라서 좋았습니다.',
    script_60s:'오늘은 경남 남해 독일마을에 왔어요. 1960~70년대 경제 개발 시기 서독으로 파견됐던 한국 광부·간호사들이 귀국 후 이 남해 언덕에 모여 지은 독일식 마을이에요. 독일에서 살다 온 어르신들이 고향 그리움으로 독일 건물 양식으로 집을 지었어요. 독일식 붉은 지붕과 남해 푸른 바다가 함께 보이는 풍경이 독특해요. 근데 아무도 안 알려주는 꿀팁 하나 — 독일마을 언덕 꼭대기에 올라가면 남해 다도해 전체가 파노라마로 펼쳐져요. 독일식 건물들 사이로 한려해상국립공원 섬들이 보이는 그 구도가 세계에서 이곳밖에 없어요. 옥토버페스트도 매년 10월에 열려요. 너무 한국 현대사의 눈물과 그리움으로 만들어진 마을이라는 게 감동적이라서 좋았습니다.',
    secret_tip:'독일마을 언덕 꼭대기 — 독일식 붉은 지붕+남해 다도해 파노라마. 세계 유일 조합. 1960~70년대 파독 광부·간호사 어르신들 이야기 들으면 역사가 됨. 10월 옥토버페스트',
    filming_guide:'독일식 붉은 지붕과 남해 다도해 동시 구도. 독일마을 어르신 인터뷰 (허락 시). 언덕 꼭대기 파노라마.',
    broll_ideas:['독일 붉은 지붕과 남해 다도해 동시 구도','언덕 꼭대기 파노라마 광각','독일식 건물 외관 클로즈업','남해 바다 배경 독일 국기','마을 어르신 마당 풍경'],
    hooks:['독일 건물에서 남해 바다 보이는 곳','세계에서 이곳밖에 없는 그 조합','파독 광부·간호사의 그리움으로 만든 마을','독일마을 꼭대기 뷰 아는 사람?','한국 현대사 눈물이 담긴 마을'],
    thumbnails:['독일 붉은 지붕+남해 다도해 구도','꼭대기 파노라마 광각','독일식 건물 클로즈업','남해 배경 독일 국기','마을 어르신 마당'],
    captions:{youtube:'남해 독일마을 — 독일 건물에서 남해 다도해 보여요 🇩🇪\n\n세계에서 이 조합은 여기뿐!\n파독 광부·간호사 그리움으로 만든 마을\n\n📍 경남 남해군 삼동면 독일마을\n🇩🇪 10월 옥토버페스트 행사 있음\n\n#남해독일마을 #남해 #경남여행 #파독 #다도해뷰',instagram:'남해 독일마을 꼭대기 — 독일 건물에서 다도해 보여요 🇩🇪\n\n세계에서 이 조합 여기뿐이에요 ✨\n파독 광부·간호사들이 만든 마을\n\n📍 경남 남해 독일마을\n\n#남해독일마을 #남해여행 #경남 #파독 #GemKorea',tiktok:'남해 독일마을 꿀팁 🇩🇪 꼭대기 올라가면 독일 건물에서 남해 다도해 다 보여요! 세계에서 이 조합 여기뿐 // 파독 광부·간호사들이 그리움으로 만든 마을 #남해독일마을 #남해여행 #경남'},
    hashtags:{korean:['#한국여행','#경남여행','#남해여행','#역사여행','#GemKorea'],place_specific:['#남해독일마을','#파독광부','#다도해뷰','#독일마을꼭대기']}
  },
  {
    experience_id:'EX-GW-FUD-001', experience_name:'속초 아바이마을 순대골목', category_sub:'지역 먹거리', region:'강원도',
    script_30s:'오늘은 속초 아바이마을에 왔어요. 6·25 전쟁 피란민들이 만든 마을이에요. 근데 아무도 안 알려주는 게 있어요 — 갯배라는 배로 들어가야 해요. 줄 잡고 손으로 당겨서 건너는 배예요. 그 배가 마을의 역사예요. 너무 피란민 역사가 음식이 된 마을이라서 좋았습니다.',
    script_60s:'오늘은 강원도 속초 아바이마을에 왔어요. 6·25 전쟁 때 함경도 피란민들이 고향으로 돌아가지 못하고 이 청호동 해안가에 정착해 만든 마을이에요. 아바이는 함경도 방언으로 아버지를 뜻해요. 드라마 가을동화 촬영지로 유명하지만 사실 역사가 더 중요한 마을이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 아바이마을은 갯배를 타고 들어가야 해요. 갯배는 줄에 연결된 작은 배인데 사람들이 직접 손으로 줄을 당겨서 건너요. 속초 항구 반대편까지 300원이에요. 이 갯배 자체가 70년 역사의 이동 수단이에요. 배를 타면서 피란민 어르신들이 왜 아직도 이 마을을 떠나지 못하는지 느껴져요. 마을 안의 오징어순대·아바이순대는 함경도 음식이에요. 너무 피란민의 그리움이 음식이 된 마을이라서 좋았습니다.',
    secret_tip:'갯배 300원 — 손으로 줄 당겨서 건너는 70년 역사 이동 수단. 갯배 자체가 마을 역사 상징. 오징어순대·아바이순대는 함경도 피란민 음식. 드라마 가을동화 촬영지',
    filming_guide:'갯배 줄 당기는 손 동작 클로즈업. 300원 동전 갯배 요금 촬영. 아바이마을 순대 클로즈업.',
    broll_ideas:['갯배 줄 당기는 손 동작','갯배 탑승 장면과 속초 항구 배경','오징어순대 아바이순대 클로즈업','아바이마을 골목 옛날 분위기','속초 청호 갯배 선착장'],
    hooks:['갯배 300원 70년 역사 이동 수단이에요','손으로 줄 당기는 배 타봤어요?','피란민 음식이 속초 대표 먹거리가 됐어요','아바이마을이 갯배로 들어간다는 거 알아요?','가을동화 촬영지 진짜 역사는 이거예요'],
    thumbnails:['갯배 줄 당기는 손','갯배 탑승 속초 항구 배경','오징어순대 클로즈업','아바이마을 골목','청호 갯배 선착장'],
    captions:{youtube:'속초 아바이마을 — 갯배 300원 70년 역사예요 ⛵\n\n손으로 줄 당겨서 건너는 배!\n피란민 그리움이 음식이 된 마을\n\n📍 강원도 속초시 청호동 아바이마을\n⛵ 갯배 300원 / 오징어순대·아바이순대 필수\n\n#아바이마을 #속초 #갯배 #강원도여행 #피란민역사',instagram:'속초 아바이마을 갯배 300원에 탔어요 ⛵\n\n손으로 줄 당기는 70년 역사 이동 수단 ✨\n피란민 그리움이 음식이 된 마을\n\n📍 강원 속초 아바이마을\n\n#아바이마을 #속초여행 #갯배 #GemKorea',tiktok:'아바이마을 꿀팁 ⛵ 갯배 300원에 손으로 줄 당겨서 건너요! 70년 역사 이동 수단 // 피란민 그리움이 오징어순대가 된 마을 #아바이마을 #속초여행 #갯배 #강원도'},
    hashtags:{korean:['#한국여행','#강원도여행','#속초여행','#피란민역사','#GemKorea'],place_specific:['#아바이마을','#갯배','#오징어순대','#속초아바이순대']}
  },
  {
    experience_id:'EX-BS-LCL-001', experience_name:'부산 영도다리', category_sub:'역사 체험', region:'부산광역시',
    script_30s:'오늘은 부산 영도다리에 왔어요. 6·25 전쟁 피란민 이산가족 만남의 다리예요. 근데 아무도 안 알려주는 게 있어요 — 지금도 매일 오후 2시에 다리가 들려요. 90년 전부터 이어진 의식이에요. 그 순간이 부산 역사의 심장 소리예요. 너무 다리가 들리는 그 2분이 감동이라서 좋았습니다.',
    script_60s:'오늘은 부산 영도다리에 왔어요. 1934년 건설된 한국 최초 도개교(들어올리는 다리)예요. 6·25 전쟁 때 남북 이산가족들이 "영도다리에서 만나자"고 약속하고 헤어진 이산의 다리예요. 영도다리 아래 천막에서 가족을 기다리던 피란민들의 이야기가 있어요. 근데 아무도 안 알려주는 꿀팁 하나 — 지금도 매일 오후 2시에 다리가 들려요. 교각을 올려서 배가 통과하게 하는 도개 행사인데 약 2분간 진행돼요. 1934년부터 이어온 의식이에요. 이 순간 다리 위에서 보는 뷰와 다리 아래서 올려다보는 뷰가 완전히 달라요. 이산가족들이 기다리던 그 다리가 여전히 매일 들리는 거예요. 너무 90년 이어진 그 의식이 감동적이라서 좋았습니다.',
    secret_tip:'매일 오후 2시 도개 행사 — 2분간 다리가 들리는 90년 역사 의식. 다리 아래 영도쪽 수변에서 올려다보는 구도가 최고. 남포동 자갈치시장과 세트 코스',
    filming_guide:'오후 2시 다리 들리는 순간 타임랩스. 다리 아래서 올려다보는 구도 (들릴 때). 이산가족 만남 표지판 클로즈업.',
    broll_ideas:['오후 2시 다리 들리는 순간 타임랩스','다리 아래서 올려다보는 도개 장면','이산가족 만남 영도다리 안내판','영도다리와 부산항 전경','1934년 개통 당시 사진 전시물'],
    hooks:['영도다리가 매일 오후 2시에 들려요','90년 이어진 그 의식이 아직 살아있어요','이산가족 만남의 다리가 여기예요','한국 최초 도개교 2분간 들리는 순간','영도다리 아래서 올려다보는 구도'],
    thumbnails:['다리 들리는 순간 타임랩스','아래서 올려다보는 도개 장면','이산가족 안내판','영도다리 부산항 전경','1934년 개통 사진'],
    captions:{youtube:'부산 영도다리 매일 오후 2시에 들려요 🌉\n\n90년 이어진 의식 — 이산가족 만남의 다리!\n2분간 들리는 그 순간이 부산 역사예요\n\n📍 부산 중구 영도다리\n🌉 매일 오후 2시 도개 행사\n💡 다리 아래서 올려다보는 구도가 최고\n\n#영도다리 #부산여행 #도개교 #이산가족 #부산역사',instagram:'부산 영도다리 매일 오후 2시에 들려요 🌉\n\n90년 이어진 이산가족 만남의 다리 ✨\n2분 그 순간이 부산 역사 심장 소리\n\n📍 부산 중구 영도다리\n\n#영도다리 #부산여행 #도개교 #GemKorea',tiktok:'영도다리 꿀팁 🌉 매일 오후 2시에 다리가 들려요! 90년 역사 의식 // 이산가족 만남의 다리가 여전히 하루 한 번 들리는 거예요 #영도다리 #부산여행 #도개교 #이산가족'},
    hashtags:{korean:['#한국여행','#부산여행','#역사여행','#이산가족','#GemKorea'],place_specific:['#영도다리','#도개교','#오후2시도개','#부산역사']}
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
