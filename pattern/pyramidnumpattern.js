/**
 *  1
 *  2 3 
 *  4 5 6 
 *  7 8 9 10
 */


function pyramidnum(n){

    let num=1;
    
    for(let i=1;i<=n;i++){
        
        for(let j=1;j<=i;j++){
            process.stdout.write(num.toString() + " ");
           
            num++;
        }
        console.log()
    }
}


let n=4;

pyramidnum(n);