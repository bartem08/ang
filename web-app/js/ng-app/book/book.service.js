angular.module('ang').factory('BookService', [
   '$http',
   BookService
]);

function BookService($http) {

    function getAllBooks() {
        return $http.get('/books');
    }

    function getBookById(id) {
        return $http.get('/books/' + id);
    }
    
    function createBook(bookToCreate) {
        var bookJson = _createBookObject(bookToCreate);

        return $http.post('/books', bookJson);
    }

    function _createBookObject(bookToCreate) {
        return {
            name    : bookToCreate.name,
            genre   : bookToCreate.genre,
            year    : bookToCreate.year,
            author  : bookToCreate.author
        };
    }

    function deleteBook(id) {
        return $http.delete('/books/' + id);
    }

    return {
        getAllBooks : getAllBooks,
        getBookById : getBookById,
        createBook  : createBook,
        deleteBook  : deleteBook
    }
}