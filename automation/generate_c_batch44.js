const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const scripts = [
  {place_id:'GK-GG-SAJ-0007',place_name:'가평 현등사',
   script_30s:{text:'1,000년 전 창건된 운악산 절. 주목나무가 아름답다. 가을 단풍이 운악산 최고 명소다. 고구려 아도화상이 창건했다는 전설이 있는 경기도의 숨겨진 천년 고찰이다.',char_count:69,emotion_keywords_used:['자연','기억']},
   script_60s:{text:'경기도 가평 운악산에 절이 있다. 현등사다. 540년 고구려 아도화상이 창건했다는 전설이 있다. 그 이후로 여러 차례 중창됐다. 경내에 수령 수백 년의 주목나무들이 있다. 운악산 계곡을 따라 오르는 길이 아름답다. 가을 단풍이 특히 유명하다. 경기도 단풍 명소로 손꼽힌다. 잘 알려지지 않은 숨겨진 명소다. 조용하게 천년 고찰을 즐길 수 있다.',char_count:249,emotion_keywords_used:['자연','기억']},
   hooks:['고구려 아도화상 창건 전설','주목나무 가득한 천년 고찰','운악산 가을 단풍 명소','경기도 숨겨진 사찰','조용한 가평 단풍 여행'],
   thumbnails:['고구려 창건 전설','주목나무 고찰','운악산 단풍','숨겨진 명소','조용한 단풍'],
   captions:{youtube:'가평 현등사 | 고구려 아도화상 창건 전설 — 운악산 단풍 명소. 경기 가평군. #현등사 #운악산 #가평단풍',instagram:'고구려 아도화상이 창건했다는 전설의 절 🍂 가평 현등사, 운악산 단풍.',tiktok:'가평 운악산 단풍 최고 명소 현등사 고구려 창건 전설도 있음 #현등사 #운악산 #가평',xiaohongshu:'加平悬灯寺 🍂 高句丽阿道和尚创建传说 | 云岳山枫叶名所 | 京畿加平 #悬灯寺 #云岳山 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#경기도','#불교','#단풍'],place_specific:['#현등사','#운악산','#가평','#단풍명소']},
   map_card_intro:'고구려 아도화상 창건 전설의 운악산 천년 고찰 — 가평 단풍 명소'},
  {place_id:'GK-GG-SAJ-0008',place_name:'안성 청룡사',
   script_30s:{text:'고려 원종 6년(1265년) 창건된 서운산 고찰. 태조 이성계가 왕위 전 원찰로 삼았다. 대웅전은 보물이다. 봄 벚꽃과 가을 단풍 명소로 안성의 숨겨진 사찰이다.',char_count:71,emotion_keywords_used:['기억','자연']},
   script_60s:{text:'경기도 안성 서운산에 절이 있다. 청룡사다. 1265년 고려 원종 때 창건됐다. 조선 태조 이성계가 왕위에 오르기 전 이 절을 원찰로 삼았다. 왕이 된 후에도 이 절에 각별한 관심을 가졌다. 대웅전이 보물로 지정되어 있다. 서운산 계곡과 어우러진 경관이 아름답다. 봄이면 벚꽃이 가득 피고 가을에는 단풍이 물든다. 안성 지역 사람들에게 사랑받는 사찰이다.',char_count:252,emotion_keywords_used:['기억','자연']},
   hooks:['이성계가 왕위 전 원찰로 삼은 절','보물 대웅전','1265년 고려 창건','봄 벚꽃 가을 단풍 명소','안성 숨겨진 고찰'],
   thumbnails:['이성계 원찰','보물 대웅전','1265년 고려','봄 벚꽃 단풍','안성 사찰'],
   captions:{youtube:'안성 청룡사 | 이성계 원찰 — 보물 대웅전 봄 벚꽃. 경기 안성시. #청룡사 #이성계 #안성',instagram:'이성계가 왕 되기 전 원찰로 삼은 절에 보물 대웅전이 있다 🛕 안성 청룡사.',tiktok:'이성계가 왕 되기 전 원찰로 삼은 절 안성 청룡사 보물도 있음 #청룡사 #이성계 #역사',xiaohongshu:'安城青龙寺 🛕 李成桂成王前愿堂 | 宝物大雄殿 | 京畿安城 #青龙寺 #李成桂 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#경기도','#이성계','#불교'],place_specific:['#청룡사','#이성계','#안성','#서운산']},
   map_card_intro:'태조 이성계가 왕위 전 원찰로 삼은 고려 창건 사찰 — 보물 대웅전이 있는 안성 서운산'},
  {place_id:'GK-CN-SAJ-0006',place_name:'부여 고란사',
   script_30s:{text:'낙화암 절벽 아래 강변에 자리한 작은 절. 1400년 된 고란초가 자라는 유일한 절이다. 절 뒤 바위에서 나오는 약수를 마시면 3년 젊어진다는 전설이 있다. 백마강 유람선이 닿는 곳이다.',char_count:79,emotion_keywords_used:['전설','기억']},
   script_60s:{text:'충남 부여 낙화암 절벽 아래 강변에 절이 있다. 고란사다. 백제 때부터 있었다고 전해진다. 이 절 뒤 바위 틈에서 고란초가 자란다. 희귀한 양치식물이다. 한국에서 이 절에서만 자란다고 알려져 있다. 절 뒤 바위에서 약수가 흘러내린다. 이 약수를 마시면 3년 젊어진다는 전설이 있다. 백마강 유람선을 타면 이 절 앞 선착장에 닿는다. 부소산성·낙화암과 함께 부여 역사 코스의 필수 코스다.',char_count:258,emotion_keywords_used:['전설','기억']},
   hooks:['이 절에서만 자라는 고란초','3년 젊어지는 약수 전설','낙화암 절벽 아래 강변 절','백마강 유람선 정착지','백제 시절부터의 사찰'],
   thumbnails:['고란초 유일 서식','3년 젊어지는 약수','낙화암 아래','유람선 정착지','백제 사찰'],
   captions:{youtube:'부여 고란사 | 세상에서 이 절에만 자라는 고란초 — 3년 젊어지는 약수. 충남 부여군. #고란사 #고란초 #부여',instagram:'이 절에서만 자라는 고란초와 3년 젊어지는 약수 전설 🛕 부여 고란사.',tiktok:'세상에 이 절에서만 자라는 고란초와 3년 젊어지는 약수 있는 부여 고란사 #고란사 #고란초 #부여',xiaohongshu:'扶余皋兰寺 🛕 世上仅此一处生长的皋兰草 | 喝了泉水年轻3岁的传说 | 忠南扶余 #皋兰寺 #皋兰草 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#충청남도','#백제역사','#전설'],place_specific:['#고란사','#고란초','#부여','#백마강']},
   map_card_intro:'이 절에서만 자라는 고란초와 마시면 3년 젊어진다는 약수 — 낙화암 아래 백마강 절'},
  {place_id:'GK-CN-SAJ-0007',place_name:'예산 수덕사',
   script_30s:{text:'백제가 창건한 충남 대표 사찰. 대웅전(국보 49호)은 고려 시대 목조 건축의 백미다. 만공 스님이 여기서 독립운동을 지원했다. 유네스코 세계유산 한국의 산사.',char_count:72,emotion_keywords_used:['신앙','역사']},
   script_60s:{text:'충남 예산 덕숭산에 절이 있다. 수덕사다. 백제 599년 창건됐다고 전해진다. 대웅전이 국보다. 1308년 고려 시대에 지어진 목조 건물이다. 고려 목조 건축 중 가장 아름다운 건물로 평가된다. 이 절에서 만공 스님이 주석했다. 일제강점기 항일 독립운동을 지원했다. 근현대 불교 정화의 중심지이기도 했다. 덕숭총림이라는 선원이 있는 큰 절이다. 2018년 유네스코 세계유산 한국의 산사로 등재됐다.',char_count:259,emotion_keywords_used:['신앙','역사']},
   hooks:['고려 1308년 국보 대웅전','독립운동 지원한 만공 스님','백제 창건 충남 대표 사찰','고려 목조 건축의 백미','유네스코 한국의 산사'],
   thumbnails:['1308년 국보 대웅전','만공 스님','백제 창건','고려 목조 백미','유네스코'],
   captions:{youtube:'예산 수덕사 | 1308년 국보 대웅전 — 만공 스님 독립운동 유네스코. 충남 예산군. #수덕사 #만공 #유네스코',instagram:'고려 1308년 지어진 국보 대웅전 — 만공 스님이 독립운동 지원한 절 🛕 예산 수덕사.',tiktok:'1308년 고려 국보 대웅전 있는 절이 만공 스님 독립운동 지원함 예산 수덕사 #수덕사 #만공 #유네스코',xiaohongshu:'礼山修德寺 🛕 1308年高丽国宝大雄殿 | 满空和尚支持独立运动 | 联合国教科文组织 | 忠南礼山 #修德寺 #满空 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#충청남도','#불교','#유네스코'],place_specific:['#수덕사','#만공','#예산','#한국의산사']},
   map_card_intro:'고려 1308년 건립 국보 대웅전 — 만공 스님이 독립운동을 지원한 유네스코 세계유산'},
  {place_id:'GK-CN-SEO-0002',place_name:'홍성 홍주읍성',
   script_30s:{text:'조선 시대 홍주목의 읍성. 고려 때부터 있었고 조선 때 정비됐다. 1866년 천주교 박해 때 수백 명의 순교자가 이 성에서 처형됐다. 1906년 의병들이 이 성에서 일제에 저항했다.',char_count:77,emotion_keywords_used:['저항','희생']},
   script_60s:{text:'충남 홍성에 읍성이 있다. 홍주읍성이다. 고려 시대부터 있었고 조선 때 지금의 형태로 정비됐다. 이 성에는 두 개의 역사적 비극이 있다. 첫 번째는 1866년 병인박해다. 천주교 신자들이 이 성에서 처형됐다. 수백 명의 순교자 피가 이 성에 배어 있다. 두 번째는 1906년 홍주의병이다. 을사늑약에 분노한 의병들이 이 성을 거점으로 일본군과 싸웠다. 지금도 성벽 일부가 남아 있다. 사적 제231호.',char_count:253,emotion_keywords_used:['저항','희생']},
   hooks:['천주교 순교 현장 읍성','1906년 홍주의병 거점','두 개의 역사적 비극','병인박해와 의병 항쟁','성벽 일부 보존'],
   thumbnails:['천주교 순교 현장','홍주의병 거점','두 비극의 성','병인박해','1906 의병'],
   captions:{youtube:'홍성 홍주읍성 | 천주교 순교·홍주의병 두 비극의 성. 충남 홍성군. #홍주읍성 #홍주의병 #천주교순교',instagram:'천주교 순교와 홍주의병 두 비극이 깃든 충남 읍성 🏯 홍성 홍주읍성.',tiktok:'천주교 순교 현장이자 을사늑약 의병 거점인 홍성 홍주읍성 #홍주읍성 #의병 #역사',xiaohongshu:'洪城洪州邑城 🏯 天主教殉道现场与洪州义兵据点 | 两段历史悲剧 | 忠南洪城 #洪州邑城 #义兵 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#충청남도','#천주교','#의병'],place_specific:['#홍주읍성','#홍주의병','#홍성','#천주교순교']},
   map_card_intro:'천주교 순교와 홍주의병 항쟁, 두 역사적 비극이 깃든 충남 홍성 읍성'}
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
console.log('C모드 44차: '+updated+'개 / 누적 '+lib.total+'개');
ids.forEach((id,i)=>console.log('  C+ ['+id+'] '+scripts[i].place_name));
