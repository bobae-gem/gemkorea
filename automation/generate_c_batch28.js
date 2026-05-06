const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const scripts = [
  {place_id:'GK-CB-SAN-0003',place_name:'단양 온달산성',
   script_30s:{text:'고구려 온달 장군이 쌓았다는 전설의 산성. 온달이 신라에 빼앗긴 땅을 되찾겠다며 출전했다가 이 근처에서 전사했다는 이야기가 전해진다. 남한강 절벽 위에 자리한 경관이 빼어나다.',char_count:81,emotion_keywords_used:['전설','기억']},
   script_60s:{text:'충북 단양 남한강변 절벽 위에 산성이 있다. 온달산성이다. 고구려 온달 장군이 쌓았다는 전설이 있다. 온달은 바보 온달로 유명하다. 천민 출신이었는데 평강공주와 결혼해 용맹한 장군이 됐다. 신라가 고구려 땅을 빼앗자 온달이 되찾겠다고 출전했다가 이 근처 아단성 전투에서 화살에 맞아 전사했다는 기록이 삼국사기에 있다. 지금도 단양에 온달관광지와 온달동굴이 있어 그 이야기가 살아있다.',char_count:262,emotion_keywords_used:['전설','기억']},
   hooks:['바보 온달이 쌓은 전설의 성','평강공주 남편 온달 장군','고구려 땅 되찾으러 갔다가 전사','남한강 절벽 위 산성 경관','온달 이야기가 살아있는 단양'],
   thumbnails:['바보 온달의 성','평강공주 남편','전사한 전설','절벽 위 산성','단양 온달'],
   captions:{youtube:'단양 온달산성 | 바보 온달 장군이 쌓은 전설의 성 — 남한강 절벽 위 경관. 충북 단양군. #온달산성 #온달 #단양',instagram:'바보 온달이 쌓은 전설의 산성이 남한강 절벽 위에 있다 🏯 단양 온달산성.',tiktok:'바보 온달 쌓은 산성 충북 단양에 있음 #온달산성 #온달 #삼국시대',xiaohongshu:'丹阳温达山城 🏯 高句丽温达将军修建的传说之城 | 南汉江悬崖上的山城 | 忠北丹阳 #温达山城 #温达 #高句丽'},
   hashtags:{korean:['#한국역사','#역사여행','#충청북도','#고구려','#전설'],place_specific:['#온달산성','#온달','#단양','#고구려']},
   map_card_intro:'바보 온달 장군의 전설이 서린 남한강 절벽 위 고구려 산성'},
  {place_id:'GK-GB-GOB-0003',place_name:'고령 지산동 고분군',
   script_30s:{text:'대가야의 왕릉이 능선을 따라 200기 이상 늘어서 있다. 지산동 44호분 내부에서 순장 흔적이 발견됐다. 왕이 죽으면 신하와 시종도 함께 묻었다. 2023년 유네스코 세계문화유산.',char_count:81,emotion_keywords_used:['기억','가야']},
   script_60s:{text:'경북 고령 읍내 뒷산 능선에 200기 이상의 봉분이 줄지어 서 있다. 대가야 왕릉들이다. 지산동 고분군이다. 대가야는 고령을 중심으로 5~6세기에 번성한 가야 소국이다. 이 고분군에서 주목할 것은 순장 문화다. 44호분에서는 왕 한 명을 위해 순장된 사람들의 흔적이 발견됐다. 40명 이상이 함께 묻혔다. 가야의 강력한 왕권과 독자적인 장제를 보여주는 증거다. 2023년 유네스코 세계문화유산 가야고분군으로 등재됐다.',char_count:261,emotion_keywords_used:['기억','가야']},
   hooks:['40명 순장된 가야 왕릉','대가야 왕릉 200기 이상','가야 독자 문화의 증거','능선 따라 줄지어 선 고분','유네스코 가야고분군'],
   thumbnails:['순장된 왕릉','200기 봉분','대가야 왕권','가야 독자 문화','유네스코'],
   captions:{youtube:'고령 지산동 고분군 | 40명 순장된 대가야 왕릉 200기 — 유네스코. 경북 고령군. #지산동고분군 #대가야 #유네스코',instagram:'대가야 왕릉에 40명이 함께 순장됐다 ⚰️ 고령 지산동 고분군, 유네스코.',tiktok:'대가야 왕릉에 40명 이상 순장된 거 알아? 고령 지산동 고분군 #지산동고분군 #대가야 #가야',xiaohongshu:'高灵池山洞古坟群 ⚰️ 殉葬40余人的大伽倻王陵200余座 | 联合国教科文组织伽倻古坟群 | 庆北高灵 #池山洞古坟群 #大伽倻 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#경상북도','#가야','#유네스코'],place_specific:['#지산동고분군','#대가야','#고령','#순장']},
   map_card_intro:'40명 이상이 순장된 대가야 왕릉 200기 — 유네스코 세계문화유산 가야고분군'},
  {place_id:'GK-GB-SAE-0005',place_name:'문경새재',
   script_30s:{text:'한양에서 영남으로 가는 가장 중요한 고갯길. 조선의 영남대로가 이 고개를 넘었다. 과거 보러 가는 선비들, 장사꾼들, 군대가 이 길을 걸었다. 지금도 3개의 관문이 남아 있다.',char_count:78,emotion_keywords_used:['기억','역사']},
   script_60s:{text:'경북 문경에 조선 시대 고갯길이 있다. 문경새재다. 한양과 영남을 잇는 영남대로의 핵심 구간이다. 이 고개를 넘어야 서울에 갈 수 있었다. 과거 시험 보러 가는 선비들이 이 길을 걸었다. 장사꾼들, 군대도 걸었다. 조선 1414년 처음 정비됐다. 1·2·3관문이 지금도 남아 있다. 사극 촬영지로도 유명하다. 국가명승 제32호. 고갯길을 걸으며 조선의 역사를 느낄 수 있는 공간이다.',char_count:257,emotion_keywords_used:['기억','역사']},
   hooks:['과거 보러 가던 선비들의 고갯길','조선 영남대로 핵심 구간','3개 관문이 지금도 남아','한양과 영남을 이은 길','사극 촬영지로 유명'],
   thumbnails:['선비들의 고갯길','영남대로','3관문 현존','조선의 길','사극 촬영지'],
   captions:{youtube:'문경새재 | 과거 보러 가던 선비들의 조선 고갯길 — 3관문 현존 국가명승. 경북 문경시. #문경새재 #영남대로 #조선',instagram:'과거 보러 가던 선비들이 걷던 조선의 고갯길 🏔️ 문경새재, 3관문 현존.',tiktok:'조선 과거 보러 가던 선비들 이 고개 넘었음 문경새재 #문경새재 #조선 #역사',xiaohongshu:'闻庆鸟岭 🏔️ 朝鲜科举赶考书生翻越的山路 | 岭南大路核心地段 | 3关门现存 | 庆北闻庆 #鸟岭 #朝鲜历史'},
   hashtags:{korean:['#한국역사','#역사여행','#경상북도','#조선역사','#고갯길'],place_specific:['#문경새재','#영남대로','#문경','#관문']},
   map_card_intro:'과거 보러 가던 선비들이 걷던 조선 영남대로의 핵심 고갯길 — 3관문이 남은 국가명승'},
  {place_id:'GK-GB-SAE-0006',place_name:'의성 탑리 오층석탑',
   script_30s:{text:'통일신라 시대 석탑인데 모전석탑 형식이다. 벽돌처럼 다듬은 돌로 쌓은 독특한 형태다. 분황사 모전석탑과 함께 신라 석탑의 초기 형태를 보여주는 귀한 자료다. 국보 제77호.',char_count:79,emotion_keywords_used:['기억','예술']},
   script_60s:{text:'경북 의성 읍내에 돌탑이 있다. 탑리 오층석탑이다. 통일신라 시대 작품이다. 이 탑이 특별한 이유는 형식 때문이다. 모전석탑이다. 벽돌처럼 다듬은 돌을 쌓아 올린 것이다. 원래 목탑에서 벽돌 탑으로, 다시 석탑으로 발전하는 과정에서 이 모전석탑이 중간 단계였다. 경주 분황사 탑과 비슷한 형태다. 의성이라는 소도시에 이런 귀한 국보가 있다는 것이 놀랍다. 국보 제77호.',char_count:258,emotion_keywords_used:['기억','예술']},
   hooks:['벽돌처럼 쌓은 독특한 석탑','목탑에서 석탑 사이의 과도기','분황사 탑과 같은 형식','의성의 숨겨진 국보','통일신라 모전석탑'],
   thumbnails:['벽돌 같은 석탑','과도기 탑 형식','분황사와 유사','의성 국보','통일신라 석탑'],
   captions:{youtube:'의성 탑리 오층석탑 | 벽돌처럼 다듬은 돌로 쌓은 통일신라 모전석탑 — 국보. 경북 의성군. #탑리오층석탑 #모전석탑 #의성',instagram:'벽돌처럼 돌을 다듬어 쌓은 희귀한 신라 탑 🗼 의성 탑리 오층석탑, 국보.',tiktok:'신라 탑인데 벽돌처럼 쌓은 희귀한 탑이 경북 의성에 있음 #탑리석탑 #모전석탑 #신라',xiaohongshu:'义城塔里五层石塔 🗼 像砖块一样雕琢的统一新罗模砖石塔 | 国宝77号 | 庆北义城 #模砖石塔 #新罗历史 #韩国国宝'},
   hashtags:{korean:['#한국역사','#역사여행','#경상북도','#신라역사','#국보'],place_specific:['#탑리오층석탑','#모전석탑','#의성','#통일신라']},
   map_card_intro:'벽돌처럼 다듬은 돌로 쌓은 통일신라 모전석탑 — 의성의 숨겨진 국보 제77호'},
  {place_id:'GK-GB-RYU-0004',place_name:'경주 월성',
   script_30s:{text:'천년 신라의 왕성 터. 달 모양의 성이라는 뜻이다. 문무왕 이후 신라 왕들이 이곳에서 나라를 다스렸다. 최근 발굴에서 지반에 사람을 묻은 인신공희 흔적이 발견됐다.',char_count:77,emotion_keywords_used:['기억','발견']},
   script_60s:{text:'경주 도심에 넓은 왕성 터가 있다. 월성이다. 신라 파사이사금 때부터 왕성으로 쓰였다. 달처럼 생긴 성이라 반월성이라고도 한다. 삼면이 물로 둘러싸이고 일면이 흙으로 쌓은 구조다. 이 왕성에서 신라 1000년의 역사가 만들어졌다. 최근 발굴 조사에서 성벽 지반에 사람을 묻은 흔적이 발견됐다. 성을 튼튼히 하기 위해 사람을 제물로 바친 것으로 보인다. 유네스코 세계유산 경주 역사유적지구.',char_count:260,emotion_keywords_used:['기억','발견']},
   hooks:['신라 1000년 왕성 터','달 모양 성 반월성','성벽 아래 인신공희 발견','삼면이 물로 둘러싸인 성','유네스코 경주 역사유적지구'],
   thumbnails:['신라 왕성 터','달 모양 반월성','인신공희 발견','삼면 물 성','유네스코'],
   captions:{youtube:'경주 월성 | 신라 천년 왕성 터 — 성벽 아래 인신공희 발견. 경북 경주시. #월성 #신라 #경주',instagram:'신라 천년 왕성 터에서 성벽 아래 인신공희 흔적이 발견됐다 🏯 경주 월성.',tiktok:'신라 왕성 발굴하다 성벽 아래 사람 묻은 흔적 나왔음 경주 월성 #월성 #신라 #역사',xiaohongshu:'庆州月城 🏯 新罗千年王城遗址 | 城墙下发现人祭牺牲痕迹 | 联合国教科文组织 | 庆北庆州 #月城 #新罗历史 #人祭'},
   hashtags:{korean:['#한국역사','#역사여행','#경상북도','#신라역사','#유네스코'],place_specific:['#월성','#반월성','#신라','#경주']},
   map_card_intro:'신라 천년 왕들이 다스리던 월성 — 성벽 아래 인신공희 흔적이 발견된 왕성 터'}
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
console.log('C모드 28차: '+updated+'개 / 누적 '+lib.total+'개');
ids.forEach((id,i)=>console.log('  C+ ['+id+'] '+scripts[i].place_name));
