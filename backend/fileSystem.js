const fs = require('fs')
// fs.writeFileSync('hello.txt','hello World');
const data = fs.readFile('hello.txt', 'utf-8',(err,data)=>{
    if(err){
        console.log('Error',err);
        return;
    }else{
        console.log(data);
    }
});
// console.log("A");
// fs.appendFileSync('hello.txt',"this is appendfilesync");
// fs.appendFileSync('hello.txt','\nthis is next line');
fs.unlinkSync('hello.txt');