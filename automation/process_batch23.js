const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const now = new Date().toISOString().slice(0,19);

const raw = [
  {name:'밀양 표충사',category_main:'역사',category_sub:'사찰',period:'신라 654년 원효대사 창건',period_category:'통일신라',region:'경상남도',address:'경상남도 밀양시 단장면 표충로 1338',location_marker_type:'entrance',lat:35.5122,lng:128.7256,short_description:'654년 원효대사가 창건한 사찰로 임진왜란 때 승병을 이끈 사명대사의 충의를 기리는 사당 표충사가 경내에 있다. 사명대사의 초상화와 유물이 봉안되어 있으며 매년 제향이 거행된다.',source_urls:['https://ko.wikipedia.org/wiki/%ED%91%9C%EC%B6%A9%EC%82%AC'],data_confidence:'high',tags:['신라','원효대사','사명대사','임진왜란','승병','밀양','사찰']},
  {name:'합천 해인사',category_main:'역사',category_sub:'사찰',period:'통일신라 802년 창건',period_category:'통일신라',region:'경상남도',address:'경상남도 합천군 가야면 해인사길 122',location_marker_type:'entrance',lat:35.7989,lng:128.0989,short_description:'802년 창건된 화엄종 주요 사찰로 고려대장경판(팔만대장경)을 보관하는 장경판전이 있다. 장경판전은 1995년 유네스코 세계문화유산에, 팔만대장경은 유네스코 세계기록유산에 각각 등재되었다.',source_urls:['https://ko.wikipedia.org/wiki/%ED%95%B4%EC%9D%B8%EC%82%AC'],data_confidence:'high',tags:['통일신라','팔만대장경','유네스코','장경판전','합천','화엄종','사찰']},
  {name:'고령 대가야 고분군',category_main:'역사',category_sub:'고분군',period:'가야 4~6세기',period_category:'삼국시대',region:'경상북도',address:'경상북도 고령군 고령읍 지산리 산8',location_marker_type:'entrance',lat:35.7258,lng:128.2625,short_description:'대가야 왕도였던 고령 지산동에 분포한 200여 기의 봉토분. 왕급 고분에서 순장 흔적이 발견되어 연구의 핵심 유적이며 2023년 유네스코 세계문화유산 가야고분군에 포함되었다.',source_urls:['https://ko.wikipedia.org/wiki/%EC%A7%80%EC%82%B0%EB%8F%99_%EA%B3%A0%EB%B6%84%EA%B5%B0'],data_confidence:'high',tags:['가야','대가야','고분군','유네스코','순장','고령','삼국시대']},
  {name:'창녕 교동고분군',category_main:'역사',category_sub:'고분군',period:'가야 5~6세기',period_category:'삼국시대',region:'경상남도',address:'경상남도 창녕군 창녕읍 교리 산1',location_marker_type:'entrance',lat:35.5427,lng:128.4958,short_description:'비화가야의 지배층 묘역으로 추정되는 고분군. 교동과 송현동 일대에 200기 이상의 봉토분이 분포하며 2023년 유네스코 세계문화유산 가야고분군에 포함되었다.',source_urls:['https://ko.wikipedia.org/wiki/%EC%B0%BD%EB%85%95_%EA%B5%90%EB%8F%99%C2%B7%EC%86%A1%ED%98%84%EB%8F%99_%EA%B3%A0%EB%B6%84%EA%B5%B0'],data_confidence:'high',tags:['가야','비화가야','고분군','유네스코','창녕','삼국시대','봉토분']},
  {name:'진도 운림산방',category_main:'자연',category_sub:'자연명승',period:'',period_category:'',region:'전라남도',address:'전라남도 진도군 의신면 운림산방로 315',location_marker_type:'exact',lat:34.3689,lng:126.2231,short_description:'조선 말기 남종화 대가 소치 허련이 만년에 은거하며 작품 활동을 한 화실과 연못이 어우러진 정원. 첨찰산 자락에 위치하며 연못 위 운무와 노송이 만들어내는 경관으로 유명하다.',source_urls:['https://ko.wikipedia.org/wiki/%EC%9A%B4%EB%A6%BC%EC%82%B0%EB%B0%A9'],data_confidence:'high',tags:['진도','소치허련','남종화','운림산방','정원','첨찰산','전남']},
  {name:'보성 녹차밭',category_main:'자연',category_sub:'계절 명소',period:'',period_category:'',region:'전라남도',address:'전라남도 보성군 보성읍 녹차로 775',location_marker_type:'entrance',lat:34.8281,lng:127.0797,short_description:'한국 최대 녹차 생산지 보성의 대한다원으로 삼나무 숲과 물결치는 녹차밭이 어우러진 독특한 경관이다. 1939년 조성된 이래 국내 녹차 재배의 역사를 간직하고 있다.',source_urls:['https://www.boseong.go.kr/tour'],data_confidence:'high',tags:['보성','녹차','대한다원','차밭','삼나무숲','전남','계절여행']},
  {name:'여수 향일암',category_main:'자연',category_sub:'일출/일몰 명소',period:'',period_category:'',region:'전라남도',address:'전라남도 여수시 돌산읍 향일암로 60',location_marker_type:'entrance',lat:34.6192,lng:127.7844,short_description:'돌산도 금오산 남쪽 기암절벽에 위치한 사찰로 한국의 4대 관음성지 중 하나다. 일출 명소로 유명하며 바다를 향한 기암괴석과 동백나무 숲이 절경을 이룬다.',source_urls:['https://ko.wikipedia.org/wiki/%ED%96%A5%EC%9D%BC%EC%95%94'],data_confidence:'high',tags:['여수','향일암','일출','관음성지','돌산도','사찰','기암절벽']},
  {name:'순천 낙안읍성',category_main:'역사',category_sub:'생활유적',period:'조선시대',period_category:'조선시대',region:'전라남도',address:'전라남도 순천시 낙안면 충민길 30',location_marker_type:'entrance',lat:34.9611,lng:127.3872,short_description:'조선시대 읍성과 초가마을이 원형에 가깝게 보존된 민속마을. 사적 제302호로 100여 가구의 주민이 실제 거주하는 살아있는 문화유산이다.',source_urls:['https://ko.wikipedia.org/wiki/%EB%82%99%EC%95%88%EC%9D%8D%EC%84%B1'],data_confidence:'high',tags:['순천','낙안읍성','민속마을','초가','사적','조선시대','생활유산']}
];

const subCatCode={'사찰':'SAJ','고분군':'GOB','자연명승':'SCN','계절 명소':'GAD','일출/일몰 명소':'SUN','생활유적':'SAE'};
const regionCode={'경상남도':'GN','경상북도':'GB','전라남도':'JN'};

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
