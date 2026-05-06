const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const scripts = [
  {place_id:'GK-CN-SAE-0003',place_name:'서천 한산모시관',
   script_30s:{text:'한산모시는 1,500년 역사의 전통 직물. 신라 때부터 짰다. 지금도 충남 서천 한산에서 손으로 짠다. 이 섬세한 직물이 유네스코 무형유산이다. 한산모시관에서 직접 체험할 수 있다.',char_count:77,emotion_keywords_used:['전통','기억']},
   script_60s:{text:'충남 서천 한산에 특별한 박물관이 있다. 한산모시관이다. 한산모시는 1,500년 역사의 전통 직물이다. 신라 진흥왕 때부터 만들었다는 기록이 있다. 모시는 모시풀의 줄기 껍질에서 뽑은 섬유다. 한산 지역의 기후와 토양이 모시풀 재배에 최적이라 한산모시가 최고 품질이다. 모시 한 필을 짜려면 숙련된 장인이 두 달을 짜야 한다. 조선 시대 왕실 진상품이었다. 2011년 유네스코 무형유산으로 등재됐다. 한산모시관에서 체험도 가능하다.',char_count:257,emotion_keywords_used:['전통','기억']},
   hooks:['1500년 역사 유네스코 무형유산','한 필 짜는 데 두 달','신라 때부터 짠 섬세한 직물','조선 왕실 진상품','한산모시 체험 가능'],
   thumbnails:['1500년 직물','두 달 걸리는 한 필','신라부터 시작','왕실 진상품','유네스코'],
   captions:{youtube:'서천 한산모시관 | 1500년 역사 유네스코 무형유산 — 한 필에 두 달. 충남 서천군. #한산모시관 #한산모시 #유네스코',instagram:'1500년 역사 직물 한 필 짜는 데 두 달 걸리는 유네스코 무형유산 🧵 한산모시관.',tiktok:'유네스코 무형유산 한산모시 1500년 역사 직물 한 필에 두 달 걸림 #한산모시 #유네스코 #서천',xiaohongshu:'舒川汉山苎麻馆 🧵 1500年历史联合国非物质文化遗产 | 织一匹需两个月 | 忠南舒川 #汉山苎麻 #联合国非物质文化遗产 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#충청남도','#전통문화','#유네스코'],place_specific:['#한산모시관','#한산모시','#서천','#무형유산']},
   map_card_intro:'1,500년 역사 — 한 필에 두 달 걸리는 조선 왕실 진상품 한산모시의 유네스코 무형유산'},
  {place_id:'GK-GG-SAE-0004',place_name:'수원 화령전',
   script_30s:{text:'정조가 아버지 사도세자가 아닌 자신의 어진을 모신 건물. 살아있는 왕의 초상화를 모신 전각이다. 정조 사후 조성됐다. 수원 화성 안에 있는 조선 왕실의 독특한 건물이다.',char_count:73,emotion_keywords_used:['기억','역사']},
   script_60s:{text:'경기도 수원 화성 안에 독특한 건물이 있다. 화령전이다. 1801년 정조 사후 그의 아들 순조가 세웠다. 정조의 어진, 즉 초상화를 모신 전각이다. 조선 시대에 살아있는 왕의 어진을 모시는 경우는 있었지만 사후에도 별도 전각에 어진을 모시는 것은 특별하다. 정조는 수원을 특별히 사랑했다. 아버지 사도세자의 능과 화성행궁을 지었다. 화령전은 그런 정조를 기리는 순조의 효심의 결과물이다.',char_count:255,emotion_keywords_used:['기억','역사']},
   hooks:['살아있는 왕의 어진 모신 전각','정조를 기리는 순조의 효심','1801년 사후 조성','수원 화성 안의 왕실 건물','정조 어진 봉안처'],
   thumbnails:['정조 어진 전각','순조의 효심','1801년 건물','화성 안 왕실','어진 봉안'],
   captions:{youtube:'수원 화령전 | 정조 어진 봉안 — 순조가 아버지 기린 수원 화성 전각. 경기 수원시. #화령전 #정조 #수원화성',instagram:'아버지를 기리는 순조가 정조 어진 모신 전각 🏯 수원 화령전.',tiktok:'정조 어진 모신 수원 화령전 순조가 아버지 기리려 세운 거임 #화령전 #정조 #수원',xiaohongshu:'水原华宁殿 🏯 纯祖为纪念父亲正祖奉安御真之殿 | 京畿水原 #华宁殿 #正祖 #水原华城'},
   hashtags:{korean:['#한국역사','#역사여행','#경기도','#조선역사','#정조'],place_specific:['#화령전','#정조','#수원화성','#순조']},
   map_card_intro:'순조가 아버지 정조를 기리기 위해 어진을 모신 수원 화성 안의 조선 왕실 전각'},
  {place_id:'GK-GG-SAE-0005',place_name:'파주 용미리 마애이불입상',
   script_30s:{text:'고려 시대 바위에 새긴 거대한 두 부처. 높이 17.4m. 두 석불이 나란히 서 있는데 이 지역에서는 미륵불이라 불린다. 고려 여인들이 찾아와 자녀를 기원하던 곳이다. 보물.',char_count:74,emotion_keywords_used:['신앙','기억']},
   script_60s:{text:'경기도 파주에 거대한 바위 불상이 있다. 용미리 마애이불입상이다. 고려 시대에 천연 암반에 두 불상을 새겼다. 높이 17.4m. 두 불상이 나란히 서 있다. 하나는 원형 두광, 하나는 방형 두광이다. 이 불상들이 독특한 것은 두 분이 나란히 서 있다는 것과, 고려적 형식의 둥근 얼굴이다. 예부터 이 지역에서는 미륵불이라 불렀다. 자녀를 원하는 부녀자들이 찾아와 기도를 드렸다. 보물 제93호.',char_count:256,emotion_keywords_used:['신앙','기억']},
   hooks:['17.4m 나란히 선 두 불상','고려 시대 바위 새긴 거대불','자녀 기원하던 미륵불','천연 암반 마애불','파주 숨겨진 보물'],
   thumbnails:['두 불상 나란히','17.4m 바위 불상','고려 미륵불','자녀 기원','파주 보물'],
   captions:{youtube:'파주 용미리 마애이불입상 | 17.4m 나란히 선 고려 두 불상 — 보물. 경기 파주시. #마애이불입상 #파주 #고려불상',instagram:'17.4m 두 불상이 나란히 서 있는 고려 시대 바위 불상 🗿 파주 용미리.',tiktok:'17.4m 두 불상 나란히 서있는 파주 용미리 마애이불입상 보물임 #마애이불입상 #파주 #고려',xiaohongshu:'坡州龙尾里磨崖二佛立像 🗿 17.4m高丽时代岩刻两尊立佛 | 宝物93号 | 京畿坡州 #磨崖二佛 #高丽 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#경기도','#고려역사','#불교'],place_specific:['#마애이불입상','#파주','#고려불상','#보물']},
   map_card_intro:'17.4m 두 불상이 나란히 서 있는 고려 시대 바위 마애불 — 파주 보물 제93호'},
  {place_id:'GK-GG-JEN-0002',place_name:'고양 행주대첩비',
   script_30s:{text:'임진왜란 3대 대첩 중 하나인 행주대첩의 현장. 1593년 권율 장군이 왜군 3만 명을 격퇴한 곳이다. 부녀자들이 앞치마로 돌을 날랐다는 행주치마 전설의 현장이다.',char_count:78,emotion_keywords_used:['저항','기억']},
   script_60s:{text:'경기도 고양 행주산성에 비석이 있다. 행주대첩비다. 1593년 임진왜란 중 권율 장군이 이끄는 조선군이 왜군 3만 명을 격퇴한 행주대첩을 기념한다. 한산도 대첩, 진주대첩과 함께 임진왜란 3대 대첩 중 하나다. 2,300명의 조선군이 3만 명 왜군을 막아냈다. 이때 부녀자들이 앞치마로 돌을 날랐다는 이야기가 전해진다. 행주치마의 어원이라는 설이 있다. 행주산성 위에 대첩비와 사당이 있다.',char_count:252,emotion_keywords_used:['저항','기억']},
   hooks:['임진왜란 3대 대첩 현장','2300 vs 3만명 기적의 승리','행주치마 전설의 현장','권율 장군 대첩 기념비','부녀자들이 돌을 날랐다'],
   thumbnails:['임진왜란 3대 대첩','2300명 기적','행주치마 전설','권율 장군','부녀자 항전'],
   captions:{youtube:'고양 행주대첩비 | 임진왜란 3대 대첩 — 2300 vs 3만 명. 경기 고양시. #행주대첩 #권율 #행주치마',instagram:'2300명이 3만 명을 막아낸 행주대첩 — 부녀자들이 앞치마로 돌을 날랐다 ⚔️ 고양 행주산성.',tiktok:'행주치마 이름이 행주대첩에서 나왔다는 설 있음 경기도 고양 #행주대첩 #권율 #역사',xiaohongshu:'高阳幸州大捷碑 ⚔️ 壬辰倭乱三大大捷 | 2300人对抗3万倭军 | 京畿高阳 #幸州大捷 #权栗 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#경기도','#임진왜란','#권율'],place_specific:['#행주대첩','#행주산성','#권율','#행주치마']},
   map_card_intro:'2,300명이 왜군 3만 명을 격퇴한 임진왜란 3대 대첩 현장 — 행주치마 전설이 깃든 고양 행주산성'},
  {place_id:'GK-GG-SAJ-0006',place_name:'남양주 봉선사',
   script_30s:{text:'세조의 능 광릉 옆에 조선 왕실이 세운 능침 사찰. 세조의 명복을 빌기 위해 창건됐다. 봉선이란 선왕을 받들어 모신다는 뜻이다. 광릉수목원과 함께 남양주 여행의 코스다.',char_count:77,emotion_keywords_used:['신앙','기억']},
   script_60s:{text:'경기도 남양주 광릉 옆에 절이 있다. 봉선사다. 1469년 예종이 아버지 세조의 능 광릉 옆에 세웠다. 세조의 명복을 빌기 위한 능침 사찰이다. 봉선이란 선왕을 받들어 모신다는 뜻이다. 세조가 죽고 예종이 이 절을 지어 아버지를 기렸다. 조선 왕실이 세운 절답게 왕실 유물이 많다. 광릉숲 속에 자리해 주변 경관이 빼어나다. 광릉수목원과 함께 남양주 문화·자연 코스다.',char_count:254,emotion_keywords_used:['신앙','기억']},
   hooks:['세조 명복 빈 능침 사찰','예종이 아버지 위해 세운 절','광릉 옆 왕실 사찰','봉선은 선왕을 모신다는 뜻','광릉수목원 함께 코스'],
   thumbnails:['세조 능침 사찰','예종의 효심','광릉 옆 위치','왕실 유물','광릉수목원 코스'],
   captions:{youtube:'남양주 봉선사 | 세조 명복 빌기 위해 예종이 세운 왕실 사찰. 경기 남양주시. #봉선사 #세조 #광릉',instagram:'아버지 세조의 명복을 빌기 위해 예종이 세운 왕실 능침 사찰 🛕 남양주 봉선사.',tiktok:'세조 명복 빌려 예종이 세운 절이 남양주 봉선사 광릉 바로 옆임 #봉선사 #세조 #역사',xiaohongshu:'南杨州奉先寺 🛕 睿宗为父亲世祖冥福修建的王室陵寝寺院 | 京畿南杨州 #奉先寺 #世祖 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#경기도','#조선역사','#세조'],place_specific:['#봉선사','#세조','#광릉','#남양주']},
   map_card_intro:'예종이 아버지 세조의 명복을 빌기 위해 광릉 옆에 세운 조선 왕실 능침 사찰'}
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
console.log('C모드 43차: '+updated+'개 / 누적 '+lib.total+'개');
ids.forEach((id,i)=>console.log('  C+ ['+id+'] '+scripts[i].place_name));
