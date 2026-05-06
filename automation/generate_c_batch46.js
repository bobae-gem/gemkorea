const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const scripts = [
  {place_id:'GK-JN-SAJ-0008',place_name:'고흥 능가사',
   script_30s:{text:'팔영산 기슭에 숨어있는 고흥의 고찰. 670년 의상대사가 창건했다. 청연암·백연암·연대암 세 암자를 거느린 큰 절이다. 임진왜란 때 의승군의 군영 역할을 했다. 다도해가 내려다보이는 경관이 빼어나다.',char_count:82,emotion_keywords_used:['신앙','자연']},
   script_60s:{text:'전남 고흥 연화산에 절이 있다. 능가사다. 670년 신라 의상대사가 창건했다. 청연암·백연암·연대암 세 암자를 두고 있는 큰 절이다. 임진왜란 때는 의승군의 군영 역할을 했다. 보물 지장보살도와 동종이 있다. 연화산 도립공원 안에 있어 경관이 빼어나다. 고흥반도 남쪽에 위치해 다도해가 내려다보인다. 고흥 공룡발자국 화석지와 함께 고흥 여행 코스로 꼽힌다.',char_count:252,emotion_keywords_used:['신앙','자연']},
   hooks:['670년 의상대사 창건','임진왜란 의승군 군영','세 암자 거느린 큰 절','다도해 내려다보는 경관','고흥 도립공원 고찰'],
   thumbnails:['의상대사 창건','의승군 군영','세 암자','다도해 경관','연화산 도립공원'],
   captions:{youtube:'고흥 능가사 | 670년 의상대사 창건 — 임진왜란 의승군 거점. 전남 고흥군. #능가사 #의상대사 #고흥',instagram:'670년 의상대사가 세운 절이 임진왜란 의승군 거점이 됐다 🛕 고흥 능가사.',tiktok:'670년 의상대사 세운 임진왜란 의승군 거점 고흥 능가사 다도해 경관 #능가사 #의상대사 #역사',xiaohongshu:'高兴楞伽寺 🛕 670年义湘大师创建 | 壬辰倭乱义僧军军营 | 庆北高兴 #楞伽寺 #义湘大师 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#전라남도','#불교','#의상대사'],place_specific:['#능가사','#의상대사','#고흥','#연화산']},
   map_card_intro:'670년 의상대사 창건 — 임진왜란 의승군 군영, 다도해가 내려다보이는 고흥 고찰'},
  {place_id:'GK-GB-SAJ-0016',place_name:'칠곡 송림사',
   script_30s:{text:'신라 진흥왕 때 창건된 경북 칠곡 고찰. 오층전탑(보물)이 유명하다. 벽돌로 쌓은 전탑이 경내에 우뚝 서 있다. 경상도 전탑의 특징을 잘 보여주는 사찰이다.',char_count:72,emotion_keywords_used:['기억','신앙']},
   script_60s:{text:'경북 칠곡에 절이 있다. 송림사다. 신라 진흥왕 때 창건됐다. 이 절의 특징은 오층전탑이다. 보물로 지정된 이 탑은 벽돌로 쌓아 올린 전탑이다. 경상북도에서 전탑은 독특한 건축 형식이다. 신라 때 당나라의 영향을 받아 벽돌 탑이 만들어졌는데 경북 일대에 몇 개가 남아 있다. 송림사 전탑이 그 중 하나다. 경내에 소나무 숲이 우거져 있어 절 이름이 송림사다.',char_count:250,emotion_keywords_used:['기억','신앙']},
   hooks:['신라 진흥왕 창건 고찰','벽돌 쌓은 오층전탑 보물','경북 전탑 문화의 증거','소나무 숲 사찰 송림사','칠곡 숨겨진 역사'],
   thumbnails:['진흥왕 창건','오층전탑 보물','벽돌 탑','소나무숲 절','칠곡 역사'],
   captions:{youtube:'칠곡 송림사 | 신라 진흥왕 창건 — 보물 오층전탑. 경북 칠곡군. #송림사 #오층전탑 #칠곡',instagram:'벽돌로 쌓은 신라 전탑이 소나무숲 절 경내에 서 있다 🏛️ 칠곡 송림사.',tiktok:'벽돌로 쌓은 신라 전탑 보물이 경북 칠곡 송림사에 있음 #송림사 #전탑 #신라',xiaohongshu:'漆谷松林寺 🏛️ 新罗真兴王创建 | 宝物五层砖塔 | 庆北漆谷 #松林寺 #砖塔 #新罗历史'},
   hashtags:{korean:['#한국역사','#역사여행','#경상북도','#신라역사','#불교'],place_specific:['#송림사','#전탑','#칠곡','#진흥왕']},
   map_card_intro:'신라 진흥왕 창건 — 경북 전탑 문화를 보여주는 보물 오층전탑이 있는 소나무숲 고찰'},
  {place_id:'GK-GB-SAJ-0017',place_name:'경산 환성사',
   script_30s:{text:'835년 창건된 경산의 고찰. 팔공산 자락에 있어 경관이 아름답다. 보물 대웅전이 있고, 수령 600년이 넘은 은행나무가 경내에 서 있다. 경산 지역 사람들의 기도 도량이다.',char_count:72,emotion_keywords_used:['신앙','자연']},
   script_60s:{text:'경북 경산 팔공산 자락에 절이 있다. 환성사다. 835년 신라 흥덕왕 때 창건됐다. 심지왕사가 창건했다는 기록이 있다. 경내에 보물 대웅전이 있다. 조선 시대 건물로 단아한 아름다움이 있다. 600년이 넘은 은행나무가 경내에 서 있다. 가을이면 은행나무 단풍이 아름답다. 팔공산 갓바위와 멀지 않아 함께 방문하기 좋다.',char_count:250,emotion_keywords_used:['신앙','자연']},
   hooks:['835년 신라 창건','보물 대웅전 고찰','600년 은행나무 단풍','팔공산 갓바위 인접','경산 기도 도량'],
   thumbnails:['835년 창건','보물 대웅전','600년 은행','팔공산 인근','경산 도량'],
   captions:{youtube:'경산 환성사 | 835년 창건 — 보물 대웅전과 600년 은행나무. 경북 경산시. #환성사 #경산 #팔공산',instagram:'835년 창건 절에 600년 은행나무가 서 있다 🍂 경북 경산 환성사.',tiktok:'835년 신라 창건 절에 600년 은행나무 단풍 경북 경산 환성사 #환성사 #경산 #팔공산',xiaohongshu:'庆山环城寺 🍂 835年新罗创建 | 宝物大雄殿与600年银杏树 | 庆北庆山 #环城寺 #八公山 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#경상북도','#불교','#단풍'],place_specific:['#환성사','#경산','#팔공산','#은행나무']},
   map_card_intro:'835년 신라 창건 — 보물 대웅전과 수령 600년 은행나무가 있는 팔공산 자락 고찰'},
  {place_id:'GK-GW-SAJ-0004',place_name:'원주 법천사지',
   script_30s:{text:'통일신라에 창건된 고려 최대 사찰 중 하나였던 절의 터. 지광국사현묘탑(국보)이 이 절에 있었다. 탑은 일제 때 일본으로 반출됐다가 2015년 반환됐다. 지금은 국립중앙박물관에 있다.',char_count:82,emotion_keywords_used:['기억','역사']},
   script_60s:{text:'강원도 원주에 절터가 있다. 법천사지다. 통일신라 때 창건된 절이다. 고려 때 크게 번성했다. 지광국사현묘탑이 이 절에 있었다. 이 탑은 고려 석탑의 걸작으로 국보다. 그런데 일제강점기 때 일본인이 이 탑을 일본으로 반출해 갔다. 오사카의 개인 정원에 있다가 1940년대 일본 내 이동을 거쳤다. 광복 후 70년이 지난 2015년에야 반환됐다. 지금은 국립중앙박물관에서 볼 수 있다.',char_count:256,emotion_keywords_used:['기억','역사']},
   hooks:['일제가 반출한 국보 탑','70년 만에 돌아온 고려 탑','지광국사현묘탑 탄생지','2015년 반환 국보','지금은 국립중앙박물관에'],
   thumbnails:['일제 반출 탑','70년 만에 귀환','국보 고려 탑','2015 반환','중앙박물관 소재'],
   captions:{youtube:'원주 법천사지 | 일제가 반출한 국보 지광국사탑 — 70년 만에 귀환. 강원 원주시. #법천사지 #지광국사탑 #국보',instagram:'일제가 빼앗아간 국보 탑이 70년 만에 돌아온 절터 🏛️ 원주 법천사지.',tiktok:'일제가 가져간 국보 탑 70년 만에 돌아온 사연 원주 법천사지 #법천사지 #국보 #역사',xiaohongshu:'原州法泉寺址 🏛️ 日帝带走的国宝地光国师塔70年后归还 | 江原原州 #法泉寺址 #地光国师塔 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#강원도','#고려역사','#국보'],place_specific:['#법천사지','#지광국사탑','#원주','#일제반출']},
   map_card_intro:'일제가 빼앗아 간 국보 지광국사현묘탑이 있던 절터 — 70년 만에 귀환한 고려의 보물'},
  {place_id:'GK-GW-SAJ-0005',place_name:'홍천 수타사',
   script_30s:{text:'708년 원효대사가 창건한 공작산 고찰. 보물 목조아미타여래삼존불좌상이 있다. 수타사 계곡이 아름다워 여름 피서지로도 유명하다. 홍천 9경 중 하나다.',char_count:68,emotion_keywords_used:['신앙','자연']},
   script_60s:{text:'강원도 홍천 공작산 기슭에 절이 있다. 수타사다. 708년 원효대사가 창건했다. 창건 당시 이름은 일월사였다가 이후 수타사로 바뀌었다. 보물 목조아미타여래삼존불좌상이 경내에 있다. 절 앞으로 수타사계곡이 흐른다. 12km의 계곡을 따라 맑은 물과 기암괴석이 이어진다. 홍천 9경 중 제6경이다. 여름 피서지로 유명하고 가을 단풍도 아름답다. 계곡을 따라 걷는 산소길이 유명하다.',char_count:254,emotion_keywords_used:['신앙','자연']},
   hooks:['708년 원효대사 창건','수타사계곡 12km 피서지','홍천9경 제6경','보물 아미타불좌상','산소길 트레킹'],
   thumbnails:['원효대사 창건','12km 계곡','홍천9경 6경','보물 불좌상','산소길'],
   captions:{youtube:'홍천 수타사 | 708년 원효대사 창건 — 12km 수타사계곡 피서지. 강원 홍천군. #수타사 #수타사계곡 #홍천',instagram:'708년 원효대사 창건 절 옆 12km 계곡이 피서지 🏔️ 홍천 수타사.',tiktok:'원효대사 창건 절 앞 계곡이 12km 피서 명소 홍천 수타사 #수타사 #홍천 #원효',xiaohongshu:'洪川水打寺 🏔️ 708年元晓大师创建 | 12km水打寺溪谷避暑胜地 | 江原洪川 #水打寺 #元晓 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#강원도','#불교','#원효대사'],place_specific:['#수타사','#수타사계곡','#홍천','#공작산']},
   map_card_intro:'708년 원효대사가 창건한 공작산 고찰 — 12km 계곡이 흐르는 홍천 최고의 피서지'}
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
console.log('C모드 46차: '+updated+'개 / 누적 '+lib.total+'개');
ids.forEach((id,i)=>console.log('  C+ ['+id+'] '+scripts[i].place_name));
