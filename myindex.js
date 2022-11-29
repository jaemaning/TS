// narrowing 방법 5가지
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var title1 = document.querySelector('#title');
// 1
if (title1 !== null) {
    title1.innerHTML = '반가워요';
}
// 2 (추천)
if (title1 instanceof Element) {
    title1.innerHTML = '반가워요';
}
// 3 (추천안함) (그럼 타입스크립트 왜씀?)
var title2 = document.querySelector('#title');
title2.innerHTML = '반가워요';
// 4
if (title1 === null || title1 === void 0 ? void 0 : title1.innerHTML) {
    title1.innerHTML = '반가워요';
}
// 5 = tsconfig.json 에서 "strictNullChecks": true 끄기 (그럼 타입스크립트 왜씀?)
// <a>태그 href 속성 바꾸기 </a> : 태그마다 다름
var 링크 = document.querySelector(".link");
if (링크 instanceof HTMLAnchorElement) {
    링크.href = 'https://naver.com';
}
// 버튼? 문법
var 버튼 = document.querySelector('#button');
var 이미지 = document.querySelector('.image1');
버튼 === null || 버튼 === void 0 ? void 0 : 버튼.addEventListener('click', function () {
    if (이미지 instanceof HTMLImageElement) {
        이미지.src = "b.png";
    }
});
// class 문법과 prototype 타입지정 ( ES6 )
var Person = /** @class */ (function () {
    function Person(naming) {
        this.name = naming;
    }
    Person.prototype.함수 = function (a) {
        if (a === void 0) { a = 'kim'; }
        console.log('안녕' + a);
    };
    return Person;
}());
var 사람1 = new Person('kim');
var 사람2 = new Person('park');
사람1.함수();
// test
var Car = /** @class */ (function () {
    function Car(name, price) {
        this.model = name;
        this.price = price;
    }
    Car.prototype.tax = function () {
        return (this.price) / 10;
    };
    return Car;
}());
var car1 = new Car('소나타', 3000);
// rest parameters
var Word = /** @class */ (function () {
    function Word() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var numbers = [];
        var strings = [];
        for (var i = 0; i < args.length; i++) {
            var arg = args[i];
            if (typeof args[i] === "string") {
                strings.push(arg);
            }
            else {
                numbers.push(arg);
            }
        }
        this.num = numbers;
        this.str = strings;
    }
    return Word;
}());
var ww = new Word('a', 'b', 1, 2);
// spread operator : 괄호 벗겨주세요
var arr1 = [1, 2, 3];
var arr2 = [4, 5];
var arr3 = __spreadArray(__spreadArray([], arr1, true), arr2, true);
// arr3 = [1,2,3,4,5]
//destucturing 
var _a = ['안녕', 100], 변수1 = _a[0], 변수2 = _a[1];
var _b = { student: true, ageA: 20 }, student = _b.student, ageA = _b.ageA;
// interface 장점 => extends 복사가능  
// type 사용할떄는 & 기호로 복사가능
//        type         vs       interface    
//      중복선언x                중복선언o
var 네모 = { color: 'red', width: 100 };
var 학생 = { name: 'kim', score: 20 };
var 선생 = { name: 'park', age: 20, score: 80 };
var 상품 = { brand: 'Samsung', serialNumber: 1360, model: ['TV', 'phone'] };
var 장바구니 = [{ product: '청소기', price: 7000, card: false }, { product: '삼다수', price: 800, card: false }];
var 자신감 = {
    plus: function (a, b) {
        return a + b;
    },
    minus: function (a, b) {
        return a - b;
    }
};
// rest parameters
function maxfun() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var a = 0;
    args.forEach(function (i) {
        if (a < i) {
            a = i;
        }
    });
    return a;
}
console.log(maxfun(6, 3, 7, 2));
//test
function 함수1(_a) {
    var user = _a.user, comment = _a.comment, admin = _a.admin;
    console.log(user, comment, admin);
}
함수1({ user: 'kim', comment: [3, 5, 4], admin: false });
function 함수2(_a) {
    var a = _a[0], b = _a[1], c = _a[2];
    console.log(a, b, c);
}
함수2([40, 'wine', false]);
// Narrowing 방법들
function 함수3(a) {
    if (a && typeof a === 'string') {
        // a 가 존재하고 type이 string 이면 실행
    }
}
function 함수5(animal) {
    if ("swim" in animal) {
        return animal.swim; //tyep narrowing Fish type 이 있는지 검사
    }
    return animal.fly;
}
// 위에 타입은 하나로 만들었어야함
function 함수6(x) {
    if (x.wheel === '4개') {
        console.log('이 차는 ' + x.color);
    }
    else {
        console.log('이 바이크는 ' + x.color);
    }
}
// never type  (함수의 return 값이 없어야함, endpoint 가 없어야함 모든함수는 return 을안해도 return undefined됨.)
function 함수4() {
    throw new Error(); // error 로 함수 중단 or while true 무한루프로 중단
}
// 거의 쓸일없고 return값이 없으면 void 로 대체하면됨
// 가능하지 않은 경우 never 타입으로 표시되는것만 알고 있으면 됨. (문제가있는경우)
// typescript 에선 객체지향 public private protexted static 등을 사용 가능
var User = /** @class */ (function () {
    function User(a, b) {
        this.familyName = 'kim';
        this.name = a + this.familyName;
        this.age = b;
    }
    // 만약 private 변수를 변경하고 싶으면??
    User.prototype.familynameChange = function () {
        this.familyName = 'park';
    };
    return User;
}());
var 유저1 = new User('jaeman', 29);
유저1.name = 'kim';
유저1.familynameChange();
// public 축약어 가능
var Football = /** @class */ (function () {
    function Football(nation) {
        this.nation = nation;
    }
    return Football;
}());
var worldcup = new Football('한국');
