const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const scripts = [
  {place_id:'GK-CN-SAN-0002',place_name:'부여 부소산성',
   script_30s:{text:'백제의 마지막 왕성. 서기 660년, 나·당 연합군이 쳐들어오자 3,000명의 궁녀가 이 낙화암에서 뛰어내렸다. 그 이야기가 전설이 되고, 부소산성은 백제의 마지막을 간직하고 있다.',char_count:91,emotion_keywords_used:['희생','멸망','기억']},
   script_60s:{text:'서기 660년, 나당연합군이 백제의 마지막 수도 사비로 쳐들어왔다. 부소산성은 그 최후의 방어선이었다. 전설에 따르면 3,000명의 궁녀가 낙화암에서 백마강으로 뛰어내렸다. 꽃처럼 떨어졌다 하여 낙화암이다. 사실 여부와 상관없이 이 이야기는 백제 멸망의 비극을 상징하는 이미지가 됐다. 부소산성에는 삼충사·사자루·영일루·반월루 등이 있고, 백마강이 내려다보이는 경관이 아름답다. 백제역사유적지구 유네스코 세계유산.',char_count:260,emotion_keywords_used:['희생','멸망','기억']},
   hooks:['3000명 궁녀가 뛰어내린 낙화암','백제의 마지막 왕성','백마강 내려다보이는 부소산','660년 그날의 비극','유네스코 백제역사유적지구'],
   thumbnails:['낙화암의 전설','백제 최후의 성','3000명 궁녀','백마강 전망','유네스코'],
   captions:{youtube:'부여 부소산성 | 3000 궁녀가 뛰어내린 낙화암 — 백제의 마지막 왕성. 충남 부여군. #부소산성 #낙화암 #백제',instagram:'3000명 궁녀가 뛰어내렸다는 낙화암 🌸 부소산성, 백제의 마지막.',tiktok:'백제 마지막 날 3000명 궁녀가 여기서 뛰어내렸음 #낙화암 #부소산성 #백제',xiaohongshu:'扶余扶苏山城 🌸 3000宫女跳崖的落花岩 | 百济最后的王城 | 联合国教科文组织 | 忠南扶余 #落花岩 #扶苏山城 #百济历史'},
   hashtags:{korean:['#한국역사','#역사여행','#충청남도','#백제역사','#유네스코'],place_specific:['#부소산성','#낙화암','#백제','#부여']},
   map_card_intro:'3,000 궁녀의 전설 낙화암이 있는 백제 마지막 왕성 — 유네스코 세계유산'},
  {place_id:'GK-CN-SAJ-0001',place_name:'부여 정림사지 오층석탑',
   script_30s:{text:'백제가 만든 가장 아름다운 탑. 지금도 제자리에 서 있다. 1400년이 넘었다. 백제 멸망 후 당나라 장수 소정방이 이 탑에 자기 이름을 새겼다. 그게 지금도 남아 있다.',char_count:84,emotion_keywords_used:['기억','치욕']},
   script_60s:{text:'부여 한가운데 서 있는 5층 석탑. 국보다. 백제 시대, 아마 6세기에 세워진 것으로 추정된다. 목탑의 형태를 돌로 구현했는데 비례와 조형이 빼어나다. 1400년이 넘었다. 그런데 이 탑에는 지워지지 않는 글자가 새겨져 있다. 서기 660년 백제를 멸망시킨 당나라 장수 소정방이 전승 기념으로 자기 이름을 탑에 새긴 것이다. 치욕의 기록이 함께 새겨진 탑이다. 유네스코 세계유산.',char_count:263,emotion_keywords_used:['기억','치욕']},
   hooks:['1400년 된 백제의 탑','당나라 장수가 이름 새긴 탑','백제 멸망의 치욕이 새겨진 곳','국보 9호 부여 석탑','목탑 형태를 돌로 구현'],
   thumbnails:['1400년 백제 석탑','소정방의 이름','치욕의 기록','국보 9호','유네스코'],
   captions:{youtube:'부여 정림사지 오층석탑 | 백제 멸망의 치욕이 새겨진 1400년 석탑 — 국보·유네스코. 충남 부여군. #정림사지 #오층석탑 #백제',instagram:'백제가 만든 탑에 당나라 장수가 이름을 새겼다 🗿 정림사지 오층석탑, 국보.',tiktok:'백제 탑에 당나라 장수가 자기 이름 새긴 거 실제임 #정림사지 #백제 #역사',xiaohongshu:'扶余定林寺五层石塔 🗿 刻有唐将苏定方名字的百济石塔 | 韩国国宝·联合国教科文组织 | 忠南扶余 #定林寺 #百济历史'},
   hashtags:{korean:['#한국역사','#역사여행','#충청남도','#백제역사','#유네스코'],place_specific:['#정림사지','#오층석탑','#백제','#부여']},
   map_card_intro:'백제 멸망의 치욕이 새겨진 1400년 된 국보 석탑 — 유네스코 세계유산'},
  {place_id:'GK-CN-GOB-0001',place_name:'부여 능산리 고분군',
   script_30s:{text:'부여 나성 밖에 백제 왕들의 무덤이 모여 있다. 7기의 고분이 두 줄로 서 있다. 1993년 이 고분군 옆 절터에서 국보 백제금동대향로가 발견됐다. 유네스코 세계유산.',char_count:82,emotion_keywords_used:['발견','기억']},
   script_60s:{text:'백제의 마지막 수도 사비 도성 밖에 왕릉들이 모여 있다. 부여 능산리 고분군이다. 7기의 고분이 두 줄로 늘어선 형태다. 고분 내부에는 사신도 등 벽화가 그려져 있었다. 그런데 1993년, 이 고분군 바로 옆 절터에서 놀라운 유물이 발견됐다. 백제금동대향로다. 국보 287호. 용과 봉황이 정교하게 조각된 향로로 백제 금속 공예의 최고 수준을 보여준다. 지금은 국립부여박물관에 있다. 유네스코 세계유산.',char_count:263,emotion_keywords_used:['발견','기억']},
   hooks:['백제 금동대향로가 여기서 나왔다','백제 왕들의 무덤 7기','사신도 벽화의 왕릉','1993년 우연한 발견','유네스코 백제역사유적지구'],
   thumbnails:['금동대향로 발견지','백제 왕릉','사신도 벽화','7기의 고분','유네스코'],
   captions:{youtube:'부여 능산리 고분군 | 국보 백제금동대향로 발견지 — 백제 왕릉 7기. 충남 부여군. #능산리고분군 #백제금동대향로 #백제',instagram:'백제금동대향로가 이 무덤 옆에서 나왔다 🏺 능산리 고분군, 유네스코 세계유산.',tiktok:'국보 백제금동대향로 이 무덤 옆에서 발견됐음 #능산리고분군 #백제 #역사',xiaohongshu:'扶余陵山里古坟群 🏺 百济金铜大香炉出土地 | 百济王陵7基 | 联合国教科文组织 | 忠南扶余 #陵山里 #百济历史'},
   hashtags:{korean:['#한국역사','#역사여행','#충청남도','#백제역사','#유네스코'],place_specific:['#능산리고분군','#백제금동대향로','#백제','#부여']},
   map_card_intro:'국보 백제금동대향로가 발견된 백제 왕릉군 — 유네스코 세계유산'},
  {place_id:'GK-CN-SAE-0001',place_name:'부여 궁남지',
   script_30s:{text:'서기 634년, 백제 무왕이 만든 인공 연못. 한국에서 가장 오래된 인공 연못이다. 여름이면 연꽃이 가득 피어난다. 무왕과 선화공주의 사랑 이야기가 깃든 곳이다.',char_count:82,emotion_keywords_used:['기억','사랑']},
   script_60s:{text:'백제 무왕 635년에 만들어진 인공 연못. 한국 최고(最古)의 인공 정원이다. 삼국사기에 연못 서쪽에 봉래산을 본떠 섬을 만들고 연못 주변에 버드나무를 심었다는 기록이 있다. 무왕은 서동요의 주인공이다. 신라 선화공주와의 사랑으로 왕이 됐다는 이야기. 이 연못은 그 무왕이 만든 것이다. 지금도 여름마다 연꽃이 가득 피어나는데, 연꽃 개화 시기에 서동축제가 열린다. 백제역사유적지구 유네스코 세계유산.',char_count:262,emotion_keywords_used:['기억','사랑']},
   hooks:['한국 최고(最古) 인공 연못','서동요 무왕이 만들었다','선화공주의 왕과 연못','여름 연꽃이 장관인 곳','유네스코 백제역사유적지구'],
   thumbnails:['한국 최고 인공 연못','서동요 무왕','선화공주의 사랑','여름 연꽃','유네스코'],
   captions:{youtube:'부여 궁남지 | 서동요 무왕이 만든 한국 최고(最古) 인공 연못 — 연꽃 명소. 충남 부여군. #궁남지 #무왕 #백제',instagram:'서동요 주인공 무왕이 만든 연못 🪷 궁남지, 한국 최고 인공 정원.',tiktok:'서동요 그 무왕이 만든 연못 실제로 있음 #궁남지 #서동요 #백제',xiaohongshu:'扶余宫南池 🪷 薯童谣武王修建的韩国最古人工莲池 | 夏日莲花胜地 | 联合国教科文组织 | 忠南扶余 #宫南池 #百济历史'},
   hashtags:{korean:['#한국역사','#역사여행','#충청남도','#백제역사','#연꽃'],place_specific:['#궁남지','#무왕','#서동요','#부여']},
   map_card_intro:'서동요의 무왕이 만든 한국 최고(最古) 인공 연못 — 여름 연꽃 명소'},
  {place_id:'GK-CN-SAJ-0002',place_name:'서산 용현리 마애여래삼존상',
   script_30s:{text:'백제의 미소. 6~7세기 백제 불상. 바위에 새긴 거대한 마애불인데, 빛의 방향에 따라 표정이 달라진다. 아침 햇살에 가장 아름다운 미소를 띤다. 국보.',char_count:79,emotion_keywords_used:['아름다움','기억']},
   script_60s:{text:'충남 서산 가야산 계곡 바위에 거대한 불상 셋이 새겨져 있다. 서산 마애여래삼존상이다. 6~7세기 백제 불상으로 추정된다. 중앙의 여래상, 오른쪽의 보살상, 왼쪽의 반가사유상이다. 이 불상의 특징은 표정이다. 입가에 살짝 걸린 미소. 백제의 미소라 불린다. 신기한 것은 빛의 방향에 따라 표정이 달라진다는 것이다. 아침에는 환하게 웃고, 오후에는 고요해지고, 저녁에는 신비로워진다. 국보.',char_count:259,emotion_keywords_used:['아름다움','기억']},
   hooks:['빛에 따라 표정이 달라지는 불상','백제의 미소로 유명','6세기 바위에 새긴 불상','아침 햇살에 가장 아름다운','서산 가야산 계곡의 국보'],
   thumbnails:['백제의 미소','빛에 따라 달라지는 표정','6세기 마애불','아침 햇살','국보'],
   captions:{youtube:'서산 마애여래삼존상 | 빛에 따라 표정 달라지는 백제의 미소 — 국보. 충남 서산시. #마애여래삼존상 #백제의미소 #서산',instagram:'빛의 방향에 따라 표정이 달라지는 불상 😊 서산 마애여래삼존상, 백제의 미소.',tiktok:'빛 방향에 따라 불상 표정이 달라지는 거 실제임 #마애여래삼존상 #백제의미소 #역사',xiaohongshu:'瑞山龙贤里磨崖如来三尊像 😊 随光线变化表情的百济微笑 | 韩国国宝 | 忠南瑞山 #百济微笑 #磨崖佛 #百济历史'},
   hashtags:{korean:['#한국역사','#역사여행','#충청남도','#백제역사','#불교'],place_specific:['#마애여래삼존상','#백제의미소','#서산','#마애불']},
   map_card_intro:'빛에 따라 표정이 달라지는 백제의 미소 — 서산 국보 마애여래삼존상'}
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
console.log('C모드 16차: '+updated+'개 / 누적 '+lib.total+'개');
ids.forEach((id,i)=>console.log('  C+ ['+id+'] '+scripts[i].place_name));
