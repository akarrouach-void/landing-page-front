import toggleTheme from '/src/toggle-theme.js';

const button = document.getElementById('theme-toggle');

const updateButtonText = () => {
	const isDark = document.documentElement.classList.contains('dark');
	button.textContent = isDark ? '☀️ Light' : '🌙 Dark';
};

updateButtonText();

button.addEventListener('click', () => {
	toggleTheme();
	updateButtonText();
});
