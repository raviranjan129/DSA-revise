function pattern(n){
    for(let i=1;i<=n;i++){
            
        
        for(let j=1;j<=n-i;j++){
           
            process.stdout.write(" ");
        }

        for(let j=1;j<=i;j++){
            if(i%2==0)continue;
            process.stdout.write("*"+" ")
        }
        console.log();
    }

    for(let i=n-1;i>=1;i--){
        for(let j=1;j<=n-i;j++){
            process.stdout.write(" ");
        }

        for(let j=1;j<=i;j++){
            if(i%2==0)continue;
            process.stdout.write("*"+" ")
        }

        console.log()
    }
}
const n=5;

pattern(n);