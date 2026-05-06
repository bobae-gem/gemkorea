const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';

const raw = [
  {name:'서울 광장시장',category_main:'문화/체험',category_sub:'전통시장',category_detail:'1905년 개설 대한민국 최초 상설시장',period:'현대',period_category:'현대',region:'서울특별시',address:'서울특별시 종로구 창경궁로 88',location_marker_type:'entrance',lat:37.5699,lng:126.9993,short_description:'1905년 개설된 대한민국 최초의 상설시장. 마약김밥·빈대떡·육회 등 먹거리가 유명하며 종로5가역 인근에 위치해 종묘·창덕궁과 함께 둘러볼 수 있는 서울 대표 전통시장이다.',source_urls:['https://korean.visitkorea.or.kr/'],data_confidence:'high',tags:['전통시장','먹거리','마약김밥','빈대떡','종로','서울']},
  {name:'부산 자갈치시장',category_main:'문화/체험',category_sub:'전통시장',category_detail:'한국 최대 어시장',period:'현대',period_category:'현대',region:'부산광역시',address:'부산광역시 중구 자갈치해안로 52',location_marker_type:'entrance',lat:35.0972,lng:129.0297,short_description:'한국 최대 어시장으로 싱싱한 활어회와 해산물을 저렴하게 즐길 수 있는 부산의 상징적 시장. 실내 현대식 시장과 야외 전통시장이 공존하며 남포역에서 도보로 이동 가능하다.',source_urls:['https://korean.visitkorea.or.kr/'],data_confidence:'high',tags:['어시장','활어회','해산물','부산','자갈치','남포동']},
  {name:'전주 남부시장 야시장',category_main:'문화/체험',category_sub:'전통시장',category_detail:'금·토요일 저녁 운영 야시장',period:'현대',period_category:'현대',region:'전라북도',address:'전라북도 전주시 완산구 풍남문1길 19-3',location_marker_type:'entrance',lat:35.8136,lng:127.1488,short_description:'매주 금·토요일 오후 5시부터 밤 11시까지 열리는 야시장. 피순대·녹두전·비빔밥 롤 등 전주 먹거리와 예술 상품이 가득하며 전주 한옥마을과 인접해 함께 즐길 수 있다.',source_urls:['https://korean.visitkorea.or.kr/'],data_confidence:'high',tags:['야시장','전주','한옥마을','먹거리','금토운영']},
  {name:'통영 중앙전통시장',category_main:'문화/체험',category_sub:'전통시장',category_detail:'통영항 인근 해산물 전문 시장',period:'현대',period_category:'현대',region:'경상남도',address:'경상남도 통영시 중앙시장1길 14-16',location_marker_type:'entrance',lat:34.8544,lng:128.4337,short_description:'통영항 인근 대표 해산물 시장. 활어회를 저렴하게 즐길 수 있으며 충무김밥·꿀빵 거리와 인접해 있다. 동피랑 벽화마을과 함께 묶어 여행하기 좋은 코스다.',source_urls:['https://korean.visitkorea.or.kr/'],data_confidence:'high',tags:['어시장','해산물','통영','충무김밥','꿀빵','동피랑']},
  {name:'강릉 중앙시장',category_main:'문화/체험',category_sub:'전통시장',category_detail:'강릉 도심 대표 전통시장 314개 점포',period:'현대',period_category:'현대',region:'강원도',address:'강원특별자치도 강릉시 금성로 21',location_marker_type:'entrance',lat:37.7521,lng:128.8764,short_description:'강릉 성남동 일대에 자리한 전통시장으로 314개 점포가 밀집해 있다. 오징어순대·물회·닭강정 등 강릉 특산 먹거리와 신선한 해산물을 저렴하게 즐길 수 있는 로컬 시장이다.',source_urls:['https://korean.visitkorea.or.kr/'],data_confidence:'high',tags:['전통시장','강릉','오징어순대','닭강정','물회','강원']},
  {name:'국립중앙박물관',category_main:'문화/체험',category_sub:'박물관',category_detail:'대한민국 최대 국립박물관, 무료관람',period:'현대',period_category:'현대',region:'서울특별시',address:'서울특별시 용산구 서빙고로 137',location_marker_type:'entrance',lat:37.5237,lng:126.9808,short_description:'한국 최대 규모의 국립박물관으로 선사시대부터 근현대까지 약 40만 점의 유물을 소장하고 있다. 무료 관람이 가능하며 이촌역에서 무빙워크로 연결되어 접근이 편리하다.',source_urls:['https://www.museum.go.kr/'],data_confidence:'high',tags:['박물관','무료관람','용산','서울','역사','문화재']},
  {name:'국립민속박물관',category_main:'문화/체험',category_sub:'박물관',category_detail:'경복궁 내 한국 민속생활 전문 박물관',period:'현대',period_category:'현대',region:'서울특별시',address:'서울특별시 종로구 삼청로 37',location_marker_type:'exact',lat:37.5796,lng:126.9784,short_description:'경복궁 내에 자리한 한국 민속 전문 박물관으로 무료 입장이 가능하다. 의식주·일생·세시풍속 등 한국인의 전통 생활문화를 생생하게 전시하며 어린이박물관도 함께 운영한다.',source_urls:['https://www.nfm.go.kr/'],data_confidence:'high',tags:['박물관','민속','경복궁','무료관람','전통문화','종로']},
  {name:'리움미술관',category_main:'문화/체험',category_sub:'미술관',category_detail:'삼성문화재단 사립미술관, 고미술+현대미술',period:'현대',period_category:'현대',region:'서울특별시',address:'서울특별시 용산구 이태원로55길 60-16',location_marker_type:'entrance',lat:37.5383,lng:126.9983,short_description:'삼성문화재단이 운영하는 세계적 수준의 사립미술관. 한국 고미술과 현대미술 컬렉션을 소장하며 마리오 보타·장 누벨·렘 콜하스가 설계한 3개 건축물 자체도 볼거리다.',source_urls:['https://www.leeumhoam.org/'],data_confidence:'high',tags:['미술관','현대미술','고미술','용산','이태원','서울']},
  {name:'국립현대미술관 과천',category_main:'문화/체험',category_sub:'미술관',category_detail:'과천 서울대공원 내 국립현대미술관 본관',period:'현대',period_category:'현대',region:'경기도',address:'경기도 과천시 광명로 313',location_marker_type:'entrance',lat:37.4274,lng:126.9840,short_description:'서울대공원 내 위치한 국립현대미술관 본관. 조각공원과 어우러진 자연친화적 환경에서 한국 현대미술의 흐름을 폭넓게 감상할 수 있으며 대공원역에서 도보로 접근 가능하다.',source_urls:['https://www.mmca.go.kr/'],data_confidence:'high',tags:['미술관','현대미술','과천','서울대공원','조각공원']},
  {name:'부산시립미술관',category_main:'문화/체험',category_sub:'미술관',category_detail:'해운대 BEXCO 인근, 이우환 공간 보유',period:'현대',period_category:'현대',region:'부산광역시',address:'부산광역시 해운대구 APEC로 58',location_marker_type:'entrance',lat:35.1693,lng:129.1317,short_description:'BEXCO 옆에 자리한 부산의 대표 시립미술관. 현대미술 기획전과 이우환 전용 공간을 운영하며 도시철도 2호선 벡스코역에서 도보 5분 거리에 위치한다.',source_urls:['https://art.busan.go.kr/'],data_confidence:'high',tags:['미술관','현대미술','부산','해운대','이우환','BEXCO']},
  {name:'서울 인사동 전통문화거리',category_main:'문화/체험',category_sub:'전통음식 체험',category_detail:'한국 제1호 문화지구, 화랑·공예·찻집 밀집',period:'현대',period_category:'현대',region:'서울특별시',address:'서울특별시 종로구 인사동길 일대',location_marker_type:'entrance',lat:37.5742,lng:126.9856,short_description:'2002년 한국 제1호 문화지구로 지정된 전통문화 거리. 화랑·공예품점·전통찻집·고미술상이 밀집해 있으며 주말에는 차 없는 거리로 운영되어 거리 공연과 공예 체험을 즐길 수 있다.',source_urls:['https://korean.visitkorea.or.kr/'],data_confidence:'high',tags:['인사동','전통문화','공예','화랑','찻집','종로','서울']},
  {name:'전주 한옥마을 한복체험',category_main:'문화/체험',category_sub:'한복 체험',category_detail:'160여 곳 한복대여점, 한옥마을 거리 체험',period:'현대',period_category:'현대',region:'전라북도',address:'전라북도 전주시 완산구 은행로 일대',location_marker_type:'entrance',lat:35.8153,lng:127.1530,short_description:'전주 한옥마을 내 160여 곳의 한복대여점에서 전통·개량한복을 빌려 고즈넉한 한옥 골목을 거닐 수 있다. 전동성당·풍남문·오목대 등 인근 명소와 함께 사진 촬영 명소로 인기가 높다.',source_urls:['https://hanok.jeonju.go.kr/'],data_confidence:'high',tags:['한복체험','한복대여','전주','한옥마을','전통문화']},
  {name:'경주 교촌마을 한복체험',category_main:'문화/체험',category_sub:'한복 체험',category_detail:'황리단길 일대 신라 복식·한복 체험',period:'현대',period_category:'현대',region:'경상북도',address:'경상북도 경주시 교촌길 39-2',location_marker_type:'entrance',lat:35.8363,lng:129.2113,short_description:'경주 교촌마을과 황리단길 일대에서 신라 전통 복식 및 한복을 빌려 입고 월정교·첨성대·대릉원 등 신라 문화유산을 배경으로 체험하는 인기 여행 코스다.',source_urls:['https://korean.visitkorea.or.kr/'],data_confidence:'high',tags:['한복체험','경주','교촌마을','황리단길','신라','경북']},
  {name:'안동 하회마을 탈춤체험',category_main:'문화/체험',category_sub:'탈춤/풍물 체험',category_detail:'하회별신굿탈놀이 상설 공연·체험, 화~일 오후2시',period:'현대',period_category:'현대',region:'경상북도',address:'경상북도 안동시 풍천면 전서로 186',location_marker_type:'entrance',lat:36.5388,lng:128.5202,short_description:'유네스코 세계문화유산인 하회마을에서 매주 상설 공연되는 하회별신굿탈놀이를 감상하고 탈춤을 직접 체험할 수 있다. 매주 화~일 오후 2시 무료 관람 가능하다.',source_urls:['http://www.hahoe.or.kr/'],data_confidence:'high',tags:['탈춤','하회마을','안동','유네스코','하회별신굿탈놀이','경북']},
  {name:'서울 북촌 공방거리',category_main:'문화/체험',category_sub:'도예/공방 체험',category_detail:'원서동 일대 전통 공예 장인·공방 밀집',period:'현대',period_category:'현대',region:'서울특별시',address:'서울특별시 종로구 원서동 일대',location_marker_type:'entrance',lat:37.5819,lng:126.9843,short_description:'북촌 원서동에 전통 기능 보유자와 예술인들이 모여 이루는 공방거리. 도예·한지·금속공예·자수 등 다양한 전통 공예를 체험하고 작품을 구매할 수 있다.',source_urls:['https://hanok.seoul.go.kr/'],data_confidence:'medium',tags:['공방','공예체험','북촌','한옥마을','도예','종로','서울']},
  {name:'해남 대흥사 템플스테이',category_main:'문화/체험',category_sub:'사찰 체험',category_detail:'두륜산 대흥사 템플스테이, 예불·명상·울력',period:'현대',period_category:'현대',region:'전라남도',address:'전라남도 해남군 삼산면 대흥사길 400',location_marker_type:'entrance',lat:34.5414,lng:126.6088,short_description:'두륜산 자락 천년고찰 대흥사에서 진행하는 템플스테이. 예불·명상·울력 등을 체험하며 일상에서 벗어난 내면의 쉼을 얻을 수 있다.',source_urls:['http://www.daeheungsa.co.kr/','https://www.templestay.com/'],data_confidence:'high',tags:['템플스테이','사찰체험','해남','대흥사','두륜산','전남']},
  {name:'부산 범어사 템플스테이',category_main:'문화/체험',category_sub:'사찰 체험',category_detail:'영남 3대 사찰 범어사 선명상 중심 템플스테이',period:'현대',period_category:'현대',region:'부산광역시',address:'부산광역시 금정구 범어사로 250',location_marker_type:'entrance',lat:35.2952,lng:129.0556,short_description:'영남 3대 사찰 중 하나인 범어사에서 운영하는 선명상 중심 템플스테이. 예불·공양·사찰 탐방 프로그램이 진행되며 금정산 자연 속에서 고요함을 경험할 수 있다.',source_urls:['https://www.beomeo.kr/','https://www.templestay.com/'],data_confidence:'high',tags:['템플스테이','사찰체험','범어사','부산','금정산','선명상']},
  {name:'경주 불국사 템플스테이',category_main:'문화/체험',category_sub:'사찰 체험',category_detail:'유네스코 불국사 템플스테이, 석가탑 야경 속 108배',period:'현대',period_category:'현대',region:'경상북도',address:'경상북도 경주시 불국로 385',location_marker_type:'entrance',lat:35.7901,lng:129.3317,short_description:'유네스코 세계문화유산인 불국사에서 진행하는 템플스테이. 석가탑·다보탑의 달빛 야경 속에서 108배와 예불을 체험하며 신라 천년의 불교 문화를 온몸으로 느낄 수 있다.',source_urls:['https://bulguksa.templestay.com/'],data_confidence:'high',tags:['템플스테이','불국사','경주','유네스코','신라','경북']},
  {name:'전주 한옥마을 한옥숙박',category_main:'문화/체험',category_sub:'한옥 숙박',category_detail:'한옥마을 내 160여 곳 한옥 숙박 시설',period:'현대',period_category:'현대',region:'전라북도',address:'전라북도 전주시 완산구 교동·풍남동 일대',location_marker_type:'entrance',lat:35.8148,lng:127.1527,short_description:'전주 한옥마을 내 160여 곳의 한옥 숙박 시설에서 전통 온돌방을 체험할 수 있다. 주요 명소와 도보 거리에 있어 한옥마을의 아침을 여유롭게 즐길 수 있다.',source_urls:['https://hanok.jeonju.go.kr/'],data_confidence:'high',tags:['한옥숙박','한옥체험','전주','한옥마을','온돌','전북']},
  {name:'보성 녹차밭 체험',category_main:'문화/체험',category_sub:'차 체험',category_detail:'대한다원·한국차박물관, 녹차 따기·덖기 체험',period:'현대',period_category:'현대',region:'전라남도',address:'전라남도 보성군 보성읍 녹차로 775',location_marker_type:'entrance',lat:34.7729,lng:127.0823,short_description:'국내 녹차 생산량의 40%를 차지하는 보성 대한다원과 한국차박물관에서 녹차 따기·덖기·녹차 화장품 만들기 등 다양한 차 문화를 체험할 수 있다.',source_urls:['https://bstea.kr/'],data_confidence:'high',tags:['녹차밭','차체험','보성','대한다원','한국차박물관','전남']},
  {name:'고흥 유자농장 체험',category_main:'문화/체험',category_sub:'농촌 체험',category_detail:'전국 최대 유자 산지 수확·가공 체험',period:'현대',period_category:'현대',region:'전라남도',address:'전라남도 고흥군 풍양면 일대',location_marker_type:'entrance',lat:34.6058,lng:127.2833,short_description:'전국 최대 유자 산지인 고흥에서 유자 수확과 유자 마들렌·쿠키·차 만들기 등 다양한 체험을 즐길 수 있다. 매년 11월 유자축제가 열린다.',source_urls:['https://korean.visitkorea.or.kr/'],data_confidence:'medium',tags:['유자체험','농촌체험','고흥','유자','전남','11월축제']},
  {name:'통영 한려수도 어촌체험',category_main:'문화/체험',category_sub:'어촌 체험',category_detail:'한려해상국립공원 어촌마을 낚시·굴 수확 체험',period:'현대',period_category:'현대',region:'경상남도',address:'경상남도 통영시 한려해상국립공원 일원',location_marker_type:'entrance',lat:34.8533,lng:128.4319,short_description:'한려해상국립공원의 통영 어촌마을에서 조개잡기·낚시·굴 수확 등 다양한 어촌 체험을 즐길 수 있다. 연대도·만지도 출렁다리와 함께 남해안 체험 여행 코스로 인기다.',source_urls:['https://korean.visitkorea.or.kr/'],data_confidence:'medium',tags:['어촌체험','통영','한려수도','낚시','굴수확','경남']},
  {name:'남해 독일마을',category_main:'문화/체험',category_sub:'체험마을',category_detail:'파독 광부·간호사 정착 이국적 독일식 마을',period:'현대',period_category:'현대',region:'경상남도',address:'경상남도 남해군 삼동면 독일로 89-7',location_marker_type:'entrance',lat:34.8083,lng:127.9539,short_description:'파독 광부·간호사들이 귀국 후 정착해 이룬 독일식 마을. 독일식 건축과 남해 바다 풍경이 어우러져 이국적 분위기를 자아내며 매년 맥주 축제도 개최된다.',source_urls:['https://german-village.kr/'],data_confidence:'high',tags:['독일마을','파독','남해','이색마을','경남','이국적']},
  {name:'안동 국제탈춤페스티벌',category_main:'문화/체험',category_sub:'축제',category_detail:'매년 10월 국내외 탈춤 공연·체험 국제 축제',period:'현대',period_category:'현대',region:'경상북도',address:'경상북도 안동시 축제장길 200',location_marker_type:'entrance',lat:36.5690,lng:128.7296,short_description:'매년 10월 약 10일간 안동에서 열리는 국제 탈춤 축제. 세계 각국의 탈춤 공연단이 참가하며 탈 만들기·탈춤 체험 등 다채로운 프로그램이 운영된다.',source_urls:['https://www.maskdance.com/'],data_confidence:'high',tags:['탈춤','축제','안동','국제축제','10월','경북']},
  {name:'진주 남강유등축제',category_main:'문화/체험',category_sub:'축제',category_detail:'매년 10월 남강 유등 빛의 축제, 임진왜란 기원',period:'현대',period_category:'현대',region:'경상남도',address:'경상남도 진주시 남강 및 진주성 일대',location_marker_type:'entrance',lat:35.1896,lng:128.0792,short_description:'매년 10월 진주 남강과 진주성 일대에서 열리는 빛의 축제. 임진왜란 때 유래한 유등 풍속에서 비롯되었으며 남강 위에 띄운 수천 개의 유등이 만드는 야경이 장관이다.',source_urls:['https://yudeung.com/'],data_confidence:'high',tags:['유등축제','진주','남강','진주성','10월','경남']},
  {name:'보령 머드축제',category_main:'문화/체험',category_sub:'축제',category_detail:'매년 7월 대천해수욕장 세계적 머드 체험 축제',period:'현대',period_category:'현대',region:'충청남도',address:'충청남도 보령시 해수욕장1길 10',location_marker_type:'entrance',lat:36.3187,lng:126.5009,short_description:'1998년부터 매년 7월 대천해수욕장에서 열리는 세계적 머드 체험 축제. 보령 갯벌 머드를 활용한 다양한 체험이 진행되며 세계 각국에서 수십만 명이 찾는 한국 대표 여름 축제다.',source_urls:['https://www.mudfestival.or.kr/'],data_confidence:'high',tags:['머드축제','보령','대천해수욕장','7월','여름축제','충남']},
  {name:'화천 산천어축제',category_main:'문화/체험',category_sub:'축제',category_detail:'매년 1월 얼음낚시 축제, CNN 선정 세계 7대 불가사의',period:'현대',period_category:'현대',region:'강원도',address:'강원특별자치도 화천군 화천읍 산천어길 137',location_marker_type:'entrance',lat:38.1065,lng:127.7083,short_description:'매년 1월 화천천 얼음 위에서 펼쳐지는 산천어 얼음낚시 축제. CNN이 선정한 세계 7대 불가사의 겨울 축제로 100만 명 이상이 방문하며 눈썰매·스케이트 등 겨울 체험도 즐길 수 있다.',source_urls:['https://www.narafestival.com/'],data_confidence:'high',tags:['산천어축제','얼음낚시','화천','겨울축제','1월','강원']},
  {name:'함평 나비축제',category_main:'문화/체험',category_sub:'축제',category_detail:'매년 4~5월 함평엑스포공원 나비 생태 축제',period:'현대',period_category:'현대',region:'전라남도',address:'전라남도 함평군 함평읍 곤재로 27',location_marker_type:'entrance',lat:35.0656,lng:126.5186,short_description:'매년 4~5월 함평엑스포공원에서 열리는 나비 생태 축제. 20만 마리 나비와 50만 봄꽃이 어우러지며 나비 생태관·봄꽃 전시·체험 프로그램이 운영된다.',source_urls:['https://www.hpftf.or.kr/'],data_confidence:'high',tags:['나비축제','함평','봄축제','생태축제','4월','전남']},
  {name:'서울 어린이대공원',category_main:'문화/체험',category_sub:'어린이 체험',category_detail:'53만㎡ 시립 공원, 동물원·놀이동산·공연시설',period:'현대',period_category:'현대',region:'서울특별시',address:'서울특별시 광진구 능동로 216',location_marker_type:'entrance',lat:37.5479,lng:127.0745,short_description:'광진구 능동에 자리한 53만㎡ 규모의 시립 가족 테마공원. 동물원·식물원·놀이동산·공연장이 집약되어 있으며 어린이대공원역에서 바로 연결되어 가족 나들이 명소로 인기다.',source_urls:['https://www.sisul.or.kr/'],data_confidence:'high',tags:['어린이대공원','동물원','놀이동산','가족여행','광진구','서울']},
  {name:'과천 서울랜드',category_main:'문화/체험',category_sub:'가족 체험',category_detail:'서울대공원 내 테마파크, 어트랙션·퍼레이드',period:'현대',period_category:'현대',region:'경기도',address:'경기도 과천시 광명로 181',location_marker_type:'entrance',lat:37.4327,lng:126.9873,short_description:'서울대공원 내에 위치한 테마파크로 다양한 어트랙션과 퍼레이드를 즐길 수 있다. 국립현대미술관·서울동물원과 함께 방문하면 하루 종일 즐길 수 있는 경기 대표 가족 여행지다.',source_urls:['https://grandpark.seoul.go.kr/'],data_confidence:'high',tags:['놀이공원','테마파크','과천','가족여행','경기']},
  {name:'용인 한국민속촌',category_main:'문화/체험',category_sub:'체험마을',category_detail:'조선시대 생활 재현 민속 테마파크',period:'현대',period_category:'현대',region:'경기도',address:'경기도 용인시 기흥구 민속촌로 90',location_marker_type:'entrance',lat:37.2399,lng:127.1086,short_description:'조선시대 민속 생활을 재현한 270여 채의 전통 가옥과 공방이 있는 민속 테마파크. 전통 공예 체험·장터 먹거리·민속 공연을 즐길 수 있으며 매 시즌 특별 축제도 개최된다.',source_urls:['https://www.koreanfolk.co.kr'],data_confidence:'high',tags:['민속촌','조선시대','용인','전통체험','가족여행','경기']}
];

