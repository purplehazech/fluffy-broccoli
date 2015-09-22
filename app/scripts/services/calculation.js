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
        var pvid = '';
        if (data.pvid) {
          pvid += 
            "!Setting PVID " + data.pvid + " on interface " + data.identifier + "\n" +
            "vlan pvid " + data.pvid + "\n" +
            "\n";
        }

        var vlans = '';
        angular.forEach(data.vlans, function(vlan) {
          vlans += 
            "!Adding VLAN " + vlan.id + " to interface " + data.identifier + "\n" +
            "vlan participation include "+ vlan.id + "\n";
          if (vlan.id !== data.pvid) {
            vlans += "vlan tagging " + vlan.id + "\n";
          }
          vlans +=
            "\n";
        });
        $scope.results = {
          pvid: pvid,
          vlans: vlans
        };
      }
    };
  });
