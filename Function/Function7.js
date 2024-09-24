// - Default Parameters.
// JavaScript default parameters allow you to define default values for function parameters.

// function Add(n1=13,n2=13){
//     console.log(n1+n2);
// }
// Add();
////////////////////////////////////////////////////////////
// // - Rest Parameters.
// The rest parameter is an improved way to handle function parameters, allowing us to more easily handle various inputs as parameters in a function. The rest parameter syntax allows us to represent an indefinite number of arguments as an array.

// ony for two number Addition 
// function Add(n1,n2){
//     console.log(n1+n2);
// }
// Add(1,2,3);



// More then one Number Addition 
// var sum = 0;
// function Add(...Royal){
//     for (const iterator of Royal) {
//         sum+=iterator;
//     }
//     console.log(sum); 
// }

// Add(1,2,3,4,5);


/////////////////////////////////////////////////////
// - Parameter Destructuring.

// function Add(...restPerameter) {
//     var n1 = restPerameter[0];
//     var n2 = restPerameter[1];
//     var n3 = [...restPerameter.slice(2)];
//     console.log(n1+n2,n3);
// };
// Add(1,2,3,4,5);

/////////////////////////////////
// Functions returning Functions : 

// function Add(v1,v2){
//     console.log(v1+v2);
// }

// function Nothing(){
//     var n1 =12;
//     var n2 =13;

//     return Add(n1,n2);
// }
// Nothing();

