//  async function test(){
//     return 'hello'
// }
// console.log(test());
const p = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('Done');
    },2000)
}) 
async function getData(){
    const data = await p;
    console.log('Before Data');
    console.log(data);
    console.log('After Data');
}
getData();