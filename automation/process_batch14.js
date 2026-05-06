const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const now = new Date().toISOString().slice(0,19);

const raw = [
  // 강/호수
  {name:'남한강',category_main:'자연',category_sub:'강/호수',period:'',period_category:'',region:'경기도',address:'경기도 여주시 강천면 일원',location_marker_type:'exact',lat:37.3200,lng:127.5800,short_description:'강원 태백에서 발원해 경기도를 가로질러 한강으로 합류하는 강. 여주·이천을 지나며 아름다운 경관을 이루며 세종대왕릉·신륵사 등 역사 명소와 어우러진다. 자전거길과 레저 명소로 사랑받는다.',source_urls:['https://korean.visitkorea.or.kr/'],data_confidence:'high',tags:['여주','경기','자전거길','세종대왕릉','신륵사','레저']},
  {name:'낙동강',category_main:'자연',category_sub:'강/호수',period:'',period_category:'',region:'경상남도',address:'경상남도 창녕군 이방면 일원',location_marker_type:'exact',lat:35.5500,lng:128.4200,short_description:'강원 태백 황지에서 발원해 부산 을숙도까지 흐르는 521km 우리나라 최장 강. 낙동강 하구 철새 도래지와 우포늪이 유명하며 경상도의 젖줄로 역사·문화·생태적 가치가 높다.',source_urls:['https://korean.visitkorea.or.kr/'],data_confidence:'high',tags:['창녕','경남','최장강','우포늪','철새','낙동강하구']},
  {name:'금강',category_main:'자연',category_sub:'강/호수',period:'',period_category:'',region:'충청남도',address:'충청남도 부여군 규암면 일원',location_marker_type:'exact',lat:36.2600,lng:126.9100,short_description:'전북 장수 뜬봉샘에서 발원해 충남·전북을 지나 서해로 흘러드는 401km 강. 공주·부여 등 백제의 고도를 흘러 백마강으로도 불리며 낙화암·공산성 등 백제 유적과 어우러진다.',source_urls:['https://korean.visitkorea.or.kr/'],data_confidence:'high',tags:['부여','충남','백제','백마강','공산성','낙화암']},
  {name:'영산강',category_main:'자연',category_sub:'강/호수',period:'',period_category:'',region:'전라남도',address:'전라남도 나주시 일원',location_marker_type:'exact',lat:35.0200,lng:126.7100,short_description:'전남 담양에서 발원해 나주·목포를 거쳐 서해로 흘러드는 강. 영산강 유역 마한 고분군과 나주 금성산성 등 고대 역사 유적이 풍부하며 황포돛배 체험과 자전거길이 인기다.',source_urls:['https://korean.visitkorea.or.kr/'],data_confidence:'high',tags:['나주','전남','마한','고분','황포돛배','자전거길']},
  {name:'대청호',category_main:'자연',category_sub:'강/호수',period:'',period_category:'',region:'충청북도',address:'충청북도 청주시 문의면 일원',location_marker_type:'exact',lat:36.5100,lng:127.5600,short_description:'1980년 대청댐 건설로 형성된 충청권 최대 인공호수. 금강 상류를 막아 만든 저수지로 대전·청주 시민의 식수원이다. 드라이브 코스와 출렁다리, 호수 둘레길로 사계절 여행객이 찾는다.',source_urls:['https://korean.visitkorea.or.kr/'],data_confidence:'high',tags:['청주','충북','인공호수','금강','드라이브','출렁다리']},
  // 해변
  {name:'망상해변',category_main:'자연',category_sub:'바다/해변',period:'',period_category:'',region:'강원도',address:'강원특별자치도 동해시 망상동',location_marker_type:'exact',lat:37.5800,lng:129.1200,short_description:'강원 동해시의 대표 해변으로 백사장 길이 1.8km. 동해안 최대 규모의 해수욕장 중 하나로 오토캠핑장과 미니열차가 유명하며 여름 성수기에 수십만 명이 찾는다.',source_urls:['https://korean.visitkorea.or.kr/'],data_confidence:'high',tags:['동해','강원','해변','오토캠핑','동해안']},
  {name:'낙산해변',category_main:'자연',category_sub:'바다/해변',period:'',period_category:'',region:'강원도',address:'강원특별자치도 양양군 강현면 낙산리',location_marker_type:'exact',lat:38.0700,lng:128.6400,short_description:'강원 양양의 낙산사 인근 해변. 동해의 청정 바다와 낙산사 홍련암·의상대의 역사 경관이 어우러진다. 서핑의 성지로도 유명하며 일출이 아름다운 동해안 대표 해변이다.',source_urls:['https://korean.visitkorea.or.kr/'],data_confidence:'high',tags:['양양','강원','낙산사','서핑','일출','동해']},
  {name:'함덕해변',category_main:'자연',category_sub:'바다/해변',period:'',period_category:'',region:'제주특별자치도',address:'제주특별자치도 제주시 조천읍 함덕리',location_marker_type:'exact',lat:33.5430,lng:126.6720,short_description:'제주 북동쪽 조천읍의 에메랄드빛 해변. 서우봉을 배경으로 펼쳐진 투명한 바다가 아름답고 물이 얕아 가족 단위 피서지로 인기 높다. 서우봉 둘레길과 해변이 함께 어우러진 명소다.',source_urls:['https://korean.visitkorea.or.kr/'],data_confidence:'high',tags:['조천','제주','에메랄드','서우봉','가족','해수욕']},
  {name:'이호테우해변',category_main:'자연',category_sub:'바다/해변',period:'',period_category:'',region:'제주특별자치도',address:'제주특별자치도 제주시 이호동',location_marker_type:'exact',lat:33.4980,lng:126.4480,short_description:'제주시에서 가장 가까운 해변으로 말 모양 등대 두 개가 명물이다. 제주 공항에서 차로 10분 거리에 위치해 접근성이 뛰어나며 붉고 흰 테우 모양 등대가 일몰 배경 사진 명소로 유명하다.',source_urls:['https://korean.visitkorea.or.kr/'],data_confidence:'high',tags:['제주시','제주','말등대','테우','공항인근','일몰']},
  {name:'월정리해변',category_main:'자연',category_sub:'바다/해변',period:'',period_category:'',region:'제주특별자치도',address:'제주특별자치도 제주시 구좌읍 월정리',location_marker_type:'exact',lat:33.5540,lng:126.7990,short_description:'제주 북동쪽 구좌읍의 에메랄드빛 해변. 비행기가 머리 위를 날아가는 독특한 풍경으로 SNS 명소로 유명하다. 인근 세화해변·성산일출봉과 함께 동부 드라이브 코스의 핵심이다.',source_urls:['https://korean.visitkorea.or.kr/'],data_confidence:'high',tags:['구좌','제주','에메랄드','비행기','SNS명소','동부드라이브']},
  // 기타 자연
  {name:'봉래폭포',category_main:'자연',category_sub:'폭포',period:'',period_category:'',region:'경상북도',address:'경상북도 울릉군 북면 나리',location_marker_type:'exact',lat:37.5300,lng:130.8600,short_description:'울릉도 북쪽 나리분지 인근의 3단 폭포. 높이 30m의 청정 폭포로 울릉도 최대 폭포이자 대표 자연 명소다. 나리분지를 거쳐 오는 산책 코스와 함께 울릉도 여행의 필수 코스로 꼽힌다.',source_urls:['https://korean.visitkorea.or.kr/'],data_confidence:'high',tags:['울릉도','경북','3단폭포','나리분지','청정','트레킹']},
  {name:'천아숲길',category_main:'자연',category_sub:'숲/공원',period:'',period_category:'',region:'제주특별자치도',address:'제주특별자치도 제주시 애월읍 상가리',location_marker_type:'entrance',lat:33.3800,lng:126.3800,short_description:'제주 한라산 서쪽 애월읍의 편백나무 숲길. 수령 40~50년의 편백나무와 삼나무가 빽빽이 들어선 피톤치드 숲길로 산림욕과 트레킹을 즐길 수 있다. 사계절 푸른 자연을 만끽하는 힐링 명소다.',source_urls:['https://korean.visitkorea.or.kr/'],data_confidence:'high',tags:['애월','제주','편백나무','삼나무','피톤치드','힐링','산림욕']},
  {name:'신안 증도',category_main:'자연',category_sub:'섬',period:'',period_category:'',region:'전라남도',address:'전라남도 신안군 증도면',location_marker_type:'exact',lat:34.9700,lng:126.1700,short_description:'전남 신안군의 슬로시티로 지정된 청정 갯벌 섬. 태평염전과 갯벌 생태 전시관, 우전해변이 유명하며 국내 최대 단일 염전인 태평염전은 근대문화유산이기도 하다. 느림의 여행을 즐기는 명소다.',source_urls:['https://korean.visitkorea.or.kr/'],data_confidence:'high',tags:['신안','전남','슬로시티','태평염전','갯벌','우전해변','느림여행']},
  {name:'서천 국립해양생물자원관',category_main:'자연',category_sub:'자연명승',period:'',period_category:'',region:'충청남도',address:'충청남도 서천군 장항읍 장산로101번길 75',location_marker_type:'exact',lat:36.0000,lng:126.6900,short_description:'서해 생태 보고 서천에 자리한 국립 해양생물 전문 기관. 2만여 점의 해양생물 표본을 전시하며 서천 갯벌·철새 도래지와 연계한 생태 탐방 코스로 가족 여행지로 인기다.',source_urls:['https://www.mabik.re.kr/'],data_confidence:'high',tags:['서천','충남','해양생물','갯벌','철새','국립기관','생태탐방']},
  // 역사 사찰
  {name:'서산 개심사',category_main:'역사',category_sub:'사찰/불교유산',period:'삼국시대 백제 (654년 창건)',period_category:'삼국',region:'충청남도',address:'충청남도 서산시 운산면 개심사로 321-86',location_marker_type:'entrance',lat:36.7300,lng:126.5900,short_description:'654년 백제 때 창건된 가야산 고찰. 대웅전(보물)은 조선 전기 목조건축의 수작이며 봄이면 겹벚꽃과 청벚꽃이 어우러진 경내가 장관을 이룬다. 충청도 4대 사찰 중 하나로 꼽힌다.',source_urls:['https://heritage.go.kr/'],data_confidence:'high',tags:['사찰','백제','서산','충남','대웅전','보물','겹벚꽃','가야산']},
  {name:'강진 무위사',category_main:'역사',category_sub:'사찰/불교유산',period:'통일신라 (875년 창건)',period_category:'통일신라',region:'전라남도',address:'전라남도 강진군 성전면 무위사로 308',location_marker_type:'entrance',lat:34.6200,lng:126.7500,short_description:'875년 창건된 월출산 기슭의 고찰. 극락보전(국보)은 조선 전기 목조건축의 백미로 평가받으며 내부 아미타불 후불벽화(국보)가 유명하다. 다산 정약용과도 인연이 깊은 유서 깊은 사찰이다.',source_urls:['https://heritage.go.kr/'],data_confidence:'high',tags:['사찰','통일신라','강진','전남','극락보전','국보','월출산','정약용']},
  {name:'통도사',category_main:'역사',category_sub:'사찰/불교유산',period:'통일신라 (646년 자장율사 창건, 유네스코)',period_category:'통일신라',region:'경상남도',address:'경상남도 양산시 하북면 통도사로 108',location_marker_type:'entrance',lat:35.4893,lng:129.0592,short_description:'646년 자장율사가 창건한 삼보사찰(불보) 중 하나. 부처님 진신사리를 봉안한 금강계단이 핵심으로 대웅전에 불상이 없는 독특한 구조다. 2018년 유네스코 세계유산 한국의 산사로 등재됐다.',source_urls:['https://www.tongdosa.or.kr/'],data_confidence:'high',tags:['사찰','통일신라','자장율사','삼보사찰','불보','유네스코','금강계단','양산','경남']}
];

