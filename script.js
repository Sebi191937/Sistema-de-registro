document.getElementById('register-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Limpiar errores previos
    clearErrors();

    let isValid = true;

    // Obtener valores de los campos
    const fullname = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirm-password').value.trim();
    const terms = document.getElementById('terms').checked;

    // Validaciones
    if (fullname === '') {
        showError('fullname', 'El nombre completo es obligatorio.');
        isValid = false;
    }

    if (email === '' || !validateEmail(email)) {
        showError('email', 'Por favor, ingresa un correo electrónico válido.');
        isValid = false;
    }

    if (username === '') {
        showError('username', 'El nombre de usuario es obligatorio.');
        isValid = false;
    }

    if (password === '' || password.length < 6) {
        showError('password', 'La contraseña debe tener al menos 6 caracteres.');
        isValid = false;
    }

    if (confirmPassword !== password) {
        showError('confirm-password', 'Las contraseñas no coinciden.');
        isValid = false;
    }

    if (!terms) {
        showError('terms', 'Debes aceptar los términos y condiciones.');
        isValid = false;
    }

    if (isValid) {
        alert('Registro exitoso!');
        // Aquí se podría enviar el formulario a un servidor.
    }
});

// Funciones auxiliares
function showError(field, message) {
    const errorElement = document.getElementById(`${field}-error`);
    errorElement.textContent = message;
}

function clearErrors() {
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => error.textContent = '');
}

function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}
