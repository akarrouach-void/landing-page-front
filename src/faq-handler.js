// faq-handler.js

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(function (item) {
	const button = item.querySelector('.faq-toggle');
	const content = item.querySelector('.faq-content');
	const icon = item.querySelector('.faq-icon');

	// Initialize ARIA states based on content visibility
	if (content.classList.contains('hidden')) {
		button.setAttribute('aria-expanded', 'false');
		content.setAttribute('aria-hidden', 'true');
	} else {
		button.setAttribute('aria-expanded', 'true');
		content.setAttribute('aria-hidden', 'false');
	}

	button.addEventListener('click', function () {
		const isOpen = content.classList.contains('hidden') === false;

		// Close all items first and update ARIA
		faqItems.forEach(function (el) {
			const elButton = el.querySelector('.faq-toggle');
			const elContent = el.querySelector('.faq-content');
			const elIcon = el.querySelector('.faq-icon');

			elContent.classList.add('hidden');
			elIcon.textContent = '+';
			elButton.setAttribute('aria-expanded', 'false');
			elContent.setAttribute('aria-hidden', 'true');
		});

		// If it was closed, open it
		if (!isOpen) {
			content.classList.remove('hidden');
			icon.textContent = '-';
			button.setAttribute('aria-expanded', 'true');
			content.setAttribute('aria-hidden', 'false');
		}
	});
});
