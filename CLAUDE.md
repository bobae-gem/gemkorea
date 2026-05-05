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
