# Sky Wizard - Flight Booking Platform

Sky Wizard is a modern web platform that allows users to search, book, and manage flight reservations. With a beautiful user interface and secure authentication system, users can easily browse flights, create accounts, and manage their travel plans.

## Features

### User Authentication
- Secure signup and login system
- JWT-based authentication
- Password encryption
- Protected routes for authenticated users

### Flight Booking
- Search flights by destination
- View detailed flight information
- Browse popular destinations
- Interactive booking interface

### Real-time Updates
- Socket.io integration for live flight updates
- Instant booking confirmations
- Real-time price updates

## Technology Stack

- **Frontend:**
  - HTML5, CSS3, JavaScript
  - Bootstrap 5
  - Socket.io Client
  - Modern responsive design
  - Mobile-first approach

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB
  - JWT Authentication
  - Socket.io

## Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
cd SIT725-project-
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the Skywizard directory with the following variables:
```env
PORT=3030
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

4. Start the application:
```bash
npm start
```

The application will run at `http://localhost:3030`

## Development

To run the application in development mode with auto-reload:
```bash
npm run dev
```

## Project Structure

```
SIT725-project-/
├── Skywizard/
│   ├── public/          # Static files
│   ├── model/           # Database models
│   ├── router/          # Route handlers
│   └── server.js        # Main server file
├── Documentation/       # Project documentation
└── package.json        # Project dependencies
```

## Security Features

- Password hashing with bcrypt
- JWT token authentication
- MongoDB connection pooling
- CORS protection
- Input validation
- Error handling middleware

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Acknowledgments

- Bootstrap for the responsive design framework
- MongoDB Atlas for database hosting
- Socket.io for real-time functionality

