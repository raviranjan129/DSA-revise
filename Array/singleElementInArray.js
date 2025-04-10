/**
 * You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once.

Return the single element that appears only once.

Your solution must run in O(log n) time and O(1) space.
 */

function singleElement(nums){
    let low=0;
    let high=nums.length-1;

     while(low<=high){
         let mid=low+Math.floor((high-low)/2);

         if(nums[mid-1] !=nums[mid]  && nums[mid] !=nums[mid+1]){
            return nums[mid];
         }

         if(mid%2==0){  // it will check in the left part of the mid;
            if(nums[mid-1] == nums[mid]){
                high=mid-1;
            }else{
                low=mid+1;
            }
         }else{       // it will check in the right part of the mid;
            if(nums[mid-1] == nums[mid]){
                low=mid+1;
            }else{
                high=mid-1;
            }
         }
     }

}

//  let nums = [1,1,2,3,3,4,4,8,8];

let nums = [3,3,7,7,10,11,11];

 console.log(singleElement(nums));