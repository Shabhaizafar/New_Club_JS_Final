// Hoisting : 

// --------------------------------
//error :   Uncaught ReferenceError: value1 is not defined
// console.log(value1);
// --------------------------------

// console.log(value1);//undefined
// var value1=10;

//---------------------------------

// Uncaught ReferenceError: Cannot access 'value1' before initialization
// console.log(value1);
// let value1=10;

//------------------------------------
// Uncaught ReferenceError: Cannot access 'value1' before initialization

// console.log(value1);
// const value1=10;
//--------------------------------------

//error :   Uncaught ReferenceError: value1 is not defined
// console.log(value1);
// value1=12;



// console.log(value1);
// console.log("Hello");

// var v1 = 12;


// var value1 =10;
// ---------------------------------------------
// Function declarations are hoisted : 

// Hoisting();

// function Hoisting(){
//     console.log("This is Hoisting supported Function.");
// }

// -----------------------------


//but Function Expression/Anonymous and Arrow Function are not Hoisted

// Uncaught TypeError: Hoisting is not a function

// Hoisting();

// var Hoisting = function (){
//     console.log("This is Hoisting supported Function.");
// }


// Hoisting();

// var Hoisting =  ()=>{
//     console.log("This is Hoisting supported Function.");
// }


// =============================================
// Lexical Scope.
// Block Scope Vs Function Scope.


// var value1 = 12;
// function Add(n1){
//     var n2 = 13;
//     function inner(){
//         var n1 = 100;
//         console.log("inner Value 1 : ",n1);
//         console.log("inner Value 2 : ",n2);    
//     }
//     inner();
//     console.log("Value 1 : ",n1);
//     console.log("Value 2 : ",n2);
// }
// Add(value1);



// {
//     var n1 = 12;
//     let n2 = 13;
//     const n3 = 14;
//     console.log(n1);
//     console.log(n2);
//     console.log(n3);
// }
// console.log(n1);
// console.log(n2);
// console.log(n3);

// function Add(){
//     var n1 = 12;
//     let n2 = 13;
//     const n3 = 14;
//     console.log(n1);
//     console.log(n2);
//     console.log(n3);
// }
// console.log(n1);
//     console.log(n2);
//     console.log(n3);


    
// function Add(){
//     var n1 = 12;
//     let n2 = 13;
//     const n3 = 14;
//     console.log(n1);
//     console.log(n2);
//     console.log(n3);
// }
// Add();
//     // console.log(n1);
//     // console.log(n2);
//     // console.log(n3);





//     var n1 = 12;
//     let n2 = 13;
//     const n3 = 14;
//     function Add(){
//         n1 = 100;
//         n2 = 200;
//         // n3 = 500;
//         console.log(n1);
//         console.log(n2);
//         console.log(n3);
//     }
//     Add();
//         console.log( "Outer n1",n1);
//         console.log(n2);
//         console.log(n3);




// ---------------------------------------------------------
// (in Note + Pen)
// write down diffrence between lexical scope,Function scope,block scope 