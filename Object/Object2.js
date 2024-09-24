/27-04/
// - Computed properties.  => []
// var key1 = 'fname';
// var key2 = 'lname';

// var value1 = 'Amit';
// var value2 = "shah";


// var myobj = {
//     [key1] : value1,
//     key2 : value2
// };
// console.log(myobj);
/////////////////////////////
// - Spread operator in objects.
// var obj1 = {
//     fname : "Raj",
//     lname : "Patel"
// };
// console.log(obj1);

// var obj2 = {...obj1};
// console.log(obj2);


//////////////////////////////////
// - Object Destructuring.
// var obj = {
//     fname : "Raj",
//     lname : "Patel",
//     Age : 10,
//     Gender : "Male",
//     Address : "N/A",
//     Contact : 1234567890
// };
// console.log(obj);

// // console.log(obj.fname);

// const {fname:firstname,Age:older,...newobj} = obj;
// console.log(firstname,older);
// console.log(newobj);
///////////////////////////////////
// - Objects inside Array.
// Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.

// var library = [ 
//    {
//        author: 'Bill Gates',
//        title: 'The Road Ahead',
//        readingStatus: true
//    },
//    {
//        author: 'Steve Jobs',
//        title: 'Walter Isaacson',
//        readingStatus: true
//    },
//    {
//        author: 'Suzanne Collins',
//        title:  'Mockingjay: The Final Book of The Hunger Games', 
//        readingStatus: false
//    }];


// for (const value in library) {
//     console.log(value);
//     for (const iterator in library[value]) {
//         console.log(iterator+" : "+library[value][iterator]);
//     }
// }

/H.w/
// 10. Write a JavaScript program to sort an array of JavaScript objects.
// Sample Object :

// var library = [ 
//    {
//        title:  'The Road Ahead',
//        author: 'Bill Gates',
//        libraryID: 1254
//    },
//    {
//        title: 'Walter Isaacson',
//        author: 'Steve Jobs',
//        libraryID: 4264
//    },
//    {
//        title: 'Mockingjay: The Final Book of The Hunger Games',
//        author: 'Suzanne Collins',
//        libraryID: 3245
//    }];

//Aaj aavvu joi ae :  aajjjjjjjjjjjjj 

//[
// {
//     author: "Walter Isaacson",
//     libraryID: 4264,
//     title: "Steve Jobs"
//   },
// {
//     author: "Suzanne Collins",
//     libraryID: 3245,
//     title: "Mockingjay: The Final Book of The Hunger Games"
//   },
// {
//     author: "The Road Ahead",
//     libraryID: 1254,
//     title: "Bill Gates"
//   }
// ]

////////////////////////////////////////////
// - Arrays inside Object.
// var course = {
//     InfoTech:["Information Systems","Internet Programming","Software Eng"],
//     BusComm:["Commercial Law","Accounting","Financial Mng"],
//     Tourism:["Travel Destination","Travel Services","Customer Mng"]
// };
// for (const iterator in course) {
//     console.log(iterator);
//     for (const value in course[iterator]) {
//        console.log(value,course[iterator][value]);
//     }
// }

///////////////////////////////////
// - Nested Destructuring.  (object /Array)
// 1) object : 
// var obj = {
//     fname : "Raj",
//     lname : "Patel",
//     Age : 10,
//     Gender : "Male",
//     Address :{
//         city : "GNR",
//         State : "GUJ",
//         nation : "IND"
//     },
//     Contact : 1234567890
// };

// const {Address:{State:ST,...ne2},...newobj}= obj;
// console.log(ST);

// console.log(newobj,ne2);

// 2)  Array : 
// var favMovies = [
//     'Begin Again',
//     'Soul',
//     ['Matrix', 'Matix Reloaded', 'Matrix Revolutions'],
//     [
//         'Frozen',
//         'Frozen 2',
//         [
//             'Tangled',
//             'Alladin'
//         ]
//     ]
// ];
// var [,,,[,,[,newArrvalue]]] = favMovies;
// console.log(newArrvalue);
// ///////////////////