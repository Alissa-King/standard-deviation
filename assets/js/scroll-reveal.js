/* scroll-reveal.js — standard deviation shared utility */

(function () {
  const SELECTOR = '.reveal';
  const THRESHOLD = 0.88; // % of viewport height at which element triggers

  function checkReveals() {
    document.querySelectorAll(SELECTOR).forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * THRESHOLD) {
        el.classList.add('visible');
      }
    });
  }

  // run on load, scroll, and resize
  document.addEventListener('DOMContentLoaded', () => {
    checkReveals();
    window.addEventListener('scroll', checkReveals, { passive: true });
    window.addEventListener('resize', checkReveals, { passive: true });
  });

  // fallback: make everything visible after 2s (accessibility safety net)
  setTimeout(() => {
    document.querySelectorAll(SELECTOR).forEach(el => el.classList.add('visible'));
  }, 2000);
})();
