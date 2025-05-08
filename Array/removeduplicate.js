
// function removeduplicate(arr){
//     let remdup=[...new Set(arr)];

//     return remdup;
// }

function removeduplicate(arr){
    let i=0;
    for(let j=1;j<arr.length;j++){
        if(arr[i] != arr[j]){
            i++;
            arr[i]=arr[j];
        }
    }

    return arr.slice(0,i+1);
}


const arr=[0,0,0,1,1,2,2,3];

console.log(removeduplicate(arr))