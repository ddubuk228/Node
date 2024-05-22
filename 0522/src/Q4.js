import fs from "fs"

let data = fs.readFile("./src/example.txt","utf-8", (error, read) =>{
    if(error) {
        console.log(error)
    }
    console.log(read);
})

console.log("코드 끝!")

/*
readFile 은 비동기 함수이기 때문에 
논블로킹이 되어 시간이 걸리는 작업은 잠시 옆으로 빼놓고
즉시 실행해야 할 작업 먼저 처리 돼서
console.log("코드 끝!") 함수가 먼저 처리된다


*/