/**
 * s1-> first string
 * s2=> second string 
 * 
 * if there is common substring in s1 nd s2 then return yes otherwise return No;
 */

function substring(s1,s2){

    let result=new Set();

    for(let i=0;i<s1.length;i++){
        result.add(s1[i]);
    }

    for(let j=0;j<s2.length;j++){
        if(result.has(s2[j])){
            return "YES";
        }
    }

    return "NO";
}

let s1='helo';
let s2='world';

console.log(substring(s1,s2));