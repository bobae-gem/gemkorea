const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';

const raw = [
  {name:'경주 계림',category:'생활유적',period:'삼국시대 신라 (기원전 57년 김알지 탄생 설화)',period_category:'삼국',region:'경상북도',address:'경상북도 경주시 교동 1',location_marker_type:'exact',lat:35.8350,lng:129.2192,short_description:'신라 김씨 왕조 시조 김알지 탄생 설화가 깃든 숲. 65년 탈해왕 때 금궤에서 아이가 발견되어 김씨 성을 받았다는 전설의 현장. 경주 반월성과 첨성대 사이에 위치한 사적 제19호.',source_urls:['https://encykorea.aks.ac.kr/Article/E0002821'],data_confidence:'high',tags:['김알지','신라','김씨시조','설화','사적','경주']},
  {name:'경주 나정',category:'생활유적',period:'삼국시대 신라 (기원전 57년 박혁거세 건국 설화)',period_category:'삼국',region:'경상북도',address:'경상북도 경주시 탑동 700-1',location_marker_type:'exact',lat:35.8195,lng:129.2102,short_description:'신라 시조 박혁거세 탄생 설화가 전해지는 우물 터. 흰 말이 무릎 꿇고 있던 곳에서 알이 발견되어 혁거세가 태어났다는 건국 설화의 현장. 팔각건물지·우물지 등 발굴 유적 보존.',source_urls:['https://ko.wikipedia.org/wiki/%EA%B2%BD%EC%A3%BC_%EB%82%98%EC%A0%95'],data_confidence:'high',tags:['박혁거세','신라건국','설화','사적','경주','우물']},
  {name:'포항 오어사',category:'사찰',period:'삼국시대 신라 (579~632년 창건)',period_category:'삼국',region:'경상북도',address:'경상북도 포항시 남구 오천읍 항사리 239',location_marker_type:'entrance',lat:35.9560,lng:129.3720,short_description:'신라 진평왕 때 창건한 사찰. 원효대사와 혜공선사의 법력 시합으로 물고기를 살렸다는 설화에서 오어사로 이름 붙여졌다. 보물 동종과 대웅전을 보유하고 있다.',source_urls:['https://encykorea.aks.ac.kr/Article/E0038405'],data_confidence:'high',tags:['원효대사','신라','사찰','보물','운제산','포항']},
  {name:'목포 근대역사관',category:'독립운동유적',period:'근대 (1900년 구 일본영사관)',period_category:'근대',region:'전라남도',address:'전라남도 목포시 영산로29번길 6',location_marker_type:'exact',lat:34.7940,lng:126.3857,short_description:'1900년 준공된 구 일본영사관 건물을 활용한 근대역사관. 일제강점기 목포의 수탈 역사를 간직한 곳으로 2014년 개관 후 목포 개항부터 근대까지 7개 주제로 전시한다.',source_urls:['https://ko.wikipedia.org/wiki/%EB%AA%A9%ED%8F%AC%EA%B7%BC%EB%8C%80%EC%97%AD%EC%82%AC%EA%B4%80'],data_confidence:'high',tags:['일제강점기','근대건축','개항','수탈역사','목포','전남']},
  {name:'완도 장보고기념관',category:'생활유적',period:'통일신라 (828년 청해진 설치)',period_category:'통일신라',region:'전라남도',address:'전라남도 완도군 완도읍 청해진로 1455',location_marker_type:'exact',lat:34.3040,lng:126.7540,short_description:'해상왕 장보고의 업적을 기리는 기념관. 828년 청해진을 설치해 해적을 소탕하고 한·중·일 해상무역을 장악한 장보고의 역사를 전시한다.',source_urls:['https://ko.wikipedia.org/wiki/%EC%9E%A5%EB%B3%B4%EA%B3%A0%EA%B8%B0%EB%85%90%EA%B4%80'],data_confidence:'high',tags:['장보고','청해진','해상왕','통일신라','해양역사','완도']},
  {name:'강진 다산초당',category:'생활유적',period:'조선 후기 (1801~1818년 유배기)',period_category:'조선 후기',region:'전라남도',address:'전라남도 강진군 도암면 다산초당길 68-35',location_marker_type:'exact',lat:34.5745,lng:126.8045,short_description:'다산 정약용이 18년 유배 중 11년을 보내며 목민심서·경세유표 등 500여 권을 집필한 곳. 만덕산 중턱에 위치한 사적 제107호로 조선 실학의 산실로 평가받는다.',source_urls:['https://encykorea.aks.ac.kr/Article/E0013467'],data_confidence:'high',tags:['정약용','다산','실학','유배지','목민심서','사적','강진']},
  {name:'보성 태백산맥문학관',category:'생활유적',period:'현대 (2008년 개관, 소설 배경 해방~한국전쟁)',period_category:'현대',region:'전라남도',address:'전라남도 보성군 벌교읍 홍암로 89-19',location_marker_type:'exact',lat:34.8490,lng:127.3460,short_description:'조정래 소설 태백산맥의 배경지 벌교에 조성된 문학관. 분단과 한국전쟁을 담은 대하소설 자료 621점 전시. 단일 문학작품 전용관으로 국내 최대 규모다.',source_urls:['https://www.boseong.go.kr/tbsm'],data_confidence:'high',tags:['조정래','태백산맥','한국전쟁','분단','벌교','문학관','보성']},
  {name:'제주 항파두리 항몽유적',category:'전쟁유적',period:'고려 (1270~1273년 삼별초 항쟁)',period_category:'고려',region:'제주특별자치도',address:'제주특별자치도 제주시 애월읍 고성리 1126',location_marker_type:'exact',lat:33.4560,lng:126.3490,short_description:'고려 삼별초가 몽골에 끝까지 저항하다 최후를 맞은 성터. 1270년 배중손이 이끈 삼별초가 진도에서 제주로 이동해 항파두리성을 쌓고 3년간 항전한 사적.',source_urls:['https://encykorea.aks.ac.kr/Article/E0051473'],data_confidence:'high',tags:['삼별초','항몽','고려','몽골','성곽','사적','제주']},
  {name:'제주 추사관',category:'생활유적',period:'조선 후기 (1840~1848년 유배기)',period_category:'조선 후기',region:'제주특별자치도',address:'제주특별자치도 서귀포시 대정읍 추사로 44',location_marker_type:'exact',lat:33.2370,lng:126.2590,short_description:'추사 김정희가 9년간 유배 생활을 하며 추사체를 완성하고 세한도를 그린 유배지. 대정현 강도순 집터에 유배지를 복원하고 2010년 추사관을 개관했다.',source_urls:['https://www.visitjeju.net/kr/detail/view?contentsid=CNTS_000000000000970'],data_confidence:'high',tags:['김정희','추사체','세한도','유배지','서예','조선','대정','제주']},
  {name:'논산 돈암서원',category:'서원',period:'조선 후기 (1634년 창건, 유네스코)',period_category:'조선 후기',region:'충청남도',address:'충청남도 논산시 연산면 임3길 26-14',location_marker_type:'exact',lat:36.1530,lng:127.1120,short_description:'사계 김장생의 학덕을 기리기 위해 1634년 건립된 서원. 예학의 본산으로 송준길·송시열 등을 배출했으며 응도당은 전국 서원 건물 중 최대 규모. 2019년 유네스코 세계문화유산 등재.',source_urls:['https://encykorea.aks.ac.kr/Article/E0013025'],data_confidence:'high',tags:['김장생','유네스코','세계문화유산','예학','서원','조선','논산']},
  {name:'서천 한산모시관',category:'생활유적',period:'삼국시대 백제 (백제시대 기원)',period_category:'삼국',region:'충청남도',address:'충청남도 서천군 한산면 충절로 1089',location_marker_type:'exact',lat:36.1870,lng:126.7450,short_description:'1500년 역사의 한산모시 전통을 보존·전시하는 문화관. 백제시대 시작된 모시 문화 계승. 모시짜기 기술은 중요무형문화재 제14호이자 2011년 유네스코 인류무형문화유산이다.',source_urls:['https://encykorea.aks.ac.kr/Article/E0061679'],data_confidence:'high',tags:['한산모시','유네스코','무형문화유산','백제','전통직물','서천']},
  {name:'수원 화령전',category:'생활유적',period:'조선 후기 (1801년 정조 어진 봉안)',period_category:'조선 후기',region:'경기도',address:'경기도 수원시 팔달구 신풍로23번길 34',location_marker_type:'exact',lat:37.2793,lng:127.0135,short_description:'정조대왕의 어진을 봉안하고 제사를 지내기 위해 1801년 순조가 건립한 영전. 수원화성 내 위치하며 정전 운한각은 보물로 지정. 사적으로 지정된 조선 왕실 영전.',source_urls:['https://heritage.go.kr/'],data_confidence:'high',tags:['정조','어진','영전','순조','수원화성','보물','사적']},
  {name:'파주 용미리 마애이불입상',category:'생활유적',period:'고려 (10~11세기 추정, 보물)',period_category:'고려',region:'경기도',address:'경기도 파주시 광탄면 혜음로 742-28',location_marker_type:'exact',lat:37.7990,lng:126.8360,short_description:'고려시대 천연 암벽에 조각된 두 구의 거대 불입상. 머리 위에 돌갓을 얹은 독특한 토속적 양식이 특징. 보물 제93호로 지정된 고려 불교 조각의 대표작이다.',source_urls:['https://encykorea.aks.ac.kr/Article/E0059609'],data_confidence:'medium',tags:['마애불','고려','보물','암각불','불교','파주','경기']},
  {name:'고양 행주대첩비',category:'전쟁유적',period:'조선 전기 (1593년 행주대첩 기념)',period_category:'조선 전기',region:'경기도',address:'경기도 고양시 덕양구 행주내동 산26-1',location_marker_type:'exact',lat:37.6120,lng:126.8300,short_description:'1593년 권율 장군이 2,300명으로 왜군 3만여 명을 격퇴한 행주대첩을 기리는 비. 임진왜란 3대 대첩 중 하나인 행주대첩 현장 행주산성 내에 위치한 경기도 유형문화재.',source_urls:['https://gjicp.ggcf.kr/'],data_confidence:'high',tags:['행주대첩','권율','임진왜란','행주산성','3대대첩','경기','고양']}
];

