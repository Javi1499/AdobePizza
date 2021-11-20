const products = [
    { type: 0, id: 1, name: "Pizza 1", price: 75, description: "Jamon y piña (362g)", img: "assets/products/pizzas/pizza1.svg" },
    { type: 0, id: 2, name: "Pizza 2", price: 75, description: "Pepperoni y champiñones (370g)", img: "assets/products/pizzas/pizza2.svg" },
    { type: 0, id: 3, name: "Pizza 3", price: 75, description: "Pepperoni y champiñones (370g)", img: "assets/products/pizzas/pizza3.svg" },
    { type: 0, id: 1, name: "Pizza 1", price: 75, description: "Jamon y piña (362g)", img: "assets/products/pizzas/pizza1.svg" },
    { type: 0, id: 2, name: "Pizza 2", price: 75, description: "Pepperoni y champiñones (370g)", img: "assets/products/pizzas/pizza2.svg" },
    { type: 0, id: 3, name: "Pizza 3", price: 75, description: "Pepperoni y champiñones (370g)", img: "assets/products/pizzas/pizza3.svg" }
]

const productsContainer = document.getElementById('productsContainer');
const renderProducts = (product) => {
    const ejemplo = document.createElement('div');
    ejemplo.className = "product"
    ejemplo.innerHTML = `
    <img src="${product.img}"/>
    <div>
    <h3 class="title">${product.name} <span>$${product.price}</span></h3>
    <p class="smallText">${product.description}</p>
    /div>

    `
    productsContainer.appendChild(ejemplo);

}

products.forEach(renderProducts);
