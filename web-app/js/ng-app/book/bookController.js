angular.module('ang').controller('bookController', [
    '$route',
    'bookService',
    bookController
]);

function bookController($route, bookService) {
    var vm = this;
    vm.reverse = false;

    bookService.getAllBooks().then(function (response) {
        vm.books = response.data
    });

    vm.changeSort = function (field) {
        if (vm.shouldOrderBy(field)) {
            vm.reverse = !vm.reverse;
        }
        vm.sort = field;
    };

    vm.shouldOrderBy = function (field) {
        return field === vm.sort
    };

    vm.deleteBook = function (id) {
        bookService.deleteBook(id).then(function () {
            $route.reload();
        })
    }
}