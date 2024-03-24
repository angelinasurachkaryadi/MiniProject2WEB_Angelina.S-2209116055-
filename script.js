const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

// Check if there's a stored theme preference
const storedTheme = localStorage.getItem('theme');
if (storedTheme === 'dark') {
    enableDarkMode();
}

toggle.addEventListener('click', function() {
    if (body.classList.contains('dark')) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
});

function enableDarkMode() {
    body.classList.add('dark');
    toggle.classList.remove('bi-moon');
    toggle.classList.add('bi-brightness-high-fill');
    body.style.background = 'black';
    body.style.color = 'pink';
    body.style.transition = '2s';
    localStorage.setItem('theme', 'dark');
}

function disableDarkMode() {
    body.classList.remove('dark');
    toggle.classList.remove('bi-brightness-high-fill');
    toggle.classList.add('bi-moon');
    body.style.background = 'pink';
    body.style.color = 'black';
    body.style.transition = '2s';
    localStorage.setItem('theme', 'light');
}
