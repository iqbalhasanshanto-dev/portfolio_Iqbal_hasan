/* =========================================================
   CONTENT DATA
========================================================= */
const PROJECTS = [
  {
    name: "Clear Sign",
    type: "Medical App",
    status: "dev", // dev | soon | live
    statusLabel: "In Development",
    flagship: true,
    description: "My flagship build in progress — a medical app aimed at making critical health information clearer and faster to act on.",
    tags: ["Flagship", "Healthcare", "Mobile"],
    codeUrl: null,
    liveUrl: null,
    images: ["assets/projects/clearsign/img.webp"],
  },
  {
    name: "Expense Tracker",
    type: "Web Application",
    status: "soon",
    statusLabel: "Publishing Soon",
    description: "A full-stack web app for everyday spending — clean data handling on the backend, a UI/UX layer designed to make budgeting feel effortless.",
    tags: ["Data Handling", "UI/UX", "Full-Stack"],
    codeUrl: null,
    liveUrl: null,
    images: ["assets/projects/expense-traker/img.webp"],
  },
  {
    name: "View-Basis",
    type: "Website",
    status: "live",
    statusLabel: "Live",
    description: "A published website focused on clean frontend execution — from layout and responsiveness to a smooth path from local build to live deployment.",
    tags: ["Frontend", "Deployment"],
    codeUrl: null,
    liveUrl: "https://vupc-official-web.vercel.app/",
    images: ["assets/projects/VUPC/img.webp"],
  },
];

const GALLERY = [
  { title: "Orion Nebula", exif: "M42 — tracked, 40 frames stacked", imageUrl: "assets/slideshow/1.png" },
  { title: "Comet trail", exif: "45s exposure — ISO 3200", imageUrl: "assets/slideshow/2.png" },
  { title: "Planetary alignment", exif: "4-planet — dawn horizon", imageUrl: "assets/slideshow/3.jpg" },
  { title: "Milky Way core", exif: "Bortle 3 — stacked", imageUrl: "assets/slideshow/4.jpg" },
  { title: "Lunar surface", exif: "1/250s — tracked mount", imageUrl: "assets/slideshow/5.jpg" },
  { title: "Coastal long exposure", exif: "ND1000 — 120s", imageUrl: "assets/slideshow/6.jpg" },
];

const VIDEOS = [
  { title: "Reel — Facebook", thumbnailUrl: "assets/reels/1.jpg", url: "https://www.facebook.com/reel/2211990066308727/" },
  { title: "Edit breakdown — pacing & color", thumbnailUrl: "assets/reels/2.jpg", url: "https://www.facebook.com/reel/1678656513360557/" },
  { title: "Reel — Instagram", thumbnailUrl: "assets/reels/3.jpg", url: "https://www.instagram.com/reel/DbQ-09NEmgd/" },
];

