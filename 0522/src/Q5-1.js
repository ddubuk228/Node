//import fs from "fs"

// let files = fs.readdir("./", (err, files)=>{
//     if(err) {
//         console.error(err)
//     }
//     console.log(files);
// });

// console.log("Code is done.")

import { promises as fs } from 'fs';

fs.readdir("./")
    .then((result)=> console.log(result))
    .then((reulst) => console.log("Code is done."))
    .catch((err)=> console.error(err));
