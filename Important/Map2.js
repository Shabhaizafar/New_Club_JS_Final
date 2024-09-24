// Map : 
// A Map holds key-value pairs where the keys can be any datatype.
// A Map remembers the original insertion order of the keys.

var obj = {
    // string
    fname : "Raj",
    1 : 12345
}
for (const key in obj) {
    console.log(key,typeof key);
}



var myMap = new Map();
console.log(myMap);

//1) myMap.set   : add new pair in a Map
    //      key     value
myMap.set("fname","Raj");
myMap.set(1,"asdfg");
// myMap.set("fname","Mohak");

console.log(myMap);


//2) myMap.get : print spacific key's value
// console.log(myMap.get("fname"));
// console.log(myMap.get(1));



//3) myMap.size : return Map size
// console.log(myMap.size);

// myMap.keys : return All keys
// console.log(myMap.keys());

// myMap.values : return All Values
// console.log(myMap.values());


// myMap.entries : return key value Pair 
// console.log(myMap.entries());

// myMap.forEach
// myMap.forEach(
//     (v,k,m)=>{
//         console.log(v,k,typeof k,m);
//     }
// );

// myMap.delete
// myMap.delete("fname");
// console.log(myMap);

// myMap.clear
// myMap.clear();
// console.log(myMap);

// myMap.has :boolean indicating whether an element with the specified key exists or not

// console.log(myMap.has("Raj"));


var mySet = new Set([1,2,3,4]);
console.log(mySet.entries());

///////////////////////////////////////////////////////

// Creating a Map

// Create a Map that stores the names of countries as keys and their capitals as values.
// Initialize the Map with the following data: France -> Paris, Japan -> Tokyo, Canada -> Ottawa.
// -------------------------------------------------------------------
// Adding and Retrieving Elements

// Add the country "Germany" with the capital "Berlin" to the Map.
// Retrieve and print the capital of Japan from the Map.
// -------------------------------------------------------------------
// Checking for Existence

// Check if the Map contains the country "Australia".
// Add Australia with the capital "Canberra" if it doesn't already exist.
// -------------------------------------------------------------------
// Removing Elements

// Remove the entry for "Canada" from the Map.
// Verify that Canada has been removed by attempting to retrieve its capital.
// -------------------------------------------------------------------
// Iterating Over a Map

// Iterate over the Map and print each country and its capital.
// Use the forEach method to do the same.
// -------------------------------------------------------------------
// Size of the Map

// Print the number of entries in the Map.
// -------------------------------------------------------------------
// Updating Elements

// Update the capital of France to "Lyon".
// Print the updated Map to verify the change.
// -------------------------------------------------------------------
// Converting Map to Array

// Convert the Map to an array of key-value pairs and print the array.
// Convert the array back to a Map and verify its contents.
// -------------------------------------------------------------------
// Cloning a Map

// Create a shallow copy of the Map and verify that both the original and the copy have the same entries.
// Make a change to the original Map and show that it doesn't affect the cloned Map.
// -------------------------------------------------------------------
// Maps vs. Objects

// Create an object with the same key-value pairs as the Map.
// Compare the Map and the object by checking the presence of a key, retrieving a value, and iterating over the entries.
// -------------------------------------------------------------------
// Using Objects as Keys

// Create a Map where the keys are objects representing people (with properties name and age) and the values are their job titles.
// Add a few entries to the Map, retrieve a value using an object key, and print the Map.
// -------------------------------------------------------------------
// Advanced: Nested Maps

// Create a Map where each key is a country and each value is another Map containing city names as keys and their populations as values.
// Add data for at least two countries with multiple cities, then retrieve and print the population of a specific city in one of the countries.