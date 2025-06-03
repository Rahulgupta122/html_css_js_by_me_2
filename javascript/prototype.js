let a={
    fname:"Rahul",
    b:function(){
        console.log("hello");

    }
}
let c={
    fame:"king",
    d(){
        console.log("hello world")
    }
}
c.__proto__=a;

console.log(c.fname);