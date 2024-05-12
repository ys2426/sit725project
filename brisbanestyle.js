document.addEventListener("DOMContentLoaded", function () {
    // Array of activities
    const activities = [
        {
            title: "South Bank Parklands",
            link: "https://en.wikipedia.org/wiki/South_Bank_Parklands",
            image: "south_bank_parklands.jpg",
            description: "Explore South Bank Parklands, a vibrant riverside precinct featuring lush gardens, walking paths, and recreational areas. Visit Streets Beach, Australia's only inner-city man-made beach, or take a stroll along the Brisbane River promenade."
        },
        {
            title: "Lone Pine Koala Sanctuary",
            link: "https://en.wikipedia.org/wiki/Lone_Pine_Koala_Sanctuary",
            image: "lone_pine_koala_sanctuary.jpg",
            description: "Meet iconic Australian wildlife at Lone Pine Koala Sanctuary, the world's first and largest koala sanctuary. Get up close and personal with koalas, kangaroos, wombats, and other native animals, and learn about conservation efforts."
        },
        {
            title: "Mount Coot-tha",
            link: "https://en.wikipedia.org/wiki/Mount_Coot-tha,_Queensland",
            image: "mount_coot_tha.jpg",
            description: "Enjoy panoramic views of Brisbane city and its surrounds from the summit of Mount Coot-tha. Visit the Mount Coot-tha Botanic Gardens, go bushwalking or mountain biking along scenic trails, and dine at the Summit Restaurant or Kuta Café."
        },
        {
            title: "Queensland Cultural Centre",
            link: "https://en.wikipedia.org/wiki/Queensland_Cultural_Centre",
            image: "queensland_cultural_centre.jpg",
            description: "Immerse yourself in art, culture, and history at the Queensland Cultural Centre in South Bank. Explore the Queensland Art Gallery, Gallery of Modern Art (GOMA), Queensland Museum, and State Library of Queensland."
        },
        {
            title: "River Cruises",
            link: "https://en.wikipedia.org/wiki/Brisbane_River",
            image: "river_cruises.jpg",
            description: "Discover Brisbane from the water with a leisurely river cruise along the Brisbane River. Choose from sightseeing cruises, lunch or dinner cruises, or even kayak and paddleboard tours for a unique perspective of the city skyline."
        },
        {
            title: "Moreton Island",
            link: "https://en.wikipedia.org/wiki/Moreton_Island",
            image: "moreton_island.jpg",
            description: "Escape to Moreton Island, a pristine island paradise just a short ferry ride from Brisbane. Explore sandy beaches, crystal-clear waters, and natural attractions like the Tangalooma Wrecks, Champagne Pools, and Blue Lagoon."
        },
        {
            title: "XXXX Brewery Tour",
            link: "https://en.wikipedia.org/wiki/XXXX_Brewery",
            image: "xxxx_brewery.jpg",
            description: "Experience a taste of Queensland's brewing heritage with a guided tour of the XXXX Brewery in Milton. Learn about the brewing process, sample fresh XXXX beers, and enjoy a behind-the-scenes look at this iconic brewery."
        },
        {
            title: "Brisbane Botanic Gardens Mt Coot-tha",
            link: "https://en.wikipedia.org/wiki/Brisbane_Botanic_Gardens",
            image: "brisbane_botanic_gardens.jpg",
            description: "Wander through the picturesque Brisbane Botanic Gardens at Mt Coot-tha, featuring themed gardens, tranquil ponds, and walking tracks. Discover tropical plants, native flora, and exotic species from around the world."
        },
        {
            title: "City Botanic Gardens",
            link: "https://en.wikipedia.org/wiki/City_Botanic_Gardens",
            image: "city_botanic_gardens.jpg",
            description: "Take a leisurely stroll or picnic in the City Botanic Gardens, Brisbane's oldest parkland located along the Brisbane River. Admire heritage-listed trees, colorful flower beds, and historic landmarks like the Bamboo Grove and ornamental ponds."
        },
        {
            title: "Cultural Precinct",
            link: "https://en.wikipedia.org/wiki/South_Bank,_Queensland#Cultural_precinct",
            image: "cultural_precinct.jpg",
            description: "Explore Brisbane's cultural precinct in South Bank, home to world-class museums, theaters, and performance venues. Catch a show at the Queensland Performing Arts Centre (QPAC), attend an exhibition at GOMA, or enjoy live music and events at the Brisbane Powerhouse."
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
