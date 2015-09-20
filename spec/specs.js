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


  it('returns a pizza with 2 toppings', function() {
    var testOrder = new Order('Luigi and Mario');
    testOrder.addToppings('pulled pork');
    testOrder.addToppings('grilled onions');
    expect(testOrder.pizza).to.eql(['pulled pork', 'grilled onions']);
  });


  it('returns a base price for a given size pizza', function() {
    var testOrder1 = new Order('Mario');
    var testOrder2 = new Order('Luigi');
    testOrder1.pricePizza('personal');
    testOrder2.pricePizza('medium');
    expect(testOrder2.price).to.equal(14.00);
    expect(testOrder2.price).to.equal(14.00);
  });

});
