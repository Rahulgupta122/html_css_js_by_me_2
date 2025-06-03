let userscore=0;
let comscore=0;

let choices=document.querySelectorAll(".im");


let gencom=()=>{
    let arr=["rock","paper","scissor"];
    let val=Math.floor(Math.random()*3);
    return arr[val];
}

let draw=()=>{
   


    let dre=document.querySelector("#msg");
    dre.innerText = "Draw";
     dre.style.backgroundColor="grey"
    dre.style.color="white"

}
let win=()=>{
    
    userscore++;
    let ui=document.querySelector("#user-score");
    ui.innerText=userscore;
     let dri=document.querySelector("#msg");
    dri.innerText="Win";
     dri.style.backgroundColor="green"
    dri.style.color="white"
    
}
let loose=()=>{
    comscore++;
    let co=document.querySelector("#com-score");
    co.innerText=comscore;
     let drp=document.querySelector("#msg");
    drp.innerText="Loose"
    drp.style.backgroundColor="red"
    drp.style.color="white"
}


let playgame=(userchoice)=>{
    console.log(userchoice);
    let comchoice=gencom();
    console.log(comchoice);
    if(userchoice===comchoice){
        draw();
    }
    else{
        if(userchoice==="rock"&& comchoice==="scissor"){
            win();
        }
        else if(userchoice==="paper" && comchoice==="rock"){
            win();
        }
        else if(userchoice==="scissor"&& comchoice==="paper"){
            win();
        }
        else if(userchoice==="scissor"&& comchoice==="rock"){
            loose();
        }
        
        else if(userchoice==="rock"&& comchoice==="paper"){
            loose();
        }
        else if(userchoice==="paper"&& comchoice==="scissor"){
            loose();
        }
        
    }

    


}



choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);

    });
});