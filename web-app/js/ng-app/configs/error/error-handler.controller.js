angular.module('ang').controller('errorController', [
    '$scope',
    ErrorController
]);

function ErrorController($scope) {

    $scope.notifyError = false;

    $scope.$on('showErrorMessage', function (event, args) {
        $scope.notifyError = true;
        $scope.errorMessage = args;
    });
}