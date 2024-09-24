// /22-04-2024/
// //    - Push pop shift unshift.
// // const Arr = [1,2,3,4,5,6];
// // console.log(Arr);
// // 1) push
// //  (add value -> last index)
// // Add Multiple values possible
// // Arr.push(100,101,102);

// // console.log(Arr);


// //2)  pop
// // remove value -> last index 
// // remove only single Value
// // Arr.pop();

// // Arr.pop().pop(); // not valid 

// // console.log(Arr);


// // 3) shift
// // remove value -> starting index 
// // remove only single Value
// // Arr.shift();
// // console.log(Arr);


// // 4) unshift
// //  (add value -> starting index)
// // Add Multiple values possible

// // Arr.unshift(100,1000);
// // console.log(Arr);


// ///////////////////////////////////////////////////
// //    - Primitive vs reference data types.
// // var n1 = 12;
// // var n2 = n1;
// // console.log("Value of N1 : ",n1);
// // console.log("Value of N2 : ",n2);
// // n1 = 100;
// // console.log("After Changed : ");
// // console.log("Value of N1 : ",n1);
// // console.log("Value of N2 : ",n2);


// // var Arr1 = [1,2,3,4];
// // var Arr2 = Arr1;
// // console.log("Arr1 : ",Arr1);
// // console.log("Arr2 : ",Arr2);
// // Arr1.push(100);
// // Arr2.shift();
// // console.log("After Changed : ");
// // console.log("Arr1 : ",Arr1);
// // console.log("Arr2 : ",Arr2);

// //////////////////////////////////////////////////
// //    - Clone array & spread operator.

// const Arr = [1,2,3,4,5];
// // console.log("After Changed : ");
// // console.log(Arr);

// /wrong Method/ 
// // const cloneArr = Arr;
// // console.log(cloneArr);

// // cloneArr.push(100);
// console.log(Arr);
// // console.log(cloneArr);
// /Method End/ 


// 1)using concat 
// const cloneArr = Arr.concat(1000);
// // concat Array method
// cloneArr.push(100);
// console.log(Arr);
// console.log(cloneArr);

// 2) using slice 
// const cloneArr = Arr.slice(0,3);
// // slice Array method
// cloneArr.push(100);
// console.log(Arr);
// // console.log(cloneArr);


// /Important-Method/
// // 3) using spread Operator : [...]

// const cloneArr = [...Arr];
// console.log(cloneArr);
// cloneArr.push(100);
// console.log(Arr);
// console.log(cloneArr);
/////////////////////////////////////////////////
// const n1 = 12;
// const n1 = 12;
// console.log(n1);



// const Arr1 = [1,2,4];
// console.log(Arr1);
// Arr1.push












//////////////////////////////////////////////////

