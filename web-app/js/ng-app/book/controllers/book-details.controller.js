angular.module('ang').controller('bookDetailsController', [
   '$stateParams',
   'bookService',
   BookDetailsController
]);

function BookDetailsController($stateParams, bookService) {
    var vm = this;

    bookService.getBookById($stateParams.id).then(function (response) {
        vm.book = response.data;
    });
}