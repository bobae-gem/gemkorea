const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';

const scripts = [
  {
    place_id:'GK-GB-GOB-0001', place_name:'경주 대릉원',
    script_30s:{text:'1973년, 무덤 안에서 1500년 전 신라인의 손때가 묻은 유물이 쏟아졌다. 순금 왕관, 말 가죽에 그린 하늘을 나는 말 그림. 도굴꾼도 들어오지 못한 봉토분의 구조 덕분에 온전히 살아남은 기적 같은 유물들. 경주 대릉원이다.',char_count:117,emotion_keywords_used:['기억','권력']},
    script_60s:{text:'경주 도심 한복판에 거대한 언덕들이 있다. 사람 무덤이다. 신라 왕과 귀족들의 고분 23기가 밀집한 대릉원이다. 1973년, 가장 큰 무덤 하나를 발굴했다. 천마총이다. 뚜껑을 열자 1500년 전 유물이 쏟아졌다. 순금으로 만든 왕관. 말 가죽에 그린 하늘을 나는 백마 그림, 천마도. 봉토분은 돌을 쌓아 외부 침입을 막는 구조다. 도굴꾼도, 시간도 이기지 못했다. 1만 1500여 점의 유물이 온전히 남아있었다. 지금 그 무덤 안을 직접 들어가 볼 수 있다.',char_count:266,emotion_keywords_used:['기억','권력','생존']},
    hooks:['1500년 동안 아무도 못 열었던 신라 금고','천마도가 발견된 그날','봉토분이 도굴꾼을 막은 방법','경주 도심 한복판의 거대한 무덤들','지금도 무덤 안에 들어갈 수 있다'],
    thumbnails:['1500년 봉인된 무덤','신라 황금 왕관','천마도의 발견','도굴 불가능한 이유','무덤 안으로 들어가다'],
    captions:{youtube:'경주 대릉원 | 1500년간 봉인된 신라 황금 왕관의 무덤 — 천마총 발굴 이야기. 경북 경주시. #대릉원 #천마총 #신라역사',instagram:'경주 도심 한복판에 신라 왕의 무덤이 있어 🏺 1500년 동안 아무도 못 열었고, 열자 황금이 쏟아졌다.',tiktok:'1500년 봉인 무덤 열었더니 황금이 쏟아짐 #대릉원 #천마총 #경주',xiaohongshu:'庆州大陵苑 🏺 封存1500年的新罗王陵 | 天马图与黄金王冠的发现 | 庆州历史必游 #庆州 #大陵苑 #韩国历史'},
    hashtags:{korean:['#한국역사','#역사여행','#경주','#신라역사','#유네스코'],place_specific:['#대릉원','#천마총','#금관','#천마도','#신라']},
    map_card_intro:'1500년 봉인된 신라 황금 왕관의 무덤, 경주 도심의 거대한 고분군'
  },
  {
    place_id:'GK-GG-SAN-0002', place_name:'행주산성',
    script_30s:{text:'1593년 2월, 권율의 군사 2300명이 이 작은 산에서 왜군 3만 명을 막아냈다. 총알이 없자 여성들이 치마에 돌을 날랐다는 이야기가 전해진다. 하루의 승리가 한 나라를 구했다. 행주산성이다.',char_count:105,emotion_keywords_used:['저항','생존','희생']},
    script_60s:{text:'임진왜란 1593년 2월. 권율은 2300명으로 행주산성에 진을 쳤다. 밖에는 왜군 3만 명이 몰려왔다. 열 배가 넘는 적이었다. 화살이 다 떨어지고, 총알도 다 떨어졌다. 그때 성안의 여성들이 치마를 모아 돌을 날랐다. 행주치마라는 이름의 기원이 바로 이 전투라는 설이 있다. 학자들 사이에 이설이 있지만, 이 전투에서 백성과 군인이 함께 싸웠다는 사실은 분명하다. 전투가 끝났을 때 왜군은 물러갔다. 한국 3대 대첩 중 하나, 행주대첩이다.',char_count:261,emotion_keywords_used:['저항','생존','희생','선택']},
    hooks:['2300명이 3만 명을 막아낸 하루','행주치마의 이름이 이 전투에서 유래했다','총알이 없어지자 돌을 던졌다','한국 3대 대첩 중 하나','백성과 군인이 함께 싸운 전투'],
    thumbnails:['2300 vs 3만','행주치마의 유래','돌을 날린 여성들','한국 3대 대첩','하루가 나라를 구했다'],
    captions:{youtube:'행주산성 | 2300명이 3만 명을 막아낸 임진왜란 행주대첩 현장 — 행주치마의 전설. 경기도 고양시. #행주산성 #행주대첩 #임진왜란',instagram:'2300명이 3만 명을 막아낸 그 산 ⚔️ 총알 없어지자 돌 던졌고, 이겼다. 행주대첩.',tiktok:'2300명이 3만명 막아낸 산 행주산성 #행주대첩 #임진왜란 #역사',xiaohongshu:'幸州山城 ⚔️ 2300人抵挡3万倭军 | 壬辰倭乱三大胜战之一 | 幸州大捷的历史 #幸州山城 #韩国历史 #京畿道'},
    hashtags:{korean:['#한국역사','#역사여행','#임진왜란','#경기도','#전쟁유적'],place_specific:['#행주산성','#행주대첩','#권율','#임진왜란']},
    map_card_intro:'2300명이 3만 명을 막아낸 임진왜란 행주대첩 현장'
  },
  {
    place_id:'GK-GN-SEO-0001', place_name:'진주성',
    script_30s:{text:'1592년 10월, 김시민은 4000명으로 3만 왜군을 막아냈다. 이듬해 6월, 왜군 10만 명이 다시 왔다. 9일 만에 성이 함락됐고 7만 명이 죽었다. 논개는 왜장을 끌어안고 남강에 뛰어들었다. 승리와 패배가 같은 성에 담겨있다.',char_count:119,emotion_keywords_used:['저항','희생','몰락']},
    script_60s:{text:'1592년 10월. 김시민은 4,000명으로 왜군 3만 명을 막아냈다. 조선 3대 대첩 중 하나, 제1차 진주성 전투다. 그러나 이듬해 6월, 왜군이 10만 명을 이끌고 다시 왔다. 이번엔 달랐다. 9일간의 전투 끝에 성은 함락됐고, 7만 명이 목숨을 잃었다. 살아남은 의기 논개는 왜장을 유인해 의암 위에서 함께 남강에 뛰어들었다. 같은 진주성에서 승리와 패배, 영웅과 희생이 겹친다. 지금도 남강 절벽 아래 의암이 남아있다.',char_count:266,emotion_keywords_used:['저항','희생','몰락','선택']},
    hooks:['영웅의 승리와 7만 명의 죽음이 같은 곳에','논개가 왜장을 끌어안고 뛰어든 그 성','4000명이 3만을 막았다가 10만에 무너졌다','진주성에서 일어난 두 번의 전투','의암은 지금도 남강에 남아있다'],
    thumbnails:['승리와 패배의 성','논개의 선택','4000 vs 3만','7만의 희생','의암은 살아있다'],
    captions:{youtube:'진주성 | 승리와 패배, 영웅과 희생이 같은 공간에 — 김시민 대첩과 논개 순국. 경남 진주시. #진주성 #논개 #임진왜란',instagram:'같은 성에서 한 번은 이기고 한 번은 졌다 ⚔️ 논개는 그 패배의 날 의암에서 뛰어들었다.',tiktok:'같은 성에서 승리와 패배가 일어났다 진주성 #진주성 #논개 #임진왜란',xiaohongshu:'晋州城 ⚔️ 同一座城市的胜利与失败 | 金时敏大捷与论介殉国 | 韩国历史圣地 #晋州城 #韩国历史 #庆南'},
    hashtags:{korean:['#한국역사','#역사여행','#임진왜란','#경남','#전쟁유적'],place_specific:['#진주성','#논개','#김시민','#진주대첩']},
    map_card_intro:'승리와 패배, 논개의 순국이 함께 담긴 진주성'
  },
  {
    place_id:'GK-SE-BIS-0001', place_name:'척화비 (서울 종로)',
    script_30s:{text:'1871년, 조선 정부는 전국에 돌을 세웠다. 서양 오랑캐와 손잡는 건 나라를 파는 것이다. 두 번의 전쟁을 겪은 흥선대원군의 선택이었다. 그런데 이 돌이 세워진 지 5년 뒤, 조선은 문을 열었다. 저항의 기억은 돌에 새겨졌고, 결정은 바뀌었다.',char_count:122,emotion_keywords_used:['저항','선택','몰락']},
    script_60s:{text:'1866년과 1871년, 조선은 두 번 침략을 받았다. 프랑스 군함, 그다음엔 미국 군함. 흥선대원군은 두 번 다 막아냈다. 그리고 전국에 돌을 세웠다. 서양 오랑캐가 쳐들어오는데 싸우지 않으면 화친하는 것, 화친을 주장하면 나라를 파는 것이다. 수백 개의 척화비가 전국 주요 길목에 세워졌다. 백성들에게 보내는 신호였다. 우리는 절대 문을 열지 않겠다는. 그런데 5년 뒤, 조선은 일본과 강화도조약을 맺었다. 문이 열렸다. 척화비는 허물어지거나 방치됐다. 지금 남은 척화비는 그 저항의 흔적이다.',char_count:293,emotion_keywords_used:['저항','선택','몰락','기억']},
    hooks:['조선의 마지막 선언, 5년 뒤 무너졌다','전국에 돌을 세운 이유','서양과 손잡으면 나라를 파는 것','5년 뒤 조선은 결국 문을 열었다','서울 한복판에 이 돌이 아직 있다'],
    thumbnails:['조선의 마지막 저항','5년 뒤 문을 열었다','전국에 세운 돌','화친은 매국이다','아직 남아있는 척화비'],
    captions:{youtube:'척화비 | 조선의 마지막 서양 거부 선언, 5년 뒤 문을 열었다 — 흥선대원군과 쇄국정책. 서울 종로구. #척화비 #흥선대원군 #조선후기',instagram:'전국에 돌을 세웠는데 5년 뒤 결국 문을 열었다 🪧 조선의 마지막 저항, 척화비.',tiktok:'서양 거부 선언했는데 5년뒤 문 열었음 ㅋ #척화비 #조선역사 #흥선대원군',xiaohongshu:'斥和碑 🪧 朝鲜拒绝西方的最后宣言 | 5年后打开了门 | 首尔历史遗迹 #斥和碑 #韩国历史 #首尔'},
    hashtags:{korean:['#한국역사','#역사여행','#서울','#조선역사','#쇄국정책'],place_specific:['#척화비','#흥선대원군','#병인양요','#신미양요']},
    map_card_intro:'조선의 마지막 서양 거부 선언 — 5년 뒤 문을 열었다'
  },
  {
    place_id:'GK-JB-HYO-0001', place_name:'전주향교',
    script_30s:{text:'조선은 유학을 국가 이념으로 삼았고, 그 교육을 전국의 향교를 통해 실현했다. 전주향교는 전라도 유생의 정신적 중심지였다. 임진왜란 때 불타 없어진 뒤 재건됐다. 지금도 봄가을 공자에게 제사를 올리는 석전제가 이어지고 있다.',char_count:111,emotion_keywords_used:['기억','권력']},
    script_60s:{text:'조선은 공자의 유학을 국가 이념으로 삼았다. 그 교육을 어떻게 전국에 퍼뜨렸을까. 향교다. 각 지역마다 향교를 설치해 지방 유생을 교육했다. 전주향교는 전라도에서 가장 큰 규모의 향교다. 전라도 유생들의 정신적 중심지였다. 임진왜란 때 소실됐지만 다시 세워졌다. 지금도 매년 봄과 가을, 공자에게 제사를 올리는 석전제(釋奠祭)가 이 향교에서 열린다. 수백 년 된 의례가 디지털 시대에도 그대로 살아있는 공간이다.',char_count:256,emotion_keywords_used:['기억','권력']},
    hooks:['조선의 학교가 지금도 운영 중이다','수백 년 제사가 디지털 시대에도 이어진다','전라도 유생들의 정신적 중심지','임진왜란에도 살아남은 교육의 공간','공자에게 제사를 올리는 조선의 학교'],
    thumbnails:['조선 학교가 살아있다','수백 년 제사','전라도의 중심','유학의 성지','석전제가 열리는 곳'],
    captions:{youtube:'전주향교 | 수백 년 제사가 아직도 이어지는 조선의 학교 — 전라도 최대 향교. 전북 전주시. #전주향교 #석전제 #조선역사',instagram:'조선 시대 학교에서 아직도 공자 제사를 올린다 📚 전주향교, 살아있는 유교 전통.',tiktok:'조선 학교가 아직도 운영 중이고 제사도 함 #전주향교 #조선역사 #전주',xiaohongshu:'全州乡校 📚 朝鲜时代学校至今仍在运营 | 春秋孔子祭祀延续至今 | 全州历史景点 #全州乡校 #韩国历史 #全州'},
    hashtags:{korean:['#한국역사','#역사여행','#전주','#조선역사','#유교'],place_specific:['#전주향교','#석전제','#공자','#향교']},
    map_card_intro:'수백 년 석전제가 이어지는 살아있는 조선의 학교'
  }
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
const heritage=JSON.parse(fs.readFileSync(base+'data/heritage_all.json','utf8'));
const hMap={};heritage.forEach(d=>hMap[d.place_id]=d);

scripts.forEach((s,i)=>{
  const h=hMap[s.place_id]||{};
  lib.contents.push({
    id:'CL-'+String(nextNum+i).padStart(3,'0'),
    place_id:s.place_id,place_name:s.place_name,
    category_main:h.category_main||'역사',category_sub:h.category_sub||'',
    period_category:h.period_category||'',region:h.region||'',
    generated_at:now,content_status:'review_pending',
    script_30s:s.script_30s.text,script_60s:s.script_60s.text,
    emotion_keywords:[...new Set([...(s.script_30s.emotion_keywords_used||[]),...(s.script_60s.emotion_keywords_used||[])])],
    hooks:s.hooks,thumbnails:s.thumbnails,
    video_description:'',captions:s.captions,hashtags:s.hashtags,
    map_card_intro:s.map_card_intro,filming_ideas:[]
  });
});
lib.total=lib.contents.length;
lib.last_updated=now;
fs.writeFileSync(base+'content/library.json',JSON.stringify(lib,null,2),'utf8');

const log=JSON.parse(fs.readFileSync(base+'logs/automation_log.json','utf8'));
log.runs.push({time:now,mode:'C',content_generated:updated,places:ids,total_scripts:lib.total});
fs.writeFileSync(base+'logs/automation_log.json',JSON.stringify(log,null,2),'utf8');

console.log('C모드 4차 완료');
console.log('생성: '+updated+'개 → review_pending');
console.log('누적 콘텐츠: '+lib.total+'개');
ids.forEach((id,i)=>console.log('  C+ ['+id+'] '+scripts[i].place_name));
