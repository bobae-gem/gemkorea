const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';

const raw = [
  {name:'제천 의림지',category:'생활유적',period:'선사시대 (삼한시대~통일신라 추정)',period_category:'선사',region:'충청북도',address:'충청북도 제천시 모산동 241',location_marker_type:'exact',lat:37.1741,lng:128.2081,short_description:'삼한시대에 축조된 것으로 전해지는 국내 최고(最古) 저수지. 둘레 1.8km로 현재까지 농업용수를 공급하며 2006년 명승으로 지정됐다. 수변 제림과 폭포가 어우러진 역사 경관지.',source_urls:['https://encykorea.aks.ac.kr/Article/E0043208'],data_confidence:'high',tags:['저수지','명승','삼한시대','제천','충북','수리유적']},
  {name:'청도 운문사',category:'사찰',period:'삼국시대 신라 (560년 창건)',period_category:'삼국',region:'경상북도',address:'경상북도 청도군 운문면 운문사길 264',location_marker_type:'entrance',lat:35.6387,lng:128.9012,short_description:'신라 진흥왕 때 창건된 사찰로 원광국사가 세속오계를 설파하고 일연스님이 삼국유사 집필을 시작한 곳. 현재 전국 최대 비구니 교육도량이다.',source_urls:['https://encykorea.aks.ac.kr/Article/E0040278'],data_confidence:'high',tags:['사찰','신라','원광국사','일연','삼국유사','청도','경북','비구니']},
  {name:'상주 경천대',category:'생활유적',period:'조선 후기 (1628년)',period_category:'조선 후기',region:'경상북도',address:'경상북도 상주시 사벌국면 경천로 652',location_marker_type:'exact',lat:36.4583,lng:128.2440,short_description:'낙동강 1,300리 중 경관이 가장 빼어난 절승지로 낙동강 제1경으로 꼽힌다. 병자호란 후 채득기가 조성한 정자 무우정이 있다.',source_urls:['https://www.sangju.go.kr/tour/'],data_confidence:'high',tags:['낙동강','경관','정자','채득기','조선','상주','경북']},
  {name:'영천 은해사',category:'사찰',period:'통일신라 (809년 창건)',period_category:'통일신라',region:'경상북도',address:'경상북도 영천시 청통면 청통로 951',location_marker_type:'entrance',lat:35.9918,lng:128.7897,short_description:'팔공산 남쪽 기슭의 통일신라 창건 사찰. 조선 선조 때 현재 이름으로 바뀌었으며 국보·보물급 문화재를 다수 보유한 경북 대표 산사다.',source_urls:['https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=89729'],data_confidence:'high',tags:['사찰','통일신라','팔공산','영천','경북','보물']},
  {name:'김천 직지사',category:'사찰',period:'삼국시대 신라 (418년 창건)',period_category:'삼국',region:'경상북도',address:'경상북도 김천시 대항면 직지사길 95',location_marker_type:'entrance',lat:36.0988,lng:128.0316,short_description:'황악산 기슭의 신라 최초 사찰 중 하나로 418년 아도화상이 창건. 약 1,000점의 불상을 모신 비로전과 조선시대 대웅전 등 역사 유산이 풍부하다.',source_urls:['https://en.wikipedia.org/wiki/Jikjisa'],data_confidence:'high',tags:['사찰','신라','아도화상','황악산','김천','경북']},
  {name:'산청 대원사',category:'사찰',period:'삼국시대 신라 (548년 창건)',period_category:'삼국',region:'경상남도',address:'경상남도 산청군 삼장면 대원사길 455',location_marker_type:'entrance',lat:35.3554,lng:127.8065,short_description:'지리산 동쪽 기슭의 신라 창건 사찰. 현재 비구니 수행 도량으로 운영되며 다층석탑(보물)과 아름다운 계곡 경관으로 유명하다.',source_urls:['https://en.wikipedia.org/wiki/Daewonsa'],data_confidence:'high',tags:['사찰','신라','지리산','비구니','산청','경남','보물']},
  {name:'합천 해인사 홍류동계곡',category:'사찰',period:'통일신라 (802년 해인사 창건)',period_category:'통일신라',region:'경상남도',address:'경상남도 합천군 가야면 가야산로 1502-9',location_marker_type:'entrance',lat:35.7942,lng:128.0933,short_description:'해인사로 이어지는 4km 계곡으로 가야산 국립공원의 핵심 경관. 붉게 물드는 단풍과 맑은 물소리로 유명하며 세계문화유산 해인사와 함께 역사·자연을 동시에 감상할 수 있다.',source_urls:['https://www.hc.go.kr/'],data_confidence:'medium',tags:['계곡','해인사','가야산','단풍','합천','경남','국립공원']},
  {name:'하동 쌍계사',category:'사찰',period:'통일신라 (722년 창건)',period_category:'통일신라',region:'경상남도',address:'경상남도 하동군 화개면 쌍계사길 59',location_marker_type:'entrance',lat:35.1612,lng:127.7094,short_description:'지리산 화개계곡의 통일신라 창건 사찰. 진감선사 대공탑비(국보)와 봄 벚꽃 10리 터널로 유명하다.',source_urls:['https://en.wikipedia.org/wiki/Ssanggyesa'],data_confidence:'high',tags:['사찰','통일신라','지리산','벚꽃','하동','경남','국보','화개계곡']},
  {name:'고성 옥천사',category:'사찰',period:'통일신라 (670년 의상 창건)',period_category:'통일신라',region:'경상남도',address:'경상남도 고성군 개천면 연화산길 485',location_marker_type:'entrance',lat:35.0672,lng:128.1835,short_description:'연화산 도립공원의 의상대사 창건(670년) 사찰. 1252년 제작 청동 임자명 반자(보물)를 보유하며 옥천(玉泉) 약수로도 유명하다.',source_urls:['https://encykorea.aks.ac.kr/Article/E0038783'],data_confidence:'medium',tags:['사찰','통일신라','의상','연화산','고성','경남','보물']},
  {name:'구례 화엄사',category:'사찰',period:'삼국시대 백제 (544년 창건, 유네스코)',period_category:'삼국',region:'전라남도',address:'전라남도 구례군 마산면 화엄사로 539',location_marker_type:'entrance',lat:35.2556,lng:127.4972,short_description:'지리산 기슭 544년 창건된 백제계 고찰. 각황전(국보)·사사자삼층석탑(국보) 등 국보급 유산을 다수 보유한 호남 최대 사찰로 유네스코 산사 세계유산이다.',source_urls:['https://en.wikipedia.org/wiki/Hwaeomsa'],data_confidence:'high',tags:['사찰','백제','지리산','국보','구례','전남','유네스코','각황전']},
  {name:'순천 송광사',category:'사찰',period:'고려 (1190년 보조국사 지눌 중창, 유네스코)',period_category:'고려',region:'전라남도',address:'전라남도 순천시 송광면 송광사안길 100',location_marker_type:'entrance',lat:35.0060,lng:127.2830,short_description:'조계산 기슭의 삼보사찰(승보) 중 하나. 보조국사 지눌이 1190년 크게 중창했으며 국보·보물 80여 동의 건물과 불교박물관을 보유한 한국 불교의 정수다.',source_urls:['https://en.wikipedia.org/wiki/Songgwangsa'],data_confidence:'high',tags:['사찰','고려','지눌','삼보사찰','순천','전남','국보','유네스코']},
  {name:'군산 근대역사거리',category:'독립운동유적',period:'근대 (일제강점기 1910~1945년)',period_category:'근대',region:'전라북도',address:'전라북도 군산시 해망로 240 일원',location_marker_type:'exact',lat:35.9783,lng:126.7108,short_description:'일제강점기 수탈의 역사를 간직한 근대 건축 밀집 지구. 군산근대역사박물관·조선은행 군산지점·신흥동 일본식 가옥 등이 남아 드라마 촬영지로도 유명하다.',source_urls:['https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=174257'],data_confidence:'high',tags:['근대','일제강점기','근대건축','군산','전북','역사거리']},
  {name:'구 서울역사',category:'독립운동유적',period:'근대 (1925년 경성역 준공)',period_category:'근대',region:'서울특별시',address:'서울특별시 중구 통일로 1',location_marker_type:'exact',lat:37.5547,lng:126.9706,short_description:'1925년 르네상스 양식으로 준공된 경성역사로 사적 제284호. 2011년 원형 복원 후 복합문화공간 문화역서울284로 운영 중인 한국 근대건축의 대표 유산이다.',source_urls:['https://heritage.go.kr/heri/cul/culSelectDetail.do?ccbaCpno=1331102840000'],data_confidence:'high',tags:['근대건축','일제강점기','기차역','서울역','중구','사적']},
  {name:'덕수궁 돌담길',category:'생활유적',period:'근대 (대한제국기 1897~1910년)',period_category:'근대',region:'서울특별시',address:'서울특별시 중구 정동길 (덕수궁 서문 주변)',location_marker_type:'exact',lat:35.5654,lng:126.9749,short_description:'덕수궁 외곽을 따라 이어지는 900m 돌담길. 고종이 나라를 잃어가던 대한제국의 마지막 기억을 품고 있으며 정동 근대 건축군과 함께 산책코스로 인기다.',source_urls:['https://english.visitkorea.or.kr/'],data_confidence:'high',tags:['대한제국','고종','근대','돌담길','정동','중구','산책']},
  {name:'서울역사박물관 (경희궁지)',category:'생활유적',period:'조선 전기 (경희궁 1617년 창건)',period_category:'조선 전기',region:'서울특별시',address:'서울특별시 종로구 새문안로 55',location_marker_type:'exact',lat:37.5706,lng:126.9704,short_description:'경희궁 터에 2002년 개관한 서울 역사 전문 박물관. 선조~고종까지 조선 왕들이 이용한 경희궁 궁역과 함께 서울 600년 역사를 아우르는 유물 4만 점을 전시한다.',source_urls:['https://ko.wikipedia.org/wiki/%EA%B2%BD%ED%9D%AC%EA%B6%81'],data_confidence:'high',tags:['박물관','경희궁','조선','서울','종로','궁궐']},
  {name:'수원 장안문',category:'성곽',period:'조선 후기 (1794년 수원화성 북문)',period_category:'조선 후기',region:'경기도',address:'경기도 수원시 팔달구 정조로 910',location_marker_type:'exact',lat:37.2889,lng:127.0142,short_description:'수원화성(유네스코)의 4대 성문 중 북문이자 정문. 정조가 서울에서 수원으로 들어올 때 통과하던 문으로 한국 최대 규모 성문 중 하나이며 옹성을 갖춘 조선 후기 군사건축의 정수다.',source_urls:['https://en.wikipedia.org/wiki/Hwaseong_Fortress'],data_confidence:'high',tags:['성곽','성문','수원화성','유네스코','정조','조선','경기','수원']},
  {name:'남양주 흥국사',category:'사찰',period:'삼국시대 신라 (599년 원광 창건)',period_category:'삼국',region:'경기도',address:'경기도 남양주시 별내동 덕릉로1071번길 58',location_marker_type:'entrance',lat:37.6855,lng:127.0733,short_description:'수락산 기슭 599년 원광법사가 창건한 사찰. 조선 선조~인조 때 흥국사로 개칭되었으며 궁궐 건축 양식을 본뜬 대방(국가등록문화유산)이 독특한 역사 유산으로 남아있다.',source_urls:['https://ko.wikipedia.org/wiki/%ED%9D%A5%EA%B5%AD%EC%82%AC_(%EB%82%A8%EC%96%91%EC%A3%BC%EC%8B%9C)'],data_confidence:'high',tags:['사찰','신라','원광','수락산','남양주','경기']}
];

