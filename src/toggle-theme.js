const toggleTheme = () => {
	const isDark = document.documentElement.classList.contains('dark');

	if (isDark) {
		localStorage.theme = 'light';
		document.documentElement.classList.remove('dark');
	} else {
		localStorage.theme = 'dark';
		document.documentElement.classList.add('dark');
	}

	return localStorage.theme;
};

export default toggleTheme;
