const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const scripts = [
  {place_id:'GK-CB-SAJ-0001',place_name:'보은 법주사',
   script_30s:{text:'553년 신라 때 창건된 속리산 천년 고찰. 국내 최대 목조 불상 미륵대불이 있다. 쌍사자 석등, 팔상전 등 국보급 문화재의 보고다. 유네스코 세계유산 한국의 산사.',char_count:75,emotion_keywords_used:['신앙','기억']},
   script_60s:{text:'충북 보은 속리산 계곡에 천년 고찰이 있다. 법주사다. 553년 신라 진흥왕 때 의신조사가 창건했다. 이 절의 팔상전은 조선 시대 목탑으로 국보다. 5층 목탑이 현존하는 것은 한국에서 이 건물뿐이다. 경내에 쌍사자 석등(국보)도 있다. 미륵대불은 높이 33m의 국내 최대 금동 불상이다. 1988년 완성됐고 속리산을 배경으로 우뚝 서 있다. 국보 4개, 보물 12개가 있다. 2018년 유네스코 세계유산 한국의 산사로 등재됐다.',char_count:265,emotion_keywords_used:['신앙','기억']},
   hooks:['한국 유일의 5층 목탑','33m 국내 최대 금동불상','국보 4개 보물 12개 한 절에','쌍사자 석등의 천년 고찰','유네스코 한국의 산사'],
   thumbnails:['5층 목탑 팔상전','33m 미륵대불','국보 4개','쌍사자 석등','유네스코'],
   captions:{youtube:'보은 법주사 | 한국 유일 5층 목탑·33m 미륵대불 — 국보 4개 유네스코. 충북 보은군. #법주사 #팔상전 #유네스코',instagram:'한국 유일 5층 목탑 팔상전이 여기 있다 🏛️ 보은 법주사, 국보 4개.',tiktok:'한국에 5층 목탑이 하나밖에 없는데 충북 보은 법주사임 #법주사 #팔상전 #유네스코',xiaohongshu:'报恩法住寺 🏛️ 韩国唯一五层木塔八相殿·33m最大金铜弥勒大佛 | 4件国宝 | 联合国教科文组织 | 忠北报恩 #法住寺 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#충청북도','#불교','#유네스코'],place_specific:['#법주사','#팔상전','#미륵대불','#보은']},
   map_card_intro:'한국 유일의 현존 5층 목탑 팔상전 — 국보 4개, 33m 미륵대불이 있는 유네스코 세계유산'},
  {place_id:'GK-CB-JEN-0001',place_name:'충주 탄금대',
   script_30s:{text:'가야금의 아버지 우륵이 가야금을 탔다는 절벽 위 소나무 숲. 남한강과 달천이 만나는 절경이다. 임진왜란 신립 장군의 배수진 현장이기도 한 역사와 자연이 겹친 공간이다.',char_count:78,emotion_keywords_used:['기억','낭만']},
   script_60s:{text:'충북 충주 남한강변에 소나무 숲이 있는 절벽이 있다. 탄금대다. 6세기 가야의 악사 우륵이 이 절벽에서 가야금을 탔다는 전설에서 이름이 생겼다. 우륵은 가야금을 신라에 전파한 음악의 거인이다. 그리고 1592년 임진왜란이 일어났다. 신립 장군이 이 절벽 아래 강을 등지고 배수진을 쳤다. 왜군과의 전투에서 패해 남한강에 투신해 순국했다. 우륵의 음악과 신립의 의리가 함께 담긴 역사의 공간이다. 명승 제42호.',char_count:261,emotion_keywords_used:['기억','낭만']},
   hooks:['가야금이 처음 연주된 절벽','우륵이 가야금 탄 소나무숲','신립 장군의 배수진 현장','음악과 역사가 겹친 절벽','임진왜란 순국 현장'],
   thumbnails:['가야금 처음 연주','우륵의 소나무숲','신립 배수진','음악과 역사','임진왜란 순국'],
   captions:{youtube:'충주 탄금대 | 우륵이 가야금 탄 절벽 — 임진왜란 신립 배수진 현장. 충북 충주시. #탄금대 #우륵 #임진왜란',instagram:'가야금이 처음 연주된 절벽에서 임진왜란 장군이 전사했다 🎵 충주 탄금대.',tiktok:'가야금 연주한 절벽에서 임진왜란 장군이 전사한 충주 탄금대 #탄금대 #우륵 #역사',xiaohongshu:'忠州弹琴台 🎵 于勒弹奏伽倻琴的悬崖 | 壬辰倭乱申砬背水阵现场 | 忠北忠州 #弹琴台 #于勒 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#충청북도','#임진왜란','#명승'],place_specific:['#탄금대','#우륵','#신립','#충주']},
   map_card_intro:'가야금의 우륵과 임진왜란 신립 장군의 역사가 겹친 남한강 절벽 — 명승 제42호'},
  {place_id:'GK-CB-SAE-0001',place_name:'청주 흥덕사지',
   script_30s:{text:'세계 최초 금속활자 인쇄본 직지심체요절이 만들어진 곳. 1377년 이 절에서 금속활자로 직지를 인쇄했다. 구텐베르크보다 78년 앞선 세계 최초의 금속활자 인쇄물이다.',char_count:83,emotion_keywords_used:['발명','기억']},
   script_60s:{text:'충북 청주에 고려 시대 절터가 있다. 흥덕사지다. 이 절이 유명한 이유는 단 하나다. 1377년 이 절에서 금속활자로 직지심체요절을 인쇄했다. 직지는 불교 선사들의 가르침을 모은 책이다. 그런데 이 책이 세계 최초의 금속활자 인쇄본이다. 구텐베르크 성경보다 78년 앞선다. 현재 직지는 프랑스 국립도서관에 있다. 지금은 절터에 청주고인쇄박물관이 있어 직지의 역사와 금속활자 제작 과정을 볼 수 있다. 유네스코 세계기록유산.',char_count:267,emotion_keywords_used:['발명','기억']},
   hooks:['구텐베르크보다 78년 앞선 금속활자','세계 최초 금속활자 인쇄본 직지','직지가 만들어진 절터','프랑스 도서관에 있는 한국 보물','유네스코 세계기록유산'],
   thumbnails:['세계 최초 금속활자','구텐베르크보다 78년','직지 탄생지','프랑스에 있는 직지','유네스코'],
   captions:{youtube:'청주 흥덕사지 | 구텐베르크보다 78년 앞선 세계 최초 금속활자 직지 탄생지. 충북 청주시. #흥덕사지 #직지 #세계최초',instagram:'구텐베르크보다 78년 앞선 세계 최초 금속활자 직지가 여기서 만들어졌다 📖 청주 흥덕사지.',tiktok:'구텐베르크보다 78년 앞선 세계 최초 금속활자 인쇄한 절터가 청주에 있음 #직지 #흥덕사지 #세계최초',xiaohongshu:'清州兴德寺址 📖 比古腾堡早78年的世界最早金属活字印刷《直指》诞生地 | 联合国教科文组织世界记录遗产 | 忠北清州 #直指 #世界最早 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#충청북도','#직지','#세계최초'],place_specific:['#흥덕사지','#직지','#금속활자','#청주']},
   map_card_intro:'구텐베르크보다 78년 앞선 세계 최초 금속활자 인쇄본 직지가 만들어진 곳 — 유네스코 세계기록유산'},
  {place_id:'GK-CB-BIS-0001',place_name:'충주 중원고구려비',
   script_30s:{text:'고구려가 한반도 중부까지 진출했다는 증거. 5세기 고구려가 세운 비석이 충주에서 발견됐다. 한강 유역을 차지한 고구려의 흔적이 충청도 땅에 남아 있다는 놀라운 사실.',char_count:79,emotion_keywords_used:['발견','기억']},
   script_60s:{text:'충북 충주에 고구려 비석이 있다. 중원고구려비다. 5세기 고구려 장수왕 때 세워진 것으로 추정된다. 고구려가 한반도 중부까지 진출했음을 보여주는 유일한 석비다. 비석에는 고구려가 신라와의 관계를 기록했다. 당시 고구려는 남한강 유역까지 세력권을 넓혔다. 1979년 발견됐다. 비석 안에 새겨진 글씨가 온전히 해독되지 않아 연구가 계속되고 있다. 국보 제205호. 고구려의 남진 정책을 보여주는 한반도 중부의 역사 증거물이다.',char_count:264,emotion_keywords_used:['발견','기억']},
   hooks:['고구려가 충주까지 왔다는 증거','5세기 고구려 비석 충주에서 발견','한강 유역 고구려 지배의 흔적','1979년 발견된 국보','해독 안 된 글씨가 있다'],
   thumbnails:['충주의 고구려 비석','5세기 증거','한강 지배 흔적','1979년 발견','국보 205호'],
   captions:{youtube:'충주 중원고구려비 | 고구려가 충주까지 왔다 — 5세기 비석 국보. 충북 충주시. #중원고구려비 #고구려 #충주',instagram:'5세기 고구려가 충주까지 왔다는 비석이 있다 🗿 중원고구려비, 국보 205호.',tiktok:'고구려가 충주까지 왔다는 비석 발견된 거 알아? #중원고구려비 #고구려 #역사',xiaohongshu:'忠州中原高句丽碑 🗿 5世纪高句丽进入忠清道的唯一石碑 | 国宝205号 | 忠北忠州 #高句丽碑 #高句丽 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#충청북도','#고구려','#삼국시대'],place_specific:['#중원고구려비','#고구려','#충주','#국보']},
   map_card_intro:'고구려가 한강 중부까지 진출했음을 증명하는 5세기 석비 — 국보 제205호'},
  {place_id:'GK-CB-SAN-0002',place_name:'청주 상당산성',
   script_30s:{text:'청주 외곽에 있는 조선 시대 산성. 삼국 시대부터 요새로 쓰였고 조선 때 지금의 모습으로 정비됐다. 4.4km 성벽을 따라 걷는 산책로가 일품이고 성 안에 마을과 저수지가 있다.',char_count:80,emotion_keywords_used:['기억','자연']},
   script_60s:{text:'충북 청주 동쪽에 산성이 있다. 상당산성이다. 삼국 시대부터 방어 요새로 사용됐고, 조선 숙종 때 지금의 모습으로 대대적으로 정비됐다. 성의 둘레는 4.4km. 성벽을 따라 걷는 코스가 청주 시민들에게 인기 있는 산책로다. 성 안에 마을이 있고 저수지도 있다. 옛 성 안에서 사람이 사는 독특한 구조다. 사계절 내내 방문할 수 있으며 특히 단풍 때가 아름답다. 사적 제212호.',char_count:258,emotion_keywords_used:['기억','자연']},
   hooks:['성 안에 마을이 있는 산성','4.4km 성벽 산책로','삼국 시대부터 쓰인 요새','청주 시민의 단풍 명소','조선 숙종이 정비한 성'],
   thumbnails:['성 안 마을','4.4km 성벽길','삼국 시대 요새','단풍 명소','조선 산성'],
   captions:{youtube:'청주 상당산성 | 성 안에 마을이 있는 조선 산성 — 4.4km 성벽 산책. 충북 청주시. #상당산성 #청주 #산성',instagram:'성 안에 마을이 있는 청주 상당산성 🏯 4.4km 성벽 산책로.',tiktok:'성 안에 마을이 있는 청주 상당산성 알아? #상당산성 #청주 #조선산성',xiaohongshu:'清州上党山城 🏯 城内有村庄的朝鲜山城 | 4.4km城墙散步道 | 忠北清州 #上党山城 #清州 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#충청북도','#조선역사','#산성'],place_specific:['#상당산성','#청주','#산성','#사적']},
   map_card_intro:'성 안에 마을이 있는 삼국 시대 요새 — 조선 숙종이 정비한 4.4km 성벽 산성'}
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
console.log('C모드 27차: '+updated+'개 / 누적 '+lib.total+'개');
ids.forEach((id,i)=>console.log('  C+ ['+id+'] '+scripts[i].place_name));
