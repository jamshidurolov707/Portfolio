// Mobil menyu tugmasi (hozircha oddiy, keyinchalik kengaytirish mumkin)
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('nav-open');
  });
}
