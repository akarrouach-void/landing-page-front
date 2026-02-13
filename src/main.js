import toggleTheme from './toggle-theme.js';
import { initFormHandler } from './form-handler.js';
import { initFAQHandler } from './faq-handler.js';
import { initTextAnimation } from './text-animation.js';
import { initCardsHandler } from './cards-handler.js';
import { initHeroSlider } from './hero-slider.js';

function initApp() {
	// Theme toggle
	const themeToggle = document.getElementById('theme-toggle');
	if (themeToggle) {
		themeToggle.addEventListener('click', toggleTheme);
	}

	// Mobile menu toggle
	const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
	const mobileMenu = document.getElementById('mobile-menu');
	if (mobileMenuToggle && mobileMenu) {
		mobileMenuToggle.addEventListener('click', () => {
			mobileMenu.classList.toggle('hidden');
		});
	}

	// Initialize all handlers
	initFormHandler();
	initFAQHandler();
	initTextAnimation();
	initCardsHandler();
	initHeroSlider();
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', initApp);
} else {
	initApp();
}
