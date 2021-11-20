const products = [
    { type: 0, id: 1, name: "Pizza 1", price: 75, description: "Jamon y piña (362g)", img: "assets/products/pizzas/pizza1.svg" },
    { type: 0, id: 2, name: "Ensalada 2", price: 75, description: "Pepperoni y champiñones (370g)", img: "assets/products/pizzas/pizza2.svg" },
    { type: 0, id: 4, name: "Postre 3", price: 75, description: "Pepperoni y champiñones (370g)", img: "assets/products/pizzas/pizza3.svg" },
    { type: 0, id: 1, name: "Pizza 1", price: 75, description: "Jamon y piña (362g)", img: "assets/products/pizzas/pizza1.svg" },
    { type: 0, id: 2, name: "Ensalada 2", price: 75, description: "Pepperoni y champiñones (370g)", img: "assets/products/pizzas/pizza2.svg" },
    { type: 0, id: 3, name: "Bebida 3", price: 75, description: "Pepperoni y champiñones (370g)", img: "assets/products/pizzas/pizza3.svg" },
    { type: 0, id: 1, name: "Pizza 1", price: 75, description: "Jamon y piña (362g)", img: "assets/products/pizzas/pizza1.svg" },
    { type: 0, id: 4, name: "Postre 2", price: 75, description: "Pepperoni y champiñones (370g)", img: "assets/products/pizzas/pizza2.svg" },
    { type: 0, id: 3, name: "Bebida 3", price: 75, description: "Pepperoni y champiñones (370g)", img: "assets/products/pizzas/pizza3.svg" },
    { type: 0, id: 1, name: "Pizza 1", price: 75, description: "Jamon y piña (362g)", img: "assets/products/pizzas/pizza1.svg" },
    { type: 0, id: 2, name: "Ensalada 2", price: 75, description: "Pepperoni y champiñones (370g)", img: "assets/products/pizzas/pizza2.svg" },
    { type: 0, id: 4, name: "Postre 3", price: 75, description: "Pepperoni y champiñones (370g)", img: "assets/products/pizzas/pizza3.svg" },
    { type: 0, id: 1, name: "Pizza 1", price: 75, description: "Jamon y piña (362g)", img: "assets/products/pizzas/pizza1.svg" },
    { type: 0, id: 2, name: "Ensalada 2", price: 75, description: "Pepperoni y champiñones (370g)", img: "assets/products/pizzas/pizza2.svg" },
    { type: 0, id: 4, name: "Postre 3", price: 75, description: "Pepperoni y champiñones (370g)", img: "assets/products/pizzas/pizza3.svg" },
    { type: 0, id: 1, name: "Pizza 1", price: 75, description: "Jamon y piña (362g)", img: "assets/products/pizzas/pizza1.svg" },
    { type: 0, id: 2, name: "Ensalada 2", price: 75, description: "Pepperoni y champiñones (370g)", img: "assets/products/pizzas/pizza2.svg" },
    { type: 0, id: 3, name: "Bebida 3", price: 75, description: "Pepperoni y champiñones (370g)", img: "assets/products/pizzas/pizza3.svg" },
    { type: 0, id: 1, name: "Pizza 1", price: 75, description: "Jamon y piña (362g)", img: "assets/products/pizzas/pizza1.svg" },
    { type: 0, id: 4, name: "Postre 2", price: 75, description: "Pepperoni y champiñones (370g)", img: "assets/products/pizzas/pizza2.svg" },
    { type: 0, id: 3, name: "Bebida 3", price: 75, description: "Pepperoni y champiñones (370g)", img: "assets/products/pizzas/pizza3.svg" },
    { type: 0, id: 1, name: "Pizza 1", price: 75, description: "Jamon y piña (362g)", img: "assets/products/pizzas/pizza1.svg" },
    { type: 0, id: 2, name: "Ensalada 2", price: 75, description: "Pepperoni y champiñones (370g)", img: "assets/products/pizzas/pizza2.svg" },
    { type: 0, id: 4, name: "Postre 3", price: 75, description: "Pepperoni y champiñones (370g)", img: "assets/products/pizzas/pizza3.svg" }
]

const productsContainer = document.getElementById('productsContainer');
let idFilter = 1;
let filterProducts = [];
const btnFilter = document.querySelectorAll(".btnFilter")

const fillProductsContainer = (e) => {
    productsContainer.innerHTML = ""
    idFilter = e.target.dataset.id;
    console.log(idFilter)
    filter(idFilter);
}


const filter = (idFilter) => {
    filterProducts = products.filter(product => {
        if (product.id == idFilter) {
            const newProduct = document.createElement('div');
            newProduct.className = "product"
            newProduct.innerHTML =
                `<img src="${product.img}"/>
        <div>
        <h3 class="title">${product.name} <span>$${product.price}</span></h3>
        <p class="smallText">${product.description}</p>
        </div>`
            productsContainer.appendChild(newProduct);
        }
    })
}

filter(idFilter);




btnFilter.forEach(function (btn) {
    btn.addEventListener("click", fillProductsContainer);
});
