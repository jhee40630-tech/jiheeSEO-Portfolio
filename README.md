# Jihee Seo Portfolio — 설정 가이드

## 1. 폴더 구조 (중요 — 이번에 고친 부분)

실제 이미지 경로가 `images/01University` 가 아니라 **`images/Personal/01University`** 인 것으로
확인되어, 코드를 이 구조에 맞춰 수정했습니다. 저장소 최상단 기준 구조는 다음과 같아야 합니다:

```
저장소 루트/
├─ index.html
├─ style.css
├─ script.js
├─ README.md
└─ images/
   └─ Personal/
      ├─ 01University/
      │   ├─ 1.png (또는 .jpg/.jpeg/.webp, 대소문자 무관)
      │   ├─ 2.png
      │   └─ ...
      ├─ 02House/
      ├─ 03Zbrush/
      ├─ 04Sci-fi Container/
      ├─ 05Computer/
      ├─ 06Pillar/
      ├─ 07Alley/
      ├─ 08Trebuchet/
      ├─ 09Gate/
      └─ 10Desert/
```

폴더명은 `script.js` 상단 `PROJECTS` 배열의 `id` 값과 **철자·대소문자까지 정확히** 일치해야 합니다.

## 2. 확장자 / 이미지 개수 — 신경 쓰지 않아도 됩니다

이전 버전은 확장자를 `.png`로 고정해놓아서 `.jpg` 파일이 섞여 있으면 실패했습니다.
지금 버전은 브라우저에서 실시간으로 각 번호에 대해

```
1.png → 1.jpg → 1.jpeg → 1.webp → 1.PNG → 1.JPG → 1.JPEG
```

순서로 실제 존재하는 파일을 찾고, 어떤 확장자로도 찾지 못하는 번호에서 자동으로 멈춥니다.
따라서 폴더마다 이미지가 몇 장인지, 확장자가 뭔지 코드에 적을 필요가 없습니다.
(폴더당 최대 60장까지 자동 탐색 — 그 이상이면 `script.js`의 `MAX_PROBE` 값을 늘리세요.)

## 2-1. 그리드 썸네일 마우스오버 전환 (thu1 / thu2)

각 프로젝트 폴더(`images/Personal/폴더명/`) 안에 `thu1`, `thu2` 파일을 넣으면
메인 페이지 그리드(및 University 타일)에서:

- 평소에는 **thu1** 이미지가 보이고
- 마우스를 올리면 **thu2** 이미지로 바뀌었다가, 마우스를 떼면 다시 thu1로 돌아옵니다.

```
images/Personal/07Alley/
├─ thu1.png   ← 기본 썸네일
├─ thu2.png   ← 마우스오버 시 썸네일
├─ 1.png      ← 상세페이지 슬라이드쇼용 이미지들
├─ 2.png
└─ ...
```

- 확장자는 기존 규칙과 동일하게 `png → jpg → jpeg → webp → PNG → JPG → JPEG` 순서로 자동 탐색합니다.
- `thu2`가 없으면 마우스오버 전환 없이 `thu1`이 고정으로 보입니다.
- `thu1`이 아예 없는 폴더는 기존처럼 `1.png` 등 번호 이미지가 자동으로 대신 쓰입니다(하위 호환).
- 상세페이지(클릭 후 나오는 슬라이드쇼)는 이전과 동일하게 `1, 2, 3...` 번호 이미지를 사용합니다. `thu1/thu2`는 그리드 썸네일 전용입니다.

## 2-2. "분명 수정했는데 사이트에 안 보여요" 체크리스트

코드(`index.html`/`style.css`/`script.js`) 자체는 정상이어도, 아래 세 가지 중 하나 때문에
바뀐 게 안 보일 수 있습니다. 순서대로 확인하세요:

1. **파일을 실제로 커밋 & 푸시했는지** — GitHub Desktop(또는 `git status`)에서
   `index.html`, `style.css`, `script.js` 3개 파일이 전부 "변경됨"으로 올라가 있는지 확인.
   코드 파일과 이미지 파일(`thu1`/`thu2` 등)은 **별개로 업로드해야** 합니다 — 코드만 올리고
   이미지 파일은 깜빡하는 경우가 흔합니다.
2. **`thu1`/`thu2` 이미지 파일이 해당 프로젝트 폴더에 실제로 있는지** — 예:
   `images/Personal/07Alley/thu1.png`. 파일명은 대소문자까지 정확히 `thu1`, `thu2` (소문자)여야 합니다.
3. **캐시** — GitHub Pages/브라우저가 옛날 `style.css`, `script.js`를 그대로 보여줄 수 있습니다.
   `index.html`에 `style.css?v=6`, `script.js?v=6`처럼 버전 숫자를 붙여뒀으니, **다음에 또 수정할 때마다
   `v=6`를 `v=7`, `v=8`...로 올려주세요.** 그러면 캐시와 상관없이 항상 최신 파일을 불러옵니다.
   지금 당장 확인하려면 시크릿 창으로 열거나 Ctrl+Shift+R(강력 새로고침)을 해보세요.

