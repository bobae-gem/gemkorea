const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const scripts = [
  {place_id:'GK-JN-DOK-0001',place_name:'광주 5·18 민주광장',
   script_30s:{text:'1980년 5월. 전두환 신군부에 맞서 광주 시민들이 일어섰다. 민주주의를 외치며 거리에 나선 시민들이 총에 맞아 죽었다. 이 광장에서 수십 년이 흘렀다. 유네스코 세계기록유산.',char_count:78,emotion_keywords_used:['저항','희생','기억']},
   script_60s:{text:'1980년 5월 18일, 광주. 계엄령 해제와 전두환 퇴진을 요구한 학생 시위대에 공수부대가 무력으로 진압했다. 시민들이 거리로 나왔다. 계엄군의 총이 시민을 향했다. 열흘간의 항쟁에서 165명이 공식 사망했고, 600명이 넘는 사람이 행방불명됐다. 5·18 민주화운동이다. 이 사건은 한국 민주주의 역사의 전환점이 됐다. 지금 옛 전남도청 앞 광장이 5·18 민주광장이다. 유네스코 세계기록유산.',char_count:266,emotion_keywords_used:['저항','희생','기억']},
   hooks:['1980년 5월 광주가 일어섰다','시민에게 총을 겨눈 계엄군','165명이 이 광장에서 죽었다','한국 민주주의의 전환점','유네스코 세계기록유산'],
   thumbnails:['광주가 일어섰다','계엄군과 시민','165명의 희생','민주주의 전환점','유네스코'],
   captions:{youtube:'광주 5.18 민주광장 | 1980년 5월 계엄군에 맞선 광주 — 한국 민주주의 전환점. 광주 동구. #5.18민주화운동 #광주 #민주주의',instagram:'1980년 5월 광주가 일어섰다 ✊ 5·18 민주광장, 한국 민주주의의 전환점.',tiktok:'1980년 5월 광주에서 일어난 일 알아? 한국 민주주의 역사 #5.18 #광주 #역사',xiaohongshu:'光州5.18民主广场 ✊ 1980年5月光州民主化运动的现场 | 韩国民主主义的转折点 | 联合国教科文组织世界记录遗产 | 光州东区 #5.18 #光州 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#광주','#민주화운동','#5.18'],place_specific:['#5.18민주광장','#광주','#민주화운동','#유네스코']},
   map_card_intro:'1980년 5월 계엄군에 맞서 민주주의를 외친 광주 시민들의 항쟁 현장'},
  {place_id:'GK-GN-JEN-0001',place_name:'통영 한산도 제승당',
   script_30s:{text:'1592년 이순신이 한산대첩을 이끈 섬. 그 섬에 삼도수군통제영의 본부가 있었다. 제승당은 이순신이 전략을 짜고 난중일기를 쓴 공간이다. 지금도 배를 타야만 갈 수 있다.',char_count:80,emotion_keywords_used:['헌신','기억']},
   script_60s:{text:'경남 통영 앞바다에 한산도가 있다. 1592년 임진왜란 한산대첩의 현장이다. 이순신이 학익진으로 왜군을 궤멸시킨 해전이다. 그 이후 이순신은 이 섬에 삼도수군통제영을 설치했다. 한반도 남해안 전체의 해군 사령부였다. 제승당은 이순신이 집무하고 난중일기를 쓴 건물이다. 제승이란 이긴다는 뜻이다. 지금도 한산도에는 통영 항에서 배를 타고 가야 한다. 섬 전체가 이순신의 흔적이다.',char_count:258,emotion_keywords_used:['헌신','기억']},
   hooks:['한산대첩 승리한 이순신의 섬','학익진으로 왜군 궤멸','난중일기 쓴 집무실','배 타야만 갈 수 있다','삼도수군통제영 본부'],
   thumbnails:['한산대첩의 섬','학익진','난중일기 집무실','배로만 가는 섬','수군 사령부'],
   captions:{youtube:'통영 한산도 제승당 | 학익진 한산대첩 — 이순신이 난중일기 쓴 삼도수군통제영. 경남 통영시. #제승당 #한산도 #이순신',instagram:'한산대첩 이긴 이순신이 난중일기 쓴 곳 ⚓ 통영 한산도 제승당.',tiktok:'이순신 난중일기 쓴 진짜 장소가 여기임 배 타야 감 #제승당 #한산도 #이순신',xiaohongshu:'统营闲山岛制胜堂 ⚓ 李舜臣鹤翼阵大捷现场 | 撰写乱中日记的三道水军统制营 | 庆南统营 #制胜堂 #闲山岛 #李舜臣'},
   hashtags:{korean:['#한국역사','#역사여행','#경상남도','#이순신','#임진왜란'],place_specific:['#제승당','#한산도','#이순신','#한산대첩']},
   map_card_intro:'한산대첩 승리 후 이순신이 난중일기를 쓴 삼도수군통제영 — 배 타고 가는 역사 섬'},
  {place_id:'GK-GN-SAE-0001',place_name:'고성 공룡발자국 화석지',
   script_30s:{text:'약 1억 년 전 공룡들이 걸어 다닌 흔적이 경남 고성 해안에 남아 있다. 세계 3대 공룡 발자국 화석지 중 하나. 물이 빠져야 발자국이 드러난다. 천연기념물 제411호.',char_count:78,emotion_keywords_used:['경이','기억']},
   script_60s:{text:'경남 고성 해안가 바위에 발자국들이 새겨져 있다. 약 1억 년 전 백악기 공룡들이 남긴 흔적이다. 초식 공룡과 육식 공룡의 발자국이 함께 있다. 이곳이 세계 3대 공룡 발자국 화석지 중 하나다. 나머지는 미국 콜로라도와 캐나다 앨버타다. 밀물 때는 바닷물에 잠기고 썰물 때 발자국이 드러난다. 고성군 덕명리부터 하이면까지 해안선을 따라 발자국이 분포한다. 천연기념물 제411호.',char_count:256,emotion_keywords_used:['경이','기억']},
   hooks:['1억 년 전 공룡 발자국','세계 3대 공룡 화석지','썰물 때만 볼 수 있다','초식 육식 공룡 함께','미국·캐나다와 나란히'],
   thumbnails:['1억 년 전 발자국','세계 3대 화석지','썰물에 드러나는','초식 육식 공룡','천연기념물'],
   captions:{youtube:'고성 공룡발자국 화석지 | 세계 3대 공룡 발자국 — 썰물 때만 볼 수 있다. 경남 고성군. #고성공룡 #공룡발자국 #천연기념물',instagram:'1억 년 전 공룡이 여기를 걸어 다녔다 🦕 고성 공룡발자국 화석지, 세계 3대.',tiktok:'경남 고성 바닷가에 1억 년 전 공룡 발자국 실제로 있음 #공룡발자국 #고성 #천연기념물',xiaohongshu:'固城恐龙脚印化石地 🦕 1亿年前恐龙脚印 | 世界三大恐龙脚印化石地 | 退潮才能看见 | 庆南固城 #恐龙脚印 #化石 #韩国旅游'},
   hashtags:{korean:['#한국역사','#역사여행','#경상남도','#공룡','#천연기념물'],place_specific:['#고성공룡','#공룡발자국','#고성','#화석지']},
   map_card_intro:'1억 년 전 백악기 공룡의 발자국이 새겨진 세계 3대 공룡 발자국 화석지'},
  {place_id:'GK-GN-JEN-0002',place_name:'남해 충렬사',
   script_30s:{text:'이순신 장군이 1598년 노량해전에서 전사한 직후 처음 안치된 사당. 장군의 시신이 이 자리에 처음 모셔졌고, 이듬해 아산 현충사로 이장됐다. 남해의 이순신 성지다.',char_count:79,emotion_keywords_used:['헌신','희생','기억']},
   script_60s:{text:'1598년 11월, 노량해전. 마지막 전투였다. 이순신 장군이 총탄에 맞아 전사했다. 전투는 신승(申勝)으로 끝났다. 그 장군의 시신이 처음 안치된 곳이 경남 남해다. 충렬사다. 1598년 이순신이 전사하자 이 자리에 사당을 짓고 처음 봉안했다. 이듬해 아산으로 이장됐다. 1632년 인조가 충렬사라는 이름을 내렸다. 노량해전의 현장과 함께 남해는 이순신의 마지막 길이 깃든 곳이다.',char_count:255,emotion_keywords_used:['헌신','희생','기억']},
   hooks:['이순신이 처음 안치된 사당','노량해전 전사 직후','마지막 전투 후 이 곳으로','아산 현충사보다 먼저였다','이순신의 마지막 길'],
   thumbnails:['이순신 첫 사당','노량해전 후','마지막 안치지','현충사보다 먼저','남해 이순신 성지'],
   captions:{youtube:'남해 충렬사 | 노량해전 전사 이순신이 처음 안치된 사당 — 마지막 길. 경남 남해군. #충렬사 #이순신 #노량해전',instagram:'이순신이 노량해전에서 전사하고 처음 안치된 사당 ⚔️ 남해 충렬사.',tiktok:'이순신 노량해전 전사 후 제일 먼저 온 곳이 남해 충렬사임 #충렬사 #이순신 #역사',xiaohongshu:'南海忠烈祠 ⚔️ 露梁海战阵亡的李舜臣首次安葬之地 | 庆南南海 #忠烈祠 #李舜臣 #露梁海战'},
   hashtags:{korean:['#한국역사','#역사여행','#경상남도','#이순신','#임진왜란'],place_specific:['#충렬사','#이순신','#남해','#노량해전']},
   map_card_intro:'노량해전에서 전사한 이순신 장군이 처음 안치된 사당 — 이순신의 마지막 성지'},
  {place_id:'GK-GW-SAE-0001',place_name:'오죽헌',
   script_30s:{text:'신사임당과 율곡 이이가 태어난 강릉의 집. 5만원권의 신사임당, 5000원권의 이이가 모두 이 집 출신이다. 오죽헌은 조선 최고의 어머니와 철학자를 낳은 강릉의 보물이다.',char_count:82,emotion_keywords_used:['교육','기억']},
   script_60s:{text:'강릉에 조선 시대 별당 건물이 있다. 오죽헌이다. 검은 대나무(오죽)가 울타리를 이루어 이름이 생겼다. 이 건물에서 1504년 신사임당이 태어났고, 1536년 율곡 이이가 태어났다. 5만원권 지폐의 신사임당, 5000원권의 율곡 이이. 한국 지폐에 두 사람이나 등장하는 집은 이 집뿐이다. 조선 시대 최고의 여성 예술가·교육자와 조선 성리학의 거봉이 같은 공간에서 태어났다. 국보 제165호. 오죽헌 내 율곡기념관에서 두 사람의 삶을 볼 수 있다.',char_count:270,emotion_keywords_used:['교육','기억']},
   hooks:['5만원·5000원권의 출신지','신사임당과 율곡이 태어난 집','한국 지폐 두 명 배출한 집','검은 대나무 오죽의 집','조선 최고 어머니와 철학자'],
   thumbnails:['두 지폐의 출신지','신사임당 탄생지','율곡이이 생가','오죽 대나무','국보 별당'],
   captions:{youtube:'강릉 오죽헌 | 5만원권 신사임당·5000원권 율곡이이 탄생지 — 국보. 강원 강릉시. #오죽헌 #신사임당 #율곡이이',instagram:'5만원권 신사임당, 5000원권 율곡이이가 태어난 집 🏡 강릉 오죽헌, 국보.',tiktok:'한국 지폐 두 명이 같은 집 출신인 거 알아? 강릉 오죽헌 #오죽헌 #신사임당 #율곡이이',xiaohongshu:'江陵乌竹轩 🏡 5万元申师任堂与5000元栗谷李珥的诞生地 | 国宝 | 江原江陵 #乌竹轩 #申师任堂 #栗谷李珥'},
   hashtags:{korean:['#한국역사','#역사여행','#강원도','#조선역사','#신사임당'],place_specific:['#오죽헌','#신사임당','#율곡이이','#강릉']},
   map_card_intro:'5만원권 신사임당과 5000원권 율곡 이이가 태어난 조선의 집 — 국보'}
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
console.log('C모드 22차: '+updated+'개 / 누적 '+lib.total+'개');
ids.forEach((id,i)=>console.log('  C+ ['+id+'] '+scripts[i].place_name));
