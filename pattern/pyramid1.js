/**
 *  *
 *  * *
 *  * * *
 *  * * * *
 *  * * * * *
 */

function pyramid(n){
    for(let i=1;i<=n;i++){

        for(let j=1;j<=i;j++){
            process.stdout.write("*")
        }
        console.log(" ")
        
    }
    
}

let n=5;

pyramid(n);