function showError(field, message) {
	const error = document.createElement('p');
	error.className = 'error-message text-red-500 text-sm mt-1';
	error.textContent = message;

	field.parentNode.appendChild(error);
	field.classList.add('border-red-500');
}

function clearErrors(form) {
	form.querySelectorAll('.error-message').forEach((el) => el.remove());
	form
		.querySelectorAll('input, textarea')
		.forEach((field) => field.classList.remove('border-red-500'));
}

function validateField(field) {
	const value = field.value.trim();

	// Check if field is empty
	if (!value) {
		const label = field.previousElementSibling?.textContent || 'This field';
		return { valid: false, message: `${label} is required` };
	}

	// Check pattern attribute (HTML5 pattern)
	if (field.hasAttribute('pattern')) {
		const pattern = new RegExp(field.getAttribute('pattern'));
		if (!pattern.test(value)) {
			const errorMsg = field.dataset.errorMessage || 'Invalid format';
			return { valid: false, message: errorMsg };
		}
	}

	// Check data-validate attribute for custom validation types
	if (field.dataset.validate === 'email') {
		const emailPattern = /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/;
		if (!emailPattern.test(value)) {
			return { valid: false, message: 'Please enter a valid email address' };
		}
	}

	// Check minimum length
	if (field.dataset.minLength) {
		const minLength = parseInt(field.dataset.minLength);
		if (value.length < minLength) {
			return {
				valid: false,
				message: `Must be at least ${minLength} characters`,
			};
		}
	}

	return { valid: true };
}

function handleFormSubmit(e) {
	e.preventDefault();

	const form = e.target;
	clearErrors(form);

	let isValid = true;
	const requiredFields = form.querySelectorAll('[required]');

	requiredFields.forEach((field) => {
		const validation = validateField(field);
		if (!validation.valid) {
			showError(field, validation.message);
			isValid = false;
		}
	});

	if (!isValid) return;

	alert('Message sent successfully!');
	form.reset();
}

export function initFormHandler() {
	const form = document.querySelector('#contact-form');
	if (form) {
		form.addEventListener('submit', handleFormSubmit);
	}
}
