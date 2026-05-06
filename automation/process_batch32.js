const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const now = new Date().toISOString().slice(0,19);

const raw = [
  {name:'파주 감악산',category_main:'자연',category_sub:'산',period:'',period_category:'',region:'경기도',address:'경기도 파주시 적성면 설마리',location_marker_type:'entrance',lat:37.9416,lng:126.9705,short_description:'해발 675m로 경기 5악의 하나로 꼽히는 명산. 정상에서 임진강과 개성 송악산까지 조망되며 출렁다리와 폭포·계곡·암벽이 어우러진 사계절 트레킹 코스로 인기가 높다.',source_urls:['https://ko.wikipedia.org/wiki/%EA%B0%90%EC%95%85%EC%82%B0_(%EA%B2%BD%EA%B8%B0)'],data_confidence:'high',tags:['경기5악','출렁다리','파주','등산','임진강조망','트레킹','감악산']},
  {name:'양주 송암스페이스센터',category_main:'자연',category_sub:'자연명승',period:'',period_category:'',region:'경기도',address:'경기도 양주시 장흥면 권율로185번길 103',location_marker_type:'exact',lat:37.7201,lng:126.9863,short_description:'해발 440m 계명산에 자리한 국내 최대 규모의 천문 테마파크로 자체 제작 60cm 대형 망원경과 플라네타리움을 갖추고 있다. 케이블카를 타고 오르며 별빛 관측부터 우주 체험까지 즐길 수 있다.',source_urls:['https://www.yangju.go.kr/tour/'],data_confidence:'high',tags:['천문대','별보기','케이블카','양주','가족여행','우주체험','플라네타리움']},
  {name:'고양 행주산성',category_main:'역사',category_sub:'성곽',period:'조선 임진왜란 1593년',period_category:'조선시대',region:'경기도',address:'경기도 고양시 덕양구 행주로15번길 85',location_marker_type:'entrance',lat:37.6014,lng:126.8255,short_description:'임진왜란 3대첩인 행주대첩(1593년)의 현장으로 권율 장군이 2,300명으로 왜군 3만 명을 물리친 곳이다. 해발 124.8m 덕양산에 위치하며 사적 제56호로 한강 조망이 빼어나다.',source_urls:['https://ko.wikipedia.org/wiki/%EA%B3%A0%EC%96%91_%ED%96%89%EC%A3%BC%EC%82%B0%EC%84%B1'],data_confidence:'high',tags:['행주대첩','임진왜란','권율장군','사적','고양','산성','역사탐방']},
  {name:'김포 문수산성',category_main:'역사',category_sub:'성곽',period:'조선 숙종 1682~1694년',period_category:'조선시대',region:'경기도',address:'경기도 김포시 월곶면 포내리 산36-1',location_marker_type:'entrance',lat:37.6876,lng:126.4621,short_description:'강화도 갑곶진을 마주보는 문수산에 쌓인 조선 숙종 대 산성으로 사적 제139호다. 1866년 병인양요 때 프랑스군과 치열한 전투를 벌인 현장이며 한강 하구와 강화도 전망이 장쾌하다.',source_urls:['https://ko.wikipedia.org/wiki/%EA%B9%80%ED%8F%AC_%EB%AC%B8%EC%88%98%EC%82%B0%EC%84%B1'],data_confidence:'high',tags:['병인양요','조선산성','사적','김포','강화도','한강조망','역사탐방']},
  {name:'강화 갑곶돈대',category_main:'역사',category_sub:'성곽',period:'조선 숙종 1679년 축조',period_category:'조선시대',region:'인천광역시',address:'인천광역시 강화군 강화읍 해안동로 1366-18',location_marker_type:'exact',lat:37.7459,lng:126.5127,short_description:'1679년 축조된 조선시대 해안 포대로 강화 해협을 내려다보는 전략적 요충지다. 사적 제306호로 8문의 원형 포좌와 성벽이 잘 보존되어 있고 강화전쟁박물관과 함께 조선 해양 방어 역사를 전달한다.',source_urls:['https://www.ganghwa.go.kr/open_content/tour/'],data_confidence:'high',tags:['돈대','강화도','조선해안방어','사적','인천','강화8경','역사탐방']},
  {name:'강화 정족산성',category_main:'역사',category_sub:'성곽',period:'삼국시대~조선시대',period_category:'조선시대',region:'인천광역시',address:'인천광역시 강화군 길상면 온수리 산41',location_marker_type:'entrance',lat:37.6726,lng:126.4412,short_description:'단군의 세 아들이 쌓았다는 삼랑성으로 사적 제130호다. 1866년 병인양요 때 양헌수 장군이 프랑스군을 격퇴한 전적지이며 성내에 조선왕조실록을 보관한 정족산사고가 남아 있다.',source_urls:['https://ko.wikipedia.org/wiki/%EA%B0%95%ED%99%94_%EC%82%BC%EB%9E%91%EC%84%B1'],data_confidence:'high',tags:['삼랑성','정족산사고','병인양요','조선왕조실록','강화도','사적','역사탐방']},
  {name:'인천 소래습지생태공원',category_main:'자연',category_sub:'강/호수',period:'',period_category:'',region:'인천광역시',address:'인천광역시 남동구 소래로154번길 77',location_marker_type:'entrance',lat:37.3838,lng:126.7323,short_description:'1997년까지 천일염 생산하던 소래염전을 생태공원으로 탈바꿈한 156만㎡ 습지. 드넓은 갈대밭과 붉은 풍차, 갯골 탐방로가 어우러지며 다양한 철새와 갯벌 생물을 관찰할 수 있다.',source_urls:['https://ko.wikipedia.org/wiki/%EC%86%8C%EB%9E%98%EC%8A%B5%EC%A7%80%EC%83%9D%ED%83%9C%EA%B3%B5%EC%9B%90'],data_confidence:'high',tags:['소래습지','갈대밭','철새','염전','생태공원','인천','무료관람']},
  {name:'가평 쁘띠프랑스',category_main:'자연',category_sub:'자연명승',period:'',period_category:'',region:'경기도',address:'경기도 가평군 청평면 호반로 1063',location_marker_type:'entrance',lat:37.7317,lng:127.4868,short_description:'청평호수 북쪽 언덕의 프랑스 문화 테마파크. 2008년 개장 이후 드라마·영화 촬영지로 유명하며 유럽풍 건물과 수천 점의 도자기 인형·오르골이 이색 볼거리다.',source_urls:['http://www.pfcamp.com/'],data_confidence:'high',tags:['쁘띠프랑스','청평호수','유럽테마파크','가평','촬영지','드라이브','데이트']},
  {name:'포천 산정호수',category_main:'자연',category_sub:'강/호수',period:'',period_category:'',region:'경기도',address:'경기도 포천시 영북면 산정호수로 402',location_marker_type:'entrance',lat:38.0641,lng:127.2487,short_description:'1925년 농업용 저수지로 만들어진 산속의 맑은 호수로 1977년 국민관광지로 지정됐다. 명성산을 배경으로 봄 꽃과 가을 안개가 절경이며 둘레길·보트·폭포 등 볼거리가 풍부하다.',source_urls:['https://ko.wikipedia.org/wiki/%EC%82%B0%EC%A0%95%ED%98%B8%EC%88%98'],data_confidence:'high',tags:['산정호수','명성산','포천','국민관광지','둘레길','드라이브','사계절']}
];

