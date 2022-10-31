console.log(__dirname);
console.log(__filename);
//console.log(process);
console.log(process.memoryUsage()); //define memory usage for app
console.log(process.argv);
console.log(process.pid);
//console.log(process.argv[1]);

const first = process.argv[2];
const second = process.argv[3];

let message = `${first} ${second}`;
console.log(message);
