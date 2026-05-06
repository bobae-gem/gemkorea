const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const scripts = [
  {place_id:'GK-JN-JEN-0001',place_name:'여수 진남관',
   script_30s:{text:'이순신 장군이 삼도수군통제사로 있을 때 지휘하던 전라 좌수영의 본부. 국내 최대 규모의 단층 목조 건물이다. 임진왜란 승리의 기반이 된 지휘 본부가 지금도 여수에 있다.',char_count:82,emotion_keywords_used:['헌신','기억']},
   script_60s:{text:'전남 여수에 국내 최대 단층 목조 건물이 있다. 진남관이다. 이순신 장군이 삼도수군통제사로 있을 때 이 자리에 전라 좌수영의 지휘 본부가 있었다. 임진왜란 당시 23전 23승의 불패 신화를 이룬 전략 기지였다. 원래 건물은 불탔고, 1716년 지금의 건물이 다시 세워졌다. 정면 15칸, 측면 5칸. 면적 240평. 국내에서 가장 큰 단층 목조 건물이다. 국보 제304호.',char_count:258,emotion_keywords_used:['헌신','기억']},
   hooks:['이순신이 전쟁 지휘한 본부','국내 최대 단층 목조 건물','23전 23승의 전략 기지','240평 목조 건물','국보 진남관'],
   thumbnails:['이순신 지휘 본부','국내 최대 목조','23전 23승','240평','국보 제304호'],
   captions:{youtube:'여수 진남관 | 이순신이 전쟁 지휘한 국내 최대 단층 목조 건물 — 국보. 전남 여수시. #진남관 #이순신 #임진왜란',instagram:'이순신이 23전 23승을 지휘한 본부 🏛️ 여수 진남관, 국내 최대 단층 목조 건물.',tiktok:'이순신이 전쟁 지휘한 건물이 국내 최대 단층 목조 건물임 #진남관 #이순신 #역사',xiaohongshu:'丽水镇南馆 🏛️ 李舜臣统帅三道水军的指挥本部 | 国内最大单层木造建筑 | 全南丽水 #镇南馆 #李舜臣 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#전라남도','#이순신','#임진왜란'],place_specific:['#진남관','#이순신','#여수','#국보']},
   map_card_intro:'이순신이 23전 23승을 지휘한 전라 좌수영 본부 — 국내 최대 단층 목조 건물'},
  {place_id:'GK-JN-JEN-0002',place_name:'여수 이순신 광장',
   script_30s:{text:'여수 구항 앞에 이순신 장군의 동상이 서 있다. 여수 밤바다와 거북선이 있는 광장이다. 낭만적인 야경으로 유명한 여수의 중심 광장이자 역사 현장이다.',char_count:75,emotion_keywords_used:['낭만','기억']},
   script_60s:{text:'여수 구항 앞 광장에 이순신 장군 동상이 서 있다. 이순신 광장이다. 이 일대가 임진왜란 당시 이순신의 전라 좌수영이 있던 곳이다. 광장에는 거북선 모형도 전시되어 있다. 낭만 여수의 시작점. 바다를 배경으로 야경이 아름다워 여수를 대표하는 포토존이 됐다. 여수 밤바다라는 노래로 더 유명해졌다. 진남관에서 걸어서 5분 거리에 있어 함께 둘러보기 좋다.',char_count:252,emotion_keywords_used:['낭만','기억']},
   hooks:['여수 밤바다의 시작점','이순신 동상과 거북선','낭만 여수 대표 포토존','전라 좌수영의 역사적 현장','야경이 아름다운 여수 구항'],
   thumbnails:['이순신 동상','거북선 모형','여수 밤바다','야경 포토존','구항 낭만'],
   captions:{youtube:'여수 이순신 광장 | 여수 밤바다 야경과 이순신·거북선 — 낭만 여수의 시작점. 전남 여수시. #이순신광장 #여수밤바다 #여수',instagram:'여수 밤바다 시작은 이순신 광장에서 🌊 이순신 동상과 거북선, 야경 포토존.',tiktok:'여수 밤바다 야경 포토존이 이순신 광장임 #이순신광장 #여수밤바다 #여수',xiaohongshu:'丽水李舜臣广场 🌊 丽水夜海景与李舜臣铜像 | 浪漫丽水的起点 | 全南丽水 #李舜臣广场 #丽水夜海 #韩国旅游'},
   hashtags:{korean:['#한국역사','#역사여행','#전라남도','#이순신','#여수여행'],place_specific:['#이순신광장','#여수밤바다','#여수','#거북선']},
   map_card_intro:'여수 밤바다를 배경으로 이순신 동상과 거북선이 있는 역사·낭만의 광장'},
  {place_id:'GK-JN-SAJ-0002',place_name:'해남 대흥사',
   script_30s:{text:'두륜산 계곡에 자리 잡은 천년 고찰. 임진왜란 때 의승군을 이끈 서산대사의 의발이 봉안된 절이다. 유네스코 세계유산 한국의 산사 중 하나. 13명의 대종사와 대강사를 배출한 불교의 성지다.',char_count:90,emotion_keywords_used:['신앙','기억']},
   script_60s:{text:'전남 해남 두륜산 계곡 깊숙이 절이 있다. 대흥사다. 창건 시기는 정확하지 않지만 통일신라 이전부터 있었다고 전해진다. 임진왜란 때 서산대사가 의승군을 이끌고 왜군에 맞섰다. 그 서산대사의 의발이 지금 대흥사에 봉안되어 있다. 절 안에 서산대사 사당인 표충사가 있다. 조선 시대 이 절에서 13명의 대종사와 대강사가 나왔다. 불교 종사의 중심지였다. 2018년 유네스코 세계유산 한국의 산사로 등재됐다.',char_count:262,emotion_keywords_used:['신앙','기억']},
   hooks:['서산대사 의발이 봉안된 절','의승군을 이끈 스님의 사당','13명 대종사 배출한 성지','두륜산 계곡 천년 고찰','유네스코 한국의 산사'],
   thumbnails:['서산대사 의발','의승군의 절','13명 대종사','두륜산 고찰','유네스코'],
   captions:{youtube:'해남 대흥사 | 서산대사 의발 봉안 — 의승군·13명 대종사의 불교 성지. 전남 해남군. #대흥사 #서산대사 #유네스코',instagram:'임진왜란 의승군 서산대사의 의발이 여기 있다 🛕 해남 대흥사, 유네스코 세계유산.',tiktok:'임진왜란 의승군 이끈 스님 서산대사 의발이 여기 있음 #대흥사 #서산대사 #역사',xiaohongshu:'海南大兴寺 🛕 供奉西山大师衣钵 | 义僧军领导者的祠堂 | 联合国教科文组织 | 全南海南 #大兴寺 #西山大师 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#전라남도','#불교','#유네스코'],place_specific:['#대흥사','#서산대사','#해남','#한국의산사']},
   map_card_intro:'임진왜란 의승군을 이끈 서산대사의 의발이 봉안된 두륜산 천년 고찰 — 유네스코 세계유산'},
  {place_id:'GK-JN-SAE-0001',place_name:'강진 고려청자 도요지',
   script_30s:{text:'고려청자가 만들어진 곳. 강진 대구면 일대는 최고급 고려청자의 90%를 생산한 도자기의 성지다. 비색청자의 신비로운 빛깔이 여기서 탄생했다. 사적 제68호.',char_count:77,emotion_keywords_used:['아름다움','기억']},
   script_60s:{text:'전남 강진 대구면. 이 일대에 고려 시대 도자기 가마 터가 200여 기 남아 있다. 9~14세기, 고려청자의 전성기를 이끈 핵심 생산지다. 당시 최고급 고려청자의 90%가 이곳에서 만들어졌다. 비색청자의 그 오묘한 비취색이 이 가마에서 나왔다. 중국 송나라 도공들도 감탄한 색이다. 고려청자박물관이 있어 청자의 역사와 제작 과정을 볼 수 있고, 직접 만들어 볼 수 있는 체험도 가능하다. 사적 제68호.',char_count:262,emotion_keywords_used:['아름다움','기억']},
   hooks:['고려청자 90% 생산된 곳','비색청자의 탄생지','200여 기 가마 터','송나라도 감탄한 비취색','강진 고려청자박물관'],
   thumbnails:['청자 90% 생산','비색의 탄생','200기 가마 터','송나라도 감탄','청자박물관'],
   captions:{youtube:'강진 고려청자 도요지 | 비색청자 90% 생산 — 200여 기 가마 터. 전남 강진군. #고려청자 #도요지 #강진',instagram:'고려청자 90%가 여기서 만들어졌다 🏺 강진 고려청자 도요지, 비색의 탄생지.',tiktok:'고려청자 그 신비로운 비색이 여기서 나왔음 #고려청자 #강진 #역사',xiaohngshu:'康津高丽青瓷窑址 🏺 高丽青瓷90%生产地 | 翡翠色青瓷的诞生地 | 全南康津 #高丽青瓷 #窑址 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#전라남도','#고려청자','#도자기'],place_specific:['#고려청자','#도요지','#강진','#비색청자']},
   map_card_intro:'고려청자 90%가 생산된 비색청자의 탄생지 — 200여 기 가마 터가 남은 도자기 성지'},
  {place_id:'GK-JN-SAE-0002',place_name:'담양 소쇄원',
   script_30s:{text:'조선 중기 사대부 양산보가 만든 개인 정원. 대나무 숲과 계곡, 정자가 어우러진 조선 최고의 민간 정원이다. 자연 지형을 그대로 살린 건축이 한국 정원의 미학을 보여준다.',char_count:84,emotion_keywords_used:['아름다움','전통']},
   script_60s:{text:'전남 담양 창평천 계곡에 작은 정원이 있다. 소쇄원이다. 1530년대 양산보가 은둔을 위해 만들었다. 당대 최고의 학자 김인후, 고경명, 정철 등이 이 정원을 찾아 시를 지었다. 그만큼 아름다운 곳이었다. 소쇄원의 특징은 자연 지형을 최대한 살린 것이다. 돌을 쌓고 계곡을 흘리고 대나무 숲을 조성하고 정자 두 개를 얹었다. 마음을 씻는 공간이라는 뜻의 소쇄. 조선 선비 정원의 최고 걸작으로 꼽힌다. 명승 제40호.',char_count:260,emotion_keywords_used:['아름다움','전통']},
   hooks:['조선 최고의 민간 정원','김인후·정철이 찾아온 정원','자연 지형 살린 건축 미학','은둔 선비가 만든 이상향','대나무 숲 계곡 정자'],
   thumbnails:['조선 최고 정원','선비들의 이상향','자연 살린 건축','대나무 숲 계곡','소쇄 마음 씻는 곳'],
   captions:{youtube:'담양 소쇄원 | 조선 최고 민간 정원 — 김인후·정철이 찾아온 선비의 이상향. 전남 담양군. #소쇄원 #조선정원 #담양',instagram:'조선 최고의 민간 정원에 선비들이 찾아와 시를 지었다 🌿 담양 소쇄원.',tiktok:'조선 시대 최고 정원 소쇄원 알고 있었음? 선비들 시 짓던 곳 #소쇄원 #담양 #역사',xiaohongshu:'潭阳潇洒苑 🌿 朝鲜时代最美民间庭园 | 金麟厚·郑澈造访的文人理想乡 | 全南潭阳 #潇洒苑 #朝鲜庭园 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#전라남도','#조선역사','#정원'],place_specific:['#소쇄원','#담양','#조선정원','#명승']},
   map_card_intro:'김인후·정철이 찾아와 시를 지은 조선 최고의 민간 정원 — 자연 지형을 살린 선비의 이상향'}
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
console.log('C모드 21차: '+updated+'개 / 누적 '+lib.total+'개');
ids.forEach((id,i)=>console.log('  C+ ['+id+'] '+scripts[i].place_name));
