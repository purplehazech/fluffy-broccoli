'use strict';

/**
 * @ngdoc overview
 * @name fluffyBroccoliApp
 * @description
 * # fluffyBroccoliApp
 *
 * Main module of the application.
 */
angular
  .module('fluffyBroccoliApp', [
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'schemaForm'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
