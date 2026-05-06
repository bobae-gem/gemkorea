const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const scripts = [
  {place_id:'GK-GW-SAE-0004',place_name:'춘천 소양강댐',
   script_30s:{text:'1973년 완공된 동양 최대의 사력댐. 소양호를 만들어 수도권 용수를 공급한다. 댐에서 배를 타면 청평사에 닿는다. 춘천 여행의 출발점이자 강원도 대표 호수 경관이다.',char_count:78,emotion_keywords_used:['자연','기억']},
   script_60s:{text:'강원도 춘천에 동양 최대 사력댐이 있다. 소양강댐이다. 1967년 착공, 1973년 완공. 높이 123m, 길이 530m의 거대한 댐이다. 이 댐으로 소양호가 만들어졌다. 저수 용량이 29억 톤에 달한다. 수도권 용수의 상당 부분을 공급한다. 댐 아래서 배를 타면 소양호를 가로질러 청평사로 갈 수 있다. 고려 시대 사찰로 오봉산 계곡에 자리한 청평사다. 소양강스카이워크와 함께 춘천 여행의 필수 코스다.',char_count:257,emotion_keywords_used:['자연','기억']},
   hooks:['동양 최대 사력댐','소양호 배 타고 절로 가기','29억 톤 저수 수도권 용수','1973년 춘천의 상징','소양강 스카이워크와 함께'],
   thumbnails:['동양 최대 댐','소양호 유람선','청평사 배 여행','29억 톤 저수','춘천 상징'],
   captions:{youtube:'춘천 소양강댐 | 동양 최대 사력댐 — 소양호 배 타고 청평사로. 강원 춘천시. #소양강댐 #소양호 #춘천',instagram:'동양 최대 댐에서 배 타고 절에 간다 ⛵ 춘천 소양강댐·청평사.',tiktok:'동양 최대 댐 소양강댐에서 배 타면 절에 가는 거 알아? #소양강댐 #춘천 #청평사',xiaohongshu:'春川昭阳江坝 ⛵ 东洋最大砂砾坝 | 乘船横渡昭阳湖前往清平寺 | 江原春川 #昭阳江坝 #昭阳湖 #春川旅游'},
   hashtags:{korean:['#자연','#여행','#강원도','#춘천','#호수'],place_specific:['#소양강댐','#소양호','#청평사','#춘천']},
   map_card_intro:'동양 최대 사력댐이 만든 소양호 — 배 타고 청평사로 가는 춘천의 명소'},
  {place_id:'GK-GW-JEN-0001',place_name:'철원 노동당사',
   script_30s:{text:'한국전쟁 이전 북한이 지배하던 시절 지은 건물. 전쟁 후 총탄 자국이 그대로 남은 채 방치됐다. 분단의 흔적이 가장 생생하게 남아 있는 곳 중 하나다. 등록문화재 제22호.',char_count:78,emotion_keywords_used:['분단','기억']},
   script_60s:{text:'강원도 철원에 특이한 건물이 있다. 노동당사다. 1946년 소련 군정 하의 북한이 지은 건물이다. 북한 노동당 철원군 지부 건물이었다. 3층 규모의 콘크리트 건물인데 한국전쟁으로 모든 기능이 중단됐다. 전쟁 중 총탄을 무수히 맞았다. 건물 외벽에 그 총탄 자국이 그대로 남아 있다. 내부는 무너지고 외벽만 남아 있다. 분단의 생생한 흔적이다. 주변에 철원 두루미 서식지와 DMZ 관광 코스가 있어 함께 돌아볼 수 있다.',char_count:264,emotion_keywords_used:['분단','기억']},
   hooks:['북한이 지은 건물에 총탄 자국','1946년 분단 전 역사','한국전쟁의 상처 그대로','DMZ 근처 분단 현장','외벽만 남은 역사의 증거'],
   thumbnails:['총탄 자국','북한이 지은 건물','1946년','외벽만 남은 현장','분단의 흔적'],
   captions:{youtube:'철원 노동당사 | 북한이 지은 건물에 총탄 자국이 그대로 — 분단의 현장. 강원 철원군. #노동당사 #철원 #분단',instagram:'1946년 북한이 지은 건물에 총탄 자국이 아직도 있다 🏚️ 철원 노동당사.',tiktok:'북한이 지은 건물 외벽에 총탄 자국 그대로 남아있음 #노동당사 #철원 #분단',xiaohongshu:'铁原劳动党社 🏚️ 1946年北韩建造的楼上弹孔至今保存 | 分裂现场 | 江原铁原 #劳动党社 #铁原 #朝鲜半岛分裂'},
   hashtags:{korean:['#한국역사','#역사여행','#강원도','#분단','#한국전쟁'],place_specific:['#노동당사','#철원','#분단','#DMZ']},
   map_card_intro:'1946년 북한이 지은 건물에 총탄 자국이 그대로 남은 분단의 현장'},
  {place_id:'GK-GW-SAE-0005',place_name:'삼척 죽서루',
   script_30s:{text:'오십천 절벽 위에 서 있는 고려 시대 누각. 관동팔경 중 으뜸으로 꼽혔다. 자연 암반 위에 기둥을 세워 지은 독특한 건축이다. 절벽 아래 오십천이 흐르는 경관이 빼어나다.',char_count:80,emotion_keywords_used:['아름다움','기억']},
   script_60s:{text:'강원도 삼척에 오십천 절벽 위 누각이 있다. 죽서루다. 고려 시대 창건됐다. 조선 시대 관동팔경 중 제1경으로 꼽혔다. 관동팔경이란 강원도 동해안의 여덟 절경이다. 특이한 것은 건축 방식이다. 자연 암반 위에 기둥을 세웠는데, 암반의 굴곡에 따라 기둥 높이가 모두 다르다. 자연을 거스르지 않는 건축의 묘미다. 정철의 관동별곡, 신사임당이 이 누각을 노래했다. 보물 제213호.',char_count:258,emotion_keywords_used:['아름다움','기억']},
   hooks:['관동팔경 제1경으로 꼽힌 누각','절벽 암반 위 기둥 높이가 다 달라','정철 관동별곡의 배경','고려에서 시작한 절벽 위 루각','신사임당이 그린 풍경'],
   thumbnails:['관동팔경 1경','암반 위 다른 기둥','관동별곡 배경','고려 누각','오십천 절벽'],
   captions:{youtube:'삼척 죽서루 | 관동팔경 제1경 — 절벽 암반 위 기둥 높이가 모두 다른 고려 누각. 강원 삼척시. #죽서루 #관동팔경 #삼척',instagram:'절벽 위 기둥 높이가 다 다른 고려 누각 🏛️ 삼척 죽서루, 관동팔경 1경.',tiktok:'기둥 높이가 다 다른 이유 있는 절벽 위 누각 삼척 죽서루 #죽서루 #관동팔경 #삼척',xiaohongshu:'三陟竹西楼 🏛️ 关东八景第一景 | 悬崖岩盘上高低不同的高丽楼阁 | 江原三陟 #竹西楼 #关东八景 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#강원도','#고려역사','#관동팔경'],place_specific:['#죽서루','#삼척','#관동팔경','#오십천']},
   map_card_intro:'관동팔경 제1경 — 자연 암반 위에 기둥 높이가 모두 다른 고려 시대 절벽 누각'},
  {place_id:'GK-GB-SAJ-0005',place_name:'안동 봉정사',
   script_30s:{text:'한국에서 가장 오래된 목조 건물이 있는 사찰. 극락전은 고려 전기 12세기에 지어진 것으로 추정된다. 1363년 지어진 대웅전과 함께 한국 목조 건축의 살아있는 역사다. 유네스코 세계유산.',char_count:82,emotion_keywords_used:['기억','보존']},
   script_60s:{text:'경북 안동 천등산 기슭에 사찰이 있다. 봉정사다. 672년 신라 때 창건됐다고 전해진다. 이 사찰의 극락전은 한국에서 가장 오래된 목조 건물이다. 고려 전기, 약 12세기에 지어진 것으로 추정된다. 지금 현재 서 있는 최고(最古) 목조 건물이다. 그 옆에 1363년 지어진 대웅전도 있다. 두 건물이 함께 고려 시대 목조 건축의 형식을 보여준다. 1999년 엘리자베스 영국 여왕이 이 사찰을 방문했다. 2018년 유네스코 세계유산 한국의 산사로 등재됐다.',char_count:267,emotion_keywords_used:['기억','보존']},
   hooks:['한국 최고(最古) 목조 건물','12세기 극락전이 살아있다','영국 여왕이 방문한 절','고려 목조 건축의 정수','유네스코 한국의 산사'],
   thumbnails:['한국 최고 목조','12세기 극락전','영국 여왕 방문','고려 목조 건축','유네스코'],
   captions:{youtube:'안동 봉정사 | 한국 최고(最古) 목조 건물 12세기 극락전 — 유네스코. 경북 안동시. #봉정사 #극락전 #유네스코',instagram:'한국에서 가장 오래된 목조 건물이 여기 있다 🏛️ 안동 봉정사 극락전.',tiktok:'한국 최고 오래된 나무 건물이 경북 안동에 있음 봉정사 극락전 #봉정사 #극락전 #역사',xiaohongshu:'安东凤停寺 🏛️ 韩国最古老木造建筑12世纪极乐殿 | 英国女王访问之地 | 联合国教科文组织 | 庆北安东 #凤停寺 #极乐殿 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#경상북도','#고려역사','#유네스코'],place_specific:['#봉정사','#극락전','#안동','#한국의산사']},
   map_card_intro:'한국 현존 최고(最古) 목조 건물 12세기 극락전이 있는 절 — 유네스코 세계유산'},
  {place_id:'GK-GB-SAJ-0006',place_name:'영주 부석사',
   script_30s:{text:'의상대사가 676년 창건한 화엄종 사찰. 안양루에서 바라보는 소백산맥 전망이 한국 사찰 경관 중 으뜸이다. 무량수전은 봉정사 극락전과 함께 현존하는 고려 목조 건물 중 하나다.',char_count:84,emotion_keywords_used:['아름다움','기억']},
   script_60s:{text:'경북 영주 봉황산에 사찰이 있다. 부석사다. 676년 신라 의상대사가 창건했다. 화엄종의 근본 도량이다. 사찰 위로 올라가면 안양루가 있고, 그 위에서 소백산맥이 한눈에 펼쳐진다. 한국 사찰 경관 중 가장 빼어난 전망 중 하나다. 그 위에 무량수전이 있다. 고려 1376년 중건된 목조 건물로 국보 제18호다. 배흘림 기둥이 특징인 고려 건축의 정수다. 2018년 유네스코 세계유산 한국의 산사로 등재됐다.',char_count:261,emotion_keywords_used:['아름다움','기억']},
   hooks:['소백산맥 전망 최고의 사찰','의상대사 창건 화엄종 본찰','고려 목조 무량수전 국보','배흘림 기둥의 고려 건축','유네스코 한국의 산사'],
   thumbnails:['소백산맥 전망','의상대사 창건','무량수전 국보','배흘림 기둥','유네스코'],
   captions:{youtube:'영주 부석사 | 소백산맥 전망 최고 — 고려 무량수전 국보. 경북 영주시. #부석사 #무량수전 #유네스코',instagram:'소백산맥이 한눈에 펼쳐지는 사찰 🏔️ 영주 부석사, 무량수전 국보.',tiktok:'소백산맥 전망 가장 좋은 절이 영주 부석사임 #부석사 #무량수전 #유네스코',xiaohongshu:'荣州浮石寺 🏔️ 眺望小白山脉最佳寺院 | 高丽木造无量寿殿国宝 | 联合国教科文组织 | 庆北荣州 #浮石寺 #无量寿殿 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#경상북도','#고려역사','#유네스코'],place_specific:['#부석사','#무량수전','#영주','#한국의산사']},
   map_card_intro:'소백산맥 전망과 고려 목조 무량수전이 공존하는 676년 창건 화엄종 사찰 — 유네스코 세계유산'}
];
const data=JSON.parse(fs.readFileSync(base+'data/heritage_all.json','utf8'));
const now=new Date().toISOString().slice(0,19);
const ids=scripts.map(s=>s.place_id);
let updated=0;
const newData=data.map(d=>{
  if(ids.includes(d.place_id)&&d.status?.content_status==='waiting'){updated++;return{...d,status:{...d.status,content_status:'review_pending',last_updated:now}};}
  return d;
});
fs.writeFileSync(base+'data/heritage_all.json',JSON.stringify(newData,null,2),'utf8');
const lib=JSON.parse(fs.readFileSync(base+'content/library.json','utf8'));
const nextNum=lib.contents.length+1;
const hMap={};data.forEach(d=>hMap[d.place_id]=d);
scripts.forEach((s,i)=>{
  const h=hMap[s.place_id]||{};
  lib.contents.push({id:'CL-'+String(nextNum+i).padStart(3,'0'),place_id:s.place_id,place_name:s.place_name,category_main:h.category_main||'역사',category_sub:h.category_sub||'',period_category:h.period_category||'',region:h.region||'',generated_at:now,content_status:'review_pending',script_30s:s.script_30s.text,script_60s:s.script_60s.text,emotion_keywords:[...new Set([...(s.script_30s.emotion_keywords_used||[]),...(s.script_60s.emotion_keywords_used||[])])],hooks:s.hooks,thumbnails:s.thumbnails,video_description:'',captions:s.captions,hashtags:s.hashtags,map_card_intro:s.map_card_intro,filming_ideas:[]});
});
lib.total=lib.contents.length;lib.last_updated=now;
fs.writeFileSync(base+'content/library.json',JSON.stringify(lib,null,2),'utf8');
const log=JSON.parse(fs.readFileSync(base+'logs/automation_log.json','utf8'));
log.runs.push({time:now,mode:'C',content_generated:updated,places:ids,total_scripts:lib.total});
fs.writeFileSync(base+'logs/automation_log.json',JSON.stringify(log,null,2),'utf8');
console.log('C모드 24차: '+updated+'개 / 누적 '+lib.total+'개');
ids.forEach((id,i)=>console.log('  C+ ['+id+'] '+scripts[i].place_name));
