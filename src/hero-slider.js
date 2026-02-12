const slides = [
	{
		image: '/images/fkgs5tnr9hoyldtskjp3.avif',
		title: 'Lorem Ipsum Is Simply Dummy Text Of The Printing',
		description:
			"Lorem Ipsum is simply dummy text of the print and typesetting industry. Lorem Ipsum has been the industry's.",
		alt: 'Alisa Boutique premium leather handbag collection',
	},
	{
		image: '/images/ivtvbeqtczqjbnvqdphs.avif',
		title: 'Discover Our Premium Fashion Collection',
		description:
			'Explore our curated selection of premium fashion accessories and boutique items designed for the modern shopper.',
		alt: 'Premium fashion accessories collection',
	},
	{
		image: '/images/qcamjyxmfc7dc84kamp3.avif',
		title: 'Elegant Style For Every Occasion',
		description:
			'Find the perfect pieces to complement your unique style and elevate your wardrobe to new heights.',
		alt: 'Elegant fashion clothing and accessories',
	},
	{
		image: '/images/zgxwvhhbqv508wleamjn.avif',
		title: 'Quality Craftsmanship You Can Trust',
		description:
			'Each item is carefully selected for its exceptional quality, timeless design, and lasting value.',
		alt: 'Fashion store interior with quality items',
	},
	{
		image: '/images/kgyub9c96tjjtw6spv41.avif',
		title: 'Shop The Latest Trends Today',
		description:
			'Stay ahead of the fashion curve with our latest arrivals and trending pieces from top designers.',
		alt: 'Women fashion accessories display',
	},
];

let currentSlide = 0;

function updateSlide(index) {
	const slide = slides[index];

	// Update image
	const heroImage = document.querySelector('#hero img');
	if (heroImage) {
		heroImage.src = slide.image;
		heroImage.alt = slide.alt;
	}

	// Update title
	const heroTitle = document.querySelector('#hero h1');
	if (heroTitle) {
		heroTitle.textContent = slide.title;
	}

	// Update description
	const heroDescription = document.querySelector('#hero p');
	if (heroDescription) {
		heroDescription.textContent = slide.description;
	}

	// Update dots
	const dots = document.querySelectorAll('#hero .hero-dot');
	dots.forEach((dot, i) => {
		const circle = dot.querySelector('span[aria-hidden="true"]');
		if (i === index) {
			dot.setAttribute('aria-pressed', 'true');
			if (circle) {
				circle.className = 'w-3 h-3 rounded-full bg-blue-900 dark:bg-blue-600';
			}
		} else {
			dot.setAttribute('aria-pressed', 'false');
			if (circle) {
				circle.className =
					'w-3 h-3 rounded-full bg-gray-400 dark:bg-gray-600 hover:bg-gray-500 dark:hover:bg-gray-500';
			}
		}
	});

	currentSlide = index;
}

function initHeroSlider() {
	const dots = document.querySelectorAll('#hero .hero-dot');

	dots.forEach((dot, index) => {
		dot.addEventListener('click', () => {
			updateSlide(index);
		});
	});

	// Auto-advance slider every 3 seconds
	setInterval(() => {
		const nextSlide = (currentSlide + 1) % slides.length;
		updateSlide(nextSlide);
	}, 5000);
}

initHeroSlider();
