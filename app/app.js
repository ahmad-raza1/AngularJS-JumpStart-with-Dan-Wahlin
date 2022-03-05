'use-strict';
(function () {
  var app = angular.module('bedManagementApp', ['ngMaterial', 'ngMessages', 'ui.router', 'ngRoute']);
  app.config(($routeProvider) => {
    $routeProvider.
      when('/', {
        templateUrl: 'app/bed-management/bed-management.html',
        controller: 'BedManagementController',
        controllerAs: 'ctrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  });

}());
