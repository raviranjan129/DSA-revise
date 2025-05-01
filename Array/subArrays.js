function subarrays(arr){
let count=0;
    for(let i=0;i<arr.length;i++){
        let temp=[];
        for(let j=i;j<arr.length;j++){
               temp.push(arr[j]);
               count++; 

             console.log(temp);
        }
      
    }
   return count;
}

const arr=[1,2,3,4,5];
console.log(subarrays(arr));