function Order(customerName) {
  this.customerName = customerName;
  this.pizza = [];
  this.price = 0;
}



Order.prototype.pricePizza = function(size) {
  if (size === 'personal') {
    return this.price = 10.00;
  } else if (size === 'small') {
    return this.price = 12.00;
  } else if (size === 'medium') {
    return this.price = 14.00;
  } else if (size === 'large') {
    return this.price = 16.00;
  } else if (size === 'garfield') {
    return this.price = 18.00;
  }

}

Order.prototype.addToppings = function(topping) {
  this.pizza.push(topping);
}

// function Pizza(topping1) {
//   this.topping1 = topping1;
// }
