function signup() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // Send a POST request to your Node.js server to handle the signup process.
    fetch('/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Signup successful! Please log in.');
            window.location.href = '/login.html'; // Redirect to login page.
        } else {
            alert('Signup failed. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Send a POST request to your server for login
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Redirect to a dashboard or another page upon successful login
            window.location.href = 'index.html';
        } else {
            // Display an error message or take appropriate action for failed login
            alert('Login failed. Please check your credentials.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        // Handle any other errors that may occur during the login process
        alert('An error occurred during login. Please try again later.');
    });
}
