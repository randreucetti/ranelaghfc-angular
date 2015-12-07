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
    'ngTouch',
    'times.tabletop'
  ])
  .config(function($routeProvider, TabletopProvider) {
    TabletopProvider.setTabletopOptions({
      key: 'https://docs.google.com/spreadsheets/d/1HZX_QkcwlVzkNiPUsn-yjRX9GrUVLxwWgqUBTRP58MM/edit?usp=sharing',
    }); 
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
        resolve: {
          tabletopData: 'Tabletop'
        },
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
