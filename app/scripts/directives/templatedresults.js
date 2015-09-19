'use strict';

/**
 * @ngdoc directive
 * @name fluffyBroccoliApp.directive:templatedResults
 * @description
 * # templatedResults
 */
angular.module('fluffyBroccoliApp')
  .directive('templatedResults', function () {
    var template = "Name of thing: {{ model.name }}\nSum of all numbers in kids: {{ results.totalNumbers }}";
    return {
      template: template
    };
  });
