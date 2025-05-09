
function binarySearch(nums,target){
    let low=0;
    let high=nums.length-1;

    while(low<=high){
        let mid=low + Math.floor((high-low)/2);

        if(nums[mid]===target){
            return mid;
        }else if(target>nums[mid]){
            low=mid+1;
        }else{
            high=mid-1;
        }
    }
    return -1; // for not found value;
}

let nums=[1,2,3,4,5,6,7,8,9];

let target=6;

console.log(binarySearch(nums,target));