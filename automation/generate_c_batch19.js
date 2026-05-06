const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const scripts = [
  {place_id:'GK-GB-RYU-0002',place_name:'경주 김유신묘',
   script_30s:{text:'삼국통일을 이룬 신라의 장군 김유신. 그 무덤이 경주 서북쪽 야산에 있다. 무덤 둘레에 12지신상이 조각된 호석이 둘러져 있다. 신라 무덤 중 호석이 있는 몇 안 되는 귀한 무덤이다.',char_count:85,emotion_keywords_used:['업적','기억']},
   script_60s:{text:'삼국통일을 이룬 신라의 대표 장군 김유신. 기원후 595년 태어나 673년 79세로 사망했다. 고구려·백제를 멸망시키고 당나라 군대를 몰아내는 데 핵심 역할을 했다. 그 무덤이 경주 서북쪽 송화산에 있다. 지름 30m의 원형 무덤이다. 독특한 것은 무덤 둘레를 감싼 호석이다. 12지신상이 조각돼 있다. 신라 왕릉에서 주로 볼 수 있는 형태인데, 왕이 아닌 신하의 무덤에 이런 형태가 있는 것은 드물다. 김유신에 대한 당대의 평가를 보여주는 무덤이다.',char_count:264,emotion_keywords_used:['업적','기억']},
   hooks:['삼국통일 영웅의 무덤','12지신상 조각된 호석','왕 아닌 신하의 왕릉급 무덤','고구려 백제 당 모두 이긴 장군','79세까지 산 전쟁의 신'],
   thumbnails:['삼국통일 김유신','12지신상 호석','왕급 대우 무덤','전쟁의 신','경주 야산'],
   captions:{youtube:'경주 김유신묘 | 삼국통일 영웅 — 12지신상 호석이 둘러진 왕급 무덤. 경북 경주시. #김유신묘 #김유신 #삼국통일',instagram:'삼국통일 김유신 장군 무덤에 12지신상이 새겨져 있다 ⚔️ 경주 김유신묘.',tiktok:'삼국통일 영웅 김유신 무덤 왕릉급 호석 있음 #김유신묘 #삼국통일 #신라',xiaohongshu:'庆州金庾信墓 ⚔️ 三国统一英雄墓 | 雕刻12生肖像的护石 | 庆北庆州 #金庾信 #三国统一 #新罗历史'},
   hashtags:{korean:['#한국역사','#역사여행','#경상북도','#신라역사','#삼국통일'],place_specific:['#김유신묘','#김유신','#신라','#경주']},
   map_card_intro:'삼국통일을 이룬 김유신 장군의 무덤 — 12지신상 호석이 둘러진 왕급 예우'},
  {place_id:'GK-GB-RYU-0003',place_name:'경주 무열왕릉',
   script_30s:{text:'신라 최초로 삼국통일을 꿈꾸고 기반을 닦은 태종 무열왕 김춘추의 무덤. 능 앞에 국보 비석 귀부가 남아 있다. 이수가 없어진 채 귀부만 남은 비석이 천년을 서 있다.',char_count:84,emotion_keywords_used:['업적','기억']},
   script_60s:{text:'경주 서쪽에 큰 봉분이 있다. 태종 무열왕릉이다. 신라 29대 왕 김춘추의 무덤이다. 김춘추는 당나라와 동맹을 맺어 백제를 멸망시킨 왕이다. 삼국통일의 기반을 닦았으나 완성은 아들 문무왕 때 이뤄졌다. 무덤 앞에 국보 제25호 귀부가 있다. 거북 모양 비석 받침돌이다. 원래 그 위에 비석과 이수가 있었지만 비석과 이수는 사라지고 귀부와 이수 일부만 남아 있다. 현존하는 신라 왕릉 중 능 주인이 확실히 밝혀진 몇 안 되는 왕릉이다.',char_count:264,emotion_keywords_used:['업적','기억']},
   hooks:['삼국통일 기반 닦은 왕의 무덤','당나라와 동맹 맺은 김춘추','비석은 사라지고 귀부만 천년 서있다','주인이 확실한 신라 왕릉','국보 귀부를 품은 왕릉'],
   thumbnails:['김춘추의 무덤','당나라 동맹왕','국보 귀부','비석 없는 귀부','삼국통일 기반'],
   captions:{youtube:'경주 무열왕릉 | 삼국통일 기반 닦은 김춘추의 왕릉 — 국보 귀부. 경북 경주시. #무열왕릉 #김춘추 #신라',instagram:'삼국통일의 기반 닦은 태종 무열왕 김춘추의 무덤 ⚔️ 경주 무열왕릉.',tiktok:'삼국통일 기반 닦은 김춘추 왕릉에 국보 귀부 있음 #무열왕릉 #신라 #역사',xiaohongshu:'庆州武烈王陵 ⚔️ 奠定三国统一基础的金春秋王陵 | 国宝龟趺 | 庆北庆州 #武烈王 #金春秋 #新罗历史'},
   hashtags:{korean:['#한국역사','#역사여행','#경상북도','#신라역사','#삼국통일'],place_specific:['#무열왕릉','#김춘추','#신라','#경주']},
   map_card_intro:'삼국통일의 기반을 닦은 태종 무열왕 김춘추의 왕릉 — 국보 귀부가 있는 현장'},
  {place_id:'GK-GB-SAE-0003',place_name:'경주 양동마을',
   script_30s:{text:'조선 시대 양반 가문이 500년 동안 이어온 마을. 지금도 사람이 살고 있는 살아있는 민속마을이다. 54채의 고택이 능선을 따라 자리 잡고 있다. 유네스코 세계유산.',char_count:80,emotion_keywords_used:['전통','기억']},
   script_60s:{text:'경주에서 북쪽으로 20km. 산자락에 기와집들이 모여 있다. 양동마을이다. 조선 초기부터 형성된 씨족 마을로 500년 역사를 이어오고 있다. 손씨와 이씨 두 가문이 중심이다. 마을 안에는 국보·보물급 고택이 여럿 있다. 무첨당, 향단, 관가정 등. 특이한 것은 지금도 마을 사람들이 살고 있다는 것이다. 살아있는 민속마을이다. 마을 전체가 유네스코 세계유산이다. 조선 시대 양반 가옥의 배치, 사랑채와 안채의 구조를 직접 볼 수 있다.',char_count:264,emotion_keywords_used:['전통','기억']},
   hooks:['500년 된 살아있는 마을','지금도 사람이 사는 조선 마을','국보 고택들이 모여있다','손씨와 이씨 두 가문의 역사','유네스코 세계유산 민속마을'],
   thumbnails:['500년 살아있는 마을','조선 양반 마을','국보 고택','기와집 능선','유네스코'],
   captions:{youtube:'경주 양동마을 | 500년 된 살아있는 조선 양반 마을 — 유네스코 세계유산. 경북 경주시. #양동마을 #민속마을 #유네스코',instagram:'지금도 사람이 사는 500년 조선 마을 🏘️ 경주 양동마을, 유네스코 세계유산.',tiktok:'500년 조선 마을에 지금도 사람이 살고 있음 #양동마을 #경주 #유네스코',xiaohongshu:'庆州良洞村 🏘️ 朝鲜时代传承500年的活着的民俗村 | 联合国教科文组织世界遗产 | 庆北庆州 #良洞村 #韩国历史 #民俗村'},
   hashtags:{korean:['#한국역사','#역사여행','#경상북도','#조선역사','#유네스코'],place_specific:['#양동마을','#민속마을','#경주','#한옥']},
   map_card_intro:'500년 역사를 이어온 살아있는 조선 양반 마을 — 유네스코 세계유산'},
  {place_id:'GK-GB-SWO-0004',place_name:'경주 옥산서원',
   script_30s:{text:'조선 중기 성리학자 이언적을 배향한 서원. 자계천 계곡 안에 자리 잡아 자연과 건축이 어우러진 경관이 빼어나다. 유네스코 세계유산 한국의 서원 중 하나.',char_count:78,emotion_keywords_used:['학문','기억']},
   script_60s:{text:'경주 안강 자계천 계곡 안에 서원이 숨어 있다. 옥산서원이다. 1573년 선조 때 세워졌다. 조선 성리학의 대표적 학자 이언적을 배향한다. 이언적은 조선 성리학의 이론을 발전시킨 인물로 이황에게도 영향을 미쳤다. 서원 주변에 자계천 계곡이 흐르고 소나무 숲이 우거져 있어 경관이 빼어나다. 독락당이라는 이언적의 고택도 가까이 있다. 2019년 유네스코 세계유산 한국의 서원으로 등재됐다.',char_count:261,emotion_keywords_used:['학문','기억']},
   hooks:['이황에게 영향 준 성리학자의 서원','계곡 안에 숨은 서원','조선 성리학의 대가 이언적','유네스코 한국의 서원','독락당과 함께하는 경주 코스'],
   thumbnails:['계곡 속 서원','이언적의 서원','조선 성리학','한국의 서원 유네스코','자계천 경관'],
   captions:{youtube:'경주 옥산서원 | 이황에게 영향 준 이언적 서원 — 계곡 속 유네스코 세계유산. 경북 경주시. #옥산서원 #이언적 #유네스코',instagram:'경주 계곡 안에 숨은 조선 성리학 서원 📚 옥산서원, 유네스코 세계유산.',tiktok:'이황에게 영향 준 성리학자 이언적의 서원이 경주 계곡에 숨어있음 #옥산서원 #유네스코 #역사',xiaohongshu:'庆州玉山书院 📚 影响李滉的性理学家李彦迪书院 | 溪谷里的联合国教科文组织遗产 | 庆北庆州 #玉山书院 #韩国书院'},
   hashtags:{korean:['#한국역사','#역사여행','#경상북도','#조선역사','#유네스코'],place_specific:['#옥산서원','#이언적','#경주','#한국의서원']},
   map_card_intro:'이황에게 영향을 준 성리학자 이언적을 배향한 계곡 속 서원 — 유네스코 세계유산'},
  {place_id:'GK-JB-SAE-0001',place_name:'전주 경기전',
   script_30s:{text:'조선 태조 이성계의 어진이 모셔진 곳. 1410년 세워진 조선왕조 발상지 전주의 상징이다. 임진왜란 때 어진을 지키기 위해 목숨 건 피난 행렬이 이어졌다. 한옥마을 중심에 있다.',char_count:84,emotion_keywords_used:['전통','기억']},
   script_60s:{text:'전주 한옥마을 한복판에 오래된 궁궐 같은 건물이 있다. 경기전이다. 1410년 태종이 지었다. 조선을 세운 태조 이성계의 어진, 즉 초상화를 모신 곳이다. 이성계의 고향이 전주 근처라는 점에서 의미 깊은 공간이다. 임진왜란 때 왜군이 전주로 밀려오자 어진을 지키기 위해 목숨 건 피난 행렬이 이어졌다. 그 덕에 어진이 지금까지 전해진다. 경내에 전주사고(史庫)도 있어 조선왕조실록을 보관했다. 전라감영, 풍패지관과 함께 전주 역사 코스 필수 방문지.',char_count:266,emotion_keywords_used:['전통','기억']},
   hooks:['이성계 어진이 여기 있다','임진왜란에도 어진을 지켰다','조선왕조실록 보관하던 사고','전주 한옥마을 중심 역사','조선 발상지 전주의 상징'],
   thumbnails:['이성계 어진','어진 목숨 건 피난','조선왕조실록 사고','전주 한옥마을','조선 발상지'],
   captions:{youtube:'전주 경기전 | 이성계 어진 보관 — 임진왜란에도 목숨 걸고 지킨 그 어진. 전북 전주시. #경기전 #이성계 #전주한옥마을',instagram:'임진왜란에도 목숨 걸고 지킨 이성계 어진이 여기 있다 🏯 전주 경기전.',tiktok:'임진왜란 때 왜군 피해 어진 들고 도망간 스토리 알아? #경기전 #이성계 #전주',xiaohongshu:'全州庆基殿 🏯 供奉李成桂御真 | 壬辰倭乱中冒死保护御真的历史 | 全北全州 #庆基殿 #李成桂 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#전라북도','#조선역사','#전주'],place_specific:['#경기전','#이성계','#어진','#전주한옥마을']},
   map_card_intro:'태조 이성계의 어진이 모셔진 조선왕조 발상지의 상징 — 임진왜란에도 지킨 어진'}
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
console.log('C모드 19차: '+updated+'개 / 누적 '+lib.total+'개');
ids.forEach((id,i)=>console.log('  C+ ['+id+'] '+scripts[i].place_name));
