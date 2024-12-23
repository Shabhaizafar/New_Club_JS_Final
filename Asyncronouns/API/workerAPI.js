const div = document.querySelector('div');
var w; //undefined
div.addEventListener('click',function(event){
    if(event.target.tagName == 'BUTTON'){
        if(event.target.innerHTML=="Start"){
            w = new Worker("worker.js");
        }else if(event.target.innerHTML=="Stop"){
            w.terminate();
        }
    }
});