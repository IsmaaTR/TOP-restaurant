import restaurantImage from "./charming-alley-restaurant.jpg";

export const homeModule = (function () {
    const contentDiv = document.querySelector('#content');
    const descriptionText = 'At Torroni\'s, we bring the heart of Italy to your table with time-honored recipes, fresh ingredients, and warm hospitality. Whether you\'re craving a classic Margherita pizza, a rich and savory Bolognese, or our signature homemade ravioli, every dish is made with love and tradition.';

    function init() {
        //Create and append the title
        const title = document.createElement('h1');
        title.innerText = 'Welcome to Torroni\'s - Authentic Italian Cuisine';
        contentDiv.appendChild(title);

        //Create and append the description and image
        const homeDiv = document.createElement('div');
        const description = document.createElement('p');
        const img = document.createElement('img');

        homeDiv.id = 'home';
        description.innerText = descriptionText;
        img.src = restaurantImage;
        img.alt = 'Torroni\'s';

        homeDiv.appendChild(description);
        homeDiv.appendChild(img);
        contentDiv.appendChild(homeDiv);
    }

    return { init };
})();