
//함수타입 표현 방법
// function 함수(a :string) :number {

// }

type 함수타입 = (a :string) => number // 무조건 string type을 넣고, return number type을 한다. 1. 함수타입은 () => {} 모양으로 해주고

// () => { return 10 } equal () => 10

let 함수 :함수타입 = function (a) { // 2. 함수표현식에만 type alias 사용가능
    return 10
}

// object 자료안의 함수 타입 지정(methods)
type Member = {
    name : string,
    age : number,
    plusOne : (x:number) => number,
    changeName : () => void
}

let 회원정보 :Member = {
    name : 'kim', 
    age : 30,
    plusOne (x){
        return x + 1
    },
    changeName : () => {
        console.log('안녕')
    }
}

회원정보.plusOne(1);
회원정보.changeName();

///////////////////////////

type cutType = (x :string) => string

let cutZero :cutType = function (x) {
    return x.replace(/^0/, "")
}

type removeType = (x :string) => number

let removeDash :removeType = function (x) {
    let dash = x.replace(/-/g,'')
    return parseFloat(dash)
}

function Final(a, func1, func2) {
    let res1 = func1(a);
    let res2 = func2(res1)
    console.log(res2)
}

Final('010-1111-2222', cutZero, removeDash)