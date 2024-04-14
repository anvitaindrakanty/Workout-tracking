const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 3000;
// Create a MySQL database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'h2iq8pz4rR@',
    database: 'your_database',
});

// Connect to the database
db.connect(err => {
    if (err) {
        console.error('Database connection failed:', err);
        throw err;
    }
    console.log('Database connected');
});

// Middleware for parsing JSON requests
app.use(bodyParser.json());

// Serve static files (HTML, CSS, JavaScript)
app.use(express.static('public1'));

// Handle signup GET request (serving the signup.html page)
app.get('/signup', (req, res) => {
    res.sendFile(__dirname + '/public1/signup.html');
});

// Handle signup POST requests
app.post('/signup', (req, res) => {
    const { username, password } = req.body;

    // TODO: Implement user signup logic here, insert data into the database.
    // Ensure to hash and salt the password for security.

    // For this example, we'll just send a success response.
    res.json({ success: true });
});
// Handle login POST requests
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // TODO: Implement user login logic here.
    // Check if the username and password match the records in the database.

    // For this example, we'll assume the user login is successful.
    // In a real application, you should validate the user's credentials and handle authentication securely.
    
    // Store user data in the database (MySQL)
    const insertUserQuery = 'INSERT INTO users (username, password) VALUES (?, ?)';
    const values = [username, password];

    db.query(insertUserQuery, values, (error, result) => {
        if (error) {
            console.error('Error inserting user data:', error);
            return res.status(500).json({ success: false, message: 'Server error' });
        }
        
        console.log('User data inserted successfully');
        res.json({ success: true, message: 'Login successful' });
    });
});


// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
