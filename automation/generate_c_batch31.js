const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const scripts = [
  {place_id:'GK-GN-JEN-0004',place_name:'진주 촉석루',
   script_30s:{text:'남강 절벽 위에 선 조선의 누각. 논개가 적장을 껴안고 뛰어내린 의암이 바로 아래에 있다. 임진왜란 진주성 전투의 상징이다. 경남 3대 누각 중 하나다.',char_count:72,emotion_keywords_used:['희생','기억']},
   script_60s:{text:'경남 진주 남강변에 누각이 있다. 촉석루다. 고려 때 창건됐다. 임진왜란 1592년 진주대첩에서 조선군이 이 성을 지켰다. 이듬해 2차 진주성 전투에서 성이 함락됐다. 그때 논개가 왜장 게야무라 로쿠스케를 의암 위에서 껴안고 남강으로 뛰어내렸다. 적장을 안고 투신한 것이다. 의암이란 의로운 바위다. 지금도 촉석루 아래 남강에 의암이 있다. 논개의 충절을 기리는 의기사가 촉석루 옆에 있다. 경남 3대 누각 중 하나다.',char_count:264,emotion_keywords_used:['희생','기억']},
   hooks:['논개가 적장 껴안고 뛰어내린 곳','의암 바로 위에 있는 누각','임진왜란 진주대첩 현장','경남 3대 누각','남강 절벽 위 고려 건축'],
   thumbnails:['논개의 의암','적장과 투신','진주대첩 현장','경남 3대 누각','남강 절벽'],
   captions:{youtube:'진주 촉석루 | 논개가 적장 껴안고 뛰어내린 의암 — 임진왜란 진주대첩. 경남 진주시. #촉석루 #논개 #진주대첩',instagram:'논개가 왜장을 껴안고 뛰어내린 의암이 바로 저 아래 🌊 진주 촉석루.',tiktok:'논개가 적장 껴안고 남강에 뛰어든 그 바위 바로 위 누각이 촉석루임 #촉석루 #논개 #역사',xiaohongshu:'晋州矗石楼 🌊 论介抱住倭将跳入南江的义岩正上方 | 壬辰倭乱晋州大捷现场 | 庆南晋州 #矗石楼 #论介 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#경상남도','#임진왜란','#논개'],place_specific:['#촉석루','#논개','#진주','#의암']},
   map_card_intro:'논개가 왜장을 껴안고 뛰어내린 의암 위 조선 누각 — 임진왜란 진주대첩의 상징'},
  {place_id:'GK-GG-SAJ-0002',place_name:'화성 용주사',
   script_30s:{text:'정조가 아버지 사도세자의 명복을 빌기 위해 1790년 창건한 사찰. 융릉 옆에 있다. 조선 왕실 원찰로 효성과 슬픔이 담긴 절이다. 경내에 국보 동종이 있다.',char_count:72,emotion_keywords_used:['슬픔','효도']},
   script_60s:{text:'경기도 화성에 조선 사찰이 있다. 용주사다. 1790년 정조가 창건했다. 정조가 누구인가. 뒤주에 갇혀 죽은 아버지 사도세자를 평생 가슴에 품은 왕이다. 아버지의 능 융릉을 이장하고, 그 옆에 아버지의 명복을 빌 절을 지었다. 용주사다. 정조의 효심이 만든 절이다. 매월 아버지 기일에 이 절에 와 예를 올렸다. 경내에 국보 용주사 범종이 있다. 통일신라 시대 범종으로 조선 때 이 절로 옮겨왔다. 절 이름 용주란 꿈에 용이 여의주를 문 것을 보고 짓게 된 이름이다.',char_count:271,emotion_keywords_used:['슬픔','효도']},
   hooks:['정조가 아버지 위해 만든 절','뒤주 사도세자 명복 비는 절','효성이 만든 사찰','국보 범종이 있는 절','융릉 옆 원찰'],
   thumbnails:['정조의 효심','사도세자 명복','아버지 위한 절','국보 범종','융릉 원찰'],
   captions:{youtube:'화성 용주사 | 정조가 뒤주 아버지 사도세자 위해 만든 절 — 국보 범종. 경기 화성시. #용주사 #정조 #사도세자',instagram:'뒤주에 갇혀 죽은 아버지 명복 빌려 정조가 만든 절 🛕 화성 용주사.',tiktok:'뒤주에 죽은 아버지 위해 정조가 만든 절이 화성 용주사임 #용주사 #정조 #사도세자',xiaohongshu:'华城龙珠寺 🛕 正祖为思悼世子冥福修建的寺院 | 国宝梵钟 | 京畿道华城 #龙珠寺 #正祖 #思悼世子'},
   hashtags:{korean:['#한국역사','#역사여행','#경기도','#조선역사','#정조'],place_specific:['#용주사','#정조','#사도세자','#화성']},
   map_card_intro:'뒤주에 갇혀 죽은 사도세자의 명복을 빌기 위해 정조가 창건한 효심의 절'},
  {place_id:'GK-GG-JEN-0001',place_name:'파주 오두산 통일전망대',
   script_30s:{text:'한강과 임진강이 만나는 곳에 북한 땅이 보인다. 맑은 날엔 북한 마을과 사람들이 육안으로 보인다. 분단의 현실을 가장 가까이서 느낄 수 있는 전망대다.',char_count:72,emotion_keywords_used:['분단','기억']},
   script_60s:{text:'경기도 파주 오두산. 한강과 임진강이 합류하는 곳에 산이 있다. 꼭대기에 통일전망대가 있다. 이 전망대에서 북한 땅이 보인다. 강 건너 황해도 개풍군이다. 맑은 날에는 북한 마을과 사람들이 육안으로 보인다. 그 거리가 2km도 안 된다. 고려 시대 이 산에 통일신라·고려의 성이 있었다. 지금은 통일전망대가 들어서 분단의 현실을 가장 생생하게 느낄 수 있는 곳이 됐다. 분단된 나라에서만 볼 수 있는 풍경이다.',char_count:262,emotion_keywords_used:['분단','기억']},
   hooks:['2km 거리 북한이 보인다','한강과 임진강이 만나는 곳','북한 사람이 육안으로 보이는 곳','분단의 현실이 가장 생생한','맑은 날엔 더 가까이'],
   thumbnails:['2km 북한','한강·임진강 합류','육안으로 북한 사람','분단의 현실','통일전망대'],
   captions:{youtube:'파주 오두산 통일전망대 | 2km 거리에 북한이 보인다 — 분단의 현실. 경기 파주시. #오두산통일전망대 #파주 #분단',instagram:'2km 거리에 북한 사람이 육안으로 보인다 👀 파주 오두산 통일전망대.',tiktok:'북한 사람 육안으로 보이는 거리에 있는 전망대 파주 오두산 #통일전망대 #파주 #분단',xiaohongshu:'坡州五头山统一瞭望台 👀 肉眼可见2km外的朝鲜人 | 分裂现实最切身的地方 | 京畿道坡州 #统一瞭望台 #韩朝分裂 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#경기도','#분단','#북한'],place_specific:['#오두산통일전망대','#파주','#분단','#통일전망대']},
   map_card_intro:'한강과 임진강이 만나는 곳 — 2km 거리 북한 땅이 육안으로 보이는 통일전망대'},
  {place_id:'GK-GG-SAE-0001',place_name:'연천 임진강 주상절리',
   script_30s:{text:'약 50만 년 전 화산 용암이 임진강을 따라 흘러 식으면서 형성된 주상절리. 수직의 현무암 기둥들이 강변을 따라 펼쳐진다. 강 위 보트에서 바라보는 경관이 장관이다.',char_count:79,emotion_keywords_used:['경이','자연']},
   script_60s:{text:'경기도 연천 임진강변에 주상절리가 있다. 현무암 기둥들이 수직으로 깎인 절벽이다. 약 50만 년 전 한탄강 일대 화산에서 흘러나온 용암이 임진강을 따라 흘렀다. 그 용암이 천천히 식으면서 수축해 六각형 기둥 형태로 굳었다. 주상절리다. 연천 임진강변을 따라 수km 구간에 걸쳐 이 경관이 펼쳐진다. 한탄강 세계지질공원의 일부다. 강 위 레프팅이나 유람선을 타면 절벽을 가까이서 볼 수 있다. 천연기념물 제541호.',char_count:262,emotion_keywords_used:['경이','자연']},
   hooks:['50만 년 전 용암이 굳은 절벽','임진강변 수km의 주상절리','수직 현무암 기둥들','한탄강 세계지질공원','보트에서 보는 장관'],
   thumbnails:['50만 년 전 용암','임진강 주상절리','수직 현무암','지질공원','보트 경관'],
   captions:{youtube:'연천 임진강 주상절리 | 50만 년 전 용암이 굳은 수직 현무암 절벽. 경기 연천군. #임진강주상절리 #연천 #지질공원',instagram:'50만 년 전 화산 용암이 임진강을 따라 흘러 이 절벽이 됐다 🌋 연천 임진강 주상절리.',tiktok:'50만 년 전 용암이 식어서 생긴 절벽이 경기도 연천에 있음 #임진강주상절리 #연천 #지질',xiaohongshu:'涟川临津江柱状节理 🌋 50万年前岩浆凝固而成的玄武岩悬崖 | 韩滩江世界地质公园 | 京畿道涟川 #临津江柱状节理 #地质公园 #韩国自然'},
   hashtags:{korean:['#자연','#여행','#경기도','#지질','#주상절리'],place_specific:['#임진강주상절리','#연천','#한탄강','#현무암']},
   map_card_intro:'50만 년 전 화산 용암이 임진강을 따라 식어 만들어진 수직 현무암 주상절리'},
  {place_id:'GK-GG-SAJ-0003',place_name:'양주 회암사지',
   script_30s:{text:'고려 말·조선 초 최대 사찰의 터. 나옹화상과 지공화상이 주석했고, 태조 이성계가 왕위를 버리고 은거한 절이다. 그 규모가 경복궁과 맞먹었다고 한다. 유네스코 잠정목록 등재.',char_count:78,emotion_keywords_used:['기억','권력']},
   script_60s:{text:'경기도 양주에 거대한 절터가 있다. 회암사지다. 고려 말 공민왕 때 지공·나옹 두 고승이 중창해 한국 최대 사찰로 키웠다. 왕실의 절이었다. 태조 이성계도 왕위를 물려준 후 이 절에 은거했다. 절의 규모가 경복궁에 버금갔다고 기록에 있다. 지금은 터만 남아 있다. 건물 기단과 석조물들이 발굴되어 그 규모를 짐작할 수 있다. 회암사지박물관에서 출토 유물을 볼 수 있다. 유네스코 세계유산 잠정목록에 올라 있다.',char_count:260,emotion_keywords_used:['기억','권력']},
   hooks:['경복궁과 맞먹던 최대 절','이성계가 왕위 버리고 은거한 곳','나옹화상 지공화상의 절','고려 말 조선 초 최대 사찰','터만 남은 웅장한 역사'],
   thumbnails:['경복궁 규모의 절','이성계 은거지','나옹화상','최대 절터','유네스코 잠정'],
   captions:{youtube:'양주 회암사지 | 이성계가 왕위 버리고 은거한 경복궁 규모의 절터. 경기 양주시. #회암사지 #이성계 #나옹화상',instagram:'경복궁과 맞먹는 규모의 절에서 이성계가 왕위를 버리고 은거했다 🏯 양주 회암사지.',tiktok:'이성계가 왕위 버리고 숨은 절 경복궁 규모였다는 양주 회암사지 #회암사지 #이성계 #역사',xiaohongshu:'杨州桧岩寺址 🏯 李成桂让位后隐居之地 | 规模媲美景福宫的高丽最大寺院遗址 | 京畿道杨州 #桧岩寺址 #李成桂 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#경기도','#고려역사','#이성계'],place_specific:['#회암사지','#이성계','#나옹화상','#양주']},
   map_card_intro:'경복궁 규모의 고려 최대 사찰 — 이성계가 왕위 버리고 은거한 절터'}
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
console.log('C모드 31차: '+updated+'개 / 누적 '+lib.total+'개');
ids.forEach((id,i)=>console.log('  C+ ['+id+'] '+scripts[i].place_name));
