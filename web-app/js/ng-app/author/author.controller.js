angular.module('ang').controller('AuthorController', [
    '$scope',
    'AuthorService',
    AuthorController
]);

function AuthorController($scope, AuthorService) {

    AuthorService.findAllAuthors().then(function (response) {
        $scope.authors = response.data;
    }, function (response) {
        console.log(response.message);
    })
}