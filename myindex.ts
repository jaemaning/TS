// narrowing 방법 5가지

let title1 = document.querySelector('#title')

// 1
if (title1 !== null) {
    title1.innerHTML = '반가워요'
}

// 2 (추천)
if (title1 instanceof Element) {
    title1.innerHTML = '반가워요'

}

// 3 (추천안함) (그럼 타입스크립트 왜씀?)
let title2 = document.querySelector('#title') as Element;
title2.innerHTML = '반가워요'

// 4
if (title1?.innerHTML) {
    title1.innerHTML = '반가워요'
}

// 5 = tsconfig.json 에서 "strictNullChecks": true 끄기 (그럼 타입스크립트 왜씀?)

// <a>태그 href 속성 바꾸기 </a> : 태그마다 다름
let 링크 = document.querySelector(".link")
if (링크 instanceof HTMLAnchorElement) {
    링크.href = 'https://naver.com'
}

// 버튼? 문법
let 버튼 = document.querySelector('#button');
let 이미지 = document.querySelector('.image1');


버튼?.addEventListener('click', function () {
    if (이미지 instanceof HTMLImageElement) {
        이미지.src = "b.png";
    }
})

// class 문법과 prototype 타입지정 ( ES6 )
class Person {
    name: string;
    constructor(naming: string) {
        this.name = naming;
    }

    함수(a: string = 'kim'): void {
        console.log('안녕' + a)
    }
}

let 사람1 = new Person('kim');
let 사람2 = new Person('park');

사람1.함수()

// test
class Car {
    model: string;
    price: number;
    constructor(name: string, price: number) {
        this.model = name
        this.price = price
    }

    tax(): number {
        return (this.price) / 10
    }
}

let car1 = new Car('소나타', 3000)

// rest parameters

class Word {
    num;
    str;
    constructor(...args: (number | string)[]) {
        let numbers: number[] = []
        let strings: string[] = []
        for (let i = 0; i < args.length; i++) {
            let arg = args[i]
            if (typeof args[i] === "string") {
                strings.push(arg as string)
            } else {
                numbers.push(arg as number)
            }
        }
        this.num = numbers;
        this.str = strings;
    }
}

let ww = new Word('a', 'b', 1, 2)

// spread operator : 괄호 벗겨주세요

let arr1 = [1, 2, 3];
let arr2 = [4, 5];
let arr3 = [...arr1, ...arr2]
// arr3 = [1,2,3,4,5]

//destucturing 
let [변수1, 변수2] = ['안녕', 100]
let { student, ageA } = { student: true, ageA: 20 }

// object 타입지정시 interface 사용가능

interface SquareType {
    color: string,
    width: number
}
// interface 장점 => extends 복사가능  
// type 사용할떄는 & 기호로 복사가능

//        type         vs       interface    
//      중복선언x                중복선언o

let 네모1: SquareType = { color: 'red', width: 100 }

interface StudentType {
    name: string
}
interface StudentType {
    score: number
}
// interface 는 중복선언 가능 StudentType {name : string, score :number} 합쳐짐

interface TeacherType extends StudentType {
    age: number
}

let 학생: StudentType = { name: 'kim', score: 20 }
let 선생: TeacherType = { name: 'park', age: 20, score: 80 }

// test
interface ProductType {
    brand: string,
    serialNumber: number,
    model: string[],
}

let 상품: ProductType = { brand: 'Samsung', serialNumber: 1360, model: ['TV', 'phone'] }

interface Card {
    card: boolean
}
interface CartType extends Card {
    product: string,
    price: number
}


let 장바구니: CartType[] = [{ product: '청소기', price: 7000, card: false }, { product: '삼다수', price: 800, card: false }]

interface PlusMinusType {
    plus: (a: number, b: number) => number,
    minus: (a: number, b: number) => number
}

let 자신감: PlusMinusType = {
    plus: function (a, b) {
        return a + b;
    },
    minus: function (a, b) {
        return a - b
    }
}

// rest parameters
function maxfun(...args: number[]) {
    let a: number = 0
    args.forEach((i) => {
        if (a < i) {
            a = i
        }
    })
    return a
}