const catCode={생활유적:'SAE',사찰:'SAJ',독립운동유적:'DOK',전쟁유적:'JEN',서원:'SWO'};
const subCat={생활유적:'고택/서원/향교',사찰:'사찰/불교유산',독립운동유적:'독립운동/근현대',전쟁유적:'독립운동/근현대',서원:'고택/서원/향교'};
const regionCode={'경상북도':'GB','전라남도':'JN','충청남도':'CN','제주특별자치도':'JJ','경기도':'GG'};

const existing=JSON.parse(fs.readFileSync(base+'data/heritage_all.json','utf8'));
const existingNames=new Set(existing.map(d=>d.name));
const counters={};
existing.forEach(d=>{const p=d.place_id.split('-');const k=p[1]+'-'+p[2];const n=parseInt(p[3]);if(!counters[k]||counters[k]<n)counters[k]=n;});

const now=new Date().toISOString().slice(0,19);
const newItems=raw.filter(d=>!existingNames.has(d.name)).map(d=>{
  const rc=regionCode[d.region.split(' ')[0]]||'ETC';
  const cc=catCode[d.category]||'ETC';
  const k=rc+'-'+cc;
  counters[k]=(counters[k]||0)+1;
  const placeId='GK-'+rc+'-'+cc+'-'+String(counters[k]).padStart(4,'0');
  return {...d,place_id:placeId,category_main:'역사',category_sub:subCat[d.category]||'비석/기념유산',category_detail:d.short_description.split('.')[0],confidence:d.data_confidence==='high'?'high':'low',confidence_reason:'',needs_geocoding:false,
    status:{map_displayable:true,data_status:'complete',map_status:'waiting',content_status:'waiting',last_updated:now},
    content_link:{has_video:false,youtube_url:'',instagram_url:'',tiktok_url:'',xiaohongshu_url:'',video_status:'없음'}};
});

