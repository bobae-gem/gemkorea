const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';
const scripts = [
  {place_id:'GK-GW-MTN-0001',place_name:'설악산',
   script_30s:{text:'한국 최고의 산. 유네스코 생물권보전지역. 공룡능선·울산바위·천불동계곡·비선대 등 절경이 가득하다. 봄 철쭉, 여름 계곡, 가을 단풍, 겨울 설경 — 사계절이 모두 다른 얼굴이다.',char_count:81,emotion_keywords_used:['경이','자연']},
   script_60s:{text:'강원도 속초·인제·양양에 걸쳐 있는 산이다. 설악산. 해발 1,708m의 대청봉이 최고봉이다. 한국 사람이 가장 사랑하는 산 중 하나다. 공룡능선은 날카로운 바위 능선이 용의 등뼈처럼 이어진다. 울산바위는 6개 봉우리가 연결된 거대한 화강암 암봉이다. 천불동계곡의 기암괴석이 장관이다. 봄 철쭉, 여름 계곡, 가을 단풍, 겨울 눈꽃. 사계절 모두 다른 절경이다. 1982년 유네스코 생물권보전지역으로 지정됐다.',char_count:263,emotion_keywords_used:['경이','자연']},
   hooks:['공룡능선 울산바위 천불동 절경','사계절 다른 얼굴의 산','유네스코 생물권보전지역','한국인이 가장 사랑하는 산','대청봉 1708m'],
   thumbnails:['공룡능선','울산바위','천불동계곡','사계절 절경','대청봉'],
   captions:{youtube:'설악산 | 공룡능선·울산바위·천불동 — 한국 최고의 산 유네스코. 강원 속초·인제·양양. #설악산 #공룡능선 #유네스코',instagram:'한국인이 가장 사랑하는 산 사계절 다른 얼굴 🏔️ 설악산, 공룡능선·울산바위.',tiktok:'설악산 공룡능선 울산바위 천불동 절경 사계절 다 다름 #설악산 #공룡능선 #유네스코',xiaohongshu:'雪岳山 🏔️ 恐龙棱线·蔚山岩·千佛洞绝景 | 联合国教科文组织生物圈保护区 | 江原 #雪岳山 #恐龙棱线 #韩国旅游'},
   hashtags:{korean:['#자연','#여행','#강원도','#산','#설악산'],place_specific:['#설악산','#공룡능선','#울산바위','#유네스코']},
   map_card_intro:'공룡능선·울산바위·천불동계곡의 절경 — 사계절 모두 다른 얼굴의 유네스코 생물권보전지역'},
  {place_id:'GK-JN-MTN-0001',place_name:'지리산',
   script_30s:{text:'한국 최초의 국립공원. 섬진강과 남해 사이에 우뚝 솟은 한반도 내륙 최고봉 천왕봉(1,915m). 8도에 걸쳐 있으며 노고단·반야봉·천왕봉이 웅장하다. 지리산 둘레길로도 유명하다.',char_count:82,emotion_keywords_used:['경이','자연']},
   script_60s:{text:'전남·전북·경남에 걸쳐 있는 산이다. 지리산. 한반도 내륙에서 가장 높은 산이다. 천왕봉 1,915m. 한국 최초의 국립공원이다. 1967년 지정됐다. 노고단에서 반야봉을 거쳐 천왕봉까지 주능선이 약 40km에 달한다. 피아골·뱀사골 등 깊은 계곡이 있다. 지리산 둘레길은 3개도 5개 시군을 돌아다니는 300km의 장거리 트레킹 코스다. 운해와 일출이 특히 장관이다.',char_count:256,emotion_keywords_used:['경이','자연']},
   hooks:['한국 최초 국립공원','천왕봉 1915m 내륙 최고봉','노고단부터 천왕봉 40km 주능선','피아골 뱀사골 깊은 계곡','지리산 둘레길 300km'],
   thumbnails:['최초 국립공원','천왕봉 1915m','40km 주능선','피아골 계곡','둘레길 300km'],
   captions:{youtube:'지리산 | 한국 최초 국립공원 천왕봉 1,915m. 전남·전북·경남. #지리산 #천왕봉 #국립공원',instagram:'한국 최초 국립공원 천왕봉 1,915m 노고단에서 시작되는 40km 주능선 🏔️ 지리산.',tiktok:'한국 최초 국립공원 지리산 천왕봉이 1915m 내륙 최고봉임 #지리산 #천왕봉 #국립공원',xiaohongshu:'智异山 🏔️ 韩国最初国立公园·天王峰1915m内陆最高峰 | 全南全北庆南 #智异山 #天王峰 #韩国旅游'},
   hashtags:{korean:['#자연','#여행','#국립공원','#지리산','#트레킹'],place_specific:['#지리산','#천왕봉','#노고단','#지리산둘레길']},
   map_card_intro:'한국 최초 국립공원 — 천왕봉 1,915m 내륙 최고봉의 40km 대종주 코스'},
  {place_id:'GK-JJ-MTN-0001',place_name:'한라산',
   script_30s:{text:'제주의 어머니 산. 남한 최고봉 1,950m. 백록담 분화구에 에메랄드 호수가 있다. 유네스코 세계자연유산이자 생물권보전지역. 성판악·관음사 두 코스로 정상에 오를 수 있다.',char_count:79,emotion_keywords_used:['경이','자연']},
   script_60s:{text:'제주 한가운데 솟아있는 산이다. 한라산. 남한 최고봉이다. 해발 1,950m. 정상에 백록담이라는 분화구 호수가 있다. 에메랄드빛 물이 담긴다. 2002년 유네스코 세계자연유산으로 등재됐다. 2002년 생물권보전지역, 2010년 세계지질공원으로 등재됐다. 유네스코 3관왕이다. 성판악 코스(9.6km)와 관음사 코스(8.7km)로 정상에 오를 수 있다. 구상나무 군락지가 유명하다.',char_count:255,emotion_keywords_used:['경이','자연']},
   hooks:['남한 최고봉 1950m','백록담 에메랄드 분화구 호수','유네스코 3관왕','세계자연유산 생물권보전 세계지질공원','성판악 관음사 코스'],
   thumbnails:['최고봉 1950m','백록담','유네스코 3관왕','구상나무','성판악 코스'],
   captions:{youtube:'한라산 | 남한 최고봉 — 백록담·유네스코 3관왕. 제주. #한라산 #백록담 #유네스코',instagram:'남한 최고봉 한라산 1,950m 백록담 에메랄드 호수 🌋 유네스코 3관왕.',tiktok:'한라산이 유네스코 3관왕인 거 알아? 세계자연유산 생물권보전 세계지질공원 #한라산 #백록담 #유네스코',xiaohongshu:'汉拿山 🌋 南韩最高峰1950m·白鹿潭翡翠分火口 | 联合国教科文组织三冠王 | 济州 #汉拿山 #白鹿潭 #韩国旅游'},
   hashtags:{korean:['#자연','#여행','#제주','#한라산','#유네스코'],place_specific:['#한라산','#백록담','#성판악','#유네스코']},
   map_card_intro:'남한 최고봉 1,950m — 백록담 분화구 호수와 유네스코 3관왕 한라산'},
  {place_id:'GK-GW-MTN-0002',place_name:'오대산',
   script_30s:{text:'강원도 평창·홍천에 걸쳐 있는 불교의 성지. 비로봉(1,563m)이 최고봉이다. 월정사·상원사·적멸보궁이 있어 불교 신자들의 순례지다. 전나무숲길이 유명하다.',char_count:72,emotion_keywords_used:['신앙','자연']},
   script_60s:{text:'강원도 평창·홍천에 걸쳐 있는 산이다. 오대산. 비로봉이 최고봉 1,563m다. 신라 때부터 불교 성지였다. 오대산이라는 이름은 다섯 개의 대(臺)에 각각 부처님이 머문다는 불교 전설에서 왔다. 문수보살·보현보살 등이 머문다는 것이다. 월정사·상원사·적멸보궁이 있어 불교 신자들의 순례지다. 월정사 전나무숲길 1km가 특히 아름답다. 오대산 선재길 9km도 유명하다. 유네스코 생물권보전지역이다.',char_count:259,emotion_keywords_used:['신앙','자연']},
   hooks:['다섯 부처님 머무는 불교 성지','월정사 전나무숲 1km','선재길 9km 트레킹','유네스코 생물권보전지역','월정사 상원사 적멸보궁'],
   thumbnails:['불교 성지','전나무숲 1km','선재길 9km','유네스코','월정사 상원사'],
   captions:{youtube:'오대산 | 다섯 부처님 머무는 불교 성지 — 월정사 전나무숲. 강원 평창·홍천. #오대산 #월정사 #전나무숲',instagram:'다섯 부처님이 머무는 불교 성지 오대산 🌲 월정사 전나무숲길 1km.',tiktok:'오대산이 다섯 부처님 머무는 곳이라 오대산인 거 알아? #오대산 #월정사 #전나무숲',xiaohongshu:'五台山 🌲 五位佛陀居住的佛教圣地 | 月精寺冷杉林1km | 江原平昌洪川 #五台山 #月精寺 #韩国旅游'},
   hashtags:{korean:['#자연','#여행','#강원도','#불교','#오대산'],place_specific:['#오대산','#월정사','#전나무숲','#선재길']},
   map_card_intro:'다섯 부처님이 머문다는 불교 성지 — 월정사 전나무숲과 선재길의 오대산'},
  {place_id:'GK-GW-MTN-0003',place_name:'태백산',
   script_30s:{text:'민족의 영산 태백산. 천제단에서 해마다 하늘에 제사를 지낸다. 주목 군락지와 고사리 군락지가 유명하다. 단군이 처음 하늘에 제사를 지낸 산이라는 전설이 있다.',char_count:72,emotion_keywords_used:['전통','자연']},
   script_60s:{text:'강원도 태백에 산이 있다. 태백산이다. 해발 1,567m. 민족의 영산이라 불린다. 정상에 천제단이 있다. 단군이 처음 하늘에 제사를 지냈다는 전설의 제단이다. 지금도 매년 개천절에 제사를 지낸다. 주목 군락지가 유명하다. 수백 년 된 주목 나무들이 능선에 늘어서 있다. 겨울 설산이 특히 아름답다. 2016년 국립공원으로 승격됐다. 한강·낙동강·오십천의 발원지이기도 하다.',char_count:255,emotion_keywords_used:['전통','자연']},
   hooks:['단군이 제사 지낸 천제단','민족의 영산 백두대간','주목 군락지 겨울 설산','한강 낙동강 발원지','개천절 제사 지내는 산'],
   thumbnails:['천제단 제사','민족의 영산','주목 군락지','겨울 설산','강 발원지'],
   captions:{youtube:'태백산 | 단군 천제단 민족의 영산 — 주목 군락 겨울 설산. 강원 태백시. #태백산 #천제단 #주목',instagram:'단군이 하늘에 제사 지낸 천제단이 있는 민족의 영산 🏔️ 태백산.',tiktok:'단군이 제사 지낸 천제단 지금도 개천절에 제사 지내는 태백산 #태백산 #천제단 #민족영산',xiaohongshu:'太白山 🏔️ 檀君向天祭祀的天祭坛 | 民族圣山 | 紫衫木群落冬日雪山 | 江原太白 #太白山 #天祭坛 #韩国旅游'},
   hashtags:{korean:['#자연','#여행','#강원도','#태백산','#백두대간'],place_specific:['#태백산','#천제단','#주목','#민족영산']},
   map_card_intro:'단군이 처음 하늘에 제사를 지낸 천제단이 있는 민족의 영산 — 태백산'}
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
console.log('C모드 49차: '+updated+'개 / 누적 '+lib.total+'개');
ids.forEach((id,i)=>console.log('  C+ ['+id+'] '+scripts[i].place_name));
