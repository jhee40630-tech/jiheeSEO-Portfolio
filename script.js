/* =========================================================
   PROJECTS — one entry per /images/ subfolder.

   id       : exact folder name under /images/  (case-sensitive on
              GitHub Pages! must match the on-disk folder name exactly —
              this is the #1 cause of broken thumbnails)
   label    : title shown on the tile and detail page
   category : small tag shown above the title (ENVIRONMENT / PROP / SCULPT ...)
   desc / role / scope / focus / pipeline : detail-page text fields

   NOTE: you no longer need to specify a file extension or an image
   count. The code below tries 1.png, 1.jpg, 1.jpeg, 1.webp (etc.)
   automatically, and keeps counting 2, 3, 4... until a number has
   no matching file in ANY extension — that's how it finds the
   right files and the right length by itself.
   ========================================================= */
const PROJECTS = [
  {
    id: "01University", label: "University", category: "ENVIRONMENT",
    desc: "대학교를 배경으로 한 환경 아트 작업입니다. 여기에 작업 설명을 채워 넣으세요.",
    role: "Full Pipeline",
    scope: "Environment Art · Lighting · Scene Composition",
    focus: "공간감 있는 캠퍼스 환경 연출",
    pipeline: "3ds Max → ZBrush → RizomUV → Substance Painter → UE5",
  },
  {
    id: "02House", label: "House", category: "ENVIRONMENT",
    desc: "주택을 소재로 한 환경 작업입니다. 여기에 작업 설명을 채워 넣으세요.",
    role: "Full Pipeline",
    scope: "Environment Art · Material Authoring · Lighting",
    focus: "생활감 있는 실내외 공간 표현",
    pipeline: "3ds Max → ZBrush → RizomUV → Substance Painter → UE5",
  },
  {
    id: "03Zbrush", label: "ZBrush Sculpt", category: "SCULPT",
    desc: "ZBrush 하이폴리 스컬핑 작업입니다. 여기에 작업 설명을 채워 넣으세요.",
    role: "Sculpting",
    scope: "High-poly Sculpt · Surface Detail",
    focus: "자연물의 표면 디테일 표현",
    pipeline: "ZBrush → RizomUV → Substance Painter",
  },
  {
    id: "04Sci-fi Container", label: "Sci-fi Container", category: "PROP",
    desc: "SF 컨테이너 프롭 작업입니다. 여기에 작업 설명을 채워 넣으세요.",
    role: "Full Pipeline",
    scope: "Hard-surface Modeling · Texturing",
    focus: "기능성이 느껴지는 SF 소품 디자인",
    pipeline: "3ds Max → Substance Painter → Marmoset → UE5",
  },
  {
    id: "05Computer", label: "Computer", category: "PROP",
    desc: "레트로 컴퓨터 프롭 작업입니다. 여기에 작업 설명을 채워 넣으세요.",
    role: "Full Pipeline",
    scope: "Hard-surface Modeling · Texturing · Set Dressing",
    focus: "시대감 있는 소품과 주변 연출",
    pipeline: "3ds Max → Substance Painter → Marmoset",
  },
  {
    id: "06Pillar", label: "Pillar", category: "PROP",
    desc: "석조 기둥 프롭 작업입니다. 여기에 작업 설명을 채워 넣으세요.",
    role: "Full Pipeline",
    scope: "Modeling · Sculpting · Texturing",
    focus: "고대 건축 장식 디테일 표현",
    pipeline: "3ds Max → ZBrush → Substance Painter",
  },
  {
    id: "07Alley", label: "Alley", category: "ENVIRONMENT",
    desc: "골목길을 배경으로 한 환경 아트 작업입니다. 여기에 작업 설명을 채워 넣으세요.",
    role: "Full Pipeline",
    scope: "Environment Art · Lighting · Scene Composition",
    focus: "네온과 그래피티가 있는 도심 뒷골목 분위기 연출",
    pipeline: "3ds Max → ZBrush → RizomUV → Substance Painter → UE5",
  },
  {
    id: "08Trebuchet", label: "Trebuchet", category: "PROP",
    desc: "투석기(트레뷰셋) 프롭 작업입니다. 여기에 작업 설명을 채워 넣으세요.",
    role: "Full Pipeline",
    scope: "Modeling · Texturing · Set Dressing",
    focus: "중세 공성 병기의 구조와 마모 표현",
    pipeline: "3ds Max → Substance Painter → UE5",
  },
  {
    id: "09Gate", label: "Gate", category: "ENVIRONMENT",
    desc: "성문/게이트를 배경으로 한 환경 작업입니다. 여기에 작업 설명을 채워 넣으세요.",
    role: "Full Pipeline",
    scope: "Environment Art · Sculpting · Lighting",
    focus: "위압감 있는 진입로 공간 구성",
    pipeline: "3ds Max → ZBrush → RizomUV → Substance Painter → UE5",
  },
  {
    id: "10Desert", label: "Desert", category: "ENVIRONMENT",
    desc: "사막 환경 작업입니다. 여기에 작업 설명을 채워 넣으세요.",
    role: "Full Pipeline",
    scope: "Environment Art · Terrain · Lighting",
    focus: "광활한 사막 지형과 대기 표현",
    pipeline: "3ds Max → ZBrush → RizomUV → Substance Painter → UE5",
  },
];

/* extensions tried, in this order, for every numbered image file */
const IMAGE_EXTENSIONS = ["png", "jpg", "jpeg", "webp", "PNG", "JPG", "JPEG"];
/* safety cap — stop looking once a project reaches this many images
   even if files somehow kept going (protects against infinite loops) */
const MAX_IMAGES_PER_PROJECT = 40;

