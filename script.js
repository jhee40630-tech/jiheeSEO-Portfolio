/* =========================================================
   설정: 실제 저장소 폴더명에 맞춰 이 배열만 수정하면 됩니다.
   경로 구조: images/Personal/<id>/1.ext, 2.ext, 3.ext ...
   ========================================================= */

const IMAGE_ROOT = 'images/Personal/';

// 확장자 자동 감지 순서 (대소문자 포함)
const EXTENSIONS = ['png', 'jpg', 'jpeg', 'webp', 'PNG', 'JPG', 'JPEG', 'WEBP'];

// 그리드에 들어갈 9개 프로젝트: 10 -> 02 순서, 2(큰줄)/3(중간줄)/3(중간줄)/1(작은줄)
// size: 'large' x2, 'medium' x3+3, 'small' x1  ← 반드시 이 개수를 지켜야 피라미드가 유지됩니다.
// ※ 04, 06, 09 폴더명은 대화 중 정확히 확인되지 않아 임시값입니다.
//    실제 저장소의 images/Personal/ 하위 폴더명(대소문자까지 동일)으로 바꿔주세요.
const PROJECTS = [
  { id: '10Desert',    title: 'Desert',    size: 'large'  },
  { id: '09Gate',       title: 'Gate',       size: 'large'  }, // TODO: 실제 폴더명 확인
  { id: '08Trebuchet',  title: 'Trebuchet',  size: 'medium' },
  { id: '07Alley',      title: 'Alley',      size: 'medium' },
  { id: '06Project',    title: 'Project 06', size: 'medium' }, // TODO: 실제 폴더명 확인
  { id: '05Computer',   title: 'Computer',   size: 'medium' },
  { id: '04Project',    title: 'Project 04', size: 'medium' }, // TODO: 실제 폴더명 확인
  { id: '03Zbrush',     title: 'Zbrush',     size: 'medium' },
  { id: '02House',      title: 'House',      size: 'small'  },
];

// 그리드에서 제외되고 별도 섹션으로 빠지는 University
const UNIVERSITY = { id: '01University', title: 'University' };

/* =========================================================
   이미지 존재 여부 / 확장자 자동 탐색 유틸
   ========================================================= */

// 특정 폴더의 n번째 이미지 URL을 확장자를 바꿔가며 시도해서 찾는다.
// 성공하면 실제로 로드된 URL을 resolve, 전부 실패하면 null을 resolve.
function findImageUrl(folder, n) {
  return new Promise((resolve) => {
    let i = 0;
    const tryNext = () => {
      if (i >= EXTENSIONS.length) { resolve(null); return; }
      const url = `${IMAGE_ROOT}${folder}/${n}.${EXTENSIONS[i]}`;
      const img = new Image();
      img.onload = () => resolve(url);
      img.onerror = () => { i++; tryNext(); };
      img.src = url;
    };
    tryNext();
  });
}

// 1번부터 순서대로 시도해서 더 이상 찾을 수 없는 지점에서 멈추고
// 실제 존재하는 이미지 URL 배열을 반환한다 (개수를 코드에 적을 필요 없음).
async function detectImages(folder, { limit = 60 } = {}) {
  const urls = [];
  for (let n = 1; n <= limit; n++) {
    const url = await findImageUrl(folder, n);
    if (!url) break;
    urls.push(url);
  }
  return urls;
}

/* =========================================================
   렌더링
   ========================================================= */

const state = {
  items: [],      // [{ id, title, urls }]
  current: null,  // 현재 상세페이지에서 보고 있는 item
  slideIdx: 0,
};

async function buildGrid() {
  const grid = document.getElementById('grid');
  grid.innerHTML = '';

  for (const project of PROJECTS) {
    const urls = await detectImages(project.id);
    if (urls.length === 0) continue; // 이미지가 하나도 없으면 건너뜀

    const item = { ...project, urls };
    state.items.push(item);

    const tile = document.createElement('div');
    tile.className = 'tile';
    tile.dataset.size = project.size;
    tile.innerHTML = `
      <img src="${urls[0]}" alt="${project.title}" loading="lazy" />
      <div class="tile-label"><span class="tile-index">${project.id.replace(/[^0-9]/g,'')}</span>${project.title}</div>
    `;
    tile.addEventListener('click', () => openDetail(item));
    grid.appendChild(tile);
  }
}

async function buildUniversity() {
  const wrap = document.getElementById('university-feature');
  const urls = await detectImages(UNIVERSITY.id);
  if (urls.length === 0) return;

  const item = { ...UNIVERSITY, urls };
  state.items.push(item);

  wrap.innerHTML = `<img src="${urls[0]}" alt="${UNIVERSITY.title}" loading="lazy" />`;
  wrap.addEventListener('click', () => openDetail(item));
}

/* =========================================================
   상세페이지 (슬라이드 + 정보패널)
   ========================================================= */

const detailEl = document.getElementById('detail');
const slideImg = document.getElementById('slide-img');
const slideCounter = document.getElementById('slide-counter');
const detailTitle = document.getElementById('detail-title');
const detailId = document.getElementById('detail-id');
const detailThumbs = document.getElementById('detail-thumbs');

function openDetail(item) {
  state.current = item;
  state.slideIdx = 0;
  detailTitle.textContent = item.title;
  detailId.textContent = item.id;

  detailThumbs.innerHTML = item.urls
    .map((u, i) => `<img src="${u}" data-i="${i}" alt="${item.title} ${i + 1}" />`)
    .join('');
  detailThumbs.querySelectorAll('img').forEach((img) => {
    img.addEventListener('click', () => showSlide(Number(img.dataset.i)));
  });

  showSlide(0);
  detailEl.hidden = false;
  document.body.style.overflow = 'hidden';
}

function closeDetail() {
  detailEl.hidden = true;
  document.body.style.overflow = '';
}

function showSlide(i) {
  const item = state.current;
  if (!item) return;
  const total = item.urls.length;
  state.slideIdx = (i + total) % total;
  slideImg.src = item.urls[state.slideIdx];
  slideImg.alt = `${item.title} ${state.slideIdx + 1}`;
  slideCounter.textContent = `${state.slideIdx + 1} / ${total}`;
  detailThumbs.querySelectorAll('img').forEach((img, idx) => {
    img.classList.toggle('active', idx === state.slideIdx);
  });
}

document.getElementById('detail-close').addEventListener('click', closeDetail);
document.getElementById('slide-prev').addEventListener('click', () => showSlide(state.slideIdx - 1));
document.getElementById('slide-next').addEventListener('click', () => showSlide(state.slideIdx + 1));
document.addEventListener('keydown', (e) => {
  if (detailEl.hidden) return;
  if (e.key === 'Escape') closeDetail();
  if (e.key === 'ArrowLeft') showSlide(state.slideIdx - 1);
  if (e.key === 'ArrowRight') showSlide(state.slideIdx + 1);
});
detailEl.addEventListener('click', (e) => {
  if (e.target === detailEl) closeDetail();
});

/* =========================================================
   초기화
   ========================================================= */

(async function init() {
  await buildGrid();
  await buildUniversity();
})();
