function butterfly(n){
    for(let i=1;i<=n;i++){
        for(let j=1;j<=i;j++){
            process.stdout.write("*"+ " ");
        }

        for(let j=1; j<=2*(n-i);j++){
            process.stdout.write("  ")
        }

        for(let j=1;j<=i;j++){
            process.stdout.write("*"+ " ");
        }

        console.log()
    }

    for(let i=n;i>=1;i--){
        for(let j=1;j<=i;j++){
            process.stdout.write("*" + " ");
        }
        for(let j=1; j<=2*(n-i);j++){
            process.stdout.write("  ")
        }

        for(let j=1;j<=i;j++){
            process.stdout.write("*"+ " ");
        }

        console.log()
    }
}
const n=4;

butterfly(n);