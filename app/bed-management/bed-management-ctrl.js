'use-strict';
(function () {
    class BedManagementController {
        constructor($scope) {

            var vm = $scope;
            vm.viewBy = "viewByWard";

            vm.goto = function (viewType) {
                vm.viewBy = viewType;
            };

            vm.statusColorCodes = [
                { status: "Occupied", colorCode: "#4CAF50" },
                { status: "Available", colorCode: "#607D8B" },
                { status: "Discharge Advised", colorCode: "#9C27B0" },
                { status: "Reserved", colorCode: "#0091EA" },
                { status: "Under Preaparation", colorCode: "#FF9800" },
                { status: "Blocked", colorCode: "#F44336" },
            ];

            vm.getStatusColorCode = function (status) {
                let statusColorCode = vm.statusColorCodes.find(x => x.status == status);
                let colorStyle = statusColorCode != undefined ? `{'color': '${statusColorCode.colorCode}'}` : "{'color': 'inherit'}";
                return colorStyle;
            };

            vm.wards = [
                {
                    wardID: 1, ward: "Ward A", rooms: [
                        {
                            roomID: 1, room: "Semi Private", wardID: 1, beds: [
                                { bedID: 1, bed: "109-A", patient: "Sarah", status: "Occupied", roomID: 1 },
                                { bedID: 2, bed: "109-A", patient: "David Ross", status: "Available", roomID: 1 },
                                { bedID: 3, bed: "109-A", patient: "Rita Fiona", status: "Discharge Advised", roomID: 1 }
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
                columns: [
                    { field: "ward", title: "Ward" }
                ],
                attributes: {
                    class: "font-bold",
                    style: ""
                },
                noRecords: true
            };

            vm.detailGridOptions = function (dataItem) {
                console.log(vm.rooms);
                return {
                    dataSource: vm.rooms.filter(r => r.wardID == dataItem.wardID),
                    columns: [
                        { field: "room", title: "Room" }
                    ],
                    attributes: {
                        class: "font-bold",
                        style: ""
                    },
                    noRecords: true
                };
            };

            vm.detailGridOptions1 = function (dataItem) {
                console.log(vm.beds);
                return {
                    dataSource: vm.beds.filter(b => b.roomID == dataItem.roomID),
                    columns: [
                        { field: "bed", title: "Bed", width: "320px" },
                        { field: "patient", title: "Patient", width: "320px" },
                        {
                            field: "status", title: "Status", width: "320px",
                            attributes: {
                                class: "font-bold",
                                style: ""
                            }
                        }
                    ],
                    rowTemplate: kendo.template($("#rowTemplate").html()),
                    noRecords: true
                };
            };



        }
    }

    BedManagementController.$inject = ['$scope'];

    angular.module('bedManagementApp')
        .controller('BedManagementController', BedManagementController);
}());