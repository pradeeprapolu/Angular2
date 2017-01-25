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
var AppComponent = (function () {
    function AppComponent() {
        this.title = "Angular App";
        this.imageUrl = "http://lorempixel.com/400/200";
        this.isActive = false;
        this.post = {
            title: "Title",
            isFavorite: true
        };
        this.courses = [];
        this.viewMode = 'map';
    }
    AppComponent.prototype.onClick = function ($event) {
        // $event.stopPropagation(); - to stop propagating the mouse click event to next higher level element
        console.log("Clicked", $event);
    };
    AppComponent.prototype.onDivClick = function () {
        console.log("Handled by Div");
    };
    AppComponent.prototype.onFavoriteChange = function ($event) {
        console.log($event);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n\n  <signup-form></signup-form>\n    <!-- <contact-form></contact-form>-->\n\n <!-- <messages></messages>\n  <h1>{{title}}</h1>\n  <h1 textContent =\"title\"></h1>\n\n  <img src =\"{{imageUrl}}\" />\n  <img [src] =\"imageUrl\" />\n  <img bind-src = \"imageUrl\" />\n\n  <button \n    class = \"btn btn-primary\"\n    [style.backgroundColor] =\"isActive? 'blue' : 'red'\" >Submit</button>\n\n    <div (click) =\"onDivClick()\">\n      <button (click)=\"onClick($event)\">EventSubmit</button>\n      <button on-click=\"onClick($event)\">EventSubmit</button>\n    </div>\n\n    <input type = \"text\" [value] =\"title\" (input)=\"title = $event.target.value\" /> \n    <input type=\"text\" [(ngModel)] = \"title\" />\n    <input type=\"text\" bindon-ngModel=\"title\" />\n\n    <input type =\"button\" (click) =\"title = ''\" value =\"Clear\" />   \n\n    Preview: {{title}} -->\n\n\n     <!--   <favorite [isFavorite] = \"post.isFavorite\" (change)=\"onFavoriteChange($event)\"></favorite>\n\n        <div *ngIf =\"courses.length > 0\">\n          List of courses\n        </div>   -->   \n        \n        <!--     <div [hidden] =\"courses.length == 0\">\n          List of courses\n        </div>      This div will be hidden if length is 0\n\n\n        <div *ngIf =\"courses.length ==  0\">\n          You don't have any courses yet.\n        </div>\n\n             <div [hidden] =\"courses.length > 0\">\n          You don't have any courses yet.\n        </div>      This div will be hidden if length is greater than 0   -->\n\n         <!-- <ul>\n          <li [class.active] = \"viewMode ='map'\"><a (click) =\"viewMode = 'map'\">Map View</a></li>\n           <li [class.active] = \"viewMode ='list'\"><a (click) =\"viewMode = 'list'\">List View</a></li>\n        </ul>\n        <div [ngSwitch] = \"viewMode\">\n          <template [ngSwitchCase] =\"'map'\" ngSwitchDefault>Map View Content</template>   // ngSwitchDefault is for default when viewMode value doesn't match with any option\n          <template [ngSwitchCase] =\"'list'\">List View Content</template> \n        </div>  -->\n\n  "
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map