function div(a,b){
    if(a%b == 2){
        console.log(a);
    }
    else{
        div((a+2),(b-2));
    }
}
let c=2;
let d= 3;
div(c,d);