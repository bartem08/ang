angular.module('ang').controller('BookDetailsController', [
   '$scope',
   '$routeParams',
   'BookService',
   BookDetailsController
]);

function BookDetailsController($scope, $routeParams, BookService) {

    BookService.getBookById($routeParams.id).then(function (response) {
        $scope.book = response.data;
    });
}