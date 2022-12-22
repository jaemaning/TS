"use strict";
exports.__esModule = true;
var 변수 = { wheel: 4, model: '벤츠' };
var 함수 = function (a) {
    console.log(a);
};
var Animal;
(function (Animal) {
    ;
})(Animal || (Animal = {}));
var dog1 = 'bark';
var dog2 = { name: 'paw' };
// Generic 함수
function genericFun(x) {
    return x[0];
}
var a = genericFun([4, 2]);
var b = genericFun(['4', '2']);
console.log(a);
console.log(b); // a :unknown 타입 => narrowing 해줘야됨
//narrowing 하기 싫으면 Generic 함수 써야함 => 함수 만들때 <> 만들기
function genericFun2(x) {
    return x - 1;
} // 불확실하여 에러 이 경우엔 generic function에 타입파라미터를 제한줘야됨(extends사용)
//test
function 함수1(x) {
    console.log(x.length);
}
함수1('hello');
함수1(['kim', 'park']);
var data = '{"name" : "dog", "age" : 1 }';
function 함수2(data) {
    return JSON.parse(data);
}
var result = 함수2(data);
console.log(result);
var Person = /** @class */ (function () {
    function Person(a) {
        this.name = a;
    }
    return Person;
}());
var person = new Person('어쩌구');
person.name; //any 타입이 되었넹 
var 멍멍 = ['dog', true]; // tuple type
var 내가먹은음식 = ['피자', 20000, true];
var arr = ['동서녹차', 4000, true, false, true, true, false, true];
function 내함수는() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    console.log(a);
}
function 다른함수() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    var 문자들 = [];
    var 숫자들 = [];
    var b = 0;
    for (var _a = 0, a_1 = a; _a < a_1.length; _a++) {
        b = a_1[_a];
        if (typeof b === 'string') {
            문자들.push(b);
        }
        else if (typeof b === 'number') {
            숫자들.push(b);
        }
    }
    return [문자들, 숫자들];
}
console.log(다른함수('b', 5, 6, 8, 'a'));
