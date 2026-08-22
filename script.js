/* =========================================================
   PROJECTS — 그리드에 들어가는 9개.
   더 이상 칸 크기가 전부 똑같은 3x3 균일 그리드가 아니라, 항목마다 "가로:세로 비율"
   (ratio, = 가로/세로)이 다른 "justified" 그리드입니다. 3개씩 끊어 한 줄이 되는 건
   그대로지만, 한 줄 안에서 각 타일의 너비는 ratio 값에 비례해서 자동으로 배분되고
   (넓은 비율일수록 더 넓게), 그 결과 같은 줄에 있는 타일들의 "높이"는 항상 똑같이
   맞춰집니다. 그리고 모든 줄의 좌우 끝은 항상 컨테이너 폭과 정확히 일치하므로
   (= 매 줄 너비가 동일) 줄마다 삐져나오거나 들어가는 문제가 생기지 않습니다.
   즉 아래 순서/묶음이 곧 배치입니다:
     1행: Desert(16:9) / Gate(16:9) / Pillar(세로 9:16)
     2행: Trebuchet(약간 가로형) / Alley(정사각) / Computer(정사각)
     3행: Sci-fi Container(정사각) / House(16:9) / Zbrush(정사각)
   ratio: 타일의 가로/세로 비율. 1 = 정사각형, 16/9 ≈ 1.78 = 가로형, 9/16 = 0.5625 = 세로형.
     정확한 숫자를 지킬 필요는 없고, 느낌만 맞으면 됩니다 — 값을 조금씩 조절해서
     줄 전체의 균형(한쪽 타일만 과하게 좁아지거나 넓어지지 않게)을 맞추는 용도로도 쓰세요.
   date: 썸네일에 마우스오버 시 표시되는 날짜 (기존 "작품 번호" 대체)
   period: 상세페이지에 표시되는 "제작기간"
   pipeline: 상세페이지 "TOOLS" 항목에 그대로 표시됨
   UNIVERSITY — 그리드에 넣지 않고 별도 "University" 섹션으로 분리.
   base: images 폴더 기준 실제 경로 (Personal 폴더 포함)
   ※ count/ext 는 적을 필요 없습니다 — 브라우저가 자동으로
     1.png → 1.jpg → 1.jpeg → 1.webp → 1.PNG ... 순서로 찾고,
     더 이상 찾을 수 없는 지점에서 자동으로 멈춥니다.
   ========================================================= */
