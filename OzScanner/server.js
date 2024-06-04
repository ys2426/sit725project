const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const crypto = require('crypto');
const path = require('path');
const dotenv = require('dotenv');
const http = require('http');
const env = require('./env');
const router = require('./router/router');

dotenv.config();

const app = express();
const PORT = 3030;

const server = http.createServer(app);
const io = require('socket.io')(server);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(
    session({
        secret: crypto.randomBytes(16).toString('hex'),
        resave: false,
        saveUninitialized: true,
    })
);

app.use(router);

env(io);
    
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
