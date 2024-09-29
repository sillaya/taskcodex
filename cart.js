document.addEventListener("DOMContentLoaded", function() {
    const cartItemsContainer = document.getElementById('cartItems');
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    function updateCart() {
        cartItemsContainer.innerHTML = '';
        let totalPrice = 0; 
        if (cartItems.length === 0) {
            cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
            return;
        }
    
        cartItems.forEach(item => {
            cartItemsContainer.innerHTML += `
                <div class="prod">
                    <img class="prodimg" src="${item.img}" alt="${item.title}">
                    <h2 class="prodtit">${item.title}</h2>
                    <span class="price">${item.price}</span>
                    <i class='bx bxs-trash actions remove' onclick="removeFromCart('${item.title}')"></i>
                </div>
            `;
            totalPrice += parseFloat(item.price.substring(1));
        });
        cartItemsContainer.innerHTML += ` 
            <div class="total">
                <h3>Total Price: $${totalPrice.toFixed(2)}</h3>
            </div>
        `;
    }    
    window.removeFromCart = function(title) {
        cartItems = cartItems.filter(item => item.title !== title);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        updateCart();
    };
    updateCart();
});
