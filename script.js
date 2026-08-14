// Year
  document.getElementById('year').textContent = new Date().getFullYear();

  // Header background on scroll
  const header = document.getElementById('header');
  const topBtn = document.getElementById('topBtn');
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY > 40;
    header.classList.toggle('scrolled', scrolled);
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

  // Creative gallery slideshow
  (function initSlideshow(){
    const viewport = document.getElementById('slideshowViewport');
    if (!viewport) return;
    const track = document.getElementById('slidesTrack');
    const slides = track.children;
    const total = slides.length;
    const prevBtn = document.getElementById('slidePrev');
    const nextBtn = document.getElementById('slideNext');
    const counter = document.getElementById('slideCounter');
    const dotsWrap = document.getElementById('slideDots');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let index = 0;
    let timer = null;

    // Build dots
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

    function goTo(i){
      index = (i + total) % total;
      render();
    }
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

    // touch swipe
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