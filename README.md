# WORKS 갤러리 — 배포 체크리스트

## 파일 구성
- `index.html`
- `style.css`
- `script.js`
- 이미지: `images/Personal/<폴더명>/1.ext, 2.ext, 3.ext ...`

3개 코드 파일(`index.html`, `style.css`, `script.js`)은 서로 맞물려 있으므로
**항상 세 개를 한 번에 덮어써서** push 해야 합니다.

## 반영된 내용
1. **경로**: `images/Personal/<id>/...` 구조 (Personal 폴더 포함)
2. **확장자 자동 감지**: `.png / .jpg / .jpeg / .webp`와 대문자 버전까지 순서대로 시도
3. **이미지 개수 자동 감지**: 몇 장인지 코드에 적을 필요 없음 (더 못 찾는 지점에서 자동으로 멈춤)
4. **그리드 순서/크기**: 10 → 02 순서로 내려가며 `2개(큰 줄) → 3개(중간 줄) → 3개(중간 줄) → 1개(작은 줄)`
   피라미드 구조. 모든 타일이 동일한 그리드 셀 규격을 기준으로만 크기가 달라서 들쭉날쭉해지지 않음.
5. **University 분리**: `01University`는 그리드에 포함되지 않고, WORKS 섹션 맨 아래
   "University" 라벨 밑에 큰 이미지 한 장으로 별도 표시. 클릭 시 다른 작품과 동일하게
   상세페이지(슬라이드 + 정보패널)로 연결됨.
6. **상세페이지**: 클릭하면 좌측에 슬라이드(이전/다음 화살표, 좌우 방향키, 카운터),
   우측에 정보패널(제목, 폴더명, 썸네일 그리드)이 뜸.

## ⚠️ 반드시 확인해야 할 것 — `script.js`의 `ROWS` 배열

스크린샷 속 제목(Gate / Pillar / Sci-Fi Container)을 기준으로 폴더명을 추정해
`TODO` 표시를 해둔 3개 항목이 있습니다. 실제 저장소의 `images/Personal/` 하위
폴더명과 **철자·대소문자까지 정확히** 맞춰서 `id` 값을 교체해주세요.

```js
const ROWS = [
  [
    { id: '10Desert',   title: 'Desert',            category: 'Environment' },
    { id: '09Gate',      title: 'Gate',               category: 'Environment' }, // TODO
  ],
  [
    { id: '08Trebuchet', title: 'Trebuchet',          category: 'Hard Surface' },
    { id: '07Alley',     title: 'Alley',              category: 'Environment' },
    { id: '06Pillar',    title: 'Pillar',             category: 'Environment', narrow: true }, // TODO
  ],
  [
    { id: '05Computer',  title: 'Computer',           category: 'Prop' },
    { id: '04SciFiContainer', title: 'Sci-Fi Container', category: 'Hard Surface' }, // TODO
    { id: '03Zbrush',    title: 'Zbrush',             category: 'Sculpt' },
  ],
  [
    { id: '02House',     title: 'House',              category: 'Environment' },
  ],
];
```

`ROWS`는 배열 안에 배열(행)을 담는 2차원 구조입니다. 한 행에 몇 개를 넣느냐가
곧 그 줄의 타일 개수이고, 모든 행의 **높이는 항상 같으며**(`style.css`의
`--row-h`), 폭만 행 안에서 타일 개수만큼 나뉩니다. 특정 타일만 더 좁게 하고
싶으면 그 항목에 `narrow: true`를 추가하면 됩니다(현재 06 Pillar에 적용됨 —
기둥처럼 세로로 긴 소재라 폭을 다른 타일보다 좁혔습니다).

## 이미지가 하나라도 안 뜬다면
1. 폴더명이 `PROJECTS` 배열의 `id`와 정확히 일치하는지 (대소문자 포함)
2. 파일명이 `1.ext`부터 연속 번호로 되어 있는지 (중간에 번호가 비면 그 지점에서 멈춤)
3. 확장자가 `EXTENSIONS` 목록(`png/jpg/jpeg/webp` 및 대문자)에 포함되는지

## 배포 후 확인 방법
캐시 때문에 예전 버전이 보일 수 있습니다. 새로 push한 뒤에는:
1. 시크릿 모드(Ctrl+Shift+N / Cmd+Shift+N)로 새로 열기
2. 또는 `index.html`의 `?v=4` 같은 캐시 버스팅 숫자를 배포할 때마다 올리기
