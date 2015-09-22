'use strict';

describe('Directive: templatedResults', function () {

  // load the directive's module
  beforeEach(module('fluffyBroccoliApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should contain a template', inject(function ($compile) {
    element = angular.element('<templated-results></templated-results>');
    element = $compile(element)(scope);
    expect(typeof element.text()).toBe('string');
  }));
});
