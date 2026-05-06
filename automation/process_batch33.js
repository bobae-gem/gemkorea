const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const now = new Date().toISOString().slice(0,19);

const raw = [
  {name:'경주 기림사',category_main:'역사',category_sub:'사찰',period:'신라 643년 창건',period_category:'삼국시대',region:'경상북도',address:'경상북도 경주시 양북면 기림로 437',location_marker_type:'entrance',lat:35.7594,lng:129.3736,short_description:'643년 인도 승려 광유성인이 창건하고 원효대사가 중창한 신라 고찰. 건칠보살좌상(국보)을 봉안하며 불국사 말사로 함월산 깊은 계곡 안에 자리한다.',source_urls:['https://ko.wikipedia.org/wiki/%EA%B8%B0%EB%A6%BC%EC%82%AC'],data_confidence:'high',tags:['사찰','신라','원효','경주','경북','함월산','국보','불국사말사']},
  {name:'경주 골굴사',category_main:'역사',category_sub:'사찰',period:'신라 6세기 창건',period_category:'삼국시대',region:'경상북도',address:'경상북도 경주시 양북면 안동리 산304',location_marker_type:'entrance',lat:35.7786,lng:129.3850,short_description:'6세기 인도 승려 광유성인이 개창한 한국 유일의 석굴 사원. 응회암 절벽에 12개 석굴을 파서 법당을 조성했으며 암벽 꼭대기 마애여래좌상(보물)이 있다. 선무도 발상지로 유명하다.',source_urls:['https://ko.wikipedia.org/wiki/%EA%B3%A8%EA%B5%B4%EC%82%AC'],data_confidence:'high',tags:['사찰','신라','석굴사원','경주','경북','마애불','선무도','보물']},
  {name:'양산 내원사',category_main:'역사',category_sub:'사찰',period:'통일신라 827년 창건',period_category:'통일신라',region:'경상남도',address:'경상남도 양산시 하북면 내원로 207',location_marker_type:'entrance',lat:35.4764,lng:129.0306,short_description:'신라 흥덕왕 2년(827) 창건된 천축산 기슭의 비구니 전문 선원. 영남알프스 자락 깊은 계곡 속에 위치하여 수행 도량의 고즈넉한 분위기를 자아낸다.',source_urls:['https://www.naewonsa.or.kr'],data_confidence:'high',tags:['사찰','통일신라','비구니선원','양산','경남','천축산','영남알프스','계곡']},
  {name:'거제 해금강',category_main:'자연',category_sub:'자연명승',period:'',period_category:'',region:'경상남도',address:'경상남도 거제시 남부면 갈곶리 산1',location_marker_type:'entrance',lat:34.7803,lng:128.7144,short_description:'거제도 최남단 갈곶도 일원의 명승 제2호. 기암절벽과 해식동굴이 절경을 이루며 일출 때 바위 틈새로 빛이 통과하는 신비로운 광경으로 유명하다. 유람선으로 해상에서 감상하는 것이 일품이다.',source_urls:['https://ko.wikipedia.org/wiki/%EA%B1%B0%EC%A0%9C_%ED%95%B4%EA%B8%88%EA%B0%95'],data_confidence:'high',tags:['명승','해안','기암절벽','거제','경남','유람선','일출','해식동굴']},
  {name:'남해 물건리 방조어부림',category_main:'자연',category_sub:'자연명승',period:'',period_category:'',region:'경상남도',address:'경상남도 남해군 삼동면 물건리 1519',location_marker_type:'exact',lat:34.8028,lng:128.0731,short_description:'300년 이상 된 느티나무·푸조나무 등 활엽수 숲이 반달 모양으로 바다를 감싼 천연기념물 제150호. 방풍림 겸 어부림으로 기능하며 뒤로는 산 앞으로는 바다가 펼쳐지는 절경이다.',source_urls:['https://ko.wikipedia.org/wiki/%EB%82%A8%ED%95%B4_%EB%AC%BC%EA%B1%B4%EB%A6%AC_%EB%B0%A9%EC%A1%B0%EC%96%B4%EB%B6%80%EB%A6%BC'],data_confidence:'high',tags:['천연기념물','숲','방풍림','어부림','남해','경남','바다','느티나무']},
  {name:'합천 황매산',category_main:'자연',category_sub:'산',period:'',period_category:'',region:'경상남도',address:'경상남도 합천군 가회면 황매산로 일대',location_marker_type:'entrance',lat:35.5061,lng:128.0419,short_description:'해발 1,108m 합천과 산청에 걸쳐 있는 명산. 5월 철쭉 군락이 산정 초원을 붉게 물들이는 장관으로 전국에서 관광객이 몰리며 드넓은 고원 분지와 기암괴석이 어우러진다.',source_urls:['https://ko.wikipedia.org/wiki/%ED%99%A9%EB%A7%A4%EC%82%B0'],data_confidence:'high',tags:['산','철쭉','고원','합천','경남','산청','봄꽃','기암']},
  {name:'함양 상림숲',category_main:'자연',category_sub:'자연명승',period:'',period_category:'',region:'경상남도',address:'경상남도 함양군 함양읍 운림리 232',location_marker_type:'exact',lat:35.5231,lng:127.7253,short_description:'신라 진성여왕 때 최치원이 홍수 피해를 막기 위해 조성한 인공 방수림으로 천연기념물 제154호. 1,100년 이상 된 활엽수 120여 종이 우거진 국내 최고(最古) 인공림이다.',source_urls:['https://ko.wikipedia.org/wiki/%ED%95%A8%EC%96%91_%EC%83%81%EB%A6%BC'],data_confidence:'high',tags:['천연기념물','숲','인공림','함양','경남','최치원','방수림','신라']},
  {name:'창녕 화왕산',category_main:'자연',category_sub:'산',period:'',period_category:'',region:'경상남도',address:'경상남도 창녕군 창녕읍 화왕산로 일대',location_marker_type:'entrance',lat:35.5472,lng:128.4928,short_description:'해발 757m 창녕의 진산으로 정상 분화구 안 드넓은 억새 초원이 장관인 경남 대표 억새 명산. 화왕산성(사적)이 산 정상부를 두르고 있으며 가을 억새가 특히 아름답다.',source_urls:['https://ko.wikipedia.org/wiki/%ED%99%94%EC%99%95%EC%82%B0'],data_confidence:'high',tags:['산','억새','화왕산성','창녕','경남','사적','분화구','가을']},
  {name:'창원 마산 3·15의거탑',category_main:'역사',category_sub:'생활유적',period:'현대 1960년',period_category:'현대',region:'경상남도',address:'경상남도 창원시 마산합포구 3·15대로 45',location_marker_type:'exact',lat:35.1903,lng:128.5722,short_description:'1960년 3월 15일 부정선거에 항거한 마산 시민들의 민주화 운동을 기념하는 탑. 4·19혁명의 도화선이 된 3·15의거의 정신을 기리며 민주주의 성지다.',source_urls:['https://ko.wikipedia.org/wiki/3%C2%B715_%EC%9D%98%EA%B1%B0'],data_confidence:'high',tags:['근현대사','민주화운동','3.15의거','창원','마산','경남','4.19혁명','기념탑']}
];

const subCatCode={'사찰':'SAJ','자연명승':'SCN','산':'MTN','생활유적':'SAE'};
const regionCode={'경상북도':'GB','경상남도':'GN'};

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
