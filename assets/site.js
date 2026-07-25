window.addEventListener('DOMContentLoaded', function () {
  if (!matchMedia('(prefers-reduced-motion: no-preference)').matches) return;

  var revealTargets = '.card, .timeline li, .over-grid, .method, .contact .wrap > *';

  if (typeof anime === 'undefined') {
    // Fallback zonder Anime.js: CSS-transities via .reveal
    if (!('IntersectionObserver' in window)) return;
    document.documentElement.classList.add('reveal');
    var ioFallback = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        e.target.classList.add('in');
        ioFallback.unobserve(e.target);
        e.target.addEventListener('transitionend', function () {
          e.target.style.transitionDelay = '';
        }, { once: true });
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    document.querySelectorAll(revealTargets).forEach(function (el, i) {
      el.style.transitionDelay = (i % 3) * 70 + 'ms';
      ioFallback.observe(el);
    });
    return;
  }

  // Hero-intro: h1 per woord, daarna de sub (blur-fade à la Magic UI)
  var h1 = document.querySelector('.hero h1');
  if (h1) {
    h1.innerHTML = h1.innerHTML.split(/(\s+)/).map(function (part) {
      return /^\s+$/.test(part) ? part : '<span class="w">' + part + '</span>';
    }).join('');
    anime.set('.hero h1 .w', { opacity: 0, translateY: 26, filter: 'blur(8px)' });
  }

  var tl = anime.timeline({ easing: 'easeOutExpo' });

  if (h1) {
    anime.set('.hero .sub', { opacity: 0, translateY: 14, filter: 'blur(6px)' });
    anime.set('.hero .proof', { opacity: 0, translateY: 12, filter: 'blur(5px)' });
    anime.set('.hero .loc', { opacity: 0, translateY: 10, filter: 'blur(4px)' });

    tl.add({
      targets: '.hero h1 .w',
      opacity: [0, 1], translateY: [26, 0], filter: ['blur(8px)', 'blur(0px)'],
      duration: 750, delay: anime.stagger(55)
    });
    tl.add({
      targets: '.hero .sub',
      opacity: [0, 1], translateY: [14, 0], filter: ['blur(6px)', 'blur(0px)'],
      duration: 650
    }, '-=450');
    tl.add({
      targets: '.hero .proof',
      opacity: [0, 1], translateY: [12, 0], filter: ['blur(5px)', 'blur(0px)'],
      duration: 600
    }, '-=420');
    tl.add({
      targets: '.hero .loc',
      opacity: [0, 1], translateY: [10, 0], filter: ['blur(4px)', 'blur(0px)'],
      duration: 500
    }, '-=350');

    var heroFoto = document.querySelector('.hero-foto-wrap');
    if (heroFoto) {
      anime.set(heroFoto, { opacity: 0, translateY: 18, filter: 'blur(6px)' });
      tl.add({
        targets: heroFoto,
        opacity: [0, 1], translateY: [18, 0], filter: ['blur(6px)', 'blur(0px)'],
        duration: 700
      }, '-=500');
    }
  }

  // Scroll-reveals met Anime.js (blur-fade)
  if (!('IntersectionObserver' in window)) return;
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      io.unobserve(e.target);
      anime({
        targets: e.target,
        opacity: [0, 1], translateY: [18, 0], filter: ['blur(6px)', 'blur(0px)'],
        duration: 650, easing: 'easeOutQuad',
        delay: e.target._stagger || 0
      });
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
  document.querySelectorAll(revealTargets).forEach(function (el, i) {
    el._stagger = (i % 3) * 70;
    anime.set(el, { opacity: 0, translateY: 18, filter: 'blur(6px)' });
    io.observe(el);
  });
});
