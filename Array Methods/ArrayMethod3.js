// var Arr = [1,2,3,4,5,6,7,8,40,34,23,12];
// console.log(Arr);

// var ans  = Arr.every((a,i,b)=>{
//     // return b;
//     console.log(a);
// });
///////
// var ans = Arr.some((a,i,b)=>{
//     // console.log(a,i,b);
//     if(a>=40 && i<3)
//     {
//         return true;
//     }
// });
// console.log(ans);
/////////////////////////////////////////
// var Arr = [1,2,3,4,5,6,7,8,40,34,23,12];
// console.log(Arr);

// Arr.fill

// var ans = Arr.fill(0,2,5);
// var ans = Arr.fill(0,2,-2);  //Arr.length-1  11
// console.log(Arr);
// console.log(ans);   
///////////////////////////////
// Arr.filter

// var ans = Arr.filter((v,i,a)=>{
//     // return v<20 && i>8;
//     // return v<20;
//     if(v<20)
//         {
//             console.log(v);
//         }
// });
// console.log(ans);
// console.log(Arr);

// var ans = Arr.forEach((v,i,a) => {
//     if(v<20)
//         {
//             console.log(v);
//         }
// });
// console.log(ans);
/////////////////////////////////////////
// Arr.find
// var Arr = [1,2,3,4,5,6,7,8,40,34,23,12];

// var ans  = Arr.find((v,i,a)=>{
//     return v==3;
// });

// console.log(ans);


///////////////////////////////////


///////////////////////////////////

// Tasks : 
// Fill Method
// Basic Fill Usage
// 1_ Create an array with 5 elements and fill it with the value 0.

///-----------------------------------------------
// Partial Fill
//2)  Create an array [1, 2, 3, 4, 5] and fill the values from index 1 to 3 with the value 7.

///-----------------------------------------------
// Fill with Dynamic Values
//3)  Create an array of length 10 and fill it with the value of the current index (i.e., [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]).


///-----------------------------------------------
// Filter Method
// Basic Filter Usage

//4)  Filter the even numbers from an array [1, 2, 3, 4, 5, 6].

// Array 
///-----------------------------------------------
// Filter by String Length

//5)  Filter an array of strings ['apple', 'banana', 'cherry', 'date'] to include only those strings with more than 5 characters.

///-----------------------------------------------
// Filter with Objects
//6)  Given an array of objects {name: string, age: number}, filter out those objects where age is less than 18.

///-----------------------------------------------
// Find Method
// Basic Find Usage

//7) Find the first even number in an array [1, 3, 7, 8, 10].

///-----------------------------------------------
// Find Object in Array
//8)  Given an array of objects {name: string, age: number}, find the object with the name 'Jane'.

///-----------------------------------------------
// Find Index Using Find
//9) Find the index of the first number greater than 10 in the array [2, 5, 8, 12, 15].

// var Arr = [2, 5, 8, 12, 15];
// var ans =Arr.find((v,i)=>{
//     if(v>10)
//         {
//             return v;
//         }
// });
// console.log(Arr.indexOf(ans));

///-----------------------------------------------
