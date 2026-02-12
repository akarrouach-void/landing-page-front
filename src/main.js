import toggleTheme from './toggle-theme.js';
import './form-handler.js';
import './faq-handler.js';
import './text-animation.js';
import './cards-handler.js';

// Theme toggle
document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

// Mobile menu toggle
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuToggle.addEventListener('click', () => {
	mobileMenu.classList.toggle('hidden');
});

// Load More Cards
const loadMoreBtn = document.getElementById('load-more-btn');
if (loadMoreBtn) {
	loadMoreBtn.addEventListener('click', () => {
		const hiddenCards = document.querySelectorAll('[data-extra-card].hidden');
		hiddenCards.forEach((card) => card.classList.remove('hidden'));
		if (document.querySelectorAll('[data-extra-card].hidden').length === 0) {
			loadMoreBtn.style.display = 'none';
		}
	});
}
