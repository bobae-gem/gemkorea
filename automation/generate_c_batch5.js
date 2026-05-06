const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';

const scripts = [
  {
    place_id:'GK-SE-DOK-0002', place_name:'안중근 의사 기념관',
    script_30s:{text:'1909년 10월 26일, 안중근은 하얼빈 역에서 이토 히로부미에게 총을 쏘았다. 뤼순 감옥에서 사형 선고를 받은 뒤 그는 동양 평화론을 집필하다 미완으로 순국했다. 재판정에서 그는 스스로를 살인범이 아닌 대한의군 참모중장이라 규정했다. 그 당당함이 지금도 남아있다.',char_count:127,emotion_keywords_used:['저항','희생','선택']},
    script_60s:{text:'1909년 10월 26일 오전 9시. 하얼빈 역. 안중근은 이토 히로부미를 향해 세 발을 쏘았다. 이토는 현장에서 죽었다. 안중근은 체포됐다. 뤼순 법정에서 그는 당당했다. 자신을 살인범이 아닌 대한의군 참모중장이라고 선언했다. 1910년 3월 26일 사형이 집행됐다. 그는 죽기 전까지 동양 평화론을 집필했다. 미완으로 남겼다. 오른손 넷째 손가락 첫 마디가 없는 그의 손도장. 대한독립을 위해 의거 전 끊은 손가락이다. 그 손도장은 지금도 독립의 서명으로 남아있다.',char_count:272,emotion_keywords_used:['저항','희생','선택','기억']},
    hooks:['재판장에서 "나는 군인이다" 선언한 그','손가락을 끊고 독립을 맹세했다','이토 히로부미를 쏜 그날의 이야기','미완의 동양 평화론','의거 115년 후에도 남은 손도장'],
    thumbnails:['나는 군인이다','손가락 서명','하얼빈역 그날','미완의 평화론','독립의 도장'],
    captions:{youtube:'안중근 의사 기념관 | 재판정에서 "나는 군인이다" 선언한 독립운동가 — 의거·순국·동양평화론. 서울 남산. #안중근 #독립운동 #항일',instagram:'재판장에서 당당하게 선언했다 "나는 살인범이 아닌 군인이다" 🏴 안중근 의사 기념관.',tiktok:'이토 히로부미 쏜 안중근이 법정에서 한 말 #안중근 #독립운동 #역사',xiaohongshu:'安重根义士纪念馆 🏴 在法庭上宣布"我是军人"的独立运动家 | 首尔南山必游 #安重根 #韩国历史 #首尔'},
    hashtags:{korean:['#한국역사','#독립운동','#일제강점기','#서울','#남산'],place_specific:['#안중근','#하얼빈의거','#동양평화론','#대한의군']},
    map_card_intro:'"나는 군인이다" — 하얼빈 의거 안중근 의사를 기리는 기념관'
  },
  {
    place_id:'GK-GB-GWA-0001', place_name:'첨성대',
    script_30s:{text:'1,400년 전 신라 사람들은 하늘을 보며 나라의 운명을 읽었다. 첨성대는 그 하늘을 체계적으로 관측하기 위한 도구였다. 362개의 돌, 27단. 사용된 돌의 수가 1년의 날수와 같다는 해석도 있다. 하늘과 땅을 연결하려 했던 신라인의 열망이 담긴 돌탑.',char_count:115,emotion_keywords_used:['권력','기억']},
    script_60s:{text:'신라 선덕여왕 시기, 별의 움직임은 왕의 권력과 직결됐다. 일식과 월식을 예측하고 계절을 알아야 농사도, 정치도 가능했다. 그래서 만든 것이 첨성대다. 362개의 돌을 쌓아 27단으로 만든 원통형 구조물. 높이 약 9m. 동아시아에서 현존하는 가장 오래된 천문 관측 시설로 추정된다. 사용된 돌이 365개라는 설도 있다. 1년의 날수와 같다는 상징성을 담았다는 해석이다. 경주 도심 한복판에 1,400년을 버텼다. 아무것도 하지 않은 것처럼 서 있지만, 그 안에 신라의 과학이 담겨있다.',char_count:280,emotion_keywords_used:['권력','기억','생존']},
    hooks:['1,400년 전 하늘을 읽던 신라의 과학','돌의 수가 1년 날수와 같다','동아시아 최고의 천문 관측 시설','경주 한복판 1,400년 된 돌탑','첨성대에 담긴 신라의 비밀'],
    thumbnails:['1,400년 된 과학','하늘을 읽는 탑','365개의 돌','신라의 천문학','아직 서 있다'],
    captions:{youtube:'첨성대 | 1,400년 전 신라인이 하늘을 읽던 탑 — 동아시아 최고 천문 관측 시설. 경북 경주시. #첨성대 #신라 #경주역사',instagram:'1400년 전에 이미 하늘을 체계적으로 관측했다 🌙 첨성대, 신라의 과학.',tiktok:'1400년 전 신라 사람들이 별 보던 탑 #첨성대 #신라 #경주',xiaohongshu:'瞻星台 🌙 1400年前新罗人观测天文的石塔 | 东亚现存最古老天文观测设施 | 庆州历史 #瞻星台 #韩国历史 #庆州'},
    hashtags:{korean:['#한국역사','#역사여행','#경주','#신라역사','#과학유산'],place_specific:['#첨성대','#선덕여왕','#신라','#천문관측']},
    map_card_intro:'1,400년 전 신라인이 하늘을 읽던 탑 — 동아시아 최고 천문 관측 시설'
  },
  {
    place_id:'GK-CB-SAN-0001', place_name:'삼년산성',
    script_30s:{text:'신라는 백제·고구려와 싸우는 동안 이 산성을 충청도 방어의 핵심으로 삼았다. 쌓는 데 3년이 걸렸고, 이후에도 수차례 보수됐다. 지금도 외벽이 거의 온전히 남아있다. 삼국시대 석성 축조 기술의 교과서로 불리는 1,500년 된 산성.',char_count:105,emotion_keywords_used:['저항','생존','권력']},
    script_60s:{text:'470년, 신라 자비왕은 백제·고구려와의 전쟁에서 충청도를 지키기 위해 산성을 쌓기 시작했다. 완성하는 데 3년이 걸렸다. 그래서 삼년산성이다. 이후 삼국통일 전쟁에서, 나당전쟁에서 신라의 핵심 거점이 됐다. 그리고 지금, 1,500년이 넘었다. 외벽이 거의 그대로다. 뒤틀리거나 무너지지 않았다. 당시 신라 석공들의 기술이 그대로 남아있는 것이다. 학자들은 이 성을 삼국시대 석성 축조 기술의 교과서라고 부른다. 충북 보은에 있는, 조용하고 아직 덜 알려진 요새.',char_count:268,emotion_keywords_used:['저항','생존','권력','기억']},
    hooks:['쌓는 데 3년 걸린 그 산성이 1,500년을 버텼다','삼국통일의 핵심 거점','신라 석공 기술의 교과서','외벽이 1,500년째 온전한 이유','삼국시대 석성의 비밀'],
    thumbnails:['3년 쌓아 1,500년','삼국통일의 요새','신라의 기술','외벽이 멀쩡한 이유','충북의 비밀 산성'],
    captions:{youtube:'삼년산성 | 쌓는 데 3년, 버티는 데 1,500년 — 삼국통일의 핵심 거점. 충북 보은군. #삼년산성 #신라 #삼국시대',instagram:'3년 걸려 쌓은 산성이 1,500년을 버텼다 🏔️ 외벽이 아직도 거의 그대로. 삼년산성.',tiktok:'3년 쌓고 1500년 버틴 산성이 있다 #삼년산성 #신라 #역사',xiaohongshu:'三年山城 🏔️ 建造3年、屹立1500年的新罗山城 | 三国统一的军事要地 | 忠北报恩 #三年山城 #韩国历史'},
    hashtags:{korean:['#한국역사','#역사여행','#충청도','#삼국시대','#신라'],place_specific:['#삼년산성','#자비왕','#삼국통일','#신라석성']},
    map_card_intro:'3년 쌓아 1,500년 버틴 신라의 요새 — 삼국통일의 핵심 거점'
  },
  {
    place_id:'GK-SE-DOK-0003', place_name:'3.1운동 기념지 (탑골공원)',
    script_30s:{text:'1919년 3월 1일 오후 2시, 탑골공원에 수천 명이 모였다. 누군가 독립선언서를 낭독했고 대한독립만세가 터졌다. 이 함성은 서울에서 시작해 전국으로, 해외 동포에게까지 번졌다. 학생, 상인, 농민, 승려가 모두 거리로 나왔다. 한국 역사상 최대의 비폭력 저항이 시작된 곳이다.',char_count:131,emotion_keywords_used:['저항','희생','생존']},
    script_60s:{text:'1919년 3월 1일. 고종 황제의 국장을 앞두고 전국에서 사람들이 서울로 모였다. 오후 2시, 탑골공원. 민족 대표 33인은 이미 태화관에서 독립선언서를 낭독하고 자진 체포됐다. 그러나 탑골공원의 군중은 달랐다. 누군가 선언서를 낭독했고, 대한독립만세가 터졌다. 함성은 멈추지 않았다. 서울 거리로 나갔다. 전국으로 퍼졌다. 만주, 연해주, 하와이까지 번졌다. 두 달 동안 200만 명이 넘게 참여했다. 7,509명이 숨졌다. 조선 역사상 가장 많은 민중이 참여한 비폭력 저항이었다.',char_count:283,emotion_keywords_used:['저항','희생','생존','기억']},
    hooks:['200만 명이 같은 날 거리로 나온 그날','탑골공원에서 시작된 만세 운동','7,509명이 목숨을 잃었다','학생도 상인도 농민도 나왔다','한국 역사상 최대 비폭력 저항의 시작점'],
    thumbnails:['200만 명의 만세','탑골공원 그날','7,509명의 희생','거리로 나온 사람들','비폭력 저항의 시작'],
    captions:{youtube:'3.1운동 기념지 (탑골공원) | 200만 명이 거리로 나온 그날 — 1919년 3월 1일의 현장. 서울 종로구. #31운동 #독립운동 #탑골공원',instagram:'1919년 이날 200만 명이 거리로 나왔다 🏴 탑골공원에서 시작된 대한독립만세.',tiktok:'200만명이 거리로 나온 날이 있었다 #31운동 #독립운동 #역사',xiaohongshu:'三一运动纪念地（塔洞公园）🏴 200万人同日走上街头 | 1919年3月1日的历史现场 | 首尔历史 #三一运动 #韩国历史 #首尔'},
    hashtags:{korean:['#한국역사','#독립운동','#일제강점기','#서울','#3.1운동'],place_specific:['#31운동','#탑골공원','#독립선언서','#만세운동']},
    map_card_intro:'1919년 3월 1일, 200만 명의 만세가 시작된 역사의 현장'
  },
  {
    place_id:'GK-IC-GUN-0001', place_name:'강화 고려궁지',
    script_30s:{text:'1232년, 고려 왕실은 몽골의 침입을 피해 강화도로 도읍을 옮겼다. 바다를 건너오지 못하는 몽골군의 약점을 이용한 선택이었다. 그러나 백성들은 본토에서 38년간 약탈을 견뎌야 했다. 왕실이 섬에서 버티는 동안, 육지에서는 수십만 명이 죽거나 노예로 끌려갔다.',char_count:125,emotion_keywords_used:['두려움','생존','몰락']},
    script_60s:{text:'1231년 몽골이 처음 침입했을 때, 고려는 항복을 거부했다. 이듬해, 최우는 강화도로 천도를 결정했다. 바다를 건너오지 못하는 몽골군의 약점을 이용한 전략이었다. 왕실과 귀족들은 섬에서 개경의 삶을 재현했다. 궁궐을 짓고, 잔치를 열었다. 38년. 그동안 육지의 백성들은 몽골의 약탈을 견뎌야 했다. 수십만 명이 죽거나 노예로 끌려갔다. 1270년, 고려는 결국 개경으로 돌아갔다. 지금 강화도에는 그 궁궐의 터만 남아있다. 화려한 궁궐은 없어졌지만, 빈터가 오히려 더 많은 이야기를 전한다.',char_count:290,emotion_keywords_used:['두려움','생존','몰락','선택']},
    hooks:['왕은 섬에서 38년, 백성은 육지에서 38년','몽골이 바다를 못 건너는 약점을 이용했다','수십만 명이 죽는 동안 왕실은 잔치를 열었다','궁궐은 사라졌지만 빈터가 더 많은 것을 말한다','강화도에 숨겨진 고려 38년의 이야기'],
    thumbnails:['왕의 피신 38년','몽골이 못 건넌 바다','백성의 38년','사라진 궁궐','빈터가 말하는 것'],
    captions:{youtube:'강화 고려궁지 | 왕은 섬에서 38년, 백성은 육지에서 38년을 버텼다 — 고려 대몽항쟁의 현장. 인천 강화군. #고려궁지 #강화도 #고려역사',instagram:'왕실이 섬에서 잔치 열 때 육지 백성들은 죽어갔다 🏰 강화 고려궁지의 빈터가 말하는 것.',tiktok:'왕은 섬에서 38년 버티고 백성들은 몽골한테 당했다 #고려궁지 #강화도 #역사',xiaohongshu:'江华高丽宫址 🏰 王室在岛上38年，百姓在大陆苦难38年 | 高丽抗蒙历史现场 | 仁川江华岛 #高丽宫址 #韩国历史 #江华岛'},
    hashtags:{korean:['#한국역사','#역사여행','#강화도','#고려역사','#인천'],place_specific:['#고려궁지','#최우','#대몽항쟁','#강화천도']},
    map_card_intro:'왕은 섬에서 38년, 백성은 육지에서 — 고려 대몽항쟁의 빈터'
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

console.log('C모드 5차 완료');
console.log('생성: '+updated+'개 → review_pending');
console.log('누적 콘텐츠: '+lib.total+'개');
ids.forEach((id,i)=>console.log('  C+ ['+id+'] '+scripts[i].place_name));
