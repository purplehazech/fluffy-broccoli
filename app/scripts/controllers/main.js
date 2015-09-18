'use strict';

/**
 * @ngdoc function
 * @name fluffyBroccoliApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fluffyBroccoliApp
 */
angular.module('fluffyBroccoliApp')
  .controller('MainCtrl', function ($scope, calculation) {

    /**
     * call calculate in calculation service on change
     */
    $scope.onChange = function(data) {
       calculation.calculate($scope, data);
    };

    /**
     * JSON-Schema that defines how the form is generated
     */
    $scope.schema = {
      "$schema": "http://json-schema.org/draft-04/schema#",
      "type": "object",
      "title": "Calculate Things",
      properties: {
        "name": {
          "type": "string",
          "title": "Name Field",
          "description": "Give your thing a name."
        },
        "kid": {
          "type": "array",
          "title": "Some Kids",
          "items": {
            "type": "object",
            "properties": {
              "name": {
                "type": "string"
              },
              "number": {
                "type": "integer"
              }
            }
          }
        }
      }
    };

    /**
     * form field configuration
     */
    $scope.form = [
      "*"
    ];

    /**
     * model for form results
     */
    $scope.model = {};
  });
