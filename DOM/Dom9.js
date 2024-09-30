const btn = document.querySelector('button');
const img = document.querySelector('img');
btn.onclick = function (){
    img.attributes[0].value = "on.png";
    console.log(img.attributes[0].value);
}