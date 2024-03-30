document.addEventListener("DOMContentLoaded", function() {
    const loginBtn = document.getElementById("loginBtn");
    const ignInput = document.getElementById("ignInput");
    const passwordInput = document.getElementById("passwordInput");
    const loginForm = document.getElementById("loginForm");

    loginBtn.addEventListener("click", function() {
        if (ignInput.value.trim() === '' || passwordInput.value.trim() === '') {
            alert("Please enter both IGN and Password.");
        } else {
            window.open('index.html');
        }
    });
});