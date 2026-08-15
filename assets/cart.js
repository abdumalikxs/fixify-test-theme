export function calculateCartTotal(items) {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

export function formatMoney(cents) {
  return '$' + (cents / 100).toFixed(2);
}
