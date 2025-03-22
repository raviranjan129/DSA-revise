
function mergeTwoSortedArray(left,right){
     let result=[];
     let i=0;
     let j=0;
     let k=0;

     while(i<left.length && j<right.length){
        if(left[i]<right[j]){
            result[k]=left[i];
            i++;
            k++;
        }else{
            result[k]=right[j];
            j++;
            k++;
        }
     }
     while(i<left.length){
        result[k]=left[i];
        i++;
        k++;
     }
     while(j<right.length){
        result[k]=right[j];
        j++;
        k++;
     }
     return result;
}

function mergeSortHelper(arr,start,end){

    if(start==end){
        return [arr[start]];
    }

    let mid=Math.floor((start+end)/2);
    let left=mergeSortHelper(arr,start,mid);
    let right=mergeSortHelper(arr,mid+1,end);

    return mergeTwoSortedArray(left,right);
}

function mergeSort(arr){
     let sortedArray=mergeSortHelper(arr,0,arr.length-1);

     for(let i=0;i<sortedArray.length;i++){
        arr[i]=sortedArray[i];
     }
}

let arr=[-5,-6,5,6,76,0,-8,11,1];

mergeSort(arr);
console.log(arr);