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
}