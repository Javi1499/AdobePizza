const products = [
    { type: 1, id: 1, name: "Hawaina", price: 75, description: "Jamon y piña (362g)", img: "assets/products/pizzas/pizza1.svg" },
    { type: 1, id: 2, name: "Pepe-Champi", price: 75, description: "Pepperoni y champiñones (370g)", img: "assets/products/pizzas/pizza2.svg" },
    { type: 1, id: 3, name: "Al pastor", price: 84, description: "Carne al Pastor, Piña y cebolla morada (298g)", img: "assets/products/pizzas/pizza3.svg" },
    { type: 1, id: 4, name: "Carnivora", price: 84, description: "Pepperoni, Salami, Jamón, chorizo, tocino y salchicha (305g)", img: "assets/products/pizzas/pizza1.svg" },
    { type: 1, id: 5, name: "Bufalo", price: 84, description: "Alitas sin hueso, apio, salsa Buffalo, BBQ y Ranch (300g)", img: "assets/products/pizzas/pizza5.svg" },
    { type: 1, id: 6, name: "BBQ Chicken", price: 84, description: "Pollo capeado, tocino, cebolla morada,  BBQchipotle y Piña (330g)", img: "assets/products/pizzas/pizza6.svg" },
    { type: 1, id: 7, name: "Vegetariana", price: 79, description: "Champiñones, cebolla, pimiento verde, espinicas y piña (347g)", img: "assets/products/pizzas/pizza7.svg" },
    { type: 1, id: 8, name: "Adobe", price: 84, description: "Jamon, pepperoni, champiñones, cebolla, pimiento verde, chile verde y chorizo (407g)", img: "assets/products/pizzas/pizza8.svg" },
    { type: 2, id: 9, name: "Ensalada Adobe", price: 84, description: "Lechugas mixtas, jitomate, pepino, panela y jamon serrano (285g)", img: "assets/products/salad/salad1.svg" },
    { type: 2, id: 10, name: "Mini Ensalada Adobe", price: 64, description: "Lechugas mixtas, jitomate, pepino, panela y jamon serrano (185g)", img: "assets/products/salad/salad1.svg" },
    { type: 2, id: 11, name: "Ensalada Buffalo", price: 84, description: "Lechugas mixtas,cebolla morada, pepino, aderezo ranch, buffalo y alitas de pollo (265g)", img: "assets/products/salad/salad2.svg" },
    { type: 2, id: 12, name: "Ensalada Buffalo mini", price: 64, description: "Pepperoni, Salami, Jamón, chorizo, tocino y salchicha (185g)", img: "assets/products/salad/salad2.svg" },
    { type: 3, id: 13, name: "Té helado", price: 30, description: "Té helado de durazno (500ml)", img: "assets/products/drinks/drink1.svg" },
    { type: 3, id: 14, name: "Refresco", price: 30, description: "Refresco de la familia Coca-Cola (600ml)", img: "assets/products/drinks/drink2.svg" },
    { type: 3, id: 15, name: "Botella de cerveza", price: 28, description: "Cerveza Tecate, XX, Indio, Heineken (350ml)", img: "assets/products/drinks/drink3.svg" },
    { type: 3, id: 16, name: "Michelada", price: 55, description: "Michelada de Tecate, XX o Heineken (650ml)", img: "assets/products/drinks/drink4.svg" },
    { type: 3, id: 15, name: "Copa de vino", price: 45, description: "Copa de vino (160ml)", img: "assets/products/drinks/drink5.svg" },
    { type: 3, id: 16, name: "Clericot", price: 47, description: "Clericot fresco (380ml)", img: "assets/products/drinks/drink6.svg" },
    { type: 4, id: 17, name: "Banana-nutella", price: 59, description: "Nutella, platano, nieve, nuez y chocolate", img: "assets/products/sweets/sweet1.svg" },
    { type: 4, id: 18, name: "Brownie sencillo", price: 42, description: "Brownie de chocolate y nuez", img: "assets/products/sweets/sweet2.svg" },
    { type: 4, id: 19, name: "Brownie especial", price: 59, description: "Brownie de chocolate con nieve, chocolate fundido", img: "assets/products/sweets/sweet3.svg" },
    { type: 4, id: 20, name: "Nieve", price: 45, description: "# bolas de nieve, nuez y chocolate", img: "assets/products/sweets/sweet4.svg" },
    

]

const productsContainer = document.getElementById('productsContainer');
let idFilter = 1;
let filterProducts = [];
let btnFilter = document.querySelectorAll(".btnFilter")

const fillProductsContainer = (e) => {
    clearOptions()
    idFilter = e.target.dataset.id;
    let option = document.querySelector(`[data-id="${idFilter}"]`)
    option.classList.add("optionSelected")
    filter(idFilter);
}

const clearOptions = () => {
    productsContainer.innerHTML = ""
    /*Remove style of option selected*/
    btnFilter.forEach((e) => e.classList.remove("optionSelected"))
}

const filter = (idFilter) => {
    filterProducts = products.filter(product => {
        if (product.type == idFilter) {
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
