const btn  = document.querySelector('button');
const marks = document.querySelector('#marks');
const span = document.querySelector('span');

btn.addEventListener('click',function(event){
    event.preventDefault();
    if(!marks.checkValidity()){
        span.innerHTML = marks.validationMessage;
    }else{
        span.innerHTML = "Validate Successfully";
    }
});