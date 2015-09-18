describe('Pizza', function() {
  it('return a pizza with one topping', function() {
    var testPizza = new Pizza('carnitas');
    expect(testPizza.topping1).to.equal('carnitas');
  });
});
