const header = document.querySelector('header');
const hamburger = document.getElementById('hamburger');
const discoverMenu = document.getElementById('discover-menu');
const menu = document.querySelector('article');

hamburger.addEventListener('click', () => {
  header.classList.toggle('expand-header')
});

discoverMenu.addEventListener('click', () => {
  menu.classList.add('expand-menu')
  discoverMenu.style.display = 'none';
})
