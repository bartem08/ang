angular.module('ang').factory('angErrorHandlerInterceptor', [
    '$q',
    '$rootScope',
    AngErrorHandlerInterceptor
]).config(function ($httpProvider) {
    $httpProvider.interceptors.push('angErrorHandlerInterceptor');
});

function AngErrorHandlerInterceptor($q, $rootScope) {

    const BAD_REQUEST  = 400,
          NOT_FOUND    = 404,
          SERVER_ERROR = 500;

    var getMessage = function(response) {

        switch (response.status) {
            case BAD_REQUEST:
                return "Invalid data";
            case NOT_FOUND:
                return "Not found url";
            case SERVER_ERROR:
                return response.data;
            default:
                return response.data;
        }
    };

    return {

        'responseError': function(response) {
            $rootScope.$emit('showErrorMessage', getMessage(response));
            return $q.reject(response);
        }
    };
}