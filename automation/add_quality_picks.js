const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';

const selected = [
  {name:'용인 처인성',category:'산성',period:'고려 (1232년 몽골 항쟁)',period_category:'고려',region:'경기도',address:'경기도 용인시 처인구 남사면 아곡리 산56',location_marker_type:'exact',lat:37.1597,lng:127.1878,short_description:'1232년 몽골 2차 침입 당시 승장 김윤후가 이끈 민병이 몽골 총사령관 살리타이를 사살한 역사적 전투지. 소규모 토성이지만 외적 격퇴의 상징으로 사적으로 지정된 유적이다.',source_urls:['https://heritage.go.kr/heri/cul/culSelectDetail.do?ccbaCpno=1336101320000'],data_confidence:'high',tags:['처인성','용인','몽골항쟁','김윤후','살리타이','고려','사적','경기']},
  {name:'완주 화암사',category:'사찰',period:'조선 전기 (극락전 국보)',period_category:'조선 전기',region:'전라북도',address:'전라북도 완주군 경천면 화암사길 271',location_marker_type:'entrance',lat:35.9897,lng:127.1478,short_description:'불명산 기슭의 소규모 고찰로 극락전(국보)이 핵심 문화재다. 하앙식 구조의 극락전은 조선 전기 목조건축의 정수로 평가받으며 우리나라에서 가장 아름다운 사찰 중 하나로 꼽힌다.',source_urls:['https://heritage.go.kr/heri/cul/culSelectDetail.do?ccbaCpno=1213600500000'],data_confidence:'high',tags:['화암사','완주','극락전','국보','하앙식','조선전기','불명산','전북']},
  {name:'장수 논개 생가지',category:'독립운동유적',period:'조선 후기 (임진왜란, 논개 생가)',period_category:'조선 후기',region:'전라북도',address:'전라북도 장수군 장계면 논개생가길 10',location_marker_type:'exact',lat:35.7583,lng:127.5278,short_description:'임진왜란 당시 왜장을 끌어안고 남강에 투신한 의기 논개의 생가터. 사적으로 지정돼 생가가 복원됐으며 매년 논개제가 거행되는 순국의 현장이다.',source_urls:['https://heritage.go.kr/heri/cul/culSelectDetail.do?ccbaCpno=1373500590000'],data_confidence:'high',tags:['논개','장수','임진왜란','의기','생가','사적','전북']},
  {name:'남원 실상사',category:'사찰',period:'통일신라 (828년 창건, 구산선문)',period_category:'통일신라',region:'전라북도',address:'전라북도 남원시 산내면 실상사로 94',location_marker_type:'entrance',lat:35.4233,lng:127.5333,short_description:'828년 홍척국사가 창건한 구산선문 최초의 선종 사찰. 지리산 천왕봉 아래 넓은 들판에 자리하며 보물급 석탑·석등이 즐비하다. 한국 선불교의 발원지 중 하나이다.',source_urls:['https://www.silsangsa.or.kr'],data_confidence:'high',tags:['실상사','남원','구산선문','선종','통일신라','지리산','홍척','전북']},
  {name:'고창 무장기포지',category:'독립운동유적',period:'근대 (1894년 동학농민혁명)',period_category:'근대',region:'전라북도',address:'전라북도 고창군 무장면 성내리 299',location_marker_type:'exact',lat:35.5553,lng:126.6833,short_description:'1894년 동학농민혁명의 첫 공식 포고문이 발표된 무장기포의 현장. 전봉준과 손화중이 이끈 농민군이 봉기를 선언한 역사의 출발점으로 사적 제346호이다.',source_urls:['https://heritage.go.kr/heri/cul/culSelectDetail.do?ccbaCpno=1363803460000'],data_confidence:'high',tags:['무장기포지','고창','동학농민혁명','전봉준','손화중','사적','근대','전북']},
  {name:'영광 불갑사',category:'사찰',period:'삼국시대 백제 (384년 창건 추정)',period_category:'삼국',region:'전라남도',address:'전라남도 영광군 불갑면 불갑사로 450',location_marker_type:'entrance',lat:35.2422,lng:126.5233,short_description:'384년 인도 승려 마라난타가 백제에 불법을 전한 뒤 창건했다고 전해지는 고찰. 상사화(꽃무릇) 군락지로 매년 9월 붉은 꽃밭이 펼쳐지는 전국적인 명소다.',source_urls:['https://www.bulgapsa.org'],data_confidence:'high',tags:['불갑사','영광','백제','마라난타','불교전래','꽃무릇','전남']},
  {name:'통영 세병관',category:'생활유적',period:'조선 후기 (1605년 건립, 국보)',period_category:'조선 후기',region:'경상남도',address:'경상남도 통영시 세병로 27',location_marker_type:'exact',lat:34.8508,lng:128.4275,short_description:'1605년 삼도수군통제사 이경준이 건립한 통제영의 중심 건물. 국보 제305호로 현존 최대 단층 목조건물이며 경복궁 경회루·여수 진남관과 함께 조선 3대 목조건물로 꼽힌다.',source_urls:['https://heritage.go.kr/heri/cul/culSelectDetail.do?ccbaCpno=1123403050000'],data_confidence:'high',tags:['세병관','통영','국보','삼도수군통제영','조선후기','목조건물','경남']},
  {name:'예천 용문사',category:'사찰',period:'고려 (870년 창건, 국보 윤장대)',period_category:'고려',region:'경상북도',address:'경상북도 예천군 용문면 용문사길 285-30',location_marker_type:'entrance',lat:36.6467,lng:128.2383,short_description:'870년 두운조사가 창건한 소백산 고찰. 대장전(국보)과 윤장대(국보)는 고려 불교 목공예의 최고 걸작으로 꼽히며 조선판 대장경 목판도 보관하는 불교 유산의 보고이다.',source_urls:['https://www.yongmunsa.biz'],data_confidence:'high',tags:['용문사','예천','고려','대장전','윤장대','국보','소백산','경북']},
  {name:'경주 문무왕릉',category:'왕릉',period:'통일신라 (681년, 세계 유일 해중 왕릉)',period_category:'통일신라',region:'경상북도',address:'경상북도 경주시 양북면 봉길리 앞바다',location_marker_type:'exact',lat:35.5833,lng:129.4583,short_description:'삼국통일을 이룩한 신라 문무왕이 동해의 용이 되어 나라를 지키겠다는 유언에 따라 수장된 세계 유일의 해중 왕릉. 감포 봉길해변 앞 200m 바다 속 바위섬이 사적 제158호이다.',source_urls:['https://heritage.go.kr/heri/cul/culSelectDetail.do?ccbaCpno=1321101580000'],data_confidence:'high',tags:['문무왕릉','해중릉','경주','통일신라','문무왕','감포','사적','경북']},
  {name:'영주 무섬마을',category:'생활유적',period:'조선 후기 (17세기 형성)',period_category:'조선 후기',region:'경상북도',address:'경상북도 영주시 문수면 수도리 152',location_marker_type:'entrance',lat:36.8722,lng:128.5494,short_description:'내성천이 마을을 거의 360도로 감싸 도는 육지 속 섬마을. 반남박씨·선성김씨 집성촌으로 조선 후기 고택 40여 채가 원형을 유지하며 외나무다리가 상징적 랜드마크다.',source_urls:['https://www.yeongju.go.kr/'],data_confidence:'high',tags:['무섬마을','영주','물돌이마을','내성천','외나무다리','고택','경북']}
];

