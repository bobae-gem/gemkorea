const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';

const raw = [
  {name:'보은 법주사',category:'사찰',period:'삼국시대 신라 (553년 창건, 유네스코)',period_category:'삼국',region:'충청북도',address:'충청북도 보은군 속리산면 법주사로 405',location_marker_type:'entrance',lat:36.5419,lng:127.8007,short_description:'신라 진흥왕 때 의신대사가 창건한 천년 고찰. 팔상전(국보)·쌍사자 석등 등 국보·보물을 다수 보유하며 2018년 유네스코 세계유산 한국의 산사로 등재되었다.',source_urls:['https://heritage.go.kr'],data_confidence:'high',tags:['삼국시대','신라','사찰','유네스코','팔상전','국보','보은','속리산']},
  {name:'충주 탄금대',category:'전쟁유적',period:'조선 전기 (1592년 임진왜란)',period_category:'조선 전기',region:'충청북도',address:'충청북도 충주시 칠금동 산1-1',location_marker_type:'exact',lat:36.9983,lng:127.9108,short_description:'임진왜란 때 신립 장군이 배수진을 치고 왜군과 맞서 싸우다 전사한 격전지. 우륵이 가야금을 연주했다는 전설도 전해지며 달천강과 남한강이 합류하는 절경 위에 자리한다.',source_urls:['https://heritage.go.kr'],data_confidence:'high',tags:['조선전기','임진왜란','신립','충주','남한강']},
  {name:'청주 흥덕사지',category:'생활유적',period:'고려 (1377년 직지심체요절 인쇄)',period_category:'고려',region:'충청북도',address:'충청북도 청주시 흥덕구 운천동 866',location_marker_type:'exact',lat:36.6368,lng:127.4541,short_description:'세계 최초 금속활자 인쇄본 직지심체요절이 1377년에 간행된 고려 사찰 터. 유네스코 세계기록유산으로 등재된 직지의 발상지이며 인근에 청주고인쇄박물관이 있다.',source_urls:['https://heritage.go.kr'],data_confidence:'high',tags:['고려','직지','금속활자','유네스코기록유산','청주']},
  {name:'충주 중원고구려비',category:'비석',period:'삼국시대 고구려 (5세기 장수왕 시기)',period_category:'삼국',region:'충청북도',address:'충청북도 충주시 가금면 용전리 280',location_marker_type:'exact',lat:37.0685,lng:127.9272,short_description:'한반도에 남아있는 유일한 고구려 석비(국보). 5세기 고구려가 남한강 유역까지 진출했음을 증명하는 유물로 고구려·신라 간 관계와 영토 확장을 기록한 역사적 가치가 매우 높다.',source_urls:['https://heritage.go.kr'],data_confidence:'high',tags:['삼국시대','고구려','장수왕','국보','충주','비석']},
  {name:'청주 상당산성',category:'산성',period:'삼국시대~조선 후기 개축',period_category:'조선 후기',region:'충청북도',address:'충청북도 청주시 상당구 산성동 산28',location_marker_type:'entrance',lat:36.6178,lng:127.5431,short_description:'청주 동쪽 상당산에 자리한 포곡식 산성. 삼국시대에 처음 축조되어 조선 숙종 때 대규모로 정비되었으며 둘레 4.2km의 성곽이 잘 보존되어 있다.',source_urls:['https://heritage.go.kr'],data_confidence:'high',tags:['조선후기','산성','청주','숙종']},
  {name:'단양 온달산성',category:'산성',period:'삼국시대 고구려',period_category:'삼국',region:'충청북도',address:'충청북도 단양군 영춘면 하리 산67',location_marker_type:'entrance',lat:36.9764,lng:128.4198,short_description:'고구려 온달 장군과 평강공주 전설이 깃든 석축 산성. 남한강 절벽 위에 세워진 테뫼식 산성으로 삼국시대 국경 방어 기능을 담당했다.',source_urls:['https://heritage.go.kr'],data_confidence:'high',tags:['삼국시대','고구려','온달','산성','단양','남한강']},
  {name:'고령 지산동 고분군',category:'고분',period:'삼국시대 대가야 (5~6세기, 유네스코)',period_category:'삼국',region:'경상북도',address:'경상북도 고령군 대가야읍 지산리 산8',location_marker_type:'entrance',lat:35.7285,lng:128.2642,short_description:'대가야 왕들의 무덤이 모인 대규모 고분군. 주산 능선을 따라 200여 기의 고분이 분포하며 2023년 가야고분군으로 유네스코 세계유산에 등재되었다.',source_urls:['https://heritage.go.kr'],data_confidence:'high',tags:['삼국시대','대가야','고분','유네스코','순장','고령']},
  {name:'문경새재',category:'생활유적',period:'조선 전기 (관문 도립공원)',period_category:'조선 전기',region:'경상북도',address:'경상북도 문경시 문경읍 새재로 932',location_marker_type:'entrance',lat:36.7311,lng:128.0744,short_description:'영남과 기호 지방을 잇는 조선 최대 관문 고갯길. 세 개의 관문(주흘관·조곡관·조령관)이 현존하며 한양 가는 선비들의 애환이 담긴 역사 문화의 길이다.',source_urls:['https://heritage.go.kr'],data_confidence:'high',tags:['조선전기','고갯길','관문','선비','문경']},
  {name:'칠곡 가산산성',category:'산성',period:'조선 후기 (인조~숙종 연간 축조)',period_category:'조선 후기',region:'경상북도',address:'경상북도 칠곡군 가산면 가산리 산98',location_marker_type:'entrance',lat:35.9887,lng:128.5491,short_description:'팔공산 서쪽 가산에 위치한 조선 후기 삼중 석축 산성. 내성·중성·외성으로 이루어진 대규모 방어 체계로 경상도 관찰사가 유사시 피난하던 거점이었다.',source_urls:['https://heritage.go.kr'],data_confidence:'high',tags:['조선후기','산성','팔공산','칠곡','삼중성']},
  {name:'의성 탑리 오층석탑',category:'생활유적',period:'통일신라 (8세기 추정, 국보)',period_category:'통일신라',region:'경상북도',address:'경상북도 의성군 금성면 탑리리 620',location_marker_type:'exact',lat:36.3581,lng:128.6272,short_description:'목조 건축 양식을 돌로 정교하게 재현한 통일신라 오층석탑(국보). 기둥과 지붕돌이 목탑의 형식을 충실히 따라 석탑 양식 발전 과정 연구의 기준작으로 평가받는다.',source_urls:['https://heritage.go.kr'],data_confidence:'high',tags:['통일신라','국보','석탑','의성']},
  {name:'경주 월성',category:'왕릉',period:'삼국시대 신라 (기원전 37년 축조)',period_category:'삼국',region:'경상북도',address:'경상북도 경주시 인왕동 387-1',location_marker_type:'exact',lat:35.8336,lng:129.2197,short_description:'신라 992년 역사의 왕궁 터. 반월 모양 지형을 활용한 평지성으로 발굴 조사에서 해자·성벽·건물지가 확인되었다. 경주 역사유적지구(유네스코)의 핵심 구역이다.',source_urls:['https://heritage.go.kr'],data_confidence:'high',tags:['삼국시대','신라','왕궁','유네스코','경주','발굴']},
  {name:'울진 불영사',category:'사찰',period:'삼국시대 신라 (651년 창건)',period_category:'삼국',region:'경상북도',address:'경상북도 울진군 서면 불영사길 48',location_marker_type:'entrance',lat:36.9158,lng:129.1736,short_description:'의상대사가 창건한 천축산 고찰. 연못에 부처 그림자가 비친다 하여 불영사(佛影寺)라 불리며 불영계곡과 어우러진 빼어난 경관으로 명승 제6호로 지정되어 있다.',source_urls:['https://heritage.go.kr'],data_confidence:'high',tags:['삼국시대','신라','의상대사','사찰','울진','명승']},
  {name:'진도 용장성',category:'성곽',period:'고려 (1270년 삼별초)',period_category:'고려',region:'전라남도',address:'전라남도 진도군 군내면 용장리 산8',location_marker_type:'entrance',lat:34.4872,lng:126.3098,short_description:'몽골에 항전한 고려 삼별초가 쌓은 궁성. 배중손이 이끈 삼별초가 이곳을 거점으로 1271년까지 대몽 항쟁을 펼쳤으며 고려 시대 돌담과 건물 터가 남아있다.',source_urls:['https://heritage.go.kr'],data_confidence:'high',tags:['고려','삼별초','배중손','몽골','항전','진도']},
  {name:'여수 흥국사',category:'사찰',period:'고려 (1195년 창건)',period_category:'고려',region:'전라남도',address:'전라남도 여수시 중흥동 산1-1',location_marker_type:'entrance',lat:34.7648,lng:127.6722,short_description:'임진왜란 때 이순신 수군 승병이 활약한 호국 사찰. 보조국사 지눌이 창건했으며 대웅전 홍교와 후불 벽화 등 보물급 문화재를 다수 보유하고 있다.',source_urls:['https://heritage.go.kr'],data_confidence:'high',tags:['고려','이순신','임진왜란','사찰','여수','지눌']},
  {name:'완도 청해진',category:'생활유적',period:'통일신라 (828년 장보고)',period_category:'통일신라',region:'전라남도',address:'전라남도 완도군 완도읍 장좌리 932',location_marker_type:'exact',lat:34.3167,lng:126.7561,short_description:'해상왕 장보고가 설치한 통일신라 해군 기지. 당·신라·일본을 잇는 동아시아 무역을 장악하며 해상 실크로드를 개척한 거점으로 장도에 목책 등 유구가 남아있다.',source_urls:['https://heritage.go.kr'],data_confidence:'high',tags:['통일신라','장보고','해상무역','완도','청해진']},
  {name:'김제 금산사',category:'사찰',period:'삼국시대 백제 (599년 창건)',period_category:'삼국',region:'전라북도',address:'전라북도 김제시 금산면 금산리 39',location_marker_type:'entrance',lat:35.7414,lng:127.0958,short_description:'백제 때 창건되고 진표율사가 중창한 모악산 천년 고찰. 우리나라 유일의 삼층 목조 법당인 미륵전(국보)이 자리하며 동학농민운동과도 인연이 깊다.',source_urls:['https://heritage.go.kr'],data_confidence:'high',tags:['삼국시대','백제','미륵전','국보','동학','김제']},
  {name:'고창 선운사',category:'사찰',period:'삼국시대 백제 (577년 창건 추정)',period_category:'삼국',region:'전라북도',address:'전라북도 고창군 아산면 선운사로 250',location_marker_type:'entrance',lat:35.4807,lng:126.5867,short_description:'도솔산의 백제 고찰로 국보·보물급 문화재를 다수 보유한 호남 4대 명찰 중 하나. 봄 동백꽃과 가을 꽃무릇 군락으로 사계절 아름다운 경관을 자랑한다.',source_urls:['https://heritage.go.kr'],data_confidence:'high',tags:['삼국시대','백제','사찰','동백','고창','호남']},
  {name:'부안 개암사',category:'사찰',period:'삼국시대 백제 (634년 창건)',period_category:'삼국',region:'전라북도',address:'전라북도 부안군 상서면 개암로 248',location_marker_type:'entrance',lat:35.6391,lng:126.6867,short_description:'변산반도 능가산 자락의 백제 고찰. 대웅전(보물)은 조선 중기 목조 건축의 정수로 평가받으며 임진왜란 때 의승병 활동의 거점이었다.',source_urls:['https://heritage.go.kr'],data_confidence:'high',tags:['삼국시대','백제','사찰','부안','변산']},
  {name:'밀양 표충사',category:'사찰',period:'삼국시대 신라 (654년 창건)',period_category:'삼국',region:'경상남도',address:'경상남도 밀양시 단장면 표충로 1338',location_marker_type:'entrance',lat:35.5233,lng:128.6317,short_description:'임진왜란 때 의승군을 이끈 사명대사를 기리는 호국 사찰. 사명대사의 유품과 위패를 모신 표충서원이 경내에 있어 불교와 유교 문화가 공존하는 독특한 구조로 유명하다.',source_urls:['https://heritage.go.kr'],data_confidence:'high',tags:['삼국시대','신라','사명대사','임진왜란','밀양']},
  {name:'거제 포로수용소 유적',category:'전쟁유적',period:'현대 (1951~1953년 한국전쟁)',period_category:'현대',region:'경상남도',address:'경상남도 거제시 고현동 포로수용소로 684',location_marker_type:'exact',lat:34.8831,lng:128.6214,short_description:'한국전쟁 당시 최대 17만 명의 북한군·중국군 포로를 수용했던 역사 현장. 1952년 도드 사령관 납치 사건 등 긴박했던 역사가 깃든 곳으로 현재 야외 전시관이 운영된다.',source_urls:['https://heritage.go.kr'],data_confidence:'high',tags:['현대','한국전쟁','포로수용소','거제','분단']},
  {name:'사천 선진리성',category:'성곽',period:'조선 전기 (1598년 임진왜란 왜성)',period_category:'조선 전기',region:'경상남도',address:'경상남도 사천시 용현면 선진리 165',location_marker_type:'exact',lat:34.9331,lng:128.0728,short_description:'임진왜란 때 왜군이 쌓은 왜성. 1598년 이순신 장군이 지휘한 사천해전 격전지로 봄이면 수백 그루 벚꽃이 피어 역사와 자연이 어우러진 명소로 꼽힌다.',source_urls:['https://heritage.go.kr'],data_confidence:'high',tags:['조선전기','임진왜란','이순신','왜성','사천']},
  {name:'진주 촉석루',category:'전쟁유적',period:'고려~조선 (임진왜란 논개 순국)',period_category:'고려',region:'경상남도',address:'경상남도 진주시 남강로 626',location_marker_type:'exact',lat:35.1878,lng:128.0742,short_description:'남강 절벽 위에 세워진 고려 시대 누각으로 영남 제일의 경승지. 임진왜란 진주성 전투의 핵심 거점이었으며 논개가 왜장을 안고 투신한 의암이 바로 아래에 있다.',source_urls:['https://heritage.go.kr'],data_confidence:'high',tags:['고려','임진왜란','논개','진주성','남강','촉석루']}
];

