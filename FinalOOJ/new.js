//new Keyword 

// JavaScript new keyword is used to create an instance of an object that has a constructor function.

// On calling the constructor function with the ‘new’ operator, the following actions are taken:

// A new empty object is created.
// The new object’s internal ‘Prototype’ property (__proto__) is set the same as the prototype of the constructing function.
// The ‘this’ variable is made to point to the newly created object. It binds the property that is declared with the ‘this’ keyword to the new object.
// About the returned value, there are three situations below. 


////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////
//How to Create a Multiple Object 

function Person(fname,lname){
    this.fname = fname;
    this.lname = lname;
}
Person.prototype.Hello = function (){
        console.log(`Hello ${this.fname} ${this.lname}.`);
    }
    console.log(Person.prototype);

var p1 = new Person("Raj","Patel");
var p2 = new Person("Ajay","Shah");
console.log(p1);
console.log(p2);

p1.Hello();
p2.Hello();

// new =this 

var obj1 = {fname :"Raj"};

var obj2 = obj1;

// p1 = new;

// new = {}

// this = new;
