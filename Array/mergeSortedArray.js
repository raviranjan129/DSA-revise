
function merge(arr1,arr2){

    let n=arr1.length;
    let m=arr2.length;

    let left=n-1;
    let right=m-1;

    let idx=m+n-1;

    while(left>=0 && right>=0){
        if(arr2[right]>=arr1[left]){
            arr1[idx]=arr2[right];
            right--;
            idx--;
        }else{
            arr1[idx]=arr1[left];
            left--;
            idx--;
        }
    }

    while(right>=0){
        arr1[idx]=arr2[right];
        right--;
        idx--;
    }

    while(left>=0){
        arr1[idx]=arr1[left];
        left--;
        idx--;
    }
return arr1;
}

let arr1=[1,3,5];
let arr2=[2,4,6];

console.log(merge(arr1,arr2));