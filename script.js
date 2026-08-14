/* =========================================================
   PROJECTS — 그리드에 들어가는 9개. 순서: 10,9,8,6,7,5,4,2,3
   (Alley/Pillar 위치를 서로 바꿔서 6(Pillar)이 7(Alley)보다 먼저 나옴 —
    마우스오버 숫자와 칸 크기는 아래 style.css의 data-i 순서를 참고)
   UNIVERSITY — 그리드에 넣지 않고 별도 "University" 섹션으로 분리.
   base: images 폴더 기준 실제 경로 (Personal 폴더 포함)
   ※ count/ext 는 적을 필요 없습니다 — 브라우저가 자동으로
     1.png → 1.jpg → 1.jpeg → 1.webp → 1.PNG ... 순서로 찾고,
     더 이상 찾을 수 없는 지점에서 자동으로 멈춥니다.
   ========================================================= */
const PROJECTS = [
  { id: "10Desert",               label: "Desert",               category: "Environment", desc: "고대 문명의 흔적이 남아 있는 사막 속 유적 공간을 제작했습니다. 반복되는 건축 구조와 장식 요소를 활용해 규모감 있는 공간을 구성하는 데 집중했습니다.", role: "Full Pipeline", scope: "Environment Art · Material Authoring · Lighting · Scene Composition", focus: "모듈형 환경 구성 · 건축 디테일 · 재질 변화 · 공간 연출", pipeline: "3DS Max → ZBrush → Substance Painter → UE5" },
  { id: "09Gate",                 label: "Gate",                 category: "Environment", desc: "화려한 장식이 남아 있는 고전 건축 양식의 대형 게이트를 제작했습니다. 석재 조각과 금속 장식의 대비를 살리면서 반복 구조와 세부 장식의 밀도를 조절하는 데 집중했습니다.", role: "Full Pipeline", scope: "Environment Art · Prop Art · Material Authoring · Lighting", focus: "건축 조형 · 석재 디테일 · 장식 패턴 · 소재 대비", pipeline: "3DS Max → ZBrush → Substance Painter → UE5" },
  { id: "08Trebuchet",            label: "Trebuchet",            category: "Hard Surface",desc: "오랜 시간 야외에서 사용된 중세 투석기를 제작했습니다. 목재와 금속의 노화 차이를 살리고, 구조적으로 설득력 있는 형태와 사용 흔적을 표현하는 데 집중했습니다.", role: "Full Pipeline", scope: "Prop Art · Material Authoring · Lighting · Scene Composition", focus: "목재 재질 · 금속 마모 · 구조 표현 · 자연스러운 노화", pipeline: "3DS Max → ZBrush → Substance Painter → Marmoset" },
  { id: "06Pillar",               label: "Pillar",               category: "Environment", desc: "건축 환경에 반복적으로 활용할 수 있는 장식형 석조 기둥을 제작했습니다. 큰 형태를 유지하면서 조각 디테일과 표면 손상이 자연스럽게 이어지도록 작업했습니다.", role: "Full Pipeline", scope: "Environment Prop · Sculpting · Material Authoring", focus: "석재 조각 · 표면 손상 · 장식 디테일 · 모듈 활용", pipeline: "3DS Max → ZBrush → Substance Painter → Marmoset" },
  { id: "07Alley",                label: "Alley",                category: "Environment", desc: "도심 골목에 오랫동안 놓여 있던 쓰레기 컨테이너를 중심으로 작은 환경을 구성했습니다. 반복되는 먼지와 얼룩, 생활 흔적을 더해 실제 사용된 공간처럼 보이도록 표현했습니다.", role: "Full Pipeline", scope: "Environment Art · Prop Art · Material Authoring · Scene Composition", focus: "생활 오염 · 표면 마모 · 스티커 디테일 · 환경적 맥락", pipeline: "3DS Max → Substance Painter → UE5" },
  { id: "05Computer",             label: "Computer",             category: "Prop",        desc: "오래된 전자기기의 형태와 사용감을 재해석한 레트로 컴퓨터를 제작했습니다. 플라스틱 변색과 스티커, 먼지 등 작은 흔적을 활용해 오브젝트의 시간감을 표현했습니다.", role: "Full Pipeline", scope: "Prop Art · Material Authoring · Lighting", focus: "플라스틱 재질 · 사용 흔적 · 그래픽 디테일 · 소품 연출", pipeline: "3DS Max → Substance Painter → Marmoset" },
  { id: "04Sci-fi Container",     label: "Sci-fi Container",     category: "Hard Surface",desc: "산업용 장비를 연상시키는 SF 스타일의 수납 박스를 제작했습니다. 하드서페이스 구조와 패널 분할을 정리하고, 기능적으로 보이는 디테일과 소재 변화를 표현하는 데 집중했습니다.", role: "Full Pipeline", scope: "Prop Art · Hard Surface · Material Authoring · Lighting", focus: "건축 실루엣 · 재질 구분 · 소품 배치 · 판타지 분위기", pipeline: "3DS Max → Photoshop → Unity" },
  { id: "02House",               label: "House",               category: "Environment", desc: "판타지 세계의 작은 상점을 상상해 건물과 주변 소품을 함께 제작했습니다. 목재와 회벽, 기와 등 다양한 재질을 구분하면서 비대칭적인 형태와 장식으로 개성을 살렸습니다.", role: "Full Pipeline", scope: "Environment Prop · Sculpting · Material Authoring", focus: "암석 형태 · 표면 침식 · 균열 디테일 · 자연스러운 실루엣", pipeline: "ZBrush → Substance Painter → Marmoset" },
  { id: "03Zbrush",               label: "Zbrush",               category: "Sculpt",      desc: "유기적 형태 스컬프팅 연습 시리즈.", role: "Full Pipeline", scope: "Environment Art · Prop Art · Material Authoring · Scene Composition", focus: "건축 실루엣 · 재질 구분 · 소품 배치 · 판타지 분위기", pipeline: "3DS Max → Photoshop → Unity" },
];

