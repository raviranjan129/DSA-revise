
function minInRotatedArray(arr){
     let low=0;
     let high=arr.length-1;

     while(low<high){
        let mid=low+Math.floor((high-low)/2);

        if(arr[mid]>arr[high]){
            low=mid+1;
        }else{
            high=mid;
        }
     }

     return low;
}






console.log(minInRotatedArray([3,4,5,1,2]));