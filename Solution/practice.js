// Question: Create a function to reverse a string while preserving non-alphabetic characters in their original positions.

// Write a JavaScript function preserveNonAlphabeticReverse that takes a string str as input and returns a new string where alphabetic characters are reversed, while non-alphabetic characters remain unchanged.

// function preserveNonAlphabeticReverse(str){
//     var Arr = str.split('');   //['z', 'a', 'f', 'a', '9', 'r'] 
//     console.log(Arr);

//     var i = 0;
//     var j = Arr.length - 1;
//     var checker = (a)=>{
//         return (a.charCodeAt()>=65 && a.charCodeAt()<=90) || (a.charCodeAt()>=97 && a.charCodeAt()<=122);
//     }
//     while(i<j){  
//         if(checker(Arr[i]) && checker(Arr[j]))
//         {
//             [Arr[i],Arr[j]] = [Arr[j],Arr[i]];
//             i++;
//             j--;
//         }
//         if(!checker(Arr[i]))
//         {
//             i++;
//         }

//         if(!checker(Arr[j]))
//         {
//             j--;
//         }
//     }
//     console.log(Arr.join(''));
// }
// preserveNonAlphabeticReverse("Za6fa7r");
//        01
//        53
// z  9  f  a  a  r

// r  9  f  a  a  z



////////////

// Question: Manipulate an array of objects representing students' grades.
// You have an array grades containing objects with student names and their respective grades. Perform the following operations:
// Map: Transform each object to only include the student's name and their grade as a letter grade ('A', 'B', 'C', 'D', 'F') based on the numerical grade.
// Filter: Select only students who have passed (grade of 'A', 'B', or 'C').
// Reduce: Calculate the average grade of the selected students.

// let Arr = [
//     { name: "Alice", grade: 85 },
//     { name: "Bob", grade: 76 },
//     { name: "Charlie", grade: 90 },
//     { name: "David", grade: 88 },
//     { name: "Eve", grade: 92 },
//     { name: "Frank", grade: 81 },
//     { name: "Grace", grade: 95 },
//     { name: "Hannah", grade: 87 },
//     { name: "Isaac", grade: 89 },
//     { name: "Jack", grade: 83 },
//     { name: "Katie", grade: 79 },
//     { name: "Liam", grade: 91 },
//     { name: "Mia", grade: 84 },
//     { name: "Nathan", grade: 82 },
//     { name: "Olivia", grade: 77 }
// ];

// function All(a){
//     if(a.grade>93)
//     {
//         a.agrade = "A";
//     }
//     else if(a.grade>90)
//     {
//         a.agrade = "B";
//     }
//     else if(a.grade>85)
//     {
//         a.agrade = "C";
//     }
//     else if(a.grade>=80)
//     {
//         a.agrade = "D";
//     }
//     else{
//         a.agrade = 'F';
//     }
//     return a;
// }
// Arr.map((v)=>{
//     return All(v);
// });

// console.log(Arr);

// var ans = Arr.filter((v)=>{
//     return v.agrade=='A' || v.agrade=='B' || v.agrade=='C';
// });

// console.log(ans);
// var final  = ans.reduce((pre,current)=>{
//     current.grade = current.grade+pre.grade;
//     return current;
// });
// console.log(final.grade/ans.length);

////////////////////
// Question: Create a function to retrieve information from a nested object structure.
// You have an object organization that contains information about departments and employees. Implement the following operations:

// Optional Chaining: Use optional chaining to safely retrieve the name of the manager of a specific department.

// Nullish Coalescing: Use nullish coalescing to provide a default value if the manager's name is not present.
// let organization = {
//     name: "Acme Corporation",
//     headquarters: "New York",
//     departments: {
//         sales: {
//             manager: "John Doe",
//             employees: [
//                 { name: "Alice Johnson", age: 32, position: "Sales Executive" },
//                 { name: "Bob Smith", age: 28, position: "Sales Representative" }
//             ]
//         },
//         marketing: {
//             // manager: "Jane Smith",
//             employees: [
//                 { name: "Eve Williams", age: 35, position: "Marketing Manager" },
//                 { name: "Frank Brown", age: 29, position: "Marketing Specialist" }
//             ]
//         },
//         engineering: {
//             manager: "Mike Davis",
//             employees: [
//                 { name: "Grace Lee", age: 40, position: "Software Engineer" },
//                 { name: "Henry Clark", age: 45, position: "System Architect" }
//             ]
//         }
//     }
// };

// for (const key in organization.departments) {
//     console.log(organization.departments[key]?.manager??"SUUUUUUUUU");
// }


