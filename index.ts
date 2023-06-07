type Animal = { name : string }
type Cat = { age : number } & Animal

interface Square  {
    color : string, 
    width : number 
}

let 네모 :Square = { color : 'red', width : 100 }

interface Student {
    name : string
}
interface Teacher extends Student{
    age : number
}

let 학생 :Student = { name : 'kim' }
let 선생 :Teacher= { name : 'kim', age : 20 }

//////////////////
interface Product {
    brand : string,
    serialNumber : number,
    model : string[]
}
let 상품 :Product = { brand : 'Samsung', serialNumber : 1360, model : ['TV', 'phone'] }

interface Cart {
    product : string,
    price : number
}
let 장바구니 : Cart[] = [ { product : '청소기', price : 7000 }, { product : '삼다수', price : 800 } ] 

interface Card extends Cart {
    card : boolean
}
let update :Card = { product : '청소기', price : 7000, card : false }

interface Mathobj {
    plus : (a:number, b:number) => number,
    minus : (a:number, b:number) => number
}

let 오브젝트 :Mathobj = {
    plus(a, b) {
        return a + b
    },
    minus(a, b) {
        return a - b
    }
}