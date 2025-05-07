
function permutation(str,idx,res){

    if(idx == str.length){
        res.push(str);

        return;
    }

    for(let i=idx;i<str.length;i++){
        [str[idx],str[i]]=[str[i],str[idx]];

        permutation(str,idx+1,res);

        [str[idx],str[i]]=[str[i],str[idx]];

    }

}

function permutationCombination(str){
    let res=[];

    permutation(str,0,res);

    return res;
}

const str="abc";

console.log(permutationCombination(str));