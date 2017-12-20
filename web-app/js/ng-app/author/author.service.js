angular.module('ang').service('authorService', [
    '$http',
    AuthorService
]);

function AuthorService($http) {

    this.findAllAuthors = function() {
        return $http.get('/authors');
    }
}