'use-strict';
(function () {
    class BedManagementController {
        constructor($scope) {

            var vm = $scope;
            vm.metricsTemplateID = "metrics.tmp.html";
            vm.viewBy = "viewByWard";

            vm.metrics = [
                "one", "two", "three", "four"
            ];

            vm.goto = function (viewType) {
                vm.viewBy = viewType;
            };


        }
    }

    BedManagementController.$inject = ['$scope'];

    angular.module('bedManagementApp')
        .controller('BedManagementController', BedManagementController);
}());