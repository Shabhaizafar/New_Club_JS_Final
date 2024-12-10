const btn = document.querySelector('button');
btn.addEventListener('click',function(event){
    event.preventDefault();
    
    const xhttp  = new XMLHttpRequest();
    var fname = document.querySelector('#fname').value;
    xhttp.open("GET","data.json");
    xhttp.onload = function (data){
        var obj = JSON.parse(data.target.response);
        for (const key in obj) {
            // console.log(key,obj[key].name);
            if(fname == obj[key].name){
                console.log(obj[key]);
                document.querySelector('div').innerHTML += "{"+'<br>';
                for (const key2 in obj[key]) {
                    document.querySelector('div').innerHTML += `${key2} : ${obj[key][key2]},<br>`;
                }
                document.querySelector('div').innerHTML += "}"+'<br>';
                break;
            }
        }
    }
    xhttp.send();
});