/* University는 그리드가 아니라 별도 섹션에서 2개 썸네일(DESIGN & OBJECTS / PAINTING & DRAWING)로 나뉘어 보인다.
   각 항목의 id는 images/Personal/ 아래 실제 하위 폴더 경로와 "공백 하나까지" 정확히 일치해야 함:
   images/Personal/01University/01DESIGN & OBJECTS/
   images/Personal/01University/02PAINTING & DRAWING/
   ※ 실제 저장소 폴더명이 "02PAINTING & DRAWING"(공백 + & + 공백 포함)으로 되어 있어서,
     id를 그 이름과 정확히 일치시켰다. (한때 공백을 없앤 "02PaintingDrawing"로 바꾼 적이 있는데,
     실제 폴더는 리네임되지 않은 채 남아있어서 경로가 어긋나 이 폴더의 파일이 전부 404가 나고
     썸네일이 통째로 빈 placeholder로 보였던 것 — 원인이었다.) 폴더를 다시 리네임하는 대신,
     DESIGN & OBJECTS 폴더처럼 공백/& 그대로 쓰는 실제 이름에 코드를 맞췄다.
   (폴더 안에는 상세페이지용 1,2,3... 번호 이미지와, 썸네일용 tub1/tub2 파일을 넣는다.
    tub1/tub2가 없으면 thu1/thu2도 자동으로 시도하고, 그것도 없으면 1.*로 대체한다.) */
const UNIVERSITY_ITEMS = [
  {
    id: "01University/01DESIGN & OBJECTS",
    label: "DESIGN & OBJECTS",
    sub: "Digital Illustration · Sculpture · Branding",
    category: "Design / Illustration",
    desc: "일러스트레이션, 조형, 브랜딩 등 대학 시절 진행한 디자인 및 오브젝트 작업 아카이브.",
    type: "University Project / Personal Work",
    scope: "University",
    focus: "Design & Object",
    pipeline: "Mixed Media · Digital",
  },
  {
    id: "01University/02PAINTING & DRAWING",
    label: "PAINTING & DRAWING",
    sub: "Oil · Watercolor · Oriental Painting · Drawing",
    category: "Painting / Drawing",
    desc: "유화, 수채화, 동양화, 드로잉 등 다양한 매체로 진행한 회화 작업 아카이브.",
    role: "Painting / Drawing",
    scope: "University",
    focus: "Traditional Media",
    pipeline: "Oil · Watercolor · Ink",
  },
];

// 상세페이지 조회 / "다음 프로젝트" 순환에는 University 2개 항목까지 포함해서 사용
const ALL_PROJECTS = [...PROJECTS, ...UNIVERSITY_ITEMS];

