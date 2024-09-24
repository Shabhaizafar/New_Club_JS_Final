// Object : 
// key : value pair    === property
// Methods.
// JS -> Object based.



// How to Create an Object : 

//1) object Literal : {}
// var obj  = {
//     fname : "Raj",
//     lname : "Patel"
// };
// console.log(obj,typeof obj);


//2) Object.create();

// var obj = Object.create({});
// console.log(obj,typeof obj);


// 3) Object

// var obj = new Object();
// console.log(obj,typeof obj);

// 4) using Function 
function Person(){
    var user={};
    user.fname = "Raj";
    user.lname = "Patel";
    return user;
}


var obj = Person();
console.log(obj,typeof obj);