/////////////////////////////////////////
// Create a function getEmployeeInfo to retrieve information from a nested object structure representing an organization. The organization object contains information about departments and employees. Implement the following operations:

// Optional Chaining: Use optional chaining to safely retrieve the name of an employee within a specific department.

// Nullish Coalescing: Use nullish coalescing to provide a default value ("Unknown") if the employee's name is not present.





// Given an array students containing objects with student information including their names and exam scores, perform the following operations:

// Map Operation:

// Transform each student's object to include their name and a letter grade ('A', 'B', 'C', 'D', 'F') based on their numerical score.
// Filter Operation:

// Select only those students who have passed the exam (grades of 'A', 'B', or 'C').
// Reduce Operation:

// Calculate the average score of the selected students who have passed.
// Example Array:

// javascript
// Copy code
// let students = [
//     { name: "Alice", score: 85 },
//     { name: "Bob", score: 72 },
//     { name: "Charlie", score: 91 },
//     { name: "David", score: 65 },
//     { name: "Emily", score: 78 }
// ];


//////////////////////////////////////////
// const persons = [
//     {
//         id: 1,
//         name: 'Alice',
//         age: 30,
//         gender: 'Female',
//         city: 'New York',
//         occupation: 'Software Engineer',
//         hobbies: ['Reading', 'Painting'],
//         languages: ['English', 'Spanish'],
//         address: {
//             street: '123 Main St',
//             city: 'New York',
//             zipCode: '10001'
//         }
//     },
//     {
//         id: 2,
//         name: 'Bob',
//         age: 28,
//         gender: 'Male',
//         city: 'San Francisco',
//         occupation: 'Data Scientist',
//         hobbies: ['Hiking', 'Photography', 'Cooking'],
//         languages: ['English', 'French'],
//         address: {
//             street: '456 Oak Ave',
//             city: 'San Francisco',
//             zipCode: '94110'
//         }
//     },
//     {
//         id: 3,
//         name: 'Charlie',
//         age: 35,
//         gender: 'Male',
//         city: 'Seattle',
//         occupation: 'Product Manager',
//         hobbies: ['Traveling', 'Gardening'],
//         languages: ['English', 'Mandarin'],
//         address: {
//             street: '789 Elm St',
//             city: 'Seattle',
//             zipCode: '98101'
//         }
//     },
//     {
//         id: 4,
//         name: 'David',
//         age: 25,
//         gender: 'Male',
//         city: 'Chicago',
//         occupation: 'Graphic Designer',
//         hobbies: ['Drawing', 'Playing Guitar'],
//         languages: ['English', 'German'],
//         address: {
//             street: '567 Pine Blvd',
//             city: 'Chicago',
//             zipCode: '60611'
//         }
//     },
//     {
//         id: 5,
//         name: 'Eve',
//         age: 27,
//         gender: 'Female',
//         city: 'Boston',
//         occupation: 'Marketing Manager',
//         hobbies: ['Running', 'Yoga'],
//         languages: ['English', 'Italian'],
//         address: {
//             street: '234 Cedar Ave',
//             city: 'Boston',
//             zipCode: '02101'
//         }
//     },
//     {
//         id: 6,
//         name: 'Frank',
//         age: 32,
//         gender: 'Male',
//         city: 'Los Angeles',
//         occupation: 'Actor',
//         hobbies: ['Acting', 'Singing'],
//         languages: ['English', 'Spanish'],
//         address: {
//             street: '890 Maple St',
//             city: 'Los Angeles',
//             zipCode: '90001'
//         }
//     },
//     {
//         id: 7,
//         name: 'Grace',
//         age: 29,
//         gender: 'Female',
//         city: 'Austin',
//         occupation: 'Writer',
//         hobbies: ['Writing', 'Reading'],
//         languages: ['English', 'French'],
//         address: {
//             street: '345 Pine Ave',
//             city: 'Austin',
//             zipCode: '78701'
//         }
//     },
//     {
//         id: 8,
//         name: 'Henry',
//         age: 31,
//         gender: 'Male',
//         city: 'Denver',
//         occupation: 'Engineer',
//         hobbies: ['Cycling', 'Woodworking'],
//         languages: ['English', 'German'],
//         address: {
//             street: '678 Oak St',
//             city: 'Denver',
//             zipCode: '80202'
//         }
//     },
//     {
//         id: 9,
//         name: 'Ivy',
//         age: 26,
//         gender: 'Female',
//         city: 'Portland',
//         occupation: 'Artist',
//         hobbies: ['Painting', 'Sculpting'],
//         languages: ['Gujarati', 'Japanese'],
//         address: {
//             street: '456 Elm Ave',
//             city: 'Portland',
//             zipCode: '97201'
//         }
//     },
//     {
//         id: 10,
//         name: 'Jack',
//         age: 33,
//         gender: 'Male',
//         city: 'Miami',
//         occupation: 'Entrepreneur',
//         hobbies: ['Swimming', 'Traveling'],
//         languages: ['English', 'Spanish'],
//         address: {
//             street: '789 Cedar Blvd',
//             city: 'Miami',
//             zipCode: '33101'
//         }
//     }
// ];

