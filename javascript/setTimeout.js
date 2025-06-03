function hello(){
    console.log("hello");
}
setTimeout(hello,2000);
setTimeout(() => {
   console.log("king") 
}, 4000);