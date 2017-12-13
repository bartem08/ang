angular.module('ang').controller('CreateBookController', [
    '$location',
    'BookService',
    CreateBookController
]);

function CreateBookController($location, BookService) {
    var vm = this;

    vm.MIN_NAME_FIELD_LENGTH = 3;

    vm.INPUT_PLACEHOLDERS = {
        bookName  : 'Enter book name',
        bookGenre : 'Enter book genre',
        bookYear  : 'Enter book year'
    };

    vm.createNewBook = function() {
        BookService.createBook(vm).then(function () {
            $location.path('book/list');
        });
    };
}