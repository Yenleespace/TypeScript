var Car = /** @class */ (function () {
    function Car(a, b) {
        this.model = a;
        this.price = b;
    }
    Car.prototype.tax = function () {
        return this.price / 10;
    };
    return Car;
}());
var car1 = new Car('소나타', 3000);
console.log(car1); // { model : '소나타', price : 3000 }
console.log(car1.tax()); // 300
var Word = /** @class */ (function () {
    function Word() {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        var 숫자 = [];
        var 문자 = [];
        param.forEach(function (i) {
            if (typeof i === 'string') {
                문자.push(i);
            }
            else {
                숫자.push(i);
            }
        });
        this.num = 숫자;
        this.str = 문자;
    }
    return Word;
}());
var obj = new Word('kim', 3, 5, 'park');
console.log(obj.num);
console.log(obj.str);
