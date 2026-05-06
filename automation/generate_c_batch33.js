const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const scripts = [
  {place_id:'GK-SE-SAJ-0002',place_name:'봉원사',
   script_30s:{text:'조선 태조 이성계가 왕위에 오르기 전 원당으로 삼은 서울의 고찰. 영산재가 봉원사에서 이어진다. 유네스코 무형유산인 영산재를 이 절에서 볼 수 있다. 신촌 홍제천 옆 도심 속 절이다.',char_count:80,emotion_keywords_used:['신앙','기억']},
   script_60s:{text:'서울 서대문구 안산 기슭에 절이 있다. 봉원사다. 889년 도선국사가 창건했다. 이성계가 왕위에 오르기 전 이 절을 원당으로 삼았다. 조선 초기 왕실의 후원을 받은 절이다. 이 절이 현재 특히 유명한 것은 영산재 때문이다. 영산재는 불교 제례의식이다. 2009년 유네스코 무형문화유산으로 등재됐다. 봉원사가 영산재를 이어가는 중심 도량이다. 매년 봉원사에서 영산재가 거행된다. 신촌과 홍제천 사이 도심 속에 있어 접근이 쉽다.',char_count:259,emotion_keywords_used:['신앙','기억']},
   hooks:['유네스코 무형유산 영산재의 본거지','이성계가 원당으로 삼은 절','889년 도선국사 창건','도심 속 서울 천년 고찰','신촌 가까운 고찰'],
   thumbnails:['영산재 도량','이성계 원당','도선국사 창건','도심 속 고찰','유네스코 무형유산'],
   captions:{youtube:'서울 봉원사 | 유네스코 무형유산 영산재의 본거지 — 이성계 원당. 서울 서대문구. #봉원사 #영산재 #유네스코',instagram:'유네스코 무형유산 영산재가 이 절에서 이어진다 🛕 서울 봉원사, 이성계 원당.',tiktok:'유네스코 무형유산 영산재 본거지가 서울 신촌 근처에 있음 봉원사 #봉원사 #영산재 #유네스코',xiaohongshu:'首尔奉元寺 🛕 联合国教科文组织非物质文化遗产灵山斋的传承地 | 李成桂愿堂 | 首尔西大门区 #奉元寺 #灵山斋 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#서울','#불교','#유네스코'],place_specific:['#봉원사','#영산재','#이성계','#서울']},
   map_card_intro:'유네스코 무형유산 영산재를 이어가는 이성계 원당 — 서울 도심 속 천년 고찰'},
  {place_id:'GK-SE-SEO-0006',place_name:'창의문 (자하문)',
   script_30s:{text:'조선 한양 도성의 북문. 인왕산과 북악산 사이 험준한 곳에 자리한다. 일제강점기에도 철거되지 않고 온전히 남은 유일한 조선 성문이다. 4개 도성 문 중 유일하게 원형 유지.',char_count:78,emotion_keywords_used:['기억','보존']},
   script_60s:{text:'서울 종로구 창의문로에 조선 시대 성문이 있다. 창의문이다. 자하문이라고도 한다. 한양 도성의 북소문이다. 1396년 태조 때 세워졌다. 조선 도성에 4개의 소문이 있었는데 혜화문·광희문·소의문은 일제강점기 때 철거됐다. 창의문만 살아남았다. 지금도 원형 그대로 서 있다. 1623년 인조반정 때 반정군이 이 문으로 입성해 광해군을 축출했다. 역사적 사건의 현장이기도 하다. 인왕산 등산로 입구에 있어 성벽 트레킹과 함께 방문하기 좋다.',char_count:264,emotion_keywords_used:['기억','보존']},
   hooks:['일제강점기 살아남은 유일한 조선 성문','인조반정군이 통과한 문','한양 4소문 중 유일 원형','1396년 태조 때 세워진 성문','인왕산 등산로 입구'],
   thumbnails:['유일 생존 소문','인조반정 현장','태조 세운 성문','인왕산 성벽','조선 원형 성문'],
   captions:{youtube:'서울 창의문 | 일제강점기 살아남은 유일한 조선 성문 — 인조반정 통과. 서울 종로구. #창의문 #자하문 #조선성문',instagram:'4개 소문 중 일제강점기 살아남은 유일한 조선 성문 🏯 창의문, 인조반정 현장.',tiktok:'일제강점기에 조선 성문 다 철거됐는데 이것만 살아남은 창의문 #창의문 #자하문 #역사',xiaohongshu:'首尔彰义门 🏯 日占时期唯一存留的朝鲜城门 | 仁祖反正军通过的门 | 首尔钟路区 #彰义门 #朝鲜城门 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#서울','#조선역사','#도성'],place_specific:['#창의문','#자하문','#인조반정','#종로구']},
   map_card_intro:'일제강점기에도 살아남은 유일한 조선 소문 — 인조반정군이 통과한 역사의 성문'},
  {place_id:'GK-JN-GOB-0001',place_name:'나주 반남 고분군',
   script_30s:{text:'영산강 유역 마한의 수장들이 잠든 고분군. 독특한 옹관묘 형식이 특징이다. 사람을 항아리에 넣어 묻는 이 문화는 한반도 어느 곳에도 없는 독자적인 마한의 장례 문화다.',char_count:78,emotion_keywords_used:['기억','발견']},
   script_60s:{text:'전남 나주 반남 지역에 고분군이 있다. 마한의 수장층 무덤이다. 4~6세기 영산강 유역을 중심으로 활동한 마한의 지배층 묘역이다. 이 고분군의 특징은 옹관묘다. 사람을 큰 항아리에 넣어 묻는 독특한 장례 문화다. 이 옹관묘 문화는 영산강 유역에서만 나타난다. 신라·고구려·백제와 다른 독자적인 문화권이 이 땅에 있었다는 증거다. 지금도 발굴이 진행 중이다. 사적 제76·77·513호.',char_count:258,emotion_keywords_used:['기억','발견']},
   hooks:['항아리에 사람을 묻는 독특한 문화','마한의 독자적 장례 문화','영산강 유역에만 있는 옹관묘','신라·백제와 다른 제4의 문화','나주 반남의 숨겨진 역사'],
   thumbnails:['항아리 묘 문화','마한 수장 고분','영산강 독자 문화','옹관묘','제4의 문화권'],
   captions:{youtube:'나주 반남 고분군 | 항아리에 사람 묻는 마한 독자 문화 — 영산강 옹관묘. 전남 나주시. #반남고분군 #마한 #옹관묘',instagram:'사람을 항아리에 넣어 묻는 고대 문화가 나주에 있었다 🏺 반남 고분군, 마한의 무덤.',tiktok:'고대 나주에서 사람을 항아리에 넣어 묻는 문화가 있었음 반남 고분군 #반남고분군 #마한 #역사',xiaohongshu:'罗州潘南古坟群 🏺 将人放入陶缸中埋葬的马韩独自文化 | 荣山江流域独有的瓮棺墓 | 全南罗州 #潘南古坟群 #马韩 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#전라남도','#마한','#고분군'],place_specific:['#반남고분군','#마한','#옹관묘','#나주']},
   map_card_intro:'사람을 항아리에 넣어 묻는 독자적 마한 문화 — 영산강 유역의 숨겨진 역사'},
  {place_id:'GK-GB-SAE-0007',place_name:'경주 교촌마을 (최부잣집)',
   script_30s:{text:'300년 동안 만석꾼을 유지한 경주 최씨 집안의 집. 최부잣집은 흉년에 쌀을 내주고, 100리 안에 굶는 이 없게 하는 철학으로 유명하다. 조선 노블레스 오블리주의 상징이다.',char_count:80,emotion_keywords_used:['전통','나눔']},
   script_60s:{text:'경주 교동에 조선 시대 대저택이 있다. 최부잣집이다. 경주 최씨 가문이 12대에 걸쳐 300년 동안 만석꾼을 유지했다. 이 집안에는 철학이 있었다. 과거를 보되 진사 이상 출세는 하지 않는다. 재산은 만석 이상 모으지 않는다. 흉년에는 재산을 풀어 이웃을 도운다. 100리 안에 굶는 이 없게 한다. 이 원칙을 300년 동안 지켰다. 일제강점기 때는 독립운동에 재산을 내어놓기도 했다. 조선 노블레스 오블리주의 상징이다.',char_count:262,emotion_keywords_used:['전통','나눔']},
   hooks:['300년 만석꾼의 비결','100리 안 굶는 이 없게 한 원칙','조선 노블레스 오블리주','12대 걸쳐 부를 지킨 집안','독립운동에도 재산 내어놓은 가문'],
   thumbnails:['300년 만석꾼','굶는 이 없게','노블레스 오블리주','12대 가문','독립운동 재산'],
   captions:{youtube:'경주 최부잣집 | 300년 만석꾼 — 100리 굶는 이 없게 한 조선 노블레스 오블리주. 경북 경주시. #최부잣집 #교촌마을 #경주',instagram:'300년 만석꾼의 원칙은 100리 안 굶는 이 없게 하는 것이었다 🏡 경주 최부잣집.',tiktok:'300년 만석꾼 유지한 비결이 나누는 거였던 경주 최부잣집 #최부잣집 #교촌마을 #역사',xiaohongshu:'庆州崔富翁家 🏡 历经300年万石翁的原则 | 百里之内不使人挨饿 | 朝鲜贵族义务精神象征 | 庆北庆州 #崔富翁家 #教村村 #韩国历史'},
   hashtags:{korean:['#한국역사','#역사여행','#경상북도','#조선역사','#경주'],place_specific:['#최부잣집','#교촌마을','#경주','#노블레스오블리주']},
   map_card_intro:'300년 만석꾼을 지키며 100리 안 굶는 이 없게 한 조선 노블레스 오블리주의 집'},
  {place_id:'GK-GB-DOK-0001',place_name:'안동 임청각',
   script_30s:{text:'독립운동가 이상룡의 고택. 99칸 대저택인데 일제가 철로를 놓으면서 절반을 없앴다. 이상룡은 이 집을 팔아 독립운동 자금으로 쓰고 만주로 망명했다. 독립운동의 상징.',char_count:80,emotion_keywords_used:['희생','저항']},
   script_60s:{text:'경북 안동 낙동강변에 오래된 고택이 있다. 임청각이다. 1515년 조선 중종 때 건립된 99칸 대저택이다. 그런데 일제강점기 때 이 집 마당을 가로질러 철로가 놓였다. 집이 절반으로 잘려나갔다. 이 집의 주인 이상룡은 독립운동의 거인이다. 그는 이 집을 팔아 독립운동 자금으로 쓰고 가족 모두를 이끌고 만주로 망명했다. 임시정부 초대 국무령이 됐다. 집을 버리고 나라를 택한 것이다. 지금은 철로가 옮겨지고 복원 작업이 진행 중이다.',char_count:265,emotion_keywords_used:['희생','저항']},
   hooks:['이상룡이 팔아 독립운동에 쓴 집','일제가 철로로 집을 잘라냈다','99칸 저택에서 만주 망명으로','임시정부 초대 국무령의 고향 집','독립운동 위해 집 버린 가문'],
   thumbnails:['집 팔아 독립운동','철로에 잘린 고택','99칸 저택','만주 망명','초대 국무령'],
   captions:{youtube:'안동 임청각 | 이상룡이 집 팔아 독립운동 자금으로 — 일제 철로에 잘린 99칸 고택. 경북 안동시. #임청각 #이상룡 #독립운동',instagram:'이 집을 팔아 독립운동에 쓰고 만주로 망명했다 🏯 안동 임청각, 독립운동의 상징.',tiktok:'집 팔아 독립운동 자금 쓰고 만주 망명한 이상룡의 집 안동 임청각 #임청각 #이상룡 #독립운동',xiaohongshu:'安东临清阁 🏯 李相龙卖房筹集独立运动资金后流亡满洲 | 日帝铁路割断99间大宅 | 庆北安东 #临清阁 #李相龙 #独立运动'},
   hashtags:{korean:['#한국역사','#역사여행','#경상북도','#독립운동','#이상룡'],place_specific:['#임청각','#이상룡','#안동','#독립운동']},
   map_card_intro:'집을 팔아 독립운동 자금으로 쓰고 만주로 망명한 이상룡의 고택 — 임시정부 초대 국무령'}
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
console.log('C모드 33차: '+updated+'개 / 누적 '+lib.total+'개');
ids.forEach((id,i)=>console.log('  C+ ['+id+'] '+scripts[i].place_name));
