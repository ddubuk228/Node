import fs from "fs";

const data = fs.readFileSync("./src/me.txt","utf-8")
console.log(data);


let data2 = `****************
나는 별이야
제일 빛나
****************`;


if(data){~
    fs.appendFileSync("./src/me.txt"+ data2);
}

const data3 = fs.readFileSync("./src/you.txt","utf-8")
console.log(data3);


// if(fs.existsSync("./src/me.txt")){
//     fs.writeFileSync("./src/you.txt",
//     `***************
//     나는 별이야
//     제일 빛나
//     ****************`)
// }