// // model.js

// // Flight Model
// let flights = [
//     { id: 1, destination: 'Sydney', price: 300 },
//     { id: 2, destination: 'Melbourne', price: 250 },
//     { id: 3, destination: 'Brisbane', price: 270 },
//     { id: 4, destination: 'Canberra', price: 320 },
//     { id: 5, destination: 'Perth', price: 350 },
//     { id: 6, destination: 'Gold Coast', price: 280 },
//     { id: 7, destination: 'Adelaide', price: 290 }
// ];

// function getAllFlights() {
//     return flights;
// }

// function getFlightById(id) {
//     return flights.find(flight => flight.id === id);
// }

// function createFlight(destination, price) {
//     const id = flights.length + 1;
//     const newFlight = { id, destination, price };
//     flights.push(newFlight);
//     return newFlight;
// }

// function deleteFlight(id) {
//     flights = flights.filter(flight => flight.id !== id);
// }

// // User Model
// let users = [];

// function createUser(name, email, password) {
//     const id = users.length + 1;
//     const newUser = { id, name, email, password };
//     users.push(newUser);
//     return newUser;
// }

// function getUserByEmail(email) {
//     return users.find(user => user.email === email);
// }

// module.exports = {
//     getAllFlights,
//     getFlightById,
//     createFlight,
//     deleteFlight,
//     createUser,
//     getUserByEmail
// };
