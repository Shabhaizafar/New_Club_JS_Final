// const div = document.querySelector('div');
// const h1 = document.querySelector('h1');
// const body = document.body;



// div.onclick = function (){
//     console.log("First");
// }

// div.onclick = function (){
//     console.log("Second");
// }



//////////////////
// function All(){
//     console.log("First");
// }

// div.addEventListener('click',All);

// div.addEventListener('click',function (){
//     console.log("First");
// });


// div.addEventListener('click',function (){
//     console.log("Second");
// });


// Event Bubbling : 
// body.addEventListener('click',function (){
//     console.log("Body");
// });
// div.addEventListener('click',function (){
//     console.log("Div");
// });
// h1.addEventListener('click',function (){
//     console.log("H1");
// });


// Event Capturing :

// body.addEventListener('click',function (){
//     console.log("Body");
// },true);
// div.addEventListener('click',function (){
//     console.log("Div");
// },true);
// h1.addEventListener('click',function (){
//     console.log("H1");
// },false);


// const div = document.querySelector('div');
// const h1 = document.querySelector('h1');
// const body = document.body;


// body.addEventListener('click',function (event){
//     console.log(event.target);
// });