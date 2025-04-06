
function lowerBound(arr,x){

    let low=0;
    let high=arr.length-1;

    let ans=arr.length;
    while(low<=high){
        let mid=Math.floor((low+high)/2);
  

        if(arr[mid] < x){
            low=mid+1;
        }else {
            ans=mid;   // we got a candiate ans which is >= x and we can find wetter on left side
            high=mid-1;
        }
       

    }
    return ans;
    
}

let arr=[1,1,2,2,2,3,4,4,4,5,7,8,9];

let x=5;

console.log(lowerBound(arr,x));