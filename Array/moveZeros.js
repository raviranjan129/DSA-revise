
function moveZeros(arr){
    let i=0;

    for(let j=0;j<arr.length;j++){
        if(arr[i] ==0 && arr[j] !=0){
            [arr[i],arr[j]]=[arr[j],arr[i]];

            i++;
        }
    }
    return arr;
}

let arr=[0,1,0,3,12];

console.log(moveZeros(arr))