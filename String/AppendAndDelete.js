
/**
 * if given k moves if you are able to delete unmatchint character the it should return true otherwise return false;
 * 
 * s-> initial string 
 * t-> desired string;
 * 
 * if extra moves then you need to operate on empty string so that it will balance;
 * 
 */


function AppendDelete(k,s,t){

    //first find common length of strings
    let commanLength=0;

    for(let i=0;i<s.length;i++){
        if(s[i]==t[i]){
            commanLength++;
        }else{
            break;
        }
    }

    let remainingLengthOfS=s.length-commanLength;
    let remainingLengthOfT=t.length-commanLength;


    if(k>=remainingLengthOfS+remainingLengthOfT && (k-remainingLengthOfS-remainingLengthOfT) % 2==0 || (k>=s.length+t.length)){
        return "Yes";
    }else{
        return "No"
    }

}

// let s="hackerhappy";

// let t="hackerrank";

// let k=9;

// let s="aba";
// let t="aba"

// let k=7;

let s="ashley";
let t="ash";

let k=2;

console.log(AppendDelete(k,s,t));