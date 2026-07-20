// temples.js — McLloyd Pise — WDD 131 Temple Album

// Dynamic footer: current year and last modified date
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const primaryNav = document.getElementById('primary-nav');

hamburger.addEventListener('click', () => {
  const isOpen = primaryNav.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', isOpen);
});

// Close the menu automatically if the viewport is resized past the
// mobile breakpoint while the menu is open (keeps state in sync with CSS).
const mobileBreakpoint = window.matchMedia('(min-width: 700px)');

function syncNavOnResize(e) {
  if (e.matches) {
    primaryNav.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  }
}

mobileBreakpoint.addEventListener('change', syncNavOnResize);