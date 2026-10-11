
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');

    menuToggle.setAttribute(
      'aria-expanded',
      navLinks.classList.contains('open')
    );
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Light and dark theme
const themeToggle = document.querySelector('.theme-toggle');

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
  });
}

// Current year
const year = document.querySelector('#year');

if (year) {
  year.textContent = new Date().getFullYear();
}

// Scroll progress
const progress = document.querySelector('.scroll-progress');

window.addEventListener('scroll', () => {
  if (progress) {
    const max =
      document.documentElement.scrollHeight - window.innerHeight;

    progress.style.width =
      (max > 0 ? (window.scrollY / max) * 100 : 0) + '%';
  }
});

// Reveal animations
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 }
  );

  document.querySelectorAll('.reveal').forEach((element) => {
    observer.observe(element);
  });
}

// Contact form
// Important: Do not prevent the default form submission.
// The browser will submit the form to FormSubmit.app.

