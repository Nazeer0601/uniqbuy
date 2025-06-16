document.addEventListener("DOMContentLoaded", function () {
    const products = [
        { id: 1, name: "iPhone 14 Pro", price: 129999, image: "iphone14.jpg", category: "mobiles" },
        { id: 2, name: "Samsung Galaxy S23 Ultra", price: 124999, image: "Samsung Galaxy S23 Ultra.jpg", category: "mobiles" },
        { id: 3, name: "OnePlus 11", price: 59999, image: "OnePlus 11.jpg", category: "mobiles" },
        { id: 4, name: "Google Pixel 7 Pro", price: 84999, image: "Google Pixel 7 Pro.jpg", category: "mobiles" },
        { id: 5, name: "Xiaomi 13 Pro", price: 79999, image: "Xiaomi-13-Pro.jpg", category: "mobiles" },

        { id: 6, name: "Sony Bravia 55-inch TV", price: 69999, image: "Sony Bravia 55-inch TV.jpg", category: "electronics" },
        { id: 7, name: "Dell XPS 13 Laptop", price: 119999, image: "Dell XPS 13 Laptop.jpg", category: "electronics" },
        { id: 8, name: "Canon EOS R7 Camera", price: 145000, image: "Canon EOS R7 Camera.jpg", category: "electronics" },
        { id: 9, name: "Apple iPad Pro", price: 112999, image: "Apple iPad Pro.jpg", category: "electronics" },
        { id: 10, name: "Bose Soundbar 700", price: 89999, image: "Bose Soundbar 700.jpg", category: "electronics" },

        { id: 11, name: "LG 7kg Washing Machine", price: 28999, image: "LG.jpg", category: "appliances" },
        { id: 12, name: "Samsung 345L Refrigerator", price: 45999, image: "Samsung 345L Refrigerator.jpg", category: "appliances" },
        { id: 13, name: "Daikin 1.5 Ton AC", price: 38999, image: "Daikin 1.5 Ton AC.jpg", category: "appliances" },
        { id: 14, name: "Whirlpool Microwave Oven", price: 12999, image: "Whirlpool Microwave Oven.jpg", category: "appliances" },
        { id: 15, name: "Havells 1200W Iron", price: 2999, image: "Havells 1200W Iron.jpg", category: "appliances" },

        { id: 16, name: "Nike Air Max Shoes", price: 8999, image: "Nike Air Max Shoes.jpg", category: "fashion" },
        { id: 17, name: "Levi’s Denim Jacket", price: 3499, image: "Levi’s Denim Jacket.jpg", category: "fashion" },
        { id: 18, name: "Ray-Ban Aviator Sunglasses", price: 7999, image: "Ray-Ban Aviator Sunglasses.jpg", category: "fashion" },
        { id: 19, name: "Puma Running Shoes", price: 6999, image: "Puma Running Shoes.jpg", category: "fashion" },
        { id: 20, name: "Tommy Hilfiger Watch", price: 12499, image: "Tommy Hilfiger Watch.jpg", category: "fashion" },

        { id: 21, name: "Apple AirPods Pro", price: 21999, image: "Apple AirPods Pro.jpg", category: "gadgets" },
        { id: 22, name: "Samsung Galaxy Watch 5", price: 27999, image: "Samsung Galaxy Watch 5.jpg", category: "gadgets" },
        { id: 23, name: "Sony WH-1000XM5 Headphones", price: 34999, image: "Sony WH-1000XM5 Headphones.jpg", category: "gadgets" },
        { id: 24, name: "Garmin Smartwatch", price: 35999, image: "Garmin Smartwatch.jpg", category: "gadgets" },
        { id: 25, name: "GoPro Hero 11", price: 44999, image: "GoPro Hero 11.jpg", category: "gadgets" },

        { id: 26, name: "Biotique Hair Oil", price: 399, image: "Biotique Hair Oil.jpg", category: "health" },
        { id: 27, name: "Nivea Moisturizer", price: 499, image: "Nivea Moisturizer.jpg", category: "health" },
        { id: 28, name: "Dove Shampoo", price: 299, image: "Dove Shampoo.jpg", category: "health" },
        { id: 29, name: "L'Oreal Face Wash", price: 599, image: "L'Oreal Face Wash.jpg", category: "health" },
        { id: 30, name: "Philips Trimmer", price: 1899, image: "Philips Trimmer.jpg", category: "health" },

        // Dry Fruits and Seeds
        { id: 31, name: "Sesame Seeds", price: 799, image: "Sesame-Seeds.jpg", category: "seeds" },
        { id: 32, name: "Raisins 500g", price: 799, image: "Raisins-500g.jpg", category: "dry-fruits" },
        { id: 33, name: "Walnuts 500g", price: 1299, image: "Walnuts-500g.jpg", category: "dry-fruits" },
        { id: 34, name: "Sunflower Seeds 250g", price: 499, image: "Sunflower-Seeds-250g.jpg", category: "seeds" },
        { id: 35, name: "Pumpkin Seeds 250g", price: 699, image: "Pumpkin-Seeds-250g.jpg", category: "seeds" },
        { id: 36, name: "Pistachios 500g", price: 1599, image: "Pistachios-500g.jpg", category: "dry-fruits" },
        { id: 37, name: "Almonds 500g", price: 899, image: "Almonds-500g.jpg", category: "dry-fruits" },
        { id: 38, name: "Cashews 500g", price: 1099, image: "Cashews-500g.jpg", category: "dry-fruits" },
        { id: 39, name: "Chia Seeds 250g", price: 799, image: "Chia-Seeds-250g.jpg", category: "seeds" },
        { id: 40, name: "Flax Seeds 250g", price: 699, image: "Flax-Seeds-250g.jpg", category: "seeds" }
    ];

    const productContainer = document.getElementById("product-list");
    const cartCountElement = document.getElementById("cart-count");
    const cartContainer = document.getElementById("cart-items");
    const categoryButtons = document.querySelectorAll(".category-link");

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    function updateCartCount() {
        cartCountElement.textContent = cart.length;
    }

    function updateCartDisplay() {
        cartContainer.innerHTML = "";
        let grandTotal = 0;

        cart.forEach(product => {
            const cartItem = document.createElement("div");
            cartItem.classList.add("cart-item");
            cartItem.innerHTML = `
                <img src="product-list/${product.image}" alt="${product.name}" class="cart-item-img">
                <h3>${product.name}</h3>
                <p>₹${product.price}</p>
                <button class="remove-from-cart" data-id="${product.id}">Remove</button>
            `;
            cartContainer.appendChild(cartItem);

            grandTotal += product.price;
        });

        const grandTotalElement = document.getElementById("grand-total");
        grandTotalElement.textContent = `Grand Total: ₹${grandTotal}`;
    }

    function addToCart(productId) {
        const product = products.find(product => product.id === productId);
        if (product) {
            cart.push(product);
            localStorage.setItem("cart", JSON.stringify(cart));
            updateCartCount();
            updateCartDisplay();
        }
    }

    function removeFromCart(productId) {
        cart = cart.filter(product => product.id !== productId);
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartCount();
        updateCartDisplay();
    }

    function displayProducts(filteredProducts) {
        productContainer.innerHTML = "";
        filteredProducts.forEach(product => {
            const productCard = document.createElement("div");
            productCard.classList.add("product-card");
            productCard.innerHTML = `
                <img src="product-list/${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>₹${product.price}</p>
                <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
            `;
            productContainer.appendChild(productCard);
        });

        document.querySelectorAll(".add-to-cart").forEach(button => {
            button.addEventListener("click", () => {
                addToCart(parseInt(button.getAttribute("data-id")));
            });
        });
    }

    displayProducts(products);

    categoryButtons.forEach(button => {
        button.addEventListener("click", () => {
            const selectedCategory = button.getAttribute("data-category");
            const filteredProducts = products.filter(product => product.category === selectedCategory);
            displayProducts(filteredProducts);
        });
    });

    cartContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("remove-from-cart")) {
            removeFromCart(parseInt(e.target.getAttribute("data-id")));
        }
    });

    updateCartCount();
    updateCartDisplay();
});
