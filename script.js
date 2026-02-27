// ── NAV scroll + active highlight ──
const mainNav = document.getElementById('mainNav');
const allSections = document.querySelectorAll('section[id]');
const allNavLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  mainNav.classList.toggle('scrolled', window.scrollY > 10);
  let active = '';
  allSections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 90) active = s.id;
  });
  allNavLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + active);
  });
  runReveal();
});

// ── Scroll reveal ──
function runReveal() {
  document.querySelectorAll('.reveal:not(.visible)').forEach((el, i) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 40) {
      setTimeout(() => el.classList.add('visible'), i * 50);
    }
  });
}

// Run on load at multiple intervals to handle font/render timing
window.addEventListener('DOMContentLoaded', () => {
  [50, 200, 500, 1000].forEach(ms => setTimeout(runReveal, ms));
});