/* =========================================================
   RENDER: Projects
========================================================= */
function renderProjects() {
  const grid = document.getElementById('projectGrid');
  if (!grid) return;
  const statusClass = { dev: 'status-dev', soon: 'status-soon', live: 'status-live' };

  grid.innerHTML = PROJECTS.map(p => `
    <div class="project-card">
      <div class="project-thumb${p.images && p.images.length ? ' has-images' : ''}">
        ${p.images && p.images.length
          ? p.images.map((src, i) => `<img class="project-thumb-slide${i === 0 ? ' active' : ''}" src="${src}" alt="${p.name} screenshot ${i + 1}" loading="lazy">`).join('')
          : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M3 9h18"/></svg>`}
      </div>
      <div class="project-body">
        <div class="project-top">
          <span class="status-pill ${statusClass[p.status]}"><span class="dot"></span>${p.statusLabel}</span>
          ${p.flagship ? '<span class="flagship-tag">flagship</span>' : ''}
        </div>
        <h3>${p.name}</h3>
        <p class="project-type">${p.type}</p>
        <p class="desc">${p.description}</p>
        <div class="chip-row">${p.tags.map(t => `<span class="chip">${t}</span>`).join('')}</div>
        <div class="project-links">
          ${p.codeUrl ? `<a href="${p.codeUrl}" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.36-3.87-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.8 1.18 1.83 1.18 3.09 0 4.43-2.69 5.4-5.26 5.69.42.36.78 1.07.78 2.16v3.2c0 .32.21.67.8.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.73 18.27.5 12 .5z"/></svg>Code</a>` : ''}
          ${p.liveUrl ? `<a href="${p.liveUrl}" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg>Live</a>` : ''}
          ${!p.codeUrl && !p.liveUrl ? `<span style="font-family:var(--font-mono); font-size:12px; color:var(--text-dim);">Link coming soon</span>` : ''}
        </div>
      </div>
    </div>
  `).join('') + `
    <a href="https://github.com/iqbalhasanshanto-dev?tab=repositories" class="project-card more">
      <span>More on GitHub →</span>
    </a>
  `;
}

/* =========================================================
   Project thumbnail mini-slideshows
========================================================= */
function initProjectThumbSlideshows() {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.querySelectorAll('.project-thumb.has-images').forEach(thumb => {
    const slides = thumb.querySelectorAll('.project-thumb-slide');
    if (slides.length < 2 || reduceMotion) return;
    let i = 0;
    setInterval(() => {
      slides[i].classList.remove('active');
      i = (i + 1) % slides.length;
      slides[i].classList.add('active');
    }, 3200);
  });
}

/* =========================================================
   Certificate lightbox — click "View Certificate" to see the
   image inline instead of opening a link
========================================================= */
function initCertLightbox() {
  const overlay = document.getElementById('certLightbox');
  if (!overlay) return;
  const img = document.getElementById('certLightboxImg');
  const closeBtn = document.getElementById('certLightboxClose');

  function open(src, alt) {
    img.src = src;
    img.alt = alt || 'Certificate';
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function close() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    img.src = '';
  }

  document.querySelectorAll('[data-cert]').forEach(btn => {
    btn.addEventListener('click', () => open(btn.getAttribute('data-cert'), btn.getAttribute('data-cert-alt')));
  });
  closeBtn.addEventListener('click', close);
  overlay.addEventListener('click', (e) => { if (e.target === overlay) close(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
}

/* =========================================================
   RENDER: Reels
   Each card is a static thumbnail image that links straight
   out to the original Facebook/Instagram post — no live embed
   is loaded, so every card shares the same fixed aspect ratio
   regardless of the source platform's own dimensions.
========================================================= */
function renderReels() {
  const row = document.getElementById('reelRow');
  if (!row) return;
  row.innerHTML = VIDEOS.map(v => {
    const hasThumb = !!v.thumbnailUrl;
    return `
    <a class="reel-card" href="${v.url}" target="_blank" rel="noopener">
      <div class="reel-thumb${hasThumb ? '' : ' thumb-missing'}">
        ${hasThumb
          ? `<img src="${v.thumbnailUrl}" alt="${v.title}" loading="lazy" onerror="this.parentElement.classList.add('thumb-missing')">`
          : ''}
        <div class="reel-play-overlay"><svg viewBox="0 0 24 24"><path d="M6 4l14 8-14 8V4z"/></svg></div>
        <span class="reel-thumb-hint">Drop a thumbnail into /assets/reels</span>
      </div>
      <div class="reel-body"><h3>${v.title}</h3><p>Watch on the original platform</p></div>
    </a>
  `;
  }).join('');
}

/* =========================================================
   Hero starfield (signature animation)
========================================================= */
function initStarfield() {
  const canvas = document.getElementById('starfield');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let stars = [];

  function resize() {
    canvas.width = canvas.offsetWidth * devicePixelRatio;
    canvas.height = canvas.offsetHeight * devicePixelRatio;
  }

  function createStars() {
    const count = Math.floor((canvas.width * canvas.height) / 9000);
    stars = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.3 * devicePixelRatio + 0.2,
      baseAlpha: Math.random() * 0.6 + 0.2,
      speed: Math.random() * 0.015 + 0.005,
      phase: Math.random() * Math.PI * 2,
    }));
  }

  function draw(t) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach((s) => {
      const twinkle = reduceMotion ? 0 : Math.sin(t * s.speed + s.phase) * 0.35;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(238, 241, 246, ${Math.max(0, s.baseAlpha + twinkle)})`;
      ctx.fill();
    });
    if (!reduceMotion) requestAnimationFrame(draw);
  }

  resize();
  createStars();
  requestAnimationFrame(draw);

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      resize();
      createStars();
      if (reduceMotion) draw(0);
    }, 200);
  });
}

/* =========================================================
   Hero typing line (signature animation)
========================================================= */
function initTyping() {
  const el = document.getElementById('typingLine');
  if (!el) return;
  const lines = ['compiling ambition...', 'status: building', 'loading portfolio.exe'];
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduceMotion) {
    el.textContent = lines[0];
    return;
  }

  let lineIndex = 0, charIndex = 0, deleting = false;

  function tick() {
    const current = lines[lineIndex];
    el.textContent = deleting ? current.slice(0, charIndex--) : current.slice(0, charIndex++);
    let delay = deleting ? 35 : 55;

    if (!deleting && charIndex === current.length + 1) { delay = 1400; deleting = true; }
    else if (deleting && charIndex === 0) { deleting = false; lineIndex = (lineIndex + 1) % lines.length; delay = 400; }

    setTimeout(tick, delay);
  }
  tick();
}

