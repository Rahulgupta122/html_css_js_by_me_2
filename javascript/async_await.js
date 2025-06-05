function getdata(data){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log(data);
            resolve("reject");
        }, 2000);

    });
}

async function getdaa(){
    await getdata(1);
    await getdata(2);
    await getdata(3);
    await getdata(4);
    await getdata(5);
}

getdaa();