const PROJECTS = [
  { id: "10Desert",           label: "Desert",           category: "Environment",  ratio: 16 / 9,  desc: "<strong>사막 한가운데 자리한 판타지 신전</strong>을 콘셉트로 제작한 환경 작업입니다.\n<strong>반복 가능한 건축 모듈</strong>과 주변 에셋을 조합해 넓은 신전 공간을 구성했으며, 초기 공간 구성과 후면의 대형 신전 제작에는 Meshy AI를 활용했습니다.",           date: "2026.08", period: "2026.04 – 2026.08", role: "Environment / Lighting",  scope: "Personal", focus: "Atmosphere",       pipeline: "3ds Max · ZBrush · Substance Painter · Unreal Engine 5" },
  { id: "09Gate",              label: "Gate",              category: "Prop",  ratio: 16 / 9,  desc: "<strong>고딕 건축의 아치와 석조 장식</strong>을 바탕으로, 웅장하고 장식적인 분위기의 게이트 에셋을 제작했습니다.\n큰 아치 구조를 중심으로 <strong>조각과 반복 장식</strong>을 배치해 형태의 깊이와 건축적인 인상이 잘 드러나도록 디자인했습니다.",       date: "2026.04", period: "2026.01 – 2026.04", role: "Modeling / Lookdev",       scope: "Personal", focus: "Architecture",      pipeline: "3ds Max · ZBrush · Substance Painter · Unreal Engine 5", sourceLabel: "Shrubland Landscape Environment", sourceUrl: "https://www.fab.com/listings/eb3e4466-17bd-44a5-b884-8dbf9a6e6ff3" },
  { id: "06Pillar",            label: "Pillar",            category: "Prop",  ratio: 9 / 16,  desc: "<strong>인도 사원 건축의 화려한 석조 장식</strong>을 참고해 제작한 기둥 에셋입니다.\n단단한 기둥 형태 위에 <strong>식물과 문양을 연상시키는 조각 요소</strong>를 더해, 장식이 풍부한 신전 공간에 어울리도록 디자인했습니다.",        date: "2026.01", period: "2025.12 – 2026.01", role: "Sculpting / Texturing",    scope: "Personal", focus: "Weathering",        pipeline: "3ds Max · ZBrush · Substance Painter · Unreal Engine 5", sourceLabel: "The Ruins of Solis Temple", sourceUrl: "https://www.fab.com/listings/7b463b18-2b65-4825-81af-9f34da7072af" },
  { id: "08Trebuchet",         label: "Trebuchet",         category: "Prop", ratio: 1.4,     desc: "<strong>중세 전장의 대형 공성 병기</strong>를 콘셉트로 제작한 투석기 프랍입니다.\n<strong>두꺼운 목재 프레임과 큰 바퀴</strong>를 중심으로 로프와 금속 부품을 구성해, 투석기 특유의 묵직한 구조와 기계적인 형태가 잘 드러나도록 작업했습니다.",        date: "2025.12", period: "2025.10 – 2025.12", role: "Modeling",                 scope: "Personal", focus: "Mechanical",        pipeline: "3ds Max · ZBrush · Substance Painter · Unreal Engine 5", sourceLabel: "Modular Medieval Environment", sourceUrl: "https://www.fab.com/listings/4cd36577-70b3-4c10-a63c-4943afbabf0b" },
  { id: "07Alley",             label: "Alley",             category: "Prop",  ratio: 1,       desc: "대형 쓰레기통이 놓인 어둡고 관리되지 않은 도시의 뒷골목을 콘셉트로 제작한 환경 작업입니다. <strong>골목을 이루는 주요 에셋을 직접 모델링하고 텍스처링</strong>했으며, 벽면의 낙서와 노출된 배관, 녹슨 금속과 흩어진 소품을 배치해 어수선하고 거친 골목의 분위기를 표현했습니다.",        date: "2025.10", period: "2025.09 – 2025.10", role: "Modeling / Lighting",      scope: "Personal", focus: "Mood & Lighting",   pipeline: "3ds Max · ZBrush · Substance Painter · Unreal Engine 5" },
  { id: "05Computer",          label: "Computer",          category: "Prop",         ratio: 1,       desc: "<strong>레트로 전자기기와 미래적인 디자인 요소</strong>를 결합해 제작한 컴퓨터 프랍입니다.\n둥근 플라스틱 바디와 화면, 버튼, 스티커 등의 디테일을 활용해 <strong>레트로 퓨처리즘</strong> 특유의 아날로그하고 기계적인 분위기를 표현했습니다.",   date: "2025.09", period: "2025.08 – 2025.09", role: "Modeling / Texturing",     scope: "Personal", focus: "Prop Design",       pipeline: "3ds Max · ZBrush · Substance Painter · Unreal Engine 5", sourceLabel: "Apartment Tech Props", sourceUrl: "https://www.fab.com/listings/1d9edbd4-9869-4f4b-9242-8fcfec52c43d" },
  { id: "04Sci-fi Container",  label: "Sci-fi Container",  category: "Prop", ratio: 1,       desc: "<strong>산업용 장비를 기반으로 디자인한 SF 스타일의 박스형 프랍</strong>입니다.\n<strong>단단한 프레임과 큰 패널 구조</strong>를 중심으로 기계적인 디테일과 그래픽 요소를 더해, 기능적인 장비의 느낌이 잘 드러나도록 제작했습니다.",        date: "2025.08", period: "2025.07 – 2025.08", role: "Modeling / Lookdev",       scope: "Personal", focus: "Hard Surface",      pipeline: "3ds Max · ZBrush · Substance Painter · Unreal Engine 5" },
  { id: "02House",             label: "House",             category: "Environment",  ratio: 16 / 9,  desc: "<strong>중세 목조 건축을 바탕으로 한 판타지 마법상점</strong>을 제작했습니다.\n<strong>목재 프레임과 붉은 지붕</strong>을 중심으로 돌출된 구조와 다양한 창문, 장식 요소를 배치해 마법상점 특유의 개성 있는 실루엣과 분위기를 표현했습니다.",      date: "2025.07", period: "2025.03 – 2025.07", role: "Modeling / Texturing",     scope: "Personal", focus: "Interior",          pipeline: "3ds Max · ZBrush · Substance Painter · Unreal Engine 5" },
  { id: "03Zbrush",            label: "Zbrush",            category: "Sculpt",       ratio: 1,       desc: "ZBrush로 제작한 암석과 타일 스컬프팅 작업입니다. 메인 암석 지형은 <strong>하나의 암석 에셋을 크기와 방향을 달리해 반복 배치</strong>하고, 자연스럽게 이어지는 큰 암반 형태로 구성했습니다. 이외에도 서로 다른 형태와 표면을 가진 암석 에셋과 장식 타일을 제작해 다양한 석재의 형태와 질감을 표현했습니다.",          date: "2025.05", period: "2025.05 – 진행중",   role: "Sculpting",                scope: "Personal", focus: "Organic Form",      pipeline: "3ds Max · ZBrush · Substance Painter · Unreal Engine 5" },
];

/* 한 줄에 몇 개씩 넣을지 (기존과 동일하게 3개씩 끊어서 한 줄). 순서를 유지한 채
   묶음 크기만 바꾸고 싶으면 이 숫자만 조절하면 됩니다. */
const GRID_ROW_SIZE = 3;

/* University는 그리드가 아니라 별도 섹션에서 2개 썸네일(DESIGN & OBJECTS / PAINTING & DRAWING)로 나뉘어 보인다.
   각 항목의 id는 images/Personal/ 아래 실제 하위 폴더 경로와 "공백 하나까지" 정확히 일치해야 함:
   images/Personal/01University/01DESIGN & OBJECTS/
   images/Personal/01University/02PAINTING & DRAWING/ */
const UNIVERSITY_ITEMS = [
  {
    id: "01University/01DESIGN & OBJECTS",
    label: "DESIGN & OBJECTS",
    sub: "Digital Illustration · Sculpture · Branding",
    category: "Design / Illustration",
    desc: "일러스트레이션, 조형, 브랜딩 등 대학 시절 진행한 디자인 및 오브젝트 작업 아카이브.",
    period: "2019 – 2021 (대학 재학 중)",
    role: "Illustration / Sculpture / Branding",
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
    period: "2017 – 2022 (대학 재학 중)",
    role: "Painting / Drawing",
    scope: "University",
    focus: "Traditional Media",
    pipeline: "Oil · Watercolor · Ink",
  },
];

// 상세페이지 조회 / "다음·이전 프로젝트" 이동에는 University 2개 항목까지 포함해서 사용
const ALL_PROJECTS = [...PROJECTS, ...UNIVERSITY_ITEMS];

