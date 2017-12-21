angular.module('ang').directive('angErrorHandlerDirective', [
    AngErrorHandlerDirective
]);

function AngErrorHandlerDirective() {

    return {
        restrict     : 'E',
        controller   : 'errorController',
        controllerAs : 'errorCtrl',
        templateUrl  : '/templates/error-handler.tmpl.html'
    };
}