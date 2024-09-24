// var a = 12;
// console.log("Value of A : ",a);
// console.log("Value of B : ",b);
// var b = 14;
// var a = 12;
// All();
// function All(){
//     console.log(a);
// }


// var n1 = 12;
// var n2 = 13;
// function All(a,b){
//     function inner(x,y){
//         return x+y;
//     }
//     inner(a,b);
// }
// var ans = All(n1,n2);
// console.log(ans);
// console.log(typeof All);

// var age = 24;
// let Pi = 3.14;
// var OuterMain = (a,b)=>{
//     console.log(a);
//     console.log(b);
//     var InnerMain = ()=>{
//         age = 30;
//         Pi  = 50;

//     console.log("Age In Inner :",age);
//     console.log("Pi In Inner :",Pi);
//     };
//     InnerMain();
//     console.log("Age After inner :",age);
//     console.log("Pi After Inner :",Pi);
// };
// OuterMain(age,Pi);
// console.log("Age After Main :",age);
// console.log("Pi After Main :",Pi);



var age = 24;
let Pi = 3.14;
var OuterMain = (a,b)=>{
    console.log(a);
    console.log(b);
    var InnerMain = ()=>{
        this.age = 30;
        this.Pi  = 50;
    console.log("Age In Inner :",age);
    console.log("Pi In Inner :",Pi);
    };
    InnerMain();
    console.log("Age After inner :",age);
    console.log("Pi After Inner :",Pi);
};
OuterMain(age,Pi);
console.log("Age After Main :",age);
console.log("Pi After Main :",Pi);

