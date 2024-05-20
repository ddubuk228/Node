// import readline from 'readline';

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('이름을 입력하세요 : ', (name) => {
//     console.log(`안녕하세요, ${name}님!`);
//     rl.close();
// })


import readline from "readline"

const rl = new readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('일주일간 날씨를 입력하세요 >> ', (data) => {
    console.log(`전체 날씨 출력 >> ${data}!`);
    let weather = data.split(", ");
  
    rl.close();
})

