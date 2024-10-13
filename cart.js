let cart = [];
let total = 0;

function addToCart(id, name, price) {
  cart.push({ id, name, price });
  total += price;
  displayCart();
}

function displayCart() {
  const cartList = document.getElementById('cart');
  const totalElement = document.getElementById('total');
  cartList.innerHTML = '';
  
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price}`;
    cartList.appendChild(li);
  });

  totalElement.textContent = total;
}

function checkout() {
  fetch('/checkout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `items=${JSON.stringify(cart)}&total=${total}`
  })
  .then(response => response.text())
  .then(data => {
    alert(data);
    cart = [];
    total = 0;
    displayCart();
  });
}
