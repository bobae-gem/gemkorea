const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const scripts = [
  {place_id:'GK-CN-SEO-0001',place_name:'서산 해미읍성',
   script_30s:{text:'조선 시대 병마절도사가 주둔한 충청도 최대 읍성. 천주교 박해 시대 순교자들이 이 성 앞 자리개질 나무에 묶여 처형됐다. 나무 뿌리 사이로 순교자의 머리카락이 아직도 보인다.',char_count:86,emotion_keywords_used:['희생','신앙','기억']},
   script_60s:{text:'충남 서산에 조선 시대 읍성이 거의 완전한 형태로 남아 있다. 해미읍성이다. 둘레 1,800m, 성벽 높이 5m. 조선 초기 충청도 병마절도사가 주둔하던 군사 거점이었다. 그런데 이 성 앞에 자리개질 나무가 있었다. 조선 후기 천주교 박해 시기, 신자들이 이 나무에 묶여 처형됐다. 1천 명이 넘는 순교자가 이 성에서 죽었다. 성 앞 회화나무 뿌리 사이로 지금도 머리카락이 발견된다고 전해진다. 조선 읍성과 천주교 순교 성지를 함께 볼 수 있는 곳.',char_count:266,emotion_keywords_used:['희생','신앙','기억']},
   hooks:['조선 읍성에 순교자 머리카락이 남았다','1000명 천주교 순교 현장','완전한 형태로 남은 조선 읍성','자리개질 나무의 역사','병마절도사 주둔 군사 거점'],
   thumbnails:['순교자 머리카락','천주교 순교 성지','조선 읍성','자리개질 나무','해미읍성 성벽'],
   captions:{youtube:'서산 해미읍성 | 천주교 순교자 1000명이 처형된 조선 최대 읍성 — 순교 성지. 충남 서산시. #해미읍성 #순교성지 #조선읍성',instagram:'조선 읍성에 천주교 순교자의 흔적이 남아 있다 🕊️ 해미읍성, 1000명이 처형된 현장.',tiktok:'조선 읍성에 천주교 순교자 머리카락 남아있다는 거 실제임 #해미읍성 #순교성지 #역사',xiaohongshu:'瑞山海美邑城 🕊️ 1000多名天主教殉道者处刑场 | 朝鲜最完整的邑城 | 忠南瑞山 #海美邑城 #殉道圣地 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#충청남도','#천주교','#순교성지'],place_specific:['#해미읍성','#순교','#천주교박해','#서산']},
   map_card_intro:'천주교 순교자 1,000명이 처형된 조선 최대 읍성 — 완전한 형태로 남은 역사 현장'},
  {place_id:'GK-CN-DOK-0001',place_name:'아산 현충사',
   script_30s:{text:'이순신 장군의 생가 터에 세워진 성역. 충무공이 어린 시절과 백의종군 이후 머물던 곳이다. 난중일기 원본이 있었고, 지금은 현충사 경내에서 이순신의 삶을 볼 수 있다.',char_count:82,emotion_keywords_used:['헌신','기억']},
   script_60s:{text:'충남 아산에 이순신 장군을 모신 사당이 있다. 현충사다. 이순신이 어린 시절을 보낸 외가 터가 있는 곳이다. 그는 임진왜란 이후 삼도수군통제사 직에서 파직당해 백의종군할 때도 이 고향에 들렀다. 1706년 숙종 때 처음 사당이 세워졌다. 1932년 일제에 의해 철거될 위기에 처하자 전국에서 성금을 모아 사당을 다시 세웠다. 거북선 모형, 장검, 난중일기 원본 등이 전시되어 있다.',char_count:256,emotion_keywords_used:['헌신','기억']},
   hooks:['이순신 생가 터에 세운 사당','백의종군 후 돌아온 고향','일제 철거 위기 전국이 막았다','거북선과 난중일기가 있는 곳','충무공의 어린 시절 현장'],
   thumbnails:['이순신 사당','백의종군 고향','전국이 지킨 사당','거북선 모형','난중일기'],
   captions:{youtube:'아산 현충사 | 이순신 생가 터 — 일제 철거 위기를 전국 성금으로 막은 사당. 충남 아산시. #현충사 #이순신 #임진왜란',instagram:'이순신 장군 생가 터에 세운 사당 ⚓ 현충사, 일제가 철거하려 했지만 전국이 막았다.',tiktok:'이순신 사당 일제가 없애려 했는데 전국 성금으로 막은 거 알아? #현충사 #이순신 #역사',xiaohongshu:'牙山显忠祠 ⚓ 李舜臣将军出生地建造的祠堂 | 日帝拆除危机被全国募款阻止 | 忠南牙山 #显忠祠 #李舜臣 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#충청남도','#이순신','#임진왜란'],place_specific:['#현충사','#이순신','#난중일기','#아산']},
   map_card_intro:'이순신 장군이 어린 시절 보낸 생가 터 — 일제 철거 위기를 전국 성금으로 막은 사당'},
  {place_id:'GK-CN-DOK-0002',place_name:'천안 독립기념관',
   script_30s:{text:'1982년 일본 역사 교과서 왜곡에 분노한 국민이 성금을 모아 세웠다. 1987년 개관. 1만 1천 평 부지에 7개 전시관. 일제강점기부터 독립운동의 역사를 가장 체계적으로 정리한 공간이다.',char_count:87,emotion_keywords_used:['저항','기억']},
   script_60s:{text:'1982년, 일본이 역사 교과서에서 식민지 지배와 침략을 미화했다. 한국 사회가 분노했다. 그 분노가 성금 모으기로 이어졌다. 5개월 만에 2,500만 명이 참여했다. 그 성금으로 세운 것이 천안 독립기념관이다. 1987년 8월 15일 개관. 1만 1천여 평 부지에 7개 주제 전시관. 삼일운동·의열단·임시정부·광복군 등 독립운동의 역사가 체계적으로 정리돼 있다. 겨레의 집이라는 상징적 건물이 가장 인상적이다. 수학여행 성지이자 독립운동을 공부하는 국민 교육관이다.',char_count:272,emotion_keywords_used:['저항','기억']},
   hooks:['일본 교과서 왜곡에 분노한 국민이 만들었다','5개월에 2500만 명 성금','독립운동의 모든 것이 여기','겨레의 집의 웅장한 경관','가장 체계적인 독립운동 기록'],
   thumbnails:['국민 성금으로 만든 기념관','2500만 명','독립운동 7개관','겨레의 집','독립운동 아카이브'],
   captions:{youtube:'천안 독립기념관 | 일본 교과서 왜곡에 분노한 2500만 명이 만든 기념관. 충남 천안시. #독립기념관 #독립운동 #일제강점기',instagram:'일본 역사 교과서 왜곡에 분노한 국민이 성금 모아 만들었다 🇰🇷 천안 독립기념관.',tiktok:'독립기념관이 국민 성금으로 만들어진 사연 알아? #독립기념관 #독립운동 #역사',xiaohongshu:'天安独立纪念馆 🇰🇷 愤怒于日本历史教科书歪曲的2500万国民用募款建造 | 忠南天安 #独立纪念馆 #独立运动 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#충청남도','#독립운동','#일제강점기'],place_specific:['#독립기념관','#겨레의집','#독립운동','#천안']},
   map_card_intro:'일본 교과서 왜곡에 분노한 2,500만 명의 성금으로 세워진 독립운동 기념관'},
  {place_id:'GK-CN-DOK-0003',place_name:'천안 유관순 열사 유적',
   script_30s:{text:'1919년 3·1운동. 열여섯 살 유관순이 이화학당 학생으로 독립 만세를 외쳤다. 고향 천안으로 내려와 4월 1일 아우내 장터에서 봉기를 이끌었다. 체포되어 서대문 감옥에서 순국했다.',char_count:88,emotion_keywords_used:['저항','희생','기억']},
   script_60s:{text:'충남 천안 병천. 아우내 장터가 있는 곳이다. 1919년 4월 1일, 이곳에서 3,000여 명이 모여 독립 만세를 불렀다. 이 봉기를 이끈 것이 열여섯 살 유관순이었다. 이화학당 학생이었던 그녀는 서울에서 3·1운동에 참여한 뒤 고향으로 내려와 봉기를 조직했다. 현장에서 부모가 총에 맞아 숨졌고, 유관순은 체포됐다. 공주 감옥, 서대문 감옥으로 이감됐다. 18세에 옥중 순국. 천안에 생가와 추모각, 유관순 기념관이 있다.',char_count:270,emotion_keywords_used:['저항','희생','기억']},
   hooks:['열여섯에 독립 만세를 이끌다','아우내 장터 봉기 현장','부모가 눈앞에서 쓰러졌다','18세에 옥중 순국','가장 어린 독립운동가'],
   thumbnails:['열여섯 살 유관순','아우내 장터','부모의 희생','옥중 순국','가장 어린 독립운동가'],
   captions:{youtube:'천안 유관순 유적 | 16세에 독립 만세 이끈 유관순 — 아우내 장터 봉기 현장. 충남 천안시. #유관순 #아우내장터 #3.1운동',instagram:'16세 유관순이 아우내 장터에서 3000명을 이끌었다 🌸 천안 유관순 열사 유적.',tiktok:'16살이 독립 만세 이끌었는데 18살에 옥에서 죽은 유관순 #유관순 #아우내장터 #역사',xiaohongshu:'天安柳宽顺烈士遗迹 🌸 16岁领导芽川场市万岁运动的柳宽顺 | 18岁牢中殉国 | 忠南天安 #柳宽顺 #3.1运动 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#충청남도','#독립운동','#3.1운동'],place_specific:['#유관순','#아우내장터','#독립운동','#천안']},
   map_card_intro:'16세에 아우내 장터 봉기를 이끌고 18세에 옥중 순국한 유관순 열사의 고향'},
  {place_id:'GK-GB-SAJ-0002',place_name:'석굴암',
   script_30s:{text:'8세기 신라가 돌을 쌓아 만든 인공 석굴. 단 한 장의 설계도 없이 오직 계산만으로 완성한 건축이다. 본존불의 미소는 동틀 때 햇빛을 받아 살아있는 것처럼 빛난다. 유네스코 세계유산.',char_count:88,emotion_keywords_used:['경이','아름다움','기억']},
   script_60s:{text:'경주 토함산 중턱, 8세기 신라의 석굴사원이 있다. 석굴암이다. 자연 석굴이 아니다. 신라 사람들이 화강암을 정교하게 다듬어 쌓아 만든 인공 석굴이다. 설계도 하나 없이 수학적 계산만으로 완성했다. 돔 형태의 원형 주실 중앙에 본존불이 앉아 있다. 불상의 높이 3.26m. 동해를 향해 앉아 있어 동틀 무렵 햇빛을 받으면 표정이 빛난다. 전실·통로·주실에 조각된 부조군은 신라 불교 조각의 정수다. 유네스코 세계유산.',char_count:265,emotion_keywords_used:['경이','아름다움','기억']},
   hooks:['설계도 없이 수학으로 만든 석굴','동해 향한 본존불의 미소','인공 석굴이라는 사실','신라의 건축 기적','유네스코 세계유산'],
   thumbnails:['신라의 인공 석굴','수학으로만 설계','동해 향한 본존불','빛나는 미소','유네스코'],
   captions:{youtube:'석굴암 | 설계도 없이 수학만으로 만든 신라의 인공 석굴 — 유네스코 세계유산. 경북 경주시. #석굴암 #신라 #유네스코',instagram:'설계도 없이 수학으로만 만든 신라의 석굴 🏛️ 석굴암, 동해 향한 본존불.',tiktok:'석굴암이 자연 석굴 아니고 인공으로 만든 거 알았음? #석굴암 #신라 #역사',xiaohongshu:'石窟庵 🏛️ 没有设计图只凭数学计算建造的新罗人工石窟 | 联合国教科文组织世界遗产 | 庆北庆州 #石窟庵 #新罗历史'},
   hashtags:{korean:['#한국역사','#역사여행','#경상북도','#신라역사','#유네스코'],place_specific:['#석굴암','#신라','#본존불','#경주']},
   map_card_intro:'설계도 없이 수학적 계산으로만 완성한 신라의 인공 석굴 — 유네스코 세계유산'}
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
console.log('C모드 17차: '+updated+'개 / 누적 '+lib.total+'개');
ids.forEach((id,i)=>console.log('  C+ ['+id+'] '+scripts[i].place_name));
