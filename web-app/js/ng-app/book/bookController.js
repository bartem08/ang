angular.module('ang')
    .controller('bookController', function ($scope, $http, bookService) {
        $scope.books = bookService.getAllBooks($http)
    });