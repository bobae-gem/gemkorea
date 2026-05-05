const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';

const raw = [
  {name:'공주 무령왕릉과 왕릉원',category:'왕릉',period:'삼국시대 백제 (501~538년, 유네스코)',period_category:'삼국',region:'충청남도',address:'충청남도 공주시 금성동 산5-1',location_marker_type:'entrance',lat:36.4631,lng:127.1172,short_description:'백제 25대 무령왕과 왕비의 합장릉으로, 묘지석 발견으로 피장자가 명확히 확인된 유일한 고대 왕릉. 2015년 유네스코 세계유산 백제역사유적지구에 등재되었으며 출토 유물 2,906점이 국립공주박물관에 보관되어 있다.',source_urls:['https://heritage.go.kr/heri/cul/culSelectDetail.do?ccbaCpno=1333400130000'],data_confidence:'high',tags:['삼국시대','백제','무령왕','왕릉','유네스코','공주']},
  {name:'공주 공산성',category:'산성',period:'삼국시대 백제 (475~538년, 유네스코)',period_category:'삼국',region:'충청남도',address:'충청남도 공주시 산성동 산1',location_marker_type:'entrance',lat:36.4644,lng:127.1244,short_description:'백제가 웅진으로 천도한 뒤 쌓은 왕성. 해발 110m 공산 정상에 위치한 총 둘레 2,660m의 석성·토성 혼합 구조. 2015년 유네스코 세계유산 백제역사유적지구에 등재되었다.',source_urls:['https://en.wikipedia.org/wiki/Gongsanseong'],data_confidence:'high',tags:['삼국시대','백제','웅진','산성','유네스코','공주']},
  {name:'부여 부소산성',category:'산성',period:'삼국시대 백제 (538~660년 사비시대)',period_category:'삼국',region:'충청남도',address:'충청남도 부여군 부여읍 관북리 산1',location_marker_type:'entrance',lat:36.2808,lng:126.9108,short_description:'백제 사비도성의 북쪽을 방어하던 산성. 부소산(해발 106m) 일원에 위치하며 낙화암·고란사 등 역사 유적을 포함한다. 사적 제5호.',source_urls:['https://en.wikipedia.org/wiki/Busosanseong'],data_confidence:'medium',tags:['삼국시대','백제','사비','산성','낙화암','부여']},
  {name:'부여 정림사지 오층석탑',category:'사찰',period:'삼국시대 백제 (6세기 후반~7세기 초, 국보)',period_category:'삼국',region:'충청남도',address:'충청남도 부여군 부여읍 동남리 254',location_marker_type:'exact',lat:36.2736,lng:126.9093,short_description:'백제 사비시대의 석탑으로 국보. 높이 8.33m의 5층 석탑으로 당나라 장수 소정방이 탑신에 기공문을 새겨 평제탑으로도 불린다. 2015년 유네스코 세계유산 등재.',source_urls:['https://heritage.go.kr/heri/cul/culSelectDetail.do?ccbaCpno=1113400090000'],data_confidence:'medium',tags:['삼국시대','백제','사비','국보','유네스코','부여']},
  {name:'부여 능산리 고분군',category:'고분',period:'삼국시대 백제 (6세기 중반~7세기 초, 유네스코)',period_category:'삼국',region:'충청남도',address:'충청남도 부여군 부여읍 능산리 산15-1',location_marker_type:'entrance',lat:36.2778,lng:126.9389,short_description:'백제 사비시대 왕족의 무덤군. 3개 군 7기의 봉토분으로 구성. 인근 절터에서 백제금동대향로가 출토됐다. 2015년 유네스코 세계유산 백제역사유적지구에 등재.',source_urls:['https://heritage.go.kr/heri/cul/culSelectDetail.do?ccbaCpno=1333400140000'],data_confidence:'medium',tags:['삼국시대','백제','고분','유네스코','백제금동대향로','부여']},
  {name:'부여 궁남지',category:'생활유적',period:'삼국시대 백제 (634년, 무왕 35년)',period_category:'삼국',region:'충청남도',address:'충청남도 부여군 부여읍 궁남로 52',location_marker_type:'entrance',lat:36.2697,lng:126.9123,short_description:'백제 무왕이 조성한 우리나라 최초의 인공 연못. 서동요 설화의 무대이며 사적 제135호로 지정되어 있다.',source_urls:['https://heritage.go.kr/'],data_confidence:'high',tags:['삼국시대','백제','무왕','연못','서동요','부여']},
  {name:'서산 용현리 마애여래삼존상',category:'사찰',period:'삼국시대 백제 (6세기 후반~7세기 초, 국보)',period_category:'삼국',region:'충청남도',address:'충청남도 서산시 운산면 마애삼존불길 65-13',location_marker_type:'exact',lat:36.7738,lng:126.6051,short_description:'가야산 층암절벽에 새긴 백제 후기 마애불로 국보. 빛의 방향에 따라 미소가 달라 보이는 백제의 미소로 유명하다.',source_urls:['https://en.wikipedia.org/wiki/Rock-carved_triad_buddha_in_Seosan'],data_confidence:'high',tags:['삼국시대','백제','마애불','국보','서산','백제의미소']},
  {name:'서산 해미읍성',category:'성곽',period:'조선 전기 (1418~1421년 축조)',period_category:'조선 전기',region:'충청남도',address:'충청남도 서산시 해미면 남문2로 143',location_marker_type:'entrance',lat:36.7133,lng:126.5488,short_description:'충청 서해안 방어를 위해 축조된 조선 전기 읍성. 조선 후기 천주교 박해의 현장으로 1만 명 이상의 천주교 순교자가 처형된 순교성지이며 사적 제116호이다.',source_urls:['https://en.wikipedia.org/wiki/Haemieupseong'],data_confidence:'high',tags:['조선전기','읍성','성곽','천주교','순교','서산']},
  {name:'아산 현충사',category:'독립운동유적',period:'조선 후기 (1706년 창건, 이순신 장군 기념)',period_category:'조선 후기',region:'충청남도',address:'충청남도 아산시 염치읍 현충사길 126',location_marker_type:'entrance',lat:36.7628,lng:126.9958,short_description:'임진왜란의 영웅 이순신 장군의 생가 터와 위패를 봉안한 사당. 1706년 창건, 1932년 재건. 국가 현충 시설로 지정되어 있다.',source_urls:['https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=111771'],data_confidence:'medium',tags:['조선후기','이순신','임진왜란','현충사','아산']},
  {name:'천안 독립기념관',category:'독립운동유적',period:'현대 (1987년 개관, 항일독립운동 기념)',period_category:'현대',region:'충청남도',address:'충청남도 천안시 동남구 목천읍 삼방로 95',location_marker_type:'entrance',lat:36.7819,lng:127.2304,short_description:'일제강점기 항일독립운동의 역사를 전시·보존하는 국가 기념관. 1987년 개관. 33만 평 부지에 7개 전시관을 운영하며 연간 방문객 200만 명 이상이다.',source_urls:['https://en.wikipedia.org/wiki/Independence_Hall_of_Korea'],data_confidence:'high',tags:['현대','독립운동','일제강점기','기념관','천안']},
  {name:'천안 유관순 열사 유적',category:'독립운동유적',period:'근대 (1919년 아우내 만세운동)',period_category:'근대',region:'충청남도',address:'충청남도 천안시 동남구 병천면 유관순길 38',location_marker_type:'entrance',lat:36.7741,lng:127.3342,short_description:'유관순 열사가 1919년 4월 1일 아우내 장날 만세운동을 주도한 역사 현장. 생가·사우·봉화지·추모각 등으로 구성된 사적 제230호이다.',source_urls:['https://heritage.go.kr/heri/cul/culSelectDetail.do?ccbaCpno=1333402300000'],data_confidence:'medium',tags:['근대','유관순','3.1운동','아우내','독립운동','천안']},
  {name:'석굴암',category:'사찰',period:'통일신라 (751년 창건, 유네스코)',period_category:'통일신라',region:'경상북도',address:'경상북도 경주시 불국로 873-243',location_marker_type:'exact',lat:35.7903,lng:129.3428,short_description:'김대성이 창건한 통일신라 최고의 석굴 사원. 토함산 정상 근처에 화강암으로 조성된 본존불(높이 3.4m)을 안치. 1995년 불국사와 함께 유네스코 세계유산에 등재되었다.',source_urls:['https://en.wikipedia.org/wiki/Seokguram'],data_confidence:'high',tags:['통일신라','김대성','석굴암','국보','유네스코','경주']},
  {name:'경주 동궁과 월지',category:'생활유적',period:'통일신라 (674년 조성)',period_category:'통일신라',region:'경상북도',address:'경상북도 경주시 원화로 102',location_marker_type:'entrance',lat:35.8347,lng:129.2272,short_description:'통일신라 왕궁의 동쪽 별궁과 인공 연못. 문무왕이 삼국통일 후 조성. 1980년대 발굴에서 3만 3천여 점 유물이 출토되었으며 속칭 안압지로 불렸다.',source_urls:['https://en.wikipedia.org/wiki/Donggung_Palace_and_Wolji_Pond'],data_confidence:'high',tags:['통일신라','문무왕','안압지','월지','경주']},
  {name:'경주 황룡사지',category:'사찰',period:'삼국시대 신라 (553년 창건, 1238년 소실)',period_category:'삼국',region:'경상북도',address:'경상북도 경주시 구황동 320-1',location_marker_type:'exact',lat:35.8381,lng:129.2336,short_description:'신라 최대 사찰 터. 진흥왕이 창건하고 선덕여왕 때 9층 목탑(높이 약 80m)을 조성했으나 1238년 몽골 침입으로 소실. 사적 제6호.',source_urls:['https://en.wikipedia.org/wiki/Hwangryongsa'],data_confidence:'medium',tags:['삼국시대','신라','9층목탑','몽골','경주']},
  {name:'경주 분황사',category:'사찰',period:'삼국시대 신라 (634년 창건)',period_category:'삼국',region:'경상북도',address:'경상북도 경주시 분황로 94-11',location_marker_type:'exact',lat:35.8409,lng:129.2337,short_description:'신라 선덕여왕 때 창건된 사찰. 원효대사가 머물며 저술 활동을 한 곳. 현존 신라 석탑 중 가장 오래된 모전석탑(국보)이 남아 있다.',source_urls:['https://en.wikipedia.org/wiki/Bunhwangsa'],data_confidence:'high',tags:['삼국시대','신라','선덕여왕','원효','모전석탑','국보','경주']},
  {name:'경주 오릉',category:'왕릉',period:'삼국시대 신라 초기 (기원전 1세기~기원후 2세기)',period_category:'삼국',region:'경상북도',address:'경상북도 경주시 탑동 67-1',location_marker_type:'entrance',lat:35.8360,lng:129.2105,short_description:'신라 시조 박혁거세왕과 알영왕비, 남해왕·유리왕·파사왕 등 박씨 왕 5명의 능. 사적 제172호로 경주역사유적지구 유네스코 세계유산에 포함.',source_urls:['https://en.wikipedia.org/wiki/Oreung'],data_confidence:'medium',tags:['삼국시대','신라','박혁거세','왕릉','유네스코','경주']},
  {name:'경주 포석정지',category:'생활유적',period:'통일신라 (9세기 추정)',period_category:'통일신라',region:'경상북도',address:'경상북도 경주시 배동 산14-1',location_marker_type:'exact',lat:35.8092,lng:129.2123,short_description:'남산 서쪽 기슭 통일신라의 유상곡수연 터. 전복 모양의 화강암 수로만 남아 있다. 927년 경애왕이 이곳에서 연회 중 견훤의 기습으로 피살된 역사의 현장. 사적 제1호.',source_urls:['https://heritage.go.kr/'],data_confidence:'high',tags:['통일신라','경애왕','견훤','신라멸망','경주']},
  {name:'경주 김유신묘',category:'왕릉',period:'통일신라 (673년 사망, 삼국통일 주역)',period_category:'통일신라',region:'경상북도',address:'경상북도 경주시 충효동 산7-1',location_marker_type:'exact',lat:35.8456,lng:129.1886,short_description:'삼국통일의 영웅 김유신 장군의 묘. 흥무왕으로 추봉됨. 12지신상을 새긴 호석을 두른 왕릉급 규모의 무덤으로 사적 제21호이다.',source_urls:['https://heritage.go.kr/'],data_confidence:'high',tags:['통일신라','김유신','삼국통일','경주']},
  {name:'경주 무열왕릉',category:'왕릉',period:'통일신라 (661년 사망, 태종 무열왕)',period_category:'통일신라',region:'경상북도',address:'경상북도 경주시 서악동 842',location_marker_type:'exact',lat:35.8317,lng:129.1885,short_description:'신라 29대 태종 무열왕(김춘추)의 능. 능 앞에 태종무열대왕지비가 남아 피장자를 명확히 알 수 있는 몇 안 되는 왕릉이며 사적 제20호이다.',source_urls:['https://en.wikipedia.org/wiki/Tomb_of_King_Muyeol'],data_confidence:'medium',tags:['통일신라','무열왕','김춘추','삼국통일','경주']},
  {name:'경주 양동마을',category:'생활유적',period:'조선 전기 (15세기 이후, 유네스코)',period_category:'조선 전기',region:'경상북도',address:'경상북도 경주시 강동면 양동마을길 93',location_marker_type:'entrance',lat:36.0019,lng:129.2533,short_description:'경주 손씨와 여강 이씨 양반 가문이 500년 이상 세거한 조선시대 최대 규모 전통 씨족마을. 고택 54채 포함 160여 동의 건물. 2010년 유네스코 세계유산 등재.',source_urls:['https://en.wikipedia.org/wiki/Yangdong_Folk_Village'],data_confidence:'high',tags:['조선전기','전통마을','유네스코','양반','경주']},
  {name:'경주 옥산서원',category:'서원',period:'조선 후기 (1572년 창건, 유네스코)',period_category:'조선 후기',region:'경상북도',address:'경상북도 경주시 안강읍 옥산서원길 216-27',location_marker_type:'entrance',lat:36.0119,lng:129.1636,short_description:'조선 성리학자 회재 이언적을 배향한 서원. 2019년 유네스코 세계유산 한국의 서원 9개소 중 하나로 등재되었다.',source_urls:['https://en.wikipedia.org/wiki/Oksan_Seowon,_Gyeongju'],data_confidence:'high',tags:['조선후기','이언적','서원','유네스코','경주']}
];

