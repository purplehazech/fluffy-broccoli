'use strict';

/**
 * @ngdoc function
 * @name fluffyBroccoliApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fluffyBroccoliApp
 */
angular.module('fluffyBroccoliApp')
  .controller('MainCtrl', function ($scope, schema, form, calculation) {
    $scope.schema = schema;
    $scope.form = form;
    $scope.model = {};

    $scope.onChange = function(data) {
      calculation.calculate($scope, data);
    };
  });
