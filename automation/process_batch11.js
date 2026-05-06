const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';

const raw = [
  {name:'남양주 봉선사',category:'사찰',period:'조선 전기 (1469년 정희왕후 중창)',period_category:'조선 전기',region:'경기도',address:'경기도 남양주시 진접읍 봉선사길 32',location_marker_type:'entrance',lat:37.74722,lng:127.18333,short_description:'1469년 정희왕후가 세조의 능침사찰로 중창한 사찰. 봉선은 선왕을 받든다는 뜻으로 왕실 원찰로 조선 왕조와 깊은 인연을 맺었다. 광릉 인근 운악산 자락에 위치한다.',source_urls:['https://en.wikipedia.org/wiki/Bongseonsa'],data_confidence:'high',tags:['사찰','왕실원찰','조선전기','남양주','경기','광릉']},
  {name:'가평 현등사',category:'사찰',period:'통일신라 (540년 창건)',period_category:'통일신라',region:'경기도',address:'경기도 가평군 조종면 현등사길 34',location_marker_type:'entrance',lat:37.87056,lng:127.33083,short_description:'540년 인도 승려가 창건하고 1210년 보조국사 지눌이 중건한 사찰. 밤중에 버려진 절터에서 빛나는 등을 발견해 현등사라 이름 붙였다는 전설이 있다. 운악산 산중에 자리한다.',source_urls:['https://ko.wikipedia.org/wiki/%ED%98%84%EB%93%B1%EC%82%AC'],data_confidence:'high',tags:['사찰','통일신라','고려','가평','경기','운악산','지눌']},
  {name:'안성 청룡사',category:'사찰',period:'고려 (1265년 창건)',period_category:'고려',region:'경기도',address:'경기도 안성시 서운면 청룡길 140',location_marker_type:'entrance',lat:37.01,lng:127.21,short_description:'1265년 명본대사가 창건하고 1364년 나옹왕사가 중창한 서운산 고찰. 조선 인조의 셋째아들 인평대군 원찰로 보물급 문화재를 다수 보유하고 있다.',source_urls:['https://encykorea.aks.ac.kr/Article/E0056413'],data_confidence:'medium',tags:['사찰','고려','조선','안성','경기','서운산','나옹왕사']},
  {name:'이천 영월암',category:'사찰',period:'통일신라 (의상대사 창건)',period_category:'통일신라',region:'경기도',address:'경기도 이천시 관고동 438',location_marker_type:'exact',lat:37.28139,lng:127.41556,short_description:'신라 의상대사가 창건했다 전하는 설봉산 정상 부근의 사찰. 보물 제822호 마애여래입상 등 주요 문화재를 품고 있는 이천 천년 기도처다.',source_urls:['https://ko.wikipedia.org/wiki/%EC%9D%B4%EC%B2%9C_%EC%98%81%EC%9B%94%EC%95%94'],data_confidence:'high',tags:['사찰','통일신라','이천','경기','설봉산','마애여래입상','보물']},
  {name:'부여 고란사',category:'사찰',period:'삼국시대 백제 (말기 창건 추정)',period_category:'삼국',region:'충청남도',address:'충청남도 부여군 부여읍 부소산길 1-25',location_marker_type:'exact',lat:36.174,lng:126.913,short_description:'백제 말기 창건으로 추정되는 부소산 백마강변 절벽 아래 사찰. 고려시대 삼천궁녀를 위로하기 위해 중창했으며 희귀식물 고란초와 약수가 유명하다.',source_urls:['https://encykorea.aks.ac.kr/Article/E0003413'],data_confidence:'medium',tags:['사찰','백제','고려','부여','충남','부소산','백마강','고란초','낙화암']},
  {name:'예산 수덕사',category:'사찰',period:'삼국시대 백제 (창건, 국보 대웅전)',period_category:'삼국',region:'충청남도',address:'충청남도 예산군 덕산면 수덕사안길 79',location_marker_type:'entrance',lat:36.6633,lng:126.6223,short_description:'백제 시대 창건으로 전해지는 덕숭산 명찰. 대웅전(국보)은 1308년 건축된 현존 목조건물 중 가장 오래된 것 중 하나다. 근대 선불교 중흥의 성지이자 한국 선종의 중심 도량이다.',source_urls:['https://en.wikipedia.org/wiki/Sudeoksa'],data_confidence:'high',tags:['사찰','백제','고려','예산','충남','덕숭산','선종','국보','대웅전']},
  {name:'홍성 홍주읍성',category:'성곽',period:'고려~조선 (1895년 홍주의병 현장)',period_category:'고려',region:'충청남도',address:'충청남도 홍성군 홍성읍 오관리',location_marker_type:'entrance',lat:36.59917,lng:126.65972,short_description:'고려시대 이전부터 존재한 홍주 읍성으로 조선 문종 때 개축했다. 1895년 홍주의병 항쟁의 현장으로 조양문이 현존한다.',source_urls:['https://ko.wikipedia.org/wiki/%ED%99%8D%EC%84%B1_%ED%99%8D%EC%A3%BC%EC%9D%8D%EC%84%B1'],data_confidence:'high',tags:['성곽','고려','조선','홍성','충남','홍주의병','조양문','사적']},
  {name:'청양 장곡사',category:'사찰',period:'통일신라 (850년 창건)',period_category:'통일신라',region:'충청남도',address:'충청남도 청양군 대치면 장곡리 241',location_marker_type:'entrance',lat:36.449,lng:126.849,short_description:'850년 보조선사가 칠갑산에 창건한 고찰. 상·하 두 대웅전이 나란히 있는 독특한 가람 배치로 유명하며 철조약사여래좌상(국보)과 상·하 대웅전(보물)이 있다.',source_urls:['https://encykorea.aks.ac.kr/Article/E0058844'],data_confidence:'medium',tags:['사찰','통일신라','청양','충남','칠갑산','국보','보물','철조약사여래']},
  {name:'공주 마곡사',category:'사찰',period:'삼국시대 백제 (640년 창건, 유네스코)',period_category:'삼국',region:'충청남도',address:'충청남도 공주시 사곡면 마곡사로 966',location_marker_type:'entrance',lat:36.55889,lng:127.01222,short_description:'640년 자장율사 창건으로 전하는 태화산 사찰. 2018년 유네스코 세계유산 한국의 산사로 등재됐다. 백범 김구가 명성황후 시해 후 은거한 곳으로도 유명하다.',source_urls:['https://en.wikipedia.org/wiki/Magoksa'],data_confidence:'high',tags:['사찰','백제','고려','공주','충남','태화산','유네스코','세계유산','김구']},
  {name:'담양 면앙정',category:'생활유적',period:'조선 전기 (1533년 송순 창건)',period_category:'조선 전기',region:'전라남도',address:'전라남도 담양군 봉산면 제월리',location_marker_type:'exact',lat:35.28444,lng:126.96056,short_description:'1533년 송순이 제월봉에 지은 정자. 면앙정가를 비롯한 호남 가사문학의 산실로 정철·임제 등 당대 명사들이 모여 시문을 나누었다. 호남 가사문학의 근원이자 대표 유적이다.',source_urls:['https://ko.wikipedia.org/wiki/%EB%A9%B4%EC%95%99%EC%A0%95'],data_confidence:'high',tags:['정자','가사문학','조선전기','담양','전남','송순','호남문학']},
  {name:'진안 마이산 탑사',category:'사찰',period:'조선 후기 (19세기 말 이갑룡 조성)',period_category:'조선 후기',region:'전라북도',address:'전북특별자치도 진안군 마령면 마이산남로 367',location_marker_type:'exact',lat:35.7584,lng:127.4112,short_description:'19세기 말 이갑룡 처사가 30년에 걸쳐 손으로 쌓은 108개 돌탑군이 있는 사찰. 말의 귀를 닮은 마이산 두 봉우리 사이 계곡에 위치하며 신비로운 자연 돌탑으로 유명하다.',source_urls:['https://en.wikipedia.org/wiki/Tapsa'],data_confidence:'high',tags:['사찰','조선후기','진안','전북','마이산','돌탑','이갑룡','도립공원']},
  {name:'고흥 능가사',category:'사찰',period:'통일신라 (419년 창건)',period_category:'통일신라',region:'전라남도',address:'전라남도 고흥군 점암면 팔봉길 21',location_marker_type:'entrance',lat:34.655,lng:127.296,short_description:'419년 아도화상이 창건한 팔영산 고찰. 1644년 능가사로 개칭됐으며 보물 동종과 대웅전 등 조선시대 건축 문화재가 보존되어 있다.',source_urls:['https://ko.wikipedia.org/wiki/%EB%8A%A5%EA%B0%80%EC%82%AC'],data_confidence:'medium',tags:['사찰','통일신라','조선','고흥','전남','팔영산','아도화상','동종','보물']},
  {name:'밀양 영남루',category:'생활유적',period:'고려 (1365년 중건, 국보)',period_category:'고려',region:'경상남도',address:'경상남도 밀양시 중앙로 324',location_marker_type:'exact',lat:35.4917,lng:128.7556,short_description:'밀양강 절벽 위의 국보 누각. 고려 공민왕 14년(1365) 중건된 조선 최대 강변 누각 중 하나로 평양 부벽루·진주 촉석루와 함께 한국 3대 누각으로 꼽힌다. 2024년 국보 지정.',source_urls:['https://en.wikipedia.org/wiki/Yeongnamnu_(Miryang)'],data_confidence:'high',tags:['누각','고려','조선','밀양','경남','강변','국보','3대누각']},
  {name:'남해 충렬사',category:'전쟁유적',period:'조선 후기 (1658년 이순신 사당)',period_category:'조선 후기',region:'경상남도',address:'경상남도 남해군 설천면 노량리 350',location_marker_type:'exact',lat:34.946,lng:127.86,short_description:'1598년 노량해전에서 순국한 이순신 장군을 기리기 위해 1658년 세운 사당. 1663년 충렬사로 사액됐으며 이순신의 마지막 전투지 노량해협이 내려다보인다.',source_urls:['https://encykorea.aks.ac.kr/Article/E0012300'],data_confidence:'medium',tags:['이순신','임진왜란','노량해전','조선후기','남해','경남','사당']},
  {name:'칠곡 송림사',category:'사찰',period:'삼국시대 신라 (544년 창건)',period_category:'삼국',region:'경상북도',address:'경상북도 칠곡군 동명면 구덕리 91',location_marker_type:'entrance',lat:35.98194,lng:128.57694,short_description:'544년 명관대사가 창건한 신라 사찰. 경내 오층전탑(보물)은 신라시대 유일한 전탑이며 중국 양식의 전돌탑이다. 대각국사 의천이 중창한 유서 깊은 사찰이다.',source_urls:['https://ko.wikipedia.org/wiki/%EC%86%A1%EB%A6%BC%EC%82%AC_(%EC%B9%A0%EA%B3%A1%EA%B5%B0)'],data_confidence:'high',tags:['사찰','신라','고려','칠곡','경북','전탑','의천','보물','불사리']},
  {name:'경산 환성사',category:'사찰',period:'통일신라 (835년 창건)',period_category:'통일신라',region:'경상북도',address:'경상북도 경산시 하양읍 환성로 392-30',location_marker_type:'entrance',lat:35.93861,lng:128.76694,short_description:'835년 창건된 하양읍의 천년 고찰. 1635년 중건된 대웅전(보물)은 정면 5칸의 웅장한 다포 팔작지붕 건물로 조선 중기 사찰 건축의 수작으로 평가받는다.',source_urls:['https://en.wikipedia.org/wiki/Hwanseongsa'],data_confidence:'high',tags:['사찰','통일신라','조선','경산','경북','하양','대웅전','보물']},
  {name:'원주 법천사지',category:'사찰',period:'통일신라 (창건, 고려 국사탑 국보)',period_category:'통일신라',region:'강원도',address:'강원특별자치도 원주시 부론면 법천리',location_marker_type:'exact',lat:37.20806,lng:127.76417,short_description:'통일신라 창건 사찰 터. 고려 지광국사 입적 후 1085년 국사탑(국보)이 건립됐다. 지광국사탑은 고려 승탑 중 가장 화려하고 정교한 작품으로 손꼽힌다.',source_urls:['https://ko.wikipedia.org/wiki/%EC%9B%90%EC%A3%BC_%EB%B2%95%EC%B2%9C%EC%82%AC%EC%A7%80'],data_confidence:'high',tags:['사찰터','통일신라','고려','원주','강원','지광국사','국보','승탑']},
  {name:'홍천 수타사',category:'사찰',period:'통일신라 (708년 원효대사 창건)',period_category:'통일신라',region:'강원도',address:'강원특별자치도 홍천군 영귀미면 수타사로 473',location_marker_type:'entrance',lat:37.698611,lng:127.958889,short_description:'708년 원효대사가 창건한 공작산 기슭의 고찰. 보물 목조아미타여래삼존불좌상 등 귀중한 문화재를 보존하고 있으며 계곡과 어우러진 경관으로 유명하다.',source_urls:['https://ko.wikipedia.org/wiki/%ED%99%8D%EC%B2%9C_%EC%88%98%ED%83%80%EC%82%AC'],data_confidence:'high',tags:['사찰','통일신라','홍천','강원','공작산','원효대사','보물','계곡']},
  {name:'인제 백담사',category:'사찰',period:'통일신라 (647년 창건)',period_category:'통일신라',region:'강원도',address:'강원특별자치도 인제군 북면 백담로 746',location_marker_type:'entrance',lat:38.164722,lng:128.373861,short_description:'647년 창건된 설악산 깊은 계곡의 사찰. 만해 한용운이 독립선언서 공약 3장을 초안한 유서 깊은 곳이다. 설악산 국립공원 내 위치한 백담계곡의 명찰이다.',source_urls:['https://en.wikipedia.org/wiki/Baekdamsa'],data_confidence:'high',tags:['사찰','통일신라','인제','강원','설악산','한용운','독립운동','백담계곡']},
  {name:'양구 선사박물관',category:'생활유적',period:'선사시대 (1997년 개관, 구석기~철기)',period_category:'선사',region:'강원도',address:'강원특별자치도 양구군 양구읍 금강산로 439-52',location_marker_type:'exact',lat:38.104,lng:127.99,short_description:'국내 최초 선사시대 전문 박물관으로 1997년 개관. 북한강 유역에서 발굴된 구석기·신석기·청동기·철기시대 유물 650여 점을 전시한다.',source_urls:['http://ygpm.or.kr/'],data_confidence:'medium',tags:['박물관','선사','구석기','신석기','청동기','양구','강원','북한강']}
];

