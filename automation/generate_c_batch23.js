const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const scripts = [
  {place_id:'GK-GW-SAE-0002',place_name:'강릉 선교장',
   script_30s:{text:'300년 역사의 조선 상류층 가옥. 전주 이씨 집안이 10대에 걸쳐 지은 집이다. 활래정이라는 연못가 정자가 특히 아름답다. 한국 전통 가옥 중 가장 잘 보존된 곳 중 하나.',char_count:78,emotion_keywords_used:['전통','기억']},
   script_60s:{text:'강릉에 300년 된 조선 상류층 가옥이 있다. 선교장이다. 전주 이씨 이내번이 1703년 이곳에 자리를 잡고 이후 10대에 걸쳐 집을 확장했다. 총 99칸 규모. 조선 시대 사대부 가옥의 구조가 완전하게 보존된 드문 사례다. 사랑채·안채·별당·행랑채 등이 각각의 역할로 배치되어 있다. 연못가에 자리한 활래정은 강릉 최고의 정자 건물로 꼽힌다. 국가민속문화재 제5호.',char_count:254,emotion_keywords_used:['전통','기억']},
   hooks:['300년 10대가 지은 집','조선 99칸 상류 가옥','활래정 연못 정자','가장 잘 보존된 사대부 가옥','강릉의 조선 귀족 집'],
   thumbnails:['300년 역사','99칸 가옥','활래정 정자','조선 사대부집','10대의 집'],
   captions:{youtube:'강릉 선교장 | 10대에 걸쳐 지은 300년 조선 99칸 상류 가옥 — 활래정. 강원 강릉시. #선교장 #활래정 #조선가옥',instagram:'10대가 300년에 걸쳐 지은 조선 99칸 집 🏡 강릉 선교장, 활래정.',tiktok:'300년 동안 10대에 걸쳐 지은 99칸 집이 강릉에 있음 #선교장 #강릉 #조선',xiaohongshu:'江陵船桥庄 🏡 10代人历300年建造的朝鲜99间大屋 | 活来亭 | 江原江陵 #船桥庄 #朝鲜建筑 #韩国旅游'},
   hashtags:{korean:['#한국역사','#역사여행','#강원도','#조선역사','#전통가옥'],place_specific:['#선교장','#활래정','#강릉','#사대부가옥']},
   map_card_intro:'전주 이씨 10대가 300년에 걸쳐 지은 조선 99칸 상류 가옥 — 활래정이 있는 강릉의 보물'},
  {place_id:'GK-GW-SAE-0003',place_name:'강릉 경포대',
   script_30s:{text:'경포호 위에 지어진 조선 시대 누각. 율곡 이이가 이 누각에서 공부했다고 전해진다. 경포호에 달이 다섯 개 뜬다는 말이 있다. 호수, 바다, 하늘, 술잔, 눈동자에 각각 달이 뜬다.',char_count:82,emotion_keywords_used:['낭만','기억']},
   script_60s:{text:'강릉 경포호 북쪽 언덕에 누각이 있다. 경포대다. 고려 1326년 처음 지어졌다. 지금 건물은 조선 시대에 중건된 것이다. 율곡 이이가 10세에 이곳에서 경포대부를 썼다는 기록이 있다. 조선 문인들이 즐겨 찾은 관동팔경 중 하나다. 경포호에 달이 다섯 개 뜬다는 이야기가 유명하다. 호수 위 달, 바다 위 달, 하늘의 달, 술잔 속 달, 그리고 연인의 눈동자 속 달. 경관과 낭만이 함께하는 곳이다.',char_count:258,emotion_keywords_used:['낭만','기억']},
   hooks:['달이 다섯 개 뜨는 호수','율곡이 10세에 글 쓴 누각','관동팔경의 하나','호수·바다·하늘·술잔·눈동자','고려에서 시작한 누각'],
   thumbnails:['달 다섯 개','율곡의 누각','관동팔경','경포호 풍경','낭만 경포'],
   captions:{youtube:'강릉 경포대 | 달이 다섯 개 뜨는 경포호 — 율곡이 10세에 글 쓴 관동팔경. 강원 강릉시. #경포대 #경포호 #관동팔경',instagram:'달이 호수·바다·하늘·술잔·눈동자에 뜬다 🌙 강릉 경포대, 관동팔경.',tiktok:'경포호에 달이 5개 뜬다는 말 알아? 강릉 경포대 #경포대 #강릉 #경포호',xiaohongshu:'江陵镜浦台 🌙 湖·海·天·酒杯·眼中同时映出月亮 | 栗谷10岁写作之地 | 关东八景 | 江原江陵 #镜浦台 #镜浦湖 #韩国旅游'},
   hashtags:{korean:['#한국역사','#역사여행','#강원도','#조선역사','#낭만'],place_specific:['#경포대','#경포호','#강릉','#관동팔경']},
   map_card_intro:'달이 다섯 곳에 뜬다는 경포호 위 조선 누각 — 율곡이 10세에 글을 쓴 관동팔경'},
  {place_id:'GK-GW-SAJ-0001',place_name:'설악산 신흥사',
   script_30s:{text:'설악산 국립공원 안에 있는 신라 시대 사찰. 652년 자장율사가 창건했다. 국내 최대 청동 좌불상이 있다. 통일대불로 불리는 이 불상의 높이는 14.6m다.',char_count:73,emotion_keywords_used:['신앙','기억']},
   script_60s:{text:'강원도 속초 설악산 입구에 천년 고찰이 있다. 신흥사다. 652년 신라 진덕여왕 때 자장율사가 창건했다. 현재 건물은 1645년에 중건됐다. 전쟁과 화재로 여러 차례 중건을 반복했다. 경내에 국내 최대 청동 좌불상이 있다. 1997년 조성한 통일대불이다. 높이 14.6m, 폭 17m. 좌불로는 국내 최대다. 설악산 계곡을 배경으로 우뚝 선 거대한 불상이 인상적이다. 울산바위 탐방의 출발점이기도 하다.',char_count:258,emotion_keywords_used:['신앙','기억']},
   hooks:['652년 자장율사 창건','국내 최대 청동 좌불상','14.6m 통일대불','설악산 울산바위 출발점','천년 고찰의 역사'],
   thumbnails:['자장율사 창건','14.6m 통일대불','국내 최대 좌불','설악산 배경','천년 고찰'],
   captions:{youtube:'설악산 신흥사 | 652년 자장율사 창건 — 국내 최대 청동 좌불 통일대불. 강원 속초시. #신흥사 #통일대불 #설악산',instagram:'국내 최대 청동 좌불이 설악산에 있다 🏔️ 신흥사 통일대불, 14.6m.',tiktok:'설악산에 국내 최대 청동 좌불 있는 거 알아? 신흥사 통일대불 #신흥사 #설악산 #통일대불',xiaohongshu:'雪岳山新兴寺 🏔️ 652年慈藏律师创建 | 国内最大青铜坐佛统一大佛14.6m | 江原束草 #新兴寺 #统一大佛 #雪岳山'},
   hashtags:{korean:['#한국역사','#역사여행','#강원도','#불교','#설악산'],place_specific:['#신흥사','#통일대불','#설악산','#속초']},
   map_card_intro:'652년 자장율사가 창건한 설악산 천년 고찰 — 국내 최대 청동 좌불 통일대불'},
  {place_id:'GK-GW-SAJ-0002',place_name:'고성 건봉사',
   script_30s:{text:'한반도 최북단의 불교 사찰. 520년 창건됐다. 석가모니 치아 사리가 봉안된 곳으로, 한국에서 4대 적멸보궁 중 하나로 꼽힌다. 6·25전쟁 때 불탔지만 지금도 순례자들이 찾는다.',char_count:82,emotion_keywords_used:['신앙','기억']},
   script_60s:{text:'강원도 고성군 금강산 아래에 사찰이 있다. 건봉사다. 520년 신라 법흥왕 때 창건됐다. 임진왜란 때는 의승군의 거점이 됐고, 1878년 조선 최대 규모의 사찰로 성장했다. 석가모니의 치아 사리가 봉안되어 한국 4대 적멸보궁 중 하나로 꼽힌다. 6·25전쟁 때 전쟁터가 되면서 거의 모든 건물이 불탔다. 지금은 일부만 남아 있지만 지금도 많은 불교 순례자들이 찾는 성지다. 불이문이라는 거대한 문이 인상적이다.',char_count:260,emotion_keywords_used:['신앙','기억']},
   hooks:['520년 창건 한반도 북방 사찰','석가모니 치아 사리 봉안','4대 적멸보궁 중 하나','6.25 때 불탔지만 성지','금강산 아래 천년 사찰'],
   thumbnails:['520년 창건','치아 사리 봉안','4대 적멸보궁','전쟁의 흔적','금강산 아래'],
   captions:{youtube:'고성 건봉사 | 520년 창건 — 석가모니 치아 사리 봉안 4대 적멸보궁. 강원 고성군. #건봉사 #적멸보궁 #고성',instagram:'석가모니 치아 사리가 봉안된 한국 4대 적멸보궁 🛕 고성 건봉사.',tiktok:'석가모니 치아 사리 봉안된 사찰이 강원도에 있음 #건봉사 #적멸보궁 #역사',xiaohongshu:'高城乾凤寺 🛕 供奉释迦牟尼牙舍利的韩国四大寂灭宝宫之一 | 520年创建 | 江原高城 #乾凤寺 #寂灭宝宫 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#강원도','#불교','#적멸보궁'],place_specific:['#건봉사','#적멸보궁','#고성','#치아사리']},
   map_card_intro:'520년 창건 — 석가모니 치아 사리가 봉안된 한국 4대 적멸보궁'},
  {place_id:'GK-GW-SAJ-0003',place_name:'평창 월정사',
   script_30s:{text:'오대산 전나무숲 끝에 자리한 천년 고찰. 643년 자장율사가 창건했다. 팔각구층석탑이 유명하다. 전나무숲 1km 산책로와 함께 사계절 명소로 손꼽힌다.',char_count:76,emotion_keywords_used:['신앙','자연','기억']},
   script_60s:{text:'강원도 평창 오대산 계곡에 사찰이 있다. 월정사다. 643년 신라 선덕여왕 때 자장율사가 창건했다. 월정사 앞 1km의 전나무숲길은 한국에서 가장 아름다운 숲길 중 하나로 꼽힌다. 수령 100년이 넘는 전나무 1,700여 그루가 하늘을 덮는다. 사찰 앞마당에는 고려 시대 팔각구층석탑(국보)이 서 있다. 탑 앞에는 석조보살좌상이 탑을 향해 절하듯 앉아 있다. 오대산사고를 비롯해 불교 문화유산이 풍부하다.',char_count:261,emotion_keywords_used:['신앙','자연','기억']},
   hooks:['전나무숲 1km의 끝에 있는 절','643년 자장율사 창건','팔각구층석탑 국보','절하는 석조보살좌상','오대산 천년 사찰'],
   thumbnails:['전나무숲 1km','643년 창건','팔각구층석탑','절하는 보살','오대산 사찰'],
   captions:{youtube:'평창 월정사 | 643년 창건 — 전나무숲 1km와 팔각구층석탑 국보. 강원 평창군. #월정사 #전나무숲 #오대산',instagram:'전나무숲 1km 끝에 천년 사찰이 있다 🌲 평창 월정사, 팔각구층석탑.',tiktok:'전나무숲 1km 걸으면 나오는 절이 이 절임 #월정사 #전나무숲 #오대산',xiaohongshu:'平昌月精寺 🌲 1km冷杉林尽头的千年古刹 | 643年慈藏律师创建 | 八角九层石塔国宝 | 江原平昌 #月精寺 #冷杉林 #五台山'},
   hashtags:{korean:['#한국역사','#역사여행','#강원도','#불교','#오대산'],place_specific:['#월정사','#전나무숲','#평창','#팔각구층석탑']},
   map_card_intro:'전나무숲 1km를 걸으면 만나는 643년 창건 천년 고찰 — 팔각구층석탑 국보'}
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
console.log('C모드 23차: '+updated+'개 / 누적 '+lib.total+'개');
ids.forEach((id,i)=>console.log('  C+ ['+id+'] '+scripts[i].place_name));
