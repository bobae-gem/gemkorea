const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const scripts = [
  {place_id:'GK-GG-SAJ-0009',place_name:'이천 영월암',
   script_30s:{text:'이천 설봉산 절벽 위에 세워진 암자. 7세기 창건됐다. 바위 절벽 위에 아슬아슬하게 자리 잡은 모습이 압권이다. 이천 도자기 마을과 함께 이천 여행의 필수 코스다.',char_count:71,emotion_keywords_used:['자연','기억']},
   script_60s:{text:'경기도 이천 설봉산에 암자가 있다. 영월암이다. 7세기 신라 때 창건됐다. 이 암자가 특별한 것은 위치 때문이다. 설봉산 절벽 위에 아슬아슬하게 자리를 잡고 있다. 암벽을 파고 그 위에 건물을 얹은 구조다. 경기도 사찰 중 이런 형태는 드물다. 설봉호가 내려다보이는 경관이 빼어나다. 봄이면 벚꽃이 아름답고 가을 단풍도 유명하다. 이천 도예촌·설봉공원과 함께 이천 여행 코스다.',char_count:253,emotion_keywords_used:['자연','기억']},
   hooks:['절벽 위 아슬아슬한 암자','7세기 신라 창건','설봉호 내려다보는 경관','경기도 보기 드문 절벽 사찰','이천 도예촌과 함께'],
   thumbnails:['절벽 위 암자','7세기 창건','설봉호 경관','절벽 건물 구조','이천 코스'],
   captions:{youtube:'이천 영월암 | 7세기 신라 창건 — 절벽 위 아슬아슬한 암자. 경기 이천시. #영월암 #이천 #설봉산',instagram:'절벽 위에 아슬아슬하게 얹힌 7세기 암자 🏔️ 이천 영월암, 설봉호 경관.',tiktok:'절벽 위에 얹힌 7세기 암자가 경기도 이천에 있음 영월암 #영월암 #이천 #역사',xiaohongshu:'利川迎月庵 🏔️ 7世纪新罗创建的悬崖上岌岌可危的庵子 | 京畿利川 #迎月庵 #薛峰山 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#경기도','#불교','#자연'],place_specific:['#영월암','#이천','#설봉산','#절벽사찰']},
   map_card_intro:'7세기 신라 창건 — 설봉산 절벽 위에 아슬아슬하게 얹힌 이천의 숨겨진 암자'},
  {place_id:'GK-CN-SAJ-0008',place_name:'청양 장곡사',
   script_30s:{text:'850년 신라 때 창건된 충남 천년 고찰. 철불 두 개가 있는 유일한 사찰이다. 상·하 두 대웅전이 나란히 있는 독특한 구조로 유명하다. 국보 두 개를 품고 있다.',char_count:72,emotion_keywords_used:['신앙','기억']},
   script_60s:{text:'충남 청양 칠갑산에 절이 있다. 장곡사다. 850년 신라 문성왕 때 창건됐다. 이 절의 독특한 점이 두 가지다. 첫째, 철불이 두 개 있다. 한 사찰에 철조약사여래좌상(국보)과 철조비로자나불좌상(국보)이 모두 있다. 국내 유일이다. 둘째, 상대웅전과 하대웅전 두 개의 대웅전이 있다. 경사진 지형을 따라 두 법당이 나란히 위치한 독특한 구조다. 국보 두 개를 품은 칠갑산의 고찰이다.',char_count:254,emotion_keywords_used:['신앙','기억']},
   hooks:['철불 두 개 있는 유일한 사찰','국보 두 개 한 절에','두 대웅전 독특한 구조','850년 신라 창건','칠갑산 숨겨진 국보 사찰'],
   thumbnails:['철불 두 개','국보 두 개','두 대웅전','신라 850년','칠갑산 사찰'],
   captions:{youtube:'청양 장곡사 | 철불 두 개·국보 두 개 — 두 대웅전의 독특한 사찰. 충남 청양군. #장곡사 #철불 #국보',instagram:'국보 철불이 두 개나 있는 유일한 절 🛕 청양 장곡사, 두 개의 대웅전.',tiktok:'국보 철불 두 개 있는 절이 한국에 여기밖에 없음 청양 장곡사 #장곡사 #국보 #청양',xiaohongshu:'青阳长谷寺 🛕 韩国唯一拥有两尊铁佛的寺院 | 两件国宝·两座大雄殿 | 忠南青阳 #长谷寺 #铁佛 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#충청남도','#불교','#국보'],place_specific:['#장곡사','#철불','#청양','#칠갑산']},
   map_card_intro:'한국 유일 — 국보 철불 두 개와 두 개의 대웅전이 있는 칠갑산 신라 고찰'},
  {place_id:'GK-JN-SAE-0009',place_name:'담양 면앙정',
   script_30s:{text:'조선 중기 가사 문학의 산실. 면앙정가를 지은 송순이 이 정자에서 제자들을 가르쳤다. 정철·김성원 등이 이 정자를 거쳐 나왔다. 담양 가사 문학관과 함께 문학 기행 코스다.',char_count:78,emotion_keywords_used:['문학','기억']},
   script_60s:{text:'전남 담양에 작은 정자가 있다. 면앙정이다. 조선 중기 문신 면앙 송순이 1533년 낙향해 지은 정자다. 이 정자에서 면앙정가를 지었다. 가사 문학의 대가 정철이 이 정자를 자주 찾아와 배웠다. 정철은 나중에 관동별곡·사미인곡·속미인곡 등 조선 가사 문학의 최고 걸작들을 썼다. 면앙정이 없었다면 정철이 없었을지도 모른다. 담양 소쇄원·식영정 등 가사 문학의 성지들과 함께 문학 기행 코스다.',char_count:262,emotion_keywords_used:['문학','기억']},
   hooks:['정철이 배운 가사 문학의 요람','관동별곡 전에 면앙정이 있었다','1533년 낙향 송순의 정자','담양 문학 기행 코스','면앙정가 탄생지'],
   thumbnails:['정철의 스승 정자','관동별곡 이전','1533년 정자','담양 문학','면앙정가'],
   captions:{youtube:'담양 면앙정 | 정철이 배운 가사 문학의 요람 — 면앙정가 탄생지. 전남 담양군. #면앙정 #송순 #정철',instagram:'관동별곡 정철이 배운 조선 가사 문학의 요람 📜 담양 면앙정.',tiktok:'관동별곡 쓴 정철이 여기서 가사 문학 배웠음 담양 면앙정 #면앙정 #정철 #담양',xiaohongshu:'潭阳俛仰亭 📜 郑澈学习歌辞文学的摇篮 | 《关东别曲》作者的老师宋纯的亭子 | 全南潭阳 #俛仰亭 #郑澈 #韩国文学'},
   hashtags:{korean:['#한국역사','#역사여행','#전라남도','#조선역사','#문학'],place_specific:['#면앙정','#송순','#정철','#담양']},
   map_card_intro:'관동별곡을 쓴 정철이 찾아와 배운 조선 가사 문학의 요람 — 1533년 담양 면앙정'},
  {place_id:'GK-JB-SAJ-0006',place_name:'진안 마이산 탑사',
   script_30s:{text:'말의 귀 모양 두 봉우리 사이에 돌탑들이 가득한 사찰. 조선 말 이갑룡이 혼자 30년에 걸쳐 쌓은 80여 개의 돌탑이다. 마이산은 국가 명승이자 도립공원이다.',char_count:73,emotion_keywords_used:['경이','기억']},
   script_60s:{text:'전북 진안 마이산 사이에 사찰이 있다. 탑사다. 마이산은 말의 귀 모양 두 봉우리다. 그 사이 계곡에 돌탑들이 빼곡히 서 있다. 이 돌탑들은 19세기 말 이갑룡이 혼자 30년에 걸쳐 쌓은 것이다. 80여 개의 돌탑이 중력을 거스르는 것처럼 서 있다. 신기하게도 강한 바람에도 무너지지 않는다. 큰 탑은 15m에 달한다. 이갑룡은 꿈의 계시를 받아 탑을 쌓기 시작했다고 한다. 마이산 국가 명승이자 진안의 상징이다.',char_count:258,emotion_keywords_used:['경이','기억']},
   hooks:['혼자 30년 쌓은 80개 돌탑','바람에도 무너지지 않는 탑','15m 높이 돌탑의 신비','말의 귀 사이 계곡 탑들','꿈의 계시로 시작된 공사'],
   thumbnails:['30년 혼자 쌓은 탑','바람에 안 무너짐','15m 돌탑','말의 귀 계곡','꿈의 계시'],
   captions:{youtube:'진안 마이산 탑사 | 혼자 30년 쌓은 80개 돌탑 — 마이산 명승. 전북 진안군. #탑사 #마이산 #돌탑',instagram:'한 사람이 30년 동안 혼자 쌓은 80개 돌탑이 마이산 사이에 있다 🗼 진안 탑사.',tiktok:'한 명이 30년 동안 혼자 쌓은 80개 돌탑 강풍에도 안 무너짐 마이산 탑사 #탑사 #마이산 #진안',xiaohongshu:'镇安马耳山塔寺 🗼 一人独自30年堆砌的80座石塔 | 强风不倒 | 全北镇安 #塔寺 #马耳山 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#전라북도','#불교','#마이산'],place_specific:['#탑사','#마이산','#진안','#돌탑']},
   map_card_intro:'한 사람이 혼자 30년에 걸쳐 쌓은 80여 개 돌탑 — 강풍에도 무너지지 않는 마이산 탑사'},
  {place_id:'GK-GN-SAE-0004',place_name:'밀양 영남루',
   script_30s:{text:'남한강·진주 촉석루와 함께 조선 3대 누각. 밀양강 절벽 위에 서 있다. 고려 때부터 있었고 조선 순조 때 현재 건물이 세워졌다. 영남대로의 관문 역할을 한 밀양의 상징이다.',char_count:78,emotion_keywords_used:['역사','기억']},
   script_60s:{text:'경남 밀양 강변에 누각이 있다. 영남루다. 조선 3대 누각 중 하나다. 진주 촉석루, 평양 부벽루와 함께 꼽힌다. 고려 때부터 있었고 조선 순조 10년(1844년) 현재 건물이 완성됐다. 밀양강 절벽 위에 웅장하게 서 있다. 영남대로의 관문으로 영남에서 한양으로 가는 길목에 있었다. 큰 누각은 정면 5칸으로 웅장하다. 가을 단풍 때 강변 경관이 특히 아름답다.',char_count:252,emotion_keywords_used:['역사','기억']},
   hooks:['조선 3대 누각 중 하나','밀양강 절벽 위 웅장한 누각','영남대로 관문','고려부터 이어진 역사','순조 때 완성'],
   thumbnails:['3대 누각','밀양강 절벽','영남대로 관문','고려 역사','순조 완성'],
   captions:{youtube:'밀양 영남루 | 조선 3대 누각 — 밀양강 절벽 위 영남대로 관문. 경남 밀양시. #영남루 #밀양 #3대누각',instagram:'조선 3대 누각 중 하나가 밀양강 절벽 위에 서 있다 🏛️ 밀양 영남루.',tiktok:'조선 3대 누각 밀양 영남루 영남대로 관문이었음 #영남루 #밀양 #역사',xiaohongshu:'密阳岭南楼 🏛️ 朝鲜三大楼阁之一 | 密阳江悬崖上的岭南大路关门 | 庆南密阳 #岭南楼 #密阳 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#경상남도','#조선역사','#누각'],place_specific:['#영남루','#밀양','#영남대로','#3대누각']},
   map_card_intro:'진주 촉석루와 함께 꼽히는 조선 3대 누각 — 밀양강 절벽 위 영남대로의 관문'}
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
console.log('C모드 45차: '+updated+'개 / 누적 '+lib.total+'개');
ids.forEach((id,i)=>console.log('  C+ ['+id+'] '+scripts[i].place_name));
