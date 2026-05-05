const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const raw = [
  {name:'전주 경기전',category:'생활유적',period:'조선 전기 (1410년 창건)',period_category:'조선 전기',region:'전라북도',address:'전라북도 전주시 완산구 태조로 44',location_marker_type:'entrance',lat:35.8153,lng:127.1527,short_description:'조선 태조 이성계의 어진을 봉안하기 위해 1410년 건립된 조선 왕조의 발상지. 전주사고가 위치했으며 임진왜란 때도 어진이 보존된 역사적 성지다.',source_urls:['https://www.jeonju.go.kr/'],data_confidence:'high',tags:['조선전기','태조','어진','전주','발상지']},
  {name:'익산 미륵사지',category:'사찰',period:'삼국시대 백제 (600년대 초, 유네스코)',period_category:'삼국',region:'전라북도',address:'전라북도 익산시 금마면 미륵사지로 362',location_marker_type:'entrance',lat:35.9743,lng:126.9982,short_description:'백제 최대 사찰 터로 유네스코 세계유산 익산 역사유적지구의 핵심. 동양 최대 규모 미륵사지 석탑(국보)이 있으며 백제 불교 문화의 정수를 보여준다.',source_urls:['https://heritage.go.kr/'],data_confidence:'high',tags:['삼국시대','백제','무왕','미륵사','유네스코','익산']},
  {name:'익산 왕궁리 유적',category:'생활유적',period:'삼국시대 백제 (600년대 초, 유네스코)',period_category:'삼국',region:'전라북도',address:'전라북도 익산시 왕궁면 궁성로 666',location_marker_type:'exact',lat:35.9558,lng:127.0216,short_description:'백제 무왕이 조성한 궁성 터로 유네스코 세계유산. 왕궁리 오층석탑(국보)이 중심에 서 있으며 백제의 도시 계획과 생활상을 알 수 있는 중요 유적이다.',source_urls:['https://heritage.go.kr/'],data_confidence:'high',tags:['삼국시대','백제','무왕','궁성','유네스코','익산']},
  {name:'남원 광한루원',category:'생활유적',period:'조선 전기 (1419년 건립)',period_category:'조선 전기',region:'전라북도',address:'전라북도 남원시 요천로 1447',location_marker_type:'entrance',lat:35.4163,lng:127.3895,short_description:'조선 시대 대표 누각 광한루와 호수·정원이 어우러진 명승지. 춘향전의 배경으로 춘향과 이몽룡이 만난 곳으로 유명하며 매년 춘향제가 열린다.',source_urls:['https://www.namwon.go.kr/'],data_confidence:'high',tags:['조선전기','광한루','춘향전','남원']},
  {name:'정읍 황토현 전적지',category:'독립운동유적',period:'근대 (1894년 동학농민혁명)',period_category:'근대',region:'전라북도',address:'전라북도 정읍시 덕천면 황토현로 355',location_marker_type:'exact',lat:35.5702,lng:126.9114,short_description:'1894년 동학농민군이 관군에게 첫 대승을 거둔 역사적 전적지. 갑오동학혁명의 시작점으로 동학농민혁명기념관과 기념탑이 조성되어 있다.',source_urls:['https://www.jeongup.go.kr/'],data_confidence:'high',tags:['근대','동학농민혁명','전봉준','정읍','반봉건']},
  {name:'무주 적상산성',category:'산성',period:'고려~조선 시대',period_category:'고려',region:'전라북도',address:'전라북도 무주군 적상면 산성로 97-97',location_marker_type:'entrance',lat:35.9104,lng:127.6787,short_description:'해발 1,000m 적상산 정상부를 둘러싼 산성. 조선 광해군 때 실록을 보관한 사고가 설치되었으며 머루와 단풍으로 유명한 적상산 안에 위치해 자연과 역사가 공존한다.',source_urls:['https://www.muju.go.kr/'],data_confidence:'medium',tags:['고려','조선','산성','실록','사고','무주']},
  {name:'순천 선암사',category:'사찰',period:'통일신라 (875년 창건, 유네스코)',period_category:'통일신라',region:'전라남도',address:'전라남도 순천시 승주읍 선암사길 450',location_marker_type:'entrance',lat:34.9958,lng:127.2869,short_description:'순천 조계산 자락의 천년 고찰로 유네스코 세계유산 한국의 산사 중 하나. 보물급 문화재 다수와 수령 600년 매화나무(천연기념물)로 유명하며 태고종 본산이다.',source_urls:['https://heritage.go.kr/'],data_confidence:'high',tags:['통일신라','사찰','유네스코','매화','순천']},
  {name:'여수 진남관',category:'전쟁유적',period:'조선 후기 (1599년 건립, 국보)',period_category:'조선 후기',region:'전라남도',address:'전라남도 여수시 동문로 11',location_marker_type:'exact',lat:34.7392,lng:127.7438,short_description:'이순신 장군이 전라좌수영 본영으로 삼은 자리에 세워진 국보 제304호 건물. 현존하는 국내 최대 규모 단층 목조 건축물로 남해 왜구 침략 진압의 거점이었다.',source_urls:['https://heritage.go.kr/heri/cul/culSelectDetail.do?ccbaCpno=1123403040000'],data_confidence:'high',tags:['조선후기','이순신','임진왜란','국보','전라좌수영','여수']},
  {name:'여수 이순신 광장',category:'전쟁유적',period:'현대 (임진왜란 기념)',period_category:'현대',region:'전라남도',address:'전라남도 여수시 이순신광장로 60',location_marker_type:'exact',lat:34.7378,lng:127.7447,short_description:'이순신 장군 동상과 거북선 복원 전시물이 있는 여수 구항 광장. 임진왜란 승전의 거점 전라좌수영 인근에 조성되어 해양 영웅 이순신의 업적을 기린다.',source_urls:['https://www.yeosu.go.kr/'],data_confidence:'high',tags:['현대','이순신','거북선','임진왜란','여수']},
  {name:'해남 대흥사',category:'사찰',period:'삼국시대 (426년 창건 전설, 유네스코)',period_category:'삼국',region:'전라남도',address:'전라남도 해남군 삼산면 대흥사길 400',location_marker_type:'entrance',lat:34.5269,lng:126.6168,short_description:'두륜산 자락의 천년 고찰로 유네스코 세계유산 한국의 산사 중 하나. 서산대사 유물과 13명의 대종사·대강사를 배출한 한국 불교 성지이며 임진왜란 이후 불교 중흥의 중심지였다.',source_urls:['https://heritage.go.kr/'],data_confidence:'high',tags:['삼국시대','사찰','유네스코','서산대사','해남']},
  {name:'강진 고려청자 도요지',category:'생활유적',period:'고려 (9~14세기)',period_category:'고려',region:'전라남도',address:'전라남도 강진군 대구면 청자촌길 33',location_marker_type:'exact',lat:34.5493,lng:126.7381,short_description:'고려 비색청자의 80% 이상이 생산된 사적 제68호 도요지. 사당리 일대 188개 가마터에서 세계 최고 수준의 상감청자가 제작되었다.',source_urls:['https://heritage.go.kr/'],data_confidence:'high',tags:['고려','청자','도자기','가마','유네스코후보','강진']},
  {name:'담양 소쇄원',category:'생활유적',period:'조선 전기 (1530년대 조성)',period_category:'조선 전기',region:'전라남도',address:'전라남도 담양군 남면 소쇄원길 17',location_marker_type:'entrance',lat:35.2119,lng:126.9194,short_description:'양산보가 조성한 조선시대 대표 민간 원림으로 명승 제40호. 광풍각·제월당 등 자연 지형을 살린 전통 조경의 걸작이며 호남 사림 문화와 가사문학의 산실이다.',source_urls:['https://www.damyang.go.kr/'],data_confidence:'high',tags:['조선전기','정원','원림','양산보','가사문학','담양']},
  {name:'광주 5·18 민주광장',category:'독립운동유적',period:'현대 (1980년 5·18 민주화운동)',period_category:'현대',region:'전라남도',address:'광주광역시 동구 금남로 1가 1',location_marker_type:'exact',lat:35.1478,lng:126.9175,short_description:'1980년 5·18 민주화운동의 중심지인 구 전남도청 앞 광장. 유네스코 세계기록유산에 등재된 5·18 관련 기록물의 역사 현장이자 한국 민주주의의 성지다.',source_urls:['https://www.518.go.kr/'],data_confidence:'high',tags:['현대','5.18민주화운동','민주','광주','유네스코기록유산']},
  {name:'통영 한산도 제승당',category:'전쟁유적',period:'조선 후기 (1593년, 삼도수군통제영)',period_category:'조선 후기',region:'경상남도',address:'경상남도 통영시 한산면 한산일주로 70',location_marker_type:'entrance',lat:34.8017,lng:128.5004,short_description:'이순신 장군이 삼도수군통제영을 설치하고 한산대첩을 지휘한 전략 본부. 장군이 직접 지은 운주당 터에 제승당이 복원되었으며 한산섬 달 밝은 밤에 시조를 지은 역사의 현장이다.',source_urls:['https://www.tongyeong.go.kr/'],data_confidence:'high',tags:['조선후기','이순신','한산대첩','임진왜란','통영']},
  {name:'고성 공룡발자국 화석지',category:'생활유적',period:'선사시대 (약 1억 년 전 백악기)',period_category:'선사',region:'경상남도',address:'경상남도 고성군 하이면 덕명리 산30',location_marker_type:'exact',lat:34.9558,lng:128.1244,short_description:'천연기념물 제411호로 세계 3대 공룡 발자국 화석지 중 하나. 약 1억 년 전 백악기 공룡 발자국 5,000여 점이 해안 암반에 보존되어 있다.',source_urls:['https://www.goseong.go.kr/'],data_confidence:'high',tags:['선사시대','공룡','화석','백악기','고성']},
  {name:'남해 충렬사',category:'전쟁유적',period:'조선 후기 (1598년, 이순신 순국지)',period_category:'조선 후기',region:'경상남도',address:'경상남도 남해군 설천면 노량리 238',location_marker_type:'exact',lat:34.9028,lng:127.8867,short_description:'노량해전에서 순국한 이순신 장군의 유해가 처음 안치된 사적지. 사적 제233호로 지정되어 있으며 임진왜란 마지막 해전 현장인 노량 앞바다를 바라본다.',source_urls:['https://www.namhae.go.kr/'],data_confidence:'high',tags:['조선후기','이순신','노량해전','순국','임진왜란','남해']}
];

