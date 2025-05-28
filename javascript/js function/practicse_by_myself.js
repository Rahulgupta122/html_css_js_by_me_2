let n=Number(prompt("enter your array length"));
let a=[];
for(let i=0;i<n;i++){
    a[i]=Number(prompt("enter your value"));
}
a.forEach((val)=>{
    console.log(val);
})