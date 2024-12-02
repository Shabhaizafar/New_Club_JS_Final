const btn = document.querySelector('button');

btn.onclick = function (){
    var xhttp = new XMLHttpRequest();

    xhttp.onload= function(data){
        document.body.innerHTML = `<pre>${data.target.response}</pre>`;
    };
    xhttp.open("GET","JavaScript.txt");
    xhttp.send();
}