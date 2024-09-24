/*
1. **Basic Array Operations:**
   - Write a program that initializes an empty array and adds elements to it using `push` and `unshift`.
   - Implement a function that removes elements from the end and beginning of an array using `pop` and `shift`.

2. **Primitive vs Reference Data Types:**
   - Create examples that demonstrate the difference between primitive data types (like numbers and strings) and reference data types (like arrays and objects).

3. **Cloning Arrays & Spread Operator:**
   - Write a function to clone an array using the spread operator (`...`).
   - Implement a program that modifies one array and ensures the original array remains unchanged due to reference type behavior.

4. **Using `const` for Arrays:**
   - Create an array using `const` and demonstrate how you can modify its elements without reassigning the array itself.

5. **Loops with Arrays:**
   - Write a program using a `for` loop to iterate over an array of numbers and calculate their sum.
   - Implement a `while` loop that iterates over an array of strings until it finds a specific element.

6. **For...of Loop:**
   - Write a program that uses a `for...of` loop to iterate over an array of objects and log a specific property of each object.

7. **For...in Loop:**
   - Create an object with array-like properties and use a `for...in` loop to iterate over its enumerable properties.

8. **Array Destructuring:**
   - Write a function that takes an array of numbers as input and returns the first and last element using array destructuring.

9. **Advanced Array Operations:**
   - Implement a program that sorts an array of objects based on a specific property using array methods and arrow functions.
   - Write a function that accepts two arrays and returns a new array with elements that are common to both arrays.

10. **Error Handling with Arrays:**
    - Implement a program that safely accesses a nested property of an object using array destructuring and handle cases where properties might be `undefined`.
*/

// 1. **Basic Array Operations:**
//    - Write a program that initializes an empty array and adds elements to it using `push` and `unshift`.
// var Arr = [];

// add value from the Last index
// Arr.push(12);
// Arr.push(14);

// // add value from the first index
// Arr.unshift(100);
// Arr.unshift(0);

// console.log(Arr);
//    - Implement a function that removes elements from the end and beginning of an array using `pop` and `shift`.
// var Arr = [1,2,3,4,5,6,7,8,9,10];
// function All(){
//     //remove the Value from the Last Index
//     Arr.pop();
//     //remove the Value from the starting Index
//     Arr.shift();
//     console.log(Arr);
// }

// All();
// All();
// All();
// All();
// All();


// 2. **Primitive vs Reference Data Types:**
//    - Create examples that demonstrate the difference between primitive data types (like numbers and strings) and reference data types (like arrays and objects).

// var n1 = 12;
// var n2 = n1;
// console.log(n1);
// console.log(n2);
// n1++;
// console.log(n1);
// console.log(n2);

// var Arr = [1,2,3];
// var Arr2 = Arr;
// console.log(Arr);
// console.log(Arr2);

// Arr.push("zfr");
// console.log(Arr);
// console.log(Arr2);

///////////////////////////////

// 3. **Cloning Arrays & Spread Operator:**
//1) concat()
//2) slice()
//3) ... (sp............)
//    - Write a function to clone an array using the spread operator (`...`).
// var Arr = [1,2,3,4];
// function All(arr){
//     var cloneArr = [...arr];
//     console.log(cloneArr);
//     cloneArr.push("ag");
//     console.log(cloneArr);
//     console.log(Arr);
// }
// All(Arr);

// var Arr = [1,2,3,4];
// function All(arr){
//     var cloneArr = arr.concat();
//     console.log(cloneArr);
//     cloneArr.push("ag");
//     console.log(cloneArr);
//     console.log(Arr);
// }
// All(Arr);

// var Arr = [1,2,3,4];
// function All(arr){
//     var cloneArr = arr.slice();
//     console.log(cloneArr);
//     cloneArr.push("ag");
//     console.log(cloneArr);
//     console.log(Arr);
// }
// All(Arr);

// //    - Implement a program that modifies one array and ensures the original array remains unchanged due to reference type behavior.
// var Arr = [1,2,3,4,5];
//     var cloneArr = Arr.slice();
//     console.log(cloneArr);
//     cloneArr.push("ag");
//     console.log(cloneArr);
//     console.log(Arr);


// 4. **Using `const` for Arrays:**
//    - Create an array using `const` and demonstrate how you can modify its elements without reassigning the array itself.

//must use 'const' to declare an Array


// - Write a program using a `for` loop to iterate over an array of numbers and calculate their sum.

// var Arr = [1,2,3,4,5];
// var sum = 0;

