import fs from "fs";
import readline from "readline";
import {moiveQu} from "./king.mjs"
import {tourQu} from "./tour.mjs"


moiveQu();
tourQu();

let movie = fs.readFileSync("./src/movie.txt","utf-8");
let tour = fs.readFileSync("./src/tour.txt","utf-8");
console.log(
    `==============================
    보고 싶은 영화는 ${movie}이고,
    가고 싶은 여행지는 ${tour}
    ===============================`
)