import toggleTheme from './toggle-theme.js';
import './form-handler.js';
import './faq-handler.js';
import './text-animation.js';

// Theme toggle
document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

// Mobile menu toggle
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuToggle.addEventListener('click', () => {
	mobileMenu.classList.toggle('hidden');
});
