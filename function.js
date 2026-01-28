// function add(a, b){
//    console.log("Sum inside function:", a + b);
//    return a + b;
// }
// console.log(add(5, 3)); 
// add(10, 15);
// function bmi(weight, height){
//    let bmiValue = weight / (height * height);
//    return bmiValue;
// }
// let value = bmi(80, 1.5);
// if(value < 18.5) {
//     console.log("Underweight");
// }else if(value >= 18.5 && value < 24.9){
//     console.log("Healthy");
// }else if(value >= 25 && value < 29.9){
//     console.log("Overweight");
// }else{
//     console.log("Obese");
// }
// function calculate(num1, num2, operation){
//    if(operation === "add"){
//        return num1 + num2;
//     }else if(operation === "subtract"){     
//          return num1 - num2;
//     }else if(operation === "multiply"){
//          return num1 * num2;
//     }
//     else if(operation === "divide"){
//          return num1 / num2;
//     }   else{
//          return "Invalid operation";
//     }       
//     switch(operation){
//         case 'add': 
//             return num1 + num2;
//         case 'sub': 
//             return num1 - num2;
//         case 'mul': 
//             return num1 * num2;
//         case 'div': 
//             return num1 / num2;
//         default:
//             return "Invalid operation";
//     }
// }
// console.log(calculate(26, 55, "add"));   
// function expression

// const multiply = function(num1, num2){
//     return num1 * num2;
// }       
// console.log(multiply(5, 6));
// function calculator (a,b,operation){
//     return operation(a,b);
//     function add(x,y){
//         return x+y;
//     }
//     function subtract(x,y){
//         return x-y;     
//     }
//     function multiply(x,y){ //function declaration example
//         return x*y;             
//     }
//     const divide = function (x,y){ //function expression example
//         return x/y;
//     }
// }

// console.log(calculator(10,5,add));
// console.log(calculator(10,5,subtract));
// console.log(calculator(10,5,multiply));
// console.log(calculator(10,5,divide));
// function greet(){
//     console.log("Hello world");
// }
// function call(fn){ //callback function example
//     fn();
// }
// const greet2 = function(){
//     console.log("Hello from greet2");
// }
// call(greet);
// call(greet2);
// call(function(){
//     console.log("Hello from anonymous function");
// })
//arrow function example
// const greet3 = () => {
//     console.log("Hello from greet3 arrow function");
// }
// const arr1 = [1,2,3,4,5];
// const newArr = arr1.map((element) => element * 2);
// console.log("Original Array:", arr1);
// console.log("New Array after map:", newArr);
// ques...........
// function sumArray(arr){
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i];
//     }
//     return sum;
// }
// const arr1 = [1,2,3,4,5];
// console.log(sumArray(arr1));
// console.log(sumArray([2,4,7,8,3,6]));
// ques2.......
// function reverseArray(arr){
//     const reverse = [];
//     for(let i = arr.length-1 ; i>=0 ; i--){
//         reverse.push(arr[i]);
//     }
//     return reverse;
// }
// const arr1 = [2,4,6,8];
// console.log(reverseArray(arr1));
// ques3...
// function reverseString(str){
//     let reverse ='';
//     for(let i = str.length-1;i>=0;i--){
//        reverse += str[i];
//     }
//     return reverse;
// }
// console.log(reverseString(" hello"));
// question 4

function isPalindrome(str) {
    let reverse = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
    }

    if (str === reverse) {
        return "Palindrome";
    } else {
        return "Not a Palindrome";
    }
}

// Test
console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));
