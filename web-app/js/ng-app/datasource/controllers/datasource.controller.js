angular.module('ang').controller('dataSource', [
    '$scope',
    'dataSourceService',
    DataSourceController
]);

function DataSourceController($scope, dataSourceService) {
    var vm = this;

    dataSourceService.getAllDataSources().then(function (response) {
        vm.dataSources = response.data;
    });

    vm.selectDataSource = function(dataSourceName) {
        $scope.$broadcast('selectDataSource', {
            dataSourceName: dataSourceName
        });
    };
}