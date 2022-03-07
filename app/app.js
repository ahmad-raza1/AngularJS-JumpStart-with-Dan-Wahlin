'use-strict';
(function () {
  var app = angular.module('bedManagementApp', ['ngMaterial', 'ngMessages', 'ui.router', 'ngRoute', 'angularCSS', 'kendo.directives']);
  app.config(($routeProvider) => {
    $routeProvider.
      when('/', {
        templateUrl: 'app/bed-management/bed-management.html',
        controller: 'BedManagementController',
        controllerAs: 'ctrl',
        css: 'app/bed-management/css/bed-management.css'
      }).
      otherwise({
        redirectTo: '/'
      });
  });

}());
