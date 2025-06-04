function getdata(data,nextdata){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {

        console.log("data",data);
        resolve("success")
        if(nextdata){
            nextdata();
        }

    }, 5000);
    })

}
let c=getdata(123);
c.then(()=>{
    console.log("successfull")
})