// images/ 폴더 바로 아래에 Personal 폴더가 있는 실제 구조를 반영
const IMAGE_ROOT = "images/Personal";
// webp를 가장 먼저 시도 — 같은 번호에 png/jpg와 webp가 둘 다 있으면(지금 폴더처럼)
// 항상 더 가벼운 webp가 우선 채택된다. find(Boolean)이 배열 "순서"대로 첫 매치를
// 고르기 때문에, 실제로 어느 확장자가 먼저 응답했는지와 무관하게 이 순서가 그대로 우선순위가 된다.
const EXTENSIONS = ["webp", "WEBP", "png", "jpg", "jpeg", "PNG", "JPG", "JPEG"];
const VIDEO_EXTENSIONS = ["mp4", "webm", "mov", "MP4", "WEBM", "MOV"];
const MAX_PROBE = 60; // 폴더당 최대 탐색 장수 (안전 상한)
const PROBE_BATCH = 6; // 슬라이드 번호를 한 번에 몇 개씩 병렬로 탐색할지 (로딩 속도 최적화)

function projectBase(id) {
  return `${IMAGE_ROOT}/${id}`;
}

/* ===================== 사이트 전체 "확장자 학습" 캐시 =====================
   지금까지는 썸네일/1번 슬롯을 찾을 때마다 매번 webp/WEBP/png/jpg/jpeg/PNG/JPG/JPEG
   8종을 전부 동시에 요청해서 그 중 성공한 것 하나를 골랐다. 실제 파일 용량은
   100~270KB로 작은데도 "로딩"이 눈에 보였던 진짜 원인이 바로 이거다 — 실제 이미지를
   내려받기 전에, 존재하지도 않는 확장자 7개에 대한 404 왕복을 먼저 전부 기다려야
   했기 때문(파일 용량 문제가 아니라 "요청 방식" 문제).
   지금부터는 사이트에서 처음으로 어떤 확장자가 맞았는지 기억해두고, 다음 탐색부터는
   그 확장자 "하나만" 먼저 요청한다 — 맞으면(대부분의 경우) 나머지 7개는 아예 요청조차
   하지 않는다. 틀렸을 때만(예외적인 폴더) 기존처럼 전체 후보를 다시 훑는다. */
let siteKnownExt = "webp";
let siteKnownVideoExt = "mp4";

/** 파일 하나가 실제로 이미지로 로드되는지 확인 (Promise) */
function probeImage(url) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = url;
  });
}

/** 파일 하나가 실제로 동영상으로 로드되는지 확인 (Promise)
    Chrome은 자동재생 정책상 muted/playsInline이 안 잡혀 있으면 재생을 막을 수 있어서
    프로브용 video 엘리먼트에도 동일하게 설정해준다. */
function probeVideo(url) {
  return new Promise((resolve) => {
    const v = document.createElement("video");
    v.preload = "metadata";
    v.muted = true;
    v.playsInline = true;
    v.onloadedmetadata = () => resolve(true);
    v.onerror = () => resolve(false);
    v.src = url;
  });
}

/* ===================== 이미지/동영상 탐색 (병렬 처리로 속도 최적화) =====================
   이전 버전은 확장자 하나하나를 순서대로 기다렸다가(await) 다음 확장자를 시도했는데,
   이게 상세페이지 로딩이 느려지는 가장 큰 원인이었습니다. 지금은 확장자 후보 전부를
   동시에(Promise.all) 요청해서 가장 먼저 성공하는 것을 채택하는 방식으로 바꿨습니다. */

/** n번 슬롯에 대해 이미지 확장자를 모두 동시에 시도하고, 없으면 동영상 확장자를 모두 동시에 시도한다.
    성공하면 { url, type: "image" | "video" } 를 반환하고, 없으면 null. */
async function resolveMediaUrl(base, n) {
  const imgHits = await Promise.all(
    EXTENSIONS.map(async (ext) => {
      const url = `${base}/${n}.${ext}`;
      return (await probeImage(url)) ? { url, type: "image" } : null;
    })
  );
  const foundImg = imgHits.find(Boolean);
  if (foundImg) return foundImg;

  const vidHits = await Promise.all(
    VIDEO_EXTENSIONS.map(async (ext) => {
      const url = `${base}/${n}.${ext}`;
      return (await probeVideo(url)) ? { url, type: "video" } : null;
    })
  );
  return vidHits.find(Boolean) || null;
}

/** 이전 버전과의 호환용 — 이미지 URL 문자열만 필요할 때 사용 (썸네일 등) */
async function resolveImageUrl(base, n) {
  const hits = await Promise.all(
    EXTENSIONS.map(async (ext) => {
      const url = `${base}/${n}.${ext}`;
      return (await probeImage(url)) ? url : null;
    })
  );
  return hits.find(Boolean) || null;
}

/** n번 슬롯을, 이미 알아낸 확장자(knownExt/knownVideoExt) 하나로만 먼저 시도한다(요청 1개).
    실패하면 그때만 모든 확장자를 다시 훑는(resolveMediaUrl) 예외 처리로 넘어간다.
    → 폴더 안 파일들이 대개 같은 확장자를 쓰는 실제 상황에서, 슬롯마다 7종 확장자를
    전부(=최대 13개 요청) 동시에 쏘고 그 중 가장 느린 404까지 기다리던 예전 방식보다
    요청 수가 수십 배 줄어 상세페이지 진입 속도가 크게 빨라진다. */
