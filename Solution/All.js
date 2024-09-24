// Question 1: Basics (5 marks)
// Create a function createSecretMessage that takes a string message and returns a new string with each letter shifted by three positions in the alphabet.
// Wrap from 'z' to 'a' if needed. Non-alphabetic characters should remain unchanged.
// Example:
// createSecretMessage("hello"); // "khoor"
// createSecretMessage("hello, world!"); // "khoor, zruog!"

// var Str = "hello";
// var temp = "";
// function createSecretMessage(Str)
// {
// for (const iterator of Str) {
//     if(iterator.charCodeAt()>=65  && iterator.charCodeAt()<=90)
//     {
//         temp+=String.fromCharCode(iterator.charCodeAt()+3);
//     }
//     else if(iterator.charCodeAt()>=97 && iterator.charCodeAt()<=122)
//     {
//         temp+=String.fromCharCode(iterator.charCodeAt()+3);
//     }
//     else
//     {
//         temp+=iterator;
//     }
// }
// return temp;
// }
// var output = createSecretMessage(Str);
// console.log(output);

// -------------------------------------------------------
// Question 2: Arrays - Map, Filter, Reduce (8 marks)
// Given an array of strings containing both words and numbers, perform the following operations:
// 1. Use the map method to transform each word to uppercase and each number to its square.
// 2. Use the filter method to select only the elements that are strings.
// 3. Use the reduce method to concatenate all the filtered strings.
// Example:
// const data = ["hello", 5, "world", 3, "foo", 2];
// // Step 1: ["HELLO", 25, "WORLD", 9, "FOO", 4]
// // Step 2: ["HELLO", "WORLD", "FOO"]
// // Step 3: "HELLOWORLDFOO"

// const data = ["hello", 5, "world", 3, "foo", 2];
// // console.log(data);
// function All(data){
//     var newArr = data.map((v)=>{
//         if(typeof(v)=='string')
//         {
//             return v.toUpperCase();
//         }
//         else if(typeof(v)=='number')
//             {
//               return  v*v;
//             }
//     });
//     console.log(newArr);
    
//     var StrArr = newArr.filter((v)=>{
//         return typeof(v)=='string';
//     });
//     console.log(StrArr);
    
//     var Output = StrArr.reduce(
//         function(c,p){
//             return c+p;
//         }
//     );
    
//     console.log(Output);
// }
// All(data);
// ---------------------------------------
// Question 3: Objects and Optional Chaining (5 marks)
// Create a function getUserCountry that takes a user object and returns the country the user lives in. Handle cases where the user object or address
// information might be nested at different levels and use optional chaining.
// Example:
// const user = {
//  name: "John",
//  address: {
//  location: {
//  city: "Paris",
//  country: "France"
//  }
//  }
// };
// getUserCountry(user); // "France"

// const user = {
//     name: "John",
//     address: {
//     location: {
//     city: "Paris",
//     country: "France"
//     }
//     }
//    };

// function getUserCountry(user){
// return user?.address?.location?.country;
// }
// var output = getUserCountry(user);
// console.log(output);

// ---------------------------------------------
// Consider a menu of dishes offered by a restaurant. Each dish object contains information about its name, ingredients, and whether it is vegetarian-friendly
// or not. Write two functions:
// 1. areAllVegetarian that checks if all dishes on the menu are vegetarian-friendly.
// 2. hasGlutenFreeOption that checks if there is any gluten-free dish on the menu.
// Example:
// const menu = [
//  { name: "Vegetable Stir Fry", ingredients: ["vegetables", "soy sauce"], vegetarian: true, glutenFree: true },
//  { name: "Beef Burger", ingredients: ["beef patty", "cheese", "bun"], vegetarian: false, glutenFree: false },
//  { name: "Quinoa Salad", ingredients: ["quinoa", "vegetables", "dressing"], vegetarian: true, glutenFree: true }
// ];
// areAllVegetarian(menu); // false
// hasGlutenFreeOption(menu); // true


