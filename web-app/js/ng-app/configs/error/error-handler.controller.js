angular.module('ang').controller('errorController', [
    '$scope',
    ErrorController
]);

function ErrorController($scope) {
    var vm = this;

    vm.notifyError = false;

    $scope.$on('showErrorMessage', function (event, args) {
        vm.notifyError = true;
        vm.errorMessage = args;
    });

    vm.closeBlock = function () {
        vm.notifyError = false;
    }
}