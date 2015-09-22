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

$(document).ready(function(event) {

  $("form#new-order").submit(function(event) {
    event.preventDefault();

    var customerName = $("input#customer-name").val();
    var pizzaSize = $("select#pizza-size option:selected").text();
    var addToppings = $("select#add-toppings option:selected").text();
    var newOrder = new Order(customerName);
    newTicket.ticketPrice();

    $('.customer-name').text(customerName);

    $('#ticket-confirmation').text('You have successfuly purchased tickets for : ' + newTicket.nameOfMovie + " showing at " + newTicket.showtime + "... Now pay up! Its going to cost you: " + newTicket.price);

    });
    $("#result").show();
    event.preventDefault();


});
