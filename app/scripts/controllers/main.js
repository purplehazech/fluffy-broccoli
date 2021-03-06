'use strict';

/**
 * @ngdoc function
 * @name fluffyBroccoliApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fluffyBroccoliApp
 */
angular.module('fluffyBroccoliApp')
  .controller('MainCtrl', function ($scope, Flash, schema, form, calculation) {
    $scope.schema = schema;
    $scope.form = form;
    $scope.model = {};

    // @todo update when https://github.com/Textalk/angular-schema-form/pull/374 is merged so this also fires when we remove a kid element
    $scope.onChange = function(data) {
      calculation.calculate($scope, data);
    };
    $scope.copySuccess = function() {
      Flash.create('success', 'Copied to clipboard');
    };
    $scope.copyFail = function(err) {
      Flash.create('warning', err);
    };
    $scope.$watch(function() {
      $scope.resultText = angular.element( document.querySelector( '#resultText' ) )[0].innerHTML;
    });
  });
