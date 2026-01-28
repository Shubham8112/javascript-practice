let arr = [2,4,6,8 ,9,10];
// for Each    
arr.forEach((el) =>console.log(el));
//map
console.log(arr.map((el) => el*2));
console.log(arr.map((el) => el*el));
//filter
console.log(arr.filter((el) => el%2 === 0));
//reduce 
console.log(arr.reduce((sum,n) => sum+n , 0));
console.log(arr.reduce((prod,n) => prod*n , 1));
console.log(arr.find((el) => el> 4));
console.log(arr.findIndex((el) => el>4));
console.log(arr.includes(5));
console.log(arr.includes(4));
console.log(arr.indexOf(6));
console.log(arr.reverse());
let arr1 = [1,5,7];
console.log(arr1.concat([2,4,6]));
let stringArray = ['a','b', 'c'];
let newStr = stringArray.join('-');
console.log(newStr);