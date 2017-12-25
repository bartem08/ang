angular.module('ang').controller('dataSourceDelete', [
    '$scope',
    '$state',
    'dataSourceService',
    DataSourceDeleteController
]);

function DataSourceDeleteController($scope, $state, dataSourceService) {
    var vm = this;

    if (!vm.dataSources) {
        dataSourceService.getAllDataSources().then(function (response) {
            vm.dataSources = response.data;
        });
    }

    $scope.$on('selectDataSource', function (event, args) {
        vm.dataSourceName = args.dataSourceName;
    });

    vm.delete = function () {
        if (!vm.dataSourceToDelete) {
            $scope.$emit('showErrorMessage', 'Select datasource first.');
            return;
        }
        dataSourceService.deleteDataSource(vm.dataSourceToDelete)
            .then(function () { $state.reload(); });
    }
}