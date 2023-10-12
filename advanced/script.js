"use strict";
const menu = [
    {
        name: "Spaghetti Bolognese (vegan)",
        description: "Delicious spaghetti with a rich vegan soy-chunks sauce.",
        price: 12.99
    },
    {
        name: "Margherita Pizza (vegan)",
        description: "Classic margherita pizza with tomato and vegan mozzarella.",
        price: 10.99
    },
    {
        name: "Caesar Salad (vegan)",
        description: "Fresh salad with romaine lettuce, croutons, and Caesar dressing.",
        price: 8.99
    },
    {
        name: "Chana Masala (vegan)",
        description: "Indian spicy chickpeas curry.",
        price: 11.99
    },
];
function populateMenu() {
    const menuList = document.getElementById("menu-list");
    if (menuList) {
        menu.forEach((item) => {
            const menuItemElement = document.createElement("div");
            menuItemElement.className = "row";
            menuItemElement.innerHTML = `
                <div class="col-md-6"><h6>${item.name}</h6></div>
                <div class="col-md-6 d-flex justify-content-end">${item.price.toFixed(2)}</div><br>
                <div class="col-md-12 fs-6 fst-italic">${item.description}</div>

            `;
            const listItem = document.createElement("li");
            listItem.className = "list-group-item  list-group-item-light";
            listItem.appendChild(menuItemElement);
            menuList.appendChild(listItem);
        });
    }
}
populateMenu();
