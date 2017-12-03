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
        var author = {
            id: $scope.authorId
        };
        bookService.createBook($scope.name, $scope.genre, $scope.year, author)
            .then(function (response) {
                $scope.book = response.data;
                $location.path('/book/' + response.data.id);
            })
    };

    $scope.getBook = function (id) {
        bookService.getBookById(id).then(function (response) {
            $scope.book = response.data
        })
    }
}