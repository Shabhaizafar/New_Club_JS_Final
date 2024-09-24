//How to Create a Multiple Object 
const AllMethods = {
    Hello : function (){
        console.log(`Hello ${this.fname} ${this.lname}.`);
    },
    Greet : function (){
        console.log("Welcome Back.😃");
    }
}

function Person(fname,lname){
    var user = {};
    user.fname = fname;
    user.lname = lname;
    user.Hello = AllMethods.Hello;
    user.Greet = AllMethods.Greet;
    return user;
}

var p1 = Person("Raj","Patel");
var p2 = Person("Ajay","Shah");
console.log(p1);
console.log(p2);

p1.Hello();
p2.Hello();