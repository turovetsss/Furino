
  function handleSubmit(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const age = document.getElementById('age').value;

    clearErrorMessages();

    let isValid = true;

    if (name.trim() === "") {
        displayErrorMessage('nameError', 'Name field is required');
        isValid = false;
    }

    if (email.trim() === "") {
        displayErrorMessage('emailError', 'Email field is required');
        isValid = false;
    }

    if (password.trim() === "") {
        displayErrorMessage('passwordError', 'Password field is required');
        isValid = false;
    } else if (password.length < 8) {
        displayErrorMessage('passwordError', 'Password should be at least 8 characters long');
        isValid = false;
    }

    if (confirmPassword.trim() === "") {
        displayErrorMessage('confirmPasswordError', 'Confirm Password field is required');
        isValid = false;
    } else if (confirmPassword !== password) {
        displayErrorMessage('confirmPasswordError', 'Passwords do not match');
        isValid = false;
    }

    if (age < 18 || age > 100) {
        displayErrorMessage('ageError', 'Age should be between 18 and 100');
        isValid = false;
    }

    if (isValid) {
        const formData = {
            name: name,
            email: email,
            password: password,
            age: age
        };
        console.log(formData);
    }
}

function displayErrorMessage(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
}

function clearErrorMessages() {
    const errorElements = document.getElementsByClassName('error');
    Array.prototype.forEach.call(errorElements, function(element) {
        element.textContent = "";
    });
}
