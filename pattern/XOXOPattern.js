

function pattern(n){
    for(let i=1;i<=n;i++){
        for(let j=1;j<=n;j++){
            if((i+j)%2==0){
                process.stdout.write("X");
            }else{
                process.stdout.write("O");

            }
        
        }
        console.log()
    }


}


let n=4;

pattern(n);


