
function pyramid(n){
    for(let i=1;i<=n;i++){
        for(let j=1;j<=i;j++){
            process.stdout.write(j.toString() + " ");
        }
        console.log();
    }
}
const n=4;
pyramid(n);