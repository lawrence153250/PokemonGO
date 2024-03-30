document.addEventListener("DOMContentLoaded", function() {
    const signupBtn = document.getElementById("signupBtn");
    const fullNameInput = document.getElementById("fullNameInput");
    const birthdayInput = document.getElementById("birthdayInput");
    const emailInput = document.getElementById("emailInput");
    const ignInput = document.getElementById("ignInput");
    const passwordInput = document.getElementById("passwordInput");
    const confirmPasswordInput = document.getElementById("confirmPasswordInput");
    const agreeCheckbox = document.getElementById("agreeCheckbox");
    const signupForm = document.getElementById("signupForm");

    const playerIdInput = document.getElementById("playerIdInput");
    function generateRandomPlayerId() {
        const randomDigits = Math.floor(1000 + Math.random() * 9000); 
        const randomDigits1 = Math.floor(1000 + Math.random() * 9000); 
        const randomDigits2 = Math.floor(1000 + Math.random() * 9000); 
        return `${randomDigits} ${randomDigits1} ${randomDigits2}`; 
    }
    playerIdInput.value = generateRandomPlayerId();


    signupBtn.addEventListener("click", function() {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value.trim())) {
            alert("Please enter a valid email address.");
            return;
        }
        if (
            fullNameInput.value.trim() === '' ||
            birthdayInput.value.trim() === '' ||
            ignInput.value.trim() === '' ||
            passwordInput.value.trim() === '' ||
            confirmPasswordInput.value.trim() === '' ||
            !agreeCheckbox.checked
        ) {
            alert("Please fill in all required fields and agree to the terms and privacy.");
        } else if (passwordInput.value !== confirmPasswordInput.value) {
            alert("Passwords do not match.");
        } else {
            window.open('login.html');
        }
    });
});