angular.module('ang').controller('BookDetailsController', [
   '$stateParams',
   'BookService',
   BookDetailsController
]);

function BookDetailsController($stateParams, BookService) {
    var vm = this;

    BookService.getBookById($stateParams.id).then(function (response) {
        vm.book = response.data;
    });
}