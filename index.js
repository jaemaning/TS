// 터미널에서 tsc -w 로 js파일 자동변환
var 이름 = 'kim';
이름 = 123;
function 함수(x) {
}
var john = { name: 'kim', age: '19' };
var myname = "jaemankim";
var myage = 19;
var myhometown = "Mokpo";
var myfav = { songs: "swalovsky", singer: "rapper" };
var project = {
    member: ['kim', 'park'],
    days: 30,
    started: true,
};
var exunknown;
var user = 'kim';
var age = undefined;
var married = false;
var 철수 = [user, age, married];
var 학교 = {
    score: [100, 97, 84],
    teacher: 'Phil',
    friend: 'John'
};
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher];
function naming(x) {
    if (x !== undefined) {
        console.log("안녕하세요 " + x);
    }
    else {
        console.log("이름이 없습니다.");
    }
}
naming("재미");
function countnumber(x) {
    return x.toString().length;
}
console.log(countnumber(1234));
function canimarry(money, house, charm) {
    var mygrade = 0;
    if (house == true) {
        mygrade += 500;
    }
    if (charm == '상') {
        mygrade += 100;
    }
    if (money + mygrade >= 600) {
        return "결혼가능";
    }
    else {
        return null;
    }
}
canimarry(500, false, '상');
// type Narrowing 
function 내함수(x) {
    if (typeof x === 'string') {
        return x + '1';
    }
    else {
        return x + 1;
    }
}
// type assertion 사용 권장 x (debugging 용)
// ( union type 을 하나로 확정하고 싶을때 사용, 타입 변경 x )
// ( 무슨 타입이 들어올지 100% 확실할 때 사용 )
function 내함수2(x) {
    var array = [];
    array[0] = x;
}
//number 와 Number 다름 Number 는 object 형식 
var a = new Number(1000);
console.log(a);
var b = 1;
console.log(b);
//array 클리닝
function cleaning(x) {
    for (var element in x) {
        if (typeof x[element] === "string") {
            x[element];
        }
    }
}
var 동물;
var 동물info = { name: '기린', age: 5 };
var girlfriend = {
    name: '수지'
};
var 좌표 = { x: 1, y: 2 };
var test = { size: 10, position: [1, 2, 3] };
var test2 = { name: 'kim', phone: 123, email: 'abc@naver.com', adult: true };
// literal types (const변수의 업그레이드 버전 - 여러가지 변하지 않는 값을 넣을수 있고 자동완성도 가능)
var literal; // literal = 456; 에러남
literal = '123'; // 자동완성 가능
function Myfunction(a) {
    return ['가위'];
}
var 자료 = {
    name: 'kim'
}; // readonly literal type 으로 지정 as const object자료 잠그기!
function my함수(a) {
}
my함수(자료.name);
var myfunctions = function (a) {
};
var 회원정보 = {
    name: 'kim',
    plusOne: function (a) {
        return a + 1;
    },
    changeName: function (a) {
        회원정보.name = a;
        return;
    }
};
var objectFunctionValue = 회원정보.plusOne(4);
var cutZero = function (a) {
    var result = 'a';
    if (a[0] == '0') {
        result = a.slice(1);
    }
    else {
        result = a;
    }
    return result;
};
var removeDash = function (a) {
    var result = parseFloat(a.replace(/-/g, ''));
    return result;
};
// console.log(removeDash('010-1111-2222'))
// console.log(cutZero('010-1111-2222'))
function newTestFunction(a, func1, func2) {
    var result = func1(a);
    result = func2(result);
    return result;
}
console.log(newTestFunction('010-1111-2222', cutZero, removeDash));
