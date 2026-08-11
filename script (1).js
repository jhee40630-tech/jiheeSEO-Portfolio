/* =========================================================
   PROJECTS — one entry per /images/ subfolder.

   id        : exact folder name under /images/  (case-sensitive on
               GitHub Pages! must match on-disk name exactly)
   label     : title shown on the tile and detail page
   category  : small tag shown above the title (ENVIRONMENT / PROP / SCULPT ...)
   count     : how many numbered images are in that folder (1.png, 2.png, ...)
   ext       : file extension used inside that folder
   desc      : short paragraph shown on the detail page — write your own
   role/scope/focus/pipeline : info panel fields, like the ROLE / SCOPE /
               FOCUS / PIPELINE block on your reference site

   To add a new project: copy a block, change the fields, done —
   the mosaic tile AND its detail page are both generated from this.
   ========================================================= */
const PROJECTS = [
  {
    id: "01University", label: "University", category: "ENVIRONMENT",
    count: 1, ext: "png",
    desc: "대학교를 배경으로 한 환경 아트 작업입니다. 여기에 작업 설명을 채워 넣으세요.",
    role: "Full Pipeline",
    scope: "Environment Art · Lighting · Scene Composition",
    focus: "공간감 있는 캠퍼스 환경 연출",
    pipeline: "3ds Max → ZBrush → RizomUV → Substance Painter → UE5",
  },
  {
    id: "02House", label: "House", category: "ENVIRONMENT",
    count: 1, ext: "png",
    desc: "주택을 소재로 한 환경 작업입니다. 여기에 작업 설명을 채워 넣으세요.",
    role: "Full Pipeline",
    scope: "Environment Art · Material Authoring · Lighting",
    focus: "생활감 있는 실내외 공간 표현",
    pipeline: "3ds Max → ZBrush → RizomUV → Substance Painter → UE5",
  },
  {
    id: "03Zbrush", label: "ZBrush Sculpt", category: "SCULPT",
    count: 1, ext: "png",
    desc: "ZBrush 하이폴리 스컬핑 작업입니다. 여기에 작업 설명을 채워 넣으세요.",
    role: "Sculpting",
    scope: "High-poly Sculpt · Surface Detail",
    focus: "자연물의 표면 디테일 표현",
    pipeline: "ZBrush → RizomUV → Substance Painter",
  },
  {
    id: "04Sci-fi Container", label: "Sci-fi Container", category: "PROP",
    count: 1, ext: "png",
    desc: "SF 컨테이너 프롭 작업입니다. 여기에 작업 설명을 채워 넣으세요.",
    role: "Full Pipeline",
    scope: "Hard-surface Modeling · Texturing",
    focus: "기능성이 느껴지는 SF 소품 디자인",
    pipeline: "3ds Max → Substance Painter → Marmoset → UE5",
  },
  {
    id: "05Computer", label: "Computer", category: "PROP",
    count: 1, ext: "png",
    desc: "레트로 컴퓨터 프롭 작업입니다. 여기에 작업 설명을 채워 넣으세요.",
    role: "Full Pipeline",
    scope: "Hard-surface Modeling · Texturing · Set Dressing",
    focus: "시대감 있는 소품과 주변 연출",
    pipeline: "3ds Max → Substance Painter → Marmoset",
  },
  {
    id: "06Pillar", label: "Pillar", category: "PROP",
    count: 1, ext: "png",
    desc: "석조 기둥 프롭 작업입니다. 여기에 작업 설명을 채워 넣으세요.",
    role: "Full Pipeline",
    scope: "Modeling · Sculpting · Texturing",
    focus: "고대 건축 장식 디테일 표현",
    pipeline: "3ds Max → ZBrush → Substance Painter",
  },
  {
    id: "07Alley", label: "Alley", category: "ENVIRONMENT",
    count: 9, ext: "png",
    desc: "골목길을 배경으로 한 환경 아트 작업입니다. 여기에 작업 설명을 채워 넣으세요.",
    role: "Full Pipeline",
    scope: "Environment Art · Lighting · Scene Composition",
    focus: "네온과 그래피티가 있는 도심 뒷골목 분위기 연출",
    pipeline: "3ds Max → ZBrush → RizomUV → Substance Painter → UE5",
  },
  {
    id: "08Trebuchet", label: "Trebuchet", category: "PROP",
    count: 1, ext: "png",
    desc: "투석기(트레뷰셋) 프롭 작업입니다. 여기에 작업 설명을 채워 넣으세요.",
    role: "Full Pipeline",
    scope: "Modeling · Texturing · Set Dressing",
    focus: "중세 공성 병기의 구조와 마모 표현",
    pipeline: "3ds Max → Substance Painter → UE5",
  },
  {
    id: "09Gate", label: "Gate", category: "ENVIRONMENT",
    count: 1, ext: "png",
    desc: "성문/게이트를 배경으로 한 환경 작업입니다. 여기에 작업 설명을 채워 넣으세요.",
    role: "Full Pipeline",
    scope: "Environment Art · Sculpting · Lighting",
    focus: "위압감 있는 진입로 공간 구성",
    pipeline: "3ds Max → ZBrush → RizomUV → Substance Painter → UE5",
  },
  {
    id: "10Desert", label: "Desert", category: "ENVIRONMENT",
    count: 1, ext: "png",
    desc: "사막 환경 작업입니다. 여기에 작업 설명을 채워 넣으세요.",
    role: "Full Pipeline",
    scope: "Environment Art · Terrain · Lighting",
    focus: "광활한 사막 지형과 대기 표현",
    pipeline: "3ds Max → ZBrush → RizomUV → Substance Painter → UE5",
  },
];

