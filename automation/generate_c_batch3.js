const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';

const scripts = [
  {
    place_id:'GK-SE-SEO-0001', place_name:'한양도성',
    script_30s:{text:'1396년, 태조는 전국에서 19만 7400명을 불러모았다. 구간마다 담당 고을을 정하고, 그 고을 이름을 돌에 새겼다. 지금도 성돌에서 600년 전 이름 모를 백성들의 흔적을 찾을 수 있다. 18.6km 한양도성이다.',char_count:112,emotion_keywords_used:['기억','권력']},
    script_60s:{text:'1396년 9월, 태조 이성계는 명을 내렸다. 한양을 방어할 도성을 쌓아라. 전국에서 19만 명이 넘는 사람이 동원됐다. 구간마다 담당 고을이 달랐다. 경상도, 전라도, 충청도... 각 고을은 맡은 구간의 성돌에 이름을 새겼다. 책임을 명확히 하기 위해서였다. 그 새김이 지금도 성돌에 남아있다. 이름 없이 죽어간 사람들의 흔적이 600년을 버텼다. 총 길이 18.6km. 낙산·인왕산·북악산·남산을 연결하는 이 성곽은 지금도 서울 한복판에 서있다.',char_count:271,emotion_keywords_used:['기억','권력','생존']},
    hooks:['성돌에 새겨진 600년 전 백성들의 이름','19만 명이 쌓은 서울의 성곽','구간마다 고을 이름을 새긴 이유','600년 전 흔적이 아직 서울에','한양도성 산책하면 발견하는 것'],
    thumbnails:['성돌에 새긴 600년','19만 명의 땀','서울 한복판 조선 성곽','아직 남아있는 이름','한양도성의 비밀'],
    captions:{youtube:'한양도성 | 성돌에 새겨진 600년 전 백성들의 이름 — 태조가 19만 명을 동원해 쌓은 조선의 도성. 서울 종로구. #한양도성 #서울성곽 #조선역사',instagram:'서울 성곽 걷다가 발견하는 것 🧱 600년 전 백성들의 이름이 돌에 새겨져 있어. 한양도성.',tiktok:'서울 성곽 돌에 600년 전 이름이 새겨져있다 #한양도성 #서울 #역사',xiaohongshu:'汉阳都城 🧱 首尔600年历史城墙 | 石头上刻着朝鲜时期百姓的名字 | 首尔必游历史景点 #汉阳都城 #韩国历史 #首尔旅游'},
    hashtags:{korean:['#한국역사','#역사여행','#서울','#조선역사','#성곽'],place_specific:['#한양도성','#서울성곽','#태조이성계','#조선']},
    map_card_intro:'성돌에 새긴 600년 전 백성들의 이름, 서울을 감싼 18.6km 조선 도성'
  },
  {
    place_id:'GK-GG-RYU-0001', place_name:'동구릉 (조선 왕릉)',
    script_30s:{text:'태조 이성계가 죽기 전 직접 고른 자리. 그곳에 9기의 왕릉이 500년에 걸쳐 쌓였다. 능마다 석물 양식이 조금씩 다르다. 시대가 흐를수록 장식이 화려해진다. 조선 미술사의 흐름을 한 숲에서 읽을 수 있다.',char_count:109,emotion_keywords_used:['권력','기억']},
    script_60s:{text:'태조 이성계는 죽기 전 이 자리를 직접 골랐다고 전해진다. 동쪽 구릉, 동구릉이다. 1408년 태조의 건원릉이 먼저 자리를 잡았다. 이후 500년 동안 역대 왕과 왕비들이 이 숲 안에 차례로 자리를 잡았다. 현재 9기의 능이 남아있다. 능마다 석물 양식이 다르다. 초기엔 단순하고 소박했던 석물이 시대가 지나면서 점점 화려해진다. 한 장소에서 조선 왕릉 석조 예술의 변천사를 볼 수 있는 곳이다. 2009년 유네스코 세계유산.',char_count:250,emotion_keywords_used:['권력','기억','선택']},
    hooks:['태조가 직접 고른 잠자리, 500년의 왕릉 숲','왕릉마다 석물 양식이 다른 이유','조선 미술사를 한 숲에서','9기의 왕릉이 한 곳에','유네스코가 인정한 조선 왕릉'],
    thumbnails:['태조가 고른 잠자리','500년의 왕릉 숲','석물이 다른 이유','조선 미술사','유네스코 세계유산'],
    captions:{youtube:'동구릉 | 태조가 직접 고른 자리에 500년에 걸쳐 쌓인 9기 왕릉. 경기도 구리시. #동구릉 #조선왕릉 #유네스코',instagram:'태조가 직접 고른 자리에 500년 동안 왕들이 묻혔다 🌲 동구릉, 유네스코 세계유산.',tiktok:'태조가 직접 고른 잠자리 500년후에도 왕들이 여기 묻혔다 #동구릉 #조선왕릉 #역사',xiaohongshu:'东九陵 🌲 太祖亲选的长眠之地 | 500年9座王陵 | 联合国教科文组织世界遗产 #东九陵 #朝鲜王陵 #韩国历史'},
    hashtags:{korean:['#한국역사','#역사여행','#경기도','#유네스코','#조선역사'],place_specific:['#동구릉','#조선왕릉','#태조','#구리']},
    map_card_intro:'태조가 직접 고른 자리, 500년에 걸쳐 쌓인 9기 왕릉 숲'
  },
  {
    place_id:'GK-GB-SWO-0003', place_name:'소수서원',
    script_30s:{text:'1543년, 조선에 처음으로 서원이 세워졌다. 이름은 소수서원. "무너진 교학을 다시 잇는다"는 뜻이다. 7년 뒤 퇴계 이황이 국가 공인을 건의했고 왕이 이름을 내렸다. 조선 사립학교의 시작, 소수서원. 2019년 유네스코.',char_count:117,emotion_keywords_used:['기억','권력','선택']},
    script_60s:{text:'1543년, 풍기군수 주세붕이 고려 유학의 선구자 안향을 기리기 위해 서원을 세웠다. 조선 최초의 서원이었다. 7년 뒤, 경상도 관찰사가 된 퇴계 이황이 조정에 건의했다. 이 서원을 나라가 공인해야 한다고. 명종이 받아들였다. 소수서원. 무너진 교학을 다시 잇는다는 뜻이다. 이때부터 조선 전국에 서원이 퍼졌다. 사립 교육 기관이 국가에서 인정받는 형태가 시작된 것이다. 그 시작이 이 작고 단출한 건물에서 비롯됐다. 2019년 유네스코 세계유산.',char_count:265,emotion_keywords_used:['기억','권력','선택']},
    hooks:['조선 사립학교의 첫 번째','퇴계 이황이 국가 공인을 건의했다','무너진 교학을 다시 잇는다는 뜻','조선 전국 서원의 시작점','유네스코가 인정한 조선의 학교'],
    thumbnails:['조선 최초의 서원','사립학교의 시작','퇴계의 건의','무너진 교학','유네스코 세계유산'],
    captions:{youtube:'소수서원 | 조선 최초의 서원, 사립학교의 시작 — 퇴계 이황이 국가 공인을 이끌다. 경북 영주시. #소수서원 #퇴계이황 #유네스코',instagram:'조선 사립학교의 첫 번째가 바로 이곳 📚 소수서원. 퇴계 이황이 국가 공인을 건의했고 명종이 이름을 내렸다.',tiktok:'조선 최초의 사립학교 근데 퇴계 이황이 만든 거 아님 #소수서원 #조선역사 #역사',xiaohongshu:'绍修书院 📚 朝鲜第一所书院 | 私立学校的起源 | 联合国教科文组织世界遗产 #绍修书院 #韩国历史 #荣州'},
    hashtags:{korean:['#한국역사','#역사여행','#경북','#유네스코','#조선역사'],place_specific:['#소수서원','#주세붕','#퇴계이황','#안향','#영주']},
    map_card_intro:'조선 최초의 서원, 사립학교의 시작 — 유네스코 세계유산'
  },
  {
    place_id:'GK-SE-GID-0001', place_name:'서울 암사동 유적',
    script_30s:{text:'6,000년 전 사람들이 한강변에 살았다. 땅을 파고 들어가 집을 지었다. 그 터가 서울 강동구 암사동에 남아있다. 빗살무늬토기를 만들었던 사람들의 집터. 지금은 사적공원이 됐다. 서울에서 신석기 시대를 만나는 곳.',char_count:108,emotion_keywords_used:['기억','생존']},
    script_60s:{text:'6,000년 전, 한강변에 사람들이 살았다. 땅을 파고 들어가 집을 지었다. 반지하 형태의 움집이다. 바닥을 파서 추위를 막고, 지붕으로 빗물을 흘렸다. 이 사람들이 만든 토기가 빗살무늬토기다. 빗으로 긁어 무늬를 낸 것이다. 신석기 시대 한반도의 대표 유물이다. 그 집터가 서울 강동구 암사동에 남아있다. 1925년 홍수로 발견됐다. 지금은 사적 공원으로 복원되어 움집을 직접 볼 수 있다. 서울 한복판에서 6,000년 전으로 가는 곳.',char_count:256,emotion_keywords_used:['기억','생존']},
    hooks:['서울에서 6,000년 전을 만나는 곳','홍수가 발견한 6,000년 전 집터','빗살무늬토기를 만든 사람들의 집','강동구에 이런 곳이 있었다','신석기 움집을 직접 볼 수 있는 유일한 곳'],
    thumbnails:['6,000년 전 서울','홍수가 발견했다','빗살무늬토기의 집','강동구의 비밀','신석기 움집'],
    captions:{youtube:'서울 암사동 유적 | 6,000년 전 신석기 사람들이 한강변에 살았다 — 빗살무늬토기 집터 복원 공원. 서울 강동구. #암사동유적 #신석기시대 #서울역사',instagram:'서울 강동구에 6,000년 전 집터가 있어 🏠 빗살무늬토기 만들던 사람들이 살았던 움집. 암사동 유적.',tiktok:'서울 강동구에 6000년 전 집이 있다 #암사동유적 #신석기 #서울역사',xiaohongshu:'首尔岩寺洞遗址 🏠 6000年前的新石器时代村落 | 首尔江东区历史景点 #岩寺洞 #韩国历史 #首尔旅游'},
    hashtags:{korean:['#한국역사','#역사여행','#서울','#선사시대','#강동구'],place_specific:['#암사동유적','#신석기시대','#빗살무늬토기','#움집']},
    map_card_intro:'서울 한복판 6,000년 전 신석기 집터 — 빗살무늬토기를 만든 사람들의 마을'
  },
  {
    place_id:'GK-JN-GID-0001', place_name:'화순 고인돌 유적',
    script_30s:{text:'산 위 채석장에 아직 다 떼어내지 못한 덮개돌이 그대로 붙어있다. 3,000년 전 공사 현장이 멈춘 채 지금까지 남아있는 것이다. 화순 고인돌 유적은 고인돌이 어떻게 만들어졌는지를 보여준다. 596기. 유네스코 세계유산.',char_count:110,emotion_keywords_used:['기억','생존']},
    script_60s:{text:'고인돌이 왜 여기 있는지, 어떻게 만들었는지 아무도 몰랐다. 그런데 화순에 답이 있었다. 계곡을 따라 걷다 보면 크고 작은 고인돌이 나타난다. 596기다. 그런데 정말 놀라운 건 따로 있다. 산 위 채석장에 가면 아직 다 떼어내지 못한 덮개돌이 그대로 붙어있다. 3,000년 전 공사가 멈춘 채 지금까지 남아있는 것이다. 어떻게 이 돌을 옮겼는지, 왜 이렇게 많이 만들었는지, 그 단서가 이 채석장에 있다. 탁자식·바둑판식·개석식, 다양한 형식이 한곳에 공존해 고인돌의 변천사를 볼 수 있다. 2000년 유네스코 세계유산.',char_count:290,emotion_keywords_used:['기억','생존','권력']},
    hooks:['3,000년 전 공사 현장이 그대로 멈춰있다','채석장에 아직 떼어내지 못한 돌이 있다','596기가 한 계곡에 있다','고인돌 만드는 법을 알아낸 곳','유네스코가 인정한 돌의 수수께끼'],
    thumbnails:['3,000년 전 공사 중단','채석장의 비밀','596기의 수수께끼','고인돌 제조법','유네스코 세계유산'],
    captions:{youtube:'화순 고인돌 유적 | 3,000년 전 공사가 그대로 멈춘 채석장 — 고인돌 제작 과정을 보여주는 유일한 현장. 전남 화순군. #화순고인돌 #고인돌 #유네스코',instagram:'3,000년 전 공사 현장이 지금도 멈춰있어 🪨 채석장에 아직 다 못 뗀 덮개돌이 그대로. 화순 고인돌 유적.',tiktok:'3000년 전 공사 현장이 아직 그대로임 #화순고인돌 #선사시대 #역사',xiaohongshu:'和顺支石墓遗址 🪨 3000年前停工的采石场至今保留 | 联合国教科文组织世界遗产 #和顺 #韩国历史 #世界遗产'},
    hashtags:{korean:['#한국역사','#역사여행','#전남','#유네스코','#선사시대'],place_specific:['#화순고인돌','#고인돌','#청동기시대','#화순']},
    map_card_intro:'3,000년 전 공사 현장이 멈춘 채로 — 고인돌 제작법을 보여주는 유네스코 유산'
  }
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
const heritage=JSON.parse(fs.readFileSync(base+'data/heritage_all.json','utf8'));
const hMap={};heritage.forEach(d=>hMap[d.place_id]=d);

scripts.forEach((s,i)=>{
  const h=hMap[s.place_id]||{};
  lib.contents.push({
    id:'CL-'+String(nextNum+i).padStart(3,'0'),
    place_id:s.place_id,place_name:s.place_name,
    category_main:h.category_main||'역사',category_sub:h.category_sub||'',
    period_category:h.period_category||'',region:h.region||'',
    generated_at:now,content_status:'review_pending',
    script_30s:s.script_30s.text,script_60s:s.script_60s.text,
    emotion_keywords:[...new Set([...(s.script_30s.emotion_keywords_used||[]),...(s.script_60s.emotion_keywords_used||[])])],
    hooks:s.hooks,thumbnails:s.thumbnails,
    video_description:'',captions:s.captions,hashtags:s.hashtags,
    map_card_intro:s.map_card_intro,filming_ideas:[]
  });
});
lib.total=lib.contents.length;
lib.last_updated=now;
fs.writeFileSync(base+'content/library.json',JSON.stringify(lib,null,2),'utf8');

const log=JSON.parse(fs.readFileSync(base+'logs/automation_log.json','utf8'));
log.runs.push({time:now,mode:'C',content_generated:updated,places:ids,total_scripts:lib.total});
fs.writeFileSync(base+'logs/automation_log.json',JSON.stringify(log,null,2),'utf8');

console.log('C모드 3차 완료');
console.log('생성: '+updated+'개 → review_pending');
console.log('누적 콘텐츠: '+lib.total+'개');
ids.forEach((id,i)=>console.log('  C+ ['+id+'] '+scripts[i].place_name));
