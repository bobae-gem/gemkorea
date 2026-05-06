const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const now = new Date().toISOString().slice(0,19);

const raw = [
  {name:'제주 4·3평화공원',category_main:'역사',category_sub:'독립운동',period:'현대 1948년 4·3사건 추모',period_category:'현대',region:'제주특별자치도',address:'제주특별자치도 제주시 명림로 430',location_marker_type:'entrance',lat:33.4889,lng:126.5730,short_description:'1948년 4·3사건 희생자를 추모하기 위해 조성된 국가 추모공원. 위패봉안실·기념관·조형물로 구성되며 4·3사건은 2003년 정부의 공식 진상조사보고서 채택과 함께 국가 차원의 추모가 이루어지고 있다.',source_urls:['https://jeju43peace.or.kr'],data_confidence:'high',tags:['4.3사건','근현대사','추모공원','제주','국가추모','평화','현대사']},
  {name:'제주 대정향교',category_main:'역사',category_sub:'생활유적',period:'조선 1416년 건립',period_category:'조선시대',region:'제주특별자치도',address:'제주특별자치도 서귀포시 대정읍 향교로 170',location_marker_type:'exact',lat:33.2316,lng:126.2475,short_description:'1416년 창건된 제주 서부 대표 향교. 대성전·명륜당 등이 남아 있으며 제주 유형문화재 제4호다. 추사 김정희도 유배 중 이 향교에서 제자들을 가르쳤다.',source_urls:['https://ko.wikipedia.org/wiki/%EB%8C%80%EC%A0%95%ED%96%A5%EA%B5%90'],data_confidence:'high',tags:['향교','조선전기','유교','대정읍','추사','제주','도유형문화재']},
  {name:'제주 수월봉',category_main:'자연',category_sub:'자연명승',period:'',period_category:'',region:'제주특별자치도',address:'제주특별자치도 제주시 한경면 고산리 3760',location_marker_type:'entrance',lat:33.2938,lng:126.1618,short_description:'약 1만 8000년 전 수성화산 분출로 형성된 화산쇄설층이 해안 절벽에 드러난 세계지질공원 핵심 명소. 수월이·녹고 남매의 설화가 전해지며 제주 서쪽 끝 절경 일몰 명소다.',source_urls:['https://www.jeju.go.kr/geopark/sites/suwolbong.htm'],data_confidence:'high',tags:['세계지질공원','화산지형','화산쇄설층','해안절벽','수성화산','한경면','제주']},
  {name:'울릉도 독도전망대',category_main:'자연',category_sub:'자연명승',period:'',period_category:'',region:'경상북도',address:'경상북도 울릉군 울릉읍 독도이사부길 130',location_marker_type:'entrance',lat:37.5044,lng:130.8762,short_description:'울릉도 망향봉(324m) 정상에 설치된 전망대로 날씨가 맑은 날 독도를 육안으로 조망할 수 있는 유일한 육상 지점이다. 케이블카를 이용해 오를 수 있으며 울릉도 최고 경관과 동해 조망을 즐길 수 있다.',source_urls:['https://www.ulleung.go.kr/tour'],data_confidence:'medium',tags:['독도조망','울릉도','케이블카','망향봉','동해','경관','경상북도']},
  {name:'울릉도 봉래폭포',category_main:'자연',category_sub:'폭포',period:'',period_category:'',region:'경상북도',address:'경상북도 울릉군 울릉읍 봉래길 89-9',location_marker_type:'entrance',lat:37.5058,lng:130.9108,short_description:'울릉도 성인봉에서 발원하는 3단 폭포로 낙차 약 30m에 달한다. 연중 수량이 풍부하며 울릉도 용천수의 주요 공급원 중 하나다. 저동항 인근에서 도보로 접근 가능하다.',source_urls:['https://www.ulleung.go.kr/tour'],data_confidence:'high',tags:['폭포','울릉도','3단폭포','성인봉','용천수','저동','경상북도']},
  {name:'울릉도 나리분지',category_main:'자연',category_sub:'자연명승',period:'',period_category:'',region:'경상북도',address:'경상북도 울릉군 북면 나리 산1-1 일대',location_marker_type:'exact',lat:37.5416,lng:130.8642,short_description:'울릉도 유일의 평지로 화산 칼데라가 두 번 분출해 형성된 이중 분화구 내에 자리한다. 나리마을이 형성되어 있으며 울릉도 전통 가옥 투막집과 너와집이 남아 있다.',source_urls:['https://www.ulleung.go.kr/tour'],data_confidence:'high',tags:['칼데라','분화구','화산지형','울릉도','나리마을','투막집','경상북도']},
  {name:'독도',category_main:'역사',category_sub:'자연명승',period:'현대 대한민국 영토',period_category:'현대',region:'경상북도',address:'경상북도 울릉군 울릉읍 독도리 산1-96',location_marker_type:'exact',lat:37.2426,lng:131.8641,short_description:'대한민국 최동단 섬으로 동도와 서도 2개의 주도와 89개 부속 도서로 구성된다. 천연기념물 제336호로 지정된 생태 보호구역이며 동해 한가운데 위치한 대한민국의 고유 영토다.',source_urls:['https://dokdo.mofa.go.kr/kor/dokdo/korean_territory.jsp'],data_confidence:'high',tags:['독도','최동단','천연기념물','동도서도','영토','동해','경상북도']},
  {name:'대전 계족산성',category_main:'역사',category_sub:'성곽',period:'삼국시대 백제~통일신라',period_category:'삼국시대',region:'대전광역시',address:'대전광역시 대덕구 장동 산6-1 일대',location_marker_type:'entrance',lat:36.4321,lng:127.4698,short_description:'대전 계족산 정상부를 둘러싼 둘레 약 1.1km의 삼국시대 석성. 백제가 축조하고 통일신라가 개축한 것으로 추정되며 사적 제355호로 지정되어 있다.',source_urls:['https://ko.wikipedia.org/wiki/%EA%B3%84%EC%A1%B1%EC%82%B0%EC%84%B1'],data_confidence:'high',tags:['삼국시대','백제','통일신라','산성','사적','계족산','대전']},
  {name:'대전 장태산자연휴양림',category_main:'자연',category_sub:'자연명승',period:'',period_category:'',region:'대전광역시',address:'대전광역시 서구 장안로 461',location_marker_type:'entrance',lat:36.2856,lng:127.3014,short_description:'대전 장태산 일대의 국립자연휴양림. 편백나무와 메타세쿼이아 숲이 주를 이루며 스카이타워·출렁다리 등 체험시설이 있는 국내 최초 산림 복합문화공간이다.',source_urls:['https://www.foresttrip.go.kr/indvz/main.do?hmpgId=ID01010023'],data_confidence:'high',tags:['자연휴양림','편백나무','메타세쿼이아','숲길','스카이타워','대전','서구']},
  {name:'세종 세종호수공원',category_main:'자연',category_sub:'강/호수',period:'',period_category:'',region:'세종특별자치시',address:'세종특별자치시 연기면 세종리 1 일대',location_marker_type:'entrance',lat:36.5007,lng:127.2656,short_description:'세종 행정중심복합도시 내 조성된 국내 최대 규모의 인공호수공원. 면적 약 70만 8000㎡, 호수 둘레 약 4.6km에 달하며 수상 분수와 야간 경관 조명으로 사랑받는다.',source_urls:['https://www.sejong.go.kr/prog/turismCn/kor/sub05_03_06/turismCnView.do?seq=217'],data_confidence:'high',tags:['호수공원','인공호수','세종','행정복합도시','수변공원','야경','가족여행']},
  {name:'단양 구담봉',category_main:'자연',category_sub:'자연명승',period:'',period_category:'',region:'충청북도',address:'충청북도 단양군 단성면 장회리 산1-1 일대',location_marker_type:'entrance',lat:36.9883,lng:128.1944,short_description:'충주호 남쪽 단양 팔경 중 하나로 거북 형상의 암봉과 충주호 수면이 어우러진 절경. 국가명승 제46호로 장회나루에서 유람선으로 감상하거나 등산로를 통해 정상(330m)에 오를 수 있다.',source_urls:['https://ko.wikipedia.org/wiki/%EA%B5%AC%EB%8B%B4%EB%B4%89'],data_confidence:'high',tags:['단양팔경','명승','충주호','암봉','유람선','장회나루','단양']}
];

const subCatCode={'독립운동':'DOK','생활유적':'SAE','자연명승':'SCN','폭포':'WAT','성곽':'SAN','강/호수':'LKE'};
const regionCode={'제주특별자치도':'JJ','경상북도':'GB','대전광역시':'DJ','세종특별자치시':'SJ','충청북도':'CB'};

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
