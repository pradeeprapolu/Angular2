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
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var forms_1 = require("@angular/forms");
var messages_component_1 = require("./messages.component");
var favorite_component_1 = require("./favorite.component");
var messages_service_1 = require("./messages.service");
var auto_grow_directive_1 = require("./auto-grow.directive");
var common_1 = require("@angular/common");
var contact_form_component_1 = require("./contact-form.component");
var signup_form_component_1 = require("./signup-form.component");
//import {   FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            common_1.CommonModule,
            forms_1.ReactiveFormsModule
        ],
        declarations: [
            app_component_1.AppComponent,
            messages_component_1.MessagesComponent,
            favorite_component_1.FavoriteComponent,
            auto_grow_directive_1.AutoGrowDirective,
            contact_form_component_1.ContactFormComponent,
            signup_form_component_1.SignUpFormComponent
        ],
        bootstrap: [app_component_1.AppComponent],
        providers: [messages_service_1.MessagesService]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map