console.log(maxfun(6, 3, 7, 2))

//test

function 함수1({ user, comment, admin }: { user: string, comment: number[], admin: boolean }): void {
    console.log(user, comment, admin)
}

함수1({ user: 'kim', comment: [3, 5, 4], admin: false })

function 함수2([a, b, c]: [a: number, b: string, c: boolean]): void {
    console.log(a, b, c)
}
함수2([40, 'wine', false])

// Narrowing 방법들
function 함수3(a?: string): void {
    if (a && typeof a === 'string') {
        // a 가 존재하고 type이 string 이면 실행
    }
}

type Fish = { swim: string };
type Bird = { fly: string };
function 함수5(animal: Fish | Bird) {
    if ("swim" in animal) {
        return animal.swim  //tyep narrowing Fish type 이 있는지 검사
    }
    return animal.fly
}

// instanceof 연산자로도 object narrowing 가능
// literal type 고정값으로 구분가능

type Cars = {
    wheel: '4개',
    color: string
}
type Bike = {
    wheel: '2개',
    color: string
}
// 위에 타입은 하나로 만들었어야함

function 함수6(x: Cars | Bike) {
    if (x.wheel === '4개') {
        console.log('이 차는 ' + x.color)
    } else {
        console.log('이 바이크는 ' + x.color)
    }
}

// never type  (함수의 return 값이 없어야함, endpoint 가 없어야함 모든함수는 return 을안해도 return undefined됨.)
function 함수4(): never {
    throw new Error() // error 로 함수 중단 or while true 무한루프로 중단
}

// 거의 쓸일없고 return값이 없으면 void 로 대체하면됨
// 가능하지 않은 경우 never 타입으로 표시되는것만 알고 있으면 됨. (문제가있는경우)

// typescript 에선 객체지향 public private protexted static 등을 사용 가능

class User {
    public name: string;  // 모든 자식들이 이용가능 (항상 default 값이 public)
    private age: number;  // private 붙으면 class 안에서만 수정,이용 가능
    private familyName: string = 'kim';
    constructor(a, b) {
        this.name = a + this.familyName
        this.age = b
    }
    // 만약 private 변수를 변경하고 싶으면??
    familynameChange() {
        this.familyName = 'park'
    }
}

let 유저1 = new User('jaeman', 29)
유저1.name = 'kim'
유저1.familynameChange()

// public 축약어 가능
class Football {
    protected x = 10;
    constructor(public nation: string) {

    }
}
let worldcup = new Football('한국');

// class 복사 하고 싶으면 extends 하면됨.

class NewFootball extends Football {
    doThis() {
        this.x = 20;
    }
}

// protected = private 거의 비슷하지만 protected 는 extedns 에서 사용가능

//class static

class NewUser {
    private static x = 10;
    y = 20;
}
let 자식들 = new NewUser(); // 자식들은 static 을 가지지 못함. 부모만 쓰는게가능
// default값은 자식만 사용가능.static은  private / protected / public 과 같이 사용가능

class Usercon {
    private static x = 10;
    public static y = 20;
    static addOne(a: number) {
        Usercon.x = Usercon.x + a
    }
    static printx(): void {
        console.log(Usercon.x)
    }
}
Usercon.addOne(3)
Usercon.printx()

class Square {
    x: number;
    y: number;
    color: string;
    constructor(x: number, y: number, c: string) {
        this.x = x
        this.y = y
        this.color = c
    }
    draw(): void {
        const newDiv = document.createElement('div');
        newDiv.className = 'square'
        newDiv.style.backgroundColor = this.color
        newDiv.style.height = this.y + "px"
        newDiv.style.width = this.x + "px"
        newDiv.style.display = 'block'
        newDiv.style.marginLeft = Math.random() * 500 + 'px'
        newDiv.style.marginTop = Math.random() * 150 + 'px'
        document.body.appendChild(newDiv);
    }
}

let 네모 = new Square(30, 30, 'red');
네모.draw()
네모.draw()
네모.draw()
네모.draw()