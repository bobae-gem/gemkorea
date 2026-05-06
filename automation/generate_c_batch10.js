const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const scripts = [
  {place_id:'GK-JN-SNS-0001',place_name:'세방낙조',script_30s:{text:'기상청이 한반도 제일의 낙조 전망지로 선정한 진도의 절경. 크고 작은 섬들이 점점이 박힌 다도해가 노을에 붉게 물드는 장관. 제1·제2 전망대에서 서해 낙조와 다도해를 파노라마로 조망한다. 진도에 이런 곳이 있다.',char_count:103,emotion_keywords_used:['기억']},script_60s:{text:'전라남도 진도. 섬들이 가득한 다도해의 서쪽 끝. 해가 질 무렵 세방낙조 전망대에 올라서면 이해할 수 없을 만큼 아름다운 장면이 펼쳐진다. 크고 작은 섬들이 점점이 박힌 다도해 위로 해가 천천히 가라앉는다. 붉고 주황빛으로 물드는 하늘과 바다. 기상청이 한반도 제일의 낙조 전망지로 선정한 곳이다. 제1·제2 전망대에서 방향을 달리해 파노라마로 조망할 수 있다. 진도 여행에서 놓치면 안 될 풍경이다.',char_count:243,emotion_keywords_used:['기억','생존']},
    hooks:['기상청 선정 한반도 제일 낙조','다도해가 노을에 붉게 물드는 곳','진도에 이런 절경이 있다','서해 낙조 파노라마','섬과 노을이 만나는 그 순간'],thumbnails:['기상청이 선정한 낙조','다도해 노을','진도의 비밀','파노라마 전망','서해 제일 낙조'],
    captions:{youtube:'세방낙조 | 기상청 선정 한반도 제일 낙조 전망지 — 진도 다도해의 석양. 전남 진도군. #세방낙조 #다도해 #진도',instagram:'기상청이 선정한 한반도 제일 낙조 전망지 🌅 진도 세방낙조. 다도해가 노을에 물든다.',tiktok:'기상청이 한반도 제일 낙조라고 선정한 곳 #세방낙조 #진도 #낙조',xiaohongshu:'世方落照 🌅 气象厅评选的韩半岛最美落日观景台 | 珍岛多岛海日落 | 全南珍岛 #世方落照 #韩国自然 #全罗南道'},
    hashtags:{korean:['#자연여행','#낙조','#전남','#진도','#다도해'],place_specific:['#세방낙조','#진도낙조','#한반도낙조']},map_card_intro:'기상청 선정 한반도 제일 낙조 — 다도해가 노을에 물드는 진도의 절경'},
  {place_id:'GK-SE-SAJ-0001',place_name:'봉은사',script_30s:{text:'794년 창건된 서울 강남 대표 사찰. 조선 명종 때 선종 수사찰로 지정되어 크게 중흥했다. 강남 COEX 바로 옆에 있다. 글로벌 비즈니스 지구 한복판에 천년 고찰이 있는 것이다. 서울에서 가장 아이러니한 풍경 중 하나다.',char_count:106,emotion_keywords_used:['기억']},script_60s:{text:'서울 강남구 삼성동, COEX 바로 옆에 사찰이 있다. 794년 원성왕 10년에 창건된 봉은사다. 1000년이 넘은 천년 고찰이다. 조선 명종 때 문정왕후의 후원으로 선종 수사찰로 지정됐다. 조선 불교의 중심이었다. 지금은 강남 한복판 도심 속 사찰로 연간 300만 명이 찾는다. COEX 전시장에서 사람들이 쏟아져 나오다가 봉은사로 들어간다. 1,200년 된 은행나무가 경내에 서 있다. 현대와 전통이, 비즈니스와 수행이 같은 공간에 있는 곳이다.',char_count:272,emotion_keywords_used:['기억','선택']},
    hooks:['COEX 옆 천년 고찰','강남 한복판에 1000년 사찰','현대와 전통이 공존하는 곳','1,200년 된 은행나무가 있다','서울에서 가장 아이러니한 풍경'],thumbnails:['COEX 옆 사찰','강남의 천년','1,200년 은행나무','현대 속 전통','봉은사의 아이러니'],
    captions:{youtube:'봉은사 | COEX 옆 1000년 천년 고찰 — 강남 한복판 도심 사찰. 서울 강남구. #봉은사 #강남 #도심사찰',instagram:'코엑스 바로 옆에 천년 고찰이 있다 🛕 1,200년 된 은행나무도. 강남 봉은사.',tiktok:'코엑스 옆에 1000년 넘은 절 있음 #봉은사 #강남 #역사',xiaohongshu:'奉恩寺 🛕 COEX旁边的千年古刹 | 江南繁华地带中的佛教圣地 | 首尔江南区 #奉恩寺 #韩国历史 #首尔'},
    hashtags:{korean:['#한국역사','#역사여행','#서울','#강남','#불교'],place_specific:['#봉은사','#강남사찰','#도심사찰','#COEX']},map_card_intro:'COEX 옆 천년 고찰 — 강남 한복판 도심 속 1000년 사찰'},
  {place_id:'GK-SE-DOK-0006',place_name:'백범 김구 기념관',script_30s:{text:'김구는 1949년 이 건물에서 암살당했다. 대한민국 임시정부의 마지막 청사, 경교장. 독립 후 통일 정부를 꿈꿨던 그가 마지막으로 머물렀던 곳이다. 총성이 울렸고, 그의 꿈도 멈췄다.',char_count:93,emotion_keywords_used:['희생','기억','선택']},script_60s:{text:'김구는 1896년 치하포에서 일본인을 죽이고 감옥에 갔다. 탈옥했다. 상하이로 망명했다. 27년간 임시정부를 이끌었다. 해방이 됐다. 귀국해서는 통일 정부를 주장했다. 남한 단독 정부를 반대했다. 1949년 6월 26일, 경교장에서 육군 포병 대위 안두희가 쏜 총에 맞았다. 사망했다. 73세였다. 경교장은 임시정부의 마지막 청사이자 그의 암살 현장이다. 지금은 복원 전시관으로 운영된다. 그의 삶이 얼마나 치열했는지 이 건물이 말해준다.',char_count:277,emotion_keywords_used:['희생','기억','선택','저항']},
    hooks:['독립 후 통일 꿈꾸다 암살당한 자리','경교장에서 무슨 일이 있었나','임시정부 마지막 청사의 비밀','김구가 마지막으로 머문 건물','총성이 울린 그날'],thumbnails:['암살의 현장','임시정부 마지막','총성이 울렸다','경교장의 역사','통일의 꿈'],
    captions:{youtube:'백범 김구 기념관 | 임시정부 마지막 청사 경교장 — 독립 후 통일을 꿈꾸다 암살당한 자리. 서울 종로구. #김구 #경교장 #임시정부',instagram:'통일 정부를 꿈꾸다 이 건물에서 암살당했다 🏴 경교장, 백범 김구 기념관.',tiktok:'독립 후 통일 주장하다 암살당한 김구의 마지막 장소 #김구 #경교장 #역사',xiaohongshu:'白凡金九纪念馆 🏴 临时政府最后厅舍 | 追求统一政府后遭暗杀之地 | 首尔鐘路区 #金九 #韩国历史 #首尔'},
    hashtags:{korean:['#한국역사','#독립운동','#서울','#근대역사','#임시정부'],place_specific:['#김구','#경교장','#백범','#안두희']},map_card_intro:'임시정부 마지막 청사 — 통일을 꿈꾸다 암살당한 김구의 현장'},
  {place_id:'GK-SE-DOK-0007',place_name:'윤봉길 의사 기념관',script_30s:{text:'1932년 4월 29일, 상하이 훙커우공원. 윤봉길이 도시락 폭탄을 던졌다. 일본 전승 행사장이었다. 시라카와 대장이 사망했다. 중국이 100만 대군으로 못 한 일을 조선 청년 하나가 해냈다고 중국 신문이 썼다. 그는 24세였다.',char_count:114,emotion_keywords_used:['저항','희생','선택']},script_60s:{text:'1932년 4월 29일, 중국 상하이 훙커우공원. 일본의 전승 기념식이 열리고 있었다. 윤봉길은 도시락 폭탄을 던졌다. 일본군 총사령관 시라카와가 사망했다. 여러 명의 고위 관리들도 부상했다. 그 자리에서 체포됐다. 12월에 총살됐다. 24세였다. 중국의 신문은 썼다. 100만 중국 대군이 못 한 일을 조선 청년 하나가 해냈다. 이 사건으로 중국 국민정부가 대한민국 임시정부를 지원하기 시작했다. 의거 하나가 독립운동의 역사를 바꿨다.',char_count:272,emotion_keywords_used:['저항','희생','선택','기억']},
    hooks:['24세 청년이 역사를 바꿨다','100만 대군이 못 한 일을 했다','훙커우공원 도시락 폭탄 의거','이 사건 후 중국이 임시정부를 지원했다','체포된 뒤 3개월 만에 총살됐다'],thumbnails:['24세의 선택','역사를 바꾼 도시락','100만 대군도 못한 것','중국의 지원이 시작됐다','훙커우공원 그날'],
    captions:{youtube:'윤봉길 의사 기념관 | 24세 청년이 훙커우공원에서 역사를 바꾼 날. 서울 서초구. #윤봉길 #훙커우의거 #독립운동',instagram:'24세가 100만 대군도 못 한 일을 했다 🏴 윤봉길 훙커우공원 의거.',tiktok:'24살이 100만 대군도 못한걸 했다 #윤봉길 #훙커우 #역사',xiaohongshu:'尹奉吉义士纪念馆 🏴 24岁少年改变历史的虹口公园义举 | 首尔서초区 #尹奉吉 #韩国历史 #独立运动'},
    hashtags:{korean:['#한국역사','#독립운동','#일제강점기','#서울','#임시정부'],place_specific:['#윤봉길','#훙커우의거','#도시락폭탄']},map_card_intro:'24세 청년이 100만 대군도 못 한 일을 해낸 날 — 훙커우공원 의거'},
  {place_id:'GK-SE-SAE-0001',place_name:'낙성대 강감찬 유적',script_30s:{text:'1019년, 귀주에서 거란군을 물리쳤다. 고려를 구한 전투였다. 그 강감찬 장군이 태어난 곳이 서울 관악구 낙성대다. 별이 떨어진 곳. 장군이 태어날 때 큰 별이 이 자리에 떨어졌다는 전설이다. 지금도 그 자리에 사당과 삼층석탑이 있다.',char_count:115,emotion_keywords_used:['저항','기억','권력']},script_60s:{text:'고려시대, 거란이 세 번 침략했다. 첫 번째와 두 번째는 물러갔지만, 세 번째는 달랐다. 10만 거란군이 쳐들어왔다. 강감찬이 맞섰다. 귀주에서 거란군 10만 중 살아 돌아간 것이 수천에 불과했다. 귀주대첩이다. 이후 고려는 100년 평화를 유지했다. 강감찬 장군이 태어난 곳이 서울 관악구다. 별이 떨어진 곳이라 해서 낙성대다. 그가 태어날 때 하늘에서 큰 별이 이 자리에 떨어졌다는 전설. 지금도 낙성대공원 안에 사당과 삼층석탑이 남아 장군을 기린다.',char_count:271,emotion_keywords_used:['저항','기억','권력']},
    hooks:['별이 떨어진 곳에서 태어난 장군','10만 거란군 중 수천만 살아남았다','귀주대첩으로 100년 평화를 얻었다','낙성대라는 이름의 유래','서울에 있는 고려 장군의 탄생지'],thumbnails:['별이 떨어진 곳','귀주대첩','100년 평화','낙성대 이름','고려 장군의 자리'],
    captions:{youtube:'낙성대 강감찬 유적 | 귀주대첩으로 고려를 구한 장군의 탄생지 — 별이 떨어진 곳. 서울 관악구. #강감찬 #귀주대첩 #낙성대',instagram:'별이 떨어진 곳에서 고려를 구한 장군이 태어났다 ⭐ 낙성대 강감찬 유적.',tiktok:'10만 거란군을 물리친 강감찬 장군이 태어난 곳 #강감찬 #귀주대첩 #역사',xiaohongshu:'落星垈姜邯赞遗址 ⭐ 高丽救星姜邯赞诞生地 | 龟州大捷让100年和平 | 首尔冠岳区 #姜邯赞 #韩国历史 #首尔'},
    hashtags:{korean:['#한국역사','#역사여행','#서울','#고려역사','#관악구'],place_specific:['#강감찬','#귀주대첩','#낙성대','#고려']},map_card_intro:'별이 떨어진 곳에서 태어난 장군 — 귀주대첩으로 고려를 구한 강감찬의 탄생지'}
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
console.log('C모드 10차: '+updated+'개 / 누적 '+lib.total+'개');
ids.forEach((id,i)=>console.log('  C+ ['+id+'] '+scripts[i].place_name));
