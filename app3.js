//console.log(process); //global object

//console.log(process.pid);
//console.log(process.argv);


const first = process.argv[2]; // place first name as argument
const second = process.argv[3]; // place second name as argument 

let message = `Hello, welcome ${first} ${second}`;
console.log(message);

