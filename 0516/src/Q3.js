let obj = {name: "박문수", age: 20}
let obj2 = {...obj, email: "winner@email.com"}
obj2.age=100

console.log(obj)
console.log(obj2)
console.log(obj==obj2)