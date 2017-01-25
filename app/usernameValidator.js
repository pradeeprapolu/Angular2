"use strict";
var UsernameValidators = (function () {
    function UsernameValidators() {
    }
    UsernameValidators.shouldBeUnique = function (control) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                if (control.value == "mosh")
                    resolve({ shouldBeUnique: true });
                else
                    resolve(null);
            }, 1000);
        });
    };
    UsernameValidators.cannotContainSpace = function (control) {
        if (control.value.indexOf(' ') >= 0) {
            return { cannotContainSpace: true }; //in case if it has spaces
        }
        return null; //in case no spaces. I.e validation successful
    };
    return UsernameValidators;
}());
exports.UsernameValidators = UsernameValidators;
//# sourceMappingURL=usernameValidator.js.map