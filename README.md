# GemKorea — 대한민국 역사 여행 지도

대한민국 역사문화유산을 지도에 표시하는 웹사이트.  
보배의 큐레이션 여행 지도 — "마음이 이끄는 곳으로"

---

## 🌐 사이트 주소

- **지도**: https://bobae-gem.github.io/gemkorea
- **관리자**: https://bobae-gem.github.io/gemkorea/admin.html
- **GitHub**: https://github.com/bobae-gem/gemkorea

---

## 💻 포맷 후 복원 방법

### 1. 필요한 프로그램 설치
- [Git](https://git-scm.com/download/win) 설치
- [Python 3](https://www.python.org/downloads/) 설치
- [Node.js](https://nodejs.org/) 설치 (자동화 스크립트용)
- [Claude Code](https://claude.ai/code) 설치 (AI 자동화용)

### 2. 프로젝트 복원
```bash
# 원하는 폴더에서 실행
git clone https://github.com/bobae-gem/gemkorea.git
cd gemkorea
```

### 3. 로컬 서버 실행
```bash
# 방법 1: 배치 파일 더블클릭
겜코리아열기.bat

# 방법 2: 직접 실행
python server.py
# 브라우저에서 http://localhost:4000 접속
```

### 4. 네이버 지도 API 키
- **ncpKeyId**: `y60jsyh564`
- 등록 URL: `https://bobae-gem.github.io`
- 로컬 테스트 시 네이버 클라우드 콘솔에서 `http://localhost:4000` 추가 필요

---

## 📁 폴더 구조

```
gemkorea/
├── index.html              ← 공개 지도 (사용자용)
├── admin.html              ← 관리자 대시보드
├── admin/                  ← 관리자 서브메뉴 8개
├── agents/                 ← AI 에이전트 정의 (9개)
├── automation/             ← 자동화 모드 설정 및 스크립트
├── data/
│   ├── heritage_all.json   ← 역사 장소 데이터 (164개)
│   ├── geojson/            ← 지역 경계 GeoJSON (8개 지역)
│   ├── raw/                ← 서치 원본 결과
│   └── processed/          ← 정리된 데이터
├── map/                    ← 지도 마커 데이터
├── content/                ← 숏츠 콘텐츠 대본
├── logs/                   ← 자동화 실행 로그
├── server.py               ← 로컬 서버
└── 겜코리아열기.bat         ← 원클릭 실행
```

---

## 🤖 자동화 모드

| 모드 | 이름 | 간격 | 용도 |
|------|------|------|------|
| **A** | 빠른 서치 | 8분 | 초기 마커 확보 |
| **B** | 품질 서치 | 30분 | 기본 운영 모드 |
| **C** | 숏츠 생성 | 수동 | 콘텐츠 제작 |

Claude Code에서 실행:
```
# 예시
"A모드 자동화 실행해줘"
"B모드로 강원도 지역 서치해줘"
"C모드 숏츠 5개 만들어줘"
```

---

## 📊 현재 현황 (2026-05-06 기준)

- 수집 장소: **164개**
- 지도 게시: **147개**
- 1차 목표 달성률: **55%** (목표: 300개)
- 숏츠 콘텐츠: 5개 생성 (review_pending)

---

## 🔑 중요 설정

### 네이버 지도 API
```
스크립트: https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=y60jsyh564
```

### 배포 (GitHub Pages)
```bash
git add .
git commit -m "업데이트 내용"
git push origin main
# 1~2분 후 사이트 자동 반영
```

---

## 📌 gemtour 연동 계획

- gemtour 유튜브 직접 방문 장소 → 마커 별도 표시
- 숏츠 업로드 → 지도 마커 클릭 시 영상 연결
- 맛집·카페 카테고리 추가 예정
