document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("loginForm");
    const errorMessage = document.getElementById("error-message");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        // Get input values
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Retrieve credentials from localStorage
        const storedEmail = localStorage.getItem('email');
        const storedPassword = localStorage.getItem('password');

        // Validate credentials
        if (email === storedEmail && password === storedPassword) {
            // Redirect to welcome page if credentials match
            window.location.href = "home.html";
        } else {
            // Show error message
            if (!email || password.length < 8) {
                if (!email) {
                    errorMessage.textContent = "Please enter your email.";
                } else if (password.length < 8) {
                    errorMessage.textContent = "Password must be at least 8 characters long.";
                }
            } else {
                errorMessage.textContent = "Invalid email or password. Please try again.";
            }
            errorMessage.style.display = "block";
        }
    });
});
