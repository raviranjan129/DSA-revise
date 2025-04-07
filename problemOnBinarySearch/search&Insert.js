/**
 * Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.
 */

function searchinsert(nums,target){
    let low=0;
    let high=nums.length-1;

    let ans=nums.length;

    while(low<=high){
        let mid=Math.floor((low+high)/2);

        if(nums[mid]==target){
            return mid;

        }else if(nums[mid]<target){
            low =mid+1;
        }else{
            ans=mid; //
            high=mid-1;
        }
    }
    return ans;
}


let nums=[1,3,5,6];
target=2;

console.log(searchinsert(nums,target));