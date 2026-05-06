const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const scripts = [
  {place_id:'GK-SE-RYU-0004',place_name:'서울 헌릉·인릉',
   script_30s:{text:'태종과 원경왕후의 헌릉, 순조와 순원왕후의 인릉. 조선 초기와 후기 왕을 모두 만날 수 있는 곳. 서울 서초구 내곡동, 아는 사람만 찾는 조선 왕릉이다.',char_count:85,emotion_keywords_used:['기억','권력']},
   script_60s:{text:'서울 서초구 내곡동에 두 개의 왕릉이 붙어 있다. 헌릉과 인릉이다. 헌릉은 조선 3대 태종과 왕비 원경왕후의 능이다. 태종은 이방원. 왕자의 난을 통해 권력을 잡고 조선 초기의 기틀을 다진 왕이다. 인릉은 23대 순조와 왕비 순원왕후의 능이다. 조선 왕조 초기와 말기의 왕이 같은 자리에 있는 특이한 배치다. 유네스코 세계유산 조선왕릉에 포함된다. 산책로가 잘 조성돼 있어 조용하게 걷기 좋다.',char_count:258,emotion_keywords_used:['기억','권력']},
   hooks:['이방원 태종이 여기 잠들다','왕자의 난 그 왕의 무덤','조선 초기와 후기 왕 함께','서초구 숨겨진 왕릉','유네스코 조선왕릉'],
   thumbnails:['태종 이방원의 능','왕자의 난','헌릉과 인릉','조용한 왕릉','유네스코'],
   captions:{youtube:'서울 헌릉·인릉 | 왕자의 난 태종과 순조가 잠든 유네스코 조선왕릉. 서울 서초구. #헌릉 #인릉 #태종',instagram:'서울 서초구에 왕자의 난 태종이 잠들어 있다 👑 헌릉·인릉, 유네스코 조선왕릉.',tiktok:'이방원 태종 실제로 서울 서초구에 있음 #헌릉 #태종 #역사',xiaohongshu:'首尔献陵·仁陵 👑 朝鲜太宗（李芳远）与纯祖长眠之地 | 联合国教科文组织世界遗产 | 首尔瑞草区 #献陵 #太宗 #朝鲜历史'},
   hashtags:{korean:['#한국역사','#역사여행','#서울','#조선역사','#유네스코'],place_specific:['#헌릉','#인릉','#태종','#조선왕릉']},
   map_card_intro:'왕자의 난 태종 이방원이 잠든 유네스코 세계유산 조선왕릉'},
  {place_id:'GK-IC-SAE-0001',place_name:'인천 개항장 근대역사문화공간',
   script_30s:{text:'1883년 인천항이 열렸다. 외국인 조계지가 형성됐다. 지금 중구 일대에 그 시절 건물들이 남아 있다. 일본·청·미국의 영역이 공존했던 조선 개항의 현장이 지금도 인천에 있다.',char_count:86,emotion_keywords_used:['전환','기억']},
   script_60s:{text:'1883년, 조선이 인천을 외국에 열었다. 강화도 조약에 따른 개항이었다. 그러자 중구 일대에 일본·청국·미국의 조계지가 형성됐다. 각국은 자기 나라 건축 양식으로 영사관·은행·상점을 지었다. 지금 인천 중구에 가면 그 건물들이 남아 있다. 일본풍, 서양풍 근대 건축물들이 골목마다 들어서 있다. 인천광역시가 이 일대를 근대역사문화공간으로 지정해 보존하고 있다. 인천아트플랫폼·차이나타운과 가까워 함께 돌아볼 수 있다.',char_count:263,emotion_keywords_used:['전환','기억']},
   hooks:['1883년 인천항이 열렸다','일본·청·미국 조계지의 현장','개항기 건물이 지금도 남아있다','인천 중구 근대 건축 골목','조선 개항의 역사 현장'],
   thumbnails:['개항장 1883','조계지 흔적','근대 건축물','인천 중구 골목','개항의 현장'],
   captions:{youtube:'인천 개항장 | 1883년 일본·청·미국 조계지 — 개항기 근대 건축물이 지금도 남아있다. 인천 중구. #인천개항장 #개항기 #근대역사',instagram:'1883년 인천이 열렸고, 그 건물들이 지금도 여기 있다 🏛️ 개항장 근대역사문화공간.',tiktok:'인천에 1883년 개항기 건물 실제로 남아있음 #인천개항장 #개항기 #역사',xiaohongshu:'仁川开港场 🏛️ 1883年日本·清国·美国租界的现场 | 近代历史建筑至今保存 | 仁川中区 #仁川开港场 #近代历史 #韩国旅游'},
   hashtags:{korean:['#한국역사','#역사여행','#인천','#개항기','#근대역사'],place_specific:['#인천개항장','#조계지','#근대건축','#인천중구']},
   map_card_intro:'1883년 개항 당시 일본·청·미국 조계지의 건물들이 지금도 남은 현장'},
  {place_id:'GK-IC-DOK-0001',place_name:'자유공원',
   script_30s:{text:'인천 중구 응봉산 위 공원. 한국전쟁 때 인천상륙작전을 지휘한 맥아더 장군 동상이 서 있다. 개항기 외국인 공원으로 시작해 한국 근현대사의 상징이 된 곳이다.',char_count:84,emotion_keywords_used:['기억','전쟁']},
   script_60s:{text:'인천 중구 응봉산 위에 공원이 있다. 자유공원이다. 원래는 1888년 조성된 외국인을 위한 공원이었다. 개항기 인천에 들어온 외국인들이 산책하던 곳이다. 그리고 1957년, 이 공원에 맥아더 장군 동상이 세워졌다. 한국전쟁 때 인천상륙작전으로 전세를 바꾼 인물이다. 1950년 9월 15일, 맥아더는 인천 앞바다에서 상륙작전을 감행했다. 서울을 수복하고 전쟁의 흐름을 바꿨다. 공원에서 인천항과 서해 바다가 한눈에 내려다보인다.',char_count:257,emotion_keywords_used:['기억','전쟁']},
   hooks:['맥아더 동상이 있는 공원','인천상륙작전 감행 현장','1888년 외국인 공원의 역사','서해를 내려다보는 전망','전쟁의 흐름을 바꾼 그날'],
   thumbnails:['맥아더 동상','인천상륙작전','외국인 공원의 역사','서해 전망','1950년 9월15일'],
   captions:{youtube:'자유공원 | 맥아더 동상과 인천상륙작전 현장 — 개항기부터 한국전쟁까지. 인천 중구. #자유공원 #맥아더 #인천상륙작전',instagram:'인천 응봉산 위, 맥아더가 내려다보는 공원 🏛️ 자유공원, 인천상륙작전의 현장.',tiktok:'맥아더 동상 여기 있음 인천상륙작전 현장 #자유공원 #맥아더 #한국전쟁',xiaohongshu:'自由公园 🏛️ 麦克阿瑟将军铜像所在地 | 仁川登陆作战的现场 | 仁川中区 #自由公园 #麦克阿瑟 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#인천','#한국전쟁','#맥아더'],place_specific:['#자유공원','#인천상륙작전','#맥아더동상','#인천중구']},
   map_card_intro:'맥아더 동상과 인천상륙작전 — 개항기부터 한국전쟁까지 역사가 겹친 공원'},
  {place_id:'GK-CN-RYU-0001',place_name:'공주 무령왕릉과 왕릉원',
   script_30s:{text:'1971년 발굴. 백제 무령왕의 무덤이 도굴되지 않은 채 그대로 발견됐다. 4,600점의 유물이 쏟아졌다. 백제 문화를 단박에 입증한 발견이었다. 유네스코 세계유산.',char_count:84,emotion_keywords_used:['기억','발견']},
   script_60s:{text:'1971년 7월 공주에서 공사 중 우연히 벽돌 묘 입구가 발견됐다. 백제 무령왕릉이었다. 놀라운 것은 도굴된 흔적이 전혀 없다는 것이었다. 왕과 왕비의 목관, 금관 장식, 금귀걸이, 청동 그릇, 석수 등 4,600여 점의 유물이 쏟아졌다. 무령왕은 6세기 초 백제를 크게 중흥시킨 왕이다. 중국 남조와 활발히 교류했다는 증거도 나왔다. 국보 19점을 포함한 이 발견은 백제 문화를 세상에 입증했다. 유네스코 세계유산.',char_count:264,emotion_keywords_used:['기억','발견']},
   hooks:['도굴 안 된 백제 왕릉 발견','4600점 유물이 쏟아졌다','1971년 공사 중 우연한 발견','국보 19점이 한 무덤에서','유네스코 백제역사유적지구'],
   thumbnails:['도굴 안 된 왕릉','4600점 유물','우연한 발견','국보 19점','유네스코'],
   captions:{youtube:'공주 무령왕릉 | 도굴 안 된 채 발견된 백제 왕릉 — 4,600점 유물, 국보 19점. 충남 공주시. #무령왕릉 #백제 #유네스코',instagram:'1971년 공사 중 백제 왕릉이 그대로 발견됐다 🏺 무령왕릉, 4600점 유물.',tiktok:'1971년 공사하다가 백제 왕릉 발견했는데 도굴 안 됐음 #무령왕릉 #백제 #역사',xiaohongshu:'公州武宁王陵 🏺 1971年偶然发现的未被盗掘百济王陵 | 4600件文物出土 | 联合国教科文组织 | 忠南公州 #武宁王陵 #百济历史'},
   hashtags:{korean:['#한국역사','#역사여행','#충청남도','#백제역사','#유네스코'],place_specific:['#무령왕릉','#백제','#공주','#왕릉원']},
   map_card_intro:'도굴 없이 발견된 백제 왕릉 — 4,600점 유물, 국보 19점, 유네스코 세계유산'},
  {place_id:'GK-CN-SAN-0001',place_name:'공주 공산성',
   script_30s:{text:'웅진 시대 백제의 왕성. 금강이 내려다보이는 산 위에 쌓은 성이다. 475년 고구려에 밀려 한성에서 내려온 백제가 이 성을 거점으로 다시 일어섰다. 유네스코 세계유산.',char_count:84,emotion_keywords_used:['저항','기억']},
   script_60s:{text:'백제는 475년 고구려 장수왕에게 한성(지금의 서울)을 빼앗겼다. 남쪽으로 도망쳐 새로운 수도를 정했다. 공주, 웅진이다. 그리고 금강이 내려다보이는 산 위에 성을 쌓았다. 공산성이다. 둘레 2.66km의 이 성이 백제 부흥의 거점이 됐다. 64년 동안 백제는 이 성을 중심으로 국력을 회복했고, 결국 사비(부여)로 천도할 때까지 왕성으로 사용했다. 지금도 성벽이 잘 남아 있어 금강 뷰와 함께 산책하기 좋다. 유네스코 세계유산.',char_count:261,emotion_keywords_used:['저항','기억']},
   hooks:['고구려에 밀려 내려온 백제','64년간 부흥의 거점','금강 내려다보이는 왕성','백제가 다시 일어선 곳','유네스코 백제역사유적지구'],
   thumbnails:['백제 부흥의 성','금강 전망','64년 왕성','고구려에 밀린 후','유네스코'],
   captions:{youtube:'공주 공산성 | 고구려에 밀린 백제가 64년간 부흥한 왕성 — 금강뷰, 유네스코. 충남 공주시. #공산성 #백제 #유네스코',instagram:'고구려에 밀린 백제가 이 성에서 다시 일어섰다 🏯 공산성, 백제 부흥의 거점.',tiktok:'고구려한테 밀린 백제 이 성에서 64년 버팀 #공산성 #백제 #역사',xiaohongshu:'公州公山城 🏯 被高句丽击败的百济复兴基地 | 64年间的王城 | 联合国教科文组织 | 忠南公州 #公山城 #百济历史'},
   hashtags:{korean:['#한국역사','#역사여행','#충청남도','#백제역사','#유네스코'],place_specific:['#공산성','#백제','#공주','#웅진']},
   map_card_intro:'고구려에 밀려 내려온 백제가 64년간 부흥을 꾀한 왕성 — 유네스코 세계유산'}
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
console.log('C모드 15차: '+updated+'개 / 누적 '+lib.total+'개');
ids.forEach((id,i)=>console.log('  C+ ['+id+'] '+scripts[i].place_name));
