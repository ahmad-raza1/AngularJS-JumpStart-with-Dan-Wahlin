'use-strict';
(function () {
    class BedManagementController {
        constructor($scope) {

            var vm = $scope;
            vm.viewBy = "viewByWard";

            vm.goto = function (viewType) {
                vm.viewBy = viewType;
            };

            vm.wards = [
                {
                    wardID: 1, ward: "Ward A", rooms: [
                        {
                            roomID: 1, room: "Semi Private", wardID: 1, beds: [
                                { bedId: 1, bed: "109-A", patient: "Sarah", status: "Occupied", roomID: 1 },
                                { bedId: 2, bed: "109-A", patient: "David Ross", status: "Available", roomID: 1 },
                                { bedId: 3, bed: "109-A", patient: "Rita Fiona", status: "Discharge Advised", roomID: 1 }
                            ]
                        },
                        { roomID: 2, room: "Deluxe", wardID: 1 }
                    ]
                },
                {
                    wardID: 2, ward: "Ward B", rooms: [
                        { roomID: 3, room: "VIP", wardID: 2, beds: [] },
                        { roomID: 4, room: "General", wardID: 2, beds: [] }
                    ]
                }
            ]

            vm.rooms = vm.wards.map(w => w.rooms); vm.rooms = [].concat.apply([], vm.rooms).filter(r => r != undefined);
            vm.beds = vm.rooms.map(b => b.beds); vm.beds = [].concat.apply([], vm.beds).filter(b => b != undefined);

            vm.mainGridOptions = {
                dataSource: vm.wards,
                columns: [{
                    field: "ward",
                    title: "Ward"
                }
                ]
            };

            vm.detailGridOptions = function (dataItem) {
                console.log(vm.rooms);
                return {
                    dataSource: vm.rooms.filter(r => r.wardID == dataItem.wardID),
                    columns: [
                        { field: "room", title: "Room" }
                    ]
                };
            };

            vm.detailGridOptions1 = function (dataItem) {
                console.log(vm.beds);
                return {
                    dataSource: vm.beds.filter(b => b.roomID == dataItem.roomID),
                    columns: [
                        { field: "bed", title: "Bed", width: "190px" },
                        { field: "patient", title: "Patient", width: "190px" },
                        { field: "status", title: "Status", width: "190px" },
                        {
                            field: "",
                            template: "<md-icon class='material-icons'>more_vert</md-icon>"
                        }
                    ]
                };
            };



        }
    }

    BedManagementController.$inject = ['$scope'];

    angular.module('bedManagementApp')
        .controller('BedManagementController', BedManagementController);
}());