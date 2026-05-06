const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const scripts = [
  {place_id:'GK-CB-SWO-0001',place_name:'괴산 화양서원',
   script_30s:{text:'우암 송시열의 서원. 조선 후기 가장 강력한 노론의 수장이 사랑한 계곡에 있다. 화양동 계곡은 중국의 대유학자 주자를 그리워하며 이름 붙인 것이다. 우암의 흔적이 곳곳에 있다.',char_count:79,emotion_keywords_used:['학문','기억']},
   script_60s:{text:'충북 괴산 화양동 계곡에 서원이 있다. 화양서원이다. 조선 후기 노론의 수장 우암 송시열을 배향한다. 송시열은 조선 후기 가장 영향력 있는 성리학자였다. 이 계곡을 사랑해 자주 찾았고, 중국 대유학자 주자를 존경해 이 계곡의 이름을 화양동이라 했다. 1689년 숙종 때 서인이 실각하고 남인이 집권하자 사약을 받았다. 그 후 서원이 세워졌다. 화양동 계곡은 화강암 암반과 맑은 물이 어우러져 지금도 명승이다.',char_count:262,emotion_keywords_used:['학문','기억']},
   hooks:['노론 수장 송시열의 서원','주자를 그리워하며 이름 붙인 계곡','사약 받은 조선 최강 학자','화양동 계곡 명승 경관','성리학의 심장부'],
   thumbnails:['송시열 서원','주자 그리운 계곡','사약 받은 학자','화양동 경관','노론 수장'],
   captions:{youtube:'괴산 화양서원 | 노론 수장 송시열을 배향 — 주자 그리워한 화양동 계곡. 충북 괴산군. #화양서원 #송시열 #괴산',instagram:'노론 수장 송시열이 주자를 그리워하며 이름 붙인 계곡 계곡에 서원이 있다 📚 화양서원.',tiktok:'조선 최강 성리학자 송시열이 사약 받은 이유와 그 서원 괴산 화양서원 #화양서원 #송시열 #역사',xiaohongshu:'槐山华阳书院 📚 朝鲜后期儒林领袖宋时烈配享 | 思念朱熹而命名的华阳洞溪谷 | 忠北槐山 #华阳书院 #宋时烈 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#충청북도','#조선역사','#송시열'],place_specific:['#화양서원','#송시열','#괴산','#화양동']},
   map_card_intro:'주자를 그리워해 이름 붙인 계곡에 세운 노론 수장 송시열의 서원'},
  {place_id:'GK-CN-SAJ-0004',place_name:'보령 성주사지',
   script_30s:{text:'낭혜화상 무염이 창건해 고려 때 2,000명이 넘는 승려가 머물렀던 대사찰의 터. 5개의 탑이 한 사찰 터에 있는 독특한 배치다. 낭혜화상탑비는 최치원이 글을 쓴 국보다.',char_count:81,emotion_keywords_used:['기억','발견']},
   script_60s:{text:'충남 보령 성주산 기슭에 절터가 있다. 성주사지다. 신라 말 낭혜화상 무염이 847년 창건했다. 고려 때는 2,000명이 넘는 승려가 머물렀던 대사찰이었다. 지금은 터만 남아 있다. 이 절터가 특이한 이유는 탑이 5개나 있다는 것이다. 한 사찰에 이렇게 많은 탑이 있는 것은 드물다. 낭혜화상탑비가 국보다. 이 비문을 당대 최고의 문장가 최치원이 썼다. 사적 제307호.',char_count:259,emotion_keywords_used:['기억','발견']},
   hooks:['5개의 탑이 있는 독특한 절터','최치원이 쓴 국보 탑비','2000명 승려의 대사찰 터','낭혜화상 무염 창건','신라 말 대사찰의 흔적'],
   thumbnails:['5개 탑 절터','최치원 비문','2000명 대사찰','낭혜화상','신라 말 유적'],
   captions:{youtube:'보령 성주사지 | 최치원이 비문 쓴 국보 — 5개 탑 2000명 대사찰 터. 충남 보령시. #성주사지 #최치원 #보령',instagram:'최치원이 비문을 쓴 국보 탑비가 있는 절터 🗿 보령 성주사지, 5개의 탑.',tiktok:'최치원이 비문 쓴 국보 탑비가 있는 충남 보령 성주사지 #성주사지 #최치원 #역사',xiaohongshu:'保宁圣住寺址 🗿 崔致远撰写碑文的国宝塔碑 | 5座塔的独特寺院遗址 | 忠南保宁 #圣住寺址 #崔致远 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#충청남도','#신라역사','#최치원'],place_specific:['#성주사지','#낭혜화상','#보령','#최치원']},
   map_card_intro:'최치원이 비문을 쓴 국보 탑비와 5개의 탑이 있는 신라 말 대사찰 터'},
  {place_id:'GK-CN-SAJ-0005',place_name:'공주 마곡사',
   script_30s:{text:'백범 김구가 독립운동 후 은신한 절. 1896년 명성황후 시해에 분노해 일본군 장교를 죽이고 도피한 청년 김구가 이 절에서 머리를 깎았다. 유네스코 세계유산 한국의 산사.',char_count:79,emotion_keywords_used:['역사','저항']},
   script_60s:{text:'충남 공주 태화산에 절이 있다. 마곡사다. 640년 신라 자장율사가 창건했다. 이 절은 백범 김구와 특별한 인연이 있다. 1896년 김구는 명성황후 시해에 분노해 일본군 장교를 죽였다. 탈옥 후 도피하다 이 절에 들어왔다. 원종이라는 법명으로 머리를 깎고 승려가 됐다. 1년 후 환속했다. 해방 후 김구 선생이 이 절을 다시 찾아 감사의 나무를 심었다. 지금도 그 나무가 자라고 있다. 유네스코 세계유산 한국의 산사.',char_count:265,emotion_keywords_used:['역사','저항']},
   hooks:['김구가 머리 깎은 절','명성황후 복수 후 도피처','원종 법명으로 승려 된 김구','해방 후 심은 감사의 나무','유네스코 한국의 산사'],
   thumbnails:['김구 도피처','명성황후 복수','원종 법명','감사의 나무','유네스코'],
   captions:{youtube:'공주 마곡사 | 김구가 머리 깎고 숨은 절 — 유네스코 한국의 산사. 충남 공주시. #마곡사 #김구 #유네스코',instagram:'명성황후 복수 후 도피한 김구가 머리 깎은 절 🛕 공주 마곡사, 유네스코 세계유산.',tiktok:'명성황후 시해 복수하고 도망친 김구가 머리 깎은 절 공주 마곡사 #마곡사 #김구 #역사',xiaohongshu:'公州麻谷寺 🛕 金九为明成皇后复仇后逃亡剃度之地 | 联合国教科文组织韩国山寺 | 忠南公州 #麻谷寺 #金九 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#충청남도','#김구','#유네스코'],place_specific:['#마곡사','#김구','#공주','#한국의산사']},
   map_card_intro:'명성황후 복수 후 도피한 김구가 머리 깎고 숨은 절 — 유네스코 세계유산'},
  {place_id:'GK-CN-SAE-0002',place_name:'예산 추사 김정희 고택',
   script_30s:{text:'추사체를 만든 조선 최고의 서예가 김정희의 고택. 세한도를 그리고 추사체를 완성하며 조선 예술의 정수를 이룬 그의 집이 충남 예산에 있다. 제주 유배 9년이 추사를 완성시켰다.',char_count:82,emotion_keywords_used:['예술','기억']},
   script_60s:{text:'충남 예산에 조선 시대 고택이 있다. 추사 김정희의 고택이다. 김정희는 추사체라는 독자적 서체를 개발한 조선 최고의 서예가이자 금석학자다. 24세 때 청나라에 가서 당대 최고 학자들과 교류했다. 귀국 후 학문과 예술에 전념했다. 1840년 제주도로 유배됐다. 9년 동안 유배 생활하며 추사체를 완성했다. 국보 세한도도 유배 중에 그렸다. 55세에 유배에서 풀렸고 73세에 사망했다. 이 고택에서 그의 유물을 볼 수 있다.',char_count:263,emotion_keywords_used:['예술','기억']},
   hooks:['추사체 만든 조선 최고 서예가','9년 유배가 추사를 완성시켰다','국보 세한도 그린 예술가','24세 청나라 유학','예산 고택의 조선 예술'],
   thumbnails:['추사체 창제','9년 유배 완성','국보 세한도','청나라 유학','예산 고택'],
   captions:{youtube:'예산 추사 김정희 고택 | 추사체 세한도 — 9년 유배가 완성시킨 조선 예술. 충남 예산군. #추사 #김정희 #세한도',instagram:'9년 제주 유배 중에 추사체를 완성한 조선 최고 서예가의 집 🖌️ 예산 추사 고택.',tiktok:'제주 유배 9년이 추사체 완성시킨 조선 서예가 김정희 고택 예산에 있음 #추사 #김정희 #역사',xiaohongshu:'礼山秋史金正喜故宅 🖌️ 流配济州9年完成秋史体 | 国宝岁寒图 | 朝鲜最伟大书法家 | 忠南礼山 #秋史 #金正喜 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#충청남도','#조선역사','#서예'],place_specific:['#추사','#김정희','#예산','#세한도']},
   map_card_intro:'9년 제주 유배로 추사체를 완성한 조선 최고 서예가 김정희의 고택'},
  {place_id:'GK-GN-GID-0001',place_name:'울산 반구대 암각화',
   script_30s:{text:'약 7,000년 전 선사시대 사람들이 바위에 새긴 그림. 고래와 사슴, 배가 새겨져 있다. 국보 제285호. 세계에서 가장 오래된 고래 사냥 그림이 여기 있다.',char_count:73,emotion_keywords_used:['경이','기억']},
   script_60s:{text:'울산 언양 대곡천변 바위에 그림이 새겨져 있다. 반구대 암각화다. 약 7,000년 전 신석기·청동기 시대 사람들이 새겼다. 고래 58마리를 포함해 사슴·멧돼지·호랑이·배·사람 등 300여 점의 그림이 바위에 새겨져 있다. 세계에서 가장 오래된 고래 사냥 그림이다. 당시 이 지역 사람들이 고래를 잡아 생활했다는 증거다. 국보 제285호. 유네스코 세계문화유산 등재를 추진 중이다. 사연댐 수위 때문에 보존 위기이기도 하다.',char_count:264,emotion_keywords_used:['경이','기억']},
   hooks:['세계 최고(最古) 고래 사냥 그림','7000년 전 바위 그림','고래 58마리가 새겨진 바위','선사시대 사람들의 예술','유네스코 등재 추진 중'],
   thumbnails:['7000년 전 그림','고래 58마리','세계 최고 고래 사냥','선사 예술','국보 285호'],
   captions:{youtube:'울산 반구대 암각화 | 세계 최고(最古) 고래 사냥 그림 — 7000년 전 국보. 울산 울주군. #반구대암각화 #고래사냥 #국보',instagram:'7,000년 전 바위에 고래 58마리가 새겨져 있다 🐳 울산 반구대 암각화, 세계 최고.',tiktok:'7000년 전 고래 사냥 그림 세계에서 제일 오래된 게 울산에 있음 #반구대암각화 #고래 #역사',xiaohongshu:'蔚山盘龟台岩刻画 🐳 7000年前的世界最古鲸鱼捕猎图 | 58头鲸鱼岩刻 | 国宝285号 | 蔚山蔚州 #盘龟台 #岩刻画 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#울산','#선사시대','#국보'],place_specific:['#반구대암각화','#고래사냥','#울산','#선사유적']},
   map_card_intro:'7,000년 전 세계에서 가장 오래된 고래 사냥 그림이 새겨진 바위 — 국보 제285호'}
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
console.log('C모드 35차: '+updated+'개 / 누적 '+lib.total+'개');
ids.forEach((id,i)=>console.log('  C+ ['+id+'] '+scripts[i].place_name));
