const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3030;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Mock flight data
let flights = [];

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

//Endpoint to fetch the page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Homepage.html'));
});


// Endpoint to fetch flight data
app.get('/flights', (req, res) => {
  res.json(flights);
});

// Endpoint to submit flight data
app.post('/flights', (req, res) => {
  const flightData = req.body;
  flights.push(flightData);
  res.status(201).send('Flight data submitted successfully!');
});

// Mock user data
let users = [];

// Endpoint to submit login data
app.post('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));  
  const loginData = req.body;
  // Here you can perform validation, check credentials, etc.
  // For demonstration, let's just log the login data
  console.log('Login data:', loginData);
  res.status(200).send('Login successful!');
});

// Endpoint to submit signup data
app.post('/signup', (req, res) => {
  const signupData = req.body;
  // Here you can perform validation, create a new user, etc.
  // For demonstration, let's just log the signup data
  console.log('Signup data:', signupData);
  res.status(201).send('Signup successful!');
});

// Serve homepage.html, login.html, and signup.html
//app.use(express.static('public'));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
