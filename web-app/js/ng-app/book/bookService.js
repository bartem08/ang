angular.module('ang')
    .service('bookService', function ($http) {
        return {

            getAllBooks: function () {
                return $http({
                    method  : "GET",
                    url     : "http://localhost:8080/ang/books/all"
                })
            },

            getBookById: function (id) {
                return $http({
                    method  : "GET",
                    url     : "http://localhost:8080/ang/books/" + id
                })
            }
        }
    });