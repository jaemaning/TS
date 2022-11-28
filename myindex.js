// narrowing 방법 5가지
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
var Word = /** @class */ (function () {
    function Word() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var numbers = [];
        var strings = [];
        for (var i = 0; i < args.length; i++) {
            if (typeof args[i] === "string") {
                strings.push(args[i]);
            }
            else {
                numbers.push(args[i]);
            }
        }
        this.num = numbers;
        this.str = strings;
    }
    return Word;
}());
var ww = new Word('a', 'b', 1, 2);
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
