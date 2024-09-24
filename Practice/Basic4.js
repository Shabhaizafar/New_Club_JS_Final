// 4. Declare a `const` variable inside a function and try reassigning it inside the function.
// function All(){
//     const a = 12;
//     console.log(a);
//     a = 13;  //TypeError: Assignment to constant variable.
// }
// All();

// 5. Use `const` to declare a configuration object and access its properties in different functions.
// const Arr = [1,2,3];
// function All(){
//     console.log(Arr);
// }

// All();


// ### String Indexing
// 1. Create a string and access each character using its index.
// for (const key in "Royal") {
//    console.log(key,"Royal"[key]);
// }
// for (let i = 0; i <"Royal".length; i++) {
//     console.log(i,"Royal"[i]);
// }

// 2. Write a function that returns the first and last character of a string.

// function All(str){
//     return str[0]+str[str.length-1];
// }
// console.log(All("asdfghjiuytrs"));

// 3. Access the middle character of a string.
// console.log("Royal"[parseInt("Royal".length/2)]);


// 4. Write a function that takes a string and an index and returns the character at that index.
// function All(str,i){
//     return str[i];
// }
// console.log(All("Royal",0));

// 5. Iterate through a string and print each character on a new line.
// for (const iterator of "Royal") {
//     console.log(iterator,"\n");
// }

// ### Useful String Methods
// 1. Use the `length` property to find the length of a string.
// console.log("Royal".length);

// 2. Convert a string to uppercase and lowercase.
// console.log("Royal".toLowerCase());
// console.log("Royal".toUpperCase());

// 3. Trim the whitespace from a string.
// console.log(".","     Royal     ",".");
// console.log(".","     Royal     ".trim(),".");
// console.log(".","     Royal     ".trimStart(),".");
// console.log(".","     Royal     ".trimEnd(),".");




// 4. Find the position of a substring within a string.
// console.log("Hello World, Welcome to JS World!!".indexOf('World'));
// console.log("Hello World, Welcome to JS World!!".lastIndexOf('World'));


// 5. Replace a part of a string with another string.
// console.log("Hello World, Welcome to JS World!!".replace('World','W')); 
// console.log("Hello World, Welcome to JS World!!".replaceAll('World','W')); 


// 6. Split a string into an array of words.   
// console.log("Hello World, Welcome to JS World!!".split()); 
// console.log("Hello World, Welcome to JS World!!".split('')); 
// console.log("Hello World, Welcome to JS World!!".split(' ')); 
// console.log("Hello World, Welcome to JS World!!".split('World')); 


// 7. Concatenate two strings.
// console.log("Hello World, Welcome to JS World!!"+"NewOne"); 
// console.log("Hello World, Welcome to JS World!!".concat("NewOne")); 


// 8. Check if a string starts with a specific substring.
// console.log("Hello World, Welcome to JS World!!".startsWith("H")); 
// console.log("Hello World, Welcome to JS World!!".startsWith("h")); 


// 9. Check if a string ends with a specific substring.
// console.log("Hello World, Welcome to JS World!!".endsWith("H")); 
// console.log("Hello World, Welcome to JS World!!".endsWith("!")); 


// 10. Repeat a string multiple times.
// console.log("Royal");

// console.log(18==18);  //true
// console.log(18==18==18); //true   /
// console.log(18==18==0); //false
// console.log(18==18==1); //true  //false
// console.log(18===18===1); //true

// true
// Basic3.js:102 false
// Basic3.js:103 false
// Basic3.js:104 true
// Basic3.js:105 false





//////////////////////
// ### `const`
// 1. Declare a `const` variable and initialize it with a string. Print the variable.
// 2. Create a `const` array and add new elements to it.
// 3. Declare a `const` object and change one of its properties.
// 4. Use `const` to declare a variable that holds the result of a mathematical operation.
// 5. Declare a `const` variable in a function and print it.

// ### String Indexing
// 1. Write a function that returns the second character of a string.
// 2. Access and print the last character of a string using its index.
// 3. Create a string and use a loop to print each character on a new line.
// 4. Write a function that takes a string and an index and returns the character at that index, handling out-of-bounds indices.
// 5. Write a function that reverses a string using indexing.

// ### Useful String Methods
// 1. Use `substring` to extract a part of a string.
// 2. Use `slice` to create a new string from the 3rd to the 7th character.
// 3. Use `includes` to check if a string contains a specific word.
// 4. Use `split` to convert a string into an array of words and print the array.
// 5. Use `join` to convert an array of words back into a string and print it.
// 6. Use `charAt` to get the character at a specific index in a string.
// 7. Use `indexOf` to find the position of the first occurrence of a substring.
// 8. Use `lastIndexOf` to find the position of the last occurrence of a substring.
// 9. Use `repeat` to repeat a string multiple times and print the result.
// 10. Use `search` to find the position of a substring using a regular expression.

