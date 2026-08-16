# Jihee Seo Portfolio — 설정 가이드

## 1. 폴더 구조 (중요)

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
      ├─ about/
      │   └─ 1.png                        ← ABOUT 페이지 프로필 사진
      ├─ 01University/
      │   ├─ 01DESIGN & OBJECTS/           ← University 왼쪽 썸네일
      │   │   ├─ tub1.png                  ← 기본 썸네일
      │   │   ├─ tub2.png                  ← 마우스오버 썸네일
      │   │   ├─ 1.jpg, 2.jpg ...          ← 상세페이지 슬라이드쇼용
      │   │   └─ ...
      │   └─ 02PaintingDrawing/            ← University 오른쪽 썸네일 (공백 없는 폴더명!)
      │       ├─ tub1.png
      │       ├─ tub2.png
      │       ├─ 1.png, 2.png ...
      │       └─ ...
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

폴더명은 `script.js` 상단 `PROJECTS` / `UNIVERSITY_ITEMS` 배열의 `id` 값과 **철자·대소문자까지 정확히**
일치해야 합니다. `01University` 하위의 두 폴더명은 지금 `01DESIGN & OBJECTS`, `02PaintingDrawing`
(첫 번째만 공백·`&` 포함, 두 번째는 공백/특수문자 없이 붙여 쓴 이름)로 가정해 코드를 작성했습니다 —
실제 폴더명이 다르면 `script.js` 맨 위 `UNIVERSITY_ITEMS` 배열의 두 `id` 값만 그에 맞게 고치면 됩니다.

## 2. 확장자 / 이미지 개수 — 신경 쓰지 않아도 됩니다

이전 버전은 확장자를 `.png`로 고정해놓아서 `.jpg` 파일이 섞여 있으면 실패했습니다.
지금 버전은 브라우저에서 실시간으로 각 번호에 대해

```
1.png → 1.jpg → 1.jpeg → 1.webp → 1.PNG → 1.JPG → 1.JPEG
```

순서로 실제 존재하는 파일을 찾고, 어떤 확장자로도 찾지 못하는 번호에서 자동으로 멈춥니다.
따라서 폴더마다 이미지가 몇 장인지, 확장자가 뭔지 코드에 적을 필요가 없습니다.
(폴더당 최대 60장까지 자동 탐색 — 그 이상이면 `script.js`의 `MAX_PROBE` 값을 늘리세요.)

## 2-1. 그리드 썸네일 마우스오버 (thu1) — 이미지는 안 바뀌고 확대만 됩니다

이전 버전은 마우스를 올리면 `thu1` → `thu2`로 이미지 자체가 바뀌었는데, 지금은 그렇지 않습니다.
각 프로젝트 폴더(`images/Personal/폴더명/`) 안에 `thu1` 파일 하나만 넣으면:

- 평소에는 **thu1** 이미지가 그대로 보이고
- 마우스를 올리면 **같은 이미지가 살짝 확대(zoom)** 되면서, 제목과 함께 **제작 날짜**가 함께 나타납니다
  (예전엔 "01, 02..." 같은 작품 번호였는데, 지금은 `script.js`의 `PROJECTS` 배열에 있는 `date` 값이 그대로 표시됩니다).

```
images/Personal/07Alley/
├─ thu1.png   ← 그리드용 대표 썸네일 (이제 이거 하나면 충분합니다)
├─ 1.png      ← 상세페이지 슬라이드쇼용 이미지들
├─ 2.png
└─ ...
```

- 확장자는 기존 규칙과 동일하게 `png → jpg → jpeg → webp → PNG → JPG → JPEG` 순서로 자동 탐색합니다.
- `thu1`이 아예 없는 폴더는 기존처럼 `1.png` 등 번호 이미지가 자동으로 대신 쓰입니다(하위 호환).
- `thu2` 파일은 더 이상 찾지 않습니다 — 기존에 넣어둔 `thu2.png`가 폴더에 남아있어도 그냥 무시될 뿐
  문제되지 않으니, 지워도 되고 안 지워도 됩니다.
- 상세페이지(클릭 후 나오는 슬라이드쇼)는 이전과 동일하게 `1, 2, 3...` 번호 이미지를 사용합니다.

**날짜를 바꾸려면**: `script.js` 맨 위 `PROJECTS` 배열에서 해당 프로젝트의 `date: "2026.08"` 값을 원하는
날짜로 고치면 그리드 썸네일 마우스오버 텍스트에 바로 반영됩니다.

**University 섹션만 예외**: `01University` 아래 두 폴더(`01DESIGN & OBJECTS`, `02PaintingDrawing`)는
기본적으로 `thu1`이 아니라 **`tub1`** 파일명을 먼저 찾습니다. `tub1`이 없으면 **자동으로 `thu1`도 찾아보고**,
그것도 없으면 기존처럼 `1.*`로 대체합니다. 찾는 확장자 순서(png → jpg → jpeg → webp → PNG → JPG → JPEG)는
동일합니다. 두 썸네일 모두 그리드 상단의 Desert/Gate 타일과 같은 16:9 비율로 나란히 표시되고, 다른 썸네일처럼
평소엔 사진만 보이다가 마우스를 올렸을 때만 제목과 소분류 텍스트가 나타납니다 (University 섹션은 날짜 대신
소분류 텍스트를 그대로 사용합니다).