const subCatCode={'산':'MTN','자연명승':'SCN','성곽':'SAN','강/호수':'LKE'};
const regionCode={'경기도':'GG','인천광역시':'IC'};

const existing=JSON.parse(fs.readFileSync(base+'data/heritage_all.json','utf8'));
const existingNames=new Set(existing.map(d=>d.name));
const counters={};
existing.forEach(d=>{if(!d.place_id)return;const p=d.place_id.split('-');if(p.length<4)return;const k=p[1]+'-'+p[2];const n=parseInt(p[3]);if(!counters[k]||counters[k]<n)counters[k]=n;});

const newItems=raw.filter(d=>!existingNames.has(d.name)).map(d=>{
  const rc=regionCode[d.region]||'ETC';
  const cc=subCatCode[d.category_sub]||'ETC';
  const k=rc+'-'+cc;
  counters[k]=(counters[k]||0)+1;
  const placeId='GK-'+rc+'-'+cc+'-'+String(counters[k]).padStart(4,'0');
  return{...d,place_id:placeId,category_detail:d.short_description.split('.')[0],confidence:d.data_confidence==='high'?'high':'low',confidence_reason:'',needs_geocoding:false,
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

console.log('추가: '+newItems.length+'개 / 누적: '+merged.length+'개 / 1000: '+(merged.length/1000*100).toFixed(1)+'%');
newItems.forEach(d=>console.log('  + ['+d.place_id+'] '+d.name));
