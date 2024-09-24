/24-04-2024/
// - Intro to objects : 
// - key-values pairs   
// - property  = key + value
// - methods = assign specific work

const Person = {
    //key     value          = property
    fname : "Raj",
    lname : "Patel",
    age : 10,
    address : "GNR",
    contact_no : 1234567890
}
// var Arr = [1,2,3,4,5];
console.log(Person);
// console.table(Arr);
// console.table(Person);

//How to Access Object Property : 
// - Dot vs Bracket Notation.
// 1) Dot Notation =>  .
// console.log(Person.fname);

// //2) Bracket Notation =>    []
// console.log(Person["fname"]);
/////////////////////////////////////////////////

//How to Modify Object Property value  : 
// 1) Dot Notation =>  .
// Person.age = 100;
// console.log(Person);

//2) Bracket Notation =>    [] 
// Person["lname"] = "Shah";
// console.log(Person);

/////////////////////////////////////////
//  How to Add New Property in a Obj : 

// 1) Dot Notation =>  .
// Person.Gender = "Male";
// console.log(Person);

//2) Bracket Notation =>    [] 
// Person["Salary"] = 0;
// console.log(Person);

//////////////////////////////////////////////
// How to remove Property : 

// 1) Dot Notation =>  .
// delete  Person.address;
// console.log(Person);


// //2) Bracket Notation =>    [] 
// delete Person["age"];
// console.log(Person);


///////////////////////////////////////
// - Iterate objects. 

// Basic For Loop : X
// While Loop :  X
// do while : X
// foreach loop  : X

// for of  loop : X


// for in loop   
// 1) dot notation 
// for (const key in Person) {
//     // console.log(key,Person.key);
// console.log(key,Person[key]);
// }


//////////////////////////////////////





// https://www.codeguage.com/courses/js/objects-quiz







// asdfghj








// - Computed properties.
// - Spread operator in objects.
// - Object Destructuring.
// - Objects inside Array.
// - Nested Destructuring.