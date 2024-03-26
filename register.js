document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.form');
    const firstName = document.querySelector('input[type="text"][placeholder="Enter first name"]');
    const lastName = document.querySelector('input[type="text"][placeholder="Enter last name"]');
    // Update the selector for email to ensure it's captured correctly for validation and storage
    const email = document.querySelector('input[type="email"][placeholder="Enter email address"]');
    const phoneNumber = document.querySelector('input[type="number"][placeholder="Enter phone number"]');
    const birthDate = document.querySelector('input[type="date"][placeholder="Enter birth date"]');
    const genderMale = document.getElementById('check-male');
    const genderFemale = document.getElementById('check-female');
    const address = document.querySelector('input[type="text"][placeholder="Enter street address"]');
    const country = document.querySelector('select');
    const city = document.querySelector('input[type="text"][placeholder="Enter your city"]');
    const region = document.querySelector('input[type="text"][placeholder="Enter your region"]');
    const postalCode = document.querySelector('input[type="number"][placeholder="Enter postal code"]');
    const profilePicture = document.getElementById('input-box');
    // Update the type for password fields to "password" for security during input
    const password = document.querySelector('input[type="password"][placeholder="Enter password"]');
    const confirmPassword = document.querySelector('input[type="password"][placeholder="Enter password again"]');
    const errorElement = document.getElementById('error-message');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Always prevent the form from submitting in the traditional way as we are going to handle it manually
        let errors = [];
        
        // Validation checks...
        // (Your existing validation logic here, which is well-written and thorough)
        
        // Display errors if any
        if(errors.length > 0) {
            errorElement.innerText = errors.join('\n');
            errorElement.style.display = 'block'; // Show the error message element
        } else {
            // If no errors, proceed with form submission
            errorElement.style.display = 'none'; // Hide the error message element if visible from a previous attempt

            // Store the credentials in localStorage (consider hashing the password in a real app)
            localStorage.setItem('email', email.value.trim());
            localStorage.setItem('password', password.value.trim()); // Reminder: Storing plain text passwords is not secure
            
            alert('Registration successful. You can now log in.');

            // Optionally, redirect the user to the login page
            window.location.href = 'index.html';
        }
    });
});
