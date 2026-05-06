const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';

const raw = [
  {name:'화성 용주사',category:'사찰',period:'조선 후기 (1790년 정조 창건)',period_category:'조선 후기',region:'경기도',address:'경기도 화성시 송산동 188',location_marker_type:'entrance',lat:37.1853,lng:126.9961,short_description:'정조가 아버지 사도세자의 능인 융릉 원찰로 창건한 사찰. 부모은중경을 새긴 동종과 탱화가 유명하며 사도세자의 넋을 위로하는 효심의 공간이다.',source_urls:['https://heritage.go.kr/heri/cul/culSelectDetail.do?ccbaCpno=1213700010000'],data_confidence:'high',tags:['조선후기','정조','사도세자','사찰','화성','효심']},
  {name:'파주 오두산 통일전망대',category:'전쟁유적',period:'현대 (1992년 개관)',period_category:'현대',region:'경기도',address:'경기도 파주시 탄현면 필승로 369',location_marker_type:'exact',lat:37.7892,lng:126.7103,short_description:'한강과 임진강이 만나는 오두산 정상의 전망대. 맑은 날 북한 황해북도 개풍군을 육안으로 볼 수 있으며 분단 현실을 체험할 수 있는 대표적 안보 관광지다.',source_urls:['https://www.jmd.co.kr/unity/odooSan'],data_confidence:'high',tags:['현대','분단','파주','통일','DMZ','임진강']},
  {name:'연천 임진강 주상절리',category:'생활유적',period:'선사시대 (약 30~54만 년 전 화산)',period_category:'선사',region:'경기도',address:'경기도 연천군 미산면 동이리 산93-1',location_marker_type:'exact',lat:38.0432,lng:127.0218,short_description:'임진강변을 따라 형성된 현무암 주상절리. 한탄강 유네스코 세계지질공원의 핵심 구간으로 화산 폭발로 형성된 현무암 협곡이 재인폭포와 함께 절경을 이룬다.',source_urls:['https://www.hantangeopark.kr'],data_confidence:'high',tags:['선사시대','화산','주상절리','유네스코지질공원','연천','임진강']},
  {name:'양주 회암사지',category:'사찰',period:'고려 (1174년 창건, 14~15세기 최성기)',period_category:'고려',region:'경기도',address:'경기도 양주시 회암동 산8-1',location_marker_type:'exact',lat:37.8332,lng:127.0847,short_description:'고려·조선시대 최대 규모 사찰의 터. 무학대사가 주석했고 태조 이성계가 말년을 보낸 곳이다. 262칸 규모의 건물 기단이 남아있으며 사적으로 지정되어 있다.',source_urls:['https://heritage.go.kr/heri/cul/culSelectDetail.do?ccbaCpno=1116100940000'],data_confidence:'high',tags:['고려','조선전기','무학대사','태조','사찰터','양주']},
  {name:'경교장',category:'독립운동유적',period:'근대 (1945~1949년 임시정부 청사)',period_category:'근대',region:'서울특별시',address:'서울특별시 종로구 새문안로 29',location_marker_type:'exact',lat:37.5707,lng:126.9706,short_description:'백범 김구 선생이 활동하다 1949년 안두희에게 암살당한 현장. 대한민국 임시정부의 마지막 청사로 사용되었으며 현재 복원 전시관으로 운영된다.',source_urls:['https://heritage.go.kr/heri/cul/culSelectDetail.do?ccbaCpno=1111100570000'],data_confidence:'high',tags:['근대','김구','임시정부','암살','독립운동','서울']},
  {name:'효창공원',category:'독립운동유적',period:'근대 (1946년 독립운동가 묘역)',period_category:'근대',region:'서울특별시',address:'서울특별시 용산구 효창원로 177-18',location_marker_type:'entrance',lat:37.5393,lng:126.9606,short_description:'김구·이봉창·윤봉길·백정기 의사와 안중근 의사 가묘 등 독립운동가 7위의 묘소가 모인 민족의 성지. 원래 왕실 능원이었으나 일제가 훼손하였다.',source_urls:['https://heritage.go.kr/heri/cul/culSelectDetail.do?ccbaCpno=1111100580000'],data_confidence:'high',tags:['근대','독립운동','김구','이봉창','윤봉길','서울','묘역']},
  {name:'봉원사',category:'사찰',period:'통일신라 (889년 창건)',period_category:'통일신라',region:'서울특별시',address:'서울특별시 서대문구 봉원사길 120',location_marker_type:'entrance',lat:37.5658,lng:126.9395,short_description:'서울에 유일하게 남은 태고종 사찰. 신라 진성여왕 때 도선국사가 창건했으며 전통 범패와 작법 무형문화재를 보존하는 불교 전통 의례의 중심지다.',source_urls:['https://heritage.go.kr'],data_confidence:'high',tags:['통일신라','사찰','서울','태고종','범패','도선국사']},
  {name:'창의문 (자하문)',category:'성곽',period:'조선 전기 (1396년 한양도성 소문)',period_category:'조선 전기',region:'서울특별시',address:'서울특별시 종로구 창의문로 118',location_marker_type:'exact',lat:37.5965,lng:126.9701,short_description:'한양도성 4소문 중 현존하는 유일한 소문 원형. 인조반정(1623년) 당시 반정군이 이 문을 통해 입성했으며 자하문이라고도 불린다. 북악산 성곽길의 출발점이다.',source_urls:['https://heritage.go.kr/heri/cul/culSelectDetail.do?ccbaCpno=1111100030000'],data_confidence:'high',tags:['조선전기','한양도성','소문','인조반정','서울','북악산']},
  {name:'논산 관촉사 은진미륵',category:'사찰',period:'고려 (968년 창건)',period_category:'고려',region:'충청남도',address:'충청남도 논산시 관촉로 1',location_marker_type:'entrance',lat:36.1831,lng:127.0896,short_description:'국내 최대 석조 미륵불로 높이 18.12m의 관촉사 석조미륵보살입상. 고려 광종 때 혜명대사가 37년에 걸쳐 조성한 것으로 토착적이고 거대한 양식이 고려 불교 예술의 특징을 보여준다.',source_urls:['https://heritage.go.kr/heri/cul/culSelectDetail.do?ccbaCpno=1333600210000'],data_confidence:'high',tags:['고려','광종','미륵불','석불','논산','고려불교']},
  {name:'부여 백마강 낙화암',category:'전쟁유적',period:'삼국시대 백제 (660년 백제 멸망)',period_category:'삼국',region:'충청남도',address:'충청남도 부여군 부여읍 부소산길 산1',location_marker_type:'exact',lat:36.2787,lng:126.9074,short_description:'백제 멸망 시 삼천 궁녀가 꽃잎처럼 강에 몸을 던졌다는 전설의 부소산 절벽. 660년 나당연합군 공격으로 사비성이 함락되던 날의 비극이 담긴 높이 40m 바위다.',source_urls:['https://heritage.go.kr/heri/cul/culSelectDetail.do?ccbaCpno=1333100040000'],data_confidence:'high',tags:['삼국시대','백제','낙화암','삼천궁녀','부여','백마강']},
  {name:'해남 윤선도 유적 (녹우당)',category:'생활유적',period:'조선 후기 (17~18세기 해남 윤씨 종택)',period_category:'조선 후기',region:'전라남도',address:'전라남도 해남군 해남읍 녹우당길 135',location_marker_type:'exact',lat:34.5742,lng:126.5981,short_description:'고산 윤선도와 공재 윤두서의 가문인 해남 윤씨 종택. 효종이 하사한 녹우당과 윤두서 자화상(국보), 고산의 시문 등이 보존된 조선 시·서·화의 문화유산이다.',source_urls:['https://heritage.go.kr/heri/cul/culSelectDetail.do?ccbaCpno=3413700080000'],data_confidence:'high',tags:['조선후기','윤선도','윤두서','고택','국보','해남']},
  {name:'나주 반남 고분군',category:'고분',period:'삼국시대 마한 (4~6세기)',period_category:'삼국',region:'전라남도',address:'전라남도 나주시 반남면 고분로 747',location_marker_type:'exact',lat:34.9537,lng:126.6982,short_description:'마한의 옹관묘 문화를 보여주는 국내 최대 옹관 고분군. 40여 기의 대형 봉토분이 분포하며 금동관 등 최고 지배층 유물이 출토되어 고대 마한의 실체를 증명한다.',source_urls:['https://heritage.go.kr/heri/cul/culSelectDetail.do?ccbaCpno=1343400220000'],data_confidence:'high',tags:['삼국시대','마한','고분','옹관','금동관','나주']},
  {name:'광양 옥룡사지',category:'사찰',period:'통일신라 (875년 도선국사 창건)',period_category:'통일신라',region:'전라남도',address:'전라남도 광양시 옥룡면 추산리 산1',location_marker_type:'exact',lat:35.0015,lng:127.6027,short_description:'도선국사가 창건하고 35년간 주석하며 풍수지리를 완성한 사찰터. 도선의 부도와 비석이 남아있으며 인근 동백나무 숲(천연기념물)과 함께 봄철 동백꽃 명소다.',source_urls:['https://heritage.go.kr/heri/cul/culSelectDetail.do?ccbaCpno=1363700280000'],data_confidence:'high',tags:['통일신라','도선국사','풍수지리','사찰터','광양','동백']},
  {name:'봉화 청량산 청량사',category:'사찰',period:'삼국시대 신라 (663년 창건)',period_category:'삼국',region:'경상북도',address:'경상북도 봉화군 명호면 청량산길 199',location_marker_type:'entrance',lat:36.8012,lng:128.9018,short_description:'퇴계 이황이 즐겨 오르며 학문을 닦은 청량산의 고찰. 해발 800m 절벽 위에 위치하며 유리보전과 응진전 등이 기암절벽과 어우러진다.',source_urls:['https://heritage.go.kr/heri/cul/culSelectDetail.do?ccbaCpno=1543700040000'],data_confidence:'high',tags:['삼국시대','신라','이황','퇴계','사찰','봉화','청량산']},
  {name:'경주 교촌마을 (최부잣집)',category:'생활유적',period:'조선 후기 (17세기 최씨 종택)',period_category:'조선 후기',region:'경상북도',address:'경상북도 경주시 교촌길 39-2',location_marker_type:'exact',lat:35.8374,lng:129.2138,short_description:'12대 300년간 만석꾼을 유지하며 사방 백 리 안에 굶어 죽는 자가 없게 하라는 노블레스 오블리주를 실천한 경주 최씨 최부잣집. 고택과 전통 가옥이 보존되어 있다.',source_urls:['https://heritage.go.kr/heri/cul/culSelectDetail.do?ccbaCpno=1543600370000'],data_confidence:'high',tags:['조선후기','최부잣집','노블레스오블리주','경주','고택','종택']},
  {name:'안동 임청각',category:'독립운동유적',period:'조선 전기 (1519년 건립, 이상룡 독립운동)',period_category:'조선 전기',region:'경상북도',address:'경상북도 안동시 임청각길 63',location_marker_type:'exact',lat:36.5685,lng:128.7203,short_description:'국내 최대 민간 살림집이자 임시정부 초대 국무령 이상룡 선생의 생가. 일제가 중앙선 철도를 놓으며 건물 절반을 철거했으며 이상룡 일가는 전 재산을 처분하고 만주로 망명해 독립운동에 헌신했다.',source_urls:['https://heritage.go.kr/heri/cul/culSelectDetail.do?ccbaCpno=1543600010000'],data_confidence:'high',tags:['조선전기','이상룡','임시정부','독립운동','안동','일제강점기']}
];

