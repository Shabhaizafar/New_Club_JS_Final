// - This inside arrow functions.

// var obj1 = {
//     fname : "Raj",
//     lname : "Shah",
//     Age : 10,
//     greet : function (Hobby1,Hobby2){
//             console.log(`Hello,My name is ${this.fname} ${this.lname}.and i'm ${this.Age} Years Old.My Hobbies are  ${Hobby1},${Hobby2}.`);
//         }
// }

// var obj2 = {
//     fname : "Mohak",
//     lname : "Patel",
//     Age : 19
// }

// console.log(obj1);
// console.log(obj2);

// // obj1.greet();

// console.log("Using Call : ");
// obj1.greet.call(obj1,"Cricket","Football");
// obj1.greet.call(obj2,"Sleeping","Gaming");

// this  ==== globely Variable
// var fname = "Mohak";
// /After Changes/
// var obj1 = {
//     fname : "Raj",
//     lname : "Shah",
//     Age : 10,
//     greet :  (Hobby1,Hobby2)=>{
//             console.log(`Hello,My name is ${this.fname} ${this.lname}.and i'm ${this.Age} Years Old.My Hobbies are  ${Hobby1},${Hobby2}.`);
//         }
// }

// var obj2 = {
//     fname : "Mohak",
//     lname : "Patel",
//     Age : 19
// }

// console.log(obj1);
// console.log(obj2);

// // obj1.greet();

// console.log("Using Call : ");
// obj1.greet.call(obj1,"Cricket","Football");
// obj1.greet.call(obj2,"Sleeping","Gaming");


var fname = "Ajay";

var Outer = ()=>{
    var fname = "Raj";
    var Inner = ()=>{
        console.log("Inner : ",this.fname);
    }
    Inner();
    console.log(this.fname);
}
Outer();