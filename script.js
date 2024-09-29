let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
let favItems = JSON.parse(localStorage.getItem('favItems')) || [];

function addToCart(title, img, price) {
    const item = { title, img, price };
    cartItems.push(item);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

function addToFav(title, img, price) {
    const item = { title, img, price };
    favItems.push(item);
    localStorage.setItem('favItems', JSON.stringify(favItems));
}

document.querySelectorAll('.addcart').forEach(cartButton => {
    cartButton.addEventListener('click', (event) => {
        const productElement = event.target.closest('.prod');
        const title = productElement.querySelector('.prodtit').textContent;
        const img = productElement.querySelector('.prodimg').src;
        const price = productElement.querySelector('.price').textContent;
        addToCart(title, img, price);
    });
});

document.querySelectorAll('.addfav').forEach(favButton => {
    favButton.addEventListener('click', (event) => {
        const productElement = event.target.closest('.prod');
        const title = productElement.querySelector('.prodtit').textContent;
        const img = productElement.querySelector('.prodimg').src;
        const price = productElement.querySelector('.price').textContent;
        addToFav(title, img, price);
    });
});

function filterProducts(category) {
    const products = document.querySelectorAll('.prod');
    products.forEach(product => {
        if (category === 'all' || product.dataset.category === category) {
            product.style.display = 'inline-block';
        } else {
            product.style.display = 'none';
        }
    });
}

function sortProducts(order) {
            const productGrid = document.getElementById('productGrid');
            const products = Array.from(productGrid.children);
            products.sort((a, b) => {
                const priceA = parseFloat(a.querySelector('.price').innerText.replace('$', ''));
                const priceB = parseFloat(b.querySelector('.price').innerText.replace('$', ''));
                return order === 'low' ? priceA - priceB : priceB - priceA;
            });
            productGrid.innerHTML = '';
            products.forEach(product => productGrid.appendChild(product));
        }
document.getElementById('sortSelect').addEventListener('change', (e) => {
    sortProducts(e.target.value);
});


