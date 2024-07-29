
const squareOfsorted = function(s){

    let result = [];
let n=s.length;
    for(let i=0;i<=n-1;i++){
        result.push(s[i]**2);
    }
    result.sort((a,b)=>a-b);

    return result;
}

const s=[-4,-3,0,1,10,5];

console.log(squareOfsorted(s));