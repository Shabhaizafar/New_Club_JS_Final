const btn = document.querySelector('button');
const div = document.querySelector('div');

// btn.onclick = function (){
//     if(div.classList.contains('newOne')){
//         div.classList.remove('newOne');
//     }else{
//         div.classList.add('newOne');
//     }
// }


btn.onclick = function (){
    div.classList.toggle('newOne');
}