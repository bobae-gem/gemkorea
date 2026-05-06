const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const now = new Date().toISOString().slice(0,19);

const raw = [
  {name:'금오름',category_main:'자연',category_sub:'자연명승',period:'',period_category:'',region:'제주특별자치도',address:'제주특별자치도 제주시 한림읍 금악리 산1-1',location_marker_type:'entrance',lat:33.3560,lng:126.3057,short_description:'해발 427m, 깊이 52m의 원형 분화구와 산정화구호 금악담을 품은 제주 서쪽 대표 오름. 동서 두 봉우리로 이뤄진 완만한 능선에서 제주 평야와 한라산 전경이 한눈에 펼쳐진다.',source_urls:['https://ko.wikipedia.org/wiki/%EA%B8%88%EC%98%A4%EB%A6%84'],data_confidence:'high',tags:['오름','분화구','산정호수','제주서부','일몰명소','트레킹']},
  {name:'산굼부리',category_main:'자연',category_sub:'자연명승',period:'',period_category:'',region:'제주특별자치도',address:'제주특별자치도 제주시 조천읍 교래리 166-1',location_marker_type:'exact',lat:33.4317,lng:126.6900,short_description:'천연기념물 제263호. 제주 유일의 함몰형 측화산으로 바깥둘레 2,067m의 거대한 분화구가 평지에 움푹 패어 있다. 분화구 내부에 원시 식물군락 174종이 완벽하게 보존된 생태의 보고.',source_urls:['https://ko.wikipedia.org/wiki/%EC%82%B0%EA%B5%BC%EB%B6%80%EB%A6%AC'],data_confidence:'high',tags:['천연기념물','오름','분화구','함몰형','제주중산간','생태']},
  {name:'한라산 어리목코스',category_main:'자연',category_sub:'산',period:'',period_category:'',region:'제주특별자치도',address:'제주특별자치도 제주시 해안동 산220',location_marker_type:'entrance',lat:33.3820,lng:126.4490,short_description:'해발 970m 어리목 광장에서 출발해 윗세오름 대피소(1,700m)까지 이어지는 6.8km 탐방로. 사제비동산·만세동산을 거치며 한라산 고산식생과 광활한 초원을 감상할 수 있다.',source_urls:['https://www.visitjeju.net/'],data_confidence:'high',tags:['한라산','등산','탐방로','윗세오름','고산식생','국립공원','제주']},
  {name:'죽도해변',category_main:'자연',category_sub:'바다/해변',period:'',period_category:'',region:'강원도',address:'강원특별자치도 양양군 현남면 인구중앙길 110',location_marker_type:'exact',lat:37.9730,lng:128.8420,short_description:'죽도산을 사이에 두고 인구해변과 이어지는 2km 백사장. 완만한 경사·얕은 수심으로 가족 피서지로 인기가 높으며 서퍼들이 즐겨 찾는 양양 서핑 성지의 중심 해변이다.',source_urls:['https://korean.visitkorea.or.kr/'],data_confidence:'medium',tags:['해변','서핑','백사장','소나무숲','양양','강원']},
  {name:'신두리 해안사구',category_main:'자연',category_sub:'자연명승',period:'',period_category:'',region:'충청남도',address:'충청남도 태안군 원북면 신두리 산263-1',location_marker_type:'entrance',lat:36.8338,lng:126.1796,short_description:'천연기념물 제431호. 길이 3.4km 국내 최대 해안사구. 빙하기 이후 형성된 모래언덕에 서해안 사구 지형 거의 모든 형태가 보존돼 있으며 희귀 동식물의 서식처다.',source_urls:['https://korean.visitkorea.or.kr/'],data_confidence:'high',tags:['천연기념물','해안사구','사막','생태','태안','서해','충남']},
  {name:'삽교호',category_main:'자연',category_sub:'강/호수',period:'',period_category:'',region:'충청남도',address:'충청남도 당진시 신평면 삽교천3길 79',location_marker_type:'exact',lat:36.8906,lng:126.8247,short_description:'1979년 삽교천 방조제 완공으로 조성된 담수호. 함상공원·놀이동산·자전거길이 갖춰진 복합 관광지로 연 500만 명이 찾는다. 일몰 무렵 호수 위로 물드는 노을이 아름다운 충남 대표 경관이다.',source_urls:['https://korean.visitkorea.or.kr/'],data_confidence:'high',tags:['호수','방조제','함상공원','당진','노을','가족여행','충남']},
  {name:'진주 남강',category_main:'자연',category_sub:'강/호수',period:'',period_category:'',region:'경상남도',address:'경상남도 진주시 남강로 626',location_marker_type:'exact',lat:35.1880,lng:128.0820,short_description:'진주 시내를 두 번 굽이치며 흐르는 강. 진주성·촉석루와 맞닿은 경관이 빼어나고 매년 10월 남강유등축제 때 수천 개의 등불이 수면을 수놓아 장관을 이룬다. 논개의 투신 전설이 깃든 역사의 강.',source_urls:['https://namu.wiki/'],data_confidence:'medium',tags:['강','유등축제','진주성','촉석루','논개','야경','경남']},
  {name:'두물머리',category_main:'자연',category_sub:'강/호수',period:'',period_category:'',region:'경기도',address:'경기도 양평군 양서면 두물머리길 145',location_marker_type:'exact',lat:37.5380,lng:127.4940,short_description:'북한강과 남한강이 하나로 만나는 합수지점. 400년 수령 느티나무, 황포돛배, 물안개 피어오르는 새벽 풍경으로 사진가와 여행자가 사계절 찾는 한강 제1경으로 꼽힌다.',source_urls:['https://korean.visitkorea.or.kr/'],data_confidence:'high',tags:['강','합류점','일출','물안개','느티나무','양평','경기','드라마촬영지']},
  {name:'토왕성폭포',category_main:'자연',category_sub:'폭포',period:'',period_category:'',region:'강원도',address:'강원특별자치도 속초시 설악동 산41',location_marker_type:'exact',lat:38.1542,lng:128.4947,short_description:'국내 최장 3단 연폭(총 320m)으로 명승 제96호. 화채봉에서 시작해 상·중·하단으로 웅장하게 쏟아진다. 비룡폭포 탐방로에서 조망 가능하며 겨울 빙폭이 특히 장관이다.',source_urls:['https://ko.wikipedia.org/wiki/%EC%84%A4%EC%95%85%EC%82%B0_%ED%86%A0%EC%99%95%EC%84%B1%ED%8F%AD%ED%8F%AC'],data_confidence:'high',tags:['폭포','설악산','명승','국립공원','빙폭','외설악','강원']},
  {name:'뱀사골계곡',category_main:'자연',category_sub:'강/호수',period:'',period_category:'',region:'전라북도',address:'전라북도 남원시 산내면 반선길',location_marker_type:'entrance',lat:35.3620,lng:127.5490,short_description:'지리산 반야봉 기슭에서 반선까지 14km를 흐르는 계곡. 기암괴석과 소·폭포가 연속되는 지리산 최고의 계곡미를 자랑하며 가을 단풍 명소로도 손꼽힌다.',source_urls:['https://korean.visitkorea.or.kr/'],data_confidence:'medium',tags:['계곡','지리산','단풍','트레킹','국립공원','남원','전북']},
  // 역사
  {name:'공세리 성당',category_main:'역사',category_sub:'생활유적',period:'근대 (1895년 설립)',period_category:'근대',region:'충청남도',address:'충청남도 아산시 인주면 공세리성당길 10',location_marker_type:'exact',lat:36.8833,lng:126.9134,short_description:'1895년 설립된 충청도 최초 천주교 본당. 1911년 완공된 고딕 양식 석조 성당과 100년 넘은 고목이 어우러져 영화·드라마 단골 촬영지가 됐다. 박해기 순교 성지로 충남도 기념물이다.',source_urls:['https://ko.wikipedia.org/wiki/%EC%95%84%EC%82%B0_%EA%B3%B5%EC%84%B8%EB%A6%AC%EC%84%B1%EB%8B%B9'],data_confidence:'high',tags:['천주교','성당','근대건축','고딕','순교성지','촬영지','아산','충남']},
  {name:'안동 월영교',category_main:'역사',category_sub:'생활유적',period:'현대 (2003년 개통)',period_category:'현대',region:'경상북도',address:'경상북도 안동시 상아동 569',location_marker_type:'exact',lat:36.5767,lng:128.7608,short_description:'길이 387m 국내 최장 목책 인도교로 2003년 개통됐다. 안동댐 수몰지구의 월영대를 기리는 이름을 지녔으며 야간 조명이 물 위에 반사되는 야경이 아름다운 안동의 랜드마크다.',source_urls:['https://ko.wikipedia.org/wiki/%EC%9B%94%EC%98%81%EA%B5%90'],data_confidence:'high',tags:['목교','야경','안동댐','산책','조명','낙동강','경북']},
  {name:'청계천',category_main:'역사',category_sub:'생활유적',period:'현대 (2005년 복원)',period_category:'현대',region:'서울특별시',address:'서울특별시 종로구 청계천로',location_marker_type:'entrance',lat:37.5700,lng:126.9779,short_description:'조선 시대부터 흐른 도심 하천으로 일제강점기 복개 후 2005년 5.8km 구간이 복원됐다. 청계광장 스프링 조형물에서 시작해 도심 속 생태·역사·문화가 어우러진 서울 대표 산책로다.',source_urls:['https://ko.wikipedia.org/wiki/%EC%B2%AD%EA%B3%84%EC%B2%9C'],data_confidence:'high',tags:['하천복원','도심산책','청계광장','역사','서울','도시재생']},
  {name:'감천문화마을',category_main:'역사',category_sub:'생활유적',period:'현대 (1950년대 피란민 마을)',period_category:'현대',region:'부산광역시',address:'부산광역시 사하구 감내2로 203',location_marker_type:'entrance',lat:35.0963,lng:129.0088,short_description:'1950년대 6·25 피란민과 태극도 신도들이 형성한 산복도로 마을. 2009년 마을미술프로젝트로 알록달록 벽화와 조형물이 들어서 한국의 마추픽추로 불리는 부산 대표 문화관광지다.',source_urls:['https://ko.wikipedia.org/wiki/%EA%B0%90%EC%B2%9C%EB%AC%B8%ED%99%94%EB%A7%88%EC%9D%84'],data_confidence:'high',tags:['피란민마을','벽화','골목','문화예술','부산','사하구','한국의마추픽추']}
];

const natCatCode={'자연명승':'SCN','산':'MTN','바다/해변':'SEA','강/호수':'LKE','폭포':'WAT','생활유적':'SAE'};
const regionCode={'제주특별자치도':'JJ','강원도':'GW','충청남도':'CN','경상남도':'GN','경기도':'GG','전라북도':'JB','경상북도':'GB','서울특별시':'SE','부산광역시':'BS'};

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

console.log('추가: '+newItems.length+'개 / 누적: '+merged.length+'개 / 1000: '+(merged.length/1000*100).toFixed(1)+'%');
newItems.forEach(d=>console.log('  + ['+d.place_id+'] '+d.name));
