'use strict';

describe('Controller: RosterCtrl', function () {

  // load the controller's module
  beforeEach(module('ranelaghfcApp'));

  var RosterCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RosterCtrl = $controller('RosterCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));


});