// const menu = [
//     { name: "Vegetable Stir Fry", ingredients: ["vegetables", "soy sauce"], vegetarian: true, glutenFree: false },
//     { name: "Beef Burger", ingredients: ["beef patty", "cheese", "bun"], vegetarian: false, glutenFree: true },
//     { name: "Quinoa Salad", ingredients: ["quinoa", "vegetables", "dressing"], vegetarian: true, glutenFree: false }
// ];
   
// console.log(menu);
// var ans= true;

// function areAllVegetarian(menu){

//     menu.forEach(element => {
//         for (const key in element) {
//             if(key=='vegetarian' && element[key]==false)
//                 {
//                     ans = false;
//                 }
//             }
//         });
//         return ans;
// }
// var output1 = areAllVegetarian(menu);
// console.log(output1);


// var ans = menu.find(
//     function (v){
//         return v.glutenFree == true;
//     }
// );
// console.log((typeof(ans?.glutenFree)=='undefined')? false : true);
// -------------------------------------------
// Question 5: Sets and Maps (6 marks)
// 1. Create a set of unique words from the text of the first paragraph of a famous novel or any lengthy text of your choice.
// 2. Create a map that counts the occurrences of each word in the paragraph.
// Example:
// const paragraph = "It was the best of times, it was the worst of times, ...";
// // Set: {"It", "was", "the", "best", "of", "times", ...}
// // Map: { "It" => 2, "was" => 2, "the" => 2, "best" => 1, "of" => 2, "times" => 2, ... }
// const paragraph = "It was the best of times, it was the worst of times".toLowerCase();

// var mySet = new Set(paragraph.toLowerCase().split(' '));
// console.log(mySet);

// var myMap = new Map();

// for (const iterator of paragraph.split(' ')) {
//     var count = 0;
//     for (const iterator2 of paragraph.split(' ')) {
//         if(iterator==iterator2)
//         {
//             count++;
//        }
//     }
//     myMap.set(iterator,count);
// }
// console.log(myMap);
//--------------------------------------------------------
// Create a function deepMergeObjects that merges two objects deeply. If both objects have a property with the same name and they are both objects
// themselves, the function should merge them recursively.
// Example:
// const obj1 = { a: { x: 1, y: 2 }, b: 2 };
// const obj2 = { a: { y: 3, z: 4 }, c: 3 };
// deepMergeObjects(obj1, obj2); // { a: { x: 1, y: 3, z: 4 }, b: 2, c: 3 }
// function deepMerge(target, source) {
//     for (const key in source) {
//       if (source[key] && typeof source[key] === 'object') {
//         if (!target[key]) {
//           target[key] = {};
//         }
//         deepMerge(target[key], source[key]);
//       } else {
//         target[key] = source[key];
//       }
//     }
//     return target;
//   }
  
//   const obj1 = { a: { x: 1, y: 2 }, b: 2 };
//   const obj2 = { a: { y: 3, z: 4 }, c: 3 };
  
//   const mergedObj = deepMerge({}, obj1);
//   deepMerge(mergedObj, obj2);
// ---------------------------------------
// Question 7: Arrays - Sort (5 marks)
// Given an array of objects representing products, each with a name and price, write a function sortProductsByCustomRule that sorts the array in
// ascending order based on a custom sorting rule:
// If the product name starts with a vowel (a, e, i, o, u), it should come before products whose names start with a consonant.
// If two products have the same starting letter, they should be sorted based on their prices in descending order.
// Example
// const products = [
//     { name: "Apple", price: 1000 },
//     { name: "Banana", price: 500 },
//     { name: "Laptop", price: 750 },
//     { name: "Oranges", price: 800 }
//    ];
//    sortProductsByCustomRule(products);
   /*
   [
    { name: "Apple", price: 1000 },
    { name: "Oranges", price: 800 },
    { name: "Banana", price: 500 },
    { name: "Laptop", price: 750 }
   ]
   */
