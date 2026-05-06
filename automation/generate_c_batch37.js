const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const scripts = [
  {place_id:'GK-JN-SWO-0001',place_name:'장성 필암서원',
   script_30s:{text:'조선 후기 성리학자 하서 김인후를 배향한 서원. 인종의 유일한 스승이었던 김인후가 이 서원의 주인이다. 2019년 유네스코 세계유산 한국의 서원으로 등재됐다.',char_count:72,emotion_keywords_used:['학문','기억']},
   script_60s:{text:'전남 장성에 서원이 있다. 필암서원이다. 조선 후기 성리학자 하서 김인후를 배향한다. 김인후는 조선 12대 왕 인종의 세자 시절 유일한 스승이었다. 인종이 즉위 후 8개월 만에 죽자 평생 상복을 입고 벼슬을 거부했다. 의리의 학자였다. 필암서원은 인종이 사용하던 벼루와 문방사우를 보관하고 있다. 숙종이 사액해 필암서원이라는 이름을 내렸다. 2019년 유네스코 세계유산 한국의 서원으로 등재됐다.',char_count:260,emotion_keywords_used:['학문','기억']},
   hooks:['인종의 유일한 스승의 서원','왕 죽자 평생 상복 입은 학자','인종의 벼루를 보관한 서원','의리의 성리학자 김인후','유네스코 한국의 서원'],
   thumbnails:['인종 스승의 서원','상복 입은 의리','인종의 벼루','하서 김인후','유네스코'],
   captions:{youtube:'장성 필암서원 | 인종의 스승 하서 김인후 서원 — 유네스코 세계유산. 전남 장성군. #필암서원 #김인후 #유네스코',instagram:'왕이 죽자 평생 상복 입고 벼슬 거부한 의리의 학자 서원 📚 장성 필암서원.',tiktok:'인종 죽자 상복 평생 입고 벼슬 거부한 의리 학자 서원 장성 필암서원 #필암서원 #김인후 #유네스코',xiaohongshu:'长城筚岩书院 📚 朝鲜仁宗唯一老师金麟厚配享 | 王驾崩后终身服丧拒官 | 联合国教科文组织 | 全南长城 #筚岩书院 #金麟厚 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#전라남도','#조선역사','#유네스코'],place_specific:['#필암서원','#김인후','#장성','#한국의서원']},
   map_card_intro:'왕이 죽자 평생 상복을 입고 벼슬을 거부한 의리의 학자 김인후 배향 서원 — 유네스코'},
  {place_id:'GK-JB-SAJ-0005',place_name:'정읍 내장사',
   script_30s:{text:'내장산 국립공원 품에 안긴 천년 고찰. 가을 단풍이 한국에서 가장 아름다운 사찰로 꼽힌다. 636년 창건됐다. 조선 인조 때 전라도 수군통제사가 이 절에 국난을 피해 병사를 훈련시켰다.',char_count:82,emotion_keywords_used:['자연','기억']},
   script_60s:{text:'전북 정읍 내장산 안에 절이 있다. 내장사다. 636년 신라 때 창건됐다. 내장이란 많은 것이 안에 감춰져 있다는 뜻이다. 이 절이 유명한 이유는 단풍 때문이다. 내장산 단풍은 한국에서 가장 아름다운 단풍 중 하나다. 내장사에서 우화정까지 이어지는 단풍터널이 압권이다. 일주문에서 시작되는 1km 오솔길이 특히 아름답다. 조선 시대에는 전라도 수군통제사 이순신이 병사를 훈련시키던 기록도 있다. 국립공원 내에 있어 사계절 탐방객이 끊이지 않는다.',char_count:264,emotion_keywords_used:['자연','기억']},
   hooks:['한국 최고 단풍 사찰','내장산 단풍터널의 중심','636년 신라 창건','이순신도 병사 훈련한 절','1km 오솔길 단풍'],
   thumbnails:['한국 최고 단풍','단풍터널','636년 창건','이순신 훈련','1km 오솔길'],
   captions:{youtube:'정읍 내장사 | 한국 최고 단풍 사찰 — 내장산 단풍터널. 전북 정읍시. #내장사 #내장산단풍 #정읍',instagram:'한국에서 가장 아름다운 단풍 사찰 🍂 정읍 내장사, 내장산 단풍터널.',tiktok:'한국 단풍 최고 명소 내장산 내장사 단풍터널 알고 있었음? #내장사 #내장산단풍 #정읍',xiaohongshu:'井邑内藏寺 🍂 韩国最美枫叶寺院 | 内藏山枫叶隧道 | 全北井邑 #内藏寺 #内藏山 #韩国旅游'},
   hashtags:{korean:['#한국역사','#역사여행','#전라북도','#불교','#단풍'],place_specific:['#내장사','#내장산','#정읍','#단풍터널']},
   map_card_intro:'한국 최고의 단풍 사찰 — 내장산 단풍터널의 중심 636년 창건 신라 고찰'},
  {place_id:'GK-GN-SAJ-0003',place_name:'밀양 만어사',
   script_30s:{text:'바위가 물고기 형상의 돌로 가득 찬 사찰. 만어사 경내에 물고기 모양 돌이 수천 개가 쌓여 있다. 두드리면 금속 소리가 난다. 신라 때부터 전해지는 전설이 있는 독특한 곳이다.',char_count:78,emotion_keywords_used:['경이','기억']},
   script_60s:{text:'경남 밀양 만어산에 절이 있다. 만어사다. 46년 가야 때 창건됐다는 전설이 있다. 이 절의 독특한 것은 경내 바위들이다. 사찰 뒤쪽 산비탈에 물고기 모양의 돌들이 수천 개 깔려 있다. 두드리면 금속 소리가 난다. 어석이다. 전설에 따르면 동해 용왕의 아들과 수많은 물고기가 이 산으로 와서 돌이 됐다고 한다. 지금도 두드리면 종소리 같은 소리가 나는 돌들이 있다. 경상남도 기념물.',char_count:258,emotion_keywords_used:['경이','기억']},
   hooks:['물고기가 돌이 됐다는 전설','두드리면 금속 소리 나는 돌','수천 개 물고기 형상 어석','46년 창건 가야 시대 전설','경남 밀양 독특한 사찰'],
   thumbnails:['물고기 모양 돌','금속 소리 어석','수천 개 바위','가야 전설','밀양 독특한 절'],
   captions:{youtube:'밀양 만어사 | 두드리면 금속 소리 나는 물고기 돌 수천 개 — 가야 전설. 경남 밀양시. #만어사 #어석 #밀양',instagram:'두드리면 금속 소리 나는 물고기 형상 돌이 수천 개 있는 절 🐟 밀양 만어사.',tiktok:'두드리면 금속 소리 나는 물고기 형상 돌 수천 개 있는 절 경남 밀양 만어사 #만어사 #어석 #역사',xiaohongshu:'密阳万鱼寺 🐟 数千块鱼形石头敲击发出金属声音 | 伽倻时代传说 | 庆南密阳 #万鱼寺 #鱼石 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#경상남도','#가야','#불교'],place_specific:['#만어사','#어석','#밀양','#물고기돌']},
   map_card_intro:'두드리면 금속 소리가 나는 물고기 형상 돌 수천 개가 있는 가야 전설의 사찰'},
  {place_id:'GK-CB-SAE-0002',place_name:'제천 의림지',
   script_30s:{text:'삼한 시대에 조성된 한국에서 가장 오래된 저수지. 2,000년이 넘었다. 제천 도심 근처에 있어 주민들이 산책하는 공원이 됐다. 제림과 버드나무가 어우러진 경관이 아름답다.',char_count:73,emotion_keywords_used:['기억','자연']},
   script_60s:{text:'충북 제천에 저수지가 있다. 의림지다. 삼한 시대에 만들어진 것으로 추정된다. 2,000년이 넘은 한국에서 가장 오래된 저수지다. 제천이라는 지명 자체가 이 저수지와 연관이 있다는 설이 있다. 주변에 제림이 있고 수양버드나무가 늘어서 있어 봄에 특히 아름답다. 연못 안에 작은 섬이 있고 영호각이라는 정자가 있다. 조선 인조 때 의림지가 무너져 대흉년이 들었다는 기록도 있다. 사적 제제 520호. 명승이다.',char_count:256,emotion_keywords_used:['기억','자연']},
   hooks:['한국에서 가장 오래된 저수지','삼한 시대 2000년 역사','제천 이름과 연관된 저수지','버드나무와 제림 봄 경관','조선 때 무너져 대흉년 기록'],
   thumbnails:['2000년 저수지','삼한 시대','버드나무 봄 경관','영호각 정자','명승'],
   captions:{youtube:'제천 의림지 | 한국 최고(最古) 2000년 된 삼한 시대 저수지 — 명승. 충북 제천시. #의림지 #제천 #명승',instagram:'한국에서 가장 오래된 2000년 저수지 옆에 버드나무가 흐드러진다 🌊 제천 의림지.',tiktok:'한국에서 제일 오래된 저수지가 2000년 됐다는 제천 의림지 알아? #의림지 #제천 #역사',xiaohongshu:'堤川义林池 🌊 三韩时代2000年历史的韩国最古水库 | 垂柳与亭台楼阁 | 忠北堤川 #义林池 #堤川 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#충청북도','#삼한시대','#자연'],place_specific:['#의림지','#제천','#저수지','#명승']},
   map_card_intro:'2,000년이 넘은 한국 최고(最古) 저수지 — 삼한 시대 유산 제천 의림지'},
  {place_id:'GK-GB-SAJ-0012',place_name:'청도 운문사',
   script_30s:{text:'600년대 창건된 비구니 사찰. 국내 최대 규모의 비구니 전문 강원이 있는 절이다. 운문산과 호거산 기슭 계곡에 자리해 경관이 빼어나다. 처진 소나무 한 그루가 유명하다.',char_count:75,emotion_keywords_used:['신앙','자연']},
   script_60s:{text:'경북 청도 운문산 기슭에 절이 있다. 운문사다. 600년 신라 진흥왕 때 창건됐다. 지금은 국내 최대 규모의 비구니 전문 강원이 이 절에 있다. 수백 명의 비구니 스님들이 이곳에서 수행한다. 경내에 국보 원응국사비가 있다. 천연기념물 처진 소나무도 유명하다. 수령 500년의 소나무가 우산처럼 퍼져있다. 운문산 계곡과 어우러진 경관이 빼어나다. 보물 6개가 경내에 있다.',char_count:257,emotion_keywords_used:['신앙','자연']},
   hooks:['국내 최대 비구니 강원','수백 명 비구니 수행 도량','천연기념물 처진 소나무','국보 원응국사비','운문산 계곡 빼어난 경관'],
   thumbnails:['비구니 강원','처진 소나무','국보 비','운문산 계곡','보물 6개'],
   captions:{youtube:'청도 운문사 | 국내 최대 비구니 강원 — 천연기념물 처진 소나무. 경북 청도군. #운문사 #비구니강원 #청도',instagram:'수백 명 비구니 스님이 수행하는 국내 최대 비구니 강원 🛕 청도 운문사.',tiktok:'국내 최대 비구니 강원이 경북 청도 운문사에 있음 #운문사 #비구니 #역사',xiaohongshu:'清道云门寺 🛕 国内最大比丘尼专门讲院 | 天然纪念物垂枝松 | 庆北清道 #云门寺 #比丘尼 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#경상북도','#불교','#비구니'],place_specific:['#운문사','#비구니강원','#청도','#처진소나무']},
   map_card_intro:'국내 최대 비구니 전문 강원 — 천연기념물 처진 소나무와 보물이 있는 운문산 고찰'}
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
console.log('C모드 37차: '+updated+'개 / 누적 '+lib.total+'개');
ids.forEach((id,i)=>console.log('  C+ ['+id+'] '+scripts[i].place_name));
