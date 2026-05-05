# GemKorea — 대한민국 여행 지도

대한민국 여행·역사·자연 명소를 큐레이션하는 공개 웹사이트.
gemtour 채널과 연동되는 여행 가이드 플랫폼.

---

## 사이트 정보

- **URL**: https://bobae-gem.github.io/gemkorea
- **GitHub**: https://github.com/bobae-gem/gemkorea
- **호스팅**: GitHub Pages (무료, 자동 배포)
- **지도**: 네이버 지도 API (NCP)

---

## 네이버 지도 API

- **Client ID (ncpKeyId)**: y60jsyh564
- **등록 URL**: https://bobae-gem.github.io
- **스크립트**: `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=y60jsyh564`
- ⚠️ 파라미터명: `ncpKeyId` (구버전 `ncpClientId` 아님)

---

## 카테고리

| 카테고리 | 색상 | 내용 |
|---------|------|------|
| 🧭 여행 | 오렌지 | 관광지, 해변, 도시 명소 |
| 🏛️ 역사 | 갈색 | 유적지, 궁궐, 전통마을, 유네스코 |
| 🌿 자연 | 초록 | 산, 숲, 바다, 국립공원 |

---

## 현재 데이터

- **총 48곳** (2026-05-06 기준)
- 지역: 서울·경기·강원·충청·전라·경상·제주
- 각 장소: id, 이름, 지역, 카테고리, 이모지, 위도·경도, 설명, 태그

---

## 업데이트 방법

```bash
# 파일 수정 후 배포
git add index.html
git commit -m "여행지 추가"
git push origin main
# → 자동으로 사이트 반영 (1~2분)
```

---

## 연결 채널

- **gemtour** (유튜브 채널) — 직접 가본 여행지 영상과 연결 예정
- 영상 업로드 시 gemkorea에 해당 장소 마커 추가

---

## 향후 계획

- 보배가 직접 가본 여행지 마커 별도 표시
- 맛집·카페 카테고리 추가
- 각 장소 상세 페이지 (영상 연결)
- 모바일 최적화
- 틱톡 트렌드 명소 연동

---

## 콘셉트

단순 여행 정보 X → **보배의 큐레이션 여행 지도**
"마음이 이끄는 곳으로" — 마음근력 철학이 담긴 여행 안내

---

## 조직 구조

```
대표 (보배)
  ↕
총매 (agents/manager.md)  ← 작업 전 지침서 필수 읽기
  ├── 서치사 (agents/researcher.md)
  │   └── 숨은 명소·역사지·자연·gemtour 여행지 발굴
  └── 팩트체커 (agents/fact_checker.md)
      └── 정보 정확성 이중 검증 (역사 사실 필수)
```

---

## 장소 추가 흐름

```
서치사 → 장소 발굴 (이름·지역·카테고리·설명·좌표·태그)
    ↓
총매 → 검토 + 카테고리 결정 + 팩트체크 지시
    ↓
팩트체커 → 정보 정확성 검증 (역사 장소 필수)
    ↓
총매 → 최종 승인
    ↓
index.html에 장소 추가 → git push → 사이트 자동 반영
```

---

## 정보 정확성 원칙

겜코리아는 역사와 문화를 다루는 지도다. **역사 오류는 신뢰도에 직결**.

- 서치사가 발굴한 정보 → 팩트체커 검증
- 역사 장소는 공식 출처(국가유산포털·한국민족문화대백과·국사편찬위) 확인 필수
- 총매 최종 승인 → 지도 추가

잘못된 역사 정보가 1개라도 올라가면 안 됨. **반드시 더블체크 후 승인.**

---

## 에이전트 목록

| 파일 | 역할 | 담당 단계 |
|------|------|-----------|
| `agents/automation_runner.md` | 4가지 모드(A/B/C/D) 자동화 실행·로그·보고 | 실행 엔진 |
| `agents/manager.md` | 총괄 컨트롤 타워·새벽 4시 보고·성과 분석·전략 결정 | 전 단계 감시 |
| `agents/researcher.md` | 역사 장소 발굴·출처 수집·map_displayable 판단 | 1단계 |
| `agents/data_organizer.md` | 원본 자료 구조화·place_id 생성·status 설정 | 2단계 |
| `agents/category_ai.md` | category_main·category_sub 자동 분류 | 3단계 |
| `agents/map_marker.md` | 좌표·마커·카드 데이터 생성·지도-콘텐츠 연결 | 4단계 |
| `agents/shorts_ai.md` | 숏츠 대본·후킹·썸네일·플랫폼별 캡션 생성 | 5단계 |
| `agents/review_ai.md` | 역사 오류·출처·과장 검수·approve/revise/reject 판정 | 6단계 |
| `agents/sns_optimizer.md` | 유튜브·인스타·틱톡·샤오홍슈 최적화·업로드 패키지 | 7단계 |
