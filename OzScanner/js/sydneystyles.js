document.addEventListener("DOMContentLoaded", function () {
    // Array of activities
    const activities = [
        {
            title: "Sydney Opera House and Sydney Harbour Bridge",
            link: "https://en.wikipedia.org/wiki/Sydney_Opera_House",
            description: "Visit these iconic landmarks in Sydney for breathtaking views of the cityscape and harbor. You can take a guided tour or even climb the Sydney Harbour Bridge for a unique perspective."
        },
        {
            title: "Blue Mountains National Park",
            link: "https://en.wikipedia.org/wiki/Blue_Mountains_National_Park",
            description: "Explore the stunning Blue Mountains, a UNESCO World Heritage site, known for its dramatic landscapes, lush forests, and cascading waterfalls. Enjoy bushwalking, scenic drives, and adventure activities like rock climbing and abseiling."
        },
        {
            title: "Bondi Beach",
            link: "https://en.wikipedia.org/wiki/Bondi_Beach",
            description: "Relax on the golden sands of Bondi Beach, one of Australia's most famous beaches. You can swim, surf, or simply soak up the sun. Don't forget to explore the vibrant beachside cafes, restaurants, and shops."
        },
        {
            title: "Hunter Valley Wine Region",
            link: "https://en.wikipedia.org/wiki/Hunter_Valley",
            description: "Indulge in a wine-tasting tour in the Hunter Valley, NSW's premier wine region. Sample a variety of award-winning wines, visit cellar doors, and dine at gourmet restaurants surrounded by picturesque vineyards."
        },
        {
            title: "Sydney Harbour Cruises",
            link: "https://en.wikipedia.org/wiki/Sydney_Harbour",
            description: "Take a leisurely cruise on Sydney Harbour to admire the city's landmarks from the water. Choose from lunch, dinner, or sunset cruises, and enjoy spectacular views of the Sydney Opera House, Harbour Bridge, and waterfront skyline."
        },
        {
            title: "Royal National Park",
            link: "https://en.wikipedia.org/wiki/Royal_National_Park",
            description: "Discover the natural beauty of Royal National Park, Australia's oldest national park, located just south of Sydney. Explore coastal cliffs, secluded beaches, and scenic walking trails, or enjoy picnicking, swimming, and birdwatching."
        },
        {
            title: "Taronga Zoo",
            link: "https://en.wikipedia.org/wiki/Taronga_Zoo",
            description: "Visit Taronga Zoo in Sydney to encounter native Australian wildlife and exotic animals from around the world. Enjoy animal encounters, guided tours, and wildlife shows while taking in panoramic views of Sydney Harbour."
        },
        {
            title: "Port Stephens",
            link: "https://en.wikipedia.org/wiki/Port_Stephens",
            description: "Embark on a dolphin-watching cruise in Port Stephens, known as the 'Dolphin Capital of Australia.' You can also enjoy sandboarding on the towering dunes of Stockton Beach or go whale watching during the annual migration season."
        },
        {
            title: "Lord Howe Island",
            link: "https://en.wikipedia.org/wiki/Lord_Howe_Island",
            description: "Escape to Lord Howe Island, a UNESCO World Heritage-listed paradise located off the coast of NSW. Explore pristine beaches, hike through lush rainforests, and snorkel or dive in crystal-clear waters teeming with marine life."
        },
        {
            title: "Jenolan Caves",
            link: "https://en.wikipedia.org/wiki/Jenolan_Caves",
            description: "Explore the spectacular limestone caves of Jenolan Caves, located in the Blue Mountains region. Take a guided tour to marvel at awe-inspiring stalactites, stalagmites, and underground formations in this ancient natural wonder."
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
        // imageElement.src = activity.image;
        // imageElement.alt = activity.title;

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