const catCode={왕릉:'RYU',산성:'SAN',사찰:'SAJ',고분:'GOB',생활유적:'SAE',독립운동유적:'DOK',성곽:'SEO',서원:'SWO'};
const subCat={왕릉:'궁궐/왕실',산성:'성곽/산성',사찰:'사찰/불교유산',고분:'고인돌/선사유적',생활유적:'고택/서원/향교',독립운동유적:'독립운동/근현대',성곽:'성곽/산성',서원:'고택/서원/향교'};
const regionCode={'충청남도':'CN','경상북도':'GB'};

const existing=JSON.parse(fs.readFileSync(base+'data/heritage_all.json','utf8'));
const existingNames=new Set(existing.map(d=>d.name));
const counters={};
existing.forEach(d=>{
  const parts=d.place_id.split('-');
  const key=parts[1]+'-'+parts[2];
  const num=parseInt(parts[3]);
  if(!counters[key]||counters[key]<num)counters[key]=num;
});

const now=new Date().toISOString().slice(0,19);
const newItems=raw.filter(d=>!existingNames.has(d.name)).map(d=>{
  const rc=regionCode[d.region]||'ETC';
  const cc=catCode[d.category]||'ETC';
  const key=rc+'-'+cc;
  counters[key]=(counters[key]||0)+1;
  const placeId='GK-'+rc+'-'+cc+'-'+String(counters[key]).padStart(4,'0');
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
rawLog.results.push({run_time:now,mode:'A_MODE_REALTIME_SEARCH',region:'충청남도·경주',collected:newItems.length,total:merged.length});
fs.writeFileSync(base+'data/raw/search_results.json',JSON.stringify(rawLog,null,2),'utf8');
const log=JSON.parse(fs.readFileSync(base+'logs/automation_log.json','utf8'));
log.runs.push({time:now,mode:'A',region:'충청남도·경주',new_collected:newItems.length,total:merged.length,markers_ready:ready.length,errors:0});
fs.writeFileSync(base+'logs/automation_log.json',JSON.stringify(log,null,2),'utf8');

console.log('A모드 3회차 — 충청남도·경주 완료');
console.log('새로 수집: '+newItems.length+'개');
console.log('누적 장소: '+merged.length+'개');
console.log('1차 목표(300개): '+(merged.length/300*100).toFixed(1)+'%');
newItems.forEach(d=>console.log('  + ['+d.place_id+'] '+d.name));
