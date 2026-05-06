const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const now = new Date().toISOString().slice(0,19);

const raw = [
  {name:'내장산',category_main:'자연',category_sub:'산',period:'',period_category:'',region:'전라북도',address:'전라북도 정읍시 내장호반로 328',location_marker_type:'entrance',lat:35.4907,lng:126.8897,short_description:'대한민국 대표 단풍 명소로 손꼽히는 전북 정읍의 국립공원. 내장사를 품은 산세가 빼어나며 매년 가을이면 붉고 노란 단풍으로 물드는 단풍터널이 장관을 이룬다. 케이블카에서 바라보는 전망도 일품이다.',source_urls:['https://www.knps.or.kr/'],data_confidence:'high',tags:['단풍','국립공원','내장사','케이블카','정읍','전북']},
  {name:'속리산',category_main:'자연',category_sub:'산',period:'',period_category:'',region:'충청북도',address:'충청북도 보은군 속리산면 법주사로 84',location_marker_type:'entrance',lat:36.5413,lng:127.8620,short_description:'충북 보은의 국립공원으로 법주사와 팔상전(국보)이 자리한 명산. 기암괴석과 울창한 숲이 어우러지며 정이품송(천연기념물)이 유명하다. 조선시대부터 왕들이 즐겨 찾던 영험한 산이다.',source_urls:['https://www.knps.or.kr/'],data_confidence:'high',tags:['국립공원','법주사','정이품송','기암괴석','보은','충북']},
  {name:'덕유산',category_main:'자연',category_sub:'산',period:'',period_category:'',region:'전라북도',address:'전라북도 무주군 설천면 삼공리 1',location_marker_type:'entrance',lat:35.8780,lng:127.7520,short_description:'전북 무주와 경남 함양에 걸친 국립공원. 향적봉(1,614m)은 겨울 설경이 압도적이며 무주리조트 곤돌라로 정상 부근까지 오를 수 있다. 구천동 33경으로 유명한 계곡이 아름답다.',source_urls:['https://www.knps.or.kr/'],data_confidence:'high',tags:['겨울설경','국립공원','향적봉','곤돌라','구천동계곡','무주','전북']},
  {name:'소백산',category_main:'자연',category_sub:'산',period:'',period_category:'',region:'충청북도',address:'충청북도 단양군 가곡면 어의곡리',location_marker_type:'entrance',lat:36.9607,lng:128.4868,short_description:'충북 단양과 경북 영주에 걸친 국립공원. 비로봉(1,439m) 정상의 철쭉 군락은 5월 절정을 이루고 겨울 눈꽃 산행으로도 유명하다. 희방사·부석사 등 불교 유적과 단양 팔경이 인접해 있다.',source_urls:['https://www.knps.or.kr/'],data_confidence:'high',tags:['철쭉','국립공원','비로봉','눈꽃','단양','충북']},
  {name:'무등산',category_main:'자연',category_sub:'산',period:'',period_category:'',region:'전라남도',address:'광주광역시 동구 운림동 산50',location_marker_type:'entrance',lat:35.1250,lng:126.9887,short_description:'광주 시민의 정신적 상징이자 국립공원. 주상절리대인 서석대·입석대(천연기념물)가 장관을 이루며 천왕봉(1,187m)에서 광주 시내를 한눈에 바라볼 수 있다. 5·18 민주화운동의 역사와도 깊이 연결된 산이다.',source_urls:['https://www.knps.or.kr/'],data_confidence:'high',tags:['국립공원','주상절리','서석대','입석대','광주','5.18']},
  {name:'경포호',category_main:'자연',category_sub:'강/호수',period:'',period_category:'',region:'강원도',address:'강원특별자치도 강릉시 경포로 365',location_marker_type:'exact',lat:37.7952,lng:128.9005,short_description:'강릉 경포해변 옆에 위치한 자연 석호. 호수 위로 뜨는 달이 다섯 개로 보인다는 오월의 전설이 유명하다. 경포대에서 바라보는 호수 풍경과 벚꽃 시즌의 경관이 아름다우며 관동팔경 중 하나로 꼽힌다.',source_urls:['https://korean.visitkorea.or.kr/'],data_confidence:'high',tags:['석호','경포대','벚꽃','관동팔경','강릉','강원']},
  {name:'의암호',category_main:'자연',category_sub:'강/호수',period:'',period_category:'',region:'강원도',address:'강원특별자치도 춘천시 서면 의암리',location_marker_type:'exact',lat:37.8737,lng:127.7014,short_description:'춘천 북한강 상류에 조성된 인공 호수. 호반도시 춘천의 상징으로 물레길 카약 체험과 스카이워크에서 바라보는 호수 전망이 인상적이며 사계절 방문객이 찾는 드라이브 코스다.',source_urls:['https://korean.visitkorea.or.kr/'],data_confidence:'high',tags:['호수','춘천','카약','스카이워크','드라이브','강원']},
  {name:'비자림',category_main:'자연',category_sub:'숲/공원',period:'',period_category:'',region:'제주특별자치도',address:'제주특별자치도 제주시 구좌읍 비자숲길 62',location_marker_type:'entrance',lat:33.4900,lng:126.8129,short_description:'천연기념물 제374호로 지정된 세계 최대 규모의 비자나무 군락지. 약 2,800그루의 비자나무가 울창하게 우거진 숲길을 걸으며 피톤치드를 흡입하는 힐링 코스다. 800년 이상 수령의 나무들이 신비로운 분위기를 만든다.',source_urls:['https://www.visitjeju.net/'],data_confidence:'high',tags:['비자나무','천연기념물','숲길','힐링','제주']},
  {name:'용두암',category_main:'자연',category_sub:'자연명승',period:'',period_category:'',region:'제주특별자치도',address:'제주특별자치도 제주시 용두암길 15',location_marker_type:'exact',lat:33.5168,lng:126.4942,short_description:'제주시 해안가에 우뚝 솟은 높이 10m의 현무암 바위. 용이 하늘로 오르려다 굳어버린 모습이라는 전설을 가지고 있으며 제주를 대표하는 상징적 자연 명소다. 일몰 무렵 붉게 물드는 바다와의 조화가 특히 아름답다.',source_urls:['https://www.visitjeju.net/'],data_confidence:'high',tags:['용두암','현무암','일몰','제주','해안']},
  {name:'을왕리해수욕장',category_main:'자연',category_sub:'바다/해변',period:'',period_category:'',region:'인천광역시',address:'인천광역시 중구 용유서로 214',location_marker_type:'exact',lat:37.4517,lng:126.3764,short_description:'인천 영종도 서쪽 끝의 서해안 대표 해수욕장. 수도권에서 가까워 당일치기 여행지로 인기가 높으며 썰물 때 드러나는 갯벌에서 조개잡이 체험을 즐길 수 있다. 서해 특유의 붉은 석양이 장관인 일몰 명소다.',source_urls:['https://korean.visitkorea.or.kr/'],data_confidence:'high',tags:['해수욕장','서해','일몰','갯벌','인천','영종도']},
  {name:'울릉도',category_main:'자연',category_sub:'섬',period:'',period_category:'',region:'경상북도',address:'경상북도 울릉군 울릉읍 도동리',location_marker_type:'exact',lat:37.4845,lng:130.9057,short_description:'동해 한가운데 위치한 화산섬으로 청정 자연의 비경. 성인봉(984m)·나리분지·봉래폭포·해안 드라이브 코스 등 볼거리가 풍부하다. 오징어와 호박엿 등 특산물이 유명하며 여객선으로만 접근 가능한 특별한 여행지다.',source_urls:['https://korean.visitkorea.or.kr/'],data_confidence:'high',tags:['섬','화산섬','성인봉','청정자연','동해','울릉','경북']},
  {name:'독도',category_main:'자연',category_sub:'섬',period:'',period_category:'',region:'경상북도',address:'경상북도 울릉군 울릉읍 독도리 1-96',location_marker_type:'exact',lat:37.2426,lng:131.8648,short_description:'대한민국 최동단에 위치한 천연기념물 제336호 화산섬. 동도와 서도 두 개의 큰 섬과 89개 부속 도서로 구성된 우리나라 고유의 영토다. 괭이갈매기 번식지이자 희귀 해양생물의 서식처로 생태적 가치가 높다.',source_urls:['https://www.dokdo.go.kr'],data_confidence:'high',tags:['독도','천연기념물','동해','영토','화산섬','경북']},
  {name:'울산 대왕암공원',category_main:'자연',category_sub:'자연명승',period:'통일신라',period_category:'통일신라',region:'경상남도',address:'울산광역시 동구 일산동 산907',location_marker_type:'entrance',lat:35.4890,lng:129.4370,short_description:'울산 동구 해안의 기암괴석과 울창한 소나무 숲이 어우러진 명소. 통일신라 문무왕비가 호국룡이 되어 바위 밑에 잠들었다는 전설이 깃든 대왕암이 상징이다. 출렁다리와 등대, 해안 산책로가 조성되어 있다.',source_urls:['https://www.ulsan.go.kr/'],data_confidence:'high',tags:['대왕암','해안공원','소나무숲','출렁다리','울산','문무왕비']},
  {name:'여수 오동도',category_main:'자연',category_sub:'섬',period:'',period_category:'',region:'전라남도',address:'전라남도 여수시 오동도로 222',location_marker_type:'exact',lat:34.7390,lng:127.7609,short_description:'여수 앞바다의 작은 섬으로 동백꽃으로 유명한 동백섬. 방파제 산책로를 따라 걸어 들어갈 수 있으며 2~3월 붉게 피어나는 동백꽃이 장관이다. 동굴과 등대, 해안 절경을 갖추고 있어 사계절 여행지로 사랑받는다.',source_urls:['https://korean.visitkorea.or.kr/'],data_confidence:'high',tags:['동백꽃','섬','여수','등대','봄꽃','전남']},
  // 역사
  {name:'경주 반월성',category_main:'역사',category_sub:'성곽/산성',period:'삼국시대 신라 (기원전 37년 축조)',period_category:'삼국',region:'경상북도',address:'경상북도 경주시 인왕동 387-1',location_marker_type:'exact',lat:35.8343,lng:129.2248,short_description:'신라의 왕궁이 자리했던 월성(반월성)으로 사적 제16호. 반달 모양의 자연 구릉을 이용한 토성으로 신라 천 년 역사의 중심지다. 발굴 조사에서 다양한 유물이 출토됐으며 경주 역사유적지구 유네스코 세계유산이다.',source_urls:['https://heritage.go.kr/'],data_confidence:'high',tags:['신라','왕궁','유네스코','사적','경주','경북']},
  {name:'보성 제암산 철쭉군락지',category_main:'자연',category_sub:'계절 명소',period:'',period_category:'',region:'전라남도',address:'전라남도 보성군 웅치면 대산리 산1',location_marker_type:'entrance',lat:34.9268,lng:127.0822,short_description:'보성 제암산(807m) 정상 일대에 펼쳐지는 드넓은 철쭉 군락지. 매년 5월이면 분홍빛 철쭉이 산 전체를 뒤덮어 장관을 이룬다. 인근 보성 차밭과 함께 전남 봄 여행의 필수 코스다.',source_urls:['https://korean.visitkorea.or.kr/'],data_confidence:'medium',tags:['철쭉','봄꽃','보성','계절명소','전남']}
];

