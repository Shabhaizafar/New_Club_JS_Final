//How to Create a Multiple Object 

// class Person{
//     constructor(fname,lname){
//         this.firstname = fname;
//         this.lastname = lname;
//     }
//     Hello = function (){
//         console.log(`Hello ${this.firstname} ${this.lastname}.`);
//     }
// }
// var p1 = new Person("Raj","Patel");
// var p2 = new Person("Ajay","Shah");
// console.log(p1);
// console.log(p2);

// p1.Hello();
// p2.Hello();

/////////////////////////////////////

// Constructor Functions
// Basic Constructor:

// Define a constructor function named Book that takes title and author as parameters. Add a method to the prototype that returns a string in the format: "Title by Author".
// Object Creation:

// Create three Book objects with different titles and authors. Store these objects in an array called library. Write a function to log the description of each book in the library array.
// Prototype Method:

// Add a prototype method isAuthor to the Book constructor function that takes an author parameter and returns true if the book’s author matches the given author, otherwise returns false.


////////////////////////////////
// ES6 Classes
// Basic Class:

// Define a class named Car with a constructor that accepts make, model, and year. Add a method getDetails that returns a string in the format: "Make Model, Year".
// Creating Objects:

// Instantiate three Car objects with different makes, models, and years. Store these objects in an array called garage. Write a method in the Car class that logs the details of each car in the garage array.


// Combination of Constructor and Class:
// Convert a constructor function-based implementation of a Person object to an ES6 class-based implementation. The Person object should have properties name, age, and a method greet that returns "Hello, my name is Name and I am Age years old.".