async function resolveSlotFast(base, n, known) {
  if (known.ext) {
    const url = `${base}/${n}.${known.ext}`;
    if (await probeImage(url)) return { url, type: "image" };
  }
  if (known.videoExt) {
    const url = `${base}/${n}.${known.videoExt}`;
    if (await probeVideo(url)) return { url, type: "video" };
  }
  // 알려진 확장자로 못 찾았을 때만 전체 확장자를 탐색 (드문 예외 케이스 대비)
  const found = await resolveMediaUrl(base, n);
  if (found) {
    const ext = found.url.split(".").pop();
    if (found.type === "image") known.ext = ext;
    else known.videoExt = ext;
  }
  return found;
}

/** 프로젝트 폴더 안의 이미지/동영상 전체를 순서대로 탐색해서 { url, type } 배열로 반환.
    1번 슬롯에서만 확장자 후보 전부를 시도해서 실제 사용 중인 확장자를 알아내고,
    그 뒤 슬롯들은 그 확장자 하나로만 요청한다(예외가 있으면 그 슬롯만 전체 재탐색).
    번호들을 PROBE_BATCH 개씩 묶어서 동시에 탐색한다. 중간에 번호가 하나 정도 비어 있어도
    (예: 11 다음 12가 없고 13부터 다시 있는 경우) 그 자리에서 바로 멈추지 않고, 연속으로
    GAP_TOLERANCE개 이상 비어 있을 때만 "여기서 끝"이라고 판단해서 멈춘다. */
const GAP_TOLERANCE = 3;

