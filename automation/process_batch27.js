const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const now = new Date().toISOString().slice(0,19);

const raw = [
  {name:'나주목 관아 금성관',category_main:'역사',category_sub:'생활유적',period:'조선 성종 1475~1479년 건립',period_category:'조선시대',region:'전라남도',address:'전라남도 나주시 금성관길 8',location_marker_type:'exact',lat:35.0341,lng:126.7106,short_description:'조선 성종 연간 건립된 나주목의 객사로 전국 현존 객사 중 최대 규모를 자랑하는 보물이다. 금성은 나주의 고호(古號)이며 앞면 5칸 팔작지붕 건물이 웅장하다.',source_urls:['https://ko.wikipedia.org/wiki/%EB%82%98%EC%A3%BC%EB%AA%A9_%EA%B4%80%EC%95%84%EC%99%80_%ED%96%A5%EA%B5%90'],data_confidence:'high',tags:['나주목','객사','금성관','조선관아','보물','나주읍성','전라도']},
  {name:'영암 도갑사',category_main:'역사',category_sub:'사찰',period:'통일신라 도선국사 창건',period_category:'통일신라',region:'전라남도',address:'전라남도 영암군 군서면 도갑사로 306',location_marker_type:'entrance',lat:34.7697,lng:126.6884,short_description:'월출산 서쪽 기슭에 자리한 천년 고찰로 통일신라 말 도선국사가 창건했다. 국보 해탈문과 마애여래좌상을 보유하고 있으며 월출산과 어우러진 경내 풍광이 빼어나다.',source_urls:['https://ko.wikipedia.org/wiki/%EB%8F%84%EA%B0%91%EC%82%AC'],data_confidence:'high',tags:['도선국사','월출산','해탈문','국보','마애불','영암','조계종']},
  {name:'강진 무위사',category_main:'역사',category_sub:'사찰',period:'617년 원효대사 창건',period_category:'통일신라',region:'전라남도',address:'전라남도 강진군 성전면 무위사로 308',location_marker_type:'entrance',lat:34.5278,lng:126.7041,short_description:'617년 원효대사가 창건한 고찰로 조선 세종 12년 건립된 극락보전은 국보 제13호의 조선 전기 최고 목조 건축이다. 내부에 고려 불화 전통을 계승한 아미타후불벽화가 완존한다.',source_urls:['https://ko.wikipedia.org/wiki/%EB%AC%B4%EC%9C%84%EC%82%AC'],data_confidence:'high',tags:['극락보전','국보','원효대사','조선건축','아미타불','강진','불교회화']},
  {name:'곡성 섬진강 기차마을',category_main:'자연',category_sub:'계절 명소',period:'',period_category:'',region:'전라남도',address:'전라남도 곡성군 오곡면 기차마을로 232',location_marker_type:'entrance',lat:35.2822,lng:127.2847,short_description:'폐선된 옛 전라선 철로를 활용해 조성된 테마파크로 증기기관차를 타고 섬진강변 17km 구간을 달리는 레일바이크가 핵심이다. 봄 장미축제와 가을 단풍 등 사계절 내내 섬진강 자연을 즐길 수 있다.',source_urls:['https://www.railtrip.co.kr/homepage/gokseong/'],data_confidence:'high',tags:['증기기관차','섬진강','레일바이크','장미축제','곡성','폐선활용','가족여행']},
  {name:'구례 산수유마을',category_main:'자연',category_sub:'계절 명소',period:'',period_category:'',region:'전라남도',address:'전라남도 구례군 산동면 위안월계길 6-12',location_marker_type:'entrance',lat:35.2198,lng:127.4612,short_description:'전국 산수유 생산량의 70% 이상을 차지하는 국내 최대 산수유 군락지. 매년 3월이면 마을 전체가 노란 산수유 꽃으로 물들고 가을에는 빨간 열매와 지리산이 어우러져 장관이다.',source_urls:['https://www.gurye.go.kr/tour'],data_confidence:'high',tags:['산수유','봄꽃','지리산','구례','꽃축제','마을여행','전남']},
  {name:'담양 메타세쿼이아길',category_main:'자연',category_sub:'자연명승',period:'',period_category:'',region:'전라남도',address:'전라남도 담양군 담양읍 메타세쿼이아로 12',location_marker_type:'entrance',lat:35.3219,lng:126.9881,short_description:'1972년 조성된 총 8.5km의 메타세쿼이아 가로수길로 높이 10~20m 나무들이 만드는 초록 터널이 압도적이다. 한국의 아름다운 길 100선 대상에 선정됐으며 봄 신록과 가을 단풍이 특히 아름답다.',source_urls:['https://www.damyang.go.kr/tour'],data_confidence:'high',tags:['메타세쿼이아','가로수길','단풍','담양','산책','드라이브','전남']},
  {name:'장성 백양사',category_main:'역사',category_sub:'사찰',period:'632년 백제 무왕 창건',period_category:'삼국시대',region:'전라남도',address:'전라남도 장성군 북하면 백양로 1239',location_marker_type:'entrance',lat:35.4542,lng:126.8798,short_description:'내장산국립공원 백암산 자락에 자리한 조계종 본사로 632년 창건되었다. 백학봉을 배경으로 쌍계루가 연못에 비치는 풍경이 국가 명승이며 가을 단풍과 겨울 설경이 절경이다.',source_urls:['https://ko.wikipedia.org/wiki/%EB%B0%B1%EC%96%91%EC%82%AC'],data_confidence:'high',tags:['백암산','내장산국립공원','단풍','쌍계루','백학봉','명승','장성']},
  {name:'보성 벌교 홍교',category_main:'역사',category_sub:'생활유적',period:'조선 영조 1729~1737년 조성',period_category:'조선시대',region:'전라남도',address:'전라남도 보성군 벌교읍 벌교리 5',location_marker_type:'exact',lat:34.8453,lng:127.3505,short_description:'1729년 순천 선암사 승려가 놓은 석교로 현존 홍예교 중 최대 규모(길이 27.6m) 보물이다. 벌교 지명 자체가 뗏목다리에서 유래했으며 오늘날에도 주민이 통행하는 살아있는 유산이다.',source_urls:['https://ko.wikipedia.org/wiki/%EB%B3%B4%EC%84%B1_%EB%B2%8C%EA%B5%90_%ED%99%8D%EA%B5%90'],data_confidence:'high',tags:['홍예교','보물','조선석교','벌교','선암사','보성','무지개다리']}
];

const subCatCode={'생활유적':'SAE','사찰':'SAJ','계절 명소':'GAD','자연명승':'SCN'};
const regionCode={'전라남도':'JN'};

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
