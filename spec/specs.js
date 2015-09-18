describe('Order', function() {
  it('returns an order with a customer', function() {
    var testOrder = new Order('Luigi');
    expect(testOrder.customerName).to.equal('Luigi');
  });
});

describe('Pizza', function() {
  it('return a pizza with one topping', function() {
    var testPizza = new Pizza('carnitas');
    expect(testPizza.topping1).to.equal('carnitas');
  });
});
