# jiheeSEO Portfolio — 사용 안내

## 폴더 구조
지금 코드는 님이 쓰던 폴더 구조를 그대로 이어받게 만들었어요.

```
portfolio/
├─ index.html
├─ style.css
├─ script.js
└─ images/
   ├─ 01University/1.png
   ├─ 02House/1.png
   ├─ 03Zbrush/1.png
   ├─ 04Sci-fi Container/1.png
   ├─ 05Computer/1.png
   ├─ 06Pillar/1.png
   ├─ 07Alley/1.png
   ├─ 08Trebuchet/1.png
   ├─ 09Gate/1.png
   └─ 10Desert/1.png
```

E드라이브에 있는 `images/Personal/` 폴더들을 그대로 이 `images/` 폴더 안에 복사해 넣으면 됩니다.
(폴더 이름은 원본 그대로 두세요 — `script.js`가 그 이름으로 경로를 찾습니다.)

## 이미지/텍스트 수정하는 법
`script.js` 맨 위 `FOLDERS` 배열만 고치면 WORKS 그리드가 자동으로 만들어집니다.

```js
{ id: "07Alley", label: "Alley", cover: "1.png" }
```

- `id` : `images/` 안의 실제 폴더 이름 (대소문자, 띄어쓰기까지 정확히)
- `label` : 화면에 보일 작품 이름 (한글로 바꿔도 됩니다, 예: "골목길")
- `cover` : 그 폴더에서 대표 썸네일로 쓸 파일 이름

항목을 추가/삭제하고 싶으면 배열에 줄을 더하거나 지우면 됩니다. 순서 = 그리드에 나오는 순서입니다.
아직 이미지를 안 넣은 폴더는 화면에 "폴더명 / 경로"가 적힌 빗금 플레이스홀더로 표시되니,
경로가 맞았는지 바로 확인할 수 있어요.

## 히어로(맨 위 큰 이미지) 바꾸기
`index.html`에서 이 줄을 찾아 원하는 대표 이미지 경로로 바꾸세요.

```html
<img src="images/01University/1.png" alt="" class="hero-img" ...>
```

## 이름 / 이메일 / 소개글 바꾸기
`index.html` 안에서 아래 부분들을 직접 수정하면 됩니다.
- `<p class="hero-name">— JIHEE SEO</p>`
- `about` 섹션의 소개 문단
- 맨 아래 `mailto:youremail@example.com`

## 이미지 확장자·개수, 이제 자동 감지됩니다
전에는 `count`(이미지 개수)와 `ext`(확장자)를 직접 적어야 했는데, 그게 실제 파일과
안 맞으면 썸네일이 안 뜨는 원인이 됐습니다. 이번 버전부터는 그 두 값을 아예 없앴고,
코드가 브라우저에서 직접 `1.png` → `1.jpg` → `1.jpeg` → `1.webp` → `1.PNG` ... 순서로
파일이 있는지 확인해서 맞는 걸 자동으로 찾습니다. 개수도 `1, 2, 3...` 순서로 계속
확인하다가 어떤 번호에서 어떤 확장자로도 파일을 못 찾으면 거기서 멈춰서 자동으로
"이 프로젝트는 이미지가 N장이구나"를 알아냅니다.

즉 `PROJECTS` 배열에는 이제 `id / label / category / desc / role / scope / focus / pipeline`만
있으면 됩니다. 폴더 안 파일이 `.jpg`든 `.png`든 섞여 있어도 상관없이 작동합니다.

## 작업 클릭 → 상세페이지
WORKS 그리드에서 타일을 클릭하면 `#work/폴더명` 주소로 이동하면서
전체화면 상세페이지가 열립니다. 큰 이미지 + 재생/일시정지 + 오른쪽 썸네일 목록 +
ROLE/SCOPE/FOCUS/PIPELINE 정보 패널로 구성됩니다.

```js
{
  id: "07Alley", label: "Alley", category: "ENVIRONMENT",
  desc: "골목길을 배경으로 한 환경 아트 작업입니다...",
  role: "Full Pipeline",
  scope: "Environment Art · Lighting · Scene Composition",
  focus: "네온과 그래피티가 있는 도심 뒷골목 분위기 연출",
  pipeline: "3ds Max → ZBrush → RizomUV → Substance Painter → UE5",
}
```

- `desc / role / scope / focus / pipeline`은 전부 원하는 문구로 바꾸시면 됩니다.
- 상세페이지 안에서는 좌우 화살표 키, 재생 버튼 클릭, 오른쪽 썸네일 클릭으로 이미지를 넘길 수 있고
  4.5초마다 자동 재생됩니다. 맨 아래엔 다음 프로젝트로 넘어가는 링크도 있습니다.

## 그래도 썸네일이 안 뜰 때 체크리스트
확장자 문제는 이제 자동으로 해결되지만, 아래 두 가지는 코드가 대신 고쳐줄 수 없는
부분이라 여전히 직접 확인이 필요합니다.

1. **폴더 이름 자체가 다른 경우** — GitHub Pages는 대소문자를 구분합니다.
   `script.js`의 `PROJECTS` 배열 `id` 값과 실제 `images/` 안 폴더명이
   철자·대소문자·띄어쓰기까지 정확히 같은지 확인하세요.
2. **`images` 폴더 자체가 저장소에 안 올라간 경우** — GitHub 저장소 페이지에서
   `images` 폴더가 실제로 보이는지 먼저 확인하세요. (전에 한 번 이 문제가 있었죠 —
   커밋할 때 이미지 폴더가 목록에 안 보이면 아직 로컬 저장소 폴더 안에 안 들어간 겁니다.)

그래도 안 뜨면 배포된 사이트에서 F12(개발자 도구) → **Network** 탭 → 새로고침 →
빨간색(404) 요청을 확인하면 정확히 어떤 경로가 실패하는지 바로 보입니다. 그 스크린샷을
보내주시면 정확한 원인을 짚어드릴게요.

## GitHub Pages에 올리는 법
1. GitHub에서 새 저장소를 만듭니다 (예: `jiheeseo-portfolio`).
2. 이 폴더(`index.html`, `style.css`, `script.js`, `images/` 전체)를 저장소에 그대로 업로드/푸시합니다.
   ```bash
   git init
   git add .
   git commit -m "portfolio init"
   git branch -M main
   git remote add origin https://github.com/사용자명/저장소명.git
   git push -u origin main
   ```
3. GitHub 저장소 → **Settings → Pages** 로 들어갑니다.
4. **Source**를 `Deploy from a branch`로 두고, Branch는 `main` / `/ (root)`를 선택 후 저장합니다.
5. 1~2분 뒤 `https://사용자명.github.io/저장소명/` 주소로 접속하면 사이트가 보입니다.

## 로컬에서 미리 보기
저장소 폴더에서 아래 명령 중 하나를 실행한 뒤 브라우저에서 `http://localhost:8080` 접속:
```bash
python3 -m http.server 8080
# 또는
npx serve .
```
