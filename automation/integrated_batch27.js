const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const now = new Date().toISOString().slice(0,19);

const newExps = [
  {experience_id:'EX-GN-NAT-046',name:'창원 봉림사 은행나무',category_main:'문화/체험',category_sub:'자연체험',region_main:'GN',region_sub:'경상남도 창원시',address:'경상남도 창원시 의창구 봉림동 봉림사',lat:35.2500,lng:128.5833,price:'무료',duration:'1시간',reservation_required:false,target_user:['커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'경남 창원 봉림사 경내에 수령 400년 이상의 은행나무가 10월 황금빛으로 물드는 가을 명소를 탐방하는 체험이다. 작은 사찰 마당을 가득 채우는 황금 은행잎 낙엽이 경남 최고의 가을 사찰 명소다.',source_urls:['https://www.changwon.go.kr/'],data_confidence:'high',tags:['봉림사은행','창원','경남','은행나무','가을단풍','사찰','황금빛'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'10월 은행 시즌 (무료)',phone:'055-225-3691'},
  {experience_id:'EX-JN-NAT-049',name:'고흥 우주발사전망대',category_main:'문화/체험',category_sub:'역사 체험',region_main:'JN',region_sub:'전라남도 고흥군',address:'전라남도 고흥군 봉래면 나로우주센터로 490',lat:34.4319,lng:127.5344,price:'성인 3,000원',duration:'1~2시간',reservation_required:false,target_user:['가족','개인'],nearby_places:[],related_heritage_ids:[],short_description:'한국 최초 우주 발사체 나로호가 발사된 나로우주센터 인근 우주발사전망대를 탐방하는 체험이다. 발사대 방향으로 전망할 수 있는 전망대에서 한국 우주 개발의 역사를 이해하는 교육 체험이다.',source_urls:['https://www.kari.re.kr/'],data_confidence:'high',tags:['우주발사전망대','고흥','전남','나로호','우주개발','발사대','어린이'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~17:00',phone:'061-830-8888'},
  {experience_id:'EX-GW-NAT-045',name:'평창 메밀꽃밭+이효석 문학촌',category_main:'문화/체험',category_sub:'역사 체험',region_main:'GW',region_sub:'강원특별자치도 평창군',address:'강원특별자치도 평창군 봉평면 이효석길 33',lat:37.5658,lng:128.4906,price:'성인 2,000원',duration:'2~3시간',reservation_required:false,target_user:['커플','개인','가족'],nearby_places:[],related_heritage_ids:[],short_description:'메밀꽃 필 무렵 소설 배경지 평창 봉평 메밀꽃밭과 이효석 문학관을 탐방하는 체험이다. 매년 8~9월 하얀 메밀꽃이 봉평 들판을 가득 채우는 장관과 함께 소설 속 배경 공간을 직접 걸을 수 있다.',source_urls:['https://www.hyoseok.com/'],data_confidence:'high',tags:['봉평메밀꽃','이효석','평창','강원','메밀꽃필무렵','문학여행','8~9월'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'8~9월 메밀꽃 시즌',phone:'033-330-2700'},
  {experience_id:'EX-GN-NAT-047',name:'거창 수승대 계곡 피서',category_main:'문화/체험',category_sub:'자연체험',region_main:'GN',region_sub:'경상남도 거창군',address:'경상남도 거창군 위천면 수승대로 890',lat:35.7119,lng:127.8456,price:'무료',duration:'3~5시간',reservation_required:false,target_user:['가족','어린이','개인'],nearby_places:[],related_heritage_ids:[],short_description:'경남 거창 수승대 계곡에서 여름 피서를 즐기는 체험이다. 수승대 바위와 맑은 계곡물이 어우러지는 경관이 아름다우며 유학자 퇴계 이황과 인연이 있는 역사 유적도 함께 볼 수 있다.',source_urls:['https://www.geochang.go.kr/'],data_confidence:'high',tags:['수승대','거창','경남','계곡피서','수승대바위','이황','여름'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'seasonal',operating_hours:'6~9월 (무료)',phone:'055-940-3423'},
  {experience_id:'EX-GG-NAT-049',name:'의정부 부대찌개 원조 거리',category_main:'문화/체험',category_sub:'지역 먹거리',region_main:'GG',region_sub:'경기도 의정부시',address:'경기도 의정부시 의정부동 부대찌개 거리',lat:37.7381,lng:127.0436,price:'1만원~',duration:'1~2시간',reservation_required:false,target_user:['개인','커플','가족'],nearby_places:[],related_heritage_ids:[],short_description:'한국 부대찌개의 발원지 의정부에서 원조 부대찌개를 맛보는 먹거리 투어다. 6·25 전쟁 후 미군 부대 음식을 활용한 한국식 부대찌개의 발원지에서 50년 이상 된 원조 노포들을 방문한다.',source_urls:['https://www.ui4u.go.kr/'],data_confidence:'high',tags:['의정부부대찌개','의정부','경기','부대찌개원조','미군부대음식','노포','향토'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'11:00~22:00',phone:'031-828-2114'},
  {experience_id:'EX-JN-NAT-050',name:'나주 영산강 황포돛배',category_main:'문화/체험',category_sub:'역사 체험',region_main:'JN',region_sub:'전라남도 나주시',address:'전라남도 나주시 영강길 77 황포돛배 선착장',lat:35.0181,lng:126.7181,price:'성인 10,000원~',duration:'1시간',reservation_required:false,target_user:['가족','커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'조선 시대 영산강을 오가던 황포돛배를 타고 나주 영산강을 유람하는 체험이다. 전통 돛배를 타고 영산강 갈대밭과 노을을 감상하며 나주 고려시대 포구 문화를 이해한다.',source_urls:['https://www.naju.go.kr/'],data_confidence:'high',tags:['황포돛배','나주','전남','영산강','전통돛배','포구문화','갈대'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'10:00~17:00',phone:'061-330-8722'},
  {experience_id:'EX-GW-NAT-046',name:'평창 알펜시아 바이애슬론 코스',category_main:'문화/체험',category_sub:'스포츠 체험',region_main:'GW',region_sub:'강원특별자치도 평창군',address:'강원특별자치도 평창군 대관령면 올림픽로 715',lat:37.6592,lng:128.6956,price:'성인 10,000원~',duration:'1~2시간',reservation_required:true,target_user:['개인','청년'],nearby_places:[],related_heritage_ids:[],short_description:'2018 평창동계올림픽 바이애슬론 경기장에서 사격과 크로스컨트리 스키를 결합한 바이애슬론 입문 체험을 즐기는 프로그램이다. 올림픽 선수들이 사용했던 사격장을 직접 체험한다.',source_urls:['https://www.alpensia.com/'],data_confidence:'high',tags:['바이애슬론','알펜시아','평창','올림픽경기장','사격','크로스컨트리','스포츠'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~17:00',phone:'033-339-0000'},
  {experience_id:'EX-GN-NAT-048',name:'남해 물미해안 드라이브',category_main:'문화/체험',category_sub:'자연체험',region_main:'GN',region_sub:'경상남도 남해군',address:'경상남도 남해군 설천면 물미해안로',lat:34.9150,lng:127.8636,price:'무료',duration:'1~2시간',reservation_required:false,target_user:['커플','개인'],nearby_places:[],related_heritage_ids:[],short_description:'경남 남해 설천면 물미해안도로를 드라이브하는 체험이다. 남해 다도해를 옆에 두고 달리는 해안 드라이브 코스로 창선교 너머 창선도와 연결되는 아름다운 해안선이 펼쳐진다.',source_urls:['https://www.namhae.go.kr/'],data_confidence:'high',tags:['물미해안','남해','경남','해안드라이브','다도해','창선도','드라이브'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (무료)',phone:'055-860-3671'},
  {experience_id:'EX-GG-NAT-050',name:'연천 고대산 가을 단풍',category_main:'문화/체험',category_sub:'자연체험',region_main:'GG',region_sub:'경기도 연천군',address:'경기도 연천군 신서면 고대산 일원',lat:38.0917,lng:127.2222,price:'무료',duration:'3~4시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'경기도 연천군 고대산에서 가을 단풍 트레킹을 즐기는 체험이다. 해발 832m 고대산은 경기 북부 최고 단풍 명소로 10월 중순 붉은 단풍이 절정이며 한탄강 주상절리와 연계하면 연천 완벽 가을 코스다.',source_urls:['https://www.yeoncheon.go.kr/'],data_confidence:'high',tags:['고대산','연천','경기','단풍','가을트레킹','한탄강','경기북부'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'10월 단풍 시즌 (무료)',phone:'031-839-2562'},
  {experience_id:'EX-JN-NAT-051',name:'진도 신비의 바닷길 걷기',category_main:'문화/체험',category_sub:'자연체험',region_main:'JN',region_sub:'전라남도 진도군',address:'전라남도 진도군 고군면 회동리 신비의 바닷길 선착장',lat:34.4833,lng:126.3111,price:'무료',duration:'1~2시간',reservation_required:false,target_user:['가족','개인','외국인'],nearby_places:[],related_heritage_ids:[],short_description:'매년 음력 2~3월 사리 때 진도와 모도 사이 2.8km 바닷길이 열리는 자연 현상을 직접 걷는 체험이다. 갈라진 바닷속 길을 직접 걸으면서 조개·게 등을 잡는 특별한 자연 체험이다.',source_urls:['https://www.jindo.go.kr/'],data_confidence:'high',tags:['진도신비의바닷길','진도','전남','바다갈라짐','걷기체험','음력23월','조개잡기'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'annual',operating_hours:'매년 음력 2~3월 사리 때',phone:'061-540-6431'},
  {experience_id:'EX-GN-NAT-049',name:'통영 박경리 토지길 탐방',category_main:'문화/체험',category_sub:'역사 체험',region_main:'GN',region_sub:'경상남도 통영시',address:'경상남도 통영시 동피랑 일원',lat:34.8463,lng:128.4339,price:'무료',duration:'1~2시간',reservation_required:false,target_user:['개인','커플'],nearby_places:[],related_heritage_ids:[],short_description:'소설 토지의 작가 박경리의 고향 통영에서 그의 문학 발자취를 탐방하는 체험이다. 동피랑 벽화마을과 박경리 기념관·생가를 연결하는 코스로 통영의 문학·예술 정신을 이해한다.',source_urls:['https://www.tongyeong.go.kr/'],data_confidence:'high',tags:['박경리','통영','경남','토지','동피랑','문학투어','생가'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'연중 (무료)',phone:'055-650-2703'},
  {experience_id:'EX-GG-NAT-051',name:'파주 오두산 통일전망대',category_main:'문화/체험',category_sub:'역사 체험',region_main:'GG',region_sub:'경기도 파주시',address:'경기도 파주시 탄현면 필승로 369',lat:37.8639,lng:126.7072,price:'성인 3,000원',duration:'1~2시간',reservation_required:false,target_user:['가족','개인','외국인'],nearby_places:[],related_heritage_ids:[],short_description:'한강과 임진강이 합류하는 파주 오두산 통일전망대에서 북한을 바라보는 역사 탐방이다. 맑은 날 망원경으로 북한 황해도 개풍군을 볼 수 있으며 분단 역사를 이해하는 교육 체험이다.',source_urls:['https://www.tongiltour.co.kr/'],data_confidence:'high',tags:['통일전망대','파주','경기','북한조망','한강임진강합류','분단','교육'],tour_status:'candidate',shorts_status:'waiting',created_at:now,operation_status:'active',operating_hours:'09:00~16:00',phone:'031-945-0171'}
];

const newShorts = [
  {
    experience_id:'EX-JJ-FAR-001', experience_name:'제주 성산 일출봉 해녀 공연', category_sub:'문화예술', region:'제주특별자치도',
    script_30s:'오늘은 성산일출봉 옆 해녀 공연을 봤어요. 실제 해녀 어머니들이에요. 근데 아무도 안 알려주는 게 있어요 — 공연 후 해녀 어머니들이 잡은 해산물을 직접 팔아요. 방금 물질한 소라·전복이에요. 그게 해녀 분들 생계예요. 너무 공연이 일상이라는 게 좋았습니다.',
    script_60s:'오늘은 제주 서귀포 성산포 해녀 공연장에서 실제 해녀 시연을 봤어요. 매일 11시·13시·14시 세 번 현직 해녀들이 직접 물질을 시연하는 공연이에요. 무료예요. 근데 아무도 안 알려주는 꿀팁 하나 — 해녀 공연 후 해녀 어머니들이 방금 잡아온 소라·전복·해삼을 현장에서 팔아요. 관광용이 아니라 실제 그날 물질로 잡은 것들이에요. 이 해산물을 사서 먹으면 갓 잡은 신선함이 달라요. 그리고 이 판매 수입이 해녀 어머니들의 실제 생계예요. 단순한 관광 공연이 아니라 해녀들의 일상 생활 자체가 공연이 된 거예요. 그 사실 알고 해산물을 사면 완전히 다른 의미로 다가와요. 너무 공연이 일상이고 일상이 공연이라는 게 좋았습니다.',
    secret_tip:'공연 후 해녀 직접 판매 해산물 = 당일 물질로 잡은 실제 생계 — 관광용 아닌 진짜. 이 사실 알고 구매하면 의미 달라짐. 성산일출봉 입장과 함께 세트. 무료 공연',
    filming_guide:'해녀 물질 시연 수중 촬영. 숨비소리 올라오는 순간. 공연 후 해산물 판매 장면.',
    broll_ideas:['해녀 물질 시연 수중','숨비소리 올라오는 순간','공연 후 해산물 판매','성산일출봉 배경 해녀 공연','테왁 들고 입수하는 해녀'],
    hooks:['공연 후 방금 잡은 해산물 팔아요','해녀 어머니들 실제 생계예요','공연이 일상이고 일상이 공연이에요','관광용이 아닌 진짜 물질이에요','성산 해녀 공연 꿀팁'],
    thumbnails:['해녀 물질 수중','숨비소리 순간','해산물 판매','성산 배경 공연','테왁 입수'],
    captions:{youtube:'제주 해녀 공연 — 공연 후 방금 잡은 해산물 팔아요 🤿\n\n관광용이 아닌 진짜 생계예요!\n공연이 일상이고 일상이 공연인 그 순간\n\n📍 제주 서귀포시 성산포 해녀 공연장\n🤿 하루 3회 무료 공연 (11:00·13:00·14:00)\n\n#성산해녀공연 #제주여행 #해녀 #성산일출봉 #무료공연',instagram:'제주 해녀 공연 후 방금 잡은 해산물 팔아요 🤿\n\n관광용 아닌 진짜 생계 ✨\n공연이 일상이라는 게 감동이에요\n\n📍 제주 성산포 해녀 공연장\n\n#성산해녀공연 #제주여행 #해녀 #GemKorea',tiktok:'제주 해녀 공연 꿀팁 🤿 공연 후에 해녀 어머니들이 방금 잡은 소라·전복 팔아요! 관광용 아닌 진짜 생계예요 // 공연이 일상이고 일상이 공연인 그 감동 #성산해녀공연 #제주여행 #해녀'},
    hashtags:{korean:['#한국여행','#제주여행','#해녀','#성산일출봉','#GemKorea'],place_specific:['#성산해녀공연','#해녀직접판매','#공연이일상','#무료해녀시연']}
  },
  {
    experience_id:'EX-JJ-AGR-001', experience_name:'제주 감귤 따기 체험', category_sub:'농촌 체험', region:'제주특별자치도',
    script_30s:'오늘은 제주 서귀포 감귤 농장에서 귤을 땄어요. 근데 아무도 안 알려주는 게 있어요 — 귤은 꼭지가 붙어있는 게 더 오래 가요. 꼭지 없으면 거기서 세균이 들어와요. 따는 가위질이 핵심이에요. 너무 꼭지 하나가 이렇게 중요하다는 게 좋았습니다.',
    script_60s:'오늘은 제주 서귀포 남원읍 감귤 농장에서 귤 따기 체험을 했어요. 11~12월 귤 수확 시즌에 직접 따서 한 바구니 가져갈 수 있어요. 근데 아무도 안 알려주는 꿀팁 하나 — 귤 딸 때 꼭지가 중요해요. 귤을 딸 때 꼭지를 같이 잘라내야 해요. 꼭지가 붙어있으면 과일이 더 오래 신선하게 유지되는데, 꼭지를 너무 짧게 자르거나 없애면 그 부위에서 세균이 침투해서 빨리 상해요. 전용 가위로 꼭지를 1~2cm 남겨서 자르는 게 정확한 방법이에요. 그리고 귤 색이 아직 초록빛 돌아도 맛은 이미 달 수 있어요. 제주 귤은 색보다 향기로 익음을 판단해요. 향기 강한 게 더 달아요. 너무 꼭지 하나에 이런 과학이 있다는 게 좋았습니다.',
    secret_tip:'귤 따기 꼭지 1~2cm 남겨 자르기 — 꼭지 없으면 세균 침투 빨리 상함. 색보다 향기로 익음 판단. 향기 강한 게 더 달음. 서귀포 감귤 11~12월 시즌',
    filming_guide:'꼭지 1~2cm 남겨 자르는 가위질 클로즈업. 노란 귤 주렁주렁 농장 전경. 방금 딴 귤 향 맡는 표정.',
    broll_ideas:['꼭지 가위질 클로즈업','귤 주렁주렁 농장 전경','귤 향 맡는 표정','바구니 가득 귤','제주 감귤 향기 맡기'],
    hooks:['귤 꼭지를 남겨야 해요','꼭지 없으면 빨리 상해요','색 아닌 향기로 익음 판단','향기 강한 귤이 더 달아요','제주 감귤 따기 꿀팁'],
    thumbnails:['꼭지 가위질 클로즈업','귤 주렁주렁 농장','귤 향 맡는 표정','바구니 가득 귤','향기 맡기'],
    captions:{youtube:'제주 감귤 따기 — 꼭지를 남겨야 해요 🍊\n\n꼭지 없으면 세균 침투 빨리 상해요!\n색 아닌 향기로 익음 판단\n\n📍 제주 서귀포시 남원읍 감귤 농장\n🍊 11~12월 수확 시즌\n\n#제주감귤따기 #제주여행 #서귀포 #감귤농장 #귤꼭지',instagram:'제주 감귤 따기 꼭지를 남겨야 해요 🍊\n\n꼭지 없으면 빨리 상함 세균 침투 ✨\n향기 강한 게 더 달아요 색이 아니에요\n\n📍 제주 서귀포 감귤 농장\n\n#제주감귤따기 #제주여행 #서귀포 #감귤 #GemKorea',tiktok:'제주 감귤 따기 꿀팁 🍊 꼭지를 1~2cm 남겨 잘라야 해요! 꼭지 없으면 거기서 세균 침투 빨리 상함 // 색 아닌 향기 강한 게 더 달아요 #제주감귤따기 #제주여행 #서귀포'},
    hashtags:{korean:['#한국여행','#제주여행','#서귀포','#감귤따기','#GemKorea'],place_specific:['#제주감귤따기','#귤꼭지중요','#향기로익음판단','#서귀포감귤농장']}
  },
  {
    experience_id:'EX-GW-ECO-002', experience_name:'양구 두타연 생태 투어', category_sub:'자연체험', region:'강원도',
    script_30s:'오늘은 양구 두타연에 왔어요. 민통선 인근 청정 폭포예요. 근데 아무도 안 알려주는 게 있어요 — 두타연에 1급수 열목어가 살아요. 열목어는 물이 더러우면 못 살아요. 이 물고기의 존재가 물 청정도 증명이에요. 너무 물고기가 수질 인증이라는 게 좋았습니다.',
    script_60s:'오늘은 강원도 양구 두타연 폭포와 계곡을 탐방했어요. 민간인 출입 통제선 근처에 위치해 사전 출입 신청을 해야 해요. 그래서 사람이 거의 없어요. 근데 아무도 안 알려주는 꿀팁 하나 — 두타연 계곡에 천연기념물 열목어가 서식해요. 열목어는 수온 15도 이하, 1급수 이상의 청정 계곡에서만 살 수 있는 물고기예요. 이 물고기가 살고 있다는 게 두타연 물이 한국에서 가장 깨끗한 물 중 하나라는 살아있는 증거예요. 물을 마시면 안 되지만 손을 담가보면 믿기 어려울 만큼 차고 깨끗해요. 그리고 열목어가 서식하는 포인트가 따로 있어서 해설사에게 물어보면 알려줘요. 너무 물고기가 수질 인증이라는 게 좋았습니다.',
    secret_tip:'두타연 열목어 = 1급수 청정 인증 — 수온 15도 이하 1급수에서만 생존. 살아있는 수질 인증. 해설사에게 열목어 서식 포인트 물어보기. 사전 출입 신청 필수',
    filming_guide:'두타연 폭포 전경 광각. 1급수 맑은 계곡물 수중 촬영. 열목어 서식 포인트 안내판.',
    broll_ideas:['두타연 폭포 전경 광각','1급수 맑은 계곡물 수중','열목어 서식 포인트','민통선 인근 원시림','두타연 가는 길'],
    hooks:['두타연 열목어가 1급수 증명이에요','물고기가 수질 인증이라는 게 신기해요','한국에서 가장 깨끗한 물 중 하나','민통선 인근이라 사람이 없어요','양구 두타연 꿀팁'],
    thumbnails:['두타연 폭포 광각','맑은 계곡물 수중','열목어 서식 포인트','원시림','가는 길'],
    captions:{youtube:'양구 두타연 — 열목어가 1급수 청정 인증이에요 🐟\n\n살아있는 수질 증거!\n민통선 인근 사람 없는 청정 폭포\n\n📍 강원도 양구군 기린면 두타연\n🐟 사전 출입 신청 필수 / 해설사 동반\n\n#양구두타연 #양구 #강원도여행 #열목어 #청정계곡',instagram:'양구 두타연 열목어가 1급수 청정 인증이에요 🐟\n\n살아있는 수질 증거 ✨\n민통선 인근 사람 없는 청정 폭포\n\n📍 강원 양구 두타연\n\n#양구두타연 #양구여행 #강원도 #열목어 #GemKorea',tiktok:'양구 두타연 꿀팁 🐟 열목어가 살아있으면 1급수 청정 인증이에요! 살아있는 수질 증거 // 민통선 인근 사람 없는 청정 폭포 사전 신청 필수 #양구두타연 #양구여행 #강원도'},
    hashtags:{korean:['#한국여행','#강원도여행','#양구여행','#청정계곡','#GemKorea'],place_specific:['#양구두타연','#열목어1급수인증','#민통선청정','#사전출입신청']}
  },
  {
    experience_id:'EX-GN-TEM-001', experience_name:'통도사 연꽃 축제 탐방', category_sub:'사찰 체험', region:'경상남도',
    script_30s:'오늘은 통도사 연꽃 축제에 왔어요. 7~8월 연꽃이 경내를 가득 채워요. 근데 아무도 안 알려주는 게 있어요 — 연꽃은 이른 아침에만 활짝 피어요. 오전 11시면 오므려요. 그 시간 안에 봐야 해요. 너무 연꽃이 시간이 있다는 게 좋았습니다.',
    script_60s:'오늘은 경남 양산 통도사 연꽃 탐방을 했어요. 7~8월 통도사 경내 연못과 연지(연꽃 못)에 수백 송이 연꽃이 만개하는 시기예요. 무풍한송로 소나무 숲과 연꽃이 어우러지는 통도사가 여름 최고 사찰로 꼽혀요. 근데 아무도 안 알려주는 꿀팁 하나 — 연꽃 감상 최고 시간이 있어요. 연꽃은 이른 아침에만 활짝 피어있어요. 오전 7~10시 사이에 가장 활짝 피고 오전 11시 이후부터 꽃잎을 오므리기 시작해요. 그래서 연꽃 사진을 찍으려면 이른 아침에 가야 해요. 늦게 가면 연꽃이 오므려져 있어서 예쁜 사진이 안 나와요. 이 사실을 모르고 오후에 가는 사람들이 많아요. 너무 연꽃에 시간이 있다는 게 좋았습니다.',
    secret_tip:'연꽃 활짝 피는 시간 오전 7~10시 — 11시부터 오므리기 시작. 이른 아침 방문이 핵심. 오후엔 예쁜 사진 안 나옴. 통도사 무풍한송로 소나무 길 세트',
    filming_guide:'이른 아침 활짝 핀 연꽃 클로즈업. 연꽃 오므리는 모습 타임랩스. 무풍한송로 소나무+연꽃 배경.',
    broll_ideas:['이른 아침 활짝 핀 연꽃','연꽃 오므리는 타임랩스','소나무+연꽃 배경','통도사 연지 전경','연꽃 물방울 클로즈업'],
    hooks:['연꽃은 이른 아침에만 활짝 피어요','오전 11시면 오므려요','그 시간 안에 봐야 해요','오후에 가면 사진이 안 나와요','통도사 연꽃 꿀팁'],
    thumbnails:['이른 아침 활짝 연꽃','오므리는 타임랩스','소나무+연꽃 배경','연지 전경','물방울 클로즈업'],
    captions:{youtube:'통도사 연꽃 — 이른 아침 오전 7~10시가 핵심이에요 🌸\n\n11시부터 오므리기 시작!\n오후엔 예쁜 사진 안 나와요\n\n📍 경남 양산시 통도사 연지\n🌸 7~8월 연꽃 시즌 / 이른 아침 방문 추천\n\n#통도사연꽃 #통도사 #경남여행 #연꽃 #이른아침',instagram:'통도사 연꽃 이른 아침이 핵심이에요 🌸\n\n오전 7~10시 활짝 11시부터 오므림 ✨\n오후 가면 사진 안 나와요\n\n📍 경남 양산 통도사\n\n#통도사연꽃 #통도사 #경남여행 #연꽃 #GemKorea',tiktok:'통도사 연꽃 꿀팁 🌸 이른 아침 오전 7~10시에 가야 해요! 11시부터 오므리기 시작 // 오후에 가면 예쁜 연꽃 사진 못 찍어요 #통도사연꽃 #통도사 #경남여행'},
    hashtags:{korean:['#한국여행','#경남여행','#양산여행','#연꽃','#GemKorea'],place_specific:['#통도사연꽃','#연꽃이른아침','#오전7~10시','#연꽃오므리기']}
  },
  {
    experience_id:'EX-JN-AGR-001', experience_name:'담양 대나무 숯 비누 만들기', category_sub:'전통공예', region:'전라남도',
    script_30s:'오늘은 담양 공방에서 대나무 숯 비누를 만들었어요. 대나무가 비누가 돼요. 근데 아무도 안 알려주는 게 있어요 — 대나무 숯이 검은색인데 세안하면 피부가 하얘져요. 숯이 피지·노폐물을 흡착하는 거예요. 검정이 하얗게 하는 역설이에요. 너무 검정이 정화라는 게 좋았습니다.',
    script_60s:'오늘은 전남 담양 죽향문화로 공방에서 대나무 숯을 이용한 천연 비누 만들기 체험을 했어요. 대나무 숯 분말을 천연 베이스에 넣어 비누를 만드는 체험이에요. 완성 비누를 사용하면 거품이 검정인데 씻고 나면 피부가 개운해요. 근데 아무도 안 알려주는 꿀팁 하나 — 대나무 숯이 검은 이유와 피부에 좋은 이유가 같아요. 숯은 미세 다공질 구조예요. 무수히 많은 작은 구멍이 있어서 피지·노폐물·세균을 흡착해요. 그 구멍에 오염물질이 걸려 제거되는 거예요. 검정 물질이 오히려 피부를 정화하는 역설이에요. 거품이 검어서 처음엔 무서운데 씻고 나면 피부가 당기지 않고 개운해요. 너무 검정이 정화라는 역설이 좋았습니다.',
    secret_tip:'대나무 숯 다공질 구조 = 피지·노폐물·세균 흡착 — 검정이 정화하는 역설. 거품 검어도 씻으면 개운함. 알면 처음 보는 검은 거품 무섭지 않음. 담양 대나무 공예 세트',
    filming_guide:'검은 숯 비누 거품 세안 과정 클로즈업. 완성 대나무 숯 비누 클로즈업. 대나무 숯 다공질 구조 확대 설명.',
    broll_ideas:['검은 숯 거품 세안 클로즈업','완성 숯 비누 클로즈업','대나무 숯 분말','비누 만들기 몰드 과정','담양 공방 외경'],
    hooks:['대나무 숯이 검은데 피부를 정화해요','검정이 하얗게 하는 역설이에요','숯의 다공질 구조가 비밀이에요','검은 거품이 처음엔 무섭지만 개운해요','담양 대나무 숯 비누 꿀팁'],
    thumbnails:['검은 숯 거품 세안','완성 숯 비누','대나무 숯 분말','비누 몰드 과정','담양 공방'],
    captions:{youtube:'담양 대나무 숯 비누 — 검정이 피부를 정화해요 🖤\n\n다공질 구조가 피지·노폐물 흡착!\n검정이 하얗게 하는 역설\n\n📍 전남 담양군 죽향문화로 공방\n🖤 대나무 숯+천연 베이스 비누 만들기\n\n#담양숯비누 #담양 #전남여행 #천연비누 #대나무숯',instagram:'담양 대나무 숯 비누 검정이 피부 정화해요 🖤\n\n다공질 구조 피지·노폐물 흡착 역설 ✨\n검은 거품이 개운함 만드는 마법\n\n📍 전남 담양 공방\n\n#담양숯비누 #담양여행 #전남 #천연비누 #GemKorea',tiktok:'담양 대나무 숯 비누 꿀팁 🖤 검정 숯이 피부를 정화해요! 다공질 구조가 피지·노폐물 흡착하는 역설 // 검은 거품이 처음엔 무섭지만 씻으면 개운해요 #담양숯비누 #담양여행 #전남'},
    hashtags:{korean:['#한국여행','#전남여행','#담양여행','#천연비누','#GemKorea'],place_specific:['#담양대나무숯비누','#검정이정화역설','#다공질구조흡착','#대나무숯천연비누']}
  },
  {
    experience_id:'EX-JN-OCN-004', experience_name:'보성 율포해수욕장 녹차 갯벌 체험', category_sub:'자연체험', region:'전라남도',
    script_30s:'오늘은 보성 율포에서 녹차 해수풀 족욕을 했어요. 전국 유일 녹차 온천이에요. 근데 아무도 안 알려주는 게 있어요 — 녹차 우린 물이 일반 바닷물보다 피부 흡수율이 높아요. 카테킨 성분이 혈액 순환을 도와요. 너무 녹차가 이렇게 피부에 좋다는 게 좋았습니다.',
    script_60s:'오늘은 전남 보성 율포해수욕장에서 녹차 해수풀 족욕을 즐겼어요. 전국에서 유일하게 녹차를 우린 물로 채운 해수풀이에요. 갯벌 체험도 함께 즐길 수 있어요. 근데 아무도 안 알려주는 꿀팁 하나 — 녹차 족욕의 효과가 일반 족욕보다 높은 이유가 있어요. 녹차에 있는 카테킨 성분이 온수에 녹아서 피부에 흡수될 때 혈액 순환을 촉진해요. 또한 녹차 타닌 성분이 피부 수렴 효과를 내서 피부 결이 고와져요. 보성 율포 녹차 해수풀은 인근 보성 녹차밭에서 직접 채취한 녹차를 우려 만들어요. 풀에 들어가면 연한 녹차 향이 나요. 족욕은 20분이 최적이에요. 너무 녹차가 이렇게 피부에 좋다는 게 좋았습니다.',
    secret_tip:'녹차 족욕 카테킨+타닌 효과 — 혈액 순환+피부 수렴 이중 효과. 최적 시간 20분. 보성 녹차밭 직접 채취 사용. 갯벌 체험과 세트. 5,000원 가성비 최고',
    filming_guide:'녹차 해수풀 족욕하는 발 클로즈업. 보성 녹차 향 폴풀 감상. 갯벌+녹차풀 세트 코스.',
    broll_ideas:['녹차 해수풀 족욕 발 클로즈업','보성 녹차밭 배경 율포 해변','갯벌 체험 조개잡기','율포해수욕장 전체 전경','녹차 우리는 과정'],
    hooks:['녹차 족욕이 일반보다 효과 좋아요','카테킨이 혈액 순환 도와요','타닌이 피부 수렴 효과예요','전국 유일 녹차 해수풀이에요','보성 율포 녹차 족욕 꿀팁'],
    thumbnails:['녹차 족욕 발 클로즈업','보성 녹차밭 배경','갯벌 조개잡기','율포 전체 전경','녹차 우리기'],
    captions:{youtube:'보성 율포 녹차 해수풀 — 카테킨이 혈액 순환 도와요 🍵\n\n전국 유일 녹차 족욕 20분이 최적!\n타닌 피부 수렴 효과까지\n\n📍 전남 보성군 율포해수욕장 녹차 해수풀\n🍵 5,000원 / 갯벌 체험 세트 코스\n\n#율포녹차족욕 #보성 #전남여행 #녹차해수풀 #족욕',instagram:'보성 율포 녹차 족욕 카테킨이 혈액 순환 도와요 🍵\n\n타닌 피부 수렴 효과까지 전국 유일 ✨\n20분 최적 5,000원 가성비\n\n📍 전남 보성 율포해수욕장\n\n#율포녹차족욕 #보성여행 #전남 #녹차족욕 #GemKorea',tiktok:'보성 율포 녹차 족욕 꿀팁 🍵 카테킨이 혈액 순환 촉진해요! 타닌 피부 수렴까지 이중 효과 // 전국 유일 녹차 해수풀 20분이 최적 5,000원 #율포녹차족욕 #보성여행 #전남'},
    hashtags:{korean:['#한국여행','#전남여행','#보성여행','#족욕','#GemKorea'],place_specific:['#율포녹차족욕','#전국유일녹차해수풀','#카테킨혈액순환','#보성율포']}
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
