// // - Call , apply and bind method.


// //Function Declaration/Initialization
// // function All(fname,lname,Age){
// //     console.log("Hello Everyone,Welcome to Javascript !!!");
// //     console.log(`Hello,My name is ${fname} ${lname}.and i'm ${Age} Years Old.`);
// // }

// //calling /invoked
// // All("Raj","Sharma",10);



// // All.call 
// // All.call("Kadia","awer",20);


// // // All.apply
// // All.apply();


// // // All.bind
// // All.bind();


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
// var ans2 = obj1.greet.call(obj1,"Cricket","Football");
// console.log(ans2);
// obj1.greet.call(obj2,"Sleeping","Gaming");


// console.log("Using Apply : ");
// obj1.greet.apply(obj1,["Cricket","Football"]);
// obj1.greet.apply(obj2,["Cricket","Football"]);


// // bind :
// console.log("Using Bind : ");
// var ans =  obj1.greet.bind(obj1);

// ans("Cricket","Football");


// obj1.greet.bind(obj2,["Cricket","Football"]);


