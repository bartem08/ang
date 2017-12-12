angular.module('ang').directive('past', [
    pastValidator
]);

function pastValidator() {

    return {
        require : 'ngModel',
        link    : function (scope, elm, attrs, ctrl) {
            ctrl.$validators.past = function (modelValue) {
                return modelValue <= (new Date().getFullYear());
            }
        }
    }
}