let url= "https://api.thecatapi.com/v1/images/0XYvRd7oD";

let p= async()=>{
    console.log("fetching.....");
    let b=await fetch(url);
    console.log(b);
    let c=await b.json();

    console.log(c);

}
p();