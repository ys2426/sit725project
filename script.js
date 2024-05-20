    async function handleHomepageForm(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form data
        const from = document.getElementById('from').value;
        const to = document.getElementById('to').value;
        const departureDate = document.getElementById('depart').value;
        const returnDate = document.getElementById('return').value;
        const numberOfPersons = document.getElementById('persons').value;
        const isRoundTrip = document.getElementById('roundTrip').checked;

        // Call the model function to fetch flight data
        try {
            const flightData = await fetchFlightData(from, to, departureDate, returnDate, numberOfPersons, isRoundTrip);
            // Do something with the fetched data, such as updating the UI
            console.log('Flight data:', flightData);
        } catch (error) {
            console.error('Error fetching flight data:', error);
        }
    }

    // Function for handling login form submission on login.html
    function handleLoginForm(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form data
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Here you can perform validation, make HTTP request to validate credentials, etc.
        // For demonstration, let's just log the email and password
        console.log('Email:', email);
        console.log('Password:', password);

        // You can redirect the user to another page after successful login
        // window.location.href = '/dashboard.html';
    }

    // Function for handling signup form submission on signup.html
    function handleSignupForm(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        // Here you can perform validation, make HTTP request to create a new user, etc.
        // For demonstration, let's just log the form data
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Confirm Password:', confirmPassword);

        // You can redirect the user to another page after successful signup
        // window.location.href = '/dashboard.html';
    }

    // Wait for the DOM to be fully loaded before adding event listeners
    document.addEventListener('DOMContentLoaded', function() {
        const homepageForm = document.querySelector('#homepage-form');
        // Add event listener to the homepage form submission
        homepageForm.addEventListener('submit', handleHomepageForm);

        // Get the login form element from login.html
        const loginForm = document.querySelector('#login-form');
        // Add event listener to the login form submission
        loginForm.addEventListener('submit', handleLoginForm);

        // Get the signup form element from signup.html
        const signupForm = document.querySelector('#signup-form');
        // Add event listener to the signup form submission
        signupForm.addEventListener('submit', handleSignupForm);
    });
