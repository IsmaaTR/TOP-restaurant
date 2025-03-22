export const menuModule = (function () {
    const contentDiv = document.querySelector('#content');
    const menuItems = [
        { name: "Bruschetta", price: 6.99 },
        { name: "Caprese Salad", price: 7.49 },
        { name: "Garlic Bread", price: 4.99 },
        { name: "Pizza Margherita", price: 8.99 },
        { name: "Pizza Quattro Formaggi", price: 11.99 },
        { name: "Lasagna", price: 10.99 },
        { name: "Spaghetti Carbonara", price: 9.49 },
        { name: "Fettuccine Alfredo", price: 10.49 },
        { name: "Risotto ai Funghi", price: 12.99 },
        { name: "Osso Buco", price: 15.99 },
        { name: "Tiramisu", price: 5.99 },
        { name: "Panna Cotta", price: 4.99 },
        { name: "Cannoli", price: 3.99 },
        { name: "Espresso", price: 2.49 },
        { name: "Cappuccino", price: 3.49 }
    ];

    function init() {
        const title = document.createElement('h1');
        title.innerText = 'Our menu';
        contentDiv.appendChild(title);

        const menuDiv = document.createElement('div');
        menuDiv.id = 'menu';
        menuItems.forEach(item => {
            const menuItem = document.createElement("div");
            menuItem.classList.add("menu-item");
            const itenName = document.createElement('p');
            const itemPrice = document.createElement('p');
            itenName.innerText = item.name;
            itemPrice.innerText = item.price;
            menuItem.appendChild(itenName);
            menuItem.appendChild(itemPrice);
            menuDiv.appendChild(menuItem);
        });

        contentDiv.appendChild(menuDiv);
    }

    return { init };
})();