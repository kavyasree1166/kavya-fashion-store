document.addEventListener('DOMContentLoaded', () => {
    const cartItems = [
        {
            image: 'image.8.jpg',
            name: 'Kurtha',
            price: 499,
            quantity: 2
        }
        
        // Add more items as needed
    ];

    const tbody = document.querySelector('#cart-items tbody');
    const totalPriceElement = document.getElementById('total-price');

    function updateCart() {
        tbody.innerHTML = '';
        let total = 0;

        cartItems.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td><img src="${item.image}" alt="${item.name}"></td>
                <td>${item.name}</td>
                <td>₹${item.price}</td>
                <td>
                    <div class="quantity-control">
                        <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity('${item.name}', this.value)">
                    </div>
                </td>
                <td>₹${item.price * item.quantity}</td>
                <td><button onclick="removeItem('${item.name}')">Remove</button></td>
            `;
            tbody.appendChild(row);
            total += item.price * item.quantity;
        });

        totalPriceElement.textContent = `₹${total}`;
    }

    window.updateQuantity = function(name, quantity) {
        const item = cartItems.find(i => i.name === name);
        if (item) {
            item.quantity = parseInt(quantity, 10);
            updateCart();
        }
    };

    window.removeItem = function(name) {
        const index = cartItems.findIndex(i => i.name === name);
        if (index > -1) {
            cartItems.splice(index, 1);
            updateCart();
        }
    };

    window.showPaymentForm = function() {
        document.getElementById('payment-method').style.display = 'block';
        document.getElementById('cart-summary').style.display = 'none';
    };

    updateCart();
});

window.showPaymentForm = function() {
    document.getElementById('payment-method').style.display = 'block';
    document.getElementById('cart-summary').style.display = 'none';
};

window.processPayment = function(event) {
    event.preventDefault(); // Prevent form submission

    // Here you would usually process the payment and validate details

    // Simulate payment processing
    document.getElementById('payment-method').style.display = 'none';
    document.getElementById('payment-success').style.display = 'block';
};

window.showOrderHistory = function() {
    document.getElementById('payment-success').style.display = 'none';
    document.getElementById('order-history').style.display = 'block';

    const orderHistoryTbody = document.getElementById('order-history-body');
    orderHistoryTbody.innerHTML = '';

    // Example order history
    const orders = [
        { id: '1234', date: '2024-09-01', product: 'Kurtha', quantity: 2, status: 'Delivered' },
        { id: '5678', date: '2024-08-15', product: 'Shirt', quantity: 1, status: 'Shipped' }
    ];

    orders.forEach(order => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${order.id}</td>
            <td>${order.date}</td>
            <td>${order.product}</td>
            <td>${order.quantity}</td>
            <td>${order.status}</td>
        `;
        orderHistoryTbody.appendChild(row);
    });
};

updateCart();
;
