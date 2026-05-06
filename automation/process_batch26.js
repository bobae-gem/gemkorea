const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const now = new Date().toISOString().slice(0,19);

const raw = [
  {name:'고양 서오릉',category_main:'역사',category_sub:'왕릉',period:'조선 1457~1822년 조성',period_category:'조선시대',region:'경기도',address:'경기도 고양시 덕양구 서오릉로 334-92',location_marker_type:'entrance',lat:37.6357,lng:126.8801,short_description:'조선 왕실 다섯 능이 모인 유네스코 세계유산. 숙종과 인현왕후·장희빈의 묘도 함께 있어 드라마틱한 조선 왕실사를 품고 있다. 소나무 숲길을 따라 산책하며 능역을 둘러볼 수 있다.',source_urls:['https://ko.wikipedia.org/wiki/%EC%84%9C%EC%98%A4%EB%A6%89'],data_confidence:'high',tags:['서오릉','조선왕릉','유네스코','숙종','인현왕후','장희빈','고양']},
  {name:'남양주 광릉',category_main:'역사',category_sub:'왕릉',period:'조선 세조 1468년 조성',period_category:'조선시대',region:'경기도',address:'경기도 남양주시 진접읍 광릉수목원로 354',location_marker_type:'entrance',lat:37.7472,lng:127.1722,short_description:'조선 세조와 정희왕후가 잠든 유네스코 세계유산 왕릉으로 동원이강릉 형식을 최초로 채택했다. 능역 주변 광릉숲은 500년 이상 보존된 천연림으로 유네스코 생물권보전지역이다.',source_urls:['https://ko.wikipedia.org/wiki/%EA%B4%91%EB%A6%89'],data_confidence:'high',tags:['광릉','세조','조선왕릉','유네스코','광릉숲','국립수목원','남양주']},
  {name:'인천 차이나타운',category_main:'역사',category_sub:'생활유적',period:'1884년 청나라 조계지 설치',period_category:'근대',region:'인천광역시',address:'인천광역시 중구 차이나타운로 일대',location_marker_type:'entrance',lat:37.4753,lng:126.6175,short_description:'1884년 청나라 조계지 설치 이후 형성된 국내 유일의 공식 차이나타운. 짜장면의 발상지로 알려진 공화춘과 삼국지 벽화거리, 한중문화관 등이 모여 개항 역사와 중화 문화를 함께 즐길 수 있다.',source_urls:['https://ko.wikipedia.org/wiki/%EC%9D%B8%EC%B2%9C_%EC%B0%A8%EC%9D%B4%EB%82%98%ED%83%80%EC%9A%B4'],data_confidence:'high',tags:['차이나타운','짜장면','개항역사','인천중구','짜장면박물관','삼국지벽화','인천']},
  {name:'용인 한국민속촌',category_main:'자연',category_sub:'자연명승',period:'',period_category:'',region:'경기도',address:'경기도 용인시 기흥구 민속촌로 90',location_marker_type:'entrance',lat:37.2397,lng:127.1133,short_description:'조선시대 전통 생활문화를 재현한 국내 최대 규모의 민속 테마파크로 240여 채의 전통 가옥과 장인 공방이 있다. 사물놀이·줄타기·마상무예 등 전통 공연과 계절 축제가 풍성하다.',source_urls:['https://www.koreanfolk.co.kr'],data_confidence:'high',tags:['한국민속촌','전통문화','조선시대','체험여행','용인','가족여행','드라마촬영지']},
  {name:'양평 용문사 은행나무',category_main:'자연',category_sub:'자연명승',period:'',period_category:'',region:'경기도',address:'경기도 양평군 용문면 용문산로 782',location_marker_type:'exact',lat:37.5477,lng:127.5914,short_description:'수령 약 1,100년, 높이 42m의 국내 최대·최고령 은행나무로 천연기념물 제30호다. 신라 마의태자가 심었다는 전설이 전해지며 매년 가을 황금빛으로 물드는 장관이 전국에서 탐방객을 모은다.',source_urls:['https://ko.wikipedia.org/wiki/%EC%9A%A9%EB%AC%B8%EC%82%AC_%EC%9D%80%ED%96%89%EB%82%98%EB%AC%B4'],data_confidence:'high',tags:['용문사은행나무','천연기념물','고목','가을단풍','마의태자','양평','용문산']},
  {name:'여주 강천섬',category_main:'자연',category_sub:'강/호수',period:'',period_category:'',region:'경기도',address:'경기도 여주시 강천면 강천리 일대',location_marker_type:'exact',lat:37.3421,lng:127.5867,short_description:'남한강 물줄기가 감싸 안은 여주의 작은 섬으로 수도권 캠핑·피크닉 명소다. 봄 유채꽃과 가을 억새밭이 특히 유명하며 강변 산책로와 자전거길이 잘 정비되어 있다.',source_urls:['https://tour.yeoju.go.kr'],data_confidence:'high',tags:['강천섬','남한강','여주','캠핑','유채꽃','억새','강변피크닉']}
];

const subCatCode={'왕릉':'RYU','생활유적':'SAE','자연명승':'SCN','강/호수':'LKE'};
const regionCode={'경기도':'GG','인천광역시':'IC'};

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
