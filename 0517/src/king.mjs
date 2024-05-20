import readline from "readline";
import fs from "fs";


export function moiveQu() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });   
    
    rl.question('보고 싶은 영화 입력 >> ', (movie)=>{
        fs.writeFileSync("./src/movie.txt",movie)
        rl.close();
    });    
    
}

moiveQu()
