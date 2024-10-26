const div =document.querySelector('div');
const images = ["url('image1.jpeg')","url('image2.jpeg')","url('image3.jpeg')"];
var i = 0;
div.style.backgroundImage = images[i];
document.querySelector('.nxt').onclick = function (){
    i++;
    if(i==images.length)
        i=0;
     div.style.backgroundImage = images[i];
}
document.querySelector('.pvs').onclick = function (){
    if(i<=0)
        i=images.length;
    i--;
     div.style.backgroundImage = images[i];
}


   var st ;

document.querySelector('.stop').onclick = function(){
    clearInterval(st);
}
    
document.querySelector('.start').onclick = function (){
    st = setInterval(() => {
        i++;
        if(i==images.length)
            i=0;
         div.style.backgroundImage = images[i];  
    }, 1000);
}