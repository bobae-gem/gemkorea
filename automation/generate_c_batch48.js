const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const scripts = [
  {place_id:'GK-GW-SAE-0006',place_name:'양구 선사박물관',
   script_30s:{text:'양구 해안 분지에서 발굴된 구석기·신석기 유물을 전시하는 박물관. 해안분지는 운석 충돌로 만들어진 지형이다. 한반도에서 가장 오래된 신석기 유물이 이 분지에서 나왔다.',char_count:76,emotion_keywords_used:['기억','발견']},
   script_60s:{text:'강원도 양구에 독특한 지형이 있다. 해안분지다. 운석 충돌로 만들어진 것으로 추정되는 지형이다. 이 분지 안에서 구석기·신석기 시대 유물이 대량으로 발굴됐다. 한반도에서 가장 오래된 신석기 유물도 여기서 나왔다. 이 유물들을 전시하는 곳이 양구 선사박물관이다. 양구는 DMZ 접경 지역으로 군사적으로 민감한 곳이다. 그 땅 아래에 수만 년 전 인류의 흔적이 잠들어 있었다.',char_count:255,emotion_keywords_used:['기억','발견']},
   hooks:['운석 충돌로 만들어진 분지 박물관','한반도 최고(最古) 신석기 유물','구석기 신석기 대량 발굴','DMZ 땅 아래 수만년 역사','양구 해안분지의 비밀'],
   thumbnails:['운석 충돌 분지','최고 신석기 유물','대량 발굴','DMZ 역사','해안분지 비밀'],
   captions:{youtube:'양구 선사박물관 | 운석 충돌 분지에서 나온 한반도 최고(最古) 신석기 유물. 강원 양구군. #양구선사박물관 #해안분지 #신석기',instagram:'운석 충돌로 생긴 분지에서 한반도 최고 신석기 유물이 나왔다 🏺 양구 선사박물관.',tiktok:'운석 충돌 분지에서 한반도 제일 오래된 신석기 유물 나왔음 양구 선사박물관 #양구 #신석기 #역사',xiaohongshu:'杨口先史博物馆 🏺 陨石撞击形成的盆地出土朝鲜半岛最古新石器文物 | 江原杨口 #杨口 #新石器时代 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#강원도','#선사시대','#신석기'],place_specific:['#양구선사박물관','#해안분지','#신석기','#양구']},
   map_card_intro:'운석 충돌로 만들어진 분지에서 한반도 최고(最古) 신석기 유물이 발굴된 양구 선사박물관'},
  {place_id:'GK-JB-WAR-0001',place_name:'고창 무장기포지',
   script_30s:{text:'1894년 동학농민혁명의 제1차 봉기 현장. 전봉준이 무장에서 처음 기포를 올렸다. 농민군이 처음 봉기를 선언한 곳이다. 황토현 전투보다 먼저 시작된 동학혁명의 출발점이다.',char_count:75,emotion_keywords_used:['저항','혁명']},
   script_60s:{text:'전북 고창 무장에 기념지가 있다. 무장기포지다. 1894년 3월 20일, 동학농민혁명의 역사가 여기서 시작됐다. 전봉준이 이끄는 동학 농민들이 이 무장현 관아 앞에 모였다. 농민들이 처음으로 봉기를 선포했다. 기포라 한다. 황토현 전투가 첫 승리라면, 무장은 첫 봉기다. 조선 봉건 체제와 외세 침략에 맞선 최초의 선언이 이 땅에서 울렸다. 사적 제498호.',char_count:252,emotion_keywords_used:['저항','혁명']},
   hooks:['동학농민혁명 제1차 봉기 현장','전봉준이 처음 기포 올린 곳','황토현 전투보다 먼저 시작','1894년 3월 20일 역사','조선 봉건 저항 최초 선언'],
   thumbnails:['제1차 봉기','전봉준 기포','황토현 전에','1894.3.20','최초 저항 선언'],
   captions:{youtube:'고창 무장기포지 | 동학농민혁명 제1차 봉기 현장 — 1894년 전봉준. 전북 고창군. #무장기포지 #동학농민혁명 #전봉준',instagram:'동학농민혁명이 여기서 시작됐다 ⚡ 고창 무장기포지, 1894년 3월 20일.',tiktok:'동학농민혁명 시작이 황토현 전투 아니라 고창 무장기포지임 #무장기포지 #동학농민혁명 #역사',xiaohongshu:'高敞茂长起包地 ⚡ 东学农民革命第一次起义现场 | 全凤准在此首次号召 | 全北高敞 #茂长起包地 #东学农民革命 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#전라북도','#동학농민혁명','#전봉준'],place_specific:['#무장기포지','#동학농민혁명','#고창','#전봉준']},
   map_card_intro:'전봉준이 이끄는 농민군이 처음 봉기를 선포한 동학농민혁명의 출발점 — 고창 무장기포지'},
  {place_id:'GK-GN-GEN-0001',place_name:'산청 남사예담촌',
   script_30s:{text:'500년 넘은 돌담이 마을을 두른 경남의 전통 마을. 이씨·최씨·하씨 세 성이 모여 사는 집성촌이다. 조선 시대 기와집들이 돌담과 어우러져 드라마 촬영지로 인기다.',char_count:72,emotion_keywords_used:['전통','기억']},
   script_60s:{text:'경남 산청에 전통 마을이 있다. 남사예담촌이다. 마을 주변을 500년이 넘은 돌담이 두르고 있다. 이씨·최씨·하씨 세 씨족의 집성촌이다. 조선 시대부터 형성된 마을이다. 기와집들이 돌담 사이에 서 있다. 지리산 자락 청정한 환경 속에 자리해 경관이 빼어나다. 여러 드라마의 촬영지로 유명해졌다. 유네스코 지속가능관광지로 선정됐다.',char_count:251,emotion_keywords_used:['전통','기억']},
   hooks:['500년 돌담 두른 전통 마을','이씨·최씨·하씨 세 집성촌','조선 기와집 돌담 경관','드라마 단골 촬영지','지리산 자락 청정 마을'],
   thumbnails:['500년 돌담','세 씨족 집성촌','조선 기와집','드라마 촬영지','지리산 마을'],
   captions:{youtube:'산청 남사예담촌 | 500년 돌담 전통 마을 — 드라마 촬영지. 경남 산청군. #남사예담촌 #전통마을 #산청',instagram:'500년 돌담이 마을을 두른 경남의 전통 집성촌 🏡 산청 남사예담촌.',tiktok:'500년 돌담 두른 드라마 촬영지 경남 산청 남사예담촌 #남사예담촌 #전통마을 #산청',xiaohongshu:'山清南沙礼潭村 🏡 500年石墙围绕的传统村庄 | 韩剧拍摄地 | 庆南山清 #南沙礼潭村 #传统村落 #韩国旅游'},
   hashtags:{korean:['#한국역사','#역사여행','#경상남도','#전통마을','#조선'],place_specific:['#남사예담촌','#산청','#전통마을','#돌담']},
   map_card_intro:'500년 돌담이 두른 이씨·최씨·하씨 세 씨족의 조선 집성촌 — 드라마 촬영지'},
  {place_id:'GK-GN-SAJ-0001',place_name:'함양 벽송사',
   script_30s:{text:'1520년 벽송 지엄 대사가 중건한 조선 선불교의 중심 도량. 서산대사와 사명대사가 이 절에서 수행했다. 지리산 칠선계곡 초입에 있다. 삼층석탑이 보물이다.',char_count:73,emotion_keywords_used:['신앙','기억']},
   script_60s:{text:'경남 함양 지리산 마천면에 절이 있다. 벽송사다. 1520년 조선 중종 때 벽송 지엄 대사가 중건했다. 조선 선불교의 가장 중요한 사찰 중 하나다. 청허 서산대사와 사명유정 두 고승이 이 절에서 수행했다. 임진왜란 의승군을 이끈 두 스님이 여기서 나왔다. 삼층석탑이 보물이다. 지리산 칠선계곡 입구에 자리해 계곡 경관이 아름답다. 조선 선불교의 중심 도량이었다.',char_count:254,emotion_keywords_used:['신앙','기억']},
   hooks:['서산대사·사명대사 수행한 절','임진왜란 의승군 두 스님의 출발지','조선 선불교 중심 도량','지리산 칠선계곡 입구','1520년 중건 보물 석탑'],
   thumbnails:['서산 사명 수행지','의승군 출발지','선불교 중심','칠선계곡 입구','보물 석탑'],
   captions:{youtube:'함양 벽송사 | 서산대사·사명대사 수행 — 조선 선불교 중심 지리산 사찰. 경남 함양군. #벽송사 #서산대사 #사명대사',instagram:'서산대사와 사명대사가 수행한 조선 선불교 중심 절 🛕 함양 벽송사.',tiktok:'임진왜란 의승군 이끈 두 스님이 수행한 절 함양 벽송사 #벽송사 #서산대사 #사명대사',xiaohongshu:'咸阳碧松寺 🛕 西山大师与四溟大师修行的朝鲜禅宗中心道场 | 庆南咸阳 #碧松寺 #西山大师 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#경상남도','#불교','#서산대사'],place_specific:['#벽송사','#서산대사','#사명대사','#함양']},
   map_card_intro:'서산대사와 사명대사가 수행한 조선 선불교의 중심 도량 — 지리산 칠선계곡 입구 벽송사'},
  {place_id:'GK-GN-GEN-0002',place_name:'통영 세병관',
   script_30s:{text:'조선 삼도수군통제영의 객사. 1605년 세워진 건물이 지금도 통영에 서 있다. 은하수로 병기를 씻는다는 뜻의 세병. 경복궁 경회루와 같은 규모의 조선 최대 건물 중 하나다.',char_count:74,emotion_keywords_used:['역사','기억']},
   script_60s:{text:'경남 통영에 조선 시대 건물이 있다. 세병관이다. 1605년 세워진 삼도수군통제영의 객사다. 세병이란 은하수로 병기를 씻는다는 뜻이다. 태평성대를 바라는 이름이다. 이 건물이 특별한 이유는 규모다. 정면 9칸, 측면 5칸의 팔작지붕. 경복궁 경회루, 여수 진남관과 함께 현존하는 조선시대 최대 규모 건축물 중 하나다. 국보 제305호. 임진왜란 이후 이순신의 유업을 이은 삼도수군통제영의 중심 건물이었다.',char_count:258,emotion_keywords_used:['역사','기억']},
   hooks:['경회루급 조선 최대 건물','국보 세병관','은하수로 병기 씻는 뜻','이순신 유업 이은 수군 본부','1605년 통영의 랜드마크'],
   thumbnails:['경회루급 건물','국보 305호','세병 뜻','수군 본부','1605년'],
   captions:{youtube:'통영 세병관 | 경회루·진남관과 조선 최대 규모 — 국보 305호. 경남 통영시. #세병관 #통영 #국보',instagram:'경복궁 경회루와 같은 급 조선 최대 건물 중 하나 🏛️ 통영 세병관, 국보.',tiktok:'조선 최대 건물 중 하나 경회루급 국보가 통영에 있음 세병관 #세병관 #통영 #국보',xiaohongshu:'统营洗兵馆 🏛️ 朝鲜最大建筑之一 | 规模媲美庆会楼 | 国宝305号 | 庆南统营 #洗兵馆 #三道水军 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#경상남도','#조선역사','#국보'],place_specific:['#세병관','#통영','#삼도수군통제영','#국보']},
   map_card_intro:'경회루·진남관과 함께 현존 조선 최대 규모 건축물 — 통영 세병관 국보 제305호'}
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
console.log('C모드 48차: '+updated+'개 / 누적 '+lib.total+'개');
ids.forEach((id,i)=>console.log('  C+ ['+id+'] '+scripts[i].place_name));
