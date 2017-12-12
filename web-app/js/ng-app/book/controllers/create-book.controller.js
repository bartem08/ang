angular.module('ang').controller('CreateBookController', [
    '$scope',
    '$location',
    'BookService',
    CreateBookController
]);

function CreateBookController($scope, $location, BookService) {

    $scope.createNewBook = function() {
        BookService.createBook($scope).then(function () {
            $location.path('book/list');
        });
    };
}