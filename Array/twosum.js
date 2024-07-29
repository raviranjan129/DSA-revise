let twoSum=function(nums,target){
    let n=nums.length;

    for(let i = 0; i<=n-2;i++){
        for(let j=0;j<n;j++){
if(nums[i] + nums[j] == target){
    return [i,j];
}
        }
    }
}


const nums = [2,7,11,15];
const target = 9;

const ans = twoSum(nums,target);
console.log(ans);