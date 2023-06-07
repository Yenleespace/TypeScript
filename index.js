//함수타입 표현 방법
// function 함수(a :string) :number {
// () => { return 10 } equal () => 10
var 함수 = function (a) {
    return 10;
};
var 회원정보 = {
    name: 'kim',
    age: 30,
    plusOne: function (x) {
        return x + 1;
    },
    changeName: function () {
        console.log('안녕');
    }
};
회원정보.plusOne(1);
회원정보.changeName();
var cutZero = function (x) {
    return x.replace(/^0/, "");
};
var removeDash = function (x) {
    var dash = x.replace(/-/g, '');
    return parseFloat(dash);
};
function Final(a, func1, func2) {
    var res1 = func1(a);
    var res2 = func2(res1);
    console.log(res2);
}
Final('010-1111-2222', cutZero, removeDash);
