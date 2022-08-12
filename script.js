const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');
const heroSection = document.getElementById('hero');
const header = document.getElementsByTagName('nav')[0];

const navHeight = header.offsetHeight;
heroSection.style.paddingTop = `${navHeight}px`;

btn.addEventListener('click', () => {
	btn.classList.toggle('open');
	nav.classList.toggle('flex');
	nav.classList.toggle('hidden');
});
