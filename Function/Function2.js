////////////////////////////////////////////////
// - Function Expression. // Anonymous Function
// 1) without Argument and without Return type
var Function_world = function (){
    console.log("Hello Everyone, Welcome to Javascript😃.");
}

// Function_world();
// Function_world();

// 2) with Argument and without Return type
function Function_Tour(place){  //perameter
    console.log("We are going to",place);
}
// Function_Tour("Paris");  //Argument  (Paris use as a Arg here)

// 3) without Argument and with Return type

function Function_Result(){
    var s1 = [70,60,40,75,35];
    var sum = 0;
    for (let i = 0; i < s1.length; i++) {
        sum+=s1[i];
    }
    if(sum>=250)
    {
        return "Pass🎉.Give me Party😋.";
    }
    else{
        return "Fail😔.Better Luck Next Time🤩.";
    }
}
var final = Function_Result();
// console.log("You are",final);

// 4) with Argument and with Return type
var Bad_Habbit= ["Sleeping in a Class Room","Eating FastFood"];
var Good_Habbit = ["Coding","Playing Cricket"];
function Function_Habbit(choice){ 
    if(Good_Habbit.includes(choice))
    {
        return "It's Good Habbit.";
    }
    else{
        return "It's Bad Habbit.";
    }
}

var output = Function_Habbit(Good_Habbit[0]);
// console.log(output);


//////////////////////////////////////////////////
/Arrow-Function/
// - Arrow Functions.
// 1) without Argument and without Return type
var Function_world =   ()=>{
    console.log("Hello Everyone, Welcome to Javascript😃.");
}

// Function_world();
// Function_world();

// 2) with Argument and without Return type
var Function_Tour =  place=>console.log("We are going to",place);

Function_Tour("Paris");  //Argument  (Paris use as a Arg here)

// 3) without Argument and with Return type

var Function_Result =  ()=>{
    var s1 = [70,60,40,75,35];
    var sum = 0;
    for (let i = 0; i < s1.length; i++) {
        sum+=s1[i];
    }
    if(sum>=250)
    {
        return "Pass🎉.Give me Party😋.";
    }
    else{
        return "Fail😔.Better Luck Next Time🤩.";
    }
}
var final = Function_Result();
// console.log("You are",final);

// 4) with Argument and with Return type
var Bad_Habbit= ["Sleeping in a Class Room","Eating FastFood"];
var Good_Habbit = ["Coding","Playing Cricket"];
var Function_Habbit =  (choice)=>{ 
    if(Good_Habbit.includes(choice))
    {
        return "It's Good Habbit.";
    }
    else{
        return "It's Bad Habbit.";
    }
}

var output = Function_Habbit(Bad_Habbit[0]);
console.log(output);


