document.addEventListener("DOMContentLoaded", function () {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartItemsContainer = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");

    // If the cart is empty, display a message
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
    } else {
        // Display each product in the cart
        let totalPrice = 0;
        cart.forEach(product => {
            const productElement = document.createElement("div");
            productElement.classList.add("cart-item");
            productElement.innerHTML = `
                <img src="product-list/${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>₹${product.price}</p>
            `;
            cartItemsContainer.appendChild(productElement);

            totalPrice += product.price;
        });

        // Update the total price
        totalPriceElement.textContent = totalPrice;
    }
});
