document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        let isValid = true;
        const nameInput = document.querySelector('#name');
        const emailInput = document.querySelector('#email');
        const messageInput = document.querySelector('#message');

        // Clear previous error messages
        document.querySelectorAll('.error').forEach(function(error) {
            error.textContent = '';
        });

        // Name validation
        if (nameInput.value.trim() === '') {
            isValid = false;
            showError(nameInput, 'Name is required.');
        }

        // Email validation
        if (emailInput.value.trim() === '') {
            isValid = false;
            showError(emailInput, 'Email is required.');
        } else if (!validateEmail(emailInput.value.trim())) {
            isValid = false;
            showError(emailInput, 'Please enter a valid email address.');
        }

        // Message validation
        if (messageInput.value.trim() === '') {
            isValid = false;
            showError(messageInput, 'Message is required.');
        }

        if (!isValid) {
            event.preventDefault();
        }
    });

    function showError(input, message) {
        const errorElement = input.nextElementSibling;
        if (errorElement && errorElement.classList.contains('error')) {
            errorElement.textContent = message;
        }
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});