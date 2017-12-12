angular.module('ang').controller('CreateBookController', [
    '$location',
    'BookService',
    CreateBookController
]);

function CreateBookController($location, BookService) {
    var vm = this;

    vm.createNewBook = function() {
        BookService.createBook(vm).then(function () {
            $location.path('book/list');
        });
    };
}