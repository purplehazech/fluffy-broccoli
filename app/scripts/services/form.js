'use strict';

/**
 * Configure schema form
 *
 * @ngdoc service
 * @name fluffyBroccoliApp.form
 * @description
 * # form
 * Service in the fluffyBroccoliApp.
 */
angular.module('fluffyBroccoliApp')
  .service('form', function () {
    return [
      'identifier',
      'description',
      'acceptframe',
      {
        "key": "pvid",
        "condition": "model.acceptframe != 'admituntaggedonly'"
      },
      {
        "key": "vlans",
        "condition": "model.acceptframe != 'all'"
      }
    ];
  });
