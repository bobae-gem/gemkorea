const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const now = new Date().toISOString().slice(0,19);

const raw = [
  {name:'경주 감은사지',category_main:'역사',category_sub:'사찰',period:'통일신라 682년 창건',period_category:'통일신라',region:'경상북도',address:'경상북도 경주시 양북면 용당리 55-1',location_marker_type:'exact',lat:35.6378,lng:129.3540,short_description:'신라 문무왕이 삼국통일 후 왜구를 막기 위해 동해 바닷가에 창건하기 시작하고 신문왕이 682년 완공한 사찰 터. 동·서 두 삼층석탑(국보 제112호)이 현존하며 대왕암과 함께 신라 호국 불교의 상징적 유적이다.',source_urls:['https://ko.wikipedia.org/wiki/%EA%B0%90%EC%9D%80%EC%82%AC'],data_confidence:'high',tags:['통일신라','문무왕','신문왕','삼층석탑','국보','호국불교','대왕암']},
  {name:'경주 원성왕릉',category_main:'역사',category_sub:'왕릉',period:'통일신라 798년',period_category:'통일신라',region:'경상북도',address:'경상북도 경주시 외동읍 괘릉리 산17',location_marker_type:'exact',lat:35.7482,lng:129.3414,short_description:'신라 38대 원성왕의 능으로 추정되는 무덤(괘릉). 능 앞에 서역인 외모의 무인석·문인석·사자상이 배치되어 당시 신라와 서역의 교류를 보여주는 중요한 자료다. 사적 제26호.',source_urls:['https://ko.wikipedia.org/wiki/%EC%B6%94%EC%A0%95_%EA%B2%BD%EC%A3%BC_%EC%9B%90%EC%84%B1%EC%99%95%EB%A6%89'],data_confidence:'high',tags:['통일신라','원성왕','왕릉','서역인석상','실크로드','사적','무인석']},
  {name:'안동 하회마을',category_main:'역사',category_sub:'생활유적',period:'조선 전기 14세기 형성',period_category:'조선시대',region:'경상북도',address:'경상북도 안동시 풍천면 전서로 186',location_marker_type:'entrance',lat:36.5390,lng:128.5163,short_description:'풍산 류씨 집성촌으로 낙동강이 마을을 S자로 감싸 도는 지형 위에 형성된 조선 시대 씨족 마을. 류성룡의 생가인 충효당 등 조선 건축이 원형 그대로 보존되며 하회별신굿탈놀이가 전승된다. 유네스코 세계유산.',source_urls:['https://www.hahoe.or.kr'],data_confidence:'high',tags:['조선','류성룡','씨족마을','유네스코','탈놀이','한옥','풍산류씨']},
  {name:'봉화 닭실마을',category_main:'역사',category_sub:'생활유적',period:'조선 중기 16세기 형성',period_category:'조선시대',region:'경상북도',address:'경상북도 봉화군 봉화읍 유곡리 277',location_marker_type:'entrance',lat:36.9009,lng:128.7312,short_description:'안동 권씨 충재 권벌의 후손이 세거한 전통 씨족 마을로 청암정·충재고택(보물)이 현존한다. 금닭이 알을 품은 형국이라는 풍수 지명에서 닭실이라 불리며 자연 계류와 한옥이 어우러진 경관이 아름답다.',source_urls:['https://www.bonghwa.go.kr'],data_confidence:'medium',tags:['조선중기','권벌','씨족마을','안동권씨','청암정','보물','풍수']},
  {name:'영주 무섬마을',category_main:'역사',category_sub:'생활유적',period:'조선 중기 17세기 형성',period_category:'조선시대',region:'경상북도',address:'경상북도 영주시 문수면 수도리 168',location_marker_type:'entrance',lat:36.8732,lng:128.5952,short_description:'반변천이 마을 삼면을 감싸 도는 물 위의 섬처럼 형성된 전통 마을. 반남 박씨·선성 김씨 집성촌으로 조선 시대 가옥 40여 채가 보존되며 외나무다리를 건너 들어서는 진입 경관이 유명하다.',source_urls:['https://tour.yeongju.go.kr'],data_confidence:'high',tags:['조선후기','씨족마을','외나무다리','전통가옥','민속문화유산','반변천','물도리동']},
  {name:'경주 나원리 오층석탑',category_main:'역사',category_sub:'석조유물',period:'통일신라 8세기 후반',period_category:'통일신라',region:'경상북도',address:'경상북도 경주시 현곡면 나원리 608',location_marker_type:'exact',lat:35.8537,lng:129.1893,short_description:'통일신라 시대 화강암 오층석탑(국보 제39호)으로 야산 위에 단독으로 서 있다. 기단부와 탑신부의 비례가 균형 잡혀 통일신라 석탑 양식의 전형으로 평가받으며 해체 수리 당시 사리장엄구가 발견되었다.',source_urls:['https://ko.wikipedia.org/wiki/%EA%B2%BD%EC%A3%BC_%EB%82%98%EC%9B%90%EB%A6%AC_%EC%98%A4%EC%B8%B5%EC%84%9D%ED%83%91'],data_confidence:'high',tags:['통일신라','오층석탑','국보','사리장엄구','석탑','경주','불교유산']},
  {name:'충주 탄금대',category_main:'자연',category_sub:'자연명승',period:'',period_category:'',region:'충청북도',address:'충청북도 충주시 칠금동 산1-1',location_marker_type:'entrance',lat:36.9993,lng:127.9185,short_description:'남한강과 달천이 합류하는 절벽 위 솔밭. 신라 악성 우륵이 가야금을 탔다는 전설에서 탄금대라는 이름이 유래했다. 임진왜란 신립 장군의 배수진 현장이기도 한 명승 제42호.',source_urls:['https://ko.wikipedia.org/wiki/%ED%83%84%EA%B8%88%EB%8C%80'],data_confidence:'high',tags:['탄금대','우륵','가야금','신립','임진왜란','명승','남한강']},
  {name:'울산 대왕암공원',category_main:'자연',category_sub:'바다/해변',period:'',period_category:'',region:'울산광역시',address:'울산광역시 동구 일산동 산907',location_marker_type:'entrance',lat:35.4873,lng:129.4257,short_description:'동해 바닷가 해송 숲 위에 펼쳐진 공원. 기암괴석과 해식 지형이 발달한 해안 절경이 특징이며 신라 문무왕비가 죽어 용이 되어 이 바위 아래 잠겼다는 전설이 전해진다.',source_urls:['https://tour.ulsan.go.kr'],data_confidence:'high',tags:['동해','해안절경','기암괴석','소나무숲','문무왕비','출렁다리','울산']},
  {name:'통영 미륵산 케이블카',category_main:'자연',category_sub:'산',period:'',period_category:'',region:'경상남도',address:'경상남도 통영시 발개로 205',location_marker_type:'entrance',lat:34.8628,lng:128.3944,short_description:'해발 461m 미륵산 정상까지 운행하는 케이블카. 정상에서 한려해상국립공원의 다도해 전망과 통영 시가지가 한눈에 펼쳐지고 맑은 날에는 일본 대마도까지 조망된다.',source_urls:['https://www.ttdc.kr/cable'],data_confidence:'high',tags:['미륵산','케이블카','다도해','한려해상국립공원','통영','조망','곤돌라']},
  {name:'사천 삼천포대교 노을',category_main:'자연',category_sub:'일출/일몰 명소',period:'',period_category:'',region:'경상남도',address:'경상남도 사천시 대방동 810',location_marker_type:'exact',lat:34.9244,lng:128.0596,short_description:'사천시와 남해군을 연결하는 5개 교량·4개 섬을 잇는 연륙교. 일몰 무렵 노을빛이 수면과 교량에 반사되는 장면이 드라이브 명소·사진 촬영지로 인기가 높다.',source_urls:['https://www.sacheon.go.kr'],data_confidence:'medium',tags:['노을','연륙교','드라이브','일몰','사천','삼천포','다리경관']},
  {name:'순천만국가정원',category_main:'자연',category_sub:'자연명승',period:'',period_category:'',region:'전라남도',address:'전라남도 순천시 국가정원1호길 47',location_marker_type:'entrance',lat:34.9349,lng:127.4956,short_description:'2013년 순천만국제정원박람회를 계기로 조성된 대한민국 1호 국가정원. 습지보호구역인 순천만 갈대밭과 연계되며 세계 각국의 정원 테마존이 조성되어 있다.',source_urls:['https://www.scgarden.go.kr'],data_confidence:'high',tags:['국가정원','순천만','갈대밭','습지','박람회','생태','꽃정원']}
];

const subCatCode={'사찰':'SAJ','왕릉':'RYU','생활유적':'SAE','석조유물':'SAJ','자연명승':'SCN','바다/해변':'SEA','산':'MTN','일출/일몰 명소':'SUN'};
const regionCode={'경상북도':'GB','충청북도':'CB','울산광역시':'US','경상남도':'GN','전라남도':'JN'};

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
