const FIELD_RULES = [
	{ id: 'form-name', required: true, requiredMsg: 'Name is required.' },
	{
		id: 'form-email',
		required: true,
		requiredMsg: 'Email is required.',
		pattern: /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/,
		patternMsg: 'Please enter a valid email.',
	},
	{
		id: 'form-phone',
		required: true,
		requiredMsg: 'Phone number is required.',
		pattern:
			/^(?:(?:(?:\+|00)212[\s]?(?:[\s]?\(0\)[\s]?)?)|0){1}(?:5[\s.-]?[2-3]|6[\s.-]?[13-9]){1}[0-9]{1}(?:[\s.-]?\d{2}){3}$/,
		patternMsg: 'Please enter a valid Moroccan phone number.',
	},
	{
		id: 'form-message',
		required: true,
		requiredMsg: 'Message is required.',
		minLength: 10,
		minLengthMsg: 'Message must be at least 10 characters.',
	},
];

function showError(fieldId, message) {
	const input = document.getElementById(fieldId);
	if (!input) return; // guard against missing elements

	const error = document.createElement('p');
	error.className = 'error-message text-red-600 dark:text-red-400 text-sm mt-1';
	error.setAttribute('role', 'alert');
	error.textContent = message;

	input.parentNode.appendChild(error);
	input.classList.add('!border-red-500');
	input.setAttribute('aria-invalid', 'true');
}

function clearErrors() {
	document.querySelectorAll('.error-message').forEach((el) => el.remove());

	FIELD_RULES.forEach(({ id }) => {
		const input = document.getElementById(id);
		if (!input) return;
		input.classList.remove('!border-red-500');
		input.removeAttribute('aria-invalid');
	});
}

function validateField({
	id,
	required,
	requiredMsg,
	pattern,
	patternMsg,
	minLength,
	minLengthMsg,
}) {
	const input = document.getElementById(id);
	if (!input) return true;

	const value = input.value.trim();

	if (required && value === '') {
		showError(id, requiredMsg);
		return false;
	}
	if (pattern && !pattern.test(value)) {
		showError(id, patternMsg);
		return false;
	}
	if (minLength && value.length < minLength) {
		showError(id, minLengthMsg);
		return false;
	}

	return true;
}

export function initFormHandler() {
	const form = document.getElementById('contact-form');
	if (!form) return;

	form.addEventListener('submit', function (e) {
		e.preventDefault();
		clearErrors();

		const isValid = FIELD_RULES.map(validateField).every(Boolean);
		if (!isValid) return;

		const values = Object.fromEntries(
			FIELD_RULES.map(({ id }) => [
				id,
				document.getElementById(id).value.trim(),
			]),
		);

		alert(
			`Message sent!\n\n${Object.entries(values)
				.map(([k, v]) => `${k}: ${v}`)
				.join('\n')}`,
		);
		form.reset();
	});
}
