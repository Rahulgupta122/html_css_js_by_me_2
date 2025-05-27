let price=[250,645,300,900,50];
for(let i=0;i<price.length;i++){
    let div=price[i]/10;
    price[i]=price[i]-div;

}
console.log(price);