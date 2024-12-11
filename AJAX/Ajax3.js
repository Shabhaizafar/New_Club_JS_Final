const btn = document.querySelector('button');
const table = document.querySelector('table');
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
                // document.querySelector('div').innerHTML += "{"+'<br>';
                // for (const key2 in obj[key]) {
                    // document.querySelector('div').innerHTML += `${key2} : ${obj[key][key2]},<br>`;
                    // console.log(table);
                // }
                for (const key2 in obj[key]) {
                    var tr = document.createElement('tr');
                    var td = document.createElement('td');
                    var th = document.createElement('th');
                    th.innerHTML = key2;
                    td.innerHTML = obj[key][key2];

                    tr.appendChild(th);
                    tr.appendChild(td);
                    table.append(tr);
                }

                table.classList.add('bd');
                console.log(table);
                // document.querySelector('div').innerHTML += "}"+'<br>';
                break;
            }
        }
    }
    xhttp.send();
});