const catCode={산성:'SAN',사찰:'SAJ',독립운동유적:'DOK',생활유적:'SAE',왕릉:'RYU'};
const subCat={산성:'성곽/산성',사찰:'사찰/불교유산',독립운동유적:'독립운동/근현대',생활유적:'고택/서원/향교',왕릉:'궁궐/왕실'};
const regionCode={'경기도':'GG','전라북도':'JB','전라남도':'JN','경상남도':'GN','경상북도':'GB'};

const existing=JSON.parse(fs.readFileSync(base+'data/heritage_all.json','utf8'));
const existingNames=new Set(existing.map(d=>d.name));
const counters={};
existing.forEach(d=>{const p=d.place_id.split('-');const k=p[1]+'-'+p[2];const n=parseInt(p[3]);if(!counters[k]||counters[k]<n)counters[k]=n;});

const now=new Date().toISOString().slice(0,19);
const newItems=selected.filter(d=>!existingNames.has(d.name)).map(d=>{
  const rc=regionCode[d.region]||'ETC';
  const cc=catCode[d.category]||'ETC';
  const k=rc+'-'+cc;
  counters[k]=(counters[k]||0)+1;
  const placeId='GK-'+rc+'-'+cc+'-'+String(counters[k]).padStart(4,'0');
  return {...d,place_id:placeId,category_main:'역사',category_sub:subCat[d.category]||'비석/기념유산',category_detail:d.short_description.split('.')[0],confidence:'high',confidence_reason:'',needs_geocoding:false,
    status:{map_displayable:true,data_status:'complete',map_status:'published',content_status:'waiting',last_updated:now},
    content_link:{has_video:false,youtube_url:'',instagram_url:'',tiktok_url:'',xiaohongshu_url:'',video_status:'없음'}};
});

const merged=[...existing,...newItems];
fs.writeFileSync(base+'data/heritage_all.json',JSON.stringify(merged,null,2),'utf8');
const ready=merged.filter(d=>d.status.map_displayable&&d.lat&&d.lng);
fs.writeFileSync(base+'map/markers_ready.json',JSON.stringify({total:ready.length,markers:ready},null,2),'utf8');

console.log('선별 추가: '+newItems.length+'개 (국보/사적 위주)');
console.log('누적: '+merged.length+'개 / 게시됨: '+merged.filter(d=>d.status.map_status==='published').length+'개');
newItems.forEach(d=>console.log('  + ['+d.place_id+'] '+d.name));
