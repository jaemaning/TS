type Mytype = string | number

let 이름: Mytype = 'kim';
이름 = 123


function 함수(x: number): number {
    return x * 2
}

type Member = {
    [key: string]: string
}

let john: Member = { name: 'kim', age: '19' }


