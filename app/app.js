'use-strict';
(function () {
  var app = angular.module('radiationOncologyApp', ['ngMaterial', 'ngMessages', 'ui.router', 'ngRoute', 'angularCSS', 'kendo.directives']);
  app.config(($routeProvider) => {
    $routeProvider.
      when('/', {
        templateUrl: 'app/radiation-oncology/radiation-oncology.html',
        controller: 'RadiationOncologyController',
        controllerAs: 'ctrl',
        css: 'app/radiation-oncology/css/radiation-oncology.css'
      }).
      otherwise({
        redirectTo: '/'
      });
  });

}());