// 지역코드 매핑 (문화/체험은 지역별 다양)
const regionCode={'서울특별시':'SE','부산광역시':'BS','경기도':'GG','전라북도':'JB','경상남도':'GN','경상북도':'GB','전라남도':'JN','강원도':'GW','충청남도':'CN'};

const existing=JSON.parse(fs.readFileSync(base+'data/heritage_all.json','utf8'));
const existingNames=new Set(existing.map(d=>d.name));
const counters={};
existing.forEach(d=>{const p=d.place_id.split('-');const k=p[1]+'-'+p[2];const n=parseInt(p[3]);if(!counters[k]||counters[k]<n)counters[k]=n;});

const now=new Date().toISOString().slice(0,19);
const newItems=raw.filter(d=>!existingNames.has(d.name)).map(d=>{
  const rc=regionCode[d.region]||'ETC';
  const cc='CUL'; // 문화/체험 공통 코드
  const k=rc+'-'+cc;
  counters[k]=(counters[k]||0)+1;
  const placeId='GK-'+rc+'-'+cc+'-'+String(counters[k]).padStart(4,'0');
  return {
    ...d,
    place_id:placeId,
    category:d.category_sub,
    period_category:d.period_category||'현대',
    confidence:'high',
    confidence_reason:'',
    needs_geocoding:false,
    status:{map_displayable:true,data_status:'complete',map_status:'waiting',content_status:'waiting',last_updated:now},
    content_link:{has_video:false,youtube_url:'',instagram_url:'',tiktok_url:'',xiaohongshu_url:'',video_status:'없음'}
  };
});

