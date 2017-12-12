angular.module('ang').controller('BookDetailsController', [
   '$routeParams',
   'BookService',
   BookDetailsController
]);

function BookDetailsController($routeParams, BookService) {
    var vm = this;

    BookService.getBookById($routeParams.id).then(function (response) {
        vm.book = response.data;
    });
}