const catCode={생활유적:'SAE',사찰:'SAJ',산성:'SAN',독립운동유적:'DOK',전쟁유적:'JEN'};
const subCat={생활유적:'고택/서원/향교',사찰:'사찰/불교유산',산성:'성곽/산성',독립운동유적:'독립운동/근현대',전쟁유적:'성곽/산성'};
const regionCode={'전라북도':'JB','전라남도':'JN','경상남도':'GN','광주광역시':'JN'};

const existing=JSON.parse(fs.readFileSync(base+'data/heritage_all.json','utf8'));
const existingNames=new Set(existing.map(d=>d.name));
const counters={};
existing.forEach(d=>{
  const p=d.place_id.split('-');
  const k=p[1]+'-'+p[2];
  const n=parseInt(p[3]);
  if(!counters[k]||counters[k]<n)counters[k]=n;
});

const now=new Date().toISOString().slice(0,19);
const newItems=raw.filter(d=>!existingNames.has(d.name)).map(d=>{
  const rc=regionCode[d.region]||'JB';
  const cc=catCode[d.category]||'ETC';
  const k=rc+'-'+cc;
  counters[k]=(counters[k]||0)+1;
  const placeId='GK-'+rc+'-'+cc+'-'+String(counters[k]).padStart(4,'0');
  return {
    ...d,
    place_id:placeId,
    category_main:'역사',
    category_sub:subCat[d.category]||'비석/기념유산',
    category_detail:d.short_description.split('.')[0],
    confidence:d.data_confidence==='high'?'high':'low',
    confidence_reason:'',
    needs_geocoding:false,
    status:{map_displayable:true,data_status:'complete',map_status:'waiting',content_status:'waiting',last_updated:now},
    content_link:{has_video:false,youtube_url:'',instagram_url:'',tiktok_url:'',xiaohongshu_url:'',video_status:'없음'}
  };
});

