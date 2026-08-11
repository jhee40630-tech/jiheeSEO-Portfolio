/* =========================================================
   PROJECTS — 여기 배열 하나만 수정하면 사이트 전체가 바뀝니다.
   base: images 폴더 기준 실제 경로 (Personal 폴더 포함)
   ※ count/ext 는 적을 필요 없습니다 — 브라우저가 자동으로
     1.png → 1.jpg → 1.jpeg → 1.webp → 1.PNG ... 순서로 찾고,
     더 이상 찾을 수 없는 지점에서 자동으로 멈춥니다.
   ========================================================= */
const PROJECTS = [
  { id: "01University",         label: "University",         category: "Environment", desc: "캠퍼스 건축물을 하드서페이스 모델링으로 재구성한 프로젝트.", role: "Modeling / Lighting", scope: "Personal", focus: "Architecture", pipeline: "Blender · Substance" },
  { id: "02House",               label: "House",               category: "Environment", desc: "주거 공간의 구조와 채광을 스터디한 씬.", role: "Modeling / Texturing", scope: "Personal", focus: "Interior", pipeline: "Blender · Substance" },
  { id: "03Zbrush",               label: "Zbrush",               category: "Sculpt",      desc: "유기적 형태 스컬프팅 연습 시리즈.", role: "Sculpting", scope: "Personal", focus: "Organic Form", pipeline: "ZBrush · KeyShot" },
  { id: "04Sci-fi Container",     label: "Sci-fi Container",     category: "Hard Surface",desc: "SF 세계관의 컨테이너 구조물 디자인.", role: "Modeling / Lookdev", scope: "Personal", focus: "Hard Surface", pipeline: "Blender · Substance" },
  { id: "05Computer",             label: "Computer",             category: "Prop",        desc: "레트로 컴퓨터 프롭 모델링 및 재질 스터디.", role: "Modeling / Texturing", scope: "Personal", focus: "Prop Design", pipeline: "Blender · Substance" },
  { id: "06Pillar",               label: "Pillar",               category: "Environment", desc: "고대 건축 기둥의 마모와 질감을 재현.", role: "Sculpting / Texturing", scope: "Personal", focus: "Weathering", pipeline: "ZBrush · Substance" },
  { id: "07Alley",                label: "Alley",                category: "Environment", desc: "좁은 골목의 분위기와 조명을 다룬 씬.", role: "Modeling / Lighting", scope: "Personal", focus: "Mood & Lighting", pipeline: "Blender · Substance" },
  { id: "08Trebuchet",            label: "Trebuchet",            category: "Hard Surface",desc: "투석기 메커니즘을 기능적으로 모델링.", role: "Modeling", scope: "Personal", focus: "Mechanical", pipeline: "Blender" },
  { id: "09Gate",                 label: "Gate",                 category: "Environment", desc: "관문 구조물의 스케일과 디테일 스터디.", role: "Modeling / Lookdev", scope: "Personal", focus: "Architecture", pipeline: "Blender · Substance" },
  { id: "10Desert",               label: "Desert",               category: "Environment", desc: "사막 지형의 라이팅과 대기 표현.", role: "Environment / Lighting", scope: "Personal", focus: "Atmosphere", pipeline: "Blender · World Machine" },
];

// images/ 폴더 바로 아래에 Personal 폴더가 있는 실제 구조를 반영
const IMAGE_ROOT = "images/Personal";
const EXTENSIONS = ["png", "jpg", "jpeg", "webp", "PNG", "JPG", "JPEG"];
const MAX_PROBE = 60; // 폴더당 최대 탐색 장수 (안전 상한)

// University는 모자이크 그리드에 넣지 않고, "University" 라벨 아래 별도 이미지로 뺍니다.
const FEATURED_ID = "01University";

function projectBase(id) {
  return `${IMAGE_ROOT}/${id}`;
}

/** 파일 하나가 실제로 로드되는지 확인 (Promise) */
function probeImage(url) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = url;
  });
}

/** n번 이미지에 대해 확장자를 순서대로 시도, 성공한 URL 반환 (없으면 null) */
async function resolveImageUrl(base, n) {
  for (const ext of EXTENSIONS) {
    const url = `${base}/${n}.${ext}`;
    // eslint-disable-next-line no-await-in-loop
    if (await probeImage(url)) return url;
  }
  return null;
}

