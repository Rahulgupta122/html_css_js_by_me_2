let choi=document.querySelectorAll(".mu");
choi.forEach((val)=>{
    val.addEventListener("click",()=>{
        const userchoice=val.getAttribute("id");
        playmusic(userchoice);

    });
});

let Drumop=()=>{
    let a=document.querySelector("#ad1");
    a.play();
}
let bongoo=()=>{
    let a=document.querySelector("#ad2");
    a.play();
}


let playmusic=(userchoice)=>{
    console.log(userchoice);
    
    if(userchoice==="drum"){
        Drumop();

    }
    else{
        bongoo();
    }
}