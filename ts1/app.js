"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var PersonCategory;
(function (PersonCategory) {
    PersonCategory[PersonCategory["Infant"] = 0] = "Infant";
    PersonCategory[PersonCategory["Child"] = 1] = "Child";
    PersonCategory[PersonCategory["Adult"] = 2] = "Adult";
    PersonCategory[PersonCategory["Undefined"] = 3] = "Undefined";
})(PersonCategory || (PersonCategory = {}));
var Person = /** @class */ (function () {
    function Person(dateOfBirth) {
        this.DateBirth = dateOfBirth;
        this.Category = PersonCategory.Undefined;
    }
    Person.prototype.printDetails = function () {
        console.log("---");
        console.log("\u0414\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F - " + this.DateBirth.toDateString());
        console.log("\u044D\u0442\u043E: " + PersonCategory[this.Category]);
        console.log(this.canSignDocs() + " \u043F\u043E\u0434\u043F\u0438\u0441\u044B\u0432\u0430\u0442\u044C \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B");
    };
    return Person;
}());
var Infant = /** @class */ (function (_super) {
    __extends(Infant, _super);
    function Infant(dateOfBirth) {
        var _this = _super.call(this, dateOfBirth) || this;
        _this.Category = PersonCategory.Infant;
        return _this;
    }
    Infant.prototype.canSignDocs = function () {
        return false;
    };
    return Infant;
}(Person));
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child(dateOfBirth) {
        var _this = _super.call(this, dateOfBirth) || this;
        _this.Category = PersonCategory.Child;
        return _this;
    }
    Child.prototype.canSignDocs = function () {
        return false;
    };
    return Child;
}(Person));
var Adult = /** @class */ (function (_super) {
    __extends(Adult, _super);
    function Adult(dateOfBirth) {
        var _this = _super.call(this, dateOfBirth) || this;
        _this.Category = PersonCategory.Adult;
        return _this;
    }
    Adult.prototype.canSignDocs = function () {
        return true;
    };
    return Adult;
}(Person));
var PersonFactory = /** @class */ (function () {
    function PersonFactory() {
    }
    PersonFactory.prototype.getPerson = function (dateOfBirth) {
        var dateNow = new Date(); // сейчас
        var currentMonth = dateNow.getMonth() + 1;
        var currentDate = dateNow.getDate();
        var dateTwoYearsAgo = new Date(dateNow.getFullYear() - 2, currentMonth, currentDate);
        var date18YearsAgo = new Date(dateNow.getFullYear() - 18, currentMonth, currentDate);
        if (dateOfBirth >= dateTwoYearsAgo) {
            return new Infant(dateOfBirth);
        }
        if (dateOfBirth >= date18YearsAgo) {
            return new Child(dateOfBirth);
        }
        return new Adult(dateOfBirth);
    };
    return PersonFactory;
}());
// test
var factory = new PersonFactory();
var some1 = factory.getPerson(new Date(2017, 1, 11));
some1.printDetails();
var some2 = factory.getPerson(new Date(2011, 3, 21));
some2.printDetails();
var some3 = factory.getPerson(new Date(1971, 5, 12));
some3.printDetails();
