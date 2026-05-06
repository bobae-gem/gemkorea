const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const scripts = [
  {place_id:'GK-GB-SAE-0001',place_name:'경주 동궁과 월지',
   script_30s:{text:'신라의 별궁과 인공 연못. 달빛이 물에 잠긴다는 뜻의 월지. 밤에 더 아름답다. 연못에 반사된 누각이 물 위에 둥둥 뜬 것처럼 보이는 야경이 경주에서 가장 아름다운 장면이다.',char_count:83,emotion_keywords_used:['아름다움','기억']},
   script_60s:{text:'경주에 신라 왕자들이 살던 별궁이 있었다. 동궁이다. 674년 문무왕이 건립했다. 그 앞에 인공 연못을 파고 섬과 누각을 만들었다. 이 연못이 월지다. 달빛이 물에 잠긴다는 뜻. 임해전이라고도 불렸다. 신라가 망한 후 이름을 잃고 연꽃이 피는 못, 안압지로 불렸다. 1975년 발굴 조사에서 3만 점이 넘는 유물이 나왔다. 금동 제품, 나무로 만든 배, 주사위 등. 지금은 야간 조명이 켜지면 누각이 연못에 반사돼 경주에서 가장 아름다운 야경이 펼쳐진다.',char_count:270,emotion_keywords_used:['아름다움','기억']},
   hooks:['경주 최고의 야경','달빛이 물에 잠기는 연못','발굴에서 3만점 유물 나왔다','신라 왕자들의 별궁','월지의 밤'],
   thumbnails:['경주 최고 야경','월지 반영','3만점 유물','신라 별궁','누각의 밤'],
   captions:{youtube:'경주 동궁과 월지 | 신라 별궁의 밤 — 3만점 유물이 나온 연못의 최고 야경. 경북 경주시. #동궁과월지 #안압지 #경주야경',instagram:'경주 최고의 야경은 여기다 🌙 동궁과 월지, 달빛이 잠기는 신라의 연못.',tiktok:'경주 야경 1등 동궁과 월지 가봤음? #동궁과월지 #안압지 #경주',xiaohongshu:'庆州东宫与月池 🌙 新罗别宫夜景 | 出土3万余件文物的人工湖 | 庆北庆州 #东宫月池 #雁鸭池 #庆州夜景'},
   hashtags:{korean:['#한국역사','#역사여행','#경상북도','#신라역사','#경주야경'],place_specific:['#동궁과월지','#안압지','#신라','#경주']},
   map_card_intro:'달빛이 물에 잠기는 신라 별궁의 인공 연못 — 경주 최고의 야경'},
  {place_id:'GK-GB-SAJ-0003',place_name:'경주 황룡사지',
   script_30s:{text:'신라 최대의 사찰 터. 황룡사 9층 목탑은 80m 높이로 한반도 역대 최고의 목조 건축물이었다. 1238년 몽골의 침략으로 불에 탔다. 지금은 터만 남아 있다.',char_count:80,emotion_keywords_used:['상실','기억']},
   script_60s:{text:'경주 한복판에 넓은 빈터가 있다. 황룡사지다. 553년 진흥왕이 짓기 시작해 645년 완성했다. 총 7만여 평. 신라 최대의 사찰이었다. 이곳에 9층 목탑이 있었다. 높이 80m. 한반도 역대 최고의 목조 건축물이었다. 탑 안에 불법을 널리 퍼뜨리겠다는 소망을 담았다. 그 탑이 1238년 몽골 침략 때 불에 탔다. 800여 년의 역사가 하루아침에 사라졌다. 지금은 초석과 빈터만 남아 그 규모를 가늠할 수 있다. 발굴된 유물들은 국립경주박물관에 있다.',char_count:263,emotion_keywords_used:['상실','기억']},
   hooks:['80m 목탑이 몽골에 불탔다','신라 최대 사찰의 터','한반도 역대 최고 목조건물','800년 역사가 사라진 날','초석만 남은 웅장한 터'],
   thumbnails:['사라진 80m 목탑','신라 최대 사찰','몽골에 불탔다','800년의 상실','황룡사 터'],
   captions:{youtube:'경주 황룡사지 | 몽골에 불탄 80m 목탑 — 신라 최대 사찰의 터. 경북 경주시. #황룡사지 #신라 #몽골',instagram:'80m 목탑이 있었는데 몽골이 불 질렀다 🔥 경주 황룡사지.',tiktok:'한반도 역대 최고 목조 건물 80m가 몽골에 타버린 황룡사 #황룡사지 #신라 #역사',xiaohongshu:'庆州皇龙寺址 🔥 被蒙古焚毁的80m木塔 | 新罗最大寺院遗址 | 庆北庆州 #皇龙寺址 #新罗历史'},
   hashtags:{korean:['#한국역사','#역사여행','#경상북도','#신라역사','#몽골침략'],place_specific:['#황룡사지','#황룡사','#신라','#경주']},
   map_card_intro:'80m 9층 목탑이 몽골의 침략으로 소실된 신라 최대 사찰 터'},
  {place_id:'GK-GB-SAJ-0004',place_name:'경주 분황사',
   script_30s:{text:'634년 신라 선덕여왕이 창건한 사찰. 원효대사가 이 절에 머물며 화엄경 등을 집필했다. 모전석탑은 신라 현존 최고(最古)의 석탑이다. 벽돌처럼 다듬은 돌로 쌓은 독특한 형태.',char_count:86,emotion_keywords_used:['기억','신앙']},
   script_60s:{text:'경주에 신라 최초의 황룡사가 있다면, 바로 옆에 분황사가 있다. 634년 선덕여왕이 창건했다. 원효대사가 이 절에서 살면서 화엄경 등 다수의 불교 저술을 남겼다. 삼국유사를 쓴 일연도 이 절에 관한 기록을 남겼다. 분황사 모전석탑은 현재 남아있는 신라 석탑 중 가장 오래된 것이다. 634년 건립. 벽돌처럼 다듬은 돌을 쌓아 올린 독특한 형태로 국보 제30호다. 원래 9층이었다는데 현재는 3층만 남아 있다.',char_count:262,emotion_keywords_used:['기억','신앙']},
   hooks:['원효대사가 머문 사찰','신라 현존 최고 석탑','선덕여왕이 창건했다','벽돌처럼 다듬은 독특한 탑','국보 모전석탑'],
   thumbnails:['원효대사의 절','신라 최고 석탑','선덕여왕 창건','모전석탑 국보','634년의 탑'],
   captions:{youtube:'경주 분황사 | 원효대사가 머문 사찰 — 신라 현존 최고(最古) 석탑. 경북 경주시. #분황사 #원효대사 #모전석탑',instagram:'원효대사가 여기서 화엄경 썼다 🛕 경주 분황사, 신라 현존 최고 석탑.',tiktok:'원효대사가 실제로 살면서 저술 남긴 절이 여기임 #분황사 #원효대사 #신라',xiaohongshu:'庆州芬皇寺 🛕 元晓大师著书立说之地 | 新罗现存最古石塔 | 庆北庆州 #芬皇寺 #元晓大师 #新罗历史'},
   hashtags:{korean:['#한국역사','#역사여행','#경상북도','#신라역사','#불교'],place_specific:['#분황사','#원효대사','#모전석탑','#경주']},
   map_card_intro:'원효대사가 화엄경을 저술한 634년 창건 사찰 — 신라 현존 최고(最古) 석탑'},
  {place_id:'GK-GB-RYU-0001',place_name:'경주 오릉',
   script_30s:{text:'신라 시조 박혁거세와 초기 왕들의 무덤. 알에서 태어났다는 신화 속 주인공이 여기 잠들어 있다. 소나무 숲 사이에 다섯 개의 봉분이 서 있는 경주 도심 속 왕릉이다.',char_count:82,emotion_keywords_used:['신화','기억']},
   script_60s:{text:'경주 도심에 소나무 숲이 우거진 왕릉이 있다. 오릉이다. 신라 시조 박혁거세의 무덤을 비롯해 초기 왕들의 무덤 5기가 모여 있다. 박혁거세는 알에서 태어났다는 신화의 주인공이다. 기원전 57년 신라를 세웠다는 것이 삼국사기의 기록이다. 그 신화 속 인물의 무덤이라고 전해지는 것이 오릉이다. 다섯 개의 봉분 앞에 숭덕전이 있어 박씨 왕들의 제례를 지낸다. 유네스코 세계유산 경주역사유적지구.',char_count:260,emotion_keywords_used:['신화','기억']},
   hooks:['알에서 태어난 왕이 여기 잠들다','기원전 57년 신라 시조의 무덤','신화 속 인물의 실제 무덤','소나무숲 경주 도심 왕릉','유네스코 경주역사유적지구'],
   thumbnails:['알에서 태어난 왕','기원전 57년','신화의 무덤','소나무숲 왕릉','유네스코'],
   captions:{youtube:'경주 오릉 | 알에서 태어난 신라 시조 박혁거세의 무덤 — 유네스코. 경북 경주시. #오릉 #박혁거세 #신라',instagram:'알에서 태어났다는 신라 시조가 여기 잠들어 있다 🪺 경주 오릉.',tiktok:'알에서 태어난 왕 박혁거세 실제 무덤이 경주에 있음 #오릉 #박혁거세 #신라',xiaohongshu:'庆州五陵 🪺 从卵中诞生的新罗始祖朴赫居世长眠之地 | 联合国教科文组织 | 庆北庆州 #五陵 #朴赫居世 #新罗历史'},
   hashtags:{korean:['#한국역사','#역사여행','#경상북도','#신라역사','#유네스코'],place_specific:['#오릉','#박혁거세','#신라','#경주']},
   map_card_intro:'알에서 태어난 신라 시조 박혁거세의 무덤 — 유네스코 경주역사유적지구'},
  {place_id:'GK-GB-SAE-0002',place_name:'경주 포석정지',
   script_30s:{text:'신라 왕들의 연회 터. 전복 모양 수로에 술잔을 띄워 흘려보내며 시를 지었다. 935년 후백제 군이 쳐들어왔을 때 경애왕이 연회를 벌이다 붙잡혀 죽었다. 신라 멸망의 현장.',char_count:87,emotion_keywords_used:['멸망','기억']},
   script_60s:{text:'경주 남산 기슭에 특이한 돌 구조물이 있다. 포석정지다. 전복 모양으로 구불구불한 수로가 파져 있다. 왕과 신하들이 이 수로에 술잔을 띄워 흘려보내며 시를 짓고 즐겼던 연회 공간이다. 그런데 935년 이 자리에서 신라의 마지막 비극이 일어났다. 후백제의 견훤이 경주를 기습했다. 경애왕은 그 순간에도 여기서 연회를 벌이고 있었다. 견훤에게 잡혀 강제로 자결을 강요받아 죽었다. 이듬해 신라가 고려에 항복했다. 신라 멸망의 현장.',char_count:266,emotion_keywords_used:['멸망','기억']},
   hooks:['신라 왕이 연회 중에 잡혔다','신라 멸망의 현장','전복 모양 수로에 술잔을 띄웠다','935년 그날의 비극','경주 남산 기슭 역사 현장'],
   thumbnails:['연회 중 왕이 잡혔다','신라 멸망','전복형 수로','935년 기습','포석정 현장'],
   captions:{youtube:'경주 포석정지 | 왕이 연회 중 잡혀 죽은 신라 멸망의 현장. 경북 경주시. #포석정 #신라멸망 #경애왕',instagram:'신라 왕이 연회 중에 후백제에 잡혀 죽은 그 자리 🍶 경주 포석정지.',tiktok:'신라 왕이 연회 즐기다가 잡혀 죽은 현장이 경주에 있음 #포석정 #신라멸망 #역사',xiaohongshu:'庆州鲍石亭址 🍶 新罗王宴会中被俘后亡国的现场 | 庆北庆州 #鲍石亭 #新罗灭亡 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#경상북도','#신라역사','#신라멸망'],place_specific:['#포석정','#경애왕','#신라','#경주']},
   map_card_intro:'왕이 연회 중에 후백제에 잡혀 죽은 신라 멸망의 현장'}
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
console.log('C모드 18차: '+updated+'개 / 누적 '+lib.total+'개');
ids.forEach((id,i)=>console.log('  C+ ['+id+'] '+scripts[i].place_name));