그래도 안 되면: 배포된 사이트에서 **F12 → Console 탭**을 열어보세요. `thu1`/`thu2`를 못 찾으면
정확히 어떤 경로를 찾다 실패했는지 노란색 경고로 뜨도록 만들어뒀습니다 (예: "images/Personal/07Alley/thu1.png 를 찾지 못해...").
그 경로와 실제 저장소의 파일 경로를 비교하면 바로 원인이 보입니다.

## 2-3. 동영상(mp4) 슬라이드 지원

이제 번호 이미지(`1.png`, `2.png`...) 자리에 **동영상 파일**(`1.mp4` 등)을 넣어도 됩니다.

- 탐색 순서: `1.png → 1.jpg → 1.jpeg → 1.webp → 1.PNG → 1.JPG → 1.JPEG → 1.mp4 → 1.webm → 1.mov → 1.MP4 → 1.WEBM → 1.MOV`
- 해당 번호에서 이미지가 없고 동영상이 있으면, 상세페이지 슬라이드쇼와 썸네일에 자동으로 동영상으로 표시됩니다.
- **히어로(맨 위) 배너**도 같은 방식으로 동작합니다. `index.html`의
  `<video id="hero-video" data-base="images/Personal/10Desert">` /
  `<img id="hero-img" data-base="images/Personal/10Desert">` 의 `data-base`를 원하는 프로젝트 경로로 바꾸면,
  그 프로젝트의 `1.*` 파일이 이미지든 동영상이든 자동으로 배너에 표시됩니다.
  (지금은 `10Desert/1.mp4`가 배너로 나오도록 설정되어 있습니다.)
- 동영상은 음소거(muted)로 자동 재생/반복되며, 상세페이지에서는 재생 컨트롤이 표시됩니다.

## 3. 새 프로젝트 추가/수정하는 법

`script.js` 맨 위 `PROJECTS` 배열에 항목 하나를 추가/수정하면 됩니다:

```js
{
  id: "11NewProject",          // images/Personal/ 아래 실제 폴더명과 정확히 일치해야 함
  label: "New Project",        // 그리드/상세페이지에 보일 이름
  category: "Environment",     // 태그
  desc: "짧은 설명 한 줄",
  role: "Modeling / Lighting",
  scope: "Personal",
  focus: "...",
  pipeline: "Blender · Substance",
},
```

그리고 `images/Personal/11NewProject/` 폴더를 만들어 `1.png, 2.png ...` 순서로 이미지를 넣으면 끝입니다.

## 4. GitHub Pages 배포

1. 저장소(`jhee40630-tech/jiheeSEO-Portfolio`)에 `index.html`, `style.css`, `script.js`, `README.md`, `images/` 폴더를 **모두** 커밋 & push
   - GitHub Desktop에서 커밋 전 "Changes" 목록에 `images` 폴더 전체가 포함돼 있는지 꼭 확인하세요. 코드 4개 파일만 보이고 `images`가 안 보이면 이미지가 저장소에 안 올라간 것입니다.
2. GitHub 저장소 → **Settings → Pages** → Source를 `main` 브랜치 `/ (root)`로 설정
3. 몇 분 후 `https://jhee40630-tech.github.io/jiheeSEO-Portfolio/` 에서 확인

## 5. 그래도 이미지가 안 뜰 때 체크리스트

1. GitHub 저장소 웹페이지에서 `images/Personal/폴더명` 을 직접 클릭해 들어가서 파일이 실제로 있는지 확인
2. 폴더명이 `script.js`의 `id`와 대소문자까지 정확히 같은지 확인 (`Sci-fi Container` 처럼 띄어쓰기·하이픈도 정확히)
3. 배포된 사이트에서 **F12 → Network 탭** 열고 새로고침 → 빨간색(404)으로 뜨는 요청의 정확한 경로를 확인하면 원인이 바로 보입니다
4. 그래도 안 풀리면 그 Network 탭 스크린샷을 공유해 주세요 — 실패한 요청 경로만 보면 바로 원인을 짚을 수 있습니다

## 6. 커스터마이징 포인트

- **색상 / 폰트**: `style.css` 상단 `:root` 변수 (`--bg`, `--rust`, `--f-display` 등)
- **그리드 모자이크 비율**: `style.css`의 `.tile[data-i="N"]` 블록 (칸마다 grid-column/row span 조절)
- **히어로 배경 이미지**: `index.html`의 `<img id="hero-img" data-base="images/Personal/07Alley">` — `data-base`만 원하는 프로젝트 경로로 바꾸면 됨
