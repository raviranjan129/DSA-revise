
function hollowstar(n){

    for(let i=1;i<=n;i++){
        for(let j=1;j<=m;j++){
            if(i==1 || j==1 || i==n || j==m ){
                process.stdout.write("*" + " ")
            }else{
                process.stdout.write("  ")
            }

        }
        console.log()
    }
}

let n=4;
let m=5;

hollowstar(n,m);