let a=document.createElement("button");
a.innerText='click me';

let b=document.querySelector("div");
// b.append(a);
// b.prepend(a);
b.after(a);