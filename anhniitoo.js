let a = 13;

if(a < 2){
    console.log(false);
} else if(a === 2 || a === 3 || a === 5 || a === 7){
    console.log(true);
} else if((a % 2 === 0)(a % 3 === 0)(a % 5 === 0)(a % 7 === 0)){
    console.log(false);
} else{
    console.log(true);
}
