
function palindromic(n){
    for(let i=1;i<=n;i++){
       
        for(let j=1;j<=n-i;j++){
            process.stdout.write("  ");
        }

        for(let j=i;j>=1;j--){
            process.stdout.write(j.toString()+" ")
            
        }
        
        for(let j=2;j<=i;j++){
            
            process.stdout.write(j.toString() + " ")
        }

        console.log();
    }
}

const n=5

palindromic(n);