const merged=[...existing,...newItems];
fs.writeFileSync(base+'data/heritage_all.json',JSON.stringify(merged,null,2),'utf8');
const ready=merged.filter(d=>d.status.map_displayable&&d.lat&&d.lng);
fs.writeFileSync(base+'map/markers_ready.json',JSON.stringify({total:ready.length,markers:ready},null,2),'utf8');

const rawLog=JSON.parse(fs.readFileSync(base+'data/raw/search_results.json','utf8'));
rawLog.results.push({run_time:now,mode:'A_MODE_REALTIME_SEARCH',region:'전라·경남',collected:newItems.length,total:merged.length});
fs.writeFileSync(base+'data/raw/search_results.json',JSON.stringify(rawLog,null,2),'utf8');
const log=JSON.parse(fs.readFileSync(base+'logs/automation_log.json','utf8'));
log.runs.push({time:now,mode:'A',region:'전라·경남',new_collected:newItems.length,total:merged.length,markers_ready:ready.length,errors:0});
fs.writeFileSync(base+'logs/automation_log.json',JSON.stringify(log,null,2),'utf8');

console.log('A모드 4회차 — 전라·경남 완료');
console.log('새로 수집: '+newItems.length+'개');
console.log('누적 장소: '+merged.length+'개');
console.log('1차 목표(300개): '+(merged.length/300*100).toFixed(1)+'%');
newItems.forEach(d=>console.log('  + ['+d.place_id+'] '+d.name));
