/**
 *  4 4 4 4
 *  3 3 3
 *  2 2 
 *  1
 *  2 2
 *  3 3 3 
 *  4 4 4 4 
 */

    function mirrorPyramid(n){

        for(let i=n;i>=1;i--){
            for(let j=1;j<=i;j++){
                process.stdout.write(i.toString() + " ")
            }
            console.log()
        }

        for(let i=2;i<=n;i++){
            for(let j=1;j<=i;j++){
                process.stdout.write(i.toString() + " ")
            }
            console.log()
        }
    }

    let n=4
    mirrorPyramid(n)