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
          "type": "boolean",
          "title": "PVID Interface"
        },
        "vlans": {
          "type": "array",
          "title": "VLANs",
          "items": {
            "type": "object",
            "title": "VLAN",
            "properties": {
              "vlan": {
                "type": "string"
              }
            }
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
