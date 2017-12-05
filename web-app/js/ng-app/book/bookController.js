angular.module('ang').controller('bookController', [
    '$scope',
    '$route',
    'bookService',
    bookController
]);

function bookController($scope, $route, bookService) {

    bookService.getAllBooks().then(function (response) {
        $scope.books = response.data
    });

    $scope.deleteBook = function (id) {
        bookService.deleteBook(id).then(function () {
            $route.reload();
        })
    }
}