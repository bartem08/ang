angular.module('ang').controller('createBookController', [
    '$scope',
    '$location',
    'bookService',
    createBookController
]);

function createBookController($scope, $location, bookService) {

    $scope.createNewBook = function() {
        bookService.createBook($scope).then(function () {
            $location.path('book/list');
        });
    };

    $scope.isNameValid = function () {
        var name = $scope.name;
        return name && name.length >= 3
    };

    $scope.isGenreValid = function () {
        var genre = $scope.genre;
        return genre && genre.length >= 3
    };

    $scope.isYearValid = function () {
        var year = $scope.year;
        return year && year >= 1000 && year <= (new Date()).getFullYear()
    };

    $scope.isAuthorValid = function () {
        return $scope.authorId;
    }
}