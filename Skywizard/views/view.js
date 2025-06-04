const path = require('path');

function getHomepage(req, res) {
    res.sendFile(path.join(__dirname, '..', 'public', 'Homepage.html'));
}

function getFlightDetailsPage(req, res) {
    res.sendFile(path.join(__dirname, '..', 'public', 'flight-details.html'));
}

module.exports = {
    getHomepage,
    getFlightDetailsPage
};