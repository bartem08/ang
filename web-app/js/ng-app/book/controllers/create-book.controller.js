angular.module('ang').controller('createBookController', [
    '$scope',
    '$location',
    'bookService',
    CreateBookController
]);

function CreateBookController($scope, $location, bookService) {
    var vm = this;

    vm.MIN_NAME_FIELD_LENGTH = 3;

    vm.INPUT_PLACEHOLDERS = {
        bookName  : 'Enter book name',
        bookGenre : 'Enter book genre',
        bookYear  : 'Enter book year'
    };

    vm.createNewBook = function() {
        $scope.$broadcast('getAuthorID');
        vm.author = { id: $scope.authorId };

        bookService.createBook(vm).then(function () {
            $location.path('book/list')
        }, function (response) {
            console.log(response.message)
        });
    };
}