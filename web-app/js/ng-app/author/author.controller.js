angular.module('ang').controller('AuthorController', [
    '$scope',
    'AuthorService',
    AuthorController
]);

function AuthorController($scope, AuthorService) {
    var vm = this;

    $scope.$on('getAuthorID', function (event) {
        event.targetScope.authorId = vm.authorId;
    });

    AuthorService.findAllAuthors().then(function (response) {
        vm.authors = response.data;
    }, function (response) {
        console.log(response.message);
    });
}