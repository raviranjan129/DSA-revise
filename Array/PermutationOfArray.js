
function permutationCombination(arr,idx,ans){

    if(idx == arr.length){
        
        ans.push([...arr])
        return;
    }

    for(let i=idx;i<arr.length;i++){
        [arr[idx],arr[i]]=[arr[i],arr[idx]];

        permutationCombination(arr,idx+1,ans);

        [arr[idx],arr[i]]=[arr[i],arr[idx]];
    }
}


function permutation(arr){
    let ans=[];
    permutationCombination(arr,0,ans)
    return ans;
}

const arr=[1,2,3];

console.log(permutation(arr))