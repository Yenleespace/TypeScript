let 제목 = document.querySelector('#title') as HTMLElement;
    제목.innerHTML = '반갑소'

let 사진 = document.querySelector('#image') 
    if (사진 instanceof HTMLImageElement) {
        사진.src = 'new.jpg'
    }

let 링크 = document.querySelectorAll('.naver') 
    링크.forEach ((a)=>{
        if (a instanceof HTMLAnchorElement) {
            a.href = "kakao.com"
        }
    })

    for (let i = 0; i < 3; i++) {
        let a = 링크[i];  
        if (a instanceof HTMLAnchorElement) {
            a.href = "kakao.com"
        }
    }
