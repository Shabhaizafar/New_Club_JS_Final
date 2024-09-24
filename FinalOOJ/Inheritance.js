// class Person{
//     constructor(fname,lname){
//         this.firstname =  fname;
//         this.lastname = lname;
//     }
// }

// const p1 = new Person("Ajay","Shah");


// class Boy{
//     constructor(fname){
//         this.firstname = fname;
//     }
// }
// const b1 = new Boy("Raj");

// console.log(p1);
// console.log(b1);

// 1. Single-Level Inheritance
// Definition:
// Single-level inheritance is the simplest form of inheritance, where a class or object directly inherits from another class or object. This means that one class or object (the child) inherits from another single class or object (the parent) without any intermediate classes or objects.

/*
Base Class :            A   (Parent Class)
                        ↑
                        |
                        |
                        |
Child Class :           B   (inherit property or Method A class)
*/
// class Person{
//     constructor(fname,lname){
//         this.fathername =  fname;
//         this.lastname = lname;
//     }
// }

// class Boy extends Person{
//     constructor(cname,fname,lname){
//         super(fname,lname);
//         this.childname = cname;
//     }
// }

// const boy1 = new Boy("Raj","Ajay","Patel");

// console.log(boy1);
// console.log(boy1.fathername);
// console.log(boy1.childname);

