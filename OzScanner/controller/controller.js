const bcrypt = require('bcrypt');
const { connectToDatabase, getFlights } = require('../model/model');

async function searchFlights(req, res) {
    const { destination, date } = req.body;

    try {
        const flights = await getFlights();

        if (!Array.isArray(flights)) {
            throw new TypeError('flights.json does not contain an array');
        }

        const filteredFlights = flights.filter(
            flight => flight.destination === destination && flight.departureDate === date
        );

        let cheapestFlight = null;
        let minPrice = Infinity;
        filteredFlights.forEach(flight => {
            const price = parseFloat(flight.price.total);
            if (price < minPrice) {
                minPrice = price;
                cheapestFlight = flight;
            }
        });

        if (cheapestFlight) {
            req.session.flightDetails = cheapestFlight;
            res.json({ redirect: '/flight-details' });
        } else {
            res.status(404).json({ error: 'No flights found with the provided destination and departure date' });
        }
    } catch (error) {
        console.error('Error processing flight search:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

function getFlightDetails(req, res) {
    if (req.session.flightDetails) {
        res.json(req.session.flightDetails);
    } else {
        res.status(404).json({ error: 'Flight details not found in session' });
    }
}

async function login(req, res) {
    const { email, password } = req.body;

    try {
        const db = await connectToDatabase();
        const user = await db.collection('cluster-oz').findOne({ email });

        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

async function signup(req, res) {
    const { name, email, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
        return res.status(400).json({ message: 'Passwords do not match' });
    }

    try {
        const db = await connectToDatabase();
        const userExists = await db.collection('cluster-oz').findOne({ email });

        if (userExists) {
            return res.status(400).json({ message: 'Email already in use' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await db.collection('oz-user').insertOne({
            name,
            email,
            password: hashedPassword
        });

        res.status(201).json({ message: 'Signup successful' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = {
    searchFlights,
    getFlightDetails,
    login,
    signup
};
