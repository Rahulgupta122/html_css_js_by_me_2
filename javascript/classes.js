class car{
    constructor(a){
        console.log(`object creater ${a}`);

    }
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }

}

let fotuner=new car();
fotuner.start();
let lexus=new car("hello");