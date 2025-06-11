// cart.js
// Här kan du lägga gemensam varukorgslogik om du vill visa varukorgen på andra sidor
function getCart() {
  return JSON.parse(localStorage.getItem('cart')) || [];
}

function clearCart() {
  localStorage.removeItem('cart');
}
