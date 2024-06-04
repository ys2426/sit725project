const { MongoClient } = require('mongodb');
const fs = require('fs');
const path = require('path');

const uri = 'mongodb+srv://OZScanner:ozscannercluster@cluster-oz.qqv4y57.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-OZ';
const options = { useNewUrlParser: true, useUnifiedTopology: true };
const client = new MongoClient(uri, options);

async function connectToDatabase() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
        return client.db('cluster-oz');
    } catch (error) {
        console.error('Error connecting to MongoDB', error);
        throw error;
    }
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

module.exports = {
    connectToDatabase,
    getFlights
};
