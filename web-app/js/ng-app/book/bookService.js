angular.module('ang')
    .factory('bookService', function () {
    return {
        getAllBooks : function ($http) {
            var data = "";
            $http({
                method  : "GET",
                url     : "http://localhost:8080/ang/books/all"
            }).then(function (response) {
                data = response.data
            }, function (response) {
                data = response.status;
            });
            return data;
        }
    }});