async function resolveProjectImages(id) {
  const base = projectBase(id);
  const media = [];

  // 1번 슬롯은 이미지와 동영상이 "같이" 있을 수 있다 (예: 1.webp + 1.mp4).
  // 예전에는 이미지가 있으면 동영상은 아예 찾아보지도 않고 버렸는데,
  // 이제는 둘 다 있으면 동영상을 먼저, 그다음 이미지를 넣어서 둘 다 보여준다
  // (동영상 하나만 있거나 이미지 하나만 있으면 그것만 넣는다).
  const [firstImg, firstVid] = await Promise.all([
    (async () => {
      if (siteKnownExt) {
        const url = `${base}/1.${siteKnownExt}`;
        if (await probeImage(url)) return { url, type: "image" };
      }
      const hits = await Promise.all(
        EXTENSIONS.map(async (ext) => {
          const url = `${base}/1.${ext}`;
          return (await probeImage(url)) ? { url, type: "image" } : null;
        })
      );
      const found = hits.find(Boolean) || null;
      if (found) siteKnownExt = found.url.split(".").pop();
      return found;
    })(),
    (async () => {
      if (siteKnownVideoExt) {
        const url = `${base}/1.${siteKnownVideoExt}`;
        if (await probeVideo(url)) return { url, type: "video" };
      }
      const hits = await Promise.all(
        VIDEO_EXTENSIONS.map(async (ext) => {
          const url = `${base}/1.${ext}`;
          return (await probeVideo(url)) ? { url, type: "video" } : null;
        })
      );
      const found = hits.find(Boolean) || null;
      if (found) siteKnownVideoExt = found.url.split(".").pop();
      return found;
    })(),
  ]);

  if (!firstImg && !firstVid) return media;

  const known = { ext: null, videoExt: null };
  if (firstVid) {
    media.push(firstVid);
    known.videoExt = firstVid.url.split(".").pop();
  }
  if (firstImg) {
    media.push(firstImg);
    known.ext = firstImg.url.split(".").pop();
  }

  let consecutiveGaps = 0;

  outer:
  for (let start = 2; start <= MAX_PROBE; start += PROBE_BATCH) {
    const batchNums = [];
    for (let n = start; n < start + PROBE_BATCH && n <= MAX_PROBE; n++) batchNums.push(n);
    // eslint-disable-next-line no-await-in-loop
    const results = await Promise.all(batchNums.map((n) => resolveSlotFast(base, n, known)));
    for (const item of results) {
      if (item) {
        media.push(item);
        consecutiveGaps = 0;
      } else {
        consecutiveGaps++;
        if (consecutiveGaps >= GAP_TOLERANCE) break outer;
      }
    }
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

/* ===================== 그리드 썸네일 =====================
   기존에는 마우스를 올리면 thu1 -> thu2로 이미지 자체가 바뀌었는데,
   지금은 이미지가 바뀌지 않고 대신 CSS로 살짝 확대(zoom)되는 방식으로 바뀌었습니다
   (style.css의 .tile:hover img 참고). 그래서 여기서는 thu1(대표 이미지) 하나만 찾으면 되고,
   thu2를 더 이상 탐색하지 않아 요청 수도 줄어듭니다(로딩 최적화 겸용).
   thu1이 없는 폴더는 기존처럼 1.* 이미지를 그대로 사용(하위 호환). */
async function resolveThumb(base, name) {
  if (siteKnownExt) {
    const url = `${base}/${name}.${siteKnownExt}`;
    if (await probeImage(url)) return url;
  }
  const hits = await Promise.all(
    EXTENSIONS.map(async (ext) => {
      const url = `${base}/${name}.${ext}`;
      return (await probeImage(url)) ? url : null;
    })
  );
  const found = hits.find(Boolean) || null;
  if (found) siteKnownExt = found.split(".").pop();
  return found;
}

/* name으로 찾을 파일명을 바꿀 수 있음 — 기본은 thu1, University 2개 섹션은 tub1 사용 */
const thumbCache = new Map();
function getProjectThumb(id, name = "thu1") {
  const cacheKey = `${id}::${name}`;
  if (!thumbCache.has(cacheKey)) {
    const base = projectBase(id);
    thumbCache.set(
      cacheKey,
      resolveThumb(base, name).then((thu1) => {
        if (!thu1) {
          console.warn(
            `[thumb 없음] ${base}/${name}.(png/jpg/jpeg/webp) 를 찾지 못해 1.* 이미지로 대체합니다. 파일명이 정확히 소문자 "${name}"인지, 경로가 맞는지 확인하세요.`
          );
        }
        return thu1;
      })
    );
  }
  return thumbCache.get(cacheKey);
}

/* University 섹션 전용: tub1 을 먼저 찾고, 없으면 thu1 로도 찾아본다. */
const universityThumbCache = new Map();
function getUniversityThumb(id) {
  if (!universityThumbCache.has(id)) {
    const base = projectBase(id);
    universityThumbCache.set(
      id,
      (async () => {
        let thu1 = await resolveThumb(base, "tub1");
        if (!thu1) thu1 = await resolveThumb(base, "thu1");
        if (!thu1) {
          console.warn(
            `[thumb 없음] ${base}/tub1.* 와 ${base}/thu1.* 를 모두 찾지 못해 1.* 이미지로 대체합니다. 폴더 경로(공백/철자)와 파일명을 확인하세요.`
          );
        }
        return thu1;
      })()
    );
  }
  return universityThumbCache.get(id);
}

/* ===================== GRID =====================
   PROJECTS 배열을 GRID_ROW_SIZE(기본 3)개씩 끊어 ".grid-row"를 만들고, 그 안에
   타일을 순서대로 채운다. 각 타일에는 CSS 변수 --ratio(가로/세로 비율)를 심어두고,
   style.css의 .grid-row가 flex로 그 비율만큼 너비를 나눠 갖게 해서 "같은 줄은
   항상 높이가 같고, 모든 줄의 폭은 항상 컨테이너 폭과 같은" justified 레이아웃을 만든다. */
const grid = document.getElementById("grid");

function buildGrid() {
  grid.innerHTML = "";

  for (let start = 0; start < PROJECTS.length; start += GRID_ROW_SIZE) {
    const rowProjects = PROJECTS.slice(start, start + GRID_ROW_SIZE);
    const row = document.createElement("div");
    row.className = "grid-row";
    // 이 줄에 들어가는 타일들의 ratio 합(R)을 CSS 변수로 심어둔다.
    // style.css의 .tile aspect-ratio 계산식(ratio / (row-sum * k))이 이 값을 읽어서,
    // 줄마다 R이 달라도(정사각형/가로형/세로형이 섞여도) 모든 줄의 실제 렌더링 높이가
    // 항상 똑같아지도록(= containerWidth * k) 만든다.
    const rowRatioSum = rowProjects.reduce((sum, p) => sum + (p.ratio || 1), 0);
    row.style.setProperty("--row-sum", rowRatioSum);
    grid.appendChild(row);

    rowProjects.forEach((p) => {
      const tile = document.createElement("a");
      tile.href = `#work/${p.id}`;
      tile.className = "tile loading";
      tile.style.setProperty("--ratio", p.ratio || 1);
      tile.innerHTML = `
        <div class="tile-overlay">
          <span class="tile-index">${p.date}</span>
          <span class="tile-name">${p.label}</span>
          <span class="tile-cat">${p.category}</span>
        </div>
      `;
      tile.addEventListener("click", (e) => {
        e.preventDefault();
        openDetail(p.id);
        history.pushState(null, "", `#work/${p.id}`);
      });
      // 마우스를 올리거나(데스크톱) 터치를 시작하는(모바일) 순간 미리 이미지 목록을 탐색/로드해둔다.
      // 클릭했을 때는 이미 다 준비돼 있어 상세페이지가 거의 즉시 열리는 것처럼 느껴진다.
      tile.addEventListener("pointerenter", () => getProjectImages(p.id), { once: true });
      tile.addEventListener("touchstart", () => getProjectImages(p.id), { once: true, passive: true });
      row.appendChild(tile);

      getProjectThumb(p.id).then(async (thu1) => {
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
        img.loading = "lazy";
        img.decoding = "async";
        img.src = mainUrl;
        img.alt = p.label;
        tile.prepend(img);
      });
    });
  }
}

/** resolveMediaUrl과 반대로, "동영상"을 먼저 찾고 없을 때만 이미지로 넘어간다.
    히어로 배너 전용 — 상세페이지/썸네일은 원래대로 이미지 우선(resolveMediaUrl)을 그대로 쓴다. */
async function resolveHeroMedia(base, n) {
  const vidHits = await Promise.all(
    VIDEO_EXTENSIONS.map(async (ext) => {
      const url = `${base}/${n}.${ext}`;
      return (await probeVideo(url)) ? { url, type: "video" } : null;
    })
  );
  const foundVideo = vidHits.find(Boolean);
  if (foundVideo) return foundVideo;

  const imgHits = await Promise.all(
    EXTENSIONS.map(async (ext) => {
      const url = `${base}/${n}.${ext}`;
      return (await probeImage(url)) ? { url, type: "image" } : null;
    })
  );
  return imgHits.find(Boolean) || null;
}

/* hero banner: 이미지/동영상 확장자를 모두 탐색해서, 찾은 쪽만 보여준다.
   같은 폴더에 1.webp와 1.mp4가 함께 있는 경우, 히어로는 항상 동영상을 우선한다
   (resolveMediaUrl은 이미지를 먼저 찾기 때문에 여기서는 그걸 쓰지 않는다). */
async function setHeroImage() {
  const heroVideo = document.getElementById("hero-video");
  const heroImg = document.getElementById("hero-img");
  const base = heroImg.dataset.base;

  if (!heroVideo.dataset.errorLoggerAttached) {
    heroVideo.dataset.errorLoggerAttached = "1";
    heroVideo.addEventListener("error", () => {
      const err = heroVideo.error;
      if (!err) return;
      // 1=ABORTED 2=NETWORK 3=DECODE(코덱 문제) 4=SRC_NOT_SUPPORTED(형식/경로 문제)
      console.warn(`[hero-video] MediaError code=${err.code} src=${heroVideo.currentSrc}`);
    });
  }

  const media = await resolveHeroMedia(base, 1);
  if (!media) return;
  if (media.type === "video") {
    // Chrome은 autoplay 속성만으로는 재생을 보장하지 않을 때가 있어서(특히 src를 JS로
    // 나중에 지정한 경우), muted/playsInline을 속성뿐 아니라 프로퍼티로도 명시하고
    // load()를 호출한 뒤 명시적으로 play()를 시도한다. play()가 막히면(브라우저 정책,
    // 코덱 미지원 등) 화면은 그대로 두고 콘솔에만 원인을 남긴다(디자인/레이아웃 불변).
    heroVideo.muted = true;
    heroVideo.playsInline = true;
    heroVideo.src = media.url;
    heroVideo.style.display = "block";
    heroImg.style.display = "none";
    heroVideo.load();
    heroVideo.play().catch((err) => {
      console.warn(`[hero-video] play() failed for ${media.url}:`, err.name, err.message);
    });
  } else {
    heroImg.src = media.url;
    heroImg.style.display = "block";
    heroVideo.style.display = "none";
  }
}

/* ===================== UNIVERSITY 섹션 — DESIGN & OBJECTS / PAINTING & DRAWING 2분할 ===================== */
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
    tile.addEventListener("pointerenter", () => getProjectImages(p.id), { once: true });
    tile.addEventListener("touchstart", () => getProjectImages(p.id), { once: true, passive: true });
    universityDuo.appendChild(tile);

    getUniversityThumb(p.id).then(async (thu1) => {
      tile.classList.remove("loading");
      let mainUrl = thu1;
      if (!mainUrl) {
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
      img.loading = "lazy";
      img.decoding = "async";
      img.alt = p.label;
      img.src = mainUrl;
      tile.prepend(img);
    });
  });
}

