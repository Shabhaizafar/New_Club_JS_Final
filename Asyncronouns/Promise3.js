console.log(document);

var myPromise = new Promise(function(success,reject){
    setTimeout(() => {
        var obj1 = {
            msg : "promise Successfully Execute !!!",
            status : 404
        }
        var error = {
            msg : ""
        }
        if(obj1.status == 200){
            success(obj1.msg);
        }else{
            reject(error.msg);
        }
    }, 5000);
});

myPromise.then((data)=>{
    console.log(data);
},(err)=>{
    console.log(err);
});