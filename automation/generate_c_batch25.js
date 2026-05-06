const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const scripts = [
  {place_id:'GK-GB-SAE-0004',place_name:'안동 하회마을',
   script_30s:{text:'풍산 류씨 집안이 500년 동안 살아온 마을. 낙동강이 S자로 마을을 감싼다. 류성룡의 고향이다. 하회별신굿탈놀이가 지금도 전해진다. 유네스코 세계유산 한국의 역사마을.',char_count:80,emotion_keywords_used:['전통','기억']},
   script_60s:{text:'경북 안동 낙동강변에 마을이 있다. 하회마을이다. 풍산 류씨 집안의 집성촌이다. 강이 마을을 S자로 감싸 도는 지형이다. 이 마을에서 류성룡이 태어났다. 임진왜란 때 이순신을 천거한 사람이다. 징비록을 쓴 조선 최고의 학자이자 재상이다. 류성룡의 집 충효당과 양진당이 마을에 남아 있다. 하회별신굿탈놀이는 지금도 정기적으로 공연된다. 국가무형유산이다. 2010년 유네스코 세계유산 한국의 역사마을로 등재됐다.',char_count:263,emotion_keywords_used:['전통','기억']},
   hooks:['류성룡이 이순신 천거한 곳','징비록 쓴 학자의 고향','강이 S자로 감싸는 마을','하회탈 원산지','유네스코 역사마을'],
   thumbnails:['류성룡의 고향','징비록','S자 낙동강','하회탈 공연','유네스코'],
   captions:{youtube:'안동 하회마을 | 이순신을 천거한 류성룡의 고향 — 유네스코 세계유산. 경북 안동시. #하회마을 #류성룡 #유네스코',instagram:'이순신을 천거하고 징비록 쓴 류성룡의 고향 🏘️ 안동 하회마을, 유네스코 세계유산.',tiktok:'이순신 천거한 류성룡 고향이 안동 하회마을임 #하회마을 #류성룡 #유네스코',xiaohongshu:'安东河回村 🏘️ 推举李舜臣的柳成龙故乡 | 洛东江S形环绕 | 联合国教科文组织世界遗产 | 庆北安东 #河回村 #柳成龙 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#경상북도','#조선역사','#유네스코'],place_specific:['#하회마을','#류성룡','#안동','#하회별신굿']},
   map_card_intro:'이순신을 천거하고 징비록을 쓴 류성룡의 고향 — 유네스코 세계유산 역사마을'},
  {place_id:'GK-GB-BIS-0001',place_name:'경산 팔공산 갓바위',
   script_30s:{text:'팔공산 관봉 정상에 앉아 있는 신라 시대 석불. 머리 위에 갓처럼 생긴 바위가 있어 갓바위 부처라 불린다. 소원을 한 가지 꼭 들어준다는 전설 때문에 수능 전날이면 수험생 부모들이 줄을 선다.',char_count:87,emotion_keywords_used:['신앙','기원']},
   script_60s:{text:'대구 인근 팔공산 관봉 정상에 석불이 앉아 있다. 갓바위다. 통일신라 638년에 조성된 것으로 알려져 있다. 머리 위에 갓처럼 납작한 돌이 얹혀 있어 갓바위 부처라 불린다. 보물 제431호다. 이 불상이 유명한 이유는 전설 때문이다. 소원을 한 가지 꼭 들어준다는 것이다. 그래서 수능 전날과 합격 발표 시즌이면 부모들이 새벽부터 줄을 선다. 팔공산 정상부까지 올라가야 하는 불편함에도 불구하고 연간 수십만 명이 찾는다.',char_count:267,emotion_keywords_used:['신앙','기원']},
   hooks:['소원 한 가지 꼭 들어주는 불상','수능 전날 부모들이 줄 서는 곳','통일신라 638년 갓 모양 석불','팔공산 정상 보물 석불','합격 기원의 성지'],
   thumbnails:['소원 한 가지','수능 부모들','638년 석불','갓 모양 바위','합격 성지'],
   captions:{youtube:'팔공산 갓바위 | 소원 한 가지 꼭 들어주는 통일신라 석불 — 수능 성지. 경북 경산시. #갓바위 #팔공산 #수능성지',instagram:'소원 한 가지 꼭 들어준다는 갓바위에 수능 전날 줄 선다 🙏 팔공산 갓바위.',tiktok:'수능 전날 부모들이 줄 서는 그 석불 팔공산 갓바위 #갓바위 #팔공산 #수능',xiaohongshu:'八公山笠岩 🙏 通一新罗638年石佛 | 据说能实现一个愿望 | 高考前家长们排队朝拜 | 庆北庆山 #笠岩 #八公山 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#경상북도','#신라역사','#불교'],place_specific:['#갓바위','#팔공산','#수능성지','#경산']},
   map_card_intro:'소원을 한 가지 꼭 들어준다는 전설의 통일신라 석불 — 수능 성지 팔공산 갓바위'},
  {place_id:'GK-GB-GOB-0002',place_name:'경주 남산',
   script_30s:{text:'1000년 신라의 노천 박물관. 경주 남산 곳곳에 석불과 마애불, 탑이 숨어 있다. 신라 사람들이 이 산 전체를 성지로 여겼다. 유네스코 세계유산 경주 역사유적지구.',char_count:77,emotion_keywords_used:['신앙','기억']},
   script_60s:{text:'경주에 야외 박물관이 있다. 경주 남산이다. 삼릉·용장사지·탑골 등 계곡마다 석불과 마애불, 석탑이 있다. 신라 사람들에게 이 산은 신성한 공간이었다. 석불이 30기, 마애불이 60기 이상, 석탑이 100기 이상이 산 곳곳에 있다. 설화에 따르면 신라를 세운 박혁거세가 이 산에서 탄생했다. 남산 곳곳을 걸으면 신라 1000년의 불교 문화가 곳곳에서 나타난다. 유네스코 세계유산.',char_count:260,emotion_keywords_used:['신앙','기억']},
   hooks:['신라의 노천 박물관','석불 30기 마애불 60기 이상','박혁거세 탄생 설화의 산','경주를 걷는 또 다른 방법','유네스코 세계유산 산 전체'],
   thumbnails:['노천 박물관','마애불 60기','박혁거세 탄생','신라의 성산','유네스코'],
   captions:{youtube:'경주 남산 | 석불 30기·마애불 60기 — 신라의 노천 박물관. 경북 경주시. #경주남산 #신라 #유네스코',instagram:'경주 남산 전체가 신라 1000년의 박물관이다 🗿 마애불 60기 이상.',tiktok:'경주 남산이 야외 박물관인 거 알았음? 마애불 60기 이상 #경주남산 #신라 #역사',xiaohongshu:'庆州南山 🗿 新罗1000年的露天博物馆 | 摩崖佛60余座·石佛30座 | 联合国教科文组织 | 庆北庆州 #庆州南山 #新罗历史'},
   hashtags:{korean:['#한국역사','#역사여행','#경상북도','#신라역사','#유네스코'],place_specific:['#경주남산','#신라','#마애불','#경주']},
   map_card_intro:'신라의 노천 박물관 — 계곡마다 석불·마애불·석탑이 숨어 있는 유네스코 세계유산'},
  {place_id:'GK-GB-SAJ-0007',place_name:'포항 보경사',
   script_30s:{text:'602년 창건된 내연산 계곡의 고찰. 절 뒤로 내연산 12폭포가 이어진다. 보물 원진국사비와 적광전이 있는 문화유산의 보고다. 폭포 트레킹의 시작점이기도 하다.',char_count:77,emotion_keywords_used:['자연','기억']},
   script_60s:{text:'경북 포항 내연산 계곡에 절이 있다. 보경사다. 602년 신라 진평왕 때 지명법사가 창건했다는 전설이 있다. 경내에 보물 원진국사비와 보물 적광전이 있다. 이 절 뒤로 내연산 12폭포 트레킹 코스가 시작된다. 연산폭포·삼보폭포·관음폭포 등 12개의 크고 작은 폭포가 계곡을 따라 이어진다. 계곡미가 빼어나고 단풍이 아름다워 가을이면 특히 많은 탐방객이 찾는다. 수도권에서 먼 거리에도 불구하고 포항의 자랑이다.',char_count:261,emotion_keywords_used:['자연','기억']},
   hooks:['내연산 12폭포 트레킹 시작점','602년 신라 창건 천년 고찰','보물 두 개가 있는 사찰','계곡과 폭포가 어우러진 절','포항의 숨겨진 보물'],
   thumbnails:['12폭포 시작점','602년 창건','보물 적광전','계곡 폭포','포항 보물'],
   captions:{youtube:'포항 보경사 | 내연산 12폭포 트레킹 시작점 — 602년 창건 보물 고찰. 경북 포항시. #보경사 #내연산 #포항',instagram:'내연산 12폭포 트레킹이 이 절에서 시작된다 ⛰️ 포항 보경사.',tiktok:'내연산 12폭포 트레킹 시작이 602년 고찰 보경사임 #보경사 #내연산 #포항',xiaohongshu:'浦项宝鏡寺 ⛰️ 内延山12瀑布徒步起点 | 602年创建千年古刹 | 庆北浦项 #宝鏡寺 #内延山 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#경상북도','#불교','#트레킹'],place_specific:['#보경사','#내연산','#포항','#12폭포']},
   map_card_intro:'내연산 12폭포 트레킹의 시작점 — 602년 창건 보물 두 개가 있는 포항 천년 고찰'},
  {place_id:'GK-JJ-SAE-0001',place_name:'제주 관덕정',
   script_30s:{text:'1448년 세종 때 지어진 제주에서 가장 오래된 건물. 제주 목사들이 군사 훈련을 지휘하던 누각이다. 4·3 사건의 발화점이 된 역사의 현장이기도 하다. 보물 제322호.',char_count:79,emotion_keywords_used:['기억','역사']},
   script_60s:{text:'제주시 한복판에 조선 시대 건물이 서 있다. 관덕정이다. 1448년 세종 30년에 세워졌다. 제주에 현존하는 건물 중 가장 오래됐다. 관덕이란 활을 쏘며 덕을 관찰한다는 뜻이다. 제주 목사들이 병사를 훈련시키던 군사 시설이었다. 그런데 이 건물 앞 광장에서 1947년 3·1절 기념식이 열렸고, 경찰의 발포로 6명이 사망했다. 이 사건이 제주 4·3의 도화선이 됐다. 보물 제322호.',char_count:260,emotion_keywords_used:['기억','역사']},
   hooks:['제주에서 가장 오래된 건물','1448년 세종이 지었다','4.3의 도화선이 된 그 광장','제주 목사의 군사 훈련터','보물 관덕정'],
   thumbnails:['제주 최고 건물','1448년','4.3 도화선','목사 훈련터','보물 322호'],
   captions:{youtube:'제주 관덕정 | 1448년 세종 창건 제주 최고 건물 — 4·3의 도화선. 제주시. #관덕정 #제주4.3 #세종',instagram:'제주에서 가장 오래된 건물 앞에서 4.3이 시작됐다 🏛️ 관덕정.',tiktok:'제주 4.3 도화선이 된 광장 옆 건물이 1448년 건물임 #관덕정 #제주4.3 #역사',xiaohongshu:'济州观德亭 🏛️ 1448年世宗建造的济州最古老建筑 | 4.3事件导火索广场 | 济州市 #观德亭 #济州4.3 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#제주','#제주4.3','#조선역사'],place_specific:['#관덕정','#제주4.3','#제주','#세종']},
   map_card_intro:'1448년 세종이 지은 제주 최고 건물 — 제주 4·3의 도화선이 된 그 광장'}
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
console.log('C모드 25차: '+updated+'개 / 누적 '+lib.total+'개');
ids.forEach((id,i)=>console.log('  C+ ['+id+'] '+scripts[i].place_name));