const natCatCode={'강/호수':'LKE','바다/해변':'SEA','폭포':'WAT','숲/공원':'FOR','섬':'ISL','자연명승':'SCN','사찰/불교유산':'SAJ'};
const subCatMap={'강/호수':'고택/서원/향교','바다/해변':'고택/서원/향교','폭포':'고택/서원/향교','숲/공원':'고택/서원/향교','섬':'고택/서원/향교','자연명승':'고택/서원/향교','사찰/불교유산':'사찰/불교유산'};
const regionCode={'경기도':'GG','경상남도':'GN','충청남도':'CN','전라남도':'JN','충청북도':'CB','강원도':'GW','제주특별자치도':'JJ','경상북도':'GB'};

const existing=JSON.parse(fs.readFileSync(base+'data/heritage_all.json','utf8'));
const existingNames=new Set(existing.map(d=>d.name));
const counters={};
existing.forEach(d=>{if(!d.place_id)return;const p=d.place_id.split('-');if(p.length<4)return;const k=p[1]+'-'+p[2];const n=parseInt(p[3]);if(!counters[k]||counters[k]<n)counters[k]=n;});

const newItems=raw.filter(d=>!existingNames.has(d.name)).map(d=>{
  const rc=regionCode[d.region]||'ETC';
  const cc=natCatCode[d.category_sub]||'ETC';
  const k=rc+'-'+cc;
  counters[k]=(counters[k]||0)+1;
  const placeId='GK-'+rc+'-'+cc+'-'+String(counters[k]).padStart(4,'0');
  return {...d,place_id:placeId,category_detail:d.short_description.split('.')[0],confidence:d.data_confidence==='high'?'high':'low',confidence_reason:'',needs_geocoding:false,
    status:{map_displayable:true,data_status:'complete',map_status:'published',content_status:'waiting',last_updated:now},
    content_link:{has_video:false,youtube_url:'',instagram_url:'',tiktok_url:'',xiaohongshu_url:'',video_status:'없음'}};
});

const merged=[...existing,...newItems];
fs.writeFileSync(base+'data/heritage_all.json',JSON.stringify(merged,null,2),'utf8');
const ready=merged.filter(d=>d.status?.map_displayable&&d.lat&&d.lng);
fs.writeFileSync(base+'map/markers_ready.json',JSON.stringify({total:ready.length,markers:ready},null,2),'utf8');
const log=JSON.parse(fs.readFileSync(base+'logs/automation_log.json','utf8'));
log.runs.push({time:now,mode:'B',new_collected:newItems.length,total:merged.length});
fs.writeFileSync(base+'logs/automation_log.json',JSON.stringify(log,null,2),'utf8');

const nat=newItems.filter(d=>d.category_main==='자연');
const hist=newItems.filter(d=>d.category_main==='역사');
console.log('추가: '+newItems.length+'개 (자연'+nat.length+' 역사'+hist.length+')');
console.log('누적: '+merged.length+'개 / 1000: '+(merged.length/1000*100).toFixed(1)+'%');
newItems.forEach(d=>console.log('  + ['+d.place_id+'] '+d.name));
