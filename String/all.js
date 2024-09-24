// var $ans1 = "asd";
// console.log($ans1);
// ######################

//    - Useful string methods.
// var str1 = "Royal technosoft P ltd.";
// console.log(str1);
// console.log(str1[1]);

// 1) str1.length
// console.log(str1.length);
// console.log(str1[str1.length-1]);

// 2) str1.replace()
// console.log(str1.replace(`tech`,'Tech'));

// 3) str1.replaceAll()
// console.log(str1.replaceAll(`tech`,'Tech'));

// 4)  str1.charAt(index)
    // console.log(str1.charAt(0));
    
//   5)  str1.charCodeAt()
    // A = 65
    // console.log(str1.charCodeAt(0));

// 6) str1.concat();
// var ans = str1.concat(" Royal");
// console.log(ans);

                    //pass :   char/string
// console.log(str1.includes("tech"));

// checking starting point
// console.log(str1.indexOf("e"));

// split   : return Array 
// console.log(str1.split('t'));

// str1.trimStart
// console.log(str1.trimStart());
// console.log(str1.trimEnd());
// console.log(str1.trim());

// str1.toUpperCase
// str1.toLowerCase

// // slice 
        //     starting , ending index     remember : always starting index < ending index
// console.log(str1.slice(10,10));
// // str1.substring
//         // starting and ending index     remember : higher index always 
// console.log(str1.substring(10,10));
// // substr 
//         //  index  : length 
// console.log(str1.substr(10,10));



///////////////////////////////////////////
/17-04-2024/
// var str1 = "Royal technosoft P ltd.";
// var fname = "Raj";
// var Age = 1;
// console.log(str1);


// // 
// console.log("My name is Mohak.and i'm 1 year old.");
// console.log("My name is ",fname,".and i'm ",Age," year old.");

// // String Template   : `${}`

// console.log(`My name is ${fname}.and i'm ${Age} year old.`);

// Truthy and Falsy Value :  


// if(1)
// {
//         console.log("true");
// }
// else{
//         console.log("false");
// }

// Truthy Value : 
//true,1,"fillout",[],[1,2,"zafar"],-1,3.14

//Falsy Value : 
// false,0,""(Empty String),null,undefined,NaN