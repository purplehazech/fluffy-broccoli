'use strict';

describe('Directive: templatedResults', function () {

  // load the directive's module
  beforeEach(module('fluffyBroccoliApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<templated-results></templated-results>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('Name of thing: {{ model.name }}\nSum of all numbers in kids: {{ results.totalNumbers }}');
  }));
});
