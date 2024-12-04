const btn = document.querySelector('button');

btn.onclick = function (){
    var xhttp = new XMLHttpRequest();

    xhttp.onload= function(data){
        // document.querySelector('div').innerHTML = `<pre>${data.target.response}</pre>`;
        var fruit = document.querySelector('input').value;
        if(data.target.response.includes(fruit)){
            console.log("Data Exist");
        }
        else{
            console.log("Data Doesn't Exist");
        }
    };
    xhttp.open("GET","example_1.json");
    xhttp.send();
}