// console.log(persons);

// var lan = 'English';
// var ans =  persons.every(
//     (v)=>{
//         return v.languages.includes(lan);
//     }
// );
// console.log(ans);




// var oc = 'Engineer';
// var all =  persons.some(
//     (v)=>{
//         return v.occupation == oc;
//     }
// );
// console.log(all);



// var a = [];
// var b = 13;

// // console.log(a && b);
// console.log(a || b);



// 1   1   1
// 1   0   0
// 0   1   0
// 0   0   0   


// 1   1   1
// 1   0   1
// 0   1   1
// 0   0   0   

const cars = [
    {
      id: 1,
      brand: 'Toyota',
      model: 'Camry',
      year: 2022,
      color: 'Silver',
      price: 25000,
      features: ['Automatic transmission', 'Bluetooth connectivity', 'Backup camera'],
      owner: {
        name: 'Alice',
        age: 35,
        city: 'Los Angeles'
      }
    },
    {
      id: 2,
      brand: 'Honda',
      model: 'Civic',
      year: 2020,
      color: 'Blue',
      price: 20000,
      features: ['Manual transmission', 'Apple CarPlay', 'Lane departure warning'],
      owner: {
        name: 'Bob',
        age: 30,
        city: 'New York'
      }
    },
    {
      id: 3,
      brand: 'Ford',
      model: 'F-150',
      year: 2021,
      color: 'Black',
      price: 35000,
      features: ['4-wheel drive', 'Towing package', 'Navigation system'],
      owner: {
        name: 'Charlie',
        age: 40,
        city: 'Chicago'
      }
    },
    {
      id: 4,
      brand: 'Tesla',
      model: 'Model S',
      year: 2023,
      color: 'Red',
      price: 80000,
      features: ['Electric drive', 'Autopilot', 'Panoramic sunroof'],
      owner: {
        name: 'David',
        age: 45,
        city: 'San Francisco'
      }
    },
    {
      id: 5,
      brand: 'BMW',
      model: 'X5',
      year: 2020,
      color: 'White',
      price: 60000,
      features: ['Leather seats', 'Heated steering wheel', 'Premium audio system'],
      owner: {
        name: 'Eve',
        age: 38,
        city: 'Miami'
      }
    },
    {
      id: 6,
      brand: 'Chevrolet',
      model: 'Corvette',
      year: 2022,
      color: 'Yellow',
      price: 70000,
      features: ['Sports package', 'Performance exhaust', 'Convertible top'],
      owner: {
        name: 'Frank',
        age: 42,
        city: 'Seattle'
      }
    },
    {
      id: 7,
      brand: 'Mercedes-Benz',
      model: 'E-Class',
      year: 2021,
      color: 'Gray',
      price: 55000,
      features: ['Luxury package', 'Adaptive cruise control', 'Parking assist'],
      owner: {
        name: 'Grace',
        age: 37,
        city: 'Denver'
      }
    },
    {
      id: 8,
      brand: 'Audi',
      model: 'Q5',
      year: 2023,
      color: 'Green',
      price: 65000,
      features: ['All-wheel drive', 'Virtual cockpit', 'Wireless charging'],
      owner: {
        name: 'Henry',
        age: 39,
        city: 'Portland'
      }
    },
    {
      id: 9,
      brand: 'Lamborghini',
      model: 'Huracan',
      year: 2024,
      color: 'Orange',
      price: 300000,
      features: ['V10 engine', 'Carbon ceramic brakes', 'Launch control'],
      owner: {
        name: 'Ivy',
        age: 33,
        city: 'Austin'
      }
    },
    {
      id: 10,
      brand: 'Porsche',
      model: '911',
      year: 2022,
      color: 'Silver',
      price: 120000,
      features: ['Turbocharged engine', 'Sport Chrono package', 'Adaptive suspension'],
      owner: {
        name: 'Jack',
        age: 36,
        city: 'Boston'
      }
    }
  ];
  
  console.log(cars);
  