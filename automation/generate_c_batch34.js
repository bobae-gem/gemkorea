const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const scripts = [
  {place_id:'GK-JN-SAJ-0004',place_name:'광양 옥룡사지',
   script_30s:{text:'도선국사가 창건한 고찰의 터. 도선국사는 풍수지리를 집대성한 신라의 고승이다. 그가 이 절에서 입적했다. 지금은 터만 남아 있고, 봄이면 동백꽃이 가득 피어난다.',char_count:74,emotion_keywords_used:['기억','자연']},
   script_60s:{text:'전남 광양 백운산 기슭에 절터가 있다. 옥룡사지다. 신라 말 도선국사가 창건한 옥룡사 터다. 도선국사는 한국 풍수지리를 집대성한 고승이다. 이 절에서 오랫동안 머물며 제자를 가르쳤고, 898년 이 절에서 입적했다. 고려 태조 왕건도 도선국사의 가르침에 큰 영향을 받았다. 지금은 절은 없고 터만 남아 있다. 봄이면 경내에 동백나무 숲에 꽃이 가득 피어 아름다운 명소가 된다.',char_count:257,emotion_keywords_used:['기억','자연']},
   hooks:['풍수지리 대가 도선국사의 절터','도선국사가 입적한 현장','왕건에게 영향 준 고승의 사찰','봄 동백꽃 가득 피는 절터','백운산 기슭 숨겨진 역사'],
   thumbnails:['풍수 대가의 절터','도선국사 입적지','왕건 영향 준 곳','봄 동백꽃','백운산 절터'],
   captions:{youtube:'광양 옥룡사지 | 풍수지리 도선국사 입적지 — 봄 동백꽃 절터. 전남 광양시. #옥룡사지 #도선국사 #풍수지리',instagram:'한국 풍수지리 대가 도선국사가 입적한 절터 🌺 광양 옥룡사지, 봄 동백꽃.',tiktok:'한국 풍수지리 집대성한 도선국사 입적한 절터가 광양에 있음 #옥룡사지 #도선국사 #역사',xiaohongshu:'光阳玉龙寺址 🌺 韩国风水学集大成者道诜国师圆寂之地 | 春日山茶花盛开的寺院遗址 | 全南光阳 #玉龙寺址 #道诜国师 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#전라남도','#신라역사','#도선국사'],place_specific:['#옥룡사지','#도선국사','#광양','#동백꽃']},
   map_card_intro:'한국 풍수지리를 집대성한 도선국사가 입적한 절터 — 봄이면 동백꽃이 가득'},
  {place_id:'GK-GB-SAJ-0009',place_name:'봉화 청량산 청량사',
   script_30s:{text:'퇴계 이황이 사랑한 산에 있는 절. 청량산은 기암괴석과 폭포가 절경이다. 퇴계는 이 산을 사랑해 청량산가를 지었다. 청량사에는 유리보전이라는 보물급 건물이 있다.',char_count:74,emotion_keywords_used:['자연','학문']},
   script_60s:{text:'경북 봉화 청량산에 절이 있다. 청량사다. 663년 원효대사가 창건했다. 청량산은 기암괴석과 폭포가 어우러진 명산이다. 퇴계 이황이 이 산을 사랑해 청량산가라는 시를 지었다. 어린 시절부터 이 산을 드나들며 공부했다. 절 경내에 유리보전이라는 건물이 있다. 보물로 지정된 조선 시대 건물이다. 청량산 자연환경과 어우러진 경관이 빼어나다. 퇴계와 함께하는 봉화 여행의 필수 코스다.',char_count:257,emotion_keywords_used:['자연','학문']},
   hooks:['퇴계 이황이 사랑한 산의 절','청량산가를 지은 성리학자','663년 원효대사 창건','보물 유리보전','기암괴석 절경 속 고찰'],
   thumbnails:['퇴계의 사랑한 산','청량산가','원효대사 창건','보물 유리보전','청량산 절경'],
   captions:{youtube:'봉화 청량사 | 퇴계 이황이 사랑해 시 지은 청량산 — 원효대사 창건. 경북 봉화군. #청량사 #청량산 #퇴계이황',instagram:'퇴계 이황이 사랑해 청량산가를 지은 산의 절 🏔️ 봉화 청량사.',tiktok:'퇴계 이황이 어릴 때부터 드나들며 시 쓴 봉화 청량산 청량사 #청량사 #퇴계이황 #역사',xiaohongshu:'奉化清凉山清凉寺 🏔️ 退溪李滉挚爱之山的寺院 | 元晓大师663年创建 | 庆北奉化 #清凉寺 #退溪 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#경상북도','#불교','#퇴계이황'],place_specific:['#청량사','#청량산','#봉화','#퇴계이황']},
   map_card_intro:'퇴계 이황이 청량산가를 지을 만큼 사랑한 산의 원효대사 창건 고찰'},
  {place_id:'GK-GG-SAE-0002',place_name:'남양주 다산 정약용 유적',
   script_30s:{text:'조선 최고의 실학자 정약용이 태어난 곳. 그리고 18년 유배에서 풀려나 돌아와 죽을 때까지 살던 곳. 다산이 목민심서·경세유표를 쓴 현장이 남양주에 있다.',char_count:77,emotion_keywords_used:['학문','기억']},
   script_60s:{text:'경기도 남양주에 정약용의 유적이 있다. 다산 정약용. 조선 최고의 실학자다. 1762년 이 마을에서 태어났다. 정조의 총애를 받아 수원화성 설계에 참여했다. 그러나 천주교 관련 혐의로 1801년 유배됐다. 전남 강진에서 18년을 유배 생활했다. 그 기간에 500여 권의 책을 썼다. 목민심서, 경세유표, 흠흠신서. 1818년 유배에서 풀려 고향에 돌아왔다. 고향 남양주에서 75세로 사망했다. 생가와 묘소가 남아 있다.',char_count:263,emotion_keywords_used:['학문','기억']},
   hooks:['조선 최고 실학자의 생가','18년 유배에서 500권 쓴 학자','목민심서 경세유표의 저자','수원화성 설계에 참여','고향에서 75세로 사망'],
   thumbnails:['정약용 생가','18년 유배','500권 저술','목민심서','수원화성 설계'],
   captions:{youtube:'남양주 다산 정약용 유적 | 18년 유배에 500권 쓴 조선 최고 실학자 탄생지. 경기 남양주시. #정약용 #다산 #목민심서',instagram:'18년 유배에서 500권 쓴 조선 최고 실학자 정약용이 태어난 곳 📚 남양주.',tiktok:'18년 유배 중에 책 500권 쓴 정약용 고향이 경기도 남양주임 #정약용 #다산 #역사',xiaohongshu:'南杨州丁若镛遗址 📚 朝鲜最伟大实学家的出生地 | 18年流配中著书500余册 | 京畿道南杨州 #丁若镛 #牧民心书 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#경기도','#조선역사','#정약용'],place_specific:['#정약용','#다산','#남양주','#목민심서']},
   map_card_intro:'18년 유배에서 500권을 저술한 조선 최고 실학자 정약용의 생가와 묘소'},
  {place_id:'GK-GG-SAJ-0004',place_name:'여주 고달사지',
   script_30s:{text:'고려 시대 국찰의 터. 고달사는 고려 왕실이 특별히 보호한 최고 사찰이었다. 지금은 원종대사탑과 대형 석조 유물들이 남아 있어 국보·보물이 즐비한 숨겨진 유적지다.',char_count:77,emotion_keywords_used:['기억','발견']},
   script_60s:{text:'경기도 여주 봉미산 기슭에 절터가 있다. 고달사지다. 고달사는 고려 시대 왕실의 특별한 보호를 받은 국찰이었다. 절이 번성했을 때는 수천 명의 승려가 머물렀다고 한다. 지금은 절은 없고 터만 남아 있다. 그런데 이 터에 국보급 유물들이 가득하다. 원종대사탑비(국보), 승탑(국보), 석불좌상(보물) 등 고려 석조 예술의 정수가 이 절터에 있다. 잘 알려지지 않은 숨겨진 유적지다. 사적 제382호.',char_count:259,emotion_keywords_used:['기억','발견']},
   hooks:['고려 최고 국찰의 터','국보 두 개가 있는 절터','수천 명이 머문 대사찰','잘 알려지지 않은 국보 유적','고려 석조 예술의 보고'],
   thumbnails:['고려 국찰 터','국보 두 개','수천 명 대사찰','숨겨진 국보','고려 석조'],
   captions:{youtube:'여주 고달사지 | 고려 최고 국찰 터 — 국보 두 개가 있는 숨겨진 유적. 경기 여주시. #고달사지 #고달사 #여주',instagram:'고려 최고 국찰 터에 국보가 두 개 있는데 아무도 모른다 🗿 여주 고달사지.',tiktok:'고려 왕실 최고 사찰 터에 국보 두 개 있는 숨겨진 유적 고달사지 #고달사지 #여주 #역사',xiaohongshu:'骊州高达寺址 🗿 高丽最高国刹遗址 | 两件国宝文物 | 隐藏的高丽石刻艺术宝库 | 京畿骊州 #高达寺址 #高丽历史 #韩国国宝'},
   hashtags:{korean:['#한국역사','#역사여행','#경기도','#고려역사','#국보'],place_specific:['#고달사지','#고달사','#여주','#국보']},
   map_card_intro:'고려 왕실 국찰 터 — 국보 원종대사탑비·승탑이 있는 숨겨진 석조 예술 보고'},
  {place_id:'GK-GG-SAE-0003',place_name:'용인 한국민속촌',
   script_30s:{text:'조선 시대 생활을 재현한 국내 최대 민속 테마파크. 240여 채의 전통 가옥과 장인 공방이 있다. 줄타기·마상무예·사물놀이 공연이 매일 열린다. 드라마 촬영지로도 유명하다.',char_count:76,emotion_keywords_used:['전통','체험']},
   script_60s:{text:'경기도 용인에 조선 시대 마을이 있다. 한국민속촌이다. 실제 조선 시대 가옥을 이전·복원해 조성한 야외 박물관이다. 240여 채의 전통 가옥이 지역별로 배치되어 있다. 초가집·기와집·대장간·탁주집까지 조선의 일상이 펼쳐진다. 매일 줄타기·마상무예·사물놀이 공연이 열린다. 전통 놀이 체험도 할 수 있다. 많은 사극 드라마의 촬영지이기도 하다. 외국인 관광객에게도 인기가 높다.',char_count:252,emotion_keywords_used:['전통','체험']},
   hooks:['240채 조선 가옥 야외 박물관','줄타기·마상무예 매일 공연','조선 일상이 그대로 재현','사극 드라마 단골 촬영지','외국인 관광객 인기 1위'],
   thumbnails:['240채 조선 가옥','매일 공연','조선 일상','사극 촬영지','전통 체험'],
   captions:{youtube:'용인 한국민속촌 | 240채 조선 가옥 야외 박물관 — 마상무예·줄타기. 경기 용인시. #한국민속촌 #용인 #전통문화',instagram:'조선 시대가 그대로 재현된 240채 가옥 야외 박물관 🏘️ 한국민속촌.',tiktok:'조선 시대 마을이 통째로 재현된 용인 한국민속촌 #한국민속촌 #용인 #조선',xiaohongshu:'龙仁韩国民俗村 🏘️ 240座朝鲜传统房屋的露天博物馆 | 每日举行马上武艺·走绳表演 | 京畿龙仁 #韩国民俗村 #朝鲜文化 #韩国旅游'},
   hashtags:{korean:['#여행','#역사여행','#경기도','#전통문화','#체험'],place_specific:['#한국민속촌','#용인','#전통공연','#조선시대']},
   map_card_intro:'240여 채 전통 가옥에 마상무예·줄타기 공연이 매일 열리는 조선 일상 야외 박물관'}
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
console.log('C모드 34차: '+updated+'개 / 누적 '+lib.total+'개');
ids.forEach((id,i)=>console.log('  C+ ['+id+'] '+scripts[i].place_name));
