// Simple cart badge updater for the theme.
function updateCartCount(items) {
  var total = 0;
  for (var i = 0; i < items.length; i++) {
    total += items[i].quantity;
  }

  var badge = document.querySelector('[data-cart-count]');
  if (badge) {
    badge.textContent = total;
  }
  return total;

function initCart() {
  document.addEventListener('cart:updated', function (event) {
    updateCartCount(event.detail.items || []);
  });
}

initCart();
