export var 이름 = 'kim';
export var 나이 = 20;

export type Nametype = string;

namespace 네임스페이스 {
    export type NameType = string | number;
} // 예전 방법 겹치는 변수를 숨기기 위해 : 예전엔 import 방법이 따로 없었음
// 더 예전엔 namespace 대신 module 사용 같은 문법

let 변수: 네임스페이스.NameType = 10;

export type Car = {
    wheel: number,
    model: string
}
export interface Bike {
    wheel: 2,
    model: string
}
export type ObjFunctionType = (a?: object) => void;
