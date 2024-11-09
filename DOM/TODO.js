const btn = document.querySelector('.form-todo .btn');
const ul = document.querySelector('.todo-list');
btn.addEventListener('click',function(event){
    event.preventDefault();
    //document.querySelector('.form-todo input').value;   // input text Data 
    var newElement = ul.children[0];
    // ul.children[0].style.backgroundColor = "red";
    var newEl = document.createElement('li');
    newEl.append("sdftyu");
    ul.appendChild(newEl);
});