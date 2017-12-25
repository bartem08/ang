angular.module('ang').controller('dataSourceCreate', [
    '$state',
    'dataSourceService',
    DataSourceCreateController
]);

function DataSourceCreateController($state, dataSourceService) {
    var vm = this;

    vm.create = function () {
        dataSourceService.createDataSource(vm.dataSource)
            .then(function () { $state.go('dataSourceList'); });
    }
}