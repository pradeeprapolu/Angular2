"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var usernameValidator_1 = require("./usernameValidator");
var SignUpFormComponent = (function () {
    function SignUpFormComponent(fb) {
        //  this.form = fb.group({
        //     username: ['',Validators.required],
        //     password: ['',Validators.required]
        // })
        this.form = fb.group({
            username: ['', forms_1.Validators.compose([
                    forms_1.Validators.required,
                    usernameValidator_1.UsernameValidators.cannotContainSpace
                ]), usernameValidator_1.UsernameValidators.shouldBeUnique],
            password: ['', forms_1.Validators.required]
        });
    }
    // form = new FormGroup({                   //This is using FormGroup & FormControl
    //     username: new FormControl('', Validators.required),
    //     password: new FormControl('', Validators.required)
    // });
    SignUpFormComponent.prototype.signup = function () {
        console.log(this.form.value);
    };
    return SignUpFormComponent;
}());
SignUpFormComponent = __decorate([
    core_1.Component({
        selector: 'signup-form',
        templateUrl: 'app/signup-form.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], SignUpFormComponent);
exports.SignUpFormComponent = SignUpFormComponent;
//# sourceMappingURL=signup-form.component.js.map