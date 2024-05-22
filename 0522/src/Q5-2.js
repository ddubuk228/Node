// import fs from "fs"

// let files = fs.readdir("./", (err, files)=>{
//     if(err) {
//         console.error(err)
//     }
//     console.log(files);
// });

// console.log("Code is done.")

import { promises as fs } from 'fs';

async function readDirAsync(){
    try {
        const files = await fs.readdir("./");
        console.log(files);
    } catch (err) {
        console.error(err);
    }
}

readDirAsync()

