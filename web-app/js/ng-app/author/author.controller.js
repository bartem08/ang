angular.module('ang').controller('AuthorController', [
    '$scope',
    'authorService',
    AuthorController
]);

function AuthorController($scope, authorService) {
    var vm = this;

    $scope.$on('getAuthorID', function (event) {
        event.targetScope.authorId = vm.authorId;
    });

    authorService.findAllAuthors().then(function (response) {
        vm.authors = response.data;
    });
}