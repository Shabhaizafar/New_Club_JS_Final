// 2. Multi-Level Inheritance
// Definition:
// Multi-level inheritance involves a chain of inheritance where a class or object inherits from another class or object, which itself inherits from yet another class or object. This forms a chain of inheritance.
/*
Base Class :   A (Parent Class)
               ↑
               |
Child Class :  B (inherit all the Property or Methods of A)   (as a Parent of C)
               ↑
               |
Child Class :  C (inherit all the Property or Methods of B) 
*/

/*
class GrandFather{
    constructor(gname){
        this.gname = gname;
    }
}
class Father extends GrandFather{
    constructor(fname,g){
        super(g);
        this.fname = fname;
    }
}
class Child extends Father{
    constructor(cname,fn,gn){
        super(fn,gn);
        this.cname = cname;
    }
    bioData = function (){
        console.log(`My Name is ${this.cname}.My Father Name is ${this.fname}.and My GrandFather Name is ${this.gname}.`);
    }
}


const c1 = new Child("Raj","Ajay","Rahul");

console.log(c1);
c1.bioData();
*/



/////////////////////////////////////////////////////
/*
Single-Level Inheritance:



Write a program to demonstrate single-level inheritance where a Child class inherits from a Parent class. The Parent class should have a method that the Child class overrides.
Constructor and Method Usage:

Implement a Vehicle class (Parent) with a constructor and a method. Create a Car class (Child) that inherits from Vehicle, and override the method. Show how to call both the base and overridden methods.
Accessing Base Class Members:

Write a program where a Base class has private, protected, and public members. Create a Derived class that inherits from Base and show which members are accessible.
Inheritance and Method Overriding:

Demonstrate method overriding by creating a Shape class with a method draw(). Create a Circle class that inherits from Shape and overrides the draw() method.
Inheritance and Multiple Instances:

Create a Book class with attributes like title and author. Derive a DigitalBook class from Book that adds an attribute for file size. Show how to create instances of both Book and DigitalBook.

*/
//////////////////////
/*
Multi-Level Inheritance:



Write a program with a three-level hierarchy where a Grandparent class is inherited by a Parent class, which in turn is inherited by a Child class. Include a method in each class and demonstrate how they are inherited.
Constructor Chain:

Implement a multi-level inheritance example where constructors are used in each level of inheritance. Show how constructors are called in a hierarchy of a Person class, a Student class, and a Graduate class.
Method Overriding in Multi-Level Inheritance:

Create a Vehicle class with a method start(). Derive a Car class from Vehicle, and then derive a ElectricCar class from Car. Override the start() method at the ElectricCar level and demonstrate method calls.
Multiple Inheritance Resolution:

In a multi-level inheritance scenario, create a Shape class, a 2DShape class, and a Rectangle class. Show how to handle method resolution when a method is present in more than one class in the hierarchy.
Multi-Level Inheritance and Data Members:

Write a program that demonstrates how data members are inherited through multiple levels. Create a Person class, an Employee class that inherits from Person, and a Manager class that inherits from Employee. Show how data members from each class are accessible in Manager.
*/