'use strict';

/**
 * @ngdoc service
 * @name fluffyBroccoliApp.calculation
 * @description
 * # calculation
 * Service in the fluffyBroccoliApp.
 */
angular.module('fluffyBroccoliApp')
  .service('calculation', function () {
    return {
      /**
       * This service exposes a calculate method that does the heavy lifting
       */
      calculate: function($scope, data) {

        // find a sum with the cheapest most dirty code thinkable of
        var sum = 0;
        angular.forEach(data.kid, function(kid) {
          sum += kid.number;
        });
        $scope.results = {
          totalNumbers: sum
        };
      }
    };
  });
