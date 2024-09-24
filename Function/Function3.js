// - IIFE Function : (immidiatly invoked(it's means Fuuuuuuuuu calling) Function Expression)
// (
// function (){
//         console.log("Hello Everyone, Welcome to Javascript😃.");
// }
// )();

// (
//     function (name){
//             console.log(`Hello ${name}, Welcome to Javascript😃.`);
//     }
// )("Mohak");

//////////////////////////////////////////////
// - Generator Function

// function *Function_Name(){

// }
// function* Function_Name(){
    
// }
// function*Function_Name(){
    
// }


// function *Function_Name(){
//     yield "This is First Time Calling 😉.";
//     yield "This is Second Time Calling 😎.";
//     yield "This is Third Time Calling 😆.";
//     yield "This is Final Time Calling 😰.";
// }
// var function_ans = Function_Name();
// // console.log(function_ans.next().value);
// // console.log(function_ans.next().value);
// // console.log(function_ans.next().value);
// // console.log(function_ans.next().value);
// // console.log(function_ans.next().value); //undefined


// // next() inbuilt Method 
// console.log(function_ans.next());
// console.log(function_ans.next());
// console.log(function_ans.next());
// console.log(function_ans.next());
// console.log(function_ans.next());


//////////////////////////////////////////////
// - callback Function :
// 1 
// function Add(n1,n2){
//     console.log("Addition is : ",n1+n2);
// }

// function Real_Function(){
//     var n1 = 12;
//     var n2 = 13;
//     Add(n1,n2);
// }

// Real_Function();

// 2
// function Add(n1,n2){
//     console.log("Addition is : ",n1+n2);
// }

// function Real_Function(callback){
//     var n1 = 12;
//     var n2 = 13;
//     callback(n1,n2);      
// }

// Real_Function(Add);

//////////////////////////////////////////////


// - getter-setter Function
///////////////////////////////////////