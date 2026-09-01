const root = document.documentElement;
const savedTheme = localStorage.getItem('chi-theme');
const prefersDark = matchMedia('(prefers-color-scheme: dark)').matches;
if (savedTheme === 'dark' || (!savedTheme && prefersDark)) root.classList.add('dark');

document.querySelector('.theme-toggle').addEventListener('click', () => {
  root.classList.toggle('dark');
  localStorage.setItem('chi-theme', root.classList.contains('dark') ? 'dark' : 'light');
});

document.querySelector('#year').textContent = new Date().getFullYear();

document.querySelectorAll('a[href="#"]').forEach(link => {
  link.addEventListener('click', event => event.preventDefault());
});
