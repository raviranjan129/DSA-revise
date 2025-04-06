
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

function lowerBound(nums,target){
    let low=0;
    let high=nums.length-1;

    let ans=nums.length;

    while(low<=high){
        let mid=Math.floor((low+high)/2);

        if(nums[mid]<target){
            low=mid+1;
        }else{
            ans=mid;
            high=mid-1;
        }
    }
    return ans;
}


 function upperBound(nums,target){
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
   
   function searchRange(nums,target){
   
    let result = new Array(2);
    let lb = lowerBound(nums,target);

    if(lb==nums.length || nums[lb] !=target){
        result[0]=-1;
        result[1]=-1
        return result
    }


    
    let ub=upperBound(nums,target);
       result[0]=lb
       result[1]=ub-1;


    return result;

   }


let arr=[5,7,7,8,8,10]


console.log(searchRange(arr,8))