angular.module('ang').controller('authorController', [
    '$scope',
    'authorService',
    authorController
]);

function authorController($scope, authorService) {

    authorService.findAllAuthors().then(function (response) {
        $scope.authors = response.data;
    })
}