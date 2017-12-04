angular.module('ang').factory('bookService', [
   '$http',
   bookService
]);

function bookService($http) {

    return {
        getAllBooks: function () {
            return $http.get('/books/all');
        },

        getBookById: function (id) {
            return $http.get('/books/' + id);
        },

        createBook: function (scopeObject) {
            var bookJson = this._createBookObject(scopeObject);
            return $http.post('/books/create', bookJson)
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