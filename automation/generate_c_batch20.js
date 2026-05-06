const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const scripts = [
  {place_id:'GK-JB-SAJ-0001',place_name:'익산 미륵사지',
   script_30s:{text:'백제 무왕이 세운 한국 최대의 사찰 터. 9층 목탑 3개가 있었다. 동탑지 옆에 석탑이 남아 있는데, 2001년 보수 중 내부에서 사리장엄이 발견됐다. 유네스코 세계유산.',char_count:81,emotion_keywords_used:['발견','기억']},
   script_60s:{text:'전북 익산에 드넓은 사찰 터가 있다. 미륵사지다. 백제 무왕이 7세기 초 창건한 한국 최대 규모의 사찰이었다. 서탑·동탑·중탑 세 개의 탑을 나란히 세운 독특한 구조였다. 동탑은 이미 없어졌고 중탑은 복원됐다. 그리고 서쪽 석탑. 2001년 보수 공사 중 탑 내부에서 사리장엄구가 발견됐다. 금제 사리봉안기에 무왕의 왕비인 사택씨가 탑을 건립했다는 기록이 있었다. 역사 연구의 지평을 바꾼 발견이었다. 유네스코 세계유산.',char_count:263,emotion_keywords_used:['발견','기억']},
   hooks:['백제 최대 사찰 터에서 사리 발견','무왕 왕비의 탑 건립 기록','한국 최대 사찰의 거대한 터','세 개의 탑이 나란한 독특한 구조','유네스코 백제역사유적지구'],
   thumbnails:['사리장엄 발견','무왕 왕비의 기록','최대 사찰 터','세 탑 구조','유네스코'],
   captions:{youtube:'익산 미륵사지 | 백제 최대 사찰 — 보수 중 발견된 사리장엄, 무왕 왕비의 기록. 전북 익산시. #미륵사지 #백제 #유네스코',instagram:'탑 보수하다 발견된 백제 무왕 왕비의 기록 🏛️ 익산 미륵사지, 유네스코 세계유산.',tiktok:'백제 탑 보수하다 무왕 왕비 기록 나왔는데 역사 뒤집혔음 #미륵사지 #백제 #역사',xiaohongshu:'益山弥勒寺址 🏛️ 百济最大寺院遗址 | 修缮中发现武王王妃建塔记录 | 联合国教科文组织 | 全北益山 #弥勒寺址 #百济历史'},
   hashtags:{korean:['#한국역사','#역사여행','#전라북도','#백제역사','#유네스코'],place_specific:['#미륵사지','#백제','#익산','#사리장엄']},
   map_card_intro:'보수 중 사리장엄이 발견된 백제 최대 사찰 터 — 유네스코 세계유산'},
  {place_id:'GK-JB-SAE-0002',place_name:'익산 왕궁리 유적',
   script_30s:{text:'백제 무왕의 왕궁 터. 익산에 새 수도를 건설하려 했던 흔적이다. 궁성, 정원, 공방 터가 발굴됐다. 한가운데 고려 시대 오층석탑이 서 있다. 유네스코 세계유산.',char_count:79,emotion_keywords_used:['기억','발견']},
   script_60s:{text:'익산 중심에 직사각형의 유적지가 있다. 왕궁리 유적이다. 백제 무왕이 7세기 익산에 새 왕궁을 건설하려 한 흔적이다. 발굴 결과 궁성·정원·공방 터가 나왔다. 금과 유리를 다루던 공방 터도 발견됐다. 백제 왕실의 사치스러운 물질문화를 보여주는 증거들이다. 유적지 한가운데에는 고려 시대 오층석탑이 서 있다. 이 탑은 국보다. 백제의 왕궁 터 위에 고려가 절을 세웠고, 그 탑이 지금까지 남아 있다. 유네스코 세계유산.',char_count:261,emotion_keywords_used:['기억','발견']},
   hooks:['백제 왕이 새 수도 건설한 터','금·유리 공방 터가 발굴됐다','왕궁 위에 세운 고려 국보 탑','무왕의 두 번째 수도 꿈','유네스코 백제역사유적지구'],
   thumbnails:['백제 왕궁 터','금 공방 발굴','고려 국보 탑','두 번째 수도','유네스코'],
   captions:{youtube:'익산 왕궁리 유적 | 백제 무왕의 새 수도 건설 터 — 국보 오층석탑, 유네스코. 전북 익산시. #왕궁리유적 #백제 #유네스코',instagram:'백제 왕궁 터에 고려 국보 탑이 서 있다 🗿 익산 왕궁리 유적, 유네스코 세계유산.',tiktok:'백제 왕궁 터에 고려 탑이 왜 있는지 알아? #왕궁리유적 #백제 #역사',xiaohongshu:'益山王宫里遗址 🗿 百济武王新都建设遗址 | 百济王宫上建起的高丽国宝塔 | 联合国教科文组织 | 全北益山 #王宫里遗址 #百济历史'},
   hashtags:{korean:['#한국역사','#역사여행','#전라북도','#백제역사','#유네스코'],place_specific:['#왕궁리유적','#백제','#익산','#오층석탑']},
   map_card_intro:'백제 무왕의 새 수도 건설 흔적 — 왕궁 터 위에 세운 고려 국보 탑'},
  {place_id:'GK-JB-SAE-0003',place_name:'남원 광한루원',
   script_30s:{text:'춘향전의 배경이 된 정원. 이몽룡과 성춘향이 처음 만난 광한루에서 그네를 타던 춘향. 조선 시대부터 이어온 정원에 지금도 봄이면 꽃이 피고, 춘향제가 열린다.',char_count:79,emotion_keywords_used:['사랑','전통','낭만']},
   script_60s:{text:'남원에 조선 시대 정원이 있다. 광한루원이다. 1434년 조성된 인공 연못과 세 개의 섬, 누각이 어우러진 아름다운 공간이다. 이 정원이 특별한 것은 춘향전의 배경이기 때문이다. 이몽룡이 광한루에 올라 그네 타는 성춘향을 처음 봤다. 두 사람의 사랑 이야기가 펼쳐진 공간이다. 춘향전은 조선 시대 최고의 인기 소설이었다. 지금도 매년 5월 춘향제가 열리고, 춘향을 기리는 사당 춘향사도 있다. 사적 제303호.',char_count:261,emotion_keywords_used:['사랑','전통','낭만']},
   hooks:['춘향전의 배경이 된 정원','이몽룡이 춘향 처음 본 그 누각','1434년 조성된 조선 정원','매년 5월 춘향제','사랑의 성지 광한루'],
   thumbnails:['춘향전 배경','이몽룡의 광한루','조선 정원','춘향제','사랑의 누각'],
   captions:{youtube:'남원 광한루원 | 춘향전 이몽룡이 춘향 처음 본 그 누각 — 조선 사랑의 정원. 전북 남원시. #광한루원 #춘향전 #남원',instagram:'이몽룡이 춘향을 처음 봤다는 그 누각 🏯 남원 광한루원, 춘향전의 배경.',tiktok:'춘향전 실제 배경지 광한루원 알고 있었음? #광한루원 #춘향전 #남원',xiaohongshu:'南原广寒楼苑 🏯 春香传中李梦龙初遇成春香的楼阁 | 朝鲜时代庭园 | 全北南原 #广寒楼 #春香传 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#전라북도','#조선역사','#춘향전'],place_specific:['#광한루원','#춘향전','#남원','#광한루']},
   map_card_intro:'춘향전에서 이몽룡과 성춘향이 처음 만난 1434년 조성 조선의 정원'},
  {place_id:'GK-JB-DOK-0001',place_name:'정읍 황토현 전적지',
   script_30s:{text:'1894년 동학농민혁명의 첫 승리. 농민군이 관군을 격파한 황토현 전투 현장이다. 조선 봉건 체제에 저항한 민중 혁명의 불꽃이 여기서 타올랐다. 사적 제295호.',char_count:78,emotion_keywords_used:['저항','혁명','기억']},
   script_60s:{text:'1894년 5월, 전북 정읍 황토현. 동학농민군이 관군과 첫 전면 전투를 벌였다. 그리고 이겼다. 황토현 전투다. 전봉준이 이끄는 농민군이 조선 관군을 격파한 역사적인 승리였다. 이 승리로 동학농민혁명이 본격적으로 불붙었다. 반봉건·반외세의 깃발을 든 조선 최대의 민중 봉기였다. 결국 진압됐지만 갑오개혁으로 이어지고 조선 근대화의 물꼬를 텄다. 지금은 동학농민혁명기념관과 함께 전적지가 조성되어 있다.',char_count:259,emotion_keywords_used:['저항','혁명','기억']},
   hooks:['동학농민군이 관군을 이긴 그 전투','전봉준의 첫 승리','조선 최대 민중 봉기의 현장','반봉건 반외세의 깃발','갑오개혁으로 이어진 혁명'],
   thumbnails:['동학 첫 승리','전봉준의 현장','민중 봉기','반봉건 깃발','갑오개혁으로'],
   captions:{youtube:'정읍 황토현 전적지 | 동학농민군이 관군을 이긴 첫 전투 현장. 전북 정읍시. #황토현 #동학농민혁명 #전봉준',instagram:'동학농민군이 관군을 처음 이긴 전투 현장 ⚡ 정읍 황토현.',tiktok:'1894년 동학농민군이 관군 이긴 첫 전투 현장 여기임 #황토현 #동학농민혁명 #역사',xiaohongshu:'井邑黄土峴战迹地 ⚡ 东学农民军击败官军的首次战役现场 | 全北井邑 #黄土峴 #东学农民革命 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#전라북도','#동학농민혁명','#조선근대'],place_specific:['#황토현','#전봉준','#동학','#정읍']},
   map_card_intro:'동학농민군이 관군을 격파한 1894년 첫 승전 현장 — 조선 최대 민중 혁명의 불꽃'},
  {place_id:'GK-JB-SAN-0001',place_name:'무주 적상산성',
   script_30s:{text:'전북 무주 덕유산 국립공원 안에 있는 고려·조선 시대 산성. 산 정상부를 성벽으로 두른 포곡식 산성이다. 조선 시대 실록을 보관하던 사고가 있었고, 지금은 안국사와 적상호 저수지가 있다.',char_count:89,emotion_keywords_used:['기억','보존']},
   script_60s:{text:'전북 무주 덕유산 국립공원 안에 산성이 있다. 적상산성이다. 해발 1,034m의 적상산 정상부 둘레에 성벽을 두른 포곡식 산성이다. 고려 시대부터 요새로 활용됐고 조선 시대에 정비됐다. 이 산성에 조선왕조실록을 보관하던 적상산사고가 있었다. 전란을 피해 산속에 실록을 보관한 것이다. 지금은 산성 안에 안국사와 적상호 저수지가 있다. 양수발전소 건설로 만들어진 인공 저수지다. 단풍 명소로도 유명하다.',char_count:258,emotion_keywords_used:['기억','보존']},
   hooks:['덕유산 안 고려·조선 산성','조선왕조실록 보관하던 사고','해발 1034m 포곡식 산성','적상호 저수지 단풍 명소','실록을 지킨 산'],
   thumbnails:['고려 조선 산성','실록 사고','1034m 요새','적상호 단풍','실록을 지킨 곳'],
   captions:{youtube:'무주 적상산성 | 조선왕조실록을 산 속에 보관하던 사고 — 덕유산 단풍 명소. 전북 무주군. #적상산성 #조선왕조실록 #무주',instagram:'조선왕조실록을 산속에 보관하던 성 🏯 무주 적상산성, 덕유산 단풍 명소.',tiktok:'조선왕조실록을 산 속 성에 보관했는데 이게 그 성임 #적상산성 #조선왕조실록 #역사',xiaohongshu:'茂朱赤裳山城 🏯 保管朝鲜王朝实录的山中史库 | 德裕山枫叶名所 | 全北茂朱 #赤裳山城 #朝鲜王朝实录 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#전라북도','#조선역사','#단풍'],place_specific:['#적상산성','#조선왕조실록','#무주','#덕유산']},
   map_card_intro:'조선왕조실록을 보관하던 덕유산 안 1,034m 산성 — 단풍 명소'}
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
console.log('C모드 20차: '+updated+'개 / 누적 '+lib.total+'개');
ids.forEach((id,i)=>console.log('  C+ ['+id+'] '+scripts[i].place_name));
