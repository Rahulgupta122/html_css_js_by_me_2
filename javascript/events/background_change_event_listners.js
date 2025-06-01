let a=document.querySelector("#bt1");
let a2=document.querySelector("#bt2");
let b=document.querySelector("body");
a.addEventListener("click",()=>{
    b.style.backgroundColor='black'
})
a.addEventListener("click",()=>{
    let a1=document.createElement("h1");
    a1.innerHTML="<i>hello rahul</i>"
    let c=document.querySelector("#bt1");
    a1.style.color="white";
    c.before(a1);

});

a2.addEventListener("click",()=>{
    b.style.backgroundColor='white'
})
a2.addEventListener("click",()=>{
    let a3=document.createElement("h1");
    a3.innerHTML="<i>hello gupta</i>"
    let c1=document.querySelector("#bt2");
    a3.style.color="black";
    c1.before(a3);

});


