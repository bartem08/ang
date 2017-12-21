angular.module('ang').service('bookService', [
   '$http',
   BookService
]);

function BookService($http) {

    this.getAllBooks = function() {
        return $http.get('/books');
    };

    this.getBookById = function(id) {
        return $http.get('/books/' + id);
    };
    
    this.createBook = function(bookToCreate) {
        var bookJson = this._createBookObject(bookToCreate);

        return $http.post('/books', bookJson);
    };

    this._createBookObject = function(bookToCreate) {
        return {
            name    : bookToCreate.name,
            genre   : bookToCreate.genre,
            year    : bookToCreate.year,
            author  : bookToCreate.author
        };
    };

    this.deleteBook = function(id) {
        return $http.delete('/books/' + id);
    };
}