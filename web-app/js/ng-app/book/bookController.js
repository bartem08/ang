angular.module('ang')
    .controller('bookController', function ($scope, bookService) {

        $scope.getAll = function () {
            bookService.getAllBooks().then(function (response) {
                $scope.books = response.data
            });
        };

        $scope.getById = function (id) {
            bookService.getBookById(id).then(function (response) {
                $scope.book = response.data
            })
        }
    });