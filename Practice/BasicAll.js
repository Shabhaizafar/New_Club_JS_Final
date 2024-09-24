// 1. Write a JavaScript program to display the current day and time in the following format.  
// Sample Output : Today is : Tuesday.
// Current time is : 10  : 30 : 38 PM
// var today = new Date();
// var Arr = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// console.log(`Today is : ${Arr[today.getDay()]}.`);

// console.log("Current Time : ",(today.getHours()<12)? `${today.getHours()} : ${today.getMinutes()} : ${today.getSeconds()} AM` : `${today.getHours()-12} : ${today.getMinutes()} : ${today.getSeconds()} PM`);


// //-------------------------------------------------------------
// 2. Write a JavaScript program to print the current window contents.  

// var body = document.querySelector('body').textContent;
// console.log(body);

// //-------------------------------------------------------------
// 3. Write a JavaScript program to get the current date.  
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
/H.W 1/
console.log();
// //-------------------------------------------------------------
// 4. Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.  
// var s1 = 5;
// var s2 = 6;
// var s3 = 7;
// var s = (s1+s2+s3)/2;
// console.log(Math.sqrt(s*(s-s1)*(s-s2)*(s-s3)));



// //-------------------------------------------------------------
// 5. Write a JavaScript program to rotate the string 'w3resource' in the right direction. This is done by periodically removing one letter from the string end and attaching it to the front.  

// var str = "w3resource";
// var len = str.length-1;
// console.log(str);
// var ans = setInterval(() => {
//     if(len==0)
//     {
//         clearInterval(ans);
//     }
//     console.log(str.slice(len)+str.slice(0,len));
//     len--;
// }, 500);

// //-------------------------------------------------------------
// 6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.  
/H.W2/
console.log()
// //-------------------------------------------------------------
// 7. Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050.  
// var n1 = 2014;
// var n2 = 2050;
// while(n1<=n2){
//     var today = new Date(n1,0,1);
//     if(today.getDay() == 0)
//     {
//         console.log(today);
//     }
//     n1++;
// }


// //-------------------------------------------------------------
// 8. Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".  
// var randomNumber = parseInt((Math.random()*10)+1);  //7
// while(1)
//     {
//         var n = +prompt("Enter a Number (1-10) : ");  //4
//     if(randomNumber==n)
//     {
//         console.log(randomNumber,n);
//         break;
//     }
//     else if(randomNumber<n)
//     {
//         console.log("Enter Lowest Value again");
//     }
//     else if(randomNumber>n)
//     {
//         console.log("Enter Higher Value again");
    
//     } 
// }


// //-------------------------------------------------------------

// 9. Write a JavaScript program to calculate the days left before Christmas.  
// //-------------------------------------------------------------
// 10. Write a JavaScript program to calculate multiplication and division of two numbers (input from the user).  
// Sample form :
// sample form
