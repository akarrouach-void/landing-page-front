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
			target.element.textContent = currentCount + (target.suffix || '');
		} else {
			target.element.textContent = currentCount + (target.suffix || '');
		}
	}, 10);
}

targets.forEach((target) => {
	animateCountUp(target, 1000);
});