const catCode={생활유적:'SAE',사찰:'SAJ',독립운동유적:'DOK',성곽:'SEO'};
const subCat={생활유적:'고택/서원/향교',사찰:'사찰/불교유산',독립운동유적:'독립운동/근현대',성곽:'성곽/산성'};
const regionCode={'충청북도':'CB','경상북도':'GB','경상남도':'GN','전라남도':'JN','전라북도':'JB','서울특별시':'SE','경기도':'GG'};

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
rawLog.results.push({run_time:now,mode:'B_MODE_QUALITY_SEARCH',region:'충청·경상·전라·서울·경기',collected:newItems.length,total:final.length});
fs.writeFileSync(base+'data/raw/search_results.json',JSON.stringify(rawLog,null,2),'utf8');
const log=JSON.parse(fs.readFileSync(base+'logs/automation_log.json','utf8'));
log.runs.push({time:now,mode:'B',region:'충청·경상·전라·서울·경기',new_collected:newItems.length,approved,total:final.length,markers_ready:ready.length});
fs.writeFileSync(base+'logs/automation_log.json',JSON.stringify(log,null,2),'utf8');

console.log('B+C 완료');
console.log('[B] 새로 수집: '+newItems.length+'개 / 승인: '+approved+'개');
console.log('누적: '+final.length+'개 / 게시됨: '+final.filter(d=>d.status.map_status==='published').length+'개');
console.log('1차 목표: '+(final.length/300*100).toFixed(1)+'%');
newItems.forEach(d=>console.log('  + ['+d.place_id+'] '+d.name));
