function getpromise(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("data 1")
        resolve("success");
        }, 4000);
    });
}

function getpromise2(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("data 2")
        resolve("success");
        }, 4000);
    });
}
console.log("fetching data ....");
let a=getpromise();
a.then((res)=>{
    console.log(res);
    let b=getpromise2();
    b.then((res)=>{
        console.log(res);

    })
});

