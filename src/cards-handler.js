const cards = [
	{
		image: '/images/k4aijemqk7mhqmen6gfr.avif',
		alt: 'Fashion boutique clothing rack',
		title: 'Lorem Ipsum Is Simply Do Text Of That',
		subtitle: 'Lorem Ipsum is simply dummy text of the printing.',
		body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
		link: 'Lorem Ips',
	},
	{
		image: '/images/kgyub9c96tjjtw6spv41.avif',
		alt: 'Women fashion accessories display',
		title: 'Lorem Ipsum Is Simply Do Text Of That',
		subtitle: 'Lorem Ipsum is simply dummy text of the printing.',
		body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
		link: 'Lorem Ips',
	},
	{
		image: '/images/lpdxkgofmjs45ypda9ev.avif',
		alt: 'Shopping bags fashion boutique',
		title: 'Lorem Ipsum Is Simply Do Text Of That',
		subtitle: 'Lorem Ipsum is simply dummy text of the printing.',
		body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
		link: 'Lorem Ips',
	},
	{
		image: '/images/qcamjyxmfc7dc84kamp3.avif',
		alt: 'Elegant fashion clothing',
		title: 'Lorem Ipsum Is Simply Do Text Of That',
		subtitle: 'Lorem Ipsum is simply dummy text of the printing.',
		body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
		link: 'Lorem Ips',
	},
	{
		image: '/images/zgxwvhhbqv508wleamjn.avif',
		alt: 'Fashion store interior',
		title: 'Lorem Ipsum Is Simply Do Text Of That',
		subtitle: 'Lorem Ipsum is simply dummy text of the printing.',
		body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
		link: 'Lorem Ips',
	},
	{
		image: '/images/k4aijemqk7mhqmen6gfr.avif',
		alt: 'Fashion model boutique style',
		title: 'Lorem Ipsum Is Simply Do Text Of That',
		subtitle: 'Lorem Ipsum is simply dummy text of the printing.',
		body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
		link: 'Lorem Ips',
	},
];

const INITIAL_COUNT = 3;

function createCard(card) {
	return `
		<div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm hover:shadow-md transition">
			<div class="aspect-4/3 w-full overflow-hidden">
				<img
					src="${card.image}"
					alt="${card.alt}"
					class="w-full h-full object-cover hover:scale-105 transition duration-500"
					width="800"
					height="600"
					loading="lazy"
					decoding="async"
				/>
			</div>
			<div class="p-6 space-y-3">
				<h3 class="text-xl font-bold text-gray-900 dark:text-white leading-snug">${card.title}</h3>
				<p class="text-sm text-gray-600 dark:text-gray-400">${card.subtitle}</p>
				<p class="text-sm text-gray-500 dark:text-gray-500">${card.body}</p>
				<a href="#" class="inline-block text-sm font-semibold text-blue-900 dark:text-blue-400 underline underline-offset-2 hover:text-blue-700 dark:hover:text-blue-300 transition pt-1">${card.link}</a>
			</div>
		</div>
	`;
}

function initCards() {
	const grid = document.getElementById('cards-grid');
	const loadMoreBtn = document.getElementById('load-more-btn');

	if (!grid || !loadMoreBtn) return;

	// Render initial cards
	grid.textContent = cards.slice(0, INITIAL_COUNT).map(createCard).join('');

	let expanded = false;

	loadMoreBtn.addEventListener('click', () => {
		if (!expanded) {
			// Load more: render all cards
			grid.textContent = cards.map(createCard).join('');
			loadMoreBtn.textContent = 'LOAD LESS';
			expanded = true;
		} else {
			// Load less: back to initial
			grid.textContent = cards.slice(0, INITIAL_COUNT).map(createCard).join('');
			loadMoreBtn.textContent = 'LOAD MORE';
			expanded = false;

			// Scroll back up to cards section smoothly
			document
				.getElementById('cards')
				?.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	});
}

initCards();