/* grid rhythm for the mosaic — first entry is always the feature tile */
const PATTERN = ["feature", "wide", "narrow", "narrow", "wide", "wide", "narrow", "narrow", "wide", "narrow"];

/* helper: build the list of image paths for a project, e.g.
   images/07Alley/1.png, images/07Alley/2.png, ... */
function projectImages(project) {
  const paths = [];
  for (let i = 1; i <= project.count; i++) {
    paths.push(`images/${project.id}/${i}.${project.ext}`);
  }
  return paths;
}

/* =========================================================
   HOME — build the works mosaic
   ========================================================= */
function buildMosaic() {
  const mosaic = document.getElementById("mosaic");
  const countEl = document.getElementById("work-count");
  if (!mosaic) return;

  mosaic.innerHTML = "";

  PROJECTS.forEach((project, i) => {
    const shape = PATTERN[i % PATTERN.length];
    const cover = projectImages(project)[0];
    const displayPath = `/${project.id}/1.${project.ext}`;

    const tile = document.createElement("a");
    tile.className = `tile ${shape}`;
    tile.href = `#work/${encodeURIComponent(project.id)}`;

    tile.innerHTML = `
      <span class="tile-index">${String(i + 1).padStart(2, "0")}</span>
      <img src="${encodeURI(cover)}" alt="${project.label}" loading="lazy">
      <div class="tile-scrim"></div>
      <div class="tile-caption">
        <span class="tile-name">${project.label}</span>
        <span class="tile-path">${displayPath}</span>
      </div>
    `;

    const img = tile.querySelector("img");
    img.addEventListener("error", () => {
      tile.classList.add("placeholder");
      img.remove();
      const label = document.createElement("span");
      label.className = "placeholder-label";
      label.textContent = `${project.label}\n${displayPath}`;
      tile.prepend(label);
    }, { once: true });

    mosaic.appendChild(tile);
  });

  if (countEl) countEl.textContent = `${PROJECTS.length} PROJECTS`;
}

function initHeroFallback() {
  const heroImg = document.querySelector(".hero-img");
  if (!heroImg) return;
  heroImg.addEventListener("error", () => {
    heroImg.remove();
    document.querySelector(".hero-media").style.background =
      "linear-gradient(160deg, #241d15, #0e0d0c 70%)";
  }, { once: true });
}

function initNavScroll() {
  const nav = document.getElementById("nav");
  if (!nav) return;
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 10 || document.body.classList.contains("detail-open"));
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

/* =========================================================
   DETAIL VIEW — slideshow + info panel for a single project
   ========================================================= */
const detail = {
  project: null,
  images: [],
  index: 0,
  playing: true,
  timer: null,
};

const detailEl = {
  section: document.getElementById("detail"),
  category: document.getElementById("detail-category"),
  title: document.getElementById("detail-title"),
  frame: document.getElementById("detail-frame"),
  image: document.getElementById("detail-image"),
  prev: document.getElementById("detail-prev"),
  next: document.getElementById("detail-next"),
  play: document.getElementById("detail-play"),
  desc: document.getElementById("detail-desc"),
  role: document.getElementById("detail-role"),
  scope: document.getElementById("detail-scope"),
  focus: document.getElementById("detail-focus"),
  pipeline: document.getElementById("detail-pipeline"),
  thumbs: document.getElementById("detail-thumbs"),
  nextProject: document.getElementById("detail-nextproject"),
};

