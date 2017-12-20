angular.module('ang').directive('angPastValidator', [
    AngPastValidatorDirective
]);

function AngPastValidatorDirective() {

    return {
        require : 'ngModel',
        link    : function (scope, elm, attrs, ctrl) {
            ctrl.$validators.past = function (modelValue) {
                return modelValue <= (new Date()).getFullYear();
            }
        }
    }
}