import http from "http";

const server = http.createServer((req,res)=>{
    console.log(req.method);

    res.setHeader("Content-Type", "text/plain");
    res.write("Hello Node");
    res.end();
})

server.listen(3000, ()=>{
    console.log("3000번 포트 서버 실행 중")
})