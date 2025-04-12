
function peakElement(nums){

     if(nums.length==1){
        return 0;
     }

    let low=0;
    let high=nums.length-1;

    

    while(low<=high){
        let mid=low+Math.floor((high-low)/2);

        if(nums[mid-1]<nums[mid] && nums[mid]>nums[mid+1]){
            return mid;
        }else if(mid==0 && nums[mid]>nums[mid+1]){
            return mid;
        }else if(mid==nums.length-1 && nums[mid] > nums[mid-1]){
            return mid;
        }else if(nums[mid-1] > nums[mid] && nums[mid]> nums[mid+1]){
            high=mid-1;
        }else{
            low=mid+1;
        }
    }
}


let nums=[1,0,3,6,5,2,7,1,2,5];

// let nums=[0,1];

console.log(peakElement(nums));