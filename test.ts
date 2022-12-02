import { 이름, 나이, Nametype, Car, Bike, ObjFunctionType } from './a'

let 변수: Car = { wheel: 4, model: '벤츠' }

let 함수: ObjFunctionType = function (a) {
    console.log(a)
}

type Dog = string;
namespace Animal {
    export interface Dog { name: string };
}

let dog1: Dog = 'bark';
let dog2: Animal.Dog = { name: 'paw' };

// Generic 함수

function genericFun<T>(x: T[]): T {
    return x[0]
}

let a = genericFun<number>([4, 2]);
let b = genericFun<string>(['4', '2']);
console.log(a); console.log(b) // a :unknown 타입 => narrowing 해줘야됨
//narrowing 하기 싫으면 Generic 함수 써야함 => 함수 만들때 <> 만들기

function genericFun2<T extends number>(x: T) {
    return x - 1
} // 불확실하여 에러 이 경우엔 generic function에 타입파라미터를 제한줘야됨(extends사용)

//test
function 함수1<T extends string | string[]>(x: T): void {
    console.log(x.length)
}

함수1<string>('hello')
함수1<string[]>(['kim', 'park'])

interface Animal {
    name: string;
    age: number
}

let data = '{"name" : "dog", "age" : 1 }'

function 함수2<T extends Animal>(data: string): T {
    return JSON.parse(data)
}
let result = 함수2<Animal>(data)
console.log(result)

class Person<T> {
    name: T;
    constructor(a: T) {
        this.name = a;
    }
}
let person = new Person<string>('어쩌구');
person.name //any 타입이 되었넹 