// localStorage.setItem("Data1","Zafar");
// localStorage.setItem("Data2",123);


// console.log(localStorage);
// console.log(localStorage["Data2"]);
// console.log(localStorage.Data2);

// console.log(localStorage.getItem("Data2"));


// localStorage.clear();

// localStorage.removeItem('Data1');

const btn = document.querySelector('button');

btn.addEventListener('click',function(event){
    event.preventDefault();
    // console.log(document.querySelector('#fname').value);
    // console.log(document.querySelector('#age').value);
    console.log(document.querySelector('#gender').value);

    localStorage.setItem("Firstname",document.querySelector('#fname').value);
    localStorage.setItem("Age",document.querySelector('#age').value);
    localStorage.setItem("Gender",document.querySelector('#gender').value);



    location.href= "index.html";
});