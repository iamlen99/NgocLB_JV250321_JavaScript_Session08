function totalAmount(arr) {
  let sum = 0;
  for (let order of arr) {
    sum += order.price * order.quantity;
  }
  return sum;
}

const cart = [
  { name: "Mèn mén", price: 30000, quantity: 2 },
  { name: "Mì tôm", price: 5000, quantity: 1 },
  { name: "Bánh bao", price: 15000, quantity: 3 },
];

console.log("Tổng tiền trong giỏ hàng là: ", totalAmount(cart));
