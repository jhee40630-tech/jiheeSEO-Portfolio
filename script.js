/* =========================================================
   1) EDIT THIS LIST to match your own /images/ subfolders.
      "id"    -> exact folder name under /images/
      "label" -> display name shown on the tile
      "cover" -> filename of the thumbnail inside that folder
      (this mirrors the "01University, 02House, 03Zbrush..." layout
       already on your drive — just keep folder names identical)
   ========================================================= */
const FOLDERS = [
  { id: "01University",         label: "University",        cover: "1.png" },
  { id: "02House",               label: "House",              cover: "1.png" },
  { id: "03Zbrush",              label: "ZBrush Sculpt",      cover: "1.png" },
  { id: "04Sci-fi Container",    label: "Sci-fi Container",   cover: "1.png" },
  { id: "05Computer",            label: "Computer",           cover: "1.png" },
  { id: "06Pillar",              label: "Pillar",             cover: "1.png" },
  { id: "07Alley",               label: "Alley",              cover: "1.png" },
  { id: "08Trebuchet",           label: "Trebuchet",          cover: "1.png" },
  { id: "09Gate",                label: "Gate",                cover: "1.png" },
  { id: "10Desert",              label: "Desert",             cover: "1.png" },
];

/* Grid rhythm applied in order across the 6-column mosaic.
   First entry is always the big feature tile. */
const PATTERN = ["feature", "wide", "narrow", "narrow", "wide", "wide", "narrow", "narrow", "wide", "narrow"];

function buildMosaic() {
  const mosaic = document.getElementById("mosaic");
  const countEl = document.getElementById("work-count");
  if (!mosaic) return;

  mosaic.innerHTML = "";

  FOLDERS.forEach((folder, i) => {
    const shape = PATTERN[i % PATTERN.length];
    const path = `images/${folder.id}/${folder.cover}`;
    const displayPath = `/${folder.id}/${folder.cover}`;

    const tile = document.createElement("a");
    tile.className = `tile ${shape}`;
    tile.href = path;          // click a tile to open the full image
    tile.target = "_blank";
    tile.rel = "noopener";

    tile.innerHTML = `
      <span class="tile-index">${String(i + 1).padStart(2, "0")}</span>
      <img src="${encodeURI(path)}" alt="${folder.label}" loading="lazy">
      <div class="tile-scrim"></div>
      <div class="tile-caption">
        <span class="tile-name">${folder.label}</span>
        <span class="tile-path">${displayPath}</span>
      </div>
    `;

    // if the file doesn't exist yet, swap in a clear placeholder
    const img = tile.querySelector("img");
    img.addEventListener("error", () => {
      tile.classList.add("placeholder");
      tile.removeAttribute("href");
      img.remove();
      const label = document.createElement("span");
      label.className = "placeholder-label";
      label.textContent = `${folder.label}\n${displayPath}`;
      tile.prepend(label);
    }, { once: true });

    mosaic.appendChild(tile);
  });

  if (countEl) countEl.textContent = `${FOLDERS.length} PROJECTS`;
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
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 10);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

document.addEventListener("DOMContentLoaded", () => {
  buildMosaic();
  initHeroFallback();
  initNavScroll();
});
