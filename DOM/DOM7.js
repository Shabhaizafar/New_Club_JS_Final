const submit = document.querySelector('#submit');


//onclick,onmouseOver
            //  event,function
submit.addEventListener('click',
    (e)=>{
        e.preventDefault();
        const t1 = document.querySelector('table');
        
        // How to add Child element using JS ?
        const tr1 = document.createElement('tr');
        const td1 = document.createElement('td');
        const text = document.querySelector('#first-name').value;
        td1.append(text);
        tr1.appendChild(td1);
        t1.appendChild(tr1);
        console.log(t1);
});

