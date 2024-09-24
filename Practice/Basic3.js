// ### More About Variables
// 1. Declare variables using `var`, `let`, and `const`. Assign each a different value and print them.
// var n1 = 12;
// let n2 = 13;
// const n3 = 14;
// console.log(n1);
// console.log(n2);
// console.log(n3);



// 2. Try reassigning a `const` variable and observe the error.
// n3 = 10;    //TypeError: Assignment to constant variable.
// console.log(n3);

// 3. Declare a `let` variable inside a block and print it outside the block.
// {
//     let n = 13;
//     console.log(n);
// }
// console.log(n);

// 4. Create a `const` object and modify one of its properties.
// const obj = {
//     fname : "Raj",
//     lname : "Patel"
// }
// obj = {}
// obj.fname = "Ajay";
// console.log(obj);
// 5. Declare a `let` variable, reassign it within a loop, and print it both inside and outside the loop.
// for (let i = 0; i <5; i++) {
//    console.log(i) ;
// }
// console.log(i);

// ### `let`
// 1. Declare a variable using `let`, assign it a value, then change the value.
// let n1;
// n1 = 13;
// console.log(n1);
// n1 = 14;
// console.log(n1);


// 4. Declare a `let` variable inside a function and try accessing it outside the function.
// function All(){
//     let a = 12;
// }
// All();
// console.log(a);
// 5. Use a `let` variable to hold a counter in a while loop and print the counter value after the loop.
// let i = 0;
// while (i<5) {
//     let counter = 0;
//     i++;
// }
// console.log(counter);

// ### `const`

// 2. Declare an array or object with `const` and modify its contents.
// const Arr  = [1,2,3,4];
// console.log(Arr);
// // Arr[0] = 100;
// // Arr =[]
// console.log(Arr);

// 3. Create a `const` object with nested properties and modify one of the nested properties.
// const obj = {
//     fname : "Raj",
//     Address : {
//         city : "GNR",
//         nation : "India"
//     }
// }
// obj.Address.city = "AMD";
// obj.Address['city'] = "AMD";
// obj['Address']['city'] = "AMD";
// obj['Address'].city = "AMD";

// console.log(obj.Address.city);

// 4. Declare a `const` variable inside a function and try reassigning it inside the function.
// Const  reassign not Possible

// 5. Use `const` to declare a configuration object and access its properties in different functions.
function All(){
    console.log(obj);
}

All();