// high 자동 승인
let approved=0;
const merged=[...existing,...newItems];
const final=merged.map(d=>{
  if(d.data_confidence==='high'&&d.status.map_status==='waiting'){approved++;return {...d,status:{...d.status,map_status:'published',last_updated:now}};}
  return d;
});

fs.writeFileSync(base+'data/heritage_all.json',JSON.stringify(final,null,2),'utf8');
const ready=final.filter(d=>d.status.map_displayable&&d.lat&&d.lng);
fs.writeFileSync(base+'map/markers_ready.json',JSON.stringify({total:ready.length,markers:ready},null,2),'utf8');

const rawLog=JSON.parse(fs.readFileSync(base+'data/raw/search_results.json','utf8'));
rawLog.results.push({run_time:now,mode:'CULTURE_SEARCH',category:'문화/체험',collected:newItems.length,total:final.length});
fs.writeFileSync(base+'data/raw/search_results.json',JSON.stringify(rawLog,null,2),'utf8');
const log=JSON.parse(fs.readFileSync(base+'logs/automation_log.json','utf8'));
log.runs.push({time:now,mode:'문화·체험 서치',category:'문화/체험',new_collected:newItems.length,approved,total:final.length});
fs.writeFileSync(base+'logs/automation_log.json',JSON.stringify(log,null,2),'utf8');

console.log('문화·체험 서치 1차 완료');
console.log('새로 수집: '+newItems.length+'개');
console.log('자동 승인: '+approved+'개');
console.log('누적: '+final.length+'개');
console.log('카테고리별:');
const catCount={};
newItems.forEach(d=>{catCount[d.category_sub]=(catCount[d.category_sub]||0)+1;});
Object.entries(catCount).forEach(([k,v])=>console.log('  '+k+': '+v+'개'));
newItems.forEach(d=>console.log('  + ['+d.place_id+'] '+d.name+' ('+d.category_sub+')'));
