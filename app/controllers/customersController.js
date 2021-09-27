var app = angular.module('myApp', []);
app.controller('CustomersController', function ($scope) {
  $scope.sortBy = 'name';
  $scope.reverse = false;

  $scope.customers = [{joined: '2000-12-02', name: 'John', city: 'Chandler', orderTotal: '10'}, {joined: '2010-10-22', name: 'Ross', city: 'Berlin', orderTotal: '15'}, {joined: '2010-02-15', name: 'Pete', city: 'Oslo', orderTotal: '12'}];
  $scope.doSort = function(propName) {
    $scope.sortBy = propName;
    $scope.reverse = !$scope.reverse;
  };
});
