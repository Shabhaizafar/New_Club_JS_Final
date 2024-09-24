// How to Access  HTML Content : 

// innerHTML
// console.log(document.querySelector('h2').innerHTML);

// innerText
// console.log(document.querySelector('h2').innerText);

// textContent
// console.log(document.querySelector('h2').textContent);



// var p = document.querySelector('p');
// // console.log(h2);
// p.innerHTML = "This is a New Paragraph";


// document.write("<h1>This is a New Heading</h1>");

document.write("<h5 class='heading1'>Body :</h5>");
document.write("<h5 class='heading2'>H2 :</h5>");
document.write("<h5 class='heading3'>P : </h5>");

var bodyt =  document.querySelector('.heading1').innerText;//Body :
var h2t = document.querySelector('.heading2').innerText;//H2 :
var pt = document.querySelector('.heading3').innerText; //P :




function changeColor(){
    var clr1 = `rgb(${parseInt(Math.random()*255)},${parseInt(Math.random()*255)},${parseInt(Math.random()*255)})`;
    var clr2 = `rgb(${parseInt(Math.random()*255)},${parseInt(Math.random()*255)},${parseInt(Math.random()*255)})`;
    var clr3 = `rgb(${parseInt(Math.random()*255)},${parseInt(Math.random()*255)},${parseInt(Math.random()*255)})`;
    document.body.style.backgroundColor = clr1;
    document.querySelector('h2').style.color =clr2;
    document.querySelector('p').style.color = clr3;

    document.querySelector('.heading1').innerHTML = bodyt+clr1;
    document.querySelector('.heading2').innerHTML = h2t+clr2;
    document.querySelector('.heading3').innerHTML = pt+clr3;

    
}