// const products = [
//     { name: "Laptop", price: 750 },
//     { name: "Banana", price: 500 },
//     { name: "Oranges", price: 800 },
//     { name: "Apple", price: 1000 },
//     // { name: "Oranges", price : 1100},
//     // { name: "Banana", price: 1500 }
//    ];

// function sortProductsByCustomRule(products){
//     var sortedArr = [];
//     var temp = [];
//     for (let i = 0; i < products.length; i++) {
//         if(products[i].name[0]== 'A' || products[i].name[0]== 'E' || products[i].name[0]== 'I'|| products[i].name[0]== 'O' || products[i].name[0]== 'U'){
//             sortedArr.push(products[i]);
//         }
//         else{
//             temp.push(products[i]);
//         }
    
//     }
//     sortedArr.sort((a,b)=>{
//         return a.name[0].charCodeAt()-b.name[0].charCodeAt();
//     });
    
//     for (let i = 0; i < sortedArr.length; i++) {
//         for (let j = 0; j < sortedArr.length; j++) {
//             if(sortedArr[i].name[0]==sortedArr[j].name[0])
//             {
//                 if(sortedArr[i].price>sortedArr[j].price)
//                 {
//                     var temp2 = sortedArr[i];
//                     sortedArr[i] = sortedArr[j];
//                     sortedArr[j] = temp2;
//                 }
//             }
            
//         }
//     }

    
//     temp.sort((a,b)=>{
//         return a.name[0].charCodeAt()-b.name[0].charCodeAt();
//     });
    
//     for (let i = 0; i < temp.length; i++) {
//         for (let j = 0; j < temp.length; j++) {
//             if(temp[i].name[0]==temp[j].name[0])
//             {
//                 if(temp[i].price>temp[j].price)
//                 {
//                     var temp2 = temp[i];
//                     temp[i] = temp[j];
//                     temp[j] = temp2;
//                 }
//             }
            
//         }
//     }
    
//     return sortedArr.concat(temp);
// }
// var ans = sortProductsByCustomRule(products);
// console.log(ans);
//-----------------------------------------------------
// Question 8: Arrays - Every and Some (4 marks)
// Consider a menu of dishes offered by a restaurant. Each dish object contains information about its name, ingredients, and whether it is vegetarian-friendly
// or not. Write two functions:
// 1. areAllVegetarian that checks if all dishes on the menu are vegetarian-friendly.
// 2. hasGlutenFreeOption that checks if there is any gluten-free dish on the menu.
// Example:
// const menu = [
//  { name: "Vegetable Stir Fry", ingredients: ["vegetables", "soy sauce"], vegetarian: true, glutenFree: true },
//  { name: "Beef Burger", ingredients: ["beef patty", "cheese", "bun"], vegetarian: false, glutenFree: false },
//  { name: "Quinoa Salad", ingredients: ["quinoa", "vegetables", "dressing"], vegetarian: true, glutenFree: true }
// ];
// areAllVegetarian(menu); // false
// hasGlutenFreeOption(menu); // true

// const menu = [
//  { name: "Vegetable Stir Fry", ingredients: ["vegetables", "soy sauce"], vegetarian: true, glutenFree: true },
//  { name: "Beef Burger", ingredients: ["beef patty", "cheese", "bun"], vegetarian: false, glutenFree: false },
//  { name: "Quinoa Salad", ingredients: ["quinoa", "vegetables", "dressing"], vegetarian: true, glutenFree: true }
// ];

// function areAllVegetarian(menu){
//     var ans =  menu.every(
//         (v)=>{
//             return v.vegetarian==true;
//         }
//     );
//     console.log(ans);
// }
// areAllVegetarian(menu);


// function hasGlutenFreeOption(menu){
//     var ans = menu.some(
//         (v)=>{
//             return v.glutenFree==true;
//         }
//     );
//     console.log(ans);
// }
// hasGlutenFreeOption(menu);

//---------------------------------------
