
/**
 * n-> totalcost
 * c-> price of choclate
 * m-> if you have given wrappers then you will get 1 choclates in free in given value of m;
 */


function choclateFest(n,c,m){
    let choclate=Math.floor(n/c);

    let wrappers=choclate;

    let extraChoclate=0;

    while(wrappers>=m){
        let newChoclates=Math.floor(wrappers/m);

        extraChoclate +=newChoclates;

        wrappers= wrappers%m + newChoclates;
    }

    return choclate + extraChoclate;
}


let n=15;
let c=3;
let m=2;

console.log(choclateFest(n,c,m));