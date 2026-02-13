function showError(fieldId, message) {
	const input = document.getElementById(fieldId);
	const wrapper = input.parentNode;

	const error = document.createElement('p');
	error.className = 'error-message text-red-600 dark:text-red-400 text-sm mt-1';
	error.setAttribute('role', 'alert');
	error.textContent = message;

	wrapper.appendChild(error);
	input.classList.add('!border-red-500');
	input.setAttribute('aria-invalid', 'true');
}

function clearErrors() {
	document.querySelectorAll('.error-message').forEach((el) => el.remove());

	['form-name', 'form-email', 'form-phone', 'form-message'].forEach((id) => {
		const input = document.getElementById(id);
		input.classList.remove('!border-red-500');
		input.removeAttribute('aria-invalid');
	});
}

export function initFormHandler() {
	const form = document.getElementById('contact-form');

	if (!form) return; // Exit if form doesn't exist on this page

	form.addEventListener('submit', function (e) {
		e.preventDefault();

		const name = document.getElementById('form-name').value.trim();
		const email = document.getElementById('form-email').value.trim();
		const phone = document.getElementById('form-phone').value.trim();
		const message = document.getElementById('form-message').value.trim();

		clearErrors();
		let isValid = true;

		if (name === '') {
			showError('form-name', 'Name is required.');
			isValid = false;
		}

		if (email === '') {
			showError('form-email', 'Email is required.');
			isValid = false;
		} else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
			showError('form-email', 'Please enter a valid email.');
			isValid = false;
		}

		if (phone === '') {
			showError('form-phone', 'Phone number is required.');
			isValid = false;
		} else if (
			!/^(?:(?:(?:\+|00)212[\s]?(?:[\s]?\(0\)[\s]?)?)|0){1}(?:5[\s.-]?[2-3]|6[\s.-]?[13-9]){1}[0-9]{1}(?:[\s.-]?\d{2}){3}$/.test(
				phone,
			)
		) {
			showError('form-phone', 'Please enter a valid Moroccan phone number.');
			isValid = false;
		}

		if (message === '') {
			showError('form-message', 'Message is required.');
			isValid = false;
		} else if (message.length < 10) {
			showError('form-message', 'Message must be at least 10 characters.');
			isValid = false;
		}
		if (!isValid) return;

		alert(
			`Message sent!\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
		);
		this.reset();
	});
}
