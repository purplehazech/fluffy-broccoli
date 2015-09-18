'use strict';

describe('Service: calculation', function () {

  // load the service's module
  beforeEach(module('fluffyBroccoliApp'));

  // instantiate service
  var calculation;
  beforeEach(inject(function (_calculation_) {
    calculation = _calculation_;
  }));

  it('should do something', function () {
    expect(!!calculation).toBe(true);
  });

  it('should have a calculate function', function() {
    expect(typeof calculation.calculate).toBe('function');
  });

  it('should store the sum of all calculations in the scope param', function() {
    var scope = {};
    calculation.calculate(scope, { "kid": [ { "number": 1 }, { "number": 2 } ] });
    expect(scope.results.totalNumbers).toBe(3);
  });

});
