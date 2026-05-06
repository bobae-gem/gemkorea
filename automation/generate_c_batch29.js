const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const scripts = [
  {place_id:'GK-GB-SAN-0001',place_name:'칠곡 가산산성',
   script_30s:{text:'경북 칠곡 팔공산 가산에 세 개의 성벽이 겹쳐 쌓인 산성. 조선 인조 때부터 축성해 영조 때 완성한 영남의 최대 산성이다. 외성·중성·내성 3중 구조로 된 독특한 방어 체계다.',char_count:82,emotion_keywords_used:['기억','역사']},
   script_60s:{text:'경북 칠곡 팔공산 가산에 산성이 있다. 가산산성이다. 조선 인조 13년(1635년) 외성을 쌓기 시작해 숙종·영조 때 중성과 내성을 완성했다. 외성·중성·내성 3중으로 된 특이한 구조다. 경상도 전체를 방어하기 위한 영남 최대의 산성이었다. 임진왜란 이후 방어 의식이 높아지면서 조성됐다. 둘레 7.6km의 거대한 산성이다. 지금은 산성 안에 가산수도원이 있고, 성벽 트레킹 코스로 인기가 있다. 사적 제216호.',char_count:263,emotion_keywords_used:['기억','역사']},
   hooks:['외성·중성·내성 3중 구조','영남 최대 방어 산성','임진왜란 후 쌓은 조선 산성','7.6km 성벽 트레킹','팔공산 가산의 요새'],
   thumbnails:['3중 성벽','영남 최대 산성','임진왜란 후 건설','성벽 트레킹','가산 요새'],
   captions:{youtube:'칠곡 가산산성 | 외·중·내성 3중 구조 영남 최대 산성 — 7.6km 성벽 트레킹. 경북 칠곡군. #가산산성 #조선산성 #칠곡',instagram:'조선이 쌓은 영남 최대 3중 산성 🏯 칠곡 가산산성, 7.6km 성벽.',tiktok:'외성 중성 내성 3중 구조 영남 최대 산성이 경북 칠곡에 있음 #가산산성 #조선 #역사',xiaohongshu:'漆谷架山山城 🏯 外·中·内三重城墙岭南最大山城 | 7.6km城墙徒步 | 庆北漆谷 #架山山城 #朝鲜历史 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#경상북도','#조선역사','#산성'],place_specific:['#가산산성','#칠곡','#영남','#팔공산']},
   map_card_intro:'임진왜란 이후 조선이 쌓은 영남 최대 3중 구조 산성 — 7.6km 성벽 트레킹'},
  {place_id:'GK-GB-SAJ-0008',place_name:'울진 불영사',
   script_30s:{text:'651년 신라 의상대사가 창건한 사찰. 불영계곡 안에 자리 잡아 연못에 부처 모양의 바위 그림자가 비친다는 뜻의 이름이다. 30km 불영계곡 트레킹의 중심이다.',char_count:74,emotion_keywords_used:['아름다움','신앙']},
   script_60s:{text:'경북 울진 불영계곡 안에 절이 있다. 불영사다. 651년 신라 의상대사가 창건했다. 절 앞 연못에 부처 모양의 바위 그림자가 비친다는 뜻에서 불영사라는 이름이 생겼다. 절 자체도 아름답지만 오가는 길이 더 유명하다. 불영계곡이다. 30km의 계곡을 따라 기암괴석과 맑은 물이 이어진다. 명승으로 지정된 이 계곡은 동해 바다가 가까워 가을 단풍이 특히 아름답다. 절 경내에 보물 대웅보전이 있다.',char_count:258,emotion_keywords_used:['아름다움','신앙']},
   hooks:['부처 그림자가 연못에 비치는 절','30km 불영계곡 트레킹 중심','의상대사 651년 창건','계곡 안에 숨어있는 고찰','가을 단풍 명소 불영계곡'],
   thumbnails:['부처 그림자 연못','30km 계곡','의상대사 창건','계곡 속 고찰','가을 단풍'],
   captions:{youtube:'울진 불영사 | 연못에 부처 그림자 비치는 651년 창건 — 30km 불영계곡. 경북 울진군. #불영사 #불영계곡 #울진',instagram:'연못에 부처 바위 그림자가 비치는 절 🛕 울진 불영사, 30km 불영계곡.',tiktok:'연못에 부처 모양 바위 그림자 비치는 절이 경북 울진에 있음 #불영사 #불영계곡 #역사',xiaohongshu:'蔚珍佛影寺 🛕 倒映佛陀岩石影子的651年古刹 | 30km佛影溪谷 | 庆北蔚珍 #佛影寺 #佛影溪谷 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#경상북도','#불교','#계곡'],place_specific:['#불영사','#불영계곡','#울진','#의상대사']},
   map_card_intro:'연못에 부처 그림자가 비친다는 651년 창건 고찰 — 30km 불영계곡 트레킹의 중심'},
  {place_id:'GK-JN-SEO-0002',place_name:'진도 용장성',
   script_30s:{text:'삼별초가 마지막으로 저항한 성. 고려가 몽골에 항복하자 배중손이 이끄는 삼별초가 진도에 임시 정부를 세웠다. 몽골·고려 연합군에 의해 1271년 무너질 때까지 저항의 거점이었다.',char_count:84,emotion_keywords_used:['저항','기억']},
   script_60s:{text:'전남 진도에 고려 시대 산성이 있다. 용장성이다. 1270년, 고려가 몽골에 굴복하고 개경으로 환도했다. 그러자 삼별초가 반란을 일으켰다. 배중손이 이끄는 삼별초는 진도로 내려와 용장성을 쌓고 임시 정권을 세웠다. 고려 왕족을 왕으로 삼고 몽골에 저항했다. 몽골과 고려 연합군이 쳐들어왔다. 1271년 용장성이 함락됐다. 배중손이 전사했다. 삼별초는 제주도로 이동해 저항을 계속했다. 고려의 독립 의지가 마지막으로 불탄 곳이다.',char_count:268,emotion_keywords_used:['저항','기억']},
   hooks:['삼별초 마지막 저항의 성','고려가 몽골에 굴복한 후 반란','임시 정권을 세운 반란군','배중손의 최후','몽골 저항의 거점'],
   thumbnails:['삼별초 저항','고려 마지막 반란','임시 정권','배중손 전사','몽골 저항'],
   captions:{youtube:'진도 용장성 | 고려 삼별초의 마지막 저항 — 몽골에 맞선 임시 정권. 전남 진도군. #용장성 #삼별초 #고려',instagram:'몽골에 굴복 거부한 삼별초가 진도에 임시 정부를 세웠다 ⚔️ 용장성.',tiktok:'고려가 몽골에 항복하자 반란 일으켜 진도에 임시 정부 세운 삼별초 #용장성 #삼별초 #고려',xiaohongshu:'珍岛龙藏城 ⚔️ 三别抄最后抵抗蒙古的高丽临时政权所在地 | 全南珍岛 #龙藏城 #三别抄 #高丽历史'},
   hashtags:{korean:['#한국역사','#역사여행','#전라남도','#고려역사','#몽골'],place_specific:['#용장성','#삼별초','#진도','#고려']},
   map_card_intro:'고려가 몽골에 굴복하자 삼별초가 임시 정부를 세우고 저항한 마지막 거점'},
  {place_id:'GK-JN-SAE-0003',place_name:'완도 청해진',
   script_30s:{text:'장보고가 세운 해상 무역 거점. 9세기 장보고는 이 섬에 청해진을 설치하고 동아시아 해상 무역을 장악했다. 신라·중국·일본을 잇는 해상 실크로드의 중심이었다.',char_count:80,emotion_keywords_used:['업적','기억']},
   script_60s:{text:'전남 완도 장좌리 앞바다 작은 섬에 청해진이 있었다. 지금은 장도라 불린다. 828년 신라 흥덕왕 때 장보고가 청해진을 설치했다. 장보고는 당나라에서 군인으로 활약하다 신라로 돌아왔다. 신라인이 당나라에서 노예로 팔리는 것을 보고 분노해 흥덕왕에게 청해진 설치를 요청했다. 청해진은 신라·당·일본을 잇는 동아시아 해상 무역의 중심이 됐다. 장보고는 해상왕이라 불렸다. 신라 귀족에 의해 암살당할 때까지 동아시아 바다를 지배했다.',char_count:268,emotion_keywords_used:['업적','기억']},
   hooks:['동아시아 해상 무역을 장악한 장보고','해상왕 장보고의 본부','신라인 노예 구하러 설치한 기지','동아시아 실크로드 허브','암살당할 때까지 바다를 지배'],
   thumbnails:['장보고의 청해진','해상왕','신라인 노예','동아시아 허브','암살된 해상왕'],
   captions:{youtube:'완도 청해진 | 해상왕 장보고가 동아시아 무역 장악한 거점. 전남 완도군. #청해진 #장보고 #해상왕',instagram:'동아시아 바다를 장악한 해상왕 장보고의 본부 ⛵ 완도 청해진.',tiktok:'장보고가 신라인 노예 보고 분노해 세운 기지가 완도 청해진임 #청해진 #장보고 #신라',xiaohongshu:'莞岛清海镇 ⛵ 海上王张保皋掌控东亚贸易的据点 | 全南莞岛 #清海镇 #张保皋 #新罗历史'},
   hashtags:{korean:['#한국역사','#역사여행','#전라남도','#신라역사','#장보고'],place_specific:['#청해진','#장보고','#완도','#해상왕']},
   map_card_intro:'해상왕 장보고가 동아시아 무역을 장악한 9세기 해상 거점 — 장도 청해진'},
  {place_id:'GK-JB-SAJ-0002',place_name:'김제 금산사',
   script_30s:{text:'후백제 견훤이 아들에게 유폐됐던 역사의 현장. 600년대 창건된 천년 고찰로, 미륵전은 국내 유일의 3층 법당이다. 내부에 11.82m 미륵불이 모셔진 독특한 건물이다.',char_count:79,emotion_keywords_used:['역사','기억']},
   script_60s:{text:'전북 김제 모악산에 천년 고찰이 있다. 금산사다. 600년대 창건됐다. 이 절이 유명한 이유가 두 가지다. 첫째, 미륵전이다. 국내 유일의 3층 법당 건물로 국보다. 내부에 11.82m 높이 미륵불이 모셔져 있다. 둘째, 역사다. 900년 후백제를 세운 견훤이 935년 아들 신검에게 왕위를 빼앗겼다. 견훤은 이 절에 유폐됐다. 역사의 비극이 깃든 사찰이다. 유네스코 한국의 산사 후보로 검토됐다.',char_count:263,emotion_keywords_used:['역사','기억']},
   hooks:['후백제 견훤이 유폐된 절','국내 유일 3층 법당 미륵전','11.82m 미륵불이 있는 법당','아들에게 유폐된 왕의 비극','천년 고찰 금산사'],
   thumbnails:['견훤 유폐지','3층 법당 미륵전','11.82m 미륵불','아들에게 왕위 빼앗긴','천년 사찰'],
   captions:{youtube:'김제 금산사 | 후백제 견훤이 아들에게 유폐된 절 — 국내 유일 3층 미륵전. 전북 김제시. #금산사 #견훤 #미륵전',instagram:'아들에게 왕위 빼앗긴 견훤이 갇혔던 절 🛕 김제 금산사, 3층 미륵전.',tiktok:'후백제 견훤이 아들한테 왕위 빼앗기고 갇힌 절이 김제 금산사임 #금산사 #견훤 #역사',xiaohongshu:'金堤金山寺 🛕 后百济甄萱被儿子幽禁之地 | 国内唯一三层弥勒殿 | 全北金堤 #金山寺 #甄萱 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#전라북도','#고려역사','#불교'],place_specific:['#금산사','#견훤','#미륵전','#김제']},
   map_card_intro:'후백제 견훤이 아들에게 유폐된 역사의 절 — 국내 유일 3층 법당 미륵전'}
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
console.log('C모드 29차: '+updated+'개 / 누적 '+lib.total+'개');
ids.forEach((id,i)=>console.log('  C+ ['+id+'] '+scripts[i].place_name));
