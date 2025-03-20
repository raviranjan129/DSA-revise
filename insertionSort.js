
function insertionSort(arr){
    for(let i=1;i<arr.length;i++){ //it will leave first element as sorted region
        let element=arr[i];
        let j;
        for(j=i-1;j>=0;j--){  //from sorted region compare the element with the unsorted region and then check .
            if(arr[j]>element){
                arr[j+1]=arr[j];
            }else{
                break;
            }
        }
        arr[j+1]=element;
    }
}

const arr=[5,4,3,2,1];

insertionSort(arr);

console.log(arr);