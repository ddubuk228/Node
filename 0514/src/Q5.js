// let obj = {result:0};

// obj.add = function(x,y) {
//     function inner() {
//         this.result = x+y;
//     }
//     inner = inner.bind(this);
//     inner();
// }

// obj.add(3,4);
// console.log(obj);


let obj = {result:0};

obj.add = function(x,y) {
    inner = () => {
        this.result = x+y;
    }

    inner();
}

obj.add(3,4);
console.log(obj);