
function rightstarptrn(n){
    for(let i=1;i<=n;i++){

        //for space 
       for(let j=1;j<=n-i;j++){
        process.stdout.write("  ");
       }

       for(let j=1;j<=i;j++){
        process.stdout.write("*" + " ")
       }

       console.log();
    }
}
let n=4;

rightstarptrn(n);