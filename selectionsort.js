


function selectionSort(arr){

    for(let i=0;i<arr.length;i++){
let minIndex=findMinIndex(arr,i);

if(minIndex != i){
    let temp=arr[i];
    arr[i]=arr[minIndex];
    arr[minIndex]=temp;
}
    }
}

function findMinIndex(arr,i){
    let minidx=i;   //initially the min index is i (0);
    for(let j=i+1;j<arr.length;j++){
         
        if(arr[j] < arr[minidx]){
            minidx=j;
        }


    }
    return minidx;
}

let arr=[5,4,3,0,8,9,0,1,5];

selectionSort(arr);

console.log(arr);