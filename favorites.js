document.addEventListener("DOMContentLoaded", function() {
    const favItemsContainer = document.getElementById('favItems');
    let favItems = JSON.parse(localStorage.getItem('favItems')) || [];
    function updateFav() {
        favItemsContainer.innerHTML = '';
        if (favItems.length === 0) {
            favItemsContainer.innerHTML = '<p>Your favorites list is empty.</p>';
            return;
        }
        favItems.forEach(item => {
            favItemsContainer.innerHTML += `
                <div class="prod">
                    <img class="prodimg" src="${item.img}" alt="${item.title}">
                    <h2 class="prodtit">${item.title}</h2>
                    <span class="price">${item.price}</span>
                    <i class='bx bxs-trash actions remove' onclick="removeFromFav('${item.title}')"></i>
                </div>
            `;
        });
    }
    window.removeFromFav = function(title) {
        favItems = favItems.filter(item => item.title !== title);
        localStorage.setItem('favItems', JSON.stringify(favItems));
        updateFav();
    };

    updateFav();
});
