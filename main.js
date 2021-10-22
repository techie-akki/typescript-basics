"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var msg = 'Hello Akki';
console.log(msg);
// variable declaration
var x = 10;
var y = 12;
// let x =20;  once declared same cant be declared again
var sum;
var title = 'crownstack';
// variable types
var isBegginer = true;
var name = 'Akki';
var z = 4;
// name=true; not acceptable type mismatch
var sentence = "My name is " + name + "\nI am a beginner";
console.log(sentence);
// null & undefined
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
// array of same type
var list1 = [1, 2, 3, 4];
var list2 = [1, 2, 3, 4]; // both way we can define
console.log(list1, list2);
// array of mixed type tuple is used
var person1 = ['akki', 25];
console.log(person1);
// enum type (behahes as typedef of c)
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
;
var c = Color.green;
console.log(c); //=>1
// any type
var rand = 10;
rand = true;
rand = 'akki';
//unknown type introduced in v3 to tackle not throwing issue by any type
var myvar = 10;
function hasName(obj) {
    return !!obj && typeof obj == "object" && "name" in obj;
}
if (hasName(myvar)) {
    console.log(myvar.name);
}
//(myvar as string).toUpperCase();  // string is type assertion or typecasting 
//type inference
var a;
a = 10;
a = true;
var b = 20;
// b=true; shows error due to type inference
// union of types
var multiType;
multiType = 20;
multiType = true;
function add(a, b) {
    if (b === void 0) { b = 10; }
    return a + b;
}
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
var p = {
    firstName: 'akki',
    lastName: 'me'
};
fullName(p);
// Class
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.eName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning " + this.eName);
    };
    return Employee;
}());
var emp1 = new Employee('Akki');
console.log(emp1.eName);
emp1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(mName) {
        return _super.call(this, mName) || this;
    }
    Manager.prototype.dWork = function () {
        console.log("Manager delegating work");
    };
    return Manager;
}(Employee));
var m1 = new Manager('bruce');
m1.dWork();
m1.greet();
console.log(m1.eName);
