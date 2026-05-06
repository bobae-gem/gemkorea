const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';

const scripts = [
  {
    place_id:'GK-CN-JEN-0001', place_name:'칠백의총',
    script_30s:{text:'1592년 8월, 조헌이 이끄는 700명의 의병이 금산성을 포위한 왜군에 맞섰다. 전투가 끝났을 때 살아남은 사람이 없었다. 700구의 시신과 녹슨 칼만 남았다. 도망친 사람이 없었다. 패배했지만 비겁하지 않았던 700명의 이야기.',char_count:111,emotion_keywords_used:['저항','희생','선택']},
    script_60s:{text:'1592년 8월 18일. 임진왜란이 한창이던 시절. 조헌이 이끄는 700명의 의병이 충남 금산으로 향했다. 관군의 지원을 요청했지만 거절당했다. 혼자 싸우기로 했다. 적은 왜군 정예부대였다. 수가 압도적으로 많았다. 전투가 시작됐다. 그리고 끝났을 때, 살아남은 사람이 없었다. 700명 전원이 그 자리에서 전사했다. 도망친 사람이 한 명도 없었다. 의병장 조헌의 시신 옆에는 박히고 구부러진 화살 수천 개가 남아있었다. 패배했지만, 비겁하지 않았다. 그것이 칠백의총이다.',char_count:278,emotion_keywords_used:['저항','희생','선택','기억']},
    hooks:['700명 싸우다 전원 전사, 도망친 사람이 없었다','관군이 지원 거절해도 혼자 싸웠다','조헌의 시신 옆에 남은 것들','패배했지만 비겁하지 않았던 700명','임진왜란 가장 비장한 전투'],
    thumbnails:['700명 전원 전사','도망이 없었다','조헌의 선택','패배했지만','비겁하지 않았다'],
    captions:{youtube:'칠백의총 | 700명 전원 전사, 도망친 사람이 없었다 — 1592년 금산 전투 의병들의 이야기. 충남 금산군. #칠백의총 #조헌 #임진왜란',instagram:'700명이 싸우다 전원 죽었다. 도망친 사람이 없었다 ⚔️ 칠백의총.',tiktok:'700명 싸우다 전원 죽었는데 도망친 사람이 한명도 없었다 #칠백의총 #임진왜란 #역사',xiaohongshu:'七百义冢 ⚔️ 700名义兵全员战死，无一逃跑 | 壬辰倭乱最悲壮的战斗 | 忠南锦山 #七百义冢 #韩国历史'},
    hashtags:{korean:['#한국역사','#임진왜란','#독립운동','#충남','#전쟁유적'],place_specific:['#칠백의총','#조헌','#금산전투','#의병']},
    map_card_intro:'700명 전원 전사, 도망친 사람 없었다 — 임진왜란 가장 비장한 전투지'
  },
  {
    place_id:'GK-IC-JEN-0001', place_name:'신미양요 격전지 (광성보)',
    script_30s:{text:'1871년 6월, 미군 병사들이 강화도에 상륙했다. 조선군은 총알이 떨어지자 돌을 던지고 맨주먹으로 싸웠다. 미군은 전투에서 이겼지만 협상에는 실패했다. 조선은 끝까지 문을 열지 않았다. 총알이 없어지자 돌을 던진 조선 군사들.',char_count:110,emotion_keywords_used:['저항','희생','선택']},
    script_60s:{text:'1871년 6월 10일. 미국 아시아 함대가 강화도를 침공했다. 신미양요다. 압도적인 화력 차이가 있었다. 그런데 광성보의 조선군은 쉽게 물러서지 않았다. 총알이 떨어지자 돌을 던졌다. 맨주먹으로 싸웠다. 어재연 장군을 포함한 수백 명이 그 자리에서 전사했다. 미군은 전투에서 이겼다. 그러나 협상에서 실패했다. 조선은 문을 열지 않았다. 흥선대원군은 척화비를 세웠다. 조선의 저항을 기록한 자리, 광성보다.',char_count:254,emotion_keywords_used:['저항','희생','선택','기억']},
    hooks:['총알 없어지자 돌 던진 조선 군사들','미군 이겼지만 협상은 실패했다','어재연 장군과 수백 명의 최후','조선이 끝까지 문을 열지 않은 이유','강화도에서 일어난 조미전쟁'],
    thumbnails:['돌을 던진 군사들','미군도 못 뚫었다','어재연의 마지막','문을 열지 않았다','광성보의 저항'],
    captions:{youtube:'신미양요 광성보 | 총알 없어지자 돌 던진 조선 군사들 — 1871년 미군과의 전투 현장. 인천 강화군. #광성보 #신미양요 #강화도',instagram:'총알이 없어지자 돌을 던졌다 🪨 미군이 이겼는데 협상은 실패. 광성보.',tiktok:'총알 없어지자 돌 던짐 근데 미군이 협상은 못 함 #광성보 #신미양요 #역사',xiaohongshu:'广城堡 🪨 子弹用尽后用石头迎战 | 1871年朝鲜与美军的战斗 | 仁川江华岛 #广城堡 #韩国历史 #江华岛'},
    hashtags:{korean:['#한국역사','#역사여행','#강화도','#조선역사','#인천'],place_specific:['#광성보','#신미양요','#어재연','#척화비']},
    map_card_intro:'총알 없어지자 돌을 던진 조선 군사들 — 1871년 신미양요 격전지'
  },
  {
    place_id:'GK-SE-DOK-0004', place_name:'독립문',
    script_30s:{text:'1897년, 서재필이 주도한 독립협회는 수백 년 동안 중국 황제의 사신을 맞이하던 영은문을 허물었다. 그리고 바로 그 자리에 독립문을 세웠다. 사대의 상징을 허물고 자주독립의 상징을 세웠다. 그런데 3년 뒤, 조선은 일본의 보호국이 됐다.',char_count:115,emotion_keywords_used:['저항','선택','몰락']},
    script_60s:{text:'조선은 수백 년간 중국 황제의 사신을 영은문에서 맞이하며 예를 표했다. 굴욕의 상징이었다. 1897년, 서재필이 주도한 독립협회가 그 문을 허물었다. 그리고 바로 그 자리에 독립문을 세웠다. 프랑스 개선문을 모델로 했다. 자주독립을 선언하는 문이었다. 그런데 불과 3년 뒤, 조선은 일본의 보호국이 됐다. 그리고 10년 뒤 완전히 병합됐다. 독립을 향한 간절함이 담긴 문이 식민지의 입구 가까이에 남아있다. 그 아이러니가 지금도 이 자리에 서있다.',char_count:275,emotion_keywords_used:['저항','선택','몰락','기억']},
    hooks:['사대의 상징 허물고 독립의 상징을 세웠다','3년 뒤 조선은 보호국이 됐다','영은문을 허문 자리에 독립문을','조선의 마지막 자주독립 선언','이 아이러니가 아직도 거기 서있다'],
    thumbnails:['사대의 자리에 독립이','3년 뒤 보호국','영은문의 흔적','독립문의 아이러니','자주독립의 꿈'],
    captions:{youtube:'독립문 | 사대의 상징 허문 자리에 독립문을 세웠다 — 서재필과 독립협회. 서울 서대문구. #독립문 #서재필 #독립운동',instagram:'중국 황제 사신 맞이하던 문을 허물고 그 자리에 독립문을 세웠다 🏛️ 3년 뒤 보호국이 됐다.',tiktok:'사대 상징 허물고 독립문 세웠는데 3년 뒤 보호국 됨 #독립문 #서재필 #역사',xiaohongshu:'独立门 🏛️ 拆除朝贡象征，在原地建立独立门 | 3年后成为保护国 | 首尔历史 #独立门 #韩国历史 #首尔'},
    hashtags:{korean:['#한국역사','#독립운동','#일제강점기','#서울','#조선역사'],place_specific:['#독립문','#서재필','#독립협회','#영은문']},
    map_card_intro:'사대의 상징 허물고 세운 독립문 — 3년 뒤 보호국이 된 아이러니'
  },
  {
    place_id:'GK-JJ-DOK-0001', place_name:'제주 4·3 유적지 (너븐숭이 기념관)',
    script_30s:{text:'1949년 1월 17일, 북촌리 주민들은 마을 초등학교 운동장에 집결하라는 명령을 받았다. 그날 하루 300명 이상이 이름도 모른 채 희생됐다. 생존자들은 수십 년간 이 사실을 입 밖에도 낼 수 없었다. 잊혀지지 않기 위해 살아남은 자들이 수십 년을 싸웠다.',char_count:123,emotion_keywords_used:['두려움','희생','기억','생존']},
    script_60s:{text:'1948년 4월 3일, 제주도에서 군경의 탄압에 맞선 무장봉기가 시작됐다. 이후 7년간 제주 인구의 10분의 1이 넘는 3만 명이 죽었다. 1949년 1월 17일, 북촌리. 주민들이 운동장에 집결하라는 명령을 받았다. 그날 300명 이상이 죽었다. 가장 많은 사람이 죽은 하루였다. 생존자들은 수십 년간 이 사실을 말할 수 없었다. 빨갱이로 몰릴까 봐. 2003년, 노무현 대통령이 국가 공식 사과를 했다. 2024년, 국가기념일로 지정됐다. 잊혀지지 않기 위해 싸운 사람들의 역사다.',char_count:290,emotion_keywords_used:['두려움','희생','기억','생존']},
    hooks:['수십 년간 말할 수 없었던 섬의 비밀','하루에 300명이 죽은 그 운동장','제주 인구 10분의 1이 사라졌다','2003년에야 공식 사과가 나왔다','잊혀지지 않기 위해 싸운 사람들'],
    thumbnails:['말할 수 없었던 비밀','300명의 하루','10분의 1이 사라졌다','55년 만의 사과','기억하는 자들'],
    captions:{youtube:'제주 4·3 유적지 | 수십 년간 말할 수 없었던 섬의 비밀 — 너븐숭이 기념관. 제주 조천읍. #제주43 #4.3사건 #역사',instagram:'수십 년 동안 말조차 할 수 없었다 🕊️ 제주 4.3, 잊혀지지 않기 위해 싸운 사람들.',tiktok:'제주에서 수십 년간 말할 수 없었던 사건 #제주43 #역사 #현대사',xiaohongshu:'济州4·3遗址 🕊️ 数十年间无法开口的历史 | 济州岛的悲剧 | 韩国现代史 #济州43 #韩国历史 #济州岛'},
    hashtags:{korean:['#한국역사','#제주43','#현대사','#제주','#민주화'],place_specific:['#제주4.3','#너븐숭이','#북촌리','#제주도']},
    map_card_intro:'수십 년간 말할 수 없었던 제주 4·3, 잊혀지지 않기 위해 싸운 사람들의 기념관'
  },
  {
    place_id:'GK-JB-GID-0001', place_name:'고창 고인돌 유적',
    script_30s:{text:'한 언덕 위에 탁자식, 바둑판식, 개석식 — 고인돌의 세 가지 형식이 한꺼번에 있다. 시대와 지역에 따라 달라지는 고인돌 양식의 변천사가 이 언덕 하나에 담겨있다. 447기. 청동기 시대 무덤의 진화사를 한 곳에서 볼 수 있다. 유네스코 세계유산.',char_count:113,emotion_keywords_used:['기억','권력']},
    script_60s:{text:'고창 고인돌 유적에서는 특이한 일이 벌어진다. 탁자식, 바둑판식, 개석식. 고인돌의 세 가지 형식이 한 언덕에 뒤섞여 있다. 학자들은 이것이 시대와 지역에 따라 고인돌 양식이 변화해온 과정을 보여준다고 설명한다. 강화도와 화순 고인돌이 각각의 특색을 보여준다면, 고창은 그 변천사를 한꺼번에 보여주는 곳이다. 447기. 단일 지역 최대 군집이다. 2000년 강화, 화순과 함께 유네스코 세계유산으로 등재됐다. 청동기 시대 무덤의 진화사가 담긴 언덕이다.',char_count:276,emotion_keywords_used:['기억','권력']},
    hooks:['고인돌 세 가지 형식이 한 언덕에','청동기 무덤의 진화사가 여기 있다','447기 단일 최대 군집','왜 고창에 이렇게 많은가','유네스코가 인정한 돌의 박물관'],
    thumbnails:['고인돌 진화사','447기의 수수께끼','세 가지 형식','청동기의 박물관','유네스코 세계유산'],
    captions:{youtube:'고창 고인돌 유적 | 청동기 무덤의 진화사가 한 언덕에 — 세 가지 형식 447기. 전북 고창군. #고창고인돌 #고인돌 #유네스코',instagram:'탁자식 바둑판식 개석식 세 가지 고인돌이 한 언덕에 🪨 청동기 무덤의 진화사. 고창 고인돌.',tiktok:'고인돌 세 종류가 한 언덕에 있다는게 무슨 뜻이냐면 #고창고인돌 #고인돌 #역사',xiaohongshu:'高敞支石墓遗址 🪨 三种类型的支石墓共存一处 | 青铜器时代墓葬演变史 | 联合国教科文组织世界遗产 #高敞 #韩国历史 #世界遗产'},
    hashtags:{korean:['#한국역사','#역사여행','#전북','#유네스코','#선사시대'],place_specific:['#고창고인돌','#고인돌','#청동기시대','#고창']},
    map_card_intro:'청동기 무덤 진화사를 한 언덕에서 — 세 형식 447기 유네스코 세계유산'
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

console.log('C모드 6차 완료');
console.log('생성: '+updated+'개 → review_pending');
console.log('누적 콘텐츠: '+lib.total+'개');
ids.forEach((id,i)=>console.log('  C+ ['+id+'] '+scripts[i].place_name));
