const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const scripts = [
  {place_id:'GK-SE-DOK-0010',place_name:'구 서울역사',
   script_30s:{text:'1925년 일제강점기에 지어진 서울역 구 역사. 르네상스 양식 건물이다. 2004년 KTX가 개통하며 역할을 잃었다. 지금은 문화 공간 서울로 재탄생했다. 서울 근대 역사의 상징이다.',char_count:76,emotion_keywords_used:['기억','역사']},
   script_60s:{text:'서울역 옆에 100년 된 건물이 있다. 구 서울역사다. 1925년 일제강점기에 지어졌다. 당시 동양 최대의 역사를 목표로 건설됐다. 돔 지붕과 붉은 벽돌의 르네상스 양식 건물이다. 해방과 전쟁, 산업화를 거치며 서울의 관문 역할을 했다. 2004년 KTX 개통으로 새 서울역에 역할을 넘기며 역사(驛舍)로서의 기능을 마쳤다. 지금은 문화역서울284라는 복합문화공간으로 운영된다. 사적 제284호.',char_count:257,emotion_keywords_used:['기억','역사']},
   hooks:['100년 된 일제강점기 역사','동양 최대 목표로 건설됐다','KTX에 자리 넘긴 구 역사','문화역서울284로 재탄생','서울 근대의 관문'],
   thumbnails:['100년 역사 건물','일제 르네상스','KTX로 역할 잃은','문화역서울284','서울 근대 관문'],
   captions:{youtube:'구 서울역사 | 1925년 일제강점기 르네상스 역사 — 문화역서울284. 서울 중구. #구서울역사 #문화역서울284 #근대건축',instagram:'1925년에 지어진 100년 역사 건물이 문화 공간이 됐다 🏛️ 구 서울역사.',tiktok:'1925년 일제가 지은 역사가 문화 공간이 된 구 서울역사 #구서울역사 #문화역 #역사',xiaohongshu:'旧首尔站舍 🏛️ 1925年日占时期修建的文艺复兴样式建筑 | 现为文化驿站首尔284 | 首尔中区 #旧首尔站 #文化驿站 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#서울','#일제강점기','#근대건축'],place_specific:['#구서울역사','#문화역서울284','#서울역','#사적']},
   map_card_intro:'1925년 일제강점기에 지어진 르네상스 양식 역사 — 문화역서울284로 재탄생한 근대의 관문'},
  {place_id:'GK-SE-SAE-0002',place_name:'덕수궁 돌담길',
   script_30s:{text:'서울 도심 한복판, 덕수궁 돌담을 따라 걷는 길. 연인들의 산책 코스로 유명하다. 단풍이 드는 가을이 특히 아름답다. 서울시청 앞 광장에서 정동길로 이어지는 코스다.',char_count:74,emotion_keywords_used:['낭만','자연']},
   script_60s:{text:'서울 도심에 아름다운 산책길이 있다. 덕수궁 돌담길이다. 덕수궁 외벽을 따라 이어지는 돌담 길이다. 이 길이 유명해진 것은 연인들 사이에서다. 이 길을 함께 걸으면 헤어진다는 전설이 생겼다. 역설적이게도 그 전설이 이 길을 더 유명하게 만들었다. 정동극장·정동교회·이화박물관 등 역사 문화 시설이 주변에 있다. 가을 단풍 때 은행나무 잎이 돌담 위로 떨어지는 경관이 아름답다. 서울 시민이 가장 사랑하는 산책길 중 하나다.',char_count:261,emotion_keywords_used:['낭만','자연']},
   hooks:['헤어진다는 전설의 산책길','연인들이 찾는 아이러니 코스','가을 단풍 돌담 경관','정동 역사 문화 거리','서울 시민 최애 산책길'],
   thumbnails:['헤어진다는 전설','연인의 아이러니','가을 단풍 돌담','정동 역사거리','서울 산책길'],
   captions:{youtube:'덕수궁 돌담길 | 헤어진다는 전설 — 서울 연인들의 가을 산책. 서울 중구. #덕수궁돌담길 #정동길 #서울산책',instagram:'걸으면 헤어진다는 전설이 더 유명하게 만든 덕수궁 돌담길 🍂 서울 가을 산책.',tiktok:'걸으면 헤어진다는 전설 있는 덕수궁 돌담길 근데 더 유명해진 이유 #덕수궁돌담길 #서울 #낭만',xiaohongshu:'德寿宫石墙路 🍂 据说情侣同行会分手的传说 | 秋日银杏叶飘落的首尔散步路 | 首尔中区 #德寿宫石墙路 #首尔旅游 #韩国'},
   hashtags:{korean:['#서울여행','#서울','#낭만','#산책','#단풍'],place_specific:['#덕수궁돌담길','#정동길','#덕수궁','#서울산책']},
   map_card_intro:'걸으면 헤어진다는 전설이 오히려 더 유명하게 만든 서울 도심 가을 산책길'},
  {place_id:'GK-GG-SEO-0002',place_name:'수원 장안문',
   script_30s:{text:'수원 화성의 북문. 4개 문 중 가장 크고 웅장하다. 화성의 북쪽 관문으로 정조의 행차가 이 문을 통과했다. 장안은 평화롭고 안정된 땅이라는 뜻이다. 유네스코 세계유산.',char_count:73,emotion_keywords_used:['기억','역사']},
   script_60s:{text:'경기도 수원에 조선 시대 성문이 있다. 수원 화성 장안문이다. 화성의 4개 문 중 가장 크고 웅장하다. 높이 21.87m. 문 위에 돌출된 여장과 옹성이 있는 독특한 방어 구조다. 정조의 행차가 이 문을 통과해 아버지 사도세자의 능을 찾아갔다. 장안이란 평화롭고 안정된 땅이라는 뜻이다. 나라가 평안하기를 바라는 이름이다. 화성과 함께 유네스코 세계유산이다. 장안문 주변 성벽 산책로가 아름답다.',char_count:255,emotion_keywords_used:['기억','역사']},
   hooks:['화성 4문 중 가장 큰 북문','정조 행차가 통과한 문','높이 21.87m 웅장한 성문','유네스코 화성의 관문','평화롭고 안정된 땅 뜻'],
   thumbnails:['화성 최대 성문','정조 행차','21.87m 장안문','유네스코 성문','평안한 땅'],
   captions:{youtube:'수원 장안문 | 화성 최대 성문 — 정조 행차 통과한 북문. 경기 수원시. #장안문 #수원화성 #유네스코',instagram:'수원 화성에서 가장 크고 웅장한 북문 🏯 장안문, 정조 행차가 통과한 유네스코 성문.',tiktok:'수원화성 4개 문 중 제일 큰 게 장안문임 정조 행차도 여기로 #장안문 #수원화성 #유네스코',xiaohongshu:'水原长安门 🏯 华城4座城门中最宏伟的北门 | 正祖行幸通过之地 | 联合国教科文组织 | 京畿水原 #长安门 #水原华城 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#경기도','#조선역사','#유네스코'],place_specific:['#장안문','#수원화성','#정조','#수원']},
   map_card_intro:'수원 화성 4문 중 가장 크고 웅장한 북문 — 정조의 행차가 통과한 유네스코 세계유산'},
  {place_id:'GK-GB-SAE-0009',place_name:'경주 계림',
   script_30s:{text:'신라 김씨 왕조의 시조 김알지가 태어난 숲. 닭 울음소리를 따라 찾아간 황금빛 궤에서 아기가 나왔다. 그 아기가 경주 김씨의 시조가 됐다. 계림은 닭 울음 숲이라는 뜻이다.',char_count:79,emotion_keywords_used:['신화','기억']},
   script_60s:{text:'경주 도심에 숲이 있다. 계림이다. 신라 탈해왕 9년의 이야기가 전해진다. 한밤중에 서쪽 숲에서 닭 울음소리가 들렸다. 찾아가 보니 황금빛 궤가 나뭇가지에 걸려 있었다. 궤를 열자 사내 아이가 있었다. 이 아이가 자라 경주 김씨의 시조 김알지가 됐다. 닭 울음 소리가 들린 숲이라 계림이다. 닭 계(鷄). 신라를 계림이라 부르기도 했다. 지금도 울창한 숲이 보존되어 있다. 사적 제19호.',char_count:256,emotion_keywords_used:['신화','기억']},
   hooks:['김알지 탄생 신화의 숲','황금 궤에서 나온 아기','경주 김씨의 시작점','닭 울음 소리의 숲','신라를 계림이라 불렀다'],
   thumbnails:['김알지 탄생지','황금 궤 전설','경주 김씨 시조','닭 울음 숲','신라 계림'],
   captions:{youtube:'경주 계림 | 김알지 탄생 신화의 숲 — 황금 궤에서 아기가. 경북 경주시. #계림 #김알지 #신라',instagram:'황금 궤에서 아기가 나와 경주 김씨 시조가 됐다는 숲 🌲 경주 계림.',tiktok:'경주 김씨 시조 김알지가 황금 궤에서 태어난 숲 계림 #계림 #김알지 #신라',xiaohongshu:'庆州鸡林 🌲 金阏智从金色木箱中诞生的传说之林 | 庆州金氏始祖诞生地 | 庆北庆州 #鸡林 #金阏智 #新罗历史'},
   hashtags:{korean:['#한국역사','#역사여행','#경상북도','#신라역사','#신화'],place_specific:['#계림','#김알지','#경주','#신라']},
   map_card_intro:'황금 궤에서 아기가 나와 경주 김씨 시조가 됐다는 신라 신화의 숲'},
  {place_id:'GK-GB-SAE-0010',place_name:'경주 나정',
   script_30s:{text:'신라 시조 박혁거세가 태어난 전설의 우물. 한 여인이 이 우물 옆에서 흰 말이 무릎 꿇는 것을 보았다. 말이 떠나자 알 하나가 있었다. 그 알에서 박혁거세가 태어났다.',char_count:73,emotion_keywords_used:['신화','기억']},
   script_60s:{text:'경주 남산 기슭에 우물 터가 있다. 나정이다. 신라 건국 신화의 현장이다. 기원전 69년의 이야기다. 양산 기슭 나정 옆에서 한 여인이 흰 말이 무릎을 꿇고 있는 것을 보았다. 다가가자 말은 울며 하늘로 올라가고, 그 자리에 알이 있었다. 알을 깨자 사내 아이가 나왔다. 이 아이가 자라 신라를 세운 박혁거세가 됐다. 기원전 57년 나라를 세웠다. 지금 나정에는 발굴된 우물 터와 팔각 건물 터가 있다. 사적 제245호.',char_count:259,emotion_keywords_used:['신화','기억']},
   hooks:['박혁거세 탄생 신화의 우물','흰 말이 무릎 꿇은 자리','알에서 나온 신라 시조','기원전 57년 신라 건국','팔각 건물 터 발굴'],
   thumbnails:['박혁거세 탄생','흰 말 전설','알 탄생','신라 건국','팔각 건물 터'],
   captions:{youtube:'경주 나정 | 박혁거세 탄생 신화의 우물 — 흰 말과 알. 경북 경주시. #나정 #박혁거세 #신라건국',instagram:'흰 말이 무릎 꿇은 자리의 알에서 신라 시조가 태어났다 🥚 경주 나정.',tiktok:'신라 시조 박혁거세가 알에서 태어난 그 우물 터가 경주에 있음 #나정 #박혁거세 #신라',xiaohongshu:'庆州罗井 🥚 朴赫居世从卵中诞生的传说水井 | 白马跪地之处 | 新罗建国神话 | 庆北庆州 #罗井 #朴赫居世 #新罗历史'},
   hashtags:{korean:['#한국역사','#역사여행','#경상북도','#신라역사','#신화'],place_specific:['#나정','#박혁거세','#경주','#신라건국']},
   map_card_intro:'흰 말이 무릎 꿇은 자리의 알에서 신라 시조 박혁거세가 탄생한 신화의 우물 터'}
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
console.log('C모드 40차: '+updated+'개 / 누적 '+lib.total+'개');
ids.forEach((id,i)=>console.log('  C+ ['+id+'] '+scripts[i].place_name));
