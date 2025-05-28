let count=0;
let co=(msg)=>{
     for (let i = 0; i < msg.length; i++) {
        if (msg[i] === "a" || msg[i] === "e" || msg[i] === "i" || msg[i] === "o" || msg[i] === "u") {
            count++;
        }
    }
    return count;
}
let a=co("hello");
console.log(a);