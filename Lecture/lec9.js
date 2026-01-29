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
