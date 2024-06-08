document.getElementById('password').addEventListener('input', function() {
    const password = this.value;
    updateCriteria(password);
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    if (validatePassword(password)) {
        message.textContent = 'La contraseña es válida.';
        message.style.color = '#00ff99';
        message.style.textShadow = '0 0 5px #00ff99';
    } else {
        message.textContent = 'La contraseña es inválida. Debe cumplir con todos los criterios.';
        message.style.color = 'red';
        message.style.textShadow = '0 0 5px red';
    }
});

function validatePassword(password) {
    return checkLength(password) &&
           checkUppercase(password) &&
           checkLowercase(password) &&
           checkDigit(password) &&
           checkSpecialChar(password);
}

function updateCriteria(password) {
    updateCriteriaElement('lengthCriteria', checkLength(password));
    updateCriteriaElement('uppercaseCriteria', checkUppercase(password));
    updateCriteriaElement('lowercaseCriteria', checkLowercase(password));
    updateCriteriaElement('digitCriteria', checkDigit(password));
    updateCriteriaElement('specialCharCriteria', checkSpecialChar(password));
}

function updateCriteriaElement(elementId, isValid) {
    const element = document.getElementById(elementId);
    if (isValid) {
        element.classList.remove('invalid');
        element.classList.add('valid');
    } else {
        element.classList.remove('valid');
        element.classList.add('invalid');
    }
}

function checkLength(password) {
    return password.length >= 8;
}

function checkUppercase(password) {
    return /[A-Z]/.test(password);
}

function checkLowercase(password) {
    return /[a-z]/.test(password);
}

function checkDigit(password) {
    return /[0-9]/.test(password);
}

function checkSpecialChar(password) {
    return /[!@#$%^&*()_+{}|:"<>?\\[\];',./]/.test(password);
}
