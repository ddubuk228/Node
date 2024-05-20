import {add, subtract, multiply, divide} from "./calcu.js"
import {discount_10, discount_20, discount_30} from "./discount.js"
import {repeatPrint} from "./print.js"

let a = 10
let b = 5

console.log(`덧셈 : ${add(a,b)}`)
console.log(`뺄셈 : ${subtract(a,b)}`)
console.log(`곱셈 : ${multiply(a,b)}`)
console.log(`나눗셈 : ${divide(a,b)}`)

console.log("-----------------------------")

let str = "Hello, world!"
let num = 3

repeatPrint(str, num)


console.log("-----------------------------")

let price = 10000

console.log(`Original Price =  ￦${price.toLocaleString('ko-KR')}`)
console.log(`Price after 10% = ${discount_10(price)}`)
console.log(`Price after 20% = ${discount_20(price)}`)
console.log(`Price after 30% = ${discount_30(price)}`)

