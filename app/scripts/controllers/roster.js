'use strict';

/**
 * @ngdoc function
 * @name ranelaghfcApp.controller:RosterCtrl
 * @description
 * # RosterCtrl
 * Controller of the ranelaghfcApp
 */
angular.module('ranelaghfcApp')
  .controller('RosterCtrl', function($scope, tabletopData) {
    $scope.data = tabletopData; // This will be a resolved promise!
  });
