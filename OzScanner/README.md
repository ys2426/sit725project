# SIT725-project-OZScanner

OZScanner - Flight Search and Travel Itinerary App (Enhanced)

For international students visiting Australia for the first time, OZScanner is a web application that makes trip planning easier. Users are able to plan a flawless trip experience, look for cheap flights, and examine pre-made itineraries for well-liked spots.

**Features**

**1. Flight Search**
**Flexibility in Origin and Destination:** Look for one-way or round-trip flights that arrive at any Australian city or depart from any Australian city.
**Date Selection:** For round-trip reservations, indicate the day you would like to depart and, if you'd like, include a return date.
**Price Filter:** To locate flights that are within your budget, set a maximum amount.
**Aggregation and Comparison:** Using a single, user-friendly interface, OZScanner gathers flight possibilities from several airlines.
**Price Highlighting:** The application makes it simple to find the best price by displaying the least expensive flight choice clearly.

**2. Travel Itineraries**
**Curated City Guides:** Pre-built itineraries are available from OZScanner for seven popular Australian destinations:
1.Sydney
2. Melbourne
3. Brisbane
4. Adelaide
5. Perth
6. Canberra
7. Gold Coast

**Suggested Activities:** Based on the distinctive features of each location, each itinerary suggests a schedule of events and attractions.
**Flexibility and Customization:** Although itineraries offer a place to start, users are free to modify them in accordance with their own interests and schedules.

**Functionality Breakdown**
**Frontend:** OZScanner is accessed by users using a web browser. Most likely, HTML, CSS, and JavaScript were used in the creation of the user interface (UI), which may have made use of a framework like Bootstrap to ensure cross-platform responsiveness.

**Backend:** User queries are handled by a Node.js server that runs on the backend. Here is the workflow:
1. User inputs search parameters for flights (origin, destination, date, and price filter).
2. To obtain flight possibilities that satisfy the given parameters, the server communicates with an API (Application Programming Interface) of a flight aggregator service (e.g., Kayak, Skyscanner).
3. After receiving and analysing the flight aggregator's answer, the server extracts the pertinent flight information (airline, price, length, etc.).
4. Based on the user's price filter, the server determines which flight choice is the least expensive.
5. The flight details and itinerary data are ready for front-end display by the server.
6. The search results are rendered by the frontend, which also shows the pertinent itinerary for the selected destination city and highlights the lowest airfare.

**Data Sources**
1. To obtain real-time flight data, OZScanner probably uses external APIs from flight aggregator providers.
2. The pre-planned travel schedules may make use of information that is readily available to the public or they may be combined with a travel data provider to offer a greater selection of sights and activities.

**Future Enhancements**
**1. User Accounts:** Setting up an account system for users may let them watch flight prices, record their favourite itineraries, and get alerts when prices are about to go down.
**2. Search for Accommodations:** By integrating with a hotel booking platform, consumers would be able to easily locate and reserve lodging in addition to their flights.
**3. Activity Booking:** By adding this feature, a one-stop shop for organising a whole Australian trip would be established.
**4. Multilingual Support:** Providing the application in different languages would improve accessibility and cater to a wider audience of international students.

For overseas students travelling to Australia, OZScanner provides an invaluable service. It makes travel planning easier by fusing reasonably priced flying alternatives with well chosen itineraries, opening the door to an exhilarating and stress-free journey.

**Project Structure**
The project uses a common directory structure for web applications:

OZScanner/
├── public/
│   ├── Homepage.html (Main landing page)
│   ├── login.html
│   ├── signup.html (User account functionalities)
│   ├── flight-details.html (Displays details of the cheapest flight)
│   ├── Sydney.html, Melb.html, ... (Itinerary pages for each city)
│   ├── images/ (Application images)
│   ├── scripts/ (JavaScript code)
│   ├── styles/ (CSS stylesheets)
│   ├── server.js (Backend server code)
│   └── ... (other static assets)
├── model/
│   └── model.js (Data model)
├── controller/
│   └── controller.js (Handles user interactions and data flow)
├── router/
│   └── router.js (Routes incoming requests to appropriate handlers)
├── view/
│   └── view.js (Renders UI components based on data)
├── package.json (Project dependencies)
├── Dockerfile (Configuration for building Docker image)
├── .env (Environment variables)
├── env.js (Loads environment variables)
├── .dockerignore (Files to exclude from Docker image)
└── README.md (This file)

**Technologies Used**
**Frontend:** HTML, CSS, JavaScript (Bootstrap framework)
**Backend:** Node.js on Express Framework

**Running the Application**
1. Install dependencies: npm install
2. Start the development server: npm start
3. Access the application in your web browser: http://localhost:3000/ (default port)

**Contributing**
Currently, there are no instructions for contributing to the project as it likely isn't set up for a collaborative development environment.

**License**
This project is licensed under the MIT License.  See the LICENSE file for details.

I hope this README file provides a comprehensive overview of the OZScanner project.
