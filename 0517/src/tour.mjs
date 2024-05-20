import readline from "readline";
import fs from "fs";

export function tourQu(){
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    
    rl.question('가고 싶은 여행지 입력 >> ', (tour)=>{
        fs.writeFileSync("./src/tour.txt",tour)
        rl.close();
    });
   
}

tourQu()