'use-strict';
(function () {
    class BedManagementController {
        constructor($scope) {
            $vm = $scope;
        }
    }

    BedManagementController.$inject = ['$scope'];

    angular.module('bedManagementApp')
        .controller('BedManagementController', BedManagementController);
}());