/* =========================================================
   MAIN
========================================================= */
document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  initProjectThumbSlideshows();
  renderReels();
  initStarfield();
  initTyping();
  initCertLightbox();

  // Year
  document.getElementById('year').textContent = new Date().getFullYear();

  // Header background on scroll
  const header = document.getElementById('header');
  const topBtn = document.getElementById('topBtn');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
    topBtn.classList.toggle('show', window.scrollY > 600);
  });
  topBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // Mobile menu
  const navToggle = document.getElementById('navToggle');
  const navClose = document.getElementById('navClose');
  const mobileMenu = document.getElementById('mobileMenu');
  function openMenu(){ mobileMenu.classList.add('open'); navToggle.setAttribute('aria-expanded','true'); }
  function closeMenu(){ mobileMenu.classList.remove('open'); navToggle.setAttribute('aria-expanded','false'); }
  navToggle.addEventListener('click', openMenu);
  navClose.addEventListener('click', closeMenu);
  mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

  // Scroll reveal
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
  revealEls.forEach(el => io.observe(el));

  // Skill tier bars fill on view
  const tierObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        tierObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });
  document.querySelectorAll('.tier-card').forEach(el => tierObserver.observe(el));

  // Contact form (front-end only — wire to a real endpoint before going live)
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      // TODO: replace with a real submission, e.g.
      // fetch('https://formspree.io/f/your-id', { method:'POST', body:new FormData(form), headers:{Accept:'application/json'} })
      status.textContent = 'Message received — I\u2019ll get back to you soon.';
      form.reset();
    });
  }

  // Creative gallery slideshow — built from the GALLERY array above
  (function initSlideshow(){
    const viewport = document.getElementById('slideshowViewport');
    if (!viewport) return;
    const track = document.getElementById('slidesTrack');

    track.innerHTML = GALLERY.map(g => `
      <div class="slide">
        <div class="g-placeholder" style="${g.imageUrl ? `background-image:url('${g.imageUrl}')` : `background:${g.gradient}`}">
          ${g.imageUrl ? '' : `
          <div class="g-veil"></div>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M4 7h3l1.5-2h7L17 7h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1z"/><circle cx="12" cy="13" r="3.5"/></svg>
          <span class="g-label">${g.title}</span>
          <span class="g-exif">${g.exif}</span>
          `}
        </div>
      </div>
    `).join('');

    const slides = track.children;
    const total = slides.length;
    const prevBtn = document.getElementById('slidePrev');
    const nextBtn = document.getElementById('slideNext');
    const counter = document.getElementById('slideCounter');
    const dotsWrap = document.getElementById('slideDots');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let index = 0;
    let timer = null;

    dotsWrap.innerHTML = '';
    for (let i = 0; i < total; i++) {
      const dot = document.createElement('button');
      dot.className = 'slide-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', 'Go to photo ' + (i + 1));
      dot.addEventListener('click', () => goTo(i));
      dotsWrap.appendChild(dot);
    }
    const dots = dotsWrap.children;

    function pad(n){ return String(n).padStart(2, '0'); }

    function render(){
      track.style.transform = `translateX(-${index * 100}%)`;
      counter.textContent = `${pad(index + 1)} / ${pad(total)}`;
      Array.from(dots).forEach((d, i) => d.classList.toggle('active', i === index));
    }

    function goTo(i){ index = (i + total) % total; render(); }
    function next(){ goTo(index + 1); }
    function prev(){ goTo(index - 1); }

    function startAutoplay(){
      if (reduceMotion) return;
      stopAutoplay();
      timer = setInterval(next, 4500);
    }
    function stopAutoplay(){ if (timer) { clearInterval(timer); timer = null; } }

    nextBtn.addEventListener('click', () => { next(); startAutoplay(); });
    prevBtn.addEventListener('click', () => { prev(); startAutoplay(); });

    viewport.addEventListener('mouseenter', stopAutoplay);
    viewport.addEventListener('mouseleave', startAutoplay);
    viewport.addEventListener('focusin', stopAutoplay);
    viewport.addEventListener('focusout', startAutoplay);

    viewport.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight'){ next(); startAutoplay(); }
      if (e.key === 'ArrowLeft'){ prev(); startAutoplay(); }
    });

    let touchStartX = 0;
    viewport.addEventListener('touchstart', (e) => { touchStartX = e.touches[0].clientX; stopAutoplay(); }, { passive: true });
    viewport.addEventListener('touchend', (e) => {
      const diff = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(diff) > 40) { diff < 0 ? next() : prev(); }
      startAutoplay();
    }, { passive: true });

    render();
    startAutoplay();
  })();
});