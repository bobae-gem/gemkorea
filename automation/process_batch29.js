const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const now = new Date().toISOString().slice(0,19);

const raw = [
  {name:'합천 영암사지',category_main:'역사',category_sub:'사찰',period:'통일신라시대',period_category:'통일신라',region:'경상남도',address:'경상남도 합천군 가회면 둔내리 산145',location_marker_type:'exact',lat:35.5041,lng:128.0283,short_description:'황매산 남쪽 기슭 신라 시대 사찰 터로 쌍사자석등(보물)과 귀부가 현존한다. 홍각선사비를 통해 886년 창건 연대를 짐작할 수 있으며 황매산 빼어난 자연경관과 어우러진 석조 유물들이 고즈넉한 분위기를 자아낸다.',source_urls:['https://ko.wikipedia.org/wiki/%ED%95%A9%EC%B2%9C_%EC%98%81%EC%95%94%EC%82%AC%EC%A7%80'],data_confidence:'high',tags:['사지','통일신라','쌍사자석등','보물','황매산','사적','합천']},
  {name:'함양 벽송사',category_main:'역사',category_sub:'사찰',period:'조선 1520년 중건',period_category:'조선시대',region:'경상남도',address:'경상남도 함양군 마천면 추성리 산18-1',location_marker_type:'entrance',lat:35.3682,lng:127.6478,short_description:'1520년 벽송 지엄 대사가 중건한 선불교 도량으로 청허 서산대사와 부휴대사가 수행했던 곳이다. 지리산 칠선계곡 초입에 자리하며 삼층석탑이 보물로 지정되어 있다.',source_urls:['https://ko.wikipedia.org/wiki/%ED%95%A8%EC%96%91_%EB%B2%BD%EC%86%A1%EC%82%AC_%EC%82%BC%EC%B8%B5%EC%84%9D%ED%83%91'],data_confidence:'high',tags:['사찰','조선선불교','서산대사','지리산','칠선계곡','보물','함양']},
  {name:'고성 옥천사',category_main:'역사',category_sub:'사찰',period:'통일신라 670년 의상대사 창건',period_category:'통일신라',region:'경상남도',address:'경상남도 고성군 개천면 연화산1길 1',location_marker_type:'entrance',lat:35.0682,lng:128.2145,short_description:'670년 의상대사가 당나라 유학 후 귀국하여 창건한 사찰. 연화산 심산계곡에 자리하며 청연암·백연암·연대암의 3개 암자와 보물급 문화유산을 품고 있다. 임진·정유왜란 때 구국 승병의 군영 역할을 한 호국사찰이다.',source_urls:['https://ko.wikipedia.org/wiki/%EC%98%A5%EC%B2%9C%EC%82%AC'],data_confidence:'high',tags:['사찰','의상대사','통일신라','연화산','화엄종','호국사찰','고성']},
  {name:'남해 화방사',category_main:'역사',category_sub:'사찰',period:'통일신라 원효대사 창건',period_category:'통일신라',region:'경상남도',address:'경상남도 남해군 고현면 대곡리 1448',location_marker_type:'entrance',lat:34.8735,lng:128.0524,short_description:'원효대사가 신라 신문왕 때 창건한 사찰로 1636년 화방사로 개칭했다. 망운산 자락에 자리하며 용문사·보리암과 함께 남해군 3대 사찰로 손꼽힌다.',source_urls:['https://ko.wikipedia.org/wiki/%ED%99%94%EB%B0%A9%EC%82%AC_(%EB%82%A8%ED%95%B4%EA%B5%B0)'],data_confidence:'high',tags:['사찰','원효대사','통일신라','남해3대사찰','망운산','채진루','남해']},
  {name:'통영 세병관',category_main:'역사',category_sub:'생활유적',period:'조선 1605년 건립',period_category:'조선시대',region:'경상남도',address:'경상남도 통영시 세병로 27',location_marker_type:'exact',lat:34.8463,lng:128.4321,short_description:'1605년 삼도수군통제영 객사로 건립된 건물로 경복궁 경회루·여수 진남관과 함께 현존 조선시대 최대 규모 건축물 중 하나다. 정면 9칸의 웅장한 팔작지붕 건물이며 2002년 국보 제305호로 지정됐다.',source_urls:['https://ko.wikipedia.org/wiki/%ED%86%B5%EC%98%81_%EC%84%B8%EB%B3%91%EA%B4%80'],data_confidence:'high',tags:['관아','국보','조선수군','삼도수군통제영','이순신','임진왜란','통영']},
  {name:'정선 아우라지',category_main:'자연',category_sub:'강/호수',period:'',period_category:'',region:'강원도',address:'강원특별자치도 정선군 여량면 여량6길 17',location_marker_type:'exact',lat:37.4062,lng:128.6891,short_description:'평창에서 발원한 송천과 삼척에서 흘러온 골지천이 만나는 합류 지점. 정선 아리랑의 탄생지이자 조선시대 뗏목의 출발지였던 역사적 장소로 출렁다리와 전망대에서 바라보는 경관이 아름답다.',source_urls:['https://www.jeongseon.go.kr/tour'],data_confidence:'high',tags:['강','합류','정선아리랑','뗏목','출렁다리','정선','전통문화']},
  {name:'태백 용연동굴',category_main:'자연',category_sub:'동굴',period:'',period_category:'',region:'강원도',address:'강원특별자치도 태백시 태백로 283-29',location_marker_type:'entrance',lat:37.1658,lng:128.9872,short_description:'해발 920m에 위치한 국내 최고도 석회동굴로 약 1억 5천만~3억 년 전에 생성됐다. 길이 843m이며 지하수가 없는 건식 석회암 동굴로는 국내 유일하다. 내부 온도가 연중 10~11도를 유지해 여름 피서지로 인기다.',source_urls:['https://ko.wikipedia.org/wiki/%ED%83%9C%EB%B0%B1_%EC%9A%A9%EC%97%B0%EA%B5%B4'],data_confidence:'high',tags:['동굴','석회동굴','백두대간','태백','지질공원','여름피서','자연유산']},
  {name:'평창 오대산 선재길',category_main:'자연',category_sub:'자연명승',period:'',period_category:'',region:'강원도',address:'강원특별자치도 평창군 진부면 오대산로 374-8',location_marker_type:'entrance',lat:37.7482,lng:128.5623,short_description:'월정사에서 상원사까지 오대천 계곡을 따라 이어지는 9km 숲길. 1,400년 역사의 전나무 숲과 수려한 계곡이 어우러져 있으며 완만한 경사로 남녀노소 편안하게 걸을 수 있는 국내 대표 숲길이다.',source_urls:['http://seonjae-road.or.kr/'],data_confidence:'high',tags:['숲길','월정사','상원사','오대산','전나무숲','국립공원','평창']},
  {name:'영월 어라연',category_main:'자연',category_sub:'강/호수',period:'',period_category:'',region:'강원도',address:'강원특별자치도 영월군 영월읍 어라연길 259',location_marker_type:'entrance',lat:37.2341,lng:128.4712,short_description:'동강 중상류 약 1km 구간의 협곡으로 3,000여 평의 바위섬과 병풍 같은 절벽·소나무·너럭바위가 절경을 이룬다. 단종의 전설이 깃든 명승 제14호이며 영월 7경 중 하나다.',source_urls:['https://www.yeongwol.go.kr/tour'],data_confidence:'medium',tags:['협곡','동강','명승','단종전설','래프팅','영월','비경']},
  {name:'홍천 수타사계곡',category_main:'자연',category_sub:'강/호수',period:'',period_category:'',region:'강원도',address:'강원특별자치도 홍천군 동면 수타사로 473',location_marker_type:'entrance',lat:37.7018,lng:128.0452,short_description:'공작산에서 발원하는 덕지천 상류 약 12km의 계곡으로 수타사를 중심으로 넓은 암반과 깊은 소들이 이어져 빼어난 비경을 이룬다. 홍천 9경 중 제6경이며 산소길과 함께 힐링 트레킹 코스로 사랑받는다.',source_urls:['https://www.hongcheon.go.kr/tour'],data_confidence:'high',tags:['계곡','수타사','공작산','홍천9경','산소길','홍천','피서지']}
];

const subCatCode={'사찰':'SAJ','생활유적':'SAE','강/호수':'LKE','동굴':'CAV','자연명승':'SCN'};
const regionCode={'경상남도':'GN','강원도':'GW'};

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
