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
var core_1 = require('@angular/core');
var Ride = (function () {
    function Ride() {
    }
    return Ride;
}());
exports.Ride = Ride;
var AppComponent = (function () {
    function AppComponent() {
        this.title = "Tarifas Para El Taxi";
        this.units = 0;
        this.airport = false;
        this.app = false;
        this.festives = false;
        this.Total = 0;
        this.ride = {
            airport: 3900,
            app: 700,
            units: 50,
            festives: 1900,
            default: 4100
        };
    }
    AppComponent.prototype.onChange = function (event) {
        /*var isChecked = event.currentTarget.checked;*/
        var flag = true;
    };
    AppComponent.prototype.calculateprice = function (flag) {
        if (flag === true) {
            this.Total += this.ride.airport + this.ride.app + this.ride.festives;
        }
        else {
            this.Total -= this.ride.airport - this.ride.app - this.ride.festives;
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/templates/Calculadora.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map