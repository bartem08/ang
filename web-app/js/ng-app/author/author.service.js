angular.module('ang').factory('AuthorService', [
    '$http',
    AuthorService
]);

function AuthorService($http) {

    function findAllAuthors() {
        return $http.get('/authors');
    }

    return {
        findAllAuthors: findAllAuthors
    };
}