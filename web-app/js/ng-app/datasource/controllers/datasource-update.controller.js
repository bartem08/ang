angular.module('ang').controller('dataSourceUpdate', [
    '$scope',
    '$state',
    'dataSourceService',
    DataSourceUpdateController
]);

function DataSourceUpdateController($scope, $state, dataSourceService) {
    var vm = this;

    $scope.$on('selectDataSource', function (event, args) {
        vm.dataSourceName = args.dataSourceName;

        dataSourceService.getDataSource(vm.dataSourceName)
            .then(function (response) {
                vm.dataSource = response.data;
            });
    });

    vm.update = function () {
        if (!vm.dataSourceName) {
            $scope.$emit('showErrorMessage', 'Select datasource first.');
            return;
        }
        dataSourceService.updateDataSource(vm.dataSourceName, vm.dataSource)
            .then(function (response) {
                vm.dataSource = response.data;
                $state.reload();
            });
    };
}