let promise = new Promise(function(resolve,reject){
    //do a thing, possibly async, then
    if (true){
        resolve("Yeah you can run");
    }
    else {
        reject(Error("Oh no Error"));
    }
});

promise.then(function(result){
    console.log(result);
}, function(err){
    console.log(err);
})