// ### Booleans and Comparison Operators
// 1. Declare two boolean variables and use comparison operators to compare them.
// var b1 = true;
// var b2 = false;

// console.log(b1 == b2 == false); //false  //true
// console.log(b1 != b2); // true

// var n = (1,2,3);
// console.log(n); //3


// var n1,n2,n3 = (1,2,3);
// console.log(n1); // undefined
// console.log(n2); // undefined
// console.log(n3);// 3




// 2. Write expressions using `==`, `===`, `!=`, and `!==` operators.
// var n1 = 0;
// var n2 = false;
// console.log(n1==n2); // true
// console.log(n1!=n2); // false
// console.log(n1===n2); // false
// console.log(n1!==n2); // true

// 3. Use the `<`, `>`, `<=`, and `>=` operators to compare numbers.
// var n1 = 12;
// var n2 = 13;
// console.log(n1<n2);
// console.log(n1<=n2);
// console.log(n1>n2);
// console.log(n1>=n2);

// 4. Write a function that checks if a number is between two other numbers.
// function All(n){
//     if(n>=10 && n<=30)
//         console.log("In range");
//     else
//         console.log("Out of Range");
// }
// All(1);

// 5. Compare strings using comparison operators and explain the results.
// var s1 = "1";
// var s2 = "[1]";

// console.log(s1==s2);//false  
// console.log(s1===s2);//false


// ### Truthy and Falsy Values
// 1. Write a function that takes a value and returns whether it is truthy or falsy.
// function All(v)
// {
//     var ans = (v)? true: false;
//     return ans;
// }
// console.log(All(""));

// 2. List out different values that are considered falsy in JavaScript.

// false , 0 ,NaN,undefined,null,""

// 3. Write a function that takes an array of values and returns an array of truthy values.
// function All(Arr)
// {
//     var results = [];
//     for (const iterator of Arr) {
//         if(iterator)
//         {
//             results.push(iterator);
//         }
//     }
//     return results;

// }
// console.log(All([1,2,4,6,"",null,[]]));
// 4. Check the truthiness of an empty object and an empty array.

//true

// 5. Use a truthy value in an `if` statement to print a message.

// if("asdf")
// {
//     console.log("sdfg");
// }
// else{
//     console.log("sdfgertyuiop");

// }

// ### If Else Statement
// 1. Write a program that uses an `if-else` statement to check if a number is positive, negative, or zero.
// var n = 0;
// if(n>0)
// {
//     console.log("positive");
// }
// else{
//     if(n<0)
//     {
//         console.log("negative");
//     }
//     else{
//         console.log("zero");
//     }
// }

// 2. Create a function that checks the age and prints whether the person is a minor or an adult.
// function All(age){
//     if(age>=18)
//     {
//         console.log("adult");
//     }
//     else{
//         console.log("minor");
//     }
// }
// All(122);

// child, teeneger,adult ,senior 

// 3. Write an `if-else` statement that checks if a string is empty or not.
// var str = "";
// if(str)
// {
//     console.log("Str not Empty");
// }
// else{
//     console.log("Empty");
// }

// 4. Use an `if-else` statement to print whether a number is even or odd.
// if(1%2==0)
// {
//     console.log("Even");
// }
// else{
//     console.log("Odd");
// }

// 5. Write a function that takes a score and prints the corresponding grade (A, B, C, D, F).
// var score = 78;
// if(score<33)
//     console.log("F");
// if(score>=33 && score<=60)
//     console.log("D");
// if(score>60 && score<=75)
//     console.log("C");
// if(score>75 && score<=85)
//     console.log("B");
// if(score>85 && score<=100)
//     console.log("A");


//////////////////////////////////////////
### Booleans and Comparison Operators
1. Write a function that takes two numbers and returns `true` if the first is greater than the second.
2. Use `==` and `===` to compare `42` and `"42"`.
3. Write a function that takes two strings and returns `true` if they are equal.
4. Use `!=` and `!==` to compare `0` and `false`.
5. Write a function that checks if a number is within a range (10 to 20) using comparison operators.
6. Compare two boolean values using `==` and `===`.
7. Write a function that checks if a string contains only uppercase letters.
8. Use `<`, `<=`, `>`, and `>=` to compare two numbers and print the results.
9. Compare two arrays using `==` and `===` and explain the result.
10. Write a function that checks if a variable is a boolean using comparison operators.

### Truthy and Falsy Values
1. Write a function that returns `true` if a given value is truthy.
2. List all falsy values in JavaScript.
3. Write a function that filters out falsy values from an array.
4. Check the truthiness of an empty string and print the result.
5. Write a function that takes a value and returns a default value if it is falsy.
6. Check the truthiness of `0` and print the result.
7. Use an `if` statement to print a message only if a variable is truthy.
8. Write a function that checks if an object is empty (has no properties).
9. Check the truthiness of `NaN` and print the result.
10. Use logical `||` to assign a default value to a variable if another variable is falsy.

### If Else Statement
1. Write a function that checks if a number is positive, negative, or zero.
2. Use `if-else` to check if a string contains more than 10 characters.
3. Write a function that checks if a person is eligible to vote based on their age.
4. Use `if-else` to print whether a number is a multiple of 3.
5. Write a function that checks if a value is `null` or `undefined`.
6. Use `if-else` to check if a number is even or odd.
7. Write a function that takes a temperature in Celsius and prints a message if it is above 30 degrees.
8. Use `if-else` to check if a number is within a specific range.
9. Write a function that checks if a password is strong (contains at least 8 characters, including numbers and special characters).
10. Use `if-else` to print a message based on the value of a boolean variable.
