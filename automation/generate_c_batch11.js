const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const scripts = [
  {place_id:'GK-IC-SAJ-0001',place_name:'전등사',script_30s:{text:'381년 고구려 아도화상이 창건한 현존 최고 사찰 중 하나. 강화도 정족산성 안에 있다. 조선왕조실록을 보관한 정족산 사고가 여기 있었다. 임진왜란에도 살아남은 대웅보전. 역사가 살아숨쉬는 천년 고찰이다.',char_count:105,emotion_keywords_used:['생존','기억','권력']},script_60s:{text:'강화도 정족산성 안에 사찰이 있다. 전등사다. 381년 고구려 아도화상이 창건했다. 현존하는 사찰 중 가장 오래된 것으로 꼽힌다. 그 오랜 시간 동안 이 사찰이 지킨 것이 있다. 조선왕조실록이다. 임진왜란이 터졌을 때 전국 네 곳에 보관된 실록이 있었다. 전주, 성주, 충주는 모두 불탔다. 오직 정족산 사고, 강화도 전등사에 보관된 것만 살아남았다. 그 덕분에 조선 왕조 500년의 기록이 지금까지 전해진다. 대웅보전은 광해군 때 중건된 보물이다.',char_count:271,emotion_keywords_used:['생존','기억','권력']},
    hooks:['유일하게 살아남은 조선왕조실록','임진왜란 때 전등사가 지킨 것','381년의 천년 고찰','조선 500년 기록을 지킨 사찰','강화도 정족산성 안의 고찰'],thumbnails:['실록을 지킨 사찰','381년 천년고찰','조선의 기록','임진왜란에도 살아남다','정족산성 안의 절'],
    captions:{youtube:'전등사 | 임진왜란 때 조선왕조실록을 지킨 유일한 사찰 — 381년 강화도 천년 고찰. #전등사 #조선왕조실록 #강화도',instagram:'임진왜란 때 다른 실록은 다 탔는데 이 사찰에 있던 것만 살아남았다 🛕 전등사.',tiktok:'임진왜란때 이 절만 조선왕조실록 지켰음 #전등사 #조선왕조실록 #역사',xiaohongshu:'传灯寺 🛕 壬辰倭乱中唯一幸存的朝鲜王朝实录保管地 | 381年江华岛千年古刹 #传灯寺 #韩国历史 #江华岛'},
    hashtags:{korean:['#한국역사','#역사여행','#강화도','#인천','#조선역사'],place_specific:['#전등사','#조선왕조실록','#정족산성','#고구려']},map_card_intro:'임진왜란에서 조선왕조실록을 지킨 유일한 사찰 — 381년 강화도 천년 고찰'},
  {place_id:'GK-IC-GWA-0001',place_name:'마니산 참성단',script_30s:{text:'해발 469m 마니산 정상에 단군이 하늘에 제사를 지냈다는 돌단이 있다. 참성단. 매년 개천절에 전통 제천행사가 열린다. 전국체전 성화가 여기서 채화된다. 단군의 전설이 지금도 이어지는 곳이다.',char_count:99,emotion_keywords_used:['기억','권력']},script_60s:{text:'강화도 마니산 정상. 해발 469m. 여기 돌로 쌓은 단이 있다. 참성단이다. 단군왕검이 하늘에 제사를 지냈다는 전설의 제천단이다. 국조 단군의 이야기가 깃든 성스러운 공간. 매년 10월 3일 개천절, 이 단에서 전통 제천행사가 열린다. 그리고 전국체전이 시작될 때마다 여기서 성화를 채화한다. 수천 년 전 단군의 제천 의식이 현대의 체육 행사와 연결되는 곳이다. 정상까지 오르는 등산로가 있으며 서해와 강화도 전경이 한눈에 펼쳐진다.',char_count:264,emotion_keywords_used:['기억','권력']},
    hooks:['단군이 하늘에 제사 지낸 그 돌단','개천절 제천행사가 열리는 곳','전국체전 성화 채화지','수천 년 전통이 이어지는 마니산','강화도 최고봉에 숨은 비밀'],thumbnails:['단군의 제천단','개천절 그 곳','성화 채화지','수천 년 전통','마니산 정상'],
    captions:{youtube:'마니산 참성단 | 단군이 하늘에 제사 지낸 돌단 — 개천절 제천행사와 전국체전 성화 채화지. 인천 강화군. #마니산 #참성단 #단군',instagram:'단군이 하늘에 제사 지냈다는 그 돌단 ⭐ 마니산 참성단, 매년 개천절 제천행사가 열린다.',tiktok:'단군이 제사지낸 돌단 여기서 전국체전 성화도 채화함 #마니산 #참성단 #역사',xiaohongshu:'摩尼山参星坛 ⭐ 檀君祭天之坛 | 每年开天节举行祭天仪式 | 仁川江华岛 #摩尼山 #韩国历史 #檀君'},
    hashtags:{korean:['#한국역사','#역사여행','#강화도','#인천','#단군'],place_specific:['#마니산','#참성단','#개천절','#전국체전']},map_card_intro:'단군이 하늘에 제사 지낸 돌단 — 개천절 제천행사와 성화 채화의 성지'},
  {place_id:'GK-IC-JEN-0002',place_name:'갑곶돈대',script_30s:{text:'1671년 쌓은 강화해협 수비 돈대. 병인양요와 신미양요 두 번의 서양 침략 때 격전지가 됐다. 지금은 강화역사박물관이 인근에 있다. 조선이 외세와 맞섰던 그 자리에 지금도 흔적이 남아있다.',char_count:96,emotion_keywords_used:['저항','생존']},script_60s:{text:'1671년, 조선은 강화해협을 지키기 위해 돈대를 쌓았다. 갑곶돈대다. 소규모 포대 방어 시설이다. 1866년 병인양요 때 프랑스 군대가 여기를 통해 강화도로 들어왔다. 5년 뒤 1871년 신미양요 때는 미국 군대가 이 해협을 건넜다. 두 번의 서양 침략에서 조선 군사들이 이 돌담 뒤에서 싸웠다. 지금도 포대와 성벽이 남아있다. 인근에 강화역사박물관이 있어 이 일대 역사를 한 번에 볼 수 있다. 조선이 문을 닫으려 했던 그 저항의 흔적이다.',char_count:265,emotion_keywords_used:['저항','생존','선택']},
    hooks:['병인양요·신미양요 격전지','프랑스와 미국이 이 해협을 건넜다','조선이 문을 닫으려 했던 자리','두 번의 서양 침략을 막으려 했던 곳','강화해협 수비 돈대의 역사'],thumbnails:['두 번의 침략','프랑스·미국 격전지','문을 닫으려 했다','저항의 흔적','갑곶돈대'],
    captions:{youtube:'갑곶돈대 | 병인양요·신미양요 격전지 — 프랑스와 미국이 이 해협을 건넜다. 인천 강화군. #갑곶돈대 #병인양요 #신미양요',instagram:'프랑스군과 미국군이 이 해협을 건넌 자리 🏴 갑곶돈대, 조선의 저항 흔적.',tiktok:'여기로 프랑스군 미군이 쳐들어왔다 갑곶돈대 #병인양요 #신미양요 #역사',xiaohongshu:'甲串墩台 🏴 丙寅洋扰·辛未洋扰激战地 | 法美军队渡过的海峡 | 仁川江华岛 #甲串墩台 #韩国历史'},
    hashtags:{korean:['#한국역사','#역사여행','#강화도','#인천','#조선역사'],place_specific:['#갑곶돈대','#병인양요','#신미양요','#강화해협']},map_card_intro:'프랑스·미국군과 두 번 싸운 강화해협 수비 돈대 — 조선의 저항 흔적'},
  {place_id:'GK-IC-SAN-0001',place_name:'강화산성',script_30s:{text:'몽골 침략에 맞서 1232년 강화도로 천도한 고려가 쌓은 산성. 38년간 왕실이 이 섬에서 버텼다. 그 동안 육지 백성들은 몽골의 약탈을 견뎌야 했다. 조선 숙종 때 석성으로 개축됐다. 총 길이 7.1km.',char_count:97,emotion_keywords_used:['생존','선택','몰락']},script_60s:{text:'1231년 몽골이 침략했다. 1232년, 고려 조정은 강화도로 도읍을 옮겼다. 강화산성을 쌓았다. 38년. 그 세월 동안 고려 왕실은 이 섬에서 버텼다. 바다를 건너지 못하는 몽골군의 약점을 이용한 것이다. 그러나 육지 백성들은 38년간 몽골의 약탈 속에서 살아야 했다. 1270년, 고려는 결국 개경으로 돌아갔다. 성은 조선 숙종 때 석성으로 새로 쌓아 지금의 모습이 됐다. 둘레 7.1km, 강화 읍성을 에워싸는 이 성벽에 고려 대몽항쟁의 역사가 담겨있다.',char_count:272,emotion_keywords_used:['생존','선택','몰락']},
    hooks:['38년 몽골 피해 이 섬에서 버텼다','왕실은 섬에서, 백성은 육지에서','고려 대몽항쟁의 핵심 거점','강화도 천도 38년의 역사','바다가 몽골을 막았다'],thumbnails:['38년 항쟁','왕실의 피신','바다가 막았다','육지 백성들은','고려의 저항'],
    captions:{youtube:'강화산성 | 38년간 몽골을 피해 섬에서 버틴 고려 왕실 — 대몽항쟁의 거점. 인천 강화군. #강화산성 #몽골항쟁 #고려역사',instagram:'왕실은 38년 섬에서 버텼고 육지 백성들은 38년 몽골에게 시달렸다 🏰 강화산성.',tiktok:'왕은 섬에서 38년 버티고 백성은 몽골에게 시달렸다 #강화산성 #고려 #몽골',xiaohongshu:'江华山城 🏰 高丽王室在岛上抵抗蒙古38年 | 大蒙古抗战据点 | 仁川江华岛 #江华山城 #韩国历史'},
    hashtags:{korean:['#한국역사','#역사여행','#강화도','#인천','#고려역사'],place_specific:['#강화산성','#대몽항쟁','#고려','#몽골침입']},map_card_intro:'38년 몽골 피해 버틴 고려 왕실의 섬 — 대몽항쟁 핵심 거점 강화산성'},
  {place_id:'GK-IC-SAJ-0002',place_name:'보문사',script_30s:{text:'635년 신라 선덕여왕 때 창건된 석모도의 천년 고찰. 낙가산 암벽에 새긴 마애석불좌상이 유명하다. 양양 낙산사, 남해 보리암과 함께 한국 3대 관음성지로 꼽힌다. 서해를 바라보는 절경 속에 있다.',char_count:102,emotion_keywords_used:['기억']},script_60s:{text:'인천 강화군 석모도. 섬 속의 섬이다. 이 섬 낙가산 중턱에 사찰이 있다. 보문사다. 635년, 신라 선덕여왕 때 회정대사가 창건했다. 천년이 넘었다. 절벽에 새긴 마애석불좌상이 핵심 유물이다. 1928년에 조성됐다. 눈썹바위 아래 석굴법당과 함께 서해를 내려다보는 위치에 새겨진 불상이다. 한국 3대 관음성지 중 하나로 양양 낙산사, 남해 보리암과 함께 꼽힌다. 서해 일몰을 배경으로 한 마애불의 풍경이 압도적이다.',char_count:261,emotion_keywords_used:['기억']},
    hooks:['한국 3대 관음성지 중 하나','절벽에 새긴 서해 바라보는 불상','석모도 천년 고찰','눈썹바위 아래 석굴법당','낙산사·보리암과 함께 3대 성지'],thumbnails:['3대 관음성지','서해 바라보는 불상','절벽의 마애불','천년 고찰','석모도 숨은 명소'],
    captions:{youtube:'보문사 | 한국 3대 관음성지 — 석모도 절벽에 새긴 서해 바라보는 마애불. 인천 강화군. #보문사 #관음성지 #석모도',instagram:'한국 3대 관음성지 중 하나 🛕 절벽에 새긴 마애불이 서해를 바라본다. 보문사.',tiktok:'낙산사 보리암이랑 함께 3대 관음성지 석모도 보문사 #보문사 #관음성지 #역사',xiaohongshu:'普门寺 🛕 韩国三大观音圣地之一 | 摩崖石佛眺望西海 | 仁川江华岛席毛岛 #普门寺 #韩国历史 #观音圣地'},
    hashtags:{korean:['#한국역사','#역사여행','#강화도','#인천','#불교'],place_specific:['#보문사','#3대관음성지','#석모도','#마애불']},map_card_intro:'한국 3대 관음성지 — 석모도 절벽에 서해를 바라보는 마애불의 천년 고찰'}
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
console.log('C모드 11차: '+updated+'개 / 누적 '+lib.total+'개');
ids.forEach((id,i)=>console.log('  C+ ['+id+'] '+scripts[i].place_name));
