let { student, age } = { student : true, age : 20 }
let 오브젝트 = { student : true, age : 20 }

function 함수({ student, age } : { student : boolean, age : number }){
    console.log(student, age)
}

함수({ student : true, age : 20 })

function Max(...a :number[]) {
    let res = 0;
    a.forEach((i) => {
        if (res < i) {
            res = i
        } 
    })

    return res
}

console.log(Max(4,6,3,2)) 

type UserType = {
    user :string, 
    comment :number[], 
    admin :boolean
}

function 함수2({user, comment, admin} :UserType) :void{
    console.log(user, comment, admin)
}

함수2( { user : 'kim', comment : [3,5,4], admin : false } )



// function 함수3(arr :any[]) {
//     arr.forEach((i) => {
//         console.log(i)
//     })
// }

함수3( [40, 'wine', false] )

type ArrType = (number | string |  boolean)[];

function 함수3([a,b,c] :ArrType) {
    console.log(a,b,c)
}