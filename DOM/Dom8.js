var btn = document.querySelector('button');

btn.onclick = function (){
    var divClass = document.querySelector('div');
    // console.log(divClass.classList);  //New Property
    divClass.classList.remove('lightMode');
    divClass.classList.add('animation');
}