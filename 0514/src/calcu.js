let add = (a,b) => a+b;
let subtract = (a,b) => a-b;
let multiply = (a,b) => a*b;
let divide = (a,b) => {
    if(b==0){
        console.log('err')
    }else{
        return a/b;
    }
}

export {add, subtract, multiply, divide}