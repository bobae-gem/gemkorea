const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const now = new Date().toISOString().slice(0,19);

const raw = [
  {name:'예천 회룡포',category_main:'자연',category_sub:'강/호수',period:'',period_category:'',region:'경상북도',address:'경상북도 예천군 용궁면 회룡포길 121',location_marker_type:'entrance',lat:36.5698,lng:128.4193,short_description:'내성천이 350도 이상 굽어 돌아 마을을 섬처럼 에워싼 육지 속의 섬 지형. 비룡산 전망대에서 바라보는 물돌이동 경관이 국내 손꼽히는 절경으로 국가명승 제16호로 지정되어 있다.',source_urls:['https://ko.wikipedia.org/wiki/%ED%9A%8C%EB%A3%A1%ED%8F%AC'],data_confidence:'high',tags:['회룡포','물돌이동','내성천','예천','국가명승','강마을','경북']},
  {name:'문경 새재',category_main:'역사',category_sub:'자연명승',period:'조선 전기 1414년 개척',period_category:'조선시대',region:'경상북도',address:'경상북도 문경시 문경읍 새재로 932',location_marker_type:'entrance',lat:36.7698,lng:128.0749,short_description:'조선시대 한양과 영남을 잇던 영남대로의 핵심 고갯길로 국가명승 제32호이자 도립공원이다. 조령 1·2·3관문이 원형 보존되어 있으며 사극 촬영지로도 널리 알려진 역사·자연 명소다.',source_urls:['https://ko.wikipedia.org/wiki/%EB%AC%B8%EA%B2%BD_%EC%83%88%EC%9E%AC'],data_confidence:'high',tags:['문경새재','영남대로','조령관문','국가명승','문경','조선시대','고갯길']},
  {name:'청송 주왕산',category_main:'자연',category_sub:'산',period:'',period_category:'',region:'경상북도',address:'경상북도 청송군 주왕산면 공원길 169-7',location_marker_type:'entrance',lat:36.3948,lng:129.1531,short_description:'기암괴석과 폭포가 어우러진 국립공원으로 주왕굴·달기폭포·절구폭포 등 수직 암벽 협곡 경관이 특징이다. 유네스코 세계지질공원으로 인증된 청송 지질공원의 핵심 구역이며 단풍철 명소다.',source_urls:['https://ko.wikipedia.org/wiki/%EC%A3%BC%EC%99%95%EC%82%B0'],data_confidence:'high',tags:['주왕산','국립공원','세계지질공원','청송','기암괴석','단풍','폭포']},
  {name:'경주 문무대왕 수중릉',category_main:'역사',category_sub:'왕릉',period:'통일신라 681년',period_category:'통일신라',region:'경상북도',address:'경상북도 경주시 양북면 봉길리 산5',location_marker_type:'exact',lat:35.5836,lng:129.4636,short_description:'삼국통일을 완수한 신라 문무왕의 유언에 따라 동해 바다 속 암초 위에 조성된 세계 유일의 수중릉. 봉길해변에서 약 200m 떨어진 해중 암반이 능으로 사적 제158호다.',source_urls:['https://ko.wikipedia.org/wiki/%EB%8C%80%EC%99%95%EC%95%94_(%EA%B2%BD%EC%A3%BC)'],data_confidence:'high',tags:['문무대왕릉','수중릉','통일신라','경주','문무왕','삼국통일','사적']},
  {name:'태백 검룡소',category_main:'자연',category_sub:'강/호수',period:'',period_category:'',region:'강원도',address:'강원특별자치도 태백시 창죽동 산1-1',location_marker_type:'exact',lat:37.1604,lng:128.9481,short_description:'한강의 발원지로 공인된 석회암 지대의 원형 샘. 하루 약 2,000~3,000톤의 물이 용출되며 태백산도립공원 내 해발 1,260m에 위치한 국가명승 제73호다.',source_urls:['https://ko.wikipedia.org/wiki/%EA%B2%80%EB%A3%A1%EC%86%8C'],data_confidence:'high',tags:['검룡소','한강발원지','태백','국가명승','태백산','샘','석회암']},
  {name:'가평 아침고요수목원',category_main:'자연',category_sub:'자연명승',period:'',period_category:'',region:'경기도',address:'경기도 가평군 상면 수목원로 432',location_marker_type:'entrance',lat:37.7985,lng:127.5073,short_description:'1996년 개원한 사립 수목원으로 한국적 정원 미학을 표방하며 20여 개의 테마 정원과 5,000여 종의 식물을 보유한다. 봄 튤립·여름 수국·가을 단풍·겨울 별빛정원전 등 사계절 축제로 유명하다.',source_urls:['https://www.morningcalm.co.kr'],data_confidence:'high',tags:['아침고요수목원','가평','정원','사계절','별빛축제','경기도','수목원']},
  {name:'남양주 물의정원',category_main:'자연',category_sub:'강/호수',period:'',period_category:'',region:'경기도',address:'경기도 남양주시 조안면 북한강로 398',location_marker_type:'entrance',lat:37.6406,lng:127.4267,short_description:'북한강변에 조성된 수변 생태공원으로 봄철 유채꽃과 가을 코스모스 군락이 장관을 이룬다. 두물머리와 가까운 위치에 자전거 라이딩 및 피크닉 명소로 수도권 시민들에게 인기다.',source_urls:['https://www.nyj.go.kr/tour'],data_confidence:'medium',tags:['물의정원','남양주','북한강','수변공원','유채꽃','코스모스','경기도']},
  {name:'하동 쌍계사 벚꽃길',category_main:'자연',category_sub:'계절 명소',period:'',period_category:'',region:'경상남도',address:'경상남도 하동군 화개면 쌍계사길 59',location_marker_type:'entrance',lat:35.2327,lng:127.5867,short_description:'화개장터에서 쌍계사까지 이어지는 약 6km의 벚꽃 터널 길. 매년 4월 초 십리벚꽃길로 불리며 섬진강변과 함께 한국의 봄 풍경을 대표하는 경관이다.',source_urls:['https://www.hadong.go.kr/tour'],data_confidence:'high',tags:['쌍계사벚꽃길','화개십리벚꽃','하동','봄꽃','섬진강','벚꽃터널','경남']},
  {name:'광양 매화마을',category_main:'자연',category_sub:'계절 명소',period:'',period_category:'',region:'전라남도',address:'전라남도 광양시 다압면 지막1길 55',location_marker_type:'entrance',lat:35.0713,lng:127.7028,short_description:'섬진강변 청매실농원 일대로 매년 3월 초순 약 10만 그루 매화나무가 일제히 꽃을 피운다. 광양 매화축제 기간 수십만 명의 관광객이 방문하는 대표적인 봄꽃 명소다.',source_urls:['https://www.maehwa.com'],data_confidence:'high',tags:['매화마을','광양','청매실농원','매화축제','섬진강','봄꽃','전남']}
];

const subCatCode={'강/호수':'LKE','자연명승':'SCN','산':'MTN','왕릉':'RYU','계절 명소':'GAD'};
const regionCode={'경상북도':'GB','강원도':'GW','경기도':'GG','경상남도':'GN','전라남도':'JN'};

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
