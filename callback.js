// callback function:-> A callback function is a function that is passed as an argument to another function, and is called later (or after some task is done).
// function greet(name){
//     console.log(`hello ${name}`);
// }
// function user(cb){
//     const userName = 'Tom';
//     cb(userName);
// }
// user(greet);
// function printData(data){
//     console.log(data);
// }
// function getData(callback){
//     setTimeout(() => {
//         callback('server data');
//     }, 2000);
// }
// getData(printData);

// getData(function(data){
//     console.log(data);
// })
function first(callback){
    console.log('this is first');
    callback();
}
function Second(callback){
    console.log('this is Second');
    callback();
}
function third(callback){
    console.log('this is third');
    callback();
}
function fourth(callback){
    console.log('this is fourth');
    callback();
}
function final(callback){
    console.log('this is final');
    callback();
}
first(function () {
    console.log('something');
    Second(function () {
        console.log('something');
        third(function () {
            console.log('something');
            fourth(function () {
                console.log('something');
                final(function(){
                    console.log('this is callback hell');
                })
            })
        })
    })
})
// 33-304