const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const scripts = [
  {place_id:'GK-SE-GUN-0005',place_name:'경희궁',
   script_30s:{text:'조선 왕의 두 번째 궁궐, 경희궁. 광해군이 짓고 여러 왕이 머물렀다. 그런데 일제강점기 때 건물 대부분이 헐렸다. 숭정전만 남아 지금은 서울시립미술관 옆에 조용히 서 있다.',char_count:94,emotion_keywords_used:['기억','상실']},
   script_60s:{text:'서울 한복판, 종로구에 또 다른 궁궐이 있다. 경희궁. 광해군이 1620년 건립했다. 서궐이라 불렸고, 경복궁과 함께 동궐·서궐로 짝을 이뤘다. 영조·정조를 비롯한 여러 왕이 이곳에서 국정을 봤다. 그런데 일제강점기 때 학교가 들어서며 건물 대부분이 헐렸다. 숭정전 등 일부는 다른 곳으로 옮겨졌다. 지금은 정문인 흥화문과 숭정전 등 일부가 복원돼 있다. 많이 알려지지 않아 조용하게 둘러볼 수 있는 궁궐이다. 옆에 서울역사박물관이 있다.',char_count:258,emotion_keywords_used:['기억','상실']},
   hooks:['조선의 두 번째 궁궐','서궐 — 경복궁의 짝','일제에 헐린 궁궐','가장 조용한 서울 궁궐','종로구 숨겨진 역사'],
   thumbnails:['두 번째 궁궐','서궐의 흔적','일제에 헐린 곳','조용한 궁궐','숭정전'],
   captions:{youtube:'경희궁 | 조선의 서궐 — 일제에 헐렸지만 숭정전이 남은 서울 숨겨진 궁궐. 서울 종로구. #경희궁 #서궐 #조선궁궐',instagram:'서울에 또 다른 궁궐이 있다 🏯 경희궁, 조선의 서궐. 일제강점기에 헐렸지만 아직 여기 있다.',tiktok:'서울 종로구 또 다른 궁궐 알고 있음? 경희궁 #경희궁 #조선궁궐 #역사',xiaohongshu:'庆熙宫 🏯 朝鲜的西阙 | 日占时期被拆毁后复原的宫殿 | 首尔钟路区 #庆熙宫 #朝鲜历史 #韩国旅游'},
   hashtags:{korean:['#한국역사','#역사여행','#서울','#조선역사','#궁궐'],place_specific:['#경희궁','#서궐','#숭정전','#종로구']},
   map_card_intro:'조선의 서궐 — 일제강점기에 헐렸지만 숭정전이 남은 서울의 숨겨진 궁궐'},
  {place_id:'GK-SE-BIS-0002',place_name:'사직단',
   script_30s:{text:'조선 왕이 해마다 토지신과 곡식신에게 제사를 지낸 곳. 500년 동안 풍년과 나라의 안녕을 빌었다. 지금은 공원이 됐지만 사직단은 그 자리에 남아 있다.',char_count:80,emotion_keywords_used:['기억','전통']},
   script_60s:{text:'경복궁 서쪽, 종로구에 조선시대 국가 제례 터가 있다. 사직단. 조선 태조가 1395년 세웠다. 사(社)는 토지신, 직(稷)은 곡식신이다. 왕이 직접 나와 풍년을 빌고 나라의 안녕을 기원하는 중요한 제례 공간이었다. 해방 이후 공원이 됐고, 지금은 사직공원으로 시민들이 산책하는 곳이 됐다. 하지만 제단 건물은 원형이 보존되어 있고, 매년 사직대제가 복원·거행된다. 조선 오례 중 길례의 핵심 공간이다.',char_count:254,emotion_keywords_used:['기억','전통']},
   hooks:['왕이 풍년을 빌던 제단','500년 국가 제례 터','토지신과 곡식신에게 절한 왕','지금은 공원이 된 그곳','사직대제 거행 현장'],
   thumbnails:['풍년을 빌던 제단','국가 제례','왕의 기원처','사직공원의 역사','사직대제'],
   captions:{youtube:'사직단 | 500년 동안 왕이 풍년 빈 국가 제례터 — 지금은 사직공원. 서울 종로구. #사직단 #사직대제 #조선역사',instagram:'경복궁 옆, 왕이 풍년 빌던 그 자리 🏯 사직단. 500년 국가 제례 현장.',tiktok:'왕이 풍년 빌러 오던 사직단 알고 있었음? #사직단 #조선역사 #서울',xiaohongshu:'社稷坛 🏯 500年间朝鲜国王祈愿丰年的国家祭礼场 | 首尔钟路区 #社稷坛 #朝鲜历史 #韩国旅游'},
   hashtags:{korean:['#한국역사','#역사여행','#서울','#조선역사','#국가제례'],place_specific:['#사직단','#사직대제','#사직공원','#종로구']},
   map_card_intro:'왕이 해마다 풍년을 빌던 500년 국가 제례 터'},
  {place_id:'GK-SE-HYO-0001',place_name:'성균관 문묘',
   script_30s:{text:'공자에게 제사 지내는 곳이자 조선 최고 국립대학, 성균관. 지금도 그 자리에 있다. 문묘에는 공자를 비롯한 유교 성현들의 위패가 있다. 서울 한복판 조선시대 캠퍼스다.',char_count:87,emotion_keywords_used:['기억','교육']},
   script_60s:{text:'서울 혜화동, 성균관대학교 안에 조선시대 건물들이 있다. 성균관 문묘다. 성균관은 조선 최고 교육기관. 지금의 국립대학이다. 고려 때 시작됐고, 조선 태조 때 지금의 자리로 옮겼다. 문묘는 공자를 비롯한 유교 성현들에게 제사를 지내는 공간이다. 대성전과 명륜당 등 건물이 잘 보존돼 있다. 지금도 성균관에서 춘·추 석전대제를 지낸다. 사적 제143호. 조선시대 지식인들이 공부하던 그 캠퍼스가 여전히 서울에 있다.',char_count:259,emotion_keywords_used:['기억','교육']},
   hooks:['조선 최고 국립대학이 여기','공자에게 제사 지내는 문묘','대성전과 명륜당의 역사','지금도 석전대제 거행','성균관대 안 조선시대 건물'],
   thumbnails:['조선 국립대학','공자 제례 문묘','대성전','명륜당','석전대제'],
   captions:{youtube:'성균관 문묘 | 조선 최고 국립대학·공자 제례 터 — 지금도 석전대제 거행. 서울 종로구. #성균관 #문묘 #석전대제',instagram:'서울 혜화동 성균관대 안에 조선시대 건물이 있다 🎓 성균관 문묘, 공자에게 제사 지내는 곳.',tiktok:'성균관대 안에 조선시대 건물 있는 거 알았음? #성균관 #문묘 #조선역사',xiaohongshu:'成均馆文庙 🎓 朝鲜最高国立大学兼孔子祭礼场 | 现仍举行释奠大祭 | 首尔钟路区 #成均馆 #文庙 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#서울','#조선역사','#유교'],place_specific:['#성균관','#문묘','#석전대제','#대성전']},
   map_card_intro:'공자에게 제사 지내며 조선 인재를 키운 최고 국립교육기관'},
  {place_id:'GK-SE-GWA-0001',place_name:'환구단',
   script_30s:{text:'1897년, 고종이 황제 즉위식을 거행한 제천단. 하늘에 제사를 지낼 권리는 원래 중국 황제만 있었다. 그 의례를 행함으로써 조선이 대한제국으로 거듭났다.',char_count:85,emotion_keywords_used:['전환','독립','기억']},
   script_60s:{text:'서울 조선호텔 옆, 작은 원형 건물이 서 있다. 황궁우다. 환구단의 일부다. 환구단은 1897년 고종이 황제로 즉위하면서 하늘에 제사를 지내기 위해 만든 제천단이다. 이것이 왜 중요할까. 하늘에 제사를 지낼 수 있는 것은 중국 황제뿐이었다. 조선은 제후국이었기에 그 자격이 없었다. 그런데 고종이 환구단을 세우고 제사를 지냈다. 독립된 황제국, 대한제국을 선포한 것이다. 지금은 황궁우만 남아 있다. 사적 제157호.',char_count:257,emotion_keywords_used:['전환','독립','기억']},
   hooks:['황제만 지낼 수 있는 제천의식','고종이 황제 즉위한 그 자리','대한제국 탄생 현장','중국 황제와 대등해진 순간','조선호텔 옆 숨겨진 역사'],
   thumbnails:['황제 즉위식','제천의식','대한제국 탄생','황궁우 보존','조선호텔 옆'],
   captions:{youtube:'환구단 | 고종이 황제 즉위한 대한제국 탄생 현장 — 황궁우만 남다. 서울 중구. #환구단 #대한제국 #고종',instagram:'서울 조선호텔 옆에 대한제국 탄생 현장이 있다 🏛️ 환구단·황궁우, 고종의 황제 즉위식.',tiktok:'서울 조선호텔 옆에 대한제국 탄생 현장 있음 #환구단 #대한제국 #역사',xiaohongshu:'圜丘坛 🏛️ 高宗皇帝即位式举行地 | 大韩帝国诞生现场 | 首尔中区 #圜丘坛 #大韩帝国 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#서울','#대한제국','#고종'],place_specific:['#환구단','#황궁우','#대한제국','#제천의식']},
   map_card_intro:'고종이 황제로 즉위하며 대한제국을 선포한 제천단'},
  {place_id:'GK-SE-RYU-0003',place_name:'서울 태릉·강릉',
   script_30s:{text:'중종의 두 왕비가 잠든 곳. 문정왕후의 태릉과 명종·인순왕후의 강릉이다. 조선 최고의 여걸로 꼽히는 문정왕후가 이 태릉에 묻혔다. 유네스코 세계유산 조선왕릉.',char_count:88,emotion_keywords_used:['권력','기억']},
   script_60s:{text:'서울 노원구 공릉동에 두 왕릉이 있다. 태릉과 강릉이다. 태릉은 중종의 계비 문정왕후의 능이다. 문정왕후는 명종 시대 20년 가까이 수렴청정하며 실권을 행사한 조선 최강의 여성 권력자다. 승려 보우를 통해 불교를 진흥시키고, 을사사화를 일으켜 반대파를 숙청했다. 강릉은 문정왕후의 아들 명종과 그 왕비 인순왕후의 능이다. 두 능 사이에 육군사관학교가 있어 함께 돌아볼 수 있다. 유네스코 세계유산.',char_count:265,emotion_keywords_used:['권력','기억']},
   hooks:['조선 최강 여성 권력자의 무덤','20년 수렴청정 문정왕후','을사사화를 일으킨 왕비','아들 명종의 능이 바로 옆','유네스코 조선왕릉'],
   thumbnails:['문정왕후의 무덤','조선 최강 권력자','수렴청정 20년','태릉과 강릉','유네스코'],
   captions:{youtube:'서울 태릉·강릉 | 20년 수렴청정 문정왕후와 명종이 잠든 유네스코 조선왕릉. 서울 노원구. #태릉 #강릉 #문정왕후',instagram:'조선 최강 여성 권력자 문정왕후가 잠든 곳 👑 서울 태릉. 유네스코 세계유산.',tiktok:'조선 최강 여성 권력자 문정왕후 여기 있음 #태릉 #문정왕후 #역사',xiaohongshu:'首尔泰陵·康陵 👑 垂帘听政20年的文定王后与明宗长眠之地 | 联合国教科文组织世界遗产 | 首尔芦原区 #泰陵 #文定王后 #朝鲜历史'},
   hashtags:{korean:['#한국역사','#역사여행','#서울','#조선역사','#유네스코'],place_specific:['#태릉','#강릉','#문정왕후','#조선왕릉']},
   map_card_intro:'조선 최강 여성 권력자 문정왕후가 잠든 유네스코 세계유산 왕릉'}
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
console.log('C모드 14차: '+updated+'개 / 누적 '+lib.total+'개');
ids.forEach((id,i)=>console.log('  C+ ['+id+'] '+scripts[i].place_name));
