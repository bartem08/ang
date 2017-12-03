angular.module('ang').controller('bookController', [
    '$scope',
    'bookService',
    bookController
]);

function bookController($scope, bookService) {

    $scope.books = bookService.getAllBooks().then(function (response) {
        $scope.books = response.data
    });
}