// ### Template Strings : 
// 1. Use template strings to print a message that includes variables : 
// var fname = "Raj";
// var Age = 12;
// console.log(`Your Name is ${fname}.Age is ${Age}.`);

// 2. Create a multi-line string using template strings.
// console.log(`This 
// is 
// Multi 
// Line 
// String.
// `);

// 3. Use template strings to create a formatted address from separate variables.
// var hno = 10;
// var locationA = "GNR";
// var code = 382421;

// console.log(`${hno},ABC
// ${locationA}-${code}.`);

// 4. Write a function that takes a name and age and returns a greeting message using template strings.
// function All(fname,Age ){
//     return `Your Name is ${fname}.Age is ${Age}.`;
// }
// console.log(All("Arin",35));
// 5. Use template strings to create an HTML snippet.

// console.log(`
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <!-- <script src="console.js"></script> -->
//      <!-- <script src="BasicAll.js"></script> -->
//       <!-- <script src="BasicAll2.js"></script> -->
//        <!-- <script src="Basic3.js"></script> -->
//         <!-- <script src="Basic4.js"></script> -->
//          <script src="Basic5.js"></script>
// </body>
// </html>
// `);

// ### `null`, `undefined`, `BigInt`, `typeof`
// 1. Declare variables with `null` and `undefined` values and check their types using `typeof`.
// var n1 = null;
// var n2 = undefined;
// console.log(n1,typeof n1);
// console.log(n2,typeof(n2));


// 2. Create a `BigInt` and perform an operation with it.
// var n1 = 12n;
// var n2 = BigInt(12);
// console.log(n1+n2);

// 3. Write a function that checks the type of a variable and returns a string describing its type.
// function All(v){
//     return typeof v;
// }
// console.log(All([]));

// 4. Declare a variable without assigning a value and check if it is `undefined`.
// var n1;
// console.log(n1,typeof n1);


// 5. Compare `null` and `undefined` using `==` and `===`.
// var n1 = null;
// var n2 = undefined;

// console.log(n1==n2);
// console.log(n1===n2);




//////////////////////////
// ### Template Strings
// 1. Create a template string that includes your name and age.
// 2. Use template strings to concatenate two strings.
// 3. Create a multi-line template string with a quote on each line.
// 4. Write a function that takes a first name and last name and returns a full name using template strings.
// 5. Use template strings to create a sentence that includes the length of a string.

// ### `null`, `undefined`, `BigInt`, `typeof`
// 1. Declare a variable without initializing it and check if it is `undefined`.
// 2. Assign `null` to a variable and check its type using `typeof`.
// 3. Create a `BigInt` and use it in an addition operation with another `BigInt`.
// 4. Write a function that takes any value and returns its type.
// 5. Compare `null` and `undefined` using strict equality and explain the result.
// 6. Declare a variable using `BigInt` and multiply it by another `BigInt`.
// 7. Write a function that returns `null` and check its type.
// 8. Compare `null` with `0` and explain the result.
// 9. Declare a variable with `undefined` and try to add it to a number.
// 10. Use `typeof` to check the type of an array, object, and function.