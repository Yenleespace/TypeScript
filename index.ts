type Animal = { name: string, age :number }
let 동물 :Animal = { name: 'kim', age: 20 }

type Girlfriend = {
    name :string | undefined
}

const 여친 :Girlfriend = {
    name : '엠버'
}
여친.name = '유라'

type Name = string;
type Age = number;
type Person = Name | Age;

type PositionX = { x : number };
type PositionY = { y : number };

type NewType = PositionX & PositionY;

let position :NewType = { x : 10, y : 20 }

type Produrct = { 
    color? : string, 
    size : number, 
    readonly position :number[] 
}

let test :Produrct = {
    size : 123,
    position : [1,2,3]
}

type PersonInfo = {
    name : string,
    phone : number,
    email : string,
}

let testinfo :PersonInfo = { name : 'kim', phone : 123, email : 'abc@naver.com' }

type UnderAge = { adult : boolean }

type NewUser = PersonInfo & UnderAge

let testage :NewUser = { 
    name : 'kim', 
    phone : 123, 
    email : 'abc@naver.com', 
    adult : false 
}