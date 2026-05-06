const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const scripts = [
  {place_id:'GK-JJ-GID-0001',place_name:'성산일출봉',
   script_30s:{text:'제주 바다에서 솟아오른 거대한 화산. 5,000년 전 얕은 바다에서 화산이 폭발해 지금의 형태가 됐다. 정상에서 보는 일출이 한국에서 가장 아름답다고 손꼽힌다. 유네스코 세계자연유산.',char_count:82,emotion_keywords_used:['경이','아름다움']},
   script_60s:{text:'제주 동쪽 바다에서 거대한 분화구가 솟아 있다. 성산일출봉이다. 높이 180m. 5,000년 전 얕은 바다 아래서 화산이 폭발했다. 수성화산 활동으로 응회환이 형성됐고, 이후 퇴적과 침식을 거쳐 지금의 형태가 됐다. 분화구 둘레에 99개의 바위봉우리가 성벽처럼 서 있다. 일출 명소로 유명하다. 동틀 무렵 분화구 너머로 해가 떠오르는 장면이 장관이다. 2007년 유네스코 세계자연유산에 등재됐다.',char_count:262,emotion_keywords_used:['경이','아름다움']},
   hooks:['5000년 전 바다에서 솟은 화산','99개 바위봉우리의 분화구','한국 최고 일출 명소','수성화산 폭발의 흔적','유네스코 세계자연유산'],
   thumbnails:['바다에서 솟은 화산','99개 봉우리','일출 장관','수성화산','유네스코'],
   captions:{youtube:'성산일출봉 | 5000년 전 바다에서 솟은 화산 — 99개 봉우리 일출 명소. 제주 서귀포시. #성산일출봉 #제주 #유네스코',instagram:'5000년 전 바다에서 화산이 솟아올랐다 🌋 성산일출봉, 유네스코 세계자연유산.',tiktok:'성산일출봉이 5000년 전 바다 아래서 폭발한 화산인 거 알아? #성산일출봉 #제주 #유네스코',xiaohongshu:'城山日出峰 🌋 5000年前从海中喷发而成的火山 | 99块岩石峰的日出胜地 | 联合国教科文组织自然遗产 | 济州西归浦 #城山日出峰 #济州 #韩国旅游'},
   hashtags:{korean:['#자연','#여행','#제주','#화산','#유네스코'],place_specific:['#성산일출봉','#일출','#제주','#수성화산']},
   map_card_intro:'5,000년 전 바다 아래 화산 폭발로 탄생한 99개 봉우리의 분화구 — 유네스코 세계자연유산'},
  {place_id:'GK-JJ-SAE-0002',place_name:'제주 삼성혈',
   script_30s:{text:'제주의 시작. 탐라국을 세운 세 신인 고·양·부씨가 이 땅에서 솟아났다는 전설의 구멍이다. 땅에서 솟아난 신화가 지금도 이 자리에 남아 있다. 제주 신화의 원점.',char_count:77,emotion_keywords_used:['신화','기억']},
   script_60s:{text:'제주시 한라산 북쪽 기슭에 구멍 세 개가 있다. 삼성혈이다. 제주 탐라국의 건국 신화가 담긴 곳이다. 태초에 이 땅에 세 신인이 땅에서 솟아났다. 고을나·양을나·부을나다. 그들이 탐라국을 세웠다. 세 구멍이 지금도 남아 있다. 주변에 크고 오래된 나무들이 신성한 분위기를 자아낸다. 제주 삼성혈은 고씨·양씨·부씨의 시조를 모신 공간이다. 매년 춘추 제향이 열린다. 사적 제134호.',char_count:258,emotion_keywords_used:['신화','기억']},
   hooks:['탐라국 시조가 솟아난 구멍','세 신인이 땅에서 솟았다','고·양·부씨의 시조','제주 건국 신화의 원점','땅에서 솟은 신화가 지금도 있다'],
   thumbnails:['시조 솟은 구멍','세 신인 신화','탐라국 건국','고양부씨 시조','건국 신화 원점'],
   captions:{youtube:'제주 삼성혈 | 탐라국 시조 세 신인이 땅에서 솟은 구멍 — 제주 건국 신화. 제주시. #삼성혈 #탐라국 #제주신화',instagram:'세 신인이 이 땅에서 솟아 탐라국을 세웠다 🕳️ 제주 삼성혈.',tiktok:'탐라국 시조가 땅에서 솟아난 구멍이 실제로 있음 제주 삼성혈 #삼성혈 #탐라국 #제주',xiaohongshu:'济州三姓穴 🕳️ 耽罗国始祖三神人从地中涌出的洞穴 | 济州建国神话之地 | 济州市 #三姓穴 #耽罗国 #济州历史'},
   hashtags:{korean:['#한국역사','#역사여행','#제주','#탐라국','#신화'],place_specific:['#삼성혈','#탐라국','#제주','#건국신화']},
   map_card_intro:'탐라국을 세운 세 신인 고·양·부씨가 땅에서 솟아난 제주 건국 신화의 원점'},
  {place_id:'GK-GN-SAE-0002',place_name:'창녕 우포늪',
   script_30s:{text:'1억 4천만 년 전부터 있던 국내 최대 자연 내륙 습지. 낙동강 지류가 범람하며 형성됐다. 황새와 노랑부리저어새가 겨울을 나는 철새의 낙원. 람사르 협약 등록 습지.',char_count:78,emotion_keywords_used:['경이','자연']},
   script_60s:{text:'경남 창녕에 1억 4천만 년 전부터 있던 습지가 있다. 우포늪이다. 낙동강 지류가 범람하며 형성된 자연 내륙 습지다. 면적 2.31㎢, 국내 최대 규모다. 이 습지가 중요한 이유는 생물 다양성 때문이다. 천연기념물 황새, 노랑부리저어새를 비롯한 희귀 조류 230여 종이 서식한다. 멸종위기 동식물의 마지막 피난처다. 1998년 람사르 협약 습지로 등록됐다. 새벽 물안개가 자욱한 풍경이 특히 아름답다.',char_count:258,emotion_keywords_used:['경이','자연']},
   hooks:['1억 4천만 년 된 습지','국내 최대 내륙 습지','황새 노랑부리저어새 서식','새벽 물안개가 장관','람사르 협약 습지'],
   thumbnails:['1억년 된 습지','국내 최대','황새의 낙원','새벽 물안개','람사르 등록'],
   captions:{youtube:'창녕 우포늪 | 1억 4천만 년 된 국내 최대 내륙 습지 — 황새의 낙원. 경남 창녕군. #우포늪 #람사르 #창녕',instagram:'1억 4천만 년 전부터 있던 습지에 황새가 산다 🦅 창녕 우포늪.',tiktok:'국내 최대 내륙 습지 우포늪 황새도 살고 있음 #우포늪 #람사르 #창녕',xiaohongshu:'昌宁牛浦沼泽 🦅 1亿4千万年历史的国内最大内陆湿地 | 白鹳的乐园 | 拉姆萨尔湿地 | 庆南昌宁 #牛浦沼泽 #拉姆萨尔 #韩国自然'},
   hashtags:{korean:['#자연','#여행','#경상남도','#습지','#람사르'],place_specific:['#우포늪','#창녕','#황새','#람사르']},
   map_card_intro:'1억 4천만 년 전부터 형성된 국내 최대 자연 내륙 습지 — 황새의 람사르 등록 생태 보고'},
  {place_id:'GK-GN-SWO-0001',place_name:'함양 남계서원',
   script_30s:{text:'한국 최초의 사액서원. 1552년 소수서원에 이어 두 번째, 최초로 왕이 이름을 내린 서원이다. 정여창을 배향한다. 남계천 옆에 자리 잡은 경관이 빼어나다. 유네스코 세계유산.',char_count:79,emotion_keywords_used:['학문','기억']},
   script_60s:{text:'경남 함양 남계천 옆에 서원이 있다. 남계서원이다. 1552년 설립됐다. 조선 성리학의 선구자 정여창을 배향한다. 이 서원의 특별한 점은 한국 최초의 사액서원이라는 것이다. 사액서원이란 임금이 이름을 내린 서원이다. 명종이 남계서원이라는 현판을 내렸다. 소수서원보다 늦게 세워졌지만 사액은 가장 먼저 받았다. 서원 앞으로 남계천이 흐르고 뒤로 산이 있는 경관이 아름답다. 2019년 유네스코 세계유산 한국의 서원으로 등재됐다.',char_count:265,emotion_keywords_used:['학문','기억']},
   hooks:['한국 최초 사액서원','임금이 이름 내린 최초의 서원','정여창 배향한 성리학 성지','남계천 경관 속 서원','유네스코 한국의 서원'],
   thumbnails:['최초 사액서원','임금의 현판','정여창 서원','남계천 경관','유네스코'],
   captions:{youtube:'함양 남계서원 | 한국 최초 사액서원 — 임금이 이름 내린 유네스코 세계유산. 경남 함양군. #남계서원 #사액서원 #유네스코',instagram:'임금이 이름을 내린 한국 최초 사액서원 📚 함양 남계서원, 유네스코 세계유산.',tiktok:'한국 최초 사액서원이 경남 함양에 있음 남계서원 #남계서원 #사액서원 #유네스코',xiaohongshu:'咸阳蓝溪书院 📚 韩国最初赐额书院 | 国王赐名之地 | 联合国教科文组织世界遗产 | 庆南咸阳 #蓝溪书院 #韩国书院 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#경상남도','#조선역사','#유네스코'],place_specific:['#남계서원','#사액서원','#함양','#한국의서원']},
   map_card_intro:'임금이 최초로 이름을 내린 한국 최초 사액서원 — 유네스코 세계유산'},
  {place_id:'GK-GN-SAE-0003',place_name:'거창 수승대',
   script_30s:{text:'거창 계곡에 있는 바위와 정자. 신라 때부터 경관이 알려진 곳이다. 거북이를 닮은 거대한 바위 위에 정자가 있다. 이 이름을 지어준 것이 퇴계 이황이다. 명승 제53호.',char_count:75,emotion_keywords_used:['아름다움','기억']},
   script_60s:{text:'경남 거창 원학동 계곡에 거대한 바위가 있다. 수승대다. 거북이를 닮은 바위 위에 요수정이라는 정자가 얹혀 있다. 신라 때부터 이 계곡의 경관이 알려졌다. 원래 이름은 수송대였다. 이황이 이 명승지를 방문하고 수승대라는 이름을 다시 지어주었다. 이긴다는 뜻의 수승이다. 주변에 송림이 우거지고 계곡이 깊어 여름 피서지로도 유명하다. 명승 제53호.',char_count:254,emotion_keywords_used:['아름다움','기억']},
   hooks:['퇴계 이황이 이름 지어준 명소','거북 바위 위 정자','신라부터 알려진 계곡 명소','여름 피서지로도 유명','명승 제53호'],
   thumbnails:['이황의 명소','거북 바위','요수정 정자','신라 계곡','여름 피서지'],
   captions:{youtube:'거창 수승대 | 퇴계 이황이 이름 지어준 거북 바위 위 정자 — 명승. 경남 거창군. #수승대 #퇴계이황 #거창',instagram:'퇴계 이황이 이름을 지어준 거북 바위 위 정자 🐢 거창 수승대, 명승 53호.',tiktok:'퇴계 이황이 이름 지어준 경남 거창의 거북 바위 명소 수승대 #수승대 #이황 #거창',xiaohongshu:'居昌搜胜台 🐢 退溪李滉命名的龟形岩石上亭子 | 新罗时期就已知名的溪谷 | 庆南居昌 #搜胜台 #李滉 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#경상남도','#조선역사','#명승'],place_specific:['#수승대','#퇴계이황','#거창','#계곡']},
   map_card_intro:'퇴계 이황이 이름을 지어준 거북 바위 위 정자 — 신라부터 알려진 계곡 명승'}
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
console.log('C모드 26차: '+updated+'개 / 누적 '+lib.total+'개');
ids.forEach((id,i)=>console.log('  C+ ['+id+'] '+scripts[i].place_name));
