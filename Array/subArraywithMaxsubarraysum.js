
//kdane's algorithm

function subarraywithmaxsum(arr){
    let currSum=arr[0];
    let maxsum=arr[0];

    for(let i=0;i<arr.length;i++){
        currSum=Math.max(arr[i], currSum+arr[i]);

        maxsum=Math.max(currSum,maxsum);

    }

    return maxsum;
}

const arr=[-2,1,-3,4,-1,2,1,-5,4];
console.log(subarraywithmaxsum(arr));