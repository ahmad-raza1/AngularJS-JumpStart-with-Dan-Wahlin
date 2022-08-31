'use-strict';
(function () {
    class RadiationOncologyController {
        constructor($scope) {
            var vm = $scope;
            vm.demoList = ["lorem", "ispum", "dolor"];

            // model
            vm.radiotherapyDetails = [
                {
                    radiotherapySite: null,
                    planningTechnique: null,
                    radiationTechnique: null,
                    phases: [{ "dose": null, "fraction": null }],
                    totalDose: null
                }
            ];

            vm.addPhaseRow = (index_i, index_j) => {
                if (vm.radiotherapyDetails[index_i].phases.length < 3) {
                    vm.radiotherapyDetails[index_i].phases.push({ "dose": null, "fraction": null });
                }
            };

            vm.removePhaseRow = (index_i, index_j) => {
                vm.radiotherapyDetails[index_i].phases.splice(index_j, 1);
                vm.calcTotalDose(index_i);
            };

            vm.calcTotalDose = (index_i) => {
                if (vm.radiotherapyDetails[index_i].phases.length > 0) {
                    vm.radiotherapyDetails[index_i].totalDose = vm.radiotherapyDetails[index_i].phases.map(item => (item.dose == null || isNaN(item.dose)) || (item.fraction == null || isNaN(item.fraction))
                        ? 0 : parseInt(item.dose) * parseInt(item.fraction))
                        .reduce((prev, curr) => prev + curr, 0);
                }
            };

            vm.addRadiotherapySite = (index_i) => {
                if (vm.radiotherapyDetails.length < 2) {
                    vm.radiotherapyDetails.push({
                        radiotherapySite: null,
                        planningTechnique: null,
                        radiationTechnique: null,
                        phases: [{ "dose": null, "fraction": null }],
                        totalDose: null
                    });
                }
            };

            vm.removeRadiotherapySite = (index_i) => {
                vm.radiotherapyDetails.splice(index_i, 1);
            };


        }
    }

    RadiationOncologyController.$inject = ['$scope'];

    angular.module('radiationOncologyApp')
        .controller('RadiationOncologyController', RadiationOncologyController);
}());