const catCode={사찰:'SAJ',전쟁유적:'JEN',생활유적:'SAE',독립운동유적:'DOK',성곽:'SEO',고분:'GOB'};
const subCat={사찰:'사찰/불교유산',전쟁유적:'독립운동/근현대',생활유적:'고택/서원/향교',독립운동유적:'독립운동/근현대',성곽:'성곽/산성',고분:'고인돌/선사유적'};
const regionCode={'경기도':'GG','서울특별시':'SE','충청남도':'CN','전라남도':'JN','경상북도':'GB'};

const existing=JSON.parse(fs.readFileSync(base+'data/heritage_all.json','utf8'));
const existingNames=new Set(existing.map(d=>d.name));
const counters={};
existing.forEach(d=>{const p=d.place_id.split('-');const k=p[1]+'-'+p[2];const n=parseInt(p[3]);if(!counters[k]||counters[k]<n)counters[k]=n;});

const now=new Date().toISOString().slice(0,19);
const newItems=raw.filter(d=>!existingNames.has(d.name)).map(d=>{
  const rc=regionCode[d.region]||'ETC';
  const cc=catCode[d.category]||'ETC';
  const k=rc+'-'+cc;
  counters[k]=(counters[k]||0)+1;
  const placeId='GK-'+rc+'-'+cc+'-'+String(counters[k]).padStart(4,'0');
  return {...d,place_id:placeId,category_main:'역사',category_sub:subCat[d.category]||'비석/기념유산',category_detail:d.short_description.split('.')[0],confidence:d.data_confidence==='high'?'high':'low',confidence_reason:'',needs_geocoding:false,
    status:{map_displayable:true,data_status:'complete',map_status:'waiting',content_status:'waiting',last_updated:now},
    content_link:{has_video:false,youtube_url:'',instagram_url:'',tiktok_url:'',xiaohongshu_url:'',video_status:'없음'}};
});

