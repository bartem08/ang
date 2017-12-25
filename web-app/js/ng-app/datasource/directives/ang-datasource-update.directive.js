angular.module('ang').directive('angDataSourceUpdateDirective', [
    AngDataSourceUpdateDirective
]);

function AngDataSourceUpdateDirective() {
    return {
        restrict     : 'E',
        controller   : 'dataSourceUpdate',
        controllerAs : 'dataSourceUpdateCtrl',
        templateUrl  : '/templates/datasource/datasource-update.tmpl.html'
    };
}