/** 프로젝트 폴더 안의 이미지 전체를 순서대로 탐색해서 URL 배열 반환 */
async function resolveProjectImages(id) {
  const base = projectBase(id);
  const urls = [];
  for (let n = 1; n <= MAX_PROBE; n++) {
    // eslint-disable-next-line no-await-in-loop
    const url = await resolveImageUrl(base, n);
    if (!url) break;
    urls.push(url);
  }
  return urls;
}

/* cache so we only probe each project once */
const imageCache = new Map();
function getProjectImages(id) {
  if (!imageCache.has(id)) {
    imageCache.set(id, resolveProjectImages(id));
  }
  return imageCache.get(id);
}

/* ===================== GRID ===================== */
const grid = document.getElementById("grid");

/** id 맨 앞의 숫자(예: "10Desert" -> "10")를 타일 배지로 사용 */
function projectNumber(id) {
  const m = id.match(/^(\d+)/);
  return m ? m[1] : "";
}

function buildGrid() {
  grid.innerHTML = "";
  // 타일 크기(모자이크 모양)는 그대로 두고, 그 자리에 들어가는 프로젝트만 뒤집습니다.
  // → 큰 타일(맨 위)에는 번호가 큰 프로젝트(10Desert)가, 아래로 갈수록 작은 번호가 오게 됩니다.
  // University(01)는 별도 섹션이므로 그리드에서 제외합니다.
  const displayOrder = PROJECTS.filter((p) => p.id !== FEATURED_ID).reverse();
  displayOrder.forEach((p, i) => {
    const tile = document.createElement("a");
    tile.href = `#work/${p.id}`;
    tile.className = "tile loading";
    tile.dataset.i = i;
    tile.innerHTML = `
      <div class="tile-overlay">
        <span class="tile-index">${projectNumber(p.id)}</span>
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

    getProjectImages(p.id).then((urls) => {
      tile.classList.remove("loading");
      if (urls.length === 0) {
        tile.classList.add("is-placeholder");
        tile.insertAdjacentHTML(
          "afterbegin",
          `<span class="placeholder-path">${projectBase(p.id)}/1.*</span>`
        );
        return;
      }
      const img = document.createElement("img");
      img.src = urls[0];
      img.alt = p.label;
      tile.prepend(img);
    });
  });
}

/* hero image: probe extensions too */
async function setHeroImage() {
  const hero = document.getElementById("hero-img");
  const base = hero.dataset.base;
  const url = await resolveImageUrl(base, 1);
  if (url) hero.src = url;
}

/* standalone University spotlight (separate from the grid) */
async function setFeaturedUniversity() {
  const frame = document.getElementById("feature-university-frame");
  const img = document.getElementById("feature-university-img");
  if (!frame || !img) return;
  const urls = await getProjectImages(FEATURED_ID);
  if (urls.length === 0) {
    frame.classList.add("is-placeholder");
    frame.insertAdjacentHTML(
      "afterbegin",
      `<span class="placeholder-path">${projectBase(FEATURED_ID)}/1.*</span>`
    );
    return;
  }
  img.src = urls[0];
}

/* ===================== DETAIL PAGE ===================== */
const detail = document.getElementById("detail");
const detailFrame = document.getElementById("detail-frame");
const detailImg = document.getElementById("detail-img");
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
  const project = PROJECTS.find((p) => p.id === id);
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

  const nextIdx = (PROJECTS.indexOf(project) + 1) % PROJECTS.length;
  const nextProject = PROJECTS[nextIdx];
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
    detailCount.textContent = "0 / 0";
    return;
  }

  currentImages.forEach((url, i) => {
    const t = document.createElement("img");
    t.src = url;
    t.alt = `${project.label} ${i + 1}`;
    t.addEventListener("click", () => showImage(i));
    detailThumbs.appendChild(t);
  });

  showImage(0);
  startSlideshow();
}

function showImage(i) {
  if (!currentImages.length) return;
  currentIndex = (i + currentImages.length) % currentImages.length;
  detailImg.src = currentImages[currentIndex];
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

/* deep-link support: #work/07Alley */
function handleHash() {
  const m = location.hash.match(/^#work\/(.+)$/);
  if (m) {
    openDetail(decodeURIComponent(m[1]));
  } else {
    closeDetail();
  }
}
window.addEventListener("hashchange", handleHash);

/* ===================== INIT ===================== */
buildGrid();
setHeroImage();
setFeaturedUniversity();
handleHash();
