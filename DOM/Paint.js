const body = document.body;

body.addEventListener('click',function (event){
   var clrpicker = event.target.value;

   event.target.classList.toggle('outline');
});