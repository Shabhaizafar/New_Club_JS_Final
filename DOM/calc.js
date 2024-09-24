var lastop = '';
function getdata(value){
    var displyadata=document.querySelector('.txt').value;
    if(value=='.'){
        document.querySelector('.txt').value= (displyadata.endsWith('.'))? displyadata : displyadata+value;
        return 0;
    }  
    if(value>0){
        document.querySelector('.txt').value= (displyadata==0? '': displyadata) +value;
        return 0;
    }
    if(displyadata.startsWith('0')){
        document.querySelector('.txt').value= '0';
        return 0;
    }
    if(value=='DEL'){ 
        document.querySelector('.txt').value = displyadata.slice(0,displyadata.length-1);
        console.log(displyadata.length-1);
        if(displyadata.length==1){
            document.querySelector('.txt').value = '0';
        }
        return 0;
    }
}
function operation(op){
    var dis2 = document.querySelector('.dis2');
    var displyadata=document.querySelector('.txt').value;
    if(op=='+')
        {
            if(dis2.value.length==0)
            {
                dis2.value = 0+Number(displyadata);
            }
            else{
                dis2.value = Number(dis2.value)+Number(displyadata);
            }
            lastop = '+';
        }
        else if(op=='-')
        {
            if(dis2.value.length==0)
            {
                dis2.value = Number(displyadata);
            }
            else{
                dis2.value = Number(dis2.value)-Number(displyadata);
            }
            lastop = '-';
        }
    document.querySelector('.txt').value = '0';
}
function output(op){
    var dis2 = document.querySelector('.dis2');
    var displyadata=document.querySelector('.txt');       
    if(dis2.value!='')
    {
        if(lastop=='+')
        {
            displyadata.value = Number(dis2.value)+Number(displyadata.value);
            dis2.value = '';
        }
    }
}
function resetAll(){
    document.querySelector('.dis2').value = '';
    document.querySelector('.txt').value = '0';
}