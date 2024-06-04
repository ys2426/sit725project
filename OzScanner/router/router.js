const express = require('express');
const { getHomepage, getFlightDetailsPage } = require('../views/view');
const {
    searchFlights,
    getFlightDetails,
    login,
    signup
} = require('../controller/controller');

const router = express.Router();

router.get('/', getHomepage);
router.post('/search-flights', searchFlights);
router.get('/flight-details', getFlightDetailsPage);
router.get('/get-flight-details', getFlightDetails);
router.post('/login', login);
router.post('/signup', signup);

module.exports = router;
