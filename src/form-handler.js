document.getElementById('form-submit').addEventListener('click', function (e) {
	e.preventDefault();

	const name = document.getElementById('form-name').value.trim();
	const email = document.getElementById('form-email').value.trim();
	const phone = document.getElementById('form-phone').value.trim();
	const message = document.getElementById('form-message').value.trim();

	// Clear old errors first
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

	// All fields are valid — show success
	alert(
		`Message sent!\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
	);

	// Clear the form
	document.getElementById('form-name').value = '';
	document.getElementById('form-email').value = '';
	document.getElementById('form-phone').value = '';
	document.getElementById('form-message').value = '';
});

function showError(fieldId, message) {
	let input = document.getElementById(fieldId);

	let error = document.createElement('p');
	error.className = 'error-message';
	error.style.color = 'red';
	error.style.fontSize = '12px';
	error.style.marginTop = '4px';
	error.textContent = message;

	input.parentNode.appendChild(error);
	input.style.borderColor = 'red';
}

function clearErrors() {
	// Remove all red error messages
	document.querySelectorAll('.error-message').forEach(function (el) {
		el.remove();
	});

	// Reset red borders
	['form-name', 'form-email', 'form-phone', 'form-message'].forEach(
		function (id) {
			document.getElementById(id).style.borderColor = '';
		},
	);
}
