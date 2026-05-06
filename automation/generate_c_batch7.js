const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';

const scripts = [
  {
    place_id:'GK-JB-SAJ-0003', place_name:'남원 실상사',
    script_30s:{text:'828년, 홍척국사가 지리산 아래 넓은 들판에 사찰을 지었다. 산속이 아닌 평지에 지은 것이 특이했다. 구산선문 중 가장 먼저 세워진 선종 사찰. 보물급 석탑과 석등이 즐비한 이 사찰은 한국 선불교가 시작된 곳이다.',char_count:112,emotion_keywords_used:['기억','선택']},
    script_60s:{text:'당나라에서 선종을 배우고 돌아온 홍척국사. 828년, 그는 지리산을 선택했다. 그런데 산속이 아니라 넓은 평지에 절을 지었다. 당시로서는 파격이었다. 구산선문이란 신라 말기 전국에 형성된 9개 선종 거점을 말한다. 실상사는 그 중 가장 먼저 세워진 곳이다. 한국 선불교의 출발점이다. 지금도 경내에는 보물로 지정된 석탑과 석등이 여럿 있다. 지리산 천왕봉을 바라보며 넓은 들판에 고요히 서있는 사찰. 산사가 아니어서 더 특별한 곳이다.',char_count:261,emotion_keywords_used:['기억','선택','권력']},
    hooks:['산 아닌 평지에 지은 절의 이유','구산선문 최초, 한국 선불교 시작점','홍척국사가 지리산 들판을 선택한 이유','보물급 석탑이 가득한 지리산 사찰','산속이 아닌 곳에 지은 천년 고찰'],
    thumbnails:['평지의 천년 고찰','선불교 시작점','홍척의 선택','지리산 아래 들판','구산선문 1호'],
    captions:{youtube:'남원 실상사 | 산 아닌 평지에 지은 한국 선불교의 시작점 — 구산선문 최초 사찰. 전북 남원시. #실상사 #구산선문 #지리산',instagram:'산속이 아닌 평지에 지은 절 🛕 한국 선불교가 여기서 시작됐다. 실상사.',tiktok:'왜 지리산 들판에 절을 지었냐고 #실상사 #선불교 #지리산',xiaohongshu:'实相寺 🛕 韩国禅宗佛教的起源地 | 九山禅门第一寺院 | 南原智异山 #实相寺 #韩国历史 #全罗北道'},
    hashtags:{korean:['#한국역사','#역사여행','#전북','#불교','#지리산'],place_specific:['#실상사','#구산선문','#홍척국사','#선종','#남원']},
    map_card_intro:'한국 선불교 시작점 — 구산선문 최초, 지리산 들판의 천년 고찰'
  },
  {
    place_id:'GK-JN-SAJ-0001', place_name:'영광 불갑사',
    script_30s:{text:'384년, 인도에서 온 마라난타가 백제 땅에 처음으로 불법을 전했다. 그가 처음 머문 곳이 불갑사다. 한반도 불교 전래의 시작점. 그리고 매년 9월, 이 사찰 주변은 붉은 꽃무릇으로 뒤덮인다. 역사와 자연이 한 자리에 있는 곳이다.',char_count:113,emotion_keywords_used:['기억']},
    script_60s:{text:'384년, 인도 승려 마라난타가 중국을 거쳐 백제로 왔다. 한반도에 처음으로 불교를 전한 사람이다. 그가 처음 정착한 곳이 전라남도 영광의 불갑사다. 한반도 불교 역사의 출발점이다. 백제 15대 침류왕이 받아들여 국교로 공인했다. 그로부터 1,600년이 지난 지금, 불갑사는 다른 이유로도 유명해졌다. 매년 9월, 절 주변 산자락이 붉은 꽃무릇으로 뒤덮인다. 상사화라고도 불리는 이 꽃은 잎과 꽃이 평생 만나지 못한다. 역사와 자연이 함께 있는 곳이다.',char_count:274,emotion_keywords_used:['기억','생존']},
    hooks:['한반도 불교가 시작된 절','인도 승려가 처음 머문 그 곳','1,600년 전 불교 전래의 현장','9월마다 붉은 꽃으로 물드는 이유','역사와 자연이 함께인 사찰'],
    thumbnails:['불교 시작점','마라난타 첫 정착지','1,600년의 역사','붉은 꽃무릇','역사+자연'],
    captions:{youtube:'영광 불갑사 | 한반도 불교 첫 전래 현장 — 매년 9월 꽃무릇 명소. 전남 영광군. #불갑사 #마라난타 #꽃무릇',instagram:'한반도에 불교가 처음 들어온 절 🛕 매년 9월 붉은 꽃무릇이 뒤덮는다. 불갑사.',tiktok:'한반도 불교 시작된 절 근데 꽃밭으로도 유명함 #불갑사 #꽃무릇 #영광',xiaohongshu:'佛甲寺 🛕 韩半岛佛教传入的起源地 | 每年9月满山红花 #佛甲寺 #韩国历史 #全罗南道'},
    hashtags:{korean:['#한국역사','#역사여행','#전남','#불교','#꽃무릇'],place_specific:['#불갑사','#마라난타','#상사화','#꽃무릇','#영광']},
    map_card_intro:'한반도 불교 첫 전래지, 매년 9월 붉은 꽃무릇으로 물드는 사찰'
  },
  {
    place_id:'GK-GB-SAJ-0001', place_name:'예천 용문사',
    script_30s:{text:'870년 창건된 소백산 사찰에 고려 시대 목공예의 걸작이 남아있다. 윤장대. 경전이 가득 담긴 거대한 회전 책장이다. 한 번 돌리면 경전을 모두 읽은 것과 같은 공덕이 있다고 전해진다. 국보 2개가 한 절에 있다.',char_count:107,emotion_keywords_used:['기억','권력']},
    script_60s:{text:'870년, 두운조사가 소백산 자락에 용문사를 지었다. 이 절에 특별한 것이 있다. 윤장대다. 경전이 가득 담긴 거대한 팔각형 회전 책장이다. 한 번 천천히 돌리면 그 안의 경전을 모두 읽은 것과 같은 공덕을 쌓는다고 전해진다. 고려시대 만들어진 목공예의 걸작으로 국보다. 그리고 경전을 보관하는 대장전도 국보다. 한 절에 국보가 두 개다. 조선판 대장경 목판도 이곳에 보관되어 있다. 불교 유산의 보고라 불리는 이유다.',char_count:256,emotion_keywords_used:['기억','권력']},
    hooks:['한 번 돌리면 경전 다 읽은 공덕','국보가 2개나 있는 절','고려 목공예의 걸작 윤장대','거대한 회전 경전 책장의 비밀','소백산 자락 불교 유산의 보고'],
    thumbnails:['회전 경전 책장','국보 2개','고려 목공예','윤장대의 비밀','불교 유산'],
    captions:{youtube:'예천 용문사 | 한 번 돌리면 경전 다 읽은 공덕 — 국보 윤장대와 대장전. 경북 예천군. #용문사 #윤장대 #국보',instagram:'경전 담긴 거대한 회전 책장 📚 한 번 돌리면 다 읽은 공덕. 예천 용문사 윤장대.',tiktok:'이거 한번 돌리면 경전 다 읽은거랑 같다고 함 #용문사 #윤장대 #국보',xiaohongshu:'龙门寺 📚 转一圈等于读完所有经典 | 国宝轮藏台与藏经殿 | 庆北醴泉 #龙门寺 #韩国历史 #庆尚北道'},
    hashtags:{korean:['#한국역사','#역사여행','#경북','#불교','#국보'],place_specific:['#용문사','#윤장대','#대장전','#국보','#예천']},
    map_card_intro:'한 번 돌리면 경전 다 읽은 공덕 — 국보 윤장대와 대장전의 절'
  },
  {
    place_id:'GK-GB-GEN-0001', place_name:'영주 무섬마을',
    script_30s:{text:'강이 마을을 360도로 감싸 도는 곳. 육지 속 섬마을이다. 가운데 외나무다리 하나가 마을과 세상을 연결했다. 조선 시대 고택 40여 채가 그대로 남아있다. 시간이 멈춘 것 같은 마을이다.',char_count:97,emotion_keywords_used:['기억','생존']},
    script_60s:{text:'내성천이 마을을 감싸 돈다. 거의 360도다. 강 안쪽은 섬이고, 강 바깥쪽은 세상이다. 마을과 세상을 연결하는 것은 외나무다리 하나뿐이었다. 좁은 나무 한 줄 위로 짐을 이고 지고 걷던 마을 사람들. 반남박씨와 선성김씨 두 집안이 17세기부터 뿌리 내린 집성촌이다. 조선 후기 고택 40여 채가 지금도 원형을 유지한다. 사람이 아직 살고 있다. 시간이 멈춘 것 같지만, 시간 속에서 계속 살아가는 마을이다.',char_count:256,emotion_keywords_used:['기억','생존','선택']},
    hooks:['강이 360도로 감싸는 육지 속 섬마을','외나무다리 하나로만 연결됐던 마을','400년 된 고택에 아직 사람이 산다','조선 고택 40채가 남아있는 이유','시간이 멈춘 것 같은 마을'],
    thumbnails:['360도 물돌이','외나무다리','400년 고택','아직 사람이 산다','시간이 멈춘 마을'],
    captions:{youtube:'영주 무섬마을 | 강이 360도로 감싸는 육지 속 섬마을 — 조선 고택 40채가 아직 살아있다. 경북 영주시. #무섬마을 #물돌이 #경북',instagram:'강이 마을을 360도 감싸 돈다 🏘️ 외나무다리 하나로 세상과 연결된 육지 속 섬마을. 영주 무섬마을.',tiktok:'강이 마을 360도 감싸는 육지속 섬마을 고택 40채 아직 사람삼 #무섬마을 #경북 #역사',xiaohongshu:'无心村 🏘️ 河流360度环绕的陆地孤岛 | 朝鲜时代古宅40余栋至今有人居住 | 荣州 #无心村 #韩国历史 #庆尚北道'},
    hashtags:{korean:['#한국역사','#역사여행','#경북','#전통마을','#영주'],place_specific:['#무섬마을','#물돌이마을','#외나무다리','#내성천','#집성촌']},
    map_card_intro:'강이 360도 감싸는 육지 속 섬마을 — 400년 고택 40채에 아직 사람이 산다'
  },
  {
    place_id:'GK-JN-SEO-0001', place_name:'낙안읍성',
    script_30s:{text:'600년 된 성곽 마을에 지금도 사람이 산다. 성 안에 수십 세대가 초가집에 살며 이 공간을 유지한다. 임경업 장군이 군수 시절 성을 확장했다는 기록이 남아있다. 조선시대 지방 행정과 주거 문화를 실제 생활 공간에서 체험할 수 있는 유일한 읍성이다.',char_count:127,emotion_keywords_used:['기억','생존']},
    script_60s:{text:'조선시대 읍성은 지방 행정의 중심지였다. 성곽 안에 관아가 있고, 백성들이 살았다. 그런데 대부분의 읍성은 비어있거나 허물어졌다. 낙안읍성만 다르다. 지금도 수십 세대가 성 안에서 살고 있다. 초가집에서, 600년 된 돌담 안에서. 1397년 처음 쌓였고, 임경업 장군이 군수로 있을 때 더 확장했다. 임경업이 누구인가. 병자호란 때 중국에서 청나라에 맞서 싸웠던 장군이다. 그 사람이 이 성을 키웠다. 살아있는 읍성, 낙안읍성이다.',char_count:271,emotion_keywords_used:['기억','생존','선택']},
    hooks:['600년 된 성에 지금도 사람이 산다','임경업 장군이 확장한 읍성','조선 읍성 중 유일하게 사람 사는 곳','초가집에서 600년 돌담 안에서','살아있는 조선 시대 읍성'],
    thumbnails:['600년 성에 사람이 산다','임경업의 성','살아있는 읍성','초가집 600년','조선 읍성'],
    captions:{youtube:'낙안읍성 | 600년 된 성에 아직도 사람이 산다 — 임경업 장군이 확장한 조선 읍성. 전남 순천시. #낙안읍성 #임경업 #조선읍성',instagram:'600년 된 성곽 안에 아직도 사람이 살아 🏘️ 초가집에서, 돌담 안에서. 낙안읍성.',tiktok:'600년 된 성에 지금도 사람이 사는데 #낙안읍성 #임경업 #역사',xiaohongshu:'乐安邑城 🏘️ 600年城郭内至今仍有人居住 | 林庆业将军扩建的朝鲜邑城 | 全南顺天 #乐安邑城 #韩国历史 #全罗南道'},
    hashtags:{korean:['#한국역사','#역사여행','#전남','#조선역사','#순천'],place_specific:['#낙안읍성','#임경업','#읍성','#초가집','#살아있는읍성']},
    map_card_intro:'600년 된 성에 지금도 사람이 사는 유일한 조선 읍성'
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
  lib.contents.push({id:'CL-'+String(nextNum+i).padStart(3,'0'),place_id:s.place_id,place_name:s.place_name,category_main:h.category_main||'역사',category_sub:h.category_sub||'',period_category:h.period_category||'',region:h.region||'',generated_at:now,content_status:'review_pending',script_30s:s.script_30s.text,script_60s:s.script_60s.text,emotion_keywords:[...new Set([...(s.script_30s.emotion_keywords_used||[]),...(s.script_60s.emotion_keywords_used||[])])],hooks:s.hooks,thumbnails:s.thumbnails,video_description:'',captions:s.captions,hashtags:s.hashtags,map_card_intro:s.map_card_intro,filming_ideas:[]});
});
lib.total=lib.contents.length;lib.last_updated=now;
fs.writeFileSync(base+'content/library.json',JSON.stringify(lib,null,2),'utf8');
const log=JSON.parse(fs.readFileSync(base+'logs/automation_log.json','utf8'));
log.runs.push({time:now,mode:'C',content_generated:updated,places:ids,total_scripts:lib.total});
fs.writeFileSync(base+'logs/automation_log.json',JSON.stringify(log,null,2),'utf8');
console.log('C모드 7차 완료: '+updated+'개 / 누적 콘텐츠 '+lib.total+'개');
ids.forEach((id,i)=>console.log('  C+ ['+id+'] '+scripts[i].place_name));
