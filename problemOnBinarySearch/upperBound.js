
function upperBound(arr,target){
    let low=0;
    let high=arr.length-1;

    let ans=arr.length;

    while(low<=high){
        let mid=Math.floor((low+high)/2);

        if(arr[mid]<=target){
            low=mid+1;
        }else{
            ans=mid;

            high=mid-1;
        }
    }
    return ans;
}

let arr=[1,1,2,2,2,3,4,4,4,5,7,8,9];


console.log(upperBound(arr,5))