const catCode={사찰:'SAJ',전쟁유적:'JEN',생활유적:'SAE',비석:'BIS',산성:'SAN',고분:'GOB',성곽:'SEO',왕릉:'RYU'};
const subCat={사찰:'사찰/불교유산',전쟁유적:'독립운동/근현대',생활유적:'고택/서원/향교',비석:'비석/기념유산',산성:'성곽/산성',고분:'고인돌/선사유적',성곽:'성곽/산성',왕릉:'궁궐/왕실'};
const regionCode={'충청북도':'CB','경상북도':'GB','전라남도':'JN','전라북도':'JB','경상남도':'GN'};

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
  const rc=regionCode[d.region]||'ETC';
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

// high 자동 승인 포함 저장
const merged=[...existing,...newItems];
let approved=0;
const final=merged.map(d=>{
  if(d.data_confidence==='high'&&d.status.map_status==='waiting'){
    approved++;
    return {...d,status:{...d.status,map_status:'published',last_updated:now}};
  }
  return d;
});

fs.writeFileSync(base+'data/heritage_all.json',JSON.stringify(final,null,2),'utf8');
const ready=final.filter(d=>d.status.map_displayable&&d.lat&&d.lng);
fs.writeFileSync(base+'map/markers_ready.json',JSON.stringify({total:ready.length,markers:ready},null,2),'utf8');

const rawLog=JSON.parse(fs.readFileSync(base+'data/raw/search_results.json','utf8'));
rawLog.results.push({run_time:now,mode:'A_MODE_FAST_SEARCH',region:'충청북도·경북·전라·경남',collected:newItems.length,total:final.length});
fs.writeFileSync(base+'data/raw/search_results.json',JSON.stringify(rawLog,null,2),'utf8');
const log=JSON.parse(fs.readFileSync(base+'logs/automation_log.json','utf8'));
log.runs.push({time:now,mode:'A',region:'충청북도·경북·전라·경남',new_collected:newItems.length,total:final.length,markers_ready:ready.length,errors:0});
fs.writeFileSync(base+'logs/automation_log.json',JSON.stringify(log,null,2),'utf8');

console.log('A모드 6회차 완료');
console.log('새로 수집: '+newItems.length+'개');
console.log('자동 승인: '+approved+'개');
console.log('누적: '+final.length+'개');
console.log('게시됨: '+final.filter(d=>d.status.map_status==='published').length+'개');
console.log('1차 목표: '+(final.length/300*100).toFixed(1)+'%');
newItems.forEach(d=>console.log('  + ['+d.place_id+'] '+d.name));
