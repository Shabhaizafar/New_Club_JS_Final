// var Arr = [1,2,3,4,5,6,7,8,9];
//    -Basic  For loop.

// i =Array index
// for (let i = 0; i < Arr.length; i++) {
//     console.log(Arr[i]);
// }
///////////////////////////////////////////
//    - While loop in array.
// i = Array index
// var i = 4;
// while (i<Arr.length) {
//     console.log(Arr[i]);
//     i++;
// }
///////////////////////////////////////
//    - For of loop.

// return Array values.
// for (const value of Arr) {
//     console.log(value);
// }
////////////////////////////////////////
//    - For in loop.
// return  index  => values
// for (const index in Arr) {
//     console.log(index,Arr[index]);
// }

// Arr.forEach((value,index) => {
//     console.log(value,index);
// });
////////////////////////////////////////////
//    - use const for creating arrays.

// const Arr = [];

// let Arr = [1];

// console.log(Arr);


//  Arr = "Zafar";
// console.log(Arr);


// const Arr = [1];

// console.log(Arr);


// Arr = [];
// console.log(Arr);

//////////////////////////////////////////////
//    - Array destructuring.


// const Arr =  [1,2,3,4,5,6,7,8,9];
// console.log(Arr);

// // var n1 = Arr[0];
// // console.log(n1);
// // var n2 = Arr[1];
// // console.log(n2);

// // var newArr = Arr.slice(2);
// // console.log(newArr);



// const [n1,,n2,...newArr] = Arr;
// console.log(n1);
// console.log(n2);
// console.log(newArr);

// const [...newArr,...Arr2] = Arr; //invalid 
// const [...newArr,n1] = Arr; //invalid 

