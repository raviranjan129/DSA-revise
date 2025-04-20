function SearchInRotatedArray(arr,target){

    let low=0;
    let high=arr.length;

    while(low<=high){
        let mid=low+Math.floor((high-low)/2);

        if(arr[mid] == target){
            return mid;
        }

        if(arr[low]<=arr[mid]){
            if(target>=arr[low] && target<arr[mid]){
                high=mid-1;
            }else{
                low=mid+1;
            }
        }else{
            if(target<=arr[high] && target < arr[mid]){
                low=mid+1;
            }else{
                high=mid-1;
            }
        }
    }

    return -1;
} 


const arr=[4,5,6,7,0,1,2];

target=6;

console.log(SearchInRotatedArray(arr,target));