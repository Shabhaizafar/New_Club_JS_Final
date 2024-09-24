// - Method overriding.
// class Father{
//     fathername = "Ajay Bhai";
//     drive = function (){
//         console.log("Ride a Car.");
//     }
// }

// class Child extends Father{
//     childname = "Raj";
//     bio = function (){
//         console.log(`Hello Everyone,My Name is ${this.childname}.and My Father Name is ${this.fathername}`);
//     }
//     drive = function (){
//         console.log("Ride a Bike");
//     }
// }

// const c1 = new Child();
// console.log(c1);
// c1.bio();
// c1.drive();






// - Method overloading.

// class Child{
//     childname = "Raj";
//     bio = function (){
//         console.log(`Hello Everyone,My Name is ${this.childname}`);
//     }
//     drive = function (){
//         console.log("Ride a Bike");
//     }
    
// }

// const c1 = new Child();
// console.log(c1);
// c1.bio();
// c1.drive();


// c1.drive = function (){
//     console.log("Drive a Car!!");
// }

// c1.drive();



// const c2 = new Child();
// c2.drive();



///////////////////////////////////////////////////
// Getters and setters.




class Child{
    childname = "Raj";
    bio = function (){
        console.log(`Hello Everyone,My Name is ${this.childname}`);
    }
    drive = function (){
        console.log("Ride a Bike");
    }
    get getData(){
        return this.childname;
    }
    set setData(temp){
        this.childname = temp;
    }
}
const c1 = new Child();
console.log(c1);

console.log(c1.getData);


c1.setData = "Ajay";
console.log(c1);

console.log(c1.getData);
