angular.module('ang').factory('bookService', [
   '$http',
   bookService
]);

function bookService($http) {

    return {
        getAllBooks: function () {
            return $http.get('/books');
        },

        getBookById: function (id) {
            return $http.get('/books/' + id);
        },

        createBook: function (scopeObject) {
            var bookJson = this._createBookObject(scopeObject);
            return $http.post('/books', bookJson);
        },

        deleteBook: function (id) {
            return $http.delete('/books/' + id);
        },

        _createBookObject: function (scopeObject) {
            return {
                name    : scopeObject.name,
                genre   : scopeObject.genre,
                year    : scopeObject.year,
                author  : {
                    id : scopeObject.authorId
                }
            }
        }
    }
}