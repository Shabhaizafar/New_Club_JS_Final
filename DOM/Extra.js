var u_main = document.querySelectorAll('main')[0];
const c_main = document.querySelectorAll('main')[1];
var span  = document.querySelector('span');
var audio = new Audio('audio.mp3');
const Arr = ["url('rock.png')","url('paper.png')","url('scissor.png')"];
function btnclick(value){
    if(value=='rock'){
        u_main.style.backgroundImage = "url('rock.png')";
        c_main.style.backgroundImage = `${Arr[parseInt(Math.random()*3)]}`;
    }else if(value=='scissor'){
        u_main.style.backgroundImage = "url('scissor.png')";
        c_main.style.backgroundImage = `${Arr[parseInt(Math.random()*3)]}`;
    }else if(value == "paper"){
        u_main.style.backgroundImage = "url('paper.png')";
        c_main.style.backgroundImage = `${Arr[parseInt(Math.random()*3)]}`;
    }

    
    if(u_main.style.backgroundImage.valueOf() != c_main.style.backgroundImage.valueOf()){
        //r and s
        if(u_main.style.backgroundImage.valueOf().length==15 && c_main.style.backgroundImage.valueOf().length==18){
            span.innerHTML= parseInt(span.innerHTML)+1;
            audio.play();
        }
    }
}