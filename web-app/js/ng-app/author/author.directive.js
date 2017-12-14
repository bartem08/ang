angular.module('ang').directive('angAuthor', AngAuthor);

function AngAuthor() {

    return {
        restrict     : 'E',
        controller   : 'AuthorController',
        controllerAs : 'authorCtrl',
        templateUrl  : '/templates/author/select-author.tmpl.html'
    };
}

