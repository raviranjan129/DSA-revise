
function uniounOfTwoArray(arr1,arr2){
    let hasset=new Set();
    

    for(let i=0;i<arr1.length;i++){
        hasset.add(arr1[i]);
    }

    for(let i=0;i<arr2.length;i++){
        if(hasset.has(arr2[i])){
            continue;
        }else{
            hasset.add(arr2[i]);
        }

       

        
    }

    return Array.from(hasset);
}

let arr1=[1,1,2,3,4,5];

let arr2=[2,3,4,4,5,6];

console.log(uniounOfTwoArray(arr1,arr2));