/* grid rhythm for the mosaic — first entry is always the feature tile */
const PATTERN = ["feature", "wide", "narrow", "narrow", "wide", "wide", "narrow", "narrow", "wide", "narrow"];

/* cache so we don't re-probe the same project twice */
const imageCache = new Map();

/** Try loading a single URL, resolving true/false instead of throwing. */
function testImage(src) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = encodeURI(src);
  });
}

/** Find which extension (if any) exists for images/<id>/<index>.<ext> */
async function resolveExtension(basePathNoExt) {
  for (const ext of IMAGE_EXTENSIONS) {
    // eslint-disable-next-line no-await-in-loop
    if (await testImage(`${basePathNoExt}.${ext}`)) return ext;
  }
  return null;
}

/**
 * Auto-detect every image belonging to a project: tries 1, 2, 3...
 * across all known extensions, and stops at the first number that
 * has no match in any extension.
 */
async function loadProjectImages(project) {
  if (imageCache.has(project.id)) return imageCache.get(project.id);

  const found = [];
  for (let i = 1; i <= MAX_IMAGES_PER_PROJECT; i++) {
    // eslint-disable-next-line no-await-in-loop
    const ext = await resolveExtension(`images/${project.id}/${i}`);
    if (!ext) break;
    found.push(`images/${project.id}/${i}.${ext}`);
  }

  imageCache.set(project.id, found);
  return found;
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

    const tile = document.createElement("a");
    tile.className = "tile loading " + shape;
    tile.href = `#work/${encodeURIComponent(project.id)}`;

    tile.innerHTML = `
      <span class="tile-index">${String(i + 1).padStart(2, "0")}</span>
      <div class="tile-scrim"></div>
      <div class="tile-caption">
        <span class="tile-name">${project.label}</span>
        <span class="tile-path">/${project.id}/</span>
      </div>
    `;
    mosaic.appendChild(tile);

    // resolve the cover image asynchronously, then fill it in (or fall
    // back to a clear placeholder if the folder has no readable image)
    loadProjectImages(project).then((images) => {
      if (!images.length) {
        tile.classList.remove("loading");
        tile.classList.add("placeholder");
        const label = document.createElement("span");
        label.className = "placeholder-label";
        label.textContent = `${project.label}\nimages/${project.id}/ 폴더에\n이미지를 찾지 못했습니다`;
        tile.prepend(label);
        return;
      }
      const img = document.createElement("img");
      img.src = encodeURI(images[0]);
      img.alt = project.label;
      img.loading = "lazy";
      tile.insertBefore(img, tile.firstChild.nextSibling);
      tile.classList.remove("loading");
    });
  });

  if (countEl) countEl.textContent = `${PROJECTS.length} PROJECTS`;
}

function initHeroFallback() {
  const heroImg = document.querySelector(".hero-img");
  if (!heroImg) return;
  const base = heroImg.dataset.base || "images/01University/1";
  let i = 0;
  const tryNext = () => {
    if (i >= IMAGE_EXTENSIONS.length) {
      heroImg.remove();
      document.querySelector(".hero-media").style.background =
        "linear-gradient(160deg, #241d15, #0e0d0c 70%)";
      return;
    }
    heroImg.src = encodeURI(`${base}.${IMAGE_EXTENSIONS[i]}`);
    i++;
  };
  heroImg.addEventListener("error", tryNext);
  tryNext();
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

async function openDetail(id) {
  const project = PROJECTS.find((p) => p.id === id);
  if (!project) { location.hash = "#top"; return; }

  detail.project = project;
  detail.index = 0;

  detailEl.category.textContent = project.category;
  detailEl.title.textContent = project.label;
  detailEl.desc.textContent = project.desc || "";
  detailEl.role.textContent = project.role || "—";
  detailEl.scope.textContent = project.scope || "—";
  detailEl.focus.textContent = project.focus || "—";
  detailEl.pipeline.textContent = project.pipeline || "—";

  detailEl.frame.classList.add("loading");
  detailEl.image.removeAttribute("src");
  detailEl.thumbs.innerHTML = "";

  document.body.classList.add("detail-open");
  detailEl.section.setAttribute("aria-hidden", "false");
  window.scrollTo(0, 0);

  detail.images = await loadProjectImages(project);
  detailEl.frame.classList.remove("loading");

  if (!detail.images.length) {
    detailEl.frame.style.background = "linear-gradient(160deg, #241d15, #0e0d0c 70%)";
    detailEl.image.removeAttribute("src");
  } else {
    detail.images.forEach((src, i) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "detail-thumb";
      btn.innerHTML = `<img src="${encodeURI(src)}" alt="${project.label} ${i + 1}" loading="lazy">`;
      btn.addEventListener("click", () => showImage(i));
      detailEl.thumbs.appendChild(btn);
    });
    showImage(0);
  }

  detail.playing = detail.images.length > 1;
  restartSlideshow();

  const currentPos = PROJECTS.findIndex((p) => p.id === id);
  const nextProject = PROJECTS[(currentPos + 1) % PROJECTS.length];
  detailEl.nextProject.innerHTML = `
    <span class="detail-nextproject-label">NEXT</span>
    <a href="#work/${encodeURIComponent(nextProject.id)}">${nextProject.label} →</a>
  `;
}

function closeDetail() {
  document.body.classList.remove("detail-open");
  detailEl.section.setAttribute("aria-hidden", "true");
  stopSlideshow();
}

function showImage(i) {
  const n = detail.images.length;
  if (!n) return;
  detail.index = ((i % n) + n) % n;
  detailEl.image.src = encodeURI(detail.images[detail.index]);
  detailEl.image.alt = `${detail.project.label} ${detail.index + 1}`;

  [...detailEl.thumbs.children].forEach((el, idx) =>
    el.classList.toggle("active", idx === detail.index)
  );
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
