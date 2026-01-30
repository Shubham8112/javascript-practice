console.log('hello Javascript');
let str = 'Hello javascript';
console.log(str.length);//length of string
console.log(str.slice(1,4));
console.log(str.includes('Hello')); //it return true
console.log(str.split(' ')); // it split str data by space
let str2 = "    hello javascript";
console.log(str2);
console.log(str2.trim());// trim remove all extra spaces
console.log(str.toUpperCase());//it convert all char in upper case
console.log(str.toLowerCase());//it convert all char in Lower case
console.log(str.startsWith("Hello")); // retrun true
const new_str = str.replace("javascript", "Shubham");
console.log(new_str); // it replace javascript with Shubham
const greet = 'hi';
console.log(greet.repeat(3)); // it repeat greet 3 times
let name = "Shubham", age = 22;
console.log("My name is " + name + " and my age is " + age); // concatenation
console.log(`My name is ${name} and my age is ${age}`); //template literal
console.log(str.charAt(4)); // it return char at index 0
/////////////
console.log("javascript file loaded successfully");
let num1 = 10;
let num2 = 5;
console.log("Sum:", num1 + num2);
//conditional example
if(num1 > num2){
    console.log(`${num1} is greater than ${num2}`);
}else{
    console.log(`${num2} is greater than ${num1}`);
}
//for loop example
for(let i = 0;i<num2;i++){
    console.log(i);
}
//array example
let arr1= [2,4,6,8,10];
// arr1.forEach(element => {
//     console.log("Element:", element);
// });
console.log(arr1);
//push example:- push new entry at the end
arr1.push(12);
console.log("After push:", arr1);
//pop example:- remove last entry
arr1.pop();
console.log("After pop:", arr1);
//shift:- remove first entry
arr1.shift();
console.log("After shift:", arr1);
//unshift:- add new entry at the start
arr1.unshift(0);
console.log("After unshift:", arr1);
//object in javascript: key-value pair
const student = {
    name: "Ram",
    age: 21,
    marks:80
}
console.log(`Name: ${student.name},Age: ${student.age}, Marks: ${student.marks}`);
//
const students = [
    {Name: "Shubham", Age:22, Marks:79},
    {Name: "Ravi" ,Age:20, Marks:85},
    {Name: "Ankit" ,Age:23, Marks:90}
];
for(let i=0;i<students.length;i++){
    console.log(`Name: ${students[i].Name}, Age: ${students[i].Age}, Marks: ${students[i].Marks}`);
}
// ...........