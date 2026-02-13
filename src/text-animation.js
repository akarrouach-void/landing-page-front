const targets = [
	{ element: document.getElementById('stats-first'), count: 527, suffix: '+' },
	{ element: document.getElementById('stats-second'), count: 527, suffix: 'k' },
	{ element: document.getElementById('stats-third'), count: 527, suffix: '%' },
	{
		element: document.getElementById('stats-fourth'),
		count: 2002,
	},
];

function animateCountUp(target, duration) {
	let currentCount = 0;
	const increment = Math.ceil(target.count / (duration / 10));

	const interval = setInterval(() => {
		currentCount += increment;
		if (currentCount >= target.count) {
			clearInterval(interval);
			currentCount = target.count;
		}

		target.element.textContent = currentCount + (target.suffix || '');
	}, 10);
}

// targets.forEach((target) => {
// 	animateCountUp(target, 1000);
// });

export function initTextAnimation() {
	// Intersection Observer - runs animation when section is visible
	const statsSection = document.getElementById('stats');
	if (!statsSection) return;

	let hasAnimated = false;

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting && !hasAnimated) {
					hasAnimated = true;
					// Start animations when section comes into view
					targets.forEach((target) => {
						if (target.element) {
							animateCountUp(target, 1000);
						}
					});
				}
			});
		},
		{
			threshold: 0.3, // Trigger when 30% of the section is visible
		},
	);

	observer.observe(statsSection);
}
