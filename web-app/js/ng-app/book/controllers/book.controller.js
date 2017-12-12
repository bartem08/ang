angular.module('ang').controller('BookController', [
    '$route',
    'BookService',
    BookController
]);

function BookController($route, BookService) {
    var vm = this;

    vm.reverse = false;

    BookService.getAllBooks().then(function (response) {
        vm.books = response.data
    }, function (response) {
        console.log(response.message);
    });

    vm.changeSort = function (field) {
        if (vm.shouldOrderBy(field)) {
            vm.reverse = !vm.reverse;
        }
        vm.sort = field;
    };

    vm.shouldOrderBy = function (field) {
        return field === vm.sort;
    };

    vm.deleteBook = function (id) {
        BookService.deleteBook(id).then(function () {
            $route.reload();
        })
    }
}