
function test(n){
    for(let i=1;i<=n;i++){
        for(let j=0;j<2*i-1;j++){
            process.stdout.write(i.toString()+" ")
        }
        console.log()
    }
    for(let i=n-1;i>=1;i--){
        for(let j=0;j<2*i-1;j++){
            process.stdout.write(i.toString()+" ")
        }
        console.log()
    }
}
let n=4;
 
test(n)