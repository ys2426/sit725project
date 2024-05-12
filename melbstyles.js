
document.addEventListener("DOMContentLoaded", function () {
    // Array of activities
    const activities = [
        {
            title: "Federation Square",
            link: "https://en.wikipedia.org/wiki/Federation_Square",
            image: "fedsquare.png",
            description: "Federation Square is a cultural precinct in the heart of Melbourne. It hosts a range of events, exhibitions, and restaurants."
        },
        {
            title: "Queen Victoria Market",
            link: "https://en.wikipedia.org/wiki/Queen_Victoria_Market",
            image: "queen_victoria_market.jpg",
            description: "Explore one of the largest open-air markets in the Southern Hemisphere. Queen Victoria Market offers a variety of fresh produce, clothing, souvenirs, and more."
        },
        {
            title: "Royal Botanic Gardens",
            link: "https://en.wikipedia.org/wiki/Royal_Botanic_Gardens,_Melbourne",
            image: "royal_botanic_gardens.jpg",
            description: "Take a stroll through the beautiful Royal Botanic Gardens, featuring stunning landscapes, walking paths, and a wide array of plant species."
        },
        {
            title: "National Gallery of Victoria",
            link: "https://en.wikipedia.org/wiki/National_Gallery_of_Victoria",
            image: "national_gallery_of_victoria.jpg",
            description: "Visit the National Gallery of Victoria, Australia's oldest and most visited art museum, showcasing a diverse collection of art from around the world."
        },
        {
            title: "State Library Victoria",
            link: "https://en.wikipedia.org/wiki/State_Library_Victoria",
            image: "state_library_victoria.jpg",
            description: "Explore the State Library Victoria, one of the oldest and most important libraries in Australia, with a vast collection of books, manuscripts, and historical artifacts."
        },
        {
            title: "Melbourne Zoo",
            link: "https://en.wikipedia.org/wiki/Melbourne_Zoo",
            image: "melbourne_zoo.jpg",
            description: "Enjoy a day at the Melbourne Zoo, home to a wide variety of animals from around the world, including lions, elephants, and koalas."
        },
        {
            title: "Werribee Zoo",
            link: "https://en.wikipedia.org/wiki/Werribee_Zoo",
            image: "werribee_zoo.jpg",
            description: "Enjoy a day at the Werribee Zoo, home to a wide variety of animals from around the world, including lions, elephants, and koalas."
        },
        {
            title: "Eureka Skydeck",
            link: "https://en.wikipedia.org/wiki/Eureka_Tower#Skydeck",
            image: "eureka_skydeck.jpg",
            description: "Experience stunning views of Melbourne from the Southern Hemisphere's highest viewing platform."
        },
        {
            title: "Melbourne Museum",
            link: "https://en.wikipedia.org/wiki/Melbourne_Museum",
            image: "melbourne_museum.jpg",
            description: "Discover fascinating exhibitions on natural history, culture, and science."
        },
        {
            title: "Yarra River Cruise",
            link: "https://en.wikipedia.org/wiki/Yarra_River#Tourism_and_leisure",
            image: "yarra_river_cruise.jpg",
            description: "Relax and enjoy scenic views of Melbourne's skyline from the water."
        },
        {
            title: "Luna Park",
            link: "https://en.wikipedia.org/wiki/Luna_Park,_Melbourne",
            image: "luna_park.jpg",
            description: "Have fun at this historic amusement park with rides and attractions for all ages."
        },
        {
            title: "Great Ocean Road",
            link: "https://en.wikipedia.org/wiki/Great_Ocean_Road",
            image: "great_ocean_road.jpg",
            description: "Take a day trip to explore one of the world's most scenic coastal drives."
        },
        {
            title: "Phillip Island",
            link: "https://en.wikipedia.org/wiki/Phillip_Island",
            image: "phillip_island.jpg",
            description: "Witness the famous Penguin Parade and enjoy wildlife encounters."
        },
        {
            title: "Mornington Peninsula",
            link: "https://en.wikipedia.org/wiki/Mornington_Peninsula",
            image: "mornington_peninsula.jpg",
            description: "Relax in hot springs, explore wineries, and enjoy coastal scenery."
        },
        {
            title: "Dandenong Ranges",
            link: "https://en.wikipedia.org/wiki/Dandenong_Ranges",
            image: "dandenong_ranges.jpg",
            description: "Enjoy nature walks, visit gardens, and ride Puffing Billy steam train."
        },
        {
            title: "Healesville Sanctuary",
            link: "https://en.wikipedia.org/wiki/Healesville_Sanctuary",
            image: "healesville_sanctuary.jpg",
            description: "Encounter native Australian wildlife and learn about conservation efforts."
        }
        
    ];

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