const catCode={사찰:'SAJ',성곽:'SEO',생활유적:'SAE',전쟁유적:'JEN'};
const subCat={사찰:'사찰/불교유산',성곽:'성곽/산성',생활유적:'고택/서원/향교',전쟁유적:'독립운동/근현대'};
const regionCode={'경기도':'GG','충청남도':'CN','전라남도':'JN','전라북도':'JB','경상남도':'GN','경상북도':'GB','강원도':'GW'};

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
rawLog.results.push({run_time:now,mode:'B_MODE_QUALITY_SEARCH',region:'경기·충남·전라·경상·강원',collected:newItems.length,total:final.length});
fs.writeFileSync(base+'data/raw/search_results.json',JSON.stringify(rawLog,null,2),'utf8');
const log=JSON.parse(fs.readFileSync(base+'logs/automation_log.json','utf8'));
log.runs.push({time:now,mode:'B',region:'경기·충남·전라·경상·강원',new_collected:newItems.length,approved,total:final.length});
fs.writeFileSync(base+'logs/automation_log.json',JSON.stringify(log,null,2),'utf8');

console.log('B 완료');
console.log('수집: '+newItems.length+'개 / 승인: '+approved+'개');
console.log('누적: '+final.length+'개 / 게시됨: '+final.filter(d=>d.status.map_status==='published').length+'개');
console.log('목표 300: '+(final.length/300*100).toFixed(1)+'% / 목표 1000: '+(final.length/1000*100).toFixed(1)+'%');
newItems.forEach(d=>console.log('  + ['+d.place_id+'] '+d.name));
