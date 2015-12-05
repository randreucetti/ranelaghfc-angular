'use strict';

/**
 * @ngdoc overview
 * @name ranelaghfcApp
 * @description
 * # ranelaghfcApp
 *
 * Main module of the application.
 */
angular
  .module('ranelaghfcApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function($routeProvider) {
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
      .when('/roster', {
        templateUrl: 'views/roster.html',
        controller: 'RosterCtrl',
        controllerAs: 'roster'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
