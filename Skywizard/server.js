const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const crypto = require('crypto');
const path = require('path');
const dotenv = require('dotenv');
const http = require('http');
const cors = require('cors');
const env = require('./env');
const router = require('./router/router');
const { connectToDatabase, createUser, loginUser, verifyToken } = require('./model/model');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3030;

// Enable CORS
app.use(cors());

// Parse JSON bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Session configuration
app.use(
    session({
        secret: crypto.randomBytes(32).toString('hex'),
        resave: false,
        saveUninitialized: true,
        cookie: {
            secure: process.env.NODE_ENV === 'production',
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000 // 24 hours
        }
    })
);

// Initialize MongoDB connection
connectToDatabase().catch(console.error);

const server = http.createServer(app);
const io = require('socket.io')(server);

// Authentication middleware
const authenticateToken = async (req, res, next) => {
    try {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];

        if (!token) {
            return res.status(401).json({ error: 'Access token required' });
        }

        const user = await verifyToken(token);
        req.user = user;
        next();
    } catch (error) {
        console.error('Authentication error:', error);
        return res.status(403).json({ error: 'Invalid token' });
    }
};

// Authentication routes
app.post('/api/signup', async (req, res) => {
    try {
        console.log('Signup request received:', req.body);
        const { email, password, name } = req.body;
        
        if (!email || !password || !name) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const user = await createUser({ email, password, name });
        console.log('User created successfully:', user);
        res.status(201).json({ message: 'User created successfully', user });
    } catch (error) {
        console.error('Signup error:', error);
        if (error.message === 'User already exists') {
            return res.status(409).json({ error: error.message });
        }
        res.status(500).json({ error: 'Error creating user' });
    }
});

app.post('/api/login', async (req, res) => {
    try {
        console.log('Login request received:', { email: req.body.email });
        const { email, password } = req.body;
        
        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password are required' });
        }

        const result = await loginUser(email, password);
        console.log('Login successful for:', email);
        res.json(result);
    } catch (error) {
        console.error('Login error:', error);
        if (error.message === 'User not found' || error.message === 'Invalid password') {
            return res.status(401).json({ error: error.message });
        }
        res.status(500).json({ error: 'Error during login' });
    }
});

// Protected route example
app.get('/api/profile', authenticateToken, (req, res) => {
    res.json({ user: req.user });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Server error:', err);
    res.status(500).json({ error: 'Internal server error' });
});

app.use(router);

env(io);

// Start server
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
