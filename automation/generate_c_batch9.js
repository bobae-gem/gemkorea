const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const scripts = [
  {place_id:'GK-SE-SAN-0001',place_name:'북한산성',script_30s:{text:'숙종 37년(1711), 서울 북쪽을 지키기 위해 산성을 쌓았다. 총 길이 12.7km. 조선 후기 도성 방어 체계의 핵심이었다. 지금은 서울 시민들이 가장 즐겨 찾는 국립공원 등산로가 됐다. 산성 안에 역사가 있고, 산성 위에 서울 야경이 있다.',char_count:111,emotion_keywords_used:['권력','생존','기억']},script_60s:{text:'1711년, 숙종은 북쪽에서 오는 외적을 막기 위해 산성을 쌓기로 했다. 서울 북쪽의 험준한 산지를 따라 총 12.7km의 성벽을 쌓았다. 공사에 동원된 인원만 수만 명. 성 안에는 행궁도 지었다. 유사시 임금이 피신할 수 있도록. 병자호란의 교훈이었다. 지금 북한산성 안에는 성문과 장대, 창고 터가 남아있다. 그리고 서울 시민 수백만 명이 주말마다 이 성벽 위를 걸어 다닌다. 역사의 산성이 시민의 공원이 됐다.',char_count:264,emotion_keywords_used:['권력','생존','기억','선택']},
    hooks:['병자호란 교훈으로 쌓은 성','서울 12.7km 산성의 비밀','유사시 임금이 피신할 행궁','역사의 산성이 시민공원이 됐다','북한산성에서 보이는 서울 야경'],thumbnails:['병자호란의 교훈','12.7km 산성','임금의 피신처','시민공원이 된 역사','서울 야경'],
    captions:{youtube:'북한산성 | 병자호란 교훈으로 쌓은 12.7km 산성 — 서울 시민의 국립공원. 서울 도봉구. #북한산성 #조선후기 #서울',instagram:'병자호란 교훈으로 쌓은 성이 지금은 서울 시민 등산로가 됐다 🏔️ 북한산성.',tiktok:'임금 피신처로 만든 성이 지금 서울 등산 명소됨 #북한산성 #역사 #서울',xiaohongshu:'北汉山城 🏔️ 以丙子胡乱为教训修建的首尔山城 | 如今成为市民国立公园 #北汉山城 #韩国历史 #首尔'},
    hashtags:{korean:['#한국역사','#역사여행','#서울','#조선역사','#국립공원'],place_specific:['#북한산성','#숙종','#조선후기','#북한산']},map_card_intro:'병자호란 교훈으로 쌓은 12.7km 산성 — 지금은 서울 시민의 국립공원'},
  {place_id:'GK-SE-SEO-0004',place_name:'풍납토성',script_30s:{text:'한강변 아파트 단지 옆에 1,600년 전 백제 왕성 터가 있다. 풍납토성이다. 1925년 홍수로 유물이 드러나 발견됐다. 둘레 약 3.5km의 평지 토성. 지금도 발굴이 진행 중이다. 아직 땅 속에 얼마나 많은 것이 남아있을지 모른다.',char_count:106,emotion_keywords_used:['기억','생존']},script_60s:{text:'서울 송파구 아파트 단지 사이에 백제 토성이 있다. 풍납토성이다. 사적 제11호. 1,600년 전 한성 백제의 왕성으로 추정되는 곳이다. 1925년 대홍수 때 땅이 쓸려나가며 청동기 유물들이 모습을 드러냈다. 그때 처음 발견됐다. 둘레 약 3.5km의 거대한 평지 토성. 발굴을 계속하고 있지만 아직 전체의 일부밖에 파지 못했다. 도심 한복판이라 발굴이 더디다. 땅 아래 얼마나 많은 백제의 흔적이 남아있을지 아무도 모른다.',char_count:265,emotion_keywords_used:['기억','생존']},
    hooks:['아파트 단지 옆 1,600년 전 왕성','1925년 홍수가 발견한 백제 도성','땅 속에 얼마나 남아있을까','서울 도심 발굴이 느린 이유','한성 백제의 진짜 왕성이 여기'],thumbnails:['아파트 옆 왕성','홍수가 발견한 유적','1,600년의 비밀','도심 속 발굴','한성 백제'],
    captions:{youtube:'풍납토성 | 서울 아파트 옆 1,600년 전 백제 왕성 — 아직도 발굴 중. 서울 송파구. #풍납토성 #백제 #한성백제',instagram:'서울 아파트 단지 옆에 1,600년 된 백제 왕성이 있어 🏯 아직도 발굴 중. 풍납토성.',tiktok:'아파트 옆에 1600년전 백제 왕성있는거 알았어? #풍납토성 #백제 #서울',xiaohongshu:'风纳土城 🏯 首尔公寓旁1600年前百济王城 | 至今仍在发掘中 | 首尔松坡区 #风纳土城 #韩国历史 #首尔'},
    hashtags:{korean:['#한국역사','#역사여행','#서울','#백제','#한성백제'],place_specific:['#풍납토성','#한성백제','#백제왕성']},map_card_intro:'서울 아파트 단지 옆 1,600년 전 백제 왕성 — 아직도 발굴 중'},
  {place_id:'GK-SE-SEO-0005',place_name:'몽촌토성',script_30s:{text:'올림픽공원 안에 백제 토성이 있다. 1988년 서울올림픽을 준비하면서 발굴됐다. 자연 구릉을 이용해 쌓은 불규칙한 모양의 토성. 백제 생활상을 밝혀낸 유적이다. 지금은 올림픽공원 산책로가 됐다. 1,600년 전 흔적 위를 시민들이 걷는다.',char_count:105,emotion_keywords_used:['기억']},script_60s:{text:'1988년 서울올림픽 준비 과정에서 땅을 파다가 토성이 나왔다. 올림픽공원 부지였다. 발굴해보니 백제 한성기 토성이었다. 사적 제297호 몽촌토성. 자연 구릉을 그대로 이용해 쌓은 불규칙한 형태다. 발굴에서 백제 시대 생활용품이 다수 출토됐다. 올림픽 공원은 그대로 지어졌다. 토성도 그대로 보존됐다. 공원 산책로가 곧 성벽 위다. 1,600년 전 백제인들이 쌓은 성 위를 지금 시민들이 산책한다.',char_count:256,emotion_keywords_used:['기억']},
    hooks:['올림픽공원 만들다가 발견된 백제 토성','성벽 위가 지금 산책로다','1988년 발굴된 백제의 흔적','1,600년 된 성 위를 지금 걷는다','한성 백제 생활상을 밝힌 유적'],thumbnails:['올림픽공원 속 백제','산책로가 된 성벽','1988년 발견','1,600년의 길','백제 생활상'],
    captions:{youtube:'몽촌토성 | 올림픽공원 만들다 발견된 백제 토성 — 성벽이 지금 산책로. 서울 송파구. #몽촌토성 #백제 #올림픽공원',instagram:'올림픽공원 만들다가 나온 1,600년 전 백제 토성 🏯 성벽이 지금은 산책로. 몽촌토성.',tiktok:'올림픽공원 만들다가 백제 토성 나옴 #몽촌토성 #백제 #올림픽',xiaohongshu:'梦村土城 🏯 修建奥林匹克公园时发现的百济土城 | 城墙如今成为散步道 | 首尔松坡区 #梦村土城 #韩国历史'},
    hashtags:{korean:['#한국역사','#역사여행','#서울','#백제','#올림픽공원'],place_specific:['#몽촌토성','#한성백제','#올림픽공원']},map_card_intro:'올림픽공원 만들다 나온 백제 토성 — 1,600년 된 성벽이 지금 산책로'},
  {place_id:'GK-SE-RYU-0002',place_name:'서울 선릉·정릉',script_30s:{text:'강남 도심 한복판에 조선 왕릉이 있다. 성종과 중종의 릉이다. 1992년 고층 빌딩에 둘러싸여 있던 이 릉은 유네스코 세계유산이 됐다. 현대 도시와 500년 왕릉이 공존하는 세계 유일의 풍경이다.',char_count:97,emotion_keywords_used:['권력','기억']},script_60s:{text:'강남 삼성동. 코엑스 바로 옆. 고층 빌딩들 사이에 울창한 숲이 있다. 들어가면 조선시대 왕릉이다. 제9대 성종의 선릉, 제11대 중종의 정릉. 두 왕이 이 도심 숲에 잠들어 있다. 조선시대에는 한양 도성 밖 한적한 언덕이었다. 500년 뒤, 도시가 사방으로 뻗어 릉을 둘러쌌다. 2009년 유네스코 세계유산이 됐다. 빌딩 숲 안의 왕릉 숲. 현대 도시와 500년 전 역사가 공존하는 세계 유일의 풍경이라는 평가를 받는다.',char_count:257,emotion_keywords_used:['권력','기억']},
    hooks:['강남 빌딩 숲 안에 조선 왕릉','코엑스 옆 유네스코 세계유산','500년 왕릉을 도시가 둘러쌌다','현대와 역사 공존하는 세계 유일 풍경','성종과 중종이 강남에 잠들다'],thumbnails:['강남 속 왕릉','코엑스 옆 유네스코','도시가 둘러싼 릉','세계 유일 풍경','강남 500년'],
    captions:{youtube:'서울 선릉·정릉 | 강남 빌딩 숲 속 조선 왕릉 — 코엑스 옆 유네스코 세계유산. 서울 강남구. #선릉 #정릉 #유네스코',instagram:'강남 코엑스 옆에 조선 왕릉이 있어 👑 500년 릉을 도시가 둘러쌌다. 유네스코 세계유산.',tiktok:'강남 코엑스 옆에 조선 왕릉 있음 #선릉 #정릉 #강남 #역사',xiaohongshu:'首尔宣陵·靖陵 👑 江南高楼丛中的朝鲜王陵 | COEX旁的联合国教科文组织世界遗产 #宣陵 #韩国历史 #首尔'},
    hashtags:{korean:['#한국역사','#역사여행','#서울','#강남','#유네스코'],place_specific:['#선릉','#정릉','#성종','#중종','#조선왕릉']},map_card_intro:'강남 빌딩 숲 속 조선 왕릉 — 500년과 현대가 공존하는 세계 유일 풍경'},
  {place_id:'GK-SE-DOK-0005',place_name:'절두산 순교성지',script_30s:{text:'1866년 병인박해. 천주교 신자들이 이 한강변 언덕에서 처형됐다. 머리를 자른다고 해서 절두산. 지금은 순교 박물관이 서 있다. 탄압받던 신앙이 역사가 됐고, 역사 위에 기념관이 세워졌다.',char_count:93,emotion_keywords_used:['희생','저항','기억']},script_60s:{text:'1866년, 흥선대원군이 천주교 탄압을 시작했다. 병인박해다. 그해 한강변 이 언덕에서 수천 명의 천주교 신자들이 목숨을 잃었다. 머리를 자른다고 해서 절두산이라는 이름이 붙었다. 강물이 흘러도, 세월이 지나도 이 자리에 기억이 남았다. 지금 이 자리에 순교 기념관이 서 있다. 처형장이었던 곳에 신앙의 기념관이 들어섰다. 탄압받던 신앙이 결국 역사로 인정받은 것이다. 매년 이곳을 찾는 순례자들이 있다.',char_count:245,emotion_keywords_used:['희생','저항','기억','생존']},
    hooks:['처형장이 기념관이 됐다','수천 명이 이 언덕에서 처형됐다','절두산이라는 이름의 유래','병인박해 최대의 순교 현장','탄압받던 신앙이 역사가 된 곳'],thumbnails:['처형장이 기념관','절두산의 이름','수천 명의 희생','병인박해','신앙의 역사'],
    captions:{youtube:'절두산 순교성지 | 수천 명이 처형된 한강변 언덕 — 지금은 순교 기념관. 서울 마포구. #절두산 #병인박해 #천주교',instagram:'천주교 신자들이 처형된 언덕이 지금은 순교 기념관이 됐다 🏴 절두산.',tiktok:'처형장이 기념관이 된 곳 절두산 #절두산 #병인박해 #역사',xiaohongshu:'切头山殉道圣地 🏴 数千名天主教徒被处决的地方 | 如今成为殉道纪念馆 | 首尔麻浦区 #切头山 #韩国历史 #首尔'},
    hashtags:{korean:['#한국역사','#독립운동','#서울','#근대역사','#천주교'],place_specific:['#절두산','#병인박해','#순교','#천주교']},map_card_intro:'수천 명이 처형된 한강변 언덕 — 처형장이 순교 기념관이 된 절두산'}
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
console.log('C모드 9차: '+updated+'개 / 누적 '+lib.total+'개');
ids.forEach((id,i)=>console.log('  C+ ['+id+'] '+scripts[i].place_name));
