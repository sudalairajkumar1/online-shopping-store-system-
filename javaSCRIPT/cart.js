let cart = JSON.parse(localStorage.getItem("cart")) || [];
let container = document.getElementById("cartItems");
let total = 0;

cart.forEach(item => {
    total += item.price;
    container.innerHTML += `
        <p>${item.name} - ₹${item.price}</p>
    `;
});

container.innerHTML += `<h3>Total: ₹${total}</h3>`;