> ⚠️ **폴더명 공백 주의**: 두 번째 폴더는 예전에 `02PAINTING & DRAWING`(공백 포함)이었는데,
> 공백 개수가 한 칸이라도 어긋나면(`02 PAINTING...`처럼 번호 뒤 공백이 남거나, `&` 뒤에 공백이
> 두 칸 들어가는 등) 폴더 안의 `tub1`/`thu1`은 물론 `1.png` 같은 번호 이미지까지 전부 경로가
> 어긋나서 통째로 빈 placeholder가 됩니다. 눈으로 공백 개수를 세는 건 실수하기 쉬워서, 아예
> **공백을 없앤 `02PaintingDrawing`으로 폴더명을 바꾸는 방식**으로 코드를 수정했습니다. 실제
> 폴더도 정확히 `02PaintingDrawing`(공백 없이, 대소문자도 이대로)으로 이름을 바꿔주세요.

## 2-5. 그리드 배치 (3열 x 3행, 고정)

예전에는 칸마다 크기가 다른 모자이크 레이아웃이었는데, 지금은 전부 같은 크기의 작은 타일 9개가
3열 x 3행으로 나란히 배치됩니다. 순서는 `script.js`의 `PROJECTS` 배열 순서를 그대로 따라가며,
왼쪽 위부터 오른쪽 아래로 채워집니다:

```
Desert     Gate      Pillar
Trebuchet  Alley     Computer
Sci-fi Container   House   Zbrush
```

배치를 바꾸고 싶으면 `PROJECTS` 배열 안 항목의 순서만 바꾸면 됩니다 (3개씩 끊어서 한 줄이 됩니다).

## 2-6. 상세페이지 — 자동 슬라이드쇼 없음, 화살표는 "다음/이전 프로젝트"로 이동

- 예전에 있던 자동 재생(▶/❚❚) 기능은 제거했습니다. 사진이 저절로 넘어가지 않습니다.
- 상세페이지 좌우 화살표(‹ ›)와 하단의 "다음 프로젝트"는 이제 **같은 프로젝트 안의 사진을 넘기는 게
  아니라 완전히 다른 프로젝트(주제)로 이동**합니다. 키보드 ←/→ 도 동일하게 동작합니다.
- 같은 프로젝트 안의 여러 사진/영상은 오른쪽 사이드바의 세로 스크롤 목록에서 하나씩 클릭해서 봅니다.

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
   `index.html`에 `style.css?v=7`, `script.js?v=7`처럼 버전 숫자를 붙여뒀으니, **다음에 또 수정할 때마다
   `v=7`을 `v=8`, `v=9`...로 올려주세요.** 그러면 캐시와 상관없이 항상 최신 파일을 불러옵니다.
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

## 2-4. ABOUT 페이지

상단 메뉴의 **ABOUT**을 클릭하면 이력서 형태의 전체화면 프로필 페이지가 열립니다 (다른 프로젝트
상세페이지처럼 오버레이로 뜨고, 좌상단 **← Back**으로 닫힙니다).

- 프로필 사진은 `images/Personal/about/1.png` 경로를 그대로 사용합니다 — 이 경로에 파일이 있어야 보입니다.
- 이름/직함/이메일, TOOLS, EDUCATION, CAREER 내용은 `index.html`의 `<section class="about-page" id="about">`
  블록 안에 직접 텍스트로 들어가 있습니다 (다른 프로젝트처럼 자동 탐색되는 게 아니라 고정 텍스트입니다).
  내용을 바꾸려면 이 블록의 텍스트만 수정하면 됩니다.

## 2-7. 상세페이지 로딩 속도 최적화

- 예전 코드는 확장자(`png/jpg/jpeg/...`)와 슬라이드 번호(`1,2,3...`)를 전부 하나씩 순서대로
  기다렸다가(순차 요청) 다음 걸 시도했습니다. 이게 상세페이지를 열 때 오래 걸리는 가장 큰
  원인이었습니다. 지금은 여러 개를 동시에(병렬로) 요청해서 가장 먼저 찾아지는 걸 쓰도록
  바꿨습니다 — 코드만으로 할 수 있는 개선은 여기까지 반영했습니다.
- 화면 밖(스크롤해야 보이는) 썸네일은 `loading="lazy"`를 붙여서 실제로 스크롤해서 가까워질 때만
  불러오도록 했습니다. 동영상 썸네일은 클릭하기 전까지는 아예 다운로드하지 않습니다.
- **가장 큰 효과는 이미지 파일 자체를 줄이는 것입니다.** 렌더 결과물을 원본 해상도(8K 등) 그대로
  올리면 코드가 아무리 최적화되어도 느릴 수밖에 없습니다. 웹에 쓸 이미지는 보통 가로
  2000~2500px 정도면 충분히 선명하고, PNG보다 JPG(품질 80~90%)나 WebP로 저장하면 용량이
  크게 줄어듭니다. Photoshop "웹용으로 저장", 또는 무료 도구인 squoosh.app 등을 활용해서
  `thu1`, `1.png`, `2.png` 등 실제 이미지 파일들을 미리 리사이즈/압축해서 올리는 걸 추천합니다.

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
- **그리드 배치 순서**: `script.js`의 `PROJECTS` 배열 순서 (3개씩 한 줄, 위→아래로 채워짐)
- **그리드 타일 크기**: `style.css`의 `.grid`(열 개수)와 `.tile`(`aspect-ratio`) 블록
- **히어로 배경 이미지**: `index.html`의 `<img id="hero-img" data-base="images/Personal/10Desert">` — `data-base`만 원하는 프로젝트 경로로 바꾸면 됨
