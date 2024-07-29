// 1 index based;

let  twoSum2 = function(nums,target){

    let n= nums.length;
    let i=0;
    let j=n-1;

    while(i<=j){
        if(nums[i]+nums[j]){
            return [i+1,j+1];  // 1 index 
        }else if(nums[i]+nums[j] >target){
            j--;
        }else{
            i++;
        }
    }
}

const nums = [2,3,4];
const target = 6;

const ans = twoSum2(nums,target);
console.log(ans);