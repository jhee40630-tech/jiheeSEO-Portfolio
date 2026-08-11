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
