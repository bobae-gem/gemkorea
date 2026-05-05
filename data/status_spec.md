# 겜코리아 Status 시스템 명세

---

## 운영 원칙

```
마커 수 증가 = 서비스 성장
콘텐츠 수 증가 = 마케팅 자산

두 시스템은 분리하여 관리한다.
```

지도 마커 시스템과 콘텐츠 시스템은 같은 place_id를 공유하지만
각각 독립적으로 진행된다. 콘텐츠가 없어도 마커는 지도에 올라갈 수 있다.

---

## 마커 확보 목표

| 단계 | 목표 | 기준 |
|------|------|------|
| 1차 | 300개 | map_status = published |
| 2차 | 1,000개 | map_status = published |

**서비스 초기에는 콘텐츠 생산보다 마커 데이터 확보를 우선한다.**

---

## 지도 표시 가능 기준 (map_displayable)

아래 6개 필드가 모두 있으면 `map_displayable: true`

| 필드 | 조건 |
|------|------|
| `name` | 존재 |
| `category` | 존재 |
| `period` | 존재 |
| `region` | 존재 |
| `address` 또는 `lat/lng` | 둘 중 하나 이상 |
| `source_urls` | 1개 이상 |

→ `map_displayable: true` 이면 콘텐츠 없이도 지도에 올릴 수 있다.

---

## 전체 구조

```json
"status": {
  "map_displayable":  true,
  "data_status":      "데이터 파이프라인 상태",
  "map_status":       "지도 파이프라인 상태",
  "content_status":   "콘텐츠 자산 상태",
  "last_updated":     "YYYY-MM-DDTHH:MM:SS"
}
```

---

## data_status

데이터 정리 AI가 관리한다.

| 값 | 의미 | 전환 조건 |
|----|------|-----------|
| `searching` | 서치 중 | 서치 AI 수집 시작 |
| `organizing` | 정리 중 | 데이터 정리 AI 작업 시작 |
| `complete` | 정리 완료 | 데이터 정리 AI 출력 완료 |
| `excluded` | 제외 | 주소 없음·출처 없음·위치 불명확 |

---

## map_status

지도 표기 AI → 대표 승인 → 웹사이트 반영

| 값 | 의미 | 전환 주체 |
|----|------|-----------|
| `waiting` | 대기 | data_status = complete 시 자동 |
| `geocoding_needed` | 좌표 확인 필요 | 지도 표기 AI |
| `ready` | 지도 준비 완료 | 지도 표기 AI |
| `pending_approval` | 대표 승인 대기 | 지도 표기 AI |
| `published` | 지도 게시 | 총괄매니저 (대표 승인 후) |
| `video_linked` | 영상 연결 완료 | 총괄매니저 (content_status = uploaded 후) |
| `excluded` | 제외 | 지도 표기 AI |

```
waiting → geocoding_needed → ready → pending_approval → published → video_linked
                                                                   ↑
                                              content_status가 uploaded 되면 자동 갱신
```

---

## content_status (콘텐츠 자산 관리)

콘텐츠 생성 AI가 만든 모든 대본은 삭제하지 않는다.
업로드 여부와 관계없이 콘텐츠 자산으로 관리한다.

| 값 | 의미 | 전환 주체 |
|----|------|-----------|
| `waiting` | 대기 | 자동 | data_status = complete 시 자동 |
| `generating` | 생성 중 | 숏츠 AI | 자동화 실행 중 콘텐츠 생성 시작 |
| `review_pending` | 검수 대기 | 숏츠 AI | 대본 생성 완료 → 검수 AI 대기 |
| `created` | 생성됨 | 검수 AI (approve) | 검수 통과 완료 |
| `reviewed` | 검수 완료 | 검수 AI | 내부 검토 완료 상태 |
| `approved` | 대표 승인 | 총괄매니저 (대표 승인 후) | 업로드 가능 상태 |
| `uploaded` | 업로드됨 | 총괄매니저 | 실제 업로드 완료 |
| `archived` | 보관 | 총괄매니저 | 업로드 미정·재활용 대기 (삭제 금지) |
| `excluded` | 사용 제외 | 총괄매니저 | 폐기 확정 |

```
waiting
  → generating (자동화 실행 시작)
  → review_pending (대본 생성 완료)
      → created (검수 approve)
          → approved (대표 승인)
              → uploaded (업로드 완료)
          → archived (업로드 보류)
      → archived (검수 revise / reject → 재작업 대기)
  → archived (언제든 보관 전환 가능)
  → excluded (폐기 확정 시에만)
```

**archived 상태 콘텐츠는 향후 재사용·재편집이 가능하도록 유지한다.**
**excluded 외의 모든 콘텐츠는 삭제하지 않는다.**

---

## 각 AI의 status 변경 권한

| AI | 변경 가능 필드 | 변경 가능 값 |
|----|--------------|-------------|
| 서치 AI | data_status | searching |
| 데이터 정리 AI | data_status, map_displayable | organizing → complete / excluded |
| 지도 표기 AI | map_status | waiting → geocoding_needed / ready / pending_approval / excluded |
| 숏츠 AI | content_status | → created |
| 검수 AI | content_status | created → reviewed (approve 시) / created → archived (reject 시) |
| SNS 최적화 AI | (변경 권한 없음 — 총괄매니저가 결정) | — |
| 총괄매니저 | map_status, content_status | published / video_linked / approved / uploaded / archived / excluded |
| 대표 | map_status, content_status | pending_approval → published / approved |

---

## 마커 현황 추적 (총괄매니저 관리)

```
마커 현황 요약:
  전체 수집: N개
  map_displayable: N개
  map_status = published: N개   ← 실제 지도에 올라간 수
  map_status = video_linked: N개 ← 영상까지 연결된 수

  1차 목표(300개) 달성률: N%
  2차 목표(1000개) 달성률: N%
```
