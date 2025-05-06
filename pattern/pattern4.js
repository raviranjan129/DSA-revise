
function trianglepattern(n){
    for(let i=1;i<=n;i++){
        for(let j=1;j<=n-i;j++){
            process.stdout.write(" ");
        }

        for(let j=1;j<=i;j++){
            process.stdout.write(i.toString() +" ")
        }

        console.log()
    }
}
const n=5;

trianglepattern(n);