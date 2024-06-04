document.addEventListener("DOMContentLoaded", function () {
    // Array of activities
    const activities = [
        {
            title: "Adelaide Botanic Garden",
            link: "https://en.wikipedia.org/wiki/Adelaide_Botanic_Garden",
            image: "adelaide_botanic_garden.jpg",
            description: "Explore the serene Adelaide Botanic Garden, home to diverse plant collections, including Australian native species, exotic plants, and a beautiful rose garden. Join a guided tour or simply wander through the tranquil landscapes."
        },
        {
            title: "Adelaide Central Market",
            link: "https://en.wikipedia.org/wiki/Adelaide_Central_Market",
            image: "adelaide_central_market.jpg",
            description: "Immerse yourself in the vibrant atmosphere of Adelaide Central Market, one of Australia's largest fresh produce markets. Sample gourmet delights, shop for local produce, and enjoy multicultural cuisine from around the world."
        },
        {
            title: "Adelaide Zoo",
            link: "https://en.wikipedia.org/wiki/Adelaide_Zoo",
            image: "adelaide_zoo.jpg",
            description: "Visit Adelaide Zoo to encounter fascinating wildlife from Australia and beyond, including pandas, lions, and orangutans. Don't miss the opportunity to participate in animal encounters, guided tours, and behind-the-scenes experiences."
        },
        {
            title: "Glenelg Beach",
            link: "https://en.wikipedia.org/wiki/Glenelg,_South_Australia",
            image: "glenelg_beach.jpg",
            description: "Relax on the sandy shores of Glenelg Beach, a popular seaside destination just a short tram ride from Adelaide's city center. Swim, sunbathe, or enjoy watersports like paddleboarding and jet skiing. Explore the vibrant Jetty Road precinct for shopping, dining, and entertainment."
        },
        {
            title: "Barossa Valley Wine Region",
            link: "https://en.wikipedia.org/wiki/Barossa_Valley",
            image: "barossa_valley.jpg",
            description: "Embark on a wine-tasting adventure in the Barossa Valley, one of Australia's premier wine regions, renowned for its world-class Shiraz and Riesling. Visit cellar doors, sample award-winning wines, and indulge in gourmet food experiences."
        },
        {
            title: "Adelaide Hills",
            link: "https://en.wikipedia.org/wiki/Adelaide_Hills",
            image: "adelaide_hills.jpg",
            description: "Escape to the picturesque Adelaide Hills, where rolling hills, quaint villages, and boutique wineries await. Explore charming towns like Hahndorf and Stirling, go bushwalking in Mount Lofty Botanic Garden, or visit wildlife parks like Cleland Conservation Park."
        },
        {
            title: "Fleurieu Peninsula",
            link: "https://en.wikipedia.org/wiki/Fleurieu_Peninsula",
            image: "fleurieu_peninsula.jpg",
            description: "Discover the natural beauty of the Fleurieu Peninsula, with its stunning coastline, rugged cliffs, and pristine beaches. Enjoy swimming, surfing, or kayaking at places like Victor Harbor and Port Willunga, or explore the renowned McLaren Vale wine region."
        },
        {
            title: "Kangaroo Island",
            link: "https://en.wikipedia.org/wiki/Kangaroo_Island",
            image: "kangaroo_island.jpg",
            description: "Embark on a day trip or overnight adventure to Kangaroo Island, known for its abundant wildlife, pristine beaches, and rugged landscapes. Encounter kangaroos, koalas, and sea lions, explore national parks, and sample local produce at farm gates and cellar doors."
        },
        {
            title: "Adelaide Oval",
            link: "https://en.wikipedia.org/wiki/Adelaide_Oval",
            image: "adelaide_oval.jpg",
            description: "Experience the thrill of live sports and entertainment at Adelaide Oval, one of Australia's most iconic sporting venues. Catch a cricket match, Australian Rules football game, or attend a concert or cultural event in this historic stadium."
        },
        {
            title: "Hiking and Outdoor Adventures",
            link: "https://www.environment.sa.gov.au/parks/Find_a_Park/Browse_by_region/Adelaide_Hills",
            image: "adelaide_hiking.jpg",
            description: "Lace up your hiking boots and explore the scenic trails and natural reserves surrounding Adelaide. From the coastal cliffs of Hallett Cove Conservation Park to the rugged landscapes of Morialta Conservation Park, there are plenty of opportunities for outdoor adventures and nature appreciation."
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
