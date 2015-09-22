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
      "title": "Generate Switch Configuration",
      properties: {
        "identifier": {
          "type": "string",
          "title": "Identifier",
          "description": "A unit/slot/port identifier (e.g. 1/0/1).",
          "pattern": "^[0-9]+\/[0-9]+\/[0-9]+$"
        },
        "description": {
          "type": "string",
          "title": "Description",
        },
        "acceptframe": {
          "type": "string",
          "enum": [
            "admituntaggedonly",
            "vlanonly",
            "all"
          ],
          "title": "Acceptframe"
        },
        "pvid": {
          "type": "integer",
          "title": "PVID Interface",
          "minimum": 1,
          "maximum": 4095
        },
        "vlans": {
          "type": "array",
          "title": "VLANs",
          "items": {
            "type": "object",
            "title": "VLAN",
            "properties": {
              "id": {
                "type": "integer",
                "minimum": 1,
                "maximum": 4095
              }
            },
            "required": [
              "id"
            ]
          }
        }
      },
      "required": [
        "identifier",
        "description",
        "acceptframe"
      ]
    };
  });
