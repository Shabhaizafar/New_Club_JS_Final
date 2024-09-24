// ### For Loop
// 1. Write a for loop to print numbers from 1 to 10.
//H.W
// 2. Create a for loop that prints the elements of an array.
//H.W
// 3. Write a for loop to print the multiplication table of a given number.
//H.W
// 4. Create a for loop that calculates the factorial of a given number.
//H.W
// 6. Write a for loop to print the first 10 odd numbers.
//H.W
// 8. Write a for loop that finds the sum of all elements in an array.
//H.W
// 9. Use a for loop to find the maximum number in an array.
//H.W
// 10. Create a for loop that prints the reverse of a string.
//H.W


// 5. Use a for loop to iterate over an array of objects and print each object's properties.
// let data = [
//     { id: 1, name: 'Alice', age: 30 },
//     { id: 2, name: 'Bob', age: 25 },
//     { id: 3, name: 'Charlie', age: 35 },
//     { id: 4, name: 'David', age: 28 },
//     { id: 5, name: 'Eve', age: 32 },
//     { id: 6, name: 'Frank', age: 27 },
//     { id: 7, name: 'Grace', age: 31 },
//     { id: 8, name: 'Henry', age: 29 },
//     { id: 9, name: 'Isabel', age: 26 },
//     { id: 10, name: 'Jack', age: 33 }
// ];
// console.log(data);
// for (let i = 0; i < data.length; i++) {
//     console.log("Data No :",i);
//     for (const key in data[i]) {
//         console.log(key,data[i][key]);
//     }
//     console.log("-------------------------");
// }



// 7. Create a for loop that prints the elements of a matrix (2D array).

// var array_2d = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]
// console.log(array_2d);

// for (let i = 0; i < array_2d.length; i++) {
//     console.log("Array : ",i);
//     for (const iterator of array_2d[i]) {
//         console.log(iterator);
//     }
//     console.log("-------------");
// }


// ### For Loop Examples
// 1. Write a for loop to print the multiplication table of a given number.
//H.W
// 2. Create a for loop that calculates the factorial of a given number.
//H.W
// 3. Write a for loop that prints the first 10 prime numbers.
//H.W
// 4. Use a for loop to print the characters of a string in reverse order.
//H.W
// 5. Create a for loop that finds the sum of the digits of a number.
//H.W
// 6. Write a for loop that prints the elements of an array in reverse order.
//H.W
// 7. Use a for loop to find the average of an array of numbers.
//H.W
// 8. Create a for loop that prints the elements of an array of objects.
//H.W
// 9. Write a for loop that prints the squares of numbers from 1 to 10.
//H.W
// 10. Use a for loop to print the elements of a 2D array in matrix form.
//H.W
////////////////////////////////////////////////
// ### Do While Loop
// 1. Write a do-while loop that prints numbers from 1 to 10.

// 3. Write a do-while loop that prints the elements of an array.
// 4. Use a do-while loop to print the Fibonacci sequence up to a given number.
// 5. Create a do-while loop that calculates the factorial of a given number.
// 6. Write a do-while loop that prints the sum of the digits of a number.
// 7. Use a do-while loop to find the maximum number in an array.
// 8. Create a do-while loop that prints the first 10 even numbers.
// 9. Write a do-while loop that finds the sum of all elements in an array.
// 10. Use a do-while loop to reverse a string.


//////////////////////////////////
// first 10 prime  Number (All Loop) : 

// const n = 100; 
// var count = 0;
// var total = 0;
// for (let i = 1;total<n;i++) {
//     count=0;
//     for (let j = 1; j <=i; j++) {
//         if(i%j==0)
//         {
//             count++;
//         }
//     }
//     if(count==2)
//     {
//         console.log(i);
//         total++;
//     }
// }


// const n = 10; 
// var count = 0;
// var total = 0;
// let i = 1;
// while(total<n) {
//     count=0;
//     for (let j = 1; j <=i; j++) {
//         if(i%j==0)
//         {
//             count++;
//         }
//     }
//     if(count==2)
//     {
//         console.log(i);
//         total++;
//     }
//     i++;
// }


// const n = 10; 
// var count = 0;
// var total = 0;
// let i = 1;
// do{
//     count=0;
//     for (let j = 1; j <=i; j++) {
//         if(i%j==0)
//         {
//             count++;
//         }
//     }
//     if(count==2)
//     {
//         console.log(i);
//         total++;
//     }
//     i++;
// }while(total<n);

/*
1) Wap to print all parfect Number Given Range. (using for,while and do-while)
2) Wap to print all armstrong Number Given Range.(using for,while and do-while)
3) wap to find the HCF (Highest Common Factor) of two numbers given number .(using for,while and do-while)
4) wap to find the LCM of any two numbers using HCF.(using for,while and do-while)
5) wap to check whether a number is a Strong Number or not.(using for,while and do-while).
*/
