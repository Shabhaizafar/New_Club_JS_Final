//total words
var block = document.querySelector('div');
for (let i = 1;i<=parseInt(Math.random()*30+1); i++) {
    for (let j = 1; j <parseInt(Math.random()*10+1); j++) {
        block.innerHTML +=String.fromCharCode(97+parseInt(Math.random()*25));
    }
    block.innerHTML += `&nbsp;`;
}

// char  second loop
// console.log(parseInt(Math.random()*25));
