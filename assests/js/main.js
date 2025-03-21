// -----------Log in og register ---------------------------------------------------------------------------------------------------------
function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    if (username && password) {
        alert('Login succesfuld for ' + username);
        window.location.href = "index.html"; // Skift til den ønskede side
    } else {
        alert('Udfyld alle felter');
    }
}

function register() {
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;
    if (username && password) {
        alert('Registrering succesfuld for ' + username);
        window.location.href = "index.html"; // Skift til den ønskede side
    } else {
        alert('Udfyld alle felter');
    }
}

// -------------------------------------------------------------------------------------------------------------------------------------