/* ===================== DETAIL PAGE ===================== */
const detail = document.getElementById("detail");
const detailFrame = document.getElementById("detail-frame");
const detailImg = document.getElementById("detail-img");
const detailVideo = document.getElementById("detail-video");
// Chrome에서만 재생이 안 될 때 원인(코덱 미지원/네트워크/경로 오류 등)을 콘솔에서
// 바로 확인할 수 있도록 MediaError 코드를 로깅한다. 화면에는 아무것도 노출하지 않는다.
detailVideo.addEventListener("error", () => {
  const err = detailVideo.error;
  if (!err) return;
  // 1=ABORTED 2=NETWORK 3=DECODE(코덱 문제) 4=SRC_NOT_SUPPORTED(형식/경로 문제)
  console.warn(`[detail-video] MediaError code=${err.code} src=${detailVideo.currentSrc}`);
});
const detailCount = document.getElementById("detail-count");
const detailThumbs = document.getElementById("detail-thumbs");
const detailClose = document.getElementById("detail-close");
const detailPrev = document.getElementById("detail-prev");
const detailNext = document.getElementById("detail-next");
const detailNextProject = document.getElementById("detail-next-project");
const detailNextProjectName = document.getElementById("detail-next-project-name");

const zoomOverlay = document.getElementById("zoom-overlay");
const zoomViewport = document.getElementById("zoom-viewport");
const zoomImg = document.getElementById("zoom-img");
const zoomClose = document.getElementById("zoom-close");

let currentProject = null;
let currentImages = [];
let currentIndex = 0;

/* 좌우 화살표(‹ ›) 및 "다음 프로젝트" 링크는 이제 같은 프로젝트 안의 사진을 넘기는 게 아니라
   ALL_PROJECTS 순서를 기준으로 다음/이전 "프로젝트(주제)"로 이동한다.
   같은 프로젝트 안의 여러 사진은 오른쪽 스크롤 목록(detail-thumbs)에서 클릭해서 고른다. */
function goToProject(offset) {
  if (!currentProject) return;
  const idx = ALL_PROJECTS.indexOf(currentProject);
  const nextIdx = (idx + offset + ALL_PROJECTS.length) % ALL_PROJECTS.length;
  const nextProject = ALL_PROJECTS[nextIdx];
  openDetail(nextProject.id);
  history.pushState(null, "", `#work/${nextProject.id}`);
}

