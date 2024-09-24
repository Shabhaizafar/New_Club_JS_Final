////////////////////////////////////////////////////////////
// Union of Sets:  
//  {1,2,3,4,5} : {2,3,4,5,6,7,8}
//  {1,2,3,4,5,6,7,8}

// Create two Sets and find their union. Print the resulting Set.
// var mySet1 = new Set([1,2,3,4,5]);
// var mySet2 = new Set([2,3,4,5,6,7,8]);

// console.log(mySet1);
// console.log(mySet2);

// for (const iterator of mySet2) {
//     mySet1.add(iterator);
// }
// console.log(mySet1);
//-----------------------------------
// Intersection of Sets:
//  {1,2,3,4,5} : {2,3,4,5,6,7,8}
//  {2,3,4,5}
// Create two Sets and find their intersection. Print the resulting Set.
var mySet1 = new Set([1,2,3,4,5]);
var mySet2 = new Set([2,3,4,5,6,7,8]);
console.log(mySet1);
console.log(mySet2);
var Arr = new Array(...mySet2);
var intersectionSet = new Set();
var differenceSet = new Set();

for (const iterator of mySet1) {
    if(Arr.includes(iterator))
    {
        intersectionSet.add(iterator);
    }
    else{
        differenceSet.add(iterator);
    }
}
console.log(intersectionSet);
console.log(differenceSet);


//-----------------------------------
// Difference of Sets:
//  {1,2,3,4,5} : {2,3,4,5,6,7,8}
// {1}

// Create two Sets and find their difference (elements in Set1 that are not in Set2). Print the resulting Set.
/////////////////////////////////////////
// Convert Set to Array:

// Convert a Set back to an array. Print the array.
// {1,2,3} 
// [1,2,3]

// var mySet =new Set([1,2,3,4]);
// console.log(mySet);

// var Arr = new Array(...mySet);
// console.log(Arr);