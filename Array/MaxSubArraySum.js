
// function maxSubArraySum(arr){
//     let maxSum=-Infinity;

//     for(let i=0;i<arr.length;i++){
//         let currSum=0;

//         for(let j=i;j<arr.length;j++){
//             currSum +=arr[j];

//             maxSum=Math.max(currSum,maxSum);
//         }
//     }
//     return maxSum;
// }


function maxSubArraySum(arr){    //kadane's algorithm O(n); 
    let maxSum=arr[0];
    let currSum=arr[0];

    for(let i=1;i<arr.length;i++){
       currSum=Math.max(arr[i],arr[i]+currSum);

       maxSum=Math.max(currSum,maxSum);
    }
    return maxSum;
}

const arr=[-2,1,-3,4,-1,2,1,-5,4];

console.log(maxSubArraySum(arr));

