//How to Create a Multiple Object 
function Person(fname,lname){
    var user = {};
    user.fname = fname;
    user.lname = lname;
    user.Hello = function (){
        console.log(`Hello ${user.fname} ${user.lname}.`);
    };
    return user;
}

var p1 = Person("Raj","Patel");
var p2 = Person("Ajay","Shah");
console.log(p1);
console.log(p2);

p1.Hello();
p2.Hello();