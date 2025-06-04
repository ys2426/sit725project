const { MongoClient } = require('mongodb');
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// MongoDB connection configuration
const uri = process.env.MONGODB_URI || 'mongodb+srv://s224066334:Yash%40123@cluster0.fujnuac.mongodb.net/?retryWrites=true&w=majority';
const options = { 
    serverApi: {
        version: '1',
        strict: true,
        deprecationErrors: true,
    }
};

let client = null;
let dbConnection = null;

async function connectToDatabase() {
    if (!client) {
        try {
            client = new MongoClient(uri, options);
            await client.connect();
            console.log('Connected to MongoDB');
            dbConnection = client.db('cluster0');
            
            // Create indexes for the users collection
            const users = dbConnection.collection('users');
            await users.createIndex({ email: 1 }, { unique: true });
            
            return dbConnection;
        } catch (error) {
            console.error('Error connecting to MongoDB:', error);
            // Retry connection after 5 seconds
            console.log('Retrying connection in 5 seconds...');
            await new Promise(resolve => setTimeout(resolve, 5000));
            return connectToDatabase();
        }
    }
    return dbConnection;
}

async function getFlights() {
    try {
        const data = fs.readFileSync(path.join(__dirname, '..', 'flights.json'), 'utf8');
        const flights = JSON.parse(data);
        return flights;
    } catch (error) {
        console.error('Error reading flights.json:', error);
        throw error;
    }
}

async function createUser(userData) {
    try {
        const db = await connectToDatabase();
        const users = db.collection('users');

        // Check if user already exists
        const existingUser = await users.findOne({ email: userData.email });
        if (existingUser) {
            throw new Error('User already exists');
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(userData.password, salt);

        // Create new user
        const newUser = {
            email: userData.email,
            password: hashedPassword,
            name: userData.name,
            createdAt: new Date()
        };

        const result = await users.insertOne(newUser);
        console.log('User created:', result.insertedId);
        return { email: newUser.email, name: newUser.name };
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
}

async function loginUser(email, password) {
    try {
        const db = await connectToDatabase();
        const users = db.collection('users');

        // Find user by email
        const user = await users.findOne({ email });
        if (!user) {
            throw new Error('User not found');
        }

        // Verify password
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            throw new Error('Invalid password');
        }

        // Generate JWT token
        const token = jwt.sign(
            { userId: user._id, email: user.email },
            process.env.JWT_SECRET || 'your-secret-key',
            { expiresIn: '24h' }
        );

        console.log('User logged in:', user.email);
        return {
            token,
            user: {
                email: user.email,
                name: user.name
            }
        };
    } catch (error) {
        console.error('Error during login:', error);
        throw error;
    }
}

async function verifyToken(token) {
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
        return decoded;
    } catch (error) {
        console.error('Error verifying token:', error);
        throw new Error('Invalid token');
    }
}

// Cleanup function
async function cleanup() {
    if (client) {
        try {
            await client.close();
            console.log('MongoDB connection closed');
        } catch (error) {
            console.error('Error closing MongoDB connection:', error);
        }
    }
}

// Handle process termination
process.on('SIGINT', async () => {
    await cleanup();
    process.exit(0);
});

process.on('SIGTERM', async () => {
    await cleanup();
    process.exit(0);
});

module.exports = {
    connectToDatabase,
    getFlights,
    createUser,
    loginUser,
    verifyToken
};
