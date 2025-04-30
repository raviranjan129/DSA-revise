
function reversesentence(s){
    let result=s.trim().split(/\s+/);

    let low=0;
    let high=result.length-1;

    while(low<=high){
        let temp=result[low];
        result[low]=result[high];
        result[high]=temp;

        low++;
        high--;
    }

    let reversed=result.join(" ");

    return reversed;


}

let s="The quick brown fox";

console.log(reversesentence(s));