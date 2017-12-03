angular.module('ang').factory('authorService', [
    '$http',
    authorService
]);

function authorService($http) {

    return {
        findAllAuthors: function () {
            return $http.get('/authors/all');
        },

        getAuthorById: function (id) {
            return $http.get('/authors/' + id);
        }
    };
}