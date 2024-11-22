var urlParams = new URLSearchParams(window.location.search);
var username = urlParams.get('usuario');

document.addEventListener('DOMContentLoaded', function() {
    if (username) {
        document.getElementById('welcome-message').textContent = '¡Bienvenido/a, ' + username + '!';
    } 
    else {
        document.getElementById('welcome-message').textContent = 'Usuario no especificado';
    }
});