async function openDetail(id) {
  closeZoom();
  const project = ALL_PROJECTS.find((p) => p.id === id);
  if (!project) return;
  currentProject = project;
  currentIndex = 0;

  document.getElementById("detail-category").textContent = project.category;
  document.getElementById("detail-title").textContent = project.label;
  document.getElementById("detail-desc").innerHTML = project.desc;
  document.getElementById("detail-period").textContent = project.period || "";
  document.getElementById("detail-tools").textContent = project.pipeline || "";

  // 배경 소스 표기 — sourceLabel/sourceUrl이 있는 프로젝트만 표시하고, 없으면 통째로 숨긴다.
  const sourceBlock = document.getElementById("detail-source");
  const sourceName = document.getElementById("detail-source-name");
  const sourceLink = document.getElementById("detail-source-link");
  if (project.sourceLabel && project.sourceUrl) {
    sourceName.textContent = `배경 소스 : ${project.sourceLabel}`;
    sourceLink.textContent = project.sourceUrl;
    sourceLink.href = project.sourceUrl;
    sourceBlock.style.display = "block";
  } else {
    sourceBlock.style.display = "none";
  }

  const nextIdx = (ALL_PROJECTS.indexOf(project) + 1) % ALL_PROJECTS.length;
  const nextProject = ALL_PROJECTS[nextIdx];
  detailNextProjectName.textContent = nextProject.label;
  detailNextProject.onclick = (e) => {
    e.preventDefault();
    goToProject(1);
  };

  detail.classList.add("is-open");
  detail.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  detailThumbs.innerHTML = "";

  // 그리드 썸네일은 페이지가 열릴 때 이미 로드돼 브라우저에 캐시돼 있으므로,
  // 실제 이미지 목록(currentImages)이 다 준비되기를 기다리는 동안 그 썸네일을
  // 먼저 즉시 보여준다. 그러면 "빈 화면 + 로딩 스피너"가 아니라 뭔가 바로 보여서
  // 체감 로딩 시간이 훨씬 짧게 느껴진다. 실제 이미지가 준비되면 바로 교체된다.
  const quickThumb =
    (await (thumbCache.get(`${id}::thu1`) || universityThumbCache.get(id))) || null;
  if (quickThumb) {
    detailVideo.pause();
    detailVideo.style.display = "none";
    detailImg.style.display = "block";
    detailImg.src = quickThumb;
    detailFrame.classList.add("is-preview");
  } else {
    detailFrame.classList.add("loading");
  }

  currentImages = await getProjectImages(id);
  detailFrame.classList.remove("loading");
  detailFrame.classList.remove("is-preview");

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
    const wrap = document.createElement("div");
    wrap.className = "thumb-item";

    let media;
    if (item.type === "video") {
      media = document.createElement("video");
      media.src = item.url;
      media.muted = true;
      media.setAttribute("muted", ""); // 속성으로도 명시 (Chrome 자동재생 정책 대비)
      media.preload = "none"; // 실제로 클릭해서 볼 때까지 다운로드하지 않음 (로딩 최적화)
      media.playsInline = true;
      media.onerror = () => {
        console.warn(`[thumb-video] failed to load ${item.url} — 코덱/대소문자 경로를 확인하세요.`);
      };
    } else {
      media = document.createElement("img");
      media.loading = "lazy"; // 화면 밖에 있는 썸네일은 스크롤해서 가까워질 때만 로드 (로딩 최적화)
      media.decoding = "async";
      media.src = item.url;
      media.alt = `${project.label} ${i + 1}`;
    }

    const label = document.createElement("span");
    label.className = "thumb-item-label";
    label.textContent = `${project.label.toUpperCase()} ${String(i + 1).padStart(2, "0")}`;

    wrap.appendChild(media);
    wrap.appendChild(label);
    wrap.addEventListener("click", () => showImage(i));
    detailThumbs.appendChild(wrap);
  });

  showImage(0);
}

function showImage(i) {
  if (!currentImages.length) return;
  currentIndex = (i + currentImages.length) % currentImages.length;
  const item = currentImages[currentIndex];

  if (item.type === "video") {
    detailImg.style.display = "none";
    detailImg.removeAttribute("src");
    detailVideo.style.display = "block";
    detailVideo.muted = true;
    detailVideo.playsInline = true;
    detailVideo.src = item.url;
    detailVideo.load();
    detailVideo.currentTime = 0;
    detailVideo.play().catch((err) => {
      console.warn(`[detail-video] play() failed for ${item.url}:`, err.name, err.message);
    });
  } else {
    detailVideo.pause();
    detailVideo.style.display = "none";
    detailVideo.removeAttribute("src");
    detailImg.style.display = "block";
    detailImg.fetchPriority = "high";
    detailImg.src = item.url;
  }

  detailCount.textContent = `${currentIndex + 1} / ${currentImages.length}`;
  [...detailThumbs.children].forEach((el, idx) => {
    const active = idx === currentIndex;
    el.classList.toggle("is-active", active);
    if (active) el.scrollIntoView({ block: "nearest", behavior: "smooth" });
  });
}

/* ===================== ZOOM / PAN (상세페이지 메인 이미지 클릭 → 확대 후 드래그로 이동) =====================
   클릭하면 이미지를 화면 가득 채우는 뷰로 확대하고(ZOOM_SCALE배), 마우스/터치로 누른 채
   끌면 확대된 이미지 안에서 보이는 부분이 이동한다. 이미지가 화면보다 작아지는 방향으로는
   못 움직이게 매 프레임 범위를 계산해서 clamp한다. */
const ZOOM_SCALE = 2.2;
let zoomPanX = 0;
let zoomPanY = 0;
let zoomDragging = false;
let zoomStartX = 0;
let zoomStartY = 0;
let zoomStartPanX = 0;
let zoomStartPanY = 0;

function zoomClampBounds() {
  const viewportRect = zoomViewport.getBoundingClientRect();
  // transform 적용 전 레이아웃 크기(= object-fit:contain으로 화면에 맞춰진 크기) 기준으로
  // ZOOM_SCALE을 곱해서 "확대된 실제 렌더 크기"를 구한다.
  const baseW = zoomImg.offsetWidth;
  const baseH = zoomImg.offsetHeight;
  const scaledW = baseW * ZOOM_SCALE;
  const scaledH = baseH * ZOOM_SCALE;
  const maxX = Math.max(0, (scaledW - viewportRect.width) / 2);
  const maxY = Math.max(0, (scaledH - viewportRect.height) / 2);
  return { maxX, maxY };
}

