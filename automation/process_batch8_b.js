const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';

const raw = [
  {name:'남양주 다산 정약용 유적',category:'생활유적',period:'조선 후기 (정약용 1762~1836)',period_category:'조선 후기',region:'경기도',address:'경기도 남양주시 조안면 다산로747번길 11',location_marker_type:'entrance',lat:37.5872,lng:127.2811,short_description:'실학의 집대성자 정약용이 유배 후 만년을 보내며 목민심서 등 500여 권을 저술한 생가 여유당과 묘소, 실학박물관이 있는 유적지.',source_urls:['https://heritage.go.kr/'],data_confidence:'high',tags:['조선후기','정약용','실학','목민심서','남양주']},
  {name:'여주 고달사지',category:'사찰',period:'고려 (통일신라 창건, 고려 최성기)',period_category:'고려',region:'경기도',address:'경기도 여주시 북내면 상교리 411-1',location_marker_type:'exact',lat:37.3831,lng:127.6267,short_description:'통일신라 때 창건되어 고려시대 최대 사찰 중 하나였던 폐사지. 국보 고달사지 부도 등 석조유물이 잔존하며 고려 왕실의 비호를 받은 대규모 선종 사찰 터.',source_urls:['https://heritage.go.kr/heri/cul/culSelectDetail.do?ccbaCpno=1113100040000'],data_confidence:'high',tags:['고려','폐사지','국보','선종','여주']},
  {name:'용인 한국민속촌',category:'생활유적',period:'조선시대 재현 (현대 조성)',period_category:'조선 후기',region:'경기도',address:'경기도 용인시 기흥구 민속촌로 90',location_marker_type:'entrance',lat:37.2398,lng:127.1156,short_description:'조선시대 각 지방의 전통 건축과 생활양식을 재현한 야외 민속박물관. 270여 채의 전통 가옥과 농경·공예 문화를 체험할 수 있는 살아있는 역사 교육의 장.',source_urls:['https://www.koreanfolk.co.kr'],data_confidence:'high',tags:['조선후기','민속','전통','용인','체험']},
  {name:'괴산 화양서원',category:'서원',period:'조선 후기 (1696년 송시열 제향)',period_category:'조선 후기',region:'충청북도',address:'충청북도 괴산군 청천면 화양리 228',location_marker_type:'entrance',lat:36.7067,lng:127.8581,short_description:'조선 효종의 스승이자 북벌론 주창자 우암 송시열을 제향하는 서원. 화양계곡의 절경 속에 위치하며 만동묘를 함께 복원해 노론의 정신적 성지로 불린다.',source_urls:['https://heritage.go.kr/heri/cul/culSelectDetail.do?ccbaCpno=1333100740000'],data_confidence:'high',tags:['조선후기','송시열','북벌','서원','괴산','화양계곡']},
  {name:'보령 성주사지',category:'사찰',period:'통일신라 (낭혜화상 창건)',period_category:'통일신라',region:'충청남도',address:'충청남도 보령시 성주면 성주리 72',location_marker_type:'exact',lat:36.3372,lng:126.6147,short_description:'통일신라 문성왕 때 낭혜화상이 창건한 대사찰의 폐사지. 국보 낭혜화상탑비와 3기의 삼층석탑이 현존하며 한국 선종 발전의 중요 거점이었던 유적.',source_urls:['https://heritage.go.kr/'],data_confidence:'high',tags:['통일신라','폐사지','선종','국보','보령']},
  {name:'공주 마곡사',category:'사찰',period:'삼국시대 (640년 창건, 유네스코)',period_category:'삼국',region:'충청남도',address:'충청남도 공주시 사곡면 마곡사로 966',location_marker_type:'entrance',lat:36.5327,lng:126.9069,short_description:'640년 자장율사가 창건한 천년 고찰로 유네스코 세계유산(한국의 산지 승원) 등재. 백범 김구가 명성황후 시해 후 은신한 역사를 간직하며 5층석탑 등 문화재를 보유.',source_urls:['https://www.magoksa.or.kr'],data_confidence:'high',tags:['삼국시대','백제','유네스코','김구','마곡사','공주']},
  {name:'예산 추사 김정희 고택',category:'생활유적',period:'조선 후기 (추사 김정희 1786~1856)',period_category:'조선 후기',region:'충청남도',address:'충청남도 예산군 신암면 추사고택로 261',location_marker_type:'exact',lat:36.7486,lng:126.7503,short_description:'조선 최고의 서화가이자 실학자 추사 김정희가 태어난 고택. 추사체를 창안한 예술의 산실로 추사기념관과 함께 조성되어 있으며 백송(천연기념물)이 유명.',source_urls:['https://heritage.go.kr/'],data_confidence:'high',tags:['조선후기','김정희','추사','추사체','예산','서예']},
  {name:'경주 감은사지',category:'사찰',period:'통일신라 (682년 신문왕 완공)',period_category:'통일신라',region:'경상북도',address:'경상북도 경주시 양북면 용당리 55-1',location_marker_type:'exact',lat:35.6186,lng:129.4589,short_description:'문무왕이 창건을 시작하고 신문왕이 완성한 통일신라 최초 대형 사찰 터. 국보 동서 삼층석탑 2기가 남아있으며 동해를 마주한 장엄한 경관으로 유명하다.',source_urls:['https://heritage.go.kr/heri/cul/culSelectDetail.do?ccbaCpno=1113600990000'],data_confidence:'high',tags:['통일신라','문무왕','신문왕','폐사지','국보','경주','동해']},
  {name:'울산 반구대 암각화',category:'고인돌',period:'선사시대 신석기~청동기 (국보)',period_category:'선사',region:'경상남도',address:'울산광역시 울주군 언양읍 대곡리 991',location_marker_type:'exact',lat:35.6019,lng:129.1289,short_description:'세계 최초의 포경 그림이 포함된 국보 선사 암각화. 신석기~청동기 시대 고래·사슴·호랑이 등 300여 점 그림이 새겨진 세계적 선사문화 유산으로 유네스코 세계유산 등재 추진 중.',source_urls:['https://heritage.go.kr/heri/cul/culSelectDetail.do?ccbaCpno=1112802850000'],data_confidence:'high',tags:['선사시대','암각화','포경','국보','울산','신석기']},
  {name:'구미 도리사',category:'사찰',period:'삼국시대 신라 (418년 신라 최초 사찰)',period_category:'삼국',region:'경상북도',address:'경상북도 구미시 해평면 도리사로 526',location_marker_type:'entrance',lat:36.2447,lng:128.3372,short_description:'고구려 승려 아도화상이 신라에 불교를 처음 전한 후 418년 창건한 신라 최초의 사찰. 아도화상 사적비와 세존사리탑(보물)이 있으며 한국 불교 전래의 역사적 기원지.',source_urls:['https://heritage.go.kr/'],data_confidence:'medium',tags:['삼국시대','신라','아도화상','불교전래','구미','최초사찰']},
  {name:'대구 달성토성',category:'성곽',period:'삼국시대 (삼한~신라 축조)',period_category:'삼국',region:'경상북도',address:'대구광역시 달성군 달성공원로 35',location_marker_type:'entrance',lat:35.8733,lng:128.5792,short_description:'삼한시대 달구벌국 또는 신라가 축조한 것으로 추정되는 토성. 사적 제62호로 지정되어 있으며 현재 달성공원 내에 위치해 대구 역사의 중심지로 남아있다.',source_urls:['https://heritage.go.kr/heri/cul/culSelectDetail.do?ccbaCpno=1273400620000'],data_confidence:'medium',tags:['삼국시대','토성','대구','달성','사적']},
  {name:'나주 목사내아',category:'생활유적',period:'조선시대 (나주목 관아 살림채)',period_category:'조선 후기',region:'전라남도',address:'전라남도 나주시 금성관길 13-8',location_marker_type:'exact',lat:35.0317,lng:126.7144,short_description:'조선시대 나주목 수령 살림집으로 보물 제2037호. 현존하는 조선 관아 살림채 중 원형이 잘 보존된 희귀한 사례로 나주목은 전라도의 나자를 딴 핵심 행정중심지였다.',source_urls:['https://heritage.go.kr/'],data_confidence:'high',tags:['조선후기','나주목','관아','보물','나주','전라도']},
  {name:'장흥 보림사',category:'사찰',period:'통일신라 (759년 창건)',period_category:'통일신라',region:'전라남도',address:'전라남도 장흥군 유치면 보림사로 224',location_marker_type:'entrance',lat:34.8367,lng:126.9219,short_description:'759년 원표대덕이 창건한 신라 구산선문 중 가장 먼저 성립된 가지산파의 중심 사찰. 국보 철조비로자나불좌상과 쌍탑(보물)을 보유한 한국 선불교의 발원지.',source_urls:['https://heritage.go.kr/heri/cul/culSelectDetail.do?ccbaCpno=1243500550000'],data_confidence:'high',tags:['통일신라','선불교','구산선문','국보','장흥']},
  {name:'장성 필암서원',category:'서원',period:'조선 후기 (1590년 창건, 유네스코)',period_category:'조선 후기',region:'전라남도',address:'전라남도 장성군 황룡면 필암서원로 184',location_marker_type:'exact',lat:35.2697,lng:126.7017,short_description:'조선 중기 유학자 하서 김인후를 제향하는 서원으로 유네스코 세계유산 한국의 서원 9곳 중 하나. 전라도 유일의 유네스코 등재 서원으로 청절당과 확우당이 원형 보존.',source_urls:['https://heritage.go.kr/'],data_confidence:'high',tags:['조선후기','김인후','서원','유네스코','장성','전라도']},
  {name:'정읍 내장사',category:'사찰',period:'삼국시대 백제 (636년 창건)',period_category:'삼국',region:'전라북도',address:'전라북도 정읍시 내장산로 1253',location_marker_type:'entrance',lat:35.4817,lng:126.8919,short_description:'636년 영은조사가 창건한 고찰로 내장산 국립공원 내 위치. 임진왜란 때 조선왕조실록을 정읍으로 옮겨 보존한 역사적 장소이며 단풍 명소로도 유명한 천년 사찰.',source_urls:['https://www.naejangsa.org'],data_confidence:'high',tags:['삼국시대','백제','조선왕조실록','내장산','정읍','단풍']},
  {name:'밀양 만어사',category:'사찰',period:'삼국시대 가야 (46년 창건 전설)',period_category:'삼국',region:'경상남도',address:'경상남도 밀양시 삼랑진읍 만어로 776',location_marker_type:'entrance',lat:35.4039,lng:128.8539,short_description:'가야 수로왕 때 창건되었다는 전설을 가진 고찰. 수만 개의 돌이 계곡을 가득 메운 만어석(경남 기념물)이 신비로운 경관을 이루며 두드리면 종소리가 나는 물고기 바위로 유명.',source_urls:['https://heritage.go.kr/'],data_confidence:'medium',tags:['삼국시대','가야','수로왕','사찰','밀양','만어석']}
];

