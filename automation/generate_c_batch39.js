const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const scripts = [
  {place_id:'GK-GN-SAJ-0005',place_name:'합천 해인사 홍류동계곡',
   script_30s:{text:'팔만대장경이 있는 해인사 입구 계곡. 합천 가야산 홍류동 계곡을 따라 4km를 걸으면 해인사에 닿는다. 붉은 잎이 흐른다는 뜻의 홍류동. 가을 단풍이 한국에서 가장 아름다운 계곡 중 하나다.',char_count:82,emotion_keywords_used:['자연','기억']},
   script_60s:{text:'경남 합천 가야산 해인사를 찾아가는 길에 계곡이 있다. 홍류동계곡이다. 붉은 잎이 흐른다는 뜻이다. 해인사 입구에서 계곡을 따라 4km를 걷는다. 맑은 물과 기암괴석, 소나무 숲이 어우러진다. 가을이면 단풍이 물에 비쳐 온 계곡이 붉게 물든다. 고운 최치원이 이 계곡을 사랑해 바위에 이름을 새겼다. 그 바위와 글씨가 지금도 남아 있다. 농산정이라는 정자에서 최치원이 신선처럼 지냈다는 전설도 있다.',char_count:256,emotion_keywords_used:['자연','기억']},
   hooks:['해인사 가는 길 단풍 계곡','최치원이 이름 새긴 바위','붉은 잎 흐르는 홍류동','가을 단풍 한국 최고 계곡','농산정의 최치원 전설'],
   thumbnails:['해인사 단풍 계곡','최치원 바위 글씨','붉은 잎 홍류동','가을 단풍','농산정 전설'],
   captions:{youtube:'합천 홍류동계곡 | 최치원이 사랑한 해인사 가는 길 단풍 계곡. 경남 합천군. #홍류동계곡 #해인사 #최치원',instagram:'최치원이 바위에 이름 새기며 사랑한 해인사 가는 길 단풍 계곡 🍂 홍류동.',tiktok:'해인사 가는 길 최치원이 이름 새긴 단풍 계곡 합천 홍류동 #홍류동 #해인사 #단풍',xiaohongshu:'陜川红流洞溪谷 🍂 崔致远刻下名字的海印寺道路枫叶溪谷 | 庆南陜川 #红流洞 #海印寺 #韩国旅游'},
   hashtags:{korean:['#자연','#여행','#경상남도','#단풍','#계곡'],place_specific:['#홍류동계곡','#해인사','#최치원','#합천']},
   map_card_intro:'최치원이 사랑해 이름을 새긴 해인사 가는 길 — 가을 단풍이 물드는 홍류동계곡'},
  {place_id:'GK-GN-SAJ-0007',place_name:'고성 옥천사',
   script_30s:{text:'670년 의상대사가 창건한 연화산 고찰. 임진왜란 때 의승군의 거점이 됐다. 청연암·백연암·연대암 세 암자를 거느린 큰 절이다. 연화산 도립공원 안에 있어 경관이 빼어나다.',char_count:76,emotion_keywords_used:['신앙','기억']},
   script_60s:{text:'경남 고성 연화산에 절이 있다. 옥천사다. 670년 신라 의상대사가 창건했다. 당나라 유학에서 돌아와 화엄학을 강론하기 위해 세운 절이다. 임진왜란 때 이 절이 구국 승병의 군영 역할을 했다. 청연암·백연암·연대암 세 암자가 딸린 대찰이다. 경내에 보물 지장보살도와 동종이 있다. 연화산 도립공원 깊은 계곡 안에 자리해 경관이 빼어나다. 고성 공룡발자국 화석지와 함께 고성 여행의 코스로 꼽힌다.',char_count:256,emotion_keywords_used:['신앙','기억']},
   hooks:['의상대사 670년 창건 호국사찰','임진왜란 의승군 군영','세 암자 거느린 연화산 대찰','보물 지장보살도','고성 공룡과 함께하는 여행'],
   thumbnails:['의상대사 창건','의승군 군영','세 암자 대찰','보물 지장보살','연화산 계곡'],
   captions:{youtube:'고성 옥천사 | 670년 의상대사 창건 — 임진왜란 의승군 거점. 경남 고성군. #옥천사 #의상대사 #의승군',instagram:'670년 의상대사가 세운 절이 임진왜란 때 의승군 군영이 됐다 🛕 고성 옥천사.',tiktok:'의상대사 세운 절이 임진왜란 의승군 군영이 된 고성 옥천사 #옥천사 #의상대사 #역사',xiaohongshu:'固城玉泉寺 🛕 670年义湘大师创建 | 壬辰倭乱义僧军军营 | 庆南固城 #玉泉寺 #义湘大师 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#경상남도','#불교','#의상대사'],place_specific:['#옥천사','#의상대사','#고성','#의승군']},
   map_card_intro:'670년 의상대사 창건 — 임진왜란 구국 의승군의 거점이 된 연화산 고찰'},
  {place_id:'GK-JN-SAJ-0006',place_name:'구례 화엄사',
   script_30s:{text:'지리산 노고단 아래 544년 창건된 화엄종의 성지. 각황전(국보)은 조선 최대의 불전이다. 사사자삼층석탑(국보), 각황전 앞 석등(국보) 등 국보만 세 개다.',char_count:76,emotion_keywords_used:['신앙','기억']},
   script_60s:{text:'전남 구례 지리산 노고단 아래에 절이 있다. 화엄사다. 544년 인도 승려 연기화상이 창건했다고 전한다. 신라 때 의상대사가 중창해 화엄학의 중심이 됐다. 각황전은 조선 시대 불전으로 국내 최대 규모다. 국보다. 사사자삼층석탑도 국보다. 네 마리 사자 위에 스님 한 명이 합장하고 있는 독특한 형태다. 각황전 앞 석등도 국보다. 국보가 세 개인 절이다. 2018년 유네스코 세계유산 한국의 산사로 등재됐다.',char_count:258,emotion_keywords_used:['신앙','기억']},
   hooks:['국보 세 개인 사찰','조선 최대 불전 각황전','사사자삼층석탑 독특한 형태','544년 인도 승려 창건','유네스코 한국의 산사'],
   thumbnails:['국보 세 개','최대 불전 각황전','사사자 석탑','인도 승려 창건','유네스코'],
   captions:{youtube:'구례 화엄사 | 국보 세 개 — 조선 최대 불전 각황전. 전남 구례군. #화엄사 #각황전 #유네스코',instagram:'국보가 세 개인 절 화엄사 🛕 조선 최대 불전 각황전·사사자삼층석탑·석등.',tiktok:'국보 세 개 있는 절 구례 화엄사 각황전 사사자석탑 석등 #화엄사 #국보 #유네스코',xiaohongshu:'求礼华严寺 🛕 3件国宝的寺院 | 朝鲜最大佛殿觉皇殿 | 联合国教科文组织 | 全南求礼 #华严寺 #觉皇殿 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#전라남도','#불교','#유네스코'],place_specific:['#화엄사','#각황전','#구례','#한국의산사']},
   map_card_intro:'국보 세 개가 있는 지리산 화엄종의 성지 — 유네스코 세계유산'},
  {place_id:'GK-JN-SAJ-0007',place_name:'순천 송광사',
   script_30s:{text:'16명의 국사를 배출한 승보 사찰. 불·법·승 삼보 사찰 중 승보 사찰이 이곳이다. 보조국사 지눌이 이 절을 조계종의 본산으로 키웠다. 유네스코 세계유산 한국의 산사.',char_count:75,emotion_keywords_used:['신앙','기억']},
   script_60s:{text:'전남 순천 조계산에 절이 있다. 송광사다. 삼보 사찰 중 하나다. 불보는 통도사, 법보는 해인사, 승보는 송광사다. 승보란 스님을 가장 중시하는 절이라는 뜻이다. 고려 때 보조국사 지눌이 이 절을 대대적으로 중창했다. 이후 16명의 국사가 이 절에서 배출됐다. 이 숫자는 조선 전체에서 가장 많다. 경내에 16국사의 진영각이 있다. 국보 4개, 보물 40여 개가 있다. 유네스코 세계유산.',char_count:257,emotion_keywords_used:['신앙','기억']},
   hooks:['16명 국사 배출 승보 사찰','삼보 사찰 중 승보','보조국사 지눌의 터전','국보 4개 보물 40개','유네스코 한국의 산사'],
   thumbnails:['16명 국사','삼보 중 승보','지눌의 터전','국보 4개','유네스코'],
   captions:{youtube:'순천 송광사 | 16명 국사 배출 — 삼보 중 승보 사찰. 전남 순천시. #송광사 #승보사찰 #유네스코',instagram:'16명의 국사를 배출한 삼보 사찰 🛕 순천 송광사, 승보 사찰.',tiktok:'16명 국사 배출한 승보 사찰 순천 송광사 #송광사 #승보사찰 #유네스코',xiaohongshu:'顺天松广寺 🛕 培育16位国师的三宝寺院之僧宝寺 | 联合国教科文组织 | 全南顺天 #松广寺 #僧宝寺 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#전라남도','#불교','#유네스코'],place_specific:['#송광사','#승보사찰','#순천','#한국의산사']},
   map_card_intro:'16명의 국사를 배출한 삼보 사찰의 승보 사찰 — 유네스코 세계유산'},
  {place_id:'GK-JB-DOK-0002',place_name:'군산 근대역사거리',
   script_30s:{text:'일제강점기 일본인들이 건설한 건물들이 고스란히 남아 있는 군산. 조선은행·미즈상사 등 근대 건물들이 골목마다 서 있다. 일제강점기 수탈의 역사와 근대 건축이 공존하는 도시다.',char_count:80,emotion_keywords_used:['기억','역사']},
   script_60s:{text:'전북 군산에 일제강점기 건물들이 남아 있다. 근대역사거리다. 1920~30년대 일본인들이 지은 건물들이 거리에 즐비하다. 조선은행 군산지점(현 군산근대건축관), 미즈상사 등 근대 건축물들이다. 군산은 쌀 수탈의 항구도시였다. 전라도 쌀이 이 항구를 통해 일본으로 건너갔다. 그 역사의 흔적들이 건물로 남아 있다. 구불길 산책로와 맛집이 어우러져 지금은 관광지가 됐다. 채만식의 탁류가 이 도시를 배경으로 한다.',char_count:258,emotion_keywords_used:['기억','역사']},
   hooks:['일제강점기 건물 그대로 남은 도시','쌀 수탈 역사의 항구 군산','1920년대 근대 건축 거리','탁류 소설의 배경','근대 역사 거리 산책'],
   thumbnails:['일제강점기 건물','수탈 항구 도시','1920년대 근대','탁류 배경','근대 거리 산책'],
   captions:{youtube:'군산 근대역사거리 | 일제강점기 건물 그대로 — 쌀 수탈 항구의 역사. 전북 군산시. #군산 #근대역사 #일제강점기',instagram:'일제강점기 건물들이 그대로 남은 거리 🏛️ 군산 근대역사거리, 수탈의 역사.',tiktok:'일제강점기 건물 그대로 남은 도시 군산 근대역사거리 #군산 #일제강점기 #역사',xiaohongshu:'群山近代历史街道 🏛️ 日占时期建筑保存至今 | 大米掠夺港口的历史 | 全北群山 #群山 #近代历史 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#전라북도','#일제강점기','#근대역사'],place_specific:['#군산','#근대역사','#일제강점기','#탁류']},
   map_card_intro:'일제강점기 건물들이 고스란히 남은 쌀 수탈 항구 — 군산 근대역사거리'}
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
console.log('C모드 39차: '+updated+'개 / 누적 '+lib.total+'개');
ids.forEach((id,i)=>console.log('  C+ ['+id+'] '+scripts[i].place_name));
