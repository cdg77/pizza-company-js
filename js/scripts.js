function Order(customerName) {
  this.customerName = customerName;
  this.pizza = [];
  this.price = 0;
}

function Pizza(topping1) {
  this.topping1 = topping1;
}

Order.prototype.pricePizza = function() {
  this.price = 12.00;
}
