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

| 카테고리 | 내용 |
|---------|------|
| 🏛️ 역사 | 유적지, 궁궐, 전통마을, 독립운동, 유네스코 |
| 🌿 자연 | 산, 숲, 바다, 계곡, 국립공원, 계절명소 |
| 🎭 문화·체험 | 전통공예, 체험마을, 축제, 민속촌 |

---

## 현재 데이터 (2026-05-06 기준)

- **마커 총합**: 453개 (목표 1000개 — 45.3% 달성)
- **숏츠 콘텐츠**: 200개 생성 완료
- **자동화 진행**: B모드 30차 / C모드 40차까지 완료

---

## 3대 자산 파일 구조

| 파일 | 설명 | 항목 수 |
|------|------|---------|
| `data/heritage_all.json` | 역사·자연 장소 데이터 | 453개 |
| `data/experiences.json` | 문화·체험 장소 데이터 | 34개 |
| `content/library.json` | 숏츠 대본·캡션·해시태그 | 200개 |

---

## ID 체계

### 장소 ID (heritage_all.json)
```
형식: GK-{지역코드}-{유형코드}-{순번4자리}
예시: GK-SE-GUN-0001 (서울·궁궐·0001번)

지역코드: SE(서울) GG(경기) IC(인천) GW(강원) CB(충북) CN(충남)
          JB(전북) JN(전남) GB(경북) GN(경남) GJ(광주) DG(대구)
          BS(부산) US(울산) JJ(제주)

유형코드: GUN(궁궐) RYU(왕릉) SAJ(사찰) SAE(생활유적) SAN(산성)
          MTN(산) SEA(해변) LKE(강/호수) SCN(자연명승) GOB(고분)
          DOK(독립운동) JEN(전쟁/이순신) BIS(비석/석조) SWO(서원)
          GAD(계절명소) SUN(일출/일몰) CAV(동굴) GOI(고인돌)
```

### 콘텐츠 ID (library.json)
```
형식: CL-{순번3자리}
예시: CL-001
```

### 체험 ID (experiences.json)
```
형식: EX-{지역코드}-{유형코드}-{순번3자리}
예시: EX-SE-HAN-001
```

---

## 장소 데이터 필드

```json
{
  "place_id": "GK-SE-GUN-0001",
  "name": "경복궁",
  "category_main": "역사",
  "category_sub": "궁궐",
  "category_detail": "조선 왕조의 법궁",
  "period": "조선 태조 1395년 창건",
  "period_category": "조선시대",
  "region": "서울특별시",
  "address": "서울특별시 종로구 사직로 161",
  "location_marker_type": "entrance",
  "lat": 37.5796,
  "lng": 126.9770,
  "short_description": "...",
  "source_urls": ["..."],
  "data_confidence": "high",
  "tags": ["조선", "궁궐", "유네스코"],
  "confidence": "high",
  "needs_geocoding": false,
  "status": {
    "map_displayable": true,
    "data_status": "complete",
    "map_status": "published",
    "content_status": "waiting",
    "last_updated": "2026-05-06T00:00:00"
  },
  "content_link": {
    "has_video": false,
    "youtube_url": "",
    "video_status": "없음"
  }
}
```

---

## 콘텐츠 데이터 필드 (library.json)

```json
{
  "id": "CL-001",
  "place_id": "GK-SE-GUN-0001",
  "place_name": "경복궁",
  "category_main": "역사",
  "region": "서울특별시",
  "generated_at": "2026-05-06T00:00:00",
  "content_status": "review_pending",
  "script_30s": "30초 대본 — 반드시 '오늘은 ___에 왔어요' 도입 + 꿀팁 + '너무 ___해서 좋았습니다' 클로징",
  "script_60s": "60초 대본 — 동일 구조 + 역사·감성 스토리 확장",
  "secret_tip": "⭐ 필수 — 아무도 안 알려준 정보 or 꿀팁 한 가지 (방문 시간·숨은 팁·무료체험 등)",
  "emotion_keywords": ["권력", "기억"],
  "hooks": ["후킹1", "후킹2", "후킹3", "후킹4", "후킹5"],
  "thumbnails": ["썸네일1", ...],
  "captions": {
    "youtube": "...",
    "instagram": "...",
    "tiktok": "...",
    "xiaohongshu": "..."
  },
  "hashtags": {
    "korean": ["#한국역사"],
    "place_specific": ["#경복궁"]
  },
  "map_card_intro": "지도 카드용 한줄 소개"
}
```

---

## content_status 흐름

```
waiting → review_pending → approved → uploaded → archived
```

---

## 자동화 모드

| 모드 | 설명 | 스크립트 위치 |
|------|------|--------------|
| **B모드** | 장소 서치·수집 | `automation/process_batch{N}.js` |
| **C모드** | 숏츠 대본 생성 | `automation/generate_c_batch{N}.js` |

### 자동화 진행 현황
- B모드: process_batch30.js까지 완료 (453개)
- C모드: generate_c_batch40.js까지 완료 (200개)
- 재시작 시: B31차부터, C41차부터 이어서 진행

### B모드 스크립트 패턴
```js
// 1. raw 배열에 장소 데이터 입력
// 2. existingNames로 중복 체크
// 3. place_id 자동 생성 (지역코드+유형코드+순번)
// 4. heritage_all.json에 추가
// 5. markers_ready.json 갱신
// 6. automation_log.json 기록
```

### C모드 스크립트 패턴
```js
// 1. scripts 배열에 place_id·숏츠 데이터 입력
// 2. heritage_all.json의 content_status: waiting → review_pending
// 3. content/library.json에 추가
// 4. automation_log.json 기록
```

---

## 배포 방법

```bash
git add data/heritage_all.json content/library.json map/markers_ready.json logs/automation_log.json automation/
git commit -m "feat: 설명"
git push origin main
# → GitHub Pages 자동 반영 (1~2분)
```

---

## 주요 파일 구조

```
gemkorea/
├── index.html              ← 공개 지도 페이지
├── admin.html              ← 관리자 대시보드
├── admin/
│   ├── content-archive.html   ← 숏츠 콘텐츠 뷰어
│   └── experience-manager.html ← 체험 관리
├── data/
│   ├── heritage_all.json   ← 역사·자연 453개
│   ├── experiences.json    ← 체험 34개
│   └── geojson/           ← 8개 지역 경계 파일
├── content/
│   └── library.json       ← 숏츠 200개
├── map/
│   └── markers_ready.json ← 지도 표시용 필터링 데이터
├── logs/
│   └── automation_log.json
└── automation/
    ├── process_batch{1~30}.js     ← B모드 처리 스크립트
    ├── generate_c_batch{1~40}.js  ← C모드 숏츠 생성 스크립트
    └── config.json                ← 자동화 설정
```

---

## 목표

- **1차 목표**: 마커 300개 ✅ (달성)
- **2차 목표**: 마커 1000개 (현재 453개, 45.3%)
- **숏츠**: 계속 생성 중 (현재 200개)

---

## 콘셉트

단순 여행 정보 X → **보배의 큐레이션 여행 지도**
"마음이 이끄는 곳으로" — 마음근력 철학이 담긴 여행 안내

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
