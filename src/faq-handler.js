// faq-handler.js

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(function (item) {
	const button = item.querySelector('.faq-toggle');
	const content = item.querySelector('.faq-content');
	const icon = item.querySelector('.faq-icon');

	button.addEventListener('click', function () {
		const isOpen = !content.classList.contains('hidden');

		// Close all items first
		faqItems.forEach(function (el) {
			el.querySelector('.faq-content').classList.add('hidden');
			el.querySelector('.faq-icon').textContent = '+';
		});

		// If it was closed, open it
		if (!isOpen) {
			content.classList.remove('hidden');
			icon.textContent = '-';
		}
	});
});
