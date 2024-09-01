// products.js

function addToCart(image, name, price) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const existingItemIndex = cartItems.findIndex(item => item.name === name);

    if (existingItemIndex >= 0) {
        cartItems[existingItemIndex].quantity += 1;
    } else {
        cartItems.push({ image, name, price, quantity: 1 });
    }

    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

function buyNow(image, name, price) {
    addToCart(image, name, price);
    window.location.href = 'cart.html';
}
