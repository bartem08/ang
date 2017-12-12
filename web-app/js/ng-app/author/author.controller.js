angular.module('ang').controller('AuthorController', [
    'AuthorService',
    AuthorController
]);

function AuthorController(AuthorService) {
    var vm = this;

    AuthorService.findAllAuthors().then(function (response) {
        vm.authors = response.data;
    }, function (response) {
        console.log(response.message);
    })
}