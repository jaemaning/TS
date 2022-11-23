type Mytype = string | number

let 이름: Mytype = 'kim';
이름 = 123


function 함수(x?: number | undefined | string): void {

}
// void type 은 리턴 막아줌  
// ? 는 parameter 를 사용해도되고 안해도됨 or | undefined 로 사용해도 같은의미

type Member = {
    [key: string]: string
}

let john: Member = { name: 'kim', age: '19' }


let myname: string = "jaemankim"
let myage: number = 19
let myhometown: string = "Mokpo"

let myfav: { [key: string]: string } = { songs: "swalovsky", singer: "rapper" }

let project: { [key: string]: string[] | number | boolean } = {
    member: ['kim', 'park'],
    days: 30,
    started: true,
}

let exunknown: unknown;
//exunknown-1 // 산술연산도 타입을 잘 지켜야함 (유니온타입도 안됨)

// unknown - any 차이점 unknown 은 다른곳에 들어갔을떄 에러띄움, any는 버그의주범 

type Unnum = undefined | number;
let user: string = 'kim';
let age: Unnum = undefined;
let married: boolean = false;
let 철수: (string | boolean | Unnum)[] = [user, age, married];

let 학교: {
    score: (number | boolean)[],
    teacher: string,
    friend: string | string[]
}
    = {
    score: [100, 97, 84],
    teacher: 'Phil',
    friend: 'John'
}
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher]


function naming(x?: string | undefined): void {
    if (x !== undefined) {
        console.log("안녕하세요 " + x)
    } else {
        console.log("이름이 없습니다.")
    }
}

naming("재미")

function countnumber(x: number | string): number {
    return x.toString().length
}

console.log(countnumber(1234))

function canimarry(money: number, house: Boolean, charm: String) {
    let mygrade: number = 0
    if (house == true) {
        mygrade += 500
    }
    if (charm == '상') {
        mygrade += 100
    }

    if (money + mygrade >= 600) {
        return "결혼가능"
    } else {
        return null;
    }
}


canimarry(500, false, '상')

// type Narrowing 
function 내함수(x: number | string) {
    if (typeof x === 'string') {
        return x + '1'
    } else {
        return x + 1
    }
}

// type assertion 사용 권장 x (debugging 용)
// ( union type 을 하나로 확정하고 싶을때 사용, 타입 변경 x )
// ( 무슨 타입이 들어올지 100% 확실할 때 사용 )
function 내함수2(x: number | string) {
    let array: number[] = [];
    array[0] = x as number;
}

//number 와 Number 다름 Number 는 object 형식 
let a: Number = new Number(1000);
console.log(a)

let b: number = 1;
console.log(b)


//array 클리닝
function cleaning(x: (string | number)[]) {
    for (let element in x) {
        if (typeof x[element] === "string") {
            x[element] = parseFloat(x[element])
        }
    }
}