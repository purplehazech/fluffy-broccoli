'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('fluffyBroccoliApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('expect json schema as object', function() {
    expect(typeof scope.schema).toBe('object');
  });

  it('expect form array', function () {
    expect(typeof scope.form).toBe('object');
  });
});
