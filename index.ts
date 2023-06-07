class Car {
    model :string;
    price :number;
   constructor (a :string, b :number) {
        this.model = a;
        this.price = b
    }

    tax(){
        return this.price / 10
    }
}


let car1 = new Car('소나타', 3000)

console.log(car1) // { model : '소나타', price : 3000 }
console.log(car1.tax()) // 300

class Word {
    num;
    str;
    constructor(...param : (string | number)[]) {
        let 숫자 :number[] = [];
        let 문자 :string[] = [];

        param.forEach((i)=>{
            if (typeof i === 'string') {
                문자.push(i)
            } else {
                숫자.push(i)
            }
        })

        this.num = 숫자
        this.str = 문자
    }    
}

let obj = new Word('kim', 3, 5, 'park');

console.log(obj.num) 
console.log(obj.str)