const natCatCode={'산':'MTN','바다/해변':'SEA','강/호수':'LKE','숲/공원':'FOR','자연명승':'SCN','섬':'ISL','계절 명소':'SEA','성곽/산성':'SAN'};
const regionCode={'전라북도':'JB','충청북도':'CB','전라남도':'JN','강원도':'GW','제주특별자치도':'JJ','인천광역시':'IC','경상북도':'GB','경상남도':'GN'};
const subCatMap={'산':'고택/서원/향교','바다/해변':'고택/서원/향교','강/호수':'고택/서원/향교','숲/공원':'고택/서원/향교','자연명승':'고택/서원/향교','섬':'고택/서원/향교','계절 명소':'고택/서원/향교','성곽/산성':'성곽/산성'};

const existing=JSON.parse(fs.readFileSync(base+'data/heritage_all.json','utf8'));
const existingNames=new Set(existing.map(d=>d.name));
const counters={};
existing.forEach(d=>{const p=d.place_id.split('-');const k=p[1]+'-'+p[2];const n=parseInt(p[3]);if(!counters[k]||counters[k]<n)counters[k]=n;});

const newItems=raw.filter(d=>!existingNames.has(d.name)).map(d=>{
  const rc=regionCode[d.region]||'ETC';
  const cc=natCatCode[d.category_sub]||'ETC';
  const k=rc+'-'+cc;
  counters[k]=(counters[k]||0)+1;
  const placeId='GK-'+rc+'-'+cc+'-'+String(counters[k]).padStart(4,'0');
  return {
    ...d,place_id:placeId,
    category:d.category||d.category_sub,
    category_detail:d.short_description.split('.')[0],
    confidence:d.data_confidence==='high'?'high':'low',
    confidence_reason:'',
    needs_geocoding:false,
    status:{map_displayable:true,data_status:'complete',map_status:'published',content_status:'waiting',last_updated:now},
    content_link:{has_video:false,youtube_url:'',instagram_url:'',tiktok_url:'',xiaohongshu_url:'',video_status:'없음'}
  };
});

const merged=[...existing,...newItems];
fs.writeFileSync(base+'data/heritage_all.json',JSON.stringify(merged,null,2),'utf8');
const ready=merged.filter(d=>d.status.map_displayable&&d.lat&&d.lng);
fs.writeFileSync(base+'map/markers_ready.json',JSON.stringify({total:ready.length,markers:ready},null,2),'utf8');

const log=JSON.parse(fs.readFileSync(base+'logs/automation_log.json','utf8'));
log.runs.push({time:now,mode:'B',region:'자연·역사 전국',new_collected:newItems.length,total:merged.length});
fs.writeFileSync(base+'logs/automation_log.json',JSON.stringify(log,null,2),'utf8');

const nat=newItems.filter(d=>d.category_main==='자연');
const hist=newItems.filter(d=>d.category_main==='역사');
console.log('추가 완료: '+newItems.length+'개 (자연'+nat.length+' 역사'+hist.length+')');
console.log('누적: '+merged.length+'개 / 게시됨: '+merged.filter(d=>d.status.map_status==='published').length+'개');
newItems.forEach(d=>console.log('  + ['+d.place_id+'] '+d.name+' ('+d.category_sub+')'));