// for (let i = 0; i < Arr.length; i++) {
//     console.log(Arr[i],i);
//     sum+=Arr[i];
// }
// console.log(sum);




////////////////////////////////

// 1. **Array Initialization and Modification:**
//    - Write JavaScript code to initialize an array with values `[1, 2, 3]`.
//    - Modify the array to add `4` to the end and `0` to the beginning using appropriate array methods.

// 2. **Array Methods Practice:**
//    - Implement a function that takes an array and returns a new array with the elements reversed.
//    - Write code to find the index of the first occurrence of `3` in `[1, 2, 3, 4, 5, 3]` using array methods.

// 3. **Nested Arrays and Accessing Elements:**
//    - Create a nested array `[[1, 2], [3, 4], [5, 6]]`.
//    - Access and log the value `4` from the array.

// 4. **Array Iteration and Transformation:**
//    - Write a `for...of` loop to iterate over an array `[10, 20, 30, 40]` and print each element multiplied by `2`.
//    - Use the `map` function to transform `[1, 2, 3, 4, 5]` into an array where each element is squared (`[1, 4, 9, 16, 25]`).

// 5. **Array Filtering and Reduction:**
//    - Filter `[1, 2, 3, 4, 5]` to create an array containing only even numbers using the `filter` method.
//    - Calculate the sum of `[10, 20, 30, 40, 50]` using the `reduce` method.

//////////////////////////////
// - Implement a `while` loop that iterates over an array of strings until it finds a specific element.
// var Arr = ["Zafar","ZA","Z","A","zfr","AZ"];
// // var i = 0;
// // var finds = "AsdfgZ";
// // while(i<Arr.length){
// //    if(Arr[i]==finds)
// //    {
// //       console.log("Exist");
// //       break;
// //    }
// //    i++;
// // }

// if(Arr.includes("AasZ"))
// {
//    console.log("Exist");
// }
// else{
//    console.log("doesn't Exist");
// }

// 6. **For...of Loop:**
//    - Write a program that uses a `for...of` loop to iterate over an array of objects and log a specific property of each object.
// let students = [
//    { id: 1, name: "Alice", age: 20 },
//    { id: 2, name: "Bob", age: 22 },
//    { id: 3, name: "Charlie", age: 21 }
//  ];
// for (const iterator of students) {
//       console.log(iterator.age);
// }



// 7. **For...in Loop:**
//    - Create an object with array-like properties and use a `for...in` loop to iterate over its enumerable properties.
// let students = [
//    { id: 1, name: "Alice", age: 20 },
//    { id: 2, name: "Bob", age: 22 },
//    { id: 3, name: "Charlie", age: 21 }
//  ];
//  for (const key in students) {
//       for (const key2 in students[key]) {
//          console.log(key2,students[key][key2]);
//       }
//  }

// 8. **Array Destructuring:**
//    - Write a function that takes an array of numbers as input and returns the first and last element using array destructuring.
// var Arr = [11,12,13,14,15]; //11,15
// function All(a)
// {
//    let [v1,,,,v2] = a;
//    return `First Value : ${v1} Last Value : ${v2}`;
// }
// console.log(All(Arr));


// 9. **Advanced Array Operations:**
//    - Implement a program that sorts an array of objects based on a specific property using array methods and arrow functions.

//    - Write a function that accepts two arrays and returns a new array with elements that are common to both arrays.
/H.W/

// 10. **Error Handling with Arrays:**
//     - Implement a program that safely accesses a nested property of an object using array destructuring and handle cases where properties might be `undefined`.

let students = [
   { id: 1, name: "Alice", age: undefined },
   { id: 2, name: "Bob", age: 22 },
   { id: 3, name: "Charlie", age: undefined }
 ];
for (const key in students) {
   for (const key2 in students[key]) {
      if(!students[key][key2])
      {
         console.log("This is Not Define Try to Add New Value");
         students[key][key2] = prompt();
         console.log(key2,students[key][key2]);
      }
      else{
         console.log(key2,students[key][key2]);
      }
   }
}

///////////////////////////////////////////
// Output 1 :
// let students = [
   //    { id: 2, name: "Bob", age: 22 },
   //    { id: 3, name: "Charlie", age: 21 }
   //    { id: 1, name: "Alice", age: 20 },
//  ];


// Output 2 :
// let students = [
   //    { id: 1, name: "Alice", age: 20 },
   //    { id: 3, name: "Charlie", age: 21 }
   //    { id: 2, name: "Bob", age: 22 },
//  ];
