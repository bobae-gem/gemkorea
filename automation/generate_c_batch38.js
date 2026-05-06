const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const scripts = [
  {place_id:'GK-GB-SAE-0008',place_name:'상주 경천대',
   script_30s:{text:'낙동강 제일경. 상주 낙동강 위에 솟아오른 기암절벽과 소나무 숲이 어우러진 명승이다. 태조 왕건이 후삼국 통일을 이룬 후 이 절벽에 자신의 이름을 새겼다는 전설이 있다.',char_count:77,emotion_keywords_used:['자연','기억']},
   script_60s:{text:'경북 상주 낙동강변에 절벽이 있다. 경천대다. 높이 30m의 기암절벽 위에 소나무 숲이 우거져 있다. 낙동강 제1경이라 불린다. 전설에 따르면 고려 태조 왕건이 후삼국 통일 전쟁 중 이 절벽 위에서 전황을 살폈다. 이 지역에서 큰 승리를 거두었고, 자신의 이름을 절벽에 새겼다고 한다. 무왕대라고도 불린다. 무흘구곡·자천대·경천대가 이어지는 낙동강 명소다. 명승 제1호.',char_count:256,emotion_keywords_used:['자연','기억']},
   hooks:['낙동강 제1경 기암절벽','왕건이 이름 새긴 전설의 절벽','명승 제1호','소나무 숲 30m 절벽','후삼국 통일 전쟁 현장'],
   thumbnails:['낙동강 제1경','왕건 전설','명승 1호','소나무 절벽','후삼국 전쟁'],
   captions:{youtube:'상주 경천대 | 낙동강 제1경 — 왕건이 이름 새긴 기암절벽 명승 1호. 경북 상주시. #경천대 #낙동강 #명승',instagram:'낙동강 제1경 기암절벽에 왕건이 이름을 새겼다 🏔️ 상주 경천대, 명승 제1호.',tiktok:'낙동강 제1경 경천대에 왕건이 이름 새긴 전설 알아? 상주 #경천대 #낙동강 #역사',xiaohongshu:'尚州擎天台 🏔️ 洛东江第一景 | 王建刻下名字的传说峭壁 | 名胜第1号 | 庆北尚州 #擎天台 #洛东江 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#경상북도','#낙동강','#명승'],place_specific:['#경천대','#상주','#낙동강','#왕건']},
   map_card_intro:'낙동강 제1경 — 태조 왕건이 이름을 새겼다는 전설의 기암절벽 명승 제1호'},
  {place_id:'GK-GB-SAJ-0013',place_name:'영천 은해사',
   script_30s:{text:'팔공산 기슭의 천년 고찰. 은해사라는 이름은 구름 속 안개 바다처럼 신비롭다는 뜻이다. 조선 인조의 원찰로 보호를 받았다. 거조암·운부암 등 9개의 암자를 거느린 큰 절이다.',char_count:78,emotion_keywords_used:['신앙','자연']},
   script_60s:{text:'경북 영천 팔공산 기슭에 절이 있다. 은해사다. 809년 신라 헌덕왕 때 창건됐다. 은해란 구름 속 안개 바다처럼 신비롭다는 뜻이다. 조선 인조 때 왕의 원당이 됐다. 인조가 특별히 보호하며 세금을 면제해 줬다. 경내에 9개의 암자가 있다. 국보 영천 은해사 거조암 영산전이 있다. 부처의 제자 500명을 모신 것으로 한국 최고의 나한상이라 평가받는다.',char_count:257,emotion_keywords_used:['신앙','자연']},
   hooks:['구름 안개 바다처럼 신비로운 절','인조의 왕실 원당','9개 암자 거느린 큰 절','국보 500나한이 있는 절','팔공산 기슭 천년 고찰'],
   thumbnails:['안개 속 신비 절','인조 원당','9개 암자','500나한 국보','팔공산 고찰'],
   captions:{youtube:'영천 은해사 | 인조 왕실 원당 — 국보 500나한상. 경북 영천시. #은해사 #인조원당 #영천',instagram:'구름 안개 바다처럼 신비로운 이름의 절 🛕 영천 은해사, 인조의 원당.',tiktok:'이름이 구름 속 안개 바다라는 뜻인 절 영천 은해사 인조 원당 #은해사 #인조 #역사',xiaohongshu:'永川银海寺 🛕 名称意为云雾海洋的神秘寺院 | 仁祖王室愿堂 | 国宝500罗汉像 | 庆北永川 #银海寺 #仁祖 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#경상북도','#불교','#인조'],place_specific:['#은해사','#인조','#영천','#팔공산']},
   map_card_intro:'구름 안개 바다처럼 신비로운 이름의 조선 인조 원찰 — 국보 500나한상이 있는 팔공산 고찰'},
  {place_id:'GK-GB-SAJ-0014',place_name:'김천 직지사',
   script_30s:{text:'418년 신라 아도화상이 창건한 황악산 고찰. 직지사라는 이름은 직지인심 견성성불에서 왔다. 임진왜란 때 사명대사가 의승군을 조직한 절이다. 경내에 보물 20여 개가 있다.',char_count:80,emotion_keywords_used:['신앙','기억']},
   script_60s:{text:'경북 김천 황악산에 절이 있다. 직지사다. 418년 신라 아도화상이 창건했다. 직지사라는 이름은 마음을 바로 보면 불성을 깨닫는다는 선불교의 핵심 가르침에서 왔다. 임진왜란 때 사명대사가 이 절에서 의승군을 조직해 왜군과 싸웠다. 그래서 의승군의 절이라는 역사도 있다. 경내에 보물 20여 개가 있다. 한국 사찰 중 문화재가 가장 많은 절 중 하나다. 사명대사 진영이 봉안되어 있다.',char_count:260,emotion_keywords_used:['신앙','기억']},
   hooks:['418년 아도화상 창건 최고(最古) 절','사명대사 의승군 조직한 절','보물 20개 이상','선불교 이름의 황악산 고찰','사명대사 진영 봉안'],
   thumbnails:['418년 창건','사명대사 의승군','보물 20개','선불교 직지','사명대사 진영'],
   captions:{youtube:'김천 직지사 | 418년 창건 사명대사 의승군 조직 — 보물 20개. 경북 김천시. #직지사 #사명대사 #의승군',instagram:'임진왜란 사명대사가 의승군 조직한 418년 창건 절 🛕 김천 직지사, 보물 20개.',tiktok:'임진왜란 의승군 사명대사가 군대 조직한 절 김천 직지사 #직지사 #사명대사 #역사',xiaohongshu:'金泉直指寺 🛕 418年阿道和尚创建 | 壬辰倭乱四溟大师组建义僧军 | 宝物20余件 | 庆北金泉 #直指寺 #四溟大师 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#경상북도','#불교','#임진왜란'],place_specific:['#직지사','#사명대사','#김천','#의승군']},
   map_card_intro:'418년 창건 — 임진왜란 사명대사 의승군 조직의 거점이자 보물 20여 개를 품은 고찰'},
  {place_id:'GK-GN-SAJ-0004',place_name:'산청 대원사',
   script_30s:{text:'지리산 깊은 계곡에 숨어 있는 비구니 사찰. 548년 창건됐다. 지리산 대원계곡의 가을 단풍이 아름다운 명소다. 가을이면 대원계곡 단풍 보러 전국에서 탐방객이 찾는다.',char_count:74,emotion_keywords_used:['자연','신앙']},
   script_60s:{text:'경남 산청 지리산 대원계곡 안에 절이 있다. 대원사다. 548년 신라 때 창건됐다. 지금은 비구니 도량이다. 지리산 깊은 계곡 안에 있어 자연 경관이 빼어나다. 가을 단풍이 특히 유명하다. 대원계곡을 따라 올라오는 단풍터널이 아름답다. 절 뒤로 지리산 천왕봉 방향 등산로가 이어진다. 다솔사·쌍계사와 함께 하동·산청 불교 성지 코스다.',char_count:253,emotion_keywords_used:['자연','신앙']},
   hooks:['지리산 깊은 계곡 비구니 사찰','대원계곡 단풍터널','548년 신라 창건','천왕봉 방향 등산 시작점','가을 단풍 명소'],
   thumbnails:['지리산 계곡 사찰','대원계곡 단풍','548년 창건','비구니 도량','천왕봉 등산'],
   captions:{youtube:'산청 대원사 | 548년 창건 지리산 계곡 비구니 사찰 — 대원계곡 단풍. 경남 산청군. #대원사 #지리산 #산청',instagram:'지리산 깊은 계곡에 숨어있는 548년 창건 비구니 절 🍂 산청 대원사, 가을 단풍.',tiktok:'지리산 계곡 깊숙이 있는 548년 비구니 절 단풍 명소 산청 대원사 #대원사 #지리산 #단풍',xiaohongshu:'山清大源寺 🍂 548年新罗创建的智异山溪谷比丘尼道场 | 大源溪谷枫叶名所 | 庆南山清 #大源寺 #智异山 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#경상남도','#불교','#단풍'],place_specific:['#대원사','#지리산','#산청','#비구니']},
   map_card_intro:'548년 창건 지리산 깊은 계곡의 비구니 사찰 — 대원계곡 단풍 명소'},
  {place_id:'GK-GN-SAJ-0006',place_name:'하동 쌍계사',
   script_30s:{text:'723년 신라 때 창건된 지리산 화개계곡의 고찰. 문학 작품의 배경이 된 곳으로 유명하다. 봄이면 절 입구 벚꽃길 십리벚꽃으로 전국에서 탐방객이 찾는다. 유네스코 세계유산 한국의 산사.',char_count:82,emotion_keywords_used:['낭만','신앙']},
   script_60s:{text:'경남 하동 화개계곡에 절이 있다. 쌍계사다. 723년 신라 성덕왕 때 창건됐다. 지리산 화개계곡 깊은 곳에 자리한다. 절 경내에 국보 진감선사탑비가 있다. 한국 최초 차 시배지도 이 근처다. 쌍계사가 특히 유명한 이유는 봄이다. 화개장터에서 쌍계사까지 약 6km의 십리벚꽃길이 펼쳐진다. 매년 4월 벚꽃 축제가 열리고 전국에서 수십만 명이 찾는다. 2018년 유네스코 세계유산 한국의 산사로 등재됐다.',char_count:262,emotion_keywords_used:['낭만','신앙']},
   hooks:['십리벚꽃길의 시작점','화개장터에서 이어지는 벚꽃 6km','국보 진감선사탑비','한국 최초 차 시배지 인근','유네스코 한국의 산사'],
   thumbnails:['십리벚꽃길','6km 벚꽃','국보 탑비','차 시배지','유네스코'],
   captions:{youtube:'하동 쌍계사 | 십리벚꽃길 6km — 국보 진감선사탑비 유네스코. 경남 하동군. #쌍계사 #십리벚꽃 #유네스코',instagram:'화개장터에서 이어지는 6km 십리벚꽃길의 끝에 절이 있다 🌸 하동 쌍계사.',tiktok:'화개장터에서 6km 벚꽃길 걸으면 나오는 절 하동 쌍계사 #쌍계사 #십리벚꽃 #유네스코',xiaohongshu:'河东双溪寺 🌸 花开市场起6km十里樱花路终点 | 国宝真鉴禅师塔碑 | 联合国教科文组织 | 庆南河东 #双溪寺 #十里樱花 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#경상남도','#불교','#유네스코'],place_specific:['#쌍계사','#십리벚꽃','#하동','#한국의산사']},
   map_card_intro:'화개장터에서 이어지는 6km 십리벚꽃길의 끝 — 유네스코 세계유산 한국의 산사'}
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
console.log('C모드 38차: '+updated+'개 / 누적 '+lib.total+'개');
ids.forEach((id,i)=>console.log('  C+ ['+id+'] '+scripts[i].place_name));
