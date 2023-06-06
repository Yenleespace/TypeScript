
function sayHello(x :string) {
    if (x) {
        console.log('안녕하세요' + x)
    } else {
        console.log('input name')
    }
}

function checkNum(x :number|string) :number{
    return x.toString().length
}

 console.log(checkNum(123))

 function possibleToM(x :number, y :boolean, z:string ) {
    let sum :number = 0;
    sum += x;
    if (y === true) {
        sum +=500
    }
    if (z === 'T') {
        sum += 100
    }
    if (sum >= 600) {
        return 'possible'
    }

 }

console.log(possibleToM(700, false, 'E'))
console.log(possibleToM(100, false, 'T'))