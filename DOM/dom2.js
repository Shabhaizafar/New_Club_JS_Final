// 1) using  getElementById
console.log("using  getElementById");
console.log(document.getElementById('id1'));
console.log("\n");

// 2) using  getElementByClassName
console.log("using  getElementByClassName");
console.log(document.getElementsByClassName('class1'));
console.log("\n");


// 3) using  getElementByTagName
console.log("using  getElementByTagName");
console.log(document.getElementsByTagName('p'));
console.log("\n");

//////////////////////////////////////
// 4) using  querySelector
console.log("using  querySelector");
console.log(document.querySelector('p'));//using Tag name
console.log(document.querySelector('#id1'));// ID
console.log(document.querySelector('.class1'));
console.log(document.querySelector('p.class1'));
console.log("\n");
// 5) using  querySelectorAll
console.log("using  querySelectorAll");
console.log(document.querySelectorAll('.class1'));
console.log(document.querySelectorAll('#id1')[1]);

console.log("\n");