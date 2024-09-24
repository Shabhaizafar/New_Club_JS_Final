
/////////////////////////////////////////////////////////////////////////////////////////
//How to Create a Multiple Object 

function Person(fname,lname){
    var user = Object.create(Person.prototype);
    user.fname = fname;
    user.lname = lname;
    return user;
}

Person.prototype.Hello = function (){
        console.log(`Hello ${this.fname} ${this.lname}.`);
    }
    console.log(Person.prototype);

var p1 = Person("Raj","Patel");
var p2 = Person("Ajay","Shah");
console.log(p1);
console.log(p2);

p1.Hello();
p2.Hello();