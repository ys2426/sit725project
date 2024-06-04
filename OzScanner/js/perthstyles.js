document.addEventListener("DOMContentLoaded", function () {
    // Array of activities
    const activities = [
        {
            title: "Kings Park and Botanic Garden",
            link: "https://en.wikipedia.org/wiki/Kings_Park,_Western_Australia",
            image: "kings_park.jpg",
            description: "Explore the expansive Kings Park, one of the largest inner-city parks in the world, offering stunning views of the city skyline and Swan River. Wander through native bushland, admire the diverse flora in the botanic garden, and enjoy picnics, walks, and outdoor concerts."
        },
        {
            title: "Swan Valley",
            link: "https://en.wikipedia.org/wiki/Swan_Valley_(Western_Australia)",
            image: "swan_valley.jpg",
            description: "Discover the picturesque Swan Valley, Western Australia's oldest wine region, located just a short drive from Perth. Embark on a wine-tasting tour to sample premium wines from award-winning wineries, indulge in gourmet food experiences, and visit artisanal producers like breweries, distilleries, and chocolate factories."
        },
        {
            title: "Fremantle",
            link: "https://en.wikipedia.org/wiki/Fremantle",
            image: "fremantle.jpg",
            description: "Immerse yourself in the historic port city of Fremantle, known for its well-preserved heritage buildings, bustling markets, and vibrant arts scene. Explore Fremantle Prison, Fremantle Markets, and the Fremantle Fishing Boat Harbour, or simply stroll through the charming streets lined with cafes, boutiques, and galleries."
        },
        {
            title: "Cottesloe Beach",
            link: "https://en.wikipedia.org/wiki/Cottesloe_Beach",
            image: "cottesloe_beach.jpg",
            description: "Relax on the golden sands of Cottesloe Beach, one of Perth's most iconic beaches, renowned for its crystal-clear waters and vibrant sunsets. Swim, surf, or enjoy beachside dining at cafes and restaurants overlooking the Indian Ocean."
        },
        {
            title: "Rottnest Island",
            link: "https://en.wikipedia.org/wiki/Rottnest_Island",
            image: "rottnest_island.jpg",
            description: "Escape to Rottnest Island, a picturesque island paradise located offshore from Perth. Explore pristine beaches, snorkel in crystal-clear waters teeming with marine life, and encounter adorable quokkas, the island's native marsupials. Enjoy cycling, hiking, and guided tours to discover the island's natural beauty and cultural heritage."
        },
        {
            title: "Perth Zoo",
            link: "https://en.wikipedia.org/wiki/Perth_Zoo",
            image: "perth_zoo.jpg",
            description: "Encounter wildlife from around the world at Perth Zoo, located in South Perth. Explore themed exhibits, including African Savannah, Asian Rainforest, and Australian Bushwalk, and learn about conservation efforts to protect endangered species."
        },
        {
            title: "Perth Cultural Centre",
            link: "https://en.wikipedia.org/wiki/Perth_Cultural_Centre",
            image: "perth_cultural_centre.jpg",
            description: "Immerse yourself in art, culture, and history at the Perth Cultural Centre in Northbridge. Visit the Art Gallery of Western Australia, Western Australian Museum, and State Library of Western Australia, or catch a performance at the Perth Institute of Contemporary Arts (PICA)."
        },
        {
            title: "Perth Beaches",
            link: "https://en.wikipedia.org/wiki/Beaches_of_Perth",
            image: "perth_beaches.jpg",
            description: "Discover a variety of beautiful beaches along Perth's coastline, including Scarborough Beach, City Beach, and Trigg Beach. Enjoy swimming, sunbathing, and water sports like surfing, kiteboarding, and stand-up paddleboarding."
        },
        {
            title: "Perth Hills",
            link: "https://en.wikipedia.org/wiki/Perth_Hills",
            image: "perth_hills.jpg",
            description: "Escape to the scenic Perth Hills, where rolling hills, lush forests, and quaint towns await. Explore national parks like John Forrest National Park and Lesmurdie Falls National Park, go bushwalking or mountain biking along scenic trails, and enjoy panoramic views of the city and surrounding countryside."
        },
        {
            title: "Perth CBD",
            link: "https://en.wikipedia.org/wiki/Perth_central_business_district",
            image: "perth_cbd.jpg",
            description: "Explore Perth's vibrant central business district, home to shopping precincts like Hay Street Mall and Murray Street Mall, cultural landmarks like the Bell Tower and Perth Mint, and dining precincts offering a diverse range of cuisines from around the world."
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
        //imageElement.src = activity.image;
        //imageElement.alt = activity.title;

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
