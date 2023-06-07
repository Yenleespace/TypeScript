let 접니다 :'대머리' | '솔로';

const 변수  = 'kim';

var 자료 = {
    name : 'kim'
} as const // 1. object value 값을 그대로 type 지정해줌 2. object 속성들에 모두 readonly 붙여줌 * object자료를 완전히 잠궈준다

function 내함수(a : 'kim') {

}

내함수(자료.name)