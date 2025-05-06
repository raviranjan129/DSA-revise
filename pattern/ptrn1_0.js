
function pattern(n){
    for(let i=1;i<=n;i++){
        for(let j=1;j<=i;j++){
            if((i+j)%2==0){
                process.stdout.write("1" + " ");
            }else{
                process.stdout.write("O" + " ");
            }
        }
        console.log()
    }
}

let n=5;

pattern(n);