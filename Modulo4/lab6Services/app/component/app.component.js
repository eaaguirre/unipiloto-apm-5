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
var AppComponent = (function () {
    function AppComponent() {
        this.tittle = "SHOOL";
        this.students = STUDENTS;
        this.teacher = TEACHERS;
    }
    AppComponent.prototype.onSelect = function (student) {
        this.selected = student;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/templates/school.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
var STUDENTS = [
    {
        id: 1,
        name: "Edinson",
        class: ["Biologia", "Geografia"],
        grade: 4
    },
    {
        id: 2,
        name: "German",
        class: ["matematicas", "filosofia"],
        grade: 5
    },
    {
        id: 3,
        name: "pedro",
        class: ["algebra", "sociales"],
        grade: 2
    }
];
var TEACHERS = [
    {
        id: 1,
        name: "juan",
        rooms: [301, 201, 603],
        studies: ["bilogia", "Geografia"]
    },
    {
        id: 2,
        name: "griselda",
        rooms: [501, 602, 603],
        studies: ["bilogia", "Geografia"]
    },
    {
        id: 3,
        name: "pancracia",
        rooms: [105, 205, 603],
        studies: ["biologia", "Geografia"]
    }
];
//# sourceMappingURL=app.component.js.map