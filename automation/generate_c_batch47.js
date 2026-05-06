const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const scripts = [
  {place_id:'GK-GW-SAJ-0006',place_name:'인제 백담사',
   script_30s:{text:'만해 한용운이 독립선언서 공약 3장을 초안한 절. 설악산 깊은 계곡의 천년 고찰이다. 백담계곡을 따라 7km를 걷거나 셔틀버스를 타야 닿는 곳이다. 김형운 전 대통령이 유배 생활한 절이기도 하다.',char_count:86,emotion_keywords_used:['저항','기억']},
   script_60s:{text:'강원도 인제 설악산 깊은 계곡에 절이 있다. 백담사다. 647년 창건됐다. 이 절이 유명한 이유는 만해 한용운 때문이다. 1919년 3·1운동 전, 만해가 이 절에 머물며 독립선언서 공약 3장을 초안했다. 독립선언서에 담긴 비폭력 정신이 여기서 탄생했다. 백담계곡을 따라 7km를 걸어 들어가야 한다. 겨울에는 백담계곡이 얼어붙어 더욱 장관이다. 외설악 깊은 골짜기의 고요한 사찰이다.',char_count:260,emotion_keywords_used:['저항','기억']},
   hooks:['독립선언서 공약 3장 초안지','만해 한용운이 머문 절','7km 걸어야 닿는 설악 깊은 절','647년 창건 천년 고찰','백담계곡 겨울 얼음 장관'],
   thumbnails:['독립선언서 초안지','만해 한용운','7km 산행','647년 고찰','백담계곡'],
   captions:{youtube:'인제 백담사 | 독립선언서 공약3장 초안 — 만해 한용운의 설악 고찰. 강원 인제군. #백담사 #만해한용운 #독립운동',instagram:'독립선언서 공약 3장을 만해가 이 절에서 초안했다 🏔️ 인제 백담사.',tiktok:'독립선언서 공약 3장 초안이 설악산 백담사에서 나왔음 #백담사 #만해한용운 #독립운동',xiaohongshu:'麟蹄百潭寺 🏔️ 万海韩龙云在此草拟独立宣言书第三约款 | 江原麟蹄 #百潭寺 #万海 #韩国独立运动'},
   hashtags:{korean:['#한국역사','#역사여행','#강원도','#독립운동','#만해한용운'],place_specific:['#백담사','#만해한용운','#인제','#설악산']},
   map_card_intro:'만해 한용운이 독립선언서 공약 3장을 초안한 설악산 깊은 곳 — 백담사'},
  {place_id:'GK-GG-PLC-0001',place_name:'포천 산정호수',
   script_30s:{text:'1925년 만들어진 포천의 맑은 산속 호수. 국민관광지로 지정됐다. 명성산을 배경으로 봄 꽃과 가을 안개가 절경이다. 둘레길을 걷거나 보트를 타며 즐길 수 있다.',char_count:68,emotion_keywords_used:['자연','낭만']},
   script_60s:{text:'경기도 포천에 맑은 호수가 있다. 산정호수다. 1925년 농업용 저수지로 만들어졌다. 1977년 국민관광지로 지정됐다. 명성산을 배경으로 사계절 내내 아름다운 풍경이 펼쳐진다. 봄이면 벚꽃과 진달래가 피어나고, 가을이면 명성산 단풍이 호수에 비친다. 겨울에는 눈 쌓인 산과 얼음 호수가 신비롭다. 둘레길을 따라 걸을 수 있고 보트를 타며 호수를 즐길 수도 있다. 산정호수 주변에 등룡폭포와 비선폭포도 있다.',char_count:258,emotion_keywords_used:['자연','낭만']},
   hooks:['1925년 저수지가 명소가 됐다','명성산 배경 사계절 절경','봄 진달래 가을 단풍','둘레길 보트 등룡폭포','포천 국민관광지'],
   thumbnails:['1925년 저수지','명성산 배경','봄꽃 가을단풍','둘레길 보트','국민관광지'],
   captions:{youtube:'포천 산정호수 | 명성산 배경 사계절 절경 — 국민관광지. 경기 포천시. #산정호수 #포천 #명성산',instagram:'명성산을 배경으로 사계절 아름다운 포천 산정호수 🏞️ 국민관광지.',tiktok:'포천 산정호수 명성산 배경 사계절 다 예쁜 국민관광지 #산정호수 #포천 #명성산',xiaohongshu:'抱川山井湖 🏞️ 鸣声山为背景的四季美景 | 京畿抱川 #山井湖 #抱川 #韩国旅游'},
   hashtags:{korean:['#자연','#여행','#경기도','#포천','#호수'],place_specific:['#산정호수','#포천','#명성산','#국민관광지']},
   map_card_intro:'명성산을 배경으로 사계절 아름다운 1925년 산속 호수 — 포천 국민관광지'},
  {place_id:'GK-GG-SAN-0001',place_name:'용인 처인성',
   script_30s:{text:'1232년 고려가 몽골을 이긴 처인성 전투의 현장. 승려 김윤후가 이끄는 농민 의병이 몽골 장수 살리타이를 사살했다. 작은 토성에서 거대한 몽골군을 이긴 기적의 전투다.',char_count:79,emotion_keywords_used:['저항','기억']},
   script_60s:{text:'경기도 용인에 작은 토성이 있다. 처인성이다. 1232년 몽골 2차 침입 때 이 작은 성에서 기적이 일어났다. 몽골군 총사령관 살리타이가 이 성을 공격했다. 성 안에 있던 승려 김윤후가 화살을 쐈다. 살리타이가 죽었다. 총사령관을 잃은 몽골군이 철수했다. 농민과 승려로 이루어진 작은 군대가 몽골 최강의 장군을 죽인 것이다. 고려 최대의 대몽 전투 승리 중 하나였다. 사적 제441호.',char_count:255,emotion_keywords_used:['저항','기억']},
   hooks:['몽골 총사령관을 사살한 전투','승려 김윤후의 화살 한 발','작은 토성에서 거대한 몽골 격퇴','1232년 몽골 2차 침입 최대 승리','농민·승려로 이룬 기적'],
   thumbnails:['몽골 사령관 사살','김윤후 화살','작은 토성 기적','1232년 승리','농민 승려 군대'],
   captions:{youtube:'용인 처인성 | 몽골 총사령관 사살 — 1232년 기적의 대몽 전투. 경기 용인시. #처인성 #김윤후 #대몽항쟁',instagram:'승려 김윤후가 화살 하나로 몽골 총사령관을 죽인 전투 현장 ⚔️ 용인 처인성.',tiktok:'몽골 총사령관 화살 하나로 사살한 1232년 기적 용인 처인성 #처인성 #김윤후 #역사',xiaohongshu:'龙仁处仁城 ⚔️ 僧侣金允侯一箭射杀蒙古总司令 | 1232年抗蒙大捷 | 京畿龙仁 #处仁城 #金允侯 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#경기도','#고려역사','#몽골'],place_specific:['#처인성','#김윤후','#용인','#대몽항쟁']},
   map_card_intro:'승려 김윤후가 화살 하나로 몽골 총사령관을 사살한 1232년 기적의 전투 현장'},
  {place_id:'GK-JB-GEN-0001',place_name:'장수 논개 생가지',
   script_30s:{text:'진주 촉석루에서 왜장을 껴안고 뛰어내린 논개의 고향. 전북 장수가 논개의 고향이다. 논개는 이 마을에서 태어나 진주 기생이 됐다. 논개의 삶이 시작된 곳이 여기다.',char_count:74,emotion_keywords_used:['희생','기억']},
   script_60s:{text:'전북 장수군에 논개의 생가지가 있다. 임진왜란 때 왜장을 껴안고 남강에 투신한 논개의 고향이다. 논개는 장수에서 태어났다. 어릴 적 아버지가 빚을 갚지 못해 관가에 넘겨졌다. 관비가 됐다. 나중에 진주 부사의 첩이 됐고 기생으로 불렸다. 1593년 2차 진주성 전투에서 성이 함락됐다. 그 날 논개는 왜장을 의암에서 껴안고 남강에 뛰어들었다. 그 논개의 고향이 전북 장수다. 생가지와 기념관이 있다.',char_count:257,emotion_keywords_used:['희생','기억']},
   hooks:['논개 고향이 전북 장수다','비극의 시작 관비 된 사연','진주 투신의 논개가 여기서 태어났다','논개 생가 기념관 장수','의기 논개의 진짜 고향'],
   thumbnails:['논개 고향 장수','관비 된 사연','진주 투신 논개','생가 기념관','전북 장수'],
   captions:{youtube:'장수 논개 생가지 | 진주 의기 논개의 고향 — 전북 장수. 전북 장수군. #논개생가지 #논개 #장수',instagram:'진주에서 왜장 껴안고 뛰어든 논개가 전북 장수에서 태어났다 🌸 논개 생가지.',tiktok:'진주 논개 고향이 경남 아니라 전북 장수임 논개 생가지 #논개 #장수 #역사',xiaohongshu:'长水论介故居 🌸 在晋州义岩投江的论介出生于全北长水 | 全北长水 #论介 #长水 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#전라북도','#임진왜란','#논개'],place_specific:['#논개생가지','#논개','#장수','#전북']},
   map_card_intro:'진주 의암에서 왜장을 껴안고 투신한 의기 논개의 고향 — 전북 장수 생가지'},
  {place_id:'GK-JN-SAN-0001',place_name:'나주 금성산성',
   script_30s:{text:'나주의 진산 금성산 정상부에 쌓은 산성. 삼국 시대부터 조선까지 전략 요충지였다. 후백제·고려·조선 각 시대가 이 성을 쟁취하려 싸웠다. 나주 평야 전체가 내려다보인다.',char_count:75,emotion_keywords_used:['역사','기억']},
   script_60s:{text:'전남 나주 금성산 정상부에 산성이 있다. 금성산성이다. 삼국 시대부터 쌓기 시작해 고려·조선까지 사용된 요충지다. 후백제 견훤과 고려 태조 왕건이 이 성을 두고 전투를 벌였다. 왕건이 결국 이 성을 차지하면서 후삼국 통일에 결정적인 역할을 했다. 임진왜란 때도 전략 거점이었다. 금성산 정상에서 나주 평야 전체가 펼쳐진다. 사적 제343호.',char_count:252,emotion_keywords_used:['역사','기억']},
   hooks:['견훤과 왕건이 싸운 산성','후삼국 통일 결정적 성','나주 평야 전체 조망','삼국부터 조선까지 요충지','왕건이 차지한 전략 거점'],
   thumbnails:['견훤 왕건 전투','후삼국 결정적 성','나주 평야 조망','삼국 요충지','왕건 거점'],
   captions:{youtube:'나주 금성산성 | 견훤·왕건이 싸운 후삼국 통일의 요충지. 전남 나주시. #금성산성 #왕건 #견훤',instagram:'견훤과 왕건이 싸운 후삼국 통일의 열쇠 산성 🏯 나주 금성산성.',tiktok:'견훤 왕건이 이 성 두고 싸웠는데 왕건이 이기면서 후삼국 통일됨 나주 금성산성 #금성산성 #왕건 #역사',xiaohongshu:'罗州锦城山城 🏯 甄萱与王建争夺的后三国统一关键要塞 | 全南罗州 #锦城山城 #王建 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#전라남도','#고려역사','#왕건'],place_specific:['#금성산성','#왕건','#나주','#후삼국']},
   map_card_intro:'견훤과 왕건이 쟁패한 후삼국 통일의 요충지 — 나주 평야가 내려다보이는 금성산성'}
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
console.log('C모드 47차: '+updated+'개 / 누적 '+lib.total+'개');
ids.forEach((id,i)=>console.log('  C+ ['+id+'] '+scripts[i].place_name));
