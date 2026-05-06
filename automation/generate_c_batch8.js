const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';

const scripts = [
  {
    place_id:'GK-SE-GUN-0003', place_name:'창경궁',
    script_30s:{text:'성종은 세 명의 대비를 위해 1483년 궁을 지었다. 창경궁이다. 일제강점기에 동물원과 식물원으로 격하됐다. 조선의 궁궐이 유원지가 된 것이다. 1983년 복원됐지만, 그 치욕의 시간은 이미 역사가 됐다.',char_count:104,emotion_keywords_used:['몰락','기억','권력']},
    script_60s:{text:'성종은 생모 소혜왕후를 포함한 세 명의 대비를 위해 1483년 창경궁을 지었다. 효심의 공간이었다. 그런데 1909년, 일제가 이 궁에 동물원과 식물원을 만들었다. 조선 왕실의 궁궐이 구경거리가 됐다. 창경원이라는 이름으로 불렸다. 밤에는 조명을 켜고 벚꽃 관람을 했다. 조선 왕조를 조롱하는 방식이었다. 1983년, 동물원을 서울대공원으로 옮기고 본래 궁궐 모습으로 복원됐다. 지금은 창덕궁과 붙어있는 하나의 궁역으로 서울 시민들이 즐겨 찾는다.',char_count:268,emotion_keywords_used:['몰락','기억','권력','배신']},
    hooks:['효심의 궁이 동물원이 됐다','일제가 조선 궁궐에 동물을 풀었다','창경원이 다시 창경궁이 되기까지','세 대비를 위해 지은 궁의 운명','1983년까지 동물원이었던 조선 궁궐'],
    thumbnails:['동물원이 된 궁궐','효심의 공간','창경원의 치욕','복원의 역사','조선 궁이 유원지로'],
    captions:{youtube:'창경궁 | 효심의 궁이 일제 동물원이 됐다가 복원된 이야기. 서울 종로구. #창경궁 #일제강점기 #조선궁궐',instagram:'조선 궁궐이 동물원이 됐다 🏯 1909년 일제가 창경궁에 동물원을 만들었다. 1983년 복원.',tiktok:'조선 왕의 궁에 동물원을 만든 일제 #창경궁 #일제강점기 #역사',xiaohongshu:'昌庆宫 🏯 孝心之宫沦为日据时期动物园 | 1983年复原 | 首尔历史宫殿 #昌庆宫 #韩国历史 #首尔'},
    hashtags:{korean:['#한국역사','#역사여행','#서울','#조선역사','#일제강점기'],place_specific:['#창경궁','#성종','#창경원','#복원']},
    map_card_intro:'효심의 궁이 일제 동물원이 됐다가 다시 궁으로 — 창경궁의 굴욕과 복원'
  },
  {
    place_id:'GK-SE-GUN-0004', place_name:'덕수궁',
    script_30s:{text:'고종은 아관파천 후 러시아 공사관에서 돌아와 이 궁을 황궁으로 삼았다. 대한제국을 선포했다. 그리고 1905년, 을사늑약이 이 궁에서 강제로 체결됐다. 조선의 마지막 황제가 머물렀던 곳에서 나라가 사라지는 과정이 시작됐다.',char_count:117,emotion_keywords_used:['몰락','선택','두려움']},
    script_60s:{text:'1896년, 일본의 눈을 피해 고종은 러시아 공사관으로 피신했다. 1년 뒤 돌아올 때 선택한 곳이 경운궁, 지금의 덕수궁이다. 여기서 대한제국을 선포했다. 황제가 됐다. 그런데 1905년, 이 궁에서 을사늑약이 강제로 맺어졌다. 외교권이 일본에 넘어갔다. 이토 히로부미가 왔다. 고종은 거부했지만 막을 수 없었다. 지금도 덕수궁 안을 걸으면 서양식 석조전과 전통 전각이 뒤섞여 있다. 근대와 전통 사이에서 나라를 잃어가던 그 시절의 풍경 그대로다.',char_count:283,emotion_keywords_used:['몰락','선택','두려움','기억']},
    hooks:['대한제국을 선포한 궁에서 나라를 잃었다','을사늑약이 체결된 그 건물','고종이 러시아 공사관에서 돌아온 이유','서양식 건물과 전통 전각이 섞인 이유','근대와 전통 사이에서 망한 나라의 궁'],
    thumbnails:['대한제국 선포지','을사늑약의 현장','근대와 전통 사이','고종의 마지막 궁','나라가 사라진 곳'],
    captions:{youtube:'덕수궁 | 대한제국을 선포한 궁에서 을사늑약이 체결됐다 — 고종의 마지막 선택. 서울 중구. #덕수궁 #고종 #을사늑약',instagram:'대한제국을 선포한 궁에서 나라를 잃었다 🏛️ 을사늑약이 체결된 덕수궁.',tiktok:'대한제국 선포하고 을사늑약 당한 궁 #덕수궁 #고종 #을사늑약',xiaohongshu:'德寿宫 🏛️ 宣布大韩帝国的宫殿里签下了乙巳条约 | 高宗的最后选择 | 首尔近代历史 #德寿宫 #韩国历史'},
    hashtags:{korean:['#한국역사','#역사여행','#서울','#근대역사','#대한제국'],place_specific:['#덕수궁','#고종','#을사늑약','#아관파천','#대한제국']},
    map_card_intro:'대한제국 선포지, 을사늑약 체결지 — 근대와 전통이 뒤섞인 고종의 마지막 궁'
  },
  {
    place_id:'GK-SE-RYU-0001', place_name:'종묘',
    script_30s:{text:'조선 왕과 왕비의 신위를 모신 사당. 세계에서 가장 긴 목조 건물 중 하나인 정전이 여기 있다. 여기서 매년 종묘제례가 열린다. 제례악은 유네스코 인류무형유산이다. 죽은 왕들이 여전히 제사를 받는 곳이다.',char_count:107,emotion_keywords_used:['권력','기억']},
    script_60s:{text:'조선은 왕이 죽으면 신위를 종묘에 모셨다. 그리고 제사를 지냈다. 지금도 매년 5월 첫 번째 일요일에 종묘제례가 열린다. 500년이 지난 지금도 조선 왕들에게 제사를 지낸다. 정전은 한 칸 한 칸 신실이 이어진 세계에서 가장 긴 목조 건물 중 하나다. 조선의 모든 왕과 왕비가 여기 있다. 제례 때는 종묘제례악이 울린다. 이 음악은 세종 때 만들어졌으며 유네스코 인류무형유산이다. 건물도 유네스코, 음악도 유네스코. 살아있는 왕실 제례 전통이다.',char_count:274,emotion_keywords_used:['권력','기억']},
    hooks:['조선 왕들에게 지금도 제사를 지낸다','세계에서 가장 긴 목조 건물','건물도 유네스코 음악도 유네스코','500년 전 왕들이 아직 이곳에','종묘제례가 지금도 열리는 이유'],
    thumbnails:['500년 제사가 계속된다','세계 최장 목조건물','건물도 음악도 유네스코','조선 왕들이 여기 있다','살아있는 전통'],
    captions:{youtube:'종묘 | 500년 뒤에도 조선 왕에게 제사를 지낸다 — 세계에서 가장 긴 목조 건물. 서울 종로구. #종묘 #종묘제례 #유네스코',instagram:'조선 왕들에게 지금도 제사를 지낸다 👑 건물도 유네스코, 음악도 유네스코. 종묘.',tiktok:'500년뒤에도 조선왕한테 제사지내는 곳 #종묘 #종묘제례 #유네스코',xiaohongshu:'宗庙 👑 500年后仍祭祀朝鲜国王 | 世界最长木造建筑 | 联合国教科文组织世界遗产 #宗庙 #韩国历史 #首尔'},
    hashtags:{korean:['#한국역사','#역사여행','#서울','#조선역사','#유네스코'],place_specific:['#종묘','#종묘제례','#종묘제례악','#세종']},
    map_card_intro:'500년째 제사를 지내는 조선 왕들의 사당 — 세계 최장 목조 건물'
  },
  {
    place_id:'GK-SE-SEO-0002', place_name:'숭례문',
    script_30s:{text:'1396년 세워진 국보 제1호. 2008년 방화로 잿더미가 됐다. 전국이 충격에 빠졌다. 5년의 복원 작업, 2013년 다시 섰다. 그런데 복원 과정에서 전통 방식이 일부 지켜지지 않아 논란이 됐다. 국보가 불타고 복원되는 과정이 모두 역사가 됐다.',char_count:117,emotion_keywords_used:['몰락','기억','생존']},
    script_60s:{text:'1396년, 태조 이성계가 세운 한양도성 남쪽 대문. 국보 제1호였다. 600년이 넘는 시간을 버텼다. 그런데 2008년 2월 10일 밤, 방화로 불이 났다. 누각 전체가 타내렸다. 전국이 충격에 빠졌다. 600년 국보가 하룻밤에 사라진 것이다. 5년에 걸친 복원 작업이 시작됐다. 2013년 5월, 다시 섰다. 그런데 복원 과정에서 전통 단청 기법이 일부 지켜지지 않아 논란이 일었다. 훼손과 복원, 그 사이에서 무엇을 지키는가. 국보 제1호가 던진 질문이다.',char_count:278,emotion_keywords_used:['몰락','기억','생존','선택']},
    hooks:['600년 국보가 하룻밤에 불탔다','방화로 무너진 그 날 밤','복원 과정에서 전통을 지켰을까','국보 제1호가 던진 질문','2008년 2월 10일에 무슨 일이'],
    thumbnails:['600년 국보가 탔다','그날 밤','5년의 복원','전통을 지켰을까','국보의 질문'],
    captions:{youtube:'숭례문 | 600년 국보가 하룻밤에 불탔다 — 2008년 방화 사건과 복원 이야기. 서울 중구. #숭례문 #방화 #국보제1호',instagram:'600년 국보가 2008년 하룻밤에 불탔다 🏯 5년 복원 끝에 다시 섰지만 논란은 계속됐다.',tiktok:'600년 국보 하룻밤에 불타는거봄 2008년 #숭례문 #방화 #국보',xiaohongshu:'崇礼门 🏯 600年国宝在一夜之间被烧毁 | 2008年纵火事件 | 5年复原工程 | 首尔南大门 #崇礼门 #韩国历史 #首尔'},
    hashtags:{korean:['#한국역사','#역사여행','#서울','#조선역사','#국보'],place_specific:['#숭례문','#남대문','#방화','#국보제1호']},
    map_card_intro:'600년 국보가 하룻밤에 불탔다 — 방화와 복원, 국보 제1호 숭례문'
  },
  {
    place_id:'GK-SE-SEO-0003', place_name:'흥인지문',
    script_30s:{text:'속칭 동대문. 보물 제1호. 조선 태조가 1398년 세운 한양도성 동쪽 대문이다. 현존하는 성문 중 유일하게 반원형 옹성을 갖추고 있다. 그 앞에 동대문 패션타운이 생겼다. 600년 성문과 현대 패션몰이 공존하는 서울의 풍경이다.',char_count:113,emotion_keywords_used:['기억','생존']},
    script_60s:{text:'태조 이성계가 1398년 세운 한양도성의 동쪽 대문. 동대문이라는 별칭이 더 유명하지만 정식 이름은 흥인지문이다. 현존하는 한양도성 성문 중 유일하게 반원형 옹성을 두른 성문이다. 옹성은 성문 앞에 또 하나의 반원형 방어벽을 두는 것이다. 적이 성문에 바로 접근하지 못하게 하는 구조다. 보물 제1호. 그 앞에는 지금 동대문 패션타운이 있다. 600년 된 보물 성문과 패션 플래그십 스토어가 같은 자리에 있다. 서울만의 풍경이다.',char_count:263,emotion_keywords_used:['기억','생존']},
    hooks:['600년 성문과 패션타운이 공존하는 곳','현존 성문 중 유일한 반원형 옹성','동대문이 흥인지문인 이유','옹성은 무엇이고 왜 만들었나','보물 제1호가 패션 타운 옆에'],
    thumbnails:['600년과 현대','유일한 반원형 옹성','동대문 이름의 비밀','옹성의 기능','보물 옆 패션타운'],
    captions:{youtube:'흥인지문 | 600년 성문과 동대문 패션타운이 공존하는 서울의 풍경. 서울 종로구. #흥인지문 #동대문 #한양도성',instagram:'600년 된 보물 성문 바로 옆에 패션 플래그십 스토어가 있다 🏯 흥인지문, 서울만의 풍경.',tiktok:'600년 보물 성문 옆에 패션몰 있는 서울 #흥인지문 #동대문 #역사',xiaohongshu:'兴仁之门 🏯 600年古城门与东大门时装城共存 | 首尔独特风景 | 朝鲜时代城门 #兴仁之门 #韩国历史 #首尔'},
    hashtags:{korean:['#한국역사','#역사여행','#서울','#조선역사','#한양도성'],place_specific:['#흥인지문','#동대문','#한양도성','#옹성']},
    map_card_intro:'현존 유일 반원형 옹성 한양도성 동문 — 600년 성문과 패션타운이 공존'
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
console.log('C모드 8차 완료: '+updated+'개 / 누적 '+lib.total+'개');
ids.forEach((id,i)=>console.log('  C+ ['+id+'] '+scripts[i].place_name));