let approved=0;
const merged=[...existing,...newItems];
const final=merged.map(d=>{
  if(d.data_confidence==='high'&&d.status.map_status==='waiting'){approved++;return{...d,status:{...d.status,map_status:'published',last_updated:now}};}
  return d;
});

fs.writeFileSync(base+'data/heritage_all.json',JSON.stringify(final,null,2),'utf8');
const ready=final.filter(d=>d.status.map_displayable&&d.lat&&d.lng);
fs.writeFileSync(base+'map/markers_ready.json',JSON.stringify({total:ready.length,markers:ready},null,2),'utf8');

const rawLog=JSON.parse(fs.readFileSync(base+'data/raw/search_results.json','utf8'));
rawLog.results.push({run_time:now,mode:'A_MODE_FAST_SEARCH',region:'경상·전라·충남·제주·경기',collected:newItems.length,total:final.length});
fs.writeFileSync(base+'data/raw/search_results.json',JSON.stringify(rawLog,null,2),'utf8');
const log=JSON.parse(fs.readFileSync(base+'logs/automation_log.json','utf8'));
log.runs.push({time:now,mode:'A',region:'경상·전라·충남·제주·경기',new_collected:newItems.length,approved,total:final.length});
fs.writeFileSync(base+'logs/automation_log.json',JSON.stringify(log,null,2),'utf8');

console.log('A+C 완료');
console.log('[A] 새로 수집: '+newItems.length+'개 / 승인: '+approved+'개');
console.log('누적: '+final.length+'개 / 게시됨: '+final.filter(d=>d.status.map_status==='published').length+'개');
console.log('1차 목표: '+(final.length/300*100).toFixed(1)+'%');
newItems.forEach(d=>console.log('  + ['+d.place_id+'] '+d.name));
