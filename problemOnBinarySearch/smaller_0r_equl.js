/**
 * interviewBit
 * 
 * Given an sorted array A of size N. Find number of elements which are less than or equal to B.

NOTE: Expected Time Complexity O(log N);

   Input 1:

 A = [1, 3, 4, 4, 6] -> nums array
 B = 4  -> target
 */

function smallerorEqual(nums,target){
    
    let low=0;
    let high=nums.length-1;

    let ans=nums.length;

    while(low<=high){
        let mid=Math.floor((low+high)/2);

        if(nums[mid]<=target){
            low=mid+1;
        }else{
            ans=mid;

            high=mid-1;
        }
    }
    return ans;
}

let nums= [1, 3, 4, 4, 6];


console.log(smallerorEqual(nums,4));