// images/ 폴더 바로 아래에 Personal 폴더가 있는 실제 구조를 반영
const IMAGE_ROOT = "images/Personal";
const EXTENSIONS = ["png", "jpg", "jpeg", "webp", "PNG", "JPG", "JPEG"];
const VIDEO_EXTENSIONS = ["mp4", "webm", "mov", "MP4", "WEBM", "MOV"];
const MAX_PROBE = 60; // 폴더당 최대 탐색 장수 (안전 상한)

function projectBase(id) {
  return `${IMAGE_ROOT}/${id}`;
}

/** 파일 하나가 실제로 이미지로 로드되는지 확인 (Promise) */
function probeImage(url) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = url;
  });
}

/** 파일 하나가 실제로 동영상으로 로드되는지 확인 (Promise) */
function probeVideo(url) {
  return new Promise((resolve) => {
    const v = document.createElement("video");
    v.preload = "metadata";
    v.onloadedmetadata = () => resolve(true);
    v.onerror = () => resolve(false);
    v.src = url;
  });
}

/** n번 슬롯에 대해 이미지 확장자를 먼저 시도하고, 없으면 동영상 확장자를 시도한다.
    성공하면 { url, type: "image" | "video" } 를 반환하고, 없으면 null. */
async function resolveMediaUrl(base, n) {
  for (const ext of EXTENSIONS) {
    const url = `${base}/${n}.${ext}`;
    // eslint-disable-next-line no-await-in-loop
    if (await probeImage(url)) return { url, type: "image" };
  }
  for (const ext of VIDEO_EXTENSIONS) {
    const url = `${base}/${n}.${ext}`;
    // eslint-disable-next-line no-await-in-loop
    if (await probeVideo(url)) return { url, type: "video" };
  }
  return null;
}

/** 이전 버전과의 호환용 — 이미지 URL 문자열만 필요할 때 사용 (썸네일 등) */
async function resolveImageUrl(base, n) {
  for (const ext of EXTENSIONS) {
    const url = `${base}/${n}.${ext}`;
    // eslint-disable-next-line no-await-in-loop
    if (await probeImage(url)) return url;
  }
  return null;
}

/** 프로젝트 폴더 안의 이미지/동영상 전체를 순서대로 탐색해서
    { url, type } 배열로 반환 (사진과 동영상이 섞여 있어도 됨) */
async function resolveProjectImages(id) {
  const base = projectBase(id);
  const media = [];
  for (let n = 1; n <= MAX_PROBE; n++) {
    // eslint-disable-next-line no-await-in-loop
    const item = await resolveMediaUrl(base, n);
    if (!item) break;
    media.push(item);
  }
  return media;
}

/* cache so we only probe each project once */
const imageCache = new Map();
function getProjectImages(id) {
  if (!imageCache.has(id)) {
    imageCache.set(id, resolveProjectImages(id));
  }
  return imageCache.get(id);
}

/* ===================== HOVER THUMBNAILS (thu1 / thu2) =====================
   각 프로젝트 폴더 안에 thu1.*, thu2.* 파일을 넣으면:
   - 평소엔 thu1 이미지가 보이고
   - 마우스를 올리면 thu2 이미지로 바뀌었다가, 마우스를 떼면 다시 thu1로 돌아옴
   thu1/thu2가 없는 폴더는 기존처럼 1.* 이미지를 그대로 사용(하위 호환). */
async function resolveThumb(base, name) {
  for (const ext of EXTENSIONS) {
    const url = `${base}/${name}.${ext}`;
    // eslint-disable-next-line no-await-in-loop
    if (await probeImage(url)) return url;
  }
  return null;
}

/* name1/name2로 찾을 파일명을 바꿀 수 있음 — 기본은 thu1/thu2, University 2개 섹션은 tub1/tub2 사용 */
const thumbCache = new Map();
function getProjectThumbs(id, name1 = "thu1", name2 = "thu2") {
  const cacheKey = `${id}::${name1}::${name2}`;
  if (!thumbCache.has(cacheKey)) {
    const base = projectBase(id);
    thumbCache.set(
      cacheKey,
      Promise.all([resolveThumb(base, name1), resolveThumb(base, name2)]).then(
        ([thu1, thu2]) => {
          // 콘솔(F12)에서 정확히 어떤 경로를 찾다가 실패했는지 바로 확인 가능
          if (!thu1) {
            console.warn(
              `[thumb 없음] ${base}/${name1}.(png/jpg/jpeg/webp) 를 찾지 못해 1.* 이미지로 대체합니다. 파일명이 정확히 소문자 "${name1}"인지, 경로가 맞는지 확인하세요.`
            );
          } else if (!thu2) {
            console.warn(
              `[thumb 없음] ${base}/${name2}.(png/jpg/jpeg/webp) 를 찾지 못해 마우스오버 전환 없이 ${name1}로 고정됩니다.`
            );
          }
          return { thu1, thu2 };
        }
      )
    );
  }
  return thumbCache.get(cacheKey);
}

