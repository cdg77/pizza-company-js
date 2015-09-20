describe('Order', function() {

  it('returns an order with a customer', function() {
    var testOrder = new Order('Luigi');
    expect(testOrder.customerName).to.equal('Luigi');
  });

  it('returns an order with a customer and empty pizza array', function() {
    var testOrder = new Order('Luigi');
    expect(testOrder.customerName).to.equal('Luigi');
    expect(testOrder.pizza).to.eql([]);
  });

  it('returns an order with a customer, pizza and price for a pizza', function() {
    var testOrder = new Order('Luigi');
    expect(testOrder.customerName).to.equal('Luigi');
    expect(testOrder.pizza).to.eql([]);
    expect(testOrder.price).to.equal(0);
  });

  it('returns a base price for a single pizza', function() {
    var testOrder = new Order('Luigi');
    testOrder.pricePizza();
    expect(testOrder.price).to.equal(12.00);
  });

  it('returns a pizza with 2 toppings', function() {
    var testOrder = new Order('Luigi and Mario');
    testOrder.addToppings('pulled pork');
    testOrder.addToppings('grilled onions');
    expect(testOrder.pizza).to.eql(['pulled pork', 'grilled onions']);
  });



});

describe('Pizza', function() {
  it('return a pizza with one topping', function() {
    var testPizza = new Pizza('carnitas');
    expect(testPizza.topping1).to.equal('carnitas');
  });


});
