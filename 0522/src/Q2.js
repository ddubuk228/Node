import http from "http"
import fs from "fs"
import path from 'path';

const __dirname = path.resolve();

const server = http.createServer((req, res)=> {
    res.setHeader("Content-Type", "text/html");

    const {method, url} = req;

    if(method==="GET"&& url==="/"){
        const readStream = fs.createReadStream(__dirname + "/src/index.html", "utf-8")
        readStream.pipe(res);
    } else if (method==="GET"&&url==="/contact"){
        const readStream = fs.createReadStream(__dirname + "/src/contact.html", "utf-8")
        readStream.pipe(res);
    } else if (method==="GET"&&url==="/home"){
        const readStream = fs.createReadStream(__dirname + "/src/home.html", "utf-8")
        readStream.pipe(res);
    } else {
        res.statusCode == 404;
        res.end("Not Found")
    }
    
})

server.listen(3000, ()=>{
    console.log("서버 실행")
})