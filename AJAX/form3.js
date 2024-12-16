const btn = document.querySelector("button");

btn.addEventListener('click',function(event){
    event.preventDefault();
    const filet = document.querySelector('#file').value;
    const datet = document.querySelector('#date').value;

    localStorage.setItem("File",filet.split('\\')[filet.split('\\').length-1]);
    localStorage.setItem("Date",datet);

    location.href = localStorage.getItem("File");
});

//  PDF ,PPT , : Same Folder   < Different 

