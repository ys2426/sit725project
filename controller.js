// // controller.js

// const model = require('../model/model');

// function getAllFlights(req, res) {
//     const flights = model.getAllFlights();
//     res.json(flights);
// }

// function getFlightById(req, res) {
//     const id = parseInt(req.params.id);
//     const flight = model.getFlightById(id);
//     if (flight) {
//         res.json(flight);
//     } else {
//         res.status(404).json({ message: 'Flight not found' });
//     }
// }

// function createFlight(req, res) {
//     const { destination, price } = req.body;
//     const newFlight = model.createFlight(destination, price);
//     res.status(201).json(newFlight);
// }

// function deleteFlight(req, res) {
//     const id = parseInt(req.params.id);
//     const flight = model.getFlightById(id);
//     if (flight) {
//         model.deleteFlight(id);
//         res.status(204).send();
//     } else {
//         res.status(404).json({ message: 'Flight not found' });
//     }
// }

// function createUser(req, res) {
//     const { name, email, password } = req.body;
//     const existingUser = model.getUserByEmail(email);
//     if (existingUser) {
//         res.status(400).json({ message: 'User already exists with this email' });
//     } else {
//         const newUser = model.createUser(name, email, password);
//         res.status(201).json(newUser);
//     }
// }

// module.exports = {
//     getAllFlights,
//     getFlightById,
//     createFlight,
//     deleteFlight,
//     createUser
// };
