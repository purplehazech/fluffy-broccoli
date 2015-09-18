'use strict';

/**
 * Returns aschema used to generate the main form
 *
 * @ngdoc service
 * @name fluffyBroccoliApp.schema
 * @description
 * # schema
 * Service in the fluffyBroccoliApp.
 */
angular.module('fluffyBroccoliApp')
  .service('schema', function () {
    return {
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
            "title": "A Kid",
            "properties": {
              "name": {
                "type": "string",
                "title": "Name of Kid",
                "description": "Assign a name to each kid.",
              },
              "number": {
                "type": "integer",
                "title": "Number",
                "desecription": "Choose a number between 1 and 10 for each kid",
                "minimum": 1,
                "maximum": 10,
              }
            }
          }
        }
      },
      "required": [
        "name"
      ]
    };
  });