/* University 섹션 전용: tub1/tub2 를 먼저 찾고, 없으면 thu1/thu2 로도 찾아본다.
   (다른 프로젝트 폴더와 실수로 같은 thu1/thu2 파일명을 넣어도 그대로 동작하도록 하는 안전장치) */
const universityThumbCache = new Map();
function getUniversityThumbs(id) {
  if (!universityThumbCache.has(id)) {
    const base = projectBase(id);
    universityThumbCache.set(
      id,
      (async () => {
        let thu1 = await resolveThumb(base, "tub1");
        let thu2 = await resolveThumb(base, "tub2");
        if (!thu1) {
          thu1 = await resolveThumb(base, "thu1");
          thu2 = await resolveThumb(base, "thu2");
        }
        if (!thu1) {
          console.warn(
            `[thumb 없음] ${base}/tub1.* 와 ${base}/thu1.* 를 모두 찾지 못해 1.* 이미지로 대체합니다. 폴더 경로(공백/철자)와 파일명을 확인하세요.`
          );
        } else if (!thu2) {
          console.warn(
            `[thumb 없음] 두 번째 썸네일(tub2 또는 thu2)을 찾지 못해 마우스오버 전환 없이 첫 번째 썸네일로 고정됩니다.`
          );
        }
        return { thu1, thu2 };
      })()
    );
  }
  return universityThumbCache.get(id);
}

/** tile(또는 spotlight tile) 엘리먼트에 hover 시 thu1 -> thu2 전환 동작을 연결 */
function attachHoverThumb(tile, img, mainUrl, thu2Url) {
  if (!thu2Url) return; // thu2가 없으면 hover 전환 없이 mainUrl 고정
  tile.addEventListener("mouseenter", () => { img.src = thu2Url; });
  tile.addEventListener("mouseleave", () => { img.src = mainUrl; });
}

/* ===================== GRID ===================== */
const grid = document.getElementById("grid");

function buildGrid() {
  grid.innerHTML = "";
  PROJECTS.forEach((p, i) => {
    const tile = document.createElement("a");
    tile.href = `#work/${p.id}`;
    tile.className = "tile loading";
    tile.dataset.i = i;
    tile.innerHTML = `
      <div class="tile-overlay">
        <span class="tile-index">${String(i + 1).padStart(2, "0")}</span>
        <span class="tile-name">${p.label}</span>
        <span class="tile-cat">${p.category}</span>
      </div>
    `;
    tile.addEventListener("click", (e) => {
      e.preventDefault();
      openDetail(p.id);
      history.pushState(null, "", `#work/${p.id}`);
    });
    grid.appendChild(tile);

    getProjectThumbs(p.id).then(async ({ thu1, thu2 }) => {
      tile.classList.remove("loading");
      let mainUrl = thu1;
      if (!mainUrl) {
        // thu1이 없으면 기존처럼 번호 매긴 첫 "이미지"로 대체 (동영상은 썸네일로 못 씀)
        const media = await getProjectImages(p.id);
        const firstImage = media.find((m) => m.type === "image");
        mainUrl = firstImage ? firstImage.url : null;
      }
      if (!mainUrl) {
        tile.classList.add("is-placeholder");
        tile.insertAdjacentHTML(
          "afterbegin",
          `<span class="placeholder-path">${projectBase(p.id)}/thu1.* (또는 1.*)</span>`
        );
        return;
      }
      const img = document.createElement("img");
      img.src = mainUrl;
      img.alt = p.label;
      tile.prepend(img);
      attachHoverThumb(tile, img, mainUrl, thu2);
    });
  });
}

/* hero banner: 이미지/동영상 확장자를 모두 탐색해서, 찾은 쪽만 보여준다.
   (현재 10Desert/1.mp4 처럼 동영상이 있으면 자동으로 동영상 배너가 됨) */
async function setHeroImage() {
  const heroVideo = document.getElementById("hero-video");
  const heroImg = document.getElementById("hero-img");
  const base = heroImg.dataset.base;
  const media = await resolveMediaUrl(base, 1);
  if (!media) return;
  if (media.type === "video") {
    heroVideo.src = media.url;
    heroVideo.style.display = "block";
    heroImg.style.display = "none";
  } else {
    heroImg.src = media.url;
    heroImg.style.display = "block";
    heroVideo.style.display = "none";
  }
}

