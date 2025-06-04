// env.js

module.exports = (io) => {
    io.on('connection', (socket) => {
        console.log('A user connected');

        socket.on('disconnect', () => {
            console.log('User disconnected');
        });

        setInterval(() => {
            const randomNumber = parseInt(Math.random() * 10);
            socket.emit('number', randomNumber);
            console.log('Sent number:', randomNumber); // Test: Log the sent number
        }, 5000);
    });

    // Test: Emit a message to all clients every 5 seconds
//     setInterval(() => {
//         io.emit('message', 'This is a test message');
//         console.log('Sent test message to all clients');
//     }, 5000);
};
