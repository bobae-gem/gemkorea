const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const now = new Date().toISOString().slice(0,19);

const newExps = [
  {experience_id:'EX-GG-FES-001',name:'가평 자라섬 재즈 페스티벌',category_main:'문화/체험',category_sub:'축제',region_main:'GG',region_sub:'경기도 가평군',address:'경기도 가평군 가평읍 자라섬로 60',lat:37.8350,lng:127.5106,price:'1일권 80,000원~',duration:'1박 2일',reservation_required:true,target_user:['커플','청년','개인'],nearby_places:[],related_heritage_ids:[],short_description:'매년 10월 북한강 자라섬에서 열리는 아시아 최대 규모의 재즈 뮤직 페스티벌이다. 강변 야외 무대에서 국내외 재즈 뮤지션들의 공연을 들으며 캠핑까지 즐기는 가을 대표 축제다.',source_urls:['https://www.jarasumjazz.com/'],data_confidence:'high',tags:['자라섬재즈','가평','재즈페스티벌','북한강','경기','가을축제','캠핑'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'매년 10월 (4일간)',phone:'031-581-2839'},
  {experience_id:'EX-SE-FES-001',name:'서울 빛초롱 축제 (청계천)',category_main:'문화/체험',category_sub:'야경/야간투어',region_main:'SE',region_sub:'서울특별시 중구',address:'서울특별시 중구 청계천로 일원',lat:37.5698,lng:126.9849,price:'무료',duration:'1~2시간',reservation_required:false,target_user:['가족','커플','외국인'],nearby_places:[],related_heritage_ids:[],short_description:'매년 11월 서울 청계천에서 열리는 무료 등불 축제다. 청계천 2km 구간을 형형색색의 전통 등과 미디어아트 설치물이 가득 채우며 한국의 전통 등 문화를 현대적으로 재해석한 서울 대표 겨울 야경 축제다.',source_urls:['https://www.seoullantern.org/'],data_confidence:'high',tags:['빛초롱축제','청계천','서울','등불축제','무료','야경','겨울축제'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'매년 11월 (2주간) 18:00~23:00',phone:'02-2133-2714'},
  {experience_id:'EX-GN-FES-003',name:'밀양 아리랑 대축제',category_main:'문화/체험',category_sub:'축제',region_main:'GN',region_sub:'경상남도 밀양시',address:'경상남도 밀양시 밀양대로 2337',lat:35.5036,lng:128.7456,price:'무료',duration:'3~5시간',reservation_required:false,target_user:['가족','개인'],nearby_places:[],related_heritage_ids:[],short_description:'매년 5월 밀양에서 열리는 3대 아리랑 중 하나인 밀양아리랑 축제다. 밀양 나봉 설화를 바탕으로 한 아리랑 공연·농악·씨름이 펼쳐지며 밀양 얼음골 주변 자연과 함께 즐기는 봄 축제다.',source_urls:['https://www.miryang.go.kr/'],data_confidence:'high',tags:['밀양아리랑','밀양','아리랑축제','경남','무료','봄축제','전통공연'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'매년 5월 (5일간)',phone:'055-359-5604'},
  {experience_id:'EX-JB-FES-002',name:'전주 국제 영화제 체험',category_main:'문화/체험',category_sub:'문화예술',region_main:'JB',region_sub:'전라북도 전주시',address:'전라북도 전주시 완산구 전주객사3길 22',lat:35.8186,lng:127.1504,price:'영화 1편 8,000원~',duration:'영화별 상이',reservation_required:true,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'매년 4~5월 전주에서 열리는 국제 영화제에서 전 세계 독립영화와 예술 영화를 감상하는 체험이다. 한옥마을 인근 영화관들에서 상영하는 영화를 보고 감독과의 대화에 참여할 수 있다.',source_urls:['https://www.jiff.or.kr/'],data_confidence:'high',tags:['전주국제영화제','전주','JIFF','독립영화','예술영화','전북','영화축제'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'매년 4~5월 (10일간)',phone:'063-288-5433'},
  {experience_id:'EX-GW-FES-002',name:'평창 대관령 눈꽃축제',category_main:'문화/체험',category_sub:'축제',region_main:'GW',region_sub:'강원특별자치도 평창군',address:'강원특별자치도 평창군 대관령면 올림픽로 715',lat:37.6604,lng:128.7186,price:'무료 (체험 별도)',duration:'3~5시간',reservation_required:false,target_user:['가족','어린이','커플'],nearby_places:[],related_heritage_ids:[],short_description:'매년 1월 해발 700m 대관령에서 열리는 눈꽃 겨울 축제다. 눈 조각 전시·눈썰매·얼음 미끄럼틀·스노우 래프팅을 즐길 수 있으며 알펜시아 스키장과 연계하면 완벽한 겨울 여행이 된다.',source_urls:['https://www.snowflower.co.kr/'],data_confidence:'high',tags:['눈꽃축제','평창','대관령','겨울축제','강원','눈조각','눈썰매'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'매년 1월 (2주간)',phone:'033-335-3995'},
  {experience_id:'EX-JN-FES-003',name:'광양 매화 축제',category_main:'문화/체험',category_sub:'축제',region_main:'JN',region_sub:'전라남도 광양시',address:'전라남도 광양시 다압면 매화로 1',lat:35.0586,lng:127.7094,price:'무료',duration:'2~3시간',reservation_required:false,target_user:['가족','커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'매년 3월 전남 광양 다압면에서 열리는 한국 최대 매화 축제다. 섬진강 변 청매실 농원의 매화가 만개하는 시기에 하얀 매화꽃이 산 전체를 뒤덮는 장관이 펼쳐진다.',source_urls:['https://www.maehwa.or.kr/'],data_confidence:'high',tags:['광양매화축제','광양','전남','매화','섬진강','봄축제','청매실농원'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'매년 3월 (2주간)',phone:'061-797-2657'},
  {experience_id:'EX-GG-FES-002',name:'안성 국제 남사당 보부상 축제',category_main:'문화/체험',category_sub:'축제',region_main:'GG',region_sub:'경기도 안성시',address:'경기도 안성시 보개면 남사당길 2',lat:37.0094,lng:127.2747,price:'무료',duration:'3~5시간',reservation_required:false,target_user:['가족','어린이','개인'],nearby_places:[],related_heritage_ids:[],short_description:'유네스코 인류무형문화유산 남사당 풍물놀이의 고장 안성에서 열리는 축제다. 풍물·버나·매·살판·어름·덜미(꼭두각시) 등 남사당의 6가지 공연 예술을 한번에 볼 수 있다.',source_urls:['https://www.namsadang.or.kr/'],data_confidence:'high',tags:['남사당축제','안성','경기','유네스코','풍물놀이','남사당','보부상'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'매년 9~10월 (5일간)',phone:'031-676-2618'},
  {experience_id:'EX-JJ-FES-002',name:'제주 들불축제',category_main:'문화/체험',category_sub:'축제',region_main:'JJ',region_sub:'제주특별자치도 제주시',address:'제주특별자치도 제주시 애월읍 새별오름 일원',lat:33.3889,lng:126.3608,price:'무료',duration:'3~5시간',reservation_required:false,target_user:['가족','개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'매년 음력 정월대보름 새별오름에서 제주 전통 방목지 불 놓기 의례를 재현하는 축제다. 오름 전체가 불길에 휩싸이는 장관이 펼쳐지며 달맞이·쥐불놀이·소원풍등 날리기를 함께 즐긴다.',source_urls:['https://www.jejufire.or.kr/'],data_confidence:'high',tags:['제주들불축제','제주','새별오름','정월대보름','불축제','전통행사','소원풍등'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'매년 2~3월 정월대보름',phone:'064-728-2752'},
  {experience_id:'EX-GW-FES-003',name:'인제 빙어 송어 축제',category_main:'문화/체험',category_sub:'낚시/어촌 체험',region_main:'GW',region_sub:'강원특별자치도 인제군',address:'강원특별자치도 인제군 남면 소양로 226',lat:38.0628,lng:128.1711,price:'1인 25,000원~',duration:'3~5시간',reservation_required:false,target_user:['가족','어린이','개인'],nearby_places:[],related_heritage_ids:[],short_description:'매년 1~2월 인제 소양강 상류에서 빙어와 송어를 낚시로 잡는 겨울 축제다. 꽁꽁 언 강 위에서 얼음낚시와 썰매·눈놀이를 즐기며 잡은 물고기를 즉석에서 회와 튀김으로 맛볼 수 있다.',source_urls:['https://www.inje.go.kr/tour/'],data_confidence:'high',tags:['빙어축제','인제','강원','송어','겨울축제','얼음낚시','소양강'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'매년 1~2월 (3주간)',phone:'033-461-4296'},
  {experience_id:'EX-GB-FES-003',name:'청도 소싸움 축제',category_main:'문화/체험',category_sub:'축제',region_main:'GB',region_sub:'경상북도 청도군',address:'경상북도 청도군 화양읍 청도읍성로 26',lat:35.6493,lng:128.7361,price:'성인 7,000원',duration:'3~5시간',reservation_required:false,target_user:['가족','개인'],nearby_places:[],related_heritage_ids:[],short_description:'청도 전통 소싸움 경기를 관람하는 축제다. 한국에서 유일하게 연중 상설 소싸움 경기가 열리는 청도에서 천년 전통의 소싸움 문화를 체험한다. 봄·가을 축제 기간에 특별 대형 경기가 열린다.',source_urls:['https://www.cheongdo.go.kr/'],data_confidence:'high',tags:['소싸움','청도','경북','전통경기','소싸움축제','청도소싸움','상설경기'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 상설 (토·일·공휴일)',phone:'054-370-6206'},
  {experience_id:'EX-JN-FES-004',name:'보성 다향제 녹차 축제',category_main:'문화/체험',category_sub:'축제',region_main:'JN',region_sub:'전라남도 보성군',address:'전라남도 보성군 보성읍 봉산리 대한다원',lat:34.7718,lng:127.0792,price:'무료 (체험 별도)',duration:'2~3시간',reservation_required:false,target_user:['가족','개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'매년 5월 보성 대한다원에서 열리는 한국 최대 녹차 축제다. 신록의 차밭 사이를 걸으며 채다·덖음 체험을 하고 다양한 녹차 음식을 맛볼 수 있는 전남 봄 축제의 대표격이다.',source_urls:['https://www.daehandawon.com/'],data_confidence:'high',tags:['다향제','보성','녹차축제','전남','대한다원','차밭','봄축제'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'매년 5월 (1주일간)',phone:'061-852-4005'},
  {experience_id:'EX-GN-FES-004',name:'남해 보물섬 마늘 축제',category_main:'문화/체험',category_sub:'농촌 체험',region_main:'GN',region_sub:'경상남도 남해군',address:'경상남도 남해군 삼동면 남해바래길 일원',lat:34.8233,lng:127.8789,price:'무료 (체험 별도)',duration:'2~3시간',reservation_required:false,target_user:['가족','개인'],nearby_places:[],related_heritage_ids:[],short_description:'매년 6월 남해 특산품 남해 마늘을 주제로 열리는 농촌 축제다. 마늘 캐기 체험·마늘 요리 경연·한방 마늘 음식 시식이 펼쳐지며 남해 독일마을과 함께 하루 코스로 즐기기 좋다.',source_urls:['https://www.namhae.go.kr/'],data_confidence:'high',tags:['남해마늘축제','남해','경남','마늘','농촌축제','특산품','보물섬'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'매년 6월 (3일간)',phone:'055-860-3001'}
];

const newShorts = [
  {
    experience_id:'EX-GG-FES-001', experience_name:'가평 자라섬 재즈 페스티벌', category_sub:'축제', region:'경기도',
    script_30s:'오늘은 가평 자라섬 재즈 페스티벌에 왔어요. 북한강 섬 위 야외 재즈 공연이에요. 근데 아무도 안 알려주는 게 있어요 — 강변 캠핑 자리에서 텐트 밖으로 고개 내밀면 재즈 소리가 들려요. 그 느낌이 강이랑 재즈랑 별이 다 같이예요. 너무 가을밤 강변 재즈가 진짜라서 좋았습니다.',
    script_60s:'오늘은 경기도 가평 자라섬 재즈 페스티벌에 왔어요. 매년 10월 북한강 자라섬에서 열리는 아시아 최대 재즈 페스티벌이에요. 야외 강변 무대에 앉아서 국내외 재즈 뮤지션들의 공연을 들을 수 있어요. 재즈 공연이지만 분위기가 전혀 어렵지 않아요. 근데 아무도 안 알려주는 꿀팁 하나 — 공연장 야외 캠핑 자리를 예약하면 텐트에서 밤새 재즈를 들을 수 있어요. 텐트 지퍼 열면 북한강이 보이고, 저 멀리서 재즈 선율이 흘러들어오는 그 감각이 진짜예요. 가을 별과 강물과 재즈가 동시에 오는 그 순간이 자라섬 페스티벌만의 경험이에요. 서울에서 1시간이라 당일치기도 가능하지만 캠핑으로 하룻밤 자고 오면 완전히 달라요. 너무 재즈가 이렇게 가깝게 느껴진 적이 없어서 좋았습니다.',
    secret_tip:'야외 캠핑 자리 예약 — 텐트에서 북한강 보며 재즈 소리 들리는 체험. 캠핑 예약이 일반 입장권보다 먼저 마감됨. 10월 첫째 주 예매 오픈 즉시 예약 필수',
    filming_guide:'강변 무대와 관객들 와이드샷 황혼 시간대. 텐트 지퍼 열고 북한강 보이는 순간 촬영. 재즈 연주자 손가락 클로즈업.',
    broll_ideas:['강변 야외 무대 황혼 와이드샷','텐트에서 북한강 보이는 캠핑 뷰','재즈 연주자 손가락 클로즈업','별 뜬 밤 캠핑장과 멀리 무대 불빛','자라섬 가을 단풍과 북한강'],
    hooks:['텐트에서 재즈 들리는 캠핑 있어요','가을 강변에서 아시아 최대 재즈 페스티벌','자라섬 캠핑 자리가 진짜 가치예요','서울 1시간 재즈 페스티벌 꿀팁','재즈+별+강이 동시에 오는 그 느낌'],
    thumbnails:['강변 무대 황혼 와이드샷','텐트에서 북한강 보이는 뷰','재즈 연주자 손가락 클로즈업','별 밤 캠핑장과 무대 불빛','가을 단풍과 북한강'],
    captions:{youtube:'가평 자라섬 재즈 페스티벌 — 텐트에서 재즈 들려요 🎷\n\n야외 캠핑 자리 예약이 진짜 꿀팁!\n아시아 최대 재즈 페스티벌 가을 강변\n\n📍 경기도 가평군 자라섬\n🎷 매년 10월 / 캠핑 예약 오픈 즉시 마감\n\n#자라섬재즈 #가평 #재즈페스티벌 #경기여행 #가을축제',instagram:'자라섬 캠핑 텐트에서 재즈 소리 들려요 🎷\n\n북한강 + 별 + 재즈 동시에 오는 그 느낌 ✨\n아시아 최대 재즈 페스티벌\n\n📍 경기 가평 자라섬\n\n#자라섬재즈 #가평여행 #재즈페스티벌 #GemKorea',tiktok:'자라섬 재즈 페스티벌 꿀팁 🎷 캠핑 자리 예약하면 텐트에서 재즈 들려요! 북한강이랑 별이랑 다 같이 옴 // 매년 10월 가평 자라섬 #자라섬재즈 #가평여행 #재즈'},
    hashtags:{korean:['#한국여행','#경기여행','#재즈','#가을축제','#GemKorea'],place_specific:['#자라섬재즈','#가평','#재즈페스티벌','#가을캠핑']}
  },
  {
    experience_id:'EX-SE-FES-001', experience_name:'서울 빛초롱 축제 (청계천)', category_sub:'야경/야간투어', region:'서울특별시',
    script_30s:'오늘은 서울 청계천 빛초롱 축제에 왔어요. 청계천이 2km 등불로 가득 차요. 근데 아무도 안 알려주는 게 있어요 — 청계천 물에 등이 반사되는 구간이 있어요. 그 구간 사진이 진짜 예뻐요. 너무 한국 전통 등이 서울 한복판에서 빛나서 좋았습니다.',
    script_60s:'오늘은 서울 청계천 빛초롱 축제에 왔어요. 매년 11월 청계천 2km 구간에 전통 등과 미디어아트 설치물이 가득 채워지는 무료 야경 축제예요. 1~2주 동안 18시부터 23시까지 운영해요. 각국 문화를 테마로 한 대형 등 조형물과 한국 전통 연등이 어우러져요. 근데 아무도 안 알려주는 꿀팁 하나 — 청계천 중간 구간에 등이 수면에 반사되는 구간이 있어요. 청계천 물이 잔잔할 때 등불이 수면에 그대로 비치는 그 구도에서 찍으면 위아래가 대칭되는 인생 사진이 나와요. 관광객 대부분이 등을 보고 지나가는데 물에 반사된 등을 찍는 사람은 별로 없어요. 그 구간을 미리 알고 가면 완전 다른 사진이 나와요. 너무 서울 한복판에서 이런 무료 야경이라서 좋았습니다.',
    secret_tip:'청계천 수면 반사 구간 — 등불이 수면에 비치는 대칭 구도. 물 잔잔한 저녁 초반 18~19시가 최고. 광교 부근 첫 번째 반사 구간이 가장 아름다움',
    filming_guide:'청계천 수면 반사 등불 대칭 구도 촬영. 대형 등 조형물 아래서 올려다보는 앵글. 걷는 사람들과 등불이 어우러지는 동적 장면.',
    broll_ideas:['청계천 수면 반사 등불 대칭 구도','대형 등 조형물 아래서 올려다보기','등불 사이 사람들 걷는 동적 장면','다리 위에서 내려다보는 등불 길','한국 전통 연등 클로즈업'],
    hooks:['청계천 수면에 등이 반사되는 구간 있어요','서울 2km 등불 축제 무료예요','빛초롱 인생 사진 찍는 꿀 구간','청계천 물 반사 대칭 구도 아는 사람?','한국 전통 등이 서울 한복판에 가득'],
    thumbnails:['청계천 수면 등불 반사 대칭','대형 등 아래서 올려다보기','등불 길 사람들 동적 장면','다리 위 내려다본 등불 길','한국 전통 연등 클로즈업'],
    captions:{youtube:'청계천 빛초롱 축제 — 수면 반사 구간이 진짜예요 🏮\n\n등불이 물에 비치는 대칭 구도 인생 사진!\n무료 서울 야경 축제 2km\n\n📍 서울 청계천 2km 구간\n🏮 매년 11월 무료 / 18:00~23:00\n\n#빛초롱축제 #청계천 #서울여행 #야경 #무료축제',instagram:'청계천 빛초롱 수면 반사 구도 알아요? 🏮\n\n등이 물에 비치는 대칭 사진이 제일 예뻐요 ✨\n2km 무료 야경 축제\n\n📍 서울 청계천\n\n#빛초롱축제 #청계천 #서울여행 #야경 #GemKorea',tiktok:'빛초롱 축제 꿀팁 🏮 청계천 수면에 등불 반사되는 구간 찾아가세요! 대칭 구도 인생 사진 나와요 // 서울 2km 무료 야경 축제 #빛초롱축제 #청계천 #서울여행'},
    hashtags:{korean:['#한국여행','#서울여행','#야경명소','#무료','#GemKorea'],place_specific:['#빛초롱축제','#청계천','#등불축제','#수면반사']}
  },
  {
    experience_id:'EX-JN-FES-003', experience_name:'광양 매화 축제', category_sub:'축제', region:'전라남도',
    script_30s:'오늘은 광양 매화 축제에 왔어요. 3월이면 섬진강 변 산이 하얗게 변해요. 근데 아무도 안 알려주는 게 있어요 — 매화 꽃 아래 앉으면 꽃잎이 눈처럼 떨어져요. 그 눈 맞는 느낌이 봄 눈이에요. 너무 봄이 이렇게 올 수 있나 싶어서 좋았습니다.',
    script_60s:'오늘은 전남 광양 청매실 농원 매화 축제에 왔어요. 매년 3월 섬진강 변 다압면 산 전체가 하얀 매화꽃으로 뒤덮이는 국내 최대 매화 축제예요. 50여 년 넘게 이어온 축제로 매화꽃이 만개하면 정말 산이 하얗게 변해요. 근데 아무도 안 알려주는 꿀팁 하나 — 매화 절정 시기에 꽃 아래 앉아있으면 바람 불 때마다 하얀 꽃잎이 눈처럼 떨어져요. 그 꽃비 맞는 느낌을 경험하려면 꽃이 막 피기 시작하는 절정 이틀 전이 아니라 절정 이틀 후가 좋아요. 꽃잎이 바람에 떨어지기 시작하는 시기거든요. SNS 상의 매화 사진보다 실제로 꽃비 맞는 그 순간이 훨씬 더 감동적이에요. 너무 봄이 하얗게 내리는 기분이라서 좋았습니다.',
    secret_tip:'절정 이틀 후 방문 — 꽃잎 지기 시작하는 시기에 바람 불면 하얀 꽃비. 사진보다 실제 꽃비 맞는 경험이 더 감동적. 섬진강 변 하동 쌍계사 십리벚꽃길과 세트 코스',
    filming_guide:'꽃비 슬로우 촬영 (꽃잎 떨어지는 순간). 하얀 매화나무 아래 사람 실루엣. 섬진강 배경 매화 산 전체 광각.',
    broll_ideas:['꽃비 슬로우 모션 하얀 꽃잎 떨어지기','하얀 매화 아래 앉은 사람 실루엣','섬진강 배경 매화 산 전체 광각','매화꽃 클로즈업과 꿀벌','청매실 농원 계단식 매화 밭 조망'],
    hooks:['꽃비 맞는 봄 눈 체험했어요','절정 이틀 후가 꽃비 맞는 타이밍','광양 매화 섬진강 변 산이 하얗게 변해요','매화 꽃잎이 눈처럼 떨어지는 그 순간','국내 최대 매화 축제 꿀타이밍 있어요'],
    thumbnails:['꽃비 슬로우 하얀 꽃잎 떨어지기','매화 아래 사람 실루엣','섬진강 배경 매화 산 광각','매화꽃 클로즈업 꿀벌','청매실 농원 계단식 조망'],
    captions:{youtube:'광양 매화 — 절정 이틀 후가 꽃비 맞는 타이밍이에요 🌸\n\n하얀 꽃잎이 눈처럼 떨어지는 그 순간!\n섬진강 변 산 전체가 하얗게 변하는 국내 최대 매화\n\n📍 전남 광양시 다압면 청매실 농원\n🌸 꽃비 타이밍: 절정 이틀 후\n\n#광양매화 #광양매화축제 #전남여행 #봄꽃 #매화',instagram:'광양 매화 꽃비 맞았어요 🌸\n\n절정 이틀 후에 가면 하얀 꽃비 맞아요 ✨\n섬진강 변 산이 하얗게 변하는 장관\n\n📍 전남 광양 청매실 농원\n\n#광양매화 #봄꽃 #전남여행 #GemKorea',tiktok:'광양 매화 꿀팁 🌸 절정 이틀 후에 가면 꽃잎이 눈처럼 떨어져요! 꽃비 맞는 그 느낌이 진짜 봄이에요 // 국내 최대 매화 섬진강 변 #광양매화 #봄꽃 #전남여행'},
    hashtags:{korean:['#한국여행','#전남여행','#봄여행','#매화','#GemKorea'],place_specific:['#광양매화','#청매실농원','#꽃비','#섬진강매화']}
  },
  {
    experience_id:'EX-GW-FES-002', experience_name:'평창 대관령 눈꽃축제', category_sub:'축제', region:'강원도',
    script_30s:'오늘은 평창 대관령 눈꽃축제에 왔어요. 해발 700m 설원이에요. 근데 아무도 안 알려주는 게 있어요 — 눈 조각 작품들이 밤에 조명 켜지면 완전 달라요. 낮에 보고 밤에 또 봐야 해요. 너무 눈 조각이 예술이 되는 밤이라서 좋았습니다.',
    script_60s:'오늘은 강원도 평창 대관령에서 열리는 눈꽃축제에 왔어요. 매년 1월 해발 700m 대관령 평원에서 열리는 겨울 축제예요. 대형 눈 조각 전시·눈썰매·스노우 래프팅·얼음 미끄럼틀 등 겨울 레포츠가 총출동해요. 올림픽 도시 평창이라 시설이 잘 갖춰져 있어요. 근데 아무도 안 알려주는 꿀팁 하나 — 눈 조각 작품들이 낮에도 예쁘지만 일몰 후 조명이 켜지면 완전히 다른 모습이에요. 하얀 눈 조각에 색색 조명이 반사되면 얼음 성처럼 빛나요. 축제장에서 해질 무렵까지 기다렸다가 조명 켜지는 순간을 보는 게 핵심이에요. 그 시간에 관람객이 줄어서 조용히 눈 조각을 혼자 즐길 수 있어요. 너무 밤의 눈 조각이 이렇게 아름다울 수 있어서 좋았습니다.',
    secret_tip:'일몰 후 눈 조각 조명 타임 — 하얀 눈 조각에 색색 조명 반사로 얼음 성처럼 빛남. 이 시간에 관람객 적어 조용히 감상 가능. 알펜시아 스키장 야간 스키와 세트 코스',
    filming_guide:'조명 켜진 눈 조각 밤 촬영 (긴 노출 사용). 눈썰매 내려오는 순간 슬로우. 설원 전체 파노라마 드론뷰.',
    broll_ideas:['조명 켜진 눈 조각 밤 촬영','눈썰매 내려오는 슬로우','대관령 설원 전체 파노라마','아이들 얼음 미끄럼틀 신나는 표정','대형 눈 조각 클로즈업 세부'],
    hooks:['눈 조각에 조명 켜지면 완전 달라요','대관령 눈꽃축제 밤이 진짜예요','해발 700m 설원에서 겨울 체험','조명 타임 노리는 평창 눈꽃 꿀팁','눈 조각이 얼음 성처럼 빛나는 그 순간'],
    thumbnails:['조명 켜진 눈 조각 밤 촬영','눈썰매 내려오는 슬로우','대관령 설원 파노라마','아이들 얼음 미끄럼틀 표정','대형 눈 조각 클로즈업'],
    captions:{youtube:'평창 대관령 눈꽃축제 — 조명 켜지면 눈 조각이 달라요 ❄️\n\n일몰 후 색색 조명 반사 = 얼음 성!\n해발 700m 설원 겨울 체험\n\n📍 강원도 평창군 대관령 눈꽃축제\n❄️ 매년 1월 (2주간)\n💡 일몰 후 조명 타임이 진짜 하이라이트\n\n#눈꽃축제 #평창 #강원도여행 #겨울축제 #대관령',instagram:'평창 눈꽃축제 밤 조명 타임이 진짜예요 ❄️\n\n눈 조각에 조명 켜지면 얼음 성 같아요 ✨\n해발 700m 설원 겨울\n\n📍 강원 평창 대관령\n\n#눈꽃축제 #평창여행 #강원도 #겨울축제 #GemKorea',tiktok:'평창 눈꽃축제 꿀팁 ❄️ 일몰 후 조명 켜지면 눈 조각이 완전 달라요! 색색 조명 반사로 얼음 성처럼 빛나요 // 해발 700m 대관령 겨울 체험 #눈꽃축제 #평창여행 #강원도'},
    hashtags:{korean:['#한국여행','#강원도여행','#겨울여행','#겨울축제','#GemKorea'],place_specific:['#눈꽃축제','#평창','#대관령','#눈조각조명']}
  },
  {
    experience_id:'EX-GB-FES-003', experience_name:'청도 소싸움 축제', category_sub:'축제', region:'경상북도',
    script_30s:'오늘은 청도 소싸움 경기를 봤어요. 한국 유일 상설 소싸움이에요. 근데 아무도 안 알려주는 게 있어요 — 황소들이 뿔을 맞댈 때 소리가 진짜 충격적이에요. 눈앞에서 보면 완전 다른 경험이에요. 너무 한국 전통 스포츠가 이런 거였구나 싶어서 좋았습니다.',
    script_60s:'오늘은 경북 청도 소싸움 경기를 봤어요. 청도는 한국에서 유일하게 상설 소싸움 경기가 연중 열리는 곳이에요. 천 년 전통의 소싸움은 원래 풍년을 기원하는 세시풍속이었는데 지금은 스포츠가 됐어요. 청도 황소들은 특별히 훈련받은 경기 소예요. 근데 아무도 안 알려주는 꿀팁 하나 — 소싸움은 TV나 사진으로 보면 별거 아닌 것처럼 보이는데, 경기장에서 직접 보면 완전 달라요. 수백 킬로 황소 두 마리가 뿔을 맞댈 때 나는 충격음이 경기장 전체를 울려요. 땅이 진동하는 느낌까지 나요. 앞줄에 앉을수록 그 진동이 실감나요. 외국인들이 소싸움을 처음 보고 가장 놀라는 순간이에요. 너무 현장 소리와 진동이 완전히 달라서 좋았습니다.',
    secret_tip:'경기장 앞줄 자리 — 황소 뿔 맞닿는 충격음과 땅 진동이 앞줄에서 실감. TV와 완전 다른 현장 경험. 봄·가을 축제 기간 대형 결승전이 가장 박진감 넘침',
    filming_guide:'황소 뿔 맞닿는 순간 슬로우 촬영 (충격 전달). 관중들의 탄성 반응 포착. 입장하는 황소 거대한 몸집 스케일 촬영.',
    broll_ideas:['황소 뿔 맞닿는 순간 슬로우','입장하는 황소 거대한 몸집 스케일','관중들 탄성과 응원 반응','청도 소싸움 경기장 전경','황소 조련사와 황소 입장 장면'],
    hooks:['황소 뿔 맞닿는 소리 진짜 충격이에요','TV랑 현장이 완전 다른 소싸움','한국 유일 상설 소싸움 경기','앞줄에서 땅 진동 느끼는 체험','천 년 전통 한국 소싸움 봤어요'],
    thumbnails:['황소 뿔 맞닿는 순간 슬로우','입장 황소 거대한 몸집','관중 탄성 반응','소싸움 경기장 전경','조련사와 황소 입장'],
    captions:{youtube:'청도 소싸움 — TV랑 현장이 완전 달라요 🐂\n\n황소 뿔 맞닿는 충격음 + 땅 진동!\n한국 유일 상설 소싸움 경기\n\n📍 경북 청도군 청도읍\n🐂 연중 상설 (토·일·공휴일)\n💡 앞줄 자리 = 진동 실감\n\n#청도소싸움 #청도 #경북여행 #전통스포츠 #소싸움',instagram:'청도 소싸움 현장 — TV랑 완전 달라요 🐂\n\n황소 뿔 맞닿는 충격음이 경기장 울려요 ✨\n땅이 진동하는 느낌\n\n📍 경북 청도 소싸움\n\n#청도소싸움 #청도여행 #경북 #전통스포츠 #GemKorea',tiktok:'청도 소싸움 꿀팁 🐂 TV랑 현장이 완전 달라요! 황소 뿔 맞닿을 때 충격음이랑 땅 진동이 앞줄에서 느껴져요 // 한국 유일 상설 소싸움 경기 #청도소싸움 #경북여행 #전통스포츠'},
    hashtags:{korean:['#한국여행','#경북여행','#청도여행','#전통스포츠','#GemKorea'],place_specific:['#청도소싸움','#소싸움경기장','#천년전통','#한국전통스포츠']}
  },
  // 기존 waiting
  {
    experience_id:'EX-GB-HAN-001', experience_name:'경주 교촌마을 한복체험', category_sub:'한복 체험', region:'경상북도',
    script_30s:'오늘은 경주 교촌마을에서 한복을 입었어요. 신라 천 년 고도 분위기가 달라요. 근데 아무도 안 알려주는 게 있어요 — 교촌한옥마을 안에 최부잣집이 있어요. 12대 300년 부자의 집에서 한복 입고 사진 찍으면 진짜 신라 귀족 느낌이에요. 너무 한복이 경주에서 다른 의미라서 좋았습니다.',
    script_60s:'오늘은 경주 교촌마을에서 한복을 빌려 입었어요. 교촌마을은 신라 화백제도가 열리던 월정교 옆 전통 마을이에요. 한복 대여점들이 마을 곳곳에 있어요. 경주에서 한복 입으면 전주 한옥마을과 다른 에너지가 느껴져요. 신라 천 년 역사가 배경이니까요. 근데 아무도 안 알려주는 꿀팁 하나 — 교촌마을 안에 최부잣집이 있어요. 조선 시대부터 12대 300년 동안 만석꾼 부자였던 집인데, 한복 입고 이 집 마당에서 사진 찍으면 완전 신라·조선 귀족 느낌이 나요. 그냥 거리에서 찍는 한복 사진과 차원이 달라요. 최부잣집을 배경으로 한 한복 사진이 경주 최고의 인생 사진이에요. 너무 최부잣집 마당이 한복과 어울려서 좋았습니다.',
    secret_tip:'최부잣집 마당 한복 사진 — 12대 300년 부자 집 배경 귀족 느낌. 교촌마을 안쪽. 야경 시간대 한복+월정교 야경 동시 촬영이 경주 한복 인생 사진 최고 조합',
    filming_guide:'최부잣집 마당에서 한복 입고 촬영. 월정교 야경과 한복 동시 구도. 한복 치마 펼치는 순간 슬로우.',
    broll_ideas:['최부잣집 마당에서 한복 포즈','월정교 야경과 한복 동시 구도','한복 치마 펼치는 슬로우','교촌마을 기와집과 한복','경주 황리단길 배경 한복 산책'],
    hooks:['최부잣집 마당에서 한복 사진 찍었어요','경주 한복이 전주랑 다른 이유','12대 300년 부자 집 배경 인생 사진','월정교 야경 + 한복 조합 꿀팁','신라 귀족 느낌 한복 체험'],
    thumbnails:['최부잣집 마당 한복 포즈','월정교 야경과 한복 구도','한복 치마 펼치는 슬로우','교촌마을 기와집과 한복','황리단길 한복 산책'],
    captions:{youtube:'경주 교촌마을 한복 — 최부잣집 마당이 인생 사진 포인트 👘\n\n12대 300년 부자 집 배경 신라 귀족 느낌!\n월정교 야경과 한복 동시 구도도 꿀\n\n📍 경북 경주시 교촌마을\n👘 최부잣집 마당 + 월정교 야경 세트 코스\n\n#경주한복 #교촌마을 #경북여행 #한복체험 #최부잣집',instagram:'경주 교촌마을 최부잣집 마당에서 한복 입었어요 👘\n\n12대 300년 부자 집 배경 신라 귀족 느낌 ✨\n월정교 야경이랑 세트로\n\n📍 경북 경주 교촌마을\n\n#경주한복 #교촌마을 #경북여행 #GemKorea',tiktok:'경주 한복 꿀팁 👘 교촌마을 최부잣집 마당에서 사진 찍으면 신라 귀족 느낌이에요! 12대 300년 부자 집 배경 // 월정교 야경이랑 세트 코스 #경주한복 #교촌마을 #경북여행'},
    hashtags:{korean:['#한국여행','#경북여행','#경주여행','#한복체험','#GemKorea'],place_specific:['#경주한복','#교촌마을','#최부잣집','#월정교야경']}
  },
  {
    experience_id:'EX-BS-TEM-001', experience_name:'부산 범어사 템플스테이', category_sub:'사찰 체험', region:'부산광역시',
    script_30s:'오늘은 부산 범어사 템플스테이를 했어요. 부산 금정산 안 천 년 사찰이에요. 근데 아무도 안 알려주는 게 있어요 — 범어사 새벽 예불 후 금정산을 혼자 걷는 시간이 있어요. 부산 도심이 발아래 보이는 그 새벽이 진짜 다른 경험이에요. 너무 도시 속 사찰이 이런 거구나 싶어서 좋았습니다.',
    script_60s:'오늘은 부산 금정산 범어사 템플스테이를 했어요. 범어사는 신라 의상대사가 창건한 1,300년 역사의 고찰이에요. 부산 도심에서 30분이면 오는데, 도착하는 순간 완전히 다른 세계예요. 템플스테이는 1박 2일 프로그램으로 새벽 예불·발우공양·스님과의 차담·포행 등을 체험해요. 근데 아무도 안 알려주는 꿀팁 하나 — 범어사 템플스테이만의 특별한 것이 있어요. 새벽 예불이 끝나고 일출 무렵 금정산 성벽을 혼자 걸을 수 있는 자유 시간이 있어요. 그 시간에 성벽 위에서 해운대·광안대교·부산 도심 전체가 새벽빛 아래 펼쳐지는 뷰가 나와요. 천 년 사찰에서 기도하고 나와서 현대 도시를 내려다보는 그 대비가 진짜 범어사 템플스테이만의 경험이에요. 너무 천 년과 현재가 공존하는 그 새벽이라서 좋았습니다.',
    secret_tip:'새벽 예불 후 금정산 성벽 자유 시간 — 일출 무렵 부산 도심+해운대+광안대교 전체 새벽 뷰. 천 년 사찰과 현대 도시의 극적 대비. 부산 도심 30분 접근성',
    filming_guide:'새벽 금정산 성벽에서 부산 도심 파노라마. 범어사 대웅전 새벽빛. 발우공양 정성스러운 손 클로즈업.',
    broll_ideas:['금정산 성벽 부산 도심 새벽 파노라마','범어사 대웅전 새벽빛 촬영','발우공양 정성스러운 손 클로즈업','범어사 천 년 소나무 숲 포행','스님 예불 등 켜는 장면'],
    hooks:['금정산에서 부산 도심 새벽 뷰 봤어요','범어사 템플스테이 새벽의 비밀','천 년 사찰에서 광안대교가 내려다보여요','부산 도심 30분인데 완전 다른 세계','새벽 예불 후 성벽 걷는 그 시간'],
    thumbnails:['금정산 성벽 부산 도심 새벽 파노라마','범어사 대웅전 새벽빛','발우공양 손 클로즈업','소나무 숲 포행','스님 예불 등 켜기'],
    captions:{youtube:'범어사 템플스테이 — 새벽 금정산에서 부산이 보여요 🛕\n\n천 년 사찰에서 기도하고 광안대교 내려다보는 그 대비!\n부산 도심 30분 접근\n\n📍 부산 금정구 범어사\n🛕 새벽 예불 후 금정산 성벽 자유 시간\n\n#범어사템플스테이 #부산여행 #범어사 #금정산 #템플스테이',instagram:'범어사 새벽 금정산에서 부산 도심 내려다봤어요 🛕\n\n천 년 사찰과 현대 도시의 극적 대비 ✨\n부산 도심 30분인데 완전 다른 세계\n\n📍 부산 금정구 범어사\n\n#범어사템플스테이 #부산여행 #범어사 #GemKorea',tiktok:'범어사 템플스테이 꿀팁 🛕 새벽 예불 후 금정산 성벽에서 부산 도심이 다 보여요! 천 년 사찰+현대 도시 극적 대비 // 부산 도심 30분 #범어사템플스테이 #부산여행 #금정산'},
    hashtags:{korean:['#한국여행','#부산여행','#템플스테이','#금정산','#GemKorea'],place_specific:['#범어사템플스테이','#범어사','#금정산성벽','#부산새벽뷰']}
  },
  {
    experience_id:'EX-SE-FUD-001', experience_name:'서울 인사동 전통문화거리', category_sub:'전통음식 체험', region:'서울특별시',
    script_30s:'오늘은 서울 인사동에 왔어요. 전통문화가 거리 전체에 살아있어요. 근데 아무도 안 알려주는 게 있어요 — 인사동 쌈지길 꼭대기 옥상에서 서울 전경이 무료로 보여요. 거기서 전통 과자 먹으면서 서울 보는 게 최고예요. 너무 무료 서울 뷰가 여기 있다는 게 좋았습니다.',
    script_60s:'오늘은 서울 종로 인사동 전통문화거리에 왔어요. 골동품·화랑·전통 공예품·전통 음식점이 골목마다 들어찬 서울 대표 전통 거리예요. 외국인 관광객들이 제일 좋아하는 한국 문화 거리이기도 해요. 쌈지길이라는 나선형 쇼핑몰 안에서 전통 공예품과 독립 브랜드들을 구경할 수 있어요. 근데 아무도 안 알려주는 꿀팁 하나 — 쌈지길을 계속 올라가면 옥상 테라스가 나와요. 거기서 인사동 골목 전체와 서울 북촌·창덕궁 방향이 보여요. 완전 무료예요. 전통 과자집에서 한과·약과 사서 옥상에서 먹으면서 서울 전경 보는 게 인사동 최고 코스예요. 아무도 올라가지 않아서 사람도 별로 없어요. 너무 이 꿀팁을 모르는 사람이 많아서 좋았습니다.',
    secret_tip:'쌈지길 옥상 테라스 무료 서울 전경 — 인사동 골목+북촌+창덕궁 방향 파노라마. 대부분 아래서만 구경하고 올라가지 않음. 전통 과자 사서 옥상 피크닉',
    filming_guide:'쌈지길 나선형 구조 위에서 내려다보는 구도. 옥상 테라스 서울 전경 광각. 인사동 골목 정면 광각.',
    broll_ideas:['쌈지길 나선형 위에서 내려다보기','옥상 테라스 서울 북촌 전경 광각','인사동 골목 전통 간판들','전통 과자 한과·약과 클로즈업','외국인들 인사동 거리 구경'],
    hooks:['쌈지길 옥상에 무료 서울 전경 있어요','인사동 몇 번 가도 이건 모르는 사람 많아요','전통 과자 먹으면서 서울 전경 보는 법','쌈지길 옥상 올라가 본 적 있어요?','인사동 꿀팁 아무도 안 알려줘요'],
    thumbnails:['쌈지길 옥상 서울 전경 광각','쌈지길 나선형 위에서 내려다보기','인사동 골목 전통 간판들','한과 약과 클로즈업','외국인들 거리 구경'],
    captions:{youtube:'인사동 쌈지길 옥상이 무료 서울 전경이에요 🏙️\n\n대부분 아래서만 구경하고 올라가지 않아요!\n전통 과자 사서 옥상 피크닉\n\n📍 서울 종로구 인사동 쌈지길 옥상\n🏙️ 인사동 골목+북촌+창덕궁 방향 파노라마\n\n#인사동 #쌈지길 #서울여행 #무료전망 #전통문화거리',instagram:'인사동 쌈지길 옥상이 무료 서울 전경이에요 🏙️\n\n대부분 모르고 지나쳐요 ✨\n전통 과자 사서 옥상 피크닉 최고\n\n📍 서울 종로 인사동 쌈지길\n\n#인사동 #쌈지길 #서울여행 #무료 #GemKorea',tiktok:'인사동 꿀팁 🏙️ 쌈지길 끝까지 올라가면 무료 서울 전경 나와요! 대부분 아래서만 구경해서 몰라요 // 전통 과자 사서 옥상 피크닉 #인사동 #쌈지길 #서울여행 #무료'},
    hashtags:{korean:['#한국여행','#서울여행','#인사동','#무료명소','#GemKorea'],place_specific:['#인사동','#쌈지길옥상','#전통문화거리','#무료서울전경']}
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
