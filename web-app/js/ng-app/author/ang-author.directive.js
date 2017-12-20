angular.module('ang').directive('angAuthorDirective', AngAuthorDirective);

function AngAuthorDirective() {

    return {
        restrict     : 'E',
        controller   : 'AuthorController',
        controllerAs : 'authorCtrl',
        templateUrl  : '/templates/author/select-author.tmpl.html'
    };
}

