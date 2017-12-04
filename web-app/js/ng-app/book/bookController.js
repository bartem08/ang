angular.module('ang').controller('bookController', [
    '$scope',
    '$location',
    'bookService',
    bookController
]);

function bookController($scope, $location, bookService) {

    bookService.getAllBooks().then(function (response) {
        $scope.books = response.data
    });

    $scope.createBook = function () {
        bookService.createBook($scope).then(function () {
            $location.path('book/list');
        })
    };

    $scope.getBook = function (id) {
        var responseData = {};
        bookService.getBookById(id).then(function (response) {
            responseData = response.data
        });
        return responseData;
    };
}