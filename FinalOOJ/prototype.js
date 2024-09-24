function All(){
    console.log("Hello");
}

All.Nothing = "123";
All();

console.log(typeof All);



console.log(All.prototype);




//////////////////
// Using Object.create:

// Implement inheritance using Object.create to create a Student object that inherits from Person (from the previous question) and adds a study() method.

//////////////////////////////////////////////////////

// Modifying Prototypes Dynamically:

// Write a function that takes an object and adds a new method to its prototype dynamically.

//////////////////////////////////////////////////////

// Prototype-based Method Lookup:

// Create an example where method lookup occurs in the prototype chain, and explain the order in which methods are resolved.
//////////////////////////////////////////////////////

// Prototype Modification:

// Demonstrate how to modify an existing prototype method and observe its impact on existing objects instantiated from the constructor.