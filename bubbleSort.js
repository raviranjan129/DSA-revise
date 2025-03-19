
function BubbleSort(arr){
    let isSwapped=false;      //optimazation
    for(let i=0;i<arr.length;i++){  //for iteration
        
        for(let j=0;j<arr.length-i-1;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
                   isSwapped=true;
            }
        }
        // if no swapping means array is sorted;

        if(isSwapped==false){
            return;
        }
    }
}


let arr=[5,4,3,2,1];
BubbleSort(arr);
console.log(arr);