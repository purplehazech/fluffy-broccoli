'use strict';

/**
 * @ngdoc directive
 * @name fluffyBroccoliApp.directive:templatedResults
 * @description
 * # templatedResults
 */
angular.module('fluffyBroccoliApp')
  .directive('templatedResults', function () {
    var template =
      "!Configuring interface {{ model.identifier }} ({{ model.description}})\n" +
      "configure\n" +
      "interface {{ model.identifier}}\n" +
      "description {{ model.description}}\n" +
      "auto-negotiate\n" +
      "no lldp transmit\n" +
      "no lldp receive\n" +
      "no port lacpmode\n" +
      "no spanning-tree port mode\n" +
      "no vlan pvid\n" +
      "vlan participation exclude 1\n" +
      "vlan acceptframe {{ model.acceptframe }}\n" +
      "vlan ingressfilter\n" +
      "\n" +
      "{{ results.pvid }}" +
      "{{ results.vlans }}" +
      "no shutdown\n" +
      "exit\n" +
      "\n" +
      "exit";
    return {
      template: template
    };
  });
