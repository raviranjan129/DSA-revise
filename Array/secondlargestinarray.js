
function secondlargest(arr){

     let firstlargest= -Infinity;
     let secondlargest= -Infinity;

     for(let i=0;i<=arr.length-1;i++){
        if(arr[i]>firstlargest){
            secondlargest=firstlargest;
            firstlargest=arr[i];
            
        }else if(arr[i]<firstlargest && arr[i]>secondlargest){
            secondlargest=arr[i];
        }
     }
     return secondlargest;

}

const arr=[1,2,7,5,14,9];

console.log(secondlargest(arr));