function zoomApplyTransform() {
  zoomImg.style.transform = `translate(${zoomPanX}px, ${zoomPanY}px) scale(${ZOOM_SCALE})`;
}

function openZoom(src) {
  if (!src) return;
  zoomImg.src = src;
  zoomPanX = 0;
  zoomPanY = 0;
  zoomApplyTransform();
  zoomOverlay.classList.add("is-open");
  zoomOverlay.setAttribute("aria-hidden", "false");
}

function closeZoom() {
  zoomOverlay.classList.remove("is-open");
  zoomOverlay.setAttribute("aria-hidden", "true");
}

detailImg.addEventListener("click", () => {
  if (detailImg.style.display === "none" || !detailImg.src) return;
  openZoom(detailImg.src);
});

/* 브라우저 기본 이미지 드래그(HTML5 dragstart)를 완전히 차단.
   이게 살아있으면 pointerdown 이후 브라우저가 네이티브 드래그를 가로채서
   pointermove가 더 이상 발생하지 않고, 커서가 "금지" 아이콘으로 바뀌며,
   mouseup 시 우리 쪽에서는 "이동이 없었다"고 오판하는 문제가 생긴다. */
zoomImg.draggable = false;
zoomImg.addEventListener("dragstart", (e) => e.preventDefault());

/* ---- pan(드래그 이동): 이미지 자체에서 시작해서 이미지 자체에서 끝난다 ----
   setPointerCapture로 캡처해두면 커서가 이미지 밖으로 나가도 pointermove/up이
   계속 이 요소로 전달되므로 드래그가 끊기지 않는다. */
zoomImg.addEventListener("pointerdown", (e) => {
  if (e.button !== undefined && e.button !== 0) return; // 좌클릭만 pan으로 처리
  e.preventDefault();
  e.stopPropagation();
  zoomDragging = true;
  zoomStartX = e.clientX;
  zoomStartY = e.clientY;
  zoomStartPanX = zoomPanX;
  zoomStartPanY = zoomPanY;
  zoomImg.classList.add("is-dragging");
  zoomImg.setPointerCapture(e.pointerId);
});

zoomImg.addEventListener("pointermove", (e) => {
  if (!zoomDragging) return;
  e.preventDefault();
  e.stopPropagation();
  const dx = e.clientX - zoomStartX;
  const dy = e.clientY - zoomStartY;
  const { maxX, maxY } = zoomClampBounds();
  zoomPanX = Math.min(maxX, Math.max(-maxX, zoomStartPanX + dx));
  zoomPanY = Math.min(maxY, Math.max(-maxY, zoomStartPanY + dy));
  zoomApplyTransform();
});

function endZoomDrag(e) {
  if (!zoomDragging) return;
  zoomDragging = false;
  zoomImg.classList.remove("is-dragging");
  e.stopPropagation();
  // 드래그를 끝내도(=마우스를 놓아도) 확대창은 절대 닫히지 않는다 — 닫기는
  // CLOSE 버튼 또는 이미지 바깥 빈 배경 클릭에서만 일어난다.
}
zoomImg.addEventListener("pointerup", endZoomDrag);
zoomImg.addEventListener("pointercancel", endZoomDrag);

/* 드래그 뒤에 브라우저가 추가로 발생시키는 click 이벤트가 배경 클릭 닫기 로직으로
   전달되지 않도록 이미지 위에서 멈춘다. */
zoomImg.addEventListener("click", (e) => e.stopPropagation());

/* ---- backdrop(빈 배경) 클릭으로 닫기 ----
   zoom-img는 pointer-events가 켜져 있어 이미지 위 클릭은 target이 zoom-img가 되고,
   이미지 바깥(뷰포트의 빈 여백)을 클릭하면 target이 zoom-viewport 자기 자신이 된다.
   그래서 target === currentTarget일 때만, 즉 진짜 빈 배경을 직접 클릭했을 때만 닫는다. */
zoomViewport.addEventListener("click", (e) => {
  if (e.target === e.currentTarget) closeZoom();
});

zoomClose.addEventListener("click", closeZoom);

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && zoomOverlay.classList.contains("is-open")) closeZoom();
});

window.addEventListener("resize", () => {
  if (!zoomOverlay.classList.contains("is-open")) return;
  const { maxX, maxY } = zoomClampBounds();
  zoomPanX = Math.min(maxX, Math.max(-maxX, zoomPanX));
  zoomPanY = Math.min(maxY, Math.max(-maxY, zoomPanY));
  zoomApplyTransform();
});

function closeDetail() {
  closeZoom();
  detail.classList.remove("is-open");
  detail.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  detailVideo.pause();
  if (location.hash.startsWith("#work/")) {
    history.pushState(null, "", "#works");
  }
}

detailClose.addEventListener("click", closeDetail);
detailPrev.addEventListener("click", () => goToProject(-1));
detailNext.addEventListener("click", () => goToProject(1));

window.addEventListener("keydown", (e) => {
  if (!detail.classList.contains("is-open")) return;
  if (zoomOverlay.classList.contains("is-open")) return; // 확대 뷰가 열려 있으면 상세페이지 단축키는 잠시 무시
  if (e.key === "Escape") closeDetail();
  if (e.key === "ArrowRight") goToProject(1);
  if (e.key === "ArrowLeft") goToProject(-1);
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
