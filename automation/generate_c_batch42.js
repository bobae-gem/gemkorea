const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const scripts = [
  {place_id:'GK-JN-SAE-0006',place_name:'완도 장보고기념관',
   script_30s:{text:'해상왕 장보고를 기리는 기념관. 장보고가 청해진을 설치한 완도에 세워졌다. 9세기 동아시아 바다를 지배한 장보고의 생애와 해상 무역 네트워크를 한눈에 볼 수 있다.',char_count:76,emotion_keywords_used:['업적','기억']},
   script_60s:{text:'전남 완도에 장보고기념관이 있다. 해상왕 장보고. 9세기 신라인으로 당나라 군인이었다가 돌아와 청해진을 세웠다. 신라·당·일본을 잇는 동아시아 해상 무역을 장악했다. 이 기념관은 장보고가 청해진을 설치한 완도에 세워졌다. 장보고의 생애, 청해진의 역사, 당시 해상 무역 네트워크를 볼 수 있다. 장도(청해진 터)와 함께 장보고 역사 코스로 완도 여행의 필수 코스다.',char_count:253,emotion_keywords_used:['업적','기억']},
   hooks:['동아시아 바다를 지배한 장보고','청해진 설치 현장의 기념관','신라·당·일본 무역 네트워크','해상왕의 생애 한눈에','장도와 함께하는 완도 코스'],
   thumbnails:['해상왕 기념관','청해진 설치지','무역 네트워크','장보고 생애','장도 코스'],
   captions:{youtube:'완도 장보고기념관 | 동아시아 바다 지배한 해상왕 — 청해진 현장. 전남 완도군. #장보고기념관 #장보고 #청해진',instagram:'동아시아 바다를 지배한 해상왕 장보고의 기념관 ⛵ 완도 청해진 터.',tiktok:'9세기 동아시아 바다 지배한 장보고 기념관 완도에 있음 #장보고기념관 #청해진 #역사',xiaohongshu:'莞岛张保皋纪念馆 ⛵ 掌控东亚海上贸易的海上王 | 清海镇遗址旁 | 全南莞岛 #张保皋纪念馆 #清海镇 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#전라남도','#신라역사','#장보고'],place_specific:['#장보고기념관','#청해진','#완도','#해상왕']},
   map_card_intro:'9세기 동아시아 해상 무역을 지배한 해상왕 장보고를 기리는 청해진 현장의 기념관'},
  {place_id:'GK-JN-SAE-0008',place_name:'보성 태백산맥문학관',
   script_30s:{text:'조정래 대하소설 태백산맥의 배경이 된 벌교. 문학관에서 소설 속 인물들과 시대적 맥락을 만날 수 있다. 벌교 홍교, 김범우의 집, 현부자네 등 소설 속 장소들도 걸어서 돌아볼 수 있다.',char_count:83,emotion_keywords_used:['기억','문학']},
   script_60s:{text:'전남 보성 벌교에 문학관이 있다. 태백산맥문학관이다. 조정래의 대하소설 태백산맥의 배경이 벌교다. 한국전쟁 전후 분단과 이념 갈등의 비극을 다룬 총 10권의 소설이다. 벌교는 소설 속에서 당시 시대상을 가장 생생하게 담은 공간이다. 문학관에서 소설의 세계를 만날 수 있다. 주변에 소설 속 장소들도 있다. 벌교 홍교, 현부자네 집터, 소화의 집 등. 문학 기행의 성지다.',char_count:254,emotion_keywords_used:['기억','문학']},
   hooks:['태백산맥 소설의 배경 벌교','10권 대하소설의 현장','소설 속 장소들 걸어서 탐방','분단 시대의 비극을 담은 문학관','벌교 문학 기행 성지'],
   thumbnails:['태백산맥 배경지','10권 대하소설','소설 속 장소','분단 비극','문학 기행'],
   captions:{youtube:'보성 태백산맥문학관 | 조정래 대하소설 배경 벌교 — 문학 기행. 전남 보성군. #태백산맥문학관 #태백산맥 #벌교',instagram:'대하소설 태백산맥의 배경 벌교에 문학관이 있다 📚 보성 태백산맥문학관.',tiktok:'태백산맥 소설 배경 벌교 문학관에서 소설 속 장소 걸어서 탐방 #태백산맥 #벌교 #문학',xiaohongshu:'宝城太白山脉文学馆 📚 赵廷来长篇小说的背景地筏桥 | 文学旅行圣地 | 全南宝城 #太白山脉 #赵廷来 #韩国文学'},
   hashtags:{korean:['#한국역사','#역사여행','#전라남도','#문학','#태백산맥'],place_specific:['#태백산맥문학관','#조정래','#벌교','#문학기행']},
   map_card_intro:'조정래 대하소설 태백산맥의 무대 벌교 — 소설 속 장소를 직접 걸을 수 있는 문학 기행지'},
  {place_id:'GK-JJ-JEN-0001',place_name:'제주 항파두리 항몽유적',
   script_30s:{text:'삼별초가 제주에서 마지막으로 저항한 토성. 1273년 몽골과 고려 연합군에 의해 함락됐다. 고려의 마지막 저항이 이 제주 토성에서 끝났다. 사적 제396호.',char_count:72,emotion_keywords_used:['저항','기억']},
   script_60s:{text:'제주에 고려 시대 토성이 있다. 항파두리 항몽유적이다. 1270년 삼별초가 진도에서 제주로 이동해 이 자리에 마지막 거점을 세웠다. 배중손이 죽고 남은 삼별초를 김통정이 이끌었다. 항파두성을 쌓고 몽골에 저항했다. 3년을 버텼다. 1273년 몽골과 고려 연합군이 쳐들어와 함락됐다. 고려의 마지막 반몽 저항이 이 땅에서 끝났다. 지금도 토성 일부가 남아 있다. 사적 제396호.',char_count:257,emotion_keywords_used:['저항','기억']},
   hooks:['삼별초 최후의 저항 제주 토성','3년 버틴 고려 마지막 항쟁','몽골에 함락된 제주','배중손 이후 김통정의 싸움','고려 반몽 저항의 끝'],
   thumbnails:['최후의 토성','3년 저항','몽골 함락','김통정','반몽 저항 끝'],
   captions:{youtube:'제주 항파두리 항몽유적 | 삼별초 최후의 저항 — 3년 버틴 제주 토성. 제주시. #항파두리 #삼별초 #항몽',instagram:'삼별초가 3년 버티다 함락된 고려 마지막 저항의 토성 🏯 제주 항파두리.',tiktok:'삼별초 최후 저항지 제주 항파두리 3년 버티다 함락됨 #항파두리 #삼별초 #역사',xiaohongshu:'济州项破头里抗蒙遗址 🏯 三别抄最后的据点 | 坚守3年后被攻陷 | 济州市 #项破头里 #三别抄 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#제주','#고려역사','#삼별초'],place_specific:['#항파두리','#삼별초','#제주','#항몽']},
   map_card_intro:'삼별초의 마지막 거점 — 3년을 버티다 1273년 함락된 고려 반몽 저항의 끝'},
  {place_id:'GK-JJ-SAE-0003',place_name:'제주 추사관',
   script_30s:{text:'추사 김정희가 유배 중 9년을 보낸 제주 대정. 그 유배지에 세운 박물관이다. 제주에서의 9년이 추사를 완성시켰다. 국보 세한도와 추사체가 이 땅에서 탄생했다.',char_count:74,emotion_keywords_used:['학문','기억']},
   script_60s:{text:'제주도 서귀포 대정읍에 박물관이 있다. 추사관이다. 조선 최고의 서예가 추사 김정희가 유배 생활을 한 곳이다. 1840년부터 1849년까지 9년 동안 이곳에 갇혔다. 9년의 유배가 그를 예술적으로 완성시켰다. 독자적 서체 추사체, 국보 세한도가 이 땅에서 탄생했다. 세한도는 유배 중 자신을 잊지 않은 제자에게 고마움을 표현한 그림이다. 추사관에서 그의 제주 유배 생활과 예술 세계를 볼 수 있다.',char_count:256,emotion_keywords_used:['학문','기억']},
   hooks:['9년 유배가 추사를 완성했다','세한도와 추사체 탄생지','제주에서 꽃핀 조선 예술','대정읍 유배지 박물관','국보가 탄생한 유배지'],
   thumbnails:['9년 유배 완성','세한도 탄생지','추사체 제주','유배지 박물관','국보 탄생'],
   captions:{youtube:'제주 추사관 | 9년 유배로 세한도·추사체 완성 — 대정읍. 제주 서귀포시. #추사관 #김정희 #세한도',instagram:'제주 유배 9년이 추사를 완성했다 🖌️ 세한도와 추사체 탄생지 추사관.',tiktok:'제주 유배 9년이 추사체 세한도 완성시킨 추사관 알아? #추사관 #김정희 #제주',xiaohongshu:'济州秋史馆 🖌️ 流配9年完成秋史体与世寒图的地方 | 济州西归浦 #秋史馆 #金正喜 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#제주','#조선역사','#추사'],place_specific:['#추사관','#김정희','#세한도','#제주유배']},
   map_card_intro:'제주 유배 9년이 추사체와 국보 세한도를 탄생시킨 조선 최고 서예가의 유배지 박물관'},
  {place_id:'GK-CN-SWO-0001',place_name:'논산 돈암서원',
   script_30s:{text:'조선 예학의 대가 사계 김장생을 배향한 서원. 17세기 조선 성리학·예학의 중심이었다. 임진왜란 이후 조선 사회를 재건하는 데 기여한 학자의 서원이다. 유네스코 세계유산.',char_count:77,emotion_keywords_used:['학문','기억']},
   script_60s:{text:'충남 논산에 서원이 있다. 돈암서원이다. 조선 예학의 거목 사계 김장생을 배향한다. 김장생은 임진왜란 이후 무너진 조선 사회를 예법으로 다시 세우려 한 학자다. 그의 제자들이 1634년 이 서원을 세웠다. 김장생과 아들 김집, 제자 송준길·송시열까지 배향한다. 이 서원에서 배출한 인재들이 17세기 조선 정치를 이끌었다. 응도당이라는 강당이 국보다. 2019년 유네스코 세계유산 한국의 서원으로 등재됐다.',char_count:261,emotion_keywords_used:['학문','기억']},
   hooks:['조선 예학의 대가 김장생 서원','임진왜란 후 조선 재건한 학자','국보 응도당이 있는 서원','김장생·송시열 배향','유네스코 한국의 서원'],
   thumbnails:['예학 대가 서원','조선 재건 학자','국보 응도당','김장생 송시열','유네스코'],
   captions:{youtube:'논산 돈암서원 | 조선 예학 김장생 서원 — 국보 응도당 유네스코. 충남 논산시. #돈암서원 #김장생 #유네스코',instagram:'조선 예학의 대가 김장생을 배향한 서원 📚 논산 돈암서원, 유네스코 세계유산.',tiktok:'조선 예학 대가 김장생 서원 국보도 있음 논산 돈암서원 #돈암서원 #김장생 #유네스코',xiaohongshu:'论山遁岩书院 📚 朝鲜礼学大家金长生配享 | 国宝讲堂 | 联合国教科文组织 | 忠南论山 #遁岩书院 #金长生 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#충청남도','#조선역사','#유네스코'],place_specific:['#돈암서원','#김장생','#논산','#한국의서원']},
   map_card_intro:'임진왜란 후 조선을 예법으로 재건한 김장생의 서원 — 국보 응도당, 유네스코 세계유산'}
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
console.log('C모드 42차: '+updated+'개 / 누적 '+lib.total+'개');
ids.forEach((id,i)=>console.log('  C+ ['+id+'] '+scripts[i].place_name));
