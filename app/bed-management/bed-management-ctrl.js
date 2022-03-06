'use-strict';
(function () {
    class BedManagementController {
        constructor($scope) {

            var vm = $scope;
            vm.viewBy = "viewByWard";

            vm.goto = function (viewType) {
                vm.viewBy = viewType;
            };


        }
    }

    BedManagementController.$inject = ['$scope'];

    angular.module('bedManagementApp')
        .controller('BedManagementController', BedManagementController);
}());