/* ===================== UNIVERSITY 섹션 — DESIGN & OBJECTS / PAINTING & DRAWING 2분할 =====================
   그리드 타일과 동일한 마크업(.tile / .tile-overlay)을 재사용해서 동작도 똑같이 맞춘다:
   평소엔 사진만 보이고, 마우스를 올렸을 때만 제목(tile-name) + 소분류(tile-sub) 텍스트가 나타남.
   썸네일 파일명은 다른 프로젝트(thu1/thu2)와 다르게 tub1/tub2를 사용. */
const universityDuo = document.getElementById("university-duo");

function buildUniversityDuo() {
  if (!universityDuo) return;
  universityDuo.innerHTML = "";

  UNIVERSITY_ITEMS.forEach((p) => {
    const tile = document.createElement("a");
    tile.href = `#work/${p.id}`;
    tile.className = "tile loading";
    tile.innerHTML = `
      <div class="tile-overlay">
        <span class="tile-name">${p.label}</span>
        <span class="tile-sub">${p.sub}</span>
      </div>
    `;
    tile.addEventListener("click", (e) => {
      e.preventDefault();
      openDetail(p.id);
      history.pushState(null, "", `#work/${p.id}`);
    });
    universityDuo.appendChild(tile);

    getUniversityThumbs(p.id).then(async ({ thu1, thu2 }) => {
      tile.classList.remove("loading");
      let mainUrl = thu1;
      if (!mainUrl) {
        // tub1/thu1이 없으면 기존처럼 번호 매긴 첫 "이미지"로 대체 (동영상은 썸네일로 못 씀)
        const media = await getProjectImages(p.id);
        const firstImage = media.find((m) => m.type === "image");
        mainUrl = firstImage ? firstImage.url : null;
      }
      if (!mainUrl) {
        tile.classList.add("is-placeholder");
        tile.insertAdjacentHTML(
          "afterbegin",
          `<span class="placeholder-path">${projectBase(p.id)}/tub1.* 또는 thu1.* (또는 1.*)</span>`
        );
        return;
      }
      const img = document.createElement("img");
      img.src = mainUrl;
      img.alt = p.label;
      tile.prepend(img);
      attachHoverThumb(tile, img, mainUrl, thu2);
    });
  });
}

/* ===================== DETAIL PAGE ===================== */
const detail = document.getElementById("detail");
const detailFrame = document.getElementById("detail-frame");
const detailImg = document.getElementById("detail-img");
const detailVideo = document.getElementById("detail-video");
const detailCount = document.getElementById("detail-count");
const detailThumbs = document.getElementById("detail-thumbs");
const detailPlay = document.getElementById("detail-play");
const detailClose = document.getElementById("detail-close");
const detailPrev = document.getElementById("detail-prev");
const detailNext = document.getElementById("detail-next");
const detailNextProject = document.getElementById("detail-next-project");
const detailNextProjectName = document.getElementById("detail-next-project-name");

let currentProject = null;
let currentImages = [];
let currentIndex = 0;
let slideTimer = null;
let isPlaying = true;

async function openDetail(id) {
  const project = ALL_PROJECTS.find((p) => p.id === id);
  if (!project) return;
  currentProject = project;
  currentIndex = 0;

  document.getElementById("detail-category").textContent = project.category;
  document.getElementById("detail-title").textContent = project.label;
  document.getElementById("detail-desc").textContent = project.desc;
  document.getElementById("detail-role").textContent = project.role;
  document.getElementById("detail-scope").textContent = project.scope;
  document.getElementById("detail-focus").textContent = project.focus;
  document.getElementById("detail-pipeline").textContent = project.pipeline;

  const nextIdx = (ALL_PROJECTS.indexOf(project) + 1) % ALL_PROJECTS.length;
  const nextProject = ALL_PROJECTS[nextIdx];
  detailNextProjectName.textContent = nextProject.label;
  detailNextProject.onclick = (e) => {
    e.preventDefault();
    openDetail(nextProject.id);
    history.pushState(null, "", `#work/${nextProject.id}`);
  };

  detail.classList.add("is-open");
  detail.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  detailFrame.classList.add("loading");
  detailThumbs.innerHTML = "";
  currentImages = await getProjectImages(id);
  detailFrame.classList.remove("loading");

  if (currentImages.length === 0) {
    detailImg.removeAttribute("src");
    detailVideo.pause();
    detailVideo.removeAttribute("src");
    detailImg.style.display = "none";
    detailVideo.style.display = "none";
    detailCount.textContent = "0 / 0";
    return;
  }

  currentImages.forEach((item, i) => {
    let t;
    if (item.type === "video") {
      t = document.createElement("video");
      t.src = item.url;
      t.muted = true;
      t.preload = "metadata";
      t.playsInline = true;
    } else {
      t = document.createElement("img");
      t.src = item.url;
      t.alt = `${project.label} ${i + 1}`;
    }
    t.addEventListener("click", () => showImage(i));
    detailThumbs.appendChild(t);
  });

  showImage(0);
  startSlideshow();
}

