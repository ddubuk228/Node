import fs from "fs"

let data = fs.readFileSync("./src/example.txt","utf-8")
console.log(data);

console.log("코드 끝!")

/*
readFileSync 는 동기 함수이기 때문에 
블로킹이 되어 파일 읽기가 끝난 후
console.log(data) 함수가 시작된다


*/