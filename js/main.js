const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    const open = navLinks.classList.toggle('is-open');
    hamburger.classList.toggle('is-active', open);
    hamburger.setAttribute('aria-expanded', open);
  });

  document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
      navLinks.classList.remove('is-open');
      hamburger.classList.remove('is-active');
    }
  });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (navLinks) {
        navLinks.classList.remove('is-open');
        hamburger && hamburger.classList.remove('is-active');
      }
    }
  });
});