function showImage(i) {
  if (!currentImages.length) return;
  currentIndex = (i + currentImages.length) % currentImages.length;
  const item = currentImages[currentIndex];

  if (item.type === "video") {
    detailImg.style.display = "none";
    detailImg.removeAttribute("src");
    detailVideo.style.display = "block";
    detailVideo.src = item.url;
    detailVideo.currentTime = 0;
    detailVideo.play().catch(() => {});
  } else {
    detailVideo.pause();
    detailVideo.style.display = "none";
    detailVideo.removeAttribute("src");
    detailImg.style.display = "block";
    detailImg.src = item.url;
  }

  detailCount.textContent = `${currentIndex + 1} / ${currentImages.length}`;
  [...detailThumbs.children].forEach((el, idx) =>
    el.classList.toggle("is-active", idx === currentIndex)
  );
}

function startSlideshow() {
  stopSlideshow();
  if (!isPlaying) return;
  slideTimer = setInterval(() => showImage(currentIndex + 1), 4500);
}
function stopSlideshow() {
  if (slideTimer) clearInterval(slideTimer);
  slideTimer = null;
}

function closeDetail() {
  detail.classList.remove("is-open");
  detail.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  stopSlideshow();
  detailVideo.pause();
  if (location.hash.startsWith("#work/")) {
    history.pushState(null, "", "#works");
  }
}

detailClose.addEventListener("click", closeDetail);
detailPrev.addEventListener("click", () => { showImage(currentIndex - 1); startSlideshow(); });
detailNext.addEventListener("click", () => { showImage(currentIndex + 1); startSlideshow(); });
detailPlay.addEventListener("click", () => {
  isPlaying = !isPlaying;
  detailPlay.textContent = isPlaying ? "❚❚" : "▶";
  if (isPlaying) startSlideshow(); else stopSlideshow();
});

window.addEventListener("keydown", (e) => {
  if (!detail.classList.contains("is-open")) return;
  if (e.key === "Escape") closeDetail();
  if (e.key === "ArrowRight") { showImage(currentIndex + 1); startSlideshow(); }
  if (e.key === "ArrowLeft") { showImage(currentIndex - 1); startSlideshow(); }
});

/* ===================== ABOUT PAGE (상단 네비 ABOUT 클릭 시 여는 전체화면 프로필 페이지) ===================== */
const aboutPage = document.getElementById("about");
const aboutBack = document.getElementById("about-back");
const navAbout = document.getElementById("nav-about");

function openAbout() {
  aboutPage.classList.add("is-open");
  aboutPage.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeAbout() {
  aboutPage.classList.remove("is-open");
  aboutPage.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  if (location.hash === "#about") {
    history.pushState(null, "", "#works");
  }
}

if (navAbout) {
  navAbout.addEventListener("click", (e) => {
    e.preventDefault();
    closeDetail();
    openAbout();
    history.pushState(null, "", "#about");
  });
}
if (aboutBack) {
  aboutBack.addEventListener("click", (e) => {
    e.preventDefault();
    closeAbout();
  });
}
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && aboutPage.classList.contains("is-open")) closeAbout();
});

/* deep-link support: #work/07Alley , #about */
function handleHash() {
  const m = location.hash.match(/^#work\/(.+)$/);
  if (m) {
    closeAbout();
    openDetail(decodeURIComponent(m[1]));
  } else if (location.hash === "#about") {
    closeDetail();
    openAbout();
  } else {
    closeDetail();
    closeAbout();
  }
}
window.addEventListener("hashchange", handleHash);

/* ===================== INIT ===================== */
buildGrid();
setHeroImage();
buildUniversityDuo();
handleHash();
