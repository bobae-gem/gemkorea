const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const scripts = [
  {place_id:'GK-GB-SAJ-0010',place_name:'경주 감은사지',
   script_30s:{text:'문무왕이 삼국통일 후 왜구를 막기 위해 짓기 시작한 사찰의 터. 완성 전에 왕이 죽자 아들 신문왕이 완성했다. 용이 된 문무왕이 동해를 지키도록 금당 아래 바닷물이 들어오는 구조를 만들었다.',char_count:87,emotion_keywords_used:['헌신','기억']},
   script_60s:{text:'경북 경주 동해 바닷가에 삼층석탑 두 기가 서 있다. 감은사지다. 문무왕이 삼국통일을 이룬 후 왜구를 막기 위해 이 자리에 절을 짓기 시작했다. 동해에 가장 가까운 사찰이 될 것이었다. 그러나 완성을 보지 못하고 승하했다. 아들 신문왕이 682년 완성했다. 문무왕은 죽어서도 동해를 지키겠다는 유언을 남겼다. 신문왕은 금당 아래에 바닷물이 들어오는 구조를 만들었다. 용이 된 아버지가 출입할 수 있도록. 동·서 삼층석탑(국보)이 현존한다.',char_count:263,emotion_keywords_used:['헌신','기억']},
   hooks:['바닷물이 들어오는 구조의 사찰','용된 왕 위해 설계한 금당','삼국통일 후 왜구 막으려 건립','문무왕 사후 아들이 완성','동해 가장 가까운 신라 사찰'],
   thumbnails:['바닷물 금당 구조','용된 문무왕','삼국통일 후 건립','신문왕 완성','동해 신라 사찰'],
   captions:{youtube:'경주 감은사지 | 용된 문무왕 위해 바닷물 들어오게 한 사찰 터 — 국보 삼층석탑. 경북 경주시. #감은사지 #문무왕 #신라',instagram:'용이 된 아버지 위해 금당 아래 바닷물 들어오게 설계한 절터 🏛️ 경주 감은사지.',tiktok:'용된 왕 출입하게 금당 아래 바닷물 들어오게 만든 절터 경주 감은사지 #감은사지 #문무왕 #신라',xiaohongshu:'庆州感恩寺址 🏛️ 为龙化文武王设计地下进水金堂的寺院遗址 | 国宝三层石塔 | 庆北庆州 #感恩寺址 #文武王 #新罗历史'},
   hashtags:{korean:['#한국역사','#역사여행','#경상북도','#신라역사','#문무왕'],place_specific:['#감은사지','#문무왕','#신문왕','#경주']},
   map_card_intro:'용이 된 문무왕이 출입하도록 금당 아래 바닷물이 드나드는 구조로 만든 사찰 터'},
  {place_id:'GK-GB-SAJ-0011',place_name:'구미 도리사',
   script_30s:{text:'신라 최초의 사찰. 아도화상이 신라에 불교를 전한 곳이다. 5세기 아도화상이 이 땅에서 처음 불법을 편 것이 신라 불교의 시작이었다. 신라 불교의 원점이 구미에 있다.',char_count:74,emotion_keywords_used:['신앙','기억']},
   script_60s:{text:'경북 구미 태조산에 절이 있다. 도리사다. 신라 최초의 사찰이다. 5세기 고구려에서 온 아도화상이 이 땅에 처음 불교를 전했다. 마을 어귀에서 복숭아꽃과 오얏꽃이 피어있는 것을 보고 이곳이 절 자리임을 알았다고 한다. 복숭아 도, 오얏 리, 도리사다. 신라에서 불교가 공인되기 150여 년 전에 이 절이 세워졌다. 신라 불교 공인 역사보다 더 이른 시기의 사찰이다. 아도화상이 심었다는 천년 수령의 나무도 있다.',char_count:260,emotion_keywords_used:['신앙','기억']},
   hooks:['신라 최초 사찰','아도화상이 복숭아꽃 보고 세운 절','불교 공인 150년 전에 세워진 절','구미에 있는 신라 불교의 원점','아도화상의 천년 나무'],
   thumbnails:['신라 최초 사찰','아도화상','복숭아 오얏 꽃','불교 공인 전','천년 나무'],
   captions:{youtube:'구미 도리사 | 신라 최초 사찰 — 아도화상이 불교를 전한 원점. 경북 구미시. #도리사 #아도화상 #신라불교',instagram:'신라에 불교가 처음 전해진 그 절이 구미에 있다 🛕 도리사, 신라 최초 사찰.',tiktok:'신라 불교 공인 150년 전에 세워진 신라 최초 사찰 구미 도리사 #도리사 #아도화상 #신라',xiaohongshu:'龟尾桃李寺 🛕 新罗最初寺院 | 阿道和尚传播佛教的起点 | 庆北龟尾 #桃李寺 #阿道和尚 #新罗佛教'},
   hashtags:{korean:['#한국역사','#역사여행','#경상북도','#신라역사','#불교'],place_specific:['#도리사','#아도화상','#구미','#신라최초사찰']},
   map_card_intro:'아도화상이 신라에 불교를 처음 전한 신라 최초의 사찰 — 불교 공인 150년 전에 세워진 원점'},
  {place_id:'GK-GB-SEO-0001',place_name:'대구 달성토성',
   script_30s:{text:'대구 한복판에 있는 고대 토성. 삼한 시대부터 조선까지 사용된 유서 깊은 곳이다. 임진왜란 때 경상감영이 이곳에 있었다. 지금은 달성공원이 됐지만 1,500년 역사의 토성이다.',char_count:79,emotion_keywords_used:['기억','역사']},
   script_60s:{text:'대구 중심에 토성이 있다. 달성토성이다. 삼한 시대에 쌓은 것으로 추정되는 고대 토성이다. 둘레 약 1.3km. 삼국 시대를 거쳐 고려·조선까지 사용됐다. 임진왜란 때는 경상감영이 이곳에 설치되어 전략 거점으로 활용됐다. 조선 시대에는 대구도호부의 중심이었다. 1905년 일제에 의해 공원이 됐다. 지금은 달성공원으로 대구 시민의 산책 공간이 됐다. 1,500년 역사의 토성이 도심 공원이 된 것이다. 사적 제62호.',char_count:260,emotion_keywords_used:['기억','역사']},
   hooks:['삼한 시대부터 조선까지','임진왜란 경상감영 자리','1500년 역사의 도심 토성','지금은 달성공원','대구 한복판 고대 유적'],
   thumbnails:['삼한 시대 토성','경상감영 자리','1500년 역사','달성공원','대구 도심'],
   captions:{youtube:'대구 달성토성 | 삼한 시대 1500년 역사 토성 — 임진왜란 경상감영 자리. 대구 중구. #달성토성 #달성공원 #대구',instagram:'대구 한복판에 삼한 시대부터 1500년 역사의 토성이 공원이 됐다 🏯 달성토성.',tiktok:'대구 중심에 삼한 시대부터 1500년 역사 토성이 있는 거 알아? 달성토성 #달성토성 #대구 #역사',xiaohongshu:'大邱达城土城 🏯 三韩时代起1500年历史的土城 | 壬辰倭乱庆尚监营所在地 | 大邱中区 #达城土城 #大邱 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#대구','#삼한시대','#임진왜란'],place_specific:['#달성토성','#달성공원','#대구','#경상감영']},
   map_card_intro:'삼한 시대부터 조선까지 1,500년 역사의 도심 토성 — 임진왜란 경상감영 자리'},
  {place_id:'GK-JN-SAE-0005',place_name:'나주 목사내아',
   script_30s:{text:'현존하는 조선 시대 최대 지방관 살림집. 나주목 목사가 살던 안채가 지금도 남아 있다. 400년이 넘은 건물이 지금도 숙박이 가능한 한옥스테이로 운영된다.',char_count:70,emotion_keywords_used:['전통','기억']},
   script_60s:{text:'전남 나주에 조선 시대 지방관의 살림집이 있다. 나주 목사내아다. 나주목 목사, 즉 경상도로 치면 감사에 해당하는 전라도 최고 지방관이 살던 안채다. 현존하는 조선 시대 지방관 살림집 중 가장 크고 오래됐다. 400년이 넘은 건물이다. 지금도 이 건물에서 숙박이 가능하다. 한옥스테이로 운영되고 있다. 조선 시대 목사가 생활하던 그 공간에서 하룻밤을 보내는 경험이다. 국가민속문화재.',char_count:257,emotion_keywords_used:['전통','기억']},
   hooks:['조선 최대 지방관 살림집','400년 된 건물에서 숙박 가능','나주목 목사 안채 현존','한옥스테이로 운영 중','조선 관청 건물에 잠들기'],
   thumbnails:['조선 최대 살림집','400년 건물 숙박','나주목 목사','한옥스테이','관청 건물'],
   captions:{youtube:'나주 목사내아 | 400년 된 조선 최대 지방관 살림집 — 한옥스테이. 전남 나주시. #목사내아 #나주 #한옥스테이',instagram:'400년 된 조선 목사 살림집에서 하룻밤을 잘 수 있다 🏡 나주 목사내아 한옥스테이.',tiktok:'400년 된 조선 지방관 살림집에서 숙박되는 나주 목사내아 #목사내아 #나주 #한옥스테이',xiaohongshu:'罗州牧使内衙 🏡 400年历史的朝鲜最大地方官邸 | 现可入住的韩屋民宿 | 全南罗州 #牧使内衙 #韩屋 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#전라남도','#조선역사','#한옥스테이'],place_specific:['#목사내아','#나주','#한옥스테이','#조선관아']},
   map_card_intro:'400년 된 조선 최대 지방관 살림집 — 한옥스테이로 운영 중인 나주 목사내아'},
  {place_id:'GK-JN-SAJ-0005',place_name:'장흥 보림사',
   script_30s:{text:'신라 구산선문 중 하나인 가지산파의 근본 도량. 860년 창건된 천년 고찰로 철조비로자나불좌상(국보)과 삼층석탑(국보)이 있다. 선종 불교의 첫 씨앗이 뿌려진 곳이다.',char_count:78,emotion_keywords_used:['신앙','기억']},
   script_60s:{text:'전남 장흥 가지산에 절이 있다. 보림사다. 860년 신라 원표가 창건했다. 신라 말 구산선문 중 가지산파의 본사였다. 구산선문이란 선종 불교가 신라에 처음 뿌리내린 아홉 사찰이다. 한국 선종 불교의 시작이라 할 수 있는 가지산파의 중심이 이 절이었다. 경내에 철조비로자나불좌상이 있다. 국보다. 통일신라 철불로는 가장 크고 오래됐다. 삼층석탑도 국보다. 두 국보가 한 절에 있다.',char_count:258,emotion_keywords_used:['신앙','기억']},
   hooks:['한국 선종 불교의 첫 씨앗','구산선문 가지산파 본사','국보 두 개가 있는 사찰','철불 중 가장 크고 오래된','860년 천년 고찰'],
   thumbnails:['선종 불교 원점','가지산파 본사','국보 철불','국보 두 개','860년 창건'],
   captions:{youtube:'장흥 보림사 | 한국 선종 불교 첫 씨앗 — 국보 두 개. 전남 장흥군. #보림사 #가지산파 #선종불교',instagram:'한국 선종 불교가 처음 뿌리내린 절에 국보 두 개가 있다 🛕 장흥 보림사.',tiktok:'한국 선종 불교 시작된 절에 국보 두 개 있는 장흥 보림사 #보림사 #선종불교 #역사',xiaohongshu:'长兴宝林寺 🛕 韩国禅宗佛教发源地 | 两件国宝铁佛与石塔 | 全南长兴 #宝林寺 #禅宗佛教 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#전라남도','#신라역사','#선종불교'],place_specific:['#보림사','#가지산파','#장흥','#구산선문']},
   map_card_intro:'한국 선종 불교의 첫 씨앗이 뿌려진 신라 가지산파 본사 — 국보 두 개가 있는 천년 고찰'}
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
console.log('C모드 36차: '+updated+'개 / 누적 '+lib.total+'개');
ids.forEach((id,i)=>console.log('  C+ ['+id+'] '+scripts[i].place_name));
