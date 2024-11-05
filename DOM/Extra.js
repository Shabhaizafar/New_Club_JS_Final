var u_main = document.querySelectorAll('main')[0];
const c_main = document.querySelectorAll('main')[1];

const Arr = ["url('1.png')","Paper","Scissor"];
function btnclick(value){
    if(value=='rock'){
        u_main.style.backgroundImage = "url('1.png')";
        c_main.style.backgroundImage = `${Arr[parseInt(Math.random()*3)]}`;
    }else if(value=='scissor'){
        u_main.innerHTML = 'Scissor';
        c_main.innerHTML = `${Arr[parseInt(Math.random()*3)]}`;
    }else if(value == "paper"){
        u_main.innerHTML = 'Paper';
        c_main.innerHTML = `${Arr[parseInt(Math.random()*3)]}`;
    }
}