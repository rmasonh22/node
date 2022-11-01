// functions 



// function expressions ~ must be placed prior to use in code

const myFun4 = function(a,b,c) {
    const val1 = a * b -c
    return val1
}

const a2 = myFun4(2,6,4)
const b2 = myFun4(12,60,40)
const c2 = myFun4(20,16,14)

console.log(a2,b2,c2)


// function declaration ~ placed before or after with no effect on program
function myFun1() {
    console.log("Hello coding is fun!")
};

function myFun2(message,name,val) {
    console.log('1. ' + message,name,val);
    const val1 = name + ' ' + message;
    console.log('2. '+val1);
    return val1;
};

function myFun3(a,b,c) {
    const val1 = a*b/c
    console.log('===' +val1)
    return val1
}

myFun1();
myFun2('Hello', 'Robert', 200)
myFun2('Hi', 'Jackie',999)

const val1 = myFun2('Welcome', 'Jacqueline', 1000)
console.log(val1)

const a1 = myFun3(2,6,4)
const b1 = myFun3(12,60,40)
const c1 = myFun3(20,16,14)

console.log(a1,b1,c1)