import { calculateCartTotal, formatMoney } from './cart.js';

const items = [
  { price: 1299, quantity: 2 },
  { price: 450, quantity: 1 },
];

console.log('Cart total:', formatMoney(calculateCartTotal(items)));
