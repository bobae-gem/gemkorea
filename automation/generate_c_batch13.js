const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const scripts = [
  {place_id:'GK-GG-RYU-0007',place_name:'여주 영릉 (세종대왕릉)',
   script_30s:{text:'세종대왕이 여기 잠들어 있다. 한글을 만들고, 측우기를 발명하고, 12율관을 정리하고. 조선 역사상 가장 많은 것을 남긴 왕이 경기도 여주에 잠들었다. 묘비 하나가 아니라 유네스코 세계유산이 됐다.',char_count:97,emotion_keywords_used:['권력','기억']},
   script_60s:{text:'5만원권 지폐에 있는 그 사람. 세종대왕이다. 한글을 만들었고, 집현전을 설치했고, 측우기·앙부일구·혼천의를 만들었고, 음악과 과학과 의학을 발전시켰다. 조선 500년 역사에서 가장 많은 것을 남긴 왕이다. 그가 잠든 곳이 경기도 여주 영릉이다. 1469년 지금의 자리로 이장됐다. 왕릉 안에 세종대왕역사문화관이 있어 업적을 한눈에 볼 수 있다. 2009년 유네스코 세계유산.',char_count:247,emotion_keywords_used:['권력','기억']},
   hooks:['5만원권 세종대왕이 잠든 곳','조선 역사상 가장 많이 남긴 왕','측우기·앙부일구·한글 창제자','경기도 여주에 세종이 있다','유네스코 세계유산 조선왕릉'],
   thumbnails:['5만원권의 주인','가장 많이 남긴 왕','한글·측우기','세종이 여기 있다','유네스코 왕릉'],
   captions:{youtube:'여주 영릉 | 5만원권 세종대왕이 잠든 유네스코 세계유산 왕릉. 경기 여주시. #영릉 #세종대왕 #유네스코',instagram:'5만원권 세종대왕이 경기도 여주에 잠들어 있다 👑 영릉, 유네스코 세계유산.',tiktok:'5만원권 세종대왕 실제로 여기 잠들었음 #영릉 #세종대왕 #역사',xiaohongshu:'英陵（世宗大王陵）👑 5万元纸币上的世宗大王长眠之地 | 联合国教科文组织世界遗产 | 京畿道骊州 #英陵 #世宗大王 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#경기도','#조선역사','#유네스코'],place_specific:['#영릉','#세종대왕','#조선왕릉','#여주']},
   map_card_intro:'한글·측우기 창제자 세종대왕이 잠든 유네스코 세계유산'},
  {place_id:'GK-GG-GID-0001',place_name:'연천 전곡리 구석기유적',
   script_30s:{text:'1978년, 주한미군 병사가 한탄강변에서 돌을 발견했다. 아슐리안형 주먹도끼. 유럽과 아프리카에서만 발견된다고 했던 석기가 동아시아에서 처음 나온 것이다. 세계 구석기 연구의 역사를 바꾼 발견이었다.',char_count:103,emotion_keywords_used:['기억']},
   script_60s:{text:'1978년, 주한미군 병사 그렉 보웬이 한탄강변을 산책하다가 이상한 돌을 발견했다. 고고학자에게 가져갔다. 아슐리안형 주먹도끼였다. 약 30만~35만 년 전 구석기 시대 도구다. 이 발견이 왜 중요했을까. 당시 학계는 아슐리안 석기는 유럽과 아프리카에서만 만들어졌다고 믿었다. 동아시아 인류는 다른 방식으로 발전했다고 생각했다. 그런데 여기서 아슐리안 석기가 나온 것이다. 인류 진화의 이해를 바꾼 발견이었다. 사적 제268호.',char_count:270,emotion_keywords_used:['기억']},
   hooks:['세계 구석기 연구를 바꾼 돌','주한미군이 발견한 35만 년 전 석기','동아시아에서 처음 나온 아슐리안형','인류 진화의 이해를 바꿨다','연천 한탄강변의 기적'],
   thumbnails:['세계를 바꾼 돌','35만 년 전','아슐리안 석기','인류 진화 재정립','한탄강의 발견'],
   captions:{youtube:'연천 전곡리 구석기유적 | 세계 구석기 연구를 바꾼 발견 — 35만 년 전 아슐리안 주먹도끼. 경기 연천군. #전곡리유적 #구석기 #선사시대',instagram:'주한미군 병사가 한탄강변에서 세계 구석기 연구를 바꾼 돌을 발견했다 🪨 연천 전곡리.',tiktok:'주한미군이 돌 발견했는데 세계 구석기 연구 뒤집혔음 #전곡리유적 #구석기 #역사',xiaohongshu:'涟川全谷里旧石器遗址 🪨 驻韩美军发现的35万年前手斧 | 改变世界旧石器研究历史 | 京畿道涟川 #全谷里 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#경기도','#선사시대','#구석기'],place_specific:['#전곡리유적','#구석기','#아슐리안','#연천']},
   map_card_intro:'세계 구석기 연구를 바꾼 35만 년 전 주먹도끼 발견지'},
  {place_id:'GK-GG-SAJ-0001',place_name:'여주 신륵사',
   script_30s:{text:'남한강변 암벽 위에 세워진 천년 고찰. 고려 말 나옹화상이 입적한 곳이다. 조선 세종의 기도처였고, 세조가 능침사찰로 삼았다. 강변 절경과 어우러진 경관으로 조선시대부터 명승지로 꼽혔다.',char_count:99,emotion_keywords_used:['기억','권력']},
   script_60s:{text:'경기도 여주, 남한강이 굽이치는 곳에 절벽이 있다. 그 위에 사찰이 있다. 신륵사다. 언제 창건됐는지 정확히 알 수 없지만 신라 시대라는 설이 있다. 확실한 것은 고려 말 나옹화상이 이곳에서 입적했다는 것이다. 나옹은 당대 최고의 고승이었다. 조선이 들어서자 세종도 이 사찰에 원찰을 두었다. 강변의 절경이 조선시대부터 명승지로 이름났다. 다층전탑(보물)과 조사당이 남아있다. 세종대왕릉과 함께 여주 여행의 필수 코스다.',char_count:257,emotion_keywords_used:['기억','권력']},
   hooks:['남한강 절벽 위 천년 고찰','나옹화상이 입적한 절','세종의 기도처','조선시대부터 명승지','다층전탑이 있는 강변 사찰'],
   thumbnails:['강벽 위 사찰','나옹화상의 절','세종의 기도처','조선 명승지','다층전탑'],
   captions:{youtube:'여주 신륵사 | 남한강 절벽 위 천년 고찰 — 나옹화상 입적지·세종의 기도처. 경기 여주시. #신륵사 #나옹화상 #여주',instagram:'남한강 절벽 위에 천년 고찰이 있다 🛕 신륵사, 세종도 기도하러 온 사찰.',tiktok:'남한강 절벽에 사찰 있는데 세종도 기도하러 왔음 #신륵사 #여주 #역사',xiaohongshu:'神勒寺 🛕 南汉江悬崖上的千年古刹 | 懒翁和尚圆寂地·世宗祈祷处 | 京畿道骊州 #神勒寺 #韩国历史 #骊州'},
   hashtags:{korean:['#한국역사','#역사여행','#경기도','#불교','#여주'],place_specific:['#신륵사','#나옹화상','#세종','#남한강']},
   map_card_intro:'남한강 절벽 위 천년 고찰 — 나옹화상 입적지, 세종의 기도처'},
  {place_id:'GK-GG-DOK-0001',place_name:'화성 제암리 3·1운동 순국유적',
   script_30s:{text:'1919년 4월 15일. 일본 군경이 주민들을 교회에 가두고 불을 질렀다. 23명이 죽었다. 제암리 학살이다. 캐나다 선교사 스코필드가 이 사실을 세계에 알렸다. 사적 제299호.',char_count:88,emotion_keywords_used:['희생','저항','기억']},
   script_60s:{text:'1919년 3·1운동 이후, 일본의 탄압은 더 심해졌다. 4월 15일, 경기도 수원 근처 제암리. 일본 군경이 마을 주민들을 제암교회에 모이라고 했다. 그리고 문을 잠갔다. 불을 질렀다. 살아나오는 사람에게는 총을 쐈다. 23명이 죽었다. 이 사실을 세상에 알린 것은 캐나다 선교사 스코필드였다. 그는 사진을 찍고 기록을 남겼다. 국제 사회에 퍼졌다. 제암리 학살 사건이다. 지금 이 자리에 기념관과 순국묘역이 조성되어 있다.',char_count:259,emotion_keywords_used:['희생','저항','기억']},
   hooks:['교회에 가두고 불을 질렀다','캐나다 선교사가 세계에 알렸다','23명이 이 교회에서 죽었다','제암리 학살의 전말','3.1운동 이후 일어난 일'],
   thumbnails:['교회에 가두고 불','캐나다 선교사','23명의 희생','제암리 학살','세계가 알았다'],
   captions:{youtube:'화성 제암리 | 교회에 가두고 불 지른 일제 — 캐나다 선교사가 세계에 알렸다. 경기 화성시. #제암리 #3.1운동 #일제강점기',instagram:'교회에 가두고 불을 질렀다 🏴 23명이 죽었고, 캐나다 선교사가 세계에 알렸다. 제암리.',tiktok:'일제가 교회에 가두고 불 질렀는데 캐나다 선교사가 세계에 알렸음 #제암리 #독립운동 #역사',xiaohongshu:'华城堤岩里 🏴 日本宪兵将村民关入教堂放火 | 加拿大传教士向世界公开 | 京畿道华城 #堤岩里 #韩国历史 #3.1运动'},
   hashtags:{korean:['#한국역사','#독립운동','#일제강점기','#경기도','#3.1운동'],place_specific:['#제암리','#학살','#스코필드','#화성']},
   map_card_intro:'교회에 가두고 불을 지른 제암리 학살 — 캐나다 선교사가 세계에 알린 현장'},
  {place_id:'GK-GG-GUN-0001',place_name:'수원 화성행궁',
   script_30s:{text:'정조가 아버지 사도세자의 능을 참배할 때 머물던 행궁. 전국 행궁 중 가장 규모가 크다. 576칸. 수원화성과 함께 유네스코 세계유산이다. 정조의 효심과 개혁 의지가 담긴 공간이다.',char_count:93,emotion_keywords_used:['선택','권력','기억']},
   script_60s:{text:'정조는 1년에 여러 번 화성을 찾았다. 아버지 사도세자의 능, 융릉을 참배하기 위해서였다. 그리고 수원 화성 안에 머물 공간이 필요했다. 그것이 화성행궁이다. 1789년 완공. 전국에 수십 개의 행궁이 있지만 화성행궁이 단연 최대 규모다. 576칸. 정조는 여기서 어머니 혜경궁 홍씨의 회갑연을 열었다. 을묘년 회갑 잔치. 의례·음악·춤이 어우러진 성대한 행사였다. 수원화성과 함께 유네스코 세계유산이며, 임금의 행차를 재현하는 행사가 매년 열린다.',char_count:264,emotion_keywords_used:['선택','권력','기억']},
   hooks:['정조가 아버지 묘 참배할 때 머문 궁','전국 최대 576칸 행궁','혜경궁 홍씨 회갑연이 열린 곳','수원화성과 함께 유네스코','임금의 행차를 매년 재현'],
   thumbnails:['최대 행궁 576칸','아버지 위한 공간','회갑연의 현장','유네스코 세계유산','임금 행차 재현'],
   captions:{youtube:'수원 화성행궁 | 정조가 아버지 위해 만든 전국 최대 행궁 576칸 — 유네스코. 경기 수원시. #화성행궁 #정조 #유네스코',instagram:'아버지 묘 참배할 때 머물던 궁이 576칸이다 🏯 정조의 화성행궁, 유네스코 세계유산.',tiktok:'아버지 위해 전국 최대 행궁 만든 정조 576칸 #화성행궁 #정조 #역사',xiaohongshu:'水原华城行宫 🏯 正祖为父亲修建的全国最大行宫576间 | 联合国教科文组织世界遗产 | 京畿道水原 #华城行宫 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#경기도','#조선역사','#유네스코'],place_specific:['#화성행궁','#정조','#수원화성','#사도세자']},
   map_card_intro:'정조가 아버지 위해 만든 전국 최대 행궁 576칸 — 유네스코 세계유산'}
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
console.log('C모드 13차: '+updated+'개 / 누적 '+lib.total+'개');
ids.forEach((id,i)=>console.log('  C+ ['+id+'] '+scripts[i].place_name));