function openDetail(id) {
  const project = PROJECTS.find((p) => p.id === id);
  if (!project) { location.hash = "#top"; return; }

  detail.project = project;
  detail.images = projectImages(project);
  detail.index = 0;
  detail.playing = detail.images.length > 1;

  detailEl.category.textContent = project.category;
  detailEl.title.textContent = project.label;
  detailEl.desc.textContent = project.desc || "";
  detailEl.role.textContent = project.role || "—";
  detailEl.scope.textContent = project.scope || "—";
  detailEl.focus.textContent = project.focus || "—";
  detailEl.pipeline.textContent = project.pipeline || "—";

  // thumbnail rail
  detailEl.thumbs.innerHTML = "";
  detail.images.forEach((src, i) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "detail-thumb";
    btn.innerHTML = `<img src="${encodeURI(src)}" alt="${project.label} ${i + 1}" loading="lazy">`;
    btn.addEventListener("click", () => showImage(i));
    btn.addEventListener("error", () => btn.remove(), true);
    detailEl.thumbs.appendChild(btn);
  });

  // next-project link
  const currentPos = PROJECTS.findIndex((p) => p.id === id);
  const nextProject = PROJECTS[(currentPos + 1) % PROJECTS.length];
  detailEl.nextProject.innerHTML = `
    <span class="detail-nextproject-label">NEXT</span>
    <a href="#work/${encodeURIComponent(nextProject.id)}">${nextProject.label} →</a>
  `;

  showImage(0);
  document.body.classList.add("detail-open");
  detailEl.section.setAttribute("aria-hidden", "false");
  window.scrollTo(0, 0);
  restartSlideshow();
}

function closeDetail() {
  document.body.classList.remove("detail-open");
  detailEl.section.setAttribute("aria-hidden", "true");
  stopSlideshow();
}

function showImage(i) {
  const n = detail.images.length;
  detail.index = ((i % n) + n) % n;
  detailEl.image.src = encodeURI(detail.images[detail.index]);
  detailEl.image.alt = `${detail.project.label} ${detail.index + 1}`;

  [...detailEl.thumbs.children].forEach((el, idx) =>
    el.classList.toggle("active", idx === detail.index)
  );

  detailEl.image.addEventListener("error", () => {
    detailEl.frame.style.background = "linear-gradient(160deg, #241d15, #0e0d0c 70%)";
  }, { once: true });
}

function stepImage(dir) {
  showImage(detail.index + dir);
  restartSlideshow();
}

function restartSlideshow() {
  stopSlideshow();
  detailEl.play.textContent = detail.playing ? "⏸" : "▶";
  if (!detail.playing || detail.images.length <= 1) return;
  detail.timer = setInterval(() => showImage(detail.index + 1), 4500);
}
function stopSlideshow() {
  if (detail.timer) clearInterval(detail.timer);
  detail.timer = null;
}
function togglePlay() {
  detail.playing = !detail.playing;
  restartSlideshow();
}

function initDetailControls() {
  detailEl.prev.addEventListener("click", () => stepImage(-1));
  detailEl.next.addEventListener("click", () => stepImage(1));
  detailEl.play.addEventListener("click", togglePlay);
  document.addEventListener("keydown", (e) => {
    if (!document.body.classList.contains("detail-open")) return;
    if (e.key === "ArrowLeft") stepImage(-1);
    if (e.key === "ArrowRight") stepImage(1);
    if (e.key === "Escape") location.hash = "#top";
  });
}

/* =========================================================
   ROUTER — #work/<id> opens the detail view, anything else closes it
   ========================================================= */
function handleRoute() {
  const hash = location.hash;
  const match = hash.match(/^#work\/(.+)$/);
  if (match) {
    openDetail(decodeURIComponent(match[1]));
  } else {
    closeDetail();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  buildMosaic();
  initHeroFallback();
  initNavScroll();
  initDetailControls();
  window.addEventListener("hashchange", handleRoute);
  handleRoute(); // in case the page was loaded directly on a #work/... link
});
