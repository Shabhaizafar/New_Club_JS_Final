// - Higher-order-Function : 



// function myfu1(callback2){
//     var sum = callback2();
//     console.log(sum);
// }

// function Higher_Main(callback){
//     function inner_Fu(){
//         var n1 = 12;
//         var n2 = 13;
//         return n1+n2;
//     }

//     callback(inner_Fu);

// }

// Higher_Main(myfu1);


// nested Function 

// var n1 = 100;
// console.log("Value of N1 (before outer): ", n1);//100
// function outer_function() {
//     var n1 = 12;
//     console.log("Value of N1(before inn1 ) : ", n1);//12
//     function inner_Function1() {
//         var n1 = 13;
//         console.log("Value of N1(before inn2 ) : ", n1);//13
//         function inner_Function2() {
//             var n1 = 14;
//             console.log("Value of N1(in inn2 ) : ", n1);//14
//         }
//         inner_Function2();
//         console.log("Value of N1(after inn2 ) : ", n1);//   //13
//     }
//     inner_Function1();
//     console.log("Value of N1(after inn1 ) : ", n1);//12
// }
// outer_function();
// console.log("Value of N1 (after outer): ", n1);//100



// var n1 = 100;
// console.log("Value of N1 (before outer): ", n1);//100
// function outer_function() {
//      n1 = 12;
//     console.log("Value of N1(before inn1 ) : ", n1);//12
//     function inner_Function1() {
//          n1 = 13;
//         console.log("Value of N1(before inn2 ) : ", n1);//13
//         function inner_Function2() {
//              n1 = 14;
//             console.log("Value of N1(in inn2 ) : ", n1);//14
//         }
//         inner_Function2();
//         console.log("Value of N1(after inn2 ) : ", n1);//14
//     }
//     inner_Function1();
//     console.log("Value of N1(after inn1 ) : ", n1);//14
// }
// outer_function();
// console.log("Value of N1 (after outer): ", n1);//14




// const n1 = 100;
// console.log("Value of N1 (before outer): ", n1);//100
// function outer_function() {
//     const n1 = 12;
//     console.log("Value of N1(before inn1 ) : ", n1);//12
//     function inner_Function1() {
//          n1 = 13;
//         console.log("Value of N1(before inn2 ) : ", n1);//13
//         function inner_Function2() {
//              n1 = 14;
//             console.log("Value of N1(in inn2 ) : ", n1);//14
//         }
//         inner_Function2();
//         console.log("Value of N1(after inn2 ) : ", n1);//13
//     }
//     inner_Function1();
//     console.log("Value of N1(after inn1 ) : ", n1);//12
// }
// outer_function();
// console.log("Value of N1 (after outer): ", n1);//100



// var   let     const 

// d   not d    not d 
// i     i      not i 



// var n1 = 12;
// {
//     var n1 = 13;
//     console.log(n1);//13
// }
// console.log(n1);//12



// {
//     let n1 = 12;
//     console.log(n1);
// }
// console.log(n1);

// let n1 = 12;

// console.log(window.n1);

console.log(n1);


let n1 = 12;