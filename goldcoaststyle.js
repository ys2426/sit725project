document.addEventListener("DOMContentLoaded", function () {
    // Array of activities
    const activities = [
        {
            title: "Surfers Paradise Beach",
            link: "https://en.wikipedia.org/wiki/Surfers_Paradise,_Queensland#Beaches",
            image: "surfers_paradise_beach.jpg",
            description: "Relax on the golden sands of Surfers Paradise Beach, one of the most iconic beaches on the Gold Coast. Swim, surf, or simply soak up the sun while admiring the picturesque skyline."
        },
        {
            title: "Theme Parks",
            link: "https://en.wikipedia.org/wiki/Theme_park#Australia",
            image: "theme_parks.jpg",
            description: "Experience the thrill of world-class theme parks, including Warner Bros. Movie World, Dreamworld, Sea World, and Wet'n'Wild. Enjoy a wide range of rides, attractions, and live shows suitable for visitors of all ages."
        },
        {
            title: "Currumbin Wildlife Sanctuary",
            link: "https://en.wikipedia.org/wiki/Currumbin_Wildlife_Sanctuary",
            image: "currumbin_wildlife_sanctuary.jpg",
            description: "Encounter native Australian wildlife at Currumbin Wildlife Sanctuary, where you can hand-feed kangaroos, cuddle koalas, and watch exciting wildlife shows. Explore lush rainforest habitats and learn about conservation efforts."
        },
        {
            title: "SkyPoint Observation Deck",
            link: "https://en.wikipedia.org/wiki/SkyPoint_Observation_Deck",
            image: "skypoint.jpg",
            description: "Take in breathtaking views of the Gold Coast from the SkyPoint Observation Deck, located atop the Q1 building in Surfers Paradise. Enjoy panoramic vistas of the coastline, hinterland, and city skyline."
        },
        {
            title: "Burleigh Heads National Park",
            link: "https://en.wikipedia.org/wiki/Burleigh_Heads_National_Park",
            image: "burleigh_heads_national_park.jpg",
            description: "Discover the natural beauty of Burleigh Heads National Park, where lush rainforest meets golden beaches. Take a leisurely walk along coastal trails, swim in sheltered coves, and spot native wildlife like dolphins and sea eagles."
        },
        {
            title: "Gold Coast Hinterland",
            link: "https://en.wikipedia.org/wiki/Gold_Coast_Hinterland",
            image: "gold_coast_hinterland.jpg",
            description: "Explore the picturesque Gold Coast Hinterland, home to ancient rainforests, cascading waterfalls, and stunning mountain vistas. Visit Lamington National Park, Springbrook National Park, and Tamborine Mountain for bushwalking, birdwatching, and scenic drives."
        },
        {
            title: "Broadbeach",
            link: "https://en.wikipedia.org/wiki/Broadbeach",
            image: "broadbeach.jpg",
            description: "Enjoy dining, shopping, and entertainment in Broadbeach, a vibrant precinct located just south of Surfers Paradise. Explore Pacific Fair Shopping Centre, dine at award-winning restaurants, and catch live music and events at The Star Gold Coast."
        },
        {
            title: "Gold Coast Canals and Waterways",
            link: "https://en.wikipedia.org/wiki/Gold_Coast_Waterway",
            image: "gold_coast_canals.jpg",
            description: "Discover the Gold Coast's network of canals and waterways by taking a scenic cruise or renting a boat. Explore the tranquil waterways, admire waterfront mansions, and watch the sunset over the Broadwater."
        },
        {
            title: "Currumbin Beach",
            link: "https://en.wikipedia.org/wiki/Currumbin_Beach",
            image: "currumbin_beach.jpg",
            description: "Relax on the pristine shores of Currumbin Beach, known for its clear waters and gentle waves. Swim, surf, or paddleboard, and explore nearby attractions like Currumbin Alley and Elephant Rock."
        },
        {
            title: "Tamborine Rainforest Skywalk",
            link: "https://en.wikipedia.org/wiki/Tamborine_Rainforest_Skywalk",
            image: "tamborine_rainforest_skywalk.jpg",
            description: "Experience the beauty of the rainforest from above with a walk through the Tamborine Rainforest Skywalk. Wander along elevated walkways through lush canopy, cross suspension bridges, and enjoy panoramic views of the surrounding landscape."
        }
    ];

    // Function to create activity elements
    function createActivityElement(activity) {
        const activityDiv = document.createElement("div");
        activityDiv.classList.add("activity");

        const titleElement = document.createElement("h2");
        const titleLink = document.createElement("a");
        titleLink.textContent = activity.title;
        titleLink.href = activity.link;
        titleLink.target = "_blank"; // Open link in a new tab
        titleElement.appendChild(titleLink);

        const imageElement = document.createElement("img");
        imageElement.src = activity.image;
        imageElement.alt = activity.title;

        const descriptionElement = document.createElement("p");
        descriptionElement.textContent = activity.description;

        activityDiv.appendChild(titleElement);
        activityDiv.appendChild(imageElement);
        activityDiv.appendChild(descriptionElement);

        return activityDiv;
    }

    // Function to add activities to the page
    function renderActivities() {
        const activityList = document.getElementById("activityList");
        activities.forEach(activity => {
            const activityElement = createActivityElement(activity);
            activityList.appendChild(activityElement);
        });
    }

    // Call the function to render activities when the page loads
    renderActivities();
});
