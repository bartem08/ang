angular.module('ang').service('bookService', [
   '$http',
   bookService
]);

function bookService($http) {

    return {
        getAllBooks: function () {
            return $http.get('/books/all');
        }
    }
}