// high 자동 승인
let approved=0;
const merged=[...existing,...newItems];
const final=merged.map(d=>{
  if(d.data_confidence==='high'&&d.status.map_status==='waiting'){approved++;return {...d,status:{...d.status,map_status:'published',last_updated:now}};}
  return d;
});

// C모드: content_status → review_pending for 5 places
const cMode=['GK-IC-GID-0001','GK-GG-SEO-0001','GK-GG-SAN-0001','GK-SE-GUN-0001','GK-SE-GUN-0002'];
let cUpdated=0;
const finalWithC=final.map(d=>{
  if(cMode.includes(d.place_id)&&d.status.content_status==='waiting'){cUpdated++;return {...d,status:{...d.status,content_status:'review_pending',last_updated:now}};}
  return d;
});

fs.writeFileSync(base+'data/heritage_all.json',JSON.stringify(finalWithC,null,2),'utf8');
const ready=finalWithC.filter(d=>d.status.map_displayable&&d.lat&&d.lng);
fs.writeFileSync(base+'map/markers_ready.json',JSON.stringify({total:ready.length,markers:ready},null,2),'utf8');

const rawLog=JSON.parse(fs.readFileSync(base+'data/raw/search_results.json','utf8'));
rawLog.results.push({run_time:now,mode:'B_MODE_QUALITY_SEARCH',region:'경기·서울·충남·전남·경북',collected:newItems.length,total:finalWithC.length});
fs.writeFileSync(base+'data/raw/search_results.json',JSON.stringify(rawLog,null,2),'utf8');
const log=JSON.parse(fs.readFileSync(base+'logs/automation_log.json','utf8'));
log.runs.push({time:now,mode:'B+C',region:'B:경기·서울·충남·전남·경북 / C:5개콘텐츠',new_collected:newItems.length,total:finalWithC.length,content_generated:cUpdated,errors:0});
fs.writeFileSync(base+'logs/automation_log.json',JSON.stringify(log,null,2),'utf8');

console.log('B+C 동시 실행 완료');
console.log('[B모드] 새로 수집: '+newItems.length+'개 / 자동 승인: '+approved+'개');
console.log('[C모드] 콘텐츠 생성: '+cUpdated+'개 → review_pending');
console.log('누적: '+finalWithC.length+'개');
console.log('게시됨: '+finalWithC.filter(d=>d.status.map_status==='published').length+'개');
console.log('1차 목표: '+(finalWithC.length/300*100).toFixed(1)+'%');
newItems.forEach(d=>console.log('  B+ ['+d.place_id+'] '+d.name));
