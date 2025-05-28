let a=prompt("enter a value");
let b=[];
for(let i=0;i<a;i++){
    b[i]=Number(prompt("enter array value"));
}
b.forEach((val)=>{
    console.log(val**2);
});
