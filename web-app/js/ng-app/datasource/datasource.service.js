angular.module('ang').service('dataSourceService', [
    '$http',
    DataSourceService
]);

function DataSourceService($http) {

    this.getAllDataSources = function () {
        return $http.get('/dataSources');
    };

    this.getDataSource = function (name) {
        return $http.get('/dataSources/' + name);
    };

    this.updateDataSource = function (name, dataSource) {
        return $http.put('/dataSources/' + name, {}, {
            params: {
                username : dataSource.username,
                password : dataSource.password,
                url      : dataSource.url
            }
        });
    };

    this.createDataSource = function (dataSource) {
        return $http.post('/dataSources', {}, {
            params: {
                name     : dataSource.name,
                username : dataSource.username,
                password : dataSource.password,
                url      : dataSource.url
            }
        });
    };

    this.deleteDataSource = function (name) {
        return $http.delete('/dataSources/' + name);
    }
}