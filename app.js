// Toggle dark mode
const sunMoon = document.querySelector('.sunmoon');
const sunIcon = document.querySelector('.fa-sun');
const moonIcon = document.querySelector('.fa-moon');

sunMoon.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark-mode');
  sunIcon.classList.toggle('hidden');
  moonIcon.classList.toggle('hidden');
});


const navItems = document.querySelector('.nav');
const openNavBtn = document.querySelector('#open__nav-btn');
const closeNavBtn = document.querySelector('#close__nav-btn');

// open nav dropdown
const openNav = () => {
    navItems.style.display = 'flex';
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'inline-block';
}
// close nav dropdown
const closeNav = () => {
    navItems.style.display = 'none';
    openNavBtn.style.display = 'inline-block';
    closeNavBtn.style.display = 'none';
}
openNavBtn.addEventListener('click', openNav); //call the openNav function
closeNavBtn.addEventListener('click', closeNav); //call the closeNav function






