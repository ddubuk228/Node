const p = new Promise((resolve, reject) => {
    console.log("Promise를 시작합니다.")
    resolve("두 수를 랜덤하게 생성하여 더한 후 리턴?")
})

.then((msg) => {
    console.log(`1 ==> ${msg}`)
    let a = Math.floor(Math.random()*9)+1
    let b = Math.floor(Math.random()*9)+1
    console.log(`2 ==> ${a+b}`)
    console.log('두 수를 랜덤하게 생성하여 곱한 값을 리턴')

    return `${a+b},${a*b}`
})

.then((msg)=> {
    console.log(`3 ==> ${msg}`)
    let result = msg.split(",");
    let a = parseInt(result[0])
    let b = parseInt(result[1])
    console.log(`두 수의 합은 ${result[0]}`)
    console.log(`두 수의 곱은 ${result[1]}`)
})

.catch((error) =>{
    console.log("에러 발생함 ==> " +error)
})