var 제목 = document.querySelector('#title');
제목.innerHTML = '반갑소';
var 사진 = document.querySelector('#image');
if (사진 instanceof HTMLImageElement) {
    사진.src = 'new.jpg';
}
var 링크 = document.querySelectorAll('.naver');
링크.forEach(function (a) {
    if (a instanceof HTMLAnchorElement) {
        a.href = "kakao.com";
    }
});
for (var i = 0; i < 3; i++) {
    var a = 링크[i];
    if (a instanceof HTMLAnchorElement) {
        a.href = "kakao.com";
    }
}
