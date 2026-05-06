const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const now = new Date().toISOString().slice(0,19);

const raw = [
  {name:'경주 첨성대',category_main:'역사',category_sub:'석조유물',period:'신라 선덕여왕 재위기 (632~647년)',period_category:'삼국시대',region:'경상북도',address:'경상북도 경주시 인왕동 839-1',location_marker_type:'exact',lat:35.8353,lng:129.2190,short_description:'7세기 신라 선덕여왕 때 축조된 동아시아 최고(最古)의 천문 관측대. 화강암 362개로 쌓아 올린 높이 9.17m의 원통형 석조물로 국보 제31호이자 경주 역사유적지구 유네스코 세계유산이다.',source_urls:['https://ko.wikipedia.org/wiki/%EC%B2%A8%EC%84%B1%EB%8C%80'],data_confidence:'high',tags:['신라','선덕여왕','첨성대','천문대','국보','경주','유네스코']},
  {name:'경주 대릉원',category_main:'역사',category_sub:'고분군',period:'신라시대 (4~6세기)',period_category:'삼국시대',region:'경상북도',address:'경상북도 경주시 황남동 51',location_marker_type:'entrance',lat:35.8342,lng:129.2197,short_description:'신라 왕과 귀족의 고분 23기가 밀집한 왕릉군. 1973년 발굴된 천마총에서 천마도·금관 등 1만 1500여 점 유물이 출토됐다. 경주 도심 한복판에 자리한 유네스코 세계유산이다.',source_urls:['https://ko.wikipedia.org/wiki/%EB%8C%80%EB%A6%89%EC%9B%90'],data_confidence:'high',tags:['신라','천마총','금관','고분','경주','왕릉군','유네스코']},
  {name:'대구 팔공산',category_main:'자연',category_sub:'산',period:'',period_category:'',region:'대구광역시',address:'대구광역시 동구 팔공산로 185',location_marker_type:'entrance',lat:35.9985,lng:128.6925,short_description:'대구 북쪽에 솟은 해발 1,193m의 명산으로 2023년 국립공원으로 승격됐다. 갓바위 약사여래좌상과 동화사를 품고 있으며 케이블카를 이용하면 능선까지 오를 수 있는 대구 시민의 대표 휴양지다.',source_urls:['https://ko.wikipedia.org/wiki/%ED%8C%94%EA%B3%B5%EC%82%B0'],data_confidence:'high',tags:['국립공원','팔공산','갓바위','동화사','대구','케이블카','단풍']},
  {name:'함안 악어섬',category_main:'자연',category_sub:'섬',period:'',period_category:'',region:'경상남도',address:'경상남도 함안군 대산면 서촌리 낙동강',location_marker_type:'entrance',lat:35.2791,lng:128.3817,short_description:'낙동강 하중도에 위치한 함안의 숨겨진 자연섬. 봄이면 유채꽃과 청보리가 광활하게 피어나 인생샷 명소로 급부상했으며 악어처럼 생긴 섬의 실루엣에서 이름이 유래했다.',source_urls:['https://www.haman.go.kr/tour'],data_confidence:'medium',tags:['함안','낙동강','하중도','유채꽃','청보리','봄꽃','인생샷']},
  {name:'창녕 우포늪',category_main:'자연',category_sub:'강/호수',period:'',period_category:'',region:'경상남도',address:'경상남도 창녕군 유어면 우포늪길 220',location_marker_type:'entrance',lat:35.5539,lng:128.4161,short_description:'약 1억 4천만 년 전 형성된 국내 최대 자연 내륙 습지(2.31㎢). 람사르 협약 등록 습지로 황새·노랑부리저어새 등 희귀 조류의 서식지이며 사계절 생태 탐방이 가능하다.',source_urls:['https://ko.wikipedia.org/wiki/%EC%9A%B0%ED%8F%AC%EB%8A%AA'],data_confidence:'high',tags:['우포늪','람사르','습지','창녕','생태관광','철새','자연보전']},
  {name:'함평 나비대축제',category_main:'자연',category_sub:'자연명승',period:'',period_category:'',region:'전라남도',address:'전라남도 함평군 함평읍 엑스포로 8',location_marker_type:'entrance',lat:35.0659,lng:126.5175,short_description:'매년 봄 100만 마리 이상의 나비를 방생하는 대한민국 대표 나비 축제 공간. 나비생태관과 자연생태관을 갖추고 있으며 1999년부터 이어온 전국 최대 생태 축제 명소다.',source_urls:['https://www.hampyeong.go.kr/tour'],data_confidence:'medium',tags:['함평','나비축제','생태공원','봄꽃','나비','전남','생태여행']}
];

const subCatCode={'석조유물':'SAJ','고분군':'GOB','산':'MTN','섬':'SUM','강/호수':'LKE','자연명승':'SCN'};
const regionCode={'경상북도':'GB','대구광역시':'DG','경상남도':'GN','전라남도':'JN'};

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
