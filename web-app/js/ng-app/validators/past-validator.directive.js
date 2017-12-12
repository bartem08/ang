angular.module('ang').directive('past', [
    PastValidator
]);

function PastValidator() {

    return {
        require : 'ngModel',
        link    : function (scope, elm, attrs, ctrl) {
            ctrl.$validators.past = function (modelValue) {
                return modelValue <= (new Date().getFullYear());
            }
        }
    }
}