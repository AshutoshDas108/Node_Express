const fs = require("fs");
const os = require("os");

console.log(os.cpus().length);

function read_blocking(){
   console.log(1111111);
   const result = fs.readFileSync("test.txt", "utf-8");
   console.log(result);
   console.log(2222222);
}

function read_nonBlocking(){
  console.log(1111111);
  fs.readFile("test.txt", "utf-8", (err, res) => {
    console.log(res);
  });
  console.log(2222222);
}

console.log("DEMONSTRATION FOR BLOCKING TYPE");
read_blocking();
console.log("DEMONSTRATION FOR NON BLOCKING TYPE");
read_nonBlocking();
