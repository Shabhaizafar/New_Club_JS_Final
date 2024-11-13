const btn = document.querySelector('.form-todo .btn');
// const ul = document.querySelector('.todo-list');
const ul = document.getElementsByClassName('todo-list')[0];
const fistli = document.querySelector('.todo-list li').innerHTML;

btn.addEventListener('click',function(event){
    event.preventDefault();
    var newtxt = document.getElementById('usertxt').value;
    var span = document.createElement('span');
    //new Li
    var newLi = document.createElement('li');
    if(newtxt!=""){
    span.innerHTML = newtxt;
    newLi.appendChild(span);
    newLi.innerHTML += `<div class="todo-buttons">
            <button class="todo-btn done">Done</button>
            <button class="todo-btn remove">Remove</button>
            <button class="todo-btn update">Update</button>
          </div>`;
    ul.appendChild(newLi);
    document.getElementById('usertxt').value = "";
  }
});



ul.addEventListener('click',function(event){

    if(event.target.classList.contains('done')){
      event.target.parentElement.parentElement.firstElementChild.classList.add('completed');
    }
    else if(event.target.classList.contains('remove')){
      if(event.target.parentElement.parentElement.firstElementChild.classList.contains('completed')){
        event.target.parentElement.parentElement.remove();
      }
    }
    else if(event.target.classList.contains('update')){
        var newText = prompt("Enter the new Value : ");
        if(newText!=null){
          event.target.parentElement.parentElement.firstElementChild.innerHTML = newText;
        } 
    }
});
//same Child
// var newli = document.createElement('li');
//     newli.innerHTML = fistli;
//     ul.appendChild(newli);
//     console.log(fistli);


 //document.querySelector('.form-todo input').value;   // input text Data 
//  var newElement = ul.children[0];
 // ul.children[0].style.backgroundColor = "red";
 // var newEl = document.createElement('li');
//  var content = ul.childNodes[1];
 // newEl.appendChild(content);
//  console.log(content);
//  ul.appendChild(content);
 // console.log(ul.children[0]);
 // ul.appendChild(ul.children[0]);