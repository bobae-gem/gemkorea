const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const scripts = [
  {place_id:'GK-SE-DOK-0008',place_name:'경교장',
   script_30s:{text:'김구 선생이 머물다 암살당한 역사 현장. 1949년 6월 26일 이곳에서 안두희의 총탄에 쓰러졌다. 대한민국 임시정부의 마지막 청사이자 독립운동의 성지다. 사적 제465호.',char_count:75,emotion_keywords_used:['희생','기억']},
   script_60s:{text:'서울 강북삼성병원 안에 오래된 건물이 있다. 경교장이다. 해방 후 김구 선생이 임시정부의 마지막 청사로 사용하던 곳이다. 대한민국의 독립을 위해 평생을 바친 그가 이 건물 2층에서 집무하고 생활했다. 1949년 6월 26일, 육군 소위 안두희가 이 건물에 찾아와 김구 선생에게 총을 쐈다. 선생은 이 자리에서 서거했다. 74세였다. 지금은 역사관으로 복원되어 암살 현장과 당시 유품을 볼 수 있다.',char_count:263,emotion_keywords_used:['희생','기억']},
   hooks:['김구가 암살된 역사 현장','1949년 6월 26일 그 날','임시정부 마지막 청사','안두희의 총탄이 날아온 곳','독립운동의 성지'],
   thumbnails:['김구 암살 현장','1949년 그 날','임시정부 청사','안두희 총탄','독립 성지'],
   captions:{youtube:'경교장 | 김구 선생 암살 현장 — 임시정부 마지막 청사. 서울 종로구. #경교장 #김구 #독립운동',instagram:'1949년 6월 26일 김구 선생이 암살된 그 방이 여기 있다 🏛️ 경교장.',tiktok:'김구 선생 암살된 경교장 서울 강북삼성병원 안에 있음 #경교장 #김구 #역사',xiaohongshu:'京橋庄 🏛️ 金九先生遇刺现场 | 临时政府最后办公地 | 首尔钟路区 #京橋庄 #金九 #韩国独立运动'},
   hashtags:{korean:['#한국역사','#역사여행','#서울','#독립운동','#김구'],place_specific:['#경교장','#김구','#임시정부','#종로구']},
   map_card_intro:'독립운동의 거인 김구 선생이 1949년 암살된 임시정부 마지막 청사'},
  {place_id:'GK-SE-DOK-0009',place_name:'효창공원',
   script_30s:{text:'독립운동가들이 잠든 서울 도심의 공원. 이봉창·윤봉길·백정기 세 의사와 임시정부 요인들이 안장됐다. 김구 선생도 이곳에 잠들어 있다. 독립운동의 성지다.',char_count:73,emotion_keywords_used:['희생','기억']},
   script_60s:{text:'서울 용산구에 공원이 있다. 효창공원이다. 원래 조선 왕실의 능이 있던 곳이다. 해방 후 김구 선생이 일본에 의해 중국에서 순국한 독립운동가들의 유해를 이곳으로 모셨다. 이봉창, 윤봉길, 백정기 세 의사가 이곳에 안장됐다. 안중근의 가묘도 있다. 임시정부 요인들도 여기 잠들어 있다. 그리고 김구 선생 자신도 1949년 암살 후 이곳에 안장됐다. 독립운동가들이 한자리에 모인 성지다. 효창운동장도 이 공원 안에 있다.',char_count:260,emotion_keywords_used:['희생','기억']},
   hooks:['이봉창 윤봉길 백정기가 잠든 곳','안중근 가묘도 있다','김구도 이곳에 잠들었다','독립운동가들의 성지','서울 도심 독립 성지'],
   thumbnails:['세 의사 안장','안중근 가묘','김구 묘소','독립운동 성지','서울 도심'],
   captions:{youtube:'효창공원 | 이봉창·윤봉길·안중근·김구가 잠든 독립운동 성지. 서울 용산구. #효창공원 #윤봉길 #김구',instagram:'이봉창·윤봉길·백정기·김구가 이 공원에 잠들어 있다 🌸 서울 효창공원.',tiktok:'이봉창 윤봉길 안중근 김구 다 여기 잠들어 있는 효창공원 #효창공원 #독립운동 #역사',xiaohongshu:'孝昌公园 🌸 李奉昌·尹奉吉·金九长眠之地 | 独立运动圣地 | 首尔龙山区 #孝昌公园 #윤봉길 #韩国独立运动'},
   hashtags:{korean:['#한국역사','#역사여행','#서울','#독립운동','#김구'],place_specific:['#효창공원','#윤봉길','#이봉창','#김구']},
   map_card_intro:'이봉창·윤봉길·김구가 잠든 독립운동가들의 성지 — 서울 도심 효창공원'},
  {place_id:'GK-CN-SAJ-0003',place_name:'논산 관촉사 은진미륵',
   script_30s:{text:'고려 광종 때 만든 높이 18m 석조미륵. 한국에서 가장 큰 석불이다. 무려 37년이 걸렸다. 균형 잡힌 비례보다는 거대함 자체가 목적인 독특한 형식의 고려 불교 조각.',char_count:79,emotion_keywords_used:['경이','기억']},
   script_60s:{text:'충남 논산에 거대한 석불이 있다. 관촉사 은진미륵이다. 높이 18.12m. 한국에서 가장 큰 석조 불상이다. 968년 고려 광종 때 만들기 시작해 1006년에 완성했다. 무려 37년이 걸렸다. 전설에 따르면 돌이 땅에서 솟아올라 이 석불을 만들게 됐다고 한다. 이 불상이 특이한 것은 형식이다. 거대한 원통형 몸체, 작은 얼굴, 커다란 보관. 균형 잡힌 비례가 아니다. 하지만 그 거대함이 미륵의 위엄을 표현한다. 국보. 논산의 상징이다.',char_count:264,emotion_keywords_used:['경이','기억']},
   hooks:['한국 최대 석조불 18m','37년 걸려 만든 고려 석불','돌이 땅에서 솟았다는 전설','비례보다 거대함이 목적','국보 논산의 상징'],
   thumbnails:['한국 최대 석불','37년 걸려','솟아오른 전설','거대함의 위엄','국보 18m'],
   captions:{youtube:'논산 관촉사 은진미륵 | 한국 최대 18m 석조불 — 37년 걸린 고려 국보. 충남 논산시. #은진미륵 #관촉사 #논산',instagram:'한국에서 가장 큰 석조불 18m — 37년 걸려 만든 고려 국보 🗿 논산 은진미륵.',tiktok:'한국 최대 석불 18m짜리 37년 걸려 만든 고려 국보 논산 은진미륵 #은진미륵 #고려 #역사',xiaohongshu:'论山灌烛寺恩津弥勒 🗿 韩国最大石佛18m | 耗时37年建造的高丽国宝 | 忠南论山 #恩津弥勒 #高丽历史 #韩国国宝'},
   hashtags:{korean:['#한국역사','#역사여행','#충청남도','#고려역사','#불교'],place_specific:['#은진미륵','#관촉사','#논산','#국보']},
   map_card_intro:'37년에 걸쳐 완성한 한국 최대 18m 석조 미륵불 — 논산의 상징 국보'},
  {place_id:'GK-CN-JEN-0002',place_name:'부여 백마강 낙화암',
   script_30s:{text:'백제의 마지막 순간. 낙화암은 부소산성 절벽이다. 3,000 궁녀가 이 절벽에서 뛰어내렸다는 전설의 현장이다. 백마강 위에서 보면 아름다운 절벽이 더욱 아름답다.',char_count:74,emotion_keywords_used:['희생','기억']},
   script_60s:{text:'충남 부여 백마강변에 절벽이 있다. 낙화암이다. 부소산성 서쪽 절벽이다. 660년 나당연합군이 백제 사비성을 공격했다. 전설에 따르면 3,000명의 궁녀가 이 절벽에서 백마강으로 뛰어내렸다. 꽃처럼 떨어졌다 하여 낙화암이다. 역사 기록에는 없는 전설이지만 백제 멸망의 비극을 상징하는 이야기로 전해진다. 절벽 위에서 내려다보는 백마강 경관이 아름답다. 배를 타고 강 위에서 올려다보면 더 장관이다. 부소산성 내에 있다.',char_count:264,emotion_keywords_used:['희생','기억']},
   hooks:['3000 궁녀 전설의 절벽','백마강 위 아름다운 절벽','배에서 올려다보는 낙화암','백제 멸망의 상징','부소산성 서쪽 절벽'],
   thumbnails:['3000 궁녀 전설','백마강 절벽','배에서 올려다봄','백제 멸망','낙화암 경관'],
   captions:{youtube:'부여 낙화암 | 3000 궁녀 전설의 백마강 절벽 — 백제 멸망의 상징. 충남 부여군. #낙화암 #백마강 #백제',instagram:'3000 궁녀가 이 절벽에서 뛰어내렸다는 백마강 낙화암 🌊 부여.',tiktok:'3000 궁녀 전설 백제 멸망 현장 부여 낙화암 실제로 이런 절벽임 #낙화암 #백제 #역사',xiaohongshu:'扶余白马江落花岩 🌊 3000宫女传说中的白马江悬崖 | 百济灭亡的象征 | 忠南扶余 #落花岩 #白马江 #百济历史'},
   hashtags:{korean:['#한국역사','#역사여행','#충청남도','#백제역사','#전설'],place_specific:['#낙화암','#백마강','#부여','#백제']},
   map_card_intro:'3,000 궁녀 전설이 깃든 백마강 절벽 — 백제 멸망의 비극이 서린 낙화암'},
  {place_id:'GK-JN-SAE-0004',place_name:'해남 윤선도 유적 (녹우당)',
   script_30s:{text:'조선 최고의 시인 윤선도가 살던 집. 어부사시사를 지은 그가 이 집에서 문학의 거봉이 됐다. 500년 역사의 녹우당과 은행나무가 지금도 서 있다. 고산 윤선도의 집이다.',char_count:76,emotion_keywords_used:['전통','문학']},
   script_60s:{text:'전남 해남에 조선 시대 고택이 있다. 녹우당이다. 고산 윤선도의 집이다. 윤선도는 조선 최고의 시인이다. 어부사시사, 오우가 등을 지었다. 이 집에서 평생 창작 활동을 했다. 정치에 관여해 여러 차례 유배도 당했다. 녹우당은 비올 때 빗소리가 녹우처럼 아름답다는 뜻이다. 약 500년 된 은행나무가 고택 앞에 서 있다. 고택 주변에 고산 윤선도 유물전시관이 있다. 전남 기념물 제135호.',char_count:259,emotion_keywords_used:['전통','문학']},
   hooks:['어부사시사 지은 시인의 집','조선 최고 시인 고산 윤선도','500년 된 은행나무 고택','녹우처럼 아름다운 빗소리','해남에 있는 조선 문학 성지'],
   thumbnails:['시인 윤선도 집','어부사시사','500년 은행나무','녹우당 고택','문학 성지'],
   captions:{youtube:'해남 녹우당 | 어부사시사 지은 조선 최고 시인 윤선도의 집. 전남 해남군. #녹우당 #윤선도 #어부사시사',instagram:'어부사시사 쓴 조선 최고 시인 집 앞에 500년 된 은행나무가 있다 🌿 해남 녹우당.',tiktok:'어부사시사 지은 조선 최고 시인 윤선도 집이 해남에 있음 #녹우당 #윤선도 #역사',xiaohongshu:'海南绿雨堂 🌿 朝鲜最伟大诗人尹善道的故居 | 500年银杏树与古宅 | 全南海南 #绿雨堂 #尹善道 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#전라남도','#조선역사','#문학'],place_specific:['#녹우당','#윤선도','#해남','#어부사시사']},
   map_card_intro:'어부사시사를 지은 조선 최고 시인 윤선도의 고택 — 500년 은행나무가 있는 녹우당'}
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
console.log('C모드 32차: '+updated+'개 / 누적 '+lib.total+'개');
ids.forEach((id,i)=>console.log('  C+ ['+id+'] '+scripts[i].place_name));
