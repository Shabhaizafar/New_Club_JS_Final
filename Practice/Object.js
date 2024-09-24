// 1. **Basic Object Creation and Access:**
//- Create an object `person` with properties `name`, `age`, and `city`. Access and print each property using both dot and bracket notation.
// const  person = {
//     fname : "Mohak",
//     age : 1,
//     city  : "Apna Ghar"
// };

// console.log(person.fname);
// console.log(person['city']);



   
// 2. **Iterating over Object Properties:**
//    - Create an object `car` with properties `brand`, `model`, and `year`. Use a `for...in` loop to iterate over all the properties of the `car` object and print them.
// const car = {
//     brand : "ABC",
//     model : "xyz-12",
//     year  : 2050
// };
// for (const key in car) {
//     console.log(key,":",car[key]);
// }


// 3. **Computed Properties and Methods:**
//    - Create an object `user` with a property `username`. Prompt the user for a property name and assign a value using computed property syntax (`user[propertyName] = propertyValue`). Print the updated `user` object.

// var uname = "zafar";
// var temp = "username";
// const user = {
//     [temp] : uname
// }
// console.log(user);

// user[temp]  = "Z";
// console.log(user);


// 4. **Spread Operator in Objects:**
//    - Create two objects: `person1` with properties `name` and `age`, and `person2` with properties `city` and `country`. Use the spread operator to create a third object `person3` that combines properties from both `person1` and `person2`. Print `person3`.

// const person1 = {
//     fname : "Mohak",
//     age : 2
// }
// const person2 = {
//     city : "Science city",
//     country : "Ni bataunga"
// }

// const person3 = {...person1,...person2};
// console.log(person3);



// 5. **Object Destructuring:**
//    - Create an object `student` with properties `name`, `age`, and `grade`. Use object destructuring to extract and print the `name` and `grade` properties.

// var myobj = {
//     fname : "Raj",
//     age : 12,
//     grade : "A"
// }

// var {fname,grade:vgrade} = myobj;

// console.log(fname);
// console.log(vgrade);


// 5. **Object Destructuring:**
// 6. **Objects Inside Array:**
//    - Create an array `library` containing multiple objects where each object represents a book with properties `title`, `author`, and `genre`. Write a function to iterate through the `library` array and print all book titles.

// let library = [
//     {
//         title: 'The Great Gatsby',
//         author: 'F. Scott Fitzgerald',
//         genre: 'Fiction',
//         year: 1925
//     },
//     {
//         title: 'To Kill a Mockingbird',
//         author: 'Harper Lee',
//         genre: 'Fiction',
//         year: 1960
//     },
//     {
//         title: '1984',
//         author: 'George Orwell',
//         genre: 'Science Fiction',
//         year: 1949
//     },
//     {
//         title: 'Pride and Prejudice',
//         author: 'Jane Austen',
//         genre: 'Romance',
//         year: 1813
//     }
// ];
// function All(obj){
//     for (const iterator of obj) {
//         console.log(iterator["title"]);
//     }
// }
// All(library);

// 5. **Object Destructuring:**
// 6. **Objects Inside Array:**
// 7. **Nested Destructuring:**
//    - Create an object `organization` with properties `name` and `address`, where `address` itself is an object with properties `city` and `country`. Use nested destructuring to extract and print `name`, `city`, and `country` directly.

// var obj = {
//     fname : "Raj",
//     address : {
//         city: "GNR",
//         country : "IND"
//     }
// }
// var {fname,address:{city,country}} = obj;

// console.log(fname);
// console.log(city);
// console.log(country);

//////////////////////////////////////////////////////////////
// 1. **Object Destructuring:**
//    - Write a function that uses object destructuring to extract `name` and `age` from an object passed as a parameter.
//    - Implement a program to swap two variables using object destructuring.

// 2. **Objects Inside Array:**
//    - Create an array of objects representing products. Use destructuring to extract and display specific properties of each product.
//    - Write a function that takes an array of objects (each representing a person with `name` and `age`) and returns an array of their names using destructuring.

// 3. **Nested Destructuring:**
//    - Implement a function that uses nested object destructuring to extract `name`, `age`, and `city` from an object that has a nested structure.
//    - Create an array of nested objects and use destructuring to extract values deep within the nested structure.



