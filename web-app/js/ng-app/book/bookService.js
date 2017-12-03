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

        createBook: function (name, genre, year, author) {
            return $http.post('/books/create', {
                name    : name,
                genre   : genre,
                year    : year,
                author  : {
                    id : author.id
                }
            })
        }
    }
}