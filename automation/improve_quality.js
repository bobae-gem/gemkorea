const fs = require('fs');
const base = 'C:/Users/user/Desktop/클로드/gemkorea/';

// 개선된 설명 데이터 (100~150자 목표, 사실 기반)
const improvements = {
  '서울 태릉·강릉': {
    short_description: '중종의 계비 문정왕후의 태릉과 명종·인순왕후의 강릉이 나란히 자리한 조선왕릉. 유네스코 세계유산으로 등재되어 있으며 능역 내 숲길 산책이 가능하다.',
    data_confidence: 'high'
  },
  '서울 헌릉·인릉': {
    short_description: '조선 태종과 원경왕후의 헌릉, 순조와 순원왕후의 인릉이 나란히 위치한 왕릉. 사적 제194호로 서초구 내곡동 청계산 자락에 자리하며 유네스코 세계유산이다.',
    data_confidence: 'high'
  },
  '파주 삼릉': {
    short_description: '공릉·순릉·영릉 세 왕릉이 모여 있는 능역. 예종의 첫 왕비 장순왕후, 성종의 첫 왕비 공혜왕후, 진종과 효순왕후의 능이 있으며 유네스코 세계유산이다.',
    data_confidence: 'high'
  },
  '부여 궁남지': {
    short_description: '백제 무왕 35년(634) 조성된 우리나라 최초의 인공 연못. 삼국사기에 궁의 남쪽에 못을 팠다는 기록이 전하며 서동요 설화의 무대로 알려진 사적 제135호이다.',
    data_confidence: 'high'
  },
  '하동 쌍계사': {
    short_description: '722년 통일신라 때 창건된 지리산 화개계곡의 고찰. 진감선사 대공탑비(국보)를 보유하며 봄이면 10리 벚꽃 터널이 펼쳐지는 명소다. 삼법·대비 두 스님이 창건했다.',
    data_confidence: 'high'
  },
  '경주 오릉': {
    short_description: '신라 시조 박혁거세왕과 알영왕비, 남해왕·유리왕·파사왕 등 박씨 왕 5명의 능 5기. 사적 제172호로 경주역사유적지구 유네스코 세계유산에 포함되어 있다.',
    data_confidence: 'high'
  },
  '서울 선릉·정릉': {
    short_description: '강남 도심 속 조선 제9대 성종(선릉)과 제11대 중종(정릉)의 왕릉. 유네스코 세계유산으로 등재된 조선왕릉의 일부이며 도시 속 녹지 공간으로도 활용된다.',
    data_confidence: 'high'
  },
  '낙성대 강감찬 유적': {
    short_description: '1019년 귀주대첩으로 거란군을 물리친 고려 명장 강감찬 장군의 생가터. 장군이 태어날 때 큰 별이 떨어졌다 하여 낙성대라 불린다. 낙성대공원 내에 사당과 삼층석탑이 있다.',
    data_confidence: 'high'
  },
  '절두산 순교성지': {
    short_description: '1866년 병인박해 때 수천 명의 천주교 신자들이 순교한 한강변 언덕. 참수형이 행해진 데서 절두산이라는 이름이 유래했으며 현재 순교 박물관과 기념관이 운영된다.',
    data_confidence: 'high'
  },
  '봉은사': {
    short_description: '794년 창건된 서울 강남 대표 사찰. 조선 명종 때 선종 수사찰로 지정되어 크게 중흥했으며 강남 COEX 인근에 위치해 도심 속 천년 고찰로 많은 방문객이 찾는다.',
    data_confidence: 'high'
  },
  '윤봉길 의사 기념관': {
    short_description: '1932년 중국 훙커우공원에서 의거를 일으킨 윤봉길 의사를 기리는 기념관. 서초구 양재동 매헌시민의 숲 입구에 위치하며 유품과 의거 관련 자료를 전시한다.',
    data_confidence: 'high'
  },
  '마니산 참성단': {
    short_description: '해발 469m 마니산 정상에 위치한 단군 제천단으로 사적 제136호. 하늘에 제사를 지내던 돌단으로 매년 개천절 전통 제천행사가 열리고 전국체전 성화 채화지로도 유명하다.',
    data_confidence: 'high'
  },
  '장릉 (파주)': {
    short_description: '인조의 아버지 원종(추존)과 인헌왕후의 능. 인조가 반정으로 왕위에 오른 후 아버지를 추존하여 조성한 왕릉으로 유네스코 세계유산(조선왕릉)에 등재되어 있다.',
    data_confidence: 'high'
  },
  '여주 영릉 (세종대왕릉)': {
    short_description: '한글 창제와 과학기술 발전을 이끈 조선 4대 세종대왕과 소헌왕후의 합장릉. 유네스코 세계유산(조선왕릉)으로 인근에 세종대왕역사문화관이 조성되어 있다.',
    data_confidence: 'high'
  },
  '부여 부소산성': {
    short_description: '백제 사비도성의 북쪽을 방어하던 산성. 부소산(해발 106m) 일원에 낙화암·고란사 등 역사 유적이 있으며 삼충사·반월루 등이 조성되어 있는 사적 제5호이다.',
    data_confidence: 'high'
  },
  '부여 정림사지 오층석탑': {
    short_description: '백제 사비시대의 석탑으로 국보. 높이 8.33m의 5층 석탑으로 당나라 장수 소정방이 백제를 정벌한 기공문을 탑신에 새겨 평제탑으로도 불린다. 유네스코 세계유산.',
    data_confidence: 'high'
  },
  '부여 능산리 고분군': {
    short_description: '백제 사비시대 왕족의 무덤군으로 3개 군 7기의 봉토분으로 구성. 1993년 인근 절터에서 백제금동대향로가 출토됐으며 유네스코 세계유산 백제역사유적지구에 포함된다.',
    data_confidence: 'high'
  },
  '아산 현충사': {
    short_description: '임진왜란의 영웅 이순신 장군의 생가터와 위패를 봉안한 사당. 1706년 창건, 1932년 성역화 사업으로 재건됐으며 국가 현충시설로 매년 충무공 탄신일 기념식이 열린다.',
    data_confidence: 'high'
  },
  '천안 유관순 열사 유적': {
    short_description: '유관순 열사가 1919년 4월 1일 아우내 장날 만세운동을 주도한 역사적 현장. 생가·사우·봉화지·추모각 등으로 구성된 사적 제230호이다.',
    data_confidence: 'high'
  },
  '경주 황룡사지': {
    short_description: '신라 최대 사찰 터. 진흥왕이 창건하고 선덕여왕 때 9층 목탑(높이 약 80m)을 조성했으나 1238년 몽골 침입으로 소실됐다. 황룡사 역사문화관이 인근에 조성되어 있다.',
    data_confidence: 'high'
  },
  '경주 분황사': {
    short_description: '신라 선덕여왕 때 창건된 사찰. 원효대사가 머물며 저술 활동을 한 곳. 현존 신라 석탑 중 가장 오래된 모전석탑(국보)이 있으며 돌을 벽돌 모양으로 가공해 쌓은 독특한 양식이다.',
    data_confidence: 'high'
  },
  '경주 김유신묘': {
    short_description: '삼국통일의 영웅 김유신 장군의 묘. 흥무왕으로 추봉됐으며 12지신상을 새긴 호석을 두른 왕릉급 규모의 무덤이다. 사적 제21호로 경주 충효동에 위치한다.',
    data_confidence: 'high'
  },
  '경주 무열왕릉': {
    short_description: '신라 29대 태종 무열왕(김춘추)의 능. 삼국통일을 완성한 왕으로 능 앞에 태종무열대왕지비가 남아 피장자를 명확히 알 수 있는 몇 안 되는 왕릉이다. 사적 제20호.',
    data_confidence: 'high'
  },
  '경주 옥산서원': {
    short_description: '조선 성리학자 회재 이언적을 배향한 서원. 정조 어필 현판을 보유하며 2019년 유네스코 세계유산 한국의 서원 9개소 중 하나로 등재됐다.',
    data_confidence: 'high'
  },
  '남원 광한루원': {
    short_description: '조선 시대 대표 누각 광한루와 호수·정원이 어우러진 명승지. 판소리 춘향전의 배경으로 춘향과 이몽룡이 만난 곳으로 유명하며 매년 춘향제가 열리는 전통문화 성지다.',
    data_confidence: 'high'
  },
  '정읍 황토현 전적지': {
    short_description: '1894년 동학농민군이 관군에게 첫 대승을 거둔 역사적 전적지. 갑오동학혁명의 시작점으로 동학농민혁명기념관과 기념탑이 조성되어 있다.',
    data_confidence: 'high'
  },
  '강진 고려청자 도요지': {
    short_description: '고려 비색청자의 80% 이상이 생산된 사적 제68호 도요지. 사당리 일대 188개 가마터에서 세계 최고 수준의 상감청자가 제작됐으며 고려청자박물관이 함께 운영된다.',
    data_confidence: 'high'
  },
  '오죽헌': {
    short_description: '신사임당과 율곡 이이가 태어난 조선 중기 목조 건물로 보물 제165호. 5만원권·5천원권 지폐에 등장하는 강릉의 대표 역사유산으로 경내에 어제각 등이 있다.',
    data_confidence: 'high'
  },
  '설악산 신흥사': {
    short_description: '652년 자장율사가 창건한 설악산 국립공원 내 고찰. 통일대불과 천연기념물 제171호 향나무로 유명하며 울산바위 등산로 입구에 자리한다.',
    data_confidence: 'high'
  },
  '고성 건봉사': {
    short_description: '520년 창건된 강원도 최북단 고찰로 부처님 진신치아사리를 봉안한 사찰. 한국전쟁으로 소실된 후 복원되었으며 능파교(보물)가 경내에 남아있다.',
    data_confidence: 'high'
  },
  '평창 월정사': {
    short_description: '643년 자장율사가 오대산에 창건한 고찰. 국보 팔각구층석탑과 수령 600년 이상 전나무 숲길이 유명하며 오대산 국립공원의 핵심 불교 성지다.',
    data_confidence: 'high'
  },
  '춘천 소양강댐': {
    short_description: '1973년 완공된 동양 최대 사력댐으로 소양호를 형성한 근현대 토목 유산. 강원 내륙 최대 호수를 형성하며 청평사 등으로 이어지는 호수 여행의 출발점이다.',
    data_confidence: 'high'
  },
  '거창 수승대': {
    short_description: '위천 계곡의 넓은 바위 일대로 이루어진 명승 제53호. 조선 시대 요수 신권이 은거하며 학문을 닦은 곳으로 퇴계 이황이 수승대로 이름을 바꿔준 일화가 전해진다.',
    data_confidence: 'high'
  },
  '단양 온달산성': {
    short_description: '고구려 온달 장군과 평강공주 전설이 깃든 석축 산성. 남한강 절벽 위에 세워진 테뫼식 산성으로 삼국시대 국경 방어를 담당했으며 온달관광지와 인접해 있다.',
    data_confidence: 'high'
  },
  '부안 개암사': {
    short_description: '634년 백제 때 창건된 변산반도 능가산 자락의 고찰. 대웅전(보물)은 조선 중기 목조 건축의 정수로 평가받으며 임진왜란 때 의승병 활동의 거점이었다.',
    data_confidence: 'high'
  },
  '화성 용주사': {
    short_description: '1790년 정조가 아버지 사도세자의 능인 융릉 원찰로 창건한 사찰. 부모은중경을 새긴 동종과 탱화가 유명하며 사도세자의 넋을 위로하는 효심의 공간이다.',
    data_confidence: 'high'
  },
  '경교장': {
    short_description: '백범 김구 선생이 활동하다 1949년 안두희에게 암살당한 현장. 대한민국 임시정부의 마지막 청사로 사용됐으며 현재 복원 전시관으로 광복 후 혼란기 역사를 증언한다.',
    data_confidence: 'high'
  },
  '효창공원': {
    short_description: '김구·이봉창·윤봉길·백정기 의사와 안중근 의사 가묘 등 독립운동가 7위의 묘소가 모인 민족의 성지. 원래 정조의 아들 문효세자 무덤이 있던 왕실 능원이었다.',
    data_confidence: 'high'
  },
  '봉원사': {
    short_description: '889년 도선국사가 창건한 서울 유일의 태고종 사찰. 조선 영조 때 현 위치로 이전됐으며 전통 범패와 작법 무형문화재를 보존하는 불교 전통 의례의 중심지다.',
    data_confidence: 'high'
  },
  '봉화 청량산 청량사': {
    short_description: '퇴계 이황이 즐겨 오르며 학문을 닦은 청량산에 자리한 고찰. 해발 800m 절벽 위에 위치하며 유리보전과 응진전 등이 기암절벽과 어우러진다.',
    data_confidence: 'high'
  },
  '남양주 다산 정약용 유적': {
    short_description: '실학의 집대성자 정약용이 유배 후 만년을 보내며 목민심서 등 500여 권을 저술한 생가 여유당과 묘소, 실학박물관이 있는 유적지. 사적으로 지정되어 있다.',
    data_confidence: 'high'
  },
  '보령 성주사지': {
    short_description: '통일신라 문성왕 때 낭혜화상이 창건한 대사찰의 폐사지. 국보 낭혜화상탑비와 3기의 삼층석탑이 현존하며 한국 선종 발전의 중요 거점이었던 사적이다.',
    data_confidence: 'high'
  },
  '청도 운문사': {
    short_description: '신라 진흥왕 때 창건된 사찰로 원광국사가 세속오계를 설파하고 일연스님이 삼국유사 집필을 시작한 곳. 현재 전국 최대 비구니 교육도량이다.',
    data_confidence: 'high'
  },
  '상주 경천대': {
    short_description: '낙동강 1,300리 중 경관이 가장 빼어난 절승지로 낙동강 제1경으로 꼽힌다. 1628년 병자호란 후 채득기가 조성한 정자 무우정이 있으며 국민관광지로 지정됐다.',
    data_confidence: 'high'
  },
  '영천 은해사': {
    short_description: '팔공산 남쪽 기슭에 자리한 통일신라 창건 사찰. 조선 선조 때 현재 이름으로 바뀌었으며 국보·보물급 문화재를 다수 보유한 경북 대표 산사다.',
    data_confidence: 'high'
  },
  '산청 대원사': {
    short_description: '지리산 동쪽 기슭의 신라 창건 사찰. 현재 비구니 수행 도량으로 운영되며 다층석탑(보물)과 아름다운 계곡 경관으로 유명하다.',
    data_confidence: 'high'
  },
  '고성 옥천사': {
    short_description: '670년 의상대사가 창건한 연화산 도립공원 내 사찰. 1252년 제작 청동 임자명 반자(보물)를 보유하며 옥천이라는 약수로도 유명한 고성 대표 사찰이다.',
    data_confidence: 'high'
  },
  '완도 장보고기념관': {
    short_description: '해상왕 장보고의 업적을 기리는 기념관. 828년 청해진을 설치해 해적을 소탕하고 한·중·일 해상무역을 장악한 장보고의 역사를 전시하며 청해진 유적지와 연계된다.',
    data_confidence: 'high'
  },
  '이천 영월암': {
    short_description: '신라 의상대사가 창건했다 전하는 설봉산 정상 부근의 사찰. 보물 제822호 마애여래입상 등 주요 문화재를 품고 있으며 이천의 천년 기도처로 알려져 있다.',
    data_confidence: 'high'
  },
  '부여 고란사': {
    short_description: '백제 말기 창건으로 추정되는 부소산 백마강변 절벽 아래 사찰. 고려시대 삼천궁녀를 위로하기 위해 중창했으며 희귀식물 고란초와 약수가 유명하다.',
    data_confidence: 'medium'
  },
  '홍성 홍주읍성': {
    short_description: '고려시대 이전부터 존재한 홍주 읍성으로 조선 문종 때 개축했다. 둘레 1,772m 규모로 1895년 홍주의병 항쟁의 현장이며 조양문(성문)이 현존한다.',
    data_confidence: 'high'
  },
  '고흥 능가사': {
    short_description: '419년 아도화상이 창건한 팔영산 고찰. 1644년 능가사로 개칭됐으며 보물 동종(1698년)과 대웅전 등 조선시대 건축 문화재가 보존되어 있다.',
    data_confidence: 'medium'
  },
  '양구 선사박물관': {
    short_description: '1997년 개관한 국내 최초 선사시대 전문 박물관. 북한강 유역에서 발굴된 구석기·신석기·청동기·철기시대 유물 650여 점을 전시하며 양구 고인돌군을 소개한다.',
    data_confidence: 'medium'
  }
};

const data = JSON.parse(fs.readFileSync(base+'data/heritage_all.json','utf8'));
const now = new Date().toISOString().slice(0,19);
let improved = 0;

const updated = data.map(d => {
  const imp = improvements[d.name];
  if (!imp) return d;
  improved++;
  return {
    ...d,
    short_description: imp.short_description,
    data_confidence: imp.data_confidence || d.data_confidence,
    status: {...d.status, last_updated: now}
  };
});

fs.writeFileSync(base+'data/heritage_all.json', JSON.stringify(updated, null, 2), 'utf8');
const ready = updated.filter(d=>d.status.map_displayable&&d.lat&&d.lng);
fs.writeFileSync(base+'map/markers_ready.json', JSON.stringify({total:ready.length,markers:ready},null,2),'utf8');

console.log('품질 개선 완료: '+improved+'개');
console.log('평균 설명 길이 개선 전후:');
const before = Object.keys(improvements).map(k=>improvements[k].short_description.length);
console.log('  개선된 항목 평균: '+Math.round(before.reduce((a,b)=>a+b,0)/before.length)+'자');

const mediumAfter = updated.filter(d=>d.data_confidence==='medium').length;
console.log('medium 신뢰도 남은 수: '+mediumAfter+'개');