const catCode={생활유적:'SAE',사찰:'SAJ',서원:'SWO',고인돌:'GID',성곽:'SEO'};
const subCat={생활유적:'고택/서원/향교',사찰:'사찰/불교유산',서원:'고택/서원/향교',고인돌:'고인돌/선사유적',성곽:'성곽/산성'};
const regionCode={'경기도':'GG','충청북도':'CB','충청남도':'CN','경상북도':'GB','경상남도':'GN','전라남도':'JN','전라북도':'JB'};

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

let approved=0;
const merged=[...existing,...newItems];
const final=merged.map(d=>{
  if(d.data_confidence==='high'&&d.status.map_status==='waiting'){approved++;return {...d,status:{...d.status,map_status:'published',last_updated:now}};}
  return d;
});

fs.writeFileSync(base+'data/heritage_all.json',JSON.stringify(final,null,2),'utf8');
const ready=final.filter(d=>d.status.map_displayable&&d.lat&&d.lng);
fs.writeFileSync(base+'map/markers_ready.json',JSON.stringify({total:ready.length,markers:ready},null,2),'utf8');

const rawLog=JSON.parse(fs.readFileSync(base+'data/raw/search_results.json','utf8'));
rawLog.results.push({run_time:now,mode:'B_MODE_QUALITY_SEARCH',region:'경기·충청·경상·전라',collected:newItems.length,total:final.length});
fs.writeFileSync(base+'data/raw/search_results.json',JSON.stringify(rawLog,null,2),'utf8');
const log=JSON.parse(fs.readFileSync(base+'logs/automation_log.json','utf8'));
log.runs.push({time:now,mode:'B',region:'경기·충청·경상·전라',new_collected:newItems.length,total:final.length,approved,errors:0});
fs.writeFileSync(base+'logs/automation_log.json',JSON.stringify(log,null,2),'utf8');

console.log('B모드 완료');
console.log('새로 수집: '+newItems.length+'개 / 자동 승인: '+approved+'개');
console.log('누적: '+final.length+'개 / 게시됨: '+final.filter(d=>d.status.map_status==='published').length+'개');
console.log('1차 목표: '+(final.length/300*100).toFixed(1)+'%');
newItems.forEach(d=>console.log('  B+ ['+d.place_id+'] '+d.name));
