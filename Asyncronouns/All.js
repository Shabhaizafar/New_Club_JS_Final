// - Is Javascript a synchronous or asynchronous programming language ?.
// = >  JS is a synchronous Programing Language.
// - > But we can change in to asynchronous Programing Language.
// - > using defer,async

// Callback Queue.
// function All(){
//     main(12);
// }
// All();
// main(10);
// function main(i){
//     console.log("Value : ",i);
// }
// main(100);

// Understand callbacks in general.


function Main(Callback){

    Callback();
}
Main(Second);



function Second(){
    console.log("sedrf");
}



// console.log(document.querySelector('h1').innerHTML);

//12 , 10 ,100
//10 , 100 ,12