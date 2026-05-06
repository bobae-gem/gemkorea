const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const scripts = [
  {place_id:'GK-JN-SAJ-0003',place_name:'여수 흥국사',
   script_30s:{text:'임진왜란 때 의승군이 출전한 절. 수군 의승군을 이끈 승장 의엄이 이 절에 주석했다. 지금도 홍교라는 17세기 돌다리가 남아 있다. 흥국이란 나라를 일으킨다는 뜻이다.',char_count:76,emotion_keywords_used:['저항','기억']},
   script_60s:{text:'전남 여수 영취산에 절이 있다. 흥국사다. 1195년 보조국사 지눌이 창건했다. 임진왜란 때 이 절에서 의승군이 조직됐다. 수군 의승장 의엄이 이 절에 주석하며 승병을 이끌었다. 흥국이란 나라를 일으킨다는 뜻이다. 절 이름처럼 나라가 위기일 때 기여한 사찰이다. 경내에 국보 흥국사 대웅전이 있다. 또 홍교라는 17세기에 쌓은 돌아치교가 남아 있다. 보물로 지정된 이 다리가 특히 아름답다.',char_count:258,emotion_keywords_used:['저항','기억']},
   hooks:['임진왜란 의승군 출전한 절','나라를 일으킨다는 뜻의 흥국','17세기 홍교 돌다리 보물','의승장 의엄의 주석처','국보 대웅전이 있는 사찰'],
   thumbnails:['의승군의 절','흥국 이름 뜻','홍교 돌다리','의엄의 거점','국보 대웅전'],
   captions:{youtube:'여수 흥국사 | 임진왜란 의승군 출전 — 국보 대웅전·보물 홍교. 전남 여수시. #흥국사 #의승군 #여수',instagram:'임진왜란 때 나라를 일으킨다는 뜻의 절에서 의승군이 출전했다 🛕 여수 흥국사.',tiktok:'임진왜란 때 의승군 출전한 절 이름이 나라를 일으킨다는 뜻임 여수 흥국사 #흥국사 #의승군 #역사',xiaohongshu:'丽水兴国寺 🛕 壬辰倭乱义僧军出征之地 | 国宝大雄殿·宝物虹桥 | 全南丽水 #兴国寺 #义僧军 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#전라남도','#불교','#임진왜란'],place_specific:['#흥국사','#의승군','#여수','#홍교']},
   map_card_intro:'임진왜란 의승군이 출전한 절 — 나라를 일으킨다는 이름의 국보 대웅전 사찰'},
  {place_id:'GK-JB-SAJ-0004',place_name:'부안 개암사',
   script_30s:{text:'634년 창건된 변산반도의 고찰. 삼별초가 몽골에 저항할 때 기도 도량으로 사용했다. 신라 때 세운 것으로 전하는 원효방이라는 석굴이 있다. 대웅전은 조선 후기 보물급 건축이다.',char_count:80,emotion_keywords_used:['저항','기억']},
   script_60s:{text:'전북 부안 변산 안에 절이 있다. 개암사다. 634년 신라 때 창건됐다고 전해진다. 고려 말 삼별초가 진도에서 몽골에 저항할 때 이 절이 기도 도량으로 사용됐다. 절 뒤편에 원효방이라는 석굴이 있다. 원효대사가 수행했다는 전설이 있는 곳이다. 대웅전은 조선 후기 건물로 보물로 지정된 아름다운 건물이다. 변산반도 내변산 깊은 계곡 안에 숨어 있어 찾아가는 길 자체가 트레킹이다.',char_count:257,emotion_keywords_used:['저항','기억']},
   hooks:['삼별초의 기도 도량','원효대사가 수행한 석굴','634년 창건 변산 고찰','보물 대웅전 건물','내변산 계곡 숨은 절'],
   thumbnails:['삼별초 기도처','원효방 석굴','634년 창건','보물 대웅전','변산 계곡'],
   captions:{youtube:'부안 개암사 | 634년 창건 — 삼별초 기도 도량·원효방 석굴. 전북 부안군. #개암사 #삼별초 #부안',instagram:'634년 창건된 변산 절에서 삼별초가 몽골에 저항하며 기도했다 🛕 부안 개암사.',tiktok:'삼별초가 몽골 저항하면서 기도한 절이 변산 개암사임 #개암사 #삼별초 #역사',xiaohongshu:'扶安开岩寺 🛕 634年创建 | 三别抄祈祷道场 | 元晓修行石窟 | 全北扶安 #开岩寺 #三别抄 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#전라북도','#불교','#삼별초'],place_specific:['#개암사','#삼별초','#부안','#원효']},
   map_card_intro:'삼별초가 몽골 저항 시 기도 도량으로 사용한 634년 창건 변산 고찰'},
  {place_id:'GK-GN-SAJ-0002',place_name:'밀양 표충사',
   script_30s:{text:'654년 원효대사가 창건한 밀양 사찰. 임진왜란 의승군을 이끈 사명대사 유정이 이 절에서 불법을 공부했다. 사명대사의 충의를 기리는 사당 표충사가 절 안에 있다.',char_count:78,emotion_keywords_used:['헌신','신앙']},
   script_60s:{text:'경남 밀양 재약산에 사찰이 있다. 표충사다. 654년 원효대사가 창건했다. 이 절이 유명한 이유는 사명대사 때문이다. 사명대사 유정은 임진왜란 때 의승군을 이끈 고승이다. 어릴 때 이 절에서 불법을 공부했다. 전쟁이 끝난 후 일본에 건너가 포로 3,000명을 데려왔다. 절 안에 사명대사의 충의를 기리는 사당 표충사가 있다. 사명대사 유물과 영정이 봉안되어 있다. 국내 3대 표충사 중 가장 큰 규모다. 해마다 제향이 거행된다.',char_count:267,emotion_keywords_used:['헌신','신앙']},
   hooks:['사명대사가 공부한 절','임진왜란 의승군 대장의 고향 절','포로 3000명 데려온 사명대사','사명대사 사당이 있는 절','3대 표충사 중 최대'],
   thumbnails:['사명대사 공부한 절','포로 3000명','의승군 대장','사명대사 사당','3대 표충사'],
   captions:{youtube:'밀양 표충사 | 임진왜란 의승군 사명대사가 공부한 절 — 포로 3000명 귀환. 경남 밀양시. #표충사 #사명대사 #임진왜란',instagram:'임진왜란 의승군 이끈 사명대사가 공부한 절 🛕 밀양 표충사.',tiktok:'임진왜란 때 포로 3000명 데려온 사명대사 공부한 절 밀양 표충사 #표충사 #사명대사 #역사',xiaohongshu:'密阳表忠寺 🛕 壬辰倭乱义僧军四溟大师求学之地 | 带回3000名俘虏 | 庆南密阳 #表忠寺 #四溟大师 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#경상남도','#불교','#임진왜란'],place_specific:['#표충사','#사명대사','#밀양','#의승군']},
   map_card_intro:'임진왜란 의승군을 이끌고 포로 3,000명을 귀환시킨 사명대사의 사찰'},
  {place_id:'GK-GN-JEN-0003',place_name:'거제 포로수용소 유적',
   script_30s:{text:'한국전쟁 때 북한과 중국 포로 17만 명을 수용했던 곳. 1952년 포로들이 폭동을 일으켜 수용소장 도드 준장을 납치했다. 한국전쟁의 또 다른 역사가 이 섬에 있다.',char_count:79,emotion_keywords_used:['전쟁','기억']},
   script_60s:{text:'경남 거제도에 한국전쟁 포로수용소 유적이 있다. 1950년부터 1953년까지 북한 포로와 중국 포로 17만 명을 수용했다. 국제적으로 유명한 사건이 이곳에서 일어났다. 1952년 5월, 포로들이 집단 폭동을 일으켰다. 수용소장 도드 준장을 납치했다. 이 사건으로 정전 협상이 복잡해졌다. 지금은 그 현장이 유적 공원으로 조성됐다. 포로수용소 건물과 당시 유물들이 전시되어 있다. 전쟁의 또 다른 면을 보여주는 곳이다.',char_count:265,emotion_keywords_used:['전쟁','기억']},
   hooks:['17만 포로를 수용한 섬','수용소장을 납치한 포로 폭동','1952년 국제적 사건 현장','한국전쟁의 또 다른 역사','정전 협상이 복잡해진 이유'],
   thumbnails:['17만 포로 수용','수용소장 납치','1952년 폭동','전쟁의 다른 면','정전 협상 복잡'],
   captions:{youtube:'거제 포로수용소 유적 | 17만 포로 수용 — 수용소장 납치 폭동 현장. 경남 거제시. #포로수용소 #한국전쟁 #거제',instagram:'한국전쟁 때 17만 포로를 가둔 곳에서 포로들이 수용소장을 납치했다 ⚔️ 거제 포로수용소.',tiktok:'한국전쟁 포로들이 수용소장 납치한 사건 거제에서 일어난 거 알아? #포로수용소 #한국전쟁 #역사',xiaohongshu:'巨济战俘营遗址 ⚔️ 容纳17万战俘 | 1952年战俘发动暴动劫持所长 | 庆南巨济 #战俘营 #韩国战争 #历史'},
   hashtags:{korean:['#한국역사','#역사여행','#경상남도','#한국전쟁','#분단'],place_specific:['#포로수용소','#거제','#한국전쟁','#도드준장']},
   map_card_intro:'한국전쟁 당시 북한·중국 포로 17만 명을 수용한 현장 — 수용소장 납치 폭동이 일어난 섬'},
  {place_id:'GK-GN-SEO-0002',place_name:'사천 선진리성',
   script_30s:{text:'임진왜란 때 왜군이 쌓은 왜성이 경남 사천에 남아 있다. 1598년 이순신의 사천해전 직전 왜군의 요새였다. 봄이면 성 안에 벚꽃이 가득 피어 특이한 역사 벚꽃 명소가 됐다.',char_count:80,emotion_keywords_used:['역사','아름다움']},
   script_60s:{text:'경남 사천에 임진왜란 때 왜군이 쌓은 성이 있다. 선진리성이다. 왜성이다. 1597년 정유재란 때 왜군 장수 시마즈 요시히로가 쌓았다. 1598년 이순신의 사천해전이 이 앞바다에서 벌어졌다. 지금은 역사 공원이 됐다. 특이한 것은 봄이다. 성 안에 벚꽃이 가득 피어난다. 왜군이 쌓은 성에 벚꽃이 피는 아이러니한 경관이 유명해졌다. 역사와 봄꽃이 공존하는 독특한 명소다.',char_count:253,emotion_keywords_used:['역사','아름다움']},
   hooks:['왜군이 쌓은 성에 벚꽃이 핀다','1598년 사천해전 바로 앞 왜성','정유재란 왜군 요새','이순신 사천해전 현장 앞','역사와 봄꽃의 아이러니'],
   thumbnails:['왜성에 벚꽃','정유재란 요새','사천해전 앞','이순신과 왜성','봄꽃 아이러니'],
   captions:{youtube:'사천 선진리성 | 왜군이 쌓은 성에 봄마다 벚꽃이 핀다 — 이순신 사천해전. 경남 사천시. #선진리성 #왜성 #사천해전',instagram:'왜군이 쌓은 성에 봄마다 벚꽃이 가득 핀다 🌸 사천 선진리성, 역사와 봄의 아이러니.',tiktok:'왜군이 쌓은 성에 벚꽃 피는 아이러니한 명소 사천 선진리성 #선진리성 #왜성 #역사',xiaohongshu:'泗川宣津里城 🌸 倭军修建的城内年年盛开樱花 | 李舜臣泗川海战战场 | 庆南泗川 #宣津里城 #倭城 #朝鲜历史'},
   hashtags:{korean:['#한국역사','#역사여행','#경상남도','#임진왜란','#벚꽃'],place_specific:['#선진리성','#왜성','#사천','#이순신']},
   map_card_intro:'정유재란 왜군이 쌓은 성에 봄마다 벚꽃이 피는 역사의 아이러니 — 이순신 사천해전 앞바다'}
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
console.log('C모드 30차: '+updated+'개 / 누적 '+lib.total+'개');
ids.forEach((id,i)=>console.log('  C+ ['+id+'] '+scripts[i].place_name));
