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
  } else if (size === 'special') {
    return this.price = 22.00;
  }

}

Order.prototype.addToppings = function(topping) {
  this.pizza.push(topping);
}

// function Pizza(topping1) {
//   this.topping1 = topping1;
// }

$(document).ready(function(event) {

  $("form#order-pizza").submit(function(event) {

    var customerName = $("input#customer-name").val();
    var pizzaSize = $("select#pizza-size option:selected").val();
    var addToppings = $("select#add-toppings option:selected").val();
    var newOrder = new Order(customerName);
    newOrder.pricePizza(pizzaSize);
    newOrder.addToppings(addToppings);

    $('.customer-name').text(customerName);


    $('#order-confirmation').text('Thank you  ' + newOrder.customerName + " !!!! " + "Your order of a " + pizzaSize + " pizza with free topping of " + newOrder.pizza + " is on it's way!  ... Now pay up! Its going to cost you: $ " + newOrder.price);

    $("#result").show();
    event.preventDefault();
    });

    $( "#hours" ).click(function() {
      $( "#mondays" ).show( "slow", function() {
        event.preventDefault();
        // Animation complete.
      });
    });


});
