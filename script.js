const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
const searchButton = document.getElementById('searchButton');
const searchPanel = document.getElementById('searchPanel');
const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('siteSearch');
const searchMessage = document.getElementById('searchMessage');

menuToggle?.addEventListener('click', () => {
  const open = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', open);
});

searchButton?.addEventListener('click', () => {
  searchPanel.classList.toggle('open');
  if (searchPanel.classList.contains('open')) searchInput.focus();
});

searchForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const query = searchInput.value.trim();
  searchMessage.textContent = query
    ? `Demo search: no live results are connected for “${query}”.`
    : 'Enter a word or phrase to search this demo site.';
});

document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => mainNav.classList.remove('open'));
});
