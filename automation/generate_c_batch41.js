const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const scripts = [
  {place_id:'GK-SE-SAE-0003',place_name:'서울역사박물관 (경희궁지)',
   script_30s:{text:'조선의 서궁 경희궁 터 위에 세운 서울 역사박물관. 경희궁은 일제에 의해 철거됐고 그 자리에 학교가 들어섰다. 지금은 박물관이 됐다. 서울 600년 역사를 한자리에서 볼 수 있다.',char_count:77,emotion_keywords_used:['기억','역사']},
   script_60s:{text:'서울 종로구에 박물관이 있다. 서울역사박물관이다. 이 박물관이 서 있는 땅이 역사적이다. 조선 후기 왕궁 경희궁이 있던 자리다. 경희궁은 광해군이 짓고 여러 왕이 사용했다. 일제강점기 때 일제가 학교를 짓기 위해 철거했다. 해방 후 서울역사박물관이 들어섰다. 경희궁 숭정전은 복원되어 옆에 서 있다. 박물관 안에는 서울 600년의 역사가 담겨 있다. 조선 시대부터 근현대까지. 서울 도심에서 무료로 즐길 수 있는 역사 공간이다.',char_count:255,emotion_keywords_used:['기억','역사']},
   hooks:['경희궁 터 위에 세운 박물관','일제가 철거한 왕궁 자리','서울 600년 무료 역사관','복원된 숭정전과 함께','조선부터 근현대 한자리'],
   thumbnails:['경희궁 터 박물관','일제 철거 왕궁','서울 600년','숭정전 복원','무료 역사관'],
   captions:{youtube:'서울역사박물관 | 경희궁 터 위 서울 600년 역사 — 무료입장. 서울 종로구. #서울역사박물관 #경희궁 #서울역사',instagram:'일제가 철거한 왕궁 터 위에 세운 서울 역사박물관 🏛️ 서울 600년 무료.',tiktok:'일제가 경희궁 철거한 자리에 지금은 서울역사박물관이 있음 #서울역사박물관 #경희궁 #역사',xiaohongshu:'首尔历史博物馆 🏛️ 建于日帝拆毁庆熙宫遗址上 | 首尔600年历史 | 免费入场 | 首尔钟路区 #首尔历史博物馆 #庆熙宫 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#서울','#조선역사','#박물관'],place_specific:['#서울역사박물관','#경희궁','#서울역사','#종로구']},
   map_card_intro:'일제가 철거한 조선 서궁 경희궁 터 위에 세운 서울 600년 역사관 — 무료입장'},
  {place_id:'GK-GG-SAJ-0005',place_name:'남양주 흥국사',
   script_30s:{text:'조선 태조 이성계가 무학대사를 위해 지은 절. 이성계의 원당이기도 하다. 조선 왕조 창건과 연관된 절이다. 수락산 기슭에 있어 경관이 빼어나고 단풍 명소로도 유명하다.',char_count:74,emotion_keywords_used:['신앙','기억']},
   script_60s:{text:'경기도 남양주 수락산에 절이 있다. 흥국사다. 이 절은 이성계와 무학대사의 인연이 담긴 곳이다. 이성계가 왕위에 오르기 전 무학대사를 만났다. 무학대사는 이성계에게 왕이 될 것이라고 예언했다. 조선을 건국한 후 이성계는 무학대사를 위해 이 절을 창건했다. 이성계의 원당이자 조선 왕조의 시작과 연결된 절이다. 수락산 계곡과 어우러진 경관이 아름답다. 가을 단풍이 특히 유명하다.',char_count:254,emotion_keywords_used:['신앙','기억']},
   hooks:['이성계가 무학대사 위해 지은 절','왕 예언한 스님의 원당','조선 창건과 연결된 절','수락산 단풍 명소','이성계·무학대사 인연'],
   thumbnails:['무학대사 원당','왕 예언 스님','조선 창건 연결','수락산 단풍','이성계 인연'],
   captions:{youtube:'남양주 흥국사 | 이성계가 무학대사 위해 창건한 절 — 수락산 단풍. 경기 남양주시. #흥국사 #무학대사 #이성계',instagram:'이성계가 왕이 될 거라 예언한 무학대사를 위해 만든 절 🛕 남양주 흥국사.',tiktok:'이성계에게 왕 예언한 무학대사 위해 만든 절이 남양주 흥국사임 #흥국사 #무학대사 #역사',xiaohongshu:'南杨州兴国寺 🛕 李成桂为预言他成王的无学大师修建的寺院 | 水落山枫叶名所 | 京畿道南杨州 #兴国寺 #无学大师 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#경기도','#조선역사','#이성계'],place_specific:['#흥국사','#무학대사','#남양주','#수락산']},
   map_card_intro:'이성계에게 왕이 될 것을 예언한 무학대사를 위해 창건한 절 — 수락산 단풍 명소'},
  {place_id:'GK-GB-SAJ-0015',place_name:'포항 오어사',
   script_30s:{text:'원효대사와 혜공대사가 대결을 벌인 절. 두 스님이 신통력으로 물고기를 잡아먹다가 한 마리가 살아 헤엄쳐 갔다. 내 물고기가 살아갔다 하여 오어사다. 운제산 계곡의 호수가 아름답다.',char_count:83,emotion_keywords_used:['신화','자연']},
   script_60s:{text:'경북 포항 운제산에 절이 있다. 오어사다. 원효대사와 혜공대사가 이 절에서 신통력 대결을 했다는 전설이 있다. 두 스님이 물고기를 잡아먹었는데 한 마리가 살아서 헤엄쳐 갔다. 서로 내 물고기가 살아갔다고 주장해 오어사(吾魚寺)라는 이름이 됐다. 내 물고기라는 뜻이다. 절 앞에 오어지라는 호수가 있다. 운제산 계곡과 호수가 어우러진 경관이 빼어나다. 특히 가을 단풍이 호수에 비쳐 아름답다.',char_count:259,emotion_keywords_used:['신화','자연']},
   hooks:['원효대사와 혜공대사 신통력 대결','내 물고기라 싸워서 생긴 이름','오어지 호수 단풍 절경','운제산 계곡 비경','포항 숨겨진 단풍 명소'],
   thumbnails:['두 스님 대결 전설','내 물고기 이름 유래','오어지 호수','운제산 계곡','포항 단풍'],
   captions:{youtube:'포항 오어사 | 원효·혜공 신통력 대결 — 내 물고기 이름 유래. 경북 포항시. #오어사 #원효대사 #포항',instagram:'두 스님이 내 물고기라 싸워서 이름 붙은 절 🛕 포항 오어사, 오어지 호수.',tiktok:'원효대사랑 다른 스님이 물고기 싸워서 이름 붙은 절 포항 오어사 #오어사 #원효 #역사',xiaohongshu:'浦项吾鱼寺 🛕 元晓与惠空争论我的鱼而得名的寺院 | 吾鱼池湖泊秋叶 | 庆北浦项 #吾鱼寺 #元晓 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#경상북도','#불교','#원효대사'],place_specific:['#오어사','#원효대사','#포항','#오어지']},
   map_card_intro:'원효대사와 혜공대사가 물고기를 두고 다퉈 이름이 생긴 절 — 오어지 호수 절경'},
  {place_id:'GK-JN-DOK-0002',place_name:'목포 근대역사관',
   script_30s:{text:'1900년 일본이 지은 영사관 건물이 지금은 박물관이 됐다. 목포 개항의 역사와 일제강점기 수탈의 흔적을 볼 수 있다. 목포 근대역사문화공간의 핵심 건물이다.',char_count:73,emotion_keywords_used:['기억','역사']},
   script_60s:{text:'전남 목포에 100년 된 건물이 있다. 목포 근대역사관이다. 원래 일본 영사관이었다. 1900년에 지어졌다. 1897년 목포가 개항하면서 들어온 일본이 세운 외교 공관이다. 적벽돌 건물로 일제강점기 식민 건축의 전형이다. 해방 후 박물관으로 바뀌었다. 개항 당시 목포의 모습과 일제강점기 수탈의 역사를 담은 자료들이 전시되어 있다. 목포 근대역사문화공간의 핵심 건물이다.',char_count:253,emotion_keywords_used:['기억','역사']},
   hooks:['1900년 일본 영사관이 박물관으로','개항 목포의 역사 현장','적벽돌 식민 건축','일제 수탈 역사 전시','목포 근대 핵심 건물'],
   thumbnails:['일본 영사관 박물관','1900년 건물','개항 역사','일제 건축','수탈 역사'],
   captions:{youtube:'목포 근대역사관 | 1900년 일본 영사관이 박물관으로. 전남 목포시. #목포근대역사관 #일제강점기 #목포',instagram:'1900년 일본 영사관 건물이 지금은 박물관이 됐다 🏛️ 목포 근대역사관.',tiktok:'1900년 일본 영사관이 지금 박물관인 곳 목포 근대역사관 #목포근대역사관 #일제 #역사',xiaohongshu:'木浦近代历史馆 🏛️ 1900年日本领事馆改建为博物馆 | 开港历史与日帝掠夺历史 | 全南木浦 #木浦近代历史馆 #日占时期 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#전라남도','#일제강점기','#목포'],place_specific:['#목포근대역사관','#일본영사관','#목포','#근대역사']},
   map_card_intro:'1900년 일본 영사관이 목포 수탈의 역사를 담은 박물관으로 — 근대역사문화공간의 핵심'},
  {place_id:'GK-JN-SAE-0007',place_name:'강진 다산초당',
   script_30s:{text:'정약용이 18년 유배 중 10년을 보낸 곳. 이 초당에서 목민심서·경세유표를 비롯한 500여 권의 저술을 완성했다. 조선 최고 실학자가 유배지에서 꽃피운 학문의 현장이다.',char_count:81,emotion_keywords_used:['학문','기억']},
   script_60s:{text:'전남 강진 만덕산 기슭에 작은 초당이 있다. 다산초당이다. 조선 실학자 정약용이 유배 중 살던 곳이다. 1801년 유배를 와서 1818년 풀려날 때까지 18년. 그 중 10년을 이 초당에서 보냈다. 이 오두막에서 목민심서·경세유표·흠흠신서를 썼다. 500여 권을 이 좁은 공간에서 완성했다. 제자들을 가르치고 저술하며 조선 실학의 정점을 이뤘다. 지금도 초당과 다산이 심은 동백나무가 남아 있다.',char_count:257,emotion_keywords_used:['학문','기억']},
   hooks:['정약용이 10년 살던 유배 초당','500권을 이 오두막에서','목민심서 경세유표 탄생지','다산이 심은 동백나무','조선 실학의 정점'],
   thumbnails:['유배 초당','500권 탄생','목민심서 현장','동백나무','실학 정점'],
   captions:{youtube:'강진 다산초당 | 정약용이 10년 유배 중 500권 쓴 초당. 전남 강진군. #다산초당 #정약용 #목민심서',instagram:'10년 유배 중 이 오두막에서 500권을 썼다 📚 강진 다산초당.',tiktok:'유배 10년 동안 초당에서 500권 쓴 정약용 강진 다산초당 #다산초당 #정약용 #역사',xiaohongshu:'康津茶山草堂 📚 丁若镛流配10年期间著书500余册的草屋 | 全南康津 #茶山草堂 #丁若镛 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#전라남도','#조선역사','#정약용'],place_specific:['#다산초당','#정약용','#강진','#목민심서']},
   map_card_intro:'정약용이 10년 유배 생활 중 500여 권을 저술한 조선 실학의 정점 — 강진 다산초당'}
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
console.log('C모드 41차: '+updated+'개 / 누적 '+lib.total+'개');
ids.forEach((id,i)=>console.log('  C+ ['+id+'] '+scripts[i].place_name));
