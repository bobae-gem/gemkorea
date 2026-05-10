const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const now = new Date().toISOString().slice(0,19);

const newExps = [
  {experience_id:'EX-GW-NAT-038',name:'양구 해안분지 DMZ 생태 탐방',category_main:'문화/체험',category_sub:'역사 체험',region_main:'GW',region_sub:'강원특별자치도 양구군',address:'강원특별자치도 양구군 해안면 해안분지',lat:38.2308,lng:128.0983,price:'입산 허가 필요',duration:'3~4시간',reservation_required:true,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'강원도 양구 해안분지(펀치볼)에서 6·25 전쟁 격전지와 DMZ 접경 지역 생태를 탐방하는 체험이다. 해발 500~600m 분지 형태의 특이한 지형과 전쟁 유적·자연 생태가 공존하는 희귀 체험 공간이다.',source_urls:['https://www.yanggu.go.kr/'],data_confidence:'high',tags:['해안분지','양구','강원','DMZ','6·25전쟁','펀치볼','분지지형'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'사전 입산 허가 필수',phone:'033-480-2251'},
  {experience_id:'EX-GN-NAT-039',name:'남해 섬섬길 해안 트레킹',category_main:'문화/체험',category_sub:'자연체험',region_main:'GN',region_sub:'경상남도 남해군',address:'경상남도 남해군 남해읍 설천면 섬섬길 일원',lat:34.8450,lng:127.8919,price:'무료',duration:'3~5시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'남해 해안을 따라 걷는 섬섬길 트레킹 코스를 체험하는 프로그램이다. 남해 다도해의 섬들을 바라보며 해안 절벽과 논밭이 어우러지는 독특한 경관을 즐기는 경남 최고의 해안 트레킹 코스다.',source_urls:['https://www.namhae.go.kr/'],data_confidence:'high',tags:['섬섬길','남해','경남','해안트레킹','다도해','절벽','논밭'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (무료)',phone:'055-860-3671'},
  {experience_id:'EX-GW-NAT-039',name:'삼척 죽서루+오십천 유람',category_main:'문화/체험',category_sub:'역사 체험',region_main:'GW',region_sub:'강원특별자치도 삼척시',address:'강원특별자치도 삼척시 죽서루길 37',lat:37.4486,lng:129.1628,price:'성인 2,000원',duration:'1~2시간',reservation_required:false,target_user:['개인','커플','가족'],nearby_places:[],related_heritage_ids:[],short_description:'관동팔경 중 하나인 삼척 죽서루에서 오십천 절벽 위 절경을 감상하는 체험이다. 고려 시대 창건된 죽서루는 자연 바위 위에 세워진 독특한 구조로 오십천 계곡과 어우러지는 풍경이 아름답다.',source_urls:['https://www.samcheok.go.kr/'],data_confidence:'high',tags:['죽서루','삼척','강원','관동팔경','오십천','고려','바위위건물'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00',phone:'033-570-3670'},
  {experience_id:'EX-GN-NAT-040',name:'하동 평사리 최참판댁 걷기',category_main:'문화/체험',category_sub:'역사 체험',region_main:'GN',region_sub:'경상남도 하동군',address:'경상남도 하동군 악양면 평사리 들판 일원',lat:35.0672,lng:127.6889,price:'무료',duration:'1~2시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'소설 토지의 배경 평사리 들판을 걸으며 섬진강을 바라보는 문학 체험이다. 최참판댁 고택에서 내려다보이는 악양 들판과 섬진강 풍경이 소설 속 장면을 그대로 재현하는 하동 문학 여행의 핵심이다.',source_urls:['https://www.hadong.go.kr/'],data_confidence:'high',tags:['평사리','하동','토지','박경리','경남','문학여행','섬진강'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (무료)',phone:'055-880-2960'},
  {experience_id:'EX-GG-NAT-045',name:'수원 광교산 수변공원 봄나들이',category_main:'문화/체험',category_sub:'자연체험',region_main:'GG',region_sub:'경기도 수원시',address:'경기도 수원시 장안구 광교산 일원',lat:37.3200,lng:127.0356,price:'무료',duration:'2~3시간',reservation_required:false,target_user:['가족','커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'수원 광교산과 수변공원을 연계하는 봄 나들이 코스다. 벚꽃 시즌 광교 호수 공원과 광교산 등산이 어우러지는 수원 시민 대표 봄 코스로 수원화성과 함께 묶으면 수원 완벽 봄 여행이다.',source_urls:['https://www.suwon.go.kr/'],data_confidence:'high',tags:['광교산','수원','경기','봄벚꽃','광교호수','수변공원','봄나들이'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'seasonal',operating_hours:'3월 말~4월 초 벚꽃 시즌 (무료)',phone:'031-228-4700'},
  {experience_id:'EX-JN-NAT-043',name:'장흥 편백 우드랜드 산림욕',category_main:'문화/체험',category_sub:'자연체험',region_main:'JN',region_sub:'전라남도 장흥군',address:'전라남도 장흥군 장흥읍 우드랜드길 180',lat:34.6736,lng:126.9131,price:'성인 3,000원',duration:'2~4시간',reservation_required:false,target_user:['개인','커플','가족'],nearby_places:[],related_heritage_ids:[],short_description:'전국 최대 편백 군락지 장흥 우드랜드에서 힐링 삼림욕과 편백 족욕을 즐기는 체험이다. 1,000ha 편백나무 숲에서 피톤치드 가득한 공기를 마시며 트레킹하는 전남 대표 치유 체험이다.',source_urls:['https://www.jhwoodland.co.kr/'],data_confidence:'high',tags:['장흥우드랜드','장흥','전남','편백숲','삼림욕','족욕','치유'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00',phone:'061-864-0063'},
  {experience_id:'EX-GN-NAT-041',name:'창녕 화왕산 억새 트레킹',category_main:'문화/체험',category_sub:'자연체험',region_main:'GN',region_sub:'경상남도 창녕군',address:'경상남도 창녕군 창녕읍 화왕산 일원',lat:35.5444,lng:128.5222,price:'무료',duration:'3~4시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'해발 757m 화왕산 정상부 억새 평원을 탐방하는 가을 트레킹이다. 10월 억새가 온통 황금빛으로 물드는 화왕산은 경남 최고의 가을 억새 명소이며 화왕산성 역사도 함께 즐길 수 있다.',source_urls:['https://www.cng.go.kr/'],data_confidence:'high',tags:['화왕산','창녕','경남','억새','가을트레킹','화왕산성','황금억새'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'10월 억새 시즌',phone:'055-530-1400'},
  {experience_id:'EX-GW-NAT-040',name:'속초 청초호 봄꽃 투어',category_main:'문화/체험',category_sub:'자연체험',region_main:'GW',region_sub:'강원특별자치도 속초시',address:'강원특별자치도 속초시 청초호 수변공원',lat:38.2022,lng:128.5872,price:'무료',duration:'1~2시간',reservation_required:false,target_user:['커플','가족','개인'],nearby_places:[],related_heritage_ids:[],short_description:'속초 청초호 수변공원에서 봄꽃을 감상하는 체험이다. 아바이마을을 품은 청초호 주변 벚꽃과 유채꽃이 설악산을 배경으로 피어나는 봄 경관이 아름다운 속초 봄 필수 코스다.',source_urls:['https://www.sokcho.go.kr/'],data_confidence:'high',tags:['청초호봄꽃','속초','강원','벚꽃','유채꽃','설악산배경','봄'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'3월 말~4월 중순 봄꽃 시즌 (무료)',phone:'033-639-2690'},
  {experience_id:'EX-JN-NAT-044',name:'해남 두륜산 케이블카 남해 조망',category_main:'문화/체험',category_sub:'자연체험',region_main:'JN',region_sub:'전라남도 해남군',address:'전라남도 해남군 삼산면 대흥사길 400',lat:34.4667,lng:126.5875,price:'케이블카 왕복 성인 13,000원',duration:'1~2시간',reservation_required:false,target_user:['가족','커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'해남 두륜산 케이블카를 타고 한반도 최남단 남해 다도해를 조망하는 체험이다. 2.3km 케이블카로 올라가면 제주도·보길도·흑산도까지 보이는 전남 최고의 전망 포인트가 열린다.',source_urls:['https://www.haenam.go.kr/'],data_confidence:'high',tags:['두륜산케이블카','해남','전남','남해다도해','제주도조망','케이블카','전망'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~17:00',phone:'061-534-8900'},
  {experience_id:'EX-GN-NAT-042',name:'진해 군항제+경화역 벚꽃',category_main:'문화/체험',category_sub:'축제',region_main:'GN',region_sub:'경상남도 창원시',address:'경상남도 창원시 진해구 경화역 일원',lat:35.1578,lng:128.6792,price:'무료',duration:'3~5시간',reservation_required:false,target_user:['커플','가족','개인'],nearby_places:[],related_heritage_ids:[],short_description:'매년 3~4월 한국 최대 벚꽃 축제 진해 군항제에서 36만 그루 왕벚나무를 감상하는 봄 체험이다. 경화역 철로변 벚꽃 터널이 군항제의 하이라이트로 전국 사진가들이 몰리는 봄 최고 포토 명소다.',source_urls:['https://www.changwon.go.kr/'],data_confidence:'high',tags:['군항제','진해','경화역','창원','경남','벚꽃','봄축제'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'매년 3~4월 (10일간)',phone:'055-225-3691'},
  {experience_id:'EX-GG-NAT-046',name:'가평 잣 수확 체험',category_main:'문화/체험',category_sub:'농촌 체험',region_main:'GG',region_sub:'경기도 가평군',address:'경기도 가평군 가평읍 잣농장 일원',lat:37.8583,lng:127.5097,price:'1인 15,000원~',duration:'1~2시간',reservation_required:true,target_user:['가족','개인'],nearby_places:[],related_heritage_ids:[],short_description:'잣의 고장 가평에서 9~10월 잣을 직접 수확하는 농촌 체험이다. 가평 특산품 잣나무 농장에서 잣구르미(잣송이)를 직접 수확하고 즉석에서 까서 맛볼 수 있다.',source_urls:['https://www.gapyeong.go.kr/'],data_confidence:'high',tags:['잣수확체험','가평','경기','잣','잣나무','가을체험','특산품'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'seasonal',operating_hours:'9~10월 잣 수확 시즌',phone:'031-580-2726'},
  {experience_id:'EX-JN-NAT-045',name:'진도 운림산방+쌍계사 벚꽃',category_main:'문화/체험',category_sub:'역사 체험',region_main:'JN',region_sub:'전라남도 진도군',address:'전라남도 진도군 의신면 운림산방로 315',lat:34.4394,lng:126.2231,price:'성인 2,000원',duration:'2~3시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'조선 시대 남종화의 거장 허련(소치)이 그림 그리던 운림산방을 탐방하는 체험이다. 운림산방 연못과 동백나무·봄 벚꽃이 어우러지는 정원이 아름다우며 진도 쌍계사 벚꽃과 연계하면 진도 봄 완벽 코스다.',source_urls:['https://www.jindo.go.kr/'],data_confidence:'high',tags:['운림산방','진도','전남','허련','소치','봄벚꽃','남종화'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~18:00',phone:'061-540-6242'}
];

const newShorts = [
  {
    experience_id:'EX-DG-MKT-001', experience_name:'대구 서문시장 야시장', category_sub:'전통시장', region:'대구광역시',
    script_30s:'오늘은 대구 서문시장 야시장에 왔어요. 조선 3대 시장 중 하나예요. 근데 아무도 안 알려주는 게 있어요 — 서문시장 납작만두가 다른 지역 만두랑 달라요. 납작하게 눌려있어요. 그 모양이 서문시장 백 년 역사예요. 너무 모양에 역사가 있다는 게 좋았습니다.',
    script_60s:'오늘은 대구 서문시장 야시장에 왔어요. 조선 시대 3대 시장 중 하나였던 서문시장이 매주 화~일 저녁 야시장을 열어요. 납작만두·튀김·어묵·대구 특산 먹거리가 가득이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 서문시장 납작만두가 대구만의 독특한 음식이에요. 대부분 만두가 둥글거나 반달 모양인데 서문시장 납작만두는 납작하게 눌려 있어요. 이 모양이 된 이유가 있어요. 과거 기차역 인근 이주 노동자들이 도시락으로 만두를 쌌는데, 납작하게 눌리면 도시락 통에 더 많이 들어가기 때문이에요. 필요가 만든 모양이에요. 지금은 이 납작한 모양이 서문시장 100년 전통이 됐어요. 모양 하나에 이런 역사가 담겨있어요. 너무 필요가 역사가 된 음식이라서 좋았습니다.',
    secret_tip:'납작만두 납작한 이유 = 도시락 통에 더 많이 들어가려고 — 이주 노동자의 필요가 만든 모양. 모양 하나에 서문시장 100년 역사. 버스킹 공연 야시장 저녁 분위기도 포인트',
    filming_guide:'납작만두 납작한 모양 클로즈업. 서문시장 야시장 야경 광각. 만두 한 입 먹는 표정.',
    broll_ideas:['납작만두 납작한 모양 클로즈업','서문시장 야시장 야경 광각','만두 한 입 먹는 표정','야시장 버스킹 공연','서문시장 내부 다양한 먹거리'],
    hooks:['납작만두가 왜 납작한지 알아요?','도시락 통 때문에 납작해졌어요','필요가 역사가 된 음식이에요','서문시장 100년 전통의 비밀','대구 서문시장 야시장 꿀팁'],
    thumbnails:['납작만두 납작한 모양','야시장 야경 광각','만두 먹는 표정','버스킹 공연','서문시장 먹거리'],
    captions:{youtube:'대구 서문시장 야시장 — 납작만두가 왜 납작한지 알아요? 🥟\n\n도시락 통에 많이 들어가려고!\n필요가 만든 100년 역사\n\n📍 대구 중구 서문시장\n🥟 화~일 야시장 19:00~23:00\n\n#서문시장야시장 #대구서문시장 #대구여행 #납작만두 #야시장',instagram:'대구 서문시장 납작만두가 납작한 이유 🥟\n\n도시락 통 때문에 납작해진 100년 역사 ✨\n필요가 만든 음식 역사예요\n\n📍 대구 서문시장 야시장\n\n#서문시장 #대구여행 #납작만두 #야시장 #GemKorea',tiktok:'대구 서문시장 야시장 꿀팁 🥟 납작만두가 왜 납작한지 알아요? 도시락 통에 많이 들어가려고! 이주 노동자의 필요가 만든 100년 역사 #서문시장 #대구여행 #납작만두'},
    hashtags:{korean:['#한국여행','#대구여행','#야시장','#납작만두','#GemKorea'],place_specific:['#대구서문시장','#납작만두역사','#조선3대시장','#서문시장야시장']}
  },
  {
    experience_id:'EX-GW-MKT-002', experience_name:'강릉 정동진 모래시계 공원 장터', category_sub:'전통시장', region:'강원도',
    script_30s:'오늘은 정동진 모래시계 공원 장터에 왔어요. 일출 명소 옆 해산물 장터예요. 근데 아무도 안 알려주는 게 있어요 — 장터는 새벽 일출 전부터 열어요. 일출 보고 나서 갓 잡은 오징어 한 마리 사면 완벽해요. 너무 일출+해산물 조합이 진짜라서 좋았습니다.',
    script_60s:'오늘은 강원도 강릉 정동진 모래시계 공원 장터에 왔어요. 세계에서 바다와 가장 가까운 기차역 정동진 옆 해산물 장터예요. 새벽 일출 명소이기도 한 이곳에 어민들이 갓 잡은 오징어·홍합·명란 등을 팔아요. 근데 아무도 안 알려주는 꿀팁 하나 — 정동진 장터는 새벽 4시부터 열어요. 일출 전부터 어민들이 나와서 당일 잡은 해산물을 팔거든요. 일출 보러 온 사람들이 해가 뜨고 나서 오징어·홍합·명란을 사서 즉석에서 먹는 게 정동진 여행의 완벽한 마무리예요. 일출 직후 갓 나온 따뜻한 오징어 한 마리 먹으면서 동해 바다 보는 그 조합이에요. 너무 새벽 일출+갓 잡은 해산물 조합이 최고라서 좋았습니다.',
    secret_tip:'정동진 장터 새벽 4시부터 오픈 — 일출 전 어민 해산물 판매. 일출 직후 갓 잡은 오징어·홍합 즉석 구매. 정동진역 방파제 끝 일출 포인트도 함께',
    filming_guide:'새벽 장터 해산물 진열 장면. 일출 배경 오징어 먹는 클로즈업. 정동진역 앞 동해 새벽 파노라마.',
    broll_ideas:['새벽 장터 해산물 진열','일출 배경 오징어 먹기','정동진역 동해 새벽 파노라마','갓 잡은 오징어 선도','정동진 모래시계 공원'],
    hooks:['정동진 장터 새벽 4시에 열어요','일출+갓 잡은 오징어 조합이에요','일출 직후 해산물 먹는 그 조합','세계에서 바다 가장 가까운 기차역','정동진 장터 꿀팁'],
    thumbnails:['새벽 장터 해산물 진열','일출 배경 오징어 먹기','정동진역 새벽 파노라마','갓 잡은 오징어','모래시계 공원'],
    captions:{youtube:'정동진 장터 — 새벽 4시에 열어요 🦑\n\n일출 직후 갓 잡은 오징어 즉석에서!\n일출+해산물 완벽한 정동진 조합\n\n📍 강원도 강릉시 정동진 모래시계 공원 장터\n🦑 새벽 4시부터 오픈 / 일출 직후 방문 추천\n\n#정동진장터 #강릉 #강원도여행 #정동진일출 #갓잡은해산물',instagram:'정동진 장터 새벽 4시부터 열어요 🦑\n\n일출 직후 갓 잡은 오징어 즉석에서 ✨\n일출+해산물 정동진 완벽 조합\n\n📍 강원 강릉 정동진\n\n#정동진장터 #강릉여행 #강원도 #정동진일출 #GemKorea',tiktok:'정동진 장터 꿀팁 🦑 새벽 4시에 열어요! 일출 보고 갓 잡은 오징어 즉석에서 먹는 게 완벽한 조합 // 세계 바다 가장 가까운 기차역 정동진 #정동진 #강릉여행 #강원도'},
    hashtags:{korean:['#한국여행','#강원도여행','#강릉여행','#정동진','#GemKorea'],place_specific:['#정동진장터','#새벽4시오픈','#일출+해산물','#갓잡은오징어']}
  },
  {
    experience_id:'EX-SE-CUL-002', experience_name:'서울 국립국악원 토요공연', category_sub:'문화예술', region:'서울특별시',
    script_30s:'오늘은 국립국악원 토요 공연을 봤어요. 무료예요. 근데 아무도 안 알려주는 게 있어요 — 공연 전 45분에 가면 악기 체험 코너가 있어요. 북·장구·해금을 직접 쳐봐요. 공연 전 예열이 훨씬 감동을 높여요. 너무 참여하고 보는 것이 달라서 좋았습니다.',
    script_60s:'오늘은 서울 서초구 국립국악원에서 매주 토요일 열리는 상설 공연을 봤어요. 무료예요. 판소리·가야금·사물놀이·무용이 한 무대에서 펼쳐지는 한국 전통 공연의 종합판이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 공연 시작 45분 전에 도착하면 공연 전 국악기 체험 코너가 열려요. 북·장구·해금·대금을 실제로 연주해볼 수 있어요. 그리고 국악 해설사가 각 악기와 공연에 대해 설명해줘요. 이 사전 체험 후 본 공연을 보면 완전히 다르게 들려요. 장구 박자가 어떻게 나오는지 알고 들으면 장구 소리가 따로 들리거든요. 너무 직접 만지고 보는 것이 이렇게 달라서 좋았습니다.',
    secret_tip:'공연 45분 전 도착 = 사전 악기 체험+해설 — 북·장구·해금 직접 연주. 사전 체험 후 공연 보면 소리가 달리 들림. 무료. 국악원 정원 산책도 포함',
    filming_guide:'사전 악기 체험 장구 치는 클로즈업. 무대 위 전통 공연 전체 광각. 국악원 정원 소나무 배경.',
    broll_ideas:['사전 악기 체험 장구 치기','전통 공연 무대 전체 광각','국악원 정원 소나무','판소리 소리꾼 클로즈업','가야금 연주 손 클로즈업'],
    hooks:['국립국악원 공연 45분 전에 가야 해요','사전 악기 체험 코너가 있어요','직접 치고 보면 소리가 달라요','무료 토요 공연 아는 사람?','국립국악원 꿀팁'],
    thumbnails:['사전 장구 체험','전통 공연 무대 광각','국악원 정원','판소리 소리꾼','가야금 손'],
    captions:{youtube:'국립국악원 토요공연 꿀팁 — 45분 전에 도착해야 해요 🎵\n\n악기 체험 코너 북·장구·해금 직접 연주!\n체험 후 공연 보면 소리가 달리 들려요\n\n📍 서울 서초구 국립국악원\n🎵 매주 토요일 15:00 무료 공연\n\n#국립국악원토요공연 #서울여행 #국악 #무료공연 #사전악기체험',instagram:'국립국악원 토요공연 45분 전에 가야 해요 🎵\n\n악기 체험 코너 있어요 장구 직접 치기 ✨\n체험 후 공연 소리가 달리 들려요 무료예요\n\n📍 서울 서초구 국립국악원\n\n#국립국악원 #서울여행 #국악 #무료공연 #GemKorea',tiktok:'국립국악원 꿀팁 🎵 공연 45분 전에 가면 악기 체험 코너 있어요! 북 장구 해금 직접 치고 나서 공연 보면 소리가 달리 들려요 // 무료 토요 공연 #국립국악원 #서울여행 #국악'},
    hashtags:{korean:['#한국여행','#서울여행','#국악','#무료공연','#GemKorea'],place_specific:['#국립국악원토요공연','#사전악기체험','#무료국악','#45분전도착']}
  },
  {
    experience_id:'EX-JB-CUL-002', experience_name:'전주 한옥마을 야간 투어', category_sub:'야경/야간투어', region:'전라북도',
    script_30s:'오늘은 전주 한옥마을 야간 투어를 했어요. 한지 등불이 켜지는 밤이에요. 근데 아무도 안 알려주는 게 있어요 — 경기전 앞에서 한옥 처마 라인이 달빛 아래 실루엣이 돼요. 그 구도가 낮에는 절대 나오지 않아요. 너무 밤이 더 아름다운 한옥이라서 좋았습니다.',
    script_60s:'오늘은 전북 전주 한옥마을을 밤에 걸었어요. 700채 한옥에 한지 등불이 켜지면 낮과 완전히 다른 분위기예요. 야간 시장도 열리고 경기전 앞 광장에서 공연도 해요. 근데 아무도 안 알려주는 꿀팁 하나 — 야간 한옥마을 최고 포인트가 경기전 앞이에요. 경기전 담장 너머 한옥 처마들이 달빛 아래 실루엣으로 보이는 장면이 낮에는 절대 나오지 않아요. 그 실루엣 구도에서 찍은 사진이 전주 한옥마을 최고 야간 사진이에요. 경기전이 문을 닫아도 담장 밖에서 이 뷰는 볼 수 있어요. 사람들이 대부분 한지등이 켜진 골목만 찍고 돌아가는데 경기전 앞 달빛 실루엣을 모르는 사람이 너무 많아요. 너무 달빛 아래 한옥 실루엣이 예술이라서 좋았습니다.',
    secret_tip:'경기전 앞 담장 너머 한옥 처마 달빛 실루엣 — 낮에는 절대 안 나오는 야간 한옥 사진. 대부분 한지등 골목만 찍고 이 포인트 놓침. 경기전 문 닫혀도 담장 밖에서 촬영 가능',
    filming_guide:'경기전 담장 너머 한옥 처마 달빛 실루엣. 한지등 켜진 골목 야경. 야간 시장 먹거리 클로즈업.',
    broll_ideas:['경기전 담장 한옥 처마 달빛 실루엣','한지등 켜진 골목 야경','야간 시장 먹거리','전주 한옥마을 야간 전체 광각','초승달과 한옥 지붕 구도'],
    hooks:['경기전 앞 달빛 실루엣이 진짜예요','낮에는 절대 나오지 않는 구도','달빛 아래 한옥 처마가 예술이에요','대부분 이 포인트를 모르고 가요','전주 한옥마을 야간 꿀팁'],
    thumbnails:['경기전 달빛 실루엣','한지등 골목 야경','야간 시장 먹거리','전주 야간 전체 광각','초승달과 한옥'],
    captions:{youtube:'전주 한옥마을 야간 — 경기전 달빛 실루엣이 진짜예요 🏯\n\n낮에는 절대 안 나오는 구도!\n대부분 이 포인트 모르고 가요\n\n📍 전북 전주시 한옥마을 경기전 앞\n🏯 야간 18:00~22:00\n\n#전주한옥마을야간 #전주 #전북여행 #경기전 #달빛한옥',instagram:'전주 한옥마을 야간 경기전 달빛 실루엣 진짜예요 🏯\n\n낮에는 절대 안 나오는 구도 ✨\n대부분 이 포인트 모르고 가요\n\n📍 전북 전주 한옥마을 경기전\n\n#전주한옥마을 #전주여행 #전북 #달빛한옥 #GemKorea',tiktok:'전주 한옥마을 야간 꿀팁 🏯 경기전 앞에서 담장 너머 달빛 실루엣 찍어야 해요! 낮에는 절대 안 나오는 구도 // 대부분 한지등 골목만 찍고 이 포인트 몰라요 #전주한옥마을 #전주여행 #달빛한옥'},
    hashtags:{korean:['#한국여행','#전북여행','#전주여행','#야경','#GemKorea'],place_specific:['#전주한옥마을야간','#경기전달빛실루엣','#야간한옥포인트','#낮에없는구도']}
  },
  {
    experience_id:'EX-GG-SPT-001', experience_name:'과천 경마공원 승마 체험', category_sub:'승마/레포츠', region:'경기도',
    script_30s:'오늘은 과천 경마공원에서 승마 체험을 했어요. 말 위에 타는 거예요. 근데 아무도 안 알려주는 게 있어요 — 말 등에 앉을 때 허리를 곧게 세워야 해요. 구부리면 말이 불안해해요. 말이 사람의 자세를 느끼거든요. 너무 자세가 소통이라는 게 좋았습니다.',
    script_60s:'오늘은 경기도 과천 서울경마공원에서 승마 체험을 했어요. 서울 근교에서 말을 타볼 수 있는 특별한 체험이에요. 어린이·가족 단위 입문 승마 프로그램이 운영돼요. 근데 아무도 안 알려주는 꿀팁 하나 — 말 등에 앉을 때 허리를 곧게 세우는 자세가 핵심이에요. 허리를 굽히거나 앞으로 기울이면 말이 불안해하면서 자꾸 고개를 움직여요. 말은 기수의 무게 중심을 허리와 엉덩이로 느끼거든요. 허리를 세우고 어깨를 뒤로 펴면 말이 안정감을 느끼고 순하게 움직여요. 이 자세 하나가 승마의 80%예요. 교관이 "허리 세워요"를 계속 얘기하는 이유가 이것이에요. 너무 자세가 말과의 소통이라는 게 좋았습니다.',
    secret_tip:'말 등 탑승 = 허리 곧게 세우기 — 허리 굽히면 말이 불안해함. 기수 무게 중심을 허리·엉덩이로 느끼는 말. 이 자세가 승마 80%. 국립현대미술관+서울대공원+경마 과천 삼각',
    filming_guide:'허리 곧게 세워 승마하는 자세 클로즈업. 말 등 위에서 내려다보는 시선. 말 먹이 주기 체험.',
    broll_ideas:['허리 곧게 승마 자세 클로즈업','말 등 위에서 내려다보는 시선','말 먹이 주기 체험','경마공원 승마 전체 전경','말 갈기 클로즈업'],
    hooks:['말 탈 때 허리를 세워야 해요','구부리면 말이 불안해해요','허리가 말과의 소통이에요','자세 하나가 승마 80%예요','과천 경마공원 승마 꿀팁'],
    thumbnails:['허리 곧게 승마 자세','말 등 위에서 시선','말 먹이 주기','경마공원 전경','말 갈기'],
    captions:{youtube:'과천 경마공원 승마 체험 — 허리를 세워야 해요 🐎\n\n허리 굽히면 말이 불안해해요!\n자세 하나가 승마의 80%\n\n📍 경기도 과천시 서울경마공원\n🐎 화~일 체험 승마 운영\n\n#과천승마 #경마공원 #경기여행 #승마체험 #과천나들이',instagram:'과천 경마공원 승마 허리를 세워야 해요 🐎\n\n허리 굽히면 말이 불안해함 ✨\n자세가 말과의 소통이에요\n\n📍 경기 과천 서울경마공원\n\n#과천승마 #경마공원 #경기여행 #승마 #GemKorea',tiktok:'과천 경마공원 승마 꿀팁 🐎 허리를 곧게 세워야 해요! 구부리면 말이 불안해해서 자꾸 고개 움직임 // 이 자세 하나가 승마 80% #과천승마 #경마공원 #경기여행'},
    hashtags:{korean:['#한국여행','#경기여행','#과천여행','#승마','#GemKorea'],place_specific:['#과천경마공원승마','#승마허리세우기','#말과의소통','#입문승마체험']}
  },
  {
    experience_id:'EX-GG-MAK-003', experience_name:'양평 천연 염색 체험', category_sub:'전통공예', region:'경기도',
    script_30s:'오늘은 양평 공방에서 천연 염색을 했어요. 쪽·치자·황토로 염색해요. 근데 아무도 안 알려주는 게 있어요 — 천연 염색은 물에 빨수록 색이 빠지는 게 아니에요. 오히려 견뢰도가 높아요. 화학 염료랑 반대예요. 너무 자연이 화학보다 강하다는 게 좋았습니다.',
    script_60s:'오늘은 경기도 양평 공방에서 천연 염색 체험을 했어요. 쪽(남색)·치자(노랑)·황토(갈색)·홍화(분홍) 등 자연 식물에서 추출한 천연 염료로 스카프·손수건을 물들이는 체험이에요. 근데 아무도 안 알려주는 꿀팁 하나 — 천연 염색의 가장 놀라운 특성이 견뢰도예요. 화학 염료는 세탁할수록 색이 빠지는데 천연 염료는 반대예요. 천연 염료 성분이 섬유 분자와 화학 결합을 해서 시간이 지날수록 오히려 색이 안정되는 경향이 있어요. 특히 쪽 염색은 빨수록 남색이 더 선명해진다는 말이 있어요. 이 사실을 알면 천연 염색 제품을 선뜻 빨 수 있어요. 너무 자연이 화학보다 오래 간다는 역설이 좋았습니다.',
    secret_tip:'천연 염색 견뢰도 역설 — 세탁할수록 안정되는 경향. 쪽 염색은 빨수록 색 선명해짐. 화학 염료와 반대. 이 사실 알면 천연 염색 제품 관리가 달라짐. 양평 북한강 세트 코스',
    filming_guide:'쪽 남색 염료에 천 담그는 과정. 완성 스카프 색이 선명한 클로즈업. 염색 전후 색상 비교.',
    broll_ideas:['쪽 염료에 천 담그기','완성 스카프 선명한 색상','염색 전후 비교','홀치기 묶음 풀어 무늬 드러나기','양평 공방 자연 분위기'],
    hooks:['천연 염색 빨수록 색이 안정돼요','화학 염료랑 반대예요','쪽 염색은 빨수록 선명해져요','자연이 화학보다 오래 가는 역설','양평 천연 염색 꿀팁'],
    thumbnails:['쪽 염료에 천 담그기','완성 스카프 색상','염색 전후 비교','무늬 드러나기','양평 공방'],
    captions:{youtube:'양평 천연 염색 — 빨수록 색이 안정돼요 🎨\n\n화학 염료랑 반대예요!\n자연이 화학보다 오래 가는 역설\n\n📍 경기도 양평군 천연 염색 공방\n🎨 쪽·치자·황토·홍화 다양한 천연 염료\n\n#양평천연염색 #양평 #경기여행 #천연염색 #쪽염색',instagram:'양평 천연 염색 빨수록 색이 안정돼요 🎨\n\n화학 염료랑 반대 자연의 역설 ✨\n쪽 염색은 빨수록 선명해짐\n\n📍 경기 양평 천연 염색 공방\n\n#양평천연염색 #양평여행 #경기 #천연염색 #GemKorea',tiktok:'양평 천연 염색 꿀팁 🎨 빨수록 색이 안정돼요! 화학 염료랑 반대 // 쪽 염색은 빨수록 선명해진다는 말도 있어요 자연의 역설 #양평천연염색 #양평여행 #경기'},
    hashtags:{korean:['#한국여행','#경기여행','#양평여행','#천연염색','#GemKorea'],place_specific:['#양평천연염색','#쪽염색역설','#견뢰도높은천연','#세탁할수록안정']}
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
