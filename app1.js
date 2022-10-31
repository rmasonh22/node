console.log('Hello from app1.js');
for(let x=0; x<50000;x++) {
    console.log(x);
    if(x==30000) {
        process.exit() //cause exit
    }
}