angular.module('ang').controller('bookDetailsController', [
   '$scope',
   '$routeParams',
   'bookService',
   bookDetailsController
]);

function bookDetailsController($scope, $routeParams, bookService) {

    bookService.getBookById($routeParams.id).then(function (response) {
        $scope.book = response.data;
    });
}