const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const scripts = [
  {place_id:'GK-GG-RYU-0002',place_name:'광릉',
   script_30s:{text:'조선 7대 세조가 처음으로 왕과 왕비를 다른 언덕에 모시는 방식을 택했다. 동원이강릉. 지금의 조선 왕릉 형식이 여기서 시작됐다. 그리고 광릉 주변 숲은 600년 동안 벌채가 금지됐다. 지금은 유네스코 생물권보전지역이 됐다.',char_count:107,emotion_keywords_used:['권력','기억']},
   script_60s:{text:'세조는 신하들을 죽이고 왕이 됐다. 계유정난. 조카 단종을 몰아낸 왕이다. 그런데 그가 죽어서 묻힌 광릉에 독특한 것이 있다. 왕과 왕비를 같은 언덕이 아닌 각각 다른 언덕에 모신 것이다. 동원이강릉 형식이다. 이 방식이 이후 조선 왕릉의 표준이 됐다. 그리고 광릉 주변 숲. 600년 동안 벌채가 금지됐다. 왕릉을 보호하기 위해서였다. 덕분에 원시 자연이 그대로 남았다. 지금은 유네스코 생물권보전지역이고, 광릉수목원이 이 숲 안에 있다.',char_count:255,emotion_keywords_used:['권력','기억','선택']},
   hooks:['신하를 죽인 왕이 남긴 조선 왕릉의 표준','동원이강릉 형식의 시작','600년 벌채 금지 숲','유네스코 생물권보전지역이 된 왕릉 숲','광릉수목원이 여기 있는 이유'],
   thumbnails:['왕릉 형식의 시작','600년 금지된 숲','동원이강릉','유네스코 숲','광릉수목원'],
   captions:{youtube:'광릉 | 조선 왕릉 형식을 만든 세조의 능 — 600년 금지 숲이 유네스코 생물권보전지역. 경기 남양주. #광릉 #세조 #유네스코',instagram:'600년 동안 벌채 금지된 왕릉 숲이 유네스코가 됐다 🌲 광릉, 동원이강릉의 시작.',tiktok:'신하 죽이고 왕된 세조 능 근처 숲 600년 벌채금지 지금 유네스코됨 #광릉 #세조 #유네스코',xiaohongshu:'光陵 🌲 奠定朝鲜王陵样式的世祖之陵 | 600年禁止砍伐的森林成为联合国教科文组织生物圈保护区 #光陵 #韩国历史 #京畿道'},
   hashtags:{korean:['#한국역사','#역사여행','#경기도','#조선역사','#유네스코'],place_specific:['#광릉','#세조','#동원이강릉','#광릉수목원']},
   map_card_intro:'조선 왕릉 형식의 시작 — 600년 금지 숲이 유네스코 생물권보전지역'},
  {place_id:'GK-GG-RYU-0003',place_name:'융릉·건릉',
   script_30s:{text:'사도세자의 무덤이 경기 화성에 있다. 융릉. 아들 정조가 이곳으로 옮겼다. 정조 자신도 죽은 뒤 바로 옆 건릉에 묻혔다. 아버지 곁에. 뒤주에서 죽은 아버지와 아들이 같은 언덕에 나란히 잠들었다.',char_count:99,emotion_keywords_used:['선택','기억','두려움']},
   script_60s:{text:'사도세자. 1762년, 아버지 영조에 의해 뒤주에 갇혀 8일 만에 죽었다. 28세였다. 아들 정조는 왕이 된 뒤 아버지의 묘를 경기 수원 근처로 옮겼다. 지금의 화성 융릉이다. 그리고 수원화성을 지었다. 아버지를 기리기 위해. 정조는 1800년에 죽었다. 그도 아버지 바로 옆에 묻혔다. 건릉이다. 아버지의 한이 아들을 움직였고, 아들의 효심이 역사를 바꿨다. 지금 두 능이 나란히 있다. 유네스코 세계유산.',char_count:255,emotion_keywords_used:['선택','기억','두려움','생존']},
   hooks:['뒤주에서 죽은 아버지 곁에 묻힌 아들','사도세자와 정조가 나란히','아버지의 한이 아들을 움직였다','수원화성을 만든 이유가 여기 있다','유네스코 세계유산 왕릉'],
   thumbnails:['아버지 곁에 묻히다','사도세자와 정조','뒤주의 한','효심이 역사를','유네스코 왕릉'],
   captions:{youtube:'융릉·건릉 | 뒤주에서 죽은 아버지 사도세자와 아들 정조가 나란히 잠든 곳. 경기 화성. #융릉건릉 #사도세자 #정조',instagram:'아버지가 뒤주에서 죽었고 아들은 옆에 묻혔다 👑 융릉·건릉, 사도세자와 정조.',tiktok:'아버지 뒤주에서 죽고 아들 옆에 묻힌 게 융릉건릉 #사도세자 #정조 #역사',xiaohongshu:'隆陵·健陵 👑 思悼世子与正祖父子并排长眠之地 | 联合国教科文组织世界遗产 | 京畿道华城 #隆陵健陵 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#경기도','#조선역사','#유네스코'],place_specific:['#융릉','#건릉','#사도세자','#정조','#수원화성']},
   map_card_intro:'뒤주에서 죽은 사도세자와 아들 정조가 나란히 잠든 유네스코 왕릉'},
  {place_id:'GK-GG-RYU-0004',place_name:'홍릉·유릉',
   script_30s:{text:'대한제국 고종황제와 명성황후가 홍릉에 잠들었다. 그 옆 유릉에 순종황제가 있다. 조선 왕릉과 달리 중국 황제릉 양식을 따른 것이 특이하다. 망한 제국의 황제들이 묻힌 곳이다.',char_count:97,emotion_keywords_used:['몰락','기억']},
   script_60s:{text:'대한제국. 1897년 선포됐고, 1910년 망했다. 13년. 고종황제는 1919년 세상을 떠났다. 명성황후는 1895년 을미사변으로 이미 시해됐다. 두 사람이 함께 묻힌 곳이 홍릉이다. 그 옆에는 마지막 황제 순종이 잠들어 있다. 유릉이다. 홍릉·유릉은 조선 왕릉과 다른 형태다. 중국 황제릉 양식을 따랐다. 제국의 황제로 대우받고 싶었던 욕망과 결국 식민지가 된 현실이 이 두 능에 담겨있다.',char_count:253,emotion_keywords_used:['몰락','기억','선택']},
   hooks:['13년 제국의 황제들이 잠든 곳','을미사변 명성황후와 고종이 함께','조선 왕릉과 다른 이유','망한 제국의 마지막 능','중국 황제릉 양식을 택한 이유'],
   thumbnails:['13년 제국의 무덤','명성황후와 고종','다른 모양의 이유','마지막 황제','망한 나라'],
   captions:{youtube:'홍릉·유릉 | 13년 대한제국 황제들의 능 — 명성황후·고종·순종이 잠든 곳. 경기 남양주. #홍릉유릉 #고종 #대한제국',instagram:'13년 제국의 황제들이 여기 잠들었다 👑 홍릉·유릉, 대한제국 마지막 흔적.',tiktok:'13년만에 망한 대한제국 황제들 능 여기 있음 #홍릉유릉 #대한제국 #역사',xiaohongshu:'洪陵·裕陵 👑 13年大韩帝国皇帝们的陵寝 | 高宗·明成皇后·纯宗长眠之地 | 京畿道南杨州 #洪陵裕陵 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#경기도','#대한제국','#유네스코'],place_specific:['#홍릉','#유릉','#고종','#명성황후','#순종']},
   map_card_intro:'13년 대한제국 황제들의 능 — 을미사변·망국의 역사가 담긴 왕릉'},
  {place_id:'GK-GG-RYU-0005',place_name:'파주 삼릉',
   script_30s:{text:'파주에 조선 왕릉 세 기가 모여 있다. 공릉·순릉·영릉. 예종의 첫 왕비, 성종의 첫 왕비, 진종과 효순왕후의 능이다. 모두 요절하거나 젊은 나이에 세상을 떠난 왕과 왕비들이다. 소나무 숲 속에 조용히 잠들어 있다.',char_count:101,emotion_keywords_used:['기억','희생']},
   script_60s:{text:'파주에 조선 왕릉 세 기가 모여 있다. 파주 삼릉이다. 공릉은 예종의 첫 왕비 장순왕후의 능이다. 요절했다. 17세에 죽었다. 순릉은 성종의 첫 왕비 공혜왕후의 능이다. 역시 요절했다. 19세에 죽었다. 영릉은 진종과 효순왕후의 능이다. 진종은 왕세자 시절 세상을 떠났다. 왕이 된 적이 없지만 사후에 왕으로 추존됐다. 짧은 삶을 살다 간 왕실 사람들이 파주 소나무 숲에 모여 있다. 유네스코 세계유산.',char_count:261,emotion_keywords_used:['기억','희생']},
   hooks:['17세·19세에 죽은 왕비들의 능','요절한 왕실 사람들이 모인 곳','왕이 된 적 없는 왕세자의 릉','파주 소나무 숲의 세 왕릉','유네스코 세계유산 파주삼릉'],
   thumbnails:['17세 왕비의 무덤','요절한 왕실','왕이 못 된 왕세자','파주 소나무 숲','유네스코 왕릉'],
   captions:{youtube:'파주 삼릉 | 17·19세에 요절한 왕비들과 왕이 못 된 왕세자의 능 — 유네스코 세계유산. 경기 파주. #파주삼릉 #조선왕릉 #유네스코',instagram:'17세에 죽은 왕비, 19세에 죽은 왕비, 왕이 못 된 왕세자 👑 파주 삼릉, 유네스코 세계유산.',tiktok:'파주에 요절한 왕비들 능 세개 있는데 유네스코임 #파주삼릉 #조선왕릉 #역사',xiaohongshu:'坡州三陵 👑 17岁·19岁夭折的王妃们与未登基王世子的陵寝 | 联合国教科文组织世界遗产 | 京畿道坡州 #坡州三陵 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#경기도','#조선역사','#유네스코'],place_specific:['#파주삼릉','#공릉','#순릉','#영릉']},
   map_card_intro:'17·19세에 요절한 왕비들의 능 — 파주 소나무 숲 유네스코 왕릉'},
  {place_id:'GK-GG-RYU-0006',place_name:'장릉 (파주)',
   script_30s:{text:'인조는 반정으로 왕이 됐다. 왕이 된 뒤 아버지를 왕으로 추존했다. 원종. 그리고 아버지를 위한 능을 만들었다. 장릉이다. 반정으로 권력을 잡은 아들이 아버지를 왕으로 만드는 과정. 조선 정치의 복잡함이 담겨있다.',char_count:105,emotion_keywords_used:['권력','선택']},
   script_60s:{text:'1623년, 인조반정. 광해군을 몰아내고 인조가 왕이 됐다. 반정으로 왕위에 오른 것이다. 인조는 왕이 된 뒤 돌아가신 아버지 정원군을 왕으로 추존했다. 원종이라는 묘호를 올렸다. 그리고 파주에 아버지의 능을 조성했다. 장릉이다. 왕이 된 아들이 죽은 아버지를 왕으로 만드는 과정. 역모와 반정의 시대에 권력이 어떻게 작동했는지를 보여주는 능이다. 유네스코 세계유산.',char_count:246,emotion_keywords_used:['권력','선택']},
   hooks:['반정으로 왕이 된 아들이 아버지를 왕으로','인조가 만든 아버지의 릉','반정 권력이 어떻게 작동했나','추존왕 원종의 릉','유네스코 세계유산 장릉'],
   thumbnails:['반정과 효심','아버지를 왕으로','인조의 선택','추존왕의 릉','유네스코 왕릉'],
   captions:{youtube:'장릉 (파주) | 반정으로 왕이 된 인조가 아버지를 왕으로 만든 능 — 유네스코 세계유산. 경기 파주. #장릉 #인조 #인조반정',instagram:'반정으로 왕이 된 아들이 죽은 아버지를 왕으로 만들었다 👑 장릉, 파주.',tiktok:'인조반정으로 왕된 인조 죽은 아버지 왕으로 만들어서 릉도 만듦 #장릉 #인조 #역사',xiaohongshu:'长陵（坡州）👑 以政变登基的仁祖为父亲追尊为王而建的陵寝 | 联合国教科文组织世界遗产 | 京畿道坡州 #长陵 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#경기도','#조선역사','#유네스코'],place_specific:['#장릉','#인조','#원종','#인조반정']},
   map_card_intro:'반정으로 왕이 된 인조가 아버지를 왕으로 만든 능 — 유네스코 세계유산'}
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
console.log('C모드 12차: '+updated+'개 / 누적 '+lib.total+'개');
ids.forEach((id,i)=>console.log('  C+ ['+id+'] '+scripts[i].place_name));
